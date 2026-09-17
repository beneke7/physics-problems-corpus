---
id: "nbpho-2015-radiator"
source: "nbpho"
native_id: "2015 P5"
year: 2015
language: "hu"
translated: true
topic: [thermodynamics, statistical-mechanics]
subtopic: [heat-transfer, conduction]
math_tools: [differential-equations, calculus]
format: "open-ended"
points: 8
core_ideas: []
has_figure: false
figure_files: []
verification_status: "pending"
links_en: "nbpho-2015-radiator"
provenance_note: "NBPhO 2015, 5. feladat, szerzők M. Heidelberg. Mathpix OCR born-digital PDF-ből (cache/phoxiv/nbpho/2015.pdf)."
---

**5. HŐSUGÁRZÓ (8 pont)** — *M. Heidelberg*

Mérjük meg az alumínium profil és a környezet közötti hőátbocsátási tényezőt $h$. $h=\frac{p}{T-T_{0}}$, ahol $p$ az alumínium profilból a levegőbe való hőáram az egységnyi hosszra; $T$ és $T_{0}$ az alumínium és a környezet hőmérséklete. A mérésekhez tartsd az alumínium profilt síkban az asztal felszínén, hogy korlátozza a turbulencia nemlineáris hatásait. Az alumínium hővezetési képessége $k=205 \mathrm{~W} /(\mathrm{K} \cdot \mathrm{m})$ és a profil keresztmetszete $A=36 \mathrm{~mm}^{2}$.

Ötlet: a profil mentén az állandósult hőmérséklet-eloszlás leírásához egy egydimenziós Helmholtz-egyenletet vezethetünk le: $T^{\prime \prime}(x)=\frac{h\left(T(x)-T_{0}\right)}{k A}$, amelynek az általános megoldása:

$$T(x)=T_{0}+C_{1} e^{x \sqrt{\frac{h}{k A}}}+C_{2} e^{-x \sqrt{\frac{h}{k A}}},$$

ahol $C_{1}$ és $C_{2}$ az integráció állandói.

Felszerelés: Alumínium profil, drót (melegítéshez), egyenáramú tápegység, infravörös hőmérő, vonalzó.

Tartsd a drót hőmérsékletét **150°C** alatt, mivel a drót szigetelése és az asztal felszíne ezen a ponton füstöl!
