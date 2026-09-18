---
id: solution-ocr-nbpho-2014-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2014-dc-dc-converter]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 1. DC-DC converter

1) (1 pt) From the Kirchoff's voltage law for the loop consisting of $L$ and $\mathcal { E } , \mathcal { E } = L \frac { d I } { d t }$, hence $I = \mathcal { E } t / L$. From $I _ { 0 } = \mathcal { E } \tau _ { L } / L$ we obtain

$$
\tau _ { L } = L I _ { 0 } / \mathcal { E } .
$$

2) (1 pts) Once the current $I _ { 0 }$ is reached, the key is opened; the current trough $L$ cannot change instantaneously and therefore is forced to flow through the resistor $R$. Since the characteristic time of this current loop (consisting of $L$ and $R$ is very short $\left( L / R \ll \tau _ { K } \right)$, the current decays very fast and becomes essentially equal to zero while the key is still open. Now there is no current through the inductor, so that the key will close again and the process will start repeating from the beginning. As a result we'll have a periodic graph as shown in figure.
![](../../../figures/solution-ocr/257dfaad928351356f186452.jpg)
3) (1 pt) The voltage through the resistor is maximal when the current is maximal, which happens immediately after the switch is opened; the maximal current is $I _ { 0 }$ so that $V _ { \text {max } } = R I _ { 0 }$.
4) (2 pts) Due to $V _ { \max } \gg V _ { 0 }$, we can neglect the effect of the diode; so we have the Kirchoff's voltage law $L \frac { d I } { d t } = R I = R \frac { d q } { d t }$ (here we expressed the current via the charge $q$ which flows through the resistor). Integration over a single cycle (when the inductor current drops from $I _ { 0 }$ down to 0) yields $L I _ { 0 } = R \Delta q$, hence the charge flown through the resistor (and through the diode) $\Delta q = I _ { 0 } L / R$. During that cycle, the diode had a constant voltage $V _ { 0 }$, so the electric field performed work $A = V _ { 0 } \Delta q$ which was released as heat in the diode. So, the average power dissipation

$$
P = \frac { A } { \tau _ { L } } = \frac { V _ { 0 } I _ { 0 } L } { R \tau _ { L } } = \frac { V _ { 0 } \mathcal { E } } { R } .
$$

5) (2 pts) Now, since the characteristic time of the $R C$-loop is very large, the capacitor maintains its charge (and voltage) during that period of time when the diode is closed. Once the key $K _ { 1 }$ opens, the diode will open, and the capacitor is connected to the inductor so that a $L C$-loop is formed. That loop admits oscillations of period $T _ { L C } = 2 \pi \sqrt { L C }$ and as the current to the resistor can be neglected (since $R C \gg T _ { L C }$ ), we can neglect the presence of the resistor. During the time interval when the diode is open, we can also neglect the presence of the diode since $V _ { 0 } \ll V _ { \text {max } }$. Hence, the current $i$ in the $L C$-loop changes in time sinusoidally, starting from $i = I _ { 0 }$ and ending when $i = 0$ (then the diode will close disconnecting the $L C$-loop). During that process, the magnetic energy of the inductor $\frac { 1 } { 2 } L I _ { 0 } ^ { 2 }$ is converted into the electric field energy of the capacitor, which is later released as heat on the resistor. When the stationary regime is achieved, the energy lost by the capacitor during one period (of duration $\tau _ { L }$ ) as the heat dissipation on the resistor $Q = V _ { a v } ^ { 2 } \tau _ { L } / R$ must be equal to the energy received from the inductor; so,

$$
\frac { V _ { a v } ^ { 2 } \tau _ { L } } { R } = \frac { 1 } { 2 } L I _ { 0 } ^ { 2 } \Rightarrow V _ { a v } = I _ { 0 } \sqrt { \frac { L R } { 2 \tau _ { L } } } = \sqrt { \frac { \mathcal { E } I _ { 0 } R } { 2 } } .
$$

6) (1 pt) The charge which flows away from the capacitor when the diode is closed can be found as $q _ { C } = \tau _ { L } V _ { a v } / R$ (owing to $R C \gg \tau _ { L C }$, the relative change of the capacitor's voltage is small). Hence, the voltage drop is found as $\Delta V = q _ { C } / C = \tau _ { L } V _ { a v } / ( R C )$. The amplitude is half of the difference between the minimal and maximal values, so that the amplitude

$$
U _ { 0 } = \frac { \Delta V } { 2 } = \frac { \tau _ { L } V _ { a v } } { 2 R C } = \frac { I _ { 0 } L } { 2 C } \sqrt { \frac { I _ { 0 } } { 2 R \mathcal { E } } } .
$$
