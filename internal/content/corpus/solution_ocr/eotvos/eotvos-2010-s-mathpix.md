---
id: solution-ocr-eotvos-2010-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2010-bicycle-chain, eotvos-2010-charged-disks, eotvos-2010-gas-mixture]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
2010. október 15-én délután 3 órai kezdettel rendezte meg az Eötvös Loránd Fizikai Társulat a háború utáni 62. Eötvös-versenyét. Budapesten 30 , vidéken 52 dolgozatot adtak be a versenyzők, akik között $1 - 1$ román, szlovák, illetve ukrán állampolgár is volt. Utóbbiak az ELTE, illetve a BME elsóéves hallgatóiként indultak a versenyen.

A feladatokat az Eötvös-versenybizottság túzte ki (tagjai Honyek Gyula, Károlyházy Frigyes, Vigh Máté, elnök Radnai Gyula) és a versenyzők dolgozatait is ugyanez a bizottság értékelte. A három kitúzött feladat megoldására hagyományosan 300 perc állt rendelkezésre.

Ismertetjük a feladatokat és azok megoldását.

1. feladat. Egy fogaskerék tengelyét vízszintesen rögzítjük és ráhelyezünk egy kerékpárláncot az $1 / a$ ) ábrán látható módon, majd a fogaskereket a tengelye körül óvatosan forgatni kezdjük. Milyen alakot vesz fel a lánc, amikor a fogaskerék már állandó szögsebességgel sebesen forog?

![](../../../figures/solution-ocr/d528a28926d07bb617758f47.jpg)
1. ábra

Marci szerint a lánc alakja és helyzete ugyanolyan marad, mint volt, csupán annyi a változás, hogy a láncszemek körbeszáguldanak az eredeti alak mentén. Karcsi ezt nem hiszi, szerinte a lánc a forgás következtében kikerekedik, és közelítóleg kör alakú lesz a $1 / b$ ) ábra szerint. Marcinak vagy Karcsinak van igaza? (Bizonyítsuk be az egyik állítást, vagy legalább mutassuk meg, hogy a másik állítás nem lehet igaz!)
(Vigh Máté)

Megoldás (Vigh Máté): Tekintsük az álló láncot földi nehézségi erőtérben! Ebben az esetben a (minden pontban érintő irányú) feszítőerő a lánc mentén folyamatosan változik, éppen oly módon, hogy minden láncszem súlyát a szomszédai által kifejtett két erő eredője kiegyensúlyozza. Jelöljük ezt a feszítőerőt a lánc egy tetszőleges (mondjuk legfelső́) pontjától mért $s$ ívhossz függvényében $F _ { 1 } ( s )$-sel! (Természetesen $F _ { 1 } ( 0 ) = F _ { 1 } ( \ell )$, ahol $\ell$ a lánc teljes hossza.)

Tekintsünk most egy ugyanilyen alakú láncot, amit a súlytalanság állapotában (mondjuk egy ürállomáson) megpörgetünk úgy, hogy minden láncszem azonos, érintó irányú $v$ sebességgel mozogjon! A lánc kis darabkájára felírva a dinamika alapegyenletét könnyen belátható, hogy ekkor a láncot feszítő $F _ { 2 } ( s )$ eró nagysága független a lánc adott pontbeli görbületi sugarától, sőt, még az ívhossztól is, és nagysága $F _ { 2 } = \varrho v ^ { 2 }$, ahol $\varrho$ a lánc egységnyi hosszú darabjának tömege. Akármilyen alakú is tehát a lánc, ez a (térben és időben állandó) feszítőerő minden egyes láncszemre éppen a centripetális gyorsulásához szükséges (a lánc mentén a görbületi viszonyoktól függően helyről helyre változó) eredő erőt képes biztosítani.

Végül tekintsük a feladatunkban szereplő, a földi nehézségi erőtérben mozgó, az eredetivel azonos alakú láncot! Ha a feszítőeró a lánc mentén $F _ { 1 } ( s ) + F _ { 2 }$ módon változik, akkor minden láncszemre teljesül a Newton-féle mozgásegyenlet, hiszen az $F _ { 1 } ( s )$-ből adódó eredő eró és a gravitációs erő összege nulla, az $F _ { 2 }$-ből jövő járulék pedig a tömeg és a centripetális gyorsulás szorzatát adja.

