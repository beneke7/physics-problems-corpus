---
id: solution-document-eotvos-2018-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2018_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-2018-charged-cylinder-solenoid, eotvos-2018-gas-mixture-heating, eotvos-2018-rotating-bubble]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2018_S.pdf."
---

Beszámoló a 2018. évi Eötvös-versenyr®l

   Az Eötvös Loránd Fizikai Társulat 2018. évi Eötvös-versenye október 12-én délután 3 órai kezdettel tizennégy
                           1
magyarországi helyszínen       került megrendezésre. Ezért külön köszönettel tartozunk mindazoknak, akik ebben szer-
vezéssel, felügyelettel a segítségünkre voltak. A versenyen a három feladat megoldására 300 per          áll rendelkezésre,
bármely írott vagy nyomtatott segédeszköz használható, de (nem programozható) zsebszámológépen kívül minden
elektronikus eszköz használata tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy
a verseny évében fejezték be középiskolai tanulmányaikat. Összesen 50 versenyz® adott be dolgozatot, 17 egyetemista
és 33 középiskolás.
   Ismertetjük a feladatokat és azok megoldását.

                                                                  ∗
   1. Egy zárt, hosszú, henger alakú, szobah®mérséklet¶ vízzel telt tartályban egy V = 1 cm3 térfogatú, normál nyomású
légbuborék található. A tartályt egy ¶rállomáson, a súlytalanság állapotában óvatosan gyorsítva forgatni kezdjük a szim-
metriatengelye körül, majd mikor a tartály eléri az ω = 300 s−1 szögsebességet, azt állandó értéken tartjuk. Milyen
alakot vesz fel ekkor a légbuborék? Adjuk meg a buborék jellemz® méreteit! A víz felületi feszültsége α = 0,07 N/m.
                                                                                                           (Vigh Máté)
   I. megoldás (energiaminimum). Ha nem forogna a henger, a buborék a felületi feszültség miatt gömb alakú
lenne. Ha nem lenne felületi feszültség, akkor a forgó folyadékban a buborék egy nagyon hosszan elnyúló nagyon vékony
szál lenne a henger szimmetriatengelyénél. Most a henger elég nagy szögsebességgel forog, de hat a felületi feszültség is,
így egy hosszan elnyúlt virsli alakú buborékot feltételezünk, melynek alakját egy r sugarú, ℓ hosszúságú hengerrel
                                              2
közelíthetjük. A térfogat állandósága miatt ℓr π = V .
   A rendszer teljes energiája a buborék felületi energiájából és a buborék helyér®l kiszoruló folyadék helyzeti energi-
ájából adódik össze. Akkor lesz egyensúly, ha ez az energia minimális.
                                                                                                  2
   A forgó rendszerben egy dm tömeg¶ folyadékdarabra a henger tengelyét®l x távolságra ω              x dm   entrifugális er®
hat. Emiatt a henger tengelyét®l x távolságra lév® tömegdarab helyzeti energiája
                                                     Z x
                                                                            1
                                           dE = −          ω 2 x′ dm dx′ = − ω 2 x2 dm.
                                                       0                    2

   A henger alakú buborékból kiszorul a víz, és a henger szimmetriatengelyéig emelkedik. A teljes helyzeti energia
növekedése, felhasználva, hogy az x sugarú, dx vastagságú hengergy¶r¶ tömege dm = ̺2xπℓ dx,
                                           Z r
                                                 1 2 2              1            1
                                   Ecf =           ω x ̺ · 2xπℓ dx = ω 2 r4 ̺ℓπ = ω 2 r2 ̺V.
                                            0    2                  4            4

A felületi energia (a henger ismeretlen alakú végeinek járulékát elhanyagolva)


                                                                           2V α
                                                      Efel = 2rπℓα =            ,
                                                                            r
a teljes energia pedig
                                                                   1 2 2      2V α
                                                E = Ecf + Efel =     ω r ̺V +      .
                                                                   4           r
   A minimumot deriválással keressük meg:

                                                   dE  1         2V α
                                                      = ω 2 r̺V − 2 = 0,
                                                   dr  2          r
amib®l                                      r
                                                 4α                              V
                                       r= 3          ≈ 1,5 mm         és   ℓ=        ≈ 15 cm.
                                                 ω2̺                            r2 π
