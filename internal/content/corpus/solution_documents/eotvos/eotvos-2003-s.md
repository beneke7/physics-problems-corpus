---
id: solution-document-eotvos-2003-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2003_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-2003-parallel-conductors, eotvos-2003-thin-walled-cylinder, eotvos-2003-water-droplet]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2003_S.pdf."
---

2003. október 17-én rendezte meg az Eötvös Loránd Fizikai Társulat Budapesten és 15 vidéki városban az 1949-es
felújítása óta 55. Eötvös-versenyt. Új színfoltot jelentett Ke skemét belépése a versenybe. Sáró Péter, a Katona József
Gimnázium és Számításte hnikai Szakközépiskola igazgatóhelyettese szervezésében 9 tanuló jelent meg és adott be itt
dolgozatot. A többi vidéki helyszín (zárójelben a versenyt szervez® tanár neve és a versenyz®k száma) a következ®
volt:
   Pé s (Kotek László, 13); Debre en (Kop sa József, 11); Nagykanizsa (Piriti János, 7); Szombathely (Ruszkai Zol-
tán, 7); Szeged (Molnár Miklós, 6); Veszprém (Gergelyi Gábor, 6); Békés saba (Varga István, 4); Székesfehérvár (Ujvári
Sándor, 4); Gy®r (Zábrádi Antal, 3); Szekszárd (Jurisits József, 3); Nyíregyháza (Po sai Péter, 2); Sopron (Légrádi
Imre, 2); Eger (Vida József, 1); Miskol   (Mester András, 1).
   Összesen 79 versenyz® volt 15 vidéki városban, így a Budapesten versenyz® 88 diákkal együtt 167-en indultak a
2003. évi Eötvös-versenyen. Közülük összesen 1 volt nem magyar állampolgár, a szlovákiai Révkomáromból érkezett
Rakyta Péter. Tavalyhoz képest  amikor is nagyjából ugyanennyien indultak a versenyen  n®tt a budapesti és
 sökkent a vidéki versenyz®k száma. Örvendetesen sok versenyz® jött a Budapesti M¶szaki és Gazdaságtudományi
Egyetemr®l: összesen 35 els®éves hallgató. Közülük 14-en mérnök-zikus szakon, 12-en m¶szaki informatikus szakon
tanulnak. Még három m¶szaki egyetemi matematikus hallgató is volt közöttük. Reméljük, hogy a továbbiakban ®k is
megtartják a zika iránti érdekl®désüket.
   A középiskolák közül idén is a Fazekas Mihály F®városi Gyakorló Gimnáziumból jött a legtöbb versenyz®: 9 érettsé-
gizett, 8 érettségiz® és 22 atalabb diák. Legalább 5 versenyz® indult még a budapesti Piarista, a pé si Leövey Klára,
és a debre eni Kossuth Lajos Gimnáziumból, valamint a szombathelyi Savaria Szakközépiskolából.

   Ismertetjük a feladatokat és azok helyes megoldását.

                            súszásmentesen gördül lefelé egy α = 10 -os lejt®n. A henger palástjának tömege M , a
                                                                   ◦
   1. Vékonyfalú henger
határoló körlapok tömege elhanyagolható. A henger belsejében m tömeg¶ higany van. (A henger és a higany közötti
súrlódás elhanyagolható.)




                                                         1. ábra


   A higany felszínének a vízszintessel bezárt szöge valamilyen ϕ értékre állt be. Határozza meg ezt a ϕ szöget, ha
   a) M ≪ m;
   b) M = m.

                                                                                                        (Balogh Péter)


   Megoldás. Kínálkozik a dinamikai megoldás. A higanyra er®t fejt ki a Föld és a henger. A hengerre er®t fejt ki a
Föld, a higany és a lejt®. A (higany + henger) rendszerre tehát a Föld és a lejt® fejtenek ki er®t, melyek következtében
a rendszer tömegközéppontja a lejt®vel párhuzamos a gyorsulással mozog. S -sel jelölve a hengerre ható súrlódási er®t,
a dinamika alaptörvénye szerint
                                            (m + M )g sin α − S = (m + M )a.
   A lejt®n   súszásmentesen gördül® henger az ugyan sak a gyorsulással mozgó tömegközéppontja körül β          = a/R
