---
id: solution-document-eotvos-1995-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1995_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [eotvos-1995-conveyor-belt-disk, eotvos-1995-laser-slit-diffraction, eotvos-1995-superconductor-rings]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/1995_S.pdf."
---

1995. október 20-án az országban 15 városban megtartott Eötvös versenyre az alábbi feladatokat t¶zte ki a Ver-
senybizottság (elnök: Radnai Gyula, tagok: Károlyházy Frigyes, Gnädig Péter):
1. feladat. Egy négyzet alakú, l = 3 m széles kísérletez® asztal felszíne sík, d = 1 m szélesség¶ középs® sávját
azonban állandó v = 3 m/s sebességgel mozgó (végtelenített) gumiszalag képezi, amely pontosan illeszkedik az asztallap
nyugvó felszínéhez. Az asztal egyik szélének közepére (az 1. ábrán látható A pontra) egy ki si, lapos korongot fektetünk,
és megütjük úgy, hogy u = 4 m/s sebességgel kezdjen súszni (mer®legesen) a szalag felé. Az asztallap álló része és a
korong közötti súrlódás elhanyagolható, a gumiszalag és a korong közötti súrlódási tényez® µ = 0,5.
Hol esik le a korong az asztalról?
Károlyházy Frigyes
Megoldás. Elvileg többféle lehet®ség is elképzelhet®, a súrlódástól és a sebességekt®l függ®en. Kis súrlódás és
nagy kezd®sebesség esetén a korong szinte átrepül az asztalon, alig változtatja meg a sebességét. Nagy súrlódás és
kis kezd®sebesség esetén viszont a korong át se jut a futószalagon, hanem leragad rajta, és a mozgó szalag szépen
elviszi és leejti a korongot az asztal jobb oldalán. Ez utóbbi lehet®ség is sugallhatja azt az ötletet, hogy a jelenséget
ne az asztalhoz, hanem a futószalaghoz rögzített koordináta-rendszerben vizsgáljuk. Látni fogjuk, hogy ez mennyire
leegyszer¶síti a megoldást.
A futószalaghoz rögzített koordináta-rendszerben a korong ferdén súszik rá az álló szalagra. A súrlódási er®
hatására egyenesvonalú, egyenletesen lassuló mozgást végez a szalagon, és ha még marad energiája, le is súszik róla.
Ezt az esetet mutatja a 2. ábra.
az asztalhoz képest (a szalag mozog) a szalaghoz képest (a szalag áll)
A szalagon végig súszó korong 1,25 m utat tesz meg, amíg átér rajta. Kezd®sebessége 5 m/s, lassulása µg ≈ 5 m/s2
.
Végsebessége (a szalag szélén)
vt =
q
v2
0 − 2µgs ≈ 5
√
2
2
m/s.
Hol hagyja el a korong a szalagot? Ennek meghatározásáhon számítsuk ki, mennyi ideig volt a korong a szalagon:
t1 =
2s
v0 + vt
≈
1
2 +
√
2
s.
Így már kiszámíthatjuk, hogy mennyit mozdult el a szalag, amíg a korong rajta volt:
∆x1 = vszalag · t1 ≈
3
2 +
√
2
m.
az asztalhoz képest a szalaghoz képest
3. ábra
Továbbra is a g ≈ 10 m/s
2
közelítést alkalmazva a szalagról le súszó korong sebességére a futószalag illetve az asztal
koordináta-rendszerében a 3. ábrán látható értékeket kapjuk. Az 1 m széles, súrlódásmentes sávon való át súszáshoz
szükséges id®:
t2 =
1 m
2
√
2 m/s
=
1
2
√
2
s.
Eközben a korong elmozdulása jobbra:
∆x2 =

3 −
3
√
2

