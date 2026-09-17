---
id: solution-document-eotvos-2017-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2017_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-2017-coin-table, eotvos-2017-glass-sphere-cooling, eotvos-2017-spherical-capacitor]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2017_S.pdf."
---

Az Eötvös Loránd Fizikai Társulat 2017. évi Eötvös-versenye október 13-án délután 3 órai kezdettel tizennégy
                           1
magyarországi helyszínen       került megrendezésre. Ezért külön köszönettel tartozunk mindazoknak, akik ebben szer-
vezéssel, felügyelettel a segítségünkre voltak. A versenyen a három feladat megoldására 300 per           áll rendelkezésre,
bármely írott vagy nyomtatott segédeszköz használható, de (nem programozható) zsebszámológépen kívül minden
elektronikus eszköz használata tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy
a verseny évében fejezték be középiskolai tanulmányaikat. Összesen 42 versenyz® adott be dolgozatot, 15 egyetemista
és 27 középiskolás.
   Ismertetjük a feladatokat és azok megoldását.

                                                                ∗
   1. feladat. Az 1. ábrán látható, d oldalhosszúságú, négyzet alakú asztallap A sarkánál egy m tömeg¶, kis pénzérme
nyugszik. Az asztal B sarkához egy horgászzsinór egyik végét rögzítjük, majd a zsinórt az érmén átvetve az asztal C
sarkához rögzített szemes savaron vezetjük át. A zsinór szabad végét igen lassan húzni kezdjük addig, amíg az érme végül
leesik az asztalról. Az asztallap és az érme közötti      súszási súrlódási együttható µ, máshol a súrlódás elhanyagolható.




                                                             1. ábra



   a) Hol esik le az érme az asztalról?
   b) Be süljük meg, mennyi munkát végeztünk a folyamat közben!
   Adatok: m = 7,7 g, d = 1,0 m, µ = 0,3.

   Megoldás. A pénzérmére három er® hat: a két zsinórszárban ható er®, valamint a pénzérme és az asztal között
fellép®   súszási súrlódási er®. A pénzérmét lassan mozgatjuk, a gyorsulások elhanyagolhatók, így a három er® ered®je jó
közelítéssel nulla. A zsinór nem súrlódik a pénzérmén, így benne mindenhol azonos nagyságú er® hat. Ebb®l következ®en
a pénzérme mindig a zsinórszárak pillanatnyi szögfelez®jének irányába fog mozogni (hiszen a            súszási súrlódási er®
mindig a sebességgel ellentétes irányú). Ennek a sebességvektornak mindkét zsinórszárra ugyanakkora a vetülete, így
a két zsinórszár mindig azonos mértékben rövidül  tehát a hosszaik különbsége a mozgás során nem fog változni.
   a) Ennek alapján:                     √
                                          2d − d = x2 − x1          és     x1 + x2 = d,
ahol x1 és x2 a két zsinórdarab hossza, amikor a pénzérme eléri az asztal szélét.
   Az egyenletrendszert megoldva megkapjuk, hogy a pénzérme az asztal B sarkától

                                                             √ !
                                                               2
                                                 x1 =     1−     d ≈ 0,293 m
                                                              2

távolságra esik le az asztalról.
   b) A munkavégzés megegyezik a súrlódási munka abszolút értékével. Mivel a súrlódási er® állandó, így a munka
a súrlódási er® és a pénzérme által befutott s út szorzata:

                                                          W = µmg · s.

A két zsinórszár hosszának különbsége állandó, tehát a pénzérme egy hiperbolaíven fog mozogni. (A hiperbola fókuszai
az asztal B és C sarkai.) A hiperbolaív hosszát elemi úton nem tudjuk meghatározni  ezért is kért a feladat be slést ,
de alsó és fels® közelítést adhatunk rá.
   Alsó be slés az asztal A sarkát és a leesés L pontját összeköt® egyenes szakasz hossza (2. ábra ):
                                                          q
                                                 smin =    d2 + x21 ≈ 1,042 m,

fels® be slés pedig az A és L pontokon átmen® és a BC szakaszt mer®legesen metsz® körvonal hossza. A kör sugara
egyszer¶ geometriai megfontolások alapján:

                                                          d2 + x21
                                                   R=              ≈ 1,854 m,
                                                            2x1
  1 Részletek a verseny honlapján: http://eik.bme.hu/~vanko/zika/eotvos.htm.
