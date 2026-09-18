---
id: solution-ocr-eotvos-2003-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2003_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
canonical_solution: false
---
2003. október 17-én rendezte meg az Eötvös Loránd Fizikai Társulat Budapesten és 15 vidéki városban az 1949-es felújítása óta 55. Eötvös-versenyt. Új színfoltot jelentett Kecskemét belépése a versenybe. Sáró Péter, a Katona József Gimnázium és Számítástechnikai Szakközépiskola igazgatóhelyettese szervezésében 9 tanuló jelent meg és adott be itt dolgozatot. A többi vidéki helyszín (zárójelben a versenyt szervező tanár neve és a versenyzők száma) a következő volt:

Pécs (Kotek László, 13); Debrecen (Kopcsa József, 11); Nagykanizsa (Piriti János, 7); Szombathely (Ruszkai Zoltán, 7); Szeged (Molnár Miklós, 6); Veszprém (Gergelyi Gábor, 6); Békéscsaba (Varga István, 4); Székesfehérvár (Ujvári Sándor, 4); Gyór (Zábrádi Antal, 3); Szekszárd (Jurisits József, 3); Nyíregyháza (Pocsai Péter, 2); Sopron (Légrádi Imre, 2); Eger (Vida József, 1); Miskolc (Mester András, 1).

Összesen 79 versenyző volt 15 vidéki városban, így a Budapesten versenyző 88 diákkal együtt 167-en indultak a 2003. évi Eötvös-versenyen. Közülük összesen 1 volt nem magyar állampolgár, a szlovákiai Révkomáromból érkezett Rakyta Péter. Tavalyhoz képest - amikor is nagyjából ugyanennyien indultak a versenyen - nőtt a budapesti és csökkent a vidéki versenyzők száma. Örvendetesen sok versenyző jött a Budapesti Müszaki és Gazdaságtudományi Egyetemról: összesen 35 első́eves hallgató. Közülük 14-en mérnök-fizikus szakon, 12-en müszaki informatikus szakon tanulnak. Még három müszaki egyetemi matematikus hallgató is volt közöttük. Reméljük, hogy a továbbiakban ők is megtartják a fizika iránti érdeklődésüket.

A középiskolák közül idén is a Fazekas Mihály Fővárosi Gyakorló Gimnáziumból jött a legtöbb versenyző: 9 érettségizett, 8 érettségiző és 22 fiatalabb diák. Legalább 5 versenyző indult még a budapesti Piarista, a pécsi Leövey Klára, és a debreceni Kossuth Lajos Gimnáziumból, valamint a szombathelyi Savaria Szakközépiskolából.

Ismertetjük a feladatokat és azok helyes megoldását.

1. Vékonyfalú henger csúszásmentesen gördül lefelé egy $\alpha = 10 ^ { \circ }$-os lejtón. A henger palástjának tömege $M$, a határoló körlapok tömege elhanyagolható. A henger belsejében $m$ tömegü higany van. (A henger és a higany közötti súrlódás elhanyagolható.)
![](../../../figures/solution-ocr/62927e345f54e57b968e1732.jpg)

A higany felszínének a vízszintessel bezárt szöge valamilyen $\varphi$ értékre állt be. Határozza meg ezt a $\varphi$ szöget, ha

a) $M \ll m$;
b) $M = m$.

(Balogh Péter)

Megoldás. Kínálkozik a dinamikai megoldás. A higanyra erốt fejt ki a Föld és a henger. A hengerre erốt fejt ki a Föld, a higany és a lejtő. A (higany + henger) rendszerre tehát a Föld és a lejtő fejtenek ki erőt, melyek következtében a rendszer tömegközéppontja a lejtóvel párhuzamos $a$ gyorsulással mozog. $S$-sel jelölve a hengerre ható súrlódási erốt, a dinamika alaptörvénye szerint

$$
( m + M ) g \sin \alpha - S = ( m + M ) a .
$$