Ezzel beláttuk, hogy az eredeti láncgörbe lehet a mozgó lánc alakja is, tehát Marcinak van igaza. (Az érvelésből az is látszik, hogy egy kikerekedett láncalaknál nem teljesülhetnek a Newton-egyenletek az egyes láncszemekre, ezért a mozgó lánc nem lehet kör alakú.)

Megjegyzések: 1. A fenti érvelést szemléltethetjük a következő gondolatkísérlettel: A fogaskerék álló állapotában varázsütésre „kapcsoljuk ki” a földi nehézségi erőteret! A lánc alakja ettől nem változik meg, csupán nem nyomja tovább a fogaskereket. Ahogy azt korábban beláttuk, ha ezután minden láncszemnek ugyanakkora, érintó irányú sebességet adunk, a lánc továbbra is megőrzi eredeti alakját. Végül kapcsoljuk vissza a földi gravitációt, amely (mint tudjuk) a megőrzött alakot már nem szeretné deformálni, tehát a mozgó lánc alakja a stacionárius helyzetben ugyanaz lesz, mint a kiindulási, nyugalmi állapotban.
2. Belátható, hogy ha láncszemek kiterjedését is figyelembe vesszük, arra az eredményre jutunk, hogy a fogaskerék egyre növekvő fordulatszáma esetén a lánc alakja fokozatosan eltér az eredeti alaktól, valóban elkezd kikerekedni. Életszerú adatokkal számolva azonban a lánc kikerekedéséhez szükséges fordulatszámra irreálisan nagy érték adódik, így valószínú, hogy a kerékpárlánc előbb szakad el, minthogy ez az effektus észrevehetóvé válna.
3. Ahogy azt az egyik versenyző a dolgozatában leírta, a megoldáshoz felsőbb matematikai ismeretekkel és a klasszikus mechanika egyik alappillérének, a Hamilton-féle legkisebb hatás elvének a stacionárius mozgásokra való alkalmazásával is eljuthatunk. Kiemelendő azonban, hogy ilyen, a középiskolai ismereteken messze túlmenő számítások nélkül is el lehetett jutni a helyes megoldáshoz.


2. feladat. Egy dugattyúval ellátott tartályban $T = 77,4 \mathrm {~K}$ hốmérsékletữ nitrogén- és oxigéngáz keveréke található. A hómérsékletet állandó értéken tartva a gázelegyet lassan összenyomjuk. A keverék nyomása a 2 . ábrán látható módon változik a térfogat függvényében, ahol $V _ { 1 } = 15 \mathrm { dm } ^ { 3 }$ és $p _ { 1 } = 56,3 \mathrm { kPa }$.

![](../../../figures/solution-ocr/3e42aa39213f6a52fabcbfc9.jpg)
2. ábra

a) Milyen fizikai jelenségek rejlenek az izotermán látható furcsa töréspontok mögött?
b) Mennyi nitrogén és mennyi oxigén van a tartályban?
(Honyek Gyula)

Megoldás. a) $\mathrm { A } \left( p _ { 2 } , V _ { 2 } \right)$ állapotnál az izoterma törése ismerős: azt jelzi, hogy a gáz cseppfolyósodni kezd, ezért nem nó tovább a nyomása. De mi történt a $\left( p _ { 1 } , V _ { 1 } \right)$ állapotban? Miért változott meg itt az izoterma meredeksége? Figyeljünk fel arra, hogy a tartályban kétféle gáz keveréke található. Elképzelhető, hogy ezek nem egyszerre kezdenek cseppfolyósodni, hanem itt, a $\left( p _ { 1 } , V _ { 1 } \right)$ állapotban csak az egyik komponens kezd lecsapódni, a másik pedig még gáz halmazállapotú marad!

Vagyis összenyomás közben $V _ { 1 }$ és $V _ { 2 }$ között az egyik komponens nyomása már nem változik, a másiké pedig tovább nő. Ez a második komponens akkor kezd lecsapódni, amikor a tartály térfogata már $V _ { 2 }$-re csökkent. Ez a válasz az $a )$ kérdésre. Hogy melyik gáz kezd hamarabb cseppfolyósodni, arra még csak tippelhetünk. Tételezzük fel, hogy ez az oxigén.
b) Az $a$ ) kérdésre adott válasz alapján ábrázoltuk a folyamatot a $( p , V )$ diagramon (3. ábra).

![](../../../figures/solution-ocr/6cbd4c26601d5fdf020d7397.jpg)
3. ábra

