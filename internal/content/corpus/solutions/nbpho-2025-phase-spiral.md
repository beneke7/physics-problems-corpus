---
id: nbpho-2025-phase-spiral
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2025-phase-spiral
solution_type: official
source_document: solution-document-nbpho-2025-s
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2025_S.pdf."
---

8. PHAſE ſPıRAL (9 points) — Taavet Kalda.
i) (1 point) Gravitational acceleration obeys
Gauss’ law, i.e., the number of field lines
passing through a closed surface is propor‐
tional to the enclosed mass. We can see from
the example of a point mass M that
∫
gdA =
4πGM. Applied for the case of an infinite
plane with constant density with a cuboid of
area A and half‐thickness z, we get −2azA =
4πG2Azρ0 so
az = −4πGρ0z.
Grading: (preliminary)
• Idea of using Gauss’ law 0.3pts
• Formularelatingthemassinsidewithgrav‐
itational flux 0.3pts
• Application of Gauss’ law on a cuboid
0.2pts
• Final result 0.2pts
Alternative solution:
• Finding the acceleration of a thin disk by
integrating over its surface, of which:
0.5pts
– Writing down the integral 0.3pts
– Correct evaluation, including finding
that the acceleration is independent of
the displacement from the surface
0.2pts
• Inferring that only the surface density in‐
side −a < z < a contributes to the final
acceleration 0.3pts
• Final result 0.2pts
ii) (0.5 points) The acceleration is propor‐
tional to displacement and therefore corres‐
ponds to a harmonic oscillator. The period
of oscillation is thus
T =
2π
√
4πGρ0
=
√
π
Gρ0
.
Grading: (preliminary)
• Noticingthatthemovementisthatofahar‐
monic oscillator 0.3pts
• Expressionfortheoscillationperiod0.2pts
iii) (2.5 points) If we follow the trajectory of
a single star that lies on the spiral, we would
find it oscillating around the mid‐plane with
some period T(z) that decreases with in‐
creasing z. Over the course of an orbit, the
energy per unit mass is conserved and is
givenbyE = v2
z/2+Φ(z). Weknowthatnear
the mid‐plane, the gravitational potential is
minimal and equal to zero, so vz is maximal
and the kinetic energy is equal to the total
energy. Hence, we know the total energy of
stars at the seven intersection points of the
spiral with z = 0. Similarly, when vz = 0, the
kinetic energy is minimal and equal to zero,
so the total energy is equal to Φ(z) at those
points.
As one traces the various intersection
points with vz = 0 and z = 0 along the
spiral, the maximal extent of the orbit keeps
increasing. To the first order, if we assume
that the maximal extent increases linearly
with each crossing, we can find the potential
energy of the crossings of vz = 0 as the aver‐
agebetweenthekineticenergiesoftheprevi‐
ousandsubsequentcrossingoverz = 0. This
allows us to determine the potential energy
at all the crossings with vz = 0, as tabulated
and plotted below.
i zi (kpc) Φ(zi) (km2
/s2
)
1 0.27 180
2 0.39 330
3 0.54 530
4 0.72 800
5 0.97 1200
6 1.34 1800
Grading: (preliminary)
• Making use of the total energy at z = 0 in‐
tersection points being known (either ex‐
plicitly or implicitly) 0.7pts
• Interpolating the values at vz = 0 from
neighbouring z = 0 crossovers. This
should be explicitly mentioned 0.8pts
• Tabulating the potential, of which: 0.7pts
– using six points 0.7/0.7pts
– using four to five points 0.4/0.7pts
– using one to three points 0.1/0.7pts
• Φ(z) vs z correctly plotted 0.3pts
0.0 0.2 0.4 0.6 0.8 1.0 1.2 1.4
z (kpc)
0
250
500
750
1000
1250
1500
1750
2000
Φ(z) (km 2
/s 2
)
iv) (1point)For a harmonic oscillator, the po‐
tentialenergywouldgrowasz2
. Basedonthe
plotofpotentialenergyweobtained,itseems
to grow roughly quadratically in the begin‐
ning, and then transition into a more lin‐
ear regime, implying that smaller values of z
have more uniform ρ. Taking the first value
of Φ(z1) = 180km2
/s2
that we obtained, we
can estimate the mid‐plane density. From
the first part, Φ(z) =
∫
azdz = 2πGρ0z2
and
so
ρ0 =
Φ(z1)
2πGz2
1
= 6.1 × 10−21
kg/m3
= 0.090M⊙/pc3
.
Grading: (preliminary)
• ConnectingΦ(z1)withρ0 byassumingcon‐
stant mass density. 0.8pts
• If the first data point is not used −0.2pts
• Final expression for ρ0 0.1pts
• Numerical value within 10% 0.1pts
v) (2 points) We can compute the enclosed
surface density Σ(z) between 0 < z by us‐
ing the previous harmonic oscillator estim‐
ate. With the constant density approxima‐
tion, the surface density is Σ(z) = ρ0z =
Φ(z)/(2πGz)
Ofcourse,here,ρ0 isaplaceholdervariablewhile
using the constant profile approximation to sim­
plify the calculus. The final result is expected to
deviatefromthetruevaluebyanumericalfactor
that’s close to unity.
Assuming that dark matter density dom‐
inates far away, we can use the difference
betweenthefarthesttwodatapointsatz5 and
z6 to estimate the dark matter density via
Σ(z6) − Σ(z5) = ρDM(z6 − z5)
=
1
2πG
(
Φ(z6)
z6
−
Φ(z5)
z5
)
.
Thus,
ρDM ≈
1
2πG(z6 − z5)
(
Φ(z6)
z6
−
Φ(z5)
z5
)
= 7.7 × 10−22
kg/m3
= 0.011M⊙/pc3
.
Dark matter therefore makes up around
ρDM/ρ0 = 13% of the total local matter
budget.
Grading: (preliminary)
• Obtaining an expression for the total mass
contained within z 0.7pts
• Taking the difference between the total
mass within z6 and z5 for calculating the
dark matter content 0.9pts
• Final expression for ρDM based on z6 and
z5 0.3pts
• Numerical value within 10% 0.1pts
Alternative scheme:
• Using the previous expression for ρ based
onΦ(z)toexpress(z6−z5)ρDM = z6ρ(z6)−
z5ρ(z5) 1.6pts
• Final expression for ρDM based on z6 and
z5 0.3pts
• Numerical value within 10% 0.1pts
vi) (2 points) We can estimate the time of
the perturbation by using the winding rate
between two points on the spiral and how
many full turns around the origin they have
made relative to each other. Using the har‐
monic estimate, firstly, ρ0 = Φ(z)/(2πGz2
)
and secondly the angular frequency is
ω(z) =
√
4πGρ0 =
√
2Φ(z)/z2.
By, for example, picking points z1 and z6 and
seeing that they have 2.5 full turns between
them, we can express how long ago the per‐
turbation happened:
T0 = 2.5
2π
ω(z6) − ω(z5)
= 5π
(√
2Φ(z1)/z2
1 −
√
2Φ(z6)/z2
6
)−1
= 1.9 × 1016
s = 620Myr.
The timescale is relatively long, but com‐
paredtothelifespanoftheMilkyWay, which
is around 13.6 billion years, it’s relatively re‐
cent.
Grading: (preliminary)
• Idea of using differences in the winding
rate between two points on the spiral
1.0pts
• Expression for angular frequency ω in
terms of Φ(z) by assuming a harmonic os‐
cillator 0.5pts
• Picking two points and connecting the age
of the spiral, ω and the winding amount
0.3pts
• Numerical value within 10% of the solu‐
tion value 0.2pts