A lejtőn csúszásmentesen gördülő henger az ugyancsak $a$ gyorsulással mozgó tömegközéppontja körül $\beta = a / R$ szöggyorsulással forog. A gyorsuló forgást az $S$ súrlódási eró idézi elő. (Vegyük észre, hogy a higany nem forog, mivel a henger és a higany közötti súrlódás elhanyagolható.) Így a forgásra vonatkozó dinamikai egyenlet:

$$
S R = M R ^ { 2 } \frac { a } { R } ,
$$

amelyből

$$
S = M a
$$

adódik. Ezt a haladó mozgás dinamikai egyenletébe helyettesítve a gyorsulásra kapjuk:

$$
a = \frac { m + M } { m + 2 M } g \sin \alpha .
$$


Speciális esetekben:

$$
a = \begin{cases} g \sin \alpha , & \text { ha } \quad M \ll m ; \\ \frac { 2 } { 3 } g \sin \alpha , & \text { ha } \quad M = m ; \\ \frac { 1 } { 2 } g \sin \alpha , & \text { ha } \quad M \gg m . \end{cases}
$$

A higany felszínének a vízszintessel bezárt szögét legegyszerübben abból határozhatjuk meg, hogy a folyadék felszíne a folyadékkal együtt mozgó gyorsuló rendszerben is meróleges a rá ható (nehézségi + tehetetlenségi) erók eredőjére. Amekkora $\varphi$ szöget zár be ez az eredő eró a függőlegessel, akkora $\varphi$ szöget fog a higany felszíne a vízszintessel bezárni. A 2. ábra alapján a keresett szög tangense könnyen meghatározható:

$$
\operatorname { tg } \varphi = \frac { m a \cos \alpha } { m g - m a \sin \alpha } = \frac { \cos \alpha } { \frac { g } { a } - \sin \alpha } .
$$

![](../../../figures/solution-ocr/197ca231f629e877586be5cc.jpg)
2. ábra

Vizsgáljuk meg a gyorsulásra felírt három speciális esetet!

a) $M \ll m$ esetén
$$
\operatorname { tg } \varphi = \frac { \cos \alpha } { \frac { 1 } { \sin \alpha } - \sin \alpha } = \operatorname { tg } \alpha ,
$$
vagyis ekkor $\varphi = \alpha = 10 ^ { \circ }$.
b) $M = m$ esetén
$$
\operatorname { tg } \varphi = \frac { \cos \alpha } { \frac { 3 } { 2 \sin \alpha } - \sin \alpha } = \frac { 2 \sin \alpha \cos \alpha } { 3 - 2 \sin ^ { 2 } \alpha } ,
$$
amiből $\varphi = 6,636 ^ { \circ } \approx 6,6 ^ { \circ }$.
c) $M \gg m$ esetén
$$
\operatorname { tg } \varphi = \frac { \cos \alpha } { \frac { 2 } { \sin \alpha } - \sin \alpha } = \frac { \sin \alpha \cos \alpha } { 2 - \sin ^ { 2 } \alpha } ,
$$
ahonnan $\varphi = 4,962 ^ { \circ } \approx 5,0 ^ { \circ }$.

Megjegyzés. A $M \gg m$ eset diszkussziója nem volt feladat, itt csak a szimmetria kedvéért, no meg azért is tárgyaltuk, mert néhány versenyző figyelmetlenségből ezt vizsgálta az $M \ll m$ eset helyett.
2. Két párhuzamos, egymástól d távolságra haladó, végtelen hosszú, vékony egyenes vezetốben egyenlố nagyságú és ellentétes irányú áramok folynak. Az indukcióvonalak a vezetốkre merốleges síkokban helyezkednek el. Válasszon ki az egyik síkban egy tetszóleges $P$ pontot és vizsgálja meg, hogy az ezen áthaladó indukcióvonal kör alakú-e!
(Radnai Gyula)

Megoldás. A 3. ábra a két párhuzamos vezetó által létesített mágneses tér néhány indukcióvonalát szemlélteti, amikor a vezetőkön egyenlő nagyságú, de ellentétes irányú áramok haladnak át.


![](../../../figures/solution-ocr/3b4cafbad96164a67600fcb8.jpg)
3. ábra

