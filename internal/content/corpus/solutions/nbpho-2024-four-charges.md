---
id: nbpho-2024-four-charges
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2024-four-charges
solution_type: official
source_document: solution-document-nbpho-2024-s
source_pdf: cache/phoxiv/nbpho/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2024_S.pdf."
---

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
,
and from the conservation of energy using
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

(c + a)2
c2 − a2
− 1

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

1
2a
·
c − a
c + a
+
1
c + a

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