szöggyorsulással forog. A gyorsuló forgást az S súrlódási er® idézi el®. (Vegyük észre, hogy a higany nem forog, mivel
a henger és a higany közötti súrlódás elhanyagolható.) Így a forgásra vonatkozó dinamikai egyenlet:

                                                                   a
                                                    SR = M R2        ,
                                                                   R
amelyb®l
                                                        S = Ma
adódik. Ezt a haladó mozgás dinamikai egyenletébe helyettesítve a gyorsulásra kapjuk:

                                                       m+M
                                                  a=          g sin α.
                                                       m + 2M
Spe iális esetekben:
                                               
                                               
                                                g sin α,       ha      M ≪ m;
                                               
                                               2
                                               
                                            a=     g sin α,     ha      M = m;
                                                3
                                                1 g sin α,
                                               
                                               
                                               
                                                                ha      M ≫ m.
                                                 2
A higany felszínének a vízszintessel bezárt szögét legegyszer¶bben abból határozhatjuk meg, hogy a folyadék felszíne
a folyadékkal együtt mozgó gyorsuló rendszerben is mer®leges a rá ható (nehézségi + tehetetlenségi) er®k ered®jére.
Amekkora ϕ szöget zár be ez az ered® er® a függ®legessel, akkora ϕ szöget fog a higany felszíne a vízszintessel bezárni.
A 2. ábra alapján a keresett szög tangense könnyen meghatározható:

                                                     ma cos α        cos α
                                         tg ϕ =                  =           .
                                                   mg − ma sin α   g
                                                                     − sin α
                                                                   a




                                                          2. ábra


   Vizsgáljuk meg a gyorsulásra felírt három spe iális esetet!
   a) M ≪ m esetén
                                                           cos α
                                             tg ϕ =                     = tg α,
                                                         1
                                                             − sin α
                                                       sin α
vagyis ekkor ϕ = α = 10 .
                       ◦

   b) M = m esetén
                                                      cos α             2 sin α cos α
                                        tg ϕ =                      =                 ,
                                                     3                  3 − 2 sin2 α
                                                          − sin α
                                                  2 sin α
amib®l ϕ = 6,636       ≈ 6,6◦ .
                   ◦

   c) M ≫ m esetén
                                                       cos α            sin α cos α
                                          tg ϕ =                    =               ,
                                                     2                  2 − sin2 α
                                                         − sin α
                                                   sin α
ahonnan ϕ = 4,962          ≈ 5,0◦ .
                       ◦


   Megjegyzés. A M ≫ m eset diszkussziója nem volt feladat, itt           sak a szimmetria kedvéért, no meg azért is tárgyal-
tuk, mert néhány versenyz® gyelmetlenségb®l ezt vizsgálta az M ≪ m eset helyett.

   2. Két párhuzamos, egymástól d távolságra haladó, végtelen hosszú, vékony egyenes vezet®ben egyenl® nagyságú és
ellentétes irányú áramok folynak. Az induk ióvonalak a vezet®kre mer®leges síkokban helyezkednek el. Válasszon ki az
egyik síkban egy tetsz®leges P pontot és vizsgálja meg, hogy az ezen áthaladó induk ióvonal kör alakú-e!


                                                                                                             (Radnai Gyula)


   Megoldás. A 3. ábra a két párhuzamos vezet® által létesített mágneses tér néhány induk ióvonalát szemlélteti,
amikor a vezet®kön egyenl® nagyságú, de ellentétes irányú áramok haladnak át.
                                                       3. ábra


   A spe iális árameloszlás miatt a létrejöv® mágneses mez® nagymérv¶ szimmetriát mutat: az egyik és másik áram-
vezet®t körülölel® induk ióvonalak nem sak egymás tükörképei, de akármelyik zárt görbe, amely mentén egy induk-
 ióvonal halad, szimmetrikus a két áramvezet®n átfektetett síkra is. Ett®l persze még lehetnek ellipszisek, körök vagy
magasabb rend¶ zárt görbék is az induk ióvonalak, de ha van köztük kör, akkor annak a középpontja benne kell legyen
az áramvezet®kön átfektetett síkban.
   Vegyünk fel a kiválasztott síkban egy (x; y) koordináta-rendszert úgy, hogy az egyik áram az origón, a másik pedig
a (d; 0) ponton döfje át a síkot. A síkban kiválasztott P (x; y) ponton átmen® körök közül tehát   sak azok jöhetnek
szóba induk ióvonalként, amelyek középpontja rajta van az x tengelyen. Egy ilyen kör középpontja legyen az (x0 ; 0)
pont. A kör egyenlete ekkor
                                                (x − x0 )2 + y 2 = R2 ,
