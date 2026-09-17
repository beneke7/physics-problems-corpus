---
id: kevin-zhou-m8-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m8-ex001
solution_type: author
source_document: solution-document-kevin-zhou-m8sol
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M8Sol.pdf."
---

Example 1
You have a small globe, which is mounted so that it can spin on the polar axis and can be
spun about a horizontal axis (so that the south pole can be on top). Give the globe a quick
spin about the polar axis, and then, before it stops, give it another quick spin about the
horizontal axis. Are there any points on the globe that are at rest?
1
Kevin Zhou Physics Olympiad Handouts
Solution
The first spin gives the angular velocity a vertical component ω1. The second spin gives the
angular velocity an additional horizontal component ω2. The globe now rotates about its
center of mass with angular velocity ω1 +ω2. Precisely two points on the globe are stationary,
namely the points that are parallel and antiparallel to this vector.
[2] Problem 1 (Morin 9.3). A cone rolls without slipping on a table; this means that all the points
of the cone that touch the table are instantaneously stationary. The half-angle of the vertex is α,
and the axis has length h.
Let the speed of the center of the base, point P in the figure, be v.
(a) Compute the angular velocity ω by thinking of the motion as pure rotation about some axis.
(b) Compute the angular velocity ω by thinking of the motion as translation of P, plus rotation
about an axis passing through P.
(c) The apex of the cone is fixed, and the cone continues to rotate. As this motion goes on, the
angular velocity vector rotates uniformly, keeping a constant magnitude. Find the precession
rate Ω, i.e. the constant vector that satisfies dω/dt = Ω × ω at all times.
Heuristically, the precession rate Ω is “the angular velocity of the angular velocity”. For the relevant
problems below, it’s important to keep track of the difference between ω and Ω.
Solution. (a) The points of the cone that touch the table form a line. This whole line is
instantaneously stationary, so the motion is pure rotation about this axis. Let d be the
distance from P to the ground. Then the speed of point P is v = ωd, which gives
ω =
v
d
=
v
hsinα
.
(b) The point P has speed v. The point directly below P is at rest, and its velocity can also be
written as v − ωd. Then v = ωd, giving the same answer as above.
(c) The center of the base moves in a circle of radius hcosα with speed v, and hence completes
one cycle in time 2πhcosα/v. Hence the precession rate is
Ω = −
v
hcosα
ẑ
where we used the right hand rule to find the sign. Note how this is distinct from the angular
velocity: not only do they have totally different magnitudes, they point in totally different
directions! The angular velocity vector only describes what a body is doing right now. It is
completely independent of Ω, which is about what the body will do in the future.
Most of our statements about rotational dynamics from M5 remain true. The main new aspect is
that angular momentum is not necessarily parallel to angular velocity.
2
Kevin Zhou Physics Olympiad Handouts
Example 2: KK Example 7.4
Consider a rigid body consisting of two particles of mass m connected by a massless rod of
length 2ℓ, rotating about the z-axis with angular velocity ω as shown.
Find the angular momentum of the system.
Solution
We simply add r × p for both masses. Let the rod lie in the xz plane at this moment. Then
for the top left mass,
r = −ℓcosαx̂ + ℓsinαẑ.
The momentum is
p = mv = mω × r = −mωℓcosαŷ.
Then the angular momentum is
L = r × p = mωℓ2
cosα(sinαx̂ + cosαẑ).
The other mass has the opposite r and p and hence the same L, so the total angular
momentum is
L = 2mωℓ2
cosα(sinαx̂ + cosαẑ).
It is directed perpendicularto the rod, and in particular, it isn’t parallel to the angularvelocity!
Here is another way to derive the same result. We can decompose the angular velocity vector
into a component along the rod, and a component perpendicular to the rod. The former
contributes no angular momentum, because rotating about the rod’s axis doesn’t move the
masses. The latter contributes all the angular momentum. So the angular momentum is
L = I⊥ω⊥ = (2mℓ2
)(ω cosα)
directed perpendicular to the rod, which is what we just saw explicitly.
We can summarize the lessons drawn from this example as follows.
3
Kevin Zhou Physics Olympiad Handouts
Idea 3
For a three-dimensional object, L is not necessarily parallel to ω. In general, for pure rotation
about an axis passing through the origin, we have L = Iω where I is a 3 × 3 matrix called
the “moment of inertia tensor about the origin”. In components, this means that
Li =
X
j
Iijωj.
While this is simple and general, the Iij are a pain to calculate. You can learn more in the
reading, but to my knowledge, no Olympiad problem has ever required computing a general
moment of inertia tensor.
For the purposes of Olympiad problems, there is a better way to think about the angular
momentum. We use the first decomposition of idea 1, and think of the motion as translation
plus rotation about the center of mass. If the object has an axis of symmetry, which it will
in almost all Olympiad problems, then the angular velocity can then be decomposed into a
component parallel to the axis, and perpendicular to the axis,
ω = ω∥ + ω⊥.
The key is that, in such situations, the spin angular momentum has two pieces, which are
each parallel to the corresponding piece of the angular velocity,
L∥ = I∥ω∥, L⊥ = I⊥ω⊥
where I∥ and I⊥ are ordinary moments of inertia about the center of mass. For example, for
a flat uniform disc, I∥ = MR2/2 and I⊥ = MR2/4.
The total angular momentum about the origin is then
L = rCM × MvCM + I∥ω∥ + I⊥ω⊥
where the first term is from the motion of the center of mass, and the next two are from
rotation about the center of mass. Note that this is exactly the same as what we saw in M5,
except that the “spin” angular momentum is broken into two parts.
Finally, the rate of change of angular momentum is
dL
dt
= τ
where the torque τ is defined as in M5. The kinetic energy is
K =
1
2
Mv2
CM +
1
2
I∥ω2
∥ +
1
2
I⊥ω2
⊥.
4
Kevin Zhou Physics Olympiad Handouts
Remark
In any dynamics problem, there are many choices you can make in the setup. For example,
if you’re using an inertial frame, you need to choose where the origin is; usually it’s best
to place it along the axis of symmetry if possible. You are also free to use a noninertial
frame with acceleration a. The only difference is that there will be a fictitious force
−Ma acting at the center of mass. For that reason, it’s usually best to have the acceler-
ating frame follow the center of mass, keeping it at its origin, so no new torques are introduced.
However, you should usually avoid rotating reference frames for dynamics problems. Not
only will there be position-dependent Coriolis and centrifugal forces, but they’ll contribute
torques which are a pain to calculate, as you saw in M6. In general, rotating frames are only
good for getting a handle on the kinematics, as mentioned in idea 2.
Example 3: KK Example 7.5
Calculate the magnitude of the torque on the rod in example 2.
Solution
We recall that the angular momentum was
L = 2mωℓ2
cosα(sinαx̂ + cosαẑ).
The rod as a whole rotates with angular velocity ωẑ. In particular, the angular momentum
vector rotates with this angular velocity as well; its horizontal component moves in a circle
with angular velocity ω. Then
|τ| =
dL
dt
= ωLx = 2mω2
ℓ2
cosαsinα = mω2
ℓ2
sin(2α).
It might be surprising that there needs to be a torque given that ω is constant, but that’s
just because L and ω aren’t necessarily parallel. Conversely, there can be situations where
there is no torque, yet ω changes over time.
[2] Problem 2 (Morin 9.10). A stick of mass m and length ℓ spins with angular frequency ω around
an axis in zero gravity, as shown.
The stick makes an angle θ with the axis and is kept in its motion by two strings that are perpen-
dicular to the axis. Find the tension in the strings.
5
Kevin Zhou Physics Olympiad Handouts
Solution. This is a very slight variation on the example. Again, the component of angular velocity
parallel to the stick contributes no angular momentum, and the component perpendicular to the
stick is ω sinθ, so it contributes
L =
1
12
mℓ2
ω sinθ.
Only the horizontal component of L is changing over time, so the magnitude of the torque is
τ = ωLcosθ. On the other hand, we also know that the torque is 2T(ℓ/2)cosθ. Equating these
expressions and solving gives
T =
1
12
mℓω2
sinθ.
[3] Problem 3 (KK 7.1). A thin hoop of mass M and radius R rolls without slipping about the z-axis.
It is supported by an axle of length R through its center, as shown.
The axle circles around the z-axis with angular speed Ω, so that the bottom point of the wheel
traces out a circle of radius R. Let O be the pivot point of the rod, i.e. the point where the rod
meets the z-axis.
(a) Find the instantaneous angular velocity ω of the hoop. (Before moving forward, you’ll want
to be totally sure you have this part right. Sometimes, students get confused on it because
they imagine a symmetric pair of hoops instead. However, if you actually had a pair, the
setup wouldn’t even make sense. Why not?)
(b) As the motion continues, the angular velocity vector rotates in a circle. Find the precession
rate Ω of this system.
(c) Find the instantaneous angular momentum L of the hoop, about the point O.
Solution. (a) Since both O and the bottom point of the hoop are stationary, the angular velocity
must be parallel to the line joining them,
ω ∝ ẑ − ŷ.
In fact, the motion can be thought of as pure rotation about the line joining them. Now
consider the motion of the rod. The y-component of the angular velocity doesn’t affect the
rod, while the z-component makes it rotate about the z-axis. We are already given that the
rod rotates with angular speed Ω about the z-axis, so we must have ωz = Ω, and hence
ω = Ωẑ − Ωŷ.
6
Kevin Zhou Physics Olympiad Handouts
Alternatively, this part can be done using an intermediate rotating frame. We first go to the
frame rotating with angular velocity Ωẑ. In this frame the rod is frozen in place, while the
wheel turns in place, with angular velocity −Ωŷ. So the angular velocity in the original frame
is the sum, giving the same answer.
A very common incorrect answer to this question is ω = Ωẑ. Usually, this happens because
a student implicitly imagines this system is part of a symmetric pair of hoops, like the two
wheels on a wheelchair or cart. Then by symmetry, ω has to point along ẑ, right? The
problem with this reasoning is that it’s actually impossible for a rigidly connected pair of
wheels to rotate as shown, without at least one wheel slipping on the ground. (We would need
ω = Ωẑ − Ωŷ for the original wheel not to slip, and ω = Ωẑ + Ωŷ for the other wheel not to
slip.) Wheelchairs don’t face this problem because their wheels aren’t rigidly connected. In a
car, we do want to connect a pair of wheels to a single engine, but we do it with a fancy gear
called a differential which allows the wheels to rotate at different rates.
(b) Since the wheel is rigidly attached to the rod, this is simply Ωẑ.
(c) We apply the result
L = rCM × MvCM + I∥ω∥ + I⊥ω⊥.
We have I∥ = MR2 and I⊥ = MR2/2, so
L = MR2
Ωẑ − MR2
Ωŷ +
MR2
2
Ωẑ = MR2
Ω

