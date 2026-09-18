---
id: solution-ocr-nbpho-2019-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2019-satellite]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Satellite (8 points) - Taavet Kalda.
i) (1 point) From the energy conservation law,

$$
\frac { m v _ { m } ^ { 2 } } { 2 } - \frac { G M _ { \oplus } m } { r _ { \oplus } } = 0
$$

hence

$$
v _ { m } = \sqrt { \frac { 2 G M _ { \oplus } } { r _ { \oplus } } } .
$$

ii) (2 points) Let the speed of the satellite just after leaving Earth's gravitational field be $v _ { 1 }$. From energy conservation,

$$
\frac { m v _ { 0 } ^ { 2 } } { 2 } - \frac { G M _ { \oplus } m } { r _ { \oplus } } = \frac { m v _ { 1 } ^ { 2 } } { 2 } ,
$$

where $M _ { \oplus }$ is Earth's mass. Furthermore, we have $g = \frac { G M _ { \oplus } } { r _ { \oplus } ^ { 2 } }$. Thus,

$$
v _ { 1 } = \sqrt { v _ { 0 } ^ { 2 } - \frac { 2 G M _ { \oplus } } { r _ { \oplus } } } = \sqrt { v _ { 0 } ^ { 2 } - 2 g r _ { \oplus } } .
$$

iii) (2.5 points) The average solar irradiance can be expressed as

$$
I _ { \mathrm { avg } } = \frac { 1 } { T } \int _ { 0 } ^ { T } I ( t ) \mathrm { d } t
$$

where $I ( t )$ the solar irradiance at time $t$. We can express the solar irradiance as $I ( t ) =$ $\frac { L _ { \odot } } { 4 \pi r ( t ) ^ { 2 } }$. Furthermore, it might be more convenient to integrate over the angle instead of time so we can use $\mathrm { d } t = \frac { \mathrm { d } \alpha } { \omega ( \alpha ) }$, where $\omega$ is the angular velocity of the satellite. This yields

$$
I _ { \text {avg } } = \frac { 1 } { T } \int _ { 0 } ^ { 2 \pi } \frac { L _ { \odot } } { 4 \pi r ^ { 2 } } \frac { \mathrm {~d} \alpha } { \omega } = \frac { L _ { \odot } } { 4 \pi T } \int _ { 0 } ^ { 2 \pi } \frac { \mathrm {~d} \alpha } { \omega r ^ { 2 } } .
$$

Note that the denominator in the integrand is very similar to the angular momentum of the satellite. Indeed, the angular momentum is $J = m v r = m \omega r ^ { 2 } =$ Const. Thus,

$$
I _ { \text {avg } } = \frac { L _ { \odot } } { 4 \pi T } \int _ { 0 } ^ { 2 \pi } \frac { \mathrm {~d} \alpha m } { J } = \frac { L _ { \odot } m } { 4 \pi T J } \int _ { 0 } ^ { 2 \pi } \mathrm {~d} \alpha = \frac { L _ { \odot } m } { 2 T J } .
$$

iv) (2.5 points) Since $L _ { \odot }$ and $m$ are constant, we need to minimise the quantity $T J$. Note that the minimal angular momentum corresponds to the case when the satellite is launched directly opposite to the motion of Earth. It turns out that this also corresponds to the minimal orbital period. Let $\vec { v } _ { 2 }$ be the satellite's velocity in Sun's frame. Then $\vec { v } _ { 2 } =$ $\vec { v } _ { 1 } - \vec { v } _ { \oplus }$, where $v _ { \oplus } = \sqrt { \frac { G M _ { \odot } } { R _ { \oplus } } }$ is Earth's velocity. For convenience, let's write $x = \frac { v _ { 2 } } { v _ { \oplus } }$. Consider the total energy of an elliptical orbit $E _ { \text {tot } } = - \frac { G M _ { \odot } m } { 2 a }$. On the other hand, the total energy is $E _ { \text {tot } } = \frac { m v _ { 2 } ^ { 2 } } { 2 } - \frac { G M _ { \odot } m } { R _ { \oplus } }$. combining the two equations and rearranging, $\frac { R _ { \oplus } } { a } =$ $2 - \frac { v _ { 2 } ^ { 2 } R _ { \oplus } } { G M _ { \oplus } } = 2 - x ^ { 2 }$. From Kepler's III Law, $\frac { T ^ { 2 } } { a ^ { 3 } } = \frac { 4 \pi ^ { 2 } } { G M _ { \odot } }$. Thus, $T = \frac { 2 \pi R _ { \oplus } ^ { 3 } } { \sqrt { G M _ { \odot } } } \left( 2 - x ^ { 2 } \right) ^ { - 3 / 2 }$. As we can see, in order to minimise $T , v _ { 2 }$ needs to be minimal as well.
In conclusion, $I _ { \text {avg } }$ is maximal when the satellite is launched directly against the motion of Earth. The corresponding value for $I _ { \text {avg } }$ is

$$
\begin{gathered}
I _ { \text {avg } } = \frac { L _ { \odot } } { 4 \pi R _ { \oplus } ^ { 2 } } \sqrt { \frac { G M _ { \odot } } { R _ { \oplus } } } \frac { 1 } { v _ { 2 } } \left( 2 - x ^ { 2 } \right) ^ { 3 / 2 } = \\
\frac { L _ { \odot } } { 4 \pi R _ { \oplus } ^ { 2 } } \frac { \left( 2 - x ^ { 2 } \right) ^ { 3 / 2 } } { x } ,
\end{gathered}
$$

where $x = \sqrt { \frac { R _ { \oplus } } { G M _ { \odot } } } \sqrt { v _ { 0 } ^ { 2 } - 2 g r _ { \oplus } } - 1$.
