---
id: solution-document-kevin-zhou-xrevsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-xrev-p001, kevin-zhou-xrev-p002, kevin-zhou-xrev-p004, kevin-zhou-xrev-p014, kevin-zhou-xrev-p024]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/XRevSol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Special Topics Review
There is a total of 92 points.
1 Thermodynamics
[3] Problem 1. A photon of energy E bounces between two mirrors separated by a distance L.
(a) If the mirrors are slowly moved together to a distance L/2, find the final energy E by consid-
ering the blueshift the photon experiences at every collision.
(b) Check this result agrees with the adiabatic theorem.
(c) Using your result, infer the value of γ for a one-dimensional photon gas. Can you also infer
the value of γ for a d-dimensional photon gas?
Solution. (a) If the left mirror has speed v, then the Doppler shift factor on every reflection is
1 + 2v/c, so ∆E = (2v/c)E because E = ℏω. We also have ∆x = −(2x/c)v, which implies
∆E
∆x
= −
E
x
.
Treating this as a differential equation dE/dx = −E/x shows that Ex is conserved. (Note that
the adiabatic theorem works fine in this case, because the photon is always moving quickly
relative to the walls, so every collision has a small effect.)
Another valid, equivalent approach would be to note that the energy gets an overall Doppler
shift of (1 + 2v/c)N where N is the number of collisions with the moving wall, and compute
N directly.
(b) The adiabatic invariant is I
pdx =
E
c
(2L) ∝ Ex
giving the same result, using E = pc.
(c) The pressure exerted by each photon is
P =
∆p
∆t
=
2E/c
2L/c
=
E
x
.
Therefore, Px2 is constant which gives γ = 2. This is exactly as expected, since Cv = kB.
In d dimensions, much of the same reasoning holds. The quantity Ex is still invariant,
where x is the side length of, say, a cube. However, the pressure is now P ∝ E/V . Then
PV x = PV 1+1/d is constant, so γ = 1 + 1/d. For example, when d = 3 we have γ = 4/3, as
we also found in T1 and T2 in different ways.
Note that the reasoning here works equally well if you don’t know about photons, because
electromagnetic waves redshift and blueshift in the same way. By using this reasoning, i.e. by
thinking about how successive Doppler shifts change the frequency of light, Wien was able to
derive the original form of Wien’s displacement law.
1

Kevin Zhou Physics Olympiad Handouts
[3] Problem 2. Let n be the local density of a gas of particles. If this density is nonuniform, it will
tend to be smoothed out by diffusion, which produces a particle current
J = −D∇n
with units of particles per second per unit area. This is a continuity equation, as explained in T2,
and D is called the diffusion coefficient. In addition, we know from M7 and T1 that each particle
in such a gas will experience a drag force from the others. As a result, when a constant force F is
applied to one, its terminal velocity satisfies F = µv.
(a) Suppose the particles are placed inside a potential V (r). Write down the contribution to the
particle current due to the resulting force, neglecting diffusion.
(b) In thermal equilibrium, the particle current produced by the force, which pulls the particles
to lower potential, balances the particle current produced by diffusion, which spreads them
out. Assuming the temperature is T, find a relation between D and µ.
Solution. (a) The force is F = −∇V , which means v = −(∇V )/µ. The particle current is
J = nv = −
n
µ
∇V.
(b) By setting the sum of the two currents to zero,
n
µ
∇V = −D∇n.
Rearranging gives
1
µD
∇V = −∇(logn).
On the other hand, we know that n(r) ∝ e−V (r)/kBT because the steady state must obey the
Boltzmann distribution. Then we have logn = −V/kBT + const, which means
kBT = µD.
This result is also derived in IPhO 2023, problem 1, which you can see for comparison.
Remark
The result of problem 2 is called the Einstein relation, and is one of the four major
results Einstein derived in his “annus mirabilis” of 1905, the others being special rela-
tivity and E = mc2, and explaining the photoelectric effect with photons. So why is
this result so important? It’s because at the time, it was not yet completely accepted
that matter was made of atoms. As you saw in T1, the size of a single atom often
drops out of kinetic theory calculations. At the time, many took this to mean that
atoms were a fictitious calculational tool, like how one does integrals by summing over
intervals of length ∆x, then gets a result independent of this fiducial length by taking ∆x → 0.
But doesn’t the number of atoms N appear all the time in basic thermodynamics, like the
ideal gas law? Yes, but always in the combination nR = NkB. Thus, information about
the size of a single atom is equivalent to information about kB. Einstein’s relation is useful
2

