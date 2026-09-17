---
id: solution-document-apho-2015-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2015/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2015-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2015/T1_S.pdf."
---

Question 1
The fractional quantum Hall effect (FQHE) was discovered by D. C. Tsui and
H. Stormer at Bell Labs in 1981. In the experiment electrons were confined in
two dimensions on the GaAs side by the interface potential of a GaAs/AlGaAs
heterojunction fabricated by A. C. Gossard (here we neglect the thickness of the
two-dimensional electron layer). A strong uniform magnetic field B was applied
perpendicular to the two-dimensional electron system. As illustrated in Figure
1, when a current I was passing through the sample, the voltage VH across the
current path exhibited an unexpected quantized plateau (corresponding to a Hall
resistance RH = 3h/e2
) at sufficiently low temperatures. The appearance of the
plateau would imply the presence of fractionally charged quasiparticles in the
system, which we analyze below. For simplicity, we neglect the scattering of the
electrons by random potential, as well as the electron spin.
(a) In a classical model, two-dimensionalelectrons behave like charged billiard
balls on a table. In the GaAs/AlGaAs sample, however, the mass of the
electrons is reduced to an effective m∗
due to their interaction with ions.
(i) (2 point) Write down the equation of motion of an electron in perpen-
dicular electric field ⃗ E = −Eyŷ and magnetic field ⃗ B = Bẑ.
Solution: An electron with charge −e (e > 0) experiences the Lorentz force
due to the perpendicular magnetic field and the electric force
m∗ d⃗ v
dt
= −e
!
⃗ v × ⃗ B + ⃗ E
"
where ⃗ v is the velocity of the electron.
Grading: 1 point for writing down the electric force and the magnetic force
correct, and 1 point for writing down the effective mass and the acceleration
correct.
(ii) (1 point) Determine the velocity vs of the electrons in the stationary
1case.
Solution: In the stationary regime, the acceleration vanishes. Hence
⃗ vs × ⃗ B + ⃗ E = 0
The velocity can be expressed as
⃗ vs =
⃗ E × ⃗ B
B2
whose magnitude is simply vs = E/B.
Grading: Either writing down the correct magnitude of the velocity or its
vector form is sufficient for the 1 point.
(iii) (1 point) Which direction is the velocity pointing at?
Solution: The velocity ⃗ vs should be perpendicular to both the magnetic field
and the electric field. If ⃗ B is in the z direction and ⃗ E in the −y direction, as
given by the problem, ⃗ vs is in the −x direction, generating a charge current
in the x direction.
Grading: 1 point for the correct direction.
(b) (2 points) The Hall resistance is defined as RH = VH/I. In the classical
model, find RH as a function of the number of the electrons N and the
magnetic flux φ = BA = BWL, where A is the area of the sample, and W
2and L the effective width and length of the sample, respectively.
Solution: The Hall voltage VH = EyW. The current in the −x direction is
I =
∆Q
∆t
=
Ne
L/vs
=
Ne
L
Ey
B
= e
N
φ
VH
Therefore,
RH =
VH
I
=
1
e
φ
N
Grading: 1 point for the final expression and 1 point for writing down the
expression for relating I with the number of electrons and their stationary
velocity (hence the electric field and the magnetic field).
(c) (2 points) We know that electrons move in circular orbitss in the magnetic
field. In the quantum mechanical picture, the impinging magnetic field B
could be viewed as creating tiny whirlpools, so-called vortices, in the sea of
electrons–one whirlpool for each flux quantum h/e of the magnetic field,
where h is the Planck’s constant and e the elementary charge of an electron.
For the case of RH = 3h/e2
, which was discovered by Tsui and Stormer,
derive the ratio of the number of the electrons N to the number of the flux
quanta Nφ, known as the filling factor ν.
Solution: The Hall resistance can be rewritten as
RH =
1
e
φ
N
=
h
e2
φ/(h/e)
N
=
h
e2
Nφ
N
At the plateau, ν = N/Nφ = 1/3.
Grading: 1 point for the final expression.
(d) (2 points) It turns out that binding an integer number of vortices (n > 1)
with each electron generates a bigger surrounding whirlpool, hence pushes
away all other electrons. Therefore, the system can considerably reduce
3its electrostatic Coulomb energy at the corresponding filling factor. Deter-
mine the scaling exponent α of the amount of energy gain for each electron
∆U(B) ∝ Bα
.
Solution: The average distance between electrons can be written as fl0,
where
l0 =
#
LW
N
=
#
φ
NB
=
#
h
νeB
and f is a dimensionless constant that is determined by the electron distri-
bution (or, quantum mechanically, wave function). Binding multiple vortices
with an electron effectively reduces the probability of other electrons getting
close. Therefore, the electrons optimize their distribution in such a way that
their average distance increases from f1l0 to f2l0 (f1 < f2). One expect the
Coulomb energy gain per electron is proportional to
e2
4πε0εr(f1l0)
−
e2
4πε0εr(f2l0)
=
$
1
f1
−
1
f2
%
e2
4πε0εrl0
Therefore, ∆(B) ∝ 1/l0 ∝
√
B, or α = 1/2.
Grading: The key point here is to realize that the energy scale is determined
by the Coulomb interaction, which scales inversely with a length scale (e.g.,
the magnetic length) that characterizes the mean electron distance (and its
change). 1 point for the final expression and 1 point for writing down the
correct relation between the length scale and the magnetic field.
(e) (2 points) As the magnetic field deviates from the exact filling ν = 1/m
to a higher field, more vortices (whirlpools in the electron sea) are being
created. They are not bound to electrons and behave like particles carry-
ing effectively positive charges, hence known as quasiholes, compared to
the negatively charged electrons. The amount of charge deficit in any of
these quasiholes amounts to exactly 1/m of an electronic charge. An anal-
ogous argument can be made for magnetic fields slightly below ν and the
creation of quasielectrons of negativecharge e∗
= −e/m. Assume the sam-
ple has an area A. At the quantized Hall plateau of RH = 3h/e2
, calculate
the amount of change in B that corresponds to the introduction of exactly
one fractionally charged quasihole. (When their density is low, the quasi-
particles are confined by the random potential generated by impurities and
4imperfections, hence the Hall resistance remains quantized for a finite range
of B.)
Solution: The flux change due to the change of the magnetic field is
∆φ = ∆B(WL) =
h
e
Therefore, ∆B = h/(eWL).
Grading: 2 points for the final expression.
(f) In Tsui et al. experiment,
• the magnetic field corresponding to the center of the quantized Hall
plateau RH = 3h/e2
, B1/3 = 15 Tesla,
• the effective mass of an electron in GaAs, m∗
= 0.067me,
• the electron mass, me = 9.1 × 10−31
kg,
• Coulomb’s constant, k = 9.0 × 109
N·m2
/C2
,
• the vacuum permittivity, ε0 = 1/(4πk) = 8.854 × 10−12
F/m,
• the relative permittivity (the ratio of the permittivity of a substance to
the vacuum permittivity) of GaAs, εr = 13,
• the elementary charge, e = 1.6 × 10−19
C,
• Planck’s constant, h = 6.626 × 10−34
J·s, and
• Boltzmann’s constant, kB = 1.38 × 10−23
J/K.
In our analysis, we have neglected several factors, whose corresponding
energy scales, compared to ∆(B) discussed in (d), are either too large to
excite or too small to be relevant.
(i) (1 point) Calculate the thermal energy Eth at temperature T = 1.0 K.
Solution: The thermal energy
Eth = kBT = 1.38 × 10−23
× 1.0 = 1.38 × 10−23
J
Grading: 1 point for the numerical result.
5(ii) (2 point) The electrons spatially confined in the whirlpools (or vor-
tices) have a large kinetic energy. Using the uncertainty relation, es-
timate the order of magnitude of the kinetic energy. (This amount
would also be the additional energy penalty if we put two electrons in
the same whirlpool, instead of in two separate whirlpools, due to Pauli
exclusion principle.)
Solution: The size of a vortex is of order
l0 =
#
h
eB
=
#
6.626 × 10−34
1.6 × 10−19 × 15
= 1.66 × 10−8
m
According to the uncertainty relation, p ∼ ∆p ∼ h/l0. Therefore, the kinetic
energy is
p2
2m∗
=
h2
2m∗
eB
h
=
h
2
eB
m∗
=
6.626 × 10−34
× 1.6 × 10−19
× 15
2 × 0.067 × 9.1 × 10−31
= 1.3 × 10−20
J
Grading: 1 point for the final numerical result and 1 point for relating the
characteristic length to the momentum through the uncertainty relation, and
hence the kinetic energy. Note this is an estimate problem, hence any final
numerical result within a factor of 2π can be regarded as correct.
(g) There are also a series of plateau at RH = h/ie2
, where i = 1,2,3,... in
Tsui et al. experiment, as shown in Figure 1(b). These plateaus, known
as the integer quantum Hall effect (IQHE), were reported previously by K.
von Klitzing in 1980. Repeating (c)-(f) for the integer plateaus, one realizes
that the novelty of the FQHE lies critically in the existence of fractionally
charged quasiparticles. R. de-Picciotto et al. and L. Saminadayar et al. in-
dependently reported the observation of fractional charges at the ν = 1/3
filling in 1997. In the experiments, they measured the noise in the charge
current across a narrow constriction, the so-called quantum point contact
(QPC). In a simple statistical model, carriers with discrete charge e∗
tunnel
across the QPC and generate charge current IB (on top of a trivial back-
ground). The number of the carriers nτ arriving at the electrode during
a sufficiently small time interval τ obeys Poisson probability distribution
6with parameter λ
P(nτ = k) =
λk
e−λ
k!
, (1)
where k! is the factorial of k. You may need the following summation
eλ
=
∞ &
k=0
λk
k!
, (2)
(i) (2point)DeterminethechargecurrentIB, whichmeasurestotalcharge
per unit of time, in terms of λ and τ.
Solution: The current can be calculated by the ratio of the total charge carried
by the averaged nτ quasiparticles to the time interval τ.
⟨nτ⟩ =
∞ &
k=1
kP(k) =
∞ &
k=1
λk
e−λ
(k − 1)!
= λ
∞ &
k=0
P(k)
= λ
where we have used
'
k P(k) = 1. Therefore,
IB =
⟨nτ⟩e∗
τ
=
νeλ
τ
Grading: 1 point for correctly calculating the average charge under the Pois-
son distribution and 1 point for the final expression for the charge current.
(ii) (2 points) Current noise is defined as the charge fluctuations per unit
of time. One can analyze the noise by measuring the mean square
deviation of the number of current-carrying charges. Determine the
current noise SI dueto thediscreteness of the current-carrying charges
7in terms of λ and τ.
Solution: Similarly, the noise can be related to the averaged charge fluctua-
tions during the time interval τ.
(
(nτ − ⟨nτ)2
)
= ⟨n2
τ⟩ − ⟨nτ⟩2
=
∞ &
k=1
k2
P(k) − λ2
=
*
λ2
∞ &
k=0
P(k) +
∞ &
k=1
kP(k)
+
− λ2
= λ
Therefore,
SI =
(
(nτ − ⟨nτ)2
)
(e∗
)2
τ
=
(νe)2
λ
τ
Grading: 1 point for correctly calculating the charge fluctuations under the
Poisson distributionand 1 point for the final expression that relates the current
noise to the charge fluctuations.
(iii) (1 point) Calculate the noise-to-current ratio SI/IB, which was veri-
fied by R. de-Picciotto et al. and L. Saminadayar et al. in 1997. (One
year later, Tsui and Stormer shared the Nobel Prize in Physics with
R. B. Laughlin, who proposed an elegant ansatz for the ground state
wave function at ν = 1/3.)
Solution: The noise-to-current ratio SI/IB = e∗
= νe.
Grading: 1 point for the final expression.
8Figure 1: (a) Sketch of the experimental setup for the observation of the FQHE.
As indicated, a current I is passing through a two-dimensional system in the lon-
gitudinal direction with an effective length L. The Hall voltage VH is measured in
the transverse direction with an effective width W. In addition, a uniform mag-
netic field B is applied perpendicular to the plane. The direction of the current is
given for illustrative purpose only, which may not be correct. (b) Hall resistance
RH versus B at four different temperatures (curves shifted for clarity), adapted
from the original publication on the FQHE. The features at RH = 3h/e2
are due
to the FQHE.
9
