---
id: "kevin-zhou-m2-ex010"
source: "kevin-zhou"
native_id: "KZ-M2-EX010"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-ex010"
topic: [mechanika]
subtopic: [statika, láncgörbe, hajlékony kötelek]
math_tools: [integrálszámítás, differenciálegyenletek]
format: "explanation"
kind: "example"
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
