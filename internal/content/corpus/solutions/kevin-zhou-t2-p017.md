---
id: kevin-zhou-t2-p017
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p017
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[2] Problem 17. Consider two adjacent blackbodies with similar temperatures, exchanging energy by
radiation. Show that the rate of change of the temperature difference is approximately proportional
to the temperature difference itself. This is an example of Newton’s law of cooling, which implies
the temperature difference decays exponentially. How does the time scale for cooling depend on the
average temperature of the blackbodies?
Solution. By the Stefan–Boltzmann law, the net energy transfer rate is proportional to T4
1 − T4
0 .
Letting ∆T = T1 − T0 ≪ T0, we have
T4
1 − T4
0 = T4
0 ((1 + (∆T)/T0)4
− 1) ≈ 4T3
0 ∆T
by the binomial theorem. This is proportional to ∆T as desired. Therefore, d∆T/dt = −k∆T for
a constant k, so ∆T ∼ e−kt, as desired. The timescale for cooling is 1/k ∝ 1/T3.
[3] Problem 18 (IPhO 1992). A satellite is a sphere of diameter D orbiting about the Earth.
(a) First suppose the satellite is perfectly black. Ignoring the effect of the Earth, find its temper-
ature T in terms of the temperature T⊙ of the Sun, the radius R⊙ of the Sun, and the radius
R of Earth’s orbit.
(b) How does the answer change if the satellite has a uniform emissivity e(f) = e0 < 1?
(c) If an engineer wishes to make T as small as possible using a special paint, which can have an
arbitrary e(f), sketch how the function e(f) should look.
24
Kevin Zhou Physics Olympiad Handouts
Solution. (a) The power going into the satellite is
P =
σ(4πR2
⊙)T4
⊙
4πR2
1
4
πD2
.
At equilibrium, this should equal to the power that the satellite emits.
P = σπD2
T4
.
Equating the two yields
T = T⊙
r
R⊙
2R
(b) The power that the satellite absorbs will be reduced by a factor of e0, and the power emitted
will also be reduced by a factor of e0. When equating the powers as in part (a), the e0 will
cancel out, giving the same answer.
(c) Since the satellite has lower temperature than the Sun, at high frequencies the emission from
the satellite rapidly falls off. Thus, it is better to have e(f) smaller at these high frequencies,
because energy comes in at these frequencies but doesn’t substantially come out.
f
e(f)
1
[3] Problem 19 (IPhO 1996). Two perfectly black surfaces of temperatures Th and Tℓ are parallel to
each other in vacuum, and the net heat flux from the hotter surface to the colder one is P.
··· Th Tℓ
N black plates
Now suppose that N parallel, thermally insulating, perfectly black plates are placed in between
them. This shielding reduces the heat flux to P′. Find P′/P.
Solution. The answer is 1/(N + 1). The official solution to IPhO 1996, problem 1(d) does the
N = 2 case, and the same method works for general N.
25
Kevin Zhou Physics Olympiad Handouts
Example 10
In problem 19 you considered some ideally black surfaces, but things get more complicated
when the surfaces have general emissivity. For simplicity, consider two walls facing each other,
with emissivities e1 and e2. Verify that when both walls have temperature T, there is no net
energy flow from one to the other.
Solution
Let I0 = σT4. The second wall emits radiation of intensity e2I0, so in equilibrium it must
absorb this amount as well. Verifying this takes a little work.
The first wall emits radiation of intensity e1I0, and a fraction e2 of it gets absorbed by the
second wall. The rest bounces back to the first wall, and if it doesn’t get absorbed by the first
wall, then it comes back to the second wall again for another chance to get absorbed. The
total intensity transferred from the first wall to the second is the sum of an infinite series,
I1→2 = (e1I0)(e2 + (1 − e2)(1 − e1)e2 + ...) =
e1e2I0
e1 + e2 − e1e2
.
This isn’t the expected result, because there’s another contribution. When the second wall
emits radiation, it can reflect off the first wall and then get reabsorbed by the second wall.
So the second wall absorbs a total radiation intensity due to its own emission, of
I2→2 = (e2I0)((1 − e1)e2 + (1 − e1)(1 − e2)(1 − e1)e2 + ...) =
(1 − e1)e2
2I0
e1 + e2 − e1e2
.
When you sum these contributions, you get e2I0 as expected. This is a typical example of
the power of thermodynamics: it is often easy to tell what the answer has to be, but the way
that answer comes about can be a bit complicated.
