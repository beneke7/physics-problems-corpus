---
id: izho-2022-t-q3
source: izho
native_id: "Problem 3. Corpuscular interpretation of light pressure ( $\mathbf{1 0 . 0}$ points) Introduction"
year: 2022
language: en
translated: false
topic: [electromagnetism, optics]
subtopic: [radiation-pressure, reflection, photon-energy, momentum, geometrical-optics]
difficulty: null
difficulty_norm: 4
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 90
points: null
has_solution: true
has_figure: true
figure_files: [izho-2022-t-q3-fig01.png, izho-2022-t-q3-fig02.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2022_T.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [conservation-laws, differential-element, smart-coordinates]
---

## Problem 3. Corpuscular interpretation of light pressure ( $\mathbf{1 0 . 0}$ points) Introduction

Electromagnetic waves, reflected from the interfaces between media or absorbed by them, exert mechanical pressure, whose corpuscular interpretation is the subject of this problem. The main postulate of the corpuscular theory of electromagnetic radiation states that electromagnetic radiation, in particular light, is a beam of particles called photons with an energy determined by Planck's formula. In what follows, take the speed of light be equal to $c=2.98 \cdot 10^{8} \mathrm{~m} / \mathrm{s}$.
3.1 Let a parallel beam of light with intensity $I_{0}$ fall on a flat surface at an angle $\varphi$ with the normal, and the coefficient of reflection from the surface is $R=I_{r} / I_{0}$, where $I_{r}$ stands for the intensity of the reflected light. Find the pressure of light $p_{s}$ exerted on the surface, provided that the reflection coefficient does not depend on the angle of incidence.
3.2 Calculate the pressure $p_{s}$ of the solar radiation, whose intensity is equal to $I_{s}=1400 \mathrm{~W} / \mathrm{m}^{2}$. Assume that light is incident perpendicular to: (a) the completely absorbing earth's surface; b) the completely reflective (mirror) surface.
3.3 A ball with the radius $R=1.00 \mathrm{~m}$ is illuminated by a wide parallel beam of sunlight with intensity $I_{s}=1400 \mathrm{~W} / \mathrm{m}^{2}$. One half of the ball is made of a material that completely reflects light, while the other half absorbs it completely. Both halves are symmetrically illuminated by the beam. Calculate the moment of light pressure forces acting on the ball about its axis of symmetry, which is perpendicular to the beam and lies in the plane dividing the ball into the mirror and absorbing halves.

## Space station with the mirror sail

The space station rests far from the planets at a distance of $R_{0}=5.00 \cdot 10^{7} \mathrm{~km}$ from the Sun, held by a solar sail (fully reflective mirror) oriented perpendicular to the sun's rays. At certain time moment, the station's engines turn on for a short time and give it an initial speed $V_{0}=9.00 \mathrm{~m} / \mathrm{s}$ in the direction from the Sun. Completely ignore the influence of the solar wind, which is a beam of ionized particles, mostly protons, helium nuclei and some others. Consider it known that the Earth moves around the Sun in a circular orbit of the radius $r_{E}=1.50 \cdot 10^{8} \mathrm{~km}$ with the speed of $V_{E}=30.0 \mathrm{~km} / \mathrm{s}$.
3.4 Calculate the maximum distance $R$ from the Sun to the station.
3.5 Determine the minimum value of the speed $V_{0}=V_{\text {min }}$, at which the station will be able to fly away from the Sun

## Poynting-Robertson effect

In astrophysics, the physical process is well known, such that in the solar system solid dust particles slowly fall onto the Sun along a spiral trajectory whose shape is very close to circular. Let us consider a similar spherical dust particle of radius $a=1.00 \mathrm{~mm}$ and density $\rho=3.00 \cdot 10^{3} \mathrm{~kg} / \mathrm{m}^{3}$, which rotates around the Sun at such a distance from it that light with intensity $I_{s}=1400 \mathrm{~W} / \mathrm{m}^{2}$ falls on the dust particle. Under given conditions, the radial component of the pressure of light on the particle can be neglected in comparison with the gravity of the Sun. Consider that dust the particle completely absorbs the incident radiation.
3.6 Evaluate the characteristic time $\tau$, during which the distance to the Sun $R$ decreases by the relative value $\mu=\frac{\delta R}{R}=10^{-4}$.

## Laser tweezer

In 2018, the Nobel Prize in physics was awarded to A. Ashkin for the creation of "laser tweezer", a device that allows one to hold and move transparent microscopic objects with the help of light. In one of the devices of such a "laser tweezer", a parallel beam of light from a laser passes through a converging lens $L$ and hits a microparticle $M$, which can also be considered a converging lens. Point $F$ is the common focus of $L$ and $M$ (see figure 3.1 below). The light intensity in the beam is $I=1.00 \mu \mathrm{~W} / \mathrm{sm}^{2}$, the beam radius is $R=1.00$ cm, the focal length of the lens $L$ is $F=10.0 \mathrm{~cm}$. Ignore completely the absorption and reflection of light.
3.7 Calculate the force acting on the microparticle.

To create a force acting on the particle in the transverse direction of the beam, the left half of the lens $L$ is covered by a diaphragm (see figure 3.2 below).
3.8 Calculate the force acting on the microparticle in the transverse direction of the beam.

![](izho-2022-t-q3-fig01.png)
Figure 3.1

![](izho-2022-t-q3-fig02.png)
Figure 3.2

Mathematical hints for the theoretical problems
The following formulas may be useful:

$$
\begin{gathered}
\int \quad x^{n} d x=\frac{x^{n+1}}{n+1}+C \text {, where } n \neq-1 \text { is a fixed number, } C \text { refers to an arbitrary constant } \\
\int \quad \frac{d x}{x}=\ln \ln |x|+C \text {, where } C \text { stands for an arbitrary constant } \\
(1+x)^{\gamma} \approx 1+\gamma x+\frac{\gamma(\gamma-1)}{2} x^{2}, \text { for }|x| \ll 1 \text { and any value of } \gamma \\
\ln \ln (1+x) \approx x, \text { for }|x| \ll 1
\end{gathered}
$$
