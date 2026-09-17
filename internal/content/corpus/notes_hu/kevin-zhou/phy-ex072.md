---
id: kevin-zhou-notes-phy-ex072
source: kevin-zhou-notes
native_id: "phy Example 072"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex072
topic: [kvantumfizika]
subtopic: [szabad részecske, félklasszikus közelítés]
math_tools: [kalkulus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8788-8810"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A szabad részecske. Ebben az esetben a klasszikus pályák egyenesek, és

                                          mẋ2 t   m(x − x0 )2
                                     S=          =             .
                                           2           2t
A determinánstényező
                                                  1/2
                                           ∂2S
                                                            r
                                                                m
                                                        =         .
                                          ∂x∂x0                 t
A másodrendű akcióváltozás az m(δ ẋ)2 /2 integrálja lenne, amely pozitív definit, ezért µ = 0.
Mindent összerakva

                                                        i m(x − x0 )2
                                          r                          
                                             m
                           K(x, x0 , t) =         exp
                                            2πiℏt       ℏ     2t

ahogy korábban is kaptuk.
