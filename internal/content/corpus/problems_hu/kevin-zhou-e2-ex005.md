---
id: "kevin-zhou-e2-ex005"
source: "kevin-zhou"
native_id: "KZ-E2-EX005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e2-ex005"
topic: [elektrosztatika]
subtopic: [elektrosztatikus indukció, vezetők, erőbecslés]
math_tools: [skálázási érvelés]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E2.txt"
source_url: "sources/kevin_zhou/site/handouts/E2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Példa 5

  Becsüljük meg a q ponttöltés és egy ℓ hosszúságú, vékony vezető rúd között fellépő kölcsönhatási erőt,
  ha a rúd a töltéstől L ≫ ℓ távolságra van, és a közöttük lévő összekötő egyenes mentén helyezkedik el.




                                                  11
    Kevin Zhou                                                                Physics Olympiad Handouts


       Megoldás
       A kölcsönhatás azért jön létre, mert a ponttöltés negatív töltéseket indukál a rúd hozzá közelebbi végén,
       pozitív töltéseket pedig a távolabbi végén. Ezekre a töltésekre ezután hat a ponttöltés elektromos tere,
       így erő keletkezik.

       Nagyon durva becsléshez tegyük fel, hogy a távolabbi végen Q, a közelebbi végen pedig −Q töltés jelenik meg.
       A középpontban létrejövő tér
                                                        kQ
                                                  E∼       .
                                                        ℓ2
       Másrészt ennek ki kell oltania a ponttöltés
                                                           kq
                                                   E∼
                                                           L2
       terét, amiből Q ∼ (ℓ/L)2 q következik. Az indukált töltésekre ható erő ezért

                                                                       kq 2 ℓ3
                                                     
                                           1        1        kqQℓ
                             F ∼ kqQ             −      ∼  −       ∼ −         .
                                        (L + ℓ)2 L2           L3        L5

       Ismét azt kapjuk, hogy az erő vonzó, és a távolsággal gyorsan csökken.
