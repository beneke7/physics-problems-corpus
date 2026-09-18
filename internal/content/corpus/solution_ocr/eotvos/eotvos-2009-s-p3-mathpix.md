---
id: solution-ocr-eotvos-2009-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2009-superconductor-flux]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. feladat. Egy hosszú, keskeny szolenoidban egyenáramot tartunk fenn. Legyen például a tekercs hosszúsága $\ell =$ 60 cm, sugara $r = 2 \mathrm {~cm}$, menetszáma $N = 600$, az áramerősség $I _ { 0 } = 1 \mathrm {~mA}$.

A tekercset a közepe táján hézagmentesen körülvesszük egy egyszerü, zárt vezetö hurokkal (A), és egy ugyanekkora átmérójǘ, de kettốs hurkot (zárt, „kétmenetes tekercset”) (B) helyezünk el a tekercs szájánál is, az 5. ábra szerint. A és $B$ olyan anyagból készült, amely viszonylag könnyen szupravezetóvé tehetố, ohmikus ellenállása kellôképpen alacsony hốmérsékleten zérussá válik.

![](../../../figures/solution-ocr/f939735e87c1124acee56d9f.jpg)
5. ábra

Kezdetben természetesen nem folyik áram $A$-ban és $B$-ben. De most lehütjük, szupravezetốvé tesszük óket, majd a szoleniod áramkörét megszakítjuk. Ekkor (mivel a mágneses fluxus, amely egy zárt szupravezetó áramkörön halad át, nem változhat meg) az $A$ hurokban valamekkora $I _ { A }$, a kettós hurokban $I _ { B }$ áram indukálódik, amely fenn is marad.

1. Hasonlítsa össze $I _ { A }$ és $I _ { B }$ nagyságát! Közelítốleg egyenlők-e, és ha nem, melyik nagyobb a másiknál és hányszor?
2. A szolenoidra vonatkozó adatok ismeretében adjon valamilyen ésszerũ becslést $I _ { A }$ értékére!
(Károlyházy Frigyes)

Megoldás. Az első kérdésre viszonylag könnyen válaszolhatunk, ha felismerjük, hogy amikor állandó erősségú áram folyik a szolenoidban, akkor a tekercs szájánál fele akkora mágneses fluxus alakul ki, mint a tekercs közepe táján. (Ennek legegyszerúbb igazolásához úgy juthatunk, hogy gondolatban hozzáillesztünk a szolenoidhoz egy ugyanolyan másikat. Azon a helyen, ahol a két tekercs találkozik, mindkét tekercsnek a szimmetriatengely irányában $B / 2$ nagyságú mágneses indukcióvektor-komponest kell létrehoznia ahhoz, hogy kialakuljon a tekercs belsejére jellemző, $B$ nagyságú indukcióvektor.)

A fele nagyságú mágneses fluxust két menettel kell létrehozni a tekercs végén, vagyis egy menetben itt negyedakkora áram is elég, mint amire a tekercs közepe táján lévő egyetlen menetben van szükség.

A feladat második kérdése az $A$ hurokban folyó $I _ { A }$ áram nagyságára vonatkozik. Egy körvezetőben folyó $I$ áram a körvezető középpontjában

$$
B = \mu _ { 0 } \frac { I } { 2 r }
$$

nagyságú mágneses teret hoz létre. Első közelítésben tegyük fel, hogy ez éppen akkora, mint amekkorát a szolenoidban folyó $I _ { 0 }$ áram hozott létre:

$$
B = \mu _ { 0 } \frac { I _ { 0 } N } { \ell } .
$$

Ebben a közelítésben tehát

$$
I = 2 r \frac { I _ { 0 } N } { \ell } .
$$

Behelyettesítve a megadott értékeket, a tekercs közepe táján levő hurokban indukálódó áramra $I = I _ { A } = 40 \mathrm {~mA}$ adódik. Figyelembe véve azonban azt, hogy a körvezető közepén a legkisebb a mágneses indukció értéke, vagyis a körlap pontjaira vonatkozó „átlagos" indukció ennél biztosan nagyobb, a 40 mA-nél biztosan kisebb áram indukálódik a szupravezető hurokban.


Felhasználva például a körvezető induktivitására a szakirodalomban található

$$
L = \mu _ { 0 } r \ln \frac { r } { r _ { \text {drót } } }
$$

