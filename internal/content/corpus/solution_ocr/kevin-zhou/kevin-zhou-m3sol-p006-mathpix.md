---
id: solution-ocr-kevin-zhou-m3sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m3-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 6. Some qualitative questions about momentum.

(a) A box containing a vacuum is placed on a frictionless surface. The box is punctured on its right side. How does it move immediately afterward?
(b) You are riding forward on a sled across frictionless ice. Snow falls vertically (in the frame of the ice) on the sled. Which of the following makes the sled go the fastest or the slowest?
    1. You sweep the snow off the sled, directly to the left and right in your frame.
    2. You sweep the snow off the sled, directly to the left and right in the ice frame.
    3. You do nothing.
(c) An hourglass is made by dividing a cylinder into two identical halves, separated by a small orifice. Initially, the top half is full of sand and the bottom half is empty. The hourglass is placed on a scale, and then the orifice is opened. The total weight of the hourglass and sand is $W$. How does the scale reading compare to $W$ shortly after the sand starts falling, shortly after it finishing falling, and in between? (For concreteness, assume the surfaces of the sand in the top and bottom halves are always horizontal, and that the sand passes through the orifice at a constant rate.)

Solution. (a) Consider the system of the air plus the box. The air flows to the left, so to keep momentum conserved, the box moves to the right.

(b) It's easiest to think about this using conservation of momentum in the ice frame. Case (2) is clearly the fastest, as the snow steals none of the sled's horizontal momentum.
To decide between (1) and (3), note that in case (3), the snow always has the same speed as the sled. In case (1), the snow that fell and got swept up earlier has a higher speed than the sled, because the sled is constantly slowing down. So in case (1), the snow gets more of the horizontal momentum, so (1) is the slowest and (3) is in the middle.
(c) Right before the sand starts falling, and right after it finishes falling, the center of mass is stationary; however, it moves down while the sand is falling. Thus, the center of mass accelerates downward at the beginning, and accelerates upward at the end. So the scale reading is lower than $W$ right at the beginning, and higher than $W$ right at the end. You can see an experimental confirmation of these results here.
This can also be understood directly in terms of forces. Right after the sand starts falling, there's a column of sand that has not yet hit the bottom; the scale reading dips lower because it doesn't have to support this falling sand. And when the last bit of sand arrives, the scale reading jumps higher because the hourglass simultaneously has to support all of the sand, and absorb the impact from the falling sand; this is the effect derived in problem 5.