A megadott adatokkal ( $p _ { 1 } = 56,3 \mathrm { kPa }$ és $V _ { 1 } = 15 \mathrm { dm } ^ { 3 }$ )

$$
p _ { 2 } = \frac { 11 } { 5 } p _ { 1 } = 123,9 \mathrm { kPa } \quad \text { és } \quad V _ { 2 } = \frac { V _ { 1 } } { 3 } = 5 \mathrm { dm } ^ { 3 } .
$$

Az oxigén egyelőre ismeretlen $p _ { 0 }$ telítési nyomását abból számíthatjuk ki, hogy a nitrogén még a $V _ { 1 } \rightarrow V _ { 2 }$ összenyomás közben is gáz maradt. Elhanyagolva a cseppfolyós oxigén térfogatát a tartályban, valamint a nitrogéngázt továbbra is ideális gáznak tekintve felírhatjuk rá a Boyle-Mariotte-törvényt:

$$
\left( p _ { 1 } - p _ { 0 } \right) V _ { 1 } = \left( p _ { 2 } - p _ { 0 } \right) V _ { 2 } .
$$

Ebből az oxigén telítési nyomása $p _ { 0 } = \frac { 2 } { 5 } p _ { 1 } = 22,5 \mathrm { kPa }$.


Ennek segítségével felírhatjuk a nitrogén és az oxigén mólokban mért tömegének arányát:

$$
\frac { n _ { \text {nitrogén } } } { n _ { \text {oxigén } } } = \frac { p _ { 1 } - p _ { 0 } } { p _ { 0 } } = \frac { 3 } { 2 } .
$$

Már csak egy összefüggés hiányzik a két mólszám között ahhoz, hogy kiszámíthassuk pontos értékeiket. Ez a keresett összefüggés abból adódik, hogy a két mólszám összege a mólokban mért teljes anyagmennyiség, amely kezdetben még (ideális) gáz volt, tehát érvényes rá az ideális gáz állapotegyenlete:

$$
p _ { 1 } V _ { 1 } = n _ { \text {összes } } R T .
$$

Ebből $n _ { \text {összes } } \left( = n _ { \text {nitrogén } } + n _ { \text {oxigén } } \right) = 1,313$ mól. Fentiek alapján, felhasználva a moláris tömegek értékét:

$$
\begin{aligned}
n _ { \text {nitrogén } } & = 0,788 \text { mól } = 22,1 \text { gramm } , \\
n _ { \text {oxigén } } & = 0,525 \mathrm { mól } = 16,8 \text { gramm. }
\end{aligned}
$$

Kizárólag a feladatban szereplő adatok segítségével nem lehet eldönteni, hogy az oxigén vagy a nitrogén kezd el hamarabb cseppfolyósodni.

Szöget üthet a fejünkben, hogy miért éppen a $T = 77,4 \mathrm {~K}$-es izotermát kérdezi a feladat. Eszünkbe juthat (táblázatok alapján ellenőrizhetjük), hogy ez a hőmérséklet a folyékony nitrogén forráspontja normál légköri nyomáson ( $1 \mathrm {~atm} = 1,013 \cdot 10 ^ { 5 } \mathrm {~Pa}$ ). Ez azt jelenti, hogy a nitrogén ezen a hőmérsékleten akkor kezd el cseppfolyósodni, ha a parciális nyomása eléri az 1 atmoszférát. A kezdőállapotban $p _ { 1 } = 56,3 \mathrm { kPa }$, vagyis ezen a nyomáson a nitrogén akkor sem kezdhetne el kondenzálódni, ha a gáz tiszta nitrogén lenne.

Érvelésünket úgy is megerősíthetjük, ha kiszámítjuk a $p _ { 2 } - p _ { 0 }$ nyomás értéket, mert ennek a különbségnek éppen 1 atmoszférának kell lenni, hiszen ez a telített nitrogéngő́z nyomása 77,4 K-en. Ha a számításokat kerekítések nélkül végezzük, akkor $p _ { 2 } = 123,86 \mathrm { kPa }$ és $p _ { 0 } = 22,52 \mathrm { kPa }$, vagyis a különbség 101,34 kPa, ami nagy pontossággal 1 atmoszféra.

Következtetésünket az is megerősíti, hogy a normál nyomású oxigén forráspontja (szintén táblázatokban megtalálható adat) 90,2 K, amiből az következik, hogy a telített oxigéngőz nyomása 77,4 K-en kisebb, mint a nitrogéné (1 atmoszféra), és valóban a megoldás részeredményeit felhasználva:

