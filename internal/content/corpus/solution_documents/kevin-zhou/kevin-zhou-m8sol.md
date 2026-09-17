---
id: solution-document-kevin-zhou-m8sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-m8-ex001, kevin-zhou-m8-ex005, kevin-zhou-m8-ex008, kevin-zhou-m8-ex010, kevin-zhou-m8-p025, kevin-zhou-m8-p026, kevin-zhou-m8-p028, kevin-zhou-m8-p031, kevin-zhou-m8-p032]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/M8Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Mechanics VIII: 3D Rotation
Three-dimensional rotation is covered in chapter 7 of Kleppner and Kolenkow and chapter 9 of
Morin. For further discussion and examples, see chapter I-20 of the Feynman lectures. There is a
total of 96 points.
1 3D Rotation
In M6, we considered mostly two-dimensional rotation. Now we will tackle the full three-dimensional
case, starting with the general description of rigid body motion.
Idea 1: Chasles’ Theorem
The instantaneous velocity of a three-dimensional rigid body can always be decomposed in
one of two ways. First, for any given point, it can be written in terms of a translational
velocity plus a pure rotation about an axis going through that point. In practice, this point
is almost always chosen to be the center of mass, giving the decomposition
v = vCM + ω × (r − rCM).
Alternatively, there always exists an axis so that the motion can be written as rotation about
that axis, plus a translational velocity parallel to the axis, giving
v = v0 + ω × (r − r0)
where v0 and ω are parallel. (This is known as a “screw” motion.) In both cases, ω is the
same, and its direction defines the axis of rotation. These two decompositions are analogous
to the two we saw in M5, and both will be useful below.
Idea 2
Sometimes it can be hard to visualize ω, so here are two tricks. First, if any two points
on the object are stationary, then ω must be parallel to the axis connecting the two points.
Second, if the rotation is complicated, one can use rotating frames to simplify the analysis.
If a body has angular velocity ω1 in one frame, and that frame has an angular velocity ω2
with respect to a second frame, then the body has angular velocity ω1 + ω2 with respect to
the second frame.
Example 1
You have a small globe, which is mounted so that it can spin on the polar axis and can be
spun about a horizontal axis (so that the south pole can be on top). Give the globe a quick
spin about the polar axis, and then, before it stops, give it another quick spin about the
horizontal axis. Are there any points on the globe that are at rest?
1Kevin Zhou Physics Olympiad Handouts
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
2Kevin Zhou Physics Olympiad Handouts
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
3Kevin Zhou Physics Olympiad Handouts
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
4Kevin Zhou Physics Olympiad Handouts
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
5Kevin Zhou Physics Olympiad Handouts
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
6Kevin Zhou Physics Olympiad Handouts
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
7Kevin Zhou Physics Olympiad Handouts
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
8Kevin Zhou Physics Olympiad Handouts
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
9Kevin Zhou Physics Olympiad Handouts
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
10Kevin Zhou Physics Olympiad Handouts
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
11Kevin Zhou Physics Olympiad Handouts
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
12Kevin Zhou Physics Olympiad Handouts
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
13Kevin Zhou Physics Olympiad Handouts
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
14Kevin Zhou Physics Olympiad Handouts
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
15Kevin Zhou Physics Olympiad Handouts
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
16Kevin Zhou Physics Olympiad Handouts
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
17Kevin Zhou Physics Olympiad Handouts
new objects associated with new jargon, so it’s apparently deeply satisfying to see the whole
apparatus at work. But in my opinion, those people are just getting lost in a maze of their
own making. Physical objects don’t care about how we describe them, and there’s no extra
credit for making things harder than necessary.
Many people fall into the trap of overformalization. For example, the popular blog series
Graphical Linear Algebra advocates a category theory inspired notation for arithmetic. It
proudly takes 9 blog posts to get to the definition of addition, and 25 to define fractions.
This is why even mathematicians don’t take “applied category theory” seriously.
Example 5: IIT JEE 2016
Two thin circular discs, with radii a and 2a, are connected by a rod of length ℓ =
√
24a
through their centers. This rigid object rolls without slipping on a flat table.
The center of mass of the object rotates about the z-axis with an angular speed of Ω. The
angular speed of the object about the axis of the rod is ω. How are Ω and ω related?
Solution
This is the most famous problem ever set on the IIT JEE (condensed for clarity), cel-
ebrated by generations of students for its difficulty. But it’s also an example of how
not to write a 3D rotation problem. Under the standard definition of angular velocity,
none of the options provided in the question were correct, while the intended answer
requires a nonstandard, arbitrary definition. You can find a detailed explanation of this
here, by one of the former top scorers on the JEE, and I’ll give a condensed explanation below.
First, let’s figure out what’s going on. The kinematics of this problem isn’t any different
from problem 1. Defining the x-axis to be horizontal in the figure above, the instantaneous
angular velocity is ω = ω x̂, while the precession rate is Ω = (ω/
√
24)ẑ. The hard part is fig-
uring out what the question writers meant by “the angular speed ω about the axis of the rod”.
If we’re only talking about the object’s instantaneous motion, then the only possible answer
is ω = ω · n̂, where n̂ is the unit vector pointing along the rod. In that case we have
Ω/ω = 5/24, but then none of the answer choices in the exam are correct. On the other
hand, if we are comparing the object’s orientation at different times, then there isn’t a
18Kevin Zhou Physics Olympiad Handouts
unique answer. At a finite time later, the object will be in a different place, and computing
a relative angle requires defining a convention for comparing orientations.
Here’s what the problem authors meant. We work in the frame rotating with angular
velocity Ω. In this frame, the system is spinning in place, with angular velocity ω + Ω
parallel to n̂. The definition of ω is |ω + Ω|, which gives Ω/ω = 1/5, the intended answer.
Another way of saying this is that when we compare the orientation of the system at one
moment to its orientation at another moment, we bring them to the same position by rotating
about the z-axis, at which point they differ by a rotation about n̂. But this procedure is
totally arbitrary, and not specified by the problem. To pose the problem properly, the writers
could have either defined ω explicitly in the rotating frame mentioned above, or replaced
it with a quantity with equivalent but unambiguous physical meaning, such as the interval
between times a given point on the rim of a disc touches the ground. Fortunately, you’ll
almost never see problems this ambiguous on Olympiads.
Remark
One of the most counterintuitive things about 3D rigid body motion is the intermediate
axis theorem, which states that if a body has moments of inertia I1 < I2 < I3 about its
principal axes, then it can rotate stably about the first and third principal axes, but not the
second, “intermediate” axis. You can demonstrate this yourself by throwing a rectangular
prism (such a book or a phone) in the air. If you spin it about the intermediate axis, it’ll
start tumbling. The Soviet physicist Dzhanibekov found a particularly striking example of
such motion in zero gravity, which you can see here.
Deriving this theorem requires the full theory of 3D rotational kinematics, which is beyond
the scope of the Olympiad, but there’s a simple explanation of this effect using conserved
quantities. The rotational kinetic energy is
K =
1
2
I1ω2
1 +
1
2
I2ω2
2 +
1
2
I3ω2
3
while the magnitude squared of the angular momentum is
L2
= I2
1ω2
1 + I2
2ω2
2 + I2
3ω2
3.
This makes it easy to see why rotation about the third axis is stable: it corresponds to the
smallest possible kinetic energy for a given angular momentum.
On the other hand, it’s not so clear why the first axis is stable, because it corresponds to
the maximum possible kinetic energy. Aren’t maxima usually unstable? Generally yes, but
in this case, the kinetic energy is the only contribution to the energy. Since kinetic energy
is conserved in the short run, there is nowhere else for the energy to go, so a system set
spinning about the first axis has to stay that way. (Of course, in the long run energy will be
lost to the environment, e.g. by friction. So we might say that rotation about the first axis
is stable mechanically, but not thermodynamically.)
19Kevin Zhou Physics Olympiad Handouts
However, for rotation about the second, “intermediate” axis, the body can keep both K and
L2 the same by turning on some combination of ω1 and ω3. That explains the Dzhanibekov
effect. Initially the second principal axis aligns with the direction of L. Then the body
rotates so that ω1 and ω3 become nonzero, until the body has completely flipped over. At
that point ω1 and ω3 become zero again, with the second principal axis now aligned against
L. It’s like a one-dimensional oscillation, where I2ω2
2/2 plays the role of “potential” energy
and I1ω2
1/2 + I3ω2
3/2 plays the role of “kinetic” energy.
2 Composite Rotation
These are rotational dynamics problems like the ones you saw in M5, but more complex.
[3] Problem 10 (PPP 60). A uniform thin rod is placed with one end on the edge of a table in a
nearly vertical position and then released from rest. Find the angle it makes with the vertical at
the moment it loses contact with the table. Investigate the following two extreme cases.
(a) The edge of the table is smooth (friction is negligible) but has a small, single-step groove.
(b) The edge of the table is rough (friction is large) and very sharp, which means the radius of
curvature of the edge is much smaller than the flat end-face of the rod. Half of the end-face
protrudes beyond the table edge, so that when it is released the rod pivots about the edge.
Solution. Let ℓ be the length of the rod. By energy conservation, we have
1
2
1
3
mℓ2
ω2
= mg
ℓ
2
(1 − cosθ) =⇒ ω2
=
3g
ℓ
(1 − cosθ).
Differentiating this with respect to time gives
2ωω̇ =
3g
ℓ
(sinθ)θ̇ =⇒ ω̇ =
3g
2ℓ
sinθ.
The centripetal and tangential acceleration of the center of mass are
ac =
ω2ℓ
2
=
3
2
g(1 − cosθ), at =
ω̇ℓ
2
=
3
4
g sinθ.
20Kevin Zhou Physics Olympiad Handouts
(a) This is formally identical to the falling ladder problem from M5, and hence has the same
answer. But we can also solve the problem directly here. We have
Nx = M(at cosθ − ac sinθ) =
3
4
Mg sinθ(3cosθ − 2)
and
Ny = Mg − M(ac cosθ + at sinθ) =
1
4
Mg(3cosθ − 1)2
.
The first one to go to zero is Nx, and this happens at θ = cos−1(2/3).
(b) In this case, the normal force points along the rod. Therefore,
N − Mg cosθ = −Mac,
so N = Mg 5
2 cosθ − 3
2

