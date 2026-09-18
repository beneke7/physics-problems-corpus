---
id: solution-document-eotvos-2019-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2019_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-2019-piston-heat-transfer, eotvos-2019-rope-waves, eotvos-2019-wire-cube-magnetic]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2019_S.pdf."
---

Beszámoló a 2019. évi Eötvös-versenyr®l


   Az Eötvös Loránd Fizikai Társulat 2019. évi Eötvös-versenye október 11-én délután 3 órai kezdettel tizenkét ma-
                        1
gyarországi helyszínen      került megrendezésre. Ezért külön köszönettel tartozunk mindazoknak, akik ebben szervezéssel,
felügyelettel a segítségünkre voltak. A versenyen a három feladat megoldására 300 per          áll rendelkezésre, bármely írott
vagy nyomtatott segédeszköz használható, de (nem programozható) zsebszámológépen kívül minden elektronikus esz-
köz használata tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy a verseny évében
fejezték be középiskolai tanulmányaikat. Összesen 56 versenyz® adott be dolgozatot, 19 egyetemista és 37 középiskolás.
   Ismertetjük a feladatokat és azok megoldását.

                                                                 ∗
   1. Egy könnyen mozgó dugattyú egy h®szigetelt, vízszintes tengely¶ hengert kezdetben két azonos, V0 térfogatú részre
oszt. Mindkét részben p0 nyomású, egyatomos ideális gáz van. A bal oldali részben a kezdeti h®mérséklet 2T0 , míg a jobb
oldali részbenT0 . A két részt elválasztó dugattyú mérsékelten h®vezet®, h®átadását az α paraméter jellemzi, azaz ∆T
h®mérséklet-különbség esetén a dugattyún id®egységenként átáramló h® α∆T .
   a) Mekkora lesz a két részben a gázok térfogata, h®mérséklete és nyomása hosszú id® elteltével?
   b) Adjuk meg az id® függvényében a két térrészben lev® gáz V1 (t) és V2 (t) térfogatát!

                                                                                                            ( Tasnádi Tamás)


   Megoldás. a) Amint a feladat szövege is mutatja, a kezdeti értékeket nulla indexszel, a bal oldali részt egyes, és
a jobb oldali részt kettes indexszel jelöljük. A végs® állapot mennyiségeit a  v  index mutatja. Az 1. ábra a folyamatot
és az állapotjelz®k értékeit foglalja össze.




                                                               1. ábra



   Mivel mindkét részben egyatomos ideális gáz van, a szabadsági fok f = 3. A kezdeti állapotra felírt gáztörvényb®l,


                                             p0 V0 = n1 R2T0 ,          p0 V0 = n2 RT0 ,

megkapjuk, hogy a jobb oldalon a mólok száma kétszer annyi, mint a bal oldalon: n2 = 2n1 .
   A dugattyú h®átadása következtében a bal oldali gáz lassan leh¶l, és a jobb oldali melegszik, miközben a dugattyú
balra tolódik. A folyamat lassúsága következtében a dugattyú két oldalán a nyomásnak meg kell egyeznie, azaz p1 = p2 .
Továbbá a rendszerben az energia megmarad, tehát a bels® energiák összege állandó:

                                       f          f         f        f
                                         n1 R2T0 + 2n1 RT0 = n1 RT1 + 2n1 RT2 ,
                                       2          2         2        2
amely egyszer¶sítések után, és a gáztörvényt felhasználva:


                                                 p0 V0 + p0 V0 = p1 V1 + p1 V2 .

A jobb és bal oldali térfogat összege nem változik, és így a fenti egyenletb®l következik, hogy a nyomás végig mindkét
oldalon állandó marad, azaz
                                                          p1 = p2 = p0 ,
és a folyamat izobár.
   Most rátérünk a végs® állapot meghatározására. Már tudjuk, hogy a végs® nyomás megegyezik a kezdetivel. A du-
gattyún történ® h®átadás következtében a végs® h®mérséklet a két oldalon ugyanakkora. Az energiamegmaradás

                                        f          f         f        f
                                          n1 R2T0 + 2n1 RT0 = n1 RTv + 2n1 RTv
                                        2          2         2        2
egyenletéb®l
                                                                     4
                                                              Tv =     T0 .
                                                                     3
Gay-Lussa    els® törvényéb®l
                                                       2                              4
                                               V1v =     V0      és          V2v =     V0 .
                                                       3                              3
  1 Részletek a verseny honlap ján: http://eik.bme.hu/~vanko/fizika/eotvos.htm


   b) Most térjünk rá a folyamat vizsgálatára. A bal oldali rész leh¶l, a jobb oldali melegszik, azaz a bal oldal ∆t id®