1
2
√
2
m.
Így a korong összes elmozdulása jobbra:
∆x = ∆x1 −
3
5
1,25 m + ∆x2 =
3
2(2 +
√
2)
m ≈ 44 cm.
Ha g = 9,81 m/s
2
-tel számolunk, ∆x = 42,6 cm adódik.
A korong tehát az asztal szemközti oldalának közepét®l 42,6 cm-rel jobbra esik le az asztalról.
2. feladat. Két vékony, kon entrikus, szupravezet® gy¶r¶ a síkjukra mer®leges, homogén mágneses térben helyez-
kedik el. A mágneses induk ió vektorának nagysága B0, iránya az ábrán a papír síkjába befelé mutat. A bels® gy¶r¶
sugara sokkal kisebb a küls®énél (R1 ≪ R2). Az egyes gy¶r¶k induktivitása L1 illetve L2, és a köl sönös induk ió sem
hanyagolható el.
Mekkora és milyen irányú áramok indukálódnak az egyes gy¶r¶kben, ha a küls® mágneses teret megszüntetjük?
Varga István
Megoldás. A megoldás alapgondolata az, hogy a szupravezet® gy¶r¶kben nem indukálódhat ered® feszültség,
mert az végtelen nagy áramot eredményezne. Ez azt jelenti, hogy a küls® mágneses tér leépülésével egyidej¶leg olyan
áramoknak kell indukálódniuk, hogy az áramváltozás miatti öninduk iós és kül sönös induk iós feszültségek éppenkioltsák a küls® mágneses tér változása miatt indukálódó körfeszültséget. Másképp fogalmazva: a szuravezet® gy¶r¶
által körülölelt mágneses uxus nem változhat meg. Ha megsz¶nik a küls® tér uxusa, fellép helyette az indukált
áramok uxusa.
Felírhatjuk tehát az alábbi egyenl®ségeket:
B0R2
1π = L1I1 + MI2 és B0R2
2π = L2I2 + MI1,
ahol M a két gy¶r¶ közti köl sönös induk iós együttható. A fenti két egyenletb®l I1 és I2 kifejezhet®:
I1 =
B0(R2
1πL2 − R2
2πM)
L1L2 − M2
, illetve I2 =
B0(R2
2πL1 − R2
1πM)
L1L2 − M2
.
Ezekben a kifejezésekben B0, R1, R2, L1 és L2 megadott értékek, M-et azonban meg kell még határoznunk.
Hogyan számíthatjuk ki a két gy¶r¶ közötti köl sönös induk iót? Használjuk ki, hogy R1 ≪ R2! Feltételezhetjük,
hogy az R1 sugarú, ki si bels® gy¶r¶ belsejében az I2 áram által átjárt nagy, küls® gy¶r¶b®l származó mágneses mez®
jó közelítéssel homogénnek tekinthet®. Így a küls® gy¶r¶t®l származó uxus
MI2 = B · R2
1π,
ahol B-t a nagy gy¶r¶ben folyó áram hozza létre a gy¶r¶ közepén, nagysága a BiotSavart-törvény alapján:
B = µ0
I2
2R2
.
Behelyettesítés után M-re a következ®t kapjuk:
M = µ0
π
2
R1
R1
R2
.
Hasonló megfontolással kaphatunk nagyságrendi be slést az L1 és L2 öninduk iós együtthatókra is. Egy R sugarú
körvezet®ben folyó áram által létrehozoztt Bátlag nagyságrendileg közelíthet® a középpontban mérhet® B értékkel.
Ennek megfelel®en a uxus BR2
π, s ezt az árammal osztva az öninduk iós együtthatóra L ≈ µ0Rπ/2 adódik.
Megjegyzés. Nem tartozik a megoldáshoz, de az érdekesség kedvéért megemlítjük, hogy a körgy¶r¶ induktivitására
jó közelítéssel igaz az alábbi formula:
L ≈ µ0Rln
R
r
,
ahol R a körgy¶r¶ sugara, r pedig a kör keresztmetszet¶nek képzelt drót vastagságának a fele. Mivel a logaritmus
lassan változó függvény, a gy¶r¶ öninduk iós együtthatóját durva közelítésben µ0R-rel arányosnak vehetjük.
R1 ≪ R2 miatt M ≪ L1 ≪ L2, ezért az áramokra kapott kifejezéseket tovább egyszer¶síthetjük. A nevez®ben M2
elhanyagolható L1L2-höz képest, de elhanyagolható az I2 számlálójában szerepl® második tag is az els®höz képest. Így
kapjuk:
I2 =
B0R2
2π
L2
, illetve I1 =
B0R2
1π
L1

