---
id: solution-ocr-usapho-2024-s-b3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2024-b3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B3

Quality Quest
The quality factor is a dimensionless number which quantifies how efficiently a system stores energy and how strongly it responds on resonance. For a circuit consisting of a capacitor $C$, an inductor $L$, and a small resistance $R$ in series, the resonant frequency is approximately $\omega _ { 0 } = 1 / \sqrt { L C }$, and the quality factor, assumed to be large throughout this problem, is

$$
Q = \frac { 1 } { R } \sqrt { \frac { L } { C } } .
$$

In this problem, we explore several ways to measure $Q$. Uncertainty analysis is not required.

a. Alice measures $Q$ by seeing how oscillations in the circuit damp over time. Suppose that initially, the charge on the capacitor is $q$ and the current is zero. The next time the current is zero, the charge is $- q ( 1 - \delta )$. Find an approximate expression for $\delta$, in terms of $\omega _ { 0 }$ and $Q$.

Solution
In the absence of resistance, the charge on the capacitor and the current are

$$
q _ { C } ( t ) = q \cos \left( \omega _ { 0 } t \right) , \quad I ( t ) = \frac { d q _ { C } ( t ) } { d t } = - q \omega _ { 0 } \sin \left( \omega _ { 0 } t \right) .
$$

The total energy dissipated in the resistor is approximately

$$
\Delta E = \int _ { 0 } ^ { \pi / \omega _ { 0 } } I ( t ) ^ { 2 } R d t = q ^ { 2 } \omega _ { 0 } ^ { 2 } R \int _ { 0 } ^ { \pi / \omega _ { 0 } } \sin ^ { 2 } \left( \omega _ { 0 } t \right) d t = \frac { \pi } { 2 } q ^ { 2 } \omega _ { 0 } R
$$

On the other hand, we also have

$$
\Delta E = \frac { q ^ { 2 } - ( q ( 1 - \delta ) ) ^ { 2 } } { 2 C } \approx \frac { q ^ { 2 } \delta } { C } .
$$

Equating the two yields

$$
\delta = \frac { \pi } { 2 } \omega _ { 0 } R C = \frac { \pi } { 2 Q } .
$$

