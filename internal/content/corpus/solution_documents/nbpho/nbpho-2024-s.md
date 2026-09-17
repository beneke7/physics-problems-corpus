---
id: solution-document-nbpho-2024-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2024_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2024-airplanes, nbpho-2024-cones, nbpho-2024-four-charges, nbpho-2024-kitchen-physics, nbpho-2024-oklo-reactor, nbpho-2024-sticky-ball, nbpho-2024-string-pendulum, nbpho-2024-totality, nbpho-2024-triangle, nbpho-2024-waves]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2024_S.pdf."
---

NORDıC‐BALTıC PHYſıCſ OLYMPıAD 2024
1. FOUR CHARGEſ (7 points) — Solution by
PäivoSimson,gradingschemesbyPäivoSimson,
Oleg Košik and Lasse Franti.
i) (2 points) Assuming v << c and ignoring
gravity, the initial total energy of the system
is the sum of classical kinetic and potential
energies
Etotal = Ekin + Eelectric =
Ekin +
1
2
Σi̸=j k
qiqj
rij
=
4
mv2
0
2
+ 4
kq2
L
+ 2
kq2
√
2L
=
= 4
mv2
0
2
+
kq2
L
4 +
√
2
4
!
.
After the particles have moved infinitely far
from each other, the potential energy be‐
comes zero and the total energy is only kin‐
etic:
Etotal = 4
mv2
f
2
.
Since the total energy does not change we
have from the equality of these two expres‐
sions
vf =
s
v2
0 +
kq2
Lm
4 +
√
2
2
.
Grading:
• Idea of using energy conservation (0.2pts)
• Ideaofsymmetryandequalityofquantities
(0.2pts)
• Idea of total energy as a sum of kinetic and
electrostatic (0.2pts)
• Formula for electrostatic energy including
the two different distances (0.3pts)
• Factor 1
2 from pairings (0.4pts)
• Final energy is purely kinetic (0.4pts)
• Correct final answer (0.3pts)
• If only dimensionless factors missing and
final answer is reasonable (0.2pts)
ii) (5 points)
Let the required angle be ϕ.
The expression for the total energy re‐
veals that the particles behave effectively in‐
dependent of each other as if they are only
subjecttoacentralfieldgeneratedbyasingle
effective charge
Qe = q
2
√
2 + 1
4
≈ 0.96q,
fixed at the center of mass of the system,
and initially at a distance L/
√
2 from each
particle. This observation allows us to re‐
duce the initial four‐body problem into four
independent (and identical) two‐body prob‐
lemsinvolvingonlythespatiallyfixedcharge
Qe and one moving charge q.The trajectories
are therefore hyperbolas with one focus loc‐
ated at the position of the effective charge.
Since the force is repulsive, the effective
charge is at the focus F1 as shown in the fol‐
lowing figure.
Let’s now calculate the asymptote angle
α, since the required angle ϕ is just π/2 − α.
A hyperbola is defined as a set of points
P, such that the absolute difference of the
distances from P to two fixed points F1 and
F2 (the foci) is constant. Let the distances be
r1 and r2. From the figure it is easy to see
that the constant is equal to 2a: if we take
the point P on the x‐axis, then r1 − r2 =
c + a − (c − a) = 2a.
To determine the asymptote angle α, let
us look at the triangle F1PF2. From the law
of cosines, we have
r2
2 = r2
1 + 4c2
− 4cr1 cosβ.
Solving for cosβ and using r2 = r1 − 2a we
get
cosβ =
r2
1 − r2
2 + 4c2
4cr1
=
a
c
+
c2
− a2
cr1
.
As r1 → ∞, then β → α, and we get the
expression for the cosine of the asymptote
angle:
cosα =
a
c
.
Now using c = L/
√
2 − a and knowing that
E =
kqQe
2a
=
mv2
0
2
+
√
2kqQe
L
(the vis‐viva equation for the hyperbola),
from which
1
a
=
mv2
0
kqQe
+
2
√
2
L
,
we finally get
sinϕ = cosα =
a
c
=
1
L √
2a
− 1
=
=
1
1 +
Lmv2
0 √
2kqQe
=
1
1 +
4Lmv2
0
kq2(4+
√
2)
.
Grading:
• Effective repulsive central force F = A
r2
pointingfromtheCOM(explicitexpression
or statement is required) (1pts)
• Realising hyperbolic motion (0.5pts)
• Central charge is located at the correct fo‐
cus (0.5pts)
• Expression for the angle ϕ or α in terms of
geometrical parameters e.g. cosα = a/c,
tanα = b/a (1pts)
• Vis‐viva equation OR angular momentum
conservation (1pts)
• Deriving final answer (1pts)
Subpoints for angular momentum conservation:
• Mentionedthatangularmomentumiscon‐
served (0.3pts)
• Writes initial angular momentum around
COM using L and v0 (0.3pts)
• Writes final angular momentum around
COM using vf (0.4pts)
Variation 1.
If the student doesn’t know the vis‐viva
equation for the hyperbola
E =
kqQe
2a
,
which differs from the corresponding equa‐
tionfortheellipseonlybythesignofthetotal
energy, it can be derived as follows.
From the asymptote angle formula
cosα =
a
c
the geometric relationships shown in the fol‐
lowing figure follow immediately.
We see that the two right triangles on the
figure are identical.
From the conservation of angular mo‐
mentum (with respect to the point F1) we
have
m(c + a)v0 = mbvf =⇒ vf = v0
c + a
b
,and from the conservation of energy using
b2
= c2
− a2
kqQe
a + c
=
mv2
f
2
−
mv2
0
2
=
=
mv2
0
2

(c + a)2
c2 − a2
− 1

=
mv2
0
2
2a
c − a
,
from which
mv2
0
2
=
c − a
2a
·
kqQe
c + a
.
Inserting this into the total energy expres‐
sion we finally get
E = kqQe

1
2a
·
c − a
c + a
+
1
c + a

