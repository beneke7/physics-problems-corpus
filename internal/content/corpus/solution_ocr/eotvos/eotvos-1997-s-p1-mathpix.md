---
id: solution-ocr-eotvos-1997-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1997_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1997-lunar-eclipse]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Magyarországon 1997. szeptember 16-án este holdfogyatkozást lehetett megfigyelni. Negyed 10-tốl negyed 11-ig tartott a teljes holdfogyatkozás, vagyis ekkor tartózkodott a Hold teljes egészében a Föld teljes árnyékában.
a) A holdfogyatkozás általában hosszabb ideig tart, mint a napfogyatkozás. Miért?
b) Feltételezve, hogy a Hold a Föld körül és a Föld a Nap körül körpályán kering, valamint elhanyagolva a Föld légkörének optikai hatását, határozzuk meg, hogy legfeljebb mennyi ideig tarthat egy teljes holdfogyatkozás! A Földről a Hold és a Nap egyaránt 0,5° látószögben látszik; a Föld látószöge a Holdról nézve 1,83°. (Hogyan befolyásolná az eredményt, ha figyelembe vennénk, hogy az említett pályák inkább ellipszisek, mint körök?)
c) A valóságban teljes holdfogyatkozáskor sem tünik el teljesen a Hold az égról, hanem vöröses színben, halványan világít. Miért?

(Radnai Gyula)
Megoldás. a) A napfogyatkozás addig tart, amíg a Hold eltakarja a Napot. Ha a két látószög egész pontosan megegyezne, akkor erre csak egy pillanatig kerülhetne sor, s az a pont, ahonnan teljes napfogyatkozást lehet látni, gyorsan végigsuhanna a forgó Földön (1. ábra). A valóságban a két látószög nem pontosan egyezik meg, és időben is változik (az ellipszispályák miatt), ezért a teljes napfogyatkozás szerencsés esetben akár néhány percig is tarthat a Föld bizonyos helyein.

A holdfogyatkozás addig tart, amíg a Hold a Föld árnyékkúpjában tartózkodik. Mivel a Föld árnyéka a Hold távolságában is még csaknem háromszor olyan széles, mint a Hold átmérője, a holdfogyatkozás egy órán át is tarthat, amint a feladatban is idézett példa mutatja. A teljes holdfogyatkozás annál tovább tart, minél közelebb halad a Hold a Föld árnyékának közepéhez. Maximális esetben éppen áthalad az árnyékkúp közepén, ezt az esetet kellett a b) kérdésben megvizsgálni.

Érdemes felfigyelni arra, hogy amikor a Földön holdfogyatkozás van, akkor a Holdon éppen napfogyatkozás, ezért az a) kérdést úgy is fel lehetne tenni, hogy a napfogyatkozás miért tart általában hosszabb ideig a Holdon, mint a Földön. A fö ok ténylegesen az, hogy a Föld nagyobb, mint a Hold.

b) Az 2. ábrán a valóságos arányokat eltorzítva, a lényeges távolságokat kiemelve tanulmányozhatjuk a maximális idốtartamú teljes holdfogyatkozást, amikor is a Hold pályája áthalad az árnyékkúp tengelyén. A Nap, a Föld és a Hold átmérójén kívül feltüntettük (szaggatott vonallal) annak az árnyékkörnek az átmérőjét is, amelyen a Hold végighalad. A Nap-Föld távolságot $L$-lel, a Föld-Hold távolságot $l$-lel jelöltük.

Felhasználva két háromszög hasonlóságát, a megfelelő oldalak arányára felírhatjuk:

$$
\frac { D _ { \mathrm { F } } - D _ { \text {árnyék } } } { 2 } : l = \frac { D _ { \mathrm { N } } - D _ { \mathrm { F } } } { 2 } : L .
$$

Ebből fejezzük ki az árnyék átmérőjét:

$$
D _ { \text {árnyék } } = D _ { \mathrm { F } } - \frac { l } { L } D _ { \mathrm { N } } .
$$

A Hold $\Delta s = D _ { \text {árnyék } } - D _ { \mathrm { H } }$ utat tesz meg, amíg teljes egészében az árnyékkúp belsejében tartózkodik. Sebessége $v = l \omega$, ahol $\omega$ jelenti a Hold szögsebességét a Föld körüli keringése közben. Így a teljes holdfogyatkozás maximális ideje:

$$
\Delta t = \frac { \Delta s } { v } = \frac { D _ { \text {árnyék } } - D _ { \mathrm { H } } } { l \cdot \frac { 2 \pi } { T } } = \frac { T } { 2 \pi } \left( \frac { D _ { \mathrm { F } } } { l } - \frac { D _ { \mathrm { N } } } { L } - \frac { D _ { \mathrm { H } } } { l } \right) .
$$

Felhasználva, hogy a Hold kereken 30 nap alatt kerüli meg a Földet, és behelyettesítve a feladatban fokokban megadott látószög adatokat:

$$
\Delta t = \frac { 30 \cdot 24 \mathrm {~h} } { 360 ^ { \circ } } \left( 1,83 ^ { \circ } - 0,5 ^ { \circ } - 0,5 ^ { \circ } \right) = 1,66 \mathrm {~h} .
$$

Legfeljebb ennyi ideig tarhat egy teljes holdfogyatkozás.
Hogyan befolyásolná az eredményt, ha figyelembe vennénk, hogy az említett pályák inkább ellipszisek, mint körök? Ebben az esetben figyelembe kellene vennünk, hogy a Nap látószöge a Földről nézve $0,52 ^ { \circ }$ és $0,54 ^ { \circ }$ között változik, míg a Hold látószöge a Földről nézve $0,49 ^ { \circ }$ és $0,55 ^ { \circ }$ között változik. (A $0,5 ^ { \circ }$ tehát mindkét esetben kerekített érték volt.) A holdpálya excentricitása miatt a Föld látószöge is változik a Holdról nézve, mégpedig $1,8 ^ { \circ }$ és $2,0 ^ { \circ }$ között. (A feladatban szereplő 1,86° tehát nem átlagérték, hanem a 0,50°-os Hold-látószögnek megfelelő érték volt.)

Az ellipszispályák figyelembe vétele azonban nemcsak a látószögeket módosítja, hanem a Hold $v$ sebességét is! A látószögek szempontjából optimális eset az, amikor

1. a Föld naptávolban tartózkodik (az árnyékkúp a legkevésbé „keskenyedik”);
2. a Hold földközelben tartózkodik (az árnyékkör a lehető legnagyobb).

Ez utóbbi esetben azonban a Hold sebessége is a lehető legnagyobb, s ez csökkenti az áthaladási időt. Ennek ellenére a fenti két feltétel teljesülése esetén lesz a teljes holdfogyatkozás ideje maximális (körülbelül 115 perc).

Ebben az évezredben a leghosszabb holdfogyatkozást 2000. július 16-án lehet még majd megfigyelni - sajnos nem nálunk, hanem Ázsia keleti és déli részén, valamint Óceániában. Ideje 108 perc lesz.

c) A Föld légköre megtöri a fényt; a fénynek azt a részét, amely át tud haladni rajta, mint valami enyhén gyújtő lencse, a geometriai árnyéktérbe irányítja. A fénynek a legnagyobb része azonban nem halad át a légkörön, hanem áthaladás közben fokozatosan „kiszóródik”. A fényszórás legjelentősebb a rövid hullámhosszú fényekre, ezért látszik

az ég a földről nézve kéknek. Az ürhajósok is kéknek látják, így kapta Földünk a „kék bolygó” nevet. Még leginkább a leghosszabb hullámhosszú vörös fénynek van esélye arra, hogy át tud haladni a légkörön, s egy halvány, vöröses derengést ad a geometriai árnyéktérben lévő Holdnak.

Megjegyzések. 1. A Hold keringési ideje a Földről nézve 29,5 nap. Az állócsillagokhoz képest azonban csak 27,3 nap, mivel a Föld is kering a Nap körül.

$$
\frac { 1 } { 27,3 } - \frac { 1 } { 365,25 } = \frac { 1 } { 29,5 } .
$$

2. Nem vettük figyelembe, hogy a Hold keringési síkja kb. 5°-os szögben hajlik a Föld keringési síkjához (az ekliptikához) képest, s nem vettünk figyelembe még számos, az eredményt csak csekély mértékben módosító hatást. Néhány évvel ezelőtt például egy óriási túzhányó-kitörés annyi port juttatott a légkör felsőbb részeibe, hogy utána a Hold az árnyéktérben egészen más színűnek látszott, mivel a por a vörös fényt is részben elnyelte, részben kiszórta a légkörből. Az 1997. szeptember 16-i holdfogyatkozáskor ennek a vulkáni hamunak a hatását nem lehetett észrevenni.
