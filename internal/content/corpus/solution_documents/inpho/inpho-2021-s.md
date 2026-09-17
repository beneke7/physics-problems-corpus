---
id: solution-document-inpho-2021-s
source: inpho
kind: official_answer_sheet
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2021_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/inpho/2021_S.pdf."
---

Indian Olympiad Qualiﬁer in Physics (IOQP) 2020-2021
conducted jointly by
Homi Bhabha Centre for Science Education (HBCSE-TIFR)
and
Indian Association of Physics Teachers (IAPT)
Part II: Indian National Physics Olympiad (INPhO)
Homi Bhabha Centre for Science Education (HBCSE-TIFR)
Date: 07 February 2021
Time: 10:15-12:15 (2 hours) Maximum Marks: 50
Instructions
1. This booklet consists of 10 pages and total of 5 questions. Write roll number at the top wherever
asked.
2. Booklet to write the answers is provided separately. Instructions to write the answers are on the
Answer Booklet.
3. Marks will be awarded on the basis of what you write on both the Summary Answer Sheet and
the Detailed Answer Sheets in the Answer Booklet. Simple short answers and plots may be
directly entered in the Summary Answer Sheet. Marks may be deducted for absence of detailed
work in questions involving longer calculations.
4. Strike out any rough work that you do not want to be considered for evaluation. You may also
use the space on the Question Paper for rough work – this will NOT be evaluated.
5. Non-programmable scientiﬁc calculators are allowed. Mobile phones cannot be used as calcula-
tors.
6. Last page of the question paper can be used for rough work.
7. Please submit the Answer Booklet at the end of the examination. You may retain the
Question Paper.
Table of Constants
Speed of light in vacuum c 3.00 × 108 m·s−1
Planck’s constant h 6.63 × 10−34 J·s
Magnitude of electron charge e 1.60 × 10−19 C
Rest mass of electron me 9.11 × 10−31 kg
Value of 1/4πϵ0 9.00 × 109 N·m2·C−2
Acceleration due to gravity g 9.81 m·s−2
Please note that alternate/equivalent methods and diﬀerent way of expressing
ﬁnal solutions may exist. A correct method will be suitably awarded.Page 2 Code 65 Questions Last six digits of Roll No.:
1. The ammeter-voltmeter method is widely used for measuring electrical resistances in the physics
laboratory. In this method, the resistance R is always derived from the readings V and I from a
voltmeter and an ammeter respectively, using Ohm’s law: R = V/I. While using this method, it
is assumed that the ammeter and voltmeter used in the setup are ideal. In this problem, we will
ﬁnd the pitfalls of this assumption and devise a new setup with a better performance.
The standard ammeter-voltmeter setup consists of a DC voltage source (ε) maintained at a con-
stant voltage, a protection resistance (Rp), an ammeter (A), and a voltmeter (V). The unknown in-
ternal resistances of the ammeter and the voltmeter are RA and RV , respectively. Also, RV ≫ RA.
We aim to measure the true value R of an unknown resistor.
We consider a two commonly used circuit conﬁgurations (1) and (2)
indicated by the two possible positions of the switch in the circuit
diagram shown below. Let the measured values of the resistance
R be Rm1 and Rm2 in the setups (1) and (2), respectively. The
relative error, ∆, is deﬁned as the ratio of the absolute error of the
measurement to the actual value: ∆ = (Rm − R)/R.
(a) [2 marks] Obtain the relative errors in the measurements (∆1 and ∆2) for each of the above
conﬁgurations.
Solution:
Setup (1):
Current through the ammeter
I1 =
V1
R
+
V1
RV
whereas the voltage corresponds to the voltage across the voltmeter-resistance combina-
tion. Thus the measured resistance
Rm1 =
V1
I1
=
R
1 + R
RV
(1.1)
∆1 = −
1
1 + RV
R
(1.2)
Setup (2):
Current through the ammeter
I2 =
V2
R + RA
Thus
Rm2 =
V2
I2
= R + RA (1.3)
∆2 =
RA
R
(1.4)
(b) [4 marks] Using exactly the same circuit elements, can you suggest a step by step procedure,
with the necessary circuit diagram(s), to measure the true value of the resistance R, regardless
of the values of the internal resistances of the ammeter and the voltmeter? You may use the
measurements made in part (a).
Solution:
1. We use the conﬁguration shown below. When the switch is in position 1, ammeter
and voltmeter are in parallel and we calculate RA = V/I.Page 3 Code 65 Questions
2. When we use the switch in position 2, the conﬁguration is same as position 2 of
part (a).
R = Rm2 − RA
This will give the true value of the resistance.
2. [8 marks] Prof. Saha gave the following problem to four students.
In this problem work done by a system on its surroundings is taken as positive. A non-ideal gas
follows the Van der Waals equation of state

