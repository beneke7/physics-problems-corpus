(() => {
	const array = (value) => Array.isArray(value) ? value : [];
	const documents = ["problem", "en", "hu"];
	const storageKey = "physics-problem-cart-v1";
	const rawFigureBase = "https://raw.githubusercontent.com/beneke7/physics-problems-corpus/master/internal/";
	const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

	function tarHeader(name, size) {
		const header = new Uint8Array(512), encoder = new TextEncoder();
		const put = (at, width, value) => header.set(encoder.encode(value).slice(0, width), at);
		const octal = (value, width) => value.toString(8).padStart(width - 1, "0") + "\0";
		put(0, 100, name); put(100, 8, "0000644\0"); put(108, 8, "0000000\0"); put(116, 8, "0000000\0");
		put(124, 12, octal(size, 12)); put(136, 12, octal(Math.floor(Date.now() / 1000), 12)); header.fill(32, 148, 156); header[156] = 48;
		put(257, 6, "ustar\0"); put(263, 2, "00");
		const checksum = header.reduce((sum, byte) => sum + byte, 0);
		put(148, 8, `${checksum.toString(8).padStart(6, "0")}\0 `);
		return header;
	}
	window.createCorpusArchive = async (files) => {
		const chunks = [];
		for (const {name, bytes} of files) {
			if (!name || name.startsWith("/") || name.split("/").includes("..") || new TextEncoder().encode(name).length > 100) throw new Error(`Invalid archive path: ${name}`);
			chunks.push(tarHeader(name, bytes.length), bytes, new Uint8Array((512 - bytes.length % 512) % 512));
		}
		chunks.push(new Uint8Array(1024));
		return new Response(new Blob(chunks).stream().pipeThrough(new CompressionStream("gzip"))).blob();
	};

	const header = document.querySelector(".header-actions");
	if (!header) return;
	const cartButton = document.createElement("button");
	cartButton.className = "cart-icon"; cartButton.type = "button"; cartButton.setAttribute("aria-haspopup", "dialog");
	cartButton.innerHTML = '<span aria-hidden="true">🛒</span><span class="cart-count">0</span>';
	header.append(cartButton);

	const dialog = document.createElement("dialog"); dialog.id = "cart-dialog";
	dialog.setAttribute("aria-labelledby", "cart-heading-title");
	dialog.innerHTML = `<div class="cart-heading"><h2 id="cart-heading-title">Problem cart</h2><button id="cart-close" type="button" aria-label="Close cart">×</button></div>
		<ol id="cart-items"></ol>
		<div class="cart-fields"><label>Title<input id="cart-title" maxlength="160" placeholder="Physics problem set"></label>
		<label>Subtitle<textarea id="cart-subtitle" maxlength="500" placeholder="Optional"></textarea></label></div>
		<div class="cart-actions"><button id="cart-clear" type="button">Clear cart</button><button id="cart-markdown" type="button">Download Markdown + figures</button><button id="cart-pdf" type="button">Print / save PDF</button></div>
		<p id="cart-status" aria-live="polite"></p>`;
	document.body.append(dialog);

	function readState() {
		try {
			const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
			const items = Array.isArray(saved.items) ? saved.items : [];
			return {
				items: [...new Map(items.map((item) => {
					const normalized = typeof item === "string" ? {id:item, document:"problem"} : {id:String(item.id || ""), document:documents.includes(item.document) ? item.document : "problem"};
					return [normalized.id, normalized];
				}).filter(([id]) => id)).values()],
				title: typeof saved.title === "string" ? saved.title : "",
				subtitle: typeof saved.subtitle === "string" ? saved.subtitle : ""
			};
		} catch (_) { return {items:[], title:"", subtitle:""}; }
	}
	let state = readState(), dataPromise;
	const count = cartButton.querySelector(".cart-count"), list = dialog.querySelector("#cart-items"), status = dialog.querySelector("#cart-status");
	const titleInput = dialog.querySelector("#cart-title"), subtitleInput = dialog.querySelector("#cart-subtitle");
	titleInput.value = state.title; subtitleInput.value = state.subtitle;

	function save() {
		try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) {}
		refreshButtons();
	}
	function selectedDocument(button) { return documents.includes(button.dataset.cartDoc) ? button.dataset.cartDoc : "problem"; }
	function refreshButtons() {
		count.textContent = state.items.length;
		cartButton.setAttribute("aria-label", `Open problem cart, ${state.items.length} item${state.items.length === 1 ? "" : "s"}`);
		document.querySelectorAll("[data-cart-add]").forEach((button) => {
			const item = state.items.find((entry) => entry.id === button.dataset.cartAdd), doc = selectedDocument(button);
			button.textContent = !item ? "Add to cart" : item.document === doc ? "In cart · remove" : "Use this version";
			button.setAttribute("aria-pressed", String(Boolean(item && item.document === doc)));
		});
		const empty = state.items.length === 0;
		for (const id of ["cart-clear", "cart-markdown", "cart-pdf"]) dialog.querySelector(`#${id}`).disabled = empty;
	}
	window.refreshCorpusCartButtons = refreshButtons;
	function getData() {
		if (!dataPromise) dataPromise = Promise.all([
			fetch(new URL("../catalog.json", location.href)).then((response) => { if (!response.ok) throw new Error("Catalogue unavailable"); return response.json(); }),
			fetch(new URL("manifest.json", location.href)).then((response) => { if (!response.ok) throw new Error("Document manifest unavailable"); return response.json(); })
		]);
		return dataPromise;
	}
	function label(record, documentKey) {
		const parts = [record?.source_name || record?.source, record?.handout, record?.year, record?.problem, record?.title].filter(Boolean);
		const version = {en:"English", hu:"Hungarian"}[documentKey];
		return `${parts.join(" · ") || record?.id || "Problem"}${version ? ` · ${version}` : ""}`;
	}
	function sourceLabel(record, documentKey) {
		const parts = [record?.source_name || record?.source, record?.handout, record?.year, record?.problem].filter(Boolean);
		const version = {en:"English", hu:"Hungarian"}[documentKey];
		return `${parts.join(" · ") || record?.id || "Unknown source"}${version ? ` · ${version}` : ""}`;
	}
	function renderList(records) {
		list.replaceChildren();
		if (!state.items.length) { const empty = document.createElement("li"); empty.textContent = "Your cart is empty."; list.append(empty); return; }
		state.items.forEach((item, index) => {
			const row = document.createElement("li"), name = document.createElement("span"), controls = document.createElement("div");
			row.className = "cart-item"; name.className = "cart-item-label"; name.textContent = label(records.get(item.id), item.document); controls.className = "cart-item-actions";
			for (const [action, glyph, text] of [["up", "↑", "Move up"], ["down", "↓", "Move down"], ["remove", "×", "Remove"]]) {
				const button = document.createElement("button"); button.type = "button"; button.textContent = glyph; button.title = text; button.setAttribute("aria-label", `${text}: ${name.textContent}`); button.dataset.cartAction = action; button.dataset.index = index;
				if ((action === "up" && index === 0) || (action === "down" && index === state.items.length - 1)) button.disabled = true;
				controls.append(button);
			}
			row.append(name, controls); list.append(row);
		});
	}
	async function renderCart() {
		titleInput.value = state.title; subtitleInput.value = state.subtitle;
		if (!state.items.length) { renderList(new Map()); status.textContent = ""; refreshButtons(); return; }
		status.textContent = "Loading cart…";
		try {
			const [catalog] = await getData(), records = new Map(array(catalog.records).map((record) => [record.id, record]));
			renderList(records); status.textContent = "";
		} catch (_) { renderList(new Map()); status.textContent = "Could not load cart details."; }
		refreshButtons();
	}
	function cartChange(id, doc) {
		const index = state.items.findIndex((item) => item.id === id);
		if (index < 0) state.items.push({id, document:doc});
		else if (state.items[index].document === doc) state.items.splice(index, 1);
		else state.items[index].document = doc;
		save(); if (dialog.open) renderCart();
	}
	function basename(path) { try { return decodeURIComponent(path.split(/[?#]/)[0].split("/").pop() || ""); } catch (_) { return path.split("/").pop() || ""; } }
	function resolveFigure(src, info) {
		const clean = src.trim().split(/\s+/)[0].replace(/^<|>$/g, "");
		if (/^https?:\/\//i.test(clean)) return clean;
		return array(info.figures).find((path) => basename(path) === basename(clean)) || clean;
	}
	function packageFigurePath(path) {
		if (!path.startsWith("content/figures/")) throw new Error(`Figure is not locally indexed: ${path}`);
		const relative = path.slice("content/figures/".length);
		if (!relative || relative.split("/").some((part) => !part || part === "." || part === "..")) throw new Error(`Invalid figure path: ${path}`);
		return `figures/${relative}`;
	}
	function figureUrl(path) { return path.startsWith("content/figures/solution-ocr/") ? rawFigureBase + path : new URL(path, location.href).href; }
	function cleanBody(body) { return body.replace(/^---\n[\s\S]*?\n---\n?/, "").replace(/\r\n?/g, "\n").replace(/\f/g, "\n\n").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\ufffd]/g, " "); }
	async function collectProblems() {
		const [catalog, manifest] = await getData(), records = new Map(array(catalog.records).map((record) => [record.id, record])), problems = [];
		for (const item of state.items) {
			const record = records.get(item.id), info = manifest.records?.[item.id], path = info?.[item.document] || info?.problem || info?.en || info?.hu;
			if (!record || !path) throw new Error(`Problem document missing: ${item.id}`);
			const response = await fetch(new URL(path, location.href)); if (!response.ok) throw new Error(`Could not load: ${item.id}`);
			const body = cleanBody(await response.text()), refs = [...body.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((match) => resolveFigure(match[1], info));
			const figures = [...new Set([...array(info.figures), ...refs])].filter((figure) => !/^https?:\/\//i.test(figure));
			problems.push({id:item.id, document:item.document, record, info, body, figures});
		}
		return problems;
	}
	function latexImage(path) { return `\\begin{center}\n\\includegraphics[width=\\linewidth]{\\detokenize{${packageFigurePath(path)}}}\n\\end{center}`; }
	function packageMarkdown(problems) {
		const title = state.title.trim() || "Physics problem set", lines = [`# ${title}`, ""];
		if (state.subtitle.trim()) lines.push(state.subtitle.trim(), "");
		lines.push("<!-- LaTeX figures require \\usepackage{graphicx} in your preamble. -->", "");
		const files = new Map();
		for (const [index, problem] of problems.entries()) {
			const used = new Set();
			let body = problem.body.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (whole, _alt, raw) => {
				const path = resolveFigure(raw, problem.info);
				if (/^https?:\/\//i.test(path)) return whole;
				const archivePath = packageFigurePath(path); used.add(path); files.set(path, archivePath);
				return `\n\n${latexImage(path)}\n\n`;
			});
			for (const path of problem.figures) if (!used.has(path)) { body += `\n\n${latexImage(path)}\n\n`; files.set(path, packageFigurePath(path)); }
			lines.push(`## Problem ${index + 1}`, "", `*Source: ${sourceLabel(problem.record, problem.document)}*`, "", body.trim(), "", "---", "");
		}
		return {markdown:lines.join("\n"), files};
	}
	function slug(value) { return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "physics-problems"; }
	function download(blob, name) { const url = URL.createObjectURL(blob), link = document.createElement("a"); link.href = url; link.download = name; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
	async function downloadMarkdown() {
		const problems = await collectProblems(), {markdown, files} = packageMarkdown(problems);
		const entries = [{name:"problems.md", bytes:new TextEncoder().encode(markdown)}];
		for (const [path, name] of files) {
			const response = await fetch(figureUrl(path)); if (!response.ok) throw new Error(`Could not load figure: ${basename(path)}`);
			entries.push({name, bytes:new Uint8Array(await response.arrayBuffer())});
		}
		download(await window.createCorpusArchive(entries), `${slug(state.title || "physics-problems")}.tar.gz`);
	}
	function printProblemHtml(problem) {
		const used = new Set();
		const body = problem.body.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (whole, alt, raw) => {
			const path = resolveFigure(raw, problem.info);
			if (/^https?:\/\//i.test(path)) return whole;
			used.add(path); return `![${alt}](${figureUrl(path)})`;
		});
		let html = window.corpusRenderMarkdown(body);
		for (const path of problem.figures) if (!used.has(path)) html += `<figure><img src="${escapeHtml(figureUrl(path))}" alt="${escapeHtml(basename(path))}"><figcaption>${escapeHtml(basename(path))}</figcaption></figure>`;
		return html;
	}
	async function printPdf() {
		const page = window.open("", "physics-problem-set-pdf");
		if (!page) throw new Error("Allow pop-ups to prepare the print/PDF view.");
		page.document.write("<!doctype html><html><head><meta charset=utf-8><title>Preparing PDF…</title></head><body>Preparing problem set…</body></html>");
		try {
			const problems = await collectProblems(), title = state.title.trim() || "Physics problem set", subtitle = state.subtitle.trim();
			const content = problems.map((problem, index) => `<section class="problem"><h2>Problem ${index + 1}</h2><p class="problem-source">Source: ${escapeHtml(sourceLabel(problem.record, problem.document))}</p>${printProblemHtml(problem)}</section>`).join("");
			const mathJaxConfig = {loader:{load:["[tex]/ams"]}, tex:{inlineMath:[["\\(","\\)"],["$","$"]], displayMath:[["\\[","\\]"],["$$","$$"]], packages:{"[+]" :["ams"]}}, options:{skipHtmlTags:["script","noscript","style","textarea","pre","code"]}, startup:{typeset:false}};
			page.document.open();
			page.document.write(`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
				<script>window.MathJax=${JSON.stringify(mathJaxConfig)};</script>
				<style>body{max-width:850px;margin:32px auto;padding:0 20px;color:#111;font:16px/1.5 Georgia,"Times New Roman",serif}h1{font-size:26px}.problem{margin:24px 0 30px}.problem h2{margin:0 0 2px;font-size:19px;break-after:avoid-page;page-break-after:avoid}.problem-source{margin:0 0 10px;color:#555;font-size:12px;font-style:italic;break-after:avoid-page;page-break-after:avoid}img{display:block;max-width:100%;max-height:80vh;height:auto;margin:16px auto;break-inside:avoid;page-break-inside:avoid}figure{text-align:center;break-inside:avoid;page-break-inside:avoid}figcaption{font-size:12px;color:#555}@page{margin:18mm}@media print{body{margin:0 auto;padding:0}}</style></head>
				<body><h1>${escapeHtml(title)}</h1>${subtitle ? `<p>${escapeHtml(subtitle).replace(/\n/g, "<br>")}</p>` : ""}${content}</body></html>`);
			page.document.close();
			const script = page.document.createElement("script"); script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
			await new Promise((resolve, reject) => {
				script.onload = async () => {
					try {
						await page.MathJax.startup.promise; await page.MathJax.typesetPromise();
						if (problems.some((problem) => window.corpusHasMath(problem.body)) && !page.document.querySelector("mjx-container")) throw new Error("Math was not typeset");
						await Promise.all([...page.document.images].map((image) => image.decode().catch(() => {})));
						await page.document.fonts?.ready;
						page.focus(); page.print(); resolve();
					} catch (_) { reject(new Error("Math rendering failed; PDF not printed.")); }
				};
				script.onerror = () => reject(new Error("Could not load MathJax; PDF not printed."));
			page.document.head.append(script);
			});
			return "Print dialog opened; choose Save as PDF.";
		} catch (error) {
			if (page.document.body) page.document.body.textContent = `Could not prepare print view: ${error.message}`;
			throw error;
		}
	}
	async function runAction(button, message, action) {
		button.disabled = true; status.textContent = message;
		try { status.textContent = await action() || "Ready."; }
		catch (error) { status.textContent = error.message || "Export failed."; }
		finally { button.disabled = false; refreshButtons(); }
	}

	cartButton.addEventListener("click", () => { dialog.showModal(); renderCart(); });
	dialog.querySelector("#cart-close").addEventListener("click", () => dialog.close());
	dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
	document.addEventListener("click", (event) => {
		const button = event.target.closest("[data-cart-add]"); if (!button) return;
		cartChange(button.dataset.cartAdd, selectedDocument(button));
	});
	list.addEventListener("click", (event) => {
		const button = event.target.closest("[data-cart-action]"); if (!button) return;
		const index = Number(button.dataset.index), action = button.dataset.cartAction;
		if (action === "remove") state.items.splice(index, 1);
		else if (action === "up" && index > 0) [state.items[index - 1], state.items[index]] = [state.items[index], state.items[index - 1]];
		else if (action === "down" && index < state.items.length - 1) [state.items[index + 1], state.items[index]] = [state.items[index], state.items[index + 1]];
		save(); renderCart();
	});
	titleInput.addEventListener("input", () => { state.title = titleInput.value; save(); });
	subtitleInput.addEventListener("input", () => { state.subtitle = subtitleInput.value; save(); });
	dialog.querySelector("#cart-clear").addEventListener("click", () => { state.items = []; save(); renderCart(); });
	dialog.querySelector("#cart-markdown").addEventListener("click", (event) => runAction(event.currentTarget, "Preparing Markdown package…", downloadMarkdown));
	dialog.querySelector("#cart-pdf").addEventListener("click", (event) => runAction(event.currentTarget, "Preparing print view…", printPdf));
	const currentId = new URLSearchParams(location.search).get("id"), currentButton = document.getElementById("cart-add-current");
	if (currentButton) {
		if (currentId) { currentButton.dataset.cartAdd = currentId; currentButton.hidden = false; } else currentButton.hidden = true;
		const documentSelect = document.getElementById("document");
		if (documentSelect) {
			currentButton.dataset.cartDoc = documents.includes(documentSelect.value) ? documentSelect.value : "problem";
		}
	}
	window.addEventListener("corpus-document-change", (event) => {
		if (currentButton) { currentButton.dataset.cartDoc = documents.includes(event.detail) ? event.detail : "problem"; refreshButtons(); }
	});
	window.addEventListener("storage", (event) => { if (event.key === storageKey) { state = readState(); save(); if (dialog.open) renderCart(); } });
	refreshButtons();
})();
