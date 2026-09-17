---
id: solution-document-eotvos-2000-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2000_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [eotvos-2000-chain-on-cylinder, eotvos-2000-optical-grating, eotvos-2000-water-boiling-test-tube]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2000_S.pdf."
---

2000. október 20-án rendezte meg az Eötvös Loránd Fizikai Társulat hagyományos ®szi tanulóversenyét, az Eötvös-
versenyt. Összesen 167 versenyz® adott be dolgozatot, közöttük egy vietnami és egy román állampolgár, mindketten
az ELTE els®éves zikus hallgatói.
Ismertetjük a feladatokat, a feladatok helyes megoldását, majd a verseny végeredményét.
1. Egy R sugarú, sima felület¶, vízszintes helyzet¶, rögzített hengerhez egy apró szem¶ lán ot kötünk úgy, hogy egyik
végét a paláston, a henger tengelyével azonos magasságban lev® A pontban rögzítjük, majd a lán ot egyszer átvetjük a
hengeren.
Legalább mekkora legyen a függ®legesen lelógó rész l hossza, hogy a lán többi része mindenhol a henger palástjához
simuljon?
(Varga István)
Megoldás. Mindenek el®tt azt vegyük észre, hogy ez a probléma nem a jól ismert dinamikai feladat- salád egyik
eleme, amikor is a hengerr®l le savarodó lán felpörgeti a hengert! Most a henger rögzített, és rögzített az A pont is, a
lán egyik vége. Legfeljebb az fordulhatna el®, hogy az alul kihasasodó lán egyre jobban elválik a hengert®l, s magával
rántja, lehúzza az egész lán ot. Persze ez se fordulhat el®, ha a lán függ®legesen lelógó része elég hosszú. Mennyi ez
az elég? Ez a kérdés. Vagyis ez egy sztatika feladat, amiben a lán egyensúlyát kell megvizsgálnunk! (Az igaz, hogy
nem éppen a legegyszer¶bb feladatok közül való, ezért is jelentett kellemes meglepetést a Versenybizottságnak, hogy
18 olyan versenyz® volt, aki hibátlan megoldást adott rá.)
Készítsünk ábrát, melyen egyrészt a hengerhez símuló és jobb oldalt lelógó lán ot látjuk, majd ennek egy ki siny,
kinagyított részét, s ezen ábrázoljuk valamelyik kiválasztott lán szemre ható er®ket! Jelöljük egyetlen lán szem tömegét
m-mel, átmér®jét (két egymás melletti lán szem középpontjának távolságát) d-vel! Válasszuk ki az 2. ábrán α szöggel
(illetve y függ®leges koordinátával) megjelölt helyzet¶ lán szemet, s ábrázoljuk az erre ható er®ket:
mg nehézségi er® hat rá függ®legesen lefelé;
N nyomóer®t fejt ki rá a henger sugár irányban (az érint®re mer®legesen);
K er®t fejt ki rá a jobb oldali szomszédja;
K + ∆K er®t fejt ki rá a bal oldali szomszédja.
E két utóbbi húzóer®, amit a szomszédos lán szemek fejtenek ki rá, nem esik egy egyenesbe, hanem a henger
görbületének megfelel®en ε = d/(2R) szöget zárnak be a hengernek a kiválasztott lán szemhez húzott érint®jével,
ahogyan ez a 2. ábra kinagyított részén is látható.
A kiválasztott lán szemre ható er®k ered®je zérus. Írjuk fel el®ször az érint® irányú er®k egyensúlyát:
(K + ∆K)cosε − mgsinα − K cosε = 0.
Mivel ε ≪ 1, ezért cosε ≈ 1, tehát írhatjuk:
∆K = mg sinα.
Ha a kiválasztott lán szem függ®leges koordinátája y, a fels® szomszédjáé pedig y + ∆y, akkor
∆y = dsinα,
ezért
∆K =
mg
d
∆y.
Azt kaptuk, hogy ∆K arányos ∆y-nal. Ebb®l következik, hogy K lineáris függvénye y-nak, vagyis
K =
mg
d
y + konstans.
(Hasonló módon járunk el sok esetben a zikában; például amikor az egyenletesen gyorsuló mozgásnál abból, hogy ∆v
arányos ∆t-vel, arra következtetünk, hogy v = at + v0.)
A fenti konstans értékét abból a feltételb®l határozhatjuk meg, hogy spe iális esetben, az A pontban (y = R helyen)
a K er®nek (l/d) · mg-nek kell lennie, hiszen l/d lán szem húzza lefelé az A pontbeli lán szemet.
l
d
mg =
mg
d
R + konstans,
amib®l a konstans értéke mg(l − R)/d-nek adódik. Ezt felhasználva
K =
mg
d
(y + l − R).
Tudunk-e most már valamit mondani az l hosszúság minimális értékér®l? Az biztos, hogy a lán szemek sak húzni
tudják egymást, tolni nem, ezért K ≥ 0 még a legalsó pontban is, ahol y = 0. Ebb®l pedig a fenti egyenlet alapján az
már biztos, hogy l ≥ R. Vajon elég lenne l = R is? Csak akkor, ha a legalsó lán szemet már nem húznák a szomszédai.
Ez ki sit gyanús!A lán egyensúlyának szükséges és elégséges feltétele, hogy az érint® és a sugár irányú er®k (er®-összetev®k) ered®je
zérus legyen. Eddig még sak az érint® irányú egyensúlyt vizsgáltuk! Írjuk fel a sugár irányú er®k egyensúlyát is:
(K + ∆K)sinε + K sinε − N − mg cosα = 0.
Használjuk fel, hogy sinε = d/(2R), valamint cosα = (R − y)/R.
(K + ∆K)
d
2R
+ K
d
2R
− N − mg
R − y
R
= 0.
Mivel ∆K ≪ K, ezért az els® két tag összege Kd/R-nek vehet®. Fejezzük ki az N nyomóer®t:
N = K
d
R
− mg
R − y
R
,
és helyettesítsük be K =
mg
d
(y + l − R)-et! Azt kapjuk, hogy minden y-ra fenn kell állnia az alábbi egyenl®ségnek:
N = mg
2y + l − 2R
R
.
Mivel a nyomóer® sem lehet negatív, N ≥ 0, ez pedig y = 0 esetén azt jelenti, hogy
l ≥ 2R.
Ez a feladat megoldása: a lán lelógó részének legalább 2R hosszúságúnak kell lennie.
Megjegyzés. Megvizsgálhatjuk most már, hogy a K húzóer®nek mi a minimális értéke.
K =
mg
d
(y + l − R) =
mg
d
(y + R).
A hengerre simuló legalsó lán szem (y = 0) esetén:
Kmin =
mg
d
R.
Ez bizony nem zérus, hanem éppen akkora, mint a lán függ®legesen lelógó részében a vele egy magasságban fellél®
húzóer®. A 3. ábrán feltüntettük a lán néhány helyén az egyes lán szemekre ható nehézségi er®t, nyomóer®t és a
lán ot feszít® er®ket. Érdekes, hogy ha a legalsó lán szemet nem nyomja a henger, akkor az A pont magasságában
lev®ket a nehézségi er® kétszeresével, a legfels® lán szemet pedig a rá ható nehézségi er®nél négyszer nagyobb er®
szorítja a hengerhez.
2. Felül nyitott kém s®ben vizet forralunk. Közvetlenül miel®tt az utolsó néhány sepp is elforrna, a kém sövet hir-
telen légmentesen lezárjuk. Ezután a kém s® tetején a h®mérsékletet lassan 200 ◦
C-ra emeljük, miközben gondoskodunk
arról  ha kell h¶téssel, ha kell f¶téssel,  hogy a kém s® legalján a h®mérséklet 100 ◦
C maradjon.
Mekkora lesz a kém s®ben a g®znyomás?
(Károlyházy Frigyes)
Megoldás. A feladat kérdése is sugallja, hogy a nyomás az egész kém s®ben végig ugyanakkora. Az a kis nyo-
máskülönbség, ami a g®z hidrosztatikai nyomásából adódna a kém s® alja és teteje között, nyilván elhanyagolható a
telített g®z nyomásához képest.
Kiindulási állapotban a kém s® felül nyitott, benne vizet forralunk, tehát az alján 100◦
C-os a víz, felette 100◦
C-os
telített vízg®z van, amelynek nyomása megegyezik a küls® légnyomással (101 kPa).
Amikor bezárjuk a kém sövet, az alján még van egy pi i víz. A végállapotban a kém s® tetején a h®mérséklet
200◦
C, az alján pedig 100◦
C. N®tt a g®z átlagh®mérséklete, ezért a nyomása nem sökkenhetett. Csökkent viszont a
s¶r¶sége (legjobban a kém s® tetején, ahol a legjobban n®tt a h®mérséklete), s ez sak úgy lehetséges, hogy a g®z egy
része le sapódott vízzé. Alul tehát maradt víz (még n®tt is a mennyisége), amelyet 100◦
C-on tartottunk. A 100◦
C-os
telített g®z nyomása pedig a kezdeti, 101 kPa.
A kém s®ben tehát a végállapotban is 101 kPa a g®znyomás!
Megjegyzés. Érdekes, hogy ez a könny¶nek látszó feladat milyen nehéznek bizonyult a versenyz®k számára. Csupán
11 versenyz®nek sikerült jól megoldania. A legtöbb hibás érvelés szerint a nyomás n® a lezárt kém s®ben  akik így
gondolták, nem vették észre az alul maradó 100◦
C-os víz nyomásbeállító szerepét.
Egy megoldónak nehézséget okozott, hogy a Négyjegy¶-ben lév® táblázatban a vízg®z h®vezetési együtthatójára
egy sajtóhiba következtében 6 nagyságrenddel nagyobb érték szerepel, mint az igazi érték. A hibás adat gyelembe
vételével a g®z h®mérsékletét végig állandónak lehetett tekinteni, s a kém s® alján lév® vízben alakult volna ki 100◦
C
h®mérsékletkülönbség a víz alja és teteje között. Ennek feltételezésével viszont teljesen jól érvelt, ezért a Versenybizott-
ság az ® megoldását is elfogadta. (A Nemzeti Tankönyvkiadó azóta megígérte, hogy a hibát már a 2001-es kiadásban
korrigálni fogják.)3. Egy optikai rá sra, rá mer®legesen, monokromatikus fényt bo sátunk. A rá s, melynek szomszédos rései d távol-
ságra vannak egymástól, nem egészen szokványos: szélesebb és keskenyebb rések felváltva követik egymást. (Például a
páratlan sorszámúak szélessége a, a párosaké b, ahol b < a és mindkett® sokkal kisebb, mint d.) A rá s fenti sajátsága
jellegzetes, könnyen észrevehet® módon mutatkozik meg az elhajlási képben. Hogyan?
Készítsünk vázlatos ábrát az elhajlási képr®l, ha b ≪ a, illetve ha b ≈ a!
(Gnädig Péter)
Megoldás. Az optikai rá s egy síkba es®, egymással párhuzamos rések rendszere. A rések egymástól egyenl® távol-
ságra helyezkednek el; két egymás melletti rés távolságát (egy átlátszó és egy át nem látszó rész együttes vastagságát)
d-vel, a rések számát pedig N-nel szokás jelölni. Általában a rések egyenl® vastagságúak, ez a feltétel azonban most
nem teljesül.
Mivel a feladatban szerepl® optikai rá sra mer®legesen esik monokromatikus fény, feltehetjük, hogy a résekb®l
kilép® fényhullámok fázisa kilépéskor egyenl®, amplitúdójuk pedig arányos a rések szélességével.
E hullámok interferen iájának eredményét látjuk az erny®n. Az intenzitás az ered® hullámamplitúdó négyzetével
arányos. N rés esetén N hullám interferen iáját kell tanulmányoznunk; az interferen ia eredménye a találkozáskor
fellép® fáziskülönbségekt®l, az pedig az útkülönbségekt®l függ.
Két egymás melletti résb®l kilép® hullám közötti útkülönbség abban az irányban, amelyik az eredeti iránnyal α
szöget zár be: dsinα (lásd a 4. ábrát). Ha dsinα = λ/2, akkor az egymás melletti résekb®l érkez® hullámok ellentétes
fázisban találkoznak az erny®n. Ha a rések egyenl® szélesség¶ek (a = b), akkor a hullámok páronként kioltják egymást.
Ha a > b, akkor az ered® intenzitás
I ∼

