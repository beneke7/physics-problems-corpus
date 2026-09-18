---
id: solution-ocr-nbpho-2010-s-p9
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2010-power-supply]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 9. Power supply (6 points)

![](../../../figures/solution-ocr/6781f9517a71fdf2bc168870.jpg)
i. (2 pts) When the key is closed, there is no current through the diode, because it has reverse voltage applied. Meanwhile, the voltage applied to the inductance is $U _ { i } = L \dot { I }$, hence $I = I _ { 0 } + U _ { i } t / L$. Since there was initially no current, $I _ { 0 } = 0$, and $I = U _ { i } t / L$. So, the maximal current achieved is $I _ { \text {max } } = U _ { i } \tau _ { c } / L$. The current through an inductance cannot change instananuously; so, when the key is opened, all the current is redirected to the diode. The diode receives a forward current, hence it has no voltage drop. Thus, the inductance obtains the voltage $L \dot { I } = U _ { i } - U _ { o }$, (which is smaller than $- U _ { i }$ ). Hence, $I = I _ { 0 } - \left( U _ { 0 } - U _ { i } \right) t / L$, where $I _ { 0 }$ is such as to match the current $I _ { \text {max } }$ at the moment when the key is opened. Once the current reaches zero, the diode is closed and no further current flows in the system. These findings allow us to sketch the Figure above.
ii. (2 pts) For the first cycle, we can use the result of the question i. We notice that at the beginning of the second cycle, the system is exactly at the same state as at the beginning of the first cycle. So, the process starts to behave periodically, see Fig.
![](../../../figures/solution-ocr/e5555ed026b7b9613900320b.jpg)

The average output current $J$ is the surface area under one period of the graph, divided by the period length. So, $J = \frac { 1 } { 2 } I _ { \text {max } } \tau _ { 1 } / \left( 2 \tau _ { c } \right)$, where $\tau = \tau _ { c } \frac { U _ { i } } { U _ { 0 } - U _ { i } }$ is the length of a time segment when $I _ { o } > 0$. So,

$$
J = I _ { \max } \frac { 1 } { 4 } \frac { U _ { i } } { U _ { 0 } - U _ { i } } = \frac { \tau _ { c } } { 4 L } \frac { U _ { i } ^ { 2 } } { U _ { 0 } - U _ { i } } .
$$

iii. (2 pts) Now, we can use the result of the question ii, be- cause the situation is exactly the same as it was, except that the output voltage will establish itself according to the value of average current $J$. Note that average current to the capacitor is 0 (because its upper plate is isolated from the lower one), therefore, all the current $J$ goes to the resistor. (The capacitor works as a buffer, redistributing the strongly fluctuating current of the previous graph over time, so that the current to the resistor is almost constant.) So, the output voltage $U _ { o } = J R$, where the expression for $J$ can be found from the answer of the question ii. It is convenient to designate $U _ { o } / U _ { i } = \kappa$. Then we have

$$
\kappa ( \kappa - 1 ) = \frac { \tau _ { c } R } { 4 L } \Rightarrow 2 \kappa = 1 \pm \sqrt { 1 + \frac { \tau _ { c } R } { L } } .
$$

We need $\kappa \geq 2$, so the "-" sign can be excluded, and we arrive at

$$
U _ { o } = \frac { U _ { i } } { 2 } \left( 1 + \sqrt { 1 + \frac { \tau _ { c } R } { L } } \right) ,
$$

which is valid as long as $\tau _ { c } R \geq 8 L$. If this inequality is not satisfied, the assumption $U _ { o } \geq 2 U _ { i }$ will not be satisfied, so that the expression for $J$ will fail.

If $U _ { o } < 2 U _ { i }$, the ascending branch of the $I _ { i } ( t )$-graph is steeper than the descending one. So, the sawtooth profile of that graph starts "climbing up". The higher it goes, the larger will be $J$ and hence the larger will be $U _ { o }$. In its turn, larger $U _ { o }$ results in a steeper the descending branch of the $I _ { i } ( t )$ graph; the process continues until reaching a state when the ascending and descending branches are equally steep; this corresponds to $U _ { 0 } = 2 U _ { i }$. So,

$$
U _ { 0 } = 2 U _ { i } , \quad \text { if } \quad \tau _ { c } R < 8 L .
$$
