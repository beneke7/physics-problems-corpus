---
id: eotvos-2021-beach-ball
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2021-beach-ball
solution_type: official
source_document: solution-document-eotvos-2021-s
source_pdf: cache/phoxiv/eotvos/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2021_S.pdf."
---

3. feladat. Egy felfújható strandlabda könnyű, vékony, igen hajlékony, de nem
nyújtható műanyagból készült. Felfújt állapotában a labda majdnem pontosan gömb
alakú, sugara 20 cm. Egy kı́sérletben a labdát űrtartalmának feléig felfújjuk levegő-
vel, majd egy vı́zszintesen tartott, nagy kiterjedésű sı́klap segı́tségével fokozatosan
vı́z alá nyomjuk, mı́g az teljesen el nem merül a vı́zben. Vázoljuk fel, milyen ala-
kot vesz fel a vı́z alá nyomott labda! Ha tudjuk, határozzuk meg az alak releváns
méreteinek számszerű értékeit is!
(Vigh Máté)
Megoldás. A feladat szövege szerint a labda anyaga
”
igen hajlékony, de nem
nyújtható”. Ezért az egyetlen lehetséges módszer a labda térfogatának csökkenté-
sére, ha a labdát
”
behorpasztjuk”(első rajz a 2. ábrán), ekkor a felület két (ugyan-
olyan r sugarú) gömbfelületdarabból áll. A behorpadt gömbfelületen azonban újabb
horpadás is lehetséges – ezúttal kifele –, ahogy az ábra második rajzán látszik. Ezt
tetszőleges számban megismételhetjük, ı́gy akár közel sı́klapot is kialakı́thatunk,
amely azonban a valóságban egy kicsit
”
ráncos”, vékony, ki-behajló gömbfelszı́nda-
rabokból áll (középső rajz).
Látni fogjuk, hogy ﬁzikai feltételek miatt a labda alsó és felső része is ı́gy
fog deformálódni (negyedik rajz). A
”
ráncokat” (amelyek elvileg tetszőlegesen ﬁno-
mak lehetnek, de egy valódi kı́sérletben azért látszanak) már nem ábrázolva egy
gömbövet kapunk (utolsó rajz a 2. ábrán).
2. ábra
Eddig csak a geometria által lehetséges deformációkról beszéltünk. Ezután
meg kell vizsgálnunk, hogy az adott kı́sérletben a ﬁzikai feltételek következtében
milyen alak jön létre. A labda tetejét a sı́klap nyomja le a vı́z alá, ı́gy ott a labda
rásimul a felületre. Érdekesebb kérdés a labda aljának alakja: mivel a labda
”
igen
hajlékony”, a gyűrt felületen olyan alakot vesz fel, hogy a belső és a külső nyomás
mindenhol azonos legyen. A labdán belül mindenhol azonos a légnyomás (a levegő
csekély aerosztatikus nyomását elhanyagoljuk), a vı́z nyomása viszont a mélységgel
változik (p = p0 + gh), ı́gy a labda aljának is vı́zszintes sı́klapnak kell lennie
(3. ábra).
A labda alakja tehát egy vı́zszintes sı́klapokkal határolt gömböv.
Középiskolai Matematikai és Fizikai Lapok, 2022/2 109
i
i
2022.2.6 – 19:38 – 110. oldal – 46. lap KöMaL, 2022. február
i
i
i
i
i
i
3. ábra
4. ábra
A feladat második részében meg kell hatá-
roznunk a gömböv méreteit. A jelölések a 4. áb-
rán láthatók.
Vizsgáljuk először a geometriai feltételt:
a gömböv térfogata a gömb térfogatának fele.
(A gömböv térfogata képletgyűjteményekből ki-
kereshető, vagy integrálással könnyen kiszámı́t-
ható.)
πr2
(h1 + h2) −
π
3
(h3
1 + h3
2) =
2π
3
r3
.
A numerikus megoldáshoz érdemes bevezetni az x1 = h1
r
és x2 = h2
r
dimenziótlan
változókat, ı́gy áttekinthetőbbé válik az egyenlet.
(3) x3
1 + x3
2 − 3(x1 + x2) + 2 = 0.
Ez egy kétismeretlenes (harmadfokú) egyenlet. A másik egyenletet a ﬁzikai feltétel
matematikai megfogalmazásával kapjuk meg. Erre két lehetséges utat mutatunk
meg.
I. megoldás. Az erőegyensúly alapján: a lapra kifejtett nyomóerő megegyezik
a labdára ható felhajtóerővel.
(p − p0)r2
1π =
2r3
π
3
g,
ahol p a labdában lévő nyomás, p0 a külső légnyomás, r1 a gömböv felső lapjának
sugara,  pedig a vı́z sűrűsége.
Ahogy a 3. ábrán is látható, a labda belsejében a levegő nyomása a külső lég-
nyomás és a h magasságú vı́zoszlop hidrosztatikai nyomásának összegével egyenlő:
p = p0 + gh = p0 + g(h1 + h2).
Ezt beı́rva az előző egyenletbe, és kihasználva, hogy r2
1 = r2
− h2
1, megkapjuk a ﬁ-
zikai feltételt:
g(h1 + h2)

r2
− h2
1

π =
2r3
π
3
g,
110 Középiskolai Matematikai és Fizikai Lapok, 2022/2
i
i
2022.2.6 – 19:38 – 111. oldal – 47. lap KöMaL, 2022. február
i
i
i
i
i
i
amelyet a korábban bevezetett dimenziótlan változókkal ismét áttekinthetőbb alak-
ra hozhatunk:
(4) (x1 + x2)

1 − x2
1