=
kqQe
2a
.
Variation 2.
Using the algebraic equation for the hy‐
perbola
x2
a2
−
y2
b2
= 1,
and knowing that b2
= c2
− a2
, we get
tanα = lim
x→∞
y
x
= lim
x→∞
b
r
1
a2
−
1
x2
=
b
a
.
Variation 3.
The vis‐viva equation step can be done
using conservation of angular momentum
around COM, as all the forces are radial.
L = mv0
L
√
2
= mvfb
since we already know a + c = L √
2
, c2
=
a2
+b2
, we can solve for the hyperbolas para‐
meters.
2. OĸLO FıſſıON REACTOR (7 points) — Solu­
tion by Tudor Plopeanu, Jaan Kalda and Topi
Löytäinen.
i) (1.5points)The rate of natural decay is pro‐
portional to the amount of decaying mater‐
ial. Ifν istheamountof235
Uatsomepointin
time, then dν
dt = −kν for some positive con‐
stant k. Then, νb
νa
= e−k(tb−ta)
for some mo‐
mentstb > ta. Thehalf‐timeisdefinedasthe
time until the amount of material is halved,
so kτ5 = ln2, k = ln2
τ5
, νb
νa
= (eln2
)
tb−ta
τ5 =
2
tb−ta
τ5 . Therefore, the amount of 235
U in nat‐
ural uranium when the Oklo’s reactor oper‐
ated was 2
T0
τ5 times higher. Similarly, the
amount of 238
U was 2
T0
τ8 higher. The natural
abundence of 235
U T0 years ago was
R1 ≈
ν5
ν8
2
T0
τ5
ν5
ν8
2
T0
τ5 + 2
T0
τ8
≈ 3.16%,
where ν5 and ν8 represent the number of iso‐
topes of uranium. Keep in mind that R =
ν5/(ν5 + ν8), so ν5/ν8 = R/(1 − R).
Grading: (preliminary)
1. Amount of 238
U during operation ν′
8 =
ν82T0/τ8
. (0.3pts)
2. Amount of 235
U during operation ν′
5 =
ν52T0/τ5
. (0.3pts)
3. Abundance of 235
U during operation
expressed in terms of ν5 and ν8.
(0.3pts)
4. Ratio ν5/ν8 expressed in terms of R.
(0.3pts)
5. Abundance of 235
U expressed in terms
of R and numerical answer. (0.3pts)
ii) (2 points) From here on we shall assume
that before the Oklo reactor started oper‐
ating, its abundence of uranium isotopes
matched the natural abundence. After it fin‐
ished operating, the 235
U isotopes kept de‐
caying at the normal rate, reaching the value
we see today.
The mass of 235
U after the reactor fin‐
ished operating was M1 ≈ 2
T0
τ5 MRO ≈
1.84 × 107
kg.
The 238
U isotopes underwent normal de‐
cay, and we shall use them to compute
the mass of 235
U before the reactor started.
The mass of 238
U was approximately M(1 −
R)2
T0
τ8 . The mass of 235
U before the reactor
operated can, as such, be estimated as
M0 =
R1
1 − R1
M(1 − R)2
T0
τ8 ≈ 2.14 × 107
kg.
The number of 235
U nuclei which reacted is
ν = [(M0 − M1)/0.235] · NA ≈ 7.61 × 1030
.
The amount of energy generated through fis‐
sion is the above value multiplied by E0. The
average power of the reactor is νE0/T ≈
7.73 × 107
W.
Grading: (preliminary)
1. Mass of 235
U by the end of operation
M′
5 = 2T0/τ5
MR0. (0.4pts)
2. Mass of 238
U by the end of operation
M′
8 = 2T0/τ8
M(1 − R). (0.3pts)
3. Mass of 235
U at the beginning of opera‐
tion 2T0/τ8
M(1 − R) R′
1−R′ . (0.3pts)
4. Number of atoms that have undergone
fission N = NA∆M/0.235. (0.3pts
5. Energy E = NE0. (0.2pts)
6. Units converted correctly. (0.2pts)
7. Power: expression and numerical
value. (0.3pts)
iii) (1.5 points) Neutrons released from fis‐
siontendtohaveahighkineticenergywhich
have a low probability to cause further fis‐
sions. We need to slow them down to increse
this probability. Water is relatively good for
slowing down neutrons. This slowing down
is called ”moderation”. The reactor could
not explode since the water necessary for
moderation would vapourize if the power in‐
creased too much. This would prevent an
uncontrolled chain reactor from happening.
The reactor’s power depends on water be‐
ing present and thus the operation was self‐
regulating.
When the water intake doubled, the
amount of power doubled.
Grading: (preliminary)
1. Idea that neutrons from fission un‐
likely to cause fission unless moder‐
ated: (0.3pts)
2. Idea of water as a moderator: (0.2pts)
3. Idea of self‐regulating behavior:
(0.5pts)
4. Observation that power doubles when
flow doubles: (0.5pts)
iv) (2 points) The amount of energy gener‐
ated by the reactor was νE0. We shall con‐
sider the vast majority of it to have gone
into heating up and vaporizing water. Let us
consider water flowing in at 0°C and leaving
at 100°C. Then, the amount of energy ab‐
sorbed by 1kg of water is (100◦
K)c + L =
Ew = 2.68 × 106
J. The total mass of water
that flowed into Oklo’s reactor is νE0/Ew =
9.09 × 1013
kg.
Grading: (preliminary)
1. Approximation that all energy went
into water (0.5p)
2. ∆T ≈ 100 (0.3p)
3. Both heating and vaporization con‐
sidered (0.3p)
4. Ew = 2.68 × 106
J or similar idea
(0.3p)
5. νE0/Ew = 9.09 × 1013
kg (0.6p)
3. STıCĸY BALL (4 points) — Solution by
Jaan Kalda, Tudor Plopeanu, grading schemes
by Eppu Leinonen.Let the radius of the neck be ρ ≪ R thus
the force from surface tension at the contact
of the sphere is negligible (angle to the ho‐
rizontal ≈ 0). Then, the curvature radius
of the meniscus r ≪ ρ can be found from
the intersecting secants theorem applied on
a point C on the bottom edge of the neck re‐
lative to the ball and approximating that the
point T is (near) the intersection of CD and
the circle: 2r · 2R ≈ ρ2
. On the drawing,
AC2
≈ CT · CD and we approximate CT
as 2r, R + r as R, and AC as ρ. The pres‐
sure difference between the water and the
surroundingairis∆p = σ/r. Itstotalvertical
component is equal to its amplitude times
the vertical cross‐section S = πρ2
. As such,
the total vertical force on the ball difference
between the two cases (with and without wa‐
ter) is ∆F ≈ σπρ2
/r = 4πσR.
Grading: (preliminary) Note that differing
sign conventions are tolerated
• Stating that the meniscus is (roughly) in‐
verse spherical or usage of constant r
to characterise the meniscus as inverse
spherical (0.5pts)
• r ≪ ρ ≪ R (0.1pts)
• Statingthatsurfacetensionfromfromcon‐
tact is negligible or ∆F comes from the
pressure difference (either explicitly or im‐
plicitly) (0.5pts)
• 2r · 2R ≈ ρ2
(0.7pts) (if not found, partial
points can be earned as below)
– CT ≈ 2r (0.1pts)
– R + r ≈ R (0.1pts)
– AC ≈ ρ (0.2pts)
– AC2
≈ CT · CD or statement of inter‐
esecting secants theorems (0.3pts)
• ∆p = σ/r (1pts) (if not found, partial
points can be earned as below)
– ∆p = σ(1/r1 + 1/r2) or any attempt to
use a form of the Laplace‐Young equa‐
tion (0.2pts)
– ∆p = σ(1/ρ − 1/r) (0.3pts)
• S = πρ2
(correct effective are for pressure)
(0.5pts)
• ∆F = S∆p (0.5pts)
• ∆F ≈ 4πσR (0.2pts) (0.1 pts for each of
the following)
– ∆F > 0 or noting that the contact force
increases
– Correct dimensionless factor of 4π and
correct dimensions (only if approach is
correct)
Solution 2 by Eppu Leinonen
Thepositionofthemeniscuscanbepara‐
meterised using the angle θ = ̸ TOA. The
meniscus is small as the amount of water
is small. Thus |θ| ≪ 1 and the radii can
be approximated as ρ = Rsinθ ≈ Rθ and
2r ≈ R(1 − cosθ) ≈ Rθ2
/2. The change
in normal force due to surface tension is
∆Fσ = 2πσρsinθ ≈ 2πσRθ2
≈ 0. Using
the Young‐Laplace equation ∆p = σ(1/ρ −
1/r) ≈ σ(1/θ − 4/θ2
). Thus the total change
in normal force due to pressure difference is
∆Fp = −S∆P = −πρ2
∆P ≈ πσR(4 − θ) ≈
4πσR2
. I.e. ∆F = ∆Fp + ∆Fσ ≈ ∆Fp ≈
4πσR.
Grading: (preliminary) Note that differing
sign conventions are tolerated
• Stating that the meniscus is (roughly) in‐
verse spherical or usage of constant r
to characterise the meniscus as inverse
spherical (0.5pts)
• |θ| ≪ 1 (0.1pts)
• ρ ≈ Rθ (0.2pts)
• AC ≈ ρ (0.2pts)
• r ≈ Rθ2
/4 (0.3pts)
• ∆Fσ ∝ θ2
≪ ∆Fp oranystatementthatthe
force from surface tension is negligible or
∆F = ∆Fp (0.5pts)
• ∆p = σ/r (1pts) (if not found, partial
points can be earned as below)
– ∆p = σ(1/r1 + 1/r2) or any attempt to
use a form of the Laplace‐Young equa‐
tion (0.2pts)
– ∆p = σ(1/ρ − 1/r) (0.3pts)
• S = πρ2
(correct effective area for pres‐
sure) (0.5pts)
• ∆Fp = −S∆p (0.5pts)
• ∆F ≈ 4πσR (0.2pts) (0.1 pts for each of
the following)
– ∆F > 0 or noting that the contact force
increases
– Correct dimensionless factor of 4π and
correct dimensions (only if approach is
correct)
Note: A common approach was to use the
method of virtual displacement to solve for
the force caused by the meniscus. However,
it turns out that δAlg ∝
√
rδr (the area of
the meniscus‐air interface is roughly half of
a spherical toroid with radii ρ and r) which
means that the change in potential energy
due to the change in surface area is negli‐
gible (r ≪ R). Thus the virtual work done
by lifting the sphere only counteracts the vir‐
tual work done by the pressure, which re‐
duces the problem back to either solution 1
or solution 2. Thus no points are granted
for just mentioning this approach and telling
that δU = σδAlg.
Solution 3 using virtual displacement (by
JaanKalda). Letusdenotethecontactareaof
water and plate with A = πρ2
; then, the con‐
tact area of water and ball is also approxim‐
ately A. Let the ball touch initially the plate,
and then be raised by dx. Since the volume
of water is conserved, no work is made by
atmospheric pressure, and 2rdA = Adx,
where dA is the change of the contact area;
hence, dA
dx = A/2r. Meanwhile, for zero con‐
tact angle, the difference of surface energies
at the air‐solid interface, and at the water‐
solid interface equals to the surface energy
of the water‐air interface. This fact can be
expressed in terms of the three surface ten‐
sion coefficients denoted with σ1, σ2, and σ,
respectively: σ1 − σ2 = σ cosα = σ. During
our virtual displacement, the air‐water inter‐
face remains almost constant; meanwhile,
air‐solid interface is increased by 2dA (con‐
tributed equally by the ball and plate sur‐
faces). Therefore, the surface energy is in‐
creased by dU = (σ1 −σ2)2dA = 2σdA. Now
we can find force as F = dU
dx = 2σdA
dx =
σA/r. This is the same expression we ob‐
tained from Young‐Laplace equation. From
this point on, the solution follows the steps
made above.
Grading: (preliminary) Note that differing
sign conventions are tolerated.
• Onlythecontactareabetweenthesolidand
the liquid changes notably (0.5pts)
• dA
dx = A/2r (0.5pts)
• σ1 − σ2 = σ (0.2pts)
• dU = 2(σ1 − σ2)dA (0.3pts)
• F = dU
dx (only if A has been identified cor‐
rectly) (0.3pts)
• F = σA/r (0.2pts)
These replace noting that ∆Fσ ≈ 0, ∆p =
σ/r and∆F = S∆pfromtheothersolutions.
4. TOTALıTY (8 points) — Solution by Tudor
Plopeanu, Taavet Kalda. Grading: (prelimin‐
ary)
• In in this task, numerical errors in the an‐
swers give (‐0.1pts) (as long as the answer
is reasonable)
i) (1.5 points)As the distance from the Moon
to the Sun is much larger than the distance
from the Moon to the Earth, we can consider
the speed of the Moon’s shadow on Earth to
be equal to the Moon’s speed altogether. The
speed of the Moon is the ratio of the circum‐
ference of its orbit to its period:
vm =
2πRm
Tm
= 1.02km/s.
Because during the peak of the eclipse, the
centre‐pointsofEarth,theMoonandtheSun
lie on the same line, the shadow of the Moon
must move along the diameter of the Earth
when viewed face‐on. As such, the shadow
travels a distance of 2re while it’s still visible
on Earth and the eclipse will be observablefor time
Tecl =
2re
vm
=
re
πRm
Tm
≈ 12.5 × 103
s = 3.46h.
Grading: (preliminary)
• Explainsthatthemoonsshadowcanbeap‐
proximatedbythemoonsposition(0.5pts)
• Correct speed of the moon (0.5pts)
• Correct final expression (0.5pts)
• Minormistakeinfinalexpression(‐0.2pts)
ii) (1 point) In absence of the Earth’s rota‐
tion, the Moon’s shadow would cover close
to π radians. Over Tecl, the Earth rotates by
2πTecl
T0
radians. The Earth’s rotation goes ”in
the same direction” as the Moon’s shadow,
and therefore the total longitudinal reach of
the eclipse is |180(1 − 2Tecl/T0)| ≈ 128 de‐
grees.
Grading: (preliminary)
• Figures out that the angle is π without the
rotation of the earth (0.3pts)
• Explains that the angle becomes smaller
than π due to earths rotation (0.3pts)
• Correct final formula and answer (0.4pts)
• Thinks earths rotation goes against the
moons rotation and obtains an angle > π
(‐0.3pts)
iii) (1.5 points) Right near the end of the
eclipse, the Earth’s rotation moves the sur‐
face under the Moon’s shadow almost per‐
pendicularly to the Moon’s shadow’s velocity.
As such, the width of the Moon’s shadow is
equal to the distance travelled by the Moon’s
shadow for the duration of the totality at that
point,
wλ = vmt0 = 2πRm
t0
Tm
≈ 123km.
At the equator, the surface of the Earth is
closer by re to the Moon compared to the
point where the eclipse ends, serving to fur‐
ther increase the area of the full shadow. As
the Moon covers an angle of approximately
α = 2rm/Rm radians in the sky, when get‐
ting closer to the moon by re, the width of
its shadow will increase by roughly αre ≈
57.7km. As such, the total width of the
shadow near the equator is around weq =
vmt0 + αre = 180km.
Grading: (preliminary)
• Realizes that the velocities are perpendicu‐
lar at the end of the eclipse (0.4pts)
• Calculates the width of the eclipse at some
point on earth (0.5pts)
• Correctly finds how to translate the width
to the width at the equator (0.5pts)
• Correct final answer (0.1pts)
iv) (1.5 points)The peak of the eclipse occurs
on the equator, firstly because that’s where
the Moon’s shadow is the biggest due to it
being closer to the Moon, but also because
the Earth’s rotation is the fastest there, and
the rotation of the Earth serves to lengthen
the effect of the eclipse. At the equator the
surface of the Earth moves with speed ve =
2πre/T0 = 0.46km/s. The angle between the
velocity of the Earth’s surface at the equator
and the Moon’s shadow’s velocity is λ, so the
relative speed of the Moon’s shadow can be
obtained from cosine theorem as
vrel =
p
v2
m + v2
e − 2vmve cosλ = 0.654km/s.
The duration while the eclipse can be ob‐
served during the peak is thus teq =
weq/vrel = 276s = 4.6min.
Grading: (preliminary)
• Shows that the eclipse must be observable
the longest time at the equator (0.5pts)
• Finds the relative velocity between the
moon’s shadow and the velocity of the sur‐
face of the earth (0.5pts)
• From this finds the formula for the max‐
imum duration of the eclipse (0.5pts)
• Forgettingtotaketheanglebetweentheve‐
locities into account (‐0.3pts)
v) (1 point)Because a ≪ Re, we can treat the
relative velocity between the Moon’s shadow
and Earth to be the same as in the previous
subpart. The full shadow of the Moon on the
Earth at the equator is a circle, and we can
find the distance the Moon’s shadow has to
traveloverthecourseofthetotalityatapoint
displaced by a using the Pythagorean The‐
orem as 2(w2
eq/4−a2
)1/2
. The eclipse is then
observable for
1
vrel
q
w2
eq − 4a2 = 230s = 3.8min.
Grading: (preliminary)
• Argues that the relative velocity is approx‐
imately the same as in the previous task
(0.5pts)
• Correct geometry and answer (0.5pts)
vi)(1.5points)Withourassumptions,thetyp‐
ical width of an eclipse is (wλ + weq)/4, and
the typical length on the surface of the Earth
is πre. As such, a typical eclipse covers an
area equal to the product of the two above
values. From there, we deduce the prob‐
ability of an eclipse being noticeable from
a given arbitrary point on Earth as the area
spanned by the eclipse, πre(wλ + weq)/4,
divided by the surface area of Earth, 4πr2
e.
Then, the expected number of eclipses un‐
til one covers a given arbitrary point is the
multiplicative inverse of the above probabil‐
ity. As eclipses occur, on average, every 18
months, the expectedtime for this to happen
is
16re
wλ + weq
· 18months ≈ 500years.
Grading: (preliminary)
• Shows that the probability per eclipse is
equal to the area covered by the eclipse di‐
vided by the total area of the earth (0.5pts)
• Finds the area covered by one eclipse
(0.5pts)
• Correctly multiples the inverse probabil‐
ity with the duration between eclipses and
finds the correct answer (0.5pts)
5. STRıNGANDPENDULUM (10points) —Solu­
tion by Päivo Simson, Tudor Plopeanu.
i) (5 points) We build two pendulums of dif‐
ferent lengths and release them from differ‐
ent angles such that their periods are equal.
We choose a small enough amplitude for the
longer pendulum to be able to use the small
angle formula, and a large amplitude for the
short pendulum.
We measure the lengths of the pendu‐
lums. Let l0 be the length of the longer pen‐
dulum and l1 be the length of the shorter
pendulum. Additionally, we measure the
angular amplitude ϕ (in degrees) of the
shorter (larger‐amplitude oscillating) pendu‐
lum with a protractor. From the equality of
periods, we get
p
l0 =
p
l1(1 + Aα2
),
from which
A =
q
l0
l1
− 1
α2
=
q
l0
l1
− 1

