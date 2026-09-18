---
id: solution-document-kevin-zhou-e3sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-e3-ex002, kevin-zhou-e3-ex003, kevin-zhou-e3-ex006, kevin-zhou-e3-p008, kevin-zhou-e3-p022]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/E3Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Electromagnetism III: Magnetostatics
Chapters 4 and 6 of Purcell cover DC circuits and magnetostatics, as does chapter 5 of Griffiths. For
advanced circuits techniques, see chapter 9 of Wang and Ricardo, volume 2. Chapter 5 of Purcell
famously derives magnetic forces from Coulomb’s law and relativity. It’s beautiful, but not required
to understand chapter 6; we will cover relativistic electromagnetism in depth in R3. For further
discussion, see chapters II-12 through II-15 of the Feynman lectures. There is a total of 81 points.
1 Static DC Circuits
We continue with DC circuits, in more complex setups than in E2.
Idea 1
When analyzing circuits, it is sometimes useful to parametrize the currents in the circuits
in terms of the current in each independent loop. This is typically more efficient, because it
enforces Kirchhoff’s junction rule automatically, leading to fewer equations.
Example 1: Imbalanced Wheatstone Bridge
Find the current through the following circuit, if the battery has voltage V .
R 2R
2R R
R
Solution
This circuit can’t be simplified using series and parallel combinations, so instead we
use Kirchhoff’s rules directly. From the diagram, we see the circuit has three loops.
Let I1 be the clockwise current on the left loop, I2 be the clockwise current through
the top-right loop, and I3 be the clockwise current through the bottom-right loop. For
instance, this means that the current flowing downward through the top-left resistor is I1−I2.
The three Kirchhoff’s loop rule equations are
3I1R − I2R − 2I3R = V,
4I2R − I1R − I3R = 0,
4I3R − 2I1R − I2R = 0.
Adding the last two equations shows that
I1 = I2 + I3
1

Kevin Zhou Physics Olympiad Handouts
and plugging this back in shows that 3I2 = 2I3, so we have
I2 =
2
5
I1, I3 =
3
5
I1.
Since the answer to the question is just I1, we can now plug this back into the first equation,
V
R
= 3I1 − I2 − 2I3 =

3 −
2
5
−
6
5

I1 =
7
5
I1.
This gives the answer, 5V/7R.
Incidentally, the Wheatstone bridge is a famous circuit with the same topology. We note that
the current through the middle resistor is zero when the ratios between the top and bottom
resistances match on both sides of it. Hence if three of these outer resistances are known,
we can adjust one of them until the current through the middle resistor vanishes, thereby
measuring the fourth resistor.
Idea 2
Since Kirchhoff’s loop equations are linear, currents and voltages in a DC circuit with multiple
batteries can be found by superposing the currents and voltages due to each battery alone.
Idea 3: Thevenin’s Theorem and Norton’s Theorem
Consider any system of batteries and resistors, with two external terminals A and B. Suppose
that when a current I is sent into A and out of B, then a voltage difference V = VA − VB
appears. From an external standpoint, the function V (I) is all we can measure.
Now, by the linearity of Kirchhoff’s rules, V (I) is a linear function, so we can write
V (I) = Veq + IReq.
In other words, V (I) is exactly the same as if the entire system were a resistor Req in series
with a battery with emf Veq (with the positive end pointing towards A). This generalizes
the idea of replacing a system of resistors with an equivalent resistance, and is known as
Thevenin’s theorem.
We can also flip this around. Note that I(V ) must also be a linear function, and we can write
I(V ) = Ieq +
V
Req
.
This is precisely the I(V ) of an ideal current source Ieq (sending current towards B) in
parallel with a resistor Req. (An ideal current source makes a fixed current flow through it,
just like a battery creates a fixed voltage across it.) This is known as Norton’s theorem.
Since these functions are inverses of each other, you can see that the Req’s in both equations
above are the same (both are equal to the ordinary equivalent resistance), and Veq = −IeqReq.
2

