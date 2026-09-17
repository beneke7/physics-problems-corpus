---
id: solution-document-ipho-2018-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2018/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2018-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2018/T3_S.pdf."
---

Confidential
Secretariado
IPhO 2018
Sociedade Portuguesa de F
Avenida da República Nº45
1050-187 Lisboa, Portugal
Secretariado IPhO 2018
Sociedade Portuguesa de Física
Avenida da República Nº45 3ºEsq
1050-187 Lisboa, Portugal
+351 21 799 36 65
info@ipho2018.pt
Solutions to Theory Problem 3
Physics of Live Systems
(Rui Travasso, Lucília Brito)
July 24, 2018
v1.0Confidential
Secretariado
IPhO 2018
Sociedade Portuguesa de Física
Avenida da República Nº45 3ºEsq
1050-187 Lisboa, Portugal
+351 21 799 36 65
info@ipho2018.pt
Theory
English (UK) ST3-1
Physics of Live Systems (10 points)
Part A. The physics of blood flow (4.5 points)
A.1
Since the vessel network is symmetrical, the flow in a vessel of level 𝑖 + 1 is half the flow in a vessel of
level 𝑖.
In this way, we can sum the pressure differences in all levels:
Δ𝑃 =
𝑁−1
∑
𝑖=0
𝑄𝑖𝑅𝑖 = 𝑄0
𝑁−1
∑
𝑖=0
𝑅𝑖
2𝑖
.
Introducing the radii dependences yields
Δ𝑃 = 𝑄0
𝑁−1
∑
𝑖=0
8ℓ𝑖𝜂
2𝑖𝜋𝑟4
𝑖
= 𝑄0
8ℓ0𝜂
𝜋𝑟4
0
𝑁−1
∑
𝑖=0
24𝑖/3
2𝑖2𝑖/3
= 𝑄0𝑁
8ℓ0𝜂
𝜋𝑟4
0
.
Therefore
𝑄0 = Δ𝑃
𝜋𝑟4
0
8𝑁ℓ0𝜂
.
Hence, the flow rate for a vessel network in level 𝑖 is
A.1
𝑄𝑖 = Δ𝑃
𝜋𝑟4
0
2𝑖+3𝑁ℓ0𝜂
.
1.3pt
A.2
Replace values in the formula and change units appropriately
𝑄0 =
Δ𝑃𝜋𝑟4
0
8𝑁ℓ0𝜂
=
=
(55 − 30) × 1.013 × 105
× 3.1415 × (6.0 × 10−5
)4
760 × 48 × 2.0 × 10−3 × 3.5 × 10−3
= 4.0 × 10−10
m3
/s
to obtain the final value in the requested unites:
A.2
𝑄0 ≃ 1.5 mℓ/h .
0.5ptConfidential
Secretariado
IPhO 2018
Sociedade Portuguesa de Física
Avenida da República Nº45 3ºEsq
1050-187 Lisboa, Portugal
+351 21 799 36 65
info@ipho2018.pt
Theory
English (UK) ST3-2
A.3
The current is given by
𝐼 =
𝑃ine𝑖𝜔𝑡
𝑅 + 𝑖𝜔𝐿 + 1
𝑖𝜔𝐶
.
The pressure difference in the capacitor is
𝑃oute𝑖(𝜔𝑡+𝜙)
=
𝑃ine𝑖𝜔𝑡
𝑅 + 𝑖𝜔𝐿 + 1
𝑖𝜔𝐶
1
𝑖𝜔𝐶
=
𝑃ine𝑖𝜔𝑡
𝑖𝜔𝐶𝑅 − 𝜔2𝐿𝐶 + 1
.
The amplitude is
𝑃out =
𝑃in
√(1 − 𝜔2𝐿𝐶)2 + 𝜔2𝐶2𝑅2
.
To be smaller than 𝑃in, for 𝜔 → 0:
(1 − 𝜔2
𝐿𝐶)2
+ 𝜔2
𝐶2
𝑅2
> 1 ⟺ −2𝐶𝐿 + 𝐶2
𝑅2
> 0 .
Replacing the expressions for 𝐿, 𝐶, and 𝑅 we get: 64𝜂2
ℓ2
3𝐸ℎ𝑟3𝜌 > 1 .
A.3
𝑃out =
𝑃in
√(1 − 𝜔2𝐿𝐶)2 + 𝜔2𝐶2𝑅2
.
Condition:
64𝜂2
ℓ2
3𝐸ℎ𝑟3𝜌
> 1 .
2.0pt
Alternative way to obtain 𝑃out:
The amplitude of the current in the equivalent circuit is 𝐼0 = 𝑃in
𝑍 , where
𝑍 = √𝑅2 + (𝜔𝐿 −
1
𝜔𝐶
)
2
is the modulus of the impedance. Hence, the voltage amplitude in the capacitor is
𝑃out =
1
𝜔𝐶
× 𝐼0 =
𝑃in
√𝜔2𝐶2𝑅2 + (𝜔2𝐿𝐶 − 1)2
.
A.4
The previous condition can also be expressed as
ℎ <
64𝜂2
ℓ2
3𝐸𝑟3𝜌
.
For the network referred to in A.2
ℎ <
64𝜂2
ℓ2
0 × 2𝑖
3 × 22𝑖/3𝐸𝑟3
0𝜌
=
64 × (3.5 × 10−3
)2
× (2.0 × 10−3
)2
3 × 0.06 × 106 × (6.0 × 10−5)3 × 1.05 × 103
× 2𝑖/3
= 7.7 × 10−5
× 2𝑖/3
.Confidential
Secretariado
IPhO 2018
Sociedade Portuguesa de Física
Avenida da República Nº45 3ºEsq
1050-187 Lisboa, Portugal
+351 21 799 36 65
info@ipho2018.pt
Theory
English (UK) ST3-3
For 𝑖 = 0, in the worse case scenario,
ℎmax = 7.7 × 10−5
× 20
= 7.7 × 10−5
m
This value is certainly observed in these vessels since their radius range from 18 𝜇m to 60 𝜇m. A wall
width smaller than 80 𝜇m is certainly reasonable.
A.4 Maximum ℎ = 8 × 10−5
m 0.7pt
Part B. Tumor growth (5.5 points)
B.1
The expressions for the masses of tumour and normal tissue are written as:
⎧
{
⎨
{
⎩
𝑀T = 𝑉T𝜌T = 𝑉T𝜌0(1 + 𝑝
𝐾T
)
𝑀N = 𝑉 𝜌0 = (𝑉 − 𝑉T)𝜌0(1 + 𝑝
𝐾N
)
The pressure, 𝑝, can be expressed as
𝑝 =
𝑀T 𝐾T
𝑉T 𝜌0
− 𝐾T
and, then, used in the equation for 𝑀N:
𝑀N = (𝑉 − 𝑉T)
𝑀N
𝑉
[(1 −
𝐾T
𝐾N
) +
𝑀T 𝑉𝐾T
𝑉T 𝑀N 𝐾N
]
Simplifying and rearranging the terms, the equation for 𝑣 becomes
(1 − 𝜅) 𝑣2
− (1 + 𝜇) 𝑣 + 𝜇 = 0,
for which the solution is (the other solution of the quadratic equation is not physically relevant since does
not lead to 𝑣 = 0 for 𝜇 = 0)
B.1
𝑣 =
1 + 𝜇 − √(1 + 𝜇)2 − 4𝜇(1 − 𝜅)
2(1 − 𝜅)
.
1.0pt
B.2
For 𝑟 < 𝑅T, the conservation of energy implies that
4𝜋𝑟2
(−𝑘)
d𝑇
d𝑟
= 𝒫
4
3
𝜋𝑟3
.Confidential
Secretariado
IPhO 2018
Sociedade Portuguesa de Física
Avenida da República Nº45 3ºEsq
1050-187 Lisboa, Portugal
+351 21 799 36 65
info@ipho2018.pt
Theory
English (UK) ST3-4
Therefore, the temperature difference to 37 o
C = 310.15 K, Δ𝑇(𝑟), is given by
Δ𝑇(𝑟) = −
𝒫𝑟2
6𝑘
+ 𝐶,
where 𝐶 is a constant.
For 𝑟 > 𝑅T, the conservation of energy implies that
4𝜋𝑟2
(−𝑘)
d𝑇
d𝑟
= 𝒫
4
3
𝜋𝑅3
T .
Therefore, the temperature difference to 37 o
C is
Δ𝑇(𝑟) =
𝒫𝑅3
T
3𝑘𝑟
.
In this case there is no constant, since very far away the increase in temperature is zero.
Matching the two solutions at 𝑟 = 𝑅T gives
𝐶 =
𝒫𝑅2
T
2𝑘
.
Therefore the temperature at the centre of the tumour, in SI units, is
B.2 Temperature: 310.15 +
𝒫𝑅2
T
2𝑘 . 1.7pt
B.3
The increase in temperature at the tumour surface (the lower temperature in the tumour) is
Δ𝑇(𝑅T) =
𝒫𝑅2
T
3𝑘
.
This increase should be equal to 6.0 K. Therefore,
𝒫 =
3Δ𝑇𝑘
𝑅2
T
=
3 × 6 × 0.6
0.052
= 4.3 kW/m
3
.
B.3 𝒫min = 4.3 kW/m
3
. 0.5pt
B.4
We can relate 𝛿𝑟 with the pressure in the tumour, using the relation given in the text up to leading order
in 𝑝 − 𝑃cap: 𝛿𝑟 =
𝑝−𝑃cap
2(𝑝c−𝑃cap) 𝛿𝑟c . Therefore, if 𝑝 − 𝑃cap is very small, also it is 𝛿𝑟.
The pressure can be related with the volume. We know that
𝑀N
𝑉N
=
𝜌0𝑉
𝑉 − 𝑉T
=
𝜌0
1 − 𝑣
= 𝜌0 (1 +
𝑝
𝐾N
) .Confidential
Secretariado
IPhO 2018
Sociedade Portuguesa de Física
Avenida da República Nº45 3ºEsq
1050-187 Lisboa, Portugal
+351 21 799 36 65
info@ipho2018.pt
Theory
English (UK) ST3-5
And so 𝑝 = 𝐾N𝑣
1−𝑣 .
When the thinner vessels are narrower, the flow rate in the main vessel is altered:
Δ𝑃 = (𝑄0 + 𝛿𝑄0)
𝑁−1
∑
𝑖=0
8ℓ𝑖𝜂
2𝑖𝜋𝑟4
𝑖
= (𝑄0 + 𝛿𝑄0)
8ℓ0𝜂
𝜋𝑟4
0
⎛ ⎜ ⎜
⎝
𝑁−2
∑
𝑖=0
24𝑖/3
2𝑖2𝑖/3
+
24(𝑁−1)/3
2𝑁−12(𝑁−1)/3 (1 − 𝛿𝑟
𝑟0/2(𝑁−1)/3 )
4
⎞ ⎟ ⎟
⎠
⟹ Δ𝑃 ≃ (𝑄0 + 𝛿𝑄0)
Δ𝑃
𝑁𝑄0
(𝑁 − 1 + 1 +
4𝛿𝑟
𝑟𝑁−1
)
Noting that 𝛿𝑄𝑁−1
𝑄𝑁−1
= 𝛿𝑄0
𝑄0
, we obtain
1 +
𝛿𝑄𝑁−1
𝑄𝑁−1
=
1
1 + 4𝛿𝑟
𝑁𝑟𝑁−1
≃ 1 −
4𝛿𝑟
𝑁𝑟𝑁−1
.
And so:
𝛿𝑄𝑁−1
𝑄𝑁−1
≃ −
4
𝑁
𝛿𝑟
𝑟𝑁−1
.
Putting all together
B.4
𝛿𝑄𝑁−1
𝑄𝑁−1
≃ −
2
𝑁
𝐾N𝑣 − (1 − 𝑣)𝑃cap
(1 − 𝑣)(𝑝c − 𝑃cap)
𝛿𝑟c
𝑟𝑁−1
.
2.3pt
