---
id: kevin-zhou-m6-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m6-p016
solution_type: author
source_document: solution-document-kevin-zhou-m6sol
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M6Sol.pdf."
---

[5] Problem 16. The classic cosmic speeds. For each part, express your answers in terms of
v0 =
r
GMEarth
REarth
= 7.9km/s, u0 =
r
GMSun
dSun
= 29.8km/s.
Neglect the rotation of the Earth about its own axis for all parts except for part (b).
(a) What is the minimum launch speed required to put a satellite into orbit around the Earth?
This is the first cosmic speed. (It’s useful to think in terms of speeds because the Tsiolkovsky
rocket equation tells us that directly determines the amount of fuel needed. Multistage rocket
maneuvers are often described in terms of their “total ∆v”.)
(b) If you account for the rotation of the Earth, which has speed vr at the equator, what is the
new minimum speed and how should the satellite be launched?
(c) What is the minimum launch speed required for a rocket to escape the gravitational field of
the Earth? This is the second cosmic speed.
(d) What is the minimum launch speed required for a rocket to leave the solar system? This is
the third cosmic speed. How should the satellite be launched? (Hint: doing this exactly is
very hard; instead use the approximation REarth ≪ dSun. To check, the answer is 16.7km/s.)
(e) What is the minimum launch speed required for a rocket to hit the Sun? Assume you cannot
make any adjustments to the rocket’s path after launch. (To check, the answer is 31.8km/s.)
(f) If subsequent adjustments are allowed, the minimum launch speed to hit the Sun can be dra-
matically reduced. Find the minimum launch speed required to hit the Sun if an infinitesimal
adjustment later is allowed.
(g) Comets orbit very far from the Sun, with nearly zero speed. What is the maximum relative
speed with which a comet can impact the Earth?
Solution. Note that u0 is the speed the Earth orbits the Sun.
22
Kevin Zhou Physics Olympiad Handouts
(a) By Newton’s second law, mv2/R = GMm/R2, so the answer is simply v0 = 7.9km/s.
(b) Let vr be the speed of rotation from the earth. To launch from the poles, we need to launch
with speed v0, but from the equator, we need to launch with only v0 − vr, giving 7.4km/s.
(c) The total energy must be 0, so −GMm/R + 1
2mv2 = 0, or v =
√
2v0 = 11.2km/s.
(d) We work in two stages: first the rocket leaves the field of the Earth, then it leaves the field
of the Sun. This is valid since REarth ≪ dSun. In fact, this is necessary: we cannot do the
problem in a single step using energy conservation, because we would necessarily have to work
in a frame where either the Earth or Sun has a significant velocity. Then there may be large
changes in the kinetic energy of the Earth or Sun, which can be extremely subtle to deal with.
(Recall the problem we had with the accelerating car in M3!)
Once the rocket has left the field of the Earth, its velocity relative to the Sun must be √
2u0. Since the Earth already has velocity u0, the minimum relative velocity to the Earth is
(
√
2−1)u0. Now work in the frame of the Earth for the first stage. If the launch velocity is v,
then energy conservation gives
1
2
(v2
− ((
√
2 − 1)u0)2
) =
GMEarth
REarth
= v2
0.
Solving for v, we get
v =
q
2v2
0 + (3 − 2
√
2)u2
0 = 16.7km/s
which gives the advertised numeric answer.
If you found this part quite tricky, don’t worry: there have been whole papers written about
it, and many textbooks that got it wrong, including Halliday and Resnick!
(e) In this case, after leaving the Earth we need zero velocity, so velocity u0 relative to the Earth.
By similar reasoning, we get
v =
q
2v2
0 + u2
0 = 31.8km/s.
(f) The best option is actually to do the procedure of part (d), in order to leave the solar system.
After the rocket is a very large distance away, it can perform a very small boost to cancel
out its angular momentum and fall into the Sun. This gives an answer of 16.7km/s. (This
solution is the first two thirds of an Edelbaum maneuver, as described in the remark below.)
(g) This is very similar to part (d), but in reverse. Once the comet gets near the Earth, it has
speed
√
2u0 in the Sun’s frame. To get the highest possible relative velocity, this should be
directed against the Earth’s velocity, giving a relative velocity of (
√
2 + 1)u0 in the Earth’s
frame. Applying energy conservation until impact gives
1
2
(v2
− ((
√
2 + 1)u0)2
) = v2
0.
Solving for v gives the remarkably high answer
v =
q
2v2
0 + (3 + 2
√
2)u2
0 = 72.8km/s.
23
Kevin Zhou Physics Olympiad Handouts
Remark
There’s a whole science of multi-stage rocket maneuvers. For example, suppose your
goal is to quickly escape the solar system. As you found in part (d) of problem 16,
the minimum launch speed necessary is the third cosmic speed. However, you can also
start by doing the maneuver of part (e). Once the rocket is very close to the Sun, it’ll
be moving extremely quickly, which means that a second impulse can provide a huge
amount of energy. This is called the Oberth maneuver, as it uses the Oberth effect. Doing
it this way costs more fuel, in terms of total ∆v, but can allow the rocket to leave much faster.
In practice, you can only get within some distance rmin of the Sun without the rocket burning
up, so there’s a limit to how much you can employ the Oberth effect. Thus, in some cases a
three-impulse maneuver, called the Edelbaum maneuver, can be even better. In the Edelbaum
maneuver, you begin with a forward impulse to get to a higher elliptical orbit, then perform
a backward impulse to drop to rmin. This gives a higher speed at rmin, since the rocket is
on an elliptical orbit with higher total energy. Then a final forward impulse can be used to
escape the solar system. You can read more about these maneuvers here. However, neither
the Oberth or Edelbaum maneuvers have ever been used, because the ∆v requirement is too
high for them to be feasible. For an authoritative reference on rocket maneuvers, see An
Introduction to the Mathematics and Methods of Astrodynamics by Battin.
[4] Problem 17 (MPPP 36). Consider a solar system with two planets, in circular orbits with radii
R1 and R2 = xR1, where x > 1. A space probe is planned to be launched from the first planet,
which we will call the Earth, and use a gravitational slingshot from the second planet to exit the
solar system. The goal is to do this with the smallest fuel energy expenditure possible. Assume
that all planets orbit in circles in the same plane.
(a) The space probe is launched so that, after it has exited the gravitational field of the Earth,
but before it has moved very far, it has speed v0 in the Sun’s frame. Furthermore, its velocity
is parallel to the Earth’s velocity in the Sun’s frame. Explain why this direction of launch
minimizes the energy needed.
(b) Assume the space probe arrives near the second planet, with radial and tangential speeds vr
and vt with respect to the Sun. Find vr and vt.
(c) Suppose the planet have speed vp. In terms of vp, vr, and vt, what is the largest possible
speed vf of the space probe (relative to the Sun) after the gravitational slingshot ends?
(d) To three significant figures, find the value of x that minimizes the required initial launch speed
v0, for the probe to be able to escape the solar system.
(e) Which real solar system planet is closest to this ideal planet?
Solution. (a) We can achieve any velocity relative to the Earth with the same energy expenditure
(ignoring the small effect of the Earth’s rotation). But what matters for escaping the solar
system is the velocity relative to the Sun. This is biggest if the velocity relative to the Earth
and the Earth’s velocity relative to the Sun are parallel, so that the speeds add.
24
Kevin Zhou Physics Olympiad Handouts
(b) By angular momentum conservation,
vt =
v0
x
.
By energy conservation,
1
2
mv2
0 −
GMm
R
=
1
2
m(v2
r + v2
t ) −
GMm
xR
.
This can be solved straightforwardly. Introducing the Earth’s speed vE =
p
GM/R,
vr =
s
v2
0

