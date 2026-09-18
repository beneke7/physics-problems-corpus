---
id: kevin-zhou-e6-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e6-p019
solution_type: author
source_document: solution-document-kevin-zhou-e6sol
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

[3] Problem 19. A resonant cavity of the form illustrated below is an essential part of many microwave
oscillators. It is a single piece of metal, which can be treated like an LC circuit.
19
Kevin Zhou Physics Olympiad Handouts
(a) Assuming that s ≪ a,b,h, estimate the lowest resonant angular frequency of the cavity by
treating it as an LC circuit. It may be helpful to sketch the magnetic and electric fields.
(b) One of the most common types of cavity is a cylindrical cavity, i.e. a hollow cylinder. (It
corresponds to taking s = h in the above setup.) Assuming that h ≈ b, find a reasonable
estimate of the lowest resonant angular frequency ω.
Solution. (a) The top of the small internal cylinder forms a small parallel plate capacitor with
the top, with capacitance
C = ϵ0
πa2
s
.
Meanwhile, the entire rest of the cavity looks like a toroidal solenoid with one turn, which we
already know has an inductance of
L =
µ0h
2π
log
b
a
.
Therefore we have
ω =
1
√
LC
=
1
q
µ0h
2π log(b/a)ϵ0(πa2)/s
=
c
a
s
2s
hlog(b/a)
where c is the speed of light. The fields are sketched below.
(b) If we just plug in s = h above, we get
ω =
c
a
s
2
log(b/a)
.
However, this result is nonsense, because it depends on a, which has no physical meaning
when s = h. The problem is that our heuristic picture in (a) of how the current and charge is
distributed only makes sense for s ≪ h.
A complete and rather complicated analysis would show that the lowest resonant angular
frequency is
ω = c min 1.841

1
b2
+
2.912
h2
 1/2
