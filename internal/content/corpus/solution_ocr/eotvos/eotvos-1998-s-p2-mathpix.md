---
id: solution-ocr-eotvos-1998-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1998_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1998-perfume-evaporation]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Visszatérve a feladat megoldására, a helyes végeredménnyel azonos nagyságrendú eredmény adódhat a fentinél valamivel durvább közelítések esetén is. Sok versenyző feltételezte mindjárt a megoldás elején, hogy mivel $r \gg l$, ezért az $F _ { 1 }$ és $F _ { 2 }$ erók gyakorlatilag párhuzamosak egymással. Ezzel a feltételezéssel élve a következő eredmény adódik:

$$
\delta = \pi ^ { 2 } \frac { r } { g } \left( \frac { 1 } { T _ { 1 } ^ { 2 } } - \frac { 1 } { T _ { 2 } ^ { 2 } } \right) = 2,5 \cdot 10 ^ { - 5 } \text { radián. }
$$

Ha nemcsak az erők párhuzamosságát tételezi fel valaki, hanem még azt a kis eltérést is elhanyagolja, amivel a „meróleges" helyzetú torziós inga lengésideje eltér a gravitáció nélküli esettől, tehát a $T _ { 2 } = T = 2 \pi \sqrt { \Theta / D ^ { * } }$ közelítéssel él, akkor a következő eredményt kapja:

$$
\delta = 2 \pi ^ { 2 } \frac { r } { g } \left( \frac { 1 } { T _ { 1 } ^ { 2 } } - \frac { 1 } { T _ { 2 } ^ { 2 } } \right) = 5 \cdot 10 ^ { - 5 } \text { radián. }
$$

Ezek a megoldások sem „rosszak”, csak rosszabb, durvább közelítések, mint amit a helyes megoldásnál kaptunk. A Versenybizottság - ha nem is teljes pontszámmal, de - értékelte ezeket a megoldásokat is.
2. Két egyenes, függőlegesen álló, felül nyitott kémcső közül az egyik 20 cm, a másik 40 cm magas. Keresztmetszetük egyforma. Az elsóbe $1 \mathrm {~cm} ^ { 3 }$, a másikba $2 \mathrm {~cm} ^ { 3 }$ kölnivizet töltünk. Vajon körülbelül hányszor több idő alatt párolog el teljesen a kölni a második kémcsőből, mint az elsőből?

Módosul-e a válasz, ha mindkét kémcsövet leragasztjuk, és a fedólapokon csupán egy-egy parányi (egyforma) nyílást hagyunk?
(Károlyházy Frigyes)
Megoldás. Hogyan párolog a kölnivíz? Ugyanúgy, mint minden más folyadék. A felszín közelében dinamikus egyensúly alakul ki a folyadékból kilépő és a folyadékba belépő molekulák között. Az egyes molekulák szempontjából mindkét folyamat véletlenszerú. Mindaddig, amíg a gőzben nincs elég molekula ahhoz, hogy ez a „telítési” gőznyomás érték beálljon, több molekula lép ki a folyadékból, mint amennyi visszacsapódik oda. Ekkor még a gőz nincs egyensúlyi állapotban, súrúsége helyről helyre változhat. Ha levegő is van jelen, akkor a gőz és a levegő keverékében a folyadék felszíne közelében a legnagyobb a gőz koncentrációja, attól távolodva fokozatosan csökken. Ez a koncentráció-gradiens (koncentráció-esés) idézi elő a „kölnimolekulák” diffúzióját a levegőn keresztül. Ennek tanulmányozásával oldhatjuk meg a feladatot.

A Négyjegyú függvénytáblázatok... 124. oldalán szerepel az alábbi összefüggés (Fick-törvény):

$$
\frac { \Delta m } { \Delta t } = - D A \frac { \Delta \varrho } { \Delta z } .
$$

Itt $\frac { \Delta \varrho } { \Delta z }$ jelenti a $z$ tengely irányú sűrúség-gradienst a gáztérben: esetünkben a kölnigőz függőleges sürúségeloszlásáról van szó. Ez arányos az $A$ keresztmetszeten időegység alatt átáramló anyag tömegével, a $\frac { \Delta m } { \Delta t }$ tömegárammal, esetünkben a kölnimolekulák tömegáramával. Az áram mindig a nagyobb koncentrációjú helyről folyik a kisebb koncentrációjú hely felé, ezért $\frac { \Delta m } { \Delta t }$ és $\frac { \Delta \varrho } { \Delta z }$ mindig ellentétes előjelüek. A törvényben éppen azért szerepel a negatív előjel, hogy a folyamatra jellemző $D$ arányossági tényező - az ún. diffúziós állandó - pozitív lehessen.

