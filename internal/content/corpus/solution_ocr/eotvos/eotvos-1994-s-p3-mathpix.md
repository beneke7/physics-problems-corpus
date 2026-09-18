---
id: solution-ocr-eotvos-1994-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1994_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1994-charged-pendulum]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. feladat. Függőleges földelt fémsíktól $d$ távolságra felfüggesztünk egy $l$ hosszúságú fonálingát. Miután az $m$ tömegü, kicsiny ingatestet elektromosan feltöltöttük, az inga újra egyensúlyi helyzetet vett fel, s most $\alpha$ szöget zár be a függőlegessel (6. ábra).
| Mekkora az ingatest töltése?
| Mennyivel kell közelebb vinnünk a fémsíkot az inga felfüggesztési pontjához, ha azt akarjuk, hogy a függőleges fémsík magához rántsa az ingát?
| Anélkül, hogy közelebb vinnénk, tudjuk-e úgy mozgatni a mindig függőleges fémsíkot, hogy hozzácsapódjon az inga?

A fonál szigetelő, a levegő hatása elhanyagolható, s a feladatot az alábbi numerikus értékek esetén oldjuk meg: $d = 0,5 \mathrm {~m} ; l = 4 \mathrm {~m} ; m = 10 ^ { - 3 } \mathrm {~kg} ; \alpha = 1 ^ { \circ }$.

Radnai Gyula
Megoldás. Tisztázzuk először a fémsík szerepét! Tudjuk, hogy elektrosztatikus esetben a fémek felülete mindig ekvipotenciális. (Addig-addig mozognak, rendeződnek rajtuk a töltések, amíg ez az állapot ki nem alakul.) Ez azt


jelenti, hogy a fémek felületénél az elektromos térerősségnek nem lehet érintő irányú komponense, vagyis a térerősség minden pontban merőleges a fém felületére. A feladatban ponttöltés és sík fémfelület szerepel, ezért az erőtérnek a 7(a) ábrán vázolt szerkezetünek kell lennie. Ezzel az erőtérrel ekvivalens egy olyan dipólus erőterének „egyik fele”, amelyet egymástól $2 x$ távolságra lévő $Q$ és $- Q$ ponttöltések hoznak létre, ahogyan azt a 7(b) ábrán vázoltuk.

A fémsík hatása tehát minden tekintetben helyettesíthető egy $- Q$ nagyságú ú.n. „tükörtöltés” hatásával. Ennek a felismerésnek köszönhetően azt az erőt, amit a fémsík fejt ki a $Q$ tötésre, úgy is kiszámíthatjuk, mint a tükörtöltés által kifejtett vonzóerőt.

A Coulomb-erőn kívül a $Q$ töltésre még két erő hat ( 8 . ábra): a nehézségi erő és a fonálerő. A három erő eredője akkor zérus | akkor van egyensúly |, ha a Coulomb-erő és a nehézségi erő hányadosa tg $\alpha$-val egyenlő. Ebből határozhatjuk meg a $Q$ töltés keresett értékét.

$$
m g \operatorname { tg } \alpha = k \frac { Q ^ { 2 } } { [ 2 ( d - l \sin \alpha ) ] ^ { 2 } } .
$$

Átrendezés után:

$$
Q = 2 ( d - l \sin \alpha ) \sqrt { \frac { m g } { k } \operatorname { tg } \alpha } ,
$$

$\left( k = 9 \cdot 10 ^ { 9 } \frac { \mathrm { Nm } ^ { 2 } } { \mathrm { C } ^ { 2 } } , g = 9,81 \frac { \mathrm {~m} } { \mathrm {~s} ^ { 2 } } \right.$, a többi paraméter értéke a feladatban adott). Behelyettesítések után kapjuk:

$$
Q = 1,187 \cdot 10 ^ { - 7 } \mathrm { C } .
$$

Mi történik, ha a fémsíkot közelebb visszük az ingához? A Coulomb-erő nő, mivel a tükörtöltéstől való távolság csökken. A nehézségi erő nem változik, tehát egy nagyobb $\alpha$ szög esetén tud újra beállni az egyensúly. De van-e ilyen új $\alpha$ szög? Hiszen az inga kilendülésével a Coulomb-erő tovább nő, és lehet, hogy az inga meg se áll addig, amíg hozzá nem csapódik a fémsíkhoz.