,
2.405
b
!
.
In this case, we can get close by dimensional analysis, which tells us that ω ∼ c/b, since b is
the only length scale in the problem. (Recall that we assumed h ≈ b.)
20
Kevin Zhou Physics Olympiad Handouts
Remark
In E3, we saw that for DC circuits, any system of resistors and ideal batteries with two ports
is equivalent, from the perspective of anything connected across the ports, to either a single
resistor and ideal battery in series (the Thevenin equivalent), or a single resistor and ideal
current source in parallel (the Norton equivalent). From the ideas covered in this problem
set, we also know that any system of resistors, inductors, and capacitors with two ports is
equivalent, at a fixed angular frequency ω, to a single lumped element with impedance Zeq.
This in turn could be constructed out of a single resistor and inductor or capacitor in series.
This naturally leads to a more general question: it is possible to construct a simple
“equivalent” circuit that has exactly the same Zeq(ω), for all ω? The answer is yes. For
example, consider the simple case of a circuit of only inductors and capacitors. Here’s the
rough idea: in this case, the equivalent impedance is always a pure imaginary, rational
function of ω, meaning a ratio of two polynomials in ω. But rational functions can always
be expanded in partial fractions. Assuming no multiple roots for simplicity, each term in the
partial fraction decomposition can be mimicked with an LC circuit, and we get the sum by
placing these circuits in series.
In electrical engineering, the general task of constructing a circuit with a prescribed Z(ω) is
called network synthesis; the above example is called Foster’s synthesis. These techniques
can be used to construct filters more elaborate than the ones you explored in problem 16.
Remark
Power companies often transmit electricity with “three-phase power”. This means that there
are three “hot” electrical lines, carrying voltages
V1(t) = V0 cos(ωt), V2(t) = V0 cos(ωt + 2π/3), V3(t) = V0 cos(ωt + 4π/3).
There are several advantages to three-phase power, but one is that it supplies a constant
power, as V 2
1 + V 2
2 + V 2
3 is constant.
An ordinary American wall outlet has three holes, arranged like a face. The smaller eye is
the “hot” one, with voltage V1(t), while the larger eye and the mouth are both grounded.
Appliances are powered by the voltage difference between the eyes. Appliances that use
significant power and have metal exteriors have three-prong plugs. Here, the mouth is
connected directly to the exterior of the appliance, ensuring that it can’t shock you, even if
something goes wrong inside. If you live in an apartment building, you might also have special
power outlets meant for very power-intensive appliances like dryers and heaters. In these
outlets, one hole has voltage V1(t) and another has V2(t), giving an AC voltage difference of
amplitude
√
3V0.
21
Kevin Zhou Physics Olympiad Handouts
4 Normal Modes
Idea 4
A circuit with n independent loops has n normal modes. If we ignore resistances, the normal
modes are pure sinusoids, though in all real circuits they exponentially damp over time. Just
as in mechanics, the general solution for the behavior of a driven circuit is a superposition of
normal mode currents and the response to the driving.
There are many ways to find the normal mode frequencies.
• One way is to pick any two points not directly connected by wires. We may imagine that
across these points we have attached a current source ˜ I which is doing nothing, ˜ I = 0. If a
normal mode is present at angular frequency ω, then we can have Ṽ ̸= 0, even though ˜ I = 0
because current is merely sloshing around inside the circuit. Thus, the equivalent impedance
Z(ω) between these points is infinite.
• Another way is to pick two points directly connected by wires. We may imagine this wire is
actually a voltage source Ṽ which is doing nothing, Ṽ = 0. If a normal mode is present at
angular frequency ω, then we can have a current ˜ I ̸= 0 through the wire even though Ṽ = 0,
so the equivalent impedance Z(ω) between these points is zero.
• Some LC circuits can be mapped to sets of masses and springs using the analogies in idea 1,
which can help with guessing the normal modes.
• Finally, one may simply write down all of Kirchhoff’s loop equations, plug in eiωt time de-
pendence, and look for a solution. This boils down to solving a system of n equations, or
equivalently evaluating the determinant of an n × n matrix. This is rarely the best approach
on an Olympiad.
• Not every problem benefits from using normal modes; for relatively simple circuits with special
initial conditions, it may be better to solve Kirchhoff’s loop equations directly.
Example 7: Kalda 89
Find the normal mode frequencies of the circuit below.
22
Kevin Zhou Physics Olympiad Handouts
Solution
There are four independent Kirchhoff’s loop equations, so we expect four normal modes.
One normal mode consists of current simply flowing uniformly along the outside, along the
inductors. Since the capacitors aren’t involved, this normal mode has ω0 = 0.
Now we apply the first technique listed above: we pick two points not directly connected
with wires, and set the impedance to infinity. By symmetry, it’s best to pick A and D.
By symmetry, if any voltage is applied between A and D, the points B and E will be at
the same voltage. Furthermore, this point will be at the same voltage as O, because the
remaining circuit forms a balanced Wheatstone bridge, as introduced in E3. Identifying B,
E, and O straightforwardly gives a simple LC circuit with Leff = (3/2)L and Ceff = (2/3)C,
and resonant angular frequency ω1 = 1/
√
LeffCeff = 1/
√
LC.
This procedure only gave one of the three remaining normal modes, so we must have missed
the other two because they have zero voltage difference between A and D. Therefore, to find
the other two, we can join A and D, leading to the simpler equivalent circuit below.
We now apply the same procedure between points B and E. This circuit is again a balanced
Wheatstone bridge, so O and A are at the same voltage. We then have a simple LC circuit
with Leff = (4/3)L and Ceff = C, giving ω2 =
p
3/4LC.
Again, we’ve missed a normal mode, so that remaining mode must have zero voltage difference
between B and E. Joining them together leads to the final equivalent circuit below.
This is now a simple LC circuit with Leff = (1/3)L and Ceff = (12/7)C, giving the final
resonant angular frequency ω3 =
p
7/4LC.
[2] Problem 20 (Kalda). Consider the LC circuit below.
23
Kevin Zhou Physics Olympiad Handouts
Show that the normal mode angular frequencies are ω = (
√
5 ± 1)/2
√
LC.
Solution. We set the impedance between the two ends of the bottom left wire to be 0, so
iωL +
1
iωC
+
1
iωC + 1
iωL
= 0.
Let a = iωL and b = 1
iωC . We have a + b + 1/(1/a + 1/b) = 0, so (a/b)2 + 3(a/b) + 1 = 0, so
ω2LC = −a/b = 3±
√
5
2 . But note (
√
5±1)2 = 2(3±
√
5) = 4ω2LC, which shows ω = (
√
5±1)/2
√
LC.
[3] Problem 21 (IPhO 2014). Initially, the switch S is open in the circuit shown below.
The capacitor with capacitance 2C is given a charge q0, and immediately begins to discharge. At
the moment when the current through the inductors reaches its maximum value, the switch S is
closed. Find the maximum current through the switch thereafter.
Solution. See the official solution to IPhO 2014, problem 1(c).
[5] Problem 22 (Physics Cup 2012). Find the angular frequencies of the normal modes of the circuit
below, where C1 ≪ C2 and L1 ≪ L2.
You may give all of your answers to lowest order in C1/C2 and L1/L2.
Solution. See the solutions here.
24
Kevin Zhou Physics Olympiad Handouts
5 Nonlinear Circuit Elements
In this section we’ll introduce nonlinear circuit elements, focusing on diodes. More exotic circuit
elements will be covered in E7.
Idea 5
Many nonlinear circuit elements can be described by a current-voltage characteristic I(V ).
Such circuit elements have trivial time dependence, just like resistors, and working with
them basically amounts to using Kirchhoff’s laws as usual, plugging in I(V ) where necessary.
Since the implementation details of such elements can be very complicated, and many draw
power from external sources, it generally isn’t productive to think of them “physically”; they
are more like miniature computers than physical objects. One just has to take I(V ) as given
and work directly with it. Some simple examples are:
• An ideal diode acts like a wire in one direction and a break in the other, so it has
I(V ) =
(
∞ V > 0,
0 V < 0.
• Sometimes one instead takes the I(V ) characteristic
I(V ) =
(
∞ V > V0,
0 V < V0
which means that it “costs” voltage V0 to go through the diode in the forward direction.
More realistically, I(V ) smoothly increases when V passes V0, but you don’t often see
this in Olympiad problems because it makes the math very messy.
• Zener diodes can allow current in both directions. An idealized bidirectional diode has
I(V ) =

 
 
∞ V > V0,
0 −V0 < V < V0,
−∞ V < −V0.
• Many familiar objects such as fuses (wires which break when I passes a threshold)
and spark gaps (breaks that conduct when V passes a threshold) can be thought of as
nonlinear circuit elements in the same way.
Analytically, these three cases are easily handled by casework. For instance, a diode acts just
like a wire for positive V , and just like a break for negative V . In each case, the circuit is no
more complicated than an ordinary one with linear circuit elements. Then you put the cases
together to get the full behavior.
25
Kevin Zhou Physics Olympiad Handouts
Example 8
A capacitor of capacitance C is charged so that its voltage is Vc. The capacitor is placed in
series with a resistor R and a diode with I(V ) characteristic
I(V ) =
(
∞ V > V0,
0 V < V0.
The diode is oriented so that the initial voltage across it is positive. How does the voltage
across the capacitor change over time?
Solution
If Vc < V0, the voltage on the capacitor is not enough to get current to flow through the
diode, so nothing happens. If Vc > V0, current flows, at the cost of a voltage drop V0 across
the diode. Then we can simply replace the diode with a battery of emf V0 oriented in the
opposite direction. This system is equivalent to an ordinary RC circuit with battery, with
the capacitor initially charged to higher than V0. The extra voltage exponentially decays,
V (t) = (Vc − V0)e−t/RC
+ V0
so that in the limit t → ∞, the capacitor voltage approaches V0 and the current stops.
Idea 6
It is difficult to solve a nonlinear circuit analytically if I(V ) is not very simple. In these cases:
• One can find the answer graphically as the intersection of I(V ) and another curve.
• One can solve for the answer iteratively on a calculator.
• If V stays within a narrow range, one can take a linear approximation to I(V ). This
effectively replaces the element with a battery in series with a resistor, so the problem
can be solved just like those in E3.
[1] Problem 23 (Kalda). Find the current in the circuit given below.
The nonlinear element is a diode with the I(V ) characteristic shown.
Solution. We simply draw the line V (I) = 1.5V−(100Ω)I on the graph and find the intersection,
which gives I ≈ 8mA.
26
Kevin Zhou Physics Olympiad Handouts
Idea 7
The power delivered to any circuit element is still P = IV . However, some nonlinear circuit
elements can be active, providing net power to the circuit, like batteries.
Example 9: Kalda 64
The circuit below containing an ideal diode makes it possible to charge a rechargeable battery
of voltage E = 12V with a direct voltage source of a voltage V0 = 5V < E.
To do this, the switch K is periodically opened and closed, with the opened and closed periods
having equal length τ = 10ms. Find the average charging current assuming L = 1H.
Solution
This system is called a boost converter. The point is that, using an inductor and a switch,
one can generate emfs larger than what we put in, because the current wants to keep
flowing through the inductor when the switch is opened; this allows us to get enough
emf to charge the battery. This idea is also used in the ignition coils of old-fashioned
cars, where a voltage large enough to ionize air is produced, making a spark and starting
the engine. There’s also a fluid analogue, called the hydraulic ram, used to raise water.
The diode’s role is just to keep current from flowing backward during the otherhalf of the cycle.
When the switch is closed, no current can flow through the battery, and the current through
the inductor builds up linearly, since there is an emf V0 across the inductor. When the switch
is opened, the emf across the inductor is V0 − E = −7V, causing its current to decrease
while simultaneously charging the battery. After a time (5/7)τ with the switch open, the
current through the inductor falls to zero, and the diode causes current to stop flowing.
Quantitatively, while the switch is closed, the current through the inductor builds up to
V0τ/L. When the switch is open, current flows for a time (5/7)τ, linearly falling to zero, so
the total charge is
Q =
1
2
V0τ
L
5
7
τ.
A cycle takes time 2τ, so
I =
Q
2τ
=
5
28
V0τ
L
= 8.9mA.
By the way, your phone and laptop chargers probably have rectangular bricks containing a
switched-mode power supply. This consists of one part that converts the AC wall power to
DC, and a second part similar to the circuit above, but set up to output a lower DC voltage.
You could also use a transformer to lower the AC voltage, but a switch-mode power supply
is more space-efficient, and it easily copes with a range of input AC voltages and frequencies.
27
Kevin Zhou Physics Olympiad Handouts
[3] Problem 24. NBPhO 2010, problem 9. You should assume that Ui and Uo are positive, and that
in part (i) the currents are initially zero.
[3] Problem 25 (Kalda). An alternating voltage V = V0 cos(2πνt) is applied to the leads of the circuit
shown below. Treat the diode as ideal.
Assuming the current in the inductor begins at zero, what is the average current through the
inductor at late times?
Solution. Since ωL ≫ R, the inductor’s current changes very slowly, so we can neglect its change
over any one cycle. During some cycle, let’s write the steady state current in the inductor as
IL = α(V0/R)
where α = 0 in the beginning. Let the current through the resistor be IR. The current through
the diode is ID = IL + IR. When the diode lets current through, ID > 0, the voltage across the
inductor is
VL = V0 cos(2πνt).
During this time, the current through the diode is a shifted sinusoid,
ID = IL +
V0
R
cos(2πνt).
The diode blocks current once ID falls to zero. Thus, for α = 0 the diode is blocking half the time,
while for α = 1 the diode is never blocking. The situation for α ≈ 0.5 is shown below.
t
I
ID
IR
When the diode is blocking, the voltage across the inductor is
VL = IRR = −ILR.
The net change in IL in one cycle is
∆IL =
1
L
Z
cycle
VL dt.
28
Kevin Zhou Physics Olympiad Handouts
In the beginning, when α = 0, this integral is positive because VL(t) looks like a sinusoid but with
only the positive parts. As α increases, the integral begins to pick up part of the negative half of
the sinusoid, but the overall integral is still positive, so α continues to increase. The final steady
state is when α = 1 and the current flows all the time. At this point, IL = V0/R = 1A.
[3] Problem 26. NBPhO 2008, problem 6.
[3] Problem 27. NBPhO 2013, problem 8. A circuit with a nice mechanical analogy.
[3] Problem 28.   Y 1 0IPhO 2001, problem 1c.
[3] Problem 29.   ^ 1 0USAPhO 2018, problem A2.
[4] Problem 30. @ 1 0EuPhO 2022, problem 2.
29
