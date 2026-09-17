---
id: eotvos-2016-metal-disk
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2016-metal-disk
solution_type: official
source_document: solution-document-eotvos-2016-s
source_pdf: cache/phoxiv/eotvos/2016_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2016_S.pdf."
---

3. feladat kitûzte: Vigh Máté
Egy r sugarú, d vastagságú (d < < r), ρ fajlagos ellenál-
lású fémkorong A pontjába I erõsségû áramot veze-
tünk, B pontjából pedig elvezetjük azt.
Mekkora feszültség mérhetõ a 10. ábrán látható C
10. ábra
I
B A
I
C D
r
r
és D pontok között?
Megoldás
A fémkorong vizsgálata elõtt érdemes egy végtelen
fémlemez esetébõl kiindulni. Képzeljük el, hogy egy
végtelen fémlap A pontjába 2I áramot vezetünk, a B
pontból pedig elvezetjük azt. Ha csak az A jelû elekt-
róda lenne jelen, a fémlemezben a bevezetett áram
izotróp módon terjedne szét, így az A ponttól r1 távol-
ságra az áramsûrûség nagysága
lenne. A differenciális Ohm-törvény értelmében ezt az
j1
=
2 I
2 π r1
d
áramsûrûséget a lemezben megjelenõ E1 = ρj1 térerõs-
ségû elektromos mezõ tartja fenn, így az A elektróda
hatására a végtelen fémlemezben az r1 távolsággal
fordítottan arányos erõsségû, az A ponttal ellentétes
irányba mutató, „sugaras” elektromos mezõ alakul ki.
Hasonlóan, ha csak a B jelû csatlakozó lenne jelen,
akkor r2 távolságban
térerõsségû, a B pont felé mutató elektromos tér jön-
E2
=
2 ρ I
2 π r2
d
ne létre. Mivel mindkét elektróda jelen van, így a le-
mezben kialakuló elektromos tér (és áramsûrûség) az
elõbbi két eset szuperpozíciójaként (vektori össze-
geként) számolható.
Tekintsük most a végtelen fémlemez tetszõleges P
pontját (lásd a 11. ábrát)! Itt az A és B elektródák
hatására külön-külön E1 és E2 térerõsség alakul ki,
amelyek nagyságára az eddigiek szerint fennáll az
E1
E2
=
r2
r1
A FIZIKA TANÍTÁSA 273
egyenlõség. Ebbõl és a váltószögek egyenlõségébõl
11. ábra
2I 2I
A B
E2
E
E1
e
p
r2
r1
O
j
j
12. ábra
2I 2I
A
C D B
Régi és új díjazottak, valamint tanáraik.
látszik, hogy az ABP háromszög hasonló a térerõsség-
vektorok által meghatározott háromszöghöz, ezért az
eredõ térerõsségvektor a PB szakasszal ugyanakkora
szöget zár be, mint a PAB szög. Ez viszont azt jelenti,
hogy az ABP háromszög (O középpontú) köré írt kö-
rét a P pontbeli eredõ térerõsség érinti, hiszen van két
szögünk (PAB , illetve az E és E2 vektorok által be-
zárt szög), amelyek egyenlõségük miatt a kör ugyan-
azon PB ívéhez tartozó kerületi szögek.
A fentiekbõl következik, hogy az eredõ térerõsség-
vektor a fémsík tetszõleges pontjában érintõje az A, B
és a kiszemelt pontra illeszkedõ körívnek, a lemezben
kialakuló elektromos erõvonalak (és így az áramvona-
lak is) tehát körív alakúak, amelyek átmennek az A és
B pontokon.
Most gondolatban vágjuk ki a végtelen fémlapból a
12. ábrán látható, korong alakú részt! A korong pere-
me mentén az áramok a kivágás elõtt is érintõ irányban
folytak, így az áramokra kirótt határfeltétel automatiku-
san teljesül. A korong kivágása tehát nem változtatja
meg sem a külsõ, sem a belsõ árameloszlást, és így a
feszültségviszonyokat sem. A végtelen fémlapban az
áram be- és kivezetési pontjá-
nak közvetlen közelében az
árameloszlás izotróp volt (itt a
távolabbi elektróda hatása már
nem érzõdik), így a korong
kivágása elõtt a fémlemezbe
vezetett 2I erõsségû áramnak
pontosan a fele jutott be a ko-
rongba (lásd az ábrát). A fel-
adatbeli kérdés tehát egyenér-
tékû azzal, hogy mekkora volt
a feszültség a végtelen fémlap
C és D pontjai között a korong
kivágása elõtt?
Az A pontban bevezetett 2I
áram hatására az elektródától
r távolságra a fémlap poten-
ciálja (az A és B pontok kö-
zött félúton, a korong közép-
pontjában elhelyezkedõ refe-
renciaponthoz képest) a tér-
erõsség integrálásával kapha-
tó meg:
ahol r0 = r. Ennek felhasználásával az A pontbeli
Φ(r1
) =
⌡
⌠
r0
r1
E1
(r′) dr′ =
2 ρ I
2 π d ⌡
⌠
r0
r1
1
r′
dr′ = −
ρ I
π d
ln
r1
r0
,
elektróda által a C és D pontok között létrehozott
feszültség nagysága
Ugyanekkora potenciálkülönbséget hoz létre a B jelû
U (A)
CD
=
ρ I
π d
⎛
⎜
⎝
⎞
⎟
⎠
− ln
r
2 r0
ln
3 r
2 r0
=
ρ I
π d
ln3.
elektróda is, így a szuperpozíció értelmében a C és D
pontok között esõ feszültség
Ekkora tehát a kivágott fémkorong C és D pontjai
UCD
= U (A)
CD
U (B)
CD
= 2 U (A)
CD
=
2 ρ I
π d
ln3.
közötti feszültség is.
274 FIZIKAI SZEMLE 2017/7–8
Az esemény végén került sor az eredményhirdetés-
re. A díjakat Patkós András, az Eötvös Loránd Fizikai
Társulat elnöke adta át.
Egyetlen versenyzõ sem oldotta meg mindhárom fel-
adatot, így a versenybizottság elsõ díjat nem adott ki.
Két feladat helyes megoldásáért második díjat
nyert Kovács Péter Tamás, a Zalaegerszegi Zrínyi Mik-
lós Gimnázium 12. osztályos tanulója, Juhász Tibor és
Pálovics Róbert tanítványa, valamint Tompa Tamás
Lajos, a miskolci Földes Ferenc Gimnázium 12. osztá-
lyos tanulója, Zámborszky Ferenc és Kovács Benedek
tanítványa.
Egy feladat helyes megoldásáért harmadik díjat
nyert Forrai Botond, a budapesti Baár-Madas Refor-
mátus Gimnázium érettségizett tanulója, Horváth
Norbert tanítványa – a BME fizikus hallgatója; Lajkó
Kálmán, a Szegedi Radnóti Miklós Kísérleti Gimná-
zium 12. osztályos tanulója, Mezõ Tamás tanítványa,
valamint Simon Dániel Gábor, a Kecskeméti Bányai
Júlia Gimnázium 11. osztályos tanulója, Bakk János
tanítványa.
A második díjjal Zimányi Gergely adományából
nettó 40 ezer, a harmadik díjjal nettó 25 ezer forint
pénzjutalom járt, a díjazottak tanárai pedig a Typotex
Kiadó könyvutalványait kapták. A verseny megszerve-
zését az Eötvös Loránd Fizikai Társulat a MOL támo-
gatásából fedezte.
Mind a díjazottaknak, mind tanáraiknak gratulá-
lunk a sikeres versenyzéshez. Köszönetünket fejezzük
ki az összes versenyzõnek, hogy részvételükkel, és
tanáraiknak, hogy a felkészítéssel, tanításukkal emel-
ték a verseny, és ezzel a magyar oktatás színvonalát.
A TAVI MOLNÁRPOLOSKA ÁRNYÉKPAPUCSAI ÉS
A VÍZ FELÜLETI FESZÜLTSÉGE
Nagy-Czirok Lászlóné Kiszi Magdolna
mesterpedagógus, a Kiskunhalasi Fazekas
Mihály Általános Iskola matematika-fizika
szakos tanára és igazgatója. A hatásos tanu-
lási-tanítási eljárások alkalmazása mellett
azok fejlesztésével és kutatásával is foglal-
kozik. A tudástérképek tanulás- és gondol-
kodásfejlesztô módszerérôl könyvet és
folyóiratcikkeket írt. Tapasztalatait pedagó-
gus szakvizsgát adó képzésben a Budapes-
ti Mûszaki és Gazdaságtudományi Egyetem
oktatójaként is továbbadja.
Rizmajer Erzsébet 2003-ban végzett az
ELTE TTK biológia-környezettan szakán.
Szakdolgozatát a vízi élõvilágot érintõ
szennyezések hatásait vizsgáló témában
írta. 2008-ban a Pécsi Tudományegyete-
men szerzett kémia tanári diplomát. Jelen-
leg kémia-biológia tanár a Dabasi Táncsics
Mihály Gimnáziumban, ahol az Öveges
Laboratóriumban laboráns munkakörét is
betölti.
Kriska György, PhD (ELTE, 2000), egyete-
mi adjunktus, tudományos fõmunkatárs.
Az ELTE-n több mint 20 éve tanít biológia
tantárgypedagógiát és édesvízi gerinctelen
állatismeretet. Számos publikációja jelent
meg a vizuális ökológia tárgykörében, a
Springer gondozásában kiadott Freshwater
Invertebrates in Central Europe címû mo-
nográfia társszerzõje. Tudományos érdek-
lõdése elsõsorban a poláros fényszennye-
zés és a poláros ökológiai csapdák vizsgá-
latára irányul.
Horváth Gábor fizikus, az MTA doktora, az
ELTE Biológiai Fizika Tanszék Környezet-
optika Labortóriumának vezetôje. A vizuá-
lis környezet optikai sajátságait és az álla-
tok látását tanulmányozza, továbbá biome-
chanikai kutatásokat folytat. Számos szak-
mai díj és kitüntetés tulajdonosa.
– a felületaktív anyagok káros hatása a vízfelszíni rovarok viselkedésére
Nagy-Czirok Lászlóné Kiszi Magdolna – Fazekas Mihály Általános Iskola, Kiskunhalas
Rizmajer Erzsébet – Táncsics Mihály Gimnázium, Dabas
Kriska György – ELTE Biológiai Intézet és MTA ÖK Duna-kutató Intézet, Budapest
Horváth Gábor – ELTE Biológiai Fizika Tanszék, Budapest
1994 óta minden év március 22-én ünnepeljük a Víz
Világnapját. Az ENSZ ezzel igyekszik felhívni a fi-
gyelmet édesvízkészleteink veszélyeztetettségére.
Általános és középiskolai fizikaórákhoz kapcsolódva
ez inspirált minket olyan kutatásokra, amelyek során
környezetvédelmi szempontokkal egészítettük ki az
iskolai fizikai ismeretek gyakorlati alkalmazását. Diá-
kok bevonásával azt vizsgáltuk, hogy a környezetünk-
ben található vizek felületi feszültsége mennyire befo-
lyásolja a tavi molnárpoloskák és más vízfelszíni rova-
A FIZIKA TANÍTÁSA 275