1 − µ0
π
2
R2
L2

.
Hátra van még az áramok irányának meghatározása. I2 nyilván a 4. ábrán látható elrendezésben az óramutató
járásával megegyez® irányban folyik, hogy a papír síkjába befelé mutató induk ióvektort hozzon létre. I1 iránya nem
ennyire magától értet®d®, azt a zárójelben álló kifejezés el®jele dönti el. Ennek megállapítására  Tóth Gábor Zsolt
ötlete nyomán  használjuk fel, hogy egy körvezet®ben folyó áram mágneses tere a kör síkjában fekv® bels® pontokat
vizsgálva a kör középpontjában a leggyengébb. Felírhatjuk tehát a következ® egyenl®tlenséget:
Φ2 = L2I2 > µ0
I2
2R2
R2
2π = µ0
π
2
I2R2.
Ebb®l következik, hogy 1 > µ0
π
2
R2
L2
, vagyis az I1 áram is az óramutató járásával megegyez® irányban folyik.
3. feladat. Lézerb®l jöv®, keskeny, vízszintes fénynyalábbal világítjuk meg a függ®leges, nagyon keskeny rés
középs® tartományát.
a) Mit látunk a rés mögötti, a lézersugár irányára mer®legesen elhelyezett erny®n?
b) Hogyan változik meg az erny®n látható kép, ha a rést vízszintes középvonala körül ϕ szöggel elforgatjuk? (Legyen
például ϕ = 45◦
.)
(A rést tekinthetjük egymáshoz nagyon közeli, egymástól egyenl® távolságra lev® pi iny lyukak sorozatának. Az
erny® elég távol van a rést®l.)
Radnai Gyula
Megoldás. Jelöljük a rés szélességét a-val, míg a rés megvilágított, középs® tartományának függ®leges mérete  a
lézerb®l jöv® keskeny nyaláb átmér®je  legyen b. (Szokásos iskolai kísérleti összeállítás esetén például b ≈ 23 mm,míg a nagyon keskeny rés szélessége biztosan kisebb 0,1 mm-nél.) Úgy tekinthetjük, hogy egy b magasságú és a
szélesség¶, téglalap alakú nyílás dirak iós képe jelenik meg a rést®l elég távol elhelyezett erny®n.
Ebben az esetben vízszintes síkban a
sinαk = k
λ
a
(k = ±1,±2,...)
egyenlet által meghatározott αk irányokban kioltást tapasztalunk. Ha az erny® l távolságra van a rést®l (l ≫ b ≫ a),
akkor az erny®n megjelen® kép leginkább egy vízszintes, szaggatott vonalra emlékeztet, ahol a szakaszok (függ®leges)
vastagsága b, vízszintes hosszuk pedig mintegy λl/a. (Kivételt képez a középs® szakasz, amely kétszeres hosszúságú,
mivel α = 0 irányban is er®sítik egymást a hullámok.) Ahogy sz¶kítjük a rést, a kioltási minimumhelyek egyre
távolodnak, és így az erny®n meggyelhet® szakaszok is egyre hosszabbak lesznek. El®fordulhat, hogy az erny®n végül
már sak egyetlen halvány, összefügg®, vízszintes vonal látható.
Most válaszoljunk a b) kérdésre! Ha a rést elforgatjuk, el®re döntjük a megadott vízszintes tengely körül, akkor a
lézerb®l jöv® fénynyaláb eredeti irányában továbbra is er®sítést tapasztalunk. Ez azért van így, mert igaz ugyan, hogy
a rés különböz® pontjaiba (a lézert®l mért távolságok különböz®sége miatt) más-más fázissal érkezik a síkhullám, de a
résen áthaladva és az eredeti irányban terjedve éppen akkora útkülönbséggel érkeznek az elemi hullámok az erny®höz,
hogy a teljes fáziskülönbség közöttük nulla. Ennek elképzelését sugallta a feladat szövegében az a zárójelbe tett mondat,
hogy a rést tekinthetjük egymáshoz nagyon közeli, egymástól egyenl® távolságra lev® pi iny lyukak sorozatának.
Most már sak azt kell észrevennünk, hogy ha az elemi hullámok a ϕ szögben megdöntött réssel γ szöget bezáró
irányban (γ = 90◦
− ϕ) er®sítik egymást (6. ábra), akkor ez nem sak az ábra síkjában következik be, hanem a
háromdimenziós tér minden olyan irányában, amely a rés irányával ugyan sak γ szöget zár be! (Az eredeti, függ®legesen
álló rés esetén γ = 90◦
, ezért kaptunk ott az erny®n vízszintes vonalat.)
Általában tehát azt mondhatjuk, hogy az erny®n meggyelhet® vonal egy kúpnak valamely síkmetszete lesz (7.
ábra). A kúp sú sa a rés közepe, tengelyének iránya a rés iránya, fél nyílásszöge a fenti γ, amely az elforgatás szögének
pótszöge. A sík az erny® síkja.
A meggyelhet® vonal egy kúpszelet, ami  mint tudjuk  ellipszis, parabola vagy hiperbola lehet. Parabolát
éppen akkor kapunk, ha az erny® síkja a kúp valamelyik alkotójával párhuzamos. Esetünkben ez akkor következik
be, ha a kúpnak van függ®leges alkotója. Vízszintes alkotója az eredeti fénysugár, függ®leges tehát sak akkor lehet a
másik alkotó, ha a kúp nyílásszöge 90◦
. Ekkor γ = 45◦
, ϕ = 90◦
− γ = 45◦
, ez az elforgatási szög szerepelt példaként
a feladatban.
Ha a rés fels® része 45◦
-ban el®re d®l az erny® felé, akkor az erny®n látható parabola ágai fölfelé állnak. A fény
intenzitása a sú spontban a legnagyobb, a szárakon fokozatosan gyengül.
A verseny eredménye
A beérkezett 262 dolgozat alapos átvizsgálása után a Versenybizottság az alábbi döntést hozta:
Els® díjat, s vele járó 6000 Ft pénzjutalmat nyert
Tóth Gábor Zsolt, a budapesti Árpád Gimnázium IV. osztályos tanulója, Vankó Péter tanítványa.
Második díjat nyert és egyenként 4000 Ft pénzjutalomban részesült a következ® három versenyz®:
Bárász Mihály, a Fazekas Mihály F®városi Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor tanítvá-
nya;
Lengyel Krisztián, az ELTE zikus hallgatója, aki Cegléden, a Kossuth Lajos Gimnáziumban érettségizett, mint
T¶ri László tanítványa;
Lovas Rezs®, a KLTE Gyakorló Gimnáziumának IV. osztályos tanulója, Dudi s Pál, Kirs h Éva és Szegedi Ervin
tanítványa.
Harmadik díjat nyert és egyenként 3000 Ft pénzjutalomban részesült a következ® négy versenyz®:
Fazekas Péter, az ELTE Apá zai Csere János Gyakorló Gimnáziumának IV. osztályos tanulója, Flórik György
tanítványa;
Hegyes István, a nyíregyházi Kossuth Lajos Evangélikus Gimnázium IV. osztályos tanulója, Módis Ákos tanít-
ványa;
Szabó János Zoltán, az BME m¶szaki informatika szakos hallgatója, aki Budapesten, az ELTE Apá zai Csere
János Gyakorló Gimnáziumában érettségizett, mint Zsigri Feren tanítványa;
Varga Dezs®, az ELTE zikus hallgatója, aki a miskol i Földes Feren Gimnáziumban érettségizett, mint id.
Szabó Kálmán tanítványa.
Di séretben részesült a versenyen 910. helyezést elért következ® két versenyz®: Kuru z Zoltán, a szolnoki Varga
Katalin Gimnázium IV. osztályos tanulója, Vin ze Gábor tanítványa; Perényi Márton, a Fazekas Mihály F®városi
Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor tanítványa.
Hasonlóképpen di séretben részesült a versenyen 11-18. helyezést elért alábbi nyol versenyz®:
Agod Attila, a debre eni Tóth Árpád Gimnázium IV. osztályos tanulója, Ková s Miklós tanítványa; Bíró Do-
mokos Botond, a marosvásárhelyi Bolyai Farkas Elméleti Lí eum XII. osztályos tanulója, Bíró Tibor tanítványa;Csonka Szabol s, a budapesti Árpád Gimnázium IV. osztályos tanulója, Vankó Péter tanítványa; Farkas Illés,
az ELTE zikus hallgatója, aki az ELTE Apá zai Csere János Gyakorló Gimnáziumában érettségizett, mint Pákó
Gyula tanítványa; a szolnoki Varga Katalin Gimnázium IV. osztályos tanulója, Vin ze Gábor tanítványa; Frenkel
Péter, a Fazekas Mihály F®városi Gyakorló Gimnázium III. osztályos tanulója, Horváth Gábor tanítványa; Lohner
Roland, az BME m¶szaki informatika szakos hallgatója, aki az esztergomi Temesvári Pelbárt Feren es Gimnáziumban
érettségizett, mint Halmai László tanítványa; Németh Tibor, az BME m¶szaki informatika szakos hallgatója, aki a
gy®ri Révai Miklós Gimnáziumban érettségizett, mint Somogyi Sándor tanítványa; Vörös Zoltán, a tiszavasvári Vá i
Mihály Gimnázium IV. osztályos tanulója, Víg Csaba tanítványa.
A díjkiosztásra 1995. november 24-én került sor. Ekkor az érdekl®d® diákok és tanárok megtekinthették a felada-
tokhoz kap solódó kísérleteket is, melyeket a Versenybizottság állított össze. Az Eötvös Loránd Fizikai Társulat által
biztosított pénzjutalmakat a Nemzeti Tankönyvkiadó nagyjából azonos érték¶ könyvutalványokkal egészítette ki, ezen
kívül a nyertes versenyz®k megjelent tanárai a Tankönyvkiadótól és a TypoTEX Kiadótól jutalomkönyveket vehettek
át.
A társulati díjakat Németh Judit egyetemi tanár, a Társulat alelnöke adta át biztató szavak kíséretében, míg
a Nemzeti Tankönyvkiadó által felajánlott jutalmakat Ábrahám István vezérigazgatótól vehették át a nyertesek és
tanáraik. Jelen volt és dedikálta könyvét Staar Gyula, a Természet Világa f®szerkeszt®je is, s a díjkiosztó ünnepségr®l
még aznap sugározta a helyszínen készült tudósítását a Duna Televízió.
Radnai Gyula
A
/2 l
u
l
l = 3 m
= 4 m/s
1 m
3 m/s v= d =1 m
3 m/s
4 m/s
1 m
4 m/s
5 m/s
3 m/s
1,25 m
(3−3/ 2 ) m/s m/s 3
2
2 m/s 2 4 m/s
m/s 5
2
2
=
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
R2 R1
xLEZER
ϕ
lezerfeny
γ
res
az elforgatott
lezerfeny
a feny
eredeti iranya
az elforgatott
res iranya
kupszelet
γ
γ
