---
id: solution-document-gpho-2016-theory-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2016_theory_solutions.pdf
extraction_method: pdftotext-raw
mapped_problems: [gpho-2016-t1, gpho-2016-t2, gpho-2016-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2016_theory_solutions.pdf."
---

Problem T1. Stabilizing unstable states (11
points)
Part A. Stabilization via feedback (3.5 points)
i. (1.5 pts) The moment of inertia of the rod is
I = ml2
3 . The torque is mgφl
2 . (0.4pts)
so that the Newton’s 2nd law is written as
Iφ̈ = mg
φl
2
φ̈ =
3
2
g
l
φ. (1)
(0.4pts)
If we take φ = Ae
t
τ + Be− t
τ , then
φ̈ = A
τ2 e
t
τ + B
τ2 e− t
τ = φ
τ2 . (0.3pts)
Substituting this into the equation of motion (1) we get
φ
τ2
=
3
2
g
l
φ
τ =
√
2
3
l
g
.
(0.4pts)
This means that φ = Ae
t
τ +Be− t
τ is the solution for the equa-
tion of motion.
ii. (0.5 pts) The boy has to react before the rod falls over the
angle π
2 . Boy notices that the rod is falling, and tries to react.
If the rod falls faster than his reaction time, he cannot keep it
in balance. In the expression φ = Ae
t
τ + Be− t
τ , the dominat-
ing term is the first one (the second one decays in time), so we
can put φ = Ae
t
τ , where A is the angle at t = 0. Hence, the
falling time t = τ ln(π/2A) depends on the initial angle A, but
logarithmic dependence is very slow — the logarithm remains
always of the order of unity. So we can estimate the falling time
just as the characteristic time of the rod. This means that
τr ≈
√
2
3
lr
g
(0.3pts)
lr = τ2
r
3g
2
= 0.59m
(0.2pts)
iii. (0.5 pts) The bird won’t be able to rebalance itself when
it has fallen over π
2 . Similarly to the previous question, we can
say that the bird’s reaction time must be equal to the charac-
teristic time τb. (0.3pts)
Then we get
τb ≈
√
2
3
lb
g
= 0.065s
(0.2pts)
iv. (1 pt) The cyclist is able to balance himself by turning
the handlebar so that the line connecting the wheels will move
to the desire direction. For that line to move, the bike must
move forward to a distance which is of the order of inter-wheel
separation. So we can require vmτ ≈ d, where τ is bike’s char-
acteristic falling time. (0.5pts)
Note that with this equation we neglect the cyclists’ reaction
time (which makes balancing more diﬃcult) but on the other
hand the line connecting the wheels moves slightly already at
a twice smaller forward-displacement of the bike (which makes
balancing easier). Anyway, we are only making an estimate, so
a mistake by a factor of 2 is perfectly OK.
Then we get
d = vmτ = vm
√
2
3
L
g
(0.2pts)
vm = d
√
3
2
g
L
= 2.7m/s
(0.3pts)
Part B. Tightrope walker (3.5 points)
i. (1 pt) From the conservation of angular momentum
m(1.4H)2 dα1
dt
+ mH2 dα2
dt
= Const.
(0.3pts)
Partial credit 0.2 pts if the conservation is mentioned without
writing equation. This process is instantaneous, i.e. dα1
dt and
dα1
dt are very large, much large than that constant at the right-
hand-side (which is defined by the initial falling speed), hence
we can put Const= 0.
(0.2pts)
This simplifies into
1.96∆α1 = −∆α2 (2)
(0.1pts)
We also have
β = α1 − α2 = (α0 + ∆α1) − (α0 + ∆α2) = ∆α1 − ∆α2 (3)
(0.2pts)
Solving the equations (1) and (2) we get
α1 = α0 +
β
2.96
(0.1pts)
α2 = α0 −
1.96
2.96
β
(0.1pts)
ii. (0.5 pts) In order to be able to straighten himself, the
walker’s centre of mass has to move leftwards, by a negative
— page 1 of 7 —angle. (0.1pts)
By changing the upper body’s angle by ∆α1, the lower
body’s angle will change by ∆α2 = −1.96∆α1. The centre
of mass will then move by
1.4H∆α1 + H∆α2 = 1.4H∆α1 − 1.96H∆α1 = −0.56H∆α1
(0.3pts)
Because the centre of mass will have to move by a negative
angle, ∆α1 needs to be positive, which means that the walker
has to bow clockwise. (0.1pts)
iii. (1 pt) We can write the equation of motion
2.96 ¨ α1H = 2.4gα1
Similarly to the question i. in part A, the solution for this dif-
ferential equation is α1(t) = Ae
t
τ +Be− t
τ , where τ =
√
2.96
2.4
H
g .
(0.2pts)
Because the time it takes to get to the vertical position is
infinite, the component Ae
t
τ needs to be 0, meaning that
α1(t) = Be− t
τ . (0.3pts)
By taking time derivative, we obtain
α̇1 = −1
τ Be− t
τ . (0.3pts)
For the instance when the boy straightened himself, t = 0, the
equations take form α1 = B and α̇1 = −B
τ . So, α̇1 = −α1
τ ,
which can be rewritten as
α̇1
α1
= −
1
τ
= −
√
2.4
2.96
g
H
(0.2pts)
iv. (1 pt) After the walker has straightened himself, the angle
which he is at is still α0, because during stage where he is bow-
ing, the torque is much larger than when he is straightened,
meaning that the change in angular speed is much larger than
the change in the angle. (0.1pts)
As found in the previous subquestion, the speed before and
after the bowing are α0
τ and −α0
τ respectively. Then the change
in the angular momentum is
∆L = −5.92mH2 α0
τ
(0.3pts)
Because during the falling stage the change in angle is minus-
cule, we can express the change in angular momentum as
∆L = MTb, where M is the torque during bowing stage.
(0.2pts)
During the bowing stage, the angles of the body segments are
α1 = α0 +
β0
2.96
≈
β0
2.96
α2 = α0 −
1.96
2.96
β0 ≈
1.96
2.96
β0
The torque can be expressed as
M = 1.4mgHα1 + mgHα2 =
1.4
2.96
β0mgH −
1.96
2.96
β0mgH = −
0.56
2.96
β0mgH
(0.3pts)
Writing out ∆L = MTb we get
−5.92mH2 α0
τ
= −
0.56
2.96
β0mgHTb
Tb = 31.29
α0
β0
H
τg
= 31.29
α0
β0
H
g
√
2.4
2.96
g
H
= 28.18
α0
β0
√
H
g
(0.1pts)
Part C. Kapitza’s pendulum (4 points)
Throughout the entire problem, we use the system of refer-
ence of the suspension point.
i. (1.5 pts) During these periods of time when the suspension
point accelerates upwards (and force of inertia is downwards),
the equation of motion of the pendulum can be written as
d2
φ
dt2
=
a0
l
φ,
where a0 = 2v0/T is the frame’s acceleration. (0.4pts)
Incomplete attempts at writing Newton second law will be par-
tially credited (0.2 pts).
The relative change of φ is assumed to be small, so we can
approximate φ ≈ φ0 to obtain
d2
φ
dt2
=
2v0
Tl
φ0.
(0.2pts)
During the rest of the time, the same equation can be used if
a0 is changed to −a0. (0.2pts)
Therefore, the graph consists of parabolic segments, as depic-
ted in the Figure. (0.4pts)
The amplitude is found as
∆φ =
1
4
v0T
l
φ0.
(0.3pts)
ii. (1.5 pts)
The average torque ⟨M⟩ = ⟨mla(t)φ(t)⟩. (0.3pts)
Let us note that ⟨a(t)⟨φ⟩⟩ = ⟨a(t)⟩⟨φ⟩ = 0. (0.3pts)
Therefore we can rewrite the average torque as
— page 2 of 7 —⟨M⟩ = ⟨mla(t)[φ(t) − ⟨φ⟩]⟩ = −ml
2v0
T
⟨|φ(t) − ⟨φ⟩|⟩
(0.3 pts; if wrong sign 0.2pts)
It is easy to see that the average of |φ − ⟨φ⟩| over the entire
period equals to the average over the time interval 0 < t < τ.
Straightforward integration yields
⟨|φ − ⟨φ⟩|⟩ =
2
T
∫ T/2
0
∆φ
(
1 −
4t2
T2
)
dt =
2
3
∆φ =
1
6
v0T
l
φ0.
(0.4pts)
Upon substituting this result into the previous expression we
obtain
⟨M⟩ = −
1
3
mv2
0φ0.
(0.2pts)
iii. (1 pt) Gravity field does not aﬀect the expression for the
average torque of the force of inertia. So, we can use the result
of the previous question. However, it gives rise to an additional
contribution to the average torque, equal to glmφ0. (0.4pts)
Therefore, the equation of motion can be written as
l2 d2
φ0
dt2
=
(
gl −
1
3
v2
0T2
)
φ0.
(0.4pts)
The stability is ensured if the factor at the right-hand-side is
negative, i.e. if 3gl < v2
0. (0.2pts)
— page 3 of 7 —Problem T2. Gravitational waves (10 points)
Part A. Dipole radiation (2.4 points)
For the sake of convenience, let us denote k = 1
4πϵ0
i. (1.4 pts) The total dipole moment can be expressed as
⃗ d = −⃗ r1e +⃗ r2Ze, (0.2pts)
where ⃗ r1 and ⃗ r2 are the position vectors of the electron and
nucleus respectively. Then
¨ ⃗ d = −¨ ⃗ r1e + ¨ ⃗ r2Ze = −
⃗ F
me −
⃗ F
m1
Ze,
(0.1pts)
but because the mass of the nucleus m1 is much larger than m,
we can neglect the second term. Then
¨ ⃗ d = −
⃗ F
m
e =
kZe3
mr2
(0.3pts)
Ped =
¨ ⃗ d
2
4πϵ0c3
=
(
kZe3
mr2
)2
1
6πϵ0c3
(0.2pts)
We can express λ as λ = c
f = 2πrc
v . (0.2pts)
We get v from the relation mv2
r = kZe2
r2 , then v = e
√
kZ
mr .
(0.3pts)
Finally
λ =
2πrc
v
=
2πrc
e
√
mr
kZ
(0.1pts)
ii. (1 pt) We know that ⃗ dg =
∑
i ⃗ rimi. Let us recall that the
distance to centre of mass is
⃗ rcm =
∑
i ⃗ rimi
∑
i mi
.
Then (0.3pts)
⃗ dg =
∑
i
⃗ rimi = ⃗ rcm
∑
i
mi
(0.2pts)
(Equivalently one can notice that
˙ ⃗ dg =
∑
i ⃗ vimi the net mo-
mentum.) ⃗ rcm is constant because there aren’t any external
forces acting on the system. (0.3pts)
This means that
¨ ⃗ dg = 0 and Pgd = 0. (0.2pts)
Part B. Quadrupole radiation (7.6 points)
i. (1 pt) The force acting on one of the stars is
F = G
M2
4R2
=
Mv2
R
(0.6pts)
From here we can express the star’s speed v. We can express
the star’s angular speed from the relation ω = v
R. (0.2pts)
ω =
v
R
=
1
2
√
GM
R3
(0.2pts)
ii. (0.8 pts) The dimensions for A need to be
W
1
kg2m4
=
kgm2
s3
1
kg2m4
=
1
s3m2kg
(0.2pts)
A can only consist of the gravitational constant G, speed of
light c and angular velocity ω. (0.2pts)
We can write a system of equations for every unit, m, s and kg.
If we take the power of G, c and ω to be a, b and c respectively,
we can write out for metres
3a + b = −2,
(0.1pts)
for seconds
−2a − b − c = −3,
(0.1pts)
and finally for kilograms
−a = −1.
(0.1pts)
Solving the equations we get a = 1, b = −5 and c = 6, which
means that
A = G
ω6
c5
(0.1pts)
iii. (0.8 pts) The solution for this subquestion is the same as
for the previous one. The units for K are
W
m2
=
kg
s3
(0.2pts)
K can only depend on G, c and ω, (0.2pts)
if we take their powers to be a, b and c respectively, we can
write out for metres
3a + b = 0
(0.1pts)
for seconds
−2a − b − c = −3
(0.1pts)
and finally for kilograms
−a = 1
(0.1pts)
Solving the equations we get a = −1, b = 3 and c = 2, which
means that
K =
c3
ω2
G
(0.1pts)
— page 4 of 7 —iv. (1 pt) The flux at distance L is S =
Pqg
4πL2 , (0.4pts)
on the other hand we can express flux as S = Kh2
0. This means
that
Kh2
0 =
Pqg
4πL2
=
AM2
R4
4πL2
(0.4pts)
and finally
h0 =
√
AM2R4
K4πL2
=
√
Gω6
c5
G
c3ω2
M2R4
4πL2
=
Gω2
MR2
2
√
πc4L
=
G2
M2
8
√
πc4LR
(0.2pts)
v. (1 pt) At distance Rs from the black hole, it takes all
the energy mc2
for an object to overcome the potential energy
−GMm
Rs
. This means that
mc2
= G
Mm
Rs
.
(0.7pts)
(If non-relativistic energy mc2
/2 is used, deduct 0.3 pts.) From
here we can express Rs
Rs =
GM
c2
(0.1pts)
This answer is 2 times smaller than the correct one, which
means that
Rs =
2GM
c2
(0.2pts)
vi. (1.5 pts) We can estimate the mass of the black holes by
finding the orbital frequency and then using the expression we
found in the first subquestion (Kepler’s III law). (0.3pts)
The strain is maximal when the orbital radius for the black
holes is Rs. (0.3pts)
Reading from the graph, we get that the orbital period is
T ≈ 0.006s (0.3pts)
and frequency ω = 2π
T = 1000rad/s. Then
ω =
1
2
√
GM
R3
s
;
(0.2pts)
substituting Rs we obtain
ω =
1
2
√
GM
c6
8G3M3
=
c3
2
√
2GM
(0.2pts)
The mass of a black hole is
M =
c3
2
√
2ωG
= 1.45 × 1032
kg = 72M⊙
(0.2pts)
In reality the masses of the black holes were 36M⊙ and 29M⊙,
where M⊙ is the mass of Sun.
vii. (1.5 pts) As mentioned previously the maximal strain is
when the black hole’s orbital radius is Rs, reading from the
graph we get that the strain is h0 ≈ 0.9 × 10−21
. (0.4pts)
Then, using the result of question iv,
h0 =
G2
M2
8
√
πc4LRs
;
(0.4pts)
Substituting Rs we obtain
h0 =
G2
M2
8
√
πc4L
c2
2GM
=
GM
16
√
πc2L
(0.3pts)
The distance to the black hole is
L =
GM
16
√
πc2h0
;
(0.2pts)
numerically
L = 4.21 × 1024
m.
(0.2pts)
This can be also expressed in megaparsecs, L = 136Mpc. In
reality, the distance was L = 410Mpc ± 170Mpc.
— page 5 of 7 —Problem T3. Magnetars (11 points)
i. (1.5 pts) If we change the frog’s height by ∆h, the change
in potential energy needs to be smaller than the change in mag-
netic energy. (0.2pts)
Note that for every point in frog, the change in magnetic energy
is the same, thus we can express it as
∆E = −V
∆(B2
)χ
2µ0
= V
B2
0χ∆h
2h0µ0
(0.6pts)
The change in potential energy is
∆Π = V ρg∆h
(0.3pts)
Then
∆E + ∆Π < 0
V
B2
0χ∆h
2h0µ0
+ V ρg∆h < 0
(0.2pts)
This means that
B0 >
√
−
2h0µ0ρg
χ
(0.1pts)
and numerically
B0 = 5.32T.
(0.1pts)
ii. (1 pt) Let us observe a piece of the star with a volume V0
before the collapse and volume V1 after the collapse. The mass
before and after are same. This means that
V0ρs = V1ρn
(0.1pts)
The radius of the star scales as V 1/3
, (0.1pts)
and the cross-sectional area as V 2/3
. (0.1pts)
The total magnetic field through the volume is also the same
before and after the collapse:
BsV
2
3
0 = BnV
2
3
1
(0.4pts)
Now we can express Bn
Bn = Bs
(
V0
V1
)2
3
= Bs
(
ρn
ρs
)2
3
(0.2pts)
and numerically
Bn = 5.0 × 105
T
(0.1pts)
iii. (1 pt) During the collapse there is no torque on the
star, this means that the angular momentum remains constant.
Thus
2
5
MR2
sωs =
2
5
MR2
nωn
(0.6pts)
Recall that Rs is inversely proportional to ρ
1/3
s . (0.2pts)
Now we can express ωn
ωn = ωs
R2
s
R2
n
= ωs
(
ρn
ρs
)2
3
(0.2pts)
iv. (1.5 pts) After time t, the neutron star has turned by an
angle β = ωnt. (0.2pts)
The magnetic fields pass any radial line from the centre of the
neutron star on average N = β
2π = ωnt
2π times. (0.3pts)
The total magnetic flux entering the outer shell remains con-
stant, and thus is always equal to Φ = 2πR0B0, (0.3pts)
where R0 is the radius of the outer shell. This means that the
flux through any radial line is ΦN. (0.4pts)
Then
BR0 = 2πR0B0N = R0B0ωnt
(0.2pts)
And finally
B = B0ωnt
(0.1pts)
v. (1 pt) We can find the gravitational energy by integrating:
we imagine removing the material layers of thickness dx one by
one, starting from the outermost one. The potential energy for
a hollow sphere with a thickness dx in the gravity field of the
matter inside it is
dΠ = −G
(4πx2
dxρn)4
3πx3
ρn
x
= −
16π2
3
Gρ2
nx4
dx
(0.2pts)
Integrating from x = 0 to x = Rn we get
Π = −
16π2
15
Gρ2
nR5
n = −
3
5
GM2
n
Rn
(0.3pts)
A partial credit of 0.2 pts is given is if integration is substituted
by a simplifying product.
This potential energy is equal to the magnetic energy
Π =
4
3
πR3
B2
n
1
2µ0
=
3
5
GM2
n
Rn
(0.3pts)
— page 6 of 7 —Solving for Bn we get
Bn = 3
M
R2
√
µ0G
10π
(0.1pts)
and numerically
Bn = 1.18 × 1014
T
(0.1pts)
vi. (1 pt) The electron orbit will get distorted when the
Lorentz force becomes in the same order of magnitude as Cou-
lomb force. (0.1pts)
The Coulomb force is
F1 =
1
4πϵ0
e2
R2
H
(0.2pts)
On the other hand,
F1 =
mev2
RH
(0.2pts)
We can express the velocity of electron
v = e
√
1
4πϵ0RHme
(0.1pts)
Then the Lorentz force is
F2 ≈ evB
(0.2pts)
Upon substituting v we obtain
F2 = e2
√
1
4πϵ0RHme
From the condition F1 ≈ F2 we can express the magnetic field
strength
B =
√
me
4πϵ0R3
H
(0.1pts)
and numerically
B = 2.56 × 105
T
(0.1pts)
vii. (2 pts) Perpendicularly to the magnetic field, the Lorentz
force is much larger than the Coulomb force since the magnetic
field Bn is much larger than the magnetic field found in the
previous question. This means that in the perpendicular plane,
the electrons move along a circular cyclotron orbit. (0.2pts)
Then we can write
mev2
R1
= evBn,
(0.2pts)
where R1 = d/2 is the orbit’s radius. Now we apply the uncer-
tainty principle. The uncertainty of the momentum is
∆p = 2mev
(0.3pts)
and uncertainty of the coordinate
∆x = 2R1
(0.2pts)
So we have
4mevR1 ≈ ~
(0.2pts)
Substituting mev = ~
4R1
to the first equation we get
~
R2
1
= 4eBn
(0.1pts)
Then
R1 =
√
~
4eBn
(0.1pts)
The length of the cylinder will still remain in the order of mag-
nitude of RH because the Lorentz force doesn’t act on the
electron in that axis (parallel to the magnetic field). (0.5pts)
Then the ratio of the length and diameter is approximately
κ =
RH
R1
= 2RH
√
eBn
~
(0.1pts)
and numerically
κ = 39 ≈ 40.
(0.1pts)
Note that if we were to make calculations for magnetars with
B = 1 × 1011
T, the orbital electrons would be ultrarelativistic.
— page 7 of 7 —
