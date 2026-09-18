---
id: kevin-zhou-e3-p008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e3-p008
solution_type: author
source_document: solution-document-kevin-zhou-e3sol
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E3Sol.pdf."
---

[4] Problem 8. [A] This problem is just for fun; the techniques used here are too advanced to appear on
Olympiads. We will prove Rayleigh’s monotonicity law, which states that increasing the resistance
of any part of a resistor network increases the equivalent resistance between any two points. This
may seem obvious, but it’s actually tricky to prove. The following is the slickest way.
(a) Consider a graph of resistors, where a battery is attached across two of the vertices, fixing
their voltages. Write an expression for the total power dissipated, assuming the voltages at
each vertex are Vi and the resistances are Rij.
(b) The voltages Vi at all the other vertices are determined by Kirchhoff’s rules. But suppose you
didn’t know that, or didn’t want to set up those equations. Remarkably, it turns out that
you can derive the exact same results by simply treating the voltages Vi as free to vary, and
setting them to minimize the total power dissipated! Show this result. (This is an example of
a variational principle, like the principle of least action in mechanics.)
(c) For any network of resistors, show that P = V 2/R when V is the battery voltage applied
across two vertices, R is the equivalent resistance between them, and P is the total power
dissipated in the resistors. (This is intuitive, but it’s worth showing in detail to assist with
the next part.)
(d) By combining all of these results, prove Rayleigh’s monotonicity law.
(e) We can use Rayleigh’s monotonicity law to prove some mathematical results. Consider the
resistor network shown below, where the variables label the resistances.
9
Kevin Zhou Physics Olympiad Handouts
a b
b a
P
Q
By considering the resistances before and after closing the switch PQ, show that the arithmetic
mean of two numbers is at least the geometric mean.
(f) Consider the resistor network shown below.
a1 a2 an
a2 a3 a1
an−1 an an−2
an a1 an−1
···
···
···
···
. . .
. . .
. . .
. . .
. . .
. . .
By closing all the switches, show that the arithmetic mean of n numbers is at least the
harmonic mean.
Solution. (a) The power is
P =
X
i<j
(Vi − Vj)2
Rij
.
Here the sum over i < j counts all pairs of vertices once. If there is no direct connection
between i and j, the resistance Rij is infinite.
(b) The power is minimized when its derivative is zero, and we are free to vary all voltages except
for the two points where the battery is connected. Let Vi be one of these voltages. Then
∂P
∂Vi
=
X
j̸=i
2(Vi − Vj)
Rij
= 0.
Now compare this to how we would solve the problem using Kirchhoff’s laws. The fact that
the sum of the voltage drops along a loop is zero is already accounted for, because we already
have specified the voltages at each vertex. The only new equations we would write down
would be charge conservation at each vertex,
X
j̸=i
Iij = 0.
However, applying Ohm’s law, we see this is precisely the equation that power minimization
has given us!
(c) By the definition of the equivalent resistance, V = IR where I is the total current going
through the circuit. By the definition of power, the power put in by the battery is P = IV ,
since any current going through the circuit must go through the battery. By conservation of
energy, the power dissipated in the circuit is equal to the power put in by the battery. So the
power dissipated is P = IV = V 2/R.
10
Kevin Zhou Physics Olympiad Handouts
(d) Put a battery of voltage V across the points we are considering. By part (c) Rayleigh’s
monotonicity law is equivalent to the statement that, if we increase any of the Rij, the total
power P dissipated in the resistor network goes down.
We can account for the effect of increasing one of the Rij in two steps. First, suppose we
do so while artificially keeping all the voltages Vi constant. Then by part (a), P decreases.
Second, in reality the voltages quickly rearrange themselves to satisfy Kirchhoff’s laws, which
we saw in part (b) is equivalent to minimizing the power. So this further rearrangement can
only further decrease P. This shows the desired result.
(e) Before closing the switch, the resistance is
Ri =
a + b
2
.
After closing the switch, the resistance is
Rf = 2

1
a
+
1
b
 −1