3
2
ẑ − ŷ

.
[2] Problem 4 (KK 7.4). In an old-fashioned rolling mill, grain is ground by a disk-shaped millstone
which rolls in a circle on a flat surface driven by a heavy vertical shaft. Because of the stone’s
angular momentum, the contact force with the surface can be greater than the weight of the wheel.
Assume the millstone is a uniform disk of mass M, radius b, and width w, and it rolls without
slipping in a circle of radius R with angular velocity Ω. Find the contact force N. Assume the
millstone is closely fitted to the axle so that it cannot tip, and w ≪ R. Neglect friction.
Solution. Take torques about the point where the vertical and horizontal rods meet. Because we
are neglecting friction, the only torque on the system is from gravity on the stone, and the normal
force with the ground,
τ = (N − Mg)R.
7
Kevin Zhou Physics Olympiad Handouts
Note that there is also a normal force N′ on the bottom of the shaft, and the weight force M′g for
the shaft. These two forces won’t play a role below, since they exert no torque, but they ensure
vertical force balance, (M + M′)g = N + N′. Also, as mentioned in M5, we are assuming there is
negligible bending moment from the pivots, which is reasonable since they are typically small.
The angular momentum due to the motion of the center of mass is vertical and constant, so it
doesn’t matter. As in problem 3, the angular velocity connects this point and the contact point, so
ω =
R
b
Ωx̂ + Ωẑ.
The vertical component of the angular velocity yields another constant vertical component of the
angular momentum, so it also doesn’t matter. The only part of the angular momentum that changes
is the part due to the horizontal component of the angular velocity of the axle. The whole system
precesses with angular velocity Ωẑ, so
τ =
RΩ
b
Ω

