---
id: solution-ocr-eotvos-2005-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2005-triangular-lattice-diffraction]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Egy átlátszatlan lapon kicsiny lyukak vannak az 5 . ábrán látható „háromszög-rács" elrendezésben. A lapot monokromatikus, $\lambda$ hullámhosszúságú lézerfénnyel világítjuk meg merôlegesen. A rácsállandó $d = 100 \lambda$.

![](../../../figures/solution-ocr/fb2bd125f1becab939db61f1.jpg)
5. ábra

Ábrázoljuk vázlatosan (a méretek, valamint a vízszintes és a függốleges irányok bejelölésével), hogy milyen elhajlási képet figyelhetünk meg a rácstól 3 m távolságra elhelyezett ernyốn!

Megoldás. Elevenítsük fel azokat az ismereteket, amelyek a síkbeli optikai rácson (párhuzamos, egymástól egyenló távolságra lévő rések rendszerén) áthaladó monokromatikus fény diffrakciójára vonatkoznak! Világítsuk meg az optikai rácsot a síkjára merőleges, keskeny lézersugárral. A ráccsal párhuzamosan elhelyezett ernyőn ekkor közelítőleg egyenlő távolságra elhelyezkedő fényes foltokat látunk. Jelöljük $D$-vel a rácsállandót, $\lambda$-val a hullámhosszat. Az intenzitás menetét az elhajlási (diffrakciós) szög szinuszának függvényében a 6. ábra mutatja.

![](../../../figures/solution-ocr/09d7bd9512291954405f4b29.jpg)
6. ábra

Az ábrán látható intenzitáseloszlást jól alátámasztja az a középiskolában tanult közelítés, amely szerint a rács rései olyan keskenyek, hogy egy-egy résen belül, az onnan kiinduló elemi hullámok azonos fázisban vannak (Huygens-Fresnel-elv). Ugyanakkor két egymás melletti résből induló elemi hullámok erősítésének feltétele:
![](../../../figures/solution-ocr/a1d1f9ac3b507392dbddb81f.jpg)

![](../../../figures/solution-ocr/c7363cc31ebb671d7cadfff3.jpg)
7. ábra


Ha az ernyő $S$ távolságra van az optikai rácstól (7. ábra), akkor az első fómaximum távolsága a centrumtól

$$
s _ { 1 } \approx S \cdot \sin \alpha _ { 1 } = S \frac { \lambda } { D } ,
$$

és általában, a $k$-adik főmaximum távolsága

$$
s _ { k } \approx k S \frac { \lambda } { D } .
$$

(Itt kihasználtuk, hogy $\lambda \ll d$ miatt $\alpha _ { k } \ll 1$, és így $\sin \alpha _ { k } \approx \alpha _ { k }$.)
Térjünk rá a feladatban szereplő háromszögrácsra! Mivel a háromszögrács síkjára merőlegesen érkezik a fény, ezért minden egyes lyukból azonos fázisú elemi hullámok indulnak ki. Ezek a rácsra meróleges irányban tovább haladva biztosan erósítik egymást, útkülönbség nélkül, $\alpha = 0$ irányban jelölik ki a keletkező diffrakciós kép centrumát az elég távol lévő ernyốn.

Hol lesz ehhez a centrumhoz legközelebb újra egy erósítési hely az ernyőn? Milyen irányban?
Válasszuk ki valamelyik kicsiny lyukat. Gondolatban húzzunk ezen a lyukon át egy olyan egyenest, amelyik átmegy valamelyik, hozzá legközelebb eső lyukon. Ez az egyenes még egy sorozat lyukon fog áthaladni, amelyek mind $d$ távolságra követik egymást. Most keressünk egy másik lyuksort, amelyen átmenő egyenes párhuzamos az előzóvel. Sok ilyen lyuksort találunk, ezek egymástól $D = d \frac { \sqrt { 3 } } { 2 }$ távolságra helyezkednek el (8. ábra). Figyeljük meg azt az irányt a térben, amely az elképzelt egyenesekre meróleges, de a már kijelölt centrum felé vezető iránnyal akkora $\alpha _ { 1 }$ szöget zár be, hogy teljesül a

$$
D \sin \alpha _ { 1 } = \lambda
$$

összefüggés.

![](../../../figures/solution-ocr/5fddb1799aee689cc5ed7df8.jpg)
8. ábra

Ha az ilyen irányba haladó elemi hullámok eredőjét vizsgáljuk a messze lévő ernyőn, akkor azt látjuk, hogy a kiválasztott egyenesen elhelyezkedő lyukakból jövő elemi hullámok erősítik egymást, mert az ernyőhőz érve már szinte nincs is útkülönbség köztük. De a szomszédos egyenesen fekvő lyuksorból induló elemi hullámokkal is erősíteni fogják egymást, mert köztük az útkülönbség $\left( D \sin \alpha _ { 1 } \right)$ éppen $\lambda$-val egyenlő, és ugyanez igaz a többi egyenesen fekvő lyukakból induló hullámokra is. Tehát ebben az irányban az összes lyukon átjövő fény erősíteni fogja egymást!

