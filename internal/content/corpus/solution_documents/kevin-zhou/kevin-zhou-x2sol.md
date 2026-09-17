---
id: solution-document-kevin-zhou-x2sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-x2-ex001, kevin-zhou-x2-ex002, kevin-zhou-x2-p001, kevin-zhou-x2-p002, kevin-zhou-x2-p003, kevin-zhou-x2-p004, kevin-zhou-x2-p009, kevin-zhou-x2-p012, kevin-zhou-x2-p015, kevin-zhou-x2-p020]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/X2Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Modern II: Atoms, Particles, and Nuclei
Chapters 48, 50, 51, and 52 of Halliday and Resnick are a useful introduction. For further reading,
see chapters 12 through 14 of Krane for nuclear and particle physics, and for much more, see chapters
1 and 2 of Griffiths’ Introduction to Elementary Particles, and David Tong’s Lectures on Particle
Physics. For all problems, you can consult the periodic table. There is a total of 86 points.
1 Nuclear Decay
Idea 1
Atomic nuclei are written as A
ZX where X is the name of the element, A is the mass number
(number of neutrons plus protons), and Z is the atomic number (number of protons). Since
Z can be inferred from X, we often leave it implicit.
Idea 2
The most common nuclear decay channels are alpha decay,
A
ZX → A−4
Z−2X′
+ 4
2He
and beta decay,
A
ZX → A
Z+1X′
+ e−
+ νe.
Here, νe is a light neutral particle called an anti-electron neutrino. A variant of beta decay,
called β+ decay or positron emission, is
A
ZX → A
Z−1X′
+ e+
+ νe
where νe is called an electron neutrino, and e+ is a positron. If electrons are present, the
nuclei may also capture them, leading to the process
A
ZX + e−
→ A
Z−1X′
+ νe.
Finally, nuclei can decay from excited states by emitting photons, in gamma decay.
There are many more processes, such as inverse beta decay or double beta decay. However, the
general principles underlying which decays are allowed are simple: baryon number, electric
charge, and electron number are all conserved. In the restricted setting of nuclear processes,
baryon number = number of protons and neutrons
electric charge = number of protons and positrons − number of electrons
electron number = number of electrons and electron neutrinos
− number of positrons and anti-electron neutrinos.
1Kevin Zhou Physics Olympiad Handouts
Idea 3
The amount of energy released in a nuclear decay can be inferred from the drop in mass
energy, ∆E = (∆m)c2. A nuclear decay can only spontaneously occur if it lowers the energy
of the entire nucleus. To emphasize this point, note that at the level of individual nucleons,
β± decay involve the processes
n → p + e−
+ νe, p → n + e+
+ ν
respectively. Either of these processes could be energetically favorable inside a nucleus,
depending on its composition. But an isolated proton will never decay, because isolated
protons are lighter than neutrons.
[1] Problem 1 (Krane 12.38). Complete the following decays:
(a) 27Si → 27Al +
(b) 74As → 74Se +
(c) 228U → α +
(d) 93Mo + e− →
(e) 131I → 131Xe +
Solution. (a) 27Si → 27Al + e+ + νe.
(b) 74As → 74Se + e− + νe.
(c) 228U → α + 224Th.
(d) 93Mo + e− → 93Nb + νe.
(e) 131I → 131Xe + e− + νe.
Remark
Nuclear decay processes typically release a huge amount of energy compared to chemical
reactions, so they are typically insensitive to their chemical environment. For reference, here
are some useful energy scales to keep in mind:
kBT at room temperature ∼ 10−2
eV
chemical bonding energies ∼ 1eV
kBT at core of Sun ∼ 103
eV
rest energy of electron ∼ 106
eV
energy released in nuclear reaction ∼ 105
− 108
eV
rest energy of nucleon ∼ 109
eV
rest energy of Higgs boson ∼ 1011
eV
Many nuclear reactions release enough energy to create new electrons, but not enough to
create additional nucleons. But high-energy particle collisions, such as those intended to
2Kevin Zhou Physics Olympiad Handouts
produce Higgs bosons, have enough energy to produce many electrons and nucleons.
There are interesting exceptions to the above rules of thumb. For example, it was recently
discovered that an isotope of thorium has a nuclear transition with an energy of only ∼ 10eV.
This lucky result may allow the development of nuclear clocks, which would be much more
precise than atomic clocks. In addition, it turns out that the decay rate of 7Be can be
slightly changed by its chemical environment. That’s because Beryllium atoms have only a
few electrons, and 7Be only decays by electron capture; releasing more electrons nearby can
therefore measurably affect the decay rate. For more about that subject, see this article.
[4] Problem 2. In Gamow’s theory of alpha decay, alpha particles can escape from nuclei by quantum
tunneling. The alpha particle is bound to the nucleus by a nuclear force, which we model as a finite
square well, V (r) = −V0 for r < r1, and repelled by the Coulomb force, V (r) = k(Ze)(2e)/r = α/r.
The combination of the two creates a potential barrier the alpha particle must tunnel though. Let
the alpha particle have mass m and energy E.
(a) Using classical mechanics, calculate the time between collisions with the wall. This is also
correct in quantum mechanics; one can take the wavefunction to be a wavepacket, which really
does collide with the walls with the same frequency.
(b) In quantum mechanics, each collision has an associated amplitude to escape by quantum
tunneling. To compute this, recall from X1 that the WKB approximation states that the
wavefunction picks up a phase eiθ, where
θ =
1
ℏ
Z
pdx.
Calculate θ by integrating from r1 to r2, assuming that r1 ≪ r2 for simplicity. You should find
that θ is a complex number, indicating the wavefunction exponentially decays in the barrier.
(Hint: you will find a tricky integral, for which you should use a trigonometric substitution.)
(c) Each time the particle hits the well, the amplitude that it escapes is proportional to eiθ, and
the probability that it escapes is equal to the square of the amplitdue. Using this fact, write
down an approximate expression for the timescale τ for decay to occur.
This model is very rough, so the numeric and slowly varying prefactors should not be expected to
be accurate. But the exponential dependence of the timescale on the energy, which you should have
3Kevin Zhou Physics Olympiad Handouts
found is due to the tunneling probability scaling as e−
√
Eg/E
for some constant Eg, is by far the
most important piece, and it fits experimental results.
(d) In nuclear fusion reactions in the Sun, the process above occurs in reverse: an incoming alpha
particle (i.e. helium nucleus) needs to tunnel through the Coulomb barrier to fuse with another
nucleus. The initial energy is Boltzmann distributed as e−E/kBT , so the fusion rate is
Γ ∼
Z
dE e−
√
Eg/E
e−E/kBT
.
The integrand is the product of a rapidly rising exponential and a rapidly falling exponential.
Estimate the exponential part of the dependence of Γ on T.
Solution. (a) We have v =
p
2(E + V0)/m, so
t =
2r1
v
= r1
r
2m
E + V0
.
(b) Within the barrier, we have
p =
p
2m(E − V ) = i
p
2m(V − E).
The second turning point r2 satisfies E = α/r2. Thus, the WKB phase is
θ =
i
ℏ
Z r2
r1
r
2m
α
r
− E