Gondoljuk át, hogyan változik a kölnigőz sürúségeloszlása a függőleges kémcsőben a betöltés pillanatától kezdve mindaddig, amíg beáll valamilyen - ha nem is egyensúlyi, de legalább időben állandó állapot (4. ábra).
4. ábra. Nyitott kémcső esetén a kölnigőz sứrứsége a magasság függvényében: a) kezdetben; b) kicsit később; c) az állandósult állapotban.

Felül nyitott kémcső esetén a kölni betöltésének pillanatában a kémcső levegővel van tele; a kölnigőz sürúsége zérus. Kicsit később már lesznek a csőben „kölnimolekulák”, a kölnigőz sürúsége a magassággal rohamosan csökken, csak közvetlenül a folyadék felszínénél éri el az egyensúlyi, telített gőz állapotát lényegében elérő súrúséget. Lassanként egyre több kölnimolekula lesz a kémcsőben lévő levegőben, és előbb-utóbb beáll egy olyan egyenletes eloszlás, amikor a súrúség-gradiens álladó, vagyis a súrúség a magassággal lineárisan csökken. Feltételezhetjük, hogy a nyitott kémcső tetején annyi a kölnigőz sürúsége, mint a szobában, tehát gyakorlatilag mindvégig zérus.

A 4.c) ábrán látható állandósult sürúségeloszlás mindaddig fennmarad, amíg a kémcső alján lévố kölnivíz teljesen el nem párolog.

Ezek után hasonlítsuk össze a hosszú (40 cm-es) és a rövid (20 cm-es) kémcsőben az állandósult súrúségeloszlásokat (5. ábra)!
5. ábra. Az állandósult sữrứségeloszlások a felül nyitott hosszú és rövid kémcsốben.

Látszik, hogy a $\frac { \Delta \varrho } { \Delta z }$ hányados a fele hosszúságú kémcsőben kétszer akkora, tehát itt a $\frac { \Delta m } { \Delta t }$ párolgási sebesség is kétszerese a másikénak. Mivel a hosszú kémcsőbe ráadásul kétszer annyi kölnivizet is töltöttünk, ezért jó közelítéssel négyszer annyi idő alatt párolog el $2 \mathrm {~cm} ^ { 3 }$ kölnivíz a 40 cm hosszú kémcsőből, mint $1 \mathrm {~cm} ^ { 3 }$ kölnivíz a 20 cm-esből.

Válaszoljunk még arra a kérdésre, hogy mi történne, ha mindkét kémcső tetejét annyira leragasztanánk, hogy a fedőlapokon csupán egy-egy parányi (egyforma) nyílás maradna. Módosulna-e az előző válasz? Természetesen igen,


hiszen új, az előzőtől eltérő sűrúségeloszlás alakulna ki mindkét kémcsőben. Ha ugyanis csak egy nagyon pici nyíláson tud párologni a kölnigőz a kémcsőből, akkor jó közelítéssel feltételezhetjük, hogy gyakorlatilag az egész kémcsőben telített lesz a gőz, végig ugyanannyi lesz a súrúsége. A párolgás sebességét a lyuk piciny keresztmetszete, valamint a lyuknál kialakuló (nagy) súrúség-gradiens határozza meg. Ennek értéke azonban már nem függ attól, hogy milyen hosszú a kémcső. Ebben az esetben tehát csak az számít, hogy az egyik kémcsőből kétszer annyi kölnivíznek kell eltávoznia, mint a másikból, amihez pedig kétszer annyi idốre van szükség.

A feladatot megoldottuk, foglaljuk össze azonban, hogy milyen feltételezésekkel éltünk a megoldás során, mert ezek érvényességének mértéke határozza meg becsléseink pontosságát. Megoldásunk lényege az volt, hogy a kémcsövekben kialakuló állandósult állapotokat hasonlítottuk össze. Az állandósult állapot kialakulásának, beállásának idejét elhanyagoltuk a teljes elpárolgáshoz szükséges időhoz képest. Mennyire jogos a fenti elhanyagolás? Ez a konkrét adatoktól függ. Tapasztalat szerint még nyitott kémcső esetén is napokban mérhető az elpárolgási idő, az állandósult sürúségeloszlás pedig 5-10 perc alatt beáll a feladatban szereplő adatok esetén. Mérések szerint a párolgás valóban kb. 2-szer gyorsabb a rövidebb kémcsőnél, mint a hosszabbnál.

Elhanyagoltuk még a folyadék térfogatát a kémcsó térfogatához képest; feltételeztük, hogy a folyamatok ugyanazon az állandó hőmérsékleten történtek; nem figyeltünk arra, hogy a kölniből hamarabb párolog el az alkohol, mint a víz; feltételeztük a Fick-törvény (lineáris összefüggés!) érvényességét; elhanyagoltuk a levegőben mindig meglévő szennyeződések hatását, amelyek a folyadék felszínén vékony (molekuláris) rétegben lerakódva azon olyan „filmet” képezhetnek, ami jelentősen fékezheti a folyadék párolgását.
