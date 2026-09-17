---
id: "kevin-zhou-m1-ex001"
source: "kevin-zhou"
native_id: "KZ-M1-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m1-ex001"
topic: [mechanika]
subtopic: [kinematika, közegellenállás, hajítás]
math_tools: [differenciálegyenletek, differenciálás]
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

Példa 1

         Ha egy hajított test lassan mozog a levegőben, a közegellenállási erő lineárisan függ a
         sebességtől, F = −αmv. Határozzuk meg a t = 0 időpontban v0 sebességgel felfelé elhajított
         test v(t) sebességét.

         Megoldás
         Newton második törvényét a következő alakban írjuk fel:
                                               dv
                                                   = −g − αv
                                                dt
         majd mindkét oldalt megszorozzuk dt-vel. A kezdeti feltételtől a tf időpontig mindkét oldalt
         integrálva ezt kapjuk:
                                           Z v(tf )               Z tf
                                                        dv
                                                             =−          dt.
                                            v0        g + αv       0

         Az integrálások elvégzése után:
                                                         v(tf )
                                           1
                                             log(g + αv)        = −tf .
                                           α             v0

         A tf változót t-re átnevezve, majd v-re megoldva azt kapjuk:
                                                              g −αt
                                          v(t) = e−αt v0 +      (e  − 1).
                                                              α
         Ez az átnevezés azért szükséges, mert nem akarjuk összekeverni a t változót, amely szerint
         integrálunk, a tf változóval, a sebesség kiértékelésének időpontjával; t a nullától tf-ig változik.
         Sajnos sokan egyszerűen mindkettőt t-nek nevezik, ezért figyelnünk kell erre.
