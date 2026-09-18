---
id: solution-ocr-kevin-zhou-m1sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3: $F = m a 2022$ B4
A firework explodes, sending shells in all directions. Suppose the shells are all launched with the same speed, and ignore air resistance, but not gravity. What shape do the shells make?

Solution
In the absence of gravity, the shells would always form a sphere. Adding gravity simply shifts all of their locations downward by $g t ^ { 2 } / 2$, so the shape is still always a sphere.
[1] Problem 9 (KoMaL 2019). A cannon A is at the edge of a cliff with a 800 m drop. Cannon B is on the ground below the cliff and 600 m horizontally away from it. Cannon A shoots a cannonball directly towards cannon B at 60 m/s. Cannon B shoots a cannonball directly towards cannon A at 40 m/s. Will the two cannonballs hit each other in midair?

Solution. Work in the frame freely falling with the cannonballs. In this case, the balls have a relative velocity of 100 m/s and initial separation of 1000 m, so it takes 10 s to collide. If there were no gravity, this collision would occur at a point $( 2 / 5 ) ( 800 \mathrm {~m} ) = 320 \mathrm {~m}$ above the ground. However, because of gravity both balls have fallen by an extra $g t ^ { 2 } / 2 = 500 \mathrm {~m}$ by this time. Hence the balls hit the ground before they can hit each other in midair.
[2] Problem 10 (Wang). Two particles are released in gravitational acceleration $g$ with leftward and rightward speeds $v _ { 1 }$ and $v _ { 2 }$. Find the distance between them when their velocities are perpendicular.

Solution. After time $t$, the velocity vectors are $\left( - v _ { 1 } , - g t \right)$ and $\left( v _ { 2 } , - g t \right)$. These are perpendicular when the dot product is zero, so $v _ { 1 } v _ { 2 } = ( g t ) ^ { 2 }$, which you can also show with basic geometry. Thus,

$$
t = \frac { \sqrt { v _ { 1 } v _ { 2 } } } { g } .
$$


To compute the distance, we can just work in the frame falling with the masses. Then it's clear that the acceleration $g$ doesn't matter, and the distance is just

$$
d = \left( v _ { 1 } + v _ { 2 } \right) t = \frac { \left( v _ { 1 } + v _ { 2 } \right) \sqrt { v _ { 1 } v _ { 2 } } } { g } .
$$

[3] Problem 11 (Kalda). Two intersecting circles of radius $r$ have centers a distance $a$ apart. If one circle moves towards the other with speed $v$, what is the speed of one of the points of intersection?

Solution. Work in the frame where the circles are moving towards each other with speed $v / 2$. Then by the Pythagorean theorem, the speed of the point of intersection is

$$
\left| \frac { d } { d t } \sqrt { r ^ { 2 } - ( a / 2 ) ^ { 2 } } \right| = \frac { a v } { 4 \sqrt { r ^ { 2 } - a ^ { 2 } / 4 } }
$$

where we used $d a / d t = - v$. However, we're not done yet, because the speed of the point of intersection depends on the frame; we need to go back to the original frame. Using the Pythagorean theorem again, the answer is

$$
\sqrt { \left( \frac { a v } { 4 \sqrt { r ^ { 2 } - a ^ { 2 } / 4 } } \right) ^ { 2 } + \left( \frac { v } { 2 } \right) ^ { 2 } } = \frac { v } { 2 } \frac { 1 } { \sqrt { 1 - ( a / 2 r ) ^ { 2 } } } .
$$

[2] Problem 12 (Kalda). A mirror rotates about an axis passing through it, with angular speed $\omega$. A stationary point source of light sits at a distance $a$ from the rotation axis. What is the speed of its mirror image?

Solution. Work in the frame rotating with the mirror. Because the image is always flipped across the mirror with respect to the source, since the source rotates with angular velocity $- \omega$, the image rotates with angular velocity $\omega$. Then the relative angular velocity of the source and image is $2 \omega$, which holds in all frames. Thus, in the original frame the image has angular velocity $2 \omega$ and speed $2 \omega a$.
[2] Problem 13 (Kalda). Two circles of radius $r$ intersect at the point $O$. One of the circles rotates about the point $O$ with constant angular speed $\omega$. The other point of intersection $O ^ { \prime }$ is originally a distance $d$ from $O$. Find the speed of $O ^ { \prime }$ as a function of time.

Solution. Remarkably, the answer does not depend on the time! Let $d$ be the distance between the points of intersection, and work in the rotating frame where the circles rotate with angular velocities $\omega / 2$ and $- \omega / 2$ about $O$.
![](../../../figures/solution-ocr/70d331da41c1054a3024c663.jpg)


Since $\dot { \theta } = \omega / 2$ and $\cos \theta = d / 2 r$, we have

$$
- \frac { \omega } { 2 } \sin \theta = \frac { \dot { d } } { 2 r } , \quad \dot { d } = - r \omega \sin \theta .
$$

This is the vertical velocity of $O ^ { \prime }$. Now we need to go back to the original frame, which involves rotating with angular velocity $\omega / 2$ about $O$. Then $O ^ { \prime }$ picks up a horizontal velocity of $( 2 r \cos \theta ) ( \omega / 2 )$ for a total speed of

$$
v = \sqrt { r ^ { 2 } \omega ^ { 2 } \sin ^ { 2 } \theta + r ^ { 2 } \omega ^ { 2 } \cos ^ { 2 } \theta } = r \omega
$$

which is constant. The geometrical reason is that the second intersection point rotates around the nonrotating circle with uniform angular velocity $\omega$, as you can show by some angle chasing.