Kevin Zhou Physics Olympiad Handouts
because it explicitly gives us kB in terms of the separately directly measurable quantities D,
µ, and T. It was one of the first unique, quantitative predictions of kinetic theory.
[4] Problem 3 (Physics Cup 2018). Estimate the mean free path of a heavy black sphere of mass m
and radius R in vacuum at temperature T. Here, we define the mean free path as the typical distance
it takes for the velocity vector of the sphere to turn by an angle π/2. Assume that kBTR ≳ ℏc.
(Hint: for a random walk where steps of size a are taken per time τ, the average overall displacement
after time t ≫ τ is approximately a
p
t/τ.)
Solution. By the equipartition theorem, the typical speed v0 of the sphere satisfies
mv2
0 ∼ kBT.
The velocity vector is rotated by impulses from the photons, as they are absorbed or emitted by
the sphere. Thus, we need to estimate the rate of collisions as well as the typical impulse of each
one. The typical energy of a photon in blackbody radiation of temperature T is E ∼ kBT by the
equipartition theorem again, which means each absorption or emission changes the velocity of the
sphere by
∆v =
∆p
m
=
E
mc
∼
kBT
mc
.
On the other hand, we have
v0 ∼
r
kBT
m
which is much larger than ∆v since we are assuming the sphere is heavy. Using the provided hint,
the number of photons required to change the velocity significantly is order
N ∼
  v0
∆v
 2
∼
mc2
kBT
.
Now we need to find the rate at which photons are absorbed or emitted. In equilibrium, these two
rates will be equal, so we can focus on emission, which is easier to handle. The power emitted from
the sphere is
P = 4πR2
σT4
and we already know the photons emitted have typical energy kBT, so the time per photon is
τ ∼
kBT
P
∼
kB
σR2T3
.
Combining our results, the mean free path is
λ ∼ v0Nτ ∼
k
1/2
B m1/2c2
σR2T7/2
.
Incidentally, you might wonder how we used the assumption kBTR ≳ ℏc. This assumption is
equivalent to saying that the wavelength of a typical photon is smaller than the size of the sphere
itself. We used this implicitly by thinking of the photons as little bullets hitting the sphere. If it
weren’t true, then we would have to account for their wave nature.
3

Kevin Zhou Physics Olympiad Handouts
[3] Problem 4. Consider a layer of the atmosphere with density ρ, pressure P, adiabatic index γ, and
density and pressure gradients dρ/dz and dP/dz. Suppose that a small parcel of air in this layer
acquires a small upward velocity. Under certain conditions, the parcel of air will begin oscillating
in height, performing simple harmonic motion. Neglecting drag and heat transfer between the
parcel of air and its surroundings, find the angular frequency ω of this motion. This is called the
Brunt–Vaisala or buoyancy frequency.
Solution. Let the parcel have fixed mass m. At its initial position, the parcel has volume V and
density ρp, which is equal to the local atmospheric density ρ. After the parcel moves up by ∆z, it
has volume V ′ and density ρ′
p, and the local atmospheric density is ρ′. Then the net force on the
parcel is the buoyant force minus the weight,
F = (ρ′
− ρ′
p)gV ′
and we have m = ρ′
pV ′. Thus, the acceleration is
a =

ρ′
ρ′
p
− 1

g.
For small displacements, we have
ρ′
≈ ρ +
dρ
dz
∆z, ρ′
p ≈ ρ +
dρp
dz
∆z
so that at first order in ∆z, the acceleration is
a =
g
ρ

dρ
dz
−
dρp
dz

∆z.
To calculate dρp/dz, note that since the parcel expands and contracts adiabatically, Pp ∝ ργ
p.
Moreover, the pressure of the parcel is always equal to that of the surrounding atmosphere, so
P ∝ ργ
p
which for small displacements means
1
P
dP
dz
= γ
1
ρ
dρp
dz
.
Plugging this into the acceleration equation gives
a = g

1
ρ
dρ
dz
−
1
γP
dP
dz

∆z
which implies
ω =
s
g

1
γP
dP
dz
−
1
ρ
dρ
dz

=
r
g
dlog(P1/γ/ρ)
dz
.
When the argument of the square root becomes negative, there is no frequency of oscillation; instead,
the parcel just keeps on going. That describes an atmosphere unstable against convection. As a
check, marginal stability occurs for an adiabatic atmosphere, where P ∝ ργ. In realistic atmospheres,
you wouldn’t expect to see these kinds of oscillations because of damping effects, but they provide
a characteristic timescale for dynamic processes.
4