. This becomes zero at θ = cos−1(3/5).
[3] Problem 11 (Cahn). A tall, thin brick chimney of height L is slightly perturbed from its vertical
equilibrium position so that it topples over, rotating rigidly about its base B until it breaks at a
point P.
(a) For concreteness, we will model the internal forces in the chimney as shown below. Assume
throughout that r is very small.
We assume that each piece of the chimney experiences a shear force F and longitudinal tension
or compression forces T1 and T2 from its neighbors. Find the point on the chimney with the
greatest |T1| or |T2|, assuming the chimney is very thin.
21Kevin Zhou Physics Olympiad Handouts
(b) Find the point on the chimney experiencing the greatest shear force F.
(c) At what point is the chimney most likely to break? Do you think the limiting factor is the
chimney’s maximal compressive strength, tensile strength, or shear strength?
Solution. See the solution here.
[3] Problem 12.  ^ 1 0IPhO 2014, problem 1A.
[2] Problem 13 (PPP 14). A bicycle is supported so that it can move forward or backwards but
cannot fall sideways; its pedals are in their highest and lowest positions.
A student crouches beside the bicycle and pulls a string attached to the lower pedal, providing a
backward horizontal force.
(a) Which way does the lower pedal move relative to the ground?
(b) Which way does the bicycle move?
To check your answer, watch this video.
Solution. (a) The student must do positive work on the bike to let it move, so the force and
displacement of the point where the force is applied have to be parallel. That is, the lower
pedal moves backwards.
(b) Technically, it depends on the gearing of the bike, but for a typical bike (and for the one
shown in the picture) it is backwards. To see this, let’s review how a bike works.
A bike works by moving the pedals, which are a distance rp from the pedal axle. This rotates
a gear of radius rg,p, which is connected by a chain to another gear of radius rg,w, which
rotates the rear wheel of radius R. By accounting for both the gearing ratios, we have
forward motion of bike
backward motion of pedal relative to bike
=
R
rg,w
rg,p
rp
.
The entire point of a bike’s gearing system is to make this ratio large, so that the bike can go
fast without your feet having to move like crazy. And this is indeed true in the image, which
has rp and rg,p comparable, and R ≫ rg,w.
Therefore, if you move the pedal forward a little, the bike goes backward a lot more, so the
net motion of the pedal (relative to the ground) is backward, consistent with part (a).
[4] Problem 14.  r 1 0APhO 2005, problem 1B. A problem on parametric resonance, an idea we first
encountered in M4. (The problem is good, but it’s slightly underspecified, leading to two possible
answers which were both accepted. If you get stuck, just make a reasonable assumption.)
22Kevin Zhou Physics Olympiad Handouts
[4] Problem 15.  m 1 0INPhO 2020, problem 5. A tough angular collision problem.
[5] Problem 16.  h 1 0EuPhO 2019, problem 2. A tough problem about the motion of an rigid body
in a magnetic field.
3 Frictional Losses
These miscellaneous problems are grouped under the theme of friction or energy dissipation.
[2] Problem 17 (Kalda). A plank of length L and mass M lies on a frictionless horizontal surface; on
one end sits a small block of mass m.
The coefficient of friction between the block and plank is µ. The plank is sharply hit and given
horizontal velocity v. What is the minimum v required for the block to slide across the plank and
fall off the other end?
Solution. If the block barely is able to slide off, then right before it does, it has relative velocity
of zero with the plank. By momentum conservation the velocities are Mv/(M + m), so the energy
loss is
∆E =
1
2
Mv2
−
1
2
(m + M)

