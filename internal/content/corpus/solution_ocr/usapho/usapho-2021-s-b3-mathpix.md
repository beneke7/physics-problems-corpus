---
id: solution-ocr-usapho-2021-s-b3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2021-b3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B3

## The Mad Hatter

A frictionless hemisphere of radius $R$ is fixed on top of a flat cylinder. One end of a spring with zero relaxed length and spring constant $k$ (i.e. the force from the spring when stretched to length $\ell$ is $- k \ell$ ) is fixed to the top of the hemisphere. Its other end is attached to a point mass of mass $m$.
![](../../../figures/solution-ocr/8371235c467f85448e6b8e8a.jpg)

a.The number and nature of the equilibrium points on the hemisphere depends on the value of the spring constant $k$. Consider the semicircular arc shown above as a dashed line, which is parameterized by angles in the range $- \pi / 2 \leq \theta \leq \pi / 2$. Make a table indicating the number of equilibrium points on the arc, and the number that are stable, for each range of $k$ values. A blank table for your reference is given below. (You may need more or fewer rows than shown.)

| Range of $k \left( k _ { \text {min } } < k < k _ { \text {max } } \right)$ | \# of Equilibria | \# of Stable Equilibria |
| :--- | :--- | :--- |
| $0 < k <$ ? |  |  |
|  |  |  |
|  |  |  |
| $? < k < \infty$ |  |  |

## Solution

The spring force attracts the mass toward the top of the hemisphere, whereas the gravitational force tends to pull it away.
For very small $k$, the spring force is negligible compared to the gravitational force for $| \theta | < \pi / 2$. For these $k$ values, we only have one unstable equilibrium at the top of the hemisphere due to the gravitational force being zero there.

For some large enough value of $k$, the spring force at $\pi / 2$ exactly compensates for the gravitational force - this marks the end of the first regime. In this next regime, we still have an unstable equilibrium at the top of the hemisphere - because the spring force only compensates for the gravitational force for larger $\theta$. Additionally, we have two equilibria at $0 < \left| \theta ^ { \star } \right| < \pi / 2$. These equilibria must be stable because for $\theta < \theta ^ { \star }$, the gravitational force is stronger than the spring force and forces the mass toward $\theta ^ { \star }$, whereas the opposite holds for $\theta > \theta ^ { \star }$, and the mass is again forced toward $\theta ^ { \star }$. Thus, we have three total equilibria (two stable, one unstable).
Finally, for sufficiently large $k$ the spring force is stronger than the gravitational force even for arbitrarily small $\theta$, and so we have just one stable equilibrium point at the top of the hemisphere in this third regime.
We now compute the two critical points for us to fill out the table. The first critical point


is given by the balancing of the two forces at $\theta = \pi / 2$, so we compute

$$
m g \sin \pi / 2 = k _ { 1 } R ( \pi / 2 ) \Longrightarrow k _ { 1 } = \frac { 2 m g } { \pi R } .
$$

The second critical point is given by the balancing of the two forces for $\theta \ll 1$, so we compute

$$
m g \sin \theta \approx m g \theta = k _ { 2 } R \theta \Longrightarrow k _ { 2 } = m g / R .
$$

We thus get the following table:

| Range of $k$ values ( $k _ { \text {min } } < k < k _ { \text {max } }$ ) | \# of Equilibria | \# of Stable Equilibria |
| :--- | :--- | :--- |
| $0 < k < 2 m g / ( \pi R )$ | 1 | 0 |
| $2 m g / ( \pi R ) < k < m g / R$ | 3 | 2 |
| $m g / R < k < \infty$ | 1 | 1 |

Notice that the system is symmetric under flipping $\theta \rightarrow - \theta$. Thus, one could incorrectly guess that the only possible equilibrium point is $\theta = 0$ by symmetry. In fact, when $k$ is in the right range, we get a pair of new equilibrium points at opposite $\theta$, which map to each other under symmetry. This kind of situation, where the overall setup is still symmetric but the individual equilibrium points are not, is called spontaneous symmetry breaking.

For the rest of the problem, suppose the value of $k$ is such that the mass begins at stable equilibrium on the surface of the hemisphere at angle $\theta _ { 0 }$. The mass can move on the two-dimensional surface of the hemisphere, but a radially-inward external force prevents it from jumping off the surface.

b. At $t = 0$, the mass is given a speed $v$ along a line of constant latitude $\theta = \theta _ { 0 }$.
![](../../../figures/solution-ocr/f111d8ef6e9e433eb83e7083.jpg)
    i. Indicate which of the following trajectories the mass takes for a short time after $t = 0$ and briefly explain your reasoning. The differences between the paths are exaggerated.
![](../../../figures/solution-ocr/2b2d38b3d5f10c79ca62b5e1.jpg)


## Solution

The correct path is option $C$. Several explanations would work here. Here are two.


- If we go to the rotating frame of reference, there is an outward centrifugal force that the mass experiences, pushing it down the sphere.
- For the mass to go in a circle around the sphere, the spring force not only has to compensate for the gravitational force but also must provide centripetal acceleration. Therefore, the spring must get longer.
ii. What is the total radial force (i.e., normal to the surface of the hemisphere) on the mass at $t = 0$ ? Express your answer in terms of $m , v , R , g$, and $\theta _ { 0 }$.