amib®l a keresett ívhossz:
                                                                   d
                                               smax = R arcsin       ≈ 1,056 m.
                                                                   R
Láthatjuk, hogy a két érték elég közel van egymáshoz. (A hiperbolaív hosszát számítógéppel numerikusan is kiszámol-
hatjuk, akkor s ≈ 1,048 m-t kapunk.)




                                                           2. ábra


                                                                 2
      Ezek alapján, valamint a megadott adatokkal és g = 9,81 m/s -tel a keresett munkavégzés:


                                                 0,0236 J < W < 0,0239 J.

      2. feladat. Egy gömbkondenzátor fegyverzeteinek sugara R és 3R. A gömböket rövidre zárjuk, és a nagyobb gömböt
leföldeljük. A két fémgömb között egy Q ponttöltést mozgatunk állandó v sebességgel sugárirányban kifelé (3. ábra).




                                                           3. ábra



      Mekkora áram folyik a gömböket összeköt® vezetékben, amikor a mozgó töltés éppen félúton, a gömbök középpont-
jától 2R távolságban van? (A rövidrezáró vezeték elektrosztatikus terét ne vegyük gyelembe!)

      I. megoldás. A feladat nehézsége abban rejlik, hogy a fémgömbök eredetileg fennálló gömbszimmetriáját elrontja
a Q ponttöltés jelenléte. Emiatt a gömbökön kialakuló töltéseloszlás er®sen inhomogén lesz, és az elektromos mez®
szerkezete is meglehet®sen bonyolult. Szeren sére a töltéseloszlás meghatározása elkerülhet®, amint azt az alábbi
megoldásban látni fogjuk.
      Jelöljük a kis fémgömb pillanatnyi töltését q1 -gyel, a nagyobb gömbét q2 -vel, a ponttöltés pillanatnyi távolságát
a gömbök középpontjától pedig r-rel! A kisebb fémgömb poten iálja a földelés miatt nulla, és mivel a fém ekvipoten i-
ális, ugyanez a középpontjára is igaz. A gömbökön elhelyezked® töltések azonos (R, illetve 3R) távolságra helyezkednek
el a gömbök közös középpontjától, ezért itt a poten iált könnyen felírhatjuk:

                                                      q1   Q   q2
(1)                                               k      +k +k    = 0.
                                                      R    r   3R
A nagy gömbön kívül a földelés miatt nin s elektromos tér (a bels® töltések terét a nagy gömb teljesen leárnyékolja),
így a Gauss-törvény értelmében a rendszer össztöltése nulla:


(2)                                                    Q + q1 + q2 = 0.

A fenti két egyenletb®l a kisebb gömb töltésének abszolút értéke kifejezhet® r függvényében:
                                                                          
                                                                  3R 1
(3)                                              q1 (r) = −          −         Q.
                                                                  2r   2

Mivel a gömbök össztöltése állandó (−Q), így a ponttöltés mozgása közben            sak a gömbök közötti vezetékben folyik
áram, a földbe jutó vezetékben nem. A kis gömbre vonatkozó kontinuitási egyenletb®l a gömbök között folyó áram
deriválással (vagy a kis megváltozásokra érvényes formulák segítségével) meghatározható:

                                               dq1   dr dq1    dq1   3 QvR
                                          I=       =        =v     =       ,
                                               dt    dt dr     dr    2 r2
az áram iránya pedig a kis gömb felé mutat. Tehát az áramer®sség értéke, amikor a ponttöltés éppen r = 2R távolságra
van a gömbök középpontjától:
                                                                   3 Qv
                                                              I=        .
                                                                   8 R
   II. megoldás. Az els® megoldás kul sa az volt, hogy észrevettük: a poten iál értéke könnyen kiszámítható a gömbök
közös középpontjában. Az (1) és (2) egyenletekhez más módon, a szuperpozí iós elv segítségével is eljuthatunk.
   Képzeljük el, hogy a gömbök középpontjától r távolságra elhelyezked® Q ponttöltést gondolatban N -edrészére sök-