mv
m + M
2
=
1
2
mM
m + M
v2
.
But this is also µmgL, so v =
p
2µgL(1 + m/M).
[3] Problem 18 (BAUPC). A uniform sheet of metal of length ℓ lies on a roof inclined at angle θ,
with coefficient of kinetic friction µ > tanθ. During the daytime, thermal expansion causes the
sheet to uniformly expand by an amount ∆ℓ ≪ ℓ. At night, the sheet contracts back to its original
length. What is the displacement of the sheet after one day and night?
Solution. When the sheet expands/contracts, it should do so about a certain point that doesn’t
move by continuity (the opposite ends move in opposite directions). Additionally, the forces from
the expansion/contraction should balance so the point remains stationary.
If the center of expansion is a distance x up from the bottom of the sheet, then the compressional
force balance for a sheet with linear mass density ρ will be
µxρg cosθ − ρgxsinθ = µ(ℓ − x)ρg cosθ + ρg(ℓ − x)sinθ
which simplifies to
x =
µ + tanθ
2µ
ℓ.
For contraction, the tension at the stationary point a distance y up from the bottom of the sheet
has a force balance equation of
µyρg cosθ + ρgy sinθ = µ(ℓ − y)ρg cosθ − ρg(ℓ − y)sinθ
which simplifies to
y = ℓ − x =
µ − tanθ
2µ
ℓ.
23Kevin Zhou Physics Olympiad Handouts
When the sheet expands by an amount ∆ℓ, the distance each point moves is proportional to the
distance away from the stationary point since the expansion is uniform. The stationary point for
contraction is a distance of x − y = ℓtanθ/µ away from the stationary point for expansion, and
will move a distance of ∆ℓ(x − y)/ℓ down (away from the expansionary point), and stay stationary
for contraction. The net displacement for all the points is this distance, which is
tanθ
µ
∆ℓ.
This is a real practical issue for roofs, known as thermal creep.
[4] Problem 19. @ 1 0APhO 2010, problem 1A. An instructive model of an inelastic collision; expect
some messy intermediate expressions. I recommend the modified version by Jaan Kalda here.
[5] Problem 20.  h 1 0IPhO 2020, problem 2. A nice problem on anisotropic friction.
4 Ropes, Wires, and Chains
Example 6: MPPP 78
A uniform flexible rope passes over two small frictionless pulleys mounted at the same height.
The length of rope between the pulleys is ℓ, and its sag is h. In equilibrium, what is the
length s of the rope segments that hang down on either side?
Solution
The problem can be attacked by differential equations, but there is an elegant solution using
only algebra. We let our unknowns be s, the tension T1 = (T1,x,T1,y) in the rope at the
pulley, and the tension T2 at the lowest point.
Considering the entire sagging portion as the system, vertical force balance gives
2T1,y = λℓg, T1,y = λℓg/2.
Now consider half of the sagging portion as the system. Horizontal force balance gives
T2 = T1,x.
24Kevin Zhou Physics Olympiad Handouts
Finally, consider one of the hanging portions as the system. Then
T1 = λgs.
We hence have three equations, but four unknowns.
For the final equation, we need to consider how the tension changes throughout the rope.
This would usually be done by a differential equation, but there is a clever approach using
conservation of energy. Suppose we cut the rope somewhere, pull out a segment dx, and
reattach the two ends. This requires work T dx, where T is the magnitude of the local
tension. Now suppose we cut the rope somewhere else, separate the ends by dx, and paste
our segment inside. This requires work −T′ dx. After this process, the rope is exactly in the
same state it was before, so the total work done must be zero.
This would seem to prove that T = T′, which is clearly wrong. The extra contribution is that
if the two locations have a difference in height ∆y, then it takes work λg(∆y)dx to move the
segment from the first to the second. So in equilibrium, for any two points of the rope,
∆T = λg ∆y.
Therefore, we have
T1 − T2 = λgh.
Now we’re ready to solve. We have
T2
1 − T2
2 = (λℓg/2)2
from our first three equations, and dividing by this new relation gives
T1 + T2 = λg
ℓ2
4h
.
This allows us to solve for T1, which gives
s =
T1
λg
=
h
2
+
ℓ2
8h
.
This is a useful result in real engineering projects: it means that the tension in a cable can
be estimated by seeing how much it sags.
Example 7: Kalda 27/IPhO 1971
A wedge with mass M and acute angles α1 and α2 lies on a horizontal surface. A string has
been drawn across a pulley situated at the top of the wedge, and its ends are tied to blocks
with masses m1 and m2.
25Kevin Zhou Physics Olympiad Handouts
There is no friction anywhere. What is the acceleration of the wedge?
Solution
This is a classic example of a problem best solved with the Lagrangian-like techniques of M4.
By working in generalized coordinates, we won’t have to solve any systems of equations.
Let s be the distance the rope moves through the pulley, so that both blocks have speed ṡ in
the noninertial frame of the wedge. The “generalized force” is
Feff = −
dV
ds
= (m1 sinα1 − m2 sinα2)g.
Now, the kinetic energy in the lab frame will be of the form
K =
1
2
Meffṡ2
which means that, by the Euler–Lagrange equations,
s̈ =
Feff
Meff
.
Our task is now to calculate Meff. Since the center of mass of the system can’t move
horizontally, the wedge has speed
vw =
m1 cosα1 + m2 cosα2
M + m1 + m2
ṡ.
Now, it’s a bit annoying to directly compute the kinetic energy K in the lab frame, but it’s
easy to compute the kinetic energy in the frame of the wedge: it’s simply (m1 + m2)ṡ2/2.
But the two are also related simply,
K +
1
2
(M + m1 + m2)v2
w =
1
2
(m1 + m2)ṡ2
.
Using this to solve for K, we conclude
Meff = m1 + m2 −
(m1 cosα1 + m2 cosα2)2
M + m1 + m2
.
Finally, the desired acceleration is
aw =
m1 cosα1 + m2 cosα2
M + m1 + m2
s̈.
When you plug in the result for s̈, you’ll get a very complicated final answer, but the
Lagrangian derivation shows where all the pieces come from.
[3] Problem 21 (Kalda). A rope of mass per unit length ρ and length L is thrown over a pulley so
that the length of one hanging end is ℓ. The rope and pulley have enough friction so that they do
not slip against each other.
26Kevin Zhou Physics Olympiad Handouts
The pulley is a hoop of mass m and radius R attached to a horizontal axle by light spokes. Find
the force on the axle immediately after the motion begins.
Solution. Let the distance the rope moves along the pulley be represented by the coordinate q. The
kinetic energy of the rope is 1
2ρLq̇2 since every section of the rope moves with velocity q̇. Without
slipping, the kinetic energy of the pulley is 1
2mq̇2. Another consequence of no slipping is that energy
is conserved, so dK/dt = −dU/dt.
When the rope moves along a small distance of dq, the change in potential energy can be
calculated by considering a segment dq moving from one end to another, having a difference in
vertical height of L − πR − 2ℓ. Thus dU = −ρgdq(L − πR − 2ℓ), so
dK
dt
= (m + ρL)q̇q̈ = ρgq̇(L − πR − 2ℓ), q̈ = g
ρ(L − πR − 2ℓ)
m + ρL
.
The vertical normal force can be determined by
P
mi(ay)i of the rope. The acceleration of the
parts moving up and down will cancel out, so the acceleration of the center of mass can be found
by considering the ”extra” segment of length L − πR − 2ℓ. The net vertical force on the system is
then ρ(L − πR − 2ℓ)q̈, so the force on the axle N satisfies (m + ρL)g − N = ρ(L − πR − 2ℓ)q̈.
Ny = g
(m + ρL)2 − ρ2(L − πR − 2ℓ)2
m + ρL
.
Since rope is transferred to the right, there is also a horizontal component of force on the axle.
When the rope moves along a distance dq,
P
midxi is essentially ρdq(2R) since it can be seen as a
segment of length dq moving to the other side. Thus Fx = ρq̈(2R), and
Nx = 2ρRg
ρ(L − πR − 2ℓ)
m + ρL
.
The answers are ugly, but they come from combining a few ingredients in a straightforward way.
[3] Problem 22 (French 5.10). Two equal masses are connected as shown with two identical massless
springs of spring constant k.
k
m
k
m
27Kevin Zhou Physics Olympiad Handouts
Considering only motion in the vertical direction, show that the ratio of the frequencies of the two
normal modes is (
√
5 + 1)/(
√
5 − 1).
Solution. Let y1 denote the displacement of the upper mass and y2 for the lower mass. The
equations of motion are
mÿ1 = −ky1 − k(y1 − y2) = −2ky1 + ky2, mÿ2 = −ky2 + ky1
For normal modes, the particles will oscillate at the same frequency. Guessing a form y1 =
Aei(ωt+ϕ1) = Ãeiωt and y2 = B̃eiωt and defining α = ω/
p
k/m, the equations are
−ω2
Ã = −2ω2
0Ã + ω2
0B̃, −ω2
B̃ = −ω2
0B̃ + ω2
0Ã.
Dividing these equations gives
Ã
B̃
=
1
2 − α2
=
1 − α2
1
.
Solving for α, we find
α4
− 3α2
+ 1 = 0, α2
=
3 ±
√
5
2
Then the ratio of the two normal mode frequencies is
α1
α2
=
s
1 + 5 + 2
√
5
1 + 5 − 2
√
5
=
√
5 + 1
√
5 − 1
as desired.
[3] Problem 23 (Kalda). A massless rod of length ℓ is attached to the ceiling by a hinge which allows
the rod to rotate in a vertical plane.
The rod is initially vertical and the hinge is spun with a fixed angular velocity ω.
(a) Before starting, explain why this problem has to use rods, and not just strings.
(b) If a mass m if attached to the bottom of the rod, find the maximum ω for which the configu-
ration is stable.
(c) [A] Now suppose another mass m and rod of length ℓ is attached to the first mass by an
identical hinge that turns in the same direction, as shown above. Find the maximum ω for
which the configuration is stable. (Hint: the configuration is unstable if any infinitesimal
change in the angles of the rods can lower the energy.)
Solution. (a) If you take an ideal string and twist one end of it, then nothing will happen to an
object hanging from the other side. By contrast, if you did the same thing with a rod, then
the object would start rotating. The difference is that a rod can transmit torsion (torque
about its own axis), while an ideal string does not.
28Kevin Zhou Physics Olympiad Handouts
(b) First, let’s imagine what this motion looks like in the lab frame. If we define θ as the direction
of the rod to the vertical axis, the spinning of the hinge fixes dθ/dt = ω. So if the mass’s
height is fixed, this forces the mass to spin in a circle. More generally, it exerts a confusing
time-dependent force on the mass.
We don’t want to deal with that, so we work in the frame rotating with the hinge. In
this frame, the rod doesn’t rotate about the vertical axis; it just changes its tilt θ to the
vertical, in the plane of the page. The effective potential from the centrifugal force mω2r is
−
Rr
0 mω2r′ dr′ = −1
2mω2r2, where r is the distance from the vertical axis through the hinge.
In this setup, r = ℓsinθ and the potential energy from gravity is mgℓ(1 − cosθ). For small
angles, the potential energy is
U ≈ mgℓ

