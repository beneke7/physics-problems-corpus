---
id: kevin-zhou-notes-phy-ex004
source: kevin-zhou-notes
native_id: "phy Example 004"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex004
topic: [klasszikus mechanika]
subtopic: [kis rezgések, normálmódusok]
math_tools: [lineáris algebra, differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "324-363"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Kis rezgések n szabadságfokkal. Induljunk ki a legáltalánosabb Lagrange-függvényből
q és q̇ másodrendjéig. A konstans tagokat elhagyhatjuk, mert nincs hatásuk,
valamint a q̇i tagokat, mert teljes deriváltak, és nem befolyásolják a mozgásegyenleteket. Ha
továbbá feltesszük, hogy q = 0 egyensúlyi pont, akkor a qi tagokat is kizárjuk. Végül a qi q̇j
tagok sebességfüggő erőket jelentenek, ezeket pedig az egyszerűség kedvéért szintén elhagyjuk. Így
a következő Lagrange-függvényhez jutunk:
                                           1          1
                                     L = q̇T T q̇ − qT V q.
                                           2          2
Itt T és V az általánosság megszorítása nélkül szimmetrikusnak vehető. A kinetikus energiának mindig
pozitívnak kell lennie, ezért feltesszük, hogy T pozitív definit. Az Euler–Lagrange-egyenlet ekkor

                                              q̈ = T −1 V q

ahol az inverz létezik, mivel T pozitív definit. Ennek a lineáris mozgásegyenletnek az általános megoldása
normálmódusok szuperpozíciójával adható meg. Ha konkrétan q = q0 eiωt , akkor

                                         (T −1 V + ω 2 )q0 = 0.

A normálmódusok tehát a T −1 V sajátvektorai. Mivel ez a mátrix szimmetrikus,
a normálmódusok teljes bázist alkotnak, és minden ω 2 valós, ezért ω vagy valós (rezgést jelentő),
vagy tisztán képzetes (instabilitásból eredő exponenciális növekedést jelentő). Az utóbbi
megoldást elkerülhetjük, ha V-ről is feltesszük, hogy pozitív definit.
   A megoldások egyszerűségét jobban láthatóvá tehetjük, ha „normálkoordinátákra” váltunk.
A q = Aξ definícióval a Lagrange-függvény
                                    1 T             1
                                 L = ξ̇ (AT T A)ξ̇ − ξT (AT V A)ξ.
                                    2               2
T és V egyidejű diagonalizálása lehetséges. Ehhez legyen A = BC, ahol C ortogonális.
B ezután úgy választható meg, hogy B T T B = I legyen: B-t a T-t diagonalizáló ortogonális mátrixból
és egy olyan diagonális mátrixból építjük fel, amely a diagonális elemeket egyre skálázza. Ekkor

                                AT T A = I,    AT V A = C T (B T V B)C.

B T V B egy másik szimmetrikus mátrix, így C választható úgy, hogy diagonalizálja. Ekkor
                                            1 T     1
                                         L = ξ̇ ξ̇ − ξT W ξ
                                            2       2
ahol W a ωi2 elemekből álló diagonális mátrix. Az előző bekezdéshez való kapcsolathoz vegyük észre,
hogy T −1 V A = AW, tehát A oszlopai tartalmazzák a korábban bevezetett normálmódusokat.