Valóban jogos volt tehát az a feltételezés, hogy a buborék alakja közelít®leg egy nyújtott henger.

   II. megoldás (er®egyensúly). Vágjuk félbe a virslit, és írjuk fel az er®k egyensúlyát (1. ábra )!




                                                               1. ábra

  1 Részletek a verseny honlap ján: http://eik.bme.hu/∼vanko/fizika/eotvos.htm.
   A forgó folyadékban a tengelyt®l x távolságra a nyomás:

                                                              1 2 2
                                                     p(x) =     ̺ω x + C,
                                                              2
ahol C kés®bb meghatározandó állandó. A buborékon belül mindenhol ugyanakkora p0 nyomás uralkodik. A henger
falánál ez a nyomás a folyadék ottani p(r) nyomásának és a görbületi nyomásnak az összege:

                                                                        α
                                                        p0 = p(r) +       ,
                                                                        r
amib®l
                                                                        α
                                                        p(r) = p0 −       .
                                                                        r
Ezt összevetve a folyadék nyomáseloszlására felírt összefüggéssel az abban megjelen® C állandó meghatározható:

                                                                α 1 2 2
                                                   C = p0 −       − ̺ω r .
                                                                r  2
   A folyadék által a virsli egyik felére kifejtett tengelyirányú er® a folyadék nyomásának egy r sugarú körlapra vett
integráljaként számítható ki (   2. ábra ):
                           Z r                  Z                                  
                                            1 2 r 2                     α 1 2 2
                     F1 =    p(x) · 2πx dx = ̺ω    x · 2πx dx + p0 − − ̺ω r · πr2 =
                           0                2    0                      r    2
                          1 2 π 4                      π                            π
                        = ̺ω · r + p0 · πr2 − α · πr − ̺ω 2 r4 = p0 · πr2 − α · πr − ̺ω 2 r4 .
                          2     2                      2                            4




                                                              2. ábra



    A virsli másik fele által kifejtett húzóer® (a felületi feszültség miatt): F2 = α · 2πr, míg a másik félben lév® leveg®
                                         2
által kifejtett nyomóer®: F3 = p0 · πr .
   Az er®egyensúly tehát tengelyirányban így írható fel:


                                                                    F1 + F2 = F3 ,
                                                          π
                                       p0 · πr2 − α · πr − ̺ω 2 r4 + α · 2πr = p0 · πr2 ,
                                                          4
amib®l az   I. megoldással összhangban a következ® megoldás adódik:
                                                                r
                                                                    4α
                                                         r= 3            .
                                                                    ̺ω 2
   2. Egy tartályban 1 mólnyi egyatomos gáz és 2 mólnyi kétatomos gáz keveréke található. A tartály fala az egyatomos
gáz atomjait átengedi, de a kétatomos gáz molekuláit nem. Kezdetben a tartály a 20 ◦ C-os környezettel egyensúlyban
van. A tartályban lév® gázkeveréket egy f¶t®test lassan 120 ◦ C-kal felmelegíti.
   a) Mennyivel változik meg a tartályban lév® gáz bels® energiája?
   b) Mennyi h®t ad le a f¶t®test a gáznak? (A tartály melegedéséhez szükséges h®t és a tartály h®vezetését hagyjuk
gyelmen kívül!)
                                                                                                        (Ti hy Géza)
   Megoldás. a) Két gázkeverék akkor van egyensúlyban, ha azon komponensek par iális nyomása megegyezik,
melyek a két tartály között áramolhatnak. Feladatunkban           sak az egyatomos molekulák gázát engedi át a fal, ezért ha
egyensúlyban a tartályban lév® egyatomos gáz par iális nyomása p1 , akkor a környezetben ennek a gáznak a par iális
nyomása is ugyanakkora. Ez az egyensúly a kétatomos gáz par iális nyomására nem jelent megszorítást.
   El®ször vizsgáljuk az egyatomos gáz folyamatát! Mivel ennek par iális nyomását a környezet állítja be állandóra, ez
egy izobár folyamat, de a mólok száma, amely kezdetben n1k = 1 mol nem állandó, hanem a folyamat közben állandóan
változik, melegítés hatására gáz áramlik a tartályból a környezetbe. Az egyesített gáztörvény alapján p1 V        = n1 RT ,
ahol V a tartály térfogata. Mivel sem a par iális nyomás, sem a térfogat nem változik, a folyamatra az


                                                        n1 T = állandó

összefüggés jellemz®.
                                                              3. ábra


                                                                                                                ◦
    A kétatomos gázt a fal nem engedi át, ennélfogva térfogata állandó, a folyamat izo hor. A f¶t®test a gázt 20 C-
                ◦
