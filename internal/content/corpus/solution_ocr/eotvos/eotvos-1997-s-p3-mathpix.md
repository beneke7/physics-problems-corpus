---
id: solution-ocr-eotvos-1997-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1997_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1997-electron-magnetic-deflection]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Egy vákuumkamrában lévó hosszú, egyenes, nagyon jó vezetóképességü huzalban 10 A erốsségữ áram folyik. A huzaltól $r _ { 1 }$ távolságban lévó pontból $v _ { 0 }$ kezdósebességü elektronok indulnak el a huzal felé, rá merôlegesen, de ezek az elektronok csak $r _ { 0 } / 2$ távolságra képesek megközelíteni a huzalt. Mennyi lehet $v _ { 0 }$ értéke? (A földi mágneses tér hatásától eltekinthetünk.)
(Varga István)
I. megoldás. Ha eddig nem jutott volna eszünkbe, ez az utolsó, zárójelbe tett mondat figyelmeztet, hogy az áram mágneses terének hatását kell figyelembe vennünk. (Az áramvezetőnek van elektromos tere is, a nagyon jó vezetőképességü huzalban azonban a térerősség a huzal belsejében és környezetében is kicsi, ennek hatása most elhanyagolható.)

A mozgó töltésre a mágneses tér mindig olyan erốt fejt ki, ami a sebességre merốleges. Ez el tudja téríteni, el tudja kanyarítani az elektront, de nem tudja megváltoztatni a sebesség nagyságát. Helyről helyre változó mágneses térben szeszélyesen kanyargó pályát írhat le az elektron, de közben sebességének nagysága végig ugyanakkora marad! A makroszkópikus testek mozgásait vizsgálva nemigen találunk hasonlót. Még leginkább egy enyhén lejtő, szeszélyesen kanyargó folyó mozgása hasonlít az inhomogén mágneses térben kanyargó elektronsugárra, de az elektronsugár térbeli, háromdimenziós alakja jóval bonyolultabb lehet, mint a síkságon kanyargó folyóé.

A feladatban megadott esetben az elektronok pályája szerencsére csak két dimenziós (síkgörbe) lesz, mivel az elektron végig benne marad a kezdőponton és az áramvezetőn átfektethető síkban. Ennek az az oka, hogy kezdetben az elektron ebben a síkban indul el $v _ { 0 }$ kezdősebességgel, a rá ható erő pedig végig merőleges lesz mind a sebességre, mind az előbbi síkra meróleges mágneses indukció vektorra. Igaz, a B vektor nagysága változik, egyre nagyobb lesz, ahogy az elektron közelebb és közelebb kerül az áramvezetőhöz, de ez csak azt eredményezi, hogy az elektron egyre erősebben kanyarodik.

Az, hogy az $r _ { 0 }$ távolságból induló elektron $r _ { 0 } / 2$ távolságra tudja megközelíteni a huzalt, azt jelenti, hogy $r _ { 0 } / 2$ távolságban a pályagörbe már úgy elkanyarodott, hogy az elektron az áramvezetővel párhuzamosan mozog. Azután kanyarodik tovább, és már távolodik is az áramvezetőtől.

Az elektron a 4. ábrán látható $P$ pontból indul az $I$ árammal átjárt egyenes vezetó felé, rá merőlegesen $v _ { 0 }$ kezdősebességgel.

A helyről helyre változó B indukcióvektorú mágneses térben $\mathbf { v }$ sebességgel mozgó $Q$ töltésú elektronra ható mágneses
Lorentz-erő: $\mathbf { F } = Q ( \mathbf { v } \times \mathbf { B } )$. Tekintsük ennek $x$ komponensét:

$$
F _ { x } = Q v _ { y } B , m \frac { \Delta v _ { x } } { \Delta t } = Q \frac { \Delta y } { \Delta t } B , m \Delta v _ { x } = Q \Delta y B .
$$

Az $I$ árammal átjárt egyenes vezető mágneses tere, tőle $r$ távolságban:

$$
B = \frac { \mu _ { 0 } } { 2 \pi } \frac { I } { r } .
$$

Helyettesítsük be ezt a kifejezést a fenti mozgásegyenletbe, és használjuk fel, hogy a választott koordináta-rendszerben $\Delta y = - \Delta r$ :

$$
m \Delta v _ { x } = Q \frac { \mu _ { 0 } } { 2 \pi } I \frac { - \Delta r } { r } .
$$

