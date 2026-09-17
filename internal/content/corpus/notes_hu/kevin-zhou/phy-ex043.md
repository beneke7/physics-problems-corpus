---
id: kevin-zhou-notes-phy-ex043
source: kevin-zhou-notes
native_id: "phy Example 043"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex043
topic: [statisztikus-mechanika]
subtopic: [ideális-gázok, kölcsönható-gázok, virialkifejtés]
math_tools: [klaszterkifejtés, partíciós-függvények, sűrűségkifejtés]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3794-3950"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Szabadsági fokok számlálása. Egyatomos gáznak három szabadsági foka van; az atom kinetikus energiája (3/2)kB T . A kétatomos gáznak hét van: a tömegközéppont három transzlációs szabadsági foka, két forgási szabadsági fok és a rezgési módus, amely a kötés potenciális energiája miatt kétszer számít, de szobahőmérsékleten befagyott.
    Egy másik számlálási módszer szerint egyszerűen minden atomhoz (3/2)kB T kinetikus energiát rendelünk; ez helyes, mert az egyatomos gáz energiájának levezetése minden egyes atomra külön érvényes abban a pillanatban, amikor egy másik atommal ütközik. A potenciális energia ezután (1/2)kB T -vel járul hozzá.

Most a gyenge kölcsönhatások hatásait vizsgáljuk.

  • Az ideális gáz törvényének korrekcióit gyakran sűrűségkifejtés formájában írják fel:

                                  p     N          N2          N3
                                      =   + B2 (T ) 2 + B3 (T ) 3 + · · ·
                                 kB T   V          V           V
    ahol a Bi (T ) mennyiségeket virialegyütthatóknak nevezzük.

  • Az együtthatók kiszámításához feltevésre van szükségünk a kölcsönhatási potenciálra. Feltesszük, hogy a sűrűség viszonylag kicsi, ezért csak a páronkénti kölcsönhatások számítanak:
                                                    X
                                            Hint =      U (rij ).
                                                     i<j


  • Ha az atomok semlegesek és nincs permanens dipólusmomentumuk, akkor vonzó 1/r6 van der Waals-kölcsönhatásuk lesz. Rövid távolságokon az atomok erősen taszítják egymást; a Lennard–Jones-potenciálban ezt kényelmi okokból 1/r12 alakúnak vesszük. Esetünkben még egyszerűbb, keménymagú taszítást választunk:
                                            (
                                              ∞            r < r0
                                    U (r) =              6
                                              −U0 (r0 /r) r ≥ r0 .

  • A lendületintegrált a szokásos módon elvégezve a partíciós függvény:
                                               Z Y
                                          1                   P
                                                            −β j<k U (rjk )
                         Z(N, V, T ) =               dr i e                 .
                                       N !λ3N
                                                            i
73 3. Statisztikus mechanika


    Csábító lenne βU szerint kifejteni, ez azonban nem működik, mert U nagy (sőt végtelen!). Ehelyett bevezetjük a Mayer-féle f-függvényt:
                                         f (r) = e−βU (r) − 1
    amely itt −1 és 0 közé esik. Ekkor
                                                 Z Y
                                             1           Y
                            Z(N, V, T ) =            dri   (1 + fjk ).
                                          N !λ3N
                                                          i     j>k

Az f hatványai szerinti kifejtés ezért ésszerűbb. Ez nem az energiák perturbációja, hanem a „foglalási valószínűségek/sűrűségek perturbációja”.

 • A nulladrendű tag V N -t ad vissza. Az elsőrendű tag:

                                   N 2 N −2                         N 2 N −1
                Z Y       X                  Z                               Z
                      dri    fjk ≈     V         dr1 dr2 f (r12 ) ≈    V       drf (r)
                                    2                                2
                      i       j>k

    ahol a tömegközéppont-koordinátát kiintegráltuk. Az r-integrál határaival nem kell törődnünk, mert a járulékának nagy része atomi léptékű r-ekből származik.

 • Ha ezt az integrált f-fel jelöljük, akkor f elsőrendjében
                                                                      N
                                  VN           N 2f      VN
                                                             
                                                                   Nf
                              Z=            1+        ≈         1+
                                 N !λ3N        2V       N !λ3N     2V
    így
                                                                             N 2 kB T
                          F = Fideal − N kB T log(1 + N f /2V ) ≈ Fideal −            f.
                                                                               2V
    Mivel f ∼ r03 , az első- és nulladrendű tag aránya N r03 /V nagyságrendű, ami megadja, mit jelent az „alacsony sűrűség”. Ha viszont a potenciál 1/r3 vagy lassabb ütemben cseng le, f divergál, vagyis a kifejtésünk hosszú hatótávolságú erők esetén felbomlik.

 • A nyomást p = −∂F/∂V -ként kiszámítva:

                                               pV        Nf
                                                     =1−    .
                                              N kB T     2V

Nyilvánvalóan kiszámítottuk a B2 (T ) virialegyütthatót. f explicit meghatározása a van der Waals-állapotegyenleteket adja.

A magasabb rendű korrekciók a klaszterkifejtéssel hatékonyan meghatározhatók.

 • Tekintsük a Z fenti teljes kifejtésének egy általános O(f E ) tagját. Egy ilyen tag reprezentálható egy N csúcsú és E élű, ismétlődő éleket nem tartalmazó G gráffal. A gráf W [G] értékét jelölve:
                                                    1 X
                                           Z=           W [G].
                                                 N !λ3N
                                                         G


 • Minden G gráf összefüggő komponensekre, úgynevezett klaszterekre bontható; mindegyik független multiplikatív tényezővel járul hozzá W [G]-hez.
74 3. Statisztikus mechanika


  • A kifejtés megszervezésének legkényelmesebb módja a klaszterek számának és méretének használata. Legyen Ul az összes l-klaszter járuléka:
                                              l
                                            Z Y                 X
                                     Ul =            dri                    W [G].
                                              i=1          G is l−cluster
                                                                                        P
    Most tekintsük az összes olyan gráf járulékát, amelyben ml darab l-klaszter van, úgy, hogy                ml l = N . Ezek értéke
                                             Y N ! U ml
                                                       l
                                                            .
                                                (l!)m
                                                    l m  l!
                                                 l

    ahol a különböző faktoriálisok megakadályozzák az l-klasztereken belüli és az azok közötti túlszámlálást.

  • {ml } szerint összegezve a partíciós függvény:

                                                1     XY             Ulml
                                        Z=
                                              λ3N                 (l!)ml ml !
                                                      {ml } l

    ahol az N ! tényező kiesett.

  • A zavaró megkötés
                                          P
                                            ml l = N , amelyet a nagykanonikus sokaságra áttéréssel küszöbölünk ki. A z = eβµ fugacitást definiálva:
                          X               X Y 1  z l Ul ml Y          
                                                                          Ul 3l
                                                                                  
                  Z(µ) =      z n Z(N ) =                       =   exp      λ  l!  .
                                                 ml ! λ3l l!              zl
                            N               {ml } l                                 l


  • A bl = (λ3 /V )(Ul /l!λ3l ) definícióval a kifejezés egyszerűsödik:
                                                                            !
                                                             V X l
                                        Z(µ) = exp              bl z            .
                                                             λ3
                                                                  l

Látjuk, hogy ha a szabadenergia meghatározásához logaritmust veszünk, csak a bl jelenik meg, a bl magasabb hatványai nem. Ez az összes diagram összegzését csak az összefüggő diagramok összegzésére redukálja. A z hatványai szerinti kifejtéssel meghatározhatjuk a virialegyütthatókat.
