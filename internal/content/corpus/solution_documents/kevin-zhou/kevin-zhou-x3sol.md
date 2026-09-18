---
id: solution-document-kevin-zhou-x3sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/X3Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-x3-ex001]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/X3Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Modern III: Matter, Astro, and Cosmo
Chapters 35 and 36 of Blundell cover astrophysics, and chapter 15 of Krane covers cosmology. For
solid state physics, see chapter 49 of Halliday and Resnick, chapter III-14 of the Feynman lectures, or
section 5.3 of Griffiths’ Introduction to Quantum Mechanics (3rd edition). For more on magnetism,
see chapters II-34 through II-37 of the Feynman lectures. For a detailed introduction to the physics
of stars and compact objects, see chapters 10 and 16 of An Introduction to Modern Astrophysics
by Carroll and Ostlie. (Carroll and Ostlie is also a great introduction to astrophysics in general,
accessible with just Olympiad physics knowledge.) There is a total of 82 points.
1 Condensed Matter
Condensed matter is a huge field, which arguably contains the majority of all physicists. However,
you hear less about it in the news, and in Olympiad problems, partly because it’s not as romantic
as particle physics or astrophysics, and partly because it requires a lot of background to explain.
The problems here cover some classic condensed matter ideas. It helps to have done W1 and X1.
[5] Problem 1.   h 1 0APhO 2016, problem 3. A good question on the quantum mechanics of super-
conductivity.
[5] Problem 2.   h 1 0USA Team Selection Test 2021, problem 3. A nice question which derives the
integer quantum Hall effect using classical electromagnetism and Bohr quantization.
[5] Problem 3.   h 1 0APhO 2015, problem 1. A question on the fractional quantum Hall effect, which
is even subtler than the integer quantum Hall effect. This question is not very clearly written, and
requires a good amount of educated guessing; however, I include it to give you practice with this
type of Olympiad question, and some exposure to a very important topic of current research.
[5] Problem 4.   T 1 0IZhO 2021, problem 2. A problem on the thermodynamics of plasmas, reviewing
some material in T2.
[5] Problem 5.   h 1 0APhO 2021, problem 2. A very technical problem that fully explains how a
famous test of quantum mechanics was conducted. Also requires material from E8 and W3.
2 Stars
This section contains problems involving stars and star formation. They serve as excellent review,
as they use a mix of mechanics, electromagnetism, thermodynamics, relativity, and modern physics.
For a beautiful graphical overview of these objects, see this paper.
Example 1: PTD 44
The density of stars in the central region of the galaxy is about n = 106 pc−3, and their
speeds are about v = 200kms−1. Could an advanced civilization develop in this region?
1

Kevin Zhou Physics Olympiad Handouts
Solution
Impacts between solar systems occur frequently. For concreteness, suppose catastrophic
effects will happen to an Earth-like planet if another star passes within the equivalent of
Jupiter’s orbit, which has radius r. At such a large radius, the gravitational attraction of the
stars is negligible, so we can simply estimate the typical time between such events as
t ∼
1
n(πr2)v
∼ 2.4 × 106
years.
Some argue that this is too short a time for advanced civilization to develop, so the center
of the galaxy is outside of the so-called galactic habitable zone.
Example 2: CPhO 2013.3
For stars not too much heavier than the Sun, the luminosity scales with mass as L ∝ M3.5.
If all of these stars release the same fraction α of their rest mass energy by nuclear burning,
then how does the lifetime of the star scale with M?
Solution
The amount of energy available is αM. The lifetime is thus
τ =
E
L
∝ M−2.5
so heavier stars live shorter lives. Incidentally, the luminosity scales as L ∝ R2T4 by the
Stefan–Boltzmann law. By considering the details of the interior of the star, we can find how
all of these quantities scale with mass, a principle known as stellar homology.
[3] Problem 6.   ^ 1 0USAPhO 2018, problem B3.
[5] Problem 7.   h 1 0IPhO 2012, problem 3. This elegant and tricky problem covers the early stages
of star formation, and serves as a review of T1.
[5] Problem 8.   r 1 0GPhO 2017, problem 1. This problem covers the physics of fusion in main
sequence stars, relying on X1 and X2.
[5] Problem 9.   h 1 0IPhO 2007, problem “pink”. This problem covers binary stars, with a strong
emphasis on data analysis methods, as covered in P2.
[5] Problem 10.   h 1 0APhO 2015, problem 2. A nice but somewhat hard to read problem on the
aurora and the solar wind.
Solution. See the official solutions. There are some minor typos in it, as pointed out here.
3 Compact Objects
Compact objects such as white dwarfs and neutron stars must be handled with quantum statistical
mechanics, as introduced in X1.
2