dr =
i
ℏ
√
2mE
Z r2
r1
r
r2
r
− 1dr.
Since r1 ≪ r2, we can simply set r1 = 0 in the integral and let u = r/r2, leaving
θ =
i
ℏ
√
2mE r2
Z 1
0
p
1/u − 1du.
This final integral can be performed by letting u = sin2
v, giving
θ =
iα
ℏ
r
2m
E
Z π/2
0
r
1
sin2
v
− 1(2sinv cosv)dv =
iα
ℏ
r
2m
E
Z π/2
0
2cos2
v dv.
Since cosine squared averages to 1/2, this integral is π/2, so
θ =
iπα
ℏ
r
m
2E
.
(c) The timescale is approximately the time between collisions, divided by the probability of
escape per collision,
τ ∼
t
e2iθ
∼ r1
r
2m
E + V0
exp
πα
ℏ
r
2m
E
!
.
(d) The integrand is the exponential of a quantity that quickly rises and then falls, which means
almost all of the integral’s value comes from the region where −
p
Eg/E−E/kBT is maximized.
4Kevin Zhou Physics Olympiad Handouts
Carrying out the derivative, this corresponds to E ∼ E
1/3
g (kBT)2/3. Plugging this back in, we
find the integrand is of order e−(Eg/kBT)1/3
near these energies, so
Γ ∝ e−(Eg/kBT)1/3
.
This general idea for treating sharply peaked integrals is called Laplace’s method. With a
little more work, we can find the prefactor too. However, the exponential is the qualitatively
most important part because it has a very sharp dependence on T.
[3] Problem 3. Consider the process by which an electron absorbs a single photon, e− + γ → e−.
(a) Show that this process is forbidden by energy-momentum conservation. By time reversal,
emission of a single photon should be forbidden as well. This is quite puzzling, since we already
know of many processes where something like absorption or emission seems to happen.
(b) Can an electron in an isolated atom absorb a single photon? If so, why doesn’t the reasoning
in part (a) work? If not, how can atoms absorb photons at all, as described in X1?
(c) Can an isolated nucleus emit single photons? If so, why doesn’t the reasoning in part (a)
work? If not, how can gamma decay occur?
(d) Can an isolated electron absorb or emit classical electromagnetic radiation? If so, why doesn’t
the reasoning in part (a) work? If not, how can Thomson scattering (covered in E7) happen?
Solution. (a) Let c = 1 and consider the reference frame where the electron was initially at rest
with mass m. After the collision with the photon with energy and momentum equal to Eγ,
the electron will have energy m + Eγ and momentum Eγ. However, since E2 = p2 + m2, we
get m2 +2Eγm+E2
γ = E2
γ +m2, reducing to 2Eγm = 0, which is a contradiction (neither the
mass of an electron nor the energy of the photon is 0).
(b) Yes, an electron in an atom can absorb a photon. The issue in part (a) is that to absorb a
photon, the rest mass of the system absorbing must increase (which doesn’t happen for a lone
electron). When an electron is orbiting an atom, it has potential energy associated with its
interaction with the nucleus, and when it absorbs a photon, the electron jumps to a higher
energy state, which increases the rest mass-energy of the atom.
(c) Yes, by the same logic as part (b). A nucleus is a composite object with internal energy levels,
and it can emit a gamma ray when it falls to a lower energy state.
(d) No, this process is impossible, because the same relativistic kinematics arguments hold whether
the radiation is classical or not. But it isn’t in contradiction with Thomson scattering, which
is the classical analogue of e− + γ → e− + γ. (Note that whenever we talked about the
absorption of electromagnetic radiation, it was in the context of electrons inside matter, where
the matter can absorb the excess momentum.)
Idea 4
Radioactive decay is a memoryless process: in an infinitesimal time interval dt, any nucleus has
a probability λdt of decaying, regardless of its previous history. As a result, the probability
5Kevin Zhou Physics Olympiad Handouts
that a nucleus remains undecayed, provided that it hadn’t decayed at t = 0, falls exponentially,
p(t) = e−λt
.
The mean lifetime of the nucleus is τ = 1/λ.
If we have N0 ≫ 1 undecayed nuclei at time t = 0, the number of nuclei left is approximately
N(t) ≈ N0p(t) = N0e−λt
.
The activity A(t) is the rate of decay events, and also falls exponentially,
A(t) =
dN(t)
dt
= λN0e−λt
.
[3] Problem 4. Some nuclei have extremely long lifetimes τ, so that we can measure τ by continuously
watching a very large sample of N0 nuclei, and looking for decay events. However, it turns out that
the way we do it can yield different results. Let’s consider the following procedures.
(a) We start a stopwatch at noon and stop it when the next decay happens, giving t1.
(b) We have an intern watch the sample continuously, then at noon, ask them how long it was
since the last decay, giving t2.
(c) We have an intern watch the sample continuously, then at noon, ask them how long it was
since the last decay. We then set our stopwatch so that t = 0 when that decay happened, and
stop the stopwatch when the next decay happens, giving t3.
(d) We continuously watch the sample, start a stopwatch when the first decay happens, then stop
it when the next decay happens, giving t4.
We repeat procedure i many times, so the average of ti is ti. Find the ti in terms of N0 and τ.
Solution. (a) The probability of any decay in a time interval dt is N0dt/τ, so the probability
of having no decay in that interval is (1 − N0dt/τ). After N = t/dt such time intervals, the
probability that a single decay still hasn’t occurred is (1 − N0dt/τ)N. As shown in P1, this
becomes e−N0t/τ in the limit dt → 0. Thus, the probability of the first decay occurring after
time t in an interval dt is
P(t)dt =
N0
τ
e−N0t/τ
dt.
The value of t1 is the average of this time, so
t1 =
N0
τ
Z ∞
0
e−N0t/τ
tdt =
Z ∞
0
e−N0t/τ
dt =
τ
N0
.
(b) “Waiting” forward or backwards in time are symmetric, so t2 = t1 = τ/N0. (Technically,
there’s a tiny difference because the previous decay occured when there were N0 + 1 nuclei
instead, but this is negligible in a typical sample containing billions of billions of nuclei.)
(c) By definition, t3 = t1 +t2, and taking expectation values gives t3 = t1 +t2. Thus, t3 = 2τ/N0.
6Kevin Zhou Physics Olympiad Handouts
(d) We know that the mean time between decays is τ/N0, so t4 = τ/N0.
Of course, the tricky part of the problem is the following: why is t3 ̸= t4, even though they
seem to be measuring the exact same thing, namely the time between two decays? The
difference is in the way we select the decay we look at. For t4, we look at a random decay
event (i.e. if there are a thousand decay events, each one has an equal chance of being the one
we look at). But for t3, we look at the decay happening during a random time, which means
that longer time intervals have a larger chance of being randomly picked, so t3 > t4.
To show this explicitly, note that the probability distribution of decay times is (N0/τ)e−N0t/τ,
as derived in part (a). The probability distribution of decay times weighted by decay length,
as used in part (c), is (N0/τ)2 te−N0t/τ. So the expected decay time in part (c) is
t3 =
N2
0
τ2
Z ∞
0
t2
e−N0t/τ
dt = 2
τ
N0
just as argued more intuitively above.
This is quite a tricky factor of 2. Drude got it wrong when formulating the Drude model,
which is the simplest classical model of electrical conduction in a metal. It turns out that the
Drude model is totally wrong, due to quantum mechanics, but this mistake, plus two other
more conceptual issues, made it look like it agreed with experiment.
Another example of a memoryless process is the collisions of a given gas molecule in an ideal gas,
according to kinetic theory. For example, all of the subparts above could have been rephrased in
terms of observing the distance a gas molecule moves between collisions, with the same conclusions.
[2] Problem 5 (Krane 12.37). A radioactive sample contains N0 atoms at time t = 0. It is observed
that N1 radioactive atoms remain at time t1 and then decay by time t2, N2 remain at t2 and then
decay by time t3, and so on. Show that if many observations are made, then τ can be measured as
τ =
1
N0
X
i
Niti.
Solution. N(t) should follow N(t) = N0e−t/τ, so dN(t)/dt = −N(t)/τ. Thus the number of atoms
that decay between time ti and ti+1, Ni, will be about Ni = (ti+1 −ti)dN(ti)/dt = (ti+1 −ti)N(t)/τ
as the number of measurements are large. With smaller time intervals, this can be seen as Ni =
N(t)dt/τ. Thus looking at the expression 1
N0
P
i Niti gives
1
N0
X
i
Niti ≈
1
N0
Z ∞
0

