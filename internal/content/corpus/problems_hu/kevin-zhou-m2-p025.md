---
id: "kevin-zhou-m2-p025"
source: "kevin-zhou"
native_id: "KZ-M2-P025"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-p025"
topic: [mechanika]
subtopic: [súrlódás, statika, láncgörbe]
math_tools: [integrálás, differenciálegyenletek]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

[3] 26. feladat (Morin 2.25). Egy kötél két, egyaránt θ szögben megdöntött emelvényen nyugszik.




                                                    15
    Kevin Zhou                                                                    Physics Olympiad Handouts


    A kötél lineáris tömegsűrűsége állandó, az emelvények és a kötél közötti súrlódási együttható pedig 1.
    A rendszer bal–jobb irányban szimmetrikus. A kötél emelvényeket nem érintő részének legnagyobb lehetséges hányada mekkora?
    Mekkora θ szög mellett érhető el ez a maximális hányad?

       10. példa

       Egy láncot a mennyezet két, egymástól d távolságra lévő pontjáról függesztünk fel. A lánc lineáris tömegsűrűsége λ állandó,
       és nem nyújtható. Határozzuk meg a lánc alakját.

       Megoldás
       Először vegyük észre, hogy a feszítőerő vízszintes komponense, Tx, a lánc teljes hosszában állandó; ez közvetlenül következik a
       lánc bármely darabjára felírt vízszintes erőegyensúlyból. Továbbá hasonló háromszögekből mindenütt Ty = Tx y ′ adódik.

       Most tekintsünkp egy ∆x vízszintes vetületű kis láncdarabot. A darab hossza ∆x 1 + y ′2 , ez határozza meg a súlyát, amelyet a
       függőleges feszítőerők különbségének kell kiegyenlítenie. Így                    p
                                        ∆Ty = λg 1 + y ′2 ∆x.
       infinitezimális ∆x esetén ∆Ty = Tx d(y ′ ) = Tx y ′′ dx, így a következő differenciálegyenletet kapjuk:

                                                         λg p
                                                y ′′ =       1 + y ′2 .
                                                         Tx
       A második deriváltat tartalmazó nemlineáris differenciálegyenleteket általában nagyon nehéz megoldani, ez az egyenlet azonban
       nem ilyen, mert y közvetlenül nem szerepel benne, csak a deriváltjai. Ez azt jelenti, hogy először a y ′ változót tekinthetjük függetlennek,
       és az egyenlet y ′-re nézve lényegében elsőrendű.

       A y ′′ = d(y ′ )/dx felírása és a változók szétválasztása után azt kapjuk

                                                  dy ′        λg
                                           Z                Z
                                              p           =      dx.
                                                 1 + y ′2     Tx

       Mindkét oldalt integrálva ezt kapjuk
                                                                λgx
                                              sinh−1 (y ′ ) =       + C.
                                                                 Tx
       Az x = 0 pontot a lánc legalacsonyabb pontjának választva a C konstans nulla, így
                                                          
                                            ′          λgx
                                           y = sinh          .
                                                        Tx

       Mindkét oldalt ismét integrálva kapjuk y megoldását:
                                                             
                                                Tx        λgx
                                           y=      cosh
                                                λg         Tx

       ahol egy további integrálási konstanst elhagytunk. Ezt a görbét láncgörbének nevezzük.