1 −
1
x2

− 2v2
E

1 −
1
x

.
(c) A gravitational slingshot is simply an elastic collision, so as we saw in M3, the best frame to
use is the center of mass frame, which in this case is effectively the planet’s frame. In this
frame the speed of the probe is
vrel =
q
(vt − vp)2 + v2
r.
As shown in M3, the most general thing that can happen is that the velocity of the probe
(in this frame) is rotated.
The final speed of the space probe, relative to the Sun, is a vector of length vrel plus the
velocity of the planet vp. So the highest possible speed is achieved when these are parallel,
vf = vp +
q
(vt − vp)2 + v2
r.
(d) Escape velocity is achieved when vf =
√
2vp. Plugging this in gives
(
√
2 − 1)vp =
q
(vt − vp)2 + v2
r.
Squaring both sides, we have
(2 − 2
√
2)v2
p = v2
r + v2
t − 2vtvp.
Plugging in the results of part (b),
(2 − 2
√
2)v2
p =
v2
0
x2
+ v2
0

1 −
1
x2

− 2v2
E

1 −
1
x

−
2
x
v0vp.
After a little simplification, and using vp = vE/
√
x, this becomes
v2
E
x
(2 − 2
√
2) = v2
0 − 2v2
E

1 −
1
x

−
2v0vE
x3/2
.
Let’s work with the dimensionless variable u = v0/vE, which obeys
u2
−
2u
x3/2
+
2
√
2
x
− 2 = 0.
25
Kevin Zhou Physics Olympiad Handouts
This is a quadratic in u. Applying the quadratic formula and taking the physical sign gives
u =
1
x3/2
+
s
1
x3
−
2
√
2
x
+ 2.
This is the function we want to minimize with respect to x. Taking the derivative and setting
it to zero is possible, though extremely painful; this yields
x =
9 +
p
81 − 24
√
8
8
≈ 1.58.
Alternatively, one can simply perform binary search on a calculator, giving the same result.
(e) This is the closest to Mars, which has x = 1.52.
Remark
Above we discussed the Oberth and Edelbaum maneuvers, which use two and three impulses,
respectively. In general, if you only deal with the gravity of the Sun, optimal maneuvers never
require more than three impulses, so they can’t get too complicated. But in reality, it would
be impractical to exit the solar system or reach the Sun without also using gravitational
slingshots. The Voyager probes used multiple slingshots off the gas giants to do the for-
mer, while the Parker Solar Probe did seven gravitational slingshots off Venus to do the latter!
Such trajectories need to be planned years in advance. They require careful adjustment to
make sure the rocket reaches the right points at the right times. Even the simplest case
of reaching a single desired point at a desired time, which is called Lambert’s problem, is
already analytically messy, and anything more than that has to be done numerically.
Still, you might be thinking, is this really the hardest stuff in the world, when it just boils
down to Newtonian mechanics? Well, as Lee DuBridge, the president of Caltech once said:
I [like] to talk about space to nonscientific audiences. In the first place, they
can’t check up on whether what you are saying is right or not. And in the second
place, they can’t make head or tail out of what you are telling them anyway—-so
they just gasp with surprise and wonderment, and give you a big hand for being
smart enough to say such incomprehensible things. And I never let on that all
you have to do to work the whole thing out is to set the centrifugal force equal
to the gravitational force and solve for the velocity. That’s all there is to it!
I’m just being glib here – the moon landing is unquestionably one of the greatest engineering
feats in history. The physical laws at play are elementary, but their application is subtle, and
the engineering required getting thousands of tricky real-world details right.