A speciális árameloszlás miatt a létrejövő mágneses mező nagymérvú szimmetriát mutat: az egyik és másik áramvezetốt körülölelő indukcióvonalak nemcsak egymás tükörképei, de akármelyik zárt görbe, amely mentén egy indukcióvonal halad, szimmetrikus a két áramvezetőn átfektetett síkra is. Ettől persze még lehetnek ellipszisek, körök vagy magasabb rendú zárt görbék is az indukcióvonalak, de ha van köztük kör, akkor annak a középpontja benne kell legyen az áramvezetőkön átfektetett síkban.

Vegyünk fel a kiválasztott síkban egy ( $x ; y$ ) koordináta-rendszert úgy, hogy az egyik áram az origón, a másik pedig a $( d ; 0 )$ ponton döfje át a síkot. A síkban kiválasztott $P ( x ; y )$ ponton átmenő körök közül tehát csak azok jöhetnek szóba indukcióvonalként, amelyek középpontja rajta van az $x$ tengelyen. Egy ilyen kör középpontja legyen az $\left( x _ { 0 } ; 0 \right)$ pont. A kör egyenlete ekkor

$$
\left( x - x _ { 0 } \right) ^ { 2 } + y ^ { 2 } = R ^ { 2 } ,
$$

ahol $R d$-től és $x _ { 0 }$-tól függő mennyiség.

![](../../../figures/solution-ocr/5664c14dae9f557e250daa8d.jpg)
4. ábra

![](../../../figures/solution-ocr/cce9b9097c94a3ba656492da.jpg)
5. ábra


Ha ez a kör indukcióvonal, akkor az indukcióvektor állása a kör bármely pontjában megegyezik az ottani érintő állásával (4. ábra). A $P ( x ; y )$ ponton átmenó érintő iránytangense:

$$
\operatorname { tg } \varphi = - \frac { 1 } { \operatorname { tg } \varphi _ { 0 } } = - \frac { 1 } { \frac { y } { x - x _ { 0 } } } = - \frac { x - x _ { 0 } } { y } .
$$

Ezt kell majd összevetnünk a $P$ pontbeli indukcióvektoron átfektetett egyenes iránytangensével. Az eredő B iránytangense (5. ábra):

$$
\operatorname { tg } \varphi _ { B } = \frac { B _ { y } } { B _ { x } } = \frac { B _ { 1 y } + B _ { 2 y } } { B _ { 1 x } + B _ { 2 x } } .
$$

Határozzuk meg ezt a mennyiséget! Egyetlen egyenes vezetó által keltett indukcióvektor nagysága:

$$
B = \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { 1 } { r } .
$$

Ennek és az 5. ábráról leolvasható geometriai összefüggéseknek a felhasználásával az egyes összetevők:

$$
\begin{aligned}
& B _ { 1 y } = B _ { 1 } \cos \alpha = \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { \cos \alpha } { r _ { 1 } } = \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { x } { r _ { 1 } ^ { 2 } } , \\
& B _ { 2 y } = - B _ { 2 } \cos \beta = - \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { \cos \beta } { r _ { 2 } } = \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { ( d - x ) } { r _ { 2 } ^ { 2 } } , \\
& B _ { 1 x } = - B _ { 1 } \sin \alpha = - \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { \sin \alpha } { r _ { 1 } } = - \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { y } { r _ { 1 } ^ { 2 } } , \\
& B _ { 2 x } = B _ { 2 } \sin \beta = \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { \sin \beta } { r _ { 2 } } = \frac { \mu _ { 0 } I } { 2 \pi } \cdot \frac { y } { r _ { 2 } ^ { 2 } } .
\end{aligned}
$$

Helyettesítsük be ezeket a kifejezéseket a $\operatorname { tg } \varphi _ { B }$-re felírt összefüggésbe! Egyszerúsítés után:

