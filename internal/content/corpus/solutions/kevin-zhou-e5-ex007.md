---
id: kevin-zhou-e5-ex007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e5-ex007
solution_type: author
source_document: solution-document-kevin-zhou-e5sol
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E5Sol.pdf."
---

Example 7
Suppose the magnetic moment of an iron atom is due to a single unpaired electron, with
angular momentum of order ℏ. The atoms are separated by a distance d ∼ 10−10 m. Estimate
the maximum magnetic field an iron magnet can produce. How does this compare to the
fields that can be produced in an electromagnet?
22
Kevin Zhou Physics Olympiad Handouts
Solution
The answer doesn’t scale significantly with the physical size of the iron magnet. To see this,
think in terms of electric dipoles: if you have a giant cube of electric dipoles, it’s equivalent
to having a fixed surface charge density ±σ on two of the faces. The electric field produced
by such a charge density near each face is of order σ/ϵ0, independent of the size of the cube.
Therefore, the only things the magnetic field can depend on are µ0, the magnetic dipole
moment µ of a single atom, and d. By dimensional analysis,
B ∼ µ0
µ
d3
which can also be thought of as µ0M, where M is the magnetization density. Taking
µ ∼ eℏ/me and plugging in the numbers gives B ∼ 10T, which is the right order of magnitude.
Now consider the case of an electromagnet, where the field is produced by moving electrons
with typical speed v, moving in a loop with typical size r. In a metal, there’s on the order
of one free electron per atom, so d is still the same. The difference is that the field made by
each electron does scale with r, because each has magnetic moment
µ = IA ∼
ev
r
r2
.
Compared to the previous result, this is larger by a factor of mvr/ℏ. The two are comparable,
for r ∼ 1m, if the electrons travel at the agonizingly slow velocity v ∼ 10−4 m/s.
Therefore, you would get a magnetic field much larger than 10T if you could make the
electrons go at a reasonable walking speed, but that’s easier said than done. The largest
steady magnetic fields made in the lab are only about 40T. Such a field carries a pressure
which would rip apart a solenoid made of coiled wire,
P =
(40T)2
2µ0
= 0.6GPa.
For an exercise involving these pressure forces, see USAPhO 2025, problem A3.
Instead, these fields are produced in Bitter electromagnets, which are solenoids made of thick
metal plates, perforated with cooling channels to dissipate the enormous heat produced by
resistance. It is possible to produce higher fields temporarily, but the results will be explosive.
[3] Problem 21.  ^ 1 0USAPhO 2021, problem A3. A simple classical model of an electron.
[3] Problem 22 (USAPhO 2007). This is a rewrite of USAPhO 2007, problem B2, which has several
typos and ambiguities. In this problem, we will model diamagnetism in materials classically. For
simplicity, we will assume that each atom consists of a single electron of charge −e and mass me,
orbiting a single proton of charge e and mass mp ≫ me in a circle of radius R.
(a) Find the angular velocity ω0 of the electron’s orbit. For simplicity, you may use ω0 and R in
all of your answers below.
23
Kevin Zhou Physics Olympiad Handouts
(b) When we average over many orbits of the electron, it is effectively a small current loop, which
produces the field of a magnetic dipole moment. Find the magnitude m of this dipole moment.
We model a diamagnetic substance with N atoms to have all atoms oriented in the xy plane, with
half of them orbiting clockwise and the other half orbiting counterclockwise when viewed looking
down along the z-axis. In this state, the total magnetic moment cancels out. Next, an external
magnetic field B0 ẑ is slowly turned on over a long time ∆t. You may assume that B0 is small.
(c) For counterclockwise orbits, find an approximate expression for the total work done on the
electrons by the induced field during this process.
(d) For counterclockwise orbits, the final angular velocity is ω = ω0 + ∆ω and the final orbit
radius is R′ = R + ∆R. Find ∆ω/ω0 and ∆R/R to first order in B0.
(e) To first order in B0, find the total magnetic moment of the material, and its direction.
Solution. (a) By equating the electrostatic force to the centripetal force, we have
ω0 =
s
e2
4πϵ0meR3
.
(b) The effective current loop carries an average current e/(2π/ω0), and has an area of πR2. Thus,
we have
m =
eω0R2
2
.
(c) The induced electric field at the radius of the orbit is
E =
1
2πR
dΦ
dt
=
B0R
2∆t
so that the work done on the electrons is approximately
W ≈ eE(ω0R)∆t =
eω0B0R2
2
.
Here we have approximated ω0 and R as constant during the process. Of course, they might
change a bit, but this would give a higher-order correction, and we’re considering small B0.
(d) Since the magnetic field changes slowly, the orbit stays circular. We thus have
meω2
R′
=
e2
4πϵ0R′2
+ eR′
ωB0.
This result can be rewritten as
ω2
R′
−
ω2
0R3
R′2
=
eR′ωB0
me
.
Now, we’re working to first order in B0, and the right-hand side is already proportional to B0.
We can thus approximate R′ ≈ R and ω ≈ ω0 there, and then divide through by ω2
0R, giving
ω2
ω2
0
R′
R
−
R2
R′2
≈
eB0
meω0
.
24
Kevin Zhou Physics Olympiad Handouts
Expanding the left-hand side to first order in small changes gives, by the binomial theorem,
2
∆ω
ω0
+ 3
∆R
R
≈
eB0
meω0
.
Next, let’s consider the work done. Equating it to the change in energy gives
W = −
e2
4πϵ0R′
+
e2
4πϵ0R
+
1
2
meR′2
ω2
−
1
2
meR2
ω2
0
which, by our earlier expression for ω0, is equivalent to
W = −
meω2
0R3
R′
+
1
2
meR2
ω2
0 +
1
2
meR′2
ω2
.
Using our result from part (c) and dividing through by mR2ω2
0 gives
eB0
2meω0
≈ −
R
R′
+
1
2
+
1
2
R′2ω2
R2ω2
0
≈ 2
∆R
R
+
∆ω
ω0
.
Comparing this to our other equation, we conclude that to first order,
∆R
R
≈ 0,
∆ω
ω0
≈
eB0
2meω0
.
This is a bit harder than the original USAPhO problem, where you are simply told to assume
∆R = 0. As you can see, that fact can actually be derived directly.
(e) If you repeat the reasoning for the clockwise orbits, everything stays the same except that
∆ω has opposite sign, which means that for both sets of orbits, ∆m has the same sign. As a
result, the total magnetic moment becomes
mtot = N
e2R2B0
4me
.
It is directed against the applied field.
You might have some residual objections to this derivation. For instance, why are the electrons
orbiting in circles, with angular velocity oriented with and against the field? For the electrons
orbiting with m aligned with B, why don’t they simply flip over to lower their energy?
These are legitimate questions, and the truth is that any “classical” derivation of magnetic
phenomena doesn’t really work; you fundamentally need quantum mechanics. At best, our
classical argument can give us a rough estimate of the size of the effect. For more discussion,
see E8, and for an alternative derivation which uses some quantum mechanics, see R3.
[5] Problem 23.  h 1 0APhO 2013, problem 3. A solid question involving classical magnetic moments,
which gives some intuition for the quantum behavior.
5 Superconductors
There are many tough Olympiad problems involving superconductors. Superconductors can be a
bit intimidating at first, but they actually obey simple rules.
25
Kevin Zhou Physics Olympiad Handouts
Idea 7
An ideal conductor has zero resistivity, which implies that the magnetic flux through any
loop in the conductor is constant: attempting to change the flux instantly produces currents
that cancel out the change. However, the flux can be nonzero.
A superconductor is an ideal conductor with the additional property that the magnetic field
in the body of the superconductor is exactly zero, no matter what the initial conditions are;
once an object becomes superconducting it forces all the existing flux out. This is known as
the Meissner effect. It further implies that all the current in a superconductor is confined to
its surface, and that the normal component of the magnetic field B⊥ is zero on the surface.
Many problems involving superconductors don’t even use the Meissner effect, so they would
also work for ideal conductors.
Example 8: PPP 153
A superconducting uniform spring has N turns of radius R, relaxed length x0, and spring
constant k. The two ends of the spring are connected by a wire, and a small, steady current
I is made to flow through the spring. At equilibrium, what is the change in its length?
Solution
This question really is about ideal conductors, not just superconductors. The additional
superconductivity property would tell us about the field inside the wires themselves (not the
loops that the wires form), and thereby about some small screening currents on the surfaces of
the wires. This is not important because the wires are thin compared to the spring as a whole.
In order to find the equilibrium length xeq, we can use the principle of virtual work. We
compute how the energy changes if we slightly perturb the system. At equilibrium, this
change in energy should be zero.
We have B = µ0NI/x, so the magnetic field energy is
U =
B2
2µ0
V =
AI2
x
, A =
µ0πR2N2
2
.
Naively, this means the magnetic field energy decreases as x increases, so the spring would
like to stretch. But this makes no sense, because we know that parallel currents attract,
squeezing the spring. We have to recall that the spring is an ideal conductor, so when it is
stretched or squeezed, the current changes to keep the flux the same. The flux is
ΦB = N(πR2
)B ∝
I
x
so we have
I(x) = I
x
xeq
, U(x) =
AI2
x2
eq
x.
26
Kevin Zhou Physics Olympiad Handouts
The other energy contribution is k(x − x0)2/2, so setting the derivative of energy to zero,
AI2
x2
eq
= k(x0 − xeq).
Since the current is small, x0 ≈ xeq, so we can replace xeq with x0 on the left-hand side,
giving the answer,
xeq = x0 −
AI2
x2
0k
.
As a sidenote, the original formulation of this question involved an external voltage source
forcing the current I to be constant. However, in this case using energy conservation is more
subtle because one has to account for the work done by the voltage source. Here we used
a superconductor, which keeps the flux constant, so that the spring can be thought of as
an isolated system. The final answers are the same, since in both cases we have the same
magnetic forces, which determine the spring’s compression.
