---
id: eotvos-2022-chain-cylinder
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2022-chain-cylinder
solution_type: official
source_document: solution-document-eotvos-2022-s
source_pdf: cache/phoxiv/eotvos/2022_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2022_S.pdf."
---

1. feladat. Vı́zszintes tengelyű, rögzı́tett hengerre
egy vékony, hajlékony, m tömegű láncot helyezünk az áb-
rán látható módon, és nyugalomban tartjuk. A henger és
a lánc közötti súrlódás elhanyagolható.
a) Mekkora gyorsulással indul el a lánc, ha szaba-
don engedjük?
b) Mekkora a láncot feszı́tő erő legnagyobb értéke
az elengedés utáni pillanatban?
(Gelencsér Jenő)
Megoldás. a) Számı́tsuk ki a lánc gyorsulását az indulás pillanatában. Ezt
többféle módszerrel is megtehetjük.
I. módszer. Ha a lánc a gyorsulással indul, ak-
kor egy nagyon rövid t időtartam alatt az elmozdulá-
sa d = a
2
t2
, a sebessége pedig v = at lesz. Alkalmazzuk
a mechanikai energiamegmaradás törvényét erre a moz-
gásra (1. ábra).
A lánc mozgási energiája (annak megváltozása)
ΔEmozgási =
1
2
mv2
=
1
2
ma2
t2
.
1. ábra
A helyzeti energia változását legegyszerűbben úgy kaphatjuk meg, hogy gondo-
latban levágunk a lánc felső végéről egy d hosszúságú darabot, és azt a lánc alsó
1
Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm
Középiskolai Matematikai és Fizikai Lapok, 2023/2 105
i
i
2023.2.4 – 16:39 – 106. oldal – 42. lap KöMaL, 2023. február
i
i
i
i
i
i
végéhez
”
ragasztjuk”. Ennek a darabkának a tömege
Δm =
m
1
2
Rπ
d,
és mivel R távolsággal mélyebbre kerül,
ΔEhelyzeti = −ΔmgR = −
2mg
π
d = −
mg
π
at2
.
Az energiamegmaradás tétele szerint
ΔEmozgási + ΔEhelyzeti = 0,
ahonnan
1
2
mat2

a −
2
π
g

= 0.
Mivel mat2
= 0, a keresett gyorsulás:
a =
2
π
g.
2. ábra
II. módszer. Ismert (vagy táblázatokban megtalál-
ható), hogy az R sugarú, 2α nyı́lásszögű homogén körı́v
P tömegközéppontja a kör O középponttól
s =
sinα
α
R
távolságra van (2. ábra). Esetünkben α = π/4, ı́gy
s =
√
8
π
R ≈ 0,9R.
Az éppen meginduló láncot tekinthetjük merev testnek, amelynek az O pontra
vonatkoztatott tehetetlenségi nyomatéka Θ = mR2
. A láncra (merev testre) ható
külső erők forgatónyomatéka csak a nehézségi erőből származik, nagysága
M = mgs sin
π
4
= mgR
√
8
π
√
2
2
=
2
π
mgR.
(A láncra hatnak még a henger által kifejtett, helyről helyre változó kényszererők
is, ezen erők azonban – súrlódásmentes esetben – mindenhol sugárirányúak, tehát
az O pontra vonatkoztatott forgatónyomatékuk nulla.)
A forgómozgás alaptörvénye szerint a test szöggyorsulása
β =
M
Θ
=
2
π
mgR
mR2
=
2
π
g
R
,
a lánc
”
kerületi” gyorsulása pedig
a = Rβ =
2
π
g.
106 Középiskolai Matematikai és Fizikai Lapok, 2023/2
i
i
2023.2.4 – 16:39 – 107. oldal – 43. lap KöMaL, 2023. február
i
i
i
i
i
i
b) A láncot feszı́tő K erő a lánc végeinél nulla, közöt-
tük pedig valahol maximuma van. Ezt a helyet, valamint
a maximális feszı́tőerő nagyságát keressük. A lánc egy-
egy kicsiny, ϕ szöggel jellemezhető helyen lévő darabká-
jára ható nehézségi erő önmagában (éppen úgy, mint egy
ϕ hajlásszögű lejtőn) g sinϕ gyorsulást hozna létre, ami
a lánc felső részén kisebb, az aljának közelében nagyobb,
mint az egész lánc a gyorsulása (3. ábra).
Emiatt a felső részeken a láncszemekre ható feszı́tő- 3. ábra
erők különbsége általában nullától különböző, hiszen egy Δm tömegű, kicsiny lánc-
darabka mozgásegyenlete
Kelőre − Khátra + Δmg sinϕ = Δma = Δmg
2
π
,
vagyis
Kelőre = Khátra + Δm · g