$$
p _ { 0 } = \frac { 2 } { 5 } p _ { 1 } < p _ { 2 } - p _ { 0 } = \frac { 9 } { 5 } p _ { 1 } .
$$

A feladatban azért jelennek meg ezek az egyszerú törtek, mert véletlenül a telített nitrogén nyomása (1 atm) éppen négy és félszerese a telített oxigén nyomásának 77,4 K-en.

Kiegészítés (Honyek Gyula): Érdekességként említhetjük meg, hogy amennyiben észrevesszük, hogy a telített nitrogéngőz nyomása 77,4 K-en 1 atm, akkor a következő egyenleteket írhatjuk fel:

$$
\frac { 11 } { 5 } p _ { 1 } - p _ { 0 } = 1 \text { atm. és } \mathrm { p } _ { 1 } - \mathrm { p } _ { 0 } = \frac { 1 } { 3 } \mathrm {~atm} .
$$

Ezeknek az egyenleteknek a megoldása:

$$
p _ { 0 } = \frac { 2 } { 9 } \mathrm {~atm} . = 22,5 \mathrm { kPa } \quad \text { és } \quad \mathrm { p } _ { 1 } = \frac { 5 } { 9 } \mathrm {~atm} . = 56,3 \mathrm { kPa } ,
$$

vagyis azok számára, akik kihasználták, hogy normál légköri nyomáson a nitrogén forráspontja $77,4 \mathrm {~K}$, a megadott $p _ { 1 } = 56,3 \mathrm { kPa }$ adat felesleges volt.
3. feladat. Két egyforma, mondjuk 5 cm átmérốjǘ, vékony lemezból készült fémkorong ( $A$ és $B$ ) szigeteló fonálon függ pontosan egymással szemben, párhuzamosan, egymáshoz közel, pl. 2 mm távolságban, az a) ábrán látható módon. Mindkét korongnak ugyanakkora, kellóképpen kicsiny $q$ elektromos töltést adunk. (Mivel $q$ kicsi, sem a korongok parányi elmozdulása, sem a levegốn át történó kisülések veszélye nem okoz bonyodalmat.) Kezdetben természetesen mindkét korongra hat a másik korong taszító ereje.


![](../../../figures/solution-ocr/ba092414d79b8d83311da89b.jpg)

Fizika szakkörön az elektromos árnyékolás a téma.
A két korongot nézve Beának az az ötlete támad, hogy ha az A és B korong közé óvatosan (ügyelve, hogy egyikhez se érjen hozzá) egy ugyanolyan, de elektromosan semleges $C$ fémkorongot eresztünk be szigetelő fonálon a b) ábrának megfelelően, akkor az „leárnyékolja” mindkét eredeti korongnak a másikra gyakorolt hatását, ezért mind az $A$-ra, mind a $B$-re ható erő gyakorlatilag nullára csökken.

Gabi figyelmeztet rá, hogy az elektromos mezó nagyobb tartományra terjedhet ki, mint a töltött testek mérete, ezért Bea ötletét úgy módosítja, hogy a $C$ korong átmérốje legyen pl. 25 cm, ahogy a c) ábrán látható. (Az ábra nem méretarányos.) Gabi szerint csak ekkor csökken elhanyagolható értékre az $A$-ra, illetve $B$-re ható elektromos erố.
a) Mit tapasztalnánk, ha Bea ötletét követve $A$ és $B$ közé velük egyenló méretü, semleges $C$ fémkorongot engednénk, majd megmérnénk az $A$-ra, illetve $B$-re ható erốt?
b) Mi lenne az eredmény, ha Gabi javaslatát ellenóriznénk méréssel?
c) Elképzelhetố-e olyan méretứ semleges $C$ korong, amelynek alkalmazásával az $A$-ra, illetve a $B$-re ható eró pontosan zérussá válik?
(Károlyházy Frigyes)

