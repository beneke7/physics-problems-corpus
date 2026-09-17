---
id: solution-document-eotvos-2007-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2007_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [eotvos-2007-autotransformer-induction, eotvos-2007-glass-plates-water-capillary, eotvos-2007-lens-mirror-equivalence]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2007_S.pdf."
---

2007. október 26-án délután 3-tól este 8-ig zajlott az 1949-es felújítása óta immár ötvenkilen edik Országos Eöt-
vös Loránd Fizikaverseny, népszer¶ nevén Eötvös-verseny. Az ország 15 városában várták a verseny helyi szervez®i
azokat a diákokat, akik vagy még középiskolások voltak ebben a tanévben, vagy 2007-ben fejezték be középiskolai
tanulmányaikat. (Nem sak magyar állampolgárságú, hanem külföldi diákok is indulhatnak az Eötvös-versenyen, akik
magyar nyelven tanulják/tanulták a zikát Magyarországon, vagy valamelyik környez® országban.) A feladatokat a
Versenybizottság állítja össze, ennek elnöke Radnai Gyula, tagjai Gnädig Péter, Honyek Gyula és Károlyházy Frigyes.
Megoldási id® 300 per ; a megoldáshoz bármilyen írott vagy nyomtatott könyv, füzet felhasználható, amit a diák ma-
gával hoz a versenyre. Saját zsebszámológépét is használhatja, de természetesen a verseny ideje alatt nem használhat
mobiltelefont. A beérkezett dolgozatokat a Versenybizottság bírálja el, dönt a díjakról, di séretekr®l.
Ebben az évben 109 versenyz® adott be megoldást a feladatokra. Tovább sökkent a középiskolás versenyz®k
száma, míg az érettségizetteké valamennyire stabilizálódott. Legtöbben idén is a F®városi Fazekas Mihály Gyakorló
Gimnáziumból jöttek és adták be dolgozataikat.
Ismertetjük a feladatokat, s azok helyes megoldását.
1. Két téglalap alakú üveglemezt egyik élük mentén egymáshoz támasztunk úgy, hogy 2ϕ szöget zárjanak be egymással.
Az így rögzített lemezeket lassan vízbe engedjük az ábrán látható módon. A víz, amely tökéletesen nedvesíti az üveget,
a felületi feszültség hatására a két lemez között bizonyos H magasságig felemelkedik.
1. ábra
Mekkora ez a H magasság, ha a lemezek vízszintesen tartott érintkezési vonala
a) h = 30 mm,
b) h = 15 mm,
távolságra van a szabad vízfelszínt®l? Ábrázoljuk vázlatosan, hogyan változik H a fokozatosan sökken® h függvé-
nyében!
Feltehetjük, hogy a lemezek egymással érintkez® éle sokkal hosszabb, mint h, továbbá a lemezek szimmetriasíkja
mindvégig függ®leges.
Adatok: σvíz = 0,072 N/m, ̺víz = 1000 kg/m3
, 2ϕ = 6◦
.
(Varga István feladata)
Megoldás. Mivel a két üveglemez elég kis szöget zár be egymással, a köztük felemelked® víz felületét jó közelítéssel
vehetjük félhenger alakúnak. Így felírhatjuk (a félhenger sugarát r-rel jelölve):
ϕ ≈ tgϕ =
r
h − H
.
Me hanikai egyensúly esetén a víz felületi feszültségéb®l adódó görbületi nyomásnak és a felemelkedett vízoszlop
H magasságának megfelel® hidrosztatikai nyomásnak meg kell egyeznie, vagyis
σ
r
= H̺g.
(Azért nem
2σ
r
a görbületi nyomás, mert a felszín nem gömb, hanem henger alakú.)
Amíg
σ
r
> H̺g, addig a folyadékszint még emelkedik az üveglapok között. Ha pedig már túlfutott és H̺g >
σ
r
lett, akkor a vízszint sökkenni kezd. A kialakuló állapot stabil egyensúlyi állapot kell, hogy legyen.
Vizsgáljuk meg, milyen H értékre teljesül a
σ
(h − H)ϕ
= H̺gegyensúlyi feltétel! Átalakítva és az ismert adatokat behelyettesítve
H(h − H) =
σ
̺gϕ
= 1,4 · 10−4
m2
= 140 mm2
.
A magasságokat mm-ben mérve az alábbi másodfokú egyenletet kell megoldanunk:
H2
− hH + 140 = 0.
Ennek h = 30 mm esetén két megoldása lesz: H1 = 5,8 mm és H2 = 24,2 mm. E kett® közül azonban sak az egyik, a
kisebb érték a stabil, a másik instabil egyensúlyi állapotot határoz meg! A stabilitási viszonyokat is megvizsgálhatjuk,
ha H függvényében ábrázoljuk a ̺gH és a
σ
(h − H)ϕ
kifejezéseket (2. ábra). Attól függ®en, hogy melyik kifejezés a
nagyobb, a víz felszíne a bejelölt nyila skáknak megfelel®en fel- vagy lefelé mozog. Látható, hogy H1 a stabil, H2 pedig
az instabil megoldás.
2. ábra
A fenti ábra addig helyes, amíg
h >
√
4 · 140 = 23,7 mm,
ekkor pozitív ugyanis a fenti másodfokú egyenlet diszkriminánsa.
De mi történik akkor, amikor az üveglapok lassú leengedése közben elérjük a h = 23,7 mm értéket, és még tovább
süllyesztjük az üveglapokat? h = 23,7 mm esetén H =
h
2
magasan áll a vízszint, majd a következ® pillanatban (amikor
a 2. ábrán látható hiperbolának és az egyenesnek már nem lesz metszéspontja, tehát a görbületi nyomás minden
helyzetben nagyobb lesz, mint a hidrosztatikai nyomás) a víz emelkedni kezd és egészen a két üveglap érintkezéséig
felszalad! Ett®l kezdve H = h lesz végig.
Hogyan változik H a fokozatosan sökken® h függvényében? A választ a 3. ábra mutatja, a kérdéses helyzetekben
pedig a numerikus értékek:
a) h = 30 mm esetén H = 5,8 mm;
b) h = 15 mm esetén H = 15 mm.
3. ábra
Megjegyzések: A feladatra adott hibás megoldások közül három tipikusat érdemes külön is megemlíteni.
1. Többen a körkeresztmetszet¶, függ®leges hajszál s®ben felemelked® vízre érvényes képletet próbálták meg itt
alkalmazni. (Ekkor jelenik meg a
2σ
r
görbületi nyomás!) Nem kaphattak helyes eredményt.
2. Sokan a felemelkedett vízmennyiség súlyát tették egyenl®vé a felületi feszültségb®l származó, felfelé húzó er®vel.
Ez azért hibás, mert a ferde, nem függ®leges üveglemezek által kifejtett nyomóer®nek is van függ®leges összetev®je, amitaz er®egyensúlynál gyelembe kellene venni. A probléma hasonló ahhoz, ami a jól ismert hidrosztatikai paradoxonnál
jelentkezik.
3. Néhányan energetikailag próbálták megoldani a feladatot úgy, hogy a felemelkedett víz helyzeti energiáját tették
egyenl®vé a felületi feszültség σ · ∆A munkájával. Ez ugyanúgy hibás, mintha egy rugóra függesztett test egyensúlyi
helyzetének meghatározásához a nehézségi er® és a rugóer® munkájának egyenl®ségét írnánk fel. Jól tudjuk, hogy ez az
egyenl®ség sak a rugón rezg® test mozgásának széls® helyzeteire teljesül, ahol éppenhogy nin s a test egyensúlyban.
Egyensúlyi állapotban a mozgási energia nem hanyagolható el, s®t, éppen akkor maximális!
2. Egy terebélyes vasmaggal ellátott, nagy öninduk iójú, de mégis elhanyagolható ohmikus ellenállású teker s végeit
U feszültségre méretezett izzón keresztül kötjük össze. Ha az A és B pontok közé U/2 eektív érték¶ váltakozó feszültséget
kap solunk, az izzó nagyon halványan világít.
4. ábra
Mivel a teker s közepér®l is van egy C kivezetés, megpróbáljuk a feszültségforrás pólusait az A és C pontokhoz kötni.
Megváltozik-e az izzón átfolyó áram er®ssége, és ha igen, hogyan? Az ábrán bejelöltük a f®ágban folyó I(t) pillanatnyi
áram irányát. Hogyan folyik az áram ugyanekkor a teker sben?
(Károlyházy Frigyes)
Megoldás. Három dolgot kell egymás után észrevennünk, hogy viszonylag gyorsan eljussunk a helyes válaszhoz.
1. Mivel a teker s ohmikus ellenállása elhanyagolható, ezért UAC ≈
U
2
kell legyen, hogy ne folyjék a generátoron
végtelen nagy áram.
2. Mivel a uxusváltozás mértéke a teker s különböz® részein ugyanakkora, ezért mindkét félteker sen ugyanakkora
az indukált feszültség, tehát UAC = UCB.
3. Mivel a lámpa párhuzamosan van kap solva a generátor plusz a teker s jobb oldali felével, ezért
Ulámpa = Ugen. + UCB =
U
2
+
U
2
, tehát Ulámpa = U.
Így a lámpa az üzemi feszültséget kapja, ezért jól ég!
Az áramirányok meghatározásához  Werner Miklós ötlete alapján  rajzoljuk át a megadott kap solást a következ®
módon: képzeljük el, hogy a teker s bal oldali részét alkotó huzalt hosszában kettévágjuk, s így ezen az oldalon két,
egymás mellett futó teker shez jutunk (5. ábra).
5. ábra
Kaptunk egy AC teker set, amire a generátor feszültségét kap soljuk, és egy AB teker set, amire a lámpát kötöttük.
Ez bizony egy transzformátor! A primer menetszám
N
2
, a primer áram (a feladatban alkalmazott jelölés szerint) I.
A szekunder menetszám N, tehát a szekunder áram
I
2
lesz.
C-t®l B felé
I
2
, C-t®l A felé ugyan sak
I
2

