---
id: solution-ocr-bpho-r1-2023-s-q2
source: bpho-r1
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/bpho-r1/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [bpho-r1-2023-2-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Qu 2

a) - Kinetic energy of wind transferred to turbine $E _ { k } = \frac { 1 } { 2 } m v ^ { 2 }$
    - Take cylinder of air with a radius $r$ and length $l$ Mass of air : $m = \rho V = \rho \pi r ^ { 2 } l$
    - Substitute into: $P = \frac { E } { t } = \frac { \rho \pi r ^ { 2 } v ^ { 2 } } { 2 t }$
- Use $v = \frac { l } { t }$ to give: $P = \frac { 1 } { 2 } \rho \pi r ^ { 2 } v ^ { 3 }$
( 3 marks)
b) (i) $\rho A _ { 1 } v _ { 1 }$
    (ii) $\rho A v$
    (iii) $\rho A _ { 2 } v _ { 2 }$
    (iv) • Conservation of mass flow $\rho A _ { 1 } v _ { 1 } = \rho A v = \rho A _ { 2 } v _ { 2 }$
        - Consider change in kinetic energy of the wind.
$$
\Delta E = \frac { 1 } { 2 } m \left( v _ { 1 } ^ { 2 } - v _ { 2 } ^ { 2 } \right)
$$
            - sub in $\frac { m } { \Delta t } = \rho A v$
$$
P _ { \mathrm { out } } = \frac { 1 } { 2 } \rho A v \left( v _ { 1 } ^ { 2 } - v _ { 2 } ^ { 2 } \right)
$$
        (v) Use $v = \frac { v _ { 1 } + v _ { 2 } } { 2 }$
        - $P _ { \text {out } } = \frac { 1 } { 4 } \rho A \left( v _ { 1 } + v _ { 2 } \right) \left( v _ { 1 } ^ { 2 } - v _ { 2 } ^ { 2 } \right)$
(vi) • expand:
$$
\begin{aligned}
& P _ { \text {out } } = \frac { 1 } { 4 } \rho A \left[ v _ { 1 } ^ { 3 } - v _ { 1 } v _ { 2 } ^ { 2 } + v _ { 2 } v _ { 1 } ^ { 2 } - v _ { 2 } ^ { 3 } \right] \\
& P _ { \text {out } } = \frac { 1 } { 4 } \rho A v _ { 1 } ^ { 3 } \left[ 1 - \left( \frac { v _ { 2 } } { v _ { 1 } } \right) ^ { 2 } + \left( \frac { v _ { 2 } } { v _ { 1 } } \right) - \left( \frac { v _ { 2 } } { v _ { 1 } } \right) ^ { 3 } \right]
\end{aligned}
$$
- Sub in $x = \frac { v _ { 2 } } { v _ { 1 } }$
$$
P _ { \text {out } } = \frac { 1 } { 4 } \rho A v _ { 1 } ^ { 3 } \left[ 1 - x ^ { 2 } + x - x ^ { 3 } \right]
$$
    - Differentiate and set equal to zero
$$
\frac { d P } { d x } = \frac { 1 } { 4 } \rho A v _ { 1 } ^ { 3 } \left( - 2 x + 1 - 3 x ^ { 2 } \right) = 0
$$
    - Solve for $x$
$$
x = - 1 , \frac { 1 } { 3 } \quad \text { Take } \frac { v _ { 2 } } { v _ { 1 } } = \frac { 1 } { 3 }
$$
(vii) Use $\frac { v _ { 2 } } { v _ { 1 } } = \frac { 1 } { 3 }$
$$
\begin{aligned}
& P _ { \max } = \frac { 1 } { 4 } \rho . A . v _ { 1 } ^ { 3 } \left[ 1 - \left( \frac { 1 } { 3 } \right) ^ { 2 } + \left( \frac { 1 } { 3 } \right) - \left( \frac { 1 } { 3 } \right) ^ { 3 } \right] \\
& P _ { \max } = 0.296 \rho A v _ { 1 } ^ { 3 }
\end{aligned}
$$
(viii) $P _ { \text {max } } = 0.296 * 1.23 * \left( \pi * 107 ^ { 2 } \right) * 10 ^ { 3 }$
$$
P _ { \max } = 1.3 \times 10 ^ { 7 } \mathrm {~W}
$$
$\rho _ { \text {air } }$ was not given, so any value from 1 to 1.3 could be used here.
If $v _ { 2 }$ is taken out of the bracket then $P _ { \text {max } } = 0.296 \rho A v _ { 2 } ^ { 3 } = 35 \times 10 ^ { 7 } \mathrm {~W}$, which is $3 ^ { 3 } = 27$ times too large.
They only lose 1 mark for this as they have the method.

(8 marks)


c) (i) • Resistance: $R = \frac { \rho L } { A } = \frac { 1.68 \times 10 ^ { - 8 } \times 265 \times 10 ^ { 3 } } { \pi \times 0.022 ^ { 2 } } = 2.93 = 2.9 \Omega$
    - Power Dissipated $P = I ^ { 2 } R$
    $I = \frac { P } { V } = \frac { 800 \times 10 ^ { 6 } } { 320 \times 10 ^ { 3 } } = 2500 \mathrm {~A}$
$P = 2500 ^ { 2 } 2.93 = 1.83 \times 10 ^ { 7 } W$
    - Percentage Loss: $\%$ loss $= \frac { P _ { \text {heat } } } { P _ { \text {carried } } } = \frac { 1.83 \times 10 ^ { 7 } } { 8 \times 10 ^ { 8 } } \times 100 = 2.29 = 2.3 \%$
