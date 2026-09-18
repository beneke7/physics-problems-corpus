---
id: eotvos-1997-electron-magnetic-deflection
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1997-electron-magnetic-deflection
solution_type: official
source_document: solution-document-eotvos-1997-s
source_pdf: cache/phoxiv/eotvos/1997_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1997_S.pdf."
---

3. Egy vákuumkamrában lév® hosszú, egyenes, nagyon jó vezet®képesség¶ huzalban 10 A er®sség¶ áram folyik. A
huzaltól r1 távolságban lév® pontból v0 kezd®sebesség¶ elektronok indulnak el a huzal felé, rá mer®legesen, de ezek az
elektronok sak r0/2 távolságra képesek megközelíteni a huzalt. Mennyi lehet v0 értéke? (A földi mágneses tér hatásától
eltekinthetünk.)
(Varga István)
I. megoldás. Ha eddig nem jutott volna eszünkbe, ez az utolsó, zárójelbe tett mondat
gyelmeztet, hogy az áram
mágneses terének hatását kell
gyelembe vennünk. (Az áramvezet®nek van elektromos tere is, a nagyon jó vezet®képes-
ség¶ huzalban azonban a térer®sség a huzal belsejében és környezetében is ki si, ennek hatása most elhanyagolható.)
A mozgó töltésre a mágneses tér mindig olyan er®t fejt ki, ami a sebességre mer®leges. Ez el tudja téríteni, el
tudja kanyarítani az elektront, de nem tudja megváltoztatni a sebesség nagyságát. Helyr®l helyre változó mágneses
térben szeszélyesen kanyargó pályát írhat le az elektron, de közben sebességének nagysága végig ugyanakkora marad!
A makroszkópikus testek mozgásait vizsgálva nemigen találunk hasonlót. Még leginkább egy enyhén lejt®, szeszélyesen
kanyargó folyó mozgása hasonlít az inhomogén mágneses térben kanyargó elektronsugárra, de az elektronsugár térbeli,
háromdimenziós alakja jóval bonyolultabb lehet, mint a síkságon kanyargó folyóé.
A feladatban megadott esetben az elektronok pályája szeren sére sak két dimenziós (síkgörbe) lesz, mivel az
elektron végig benne marad a kezd®ponton és az áramvezet®n átfektethet® síkban. Ennek az az oka, hogy kezdetben
az elektron ebben a síkban indul el v0 kezd®sebességgel, a rá ható er® pedig végig mer®leges lesz mind a sebességre,
mind az el®bbi síkra mer®leges mágneses induk ió vektorra. Igaz, a B vektor nagysága változik, egyre nagyobb lesz,
ahogy az elektron közelebb és közelebb kerül az áramvezet®höz, de ez sak azt eredményezi, hogy az elektron egyre
er®sebben kanyarodik.
Az, hogy az r0 távolságból induló elektron r0/2 távolságra tudja megközelíteni a huzalt, azt jelenti, hogy r0/2
távolságban a pályagörbe már úgy elkanyarodott, hogy az elektron az áramvezet®vel párhuzamosan mozog. Azután
kanyarodik tovább, és már távolodik is az áramvezet®t®l.
Az elektron a 4. ábrán látható P pontból indul az I árammal átjárt egyenes vezet® felé, rá mer®legesen v0 kezd®-
sebességgel.
A helyr®l helyre változó B induk ióvektorú mágneses térben v sebességgel mozgó Q töltés¶ elektronra ható mágne-
ses
Lorentz-er®: F = Q(v × B). Tekintsük ennek x komponensét:
Fx = QvyB,m
∆vx
∆t
= Q
∆y
∆t
B,m∆vx = Q∆yB.
Az I árammal átjárt egyenes vezet® mágneses tere, t®le r távolságban:
B =
µ0
2π
I
r
.
Helyettesítsük be ezt a kifejezést a fenti mozgásegyenletbe, és használjuk fel, hogy a választott koordináta-rendszerben
∆y = −∆r:
m∆vx = Q
µ0
2π
I
−∆r
r
.
Ez az összefüggés az elektron pályájának bármely kis ∆s ívhosszúságú darabjára fennáll. Osszuk fel gondolatban a
pálya PR ívét ilyen kis ∆s darabokra! Képzeljük el, hogy mindegyikre felírunk egy ilyen összefüggést, azután a kapott
egyenleteket adjuk össze! Ezt így jelölhetjük:
R X
P
m∆vx =
R X
P
Q
µ0
2π
I
−∆r
r
.
Az állandó tényez®ket kiemelve kapjuk:
m
R X
P
∆vx = Q
µ0
2π
I
R X
P
−∆r
r
.
A bal oldalon álló összeg:
R X
P
∆vx = v0,
mivel a P kezd®pontban a sebesség x komponense zérus, az R pontban pedig v0. A jobb oldalon álló összeg:
R X
P
−∆r
r
=
r0/2
X
r0
−∆r
r
=
r X
r0/2
∆r
r
.
Ennek értékét be sléssel határozzuk meg. A 5. ábrán bevonalkázott területet kell meghatároznunk. Ha ezt trapézzal
közelítjük, a trapéz területe:
T =
r0
2
1
r0
+ 2
r0
2
=
3
4
= 0,75.
A görbe alatti terület azonban kisebb, mint a trapéz területe, vegyük közelít®leg 0,7-nek. Így végül az alábbi egyenlethez
jutottunk:
mv0 ≈ Q
µ0
2π
I · 0,7.
Ebb®l fejezzük ki v0-t, majd helyettesítsük be az ismert, illetve a megadott értékeket:
v0 ≈
Q
m
µ0
2π
I · 0,7,v0 ≈ 1,76 · 1011 C
kg
· 2 · 10−7 Vs
Am
· 10 A · 0,7,v0 ≈ 2,46 · 105 m
s
.
Az elektronokat tehát mintegy 250 km/s sebességgel kell kil®ni r0 távolságból, hogy r0/2 távolságra megközelítsék
a 10 A-es árammal átjárt egyenes vezet®t.
Megjegyzések. 1. Nagy vagy ki si a kapott sebesség? Makroszkópikus, földi testek sebességéhez képest nagy: az els®
kozmikus sebesség is sak mintegy 8 km/s, s a Naprendszer elhagyásához is elég egy 20 km/s-nál kisebb sebesség. A
fény sebességéhez képest viszont ki si, hiszen az 300 ezer km/s. Ezért is lehetett a relativisztikus tömegnövekedést®l
eltekinteni a feladat megoldása során. Még a katódsugár s®ben (TV, osz illoszkóp, elektronmikroszkóp) futó elektronok
sebességéhez képest is kis sebességet kaptunk, hiszen már kb. 0,2 V gyorsító feszültség hatására elérik az elektronok
ezt a sebességet.
2. A feladat megoldása során elegend® volt a Lorentz-er® x komponensét megvizsgálni. Mire jutnánk az y komponens
vizsgálatával? Nem sokra, mivel ez a sebesség x komponensét®l függ, s az x koordinátát sak közvetve, a pálya
egyenletét ismerve lehet összekap solni r-rel, amit®l B függ. A pálya görbületét azonban megkaphatjuk a Lorentz-er®
nagyságából.
m
v2
0
̺
= Qv0B,
1
̺
=
Q
m
B
v0
=
Q
m
1
v0
µ0
2π
I
r
.
3. A versenyz®k közül jó néhányan tudták az
1
r
függvényt integrálni, ®k pontosan is meghatározták a görbe alatti
területet:
r0
2 Z
r0
−dr
r
=
h
lnr
ir0
r0
2
= ln2 ≈ 0,6931.
Nem is olyan rossz a 0,7-es be slés!
4. Az elektron pályagörbéjének több érdekes tulajdonságát lehet még felfedezni. Az egyik ilyen érdekesség az, hogy
az r0-ról így kil®tt elektron nem sak hogy r0/2-re tudja megközelíteni az áramvezet®t, de nem is tud 2r0-nál messzebb
eltávolodni t®le. Általában, ha r0/n-re tudja megközelíteni, akkor nr0-ra tud eltávolodni t®le. Másképp fogalmazva:
a legkisebb és a legnagyobb távolság mértani közepe az a távolság, ahol éppen az áramvezet®re mer®legesen halad. A
további érdekességek megállapítását az olvasóra bízzuk.
II. megoldás. (Ková s Gábor dolgozata alapján.) Tekintsünk egy  álló  koordináta-rendszert, amelyben sak B
mágneses induk ió mérhet® (elektromos mez® nem), és egy másik, hozzá képest állandó v0 sebességgel mozgó  vessz®s
rendszert! Írjuk fel mindkét rendszerben a Q töltés¶ része skére ható Lorentz-er®t:
F = Q(v × B) = Q(v′
+ v0) × B = F′
= Q(v′
× B′
) + QE′
.
Látható, hogy a mozgó rendszerben  megjelent  egy v0 × B nagyságú elektromos mez® is (és az is leolvasható, hogy
B′
= B).
Üljünk bele abba a koordináta-rendszerbe, amely az áramvezet®vel párhuzamosan v0 sebességgel mozog. Innen
nézve a vezet®t®l r távolságra E(r) = v0B(r) =
µ0v0I
2π
·
1
r
nagyságú elektromos mez® mérhet® (iránya a vezet®re
mer®leges), ami az U(r) = −
µ0v0I
2π
lnr elektromos poten iálból is származtatható (annak negatív deriváltja).
Az elektron kezd®sebessége (r0 távol a vezet®t®l) a vessz®s rendszerben
√
2v0, amikor pedig r0/2-nyire megközelíti
az áramvezet®t, akkor éppen megáll. Alkalmazzuk a munkatételt a szóban forgó mozgásra:
1
2
m
 √