I −
I
2
=
I
2

áram folyik (6. ábra).6. ábra
Megjegyzések. Bemutatunk további három megoldást, amellyel a versenyz®k eljutottak a helyes válaszhoz. Mindegyi-
kük ráérzett a feladatban rejl® transzformátorra (ténylegesen autotranszformátornak nevezik a feladatban megadott
kap solást), és helyesen alkalmazták az általuk ismert összefüggéseket. Nem részletezzük, sak vázoljuk a megoldásnál
követett gondolatmeneteket.
7. ábra
1. Kon zer József a 7. ábrán látható módon rajzolta át a kap solást. Figyelembe véve a teker srészek közötti szoros
satolást, a köl sönös induk iós együttható: M =
p
L1L2. Az indukált feszültségek:
U1 = −L1
∆I1
∆t
+ M
∆I2
∆t
,
illetve
U2 = −L2
∆I2
∆t
+ M
∆I1
∆t
.
Mivel most L1 = L2 = L = M, ezért
U1 + U2 = 0.
A generátor feszültsége:
U
2
= −U2 = I1R − U1,
ebb®l pedig I1R = U következik.
8. ábra
2. Kónya Gábor a 8. ábrán látható módon rajzolta át a kap solást. A szinuszos váltakozó áram tárgyalására
kidolgozott komplex formalizmus ismeretében ® az alábbi egyenleteket tudta felírni:
U1 = jωL(I1 − I2),
illetve
U2 = jωL(I2 − I1).
ezekb®l következik, hogy U2 = −U1. Mivel
U1 = U2 + I2R és U1 =
U
2
,ezért
U
2
= −
U
2
+ I2R, vagyis U = I2R
kell legyen. (j-vel az ún. komplex egységgyököt,
√
−1-et jelöltük.)
3. Szolnoki Lénárd úgy rajzolta át a kap solást (9. ábra), hogy még jobban emlékeztessen egy veszteségmentes, zárt
vasmagú transzformátorra. Mivel a transzformátor szekunder oldalán ellentétes irányú a feszültség, mint a primer
oldalon, ezért a fels® hurokra felírva a második Kir hho-törvényt, kapjuk:
U
2
+
U
2
− U∗
= 0, tehát U∗
= U.
9. ábra
Mindhárom megoldó már a saját rajzán helyesen jelölte be az áramok irányát.
3. Egy tanár az alábbi problémát t¶zi ki tehetséges diákjai számára: Vizsgáljátok meg elméletileg, hogy helyettesíthet®-
e egy vékony gy¶jt®len séb®l és egy vele párhuzamos síktükörb®l álló optikai rendszer egyetlen homorú tükörrel!
Anna megvizsgál egy olyan esetet, amikor a gy¶jt®len se f fókusztávolsága 30 cm, és a len se ℓ = 20 cm-re
helyezkedik el a tükör el®tt. Ügyesen megválasztott tárgytávolságok felhasználásával meg tudja határozni a keresett
homorú tükör f∗
fókusztávolságát és e tükörnek a len se helyét®l mért x távolságát.
Balázs általánosan akarja megoldani a feladatot, és addig nem nyugszik, míg olyan összefüggéseket nem talál, melyek
megadják f∗
-ot és x-et f és ℓ függvényében.
Ce ília végül észreveszi, hogy nem minden f és ℓ értékpár esetén helyettesíthet® homorú tükörrel a fenti optikai
rendszer, ezért átgondolja, hogy milyen feltétel teljesülése esetén érvényes Balázs megoldása.
Kövessük nyomon Anna, Balázs és Ce ília munkáját! Hogyan oldják meg a maguk elé t¶zött feladatokat?
(Honyek Gyula)
Megoldás. Els® ránézésre is látszik, hogy ha helyettesíthet® ez a len se + síktükör együttes egyetlen homorú
tükörrel, akkor annak geometriai középpontja ott lesz, ahol most a len se egyik, F1 fókuszpontja van. Ha ugyanis
ebbe a fókuszba helyezünk egy világító, pontszer¶ fényforrást, akkor az innen kiinduló fénysugarak a len sén való
áthaladás után az optikai tengellyel párhuzamosan haladnak, mer®legesen érik el a tükör síkját, utána önmagukba
ver®dnek vissza. A síktükörr®l visszavert sugarak újra elérik a len sét s azon megtörve a len se el®bbi, F1 fókuszpontja
felé tartanak. Gömbtükör esetén pedig a gömb Otükör középpontjából kiinduló fénysugarak ver®dnek úgy vissza, hogy
ugyanezen pont felé tartanak.
Könnyen megszerkeszthetjük annak a tárgynak a képét, amelyet a len se fókuszpontjába állítottunk (10. ábra).
10. ábraFordított állású, a tárggyal megegyez® nagyságú, valódi kép keletkezik a tárgy helyén. F1 = Otükör tehát, és ez
független attól, milyen ℓ távolságra van a síktükör a len sét®l.
a) Anna 20 m-re helyezte el a tükröt az f = 30 m fókusztávolságú len se mögé. Hogyan határoznánk meg Anna
helyében legegyszer¶bben a leképez® rendszer F∗
fókuszpontjának a helyét? Úgy, hogy az optikai tengellyel párhuzamos
fénynyalábot bo sátanánk a len sére, és megnéznénk, hogy mi a tartópontja annak a sugárnyalábnak, amely ebb®l a
párhuzamos nyalábból keletkezik, miután megtörik a len sén, visszaver®dik a síktükrön, majd újta áthalad a len sén
(11. ábra). Biztosak lehetünk abban, hogy F∗
helye már nem sak f-t®l, hanem ℓ-t®l is függeni fog.
11. ábra
Kövessük Anna gondolatmenetét!
A belép® parallelnyaláb a len se mögött 30 m-re lév® F2 fókuszpont felé tart, miután megtörik a len sén. Ráesik
a len sét®l 20 m-re lév® síktükörre, s mivel a tükör mögött 10 m-re lév® F2 pont felé tartott, ezért a tükörr®l
visszaver®dve a tükör el®tt 10 m-re lév® ponton fog áthaladni. Ez a pont t = 10 m-re van a len sét®l; keressük meg
egy ilyen távol lév® tárgy képét!
1
10
+
1
k
=
1
30
,
amib®l k = −15 m adódik. Látszólagos kép keletkezik, ez azt jelenti, hogy a len séb®l olyan sugárnyaláb fog kilépni,
amelynek tartópontja egy, a len se mögött 15 m-re lev® pont. Ez tehát a leképez® rendszer F∗
fókuszpontja!
Annának tehát a helyettesít® homorú tükör egy újabb jellemz® pontját sikerült megtalálnia. Mivel a homorú tükör
fókuszpontja éppen a gömb sugarának közepén van, ezért a fókusztávolságot úgy is megkaphatja, hogy az F∗
fókuszpont
és a korábban már megtalált Otükör geometriai középpont távolságát határozza meg:
f∗
= F∗
Otükör = 30 cm + 15 cm = 45 cm.
Hová, a len se h¶lt helyét®l mekkora x távolságra kell tenni ezt a homorú gömbtükröt? Mivel F∗
15 m-re van
attól a ponttól, ahol a len se állt, ezért a keresett távolság (12. ábra):
x = 15 cm + 45 cm = 60 cm.
12. ábra
b) Balázs is követi Anna gondolatmenetét, de paraméteresen határozza meg a kérdezett mennyiségeket.
Az F∗
fókuszpont helyének meghatározása:
t = ℓ − (f − ℓ) = 2ℓ − f,
1
2ℓ − f
+
1
k
=
1
f
, ahonnan k =
(2ℓ − f)f
2ℓ − 2f
< 0.
A keresett tükör fókusztávolsága:
f∗
= f + |k| = f − k = ... =
f2
2(f − ℓ)
> 0.A homorú tükör távolsága a len se helyét®l:
x = 2f∗
− f = ... =
fℓ
f − ℓ
> 0.
c) Ce ília felismerése: f > ℓ kell legyen, mert a feladatban azt kellett megvizsgálni, hogy homorú gömbtükörrel
lehet-e helyettesíteni a (len se + síktükör) leképez® rendszert. Ezen kívül azt is Ce íliának kell észrevennie, hogy Anna
és Balázs megoldása sak a tárgytér meghatározott tartományára érvényes. Jelen esetben azokra a tárgypontokra,
amelyek a len sének a síktükörrel ellentétes oldalán helyezkednek el. Dehát ez természetesen teljesül, ha valódi tárgyat
képez le az optikai rendszer.
Megjegyzés. A len se + síktükör rendszer leképezése úgy is vizsgálható, hogy a len sének és a len se tükörképének,
mint két len séb®l álló len serendszernek a leképezését követjük végig, majd a kapott képet visszatükrözzük a síktü-
körrel. Ezért is meglep®, hogy a leképezés végülis egyetlen homorú tükörrel helyettesíthet®, hiszen egymástól távol
elhelyezked® két len se leképezése sohase helyettesíthet® egyetlen len se adta képpel. A vékonylen se síkja helyett két
f®sík jelenik meg, s sak az ezekt®l mért t, k és f távolságokra lehet felírni a leképezési törvényt.
Nos, a mi esetünkben a két len se fókusztávolsága egyenl®, ilyenkor a f®síkok is szimmetrikusan helyezkednek el,
s amikor a szerkesztés végén a képet (és a képoldali f®síkot is) visszatükrözzük, a két f®sík egybe fog esni! Az ide, a
f®síkok közös helyére elhelyezett gömbtükörrel ekkor már helyettesíthet® lesz a len séb®l és a síktükörb®l álló rendszer.
A f®síkokkal történ® leképezés nem középiskolai, hanem f®iskolai, egyetemi tananyag; ennek ellenére volt olyan
versenyz®, aki ezt a gondolatmenetet próbálta meg követni. Hasonlóképpen egyetemi tananyag az úgynevezett mát-
rixoptika is, amellyel Pálfalvi László mutatja meg e feladat megoldását a 179. oldalon.
Az eredményhirdetés
2007. november 30-án került sor az ünnepélyes eredményhirdetésre az Eötvös Loránd Tudományegyetem Ortvay
Rudolfról elnevezett el®adótermében.
Bevezetésként a Versenybizottság elnöke emlékezett meg Tolnai Jen®r®l, aki 100 évvel ezel®tt nyerte meg a Társulat
tanulóversenyét, Neukomm Gyuláról, a KöMaL egykori f®szerkeszt®jér®l, aki ötven éve hunyt el, és ebben az évben
sikerült a sírját védetté nyilvánítani, Boros Jánosról, a Versenybizottság volt tagjáról, akinek éppen ezen a napon lett
volna a születésnapja és Varga Istvánról, a sak nemrég elhunyt zikatanárról, aki sziporkázó ötleteivel támogatta a
Versenybizottság munkáját.
Ezután az 50 évvel ezel®tt, 1957-ben rendezett Eötvös-versenyt elevenítette fel. Bemutatta az akkori feladatokat
és a díjazottak egykori fényképét is a KöMaL képar hívumából. Papp Kálmánt, a verseny 50 évvel ezel®tti nyertesét
sajnos nem sikerült elérnie, és nem tudott eljönni Cserteg István sem, aki akkor a második helyezett volt. Mindket-
ten villamosmérnökök lettek kés®bb. Nem így Szatmáry Zoltán, a harmadik helyezett piarista diák, aki Neukomm
Gyula hathatós támogatásával tudott bekerülni az ELTE zikus szakára 1957-ben. A KFKI kutatója, a m¶egyetemi
tanreaktor Kossuth-díjas igazgatója személyesen idézte fel egyetemre kerülésének izgalmas történetét.
A 25 évvel ezel®tt díjazottak közül is sak egyetlen versenyz® tudott eljönni: Károlyi Gyula, aki ma már egyetemi
oktató, a KöMaL matematika szerkeszt® bizottságának tagja. Csörg® Tamás, Erd®s László és Tóth Gábor, az akkori
els® díjasok valamennyien hazai és külföldi kutatóintézetek, egyetemek sikeres kutatói. A KöMaL tehetségfejleszt®
munkáját di séri, hogy az 50 évvel ezel®tt díjazott mindhárom versenyz®, a 25 évvel ezel®tt díjazott hat versenyz®
közül pedig öten voltak a KöMaL feladatmegoldói, és fényképük is megjelent a Lapokban, melyet most kivetítve
láthatott és tapsolhatott meg a hálás közönség.
Ezután került sor a 2007. évi feladatok bemutatására, a helyes megoldások ismertetésére. Mindegyik megoldást
kísérleti bemutató követte: az els® két feladathoz Honyek Gyula, a harmadikhoz Radnai Gyula mutatott be érdekes
kísérleteket. Az üveglapok közé felfutó víz, a meglep®en jól ég® kis izzó, valamint a len se plusz síktükörrel és az ezeket
helyettesít® gömbtükörrel egymás mellett el®állított éles képek azokat is meggy®zték, akik esetleg kételkedtek volna a
bemutatott megoldások helyességében. Szeren sére itt nem voltak ilyenek,  a közönség f®leg a zikát ért® és szeret®
atalokból, tanáraikból és volt Eötvös-verseny nyertesekb®l állt. Itt volt a Társulat egész vezérkara, Kádár György
f®titkár, Pákó Gyula, a középiskolai szak soport elnöke és Sólyom Jen® akadémikus, a társulat elnöke is, aki ezek után
mosolyogva adta át a díjakat a verseny gy®zteseinek.
Els® díjat és az ezzel együtt járó Eötvös-verseny érmet kapta a verseny 1. helyezettje: Werner Miklós, a BME
hallgatója, aki az ELTE Apá zai Csere János Gyakorló Gimnáziumában érettségizett Flórik György tanítványaként.
Ugyan sak els® díjat kapott a 2. helyezett Kónya Gábor, az ELTE hallgatója, aki a Fazekas Mihály F®városi Gyakorló
Gimnáziumban érettségizett Horváth Gábor tanítványaként.
Második díjat is két versenyz® kapott: Eisenberger András, a Fazekas Mihály F®városi Gyakorló Gimnázium
12. évfolyamán Horváth Gábor tanítványa és Kon zer József, a BME hallgatója, aki a szlovákiai Révkomárom Selye
János Gimnáziumában érettségizett Hevesi Anikó és Szabó Endre tanítványaként.
Harmadik díjat nyert Szolnoki Lénárd, a Debre eni Református Kollégium Dó zy Gimnáziumának 12. osztályos
tanulója, Tófalusi Péter tanítványa.Di séretet kapott a verseny 611. helyezettje, helyezésük szerinti sorrendben a következ®k: K®rösi Márton, az
ELTE hallgatója, aki a békés sabai Szent-Györgyi Albert Gimnáziumban érettségizett Varga István tanítványaként;
Almási Gábor, a pé si Leöwey Klára Gimnázium 12. osztályos tanulója, Kotek László és Simon Péter tanítványa;
Papp László, az ELTE hallgatója, aki a romániai Margitta O. Goga Nemzeti Kollégiumában érettségizett Bogdán
Károly és Veres Zoltán tanítványaként; Roósz Gerg®, a Szegedi Tudományegyetem hallgatója, aki a szegedi Radnóti
Miklós Gimnáziumban érettségizett Mez® Tamás és Mike János tanítványaként; Meszéna Balázs, az ELTE hallga-
tója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett és Taká s Lajos tanítványa volt; Lovász
László Miklós, aki ugyanennek a gimnáziumnak 12. osztályos diákja, Horváth Gábor tanítványa.
Az els® díjjal 20 ezer forint, a másodikkal 15 ezer, a harmadikkal 10 ezer forint jutalom járt együtt, és még a
di séretet nyert versenyz®k is kaptak 5 ezer forintos könyvutalványokat az ELFT, az INDOTEK Befektetési Zrt.,
valamint Gutai László (USA) által felajánlott támogatások jóvoltából. Mind a 11 kitüntetett versenyz® megkapta
Szatmáry Zoltán és Aszódi Attila Csernobil . könyvét a Typotex Kiadótól. A versenyz®k tanárai a Typotex, a
M¶szaki és a Vin e kiadók könyveib®l válogathattak a Matfund Alapítvány pártoló támogatásával.
Ezek után már sak a közös fénykép elkészítése volt hátra, amelyet Olvasóink a KöMaL hátsó borítóján tekinthet-
nek meg. A programot záró tapasztalat sere-beszélgetéshez a Ramasoft Zrt. gondoskodott elegend® enni-innivalóról.
A hangulat idén is jó volt: vidáman, felszabadultan tárgyalták a verseny tapasztalatait a régi és új versenyz®k, tanárok
az ország különböz® részeir®l, egyetemi tanárok Budapestr®l és Kolozsvárról. Gondolatban itt volt Béky Ben e, nemrég
még Eötvös-versenyen díjat nyert diák is, ma már tanulmányainak befejezéséhez közeled® mérnök-zikus hallgató, aki
Párizsból küldte üdvözletét egy beszédfelismerés témájú programról, amelyen a hazai egyetemi képzés keretében vesz
részt. Aki pedig egyszer kedvet kapott a tanuláshoz, nem is tudja abbahagyni; ® most matematikából szeretne újabb
diplomát szerezni. Azt üzenem a versenyz®knek, tanuljanak, mert tanulni jó befektetés és tiszta öröm! Bár inkább nem
is üzenek semmit, mert aki az Eötvös-verseny eredményhirdetésére bejutott, az ezt már úgyis tudja. Gratulálok nektek
és további sok sikert kívánok!
Ehhez satlakozik a Versenybizottság is. Bízzunk a lendület megmaradásában. . .
