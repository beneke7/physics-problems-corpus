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
assert.ok(cartSource.includes('number.textContent = `${index + 1}. `;'));
assert.match(cartSource, /window\.buildCorpusLatexPackage/);
assert.match(cartSource, /\\documentclass\[12pt\]\{article\}/);
assert.ok(cartSource.includes('\\\\includegraphics[width=0.85\\\\linewidth]'));
assert.match(cartSource, /Source: \$\{escapeLatex\(sourceLabel/);
assert.match(cartSource, /In cart · remove/);
assert.match(cartSource, /documentIndex >= 0 \? array\(info\?\.solution_documents\)/);
assert.ok(cartSource.includes('body>h1{margin:0 0 6px;text-align:center'));
assert.ok(cartSource.includes('@page{size:A4;margin:0}'));
assert.ok(cartSource.includes('max-width:90%;max-height:68vh'));
assert.ok(cartSource.includes('font-family:"Latin Modern Roman"'));
assert.ok(cartSource.includes('text-align:justify'));
for (const style of ["regular", "bold", "italic", "bolditalic"]) {
	const font = await readFile(new URL(`./assets/fonts/latin-modern-roman-${style}.woff`, import.meta.url));
	assert.equal(font.toString("ascii", 0, 4), "wOFF");
}
runInNewContext(cartSource, context);
assert.equal(context.window.corpusEscapeLatexText("A_b & $x_1$"), "A\\_b \\& $x_1$");
const archive = await context.window.createCorpusArchive([{name:"main.tex", bytes:new TextEncoder().encode("hello") }]);
const tar = gunzipSync(Buffer.from(await archive.arrayBuffer()));
assert.equal(new TextDecoder().decode(tar.subarray(0, 100)).split("\0")[0], "main.tex");
assert.equal(new TextDecoder().decode(tar.subarray(512, 517)), "hello");
await assert.rejects(context.window.createCorpusArchive([{name:"../escape", bytes:new Uint8Array()}]), /Invalid archive path/);

const textNode = (nodeValue) => ({nodeType:3, nodeValue});
const element = (tagName, childNodes) => ({nodeType:1, tagName, childNodes, children:childNodes, textContent:childNodes.map((node)=>node.nodeValue || node.textContent || "").join(""), getAttribute:()=>"", querySelectorAll:()=>[]});
context.document.createElement = () => ({set innerHTML(_html) { this.childNodes = [element("p", [textNode("A & B; use $x_1$ and "), element("strong", [textNode("bold")]), textNode(".")])]; }});
context.window.corpusRenderMarkdown = () => "<p>test</p>";
const latexArchive = await context.window.buildCorpusLatexPackage([{record:{source_name:"Test & Source",year:2026,problem:"P1"},document:"problem",info:{figures:[]},body:"ignored",figures:[]}], {title:"Test set",subtitle:"Short subtitle"});
const latexTar = gunzipSync(Buffer.from(await latexArchive.arrayBuffer()));
assert.equal(new TextDecoder().decode(latexTar.subarray(0, 100)).split("\0")[0], "main.tex");
const texSize = parseInt(new TextDecoder().decode(latexTar.subarray(124, 136)).replaceAll("\0", "").trim(), 8);
const tex = new TextDecoder().decode(latexTar.subarray(512, 512 + texSize));
assert.ok(tex.includes("\\begin{enumerate}"));
assert.ok(tex.includes("\\item A \\& B; use $x_1$ and \\textbf{bold}."));
assert.ok(tex.includes("Source: Test \\& Source"));
assert.ok(tex.includes("\\LARGE\\textbf{Test set}"));

const viewHtml = await readFile(new URL("./view.html", import.meta.url), "utf8");
assert.match(viewHtml, /id="document-tabs"/);
assert.match(viewHtml, /id="show-md"/);
assert.match(viewHtml, /id="categories"/);
assert.doesNotMatch(viewHtml, /<select id="document"/);
assert.doesNotMatch(viewHtml, /characters/);