$$
\operatorname { tg } \varphi _ { B } = \frac { \frac { x } { r _ { 1 } ^ { 2 } } + \frac { d - x } { r _ { 2 } ^ { 2 } } } { - \frac { y } { r _ { 1 } ^ { 2 } } + \frac { y } { r _ { 2 } ^ { 2 } } } = \frac { x \left( \frac { 1 } { r _ { 1 } ^ { 2 } } - \frac { 1 } { r _ { 2 } ^ { 2 } } \right) + \frac { d } { r _ { 2 } ^ { 2 } } } { - y \left( \frac { 1 } { r _ { 1 } ^ { 2 } } - \frac { 1 } { r _ { 2 } ^ { 2 } } \right) } = - \frac { x - \frac { d } { 1 - \left( r _ { 2 } / r _ { 1 } \right) ^ { 2 } } } { y } .
$$

Ez a kifejezés akkor és csak akkor egyenlő a korábban kapott

$$
\operatorname { tg } \varphi = - \frac { x - x _ { 0 } } { y }
$$

képlettel, ha

$$
x _ { 0 } = \frac { d } { 1 - \left( r _ { 2 } / r _ { 1 } \right) ^ { 2 } }
$$

Behelyettesítve az $r _ { 2 } = \sqrt { y ^ { 2 } + ( x - d ) ^ { 2 } }$ és $r _ { 1 } = \sqrt { y ^ { 2 } + x ^ { 2 } }$ kifejezéseket, rendezés után a következőt kapjuk: $\left( x - x _ { 0 } \right) ^ { 2 } +$ $y ^ { 2 } = x _ { 0 } \left( x _ { 0 } - d \right)$. Ez pedig pontosan a megadott $P$ ponton is átmenő, $\left( x _ { 0 } ; 0 \right)$ középpontú kör egyenlete, vagyis ez az indukcióvonal kör alakú! Megkaptuk a kör sugarát is:

$$
R = \sqrt { x _ { 0 } \left( x _ { 0 } - d \right) } .
$$

Íme, ebben a mágneses mezőben minden indukcióvonal kör alakú, hiszen $P$ a tér tetszőleges pontja lehet. Egy ponton csak egyetlen indukcióvonal mehet át, az pedig kör alakú.

Megjegyzések. 1. A síkban azoknak a pontoknak a mértani helye, melyek két adott ponttól vett távolságainak aránya állandó, az ún. Apollóniosz-kör. Eredményeinket úgy is megfogalmazhatjuk, hogy a vizsgált mágneses térben az indukcióvonalak Apollóniosz-körök.

Bevezetve az $r _ { 2 } / r _ { 1 } = \lambda$ jelölést, e körök egyenlete

$$
\left( x - \frac { d } { 1 - \lambda ^ { 2 } } \right) ^ { 2 } + y ^ { 2 } = \left( \lambda \frac { d } { 1 - \lambda ^ { 2 } } \right) ^ { 2 }
$$

amiből többek között az $R = \lambda x _ { 0 }$ érdekes összefüggés is leolvasható. (Apollóniosz időszámításunk kezdete előtt 262-től 190-ig élt; a kúpszeletekről írt munkájában ő vezette be az ellipszis, parabola és hiperbola kifejezéseket.)


2. Ha csak kicsit is általánosabb esetet vizsgálunk, a számolás meglehetősen elbonyolódik, és soha többé nem kapunk kör alakú indukcióvonalakat. Érdemes lenne számítógépes szimulációval meghatározni az ellentétes irányú, de nem egyenló nagyságú áramok keltette mágnestér indukcióvonalait, hiszen erre $r \ll d$ esetén (az egyik áram közvetlen közelében) ugyanúgy, mint $r \gg d$ esetén (ahonnan a két áram már egyetlen $\left| I _ { 1 } - I _ { 2 } \right|$ nagyságú áramnak látszik) az indukcióvonalak egyre jobban hasonlítanak a körhöz. De milyen furcsa görbék jöhetnek ki közben?
3. Egy szabadon keringó ứrhajó kabinjának belsejében mozdulatlanul lebeg egy kb. 4 cm átmérójũ vízgolyó és a közelében egy kb. 8 cm hosszúságú, vékony, kör keresztmetszetű, legömbölyített végü üvegpálca. A pálca egyik végét egészen finoman érintkezésbe hozzuk a „vízcseppel”. Vázolja fel, milyen alakot vesz fel a víz!
(Károlyházy Frigyes)