N
2
(a − b)
2
.
Ez nem sak akkor következik be, ha dsinα = λ/2, hanem minden olyan esetben, amikor
dsinα = (2k + 1)
λ
2
, (k = 0, ±1, ±2, ...)
Azokban az esetekben pedig, amikor
dsinα = 2k
λ
2
= kλ, (k = 0, ±1, ±2, ...)
akkor valamennyi résb®l érkez® hullám azonos fázisban találkozik az erny®n. Ekkor az ered® intenzitás:
I ∼

N
2
(a + b)
2
.
Ábrázoljuk az erny®n látható elhajlási kép intenzitását az elhajlási irányt jellemz® sinα függvényében (5. ábra)!
(Ki siny elhajlási szögeknél sinα arányos az erny®n ténylegesen meggyelhet® eltérülési távolsággal.) Minthogy a is
és b is sokkal kisebb d-nél, N viszont általában elég nagy szám, az elhajlási képben sak a f®maximumok intenzitása
lesz észrevehet®. (Belátható, hogy ha a fentebb tárgyalt esetek egyike sem teljesül, vagyis az egymás melletti résekb®l
érkez® fényhullámok útkülönbsége nem egész számú többszöröse a félhullámhossznak, akkor a sok-sok helyr®l érkez®
hullám saknem teljesen kioltja egymást.)
Az erny®n tehát aránylag éles vonalakat látunk, egymástól egyenl® távolságra, de most sak minden másodiknak
lesz egyenl® az intenzitása. Felváltva követik egymást az er®sebb és a halványabb vonalak. Ez az a könnyen felismerhet®
jellegzetessége az elhajlási képnek, amit a kétféle résszélesség okoz. A vonalak annál élesebbek, minél több résb®l áll a
rá s, és külön az er®sebb, illetve külön a halványabb vonalak intenzitása annál inkább egyenl® egymással, minél kisebb
a rések szélessége a rések távolságához képest.
Ábrázoljuk még a kérdezett két spe iális esetet! Ha a ≈ b, akkor a 6. ábrán látható intenzitás-eloszlást, ha pedig
a ≪ b, akkor a 7. ábrán bemutatott intenzitás-eloszlást kapjuk.
Megjegyzés. Erre a feladatra nem született hibátlan megoldás, elég jó megoldást adott három versenyz®. Többen
megsejtették, hogy az elhajlási képen fényesebb és halványabb vonalak váltakozva követik egymást, de ezt  tévesen
 a szélesebb és keskenyebb réseken átjutó fény er®sségének különböz®ségével, mégpedig a fényer®-arány valamiféle