1
2
Mb2

.
Setting this equal to our other expression for torque and solving gives
N = Mg

1 +
bΩ2
2g

.
This is greater than Mg, so the vertical shaft exerts a downward force on the horizontal rod.
Idea 4: Precession
In the above problems, we’ve seen a few examples of systems undergoing uniform precession.
In these cases, the angular velocity and the angular momentum vectors rotate with a uniform
angular velocity Ω, called the precession rate, where
dω
dt
= Ω × ω,
dL
dt
= Ω × L.
Precession is easiest to see in gyroscopes, which are systems spun up to a very high angular
velocity, subject to a weak external torque, so that Ω ≪ ω. (Kleppner and Kolenkow call
this the “gyroscope approximation”.) More generally, you’ll have to decide whether or not
Ω ≪ ω in each case.
Example 4: KK 7.3
A gyroscope wheel is at one end of an axle of length ℓ. The other end of the axle is suspended
from a string of length L.
8
Kevin Zhou Physics Olympiad Handouts
The wheel is set into motion so that it executes slow, uniform precession in the horizontal
plane. The wheel has mass M and moment of inertia I0 about its center of mass, and turns
with angular speed ω. Neglect the mass of the shaft and string. Find the angle β the string
makes with the vertical, assuming β is very small.
Solution
Let T be the tension in the rope, and let the precession rate be Ω = Ωẑ. Since the center of
mass does not accelerate vertically, and the center of mass moves in a horizontal circle,
T cosβ = Mg, T sinβ = MΩ2
(ℓ + Lsinβ).
We’ll work to lowest possible order in β everywhere, which means approximating cosβ ≈ 1
and ignoring the Lsinβ term, giving
T = Mg, Tβ = MΩ2
ℓ.
Combining these equations gives the precession angular frequency
Ω =
r
gβ
ℓ
.
This is as far as we can go with forces alone.
Now we use τ = dL/dt, taking torques about the point the string meets the ceiling. As
in the previous examples, the angular velocity of the system has a component Ωẑ, which
contributes to a constant Lz. The change in the angular velocity comes from the horizontal
components, which yield |τ| = I0Ωω. The only torque on the system comes from gravity,
|τ| = Mg(ℓ + Lsinβ) ≈ Mgℓ. Combining our results and solving for β yields
β =
M2gℓ3
ω2I2
0
.
Did we actually use the gyroscope approximation here? This kind of motion intuitively seems
like it requires a gyroscope, but we never used Ω ≪ ω explicitly in the above derivation.
However, note that we can rearrange our results in the form
β =
Ω
ω
Mℓ2
I0
.
If the radius of the wheel is comparable to ℓ, then the final fraction is order-one, so it is only
possible to have β ≪ 1 if Ω ≪ ω.
Remark
In most gyroscope problems, we simply assume the system is already undergoing uniform
precession. However, you might wonder just how it gets started in the first place. For example,
suppose we had the same setup as the previous problem, with the wheel spinning and the axle
9
Kevin Zhou Physics Olympiad Handouts
horizontal. For simplicity, let’s get rid of the string and suppose the end of the axle is held
at a fixed support. Now suppose the axle and wheel are released with no translational motion.
The following chain of events ensues:
1. Because of gravity, the wheel starts to move down.
2. Since the wheel is rigidly attached to the axle, the axle starts to tip downward.
3. This produces a downward component of angular momentum, which is balanced by the
axle/wheel system starting to rotate about the z-axis. That is, the center of mass of
the wheel moves into the page, starting the precession.
4. This precession makes the axle exert an extra upward force on the wheel, stopping its
fall. In reality the process overshoots and overcorrects, leading to oscillations called
nutation. (For details, see Note 2 of chapter 7 of Kleppner and Kolenkow.)
5. For a typical pivot, energy can be dissipated at the pivot point, but the angular momen-
tum of the system stays roughly the same because the pivot is small. Assuming this is
the case, the oscillations will eventually damp away, leaving a uniform precession.
Notice that in this example, the initial angular momentum is perfectly horizontal. The final
angular momentum includes an upward component due to the uniform precession, which
implies that the axle must tilt slightly downward, by an angle of order (Ω/ω)2. Therefore,
if you want to set up uniform precession with the axle perfectly horizontal, as in the above
example, you should point the axle slightly upward when releasing it from rest.
[2] Problem 5 (KK 8.5). An “integrating gyro” can be used to measure the speed of a vehicle.
Consider a gyroscope spinning at high speed ωs. The gyroscope is attached to a vehicle by a
universal pivot. If the vehicle accelerates in the direction perpendicular to the spin axis at rate a,
then the gyroscope will precess about the acceleration axis, as shown.
The total angle of precession is θ. Show that if the vehicle starts from rest, its final speed is
v =
Isωs
Mℓ
θ
where Isωs is the gyroscope’s spin angular momentum, M is the total mass, and ℓ is the distance
from the pivot to the center of mass.
10
Kevin Zhou Physics Olympiad Handouts
Solution. Work in the accelerating reference frame where the pivot is at rest. Using the gyroscope
approximation, we see that L̇ = Isωsω where ω = θ̇, and τ = Maℓ. Thus,
a =
Isωsθ̇
Mℓ
.
Integrating yields the desired result.
[3] Problem 6 (KK 7.5). When an automobile rounds a curve at high speed, the weight distribution
on the wheels is changed. For sufficiently high speeds, the loading on the inside wheels goes to
zero, at which point the car starts to roll over. This tendency can be avoided by mounting a large
spinning flywheel on the car.
(a) In what direction should the flywheel be mounted, and what should be the sense of rotation, to
help equalize the loading? (Check your method works for the car turning in either direction.)
(b) Show that for a disk-shaped flywheel of mass m and radius R, the requirement for equal
loading is that the angular velocity ω of the flywheel is related to the velocity of the car v by
ω = 2v
ML
mR2
where M is the total mass of the car and flywheel, and L is the height of their center of mass.
Solution. (a) If the car is turning with a radius of curvature of r at velocity v, then the frictional
force must provide the centripetal force of f = Mv2/r. This will exert a torque of fL on the
car about the center of mass, where L is the height of the center of mass. The torque points
forward for turning left, and backwards for turning right.
Normally, a difference in the normal forces between the wheels will provide the opposing
torque to keep the car from rolling over. To keep an equal loading, the flywheel must provide
the opposing torque. Another way to think about it is to have the torque from friction to
cause precession of the flywheel instead of turning the car (the equal and opposite ”reaction
torque” will keep the car stable).
The key is that as the car is turning, the flywheel will also turn with the car at angular velocity
v/r, thus the direction of its spin angular momentum Ls will change. From a top view, that
means the forwards torque for turning left must turn Ls counterclockwise, and the backwards
torque for turning right must turn Ls clockwise. This works when Ls is pointing to the right
with respect to the car’s motion (the flywheel spins in the opposite direction from that of the
wheels).
(b) In order for the torque from friction to turn the flywheel, τ = fL = Ls(v/r). For a disk-shaped
flywheel with angular momentum Ls = 1
2mR2ω, putting in f = Mv2/r yields
Mv2L
r
=
1
2
mR2 ωv
r
which is equivalent to the desired result.
[3] Problem 7 (KK 7.7). A thin hoop of mass M and radius R is suspended from a string through a
point on the rim of the hoop. The string makes an angle α with the vertical.
11
Kevin Zhou Physics Olympiad Handouts
The support is turned with angular velocity ω, which is high enough so that the hoop’s plane makes
a small angle β with the horizontal, and the hoop’s center travels in a small circle of radius r ≪ R.
(a) Does the gyroscope approximation apply in this problem?
(b) Find approximate expressions for β and r.
Solution. (a) No. The whole system is undergoing uniform rotation about the ẑ axis, i.e. in the
frame rotating with the support, the whole system is just static! Thus, the precession rate Ω
is just equal to the spin rate ω, so we don’t have Ω ≪ ω.
In fact, it is possible to solve part (b) like a statics problem in that rotating frame. However,
doing so introduces a centrifugal torque, which is annoying to compute. (I thank Toshiv
Chowdhary for pointing this out.) It turns out to be easier to stay in a nonrotating frame.
(b) To balance vertical forces, the tension T in the string obeys T cosα = Mg. Now work in the
noninertial but nonrotating frame which follows the hoop’s center of mass. In this frame, the
only torque about the hoop’s center of mass is from the tension. The angle between the string
and the plane of the hoop is π − (α + π/2 − β) = π/2 − α + β, so
τ = TRsin(π/2 − α + β) = TRcos(α − β).
This torque rotates the horizontal component of the angular momentum with precession rate
ω. To find the horizontal component, we decompose ω = ωẑ into components perpendicular
and parallel to the loop. If the x̂ axis is horizontal in the second picture above, then
Lx = −ω⊥I⊥ sinβ + ω∥I∥ cosβ = −(ω cosβ)(MR2
)sinβ + (ω sinβ)(MR2
/2)cosβ
from which we conclude that
|Lx| =
MR2ω
2
cosβ sinβ.
Then the torque has to be
τ = |Lx|ω =
MR2ω2
2
cosβ sinβ.
Equating our two expressions yields
2g
ω2R
=
cosαcosβ sinβ
cos(α − β)
.
12
Kevin Zhou Physics Olympiad Handouts
Now we use the fact that ω is large, which corresponds to β being small. To leading order in
β, we can approximate cos(α)/cos(α − β) ≈ 1 and sinβ cosβ ≈ β, giving
β ≈
2g
ω2R
.
Finally, going back to the lab frame, the horizontal component of the tension should provide
a centripetal force, so T sinα = Mω2r. We thus have
r =
g tanα
ω2
.
Note that the official solution to this problem in Kleppner and Kolenkow (both editions)
incorrectly states β ≈ g/(ω2R), because it misses the “parallel” contribution to Lx. I thank
Roger Yang for pointing this out.
[4] Problem 8 (KK 7.6, Morin 9.23). With the right initial conditions, a coin on a table can roll in a
circle.
As shown, the coin leans inward, with its axis tilted to the horizontal by an angle ϕ. The radius of
the coin is b, the radius of the circle it follows on the table is R, and its velocity is v.
(a) Assuming the coin rolls without slipping and b ≪ R, show tanϕ = 3v2/2gR.
(b) No longer assuming b ≪ R, show that the described motion is only possible if R > (5/6)bsinϕ.
Solution. (a) We work in the noninertial, but nonrotating frame whose origin follows the center
of mass. In this frame, the only part of the angular momentum that changes is the horizontal
component of the spin angular momentum. The coin spins by “rolling” and “turning”, along
ωs and ω2 respectively:
ω2
ωs
Ω
ϕ
v
13
Kevin Zhou Physics Olympiad Handouts
Since the motion of the coin is the combination of “rolling” and going around in a circle, the
total angular velocity should be ωs +Ω where Ω describes the circular motion/turning of the
coin and points vertically upwards. The components of Ω are Ωcosϕ and −Ωsinϕ along ω2
and ωs respectively. The moments of inertia about the coin in the ωs and ω2 directions are
1
2Mb2 and 1
4Mb2 respectively. Note that we can’t simply ignore Ω because it is vertical; this
is because the angular momentum from Ω does not point in the same direction as Ω (they
point in the same direction only along the principal axes).
With L = Iω along those principal axes, the horizontal components of the angular momenta
is Lx = 1
2Mb2(ωs −Ωsinϕ)cosϕ+ 1
4Mb2Ωcosϕsinϕ. The no slip condition is that ωsb = ΩR.
With b ≪ R, we can approximate Lx ≈ 1
2Mb2ωs cosϕ. The torque, τ = ΩLx, about the center
of mass is (N sinϕ − f cosϕ)b where f = Mv2/(R − bsinϕ) ≈ Mv2/R is the frictional force,
and N = Mg is the normal force. The velocity of the CM is v = Ω(R − bsinϕ) ≈ ΩR. Then
τ = ΩLx =
1
2
Mb2
(ΩR/b)Ωcosϕ =
1
2
MΩ2
bRcosϕ =
Mv2b
2R
cosϕ
but we also know that
τ = Mgbsinϕ −
Mv2b
R
cosϕ
from which we conclude
tanϕ =
3v2
2gR
.
(b) Now we will do the calculations above without b ≪ R. The torque is
τ = Ω

