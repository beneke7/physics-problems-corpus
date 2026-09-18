---
id: "kevin-zhou-e2-ex004"
source: "kevin-zhou"
native_id: "KZ-E2-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e2-ex004"
topic: [elektrosztatika]
subtopic: [tükörtöltések módszere, elektromos dipólusok, indukált töltések, multipólus-közelítés]
math_tools: [algebra, aszimptotikus közelítések]
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

4. példa

      Határozzuk meg egy p dipólusmomentumú dipólus és egy r sugarú, földelt vezető gömb között fellépő kölcsönhatási erő főtagját, ha a dipólus és a gömb közötti távolság R ≫ r. Mi a helyzet akkor, ha a gömb elektromosan semleges?

      Megoldás
      A koordináta-rendszer origóját a gömb középpontjába helyezzük, a z tengelyt pedig úgy irányítjuk, hogy átmenjen a dipóluson.
      A p = qd ẑ dipólust két töltés kombinációjának tekinthetjük:

                                      −q at z = R,             q at z = R + d

      ahol d nagyon kicsi. Földelt esetben ez két képtöltést hoz létre a gömbben:

                                   qr       r2                 qr         r2
                                      at z = ,           −        at z =
                                   R        R                 R+d        R+d

      amelyek egymástól megközelítőleg dr2 /R2 távolságra vannak. Most négyszer alkalmazhatnánk a Coulomb-törvényt, ez azonban kissé fáradságos lenne. Ehelyett bontsuk fel a képtöltéseket egy dipólusmomentumra és egy eredő töltésre:

                                           pr3                qr    qr  pr
                                    p′ =       ,    Q′ =         −     ≈ 2.
                                           R3                 R    R+d  R
      Mindkettőt az origóba helyezhetjük, mert ez a kis eltolás csak az r/R szerinti magasabb rendű tagokkal módosítja az eredményt. Ekkor a hozzájuk tartozó, a z tengely mentén távolban érvényes terek:

                                                   2kpr3                       kpr
                                    Ep′ (z) =             ,        EQ′ (z) =          .
                                                   R3 z 3                      R2 z 2


                                                              10


Kevin Zhou                                                              Physics Olympiad Handouts



  Az első tag elhanyagolható a másodikhoz képest, mivel a nevezőben R és z sokkal magasabb hatványai szerepelnek. Ezért csak a második tagot megtartva az eredeti dipólusra ható erő:

                                          d              2kp2 r
                                   F =p      E(z)     =−
                                          dz      z=R     R5

  amely a távolsággal nagyon gyorsan csökken. Ez a levezetés egy gyakori finomságot szemléltet: nem mindig nyilvánvaló, hogy milyen rendig kell közelíteni. Az r/R szerint magasabb rendű tagokat elhagytuk, mert csak a vezető rendű járulékkal foglalkoztunk. Ha azonban már az első lépésben alkalmaztuk volna ezt az elvet a képtöltésekre, elhagytuk volna a kicsiny Q′ eredő töltést is, amely valójában a dipólusmomentum p′ kicsinysége miatt a legnagyobb erőjárulékot adja.

  Semleges gömb esetén azonban teljesen más a helyzet. Az 5. feladat gondolatmenete szerint a semlegesség biztosításához egy harmadik képtöltés is kerül a gömb középpontjába:
                                              pr
                                          −      at z = 0.
                                              R2
  A képtöltések most két dipólusmomentum kombinációjára bonthatók. Az elsőt, a p′-t már meghatároztuk; a második vezető rendű közelítése

                                                pr r2   pr3
                                        p′′ ≈         =
                                                R2 R    R3
  amelynek nagysága és iránya megegyezik p′-ével. Így a képtöltések rendszerének közelítő dipólusmomentuma 2p′, a hozzá tartozó erő pedig

                                       d 4 kpr3          12 kp2 r3
                                F =p                 = −
                                       dz R3 z 3 z=R        R7

  amely a távolsággal még gyorsabban csökken. Ebben a levezetésben nem kellett túlságosan aggódnunk p′′ pontos meghatározása miatt, mert nem volt olyan eredő töltésből („monopólusból”) származó tag, amely elnyomhatta volna a dipólusteret; ezért az összes többi térjárulékot biztonságosan elnyomják az r/R magasabb hatványai. (Természetesen ha p′′ a p′-ével ellentétes irányúnak adódott volna, úgyhogy a két dipólusmomentum csaknem kioltja egymást, óvatosabban kellett volna eljárnunk.)

  E példa tanulsága nem az, hogy mindig használjuk az egzakt kifejezéseket, és csak a végén fejtsük őket Taylor-sorba.
  Ebben az esetben ez a nyers erőből végzett eljárás hat Coulomb-törvényből származó erő 1/R7 rendig történő Taylor-sorba fejtését igényelte volna, ami rendkívül fáradságos. A megfelelő közelítéshez ehelyett minden esetben gondosan meg kell fontolnunk a feladatot. Mellesleg a fenti 1/R7 erőt, amikor egy poláris és egy semleges, nem poláris molekulára alkalmazzuk, Debye-erőnek nevezzük; ez a „van der Waals-erők” egyike, amelyeket a kémiaórákon gyakran csak nagy vonalakban ismertetnek.

  5. példa

  Becsüljük meg egy q ponttöltés és egy ℓ hosszúságú, vékony vezetőrúd közötti kölcsönhatási erőt, ha a rúd a töltéstől L ≫ ℓ távolságra van, és a két testet összekötő irányban helyezkedik el.




                                                  11


    Kevin Zhou                                                                Physics Olympiad Handouts


       Megoldás
       A kölcsönhatás oka, hogy a ponttöltés negatív töltéseket indukál a rúd közeli végén, pozitív töltéseket pedig a távoli végén. Ezekre a töltésekre ezután a ponttöltés elektromos tere erőt fejt ki.

       Nagyon durva becsléshez tegyük fel, hogy a távoli végen Q, a közeli végen pedig −Q töltés jelenik meg. Az így létrejövő, a rúd közepén keltett tér
                                                        kQ
                                                  E∼       .
                                                        ℓ2
       Másfelől ennek ki kell oltania a ponttöltés által keltett
                                                           kq
                                                   E∼
                                                           L2
       amiből Q ∼ (ℓ/L)2 q adódik. Az indukált töltésekre ható erő ekkor

                                                                       kq 2 ℓ3

                                           1        1        kqQℓ
                             F ∼ kqQ             −      ∼  −       ∼ −         .
                                        (L + ℓ)2 L2           L3        L5

       Az erő ismét vonzó, és a távolsággal gyorsan csökken.