(ii) ● Resistance: $d R = \frac { \rho d r } { A } = \frac { \rho d r } { 2 \pi r L }$
Integrate
$$
\begin{gathered}
R = \frac { \rho } { 2 \pi L } \int _ { r _ { 1 } } ^ { r _ { 2 } } \frac { d r } { r } = \frac { \rho } { 2 \pi L } \ln \frac { r _ { 2 } } { r _ { 1 } } \\
= \frac { 1.97 \times 10 ^ { 14 } } { 2 \pi 2.65 \times 10 ^ { 5 } } \ln \frac { 4 } { 2.2 } = 7.07 \times 10 ^ { 7 } = 7.1 \times 10 ^ { 7 } \Omega
\end{gathered}
$$
OR A similar numerical answer can be obtained by taking the difference in the two radii ( 1.8 cm) and using the average radius of 3.1 cm
Then
$$
R = \frac { 1.97 \times 10 ^ { 14 } \times 1.8 \times 10 ^ { - 2 } } { 2 \pi \times 3.1 \times 10 ^ { - 2 } \times 2.65 \times 10 ^ { 5 } } = 6.9 \times 10 ^ { 7 } \Omega
$$
which would gave a current (below) of 4.6 mA, a power loss of 1500 W and percentage loss of 2 \%.
Continuing
$$
\begin{aligned}
& I _ { \text {leakage } } = \frac { V } { R } = \frac { 320 \times 10 ^ { 3 } } { 7.1 \times 10 ^ { 7 } } = 4.52 \times 10 ^ { - 3 } = 4.5 \mathrm {~mA} \\
& \text { Loss } = I ^ { 2 } R = \left( 4.52 \times 10 ^ { - 3 } \right) ^ { 2 } \times 7.07 \times 10 ^ { 7 } = 1400 \mathrm {~W}
\end{aligned}
$$
$\square$
Fractional loss $= \frac { 1400 } { 800 \times 10 ^ { 6 } } = 1.8 \times 10 ^ { - 6 } = 2 \times 10 ^ { - 4 } \%$
(iii) • We expect a small temperature difference so we can do an approximate calculation for the thermal conduction though a cylindrical surface.
Heat conductivity $P _ { \text {heat loss } } = \frac { k A \Delta T } { \Delta r } A =$ area heat transferred $= 2 \pi r _ { \text {average } } L$
$k =$ thermal conductivity
$\Delta r =$ radial thickness of XPLE
So $1.83 \times 10 ^ { 7 } = 0.28 \times 2 \pi \times 3.1 \times 10 ^ { - 2 } \times 2.65 \times 10 ^ { 5 } \times \frac { \left( T _ { \text {hot } } - T _ { \text {cold } } \right) } { 1.8 \times 10 ^ { - 2 } }$ $\square$
$T _ { \text {hot } } - 7 { } ^ { \circ } \mathrm { C } = 22.8$
$T _ { \text {hot } } = 30 ^ { \circ } \mathrm { C }$ $\square$

(8 marks)

d) (i) work function for mercury was not given in question - give mark for any mention of work function or ionisation potential etc.
    (ii) - Substitute equation for $V _ { g }$
$$
\begin{aligned}
& I = a + b V _ { g } + c V _ { g } ^ { 2 } \\
& = a + b ( A + B \cos \omega t ) + c ( A + B \cos \omega t ) ^ { 2 } \\
& = a + b A + b B \cos \omega t + c \left( A ^ { 2 } + 2 A B \cos \omega t + B ^ { 2 } \cos ^ { 2 } \omega t \right)
\end{aligned}
$$
$\square$
        - Use double angle trig identity $\cos ^ { 2 } \theta = \frac { 1 } { 2 } ( 1 + \cos 2 \theta )$ to give a term with $\cos ( 2 \omega t )$ :
$$
\begin{aligned}
I = & a + b A + c A ^ { 2 } + \frac { 1 } { 2 } c B ^ { 2 } \\
& + ( b B + 2 c A B ) \cos \omega t
\end{aligned}
$$

$$
+ \frac { c B ^ { 2 } } { 2 } \cos 2 \omega t
$$

The amplitude of the second harmonic component is $\frac { c B ^ { 2 } } { 2 }$ $\square$

- mean value of $I$ is the sum of the DC terms as the $\cos \omega t$ and $\cos 2 \omega t$ terms average to zero over many cycles $\square$
So this also contains the $B ^ { 2 }$ term $\frac { c B ^ { 2 } } { 2 }$

- When $B = 0 , \quad I = a + b A + c A ^ { 2 } = I _ { 0 }$ $\square$
So

$$
I = I _ { 0 } + \frac { c B ^ { 2 } } { 2 } + ( b B + 2 c A B ) \cos \omega t + \frac { c B ^ { 2 } } { 2 } \cos \omega t
$$

$$
I _ { \max } = I _ { 0 } + \frac { c B ^ { 2 } } { 2 } + ( b B + 2 c A B ) + \frac { c B ^ { 2 } } { 2 } = I _ { 0 } + A _ { 1 } + 2 A _ { 2 }
$$
$\square$

$$
\begin{aligned}
& I _ { \min } = I _ { 0 } + \frac { c B ^ { 2 } } { 2 } - ( b B + 2 c A B ) - \frac { c B ^ { 2 } } { 2 } = I _ { 0 } - A _ { 1 } \\
& I _ { \max } - I _ { 0 } = A _ { 1 } + 2 A _ { 2 } \\
& I _ { 0 } - I _ { \min } = A _ { 1 }
\end{aligned}
$$

Hence

$$
\chi = 1 + \frac { 2 A _ { 2 } } { A _ { 1 } }
$$

So

$$
\frac { A _ { 2 } } { A _ { 1 } } = \frac { 1 } { 2 } ( \chi - 1 )
$$
$\square$
