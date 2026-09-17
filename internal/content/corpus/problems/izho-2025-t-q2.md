---
id: izho-2025-t-q2
source: izho
native_id: "Problem 2. First estimate of the age of the Earth ( 10.0 points) Fourier's law of thermal conductivity"
year: 2025
language: en
translated: false
topic: [thermodynamics]
subtopic: [conduction, heat-transfer, temperature, diffusion, internal-energy]
difficulty: null
difficulty_norm: 4
math_tools: [calculus, differential-equations]
format: scaffolded
core_ideas: []
estimated_time_min: 120
points: "\"10.0 points\""
has_solution: true
has_figure: true
figure_files: [izho-2025-t-q2-fig01.png, izho-2025-t-q2-fig02.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2025_T.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [differential-element, cross-domain-analogy, model-reduction]
---

## Problem 2. First estimate of the age of the Earth ( 10.0 points) Fourier's law of thermal conductivity

Thermal conductivity characterizes the ability of a body to transfer thermal energy from one point to another if there is a temperature difference between them. Let us consider a flat homogeneous plate with a cross-sectional area $S$ and a thickness $d x$, whose surfaces have the temperature difference $d T$. The phenomenon of thermal conductivity in a one-dimensional stationary case is described by Fourier's law, which has the following form:

$$
d Q=-\kappa \frac{d T}{d x} S d t,
$$

where $d Q$ is the amount of heat transferred during time $d t$ through the plate surface in the direction of the normal coinciding with the direction of decreasing temperature. The constant $\kappa$ is called the thermal conductivity coefficient and depends on the plate material, and the value $j_{Q}=\frac{1}{s} \frac{d Q}{d t}$ refers to the modulus of the heat flux, which is a vector directed towards the heat transfer.
2.1 The left end of the rod, enclosed in a heat-insulating shell, is maintained at a temperature of $t_{1}=25^{\circ} \mathrm{C}$, whereas its right end is kept at a temperature of $t_{2}=100^{\circ} \mathrm{C}$. The rod itself consists of two parts of the same length, but different thermal conductivities. The thermal conductivity coefficient of the left part is twice as high as the thermal conductivity coefficient of the right part. Calculate the temperature $t$ of the contact surface of the rod parts.
2.2 A rod of length $l$ with a heat-insulated side surface consists of a material whose thermal conductivity coefficient varies along according to the law $\kappa=a / T^{2}$, where $a$ is a certain constant. The ends of the rod are maintained at temperatures $T_{1}$ and $T_{2}$. Determine the dependence of temperature $T(x)$ on the coordinate $x$, which is the distance from the rod end with temperature $T_{1}$.
2.3 Estimate the time it takes for an ice crust of thickness $h=4.00 \mathrm{~cm}$ to form on the surface of a lake at an ambient air temperature of $t=-20.0^{\circ} \mathrm{C}$. The thermal conductivity coefficient of ice is $\kappa=2.20 \mathrm{~W} /(\mathrm{m} \cdot \mathrm{K})$, its density is $\rho=900 \mathrm{~kg} / \mathrm{m}^{3}$, and the specific melting heat is $\lambda=3.33 \cdot 10^{5} \mathrm{~J} /$ kg.

## Electrothermal analogy

Electrothermal analogy is a method for calculating thermal systems based on replacing thermal quantities with their electrical analogues. The method is based on the identity of the mathematical apparatus of thermal physics and electrical engineering: the propagation of heat and electric current are described by the same differential equations, while measuring the electrical characteristics of real objects is much simpler.
2.4 Find Below a table of correspondence between thermal and electrical quantities. Thermal quantities are written out explicitly, and you need to transfer the table to your solution and write the corresponding electrical quantities in front of them: electric current density $j_{E}$, specific conductivity $\sigma$, electric charge $q$, electric field potential $\varphi$.

| Thermal quantity | Electrical quantity |
| :--- | :--- |
| temperature $T$ |  |
| amount of heat $Q$ |  |
| heat flux $j_{Q}$ |  |
| thermal conductivity coefficient $\kappa$ |  |

2.5 A cube consists of identical thin rods with thermally insulated side surfaces. Two vertices of the cube $A$ and $B$ are maintained at constant temperatures $t_{A}=20^{\circ} \mathrm{C}$ and $t_{B}=120^{\circ} \mathrm{C}$ respectively. Determine the temperature $t_{C}$ at vertex $C$, see Figure 2.1 below.
2.6 A thin heat-conducting sphere of radius $R$ is made of a material with the wall thickness $h \ll R$. Thermal power $P$ is supplied to point $A$ of the sphere, and the same thermal power is removed at point $B$ of the sphere. Neglecting heat losses, determine the modulus of the heat flux at point $C$ of the sphere, see Figure 2.2 below ( $O$ is the sphere center, $A O \perp O B, O C \perp O A, O C \perp O B$ ).

![](izho-2025-t-q2-fig01.png)
Figure 2.1

![](izho-2025-t-q2-fig02.png)
Figure 2.2

## The first estimate of the Earth age

In the 18th century, there lived a famous naturalist, Georges-Louis Leclerc, Count de Buffon (1707-1788), who was a member of the Paris Academy of Sciences, the French Academy, a member of the Royal Society of London, and also a foreign honorary member of the St. Petersburg Academy of Sciences. He published his works in a multi-volume work, Natural History, in which he attempted to systematize the knowledge gained to that time in a variety of fields of science, and also expressed a number of advanced ideas. His interests included geology, and he was the first to formulate the problem of determining the age of the Earth. In particular, Leclerc developed a hypothesis about the origin of the planets through the collision of celestial bodies, which should have led to their heating and subsequent cooling. It was through the process of temperature change over time that the first estimate of the Earth age in history was obtained.

Of course, Leclerc did not know the laws of physics in their modern form and did not have a sufficient command of the mathematical apparatus, but he had a keen physical sense.
2.7 Let a teapot have a spherical shape with a radius $r_{0}=15.0 \mathrm{~cm}$ and after heating water in it to the boiling point, it cools down to the room temperature in a time of $\tau_{0}=6.00 \mathrm{~h}$. Let us imagine a hypothetical situation: the teapot is proportionally increased to the size of the Earth, the radius of which is $R_{E}=6400 \mathrm{~km}$. Estimate the cooling time $\tau$ of such a hypothetical "teapot" under the same external conditions.

Unlike Count de Buffon, we are familiar with the modern physics laws, so let us consider the simplest model of the Earth, whose radius is equal to $R_{E}=6400 \mathrm{~km}$. Inside the Earth there is a core with a radius of $R_{0}=3500 \mathrm{~km}$, whose substance perfectly conducts heat $(\kappa=\infty)$ and has a specific heat capacity of $c=500 \mathrm{~J} /(\mathrm{kg} \cdot \mathrm{K})$ at a density of $\rho=5.46 \mathrm{~g} / \mathrm{cm}^{3}$. Outside the core, right up to the Earth's surface, is the mantle, whose substance has zero specific heat capacity and a thermal conductivity coefficient of $\kappa=$ 50.3 W/(m ⋅ K). Neglect the influence of the Earth's crust, and assume that the Sun has no thermal effect on the Earth, which can be considered an absolutely black body being in a vacuum.
2.8 At the present moment in time, the Earth's surface temperature is known to be $T=300 \mathrm{~K}$. Calculate the temperature $T_{0}$ of the Earth's core within the framework of the presented model.
2.9 Calculate the temperature of the mantle $T_{H}$ at a depth of $H=2.00 \mathrm{~km}$ from the Earth's surface.
2.10 Calculate how much the temperature $\Delta T$ of the Earth's surface differs from what it was $\tau=1.00 \cdot$ $10^{6}$ years ago.
