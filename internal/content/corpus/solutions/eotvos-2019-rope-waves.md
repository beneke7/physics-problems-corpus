---
id: eotvos-2019-rope-waves
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2019-rope-waves
solution_type: official
source_document: solution-document-eotvos-2019-s
source_pdf: cache/phoxiv/eotvos/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2019_S.pdf."
---

3. Egy nagyon hosszú kötelet vízszintes helyzetben, a súlyánál sokkal nagyobb F0 er®vel megfeszítünk. A kötél
a pozitív x tengelyen helyezkedik el, egyik vége pedig az origóban van.
a) Ha a kötél origóban lév® végét A amplitúdójú, f frekven iájú harmonikus rezg®mozgással az x tengelyre mer®leges,
vízszintes y irányban mozgatjuk, a kötélben transzverzális hullámok jönnek létre, amelyek (a kötél hosszegységre es®
tömegét®l és a feszítettségét®l függ®) c sebességgel terjednek. (A hullámok amplitúdója ki si, vagyis A ≪ c/f.) Adjuk
meg a kötél x koordinátájú pontjának t id®pillanatbeli y(x,t) kitérését!
b) Mekkora átlagos teljesítmény szükséges a kötél végének mozgatásához?
c) Most a kötél origóban lév® vége y irányban szabadon elmozdulhat, de mozgását a kötél végének v(t) sebességével
arányos, −γv(t) er® fékezi. A kötélen egy A amplitúdójú szinuszhullám érkezik az origó felé. Azt tapasztaljuk, hogy
a hullám részben vagy esetleg teljesen visszaver®dik, melynek következtében egy, az origótól távolodó, B amplitúdójú
szinuszhullám is kialakul.
Mekkora a visszavert hullám amplitúdója? Adjuk meg a B/A arányt! Vizsgáljuk a γ → ∞ és γ → 0 (nagyon er®s és
nagyon gyenge sillapítás) eseteket! Van-e olyan γ sillapítási tényez®, amelynél egyáltalán nem ver®dik vissza hullám
a kötél végér®l?
( Gnädig Péter)
Megoldás. a) A kötél végpontjának rezg®mozgását az
y(t) = Asin(2πft + ϕ0)
függvénnyel írhatjuk le, ahol ϕ0 a rezgés fázisa a 0 id®pillanatban, amely az id®mérés kezdetének megfelel® megválasz-
tásával nulla lehet.
A rezgés c sebességgel terjed az x tengely mentén, x távolságra
x
c
id® alatt ér el. Így az x koordinátájú pontban
a kitérés akkora, mint az origóban
x
c
id®vel korábban volt. Ez alapján a keresett hullámfüggvény:
y(x,t) = Asin
h
2πf

t −
x
c
 i
= Asin

2πft −
2πf
c
x

.
b) A kötél alakját egy rögzített t = t1 pillanatban az
y(x) = y(x,t = t1) = Asin

2πft1 −
2πf
c
x

egyváltozós függvény adja meg, ahol 2πft1 egy konstans.
Bármely x pontban a kötél x tengellyel bezárt szögének tangense éppen ennek a függvénynek a meredeksége, amit
legegyszer¶bben (az x változó szerinti) deriválással határozhatunk meg:
tgα(x,t = t1) =
dy
dx
= −A
2πf
c
cos

2πft1 −
2πf
c
x

.
A kötél alakja azonban változik az id®vel, így egy adott ponton a meredekség (és az α szög is) az id® függvénye
lesz. Az origóban (az x = 0 helyen) a kötél iránytangense eszerint:
tgα(t) = tgα(x = 0,t) = −A
2πf
c
cos

2πft −
2πf
c
0