1 −

1 −
1
2
θ2

−
1
2
mω2
ℓ2
θ2
=
1
2
θ2
(mgℓ − mω2
ℓ2
)
The system is stable when U′′(θ) > 0, so the maximum value of ω for stability is
ωmax =
p
g/ℓ.
(c) Let the angles between the vertical and the upper, lower rods be θ1, θ2 ≪ 1 respectively. The
gravitational potential energy of the lower mass is mgℓ(1 − cosθ1) + mgℓ(1 − cosθ2), and the
Taylor expansion gives U2 = 1
2mgℓ(θ2
1 + θ2
2). Using the rotating reference frame again, the
potential energy from the centrifugal force is 1
2mω2r2, where r = ℓ(sinθ1 +sinθ2) ≈ ℓ(θ1 +θ2)
since the hinges go in the same direction. The total potential of the system (same potential
for the first mass) is then
U(θ1,θ2) = mgℓθ2
1 +
1
2
mgℓθ2
2 −
1
2
mω2
ℓ2
θ2
1 −
1
2
mω2
ℓ2
(θ1 + θ2)2
= mℓ2

(ω2
0 − ω2
)θ2
1 +
1
2
(ω2
0 − ω2
)θ2
2 − ω2
θ1θ2

where ω2
0 = g/ℓ. To be stable, we want the potential energy to be at a local minimum near
that point. We could test this by considering a general infinitesimal change in the angles.
However, the fastest way is to use the second derivative test for two-variable functions f(x,y).
Let’s consider a critical point of such a function, where ∂f/∂x = ∂f/∂y = 0. For f to be a
minimum along the x and y directions, we clearly need to have
∂2f
∂x2
> 0,
∂2f
∂y2
> 0.
In this problem, these are both true if ω < ω0.
However, we also have to worry whether it’s possible to decrease the potential energy by
traveling in some other direction. It turns out we are guaranteed to have a true minimum if
∂2f
∂x2
∂2f
∂y2
>

