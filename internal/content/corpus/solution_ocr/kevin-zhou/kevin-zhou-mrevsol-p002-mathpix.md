---
id: solution-ocr-kevin-zhou-mrevsol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-mrev-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 2 (FYKOS 34.1). We model a person's head as a sphere of radius $R$, and a beanie as a circular, massless rubber band of radius $r _ { 0 }$ and spring constant $k$, where $r _ { 0 } < R$. The coefficient of friction between the band and head is $\mu$. When is it possible for the person to put the beanie on with one hand?
![](../../../figures/solution-ocr/879e84404e840ed8ae5a9288.jpg)

That is, find the conditions for which it is possible to stretch the band so that it lies along the equator of the sphere, by applying forces only at one point at the band, as shown above. Assume for simplicity that the band is always planar.

Solution. This is secretly a statics problem. The problem with trying to put on a beanie this way is that it might slip back up your head, since it wants to contract. If the coefficient of friction is high enough, this slipping won't happen. And as long as slipping doesn't happen, it's possible to pull the beanie down, by just applying an infinitesimal force at some point with a downward component.

Consider the moment where the beanie is a circle with radius $r$. At each point along the beanie, there is a normal force $d N$ and a friction force $d f$. Balancing the net upward/outward force gives

$$
d f \sin \alpha = d N \cos \alpha , \quad \sin \alpha = \frac { r } { R }
$$

Assuming the friction is maximal, we require

$$
\mu \geq \cot \alpha .
$$

This is harder to satisfy the smaller $r$ is, so the toughest part is when we just start, and $r = r _ { 0 }$. By solving the relevant right triangle and rearranging, we have

$$
\mu \geq \sqrt { \left( R / r _ { 0 } \right) ^ { 2 } - 1 }
$$

or equivalently,

$$
r _ { 0 } \geq \frac { R } { \sqrt { 1 + \mu ^ { 2 } } } .
$$

The spring constant $k$ doesn't matter, as one could have seen by dimensional analysis.
[3] Problem 3. In M2, we considered many problems with ideal strings, which have a fixed length and can exert tension forces along themselves but no bending moment. The next simplest case is an elastic strip, such as a long, thin piece of plastic. An elastic strip is just like an ideal string, except that it also contains a bending moment (i.e. an internal torque) of $\tau$, related to its local radius of curvature $R$ by $\tau = \kappa / R$, for a constant $\kappa$.

Suppose the ends of an elastic strip of total length $L + \Delta x$ are connected by an ideal string of length $L$, where $\Delta x \ll L$, so that the strip bends away from the string near its middle. Find the tension $T$ in the string, and the maximal distance between the strip and the string.

Solution. Let's suppose the endpoints of the string are at $( 0,0 )$ and $( L , 0 )$, and let the strip's shape be $y ( x )$. Now consider torque balance on the part of the strip at $x < x _ { 0 }$. There are contributions from the tension from the string, the bending moment from the rest of the strip, and the tension from the rest of the strip. We don't care about the tension in the strip in this problem, so we eliminate that contribution by taking torques about $\left( x _ { 0 } , y \left( x _ { 0 } \right) \right)$, leading to the torque balance equation

$$
- T y \left( x _ { 0 } \right) = \tau \left( x _ { 0 } \right) = \frac { \kappa } { R \left( x _ { 0 } \right) } .
$$

Because $\Delta x \ll L$, the strip is only slightly bent, so we can approximate

$$
\left. \frac { 1 } { R \left( x _ { 0 } \right) } \approx \frac { d ^ { 2 } y } { d x ^ { 2 } } \right| _ { x = x _ { 0 } } .
$$


Since $x _ { 0 }$ was arbitrary, the shape of the strip obeys the differential equation

$$
\frac { d ^ { 2 } y } { d x ^ { 2 } } = - \frac { T } { \kappa } y
$$

and imposing the boundary condition $y ( 0 ) = 0$ gives