ról melegíti 120 C-ra, ezért mind az egyatomos gáz, mind a kétatomos gáz kezdeti és végs® h®mérséklete kelvinben
Tk = 293 K és Tv = 393 K (3. ábra ).
   Az egyatomos gáz szabadsági foka 3, ennek ismeretében a bels® energia kezdeti értéke:

                                                                3
                                                        E1k =     n1k RTk ,
                                                                2
míg bels® energiája a folyamat végén:
                                                        3          3
                                                E1v =     n1v RTv = n1k RTk ,
                                                        2          2
ami a folyamatra jellemz®
                                                        n1v Tv = n1k Tk
összefüggés miatt megegyezik a kezdeti energiával. Látjuk, hogy az egyatomos gáz bels® energiája nem változik.
   A kétatomos gáz öt szabadsági fokkal rendelkezik. A bels® energiájának megváltozása:

                                                             5
                                                  ∆E1 =        n2 R(Tv − Tk ).
                                                             2
   A teljes rendszer bels® energiájának megváltozása:

                                                      5
                                              ∆E =      n2 R(Tv − Tk ) = 4,16 kJ.
                                                      2
   b) Most rátérünk annak a h®nek a kiszámítására, amit a f¶t®test ad le. Az egyatomos gáz izobár folyamatában
a része skeszám állandóan változik, tehát az általa felvett h®t részfolyamatonként kell összeadni. Ezt integrállal lehet
kifejezni:
                                                             Z Tv
                                                                    5
                                                      Q1 =            n1 R dT,
                                                              Tk    2
ahol a folyamat során a mólszám az
                                                                   n1k Tk
                                                          n1 =
                                                                     T
alapján függ a h®mérséklett®l. Felhasználtuk, hogy az egyatomos gáz állandó nyomáson vett mólh®je Cp1 = (5/2)R .
Az integrált elvégezve
                                        Z Tv
                                               5 n1k RTk     5           Tv
                                 Q1 =                    dT = n1k RTk ln    = 1,79 kJ.
                                         Tk    2    T        2           Tk
   Az integrálás lépése több módon is elkerülhet®, például úgy, hogy felhasználjuk a hasonlóságot az izoterm folyamat
munkavégzésével, vagy egy közelít® összegzést alkalmazva számolunk numerikusan.
   A kétatomos gáz izo hor folyamatot végez, ezért az általa felvett h® megegyezik a bels® energia megváltozásával:

                                                      5
                                               Q2 =     n2 R(Tv − Tk ) = 4,16 kJ.
                                                      2
   A f¶t®test a kett® h® összegét adja le:
                                                  Q = Q1 + Q2 = 5,95 kJ.
    3. Egy rögzített, vízszintes tengely¶, légmagos, hosszú szolenoid keresztmetszete R sugarú kör. A teker s belsejében
egy (nem-mágneses) szigetel® anyagból készült, r sugarú tömör henger helyezkedik el. A szigetel® henger pozitívan
töltött, egyenletes térfogati eloszlásban. A szolenoidba id®ben egyenletesen, gyorsan növekv® er®sség¶ áramot vezetünk
az ábrán látható körüljárás szerint.
  Milyen irányban indul el a szigetel® henger? Hogyan függ a válasz az r/R aránytól? Mekkora r/R arány esetén
marad a töltött henger nyugalomban?
  A tapadási súrlódás elegend®en nagy ahhoz, hogy a henger ne sússzon meg. A gördülési ellenállástól tekintsünk el!
                                                                                                     (Vigh Máté)
   Megoldás. A változó (növekv®) er®sség¶ áram hatására a teker s belsejében id®ben változó, homogén mágneses
mez® alakul ki. A változó mágneses mez® a Faraday-törvény értelmében id®ben állandó, forrásmentes és örvényes
elektromos mez®t kelt (  4. ábra ), amely ered® er®t és forgatónyomatékot fejt ki a töltött hengerre: ez mozdíthatja el
a hengert egyik vagy másik irányban.




                                                             4. ábra




                                                             5. ábra




                                                             6. ábra



   Vizsgáljuk az egész elrendezésnek a szolenoid tengelyére mer®leges síkmetszetét! Jelöljük ezen a síkmetszeten a szol-
enoid középpontját C -vel, a szigetel® henger középpontját O -val, a henger és a szolenoid érintkezési pontját pedig P -vel!
A szolenoid belsejében kialakuló indukált elektromos mez® térer®sségét a Faraday-törvényb®l határozhatjuk meg, ha
azt egy C középpontú, r0 sugarú körre alkalmazzuk (       5. ábra ):
                                                      ∆B                            1 ∆B
                                 E(r0 ) · 2πr0 = πr02    ,     ahonnan   E(r0 ) =        r0 .
                                                 | {z∆t}                            2 ∆t
                                                     ∆Φ
                                                     ∆t

