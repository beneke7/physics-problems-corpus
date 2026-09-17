---
id: solution-document-eotvos-2020-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2020_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-2020-cart-pendulum, eotvos-2020-diode-capacitor, eotvos-2020-nitrogen-cooling]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2020_S.pdf."
---

Beszámoló a 2020. évi Eötvös-versenyr®l


   Az Eötvös Loránd Fizikai Társulat 2020. évi Eötvös-versenye október 9-én délután 3 órai kezdettel tizennégy ma-
                         1
gyarországi helyszínen       került megrendezésre. Ezért külön köszönettel tartozunk mindazoknak, akik ebben szervezéssel,
felügyelettel a segítségünkre voltak. A versenyen a három feladat megoldására 300 per       áll rendelkezésre, bármely írott
vagy nyomtatott segédeszköz használható, de (nem programozható) zsebszámológépen kívül minden elektronikus esz-
köz használata tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy a verseny évében
fejezték be középiskolai tanulmányaikat. Összesen 48 versenyz® adott be dolgozatot, 11 egyetemista és 37 középiskolás.
   Ismertetjük a feladatokat és azok megoldását.

                                                                 ∗
   1. feladat. Egy m0 tömeg¶, állandó      c fajh®j¶ minta h®mérséklete ki sivel a nitrogén T0 forráspontja alatt van.
Rendelkezésünkre áll m tömeg¶, forrásban lév® folyékony nitrogén és egy h®szivattyú. Mekkora minimális h®mérsékletre
lehet leh¶teni a mintát, mire elforr az összes nitrogén? A nitrogén forrásh®je L.

                          T2 − T1
   Megoldás. Egy η =              hatásfokú, h®er®gépként üzemeltetett Carnot-féle körfolyamat esetén a fels® h®tar-
                             T2
tályból kivett h® η -ad része mint munkavégzés jelenik meg, (1 − η)-ad része pedig az alsó h®tartályba kerül. H®szi-
vattyúként üzemeltetve munkát kell befektetnünk, az alsó h®tartályból szivattyúzzuk át az energiát a fels®be, azaz
a h® el®jele változik ellenkez®re.
   A Carnot-körfolyamattal általában úgy találkozunk, hogy a gép két állandó h®mérséklet¶ h®tartály között m¶ködik.
Feladatunkban a Carnot-gép fels® h®tartálya a forrásban lév® nitrogén, amelynek h®mérséklete végig T0 , az alsó
h®tartály pedig a minta, amely viszont lassan h¶l, T h®mérséklete nem állandó. Egy            iklus során azonban a minta
h®mérséklete állandónak tekinthet®.
   Ebb®l a lassan változó h®mérséklet¶ h®tartályból vonunk el egy kis lépésben cm0 ∆T h®t. Ez a h® a fels® h®tartályba
érkez® q h®nek
                                                           T0 − T   T
                                              1−η =1−             =    -szorosa,
                                                             T0     T0
ahogy az 1. ábrán is látható.




                                                               1. ábra



   Ha ∆m mennyiség¶ nitrogén forrt el, akkor a fels® h®tartálynak L∆m h®t kellett kapnia. Ebb®l a

                                                                     T
                                                      cm0 ∆T =          L∆m
                                                                     T0
összefüggéshez jutunk. Ez a
                                                       cm0 dT   L dm
                                                              =
                                                         T       T0
dieren iális összefüggéséhez vezet. Ezt kell integrálni a kezdeti állapottól a végs® állapotig. Az alsó h®tartály T
h®mérséklete T0 -ról Tmin -re     sökken, és közben a folyékony nitrogén tömege m-r®l nullára     sökken. Tehát

                                                                T0    Lm
                                                      cm0 ln        =    ,
                                                               Tmin   T0
amib®l a keresett minimális h®mérséklet
                                                                        Lm
                                                                     − T cm
                                                      Tmin = T0 e        0    0   .
   Megjegyzés. Aki tudja, hogy a Carnot-körfolyamat közben az entrópia állandó, és ismeri az entrópia kifejezéseit, az azonnal
megkapja az integrálásból kapott összefüggést.


   2. feladat. Könnyen gördül®,       2m tömeg¶ kisko sira egy árbó van rögzítve, aminek fels® végére ℓ hosszúságú
fonállal egy   m tömeg¶ kis golyót függesztettünk. A kisko sit egy nem túl meredek, α hajlásszög¶ lejt®re helyezzük, majd
megvárjuk az inga lengéseinek le sillapodását, és végül a ko sit elengedjük (2. ábra).


  1 Részletek a verseny honlap ján: http://eik.bme.hu/~vanko/fizika/eotvos.htm.
                                                            2. ábra



      a) A mozgás során mennyire tér ki a fonál a függ®legest®l?
      b) Mekkora utat tesz meg a kisko si, amíg a fonál újra függ®legessé válik?
      Megoldás. Az ingából és kisko siból álló rendszerre lényegében               sak a nehézségi er® és a lejt®re mer®leges irá-
