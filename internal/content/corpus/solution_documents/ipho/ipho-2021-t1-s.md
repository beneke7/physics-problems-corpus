---
id: solution-document-ipho-2021-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2021/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2021-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2021/T1_S.pdf."
---

Theoretical Question 1 – Solution
S1-1
ENGLISH
Planetary Physics (10 points)
Part A. Mid-ocean ridge (5.0 points)
A.1 (0.8 points)
Figure 1
Letℎ0 betheheightofthecolumnofoil(seeFig.1). Thenpressureatdepthℎ belowthewatersurface
must be 𝑝ℎ = 𝜌0𝑔ℎ = 𝜌oil𝑔ℎ0, from whereℎ0 =
𝜌0
𝜌oil
ℎ. Horizontal force on the plate 𝐹𝑥 = 𝐹1 −𝐹0, where
the force due to new fluid is 𝐹1 =
𝜌oil𝑔ℎ0
2 ·ℎ0𝑤 and the force due to water is 𝐹0 =
𝜌0𝑔ℎ
2 ·ℎ𝑤.
Combining all the equation above, we get
𝐹𝑥 =

𝜌0
𝜌oil
− 1

𝜌0𝑔ℎ2𝑤
2
.
This force acts on the right plate to the right.
A.2 (0.6 points)
Considerarectangularmasselementofthecrust. Sincerelation𝑙(𝑇) = 𝑙1 [1 −𝑘𝑙 (𝑇1 −𝑇) /(𝑇1 −𝑇0)]
holds for all three dimensions of the solid, its volume𝑉 satisfies
𝑉 = 𝑉1

1 −𝑘𝑙
𝑇1 −𝑇
𝑇1 −𝑇0
3
,
where𝑉1 is the volume at𝑇 =𝑇1. If the mass of the element is𝑚, density is then
𝜌(𝑇) =
𝑚
𝑉
=
𝑚
𝑉1

1 −𝑘𝑙
𝑇1 −𝑇
𝑇1 −𝑇0
−3
= 𝜌1

1 −𝑘𝑙
𝑇1 −𝑇
𝑇1 −𝑇0
−3
.
Since 𝑘𝑙  1, this can be approximated as
𝜌 (𝑇) ≈ 𝜌1

1 + 3𝑘𝑙
𝑇1 −𝑇
𝑇1 −𝑇0

,
so that 𝑘 = 3𝑘𝑙.Theoretical Question 1 – Solution
S1-2
ENGLISH
A.3 (1.1 points)
Since mantle behaves like a fluid in hydrostatic equilibrium, pressure 𝑝 (𝑥,𝑧) at 𝑧 = ℎ + 𝐷 must be
the same for all 𝑥. Therefore,
𝑝 (0,ℎ + 𝐷) = 𝑝 (∞,ℎ + 𝐷) .
Similarly, we must have
𝑝 (0,0) = 𝑝 (∞,0) .
Hence, the change in pressure between𝑧 = 0 and𝑧 = ∞ must be the same at both𝑥 = 0 and𝑥 = ∞.
At the ridge axis
𝑝 (0,ℎ + 𝐷) − 𝑝 (0,0) = 𝜌1𝑔 (ℎ + 𝐷),
while far away
𝑝 (∞,ℎ + 𝐷) − 𝑝 (∞,0) = 𝜌0𝑔ℎ +
∫ ℎ+𝐷
ℎ
𝜌 (𝑇 (∞,𝑧))𝑔d𝑧.
Since the temperature of the crust at 𝑥 = ∞ depends linearly on height, after applying the relevant
temperature boundary conditions,
𝑇 (∞,𝑧) =𝑇0 + (𝑇1 −𝑇0)
𝑧 −ℎ
𝐷
.
From all the equations above and by using the density formula given in the problem text,
𝜌1𝑔 (ℎ + 𝐷) = 𝜌0𝑔ℎ +
∫ ℎ+𝐷
ℎ
𝜌1 1 +𝑘
𝑇1 −𝑇0 − (𝑇1 −𝑇0) 𝑧−ℎ
𝐷
𝑇1 −𝑇0
!
𝑔d𝑧,
from where we straightforwardly obtain
𝐷 =
2
𝑘

1 −
𝜌0
𝜌1

