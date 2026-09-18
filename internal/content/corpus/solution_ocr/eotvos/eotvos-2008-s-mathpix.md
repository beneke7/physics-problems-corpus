---
id: solution-ocr-eotvos-2008-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2008-charged-spheres, eotvos-2008-circus-artist, eotvos-2008-three-bodies-cooling]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Vermes Miklós „Az Eötvös-versenyek feladatai 1959-1988” c. könyvében írja: „A háború utáni versenyek 1949-ben indultak meg újra, és azóta Eötvös-verseny néven rendezik meg minden ősszel." Minthogy azóta is minden évben sikerült megtartani a versenyt, 2008-ban volt a háború utáni 60. Eötvös-verseny.

A Versenybizottságban Károlyházy Frigyes több, mint 40 éve, Radnai Gyula 35 éve, Gnädig Péter 20 éve, Honyek Gyula 5 éve vesz részt. 1987-ig Vermes Miklós, 1988-tól Radnai Gyula az elnöke a Versenybizottságnak.

A 2008. október 17-én délután 3 és este 8 óra között tartott versenyen Budapesten 40, a 14 vidéki városban összesen 59 versenyző adott be dolgozatot. Valamennyien hazai középiskolába jártak vagy járnak, külföldi versenyző nem volt. A Fazekas Mihály Fóvárosi Gyakorló Gimnáziumból 15-en indultak, többen, mint akármelyik vidéki városból. Sajnos két helyszínről, Kecskemétről és Székesfehérvárról egyetlen dolgozat sem érkezett. A viszonylag alacsony részvételi létszám jól tükrözi a fizika tantárgy országosan nehéz helyzetét, ugyanakkor a legjobb tíz dolgozat átlagos színvonala ugyanolyan magas volt, mint az elmúlt években - méltón az Eötvös-verseny hagyományaihoz.

1. feladat. Egy cirkuszi egyensúlyozómữvész egy hosszú függóleges rúdra akar felmászni. A rúd hossza $\ell$, tömege $m$. A produkció kezdetekor a rudat az egyik végéhez erốsített, elhanyagolható súlyú rugalmas kötélen engedik le a cirkusz kupolájától. Amikor a rúd alja éppen a talajhoz ér, a kötél $2 \ell$ hosszú ( 1 . ábra). A kötél nyújtatlan hossza $\ell$, megnyúlása közben jól követi a Hooke-törvényt.

![](../../../figures/solution-ocr/d987359da589f23c033a1f97.jpg)
1. ábra

a) Milyen magasra mászhat fel a rúdra az ugyancsak $m$ tömegü artista anélkül, hogy a rúd függőleges egyensúlyi helyzete instabillá válna? (Az egyszerúség kedvéért tételezzük fel, hogy az artista mérete l-hez képest elhanyagolható.)
b) A rúd fele magasságánál az artista kicsit kibillen és a rúddal együtt oldalirányú lengésekbe kezd. Mekkora a lengés $T$ periódusideje? (A rúd alsó vége nem tud elmozdulni, de a rúd szabadon elfordulhat az alsó végpontja körül.)
(Balogh Péter)
Megoldás. Azoknak a versenyzőknek sikerült jól megoldaniuk ezt a feladatot, akik elég bátrak voltak, és már kezdetben figyelembe vették, hogy elegendő az artista kicsiny kibillenését vizsgálni. Ổk azután nem tévedtek el a tetszőleges szögekre érvényes, bonyolult összefüggések erdejében.

A 2. ábrán a hosszakat, a 3. ábrán az erőket ábrázoltuk az $\alpha$ szöggel kibillent rúd esetében. Ekkor a kötélnek a függőlegessel bezárt szöge $\beta$. Ha figyelembe vesszük, hogy kicsiny szögekről van szó, jó közelítéssel írhatjuk:

$$
\beta \approx \frac { \alpha } { 2 } .
$$

![](../../../figures/solution-ocr/7731f3fe791d3e85b11e26a9.jpg)
2. ábra


![](../../../figures/solution-ocr/cec956170e2f3dfab85f477a.jpg)
3. ábra

A kilendült rudat a rúdra és az artistára ható nehézségi eró tovább akarja lendíteni, a kötél rugalmassága pedig visszahúzza. A nehézségi erők forgatónyomatékának nagysága (a rúd alsó végpontjára):

