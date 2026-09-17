---
id: kevin-zhou-t1-p020
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-p020
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

[3] Problem 20. To model paramagnetism, consider a set of N independent magnetic dipoles in a
vertical magnetic field Bz and temperature T. Each dipole has two possible quantum states, spin
up and spin down, with energies −µzBz where µz = ±eℏ/2m.
(a) Let M be the magnitude of the total magnetic moment. Find M as a function of T.
(b) Show that M ∝ 1/T in the limit of high T. This is called Curie’s law.
Solution. (a) Since the dipoles are completely independent, we can treat them separately, giving
M = N
− eℏ
2me
eℏB
2mkBT
+ eℏ
2me
− eℏB
2mkBT
e
eℏB
2mkBT
+ e
− eℏB
2mkBT
=
Neℏ
2m
tanh
eℏB
2mkBT
.
(b) Note that tanhx ≈ x for x ≪ 1, so M ∝ 1/T in limit of high T as desired.
Remark
In principle, all of our results about statistical mechanics can be derived by following the
microscopic dynamics, e.g. the collisions of atoms with each other for a gas. It’s just very
hard to do so in practice.
However, you can still get a bit of insight in simple cases. For example, consider a
one-dimensional ideal gas in a uniform gravitational field, E = p2/2m + mgh. Since the
kinetic energy is a quadratic degree of freedom, and the potential energy is a linear degree of
freedom, the average potential energy must be twice the average kinetic energy. Furthermore,
this should be true no matter how rarely collisions happen; less frequent collisions simply
mean it takes longer to get to thermal equilibrium, without changing what that equilibrium is.
Therefore, we have the concrete, classical mechanical prediction that a mass bouncing
elastically on the ground, suffering no collisions at all, will have an average potential energy
equal to twice its average kinetic energy, which you can verify directly from Newton’s laws.
Here’s a more subtle puzzle. In our analysis of the isothermal atmosphere, we found that
the distribution of speeds is the same everywhere. But if you look at any one particle, it
will clearly pick up speed as it falls down. How is this self-consistent? Wouldn’t this tend to
increase the temperature at lower heights?
23
Kevin Zhou Physics Olympiad Handouts
Again, it’s easiest to think about this situation in the limit of a very thin gas, where collisions
are rare. Indeed, each particle that starts at the top of the atmosphere will pick up a lot
of speed as it falls down. But why are there any particles at the top at all? Because at
the bottom of the atmosphere, which is much more dense, particles occasionally get a lot
of energy through collisions, which propels them to the top. In equilibrium, the particles
going down do arrive at the bottom with unusually high speed, but they’re balanced out
by the unusually fast particles going the other way. Keeping track of the details here can
be quite complex, especially when collisions are frequent, but miraculously the Boltzmann
distribution takes care of it all for us!
4 Kinetic Theory
Idea 7
Kinetic theory is the branch of statistical mechanics that focuses on the motion of individual
molecules in a gas. It can get quite mathematically involved, since one must consider the
effects of molecular collisions, which is why the subject is usually reserved for graduate
school. However, in some simple situations, collisions can be neglected, effectively making
the molecules independent.
Example 7: Ideal Gas Law
Derive the ideal gas law using kinetic theory.
Solution
Without loss of generality, we consider a cubical container of gas of side length L and N gas
molecules. Consider the pressure exerted on a wall aligned with the yz plane. A given gas
molecule will hit this wall with period 2L/vx, transferring a momentum of 2px. Then the
pressure on the wall is
P =
F
A
=
1
L2
N⟨pxvx⟩
L
.
This can be written as
P =
N
V
⟨pxvx⟩ =
N
V
⟨p · v⟩
3
=
N
3V
⟨mv2
⟩ =
NkBT
V
where we used rotational symmetry and the equipartition theorem.
Of course, this calculation was doable because we neglected interactions between different
gas molecules. However, this doesn’t matter as much as one might think. We assumed
molecules can cross the whole container without colliding, but if they do, the derivation still
basically works because they just transfer their momentum to another molecule. As long as
the molecules are moving freely most of the time, the answer above is approximately right.
In T2, we’ll see how an attractive interaction lowers the pressure. In T3, we’ll see that when
the gas gets very dense, this leads to a dramatic effect: the gas condenses into a liquid.
24
Kevin Zhou Physics Olympiad Handouts
