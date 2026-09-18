---
id: "kevin-zhou-m3-p004"
source: "kevin-zhou"
native_id: "KZ-M3-P004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m3-p004"
topic: [mechanika]
subtopic: [lendületmegmaradás, energia-megmaradás, ütközések]
math_tools: [algebra, geometria és trigonometria]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M3.txt"
source_url: "sources/kevin_zhou/site/handouts/M3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

[3] 4. feladat. Egy m tömegű testet nyugalomban egy M tömegű, súrlódásmentes ék tetejére helyezünk. Az
    ék egy súrlódásmentes vízszintes asztalon nyugszik, ferde teteje pedig θ szöget zár be a vízszintessel.

      (a) A test elengedésekor mekkora az ék vízszintes gyorsulása?

      (b) Tegyük fel, hogy a test az asztal fölött d távolságban van. Az (a) rész eredményét felhasználva mekkora a test
          vízszintes sebessége közvetlenül a padló elérése előtt?

        (c) Határozzuk meg a test sebességét a padlóra érkezése után, az energia- és lendületmegmaradást az egész
            folyamatra alkalmazva.

      (d) Az (b) és (c) részre kapott eredményeknek nem szabad megegyezniük. Mi ennek az oka?


    2     Lendület
         2. gondolat
         Egy rendszer lendülete
                                                X
                                           P=        mi vi = M vCM .
                                                 i

         Különösen, a rendszerre ható teljes külső erő M aCM , és ha nincsenek külső erők, a tömegközéppont állandó
         sebességgel mozog.

         2. példa

         Egy tömeg nélküli kötél súrlódásmentes csigán halad át. Az egyik oldalán egy majom függ, a másik oldalán pedig
         egy pontosan ugyanakkora súlyú banáncsomó. Mi történik, amikor a majom megpróbál felfelé mászni a kötélen?




                                                       3


Kevin Zhou                                                               Fizikaolimpiai feladatgyűjtemény


  Megoldás
  Meglepő módon a válasz nem függ attól, hogyan mászik a majom: lassan vagy gyorsan, illetve szimmetrikusan vagy sem! A
  majomra ható eredő függőleges erő T − mg, ezért a majom tömegközéppontjának gyorsulása T /m − g. Mivel azonban a
  feszítőerő a tömeg nélküli kötél teljes hosszában állandó, a banáncsomó gyorsulása szintén T /m − g. Ezért a majom és
  a banáncsomó azonos ütemben emelkedik, és a csigánál találkoznak.

  Most egy kérdés az olvasóhoz: a mennyezethez rögzített kötélen való felmászáshoz képest a csigáig való felmászás
  kétszer annyi munkát igényel, mert a banánokat is felemeljük. De mindkét esetben nem ugyanakkora erőt fejt ki a majom
  ugyanakkora úton? Honnan származik a többletmunka? (A válasz a feladatsor végén szereplő gondolatokhoz kapcsolódik.)

  3. példa: KK 3.14 / INPhO 2014.5

  Két, egyenként m tömegű ember kezdetben nyugalomban áll egy M tömegű vasúti lapos kocsin. A kocsi egyik végén, a
  kocsihoz képest u sebességgel leugranak róla. A kocsi súrlódásmentesen az ellenkező irányba gurul. Határozzuk
  meg a lapos kocsi végsebességét abban az esetben, amikor egyszerre, illetve amikor egymás után ugranak le. Általánosítsuk
  az eredményt N ≫ 1 ember esetére, akik össztömege mtot .

  Megoldás
  Az első esetben a lendületmegmaradás alapján

                                        M v + 2m(v − u) = 0

  ahol v a lapos kocsi végsebessége, így
                                                   2mu
                                           v=            .
                                                  M + 2m
  A második esetben hasonló megfontolással azt kapjuk, hogy az első ember leugrása után
                                                   mu
                                           v1 =          .
                                                  M + 2m
  Most térjünk át a kocsival együtt mozgó vonatkoztatási rendszerbe. Amikor a második ember leugrik, egy hasonló
  megfontolás alapján további v2 = mu/(M + m) sebességet ad át a kocsinak. A lapos kocsi talajhoz viszonyított
  végsebessége ekkor

                                                     1         1
                             v = v1 + v2 = mu               +      .
                                                   M + 2m M + m

  Kissé zavaró lehet, hogy a lapos kocsi végsebességei és így energiái különböznek, noha az emberek mindkét esetben
  ugyanazt teszik (vagyis ugyanannyi energiát használnak fel a lábukban az elrugaszkodáshoz).

  A különbség oka, hogy a második esetben a másodikként leugró ember kevesebb energiával rendelkezik, mivel az ugrással
  szerzett sebességét részben kioltja a már meglévő


                                                     4


    Kevin Zhou                                                              Fizikaolimpiai feladatgyűjtemény



       sebesség v1 . Így a kocsiba kerülő többletenergia annak felel meg, hogy az emberek az ugrás után kevesebb
       mozgási energiával rendelkeznek; ez végül hővé alakult volna, miután megcsúszva megállnak. A rendszerben lévő
       minden test mozgási energiájának helyes elszámolása számos energiával kapcsolatos paradoxont old meg, ahogy azt
       alább látni fogjuk.

       Sok ember esetén hasonló gondolatmenettel az első esetben
                                                     mtot
                                              v=            u
                                                   M + mtot
       adódik, míg a második esetben a válasz az összeg
                                            N
                                            X mtot u         1
                                       v=                             .
                                                  N    M + (i/N )mtot
                                            i=1

       Ez integrállá alakítható, ha x = i/N , ekkor ∆x = 1/N, és
                                              Z 1
                       X          mtot u                mtot u           M + mtot
                   v=      ∆x              ≈      dx             = log               u.
                               M + xmtot       0     M + xmtot               M
                            i

       Megjegyzendő, hogy ez lényegében a rakétaegyenlet; ezt M6-ban más módszerrel fogjuk levezetni.
