---
id: "kevin-zhou-t2-ex013"
source: "kevin-zhou"
native_id: "KZ-T2-EX013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-ex013"
topic: [termodinamika]
subtopic: [hővezetés, hővezetési tényező, stacionárius állapot, gömbszimmetria]
math_tools: [analízis, differenciálegyenletek]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T2-EX013

       13. példa

       Modellezzünk egy téglából épült pizzakemencét R1 belső sugarú, R2 külső sugarú, κ hővezetési tényezőjű gömbként.
       A kemence belsejét T1 , külsejét pedig T2 hőmérsékleten tartjuk. Egyensúlyban határozzuk meg T (r)-t és a kemence
       belsejének T1 hőmérsékleten tartásához szükséges teljesítményt.

       Megoldás
       Tekintsünk egy r sugarú, dr vastagságú héjat. A rajta kifelé átáramló hőteljesítmény
                                                                 dT
                                           P (r) = −κ(4πr2 )        .
                                                                 dr
       Továbbá, mivel a héjak hőmérséklete állandó, egyik héjban sem halmozódhat fel nettó hő. Ezért P (r) valójában
       független r-től. P -vel jelölve integrálhatjuk a kapott differenciálegyenletet:
                                        Z T (r)            Z r
                                                                 P
                                                  dT = −            2
                                                                      dr
                                         T1                 R1 4πκr

       amiből a megoldás
                                                             r − R1 R2
                                  T (r) = T1 + (T2 − T1 )                 .
                                                                r R2 − R1
       Most, hogy ismerjük T (r)-t, az első egyenlet segítségével bármely sugáron kiértékelhetjük a dT /dr-t, és
       meghatározhatjuk a teljesítményt. Egy másik, elegánsabb módszer, amelyhez még T (r) ismerete sem szükséges, az,


                                                       20
    Kevin Zhou                                                             Physics Olympiad Handouts



       ha az első egyenletet a kemence belsejétől egészen a külsejéig integráljuk:
                                        Z T2            Z R2
                                                                 P
                                               dT = −                dr.
                                         T1              R1    4πκr2

       Ez a teljesítményt a többi paraméterrel kifejező összefüggést adja:
                                                                R1 R2
                                        P = 4πκ(T1 − T2 )              .
                                                               R2 − R1