2
π
− sinϕ

.
Látható, hogy a lánc felső végétől (ϕ = 0 helytől) elindulva mindaddig, amı́g
sinϕ <
2
π
, addig Kelőre > Khátra,
vagyis a K(ϕ) kényszererő (a láncot feszı́tő erő) ϕ növekvő függvénye. Ha viszont
sinϕ >
2
π
, akkor Kelőre < Khátra,
tehát ebben a tartományban a K(ϕ) kényszererő ϕ csökkenő függvénye. Ezek
szerint a kényszererő
ϕ0 = arcsin
2
π
≈ 0,69 radián ≈ 39,5◦
szögnél a legnagyobb. Itt
Kelőre = Khátra = Kmax.
Kérdés, hogy mekkora Kmax értéke. Ezt a lánc felső
(ϕ ⩽ ϕ0 szögekkel jellemzett) darabjának forgási mozgás-
egyenletéből kaphatjuk meg (4. ábra).
A kérdéses láncdarab tömege
m0 =
m
1
2
π
ϕ0,
4. ábra
a tehetetlenségi nyomatéka
Θ0 = m0R2
,
Középiskolai Matematikai és Fizikai Lapok, 2023/2 107
i
i
2023.2.4 – 16:39 – 108. oldal – 44. lap KöMaL, 2023. február
i
i
i
i
i
i
tömegközéppontjának az O ponttól mért távolsága
s0 =
sin(1
2
ϕ0)
1
2
ϕ0
R,
és a tömegközéppont távolsága az O ponton átmenő függőleges egyenestől
0 = s0 sin

1
2
ϕ0

.
A forgómozgás alapegyenlete szerint
KmaxR + m0g0 = Θ0
a
R
,
ahonnan a fentebb kiszámı́tott értékek behelyettesı́tése után kapjuk, hogy
Kmax = mg

4
π2
ϕ0 −
4
π
sin2 ϕ0
2

≈ 0,13mg.
Ugyanezt az eredményt megkaphatjuk a munkatételből is, ha felı́rjuk, hogy
egy nagyon rövid időtartam alatt a nehézségi erő munkájának és a K kényszererő
munkájának összege a kezdetben álló láncdarab mozgási energiájával lesz egyenlő.
A láncot feszı́tő erőt a fentiek mintájára tetszőleges pontban (tetszőleges
ϕ szögre) kiszámı́thatjuk:
K(ϕ) = mg

4
π2
ϕ −
4
π
sin2 ϕ
2

