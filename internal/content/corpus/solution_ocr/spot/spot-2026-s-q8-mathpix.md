---
id: solution-ocr-spot-2026-s-q8
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q8]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
8. (a) Inverse beta decay is an important reaction in neutrino detectors. One version of this decay occurs when an electron antineutrino interacts with a proton to produce a neutron and a positron:
$$
\bar { \nu } _ { e } + \mathrm { p } \longrightarrow \mathrm { n } + \mathrm { e } ^ { + }
$$
Assuming the proton is at rest in the lab frame, determine the minimum neutrino

energy in the lab frame required for this reaction to take place. Leave your answer in terms of the relevant rest masses of the proton $m _ { p }$, neutron $m _ { n }$, and electron $m _ { e }$. The mass of the neutrino is negligible.

Solution: Consider the centre of momentum frame. To minimise the neutrino energy, the products of the reaction should have zero velocity in this frame. Any nonzero velocity would mean energy is "wasted" in moving the particles, rather than simply creating them.
Let us use the relativistic invariant $\varepsilon ^ { 2 } = - E ^ { 2 } + p ^ { 2 } c ^ { 2 }$. This quantity is both conserved and invariant across frames. Before the reaction, in the lab frame, we have:

$$
\varepsilon ^ { 2 } = - \left( E _ { \bar { \nu } _ { e } } + m _ { p } c ^ { 2 } \right) ^ { 2 } + E _ { \bar { \nu } _ { e } } ^ { 2 }
$$

After the reaction, in the centre of momentum frame, we have:

$$
\varepsilon ^ { 2 } = - \left( m _ { n } c ^ { 2 } + m _ { e } c ^ { 2 } \right) ^ { 2 }
$$

We can then equate these expressions and solve for $E _ { \bar { \nu } _ { e } }$ :

$$
\begin{gathered}
- \left( E _ { \bar { \nu } _ { e } } + m _ { p } c ^ { 2 } \right) ^ { 2 } + E _ { \bar { \nu } _ { e } } ^ { 2 } = - \left( m _ { n } c ^ { 2 } + m _ { e } c ^ { 2 } \right) ^ { 2 } \\
- 2 E _ { \bar { \nu } _ { e } } m _ { p } c ^ { 2 } - m _ { p } ^ { 2 } c ^ { 4 } = - \left( m _ { n } + m _ { e } \right) ^ { 2 } c ^ { 4 } \\
E _ { \bar { \nu } _ { e } } = \frac { \left( m _ { n } + m _ { e } \right) ^ { 2 } - m _ { p } ^ { 2 } } { 2 m _ { p } } c ^ { 2 }
\end{gathered}
$$

(b) Bob decides to take a spaceship with constant proper acceleration $g$. In the lab frame, his position $x$ as a function of his proper time $\tau$ is given by:

$$
x ( \tau ) = \frac { c ^ { 2 } } { g } \cosh \frac { g \tau } { c }
$$

where $\cosh x = \frac { e ^ { x } + e ^ { - x } } { 2 }$.
Alice, afraid to leave Bob, attaches herself behind Bob's spaceship with a rope of constant proper length $L$. Determine the proper acceleration $g ^ { \prime }$ experienced by Alice.

Hint: Proper time $\tau$ is always time measured in the frame of the moving body, while coordinate time $t$ can be time measured in any frame. The proper distance $\Delta s$ in any frame between two fixed events is given by:

$$
\Delta s ^ { 2 } = \Delta x ^ { 2 } - c ^ { 2 } \Delta t ^ { 2 }
$$

The following identities may be helpful

$$
\frac { d } { d x } \sinh x = \cosh x , \quad \frac { d } { d x } \cosh x = \sinh x , \quad \frac { \sinh x } { \cosh x } = \tanh x
$$

Solution: Let us compute the proper distance of Bob from the origin over time, and use the proper distance between him and Alice to infer Alice's motion. To do this, we need to determine $\Delta t$.
Consider a clock ticking on Bob's spaceship. Each tick has no spatial separation, but has time separation $d \tau$. By the Lorentz transformation, we have:

$$
d t = \gamma d \tau
$$


where $\gamma = \frac { 1 } { \sqrt { 1 - \frac { v ^ { 2 } } { c ^ { 2 } } } }$. To determine $\gamma$, we write:

$$
\begin{aligned}
\frac { d x } { d \tau } & = c \sinh \frac { g \tau } { c } \\
\frac { d x } { d t } & = \frac { d \tau } { d t } \frac { d x } { d \tau } = \frac { 1 } { \gamma } \frac { d x } { d \tau } \\
\frac { v } { \sqrt { 1 - \frac { v ^ { 2 } } { c ^ { 2 } } } } & = c \sinh \frac { g \tau } { c } \\
v & = c \tanh \frac { g \tau } { c } \\
\gamma & = \cosh \frac { g \tau } { c }
\end{aligned}
$$

This allows to obtain $\Delta t ( \tau )$ :

$$
\begin{aligned}
\int _ { 0 } ^ { \Delta t } d t & = \int _ { 0 } ^ { \tau } \cosh \frac { g \tau } { c } d \tau \\
\Delta t & = \frac { c } { g } \sinh \frac { g \tau } { c }
\end{aligned}
$$

Given $\Delta x ( \tau )$ and $\Delta t ( \tau )$, we obtain the proper distance:

$$
\begin{aligned}
\Delta s ^ { 2 } & = \left( \frac { c ^ { 2 } } { g } \right) ^ { 2 } \left( \cosh ^ { 2 } \frac { g \tau } { c } - \sinh ^ { 2 } \frac { g \tau } { c } \right) \\
& = \left( \frac { c ^ { 2 } } { g } \right) ^ { 2 }
\end{aligned}
$$

This implies that the proper distance of Bob to the origin is always $\frac { c ^ { 2 } } { g }$. Alice lags behind this by a constant proper distance $L$, so her proper distance to the origin is $\frac { c ^ { 2 } } { g } - L$. But since a constant proper acceleration implies constant proper distance to the origin, and Alice has a constant proper distance to the origin, she also has a constant proper acceleration. In fact, her equation of motion differs from Bob's only by the proper acceleration she experiences. We have:

$$
\begin{aligned}
\frac { c ^ { 2 } } { g } - L & = \frac { c ^ { 2 } } { g ^ { \prime } } \\
g ^ { \prime } & = \frac { g } { 1 - \frac { g L } { c ^ { 2 } } }
\end{aligned}
$$
