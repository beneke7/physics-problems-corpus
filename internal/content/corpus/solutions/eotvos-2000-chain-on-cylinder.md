---
id: eotvos-2000-chain-on-cylinder
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2000-chain-on-cylinder
solution_type: official
source_document: solution-document-eotvos-2000-s
source_pdf: cache/phoxiv/eotvos/2000_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2000_S.pdf."
---

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
(Hasonló módon járunk el sok esetben a 
zikában; például amikor az egyenletesen gyorsuló mozgásnál abból, hogy ∆v
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
Ez ki sit gyanús!
A lán egyensúlyának szükséges és elégséges feltétele, hogy az érint® és a sugár irányú er®k (er®-összetev®k) ered®je
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