kentjük. Ekkor a gömbök q1 és q2 töltése is N -edrészére         sökken. Forgassuk el ezt az elrendezést a gömbök középpontja
körül egy ki sit, és szuperponáljuk rá az eredeti elrendezésre! Így már két Q/N ponttöltés helyezkedik el a középponttól
r távolságra, a gömbök töltése pedig rendre 2q1 /N és 2q2 /N . Ismételjük meg ezt az eljárást még (N − 2)-ször úgy,
hogy végül összesen Q töltés legyen az r sugarú gömbfelületen, a lehet® legegyenletesebb elrendez®désben. Az N → ∞
határesetben a ponttöltést ilyen módon végül szétkenhetjük egy r sugarú, egyenletes felületi töltéss¶r¶ség¶, Q össz-
töltés¶ gömbhéjjá, miközben a fémgömbök q1 és q2 töltése változatlan marad. Ennek az az el®nye, hogy az eredeti
feladatot visszavezettük egy könnyebb, gömbszimmetrikus problémára.
   Ismert, hogy egy egyenletesen töltött gömbhéj poten iálja kívül úgy számítható, mintha a gömb töltése a közép-
pontjában összpontosulna, belül pedig ugyanakkora, mint a gömb felületén. A legküls®, földelt gömb felületén tehát
a poten iált a három (q1 , Q és q2 töltés¶) gömbhéj poten iáljának összegeként kaphatjuk meg:


                                                       q1    Q     q2
                                                   k      +k    +k    = 0,
                                                       3R    3R    3R
ami ekvivalens a (2) egyenlettel. A kis gömb felületén a (szintén nulla) poten iált teljesen hasonlóan, három tag
összegeként írhatjuk fel: a legküls® gömb járuléka kq2 /(3R), a szétkent ponttöltésé kQ/r, míg a legbels® gömbé
kq1 /R. Ez végül az (1) egyenletre vezet. Az (1) és (2) egyenletek birtokában a végeredményhez az I. megoldással
azonos módon juthatunk el.

   Megjegyzés. Az egyik második díjat nyert versenyz®, Marozsák Tóbiás egy harmadik úton oldotta meg a feladatot. Ismert,
hogy ha egy földelt, vezet® gömbhéj közelébe egy ponttöltést helyezünk, akkor a gömbön megosztott töltések helyettesíthet®k
egy, a gömbfelület ponttöltéssel átellenes oldalán elhelyezett tükörtöltéssel. Ennek a tükörtöltésnek a nagysága és helyzete
kiszámolható abból a feltételb®l, hogy a gömb teljes felülete nulla poten iálú. A feladatban szerepl® két, kon entrikus gömbhéj
esetén a Q töltést el®ször tükröznünk kell mindkét gömbre, majd az így kapott tükörtöltésekkel is folytatni kell az eljárást.
Végül váltakozó el®jel¶ tükörtöltések végtelen sorát kapjuk a kis gömbön belül és a nagy gömbön kívül. A kis gömbön belüli
tükörtöltések össztöltése (azaz q1 ) egy geometriai sor felösszegzésével kiszámítható, és így közvetlenül a (3) egyenlethez jutunk.
Bár ez a módszer matematikailag sokkal nehezebb, mint a fenti két, részletesen ismertetett megoldás, elvben lehet®séget ad
a gömbök között kialakuló elektromos tér (legalább numerikus) meghatározására is.

   3. feladat. Egy 30 mm sugarú, homogén, tömör üveggolyó igen hosszú ideje forrásban lév® vízbe merül. A golyót
hirtelen jeges vízzel telt edénybe merítjük 30 másodper re, majd onnan kiemelve h®szigetel® edénybe helyezzük. (A víz-
 seppeket gyorsan letöröljük.) Be süljük meg, mennyi lesz az üveggolyó egyensúlyi h®mérséklete hosszú id® elteltével!
                                                3
   További adatok: Az üveg s¶r¶sége 2500 kg/m , fajh®je 830 J/(kg K), h®vezetési tényez®je 0,95 W/(m K).

   I. megoldás. A hosszú ideje lobogó vízbe merül® golyó belsejében a h®mérséklet mindenhol T1 = 100
                                                                                                                   ◦
                                                                                                                       C-os. Amikor