$$
\begin{aligned}
M _ { 1 } & = m g \frac { \ell } { 2 } \sin \alpha + m g x \sin \alpha \approx \\
& \approx m g \left( \frac { \ell } { 2 } + x \right) \alpha ,
\end{aligned}
$$

a visszahúzó kötélerő forgatónyomatékának nagysága pedig

$$
M _ { 2 } = F \ell \sin ( \alpha + \beta ) \approx F \ell ( \alpha + \beta ) \approx F \ell \frac { 3 } { 2 } \alpha
$$

A stabilitás feltétele:

$$
M _ { 2 } > M _ { 1 } .
$$

Felhasználva, hogy kis szögekről van szó:

$$
F \ell \frac { 3 } { 2 } \alpha > m g \left( \frac { \ell } { 2 } + x \right) \alpha .
$$

Ha eltekintünk a kötél kicsiny, további megnyúlásától, $F$ továbbra is jó közelítéssel $m g$ nagyságú marad. ( $F$ kicsiny megváltozását az ugyancsak kicsiny $\alpha$-val szorozva másodrendűen kicsiny tagot kapunk, amit elhanyagolunk.) Ezt felhasználva a stabilitási feltétel:

$$
\begin{aligned}
m g \ell \frac { 3 } { 2 } \alpha & > m g \left( \frac { \ell } { 2 } + x \right) \alpha , \\
\frac { 3 } { 2 } \ell & > \frac { \ell } { 2 } + x , \\
x & < \ell .
\end{aligned}
$$

Tehát az artista felmászhat egészen a rúd tetejéig, amíg csak $x < \ell$ teljesül. Ezzel válaszoltunk az $a$ ) kérdésre, most foglalkozzunk a $b$ )-vel.

Tekintsük a 4. ábrát, amelyen már figyelembe vettük a $\beta \approx \frac { \alpha } { 2 }$ közelítést, mivel továbbra is kis szögkitérésü lengésekről lehet csak szó, továbbá azt, hogy most $x = \frac { \ell } { 2 }$. A visszatérítő forgatónyomaték:

$$
\begin{aligned}
M & = M _ { 2 } - M _ { 1 } = F \ell \frac { 3 } { 2 } \alpha - 2 m g \frac { \ell } { 2 } \alpha = \ell \alpha \left( \frac { 3 } { 2 } F - m g \right) = \\
& = \frac { 1 } { 2 } m g \ell \cdot \alpha
\end{aligned}
$$


![](../../../figures/solution-ocr/74b1726f68ba3f8bff065542.jpg)
4. ábra

Ez a visszatéró forgatónyomaték egyenesen arányos $\alpha$-val! Ebben az esetben harmonikus rezgés (lengés) jöhet létre, melynek periódusidejét az arányossági tényezőből olvashatjuk ki. A rúdból és az artistából álló rendszer teljes tehetetlenségi nyomatéka (a rúd legalsó pontjára vonatkoztatva):

$$
\Theta = \frac { 1 } { 3 } m \ell ^ { 2 } + m \left( \frac { \ell } { 2 } \right) ^ { 2 } = \frac { 7 } { 12 } m \ell ^ { 2 } .
$$

A harmonikus rezgőmozgásnál, ahol a visszahúzó erő nagysága $F = D x$, fennáll a következő összefüggés:

$$
\omega ^ { 2 } = \frac { D } { m } = \frac { F / x } { m } .
$$

Ezzel analóg módon a lengésekre (harmonikusan változó forgómozgásra)

$$
\omega ^ { 2 } = \frac { M / \alpha } { \Theta } = \frac { \frac { 1 } { 2 } m g \ell } { \frac { 7 } { 12 } m \ell ^ { 2 } } = \frac { 6 } { 7 } \frac { g } { \ell }
$$

érvényes. Ebbő́l a lengés periódusideje:

$$
T = 2 \pi \sqrt { \frac { 7 } { 6 } \frac { \ell } { g } } , \quad \text { mivel } \quad T = \frac { 2 \pi } { \omega } .
$$