Megoldás. A kiindulási helyzetben (6. ábra) a vízgolyó közelében lebeg az üvegpálca.

![](../../../figures/solution-ocr/6fc2e352b2d51785af0ec8ad.jpg)
6. ábra

![](../../../figures/solution-ocr/c8df88a358e8b8c3996d7405.jpg)
7. ábra

![](../../../figures/solution-ocr/1066a2528aded3d5e0f527a7.jpg)
8. ábra

![](../../../figures/solution-ocr/63a8f122f334eac0c4cfc54e.jpg)
9. ábra

![](../../../figures/solution-ocr/1e7429099b6123873382abc7.jpg)
10. ábra

![](../../../figures/solution-ocr/d4b56c76066fea749e03d7a0.jpg)
11. ábra

A folyamat akkor kezdődik, amikor a pálca egyik végét egészen finoman érintkezésbe hozzuk a vízcseppel (7. ábra). A víz nedvesíti az üveget, kissé „ráfolyik” a pálca legömbölyített végére (8. ábra). Itt azonban a folyamat nem állhat le, mert az üvegpálcára ható erók eredője nem nulla. Igaz ugyan, hogy az $R$ sugarú vízcsepp belsejében a nyomás egy kicsit nagyobb, mint a külső légnyomás $( \Delta p = 2 \alpha / R )$, és ez $r ^ { 2 } \pi \Delta p$ erốvel tolná kifelé az $r$ sugarú pálcát, de ennél sokkal nagyobb a pálcára rásimuló vízhártya által kifejtett $2 r \pi \alpha$ nagyságú húzóerő. A pálca tehát benyomul a vízcseppbe, egy közbülső helyzet a 9. ábrán látható.

Az erőegyensúly ebben a helyzetben sem áll fenn, nincs ok, amiért a pálca megállna, egészen a 10. ábrán látható állapotig. Most már a pálca elérte a vízcsepp bal oldali szélét, kissé túl is ment rajta, a vízfelszín itt kissé kinyomódik.


Az erőegyensúly azonban csak akkor áll be, amikor a pálca bal oldali vége teljesen kibújik a vízcseppbő̌l, ekkor a pálca mindkét végét körülölelő víz felszíne ugyanolyan alakú (11. ábra).

Meg kell gondolnunk még, hogy vajon a vízcsepp nem folyik-e szét a pálcán. A rendszer összenergiája a levegővel érintkező víz felületi energiájának és a vízzel érintkező üveg energiájának összegével egyenlő; ez a mennyiség igyekszik minél kisebb lenni. Tekintettel arra, hogy a pálca vékony, a üveg teljesfelülete elhanyagolható a vízgolyó felületéhez képest. A rendszer egyensúlyát tehát a legkisebb vízfelszín követelménye határozza meg, ez pedig (adott térfogatú víz esetén) a gömb alaknál teljesül.

A végállapotban tehát a vízgolyó majdnem pontosan gömb alakú, az üvegpálca ennek a gömbnek egyik átmérője mentén helyezkedik el, és mindkét végét „kidugja” a vízből.

Az ünnepélyes eredményhirdetésre 2003. november 21-én került sor az ELTE lágymányosi déli épületének Mogyoródi József tantermében, ott, ahol a budapesti versenyzők a dolgozatokat is írták.

Először a Versenybizottság elnöke emlékezett meg a nemrég elhunyt Teller Edéről, és bemutatta azokat a feladatokat, amelyek kiváló megoldásával Teller Ede megnyerte az 1925. évi Eötvös-versenyt. A megjelentek egyetértettek abban, hogy azok bizony könnyebb feladatok voltak, mint az ideiek. Igaz, nem is állt rendelkezésre a felkészüléshez annyi jó példatár és szakirodalom, nem voltak felkészítő szakkörök.

