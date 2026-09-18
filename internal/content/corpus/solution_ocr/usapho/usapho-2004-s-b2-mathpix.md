---
id: solution-ocr-usapho-2004-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2004_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2004-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
B2. a. Using ₹ to represent a unit vector in the $z$-direction, $\dot { B } = \mu _ { 0 } n \vec { \varepsilon }$ for $r < b$. (It is not necessary to derive this result from Ampere's Law )

b. $$
u _ { s } = \frac { 1 } { 2 \mu _ { u } } B ^ { 2 } = \frac { \mu _ { 0 } n ^ { 2 } t ^ { 2 } } { 2 } .
$$
It is also possible to derive this result from
$$
U = \frac { 1 } { 2 } L I ^ { 2 } .
$$
If edge effects are ignored
$$
U = u _ { g } h A
$$

where $h$ is the length and $A$ is the cross-sectional area of the solenoid. Combining this with

$$
L l = N \Phi = ( n h ) ( B A )
$$

yiclds

$$
u _ { B } h A = \frac { 1 } { 2 } n h B A t .
$$

or

$$
u _ { n } = \frac { 1 } { 2 } n B I = \frac { 1 } { 2 } \mu _ { 0 } n ^ { 2 } I ^ { 2 }
$$

c. The charge per unit length on the inner cylindrical shell is $\lambda = + Q / h$.
Letting $\hat { r }$ represent a unit vector in the $r$-direction, Gauss's Law for cylindrical symmetry yields
$$
\vec { E } = + \frac { Q } { 2 \pi \varepsilon _ { 11 } h r } \hat { r } .
$$
d. $$
u _ { F } = \frac { 1 } { 7 } \varepsilon _ { n } E ^ { 2 } = \frac { Q ^ { 2 } } { 8 \pi ^ { 2 } \varepsilon _ { n } h ^ { 2 } r ^ { 2 } } .
$$
c. Use Faradays Law to find the induced electric freld at the location of each charged cylinder.
$$
\oint \vec { E } \cdot d \vec { l } = - \frac { d \Phi _ { i i } } { d l } .
$$
$\dot { E }$ is constant around a circular path, the cross-section of the cylinder, $\quad \phi \vec { E } \cdot d \vec { l } = E 2 \pi r$.
The magnetic flux is
$$
\Phi _ { R } = B A
$$
where $A$ is the enclosed area that has a magnetic field. Thus
$$
E 2 \pi r = - \Lambda \frac { d B } { d t } = - \Lambda \mu _ { 0 } n \frac { d l } { d t } .
$$
Since $I$ is decreasing at a constant rate
$$
E 2 \pi r = - \lambda \mu _ { \mathrm { n } } n \frac { \Delta } { \Delta \prime }
$$

For the inner cylinder, $r = a$ and $A = \pi a ^ { 2 }$, and

$$
E _ { n } 2 \pi a = - \pi a ^ { 2 } \mu _ { 0 } n \frac { \Delta I } { \Delta t } .
$$

Therefore

$$
E _ { a } = - \frac { \mu _ { 0 } n a } { 2 } \frac { A } { \Delta t } .
$$

In order to oppose the decrease in $I , E$ is in the same direction as $I$

$$
\dot { E } _ { \omega } = - \frac { \mu _ { 0 } \pi t a } { 2 } \frac { \Delta t } { \Delta t } \hat { \phi }
$$

For the outer cylinder, $r = c$ and $A = \pi b ^ { 2 }$, since the field $B = 0$ for $r > b$
and

$$
t _ { i } , 2 \pi t = - \pi b ^ { 2 } \mu _ { 0 } n \frac { \Delta t } { \Delta t }
$$

Therefore

$$
E _ { 1 } = - \frac { \mu _ { 0 } n b ^ { 2 } } { 2 c } \frac { \Delta t } { \Delta t } .
$$


with

$$
\dot { E } _ { c } = - \frac { \mu _ { 0 } n b b ^ { 2 } } { 2 c } \frac { \Delta } { \Delta t } \hat { \delta }
$$

Each cylinder experiences a torquc caused by the electric force.

$$
\frac { d \vec { L } } { d t } = \vec { \tau } = \vec { r } \times \vec { F } _ { b } .
$$

For the inner cylinder

$$
\frac { d L _ { a } } { d t } = a \dot { r } \times Q \left( - \frac { \mu _ { 0 } n a } { 2 } \frac { \Delta l } { \Delta t } \hat { \phi } \right) = - \frac { \mu _ { 0 } n a ^ { 2 } Q } { 2 } \frac { \Delta l } { \Delta t } \hat { z } .
$$

Since $I$ decreases at a constant rate, $L$ also changes at a constant rate.

$$
\begin{gathered}
\frac { \Delta \vec { L } _ { \omega } } { \Delta t } = - \frac { \mu _ { 0 } n a ^ { 2 } Q } { 2 } \frac { ( 0 - I ) } { \Delta t } = \\
\Delta \vec { L } _ { a } = \frac { 1 } { 2 } \mu _ { 0 } n a ^ { 2 } Q \hat { z } .
\end{gathered}
$$

For the outer cylinder $\quad \frac { d \vec { L } _ { i } } { d t } = c \hat { r } \times ( - Q ) \left( - \frac { \mu _ { 0 } n b ^ { 2 } } { 2 c } \frac { A } { \Delta t } \hat { \phi } \right) = + \frac { \mu _ { 0 } n b ^ { 2 } Q } { 2 } \frac { \Delta I } { \Delta t } \hat { z }$,
and

$$
\begin{gathered}
\frac { \Delta L _ { r } } { \Delta t } = + \frac { \mu _ { 1 } n b ^ { 2 } Q } { 2 } \frac { ( 0 - l ) } { \Delta t } \hat { 2 } \\
\Delta \vec { L } _ { r } = \frac { 1 } { 3 } \mu _ { 0 } n t b ^ { 2 } Q \dot { 2 } .
\end{gathered}
$$

f. $E = 0$ for $r < a$ and $B = 0$ for $r > b$. Using $\bar { \pi } _ { A B }$ to represent the linear momentum density

$$
\vec { \pi } _ { F A } = \varepsilon _ { 0 } \vec { b } \times \vec { B } = \varepsilon _ { 0 } \left( \frac { Q } { 2 \pi \varepsilon _ { 11 } h r } \right) \hat { r } \times \left( \mu _ { 0 } n t \right) \hat { z } = - \frac { Q \mu _ { 11 } n t } { 2 \pi h r } \hat { \phi } \quad \text { for } \quad a < r < b
$$

and

$$
\vec { \pi } _ { e u } = 0 \text { for } r < a \text { and } b < r
$$

Using $\vec { \ell } _ { B M }$ to represent the angular momentum density

$$
\vec { f } _ { r u } = \vec { r } \times \vec { \pi } _ { t w }
$$

In the region $a < r < b$,

$$
\vec { t } _ { t M } = \vec { r } \times \vec { \pi } _ { t k } = ( \hat { r } ) \times \left( - \frac { Q \mu _ { 0 } n l } { 2 \pi h r } \hat { \phi } \right) = - \frac { Q \mu _ { 0 } n l } { 2 \pi h } \hat { z } .
$$

The angular momentum density is constant in the region $a < r < b$ and zero outside. Therefore the total angular momentum originally stored in the fields is

$$
\begin{gathered}
\vec { L } _ { E , t } = \left( \text { volume containing field) } \vec { t } _ { \mathrm { EM } } \right. \\
\vec { L } _ { E w } = \left[ h \pi \left( b ^ { 2 } - a ^ { 2 } \right) \right] \left( - \frac { Q \mu _ { 0 } n t } { 2 \pi h } ; \right) = - \frac { 1 } { 2 } Q \mu _ { \mathrm { C } } n t \left( b ^ { 2 } - a ^ { 2 } \right) \hat { z }
\end{gathered}
$$

When the current is reduced to zero, this angular momentum goes to zero. Therefore the change in angular momentum is

$$
\vec { L } _ { F u } = - \frac { 1 } { 2 } Q \mu _ { 0 } n d \left( b ^ { 2 } - a ^ { 2 } \right) z .
$$