ℎ.
A.4 (1.6 points)
The net horizontal force on the half of the ridge is the difference between the pressure forces acting
at 𝑥 = 0 and 𝑥 = ∞:
𝐹 = 𝐿
∫ ℎ+𝐷
0
𝑝 (0,𝑧) d𝑧 − 𝐿
∫ ℎ
0
𝑝 (∞,𝑧) .
From considerations of the previous question, pressure at 𝑥 = 0 is
𝑝 (0,𝑧) = 𝑝 (0,0) + 𝜌1𝑔𝑧,
while very far away
𝑝 (∞,𝑧) = 𝑝 (∞,0) + 𝜌0𝑔𝑧
The equations above can be combined into
𝐹 = 𝐿
∫ ℎ+𝐷
0
(𝑝 (0,0) + 𝜌1𝑔𝑧) d𝑧 − 𝐿
∫ ℎ
0
(𝑝 (∞,0) + 𝜌0𝑔𝑧) d𝑧.Theoretical Question 1 – Solution
S1-3
ENGLISH
After a straightforward integration and using 𝑝 (0,0) = 𝑝 (∞,0),
𝐹 = 𝐿𝑝 (0,0) 𝐷 + 𝐿𝜌1𝑔
(ℎ + 𝐷)2
2
− 𝐿𝜌0𝑔
ℎ2
2
.
Since 𝑘  1, and 𝐷 ∝ 𝑘−1, the term with 𝐷2 ∝ 𝑘−2 is of the leading order, hence, after substituting
the result of A.3, the required answer is
𝐹 ≈
2𝑔𝐿ℎ2 (𝜌1 − 𝜌0)2
𝑘2𝜌1
.
A.5 (0.9 points)
Method 1: dimensional analysis. The timescale𝜏 is expected to depend only on density of the
crust 𝜌1, its specific heat 𝑐, thermal conductivity 𝜅 and thickness 𝐷. Hence, we can write
𝜏 = 𝐴𝜌𝛼
1𝑐𝛽
𝜅𝛾
𝐷𝛿
,
where 𝐴 is a dimensionless constant. We will obtain the powers 𝛼–𝛿 via dimensional analysis.
Define the symbols for different dimensions: L for length, M for mass, T for time and Θ for tem-
perature. Then𝜏, 𝜌1,𝑐,𝜅 and 𝐷 have dimensions T, ML−3
, L2
T−2
Θ−1
, MLT−3
Θ−1
and L, respectively.
The resulting set of linear equations to balance the powers of length, mass, time and temperature,
respectively, is
      
    

0 = −3𝛼 + 2𝛽 +𝛾 +𝛿,
0 = 𝛼 +𝛾,
1 = −2𝛽 − 3𝛾,
0 = −𝛽 −𝛾.
This gives 𝛼 = 𝛽 = 1,𝛾 = −1, 𝛿 = 2. Hence,
𝜏 = 𝐴
𝑐𝜌1𝐷2
𝜅
.
Method 2: scale analysis. Consider a piece of crust of area 𝑆. Heat flux that has to be trans-
mitted through the crust is of order𝑄 ∼ 𝑐𝜌1𝑆𝐷Δ𝑇, where Δ𝑇 =𝑇1 −𝑇0. On the other hand, the law
of thermal conductivity gives that 𝜅Δ𝑇
𝐷 ∼ 𝑄
𝑆𝜏 .
From the two equations,𝑐𝜌1𝑆𝐷Δ𝑇 ∼ 𝑆𝜏𝜅Δ𝑇
𝐷 , from where we get that𝜏 is independent of Δ𝑇 and
𝜏 ∼
𝑐𝜌1𝐷2
𝜅
.Theoretical Question 1 – Solution
S1-4
ENGLISH
Part B. Seismic waves in a stratified medium (5.0 points)
B.1 (1.5 points)
Seismic waves in this problem can be treated by using ray theory. Namely, their propagation is
described by the Snell’s law of refraction
𝑛 (0) sin𝜃0 = 𝑛 (𝑧) sin𝜃,
where the refractive index is
𝑛 (𝑧) =
𝑐
𝑣 (𝑧)
=
𝑐
𝑣0

1 + 𝑧
𝑧0

and 𝑐 denotes the seismic wave speed in a material with refractive index 𝑛 = 1. From the two
equations above we have
𝑣0

1 +
𝑧
𝑧0

sin𝜃0 = 𝑣0 sin𝜃.
Method 1. Since this describes an arc of a circle, we have that at 𝜃 = 𝜋
2 , 𝑧 = 𝑅 − 𝑅 sin𝜃0 (Fig. 2),
giving 
1 +
𝑅 − 𝑅 sin𝜃0
𝑧0

