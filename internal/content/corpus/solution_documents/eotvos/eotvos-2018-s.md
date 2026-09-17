---
id: solution-document-eotvos-2018-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2018_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [eotvos-2018-charged-cylinder-solenoid, eotvos-2018-gas-mixture-heating, eotvos-2018-rotating-bubble]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2018_S.pdf."
---

Beszámoló a 2018. évi Eötvös-versenyr®l
Az Eötvös Loránd Fizikai Társulat 2018. évi Eötvös-versenye október 12-én délután 3 órai kezdettel tizennégy
magyarországi helyszínen
1
került megrendezésre. Ezért külön köszönettel tartozunk mindazoknak, akik ebben szer-
vezéssel, felügyelettel a segítségünkre voltak. A versenyen a három feladat megoldására 300 per áll rendelkezésre,
bármely írott vagy nyomtatott segédeszköz használható, de (nem programozható) zsebszámológépen kívül minden
elektronikus eszköz használata tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy
a verseny évében fejezték be középiskolai tanulmányaikat. Összesen 50 versenyz® adott be dolgozatot, 17 egyetemista
és 33 középiskolás.
Ismertetjük a feladatokat és azok megoldását.
∗
1. Egy zárt, hosszú, henger alakú, szobah®mérséklet¶ vízzel telt tartályban egy V = 1 cm3
térfogatú, normál nyomású
légbuborék található. A tartályt egy ¶rállomáson, a súlytalanság állapotában óvatosan gyorsítva forgatni kezdjük a szim-
metriatengelye körül, majd mikor a tartály eléri az ω = 300 s−1
szögsebességet, azt állandó értéken tartjuk. Milyen
alakot vesz fel ekkor a légbuborék? Adjuk meg a buborék jellemz® méreteit! A víz felületi feszültsége α = 0,07 N/m.
(Vigh Máté)
I. megoldás (energiaminimum). Ha nem forogna a henger, a buborék a felületi feszültség miatt gömb alakú
lenne. Ha nem lenne felületi feszültség, akkor a forgó folyadékban a buborék egy nagyon hosszan elnyúló nagyon vékony
szál lenne a henger szimmetriatengelyénél. Most a henger elég nagy szögsebességgel forog, de hat a felületi feszültség is,
így egy hosszan elnyúlt virsli alakú buborékot feltételezünk, melynek alakját egy r sugarú, ℓ hosszúságú hengerrel
közelíthetjük. A térfogat állandósága miatt ℓr2
π = V .
A rendszer teljes energiája a buborék felületi energiájából és a buborék helyér®l kiszoruló folyadék helyzeti energi-
ájából adódik össze. Akkor lesz egyensúly, ha ez az energia minimális.
A forgó rendszerben egy dm tömeg¶ folyadékdarabra a henger tengelyét®l x távolságra ω2
xdm entrifugális er®
hat. Emiatt a henger tengelyét®l x távolságra lév® tömegdarab helyzeti energiája
dE = −
Z x
0
ω2
x′
dmdx′
= −
1
2
ω2
x2
dm.
A henger alakú buborékból kiszorul a víz, és a henger szimmetriatengelyéig emelkedik. A teljes helyzeti energia
növekedése, felhasználva, hogy az x sugarú, dx vastagságú hengergy¶r¶ tömege dm = ̺2xπℓdx,
Ecf =
Z r
0
1
2
ω2
x2
̺ · 2xπℓdx =
1
4
ω2
r4
̺ℓπ =
1
4
ω2
r2
̺V.
A felületi energia (a henger ismeretlen alakú végeinek járulékát elhanyagolva)
Efel = 2rπℓα =
2V α
r
,
a teljes energia pedig
E = Ecf + Efel =
1
4
ω2
r2
̺V +
2V α
r
.
A minimumot deriválással keressük meg:
dE
dr
=
1
2
ω2
r̺V −
2V α
r2
= 0,
amib®l
r = 3
r
4α
ω2̺
≈ 1,5mm és ℓ =
V
r2π
≈ 15 cm.
Valóban jogos volt tehát az a feltételezés, hogy a buborék alakja közelít®leg egy nyújtott henger.
II. megoldás (er®egyensúly). Vágjuk félbe a virslit, és írjuk fel az er®k egyensúlyát (1. ábra)!
1. ábra
1Részletek a verseny honlapján: http://eik.bme.hu/∼vanko/fizika/eotvos.htm.A forgó folyadékban a tengelyt®l x távolságra a nyomás:
p(x) =
1
2
̺ω2
x2
+ C,
ahol C kés®bb meghatározandó állandó. A buborékon belül mindenhol ugyanakkora p0 nyomás uralkodik. A henger
falánál ez a nyomás a folyadék ottani p(r) nyomásának és a görbületi nyomásnak az összege:
p0 = p(r) +
α
r
,
amib®l
p(r) = p0 −
α
r
.
Ezt összevetve a folyadék nyomáseloszlására felírt összefüggéssel az abban megjelen® C állandó meghatározható:
C = p0 −
α
r
−
1
2
̺ω2
r2
.
A folyadék által a virsli egyik felére kifejtett tengelyirányú er® a folyadék nyomásának egy r sugarú körlapra vett
integráljaként számítható ki (2. ábra):
F1 =
Z r
0
p(x) · 2πxdx =
1
2
̺ω2
Z r
0
x2
· 2πxdx +