=
2ab
a + b
.
Closing the switch is equivalent to decreasing RPQ from infinity to zero, so Rf ≤ Ri by
Rayleigh’s monotonicity law. This gives
√
ab ≤
a + b
2
which is the AM-GM inequality.
(f) Before closing the switches,
Ri =
1
n
X
i
ai
which is the arithmetic mean. After closing the switches,
Rf = n
X
i
1
ai
!−1
which is the harmonic mean. Thus, the arithmetic mean is at least the harmonic mean.
Remark
You might think that Rayleigh’s monotonicity law is too obvious to require a proof; if you
decrease a resistance, how could the net resistance possibly go up? In fact, this kind of
non-monotonicity occurs very often! For example, Braess’s paradox is the fact that adding
more roads can slow down traffic, even when the total number of cars stays the same. A U.S.
Physics Team coach has argued that allowing more team strategies can make a basketball
team score less. For more on this subject, see the paper Paradoxical behaviour of mechanical
and electrical networks or this video.
11
Kevin Zhou Physics Olympiad Handouts
Remark
Circuit questions can get absurdly hard, but at some point they start being more about
mathematical tricks than physics. As a result, I haven’t included any such problems here;
they tend not to appear on the USAPhO or IPhO, or in college physics, or in real life, or really
anywhere besides a few competitions. On the other hand, you might find such questions fun!
For some examples, see the Physics Cup problems 2013.6, 2017.2, 2018.1, and 2019.4.
2 RC Circuits
Next we’ll briefly cover RC circuits, our first exposure to a situation genuinely changing in time.
Example 4: CPhO
The capacitors in the circuit shown below were initially neutral. Then, the circuit is allowed
to reach the steady state.
10Ω 2Ω
20V
30Ω
10V 18Ω 24V
20mF
20mF
10mF
After a long time, what is the charge stored on the 10mF capacitor?
Solution
After a long time, no current flows through the capacitors, so there is effectively a single loop
in the circuit. It has a total resistance 60Ω and a total emf 6V, so the current is I = 0.1A.
Using this, we can straightforwardly label the voltages everywhere on the outer loop.
10Ω 2Ω
20V
30Ω
10V 18Ω 24V
20mF
20mF
10mF
27V 26V 25.8V
7V
10V 0V 1.8V
12
Kevin Zhou Physics Olympiad Handouts
To finish the problem, we need to know the voltage V0 of the central node, so we need
one more equation. That equation is charge conservation. We note that the central part
of the circuit, containing the inner plates of the three capacitors, begins uncharged and is
not directly connected to anything else, so it must remain uncharged. (Charge can’t move
through a capacitor!) Suppressing units, this means
20(26 − V0) + 20(7 − V0) + 10(0 − V0) = 0, V0 =
66
5
V
from which we read off the answer,
Q = CV = 0.132C.
[3] Problem 9.   W 1 0USAPhO 1997, problem A3.
[3] Problem 10 (Purcell 4.18). Consider the two RC circuits below.
Q = Q0
C
Q = 0
C
R R
Q = Q0
C
Q = 0
C
R R
R
(a) The circuit shown below contains two identical capacitors and two identical resistors, with
initial charges as shown above at left. If the switch is closed at t = 0, find the charges on the
capacitors as functions of time.
(b) Now consider the same setup with an extra resistor, as shown above at right. Find the
maximum charge that the right capacitor achieves. (Hint: the methods of M4 can be useful.)
Solution. (a) Let the two loop currents be I1 and I2, both counterclockwise. The loop equations
are Q1/C = I1R and Q2/C = I2R. We also have Ik = −Q̇k. Thus, Qk + RCQ̇k = 0 for
k = 1,2. Based on the initial conditions, we see then that the solutions are Q1(t) = Q0e−t/RC
and Q2(t) = 0. (The simple reason Q2(t) is zero is because the middle wire effectively shorts
out the right half of the circuit.)
(b) Again, with the same setup of variables, we get that
Q1/C − 2I1R + I2R = 0
Q2/C − 2I2R + I1R = 0.
This is a system of two linear differential equations, which can be solved using the methods
of M4. However, in this case we can just add and subtract the equations, giving
(Q1 + Q2)/C − (I1 + I2)R = 0, (Q1 − Q2)/C − 3(I1 − I2)R = 0.
That is, the sum of the two acts like an RC circuit with time constant RC, while the difference
acts like one with time constant 3RC. (These are the “normal modes”.) By superposing these
solutions and fitting the initial conditions, we get
Q1(t) =
Q0
2
(e−t/RC
+ e−t/3RC
), Q2(t) =
Q0
2
(e−t/RC
− e−t/3RC
).
13
Kevin Zhou Physics Olympiad Handouts
We want to maximize |Q2|, so setting the derivative to zero gives t = 3
2RC log(3), so
|Q2|max =
Q0
3
√
3
.
[3] Problem 11.   W 1 0USAPhO 2004, problem A1.
[3] Problem 12 (Kalda). Three identical capacitors are placed in series and charged with a battery
of emf E. Once they are fully charged, the battery is removed, and simultaneously two resistors are
connected as shown.
C C C
R
R
Find the heat dissipated on each of the resistors after a long time.
Solution. Letting q0 = EC/3, the initial charges on the six plates are q0, −q0, q0, −q0, q0, and
−q0. After a long time, let the charges on the plates be q1,−q1,q2,−q2,q3,−q3. Note that all
currents are 0 now, so we may effectively ignore the resistors and treat the wires as zero resistance.
Therefore, the potential at points connected by wires is the same, so q1 = −q2 = q3. Also, by charge
conservation on the two disjoint pieces (q1,−q2,q3 and −q1,q2,−q3), we see
q1 − q2 + q3 = q0,
which implies |q1| = |q2| = |q3| = EC/9. The energy is
P 1
2Q2/C, so the charges dropping by a
factor of 3 means we lose 8/9 of the original total energy. Then by symmetry, each resistor dissipates
4/9 of the original total energy. This is
4
9
· 3 ·
(EC/3)2
2C
=
2
27
E2
C .
[2] Problem 13 (Kalda). Find the time constant of the RC circuit shown below.
E
R3
R2
R1
C
Solution. For the purposes of computing the time constant, it is equivalent to assume the capacitor
is already charged, then take out the battery and see how it discharges. Thus all that matters is
the resistance between the capacitor plates, which is
R = R1 +
R2R3
R2 + R3
=
R1R2 + R1R3 + R2R3
R2 + R3
,
so τ = C
R1R2 + R1R3 + R2R3
R2 + R3
.
14
Kevin Zhou Physics Olympiad Handouts
[3] Problem 14 (MPPP 175/176). A metal sphere of radius R has charge Q and hangs on an insulating
cord. It slowly loses charge because air has a conductivity σ. In all cases, neglect any magnetic or
radiation effects.
(a) Find the time t for the charge to halve.
(b) By dimensional analysis, t is independent of the radius R of the metal sphere. More generally,
show that t takes the same value if the metal has any shape.
(c) Some typical values of conductivity are
σ ∼

 
 