alatt bekövetkez® ki siny ∆T1 h®mérséklet-változása negatív, míg a jobb oldalra ∆T2 > 0. A folyamat izobár, ezért
a bal és jobb oldal egyenlete:

                   f +2                                                    f +2
                        n1 R∆T1 = α(T2 − T1 )∆t,           illetve              2n1 R∆T2 = α(T1 − T2 )∆t.
                     2                                                       2
   Ezek az egyenletek az

                       f +2      dT1                                       f +2       dT2
                            n1 R     = α(T2 − T1 ),        illetve              2n1 R     = α(T1 − T2 )
                         2        dt                                         2         dt
di eren iálegyenleteknek felelnek meg. Ezekb®l kifejezve a dT1 /dt és dT2 /dt hányadosokat, valamint bevezetve a ∆T =
T1 − T2 h®mérséklet-különbséget

                                 d∆T        3α                               d(T1 + 2T2 )
                                     =−             ∆T               és                  = 0.
                                  dt    (f + 2)n1 R                               dt

A második egyenletben a di eren iálandó mennyiség nem változik, és kezdeti értékét ismerjük, tehát


                                                      T1 + 2T2 = 4T0 .

Az els® egyenletben található állandó a h®átadási folyamat le sengési együtthatója:

                                                          3α        6αT0
                                                 λ=               =        .
                                                      (f + 2)n1 R   5p0 V0

   A fentihez hasonló di eren iálegyenlet a tudományokban számos helyen el®fordul. Ezek közül a legismertebb a ra-
dioaktív bomlás, amelynek a megoldása a λ állandóval le seng® exponen iális függvény. Mivel ismerjük ennek a függ-
vénynek a kezdeti értékét, ennélfogva
                                                       ∆T = T0 e−λt ,
és így
                                            4     2                           4     1
                                 T1 (t) =     T0 + T0 e−λt ,     T2 (t) =       T0 − T0 e−λt .
                                            3     3                           3     3
   A térfogatok változását most is Gay-Lussa       els® törvénye adja:

                                            2     1                           4     1
                                 V1 (t) =     V0 + V0 e−λt ,     V2 (t) =       V0 − V0 e−λt .
                                            3     3                           3     3
   Ezeket a függvényeket a 2. ábra gra konjain is bemutatjuk, ahol a h®mérsékletet T0 , a térfogatot V0 , az id®t pedig
1/λ egységekben mértük.




                                                           2. ábra




   2. Egy   a oldalél¶ ko ka minden éle egyforma, R ellenállású huzalból készült. A ko ka homogén, kezdetben B0
induk iójú mágneses mez®be merül, amit    τ id® alatt egyenletesen nullára sökkentünk. Mekkora a folyamat közben
keletkez® Joule-h®, ha a mágneses induk ióvektor a ko ka egy sú sban találkozó éleivel rendre α, β és γ hegyesszöget
            2        2       2
zár be? (cos α + cos β + cos γ = 1.)


                                                                                                            ( Vigh Máté)


   Megoldás. Képzeljük el egy pillanatra, hogy a mágneses térnek               sak az x irányú, id®ben

                                                    Bx (t) = Bx,0 (1 − t/τ )
szerint változó komponense létezik, a másik két komponens pedig zérus! Ekkor a szimmetria miatt a 3. ábra bal szélén
látható árameloszlás jönne létre. A ko ka 8 élében folyó, egyforma nagyságú Ix áramokat a Faraday-féle induk iótör-
vényb®l lehet meghatározni:
                                                    dΦ                              Bx,0
                                        Uind = −            −→          4RIx = a2        ,
                                                    dt                               τ
                                                                                    2
ahol felhasználtuk, hogy a mágneses tér irányára mer®leges lapokon átmen®, kezdeti a Bx,0 nagyságú  uxus τ id®
alatt   sökken nullára.




                                                            3. ábra



   Hasonlóan kapjuk az élekben folyó áramer®sségeket azokra az elképzelt esetekre, melyekben a mágneses mez®nek
 sak az y - vagy z -komponense van jelen (3. ábra középs® és jobb széls® rajza):

                                        a2 Bx,0                  a2 By,0                a2 Bz,0
                                 Ix =           ,        Iy =            ,      Iz =            .
                                        4R τ                     4R τ                   4R τ

   Ha a mágneses térnek mindhárom komponense jelen van, akkor a kialakuló feszültség- és árameloszlást a fenti
három eset szuperpozí iójaként kapjuk, ezt mutatja a 4. ábra.
   A teljes Joule-h® teljesítménye az id®ben állandó er®sség¶ áramok miatt konstans, nagysága pedig az egyes élekben
                2