Kevin Zhou Physics Olympiad Handouts
Example 2
Consider some batteries connected in parallel, with emfs Ei and internal resistances Ri. What
is the Thevenin equivalent of this circuit?
Solution
The equivalent resistance is simply
Req =
X
i
1
Ri
!−1
.
To infer Veq, we just need one more V (I) value. The most convenient is to set V = 0, shorting
all of the batteries. Each battery alone would produce a current of Ei/Ri, so
0 = Veq −
X
i
Ei
Ri
!
Req.
Thus, we have
Veq =
X
i
Ei
Ri
!

X
j
1
Rj


−1
.
Remark
With ideal batteries, it’s easy to set up circuits that don’t make any sense.
i1 1A i2
1V 1Ω 1V
For example, in the above circuit, Kirchhoff’s rules don’t determine the currents; they only
say that i1 + i2 = 1A. If the emfs of the batteries were different, the situation would be
even worse: the equations would be contradictory, with no solution at all! In real life, this is
avoided because all batteries have some internal resistance. Adding such a resistance to each
battery, no matter how small, resolves the problem and gives a unique solution.
[2] Problem 1 (Purcell 4.12). Consider the circuit below.
3

Kevin Zhou Physics Olympiad Handouts
E
R
E
R
E
R
R
R
a b
(a) Find the potential difference between points a and b.
(b) Find the equivalent Thevenin resistance and emf between points a and b.
Solution. (a) We’ll use loop currents, with positive being clockwise. Let the loop currents be
I1,I2,I3, from top to bottom. We see that
E − E − 2RI1 + RI2 = 0
E − 3RI2 + RI3 + RI1 = 0
−E − 2RI3 + RI2 = 0,
or
I2 = 2I1
3I2 − I3 − I1 = E/R
I2 − 2I3 = E/R.
This can be solved to give I1 = E/8R, I2 = E/4R, and I3 = −3E/8R. We see that Vb − Va =
(I2 − I3)R = 5E/8 .
(b) We’ll do this in two ways for variety. First, note that we already found the voltage between a
and b in part (a), and this is precisely the Thevenin emf, Veff = 5E/8. The Thevenin resistance
is simply the equivalent resistance between a and b. By a straightforward application of the
series and parallel rules, this is Reff = 3R/8 .
Second, suppose we short points a and b with a wire. Then by Thevenin’s theorem, the current
flowing through that wire should be I = Veff/Reff. We already know Veff from part (a). To
compute the current, we just use Kirchhoff’s loop rules again; these are now as follows.
E − E − 2RI1 + RI2 = 0
E − 2RI2 + RI1 = 0
−E − RI3 = 0
Solving these equations gives I1 = E/3R, I2 = 2E/3R, and I3 = −E/R. The current through
the wire is now I2 − I3 = 5E/3R. Thus, Reff = (5E/8)/(5E/3R) = 3R/8.
4

Kevin Zhou Physics Olympiad Handouts
[2] Problem 2 (Wang). A circuit containing batteries and resistors has two terminals. When an ideal
ammeter is connected between them, the reading is I1. When a resistor R is connected between
them, the current through the resistor is I2, in the same direction. What would be the reading V
of an ideal voltmeter connected between them?
Solution. We consider the Thevenin equivalent, i.e. the function V (I). The first piece of information
tells us that when V = 0, I = I1. The second tells us that when V = −I2R, then I = I2. Thus,
0 = Veq + I1Req, −I2R = Veq + I2Req.
Solving this system of equations gives
Veq =
I1I2R
I2 − I1
, Req =
I2R
I1 − I2
.
When an ideal voltmeter is connected, we have I = 0, so
V = Veq =
I1I2R
I2 − I1
.
Note that your answer may differ by a harmless sign, which ultimately depends on your sign
conventions for I1 and I2 (i.e. which terminal is A and which terminal is B).
[3] Problem 3.   W 1 0USAPhO 2015, problem A2.
Now we give a few problems on current flow through continuous objects. Fundamentally, all one
needs for these problems is the definition J = σE, and superposition.
Example 3
Consider two long, coaxial cylindrical shells of radii a < b and length L. The volume between
the two shells is filled with material with conductivity σ(r) = k/r. What is the resistance
between the shells, and the charge density?
Solution
To find the resistance, we compute the current I when a voltage V is applied between the
shells. By symmetry, in the steady state the current density must be
J(r) =
I
2πrL
r̂.
On the other hand, we also know that
V =
Z
E · dr =
Z b
a
I
2πrLσ
dr =
I(b − a)
2πkL
from which we conclude
R =
b − a
2πkL
.
Note that the radial electric field between the shells is constant, so
E(r) =
V
b − a
r̂.
5