,
és ábrázolhatjuk is (5. ábra).
5. ábra
2. feladat. Egy téglatest alakú gáztartályt egy kétrétegű, ﬁnom szövésű fémhá-
ló oszt két részre; a két térrész térfogatának aránya 1 : 2. A fémháló két rétege
a közöttük lévő, igen keskeny rés miatt nem ér össze. A tartályban egyszeresen
pozitı́v töltésű ionokból álló gáz található. A hőmérsékletet mindkét térrészben ál-
landó, 1200 K értéken tartjuk. Milyen polaritású és mekkora egyenfeszültséget kell
108 Középiskolai Matematikai és Fizikai Lapok, 2023/2
i
i
2023.2.4 – 16:39 – 109. oldal – 45. lap KöMaL, 2023. február
i
i
i
i
i
i
kapcsolni a fémháló rétegei közé ahhoz, hogy hosszú idő után a két térrészben talál-
ható ionok száma megegyezzen? (A gáz elég ritka ahhoz, hogy a részecskék közötti
kölcsönhatás elhanyagolható legyen, az átlagos szabad úthossz pedig jóval nagyobb
a fémháló rétegeinek távolságánál. Az ionok töltése állandó.)
(Vigh Máté)
I. megoldás. Ez a gondolatmenet a kinetikus gázelméleten alapul. Elöljáróban
összefoglalunk néhány fontosabb tudnivalót, amit a megoldás során fel fogunk
használni2
.
Ismert, hogy adott T hőmérsékletű gázban a részecskék sebességének egy adott (pél-
dául x) irányba eső vetülete nem mutat egyenletes eloszlást: kisebb sebességértékek előfor-
dulása gyakoribb, mı́g a nagy értékek kevésbé valószı́nűek. Ezt az előfordulási gyakoriságot
az f(vx) Maxwell–Boltzmann-féle eloszlásfüggvénnyel lehet jellemezni, amely megadja,
hogy a részecskék mekkora hányada rendelkezik egy adott (vx,vx + dvx) intervallumba
eső sebességkomponenssel:
a (vx,vx + dvx) tartománynak megfelelő részecskék száma
összes részecske száma
= f(vx)dvx.
Ebből a meghatározásból következik, hogy
az f(vx) függvény görbe alatti területe tet-
szőleges (tehát nem csak inﬁnitezimálisan ki-
csiny) sebességintervallumon megadja az ab-
ba a tartományba eső részecskék számának
arányát a teljes részecskeszámhoz viszonyı́tva
(lásd a 6. ábrát). Ennek értelmében az f(vx) el-
oszlásfüggvény teljes görbe alatti területe szük-
ségszerűen 1 (más szóval a függvény normált).
Az f(vx) függvény alakját egy C normálá-
si tényező erejéig az x irányú mozgáshoz tarto-
6. ábra
zó mv2
x/2 energia határozza meg a Boltzmann-faktor alapján:
f(vx) = Ce−
mv2
x
2kT ,
amelyet normáleloszlásnak vagy Gauss-eloszlásnak neveznek.
Ezután térjünk rá a konkrét feladat megoldására. A koordináta-rendszerünk
x tengelyét válasszuk a fémháló sı́kjára merőlegesen, a kisebb térrész felől a nagyobb
felé mutató irányban. A kisebb térrészre vonatkozó ﬁzikai mennyiségeket jelöljük
1-es indexszel, mı́g a nagyobb térrészhez tartozó mennyiségeket 2-es indexszel.
Ha a fémháló két rétege közé nem kapcsolunk feszültséget, a gáz egyenletesen
tölti ki az egész tartályt, azaz a két térrészben a részecskeszám-sűrűség (n) megegye-
zik, az ionok számának aránya pedig a térfogatok arányával egyezik meg. A kı́vánt
végállapotban azonban a két térrész részecskeszáma egyenlő, ı́gy a részecskeszám-
sűrűségek viszonya:
n1 = 2n2.
2
Az Eötvös-versenyen bármely nyomtatott szakirodalom szabadon használható.
Középiskolai Matematikai és Fizikai Lapok, 2023/2 109
i
i
2023.2.4 – 16:39 – 110. oldal – 46. lap KöMaL, 2023. február
i
i
i
i
i
i
Ez az inhomogén elrendeződés olyan polaritású elektromos térrel tartható fenn,
amelyben a térerősség akadályozza a pozitı́v töltésű ionok áramlását a kisebb
térrészből a nagyobb térrész irányába. A sı́kkondenzátornak tekinthető fémhálónak
tehát a kisebb térrész felőli oldala lesz negatı́v töltésű, a nagyobb térrész felé eső
oldala pedig pozitı́v polaritású.
A feladat szövege szerint a részecskék átlagos szabad úthossza jóval nagyobb
a fémháló rétegeinek távolságánál, ezért a
”
kondenzátor” belsejében az ionok egy-
mással nem (pontosabban elhanyagolhatóan kis eséllyel) ütköznek, kizárólag az itt
uralkodó elektromos mező hatása alatt állnak. A nagyobb térrészből a fémháló ré-
tegei közé belépő ionok az elektromos tér hatására felgyorsulnak, majd a kisebb
térrészbe érve az ott lévő részecskékkel ütközve termalizálódnak. Ebben az irány-
ban tehát az ionok akadály nélkül áthaladnak a hálón. A kisebb térrész felől belépő
ionok azonban csak akkor tudnak áthaladni a fémhálón, ha az x irányú sebes-
ségkomponensük nagyobb egy bizonyos v∗
értéknél, ellenkező esetben az elektro-
mos tér visszafordı́tja őket. Az ilyen irányú áthaladáshoz szükséges határsebességet
a munkatételből kaphatjuk meg:
−eU = 0 −
1
2
mv∗2
−→ v∗
=

