---
id: kevin-zhou-w1-p005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-p005
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

[4] Problem 5. Flexible strings, ropes, and chains can display some counterintuitive behavior. Suppose
a string carries a small traveling wave on it, moving with speed v =
p
T/µ to the right. Then in
the frame that’s also moving with speed v to the right, the string maintains a constant shape, while
moving along this shape with speed v, like a snake.
(a) In fact, this phenomenon is extremely general. Show that if we have a flexible string loop
floating in zero gravity with any shape, then it is possible for that string to move along its
length while maintaining a constant shape, if its speed satisfies v =
p
T/µ.
In the popular “string shooter” toy, a loop of string is shot through spinning wheels with high speed
v. As a result, the string seems to levitate in the air while maintaining a constant shape. This is
partially explained by part (a), but the real explanation also involves the weight and drag forces.
Assume the string experiences a drag force f per unit length, directed against its motion.
4
Kevin Zhou Physics Olympiad Handouts
A fit of the string’s profile to data is shown above, where the wheels are at the origin. The string
moves in the clockwise direction.
(b) Qualitatively, how does the tension in the string vary around the loop? In particular, find
the point P on the figure where the string has tension T = µv2. Also, find whether the string
has higher tension just before or just after it goes through the wheels.
(c) By taking measurements from the figure, estimate the drag to weight ratio f/(µg). (You may
have to roughly eyeball some numbers. 20% accuracy is good enough.)
(d) One interesting feature, which you can see in the video linked above, is that if you tap the
string right below the wheels, a pulse will smoothly move to the right along the bottom of the
string with a slow speed u. Explain why, and find an estimate for u. Assume the string has
speed v = 15m/s. You’ll have to eyeball some numbers again, so expect only 20% accuracy.
Solution. (a) There are no external forces acting along the string, so the string carries a uniform
tension, due to its own motion. Now consider a small piece of the string of length dx, and
suppose the radius of curvature there is r. Then the tension on each side of the piece gives
an inward force T dθ = T dx/r, while the required centripetal force is (µdx)v2/r. These are
equal if v =
p
T/µ for any value of r. That is, the internal tension force always provides the
right centripetal force no matter what the string’s local shape is.
(This has been tested in the International Space Station, though it turns out to be pretty
hard to set up the desired motion. Also, when you do get it going, internal friction dissipates
kinetic energy while keeping the angular momentum the same, which slowly causes the shape
to relax to a circle, which has the minimum energy for a given angular momentum.)
By the way, this provides the explanation of an alternative solution to the pearl necklace
problem in M3. In that problem, it turns out that a necklace will jump off a table once it
accelerates to v =
p
T/µ at the corner. That’s precisely because at that point, its own tension
provides all the centripetal force, so the normal force vanishes. For another example of this
trick, see problem 105 of 200 Puzzling Physics Problems.
(b) Consider the force and acceleration of a small piece ds of the string, where ds points along the
string’s direction of motion. The forces are µg ds acting downward, a drag force −f ds, and
5
Kevin Zhou Physics Olympiad Handouts
tension forces on each side. Because the string is moving with constant speed, its acceleration
is perpendicular to ds.
Therefore, there is no net force parallel to ds, and balancing forces in that direction implies
that the difference in tension forces has to be
dT = f ds + µg dy
where dy is the y-component of ds. In other words, the tension increases as one goes along
the string, and as one goes to higher elevations. For the parts of the string just before and
after the wheels, the heights are about the same, so the tension is higher just before going
through the wheels. This makes sense, as the wheels are pulling the string in.
Next, consider the forces perpendicular to ds. This contains contributions from the gravita-
tional force and the tension forces, and needs to sum up to the centripetal force. We know
from part (a) that at the point where T = µv2, the tension alone accounts for the centripetal
force. Then at this point, gravity can’t contribute in this direction, so ds must be vertical. So
point P is at the rightmost point on the loop.
At other points, T is a bit different from µv2, so the difference is made up by gravity. Working
through this will give a complicated differential equation for the shape of the string, which
was numerically solved to make the curve in the diagram above.
(c) There’s a net downward gravitational force µLg on the string. The net drag force is
Fd =
Z
f ds = 0
since the string is a closed loop. So the wheels must apply a purely vertical force µLg.
Now, we can finish the problem by considering either forces or torques. Let’s consider torques
first, taking the wheels as the origin. The torque from gravity is µLgxCM, and it has to be
balanced by the torque from the drag force, which is
τd =
Z
f r × ds = 2fA
where A is the area of the loop. (That is, the drag force is what lets the string stay up, even
though it doesn’t provide any net upward force!) We therefore conclude that
f
µg
=
xCM L
2A
.
Roughly eyeballing the values gives
xCM ≈ 0.8m, A ≈ 0.6m2
,
f
µg
≈ 2.1.
Alternatively, we can consider forces. (I thank Joshua Wang for pointing out this alternative
solution.) Let the tension right after the wheels be T, so that the tension right before the
wheels is T +fL. In addition, let the string exit the wheels at an angle θ1 above the horizontal,
and enter the wheels at an angle θ2 below the horizontal. Now consider a piece of string as it
passes through the wheels. The horizontal component of Newton’s second law is
µv2
(cosθ1 + cosθ2) = T cosθ1 + (T + fL)cosθ2
6
Kevin Zhou Physics Olympiad Handouts
and the vertical component is
µv2
(sinθ1 − sinθ2) = T sinθ1 − (T + fL)sinθ2 + µLg
where the last term is the vertical force from the wheels. These equations are equivalent to
(µv2
− T)(cosθ1 + cosθ2) = fLcosθ2
and
(µv2
− T)(sinθ1 − sinθ2) = µLg − fLsinθ2.
Dividing these equations removes the unwanted dependence on v and T, and simplifying gives
f
µg
=
cosθ1 + cosθ2
sin(θ1 + θ2)
.
Thus, we only have to measure these two angles, which can be done relatively accurately,
accounting for the fact that the axis scales are not equal. I find that
θ1 ≈ 48◦
, θ2 ≈ 10◦
,
f
µg
≈ 1.95.
For comparison, the figure above is from this paper, with parameters f/(µg) = 1.82.
(d) At the bottom part of the string, we have T > µv2. Here, waves on the string move a bit
faster than the string itself, so that they can travel slowly against the string’s flow. (A similar
conclusion applies to waves made at the top: here the waves are a bit slower than the string,
so waves propagating leftward will smoothly move to the right. However, you have to take
more care at the top because the string will be moving into your finger, so you can easily get
it tangled up. Untangling the string is the most annoying part of using this toy.) Both sets of
waves end up converging at the point identified in part (c).
Let the tension right below the wheels be T = µv2 + ∆T. By tracking the change in tension
induced by gravity and drag from the point identified in part (c), we have
∆T = fℓ0 − µgy0
where ℓ0 is the length of string from the bottom of the wheels to the point in part (c), and y0
is that point’s y-coordinate. Eyeballing some more numbers, the fractional shift is
∆T
µv2
=
g
v2
((2.0)(1.5m) − (0.5m)) = 0.11
where I took f/(µg) = 2.0 as a rough compromise between the two answers to part (c). So
the change in velocity is roughly
u ≈
1
2
∆T
µv2
v ≈ 0.8m/s.
For typical speeds, drag is the dominant factor and f ∝ v2, so the ratio u/v remains roughly
constant as you increase the speed of the string.
For a more advanced and thorough treatment of this system, published in a top journal, see
this paper. More generally, there are a lot of tricky questions about flexible strings and chains.
People still write papers disagreeing about the explanation of the chain fountain.
7
Kevin Zhou Physics Olympiad Handouts
Idea 2
A sinusoidal wave has the form
y(x,t) = Acos(kx − ωt + ϕ), v =
ω
k
where k is the wavenumber and ω is the angular frequency. They are related to the wavelength
and period by
k =
2π
λ
, ω =
2π
T
.
Sinusoidal waves will be especially useful because the wave equation is linear. Fourier analysis
tells us that any initial condition can be written in terms of a sum of sinusoids, so if we know
what happens to the sinusoids, we know what happens in general by superposition. This is
just a generalization of ideas we’ve seen in M4 and E6. Just as we saw there, it can also be
useful to promote y to a complex number, where the physical value of y is the real part; for
a sinusoidal wave we would have y(x,t) = y0ei(kx−ωt).
Remark
Physicists almost universally use k and ω rather than λ, f, and T. A nice way of thinking of
these variables is that they represent how quickly the phase ϕ changes, in space or time,
k =
dϕ
dx
, ω = −
dϕ
dt
.
If we use a little special relativity, we can even combine these into a single equation,
kµ
= ∂µ
ϕ.
The fundamental relation between particle and wave properties in quantum mechanics is
pµ
= ℏkµ
.
These are the de Broglie relations, which we’ll cover in X1.
[4] Problem 6. For a wave on a string, there are two contributions to the energy: potential energy
from stretching, and kinetic energy from transverse motion.
(a) Find the kinetic and potential energy density (i.e. energy per unit length) of the string in
terms of T, µ, y, and its derivatives.
(b) Evaluate the above quantities for y = Acos(kx − ωt). Is the total energy density uniform?
(c) Show that for a general traveling wave of the form y = f(x−vt), the total kinetic and potential
energy are equal.
(d) Show that for any wave function y, total energy is conserved. This will require some integration
by parts, as well as the wave equation itself; you should assume y goes to zero at infinity.
(e) Compute the energy of the static configuration in problem 2(b), assuming the triangle has
height h and base L, where h ≪ L.
8
Kevin Zhou Physics Olympiad Handouts
One warning: as we saw in E6, energy is quadratic, so it does not obey the superposition principle.
Locally, the amount of energy can be more or less than the sum of the energies of the superposed
waves, due to interference.
Solution. (a) We will assume the displacement of the string is small, and take the lowest order
terms. Using 1
2mv2 for kinetic energy of a piece moving in the transverse direction gets
∆K =
1
2
∆mẏ2
=
1
2
(µ∆x
p
1 + y′2)ẏ2
,
dK
dx
=
1
2
µẏ2
p
1 + y′2 ≈
1
2
µẏ2
.
For the potential energy, the work done on stretching the string is ∆U = T∆ℓ where ∆ℓ = p
1 + y′2 ∆x − ∆x ≈ 1
2y′2 ∆x since the displacement is small. Thus
dU
dx
=
1
2
Ty′2
.
(b) We have
dK
dx
=
1
2
µA2
ω2
sin2
(kx − ωt),
dU
dx
=
1
2
TA2
k2
sin2
(kx − ωt).
Here, we can see that the total energy density is not uniform, but rather comes in “lumps”.
This is also true for electromagnetic waves.
(c) The densities are
dK
dx
=
1
2
µv2
f′2
,
dU
dx
=
1
2
Tf′2
and for a wave traveling in one direction, these densities are exactly equal because v2 = T/µ,
so the total kinetic and potential energy are equal.
(d) The total energy is
E =
Z ∞
−∞

