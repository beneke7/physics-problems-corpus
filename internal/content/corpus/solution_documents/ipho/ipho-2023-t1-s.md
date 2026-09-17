---
id: solution-document-ipho-2023-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2023/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2023-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2023/T1_S.pdf."
---

Solutions to Theory Problems
S1‒1
TheoryProblem1: CharacterizationofSoilColloids(10points)
Part A. Analysis of motions of colloidal particles (1.6 points)
A.1 The relation between the impulse and the momentum change is given by 𝑀𝑣0 = 𝐼0. Therefore,
𝑣0 =
𝐼0
𝑀
. (S1.1)
For the situation considered here, the equation of motion reads
𝑀 ̇ 𝑣 = −𝛾𝑣(𝑡). (S1.2)
Substituting the form of the solution given in the question sheet, 𝑣(𝑡) = 𝑣0𝑒−(𝑡−𝑡0)/𝜏
, we obtain
𝜏 =
𝑀
𝛾
. (S1.3)
A.1 0.8pt
𝑣0 =
𝐼0
𝑀
𝜏 =
𝑀
𝛾
A.2 Thanks to the linearity of Eq. (S1.2), we can use the superposition principle, which tells us that
𝑣(𝑡) is given by the sum of solutions for single collision events that occur before time 𝑡. This immediately
gives the solution as
𝑣(𝑡) = ∑
𝑖
𝐼𝑖
𝑀
𝑒−(𝑡−𝑡𝑖)/𝜏
, (S1.4)
where the sum is taken in the range of 𝑖 that satisfies 0 < 𝑡𝑖 < 𝑡.
It is also not difficult to figure out this superposition principle, by considering the effect of a single colli-
sion as well as the velocity change between two consecutive collisions. From A.1, it is straightforward to
show that the velocity right after the 𝑖th collision is given by
𝑣(𝑡𝑖) = 𝑣0(𝑡𝑖) +
𝐼𝑖
𝑀
, (S1.5)
where 𝑣0(𝑡𝑖) is the velocity right before the collision. Also, since there is no collision during 𝑡𝑖 < 𝑡 < 𝑡𝑖+1,
we have
𝑣(𝑡) = (𝑣0(𝑡𝑖) +
𝐼𝑖
𝑀
)𝑒−(𝑡−𝑡𝑖)/𝜏
. (S1.6)
In particular,
𝑣0(𝑡𝑖+1) = (𝑣0(𝑡𝑖) +
𝐼𝑖
𝑀
)𝑒−(𝑡𝑖+1−𝑡𝑖)/𝜏
. (S1.7)
Therefore, with 𝑣0(𝑡1) = 0, we obtain
𝑣0(𝑡𝑖) =
𝑖−1
∑
𝑗=1
𝐼𝑗
𝑀
𝑒−(𝑡𝑖−𝑡𝑗)/𝜏
(S1.8)
1Solutions to Theory Problems
S1‒2
and, for 𝑡𝑖 < 𝑡 < 𝑡𝑖+1,
𝑣(𝑡) =
𝑖
∑
𝑗=1
𝐼𝑗
𝑀
𝑒−(𝑡−𝑡𝑗)/𝜏
. (S1.9)
This is equivalent to Eq. (S1.4).
A.2 0.8pt
𝑣(𝑡) = ∑
𝑖
𝐼𝑖
𝑀
𝑒−(𝑡−𝑡𝑖)/𝜏
the inequality specifying the range of 𝑡𝑖 that needs to be considered:
0 < 𝑡𝑖 < 𝑡
Part B. Effective equation of motion (1.8 points)
B.1 From the definition of the model, we have
Δ𝑥(𝑡) =
𝑁
∑
𝑛=1
𝑣𝑛𝛿. (S1.10)
Taking the average and using ⟨𝑣𝑛⟩ = 0, we obtain
⟨Δ𝑥(𝑡)⟩ = 0. (S1.11)
For the mean square displacement, computing the square of Eq. (S1.10) and taking the average, we
obtain
⟨Δ𝑥(𝑡)2
⟩ =
𝑁
∑
𝑚=1
𝑁
∑
𝑛=1
⟨𝑣𝑚𝑣𝑛⟩𝛿2
. (S1.12)
Using ⟨𝑣𝑚𝑣𝑛⟩ = 𝐶 for 𝑛 = 𝑚 and 0 otherwise, we find
⟨Δ𝑥(𝑡)2
⟩ =
𝑁
∑
𝑛=1
𝐶𝛿2
= 𝑁𝐶𝛿2
. (S1.13)
Since 𝑁𝛿 = 𝑡, we obtain
⟨Δ𝑥(𝑡)2
⟩ = 𝐶𝛿𝑡. (S1.14)
B.1 1.0pt
⟨Δ𝑥(𝑡)⟩ = 0
⟨Δ𝑥(𝑡)2
⟩ = 𝐶𝛿𝑡
B.2 As described in the question sheet, the mean square displacement ⟨Δ𝑥(𝑡)2
⟩ is a characteristic
observable of the Brownian motion, which of course takes a finite value for a given 𝑡. For the model
considered here, we have Eq. (S1.14), but we need to consider the limit 𝛿 → 0 to describe the Brownian
motioninthismodel. Thisrequiresthat𝐶𝛿 remainsfinite,sothat𝐶 ∝ 𝛿−1
. Italsofollowsthat⟨Δ𝑥(𝑡)2
⟩ ∝ 𝑡.
▷ Note: The continuous time limit 𝛿 → 0 of the present model corresponds to what is called the over-
damped Langevin equation. This reads, in the absence of external force as considered here,
𝛾
𝑑𝑥
𝑑𝑡
= 𝜉(𝑡) (S1.15)
2Solutions to Theory Problems
S1‒3
with a Gaussian noise 𝜉(𝑡) that satisfies
⟨𝜉(𝑡)⟩ = 0, ⟨𝜉(𝑡)𝜉(𝑡′
)⟩ = 2𝐷𝛿(𝑡 − 𝑡′
) (S1.16)
with the diffusion coefficient 𝐷. Here, 𝛿(𝑡) (not to confuse with 𝛿 in the problem) is called the delta
function, which satisfies 𝛿(𝑡) = 0 for 𝑡 ≠ 0 and 𝛿(0) = ∞ but ∫
𝑏
𝑎
𝛿(𝑡)𝑑𝑡 = 1 for any 𝑎 < 0 and 𝑏 > 0.
B.2 0.8pt
𝛼 = −1
𝛽 = 1
Part C. Electrophoresis (2.7 points)
C.1 For particles with velocity 𝑣 (> 0), only those in the range 𝑥0 − 𝑣𝛿 ≤ 𝑥 ≤ 𝑥0 pass the position 𝑥0
during a time interval 𝛿. Therefore, the number of such particles per unit cross-sectional area and per
unit time is given by
𝑁+(𝑥0) =
1
𝛿
∫
𝑥0
𝑥0−𝑣𝛿
1
2
𝑛(𝑥)𝑑𝑥 (S1.17)
Using the Taylor expansion 𝑛(𝑥) ≃ 𝑛(𝑥0) + (𝑥 − 𝑥0)𝑑𝑛
𝑑𝑥 (𝑥0) and integrating, we obtain
𝑁+(𝑥0) =
1
2
𝑛(𝑥0)𝑣 −
1
4
𝑑𝑛
𝑑𝑥
(𝑥0)𝑣2
𝛿. (S1.18)
C.1 0.5pt
𝑁+(𝑥0) =
1
2
𝑛(𝑥0)𝑣 −
1
4
𝑑𝑛
𝑑𝑥
(𝑥0)𝑣2
𝛿
C.2 Let 𝑁−(𝑥0) be the counterpart of 𝑁+(𝑥0) for particles with velocity −𝑣, then
𝑁−(𝑥0) =
1
2
𝑛(𝑥0)𝑣 +
1
4
𝑑𝑛
𝑑𝑥
(𝑥0)𝑣2
𝛿. (S1.19)
With this equation, Eq. (S1.18), and 𝐽𝐷(𝑥0) = ⟨𝑁+(𝑥0) − 𝑁−(𝑥0)⟩, we obtain
𝐽𝐷(𝑥0) = −
1
2
𝑑𝑛
𝑑𝑥
(𝑥0)⟨𝑣2
⟩𝛿 = −
1
2
𝑑𝑛
𝑑𝑥
(𝑥0)𝐶𝛿. (S1.20)
Comparing this with Eq. (4) in the question sheet for 𝑥 = 𝑥0, 𝐽𝐷(𝑥0) = −𝐷𝑑𝑛
𝑑𝑥 (𝑥0), we obtain
𝐷 =
1
2
𝐶𝛿. (S1.21)
Plugging this into the result of B.1, we obtain
⟨Δ𝑥(𝑡)2
⟩ = 2𝐷𝑡. (S1.22)
3Solutions to Theory Problems
S1‒4
C.2 0.7pt
𝐽𝐷(𝑥0) = −
1
2
𝑑𝑛
𝑑𝑥
(𝑥0)𝐶𝛿
𝐷 =
1
2
𝐶𝛿
⟨Δ𝑥(𝑡)2
⟩ = 2𝐷𝑡
C.3 The force balance sketched in Fig. 2 is expressed by the following equation:
Π(𝑥)𝐴 + 𝑛(𝑥)𝐴Δ𝑥𝑄𝐸 = Π(𝑥 + Δ𝑥)𝐴. (S1.23)
Using the van 't Hoff equation for the osmotic pressure, Π(𝑥) = 𝑛(𝑥)𝑘𝑇, and carrying out the Taylor
expansion of 𝑛(𝑥 + Δ𝑥), we obtain
𝑑𝑛
𝑑𝑥
=
𝑛(𝑥)
𝑘𝑇
𝑄𝐸. (S1.24)
C.3 0.5pt
𝑑𝑛
𝑑𝑥
=
𝑛(𝑥)
𝑘𝑇
𝑄𝐸
C.4 The equation of motion for ⟨𝑣(𝑡)⟩ is
𝑀
𝑑⟨𝑣(𝑡)⟩
𝑑𝑡
= −𝛾⟨𝑣(𝑡)⟩ + 𝑄𝐸. (S1.25)
By solving this with the initial condition ⟨𝑣(0)⟩ = 0, we obtain
⟨𝑣(𝑡)⟩ =
𝑄𝐸
𝛾
(1 − 𝑒−𝑡/𝜏
). (S1.26)
Therefore,
𝑢 = lim
𝑡→∞
⟨𝑣(𝑡)⟩ =
𝑄𝐸
𝛾
. (S1.27)
▷ Note: The student is expected to surmise that the solution to Eq. (S1.25) has a functional form
analogous to that to Eq. (S1.2), whose solution is given in the question sheet.
C.4 0.5pt
⟨𝑣(𝑡)⟩ =
𝑄𝐸
𝛾
(1 − 𝑒−𝑡/𝜏
)
𝑢 = 𝑄𝐸
𝛾
C.5 From the result of C.3 and Eq. (4) in the question sheet, we have
𝐽𝐷(𝑥) = −
𝐷𝑄𝐸
𝑘𝑇
𝑛(𝑥). (S1.28)
4Solutions to Theory Problems
S1‒5
From the result of C.4 and Eq. (5) in the question sheet, we have
𝐽𝑄(𝑥) =
𝑄𝐸
𝛾
𝑛(𝑥). (S1.29)
Plugging these into the flux balance condition, 𝐽𝐷(𝑥) + 𝐽𝑄(𝑥) = 0, we obtain
𝐷 =
𝑘𝑇
𝛾
. (S1.30)
C.5 0.5pt
𝐷 =
𝑘𝑇
𝛾
Part D. Mean square displacement (2.4 points)
D.1 Combining the results of C.2 and C.5, 𝑘 = 𝑅/𝑁𝐴,𝛾 = 6𝜋𝑎𝜂, we obtain the following equation that
links the mean square displacement to 𝑁𝐴:
⟨Δ𝑥2
⟩ =
𝑅𝑇Δ𝑡
3𝜋𝑎𝜂𝑁𝐴
. (S1.31)
From the data given in the question sheet, the mean square displacement is estimated at ⟨Δ𝑥2
⟩ =
6.34 𝜇m2
. Plugging this and the values of the parameters given in the question sheet, we obtain
𝑁𝐴 = 5.6 × 1023
mol−1
. (S1.32)
▷ Note: In 1908, Jean Baptiste Perrin (1870-1942) carried out such an observation and obtained an esti-
mate of 𝑁𝐴, which turned out to be consistent with the values known at that time by other approaches.
This convinced the community of the fact that molecules and hence atoms do exist as constituents of
matter. Perrin was awarded the Nobel Prize in Physics in 1926 for ``his work on the discontinuous struc-
ture of matter, and especially for his discovery of sedimentation equilibrium''. For more details, see, e.g.,
S. G. Brush, ``A History of Random Processes: I. Brownian Movement from Brown to Perrin'', Archive for
History of Exact Sciences, volume 5, pages 1−36 (1968).
▷ Note: On May 20, 2019, the definition of physical constants including the Avogadro constant 𝑁𝐴 was
changed. As a result, 𝑁𝐴 is now defined by a fixed value, not to be determined through measurements.
D.1 1.0pt
𝑁𝐴 = 5.6 × 1023
mol−1
D.2 Using Δ𝑥(𝑡) = ∑
𝑁
𝑛=1
(𝑢 + 𝑣𝑛)𝛿 and Eq. (3) in the question sheet, we obtain
⟨Δ𝑥2
⟩ = (𝑢𝑡)2
+ 2𝐷𝑡 (S1.33)
for general 𝑡. This can be rewritten as
⟨Δ𝑥2
⟩ = 𝑢2
𝑡(𝑡 +
2𝐷
𝑢2
) = 𝑢2
𝑡(𝑡 + 𝑡∗), (S1.34)
with 𝑡∗ = 2𝐷/𝑢2
. Therefore,
⟨Δ𝑥2
⟩ ∝ {
𝑡 for 𝑡 ≪ 𝑡∗
𝑡2
for 𝑡 ≫ 𝑡∗
(S1.35)
5Solutions to Theory Problems
S1‒6
D.2 0.8pt
⟨Δ𝑥2
⟩ = (𝑢𝑡)2
+ 2𝐷𝑡 for general 𝑡
⟨Δ𝑥2
⟩ ∝ {
𝑡 for small 𝑡
𝑡2
for large 𝑡
𝑡∗ =
2𝐷
𝑢2
An example of the graph to answer:
(log t*)
D.1 Since the microbe does not change the swimming direction for 𝑡 ≪ 𝛿0, we can use the result of
D.2 just by replacing 𝑢 by 𝑢0. By contrast, for 𝑡 ≫ 𝛿0, the motion of the microbe can be described by the
model considered in PART B, though its parameter 𝛿 is not an artificial parameter anymore but is now a
quantity that characterizes the microbe's motion, 𝛿0. The parameter 𝐶 is given by 𝐶 = 𝑢2
0. Plugging this
into Eq. (S1.14) and collecting all these results, we obtain
⟨Δ𝑥2
⟩ =
⎧
{
⎨
{
⎩
2𝐷𝑡 for 𝑡 ≪ 2𝐷/𝑢2
0
𝑢2
0𝑡2
for 2𝐷/𝑢2
0 ≪ 𝑡 ≪ 𝛿0
𝑢2
0𝛿0𝑡 for 𝛿0 ≪ 𝑡
(S1.36)
▷ Note: More precisely, one can show ⟨Δ𝑥2
⟩ = (𝑢2
0𝛿0 + 2𝐷)𝑡 for 𝑡 ≫ 𝛿0. However, in order for the inter-
mediate regime to exist, we have 2𝐷/𝑢2
0 ≪ 𝛿0, from which it follows that 𝑢2
0𝛿0 ≫ 2𝐷 and the expression
in Eq. (S1.36) is a good approximation.
▷ Note: The motion of the microbe described here is called the run-and-tumble motion, except that
it is usually assumed that the microbe changes the swimming direction (``tumbling'') at random time
intervals. Some bacteria including Escherichia coli is known to swim in this manner.
D.3 0.6pt
⟨Δ𝑥2
⟩ =
⎧
{
⎨
{
⎩
2𝐷𝑡 for small 𝑡
𝑢2
0𝑡2
for intermediate 𝑡
𝑢2
0𝛿0𝑡 for large 𝑡
Part E. Water purification (1.5 points)
E.1 The interaction energy 𝑈(𝑑) has a barrier if 𝑐 is small enough, but the barrier disappears if 𝑐 exceeds
a threshold. This threshold is the critical concentration to derive in this question. The condition for the
barrier to disappear is given by
min𝑈′
(𝑑) = 0. (S1.37)
6Solutions to Theory Problems
S1‒7
This can be expressed by the following two equations:
𝑈′
(𝑑) =
𝐴
𝑑2
−
𝐵𝜖(𝑘𝑇)2
𝑞2𝜆
𝑒−𝑑/𝜆
= 0, (S1.38)
𝑈″
(𝑑) = −
2𝐴
𝑑3
+
𝐵𝜖(𝑘𝑇)2
𝑞2𝜆2
𝑒−𝑑/𝜆
= 0. (S1.39)
Solving these, we obtain
𝑑 = 2𝜆 = √
𝐴𝑞2𝜆
𝐵𝜖(𝑘𝑇)2
(S1.40)
and therefore
𝜆 =
𝑒2
𝐴𝑞2
4𝐵𝜖(𝑘𝑇)2
. (S1.41)
Plugging this into 𝑐 =
𝜖𝑘𝑇
2𝑁𝐴𝑞2
𝜆−2
, we obtain
𝑐 =
8𝐵2
𝜖3
(𝑘𝑇)5
𝑒4𝑁𝐴𝐴2𝑞6
. (S1.42)
▷ Note: In the literature, it is also common to consider that the critical concentration is reached when
the energy barrier becomes as low as the energy for 𝑑 → ∞, i.e., max𝑈(𝑑) = 0, although this does
not meet the requirements given in the question sheet. If this condition is used instead, we find 𝑐 =
𝐵2𝜖3(𝑘𝑇)5
2𝑒2𝑁𝐴𝐴2𝑞6 . This differs from Eq. (S1.42) only by a factor 𝑒2
/8 ≈ 0.92.
E.1 1.5pt
𝑐 =
8𝐵2
𝜖3
(𝑘𝑇)5
𝑒4𝑁𝐴𝐴2𝑞6
7