Meg kell határoznunk azt az összefüggést, amely egyensúly esetén fennáll $d$ és $\alpha$ között. Formálisan tekintsük $d$-t $\alpha$ függvényének, s fejezzük ki ezt a függvényt az egyensúlyra már felírt fenti összefüggésből. Ezt kapjuk:

$$
d = d ( \alpha ) = l \sin \alpha + \sqrt { \frac { k Q ^ { 2 } } { 4 m g } } \frac { 1 } { \sqrt { \operatorname { tg } \alpha } } .
$$

A függvény menete viszonylag kis $\alpha$ értékek környezetében a 9. ábrán látható módon egy minimumot mutat. Van tehát egy olyan legkisebb $d$ érték, amelynél közelebb nem vihetjük a fémsíkot. Ha közelebb visszük, nincs egyensúlyi állapot, tehát hozzácsapódik az inga a fémsíkhoz.

Határozzuk meg $d$ minimumát!
(Akiknek gondot okoz e kissé bonyolult függvény differenciálása, úgy segíthetnek magukon, ha | felismerve, hogy csak kis szögekröl van szó |, $\sin \alpha$ és $\operatorname { tg } \alpha$ helyére $\alpha$-t írnak. Ekkor csak hatványfüggvényeket kell deriválni, s a végeredmény legfeljebb a negyedik-ötödik értékes jegyben tér el a pontos eredménytől.)

A minimum helyére $\left( \alpha ^ { * } \right)$ kapjuk:

$$
\sin 2 \alpha ^ { * } \left( \approx 2 \alpha ^ { * } \right) = \sqrt [ 3 ] { \frac { k Q ^ { 2 } } { 2 m g l ^ { 2 } } } , \quad \text { ebből } \quad \alpha ^ { * } = 2,12 ^ { \circ } ,
$$

$d$ legkisebb lehetséges értékére pedig ez adódik:

$$
d _ { \min } = 0,4435 \mathrm {~m} = 44,35 \mathrm {~cm} .
$$

Mivel a fémsík eredetileg 0,5 méterre volt az inga felfüggesztési pontjától, ezért ahhoz, hogy a fémsík magához rántsa az ingát, legalább $\Delta d = 5,65 \mathrm {~cm}$-rel közelebb kell vinni.

Már csak arra kell válaszolnunk, hogy tudjuk-e úgy mozgatni a fél méterre lévő fémsíkot, hogy hozzácsapódjon az inga akkor is, ha sohasem kerül a fémsík fél méternél közelebb a felfüggesztési ponthoz.

Igen, tudjuk: „be kell lengetni az ingát", mint egy hintát. Elöször eltávolítjuk a fémsíkot, ekkor az inga hátralendül. Amikor az inga elindul visszafelé, visszahozzuk a fémsíkot, hogy vonzóerejével növelje a lengés amplitúdóját. Lényegében az inga lengésével szinkronban, de mindig ellentétes fázisban kell mozgatni a fémsíkot. Akármilyen kis amplitúdóval is rezegtetjük a fémsíkot, ha ez megfelelő fázisban történik, előbb-utóbb hozzácsapódik az inga.

Kiegészítő megjegyzések.

1. Tanulságos áttekinteni a feladat energetikai megoldását is. Nemcsak azért, mert ez egy második megoldás, hanem azért is, mert olyan új felismeréshez vezet, amely az előző megoldásból nem derült ki.

A fémsíkon influált (elektromosan megosztott) töltésrendszer potenciális energiájának felírása elég bonyolult feladat, ezért ismét alkalmazzuk a tükörtöltéses módszert. Az inga + fémsík rendszer helyett tekintsük az inga + tükörképinga


rendszert (10. ábra), és írjuk fel e két ingából álló rendszer öszes potenciális energiáját! Ez a két ingatest gravitációs helyzeti energiáiból és az elektrosztatikus kölcsönhatási energiáiból tevődik össze (az utóbbi negatív).

$$
U = m g ( l - l \cos \alpha ) + m g ( l - l \cos \alpha ) - k \frac { Q ^ { 2 } } { 2 ( d - l \sin \alpha ) }
$$

Egyetlen inga potenciális energiája ennek a fele lesz:

$$
U _ { 1 } = m g ( l - l \cos \alpha ) - k \frac { Q ^ { 2 } } { 4 ( d - l \sin \alpha ) }
$$

Az egyszerúség kedvéért foglalkozzunk most is a kis szögek esetével, legyen

$$
\begin{aligned}
& \qquad x = l \sin \alpha \approx k \alpha , \quad \text { és } \quad h = l - l \cos \alpha \approx l \frac { \alpha ^ { 2 } } { 2 } . \\
& \qquad \operatorname { Ezzel } U _ { 1 } ( \alpha ) = \frac { m g } { 2 } l \alpha ^ { 2 } - k \frac { Q ^ { 2 } } { 4 } \frac { 1 } { d - l \alpha } , \\
& \text { vagy áttérve az } x = l \alpha \text { változóra: } U _ { 1 } ( x ) = \frac { m g } { 2 l } x ^ { 2 } - \frac { k Q ^ { 2 } } { 4 } \frac { 1 } { d - x } .
\end{aligned}
$$

Ezt az $U _ { 1 } ( x )$ függvényt $x$ szerint differenciálva kapjuk meg az ingatestre ható ( $x$ irányú) erő -1-szeresét, tehát az erő:

$$
F _ { 1 } ( x ) = - \frac { d U _ { 1 } ( x ) } { d x } = \frac { m g } { l } x - \frac { k Q ^ { 2 } } { 4 } \frac { 1 } { ( d - x ) ^ { 2 } } .
$$

Mind az $U _ { 1 } ( x )$, mind az $F _ { 1 } ( x )$ függvények menete a paraméterek értékeitól függ. Ha $m , g , l , k , Q$ állandó, akkor egyedül $d$-től. A 11. ábrán vázoltunk három különböző esetet. Az a) esetben a potenciális energia minimuma jelöli ki az inga stabilis egyensúlyi helyzetét, a maximum egy labilis egyensúlyt jelez. A c) esetben nincs egyensúlyi helyzet. A kettő közti átmenetet, a határesetet mutatja az ábra b) része, amikor a potenciális energiának „vízszintes" érintőjü inflexiós pontja van, itt valósulhat meg még utoljára egyensúlyi helyzet. Az ehhez tartozó $d$ paraméterérték lesz $d$ legkisebb értéke.

$$
x = x ^ { * } \text { helyen tehát } \frac { d U _ { 1 } } { d x } = 0 \text { és } \frac { d F _ { 1 } } { d x } = 0 \text { is igaz. }
$$

Ebból a két feltevésből az alábbi egyenletekre jutunk:

$$
2 x ( d - x ) ^ { 2 } = \frac { k Q ^ { 2 } l } { 2 m g } , \quad \text { illetve } \quad ( d - x ) ^ { 3 } = \frac { k Q ^ { 2 } l } { 2 m g } .
$$

Ezek szerint $2 x = d - x$, vagyis $x = \frac { d } { 3 }$ a határesetben!
A fenti jelölésekkel: $x ^ { * } = \frac { d _ { \text {min } } } { 3 }$.
Ez az a szép és érdekes eredmény, ami nem jött ki az első megoldás során: a fémsík egészen addig közelíthető az ingához, amíg az inga kilendüléséhez tartozó $x$ érték el nem éri az éppen akkori $d$ távolság harmadrészét. Ha elérte, s még tovább közelítjük a fémsíkot, akkor már nekicsapódik az inga.

Természetesen a feltételi egyenletek bármelyikébe behelyettesítve $x = \frac { d } { 3 }$ értékét, megkapjuk $d = d _ { \min }$ értékét:

$$
d = d _ { \min } = \frac { 3 } { 2 } \sqrt [ 3 ] { \frac { k Q ^ { 2 } l } { 2 m g } } = 0,4435 \mathrm {~m}
$$

2. A feladat harmadik kérdésére a „belengetésen” kívül más ötletes válaszok, megoldási javaslatok is születtek. Ilyen például a fémsík körbeforgatása, amely körmozgásra csábítja az ingatestet. Voltak, akik a fémsík saját síkjában történő mozgatással próbálkoztak, számítva az elektronok tehetetlenségére, s a mozgó töltésekre ható Lorentz erốvel is többen próbálkoztak | nem sok sikerrel. Elág sok jó fizikai szemléletú versenyző akadt, aki | ha nem is tudta megoldani a feladat nehéz, középső részét |, erre a befejező kérdésre jól válaszolt.