2eU
m
,
ahol e az elemi töltés, U pedig a fémhálóra kapcsolt feszültség. Itt is igaz, hogy
a vx > v∗
feltételt teljesı́tő ionok a nagyobb térrészbe érve termalizálódnak. Hogy
pontosan mekkora az a v∗
sebesség (és mekkora az ehhez tartozó U feszültség),
amelynél a két térfélben a részecskék száma azonos marad, azt vizsgáljuk meg
részletesebben!
Tekintsük a kisebb térrészben lévő részecskék közül azokat, melyeknek x irányú
sebességkomponense a rács felé mutat és a (vx,vx + dvx) tartományba esik. Ezek
az ionok az eloszlásfüggvény deﬁnı́ciója alapján n1f(vx)dvx térfogati sűrűségben
helyezkednek el a kisebb térrészben. Kicsiny Δt időtartam alatt a részecskék ezen
csoportjából csak azok az ionok érnek el a fémhálóig, melyek legfeljebb vxΔt tá-
volságra vannak attól. A fémháló teljes A területére tehát Δt idő alatt a megadott
sebességtartományban
n1f(vx)dvx · AvxΔt
7. ábra
számú ion érkezik be a kisebbik térrész fe-
lől. A fémhálóra kapcsolt feszültség miatt csak
a vx > v∗
feltételt teljesı́tő részecskék jutnak át
a nagyobb térrészbe (7. ábra), ezért az átjutó io-
nok számát a sebesség szerinti integrálként a kö-
vetkezőképp fejezhetjük ki:
ΔN1 =
∞ 
v∗
n1f(vx) · AvxΔtdvx.
110 Középiskolai Matematikai és Fizikai Lapok, 2023/2
i
i
2023.2.4 – 16:39 – 111. oldal – 47. lap KöMaL, 2023. február
i
i
i
i
i
i
Ha ezt a mennyiséget elosztjuk az A területtel és a Δt időtartammal, akkor meg-
kapjuk a kisebb térrészből a nagyobb térrészbe belépő részecskeáram-sűrűséget:
j1 =
ΔN1
AΔt
= n1
∞ 
v∗
f(vx)vx dvx.
Teljesen hasonlóan számolhatjuk ki a nagyobb térrészből a kisebbe átlépő részecs-
kék áramsűrűségét, azzal a különbséggel, hogy ilyen irányban minden olyan részecs-
ke átjut a fémhálón, amelynek x irányú sebességkomponense negatı́v:
j2 = n2
0 
−∞
f(vx)vx dvx.
Látható, hogy j2 negatı́v, hiszen a negatı́v x tengely irányába történő részecske-
áramlást ı́r le. Állandósult állapotban (lásd a 8. ábrát) a nagyobb térrészbe belépő
és onnan kilépő részecskék áramsűrűségének előjeles összege zérus:
j1 + j2 = 0.
8. ábra
Felhasználva f(vx) korábban felı́rt alakját:
n1
∞ 
v∗
Ce−
mv2
x
2kT vx dvx + n2
0 
−∞
Ce−
mv2
x
2kT vx dvx = 0.
Az integrálok kiszámı́tásához érdemes áttérni a w = mv2
x/(2kT) változóra. Ennek
segı́tségével
dw =
m
kT
vx dvx,
ı́gy a fenti egyenlet egyszerűsı́tések és az integrálási határok megváltoztatása után
ı́gy ı́rható:
n1
∞ 
eU
kT
e−w
dw + n2
0 
∞
e−w
dw = 0.
Középiskolai Matematikai és Fizikai Lapok, 2023/2 111
i
i
2023.2.4 – 16:39 – 112. oldal – 48. lap KöMaL, 2023. február
i
i
i
i
i
i
Az integrálokat most már elvégezhetjük:
n1[−e−w
]
∞
eU
kT
+ n2[−e−w
]
0
∞ = 0.
A primitı́v függvényeket a határokon kiértékelve kapjuk:
n1e−
eU
kT − n2 = 0,
ahonnan a keresett U feszültség:
U =
kT
e
ln

