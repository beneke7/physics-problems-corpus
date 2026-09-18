---
id: eotvos-1998-solenoid-induction
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1998-solenoid-induction
solution_type: official
source_document: solution-document-eotvos-1998-s
source_pdf: cache/phoxiv/eotvos/1998_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1998_S.pdf."
---

3. Egy szolenoid keresztmetszete d oldalél¶ négyzet, hossza L (L ≫ d). A teker sben folyó egyenáram hatására
mélyen a szolenoid belsejében B0 induk iójú homogén mágneses maz® alakul ki. A teker set függ®legesen helyeztük el.
Közvetlenül a teker s fels® vége felett egy ugyan sak d oldalél¶, négyzet alakú, vízszintes vezet® keret függ l hosszúságú
fonalakon (l ≫ d), a 6. ábránlátható módon. A keret tömege m, elektromos ellenállása R.
A szolenoidot hirtelen vízszintesen, jobb felé elrántjuk. Melyik irányban lendül ki és milyen magasra emelkedik fel
az ingaszer¶en felfüggesztett keret?
(Gnädig Péter)
Megoldás.
Gondoljuk át a folyamatot! Az ingaszer¶en felfüggesztett keret mágneses mez®be merül. Ha  kimegy alóla  a
szolenoid, kimegy a mez® is   ez pedig feszültséget indukál a keretben. A fellép® indukált áramra hat a távozóban
lév® mágneses mez®, ami a józan sejtés szerint maga után rántja a keretet is. Mindezeket a sejtéseket megfelel®
zikai
törvényekkel kell még alátámasztanunk (vagy meg áfolnunk), s a kvantitatív törvények alkalmazásával majd arra is
válaszolni tudunk, hogy milyen magasra emelkedik fel a keret.
A megoldás egyik kul skérdése az, hogy mit állíthatunk arról a mágneses mez®r®l, amibe belemerül a keret. Tudjuk,
hogy a mágneses induk ióvektor nagysága mélyen a teker s belsejében B0, de milyen a mágneses mez® a szolenoid
végén? Az is elég lenne, ha a
uxust meg tudnánk határozni.
Egy kis gondolatkísérlet segíteni fog. Tudjuk, hogy a
uxus mélyen a szolenoid belsejében: B0 · A = B0 · d2
.
Gondolatban vágjuk itt a szolenoidot vízszintesen ketté! Nem kell a huzalt is elvágnunk, supán gondoljuk azt, hogy
itt két, azonos keresztmetszet¶ és menetemelkedés¶, azonos árammal átjárt teker s van összetolva. Nyilvánvaló, hogy
mindkét teker s azonos mértékben járul hozzá az itt kialakuló
uxushoz, amib®l pedig már következik, hogy a mágneses

uxus a szolenoid végénél:
1
2
B0d2
.
Nem állíthatjuk azt, hogy a mágneses mez® a szolenoid végén is homogén; a B vonalak széthajlanak. Azt azonban
bizton állíthatjuk, hogy a mágneses induk ióvektor függ®leges komponense a teker s végénél mindenhol
1
2
B0 nagyságú.
A d élhosszúságú, négyzet alakú keret tehát egy olyan mágneses mez®be merül, amelynek
uxusa Φ =
1
2
B0d2
.
Amikor   mondjuk ∆t id® alatt   elrántjuk a szolenoidot, ez a
uxus zérusra sökken. Így a keretben indukálódó
feszültség nagysága:
|Uind| =
∆Φ
∆t
=
B0d2
2∆t
.
A ∆t id® alatt megsz¶n®
uxus által a keretben indukált áram nagysága:
I =
1
R
B0d2
2∆t
.
Tételezzük fel, hogy pontosan ekkora áram folyik ∆t id®n keresztül a keretben   addig és sak addig, amíg változik a