közelítő képletet (és feltételezve, hogy mondjuk $r _ { \text {drót } } = r / 50$ ), a körvezetőben indukálódó áramra a fluxus változatlanságát kifejező

$$
\mu _ { 0 } \frac { I _ { 0 } N } { \ell } \cdot \left( r ^ { 2 } \pi \right) = L I _ { A }
$$

összefüggésből $I _ { A } = 16 \mathrm {~mA}$ adódik.
Megjegyzések: 1. A drót vastagságára vonatkozó adat nem szerepelt a feladat szövegében, de az eredmény - ésszerü határok között - nem is függ lényegesen ettől az adattól. Ha például a drót sugara $r / 10$ vagy $r / 100$, az indukálódó áramerősségre 27 mA , illetve 13 mA értékeket kapunk.
2. $I _ { A }$-ra a következő egyszerú megfontolással is adhatunk nagyságrendi becslést. A szolenoid közepe táján az átmenő fluxust nagyon sok menetben folyó áram együttes hatása hozza létre. A vizsgált helyen levő egyetlen menet (mint körvezető) fluxusa annyiszor kisebb az egymenetes szupravezető fluxusánál, ahányszor kisebb az $I$ áram $I _ { A }$-nál. Gyakorlatilag ugyanekkora fluxust hoz létre a szolenoid kiszemelt menete melletti egy-egy „körvezető“ menet is. A távolabbi (néhány $r$-nyi távolságnál jóval messzebb levő) menetek azonban már egyre kevésbé járulnak hozzá a középső rész fluxusához, hiszen a mágneses terük „szétszóródik”, eróvonalaiknak csak kis része halad át a kiszemelt körlapon. A szolenoid néhányszor (mondjuk 1 vagy 2-szer) $r$ hosszúságú szakaszán kb. 20-40 menet található. Ezek mágneses fluxusa akkor lesz ugyanakkora, mint az egyetlen szupravezető köráram fluxusa, ha $I _ { A }$ 20-40-szer erősebb, mint a szolenoid 1 mA-es árama.

A verseny ünnepélyes eredményhirdetésére és a díjak kiosztására 2009. november 27-én délután került sor az ELTE lágymányosi északi épületének konferenciatermében.

Mint az elmúlt években mindig, most is először az 50 és a 25 évvel ezelőtti Eötvös-verseny feladatok bemutatására került sor, majd e versenyek meghívott díjazottjai szólaltak meg, emlékeztek vissza az akkori versenyre.

Magos András 50 évvel ezelốtt érettségizett a budapesti II. Rákóczi Ferenc Gimnáziumban, Tusnády Gábor pedig a sátoraljaújhelyi Kossuth Lajos Gimnáziumban. Magos András villamosmérnök, majd a BME oktatója lett, Tusnády Gábor matematika-fizika szakos tanárként indult és matematikus lett. Ma már akadémikus, a Rényi Alfréd Matematikai Kutatóintézetben dolgozik. Mindketten hangsúlyozták a problémaérzékenység fontosságát az értelmiségi, kutatói pályán.

A 25 évvel ezelőtti nyertesek közül először Kós Géza szólalt meg és idézte fel az akkori feladatokra adott megoldásait. Matematikai érdeklődése és találékonysága segítette az általa még nem tanult tematikájú feladatok helyes megoldásához. Szükség is volt erre, hiszen még csak a III. osztályt kezdte el akkor Budapesten, a Berzsenyi Dániel Gimnáziumban. Utána Fáth Gábor, akkor a budapesti Fazekas Mihály Gyakorló Gimnázium érettségizett tanulója, majd Fodor Gyula következett, aki akkor a budapesti Móricz Zsigmond Gimnáziumot elvégezve kezdte meg az ELTE-n fizikusi tanulmányait. Fáth Gábor elmesélte, hogyan sikerült szabadságot kapnia a honvédségtől, ahol egyéves kötelező katonai szolgálatát töltötte. (A mai fiatalok már nem is ismerik az „előfelvételi” rendszer megpróbáltatásait.) Fodor Gyula a fizikusi kutatómunka vonzásában éli életét, Fáth Gábor pályát változtatott és gazdasági matematikával keresi kenyerét. Kós Géza is matematikusként dolgozik, emellett a KöMaL matematikai szerkesztőbizottságának a nehéz feladatokért felelős tagja, aki ma is szívesen foglalkozik egy-egy izgalmasabb fizikai problémával.

