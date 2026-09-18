---
id: kevin-zhou-e4-p020
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e4-p020
solution_type: author
source_document: solution-document-kevin-zhou-e4sol
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E4Sol.pdf."
---

[4] Problem 20. [A] Consider a point charge of mass m and charge q in the field of a magnetic
monopole at the origin,
B =
g
r2
r̂.
In this problem we’ll investigate the strange motion that results.
(a) Argue that the speed v is constant.
(b) Show that the angular momentum L of the charge is not conserved, but that
V = L − qgr̂
is. The second term is the angular momentum stored in the fields of the charge and monopole.
(c) Show that the charge moves on the surface of a cone.
Solution. (a) The force is qv × B ⊥ v, so no work is done on the particle, so its speed remains
the same.
(b) Note that
˙ r̂ =
d
dt
r
r
=
ṙr − ṙr
r2
=
ṙr − rr·ṙ
r
r2
= (r̂ · r̂)
ṙ
r
−

r̂ ·
ṙ
r

r̂ = r̂ ×

ṙ
r
× r̂

=
1
r2
r × (ṙ × r̂).
We have L̇ = τ = r × (qṙ × (g/r2)r̂) = qg˙ r̂, so L − qgr̂ is conserved.
(c) Take coordinates so that V is directed along ẑ and the particle is instantaneously in the xz
plane. Now take the y-component of the above equation, to give Ly = 0. In components, this
tells us that xpz − zpx = 0, or in other words that ẋ/ż = x/z. By drawing similar triangles,
this implies that the particle is momentarily moving so that x/z is conserved. So in general
s/z is conserved, where s is the distance to the z-axis. This defines a cone.
In a typical trajectory, the charge spirals in towards the monopole along this cone, reaches
some minimum distance from it, then turns around and spirals out. In fact, if the cone is “cut
and unfolded” and laid flat, the trajectory is a straight line! In other words, it is a geodesic
on the cone. (Some aspects of this motion were covered in USAPhO 2026, problem A2.)
One can do problem 18 slickly using field transformations, an advanced subject we will cover in R3.
Idea 4: Field Transformations
If the electromagnetic field is (E,B) in one reference frame, then in a reference frame moving
with velocity v with respect to this frame, the components of the field parallel to v are
E′
∥ = E∥, B′
∥ = B∥
19
Kevin Zhou Physics Olympiad Handouts
while the components perpendicular are
E′
⊥ = γ(E⊥ + v × B), B′
⊥ = γ

B⊥ −
v
c2
× E

.
Remark: Galilean Field Transformations
The nonrelativistic limit of the field transformation is useful, but one has to be careful in
deriving it. You might think, what’s the need for care? Can’t we just send c → ∞, Taylor
expand the above expressions, and call it a day? The problem with this reasoning is that
there’s no such thing as setting c → ∞. You can’t change a fundamental constant, and
moreover this statement isn’t even dimensionally correct, as noted in P1. What we really
mean by the nonrelativistic limit is restricting our attention to some subset of possible
situations, within which relativistic effects don’t matter.
For example, if we have a bunch of point charges with typical speed v, then the nonrelativistic
limit is considering only situations where v/c is small. In other words, we are taking v/c → 0,
not c → ∞. Since the magnetic field of a point charge is v/c2 times the electric field, the
magnetic field ends up small. Now if we also consider boosts with small speeds v, then
expanding the field transformations to lowest order in v/c gives
E′
= E, B′
= B −
v
c2
× E.
This is the nonrelativistic limit for situations where E/B ≫ c, also called the electric limit.
However, there’s another possibility. Suppose that we have a bunch of current carrying,
approximately neutral wires. In this case, it’s the electric fields that are small, E/B ≪ c.
Using this in the transformations above, we arrive at the distinct result
B′
= B, E′
= E + v × B
which apply for situations where E/B ≪ c, also called the magnetic limit.
You might think we could improve the approximation by combining the two,
E′
= E + v × B, B′
= B −
v
c2
× E
but this isn’t self-consistent. For example, if you apply a Galilean boost with speed v, and
then a boost with speed −v, you don’t get back the same fields you started with! A sensible
Galilean limit is only possible if E/B ≫ c or E/B ≪ c, which are called the electric and
magnetic limits. It’s only in relativity that E and B can be treated on an equal footing.
By the way, whenever relativity or similarly subtle physics is involved, internet sources will
be generally poor. If you search for “Galilean electrodynamics”, the first result will be a
journal for papers that deny relativity. If you want to learn more, just read this classic paper.