nyú kényszerer®k hatnak, hiszen a kerekek gyorsuló forgásához szükséges tapadási súrlódási er®t a könnyen gördül®
kifejezés miatt elhanyagolhatjuk. Lejt®irányú komponense          sak a nehézségi er®nek van, ezért a rendszer tömegközép-
pontja a lejt®vel párhuzamos irányban állandó, g sin α gyorsulással mozog. A tömegközéppont a mozgás során a lejt®re
mer®leges irányban is gyorsul, ez azonban a további gondolatmenet szempontjából nem lényeges.
                                                                               a
      Üljünk bele a zérus kezd®sebesség¶, a lejt®vel párhuzamosan | | = g sin α nagyságú gyorsulással mozgó vonat-
                                                            ′
koztatási rendszerbe! Egy gyorsuló rendszerben bármely m      tömeg¶ testre a Newton-törvények sak úgy maradnak
érvényben, ha a valójában rá ható (köl sönhatásból származó) er®k mellett bevezetjük a rendszer                   a
                                                                                                           gyorsulásával
ellentétes irányú, −m
                      ′
                        atehetetlenségi er®t is. A −m
                                                      ′
                                                       atehetetlenségi er® és az m
                                                                                   ′
                                                                                             g
                                                                                     nehézségi er® vektori összege m
                                                                                                                     ′ ∗
                                                                                                                               g
alakban is felírható, ahol  g
                            ∗
                                  g   a
                              = − . A gyorsuló rendszerben tehát minden test úgy mozog, mintha egy             ∗
                                                                                                                       g
                                                                                                                 eektív
nehézségi gyorsulású er®térben helyezkedne el. Esetünkben a vonatkoztatási rendszer               a
                                                                                         gyorsulása éppen megegyezik
a g nehézségi gyorsulás lejt®irányú összetev®jével, ezért az eektív
                                                                     ∗
                                                                               g
                                                                       nehézségi gyorsulás a lejt®re mer®leges irányú,
nagysága pedig g cos α. Mivel a gyorsuló rendszerben    g
                                                        ∗
                                                          határozza meg a függ®leges irányt, élszer¶ a feladat ábráját
elforgatni, ahogy az a 3. ábrán is látható.




                                                            3. ábra



      A mozgást a gyorsuló vonatkoztatási rendszerünkben elemezve azt látjuk, hogy a kisko si és az ingatest nyugalomból
indul, az inga kezdeti szögkitérése   g
                                      ∗
                                        irányától mérve jobbra éppen α. Az inga lengése során a rendszer tömegközép-
pontja küls® lejt®irányú er® hiányában nem mozdul el, így mind a kisko si, mind pedig az ingatest mozgásba jön.
A me hanikai energia megmaradásából és a tömegközéppont-tételb®l következik, hogy az inga szögkitérésének legna-
gyobb értéke
             ∗
                g
               -hoz viszonyítva a túlsó oldalon szintén α lesz, ami akkor következik be, amikor a kisko si és az ingatest
el®ször áll meg. Ez azt jelenti, hogy az eredeti vonatkoztatási rendszerben az inga a kezdeti helyzetéhez képest (azaz
g -hez viszonyítva) maximálisan 2α szöggel tér ki. Ezzel a feladat a) kérdésére válaszoltunk.
      Térjünk most rá a b) részre. A gyorsuló rendszerben az ingatest és a kisko si is periodikus mozgást végez az egyen-
súlyi helyzet körül, amelyben az inga fonala éppen párhuzamos
                                                                      ∗
                                                                          g
                                                                        -gal. Az inga legkorábban T periódusid® múlva
érkezik vissza a kiindulási helyzetbe. Ebben a pillanatban a tömegközéppont elmozdulása

                                                           1
                                                     s=      g sin α · T 2 ,
                                                           2
és ugyanekkora a ko si elmozdulása is, hiszen a ko si relatív helyzete a tömegközépponthoz viszonyítva éppen ugyanaz,
mint az indítási állapotban volt. Feladatunk tehát a rezgés T periódusidejének meghatározása.
   A gyorsuló rendszerben a tömegközéppont megmaradása miatt a ko si kitérése minden pillanatban feleakkora és