Megoldás. a) A középre leengedett fémkorongon nem alakulhat ki töltésmegosztás, mert a korong (fém!) belsejében nem lehet szabad töltés, felületén pedig nem léphet fel kétféle előjelú töltés a szimmetrikusan, ugyanakkora korongokon elhelyezkedő, azonos előjelú töltések hatására. Ezért Bea ötlete nem jó, a két feltöltött korongra ható erő nem változhat meg. Ugyanúgy taszítanák egymást a semleges $C$ fémkorong leeresztése után, mint addig.
b) Itt, a nagyméretú $C$ korong esetén már érvényesülhet a töltésmegosztás. A középső korongnak a másik két koronggal szemközti részein $q$-val ellentétes töltés alakul ki mindkét oldalon. Ugyanakkora, $q$-val azonos előjelú töltés lép fel a nagy $C$ korong széle felé, úgyhogy az össztöltés továbbra is nulla marad. Viszont a töltött korongokra most a nagy korongon megosztott (influált), $q$-val ellentétes előjelú töltések vonzó erőt fejtenek ki, és ez nagyobb, mint a taszító erő. A két töltött korongra ható erő éppen ellentétes irányú lesz, mint addig, amíg nem volt közöttük a nagy korong.
c) Gondolatban fokozatosan növeljük a középső korong átmérójét 5 cm-ről 25 cm-re. A kezdeti taszító erő csökkenni kezd, míg végül - folytonosan változva - vonzó eróbe megy át. Közben, valamekkora átmérőnél tehát éppen zérus a töltött korongokra ható erő. Hogy ez mekkora átmérőnél következik be, azt egy kicsit bonyolultabb számítással lehet csak meghatározni; ezt azonban nem várta el a versenybizottság a megoldóktós ${ } ^ { 1 }$.

[^0]
![](../../../figures/solution-ocr/4202d42df8a5f6da8f2dd928.jpg)

Tájékozódásul vázoljuk a három esetben kialakuló töltéseloszlást (5. ábra), feltéve, hogy eredetileg negatív töltést adtunk a korongoknak. (Az ábrák nem méretarányosak.)

Kiegészítések (Kalina Kende ötlete alapján): a) eset: Vegyük a három korong burkolóhengerét. Képzeljük azt, hogy ez a „lapos" henger teljes egészében homogén vezető. Vigyünk fel rá $2 q$ töltést, ezek legnagyobb része henger véglapjain jelenik meg, csak egy kis része kerül a henger palástjára. Ha ezután eltávolítjuk a hengernek azt a részét, ami nem a három korong, akkor látszik, hogy a középső korongon nincs töltés, így nem befolyásolja az $A$ és $B$ korong közötti erőhatást.
b) eset: Ha a középső korong végtelen nagy lenne, akkor a tükörtöltés módszerét alkalmazva jól látszana, hogy $A$-ra és $B$-re is vonzóerőt fejt ki a középső fémsík, miközben az $A$ és $B$ közötti kölcsönhatás már nem is lép fel. Most ugyan nem végtelen nagy a középső korong, de területe a kis, töltött $A$ és $B$ korong területének 25-szöröse, távolsága a kis korongoktól 1-1 mm, ami átmérójének 250-ed része. Vagyis a $C$ korong közepén influált, az $A$ és $B$ töltésével ellenkező előjelũ töltés vonzó hatásának kell érvényesülnie ebben az esetben is.
*

A verseny ünnepélyes eredményhirdetésére és a díjak kiosztására 2010. november 26-án került sor az ELTE TTK Bolyai János termében. Meghívást kaptak erre az 50 és a 25 évvel ezelőtti Eötvös-versenyek nyertesei is, akik közül Dömölky (akkor még Elsner) Gábor, Grad János, Kós Géza, Pfeil Tamás és Tasnádi Tamás tudtak eljönni, és emlékeztek vissza néhány keresetlen mondatban saját versenyélményeikre. A megjelentek kivetítve láthatták az 50 és 25 évvel ezelőtti verseny feladatait és a 25 évvel ezelőtti nyerteseknek a KöMaL-ban akkor megjelent fényképeit.

Ezután következett az idei feladatok ismertetése, a megoldások bemutatása, melyben csaknem a teljes versenybizottság részt vett. Radnai Gyula ismertette a megoldásokat, ezeket az elsó feladatnál Vigh Máté, a másodiknál Honyek Gyula egészítette ki, az itt is olvasható módon. A második és a harmadik feladathoz kapcsolódóan kísérletek bemutatására is sor került, Honyek Gyula és Ajtay János jóvoltából. Megfigyelhettük a levegőből kicsapódó oxigént egy folyékony nitrogénnel töltött teáskanna oldalán, és lézeres fénymutató jelezte az egyik töltött fémkorong elmozdulását, amikor a korongok közé ereszkedett a töltetlen nagy korong.