P +
n2a
V 2

(V − nb) = nRT
where P, V , and T denote the pressure, volume, and temperature, respectively; n is the number of
moles; R is the universal gas constant and a,b are dimensional positive constants. This gas expands
adiabatically from an initial temperature Ti and volume Vi to a ﬁnal temperature Tf and volume
Vf. The adiabatic process is described by an equation of the form f(P,V ;n,a,b,α) = constant,
where α is a dimensionless number which is greater than 1. It is given that α → γ in the ideal gas
limit, where γ is the adiabatic exponent. What is the work (W) done by the gas in the process?
The four students solved the problem independently and gave four diﬀerent answers. Their answers
were:
(a) W =
nR
α − 1
(Ti − Tf) + n2a(V −1
f − V −1
i )
(b) W =
nR
α − 1
(Tf − Ti) + n2a(V −1
f − V −1
i )
(c) W =
nR
α − 1
(Ti − Tf) + n2a(V α−1
f − V α−1
i )
(d) W =
nR
α − 1
(Ti − Tf)
"
1 −

Vf − nb
Vi − nb
α−1
#
Now, Prof. Saha had actually provided the exact expression of f(P,V ;n,a,b,α) to the students,
but could not remember it during evaluation. Still, he could determine that some or all of the
four answers above must be incorrect, based on general physical arguments alone.
Consider each of the four answers and give at least one reason for each of them showing why it is
wrong, or possibly correct. Note that you are not required to give a correct expression for W or a
detailed derivation for it in this question.
Solution:
(a) For adiabatic expansion, Tf < Ti, and Vf > Vi. Even though the ﬁrst term is positive
and the second term is negative, it is possible to have W > 0, which is true for adiabatic
expansion. Also, in the ideal gas limit (α → γ and a → 0), this gives the correct expression.
So this may be the correct expression.
(b) For adiabatic expansion, Tf < Ti and Vf > Vi. Therefore, in this case W < 0, which is
incorrect.Page 4 Code 65 Questions Last six digits of Roll No.:
(c) From Van der Waals equation, a/V has dimensions of energy. So aV α−1 cannot have
dimensions of energy, making this expression incorrect.
(d) Since Tf < Ti and Vf > Vi, here W < 0 making this incorrect.
3. Consider an electron (mass m, magnitude of charge e) moving initially around a nucleus of charge
2e in a circular orbit of radius 10−10 m. In this problem we use SI units throughout and neglect
all relativistic eﬀects.
(a) [2 marks] Obtain the expression for the frequency, f, of the electron in the circular orbit
(numerical value is not required).
Solution:
The centripetal force for the circular motion of the electron is provided by the Coulomb
attraction of the nucleus. Let r be the radius of the circular orbit, and v the speed of the
electron in this orbit, then
mv2
r
=
2e2
4πϵ0r2
(3.1)
f =
v
2πr
=

