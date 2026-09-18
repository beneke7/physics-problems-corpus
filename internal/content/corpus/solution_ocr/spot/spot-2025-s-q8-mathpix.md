---
id: solution-ocr-spot-2025-s-q8
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2025-q8]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
8. This is the $P V$-diagram of the Otto cycle: $A \rightarrow B$ and $C \rightarrow D$ are isochoric (or isovolumetric) processes, and $B \rightarrow C$ and $D \rightarrow A$ are adiabatic processes.
![](../../../figures/solution-ocr/c4585d3ab8d16025be935790.jpg)
    (a) Consider a classical Otto engine, containing a gas with adiabatic index $\gamma$ with volumes $V _ { 1 }$ and $V _ { 2 }$ respectively at the two isochoric processes $\left( V _ { 1 } < V _ { 2 } \right)$. Determine the efficiency $\eta _ { c }$ of such an engine.

Solution: The efficiency $\eta$ of an engine is given by

$$
\eta = 1 - \frac { Q _ { \mathrm { out } } } { Q _ { \mathrm { in } } }
$$

The only heat transfer occurs during the isochoric processes. Using the equation $\Delta Q = C _ { v } \Delta T$ for an isochoric process, we have

$$
\eta _ { c } = 1 - \frac { T _ { C } - T _ { D } } { T _ { B } - T _ { A } }
$$

For an adiabatic process, $p V ^ { \gamma } =$ const. implies $T V ^ { \gamma - 1 } =$ const.. We may use this relation to obtain

$$
\begin{aligned}
\eta _ { c } & = 1 - \frac { T _ { B } \left( \frac { V _ { 1 } } { V _ { 2 } } \right) ^ { \gamma - 1 } - T _ { A } \left( \frac { V _ { 1 } } { V _ { 2 } } \right) ^ { \gamma - 1 } } { T _ { B } - T _ { A } } \\
& = 1 - \left( \frac { V _ { 1 } } { V _ { 2 } } \right) ^ { \gamma - 1 }
\end{aligned}
$$


Now, we will discuss the quantum Otto engine. For simplicity, consider a two-level atomic system with ground state and excited state energies $E _ { 0 } = 0$ and $E _ { 1 }$, and suppose the probabilities of existing in these states are $p _ { 0 }$ and $p _ { 1 }$ respectively. The average energy of the two-level atom is thus

$$
\langle E \rangle = p _ { 0 } E _ { 0 } + p _ { 1 } E _ { 1 } = p _ { 1 } E _ { 1 }
$$

Suppose the energy difference $E _ { 1 }$ between the two states can be adjusted throughout the cycle. The probability $p$ that the atom is in the energy state $E$ satisfies the Boltzmann distribution

$$
p \propto e ^ { - E / \left( k _ { B } T \right) }
$$

where $T$ is the temperature and $k _ { B }$ is the Boltzmann constant.

(b) When the quantum matter is in equilibrium with a heat reservoir of temperature $T$, write down expressions for the probabilities $p _ { 0 }$ and $p _ { 1 }$. Leave your answers in terms of $E _ { 1 } , k _ { B }$ and $T$.

Solution: We know that

$$
p _ { 1 } = p _ { 0 } \exp \left( - \frac { E _ { 1 } } { k _ { B } T } \right)
$$

Since $p _ { 0 } + p _ { 1 } = 1$, we have

$$
p _ { 0 } = \frac { 1 } { 1 + \exp \left( - \frac { E _ { 1 } } { k _ { B } T } \right) } \quad p _ { 1 } = \frac { \exp \left( - \frac { E _ { 1 } } { k _ { B } T } \right) } { 1 + \exp \left( - \frac { E _ { 1 } } { k _ { B } T } \right) }
$$

In a thermodynamical process, the energy change $d E$ can be written in terms of the change in work and heat using the First Law of Thermodynamics.

$$
d E = d W + d Q
$$

In a quasi-static quantum process, the change in average energy is given by differentiating the equation for average energy.

$$
d \langle E \rangle = p _ { 1 } d E _ { 1 } + E _ { 1 } d p _ { 1 }
$$

The quantum adiabatic theorem states that the probabilities of each quantum state remain effectively constant during an adiabatic process.

(c) Write an equation for $d \langle E \rangle$ in an adiabatic process. Leave your answer in terms of $p _ { 1 }$, $E _ { 1 }$ and their differentials.

Solution: Since the adiabatic theorem states that the probabilities of each state remain constant, the second term in the equation for $d \langle E \rangle$ goes to zero.

$$
d \langle E \rangle = p _ { 1 } d E _ { 1 }
$$


The von Neumann entropy $S$ is given by

$$
S = - k _ { B } \sum _ { i } p _ { i } \ln p _ { i }
$$

where $k _ { B }$ is the Boltzmann constant and $p _ { i }$ is the probability of the $i$-th state in the quantum system.

(d) Using the equation for von Neumann entropy, write an equation for $d \langle E \rangle$ in an isochoric process. Leave your answer in terms of $p _ { 1 } , E _ { 1 }$ and their differentials.

