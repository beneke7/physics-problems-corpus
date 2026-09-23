---
id: nbpho-2012-asteroid
difficulty_level: 5
source: nbpho
native_id: "2012 P1 ASTEROID"
year: 2012
language: en
translated: false
topic: [mechanics]
subtopic: [gravitation, orbits, kepler]
math_tools: [calculus]
format: open-ended
points: 14
core_ideas: []
has_figure: false
figure_files: []
provenance_note: "NBPhO 2012 (Nordic-Baltic Physics Olympiad), Problem 1, \"Asteroid\"."
verification_status: pending
links_hu: nbpho-2012-asteroid
has_solution: true
solution_language: en
techniques: [conservation-laws, limiting-and-special-cases, smart-coordinates]
---
## Problem 1. Asteroid (14 points)

Consider a hypothetical asteroid of mass $m_{a}$ and radius $r_{a}$, which moves along an elliptical orbit around the Sun (of mass $M_{s}$ ) in the same direction as Earth. Let us assume that the Earth's orbit is a circle of radius $R_{e}$ (neglecting thus its eccentricity) and that the two orbits lay in the same plane. The asteroid's shortest distance to the Sun (at its perihelion) $R_{\text {min }}=\frac{1}{2} R_{e}$ and the longest distance (at the apohelion) $R_{\text {max }}=1.51 R_{e} \approx 1.5 R_{e}$ (you may use the approximate value to simplify your calculations). The orbital velocity of the Earth $v_{0}=30 \mathrm{~km} / \mathrm{s}$. You can also use the following numerical values: the radius of the Earth $r_{e}=6400 \mathrm{~km}$, free fall acceleration at the Earth's surface $g=9.81 \mathrm{~m} / \mathrm{s}^{2}$, angular diameter of the Sun as seen from the Earth $\alpha=0.5^{\circ}$, duration of one year $T_{0}=365$ days, the temperature of the Sun's surface $T_{s}=$ 6000 K , free fall acceleration at the Sun's surface $g_{s}=275 \mathrm{~m} / \mathrm{s}^{2}$, Stefan Boltzmann constant $\sigma=5.6704 \times 10^{-8} \mathrm{~kg} \cdot \mathrm{~s}^{-3} \cdot \mathrm{~K}^{-4}$, the speed of light $c=3 \times 10^{8} \mathrm{~m} / \mathrm{s}$. The asteroid is of a spherical shape, its radius $r_{a}=10 \mathrm{~m}$ and mass $m_{a}=1 \times 10^{7} \mathrm{~kg}$; both the Sun and the asteroid can be considered as perfectly black bodies.

## Part A. Collision with Earth (5 points)

i. ( $\mathbf{2}$ pts) Suppose that the asteroid will collide with the Earth and is already very close, at a distance $l \ll R_{e}$ from the Earth's surface; what is the velocity of the asteroid with respect to the Earth assuming that (a) $l \gg r_{e}$; (b) $l \ll r_{e}$.
ii. (2 pts) Impact parameter $b$ is defined in the Earth's reference frame as the distance between the Earth and a line, tangent to the asteroid's trajectory at a point which is far enough (at a distance $l, r_{e} \ll l \ll R_{e}$ ). Determine the maximal value of the impact parameter $b_{\text {max }}$ for which the asteroid will still collide with the Earth.
iii. (1 pt) According to calculations, the asteroid is going to hit the Earth centrally after $N=10$ orbital periods. In order to avert the collision, the period of the asteroid needs to be changed; by how many seconds? (Assume simplifyingly that the intersection point of the two orbits remains at rest.)

## Part B. Changing the solar pull (9 points)

Theoretically, it is possible to change the asteroid's period by making use of the pressure of the solar radiation. Let us study, how realistic is such a project. The Sun pulls the asteroid with the gravitational force equal to $F_{0}=G M_{s} m_{a} / R^{2}$, where $G$ is the gravitational constant and $R$ is the distance between the Sun and the asteroid at the given moment of time. Let us denote $G M_{s}=\gamma_{0}$, so that

$$
F=\gamma_{0} m_{a} / R^{2} .
$$

Suppose that when the asteroid is at its perihelion, the constant $\gamma_{0}$ is decreased instantaneously, down to a new value $\gamma_{1}$, which remains constant during the subsequent motion.
i. (2 pts) Find the new apohelion distance $R_{\text {max }}^{\prime}$ of the asteroid; express it in terms of $\kappa=\left(\gamma_{0}-\gamma_{1}\right) / \gamma_{0}$.
ii. (2 pts) Find the change of the asteroid's orbital period assuming that $\kappa \ll 1$ (express it in terms of $\kappa$ ).
iii. (4 pts) Suppose that at its perihelion, the asteroid is coated with a perfectly retro-reflective paint (which directs all the incident light directly back, towards the source). Such a painting will result in a change of the effective pull of the asteroid towards the Sun; find the respective value of $\kappa$ (provide also a numerical estimate). iv. (1 pt) Estimate, is it realistic to avert the collision with this asteroid using the retroreflective paint.