= −A
2πf
c
cos(2πft).
A kötél mozgatásához szükséges (id®ben változó) pillanatnyi teljesítményt a
P(t) = Fy(t)vy(t)
szorzat határozza meg, ahol Fy(t) az általunk a kötél végére kifejtett y-irányú er®, vy(t) pedig a kötél origóban lév®
végének (y-irányú) sebessége (5. ábra).
5. ábra
Az y-irányú er® (felhasználva, hogy α ≪ 1):
Fy = −F0 sinα ≈ −F0 tgα = F0A
2πf
c
cos(2πft).
A kötél végének sebessége a rezg®mozgását leíró y(t) = y(x = 0,t) egyváltozós függvény (t szerinti, jól ismert)
deriváltja:
vy =
dy
dt
= 2πfAcos(2πft).
A pillanatnyi teljesítmény ezek alapján:
P(t) = Fy(t)vy(t) =
4π2
f2
A2
F0
c
cos2
(2πft).
6. ábra
A keresett átlagos teljesítmény   a cos2
(2πft) függvény 6. ábráról leolvasható, jól ismert átlagértéke alapján
a maximális teljesítmény fele:
P =
Pmax
2
=
2π2
f2
A2
F0
c
.
c) Ebben a részben az origó felé érkezik egy hullám. Ennek hullámfüggvénye az ellenkez® irányú terjedés miatt:
y←(x,t) = Asin

2πft +
2πf
c
x

.
A visszaver®d® hullám ismét a pozitív irányban halad:
y→(x,t) = B sin

2πft −
2πf
c
x + ϕ

,
itt fel kell vennünk egy egyel®re ismeretlen ϕ fáziskülönbséget is. A kötélen kialakuló hullám ennek a két hullámnak
a szuperpozí iója:
y(x,t) = y←(x,t) + y→(x,t).
7. ábra
A kötél vége y irányban szabadon mozoghat, így a rá ható y-irányú er®k ered®jének minden pillanatban nullának
kell lennie:
F0 sinα − γvy ≈ F0
dy
dx
− γ
dy
dt
= 0.
A hullámfüggvény és a deriváltak:
y = y← + y→ = Asin

2πft +
2πf
c
x

+ B sin

2πft −
2πf
c
x + ϕ

,
dy
dx
=
2πf
c
Acos

2πft +
2πf
c
x

−
2πf
c
B cos

2πft −
2πf
c
x + ϕ

,
dy
dt
= 2πfAcos

2πft +
2πf
c
x

+ 2πfB cos

2πft −
2πf
c
x + ϕ