ahol R d-t®l és x0 -tól függ® mennyiség.




                                                       4. ábra




                                                       5. ábra
   Ha ez a kör induk ióvonal, akkor az induk ióvektor állása a kör bármely pontjában megegyezik az ottani érint®
állásával (4. ábra ). A P (x; y) ponton átmen® érint® iránytangense:

                                                      1          1       x − x0
                                         tg ϕ = −         =−          =−        .
                                                    tg ϕ0        y         y
                                                               x − x0
Ezt kell majd összevetnünk a P pontbeli induk ióvektoron átfektetett egyenes iránytangensével. Az ered® B iránytan-
gense (5. ábra ):
                                                           By   B1y + B2y
                                               tg ϕB =        =           .
                                                           Bx   B1x + B2x
Határozzuk meg ezt a mennyiséget! Egyetlen egyenes vezet® által keltett induk ióvektor nagysága:

                                                              µ0 I 1
                                                        B=        · .
                                                              2π r
Ennek és az 5. ábráról leolvasható geometriai összefüggéseknek a felhasználásával az egyes összetev®k:

                                                       µ0 I cos α   µ0 I x
                                    B1y = B1 cos α =       ·      =     · ,
                                                       2π    r1     2π r12

                                                            µ0 I cos β   µ0 I (d − x)
                                    B2y = −B2 cos β = −         ·      =     ·        ,
                                                            2π    r2     2π      r22
                                                           µ0 I sin α    µ0 I y
                                    B1x = −B1 sin α = −        ·      =−     · ,
                                                           2π     r1     2π r12
                                                       µ0 I sin β   µ0 I y
                                    B2x = B2 sin β =       ·      =     · .
                                                       2π     r2    2π r22

Helyettesítsük be ezeket a kifejezéseket a tg ϕB -re felírt összefüggésbe! Egyszer¶sítés után:
                                                              !
                                      x     d−x       1     1     d            d
                                          + 2     x
                                                     r 2 − r2   + 2
                                                                  r
                                                                      x−
                                      r 2    r2        1    2      2     1 − (r2 /r1 )2
                              tg ϕB = 1         =                ! =−                   .
                                          y   y           1    1            y
                                      − 2+ 2        −y      −
                                          r1 r2          r12 r22

Ez a kifejezés akkor és   sak akkor egyenl® a korábban kapott

                                                                  x − x0
                                                       tg ϕ = −
                                                                    y
képlettel, ha
                                                                    d
                                                    x0 =                      .
                                                           1 − (r2 /r1 )2
                          q
                                     2                                                                            2
                                                 p
Behelyettesítve az r2 = y 2 + (x − d) és r1 = y 2 + x2 kifejezéseket, rendezés után a következ®t kapjuk: (x − x0 ) +
 2
y = x0 (x0 − d). Ez pedig pontosan a megadott P ponton is átmen®, (x0 ; 0) középpontú kör egyenlete, vagyis ez az
induk ióvonal kör alakú! Megkaptuk a kör sugarát is:
                                                           p
                                                     R=     x0 (x0 − d).

   Íme, ebben a mágneses mez®ben minden induk ióvonal kör alakú, hiszen P a tér tetsz®leges pontja lehet. Egy
ponton   sak egyetlen induk ióvonal mehet át, az pedig kör alakú.

   Megjegyzések. 1. A síkban azoknak a pontoknak a mértani helye, melyek két adott ponttól vett távolságainak
aránya állandó, az ún. Apollóniosz-kör. Eredményeinket úgy is megfogalmazhatjuk, hogy a vizsgált mágneses térben
az induk ióvonalak Apollóniosz-körök.
   Bevezetve az r2 /r1 = λ jelölést, e körök egyenlete

                                                        2                           2
                                                   d            2                d
                                           x−                 +y =          λ               ,
                                                1 − λ2                        1 − λ2

amib®l többek között az R = λx0 érdekes összefüggés is leolvasható. (Apollóniosz id®számításunk kezdete el®tt 262-t®l
190-ig élt; a kúpszeletekr®l írt munkájában ® vezette be az ellipszis, parabola és hiperbola kifejezéseket.)
   2. Ha   sak ki sit is általánosabb esetet vizsgálunk, a számolás meglehet®sen elbonyolódik, és soha többé nem
