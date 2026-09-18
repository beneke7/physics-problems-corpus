---
id: solution-ocr-nbpho-2008-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2008-electron]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
8. Electron (5 points)

Let us write the Newton's II law for $x$ - and $y$-components of the electrons coordinates:

$$
\begin{gathered}
m \ddot { x } = - e E _ { 0 } \omega \cos \omega t , \\
m \ddot { y } = e E _ { 0 } \sin \omega t .
\end{gathered}
$$

We can integrate these equations over time (bearing in mind that initial velocity is zero):

$$
\begin{gathered}
m \dot { x } = - e E _ { 0 } \omega ^ { - 1 } \sin \omega t , \\
m \dot { y } = e E _ { 0 } \omega ^ { - 1 } ( 1 - \cos \omega t ) .
\end{gathered}
$$

Now, we can integrate once more, bearing in mind that the initial coordinates are zero:

$$
\begin{gathered}
x = \frac { e E _ { 0 } } { m \omega ^ { 2 } } ( \cos \omega t - 1 ) \\
y = \frac { e E _ { 0 } } { m \omega ^ { 2 } } \cos \omega t + \frac { e E _ { 0 } } { \omega m } t
\end{gathered}
$$

So, the electron performs circular motion in the system of reference, moving with velocity (parallel to the $y$-axis) $u = \frac { e E _ { 0 } } { \omega m }$. The radius of the orbit is $R = \frac { e E _ { 0 } } { \omega ^ { 2 } m }$. In the laboratory system, this is a cycloid (the curve drawn by a point on the edge of a rolling disk); the distance between the neighbouring loops is $\Delta = 2 \pi u / \omega = 2 \pi R$.