Ez az összefüggés a balkéz-szabály alapján vektoriálisan is felírható a C pontból a vizsgált pontba mutató     r 0 vektor
segítségével:

                                                E (r 0) = − 21 ∆B
                                                               ∆t
                                                                  e B × r 0,
ahole B = B /|B | a mágneses induk ióvektorral azonos irányú egységvektor.
                  6. ábrán látható r 1 és r 2 vektorokat, ahol r 1 + r 2 = r 0 . Ezek közül r 1 = CO konstans vektor
                                                                                                  −−→
   Vezessük be a
(melynek hossza R − r), míg r 2 az O pontból abba a pontba mutat, ahol a térer®sségre kíván siak vagyunk. Ennek
felhasználásával a térer®sség így írható:


                                       E (r 0) = − 21 ∆B
                                                      ∆t
                                                         e B × r 1 − 12 ∆B
                                                                        ∆t
                                                                           e B × r 2,
                                                 |        {z       }|      {z        }
                                                          E1              E2
Ebben az összegben az   E 1-gyel jelölt tag homogén, vízszintesen balra mutató elektromos mez®t, az E 2-vel jelölt tag
pedig a töltött henger tengelye (O pont) körül örvényl® mez®t jelent. Az indukált elektromos teret tehát felbontottuk
két mez® szuperpozí iójára, ahogy az a     7. ábrán látható.




                                                              7. ábra



   Azt, hogy a töltött henger jobbra vagy balra indul el az dönti el, hogy a henger legalsó P pontjára vonatkoztatott
ered® forgatónyomaték milyen irányba mutat (erre a pontra nézve ugyanis a súrlódási er®nek, a nyomóer®nek és
a nehézségi er®nek a forgatónyomatéka is nulla). Az elektromos mez® 7. ábrán látható felbontásának az az el®nye,
hogy segítségével könnyen kiszámítható ez az ered® forgatónyomaték.
   A homogén     E 1 mez® |E 1 |Q nagyságú, a henger O középpontjában ébred® er®t fejt ki a hengerre, melynek forga-
tónyomatéka a P pontra nézve:


                                M1 = |   E 1|Qr = 12 ∆B
                                                     ∆t
                                                        |e B × r 1 |Qr =
                                                                         1 ∆B
                                                                         2 ∆t
                                                                              (R − r)Qr,

ahol Q a henger össztöltése, r pedig az er®kar.
   Az O pont körül örvényl®   E 2 mez® ered® er®t a szimmetria miatt nem eredményez. A forgatónyomatékhoz viszont ez
a mez® is ad járulékot, hiszen a henger O pontra nézve átellenes darabkáira ható er®k er®párokat alkotnak. Az er®párok
ered® forgatónyomatéka bármely pontra, így a P és O pontokra számítva is ugyanakkora, de a számolás az O pontra
                                            r
vonatkoztatva egyszer¶bb. Az O ponttól | 2 | távolságra lév®, ∆Q töltés¶ kis darabkára |    E 2|∆Q er® hat, így az ered®
forgatónyomaték:

                                                      E 2|∆Q|r 2| = 12 ∆B           r 2
                                             X                              X
                                     M2 =         |                             ∆Q| 2 | .
                                                                       ∆t   |     {z   }
                                                                                1    2
                                                                                2 Qr

Az összegzésben szerepl® kifejezés éppen olyan alakú, mint a henger tehetetlenségi nyomatéka a szimmetriatengelyére
vonatkoztatva ( sak ott a darabkák ∆Q töltése helyett azok ∆m tömege szerepel). Ezt az analógiát felhasználva
                         2
az összegzés eredménye Qr /2, így
                                                               1 ∆B 2
                                                        M2 =        Qr .
                                                               4 ∆t




                                                              8. ábra



   A P pontra vonatkoztatott M1 forgatónyomaték balra szeretné kitéríteni a töltött hengert, míg az M2 forgatónyo-
maték jobbra ( 8. ábra ). A henger tehát balra indul el, ha:
                                                 1 ∆B             1 ∆B 2
                                                      Q(R − r)r >      Qr ,
                                                |2 ∆t {z      } |4 ∆t{z }
                                                         M1             M2