ellentétes irányú, mint az ingatest lejt®vel párhuzamos irányú kitérése. Ezért a fonál fels® harmadolópontja lényegében
nem mozdul el (valójában a lejt®re mer®leges irányban mégis, de elhanyagolható mértékben). Az ingatest tehát úgy
mozog a |
          ∗
            g
            | = g cos α nehézségi gyorsulású er®térben, mintha egy 2ℓ/3 hosszúságú fonálra lenne felfüggesztve. Egy
ilyen inga lengésideje kis kitérések esetén:
                                                             s
                                                                    2ℓ
                                                    T = 2π                .
                                                                 3g cos α
                                                                                                      ◦
Vajon alkalmazható-e most ez az összefüggés? A feladat szövege szerint a lejt® nem túl meredek. Egy 45 -os lejt® már
elég meredeknek számít, de az ekkora szögben kitérített inga lengésideje is sak kb. 4%-kal nagyobb a fenti képlettel
                                       ◦
számolt lengésid®nél. Ha a lejt® sak 30 -os, az eltérés 2%-nál is kisebb. Jó közelítéssel tehát azt mondhatjuk, hogy
a ko si elmozdulása addig a pillanatig, amíg az inga újra függ®legessé válik


                                               1                   2ℓ      4π 2
                                          s≈     g sin α · 4π 2          =      ℓ tg α.
                                               2                3g cos α    3
   3. feladat. Egy ideális diódából, két R = 2 kΩ nagyságú ellenállásból, egy kezdetben töltetlen, C = 100 µF kapa itású
kondenzátorból és egy feszültséggenerátorból a 4. ábrán látható kap solást állítottuk össze. A feszültséggenerátoron
f = 5 kHz frekven iájú, +U0 és −U0 között változó szimmetrikus négyszögjelet állítunk be, ahol U0 = 3,6 V.




                                                            4. ábra



   a) Mekkora maximális feszültségre tölt®dik fel a kondenzátor?
   b) A kondenzátor töltetlen állapotától számítva körülbelül mennyi id® után éri el a kondenzátor feszültsége a maxi-
mális érték felét?

   Megoldás. A kap solásban félperiódusonként felváltva +U0 és −U0 feszültséget kap solunk egy soros RC kap-
                                                                                                          R
 solásra, ahol a kondenzátor kapa itása mindvégig C , az ellenállás pedig az áramiránytól függ®en R1    = , illetve
                                                                                                          2
R2 = R. Jól ismert, hogy ha egy töltetlen, C kapa itású kondenzátorból és egy R ellenállásból álló soros RC kap so-
lásra U0 feszültséget kap solunk, akkor a kondenzátor feszültsége az

                                                                  t
                                                U (t) = U0 1 − e− τ

függvény szerint változik, ahol az id®állandó τ = RC .
   Vegyük észre, hogy a mi esetünkben az (egyik) id®állandó τ
                                                           = RC = 0,2 s (a másik ennek fele), a négyszögjel
                        1
periódusideje pedig T =   = 0,2 ms, és így T ≪ τ . Emiatt egy fél periódusnyi id® alatt a tölt®d® kondenzátor
                        f
feszültsége nagyon jó közelítéssel lineárisan változik.
   Legyen a kondenzátor feszültsége egy adott id®pillanatban UC (t), a kondenzátoron átfolyó áram pedig I(t). A négy-
szögjel els® fél periódusában (amikor a dióda nyitva van, és mindkét ellenálláson folyik áram)


                                                    R                                2           
                           U0 − UC = R1 I1 (t) =      I1 (t),   amib®l    I1 (t) =     U0 − UC (t) .
                                                    2                                R
                                              T
   Egy fél periódus alatt ez az áram I1 (t)     töltést szállít a kondenzátorra, így a kondenzátor feszültségének megvál-
                                              2
tozása

                                          1       T   T             T            
                              ∆UC (t) =     I1 (t) =     U0 − UC (t) =   U0 − UC (t) .
                                          C       2  RC                τ
   A másik fél periódusban (amikor a dióda lezár, és        sak az egyik ellenálláson folyhat áram)

                                                                                     1              
                         −U0 − UC = R2 I2 (t) = RI2 (t),        amib®l   I2 (t) =       − U0 − UC (t) ,
                                                                                     R
   és a fél periódus alatt a kondenzátor feszültségének megváltozása

                                      1       T   T                 T               
                          ∆UC (t) =     I2 (t) =      − U0 − UC (t) =     − U0 − UC (t) .
                                      C       2  2RC                  2τ
   Egy teljes periódus alatt a feszültség teljes megváltozása a két fél periódus alatti változás összege:
                                                                                         
                                             T               3T              U0
                                   ∆UC (t) =     U0 − 3UC (t) =                   − UC (t) .
                                             2τ                 2τ             3
                                                                                          U0
   A kondenzátor feszültsége akkor nem n® tovább, ha ∆UC (t) = 0, azaz ha UC (t) =           , tehát a kondenzátor hosszú
                                                                                          3
                  U0