Kevin Zhou Physics Olympiad Handouts
To find the charge density, it’s quickest to use Gauss’s law in differential form in cylindrical
coordinates. We use the form of the divergence derived in E1, giving
ρ = ϵ0 ∇ · E =
ϵ0
r
∂(rEr)
∂r
=
ϵ0
r
V
b − a
.
It might be surprising that ρ is nonzero. That’s because in most textbook examples the
conductivity is uniform, so that ∇ · E = ∇ · (J/σ) = (∇ · J)/σ = 0. In that case there can
only be charge on the surfaces of conductors.
[2] Problem 4 (Cahn). A washer is made of a material of resistivity ρ. It has a square cross section
of length a on a side, and its outer radius is 2a. A small slit is made on one side and wires are
connected to the faces exposed.
Since the washer has an irregular shape, the current distribution inside it is complicated: it spreads
out from the first wire, goes around the washer, and converges into the second wire. However, the
situation is simpler if we glue a perfectly conducting square plate, of side length a, to each exposed
face. Find the resistance in this case.
Solution. Since the plates are conducting, the potential doesn’t depend on the radius r at the plates
themselves, so by rotational symmetry, it doesn’t depend on r anywhere in the washer. Therefore,
there is no radial current; all the current flows tangentially, so we can think of the washer as a set
of radial rings in parallel.
Split the washer into a bunch of radial rings with width dr. We see that r ranges from a to 2a.
Each little ring has resistance ρ(2πr)/(adr), and they are all effectively connected in parallel. Thus,
1
R
=
1
ρ
Z 2a
a
dr
a
2πr
=
1
ρ
a
2π
log2,
which implies R = (2π/log2)ρ/a.
[3] Problem 5 (BAUPC 1995). An electrical signal can be transferred between two metallic objects
buried in the ground, where the current passes through the Earth itself. Assume that these objects
are spheres of radius r, separated by a horizontal distance L ≫ r, and suppose both objects are
buried a depth much greater than L in the ground. If the Earth has uniform resistivity ρ, find the
approximate resistance between the terminals. (Hint: consider the superposition principle.)
6

Kevin Zhou Physics Olympiad Handouts
Solution. We can consider one object at a time, and then use superposition to find the combined
effect of both. Suppose that current I comes out from one of the objects. Placing this object at the
origin, we have
J =
I
4πr2
r̂, E =
ρI
4πr2
r̂.
Therefore, the potential difference between this object and where the other object would be is
V =
ρI
4π
Z L
r
dr
r2
≈
ρI
4πr
where we used r ≪ L. Finally, the other object takes in current I, with its J, E, and V superposing
with the first object. Thus, the total potential difference is ρI/2πr, so
R =
V
I
=
ρ
2πr
.
[3] Problem 6 (PPP 162). A plane divides space into two halves. One half is filled with a homogeneous
conducting medium, and physicists work in the other. They mark the outline of a square of side
a on the plane and let a current I0 in and out at two of its neighboring corners. Meanwhile, they
measure the potential difference ∆V between the two other corners.
Find the resistivity ρ of the medium.
Solution. The surface of the plane enforces the boundary condition J · n̂ = 0, since current can’t
come out of it, which is equivalent to setting E · n̂ = 0. Then the uniqueness theorems in E1 apply.
Now, for simplicity, suppose there is only current coming in at A. Then one possible solution is
that J points radially outward from A and has (hemi)spherical symmetry, with magnitude
J · 2πr2
= I0 =⇒ J =
I0
2πr2
.
This obeys the boundary condition, so it must be the unique solution. In this case,
E =
I0
2πσr2
r̂
where σ is the conductivity of the material, which implies
VD − VC =
Z √
2a
a
I0
2πσr2
dr =
I0
2πσa
(1 − 1/
√
2).
7