p0 −
α
r
−
1
2
̺ω2
r2

· πr2
=
=
1
2
̺ω2
·
π
2
r4
+ p0 · πr2
− α · πr −
π
2
̺ω2
r4
= p0 · πr2
− α · πr −
π
4
̺ω2
r4
.
2. ábra
A virsli másik fele által kifejtett húzóer® (a felületi feszültség miatt): F2 = α · 2πr, míg a másik félben lév® leveg®
által kifejtett nyomóer®: F3 = p0 · πr2
.
Az er®egyensúly tehát tengelyirányban így írható fel:
F1 + F2 = F3,
p0 · πr2
− α · πr −
π
4
̺ω2
r4
+ α · 2πr = p0 · πr2
,
amib®l az I. megoldással összhangban a következ® megoldás adódik:
r = 3
r
4α
̺ω2
.
2. Egy tartályban 1 mólnyi egyatomos gáz és 2 mólnyi kétatomos gáz keveréke található. A tartály fala az egyatomos
gáz atomjait átengedi, de a kétatomos gáz molekuláit nem. Kezdetben a tartály a 20 ◦
C-os környezettel egyensúlyban
van. A tartályban lév® gázkeveréket egy f¶t®test lassan 120 ◦
C-kal felmelegíti.
a) Mennyivel változik meg a tartályban lév® gáz bels® energiája?
b) Mennyi h®t ad le a f¶t®test a gáznak? (A tartály melegedéséhez szükséges h®t és a tartály h®vezetését hagyjuk
gyelmen kívül!)
(Ti hy Géza)
Megoldás. a) Két gázkeverék akkor van egyensúlyban, ha azon komponensek par iális nyomása megegyezik,
melyek a két tartály között áramolhatnak. Feladatunkban sak az egyatomos molekulák gázát engedi át a fal, ezért ha
egyensúlyban a tartályban lév® egyatomos gáz par iális nyomása p1, akkor a környezetben ennek a gáznak a par iális
nyomása is ugyanakkora. Ez az egyensúly a kétatomos gáz par iális nyomására nem jelent megszorítást.
El®ször vizsgáljuk az egyatomos gáz folyamatát! Mivel ennek par iális nyomását a környezet állítja be állandóra, ez
egy izobár folyamat, de a mólok száma, amely kezdetben n1k = 1 mol nem állandó, hanem a folyamat közben állandóan
változik, melegítés hatására gáz áramlik a tartályból a környezetbe. Az egyesített gáztörvény alapján p1V = n1RT,
ahol V a tartály térfogata. Mivel sem a par iális nyomás, sem a térfogat nem változik, a folyamatra az
n1T = állandó
összefüggés jellemz®.3. ábra
A kétatomos gázt a fal nem engedi át, ennélfogva térfogata állandó, a folyamat izo hor. A f¶t®test a gázt 20
◦
C-
ról melegíti 120
◦
C-ra, ezért mind az egyatomos gáz, mind a kétatomos gáz kezdeti és végs® h®mérséklete kelvinben
Tk = 293 K és Tv = 393 K (3. ábra).
Az egyatomos gáz szabadsági foka 3, ennek ismeretében a bels® energia kezdeti értéke:
E1k =
3
2
n1kRTk,
míg bels® energiája a folyamat végén:
E1v =
3
2
n1vRTv =
3
2
n1kRTk,
ami a folyamatra jellemz®
n1vTv = n1kTk
összefüggés miatt megegyezik a kezdeti energiával. Látjuk, hogy az egyatomos gáz bels® energiája nem változik.
A kétatomos gáz öt szabadsági fokkal rendelkezik. A bels® energiájának megváltozása:
∆E1 =
5
2
n2R(Tv − Tk).
A teljes rendszer bels® energiájának megváltozása:
∆E =
5
2
n2R(Tv − Tk) = 4,16 kJ.
b) Most rátérünk annak a h®nek a kiszámítására, amit a f¶t®test ad le. Az egyatomos gáz izobár folyamatában
a része skeszám állandóan változik, tehát az általa felvett h®t részfolyamatonként kell összeadni. Ezt integrállal lehet
kifejezni:
Q1 =
Z Tv
Tk
5
2
n1RdT,
ahol a folyamat során a mólszám az
n1 =
n1kTk
T
alapján függ a h®mérséklett®l. Felhasználtuk, hogy az egyatomos gáz állandó nyomáson vett mólh®je Cp1 = (5/2)R.
Az integrált elvégezve
Q1 =
Z Tv
Tk
5
2
n1kRTk
T
dT =
5
2
n1kRTk ln
Tv
Tk
= 1,79 kJ.
Az integrálás lépése több módon is elkerülhet®, például úgy, hogy felhasználjuk a hasonlóságot az izoterm folyamat
munkavégzésével, vagy egy közelít® összegzést alkalmazva számolunk numerikusan.
A kétatomos gáz izo hor folyamatot végez, ezért az általa felvett h® megegyezik a bels® energia megváltozásával:
Q2 =
5
2
n2R(Tv − Tk) = 4,16 kJ.
A f¶t®test a kett® h® összegét adja le:
Q = Q1 + Q2 = 5,95 kJ.
3. Egy rögzített, vízszintes tengely¶, légmagos, hosszú szolenoid keresztmetszete R sugarú kör. A teker s belsejében
egy (nem-mágneses) szigetel® anyagból készült, r sugarú tömör henger helyezkedik el. A szigetel® henger pozitívan
töltött, egyenletes térfogati eloszlásban. A szolenoidba id®ben egyenletesen, gyorsan növekv® er®sség¶ áramot vezetünk
az ábrán látható körüljárás szerint.Milyen irányban indul el a szigetel® henger? Hogyan függ a válasz az r/R aránytól? Mekkora r/R arány esetén
marad a töltött henger nyugalomban?
A tapadási súrlódás elegend®en nagy ahhoz, hogy a henger ne sússzon meg. A gördülési ellenállástól tekintsünk el!
(Vigh Máté)
Megoldás. A változó (növekv®) er®sség¶ áram hatására a teker s belsejében id®ben változó, homogén mágneses
mez® alakul ki. A változó mágneses mez® a Faraday-törvény értelmében id®ben állandó, forrásmentes és örvényes
elektromos mez®t kelt (4. ábra), amely ered® er®t és forgatónyomatékot fejt ki a töltött hengerre: ez mozdíthatja el
a hengert egyik vagy másik irányban.
4. ábra
5. ábra
6. ábra
Vizsgáljuk az egész elrendezésnek a szolenoid tengelyére mer®leges síkmetszetét! Jelöljük ezen a síkmetszeten a szol-
enoid középpontját C-vel, a szigetel® henger középpontját O-val, a henger és a szolenoid érintkezési pontját pedig P-vel!
A szolenoid belsejében kialakuló indukált elektromos mez® térer®sségét a Faraday-törvényb®l határozhatjuk meg, ha
azt egy C középpontú, r0 sugarú körre alkalmazzuk (5. ábra):
E(r0) · 2πr0 = πr2
0
∆B
∆t | {z }
∆Φ
∆t
, ahonnan E(r0) =
1
2
∆B
∆t
r0.
Ez az összefüggés a balkéz-szabály alapján vektoriálisan is felírható a C pontból a vizsgált pontba mutató r0 vektor
segítségével:
E(r0) = −
1
2
∆B
∆t
eB × r0,
ahol eB = B/|B| a mágneses induk ióvektorral azonos irányú egységvektor.
Vezessük be a 6. ábrán látható r1 és r2 vektorokat, ahol r1 + r2 = r0. Ezek közül r1 =
− − →
CO konstans vektor
(melynek hossza R − r), míg r2 az O pontból abba a pontba mutat, ahol a térer®sségre kíván siak vagyunk. Ennek
felhasználásával a térer®sség így írható:
E(r0) = −
1
2
∆B
∆t
eB × r1
| {z }
E1
−
1
2
∆B
∆t
eB × r2
| {z }
E2
,Ebben az összegben az E1-gyel jelölt tag homogén, vízszintesen balra mutató elektromos mez®t, az E2-vel jelölt tag
pedig a töltött henger tengelye (O pont) körül örvényl® mez®t jelent. Az indukált elektromos teret tehát felbontottuk
két mez® szuperpozí iójára, ahogy az a 7. ábrán látható.
7. ábra
Azt, hogy a töltött henger jobbra vagy balra indul el az dönti el, hogy a henger legalsó P pontjára vonatkoztatott
ered® forgatónyomaték milyen irányba mutat (erre a pontra nézve ugyanis a súrlódási er®nek, a nyomóer®nek és
a nehézségi er®nek a forgatónyomatéka is nulla). Az elektromos mez® 7. ábrán látható felbontásának az az el®nye,
hogy segítségével könnyen kiszámítható ez az ered® forgatónyomaték.
A homogén E1 mez® |E1|Q nagyságú, a henger O középpontjában ébred® er®t fejt ki a hengerre, melynek forga-
tónyomatéka a P pontra nézve:
M1 = |E1|Qr =
1
2
∆B
∆t
|eB × r1|Qr =
1
2
∆B
∆t
(R − r)Qr,
ahol Q a henger össztöltése, r pedig az er®kar.
Az O pont körül örvényl® E2 mez® ered® er®t a szimmetria miatt nem eredményez. A forgatónyomatékhoz viszont ez
a mez® is ad járulékot, hiszen a henger O pontra nézve átellenes darabkáira ható er®k er®párokat alkotnak. Az er®párok
ered® forgatónyomatéka bármely pontra, így a P és O pontokra számítva is ugyanakkora, de a számolás az O pontra
vonatkoztatva egyszer¶bb. Az O ponttól |r2| távolságra lév®, ∆Q töltés¶ kis darabkára |E2|∆Q er® hat, így az ered®
forgatónyomaték:
M2 =
X
|E2|∆Q|r2| =
1
2
∆B
∆t
X
∆Q|r2|
2
| {z }
1
2Qr2
.
Az összegzésben szerepl® kifejezés éppen olyan alakú, mint a henger tehetetlenségi nyomatéka a szimmetriatengelyére
vonatkoztatva ( sak ott a darabkák ∆Q töltése helyett azok ∆m tömege szerepel). Ezt az analógiát felhasználva
az összegzés eredménye Qr2
/2, így
M2 =
1
4
∆B
∆t
Qr2
.
8. ábra
A P pontra vonatkoztatott M1 forgatónyomaték balra szeretné kitéríteni a töltött hengert, míg az M2 forgatónyo-
maték jobbra (8. ábra). A henger tehát balra indul el, ha:
1
2
∆B
∆t
Q(R − r)r
| {z }
M1
>
1
4
∆B
∆t
Qr2
| {z }
M2
,
azaz ha r/R < 2/3, ellenkez® esetben pedig jobbra. Az r = 2R/3 egyenl®ség fennállása esetén a henger egyáltalán nem
indul el.
Megjegyzés. A hengerre ható, P pontra vonatkoztatott ered® forgatónyomaték irányát a forgómozgással kap so-
latos analógia segítségével is meghatározhatjuk. Vegyük az óramutató járásával ellentétes körüljárási irányokat po-
zitívnak! Tekintsük a hengert egy m tömeg¶, homogén tömegeloszlású, a C pont körül ω < 0 szögsebességgel forgómerev testnek! Ezen test egy-egy darabkájának sebessége (és emiatt az egységnyi térfogatú kis részének lendülete)
éppen olyan irányú és (egy pozitív arányossági tényez®t®l eltekintve) ugyanolyan nagyságú, mint az eredeti feladatban
az elektromos er®tér által kifejtett er®. Hasonlóan, a forgó merev test kis darabkájának P-re vonatkoztatott perdülete
(impulzusmomentuma) egy arányossági tényez®t®l eltekintve az eredeti feladatban szerepl® er®k P-re vonatkoztatott
forgatónyomatékának felel meg. A kérdés tehát az, hogy milyen el®jel¶ a C pont körül negatív irányban forgó henger
perdülete a P pontra vonatkoztatva.
Egy merev test teljes perdülete a tömegközéppont körüli forgás sajátperdületéb®l és a tömegközéppontba kép-
zelt, annak sebességével mozgó teljes anyagmennyiség pályaperdületéb®l tehet® össze. Esetünkben az O tömegközép-
pont (balra mutató) sebessége vO = (R − r)ω nagyságú, a pályaperdület tehát +mr(R − r)ω, a sajátperdület pedig
−(1/2)mr2
ω. A P pontra vonatkoztatott teljes perdület tehát:
NP = mr(R − r)ω −
1
2
mr2
ω =
mrω
2
(2R − 3r).
Látható, hogy r <
2
3
R esetén N > 0, tehát a henger balra indul el, r >
2
3
R esetén N < 0, azaz a henger jobbra
indul el, míg r =
2
3
R esetén nem jön mozgásba.
(G. P.)
∗
Az ünnepélyes eredményhirdetésre és díjkiosztásra 2018. november 23-án délután került sor az ELTE TTK Konfe-
ren iatermében. Meghívást kaptak az 50 és 25 évvel ezel®tti Eötvös-verseny nyertesei is. Jelen volt az 50 évvel ezel®tti
díjazottak közül Vetier András, aki az akkori feladatok ismertetése után röviden beszélt a versenyhez kap solódó
emlékeir®l, és a 25 évvel ezel®tti díjazottak közül Ková s Krisztián.
Ezután következett a 2018. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Vankó
Péter, a 2. feladatét Ti hy Géza, a 3. feladatét Vigh Máté ismertette.
Az esemény végén került sor az eredményhirdetésre. A díjakat Sólyom Jen®, az Eötvös Loránd Fizikai Társulat
elnöke adta át.
Els® díjat a versenybizottság nem adott ki.
Az els® feladat hibátlan megoldásáért második díjat nyert Fajszi Bul sú, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 11. osztályos tanulója, Csefkó Zoltán és Horváth Gábor tanítványa.
A második feladat lényegében helyes megoldásáért harmadik díjat nyert Hajdú Csanád, a BME zikus hallgatója,
a budapesti Eötvös József Gimnázium érettségizett tanulója, Gulyás Erzsébet tanítványa, valamint Vavrik Márton,
a BME zikus hallgatója, a budapesti Berzsenyi Dániel Gimnázium érettségizett tanulója, Lendvai Dorottya és Izsa
Éva tanítványa.
Az els® feladat helyes közelít® megoldásáért di séretben részesült Berke Martin, a BME zikus hallgatója, a Za-
laegerszegi Zrínyi Miklós Gimnázium érettségizett tanulója, Bóbi s Lilla tanítványa.
A második díjjal Zimányi Gergely adományából 50 ezer, a harmadik díjjal 30 ezer, a di sérettel 20 ezer forint
pénzjutalom járt, a díjazottak tanárai pedig a Typotex Kiadó könyveit kapták. A verseny megszervezését az Eötvös
Loránd Fizikai Társulat a MOL támogatásából fedezte.
Ti hy Géza, Vankó Péter, Vigh Máté
