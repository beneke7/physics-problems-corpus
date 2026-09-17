---
id: eotvos-2018-rotating-bubble
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2018-rotating-bubble
solution_type: official
source_document: solution-document-eotvos-2018-s
source_pdf: cache/phoxiv/eotvos/2018_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2018_S.pdf."
---

1. Egy zárt, hosszú, henger alakú, szobah®mérséklet¶ vízzel telt tartályban egy V = 1 cm3
térfogatú, normál nyomású
légbuborék található. A tartályt egy ¶rállomáson, a súlytalanság állapotában óvatosan gyorsítva forgatni kezdjük a szim-
metriatengelye körül, majd mikor a tartály eléri az ω = 300 s−1
szögsebességet, azt állandó értéken tartjuk. Milyen
alakot vesz fel ekkor a légbuborék? Adjuk meg a buborék jellemz® méreteit! A víz felületi feszültsége α = 0,07 N/m.
(Vigh Máté)
I. megoldás (energiaminimum). Ha nem forogna a henger, a buborék a felületi feszültség miatt gömb alakú
lenne. Ha nem lenne felületi feszültség, akkor a forgó folyadékban a buborék egy nagyon hosszan elnyúló nagyon vékony
szál lenne a henger szimmetriatengelyénél. Most a henger elég nagy szögsebességgel forog, de hat a felületi feszültség is,
így egy hosszan elnyúlt virsli alakú buborékot feltételezünk, melynek alakját egy r sugarú, ℓ hosszúságú hengerrel
közelíthetjük. A térfogat állandósága miatt ℓr2
π = V .
A rendszer teljes energiája a buborék felületi energiájából és a buborék helyér®l kiszoruló folyadék helyzeti energi-
ájából adódik össze. Akkor lesz egyensúly, ha ez az energia minimális.
A forgó rendszerben egy dm tömeg¶ folyadékdarabra a henger tengelyét®l x távolságra ω2
xdm entrifugális er®
hat. Emiatt a henger tengelyét®l x távolságra lév® tömegdarab helyzeti energiája
dE = −
Z x
0
ω2
x′
dmdx′
= −
1
2
ω2
x2
dm.
A henger alakú buborékból kiszorul a víz, és a henger szimmetriatengelyéig emelkedik. A teljes helyzeti energia
növekedése, felhasználva, hogy az x sugarú, dx vastagságú hengergy¶r¶ tömege dm = ̺2xπℓdx,
Ecf =
Z r
0
1
2
ω2
x2
̺ · 2xπℓdx =
1
4
ω2
r4
̺ℓπ =
1
4
ω2
r2
̺V.
A felületi energia (a henger ismeretlen alakú végeinek járulékát elhanyagolva)
Efel = 2rπℓα =
2V α
r
,
a teljes energia pedig
E = Ecf + Efel =
1
4
ω2
r2
̺V +
2V α
r
.
A minimumot deriválással keressük meg:
dE
dr
=
1
2
ω2
r̺V −
2V α
r2
= 0,
amib®l
r = 3
r
4α
ω2̺
≈ 1,5mm és ℓ =
V
r2π
≈ 15 cm.
Valóban jogos volt tehát az a feltételezés, hogy a buborék alakja közelít®leg egy nyújtott henger.
II. megoldás (er®egyensúly). Vágjuk félbe a virslit, és írjuk fel az er®k egyensúlyát (1. ábra)!
1. ábra
1Részletek a verseny honlapján: http://eik.bme.hu/∼vanko/fizika/eotvos.htm.
A forgó folyadékban a tengelyt®l x távolságra a nyomás:
p(x) =
1
2
̺ω2
x2
+ C,
ahol C kés®bb meghatározandó állandó. A buborékon belül mindenhol ugyanakkora p0 nyomás uralkodik. A henger
falánál ez a nyomás a folyadék ottani p(r) nyomásának és a görbületi nyomásnak az összege:
p0 = p(r) +
α
r
,
amib®l
p(r) = p0 −
α
r
.
Ezt összevetve a folyadék nyomáseloszlására felírt összefüggéssel az abban megjelen® C állandó meghatározható:
C = p0 −
α
r
−
1
2
̺ω2
r2
.
A folyadék által a virsli egyik felére kifejtett tengelyirányú er® a folyadék nyomásának egy r sugarú körlapra vett
integráljaként számítható ki (2. ábra):
F1 =
Z r
0
p(x) · 2πxdx =
1
2
̺ω2
Z r
0
x2
· 2πxdx +

p0 −
α
r
−
1
2
̺ω2
r2

· πr2
=
=
1
2
̺ω2
·
π
2
r4
+ p0 · πr2
− α · πr −
π
2
̺ω2
r4
= p0 · πr2
− α · πr −
π
4
̺ω2
r4
.
2. ábra
A virsli másik fele által kifejtett húzóer® (a felületi feszültség miatt): F2 = α · 2πr, míg a másik félben lév® leveg®
által kifejtett nyomóer®: F3 = p0 · πr2
.
Az er®egyensúly tehát tengelyirányban így írható fel:
F1 + F2 = F3,
p0 · πr2
− α · πr −
π
4
̺ω2
r4
+ α · 2πr = p0 · πr2
,
amib®l az I. megoldással összhangban a következ® megoldás adódik:
r = 3
r
4α
̺ω2
.