Így az ernyő́n a centrumhoz legközelebbi (egyik) erősítési helynek a centrumtól való távolsága:

$$
s _ { 1 } = S \frac { \lambda } { D } = \frac { 2 } { \sqrt { 3 } } S \frac { \lambda } { d } = 2 \sqrt { 3 } \mathrm {~cm} \approx 3,4 \mathrm {~cm} .
$$

Hat ilyen pont lesz az ernyőn, amelyek egy - a centrum körüli - szabályos hatszög csúcsait jelölik ki. Ez azért van így, mert három, egymással 120-120°-os szöget bezáró egyenes-sereget (lyuksor-sereget) jelölhetünk ki a háromszögrácson.

Azt is észrevehetjük, hogy olyan helyen is lesz az ernyő́n erősítés, melynek távolsága a centrumtól $2 s _ { 1 } , 3 s _ { 1 } , \ldots$, hiszen ekkor az egymás melletti lyuksorokból érkező hullámok $2 \lambda , 3 \lambda , \ldots$ útkülönbséggel találkoznak az ernyőn. Ezek szerint a rácson felvett mindegyik egyenes-sereg az ernyőn egy pontsorozatot eredményez. Ha a rácson elképzelt lyuksorok pl. vízszintes egyenesek mentén helyezkednek el, akkor az ernyő́n keletkező pontsorozat egy függőleges egyenesre illeszkedik.

Hatágú „csillag" lesz tehát a kép? Nem egészen, bár ezek a most elképzelt pontok mind megjelennek az ernyőn, de nem csak ezek jelennek meg! Képzeljük el például a háromszögrácson azt az egyenes- (lyuksor)-sereget, amelyet a 9. ábra bal oldalán látunk.

![](../../../figures/solution-ocr/13edcb35fb99dbfc12f220cf.jpg)
9. ábra


Ez egy $\frac { d } { 2 }$ rácsállandójú optikai rácsnak felel meg, ezért az ernyőn a megfelelő erősítési helyek

$$
s _ { 1 } ^ { \prime } = S \frac { \lambda } { \frac { d } { 2 } } = 6 \mathrm {~cm}
$$

távolságra követik egymást. Most is igaz, hogy minél sürúbb optikai rácsba rendeződve képzeljük el a lyukakat, annál messzebb kerülnek egymástól a megfelelő erősítési helyek az ernyőn.

Meg lehet mutatni, hogy a háromszögrács „képe” az ernyőn ugyancsak szabályos háromszögrács lesz, mert kölcsönösen egyértelmúen egymáshoz rendelhető a lyukakra illeszthető egyenessereg és az ernyőn megjelenő, interferencia eredményezte ponthalmaz. (Ennek belátásához legközelebb Varjas Dániel jutott el, aki díjnyertes dolgozatában a különböző módon felvehető elemi cellák területének egyenlőségét használta ki.) Mégis lesz valami eltérés a lyukak alkotta háromszögrács és a diffrakciós pontok alkotta háromszögrács között (a pontok távolságában mutatkozó eltérésen kívül is): az egyik pontrács 90°-os elforgatottja a másiknak. (Most akár 30°-os elforgatottat is mondhatnánk, de egy téglalaprács esetén nagyon jól látszik, hogy 90°-os elforgatásról van szó.)

Mindezt a 10. ábra szemlélteti, melynek alsó részén a lyukak rácsa, felül pedig az ernyốn látható elhajlási kép látható, természetesen eltérő méretarányban.

![](../../../figures/solution-ocr/f83a35d7ab355257507d51c6.jpg)
10. ábra

A feladatban szereplő háromszögrácsot úgy is előállíthatjuk, hogy három, egyenként $D$ állandójú, közönséges optikai rácsot egymásra fektetünk. A feltétel csak annyi, hogy mindegyik rács rései a másik rács réseivel 60°-os szöget zárjanak be. Az így keletkező lyukak ugyan nem kör, hanem hatszög alakúak lesznek, de ha a rések szélessége sokkal kisebb a rácsállandónál, akkor ennek nincs jelentősége. Sőt! Ha elhagyjuk a harmadik rácsot, és csupán két, egymással 60°-os szöget bezáró rács diffrakciós képét vizsgáljuk, ez is ugyanaz lesz, mint az előbbiek. Ebben az esetben ugyanis a lyukak ugyan rombusz alakúak, de ugyanabban a szabályos háromszögrácsban rendeződnek el, tehát jó közelítésben ugyanazt a diffrakciós képet eredményezik. Az eredményhirdetéskor Komlósi István egyetemi hallgató mutatta be ezt a kísérletet.