Kevin Zhou Physics Olympiad Handouts
[3] Problem 5.   ^ 1 0USAPhO 2021, problem B2. A conceptual problem on methods of heat transfer.
[3] Problem 6.   ^ 1 0USAPhO 2019, problem B2. A useful problem for getting comfortable with
numbers and estimates in astronomy.
[3] Problem 7.   ^ 1 0USAPhO 2022, problem B1. A data analysis problem about a nonideal gas.
[3] Problem 8.   ^ 1 0USAPhO 2024, problem B2. Two exercises on the heat capacity of solids.
[3] Problem 9.   h 1 0INPhO 2019, problem 6. A thermodynamic cycle with a nonideal gas.
[5] Problem 10.   h 1 0IPhO 2011, problem 2. A problem on an electrified soap bubble, which combines
electrostatics, thermodynamics, and surface tension.
2 Relativity
[4] Problem 11.   T 1 0IPhO 1998, problem 3. A great problem on a real controversy in physics, which
also gives you practice working with real data.
[4] Problem 12.   T 1 0EuPhO 2024, problem 2. A problem on visual perception in special relativity.
Note that in part (b), when the problem asks about what Alice “sees”, it means what she sees from
light reaching her eyes.
[4] Problem 13 (Physics Cup 2018). A spaceship travels with a constant proper acceleration g along
a straight line. At a certain moment, it launches two missiles in the direction of its motion, with
speeds v and 2v. Find the proper time interval in the spaceship between catching up to the first
and to the second missile.
Solution. See the official solutions here.
[2] Problem 14. In classical physics, light waves do not interact with each other, but they can due to
quantum mechanical effects. Suppose two photons traveling in opposite directions scatter off each
other. Initially the photons have wavelengths λ1 and λ2. One of the two outgoing photons exits at
an angle θ to the first incoming photon. Find its wavelength λ in terms of λ1, λ2, and θ.
Solution. We aren’t told anything about the other outgoing photon, so a direct solution would
require introducing several variables to describe it, which is messy. We can avoid this using four-
vectors. Let the incoming photons have four-momenta pµ
1 and pµ
2, and let the outgoing photons
have four-momenta pµ and p′µ. Then we can neatly eliminate p′ using
p′2
= 0 = (p1 + p2 − p)2
= 2(p1 · p2 − p1 · p − p2 · p)
since photons are massless. Using E = h/λ and plugging in the four-momenta, we have
p1 · p2 =
2h2
λ1λ2
, p · (p1 + p2) =
h2
λ

1 − cosθ
λ1
+
1 + cosθ
λ2

and solving for λ yields
λ =
λ1(1 + cosθ) + λ2(1 − cosθ)
2
.
As a check, we get back λ1 when θ = 0, corresponding to no collision.
5

Kevin Zhou Physics Olympiad Handouts
[3] Problem 15 (MPPP 195). The pion π+ is a subatomic particle with mass mπ. In one of its possible
decay modes, it decays into a positron e+ of mass me and an electron-neutrino νe of negligible mass.
What is the minimum speed of the pion if, following its decay, the positron and neutrino move at
right angles to each other? How does it simplify in the limit me ≪ mπ?
Solution. Let the pion have energy Eπ and momentum pπ, with similar notation for the electron
and neutrino. We know that
m2
π = E2
π − p2
π.
On the other hand, by energy and momentum conservation,
Eπ = Ee + Eν, pπ = pe + pν
and plugging this in above gives
m2
π = (Ee + Eν)2
− (pe + pν) · (pe + pν).
Since the positron and neutrino move at right angles to each other, this simplifies to
m2
π = E2
e + 2EeEν + E2
ν − p2
e − p2
ν = m2
e + m2
ν + 2EeEν.
Since the neutrino’s mass is negligible,
EeEν =
m2
π − m2
e
2
.
Minimizing the speed of the pion is equivalent to minimizing its energy Eπ. On the other hand,
the equation above states that the geometric mean of Ee and Eν is fixed. Thus, the minimum
arithmetic mean occurs when they are equal, in which case
Eπ = 2
p
EeEν =
p
2(m2
π − m2
e).
We also know that
Eπ =
mπ
√
1 − v2
so solving for v gives
v ≥
s
m2
π − 2m2
e
2m2
π − 2m2
e
.
In the limit me ≪ mπ, this reduces to v ≥ c/
√
2.
[3] Problem 16.   ^ 1 0USAPhO 2023, problem B3. A nice, qualitative problem on supernova neutrinos.
[2] Problem 17 (Purcell 6.68). Consider two electrons moving side-by-side with parallel velocities,
with speed v and separation r. We wish to compute the three-force between the electrons.
(a) Compute this force by working in the electrons’ rest frame and Lorentz transforming back to
the lab frame.
(b) Compute this force by using the electric and magnetic fields of a moving charge, and verify
the answer agrees with that of part (a).
(c) What happens to the three-force as v → c?
6