sin𝜃0 = 1,
from where the circle radius 𝑅 = 𝑧0
sin𝜃0
. From simple geometry we get
𝑥1 (𝜃0) = 2𝑅 cos𝜃0,
leading to
𝑥1 (𝜃0) = 2𝑧0 cot𝜃0,
i.e. 𝐴 = 2𝑧0 and𝑏 = 1.
Figure 2Theoretical Question 1 – Solution
S1-5
ENGLISH
Method 2. Implicitly differentiating 𝑣0

1 + 𝑧
𝑧0

sin𝜃0 = 𝑣0 sin𝜃 gives
d𝑧
𝑧0
sin𝜃0 = cos𝜃 d𝜃.
An infinitesimal ray path length d𝑙 is related to the change in the vertical coordinate via
d𝑧 = d𝑙 cos𝜃,
giving
d𝑙 =
𝑧0
sin𝜃0
d𝜃.
This is an equation of an arc of a circle of radius 𝑅 = 𝑧0
sin𝜃0
Alternatively, instead of considering an infinitesimal ray path length d𝑙, one can obtain the
answer by writing
cot𝜃 =
d𝑧
d𝑥
=
d𝑧
d𝜃
d𝜃
d𝑥
.
The first derivative can be eliminated via Snell’s law, leading to
cot𝜃 =
𝑧0 cos𝜃
sin𝜃0
d𝜃
d𝑥
,
which can be integrated to get
𝑥1 = −
𝑧0
sin𝜃0
∫ end
start
dcos𝜃 =
2𝑧0 cos𝜃0
sin𝜃0
,
whereweusedSnell’slawagaintogetthattherayhascos𝜃 = −cos𝜃0 atthepointwhereitreaches
the surface.
B.2 (1.5 points)
In two dimensions, 𝐸
𝜋 d𝜃0 is the energy carried by rays that are emitted within interval [𝜃0,𝜃0 + d𝜃0).
On the other hand, the energy carried by rays that arrive at [𝑥,𝑥 + d𝑥) is 𝜀 d𝑥. Therefore,
𝜀 =
𝐸
𝜋
d𝜃0
d𝑥
.
Using the result of question B.1,
d𝑥
d𝜃0
= −
𝐴𝑏
sin2
(𝑏𝜃0)
= −𝐴𝑏 1 + cot2
(𝑏𝜃0)

= −
𝑏 𝐴2 +𝑥2

𝐴
.
Hence,
𝜀 (𝑥) =
𝐸𝐴
𝜋𝑏 (𝐴2 +𝑥2)
=
2𝐸𝑧0
𝜋 4𝑧2
0 +𝑥2
.
This function is plotted in Fig. 3.Theoretical Question 1 – Solution
S1-6
ENGLISH
Figure 3. Plot of the function 𝜀(𝑥).
B.3 (2.0 points)
Define 𝑥− = 𝑥1

𝜃0 − 𝛿𝜃0
2

and 𝑥+ = 𝑥1

𝜃0 + 𝛿𝜃0
2

. To the leading order in 𝛿𝜃0, 𝑥− ≈ 𝑥+ ≈ 𝑥1 (𝜃0).
With each reflection of the signal, the horizontal distance between the points where the edges of
the signal reflect increases by |𝑥+ −𝑥−| = 𝑥− − 𝑥+. When moving along the positive 𝑥-axis, these
zones get wider until they overlap. If this happens after 𝑁 reflections, then
𝑁 ≈
𝑥1 (𝜃0)
𝑥− −𝑥+
,
where the approximate sign tends to equality as 𝛿𝜃0 → 0.
The position where the zones start to overlap is at 𝑥max = 𝑁𝑥1(𝜃0). Therefore,
𝑥max =
𝑥1(𝜃0)2
𝑥1

𝜃0 − 𝛿𝜃0
2

−𝑥1

𝜃0 + 𝛿𝜃0
2
.
Since 𝛿𝜃0  𝜃0, we can approximate
𝑥1

𝜃0 −
𝛿𝜃0
2

−𝑥1

𝜃0 +
𝛿𝜃0
2

≈ −
d𝑥1(𝜃0)
d𝜃0
𝛿𝜃0 =
𝐴𝑏
sin2
(𝑏𝜃0)
𝛿𝜃0.
Combining the last two equations and substituting the 𝑥1 (𝜃0) expression gives
𝑥max =
𝐴cos2 (𝑏𝜃0)
𝑏𝛿𝜃0
=
2𝑧0 cos2 𝜃0
𝛿𝜃0
.