1
2
Mb2
(ωs − Ωsinϕ)cosϕ +
1
4
Mb2
Ωcosϕsinϕ

= Mgbsinϕ −
Mv2b
R − bsinϕ
cosϕ.
Using ωs = ΩR/b and v = Ω(R − bsinϕ) and dividing the above equation by MΩ2b yields
1
2
Rcosϕ −
1
2
bsinϕcosϕ +
1
4
bsinϕcosϕ =
g
Ω2
bsinϕ − (R − bsinϕ)cosϕ
which simplifies to
3
2
R −
5
4
bsinϕ =
g
Ω2
tanϕ.
Since tanϕ > 0 in order for the motion to make sense, we have R > (5/6)bsinϕ.
[4] Problem 9 (Morin 9.24). If you spin a coin around a vertical diameter on a table, it will slowly
lose energy and begin a wobbling motion. The angle between the coin and the table will gradually
decrease, and eventually it will come to rest. Assume this process is slow, and consider the motion
when the coin makes an angle θ with the table, as shown.
14
Kevin Zhou Physics Olympiad Handouts
You may assume that the center of mass is essentially motionless. Let R be the radius of the coin,
and let Ω be the angular frequency at which the contact point on the table traces out its circle.
Assume the coin rolls without slipping.
(a) Show that the angular velocity of the coin is ω = Ωsinθx̂2, where x̂2 always points upward
along the coin, directly away from the contact point.
(b) Show that Ω = 2
p
g/(Rsinθ).
(c) Show that the face on the coin appears to rotate, when viewed from above, with angular
frequency Ω′ = (1 − cosθ)Ω.
Near the end of the motion, as θ → 0, we have Ω → ∞ while Ω′ → 0, so that the disc appears to
frantically jitter in place. This system is called Euler’s disc, and if you haven’t seen it before, I
recommend watching a video!
Solution. (a) Since the center of mass is essentially motionless and the coin is rolling without
slipping, the center of mass and the contact point are both stationary. Thus the angular
velocity must pass through those lines, and is pointing along x̂2. Let k̂ be a vertical unit
vector. The angular velocity can be seen as the sum of the rotation about the center of mass
and pointing along k̂ (turning of the coin’s orientation) with angular velocity ωk = Ωk̂, and
rotation about −x̂3 with angular velocity ω̂3 to roll without slipping. Thus, ω = ωk + ω3.
Since x̂2 and x̂3 are perpendicular, ω = ωk sinθ, so ω = Ωsinθx̂2 as desired.
(b) The torque about the contact point from gravity is MgRcosθ, and points horizontally to
change the horizontal component of the angular momentum Lx = Iω cosθ at a rate of Ω. The
moment of inertia about x̂2 is 1
4MR2, which gives
MgRcosθ =
1
4
MR2
Ω2
sinθcosθ.
Solving this for Ω gives the desired result. Of course, we could also have found this result by
taking torques about the center of mass.
(c) From part (a), we found that ω = ωk + ω3 and x̂2 and x̂3 are perpendicular which gets ω3 =
−Ωcosθ. Consider a point on the coin from the top view. ωk makes it rotate counterclockwise
with angular velocity Ω, and ω3 rotates it clockwise with angular velocity Ωcosθ. Thus the
face of the coin appears to be rotating with angular velocity Ω(1 − cosθ).
Another way to do this is to consider the difference between the radius of the coin and the
radius of the traced out circle. In a full rotation of the contact point in time T = 2π/Ω, a
15
Kevin Zhou Physics Olympiad Handouts
distance of 2πRcosθ was covered by the coin. Since the coin didn’t slip, that same distance
was covered along the coin’s edge, so the initial contact point will be a distance of 2πR(1−cosθ)
ahead of the new contact point. Thus the angle change is 2π(1 − cosθ) in time T = 2π/Ω,
giving an apparent angular velocity of (1 − cosθ)Ω.
Remark: Bivectors
Vector quantities defined by the cross product have some unusual properties. For example,
under a spatial inversion, which flips the signs of r and p, the sign of L = r × p doesn’t
get flipped, so L transforms differently from other vectors. The same applies to the veloc-
ity ω and magnetic field B. All three of these quantities are “pseudovectors”, not true vectors.
The underlying reason is that all of these quantities are fundamentally a different kind
of mathematical object. They are really rank 2 differential forms, also called bivectors
in three dimensions. While a vector is specified by an arrow with magnitude and di-
rection, a bivector is specified by a planar tile with area and orientation. The following
figure, taken from this paper, shows how it can be constructed visually from the cross product.
In three dimensions, we can always convert between bivectors and pseudovectors using
the right-hand rule, so any calculation can be done with either form. Bivectors have the
advantage of visually representing rotational quantities: the angular velocity bivector lies
along an object’s plane of rotation, while the magnetic field bivector lies along the plane in
which it makes charged particles circularly orbit. However, it is easier to add vectors, both
visually and mathematically, which also makes it easier to think about decomposing vectors
into components. This advantage is so important in practice that I don’t recommend using
bivectors at all for three-dimensional problems.
On the other hand, when you work in higher-dimensional spaces, the differential form perspec-
tive becomes essential. In general, in d dimensions the angular velocity has d
2

