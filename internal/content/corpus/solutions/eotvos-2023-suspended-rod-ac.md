---
id: eotvos-2023-suspended-rod-ac
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2023-suspended-rod-ac
solution_type: official
source_document: solution-document-eotvos-2023-s
source_pdf: cache/phoxiv/eotvos/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2023_S.pdf."
---

2. Egy m = 50 g tömegű, ℓ = 20 cm hosszúságú fém- U(t)
m
4. ábra
rudat két, ugyancsak ℓ hosszúságú fémszállal vı́zszintes
helyzetben felfüggesztünk. A rudat egy széles patkómág-
nes pólusai közé helyezzük, ı́gy a rúd teljes egészében
B = 0,50 T indukciójú, jó közelı́téssel homogén mágne-
ses mezőbe merül. A fémszálak és a rúd együttes elektro-
mos ellenállása r = 0,10 Ω. A fémszálak felső végei közé
U0 = 10 mV amplitúdójú, f = 1,0 Hz frekvenciájú szinu-
szos váltófeszültséget kapcsolunk.
Hogyan mozog a rúd hosszabb idő után? A közegellenállást hanyagoljuk el!
(Vigh Máté)
44 Középiskolai Matematikai és Fizikai Lapok, 2024/1
i
i
2024.1.7 – 15:30 – 45. oldal – 45. lap KöMaL, 2024. január
i
i
i
i
i
i
Megoldás. Az ingán keresztül I(t) áram folyik, ı́gy
U(t)
m
I(t)
mg
FL
5. ábra
mozgása közben a nehézségi erőn kı́vül az FL = BIℓ nagy-
ságú Lorentz-erő is hat rá.
A forgómozgás alapegyenlete:
mℓ2
φ̈ = IBℓ2
cosφ − mgℓsinφ,
ahol mℓ2
az inga tehetetlenségi nyomatéka a forgástengely-
re vonatkoztatva. Kis φ szögkitérést feltételezve cosφ ≈ 1
és sinφ ≈ φ, ezt felhasználva:
I(t) =
m
B
φ̈ +
mg
Bℓ
φ.
A mozgó rúdban a mágneses tér hatására Ui(t) = Bℓ2
φ̇ feszültség indukálódik.
Az áramkörre a huroktörvényt felı́rva
U(t) = rI(t) + Ui(t),
és abba I(t) és Ui(t) kifejezését behelyettesı́tve az
U(t) =
mr
B
φ̈ + Bℓ2
φ̇ +
mgr
Bℓ
φ
egyenletet kapjuk, ahol U(t) = U0 sin(ωt) és ω = 2πf.
Ennek megoldására két lehetséges utat is ismertetünk.
I. megoldás. Felismerhetjük, hogy ez egy csillapı́tott kényszerrezgés mozgás-
egyenlete:
φ̈ +
B2
ℓ2
mr
φ̇ +
g
ℓ
φ =
BU0
mr
sin(ωt),
amelynek állandósult megoldását
φ(t) = φmax sin(ωt − ϕ)
alakban kereshetjük. Vezessük be a következő, kényszerrezgéseknél szokásosan al-
kalmazott jelöléseket:
B2
ℓ2
mr
= 2β,
g
ℓ
= ω2
0 és
BU0
mr
= f0.
A próbafüggvényt behelyettesı́tve a mozgásegyenletbe (vagy a megoldást az iroda-
lomból kikeresve) adódik, hogy
φmax =
f0
q
(ω2
0 − ω2)
2
+ 4β2ω2
=
BU0
mr
q
g
ℓ − ω2
2
+ B4ℓ4ω2
m2r2
≈ 3,6◦
,
és
ϕ = arctg
2βω
ω2
0 − ω2
= arctg
B2
ℓ2
ω
mr
g
ℓ − ω2
≈ 52,7◦
.
Középiskolai Matematikai és Fizikai Lapok, 2024/1 45
i
i
2024.1.7 – 15:30 – 46. oldal – 46. lap KöMaL, 2024. január
i
i
i
i
i
i
Az inga tehát hosszabb idő után a rákapcsolt feszültséggel azonos, 1 Hz-es
frekvenciával, de attól 52,7◦
-os fázissal lemaradva, 3,6◦
-os amplitúdóval leng.
A kitérés valóban kis szögű, ı́gy a közelı́tések jogosak voltak.
Bár a feladat nem kérdezte, a szögkitérés ismeretében érdekes meghatároznunk
a rúdban folyó áramerősséget:
I(t) =
m
B
φ̈ +
mg
Bℓ
φ =
m
B