Ez az összefüggés az elektron pályájának bármely kis $\Delta s$ ívhosszúságú darabjára fennáll. Osszuk fel gondolatban a pálya $P R$ ívét ilyen kis $\Delta s$ darabokra! Képzeljük el, hogy mindegyikre felírunk egy ilyen összefüggést, azután a kapott egyenleteket adjuk össze! Ezt így jelölhetjük:

$$
\sum _ { P } ^ { R } m \Delta v _ { x } = \sum _ { P } ^ { R } Q \frac { \mu _ { 0 } } { 2 \pi } I \frac { - \Delta r } { r } .
$$

Az állandó tényezőket kiemelve kapjuk:

$$
m \sum _ { P } ^ { R } \Delta v _ { x } = Q \frac { \mu _ { 0 } } { 2 \pi } I \sum _ { P } ^ { R } \frac { - \Delta r } { r } .
$$

A bal oldalon álló összeg:

$$
\sum _ { P } ^ { R } \Delta v _ { x } = v _ { 0 } ,
$$

mivel a $P$ kezdőpontban a sebesség $x$ komponense zérus, az $R$ pontban pedig $v _ { 0 }$. A jobb oldalon álló összeg:

$$
\sum _ { P } ^ { R } \frac { - \Delta r } { r } = \sum _ { r _ { 0 } } ^ { r _ { 0 } / 2 } \frac { - \Delta r } { r } = \sum _ { r _ { 0 } / 2 } ^ { r } \frac { \Delta r } { r } .
$$


Ennek értékét becsléssel határozzuk meg. A 5. ábrán bevonalkázott területet kell meghatároznunk. Ha ezt trapézzal közelítjük, a trapéz területe:

$$
T = \frac { r _ { 0 } } { 2 } \frac { \frac { 1 } { r _ { 0 } } + \frac { 2 } { r _ { 0 } } } { 2 } = \frac { 3 } { 4 } = 0,75 .
$$

A görbe alatti terület azonban kisebb, mint a trapéz területe, vegyük közelítőleg 0,7-nek. Így végül az alábbi egyenlethez jutottunk:

$$
m v _ { 0 } \approx Q \frac { \mu _ { 0 } } { 2 \pi } I \cdot 0,7 .
$$

Ebből fejezzük ki $v _ { 0 }$-t, majd helyettesítsük be az ismert, illetve a megadott értékeket:

$$
v _ { 0 } \approx \frac { Q } { m } \frac { \mu _ { 0 } } { 2 \pi } I \cdot 0,7 , v _ { 0 } \approx 1,76 \cdot 10 ^ { 11 } \frac { \mathrm { C } } { \mathrm {~kg} } \cdot 2 \cdot 10 ^ { - 7 } \frac { \mathrm { Vs } } { \mathrm { Am } } \cdot 10 \mathrm {~A} \cdot 0,7 , v _ { 0 } \approx 2,46 \cdot 10 ^ { 5 } \frac { \mathrm {~m} } { \mathrm {~s} } .
$$

Az elektronokat tehát mintegy 250 km/s sebességgel kell kilőni $r _ { 0 }$ távolságból, hogy $r _ { 0 } / 2$ távolságra megközelítsék a 10 A-es árammal átjárt egyenes vezetőt.

Megjegyzések. 1. Nagy vagy kicsi a kapott sebesség? Makroszkópikus, földi testek sebességéhez képest nagy: az első kozmikus sebesség is csak mintegy 8 km/s, s a Naprendszer elhagyásához is elég egy 20 km/s-nál kisebb sebesség. A fény sebességéhez képest viszont kicsi, hiszen az 300 ezer km/s. Ezért is lehetett a relativisztikus tömegnövekedéstől eltekinteni a feladat megoldása során. Még a katódsugárcsóben (TV, oszcilloszkóp, elektronmikroszkóp) futó elektronok sebességéhez képest is kis sebességet kaptunk, hiszen már kb. $0,2 \mathrm {~V}$ gyorsító feszültség hatására elérik az elektronok ezt a sebességet.
2. A feladat megoldása során elegendő volt a Lorentz-erő $x$ komponensét megvizsgálni. Mire jutnánk az $y$ komponens vizsgálatával? Nem sokra, mivel ez a sebesség $x$ komponensétől függ, s az $x$ koordinátát csak közvetve, a pálya egyenletét ismerve lehet összekapcsolni $r$-rel, amitől B függ. A pálya görbületét azonban megkaphatjuk a Lorentz-erő nagyságából.

