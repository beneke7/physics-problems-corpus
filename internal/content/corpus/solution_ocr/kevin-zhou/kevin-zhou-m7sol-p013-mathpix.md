---
id: solution-ocr-kevin-zhou-m7sol-p013
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-p013]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 13. A long log with square cross section and density $\rho _ { l }$ floats in water with density $\rho _ { w }$. If $\alpha = \rho _ { l } / \rho _ { w }$, then when $\alpha \ll 1$, the log will float stably with one of its sides parallel to the water.
    (a) As $\alpha$ is increased, show that once $\alpha > ( 3 - \sqrt { 3 } ) / 6$, this orientation becomes unstable. (Hint: to keep the calculations short, choose a good coordinate system and work to the lowest relevant order everywhere.)
    (b) How do you think the stable orientation of the log varies as $\alpha$ continues to increase? In particular, what it is when $\alpha = 1 / 2$, or when $\alpha \approx 1$ ?

Finding the stable orientation of the log for general values of $\alpha$ is quite complicated, but you can play with a nice simulation here; you can also use this to check your answer.

Solution. For simplicity, we'll set the side length of the log to 1.


(a) The task reduces to finding how the center of mass and center of buoyancy move after an infinitesimal rotation $d \theta$. For simplicity, we align the coordinate system with the log and place the origin at the center of mass $C _ { M }$.
![](../../../figures/solution-ocr/d12fdedccd77725dbe1dbf32.jpg)
The fraction of the $\log$ submerged is $\alpha$. To compute the coordinates of the center of buoyancy $C _ { B }$ we split it into two pieces as shown above. Then
$$
x _ { B } = \frac { 1 } { \alpha } \left( \frac { 1 } { 6 } \cdot \frac { d \theta } { 2 } + 0 \cdot \left( \alpha - \frac { d \theta } { 2 } \right) \right) = \frac { d \theta } { 12 \alpha }
$$
and
$$
y _ { B } = \frac { 1 } { 2 } - \frac { \alpha } { 2 } + \mathcal { O } ( d \theta ) .
$$
where $y$ is positive downward. For neutral stability, $\left( x _ { B } , y _ { B } \right)$ must lie on a vertical line from the center of mass, which implies $x _ { B } / y _ { B } = d \theta$, so
$$
\frac { 1 } { 12 \alpha } \left( \frac { 1 } { 2 } - \frac { \alpha } { 2 } \right) ^ { - 1 } = 1 .
$$
This is a quadratic equation with solution $\alpha = ( 3 - \sqrt { 3 } ) / 6$.

(b) Of course, there's always some stable equilibrium, corresponding to the orientation where the center of mass of the system is as low as possible. When $\alpha = 1 / 2$, it's fairly intuitive that the log stably sits at a 45° angle, with a corner facing directly down. And when $\alpha \approx 1$, the result is the same as in the low density case: the log sits with a side parallel to the water surface. However, it's much less intuitive for other values of the density. As you can see in the linked simulation, the equilibrium orientation can actually be at any angle, depending on the density!
This is a subtle and unintuitive result. In fact, an entire paper has been written on this problem, which you can see if you want more details.

## Remark

Some Olympiad questions involving oscillating fluids, which are more subtle. These questions are often impossible to solve exactly, because one must keep track of the entire motion of the water to know how much kinetic and potential energy are in play. In M4, you solved IPhO 1984, problem 2, which only asked for an order of magnitude estimate. Physics Cup 2018, problem 4 considers a $V$-shaped container, where the calculation can be done exactly.
[4] Problem 14. EuPhO 2022, problem 1. A nice fluid oscillations problem which can be solved nearly exactly without too much trouble.

Solution. See the official solutions as usual. It's interesting that here, the water's potential and kinetic energy get multiplied by the exact same factor, resulting in an oscillation period that doesn't depend on the cylinder's exact dimensions. For a generic container geometry, the two won't precisely match, but they will change the oscillation frequency by a comparable amount in opposite directions.

## Idea 4: Added Mass

