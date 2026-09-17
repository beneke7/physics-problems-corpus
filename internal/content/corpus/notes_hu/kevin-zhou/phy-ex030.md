---
id: kevin-zhou-notes-phy-ex030
source: kevin-zhou-notes
native_id: "phy Example 030"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex030
topic: [statisztikus-mechanika]
subtopic: [entrópia, kanonikus-sokaság]
math_tools: [Taylor-sor, termodinamikai-határátmenet]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3102-3118"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Amint azt alább látni fogjuk, egy ideális gáz entrópiája az energiától logaritmikusan függ:

                                          S(E) ∼ N log E.

Az entrópia ezért jól Taylor-sorba fejthető:
                                                       N   ϵ2 N
                              S(E − ϵ) ∼ S(E) − ϵ        −      + ....
                                                       E   2 E2
A termodinamikai határátmenetben a magasabb rendű tagokat az ϵ/E hatványai nyomják el; ez azért kicsi, mert ϵ a rendszer, E pedig a hőtartály energiája. Ez lehetővé teszi a kanonikus sokaság levezetését. Ha viszont az állapotok számát fejtenénk ki, Ω(E) ∼ E N , akkor

                                                         ϵ2
                      Ω(E − ϵ) ∼ Ω(E) − ϵN E N −1 +         N (N − 1)E N −2 + . . .
                                                         2
a magasabb rendű tagokat az N ϵ/E hatványai nyomnák el, ami nem kicsi. (Másképpen fogalmazva: a termodinamikai határátmenetben N → ∞, miközben E/N állandó marad.)
