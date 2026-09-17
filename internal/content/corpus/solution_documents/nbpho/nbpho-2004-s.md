---
id: solution-document-nbpho-2004-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2004_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2004-experiment, nbpho-2004-fourth-order-ellipse, nbpho-2004-loop-of-wire, nbpho-2004-magnets, nbpho-2004-passive-air-cooling, nbpho-2004-planets, nbpho-2004-rubber-fiber, nbpho-2004-tilt-shift-lens, nbpho-2004-transparent-film]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2004_S.pdf."
---

1. Rubber fiber (12 pts)
1) Volume conservation: Sl = S0l0, hence S =
S0l0/l.
2)Atthelimitofsmalldeformations,F(l) = a+
b
l ≈ a −bx/l2
0 = k0x, hence E0S0/l0 = −b/l2
0,
hence b = −E0S0l0 (1 pt). Besides, at l = l0,
F = 0 (0.5 pts), hence a + b
l =
0 and a = E0S0
(1 pt).
3) ∆F ≈ dF
dl dl = E0S0
l0δl
l2 .
4) Newton II law: E0S0(1 − l0
l ) = 2K/l, hence
l = l0 + 2K
E0SO
.
5) Conservation of angular momentum: lvt =
LVt, hence vt = Vt
L
L+r (1.5 pts). Conservation
ofenergy: m
2 (v2
t +v2
r)+E0S0(r−l0 ln r+L
L ) =
m
2 (V 2
t + V 2
r ) (2 pts).
6) Substituting vt from the angular momen-
tum conservation law into the energy equation
we obtain m
2 [V 2
t ( L
L+r)2
+ v2
r] + E0S0(r −
l0 ln r+L
L ) = m
2 (V 2
t + V 2
r ) (0.4 pts). Furt-
her we make use of condition |r| ≪ L and
substitute ( L
L+r)2
≈ 1 − 2r
L + 3(r
L)2
(0.4
pts), ln r+L
L ≈ r
L − 1
2(r
L)2
(0.4 pts). Line-
ar in r terms cancel out due to the condition
E0S0(1 − l0
L ) = mV 2
t /L (0.4 pts). So, we arrive
at m
2 [3V 2
t (r
L)2
+ v2
r] + 1
2E0S0l0(r
L)2
= m
2 V 2
r
(0.4 pts). This is the energy conservation law for
a pendulum consisting of a spring with effective
stiffness keff = (3mV 2
t + E0S0l0)L−2
and of a
body with effective mass meff = m (0.5 pts). So,
T = 2πL/
p
3V 2
t + E0S0l0m−1 ≈ 2πL/
√
3Vt
(0.3+0.2 pts).
2. Planets (6 pts)
1) First method: determine the tangents to the
graph at the points where the curve crosses the
horizontal axis, a1 ≈ −2.8 and a2 ≈ 16 (in
graph units), respectively. Then, a2 = ω −k
1+k
and a2 = ω k
1−k. The graph units will cancel out
from the ratio of these to tangents, ε = −a2
a1
=
1+k
1−k ≈ 5.7, hence k = 1−ε
1+ε ≈ 1.4.
Second method (more precise): determine
the distances between neighbouring minimum
andmaximum,t1 ≈ 1.2,andbetweenneighbou-
ring minima t2 ≈ 4.6 (in graph units), respecti-
vely. µ = t1
t2
= π−2arcsink
2π ≈ 0.261, hence
k = sin[(1
2 − µ)π] ≈ 1.47 ≈ 1.5.
2) For the maximal angular displacement ϕm,
sinϕm = k = sin[(1
2 − µ)π], hence ϕm =
(1
2 − µ)π = 0.75rad≈ 3.6units. Therefore,the
unit is ϕm/(1
2 − µ)π ≈ 4.8.
3) If the angular velocities of the planets are ω1
and ω2, the seeming angular velocity (as seen
from the system, where both star and the obser-
ver planet are at rest) is ω = ω1 − ω2. From
the Newton II law, GMr−2
i = ω2
i ri, where
i = 1,2 and ri is the planet’s orbital radius.
So, ωi =
q
GMr−3
i and ω =
√
GM(r−1.5
2 −
r−1.5
1 ) =
√
GMr−1.5
1 (1 − k−1.5
). Finally, the
square of the observed period T2
= (2π/ω)2
=
4π2
r3
1/GM(1−k−1.5
)2
andr1 = [T2
GM(1−
k−1.5
)2
/4π2
]1/3
. Using T ≈ 4.6years≈ 1.45 ·
108
s, we arrive at r1 ≈ 2.5 · 1011
m; correspon-
dingly, r2 = kr1 ≈ 3.7 · 1011
m.
3. Tilt-shift lens (6 pts)
From f−1
= x−1
− x′−1
we obtain x = x′
f
x′+f .
Since theraypassingthroughthecentreofalens
without refraction, from similar triangles we ob-
tain the relationship between the y-coordinates
of the image: y = y′ x
x′ = y′
f
x′+f . Substituting
into y = ax + b we result in y′
f
x′+f = a x′
f
x′+f + b,
hence y′
= ax′
+ b(x′
f + 1) = x′
(a + b
f ) + b,
which defines also a straight line.
1) First we notice that the line, its image, and
lens plane intersect in one point, because the
image of that point of the line which lays at the
lensplane,coincideswithitself. Now, itiseasyto
constructthe image, see the figure.
2) First we notice that the distance of the image
ofthefarendofthefield(letusdesignateitbyA)
from the focal plane equals to the focal length f.
So, the lens plane must touch the circle of radius
f, drawn around A, see figure. Next we notice
that there is one such ray connecting far end of
the field and its image, which does not refract—
theonepassingthroughtheenterofthelens,see
figure.
4. Transparent film (6 pts)
The short-wavelength oscillations on the graph
are due to the diffraction on the film, there-
fore the local maximum condition is 2dn =
λN = cN/ν. So, 2dnν = cN and 2dn(ν +
δ)ν = c(N + 1), hence 2dnδν = c and d =
c/2nδν. In order to measure the distance be-
tween two maxima more precisely, we take a
longer frequency interval , e.g. ∆ν = 80THz
andcountthenumberofmaximabetweenthem,
m ≈ 34. Consequently, δν = ∆ν/m ≈
2.35THz,and d ≈ 50µm
5. 4th order ellipse (6 pts)
1) There are trivial positions ϕ = 0 and ϕ =
π/2. Besides, there is a position between these
two. At the equilibrium, the vector from the ori-
gin to the touching point ~ r = (x,y) has to be
perpendiculartothetangent atthat point. Inor-
der tofind thetangent, let usdifferentiate theel-
lipse formula: 4x3
a4 dx + 4y3
b4 dy = 0, hence, with
dx = 1, dy = −x3
y3
b4
a4 , a tangent vector is ~ τ =
[1,−(x
y )3
(b
a)4
]. The vectors are perpendicular,
if the scalar product is zero: x − y(x
y )3
(b
a)4
, i.e.
y
x = (b
a)2
= ϕ = arctan y
x = (b
a)2
.
2) Around each zero ϕ changes sign. At ϕ = 0,
small increase in ϕ will result in a torque trying
to return to the initial position, i.e. the torque
becomes negative. So, the graph looks like the
one below.
3) If the derivative of the graph at equilibrium
point is negative, the position is stable; otherwi-
se it is unstable. ϕ = 0 and ϕ = π/2 are stable,
ϕ = (b
a)2
is unstable.6. Magnets (6 pts)
1) Each permanent magnet can be considered
as a solenoidal molecular current at the surface
of the magnets. Suppose that each magnet has
net surface current I. Consider triangular con-
tour going through the interiors of the magnets
A,B,C. According to the circulation theorem
for that contour, the circulation BAl + BBl +
BCl is proportionaltotheoverallmolecularcur-
rentthroughthat contour: BAl+BBl+BCl =
3kI. Here, BA designates magnetic inductance
inside the magnet A; BB and BC are defined
analogously. For a single magnet attached to a
massiveU-shapedferromagnetic, thecirculation
theorem yields B0l = kI (where B0 is the mag-
netic inductance inside the magnet; the cont-
ribution to the circulation inside a massive U-
shaped ferromagnetic can be neglected, because
themagnetic fieldthereis muchsmallerthanin-
side the magnet). So, BA + BB + BC = 3B0
and ΦA + ΦB + ΦC = 3Φ.
2) There are no sources of magnetic field lines
(and hence of the flux),so ΦA = ΦB + ΦF .
3) Due to symmetry, ΦF /ΦC = 1.
4) Upon using symmetry, ΦF = ΦC and ΦD =
ΦB. Fromthecirculationtheoremforthetriang-
le CDE, ΦC + ΦE − ΦB = Φ. From the no-
flux-source condition for the vertex with mag-
nets E,C,B we obtain ΦE = ΦC − ΦB. To-
gether with the equations form questions 1 and
2, ΦA = 3
2Φ, ΦC = ΦF = Φ, ΦB = ΦD =
ΦE = 1
2Φ.
5)Thelargerthe flux,themore difficult toremo-
ve a magnet, becausethe magnetic flux needs to
go through the air gap which will be formed (en-
larging the magnetic energy), when starting the
removal. So, the answer is “A”.
7. Passive air-cooling (9 pts)
1) Using γ = cp/cV and cp = cV + R we arrive
at cp = γ
γ−1R.
2) From the ideal gas equation, p0 = ρ
µRT (the
process is by constant pressure, otherwise the-
re would be huge acceleration due to pressure
drop).
3) Different air densities inside and outside the
pipe give rise to small residual (as compared to
the static pressure distribution inside the pipe)
pressuredifference betweentheopenendsofthe
pipe, ∆p = −∆ρgL. This pressure difference is
responsible for the acceleration of the air, from
zero,up to the velocity of the air flow v. The mo-
mentum balance for small time interval τ yields
S∆pτ = ρ(Svτ)v, hence (ρ0 − ρ)gL = ρv2
. .
Here, the cold air density ρ0 = p0µ/RT0. Final-
ly, ( p0µ
RT0
− ρ)gL = ρv2
.
4) Heat flux: P = γ
γ−1R(T − T0)Svρ/µ.
5) From the result of question 2, we obtain
∆ρ
ρ = −∆T
T . From the result of question
3, ∆ρ
ρ = −v2
gL. Substituting these values in-
to the equation obtained for question 4, P =
γ
γ−1R v3
gLTSρ/µ. Using the gas equation, this
simplifies to v3
= γ
γ−1
gL
S
P
p0
. So, T = T0[1 +
( γ
γ−1
gL
S
P
p0
)2/3
/gL] ≈ 322K.
8. Loop of wire (7 pts)
1) At the distance r from the current I0, the
magnetic induction B = µ0I0
2πr . Then, the
flux through the contour Φ =
Rl+a
l Bbdx =
Rl+a
l
bµ0I0
2πx dx = bµ0I0
2π ln a+l
l .
Alternatively, we can find it using the graph
by determining the area S under the curve, from
r = r1 = 0,01m to r = r2 = 0,04m:
S ≈ 0,28mT·m, further,Φ = Sb = 280µWb.
2) After switching off the current, the flux th-
rough the tends to zero. From the Ohm’s law
Rdq
dt = dΦ
dt , hence Rdq = dΦ, i.e. RQ = ∆Φ =
Φ. Finally, Q = Φ/R = 280µC.
3) We calculate the force as difference between
the forces at the two loop segments parallel
to the straight line: F1 = biB1 and F2 =
biB2, where i = R−1 dΦ
dt . So, dp = (F1 −
F2)dt = bR−1
(B1 − B2)dΦ. Using B1 =
µ0I/2πl and B1 = µ0I/2π(l + a), we end
up with dp = b
R
µ0I
2π
a
l(l+a)dΦ. Using the re-
sult of first question, dΦ = bµ0
2π ln a+l
l dI, i.e.
dp = (bµ0
2π )2 a
Rl(l+a) ln a+l
l IdI. Finally, p =
a(bµ0I0)2
8π2Rl(l+a) ln a+l
l ≈ 2.08 · 10−6
kg·m/s2
.
The same result could have been obtained
using the graph and approach used in the alter-
native solution of the question 1.
9. Experiment (15 pts)
The idea: take readings of discharge current, as
a function of time. The surface area under the
graph is the outflown charge Q. Taking the rea-
dings of voltage U0 and U1 at the beginning and
at the end of discharge, we obtain Q/C = U0 −
U1,i.e.C = Q/(U0−U1). AsforV-Icharacteris-
tic, interrupt from time to time discharge, take
reading of discharge current I just before inter-
ruption, measure voltage U, and continue disc-
harging. Collect enoughdata to drawV-I charac-
teristic.