A díjak és jutalmak kiosztására Kádár Györgyöt, az Eötvös Loránd Fizikai Társulat fótitkárát és Fekete Lászlót, a MOL magyarországi HR (humánerőforrás fejlesztési) igazgatóját kérte fel a versenybizottság elnöke. Utóbbit azért, mert a MOL jóvoltából idén nemcsak a legjobb versenyzők, hanem tanáraik is váratlan jutalomban részesültek: egyenként 25-25 ezer forint kedvezményt kaptak a Sárospatakon megrendezendő fizikatanári ankét részvételi díjából.

Első́ díjat, akárcsak 50 évvel ezelőtt, 2010-ben se adott ki a versenybizottság. (Ehhez mindhárom feladat tökéletes megoldására lett volna szükség, ilyen sajnos nem volt.)


Második díjat, vele 20 ezer forint pénzjutalmat öten kaptak: Backhausz Tibor, a Fazekas Mihály Főv. Gyak. Gimn. 12. évf. tanulója, Horváth Gábor tanítványa; Börcsök Bence, a szegedi Radnóti Miklós Kís. Gimn. 12. évf. tanulója, Mező Tamás tanítványa; Budai Ádám, a miskolci Földes Ferenc Gimn. 12. évf. tanulója, Bíró István és Zámborszky Ferenc tanítványa; Kalina Kende, a Fazekas Mihály Fóv. Gyak. Gimn. 12. évf. tanulója, Horváth Gábor és Csefkó Zoltán tanítványa; és Varga Ádám, a szegedi Ságvári Endre Gyak. Gimn. 12. évf. tanulója, Tóth Károly és Hilbert Margit tanítványa.

Harmadik díj kiadására sem került sor, viszont tizenegy versenyző kapott dicséretet, vele 10 ezer forint értékú könyvjutalmat: Almási Gergõ, az ELTE fizika szakos hallgatója, aki a budapesti Radnóti Miklós Gyak. Gimnáziumban érettségizett mint Szalóki Dezső és Markovits Tibor tanítványa; Ågoston Tamás, a Fazekas Mihály Főv. Gyak. Gimn. 11. évf. tanulója, Dvorák Cecilia tanítványa; Benedek Ádám, a nagykanizsai Batthyány Lajos Gimn. 11. évf. tanulója, Dénes Sándorné tanítványa; Béres Bertold, a budapesti Puskás Tivadar Távközlési Techn. 12. évf. tanulója, Beregszászi Zoltán és Alapiné Ecseri Éva tanítványa; Kéri Zsófia Nóra, az ELTE fizika szakos hallgatója, aki a budapesti Trefort Ágoston Gyak. Gimnáziumban érettségizett mint Kovács Géza tanítványa; Kószó Simon, a szegedi Radnóti Miklós Kís. Gimn. 12. évf. tanulója, Mező Tamás tanítványa; Major Attila, a szegedi Radnóti Miklós Kís. Gimn. 11. évf. tanulója, Mező Tamás tanítványa; Pácsonyi Imre, a zalaegerszegi Zrínyi Miklós Gimn. 13. évf. tanulója, Pálovics Róbert tanítványa; Szikszai Lőrinc, a miskolci Fráter György Kat. Gimn. 12. évf. tanulója, Edöcsény Levente tanítványa; Várnai Péter, a budapesti Apáczai Csere János Gyak. Gimn. 12. évf. tanulója, Pákó Gyula és Flórik György tanítványa; Vona István, a Fazekas Mihály Fóv. Gyak. Gimn. 11. évf. tanulója, Dvorák Cecilia tanítványa.

A nyertes diákok megjelent tanárai a Vince Kiadó és a MATFUND Alapítvány által felajánlott könyvekből válogathattak.

Végül a versenybizottság elnöke felolvasta Veres Gábor fizikus üzenetét, amelyet kérésére intézett a mai versenyzőkhöz Genfből, ahol a nagy hadronütköztetőben a nehézionok ütközésével kapcsolatos izgalmas kísérletekben vesz részt ${ } ^ { 2 }$

A hivatalos program lezajlása után a most már szokásosnak mondható állófogadás következett a RAMASOFT Zrt. jóvoltából. Köszönet minden támogatónknak!
(Radnai Gyula)

[^1]

[^0]:    ${ } ^ { 1 }$ A „kritikus" korongméret középiskolás eszközökkel történő kiszámítására a KöMaL egy későbbi számában még visszatérünk. - A Szerk.

[^1]:    ${ } ^ { 2 }$ A kísérletekről rövid tudósítást olvashattunk a KöMaL 2010/8. számában.
