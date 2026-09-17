---
id: "kevin-zhou-e3-ex002"
source: "kevin-zhou"
native_id: "KZ-E3-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e3-ex002"
topic: [elektromágnesség]
subtopic: [egyenáramú áramkörök, Thévenin-ekvivalens, belső ellenállás, Kirchhoff-törvények]
math_tools: [algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E3.txt"
source_url: "sources/kevin_zhou/site/handouts/E3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

2. példa

       Tekintsünk párhuzamosan kapcsolt elemeket, amelyek elektromotoros ereje Ei , belső ellenállása pedig Ri . Mi
       ennek az áramkörnek a Thévenin-ekvivalense?

       Megoldás
       Az ekvivalens ellenállás egyszerűen
                                                                        !−1
                                                       X 1
                                             Req =                            .
                                                                   Ri
                                                           i

       Veq meghatározásához még egy V (I) értékre van szükségünk. A legkényelmesebb a V = 0 beállítása, vagyis az
       összes elem rövidre zárása. Egy-egy elem önmagában Ei /Ri áramot hozna létre, ezért
                                                             !
                                                       X Ei
                                          0 = Veq −            Req .
                                                          Ri
                                                               i

       Így
                                                           !                     −1
                                                  X Ei              X 1
                                      Veq =                                           .
                                                      Ri                 Rj
                                                  i                 j



       Megjegyzés
       Ideális elemekkel könnyű olyan áramköröket összeállítani, amelyeknek nincs értelmes fizikai jelentésük.



                                             i1                    1A     i2



                                    1V                             1Ω                 1V



       Például a fenti áramkörben Kirchhoff-szabályai nem határozzák meg az áramokat; csak azt mondják ki, hogy
       i1 + i2 = 1 A. Ha az elemek elektromotoros ereje különbözne, a helyzet még rosszabb lenne: az egyenletek
       ellentmondanának egymásnak, és egyáltalán nem lenne megoldás! A valóságban ezt az oldja meg, hogy minden elemnek
       van valamennyi belső ellenállása. Ha minden elemhez hozzáadunk egy ilyen ellenállást, bármilyen kicsi is legyen,
       a probléma megszűnik, és egyértelmű megoldást kapunk.
