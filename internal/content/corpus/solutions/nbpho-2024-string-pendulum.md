---
id: nbpho-2024-string-pendulum
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2024-string-pendulum
solution_type: official
source_document: solution-document-nbpho-2024-s
source_pdf: cache/phoxiv/nbpho/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2024_S.pdf."
---

5. STRıNGANDPENDULUM (10points) —Solu­
tion by Päivo Simson, Tudor Plopeanu.
i) (5 points) We build two pendulums of dif‐
ferent lengths and release them from differ‐
ent angles such that their periods are equal.
We choose a small enough amplitude for the
longer pendulum to be able to use the small
angle formula, and a large amplitude for the
short pendulum.
We measure the lengths of the pendu‐
lums. Let l0 be the length of the longer pen‐
dulum and l1 be the length of the shorter
pendulum. Additionally, we measure the
angular amplitude ϕ (in degrees) of the
shorter (larger‐amplitude oscillating) pendu‐
lum with a protractor. From the equality of
periods, we get
p
l0 =
p
l1(1 + Aα2
),
from which
A =
q
l0
l1
− 1
α2
=
q
l0
l1
− 1

πϕ
180◦
2 .
We repeat the experiment with different
lengthsandfinallyfindtheaverageoftheres‐
ults. With the example values: ϕ = 55◦
, l0 =
41.5 cm and l1 = 36.5 cm we get A ≈ 0.07.
The theoretical true value is A ≈ 0.063, but
the expected measured value is slightly lar‐
ger, as higher order terms of the theoretical
expansion (1 + Aα2
+ Bα4
+ ...) are “com‐
bined” in the value of A. Thus generally, the
larger the angle used in the measurement,
thelargerthevalueofA,whichiswhyavalue
intherangeA ∈ [0.06,0.08]istobeexpected.
Wenoteacommonsolutionattemptofmeas­
uring the number of periods until two pendu­
lums of equal length, but different initial angles,
sync up again (i.e. one obtains a phase shift).
However, the inaccuracy in this method is very
large, in large part due to the amplitude drastic­
ally decreasing for large angles as an effect of en­
ergy dissipation. Even if a value of A ≈ 0.07
is obtained, this might therefore not get the “cor­
rect value” mark. However, if the amplitude de­
creaseistakenintoaccount,forexamplebyaver­
aging the angular amplitudes over the measure­
menttime,itispossibletoobtainamoreaccurate
and correct result.
Another common attempt of using a second
pendulum as a “clock” results in a far too low
time resolution, and therefore is not rewarded
any points.
Grading: (preliminary)
Note: The “sync up method” can be re‐
warded up to 1.5pts (0.5pts for measure‐
ments, 1pts for multiple datapoints).
• Recognize that we may use two pendulums
with different lengths and angular amp‐
litudes with equal periods (0.5pts)
• Presented measurement data of relevant
quantities (0.5pts)
• Good choice of measurements (i.e. large
enough angles, correct measured angle,
long enough pendulum for reasonably
large period etc.) (0.5pts)
• Using two or more datapoints (e.g. differ‐
ent lengths etc.) (1pts)
• Obtaining a correct expression for A in
terms of measurable quantities (1pts)
• Correct value A ∈ [0.06,0.08] (1.5pts)
ii) (5 points)
m
α1
α2
T1
Tx
Tx
T2
We shall tie some red string to two fix‐
ture points on the same horizontal level
and dangle the known mass staple from the
middle point. We measure the angles the
string makes with the horizontal plane at the
middle points and next to the supports, av‐
eraging the latter for a more accurate value.
Let α1 be the angle at the staple’s level, and
α2 be the angle at the support’s level. Let Tx
be the (unknown) horizontal tension in the
string. Along the string, between the staple
and the support, Tx is constant, as all acting
forces are vertical.
Equilibrium around the staple implies
2Tx cotα1 = mg. Equilibrium on the string
strictly between the staple and the support
implies 2Tx(tanα2 − cotα1) = Mg, where
M is the mass of the string. We compute the
mass of one meter’s worth of string as
M
l
=
m
l
tanα2 − cotα1
cotα1
=
m
l
(tanα1 tanα2 − 1),
where l is the measured length of string.
We repeat the experiment with different
lengths and finally find the average of the
results. With the example values α1 = 70◦
,
α2 = 41◦
, we find M ≈ 0.12 g.¹
Grading: (preliminary)Easytobychance
get close to the correct answer using other
methods, e.g. scales, balancing, other pen‐
dulums, ... Also the method of physical
vs mathematical pendulum does not work,
likely due to air resistance.
• Recognize the method (banana) (1pts)
• Recognize that the system is in equilib‐
rium, and we may balance the forces
(1pts)
• Correct equation (1pts)
• (Conditional on correct method being
used) Correct answer [0.11, 0.15] (2pts)