Kevin Zhou Physics Olympiad Handouts
Similarly, for the case where the current is coming out of B, we have
VD − VC =
I0
2πσa
(1 − 1/
√
2).
The actual voltage drop is the superposition of the two,
∆V =
I0ρ
2πa
(2 −
√
2)
where ρ = 1/σ is the resistivity. Then ρ can be calculated as
ρ =
2πa∆V
I0(2 −
√
2)
=
πa(2 +
√
2)∆V
I0
.
[3] Problem 7 (MPPP 174). We aim to measure the resistivity of the material of a large, thin,
homogeneous square metal plate, of which only one corner is accessible. To do this, we chose points
A, B, C and D on the side edges of the plate that form the corner.
Points A and B are both 2d from the corner, whereas C and D are each a distance d from it. The
length of the plate’s sides is much greater than d, which, in turn, is much greater than the thickness
t of the plate. If a current I enters the plate at point A, and leaves it at B, then the reading on a
voltmeter connected between C and D is V . Find the resistivity ρ of the plate material.
Solution. This problem is a harder than the previous one because it’s harder to guess a current
configuration that satisfies the boundary conditions, i.e. that the current density at the edges of the
plate is parallel to the plate. The key is that we can use the following “image current” configuration
to automatically satisfy the original problem’s boundary conditions, but on an infinite plate.
8

Kevin Zhou Physics Olympiad Handouts
We have a new current source and sink respectively at the reflections of A and B in O. The
current sources and sinks all have magnitude 2I, rather than I, because only half of the currents at
A and B actually enter and exit the physical plate, shaded in gray.
Now, if a current 2I enters the plate, the current at a distance r is 2I
2πrt, so the electric field at a
distance r is ρI
πrt (pointing radially outward), so the potential is ρI
πt log(r0/r) for some arbitrary r0,
which we’ll take to be the same for all current sources and sinks. Then
VC =
ρI
πt
(log(r0/d) + log(r0/3d) − 2log(r0/
√
5d)) =
ρI
πt
log(5/3).
By symmetry, VC = −VD. Thus,
V = 2VC =
2ρI
πt
log(5/3), ρ =
πt
2log(5/3)
V
I
.
Remark
Setups like those in the previous two problems are commonly used to measure resistivities,
but why do they use a complicated “four terminal” setup? Wouldn’t it have been easier to
just attach two terminals, send a current I through them, and measure the voltage drop
V ? The problem with this is that it also picks up the resistance R of the contacts between
the terminals and the material, along with the resistances of the wires. By having a pair of
terminals measure voltage alone, drawing negligible current, we avoid this problem.
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
Example 6
Find the magnetic field of an infinite cylindrical solenoid, of radius R and n turns per unit
length, carrying current I.
Solution
Orient the solenoid along the vertical direction and use cylindrical coordinates. By symmetry,
the field must be independent of z. Now consider the radial component of the magnetic field
Br. Turning the solenoid upside-down is equivalent to reversing the current. But the former
does not flip Br while the latter does, so we must have Br = 0.
Now, by rotational symmetry, the tangential component Bϕ must be uniform. But then
Ampere’s law on any circular loop gives Bϕ(2πr) = 0, so we must have Bϕ = 0 as well.
The only thing left to consider is Bz. By applying Ampere’s law to small vertical rectangles, we
20

