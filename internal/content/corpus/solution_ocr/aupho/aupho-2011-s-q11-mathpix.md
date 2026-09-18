---
id: solution-ocr-aupho-2011-s-q11
source: aupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/aupho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [aupho-2011-q11]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 11
One end of a spring with spring constant $k$ is fixed at the top of a rough plane inclined at an angle $\theta$ to the horizontal. The other end is attached to a block of mass $m$ and the coefficient of kinetic friction between the block and the slope is $\mu _ { k }$. The coefficient of friction is small and the friction is a weak effect, but should be treated exactly.
a) Find the extension of the spring from its unstretched length at the position where the system is in equilibrium. You may neglect the influence of friction in this part only.
Solution: When the spring is extended a distance $x$ from its unstretched length, it provides a force $k x$ up the slope. The earth's gravitational field provides a force $m g$ directly down. The component down the plane is $m g \sin \theta$, as shown in Figure 1. Call the extension of the spring at equilibrium $x _ { e }$. A free body diagram of the block (neglecting friction) is shown in Figure 1 The nett force parallel to the plane is zero, so

$$
\begin{aligned}
k x _ { e } & = m g \sin \theta \\
x _ { e } & = \frac { m g } { k } \sin \theta
\end{aligned}
$$

![](../../../figures/solution-ocr/0489b2e83dba575fd8ab9d62.jpg)
Figure 1: Resolving the gravitational force parallel and perpendicular to the plane and a free body diagram of the block

b) Find the potential energy of the system as a function of the displacement from the equilibrium position.
Solution: The displacement from equilibrium $c = x _ { e } - x$. The potential energy stored in the spring is
$$
\begin{aligned}
U _ { s } & = \frac { 1 } { 2 } k x ^ { 2 } \\
& = \frac { 1 } { 2 } k \left( x _ { e } - c \right) ^ { 2 } \\
& = \frac { ( m g \sin \theta ) ^ { 2 } } { 2 k } - m g c \sin \theta + \frac { 1 } { 2 } k c ^ { 2 } .
\end{aligned}
$$
The gravitational potential energy of the block is given by $U _ { g } = m g h = m g c \sin \theta$. The total
Page 7 of 16
2011 Physics National Qualifying Examination

potential energy is the sum of the elastic and gravitational potential energies,
$$
\begin{aligned}
U & = U _ { s } + U _ { g } \\
& = \frac { 1 } { 2 } k c ^ { 2 } - m g c \sin \theta + \frac { ( m g \sin \theta ) ^ { 2 } } { 2 k } + m g c \sin \theta \\
& = \frac { 1 } { 2 } k c ^ { 2 } + \frac { ( m g \sin \theta ) ^ { 2 } } { 2 k } .
\end{aligned}
$$
If desired, the equilibrium position can be chosen to be the zero of potential energy, in which case $U = ( 1 / 2 ) k c ^ { 2 }$.
c) The spring is now displaced from its equilibrium position by a distance $c _ { 0 }$ up the plane, and released. Sketch a graph of the displacement of the mass on the spring as a function of time.
Solution:
![](../../../figures/solution-ocr/d0847191f616a88f57edbe36.jpg)
The displacement of the mass as a function of time for $c _ { 0 } = 2$.
d) Find the difference in position along the slope between successive points where the mass is stationary and about to move down the slope, and hence determine the maximum number of such points that can occur.
Solution: Call the point at which the block is stationary and about to move up the ramp for the first time after being released $c _ { 1 }$. Note that $c _ { 1 }$ is negative because the block is below the equilibrium position. As the block slides along the plane energy is dissipated by friction; the difference in potential energy of the block at $c _ { 0 }$ and the block at $c _ { 1 }$ is equal to the work done by friction.
The frictional force is $F _ { \mu } = \mu _ { k } m g \cos \theta$, since $N = m g \cos \theta$ as the forces perpendicular to the plane are balanced. Hence,
$$
\frac { 1 } { 2 } k c _ { 0 } ^ { 2 } - \frac { 1 } { 2 } k c _ { 1 } ^ { 2 } = \left( c _ { 0 } - c _ { 1 } \right) \mu _ { k } m g \cos \theta
$$
For convenience, let $p = \frac { 2 } { k } \mu _ { k } m g \cos \theta$ so that
$$
\begin{aligned}
c _ { 0 } ^ { 2 } - c _ { 1 } ^ { 2 } & = p \left( c _ { 0 } - c _ { 1 } \right) \\
\left( c _ { 0 } - c _ { 1 } \right) \left( c _ { 0 } + c _ { 1 } \right) & = p \left( c _ { 0 } - c _ { 1 } \right) \\
c _ { 0 } + c _ { 1 } & = p .
\end{aligned}
$$

Let $c _ { 2 }$ be the next stationary point and note $c _ { 2 } > 0$. Similarly, equating the potential energy difference with the work done by friction gives $c _ { 1 } + c _ { 2 } = - p$. Adding these two relationships gives

$$
\begin{aligned}
c _ { 0 } + c _ { 1 } - \left( c _ { 1 } + c _ { 2 } \right) & = p - ( - p ) \\
c _ { 0 } - c _ { 2 } & = 2 p \\
c _ { 0 } - c _ { 2 } & = \frac { 4 \mu _ { k } m g \cos \theta } { k }
\end{aligned}
$$

As the block moves $4 \mu _ { k } m g \cos \theta / k$ closer to the equilibrium after each full oscillation, the number of times it oscillates, $n$, must satisfy $n 4 \mu _ { k } m g \cos \theta / k < c _ { 0 }$ The maximum number of stationary points where the block is about to move down the slope is, hence, the largest integer $n$ which satisfies $n < \frac { c _ { 0 } k } { 4 \mu _ { k } m g \cos \theta }$.
