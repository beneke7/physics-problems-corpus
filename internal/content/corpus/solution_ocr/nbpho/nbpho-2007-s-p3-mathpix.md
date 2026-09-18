---
id: solution-ocr-nbpho-2007-s-p3
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2007_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2007-temporal-focusing]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 3. Temporal focusing (10 pts)

1) Apparently, $t _ { 0 } = ( a + b ) / v _ { 0 } = ( a + b ) \sqrt { m / 2 U _ { 0 } e }$.
2) Apparently, $t = a / v _ { a } + b / v _ { b } \approx t _ { 0 } - \left[ a \left( v _ { a } - v _ { 0 } \right) + b \left( v _ { b } - v _ { 0 } \right) \right] / v _ { 0 } ^ { 2 }$. On the other hand, for constant voltage $U ( t ) , v _ { b } = v _ { 0 }$. For the interval between $B$ and $C$, we have $\Delta \left( m v ^ { 2 } / 2 \right) \approx m v _ { 0 } \left( v _ { a } - v _ { 0 } \right) = - U e$. So,

$$
t = t _ { 0 } + U e a / m v _ { 0 } ^ { 3 } = t _ { 0 } + \frac { U } { U _ { 0 } } \frac { a } { 2 } \sqrt { \frac { m } { 2 U _ { 0 } e } } .
$$

3) For the changing voltage, we can use the result of the previous question, but the voltage value should be taken at the moment of electron passing the gap. Also, the terminal velocity is changed, $v _ { 1 } - v _ { 0 }$ is related to the change of the kinetic energy $e \left[ U \left( t + t _ { a } \right) - U ( t ) \right]$. The travel time of the later electrons passing $B$ at a certain moment of time $t > 0$ should as much shorter as it was delayed, i.e.

$$
t _ { 1 } - t _ { 2 } = \sqrt { \frac { m } { 8 U _ { 0 } ^ { 3 } e } } \left\{ a [ U ( 0 ) - U ( t ) ] + b \left[ U \left( t + t _ { a } \right) - U ( t ) \right] \right\} = t ,
$$

where the flight time $t _ { a } \approx a / v _ { 0 }$ [since $U \ll U _ { 0 }$ ]. Using the suggested approximation, we obtain

$$
\left. \sqrt { \frac { m } { 8 U _ { 0 } ^ { 3 } e } } b \left[ U \left( t + a / v _ { 0 } \right) - U ( t ) \right] \right\} = t .
$$

If we seek a quadratic solution $U ( t ) = A t ^ { 2 } + B t$, we get

$$
2 A t _ { a } \left( t + t _ { a } / 2 \right) + B t _ { a } = \frac { t } { b } \sqrt { \frac { 8 U _ { 0 } ^ { 3 } e } { m } } .
$$

So,

$$
A = \sqrt { \frac { 8 U _ { 0 } ^ { 3 } e } { m } } / 2 t _ { a } b = \sqrt { \frac { 8 U _ { 0 } ^ { 3 } e } { m } } \frac { \sqrt { 2 e U _ { 0 } / m } } { a b } = \frac { 4 U _ { 0 } ^ { 2 } e } { m a b } ,
$$

and $B = - A t _ { a }$. Finally we obtain

$$
U ( t ) = \frac { 4 U _ { 0 } ^ { 2 } e } { m a b } t \left( t - a \sqrt { m / 2 U _ { 0 } e } \right) .
$$

4) Lost are those electrons, which are in the interval between $B$ and $C$, when the voltage drops to 0. The duration of the time interval, when these were emitted, is $\tau = a / v _ { 0 }$. So, the asked fraction is given by $\tau / T = \frac { a } { T } \sqrt { m / 2 U _ { 0 } e }$.
