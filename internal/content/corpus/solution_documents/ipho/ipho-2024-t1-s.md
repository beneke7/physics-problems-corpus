---
id: solution-document-ipho-2024-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2024/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2024-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2024/T1_S.pdf."
---

S1-1
A. Earth as a blackbody
A-1.All the energy emitted from the surface of the Sun, will reach a sphere of radius 𝑑 , therefore:
𝜎𝑇S
4
.(4𝜋𝑅S
2
) = (4𝜋𝑑2).𝑆0
𝑆0 = 𝜎𝑇S
4
.(
𝑅S
𝑑
)
2
= 5.67 × 10−8
W
m2K4
× (5.77 × 103
K)4
× (
6.96 × 108
m
1.5 × 1011 m
)
2
= 1.35 × 103
W
m2
A-1 (0.6 pt)
𝑆0 = 𝜎𝑇S
4
.(
𝑅S
𝑑
)
2
, Numerical value of 𝑆0 = 1.35 × 103
W/m2
A-2. It is assumed that the Earth is in thermal equilibrium. Therefore, the energy it receives per unit
time should be equal to the energy it radiates per unit time. The Earth’s cross-section intercepting
the solar radiation at this distance has an area of 𝜋𝑅E
2
, but the Earth radiates heat from all points
on its surface with an area of 4𝜋𝑅E
2
, so:
𝜋𝑅E
2
.𝑆0 = 4𝜋𝑅E
2
𝜎𝑇E
4
→ 𝑇E = (
𝑆0
4𝜎
)
1
4
= 278 K
A-2 (0.6 pt)
𝑇E = (
𝑆0
4𝜎
)
1
4
= √
𝑅S
2𝑑
𝑇S , Numerical value of 𝑇E = 278 K
A-3. The radiation is maximum at the wavelength for which the derivative of 𝑢 with respect to 𝜆 is
zero:
𝑑𝑢
𝑑𝜆
=
2𝜋ℎ𝑐2
𝜆6
.
1
𝑒𝑥𝑝(
ℎ𝑐
𝜆𝑘B𝑇
) − 1
.[−5 +
ℎ𝑐
𝜆𝑘B𝑇
𝑒𝑥𝑝(
ℎ𝑐
𝜆𝑘B𝑇
)
𝑒𝑥𝑝(
ℎ𝑐
𝜆𝑘B𝑇
) − 1
]
𝑑𝑢
𝑑𝜆
|𝜆=𝜆m
= 0 ⇒
ℎ𝑐
𝜆m𝑘𝐵𝑇
𝑒𝑥𝑝(
ℎ𝑐
𝜆m𝑘B𝑇
)
𝑒𝑥𝑝(
ℎ𝑐
𝜆m𝐾B𝑇
) − 1
= 5
Defining 𝑥m ≡
ℎ𝑐
𝜆m𝑘B𝑇
we obtain the following transcendental equation:
5(1 − 𝑒−𝑥m) − 𝑥m = 0S1-2
A-3 (0.4 pt)
𝑓(𝑥) = 5(1 − 𝑒−𝑥) − 𝑥
A-4. The first guess is 𝑥m
(1)
= 5 . Substituting repeatedly for 𝑥m we can continue as follows:
𝑥m
(2)
= 5(1 − 𝑒−5) = 4.97
𝑥m
(3)
= 5(1 − 𝑒−4.97) = 4.97
Further iterations do not change the value of 𝑥m to three significant figures, so:
𝜆m𝑇 =
ℎ𝑐
𝑥m𝑘B
= 𝑏 = 1240 eV ∙ nm ×
1
4.97 × 8.62 × 10−5 eVK−1
= 2.89 × 106
nm ∙ K
A-4 (0.4 pt)
𝑥m = {4.96,4.97} , Numerical value of 𝑏 = [2.89,2.90] × 106
nm ∙ K
A-5. Using Wien’s displacement law and the constant 𝑏 obtained in the previous part, we can calculate
the wavelength at which the radiation from the Sun and the Earth reaches its maximum:
𝜆max
Sun
=
𝑏
𝑇S
=
2.89 × 106
nm ∙ K
5.77 × 103 K
= [5.01,5.02] × 102
nm
𝜆max
Earth
=
𝑏
𝑇E
=
2.89 × 106
nm ∙ K
278 K
= 1.04 × 104
nm
A-5 (0.2 pt)
𝜆max
Sun
= [5.01,5.02] × 102
nm , 𝜆max
Earth
= 1.04 × 104
nm
A-6. From the diagram, it can clearly be seen that 𝛾𝑢 ̃S(𝜆max
S
) = 𝑢(𝜆max
Earth
,𝑇E) , so we have:
𝑢 ̃S(𝜆max
Sun
) = (
𝑅S
𝑑
)
2
2𝜋ℎ𝑐2
(𝜆max
Sun
)
5
1
𝑒𝑥𝑝(
ℎ𝑐
𝜆max
Sun
𝑘B𝑇S
) − 1
= (
𝑅S
𝑑
)
2
2𝜋ℎ𝑐2
(𝜆max
Sun
)
5
1
𝑒𝑥𝑝(
ℎ𝑐
𝑘B𝑏
) − 1
𝑢(𝜆max
Earth
,𝑇E) =
2𝜋ℎ𝑐2
(𝜆max
Earth
)
5
1
𝑒𝑥𝑝(
ℎ𝑐
𝜆max
Earth
𝑘B𝑇E
) − 1
=
2𝜋ℎ𝑐2
(𝜆max
Earth
)
5
1
𝑒𝑥𝑝(
ℎ𝑐
𝑘B𝑏
) − 1
Dividing these two quantities we’ll find:S1-3
𝛾 = (
𝑑
𝑅S
)
2
× (
𝑇E
𝑇S
)
5
= [1.20,1.21] × 10−2
A-6 (0.8 pt)
𝛾 = (
𝑑
𝑅S
)
2
× (
𝑇E
𝑇S
)
5
= (
𝑑
𝑅S
)
2
× (
𝜆max
Sun
𝜆max
Earth)
5
, Numerical value of 𝛾 = [1.20,1.21] × 10−2
B. The Greenhouse Effect
B-1. Both the Earth and its atmosphere are in thermal equilibrium, so one can write an equation that
balances the input and output powers. For the Earth we have:
(𝜋𝑅E
2
)(1 − 𝑟A)𝑆0 + (4𝜋𝑅E
2
)𝜎𝑇A
4
= (4𝜋𝑅E
2
)𝜎𝑇E
4
,
and for the atmosphere:
(4𝜋𝑅E
2)𝜎𝑇E
4
= 2(4𝜋𝑅E
2)𝜎𝑇A
4
.
Note that the coefficient 2 on the right-hand side of the equation is due to the atmosphere
radiating heat on both sides (above and below). Eliminating 𝑇𝐸 from the two relations we
obtain:
𝑇A = (
(1 − 𝑟A)
𝑆0
4
𝜎
)
1
4
= 2.58 × 102
K ⇒ 𝑇E = (2𝑇A
4
)
1
4 = 3.07 × 102
K
B-1 (1.0 pt)
𝑇A = (
(1−𝑟A)
𝑆0
4
𝜎
)
1
4
, Numerical value of 𝑇𝐴 = 2.58 × 102
K
𝑇E = (
(1−𝑟A)
𝑆0
2
𝜎
)
1
4
, Numerical value of 𝑇E = 3.07 × 102
K
B-2.As can be seen in the figure, a fraction (1 − 𝑟A) of the solar radiation reaches the Earth’s surface
after traversing the atmosphere.Afraction 𝑟E of this light is reflected back and reaches the
atmosphere, where a fraction 𝑟A is reflected and returns to the Earth’s surface. This process
repeats ad infinitum and the sum of the powers transmitted at all these instances, determines the
albedo. Denoting the power returned to space after 𝑛 reflections by 𝑆 ̃𝑛, we’ll have 𝑆 ̃0 = 𝑟A𝑆0 andS1-4
the remaining power i.e. (1 − 𝑟A)𝑆0 , reaches the Earth’s surface. From this power, (1 − 𝑟A)𝑟E𝑆0
is reflected, and a fraction 1 − 𝑟A of it is transmitted through the atmosphere to the space, hence:
𝑆 ̃1 = (1 − 𝑟A)2
𝑟E𝑆0 =
(1 − 𝑟A)2
𝑟A
𝑟E𝑆 ̃0
The power that is reflected back to the Earth by the atmosphere after (𝑛 − 1) reflections is
𝑆 ̃𝑛−1 (
𝑟A
1−rA
), of which a fraction 𝑟E is again sent back towards the atmosphere on the 𝑛’th
reflection, and the atmosphere allows a fraction 1 − 𝑟A of this reflected power to escape into the
space, thus:
𝑆 ̃𝑛 =
𝑆 ̃𝑛−1
1 − 𝑟A
𝑟A𝑟E × (1 − 𝑟A) = 𝑟A𝑟E𝑆 ̃𝑛−1 = (𝑟A𝑟E)𝑛−1
𝑆 ̃1
By adding all these terms, one obtains the power returned per unit area from the Earth-atmosphere
system:
𝑆 ̃ = ∑ 𝑆 ̃𝑛
∞
𝑛=0
= 𝑆 ̃0 + 𝑆 ̃1 ∑(𝑟A𝑟E)𝑛−1
∞
𝑛=1
= 𝑟A𝑆0 + (1 − 𝑟A)2
𝑟E𝑆0 ×
1
1 − 𝑟A𝑟E
= [𝑟A +
(1 − 𝑟A)2
𝑟E
1 − 𝑟A𝑟E
] × 𝑆0
Dividing by the solar constant we get the value for albedo:
𝛼 =
𝑆 ̃
𝑆0
= 𝑟A +
(1 − 𝑟A)2
𝑟E
1 − 𝑟A𝑟E
= 3.13 × 10−1
B-2 (1.6 pt)
𝛼 = 𝑟A +
(1−𝑟A)2𝑟E
1−𝑟A𝑟E
, Numerical value of 𝛼 = 3.13 × 10−1
B-3.Again, thermal equilibrium requires the input and output powers to be equal both for the Earth
and for the atmosphere, the only difference being that the Earth absorbs now a fraction 1 − 𝛼 of
the Sun’s radiation. Thus, for Earth we have:
(4𝜋𝑅E
2
)𝜖𝜎𝑇A
4
+ (𝜋𝑅E
2
)(1 − 𝛼)𝑆0 = (4𝜋𝑅E
2
)𝜎𝑇E
4
,
and for the atmosphere:
(4𝜋𝑅E
2
)𝜖𝜎𝑇E
4
= 2(4𝜋𝑅E
2
)𝜖𝜎𝑇A
4
𝑇E = [
(1 − 𝛼)
2𝜎(2 − 𝜖)
𝑆0]
1
4
, 𝑇A = (
𝑇E
4
2
)
1
4S1-5
𝜖 =
[𝜎𝑇E
4
−
(1 − 𝛼)
4
𝑆0]
𝜎𝑇A
4 = 2
[𝜎𝑇E
4
−
(1 − 𝛼)
4
𝑆0]
𝜎𝑇E
4 = [8.07,8.11] × 10−1
B-3 (1.0 pt)
𝑇E = [
(1−𝛼)
2𝜎(2−𝜖)
𝑆0]
1
4
, Numerical value of 𝜖 = [8.07 ,8.11] × 10−1
B-4.
𝑑𝑇E
𝑑𝜖
=
1
4
[
(1 − 𝛼)𝑆0
2𝜎(2 − 𝜖)
]
1
4 1
(2 − 𝜖)
𝑑𝑇E =
𝑑𝑇E
𝑑𝜖
𝜖
𝑑𝜖
𝜖
= [
4𝜎𝑇E
4
(1 − 𝛼)𝑆0
− 1]
𝑇E
4
× 0.01 = [4.87,4.92] × 10−1
B-4 (0.8pt)
𝑑𝑇E
𝑑𝜖
=
1
4
[
(1−𝛼)𝑆0
2𝜎(2−𝜖)
]
1
4 1
(2−𝜖)
, Numerical value of 𝛿𝑇E = [4.87,4.92] × 10−1
K
B-5. The equations for thermal equilibrium are similar to those for Part B.3, only a non-radiative
thermal current needs to be added. For the Earth:
(𝜋𝑅E
2)(1 − 𝛼)𝑆0 + (4𝜋𝑅E
2)𝜖𝜎𝑇A
4
= (4𝜋𝑅E
2)𝜎𝑇E
4
+ (4𝜋𝑅E
2)𝑘(𝑇E − 𝑇A),
and for the atmosphere:
(4𝜋𝑅E
2)𝜖𝜎𝑇E
4
+ (4𝜋𝑅E
2)𝑘(𝑇E − 𝑇A) = 2(4𝜋𝑅E
2)𝜖𝜎𝑇A
4
.
After completing the calculations, we will have:
𝜖 =
𝜎𝑇E
4
− (1 − 𝛼)
𝑆0
4
𝜎(𝑇E
4
− 𝑇A
4
)
= [8.47,8.52] × 10−1
𝑘 =
𝜖𝜎(2𝑇A
4
− 𝑇E
4)
𝑇E − 𝑇A
=
(2𝑇A
4
− 𝑇E
4) × [𝜎𝑇E
4
− (1 − 𝛼)
𝑆0
4
]
(𝑇E
4
− 𝑇A
4
) × (𝑇E − 𝑇A)
= [3.57,3.66] × 10−1
W/m2
KS1-6
B-5 (1.6pt)
𝜖 =
𝜎𝑇E
4
−(1−𝛼)
𝑆0
4
𝜎(𝑇E
4−𝑇A
4)
, Numerical value of 𝜖 = [8.47,8.52] × 10−1
𝑘 =
(2𝑇A
4
−𝑇E
4
)×[𝜎𝑇E
4
−(1−𝛼)
𝑆0
4
]
(𝑇E
4−𝑇A
4)×(𝑇E−𝑇A)
, Numerical value of 𝑘 = [3.57,3.66] × 10−1
W/m2
K
B-6. In order to find the change in the temperatures of the Earth and the atmosphere in terms of 𝜖 and
𝑘, we take the logarithm of both sides of the relations before taking the derivative:
𝑙𝑛𝜖 = 𝑙𝑛[𝜎𝑇E
4
− (1 − 𝛼)
𝑆0
4
] − 𝑙𝑛𝜎 − 𝑙𝑛 (𝑇E
4
− 𝑇A
4
)
𝑙𝑛𝑘 = 𝑙𝑛𝜖 + 𝑙𝑛𝜎 + 𝑙𝑛(2𝑇A
4
− 𝑇E
4) − 𝑙𝑛(𝑇E − 𝑇A)
1
𝜖
=
4𝜎𝑇E
3 𝑑𝑇E
𝑑𝜖
𝜎𝑇E
4
− (1 − 𝛼)
𝑆0
4
−
4𝑇E
3 𝑑𝑇E
𝑑𝜖
− 4𝑇A
3 𝑑𝑇A
𝑑𝜖
𝑇E
4
− 𝑇A
4
0 =
1
𝜖
+
8𝑇A
3 𝑑𝑇A
𝑑𝜖
− 4𝑇E
3 𝑑𝑇E
𝑑𝜖
2𝑇A
4
− 𝑇E
4 −
𝑑𝑇E
𝑑𝜖
−
𝑑𝑇A
𝑑𝜖
𝑇E − 𝑇A
𝜖 [
1
𝑇E − 𝑇A
+
4𝑇E
3
2𝑇A
4
− 𝑇E
4]
𝑑𝑇E
𝑑𝜖
= 1 + 𝜖[
8𝑇A
3
2𝑇A
4
− 𝑇E
4 +
1
𝑇E − 𝑇A
]
𝑑𝑇A
𝑑𝜖
1 + 𝜖[
4𝑇E
3
𝑇E
4
− 𝑇A
4 −
4𝜎𝑇E
3
𝜎𝑇E
4
− (1 − 𝛼)
𝑆0
4
]
𝑑𝑇E
𝑑𝜖
=
4𝑇A
3
𝑇E
4
− 𝑇A
4 𝜖
𝑑𝑇A
𝑑𝜖
Solving this set of linear equations and substituting 𝜖 in B-5, we find:S1-7
𝑑𝑇E
𝑑𝜖
=
[
𝜎(𝑇E
4
− 𝑇A
4
)
𝜎𝑇E
4
− (1 − 𝛼)
𝑆0
4
][1 + (
𝑇E
4
− 𝑇A
4
4𝑇A
3 )[
8𝑇A
3
2𝑇A
4
− 𝑇E
4 +
1
𝑇E − 𝑇A
]]
[
1
𝑇E − 𝑇A
+
4𝑇E
3
2𝑇A
4
− 𝑇E
4] − (
𝜎𝑇A
4
− (1 − 𝛼)
𝑆0
4
𝜎𝑇E
4
− (1 − 𝛼)
𝑆0
4
)(
𝑇E
𝑇A
)
3
[
8𝑇A
3
2𝑇A
4
− 𝑇E
4 +
1
𝑇E − 𝑇A
]
𝜖
𝑑𝑇E
𝑑𝜖
=
1 + (
𝑇E
4
− 𝑇A
4
4𝑇A
3 )[
8𝑇A
3
2𝑇A
4
− 𝑇E
4 +
1
𝑇E − 𝑇𝐴
]
[
1
𝑇E − 𝑇A
+
4𝑇E
3
2𝑇A
4
− 𝑇E
4] − (
𝜎𝑇A
4
− (1 − 𝛼)
𝑆0
4
𝜎𝑇E
4
− (1 − 𝛼)
𝑆0
4
)(
𝑇E
𝑇A
)
3
[
8𝑇A
3
2𝑇A
4
− 𝑇E
4 +
1
𝑇E − 𝑇A
]
𝑑𝑇E = 𝜖
𝑑𝑇E
𝑑𝜖
𝑑𝜖
𝜖
= [5.21 ,5.28] × 10−1
K
B-6 (1.0pt)
(a)
{
𝜖[
1
𝑇E−𝑇A
+
4𝑇E
3
2𝑇A
4
−𝑇E
4]
𝑑𝑇E
𝑑𝜖
= 1+ 𝜖[
8𝑇A
3
2𝑇A
4
−𝑇E
4 +
1
𝑇E−𝑇A
]
𝑑𝑇A
𝑑𝜖
1+ 𝜖[
4𝑇E
3
𝑇E
4
−𝑇A
4 −
4𝜎𝑇E
3
𝜎𝑇E
4
−(1−𝛼)
𝑆0
4
]
𝑑𝑇E
𝑑𝜖
=
4𝑇A
3
𝑇E
4
−𝑇A
4 𝜖
𝑑𝑇A
𝑑𝜖
(b) 𝛿𝑇E = [5.21 ,5.28] × 10−1
K