2. feladat. Ugyanabból az anyagból készült, állandó fajhójú három test hómérséklete $13 ^ { \circ } \mathrm { C } , 27 ^ { \circ } \mathrm { C }$ és $90 ^ { \circ } \mathrm { C }$. A két melegebb test tömege egyenként fele a 13 °C-os test tömegének. Megfeleló hógépek és energiatároló eszközök közbeiktatásával, külsó energia befektetése nélkül szeretnénk a 13 °C-os testet minél jobban lehüteni.
a) Hogyan kell eljárnunk? (A testek csak hốfelvétel vagy hôleadás során változtathatják meg hốmérsékletüket, halmazállapotváltozás nem történik, hốtágulásuk elhanyagolható.)
b) Mennyire hü̂lhet le az eredetileg 13 °C-os test?
(Radnai Gyula)
Megoldás. a) Hogyan lehet három test közül a leghidegebbet még tovább hüteni? Nincs nála hidegebb test, amivel kapcsolatba hozhatnánk. Adiabatikus munka végzésére sincs lehetőség, a testek most csak hőfelvétel vagy hőleadás során változtathatják meg a hőmérsékletüket.

Semmi kétség: hütőgépre van szükségünk! Viszont minden hütógép múködtetéséhez külső energiaforrás kell, ami most nem áll rendelkezésre.

Illetve mégis van egy kiút: ha a két különböző hőmérsékletú másik test felhasználásával müködtetünk egy hőerógépet! Azt a munkát, amit ebből nyerünk, felhalmozzuk egy energiatárolóban. Mire a két melegebb test között végül megszünik a hőmérsékletkülönbség, az így előállt „középmeleg” test és a hideg test közé már beiktathatunk egy hütőgépet, amely az előbb nyert munka befektetésével biztosan müködik valameddig. Ennek eredményeképpen a hideg test tovább húl. Már csak azt kell kiszámítanunk, mennyire hül le.
b) Először azt számítsuk ki, mennyi munka nyerhető a kezdetben $T _ { 1 } = 90 ^ { \circ } \mathrm { C } = 363 \mathrm {~K}$ és $T _ { 2 } = 27 ^ { \circ } \mathrm { C } = 300 \mathrm {~K}$ hőmérsékletú, $m$ tömegú, $c$ fajhőjú testek között müködtetett hőerőgép segitségével! A legnagyobb munkát akkor nyerjük, ha egyensúlyi folyamatokat végző, úgynevezett reverzibilis Carnot-gépet használunk. $Q _ { 1 }$-gyel, illetve $Q _ { 2 }$-vel jelölve e körfolyamatot végző gép egyetlen ciklusában a $T _ { 1 }$, illetve $T _ { 2 }$ hómérsékletú testektől felvett hốt, $Q _ { 1 } > 0$ és $Q _ { 2 } < 0$, ha $T _ { 1 } > T _ { 2 }$. Ekkor a ciklusonként végzett munka a termodinamika első főtétele szerint:

$$
W = Q _ { 1 } + Q _ { 2 } .
$$


Ugyanakkor a termodinamika második főtétele szerint

$$
\frac { Q _ { 1 } } { T _ { 1 } } + \frac { Q _ { 2 } } { T _ { 2 } } = 0 \quad \left( \eta = \frac { W } { Q _ { 1 } } = \frac { T _ { 1 } - T _ { 2 } } { T _ { 1 } } \right) .
$$

Egyetlen ciklus még alig változtatja meg a hốtartálynak tekinthető testek hőmérsékletét, elég sok ciklus után azonban egyre közelebb kerül egymáshoz a két test hómérséklete.

Hogyan függ össze ez a két hőmérséklet? Helyettesítsük be a második főtételbe

$$
Q _ { 1 } = - c m \Delta T _ { 1 } \quad \text { és } \quad Q _ { 2 } = - c m \Delta T _ { 2 }
$$

értékeit (a negatív előjel azért kell, mert ami a munkavégző közeg szempontjából felvett hő, az a hốtartályok szempontjából leadott hőnek számít):

$$
\frac { - c m \Delta T _ { 1 } } { T _ { 1 } } + \frac { - c m \Delta T _ { 2 } } { T _ { 2 } } = 0 .
$$

Innen kapjuk, hogy