$$
m \frac { v _ { 0 } ^ { 2 } } { \varrho } = Q v _ { 0 } B , \frac { 1 } { \varrho } = \frac { Q } { m } \frac { B } { v _ { 0 } } = \frac { Q } { m } \frac { 1 } { v _ { 0 } } \frac { \mu _ { 0 } } { 2 \pi } \frac { I } { r } .
$$

3. A versenyzők közül jó néhányan tudták az $\frac { 1 } { r }$ függvényt integrálni, ők pontosan is meghatározták a görbe alatti területet:

$$
\int _ { r _ { 0 } } ^ { \frac { r _ { 0 } } { 2 } } \frac { - d r } { r } = [ \ln r ] _ { \frac { r _ { 0 } } { 2 } } ^ { r _ { 0 } } = \ln 2 \approx 0,6931 .
$$

Nem is olyan rossz a 0,7-es becslés!
4. Az elektron pályagörbéjének több érdekes tulajdonságát lehet még felfedezni. Az egyik ilyen érdekesség az, hogy az $r _ { 0 }$-ról így kilőtt elektron nemcsak hogy $r _ { 0 } / 2$-re tudja megközelíteni az áramvezetőt, de nem is tud $2 r _ { 0 }$-nál messzebb eltávolodni tőle. Általában, ha $r _ { 0 } / n$-re tudja megközelíteni, akkor $n r _ { 0 }$-ra tud eltávolodni tőle. Másképp fogalmazva: a legkisebb és a legnagyobb távolság mértani közepe az a távolság, ahol éppen az áramvezetőre merólegesen halad. A további érdekességek megállapítását az olvasóra bízzuk.
II. megoldás. (Kovács Gábor dolgozata alapján.) Tekintsünk egy „álló” koordináta-rendszert, amelyben csak B mágneses indukció mérhető (elektromos mező nem), és egy másik, hozzá képest állandó $\mathbf { v } _ { 0 }$ sebességgel mozgó „vesszős" rendszert! Írjuk fel mindkét rendszerben a $Q$ töltésú részecskére ható Lorentz-erőt:

$$
\mathbf { F } = Q ( \mathbf { v } \times \mathbf { B } ) = Q \left( \mathbf { v } ^ { \prime } + \mathbf { v } _ { 0 } \right) \times \mathbf { B } = \mathbf { F } ^ { \prime } = Q \left( \mathbf { v } ^ { \prime } \times \mathbf { B } ^ { \prime } \right) + Q \mathbf { E } ^ { \prime } .
$$

Látható, hogy a mozgó rendszerben „megjelent" egy $\mathbf { v } _ { 0 } \times \mathbf { B }$ nagyságú elektromos mezó is (és az is leolvasható, hogy $\mathbf { B } ^ { \prime } = \mathbf { B }$ ).

Üljünk bele abba a koordináta-rendszerbe, amely az áramvezetővel párhuzamosan $v _ { 0 }$ sebességgel mozog. Innen nézve a vezetốtớl $r$ távolságra $E ( r ) = v _ { 0 } B ( r ) = \frac { \mu _ { 0 } v _ { 0 } I } { 2 \pi } \cdot \frac { 1 } { r }$ nagyságú elektromos mező mérhető (iránya a vezetốre merőleges), ami az $U ( r ) = - \frac { \mu _ { 0 } v _ { 0 } I } { 2 \pi } \ln r$ elektromos potenciálból is származtatható (annak negatív deriváltja).

Az elektron kezdősebessége ( $r _ { 0 }$ távol a vezetőtől) a vesszős rendszerben $\sqrt { 2 } v _ { 0 }$, amikor pedig $r _ { 0 } / 2$-nyire megközelíti az áramvezetőt, akkor éppen megáll. Alkalmazzuk a munkatételt a szóban forgó mozgásra:

$$
\frac { 1 } { 2 } m \left( \sqrt { 2 } v _ { 0 } \right) ^ { 2 } - \frac { \mu _ { 0 } v _ { 0 } I Q } { 2 \pi } \ln r _ { 0 } = - \frac { \mu _ { 0 } v _ { 0 } I Q } { 2 \pi } \ln \frac { r _ { 0 } } { 2 } ,
$$

ahonnan $v _ { 0 }$-ra éppen az I. megoldásban megadott számérték adódik.


Összesen 216 versenyző adott be dolgozatot; 213 magyar, 2 román és 1 ukrán állampolgárságú versenyző. Budapesten érettségizett az összes magyarországi versenyzők 12 \%-a, vidéken érettségizett ugyancsak 12 \%. Vidéki utolsó éves középiskolás volt 30 \%, budapesti utolsó éves középiskolás 14 \%. A még fiatalabb versenyzők közül Budapesten járt középiskolába az összes hazai versenyzők 12 \%-a, vidéken pedig 20 \%.

