---
id: solution-ocr-eotvos-2000-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2000_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2000-optical-grating]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Egy optikai rácsra, rá merốlegesen, monokromatikus fényt bocsátunk. A rács, melynek szomszédos rései d távolságra vannak egymástól, nem egészen szokványos: szélesebb és keskenyebb rések felváltva követik egymást. (Például a páratlan sorszámúak szélessége $a$, a párosaké $b$, ahol $b < a$ és mindkettó sokkal kisebb, mint $d$.) A rács fenti sajátsága jellegzetes, könnyen észrevehetó módon mutatkozik meg az elhajlási képben. Hogyan?

Készítsünk vázlatos ábrát az elhajlási képrốl, ha $b \ll a$, illetve ha $b \approx a$ !
(Gnädig Péter)
Megoldás. Az optikai rács egy síkba eső, egymással párhuzamos rések rendszere. A rések egymástól egyenló távolságra helyezkednek el; két egymás melletti rés távolságát (egy átlátszó és egy át nem látszó rész együttes vastagságát) $d$-vel, a rések számát pedig $N$-nel szokás jelölni. Általában a rések egyenlő vastagságúak, ez a feltétel azonban most nem teljesül.

Mivel a feladatban szereplő optikai rácsra merőlegesen esik monokromatikus fény, feltehetjük, hogy a résekből kilépő fényhullámok fázisa kilépéskor egyenlő, amplitúdójuk pedig arányos a rések szélességével.

E hullámok interferenciájának eredményét látjuk az ernyốn. Az intenzitás az eredő hullámamplitúdó négyzetével arányos. $N$ rés esetén $N$ hullám interferenciáját kell tanulmányoznunk; az interferencia eredménye a találkozáskor fellépő fáziskülönbségektől, az pedig az útkülönbségektől függ.

Két egymás melletti résből kilépő hullám közötti útkülönbség abban az irányban, amelyik az eredeti iránnyal $\alpha$ szöget zár be: $d \sin \alpha$ (lásd a 4. ábrát). Ha $d \sin \alpha = \lambda / 2$, akkor az egymás melletti résekből érkező hullámok ellentétes fázisban találkoznak az ernyő́n. Ha a rések egyenló szélességúek $( a = b )$, akkor a hullámok páronként kioltják egymást. Ha $a > b$, akkor az eredő intenzitás

$$
I \sim \left[ \frac { N } { 2 } ( a - b ) \right] ^ { 2 } .
$$

Ez nemcsak akkor következik be, ha $d \sin \alpha = \lambda / 2$, hanem minden olyan esetben, amikor

$$
d \sin \alpha = ( 2 k + 1 ) \frac { \lambda } { 2 } , \quad ( k = 0 , \pm 1 , \pm 2 , \ldots )
$$

Azokban az esetekben pedig, amikor

$$
d \sin \alpha = 2 k \frac { \lambda } { 2 } = k \lambda , \quad ( k = 0 , \pm 1 , \pm 2 , \ldots )
$$

akkor valamennyi résből érkező hullám azonos fázisban találkozik az ernyőn. Ekkor az eredő intenzitás:

$$
I \sim \left[ \frac { N } { 2 } ( a + b ) \right] ^ { 2 } .
$$

Ábrázoljuk az ernyőn látható elhajlási kép intenzitását az elhajlási irányt jellemző $\sin \alpha$ függvényében (5. ábra)! (Kicsiny elhajlási szögeknél $\sin \alpha$ arányos az ernyőn ténylegesen megfigyelhető eltérülési távolsággal.) Minthogy $a$ is és $b$ is sokkal kisebb $d$-nél, $N$ viszont általában elég nagy szám, az elhajlási képben csak a „főmaximumok" intenzitása lesz észrevehető. (Belátható, hogy ha a fentebb tárgyalt esetek egyike sem teljesül, vagyis az egymás melletti résekből érkező fényhullámok útkülönbsége nem egész számú többszöröse a félhullámhossznak, akkor a sok-sok helyről érkező hullám csaknem teljesen kioltja egymást.)

Az ernyốn tehát aránylag éles vonalakat látunk, egymástól egyenlő távolságra, de most csak minden másodiknak lesz egyenlő az intenzitása. Felváltva követik egymást az erősebb és a halványabb vonalak. Ez az a könnyen felismerhető jellegzetessége az elhajlási képnek, amit a kétféle résszélesség okoz. A vonalak annál élesebbek, minél több résből áll a rács, és külön az erősebb, illetve külön a halványabb vonalak intenzitása annál inkább egyenlő egymással, minél kisebb a rések szélessége a rések távolságához képest.

