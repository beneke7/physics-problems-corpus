---
id: kevin-zhou-notes-phy-ex020
source: kevin-zhou-notes
native_id: "phy Example 020"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex020
topic: [elektromágnesség]
subtopic: [elektrosztatika, ponttöltés]
math_tools: [vektoranalízis]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1449-1460"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A ponttöltés tere gömbszimmetrikus, és az origó kivételével ∇2 ϕ = 0.
A ϕ ∝ 1/r alakot felvéve
                                       
                                        1     −∇r       r
                                   ∇       = 2 = − 3.
                                        r       r       r
Ezután a szorzási szabállyal kiszámíthatjuk a divergenciát:
                                                          
                         2 1          ∇ · r 3r̂ · r       3  3
                       ∇       =−          − 4        =− 3 − 3 =0
                            r          r3      r          r r
ahogy kívántuk. A teljes konstans meghatározásához a Gauss-törvényt használjuk; ϕ = q/(4πϵ0 r).