b. Bob and Charles drive their circuits with a sinusoidal voltage $V ( t ) = V _ { 0 } \cos \omega t$. It can be shown that in the steady state, the voltage across the capacitor oscillates with amplitude
$$
V _ { c } = \frac { V _ { 0 } } { \sqrt { \left( 1 - \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + \left( \omega / \omega _ { 0 } Q \right) ^ { 2 } } } .
$$
The circuits Bob and Charles have are similar, but are not precisely the same.
    i.Bob fixes the value of $V _ { 0 }$ so that the highest value of $V _ { c }$ at any frequency is precisely 10.00 V. His equipment can precisely compare the amplitudes of a small DC and AC voltage. He thus performs two very accurate voltage measurements.

| $\omega ( \mathrm { rad } / \mathrm { s } )$ | 0.0 | 183.3 |
| :--- | :--- | :--- |
| $V _ { c }$ (Volts) | 0.1219 | 0.1219 |

Using this data, find the numeric values of $Q$ and $\omega _ { 0 }$ as accurately as possible.


## Solution

Note that at $\omega = 0$, we simply have $V _ { c } = V _ { 0 }$, while on resonance, we have $V _ { c } = Q V _ { 0 }$. Thus, in this case we can directly read off the quality factor as

$$
Q = \frac { 10.00 } { 0.1219 } = 82.0 .
$$

As for the other data point, it also has $V _ { c } = V _ { 0 }$, which implies

$$
1 = \left( 1 - \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + \left( \omega / \omega _ { 0 } Q \right) ^ { 2 } .
$$

This can be simplified by recognizing a difference of squares, giving

$$
\left( \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) \left( 2 - \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) = \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } Q ^ { 2 }
$$

and solving for $\omega _ { 0 }$ gives

$$
\omega _ { 0 } = \frac { \omega } { \sqrt { 2 - 1 / Q ^ { 2 } } } = 129.6 \mathrm { rad } / \mathrm { s } .
$$

Alternatively, since we know $Q$, we know that the $\left( \omega / \omega _ { 0 } Q \right) ^ { 2 }$ term is negligible, to the precision at which we're working. Simply dropping that term gives $\omega _ { 0 } = \omega / \sqrt { 2 }$, which gives the same numeric answer, up to the four significant figures used in this part.

ii.Charles can precisely tune $\omega$, but cannot precisely measure small voltages. He thus fixes $V _ { 0 }$ to some other value and takes data near the resonance, where $V _ { c }$ is relatively large.

| $\omega ( \mathrm { rad } / \mathrm { s } )$ | 133.0 | 133.5 | 134.0 | 134.5 | 135.0 | 135.5 | 136.0 | 136.5 | 137.0 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $V _ { c }$ (Volts) | 3.64 | 4.76 | 6.52 | 8.53 | 8.18 | 6.06 | 4.44 | 3.42 | 2.75 |

Using this data, find the numeric values of $Q$ and $\omega _ { 0 }$ as accurately as possible. (Hint: you may use the graph paper in the answer sheets, but full credit is attainable without graphing. To find $Q$, you should first find $\omega _ { 0 }$, then simplify the equation above using $\omega \approx \omega _ { 0 }$.)

## Solution

The maximum value of $V _ { c }$ is attained at $\omega _ { 0 }$. Looking at the data, we can see that $\omega _ { 0 }$ is between 134.5 and 135.0 rad/s, and slightly closer to the former; we therefore take $\omega _ { 0 } = 134.7 \mathrm { rad } / \mathrm { s }$. This result is already as precise as the precision of the data allows, so there's no point in trying to improve it further. Any answer within 0.1 rad/s is acceptable. The next step is to extract $Q$. Since all the data is taken near resonance, $\omega \approx \omega _ { 0 }$, we have

$$
\frac { V _ { 0 } ^ { 2 } } { V _ { c } ^ { 2 } } = \left( 1 - \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + \left( \omega / \omega _ { 0 } Q \right) ^ { 2 } \approx 4 \left( 1 - \omega / \omega _ { 0 } \right) ^ { 2 } + \frac { 1 } { Q ^ { 2 } } .
$$

We don't know $V _ { 0 } ^ { 2 }$, so we divide through to get

$$
\frac { 1 } { V _ { c } ^ { 2 } } = \frac { 4 } { V _ { 0 } ^ { 2 } } \left( 1 - \omega / \omega _ { 0 } \right) ^ { 2 } + \frac { 1 } { V _ { 0 } ^ { 2 } Q ^ { 2 } } .
$$


So plotting $1 / V _ { c } ^ { 2 }$ vs. $\left( 1 - \omega / \omega _ { 0 } \right) ^ { 2 }$ gives a line with slope $m = 4 / V _ { 0 } ^ { 2 }$ and intercept $b = 1 / V _ { 0 } ^ { 2 } Q ^ { 2 }$, from which we find $Q = \sqrt { m / 4 b }$. It would take too long to apply this to all of the data points, so let's just select one near the resonance and one at the ends, as such a pair yields maximal sensitivity to the slope and intercept.

| $\omega ( \mathrm { rad } / \mathrm { s } )$ | $V _ { c } ( \mathrm {~V} )$ | $\left( 1 - \omega / \omega _ { 0 } \right) ^ { 2 }$ | $1 / V _ { c } ^ { 2 } \left( \mathrm {~V} ^ { - 2 } \right)$ |
| :--- | :--- | :--- | :--- |
| 134.5 | 8.53 | $2.205 \times 10 ^ { - 6 }$ | 0.01374 |
| 137.0 | 2.75 | $2.916 \times 10 ^ { - 4 }$ | 0.1322 |

The slope of this line is $m = 409.3 \mathrm {~V} ^ { - 2 }$, from which we compute an intercept $b =$ $0.01284 \mathrm {~V} ^ { - 2 }$, and a quality factor $Q = 89.3$. This is a very rough analysis, but it gets pretty close to the true answer of $Q = 88.0$.
There are many ways to do this problem. You can get decent accuracy (i.e. within ±10 of the true answer) just by eyeballing the graph. A good result will be within $\pm 3$ of the true answer. The analysis above is more than twice as precise as that, and you can do even better by repeating the analysis using the point at the other end, $\omega = 133.0 \mathrm { rad } / \mathrm { s }$, and averaging the results. Ideally, this will give you the same answer, but in practice there are errors on $\omega _ { 0 }$ and $V _ { c }$ at $\omega = 134.5 \mathrm { rad } / \mathrm { s }$, which averaging would partially cancel out.

c. The gain function of this circuit is defined as $G = V _ { R } / V _ { 0 }$, where $V _ { R }$ is the amplitude of the voltage across the resistor, as shown below.
![](../../../figures/solution-ocr/b9e76626e3d4e15346131e06.jpg)
    i. Find an expression for $G$ in terms of $\omega , \omega _ { 0 }$, and $Q$.

## Solution

This is simplest using complex impedances. We note that

$$
G = \frac { V _ { R } } { V _ { C } } \frac { V _ { C } } { V _ { 0 } } = \left| \frac { Z _ { R } } { Z _ { C } } \right| \frac { V _ { C } } { V _ { 0 } } = \omega R C \frac { V _ { C } } { V _ { 0 } } = \frac { \omega / \left( \omega _ { 0 } Q \right) } { \sqrt { \left( 1 - \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + \left( \omega / \omega _ { 0 } Q \right) ^ { 2 } } } .
$$

Simplifying a bit gives the final answer,

$$
G = \frac { 1 } { \sqrt { 1 + \left( \left( \omega _ { 0 } Q / \omega \right) \left( 1 - \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) \right) ^ { 2 } } }
$$

ii. This setup can be used to reject voltages at certain frequencies. Qualitatively describe the range(s) of frequencies for which $G$ is small.

## Solution

This setup is a frequency filter. The gain $G$ is small everywhere except for a narrow band


of frequencies around $\omega _ { 0 }$, whose width is of order $\omega _ { 0 } / Q$.