a golyót a T2 = 0
                    ◦
                        C-os, jeges vízbe tesszük, akkor annak küls® része kezd el el®ször leh¶lni, majd ez a hidegfront
halad fokozatosan a golyó belseje felé. A h®szigetel® edénybe helyezve a golyó bels® energiája már nem változik
tovább,   sak annyi történik, hogy a h®mérséklet a belsejében kiegyenlít®dik. Vajon mekkora tipikus ξ mélységig hatol
be a hidegfront a golyóba 30 másodper        alatt? Elképzelhet®, hogy       sak a golyó legküls®, vékony kérge h¶l le a jeges
vízben, de az is, hogy szinte az egész golyó leh¶l,      sak a közepe táján marad meleg (4. ábra ).




                                                                 4. ábra



   A golyó belseje és a jeges vízzel érintkez® (0
                                                         ◦
                                                             C-os) felülete közötti h®vezetést a Fourier-törvény írja le, amely
analóg a fémek elektromos vezetését leíró Ohm-törvénnyel (5. ábra ). Míg egy állandó A keresztmetszet¶, ∆x hosszú-
ságú egyenes vezetékben folyó elektromos áram (I ) a vezeték végei közötti ∆U poten iálkülönbséggel arányos, addig
ugyanezen vezetékben terjed® h®áram (IQ ) a ∆T h®mérséklet-különbséggel arányos:


                                         1 ∆U                                                   ∆T
                                      I=− A                       ⇐⇒               IQ = −λA        ,
                                         ̺ ∆x                                                   ∆x

ahol 1/̺ a vezeték anyagának elektromos vezet®képessége (a fajlagos ellenállás re iproka), λ pedig a h®vezetési tényez®.




                                                                  5. ábra



   Sajnos golyó (gömbgeometria) esetén a Fourier-törvény matematikai alakja a fentinél bonyolultabb. További ne-
hézség, hogy a feladatban a h®mérsékleteloszlás nem állandó (nem sta ionárius), hanem a h®áram hatására id®ben
változik. Ilyen körülmények között reménytelen a feladatra matematikailag egzakt választ adni. Megpróbálhatjuk azon-
ban dimenzionális megfontolásokkal kitalálni, hogy hogyan függ a hidegfront ξ behatolási mélysége az id®t®l.
   Els® lépésként vizsgáljuk meg, milyen mennyiségekt®l függhet ξ . Természetesen függ az id®t®l, ezen kívül függ még
a golyó λ h®vezetési tényez®jét®l (rossz h®vezet® esetén ξ lassabban növekszik), az üveg ̺ s¶r¶ségét®l és c fajh®jét®l.
A golyó R sugara is fontos paraméter lehet, de ha ξ ≪ R (azaz a jeges vízbe merítés ideje viszonylag rövid), akkor
a hidegfront terjedésére lényegében nin s hatással a golyó véges mérete. Mi a helyzet a golyó közepe és a felülete közötti
h®mérséklet-különbséggel? A Fourier-törvény szerint kétszer akkora h®mérséklet-különbséghez kétszer akkora h®áram
tartozik, de ekkor a golyó egyes rétegeinek leh¶téséhez szükséges h®elvonás is megkétszerez®dik. Tehát a hidegfront
id®beli terjedését nem,   supán a magasságát befolyásolja ∆T = T1 − T2 értéke.
   Keressük tehát a ξ behatolási mélységet a következ® alakban:


                                                           ξ ∼ λα ̺β cγ tδ ,

ahol α, β , γ és δ dimenziótlan konstans kitev®k. A jobb oldalon álló mennyiségek mértékegységei:

                                                                                      2
                                            kg · m                 kg                m
                                    [λ] =            ,    [̺] =         ,    [c] =          ,   [t] = s.
                                             s3 K                 m3                 s2 K

Ezekb®l   sak egyféleképpen keverhetünk ki méter dimenziójú mennyiséget:

                                                                        s
                                                                            λt
                                                              ξ(t) ∼           .
                                                                            c̺

