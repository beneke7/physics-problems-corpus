---
id: kevin-zhou-x1-p020
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p020
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

[3] Problem 20. A neutron is inside a small cubical box of side length d. Ignore gravity.
(a) Estimate the minimum possible pressure on the walls using the uncertainty principle, dropping
all numeric factors. In the next two parts, we’ll calculate the pressure more carefully.
(b) Calculate the average pressure on the walls by treating the neutron as a classical particle
bouncing back and forth, with the same momentum as expected for the ground state in the
WKB approximation.
(c) Calculate the average pressure on the walls by finding the energy E of the ground state using
the WKB approximation, and the definition of pressure, P = −∂E/∂V . (This actually gives
the exact answer. Of course, by dimensional analysis, taking P ∼ E/V would also produce
the right answer, up to a constant factor.)
Solution. (a) Ignoring numeric factors, the uncertainty of position in each dimension is ∼ d, so
the uncertainty of each component of momentum is ∆px ∼ ℏ/d. Consider the pressure on the
faces in the yz-plane. The time between collisions is t ∼ d/vx = md/px, and the impulse is
∼ px. Thus the force is ∼ p2
x/md, giving a pressure ∼ p2
x/md3. Setting px ∼ ∆px gives
Pmin ∼
ℏ2
md5
which you could also deduce solely from dimensional analysis.
(b) Earlier, we found that pi = π
dniℏ. The time between collisions is t = 2md/pi and the impulse
is 2pi, giving a pressure of p2
i /md3. Note that this is a directional pressure, i.e. if the pi were
different, the pressures on each wall would be different.
The pressure on the wall perpendicular to the i direction is
Pi =
π2ℏ2
md5
n2
i .
For the ground state, the ni are all equal to one, so we have a uniform pressure,
P =
π2ℏ2
md5
which is the same order of magnitude as in part (a).
16
Kevin Zhou Physics Olympiad Handouts
(c) Earlier, we found that for a two-dimensional box,
E =
π2ℏ2
2md2
(n2
x + n2
y).
This generalizes straightforwardly to a three-dimensional box. In the ground state, nx = ny =
nz = 1, giving
E =
π2ℏ2
2md2
(1 + 1 + 1) =
3π2
2
ℏ2
mV 2/3
.
Carrying out the derivative,
P =
3π2
2
2
3
ℏ2
mV 5/3
=
π2ℏ2
md5
.
As expected, this coincides with the answer to (b), since both ultimately originate from the
same approximation.
[3] Problem 21.   ^ 1 0USAPhO 2018, problem B2.
[3] Problem 22. Classically, an electron orbiting a proton with angular frequency ωo emits radiation
with angular frequency ωc = ωo, as covered in E7. On the other hand, quantum mechanically
the energy levels are discrete, and using the de Broglie relation ∆E = ℏω indicates the angular
frequencies of radiation emitted when the electron drops between energy levels are discrete as well.
The classical and quantum models thus seem to be radically different, but in the limit n → ∞ where
quantum effects become negligible, the two should match.
(a) Suppose that the electron can orbit the proton in circular orbits with discrete radii rn. For
the nth orbit, compute the angular frequency ωc of the emitted radiation according to classical
mechanics.
(b) Now suppose the electron drops from the nth energy level to the (n−1)th energy level. Compute
the angular frequency ωq of the emitted radiation according to quantum mechanics, assuming
the orbits have radii rn.
(c) In the limit n → ∞, the results of parts (a) and (b) should coincide. Therefore, by equating
these results, infer how rn depends on n, and thus how L depends on n. If all goes well, you
should recover the result of Bohr quantization.
The reasoning here is exactly how Bohr came up with Bohr quantization in the first place. (The de
Broglie relation we had to use was motivated earlier through Planck’s law, as we showed in T2.)
Solution. (a) Classically, we need to balance the centripetal force with the Coulomb force,
mω2
0r =
e2
4πϵ0r2
.
Since ωc = ω0, we get
ωc =
s
e2
4πϵ0r3
nm
.
(b) The de Broglie relation tells us that ℏωq = En − En−1, so using standard results for circular
orbits in an inverse square potential,
ωq =
e2
4πℏϵ0
1
2

1
rn−1
−
1
rn

.
17
Kevin Zhou Physics Olympiad Handouts
(c) Thinking of n as a large number, we can approximate

1
rn−1
−
1
rn

