---
id: inpho-2024-a3
source: inpho
native_id: "3. Chandrayaan-3"
year: 2024
language: en
translated: false
topic: [gravitation]
subtopic: [orbits, kepler, variable-mass]
difficulty: null
difficulty_norm: 4
math_tools: [calculus]
format: numerical
core_ideas: []
estimated_time_min: 60
points: "6"
has_solution: true
has_figure: true
figure_files: [inpho-2024-a3-fig01.png, inpho-2024-a3-fig02.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/inpho/2024.mmd; figures require local harvest"
verification_status: pending
solution_language: en
techniques: [conservation-laws]
---

## 3. Chandrayaan-3

On July 14, 2023, India's lunar mission satellite, Chandrayaan-3, was successfully launched by the Indian Space Research Organization (ISRO). Chandrayaan-3 (mass $m=3900 \mathrm{~kg}$ ) was taken to the Moon through a series of Earth Bound Manoeuvres (elliptical) orbits (EBNs) as depicted in the figure below. In this problem, we will explore the physics governing some part of its journey, employing a simplified model. For all parts of this problem except part (f), we consider Chandrayaan-3 to be moving only under the influence of Earth's gravity (a central force).
![](inpho-2024-a3-fig01.png)

(a) [6 marks] Upon launch, Chandrayaan-3 entered an elliptical orbit around Earth, with Earth at one of the foci (E) as shown below. The points P and A are the perigee (nearest point from the Earth) and apogee (farthest point from the Earth), respectively. We introduce the polar coordinate system ( $r, \theta$ ), where $\vec{r}$ is the vector from the centre of the Earth (origin) to the satellite, and $\theta$ is the angle that $\vec{r}$ makes with the major axis ( $\mathrm{PA}=2 a$ ). The directions of unit vectors $\hat{r}$ and $\hat{\theta}$ are shown in the figure.

![](inpho-2024-a3-fig02.png)
The equation of the ellipse can be written in polar coordinates as

$$
r=\frac{r_{0}}{(1-e \cos \theta)}
$$

where $e$ is eccentricity of the orbit $(0<e<1)$ and $r_{0}$ is called the latus rectum. The velocity $\vec{v}$ of the satellite in polar coordinates can be written as

$$
\vec{v}=v_{r} \hat{r}+v_{t} \hat{\theta}=\dot{r} \hat{r}+r \dot{\theta} \hat{\theta}
$$

where $v_{r}=\dot{r}$ is the "radial" speed and $v_{t}=r \dot{\theta}$ is the "tangential" speed. Make schematic plots of the speeds $v_{r}$ and $v_{t}$ as functions of $\theta$ over one full orbit. Mark any significant points in the plots in terms of $a, e$, and other variables.

(b) [1.5 marks] Obtain an expression for the total energy $(E)$ of the orbiting satellite in terms of $a$ and other constants.
(c) [1 marks] Plot the kinetic energy (KE) of the satellite as a function of $\theta$ over one full orbit. Mark any significant points in terms of $a, e$, and other variables.
(d) [1.5 marks] The perigee and apogee of the elliptical orbit in part (a) are 200 km and 36500 km, respectively. It is generally described as a (200×36500) km orbit. Here the distances are defined from the surface of the Earth. Calculate the period of rotation $T$ (in hr) of Chandrayaan-3 in this orbit.
(e) [2.5 marks] To move Chandrayaan-3 from the first orbit (in part (d)) to another elliptical orbit EBN-1, an instantaneous boost was applied at perigee by changing the velocity by $\Delta v$, without altering the direction. This changed the apogee to 41800 km above Earth's surface while keeping the perigee unchanged. Calculate $\Delta v$.
(f) [1.5 marks] After a series of manoeuvres, Chandrayaan-3 was placed in an elliptical orbit of $(100 \times 1437) \mathrm{km}$ around the Moon. Here, the distances are calculated from the surface of the Moon. Calculate the change in velocity $\Delta v^{\prime}$, applied at the perigee, that is required to bring Chandrayaan-3 from this elliptical orbit to a circular orbit at a distance of 100 km from the surface of the Moon. For this part, assume that Chandrayaan-3 is only under the influence of the Moon's gravitational field.