=
2
3
.
Ezután a kétismeretlenes (3)–(4) egyenletrendszert kell megoldanunk.
Az egyenletrendszert legegyszerűbb numerikusan,
”
próbálgatással”megoldani.
x1 és x2 értéke 0 és 1 között lehet, értéküket durván megbecsülve behelyettesı́thet-
jük az egyenletekbe, majd az értékeket úgy ﬁnomı́tjuk, hogy az egyenletek minél
inkább teljesüljenek. Az egyenletrendszer megoldása (itt 3 értékes jegyre, de termé-
szetesen a versenyen kevésbé pontos megoldás is elég lett volna) és az összenyomott
labda 4. ábrán látható geometriai paraméterei:
x1 = 0,235, x2 = 0,470,
h1 = 4,7 cm, h2 = 9,4 cm,
h = h1 + h2 = 14,1 cm,
r1 = 19,4 cm, r2 = 17,6 cm.
II. megoldás. Energetikai megfontolás alapján: a kiszorı́tott vı́z tömegközép-
pontja a lehető legmagasabban legyen.
A gömböv tömegközéppontjának távolsága a laptól (a gömböv tömegközép-
pontjának helye képletgyűjteményekből kikereshető, vagy integrálással könnyen
meghatározható):
d =
3

h2
2 − h2
1

4r
−
3

h4
2 − h4
1

8r3
,
a korábbi módon dimenziótlanı́tva
δ =
d
r
=
3

x2
2 − x2
1

4
−
3

x4
2 − x4
1

8
.
Ezután δ minimumát keressük, ﬁgyelembe véve a korábban felı́rt
x3
1 + x3
2 − 3(x1 + x2) + 2 = 0
geometriai feltételt is.
Legegyszerűbben ismét
”
próbálgatással” oldhatjuk meg a feladatot. Eszerint
δmin = 0,343, ha x1 = 0,235 és x2 = 0,470,
az előző megoldással összhangban.
Középiskolai Matematikai és Fizikai Lapok, 2022/2 111
i
i
2022.2.6 – 19:38 – 112. oldal – 48. lap KöMaL, 2022. február
i
i
i
i
i
i
5. ábra
A tömegközéppont minimális távolsága a laptól
dmin = rδmin = 6,9 cm.
Megjegyzés. Több versenyző is észrevette, hogy a feladat
ekvivalens azzal, hogy a labdát félig megtöltjük vı́zzel, és egy
sima, vı́zszintes felületre helyezzük. Ilyenkor értelemszerűen
a vı́z tömegközéppontjának a lehető legalacsonyabban kell len-
nie.
?
Az ünnepélyes eredményhirdetésre és dı́jkiosztásra 2021. november 26-án dél-
után került sor az ELTE TTK Eötvös-termében. Meghı́vást kaptak az 50 és 25 évvel
ezelőtti Eötvös-verseny nyertesei is. A 25 évvel ezelőtti dı́jazottak közül Tóth Gábor
Zsolt jött el – ő pár mondatban beszélt a pályafutásáról.
Ezután következett a 2021. évi verseny feladatainak és megoldásainak bemu-
tatása. Az 1. feladat megoldását Gnädig Péter, a 2. feladatét Széchenyi Gábor,
a 3. feladatét Vankó Péter ismertette.
Az esemény végén került sor az eredményhirdetésre. A dı́jakat Ormos Pál,
az Eötvös Loránd Fizikai Társulat elnöke adta át.
Egyetlen versenyző sem oldotta meg mindhárom feladatot, ı́gy a versenybi-
zottság nem adott ki első dı́jat.
Az első feladat helyes megoldásáért, valamint a második és harmadik feladat-
ban elért lényeges eredményekért második dı́jat nyert Tóth Ábel, az ELTE ﬁzika
BSc szakos hallgatója, aki a Budapesti Fazekas Mihály Gyakorló Általános Iskola
és Gimnáziumban érettségizett Schramek Anikó tanı́tványaként.
Az első feladat helyes, vagy lényegében helyes megoldásáért, valamint a máso-
dik vagy a harmadik feladatban elért lényeges eredményekért harmadik dı́jat nyert
Kertész Balázs Zoltán, a Debreceni Református Kollégium Dóczy Gimnáziumának
12. osztályos tanulója, Tófalusi Péter tanı́tványa; Szépvölgyi Gergely, a Békásme-
gyeri Veres Péter Gimnázium 12. osztályos tanulója, Székely György és Rakovszky
Andorás tanı́tványa, valamint Takács Bendegúz, a Budapesti Fazekas Mihály Gya-
korló Általános Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária
és Csefkó Zoltán tanı́tványa.
Az első feladat helyes, vagy lényegében helyes megoldásáért, valamint a máso-
dik feladatban elért részeredményekért dicséretet kapott Bonifert Balázs, az ELTE
ﬁzika BSc szakos hallgatója, aki a Baár-Madas Református Gimnázium, Általános
Iskola és Diákotthonban érettségizett Horváth Norbert tanı́tványaként; Csordás
Kevin, a Bajai III. Béla Gimnázium 12. osztályos tanulója, Lakner Attila és Pálfal-
vi László tanı́tványa; Dékány Csaba, a győri Révai Miklós Gimnázium és Kollégium
12. osztályos tanulója, Juhász Zoltán tanı́tványa; Fonyi Máté Sándor, a BME ﬁzika
BSc szakos hallgatója, aki a szolnoki Verseghy Ferenc Gimnáziumban érettségizett
Veres Dénes tanı́tványaként; Gurzó József, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária tanı́t-
ványa, valamint Toronyi András, a Baár-Madas Református Gimnázium, Általános
Iskola és Diákotthon 12. osztályos tanulója, Horváth Norbert tanı́tványa.
112 Középiskolai Matematikai és Fizikai Lapok, 2022/2