10−13 Ω−1m−1 air
10−2 Ω−1m−1 water
108 Ω−1m−1 copper
.
About how long does the charge on an object last, in each of these environments?
This problem generalizes USAPhO 2010, problem A2, which you can compare.
Solution. (a) We can analyze this as an RC circuit. (The circuit is completed by the “sphere at
infinity”.) The capacitance is the self-capacitance of the sphere,
C = 4πϵ0R.
The resistance is the resistance between the sphere and infinity. The air can be thought of as
a set of resistors in series, with each resistor being a spherical shell of air. Then
Req =
Z
dR =
1
σ
Z ∞
R
dr
4πr2
=
1
4πσR
.
This gives a time constant of
τ = RC =
ϵ0
σ
.
Therefore, the time is
t =
ϵ0
σ
log2.
(b) Dimensional analysis doesn’t work, because a general shape is described by many dimensionless
parameters. For example, if the shape was an ellipsoid, we would have to specify its eccentricity.
Instead we use the following more general argument. We note that
I =
I
J · dS, ΦE =
I
E · dS
over any surface completely enclosing the object. The right-hand sides are related by J = σE,
and Gauss’s law gives ΦE = Q/ϵ0. Combining these gives
Q̇ = −
σ
ϵ0
Q
so the charge decreases exponentially with timescale ϵ0/σ, completely independently of the
shape. (Of course, the sphere is still special, because with the sphere we are guaranteed there
are no magnetism or radiation effects (why?). For a general shape, we have to assume these
effects are negligible, which may or may not be true depending on the value of σ.)
15
Kevin Zhou Physics Olympiad Handouts
(c) The relevant timescale is ϵ0/σ. Thus we find t ∼ 102 s for air, t ∼ 10−9 s for water, and
t ∼ 10−19 s for copper. The last timescale is astoundingly small, and it implies that there is
approximately no charge density within a metal in just about any circumstance.
[5] Problem 15.   h 1 0IPhO 1993, problem 1. A really neat question with real-world relevance.
[5] Problem 16.   h 1 0IPhO 2007, problem “orange”. A combination of mechanics and RC circuits.
3 Computing Magnetic Fields
Idea 4
The Biot–Savart law is
B =
µ0I
4π
I
ds × r
r3
.
As a consequence, we have Ampere’s law,
I
B · ds = µ0I, ∇ × B = µ0J
as well as Gauss’s law for magnetism,
I
B · dS = 0, ∇ · B = 0.
Idea 5
The force on a stationary wire carrying current I in a magnetic field B is
F = I
Z
ds × B.
The energy of a magnetic field is
U =
1
2µ0
Z
B2
dV.
The magnetic dipole moment of a planar current loop of area A and current I is m = IA,
with m directed perpendicular to the loop by the right-hand rule.
Idea 6: Magnetic Dipoles
Far from a magnetic dipole with magnetic moment m, its magnetic field is just the same as
the electric field of an electric dipole,
B(r) =
µ0m
4πr3
(2cosθr̂ + sinθθ̂) =
µ0
4πr3
(3(m · r̂)r̂ − m).
As with the electric dipole field, you don’t need to memorize this, but you should remember
that it’s proportional to the dipole moment, falls off as 1/r3, and be able to sketch it.
16
Kevin Zhou Physics Olympiad Handouts
You should have already seen basic examples of using the Biot–Savart law in Halliday and Resnick,
such as the field of a circular ring of current on its axis. We’ll start with some problems that are
similarly straightforward, but more technically complex.
[3] Problem 17. This is a key question which will help you understand idea 7. A spherical shell with
radius R and uniform surface charge density σ spins with angular frequency ω about a diameter.
(a) Find the magnetic field at the sphere’s center.
(b) Find the magnetic dipole moment of the sphere.
(c) It can be shown that (1) the magnetic field inside the sphere is uniform, and (2) the magnetic
field outside the sphere is exactly that of a magnetic dipole. (It requires doing some obnoxious
integrals, as can be seen in section 5.4 of Griffiths.) Using this information, make a qualitatively
accurate sketch of the field.
(d) There is a closely related question in electrostatics: suppose we had two solid spheres of the
same radius R, with volume charge densities ±ρ, and the spheres were displaced by a tiny
distance d ≪ R. Qualitatively, what would the electric field of this setup look like, for r < R
and r > R? How does it differ from your answer to part (c)?
Solution. (a) First, we find the field due to a ring of counterclockwise current I with radius a in
the z = 0 plane at a point directly above the center at some height z. Using the Biot–Savart
law, we see that
B =
µ0I
4π
2πa a √
a2+z2
a2 + z2
ẑ =
µ0I
2
a2
(a2 + z2)3/2
ẑ.
Let us work in spherical coordinates with the axis of rotation being the z axis. Then, at angle
θ, we essentially have a ring of charge of radius a = Rsinθ, z = Rcosθ, and
dI = σR(dθ)ω(Rsinθ) = σR2
ω sinθdθ.
Therefore,
dB =
µ0σR2ω sinθdθ
2
R2 sin2
θ
R3
ẑ =
ẑ
2
µ0σωRsin3
θdθ.
Integrating from 0 to π to obtain the full field,
B =
ẑ
2
µ0σωR
Z π
0
sin3
θdθ =
2
3
µ0σωRẑ.
(b) The magnetic dipole moment of a slice is
dm = ẑπ(Rsinθ)2
ωσR2
sinθdθ.
Integrating this gives
m =
4
3
πωσR4
ẑ.
(c) The field is as shown below.
17
Kevin Zhou Physics Olympiad Handouts
The key feature is that the field lines of the dipole outside and the uniform field inside match
up perfectly, so that every field line forms a closed loop; this is Gauss’s law for magnetism.
(d) We’ve already seen this setup in E1. It’s easy to show by the shell theorem that the electric
field is uniform for r < R, and exactly an electric dipole field for r > R. The crucial difference
is that in the electric case, the uniform field inside points against the dipole moment, rather
than along it. As a result, the electric field switches directions upon crossing r = R. This
reflects the fact that ∇ × E = 0, so that the line integral of E along any closed path has to
vanish. If we follow a field line, this is only possible if the field switches direction. In addition,
compared to the magnetic case, the field lines don’t close up, because ∇ · E isn’t zero.
[2] Problem 18 (Purcell 6.12). A ring with radius R carries a current I. Show that the magnetic
field due to the ring, at a point in the plane of the ring, a distance r from the center, is given by
B =
µ0I
2π
Z π
0
(R − rcosθ)R dθ
(r2 + R2 − 2rRcosθ)3/2
.
In the r ≫ R limit, show that
B ≈
µ0
4π
m
r3
where m = IA is the magnetic dipole moment of the ring, as expected from idea 6.
Solution. Let the ring be centered at the origin, and let the field point be ax̂, and say we are at
an angle θ. Then, dl = (−Rsinθ)x̂ + (Rcosθ)ŷ, and
r = ax̂ − R(cosθx̂ + sinθŷ) = (a − Rcosθ)x̂ + (−Rsinθ)ŷ.
Note that r = |r| =
√
a2 + R2 − 2aRcosθ. Therefore, by the Biot–Savart law,
dB =
µ0I
4π
R(R − acosθ)ẑdθ
(a2 + R2 − 2aRcosθ)3/2
,
so integrating from 0 to 2π and noting that θ and −θ contribute the same, we arrive at the desired
result. Now, to take the r ≫ R limit cleanly and consistently, it’s best to nondimensionalize
everything. Defining x = R/r ≪ 1, we can pull dimensionful factors out of the integral to get
Bz =
µ0I
2π
rR
r3
Z π
0
x − cosθ
(1 + x2 − 2xcosθ)3/2
dθ.
18
Kevin Zhou Physics Olympiad Handouts
Now, it’s not immediately obvious to what order in x we should expand in. If we already know the
answer is proportional to 1/r3, then we can see the answer must be first order in x. But if we didn’t
know that, we could expand to zeroth order, giving
Bz =
µ0I
2π
R
r2
Z π
0
(−cosθ)dθ = 0.
The fact that the answer vanishes means we need to go to higher order to find the true answer. At
first order, applying the binomial theorem, the integrand is
(x − cosθ)(1 + x2
− 2xcosθ)−3/2
≈ (x − cosθ)(1 + 3xcosθ) ≈ −cosθ + x(1 − 3cos2
θ)
where we threw away higher order terms throughout. Then
Bz =
µ0I
2π
R2
r3
Z π
0
(1 − 3cos2
θ)dθ.
Using the fact that cos2 θ averages to 1/2 over a cycle, the integral is −π/2, giving
Bz = −
µ0I
4π
πR2
r3
= −
µ0
4π
m
r3
which has the correct magnitude.
[3] Problem 19 (Purcell 6.14). Consider a square loop with current I and side length a centered
at the origin, with sides parallel to the x and y axes. Show that the magnetic field at rx̂ is
B ≈ (µ0/4π)(m/r3) for r ≫ a, as expected from idea 6. Be careful with factors of 2!
Solution. This calculation is a bit subtle. It is tempting to ignore the sides parallel to x̂, because
the current is almost parallel to r, so ds × r is small; more precisely, it is suppressed by a power of
a/r. The sides parallel to ŷ do each give much larger contributions, but they have opposite sign and
nearly cancel out, suppressing their sum by a power of a/r. So all four sides need to be considered.
First consider the segments parallel to x̂. We get a factor of (a/2)/r from the sinθ factor in the
cross product. Similarly, a appears in the Biot–Savart integral in the denominator; however, its
effect here would give higher-order terms in a/r, which we don’t want to keep since they’re much
smaller than the final answer. So the segments each contribute equally, for a total of
B1 = −
µ0I
4π
aa/2
r
r2
+
aa/2
r
r2
!
= −
µ0I
4π
a2
r3
.
Next, the segments parallel to ŷ contribute a total of
B2 =
µ0I
4π