Azután az 50 évvel ezelőtti Eötvös-verseny feladatainak bemutatása következett, s egy diákkori fénykép az akkori nyertesről, Zawadowski Alfréd akadémikusról. (Sajnos ő nem tudott eleget tenni a díjkiosztásra szóló meghívásnak, mert külföldön tartózkodott. Talán majd a következőre eljön, amire újra meg fogjuk hívni, mert 1954-ben is díjazott volt az Eötvös-versenyen.) Ami az 1953-as feladatokat illeti, azok se voltak nehezebbek az 1925-ös feladatoknál. Ezen se csodálkozhatunk, akkor még nem is volt fizika rovata az újra indított Középiskolai Matematikai Lapoknak.

A bevezető visszaemlékezések után következett a 2003. évi Eötvös-verseny feladatok és ezek helyes megoldásainak bemutatása. Az első két feladat Radnai Gyula által adott megoldását Gnädig Péter egészítette ki érdekes megjegyzésekkel és egy meglepő analógián alapuló megoldás ismertetésével, míg a harmadik feladat különböző megközelítésú megoldásainak bemutatására a legjobb versenyzőket kérte fel a Versenybizottság elnöke.

A verseny díjait Németh Judit akadémiai levelező tag, az Eötvös Loránd Fizikai Társulat elnöke adta át.
I. díjat és 20 ezer forint értékú könyvutalványt kapott Horváth Márton, a Fazekas Mihály Fővárosi Gyakorló Gimnázium 12. osztályos tanulója, Horváth Gábor tanítványa.
II. díjat kaptak, kiegészítve 15-15 ezer forintos könyvutalványokkal Csóka Endre, az ELTE matematikus hallgatója, aki a debreceni Fazekas Mihály Gimnáziumban érettségizett mint Szegedi Ervin tanítványa és Kómár Péter, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium 11. osztályos tanulója, Dvorák Cecília tanítványa.
III. díjat és 10-10 ezer forintos könyvutalványt nyert Backhausz Ågnes, az ELTE matematikus hallgatója, aki a Fazekas Mihály Fóvárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; Burmeister Dániel, a miskolci Földes Ferenc Gimnázium 12. osztályos tanulója, Zsúdel László tanítványa; Rakyta Péter, a révkomáromi Selye János Gimnázium 12. osztályos tanulója, Szabó Endre tanítványa; Szekeres Balázs, a BMGE mérnök-fizikus hallgatója, aki a szolnoki Verseghy Ferenc Gimnáziumban érettségizett mint Lapu Béla tanítványa; Vigh Máté, a pécsi Babits Mihály Gyakorló Gimnázium 12. osztályos tanulója, Koncz Károly és Kotek László tanítványa és Zsuga Sándor, a kecskeméti Bányai Júlia Gimnázium 12. osztályos tanulója, Késmárki Andrásné tanítványa.

Dicséretet kaptak a következők: Balogh László, a BMGE mérnök-fizikus hallgatója, aki a Fazekas Mihály Fốvárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; Nagy Róbert, a budapesti Apáczai Csere János Gyakorló Gimnázium 11. osztályos tanulója, Pákó Gyula tanítványa; Nádor Csaba, a BMGE mérnök-fizikus hallgatója, aki a budapesti Kassák Lajos Gimnáziumban érettségizett mint Magyari Gyula tanítványa; Ruppert László, a BMGE matematikus hallgatója, aki a pécsi Janus Pannonius Gimnáziumban érettségizett, mint Keresztesné Borsos Sarolta és Kotek László tanítványa.

A dicséretes versenyzők a Nemzeti Tankönyvkiadótól kaptak 8-8 ezer forint értékú könyvutalványt, a díjazottak pedig plusz 2-2 ezer forint értékúeket.

Befejezésül az elnök megköszönte az Oktatási Misztériumnak és a Nemzeti Tankönyvkiadónak a könyvutalványokat, a Typotex Kiadónak és a Műszaki Kiadónak pedig azokat a felajánlott jutalomkönyveket, amelyekből a nyertes versenyzők megjelent tanárai válogathattak.

Legboldogabb versenyzó idén is az I. díjas volt, aki az erkölcsi győzelem mellé megkapta még a Társulat Eötvösverseny érmét is. Immár ketten vannak az országban, akik ilyen éremmel rendelkeznek.
