---
id: solution-ocr-kevin-zhou-m6sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 9
An object quickly flies past a star of mass $M$, with nearly constant speed $v$, so that its distance of closest approach is $R$. Estimate the angle by which the object is deflected.


Solution
To solve this exactly, we could use properties of conics, or solve Newton's second law in polar coordinates. Here we'll present a simpler rough estimate. Since the object is flying quickly, its path is approximately a straight line. Most of the transverse impulse it experiences occurs when it is at a distance of order $R$ from the star, and we can approximate this as

$$
\Delta p _ { \perp } = \int F _ { \perp } d t \sim F _ { \perp } \Delta t \sim \frac { G M m } { R ^ { 2 } } \frac { R } { v } .
$$

The small angle of deflection is thus

$$
\Delta \theta \approx \frac { \Delta p _ { \perp } } { m v } \sim \frac { G M } { R v ^ { 2 } } .
$$

The true answer in Newtonian gravity turns out to be $2 G M / R v ^ { 2 }$.
In Newtonian gravity, we can think of light as consisting of massless particles moving at speed $c$, so we can find the deflection of light by setting $v = c$. However, in general relativity the bending of light is actually twice as large, $\Delta \theta = 4 G M / R c ^ { 2 }$. The observation of this factor of 2 by Eddington during a solar eclipse was one of the first tests of general relativity, but it's pretty tricky; Einstein himself missed it in his original paper of the subject!

The 2 arises because in general relativity, for objects that don't get too close to the Sun,

$$
\Delta \theta \approx \frac { 2 G M } { R } \left( \frac { 1 } { v ^ { 2 } } + \frac { 1 } { c ^ { 2 } } \right) .
$$

Roughly speaking, the first term comes from "temporal" curvature, and simply recovers the Newtonian result. The second term is due to "spatial" curvature, which leads to an "angular defect": the circumference of a circle centered on the Sun is slightly less than $2 \pi r$. We could neglect this effect in problem 5 because we were considering nonrelativistic particles, with $v \ll c$. But for light, the two effects contribute equally to the deflection.

Remark: Mercury's Precession
Another famous prediction of general relativity is the perihelion precession of Mercury, i.e. the fact that its orbit advances by a tiny angle $\Delta \theta$ on each cycle. However, knowing only that general relativity is a relativistic theory of gravity, we can estimate this angle by dimensional analysis. The only dimensionful parameters are the strength of the Sun's gravity $G M$, the radius $R$ of Mercury's orbit, and the speed of light $c$. (Other parameters we might care about can be expressed in terms of these; for instance, the speed of Mercury is $v = \sqrt { G M / R }$.) By similar logic to the above problem, the only possible expression is

$$
\Delta \theta \sim \frac { G M } { R c ^ { 2 } } \sim 10 ^ { - 8 } .
$$

The true answer is larger by a factor of $6 \pi / \left( 1 - e ^ { 2 } \right)$, where $e \approx 0.2$ is the eccentricity.


This discrepancy was known in Einstein's time, and in textbooks it is usually described as decisive evidence in favor of general relativity. As usual, the history is more complicated. The precession is extremely tiny, and many other factors contribute to it. Even in the 1980s, people were arguing over whether the oblateness of the Sun could make a significant difference. Fortunately, in the four decades since then, we have performed stringent tests of general relativity, through extremely precise measurements of solar system orbits, gyroscopes in satellites, and indirect and direct observations of gravitational waves. It turns out that general relativity passes every test, and deviations from it must be extremely small.

## 5 Fictitious Forces

Idea 8
Consider an inertial frame and a rotating frame with angular velocity $\boldsymbol { \omega }$. For any vector V, the time derivatives of V in these two frames are related by

$$
\left( \frac { d \mathbf { V } } { d t } \right) _ { \text {in } } = \left( \frac { d \mathbf { V } } { d t } \right) _ { \text {rot } } + \boldsymbol { \omega } \times \mathbf { V }
$$

For example, when $\mathbf { V }$ is the position $\mathbf { r }$, we have the familiar result

$$
\mathbf { v } _ { \mathrm { in } } = \mathbf { v } _ { \mathrm { rot } } + \omega \times \mathbf { r } .
$$

Applying this equation to the velocity $\mathbf { v }$, we find

$$
\mathbf { a } _ { \mathrm { in } } = \mathbf { a } _ { \mathrm { rot } } + 2 \boldsymbol { \omega } \times \mathbf { v } _ { \mathrm { rot } } + \boldsymbol { \omega } \times ( \boldsymbol { \omega } \times \mathbf { r } ) .
$$

The two terms on the right correspond to the Coriolis and centrifugal forces,

$$
\mathbf { F } _ { \mathrm { rot } } = \mathbf { F } - 2 m \boldsymbol { \omega } \times \mathbf { v } _ { \mathrm { rot } } - m \boldsymbol { \omega } \times ( \boldsymbol { \omega } \times \mathbf { r } ) .
$$

In the case where $\boldsymbol { \omega }$ can change, we also have the azimuthal force $- m \dot { \boldsymbol { \omega } } \times \mathbf { r }$. (If you prefer, these forces can also be derived by working in components in polar coordinates, as shown in chapter 11 of Wang and Ricardo, volume 1.)

Idea 9
Sometimes, the best way to deal with fictitious forces is to just avoid them by using an inertial frame instead. This is especially true when the Coriolis force is not small; it's straightforward to treat it approximately if it's small, but otherwise it's quite complicated. If a problem presents a situation in a rotating frame, there's no reason you have to stay in that frame!