azaz ha r/R < 2/3, ellenkez® esetben pedig      jobbra. Az r = 2R/3 egyenl®ség fennállása esetén a henger egyáltalán nem
indul el.

   Megjegyzés. A hengerre ható, P pontra vonatkoztatott ered® forgatónyomaték irányát a forgómozgással kap so-
    analógia segítségével is meghatározhatjuk. Vegyük az óramutató járásával ellentétes körüljárási irányokat po-
latos
zitívnak! Tekintsük a hengert egy m tömeg¶, homogén tömegeloszlású, a C pont körül ω < 0 szögsebességgel forgó
merev testnek! Ezen test egy-egy darabkájának sebessége (és emiatt az egységnyi térfogatú kis részének lendülete)
éppen olyan irányú és (egy pozitív arányossági tényez®t®l eltekintve) ugyanolyan nagyságú, mint az eredeti feladatban
az elektromos er®tér által kifejtett er®. Hasonlóan, a forgó merev test kis darabkájának P -re vonatkoztatott perdülete
(impulzusmomentuma) egy arányossági tényez®t®l eltekintve az eredeti feladatban szerepl® er®k P -re vonatkoztatott
forgatónyomatékának felel meg. A kérdés tehát az, hogy milyen el®jel¶ a C pont körül negatív irányban forgó henger
perdülete a P pontra vonatkoztatva.
   Egy merev test teljes perdülete a tömegközéppont körüli forgás sajátperdületéb®l és a tömegközéppontba kép-
zelt, annak sebességével mozgó teljes anyagmennyiség pályaperdületéb®l tehet® össze. Esetünkben az O tömegközép-
pont (balra mutató) sebessége vO = (R − r)ω nagyságú, a pályaperdület tehát +mr(R − r)ω , a sajátperdület pedig
−(1/2)mr2 ω . A P pontra vonatkoztatott teljes perdület tehát:
                                                     1        mrω
                                    NP = mr(R − r)ω − mr2 ω =     (2R − 3r).
                                                     2         2
                         2                                                   2
   Látható, hogy r <       R esetén N > 0, tehát a henger balra indul el, r > R esetén N < 0, azaz a henger jobbra
                    2    3                                                   3
indul el, míg r =     R esetén nem jön mozgásba.
                    3

                                                                                                                (G. P.)

                                                           ∗
   Az ünnepélyes eredményhirdetésre és díjkiosztásra 2018. november 23-án délután került sor az ELTE TTK Konfe-
ren iatermében. Meghívást kaptak az 50 és 25 évvel ezel®tti Eötvös-verseny nyertesei is. Jelen volt az 50 évvel ezel®tti
díjazottak közül    Vetier András, aki az akkori feladatok ismertetése után röviden beszélt a versenyhez kap solódó
emlékeir®l, és a 25 évvel ezel®tti díjazottak közülKová s Krisztián.
   Ezután következett a 2018. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Vankó
Péter, a 2. feladatét Ti hy Géza, a 3. feladatét Vigh Máté ismertette.
   Az esemény végén került sor az eredményhirdetésre. A díjakat      Sólyom Jen®, az Eötvös Loránd Fizikai Társulat
elnöke adta át.
   Els® díjat a versenybizottság nem adott ki.
   Az els® feladat hibátlan megoldásáértmásodik díjat nyert Fajszi Bul sú, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 11. osztályos tanulója,Csefkó Zoltán és Horváth Gábor tanítványa.
   A második feladat lényegében helyes megoldásáért harmadik díjat nyert Hajdú Csanád, a BME zikus hallgatója,
a budapesti Eötvös József Gimnázium érettségizett tanulója, Gulyás Erzsébet tanítványa, valamint Vavrik Márton,
a BME zikus hallgatója, a budapesti Berzsenyi Dániel Gimnázium érettségizett tanulója, Lendvai Dorottya és Izsa
Éva tanítványa.
   Az els® feladat helyes közelít® megoldásáért di séretben részesült Berke Martin, a BME zikus hallgatója, a Za-
                                                         Bóbi s Lilla tanítványa.
laegerszegi Zrínyi Miklós Gimnázium érettségizett tanulója,
   A második díjjal    Zimányi Gergely adományából 50 ezer, a harmadik díjjal 30 ezer, a di sérettel 20 ezer forint
pénzjutalom járt, a díjazottak tanárai pedig a Typotex Kiadó könyveit kapták. A verseny megszervezését az Eötvös
Loránd Fizikai Társulat a MOL támogatásából fedezte.



                                                                            Ti hy Géza, Vankó Péter, Vigh Máté