## Solution

We draw a free-body diagram. It is helpful to draw the diagram in the noninertial reference frame that revolves around the central axis of the hemisphere with speed $v$ at the location of the mass.
![](../../../figures/solution-ocr/43ae68fee2c6bcfedd4e6a83.jpg)
Here, $F _ { c } = \frac { m v ^ { 2 } } { R \sin \theta _ { 0 } }$ is the centrifugal force, and $F _ { r }$ is the radial force from the hemisphere. The forces in the radial direction must balance for the mass to be constrained to the surface of the sphere. Thus,

$$
F _ { r } + F _ { c } ^ { \perp } = m g \cos \theta _ { 0 } .
$$

The perpendicular part of the centrifugal force is $F _ { c } \sin \theta _ { 0 }$. so we get

$$
F _ { r } = m g \cos \theta _ { 0 } - \frac { m v ^ { 2 } } { R } .
$$

Incidentally, there's a simple way to understand why the second term has to be exactly $m v ^ { 2 } / R$. Consider decomposing the total force on the mass into radial and tangential parts. The radial part simply keeps the mass on the hemisphere; in the absence of a tangential force, the mass would travel in a great circle of radius $R$. Adding a tangential force deflects the mass away from this great circle trajectory, but doesn't change the radial force required, so the net radial force always has to be $m v ^ { 2 } / R$ inward.
Note: The phrase "total radial force" could also validly be interpreted as the net radial force. Thus, we accepted both $m g \cos \theta _ { 0 } - m v ^ { 2 } / R$ and $- m v ^ { 2 } / R$.

c. A cylinder of radius $r \ll R \theta _ { 0 }$ is placed on top of the sphere. Suppose the mass is launched at an angle $\alpha$ away from the direction of the spring's displacement with kinetic energy $K$, as shown.

Copyright ©2021 American Association of Physics Teachers


What is the maximum angle $\alpha _ { \text {max } }$ at which the mass can be launched such that it can still hit the cylinder? Express your answer in terms of $K , m , g , \theta _ { 0 } , r$, and $R$. You may assume $K$ is large enough for the mass to reach the cylinder for $\alpha = 0$.

![](../../../figures/solution-ocr/03e907429e0e2be141367395.jpg)
(view from above)

## Solution

The initial energy of the system is given by

$$
m g R \cos \theta _ { 0 } + \frac { 1 } { 2 } k R ^ { 2 } \theta _ { 0 } ^ { 2 } + K .
$$

Suppose the mass is launched with speed $v$. Then, the speed in the $\theta$ direction is $v \cos \alpha$ and the speed in the $\phi$ direction is $v \sin \alpha$, and therefore, the $z$-component of the angular momentum of the mass is

$$
L = m v \sin \alpha ( R \sin \theta ) .
$$

We now compute the distance of closest approach. If the distance of closest approach is equal to $r$ (as it does for $\alpha _ { \text {max } }$, then at $r$, the motion of the mass has no inward component, and the speed of the object at $r$ is given by conservation of angular momentum:

$$
m u r = m v \sin \alpha ( R \sin \theta ) \Longrightarrow u = \frac { v \sin \alpha ( R \sin \theta ) } { r } \text {. }
$$

Because $r \ll R$, at the point of closest approach, the energy of the system is roughly

$$
m g R + \frac { 1 } { 2 } m u ^ { 2 } \approx m g R + \frac { 1 } { 2 } \frac { m v ^ { 2 } \sin ^ { 2 } \alpha R ^ { 2 } \sin ^ { 2 } \theta } { r ^ { 2 } } \approx m g R + K \left( \frac { \alpha ^ { 2 } R ^ { 2 } \sin ^ { 2 } \theta } { r ^ { 2 } } \right) .
$$

Equating with the initial energy gives us

$$
m g R \cos \theta _ { 0 } + \frac { 1 } { 2 } k R ^ { 2 } \theta _ { 0 } ^ { 2 } + K = m g R + K \left( \frac { \alpha ^ { 2 } R ^ { 2 } \sin ^ { 2 } \theta } { r ^ { 2 } } \right) .
$$

Before finishing the calculation, we now compute the required $k$ for the object to be at equilibrium (since our answer cannot contain $k$ ). Setting $k R \theta _ { 0 } = m g \sin \theta _ { 0 }$ gives us $k =$


$\frac { m g \sin \theta _ { 0 } } { R \theta _ { 0 } }$. Then,

$$
m g R \cos \theta _ { 0 } + \frac { 1 } { 2 } m g R \theta _ { 0 } \sin \theta _ { 0 } + K = m g R + K \left( \frac { \alpha ^ { 2 } R ^ { 2 } \sin ^ { 2 } \theta _ { 0 } } { r ^ { 2 } } \right) .
$$

Solving for $\alpha$ gives us

$$
\alpha = \frac { r } { R \sin \theta _ { 0 } } \sqrt { 1 - \frac { m g R \left( 1 - \cos \theta _ { 0 } \right) - ( 1 / 2 ) m g R \theta _ { 0 } \sin \theta _ { 0 } } { K } } .
$$

Solving for $\alpha$ without using the small angle approximation for $\alpha$ also earned full credit. (The answer $\alpha = \pi$, which is technically also correct, earned partial credit.)
