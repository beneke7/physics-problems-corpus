---
id: solution-ocr-spot-2023-s-q2
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2023-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. This question is about thermionic emission. Consider two very large parallel plates, each of area $A$, separated by a distance $d$. Electrons are emitted from rest from the hot cathode at potential $V = 0$, and accelerated across a gap to the anode at potential $V = V _ { 0 }$ as shown in the figure.
The moving electrons, termed as space charge, build up to the point where the electric field at the surface of the cathode is zero, with a steady current $I$ flowing between the plates.
Suppose the plates are large compared to the separation between them (i.e. $A \gg d ^ { 2 }$ ). Defining $x$ to be the distance from the cathode, the charge density ${ } ^ { 1 } \rho$ and speed of moving electrons $v$ are both functions of $x$. Denote the charge and mass of an electron to be $- q$ and $m$ respectively.

[^0]
![](../../../figures/solution-ocr/a73f3995ba594dba03881070.jpg)

(a) Find the relationship between the potential $V$ and the speed $v$ at distance $x$ from the cathode.
(b) At steady state, the current $I$ is independent of $x$. Show that $V$ obeys the following differential equation as a function of $x$ :
$$
\frac { d ^ { 2 } V } { d x ^ { 2 } } + \frac { I } { \varepsilon _ { 0 } A } \sqrt { \frac { m } { 2 q } } V ^ { - \frac { 1 } { 2 } } = 0 .
$$
(c) Hence find the potential $V$ as a function of $x$, in terms of $I , m , A , q$, and other fundamental constants.
(d) Find the relationship between the steady current $I$ and the applied potential difference $V _ { 0 }$, in terms of the geometry of the plates and fundamental constants.

Solution: Adapted from Problem 2.48 in [1].


(a) Using the conservation of energy, we have
$$
q V = \frac { 1 } { 2 } m v ^ { 2 }
$$
Therefore,
$$
v = \sqrt { \frac { 2 q V } { m } } .
$$

1 - Correct answer


(b) The current is
$$
I = \frac { d Q } { d t } = A \rho \frac { d x } { d t } = A \rho v .
$$
Gauss' law gives
$$
- \frac { d ^ { 2 } V } { d x ^ { 2 } } = \frac { \rho } { \varepsilon _ { 0 } } = \frac { 1 } { \varepsilon _ { 0 } } \frac { I } { A v } = \frac { I } { \varepsilon _ { 0 } A } \sqrt { \frac { m } { 2 q V } } .
$$
1 - Expressing $I = A \rho v$
1 - Use of Gauss' law
1 - Correct answer through proper algebraic manipulation

(c) Solve the differential equation, noting that $V ^ { \prime \prime } = V ^ { \prime } \frac { d V ^ { \prime } } { d V }$ :
$$
V ^ { \prime } \frac { d V ^ { \prime } } { d V } = - \frac { I } { \varepsilon _ { 0 } A } \sqrt { \frac { m } { 2 q } } V ^ { - \frac { 1 } { 2 } } .
$$
Integrating both sides,
$$
\frac { 1 } { 2 } V ^ { \prime 2 } = - \frac { 2 I } { \varepsilon _ { 0 } A } \sqrt { \frac { m } { 2 q } } V ^ { \frac { 1 } { 2 } } + \text { const. }
$$
Since the cathode is at zero potential and field at cathode is zero due to the space charge, we have $V ( 0 ) = V ^ { \prime } ( 0 ) = 0$, so the constant from integration is zero:
$$
V ^ { \prime 2 } = - \frac { 4 I } { \varepsilon _ { 0 } A } \sqrt { \frac { m } { 2 q } } V ^ { \frac { 1 } { 2 } }
$$
Thus,
$$
\frac { d V } { d x } = \sqrt { - \frac { 4 I } { \varepsilon _ { 0 } A } \sqrt { \frac { m } { 2 q } } } V ^ { \frac { 1 } { 4 } }
$$
Integrating once more,
$$
\frac { 4 } { 3 } V ^ { \frac { 3 } { 4 } } = \sqrt { - \frac { 4 I } { \varepsilon _ { 0 } A } \sqrt { \frac { m } { 2 q } } } x + \text { const. }
$$
But $V ( 0 ) = 0$, so this constant is also zero. Rearranging, we obtain
$$
V = \left( \frac { 81 I ^ { 2 } m } { 32 \varepsilon _ { 0 } ^ { 2 } A ^ { 2 } q } \right) ^ { \frac { 1 } { 3 } } x ^ { \frac { 4 } { 3 } } .
$$
    1 - Correct solving of ODE
    1 - Correct boundary conditions
    1 - Correct answer
(d) Setting $x = d$ and $V = V _ { 0 }$, we get
$$
V _ { 0 } = \left( \frac { 81 I ^ { 2 } m } { 32 \varepsilon _ { 0 } ^ { 2 } A ^ { 2 } q } \right) ^ { \frac { 1 } { 3 } } d ^ { \frac { 4 } { 3 } }
$$
Rearranging, we obtain the Child-Langmuir law
$$
I = \frac { 4 \sqrt { 2 } } { 9 } \frac { \varepsilon _ { 0 } A } { d ^ { 2 } } \sqrt { \frac { q } { m } } V _ { 0 } ^ { \frac { 3 } { 2 } } .
$$
    1 - Substitution of $d$ and $V _ { 0 }$
    1 - Correct answer

Q2 total: 9