Kevin Zhou Physics Olympiad Handouts
see that Bz is constant unless that rectangle crosses the surface of the solenoid. Furthermore,
Bz must be zero far from the solenoid, so it must be zero everywhere outside the solenoid.
Now, for a rectangle of height h that does cross the surface, Ampere’s law gives
I
B · ds = Bin
z h = µ0Ienc = µ0nIh
which tells us that Bin
z = µ0nI.
Example 7
Now suppose the solenoid has finite length L ≫ R. What do the fringe fields look like?
Solution
In principle we could solve for the exact fringe field by applying the Biot–Savart law to
the solenoid wire, but that would be rather complicated. Instead, let’s approximate the
solenoid as a stack of N = nL evenly spaced circular wire loops. Each one of these loops is a
magnetic dipole µ = πR2I, so the field of each loop well outside of it is just a dipole field.
Summing up all of these dipole fields is still complicated, so let’s use idea 7. We can replace
each wire loop with a pair of magnetic charges ±qm separated by d, with the same magnetic
dipole moment µ = qmd. We can vary qm and d while keeping µ fixed, so for convenience
let’s set d equal to the spacing 1/n between loops. Then the charges of adjacent dipoles
cancel, leaving only charges qm = ±nµ = ±πR2nI on the ends.
Thus, the fringe field of a solenoid, at distances much greater than R, looks like the elec-
tric field of two point charges! This is confirmed by a numeric calculation shown at left below.
This may come as a surprise to you if you’ve read basic, algebra-based introductory physics
textbooks. Many of them contain hand-drawn diagrams like the one shown at right above,
where all the magnetic flux comes neatly out the ends of the solenoids, in straight lines. In
reality, the field sprays out almost spherically symmetrically from the end, with only half
the flux actually going out through the end face, while the rest exits downward through the
sides. (You will show this more directly with a slick argument in problem 23.)
21

Kevin Zhou Physics Olympiad Handouts
We can also be more quantitative. Suppose the solenoid is vertical and centered at z = 0.
Then the field at a radius r from the solenoid axis, at z = 0, is
B(r) = µ0nIẑ ×

 
 
1 r < R
−2R2/L2 R ≪ r ≪ L
−R2L/4r3 L ≪ r
where the first line is the usual solenoid field, the second line is from applying Coulomb’s
law to our dipole analogy (which is only valid when R ≪ r), and the third is from the dipole
field of the two charges (only valid when L ≪ r). As expected, in the limit L ≫ R, the
fringe field outside the solenoid is negligible. Another way of phrasing the result is that most
of the upward flux through the solenoid returns through a downward field which mainly
extends out to r ∼ L. You can see all of these features in the accurate drawing above.
We can draw two lessons from this example. First, misleading diagrams are a common
problem in introductory textbooks. A general rule is that the more basic a textbook is, the
more pictures it’ll have, but the less useful they’ll be. Second, the analogy between Ampere
and Gilbert dipoles is quite useful, and shows up frequently in tricky Olympiad problems.
Remark: Real Solenoids
Real solenoids are even more complicated. First, we didn’t account for the discreteness of
the wires. We just treated them as forming a uniform current per length K = nI, which is
how we wrote Ienc = nIh. This is valid when you don’t care about looking too closely, i.e. if
your distance to any wire is much larger than the wire spacing 1/n.
Second, the fact that solenoids are made by winding real wires means there is another
contribution to the current, even in the limit n → ∞. The wires are wound with a small
slope, since a net current I still has to move along the solenoid. Another way of saying
this is that the current per length along the solenoid surface is K = nIθ̂+ (I/2πR)ẑ. This
causes a tangential magnetic field Bϕ = µ0I/2πr outside the solenoid. Thus, in practice
many solenoids are “counterwound”: half the wires are wound evenly spaced going up the
axis, and the other half are wound evenly spaced going back down the axis, which closes the
loop and cancels this unwanted field.
[2] Problem 22. A toroidal solenoid is created by wrapping N turns of wire around a torus with a
rectangular cross section. The height of the torus is h, and the inner and outer radii are a and b.
(a) In the ideal case, the magnetic field vanishes everywhere outside the toroid, and is purely
tangential inside the toroid. Find the magnetic field inside the toroid.
(b) There is another small contribution to the magnetic field due to the winding effect mentioned
above. Roughly what does the resulting extra magnetic field look like? If you didn’t want
this additional field, how would you design the solenoid to get rid of it?
Solution. (a) Applying Ampere’s law on a circular loop gives B(r)(2πr) = µ0NI, so
B(r) =
µ0NI
2πr
.
22

