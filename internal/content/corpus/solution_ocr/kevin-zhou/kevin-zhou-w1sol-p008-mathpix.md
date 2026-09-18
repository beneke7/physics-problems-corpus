---
id: solution-ocr-kevin-zhou-w1sol-p008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 8. [A] With a little vector calculus, the results above can be generalized to an arbitrary number of dimensions. For example, ideal waves in three dimensions obey
$$
\frac { \partial ^ { 2 } \psi } { \partial t ^ { 2 } } = v ^ { 2 } \left( \frac { \partial ^ { 2 } \psi } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } \psi } { \partial y ^ { 2 } } + \frac { \partial ^ { 2 } \psi } { \partial z ^ { 2 } } \right) = v ^ { 2 } \nabla ^ { 2 } \psi
$$
where the function $\psi ( \mathbf { r } , t )$ could stand for a variety of things, such as the pressure, density, or temperature (for a sound wave) or the electric or magnetic field (for an electromagnetic wave).
    (a) For simplicity, let's restrict to waves which have spherical symmetry, so that $\psi$ only depends on $r$ and $t$. Plug such a spherical wave into the wave equation, and simplify until you get an equation only in terms of the partial derivatives of $\psi ( r , t )$.

(b) Because the area of a sphere goes as $r ^ { 2 }$, we expect the energy density of a spherical wave to fall as $1 / r ^ { 2 }$, and therefore expect the amplitude to fall as $1 / r$. Therefore, it is useful to consider the quantity $r \psi$, which has this falloff factored out. By considering the differential equation that $r \psi$ obeys, find the general solution for $\psi ( r , t )$.

Solution. (a) To do this, we need to simplify the partial derivatives with respect to $x , y$, and $z$. We have

$$
\frac { \partial \psi } { \partial x } = \frac { \partial \psi } { \partial r } \frac { \partial r } { \partial x }
$$

where these partial derivatives are all keeping the other spatial variables $y$ and $z$ constant. To evaluate $\partial r / \partial x$, we note that

$$
r ^ { 2 } = x ^ { 2 } + y ^ { 2 } + z ^ { 2 }
$$

and take $\partial / \partial x$ of both sides, giving

$$
2 r \frac { \partial r } { \partial x } = 2 x
$$

from which we conclude

$$
\frac { \partial r } { \partial x } = \frac { x } { r } .
$$

Plugging this back in, we conclude

$$
\frac { \partial \psi } { \partial x } = \frac { x } { r } \frac { \partial \psi } { \partial r } .
$$

Of course, we actually want the second spatial derivative, which is

$$
\frac { \partial ^ { 2 } \psi } { \partial x ^ { 2 } } = \frac { 1 } { r } \frac { \partial \psi } { \partial r } - \frac { x ^ { 2 } } { r ^ { 3 } } \frac { \partial \psi } { \partial r } + \frac { x } { r } \frac { \partial } { \partial x } \frac { \partial \psi } { \partial r } = \frac { 1 - x ^ { 2 } / r ^ { 2 } } { r } \frac { \partial \psi } { \partial r } + \frac { x ^ { 2 } } { r ^ { 2 } } \frac { \partial ^ { 2 } \psi } { \partial r ^ { 2 } }
$$

where we used the product rule. By similar logic for the other components, we conclude

$$
\frac { \partial ^ { 2 } \psi } { \partial t ^ { 2 } } = v ^ { 2 } \left( \frac { 3 - \left( x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \right) / r ^ { 2 } } { r } \frac { \partial \psi } { \partial r } + \frac { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } { r ^ { 2 } } \frac { \partial ^ { 2 } \psi } { \partial r ^ { 2 } } \right) = v ^ { 2 } \left( \frac { 2 } { r } \frac { \partial \psi } { \partial r } + \frac { \partial ^ { 2 } \psi } { \partial r ^ { 2 } } \right) .
$$

Of course, a shortcut to this result would be to just look up the formula for the Laplacian in spherical coordinates, but it's good to go through this once in your life.

(b) We notice that
$$
\frac { \partial ^ { 2 } } { \partial t ^ { 2 } } ( r \psi ) = v ^ { 2 } \frac { \partial ^ { 2 } } { \partial r ^ { 2 } } ( r \psi )
$$
by the product rule. That is, the quantity $r \psi$ obeys the ordinary, one-dimensional wave equation, for which we already know the general solution! We thus conclude
$$
\psi ( r , t ) = \frac { f ( r - v t ) + g ( r + v t ) } { r } .
$$
If we also want the wave not to blow up at $r = 0$, we additionally need $f ( - v t ) + g ( v t ) = 0$. By the way, an analogous trick does not work for a cylindrical wave (which is equivalent to a wave spreading out in two dimensions). The quantity $\sqrt { r } \psi$ does not maintain its profile, but rather develops a tail behind it. More generally, the trick above only works in an odd number of dimensions.

## 2 Standing Waves


Idea 3
A standing wave is a solution to the wave equation of the form

$$
y ( x , t ) = f ( x ) \cos ( \omega t ) .
$$

Typically, only discrete values of $\omega$ are possible, with the allowed values depending on the boundary conditions. If the setup is translationally symmetric, then $f ( x )$ will be sinusoidal. If you want to get some intuition, try playing with this PhET simulation.