$$
\begin{array} { r }
\frac { \Delta T _ { 1 } } { T _ { 1 } } + \frac { \Delta T _ { 2 } } { T _ { 2 } } = 0 , \\
T _ { 2 } \Delta T _ { 1 } + T _ { 1 } \Delta T _ { 2 } = \Delta \left( T _ { 1 } T _ { 2 } \right) = 0 ,
\end{array}
$$

vagyis

$$
T _ { 1 } T _ { 2 } = \text { állandó. }
$$

Tehát úgy változik a két test abszolút hőmérséklete, hogy a szorzatuk állandó marad! (Ez akkor és csak akkor van így, ha a két test hőkapacitása egyenlő; de ez most teljesül.) Végül is egy olyan közös hőmérséklet áll be, amelyre

$$
T _ { \text {közös } } ^ { 2 } = T _ { 1 } T _ { 2 } ,
$$

vagyis a közös hőmérséklet a kezdeti hőmérsékletek mértani közepe lesz. Esetünkben

$$
T _ { \text {közös } } = \sqrt { 363 \mathrm {~K} \cdot 300 \mathrm {~K} } = 330 \mathrm {~K} .
$$

A melegebb test által leadott hő nagysága (a hőmérséklet kelvin mértékegységének kiírása nélkül):

$$
c m \cdot ( 363 - 330 ) = c m \cdot 33 .
$$

A hidegebb test által felvett hő nagysága:

$$
c m \cdot ( 330 - 300 ) = c m \cdot 30 .
$$

Így az összesen nyert munka: $c m \cdot 3$, ezt használhatjuk fel majd a hütőgép meghajtására.
Most már foglalkozhatunk a hútógéppel, aminek az alsó hốtartálya lesz a $c$ fajhőjǘ, $2 m$ tömegü, $T _ { 3 } = 13 ^ { \circ } \mathrm { C } = 286 \mathrm {~K}$ hőmérsékletú test. A felső hốtartály is $c$ fajhőjúi, és ugyancsak $2 m$ tömegü, az előző folyamat végén nyert 330 K hőmérsékletú test. Ismét két azonos hőkapacitású testről van szó, vagyis most is állandó marad a két (abszolút) hőmérséklet szorzata.

Jelöljük $T$-vel az a kiszámítandó hőmérsékletet, amire a hideg test lehúl, és $T ^ { \star }$-gal azt a hőmérsékletet, amire a két másik test felmelegszik. Ekkor tehát

$$
T \cdot T ^ { \star } = 286 \cdot 330 ,
$$

és az energiaegyenlet:

$$
c \cdot 2 m \left( T ^ { \star } - 330 \right) - c \cdot 2 m ( 286 - T ) = c m \cdot 3 .
$$

A fenti két egyenlet már meghatározza a keresett $T$ és $T ^ { \star }$ értékeket:

$$
T = 278 \mathrm {~K} = 5 { } ^ { \circ } \mathrm { C } , \quad T ^ { \star } = 339,5 \mathrm {~K} = 66,5 ^ { \circ } \mathrm { C } .
$$

Vagyis a kezdetben 13 °C-os test végül is 5 °C-osra hüthető le. Ezt kellett kiszámítanunk.
3. feladat. Egy fizikaszakkörön valaki demonstrálni szeretné, hogy ellentétes irányú elektromos térerősségvektorok leronthatják egymást. Elképzelése a következố. Szigetelố lábakon két egyforma fémgömböt állít egymás mellé és pontosan ugyanakkora potenciálra tölti fel óket. Ezután a kettejük közé középre belógatott próbatöltésre nem fog elektromos erö hatni.

A gyakorlati kivitelezéshez a kísérletezó egy néhány száz V feszültségü telep egyik sarkát „leföldeli”, vagyis az asztallapra tett nagy fémtálcához csatlakoztatja - ezt tekinthetjük zérus potenciálú helynek -, a másik pólushoz csatlakozó banándugóval pedig először a bal oldali, utána a jobb oldali gömböt, majd végül a szigetelő szálon közéjük lógatott alufólia csíkot érinti meg (5. ábra). Meglepốdve tapasztalja, hogy az alufólia igenis kitér a függőleges irányból, elmozdul az egyik gömb felé.


![](../../../figures/solution-ocr/c6e1295c51070041fb253831.jpg)
5. ábra

