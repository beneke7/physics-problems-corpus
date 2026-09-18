---
id: solution-ocr-kevin-zhou-mrevsol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-mrev-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 6. A long rope with linear mass density $\lambda$ rests on a horizontal table with a small bend.
![](../../../figures/solution-ocr/32a7a88445420a7e674b1e8f.jpg)

You pull the end of the rope that is near the bend with force $F$.


(a) Suppose that the bend is very small, so that all of the rope touching the ground is perfectly slack (zero tension). What $F$ is needed to pull the end of the rope with constant velocity $v$ ?
(b) Now suppose that the bend is smooth, so that pieces of the rope are gradually accelerated from rest as they pass the bend. What force $F$ is needed to pull the end of the rope with constant velocity $v$ ?
(c) In both cases, what force $F ( t )$ is needed to pull the rope with constant acceleration $a$, if we assume the rope starts flat and at rest at time $t = 0$ ?

Solution. (a) In this case, we can't directly consider the energy, because the sudden acceleration of a piece of the rope when it hits the bend is inherently inelastic. On the other hand, since the part of the rope touching the ground is slack, there can be no horizontal forces on any part of it, so the friction force vanishes. As a result, the only horizontal external force is the force you exert. Note that the mass $m$ that is moving is

$$
m = \frac { \lambda x } { 2 }
$$

where $x$ is the total distance the end has moved. Then

$$
\frac { d m } { d t } = \frac { \lambda v } { 2 }
$$

and we have

$$
F = \frac { d p } { d t } = \frac { d m } { d t } v = \frac { 1 } { 2 } \lambda v ^ { 2 } .
$$


(b) In this case, we can't directly consider the momentum because of the friction force from the ground. However, there are no energy losses, so we have
$$
F = \frac { 1 } { v } \frac { d E } { d t } = \frac { 1 } { v } \frac { 1 } { 2 } \frac { d m } { d t } v ^ { 2 } = \frac { 1 } { 4 } \lambda v ^ { 2 } .
$$
Of course, in reality, the true answer will be somewhere in between the results of (a) and (b), depending on the properties of the bend.
There's a simple reason why this answer is precisely half of the answer to part (a). We showed in M8 that an isolated flexible chain moving with uniform speed $u$ along its length, carrying a constant tension $T = \lambda u ^ { 2 }$, can indefinitely maintain its shape. Now consider the rope in a reference frame moving with speed $v / 2$ to the right. Then the curved part of the rope is precisely such a flexible chain, with uniform tension $T = \lambda v ^ { 2 } / 4$. Therefore, the two rightward forces on the rope, due to the pulling and the friction, are equal.
(c) Again, we can consider momentum and energy, respectively. The part of the string that's moving has mass and speed
$$
m ( t ) = \frac { \lambda a t ^ { 2 } } { 4 } , \quad v ( t ) = a t
$$
so that we have
$$
p ( t ) = \frac { \lambda a ^ { 2 } t ^ { 3 } } { 4 } , \quad E ( t ) = \frac { \lambda a ^ { 3 } t ^ { 4 } } { 8 } .
$$
In the first case, we have
$$
F ( t ) = \frac { d p } { d t } = \frac { 3 } { 4 } \lambda a ^ { 2 } t ^ { 2 } .
$$
In the second case, we have
$$
F ( t ) = \frac { 1 } { v } \frac { d E } { d t } = \frac { 1 } { 2 } \lambda a ^ { 2 } t ^ { 2 } .
$$
Again, the difference comes from the friction force. (The slick argument of part (b) doesn't quite work anymore, since in the moving frame, the chain is accelerating along its length, so the tension inside the curved part isn't uniform; instead, it needs to be higher at the top. However, the argument still shows that the tension at the bottom is $\lambda v ^ { 2 } / 4 = \lambda a ^ { 2 } t ^ { 2 } / 4$. This force is supplied by friction and precisely accounts for the difference between the two cases.)
[2] Problem 7. 3 INPhO 2012, problem 1.
[3] Problem 8. INPhO 2018, problem 4.
[4] Problem 9. USA Theory Team Selection Test 2022, problem 2. A set of nice exercises.

## 3 Oscillations

[3] Problem 10 (NBPhO 2007). Consider a light elastic rod with fixed length $\ell$. If one end of the rod is firmly fixed, and a force $F$ is applied to the other end of the rod, perpendicular to the rod at the point of application, then it can be shown that the rod takes a form of a circular arc with radius of curvature $R = k / F$, for a constant $k$. (We previously considered such objects in problem 3.)

