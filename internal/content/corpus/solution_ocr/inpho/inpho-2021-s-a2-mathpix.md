---
id: solution-ocr-inpho-2021-s-a2
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2021-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. [8 marks] Prof. Saha gave the following problem to four students.
In this problem work done by a system on its surroundings is taken as positive. A non-ideal gas follows the Van der Waals equation of state
$$
\left( P + \frac { n ^ { 2 } a } { V ^ { 2 } } \right) ( V - n b ) = n R T
$$
where $P , V$, and $T$ denote the pressure, volume, and temperature, respectively; $n$ is the number of moles; $R$ is the universal gas constant and $a , b$ are dimensional positive constants. This gas expands adiabatically from an initial temperature $T _ { i }$ and volume $V _ { i }$ to a final temperature $T _ { f }$ and volume $V _ { f }$. The adiabatic process is described by an equation of the form $f ( P , V ; n , a , b , \alpha ) =$ constant, where $\alpha$ is a dimensionless number which is greater than 1. It is given that $\alpha \rightarrow \gamma$ in the ideal gas limit, where $\gamma$ is the adiabatic exponent. What is the work $( W )$ done by the gas in the process?
The four students solved the problem independently and gave four different answers. Their answers were:
(a) $W = \frac { n R } { \alpha - 1 } \left( T _ { i } - T _ { f } \right) + n ^ { 2 } a \left( V _ { f } ^ { - 1 } - V _ { i } ^ { - 1 } \right)$
(b) $W = \frac { n R } { \alpha - 1 } \left( T _ { f } - T _ { i } \right) + n ^ { 2 } a \left( V _ { f } ^ { - 1 } - V _ { i } ^ { - 1 } \right)$
(c) $W = \frac { n R } { \alpha - 1 } \left( T _ { i } - T _ { f } \right) + n ^ { 2 } a \left( V _ { f } ^ { \alpha - 1 } - V _ { i } ^ { \alpha - 1 } \right)$
(d) $W = \frac { n R } { \alpha - 1 } \left( T _ { i } - T _ { f } \right) \left[ 1 - \left( \frac { V _ { f } - n b } { V _ { i } - n b } \right) ^ { \alpha - 1 } \right]$
Now, Prof. Saha had actually provided the exact expression of $f ( P , V ; n , a , b , \alpha )$ to the students, but could not remember it during evaluation. Still, he could determine that some or all of the four answers above must be incorrect, based on general physical arguments alone.
Consider each of the four answers and give at least one reason for each of them showing why it is wrong, or possibly correct. Note that you are not required to give a correct expression for $W$ or a detailed derivation for it in this question.

Solution:

(a) For adiabatic expansion, $T _ { f } < T _ { i }$, and $V _ { f } > V _ { i }$. Even though the first term is positive and the second term is negative, it is possible to have $W > 0$, which is true for adiabatic expansion. Also, in the ideal gas limit ( $\alpha \rightarrow \gamma$ and $a \rightarrow 0$ ), this gives the correct expression. So this may be the correct expression.
(b) For adiabatic expansion, $T _ { f } < T _ { i }$ and $V _ { f } > V _ { i }$. Therefore, in this case $W < 0$, which is incorrect.

(c) From Van der Waals equation, $a / V$ has dimensions of energy. So $a V ^ { \alpha - 1 }$ cannot have dimensions of energy, making this expression incorrect.
(d) Since $T _ { f } < T _ { i }$ and $V _ { f } > V _ { i }$, here $W < 0$ making this incorrect.
