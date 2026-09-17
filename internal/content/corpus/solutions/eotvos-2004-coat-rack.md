---
id: eotvos-2004-coat-rack
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2004-coat-rack
solution_type: official
source_document: solution-document-eotvos-2004-s
source_pdf: cache/phoxiv/eotvos/2004_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2004_S.pdf."
---

1. Egy habókos lakberendez® állófogast tervez, két változatban. Egy negyedkörív alakú, vékony, de er®s rugalmas
fémszálat egyik végénél szilárdan hozzáer®sít egy merev törzshöz, egyszer az a), másszor a b) elrendezésben (1. ábra).
Meglep®dve tapasztalja, hogy ha ugyanakkora terhet akaszt a fogasokra, a fémszálak végpontja nem ugyanannyival
süllyed le a két esetben.
1. ábra
Okoskodjuk ki egyszer¶ megfontolásokkal, hogy melyik esetben nagyobb a végpont lesüllyedése!
Megoldás. Vegyük észre, hogy a küls® er® hatására a negyedkörív alakú rugalmas fémszál alakja fog megváltozni,
pontosabban az er® által kifejtett (pontról pontra változó) forgatónyomaték okozza a szál alakjának megváltozását.
A szál hosszának megváltozása (megnyúlása) elhanyagolható a szál alakjának megváltozása (lehajlása) mellett.
Célszer¶ lesz a két fémszál alakváltozását úgy összehasonlítani, hogy köl sönösen egyértelm¶en megfeleltetjük
egymásnak a két szál pontjait. A megfeleltetett pontokban fellép® deformá iókat (elhajlásokat) hasonlítjuk össze,
majd megvizsgáljuk, hogy ezek a deformá iók milyen mértékben járulnak hozzá a végpontok lesüllyedéséhez.
Képzeljük  modellezzük  a rugalmas fémszálat nagyon kis szemekb®l álló lán nak, ahol az egyes (merev) lán sze-
meket pi iny spirálrugók kap solják egymáshoz. A lán (melynek saját súlyát elhanyagoljuk) terheletlen állapotában
pontosan negyedkört formál.
Írjuk fel, hogy mekkora forgatónyomatékot gyakorol a teher függ®leges irányú G súlya a fémszálnak ϕ szöggel
jellemzett helyén az ottani spirálrugóra (2. ábra)! (Ezen rugó elfordulása nyomán kialakuló visszatérít® nyomaték
fogja majd G-nek azon a helyen fellép® forgatónyomatékát kiegyenlíteni, kompenzálni.)
Amint az az ábráról is leolvasható, ugyanazon ϕ szöghöz tartozó pontokban az M forgatónyomaték az a) esetben
sohasem lehet kisebb a b) esetben fellép®nél, mivel sinϕ ≥ 1 − cosϕ. Az egyenl®ség sak ϕ = 0 és ϕ =
π
2
esetben
(vagyis a szál végpontjainál) áll fenn, közben Ma mindig határozottan nagyobb, mint Mb.
2. ábra
Ebb®l már látszik, hogy a fémszál deformá iója (görbültségének megváltozása) minden bizonnyal az a) esetben
lesz nagyobb. Azt kell még megnéznünk, hogyan jelentkezik mindez a szál végpontjának lesüllyedésében. Sejtésünk az,
hogy a nagyobb deformá ió nagyobb lesüllyedést is eredményez.
Vizsgáljuk meg, hogy ha supán a ϕ szöggel megjelölt pontban jönne létre deformá ió (ha sak az ottani kis
spirálrugó savarodna el), ez a végpontnak mekkora függ®leges elmozdulását (lesüllyedését) eredményezné!
Az a) esetben a 3. ábrán látható d PA ív elhajlása (εa) az Ma forgatónyomatékkal, a b) esetben a d PB ív (εb) elhajlása
az Mb forgatónyomatékkal arányos. Mondhatjuk, hogy az AA′
szakasz hossza annyiszorosa a BB′
szakasz hosszának,
ahányszorosa az Ma nyomaték nagysága az Mb nagyságának.
3. ábra
Vegyük észre azt is, hogy az AA′
irány közelebb áll a függ®legeshez, mint a BB′
irány! Egyszer¶ geometriai
megfontolásból következik, hogy a végpontok lesüllyedésének aránya
∆hb
∆ha
=
εb
εa
sin ϕ
2
cos ϕ
2
=
εb
εa
tg
ϕ
2
.
Másrészt
εb
εa
=
Mb
Ma
=
1 − cosϕ
sinϕ
= tg
ϕ
2
,
ezért
∆hb
∆ha
= tg2 ϕ
2
≤ 1, ha 0 ≤ ϕ ≤
π
2
.
Beláttuk tehát, hogy a két fémszál egymásnak megfeleltetett pontjai közül (a végpontoktól eltekintve) mindig az a)
esetbeli pontoknál fellép® deformá ió ad nagyobb járulékot a szál végének lesüllyedéséhez. Mivel a teljes alakváltozás
összetehet® az egyes spirálrugók deformá ióiból származó alakváltozásokból, kimondhatjuk: az a) esetben nagyobb a
szál végpontjának lesüllyedése.
Megjegyzések. 1. Energetikai megfontolásokkal és integrálszámítással numerikusan is meg tudjuk határozni a kétféle
lesüllyedés arányát, jóllehet a versenyen ez nem volt feladat.
Ha a fogas végére  óvatosan növelve a terhelést  maximálisan G nagyságú er®t fejtünk ki, és ennek hatására a
végpont ∆h-val mélyebbre kerül, akkor összesen W =
1
2
G∆h munkát végzünk. (Az
1
2
-es faktor onnan származik, hogy
az er® átlagértéke a maximális érték fele.) Ez a munkavégzés a ki sit meghajlított szálban tárolt rugalmas energiával
egyenl®, ami a szál egyes darabkáiban tárolt energiák összegeként számítható. Egy-egy darabka rugalmas energiája
 a megfeszített egyenes rugó energiaképletének analógiájára  a darabka hosszával és a végein ható forgatónyomaték