2v0
 2
−
µ0v0IQ
2π
lnr0 = −
µ0v0IQ
2π
ln
r0
2
,
ahonnan v0-ra éppen az I. megoldásban megadott számérték adódik.
A verseny eredménye
Összesen 216 versenyz® adott be dolgozatot; 213 magyar, 2 román és 1 ukrán állampolgárságú versenyz®. Buda-
pesten érettségizett az összes magyarországi versenyz®k 12 %-a, vidéken érettségizett ugyan sak 12 %. Vidéki utolsó
éves középiskolás volt 30 %, budapesti utolsó éves középiskolás 14 %. A még
atalabb versenyz®k közül Budapesten
járt középiskolába az összes hazai versenyz®k 12 %-a, vidéken pedig 20 %.
Idén a feladatok kissé nehéznek bizonyultak: nem volt olyan versenyz®, aki mindhárom feladatot jól megoldotta
volna. Ezért a Versenybizottság úgy döntött, hogy az els® díjat nem adja ki, és az alábbi határozatot hozta:
Második díjat nyert egyenl® helyezésben a következ® két versenyz®:
Ková s Gábor, az ELTE
zikus hallgatója, aki a soproni Berzsenyi Dániel Evangélikus Lí eumban érettségizett
mint Lang Jánosné tanítványa;
Várkonyi Péter László, a BME építészmérnök hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnázium-
ban érettségizett mint Horváth Gábor tanítványa.
Harmadik díjat nyert egyenl® helyezésben a következ® három versenyz®:
Egri Gy®z®, az ELTE
zikus hallgatója, aki a budapesti Alternatív Közgazdasági Gimnáziumban érettségizett
mint Korom Pál tanítványa;
Gyurkó Martin, a zalaegerszegi Ságvári Endre Gimnázium 12. évfolyamának tanulója, Rádulyné Horváth Katalin
tanítványa;
Kon z Imre, a BME m¶szaki menedzser szakos hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban
érettségizett mint Horváth Gábor tanítványa.
Az Eötvös Loránd Fizikai Társulat a második díjas versenyz®ket 8 8 ezer, a harmadik díjas versenyz®ket 5 5 ezer
forint pénzjutalomban részesítette.
A Versenybizottság di séretben részesítette a 6 15. helyezést elért versenyz®ket.
A verseny 6 10. helyezettje egyenl® helyezésben:
Bér zi Gergely, a szegedi Ságvári Endre Gyakorló Gimnázium 12. évfolyamának tanulója, Tóth Károly tanítvá-
nya;
Boja Ben e, a budapesti Árpád Gimnázium 12. évfolyamának tanulója, S huszter Feren tanítványa
Jakabfy Tamás, az ELTE alkalmazott matematikus hallgatója, aki a zalaegerszegi Zrínyi Miklós Gimnáziumban
érettségizett mint Vadvári Tibor tanítványa;
Karádi Ri hárd, a gy®ri Révai Miklós Gimnázium 12. évfolyamának tanulója, Nagy Attila és Somogyi Sándor
tanítványa;
Mátrai Tamás, az ELTE matematikus hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érett-
ségizett mint Horváth Gábor tanítványa.
A verseny 11 15. helyezettje egyenl® helyezésben:
Felföldi Zsolt, a Fazekas Mihály F®városi Gyakorló Gimnázium 11. évfolyamának tanulója, Horváth Gábor és
Dvorák Ce ília tanítványa;
Kormos Márton, a debre eni KLTE Gyakorló Gimnáziumának 12. évfolyamú tanulója, Farkas József és Szegedi
Ervin tanítványa;
Péterfalvi Csaba, a szekszárdi Garay János Gimnázium 11. évfolyamának tanulója, Bayer József tanítványa;
Pogány Ádám, a Fazekas Mihály F®városi Gyakorló Gimnázium 12. évfolyamú tanulója, Horváth Gábor tanítvá-
nya;
Sarlós Feren , a bajai III. Béla Gimnázium 12. évfolyamú tanulója, Polgár László tanítványa.
A díjakat, jutalmakat és okleveleket az Eötvös Fizikai Társulat elnöke adta át.
A Nemzeti Tankönyvkiadó több ezer forint összérték¶ könyvutalvánnyal, a M¶szaki-Calibra kiadó pedig értékes
könyv somagokkal egészítette ki az els® 15 helyezett versenyz® társulati elismerését. Külön meglepetésként   most már
nem el®ször   a fenti két kiadó, kiegészülve idén a TypoT EX és a SCOLAR kiadókkal, ajándék könyvekkel lepte meg
a nyertes versenyz®k tanárait.
Végül az ünnepi eredményhirdetés utolsó aktusaként diákok és tanáraik a megjelent volt Eötvös verseny nyerte-
sekkel találkoztak, akiket a Versenybizottság elnöke mutatott be a hallgatóságnak.
Radnai Gyula
N
N
F
F
D
H
D
D
L l
D
N
F
árnyék
1 m
x x x x x x x
x x x x
x
x x x x x
x
x
x x
I
P
R
r
r
0
x
y
0
v
v0
x x x x x x x
x x x
x x x x x x x x
x x x x
x
v0
v
v
x
y
x x x x
0/2
/2
r
1/r
r r 0 0