Kevin Zhou Physics Olympiad Handouts
(b) Note that the twisting of the wire adds an effective small current in the tangential direction.
This looks like a current loop, so, e.g. it produces a magnetic field pointing vertically through
the toroid’s hole. We can remove it by using a bunch of current loops instead of a single
winding wire, or by using counterwinding: after winding the wire around the toroid once
clockwise, wind it around again counterclockwise.
[3] Problem 23 (Purcell 6.63). A number of simple facts about the fields of solenoids can be found
by using superposition. The idea is that two solenoids of the same diameter, and length L, if joined
end to end, make a solenoid of length 2L. Two semi-infinite solenoids butted together make an
infinite solenoid, and so on.
Prove the following facts.
(a) In the finite-length solenoid shown at left above, the magnetic field on the axis at the point
P2 at one end is approximately half the field at the point P1 in the center. (Is it slightly more
than half, or slightly less than half?)
(b) In the semi-infinite solenoid shown at right above, the field line FGH, which passes through
the very end of the winding, is a straight line from G out to infinity.
(c) The flux through the end face of the semi-infinite solenoid is half the flux through the coil at
a large distance back in the interior.
(d) Any field line that is a distance r0 from the axis far back in the interior of the coil exits from
the end of the coil at a radius r1 =
√
2r0, assuming
√
2r0 is less than the solenoid radius.
Solution. (a) Let B1 and B2 be the fields at these points, respectively. Note that B1 is close to
the ideal value µ0nI, but smaller because the solenoid is not infinite. Now glue two of these
solenoids together end-to-end, and consider the field at the center of this new, bigger solenoid.
23

