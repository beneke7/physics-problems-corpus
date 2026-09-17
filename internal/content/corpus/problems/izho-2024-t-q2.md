---
id: izho-2024-t-q2
source: izho
native_id: "Problem 2. Lagrange points ( $\mathbf{1 0 . 0}$ points) <br> Two body problem"
year: 2024
language: en
translated: false
topic: [gravitation, mechanics]
subtopic: [gravitation, orbits, circular-motion, equilibrium]
difficulty: null
difficulty_norm: 5
math_tools: [calculus, geometry-trigonometry]
format: scaffolded
core_ideas: []
estimated_time_min: 150
points: null
has_solution: true
has_figure: true
figure_files: [izho-2024-t-q2-fig01.png, izho-2024-t-q2-fig02.png, izho-2024-t-q2-fig03.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2024_T.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [choose-reference-frame, conservation-laws, graphical-reduction]
---

## Problem 2. Lagrange points ( $\mathbf{1 0 . 0}$ points) <br> Two body problem

Consider the two-body problem. Two massive bodies with masses $m_{1}$, and $m_{2}<m_{1}$ respectively, move only under the influence of the force of gravitational interaction in circular orbits around a common center of mass $C$. The distance between the bodies remains unchanged and equal to $R_{0}$.
2.1 Find the radii $R_{1}$ and $R_{2}$ of the trajectories of the bodies. Express your answer through the quantities $R_{0}, m_{1}, m_{2}$.
2.2 Find the angular velocity $\omega_{0}$ of the bodies rotations. Express your answer through the quantities $R_{0}, m_{1}, m_{2}$ and the gravitational constant $G$.
![](izho-2024-t-q2-fig01.png)

## Lagrange points in a three-body system

Lagrange points, libration points (Latin librātiō - swinging) or L-points are points in the space of a system of two massive bodies in which a third body with negligible mass, not affected by any other forces other than gravitational ones from the first two, can remain motionless relative to these bodies.

Consider adding a third body to the system described above, the mass of which $m_{0}$ is significantly less than the masses of the first two bodies, $m_{0} \ll m_{1}, m_{2}$. Introduce the $X$ axis along a straight line passing through the bodies $m_{1}, m_{2}$, as shown in the figure. The origin is compatible with the center of mass $C$. To simplify mathematical transformations, use the following quantities:

- as a unit of length, use the distance $R_{0}$ between bodies $m_{1}, m_{2}$; the position of a small body is

- as a unit of force use the quantity $F_{0}=m_{0} \omega_{0}^{2} R_{0}$;
- introduce the dimensionless parameter $\mu=\frac{m_{2}}{m_{1}+m_{2}}$.

2.3 Obtain an exact equation for determining the $x$ coordinates of Lagrange points lying on the $X$ axis. In addition to the desired $x$ coordinate, this equation should include only the parameter $\mu$.
2.4 Draw a schematic graph of the projection onto the $X$ axis of the force $F_{x}$ acting on a small body from two massive bodies at $\mu=0.20$. Express your answer in terms of relative units $f_{x}=F_{x} / F_{0}$ and $x=$ $X / R_{0}$.
2.5 Determine the possible number of Lagrange points that exist on the $X$ axis.
2.6 Calculate the numerical values of the coordinates of these points with an error not exceeding $\Delta x=0.05$ if $\mu=0.20$.
2.7 Prove that the point lying at the vertex of a regular triangle constructed on the segment $m_{1}, m_{2}$ is a Lagrange point.
![](izho-2024-t-q2-fig02.png)

## Lagrange points in the Solar System

For calculations, use the following numerical values of astronomical quantities: solar mass $M_{1}=$ $1.99 \cdot 10^{30} \mathrm{~kg}$; Earth mass $M_{2}=5.97 \cdot 10^{24} \mathrm{~kg}$; the Earth's orbit can be considered a circle with radius $R_{0}=1.50 \cdot 10^{8}$; Jupiter's orbital period around the Sun is 11.9 Earth years.

SOHO is a solar observing spacecraft, a joint project of ESA and NASA, which was launched on December 2, 1995 and began operations in May 1996. The device is located on the straight line connecting the Sun and the Earth, its position relative to the Earth remains practically unchanged over time.
2.8 Determine at what distance $l_{S}$ from the Earth the SOHO spacecraft is located. Express the formula in terms of the ratio of the masses of the Earth and the Sun and the radius of the Earth's orbit. Calculate the numerical value of this distance.

On December 25, 2021, a spacecraft equipped with the James Webb infrared telescope was successfully launched from the Kourou spaceport using an Ariane 5 rocket. In January 2022, this device
reached its permanent deployment point. The position of the telescope is to remain virtually unchanged relative to the Earth, and it is assumed to stay in the Earth shadow all the time.
2.9 Determine at what distance $l_{W}$ from the Earth the James Webb telescope is located. Express your answer in terms of the Earth-to-Sun mass ratio and the radius of the Earth's orbit. Calculate the numerical value of this distance.
![](izho-2024-t-q2-fig03.png)

Small planets, called asteroids, are distributed extremely unevenly in the Solar System: in addition to the well-known asteroid belt, located between the orbits of Mars and Jupiter, there are two large groups of asteroids moving near the orbit of Jupiter. These groups of asteroids are called "Trojan" asteroids.
2.10 Calculate the distances $l_{J}$ from Jupiter to the centers of groups of Trojan asteroids.
