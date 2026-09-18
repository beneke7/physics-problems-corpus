---
id: solution-ocr-kevin-zhou-r2sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r2-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 9
The LHC accelerates protons to an energy of $E = 7 \mathrm { TeV }$, and is a tunnel of radius $R = 4.3 \mathrm {~km}$. If the protons are kept in a circular orbit in the tunnel by a magnetic field of magnitude $B$, find the required value of $B$. If the value of $B$ is kept constant, what would be the radius of a future collider which accelerates protons to an energy of 20 TeV?

Solution
The centripetal force required is

$$
F = \left| \frac { d \mathbf { p } } { d t } \right| = \omega p
$$


where $\omega$ is the angular velocity. The speed of the protons is very close to $c$, so the angular velocity is $\omega \approx c / R$, and the momentum is $p \approx E / c$. The deflecting force is $q v B \approx q c B$, so

$$
q c B \approx \omega p \approx \frac { E } { R } .
$$

Therefore, we have

$$
B = \frac { E } { q c R } = \frac { 7 \times 10 ^ { 12 } } { \left( 3 \times 10 ^ { 8 } \right) \left( 4.3 \times 10 ^ { 3 } \right) } \mathrm { T } = 5.4 \mathrm {~T} .
$$

This is slightly lower than what is actually used, because magnets don't take up the entire tunnel. Since $R \propto E$, the future collider would need a radius of

$$
R ^ { \prime } = \frac { 20 \mathrm { TeV } } { 7 \mathrm { TeV } } R = 12 \mathrm {~km} .
$$

## Remark

You might be wondering how to write the Lorentz force as a four-force. It certainly should be possible, since we know electromagnetism is compatible with relativity (indeed, it led us to relativity in the first place), but it seems challenging because electromagnetism is so naturally written in terms of three-vectors. It turns out that the proper way to express the electromagnetic field in relativity is to join the electric and magnetic fields together, making them the components of an antisymmetric rank 2 tensor,

$$
F _ { \mu \nu } = \left( \begin{array} { c c c c }
0 & E _ { x } & E _ { y } & E _ { z } \\
- E _ { x } & 0 & - B _ { z } & B _ { y } \\
- E _ { y } & B _ { z } & 0 & - B _ { x } \\
- E _ { z } & - B _ { y } & B _ { x } & 0
\end{array} \right)
$$

called the field strength tensor. Then the four-force is

$$
f ^ { \mu } = q u _ { \nu } F ^ { \mu \nu }
$$

where $u _ { \nu }$ is the four-velocity. Note that this ensures the rest mass of the particle is fixed, as

$$
f \cdot u = q u _ { \mu } u _ { \nu } F ^ { \mu \nu } = - q u _ { \mu } u _ { \nu } F ^ { \nu \mu } = - f \cdot u
$$

using the antisymmetric property, so $f \cdot u = 0$. (In fact, the requirement to keep the rest mass fixed is quite restrictive, so this is one of the simplest possible relativistic force laws.)

[2] Problem 20. USAPhO 2013, problem A3. A warmup question using the above facts.
[3] Problem 21 (MPPP 192). An electron moving with speed $v _ { 0 } = 0.6 c$ enters a homogeneous electric field that is perpendicular to its velocity.

![](../../../figures/solution-ocr/601e3309cd8d030736f9d337.jpg)
When the electron leaves the field, its velocity makes an angle 45° with its initial direction.

(a) Find the speed $v _ { 1 }$ of the electron after it has crossed the electric field.
(b) Find the distance $d$ shown above, if the strength of the electric field is $E = 510 \mathrm { kV } / \mathrm { m }$.

Note that the rest energy of an electron is 510 keV.
Solution. (a) Since we are working with three-forces here, we use $\mathbf { F } = d \mathbf { p } / d t$. This tells us that the component of momentum $p _ { x }$ is unchanged. Since the velocity is at a $45 ^ { \circ }$ angle, so is the momentum, so $p _ { y } = p _ { x }$. Thus, the momentum increases by a factor of $\sqrt { 2 }$. The momentum per mass started at $0.6 / 0.8 = 3 / 4$, so its now $\frac { 3 } { 4 } \sqrt { 2 }$. Thus,

$$
\frac { v _ { 1 } } { \sqrt { 1 - v _ { 1 } ^ { 2 } } } = \frac { 3 \sqrt { 2 } } { 4 } \Longrightarrow \frac { v _ { 1 } ^ { 2 } } { \left( 1 - v _ { 1 } ^ { 2 } \right) } = \frac { 9 } { 8 } \Longrightarrow v _ { 1 } = \frac { 3 c } { \sqrt { 17 } } .
$$