∂2f
∂x∂y
2
.
In this problem, that condition is
2(ω2
0 − ω2
)2
− ω4
> 0.
29Kevin Zhou Physics Olympiad Handouts
This quantity is positive for ω = 0, and first hits zero when
ω2
= ω2
0(2 −
√
2).
We therefore conclude that
ωmax =
r
g
l
(2 −
√
2).
[4] Problem 24 (PPP 106). A long, heavy flexible rope with mass ρ per unit length is stretched by a
constant force F. A sudden movement causes a circular loop to form at one end of the rope.
The center of the loop moves with speed c as shown.
(a) Find the speed c, assuming gravity is negligible.
(b) Find the energy E carried by a loop rotating with angular frequency ω.
(c) Show that the momentum p carried by the loop obeys E = pc. This is true for waves in
general, as we’ll see in W1.
(d) Find the angular momentum carried by the loop, about a point on the rope on the ground.
Solution. (a) By balancing forces on a small piece of the rope,
ρ(c2
/R)(Rdθ) = Fdθ
which gives F = ρc2, so c =
p
F/ρ.
(b) The mass of the loop is m = 2πRρ. Splitting the energy into center of mass energy and
rotational energy, we have
E =
1
2
mc2
+
1
2
(mR2
)ω2
= mc2
= 2πRF =
2πFc
ω
,
since c = ωR.
(c) Since the loop as a whole moves with speed c and has mass m, we have p = mc. Since
E = mc2, we have E = pc as desired.
(d) The orbital and spin angular momentum are
Lo = mcR =
mc2
ω
, Ls = Iω = mR2
ω =
mc2
ω
.
They happen to be equal, and the total angular momentum is 2mc2/ω.
30Kevin Zhou Physics Olympiad Handouts
5 [A] Advanced Mathematical Techniques
The following problems were cut from earlier problem sets because they required more advanced
math; however, they illustrate some very neat and important ideas.
[3] Problem 25. In P1, you found a general expression for the period of a pendulum oscillating with
amplitude θ0 in terms of an integral, then approximated the integral for θ0 ≪ 1 to find
ω = ω0

