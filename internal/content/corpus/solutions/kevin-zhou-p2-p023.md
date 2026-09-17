---
id: kevin-zhou-p2-p023
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p023
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[3] Problem 23. Some more examples of finding lines to plot.
(a) Suppose that you are given points (x,y) that lie on a circle centered at (a,0) with radius r.
What line can be plotted to find a and r?
(b) Consider an Atwood’s machine with masses m and M > m. The acceleration of the machine
is measured as a function of M. However, since the pulley has mass, it slows the acceleration
of the Atwood’s machine, so that
a =
M − m
M + m + δm
g.
Find a line that can be plotted to find g and δm, assuming m, M, and a are known. This is
an example of how plotting a line can separate out a systematic error, i.e. the value of δm,
which would be impossible if only one value of M were used.
(c) Suppose an object is undergoing simple harmonic motion with amplitude A and angular
frequency ω. Given measurements of the position x and velocity v, what line can be plotted
to find A and ω?
Solution. (a) The equation of the circle is
(x − a)2
+ y2
= r2
, y2
+ x2
= 2ax + r2
− a2
17
Kevin Zhou Physics Olympiad Handouts
Plotting y2 + x2 vs. x will give a slope of 2a and a y-intercept of r2 − a2. Combining the two
pieces of information yields a and r.
(b) The equation can be slightly rearranged to give
M − m
a
=
M + m
g
+
δm
g
.
Therefore, a plot of (M − m)/a vs. M + m has slope 1/g and y-intercept δm/g.
(c) By conservation of energy, A2 = x2 + v2/ω2, so
x2
= A2
− v2
/ω2
.
Thus, a plot of x2 vs. v2 has y-intercept A2 and slope −1/ω2.
[3] Problem 24.  W 1 0USAPhO 2012, problem A2. (This one requires basic thermodynamics.)
[3] Problem 25.  W 1 0USAPhO 2011, problem A2.
[3] Problem 26.  c 1 0INPhO 2018, problem 7. (This one requires basic fluid dynamics.)
[3] Problem 27 (USAPhO 2024). An experimentalist drives a series RLC circuit with a sinusoidal
voltage V (t) = V0 cosωt. In E6, you will learn how to show that the voltage across the capacitor,
in the steady state, oscillates with amplitude
Vc =
V0
p
(1 − ω2/ω2
0)2 + (ω/ω0Q)2
where ω0 is the resonant angular frequency and Q is the circuit’s quality factor. The experimentalist
takes the following data near the resonance, for a fixed value of V0:
ω (rad/s) 133.0 133.5 134.0 134.5 135.0 135.5 136.0 136.5 137.0
Vc (Volts) 3.64 4.76 6.52 8.53 8.18 6.06 4.44 3.42 2.75
Find the values of ω0 and Q as accurately as possible. Uncertainty analysis is not required. (Hint:
you don’t always have to draw a line. Carefully examine and approximate the given formula.)
Solution. See the official solutions to problem B3, part a.b.ii. A good answer for ω0 is within the
range (134.7 ± 0.1)rad/s, and a good answer for Q is within 88 ± 3.
5 Estimation
Estimation is a useful skill for checking the answers to real-world problems.
Example 7
Estimate the circumference of the Earth.
18
Kevin Zhou Physics Olympiad Handouts
Solution
If you know that the United States is 3,000 miles wide, and there is a time zone difference of
three hours between California and New York, then a reasonable estimate is 24,000 miles.
Or, if you know the factoid that light can go about seven times around the Earth in a second,
then a reasonable estimate is (3/7) × 108 m ≈ 4 × 107 m.
Let’s check these results are compatible. There are about 5 miles in 8 kilometers, a fact
you can get by remembering how your car’s speedometer looks, or by noting that 3 feet are
about 1 meter. Then 4 × 104 km ≈ (5/8) × 4 × 104 mi = 2.5 × 104 mi, so the two results are
compatible. There are probably at least a hundred more ways to perform this estimation.
Example 8
Estimate the density of air, and compare this to the density of water.
Solution
We can directly use the ideal gas law, PV = nRT. The density is ρ = µn/V where µ is the
mass of one mole of air, so
ρ =
µP
RT
.
Atmospheric pressure is about 105 Pa, typical temperatures are about 300K, and air is mostly
N2, which has a molar mass of µ = 28g/mol, so
ρ =
(0.028)(105)
(8.3)(300)
kg
m3
≈ 1
kg
m3
.
The density of water is, almost by definition,
ρw ≈ 103 kg
m3
.
Most liquids and solids have densities within an order of magnitude of this, since in all
cases the atoms are packed close together. Evidently, air molecules are about a factor of
(103)1/3 = 10 times further apart than typical water molecules.
Example 9
Estimate how much useful power you can produce in a short burst.
Solution
This is a bit tricky to test, because most exercises just burn energy against air resistance or
friction, which is hard to estimate. However, a task that directly performs work is useful. I
weigh about 75kg and can run up a 3m high staircase in around 3s, so
P = mgv = (75)(10)(3/3)W ≈ 750W.
19
Kevin Zhou Physics Olympiad Handouts
This is a typical max power output, while typical steady state power outputs are several
times smaller, and the corresponding numbers for elite athletes are several times larger.
Remark
It’s important not to overthink estimation questions. If you already know what answer you’re
targeting, you can always add ad-hoc factors to get closer, but that’s not a good instinct in
novel situations, where you don’t know the answer. Instead, it’s best to keep things simple,
and only try to get within one or two orders of magnitude. Accordingly, the solutions to the
problems below will also use very simple estimates, accurate to only an order of magnitude.
