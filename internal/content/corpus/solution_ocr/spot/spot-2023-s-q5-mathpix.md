---
id: solution-ocr-spot-2023-s-q5
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2023-q5]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
5. Three circuit elements are connected to a central junction in a "star" shape, as shown in the figure. One is a resistor, one is an inductor, and one is a capacitor, although it is not known which is which.
![](../../../figures/solution-ocr/328ecf66440533559b0759c0.jpg)
A physicist connects an AC source with fixed voltage $V _ { s }$ across a pair of terminals, at

the same time connecting an AC voltmeter to one of the terminals (the other end of the voltmeter is always fixed at the central junction). She obtains the following readings:

| AC source terminals | AC voltmeter terminal | Voltmeter reading |
| :--- | :--- | :--- |
| 1 \& 2 | 1 | 20.8 V |
| 1 \& 2 | 2 | 15.6 V |
| 1 \& 3 | 1 | 24.0 V |
| 1 \& 3 | 3 | 10.0 V |
| 2 \& 3 | 2 | 58.5 V |
| 2 \& 3 | 3 | 32.5 V |

(a) Determine the value of $V _ { s }$ (i.e. the reading on the AC voltmeter when it is hooked up directly to the AC source).
(b) Determine the possible identities of $Z _ { 1 } , Z _ { 2 } , Z _ { 3 }$ (i.e. which is the resistor, inductor, capacitor).
(c) Now, an AC ammeter is also connected in series with the AC source. Find the ratio of currents $I _ { 12 } : I _ { 13 } : I _ { 23 }$, where $I _ { i j }$ denotes the value on the AC ammeter when the AC source is connected to terminals $i$ and $j$.

Solution:

(a) The impedances of resistors, inductors and capacitors are positive real, positive imaginary and negative imaginary numbers respectively. Suppose the resistor has impedance $R$, the capacitor has impedance $- j X _ { C }$ while the inductor has impedance $+ j X _ { L }$.
Consider the following cases:
    - $R$ and $L$ in series. Then the voltages are
$$
\begin{aligned}
& \left| V _ { R } \right| = I R = \frac { R } { \sqrt { R ^ { 2 } + X _ { L } ^ { 2 } } } V _ { s } \\
& \left| V _ { L } \right| = I X _ { L } = \frac { X _ { L } } { \sqrt { R ^ { 2 } + X _ { L } ^ { 2 } } } V _ { s }
\end{aligned}
$$
The source voltage is thus the root of the sum of squares of the individual voltages.
    - $R$ and $C$ in series. The voltages are
$$
\begin{gathered}
\left| V _ { R } \right| = I R = \frac { R } { \sqrt { R ^ { 2 } + X _ { C } ^ { 2 } } } V _ { s } \\
\left| V _ { C } \right| = - I X _ { C } = \frac { X _ { C } } { \sqrt { R ^ { 2 } + X _ { C } ^ { 2 } } } V _ { s }
\end{gathered}
$$
The source voltage is thus the root of the sum of squares of the individual voltages.


- $L$ and $C$ in series. The voltages are
$$
\begin{aligned}
& \left| V _ { L } \right| = I X _ { L } = \frac { X _ { L } } { \left| X _ { L } - X _ { C } \right| } V _ { s } \\
& \left| V _ { C } \right| = I X _ { C } = \frac { X _ { C } } { \left| X _ { L } - X _ { C } \right| } V _ { s }
\end{aligned}
$$

The source voltage is thus the difference in voltages.
We see that

$$
\sqrt { 20.8 ^ { 2 } + 15.6 ^ { 2 } } = \sqrt { 24.0 ^ { 2 } + 10.0 ^ { 2 } } = 58.5 - 32.5 = 26.0
$$

therefore, the source voltage is 26.0 V.
1 - Writing down the correct impedances
1 - Recognising that source voltage is either square root of sum of squares or difference of component voltages
1 - Correct final answer

(b) We can conclude that $Z _ { 1 }$ is a resistor. However, $Z _ { 2 }$ and $Z _ { 3 }$ cannot be distinguished, since we may flip the signs of the imaginary part to get either combination.
1 - Correct analysis
(c) The ratio of impedances is equal to the ratio of voltages. Therefore,
$$
\begin{aligned}
& \left| Z _ { 1 } \right| : \left| Z _ { 2 } \right| = 4 : 3 \\
& \left| Z _ { 1 } \right| : \left| Z _ { 3 } \right| = 12 : 5 \\
& \left| Z _ { 2 } \right| : \left| Z _ { 3 } \right| = 9 : 5
\end{aligned}
$$
We thus conclude that
$$
\left| Z _ { 1 } \right| : \left| Z _ { 2 } \right| : \left| Z _ { 3 } \right| = 12 : 9 : 5 .
$$
The ratio of impedances across terminals is
$$
\left| Z _ { 12 } \right| : \left| Z _ { 13 } \right| : \left| Z _ { 23 } \right| = 15 : 13 : 4 .
$$
The ratio of current is thus
$$
I _ { 12 } : I _ { 23 } : I _ { 13 } = \frac { 1 } { 15 } : \frac { 1 } { 13 } : \frac { 1 } { 4 } .
$$
    1 - Correct ratio of impedances of elements
    1 - Correct ratio of impedances across terminals
    1 - Correct ratio of current

Q5 total: 7