2
4πϵ0m
1/2
e
2πr3/2
(3.2)
From classical electrodynamics, we know that an accelerated electron radiates energy. The expres-
sion for the power P of this radiation is given by
P = Kϵw
0 ex
ay
cz
where a is the acceleration, c is the speed of light, ϵ0 is the permittivity of free space, and K is a
dimensionless constant.
(b) [2 marks] Obtain {w,x,y,z} using dimensional analysis.
Solution: w = −1,x = 2,y = 2,z = −3
Due to the loss of energy through radiation, the electron does not remain in the circular orbit,
and gradually spirals into the nucleus. Take the constant K to be 5.31 × 10−2.
(c) [5 marks] Let T be the time it takes for the electron to reach the nucleus. Calculate T if
the radius of the nucleus is 10−14 m.
Solution:
The total energy of an electron in the orbit is
E(r) = −
1
4πϵ0
e2
r
(3.3)
−Ė(r) = −
1
4πϵ0
e2ṙ
r2
(3.4)
the acceleration is
a =
v2
r
=
1
4πϵ0
2e2
mr2
(3.5)
We use Eq. (3.5) in the power radiated, which yields the energy loss rate
−Ė(r) = −K
1
(4πϵ0)2
4e6
ϵ0c3m2r4
(3.6)
Here negative sign indicates that the energy of the electron is decreasing. CombiningPage 5 Code 65 Questions
Eqs. (3.4) and (3.6)
r2
dr = −
K4e4
(4πϵ0)ϵ0c3m2
dt (3.7)
Integrating the equation
Z 10−14
10−10
r2
dr = −
K4e4
(4πϵ0)ϵ0c3m2
Z T
0
dt (3.8)
which yields
T ∼
10−30
48π
(4πϵ0)2 c3m2
Ke4
∼ 5.26 × 10−11
s. (3.9)
4. [12 marks] Three thin convex lenses L1, L2, and L3 with focal lengths f1, f2, and f3, respectively,
are arranged in order (L1 followed by L2, followed by L3 from left to right) with their principal
axes coincident. The distance d12 between L1 and L2, and the distance d23 between L2 and L3 are
such that d12 + d23 ≥ f1 + 4f2 + f3. If a parallel beam of light incident on L1 at a small angle to
the principal axis remains parallel to itself when leaving the system after passing through L2 and
L3, draw the appropriate ray diagram and determine d12 and d23 in terms of f1,f2, and f3.
Solution:
An incoming parallel beam falling on the thin lens L1 will converge to a certain point A on
the focal plane of L1. The point A serves as the point source for L2 whose image is formed
on the other side of L2 at a certain point B. The line AB must intersect the principal axis at
the pole O2 of L2. For a parallel beam to emerge from L3, B must lie in the focal plane of L3.
The necessary ray diagram is drawn below.
Since α ≈ 0, we make the approximations
AA1 = f1 tanα ≈ f1α
BB1 = f2 tanα ≈ f2α
From magniﬁcation formula for lens L2,
BB1
AA1
=
f3α
f1α
=
v2
−u2
=
d23 − f3
d12 − f1
=⇒
d12
f1
=
d23
f3
= k(say)
=⇒ d12 = kf1 and d23 = kf3Page 6 Code 65 Questions Last six digits of Roll No.:
From the lens equation for lens L2,
1
v2
−
1
u2
=
1
f2
1
(d23 − f3)
−
1
−(d12 − f1)
=
1
f2
1
f3(k − 1)
+
1
f1(k − 1)
=
1
f2
=⇒ k = 1 +
f2
f1
+
f2
f3
Then,
d12 = f1 + f2 +
f1f2
f3
d23 = f2 + f3 +
f2f3
f1
5. Two friends, Amina (A) and Beena (B), are sitting at diametrically opposite points of a merry-
go-round (taken as a circular disk in the horizontal plane) of radius R that is rotating at constant
angular speed ω in the anticlockwise direction, when viewed from the top (see ﬁgure below).
When Amina is at the position A (as shown in the ﬁgure),
she throws a ball with velocity ⃗ u (relative to the merry-
go-round) in such a manner that Beena catches it when
she reaches the position C (∠BAC = α). Here ⃗ u makes
an angle θ with respect to the horizontal, and ϕ is the
angle made by the horizontal projection of ⃗ u with respect
to the line AB. Neglect air resistance, friction, and the
eﬀect of throwing or catching the ball on the speed of
the merry-go-round.
O
A B
C
D
R
ω
α
90◦
Top view
(a) [6 marks] Determine u, θ and ϕ, in terms of R, ω, α, and other relevant quantities.
Solution:
Point of throwing: A; Point of catching: C
Position of C at instant of projection: B
We take the point A as the origin and the x-axis along the diameter AB. The y-axis is in
the horizontal plane, perpendicular to AB. The z-axis is taken along vertical direction.
x
y
O
A
B
C
R
R
P
u
ω
ϕ α β A y
x
z
u
ϕ
θ
Given, ω = angular speed of rotation; ⃗ u = velocity of throwingPage 7 Code 65 Questions
θ = Projection angle with respect to horizontal
ϕ = Projection angle with respect to diameter AB (x-axis)
α = ∠BAC =⇒ β = ∠BOC = 2α
Time of ﬂight = time taken for B to reach C = T =
Rβ
vs
=
Rβ
Rω
=
2α
ω
Equations of motion along three directions:
x : ux · T = AP
=⇒ (ucosθcosϕ) ·
2α
ω
= R + Rcosβ = R(1 + cos2α) = 2Rcos2
α
=⇒ ucosθcosϕ =
Rω
α
cos2
α (5.1)
y : (uy − Rω) · T = CP
=⇒ (ucosθsinϕ − Rω) ·
2α
ω
= Rsinβ = 2Rsinαcosα
=⇒ ucosθsinϕ =
Rω
α
sinαcosα + Rω =
Rω
α
[sinαcosα + α] (5.2)
z : uz · T −
1
2
gT2
= 0
=⇒ usinθ =
gT
2
=
gα
ω
(5.3)
Dividing eq. (5.2) by eq. (5.1),
tanϕ =
sinαcosα + α
cos2 α
= tanα + αsec2
α
=⇒ ϕ = tan−1
(tanα + αsec2
α) (5.4)
Squaring eqs. (5.1), (5.2), (5.3) and adding,
u2
cos2
θ + u2
sin2
θ =