Idea 4
It can be useful to think about the motion from a different perspective. For example, you can work in "velocity space", i.e. directly think about how the velocity vector evolves over time, or the set of possible velocity vectors. You can also think in "spacetime", i.e. visualize the process on a space where time is one of the axes.

[2] Problem 14 (PPP 3). A boat can travel at a speed of 3 m/s on still water. A boatman wants to cross a river while covering the shortest possible distance.
    (a) In what direction should he row if the speed of the water is 2 m/s?
    (b) How about if it is 4 m/s?

Solution. (a) The boatman can completely cancel out the horizontal velocity of the water. He should row an angle $\cos ^ { - 1 } ( 2 / 3 )$ from the upstream direction, so that the boat moves directly across the river.


(b) The boatman cannot cancel out the horizontal velocity. Instead, the set of possible velocities forms a circle in velocity space, as shown. (I thank Stefan Ivanov for providing this figure.)

![](../../../figures/solution-ocr/82216d91364f011ed9217d4f.jpg)
By taking the velocity with the angle closest to directly across the river, we see the boatman should row an angle $\cos ^ { - 1 } ( 3 / 4 )$ from the upstream direction.


Idea 5
In problems with friction, the best reference frame to use is almost always the frame of whatever is causing the friction.

[2] Problem 15 (Kalda). A block is pushed onto a conveyor belt. The belt is moving with speed $1 \mathrm {~m} / \mathrm { s }$, and the block's initial speed is $2 \mathrm {~m} / \mathrm { s }$, with initial velocity perpendicular to that of the belt. During the subsequent motion, what is the minimum speed of the block with respect to the ground?
Solution. Work in the frame of the belt. In this frame, the initial velocity of the ground and block are shown as arrows below.
![](../../../figures/solution-ocr/3255381cf423bab946c170d3.jpg)
Friction causes the block's velocity to shrink to zero in this frame. The block has the minimal relative speed with the ground when the tips of the two vectors are as close as possible, which is when they form the right triangle shown above. Using similar triangles, the relative speed at this point is $( 2 / \sqrt { 5 } ) \mathrm { m } / \mathrm { s }$.
[2] Problem 16 (Kalda). A boy enters a patch of ice with a coefficient of friction $\mu$ with speed $v$. By running on the ice, the boy turns his velocity vector by 90° in the minimum possible time, so that his final speed is also $v$. What is the minimum possible time, and what kind of curve is the trajectory? Assume the normal force with the ice is constant.
Solution. If you have a given initial and final position, and want to go between them with a fixed speed in the shortest possible time, then you should move in a straight line, i.e. have a velocity with constant direction. Similarly, if you have a given initial and final velocity, then the fastest way to go between them with a fixed magnitude of acceleration is to have an acceleration with constant direction. This is an example of reasoning in "velocity space", which is useful for many problems.
The acceleration has magnitude $\mu g$, and the change in velocity has magnitude $\sqrt { 2 } v$. Thus, $t = \sqrt { 2 } v / \mu g$. Since the acceleration vector is constant, the trajectory is a parabola.
There are many other "optimal turning" problems. For a much tougher relative of this problem, see Physics Cup 2022, problem 2, and for an explanation of the general theory, see this paper.
[2] Problem 17 (PPP 5). Four snails travel with constant velocity on a plane. The velocities are chosen so that three snails never meet at once, and no two of the velocities are equal. Since time $t = - \infty$, five of the $\binom { 4 } { 2 }$ possible encounters have already occurred. Must the sixth also occur?
Solution. It's a bit tricky to visualize what's going on in the plane; instead think about what's going on in spacetime. The spacetime here is three-dimensional, and the paths of the snails are lines through it, called worldlines; two snails will encounter each other if their worldlines intersect. For some set of three of the snails, all three possible encounters occur; moreover, the problem states that they cannot all meet at once. Thus, their worldlines must lie on a plane in spacetime.
Now consider the fourth snail's worldline. If it doesn't lie in this plane, then it can only intersect at most one of the other three, because three snails never meet at once. We know at least five encounters occur, so this can't be the case. Thus, the fourth snail's worldline has to lie in the plane. Finally, since no two of the velocities are equal, this worldline isn't parallel to any of the other

three, so it has to intersect all three, giving six collisions. So if five collisions occur, under the given conditions, then a sixth must also occur.
[2] Problem 18. Six bugs are placed at the vertices of a regular hexagon with side length $s$. At time $t = 0$ each bug starts moving directly towards the next with speed $v$. At what time do they collide?

Solution. By symmetry, the bugs always remain in a hexagon shape, but this hexagon rotates and shrinks. We want to know the time when it collapses completely.

We can first do this by considering how the distance between adjacent bugs changes in an infinitesimal time $d t$. The first bug moves a distance $v d t$ towards the second. The second moves a distance $( \sqrt { 3 } / 2 ) v d t$ to the side, and a distance $( v / 2 ) d t$ directly away from the first. The side-to-side motion doesn't contribute to the change in distance (one can use the Pythagorean theorem and binomial theorem to show it is second order, and hence negligible for infinitesimals), so we ignore it. Then the rate of change of distance between the bugs is just $v - v / 2 = v / 2$, so the bugs meet at $t = 2 s / v$.

Another method is to note that all the bugs meet in the center of the original hexagon, so we can consider the component of velocity for each bug directed towards the center. This is always $v / 2$ by the hexagonal symmetry, and the original distance from the center is $s$, so the bugs again meet in time $t = 2 s / v$.

It's trivial to generalize this problem to a regular $n$-gon. For a trickier twist, see Physics Cup 2025, problem 2.