Kevin Zhou Physics Olympiad Handouts
By superposition, it is 2B2, but also, it is close to µ0nI, and it is slightly closer to µ0nI than
B1 is, since the combined solenoid is longer. Therefore, B2 is slightly more than half of B1.
(b) Let G′ be the reflection of G in the axis. Say the field line GH comes out at an angle θ. Then,
at G′, it also comes out with an angle θ. Now, making a copy and rotating 180◦ and flipping
the current direction, the field at G becomes one pointing at θ above the horizontal (coming
from G at the original), and one at angle π−θ to the horizontal (coming from G′ in the copy).
Therefore, the field there would be non-zero right outside the solenoid, unless θ = 0, in which
case the fields cancel.
(c) Do the same procedure as in (a), and the flux at the glue points gets doubled to what it was
originally. However, now we have an infinite solenoid, so double the flux through the end is
equal to the flux in the middle.
(d) Note that (c) holds even if we take a constant disk of radius a as our surface to take the flux
over. Note that the flux through the disk at the edge with radius r is the same as at the
middle with radius r0 (same field lines). However, if we draw a disk of radius r at the middle,
it will have twice the flux as it did at the top, or twice the flux as with r0. However, here in
the middle, the magnetic field is essentially constant, so the areas must be twice each other,
so πr2 = 2πr2
0, or r =
√
2r0.
[3] Problem 24 (MPPP 160). Two infinite parallel wires, a distance d apart, carry electric currents
along the z-axis with equal magnitudes but opposite directions. We can find the shape of the
magnetic field lines with a neat trick, which only works for “two-dimensional” setups like this one,
where the fields lie in the xy plane and don’t depend on z.
(a) Argue that if we rotated B by 90◦ in the xy plane at each point, it would produce a valid
electrostatic field E. (Hint: consider rotating the B field of each wire individually.)
(b) Argue that the field lines of B are the same as the equipotentials of this artificial E, and use
this to find the field lines.
This trick is also useful for fluids in two dimensions, where it swaps vortices with sources and sinks.
Solution. (a) First, we can get the intuition using a single wire. In this case,
B =
µ0I
2πr
θ̂
in cylindrical coordinates. Upon a 90◦ rotation, θ̂ turns into r̂, giving
E =
µ0I
2πr
r̂
which is a valid electrostatic field, as it’s simply the electric field of an charged wire. So by
superposition, rotating the B field of the two wires would also give a valid electrostatic field.
(Of course, this isn’t really physically meaningful, since electric and magnetic fields don’t even
have the same units. It’s just a mathematical trick.)
We can also prove the correspondence more generally. The key criterion for a valid magne-
tostatic field is ∇ · B = 0, which for such two-dimensional setups is ∂xBx + ∂yBy = 0. Now,
when we rotate by 90◦, we define an electric field by Ex = By and Ey = −Bx, which implies
∂xEy −∂yEx = 0. But in such a two-dimensional setup, this is equivalent to ∇×E = 0, which
is the condition to have a valid electrostatic field.
24

Kevin Zhou Physics Olympiad Handouts
(b) The field lines of B are always parallel to B. Now, this artificial E is always perpendicular to
B, and equipotentials are always perpendicular to E, so the equipotentials follow the magnetic
field lines.
On the other hand, we know precisely what the potential is in this problem. By integrating
the 1/r field, the potential is proportional to logr, so
V (r) ∝ log(r+) − log(r−) = log(r+/r−)
where r+ and r− are the distances to the two wires. So the equipotentials have constant
r+/r−. We’ve already found, when investigating the method of images for spheres in E2, that
this implies the equipotentials are circles, specifically circles of Apollonius. So the magnetic
field lines are circles!
[2] Problem 25 (IPhO 1996). Two straight, long conductors C+ and C−, insulated from each other,
carry current I in the positive and the negative ẑ direction respectively. The cross sections of the
conductors are circles of diameter D in the xy plane, with a distance D/2 between the centers.
The current in each conductor is uniformly distributed. Find the magnetic field in the space between
the conductors.
Solution. The answer is a uniform field By = 6µ0I/((2π + 3
√
3)D). See the official solutions of
IPhO 1996, problem 1(e).
[3] Problem 26 (MPPP 157). A regular tetrahedron is made of a wire with constant resistance per
unit length. A long, straight wire sends current I into one vertex, and another long, straight wire
removes it from another vertex, as shown.
Find the magnetic field at the center of the tetrahedron.
Solution. The long straight wires contribute nothing. By symmetry C and D are at the same
potential, so IDC = 0. Then the current from A to B just splits up into three branches, which have
resistances RACB = RADB = 2RAB. Therefore, the currents are
IAB =
1
2
I, IAC = IAD = ICB = IDB =
1
4
I.
25

Kevin Zhou Physics Olympiad Handouts
The field at O due to the current along AD is directed along the vector
− − →
CB. Similarly, the magnetic
field due to the current along AC is directed along
− − →
BD, and so on. By repeating this reasoning for
all five contributions, we find that the magnetic field at O is proportional to
2
− − →
DC +
− − →
BD +
− − →
CB +
− − →
AD +
− →
CA = 2
− − →
DC +
− − →
CD +
− − →
CD = 0
so there is no field at O.
[5] Problem 27.   h 1 0APhO 2013, problem 1. A neat question on a cylindrical RC circuit that uses
many of the techniques we’ve covered so far.
26
