---
id: solution-ocr-kevin-zhou-r2sol-p015
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r2-p015]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 15. Consider a cube of initial mass $m$ and side length $L$ in free space. In the lab frame, the cube has an initial velocity $v _ { 0 } \ll c$ to the right, and plane electromagnetic waves of intensity $I$ (in units of $\mathrm { W } / \mathrm { m } ^ { 2 }$ ) approach the cube from the left and right, striking two faces of it head on. Find the displacement of the cube after a long time, for three cases:
    (a) The left and right faces of the cube are perfectly black, and emit negligible thermal radiation. (This is the easiest case, but it's actually extremely unrealistic; can you see why?)
    (b) The left and right faces of the cube are perfectly black. In addition, they are kept in thermal

equilibrium with each other, and emit thermal radiation so that the mass-energy of the cube stays constant in the cube's frame.
(c) The cube is perfectly reflective.

For simplicity, you may always work to lowest order in $v / c$.
Solution. We'll set $c = 1$ for convenience, and expand everything to lowest order in $v$. There are many ways to do this problem, though each one requires some careful bookkeeping. For instance, you can do it like example 6, by transforming between the lab and cube frames. For variety, I'll present a slightly different method here.

(a) This can be done without leaving the lab frame. Since the cube is running into one of the beams and directly away from the other, the rate of momentum transfer from each beam is multiplied by $1 + v$ and $1 - v$, respectively. Then we have
$$
\frac { d p } { d t } = - 2 I L ^ { 2 } v .
$$
Integrating both sides with respect to time, using $p _ { 0 } \approx m v _ { 0 }$, we get $m v _ { 0 } = 2 I L ^ { 2 } \Delta x$, so that
$$
\Delta x = \frac { m v _ { 0 } } { 2 I L ^ { 2 } } .
$$
The reason this is unrealistic is that during this process, the cube will absorb an incredible amount of energy. The velocity decays on the characteristic time $m / \left( 2 I L ^ { 2 } \right)$, which means that during this time, the cube absorbs a total energy of order $m$, which is enough to change its rest mass by a significant amount! The above result is still correct, because it only uses the fact that the initial momentum is $m v _ { 0 }$ and the final momentum is zero, but any real object would either get extremely hot and start emitting energy, or reflect away the energy. Those are the cases we consider in the next two parts.
(b) We start by working in the cube frame. In this frame, the light beam coming in from the right has its intensity enhanced by two powers of $1 + v$. To see this, I find it helpful to imagine the light beam as made of discrete photons.
Suppose that in the lab frame, each photon had frequency $f$, and they happened to be spaced a wavelength $\lambda = 1 / f$ apart. In the cube frame, each photon incoming from the right has frequency $f ^ { \prime } = \sqrt { ( 1 + v ) / ( 1 - v ) } f \approx ( 1 + v ) f$. In addition, the spacing between them is now $1 / f ^ { \prime }$, so the rate at which they hit the cube is enhanced by another factor of $1 + v$. Therefore, the cube sees an incoming intensity $I ^ { \prime } \approx ( 1 + 2 v ) I$.
Of course, this isn't exactly how photons work, but the transformation of intensity doesn't depend on exactly what the beam is made of, so this has to be the right answer in general. Similarly, the cube sees an incoming intensity of $( 1 - 2 v ) I$ from the left.
So, if the cube didn't emit any radiation, then in its own frame, its energy $E ^ { \prime }$ and momentum $p ^ { \prime }$ satisfy
$$
\frac { d E ^ { \prime } } { d t } = 2 I L ^ { 2 } , \quad \frac { d p ^ { \prime } } { d t } = - 4 I L ^ { 2 } v .
$$
Transforming back to the lab frame using the Lorentz transformations at first order in $v$,
$$
\frac { d p } { d t } \approx \frac { d p ^ { \prime } } { d t } + v \frac { d E ^ { \prime } } { d t } = - 2 I L ^ { 2 } v
$$

where we neglected time dilation since it's second order in $v$. This is as we found in part (a). Now let's add on the radiation emission. In the cube frame, an equal intensity $I$ is emitted from both sides, so that
$$
\frac { d E ^ { \prime } } { d t } = 0 , \quad \frac { d p ^ { \prime } } { d t } = - 4 I L ^ { 2 } v .
$$
Transforming back to the lab frame, we have
$$
\frac { d p } { d t } = - 4 I L ^ { 2 } v
$$
from which we conclude
$$
\Delta x = \frac { m v _ { 0 } } { 4 I L ^ { 2 } } .
$$
This is smaller than in part (a), which makes sense. Thermal radiation by itself can't change the cube's velocity in any frame. However, by removing energy, it reduces the cube's inertia (or rather, prevents the inertia from increasing), making it easier to slow down.
(c) In this case, a similar argument to the above gives
$$
\frac { d E ^ { \prime } } { d t } = 0 , \quad \frac { d p ^ { \prime } } { d t } = - 8 I L ^ { 2 } v .
$$
We now get twice the force as before, since the photon momenta get flipped upon reflection. Going back to the lab frame,
$$
\frac { d p } { d t } = - 8 I L ^ { 2 } v , \quad \Delta x = \frac { m v _ { 0 } } { 8 I L ^ { 2 } } .
$$
Of course, it is also possible to get this answer by using the result of example 6 twice.
