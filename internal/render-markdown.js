(() => {
	const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
	function protectSetext(value) {
		let fenced = false;
		return value.split("\n").map((line) => {
			if (/^[ \t]{0,3}(?:`{3,}|~{3,})/.test(line)) { fenced = !fenced; return line; }
			if (fenced) return line;
			if (/^[ \t]{0,3}(?:=+|-+)[ \t]*$/.test(line)) return line.replace(/[=-]/g, "\\$&");
			return /^[ \t]{0,3}#(?:[ \t]|$)/.test(line) ? line.replace("#", "\\#") : line;
		}).join("\n");
	}
	function hasMath(value) { return /(?:^|[^\\])\$\$?|\\[([]/.test(value); }
	function renderMarkdown(value) {
		const math = [], token = () => `MATHJAXTOKEN${math.length - 1}`;
		let body = "", i = 0;
		while (i < value.length) {
			if (value[i] === "`") {
				const run = value.slice(i).match(/^`+/)[0], end = value.indexOf(run, i + run.length);
				if (end >= 0) { body += value.slice(i, end + run.length); i = end + run.length; continue; }
			}
			if ((value.startsWith("```", i) || value.startsWith("~~~", i)) && (i === 0 || value[i - 1] === "\n")) {
				const fence = value[i] === "`" ? "```" : "~~~", end = value.indexOf(`\n${fence}`, i + fence.length);
				if (end >= 0) { const lineEnd = value.indexOf("\n", end + 1); const stop = lineEnd < 0 ? value.length : lineEnd + 1; body += value.slice(i, stop); i = stop; continue; }
			}
			const escaped = i > 0 && value[i - 1] === "\\";
			let close = -1, length = 0;
			if (!escaped && (value.startsWith("\\(", i) || value.startsWith("\\[", i))) {
				const delimiter = value.startsWith("\\(", i) ? "\\)" : "\\]"; close = value.indexOf(delimiter, i + 2); length = 2;
			} else if (!escaped && value.startsWith("$$", i)) { close = value.indexOf("$$", i + 2); length = 2; }
			else if (!escaped && value[i] === "$" && value[i + 1] !== "$") { close = value.indexOf("$", i + 1); while (close > 0 && value[close - 1] === "\\") close = value.indexOf("$", close + 1); length = 1; }
			if (close > i + length) { math.push(value.slice(i, close + length)); body += token(); i = close + length; continue; }
			body += value[i++];
		}
		return marked.parse(protectSetext(body), {gfm:true, breaks:false, html:false})
			.replace(/MATHJAXTOKEN(\d+)/g, (_, index) => escapeHtml(math[Number(index)]))
			.replace(/&lt;br\s*\/?&gt;/gi, "<br>");
	}
	window.corpusRenderMarkdown = renderMarkdown;
	window.corpusHasMath = hasMath;
})();