kapunk kör alakú induk ióvonalakat. Érdemes lenne számítógépes szimulá ióval meghatározni az ellentétes irányú, de
nem egyenl® nagyságú áramok keltette mágnestér induk ióvonalait, hiszen erre r ≪ d esetén (az egyik áram közvetlen
közelében) ugyanúgy, mint r ≫ d esetén (ahonnan a két áram már egyetlen |I1 − I2 | nagyságú áramnak látszik) az
induk ióvonalak egyre jobban hasonlítanak a körhöz. De milyen fur sa görbék jöhetnek ki közben?

   3. Egy szabadon kering® ¶rhajó kabinjának belsejében mozdulatlanul lebeg egy kb.          4 cm átmér®j¶ vízgolyó és a
közelében egy kb. 8 cm hosszúságú, vékony, kör keresztmetszet¶, legömbölyített vég¶ üvegpál a. A pál a egyik végét
egészen noman érintkezésbe hozzuk a víz seppel. Vázolja fel, milyen alakot vesz fel a víz!


                                                                                                     (Károlyházy Frigyes)



   Megoldás. A kiindulási helyzetben (6. ábra ) a vízgolyó közelében lebeg az üvegpál a.




                                                         6. ábra




                                                          7. ábra




                                                          8. ábra




                                                         9. ábra




                                                         10. ábra




                                                         11. ábra


   A folyamat akkor kezd®dik, amikor a pál a egyik végét egészen noman érintkezésbe hozzuk a víz seppel (7. ábra ).
A víz nedvesíti az üveget, kissé ráfolyik a pál a legömbölyített végére (8. ábra ). Itt azonban a folyamat nem állhat
le, mert az üvegpál ára ható er®k ered®je nem nulla. Igaz ugyan, hogy az R sugarú víz sepp belsejében a nyomás
                                                                  2
egy ki sit nagyobb, mint a küls® légnyomás (∆p = 2α/R), és ez r     π∆p er®vel tolná kifelé az r sugarú pál át, de
ennél sokkal nagyobb a pál ára rásimuló vízhártya által kifejtett 2rπα nagyságú húzóer®. A pál a tehát benyomul a
víz seppbe, egy közbüls® helyzet a 9. ábrán látható.
   Az er®egyensúly ebben a helyzetben sem áll fenn, nin s ok, amiért a pál a megállna, egészen a 10. ábrán látható
állapotig. Most már a pál a elérte a víz sepp bal oldali szélét, kissé túl is ment rajta, a vízfelszín itt kissé kinyomódik.
Az er®egyensúly azonban    sak akkor áll be, amikor a pál a bal oldali vége teljesen kibújik a víz seppb®l, ekkor a pál a
mindkét végét körülölel® víz felszíne ugyanolyan alakú (11. ábra ).
     Meg kell gondolnunk még, hogy vajon a víz sepp nem folyik-e szét a pál án. A rendszer összenergiája a leveg®vel
érintkez® víz felületi energiájának és a vízzel érintkez® üveg energiájának összegével egyenl®; ez a mennyiség igyekszik
minél kisebb lenni. Tekintettel arra, hogy a pál a vékony, a üveg teljesfelülete elhanyagolható a vízgolyó felületéhez
képest. A rendszer egyensúlyát tehát a legkisebb vízfelszín követelménye határozza meg, ez pedig (adott térfogatú víz
esetén) a gömb alaknál teljesül.
     A végállapotban tehát a vízgolyó majdnem pontosan gömb alakú, az üvegpál a ennek a gömbnek egyik átmér®je
mentén helyezkedik el, és mindkét végét kidugja a vízb®l.


     Az ünnepélyes eredményhirdetésre 2003. november 21-én került sor az ELTE lágymányosi déli épületének Mogyoródi
József tantermében, ott, ahol a budapesti versenyz®k a dolgozatokat is írták.
     El®ször a Versenybizottság elnöke emlékezett meg a nemrég elhunyt Teller Edér®l, és bemutatta azokat a felada-
tokat, amelyek kiváló megoldásával Teller Ede megnyerte az 1925. évi Eötvös-versenyt. A megjelentek egyetértettek
abban, hogy azok bizony könnyebb feladatok voltak, mint az ideiek. Igaz, nem is állt rendelkezésre a felkészüléshez
annyi jó példatár és szakirodalom, nem voltak felkészít® szakkörök.
     Azután az 50 évvel ezel®tti Eötvös-verseny feladatainak bemutatása következett, s egy diákkori fénykép az akkori