a
(r − a/2)2
−
a
(r + a/2)2

=
µ0I
4π
2a2
r3
where we work to the same accuracy as for B1. Adding the two contributions and using m = Ia2
gives the desired result. If you forget to count B1, you’ll get an answer that is two times too big.
[3] Problem 20.   W 1 0USAPhO 2012, problem A3.
19
Kevin Zhou Physics Olympiad Handouts
Idea 7: Magnetic Monopoles
Far away from the center of the dipole, the magnetic field of a magnetic dipole has the same
form as the electric field of an electric dipole. Therefore, we can often replace a magnetic
dipole m with a fictitious pair of “magnetic charges” ±qm separated by d, where qmd = m.
This is called a “Gilbert dipole”, in contrast to a true “Amperian dipole”.
This was the default way to think about magnets in the 1800s, but was largely removed from
American textbooks in the 1950s because it’s misleading in general: magnetic charges don’t
actually exist in magnets, and applying this analogy will give the wrong fields inside the
dipole, as you saw in problem 17 and will see another way in problem 21. However, if we
only care about the field outside the magnet, the analogy works, and it’s often the fastest
way to solve problems. We’ll return to this idea in greater depth in E8.
[3] Problem 21.   m 1 0USAPhO 2015, problem B2. A key problem which illustrates idea 7.
We now give a few arguments for computing fields using symmetry.
Example 5: PPP 31
An electrically charged conducting sphere “pulses” radially, i.e. its radius changes periodically
with a fixed amplitude. What is the net pattern of radiation from the sphere?
Solution
There is no radiation. By spherical symmetry, the magnetic field can only point radially.
But then this would produce a magnetic flux through a Gaussian sphere centered around
the pulsing sphere, which would violate Gauss’s law for magnetism. So there is no magnetic
field at all, and since radiation always needs both electric and magnetic fields (as you’ll see
in E7), there is no radiation at all. In fact, outside the sphere the electric field is always
exactly equal to Q/4πϵ0r2, in accordance with Coulomb’s law.