πϕ
180◦
2 .
We repeat the experiment with different
lengthsandfinallyfindtheaverageoftheres‐
ults. With the example values: ϕ = 55◦
, l0 =
41.5 cm and l1 = 36.5 cm we get A ≈ 0.07.
The theoretical true value is A ≈ 0.063, but
the expected measured value is slightly lar‐
ger, as higher order terms of the theoretical
expansion (1 + Aα2
+ Bα4
+ ...) are “com‐
bined” in the value of A. Thus generally, the
larger the angle used in the measurement,
thelargerthevalueofA,whichiswhyavalue
intherangeA ∈ [0.06,0.08]istobeexpected.
Wenoteacommonsolutionattemptofmeas­
uring the number of periods until two pendu­
lums of equal length, but different initial angles,
sync up again (i.e. one obtains a phase shift).
However, the inaccuracy in this method is very
large, in large part due to the amplitude drastic­
ally decreasing for large angles as an effect of en­
ergy dissipation. Even if a value of A ≈ 0.07
is obtained, this might therefore not get the “cor­
rect value” mark. However, if the amplitude de­
creaseistakenintoaccount,forexamplebyaver­
aging the angular amplitudes over the measure­
menttime,itispossibletoobtainamoreaccurate
and correct result.
Another common attempt of using a second
pendulum as a “clock” results in a far too low
time resolution, and therefore is not rewarded
any points.
Grading: (preliminary)
Note: The “sync up method” can be re‐
warded up to 1.5pts (0.5pts for measure‐
ments, 1pts for multiple datapoints).• Recognize that we may use two pendulums
with different lengths and angular amp‐
litudes with equal periods (0.5pts)
• Presented measurement data of relevant
quantities (0.5pts)
• Good choice of measurements (i.e. large
enough angles, correct measured angle,
long enough pendulum for reasonably
large period etc.) (0.5pts)
• Using two or more datapoints (e.g. differ‐
ent lengths etc.) (1pts)
• Obtaining a correct expression for A in
terms of measurable quantities (1pts)
• Correct value A ∈ [0.06,0.08] (1.5pts)
ii) (5 points)
m
α1
α2
T1
Tx
Tx
T2
We shall tie some red string to two fix‐
ture points on the same horizontal level
and dangle the known mass staple from the
middle point. We measure the angles the
string makes with the horizontal plane at the
middle points and next to the supports, av‐
eraging the latter for a more accurate value.
Let α1 be the angle at the staple’s level, and
α2 be the angle at the support’s level. Let Tx
be the (unknown) horizontal tension in the
string. Along the string, between the staple
and the support, Tx is constant, as all acting
forces are vertical.
Equilibrium around the staple implies
2Tx cotα1 = mg. Equilibrium on the string
strictly between the staple and the support
implies 2Tx(tanα2 − cotα1) = Mg, where
M is the mass of the string. We compute the
mass of one meter’s worth of string as
M
l
=
m
l
tanα2 − cotα1
cotα1
=
m
l
(tanα1 tanα2 − 1),
where l is the measured length of string.
We repeat the experiment with different
lengths and finally find the average of the
results. With the example values α1 = 70◦
,
α2 = 41◦
, we find M ≈ 0.12 g.¹
Grading: (preliminary)Easytobychance
get close to the correct answer using other
methods, e.g. scales, balancing, other pen‐
dulums, ... Also the method of physical
vs mathematical pendulum does not work,
likely due to air resistance.
• Recognize the method (banana) (1pts)
• Recognize that the system is in equilib‐
rium, and we may balance the forces
(1pts)
• Correct equation (1pts)
• (Conditional on correct method being
used) Correct answer [0.11, 0.15] (2pts)
6. CONEſ (8 points) — Solution by Tudor
Plopeanu, grading schemes by Eppu Leinonen
and Aleksi Kononen.
i) (2 points) We will consider any extreme
point on the red heart and its reflection.
This may be easiest and most precise for the
points furthest from the center of the pic‐
ture, but any edge point of the red heart
would suffice. Let θ be the cone’s half apex
angle. Let r be the measured ratio of the
(angular) distance from the perceived im‐
age to the mirror and the perceived im‐
age to the original point. Then, tanθ
tan2θ =
r, so θ = arccos 1 √
2(1−r)
, or alternatively
arctan
√
1 − 2r. Of course, the apex angle is
2θ, which is double the above.
For measured r = 0.25, we have the an‐
swer 2θ ≈ 1.22 radians, or 71 degrees.
Grading: (preliminary)
• Stating that the image is formed by vertical
rays as the camera is far away (0.5pts)
• Correct explicit expression of θ with re‐
spect to r (or some other measurable vari‐
able) (1pts) (if not found, partial points
can be earned as below)
– Correct geometrical figure (0.2pts)
– r = tanθ/tan2θ or equivalent or a cor‐
rect implicit equation for θ (0.5pts)
• Correct numerical answer 2θ ∈ [65◦
,76◦
]
(0.5pts) (only if approach is correct)
– If only θ is given and not 2θ (‐0.2pts)
ii) (1 point)The contribution of gravity along
thesideoftheconehastobeequaltothecon‐
tribution of the centrifugal force. As such,
mg cosθ = mv2
R sinθ, so v =
√
Rg cotθ.
Grading: (preliminary)
• Correct force balance (0.5pts)
• Correct expression for v (0.5pts)
• Mistakes in trigonometry (‐0.1pts)
iii) (2.5 points) The puck’s energy is the
sum of its gravitational potential energy and
its kinetic energy, so for a maximal ver‐
tical displacement hf, and the speed vf at
that moment, we have E = v2
8 + ghf =
v2
f
2 . From the conservation of angular mo‐
mentumbetweentheinitialmomentandthe
minimal distance to axis moment, when the
velocity is horizontal, we can deduce that
v
2R = vfRf, where Rf is the minimal dis‐
tance to the cone’s axis. We can relate hf and
Rf through
R−Rf
hf
= tanθ. Then, hf = (R −
Rf)cotθ. Replacing hf and vf in the energy
conservation, v2
8 = v2
R2
8R2
f
− g(R − Rf)cotθ.
Replacing v2
= Rg cotθ and solving the third
degreepolynomialinRf,8R3
f −9RR2
f +R3
=
0, yields the roots R, 1+
√
33
16 R, and some neg‐
ative value. Our minimal radius is, as such,
1+
√
33
16 R ≈ 0.42R.
Grading: (preliminary)
• Idea of using energy and angular mo‐
mentum conservation (0.2pts) (0.1 pts for
each)
• Correct energy conservation (0.5pts)
• Correct angular momentum conservation
(0.5pts)
• Correct relation between hf and Rf
(0.1pts)
• Correct third degree polynomial (0.5pts)
• Picking the physically relevant solution
(0.5pts)
• Correct final answer (0.2pts)
Puck at t=0
Puck trajectory
Asymptotic direction relative to vertex
φ = πsin(θ)
φ φ
φ
Cone vertex
iv) (2.5 points)Let us unfold the cone and re‐
peat its pattern, as in the figure above. We
notethattherelationbetweentheapexangle
and the angle of the unfolded cone are re‐
¹Weighing the string on a scale, we found the true value to be 0.135 g.lated through the area of a cone πL2
sinθ =
φL2
and as such φ = π sinθ. The puck’s
trajectory is a straight line starting perpen‐
dicular to the edge of our unfolded cone.
The radius vector will rotate, in our draw‐
ing, by 90◦
= π/2 over an infinite period
of time. To match the rotation on our rep‐
resentation of the cone with the rotation of
the radius vector, we remind ourselves that
a 360 = 2π degree rotation of the radius vec‐
tor matches a 2φ rotation on our drawing. As
such, the number of radians of rotation will
be π
2
2π
2π sinθ = π
2sinθ .
Grading: (preliminary)
• Idea of folding out the cone (0.2pts)
• Stating that the trajectory is a straight line
in the folded plane (1pts)
• Correct90degreerotationinthefoldedpic‐
ture or a correct figure (0.6pts)
• Correctrelationbetweenrotationinthefol‐
dedplaneandtherotationoftheradialvec‐
tor (0.7pts)
– Using θ instead of 2θ as the apex angle
(‐0.3pts)
Solution 2 by Eppu Leinonen
Let ϕ be the total rotation angle of the
radius vector and r its length. The speed
related to ϕ̇ is rϕ̇ and the speed related to
ṙ is ṙcscϕ, the projection of which to the
radial axis is ṙ. Thus energy conservation
states that r2
ϕ̇2
+ ṙcscθ = v2
. Also the pro‐
jection of the angular momentum onto the
symmetry axis is also conserved and as such
r2
ϕ̇ = Rv. From this we solve ϕ̇ and substi‐
tute to the energy conservation equation to
get ṙ = v
p
1 − (R/r)2 sinθ. Integrating both
sides from time t = 0 to t = t (r(0) = R
and r(t) = r) yields r2
=
p
R2 + v2t2 sin2
θ.
Then ϕ̇ = Rv
R2+v2t2 sin2 θ which we can integ‐
rate from t = 0 to t = ∞ by noticing that
arctan′
x = 1/(1 + x2
) which gives ϕ∞ =
π
2sinθ .
Grading: (preliminary)
• Idea of using energy and angular mo‐
mentum (projection) (0.1pts) (both re‐
quired for points)
• Correct energy conservation with respect
to ϕ and r velocity components (can be
named freely e.g. vr and vϕ) (0.4pts)
• Correct angular momentum (projection)
conservation (0.4pts)
• Equivalent form ṙ = v
p
1 − (R/r)2
(0.5pts)
• Solving r(t) (partials below) (0.5pts)
– Correct integration boundaries (0.1pts)
• Solving ϕ∞ (partials below) (0.6pts)
– Setting up integral of the form ϕ∞ = R
Rv/r2
(t)dt (0.1pts)
– Correct integration boundaries (0.1pts)
– 1/sinθ dependence (0.3pts)
Solution 3 by Eppu Leinonen
Split the velocity into two components:
the velocity from changing angle of the ra‐
dius vector ϕ, v⊥, and the velocity up along
theconev∥.Incylindricalcoordinatesthera‐
dial force law now states N cosθ = mv⊥ϕ̇ −
mv̇∥ sinθ and the vertical force law now
states N sinθ = mv∥ cosθ. From this we can
solve for ϕ̇ = v̇∥/(v⊥ sinθ). From conserva‐
tion of energy v⊥ =
p
v2 − v∥ and thus ϕ∞ =
1
sinθ
Rv
0
dv∥
√
v2−v2
∥
= π
2sinθ . The integral can be
calculated easily by recoginising that it rep‐
resents a quarter of the area of a unit circle.
Grading: (preliminary)
• Correctradialandverticalequationsofmo‐
tion (0.4pts) (0.2 for each)
• Representingtheminϕ,v∥,v⊥ (0.4pts)(0.2
for each)
• Correct relation between ϕ̇ and v⊥, v̇∥
(0.5pts)
– For wrong trigonometric dependence (‐
0.2pts)
• Usingtheenergy conservationlawto relate
ϕ̇ to only v⊥ or v∥ and derivatives (0.7pts)
• Solvingtheintegral(0.5pts)(partialpoints
below)
– Correct integration boundaries (0.1pts)
– Noticing the area of a circle (0.2pts)
Solution4byAleksiKononenandEppuLeinonen
Split the velocity into two components:
the velocity from changing angle of the ra‐
dius vector ϕ, v⊥, and the velocity up along
the cone v∥. Go to the frame corotating with
puck. In this frame, there will be three iner‐
tial forces on the puck: centrifugal, Coriolis,
and Euler. Both the Coriolis and Euler forces
point perpendicularly to v∥ and tangentially
to the cone. However, as the frame is coro‐
tating v̇′
⊥ = 0 in the frame, and thus the
Coriolis and Euler forces must cancel. This
means that the radial component of the nor‐
mal force is Nr = mv2
⊥/r. Thus back in the
inertial frame we get v̇∥ =
v2
⊥
r sinθ. On the
other hand ϕ̇ = v⊥/r = 1
sinθ v̇∥/v⊥. From en‐
ergy conservation v⊥ =
q
v2 − v2
∥ and thus
ϕ∞ = 1
sinθ
Rv
0
dv∥
√
v2−v2
∥
= π
2sinθ . The integral
can be calculated easily by recoginising that
it represents a quarter of the area of a unit
circle.
Grading: (preliminary)
• Argument for why the radial compon‐
ent of the normal force is equal mv2
⊥/r
(0.7pts) (partials below for non‐inertial
frame method)
– Noting that in the inertial frame there
are three inertial forces (0.1pts)
– Noting that Coriolis and Euler forces are
parallel to v⊥ (0.3pts)
– Noting that Coriolis and Euler forces
must be equal as v̇′
⊥ = 0 (0.3pts)
• Noting that the radial component normal
force is equal to mv2
⊥/r (0.1pts)
• Correct relation between ϕ̇ and v⊥, v̇∥
(0.5pts)
– For wrong trigonometric dependence (‐
0.2pts)
• Usingtheenergy conservationlawto relate
ϕ̇ to only v⊥ or v∥ and derivatives (0.7pts)
• Solvingtheintegral(0.5pts)(partialpoints
below)
– Correct integration boundaries (0.1pts)
– Noticing the area of a circle (0.2pts)
7. WAVEſ (4 points) — Solution by Tudor
Plopeanu.
i) (1 point) Both gkα
and σ
ρ kβ
’s dimension‐
alities are s−2
, while k’s dimensionality is
m−1
. The surface tension’s dimensionality is
kg /s2
. As such, α = 1 and β = 3.
Grading: (preliminary)
1. Dimensional analysis (or similar tech‐
nique). (0.2pts)
2. Units of σ (0.2pts)
3. α = 1. (0.3pts)
4. β = 3. (0.3pts)
ii) (3 points)
The phase and group velocities of the
wake are equal, i.e. dω
dk = ω
k . We can find
ω
k from the Mach angle formed by the wave
front in the picture: sinµ = ω
Uk. Differenti‐
ating the dispersion relation,
2ω
dω
dk
= (g +3
σ
ρ
k2
) =⇒ 2ω2
= k(g +3
σ
ρ
k2
).
Substituting our dispersion relation, we ob‐
tain g = σ
ρ k2
and ω2
= 2gk. Substituting
g
1
2 = (σ
ρ )
1
2 k, we reach ω2
k2 = 2(gσ
ρ )
1
2 . Thus,
we can find
σ =
ρU4
sin4
µ
4g
≈ 60gs−2
.
for measured µ ≈ 21.5°.
Grading: (preliminary)
1. Identifying dω/dk = ω/k. (0.6pts)
2. Correct angle i.e. sin(µ) = ω/(Uk)
(0.6pts)
3. Measuring µ from the picture (0.4pts)
4. Value µ ∈ [20◦
,30◦
] (0.3pts)
5. Calculatethederivativedω/dk (0.4pts)
6. Correct expression for σ (0.4pts)
7. Value σ ≈ 60gs−2
(0.3pts)
8. AıRPLANEſ (7 points) — Solution by Tudor
Plopeanu.i) (1 point) Let ⃗ w be the speed of the wind at
the airplanes’ altitude, and let ⃗ u1 and ⃗ u2 be
the planes’ respective speeds in absence of
wind. ⃗ v1 = ⃗ w + ⃗ u1, ⃗ v2 = ⃗ w + ⃗ u2. Let O′
be the point such that ⃗ OO′ = ⃗ w, A the point
suchthat ⃗ OA = ⃗ v1, andB thepointsuchthat
⃗ OB = ⃗ v2. As |⃗ w − ⃗ v1| = |⃗ w − ⃗ v2|, we know
that O′
lies on the perpendicular bisector of
(AB), which we shall denote as l. A quick
check also yields that all points on this line
are valid selections for ⃗ w. |⃗ u1| = |AO′
|. We
can find the minimal airspeed as the length
of the perpendicular from A to l, of length
|AB|/2. For a vector result in terms of⃗ v1 and
⃗ v2, we have
|⃗ u1|min = |⃗ v1 −⃗ v2|/2
=
1
2
q
v2
1 + v2
2 − 2v1v2 cosα.
Grading:
Thisisrelevantforallthreesubproblems.
The solutions are mainly geometric, how‐
everseveralstudentshavetriedsolvingitina
more algebraic manner. If it yielded the cor‐
rect answer or near correct answer, points
weregiven,butotherwisepartialpointswere
not given.
• Representingtheproblemwithvectorsand
adding the velocities correctly (0.2pts)
• Wrong order or sign (‐0.1pts)
• The wind velocity vector w on perpendicu‐
lar bisector of (AB) (0.4pts)
• The minimum airspeed needs w to lie on
the intersection of AB and the perpendic‐
ular bisector (0.1pts)
• calculating correct answer (0.3pts)
• Small error but reasonable answer with
correct units, or not expanded answer that
is simple to expand (‐0.1pts)
ii) (3points)The minimal wind speed is given
by the length of the perpendicular from O to
l. This is the length of (⃗ v1 + ⃗ v2)/2 projected
on ⃗ v1 −⃗ v2, and can be found as
|⃗ w|min =
|(⃗ v1 +⃗ v2) · (⃗ v1 −⃗ v2)|
2|⃗ v1 −⃗ v2|
=
||⃗ v1|2
− |⃗ v2|2
|
2|⃗ v1 −⃗ v2|
=
|v2
1 − v2
2|
2
p
v2
1 + v2
2 − 2v1v2 cosα
.
Grading:
• Representingtheproblemwithvectorsand
adding the velocities correctly (0.5pts)
• The wind velocity vector w on perpendicu‐
lar bisector of (AB) (0.5pts)
• Thewindvelocityissmallestwhenitisper‐
pendicular to l (0.5pts)
• Calculating the correct answer (1.5pts)
• Small error but reasonable answer with
correct units, or not expanded answer that
is simple to expand (‐0.5pts)
iii) (3 points) In this situation, |⃗ w − ⃗ v1| =
2|⃗ w − ⃗ v2|, so O′
is on the Apollonius’s circle
with respect to the points A and B, such that
the points on the circle are 2 times closer to
B thantoA. LetitscenterbeO′′
. Itsradiusis
RA = 2|⃗ v1 −⃗ v2|/3 (this can be found by con‐
sidering the intersection points of the Apol‐
loniuscirclewiththelineAB). Wearetasked
to find the shortest distance from O to this
circle,whichisfoundas|OO′′
|−RA. Wenote
that ⃗ OO′′ = (4/3)⃗ v2 − (1/3)⃗ v1. The minimal
wind speed is thus
|⃗ w|min =
4
3
⃗ v2 −
1
3
⃗ v1 −
2
3
|⃗ v2 −⃗ v1|
=
√
17 − 8cosα − 4sin α
2
3
v.
Grading:
• Representingtheproblemwithvectorsand
adding the velocities correctly (0.2pts)
• The wind velocity vector w needs to lie
on the Apollonius circle (doesn’t need the
name) (1.3pts)
• if one realises it is a circle, but not the cor‐
rect one (0.5pts) is given
• Calculating the RA (0.5pts)
• Calculating the correct answer (1pts)
• Small error but reasonable answer with
correct units, or not expanded answer that
is simple to expand (‐0.5pts)
9. TRıANGLE (5 points) — Solution by Tudor
Plopeanu.
Let us consider points A, where the de‐
tachedballis,andM,themiddlepointofthe
remainingstring. LetGbethecenterofmass
of the three balls, lying on the segment [AM]
such that GA = 2GM.
As the same gravity force acted on all
the balls, we can consider their free‐falling
frame and note that our lab‐frame picture is
simplyatranslationofasimilarpicturetaken
in the free‐falling frame. As such, we can
work in the free‐falling frame, and assume
that both the detached ball and the center of
mass of the other two balls have moved in a
straight line (A and M have moved linearly
in time). The overall center of mass, G, has
not moved at all.
One can easily find the length of the rope
from the picture, let us denote it as l. Be‐
fore the ropes snapped, the balls were rotat‐
ing around G, their trajectories being tan‐
gential to the circle of center G and radius √
3
3 l. The ball which detached continued in
this trajectory until it reached point A. As
such, we know that the length the ball has
traveledisequaltothelengthofitstangentto
C(G,
√
3
3 l). This length is
q
AG2 − l2
3 = vT,
where v is the speed of the detached ball.
Forthetwoballsthatarestillattached,the
angular momentum they had with respect to
theircenterofmassispreserved,andassuch
they have been rotating around it with speed √
3
2 v. The angle by which they have rotated
is θ =
√
3v
l T =
√
3AG2−l2
l =
q
4
3(AM
l )2 − 1.
For a measured value of AM
L ≈ 4.8, θ ≈ 5.5
radians.
We can discover the same angle geomet‐
rically: let us consider the tangents from M
to C(G,
√
3
6 l). Each line represents a case,
whether the rotation was clockwise or coun‐
terclockwise. The string that remained at‐
tached went alongside each of these lines,
respectively, when the other two strings
snapped. The ”top” line represents clock‐
wise rotation and the ”bottom” line repres‐
ents counterclockwise rotation. As such,
the angle should be measured clockwise and
counterclockwiserespectively. Theonemost
fitting is for the counterclockwise rotation.
Grading: (preliminary)
• Student displays knowledge of the situ‐
ation (rotating in a plane perpendicular to
the ground etc.) (0.5pts)
• Determines COM (0.5pts)
• Draws (or detailed describes) trajectory
after separation and does so correctly
(paralell but not colinear lines of COM‐
travels etc.). (0.5pts)
• Showing that ω1 = ω2 (triangle and two‐
connected balls) (1pts)
• For each formula: v1 = ωir, s1 = v1T,
α = ω2T (0.2pts)
• Correct final expression α = s1
r (0.4pts)
• Correct final value α = 5.6 rad (with
some tolerance for measurement errors)
(0.5pts)
• For (ii): full marks if correct. Requires (i)
tobecorrect. Answeriscounter‐clockwise.
In exceptionally well motivated cases, half
marks are awarded for correct reasoningeven from incorrect answers in part (i).
(1pts)
10. KıTCHEN PHYſıCſ (12 points) — Solu­
tionbyTudorPlopeanu,gradingschemesbyEero
Uustalu, Mihhail Olentšenko and Uku Andreas
Reigo.
i) (6 points)The multimeter given is not pre‐
cise enough to measure the resistance of the
aluminium foil coating as‐is. To increase the
resistance, we cut it in a long, thin band
of approximately the same width. We also
scrape the ends of the band (with a sponge)
in order to improve the contact with the cro‐
codile clips. We plug the multimeter into a
circuit with the aluminium band, and meas‐
ure the resistance R = ρl
S , where S is the
cross‐section area and l is the length of our
band. As S is the product of thickness t and
the width w of our band, we find
t =
ρl
Rw
≈ 6.3µm.
Note: directly measuring the width of the
aluminium foil (for example by folding it a
fewtimesfirst)wouldyieldaninaccurateres‐
ult due to the paper component of the mater‐
ial.
ii) (6 points) First, we measure the thick‐
ness of our plastic wrap by folding it enough
times to reach our equipment’s precision:
t ≈ 13.5µm.
Then, we set the wrap between two alu‐
minium foils, such that a measured surface
S of film is sandwiched between the alu‐
minium foils (and, of course, the aluminium
foils do not touch or, otherwise, a short‐
circuit is formed). Thus we have created a
capacitor. Its design is imperfect, as there
are air gaps in between the layers. In order
to minimize the airgaps, we will physically
press on the set‐up using the wooden lamin‐
ated plate (while adding some padding, for
the pressure to be distributed closer to uni‐
formly).
All that is left is to connect the multi‐
meter to the capacitor, by connecting each
crocodile clip to a different aluminium foil.
While the readings can be rather chaotic,
weshallconsiderthehighestvaluedisplayed
on the multimeter, as it corresponds to the
lowest amount of air inside the setup.
C =
εε0S
d
=⇒ ε =
Cd
ε0S
≈ 5
We repeat the experiment, perhaps also
considering different surface areas for our
capacitor.
Grading: (preliminary)
For the first part, solution through resist‐
ance is graded.
• The idea that resistance of foil strip can
be used to calculate thickness of the foil
(0.4pts)
• The idea (or implication by specifying
length) that length has to be maximized
to achieve reasonably precise multimeter
measurements by cutting the material into
long strips (0.8pts)
• The idea (or implication by specifying
width) that width has to be minimized
to achieve reasonably precise multimeter
measurements by cutting the material into
thin strips (0.8pts)
• Width is large enough to be cut by hand
precisely and consistently: w ≥ 8mm is
(1.3pts); 6mm ≤ w < 8mm is (0.9pts);
3mm ≤ w < 6mm is (0.5pts)
• Length is large enough to give sufficient
resistance, bag height is not enough: l ≥
2m is (1.0pts); 1.4m ≤ l < 2m is (0.6pts);
0.8m ≤ l < 1.4m is (0.3pts); 0.34m ≤ l <
0.8m is (0.1pts)
• Correct formulae are used for resistance
and cross‐section area (0.2pts)
• Correct thickness value t is calculated:
5µm ≤ t ≤ 7.5µm is (1.5pts); 4µm ≤
t ≤ 9µm is (1.0pts); 3µm ≤ t ≤ 12µm
is (0.5pts)
If aluminium foil has not been properly
cleaned (can be seen from too high resist‐
ance), points are halved and rounded up if
need be.
Through direct measurement, no correct
value of aluminium foil thickness t can be
achieved due to paper layer, which makes
≈ 90% of the foil total thickness. No points
are given, unless idea of separating the lay‐
ers is proposed (0.4pts); if folding of mul‐
tiple layers is mentioned, additionally give
(0.8pts)
For the second part, one solution can be
graded.
• Idea to use capacitor (it is not enough to
simply mention capacitance) (0.8pts); if
no follow up ideas (why is the capacitor
used) is provided, or described capacitor is
inadequate for the task, give (0.4pts)
• Idea to fold plastic wrap (at least 8 layers
required for maximum points) (0.6pts)
• Thickness of plastic wrap t is measured
correctly: 12µm ≤ t ≤ 15µm is (0.6pts);
11µm ≤ t ≤ 17µm is (0.3pts)
• Clean aluminium foil is used as plates of
the capacitor (0.4pts); if laminated foil
is used and lamination is mentioned as a
factor, give (0.2pts)
• Idea that air between plates will decrease
capacitance due to increased distanced
between plates and decreased average per‐
mittivity (0.6pts)
• The correct execution of pressure applica‐
tiontothecapacitortopushoutairbubbles
and straighten out the material (0.4pts);
if done imperfectly, give (0.2pts); if max‐
imum surface area is desired and used (lar‐
ger than wooden plate) and application of
pressure is impossible, give (0.4pts)
• Cushioning foam is used to equally dis‐
tribute pressure and avoid damage to the
materials (0.8pts); if done imperfectly or
placed between the capacitor plates, give
(0.4pts)
• Correct formulae are used (0.3pts)
• Correctanswerisgivenincaseofcleanfoil:
4 ≤ ε ≤ 5.5 is (1.5pts); 3 ≤ ε ≤ 6 is
(0.9pts); 2 ≤ ε ≤ 6.5 is (0.3pts); in case
if laminated foil is used: 2 ≤ ε ≤ 2.5 is
(1.0pts); 1.5 ≤ ε ≤ 3 is (0.4pts)
Note: if answer is guessed or acquired
from wrongful idea, no points are given.