Note that this implies that $v _ { x }$ has decreased, even though the electric 3-force had no $x$ component. As we warned above, this is a manifestation of the fact that F is no longer parallel to a in relativity.

(b) As we showed in problem 1, the basics of work still work the same in relativity. The amount of work done on the electron is $e E d$, while the energy change is $m \Delta \gamma$, where
$$
\Delta \gamma = \frac { 1 } { \sqrt { 1 - 9 / 17 } } - \frac { 1 } { \sqrt { 1 - 9 / 25 } } = \frac { \sqrt { 17 } } { \sqrt { 8 } } - \frac { 5 } { 4 } .
$$
Plugging in the numbers gives $d = 20.8 \mathrm {~cm}$.
[3] Problem 22 (MPPP 194). The trajectories of charged particles, moving in a homogeneous magnetic field, can be seen by observing the tracks they leave in cloud chambers. Because the particles are moving quickly, it is impossible to see the tracks being formed; instead, one must infer what happened from the shapes of the tracks. Is it possible that, when a charged particle decays into two other charged particles, the trail segments close to the decay point (before the particles have started to slow down significantly) are arcs of circles that touch each other, as shown?
![](../../../figures/solution-ocr/bc8f49521f997b999e6a8f09.jpg)

If so, identify which track belongs to the original particle. If not, explain why not.
Solution. Number the three tracks as 1, 2, and 3 starting from the inside, and let their radii be $r _ { 1 } < r _ { 2 } < r _ { 3 }$. We know that even for relativistic motion, the momentum of a particle is $p = q B r$. We can then use conservation of momentum and conservation of charge to investigate each case.

Case 1: Particle 1 decays, implying that a particle comes in along track 1, and particles leave along tracks 2 and 3. The curvatures of the tracks imply

$$
q _ { 1 } > 0 , \quad q _ { 2 } > 0 , \quad q _ { 3 } > 0 .
$$

Conservation of charge and momentum imply

$$
q _ { 1 } = q _ { 2 } + q _ { 3 } , \quad q _ { 1 } r _ { 1 } = q _ { 2 } r _ { 2 } + q _ { 3 } r _ { 3 } .
$$

By combining these equations, we may solve for $r _ { 1 }$ to find

$$
r _ { 1 } = \frac { q _ { 2 } r _ { 2 } + q _ { 3 } r _ { 3 } } { q _ { 2 } + q _ { 3 } } .
$$

However, this is impossible because we know $r _ { 1 }$ is smaller than both $r _ { 2 }$ and $r _ { 3 }$.
Case 2: Particle 2 decays, which implies

$$
q _ { 1 } < 0 , \quad q _ { 2 } < 0 , \quad q _ { 3 } > 0 .
$$

Conservation of charge and momentum imply

$$
q _ { 2 } = q _ { 1 } + q _ { 3 } , \quad \left| q _ { 2 } r _ { 2 } \right| = \left| q _ { 1 } r _ { 1 } \right| - \left| q _ { 3 } r _ { 3 } \right| .
$$

Being careful with minus signs, momentum conservation implies

$$
- q _ { 2 } r _ { 2 } = - q _ { 1 } r _ { 1 } - q _ { 3 } r _ { 3 } .
$$

Again solving for $r _ { 1 }$, we find

$$
r _ { 1 } = \frac { q _ { 3 } r _ { 3 } + \left( - q _ { 2 } \right) r _ { 2 } } { q _ { 3 } + \left( - q _ { 2 } \right) }
$$

which is a contradiction for the same reason as in case 1.
Case 3: Particle 3 decays, which implies

$$
q _ { 1 } < 0 , \quad q _ { 2 } > 0 , \quad q _ { 3 } < 0 .
$$

Conservation of charge and momentum imply

$$
q _ { 3 } = q _ { 1 } + q _ { 2 } , \quad \left| q _ { 3 } r _ { 3 } \right| = \left| q _ { 1 } r _ { 1 } \right| - \left| q _ { 2 } r _ { 2 } \right| .
$$

Again being careful with minus signs, momentum conservation implies

$$
- q _ { 3 } r _ { 3 } = - q _ { 1 } r _ { 1 } - q _ { 2 } r _ { 2 } .
$$

Again solving for $r _ { 1 }$, we find

$$
r _ { 1 } = \frac { q _ { 2 } r _ { 2 } + \left( - q _ { 3 } \right) r _ { 3 } } { q _ { 2 } + \left( - q _ { 3 } \right) }
$$

which is again a contradiction. Thus, the series of tracks shown is impossible.


[3] Problem 23. USAPhO 2006, problem A4.

[3] Problem 24. USAPhO 2022, problem B2. A nice problem on deriving the time dilation formula for an electrostatic "clock".