When an object moves through water, it effectively has extra inertia because it forces water to move as well. This is the "added mass" $\Delta m$ (or "virtual mass"), mentioned in M4. For example, it turns out that in water of density $\rho$,

$$
\Delta m = \rho \times \begin{cases} ( 2 \pi / 3 ) R ^ { 3 } & \text { sphere of radius } R , \\ \pi R ^ { 2 } L & \text { cylinder of radius } R , \text { length } L \gg R , \text { moving perpendicular to axis, } \\ ( 8 / 3 ) R ^ { 3 } & \text { thin disc of radius } R , \text { moving along its axis of symmetry } . \end{cases}
$$

## Example 4

Derive the expression for the added mass of a sphere.

## Solution

Consider a spherical object of radius $a$ moving uniformly with speed $v _ { 0 }$ through water of density $\rho$. The object forces the water to move: the water ahead of it has to get out of the way, while the water behind it needs to fill the space it leaves behind. By the ideas of M4, the total kinetic energy of the water is $( \Delta m ) v _ { 0 } ^ { 2 } / 2$, where $\Delta m$ is the added mass.


It turns out the fluid's velocity field $\mathbf { v } ( \mathbf { r } )$ has to satisfy $\nabla \cdot \mathbf { v } = 0$, reflecting the incompressibility of water, and $\nabla \times \mathbf { v } = 0$, reflecting the absence of vorticity. It also has to go to zero far from the sphere, and have zero relative normal velocity at the sphere itself. These differential equations and boundary conditions yield a unique solution. The methods for finding the solution are standard, and typically taught in an undergraduate electromagnetism course, but since they're outside the Olympiad syllabus, I'll just display the answer. The velocity is

$$
\mathbf { v } ( \mathbf { r } ) = \frac { v _ { 0 } a ^ { 3 } } { 2 r ^ { 3 } } ( 2 \cos \theta \hat { \mathbf { r } } + \sin \theta \hat { \boldsymbol { \theta } } )
$$

in polar coordinates, where we placed the origin at the center of the sphere and aligned the ẑ axis with its direction of motion. If you've done E1, you might notice this is just like the electric dipole field; this coincidence isn't too surprising because that field satisfies the similar equations $\nabla \cdot \mathbf { E } = 0$ and $\nabla \times \mathbf { E } = 0$, which are quite restrictive.

Now, to derive the added mass, we just have to carry out the kinetic energy integral, which is easiest in spherical coordinates,

$$
\begin{aligned}
K & = \int \frac { \rho v ^ { 2 } } { 2 } d V \\
& = \frac { \rho v _ { 0 } ^ { 2 } a ^ { 6 } } { 8 } \int _ { a } ^ { \infty } \frac { r ^ { 2 } d r } { r ^ { 6 } } \int _ { 0 } ^ { 2 \pi } d \phi \int _ { 0 } ^ { \pi } ( \sin \theta d \theta ) \left( 4 \cos ^ { 2 } \theta + \sin ^ { 2 } \theta \right) \\
& = \frac { \rho v _ { 0 } ^ { 2 } a ^ { 6 } } { 8 } \left( \frac { 1 } { 3 a ^ { 3 } } \right) ( 2 \pi ) ( 4 )
\end{aligned}
$$

This yields a added mass of $( 2 \pi / 3 ) \rho a ^ { 3 } = \rho V / 2$, as stated above.

## Remark

We won't derive the added mass for other shapes, because it often requires advanced mathematical techniques, outside the Olympiad syllabus. (For this reason, IPhO 1995, problem 3, involving a partially submerged cylindrical buoy of mass $m$, simply asks you to assume a added mass $m / 3$.) If you're interested in this subject, this paper compiles many exact results, and this paper discusses the history and measurement of added mass. Furthermore, Physics Cup 2019, problem 1 and Physics Cup 2024, problem 1 introduce slick methods to calculate added mass for some special shapes.

## Example 5

What is the initial upward acceleration of a spherical air bubble in water?

## Solution

The upward buoyant force on the bubble is $\rho V g$, and the mass of the bubble is negligible, so if we didn't know about added mass, we would be tempted to conclude the acceleration is enormous. Instead, the buoyant force is used to move the added mass $\rho V / 2$ out of the way, so the upward acceleration is $2 g$.


