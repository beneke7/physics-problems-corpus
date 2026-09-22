import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {createRequire} from "node:module";
import {runInNewContext} from "node:vm";
import {gunzipSync} from "node:zlib";

const require = createRequire(import.meta.url), marked = require("./vendor/marked.umd.js");
const context = {window:{}, document:{querySelector:() => null}, marked, TextEncoder, TextDecoder, Uint8Array, Blob, Response, CompressionStream};
runInNewContext(await readFile(new URL("./render-markdown.js", import.meta.url), "utf8"), context);
const math = "Use $x^2$ and $5 \\mathrm{~cm} \\mathrm{~min}^{-1}$ here.";
const html = context.window.corpusRenderMarkdown(`${math}\n\n![](figure.png)`);
assert.match(html, /\$x\^2\$/);
assert.ok(html.includes("$5 \\mathrm{~cm} \\mathrm{~min}^{-1}$"));
assert.match(html, /<img[^>]+src="figure.png"/);

const cartSource = await readFile(new URL("./cart.js", import.meta.url), "utf8");
assert.doesNotMatch(cartSource, /break-before:\s*page/);
assert.match(cartSource, /Problem \$\{index \+ 1\}/);
assert.match(cartSource, /class="problem-source"/);
assert.ok(cartSource.includes('number.textContent = `${index + 1}. `;'));
assert.ok(cartSource.includes('${printProblemHtml(problem, index)}<p class="problem-source">'));
assert.ok(cartSource.includes('body>h1{margin:0 0 6px;text-align:center'));
assert.ok(cartSource.includes('@page{size:A4;margin:0}'));
runInNewContext(cartSource, context);
const archive = await context.window.createCorpusArchive([{name:"problems.md", bytes:new TextEncoder().encode("hello") }]);
const tar = gunzipSync(Buffer.from(await archive.arrayBuffer()));
assert.equal(new TextDecoder().decode(tar.subarray(0, 100)).split("\0")[0], "problems.md");
assert.equal(new TextDecoder().decode(tar.subarray(512, 517)), "hello");
await assert.rejects(context.window.createCorpusArchive([{name:"../escape", bytes:new Uint8Array()}]), /Invalid archive path/);
