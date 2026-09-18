---
id: kevin-zhou-xrev-p014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-xrev-p014
solution_type: author
source_document: solution-document-kevin-zhou-xrevsol
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/XRevSol.pdf."
---

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