N(t)
dt
τ

t =
1
τ
Z ∞
0
e−t/τ
tdt.
This integral can be evaluated with parts (differentiating t and integrating e−t/τdt),
1
τ
Z ∞
0
e−t/τ
tdt =
Z ∞
0
e−t/τ
dt = τ,
which shows that, as desired,
τ =
1
N0
X
i
Niti.
7Kevin Zhou Physics Olympiad Handouts
Example 1
Radium can be found in trace quantities throughout the Earth, and has a half-life of 1620
years. Suppose that there is currently 1kg of radium on the Earth. Then extrapolating
backwards, there was 24.5×109/1620 kg of radium on the Earth when it was formed, which is
greater than the mass of the observable universe! What’s wrong with this calculation?
Solution
Nuclear decays don’t happen in isolation; there are entire networks of nuclear decay chains.
Radium decays quickly, but it is also constantly produced by the decay of other isotopes,
which have much longer half-lives.
[3] Problem 6.  W 1 0USAPhO 2009, problem A2.
[3] Problem 7.  ^ 1 0IPhO 2000, problem 1c. The problem refers to an answer sheet, but you won’t
need it.
[3] Problem 8 (PPP 190). Part of the series of isotopes produced by the decay of 232Th, along with
the corresponding half-lives, is given below:
232
90 Th
1.4×1010 y
− − − − − − → 228
88 Ra
5.7y
− − − → 228
89 Ac
6.1h
− − − → 228
90 Th
1.9y
− − − → 224
88 Ra
3.6d
− − − → 220
86 Rn
56s
− − → ....
232Th and 228Th in equilibrium are extracted from an ore and purified by a chemical process. Sketch
the form of the variation in the number of atoms of 220Rn you would expect to be present in this
material over a (logarithmic) range from 10−3 to 103 years.
Solution. The graph should look like this:
It rises at first due to the 224Ra from the 228Th in the initial sample, which will then decay away
before 228Ra from 232Th plays a significant role. After some time, the effectively infinite bank of
232Th (since its half life is much longer than 103 years) will fill up all the parts of the chain when the
228Ra starts contributing to the 228Th stock, and the equilibrium amount of 220Rn will be reached
and kept until after around 1010 years.
8Kevin Zhou Physics Olympiad Handouts
2 Nuclear Processes
Example 2: PTD 45
Heavy nuclei can decay if struck by a neutron, releasing lighter nuclei and several more
neutrons in the process. If each decay event causes, on average, more than one other decay
event, then a runaway chain reaction occurs, causing a nuclear explosion. This happens
in samples of mass greater than a given “critical mass”. If the sample can be compressed,
roughly how does the critical mass depend on density?
Solution
Let the sample have radius r, and let the cross-section of collision between neutrons and
heavy nuclei be σ. Then for small r, the probability that a produced neutron will collide
with another nucleus before exiting the sample is
p ∼ nσr
where n is the number density of nuclei. Critical mass is achieved when this reaches some
fixed threshold value, which means rcrit ∝ 1/n ∝ 1/ρ. The critical mass is thus
mcrit ∝ ρr3
crit ∝ 1/ρ2
.
Early nuclear weapons worked on the so-called implosion method, where a conventional
explosive was used to compress a sphere of radioactive material.
[1] Problem 9. Nuclear reactions can occur when nuclei are collided. Find the missing particle in
these reactions.
(a) 4He + 14N → 17O +
(b) 9Be + 4He → 12C +
(c) 27Al + 4He → n +
(d) 12C + → 13N + n
Solution. (a) 4He + 14N → 17O + p
(b) 9Be + 4He → 12C + n
(c) 27Al + 4He → n + 30P
(d) 12C + 2H → 13N + n
In practice, many nuclear and particle physics problems boil down to “optimal collision” problems
as you saw in R2, so we’ll avoid repeating them.
[3] Problem 10. NBPhO 2012, problem 6.
The following problems concern nuclear fusion processes in stars, an important topic.
[3] Problem 11.  W 1 0USAPhO 2010, problem A4. This covers the proton-proton chain in our Sun.
9Kevin Zhou Physics Olympiad Handouts
[2] Problem 12. In large, hot stars, energy is also produced by the CNO cycle. We start with a
population of 12C, in an environment containing many protons. You are given that 13N and 15O
quickly undergo β+ decay, and that when 15N is bombarded by a proton, the reaction
15
N + 1
H → 12
C + 4
He
occurs. Write out the steps of the CNO cycle and find the net reaction.
Solution. The initial 12C and protons collide. Letting 13N and 15O undergo immediate β+ decay
and continuing the proton bombardment will give the following steps:
12
C + 1
H → 13
N,
13
N → 13
C + e+
+ νe,
13
C + 1
H → 14
N,
14
N + 1
H → 15
O,
15
O → 15
N + e+
+ νe,
15
N + 1
H → 12
C + 4
He.
Summing the steps gives a net reaction of
4 1
H → 4
He + 2e+
+ 2νe.
Idea 5
A very basic model for the fission of large nuclei is the liquid drop model. We suppose the
protons and neutrons are packed with uniform density; thus, the volume is proportional to
A, the surface area to A2/3, and the radius to A1/3. The binding energy of the nucleus has
several contributions:
• Each nucleon is bound to the others by the strong nuclear force. This force is short-
ranged, so the binding energy for each nucleon is only due to its neighbors, not on how
large the nucleus as a whole is, so it is proportional to A.
• There is a negative contribution scaling as −A2/3 because nucleons at the surface don’t
have neighbors on one side.
• There is another negative contribution scaling as −Z2/A1/3 due to the Coulomb repulsion
between protons. This scales quadratically with Z because the electromagnetic force is
long-ranged, so every proton interacts with every other one.
• Depending on the sophistication of the model, there can be other terms added, whose
origin can only be understood through quantum mechanics.
[3] Problem 13. INPhO 2014, problem 7. An instructive general application of the liquid drop model.
Solution. See the official solutions as usual. As Stefan Ivanov notes, there’s a minor typo in the
answer to part E.
[4] Problem 14.  T 1 0IPhO 1997, problem 2. This applies the liquid drop model to nuclear stability.
You can find a few more exercises on the liquid drop model in part A of IPhO 2023, problem 2,
though I think the above problems are enough to get the general idea.
10Kevin Zhou Physics Olympiad Handouts
3 Basic Particle Physics
It’s important to get a feeling for the basics of the Standard Model. To do this, read through
chapter 14 of Krane or chapter 1 of Griffiths.
[3] Problem 15. After reading the chapter, do the following as well as you can without references.
(You can peek if you need to, but try to do that as little as possible.)
(a) Write down the fundamental particles of the Standard Model, along with their electric charges.
(b) Order the particles from lightest to heaviest.
(c) Which particles make up most of what you see in the everyday world?
(d) Which particles participate in the strong interaction?
(e) Which particles participate in the weak interaction?
Solution. (a) Quarks: up, charm, top have charges of +2/3, and down, strange, bottom have
charges of −1/3.
Leptons: electron, muon, tau have charges of −1, and their neutrinos have no charge.
The gluon, photon, Z boson, and Higgs boson have no charge, and the W±
boson has a charge
of ±1.
(b) Photon/gluon (massless), electron neutrino, muon neutrino, tau neutrino, electron, up quark,
down quark, strange quark, muon, charm quark, tau, bottom quark, W boson, Z boson, Higgs
boson, top quark.
(c) The up and down quarks in nucleons, electrons, and photons.
(d) Gluons mediate the strong interaction, which affects quarks and gluons.
(e) W/Z bosons mediate the weak interaction, which affects quarks and leptons (the electron,
muon, tau, and corresponding neutrinos).
[2] Problem 16 (Griffiths 1.19). Your roommate is a chemistry major. She knows all about protons,
neutrons, and electrons, and she sees them in action every day in the laboratory. But she is skeptical
when you tell her about positrons, muons, neutrinos, pions, quarks, and intermediate vector bosons.
Explain to her why each of these play no direct role in chemistry.
Solution. Positrons will annihilate after contacting electrons, neutrinos interact too weakly to be
detected, and quarks are locked inside protons and neutrons. Muons are unstable and decay in a
few microseconds, and pions and intermediate vector bosons decay even more quickly.
Olympiad questions about particle colliders boil down to questions from E4, E7, and R2, so they
should be fairly straightforward if you know the principles.
[3] Problem 17.  ^ 1 0USAPhO 2024, problem B1. Analyzing the collision rate in a muon collider
using relativistic kinematics and dynamics.
[5] Problem 18.  h 1 0IPhO 2016, problem 3. This problem is about the physics of the LHC. Record
your answers on the official answer sheet.
[5] Problem 19.  h 1 0IPhO 2018, problem 2. This problem covers LHC data analysis in more depth.
11Kevin Zhou Physics Olympiad Handouts
Remark
Now that you know the basics, can you tell the difference between the titles of real high
energy physics papers, and randomly generated ones? Test your knowledge here!
4 Atomic Physics
There’s not too much about atomic physics that can come up, because most quantitative results
beyond the Bohr model need the full machinery of quantum mechanics. However, if you’re given the
atomic energy levels in advance, there’s a bit of physics you can do with the resulting transitions.
Idea 6
Electrons in isolated atoms can spontaneously fall from energy level E1 to E0, releasing a
photon of angular frequency ω = (E1 − E0)/ℏ. Thus, since energy levels are discrete, light
from such atoms will have a sharply peaked spectrum (i.e. frequency dependence). Since every
atom has its own characteristic discrete energy levels, careful investigation of the spectrum
can identify them.
Remark
If you like Olympiad number theory, you might want to chew on the following puzzle: in
the Bohr hydrogen atom, it’s possible that a transition from energy level n → m emits a
photon of the same energy as some other transition n′ → m′. How can you find all of the
(n,m,n′,m′) for which this is true? The solution is given here.
[3] Problem 20. In this problem, we discuss how atomic physicists observe atomic energy levels.
(a) The discrete wavelengths of light observed in the spectra are called “spectral lines”. Why are
they called lines?
Ideally, each spectral line has zero width. However, in practice, isolated atoms emit radiation
in a range of wavelengths centered about each spectral line. For concreteness, we’ll consider the
sodium doublet, a spectral line in sodium vapor which corresponds to yellow light with wavelength
λ = 589nm. (Why specifically sodium vapor?)
(b) One contribution to spectral line width is the energy-time uncertainty principle: if an excited
state survives for time ∆t, then the resulting emitted energy must have a spread ∆E∆t ≳ ℏ.
In the case of the sodium doublet, the lifetime is 16ns. Estimate the spread in wavelengths
∆λ due to this “lifetime broadening”.
(c) Another contribution to spectral line width is Doppler broadening: when a gas of atoms is
at a nonzero temperature, the atomic motion causes the wavelengths to be changed by the
Doppler effect. Estimate the resulting spread in wavelengths ∆λ at T = 1000K. (You can
consult the tables in appendix D of Krane.)
(d) The spectrum of the Sun has a rather different form. Instead of having radiation at only a few
wavelengths, it has radiation at almost all wavelengths, except for a few wavelengths where
the amount of radiation decreases. Why?
12Kevin Zhou Physics Olympiad Handouts
Solution. (a) The spectra of light can be observed through the dispersion of light, where we
a band of colors in increasing (or decreasing) wavelength. When discrete wavelengths are
emitted or absorbed, we notice one particular wavelength emitted or absorbed, which will
make a colored or dark line in the spectrum. It looks like this:
(b) Since ∆E = h∆f ∼ ℏ/∆t and f = c/λ, giving ∆f = c∆λ/λ2, we get
∆λ = λ2 ℏ
hc∆t
=
λ2
2πc∆t
≈ 10−5
nm.
(c) Velocities from thermal motion is much less than c, so we can use ∆f = fv/c. We can estimate
1
2mv2 = 3
2kBT, where the mass of a sodium atom is m = 3.8 × 10−26 kg. This gives
∆λ = λ2 ∆f
c
= λv/c =
λ
c
r
3kBT
m
≈ 2 × 10−3
nm.
(d) The electrons in the Sun are stripped off the nuclei because it’s hot, so they emit a continuous
spectrum of blackbody radiation. But the atoms in the cooler atmosphere of the Sun will
absorb certain wavelengths, which will create an absorption spectrum.
Idea 7
Conversely, when an atom is placed in an electromagnetic field of angular frequency ω,
it may absorb a photon to go from energy level E0 to E1. The presence of such a field
also increases the rate of decay from E1 down to E0 via stimulated emission, as we saw in T1.
Finally, an electron can be ejected from an atom entirely by absorbing a photon in the
photoelectric effect; if the initial energy was −E, then the final kinetic energy of the electron
is ℏω − E.
[3] Problem 21.  W 1 0USAPhO 1997, problem A4.
[3] Problem 22.  W 1 0USAPhO 1998, problem A3.
[3] Problem 23.  m 1 0USAPhO 1998, problem B2. (There’s a typo in the solutions, pointed out here.)
[3] Problem 24.  m 1 0INPhO 2012, problem 5.
[5] Problem 25.  h 1 0IPhO 2009, problem 2. This relatively straightforward problem covers the neat
application of Doppler laser cooling, a technique for creating ultracold gases that won the 1997
Nobel prize. (For a very similar problem, see APhO 2006, problem 1.)
13Kevin Zhou Physics Olympiad Handouts
Solution. See the official solution, but note that it has some factor of 2 errors, as pointed out by
Stefan Ivanov here.
[5] Problem 26.  h 1 0IPhO 2020, problem 3. A somewhat more challenging problem focusing on
chirped pulse amplification, which won the 2018 Nobel prize.
Remark
In a conventional refrigerator, cooling the inside requires the heating of a hot reservoir,
which is usually a metal coil located at the back of the fridge. But in Doppler laser cooling,
a sample of atoms is cooled without a hot reservoir heating up! This is actually allowed by
the second law of thermodynamics because the entropy of the photons goes up. They begin
by coming in by a definite direction (the laser beam) and come out in a random direction,
so the entropy associated with their orientation increases.
To reach even lower temperatures, one uses the technique of evaporative cooling. The atoms
are held in place by a trap, which you can think of as a static, attractive potential U(r) ∝ r2.
If the trap has finite height, then only the most energetic atoms can escape. The remaining
atoms have less energy on average, and hence are colder, just like how evaporating sweat
cools people down. This doesn’t violate the second law of thermodynamics because the atoms
that escape the trap end up in some random place in the lab, so the entropy associated with
their position increases.
[5] Problem 27.  T 1 0IZhO 2019, problem 3. A problem on the dynamics on a laser, which is arguably
the most important invention for atomic physics in history.
14
