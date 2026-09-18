---
id: solution-ocr-spot-2019-s-q1
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2019-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 1 Feynman crank

This problem in mechanics is well-discussed in Feynman's book as an example to build physical intuition.
The key is to realise that each arm can only exert forces parallel to their length because the pivots are frictionless. This can be proven by taking moments about the pivots.

The other important element to keep clear in your mind is the distinction between velocity and acceleration.

$$
\begin{equation*}
F = \frac { m g } { 2 } \frac { \sqrt { L ^ { 2 } - h ^ { 2 } } } { h } \tag{a}
\end{equation*}
$$

Some failed to notice the constant $L$ introduced in the text of the problem, and left answers in terms of angles. Some careless mistakes in the trigonometry and algebra were also observed.

$$
\begin{equation*}
\frac { 1 } { 2 } u \tag{b}
\end{equation*}
$$

By symmetry, the block will move with half the speed of the wheel.
1(b)(ii) The block accelerates vertically. The vertical velocity is upwards, but the acceleration is downwards. You can get an intuition about this by thinking about how quickly the (vertical) velocity of the block changes when the arms are almost horizontal versus when the arms are almost vertical.

Many explanations about the difference in the force were not fully satisfactory, as the link was not made specifically to acceleration rather than to velocity.

$$
\begin{equation*}
v = \frac { u L } { 2 h } \tag{b}
\end{equation*}
$$

The actual velocity is in the tangential direction, so the expression is most easily obtained by considering that the horizontal velocity $\frac { u } { 2 }$ is a component of the tangential velocity. The angles are a bit tricky, especially if you do not draw your own diagram. The diagram provided has the angles close to $\pi / 4$, which can lead to confusion between sines and cosines.

$$
\begin{equation*}
a _ { \text {radial } } = \frac { v ^ { 2 } } { L } = \frac { u ^ { 2 } L } { 4 h ^ { 2 } } \tag{b}
\end{equation*}
$$


Since we know that the actual acceleration is in the vertical direction from 1(b)(ii), this radial acceleration is a component of the acceleration.

$$
\begin{gather*}
a = a _ { \text {radial } } \frac { L } { h } = \frac { u ^ { 2 } L ^ { 2 } } { 4 h ^ { 3 } } \\
F = \frac { m } { 2 } \left( g - \frac { u ^ { 2 } L ^ { 2 } } { 4 h ^ { 3 } } \right) \frac { \sqrt { L ^ { 2 } - h ^ { 2 } } } { h } \tag{b}
\end{gather*}
$$

Surprisingly many were mixed up about the signs in this last part. The acceleration of the block should be linked to the resultant force on the block, and the weight of the block is opposite in direction to the upward force from the arms.
[The original question I had in mind would have gone on to energy considerations, but this was omitted to keep the test shorter.]