disszipálódó RI   teljesítmények összege:

                                                             2                  2
                                         P = 2R(Ix + Iy ) + 2R(Ix − Iy ) +
                                                                  2                 2
                                              + 2R(Iy + Iz ) + 2R(Iy − Iz ) +
                                                                  2                 2
                                              + 2R(Ix + Iz ) + 2R(Ix − Iz ) .




                                                            4. ábra


                                          2            2    2     2
Ha a zárójeleket felbontjuk, az (Ix + Iy ) + (Ix − Iy ) = 2Ix + 2Iy összefüggés miatt a teljesítmény az alábbi alakra
egyszer¶södik:
                                                    P = 8R Ix2 + Iy2 + Iz2 .


A keletkez® Joule-h®t az el®bb kiszámított teljesítmény és a τ id® szorzataként számolhatjuk. Az Ix , Iy , Iz áramer®s-
ségekre korábban levezetett eredmények felhasználásával kapjuk a következ®t:

                                                        2      2      2
                                                    a4 Bx,0 + By,0 + Bz,0   a4 B02
                                    Q = Pτ =                              =        .
                                                    2R         τ            2R τ
Azt az érdekes eredményt kaptuk, hogy a Joule-h® független a mágneses tér irányától,                supán annak nagyságától függ.
A feladatban megadott α, β és γ szögekre tehát nem is volt szükség!


   3. Egy nagyon hosszú kötelet vízszintes helyzetben, a súlyánál sokkal nagyobb      F0 er®vel megfeszítünk. A kötél
a pozitív x tengelyen helyezkedik el, egyik vége pedig az origóban van.
    a) Ha a kötél origóban lév® végét A amplitúdójú, f frekven iájú harmonikus rezg®mozgással az x tengelyre mer®leges,
vízszintes y irányban mozgatjuk, a kötélben transzverzális hullámok jönnek létre, amelyek (a kötél hosszegységre es®
tömegét®l és a feszítettségét®l függ®) c sebességgel terjednek. (A hullámok amplitúdója ki si, vagyis A ≪ c/f .) Adjuk
meg a kötél x koordinátájú pontjának t id®pillanatbeli y(x, t) kitérését!
    b) Mekkora átlagos teljesítmény szükséges a kötél végének mozgatásához?
    c) Most a kötél origóban lév® vége y irányban szabadon elmozdulhat, de mozgását a kötél végének v(t) sebességével
arányos, −γv(t) er® fékezi. A kötélen egy A amplitúdójú szinuszhullám érkezik az origó felé. Azt tapasztaljuk, hogy
a hullám részben vagy esetleg teljesen visszaver®dik, melynek következtében egy, az origótól távolodó, B amplitúdójú
szinuszhullám is kialakul.
   Mekkora a visszavert hullám amplitúdója? Adjuk meg a          B/A arányt! Vizsgáljuk a γ → ∞ és γ → 0 (nagyon er®s és
nagyon gyenge      sillapítás) eseteket! Van-e olyan   γ   sillapítási tényez®, amelynél egyáltalán nem ver®dik vissza hullám
a kötél végér®l?


                                                                                                              ( Gnädig Péter)


   Megoldás. a) A kötél végpontjának rezg®mozgását az

                                                  y(t) = A sin(2πf t + ϕ0 )
függvénnyel írhatjuk le, ahol ϕ0 a rezgés fázisa a 0 id®pillanatban, amely az id®mérés kezdetének megfelel® megválasz-
tásával nulla lehet.
                                                                              x
   A rezgés c sebességgel terjed az x tengely mentén, x távolságra              id® alatt ér el. Így az x koordinátájú pontban
                                       x                                      c
a kitérés akkora, mint az origóban        id®vel korábban volt. Ez alapján a keresett hullámfüggvény:
                                       c

                                                  h         x  i                  2πf
                                  y(x, t) = A sin 2πf t −        = A sin 2πf t −       x .
                                                            c                       c

   b) A kötél alakját egy rögzített t = t1 pillanatban az

                                                                             2πf
                                       y(x) = y(x, t = t1 ) = A sin 2πf t1 −     x
                                                                              c

egyváltozós függvény adja meg, ahol 2πf t1 egy konstans.
   Bármely x pontban a kötél x tengellyel bezárt szögének tangense éppen ennek a függvénynek a meredeksége, amit
legegyszer¶bben (az x változó szerinti) deriválással határozhatunk meg:


                                                      dy      2πf              2πf
                                   tg α(x, t = t1 ) =    = −A     cos 2πf t1 −     x .
                                                      dx       c                c

   A kötél alakja azonban változik az id®vel, így egy adott ponton a meredekség (és az α szög is) az id® függvénye