Solution: In an isochoric process, the work done is zero. The change in energy is then given by $d Q = T d S$. Let us first differentiate the expression for $S$.

$$
d S = - k _ { B } \sum _ { i } \left( 1 + \ln p _ { i } \right) d p _ { i }
$$

Knowing that $p _ { 0 } + p _ { 1 } = 1$, we have $d p _ { 0 } = - d p _ { 1 }$. Furthermore, since $p _ { 1 } =$ $p _ { 0 } \exp \left( - \frac { E _ { 1 } } { k _ { B } T } \right)$, we have $\ln p _ { 1 } = \ln p _ { 0 } - \frac { E _ { 1 } } { k _ { B } T }$. Upon substitution, we obtain our final answer.

$$
\begin{aligned}
d \langle E \rangle & = T d S \\
& = - k _ { B } T \sum _ { i } \left( 1 + \ln p _ { i } \right) d p _ { i } \\
& = - k _ { B } T \left( 1 + \ln p _ { 1 } - \frac { E _ { 1 } } { k _ { B } T } - 1 - \ln p _ { 1 } \right) d p _ { 1 } \\
& = E _ { 1 } d p _ { 1 }
\end{aligned}
$$

Solutions that arrive straight at the correct final answer from the first law will receive only 1.5 marks.

(e) Sketch the quantum Otto cycle on the axes $E _ { 1 }$ against $p _ { 1 }$, with arrows and labels for $A , B , C , D$. You may use the first law of thermodynamics, or your results from parts (c) and (d).

Solution: For an adiabatic process, we have $d \langle E \rangle = p _ { 1 } d E _ { 1 }$. For an isochoric process, we have $d \langle E \rangle = E _ { 1 } d p _ { 1 }$. Therefore, all processes in the Otto cycle correspond to straight lines on the $E _ { 1 } - p _ { 1 }$ diagram, so we end up with a rectangle.
![](../../../figures/solution-ocr/4cd85a1c46b03494f931c8bd.jpg)
For a less rigorous derivation straight from the first law, we can notice that the two


equations for classical and quantum energy can each be partitioned into a term for work $\left( d W = p _ { 1 } d E _ { 1 } \right)$ and heat $\left( d Q = E _ { 1 } d p _ { 1 } \right)$.
(f) Compute the efficiency $\eta _ { q }$ of the quantum Otto cycle, in terms of the temperatures $T _ { B }$ and $T _ { C }$ at the states $B$ and $C$ respectively.

Solution: The efficiency is

$$
\eta _ { q } = 1 - \frac { Q _ { \mathrm { out } } } { Q _ { \mathrm { in } } }
$$

Since heat exchange only occurs during the isochoric processes, we have

$$
\eta _ { q } = 1 - \frac { E _ { B } \left( p _ { B } - p _ { A } \right) } { E _ { C } \left( p _ { B } - p _ { A } \right) } = 1 - \frac { E _ { B } } { E _ { C } }
$$

Since $p _ { B } = p _ { C }$, we have

$$
\frac { \exp \left( - \frac { E _ { B } } { k _ { B } T _ { B } } \right) } { 1 + \exp \left( - \frac { E _ { B } } { k _ { B } T _ { B } } \right) } = \frac { \exp \left( - \frac { E _ { C } } { k _ { B } T _ { C } } \right) } { 1 + \exp \left( - \frac { E _ { C } } { k _ { B } T _ { C } } \right) }
$$

Simplifying, we have $\frac { E _ { B } } { T _ { B } } = \frac { E _ { C } } { T _ { C } }$, so the efficiency is

$$
\eta _ { q } = 1 - \frac { T _ { C } } { T _ { B } }
$$


| Marking Scheme: |  |  |
| :--- | :--- | :--- |
| Part | Steps | Marks |
| (a) | Writing $\eta = 1 - \frac { Q _ { \text {out } } } { Q _ { \text {in } } }$ or equivalent Computing $Q _ { \text {out } } , Q _ { \text {in } }$ and/or $W$ accurately Correct final answer | M0.5 M1.5 A1 |
| (b) | Writing down $p _ { 1 }$ in terms of $p _ { 0 }$ Correct final answer | M0.5 A0.5 |
| (c) | Correct final answer | A1 |
| (d) | Correct differentiation of $S d Q = T d S$ Expressing $p _ { 0 }$ and $d p _ { 0 }$ in terms of $p _ { 1 }$ and $d p _ { 1 }$ Correct final answer | M0.5 M0.5 M0.5 A1 |
| (e) | Correct interpretation of $E _ { 1 } d p _ { 1 }$ and $p _ { 1 } d E _ { 1 }$ Correct $E _ { 1 } - p _ { 1 }$ diagram shape Correct labels on rectangle | M1 A1 A0.5 |
| (f) | Correct values of $Q _ { \text {in } }$ and $Q _ { \text {out } } \eta _ { q } = 1 - \frac { E _ { C } } { E _ { B } }$ Making use of $p _ { B } = p _ { C }$ to relate $T _ { B }$ and $T _ { C }$ Correct final answer | M0.5 M0.5 M0.5 A0.5 |
| This problem is adapted from a Chinese Physics Olympiad. |  |  |
