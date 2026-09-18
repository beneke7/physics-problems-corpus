---
id: eotvos-2006-spacecraft-dust
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2006-spacecraft-dust
solution_type: official
source_document: solution-document-eotvos-2006-s
source_pdf: cache/phoxiv/eotvos/2006_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2006_S.pdf."
---

2. Egy bolygóközi pályán mozgó ¶rszonda, pályájának bizonyos részén, egy ott elhelyezked® kozmikus  porfelh®n
haladt át. Mindazon porszem sék, amelyeknek nekiütközött, ráragadtak a szondára. Mire a szonda kiért a porfelh®b®l,
tömege 2%-kal megn®tt.
Hány százalékkal n®tt meg a porfelh®n való áthaladás ideje ahhoz képest, amennyi id® alatt a porfelh® fékez® hatása
nélkül tette volna meg a szonda ugyanezt az utat?
(A porfelh®t állandó s¶r¶ség¶, határozott szél¶ objektumnak tekinthetjük.)
Megoldás. Küls® er®k hiányában a rendszer összes lendülete (impulzusa) állandó marad. Bolygóközi pályáról van
szó, az ¶rszonda tehát legfeljebb a Nap gravitá iós terét érzi, de els® közelítésben ezt is elhanyagolhatjuk. A porfelh®t
állandó s¶r¶ség¶, határozott szél¶ objektumnak tekintjük, így a folyamatot a 2. ábrával szemléltethetjük:
2. ábra
A porfelh® nem vesz át impulzust az ¶rszondától, mivel valamennyi porszem, amivel a szonda ütközik, ráragad a
szondára. Másrészt v0, vx és vl a szondának a porfelh®höz viszonyított (relatív) sebességét jelöli, vagyis a porfelh®t
nyugvónak tekinthetjük.
A szonda tömege, miután x utat megtett a porfelh®ben:
mx = m0 + ̺A x,
ahol ̺ a porfelh® s¶r¶sége, A a szondának a sebességére mer®leges keresztmetszet-területe. A szonda egész útját l-lel
jelölve, a feladat feltétele szerint
ml − m0 = ̺A l = 0,02m0.
A lendületmegmaradásból következ®leg
vx =
m0v0
mx
=
m0v0
m0 + ̺A x
.
Itt vx helyére
∆x
∆t
-t helyettesítve, majd ∆t-t kifejezve
∆t =
m0 + ̺A x
m0v0
· ∆x,
tehát az azonos nagyságú ∆x útszakaszok megtételéhez szükséges ∆t id® lineáris függvénye x-nek! Így a teljes áthaladási
id® a számtani középb®l számolható:
T =
X
∆t =
1
2

1
v0
+
m0 + ̺A l
m0v0
 X
∆x =
l
v0
+
̺A
m0v0
l2
2
.
Ezt a kifejezést kissé átalakíthatjuk:
T =
l
v0
+
̺A l
m0v0
l
2
=
l
v0
+
0,02
v0
l
2
=
l
v0
(1 + 0,01),
T = 1,01T0.
Most kapott eredményünk szerint az áthaladási id® 1%-kal lett nagyobb. Általánosítva azt mondhatjuk, hogy ha
a szonda tömege p%-kal megn®tt, akkor az áthaladási id® p/2%-kal lett nagyobb, függetlenül attól, hogy p értéke
mekkora. Csak az a gondolatmenet fogadható el e feladat teljes érték¶ megoldásának, amib®l ez is következik; más
megfontolások (melyek p ki siny értékénél numerikusan jó eredményt szolgáltatnak, de általánosságban nem m¶ködnek)
sak részmegoldásnak tekinthet®k.
