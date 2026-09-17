---
id: solution-document-inpho-2022-s
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2022_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [inpho-2022-a1, inpho-2022-a2, inpho-2022-a3, inpho-2022-a4, inpho-2022-a5]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/inpho/2022_S.pdf."
---

Indian Olympiad Qualiﬁer in Physics (IOQP) 2021-2022
conducted jointly by
Homi Bhabha Centre for Science Education (HBCSE-TIFR)
and
Indian Association of Physics Teachers (IAPT)
Part II: Indian National Physics Olympiad (INPhO)
Homi Bhabha Centre for Science Education (HBCSE-TIFR)
Date: 13 March 2022
Time: 10:30-12:30 (2 hours) Maximum Marks: 50
Instructions Roll No.:
1. This booklet consists of 12 pages and total of 5 questions. Write roll number at the top wherever
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
6. Please submit the Answer Booklet at the end of the examination. You may retain the
Question Paper.Page 2 Code 65 Questions Last six digits of Roll No.:
1. A block of mass m = 0.1kg is attached to a spring (one end ﬁxed to the wall) with spring constant
k = 50Nm−1. The block slides on a rough horizontal table along the x-axis. Assume that both
the coeﬃcients of kinetic (µk) and static friction (µs) are same and constant (µk = µs = µ = 0.25).
The block is initially displaced to x0 = 0.1m from the unstretched position (normal length of the
spring, x = 0) of the spring and released from rest as shown below. Neglect any air resistance.
Take the acceleration g due to gravity to be 10m/s2.
x0
unstretched position
(a) [3 marks] How many times (n) will the block cross the unstretched position before coming
to rest permanently?
Solution:
x0
unstretched position
x1
x2
x3
mẍ = −kx ± µmg (1.1)
where the ± sign is used so that the friction is opposite to the direction of the velocity
of the block. Lets deﬁne the ratio of the frictional force to the maximum restoring force
to be α i.e. α = µmg/kx0. During the ﬁrst half cycle of the motion, the loss of potential
energy is equal to the work done against friction
kx2
0
2
−
kx2
1
2
= µmg(x0 − x1) (1.2)
where x1 is the displacement after one half cycle. This gives
x1 = −x0 + 2αx0 (1.3)
x2 = −x1 − 2αx0 (1.4)
Thus
xj = −xj−1 − (−1)j
2αx0 (1.5)
xj = (−1)j
(1 − 2αj)x0 (1.6)Page 3 Code 65 Questions
The block will come to rest permanently at xn when
|xn| ≤ αx0 < |xn−1| (1.7)
1 − α
2α
≤ n <
1 + α
2α
(1.8)
For the given values of µ,m,k and x0, α = 0.05. Thus 9.5 ≤ n < 10.5. The block will
cross the unstretched position 9 times and then comes to the rest at the unstretched
position.
(b) [1 marks] Determine the total distance D covered by the block before coming to rest.
Solution: Total distance
D = x0 +
n−1 ∑
j=1
xj + xn (1.9)
= x0 +
n−1 ∑
j=1
(−1)j
(1 − 2αj)x0 + 0.1 (1.10)
= 2n(1 − αn)x0 + 0.1 = 1.00m (1.11)
(c) [6 marks] Let us divide one complete oscillation of the block, starting from a fully stretched
condition of the spring, into four distinct sections, requiring the following times in order:
(i) t1: time taken for the block to move from fully stretched to the unstretched position,
(ii) t2: time taken for the block to move from the unstretched position to fully compressed
position,
(iii) t3: time taken for the block to move from fully compressed to the unstretched position,
(iv) t4: time taken for the block to move from the unstretched position to fully stretched
position.
Let the distance covered during the above intervals be d1, d2, d3, and d4, respectively.
Also, let T1 and T2 be the time taken to complete the ﬁrst and the second oscillations,
respectively, starting from the initial displacement, x0.
Compare the above times and distances by inserting an appropriate sign (from among <, >,
or = only) between the given quantities in each of the boxes below. Note that you will be
penalised for 0.5 marks for giving each incorrect answer in this part. You need not to justify
your answer.
t1 t2 t2 t3 t1 t3
d1 d2 d2 d4 T1 T2
Solution:
t1 > t2 t2 < t3 t1 < t3
d1 > d2 d2 > d4 T1 = T2
(d) [2 marks] Qualitatively plot the displacement x from the unstretched position vs the time
t.Page 4 Code 65 Questions Last six digits of Roll No.:
Solution: Equations of motion are
mẍ = −kx + µmg (ẋ < 0) (1.12)
mẍ = −kx − µmg (ẋ > 0) (1.13)
The general solution to the above equation is simply the solution for the SHO and an
additive constant.
x = Acosωt + C (ẋ < 0) (1.14)
x = Acosωt − C (ẋ > 0) (1.15)
and velocity and the acceleration are
ẋ = −Aω sinωt (1.16)
ẍ = Aω2
cosωt (1.17)
Using the above equations in Eqs. (1.12) and (1.13)
x(t) = Acosωt + αx0 (ẋ < 0) (1.18)
x(t) = Acosωt − αx0 (ẋ > 0) (1.19)
For the given value of µ, α = 0.05. Every half swing exhibits simple harmonic motion.
Turning points are regularly spaced in time at every π/ω intervals. The initial position
at each turning point (or the end position of the previous half turn) determines the
amplitude and phase for the following half turn. During the time interval between the
turning point tj and tj+1
xj(t) = Aj cosωt − αx0(−1)j
(1.20)
Note, for the compression of the spring, ẋ < 0 and j = 1,3,5.... Comparing Eqs. (1.20)
and (1.6)
(−1)j
(1 − 2αj)x0 = Aj(−1)j
− αx0(−1)j
(1.21)
Aj = x0(1 − α(2j − 1)) (1.22)
To summarize the results, the motion of each half swing is essentially the motion of a
simple harmonic oscillator centered about either αx0 or −αx0. At each turning point
(t = jπ/ω), the amplitude of the oscillator decreases by 2αx0. Before j = n, given by the
Eq. (1.8), the mass moves according to
xj(t) = x0
[
{1 − α(2j − 1)}cosωt − (−1)j
α
]
(1.23)
The plot of x vs t for the given value of α is shown below. The displacement lies within
a pair of straight lines (shown by the dotted lines) with slopes ±2αx0/(π/ω).
0 0.2 0.4 0.6 0.8 1 1.2 1.4
−0.1
−5 · 10−2
0
5 · 10−2
0.1
t (s)
x (m)Page 5 Code 65 Questions
2. The ﬁrst explosion of an atomic bomb was the Trinity test in New Mexico in 1945. This explosion
released a very large amount of energy E which created an expanding ﬁreball (known as the Trinity
ﬁreball). A snapshot of this ﬁreball taken 0.025s after the explosion is shown in the photograph
below.
A scientist, Prof. Geoﬀrey Taylor, could make an estimate of the energy released by the bomb
from an analysis of such photographs. Here we try to follow in his footsteps, with some suitable
simpliﬁcations.
To begin, we assume that the ﬁreball is spherical in nature. Its radius (R) increases with time (t)
depending on the explosion energy E and the density ρ of the surrounding air (which is taken as
constant and uniform).
We are also given a graph of the data obtained by Prof. Taylor, as shown below. However, the
axes labels of the graph are missing.
16
32
64
128
0.00025 0.00125 0.00625 0.03125
Given data:
1 kiloton (kt) of TNT = 4.2 × 1012 J
Density ρ of air outside the ﬁreball =1.22kg/m3.
(a) [3 marks] What are the quantities represented by the axes of the graph? Also state the
respective units in which they are expressed. In the detailed answer sheet, justify your
answer.Page 6 Code 65 Questions Last six digits of Roll No.:
Solution: It is clear that this graph is on a log-log scale. Physical quantities which are
involved: E,R,ρ,V and time t. Here E and ρ are constant. Possible answers can be R
vs t, V vs t, or V vs R. We can get a relation between R and t and then verify from
the slope of the straight line. Also, from the time and length scale given in the explosion
picture tells us that at t = 25ms, R is in between 100-200m.
Thus, it is a R (m) vs t (s) plot on a log-log scale.
(b) [4 marks] Find the slope (s) of the best ﬁt line shown in the graph. What are the dimensions
of the quantity s?
Solution: We take two random points (x1,y1),(x2,y2) on the line passing through the
grid. Then the slope of the graph is
s =
log(y2) − log(y1)
log(x2) − log(x1)
(2.1)
=
log(32 × 20.6) − log(16 × 20.2)
log(0.00125 × 50.2) − log(0.00005 × 50.8)
(2.2)
= 0.43 (2.3)
The slope is dimensionless.
(c) [3 marks] From a dimensional analysis based on the above simpliﬁed model, make an esti-
mate of the energy E released (in kt of TNT) in the Trinity test.
Solution: Using the dimensional analysis, E can be expressed as [E] = ραtβRγ. Using
the dimensions of the quantities involved,
E =
R5ρ
t2
(2.4)
R = E
t2/5
ρ1/5
(2.5)
According to the above equation, a plot of R vs t on a log-log scale will have a slope of
0.4. This we have already found in the previous part.
From (x2,y2), E ≈ 26ktTNT.
The yield of the Trinity test was oﬃcially estimated as 21ktTNT.Page 7 Code 65 Questions
3. Consider an air ﬁlled spherical balloon comprised of elastic material of surface tension γ =
500kg/s2. The pressure outside the balloon is the atmospheric pressure (Patm = 101kPa) and the
density of air outside is ρatm = 1.22kg/m3.
The balloon starts deﬂating slowly. Assume that the average velocity of air inside the balloon is
negligible, and air leaves the balloon in a streamline fashion. Consider γ to be constant throughout,
and the air to be incompressible.
(a) [8 marks] Write an expression for the time t required to deﬂate the balloon through a small
opening of cross-sectional area A from an initial radius R0 to a ﬁnal radius R.
(b) [1 marks] Obtain the value of this time for A = 1×10−5 m2, R0 = 0.15m, and R = 0.05m.
Solution:
Pressure of air inside the balloon of radius r and given surface tension γ is
P = Patm +
4γ
r
(3.1)
A
v
1 2
R
Consider the schematic diagram of deﬂating the balloon. Just inside the balloon, at point (1),
gas can be treated stationary. Outside, at point (2), it can be treated ﬂowing out with speed
v. Then by Bernoulli’s equation
P1 = P2 +
ρv2
2
(3.2)
Outside pressure and density are Patm and ρatm respectively. Also, the inside pressure is given
by the Eq. (3.1). Thus
Patm +
4γ
r
= Patm +
ρatmv2
2
(3.3)
⇒ v =
√
8γ
ρatmr
(3.4)
Volume of air ﬂowing through hole of area A per sec at Patm is
dV
dt
= Av (3.5)
d
dt
(
4πr3
3
)
= Av (3.6)
4πr2 dr
dt
= Av (3.7)
We use Eq. (3.4) in the above equation, which yields
r5/2
dr =
A
4π
√
8γ
ρ
dt (3.8)
Integrating from R0 to R1
t =
4π
7A
√
ρatm
2γ
[
R
7/2
0 − R
7/2
1
]
(3.9)
(3.10)
In Eq. (3.1) if the extra pressure taken as 2γ/R then
t =
4π
7A
√
ρatm
γ
[
R
7/2
0 − R
7/2
1
]
(3.11)
For the given values, Eq. (3.9) gives t = 8.02s and Eq. (3.10) yields 11.22s. Both Eqs. (3.9)
and (3.10) and accordingly the calculated values are considered correct.Page 8 Code 65 Questions Last six digits of Roll No.:Page 9 Code 65 Questions
4. A student performed an experiment to determine the acceleration due to gravity (g) using a simple
pendulum which has a spherical bob of diameter d hung with a long string. She varied the length
of the string l, and measured the period of oscillation T every time. She calculated the value of g
from each measurement as shown in the table below.
She noticed that not only was the average value of g smaller than the expected value, each one of
the measurements had yielded a value smaller than the true value.
Next, she plotted a graph between T2 and l from the same data, and obtained the value of
g = 981cm/s2 from the slope of the best ﬁt line.
l (in cm) T (in s) g (in cm/s)
20 0.93 912
40 1.29 948
60 1.58 948
80 1.81 963
100 2.02 967
Average g 947
0 40 80 120
0
1
2
3
4
5
l (cm)
T 2 (s 2 )
Experimental data
Linear best ﬁt
(a) [3 marks] What do you think might be the main cause for the consistently low values of g
that she obtained from each of her measurements?
Solution: A low value of g from the formula g = 4π2l/T2 can result either from an
underestimation of l or an overestimation of T.
The latter can happen in case of either a fast-running clock (stopwatch) or a consistent
error in the measurement. We are told that the instruments were accurate and the
measurements were properly made. So this possibility is ruled out.
Under the given assumption that the measurements of l were accurate, the only way that
the value of l can be underestimated systematically is by ignoring the size of the bob of
the pendulum. Since the student recorded only the length of the string, and did not add
the radius of the bob, this caused an underestimation of l, and consequently, of g.
(b) [4 marks] Explain in detail why she still obtained a correct value of g from the slope of the
graph plotted from the same data.
Assume that the instruments of measuring time and length were accurate enough, and all the
measurements of the stated quantities were correct within the accuracy of the instruments. It is
veriﬁed that the graph and the linear best ﬁt were correctly plotted, and all numerical calculations
in the above are correct. Note that you are not expected to plot any graph (no graph paper is
provided to you).
Solution: When T2 is plotted against l, one should obtain a linear graph of the form
T2
= al + b
where, in the ideal case, l represents the distance of the centre of mass of the bob from the
suspension point, the slope a =
4π2
g
, and the intercept b = 0.Page 10 Code 65 Questions Last six digits of Roll No.:
If the size of the bob is not included in the measurement of l, one should still get a linear
graph, with same value of a, but now with b =
4π2r
g
, where r is the radius of the bob.
Careful inspection of the graph indeed shows a positive intercept on the T2-axis, conﬁrming
this scenario. However, since the slope of the line is unaﬀected by the underestimation of l,
the value of g is still correctly determined from the slope.
Note that an overestimation of T by ∆T, say, would have caused the slope of the graph, and
hence the derived g, to change since T2 would have been modiﬁed by a term proportional to
T itself.Page 11 Code 65 Questions
5. [12 marks] A circuit consists of an emf source and ﬁve resistors with unknown resistances. When
an ideal ammeter is connected between points 1 and 2, its reading is IA. If instead a resistor R
is connected to the same two points, the current through that resistor is IR. If instead an ideal
voltmeter is connected between points 1 and 2, its reading is V . Obtain V in terms of IA, R and
IR only.
R1 R3
R4 R2
R0
1
2
Solution:
R1
I1
R3 I1 − IM
R4
I2 + IM
R2
I2
R0
I1 + I2
ε
RM
IM
Resistances, currents and emf are shown in the diagram. Imagine also there is a resistance
RM between terminals 1 and 2. We can set later RM = 0 for an ideal ammeter and IM = 0
for an ideal voltmeter placed between two terminals. Applying Krichoﬀ’s law
ε = (I1 + I2)R0 + I1R1 + (I1 − IM)R3 = (R0 + R1 + R3)I1 + I2R0 − IMR3 (5.1)
= R013I1 + R0I2 − R3IM (5.2)
ε = (I1 + I2)R0 + I2R2 + (I2 + IM)R4 = (R0 + R2 + R4)I2 + I1R0 + IMR4 (5.3)
= R024I2 + R0I1 + R4IM (5.4)
Solving above equations
I1 =
εR24 + IM(R0R34 + R3R24)
R0R1234 + R13R24
and I2 =
εR13 − IM(R0R34 + R4R13)
R0R1234 + R13R24
(5.5)
Potential diﬀerence between terminal 1 and 2 is
V12 = I2R2 − I1R1 = εA − IMB (5.6)
where the coeﬃcients A and B depends only on resistances in the circuit. When an ideal
ammeter is placed between terminals V12 = 0 and IM = IA.
εA = IAB
When a resistance R is placed between terminals, IM = IR and V12 = IRR. This yields
IRR = εA − IRB = IAB − IRB ⇒ B =
IRR
IA − IR
(5.7)
When an ideal voltmeter is placed between terminals, IM = 0. Hence V12 = εA − 0 = IAB or
V12 =
IAIR
IA − IR
RPage 12 Code 65 Questions Last six digits of Roll No.:
**** END OF THE QUESTION PAPER ****
