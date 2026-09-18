---
id: solution-ocr-spot-2026-s-q1
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. (a) A sailboat is moving in stationary water. A wind with uniform density and horizontal speed $v _ { 0 }$ (relative to the ground) is blowing perpendicularly to the surface of the sail. Find the speed of the sailboat where the wind exerts maximum power.
![](../../../figures/solution-ocr/f2a1f5251b28fa9250b2d120.jpg)
Solution: Let the speed of the boat be $v$ and density of air be $\rho$. In this frame, the incoming air has velocity $v _ { 0 } - v$. Hence, it exerts a force proportional to $\rho \left( v _ { 0 } - v \right) ^ { 2 }$. Since the question asks for power, and $P = F v$, we get that $P \propto \left( v _ { 0 } - v \right) ^ { 2 } v$. We can maximise this
$$
\frac { \mathrm { d } P } { \mathrm {~d} v } = \left( v _ { 0 } - v \right) ^ { 2 } - 2 \left( v _ { 0 } - v \right) v = 0 \Longrightarrow v = \frac { v _ { 0 } } { 3 }
$$
    (b) A circular uniform disk is initially rotating about point $P _ { 1 }$ on its circumference at a constant angular velocity $\omega _ { 1 }$. If point $P _ { 1 }$ is suddenly released and another point $P _ { 2 }$ on the circumference is simultaneously fixed in place, what is the new angular velocity of the disk $\omega _ { 2 }$ about $P _ { 2 }$. Take angle $\angle P _ { 1 } O P _ { 2 }$ to be $\theta$.
![](../../../figures/solution-ocr/48a0aa2ca5ff1d6ee771296d.jpg)

Solution: The initial angular momentum about $P _ { 2 }$ is

$$
L _ { i } = m R ^ { 2 } \omega _ { 1 } \cos \theta + \frac { 1 } { 2 } M R ^ { 2 } \omega _ { 1 }
$$

The final angular momentum about $P _ { 2 }$ is

$$
L _ { f } = \frac { 3 } { 2 } M R ^ { 2 } \omega _ { 2 }
$$

Conserving angular momentum about $P _ { 2 }$ and solving gives us

$$
\omega _ { 2 } = \left( \frac { 1 + 2 \cos \theta } { 3 } \right) \omega _ { 1 }
$$

We can check this by noting that when $\theta = \pi$ or 0, we get the intuitive result $\omega _ { 2 } = \omega _ { 1 }$. When $\theta = 2 \pi / 3$, our answer is surprisingly 0.

Alternative Solution: It is also possible to solve it using an impulse approach, although it will be a lot more tedious. We first consider the initial COM velocity as $\overrightarrow { v _ { 1 } } = \overrightarrow { \omega _ { 1 } } \times \overrightarrow { O P _ { 1 } }$ and final COM velocity as $\overrightarrow { v _ { 2 } } = \overrightarrow { \omega _ { 2 } } \times \overrightarrow { O P } _ { 2 }$. Then, the impulse


is $\Delta \vec { p } = m \left( \overrightarrow { v _ { 2 } } - \overrightarrow { v _ { 1 } } \right)$ and the change in angular momentum about the COM is $I \overrightarrow { \omega _ { 1 } } + \Delta \vec { p } \times O \overrightarrow { P _ { 2 } } = I \overrightarrow { \omega _ { 2 } }$. Substituting in the explicit expression for $\Delta \vec { p }$, we get
$$
I \overrightarrow { \omega _ { 1 } } + m \left( \overrightarrow { \omega _ { 2 } } \times \overrightarrow { O P _ { 2 } } - \overrightarrow { \omega _ { 1 } } \times \overrightarrow { O P _ { 1 } } \right) \times \overrightarrow { O P _ { 2 } } = I \overrightarrow { \omega _ { 2 } }
$$
and we can subsequently solve for $\omega _ { 2 }$ in terms of $\omega _ { 1 }$.
(c) A cylindrical disk of radius $R$ lies flat on a smooth horizontal surface and is fixed in place. An inextensible thread is tightly wound on the disk, and the free end is attached to a small puck with mass $m$. The length of the free part of the thread is $\ell _ { 0 }$. The puck is initially given a velocity $v$ perpendicular to the thread. Assuming the thread can only withstand some maximum tension $T$, explain whether the puck be able to reach the disk. If yes, find the time taken for the puck to hit the disk. If not, find the time taken for the thread to break in terms of $T$ and other relevant constants.
![](../../../figures/solution-ocr/f3476eec989b7c22de537fc4.jpg)

Solution: Since the thread is inextensible and always under stress, the tension force always points perpendicular to the displacement and does zero work. Hence, the speed of the puck remains constant. The tension force provides centripetal acceleration

$$
T = \frac { m v ^ { 2 } } { \ell }
$$

As $\ell \rightarrow 0 , T \rightarrow \infty$ and the thread eventually breaks. It is therefore not possible for the puck to hit the cylinder. In time $\mathrm { d } t$, the length of the rope decreases by $\omega R \mathrm {~d} t$. We also have $\omega = v / \ell$ from geometry. Hence, we can form a differential equation

$$
\mathrm { d } \ell = - \frac { v } { \ell } R \mathrm {~d} t \Longrightarrow \ell ^ { 2 } - \ell _ { 0 } ^ { 2 } = - 2 v R t
$$

The final $\ell$ before breaking is $m v ^ { 2 } / T$. Rearranging gives us

$$
t = \frac { \ell _ { 0 } ^ { 2 } T ^ { 2 } - m ^ { 2 } v ^ { 4 } } { 2 R v T ^ { 2 } }
$$
