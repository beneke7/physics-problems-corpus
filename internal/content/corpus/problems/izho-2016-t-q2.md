---
id: izho-2016-t-q2
source: izho
native_id: "Problem 2. Equilibrium in terms of potential energy ( 10.0 points)"
year: 2016
language: en
translated: false
topic: [fluids]
subtopic: [surface-tension, equilibrium, stability, hydrostatics]
difficulty: null
difficulty_norm: 4
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 90
points: "\"10.0 points\""
has_solution: true
has_figure: true
figure_files: [izho-2016-t-q2-fig01.png, izho-2016-t-q2-fig02.png, izho-2016-t-q2-fig03.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2016_T.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [extremization, differential-element]
---

## Problem 2. Equilibrium in terms of potential energy ( 10.0 points)

One of the widely known principles of the general physics is that every system tends to decrease its potential energy, and the stable equilibrium position corresponds to the state with the minimum of its value.

In this problem the interaction of the liquid with the solid surface is studied. To describe this interaction the following parameters are introduced:
$\sigma_{0}$ is the surface tension at the interface between the liquid and the air;
$\sigma_{1}$ is the surface tension at the interface between the liquid and solid;
$\sigma_{2}$ is the surface tension at the interface between the solid and the air;
![](izho-2016-t-q2-fig01.png)
$\theta$ is the contact angle (wetting angle).
The values $\sigma_{0}, \sigma_{1}, \sigma_{2}$ designate the surface energy per unit area of contact between media.

In all parts of the problem, use the following numerical values for water:
the surface tension $\sigma_{0}=0,072 \frac{\mathrm{~N}}{\mathrm{~m}}$;
the contact angle $\theta=20^{\circ}$;
the mass density $\rho=1,0 \cdot 10^{3} \frac{\mathrm{~kg}}{\mathrm{~m}^{3}}$;
the acceleration of gravity $g=9,8 \frac{m}{s^{2}}$.

## 1. Introduction (1.0 points)

1. [1.0 points] Prove that the change in the surface energy at the liquid-solid interface is found as

$$
\Delta U_{s}=-\sigma_{0} \cos \theta \Delta S,
$$

where $\Delta S$ stands for the change in the area of the contact between the liquid and solid.

## 2. Water in a vertical cylindrical tube (2.0 points)

The open tube with the inner radius $R=1,0 m m$ is lowered vertically so that its lower end touches the surface of the water.

Let a water level in the tube be at a certain height $h$, which does not necessarily correspond to its equilibrium value.
2.1 [0.5 points] Find the formula for the change in the surface energy of the system $\Delta U_{S}$ that corresponds to an additional small rise of water level $\Delta h$ in the tube.
2.2 [0.5 points] Find the formula for the change in the potential energy $\Delta U_{G}$ of the liquid in the gravitational field that corresponds to an additional small rise of water level $\Delta h$ in the tube.
2.3 [1.0 points] Using the principle of the minimum potential energy, find the formula for the height of the water in the tube $h_{0}$ in equilibrium position. Calculate its numerical value from the quantities
![](izho-2016-t-q2-fig02.png)
provided above.

## 3. Water in a vertical conical tube (4.0 points)

A long conical tube is vertically lowered into the water so that its lower end touches the surface of the water. The inner radius of the tube at its lower base is equal to $R=1,0 \mathrm{~mm}$, and its inner radius at the upper base is close to zero. The tube walls make an angle $\alpha$ with the vertical.

Note: in the following neglect any change in the surface energy at the interface between the liquid and the air.

Let a water level in the tube be at a certain height $h$, which does not necessarily correspond to its equilibrium value.
![](izho-2016-t-q2-fig03.png)
3.1 [0.5 points] Find the formula for the change in the surface energy of the system $\Delta U_{S}$ that corresponds to an additional small rise of water level $\Delta h$ in the tube.
3.2 [0.5 points] Find the formula for the change in the potential energy $\Delta U_{G}$ of the liquid in the gravitational field that corresponds to an additional small rise of water level $\Delta h$ in the tube.
3.3 [1.0 points] Find the equation that determines the height of water in the tube in equilibrium position and rewrite it in terms of $\sigma_{0}, \theta, \alpha$ and the value of $h_{0}$ found in 2.3.
3.4 [1.0 points] Let an angle be $\alpha=1,0 \times 10^{-2} \mathrm{rad}$. The tube is partially filled with water up to a certain level $H$. Find the dependence of the ultimate height of the water level in the tube as a function of $H$.
3.5 [1.0 points] Specify the range of angles $\alpha$ (providing its numerical values) at which the water completely fills the tube.

## 4. Outflow of water (3.0 points)

A bottle is completely filled with water, sealed tightly with the cork and turned upside down. Two identical round holes of radii $R$ are drilled in the cork.
4.1 [3.0 points] At what minimum value of the hole radius the water will pour out of the bottle?

## Mathematical tips

Rather small convex spherically shaped surface can be approximately described by a function

$$
z=h\left(1-\frac{r^{2}}{R^{2}}\right),
$$

where $R$ denotes the radius of the bulge with $h$ being its height such that $h \ll R$.
Then, up to higher orders the area of the spherical part of the bulge is found as

$$
S=\pi\left(R^{2}+h^{2}\right),
$$

and its potential energy in the gravitational field is derived as

$$
U=\frac{\pi R^{2} h^{2}}{6} \rho g .
$$
