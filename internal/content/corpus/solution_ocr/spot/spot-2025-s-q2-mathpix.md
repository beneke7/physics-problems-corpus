---
id: solution-ocr-spot-2025-s-q2
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2025-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. A pendulum with an inextensible string of length $\ell$ and mass $m$ is attached to a spring of zero natural length and stiffness $k$. The string and spring are fixed to two perpendicular walls at distances $l$ from the corner, as shown in the figure.
![](../../../figures/solution-ocr/c01b86b635cd71e3c99f0da8.jpg)
    (a) At equilibrium, $\theta = \theta _ { 0 }$. Find $\theta _ { 0 }$.
Solution: The fundamental simplification is that for a zero rest length spring, its force is simply given by $\vec { F } = - k \vec { r }$, so we may directly resolve components to get:
$$
\begin{aligned}
k \ell ( 1 - \cos \theta ) & = T \cos \theta \\
k \ell ( 1 - \sin \theta ) + m g & = T \sin \theta
\end{aligned}
$$
Hence, we have:
$$
\begin{aligned}
k \ell ( 1 - \cos \theta ) \tan \theta & = k \ell ( 1 - \sin \theta ) + m g \\
\tan \theta - \sin \theta & = 1 - \sin \theta + \frac { m g } { k \ell }
\end{aligned}
$$
which simplifies to $\theta _ { 0 } = \tan ^ { - 1 } \left( 1 + \frac { m g } { k \ell } \right)$.
Alternatively, many correct answers used an energy approach. The potential energy in the system is given by:
$$
\begin{aligned}
U & = \frac { 1 } { 2 } k \ell ^ { 2 } \left[ ( 1 - \cos \theta ) ^ { 2 } + ( 1 - \sin \theta ) ^ { 2 } \right] - m g \ell \sin \theta \\
& = \frac { 1 } { 2 } k \ell ^ { 2 } ( 3 - 2 \cos \theta - 2 \sin \theta ) - m g \ell \sin \theta
\end{aligned}
$$
At the equilibrium angle, the potential energy is at a minimum.
$$
\begin{gathered}
\frac { d U } { d \theta } = k \ell ^ { 2 } ( \sin \theta - \cos \theta ) - m g \ell \cos \theta = 0 \\
\tan \theta _ { 0 } = \frac { k l ^ { 2 } + m g \ell } { k \ell ^ { 2 } } \\
\theta _ { 0 } = \tan ^ { - 1 } \left( 1 + \frac { m g } { k \ell } \right)
\end{gathered}
$$
    (b) Find the angular frequency of small oscillations of the system about equilibrium. If required, leave your answer in terms of $\theta _ { 0 }$.

Solution: The energy approach leads most directly to the final answer. Consider the kinetic energy of the mass $T = \frac { 1 } { 2 } m l ^ { 2 } \dot { \theta } ^ { 2 }$. Then, differentiating the total energy, we obtain:

$$
\begin{aligned}
E & = \frac { 1 } { 2 } m l ^ { 2 } \dot { \theta } ^ { 2 } + \frac { 1 } { 2 } k \ell ^ { 2 } ( 3 - 2 \cos \theta - 2 \sin \theta ) - m g \ell \sin \theta \\
0 & = m l ^ { 2 } \ddot { \theta } \ddot { \theta } + k l ^ { 2 } ( \sin \theta - \cos \theta ) \dot { \theta } - m g l \cos \theta \dot { \theta }
\end{aligned}
$$

We consider small displacements $\delta \theta$ about the equilibrium point $\theta _ { 0 }$.

$$
\begin{aligned}
\ddot { \theta } & = - \frac { k } { m } ( \sin \theta - \cos \theta ) + \frac { g } { l } \cos \theta \\
& = - \left( \frac { k } { m } \left( \cos \theta _ { 0 } + \sin \theta _ { 0 } \right) + \frac { g } { l } \sin \theta _ { 0 } \right) \delta \theta \\
\omega & = \sqrt { \frac { k } { m } \left( \cos \theta _ { 0 } + \sin \theta _ { 0 } \right) + \frac { g } { l } \sin \theta _ { 0 } }
\end{aligned}
$$
