---
id: izho-2020-t-q3
source: izho
native_id: "Problem 3. Ring in a magnetic field (10.0 points) Uniformly charged ring"
year: 2020
language: en
translated: false
topic: [electromagnetism, mechanics]
subtopic: [magnetostatics, magnetic-field, lorentz-force, induction, resistivity, current]
difficulty: null
difficulty_norm: 4
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 120
points: "\"10.0 points\""
has_solution: true
has_figure: true
figure_files: [izho-2020-t-q3-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2020_T.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [conservation-laws, differential-element, superposition]
---

## Problem 3. Ring in a magnetic field (10.0 points) Uniformly charged ring

A very thin ring of mass $m$ and radius $r$ is uniformly charged along its length with a charge $q$. At the initial moment of time, the ring rests horizontally and is released without a push. The subsequent motion of the ring appears in the vertical gravitational field of the Earth, characterized by the acceleration of gravity $g$ and in the horizontal radial magnetic field of induction $B$. Neglect air
![](izho-2020-t-q3-fig01.png)
resistance and assume that the plane of the ring remains horizontal at all times.
3.1 Find the maximum velocity of the ring center of mass $v_{\max }$ for the entire time of motion.
3.2 Find the time interval $\Delta t$ elapsed from the start of the ring motion to its first reaching of the maximum velocity of the center of mass.
3.3 Find the maximum height $h_{\max }$ at which the ring center of mass falls over the entire time of motion.

## Conductive ring

A very thin ring of mass $m$ and radius $r$ is made of a conductive material with a resistivity $\rho$ and a cross section area $s \ll r^{2}$. At the initial time moment $t=0$ the ring rests horizontally and is released without a push. The subsequent motion of the ring appears in the vertical gravitational field of the Earth, characterized by the acceleration of gravity $g$ and in the horizontal radial magnetic field of induction $B$. Neglect air resistance and assume that the plane of the ring remains horizontal at all times.
3.4 Find the steady-state velocity $v_{0}$ of the ring center of mass after a sufficiently large period of time having passed.
3.5 The dependence of the current strength $I(t)$ in the ring on time t has the following form

$$
I(t)=A_{1}+B_{1} \exp \left(\gamma_{1} t\right) .
$$

Find the constants $A_{1}, B_{1}$ and $\gamma_{1}$.

## Conductive ring with a cut

A very thin ring of mass $m$ and radius $r$ is made of a conductive material with a resistivity $\rho$ and a cross section area $s$. A cut with a width $\delta \ll \sqrt{s} \ll r$ was made along the radius of the ring. At the initial time moment $t=0$ the ring rests horizontally and is released without a push. The subsequent motion of the ring appears in the vertical gravitational field of the Earth, characterized by the acceleration of gravity $g$ and in the horizontal radial magnetic field of induction $B$. Neglect air resistance and assume that the plane of the ring remains horizontal at all times.
3.6 Find the steady-state acceleration $a_{0}$ of the ring center of mass after a sufficiently large period of time having passed.
3.7 The dependence of the current strength $I(t)$ in the ring on time t has the following form

$$
I(t)=A_{2}+B_{2} \exp \left(\gamma_{2} t\right) .
$$

Find the constants $A_{2}, B_{2}$ and $\gamma_{2}$.

## Mathematical hints for the theoretical problems

The following integrals may be useful:

$$
\begin{gathered}
\int \frac{d x}{a x+b}=\frac{1}{a} \ln |a x+b| \\
\int x^{n} d x=\frac{x^{n+1}}{n+1}, \text { where } n \text { is integer } \\
(1+x)^{\gamma} \approx 1+\gamma x+\frac{\gamma(\gamma-1)}{2} x^{2}, \text { for } x \ll 1 \text { and any } \gamma
\end{gathered}
$$