$$
y ( x ) = y _ { 0 } \sin \left( \sqrt { \frac { T } { \kappa } } x \right) .
$$

We need the strip to bend away and then back to the string, so $\pi = \sqrt { T / \kappa } L$, so that

$$
T = \frac { \pi ^ { 2 } \kappa } { L ^ { 2 } } .
$$

Now, to find the value of $y _ { 0 }$ we integrate the arc length of the strip,

$$
L + \Delta x = \int _ { 0 } ^ { L } \sqrt { 1 + ( d y / d x ) ^ { 2 } } d x \approx \int _ { 0 } ^ { L } \left( 1 + \frac { y _ { 0 } ^ { 2 } T } { 2 \kappa } \cos ^ { 2 } ( \sqrt { T / \kappa } x ) \right) d x
$$

where we used the binomial theorem. This yields $\Delta x = y _ { 0 } ^ { 2 } T L / 4 \kappa$, and solving for $y _ { 0 }$ gives

$$
y _ { 0 } = \frac { 2 } { \pi } \sqrt { L \Delta x } .
$$

If we hadn't had $\Delta x \ll L$, the problem would have been much harder, since the formula for the radius of curvature would have been more complicated. The solutions in the general case are called elastica. They can be very elaborate, with reversals in direction and even loops, which you can see from thin strips of paper or plastic. The history of the elastica is discussed here. The problem was first posed by Bernoulli in 1691, and conclusively solved by Euler in 1744.
[3] Problem 4 (MPPP 19). A small pearl moving in deep water experiences a viscous retarding force that is proportional to its speed, by Stokes' law. If a pearl is released from rest under the water, then it reaches a terminal velocity $v _ { 1 }$.

(a) Suppose the pearl is instead released horizontally with initial speed $v _ { 2 }$. Find the minimum speed of the pearl during the subsequent motion.
(b) If $v _ { 2 } < v _ { 1 }$, for what range of angles can the pearl be released, so that its speed monotonically increases?

Solution. (a) When the speed is at a minimum, $d \left( v ^ { 2 } \right) / d t = 0$, so $\mathbf { v } \cdot \mathbf { a } = 0$. The retarding force $- b v$ satisfies $b v _ { 1 } = m g$. Newton's laws in each dimension give

$$
m a _ { x } = - b v _ { x } \quad m a _ { y } = - b v _ { y } - m g
$$

Solving these equations by separating variables gives

$$
v _ { x } = v _ { 2 } e ^ { - b t / m } , \quad v _ { y } = - v _ { 1 } \left( 1 - e ^ { - b t / m } \right) .
$$

Differentiating, we have

$$
a _ { x } = - \frac { g v _ { 2 } } { v _ { 1 } } e ^ { - b t / m } , \quad a _ { y } = - g e ^ { - b t / m } .
$$


We want $v _ { x } a _ { x } + v _ { y } a _ { y } = 0$, and letting $\alpha = e ^ { - b t / m }$, this means,
$$
\frac { v _ { 2 } ^ { 2 } } { v _ { 1 } } \alpha ^ { 2 } = v _ { 1 } ( 1 - \alpha ) \alpha
$$
and solving gives
$$
\alpha = \frac { v _ { 1 } ^ { 2 } } { v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } } , \quad v = \sqrt { v _ { 2 } ^ { 2 } \alpha ^ { 2 } + v _ { 1 } ^ { 2 } ( 1 - \alpha ) ^ { 2 } } = \frac { v _ { 1 } v _ { 2 } } { \sqrt { v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } } } .
$$
(b) Note that in the previous part, $a _ { y } / a _ { x }$ is constant. Let the velocity vector start at $O$. The end of the velocity vector moves in a straight line since the direction of acceleration is constant (goes from $\mathbf { v } _ { 2 }$ to $- v _ { 1 } \hat { \mathbf { y } }$ ).
![](../../../figures/solution-ocr/ced6ebbf13eb7d0bdf2bc9e1.jpg)
At the limiting angle when the velocity monotonically increases, $v _ { 2 }$ will be the minimum velocity, so $\mathbf { v } _ { 2 }$ is perpendicular to the blue line. That means that the angle $\theta$ from the downward direction needs to satisfy
$$
| \theta | < \arccos \left( \frac { v _ { 2 } } { v _ { 1 } } \right) .
$$
[3] Problem 5 (PPP 42). A uniform rod of mass $m$ and length $\ell$ is supported horizontally at its ends by two fingers. As the fingers are slowly brought together, the rod alternates between sliding on each finger. The coefficients of friction are $\mu _ { k } < \mu _ { s }$.
    (a) Explain why the fingers meet under the center of mass of the rod. (Try it in real life!)
    (b) Find the total work done by the fingers during this process.