négyzetével arányos. Ezek szerint a kétféle ruhafogas energiaviszonyait összevetve:
Wa
Wb
=
∆ha
∆hb
=
R
M2
a(ϕ)ds
R
M2
b (ϕ)ds
=
R π/2
0 sin2
(ϕ)dϕ
R π/2
0
(1 − cosϕ)2 dϕ
=
1
2
π
2
π
2 − 2 + 1
2
π
2
=
π
3π − 8
≈ 2,2.
2. Természetesen más úton is eljuthatunk a helyes válaszhoz. Minden egyszer¶ megfontolás során a negyedkör
alakú rugalmas fémszálat valamilyen egyszer¶ módon modellezzük. Az egymásnak megfeleltethet® ívek, szakaszok
deformá ióit hasonlítjuk össze, s ebb®l következtetünk a végpont lesüllyedésére. Tekinthetjük az eredeti negyedkörívek
helyett akár a 4. ábrán látható derékszögeket is! Ebben a közelítésben a teljes alakváltozás két tag összegeként, a
(kezdetben) vízszintes, illetve függ®leges szárak deformá iójából tehet® össze.
4. ábra
A vízszintes szakaszok lehajlása, ha a függ®leges szárak nem tudnának elmozdulni, azonos terhelés esetén ugyan-
akkora lenne; eddig tehát még egyformán viselkedik a két ruhafogas. A függ®leges szakaszok deformá iójának hatása
a végpont lesüllyedésére azonban a két változatnál már különböz® lesz. Az a) esetben a derékszög függ®leges szára is
elgörbül (hiszen a vízszintes szár a sarokpontnál forgatónyomatékot fejt ki rá), s ez az A′
végpont további függ®leges
elmozdulását eredményezi. A b) esetben viszont a függ®leges szár alakja gyakorlatilag változatlan marad, mindössze
elfordul (a vízszintes szár lehajlása miatt); ez az elfordulás azonban a B végpont majdnem pontosan vízszintes irányú
elmozdulását hozza létre, tehát nem járul hozzá annak függ®leges irányú lesüllyedéséhez.
Látható, hogy ebben a durva modellben az a) esetbeli végpont lesüllyedése kb. kétszerese a b) esetének, és sejthet®,
hogy az eredeti, negyedkörív alakú szálakhoz visszatérve a lehajlások arányának számértéke ugyan más lesz, de az
egyenl®tlenség iránya nem változik meg.
