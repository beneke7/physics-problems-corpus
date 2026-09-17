---
id: "kevin-zhou-r2-ex009"
source: "kevin-zhou"
native_id: "KZ-R2-EX009"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-r2-ex009"
topic: [Relativitáselmélet, Elektromágnesség]
subtopic: [relativisztikus részecskemozgás, mágneses eltérítés, részecskegyorsítók]
math_tools: [dimenzióanalízis]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/R2.txt"
source_url: "sources/kevin_zhou/site/handouts/R2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

13
    Kevin Zhou                                                                 Physics Olympiad Handouts



       ahol ω a szögsebesség. A protonok sebessége nagyon közel van c-hez, ezért a szögsebesség ω ≈ c/R, a lendület
       pedig p ≈ E/c. Az eltérítő erő qvB ≈ qcB, ezért

                                                              E
                                               qcB ≈ ωp ≈       .
                                                              R
       Így
                                       E          7 × 1012
                                B=        =                        T = 5.4 T.
                                      qcR   (3 × 108 )(4.3 × 103 )
       Ez valamivel kisebb a ténylegesen használt értéknél, mert a mágnesek nem töltik ki az egész alagutat. Mivel
       R ∝ E, a jövőbeli ütköztetőnek
                                                  20 TeV
                                           R′ =          R = 12 km.
                                                  7 TeV

       Megjegyzés
       Talán felmerül, hogyan írható fel a Lorentz-erő négyeserőként. Ennek természetesen lehetségesnek kell lennie,
       hiszen tudjuk, hogy az elektromágnesség összeegyeztethető a relativitáselmélettel (sőt éppen ez vezetett el
       bennünket először a relativitáselmélethez), mégis nehéznek tűnik, mivel az elektromágnességet természetes módon
       háromvektorokkal írjuk fel. Kiderül, hogy a relativitáselméletben az elektromágneses tér helyes kifejezésmódja az
       elektromos és mágneses tér egyesítése: ezek egy antiszimmetrikus, 2. rangú tenzor komponensei,
                                                                        
                                                 0     Ex     Ey      Ez
                                             −Ex       0    −Bz By 
                                      Fµν = −Ey Bz
                                                                         
                                                               0     −Bx 
                                              −Ez     −By     Bx      0

       amelyet térerősségtenzornak nevezünk. Ekkor a négyeserő

                                                  f µ = quν F µν

       ahol uν a négyessebesség. Vegyük észre, hogy ez biztosítja a részecske nyugalmi tömegének állandóságát, mivel

                                 f · u = quµ uν F µν = −quµ uν F νµ = −f · u

       az antiszimmetrikus tulajdonságot felhasználva f · u = 0. (Valójában a nyugalmi tömeg állandóságának követelménye
       meglehetősen szigorú, így ez a lehető legegyszerűbb relativisztikus erőtörvények egyike.)