Kevin Zhou Physics Olympiad Handouts
Solution. (a) The answer in the rest frame is ke/r2, so transforming back gives ke/γr2. (For
transformations of three-forces, it’s helpful to remember that the force is always largest in the
rest frame of the particle.)
(b) In this frame, the fields of one charge at the other are E = γke/r2 and B = vE/c2. Then
F = eE − evB =
eE
γ2
=
1
γ
ke
r2
,
which matches the result of part (a).
(c) In this limit, the force goes to zero. The electric and magnetic forces balance, as you saw in a
question in E4.
3 Waves
[2] Problem 18 (OPhO 2024). A string of length L is attached at its endpoints to walls, with a
fixed tension. Initially, it is vibrating at its fundamental frequency with a small amplitude A. A
frictionless finger, initially at the right wall, slowly slides towards the left, flattening the oscillation
as it goes. When the vibrating part of the string has length L/2, find the final amplitude.
Solution. This is an application of the adiabatic invariant, mentioned in M4. Imagine the string
is actually rotating like a jump rope, and apply conservation of angular momentum. The angular
momentum is proportional to mωA2, where ω is the angular frequency of the oscillation, and m is
the amount of mass oscillating. Since the tension is fixed, the wave speed is fixed, so ω ∝ 1/L. On
the other hand, since the mass density is fixed, m ∝ L. Then mω is independent of L, so A is as
well. The final amplitude is therefore equal to the initial amplitude.
[3] Problem 19. NBPhO 2015, problem 2. A very nice combined interference and optics problem.
[2] Problem 20 (Crawford 4.15). Consider a jug with a large volume V , along with a thin neck of
length ℓ and area A. The lowest frequency standing wave can be excited by blowing across the neck.
Such a system is called a Helmholtz resonator. Naively, the corresponding wavelength would be
four times the length of the jug, but it is observed to be much larger. (Try it at home!)
Since the jug has a neck, the standing wave profile looks very different from a standard profile.
Most of the air motion is within the neck; the body of the jug serves as a large air reservoir that
acts as a spring pushing back against this motion. The frequency can be quite low, because this
reservoir is large.
(a) Show that if the air in the neck moves by a distance x, the restoring force is
F = −
γP0A2x
V
where P0 is the original pressure in the jug, and γ is the adiabatic index.
(b) Show that this mode has an angular frequency of
ω =
v
ℓ
r
Vneck
V
, Vneck = Aℓ
where v is the speed of sound of air. It is significantly lower than the naive answer ω ∼ v/ℓ
one would get by considering standing waves in a cylinder shaped like the jug.
7

Kevin Zhou Physics Olympiad Handouts
(c) See if this is roughly consistent with a real jug (e.g. a 1 liter soda bottle). Does the frequency
vary as you’d expect as you add water to the jug? If you feel musically inclined, can you find
how to excite higher frequencies?
Solution. (a) Since PV γ is constant, ∆P/P = −γ∆V/V . Since ∆V = Ax, we have
F = −A∆P =
γP0A2x
V
,
as desired.
(b) Consider the air originally in the neck. It oscillates back and forth, feeling an “effective spring
constant” keff = γP0A2/V by the result of part (a), and it has mass m = ρAℓ. Thus,
ω =
r
keff
m
=
s
γP0A
ρV ℓ
=
1
ℓ
s
γP0
ρ
r
Aℓ
V
which matches the desired result.
(c) Just try it yourself! In my personal experience, this does match pretty well with real jugs. I
can barely manage to excite the fundamental, but wind instrument players might do better.
Remark
The results of problem 20 can also be used to describe window buffeting, the annoying
“whuppa, whuppa, whuppa” sound you get when you slightly open one window of a rapidly
moving car. Suppose the opening has area A and the car has volume V . Then the incoming
air moves quickly up to a depth ℓ ∼
√
A in your car, and this region functions as the “neck”.
The resonant frequency is therefore f ∼ vA1/4/V 1/2. You can stop the buffeting by opening
the window more, increasing A so the frequency is too high to be efficiently driven by the air.
Remark
The udu is a Nigerian musical instrument which can be modeled as a Helmholtz resonator
with two holes. The holes have different sizes, so you get a frequency f1 if you cover one
hole, and f2 if you cover the other.
You can get a third frequency by hitting the instrument with both holes open. To find that
third frequency, note that a Helmholtz resonator is like a spring-mass system, where the
“spring” is the air in the instrument, and the “mass” mi is the air near hole i, which moves
back and forth. When both holes are open, we effectively have a spring with masses attached
at both ends, which oscillates according to the reduced mass 1/µ = 1/m1 + 1/m2. Since
fi ∝ 1/
√
mi, the third frequency is
p
f2
1 + f2
2 .
[3] Problem 21.   W 1 0USAPhO 2008, problem A4. A neat Doppler shift problem that also tests your
data analysis skills.
[4] Problem 22.   m 1 0INPhO 2020, problem 4. A nice and tricky problem on the two-dimensional
Doppler effect. (It is essentially a translation of a problem on the 2013 Russian Physics Olympiad.)
[3] Problem 23.   ^ 1 0USAPhO 2022, problem A3. A great problem on the rainbow caustic. After
you finish the problem, see here and here for some brilliant visualizations.
8