Rω
α
2 
cos4
α + sin2
αcos2
α + α2
+ 2αsinαcosα

+
gα
ω
2
=⇒ u2
=

Rω
α
2 
cos2
α + 2αsinαcosα + α2

+
gα
ω
2
(5.5)
=⇒ u =
"
gα
ω
2
+

Rω
α
2 
cos2
α + 2αsinαcosα + α2

#1/2
(5.6)
From (5.3) and (5.6),
θ = sin−1

gα
ω
"
gα
ω
2
+

Rω
α
2 
cos2
α + 2αsinαcosα + α2

#−1/2

 (5.7)
(b) [3 marks] If Amina throws the ball with ϕ = 60°, and appropriate values of θ and u such
that Beena can catch it, what is the magnitude of the displacement, s, of the ball when it is
caught by Beena? For this part only, take R = 1.5m, and it is enough to state your answer
within a range of 0.5m.
Solution:
The displacement of the ball is the length of AC = s = 2Rcosα.
Thus we need to determine α when ϕ = 60°. Equation (5.4) can be used for this. Note
that values of θ and u are not needed.
Putting ϕ = 60° in equation (5.4), we have
f(α) = tanα + αsec2
α = tan60° =
√
3
This equation cannot be solved analytically. We use trial values of α to ﬁnd the solutionPage 8 Code 65 Questions Last six digits of Roll No.:
by interpolation.
f(π/6) =
1
√
3
+
π
6

