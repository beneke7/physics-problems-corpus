---
id: kevin-zhou-notes-phy-ex003
source: kevin-zhou-notes
native_id: "phy Example 003"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex003
topic: [klasszikus mechanika, neminerciális rendszerek]
subtopic: [forgó vonatkoztatási rendszerek, Coriolis-erő]
math_tools: [kalkulus, vektoranalízis]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "302-323"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Részecske forgó vonatkoztatási rendszerben. Bevezetésként kétdimenziós esetben dolgozunk, ahol
                                                   1
                                                L = m(ṙ2 + r2 θ̇2 ).
                                                   2
A Lagrange-mechanikában a forgó rendszerbe való áttérés csak a
általánosított koordináták megváltoztatását jelenti. Legyen ϕ = θ − ωt, és írjuk át a Lagrange-függvényt r és ϕ szerint; ekkor
                                   1                             1
                                L = m(ṙ2 + r2 ϕ̇2 ) + mr2 ω ϕ̇ + mr2 ω 2 .
                                   2                             2
Az első tag ugyanaz, mint korábban, a második a Coriolis-erőt, az utolsó pedig a centrifugális erőt
jelenti. A második tag mv · A alakban írható, ahol A = ωr θ̂.
Pontosan ezt a tagot kellene hozzáadni egy q = m töltésű részecskéhez tartozó 2ω homogén mágneses tér esetén, ami
megmagyarázza, miért olyan hasonló alakú a Coriolis- és a mágneses erő. Nem nehéz
három dimenzióra általánosítani. Ekkor
                       1               1                     1
                    L = m(v + ω × r)2 = mv 2 + mv · (ω × r) + m|ω × r|2 .
                       2               2                     2
Ez tetszőleges ω(t) esetén is működik; a második tag ekkor a Coriolis- és az Euler-erőt is megadja,
az utolsó tag pedig a centrifugális erőt.