Solution. (a) Consider balancing torques about the center of mass of the rod. As a finger moves closer to the center, its lever arm decreases so the normal force increases. Eventually, the maximum possible friction force increases enough so that finger stops sliding, at which point the other finger starts sliding. (For a visual explanation, see this nice video!)

(b) Let $x _ { 1 }$ and $x _ { 2 }$ denote the distances from the center. Then $F _ { 1 } = \frac { m g x _ { 2 } } { x _ { 1 } + x _ { 2 } }$, and similarly for $F _ { 2 }$. During the motions, one finger is stationary while the other finger moving from $x _ { 1 } = a$ to $x _ { 1 } = b$ will do work
$$
W = \int _ { a } ^ { b } \frac { m g \mu _ { k } x _ { 2 } } { x _ { 1 } + x _ { 2 } } d x _ { 1 } = m g \mu _ { k } x _ { 2 } \log \left( \frac { x _ { 2 } + a } { x _ { 2 } + b } \right)
$$

Each finger does work until the ratio of the forces is $\mu _ { s } / \mu _ { k }$, and the ratio of the distances is $r = \mu _ { k } / \mu _ { s }$, at which point the finger switches. Then the total work is

$$
W = - \frac { 1 } { 2 } m g \mu _ { k } \ell \left( \log \left( \frac { 1 + r } { 2 } \right) + r \log \left( \frac { r + r ^ { 2 } } { 1 + r } \right) + r ^ { 2 } \log \left( \frac { r ^ { 2 } + r ^ { 3 } } { r + r ^ { 2 } } \right) + \ldots \right)
$$

which means

$$
- \frac { W } { \frac { 1 } { 2 } m g \mu _ { k } \ell } = \log \left( \frac { 1 + r } { 2 } \right) + r \log ( r ) + r ^ { 2 } \log ( r ) + r ^ { 3 } \log ( r ) + \ldots = \log \left( \frac { 1 + r } { 2 } \right) + \frac { r } { 1 - r } \log ( r ) .
$$

Plugging back in for $r$, we conclude

$$
W = \frac { 1 } { 2 } m g \mu _ { k } \ell \left( \log \left( \frac { 2 \mu _ { s } } { \mu _ { k } + \mu _ { s } } \right) + \frac { \mu _ { k } } { \mu _ { s } - \mu _ { k } } \log \left( \frac { \mu _ { s } } { \mu _ { k } } \right) \right) .
$$

This is a pretty complicated expression, so let's check it with limiting cases. Let $\mu _ { s } = \mu _ { k } ( 1 + \epsilon )$ where $\epsilon \ll 1$. The first logarithm term is $\mathcal { O } ( \epsilon )$, so

$$
W = \frac { 1 } { 2 } m g \mu _ { k } \ell \left( \frac { 1 } { \epsilon } \log ( 1 + \epsilon ) + \mathcal { O } ( \epsilon ) \right) = \frac { 1 } { 2 } m g \mu _ { k } \ell + \mathcal { O } ( \epsilon ) .
$$

This makes sense, because in this limit both fingers are sliding almost continuously, moving a distance $\ell / 2$ each against a friction force $\mu _ { k } m g / 2$.
