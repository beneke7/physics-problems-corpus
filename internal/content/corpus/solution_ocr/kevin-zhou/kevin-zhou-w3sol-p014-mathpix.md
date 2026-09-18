---
id: solution-ocr-kevin-zhou-w3sol-p014
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w3-p014]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 14. Consider water with depth $D$ and density $\rho$. A shallow water wave (i.e. one with wavelength much greater than $D$ ) travels along the $x$-direction with height $h ( x , t ) \ll D$ relative to the water level. It turns out that the water has a horizontal velocity $v ( x , t )$ which is approximately independent of height, and negligible vertical velocity. Even though the water is moving, the hydrostatic pressure formula still works because the water's vertical acceleration is negligible.
    (a) Find a relation between the derivatives of $h ( x , t )$ and $v ( x , t )$ using conservation of mass. Using this result, show that the phase velocity $v _ { w }$ of the water waves obeys $v \ll v _ { w }$.
    (b) Find a relation between the derivatives of $h ( x , t )$ and $v ( x , t )$ using force and momentum.
    (c) Combining these results, find the phase velocity $v _ { w }$ of shallow water waves.

Now let's consider what happens when a shallow water wave created at sea approaches the shore, and the depth $D$ slowly decreases.


(d) Explain why waves always arrive at the shore moving perpendicular to the shoreline.
(e) If the depth is gradually halved, by what factor is the height of the wave multiplied? This phenomenon is known as shoaling.

Solution. (a) Consider the region between $x$ and $x + d x$. The rate that water flows into this region must equal the rate of change of its volume due to the change in height. Then

$$
A D ( v ( x ) - v ( x + d x ) ) = A \frac { d h } { d t } d x .
$$

That is, we have

$$
- D \frac { \partial v } { \partial x } = \frac { \partial h } { \partial t } .
$$

For a sinusoidal wave, a derivative with respect to $x$ gives a factor of $k$ and a derivative with respect to $t$ gives a factor of $\omega$. So we have $D k v \sim \omega h$, and since $v _ { w } = \omega / k$, we have $v \sim v _ { w } h / D \ll v _ { w }$.


(b) Consider the horizontal forces on the fixed piece of water that, at some moment, is between $x$ and $x + d x$. This water has atmospheric pressure at its upper surface, so the net horizontal force on it due to hydrostatic pressure is
$$
F = \frac { 1 } { 2 } \rho g \ell \left( ( D + h ( x ) ) ^ { 2 } - ( D + h ( x + d x ) ) ^ { 2 } \right) \approx - \rho g D \ell \frac { \partial h } { \partial x } d x
$$
where we used $h \ll D$, and let $\ell$ be the length of the water in the transverse direction. This must be equal to the rate of change of momentum of this piece of water, which is
$$
\frac { d p } { d t } = \rho \ell D d x \frac { d v } { d t } = \rho \ell D d x \left( \frac { \partial v } { \partial t } + v \frac { \partial v } { \partial x } \right) .
$$
In the second step, we used the idea of the "convective derivative". That is, the chunk of water originally at $x$ at time $t$ will move to $x ^ { \prime } = x + v ( x , t ) d t$ after a time $d t$, at which point its velocity will be $v \left( x ^ { \prime } , t + d t \right) = v ( x , t ) + ( ( \partial v / \partial t ) + v ( \partial v / \partial x ) ) d t$, so the acceleration of the water has two terms.
Now, the rough sizes of these two terms are $\omega v$ and $k v ^ { 2 }$, so the second term is smaller by a factor of $v / v _ { w }$. We thus neglect it, and conclude that
$$
- g \frac { \partial h } { \partial x } = \frac { \partial v } { \partial t } .
$$
(c) Combining the results of the last two parts, we have
$$
\frac { \partial ^ { 2 } h } { \partial t ^ { 2 } } = - D \frac { \partial ^ { 2 } v } { \partial x \partial t } = g D \frac { \partial ^ { 2 } h } { \partial x ^ { 2 } }
$$
which is just the ideal wave equation with wave velocity $v _ { w } = \sqrt { g D }$. (This is both the phase velocity and the group velocity.)
(d) The wave speed is proportional to $\sqrt { D }$, so the waves slow down as they approach the shore. So by Snell's law, they refract towards the normal direction.
(e) Note that nothing is adding or subtracting energy from the wave, and that the number of periods of the wave stays the same. Thus, the amount of energy in each period of the wave stays the same. (We could get the same result by identifying an adiabatic invariant, as discussed in M4. In this case, it is called the wave action.)
The gravitational and kinetic energy are equal on average, so for simplicity we'll consider the former. For a wave of wavelength $\lambda$, height $h$, and width $\ell$, the gravitational potential energy of one period is
$$
E \sim \rho g \lambda \ell h ^ { 2 } .
$$
The frequency of the wave stays the same, so $\lambda$ is proportional to the wave speed,
$$
E \propto v h ^ { 2 } \propto \sqrt { D } h ^ { 2 } .
$$
Thus, when $D$ is halved, $h$ increases by a factor of $2 ^ { 1 / 4 }$. This is known as Green's law. Eventually, $h$ becomes comparable to $D$ and our expressions break down.

Remark
Textbooks commonly say that liquids can't support transverse waves, because they don't support shear stresses. But the waves considered in problem 14 are clearly transverse. This is possible because the textbook statement only applies to the internal forces of water alone. At the surface of the water, gravity provides the transverse restoring force; that's why these waves are also commonly called "gravity waves".
