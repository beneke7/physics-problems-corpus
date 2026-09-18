---
id: solution-ocr-nbpho-2019-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2019-roller]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Roller (8 points) - Lasse Frantti (iv,v: Jaan Kalda).(Solution of parts iv and v: Taavet Kalda).
i) (1 point) If there is no friction between the cyinder and the board, the cylinder will not rotate, and we have a simple spring-block oscillator, $T _ { 0 } = 2 \pi \sqrt { M / k }$.
ii) (1 point)

Because the cylinder is not slipping, it's rotating about the point of contact with the ground. The moment of inertia with respect to the contact point is $I = M r ^ { 2 } + \frac { 1 } { 2 } M r ^ { 2 } =$ $\frac { 3 } { 2 } M r ^ { 2 }$. The angular acceleration $\alpha$ and accel- eration $a$ are related by $a = \alpha r$. The equation of motion therefore reads

$$
I \alpha = F r = - k x r .
$$

Simplifying,

$$
\frac { 3 } { 2 } M a = - k x .
$$

This corresponds to a harmonic oscillator with a period of

$$
T = \frac { 2 \pi } { \sqrt { \frac { 2 } { 3 } \frac { k } { M } } } = 2 \pi \sqrt { \frac { 3 } { 2 } \frac { M } { k } } .
$$

iii) (2 points) The motion of the cylinder is sinusoidal:

$$
x = A \sin \left( \sqrt { \frac { 2 } { 3 } \frac { k } { M } } t \right) .
$$

From the horisontal force balance,

$$
- k x + F _ { \mu } = M a ,
$$

so the frictional force is linearly dependent on the acceleration and given by

$$
F _ { \mu } = - \frac { 1 } { 2 } M a .
$$

The acceleration is

$$
a = \ddot { x } = - \frac { 2 } { 3 } \frac { k } { M } A \sin ( \omega t ) .
$$

Maximal frictional force is given by

$$
F _ { \mu } ^ { \max } = \mu M g = \frac { 1 } { 2 } M \cdot \frac { 2 } { 3 } \frac { k } { M } A \rightarrow A < \frac { 3 \mu M g } { k } .
$$

Or in other words,

$$
A _ { \star } = \frac { 3 \mu M g } { k } .
$$

iv) (2 points) The equation of motion still reads

$$
- k x + F _ { \mu } = M \ddot { x } ,
$$

but now, $F _ { \mu }$ is equal to $M g \mu$ for most of the motion so it can be treated as a constant (the length of time where it's not equal to that gets proportionally smaller as $A _ { 0 }$ is increased). Rewriting,

$$
- k \left( x - \frac { F _ { \mu } } { k } \right) = M \ddot { x } .
$$

We see that the cylinder undergoes sinusoidal point around $x = \frac { F _ { \mu } } { k }$ but because $A _ { 0 } \gg$ $A _ { \star }$, this is negligible.

The rotational equation of motion yields $\frac { 1 } { 2 } M r ^ { 2 } \alpha = r F _ { \mu } = r M g \mu$ so $\alpha = \frac { 2 } { M r } F _ { \mu }$. Since the direction of the frictional force is constant during $0 \leq t \leq T / 2$, we have $\omega =$ $\frac { 2 } { M r } F _ { \mu } t$ and this is maximal at $t = T / 2$ so

$$
\omega _ { \max } = \frac { g \mu T } { r } .
$$

v) (2 points) From the last part, we saw that $\epsilon$ is constant but opposite in sign for $0 < t <$ $T / 2$ and $T / 2 < t < T$ with the magnitude equal to $\epsilon r = 2 g \mu$. The linear acceleration, on the other hand, follows harmonical motion. From, $x = A _ { 0 } \cos \left( \sqrt { \frac { k } { M } } t \right) , a = \ddot { x } =$ $- \frac { k } { M } A \cos ( 2 \pi t / T )$. The approximate plots are shown in the figures below.
![](../../../figures/solution-ocr/e11457cf69949dd44364850e.jpg)
![](../../../figures/solution-ocr/ae8d14d0c51d7c304cd3bb0c.jpg)
