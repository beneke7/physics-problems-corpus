---
id: solution-ocr-usapho-2012-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2012-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A1
A newly discovered subatomic particle, the $S$ meson, has a mass $M$. When at rest, it lives for exactly $\tau = 3 \times 10 ^ { - 8 }$ seconds before decaying into two identical particles called $P$ mesons (peons?) that each have a mass of $\alpha M$.

a. In a reference frame where the S meson is at rest, determine
    i. the kinetic energy,
    ii. the momentum, and
    iii. the velocity

of each P meson particle in terms of $M , \alpha$, the speed of light $c$, and any numerical constants.

b. In a reference frame where the S meson travels 9 meters between creation and decay, determine
    i. the velocity and
    ii. kinetic energy of the S meson.

Write the answers in terms of $M$, the speed of light $c$, and any numerical constants.

## Solution

a. Let $K , p$, and $v$ be the kinetic energy, momentum, and velocity of each P meson.
    i. We apply energy conservation,
$$
M c ^ { 2 } = 2 \left( K + \alpha M c ^ { 2 } \right) \quad \Rightarrow \quad K = \left( \frac { 1 } { 2 } - \alpha \right) M c ^ { 2 } .
$$
    ii. Note that each P meson has a total energy of $E = M c ^ { 2 } / 2$. The energy and momentum of a particle of mass $m$ must always satisfy
$$
E ^ { 2 } = p ^ { 2 } c ^ { 2 } + m ^ { 2 } c ^ { 4 }
$$
which in this case gives
$$
\frac { M ^ { 2 } c ^ { 4 } } { 4 } = p ^ { 2 } c ^ { 2 } + \alpha ^ { 2 } M ^ { 2 } c ^ { 4 } \Rightarrow p = M c \sqrt { \frac { 1 } { 4 } - \alpha ^ { 2 } } .
$$
    iii. The relativistic momentum and energy for a particle of mass $m$ satisfy
$$
p = \gamma m v , \quad E = \gamma m c ^ { 2 } \Rightarrow v = \frac { p c ^ { 2 } } { E } .
$$
Then in this particular case we have
$$
v = c \sqrt { 1 - 4 \alpha ^ { 2 } } .
$$

b. i. By ordinary kinematics, we have
$$
d = v t = v \gamma \tau , \quad \gamma = 1 / \sqrt { 1 - v ^ { 2 } / c ^ { 2 } }
$$
where $\gamma$ is the time dilation factor. Now we have to solve for $v$. Defining $\alpha = d / c \tau$,
$$
\alpha = \frac { v } { \sqrt { c ^ { 2 } - v ^ { 2 } } } \quad \Rightarrow \quad \alpha ^ { 2 } = \frac { v ^ { 2 } } { c ^ { 2 } - v ^ { 2 } } = \frac { 1 } { 1 - v ^ { 2 } / c ^ { 2 } } - 1 .
$$
Solving for $v$ gives
$$
v = \frac { c } { \sqrt { 1 + \alpha ^ { - 2 } } } .
$$
Plugging in the numbers, we find $\alpha = 1$, so $v = c / \sqrt { 2 }$.
    ii. Using the result of the previous part, we find $\gamma = \sqrt { 2 }$. The kinetic energy is just the total energy minus the mass-energy, so
$$
K = \gamma M c ^ { 2 } - M c ^ { 2 } = ( \sqrt { 2 } - 1 ) M c ^ { 2 } .
$$