nyertesr®l, Zawadowski Alfréd akadémikusról. (Sajnos ® nem tudott eleget tenni a díjkiosztásra szóló meghívásnak,
mert külföldön tartózkodott. Talán majd a következ®re eljön, amire újra meg fogjuk hívni, mert 1954-ben is díjazott
volt az Eötvös-versenyen.) Ami az 1953-as feladatokat illeti, azok se voltak nehezebbek az 1925-ös feladatoknál. Ezen
se   sodálkozhatunk, akkor még nem is volt zika rovata az újra indított Középiskolai Matematikai Lapoknak.
     A bevezet® visszaemlékezések után következett a 2003. évi Eötvös-verseny feladatok és ezek helyes megoldásainak
bemutatása. Az els® két feladat Radnai Gyula által adott megoldását Gnädig Péter egészítette ki érdekes megjegy-
zésekkel és egy meglep® analógián alapuló megoldás ismertetésével, míg a harmadik feladat különböz® megközelítés¶
megoldásainak bemutatására a legjobb versenyz®ket kérte fel a Versenybizottság elnöke.
     A verseny díjait Németh Judit akadémiai levelez® tag, az Eötvös Loránd Fizikai Társulat elnöke adta át.
     I. díjat és 20 ezer forint érték¶ könyvutalványt kapott Horváth Márton, a Fazekas Mihály F®városi Gyakorló
Gimnázium 12. osztályos tanulója, Horváth Gábor tanítványa.
     II. díjat kaptak, kiegészítve 15-15 ezer forintos könyvutalványokkal Csóka Endre, az ELTE matematikus hallga-
tója, aki a debre eni Fazekas Mihály Gimnáziumban érettségizett mint Szegedi Ervin tanítványa és Kómár Péter, a
Fazekas Mihály F®városi Gyakorló Gimnázium 11. osztályos tanulója, Dvorák Ce ília tanítványa.
     III. díjat és 10-10 ezer forintos könyvutalványt nyert Ba khausz Ágnes, az ELTE matematikus hallgatója, aki a
Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; Burmeister Dániel,
a miskol i Földes Feren   Gimnázium 12. osztályos tanulója, Zsúdel László tanítványa; Rakyta Péter, a révkomáromi
Selye János Gimnázium 12. osztályos tanulója, Szabó Endre tanítványa; Szekeres Balázs, a BMGE mérnök-zikus
hallgatója, aki a szolnoki Verseghy Feren    Gimnáziumban érettségizett mint Lapu Béla tanítványa; Vigh Máté, a
pé si Babits Mihály Gyakorló Gimnázium 12. osztályos tanulója, Kon z Károly és Kotek László tanítványa és Zsuga
Sándor, a ke skeméti Bányai Júlia Gimnázium 12. osztályos tanulója, Késmárki Andrásné tanítványa.
     Di séretet kaptak a következ®k: Balogh László, a BMGE mérnök-zikus hallgatója, aki a Fazekas Mihály F®városi
Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; Nagy Róbert, a budapesti Apá zai Csere
János Gyakorló Gimnázium 11. osztályos tanulója, Pákó Gyula tanítványa; Nádor Csaba, a BMGE mérnök-zikus
hallgatója, aki a budapesti Kassák Lajos Gimnáziumban érettségizett mint Magyari Gyula tanítványa; Ruppert
László, a BMGE matematikus hallgatója, aki a pé si Janus Pannonius Gimnáziumban érettségizett, mint Keresztesné
Borsos Sarolta és Kotek László tanítványa.
     A di séretes versenyz®k a Nemzeti Tankönyvkiadótól kaptak 8-8 ezer forint érték¶ könyvutalványt, a díjazottak
pedig plusz 2-2 ezer forint érték¶eket.
     Befejezésül az elnök megköszönte az Oktatási Misztériumnak és a Nemzeti Tankönyvkiadónak a könyvutalványo-
kat, a Typotex Kiadónak és a M¶szaki Kiadónak pedig azokat a felajánlott jutalomkönyveket, amelyekb®l a nyertes
versenyz®k megjelent tanárai válogathattak.
     Legboldogabb versenyz® idén is az I. díjas volt, aki az erköl si gy®zelem mellé megkapta még a Társulat Eötvös-
verseny érmét is. Immár ketten vannak az országban, akik ilyen éremmel rendelkeznek.