leképz®désével magyarázták. Pedig a keskeny és a széles résb®l jöv® fény intenzitásának aránya (b/a)
2
, míg az erny®n
a halvány és a fényes vonalak intenzitásának aránya (a − b)2
/(a + b)2
, s e kett® sak egyetlen esetben egyenl®: ha
b/a =
√
2 − 1.
A verseny végeredménye
Els® díjat (és 12 ezer Ft jutalmat) kapott: Buruzs Ádám, a Budapesti M¶szaki és Gazdaságtudományi Egyetem
mérnök-zikus hallgatója, aki a szegedi Radnóti Miklós Gimnáziumban érettségizett mint Mike János és Hilbert Margit
tanítványa.Második díjat (és 66 ezer Ft jutalmat) kaptak: Pozsgay Balázs, a pé si Magyar-német Nyelv¶ Iskolaközpont 12.
osztályos tanulója, Kotek László tanítványa és Siroki László, a debre eni Fazekas Mihály Gimnázium 11. osztályos
tanulója, Adorján László és Szegedi Ervin tanítványa.
Harmadik díjat (és 44 ezer Ft jutalmat) kaptak: Béky Ben e, a Fazekas Mihály F®városi Gyakorló Gimnázium
11. osztályos tanulója, Horváth Gábor tanítványa; Gáspár Merse El®d, az Eötvös Loránd Tudományegyetem zikus
hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; He-
ged¶s Ákos, az Eötvös Loránd Tudományegyetem zikus hallgatója, aki a pé si iszter i Nagy Lajos Gimnáziumban
érettségizett mint Orovi a Márkné és Kotek László tanítványa; Máthé András, az Eötvös Loránd Tudományegyetem
matematikus hallgatója, aki az ELTE Apá zai Csere János Gyakorló Gimnáziumban érettségizett mint Flórik György
tanítványa; Pápai Tivadar, a bar si Dráva Völgye Középiskola 11. osztályos tanulója, Horváth Feren tanítványa;
Pesti Gábor, a nagykanizsai Batthyány Lajos Gimnázium 12. osztályos tanulója, Piriti János tanítványa és S hmidt
András, a budapesti Szent István Gimnázium 12. osztályos tanulója, Moór Ágnes tanítványa.
Di séretet kaptak: Csillag Kristóf Béla, a Budapesti M¶szaki és Gazdaságtudományi Egyetem m¶szaki informa-
tika szakos hallgatója, aki a püspökladányi Kara s Feren Gimnáziumban érettségizett mint Szerdi János és Szegedi
Ervin tanítványa; Heged¶s Zoltán Csaba, a Szegedi Tudományegyetem programtervez® matematikus hallgatója,
aki a miskol i Andrássy Gyula M¶szaki Középiskolában érettségizett mint Gonda Gáspár tanítványa; Patay Ger-
gely, a Budapesti M¶szaki és Gazdaságtudományi Egyetem mérnök-zikus hallgatója, aki a debre eni Tóth Árpád
Gimnáziumban érettségizett mint Ková s Miklós és Szegedi Ervin tanítványa és Pápai Péter, a bar si Dráva Völgye
Középiskola 12. osztályos tanulója, Horváth Feren tanítványa.
⋆
Az ünnepélyes díjkiosztásra 2000. november 17-én az ELTE TTK új lágymányosi épületének földszinti nagy el®-
adótermében került sor. Bevezet®jében a Versenybizottság elnöke emlékeztetett arra, hogy ez a verseny több, mint
száz éves múltra tekinthet vissza, s a millenniumi 2000. évben felidézte, kik nyerték a versenyt 100, 75, 50 és 25 évvel
ezel®tt.
1900-ban Juvan z Ireneusz és Szmodi s Kázmér lettek az akkor még tisztán matematikai tanulóverseny gy®zte-
sei. Juvan z Ireneusz kés®bb Szilárd Leónak tanította a matematikát a VI. kerületi F®reálban, majd rövid ideig a
Mintagimnázium igazgatója is volt. A Szmodi s saládból 1900-ban Kázmér, két év múlva Hildegárd iratkozott fel a
nyertesek közé.
1925-ben már külön matematikai és külön zikai versenyt hirdetett meg az Eötvös Loránd Matematikai és Fizikai
Társulat. Mindkett®ben els® helyezett lett az akkor 17 éves Teller Ede; matematikából hármas holtversenyben, zikából
egyedül lett els®. Tudjuk, hogy milyen szeretettel és nosztalgiával emlékszik vissza erre a ma 90-es éveiben járó id®s
tudós.
1950-ben, a matematikusoktól különvált Eötvös Loránd Fizikai Társulat rendezésében lebonyolított versenyt Mráz
(Zimányi) József és Rozványi Iván nyerte meg holtversenyben, természetesen mindketten zikusok lettek.
1975-ben a Versenybizottság nem adott ki els® díjat. A második díjon ketten osztoztak: Szép Jen®, aki ma az
ELTE Szilárdtestzikai tanszékén dolgozik és Zimányi Gergely, aki jelenleg az Egyesült Államokban kutatja és tanítja a
zikát. A névazonosság nem véletlen: Gergely Zimányi József a. A díjkiosztó ünnepségen mindkett®jük képviseletében
megjelent Zimányi Józsefnét a résztvev®k tapsa köszöntötte.
A 2000. évi Eötvös-verseny nyertesei (ld. a 8. ábrát )
Els® sor (balról jobbra): Siroki László, Buruzs Ádám és Pozsgay Balázs.
Második sor: Gáspár Merse El®d, S hmidt András, Pápai Tivadar, Béky Ben e, Máthé András és Heged¶s Ákos.
Harmadik sor: Heged¶s Zoltán Csaba, Pápai Péter, Patay Gergely, Csillag Kristóf Béla.
Ezután került sor az idei feladatok megoldásának ismertetésére és diszkussziójára. Az els® feladathoz kap solódóan
Gnädig Péter mutatott be érdekes kísérleteket a még sak általános iskolás Sükösd Attila aktív közrem¶ködésével. (At-
tila zikus édesanyja biztosította a kísérlethez szükséges eszközöket.) A második feladat megoldásának bemutatására
a Versenybizottság elnöke váratlanul három versenyz®t hívott ki a táblához. k a hallgatóság számára is meggy®z®en,
egymást kiegészítve ismertették saját megoldásaikat. Csak a díjkiosztásnál derült ki kés®bb, hogy ®k lettek az idei
verseny els® három helyezettje. A harmadik feladat megoldását újra a Versenybizottság elnöke mutatta be, aki ezután
a Társulat alelnökeként ünnepélyesen kiosztotta a 2000. évi Eötvös-verseny díjait és a di séreteket.
A díjakhoz a már említett pénzjutalmakon kívül a Nemzeti Tankönyvkiadó könyvutalványokat is felajánlott, össze-
sen 50 ezer forint értékben, melyeket a Kiadó képvisel®je személyesen adott át. A nyertes diákokat elkísér® tanárok
ugyan sak a Nemzeti Tankönyvkiadó, valamint a M¶szaki-Calibra Kiadó és a TYPOTEX Kiadó által felajánlott
könyvek közül válogathattak.
Az ünnepélyes díjkiosztás záróaktusaként a jelenlév® diákok és tanárok régebbi Eötvös-verseny nyertesekkel ismer-
kedhettek meg, ha még eddig nem ismerték volna ®ket személyesen: Holi s László (1949), Ti hy Géza (1963), Gnädig
Péter (1965) és Szép Jen® (1975) pályáját dönt®en befolyásolta a Eötvös-versenyen elért sikeres szereplés.
Radnai Gyula
a Versenybizottság elnökel
R
A
A
l
y=R
y
y=0
α
α
ε
ε
K
+∆K K
N
mg
mg
d
mg
d
mg
d
mg
d
mg mg
mg
mg
mg
mg mg 2 2
4
3R
2R = l
R
α
α
d
d
d d α
α
α
α d
α
α
a b
2
( − )
a+b)2
(
0
α sin
2d 2d 2d 2d 2d 2d
λ
2d 2d 2d 2d
λ 5 λ 4 λ 3 λ 2 − − − − − λ λ λ λ λ 2 3 4 52a)2 (
0
α sin λ λ λ λ
d d d
2 −2
d
a b
> > 0 b a
α
−
sin
a2
0
2d 2d 2d 2d 2d
λ
2d
λ
2d 2d 2d 2d
λ 2 λ 3 λ 4 λ 5 λ λ λ − − −2 3 4 λ 5
−
