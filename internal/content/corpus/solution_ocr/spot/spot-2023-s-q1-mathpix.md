---
id: solution-ocr-spot-2023-s-q1
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2023-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. We model the collision of a compound object with a rigid vertical wall. The object is made up of a spherical shell of mass $m _ { 1 }$ that is joined by a horizontal rod to the centre of an inner ball of mass $m _ { 2 }$.
The rod has negligible mass and an effective spring constant $k$, such that the magnitude of the restoring force is $F = k x$ when the distance between the centres of the masses is $x$. The rod does not twist or flex, but can compress and stretch as the masses are displaced from their initially concentric positions.
![](../../../figures/solution-ocr/5192f46a1124155e76ac105b.jpg)
The object moves with constant horizontal velocity $v _ { i }$ directly towards the wall, colliding with it. Suppose that $m _ { 1 } > m _ { 2 }$. Ignore any vertical forces, and suppose the object does not spin or rotate. Assume that all collisions are elastic.

(a) Derive an expression for the coefficient of restitution $e \equiv v _ { f } / v _ { i }$, where $v _ { i }$ and $v _ { f }$ are the initial and final speeds of the centre of mass of the object.
(b) Show that after the collision, the masses $m _ { 1 }$ and $m _ { 2 }$ oscillate about their centre of mass in simple harmonic motion.
(c) Find the angular frequency $\omega$ of oscillation and maximum distance $X$ between the centres of masses, in terms of $v _ { i } , m _ { 1 } , m _ { 2 }$, and $k$.

Solution:


(a) Initially, both masses are moving to the right at speed $v _ { i }$. After the (elastic) collision, the mass $m _ { 1 }$ is moving at speed $v _ { i }$ to the left while the mass $m _ { 2 }$ continues moving at speed $v _ { i }$ to the right. The velocity of the CM is thus
$$
v _ { C M } = \frac { - m _ { 1 } v _ { i } + m _ { 2 } v _ { i } } { m _ { 1 } + m _ { 2 } } = - \frac { m _ { 1 } - m _ { 2 } } { m _ { 1 } + m _ { 2 } } v _ { i } .
$$
The coefficient of restitution is thus
$$
e = \frac { m _ { 1 } - m _ { 2 } } { m _ { 1 } + m _ { 2 } }
$$

1 - Correct answer


(b) Let the positions of the masses in the CM frame be $x _ { 1 } ( t )$ and $x _ { 2 } ( t )$. We know that $x _ { 1 } ( 0 ) = x _ { 2 } ( 0 )$. The extension or compression of the rod depends on $x _ { 2 } ( t ) - x _ { 1 } ( t )$, therefore the force on mass 1 is
$$
F _ { 1 } = - k \left( x _ { 1 } - x _ { 2 } \right)
$$
while the force on mass 2 is
$$
F _ { 2 } = - k \left( x _ { 2 } - x _ { 1 } \right) = - F _ { 1 } .
$$

We note that in this frame, the CM does not move (i.e. stays at zero), therefore

$$
m _ { 1 } x _ { 1 } + m _ { 2 } x _ { 2 } = 0 .
$$

Substituting $x _ { 2 } = - \frac { m _ { 1 } } { m _ { 2 } } x _ { 1 }$ into the above expressions for the forces, we get

$$
F _ { 1 } = - k \left( \frac { m _ { 1 } + m _ { 2 } } { m _ { 2 } } x _ { 1 } \right) ,
$$

which shows that the motion of $x _ { 1 }$ is simple harmonic, and thus the motion of $x _ { 2 }$ is simple harmonic as well (since it is scaled in the opposite direction by a constant factor).
1 - Using CM frame
1 - Argument using forces on masses

(c) Using $F _ { 1 } = m _ { 1 } a _ { 1 }$, we get
$$
a _ { 1 } = - k \frac { m _ { 1 } + m _ { 2 } } { m _ { 1 } m _ { 2 } } x _ { 1 } .
$$
Therefore, the angular frequency of oscillation is
$$
\omega = \sqrt { \frac { k \left( m _ { 1 } + m _ { 2 } \right) } { m _ { 1 } m _ { 2 } } } .
$$
Consider relative velocities of $m _ { 1 }$ and $m _ { 2 }$. Just after the collision, the relative velocity is $V = 2 v _ { i }$ since the outer shell moves to the left and the inner ball is still moving to the right. This is unchanged in the CM frame (initial velocity of $m _ { 1 }$ is $\frac { 2 m _ { 2 } } { m _ { 1 } + m _ { 2 } } v _ { i }$ to the left, while the initial velocity of $m _ { 2 }$ is $\frac { 2 m _ { 1 } } { m _ { 1 } + m _ { 2 } } v _ { i }$ to the right).
The maximum distance $X$ between $x _ { 1 }$ and $x _ { 2 }$ is given by the amplitude of oscillation:
$$
X = \frac { V } { \omega } = 2 v _ { i } \sqrt { \frac { m _ { 1 } m _ { 2 } } { k \left( m _ { 1 } + m _ { 2 } \right) } } .
$$
1 - Angular frequency of oscillation
1 - Amplitude of oscillation

Q1 total: 5
