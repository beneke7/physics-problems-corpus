---
id: solution-ocr-nbpho-2016-s-p4
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2016-dimmer]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 4. Dimmer

i) Denote $\omega = 2 \pi f$. Adding an imaginary component to the voltages $u = U e ^ { j \omega t }$ and $u _ { C } = U _ { C } e ^ { j ( \omega t + \varphi ) }$ (with $j$ being the imaginary unit), there is a relation $u _ { C } =$ $u z _ { C } / \left( R + z _ { C } \right)$, where the capacitor's impedance $z _ { C } = 1 / ( j \omega C )$. Calculating, we get $k \equiv z _ { C } / \left( R + z _ { C } \right) = 1 / ( j \omega R C +$ $1 ) = 1 / \left[ \sqrt { 1 + ( \omega R C ) ^ { 2 } } \times e ^ { j \arctan ( \omega R C ) } \right]$. Therefore $U _ { C } = U | k | = U / \sqrt { 1 + ( 2 \pi f R C ) ^ { 2 } }$ and $\varphi = \arg k = - \arctan ( 2 \pi f R C )$. (The answers could also be obtained by analyzing a vector diagram.)
ii) The diac starts to conduct when the voltage on the capacitor rises to $U _ { b }$. This voltage is then applied to the series connection of $R _ { t }$ and the diac, whose voltage has dropped to $U _ { d }$. Therefore the current through the diac is $\left( U _ { b } - U _ { d } \right) / R _ { t }$ and the inequality is $R _ { t } I _ { t } < U _ { b } - U _ { d }$.
iii) At $t _ { 0 }$, the voltage on the capacitor becomes larger than $U _ { b }$. Thus, $U _ { C } \sin \left( 2 \pi f t _ { 0 } + \varphi \right) = U _ { b }$ and $t _ { 0 } = \left[ \arcsin \left( U _ { b } / U _ { C } \right) - \varphi \right] / ( 2 \pi f )$.
iv) The lamp is lit at phase $2 \pi f t _ { 0 }$ and turned off at phase $\pi$. The power is proportional to the voltage squared, giving the ratio

$$
r = \frac { \int _ { 0 } ^ { \pi } \sin ^ { 2 } \alpha \mathrm {~d} \alpha } { \int _ { 2 \pi f t _ { 0 } } ^ { \pi } \sin ^ { 2 } \alpha \mathrm {~d} \alpha }
$$

Because $\int \sin ^ { 2 } \alpha \mathrm {~d} \alpha = \int \frac { 1 - \cos ( 2 \alpha ) } { 2 } \mathrm {~d} \alpha = \frac { \alpha } { 2 } -$ $\frac { \sin ( 2 \alpha ) } { 4 }$, we get

$$
\begin{aligned}
r & = \frac { \left( \frac { \pi } { 2 } - \frac { \sin ( 2 \pi ) } { 4 } \right) - \left( \frac { 0 } { 2 } - \frac { \sin ( 0 ) } { 4 } \right) } { \left( \frac { \pi } { 2 } - \frac { \sin ( 2 \pi ) } { 4 } \right) - \left( \frac { 2 \pi f t _ { 0 } } { 2 } - \frac { \sin \left( 4 \pi f t _ { 0 } \right) } { 4 } \right) } \\
& = \frac { 1 } { 1 - 2 f t _ { 0 } + \frac { \sin \left( 4 \pi f t _ { 0 } \right) } { 2 \pi } }
\end{aligned}
$$