1 −
θ2
0
16
+ O(θ4
0)

where ω0 =
p
g/L. In this problem, we will show a different way to get the same answer, by solving
the equation of motion approximately. We write the solution θ(t) as a series in θ0. The overall
solution is of order θ0, and the corrections only depend on θ2
0, so we can write
θ(t) = θ0f0(t) + θ3
0f1(t) + θ5
0f2(t) + ...
where all the functions fi(t) are of order 1. Then we plug this expansion into Newton’s second law,
θ̈ + ω2
0 sinθ = 0, and expand it out order by order in θ0.
(a) A naive first guess is to set f0(t) so that it cancels precisely the order θ0 terms in this equation,
then set f1(t) to cancel the order θ3
0 terms, and so on. Using this guess, show that
¨ f0 + ω2
0f0 = 0, ¨ f1 + ω2
0f1 =
ω2
0f3
0
6
where the first equation has solution f0(t) = cos(ω0t).
Unfortunately, this decomposition is not very useful. The problem is that two things are going on
at once: the oscillations are not quite sinusoidal, and they have an angular frequency lower than
ω0. The expansion we’ve done would be useful if we only had the first effect, because then f1(t)
would just capture the small, non-sinusoidal corrections to f0(t). But our method can’t account
for the frequency shift; by construction, f0(t) always oscillates at angular frequency ω0. Over time,
the real oscillation θ(t) gets out of phase with f0(t). This manifests itself as a “secular growth” in
f1(t), i.e. it increases in magnitude every cycle until it has a huge value, of order 1/θ2
0, and our
perturbative expansion breaks down.
(b) Write the right-hand side of the differential equation for f1(t) as a sum of sinusoids, and show
that it contains a term proportional to cos(ω0t). This resonantly drives f1(t), causing the
secular growth.
(c) We can salvage our perturbative expansion using the method of “renormalized” frequencies.
We impose by fiat that f0(t) oscillates at the true angular frequency, letting
¨ f0 + ω2
f0 = 0, ω = ω0(1 − cθ2
0 + O(θ4
0))
for a constant c. Because of this choice, the differential equation for f1(t), which contains all
terms at order θ3
0, will be altered. The correct choice of ω is precisely the one for which this
eliminates the secular growth of f1(t). Using this idea, show that c = 1/16.
31Kevin Zhou Physics Olympiad Handouts
If you keep going, you’ll find the next term f2(t) still has secular growth. We can remove it by
having both f0(t) and f1(t) oscillate at angular frequency ω0(1−θ2
0/16+c′θ4
0), where c′ is chosen to
cancel the secular growth of f2(t). In this way, the frequency can be found to any order in θ2
0. (This
technique is called the method of strained coordinates. It’s an example of multiple-scale analysis.)
Solution. (a) Plugging everything in and using sinθ = θ − θ3/6 + O(θ5), we have
θ0
¨ f0 + θ3
0
¨ f1 + ω2
0

θ0f0 + θ3
0f1 −
1
6
θ3
0f3
0 + O(θ5
0)

= 0.
Collecting the order θ0 and θ3
0 terms gives the desired result.
(b) The easiest way to do this is to use the definition of cos(ω0t) in terms of complex exponentials,
cos3
(ω0t) =

eiω0t + e−iω0t
2
3
=
e3iω0t + 3eiω0t + 3e−iω0t + e−3iω0t
8
=
1
4
cos(3ω0t)+
3
4
cos(ω0t).
Another way is to remember the cosine triple angle identity, but who knows that?
(c) Adjusting ω0 to the renormalized angular frequency for f0 moves terms between the two
differential equations, so that now we have
¨ f0 + ω2
f0 = 0, ¨ f1 + ω2
0f1 = ω2
0

f3
0
6
− 2cf0 + O(θ2
0)

.
The part of the right-hand side that oscillates at angular frequency ω0 is
ω2
0

1
6
3
4
cos(ω0t) − 2ccos(ω0t)