n1
n2

=
kT
e
ln2 ≈ 72 mV.
Megjegyzés. Voltak versenyzők, akik a ﬁzikai jelenséget részletesen átlátták, az áram-
sűrűségekre felı́rt integrálokat azonban nem számolták ki, ehelyett észszerű becsléseket
végeztek. A Versenybizottság ezeket a közelı́téseket is értékelte.
II. megoldás. Az állandósult állapot kialakulása után a kisebb térrészben két-
szer akkora lesz a nyomás, mint a nagyobb térrészben, hiszen a hőmérséklet és
részecskeszám ugyanakkora, a térfogatok aránya viszont 1 : 2:
p1 = 2p2.
Végezzük el a következő gondolatkı́sérletet. A kisebb térrészben vegyünk körbe ΔN
számú iont egy könnyű ballonnal, ahol ΔN sokkal kisebb a teljes gázmennyiség
9. ábra
részecskeszámánál. Jelölje a ballon kezdeti térfo-
gatát ΔV1. Vigyük át gondolatban ezt a ballont
a másik térrészbe, majd engedjük ott izotermi-
kusan kitágulni akkora ΔV2 térfogatig, ameddig
a bezárt gáz nyomása p1 értékről p2-re csökken
(9. ábra). Számı́tsuk ki, mekkora munkát kell vé-
geznünk a folyamat közben!
Amikor a ΔV1 térfogatú ballont a kisebb térrészből eltávolı́tjuk, a térrészben
lévő p1 nyomású gáz igyekszik a ballont
”
kilökni”onnan. Ennek megakadályozására
nekünk negatı́v,
W1 = −p1ΔV1
munkát kell végeznünk. Ezután a fémháló elektromos mezőjén a térerősséggel el-
lentétes irányban kell elmozdı́tani az eΔN össztöltésű gázmennyiséget, ez további
W2 = eΔN · U
munkát igényel. Amikor a ballont izotermikusan kitágı́tjuk a végső ΔV2 térfogatra,
az általunk végzett munka negatı́v, értéke
W3 = −ΔNkT ln
ΔV2
ΔV1
.
112 Középiskolai Matematikai és Fizikai Lapok, 2023/2
i
i
2023.2.4 – 16:39 – 113. oldal – 49. lap KöMaL, 2023. február
i
i
i
i
i
i
Nem szabad megfeledkeznünk arról sem, hogy a nagyobb térrészben ΔV2 térfogatú
helyet kell szorı́tani az oda átvitt gázmennyiségnek, ehhez
W4 = p2ΔV2
munka szükséges. A képzeletbeli folyamat során tehát összesen
Wteljes = −p1ΔV1 + eΔN · U − ΔNkT ln
ΔV2
ΔV1
+ p2ΔV2
munkát végeztünk. Vegyük észre, hogy az első és az utolsó tag kiejti egymást, hiszen
az ideális gázok állapotegyenlete szerint
p1ΔV1 = ΔNkT, p2ΔV2 = ΔNkT.
Szintén ebből következik, hogy a ballon végső és kezdeti térfogatának aránya kife-
jezhető a nyomások arányával:
ΔV2
ΔV1
=
p1