## A verseny eredménye

Megosztott I-II. díjat nyert egyenlő helyezésben a következő három versenyző:
Horváth Péter, a Fazekas Mihály Fővárosi Gyakorló Gimnázium IV. osztályos tanulója (felsó fénykép), Horváth Gábor tanítványa;

Kovács Krisztián, a békéscsabai Kemény Gábor Műszaki Szakközépiskola IV. osztályos tanulója (középső fény-kép), Mekis László és Varga István tanítványa;


Varga Dezsõ, a miskolci Földes Ferenc Gimnázium IV. osztályos tanulója (alsó fénykép), id. Szabó Kálmán tanítványa.
III. díjat nyert egyenlő helyezésben a következő hét versenyző:

Borsányi Szabolcs, a budapesti Piarista Gimnázium IV. osztályos tanulója, Görbe László tanítványa;
Burcsi Péter, a pápai Türr István Gimnázium III. osztályos tanulója, Németh Zsolt tanítványa;
Futó Gábor, az ELTE TTK matematikus szakos hallgatója, aki a Fazekas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett, mint Horváth Gábor tanítványa;

Juhász Sándor, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor tanítványa;

Koblinger Egmont, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor tanítványa;

Mizera Ferenc, az ELTE TTK fizikus szakos hallgatója, aki Szlovákiában, Rév-Komáromban érettségizett, mint Szakál Ildikó, Spátai Lotár és Szabó Endre tanítványa;

Tóth Gábor Zsolt, a budapesti Árpád Gimnázium III. osztályos tanulója, Vankó Péter tanítványa.
Dicséretben részesültek, s errôl oklevelet kaptak a verseny 11-15. helyezettjei:
11. Halbritter András, a BME mérnök-fizikus szakos hallgatója, aki a győri Czuczor Gergely Bencés Gimnáziumban érettségizett, mint Csonka László tanítványa; 12-13. Bárász Mihály, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium III. osztályos tanulója, Horváth Gábor tanítványa; Várhegyi Péter, a BME mérnök-fizikus szakos hallgatója, aki a Fazekas Mihály Fóvárosi Gyakorló Gimnáziumban érettségizett, mint Horváth Gábor tanítványa; 14-15. Koncz Imre, a Fazekas Mihály Fốvárosi Gyakorló Gimnázium II. osztályos tanulója, Horváth Gábor tanítványa; Lovas Rezsõ, a debreceni KLTE Gyakorló Gimnáziumának III. osztályos tanulója, Dudics Pál, Kirsch Éva és Szegedi Ervin tanítványa.

Jegyzókönyvi dicséretben részesültek a 16-20. helyezett versenyzők egyenlő helyezésben:
Feldmann Márton, a soproni Vas- és Villamosipari Szakközépiskola IV. osztályos tanulója, Lendvay Péterné tanítványa; Juhász Bertalan, a debreceni KLTE Gyakorló Gimnáziumának IV. osztályos tanulója, Dudics Pál tanítványa; Madarassy Pál, a ELTE TTK térképész szakos hallgatója, aki a Fazekas Mihály Fốvárosi Gyakorló Gimnáziumban érettségizett, mint Horváth Gábor tanítványa; Radnóti Gergely, a paksi Vak Bottyán Gimnázium IV. osztályos tanulója, Horváthné Szabó Julianna és Gálosiné Kimle Mária tanítványa; Salk Miklós, a pécsi Babits Mihály Gimnázium IV. osztályos tanulója, Koncz Károly tanítványa.

Gratulálunk a nyerteseknek!
Radnai Gyula
![](../../../figures/solution-ocr/456e1d904f2c91604c01dfbf.jpg)


![](../../../figures/solution-ocr/746cf7757f48422ab852cde5.jpg)


![](../../../figures/solution-ocr/e03dcf790ed3bd4ec49367cd.jpg)
![](../../../figures/solution-ocr/67ccc24238c09265e5120130.jpg)


![](../../../figures/solution-ocr/62dddd9850d725b6ea56537b.jpg)


![](../../../figures/solution-ocr/c1b3bdb24d3657c083d5111d.jpg)


![](../../../figures/solution-ocr/6d694abca8abb1dbcd989774.jpg)