Mi lehet a kudarc magyarázata? (A levegó száraz, a lábak jól szigetelnek, a gömbök sokáig megtartják a rájuk vitt töltést.)

Melyik gömb felé tér ki az alufólia?
Hogyan lehetne a kudarcot elkerülni?
(Károlyházy Frigyes)
Megoldás. A feladat az 1992. évi Eötvös-verseny 3. problémájára emlékeztet, amelynek megoldása megtalálható „Az Eötvös-versenyek feladatai II. 1989-1997” c. Typotex kiadványban, és ma már az interneten is olvasható a Kempelen Farkas Digitális Tankönyvtárban. Két versenyző, akik később dicséretet kaptak, rá is talált az ott közölt megoldásra, melynek nyomán sikerült is megoldaniuk ezt a feladatot. Az Eötvös-versenyen bármely segédeszköz (könyvek, jegyzetek, zsebszámológép) használható (mobiltelefon és laptop kivételével), ezért megoldásukat természetesen elfogadta a Versenybizottság. Most viszont szándékosan más megoldást közlünk, olyat, amilyet az idei verseny győztesei adtak erre a feladatra.

Tekintsük először azt az esetet, amikor még csak a bal oldali gömböt töltöttük fel a telep feszültségére. Ekkor ez a gömb felvett valamennyi töltést. A jobb oldali gömb, ami ugyan töltetlen, most egy elektromos erőtérbe került, ennek hatására benne töltésszétválás történt és már nem zérus a feszültsége, hiába zérus a rajta lévő össztöltés.

Ezek után érintjük meg a jobb oldali gömböt a telep előbbi - pozitív - sarkából jövő vezetékkel. Ennek hatására ez a gömb is a telep feszültségére töltődik fel, viszont ehhez már kevesebb töltésnek kell felmennie rá, mint amennyi töltés a másik gömbre került! Söt, ha a második gömb feltöltése után megmérjük az első (a bal oldali) gömb feszültségét, az nagyobb lesz, mint a telep feszültsége, hiszen most már ez a gömb is erőtérbe, a jobb oldali gömb erőterébe került!

A helyzet annyira meglepó, hogy eredményhirdetéskor (technikai okokból egy 3000 V-os feszültségforrást használva) kísérletileg is bemutattuk. Amikor a bal oldali gömböt feltöltöttük 3000 V-ra, a jobb oldali gömbre kapcsolt elektrosztatikus voltmérő 800 V-ot mutatott. Amikor pedig a jobb oldali gömböt is feltöltöttük 3000 V-ra, a bal oldali gömb feszültsége 3800 V-ra nótt!

Mindenképpen több töltés került tehát a bal oldali gömbre, mint a jobb oldalira, ezért a közéjük középre lógatott és feltöltött alufólia csíkra a bal oldali gömb nagyobb taszítóerőt gyakorol, mint a másik gömb. A fóliacsík tehát jobbra fog kilendülni!

Az egyik győztes versenyző (Almási Gábor) még azt is megjegyezte, hogy ha túl közel van egymáshoz a két gömb, akkor a közéjük lógatott fémfólián már töltetlen állapotban is a két gömb potenciálja közötti, tehát a telepfeszültségnél nagyobb potenciál alakulhat ki. Ezért, amikor hozzáérünk a telepbő́l jövő vezetékkel, lehet, hogy leveszünk róla töltést, így áll be a fólia a telep feszültségére. Ebben az esetben azonban negatív töltése lesz, s a bal oldali gömb jobban fogja vonzani, mint a jobb oldali, vagyis ilyenkor a fólia balra lendül ki.

Hogyan lehetne elkerülni a kudarcot? Több mód is van rá. A legbiztosabb eljárás az, hogy egyszerre töltjük fel a két gömböt, de az is elég, ha kellő távolságra, viszonylag messze helyezzük őket egymástól. Igaz, ebben az esetben nem olyan látványos az a kísérlet, hogy közöttük középen nem hat erő a belógatott fóliára.

## A verseny eredménye