What about the scale reading in between these two times? Under the simplifying assumptions made in this problem, the downward velocity of the sand's center of mass is continuously decreasing (because the height difference between the tops of the sand in the two halves is decreasing), so the weight is more than $W$. But the difference is extremely small, since this acceleration is spread over the entire time sand is falling.
[3] Problem 7. USAPhO 2018, problem A1.
[3] Problem 8 (Kalda). A block is on a ramp with angle $\alpha$ and coefficient of friction $\mu > \tan \alpha$. The ramp is rapidly driven back and forth so that its velocity vector $\mathbf { u }$ is parallel to both the slope and the horizontal and has constant modulus $v$.
![](../../../figures/solution-ocr/530a4384bb1f8d8fbb8a8bd7.jpg)
The direction of u reverses abruptly after each time interval $\tau$, where $g \tau \ll v$. Find the average velocity $\mathbf { w }$ of the block. (Hint: as mentioned in M1, it's best to work in the frame of the ramp, because it causes the friction, even though this introduces fictitious forces.)

Solution. Work in the frame of the ramp and orient the $x$ axis along $\mathbf { u }$ and the $y$ axis along the ramp. At all times, the acceleration due to friction is $\mu g \cos \alpha$ and the acceleration due to gravity is $g \sin \alpha$. Every time period $\tau$, an impulsive fictitious force changes $w _ { x }$ by $\pm 2 v$. Since $g \tau \ll v$, the total acceleration during the time period $\tau$ due to the friction and gravitational forces is negligible compared to this change. Assuming for now that $w _ { x }$ is symmetric so that $\bar { w } _ { x } = 0$, this means $\left| w _ { x } \right| \approx u$ at all times.

Now consider $w _ { y }$. In the steady state, the acceleration due to friction must be balanced by the acceleration due to gravity, so

$$
\frac { \bar { w } _ { y } } { \sqrt { \bar { w } _ { y } ^ { 2 } + u ^ { 2 } } } \mu g \cos \alpha = g \sin \alpha
$$

which yields the answer,

$$
\overline { \mathbf { w } } = \bar { w } _ { y } \hat { \mathbf { y } } , \quad \bar { w } _ { y } = \frac { u } { \sqrt { \mu ^ { 2 } \cot ^ { 2 } \alpha - 1 } } .
$$

Note that this diverges when $\mu = \tan \alpha$, because at that point the friction is not strong enough to prevent the block from accelerating down the ramp indefinitely. For $\mu > \tan \alpha$, we reach a steady state where only a portion of the friction is directed vertically, due to the horizontal speed, and that portion balances gravity.

This also allows us to argue that $\bar { w } _ { x } = 0$. If $\bar { w } _ { x }$ is not zero, $\left| w _ { x } \right|$ will be higher during one of the two halves of the cycle. But during that half, a greater share of the frictional acceleration will be directed against the $w _ { x }$ motion, tending to move $\bar { w } _ { x }$ to zero.

This seemingly weird problem actually has real-world applications! The point here is that you can make a block slide down a ramp even if friction would prevent it from doing so, and moreover make it slide at a controlled speed. This technique is used in factories, in the form of vibratory conveyors. In fact, a more complex vibration pattern can even make something slide up a ramp!


[4] Problem 9 (Morin 5.21). A sheet of mass $M$ moves with speed $V$ through a region of space that contains particles of mass $m$ and speed $v$. There are $n$ of these particles per unit volume. The sheet moves in the direction of its normal. Assume $m \ll M$, and assume that the particles do not interact with each other.
    (a) If $v \ll V$, what is the drag force per unit area on the sheet?
    (b) If $v \gg V$, what is the drag force per unit area on the sheet? Assume for simplicity that the component of every particle's velocity in the direction of the sheet's motion is exactly $\pm v / 2$.
    (c) Now suppose a cylinder of mass $M$, radius $R$, and length $L$ moves through the same region of space with speed $V$, and assume $v = 0$ and $m \ll M$. The cylinder moves in a direction perpendicular to its axis. What is the drag force on the cylinder?

Parts (a) and (b) are a toy model for the two regimes of drag, mentioned in M1. However, it shouldn't be taken too seriously, because as we'll see in M7, the typical velocity that separates the two types of behavior doesn't have to be of order $v$. Instead, it depends on how strongly the particles interact with each other.

Solution. (a) We can set $v = 0$. In time $t$, an area $A$ hits $n A V t$ particles, and the total change in momentum of these particles is $( n A V t ) m ( 2 V )$, so the pressure is $2 n m V ^ { 2 }$.


(b) Let's say the sheet is moving to the right. In the frame of the sheet, the particles are moving at velocity $V \pm v / 2$. The particles hitting the sheet from the right will have velocity $v / 2 + V$, and from the left $v / 2 - V$. From the right in time $d t$, there will be $\frac { 1 } { 2 } n A ( v / 2 + V ) d t$ particles hitting the sheet (with the $\frac { 1 } { 2 }$ coming from other particles moving away from the sheet), each with impulse $2 m ( v / 2 + V )$. Thus the pressure will be $n m ( v / 2 + V ) ^ { 2 }$ from the right, and replacing $V$ with $- V$ gives a pressure of $n m ( v / 2 - V ) ^ { 2 }$ from the left. Thus the total pressure on the sheet is $2 n m V v$.
(c) Work in cylindrical coordinates, with $\theta = 0$ along the direction of the cylinder's motion. For a segment $d \theta$, we have
$$
\frac { \text { collisions } } { \text { time } } = \frac { \text { particles volume swept out } } { \text { volume } } = n V L R \cos \theta d \theta
$$
where $L$ is the length of the cylinder. To calculate the rebound velocity, it's best to work in the frame of the cylinder. In this case, the particles come in with vertical velocity $- V$, and then bounce off elastically, ending up with vertical velocity $V \cos 2 \theta$. So the impulse per collision is $m V ( 1 + \cos 2 \theta )$. The drag force is
$$
F = \int _ { - \pi / 2 } ^ { \pi / 2 } m V ( 1 + \cos 2 \theta ) n V L R \cos \theta d \theta = n m V ^ { 2 } L R \int _ { - \pi / 2 } ^ { \pi / 2 } ( 1 + \cos 2 \theta ) \cos \theta d \theta
$$
The integral can be done straightforwardly using either the cosine double angle identity, or decomposing into complex exponentials, yielding 8/3, so
$$
F = \left( 2 n m V ^ { 2 } \right) ( L R ) \left( \frac { 4 } { 3 } \right)
$$
Compare this to the answer to part (a). The force is quadratic in $V$ for the same reason, but now the area is replaced by an effective area $( 4 / 3 ) L R$. This is slightly less than the actual area $2 L R$, since the surface is curved, and hence more aerodynamic.

You can also get a more "realistic" result by averaging over a Maxwell-Boltzmann distribution for the molecular speeds, as introduced in T1. But this is a lot more work, and the simpler calculation done in this problem gives all the essential insight.

## 3 Energy

Idea 3
The work done on a point particle is

$$
W = \int \mathbf { F } \cdot d \mathbf { x }
$$

and is equal to the change in kinetic energy, as you showed in P1.

Remark: Dot Products
The dot product of two vectors is defined in components as

$$
\mathbf { v } \cdot \mathbf { w } = v _ { x } w _ { x } + v _ { y } w _ { y } + v _ { z } w _ { z }
$$

and is equal to $| \mathbf { v } | | \mathbf { w } | \cos \theta$ where $\theta$ is the angle between them. For example, if $\mathbf { A }$ and $\mathbf { B }$ are the sides of a triangle, the other side is $\mathbf { C } = \mathbf { A } - \mathbf { B }$, and

$$
C ^ { 2 } = | \mathbf { A } - \mathbf { B } | ^ { 2 } = ( \mathbf { A } - \mathbf { B } ) \cdot ( \mathbf { A } - \mathbf { B } ) = A ^ { 2 } + B ^ { 2 } - 2 A B \cos \theta
$$

which proves the law of cosines. (Or, if you accept the law of cosines, you could regard this as a proof that the dot product depends on $\cos \theta$ as claimed.)

Like the ordinary product, the dot product obeys the product rule. For example,

$$
\frac { d } { d t } ( \mathbf { v } \cdot \mathbf { w } ) = \dot { \mathbf { v } } \cdot \mathbf { w } + \mathbf { v } \cdot \dot { \mathbf { w } }
$$

Using this, it's easy to generalize the derivation of the work-kinetic energy theorem in P1 to three dimensions; we have

$$
\frac { 1 } { 2 } d \left( v ^ { 2 } \right) = \frac { 1 } { 2 } d ( \mathbf { v } \cdot \mathbf { v } ) = \mathbf { v } \cdot d \mathbf { v } = \frac { d \mathbf { x } } { d t } \cdot d \mathbf { v } = \frac { d \mathbf { v } } { d t } \cdot d \mathbf { x } = \mathbf { a } \cdot d \mathbf { x }
$$

and this is equivalent to the desired theorem. As you can see, it's all basically the same, since the product and chain rule manipulations work the same way for vectors and scalars.

Example 4: IPhO 1996 1(b)
A skier starts from rest at point A and slowly slides down a hill with coefficient of friction $\mu$, without turning or braking, and stops at point B. At this point, his horizontal displacement is $s$. What is the height difference $h$ between points A and B ?


Solution
Since the skier begins and ends at rest, the change in height is the total energy lost to friction,

$$
m g h = \int f _ { \text {fric } } d s
$$

where the integral over $d s$ goes over the skier's path. Since the skier is always moving slowly, the normal force is approximately $m g \cos \theta$. (More generally, there would be another contribution to provide the centripetal acceleration.) But then

$$
\int f _ { \text {fric } } d s = \int \mu m g \cos \theta d s = \int \mu m g d x = \mu m g s
$$

which gives an answer of $h = \mu s$. (If the skier's path turned around, then this would still hold as long as $s$ denotes the total horizontal distance traveled.)

[2] Problem 10 (MPPP 16). On a windless day, a cyclist going "flat out" can ride uphill at a speed of $v _ { 1 } = 12 \mathrm {~km} / \mathrm { h }$ and downhill at $v _ { 2 } = 36 \mathrm {~km} / \mathrm { h }$ on the same inclined road. We wish to find the cyclist's top speed on a flat road if their maximal effort is independent of the speed at which the bike is traveling. Note that in this regime, the air drag force is quadratic in the speed.
    (a) Solve the problem assuming that "maximal effort" refers to the force exerted on the pedals by the rider, and that the rider never changes gears.
    (b) Solve the problem assuming that "maximal effort" refers to the rider's power.

Solution. (a) Let $F _ { 0 }$ be the force due to gravity along the hill and let $k v ^ { 2 }$ be the drag force. If the rider exerts force $F ^ { \prime }$ on the pedals, then the wheels exert a force $F$ on the ground, but the ratio $F / F ^ { \prime }$ is constant if there are no gear switches. Then

$$
F - F _ { 0 } = k v _ { 1 } ^ { 2 } , \quad F + F _ { 0 } = k v _ { 2 } ^ { 2 } , \quad F = k v _ { 3 } ^ { 2 }
$$

where $v _ { 3 }$ is the answer. Combining these equations gives

$$
v _ { 3 } = \sqrt { \frac { v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } } { 2 } } = 27 \mathrm {~km} / \mathrm { h } .
$$


(b) In this case, the equations are a bit nastier,
$$
P / v _ { 1 } - F _ { 0 } = k v _ { 1 } ^ { 2 } , \quad P / v _ { 2 } + F _ { 0 } = k v _ { 2 } ^ { 2 } , \quad P / v _ { 3 } = k v _ { 3 } ^ { 2 } .
$$
Some tedious but straightforward algebra gives
$$
v _ { 3 } = \sqrt [ 3 ] { \frac { v _ { 1 } v _ { 2 } \left( v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } \right) } { v _ { 1 } + v _ { 2 } } } = 23.5 \mathrm {~km} / \mathrm { h } .
$$
[3] Problem 11. USAPhO 2016, problem B1.
