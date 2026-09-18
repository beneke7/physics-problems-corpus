---
id: solution-ocr-usapho-2002-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2002_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2002-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
B1. (10) a. The semicircular hoop's moment of inertia about its center is $I = m R ^ { 2 }$. Using the parallel axis theorem to find the moment of inertia about the center of mass $I _ { \text {cm } }$

$$
I = I _ { c m } + m h ^ { 2 }
$$

where $h$ is the perpendicular distance between an axis through the center of mass and a parallel axis through an arbitrary point.

In this case

$$
\begin{gathered}
h = \frac { 2 R } { \pi } \\
I _ { \mathrm { cm } } = I - m h ^ { 2 } = m R ^ { 2 } - m \left( \frac { 2 R } { \pi } \right) ^ { 2 } = m R ^ { 2 } \left( 1 - \frac { 4 } { \pi ^ { 2 } } \right)
\end{gathered}
$$

(20) b. Finding the moment of inertia about the stationary point, the point where the hoop is in contact with the surface.

$$
I = I _ { \mathrm { cm } } + m L ^ { 2 } = m R ^ { 2 } \left( 1 - \frac { 4 } { \pi ^ { 2 } } \right) + m L ^ { 2 } .
$$

Using the Law of cosines to find $L$

$$
L ^ { 2 } = R ^ { 2 } + \left( \frac { 2 R } { \pi } \right) ^ { 2 } - \frac { 4 R ^ { 2 } } { \pi } \cos \theta .
$$

Substituting into the expression for $I$

$$
\begin{gathered}
I = m R ^ { 2 } \left( 1 - \frac { 4 } { \pi ^ { 2 } } \right) + m \left( R ^ { 2 } + \left( \frac { 2 R } { \pi } \right) ^ { 2 } - \frac { 4 R ^ { 2 } } { \pi } \cos \theta \right) \\
I = m R ^ { 2 } \left( 1 - \frac { 4 } { \pi ^ { 2 } } + 1 + \frac { 4 } { \pi ^ { 2 } } - \frac { 4 } { \pi } \cos \theta \right) = m R ^ { 2 } \left( 2 - \frac { 4 } { \pi } \cos \theta \right) .
\end{gathered}
$$

For small amplitude oscillations (keeping only terms through first order in $\theta$

$$
\cos \theta = 1 \quad \text { and } \quad I \approx 2 m R ^ { 2 } \left( 1 - \frac { 2 } { \pi } \right) .
$$

The restoring torque about the stationary point is $\quad \tau = - m g d = - m g \left( \frac { 2 R } { \pi } \right) \sin \theta = - \frac { 2 m g R } { \pi } \theta$, where the small angle approximation $\sin \theta \approx \theta$ has been used. Combining the last two equations in

$$
\tau = I \alpha ,
$$

yields

$$
- \frac { 2 m g R } { \pi } \theta \approx 2 m R ^ { 2 } \left( 1 - \frac { 2 } { \pi } \right) \alpha .
$$


Comparing this with the defining equation of simple harmonic motion $- \omega ^ { 2 } x = a$, gives an expression for $\omega ^ { 2 }$.

$$
\omega ^ { 2 } = \frac { 2 m g R } { \pi 2 m R ^ { 2 } \left( 1 - \frac { 2 } { \pi } \right) } = \frac { g } { R \pi \left( 1 - \frac { 2 } { \pi } \right) } = \frac { g } { R ( \pi - 2 ) } .
$$

For the period $T _ { \text {boslip } }$

$$
T _ { 00 \text { slif } } = \frac { 2 \pi } { \omega } = \frac { 2 \pi } { \sqrt { \frac { g } { R ( \pi - 2 ) } } } = 2 \pi \sqrt { \frac { R ( \pi - 2 ) } { g } }
$$

(20) c. There is no horizontal force. The center of mass does not move from side to side. The ycoordinate of the center of mass is

$$
y = R - \frac { 2 R } { \pi } \cos \theta = R - \frac { 2 R } { \pi } \left( 1 - \frac { \theta ^ { 2 } } { 2 } + \ldots \right) \approx R - \frac { 2 R } { \pi }
$$

including only terms through first order in $\theta$. To this approximation, the vertical position of the center of mass is constant and its acceleration is zero as well. Thus

$$
\sum F _ { y } = N - m g = m a _ { y } = 0
$$

or

$$
N \approx m g .
$$

Taking torques about the center of mass

$$
\tau = - N d = - N \frac { 2 R } { \pi } \sin \theta \approx - \frac { 2 m g R } { \pi } \theta
$$

where we have once again used the small angle approximation $\sin \theta = \theta$.

$$
\begin{aligned}
\tau & = I _ { c m } \alpha \\
- \frac { 2 m g R } { \pi } \theta & = m R ^ { 2 } \left( 1 - \frac { 4 } { \pi ^ { 2 } } \right) \alpha
\end{aligned}
$$

Comparing this with the defining equation of simple harmonic motion $- \omega ^ { 2 } x = a$, gives an expression for $\omega ) ^ { 2 }$.

$$
\omega ^ { 2 } = \frac { 2 m g R } { \pi m R ^ { 2 } \left( 1 - \frac { 4 } { \pi ^ { 2 } } \right) } = \frac { 2 g } { R \pi \left( 1 - \frac { 4 } { \pi ^ { 2 } } \right) } = \frac { 2 g \pi } { R \left( \pi ^ { 2 } - 4 \right) } .
$$

For the period $T _ { \text {slip } }$

$$
T _ { \mathrm { slip } } = \frac { 2 \pi } { \omega } = \frac { 2 \pi } { \sqrt { \frac { 2 g \pi } { R \left( \pi ^ { 2 } - 4 \right) } } } = 2 \pi \sqrt { \frac { R \left( \pi ^ { 2 } - 4 \right) } { 2 g \pi } } .
$$

The ratio of periods is $\frac { T _ { \text {slip } } } { T _ { \text {ao slip } } } = \frac { 2 \pi \sqrt { \frac { R \left( \pi ^ { 2 } - 4 \right) } { 2 g \pi } } } { 2 \pi \sqrt { \frac { R ( \pi - 2 ) } { g } } } = \sqrt { \frac { R \left( \pi ^ { 2 } - 4 \right) g } { 2 g \pi R ( \pi - 2 ) } } = \sqrt { \frac { ( \pi - 2 ) ( \pi + 2 ) } { 2 \pi ( \pi - 2 ) } } = \sqrt { \frac { \pi + 2 } { 2 \pi } }$