1
2
µẏ2
+
1
2
Ty′2

dx.
Taking the time derivative and applying the wave equation,
dE
dt
=
Z ∞
−∞
µẏÿ + Tẏ′
y′
dx ∝
Z ∞
−∞
ẏy′′
+ ẏ′
y′
dx
where we used the wave equation in the second equality. Integrating the first term by parts,
Z ∞
−∞
ẏy′′
dx = ẏy′
∞
−∞
−
Z ∞
−∞
ẏ′
y′
dx
and the boundary term vanishes by our assumptions. The remaining term is just the opposite
of the other term in dE/dt, so dE/dt = 0 as desired.
(e) Since the string was initially held steady, there is only potential energy. The amount of
potential energy is just T times the total length the string is stretched, so
U = T(
p
4h2 + L2 − L) ≈
2Th2
L
where we used h ≪ L in the last step.
9
Kevin Zhou Physics Olympiad Handouts
[2] Problem 7 (French 7.23). One end of a stretched string is moved transversely at constant velocity
u for a time τ, and is moved back to its starting point with velocity −u during the next interval τ.
As a result, a triangular pulse is set up on the string and moves along it with speed v. Show that
the total energy of the pulse is equal to the work done on the string, working to lowest order in u/v.
Solution. First let’s compute the energy in the pulse. Recall that the energy density is
dE
dx
=
µ
2