components,
corresponding to the rotation rate in each independent plane.
• Of course, when d = 1 there is no such thing as rotation at all, while when d = 2 the
angular velocity has one component, so we treat it as a scalar.
• When d = 3 the angular velocity has three components, so we treat it as a vector.
• When d = 4 the angular velocity has six components, so we can’t even pretend it’s a
16
Kevin Zhou Physics Olympiad Handouts
vector; we have to use the differential form description.
Rotational dynamics gets really complicated in 4 dimensions. Both the angular velocity and
the angular momentum are rank 2 differential forms with 6 independent components each.
The moment of inertia is a rank 4 tensor with 10 independent components, which takes a
simpler form when you work in the body’s 6 “principal planes”.
Remark: Alternative Notation
If you want to look into bivectors more, be sure to steer clear of “geometric algebra”, which
dominates the Google search results. Geometric algebra is an internet cult which recruits
unsuspecting young people by telling them about bivectors, which are indeed cool. Once
they have your attention, they’ll claim that “mainstream” physics has hit a dead end because
it refuses to go beyond vector notation, and that you should spend years relearning all of
physics in their homemade alternative notation.
However, as we’ve discussed in P1 and R3, there’s nothing magical about notation.
Physicists don’t teach geometric algebra simply because we have better tools in every
situation. In d = 3 vectors are intuitive and work just fine, while for higher dimensions
we either use differential forms, which are more elegant, or tensor calculus, which is
powerful enough to do almost anything. When you get to quantum field theory, you’ll have
to deal with spinors and Clifford algebras, which are commonly taught in graduate textbooks.
The idea of geometric algebra is to mash together the ideas of differential forms and Clifford
algebra into a single universal operation called the “geometric product”, and use it to
describe absolutely everything, including basic 3d vector operations. But while this seems
satisfying in principle, in practice it introduces a huge number of secondary operations
and identities. It doesn’t just not lead to any new results, it makes familiar results sub-
stantially harder to reach. (Don’t just take my word for it; see this blog post by a practitioner.)
Geometric algebra is also touted as a replacement for standard matrix operations in pure
math, but it has problems there too. According to a another long-time practitioner,
definitions in geometric algebra sources are wildly inconsistent with each other, and
sometimes aren’t even self-consistent. And using geometric algebra is exponentially less
efficient than ordinary matrix operations once you get past the trivial case of 3×3 matrices!
There are two lessons here. First, physicists will use whatever notation works the best for
the problems they care about. So if an alternative isn’t used, it’s not because it’s being
censored, it’s because it’s not actually useful. But most of the time, there won’t be anybody
around on the internet to tell you why, because practitioners are busy solving real problems.
Relying on the internet can therefore give a very skewed view of what’s important.
Second, learning new things is more important than learning new names for old things.
Practitioners of geometric algebra say that it’s worth using, even if it’s less efficient, because
it “makes more sense”. Simple problems end up taking lots of steps, and each step introduces
17
Kevin Zhou Physics Olympiad Handouts
new objects associated with new jargon, so it’s apparently deeply satisfying to see the whole
apparatus at work. But in my opinion, those people are just getting lost in a maze of their
own making. Physical objects don’t care about how we describe them, and there’s no extra
credit for making things harder than necessary.
Many people fall into the trap of overformalization. For example, the popular blog series
Graphical Linear Algebra advocates a category theory inspired notation for arithmetic. It
proudly takes 9 blog posts to get to the definition of addition, and 25 to define fractions.
This is why even mathematicians don’t take “applied category theory” seriously.