Egy dimenziótlan faktor erejéig most már ismerjük a ξ(t) függvényt, de vajon mi az arányossági tényez®? Nem tudjuk,
de várhatóan egységnyi nagyságrend¶, és mivel be slésr®l volt szó, vegyük 1-nek! A megadott adatok alapján tehát
t = 30 s alatt a hidegfront behatolási mélysége:
                                                              s
                                                                  λt
                                                         ξ≈          ≈ 3,7 mm,
                                                                  c̺

ami majdnem egy nagyságrenddel kisebb a golyó R = 30 mm-es sugaránál. El®zetes feltevésünk, mely szerint ξ sokkal
kisebb R-nél, utólag beigazolódott.
   A T∞ egyensúlyi h®mérsékletet be süljük úgy, hogy a ξ vastagságú kéreg h®mérséklete T2 = 0
                                                                                                           ◦
                                                                                                               C, azon belül pedig
T1 = 100 ◦ C. A h®mérséklet kiegyenlít®dését kifejez® egyenlet:
                                  4         3    4             3   4
                                    π(R − ξ) T1 + π R3 − (R − ξ) T2 = πR3 T∞ ,
                                  3              3                   3
amib®l ξ ≪ R felhasználásával ( sak a ξ -ben els®fokú tagokat tartva meg) megkapjuk a golyó egyensúlyi h®mérsékletét:


                                                               3ξ
                                             T∞ ≈ T1 −            (T1 − T2 ) ≈ 63 ◦ C.
                                                               R
Mivel be slésr®l van szó, ezért az eredmény második értékes jegyét nem szabad nagyon komolyan vennünk.

   II. megoldás. Használjuk a Fourier-törvényt, és közelítsük a h®mérsékletprolt a 6. ábra bal oldalán látható,
szakaszonként lineáris függvénnyel! (Könnyen belátható, hogy egy ilyen h®mérsékletprol kés®bb nem marad szaka-
szonként lineáris, de ez a be slésünk érvényességét nem befolyásolja majd.)
                                                            6. ábra



      A várhatóan kis ξ behatolási mélység miatt a problémát kezelhetjük egydimenziósként (azaz golyó helyett egy
végtelen féltér esetét vizsgáljuk). Tegyük fel, hogy t id® után a lineáris hidegfront szélessége ξ . Ekkor a golyó belsejéb®l
a jeges vízbe átmen® h®áram nagysága (teljesítmény):

                                                                   T1 − T2
(4)                                                   IQ = λA              .
                                                                      ξ

Ez a kiáramló teljesítmény okozza ∆t id® alatt a hidegfront ∆ξ szélesedését (6. ábra jobb oldala):
                                                             
                                                     T1 + T2         T1 + T2
                                 IQ ∆t = c̺A T1 ∆ξ +         ξ − c̺A         (ξ + ∆ξ),
                                                        2               2

ahol a behatolási mélységnek megfelel® rész energiáját a szélein mért h®mérsékletek átlagának segítségével fejeztük ki.
Ebb®l rendezés után adódik:

                                                               T1 − T2 ∆ξ
(5)                                                IQ = c̺A               .
                                                                  2    ∆t
A h®áramokra kapott (4) és (5) összefüggéseket egyenl®vé téve kapjuk:

                                                                   2λ
                                                       ξ ∆ξ =         ∆t.
                                                                   c̺

      Összegezzük fel ennek az egyenletnek mindkét oldalát! Ekkor a jobb oldalon a vízbe merítés t ideje, a bal oldalon
         2
pedig ξ    /2 jelenik meg (ezt beláthatjuk pl. egy összenyomott rugóban tárolt energia analógiájával vagy integrálással).
Tehát a lineáris hidegfront behatolási mélysége az id® függvényében:
                                                               s
                                                                   λ     √
                                                    ξ(t) = 2          t ∼ t,
                                                                   c̺

ami egy 2-es faktor erejéig egyezik a dimenzióanalízis eredményével.
      A h®mérséklet kiegyenlít®dését kifejez® egyenlet (ξ ≪ R közelítésben):

                                       4                       T1 + T2  4
                                         π(R − ξ)3 T1 + 4πR2 ξ         ≈ πR3 T∞ ,
                                       3                          2     3
ebb®l
                                                          3ξ
                                                  T∞ ≈ T1 −  (T1 − T2 ).
                                                          2R
