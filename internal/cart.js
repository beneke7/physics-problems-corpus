(() => {
	const array = (value) => Array.isArray(value) ? value : [];
	const isDocument = (key) => ["problem", "en", "hu", "solution", "solution_hu"].includes(key) || /^doc\d+$/.test(key || "");
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
	function escapeLatex(value) {
		return String(value).replace(/[\\{}$&#%_^~]/g, (char) => ({"\\":"\\textbackslash{}", "{":"\\{", "}":"\\}", "$":"\\$", "&":"\\&", "#":"\\#", "%":"\\%", "_":"\\_", "^":"\\textasciicircum{}", "~":"\\textasciitilde{}"})[char]);
	}
	function latexText(value) {
		return String(value).split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|(?<!\\)\$(?!\$)[^$\n]*?\$)/g).map((part) => {
			if ((part.startsWith("\\(") && part.endsWith("\\)")) || (part.startsWith("\\[") && part.endsWith("\\]")) || (part.startsWith("$$") && part.endsWith("$$")) || (part.startsWith("$") && part.endsWith("$") && part.length > 1)) return part;
			return escapeLatex(part);
		}).join("");
	}
	window.corpusEscapeLatexText = latexText;
	window.buildCorpusLatexPackage = async (problems, {title = "Physics problem set", subtitle = ""} = {}) => {
		const figures = new Map();
		async function addFigure(path) {
			if (figures.has(path)) return;
			const response = await fetch(figureUrl(path)); if (!response.ok) throw new Error(`Could not load figure: ${basename(path)}`);
			let bytes = new Uint8Array(await response.arrayBuffer()), extension = (basename(path).match(/\.[^.]+$/) || [".png"])[0].toLowerCase();
			if (extension === ".jpeg") extension = ".jpg";
			if (extension === ".gif") {
				const bitmap = await createImageBitmap(new Blob([bytes], {type:"image/gif"})), canvas = document.createElement("canvas");
				canvas.width = bitmap.width; canvas.height = bitmap.height; canvas.getContext("2d").drawImage(bitmap, 0, 0); bitmap.close();
				const png = await new Promise((resolve) => canvas.toBlob(resolve, "image/png")); if (!png) throw new Error(`Could not convert figure: ${basename(path)}`);
				bytes = new Uint8Array(await png.arrayBuffer()); extension = ".png";
			}
			figures.set(path, {name:`figures/image-${String(figures.size + 1).padStart(3, "0")}${extension}`, bytes});
		}
		for (const problem of problems) for (const path of array(problem.figures)) await addFigure(path);
		function imageLatex(path, used) {
			if (/^https?:\/\//i.test(path)) return `\\url{${path}}`;
			const figure = figures.get(path); if (!figure) return "";
			used.add(path);
			return `\\begin{center}\n\\includegraphics[width=0.85\\linewidth]{\\detokenize{${figure.name}}}\n\\end{center}`;
		}
		function convert(node, info, used) {
			if (node.nodeType === 3) return latexText(node.nodeValue);
			if (node.nodeType !== 1) return "";
			const tag = node.tagName.toLowerCase(), children = () => [...node.childNodes].map((child) => convert(child, info, used)).join("");
			if (tag === "img") return imageLatex(resolveFigure(node.getAttribute("src") || "", info), used);
			if (tag === "p") return `${children().trim()}\n\n`;
			if (/^h[1-6]$/.test(tag)) return `\\par\\medskip\\noindent\\textbf{${children().trim()}}\\par\\smallskip\n`;
			if (tag === "strong" || tag === "b") return `\\textbf{${children()}}`;
			if (tag === "em" || tag === "i") return `\\emph{${children()}}`;
			if (tag === "code") return `\\texttt{${escapeLatex(node.textContent)}}`;
			if (tag === "pre") return `\\begin{quote}\\ttfamily ${escapeLatex(node.textContent).replace(/\n/g, "\\\\\\par ")}\\end{quote}\n`;
			if (tag === "br") return "\\\\\n";
			if (tag === "hr") return "\\par\\medskip\\noindent\\rule{\\linewidth}{0.4pt}\\par\\medskip\n";
			if (tag === "ul" || tag === "ol") return `\\begin{${tag === "ul" ? "itemize" : "enumerate"}}\n${[...node.children].filter((child) => child.tagName.toLowerCase() === "li").map((item) => `\\item ${[...item.childNodes].map((child) => convert(child, info, used)).join("").trim()}\n`).join("")}\\end{${tag === "ul" ? "itemize" : "enumerate"}}\n`;
			if (tag === "blockquote") return `\\begin{quote}\n${children().trim()}\\end{quote}\n`;
			if (tag === "a") return node.href ? `\\href{\\detokenize{${node.href}}}{${children()}}` : children();
			if (tag === "table") {
				const rows = [...node.querySelectorAll("tr")], columns = Math.max(1, ...rows.map((row) => row.children.length));
				return `\\begin{center}\\begin{tabular}{${"c".repeat(columns)}}\n${rows.map((row) => `${[...row.children].map((cell) => [...cell.childNodes].map((child) => convert(child, info, used)).join("").trim()).join(" & ")} \\\\ \\hline\n`).join("")}\\end{tabular}\\end{center}\n`;
			}
			return children();
		}
		const sections = problems.map((problem, index) => {
			const used = new Set(), content = document.createElement("div"); content.innerHTML = window.corpusRenderMarkdown(problem.body);
			let body = [...content.childNodes].map((node) => convert(node, problem.info, used)).join("").trim();
			for (const path of problem.figures) if (!used.has(path)) body += `\n\n${imageLatex(path, used)}`;
			return `\\item ${body}\n\\hfill{\\small\\textit{Source: ${escapeLatex(sourceLabel(problem.record, problem.document))}}}`;
		});
		const tex = ["\\documentclass[12pt]{article}", "\\usepackage[T1]{fontenc}", "\\usepackage[utf8]{inputenc}", "\\usepackage{lmodern}", "\\usepackage{amsmath,amssymb}", "\\usepackage{graphicx}", "\\usepackage{hyperref}", "\\usepackage[a4paper,margin=20mm]{geometry}", "\\setlength{\\parindent}{0pt}", "\\setlength{\\parskip}{0.25em}", "\\begin{document}", `\\begin{center}{\\LARGE\\textbf{${escapeLatex(title)}}}\\end{center}`, subtitle ? `\\begin{center}${escapeLatex(subtitle)}\\end{center}` : "", "\\begin{enumerate}", "\\setlength{\\itemsep}{0.5em}", "\\setlength{\\topsep}{0.4em}", "\\setlength{\\parsep}{0.2em}", ...sections, "\\end{enumerate}", "\\end{document}", ""].filter((line) => line !== undefined);
		return window.createCorpusArchive([{name:"main.tex", bytes:new TextEncoder().encode(tex.join("\n"))}, {name:"README.txt", bytes:new TextEncoder().encode("Compile with pdflatex main.tex. Figures are included in the figures/ folder. Animated GIFs are converted to their first frame.\n")}, ...[...figures.values()].map((figure) => ({name:figure.name, bytes:figure.bytes}))]);
	};

	const header = document.querySelector(".header-actions");
	if (!header) return;
	const cartButton = document.createElement("button");
	cartButton.className = "cart-icon"; cartButton.type = "button"; cartButton.setAttribute("aria-haspopup", "dialog");
	cartButton.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg><span class="cart-count">0</span>';
	header.append(cartButton);

	const dialog = document.createElement("dialog"); dialog.id = "cart-dialog";
	dialog.setAttribute("aria-labelledby", "cart-heading-title");
	dialog.innerHTML = `<div class="cart-heading"><h2 id="cart-heading-title">Problem cart</h2><button id="cart-close" type="button" aria-label="Close cart">×</button></div>
		<ol id="cart-items"></ol>
		<div class="cart-fields"><label>Title<input id="cart-title" maxlength="160" placeholder="Physics problem set"></label>
		<label>Subtitle<textarea id="cart-subtitle" maxlength="500" placeholder="Optional"></textarea></label></div>
		<div class="cart-actions"><button id="cart-clear" type="button">Clear</button><button id="cart-latex" type="button">LaTeX</button><button id="cart-pdf" type="button">PDF</button></div>
		<p id="cart-status" aria-live="polite"></p>`;
	document.body.append(dialog);

	function readState() {
		try {
			const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
			const items = Array.isArray(saved.items) ? saved.items : [];
			return {
				items: [...new Map(items.map((item) => {
					const normalized = typeof item === "string" ? {id:item, document:"problem"} : {id:String(item.id || ""), document:isDocument(item.document) ? item.document : "problem"};
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
	function selectedDocument(button) { return isDocument(button.dataset.cartDoc) ? button.dataset.cartDoc : "problem"; }
	function refreshButtons() {
		count.textContent = state.items.length;
		cartButton.setAttribute("aria-label", `Open problem cart, ${state.items.length} item${state.items.length === 1 ? "" : "s"}`);
		document.querySelectorAll("[data-cart-add]").forEach((button) => {
			const item = state.items.find((entry) => entry.id === button.dataset.cartAdd), doc = selectedDocument(button);
			button.textContent = !item ? "Add" : item.document === doc ? button.id === "cart-add-current" ? "In cart · remove" : "Remove" : "Use";
			button.setAttribute("aria-pressed", String(Boolean(item && item.document === doc)));
		});
		const empty = state.items.length === 0;
		for (const id of ["cart-clear", "cart-latex", "cart-pdf"]) dialog.querySelector(`#${id}`).disabled = empty;
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
		const version = {en:"English problem", hu:"Hungarian problem", solution:"Official solution", solution_hu:"Hungarian solution"}[documentKey] || (documentKey.startsWith("doc") ? `Source document ${Number(documentKey.slice(3)) + 1}` : "");
		return `${parts.join(" · ") || record?.id || "Problem"}${version ? ` · ${version}` : ""}`;
	}
	function sourceLabel(record, documentKey) {
		const parts = [record?.source_name || record?.source, record?.handout, record?.year, record?.problem].filter(Boolean);
		const version = {en:"English problem", hu:"Hungarian problem", solution:"Official solution", solution_hu:"Hungarian solution"}[documentKey] || (documentKey.startsWith("doc") ? `Source document ${Number(documentKey.slice(3)) + 1}` : "");
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
	function figureUrl(path) { return path.startsWith("content/figures/solution-ocr/") ? rawFigureBase + path : new URL(path, location.href).href; }
	function cleanBody(body) { return body.replace(/^---\n[\s\S]*?\n---\n?/, "").replace(/\r\n?/g, "\n").replace(/\f/g, "\n\n").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\ufffd]/g, " "); }
	async function collectProblems() {
		const [catalog, manifest] = await getData(), records = new Map(array(catalog.records).map((record) => [record.id, record])), problems = [];
		for (const item of state.items) {
			const record = records.get(item.id), info = manifest.records?.[item.id], documentIndex = item.document.startsWith("doc") ? Number(item.document.slice(3)) : -1;
			const path = documentIndex >= 0 ? array(info?.solution_documents)[documentIndex] : info?.[item.document];
			if (!record || !path) throw new Error(`Problem document missing: ${item.id}`);
			const response = await fetch(new URL(path, location.href)); if (!response.ok) throw new Error(`Could not load: ${item.id}`);
			const body = cleanBody(await response.text()), refs = [...body.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((match) => resolveFigure(match[1], info));
			const figures = [...new Set([...array(info.figures), ...refs])].filter((figure) => !/^https?:\/\//i.test(figure));
			problems.push({id:item.id, document:item.document, record, info, body, figures});
		}
		return problems;
	}
	function slug(value) { return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "physics-problems"; }
	function download(blob, name) { const url = URL.createObjectURL(blob), link = document.createElement("a"); link.href = url; link.download = name; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
	async function downloadLatex() {
		const problems = await collectProblems(), blob = await window.buildCorpusLatexPackage(problems, {title:state.title.trim() || "Physics problem set", subtitle:state.subtitle.trim()});
		download(blob, `${slug(state.title || "physics-problems")}-latex.tar.gz`);
	}
	function printProblemHtml(problem, index) {
		const used = new Set();
		const body = problem.body.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (whole, alt, raw) => {
			const path = resolveFigure(raw, problem.info);
			if (/^https?:\/\//i.test(path)) return whole;
			used.add(path); return `![${alt}](${figureUrl(path)})`;
		});
		const content = document.createElement("div"); content.innerHTML = window.corpusRenderMarkdown(body);
		for (const path of problem.figures) if (!used.has(path)) {
			const figure = document.createElement("figure"), image = document.createElement("img"), caption = document.createElement("figcaption");
			image.src = figureUrl(path); image.alt = basename(path); caption.textContent = basename(path); figure.append(image, caption); content.append(figure);
		}
		const opening = content.querySelector("p") || content.firstElementChild;
		if (opening) { const number = document.createElement("strong"); number.className = "problem-number"; number.textContent = `${index + 1}. `; opening.prepend(number); }
		else { const paragraph = document.createElement("p"), number = document.createElement("strong"); number.className = "problem-number"; number.textContent = `${index + 1}. `; paragraph.append(number); content.append(paragraph); }
		return content.innerHTML;
	}
	async function printPdf() {
		const page = window.open("", "physics-problem-set-pdf");
		if (!page) throw new Error("Allow pop-ups to prepare the print/PDF view.");
		page.document.write("<!doctype html><html><head><meta charset=utf-8><title>Preparing PDF…</title></head><body>Preparing problem set…</body></html>");
		try {
			const problems = await collectProblems(), title = state.title.trim() || "Physics problem set", subtitle = state.subtitle.trim();
			const content = problems.map((problem, index) => `<section class="problem">${printProblemHtml(problem, index)}<p class="problem-source">Source: ${escapeHtml(sourceLabel(problem.record, problem.document))}</p></section>`).join("");
			const fontFaces = [["regular", "400", "normal"], ["bold", "700", "normal"], ["italic", "400", "italic"], ["bolditalic", "700", "italic"]].map(([file, weight, style]) => `@font-face{font-family:"Latin Modern Roman";src:url("${new URL(`assets/fonts/latin-modern-roman-${file}.woff`, location.href).href}") format("woff");font-weight:${weight};font-style:${style}}`).join("");
			const mathJaxConfig = {loader:{load:["[tex]/ams"]}, tex:{inlineMath:[["\\(","\\)"],["$","$"]], displayMath:[["\\[","\\]"],["$$","$$"]], packages:{"[+]" :["ams"]}}, options:{skipHtmlTags:["script","noscript","style","textarea","pre","code"]}, startup:{typeset:false}};
			page.document.open();
			page.document.write(`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
				<script>window.MathJax=${JSON.stringify(mathJaxConfig)};</script>
				<style>${fontFaces}body{max-width:850px;margin:24px auto;padding:0 20px;color:#111;font:16px/1.38 "Latin Modern Roman",serif}body>h1{margin:0 0 6px;text-align:center;font-size:25px}body>p{margin:0 0 18px;text-align:center}.problem{margin:12px 0 16px;text-align:justify}.problem :is(h1,h2,h3,h4,p,ul,ol,blockquote,pre,table){margin:4px 0 8px}.problem-number{white-space:nowrap;margin-right:4px}.problem-source{margin:6px 0 0!important;color:#555;font-size:11px;font-style:italic;text-align:right}img{display:block;max-width:90%;max-height:68vh;height:auto;margin:10px auto;break-inside:avoid;page-break-inside:avoid}figure{text-align:center;break-inside:avoid;page-break-inside:avoid;margin:8px 0}figcaption{font-size:11px;color:#555}@page{size:A4;margin:0}@media print{body{max-width:none;margin:0;padding:14mm 16mm}}</style></head>
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
	dialog.querySelector("#cart-latex").addEventListener("click", (event) => runAction(event.currentTarget, "Preparing LaTeX package…", downloadLatex));
	dialog.querySelector("#cart-pdf").addEventListener("click", (event) => runAction(event.currentTarget, "Preparing print view…", printPdf));
	const currentId = new URLSearchParams(location.search).get("id"), currentButton = document.getElementById("cart-add-current");
	if (currentButton) {
		if (currentId) { currentButton.dataset.cartAdd = currentId; currentButton.hidden = false; } else currentButton.hidden = true;
		currentButton.dataset.cartDoc = new URLSearchParams(location.search).get("doc") || "problem";
	}
	window.addEventListener("corpus-document-change", (event) => {
		if (currentButton) { currentButton.dataset.cartDoc = isDocument(event.detail) ? event.detail : "problem"; refreshButtons(); }
	});
	window.addEventListener("storage", (event) => { if (event.key === storageKey) { state = readState(); save(); if (dialog.open) renderCart(); } });
	refreshButtons();
})();