![](../../../figures/solution-ocr/287143e6e3773e03b88b3e84.jpg)
Let the rod be fixed vertically, at its bottom end, and a mass $m$ be attached to its upper end. The rod is initially standing up straight.

(a) Find the period of small oscillations, assuming $m g \ell \ll k$.
(b) What is the maximum mass $m$ for the configuration to be stable?

Solution. (a) Recall that when we find the period of the ordinary pendulum, we can ignore the effect of the tension because it's directed radially, so it's always perpendicular to the mass's trajectory. We only have to care about the tangential component of gravity. This case is a bit trickier than that, for two reasons. First, the trajectory of the mass isn't a circle, because the rod bends. Second, in general we need to care about both the tangential component of gravity and the internal force of the rod.
When the rod has bent through a small total angle $\theta$, its radius of curvature is $R = \ell / \theta$, so the horizontal displacement of the mass is

$$
\Delta x = R ( 1 - \cos \theta ) \approx \frac { R \theta ^ { 2 } } { 2 } = \frac { \ell \theta } { 2 } .
$$

The mass also has a small vertical displacement, but it's proportional to $\theta ^ { 2 }$ and thus negligible. So $\Delta x$ is roughly the total distance the mass has moved.
Next, we want to find the restoring force, i.e. the magnitude of the force acting on the mass which points backwards along the mass's trajectory. The part due to the rod itself is $k / R = k \theta / \ell$. The mass's trajectory makes a small angle of order $\theta$ to the horizontal, so the part due to gravity is of order $m g \theta \approx m g \ell / R$, which is negligible by assumption.
Thus, the motion is simple harmonic with an effective spring constant of $2 k / \ell ^ { 2 }$, giving period $T = \pi \ell \sqrt { 2 m / k }$.

(b) It would be confusing to do this with forces, because the directions of the forces change in a complicated way as the rod is bent, so we instead consider the energy.
When the rod bends an angle $\theta$, the change in the mass's gravitational potential energy is
$$
\Delta U _ { g } = m g r \sin \theta - m g \ell = m g \ell \left( \frac { \sin \theta } { \theta } - 1 \right) \approx - \frac { 1 } { 6 } m g \ell \theta ^ { 2 } .
$$
On the other hand, the rod itself gains potential energy, which can be computed by considering the work done on it. To lowest nontrivial order in $\theta$, we have $d x = \ell d \theta / 2$ and $F = k \theta / \ell$, so
$$
\Delta U _ { r } \approx \int F d x = \int _ { 0 } ^ { \theta } \frac { k \theta } { \ell } \frac { \ell } { 2 } d \theta = \frac { 1 } { 4 } k \theta ^ { 2 } .
$$
Note that $\Delta U _ { g }$ is negligible when $m g \ell \ll k$, which is why we were able to neglect the gravitational force in part (a). More generally, we need to make sure the total potential energy is a minimum at $\theta = 0$, so we need
$$
\frac { m g \ell } { 6 } < \frac { k } { 4 }
$$