=
rn − rn−1
rn−1rn
≈
rn − rn−1
r2
n
≈
1
r2
n
drn
dn
.
Plugging this into the equation ωc = ωq and simplifying, we get
2ℏ
r
4πϵ0
e2m
=
1
√
rn
drn
dn
.
Separating and integrating, we have
rn =
4πϵ0ℏ2
e2m
n2
.
There could be a constant of integration, but for large n, it’s negligible, and we can conclude
that for large n, rn ∝ n2. On the other hand, we have
Ln = mvnrn = mωcr2
n ∝ r1/2
n
which means that for high n, Ln ∝ n.
This is as far as we can go, “rigorously”. The amazing thing is that this derivation is based
on ωc = ωq, which only holds at large n, along with approximations that only work at large
n, and also involves an unknown constant of integration. But if we just set the constant of
integration to zero, and assume the derivation works for all n, then you can check that we
recover L = nℏ, which happens to be exactly true in the real world!
[4] Problem 23. @ 1 0IPhO 2005, problem 3. You may skip part 4, since it’s quite similar to another
problem on this problem set.
4 Bosons and Fermions
So far, we’ve only consider the quantum states of individual particles. Now we’ll consider what
happens when we put many of these particles together. We will assume the particles do not interact,
which means their quantum states are just the same as the quantum states for individual particles.
If the particles are fermions, they obey the Pauli exclusion principle, which means no two can occupy
the same quantum state. If they are bosons, there is no such restriction; we’ll consider bosons first.
[3] Problem 24. USAPhO 2011 A4 is a neat problem, but it has some typos and unphysical assump-
tions; this is an improved version. Consider a simplified model of the electromagnetic radiation
inside a cubical metal box of side length L at temperature T. In this model, modes of the electric
field have spatial dependence
E(x,y,z) = E0 sin(kxx)sin(kyy)sin(kzz)
where one corner of the box lies at the origin and the box is aligned with the x, y, and z axes. For
simplicity, we will treat the electric field as a scalar, even though it actually has direction.
(a) The electric field must be zero everywhere at the sides of the box. What condition does this
impose on the ki?
18
Kevin Zhou Physics Olympiad Handouts
(b) Show that for a typical box at room temperature, L ∼ 1m and T ∼ 300K, the quantity kBT
is much greater than ℏω0, where ω0 is the lowest nonzero mode angular frequency. Therefore,
for the rest of the problem, you may approximate kBT ≫ ℏω0.
(c) Each permitted value of the triple (kx,ky,kz) corresponds to a mode, which can be occupied
by any number of photons. Each photon has an energy E = ℏω, where ω = ck is the angular
frequency of the mode. How many modes have an energy per photon of at most kBT?
(d) As a crude approximation, suppose that in thermal equilibrium, each mode with energy per
photon at most kBT contains exactly one photon, while all other modes contain no photons.
Compute the total energy of the photons in the box. (Answer: (kBT)4L3/8π2ℏ3c3.)
Note that the procedure here is different from what we did above. Before, we started with particles
and quantized
H
pdx to get the allowed quantum states. Here, we’re treating a situation with many
particles (photons), which are excitations of an underlying field (the electromagnetic field). In this
case, we found the (normal) modes of the classical field, then quantized by saying that photons
could occupy these modes. This is the methodology of quantum field theory.
Solution. (a) We see that kxL = nxπ, kyL = nyπ, and kzL = nzπ.
(b) Plugging in the numbers, we have kBT/ℏω0 ∼ 2 × 104 ≫ 1, as desired.
(c) Define the vector n = (nx,ny,nz). For each mode, the energy per photon is
E = ℏω = ℏck =
πℏc
L
q
n2
x + n2
y + n2
z.
Moreover, the values of the ni are positive integers. Therefore, the quantum states we are
looking for occupy an eighth of a sphere in phase space, bounded by states with
nmax =
EmaxL
πℏc
.
Because kBT ≫ ℏω0, there are many such modes, so we can find the answer approximately
by computing the volume of this region. The number of modes (i.e. the number of values of
n) with an energy per photon of at most Emax is thus
N(Emax) =
1
8

4
3
πn3
max

=
1
6π2

EL
ℏc
 3
.
In this case, the requested answer is
N(kBT) =
1
6π2

kBTL
ℏc
 3
.
Note that this is different from the official USAPhO solution, because they also allowed
negative values for the ni. This is incorrect, because flipping the sign of one of the ni gives
you exactly the same mode, up to an irrelevant −1 factor.
(d) We sum over the modes. For each occupied mode, we assume the energy stored is E, so
U =
Z
E dN =
Z kBT
0
E
dN
dE
dE =
1
6π2

L
ℏc
 3 Z kBT
0
E(3E2
)dE =
1
8π2
(kBT)4L3
ℏ3c3
.
19
Kevin Zhou Physics Olympiad Handouts
