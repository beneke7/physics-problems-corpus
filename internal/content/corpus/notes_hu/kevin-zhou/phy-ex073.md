---
id: kevin-zhou-notes-phy-ex073
source: kevin-zhou-notes
native_id: "phy Example 073"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex073
topic: [kvantumfizika]
subtopic: [Schrödinger-egyenlet, úttintegrálok]
math_tools: [kalkulus, differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8811-8848"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A Schrödinger-egyenlet visszanyerése. Kis t = ϵ időre

                                           ℏ2 2

                                     iϵ
                 ψ(x, ϵ) = ψ(x, 0) −     −    ∇ + V (x) ψ(x, 0) + O(ϵ2 ).
                                     ℏ     2m

Hasonlítsuk ezt össze az úttintegrállal. Itt egyetlen időlépést használunk, így

                                                                   iϵ m(x − y)2
           Z                                      m  3/2
  ψ(x, ϵ) = dy K(x, y, ϵ)ψ(y, 0), K(x, y, 0) =               exp                − V (y)   .
                                                  2πiℏϵ            ℏ       2ϵ2

A kifejtés kissé finom, mivel ϵ-től szokatlan módon függ. A lényeg, hogy a nyeregpontközelítés
szerint a járulék nagy része a ξ = x − y = O(ϵ1/2 ) tartományból származik. Ezután mindent első
rendig fejtünk ki ϵ szerint, ξ = O(ϵ1/2 )-ként kezelve:

                                imξ 2
              m  3/2 Z
                                            iϵ
  ψ(x, ϵ) =            dξ exp           1 − V (x + ξ) + . . .
             2πiℏϵ               2ϵℏ        ℏ

                                                      i            1 i j
                                         × ψ(x, 0) + ξ ∂i ψ(x, 0) + ξ ξ ∂i ∂j ψ(x, 0) + . . . .
                                                                   2

A fennmaradó exponenciálist nem fejthetjük ki, mivel argumentuma O(1). Ezután megvizsgáljuk a két
kifejtés szorzatának tagjait. Az O(1) tag ψ(x, 0)-t adja, ahogy vártuk. Az O(ϵ1/2 ) tag nulla, mivel
ξ-ben páratlan. Az O(ϵ) tag
                                 iϵ             1
                                − V (x)ψ(x, 0) + ξ i ξ j ∂i ∂j ψ(x, 0).
                                 ℏ              2
Az első a potenciáltag. A második integrálás után a kinetikus tagot adja. Végül az O(ϵ3/2 ) tag
szimmetria miatt eltűnik, ezzel bizonyítottuk az eredményt.