which gives a maximum mass of
$$
m = \frac { 3 k } { 2 g \ell } .
$$
[3] Problem 11. INPhO 2019, problem 7. A nice data analysis problem; bring graph paper.
[5] Problem 12. APhO 2011, problem 2. A neat problem on "stick-slip", which appears in many real-world contexts; you can see it in action on a violin string here. (For some other calculations on a similar stick-slip setup, see USAPhO 2021, problem A1.)
Solution. See the official solutions as usual. (There's an older version of the official solutions online, which has a factor of 2 error on the last step. The final answer should be $5.6 \times 10 ^ { - 3 } \mathrm {~s} ^ { - 1 }$.)

## 4 Rotation

[2] Problem 13. NBPhO 2015, problem 3.
[3] Problem 14. 1 USAPhO 2021, problem B1. An elegant rotation problem.
[3] Problem 15 (Morin 8.24). A spherically symmetric ball of radius $R$ initially slides without rotating on a horizontal surface with friction. The initial speed is $v _ { 0 }$, and the moment of inertia about the center is $I = \beta m R ^ { 2 }$.
    (a) Assuming that the normal force is always applied upward at the bottom of the ball, and that the friction force is always applied horizontally at the bottom of the ball (but assuming nothing about how the friction force varies), find the speed of the ball when it begins to roll without slipping. Also, find the kinetic energy lost while sliding.
    (b) Now consider the case where the friction force is standard uniform kinetic friction, $f = - \mu _ { k } N$. Verify that the work done by friction equals the energy loss calculated in part (a).
    (c) In reality, the conclusions above can be modified by "rolling resistance". Any real material will slightly deform when the ball rolls on it. We can crudely account for this by thinking of the normal force as applied not at the bottom of the ball, but at a point slightly forward from the bottom. The horizontal component of this normal force is defined to be $f _ { r } = - \mu _ { r } N _ { y }$ where $N _ { y }$ is the vertical normal force, and $\mu _ { r } \ll 1$. In addition, kinetic friction is still present, as in part (b). Under these assumptions, find the velocity of the ball once it stops slipping. Is more or less energy lost than in part (b)?

Solution. (a) The point here is that we can relate the linear and angular impulses without having to know how the force behaves in time. If there's a net impulse $J$ on the ball, the net change in angular momentum about the center of the ball is $\int R F d t = R J$. When the ball is rolling without slipping, $v = \omega R$. Thus

$$
J = m v _ { 0 } - m v _ { f } = L / R = \beta m R \omega
$$

which gives

$$
v _ { f } = \frac { v _ { 0 } } { 1 + \beta } .
$$

The kinetic energy lost is

$$
\Delta K = \frac { 1 } { 2 } m v _ { 0 } ^ { 2 } - \frac { 1 } { 2 } m v _ { f } ^ { 2 } - \frac { 1 } { 2 } \beta m R ^ { 2 } \omega ^ { 2 } = \frac { 1 } { 2 } m \left( v _ { 0 } ^ { 2 } - ( 1 + \beta ) v _ { f } ^ { 2 } \right) = \frac { 1 } { 2 } \frac { \beta } { 1 + \beta } m v _ { 0 } ^ { 2 } .
$$


(b) Here, $f = - \mu _ { k } m g$ and acts for a time of $t = J / f$. Since the acceleration is constant, the ball travels a distance of $\frac { 1 } { 2 } \left( v _ { 0 } + v _ { f } \right) t$ while sliding. However, it will turn a distance of $R \theta = \frac { 1 } { 2 } \omega R t = \frac { 1 } { 2 } v _ { f } t$ in the other direction, so the relative distance traveled between the surface of the ball and the ground is $L = \frac { 1 } { 2 } v _ { 0 } t$.
$$
\Delta K = f L = \frac { 1 } { 2 } v _ { 0 } J = \frac { 1 } { 2 } m \left( v _ { 0 } - v _ { f } \right) v _ { 0 } = \frac { 1 } { 2 } \frac { \beta } { 1 + \beta } m v _ { 0 } ^ { 2 }
$$
as desired.
(c) Now the angular and linear accelerations are
$$
\alpha = \frac { \mu _ { k } g } { \beta R } , \quad a = - \left( \mu _ { r } + \mu _ { k } \right) g
$$
where the rolling resistance doesn't affect the angular acceleration, because the overall normal force always exerts no torque about the center of mass of the ball. (Note that this conclusion would have been changed if we accounted for the deformation of the ball itself, which would give a second, additional type of rolling resistance. Here we are assuming that the ball is much harder than the surface it rolls on, though there are plenty of situations where the reverse is true, such as when a bike tire rolls on concrete.)
Thus, by similar reasoning to that of part (a),
$$
v _ { f } = \frac { v _ { 0 } } { 1 + \beta \left( 1 + \mu _ { r } / \mu _ { k } \right) } .
$$
This is smaller than the result of part (a), so more energy is lost. The reason is that the rolling resistance dissipates additional energy. Notice that even once slipping stops, rolling resistance will continue to dissipate energy, causing the ball to eventually come to a stop.

## Remark

In the early 1800s, some said it was impossible for a train engine to pull anything heavier than the engine itself. As the argument went, the force that moves the train forward is friction between the engine car's wheels and the track. If the engine car has mass $M$, the maximum friction force is $\mu M g$. If the rest of the train has mass $M ^ { \prime }$, however, then it requires a force $\mu M ^ { \prime } g$ to get it started moving, so the train can't start if $M ^ { \prime } > M$.

Problem 15 explains why this reasoning is wrong. The maximum forward frictional force on the engine car wheels is determined by the coefficient of static friction $\mu _ { s }$, while the force needed to get the rest of the train moving is determined by the coefficient of rolling friction $\mu _ { r }$. So we only need $\mu _ { s } M > \mu _ { r } M ^ { \prime }$, which is possible since $\mu _ { r }$ can be very small. For steel train wheels on steel rail, we might have $\mu _ { s } \sim 0.5$ but $\mu _ { r } \lesssim 10 ^ { - 3 }$.

On the other hand, early trains could have trouble going up inclines. This led to several innovative concepts, such as trains propelled by atmospheric pressure or pushed by mechanical legs. All the mechanical systems we're familiar with today, whose design might seem obvious at first glance, actually gradually evolved through many intermediate forms. For instance, most people think they know how a bicycle works, but actually don't, because it's really quite tricky. Accordingly, it took over a century for the modern bicycle design to evolve.


[4] Problem 16 (IPhO 1998). A hexagonal pencil with mass $M$ and side length $R$ is pushed and rolls down a ramp of inclination $\theta$. For some values of $\theta$, the pencil will roll down the plane with some terminal speed, never losing contact with the ramp. In order to avoid a complicated moment of inertia calculation, we will assume the cross section looks like a wheel with six equally spaced massless spokes and no rim, with all the mass on the axle.
    (a) The pencil does not speed up indefinitely, but rather reaches a steady state. Explain why, and compute the speed the pencil's axis has immediately after each collision, in the steady state.
    (b) Find the minimum $\theta$ so that rolling spontaneously starts, without needing a push.
    (c) Find the minimum $\theta$ so that, once the pencil has been pushed to start rolling, it never stops.
    (d) Find the maximum $\theta$ so that a rolling pencil always remains in contact with the plane.

Solution. (a) Each time the pencil rolls through an angle $\pi / 3$, a new vertex of the pencil hits the plane. In this moment, that vertex suddenly becomes the new pivot point about which the pencil is rotated, which means energy is dissipated in an inelastic collision. This is the reason that the pencil reaches a steady state, instead of accelerating indefinitely. You can see this very nicely depicted in this video.

Let the pencil's center of mass have speed $v _ { i }$ just before an impact, and $v _ { f }$ just after the impact. The impact involves a singular impact force at the new pivot point, which means angular momentum is conserved about that point. Thus,

$$
M v _ { i } R \cos 60 ^ { \circ } = M v _ { f } R
$$

from which we conclude

$$
v _ { f } = \frac { v _ { i } } { 2 } .
$$

In the steady state, the kinetic energy gained from rolling from one vertex to another balances the energy lost in the collision, so conserving energy immediately after a collision and immediately before a next one gives

$$
\frac { 1 } { 2 } M v _ { f } ^ { 2 } + M g R \sin \theta = \frac { 1 } { 2 } M \left( 2 v _ { f } \right) ^ { 2 }
$$

from which we conclude

$$
v _ { f } = \sqrt { \frac { 2 g R \sin \theta } { 3 } } .
$$

By the way, the original formulation of the question gave the pencil a moment of inertia $C M R ^ { 2 }$ about its center of mass. The solution with general $C$ is not much harder. Now the angular momentum conservation condition is

$$
M v _ { i } R \cos 60 ^ { \circ } + C M R ^ { 2 } \omega _ { i } = ( C + 1 ) M R ^ { 2 } \omega _ { f }
$$

where $\omega _ { i } = v _ { i } / R$ and $\omega _ { f } = v _ { f } / R$. Thus,

$$
v _ { f } = \frac { 2 C + 1 } { C + 1 } \frac { v _ { i } } { 2 } .
$$


The energy balance equation for the steady state becomes
$$
\frac { 1 } { 2 } M ( C + 1 ) v _ { f } ^ { 2 } + M g R \sin \theta = \frac { 1 } { 2 } M ( C + 1 ) v _ { i } ^ { 2 }
$$
and simplifying gives
$$
v _ { f } = \sqrt { \frac { 2 g R \sin \theta ( C + 1 / 2 ) ^ { 2 } } { ( C + 1 ) \left( ( C + 1 ) ^ { 2 } - ( C + 1 / 2 ) ^ { 2 } \right) } } .
$$
(b) This is a basic statics problem. The rolling must start if the center of mass of the hexagon is not above its support, so the minimum angle is $\theta = 30 ^ { \circ }$.
(c) Between two vertex transitions, the maximum potential energy of the pencil is when the center of mass is directly above the vertex at a height $R$. It will start out at a height of $h _ { 0 } = R \sin \left( \theta + 60 ^ { \circ } \right)$ above the vertex, and fall down to a height $h _ { f } = R \sin \left( 60 ^ { \circ } - \theta \right)$ above the vertex.
In order for it to roll indefinitely, potential energy from height $R$ to $h _ { f }$ followed by the inelastic collision must leave enough kinetic energy for the pencil to go from height $h _ { 0 }$ to height $R$. Earlier we found that $\omega _ { f } = \omega _ { 0 } ( C + 1 / 2 ) / ( C + 1 )$, so the kinetic energy will be reduced by a factor of $\alpha = \left( \omega _ { f } / \omega _ { 0 } \right) ^ { 2 }$. Thus the energy equation for indefinite rolling is
$$
\alpha M g \left( R - h _ { f } \right) = M g \left( R - h _ { 0 } \right) .
$$
This implies
$$
\frac { 1 - \sin \left( \theta + 60 ^ { \circ } \right) } { 1 - \sin \left( 60 ^ { \circ } - \theta \right) } = \alpha .
$$
In our case, $\alpha = 1 / 4$. The solution of the above equation can be found using either binary search or by the "plug in" method, i.e. repeatedly calculating
$$
\arcsin \left( 1 - \frac { 1 - \sin \left( 60 ^ { \circ } - \mathrm { Ans } \right) } { 4 } \right) - 60 ^ { \circ } .
$$
Both methods give an answer of $\theta = 10.21 ^ { \circ }$.
(d) The pencil leaves the ramp when gravity isn't strong enough to provide the needed centripetal acceleration for the rotation about a vertex. Right before the next vertex transition, the pencil is moving the fastest, and the radial component of gravity is the smallest, so the pencil most readily leaves the ramp at that point. Using part (a)'s notation ( $\omega _ { 0 }$ is the angular velocity right before the next transition), the leaving condition is $g \cos \left( 30 ^ { \circ } + \theta \right) = g \sin \left( 60 ^ { \circ } - \theta \right) = \omega _ { 0 } ^ { 2 } R$, where $30 ^ { \circ } + \theta$ is the angle between the vertical and line connecting the center of mass to the vertex. Using our expression for $\omega _ { 0 } = \frac { v _ { f } } { R } ( C + 1 ) / ( C + 1 / 2 )$ found in part (a),
$$
\sin \left( 60 ^ { \circ } - \theta \right) = \frac { 2 \sin \theta ( C + 1 ) } { \left( ( C + 1 ) ^ { 2 } - ( C + 1 / 2 ) ^ { 2 } \right) }
$$
With $C = 0$, we have
$$
\sin \left( 60 ^ { \circ } - \theta \right) = \frac { 8 \sin \theta } { 3 } .
$$
We can binary search for the answer or repeatedly plug in
$$
\arcsin \left( \frac { 3 \sin \left( 60 ^ { \circ } - \operatorname { Ans } \right) } { 8 } \right)
$$

to find that the maximum angle for it to stay on the ramp is $\theta = 15.3 ^ { \circ }$. So the range of angles where the rolling will never stop, but also keep the pencil on the ramp, is quite narrow!
This famous question has appeared on the IPhO, BAUPC, and Morin's mechanics book, and papers have even experimentally confirmed its results. For more, see the extended analysis here.

[4] Problem 17. USAPhO 2017, problem B1. A tough rotation problem.

[3] Problem 18. USAPhO 2021, problem B3. A cute setup with many nice lessons.
The next two questions are about three-dimensional rotation, covered in M8.
[3] Problem 19 (BAUPC). A frictionless fixed cone stands on its tip.
![](../../../figures/solution-ocr/399da7883bf22ca7f6be42ce.jpg)
    (a) A particle slides on the inside surface of the cone at height $h$ above the tip, as shown at left above. Find the angular frequency of the circular motion.
    (b) Now suppose the cone has friction, and a small ring of negligible radius rolls on the surface without slipping at the same height. Also assume that the plane of the ring is at all times perpendicular to the line joining the point of contact and the tip of the cone, as shown at right above. Find the angular frequency of the circular motion.
    (c) How general were our assumptions in part (b)? Specifically, would the described motion had been possible if the plane of the ring were at a different angle? Is a slightly smaller or larger angle to the horizontal possible? Would it be possible if the ring were exactly horizontal?
Solution. (a) The centripetal force $m \omega ^ { 2 } h \tan \theta$ is horizontal, which equals to $N \cos \theta$. The particle must be vertically balanced, so $N \sin \theta = m g$, giving
$$
\omega ^ { 2 } h \tan \theta = g \cot \theta
$$
and solving for $\omega$ yields
$$
\omega = \cot \theta \sqrt { \frac { g } { h } } .
$$
    (b) Let the ring have moment of inertia $\beta m r ^ { 2 }$ (where $\beta = 1$ ) and move in a circle of radius $R = h \tan \theta \gg r$. The no slip condition is $\omega r = \Omega R$. About the point of contact, the ring has a horizontal angular momentum $L _ { h } = ( 1 + \beta ) m r ^ { 2 } \omega \sin \theta$, where the two terms are due to orbital and spin angular momentum.

Since $\boldsymbol { \tau } = d \mathbf { L } / d t$, the torque about the point of contact is solely due to gravity, $\tau = m g r \cos \theta$. Using $| d \mathbf { L } | / d t = \Omega L _ { h }$ gives
$$
m g r \cos \theta = \Omega ( 1 + \beta ) m r ^ { 2 } \omega \sin \theta .
$$
Solving for $\Omega$ yields
$$
\Omega = \cot \theta \sqrt { \frac { g } { 2 h } } .
$$
(c) There are two constraints in this problem: force balance and torque balance. As we saw in part (b), considering the torque of gravity about the contact point alone fixes the angular frequency $\Omega$ of the circular motion. That in turn gives the force balance equations (vertical force is zero, horizontal force is centripetal), and since the coefficient of friction is high enough to prevent slipping, there's always some combination of normal and frictional forces that makes the problem work out. Since none of this depends very sensitively on the angle, we could change the angle and the problem would still work.
There's one exception: you can't have a horizontal ring. In that case, the angular momentum of the ring does not change at all (because it's always spinning in a horizontal plane), so the torque balance equation can't be satisfied. Thus, when motorcyclists ride along the equator of the globe of death (mentioned in M2), they always tilt a bit above the horizontal.
[3] Problem 20. Richard Feynman used to tell the following story, here reproduced verbatim.
I was in the cafeteria and some guy, fooling around, throws a plate in the air. As the plate went up in the air I saw it wobble, and I noticed the red medallion of Cornell on the plate going around. It was pretty obvious to me that the medallion went around faster than the wobbling.
I had nothing to do, so I start figuring out the motion of the rotating plate. I discover that when the angle is very slight, the medallion rotates twice as fast as the wobble rate - two to one. It came out of a complicated equation!
I went on to work out equations for wobbles. Then I thought about how the electron orbits start to move in relativity. Then there's the Dirac equation in electrodynamics. And then quantum electrodynamics. And before I knew it... the whole business that I got the Nobel prize for came from that piddling around with the wobbling plate.

Feynman was right about quantum electrodynamics, but was he right about the plate?
Solution. For concreteness, take the angular momentum of the plate to point upward. From the problem statement, the axis of symmetry of the plate is a small angle $\theta$ away from this direction.
![](../../../figures/solution-ocr/9ad4818889b328c8b35d0b33.jpg)
As in M8, we decompose the angular momentum into parallel and perpendicular components, and

$$
L _ { \| } = L , \quad L _ { \perp } = \theta L
$$


by the small angle approximation, and hence

$$
\omega _ { \| } = \frac { L _ { \| } } { I _ { \| } } = \frac { L } { M R ^ { 2 } / 2 } , \quad \omega _ { \perp } = \frac { L _ { \perp } } { I _ { \perp } } = \frac { \theta L } { M R ^ { 2 } / 4 }
$$

where the last step is by the perpendicular axis theorem. Now we need to think more about the physical motion of the plate. The component $\omega _ { \| }$of angular velocity parallel to the axis of rotation is the part that makes the medallion go around,

$$
\omega _ { \text {med } } = \omega _ { \| } .
$$

The component $\omega _ { \perp }$ makes the orientation of the plate itself rotate. Specifically, the entire setup drawn above rotates about the axis of $\mathbf { L }$ with angular velocity $\omega _ { \text {wob } }$. Imagine the path taken by the unit normal $\hat { \mathbf { n } }$ to the plate. The tip of this vector goes in a circle of circumference $2 \pi \theta$, but the speed of the tip of the vector is $\omega _ { \perp }$. Therefore, the angular velocity of the vector along the circle is

$$
\omega _ { \mathrm { wob } } = \frac { \omega _ { \perp } } { \theta } .
$$

The answer to the question is

$$
\frac { \omega _ { \mathrm { med } } } { \omega _ { \mathrm { wob } } } = \frac { 1 } { 2 } .
$$

So it's the opposite of what Feynman says! The wobbling actually goes twice as fast. Sometimes, when you tell a story too many times, you forget details like this.

## 5 Gravity

[3] Problem 21 (Morin 5.65). Let the Earth's radius be $R$, its average density be $\rho$, and its angular frequency of rotation be $\omega$. Consider a long rope with uniform mass density extending radially from just above the surface of the Earth out to a radius $\eta R$. Show that if the rope is to remain above the same point on the equator at all times, then we must have
$$
\eta ^ { 2 } + \eta = \frac { 8 \pi G \rho } { 3 \omega ^ { 2 } } .
$$
What is the numerical value of $\eta$, and where does the tension in the rope achieve its maximum value? This would be a "space elevator", allowing objects to be cheaply lifted to space. But we currently can't build anything that could withstand the enormous tension.
Solution. The gravitational field from Earth will be
$$
g = \frac { 4 } { 3 } G \pi \rho R ^ { 3 } / r ^ { 2 }
$$
which works with the tension to provide the centripetal acceleration $\omega ^ { 2 } r$. For a small piece of rope of length $d r$ and mass $d m = \mu d r$, force balance gives
$$
\begin{gathered}
\omega ^ { 2 } r d m = g d m - d T \\
d T = \frac { 4 } { 3 } \frac { G \pi \rho \mu R ^ { 3 } } { r ^ { 2 } } d r - \mu \omega ^ { 2 } r d r
\end{gathered}
$$

Integrating from $r = R$ to $r = \eta R$ gives

$$
T ( \eta R ) - T ( R ) = \frac { 4 } { 3 } G \pi \rho \mu R ^ { 2 } \left( 1 - \frac { 1 } { \eta } \right) - \frac { 1 } { 2 } \mu \omega ^ { 2 } R ^ { 2 } \left( \eta ^ { 2 } - 1 \right) .
$$

At both ends of the rope, the tension must be zero since they're not connected to anything, so

$$
\frac { 8 \pi G \rho } { 3 \omega ^ { 2 } } \frac { \eta - 1 } { \eta } = ( \eta - 1 ) ( \eta + 1 )
$$

which gives

$$
\eta ^ { 2 } + \eta = \frac { 8 \pi G \rho } { 3 \omega ^ { 2 } } = 579
$$

and solving the quadratic numerically gives

$$
\eta = 23.6 .
$$

The maximum value of the tension occurs when $d T / d r = 0$, which is when

$$
r ^ { 3 } = \frac { 4 \pi G \rho R ^ { 3 } } { 3 \omega ^ { 2 } } , \quad r = R \left( \frac { 4 \pi G \rho } { 3 \omega ^ { 2 } } \right) ^ { 1 / 3 } = 6.62 R .
$$

This radius has a physical meaning: since the gravitational and centrifugal forces on a piece of mass balance here, it's the radius where a satellite can stay in geostationary orbit.
[2] Problem 22 (Morin 10.7). A puck slides with a small speed $v$ on frictionless ice. The surface is "level" in the sense that it is orthogonal to $\mathbf { g } _ { \text {eff } }$ at all points, where $\mathbf { g } _ { \text {eff } }$ includes the centrifugal acceleration. Show that the puck moves in a circle, as seen in the Earth's rotating frame. Find its radius and the angular frequency and direction of the motion, in terms of the Earth's angular velocity $\omega _ { 0 }$ and the latitude $\phi$ of the puck.

Solution. Since the surface is level with gravity and the centrifugal acceleration, the normal force will cancel out the effects from those, so the only remaining force is the Coriolis force $- 2 m \boldsymbol { \omega } _ { 0 } \times \mathbf { v }$. The component of Earth's angular velocity normal to the ground at latitude $\phi$ is $\Omega \sin \phi$, so

$$
2 \omega _ { 0 } v \sin \phi = v ^ { 2 } / r , \quad r = \frac { v } { 2 \omega _ { 0 } \sin \phi } , \quad \omega = 2 \omega _ { 0 } \sin \phi .
$$

The puck will travel clockwise in the Northern hemisphere and counterclockwise in the Southern hemisphere. (You might wonder why this is opposite the direction hurricanes turn. The difference is that in a hurricane, the center has low pressure, and the Coriolis force provides a outward force which opposes the inward pressure force, so that the system doesn't immediately collapse. By contrast, here the Coriolis force must be inward since it is the only source of centripetal force.)
[2] Problem 23. A narrow tube is formed in the shape of ring of radius $R$. Initially, it is stationary and horizontal in the lab frame. Then, it is quickly spun by 180° about its east-west diameter.

(a) Suppose the tube contains water, and the Earth's rotational velocity $\boldsymbol { \omega }$ makes an angle $\phi$ to the vertical in the lab frame. What is the speed of the water afterward?
(b) Suppose the tube is a conductor with self-inductance $L$, and the Earth's magnetic field B makes an angle $\phi$ to the vertical in the lab frame. What is the current in the tube afterward?

Solution. (a) This is called the Compton generator. It was invented by Compton while he was still an undergraduate to measure the Coriolis force, and he found agreement to within 3\%.

We first compute the Coriolis impulse on a small piece of the water in the tube, with mass $d m$, as the ring spins around. We have

$$
d \mathbf { J } _ { c } = ( d m ) \int 2 \boldsymbol { \omega } \times \mathbf { v } d t = ( d m ) \int 2 \boldsymbol { \omega } \times d \mathbf { r } = ( d m ) 2 \boldsymbol { \omega } \times \Delta \mathbf { r }
$$

where $\Delta \mathbf { r }$ is the total displacement of that piece of water. Since the rotation is about the east-west axis, all the displacements are north-south, which means that only the vertical component of $\boldsymbol { \omega }$ matters. If we let $\theta = 0$ at the easternmost point of the ring, then the component of the impulse on this fluid element along the ring is

$$
d J _ { c } = ( 2 \omega \cos \phi d m ) \Delta r \sin \theta
$$

Next, we integrate over the ring, letting $\theta = 0$ at the easternmost point, so that

$$
J _ { c } = 2 \omega \cos \phi \int _ { 0 } ^ { 2 \pi } d \theta \frac { d m } { d \theta } ( 2 R \sin \theta ) \sin \theta = 4 \omega R \cos \phi \frac { m } { 2 \pi } \pi .
$$

The final velocity is given by $J _ { c } = m v _ { f }$, so that

$$
v _ { f } = 2 \omega R \cos \phi .
$$

(b) This is called an Earth inductor, or Delzenne's circle. We simply apply Faraday's law, using the fact that the change in magnetic flux is $2 \pi R ^ { 2 } B \cos \phi$, along with
$$
\Delta \Phi = \int \mathcal { E } d t = L I _ { f }
$$
to conclude that
$$
I _ { f } = \frac { 2 \pi R ^ { 2 } } { L } B \cos \phi .
$$
This is similar in form to the answer in part (a), and the reason is that the magnetic force $\mathbf { v } \times \mathbf { B }$ and the Coriolis force $2 \mathbf { v } \times \boldsymbol { \omega }$ are similar. Indeed, we could have solved part (a) much faster by thinking like the magnetic case, and computing a change in the "flux" of $\boldsymbol { \omega }$. Of course, the analogy isn't perfect. The fluid motion is dominated by kinetic energy, while, as we mentioned in E5, in a typical circuit the kinetic energy of the charges is negligible, and field energy dominates instead. Also, in a typical circuit the density of electrons is almost perfectly uniform, while in a mechanical system the mass density can be arbitrary.
However, it can sometimes be helpful to keep this analogy in mind. If the force is the only thing that matters, then we can often exchange magnetic and Coriolis force effects. For example, as we discussed in E5, a superconductor in a magnetic field will produce currents that expel that magnetic field. But since the Coriolis force has the same form, if you just rotate a superconductor in a lab on the Earth, it will also produce currents, because the electrons respond to the Coriolis force in the same way! This neat effect is called the London moment.