Kevin Zhou Physics Olympiad Handouts
[4] Problem 11.   ^ 1 0Do the following JPhO problem. This pedagogical problem reviews the physics
of white dwarf stars, deriving the Chandrasekhar limit, using the techniques of X1.
Solution. See the official solutions here.
[3] Problem 12.   ^ 1 0USAPhO 2024, problem A2. Rough estimates of the dynamics of stars and
white dwarfs.
Remark
The estimates performed in the previous problems are quite rough, basically treating the
white dwarf as being homogeneous, with uniform density and pressure. In reality, we have
∇p = −ρg just like in any situation in hydrostatic equilibrium, where the degeneracy
pressure p is determined by the local density n. It’s like the gaseous atmospheres you dealt
with in T1, but with a different equation of state.
If you additionally allow the white dwarf to have a net charge, then there is an additional
contribution from the electrostatic force, and the resulting equations are called the Thomas–
Fermi equations of structure. They can also be used to model many-electron atoms, when
you can neglect the discreteness of the electrons.
[5] Problem 13.   ^ 1 0GPhO 2016, problem 3. This problem covers the physics of intense magnetic
fields in neutron stars, using the results of E8 and X1.
[3] Problem 14. The Bekenstein–Hawking formula states that a black hole has an entropy of
S =
A
4
where A is the area of its event horizon. The radius of an uncharged, nonrotating black hole is
R = 2M.
In these equations, ℏ, c, and G have all been set to one. In P1, we covered IPhO 2007, problem
“blue”, which is essentially about restoring those dimensionful factors. Here we will instead get some
more insight into these results.
(a) Compute the temperature and heat capacity of such a black hole.
(b) Two uncharged, nonrotating black holes begin very far apart from each other, then merge
into a single black hole, emitting gravitational waves in the process; assume there is no initial
angular momentum, so the final black hole is nonrotating as well. Find the maximum possible
efficiency of this process, defined as the fraction of the initial energy that is converted into
gravitational waves, for any set of initial black hole masses.
(c) The most interesting thing about the black hole entropy formula is that it scales with area,
while most ordinary entropies scale with volume. Here’s a famous but very handwavy argument
for this claim, first given by Bekenstein in 1973. When a black hole absorbs a photon, its
entropy increases because the photon could have been absorbed in different places on the
event horizon. In the limiting case where the photon’s wavelength matches the Schwarzschild
radius, the absorption takes place everywhere, so the only entropy increase is by 1 “bit”,
namely whether absorption happened at all. Finish up this argument to conclude that S ∝ A.
3

Kevin Zhou Physics Olympiad Handouts
Black holes are in some sense the entities with the maximum possible entropy, and it has been
estimated that the vast majority of the entropy of the universe is in supermassive black holes.
Solution. (a) The temperature can be found with T = dE/dS, and the energy is simply E = M
since we’re setting c = 1. We have S = A/4 = πR2 = 4πM2, giving M =
p
S/4π. Thus
T =
1
2
√
4πS
=
1
8πM
.
The heat capacity can be found with C = dE/dT. Using our answer for T, we have E =
1/(8πT), giving a heat capacity of
C = −
1
8πT2
= −8πM2
.
(b) By the second law of thermodynamics, the total change in entropy ∆S must be greater than
or equal to zero. At the maximum efficiency, ∆S = 0 so the total entropy of the two black
holes must add up to the entropy of the final black hole:
S1 + S2 = Sf =⇒ M2
1 + M2
2 = M2
f .
All the gravitational energy is included in the mass of the black holes, so the energy that went
into the gravitational waves will be Ew = M1 + M2 − Mf and M1 + M2 is the initial energy,
which gives an efficiency of
η = 1 −
p
M2
1 + M2
2
M1 + M2
.
This is maximized when M1 = M2, giving
η = 1 −
√
2
2
= 0.29.
(c) If we have λ ∼ R, then the energy of the photon must be E ∝ 1/R. The change in radius
of the black hole is dR ∝ dM = E. So, to increase the entropy by one bit, we increment the
radius by dR ∝ 1/R, which is equivalent to incrementing the area dA ∝ RdR by a constant
amount. We thus conclude that S ∝ A.
[4] Problem 15. @ 1 0USA Theory Test Selection Test 2022, problem 3. Rough estimates of gravita-
tional wave emission.
[3] Problem 16. NBPhO 2017, problem 4. Rough estimates of gravitational wave detection.
Remark
The discovery of gravitational waves by LIGO has been one of the most important results
this decade, so it’s naturally a popular question topic. Once you finish the above problems,
you can check out a few others with a different take on the same idea. GPhO 2016, problem
2 does a rougher treatment of gravitational wave emission, while IPhO 2018, problem 1 gives
a more accurate treatment using more of the language of general relativity. For another way
to estimate gravitational wave emission, see section 9.3 of The Art of Insight, and for some
followup questions, see this paper.
4

Kevin Zhou Physics Olympiad Handouts
Remark
In 1931, after building a sensitive short-wave radio receiver, Karl Jansky heard an unusual
noise on his receiver from a direction that moved across the sky about once a day. He
therefore initially thought it was from the Sun. However, over time he found that the
direction of the noise moved across the sky only once every 23 hours and 56 minutes.
How is this possible? Note that the length of a day is the time it takes for the same side of
the Earth to face the Sun again; it depends on both the Earth’s spin and its orbital motion
about the Sun. The period of the Earth’s spin alone, the so-called sidereal period, is only
23 hours and 56 minutes. Thus, a signal with this period indicates an origin from outside
the solar system. Jansky later found that the source was the center of the galaxy. Today,
we know that the center of the galaxy has a number of strong radio sources, including the
supermassive black hole Sagittarius A*. To learn about the discovery of pulsars, see this talk.
4 Cosmology
Cosmology is a rather technical topic because a proper treatment requires general relativity, but
one can derive special cases of some of the results using just Newtonian gravity.
[2] Problem 17.   T 1 0AuPhO 2014, problem 14. A quick problem on the basics of dark matter and
galaxy measurements.
[5] Problem 18.   h 1 0GPhO 2022, problem 1. More about dark matter.
[5] Problem 19.   h 1 0APhO 2016, problem 2. This straightforward problem introduces the basic
equations of cosmology, such as the Friedmann equation.
5