id® után UC (∞) =     = 1,2 V feszültségre tölt®dik fel.
                   3
   Ezután áttérünk a b) kérdés megválaszolására. Mivel a periódusid® sokkal kisebb az id®állandónál, az egy periódus
alatti feszültségváltozás nagyon ki si, a kondenzátor sok perióduson át tölt®dik. Ezen az id®skálán a félperiódusok alatti
tölt®dések és kisülések kis ingadozása nem is látszik. Egy olyan folyamatot kapunk, ahol a kondenzátor feszültsége
lényegében folyamatosan n® a kezdeti UC (0) = 0 értékt®l az UC (∞) értékig.
   Az utolsó egyenletünk alapján

                                                            
                         d UC (∞) − UC (t)    ∆ UC (∞) − UC (t)      3                
                                            ≈                    =−     UC (∞) − UC (t) .
                                dt                   T              2τ
   Ez pedig egy ugyanolyan dieren iálegyenlet, mint amely leírja egy kondenzátor feltölt®dését (és amely jól ismert
a radioaktív bomlástörvényb®l is), megoldása:

                                                                      3t
                                       UC (∞) − UC (t) = UC (∞) − UC (0) e− 2τ ,

   amib®l látható, hogy a kondenzátor akkor tölt®dik fel a maximális érték felére, ha

                                          3t     1                 2
                                       e− 2τ =     ,   azaz   t=     τ ln 2 = 0,0924 s.
                                                 2                 3

                                                              ∗
   Az ünnepélyes eredményhirdetés és díjkiosztás a járványhelyzet miatt elmaradt. Helyette az eredetileg meghirdetett
id®pontban, 2020. november 20-án délután 3 órakor a verseny honlapjára került fel mindaz, ami az eredményhirdetésen
elhangzott volna. Ismertetésre kerültek az 50 és 25 évvel ezel®tti Eötvös-verseny feladatai, és az akkori díjazottak egy
részének visszaemlékezései: az 50 évvel ezel®ttiek közül Horváth Péter és Ti hy-Rá s Ádám, a 25 évvel ezel®ttiek közül
Lovas Rezs®, Tóth Gábor Zsolt és Varga Dezs® küldött üzenetet.
   Ezt követte a 2020. évi verseny feladatainak és megoldásainak bemutatása (az 1. feladat megoldását Ti hy Géza,
a 2. feladatét Vigh Máté, a 3. feladatét Vankó Péter írta le), majd az eredmények közlése:
   Egyetlen versenyz® sem oldotta meg mindhárom feladatot, így a versenybizottság nem adott ki els® díjat.
   Az els® feladat helyes és a harmadik feladat lényegében helyes megoldásáért, valamint a második feladatban elért
részeredményekért második díjat nyert Bonifert Balázs, a budapesti Baár-Madas Református Gimnázium 12. osztá-
lyos tanulója, Horváth Norbert tanítványa és Pá sonyi Péter, a BME me hatronikai mérnök alapszakos hallgatója,
aki a Zalaegerszegi Zrínyi Miklós Gimnáziumban érettségizett Pálovi s Róbert tanítványaként.
   A második és a harmadik feladat ki sit hiányos megoldásáért harmadik díjat nyert Molnár Szabol s, a BME
zika BS   szakos hallgatója, aki a Ke skeméti Katona József Gimnáziumban érettségizett Sáróné Jéga-Szabó Irén
tanítványaként.
   Az els® feladat hibátlan megoldásáért di séretet kapott Fekete Dezs® Domonkos, a BME zika BS              szakos hall-
gatója, aki a Ke skeméti Katona József Gimnáziumban érettségizett Sáróné Jéga-Szabó Irén tanítványaként, Selmi
Bálint, a Pé si Le®wey Klára Gimnázium 12. osztályos tanulója, Simon Péter, Kotek László és Pálfalvi László tanít-
ványa, valamit Sepsi Csombor Márton, a Zalaegerszegi Zrínyi Miklós Gimnázium 12. osztályos tanulója, Ková s
Tibor tanítványa.
   A második díjjal Zimányi Gergely adományából 75 ezer, a harmadik díjjal 55 ezer, a di sérettel 35 ezer forint
pénzjutalom jár. A díjazottak tanárai az Eötvös Loránd emlékalbumot kapják. Az Eötvös Loránd Fizikai Társulatot
a Nanorobot Vagyonkezel® Kft. és az Andersen Adótaná sadó Zrt. támogatja. Köszönjük az adományozók önzetlen
támogatását!



                                                                                 Ti hy Géza, Vankó Péter, Vigh Máté
