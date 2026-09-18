---
id: eotvos-2008-circus-artist
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2008-circus-artist
solution_type: official
source_document: solution-document-eotvos-2008-s
source_pdf: cache/phoxiv/eotvos/2008_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2008_S.pdf."
---

1. feladat. Egy irkuszi egyensúlyozóm¶vész egy hosszú függ®leges rúdra akar felmászni. A rúd hossza ℓ, tömege m.
A produk ió kezdetekor a rudat az egyik végéhez er®sített, elhanyagolható súlyú rugalmas kötélen engedik le a irkusz
kupolájától. Amikor a rúd alja éppen a talajhoz ér, a kötél 2ℓ hosszú (1. ábra). A kötél nyújtatlan hossza ℓ, megnyúlása
közben jól követi a Hooke-törvényt.
1. ábra
a) Milyen magasra mászhat fel a rúdra az ugyan sak m tömeg¶ artista anélkül, hogy a rúd függ®leges egyensúlyi
helyzete instabillá válna? (Az egyszer¶ség kedvéért tételezzük fel, hogy az artista mérete ℓ-hez képest elhanyagolható.)
b) A rúd fele magasságánál az artista ki sit kibillen és a rúddal együtt oldalirányú lengésekbe kezd. Mekkora a lengés
T periódusideje? (A rúd alsó vége nem tud elmozdulni, de a rúd szabadon elfordulhat az alsó végpontja körül.)
(Balogh Péter)
Megoldás. Azoknak a versenyz®knek sikerült jól megoldaniuk ezt a feladatot, akik elég bátrak voltak, és már
kezdetben
gyelembe vették, hogy elegend® az artista ki siny kibillenését vizsgálni.  k azután nem tévedtek el a
tetsz®leges szögekre érvényes, bonyolult összefüggések erdejében.
A 2. ábrán a hosszakat, a 3. ábrán az er®ket ábrázoltuk az α szöggel kibillent rúd esetében. Ekkor a kötélnek a
függ®legessel bezárt szöge β. Ha
gyelembe vesszük, hogy ki siny szögekr®l van szó, jó közelítéssel írhatjuk:
β ≈
α
2
.
2. ábra
3. ábra
A kilendült rudat a rúdra és az artistára ható nehézségi er® tovább akarja lendíteni, a kötél rugalmassága pedig
visszahúzza. A nehézségi er®k forgatónyomatékának nagysága (a rúd alsó végpontjára):
M1 = mg
ℓ
2
sinα + mgxsinα ≈
≈ mg

ℓ
2
+ x

α,
a visszahúzó kötéler® forgatónyomatékának nagysága pedig
M2 = Fℓsin(α + β) ≈ Fℓ(α + β) ≈ Fℓ
3
2
α.
A stabilitás feltétele:
M2 > M1.
Felhasználva, hogy kis szögekr®l van szó:
Fℓ
3
2
α > mg

ℓ
2
+ x

α.
Ha eltekintünk a kötél ki siny, további megnyúlásától, F továbbra is jó közelítéssel mg nagyságú marad. (F ki siny
megváltozását az ugyan sak ki siny α-val szorozva másodrend¶en ki siny tagot kapunk, amit elhanyagolunk.) Ezt
felhasználva a stabilitási feltétel:
mgℓ
3
2
α > mg

ℓ
2
+ x

α,
3
2
ℓ >
ℓ
2
+ x,
x < ℓ.
Tehát az artista felmászhat egészen a rúd tetejéig, amíg sak x < ℓ teljesül. Ezzel válaszoltunk az a) kérdésre, most
foglalkozzunk a b)-vel.
Tekintsük a 4. ábrát, amelyen már
gyelembe vettük a β ≈
α
2
közelítést, mivel továbbra is kis szögkitérés¶
lengésekr®l lehet sak szó, továbbá azt, hogy most x =
ℓ
2
. A visszatérít® forgatónyomaték:
M = M2 − M1 = Fℓ
3
2
α − 2mg
ℓ
2
α = ℓα

3
2
F − mg

=
=
1
2
mgℓ · α.
4. ábra
Ez a visszatér® forgatónyomaték egyenesen arányos α-val! Ebben az esetben harmonikus rezgés (lengés) jöhet
létre, melynek periódusidejét az arányossági tényez®b®l olvashatjuk ki. A rúdból és az artistából álló rendszer teljes
tehetetlenségi nyomatéka (a rúd legalsó pontjára vonatkoztatva):
Θ =
1
3
mℓ2
+ m

ℓ
2
 2
=
7
12
mℓ2
.
A harmonikus rezg®mozgásnál, ahol a visszahúzó er® nagysága F = Dx, fennáll a következ® összefüggés:
ω2
=
D
m
=
F/x
m
.
Ezzel analóg módon a lengésekre (harmonikusan változó forgómozgásra)
ω2
=
M/α
Θ
=
1
2 mgℓ
7
12 mℓ2
=
6
7
g
ℓ
érvényes. Ebb®l a lengés periódusideje:
T = 2π
s
7
6
ℓ
g
, mivel T =
2π
ω
.
