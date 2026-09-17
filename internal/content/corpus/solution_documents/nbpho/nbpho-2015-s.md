---
id: solution-document-nbpho-2015-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2015_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2015-annihilation, nbpho-2015-bouncy-ball, nbpho-2015-electric-field, nbpho-2015-gear-shift, nbpho-2015-holographic-lens, nbpho-2015-radiator, nbpho-2015-solenoids, nbpho-2015-star-wars, nbpho-2015-two-balls, nbpho-2015-vapour-pressure]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2015_S.pdf."
---

Estonian-Finnish Olympiad 2015
Solutions
1. ANNIHILATION
i) Electron’s total energy E = γmec2
=⇒
γ = E
mec2 , where E = T + mec2
(here, T =
1MeV is the given kinetic energy). Now,
γ = 1/
q
1−v2
e/c2 =⇒ ve = c
p
1−1/γ2 =
c
q
1−m2
ec4/E2 =
c
p
T2+2Tmec2
T+mec2 . Numerically,
ve ≈0.941c.
ii) The photons fly away symmetrically
with respect to the electron’s trajectory: in
the zero-total-momentum frame, momentum
conservation implies that the photons have
equal momenta and, thus, equal energies,
and fly in exactly opposite directions; their
energies can be equal also in the positron’s
frame only if they are flying totally symmet-
rically. Each photon gets a half of the total
energy in the system: Eγ = 1
2(T +2mec2
) ≈
1.01MeV.
iii) Eγ = pγc =⇒ pγ = Eγ/c =1.01MeV/c.
iv) From E = p2
ec2
+ m2
ec4
, the elec-
tron’s momentum is pe =
q
E2
c2 −m2
ec2 =
1
c
p
T2 +2Tmec2. (Equivalent result can be
derived from pe = γmeve.) Momentum con-
servation in the z-direction then implies
that pe = 2pγ cosα =⇒ α = arccos
pe
2pγ
=
arccos 1 p
1+2mec2/T
=arctan
q
2mec2
T ≈45.3°.
v) In the center-of-mass frame, the total mo-
mentum of any system is zero. This means
that if the outcome of a collision is only a
single particle, then the particle’s momentum
must be zero in the center-of-mass frame.
However, a photon’s momentum can never
be zero, because otherwise it would have zero
energy and an infinite wavelength.
2. HOLOGRAPHIC LENS
i) Let N = 0,1,... number the zones (both
opaque and transparent). The optical path
difference between two neighbouring zones
must be λ/2 (opposite phase is demanded).
The path difference between the Nth
zone
and the 0th
zone, on the other hand, is ∆N = q
r2
N
+ f2 − f. Therefore, Nλ
2 =
q
r2
N
+ f2 −
f and rN =
q¡Nλ
2
¢2
+Nλf. Only odd-
numbered zones are transparent, thus we
need r2m+1 =
q¡
m+ 1
2
¢2
λ2 +(2m+1)λf.
ii) A perfectly focussing glass lens is such
that all the possible light rays that go to
the focus have an equal optical path length.
The optical path length inside a refracting
medium is n times longer than the corres-
ponding geometric length (the phase velo-
city is slowed down by a factor of n). De-
note the sought-after thickness by x. Equate
the optical path lengths of a ray through
the edge of the lens and of a ray through
its centre:
r³
d
2
´2
+ f2 = f − x+nx =⇒ x =
1
n−1
"r³
d
2
´2
+ f2 − f
#
≈2.4cm.
iii) Firstly, note that the given pulse is short
enough that the whole lens never illuminates
the focus — the pulse is only τc
λ
= 18 peri-
ods long, but r2×18 ≈ 1.3mm ¿ 5cm. This
implies that only a thin strip of the lens is
illuminating the focus at a time. The intens-
ity, when the Nth
period is being observed, is
proportional to the area of the Nth
zone. This
is AN =π
¡
r2
N+1
−r2
N
¢
=π
³
Nλ2
2 + λ2
4 +λf
´
.
As N is proportional to time (the period
of the wave is constant), the intensity will
also grow linearly in time. The linear part
starts at N = 1 with a jump and ends at
Nmax
λ
2 =
r³
d
2
´2
+ f2 − f with a jump back
into darkness, when the light from the edge
of the lens arrives. The total duration of illu-
mination is (approximately) τhol = Nmax
λ
c =
2
c
"r³
d
2
´2
+ f2 − f
#
≈7.9×10−9
s.
iv) The pulse is localized into a region of
space with a width ∆x = cτ. Because of
the Heisenberg’s uncertainty principle, the
pulse is composed of photons with a range
of momenta (if we take the picture that the
properties of the individual photons are clas-
sical) or, from a different viewpoint, is a
single photon with a somewhat uncertain mo-
mentum; either way, the characteristic width
in the momentum space is ∆p = ×
∆x = ×
cτ
. The
wavelength of a photon, whose momentum p
is known, is λ = h
p (this is the de Broglie re-
lation: the photon’s energy is pc and also
hν = hc
λ
). Thus, ∆λ ≈
¯
¯
¯ d
dp
h
p
¯
¯
¯∆p =
h∆p
p2 =
h ×
cτ
³
h
λ
´2 = λ2
2πcτ
≈4.4×10−9
m.
v) The spread of the arrival times of waves
with different wavelengths is the largest for
the waves that spend the longest time in-
side the lens. Therefore it is enough to con-
sider only the waves that go through the
thickest part of the lens — its centre. The
spread in the arrival times is ∆t = ∆ x
vg
=
x∆vg
v2
g
= x∆λ
v2
g
dvg
dλ
. To find the group velocity
vg itself, we can use the hint (given during
the examination) that in this question we
may assume the group velocity and the phase
velocity to be equal (in reality it would be
an unusual coincidence): vg = vp and the
phase velocity vp = c/n. Therefore, ∆t =
x∆λ
v2
g
×0.02
vg
λ
= 0.02xn∆λ
cλ
≈ 2.1×10−14
s. The
total observed pulse length behind the glass
lens is τgl =τ+∆t=5.1×10−14
s.
3. GEAR SHIFT
i) The acceleration of the car is proportional
to the torque applied to the wheels. Therefore
we should keep the torque onto the wheels
as big as possible, and shift gears when the
torque applied onto the wheels in the second
gear is bigger than the one obtained in the
first gear. At the same car’s speed, the en-
gine’s speed is (14:1):(7:1)=2 times bigger
in the first gear than in the second gear. Cor-
respondingly, at the same engine’s speed, the
torque onto the wheels is two times smal-
ler in the second gear than in the first gear.
Therefore we can draw another graph where
the engine’s torque is twice as small and the
engine’s speed is two times bigger. The inter-
section of those graphs is the point where the
gear should be changed.
From the graph we read that at that mo-
ment in the first gear, the engine’s torque is
τe =66.5N·m and the engine’s speed is ωe =
4550rpm. The wheels’ angular speed is then
ωw = 1
14ωe and the car’s speed is v= 1
2ωwd =
1
28ωed. Let’s convert 1rpm=120πrad/h and
d =6×10−4
km. Thus, v≈37km/h.
ii) At the optimum point, the acceleration be-
fore and after gear change is the same. From
Newton’s second law, it equals a= F/m=
2τw
md ,
where the net torque applied to the wheels is
τw =14τe. Hence, a=
28τe
md ≈2.2m/s2
.
4. STAR WARS
i) The period of a Keplerian orbit having
major semi-axis a can be expressed using re-
lation T2
= 4π2a3
GM . However, if we didn’t know
the formula, we should recall Kepler’s 3rd
law T2
∼ a3
and simply express the period
for a circular orbit with a = r. Therefore,
T2
= 4π2r2
v2 , were we need to insert v from
v2
r = GM
r2 .
For finding the period, we can get the ma-
jor semi-axis from the expression for orbit’stotal energy −GMm
2a = mv2
2 − GMm
R , equival-
ently a= GM
2GM
R −v2
= 1
2
R − v2
GM
. Finally T = 2πa3/2
p
GM
.
ii) According to the properties of an ellipse,
the distances l1 and l2 drawn from any point
on the ellipse to its two foci add up to con-
stant value l1 + l2 = 2a. Since l1 = R, the
other focus must be at distance l2 = 2a−R,
so the other focus F lies on a circle with ra-
dius |PF|= l2 =2a−R around P.
iii) This is the previous part in reverse. Since
we have distance to one focus given |QS|= r,
we can express the distance to the other focus
|QF|=2a−r.
iv) The points P, Q, and F form a triangle,
for which we have expressed two of its side
lengths: |PF| and |QF|. The third side QP
must satisfy |QP|≤|PF|+|QF|. The |QP|max
is obtained for a degenerated triangle (all
the three points lying along a common line).
Therefore, |QP|max =4a−R−r.
v) It turns out that for all the maximal dis-
tance points Q the sum of |SQ|+|PQ| is con-
stant and equal to 4a−R. That means it also
defines an ellipse with focal points S and P
and major semi-axis 2a−R/2. This ellipse is
the area that we can hit.
5. RADIATOR
We wind the wire around one end of the
aluminium profile and supply current to it for
heating. In most cases it was OK to supply
up to 5A (the maximum possible) through
the wire, only when it was wound very com-
pact it could get too hot. This should give
us good 100°C to measure on the profile, but
the experiment also worked if smaller cur-
rents/temperatures were used. Now we wait
until the temperature in the profile stabilises,
this takes about five to ten minutes and we
can check if it has stabilised with the thermo-
meter.
When the temperature has stabilised we
measure and write down the temperature
values along the part of the profile that is
not covered with wire using a reasonable dis-
tance interval. We can see that that the other
end of the profile is still at room temperature
(the difference is below or near the resolution
of this thermometer). This means that in the
given solution for Helmholtz equation,
T(x)= T0 +C1e
x
q
h
kA +C2e
−x
q
h
kA ,
the integration constant C1 =0.
Now one way is to use T(0) to express
C2 = T(0)−T0 and use any other temperature
measurement to calculate h. A better way is
to plot the temperature difference in a log-
arithmic scale: log(T(x)−T0)=−
q
h
kA x+C2,
and use the slope of the graph a=−
q
h
kA to
calculate h. This gives a more accurate value
for h and allows us to better estimate the un-
certainty by finding the range of slopes that
can reasonably be drawn on the graph.
The correct answer is in the range h =
0.3W/K·m to h = 0.5W/K·m, it depends
slightly on how the profile is placed on the
table. The heat transfer coefficient is higher
when the profile is on the edge of the table or
slightly raised due to the wiring.
6. TWO BALLS
Let us consider the process in a free-
falling frame of reference; them the both
balls will move with constant velocities. The
speeds are equal, but directions different;
hence, for any moment of time, they are at
equal distance from the throwing point Q.
Thus, point Q can be found as the intersec-
tion point of the perpendicular bisector to the
segment AB (connecting the balls), and the
vertical line drawn from the point P.
In the lab frame, the point Q, however,
is a free-falling point, and by time t has
travelled distance |PQ| = gt2
/2. Using the
provided scale we find from the figure that
|PQ| ≈ 8.6m, hence t =
p
2|PQ|/g ≈ 1.3s.
Hence, the throwing speed v = |AQ|/t ≈
20m/s; here we have used reading from the
figure, |AQ|≈26m.
P
g
10m Q
A
B
8.6m
26m
7. BOUNCY BALL
i) Energy is conserved: mv2
2 + Iω2
2 = mv2
2 +
Iω2
2
2 =⇒ |ω2|=|ω|. As the ball receives some
angular momentum from the wall (the net
force from the wall is not directed through the
ball’s centre), the angular velocity changes
its sign — the rotation flips its direction and
ω2 =−ω.
ii) The angular momentum is conserved with
respect to the contact point, because all the
forces are directed through the point. Let a=
Rcosα be the distance from the trajectory of
the center of mass to the contact point. Then
the aforementioned angular momentum con-
servation reads Iω−mav = Iω2 +mav. As
ω2 =−ω, this gives ω= mav
I = 5vcosα
2R .
iii) At the verge of slipping on a surface, the
angle between the surface normal and the
resultant of the reaction force and the frtic-
tion force equals arctanµ. Here this angle is
π
2 −α, thence µ≥cotα.
8. ELECTRIC FIELD
i) By the Biot-Savart law, every piece of
the ring with length and direction d~ l cre-
ates a magnetic field d~ B =
µ0Id~ l×â
4πa2 , where ~ a
is the displacement vector from the piece to
the point where we are calculating ~ B, and
â = ~ a/a. By symmetry, the magnetic field
on the z-axis adds up to being exactly along
the z-axis, because the perpendicular com-
ponents cancel out. dBz is proportional to dl
and d~ l ⊥ â. The vector d~ l×â is at an angle
α = arctan r
z from the horizontal. Therefore
we can add up the contributions and write
B(z) =
µ0I×2πRsinα
4π(z2+R2)
=
µ0IR2
2(z2+R2)3/2 . The field is
along the z-axis.
ii) The electric field measured by a charged
observer must be in the same direction as
the Lorentz force acting on the observer in
the laboratory frame of reference. Therefore
the electric fieldlines are circles around the z-
axis. Now we may apply Faraday’s induction
law to such a circle, as it approaches the ring:
the total electromotive force E(z,r)×2πr =
Φ̇ = −dΦ
dz v ≈ − d
dz B(z)×πr2
×v =⇒ E(z,r) =
−rv
2 B0
(z)=
3µ0IrR2vz
4(z2+R2)5/2 .
9. SOLENOIDS
i) The overlapping region has magnetic field
2B, rest of the coils’ insides has B. Let
the inner coil have an area of A2. Energy
density, where the magnetic field is B, is
B2
2µ0
. Therefore Em = B2
2µ0
(A1l − A2(l − x)+
A2x)+(2B)2
2µ0
A2(l−x)= B2
2µ0
[A1l+A2(3l−2x)]=
µ0I2N2
2l2 [A1l+ A2(3l−2x)].
ii) The outer coil is intersected by all the
internal coil’s magnetic flux BA2. After time
dt this flux is enclosed by fewer turns of
the outer coil — by the Nvdt/l turns that
are on the length vdt. Thus the flux en-
closed by the outer coil changes with a rate
E1 = Φ̇1 = BA2Nv/l = µ0A2IN2
v/l2
. The in-
ner coil is also intersected by the flux BA2,
thus E2 = E1; those electromotive forces are
in the same direction.
iii) The work done when pulling a coil out
is balanced in two places: the magnetic fieldenergy decreases and our constant current
source dissipates some energy (because our
electomotive forces work against it). In total,
the applied mechanical power Fv =
dEm
dx v+
I(E1 +E2), from where F =−B2A2
µ0
+ 2IBA2N
l =
µ0I2N2A2
l2 .
10. VAPOUR PRESSURE
We construct a manometer by fixing the
pipe into a “U” shape using the stand, and
filling the tube partially with water. With
a small trouble we should get the water to
the bottom of “U” shape and then we can
measure the pressure difference from differ-
ences of depth ∆p = ρg∆h. After we attach
a bottle to one end, we should let the pres-
sures equalise through a needle hole in the
bottle. We then squirt the unknown liquid
to the bottle and close the needle hole with
tape as fast as possible. We then shake the
bottle to hasten the vaporisation and write
down the difference of depths ∆h after it has
reached a stable value. During all this we
should be careful to heat the bottle with our
body as little as possible.
If the volume would have been fixed
we would get the vapour pressure directly
from the manometer reading as according to
Dalton’s law. But since the diameter of the
pipe was not that small we should take the
relative volume increase to account.
If the depth difference is ∆h, we have a
relative increase of pressure np =
ρg∆h
p0
and
a relative increase of volume nV = S∆h
2V0
. As-
suming an ideal gas, this gives us relative
molar increase nn =
(1+np)(1+nV )p0V0−p0V0
p0V0
≈
np +nV . Substituting in the given values we
get nn ≈ 0.0987m−1
×h+0.00471m−1
×h ≈
0.1034m−1
×h.
Since all the molar increase is due to the
vapour, we can get the vapour pressure (par-
tial pressure exerted by vapour) by multiply-
ing the pressure with the molar fraction of
vapour px =(p0 +∆p) nn
1+nn
.
The unknown liquid was ethanol with
vapour pressure of px = 6.52kPa at 21.6°C.
However, the grading scheme was not insist-
ent on the exact value as it proved technically
quite difficult to get it correct.