from which we conclude c = 1/16.
[3] Problem 26. You might be wondering how we can solve the weakening spring problem from M4
without anything fancy like the adiabatic theorem. There is a general technique to solve linear
differential equations whose coefficients are slowly varying. First, write the equation of motion as
ẍ + ω2
(t)x = 0.
Then expand x(t) as
x(t) = A(t)eiϕ(t)
, ϕ̇(t) = ω(t).
The point of writing x(t) this way is that pulling out the factor of eiϕ(t) will automatically account
for the rapid oscillations. The factor A(t) only varies slowly, so it’s easier to handle by itself.
(a) Evaluate ẍ(t) and plug it into the equation of motion.
(b) Using the fact that A(t) and ω(t) vary slowly, throw out small terms in your equation from
part (a), until you get a differential equation you can easily integrate. This is an example of
the WKB approximation for differential equations, which we applied at length in X1.
(c) Show that this gives the expected final result for a weakening spring.
32Kevin Zhou Physics Olympiad Handouts
Solution. (a) Just carrying out the time derivatives using the product rule gives
ẍ = Äeiϕ
+ 2iωȦeiϕ
+ iω̇Aeiϕ
− ω2
Aeiϕ
.
Plugging this back into the equation of motion, the last term cancels, and we can cancel an
overall factor of eiϕ to get
Ä + 2iωȦ + iω̇A = 0.
(b) Let’s think carefully about how big each of these terms is. If the total time it takes for the
spring to weaken is T, where ωT ≫ 1, then each time derivative on A or ω multiplies the
magnitude of the term by roughly 1/T. So the first term is of order A/T2, while the other
two are of order ωA/T ≫ A/T2. Therefore, we can throw out the first term to get
2Ȧ
A
= −
ω̇
ω
which is equivalent to
dlog(A2)
dt
=
dlog(1/ω)
dt
.
(c) The above result tells us that A2ω is constant, so A ∝ k−1/4 as found in M4.
[4] Problem 27 (BAUPC 1996). A mass M is located at the vertex of an angle θ ≪ 1 formed by
two massless sticks of length ℓ. The structure is held so that the left stick is initially vertical, then
released. The right stick hits the ground at time t = 0. The structure then rocks back and forth,
coming to a stop at time t = T.
(a) Prove the identity
1 +
1
32
+
1
52
+
1
72
+ ... =
π2
8
using the result
P
n≥1 1/n2 = π2/6, which we derived in W1.
(b) Using this result, calculate T to leading order in θ.
Solution. See the official solutions as usual.
[3] Problem 28. In this problem, we’ll go through Laplace’s slick derivation of Kepler’s first law.
Throughout, we assume the orbit takes place in the xy plane, with the Sun at the origin.
(a) Show that
ẍ = −
γx
r3
, ÿ = −
γy
r3
where γ is a constant that depends on the parameters.
(b) Show that
d
dt
(r3
ẍ) = −γẋ,
d
dt
(r3
ÿ) = −γẏ.
(c) Show that
d
dt
(r3
r̈) = −γṙ.
(Hint: this can get messy. As a first step, try showing the left-hand side is equal to
(r2/2)d3(r2)/dt3. You will have to switch variables to x and y and then switch back; for
these purposes it’s useful to use the results of part (a), and the definition r2 = x2 + y2.)
33Kevin Zhou Physics Olympiad Handouts
(d) Define ψ(t) = r(t)3. In parts (b) and (c), we have shown that the differential equation
d
dt

ψ(t)
du
dt

= −γu
has three solutions, namely ẋ, ẏ, and ṙ. Any second-order linear differential equations only
has two independent solutions. If ẋ and ẏ are not independent, the orbit is simply a line,
which is trivial. Assuming that doesn’t happen, they are independent, so ṙ must be a linear
combination of them,
ṙ = Aẋ + Bẏ.
Use this result to argue that the orbit is a conic section.
Solution. (a) This just follows from F = ma. In terms of the usual parameters, γ = GM.
(b) This immediately follows from clearing denominators in the results of part (a) and differenti-
ating both sides.
(c) Following the hint, we have
d
dt
(r3
r̈) = r3 ...
r + 3r2
ṙr̈ =
1
2
r2 d3
dt3
(r2
) = r2 d2
dt2
(rṙ).
At this point, we switch back to x and y. By differentiating r2 = x2 + y2,
rṙ = xẋ + yẏ.
Plugging this in gives
d
dt
(r3
r̈) = r2 d2
dt2
(xẋ + yẏ) = r2 d
dt
(xẍ + yÿ + ẋ2
+ ẏ2
).
We see that we’ll have a lot of factors involving ẍ and ÿ, but we know how to handle these
using part (a). Using part (a) several times, we have
ẋẍ + ẏÿ = −
γ
r3
(xẋ + yẏ) = −
γ
r3
(rṙ) = −
γṙ
r2
and
xẍ + yÿ = −
γ
r3
(x2
+ y2
) = −
γ
r
.
Plugging these results in, we find
d
dt
(r3
r̈) = −r2

d
dt
γ
r

+
2γṙ
r2

