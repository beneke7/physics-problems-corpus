---
id: "kevin-zhou-m2-ex011"
source: "kevin-zhou"
native_id: "KZ-M2-EX011"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-ex011"
topic: [mechanika]
subtopic: [rugalmasság, rugók, tömegközéppont]
math_tools: [differenciálszámítás, integrálás, differenciálegyenletek]
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

A feladat megoldására sokféle lehetőség van, de most egy olyan módszert mutatok be, amely megbízhatóan működik
   nálam. A Lagrange-féle módszert fogjuk használni, és az Euler-féle módszerrel való összetévesztés elkerülése érdekében a rugót
   diszkrét darabokra bontjuk. Legyen a rugó N ≫ 1 darabból, amelyek tömege m/N , rugóállandója N k, nyugalmi hossza pedig L/N . A
   kifejezéseinkben összegek fognak szerepelni, amelyeket a P1-ben ismertetett módszerrel integrálokkal helyettesítünk.

   Az alulról számított i-edik rugóban a feszítőerő (i/N )mg, ezért a megnyúlása
                                                 1 i      mg
                                    ∆Li =            mg =      i.
                                                kN N      kN 2
   A teljes megnyúlás
                                  N                  Z N
                                  X           mg                      mg
                                        ∆Li =                i di =      .
                                              kN 2       0            2k
                                  i=1

   Ez összhangban van azzal, hogy a feszítőerő átlagos értéke mg/2. A tömegközéppont meghatározásához vegyük észre, hogy a
   j-edik rugó lefelé, a következő távolsággal mozdul el
                                          N
                                                                   j2

                                          X           mg
                                  ∆yj =         ∆Li =            1− 2
                                                      2k           N
                                          i=j

   a gravitáció hiányában elfoglalt helyzetéhez képest. A tömegközéppont elmozdulása
                         N         N             Z N
                                         j2

                       1 X       1 X           1                    2
                ∆ycm =     ∆yj ∝       1− 2 = 3      N 2 − j 2 dj =
                       N         N       N    N 0                   3
                            j=1            j=1

   így az arányossági tényezőt visszaállítva kapjuk
                                                         mg
                                                ∆ycm =      .
                                                         3k


                                                    17


    Kevin Zhou                                                              Physics Olympiad Handouts



        Ha szeretnénk ellenőrizni, hogy megértettük-e a Slinky-rugók működését, ezt a feladatot az Euler-féle módszerrel is
        megpróbálhatjuk megoldani. Ezt célszerű lenne diszkretizálás nélkül elvégezni. Az első lépések a ρ(z) sűrűség és a T (z)
        feszítőerő közötti, Hooke-törvényből adódó kapcsolat meghatározása, valamint annak felírása lennének, hogy a lokális
        erőegyensúly hogyan írható fel differenciálegyenletként.
