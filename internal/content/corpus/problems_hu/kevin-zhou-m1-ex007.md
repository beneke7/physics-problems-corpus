---
id: "kevin-zhou-m1-ex007"
source: "kevin-zhou"
native_id: "KZ-M1-EX007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m1-ex007"
topic: [mechanika]
subtopic: [kinematika, polárkoordináták, logaritmikus spirál]
math_tools: [analízis, differenciálegyenletek]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M1.txt"
source_url: "sources/kevin_zhou/site/handouts/M1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Példa 7

       Egy bogár v állandó sebességgel repül egy lámpa felé, és mindig α szöget zár be a radiális iránnyal.
       Ha a lámpától mért kezdeti távolság L, a lámpa sugara pedig R, mekkora teljes szöggel fordul
       el, mielőtt eléri a lámpát?

       Megoldás
       Ebben az esetben nem kerülhetjük el a differenciálegyenletek megoldását, de ezek nem túl nehezek.
       A legegyszerűbb polárkoordinátákban dolgozni, a lámpa középpontját az origóba helyezve. A
       sebességet radiális és érintőirányú komponensekre bontva azt kapjuk, hogy
                                        dr                        dθ
                                           = −v cos α,        r      = v sin α.
                                        dt                        dt
       Csak a pálya érdekel bennünket, nem az időfüggés, ezért a két egyenletet elosztva ezt kapjuk:
                                                   dr      r
                                                      =−
                                                   dθ    tan α
       ahol a differenciálokkal a P1-ben leírtakhoz hasonlóan számolunk. Az egyenletet szétválasztva és
       integrálva,
                                                   Z R
                                                         dr    ∆θ
                                               −            =
                                                    L    r    tan α

       amiből
                                                                      L
                                              ∆θ = (tan α) log          .
                                                                      R
       A kirajzolódó görbe logaritmikus spirál.




                                                          9


    Kevin Zhou                                                                  Physics Olympiad Handouts
