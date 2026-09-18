---
id: solution-ocr-kevin-zhou-m8sol-p028
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m8-p028]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 28. In this problem, we'll go through Laplace's slick derivation of Kepler's first law. Throughout, we assume the orbit takes place in the $x y$ plane, with the Sun at the origin.
    (a) Show that
$$
\ddot { x } = - \frac { \gamma x } { r ^ { 3 } } , \quad \ddot { y } = - \frac { \gamma y } { r ^ { 3 } }
$$
where $\gamma$ is a constant that depends on the parameters.
    (b) Show that
$$
\frac { d } { d t } \left( r ^ { 3 } \ddot { x } \right) = - \gamma \dot { x } , \quad \frac { d } { d t } \left( r ^ { 3 } \ddot { y } \right) = - \gamma \dot { y } .
$$
    (c) Show that
$$
\frac { d } { d t } \left( r ^ { 3 } \ddot { r } \right) = - \gamma \dot { r } .
$$
(Hint: this can get messy. As a first step, try showing the left-hand side is equal to $\left( r ^ { 2 } / 2 \right) d ^ { 3 } \left( r ^ { 2 } \right) / d t ^ { 3 }$. You will have to switch variables to $x$ and $y$ and then switch back; for these purposes it's useful to use the results of part (a), and the definition $r ^ { 2 } = x ^ { 2 } + y ^ { 2 }$.)

(d) Define $\psi ( t ) = r ( t ) ^ { 3 }$. In parts (b) and (c), we have shown that the differential equation
$$
\frac { d } { d t } \left( \psi ( t ) \frac { d u } { d t } \right) = - \gamma u
$$
has three solutions, namely $\dot { x } , \dot { y }$, and $\dot { r }$. Any second-order linear differential equations only has two independent solutions. If $\dot { x }$ and $\dot { y }$ are not independent, the orbit is simply a line, which is trivial. Assuming that doesn't happen, they are independent, so $\dot { r }$ must be a linear combination of them,
$$
\dot { r } = A \dot { x } + B \dot { y } .
$$
Use this result to argue that the orbit is a conic section.

Solution. (a) This just follows from $F = m a$. In terms of the usual parameters, $\gamma = G M$.

(b) This immediately follows from clearing denominators in the results of part (a) and differentiating both sides.
(c) Following the hint, we have
$$
\frac { d } { d t } \left( r ^ { 3 } \ddot { r } \right) = r ^ { 3 } \dddot { r } + 3 r ^ { 2 } \dot { r } \ddot { r } = \frac { 1 } { 2 } r ^ { 2 } \frac { d ^ { 3 } } { d t ^ { 3 } } \left( r ^ { 2 } \right) = r ^ { 2 } \frac { d ^ { 2 } } { d t ^ { 2 } } ( r \dot { r } ) .
$$
At this point, we switch back to $x$ and $y$. By differentiating $r ^ { 2 } = x ^ { 2 } + y ^ { 2 }$,
$$
r \dot { r } = x \dot { x } + y \dot { y } .
$$
Plugging this in gives
$$
\frac { d } { d t } \left( r ^ { 3 } \ddot { r } \right) = r ^ { 2 } \frac { d ^ { 2 } } { d t ^ { 2 } } ( x \dot { x } + y \dot { y } ) = r ^ { 2 } \frac { d } { d t } \left( x \ddot { x } + y \ddot { y } + \dot { x } ^ { 2 } + \dot { y } ^ { 2 } \right) .
$$
We see that we'll have a lot of factors involving $\ddot { x }$ and $\ddot { y }$, but we know how to handle these using part (a). Using part (a) several times, we have
$$
\dot { x } \ddot { x } + \dot { y } \ddot { y } = - \frac { \gamma } { r ^ { 3 } } ( x \dot { x } + y \dot { y } ) = - \frac { \gamma } { r ^ { 3 } } ( r \dot { r } ) = - \frac { \gamma \dot { r } } { r ^ { 2 } }
$$
and
$$
x \ddot { x } + y \ddot { y } = - \frac { \gamma } { r ^ { 3 } } \left( x ^ { 2 } + y ^ { 2 } \right) = - \frac { \gamma } { r } .
$$
Plugging these results in, we find
$$
\frac { d } { d t } \left( r ^ { 3 } \ddot { r } \right) = - r ^ { 2 } \left( \frac { d } { d t } \left( \frac { \gamma } { r } \right) + \frac { 2 \gamma \dot { r } } { r ^ { 2 } } \right) = - \gamma \dot { r }
$$
just as desired.
(d) Integrating both sides,
$$
r = A x + B y + C .
$$
But then squaring both sides shows that the equation of the orbit is just a quadratic in $x$ and $y$, which is precisely the form of a conic section in Cartesian coordinates. You can also show that the focus is at the origin, though this requires a bit more knowledge about conics.

This question was inspired by this paper, which has a few more derivations of Kepler's first law.


## 6 Mechanics and Geometry

For dessert, we'll consider a few cute problems that relate statics to geometry.