2
√
3
2
= 1.275 <
√
3
f(π/4) = 1 +
π
4
(
√
2)2
= 2.571 >
√
3
Thus
π
6
< α <
π
4
=⇒
√
3
2
> cosα >
1
√
2
=⇒ 2R
√
3
2
> 2Rcosα > 2R
1
√
2
=⇒
√
3R > s >
√
2R
Putting R = 1.5m,
2.1metre < s < 2.6metre
Any answer that encloses the actual value of 2.4m and has a range ≤ 0.5m is acceptable.
(c) [0.5 marks] Determine the speed of throwing uD if Beena catches the ball at the point D
(∠BOD = 90◦), instead of C.
Solution:
This is a special case of the above, where α =
π
4
. Using the above results,
uD =
"
gπ
4ω
2
+

4Rω
π
2 
1
2
+
π
4
+
π2
16
#1/2
(5.8)
(d) [3 marks] What should be the angular speed ωm of the merry-go-round for which the speed
of throwing uD will be minimum for Beena to catch the ball at the position D? What is this
minimum speed of throwing um?
Solution:
This can be determined by ﬁnding the minimum of uD, or equivalently, u2
D. From (5.8),
u2
D =
gπ
4ω
2
+

4Rω
π
2 
1
2
+
π
4
+
π2
16

∴
d(u2
D)
dω ωm
= 0 =⇒ −
(gπ)2
8ω3
m
+
32R2ωm
π2

1
2
+
π
4
+
π2
16

= 0
=⇒ ω4
m =
g2π4
256R2

1
2
+
π
4
+
π2
16

=⇒ ωm =
π
4

1
2
+
π
4
+
π2
16
−1/4 r
g
R
Also,
d2(u2
D)
dω2
ωm
=
3(gπ)2
8ω4
m
+
32R2
π2

1
2
+
π
4
+
π2
16

> 0.
implying u2
D is minimum at ω = ωm.
∴ u2
m = gR

1
2
+
π
4
+
π2
16
1/2
+ gR

1
2
+
π
4
+
π2
16
1/2Page 9 Code 65 Questions
=⇒ um =

1
2
+
π
4
+
π2
16
1/4 p
2gR
Alternative solution without calculus
Observe that
u2
D =
λ
ω2
+ µω2
where λ =
gπ
4
2
> 0, µ =

4R
π
2 
1
2
+
π
4
+
π2
16

> 0.
We can write
u2
D =
√
λ
ω
− ω
√
µ
!2
+ 2
p
λµ.
The ﬁrst term can be made zero by the choice of
ω = ωm =

λ
µ
1/4
leading to the minimum value of u2
D as u2
m = 2
√
λµ. Upon substituting the values of λ
and µ the desired expressions are obtained.
(e) [2.5 marks] Consider the case when Amina throws the ball when she is at A, and catches it
herself when she reaches the point B (Beena is not involved in this case). Take the angular
speed of the merry-go-round to be ω =
p
g/R. Find u, θ and ϕ in this case.
Solution:
This case is NOT a special case of the above.
Now T =
τ
2
=
π
ω
.
Further, ω =
p
g/R.
The equations of motion are:
x : ux · T = AB =⇒ (ucosθcosϕ) ·
π
ω
= 2R =⇒ ucosθcosϕ =
2Rω
π
=
2
π
p
gR
(5.9)
y : (uy − Rω) · T = 0 =⇒ ucosθsinϕ = Rω =
p
gR (5.10)
z : uzT −
1
2
gT2
= 0 =⇒ usinθ =
gT
2
=
πg
2ω
=
π
2
p
gR (5.11)
Dividing eq. (5.10) by eq. (5.9),
tanϕ =
π
2
=⇒ ϕ = tan−1 π
2
= 57.52◦
Squaring eqs. (5.10) and (5.9), and adding,
u2
cos2
θ = gR

4
π2
+ 1

=⇒ u =
p
gR

π2
4
+
4
π2
+ 1
1/2
= 1.97
p
gR (5.12)
Using eqs. (5.11) and (5.12),
sinθ =
π
2

π2
4
+
4
π2
+ 1
−1/2
=⇒ θ = sin−1
(0.80) = 52.96◦
**** END OF THE QUESTION PAPER ****Page 10 Code 65 Questions Last six digits of Roll No.:
Space for rough work — will NOT be submitted for evaluation