Ábrázoljuk még a kérdezett két speciális esetet! Ha $a \approx b$, akkor a 6. ábrán látható intenzitás-eloszlást, ha pedig $a \ll b$, akkor a 7. ábrán bemutatott intenzitás-eloszlást kapjuk.

Megjegyzés. Erre a feladatra nem született hibátlan megoldás, elég jó megoldást adott három versenyzó. Többen megsejtették, hogy az elhajlási képen fényesebb és halványabb vonalak váltakozva követik egymást, de ezt - tévesen - a szélesebb és keskenyebb réseken átjutó fény erősségének különbözőségével, mégpedig a fényerő-arány valamiféle „leképződésével” magyarázták. Pedig a keskeny és a széles résbő́l jövő fény intenzitásának aránya $( b / a ) ^ { 2 }$, míg az ernyőn a halvány és a fényes vonalak intenzitásának aránya $( a - b ) ^ { 2 } / ( a + b ) ^ { 2 }$, s e kettő csak egyetlen esetben egyenlő: ha $b / a = \sqrt { 2 } - 1$.

## A verseny végeredménye

Első̌ díjat (és 12 ezer Ft jutalmat) kapott: Buruzs Ádám, a Budapesti Műszaki és Gazdaságtudományi Egyetem mérnök-fizikus hallgatója, aki a szegedi Radnóti Miklós Gimnáziumban érettségizett mint Mike János és Hilbert Margit tanítványa.


Második díjat (és 6-6 ezer Ft jutalmat) kaptak: Pozsgay Balázs, a pécsi Magyar-német Nyelvú Iskolaközpont 12. osztályos tanulója, Kotek László tanítványa és Siroki László, a debreceni Fazekas Mihály Gimnázium 11. osztályos tanulója, Adorján László és Szegedi Ervin tanítványa.

Harmadik díjat (és 4-4 ezer Ft jutalmat) kaptak: Béky Bence, a Fazekas Mihály Fővárosi Gyakorló Gimnázium 11. osztályos tanulója, Horváth Gábor tanítványa; Gáspár Merse Elöd, az Eötvös Loránd Tudományegyetem fizikus hallgatója, aki a Fazekas Mihály Fóvárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; Hegedũs Ákos, az Eötvös Loránd Tudományegyetem fizikus hallgatója, aki a pécsi ciszterci Nagy Lajos Gimnáziumban érettségizett mint Orovica Márkné és Kotek László tanítványa; Máthé András, az Eötvös Loránd Tudományegyetem matematikus hallgatója, aki az ELTE Apáczai Csere János Gyakorló Gimnáziumban érettségizett mint Flórik György tanítványa; Pápai Tivadar, a barcsi Dráva Völgye Középiskola 11. osztályos tanulója, Horváth Ferenc tanítványa; Pesti Gábor, a nagykanizsai Batthyány Lajos Gimnázium 12. osztályos tanulója, Piriti János tanítványa és Schmidt András, a budapesti Szent István Gimnázium 12. osztályos tanulója, Moór Ágnes tanítványa.

Dicséretet kaptak: Csillag Kristóf Béla, a Budapesti Múszaki és Gazdaságtudományi Egyetem múszaki informatika szakos hallgatója, aki a püspökladányi Karacs Ferenc Gimnáziumban érettségizett mint Szerdi János és Szegedi Ervin tanítványa; Hegedũs Zoltán Csaba, a Szegedi Tudományegyetem programtervező matematikus hallgatója, aki a miskolci Andrássy Gyula Müszaki Középiskolában érettségizett mint Gonda Gáspár tanítványa; Patay Gergely, a Budapesti Müszaki és Gazdaságtudományi Egyetem mérnök-fizikus hallgatója, aki a debreceni Tóth Árpád Gimnáziumban érettségizett mint Kovács Miklós és Szegedi Ervin tanítványa és Pápai Péter, a barcsi Dráva Völgye Középiskola 12. osztályos tanulója, Horváth Ferenc tanítványa.

