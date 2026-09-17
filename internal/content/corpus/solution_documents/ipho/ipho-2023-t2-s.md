---
id: solution-document-ipho-2023-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2023/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2023-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2023/T2_S.pdf."
---

Solutions to Theory Problems
S2‒1
Theory Problem 2: Neutron Stars (10 points)
Part A. Mass and stability of nuclei (2.5 points)
A.1 The given binding energy is often called the Weizsäcker-Bethe mass formula, and the physical
interpretation of the volume and the surface terms is based on the liquid drop model. The formula
works quite well except for the shell effects. Find 𝐴 to minimize the binding energy per mass number,
i.e.,
𝐵
𝐴
= 𝑎𝑉 − 𝑎𝑆𝐴−1/3
−
𝑎𝐶
4
𝐴2/3
. (S2.1)
As long as 𝐴 is small, the second term is dominantly increasing with increasing 𝐴, and it is eventually
taken over by the third term which is decreasing. Therefore, the extremal corresponds to the maximum
of 𝐵/𝐴. One can explicitly carry out
𝑑(𝐵/𝐴)
𝑑𝐴
= 0 (S2.2)
to find the following condition,
𝑎𝑆
3
𝐴−4/3
−
𝑎𝐶
6
𝐴−1/3
= 0. (S2.3)
The solution is
𝐴 =
2𝑎𝑆
𝑎𝐶
. (S2.4)
From the given numerical values, 𝐴 = 50 (which must be an integer) is concluded.
▷Note: Inreality𝐵/𝐴hasamaximumfor𝐴rangingfrom56
Feto62
Ni. Thediscrepancyfromtheanswer
in this problem is understood by the approximation of dropping the pairing energy and disregarding a
mass difference between the proton and the neutron.
A.1 0.9pt
𝐴 = 50
A.2 Take the differentiation of 𝐵(𝑍,𝐴 − 𝑍)/𝐴 with respect to 𝑍 for a fixed 𝐴, which leads to
−2𝑎𝐶
𝑍∗
𝐴1/3
− 4𝑎sym
2𝑍∗
− 𝐴
𝐴
= 0. (S2.5)
By solving this in terms of 𝑍∗
, one finds
𝑍∗
=
1
1 +
𝑎𝐶
4𝑎sym
𝐴2/3
⋅
𝐴
2
. (S2.6)
From this expression one can understand that 𝑍∗
≃ 𝑁 as long as 𝐴 is small enough, while 𝑍∗
becomes far
smaller than 𝑁 for large 𝐴. It is obvious from the explicit form that the symmetry energy tends to favor
𝑍 = 𝑁 but the Coulomb interaction tends to favor 𝑍 → 0, and the balance between these competing
effects determines 𝑍∗
. Nuclei with too many neutrons (protons) would go through the 𝛽−
decay (the 𝛽+
decay or the electron capture) toward the stable (𝑍, 𝑁).
A.2 0.9pt
𝑍∗
= 79
1Solutions to Theory Problems
S2‒2
A.3 Plugging the binding energy into the given inequality, one sees that the volume terms cancel due
to volume conservation. Then, the condition involves only 𝑎𝑆 and 𝑎𝐶 which are related as
𝑎𝑆[𝐴2/3
− 2(
𝐴
2
)
2/3
] + 𝑎𝐶[
𝑍2
𝐴1/3
− 2
(𝑍/2)2
(𝐴/2)1/3
] > 0. (S2.7)
As guided in the problem, the above inequality becomes as simple as
𝑍2
𝐴
>
21/3
− 1
1 − 2−2/3
⋅
𝑎𝑆
𝑎𝐶
. (S2.8)
Therefore, the numerical coefficient turns out to be 0.7.
▷ Note: The physical interpretation of this result may need some explanations. Using the values of
𝑎𝑆 and 𝑎𝐶, one finds that such a symmetric fission process is possible for 𝑍2
/𝐴 ≳ 18. For example,
lead (Pb) with 𝑍 = 82 and 𝐴 = 208 is a stable element among several isotopes. Now, one can compute
822
/208 ≈ 32, which is larger than the threshold 18. The key to resolving this gap is the potential barrier
fromthedeformation. Whenaheavynucleussplitsintotwofragments,theshapeandthesurfaceshould
change from the stable configuration (which is not necessarily spherical due to interaction) and thus
the surface energy increases. Although some heavy elements are energetically unstable, the lifetime
necessary to overcome the potential barrier can be very large.
A.3 0.7pt
𝐶fission = 7.0 × 10−1
Part B. Neutron star as a gigantic nucleus (1.5 points)
B.1 The expression apart from the parametric dependence on 𝐴 can be identified as
𝑎grav =
3
5
𝐺𝑚2
𝑁
𝑅0
, (S2.9)
which is re-expressed in terms of 𝑀𝑃 using the given relation to 𝐺, leading to
𝑎grav =
3
5
ℏ𝑐𝑚2
𝑁
𝑅0𝑀2
𝑃
=
3
5
⋅
197fm ⋅ MeV × (939MeV/𝑐2
)2
1.1fm × (1.22 × 1022 MeV/𝑐2)2
≃ 6.4 × 10−37
MeV. (S2.10)
Here,𝑀𝑃 isaquantityoftencalledthePlanckmass. Thegravitationaleffectisextremelytinyascompared
to the typical scale in nuclear physics and this scale difference is manifest for this expression of 𝐺 with
𝑀𝑃 in the MeV unit.
The stability is judged from the condition that the binding energy should be positive, i.e.,
𝐵total(𝐴) = 𝑎𝑉 𝐴 − 𝑎sym𝐴 + 𝑎grav𝐴5/3
> 0. (S2.11)
This inequality can be translated into 𝐴 > 𝐴𝑐 with 𝐴𝑐 given by
𝐴𝑐 = (
𝑎sym − 𝑎𝑉
𝑎grav
)
3/2
≃ 4.4 × 1055
. (S2.12)
▷ Note: One may think that one neutron drip is a process with the least change in the surface area
and thus the smallest barrier. This leads to a condition, 𝐵total(𝐴) > 𝐵total(𝐴 − 1) or approximately
𝑑𝐵total(𝐴)/𝑑𝐴 > 0, which is satisfied in a window with 𝐵total < 0. This condition, 𝑑𝐵total/𝑑𝐴 = 0, results in
smaller 𝐴𝑐 but it is nontrivial whether such an unstable initial state could be prepared in the nature. The
neutron star is born in the Type-II (core-collapse) supernovae, and a baby star called the proto-neutron
star is an energetic state at high temperature. Neutrinos bring heat out from the proto-neutron star
2Solutions to Theory Problems
S2‒3
within the time scale of 𝒪(10) seconds. What is the possible smallest mass of the neutron star? This
is not completely understood partly because the computer simulation of the supernovae is a big chal-
lenge even today. Although the neutron star mass can become much smaller than 𝑀⊙ theoretically, the
simulation and the observation favor the mass ≳ 1.4𝑀⊙.
B.1 1.5pt
𝑎grav = 6 × 10−37
MeV
𝐴𝑐 = 4 × 1055
Part C. Neutron star in a binary system (6.0 points)
C.1 From the energy conservation, the free-falling system earns the kinetic energy 1
2𝑚𝑣2
from the
potential energy 𝑚𝑔Δℎ, and the velocity takes
𝑣2
= 2𝑔Δℎ = 2Δ𝜙. (S2.13)
The time delay can be derived from the standard arguments. Suppose that Clock-II passes two infinitesi-
mally separate points, 𝑧 and 𝑧+Δ𝑧, in F at time 𝑡 and 𝑡+Δ𝜏II, then the time interval registered by Clock-II
is
Δ𝜏II =
𝛾
𝑐
(𝑐Δ𝜏F − 𝛽Δ𝑧), (S2.14)
where the Lorentz transformation is used1
with 𝛽 = 𝑣/𝑐 and 𝛾 = 1/√1 − 𝛽2. Because Δ𝑧/Δ𝜏F = 𝑣 and
Δ𝜏F = Δ𝜏I, the above expression is written as
Δ𝜏II = 𝛾(1 − 𝛽2
)Δ𝜏F = √1 − 𝛽2 Δ𝜏I . (S2.15)
Using the expression of 𝑣2
, one finally arrives at
Δ𝜏II = √1 − 2
Δ𝜙
𝑐2
Δ𝜏I ≃ (1 −
Δ𝜙
𝑐2
)Δ𝜏I . (S2.16)
C.1 1.0pt
Δ𝜏II = (1 −
Δ𝜙
𝑐2
)Δ𝜏I
C.2 In terms of the effective speed of light, the total time necessary for the light propagation from N
to E is
𝑡E-N = ∫
𝑥𝐸
𝑥𝑁
𝑑𝑥
𝑐eff(𝑥)
. (S2.17)
The denominator is expanded in terms of the gravitational potential and the leading-order correction is
found to be
𝑡E-N ≃
1
𝑐
∫
𝑥𝐸
𝑥𝑁
𝑑𝑥(1 +
2𝐺𝑀WD
𝑐2
√
𝑥2 + 𝑑2
) =
𝑥𝐸 − 𝑥𝑁
𝑐
+ Δ𝑡, (S2.18)
1Clock‒F is in an inertial frame but Clock‒II is not. Using Clock‒II′ in another free‒falling frame II′ as an inertial reference to
Clock‒II, the Lorentz transformation is validated for Clock‒II′ seen from Clock‒F.
3Solutions to Theory Problems
S2‒4
where the time delay Δ𝑡 is identified as
Δ𝑡 =
2𝐺𝑀WD
𝑐3
∫
𝑥𝐸
𝑥𝑁
𝑑𝑥
√
𝑥2 + 𝑑2
=
𝐺𝑀WD
𝑐3
log(
√
𝑥2 + 𝑑2 + 𝑥
√
𝑥2 + 𝑑2 − 𝑥
)∣
𝑥=𝑥𝐸
𝑥=𝑥𝑁
. (S2.19)
Inside the logarithm, the following approximations are made:
√𝑥2
𝑁 + 𝑑2 + 𝑥𝑁 ≃
𝑑2
2|𝑥𝑁|
, √𝑥2
𝑁 + 𝑑2 − 𝑥𝑁 ≃ 2|𝑥𝑁|, (S2.20)
and
√𝑥2
𝐸 + 𝑑2 − 𝑥𝐸 ≃
𝑑2
2𝑥𝐸
, √𝑥2
𝐸 + 𝑑2 + 𝑥𝐸 ≃ 2𝑥𝐸 . (S2.21)
Then, the simple form of approximated Δ𝑡 is
Δ𝑡 ≃
𝐺𝑀WD
𝑐3
log(
2𝑥𝐸 ⋅ 2|𝑥𝑁|
𝑑2/(2𝑥𝐸) ⋅ 𝑑2/(2|𝑥𝑁|)
) =
2𝐺𝑀WD
𝑐3
log(
4|𝑥𝑁|𝑥𝐸
𝑑2
). (S2.22)
C.2 1.8pt
Δ𝑡 =
2𝐺𝑀WD
𝑐3
log(
4|𝑥𝑁|𝑥𝐸
𝑑2
)
C.3 Because |𝑥𝑁| = 𝐿cos𝜀 ≃ 𝐿 and 𝑑 = 𝐿sin𝜀 ≃ 𝐿𝜀 for Δ𝑡max, the answer of C.2 gives
Δ𝑡max =
2𝐺𝑀WD
𝑐3
log(4𝑥𝐸/𝐿𝜀2
) (S2.23)
For Δ𝑡min the sign of 𝑥𝑁 is changed. Although the expression of Δ𝑡 is intact, the approximation takes a
different form as
√𝑥2
𝑁 + 𝑑2 + 𝑥𝑁 ≃ 2𝑥𝑁 , √𝑥2
𝑁 + 𝑑2 − 𝑥𝑁 ≃
𝑑2
2𝑥𝑁
. (S2.24)
Then, the approximated form of Δ𝑡min is
Δ𝑡min ≃
𝐺𝑀WD
𝑐3
log(
2𝑥𝐸 ⋅ 𝑑2
/(2𝑥𝑁)
𝑑2/(2𝑥𝐸) ⋅ 2𝑥𝑁
) =
2𝐺𝑀WD
𝑐3
log(𝑥𝐸/𝐿), (S2.25)
where 𝑥𝑁 ≃ 𝐿 is used in the last expression. In the difference, Δ𝑡max − Δ𝑡min, one sees that 𝐿 and 𝑥𝐸
disappear.
C.3 1.8pt
Δ𝑡max − Δ𝑡min =
2𝐺𝑀WD
𝑐3
log(4/𝜀2
)
C.4 Using the expansion, cos𝜀 ≃ 1 − 1
2𝜀2
, one can evaluate
𝜀2
≃ 2 × (1 − cos𝜀) = 0.00022. (S2.26)
From the graph the difference in time delays is roughly read out as
Δ𝑡max − Δ𝑡min ≈ 50𝜇s (S2.27)
From these numerical values, 𝑀WD is solved as
𝑀WD = 𝑀⊙(
2𝐺𝑀⊙
𝑐3
)
−1
Δ𝑡max − Δ𝑡min
log(4/𝜀2)
≃
50𝜇s
10𝜇s log(4/0.00022)
𝑀⊙ ≃ 0.5𝑀⊙ . (S2.28)
4Solutions to Theory Problems
S2‒5
▷Note: ThedatainthisproblemroughlycorrespondtoPSRJ1614-2230[seeP.B.Demorestetal., Nature
467, 1080-1083 (2010)]. From the Shapiro delay measurement, the White Dwarf mass was estimated as
0.500±0.006𝑀⊙. With the Keplerian orbital parameters in the binary system, the neutron star mass was
considered to be 1.97 ± 0.04𝑀⊙, which was the heaviest neutron star at that time. Since then, several
candidates for heavier neutron stars have been found.
C.4 0.8pt
𝑀WD/𝑀⊙ = 0.5
C.5 For the circular orbit with the radius 𝑅, the equation of motion is
𝑚𝑅𝜔2
= 𝐺
𝑚𝑀
𝑅2
, (S2.29)
if 𝑀 is sufficiently large. From this it is easy to see
𝑅3
𝜔2
= 𝐺𝑀 = (const.) (S2.30)
This is nothing but Kepler's third law and the relation holds for more general elliptical orbits around the
center of mass.
C.5 0.4pt
𝑝 = −
3
2
C.6 The sum of the kinetic energy and the potential energy is
𝐸 =
1
2
𝑚𝑅2
𝜔2
− 𝐺
𝑚𝑀
𝑅
. (S2.31)
From the equation of motion this is rewritten as
𝐸 = −
1
2
𝐺
𝑚𝑀
𝑅
. (S2.32)
Therefore, when 𝐸 decreases due to gravitational wave emission, 𝑅 should decrease. Then, 𝜔 should
increase. Since the amplitude is proportional to 𝑅2
𝜔2
∝ 𝑅−1
, it should increase. In summary, both the
frequency and the amplitude should increase as time goes on, as illustrated in (b).
C.6 0.2pt
The most appropriate profile is (b).
5
