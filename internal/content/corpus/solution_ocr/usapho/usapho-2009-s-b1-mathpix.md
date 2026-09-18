---
id: solution-ocr-usapho-2009-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2009-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

A bowling ball and a golf ball are dropped together onto a flat surface from a height $h$. The bowling ball is much more massive than the golf ball, and both have radii much less than $h$. The bowling ball collides with the surface and immediately thereafter with the golf ball; the balls are dropped so that all motion is vertical before the second collision, and the golf ball hits the bowling ball at an angle $\alpha$ from its uppermost point, as shown in the diagram. All collisions are perfectly elastic, and there is no surface friction between the bowling ball and the golf ball.
![](../../../figures/solution-ocr/1700fbab519fbdad686a51ed.jpg)

After the collision the golf ball travels in the absence of air resistance and lands a distance $l$ away. The height $h$ is fixed, but $\alpha$ may be varied. What is the maximum possible value of $l$, and at what angle $\alpha$ is it achieved?

You may present your results as decimals, but remember that you are not allowed to use graphical or algebraic functions of your calculator.

## Solution

Both balls arrive at the surface with a speed $v _ { 0 }$, which we can determine as usual via conservation of energy:

$$
\frac { 1 } { 2 } m v _ { 0 } ^ { 2 } = m g h \quad \Rightarrow \quad v _ { 0 } = \sqrt { 2 g h } .
$$

After the bowling ball collides with the surface, it is traveling upwards at $v _ { 0 }$ and the golf ball is traveling downwards at $v _ { 0 }$. The subsequent collision is most easily understood in the reference frame of the bowling ball; in this frame, the golf ball is traveling downwards at $2 v _ { 0 }$ and the bowling


ball is stationary. Since the bowling ball is very massive compared to the golf ball, the golf ball will rebound at the same speed $2 v _ { 0 }$. Since there is no surface friction, the angle of reflection will be equal to the angle of incidence. Therefore the golf ball will emerge at an angle $2 \alpha$ to the vertical.

In the bowling ball's reference frame, the golf ball emerges with horizontal velocity $2 v _ { 0 } \sin 2 \alpha$ and upward vertical velocity $2 v _ { 0 } \cos 2 \alpha$. Transforming these back to the original frame of reference, we obtain the initial conditions for the golf ball's projectile motion,

$$
v _ { x } = 2 v _ { 0 } \sin 2 \alpha , \quad v _ { y } = 2 v _ { 0 } \cos 2 \alpha + v _ { 0 } .
$$

The time of flight $t$ of the golf ball is given by

$$
t = \frac { 2 v _ { y } } { g }
$$

and therefore the range is

$$
l = v _ { x } t = \frac { 2 v _ { x } v _ { y } } { g }
$$

Combining with our previous result,

$$
l = \frac { 2 } { g } \left( 2 v _ { 0 } \sin 2 \alpha \right) \left( 2 v _ { 0 } \cos 2 \alpha + v _ { 0 } \right) = \frac { 8 v _ { 0 } ^ { 2 } } { g } \sin 2 \alpha \left( \cos 2 \alpha + \frac { 1 } { 2 } \right) .
$$

For convenience we set $\beta = 2 \alpha$. Inserting the expression for $v _ { 0 }$,

$$
l = 16 h \sin \beta \left( \cos \beta + \frac { 1 } { 2 } \right) \Rightarrow \frac { d l } { d \beta } = 16 h \left[ \cos \beta \left( \cos \beta + \frac { 1 } { 2 } \right) - \sin ^ { 2 } \beta \right]
$$

Setting this to zero to find the maximum,

$$
\cos ^ { 2 } \beta - \sin ^ { 2 } \beta + \frac { 1 } { 2 } \cos \beta = 0
$$

This can be rewritten as a quadratic in $\cos \beta$,

$$
2 \cos ^ { 2 } \beta + \frac { 1 } { 2 } \cos \beta - 1 = 0 \Rightarrow \cos \beta = \frac { - \frac { 1 } { 2 } \pm \sqrt { \frac { 1 } { 4 } - 8 } } { 4 } .
$$

Taking the positive root,

$$
\cos \beta = \frac { \sqrt { 33 } - 1 } { 8 } = 0.593 , \quad \sin \beta = \sqrt { 1 - \cos ^ { 2 } \beta } = 0.805 .
$$

So at maximum,

$$
l = 16 h \cdot 0.805 \cdot \left( 0.593 + \frac { 1 } { 2 } \right) = 14.08 h
$$

which occurs at

$$
\cos 2 \alpha = 0.593 \quad \Rightarrow \quad \alpha = 0.468 = 26.8 ^ { \circ } .
$$
