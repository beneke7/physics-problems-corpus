---
id: kevin-zhou-notes-phy-ex065
source: kevin-zhou-notes
native_id: "phy Example 065"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex065
topic: [kvantumfizika, mechanika]
subtopic: [Galilei-transzformáció, hullámcsomagok]
math_tools: []
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7215-7238"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Másik példaként tegyük fel, hogy Galilei-transzformációval mozgó hullámcsomagot szeretnénk
kapni. Naivan egyszerűen ψ(x − vt, t)-t vennénk, de ez nem lehet helyes, mert ez az állapot a
t = 0 időpontban éppen ugyanaz, mint a nem mozgó hullámcsomag. Az impulzus tényleges
megváltoztatásához fázistényezőt is hozzá kell adnunk; az eredmény
                                                        2
                                ψv (x, t) = ei(mvx−mv t/2)/ℏ ψ(x − vt, t)

amint közvetlen behelyettesítéssel ellenőrizhető, vagy a Csoportelmélet című jegyzet formálisabb
érvelésével megmutatható. Intuitívan is érthető: az eimvx/ℏ tényező eltolja az impulzust, míg az
e−imv t/2ℏ tényező a kinetikus energia változását veszi figyelembe.
   Általánosabban, egy V (x) = mgx potenciálban szabadon eső részecskére
                                                            2
                             ψff (x, t) = e−i(mgt/ℏ)(x+gt /6) ψ0 (x + gt2 /2, t)

ahol a hullámcsomag mozgása az Ehrenfest-relációkat követi. A fázistényezők magyarázata ugyanaz,
mint az egyenletesen mozgó hullámcsomagnál, és lökések integrálásával levezethető. Ez a végső példa
azt is szemlélteti, hogyan működnek az erők a kvantummechanikában: a potenciális energia térbeli
gradiense a fázis térbeli gradienséhez vezet, ami impulzusnak felel meg.
    Még általánosabban, a nemrelativisztikus kvantummechanikát tetszőleges neminerciális
vonatkoztatási rendszerben is megfogalmazhatjuk; csak írjuk fel a Lagrange-függvényt az adott
rendszerben, végezzük el a Legendre-transzformációt, majd a kanonikus kvantálással kapjuk meg a
Schrödinger-egyenletet. Ez azonban szinte bizonyosan több fáradság, mint amennyit ér.
