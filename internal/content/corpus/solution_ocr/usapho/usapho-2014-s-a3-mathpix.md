---
id: solution-ocr-usapho-2014-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2014-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A3
When studying problems in special relativity it is often the invariant distance $\Delta s$ between two events that is most important, where $\Delta s$ is defined by

$$
( \Delta s ) ^ { 2 } = ( c \Delta t ) ^ { 2 } - \left[ ( \Delta x ) ^ { 2 } + ( \Delta y ) ^ { 2 } + ( \Delta z ) ^ { 2 } \right]
$$

where $c = 3 \times 10 ^ { 8 } \mathrm {~m} / \mathrm { s }$ is the speed of light. ${ } ^ { 1 }$

a. Consider the motion of a projectile launched with initial speed $v _ { 0 }$ at angle of $\theta _ { 0 }$ above the horizontal. Assume that $g$, the acceleration of free fall, is constant for the motion of the projectile.
    i. Derive an expression for the invariant distance of the projectile as a function of time $t$ as measured from the launch, assuming that it is launched at $t = 0$. Express your answer as a function of any or all of $\theta _ { 0 } , v _ { 0 } , c , g$, and $t$.

Solution
Let the particle start at the origin. Then its path satisfies

$$
x = v _ { 0 } t \cos \theta _ { 0 } , \quad z = v _ { 0 } t \sin \theta _ { 0 } - \frac { 1 } { 2 } g t ^ { 2 }
$$

by ordinary kinematics. Then

$$
s ^ { 2 } = ( c t ) ^ { 2 } - \left( v _ { 0 } t \cos \theta _ { 0 } \right) ^ { 2 } - \left( v _ { 0 } t \sin \theta _ { 0 } - \frac { 1 } { 2 } g t ^ { 2 } \right) ^ { 2 }
$$

which can be simplified to

$$
s ^ { 2 } = \left( c ^ { 2 } - v _ { 0 } ^ { 2 } \right) t ^ { 2 } + \frac { 1 } { 2 } g v _ { 0 } \sin \theta _ { 0 } t ^ { 3 } - \frac { 1 } { 4 } g ^ { 2 } t ^ { 4 } .
$$

ii. The radius of curvature of an object's trajectory can be estimated by assuming that the trajectory is part of a circle, determining the distance between the end points, and measuring the maximum height above the straight line that connects the endpoints. Assuming that we mean "invariant distance" as defined above, find the radius of curvature of the projectile's trajectory as a function of any or all of $\theta _ { 0 } , v _ { 0 } , c$, and $g$. Assume that the projectile lands at the same level from which it was launched, and assume that the motion is not relativistic, so $v _ { 0 } \ll c$, and you can neglect terms with $v / c$ compared to terms without.

Solution
Plugging in

$$
t _ { f } = \frac { 2 v _ { 0 } \sin \theta } { g }
$$

[^0]
the invariant distance between the endpoints is approximately
$$
s ^ { 2 } \approx \left( c t _ { f } \right) ^ { 2 } \Rightarrow s \approx 2 c \frac { v _ { 0 } \sin \theta } { g } .
$$
The maximum height above the ground is
$$
z _ { \max } = \frac { \left( v _ { 0 } \sin \theta \right) ^ { 2 } } { 2 g } .
$$
Suppose this path subtends an angle $\theta$ of a circle of radius $R$ in spacetime. Then
$$
s \approx R \theta , \quad z _ { \max } \approx R \left( 1 - \cos \frac { \theta } { 2 } \right) \approx \frac { R \theta ^ { 2 } } { 8 }
$$
and eliminating $\theta$ yields
$$
R \approx \frac { 1 } { 8 } \frac { s ^ { 2 } } { z _ { \max } } = \frac { c ^ { 2 } } { g }
$$
Indeed, if we solved the problem exactly in relativity, we would find that the path of the projectile is a hyperbola in spacetime with semimajor axis $c ^ { 2 } / g$. Here we just computed the radius of curvature near the vertex.
b. A rocket ship far from any gravitational mass is accelerating in the positive $x$ direction at a constant rate $g$, as measured by someone inside the ship. Spaceman Fred at the right end of the rocket aims a laser pointer toward an alien at the left end of the rocket. The two are separated by a distance $d$ such that $d g \ll c ^ { 2 }$; you can safely ignore terms of the form $\left( d g / c ^ { 2 } \right) ^ { 2 }$.
    i. Sketch a graph of the motion of both Fred and the alien on the space-time diagram provided in the answer sheet. The graph is not meant to be drawn to scale. Note that $t$ and $x$ are reversed from a traditional graph. Assume that the rocket has velocity $v = 0$ at time $t = 0$ and is located at position $x = 0$. Clearly indicate any asymptotes, and the slopes of these asymptotes.