★
Az ünnepélyes díjkiosztásra 2000. november 17-én az ELTE TTK új lágymányosi épületének földszinti nagy előadótermében került sor. Bevezetójében a Versenybizottság elnöke emlékeztetett arra, hogy ez a verseny több, mint száz éves múltra tekinthet vissza, s a millenniumi 2000. évben felidézte, kik nyerték a versenyt 100, 75, 50 és 25 évvel ezelőtt.

1900-ban Juvancz Ireneusz és Szmodics Kázmér lettek az akkor még tisztán matematikai tanulóverseny győztesei. Juvancz Ireneusz később Szilárd Leónak tanította a matematikát a VI. kerületi Fóreálban, majd rövid ideig a Mintagimnázium igazgatója is volt. A Szmodics családból 1900-ban Kázmér, két év múlva Hildegárd iratkozott fel a nyertesek közé.

1925-ben már külön matematikai és külön fizikai versenyt hirdetett meg az Eötvös Loránd Matematikai és Fizikai Társulat. Mindkettőben első helyezett lett az akkor 17 éves Teller Ede; matematikából hármas holtversenyben, fizikából egyedül lett első. Tudjuk, hogy milyen szeretettel és nosztalgiával emlékszik vissza erre a ma 90-es éveiben járó idős tudós.

1950-ben, a matematikusoktól különvált Eötvös Loránd Fizikai Társulat rendezésében lebonyolított versenyt Mráz (Zimányi) József és Rozványi Iván nyerte meg holtversenyben, természetesen mindketten fizikusok lettek.

1975-ben a Versenybizottság nem adott ki első díjat. A második díjon ketten osztoztak: Szép Jenő, aki ma az ELTE Szilárdtestfizikai tanszékén dolgozik és Zimányi Gergely, aki jelenleg az Egyesült Államokban kutatja és tanítja a fizikát. A névazonosság nem véletlen: Gergely Zimányi József fia. A díjkiosztó ünnepségen mindkettőjük képviseletében megjelent Zimányi Józsefnét a résztvevők tapsa köszöntötte.

A 2000. évi Eötvös-verseny nyertesei (ld. a 8. ábrát )
Elsố sor (balról jobbra): Siroki László, Buruzs Ádám és Pozsgay Balázs.
Második sor: Gáspár Merse Előd, Schmidt András, Pápai Tivadar, Béky Bence, Máthé András és Hegedús Ákos.
Harmadik sor: Hegedús Zoltán Csaba, Pápai Péter, Patay Gergely, Csillag Kristóf Béla.
Ezután került sor az idei feladatok megoldásának ismertetésére és diszkussziójára. Az első feladathoz kapcsolódóan Gnädig Péter mutatott be érdekes kísérleteket a még csak általános iskolás Sükösd Attila aktív közremúködésével. (Attila fizikus édesanyja biztosította a kísérlethez szükséges eszközöket.) A második feladat megoldásának bemutatására a Versenybizottság elnöke váratlanul három versenyzőt hívott ki a táblához. Ổk a hallgatóság számára is meggyőően, egymást kiegészítve ismertették saját megoldásaikat. Csak a díjkiosztásnál derült ki később, hogy ők lettek az idei verseny első három helyezettje. A harmadik feladat megoldását újra a Versenybizottság elnöke mutatta be, aki ezután a Társulat alelnökeként ünnepélyesen kiosztotta a 2000 . évi Eötvös-verseny díjait és a dicséreteket.

A díjakhoz a már említett pénzjutalmakon kívül a Nemzeti Tankönyvkiadó könyvutalványokat is felajánlott, összesen 50 ezer forint értékben, melyeket a Kiadó képviselője személyesen adott át. A nyertes diákokat elkísérő tanárok ugyancsak a Nemzeti Tankönyvkiadó, valamint a Müszaki-Calibra Kiadó és a TYPOTEX Kiadó által felajánlott könyvek közül válogathattak.

Az ünnepélyes díjkiosztás záróaktusaként a jelenlévő diákok és tanárok régebbi Eötvös-verseny nyertesekkel ismerkedhettek meg, ha még eddig nem ismerték volna óket személyesen: Holics László (1949), Tichy Géza (1963), Gnädig Péter (1965) és Szép Jenő (1975) pályáját döntően befolyásolta a Eötvös-versenyen elért sikeres szereplés.


![](../../../figures/solution-ocr/d64019dd43129f30963f72a2.jpg)


![](../../../figures/solution-ocr/77a7fc324a52fe98b0dae17f.jpg)
![](../../../figures/solution-ocr/942b2e8208dd139ed9795ada.jpg)


CY