Mialatt a hallgatóság figyelmét a régi diákok visszaemlékezései kötötték le, a hátuk mögött kivetítve jelentek meg az egykori fényképeik a KöMaL archívumából. Az elmúlt 50 évben, amióta csak újra szerepelnek fizika feladatok a KöMaL-ban, egyszer se fordult elő, hogy az Eötvös-verseny díjazottai között ne lettek volna olyan diákok, akik a KöMaL sikeres megoldói voltak.

Ezután következtek a 2009. évi Eötvös-verseny feladatok. A megoldásokat a Versenybizottság elnöke mutatta be, aki a 2. feladat megoldásával kapcsolatos többféle kísérletet is előkészített az asztalon. Volt egy 12 cm átmérőjú és több kisebb hengeres üvegváza; jól lehetett látni a bennük égő gyertyalángok valódi képeit.

A Csodák Palotájából kölcsönzött kettős tükörrel szintén valódi képet lehetett varázsolni a levegőbe. A hátsó padokon állt egy gyönyörú nagy homorú tükör az egyetemi demonstrációs laboratóriumból, amellyel pedig virágcsokrot lehetett varázsolni egy vázába. Ez utóbbi két kísérlet azt illusztrálta, hogyan lehet három dimenziós, a tárgyhoz megtévesztésig hasonló valódi képeket előállítani.

Ezután került sor a díjak és a dicséretek átadására. Az Eötvös Loránd Fizikai Társulat elnöke nevében Kádár György fötitkár adta át az okleveleket, a Versenybizottság elnöke pedig a szponzorok által felajánlott pénzjutalmakat.
I. díjat és 30 ezer forint pénzjutalmat vehetett át Lovas Lia Izabella, a BME fizika szakos hallgatója, aki a pécsi Leốwey Klára Gimnáziumban érettségizett mint Simon Péter és Kotek László tanítványa.

Összevont II. és III. díjat és 15-15 ezer forintos pénzjutalmat kapott a következő három versenyző: Karsa Anita, a BME fizika szakos hallgatója, aki a Fazekas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; Pálovics Péter, a zalaegerszegi Zrínyi Miklós Gimnázium 12. évf. tanulója, Orbán Edit tanítványa; Varga Ádám, a szegedi Ságvári Endre Gyakorló Gimnázium 11. évf. tanulója, Tóth Károly és Hilbert Margit tanítványa.


Dicséretet kaptak: Aczél Gergely, a BME fizika szakos hallgatója, aki a Pápai Református Kollégium Gimnáziumában érettségizett mint Somosi István tanítványa; Farkas Márton Bence, a BME fizika szakos hallgatója, aki a Fazekas Mihály Fốvárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; Fülep Csilla, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium 12. évf. tanulója, Horváth Gábor tanítványa; Lászlóffy András, a Pázmány P. Kat. Egyetem mérnök informatikus szakos hallgatója, aki a budapesti Piarista Gimnáziumban érettségizett Futó Béla tanítványaként; Wang Daqian, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium 12. évf. tanulója, Horváth Gábor tanítványa.

Az I. díjas Lovas Lia Izabella a Társulattól Eötvös-verseny érmet, az Akadémiai Kiadótól pedig egy Holics László szerkesztette Fizika könyvet vehetett át. Holics Lászlónak, aki 60 évvel ezelőtt volt díjazott az akkori Eötvös-versenyen, a Társulat fótitkára Lánczos Kornél 6 kötetes összegyújtött múveit adta át. A díjazottak és dicséretet nyert diákok tanárai idén a Vince Kiadó, az Akadémiai Kiadó és a MATFUND Alapítvány által felajánlott könyvekből válogathattak.

Végül állófogadással zárult az ünnepi program, melyen az Eötvös-verseny régi és új nyertesei, a vendég tanárok és diákok élénk eszmecsere közben tanulmányozták a kitett kísérleteket, tárgyalták újra a feladatokat. Néhányukkal még a jövő évi Eötvös-versenyen is találkozhatunk. Az állófogadás költségeit és a nyertesek pénzjutalmait az Eötvös-verseny idei szponzorai fedezték: Ramasoft Zrt., Indotek Zrt. és Gutai László fizikus az Egyesült Államokból.

Köszönet érte.