## Solution

Since the rocket is constantly accelerating but cannot exceed the speed of light, the curves must asymptote with a slope of one; in an exact analysis we would find they are hyperbolas. However, there is a slight challenge to consider: do Fred and the alien approach the same asymptote, or two different asymptotes?
Since the rocket ship is solid, it maintains the same proper length. Since moving objects are length contracted, it must length contract in our diagram, approaching a length of zero. Indeed, if there were no length contraction, then in the instantaneous rest frame of the ship, the ship would be getting longer and longer, eventually breaking apart.


![](../../../figures/solution-ocr/330b635786a93d7af72c87e1.jpg)

ii. If the frequency of the laser pointer as measured by Fred is $f _ { 1 }$, determine the frequency of the laser pointer as observed by the alien. It is reasonable to assume that $f _ { 1 } \gg c / d$.

## Solution

To solve this problem, we replace the light with a series of discrete flashes, then find how the frequencies of these flashes are seen by Fred and the alien. Let Fred emit a flash of light at time $t = 0$ and a second flash of light at time $t = \tau$, where $\tau$ is very small. Let


the alien see the flashes at times $t _ { 1 }$ and $t _ { 2 }$. Then by ordinary kinematics,

$$
c t _ { 1 } = d - \frac { 1 } { 2 } g t _ { 1 } ^ { 2 } , \quad c \left( t _ { 2 } - \tau \right) = \frac { 1 } { 2 } g \tau ^ { 2 } + d - \frac { 1 } { 2 } g t _ { 2 } ^ { 2 } .
$$

Note that we are ignoring time dilation effects because they are second order in the velocity, and hence second order in $g$.
Now subtracting these equations, we have

$$
c \left( t _ { 2 } - t _ { 1 } - \tau \right) = \frac { g } { 2 } \left( \tau ^ { 2 } + t _ { 1 } ^ { 2 } - t _ { 2 } ^ { 2 } \right) .
$$

Defining $\Delta t = t _ { 2 } - t _ { 1 }$ and simplifying, we have

$$
\Delta t \left( 1 + \frac { g } { 2 c } \left( t _ { 1 } + t _ { 2 } \right) \right) = \tau \left( 1 + \frac { g \tau } { 2 c } \right) \approx \tau
$$

since $\tau$ is extremely small, so

$$
\frac { \tau } { \Delta t } = 1 + \frac { g } { 2 c } \left( t _ { 1 } + t _ { 2 } \right) .
$$

Since we are working to first order in $g$, we may use $t _ { 1 } \approx t _ { 2 } \approx h / c$ on the right-hand side, so

$$
\frac { f _ { \text {Alien } } } { f _ { \text {Fred } } } = \frac { \tau } { \Delta t } \approx 1 + \frac { g h } { c ^ { 2 } } .
$$

By the equivalence principle, this is a derivation of gravitational redshift.
The problem can also be solved by thinking in terms of the ordinary Doppler effect. Consider Fred's frame at time $t = 0$. In this frame, the alien is also stationary. The light takes a time $h / c$ to reach the alien; at this point the alien has picked up a velocity of $g h / c$. Then using the ordinary Doppler shift formula gives a frequency shift of $1 + g h / c ^ { 2 }$ as seen above. This is valid, as all the effects we implicitly ignored were higher order in $g$, but it harder to see this.
