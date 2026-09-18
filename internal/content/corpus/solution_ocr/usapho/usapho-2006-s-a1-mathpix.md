---
id: solution-ocr-usapho-2006-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2006_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2006-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question 1

Sooner or later we need to find both the location of the center of mass $r$ and the rotational inertia $I$ about the axis of rotation. Let's do these two things first.

We can treat the top disk as a solid disk of mass $M _ { x }$ with a hole of mass $M _ { A }$ cut out. Since the radius of the hole is half the radius of the disk, we can conclude that

$$
\begin{equation*}
M _ { i } = \frac { \pi ( R / 2 ) ^ { 2 } } { \pi R ^ { 2 } } M _ { s } - \frac { 1 } { 4 } M _ { s } . \tag{\{A1-1\}}
\end{equation*}
$$

so

$$
\begin{equation*}
M - M _ { s } - M _ { h } = \frac { 3 } { 4 } M _ { s } = 3 M _ { h } \tag{Al-2}
\end{equation*}
$$

By symmetry the center of muss will be on a line contecting the centers of both the hole and the disk, and must be located a distance $r$ to the right of the center of the disk, where

$$
\begin{equation*}
M _ { 、 } ( 0 ) = M ( - \eta ) + M _ { h } \frac { R } { 2 } . \tag{А1-3}
\end{equation*}
$$

Then

$$
\begin{equation*}
r - \frac { R } { 6 } \tag{A1-4}
\end{equation*}
$$

We can apply a similar approach to find the rotational inertia about the axis of rotation:

$$
\begin{equation*}
f _ { S } - I + t _ { h } , \tag{\(\{ A 1 - 5 \}\)}
\end{equation*}
$$

where $I _ { s }$ is the rotational inertia of a solid disk and $I _ { h }$ is the rotational inertia of the part that used to be in the hole both measured about the axis of rotation. $I _ { s }$ is easy.

$$
\begin{equation*}
I _ { 3 } = \frac { 1 } { 2 } M I _ { s } R ^ { 2 } - \frac { 2 } { 3 } M R ^ { 2 } \tag{A}
\end{equation*}
$$

while $I _ { h }$ requires an application of the parallel axis :heorem,

$$
\begin{equation*}
I _ { h } = \frac { 1 } { 2 } M _ { h } \left( \frac { R } { 2 } \right) ^ { 2 } + M _ { h } \left( \frac { R } { 2 } \right) ^ { 2 } - \frac { 1 } { 8 } M R ^ { 2 } . \tag{Al-7}
\end{equation*}
$$


Finallv.

$$
\begin{equation*}
l = i . \quad h _ { h } = { } _ { 24 } ^ { 13 } M R ^ { 2 } . \tag{A}
\end{equation*}
$$

Now consider the motion of the center of mass. It is rotating about the axis of rotation with an angular speed $\omega$, so that the maymitude of the acceleration of the center of mass is given by

$$
\begin{equation*}
a = r \omega ^ { 2 } . \tag{A1-9}
\end{equation*}
$$

The net force on the disk when the center of mass is al the top is then given by

$$
\begin{equation*}
F _ { \mathrm { net } } = M g \quad F _ { \mathrm { N } } = M r _ { \omega ^ { \prime } } { } ^ { 2 } \tag{A1-10}
\end{equation*}
$$

where $F _ { \mathrm { N } }$ is the normal force. The disk begins to hop when the normal force is zero, so

$$
\begin{equation*}
\omega ^ { 2 } = \frac { g } { r } = \frac { 6 g } { R } . \tag{A1-11}
\end{equation*}
$$

The total kinetic energy is then

$$
\begin{equation*}
K = \frac { 1 } { 2 } I w ^ { 2 } - \frac { 1 } { 2 } \left( \frac { 13 } { 24 } M R ^ { 2 } \right) \left( \frac { 6 g } { R } \right) = \frac { 13 } { 8 } M g R . \tag{A112}
\end{equation*}
$$
