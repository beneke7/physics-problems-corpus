---
id: solution-document-apho-2021-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2021/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2021-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2021/T1_S.pdf."
---

Solution
Water Hammer
Part A. Excess Pressure and Propagation of Pressure wave
A.1 (1.6 pt) Excess pressure and speed of propagation of the pressure wave
When the valve opening is suddenly blocked, fluid pressure at the valve jumps
from 𝑃0 to 𝑃1 = 𝑃0 + ∆𝑃s, thus sending a pressure wave traveling upstream (to the
left) with speed 𝑐 and amplitude ∆𝑃s. Taking positive 𝑥 direction as pointing to
the right, the velocity of fluid particles next to the valve changes from 𝑣0 to 𝑣1
(𝑣1 ≤ 0). Thus the velocity change is ∆𝑣 = 𝑣1 − 𝑣0.
In a frame moving to left (along –𝑥 direction) with speed 𝑐, i.e., riding on the
wave (see Fig. S1), velocity of fluid in the pressure wave is 𝑐 + 𝑣1, while that of the
incoming fluid in the steady flow ahead of the wave is 𝑐 + 𝑣0. Let 𝜌1 be the density
of fluid in the pressure wave. From conservation of mass, i.e., equation of continuity,
we have
𝜌0(𝑐 + 𝑣0) = 𝜌1(𝑐 + 𝑣1) (a1)
or, by letting ∆𝜌 ≡ 𝜌1 − 𝜌0,
∆𝜌
𝜌1
= 1 −
𝜌0
𝜌1
=
𝑣0 − 𝑣1
𝑐 + 𝑣0
=
−∆𝑣
𝑐 + 𝑣0
(a2)
Moreover, impulse imparted to the fluid must equal its momentum change. Thus, in
a short time interval 𝜏 after the valve is closed, we must have
𝜌0(𝑐 + 𝑣0)𝜏[(𝑐 + 𝑣1) − (𝑐 + 𝑣0)] = −𝜏∆𝑃 = (𝑃0 − 𝑃1)𝜏 (a3)
or
∆𝑃s = −𝜌0𝑐(1 +
𝑣0
𝑐
)(𝑣1 − 𝑣0) = −𝜌0𝑐(1 +
𝑣0
𝑐
)∆𝑣 ⇒ 𝛼 = −(1 +
𝑣0
𝑐
) (a4)
If 𝑣0/𝑐 ≪ 1, we have
∆𝑃s = −𝜌0𝑐∆𝑣 (a5)
Note that the negative sign in Eqs. (a4) and (a5) follows from the fact that the
direction of propagation is opposite to the positive direction for 𝑥 axis (and velocity).
Otherwise the sign should be positive. Note also that for a compressional wave
Fig. S1. Pressure wave (shaded) with speed 𝑐
T
𝑣0
𝜌0
𝑐
𝑃0
B
A
𝑃a
𝑥
𝑣1
𝜌1 𝑃1
wave(∆𝑃s > 0), the velocity imparted to the fluid particle is in the direction of propagation,
while for an extensional wave (∆𝑃s < 0), the velocity imparted is in the opposite
direction of propagation.
Eqs. (a2) and (a4) can be combined to give
∆𝑃s = 𝜌0𝑐2
(1 +
𝑣0
𝑐
)
2 ∆𝜌
𝜌1
(a6)
From the definition of the bulk modulus 𝐵, which is assumed to be constant, it
follows
∆𝑃s = 𝐵
𝑉0 − 𝑉1
𝑉0
= 𝐵
1/𝜌0 − 1/𝜌1
1/𝜌0
= 𝐵
∆𝜌
𝜌1
(a7)
From Eqs. (a6) and (a7), we obtain
𝜌0𝑐2
(1 +
𝑣0
𝑐
)
2
= 𝐵 (a8)
Thus
𝑐 = √
𝐵
𝜌0
− 𝑣0 ⇒ 𝛾 = 1 𝛽 = −𝑣0 (a9)
However, if in the definition of bulk modulus one uses the fractional change of
density ∆𝜌/𝜌0 instead of −∆𝑉/𝑉0, the result is then 𝛾 = 1 + ∆𝑃s/𝐵.* Either result
is considered valid.
If 𝑣0/𝑐 ≪ 1, we have
𝑐 = √
𝐵
𝜌0
(a10)
*The result (a7) is pointed out by Dr. Jaan Kalda.
A.2 (0.6 pt) Values of 𝑐 and ∆𝑃s for water flow
Ans:
From Eqs. (a5) and (a10), we have
𝑐 = √𝐵/𝜌0
Δ𝑃s = 𝜌0𝑐𝑣0 = 𝑣0√𝜌0𝐵
Putting in the given values 𝑣0 = 4.0 m/s, 𝑣1 = 0, 𝜌0 = 1.0 × 103
kg/m3
,
and 𝐵 = 2.2 × 109
Pa, we have
𝑐 = √𝐵/𝜌0 = 1.5 × 103
m/s (b1)
Δ𝑃s = 𝑣0√𝜌0𝐵 = 5.9 MPa (b2)
so that Δ𝑃s is nearly 59 times the standard pressure.
Note that 𝑣0/𝑐~10−3
so that the use of approximate formulas (a5) and (a10) is
justified when solving tasks in this problem.Part B. A Model for the Flow-Control Valve
(B.1) (1.0 pt) Excess pressure at valve inlet
Ans:
The model assumes the fluid to be incompressible. Neglecting effects of gravity,
Bernoulli’s principle gives us
1
2
𝜌0𝑣in
2
+ 𝑃in =
1
2
𝜌0𝑣c
2
+ 𝑃a (c1)
Equation of continuity and definition of contraction coefficient imply that
𝜋𝑅2
𝑣in = 𝜋𝑟c
2
𝑣c = 𝜋𝑟2
𝐶c𝑣c
Therefore
𝑣c =
1
𝐶c
(
𝑅
𝑟
)
2
𝑣in (c2)
From Eqs. (c1) and (c2), we obtain
∆𝑃in = 𝑃in − 𝑃a =
1
2
𝜌0𝑣in
2
[
1
𝐶c
2
(
𝑅
𝑟
)
4
− 1] =
𝑘
2
𝜌0𝑣in
2
(c3)
This may be cast into a form involving only dimensionless variables:
∆𝑃in
𝜌0𝑐2
=
1
2
(
𝑣in
𝑐
)
2
[
1
𝐶c
2
(
𝑅
𝑟
)
4
− 1] =
𝑘
2
(
𝑣in
𝑐
)
2
(c4)
where
𝑘 = [
1
𝐶c
2
(
𝑅
𝑟
)
4
− 1] (c5)
Thus we see from eq. (c4) that ∆𝑃in is a quadratic function of 𝑣in.
Part C. Water-Hammer Effect due to Fast Closure of Flow-Control Valve
(C.1) (0.6 pt) Pressure 𝑃0 and velocity 𝑣0 when the valve is fully open
Ans:
According to Bernoulli’s theorem and the definition of 𝑃ℎ, we have
Fig. 2. Valve dimensions and contraction of jet.
𝑣c
𝑣in
2𝑅 2𝑟
𝛽
A Δ𝐿
𝑃a
2𝑟c = 2𝑟√𝐶c
𝜌0
𝑃in1
2
𝜌0𝑣0
2
+ 𝑃0 =
1
2
𝜌0𝑣c
2
+ 𝑃a = 0 + 𝑃a + 𝜌0𝑔ℎ = 𝑃ℎ (d1)
From the second equality in the preceding equation, it follows
𝑣c = √2𝑔ℎ
Furthermore, from continuity equation and 𝐶c(𝑟 = 𝑅) = 1.0, we have
𝜋𝑅2
𝑣0 = 𝜋(𝐶c𝑅)2
𝑣c = 𝜋𝑅2
𝑣c ⇒ 𝑣0 = 𝑣c = √2𝑔ℎ (d2)
Therefore
𝑃0 = 𝑃a = 𝑃ℎ − 𝜌0𝑔ℎ (d3)
(C.2) (1.2 pt) Pressure 𝑃(𝑡) and flow velocity 𝑣(𝑡) just before 𝑡 =
𝜏
2
=
𝐿
𝑐
and 𝑡 = 𝜏
Ans:
When the valve is open, the flow in the pipe is steady with velocity 𝑣0 and
pressure 𝑃0. The sudden closure of the valve causes an excess pressure Δ𝑃𝑠 on the
fluid element next to the valve, causing it to stop with velocity 𝑣1 = 0. The velocity
change is thus ∆𝑣 = 𝑣1 − 𝑣0 = −𝑣0. Thus, according to Eq. (a5), the excess pressure
on the fluid is given by
𝛥𝑃s = −𝜌0𝑐∆𝑣 = 𝜌0𝑐𝑣0 (e1)
At time 𝑡 = 𝜏/2 = 𝐿/𝑐, the pressure wave reaches the reservoir. The velocity of
fluid in the length of the pipe has all changed to 𝑣(𝜏/2) = 𝑣1 = 𝑣0 + ∆𝑣 = 0 and
the fluid pressure is 𝑃(𝜏/2) = 𝑃1 = 𝑃0 + Δ𝑃s = 𝑃0 + 𝜌0𝑐𝑣0.
At the reservoir end of the pipe, fluid pressure reduces to the constant
hydrostatic pressure 𝑃ℎ = 𝑃0 + 𝜌0𝑔ℎ. Equivalently, we may say that the reservoir
acts as a free end for the pressure wave and, in reducing its excess pressure to 𝑃ℎ,
causes a compression wave to be reflected as an expansion wave. Relative to the
hydrostatic pressure 𝑃ℎ, the amplitude of the incoming pressure wave is ∆𝑃1r =
𝑃1 − 𝑃ℎ, hence the reflected expansion wave will have an amplitude ∆𝑃1
′
= −∆𝑃1r
and we have
∆𝑃1
′
= −∆𝑃1r = 𝑃ℎ − 𝑃1 = (𝑃0 + 𝜌0𝑔ℎ) − (𝑃0 + 𝜌0𝑐𝑣0) = −𝜌0𝑐(𝑣0 − 𝑔ℎ/𝑐) (e2)
(Here we allow the pressure amplitude to have both signs with negative amplitude
signifying an expansion wave.) This will cause the fluid at the reservoir end of the
pipe to suffer a velocity change (keeping in mind that the direction of propagation is
now the same as the +𝑥 axis)
∆𝑣1r = +∆𝑃1
′
/(𝜌0𝑐) = −(𝑣0 − 𝑔ℎ/𝑐)
Consequently, its velocity changes to
𝑣1r = 𝑣1 + ∆𝑣1r = 0 − (𝑣0 −
𝑔ℎ
𝑐
) (e3)
Ahead of the front of the reflected wave, conditions are unchanged and the particle
velocity is still 𝑣1 = 0 and the fluid pressure is still 𝑃1 = 𝑃0 + Δ𝑃s, but behind the
wave front the particle velocity now becomes 𝑣1r = −(𝑣0 − 𝑔ℎ/𝑐) and the
pressure becomes𝑃1 + ∆𝑃1
′
= (𝑃0 + 𝜌0𝑐𝑣0) − 𝜌0𝑐(𝑣0 −
𝑔ℎ
𝑐
) = 𝑃0 + 𝜌0𝑔ℎ (e4)
Therefore, just moment before 𝑡 = 𝜏 = 2𝐿/𝑐 when the front of the reflected wave
reaches the valve, the fluid in the whole length of the pipe will be under the
pressure 𝑃(𝜏) = 𝑃0 + 𝜌0𝑔ℎ = 𝑃ℎ as given in Eq. (e4) , and all fluid particles in the
pipe will move, as given in Eq. (e3), with velocity 𝑣(𝜏) = 𝑣1r = −𝑣0 + 𝑔ℎ/𝑐, i.e., the
fluid in the pipe is expanding and flowing toward the reservoir.
Part D. Water-Hammer Effect due to Slow Closure of Flow-Control Valve
(D.1) (3.0 pt) Recursion relations for Δ𝑃𝑛 and 𝑣𝑛
Ans:
Enforcing the approximation 𝑃ℎ = 𝑃0 + 𝜌0𝑔ℎ ≈ 𝑃0 is equivalent to putting
ℎ = 0 in all of the results obtained in task (e).
(1) Partial closing 𝑛 = 1
At the valve, immediately after partial closing 𝑛 = 1, fluid pressure jumps
from 𝑃0 to 𝑃1, causing flow velocity to change from 𝑣0 to 𝑣1. The pressure and
velocity changes are related by Eq. (a5):
1
𝜌0𝑐
(𝑃1 − 𝑃0) = −(𝑣1 − 𝑣0) (f1)
Just before reflection by the reservoir, the fluid in the entire pipe has pressure 𝑃1
and velocity 𝑣1. After reflection by the reservoir, i.e., a free end, and before the start
of valve closure 𝑛 = 2, the fluid in the entire pipe has pressure (Eq. (e4) with ℎ = 0)
𝑃1 − (𝑃1 − 𝑃0) = 𝑃0
and velocity
𝑣1
′
= 𝑣1 +
−(𝑃1 − 𝑃0)
𝜌0𝑐
= 𝑣1 + (𝑣1 − 𝑣0)
(2) Partial closing 𝑛 = 2
Immediately after partial closing 𝑛 = 2, valve pressure changes from 𝑃0 to 𝑃2,
causing flow velocity to change from 𝑣1
′
to 𝑣2. The pressure and velocity changes are
given by Eq. (a5):
1
𝜌0𝑐
(𝑃2 − 𝑃0) = −(𝑣2 − 𝑣1
′) = −𝑣2 + 𝑣1 + (𝑣1 − 𝑣0) (f2)
Using Eq. (f1), we may rewrite the preceding equation as
1
𝜌0𝑐
(𝑃2 − 𝑃0) = −(𝑣2 − 𝑣1) −
1
𝜌0𝑐
(𝑃1 − 𝑃0) (f3)
Just before reflection by the reservoir, the fluid in the entire pipe has pressure 𝑃2
and velocity 𝑣2. After reflection by the reservoir and before valve closure 𝑛 = 3, the
fluid in the entire pipe has pressure
𝑃2 − (𝑃2 − 𝑃0) = 𝑃0
and velocity
𝑣2
′
= 𝑣2 + (𝑣2 − 𝑣1
′)(3) Partial closing 𝑛 = 3
Immediately after partial closing 𝑛 = 3, valve pressure changes from 𝑃0 to 𝑃3,
causing flow velocity to change from 𝑣2
′
to 𝑣3. The pressure and velocity changes are
given by Eq. (a5):
1
𝜌0𝑐
(𝑃3 − 𝑃0) = −(𝑣3 − 𝑣2
′) = −𝑣3 + 𝑣2 + (𝑣2 − 𝑣1
′) (f4)
Using Eq. (f2), we may rewrite the preceding equation as
1
𝜌0𝑐
(𝑃3 − 𝑃0) = −(𝑣3 − 𝑣2) −
1
𝜌0𝑐
(𝑃2 − 𝑃0) (f5)
Just before reflection by the reservoir, the fluid in the entire pipe has pressure 𝑃3
and velocity 𝑣3. After reflection by the reservoir and before valve closure 𝑛 = 4, the
fluid in the entire pipe has pressure
𝑃3 − (𝑃3 − 𝑃0) = 𝑃0
and velocity
𝑣3
′
= 𝑣3 + (𝑣3 − 𝑣2
′)
(4) Partial closing 𝑛 = 4
When the valve is fully shut at valve closing 𝑛 = 4, the valve becomes a fixed
end, so the fluid velocity at the valve changes from 𝑣3
′
to 𝑣4 = 0. The pressure
𝑃4 at the valve is then given by Eq. (a5):
1
𝜌0𝑐
(𝑃4 − 𝑃0) = −(𝑣4 − 𝑣3
′) = −𝑣4 + 𝑣3 −
1
𝜌0𝑐
(𝑃3 − 𝑃0) (f6)
Finally, if we take note of the fact that ∆𝑃0 = 0 and 𝑣4 = 0, then all equations
obtained above relating excess pressures and velocity changes after valve closings all
have the same form:
∆𝑃𝑛
𝜌0𝑐
= −(𝑣𝑛 − 𝑣𝑛−1) −
∆𝑃𝑛−1
𝜌0𝑐
(𝑛 = 1,2,3,4) (f7)
To solve for Δ𝑃𝑛 = 𝑃𝑛 − 𝑃0, we note that, from Eqs. (c3) and (c5), we have
another relation between Δ𝑃𝑛 and 𝑣𝑛:
∆𝑃𝑛 =
1
2
𝑘𝑛𝜌0𝑣𝑛
2
(𝑛 = 1,2,3) (f8)
where 𝐶𝑛 represents 𝐶c for 𝑟 = 𝑟𝑛 and
𝑘𝑛 = [
1
𝐶𝑛
2
(
𝑅
𝑟𝑛
)
4
− 1] (𝑛 = 1,2,3) (f9)
Combining Eqs. (f7) and (f8), we have a quadratic equation for 𝑣𝑛:
1
2
𝑘𝑛 (
𝑣𝑛
𝑐
)
2
+
𝑣𝑛
𝑐
+ (
∆𝑃𝑛−1
𝜌0𝑐2
−
𝑣𝑛−1
𝑐
) = 0 (𝑛 = 1,2,3) (f10)
which can be solved readily using the formula
𝑣𝑛
𝑐
=
−1 + √1 + 2𝑘𝑛 (
𝑣𝑛−1
𝑐
−
∆𝑃𝑛−1
𝜌𝑐2 )
𝑘𝑛
(𝑛 = 1,2,3) (f11)
If both ∆𝑃𝑛−1/(𝜌𝑐2
) and (𝑣𝑛−1/𝑐) are known, Eq. (f11) may be used to
compute 𝑣𝑛/𝑐 and then find ∆𝑃𝑛/(𝜌𝑐2
) by using Eq. (f8). Therefore, Eq. (f7) maybe solved iteratively starting with 𝑛 = 1 until 𝑛 = 3. For 𝑛 = 4, we know 𝑣𝑛 = 0, so
Eq. (f7) may be used directly to find ∆𝑃𝑛.
Note that, from Eq. (f8), ∆𝑃𝑛−1 is a quadratic function of 𝑣𝑛−1, so that if 𝑣𝑛−1
is known, then 𝑣𝑛 may be computed using Eq. (f11) and then ∆𝑃𝑛 may again be
computed using Eq. (f8).
(D.2) (2.0 pt) Estimating Δ𝑃𝑛 and 𝜌0𝑐𝑣𝑛 by graphical method
Ans:
To solve Eqs. (f7) and (f8) using graphical method, we rewrite them as follows:
∆𝑃𝑛 = −(𝜌0𝑐𝑣𝑛 − 𝜌0𝑐𝑣𝑛−1) − ∆𝑃𝑛−1 (𝑛 = 1,2,3,4) (g1)
∆𝑃𝑛 =
𝑘𝑗
2𝜌0𝑐2
(𝜌0𝑐𝑣𝑛)2
(𝑛 = 1,2,3,4) (g2)
In a plot of ∆𝑃 vs. 𝜌0𝑐𝑣, Eq. (g1) and Eq. (g2) correspond to a line passing through
the point (𝜌0𝑐𝑣𝑛−1,−∆𝑃𝑛−1) with slope −1 and a parabola passing through the
origin, respectively. Thus one may readily obtain the solutions for each step of valve
closing by locating their points of intersection, starting with 𝑛 = 1. The result is
shown in the following graph.
-2
-1.5
-1
-0.5
0
0.5
1
1.5
2
0 0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7
P/MPa
cv/MPa
P-cv at valve
n=3, r/R=0.2 n=2, r/R=0.3 n=1, r/R=0.4
𝑛 = 1
𝑛 = 2 𝑛 = 3
𝑛 = 4
𝜌0𝑐𝑣1,−∆𝑃1
𝜌0𝑐𝑣2,−∆𝑃2 𝜌0𝑐𝑣3,−∆𝑃3
0,∆𝑃4
Excess Pressures and particle velocities at the valve for slow closing
𝑛 𝑟𝑛/𝑅 𝐶𝑛 𝑘𝑛 𝑣𝑛/(m/s) 𝜌0𝑐𝑣𝑛/MPa ∆𝑃𝑛/(MPa) ∆𝑃𝑛/(𝜌0c𝑣0)
0 1.00 1.00 0.0 4.0 6.0 0.0 0.0
1 0.40 0.631 97.1 3.6 5.8 0.62 10 %
2 0.30 0.622 318. 2.5 3.8 1.0 17 %
3 0.20 0.616 1646. 1.1 1.7 1.1 18 %𝜌0𝑐 = 1.50 × 106
kg m−2
s−1
𝑣0 = 4.0 m/s
4 0.00 0.0 0.0 0.64 11 %-----------------------------------------------------------------------------------------------------------
Appendix
(The following table and graph are for reference only, not part of the task.)
For 𝑣0 = 4.0 m/s, 𝑐 = 1.5 × 103
m/s, and 𝜌 = 1.0 × 103
kg/m3
, the results
for 𝑣𝑛 and Δ𝑃𝑛 are shown in the following table and graph. They are computed
according to equations given in task (f). Note that for a sudden full closure of the
valve, we have Δ𝑃sudden = 𝜌c𝑣0 = 6.0 MPa.
---------------------------------------------------------------------------------------------------
0
0.5
1
1.5
0 1 2 3 4 5
Pn /MPa
valve closing step n
Excess pressures at valve
Excess Pressures and particle velocities at the valve for slow closing
𝑛 𝑟𝑛/𝑅 𝐶𝑛 𝑘𝑛 𝑣𝑛/(m/s) 𝜌𝑐𝑣𝑛/MPa ∆𝑃𝑛/(MPa) ∆𝑃𝑛/(𝜌c𝑣0)
0 1.00 1.00 0.0 4.0 6.0 0.0 0.0
1 0.40 0.631 97.1 3.58 5.37 0.624 10 %
2 0.30 0.622 318. 2.50 3.75 0.997 17 %
3 0.20 0.616 1646. 1.13 1.695 1.06 18 %
4 0.00 0.0 0.0 0.643 11 %