−ω2
+
g
ℓ

φmax sin(ωt − ϕ) =
=
U0
r
g
ℓ − ω2
q
g
ℓ − ω2
2
+ B4ℓ4ω2
m2r2
sin(ωt − ϕ) = I0 sin(ωt − ϕ),
ahol I0 ≈ 61 mA.
Fontos megjegyezni, hogy (az indukált feszültség miatt)
I(t) ̸=
U0 sin(ωt)
r
,
tehát az áramerősség nincs fázisban a rákapcsolt feszültséggel.
Ellenőrzésként kiszámolhatjuk a feszültségforrást terhelő (bemenő) és az ellen-
álláson disszipálódó teljesı́tményeket:
Pátl =
U0I0 cosϕ
2
=
I2
0r
2
≈ 18 mW.
Ezek a várakozásunknak megfelelően egyenlők.
A 6., 7. és 8. ábrán a φmax maximális szögkitérést, a ϕ fáziskülönbséget és
az I0 maximális áramerősséget ábrázoltuk a gerjesztő frekvencia függvényében.
Látható, hogy a feladatban szereplő gerjesztés a rezonanciához közeli (az inga
sajátfrekvenciája f0 = 1
2π
pg
ℓ ≈ 1,1 Hz).
f (Hz)
4
2
1
3
0
0,1 1,0 10
f (Hz)
90
45
0
0,1 1,0 10
135
180
6. ábra 7. ábra
f (Hz)
0
–50
–100
0,1 1,0 10
50
100
I0 (mA)
8. ábra
46 Középiskolai Matematikai és Fizikai Lapok, 2024/1
i
i
2024.1.7 – 15:30 – 47. oldal – 47. lap KöMaL, 2024. január
i
i
i
i
i
i
II. megoldás. Vessük össze a mozgásegyenletet a soros RLC-körre felı́rt hurok-
törvénnyel (a szokásos jelölésekkel):
U(t) = LQ̈ + RQ̇ +
1
C
Q.
A két rendszer között tehát az alábbi megfeleltetés állı́tható fel:
Q → φ, L →
mr
B
, R → Bℓ2
,
1
C
→
mgr
Bℓ
.
Az áramkörös analógiában ismert, hogy az áramerősség az idő függvényében
I⋆
(t) = I⋆
0 sin(ωt − ϕ⋆
) módon változik, ahol az amplitúdó és a fázisszög:
I⋆
0 =
U0
q
R2 + Lω − 1
Cω
2
,
és
ϕ⋆
= arctg
Lω − 1
Cω
R
.
A töltés az idő függvényében (vagy integrálással vagy a harmonikus rezgőmozgás
analógiájával):
Q(t) = −
I⋆
0
ω
cos(ωt − ϕ⋆
).
Megjegyzés. Az I⋆
és ϕ⋆
jelöléseket azért használjuk, hogy megkülönböztessük az
áramkörös analógiában szereplő és a valódi ingában folyó áramerősséget, valamint az
analógiában az áram és a feszültség, illetve a valóságban az inga szögkitérése és a feszültség
közötti fázisszögeket.
Az áramkörös hasonlatot felhasználva most már megadhatjuk a felfüggesztett
rúd szögkitérését az idő függvényében:
φ(t) = −φmax cos(ωt − ϕ⋆
) = φmax sin(ωt − ϕ),
ahol
φmax =
I⋆
0
ω
=
U0
ω
q
B2ℓ4 + mrω
B − mgrω
Bℓ
2
≈ 3,6◦
,
és
ϕ = ϕ⋆
+ 90◦
= arctg
mrω
B − mgr
Bℓω
Bℓ2
+ 90◦
= −37,3◦
+ 90◦
= 52,7◦
,
a korábbi eredményekkel egyezően.