Like most things in fluid dynamics, this isn't an exact result. The usual expression for the buoyant force assumes no motion at all, while the added mass derivation assumes uniform motion, neither of which are true for an accelerating bubble. For the result above to be accurate, the bubble has to be small, so that the pressure and flow fields have time to reach a quasi-steady state, but not too small, so that we can still ignore viscous forces.

## 3 Fluid Dynamics

Idea 5: Continuity
In steady flow, the quantity $\rho A v$ is constant along tubes of streamlines.

Idea 6: Bernoulli's Principle
For steady, nonviscous, incompressible flow, the quantity

$$
P + \frac { 1 } { 2 } \rho v ^ { 2 } + \rho g y
$$

is constant along streamlines. Another version of Bernoulli's principle, valid for compressible flow, is given in T3. As explained there, the incompressible result here is applicable for water flow, and for gas flow as long as the velocity is much less than the speed of sound.

You might be wondering how steady the flow has to be. Bernoulli's principle is derived by equating work done to kinetic energy, as water flows between two points on a streamline. So you can apply Bernoulli's principle between those two points if the flow is steady on the timescale that it takes fluid to move from one to the other.

Example 6: HRK
A tank is filled with water to a height $H$. A small hole is punched in one of the walls at a depth $h$ below the water surface as shown.
![](../../../figures/solution-ocr/94642cbe7c7fae8493b714b3.jpg)
Find the distance $x$ from the foot of the wall at which the stream strikes the floor.


Solution
The flow isn't perfectly steady, but it's close enough since the hole is small. We thus apply Bernoulli's principle along a streamline, where one point is at the water's top surface, and the other point is just outside the hole. Both points are at atmospheric pressure, because they are directly exposed to the atmosphere. Since the hole is small compared to the tank, the velocity at the first point is small by continuity, so we neglect it, giving

$$
\frac { 1 } { 2 } \rho v ^ { 2 } = \rho g h
$$

which implies Torricelli's law,

$$
v = \sqrt { 2 g h } .
$$

The time $t$ to fall is $t = \sqrt { 2 ( H - h ) / g }$, so

$$
x = v t = 2 \sqrt { h ( H - h ) }
$$

which incidentally is maximized at $h = H / 2$.
Incidentally, Bernoulli himself was aware that the answer was different for a large hole, and treated the general case in his 1738 book, Hydrodynamica. The method is to apply energy conservation to all of the water at once (i.e. equating the rate of decrease of gravitational potential energy to the rate of increase of total kinetic energy), rather than attempt to apply it along streamlines. You can see this general analysis here.

Example 7
Why should you close your barn door during a storm?

Solution
The wind can flow into the barn, at which point it stops. By Bernoulli's principle, this increases its pressure by $\rho v ^ { 2 } / 2$. This creates a net upward force on the roof, which can tear it off the barn.

By the way, even if you do close the barn door, there's a second effect that can still cause a problem: the wind outside has to flow faster along the top to get around it, which decreases its pressure, again creating a net upward force on the roof. This lift effect is very common in real life. You probably already know it's responsible for the lift on an airplane wing. But it also caused my childhood trampoline to achieve liftoff during Hurricane Sandy, destroying a backyard fence. And plumbers rely on it to make sewer pipes "self-clean", by picking up anything stuck to the bottom.

Incidentally, this example brings up a little puzzle about Bernoulli's principle. We argued that the air slows down when it enters the barn, so the pressure goes up. But in the reference frame moving with the wind, the air speeds up when it enters the barn - so shouldn't its pressure go down? The issue with this reasoning is two-fold. First, in the wind's frame, the


barn is moving, so the flow isn't steady and Bernoulli's principle doesn't apply. Second, even if the barn were moving slowly, so that the flow were almost steady, the barn's motion would still be doing work on the air, and this changes Bernoulli's principle because it is ultimately a restatement of energy conservation. So in either case, the reasoning fails. When obstacles are present, Bernoulli's principle should always be invoked in the frame of the obstacles.