Végül a szakaszosan lineáris h®mérsékletprolra levezetett ξ behatolási mélységet felhasználva kapjuk a be slés végs®
formuláját:
                                                               s
                                                         3          λt
                                               T∞ = T1 −               (T1 − T2 ).
                                                         R          c̺
Az adatokat behelyettesítve T∞      ≈ 63 ◦ C egyensúlyi h®mérséklet adódik, egyezésben a dimenzióanalízissel kapott
értékkel.

                                                               ∗
      Az ünnepélyes eredményhirdetésre és díjkiosztásra 2017. november 24-én délután került sor az ELTE TTK Konfe-
ren iatermében. Meghívást kaptak az 50 és 25 évvel ezel®tti Eötvös-verseny nyertesei is. Jelen volt a 25 évvel ezel®tti
díjazottak közül Geerth András, Maulis Ádám és Pálfalvi László, akik az akkori feladatok ismertetése után röviden
beszéltek a versennyel kap solatos emlékeikr®l és pályájukról.
      Ezután következett a 2017. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Ti hy
Géza, a 2. feladatét Vankó Péter, a 3. feladatét Vigh Máté ismertette.
      Az esemény végén került sor az eredményhirdetésre. A díjakat Sólyom Jen®, az Eötvös Loránd Fizikai Társulat
elnöke adta át.
   Mindhárom feladat helyes megoldásáért els® díjat és Eötvös-érmet nyert Ková s Péter Tamás, a Zalaegerszegi
Zrínyi Miklós Gimnázium érettségizett tanulója, Pálovi s Róbert és Juhász Tibor tanítványa, aki jelenleg a BME
zikus hallgatója.
   Két feladat helyes megoldásáért második díjat nyert Marozsák Tóbiás, az Óbudai Árpád Gimnázium 12. osztályos
tanulója, Gärtner István tanítványa.
   Egy feladat helyes megoldásáért harmadik díjat nyert Németh Balázs, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 12. osztályos tanulója, Dvorák Ce ília és Csefkó Zoltán tanítványa, valamint Németh
Róbert, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Horváth Gábor
és Szokolai Tibor tanítványa  az ELTE zikus hallgatója.
   Egy feladat lényegében helyes megoldásáért di séretet kapott Fajszi Bul sú, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 10. osztályos tanulója, Horváth Gábor és Csefkó Zoltán tanítványa; Fehér Szilvesz-
ter, az Óbudai Gimnázium érettségizett tanulója, Fehér Gabriella tanítványa  az ELTE zikus hallgatója; Gyulai
Márton, a miskol i Földes Feren    Gimnázium 11. osztályos tanulója, Pál Mihály és Zámborszky Feren      tanítványa;
Kürti Zoltán, az ELTE Apá zai Csere János Gyakorló Gimnázium és Kollégium érettségizett tanulója, Zsigri Feren
tanítványa  az ELTE zikus hallgatója; Mo skonyi Mirkó, a szentendrei Feren es Gimnázium érettségizett tanu-
lója, Adolf Géza és Borbély Ven zel tanítványa  az ELTE zikus hallgatója; Olosz Adél, a PTE Gyakorló Általános
Iskola, Gimnázium és Szakgimnázium 11. osztályos tanulója, Kon z Károly és Kotek László tanítványa; Simon Dáni-
el Gábor, a Ke skeméti Bányai Júlia Gimnázium 12. osztályos tanulója, Bakk János tanítványa; Szakály Mar ell,
a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos tanulója, Csefkó Zoltán és Dvorák
Ce ília tanítványa, valamint Tófalusi Ádám, a Debre eni Fazekas Mihály Gimnázium 11. osztályos tanulója, Tófalusi
Péter és Zámborszky Feren   tanítványa.
   Az els® díjjal Zimányi Gergely adományából 63 ezer, a második díjjal 45 ezer, a harmadik díjjal 25 ezer forint
pénzjutalom járt, a di séretesek könyv- és tárgyjutalmat, a díjazottak tanárai pedig a Typotex Kiadó könyveit kapták.
A verseny megszervezését az Eötvös Loránd Fizikai Társulat a MOL támogatásából fedezte.