Kevin Zhou Physics Olympiad Handouts
4 Modern
[3] Problem 24. Consider a typical small LC circuit, with L = 10−7 H and C = 10−11 F.
(a) If the circuit is at zero temperature, estimate the voltage uncertainty across the capacitor.
(b) Do the same if the circuit is at room temperature.
Today, some of the leading quantum computing hardware is based on such circuits. Because thermal
fluctuations would ruin the desired quantum mechanical effects, the circuit must be cooled so that
kBT ≪ ℏω, which corresponds to a small fraction of a degree. When you see pictures of quantum
computers, most of what you’re looking at is the fridge!
Solution. (a) In this problem, it’s not clearhow to use Heisenberg’s uncertainty principle, because
we don’t know what the “position” and “momentum” for an LC circuit are. (It turns out the
position variable is the flux through the inductor and the momentum variable is the charge
on the capacitor, but this is hard to guess with high school knowledge.) But we do know that
an LC circuit behaves just like a harmonic oscillator, so when it is quantized, it has energy
ℏω/2 in the ground state. This must manifest in terms of voltage and current uncertainties,
ℏω ∼ C(∆V )2
+ L(∆I)2
where we drop all constants for brevity. We know from an example in X1 that for the harmonic
oscillator, these two contributions are equal. Therefore, by order of magnitude we have
∆V ∼
r
ℏω
C
, ω =
1
√
LC
.
If you didn’t manage to do the steps above, this final result can also be found by pure
dimensional analysis. Plugging in the numbers gives ∆V ∼ 10−7 V, which is surprisingly high!
(b) At zero temperature, the energy in the circuit is of order ℏω, while at room temperature, it’s
kBT by the equipartition theorem. Plugging in the numbers, we have
kBT
ℏω
= 4 × 104
.
Since energy is proportional to V 2, the voltage uncertainty is 200 times higher,
∆V ∼ 2 × 10−5
V.
This is the typical noise you expect to see on a good oscilloscope. In electrical engineering,
this kind of thermal noise is called “Johnson noise”.
[2] Problem 25. INPhO 2013, problem 2. A short problem on X-ray diffraction.
To finish up, here are three neat questions that each cover a broad range of topics.
[5] Problem 26.   h 1 0IPhO 2009, problem 3. Estimating the size of a star from scratch.
[5] Problem 27.   h 1 0IPhO 2021, problem 3. Molecular fluorescence and optical lattices.
[5] Problem 28.   h 1 0USA Team Selection Test 2021, problem 2. A full analysis of a real dark matter
detector.
9

Kevin Zhou Physics Olympiad Handouts
Remark
Problem 26 estimates the size of a star using a rough treatment of the nuclear physics
we know applies at its core. When you think about it, it’s amazing that this is possible
at all. There is essentially no way to directly probe what’s going on inside any star. We
can basically only measure the size of the star, its rough age, and the temperature of its
surface. But the models work! This was the result of generations of painstaking effort,
which stimulated progress in both nuclear and particle physics. To learn the history of solar
modeling, see this article for the early days and this article for the eventual triumph. For
more estimates of the sizes of astronomical objects, see this article.
It is even more remarkable when you realize that this sort of story applies to essentially all
of the dozens of known types of astronomical objects. For most of these, astronomers can
directly measure only the electromagnetic spectrum and its variation over time, but that little
is enough to develop and test detailed physical models. Most people think astronomy is very
concrete, because they constantly see stars in the night sky, and flashy “artist’s impression”
graphics on the internet. But the field is actually extremely theoretical, with every insight
won through extensive calculation.
10
