---
id: solution-document-apho-2022-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2022/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2022-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2022/T2_S.pdf."
---

Solutions
A2-1 Oﬃcial (English)
A Mechanical Model for Phase Transitions1
General Grading Guidelines
When student’s solutions are correct and s/he also show how solutions were obtained, the stduent gets
full credit. The scheme oulined below is helpful if the student’s answers are partially correct. Atten-
tion will be paid to the detailed solution so, if the ﬁnal answer is correct but it is obtained by incorrect
method(s) then no credit will be given. Alternative solutions may exist and will be given due credit.
Partial or full outcomes obtained for later sections in the problem which are incorrect solely because of
errors being carried forward from previous sections, but are otherwise reasonable, will not be further
penalized. For example a dimensioanlly wrong answer when carried forward will not get any credit in the
subsequent sections. A numerically wrong evaluation when carried forward will get credit in subsequent
sections unless the numerical answer is patently wrong (e.g. the value of g is 981 m/sec2
! )
Incorrect or no labeling of an axis is penalized by -0.1 points
The numerical answer (i) must be correct to +/- 10% AND (ii) must respect signiﬁcant ﬁgures.
It maybe noted that NO micro-marking scheme takes care of all contingencies. A certain amount
of discretion rests with and a certain level of judgement is invested in the academic committee.
A.1 (0.5 pt)
Equations of motion
The radial component 𝐹𝑟 yields:
𝑚𝑅 ̇ 𝜃2
= 𝑁 − 𝑚𝑔cos(𝜃) − 𝑚𝑅sin
2
(𝜃)𝜔2
(1)
[0.2]
The tangential component 𝐹𝜃
𝑚𝑅 ̈ 𝜃 = 𝑚𝑅sin(𝜃)cos(𝜃)𝜔2
− 𝑚𝑔sin(𝜃) − sgn( ̇ 𝜃)𝑘𝑁 (2)
OR
𝑚𝑅 ̈ 𝜃 = 𝑚𝑅sin(𝜃)cos(𝜃)𝜔2
− 𝑚𝑔sin(𝜃) − 𝑓𝑘𝑁 (𝑓 = 1) (3)
[0.3]
No points if equations not written using radial and tangential components.
1Sitikantha Das (IIT Kharagpur) and Pramendra Ranjan Singh (Principal, Narayan College, J.P. University) were the principal
authors of this problem. The contributions of the Academic Committee, Academic Development Group, and the International
Board are gratefully acknowledged.Solutions
A2-2 Oﬃcial (English)
B.1 (1.0 pt)
Equilibrium angle(s)
We set 𝑘 = 0 in the equation for the tangential component of the force. Thus
𝑚𝑅 ̈ 𝜃 = 𝑚𝑅sin(𝜃)cos(𝜃)𝜔2
− 𝑚𝑔sin(𝜃) (4)
For equilibrium we set ̈ 𝜃0 = 0 in the above equation. Then 𝜃0 = 0 is an equilibrium angle for all values
of 𝜔
[0.4]
The other values are given by
cos𝜃0 =
𝑔
𝜔2𝑅
=
𝜔2
𝑐
𝜔2
(5)
[0.3]
𝜃0 = ±∣cos−1 𝜔2
𝑐
𝜔2
∣ (6)
[0.1]
with values of 𝜃0 between -𝜋/2 to 𝜋/2. The ± indicates that there are two equivalent positions. () The
bead could rise on either side of the axis shown in the ﬁgure depicted in the problem. Note that for
𝜔 < 𝜔𝑐, Eq. (5) implies cos𝜃0 > 1. This is clearly unphysical. A little reﬂection will convince us that
𝜃0 = 0 for 𝜔 < 𝜔𝑐.
[0.2]
B.2 (0.5 pt)
Sketch of 𝜃0.
0
𝜔/𝜔𝑐
𝜃 0
1
[shape correct: 0.2]
[only if both branches: 0.3]Solutions
A2-3 Oﬃcial (English)
B.3 (0.5 pt)
Sketch of the magnitude of the normal reaction
𝜔/𝜔𝑐
𝑁
1
𝑚𝑔
[𝜔 < 𝜔𝑐 ∶ 0.2]
[𝜔 > 𝜔𝑐 ∶ 0.3]
If the shape of the plot is wrong, in that case, the following would be used. If in the detailed work,
it is shown that 𝑁 = 𝑚𝑔 for 𝜔 < 𝜔𝑐, 0.1 points would be provided. If it is shown that 𝑁 = 𝑚𝜔2
𝑅 for
𝜔 ≥ 𝜔𝑐, 0.1 points would be provided.Solutions
A2-4 Oﬃcial (English)
B.4 (1.0 pt)
The potential 𝑉 (𝜃)
Solution 1: Using direct integration
Given that
𝐹𝜃 = −
1
𝑅
𝑑𝑉 (𝜃)
𝑑𝜃
(7)
and taking 𝑉 (𝜃 = 0) = 0, we obtain on integrating Eq.(4) that
−𝑅∫
𝜃
0
𝐹𝜃𝑑𝜃 = ∫
𝑉
0
𝑑𝑉 = 𝑉 − 0
[0.3]
the left hand side is
−𝑅∫
𝜃
0
𝐹𝜃𝑑𝜃 =
−𝑚𝜔2
𝑅2
2
∫
𝜃
0
sin(2𝜃) + 𝑚𝑔𝑅∫
𝜃
0
sin(𝜃)𝑑𝜃
=
𝑚𝜔2
𝑅2
(cos(2𝜃) − 1)
4
− 𝑚𝑔𝑅(cos(𝜃) − 1) (8)
[0.4]
Noting that 𝑐𝑜𝑠(2(𝜃) − 1) = −2sin
2
(𝜃) and 𝜔2
𝑐 = 𝑔/𝑅 we obtain
𝑉 (𝜃) = 𝑚𝑔𝑅[(1 − cos𝜃) −
𝜔2
2𝜔2
𝑐
sin
2
𝜃] (9)
[0.3]
We can also verify the above equation by substitution into Eq.(7)
𝑃 = 𝑚𝑔𝑅
𝑄 = −𝑚𝑔𝑅
𝑆 = −
𝜔2
𝑚𝑔𝑅
2𝜔2
𝑐
Solution 2: Differentiating 𝑉 = 𝑃 + 𝑄cos(𝜃) + 𝑆 sin
2
(𝜃)
𝐹𝜃 = 𝑚𝑅sin𝜃cos𝜃𝜔2
− 𝑚𝑔sin𝜃 = −
1
𝑅
𝑑𝑉 (𝜃)
𝑑𝜃
=
𝑄
𝑅
sin(𝜃) − 2
𝑆
𝑅
sin𝜃cos𝜃
[0.3]
Comparing, we get,
𝑄 = −𝑚𝑔𝑅
𝑆 = −
𝜔2
𝑚𝑔𝑅
2𝜔2
𝑐
[0.2,0.2]
Also, as 𝑉 (0) = 0, we have 𝑃 + 𝑄 = 0. Hence, 𝑃 = 𝑚𝑔𝑅
[0.3]Solutions
A2-5 Oﬃcial (English)
B.5 (1.0 pt)
The coeﬃcients
We use the expansions for the trigonmetric functions sin(𝜃) and cos(𝜃) in Eq.(10). We shall keep
terms upto and inculding order 𝜃4
. Thus
𝑉 (𝜃) ≈ 𝑚𝑔𝑅[1 − 1 + 𝜃2
/2 − 𝜃4
/24 −
𝜔2
2𝜔2
𝑐
(𝜃 − 𝜃3
/6)2
]
≈
𝑚𝑔𝑅
2
[1 −
𝜔2
𝜔2
𝑐
]𝜃2
+
𝑚𝑔𝑅
6
[
𝜔2
𝜔2
𝑐
−
1
4
]𝜃4
Thus
𝑎(𝜔) =
𝑚𝑔𝑅
2
(1 −
𝜔2
𝜔2
𝑐
)
[0.5]
𝑏(𝜔) =
𝑚𝑔𝑅
6
(
𝜔2
𝜔2
𝑐
−
1
4
)
[0.5]
Note: no penalty if the 1/4 term is missed.
One observes that if one incorrectly expands sin𝜃 ≈ 𝜃, in that case, only 𝑎(𝜔) will turn out to be
correct.Solutions
A2-6 Oﬃcial (English)
B.6 (1.0 pt)
Representative plots of the potential
Solution 1: Plotting for 𝜃 ∈ [−𝜋/2,𝜋/2]
−𝜋
2 0 𝜋
2
0
−𝜃0 𝜃0
𝜃
𝑉 (𝜃)
𝜔 < 𝜔𝑐
𝜔 > 𝜔𝑐
[𝜔 < 𝜔𝑐 ∶ 0.5]
[𝜔 > 𝜔𝑐 ∶ 0.5]
Solution 2: Plotting for 𝜃 ∈ [−𝜋,𝜋]
−𝜋 0 𝜋
0
−𝜃0 𝜃0
𝜃
𝑉 (𝜃)
𝜔 < 𝜔𝑐
𝜔 > 𝜔𝑐
[𝜔 < 𝜔𝑐 ∶ 0.5]
[𝜔 > 𝜔𝑐 ∶ 0.5]Solutions
A2-7 Oﬃcial (English)
B.7 (1.0 pt)
Bead analogues
Solution 1:
For 𝜔 → 𝜔+
𝑐 , 𝜃0 is close to zero. Hence on expanding the cosine term in Eq. (5),
1 −
𝜃2
0
2
=
𝜔2
𝑐
𝜔2
𝜃0 = ±
√
2 [1 −
𝜔2
𝑐
𝜔2
]
1/2
(10)
Also note from Eq. (5) that as 𝜔 → ∞, 𝜃0 → ±𝜋/2. This plot also has an analogue in phase transition.
The magnetization ℳ goes to zero as 𝑇 goes to 𝑇𝑐 in a similar fashion. Thus the role of ℳ is played
by 𝜃0 and temperature is inversely related to 𝜔. Increasing temperature is equivalent to decreasing
𝜔. Summarizing,
ℳ ⟶ 𝜃
[0.4]
𝑇𝑐 ⟶ 1/𝜔2
𝑐
𝑇/𝑇𝑐 ⟶ 𝜔2
𝑐/𝜔2
[0.4]
Equivalent value of 𝛽 for bead is = 1/2.
[0.2]
Solution 2:
For 𝜔 > 𝜔𝑐, cos𝜃0 = 𝜔2
𝑐/𝜔2
. Henceonwritingsin
2
𝜃0 = 1−cos2
𝜃0 andsubstitutingthevalueofcos𝜃0,
onegetssin𝜃0 = (1−𝜔4
𝑐
𝜔4 )1/2
. This plotalso has an analogue in phasetransition. The magnetization ℳ
goes to zero as 𝑇 goes to 𝑇𝑐 in a similar fashion. Thus the role of ℳ is played by sin𝜃0 (or equivalently
𝜃0 in the small angle limit) and temperature is inversely related to 𝜔4
. Increasing temperature is
equivalent to decreasing 𝜔. Summarizing,
ℳ ⟶ sin𝜃
[0.4]
𝑇𝑐 ⟶ 1/𝜔4
𝑐
𝑇/𝑇𝑐 ⟶ 𝜔4
𝑐/𝜔4
[0.4]
Equivalent value of 𝛽 for bead is = 1/2.
[0.2]
[Note: The critical exponent is 1/2 in our case and also in Landau theory. However experimentally
and in more elaborate theories the exponent of vanishing magnetization is 1/3].Solutions
A2-8 Oﬃcial (English)
B.8 (1.0 pt)
Oscillation frequency
The frequency of oscillation Ω0 of the bead about the "equilibrium" position 𝜃0 is
Ω0 =
1
𝑅
√𝑉 ″
(𝜃)
𝑚
We take the second order derivative of the potential as given in Eq.(10)
𝑉 ″
(𝜃) = 𝑚𝑔𝑅cos𝜃[1 −
𝜔2
𝜔2
𝑐
cos𝜃] + 𝑚𝑔𝑅
𝜔2
𝜔2
𝑐
sin
2
𝜃 (11)
For 𝜃 = 𝜃0 = ±cos−1
(𝜔2
𝑐/𝜔2
)
𝑉 ″
(𝜃0) = 𝑚𝑔𝑅
𝜔2
𝜔2
𝑐
(1 −
𝜔4
𝑐
𝜔4
) > 0 if 𝜔 > 𝜔𝑐 (12)
For 𝜔 < 𝜔𝑐, 𝜃0 = 0, and we obtain from Eq. (12) that
Ω0 = (𝜔2
𝑐 − 𝜔2
)1/2
(13)
[0.5]
Similarly for 𝜔 > 𝜔𝑐, using Eq. (13) we obtain
Ω0 = 𝜔(1 −
𝜔4
𝑐
𝜔4
)
1/2
(14)
[0.5]
No credit will be provided is small angle approximation of 𝑉 (𝜃) is used.Solutions
A2-9 Oﬃcial (English)
B.9 (1.0 pt)
Sketch of Ω0
𝜔
Ω 0
𝜔 < 𝜔𝑐
𝜔 > 𝜔𝑐
𝜔𝑐
𝜔𝑐
Ω
0 =
𝜔
[𝜔 < 𝜔𝑐 ∶ 0.5]
[𝜔 > 𝜔𝑐 ∶ 0.5]
In the case of wrong expression of Ω0 derived in the previous part, marks would be awarded based
on the plot of expression obtained, and physicality of the plots.Solutions
A2-10 Oﬃcial (English)
C.1 (1.0 pt)
Condition for equilibrium angles
We substitute the expression for the normal reaction (Eq.(1)) in the angular part (Eq.(3)) to obtain
𝑚𝑅 ̈ 𝜃 = 𝑚𝑅sin(𝜃)cos(𝜃)𝜔2
− 𝑚𝑔sin(𝜃) − 𝑓𝑘(𝑚𝑔cos(𝜃) + 𝑚𝑅sin
2
(𝜃)𝜔2
+ 𝑚𝑅 ̇ 𝜃2
)
Noting that 𝜔2
𝑐 = 𝑔/𝑅 and rearranging terms we have
̈ 𝜃 = 𝜔2
𝑐
⎡
⎢
⎣
(sin(𝜃))(cos(𝜃) − 𝑓𝑘sin(𝜃))(
𝜔
𝜔𝑐
)
2
− sin(𝜃) − 𝑓𝑘cos(𝜃) − 𝑓𝑘(
̇ 𝜃
𝜔𝑐
)
2
⎤
⎥
⎦
[0.2]
At equilibrium, ̇ 𝜃 = 0, ̈ 𝜃 = 0 and 𝑓 = sgn( ̇ 𝜃) = ±1 depending on how this equilibrium was attained,
iė., depending on the value of ̇ 𝜃 just before equilibrium was attained. Thus we obtain the expression
for the equilibrium angle 𝜃0,
sin(𝜃0)(cos(𝜃0) − 𝑓𝑘sin(𝜃0))(
𝜔
𝜔𝑐
)
2
= sin(𝜃0) + 𝑓𝑘cos(𝜃0) with 𝜃0 ∈ (−𝜋/2,𝜋/2)
[0.4]
For 𝑓 = 1 and 𝑘 = tan(𝛼) we may express the above as
(
𝜔
𝜔𝑐
)
2
=
sin(𝜃0) + tan(𝛼)𝑐𝑜𝑠(𝜃0)
sin(𝜃0)(cos(𝜃0) − tan(𝛼)sin(𝜃0))
=
tan(𝜃0 + 𝛼)
sin(𝜃0)
(15)
[0.4]
In case of algebraic error leading to 𝑥 = 𝜃0 − 𝛼, only 0.1 points would be deducted.Solutions
A2-11 Oﬃcial (English)
C.2 (0.5 pt)
Representative values for 𝜃0
We are given the expansions for the trignometric functions in the problem. We notice that the coef-
ﬁcient of the opposing force 𝑘 is small (=0.05). Thus 𝑘 = 𝛼. We then have
sin(𝜃0) ≈ 𝜃0
tan(𝜃0 + 𝛼) ≈ 𝜃0 + 𝛼
[0.2]
Thus
(
𝜔
𝜔𝑐
)
2
≈ 1 +
𝑘
𝜃0
Simple calculations yield
(a) 𝜃0 = -0.07 radians
(b) 𝜃0 = -0.1 radians
[0.3]
The plot will no longer be symmetric.