.
Ezeket behelyettesítve az er®egyensúly képletébe, és rendezve:
F0
dy
dx x=0
= γ
dy
dt x=0
,
F0
2πf
c
Acos(2πft) − F0
2πf
c
B cos(2πft + ϕ) =
= γ2πfAcos(2πft) + γ2πfB cos(2πft + ϕ),
F0Acos(2πft) − F0B cos(2πft)cosϕ + F0B sin(2πft)sinϕ =
γcAcos(2πft) + γcB cos(2πft)cosϕ − γcB sin(2πft)sinϕ.
Ezeknek az egyenleteknek minden id®pontban teljesülnie kell, így a cos(2πft)-s és a sin(2πft)-s tagokra külön-külön
is:
F0A − F0B cosϕ = γcA + γcB cosϕ,
F0B sinϕ = −γcB sinϕ.
A második egyenlet alapján sinϕ = 0, ϕ = 0 (vagy ϕ = π) és így cosϕ = 1 (vagy cosϕ = −1). Ezt felhasználva az els®
egyenlet alapján:
B =
F0 − γc
F0 + γc
A.
Ha γ → ∞ (rögzítjük a kötél végét), akkor B = −A, tehát a hullám azonos amplitúdóval, de ellentétes fázisban
(π fázisugrással) ver®dik vissza.
Ha γ → 0 (a kötél vége teljesen szabadon mozog), akkor B = A, azaz a hullám szintén azonos amplitúdóval, de
most azonos fázisban ver®dik vissza.
B = 0-t akkor kapunk, ha γ = F0/c, ilyenkor tehát egyáltalán nin s visszaver®dés.
Megjegyzés. A b) és c) kérdésekre válaszolhatunk energetikai megfontolásokkal is. Ehhez a hullám   mozgási és rugalmas
helyzeti energiából származó   energias¶r¶ségét kell meghatározni.
∗
Az ünnepélyes eredményhirdetésre és díjkiosztásra 2019. november 22-én délután került sor az ELTE TTK Konfe-
ren iatermében. Jelen volt a 70 évvel ezel®tti, háború utáni els® Eötvös-verseny gy®ztese, Holi s László, aki pár szóban
visszaemlékezett erre a versenyre. Meghívást kaptak az 50 és 25 évvel ezel®tti Eötvös-verseny nyertesei is. Az 50 év-
vel ezel®tti díjazottak közül Láz József volt jelen, a 25 évvel ezel®tti díjazottak közül pedig Horváth Péter, Ková s
Krisztián, Tóth Gábor Zsolt és Varga Dezs® jött el   ®k pár mondatban beszéltek a pályafutásukról.
Ezután következett a 2019. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Ti hy
Géza, a 2. feladatét Vigh Máté, a 3. feladatét Vankó Péter ismertette.
Az esemény végén került sor az eredményhirdetésre. A díjakat Sólyom Jen®, az Eötvös Loránd Fizikai Társulat
elnöke adta át.
Mindhárom feladat helyes megoldásáért I. díjban részesült Elek Péter, a BME
zika BS . szakos hallgatója,
a Debre eni Református Kollégium Dó zy Gimnáziumának érettségizett tanulója, Tófalusi Péter tanítványa.
Két feladat hibátlan megoldásáért, illetve mindhárom feladat kisebb hibákkal való megoldásáért II. díjban részesült
Bokor Endre, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 11. osztályos tanulója, S hramek
Anikó tanítványa, Fajszi Bul sú, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos
tanulója, Horváth Gábor tanítványa, valamint Fitos Ben e, a BME
zika BS . szakos hallgatója, a Budapesti Németh
László Gimnázium érettségizett tanulója, Szászvári Irén és Dégen Csaba tanítványa.
Két feladat lényegében helyes megoldásáért III. díjban részesült Csépányi István, a BME
zika BS . szakos
hallgatója, az Egri Szilágyi Erzsébet Gimnázium érettségizett tanulója, Szabó Miklós tanítványa, Máth Benedek
Huba, a BME
zika BS . szakos hallgatója, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium
érettségizett tanulója, Horváth Gábor és Nagy Piroska Mária tanítványa, Olosz Adél, a BME épít®mérnöki BS .
szakos hallgatója, a PTE Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Kon z Károly tanítványa,
valamint Svastits Domonkos, a BME
zika BS . szakos hallgatója, a budapesti Piarista Gimnázium érettségizett
tanulója, Chikán Éva tanítványa.
Egy feladat hibátlan megoldásáért di séretben részesült Kondákor Márk, a BME
zika BS . szakos hallgatója,
a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Horváth Gábor és Nagy
Piroska Mária tanítványa, Magyar Róbert Attila, a BME
zika BS . szakos hallgatója, az Egri Dobó István Gim-
názium érettségizett tanulója, Hóbor Sándor tanítványa, valamint Pá sonyi Péter, a Zalaegerszegi Zrínyi Miklós
Gimnázium 12. osztályos tanulója, Pálovi s Róbert tanítványa.
Az els® díjjal a verseny plakettjén kívül az NKFI Hivatal által nyújtott támogatásból 70 ezer, a második díjjal
50 ezer, a harmadik díjjal 30 ezer, a di sérettel 20 ezer forint pénzjutalom járt, a díjazottak tanárai és az országos
verseny szervez®i pedig a Typotex Kiadó könyveit kapták. A verseny megszervezését az Eötvös Loránd Fizikai Társulat
ebben az évben szintén az NKFI Hivatal által az Eötvös 100 emlékév alkalmából nyújtott támogatásból fedezte.
Ti hy Géza, Vankó Péter, Vigh Máté