lesz. Az origóban (az x = 0 helyen) a kötél iránytangense eszerint:


                                                     2πf             2πf        2πf
                       tg α(t) = tg α(x = 0, t) = −A     cos 2πf t −     0 = −A     cos(2πf t).
                                                      c               c          c

   A kötél mozgatásához szükséges (id®ben változó) pillanatnyi teljesítményt a


                                                       P (t) = Fy (t)vy (t)

szorzat határozza meg, ahol Fy (t) az általunk a kötél végére kifejtett y -irányú er®, vy (t) pedig a kötél origóban lév®
végének (y -irányú) sebessége (5. ábra ).




                                                              5. ábra


   Az y -irányú er® (felhasználva, hogy α ≪ 1):


                                                                          2πf
                                  Fy = −F0 sin α ≈ −F0 tg α = F0 A            cos(2πf t).
                                                                           c
   A kötél végének sebessége a rezg®mozgását leíró y(t) = y(x = 0, t) egyváltozós függvény (t szerinti, jól ismert)
deriváltja:
                                                     dy
                                              vy =      = 2πf A cos(2πf t).
                                                     dt
A pillanatnyi teljesítmény ezek alapján:


                                                             4π 2 f 2 A2 F0
                                    P (t) = Fy (t)vy (t) =                  cos2 (2πf t).
                                                                    c




                                                          6. ábra



                                          2
   A keresett átlagos teljesítmény   a cos (2πf t) függvény 6. ábráról leolvasható, jól ismert átlagértéke alapján
a maximális teljesítmény fele:
                                                     Pmax   2π 2 f 2 A2 F0
                                               P =        =                .
                                                      2            c
   c) Ebben a részben az origó felé érkezik egy hullám. Ennek hullámfüggvénye az ellenkez® irányú terjedés miatt:

                                                                   2πf
                                         y← (x, t) = A sin 2πf t +     x .
                                                                    c

   A visszaver®d® hullám ismét a pozitív irányban halad:

                                                                 2πf
                                       y→ (x, t) = B sin 2πf t −     x+ϕ ,
                                                                  c

itt fel kell vennünk egy egyel®re ismeretlen ϕ fáziskülönbséget is. A kötélen kialakuló hullám ennek a két hullámnak
a szuperpozí iója:
                                             y(x, t) = y← (x, t) + y→ (x, t).




                                                          7. ábra



   A kötél vége y irányban szabadon mozoghat, így a rá ható y -irányú er®k ered®jének minden pillanatban nullának
kell lennie:
                                                                 dy    dy
                                           F0 sin α − γvy ≈ F0      −γ    = 0.
                                                                 dx    dt
   A hullámfüggvény és a deriváltak:

                                                       2πf                      2πf
                         y = y← + y→ = A sin 2πf t +       x + B sin 2πf t −        x+ϕ ,
                                                        c                        c

                        dy   2πf                2πf       2πf               2πf
                           =     A cos 2πf t +      x −       B cos 2πf t −      x+ϕ ,
                        dx    c                   c        c                  c

                        dy                     2πf                         2πf
                           = 2πf A cos 2πf t +      x + 2πf B cos 2πf t −       x+ϕ .
                        dt                       c                          c


      Ezeket behelyettesítve az er®egyensúly képletébe, és rendezve:

                                                     dy           dy
                                                   F0        =γ          ,
                                                     dx x=0       dt x=0
                                         2πf                   2πf
                                      F0     A cos(2πf t) − F0     B cos(2πf t + ϕ) =
                                          c                     c
                                       = γ2πf A cos(2πf t) + γ2πf B cos(2πf t + ϕ),
                               F0 A cos(2πf t) − F0 B cos(2πf t) cos ϕ + F0 B sin(2πf t) sin ϕ =
                                γcA cos(2πf t) + γcB cos(2πf t) cos ϕ − γcB sin(2πf t) sin ϕ.
      Ezeknek az egyenleteknek minden id®pontban teljesülnie kell, így a cos(2πf t)-s és a sin(2πf t)-s tagokra külön-külön
is:

                                           F0 A − F0 B cos ϕ = γcA + γcB cos ϕ,
                                                  F0 B sin ϕ = −γcB sin ϕ.
A második egyenlet alapján sin ϕ = 0, ϕ = 0 (vagy ϕ = π ) és így cos ϕ = 1 (vagy cos ϕ = −1). Ezt felhasználva az els®
egyenlet alapján:
                                                      F0 − γc
                                                        B=    A.
                                                      F0 + γc
      Ha γ → ∞ (rögzítjük a kötél végét), akkor B = −A, tehát a hullám azonos amplitúdóval, de ellentétes fázisban