Két versenyzőnek sikerült mindhárom feladatot hibátlanul megoldania, ezért két első díjat adott ki a Versenybizottság.
I. díj: Almási Gábor, az ELTE fizika BSc szakos hallgatója, aki a pécsi Leóvey Klára Gimnáziumban érettségizett Simon Péter és Kotek László tanítványaként; és Szolnoki Lénárd, a BME fizika BSc szakos hallgatója, aki a Debreceni Református Kollégium Dóczy Gimnáziumában érettségizett Tófalusi Péter tanítványaként.
II. díj: Balogh Máté, a Fazekas Mihály Fővárosi Gyakorló Gimnázium 12. évf. tanulója, Horváth Gábor tanítványa; és Lovas Lia Izabella, a pécsi Leốvey Klára Gimnázium 12. évf. tanulója, Simon Péter tanítványa.
III. díj: Farkas Márton, a Fazekas Mihály Fővárosi Gyakorló Gimnázium 12. évf. tanulója, Horváth Gábor tanítványa.

Dicséretet kaptak: Aczél Gergely, a Pápai Református Kollégium Gimnáziumának 12. évf. tanulója, Somosi István tanítványa; Iván Dávid, a fonyódi Mátyás Király Gimnázium 12. évf. tanulója, Németh László tanítványa; Karsa Anita, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium 12. évf. tanulója, Horváth Gábor tanítványa; Szilágyi Zsombor, az ELTE fizika BSc szakos hallgatója, aki a budapesti Karinthy Frigyes Gimnáziumban érettségizett Szilágyi


László tanítványaként; és Wang Daqian, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium 11. évf. tanulója, Horváth Gábor tanítványa.
2008. november 21-én zajlott le az ünnepélyes eredményhirdetés. Először a Versenybizottság elnöke ismertette az 50, valamint a 25 évvel korábbi Eötvös-verseny feladatait, majd bemutatta az akkori díjazottak közül megjelent egykori versenyzőket.

Kovács Béla villamosmérnök, informatikus, aki 1958-ban érettségizett Sárospatakon, ma is gyakori látogatója egykori iskolájának. Ốt is, mint az utána megszólaló, 25 évvel fiatalabb nyerteseket ez a verseny indította el életpályájukon. Árkossy Ottó orvos, Fodor Gyula és Frei Zsolt fizikusok lettek. Erdős László, aki Árkossy Ottóval holtversenyben lett első, matematikus lett. Jelenleg Münchenben dolgozik, onnan küldött üdvözletét Honyek Gyula olvasta fel.

A 25 évvel ezelőtt díjazott versenyzők mind a KöMaL sikeres megoldói voltak, az akkori fotóikból készített tabló nagy tetszést aratott. Meghívást kaptak az ünnepélyes eredményhirdetésre a díjazott és dicséretet kapott diákok tanárai, az Eötvös Loránd Fizikai Társulat minden tisztségviselője, valamint az Eötvös-versenyek nyertesei. Sokan eljöttek, néhányan levelet írtak, melyben üdvözölték az idei nyerteseket.

A díjakat és okleveleket Sólyom Jenő́, az Eötvös Loránd Fizikai Társulat elnöke adta át. A két első díjas megkapta a Társulat Eötvös-verseny érmét és egyéves előfizetést a Fizikai Szemlére. Ezen kívül az első díjasok 20-20 ezer Ft, a második díjasok 15-15 ezer Ft, a harmadik díjas versenyző 10 ezer Ft, a dicséretes versenyzők pedig 5-5 ezer Ft pénzjutalomban részesültek, és mind a tízen megkapták Staar Gyula „Fizikusok az aranykorból” c. könyvét.

A nyertes diákok megjelent tanárai a Vince és a Typotex kiadók által felajánlott könyvekből válogathattak.
A díjkiosztás után a Versenybizottság elnöke értékelte az idei versenyt, majd állófogadással egybekötött beszélgetésre invitálta a résztvevóket, megköszönve a Matfund Alapítvány, az Indotek Zrt., a Ramasoft Zrt. és Gutai László (USA) anyagi támogatását, amely nélkül nem lehetett volna megrendezni ezt az ünnepélyes eredményhirdetést és meleg kézszorításon kívül nem lehetett volna mással honorálni a versenyzők és tanáraik szép teljesítményét.

Ehhez csatlakozik a Versenybizottság is. Bízzunk a lendület megmaradásában . . .
