---
id: kevin-zhou-r3-p022
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r3-p022
solution_type: author
source_document: solution-document-kevin-zhou-r3sol
source_pdf: sources/kevin_zhou/site/handouts/R3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R3Sol.pdf."
---

[5] Problem 22. In this problem, we give one of the classic justifications for gravitational redshift,
the fact that photons redshift when moving against a gravitational field. Suppose that point B is a
height H above point A, in a gravitational field g. A set of electrons and positrons with total rest
mass M are converted into photons of frequency f at A. The photons fly upward to B, where they
are converted back into electrons and positrons. Assume throughout that g is small.
(a) Find the total mass M′ at B, and thus the frequency f′ of the photons measured at B.
Let’s explore some consequences of the result of part (a).
20
Kevin Zhou Physics Olympiad Handouts
(b) Since the frequencies of photons can be used as a clock, the fact that f ̸= f′ implies that
the gravitational potential causes time dilation. Show that times are dilated by a factor of
1 + ϕ/c2, where ϕ is the gravitational potential and ϕ/c2 ≪ 1.
(c) Suppose a photon bounces between the top and bottom walls of a vertical box, of height H.
If the photon has energy E at the bottom of the box, what is the time-averaged contribution
of the photon to the weight of the box?
(d) We can also derive the frequency shift using the equivalence principle. To confirm this, suppose
that two observers C and D begin at rest, with D a distance H to the right of C. At a certain
moment, both observers begin accelerating to the right with a small acceleration a. If C emits
light of frequency f (in C’s rest frame), show that D observes light of frequency f′.
The predicted frequency shift was observed in the 1959 Pound–Rebka experiment, where gamma
rays were transmitted from the top to the bottom of a tower.
(e) The tower’s height was 22.5m. What was the fractional change in energy of the photons?
(f) The gamma ray had energy 14keV. According to the energy-time uncertainty principle, what
is the minimum time needed to detect the effect?
Using your gravitational redshift results, it can be shown that a vertical system (such as an ideal
gas) in thermal equilibrium does not have uniform temperature. The argument starts as follows:
we put a box of photons into the system and let it come to thermal equilibrium with the gas, at
temperature T. We then consider moving the box upward.
(g) By filling in the rest of this argument, find an expression for dT/dz. This is called the Tolman
temperature gradient. How important is this effect for the problems in T1?
Solution. (a) By conservation of energy,
Mc2
= M′
c2
+ M′
gH
from which we conclude, using the fact that g is small, that
M′
= M

1 −
gH
c2

.
Each photon has its energy reduced by a factor of 1 − gH/c2, and since E = hf,
f′
= f

1 −
gH
c2

.
(b) If we measure time through the frequency of light, then
∆t′
= ∆t

1 +
gH
c2

again to lowest order in g. This is the desired result, since ϕ = gH. It implies that higher
clocks tick faster.
21
Kevin Zhou Physics Olympiad Handouts
(c) This is related to one of the questions in R2, though it’s a lot simpler because we’re working
in the frame of the box. In the presence of a gravitational field, the photon has a different
momentum at the bottom and the top of the box,
p =
E
c
, p′
=
E
c

1 −
gH
c2

.
In each round trip, the photon exerts an impulse J = 2p − 2p′ on the box, giving a time-
averaged force
F =
J
2H/c
=
(p − p′)c
H
=
E
c2
g.
In other words, the photon contributes ∆m = E/c2 to the “gravitational” mass of the box,
i.e. the quantity that determines its weight. But in a related question in R2, we found that
the photon contributes ∆m = E/c2 to the “inertial” mass of the box, i.e. the quantity that
determines its momentum for a given speed. The fact that the gravitational and inertial
masses are equal in this case is an example of the equivalence principle.
(d) Since the acceleration is small, it takes about a time H/c for the light to arrive at D. By this
time, D has picked up a velocity aH/c, so by the Doppler shift,
f′
= f
s
1 − aH/c2
1 + aH/c2
≈ f

1 −
aH
c2

where we again work to lowest order in a.
(e) Plugging in the numbers, gH/c2 = 2.5 × 10−15.
(f) The change in energy is ∆E = h∆f, and the uncertainty principle says we need time
∆t ≳
h
∆E
∼
h
(2.5 × 10−15)(14keV)
= 10−4
s.
In the real experiment, Pound and Rebka used two identical samples of iron as the emitter
and receiver, and vibrated one of them vertically at a few tens of Hz. Whenever the relative
velocity was just enough to cancel out the gravitational redshift effect, absorption occurred.
Since the ∆t required was substantially lower than the period of the vibration, the vibration
didn’t mess up the experiment.
(g) Consider moving the box of photons up a distance dz. Because of gravitational redshift, the
photon energies are multiplied by (1 − g dz/c2), so the temperature of the box is multiplied
by the same factor. But the photons must still be in thermal equilibrium with the gas around
it (or else we could run a perpetual motion machine from the temperature difference), so
T + dT = (1 − g dz/c2
)T
from which we conclude that
dT
dz
= −
gT
c2
.
Moreover, this applies to any system, not just a gas. This argument won first place in the
2018 Gravity Research Foundation essay competition, along with a big cash prize.
22
Kevin Zhou Physics Olympiad Handouts
In Earth’s atmosphere, this temperature gradient is of order 10−13 K/m, and therefore com-
pletely negligible. On the other hand, for the cosmic microwave background, the redshifting
of photon temperature can accumulate over the entire history of the universe. That’s called
the Sachs–Wolfe effect, and it must be accounted for in cosmological studies.