∂y
∂t
 2
+
T
2

∂y
∂x
 2
=
T
2
1
v2

∂y
∂t
 2
+

∂y
∂x
 2
!
.
The triangular pulse has height uτ, and the two halves of it have length vτ. Thus, |∂y/∂t| = u and
|∂y/∂x| = u/v across the pulse, so the total energy is
U = (2vτ)
dE
dx
=
2Tτu2
v
.
When lifting the string to create the pulse, the string was at an angle of u/v to first order in u/v,
so the transverse force that needed to be applied was Tu/v. The distance over which this force was
applied was uτ, for a total work of Tτu2/v. The same work was done when bringing it down with
constant velocity, so the total work done was 2Tτu2/v, as expected.
Remark
How can we account for damping in the wave equation? The simplest thing would be to add
a force proportional to vy, which e.g. could be due to air drag. Then
∂2
t y = v2
∂2
xy − A∂ty.
But what if the string is in a vacuum? Then the simplest kind of damping would be due to
the energy lost in bending and unbending of the string, which takes the form
∂2
t y = v2
∂2
xy + A∂t∂2
xy
because ∂2
xy describes the bending. This is called Kelvin–Voigt damping.
In both cases, it’s straightforward to handle the damping since the wave equation remains
linear; we just plug in a solution of the form ei(kx−ωt) and find the new relation between ω
and k. If we pick k to be a real number, we will generally find ω to be complex, with its
imaginary part corresponding to exponential decay of the wave over time.
