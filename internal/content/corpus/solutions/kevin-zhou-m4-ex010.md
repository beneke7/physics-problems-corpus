---
id: kevin-zhou-m4-ex010
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-ex010
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

Example 10
A mass m oscillates on a spring with spring constant k = k0 with amplitude A0. Over a very
long period of time, the spring smoothly and continuously weakens until its spring constant
becomes k = k0/2. Find the new amplitude of oscillation.
Solution
In this case the fast motion is the oscillation of the mass, while the slow motion is the
weakening of the spring. We can solve the problem by considering how the energy changes
in each oscillation, due to the slight decrease in k.
Suppose that the spring constant drops in one instant by a factor of 1 − ϵ. Then the kinetic
energy stays the same, while the potential energy drops by a factor of 1−ϵ. Since the kinetic
and potential energy are equal on average, this means that if the spring constant gradually
decreases by a factor of 1 − x over a full cycle, with x ≪ 1, then the energy decreases by a
factor of 1 − x/2.
The process finishes after N oscillations, where (1 − x)N ≈ e−Nx = 1/2. At this point, the
energy has dropped by a factor of (1 − x/2)N ≈ e−Nx/2 = 1/
√
2. Since the energy is kA2/2,
the new amplitude is 4
√
2A0.
Amazingly, the question can also be solved in one step using a subtle conserved quantity.
29
Kevin Zhou Physics Olympiad Handouts
Solution
Sinusoidal motion is just a projection of circular motion. In particular, it’s equivalent
to think of the mass as being tied to a spring of zero rest length attached to the origin,
and performing a circular orbit about the origin, with the “actual” oscillation being the x
component. (This is special to zero-length springs obeying Hooke’s law, and occurs because
the spring force −kx = −k(x,y) has its x-component independent of y, and vice versa.)
Since the spring constant is changed gradually, the orbit has to remain circular. Then angular
momentum is conserved, and we have
L ∝ vr = ωA2
∝
√
kA2
.
Then the final amplitude is 4
√
2A0 as before.
Both of these approaches are tricky. The energy argument is very easy to get wrong, while the
angular momentum argument seems to come out of nowhere and is inapplicable to other situations.
But the formal angular momentum here turns out to be a special case of a more general conserved
quantity, which is useful in a wide range of similar problems.
Idea 6: Adiabatic Theorem
If a particle performs a periodic motion in one dimension in a potential that changes very
slowly, then the “adiabatic invariant”
I =
I
pdx
is conserved. This integral is the area of the orbit in phase space, an abstract space whose
axes are position and momentum.
Solution
Since the potential changes slowly, the energy is roughly conserved in each oscillation cycle,
E =
p2
2m
+
1
2
kx2
.
Thus, within one oscillation cycle, the curve p(x) traces out an approximate ellipse in phase
space, with semimajor and semiminor axes of
√
2mE and
p
2E/k. Over the course of many
oscillations, the energy changes, but the area of this ellipse is the adiabatic invariant,
I =
I
pdx = π
√
2mE
p
2E/k = 2πE
r
m
k
∝ A2
√
km.
Thus, A ∝ k−1/4 in an adiabatic change of k, recovering the answer found earlier.
30
Kevin Zhou Physics Olympiad Handouts
Remark
The existence of the adiabatic invariant is hard to see in pure Newtonian mechanics, but
it falls naturally out of Hamiltonian mechanics, which is built on phase space. In fact,
Hamiltonian mechanics makes a lot of useful facts easier to see, which is why it’s the most
commonly used foundation for introducing quantum mechanics. It is commonly introduced
at the end of an undergraduate upper-division mechanics course, and therefore beyond the
Olympiad syllabus. If you’d like to learn more about Hamiltonian mechanics, or just see
how the adiabatic theorem is derived, see David Tong’s lecture notes.
The conservation of the adiabatic invariant has important consequences throughout physics.
As we’ll see in problem 25 and in X1, it ensures that the conditions which determine
energy levels in quantum mechanics remain true as a system is changed. As we’ll discuss
in R3, the adiabatic invariant is also useful to analyze the motion of charges in magnetic fields.
It’s also closely connected to adiabatic processes in thermodynamics. You’ve probably heard
that an adiabatic thermodynamic process has to be fast, so that no heat exchange can
happen. But the more fundamental definition is that it’s slow, relative to the dynamics of the
particles. In this case, the conservation of the adiabatic invariant for each particle implies the
conservation of the entropy of the gas. That’s because, as we’ll discuss in T2, the entropy
fundamentally measures the volume of phase space that the system can occupy.
