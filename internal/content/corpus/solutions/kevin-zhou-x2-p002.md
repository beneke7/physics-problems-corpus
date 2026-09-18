---
id: kevin-zhou-x2-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x2-p002
solution_type: author
source_document: solution-document-kevin-zhou-x2sol
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X2Sol.pdf."
---

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
3
Kevin Zhou Physics Olympiad Handouts
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
 α
r
− E

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
4
Kevin Zhou Physics Olympiad Handouts
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