Idén a feladatok kissé nehéznek bizonyultak: nem volt olyan versenyző, aki mindhárom feladatot jól megoldotta volna. Ezért a Versenybizottság úgy döntött, hogy az első díjat nem adja ki, és az alábbi határozatot hozta:

Második díjat nyert egyenló helyezésben a következő két versenyző:
Kovács Gábor, az ELTE fizikus hallgatója, aki a soproni Berzsenyi Dániel Evangélikus Líceumban érettségizett mint Lang Jánosné tanítványa;

Várkonyi Péter László, a BME építészmérnök hallgatója, aki a Fazekas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa.

Harmadik díjat nyert egyenlő helyezésben a következő három versenyző:
Egri Gyõzõ, az ELTE fizikus hallgatója, aki a budapesti Alternatív Közgazdasági Gimnáziumban érettségizett mint Korom Pál tanítványa;

Gyurkó Martin, a zalaegerszegi Ságvári Endre Gimnázium 12. évfolyamának tanulója, Rádulyné Horváth Katalin tanítványa;

Koncz Imre, a BME múszaki menedzser szakos hallgatója, aki a Fazekas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa.

Az Eötvös Loránd Fizikai Társulat a második díjas versenyzőket 8-8 ezer, a harmadik díjas versenyzőket 5-5 ezer forint pénzjutalomban részesítette.

A Versenybizottság dicséretben részesítette a 6-15. helyezést elért versenyzőket.
A verseny 6-10. helyezettje egyenlő helyezésben:
Bérczi Gergely, a szegedi Ságvári Endre Gyakorló Gimnázium 12. évfolyamának tanulója, Tóth Károly tanítványa;

Boja Bence, a budapesti Árpád Gimnázium 12. évfolyamának tanulója, Schuszter Ferenc tanítványa
Jakabfy Tamás, az ELTE alkalmazott matematikus hallgatója, aki a zalaegerszegi Zrínyi Miklós Gimnáziumban érettségizett mint Vadvári Tibor tanítványa;

Karádi Richárd, a győri Révai Miklós Gimnázium 12. évfolyamának tanulója, Nagy Attila és Somogyi Sándor tanítványa;

Mátrai Tamás, az ELTE matematikus hallgatója, aki a Fazekas Mihály Fóvárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa.

A verseny 11-15. helyezettje egyenlő helyezésben:
Felföldi Zsolt, a Fazekas Mihály Fővárosi Gyakorló Gimnázium 11. évfolyamának tanulója, Horváth Gábor és Dvorák Cecília tanítványa;

Kormos Márton, a debreceni KLTE Gyakorló Gimnáziumának 12. évfolyamú tanulója, Farkas József és Szegedi Ervin tanítványa;

Péterfalvi Csaba, a szekszárdi Garay János Gimnázium 11. évfolyamának tanulója, Bayer József tanítványa;
Pogány Ádám, a Fazekas Mihály Fốvárosi Gyakorló Gimnázium 12. évfolyamú tanulója, Horváth Gábor tanítványa;

Sarlós Ferenc, a bajai III. Béla Gimnázium 12. évfolyamú tanulója, Polgár László tanítványa.
A díjakat, jutalmakat és okleveleket az Eötvös Fizikai Társulat elnöke adta át.
A Nemzeti Tankönyvkiadó több ezer forint összértékü könyvutalvánnyal, a Müszaki-Calibra kiadó pedig értékes könyvcsomagokkal egészítette ki az elsó 15 helyezett versenyző társulati elismerését. Külön meglepetésként - most már nem először - a fenti két kiadó, kiegészülve idén a TypoTEX és a SCOLAR kiadókkal, ajándék könyvekkel lepte meg a nyertes versenyzők tanárait.

Végül az ünnepi eredményhirdetés utolsó aktusaként diákok és tanáraik a megjelent volt Eötvös verseny nyertesekkel találkoztak, akiket a Versenybizottság elnöke mutatott be a hallgatóságnak.

Radnai Gyula


![](../../../figures/solution-ocr/97213b2c041ac5de3a9b978d.jpg)
![](../../../figures/solution-ocr/2e0d57dbb9da9bd22289b8be.jpg)
![](../../../figures/solution-ocr/c49ff5fd66cf0fbbd5191c5e.jpg)
![](../../../figures/solution-ocr/eb13509c9544ff3face78962.jpg)
![](../../../figures/solution-ocr/95a023af2b27e0b23650d69b.jpg)