= −γṙ
just as desired.
(d) Integrating both sides,
r = Ax + By + C.
But then squaring both sides shows that the equation of the orbit is just a quadratic in
x and y, which is precisely the form of a conic section in Cartesian coordinates. You can
also show that the focus is at the origin, though this requires a bit more knowledge about conics.
This question was inspired by this paper, which has a few more derivations of Kepler’s first law.
34Kevin Zhou Physics Olympiad Handouts
6 Mechanics and Geometry
For dessert, we’ll consider a few cute problems that relate statics to geometry.
Example 8
Given a triangle ABC, the Fermat point is the point X that minimizes AX + BX + CX.
Design a machine that finds the Fermat point.
Solution
We take a horizontal plane and drill holes at points A, B, and C. A mass M on a rope is
fed through each hole, and the three ends of the rope are tied together at point X. The
gravitational potential energy is proportional to AX + BX + CX, so in equilibrium X lies
on the Fermat point. Moreover, since the tensions in each rope are all equal to Mg, force
balance requires ∠AXB = ∠BXC = ∠CXA = 120◦.
[1] Problem 29. Using similar reasoning, design a machine that finds the point X that minimizes
(AX)2 + (BX)2 + (CX)2. What geometrical property can you conclude about this point?
Solution. Attach a mass to springs at each of A, B, and C each with spring constant k and zero
rest length. In equilibrium, the mass has the minimum possible potential energy, so it is at point
X. Balancing forces gives k(X − A) + k(X − B) + k(X − C) = 0, so X is the centroid of ABC.
Example 9
Show that the incenter of a triangle (i.e. the meeting point of the angle bisectors) exists.
Solution
Apply six forces at the vertices of a triangle as shown.
These forces clearly balance, and also produce no net torque on the triangle. Now combine
the forces applied at each vertex, yielding three forces that point along the angle bisectors.
By the principles of M2, the torques of these forces can only balance if their lines of action
meet at a point. Therefore the angle bisectors are concurrent, so the incenter exists.
Example 10
Let AB be a diameter of a circle, and let a mass be free to slide on the circle. The mass is
connected to two identical straight springs of zero rest length, which are in turn connected
to points A and B. At what points C can the mass be in static equilibrium?
35Kevin Zhou Physics Olympiad Handouts
Solution
The potential energy of the system is proportional to (AC)2 + (BC)2. Since ABC is a right
triangle, this is just equal to (AB)2 by the Pythagorean theorem. Since the potential energy
doesn’t depend on where the mass is, it can be at static equilibrium at any point on the
circle. Alternatively, you can show that the mass is in static equilibrium by force balance,
and use the reasoning in reverse to derive the Pythagorean theorem.
[1] Problem 30. Consider a right triangle ABC filled with a fluid of uniform pressure. Using torque
balance, establish the Pythagorean theorem.
Solution. Suppose ∠C = 90◦, and suppose the pressure is p. Taking torques about A, we have
pa · (a/2) + pb · (b/2) − pc · (c/2) = 0, or a2 + b2 = c2.
[1] Problem 31. Shown below is a setup due to the 16th century mathematician Stevin, who was also
known for introducing decimal numbers.
One might argue that because there are more masses on AB than on BC, this is a perpetual motion
machine that turns counterclockwise. By using the fact that perpetual motion machines don’t
actually exist, prove the law of sines.
Solution. For each mass on AB, the component of gravity along AB is proportional to sin∠BAC.
Furthermore, the number of masses is proportional to AB. This must be balanced by the masses
along BC, giving
AB sin∠BAC = BC sin∠BCA
which after minor rearrangement is the law of sines.
[2] Problem 32. Consider the n-sided polygon P of least possible area that circumscribes a closed
convex curve K. Prove that every tangency point of K with a side of P is the midpoint of that side.
(Hint: begin by supposing that the area outside P is filled with a gas of uniform pressure, with a
vacuum inside P.)
Solution. The minimum energy is achieved when the gas takes up the largest possible area, i.e. when
the polygon P has minimum area. Let’s model the polygon as being formed by n infinite rods, which
don’t push on each other. Now, in equilibrium, the torque on each rod must be zero, but the only
forces on the rod are the uniform pressure along the part of the rod making up the corresponding
polygon side, and the normal force at the contact point. Taking torques about the contact point
shows that it must be the midpoint.
36Kevin Zhou Physics Olympiad Handouts
[2] Problem 33. In this problem we’ll derive Kepler’s first law yet again, using no calculus, but a bit
of Euclidean geometry. As usual, we suppose a planet of mass m orbits a fixed star of much greater
mass M. Placing the star at the origin, let ϕ be the angle between r and v for the planet.
(a) Write down the quantities E and L in terms of G, M, m, v, r, and ϕ, and show that

r2
+
GMm
E
r

sin2
ϕ =
L2
2mE
.
(b) Now consider an ellipse with semimajor axis a and eccentricity e, meaning that the distance
between the foci is 2ae, with one of the foci F at the origin. Consider a point P on the ellipse,
so that the angle between the tangent to the ellipse at P and FP is ϕ. If r = |FP|, show that
(r2
− 2ar)sin2
ϕ = −a2
(1 − e2
).
You will have to use the geometrical property that a light ray sent from one focus will reflect
at the ellipse to hit the other focus.
(c) By comparing your results for (a) and (b), conclude that the orbit is an ellipse with
a = −
GMm
2E
, e =
r
1 +
2EL2
G2M2m3
.
Solution. (a) By definition, we have
L = mrv sinϕ, E =
1
2
mv2
−
GMm
r
.
Solving the second equation for v gives
v =
r
2E
m
+
2GM
r
.
Plugging this into the first equation, squaring, and rearranging gives the desired result.
(b) Refer to the below diagram, where TT′ is the tangent to the ellipse and NN′ is the normal.
By the law of cosines,
(2ae)2
= (2a − r)2
+ r2
− 2r(2a − r)cosψ.
By the geometrical properties of the ellipse, NN′ is the angle bisector of ∠F′PF, so
cosψ = cos(π − 2ϕ) = −cos(2ϕ) = 2sin2
ϕ − 1.
Plugging this into the law of cosines and rearranging gives the desired result.
37Kevin Zhou Physics Olympiad Handouts
(c) This follows immediately, from inspection.
This derivation breaks down for E ≥ 0, since in that case the trajectory isn’t an ellipse, but similar
derivations can be performed for the parabola and hyperbola.
38
