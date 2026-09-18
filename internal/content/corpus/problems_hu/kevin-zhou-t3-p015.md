---
id: "kevin-zhou-t3-p015"
source: "kevin-zhou"
native_id: "KZ-T3-P015"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t3-p015"
topic: [termodinamika és statisztikus fizika]
subtopic: [fázisátalakulások, ferromágnesség, statisztikus-mechanika]
math_tools: [valószínűségszámítás és statisztika, differenciálás]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T3.txt"
source_url: "sources/kevin_zhou/site/handouts/T3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T3-P015

[4] 15. feladat. [A] Ebben a feladatban egy ferromágneses fázisátmenet egyszerű modelljét
    vezetjük be. Tekintsünk N elektront, amelyek spinje si = ±1 lehet. Egy konfiguráció energiája
                                              X         J X
                                     E = −B       si −         si sj .
                                                       2N
                                                  i            i̸=j

    Az első tag egy külső B mágneses tér hatását írja le, a második pedig egy J állandóval
    jellemzett kölcsönhatást, amely a spineket párhuzamos állásba igyekszik hozni. (Ebben az
    egyszerű modellben feltesszük, hogy minden különböző spinpár egyformán kölcsönhat egymással. Azt is
    megtehetnénk, hogy a spinek csak szomszédaikkal hassanak kölcsön, de ez megnehezítené az
    elemzést.)
                                                      P
      (a) Definiáljuk az átlagos mágnesezettséget m = i si /N módon. Határozzuk meg E(m)-et,
          vagyis az energiát m és a feladat többi állandójának függvényében.

     (b) Adjuk meg az adott m mágnesezettséghez tartozó állapotok Ω(m) számát.

     (c) Egy adott m érték valószínűsége e−βE(m) Ω(m)-mel arányos. Indokoljuk meg, hogy ez a
         valószínűség annál az m értéknél maximális, amely minimalizálja a szabadenergiát,
                                                      F = E − T S.
          ezért az egyensúlyi konfiguráció a szabadenergiát minimalizálja. Ez az F minimalizálásának
          statisztikus mechanikai indoklása; a termodinamikai indoklást a T2-ben tárgyaltuk.

     (d) Tegyük fel, hogy N ≫ 1, és használjuk a T2-ben említett log N ! közelítést. Mutassuk meg,
         hogy
         a szabadenergia F (m) akkor minimális, ha
                                                                            1
                                       m = tanh(βB + βJm),            β=        .
                                                                           kB T
          Rögzített B > 0 mellett ábrázoljuk m(T )-t. Ennek egyeznie kell a T1-ben bizonyított
          Curie-törvénnyel.

      (e) B = 0 esetén mutassuk meg, hogy létezik egy Tc kritikus hőmérséklet, amely felett m(T )
          nulla, alatta pedig nem nulla. Adjuk meg továbbá a mágnesezettség közelítő kifejezését
          közvetlenül Tc alatt.

      (f) T = Tc esetén adjuk meg m közelítő kifejezését kis B-re.
    Ez olyan fázisátmenet, amelyben az anyag spontán mágnesezetté válik, és egyben a
    fázisátmenet legegyszerűbb analitikusan kezelhető példája. Bár az (e) és (f) rész eredményei
    a részletes paraméterektől függenek, az ezekben kapott skálázások univerzálisak abban az
    értelemben, hogy hasonló modellek széles körére is érvényesek.

                                                        12


    Kevin Zhou                                                               Fizikaolimpiai feladatgyűjtemény
