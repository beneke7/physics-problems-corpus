---
id: solution-ocr-usapho-2022-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2022-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

## Moment of Clarity

Hold your pencil horizontally by its tip. To keep it still, you will have to exert a combination of forces on its bottom and top. These forces can be viewed as a superposition of a net upward force, and a pair of opposite forces. The former ensures the forces on the pencil are balanced, while the latter provides a torque, called the bending moment, which ensures the torques on the pencil are balanced. Since the bending moment arises from a pair of opposite forces, it doesn't depend on the choice of origin.

a. Consider a rod of length $\ell$ and mass per length $\lambda$. What is the bending moment you must exert to hold the rod horizontally at its end?

## Solution

Balance torques about the end of the rod. The weight is $\lambda g \ell$, applied uniformly along the rod, so the torque due to gravity is $\lambda g \ell ^ { 2 } / 2$. This can only be balanced by the bending moment, so it is $\lambda g \ell ^ { 2 } / 2$.

Just as each piece of a string exerts a tension on neighboring pieces in equilibrium, each piece of a solid rod also exerts a bending moment on its neighbors. For thin rods under heavy loads, this bending moment can be the limiting factor that causes them to break.
![](../../../figures/solution-ocr/07506e490cd2fa7e9fb787be.jpg)
![](../../../figures/solution-ocr/e624044c045e428a8abdbb11.jpg)
Suppose a rod is supported at both ends, so that it forms a bridge, as shown at left above. Assume the supports are simple, so that they only provide an upward force, and no bending moment. In equilibrium, a bending moment will appear throughout the rod. The magnitude of the maximum bending moment the rod can exert at any point without breaking is $M _ { 0 }$, and the length of the rod is $\ell$. The bridge is loaded uniformly, with a mass per length of $\lambda$ (including its own mass).

b. Find the maximum possible value of $\lambda$ before the bridge collapses.

## Solution

Placing the origin at the left support, consider the system consisting of the points on the rod at $0 < x < x _ { 0 }$. The external forces are:

- An upward force $\lambda g \ell / 2$ at the left end, due to the left support.
- A weight of $\lambda g x _ { 0 }$.
- An upward force $\lambda g \left( x _ { 0 } - \ell / 2 \right)$ at the right end, due to the rest of the rod.

Now consider balancing torques on this system about $x = x _ { 0 }$. The external torques are:

- A clockwise torque $\lambda g \ell x _ { 0 } / 2$ due to the left support.


- A counterclockwise torque $\lambda g x _ { 0 } ^ { 2 } / 2$ due to the weight.
- A bending moment $M \left( x _ { 0 } \right)$ due to the rest of the rod.

For torque balance, the bending moment must be

$$
M \left( x _ { 0 } \right) = \frac { \lambda g x _ { 0 } ^ { 2 } } { 2 } - \frac { \lambda g \ell x _ { 0 } } { 2 } = \frac { \lambda g x _ { 0 } \left( x _ { 0 } - \ell \right) } { 2 } .
$$

The rod is most likely to break where $M$ is the largest, which occurs at the center, so

$$
M _ { 0 } = \frac { \lambda g ( \ell / 2 ) ^ { 2 } } { 2 } .
$$

Solving for $\lambda$ gives

$$
\lambda = \frac { 8 M _ { 0 } } { g \ell ^ { 2 } } .
$$

c. Now suppose that one support remains at the left end, while the other is a distance $d > \ell / 2$ away from the left end, as shown at right above. In static equilibrium, find the bending moment $M \left( x _ { 0 } \right)$ at a distance $x _ { 0 } < d$ from the left end.

## Solution

To keep the expressions simple, let $W = \lambda g \ell$ be the weight of the rod. By balancing torques about the left end of the rod, the external forces on the entire rod are

- A weight force $W$.
- An upward force $W \ell / 2 d$ from the right support.
- An upward force $W - W \ell / 2 d$ from the left support.

Note that the reason we specified $d > \ell / 2$ is because otherwise, the force from the left support would become negative, in which case the bridge would tip over to the right.
Now consider the system consisting of the points on the rod with $0 < x < x _ { 0 }$, where $x _ { 0 } < d$. To balance the forces, the upward force from the rest of the rod must be

$$
F _ { r } = W \left( \frac { x _ { 0 } } { \ell } + \frac { \ell } { 2 d } - 1 \right) .
$$

The external torques on this system, about the left end, are

- A counterclockwise torque $W x _ { 0 } ^ { 2 } / 2 \ell$ due to the weight.
- A clockwise torque $F _ { r } x _ { 0 }$ due to the rest of the rod.
- A bending moment $M \left( x _ { 0 } \right)$ due to the rest of the rod.

Balancing the torques thus gives

$$
M \left( x _ { 0 } \right) = - W \left( \frac { x _ { 0 } ^ { 2 } } { 2 \ell } + \frac { \ell x _ { 0 } } { 2 d } - x _ { 0 } \right) = - \lambda g \left( \frac { x _ { 0 } ^ { 2 } } { 2 } + \frac { \ell ^ { 2 } x _ { 0 } } { 2 d } - x _ { 0 } \ell \right) .
$$


The sign of $M$ is convention-dependent, so either sign is acceptable.
d. Find the value of $d$ that maximizes the load $\lambda$ that the bridge can take before collapsing.

## Solution

If the bridge doesn't collapse, then the magnitude of the bending moment must be less than $M _ { 0 }$ everywhere throughout the rod. Consider how the bending moment varies as one moves from the left end of the rod to the right. It begins at zero at $x _ { 0 } = 0$, then reaches a positive maximum somewhere between the two supports, when $M ^ { \prime } \left( x _ { 0 } \right)$ vanishes. This occurs when

$$
x _ { 0 } = \ell - \frac { \ell ^ { 2 } } { 2 d }
$$

and which point there is a bending moment of

$$
M _ { 1 } = \frac { \lambda g } { 2 } \left( \ell - \frac { \ell ^ { 2 } } { 2 d } \right) ^ { 2 } .
$$

As a check, we recover the answer to part (b) when $d = \ell$.
Continuing rightward, the bending moment decreases, passes through zero at some point $x _ { 0 } < d$, and then becomes negative. (This change in sign is necessary to support the part of the rod hanging to the right of the right support.) At $x = d$, the bending moment does not change discontinuously, because the supports provide no bending moment. It then smoothly returns to zero as $x _ { 0 }$ approaches $\ell$. Therefore, the most negative value of the bending moment occurs at $x _ { 0 } = d$, giving a bending moment of magnitude

$$
M _ { 2 } = - M ( d ) = \frac { \lambda g } { 2 } ( \ell - d ) ^ { 2 } .
$$

As another check, this matches the answer to part (a) for a rod of length $\ell - d$.
As we move the right support closer to the center, the middle of the bridge becomes more stable, since $M _ { 1 }$ decreases. At the same time, $M _ { 2 }$ increases, because more of the bridge is hanging off the edge of the right support. The bridge will not collapse as long as both of these quantities are less than $M _ { 0 }$. Thus, when the right support is placed most efficiently, both of them will become equal to $M _ { 0 }$ just before the bridge collapses, which means we should have $M _ { 1 } = M _ { 2 }$. Equating them yields

$$
1 - \frac { \ell } { 2 d } = 1 - \frac { d } { \ell }
$$

which gives the answer,

$$
d = \frac { \ell } { \sqrt { 2 } } .
$$
