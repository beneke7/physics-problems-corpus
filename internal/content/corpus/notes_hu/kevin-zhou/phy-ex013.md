---
id: kevin-zhou-notes-phy-ex013
source: kevin-zhou-notes
native_id: "phy Example 013"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex013
topic: [klasszikus mechanika]
subtopic: [perdület, kanonikus transzformációk]
math_tools: [vektoranalízis, lineáris algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "918-968"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Perdület. Az L = r × p definícióval

                                      {Li , Lj } = ϵijk Lk ,     {L2 , Li } = 0.

Az Li forgásokat generál, ezért az első egyenlet az infinitezimális
forgások kommutációs relációját adja. Egy Hamilton-függvény forgásszimmetrikus, ha {Li , H}, ami a perdület
megmaradásához vezet.

Most azokat a koordinátaváltoztatásokat vizsgáljuk, amelyek megőrzik Hamilton egyenleteinek alakját; ezeket
kanonikus transzformációknak nevezzük. Általában rugalmasabbak a Lagrange-formalizmus koordinátatranszformációinál,
mert a helyet és az impulzust keverhetjük.

  • Legyen x = (q1 , . . . , qn , p1 , . . . , pn )T, és definiáljuk a J mátrixot:
                                                                      
                                                                0   In
                                                        J=
                                                               −In 0

    Ekkor Hamilton egyenletei
                                                    ∂H
                                                       .ẋ = J
                                                    ∂x
    Vegyük észre azt is, hogy a kanonikus Poisson-zárójelek {xi , xj } = Jij .

  • Most tekintsük a qi → Qi (q, p), pi → Pi (q, p) transzformációt, amelyet xi → yi (x) alakban írunk. Ekkor

                                                                      ∂H
                                                     ẏ = (J JJ T )
                                                                      ∂y

    ahol J a Jij = ∂yi /∂xj Jacobi-mátrix. A Jacobi-mátrixot szimplektikusnak nevezzük, ha J JJ T
    az egységmátrix, ekkor a transzformáció kanonikus.

  • A Poisson-zárójel kanonikus transzformációk alatt invariáns. Ennek belátásához vegyük észre, hogy

                                               {f, g}x = (∂x f )T J(∂x g)

    ahol (∂x f )i = ∂f /∂xi . A láncszabály szerint ∂x = J T ∂y , amiből az állítás következik. Ha ezután csak
    kanonikus transzformációkat tekintünk, nem kell megadnunk, mely koordináták szerinti Poisson-
    zárójelet használjuk.
20 1. Klasszikus mechanika


 • Fordítva, ha egy transzformáció megőrzi a kanonikus Poisson-zárójeleket {yi , yj }x = Jij , akkor
   kanonikus. Ennek belátásához alkalmazzuk a láncszabályt:

                                     Jij = {yi , yj }x = J JJ T ij
                                                               

    ami pontosan a kanonikus transzformáció feltétele.
