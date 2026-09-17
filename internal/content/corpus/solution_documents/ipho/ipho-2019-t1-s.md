---
id: solution-document-ipho-2019-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2019/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2019-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2019/T1_S.pdf."
---

Theory IPhO 2019 Q1-1
S1-1
Zero-length springs and slinky coils – Solution
Part A: Statics
A.1 The force 𝐹 causes the spring to change its length from 𝐿0 to 𝐿. Since equal parts of the
spring are extended to equal lengths, we get:
Δ𝑦
Δ𝑙
=
𝐿
𝐿0
→ Δ𝑦 =
𝐿
𝐿0
Δ𝑙.
Since 𝐿 = max{
𝐹
𝑘
,𝐿0}, we get Δ𝑦 = max⁡ {
𝐹
𝑘𝐿0
Δ𝑙,Δ𝑙}. From this result we see that any piece of
length Δ𝑙 the spring behaves as a ZLS with spring constant 𝑘∗
= 𝑘
𝐿0
Δ𝑙
.
A.2 Let us compute the work of the force. From Task A.1: 𝑑𝑊 = 𝐹(𝑥)𝑑𝑥 =
𝑘𝐿0
Δ𝑙
𝑥𝑑𝑥.
Hence, Δ𝑊 = ∫
𝑘𝐿0
Δ𝑙
𝑥𝑑𝑥
Δ𝑦
Δ𝑙
=
𝑘𝐿0
Δ𝑙
𝑥2
2
|
Δ𝑙
Δ𝑦
=
𝑘𝐿0
2Δ𝑙
(Δ𝑦2
− Δ𝑙2)⁡⁡.
A.3. At every point along the statically hanging spring the weight of the mass below is balanced
by the tension from above. This implies that at the bottom of the spring there is a section of
length 𝑙0 whose turns are still touching each other, as their weight is insufficient to exceed the
threshold force 𝑘𝐿0 to pull them apart. The length 𝑙0 can be derived from the equation:
𝑙0
𝐿0
𝑀𝑔 = 𝑘𝐿0, hence 𝑙0 =
𝑘𝐿0
2
𝑀𝑔
= 𝛼𝐿0.
For 𝑙 > 𝑙0, a segment of the unstretched spring between 𝑙 and 𝑙 + d𝑙 feels a weight of
𝑙
𝐿0
𝑀𝑔
from beneath, which causes its length to stretch from d𝑙 to 𝑑𝑦 =
𝐹
𝑘𝐿0
𝑑𝑙 =
𝑙
𝐿0
𝑀𝑔
𝑑𝑙
𝑘𝐿0
=
𝑀𝑔
𝑘𝐿0
2 𝑙𝑑𝑙 =
𝑙
𝑙0
𝑑𝑙 .
Integration of the last expression over the stretched region, up to the point 𝐿0, gives its height
when the spring is stretched
𝐻 = 𝑙0 + ∫
𝑙
𝑙0
𝑑𝑙
𝐿0
𝑙0
= 𝑙0 +
𝑙2
2𝑙0
|
𝑙0
𝐿0
= 𝑙0 +
1
2𝑙0
(𝐿0
2
− 𝑙0
2) =
𝐿0
2
2𝑙0
+
𝑙0
2
=
𝐿0
2
(𝛼 +
1
𝛼
)⁡Theory IPhO 2019 Q1-1
S1-2
Part B: Dynamics
B.1. From Task A.3 we have 𝐻(𝑙) =
𝑙2
2𝑙0
+
𝑙0
2
. We now calculate the position of the center of
mass of the suspended spring. The contribution of the unstretched section of height 𝑙0 at the
bottom, having a mass of
𝑙0
𝐿0
𝑀 = 𝛼𝑀, is 𝛼𝑀
𝑙0
2
. The position of the center of mass is obtained by
summing the contributions of its elements:
𝐻𝑐𝑚 =
1
𝑀
[
𝑙0
2
𝛼𝑀 + ∫ 𝐻(𝑙)𝑑𝑚
𝐿0
𝑙0
] =
1
𝑀
[
𝛼𝐿0
2
𝛼𝑀 + ∫ (
𝑙2
2𝑙0
+
𝑙0
2
)
𝑀𝑑𝑙
𝐿0
⁡
𝐿0
𝑙0
]
=
𝛼2
𝐿0
2
+
1
𝐿0
[
𝑙3
6𝑙0
+
𝑙0
2
𝑙]
𝑙0
𝐿0
=
𝛼2
𝐿0
2
+
1
𝐿0
[
𝐿0
3
− 𝑙0
3
6𝑙0
+
𝑙0
2
(𝐿0 − 𝑙0)]
Where we have used 𝑑𝑚 =
𝑑𝑙
𝐿0
𝑀. Substituting 𝑙0 = 𝛼𝐿0 yields
𝐻𝑐𝑚 = 𝐿0 [
1
6𝛼
−
𝛼2
6
+
𝛼
2
]
When the spring is contracted to its free length 𝐿0, its center of mass is located at
𝐿0
2
. From the
falling of the center of mass at acceleration 𝑔 we get:
𝑔
2
𝑡𝑐
2
= 𝐻𝑐𝑚 −
𝐿0
2
= 𝐿0 [
1
6𝛼
−
𝛼2
6
+
𝛼
2
−
1
2
] =
𝐿0
6𝛼
(1 − 𝛼)3
Hence, 𝑡𝑐 = √
𝐿0
3𝑔𝛼
(1 − 𝛼)3.
For 𝑘 = 1.02 N/m, 𝐿0 = 0.055 m, 𝑀 = 0.201 kg, and 𝑔 = 9.80 m/s2, we have⁡𝛼 = 0.0285, and
𝑡𝑐 = 0.245⁡s.
B.2. The moving top section of the spring is pulled down by its own weight, 𝑚𝑡𝑜𝑝𝑔 = 𝑀𝑔
(𝐿0−𝑙)
𝐿0
⁡
and also by the tension in the spring below, which is equal to the weight 𝑀𝑔𝑙/𝐿0 of the
stationary section of the spring. Thus, the moving top section experiences a constant force 𝐹 =
𝑀𝑔 throughout its whole fall. Another way to see that, is that a total force of 𝑀𝑔 is exerted on
the spring, but only the moving part experiences it. Let’s calculate the position of the center of
mass at equilibrium of the upper part, i.e., all points with 𝑙′
> 𝑙 for some 𝑙 > 𝑙0. From part A,Theory IPhO 2019 Q1-1
S1-3
the position of a small portion ' l  with coordinate ' l is: 𝐻(𝑙′) =
𝑙′2
2𝑙0
+
𝑙0
2
and the center of
mass of this part is:
𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟−𝑖 =
𝐿0
𝑀(𝐿0 − 𝑙)
∫ 𝐻(𝑙′)𝑑𝑚
𝐿0
𝑙
=
𝐿0
𝑀(𝐿0 − 𝑙)
∫ (
𝑙′2
2𝑙0
+
𝑙0
2
)𝑑𝑚
𝐿0
𝑙
=
𝐿0
𝑀(𝐿0 − 𝑙)
∫ (
𝑙′2
2𝑙0
+
𝑙0
2
)
𝑀𝑑𝑙′
𝐿0
⁡
𝐿0
𝑙
=
1
(𝐿0 − 𝑙)
∫ (
𝑙′2
2𝑙0
+
𝑙0
2
)𝑑𝑙′⁡
𝐿0
𝑙
=
1
(𝐿0 − 𝑙)
[
𝑙′3
6𝑙0
+
𝑙0𝑙′
2
]
𝑙
𝐿_0
=
𝐿0
2
+ 𝐿0𝑙 + 𝑙2
6𝑙0
+
𝑙0
2
The position of the upper part of CM when it contracts to a length 𝐿0 − 𝑙 is 𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟−𝑓 =
𝑙2
2𝑙0
+
𝑙0
2
+
1
2
(𝐿0 − 𝑙). The change in the CM during the contraction process is: Δ𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟 =
𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟−𝑖 − 𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟−𝑓 =
𝐿0
2+𝐿0𝑙−2𝑙2
6𝑙0
−
1
2
(𝐿0 − 𝑙) =
(𝐿0−𝑙)(𝐿0+2𝑙)
6𝑙0
−
1
2
(𝐿0 − 𝑙).
The acceleration of the CM of the upper part is 𝑎𝐶𝑀 =
𝐹𝐿0
𝑀(𝐿0−𝑙)
=
𝑔𝐿0
𝐿0−𝑙
.
From the work energy theorem we get the equation 𝑣𝑢𝑝𝑝𝑒𝑟−𝑓
2
= 2𝑎𝐶𝑀Δ𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟, hence
𝑣𝑢𝑝𝑝𝑒𝑟−𝑓
2
= 2
𝑔𝐿0
𝐿0 − 𝑙
[
(𝐿0 − 𝑙)(𝐿0 + 2𝑙)
6𝛼𝐿0
−
1
2
(𝐿0 − 𝑙)] = 2𝑔[
𝐿0 + 2𝑙
6𝛼
−
1
2
𝐿0]
=
2𝑔
3𝛼
𝑙 + (
1
3𝛼
− 1)𝑔𝐿0
Therefore, 𝐴 =
2𝑔
3𝛼
and 𝐵 = (
1
3𝛼
− 1)𝑔𝐿0.
Note that for 𝑙 = 𝐿0, we have ⁡𝑣𝑢𝑝𝑝𝑒𝑟−𝑓
2
= 𝐿0𝑔
1−𝛼
𝛼
and for 𝑙 = 𝑙0 = 𝛼𝐿0, we get ⁡𝑣𝑢𝑝𝑝𝑒𝑟−𝑓
2
=
𝐿0𝑔
1−𝛼
3𝛼
, hence, the moment we release the spring its velocity is finite (not zero, the meaning is
that it accumulate this velocity in time that is much shorter than the contracting time c t ) and it
decreases to
1
√3
of the initial value when 𝑙 = 𝑙0.
B.3. Note that even though the center of mass of the spring accelerates downwards constantly,
the moving top section actually decelerates, while the position of the center of mass moves
down the spring. The speed of the top section 𝑣(𝑙), calculated in Task B2, decreases andTheory IPhO 2019 Q1-1
S1-4
approaches the value √𝐴𝛼𝐿0 + 𝐵 immediately before it attaches to the bottom section of
height 𝑙0 = 𝛼𝐿0, which was unstretched and at rest. Once the moving top section attaches to
the resting bottom section, its momentum is shared between both sections, so the speed
further decreases just before the whole spring starts accelerating downwards as a single mass.
Thus, the minimum speed is that of the whole spring immediately after its full collapse. From
momentum conservation, we have
𝑀𝑣𝑚𝑖𝑛 = 𝑚𝑡𝑜𝑝𝑣(𝑙0) = 𝑀(1 −
𝑙0
𝐿0
)√𝐴𝛼𝐿0 + 𝐵
𝑣𝑚𝑖𝑛 = (1 − 𝛼)√𝐴𝛼𝐿0 + 𝐵
Part C: Energetics
C.1. From the moment the spring is released, the acceleration of its center of mass is governed
by the external force 𝑀𝑔 and therefore the gravitational potential energy of the spring is fully
converted into the kinetic energy of the center of mass of the spring, which just before hitting
the ground is equal to the kinetic energy of the spring.
All that is left is the elastic energy stored in the spring, which is converted into heat, sound, etc.
To calculate it, we consider the elastic energy stored in a segment 𝑑ℎ of the stretched spring,
which when unstretched lies between 𝑙 and 𝑙 + d𝑙, using the result of Task A.2, Δ𝑊 =
𝑘𝐿0
2Δ𝑙
(Δ𝑙2
2
− Δ𝑙2), by choosing Δ𝑙 = 𝑑𝑙 and Δ𝑙2 = 𝑑𝑦, and using 𝑑𝑦 =
𝑙
𝑙0
𝑑𝑙 (which was obtained
in Task A.3), we get:
𝑑𝑊 =
𝑘𝐿0
2
(
𝑙2
𝑙0
2 − 1)𝑑𝑙. Integrating from 𝑙0 to 𝐿0 we find
𝑊 = ∫
𝑘𝐿0
2
(
𝑙2
𝑙0
2 − 1)𝑑𝑙
𝐿0
𝑙0
=
𝑘𝐿0
2
[
𝑙3
3𝑙0
2 − 𝑙]
𝑙0
𝐿0
=
𝑘𝐿0
2
(
𝐿0
3
− 𝑙0
3
3𝑙0
2 − (𝐿0 − 𝑙0))
=
𝑘𝐿0
2
2
(
1 − 𝛼3
⁡
3𝛼2
− (1 − 𝛼)) =
𝑘𝐿0
2
6𝛼2
(1 − 𝛼)2(2𝛼 + 1)
= 𝑀𝑔𝐿0
(1 − 𝛼)2
(2𝛼 + 1)
6𝛼
