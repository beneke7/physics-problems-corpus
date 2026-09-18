---
id: solution-ocr-usapho-2021-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2021-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

## Toffee Pudding

A box of mass $m$ is at rest on a horizontal floor. The coefficients of static and kinetic friction between the box and the floor are $\mu _ { 0 }$ and $\mu$ (less than $\mu _ { 0 }$ ), respectively. One end of a spring with spring constant $k$ is attached to the right side of the box, and the spring is initially held at its relaxed length. The other end of the spring is pulled horizontally to the right with constant velocity $v _ { 0 }$. As a result, the box will move in fits and starts. Assume the box does not tip over.

a. Calculate the distance $s$ that the spring is stretched beyond its rest length when the box is just about to start moving.

## Solution

This is when the spring force equals the maximal static friction, $k s = \mu _ { 0 } m g$, so $s = \mu _ { 0 } m g / k$.

b. Let the box start at $x = 0$, and let $t = 0$ be the time the box first starts moving. Find the acceleration of the box in terms of $x , t , v _ { 0 } , s$, and the other parameters, while the box is moving.

## Solution

The net stretching of the spring is $s + v _ { 0 } t - x$, leading to a rightward force $k s$. When the box is moving, it is always moving to the right, so the kinetic friction force $\mu m g$ is always in the leftward direction, which means

$$
m a = k \left( s + v _ { 0 } t - x \right) - \mu m g
$$

which means

$$
a = \frac { k } { m } \left( s + v _ { 0 } t - x \right) - \mu g .
$$

The position of the box as a function of time $t$ as defined in part (b) is

$$
x ( t ) = \frac { v _ { 0 } } { \omega } ( \omega t - \sin \omega t ) + ( 1 - r ) s ( 1 - \cos \omega t ) ,
$$

where $\omega = \sqrt { k / m }$ and $r = \mu / \mu _ { 0 }$. This expression applies as long as the box is still moving, and you can use it in the parts below. Express all your answers in terms of $v _ { 0 } , \omega , s$, and $r$.

c. Find the time $t _ { 0 }$ when the box stops for the first time.

## Solution

Taking the derivative, the velocity of the box is

$$
v = v _ { 0 } ( 1 - \cos \omega t ) + ( 1 - r ) \operatorname { s } \omega \sin \omega t .
$$

The box stops when this is equal to zero for the first time. There are several ways to


evaluate this condition. First, we can use half-angle identities to find

$$
0 = 2 v _ { 0 } \sin ^ { 2 } \frac { \omega t } { 2 } + 2 ( 1 - r ) s \omega \sin \frac { \omega t } { 2 } \cos \frac { \omega t } { 2 } .
$$

As a result, the box stops when

$$
\tan \frac { \omega t } { 2 } = - \frac { ( 1 - r ) s \omega } { v _ { 0 } } .
$$

Using a basic property of the tangent function,

$$
\tan \left( \pi - \frac { \omega t } { 2 } \right) = \frac { ( 1 - r ) s \omega } { v _ { 0 } } .
$$

Solving for $t$, we conclude that

$$
t _ { 0 } = \frac { 2 \pi - 2 \alpha } { \omega } , \quad \alpha = \tan ^ { - 1 } \frac { ( 1 - r ) s \omega } { v _ { 0 } } .
$$

Note that we cancelled a factor of $\sin ( \omega t / 2 )$, which has a zero at $t = 2 \pi / \omega$. However, this is a larger time than the one we just found, so it is irrelevant.
Another way to arrive at the answer is to rewrite the original condition as

$$
1 = \cos \omega t - \tan \alpha \sin \omega t .
$$

Squaring both sides and using some trigonometric identities gives

$$
\tan \omega t = - \frac { 2 \tan \alpha } { 1 - \tan ^ { 2 } \alpha } .
$$

This can then be further simplified using the tangent half-angle identity, upon which we recover the same result as above.
d. For what values of $r$ will the spring always be at least as long as its rest length?

## Solution

The spring is stretched by $\Delta \ell = s + v _ { 0 } t - x$. Inserting the solution for $x$, we have

$$
\Delta \ell = r s + \frac { v _ { 0 } } { \omega } \sin \omega t + ( 1 - r ) s \cos \omega t .
$$

The most convenient way to write this is to use the sine addition formula in reverse, getting

$$
\Delta \ell = r s + \frac { v _ { 0 } } { \omega \cos \alpha } \sin ( \omega t + \alpha ) .
$$

The minimum stretch thus occurs when

$$
\omega t + \alpha = \frac { 3 \pi } { 2 } .
$$


Of course, we should check that this time is before the box stops; comparing with the answer to part (c) shows that it is. For the spring to always be as long as its rest length, we need the stretch at this time to be nonnegative,

$$
r s - \frac { v _ { 0 } } { \omega \cos \alpha } \geq 0 .
$$

Solving the triangle, we have

$$
\cos \alpha = \frac { v _ { 0 } } { \sqrt { v _ { 0 } ^ { 2 } + ( ( 1 - r ) s \omega ) ^ { 2 } } } .
$$

Plugging this in and simplifying gives the answer,

$$
r \geq \frac { 1 } { 2 } \left( 1 + \left( \frac { v _ { 0 } } { s \omega } \right) ^ { 2 } \right) .
$$

Note that if $v _ { 0 } / s \omega$ is too large, then it is impossible to satisfy this condition, since we need to have $r < 1$.
e. After the box stops, how long will it stay at rest before starting to move again?

## Solution

Using a result we found in part (d), the stretch is

$$
\Delta \ell = r s + \frac { v _ { 0 } } { \omega \cos \alpha } \sin \left( \omega t _ { 0 } + \alpha \right)
$$

when the box stops. Plugging in the value of $t _ { 0 }$ found in part (c),

$$
\Delta \ell = r s + \frac { v _ { 0 } } { \omega \cos \alpha } \sin ( 2 \pi - \alpha ) = r s - \frac { v _ { 0 } } { \omega } \tan \alpha = ( 2 r - 1 ) s .
$$

The box starts to move again when the stretch becomes $s$, so the time is

$$
\frac { s - ( 2 r - 1 ) s } { v _ { 0 } } = \frac { 2 ( 1 - r ) s } { v _ { 0 } } .
$$

The pattern of motion investigated in this problem is known as "stick-slip" and occurs in many practical contexts.