(π fázisugrással) ver®dik vissza.
      Ha γ → 0 (a kötél vége teljesen szabadon mozog), akkor B = A, azaz a hullám szintén azonos amplitúdóval, de
most azonos fázisban ver®dik vissza.
      B = 0-t akkor kapunk, ha γ = F0 /c, ilyenkor tehát egyáltalán nin s visszaver®dés.
    Megjegyzés. A b) és c) kérdésekre válaszolhatunk energetikai megfontolásokkal is. Ehhez a hullám   mozgási és rugalmas
helyzeti energiából származó   energias¶r¶ségét kell meghatározni.
                                                              ∗
      Az ünnepélyes eredményhirdetésre és díjkiosztásra 2019. november 22-én délután került sor az ELTE TTK Konfe-
ren iatermében. Jelen volt a 70 évvel ezel®tti, háború utáni els® Eötvös-verseny gy®ztese, Holi s László, aki pár szóban
visszaemlékezett erre a versenyre. Meghívást kaptak az 50 és 25 évvel ezel®tti Eötvös-verseny nyertesei is. Az 50 év-
vel ezel®tti díjazottak közül Láz József volt jelen, a 25 évvel ezel®tti díjazottak közül pedig Horváth Péter, Ková s
Krisztián, Tóth Gábor Zsolt és Varga Dezs® jött el   ®k pár mondatban beszéltek a pályafutásukról.
      Ezután következett a 2019. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Ti hy
Géza, a 2. feladatét Vigh Máté, a 3. feladatét Vankó Péter ismertette.
      Az esemény végén került sor az eredményhirdetésre. A díjakat Sólyom Jen®, az Eötvös Loránd Fizikai Társulat
elnöke adta át.
      Mindhárom feladat helyes megoldásáért I. díjban részesült Elek Péter, a BME  zika BS . szakos hallgatója,
a Debre eni Református Kollégium Dó zy Gimnáziumának érettségizett tanulója, Tófalusi Péter tanítványa.
      Két feladat hibátlan megoldásáért, illetve mindhárom feladat kisebb hibákkal való megoldásáért II. díjban részesült
Bokor Endre, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 11. osztályos tanulója, S hramek
Anikó tanítványa, Fajszi Bul sú, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos
tanulója, Horváth Gábor tanítványa, valamint Fitos Ben e, a BME  zika BS . szakos hallgatója, a Budapesti Németh
László Gimnázium érettségizett tanulója, Szászvári Irén és Dégen Csaba tanítványa.
      Két feladat lényegében helyes megoldásáért III. díjban részesült Csépányi István, a BME  zika BS . szakos
hallgatója, az Egri Szilágyi Erzsébet Gimnázium érettségizett tanulója, Szabó Miklós tanítványa, Máth Benedek
Huba, a BME  zika BS . szakos hallgatója, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium
érettségizett tanulója, Horváth Gábor és Nagy Piroska Mária tanítványa, Olosz Adél, a BME épít®mérnöki BS .
szakos hallgatója, a PTE Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Kon z Károly tanítványa,
valamint Svastits Domonkos, a BME  zika BS . szakos hallgatója, a budapesti Piarista Gimnázium érettségizett
tanulója, Chikán Éva tanítványa.
      Egy feladat hibátlan megoldásáért di séretben részesült Kondákor Márk, a BME  zika BS . szakos hallgatója,
a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Horváth Gábor és Nagy
Piroska Mária tanítványa, Magyar Róbert Attila, a BME  zika BS . szakos hallgatója, az Egri Dobó István Gim-
názium érettségizett tanulója, Hóbor Sándor tanítványa, valamint Pá sonyi Péter, a Zalaegerszegi Zrínyi Miklós
Gimnázium 12. osztályos tanulója, Pálovi s Róbert tanítványa.
      Az els® díjjal a verseny plakettjén kívül az NKFI Hivatal által nyújtott támogatásból 70 ezer, a második díjjal
50 ezer, a harmadik díjjal 30 ezer, a di sérettel 20 ezer forint pénzjutalom járt, a díjazottak tanárai és az országos
verseny szervez®i pedig a Typotex Kiadó könyveit kapták. A verseny megszervezését az Eötvös Loránd Fizikai Társulat
ebben az évben szintén az NKFI Hivatal által az Eötvös 100 emlékév alkalmából nyújtott támogatásból fedezte.

                                                                                Ti hy Géza, Vankó Péter, Vigh Máté