uxus. De hát eközben a keret jobb oldali, d hosszúságú szakaszára (az itt folyó áramra) még er®t fejt ki a mágneses
mez®! Írjuk fel az erre ható er®lökést:
F · ∆t = BId · ∆t =
B0
2
1
R
B0d2
2∆t
d · ∆t.
Ez a keretnek mv0 = F∆t =
B2
0d3
4R
lendületet ad. A keret tehát
v0 =
B2
0d3
4Rm
sebességgel kilendül, és felemelkedik
h =
v2
0
2g
=
B4
0d6
32R2m2g
magasságra.
Már sak azt kell meghatároznunk, hogy milyen irányban lendül ki a keret. A feladathoz tartozó ábráról leolvasható,
hogy a mágneses induk ióvektor a szolenoid belsejében függ®legesen felfelé irányul. A szolenoid elrántása közben a
keretben olyan irányú áram indukálódik, amelyik (Lenz törvénye alapján) a keret
uxusának sökkenését akadályozni
igyekszik. Ezek szerint az indukált áram a keretben felülr®l nézve az óramutató járásával ellentétes irányú, mivel
az ebb®l származó induk ióvektor mutat felfelé. A keret jobb oldali szakaszán ezek szerint befelé, hátrafelé folyik az
indukált áram. Ez ∆t ideig bemerül egy olyan mágneses mez®be, amelyben a mágneses induk ióvektor függ®leges
komponense felfelé mutat. Az erre ható er® pedig jobbra irányul!
Tehát a keret jobbra fog kilendülni. Helyes volt a sejtésünk, az elrántott teker s maga után rántja a keretet.
Érdemes még kitérnünk arra, hogy valójában a keretben folyó áram nem lesz végig ugyanakkora, supán az átlag-
értéke az az I, amit kiszámítottunk. Ennek megfelel®en az áramra ható er® sem állandó, viszont az Fátl
· ∆t szorzat
pontosan megadja azt a vízszintes er®lökést, amit a keret kap.
Természetesen ahhoz is id®re van szükség, hogy a keret sebessége nulláról v0-ra n®jön, az eközben megtett utat
elhanyagoltuk a fenti megoldásban. Ez a szokásos elhanyagolás a ballisztikus inga és sok hasonló ütközési folyamat
tárgyalásából ismer®s. Eredményünk tehát most is sak közelít® érvény¶, pontossága a közelítés jogosságától függ. A
feladat ugyan paraméteresen lett kit¶zve, az  elrántás  szó utalt azonban arra, hogy a fenti közelítést joggal alkalmaz-
hatjuk.
A verseny eredménye
Els® díjatés vele 6 ezer forintos pénzjutalmat nyertek:
Sarlós Feren , a JATE
zikus hallgatója, aki a bajai III. Béla Gimnáziumban érettségizett mint Polgár László,
Szkladányi András és Hilbert Margit tanítványa;
Végh Dávid, az ELTE
zikus hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett
mint Horváth Gábor tanítványa.
Második díjatés vele 5 ezer forintos pénzjutalmat nyertek:
Rozsonday Gerzson, a debre eni KLTE Gyakorló Gimnáziumának 12. osztályos tanulója, Kirs hÉva és Szegedi
Ervin tanítványa;
Somogyi Gábor, a KLTE
zikus hallgatója, aki a debre eni Tóth Árpád Gimnáziumban érettségizett mint Baló
Péter tanítványa;
Terpai Tamás, a Fazekas Mihály F®városi Gyakorló Gimnázium 12. osztályos tanulója, HorváthGábor tanítványa.
Harmadik díjatés vele 4 ezer forintos pénzjutalmat nyertek:
Gulyás Nándor, a mez®ková sházai Hunyadi János Gimnázium 12. osztályos tanulója, Sallai István és Varga
István tanítványa;
Heged¶s Ákos, a pé si iszter i Nagy Lajos Gimnázium 11. osztályos tanulója, Orovi a Márkné tanítványa;
Kormos Márton, az ELTE
zikus hallgatója, aki a debre eni KLTE Gyakorló Gimnáziumban érettségizett mint
Szegedi Ervin és Farkas József tanítványa;
Máthé András, a budapesti ELTE Apá zai Csere János Gyakorló Gimnázium 11. osztályos tanulója, Flórik
György tanítványa;
Sz®ke Szilárd-Zsigmond, a temesvári M¶szaki Egyetem (Traian Vuia Polite hni a) mérnök hallgatója, aki a
temesvári Bartók Béla Lí eumban érettségizett mint Toró T. Tibor és Benedek István tanítványa.
Di séretet kaptak a verseny 11 18. helyezettjei:
Bálint Imre, az ELTE
zikus hallgatója, aki Szegeden, a JATE Ságvári Endre Gyakorló Gimnáziumban érettsé-
gizett mint Homolya Ern® tanítványa;
Császár Balázs, a BME mérnök-
zikus hallgatója, aki a szombathelyi premontrei rendi Szent Norbert Gimnázi-
umban érettségizett mint Heigl István és Ková s László tanítványa;
Katona Gergely, a budapesti ELTE Trefort Ágoston Gyakorlóiskola 12. osztályos tanulója, Szörényi Zoltán
tanítványa;
Nagy Kálmán, a budapesti Veres Péter Gimnázium 12. osztályos tanulója, VargaMária tanítványa;
Pogány Ádám, az ELTE
zikus hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett
mint Horváth Gábor tanítványa;
Rá z Balázs, a budapesti Veres Péter Gimnázium 12. osztályos tanulója, Varga Mária tanítványa;
Tóth Bálint, a Fazekas Mihály F®városi Gyakorló Gimnázium 12. osztályos tanulója, Horváth Gábor és Dvorák
Ce ília tanítványa;
Tóth Gyula, a debre eni Tóth Árpád Gimnázium 12. osztályos tanulója, Ková s Miklós tanítványa.
Az ünnepélyes eredményhirdetésre a BME Fizikai Intézetében került sor 1998. november 20-án.
A megjelent versenyz®ket és tanáraikat a házigazdák nevében Kertész János egyetemi tanár üdvözölte, majd a
Versenybizottság elnöke emlékezett meg a 100 évvel ezel®tti versenyr®l s annak nyerteseir®l. Az els® díjat akkor Kármán
Tódor nyerte, akinek Beke Manó volt tanára a budapesti Mintagimnáziumban. A második díjas Gró
ts Gábor is a
budapesti m¶egyetemen szerzett mérnöki diplomát, akár sak Kármán Tódor.
Ezután a feladatok megoldásának diszkussziója következett, amelyhez Härtlein Károly mutatott be érdekes kí-
sérleteket. A második feladathoz kap solódó mérést s ennek számítógépes kiértékelését videón tekinthették meg a
jelenlév®k.
A díjakat az Eötvös Loránd Fizikai Társulat f®titkára: Nagy DénesLajos és helyettese, a Versenybizottság elnöke
adta át, aki köszönetet mondott a Nemzeti Tankönyvkiadónak és a TypoTeX Könyvkiadónak a felajánlott könyvutal-
ványokért és könyvekért.
A díjkiosztáson megjelent Dolinszky Tamás is, aki 1939-ben nyert díjat a versenyen.
Radnai Gyula
d
B0
L
m,R
d
d
l
l l
l
1
α
α
α r
r
M
r
F m
m
l
l
F2
1
2
2
1
00000000
00000000 00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000 00000000
00000000 00000000
00000000 00000000 00000000
00000000 00000000 00000000
00000000 00000000
00000000 00000000
11111111
11111111 11111111 11111111 11111111 11111111
11111111 11111111 11111111 11111111 11111111
11111111 11111111 11111111 11111111 11111111
11111111 11111111 11111111 11111111 11111111
11111111 11111111
11111111 11111111 11111111
11111111 11111111 11111111
11111111 11111111
11111111 11111111
hegy
Gellert-
T
T2
1
. .. .. .
.
.
.
.
.
. .. . . . .. .
.
.. .
. .
.
.
.
.
.
. .
.
.
..
.
. .. . . ..
.
ρ ρ ρ
ρ
0
ρ
0
ρ
0
a) b) c)
l
z
l
z
l
z
. .. . . . .. .
.
.. .
. .
.
.
.
.
.
. .
.
.
..
.
. .. . . ..
.
ρ
ρ
0
. .. . . . .. .
. .. .. . . .. ..
. . .
.
..
.
. .. . . ..
.
ρ
l/2
ρ0
l
z z
l
