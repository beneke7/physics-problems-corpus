---
id: solution-ocr-apho-2002-t-s-q1
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2002_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2002-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Solution 1

| (a) $m \ddot { X } _ { n } = S \left( X _ { n + 1 } - X _ { n } \right) - S \left( X _ { n } - X _ { n - 1 } \right)$. | 0.7 |
| :--- | :--- |
| (b) Let $X _ { n } = A \sin n k a \cos ( \omega t + \alpha )$, which has a harmonic time dependence. By analogy with the spring, the acceleration is $\ddot { X } _ { n } = - \omega ^ { 2 } X _ { n }$. |  |
| Substitute into (a): $- m A \omega ^ { 2 } \sin n k a = A S \{ \sin ( n + 1 ) k a - 2 \sin n k a + \sin ( n - 1 ) k a \}$ |  |
| $= - 4 S A \sin n k a \sin ^ { 2 } \_ k a$. | 0.6 |
| Hence $\omega ^ { 2 } = ( 4 S / m ) \sin ^ { 2 } \_ k a$. | 0.2 |
| To determine the allowed values of $k$, use the boundary condition $\sin ( N + 1 ) k a = \sin k L = 0$. | 0.7 |
| The allowed wave numbers are given by $k L = \pi , 2 \pi , 3 \pi , \ldots , N \pi$ ( $N$ in all), | 0.3 |
| and their corresponding frequencies can be computed from $\omega = \omega _ { 0 }$ sin _ ka, |  |
| in which $\omega _ { \text {max } } = \omega _ { 0 } = 2 ( S / m ) ^ { - }$is the maximum allowed frequency. | 0.4 |
| (c) $\langle E ( \omega ) \rangle = \frac { \sum _ { p = 0 } ^ { \infty } p \hbar \omega P _ { p } ( \omega ) } { \sum _ { p = 0 } ^ { \infty } P _ { p } ( \omega ) }$ |  |
| First method: | 1.5 |
| The sum is a geometric series and is $\left\{ 1 - e ^ { - \hbar \omega / k _ { B } T } \right\} ^ { - 1 }$ | 0.5 |
| We find $\langle E ( \omega ) \rangle = \frac { \hbar \omega } { e ^ { \hbar \omega / k _ { B } T } - 1 }$. |  |
| Alternatively: denominator is a geometric series $= \left\{ 1 - e ^ { - \hbar \omega / k _ { B } T } \right\} ^ { - 1 }$ | (0.5) |
| Numerator is $k _ { B } T ^ { 2 }$ (d/dT) (denominator) $= e ^ { - \hbar \omega / k _ { B } T } \left\{ 1 - e ^ { - \hbar \omega / k _ { B } T } \right\} ^ { - 2 }$ and result follows. | (1.5) |


| A non-calculus method: <br> Let $D = 1 + e ^ { - x } + e ^ { - 2 x } + e ^ { - 3 x } + \ldots$, where $x = \hbar \omega / k _ { \mathrm { B } } T$. This is a geometric series and equals $D = 1 / \left( 1 - e ^ { - x } \right)$. Let $N = e ^ { - x } + 2 e ^ { - 2 x } + 3 e ^ { - 3 x } + \ldots$. The result we want is $N / D$. Observe $\begin{aligned} D - 1 & = & \mathrm { e } ^ { - x } + \mathrm { e } ^ { - 2 x } + \mathrm { e } ^ { - 3 x } + \mathrm { e } ^ { - 4 x } + \mathrm { e } ^ { - 5 x } + \ldots \ldots . . \\ ( D - 1 ) e ^ { - x } & = & \mathrm { e } ^ { - 2 x } + \mathrm { e } ^ { - 3 x } + \mathrm { e } ^ { - 4 x } + \mathrm { e } ^ { - 5 x } + \ldots \ldots \ldots \\ ( D - 1 ) e ^ { - 2 x } & = & \mathrm { e } ^ { - 3 x } + \mathrm { e } ^ { - 4 x } + \mathrm { e } ^ { - 5 x } + \ldots \end{aligned}$ <br> Hence $N = ( D - 1 ) D$ or $N / D = D - 1 = \frac { e ^ { - x } } { 1 - e ^ { - x } } = \frac { 1 } { e ^ { x } - 1 }$. | (2.0) |
| :--- | :--- |
| (d) From part (b), the allowed $k$ values are $\pi / L , 2 \pi / L , \ldots , N \pi / L$. |  |
| Hence the spacing between allowed $k$ values is $\pi / L$, so there are $( L / \pi ) \Delta k$ allowed modes in the | 1.0 |
| wave-number interval $\Delta k$ (assuming $\Delta k \gg \pi / L$ ). |  |
| (e) Since the allowed $k$ are $\pi / L , \ldots , N \pi / L$, there are $N$ modes. | 0.5 |
| Follow the problem: $\begin{aligned} \mathrm { d } \omega / \mathrm { d } k & = \_ a \omega _ { 0 } \cos \_ k a \text { from part } ( \mathrm { a } ) \& ( \mathrm {~b} ) \\ & = \frac { 1 } { 2 } a \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } , \omega _ { \max } = \omega _ { 0 } . \text { This second form is more convenient for integration. } \end{aligned}$ | 0.5 |

The number of modes $\mathrm { d } n$ in the interval $\mathrm { d } \omega$ is

$$
\begin{gathered}
d n = ( L / \pi ) \Delta k = ( L / \pi ) ( \mathrm { d } k / \mathrm { d } \omega ) \mathrm { d } \omega \\
= ( L / \pi ) \left\{ _ { - } a \omega _ { 0 } \cos \_ k a \right\} ^ { - 1 } \mathrm {~d} \omega \\
\quad = \frac { L } { \pi } \frac { 2 } { a } \frac { 1 } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } } d \omega \\
\quad = \frac { 2 ( N + 1 ) } { \pi } \frac { 1 } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } } d \omega
\end{gathered}
$$

Total number of modes $= \int d n = \int _ { 0 } ^ { \omega _ { \text {max } } } \frac { 2 ( N + 1 ) } { \pi } \frac { d \omega } { \sqrt { \omega _ { \text {max } } ^ { 2 } - \omega ^ { 2 } } } = N + 1 \approx N$ for large $N$.
Total crystal energy from (c) and $\mathrm { d } n$ of part (e) is given by

$$
E _ { T } = \frac { 2 N } { \pi } \int _ { 0 } ^ { m _ { \max } } \frac { \hbar \omega } { e ^ { \hbar \omega / k _ { B } T } - 1 } \frac { d \omega } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } } .
$$

(f) Observe first from the last formula that $E _ { T }$ increases monotonically with temperature since


$\left\{ e ^ { \hbar \omega / k T } - 1 \right\} ^ { - 1 }$ is increasing with $T$.

When $T \rightarrow 0$, the term - 1 in the last result may be neglected in the denominator so

$$
\begin{aligned}
& E _ { T } \approx _ { T \rightarrow 0 } \frac { 2 N } { \pi } \int \hbar \omega e ^ { - \hbar \omega / k _ { B } T } \frac { 1 } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } } d \omega \\
& = \frac { 2 N } { \hbar \pi \omega _ { \max } } \left( k _ { B } T \right) ^ { 2 } \int _ { 0 } ^ { \infty } \frac { x e ^ { - x } } { \sqrt { 1 - \left( k _ { B } T x / \hbar \omega _ { \max } \right) ^ { 2 } } } d x
\end{aligned}
$$

which is quadratic in $T$ (denominator in integral is effectively unity) hence $C _ { V }$ is linear in $T$ near absolute zero.

Alternatively, if the summation is retained, we have

$$
\begin{align*}
E _ { T } & = \frac { 2 N } { \pi } \sum _ { \omega } \frac { \hbar \omega } { e ^ { \hbar \omega / k _ { B } T } - 1 } \frac { \boldsymbol { \Delta } \omega } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } } \rightarrow _ { T \rightarrow 0 } \frac { 2 N } { \pi } \sum _ { \omega } \hbar \omega e ^ { - \hbar \omega / k _ { B } T } \frac { \boldsymbol { \Delta } \omega } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } } \\
& = \frac { 2 N } { \pi } \frac { \left( k _ { B } T \right) ^ { 2 } } { \hbar \omega } \sum _ { y } e ^ { - y } y \boldsymbol { \Delta } y \tag{0.5}
\end{align*}
$$

When $T \rightarrow \infty$, use $e ^ { x } \approx 1 + x$ in the denominator,

$$
E _ { T } \approx { } _ { T \rightarrow \infty } \frac { 2 N } { \pi } \int _ { 0 } ^ { \omega _ { \max } } \frac { \hbar \omega } { \hbar \omega / k _ { B } T } \frac { 1 } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } } d \omega = \frac { 2 N } { \pi } k _ { B } T \frac { \pi } { 2 } ,
$$

which is linear; hence $C _ { V } \rightarrow N k _ { \mathrm { B } } = R$, the universal gas constant. This is the Dulong-Petit rule. Alternatively, if the summation is retained, write denominator as $e ^ { \hbar \omega / k _ { B } T } - 1 \approx \hbar \omega / k _ { B } T$ and $E _ { T } \rightarrow _ { T \rightarrow \infty } \frac { 2 N } { \pi } k _ { B } T \sum _ { \omega } \frac { \boldsymbol { \Delta } \omega } { \sqrt { \omega _ { \text {max } } ^ { 2 } - \omega ^ { 2 } } }$ which is linear in $T$, so $C _ { V }$ is constant.

Sketch of $C _ { V }$ versus $T$ :
0.2
0.2
0.3
0.2
0.2
(0.5)
0.2
0.1
(0.2)
0.5
![](../../../figures/solution-ocr/d3e7631c1301884cbdf350a4.jpg)


Answer sheet: Question 1

(a) Equation of motion of the $n ^ { \text {th } }$ mass is:
$$
m \ddot { X } _ { n } = S \left( X _ { n + 1 } - X _ { n } \right) - S \left( X _ { n } - X _ { n - 1 } \right) .
$$
(b) Angular frequencies $\omega$ of the chain's vibration modes are given by the equation:
$$
\omega ^ { 2 } = ( 4 S / m ) \sin ^ { 2 } \_ k a .
$$
Maximum value of $\omega$ is: $\quad \omega _ { \text {max } } = \omega _ { 0 } = 2 ( S / m ) ^ { - }$
The allowed values of the wave number $k$ are given by:
$$
\pi / L , 2 \pi / L , \ldots , N \pi / L .
$$
How many such values of $k$ are there? $N$

(f) The average energy per frequency mode $\omega$ of the crystal is given by:
$$
\langle E ( \omega ) \rangle = \frac { \hbar \omega } { e ^ { \hbar \omega / k _ { B } T } - 1 }
$$
(g) There are how many allowed modes in a wave number interval $\Delta k$ ?
$$
( L / \pi ) \Delta k .
$$
(e) The total number of modes in the lattice is: $N$

Total energy $E _ { \mathrm { T } }$ of crystal is given by the formula:

$$
E _ { T } = \frac { 2 N } { \pi } \int _ { 0 } ^ { \omega _ { \max } } \frac { \hbar \omega } { e ^ { \hbar \omega / k _ { B } T } - 1 } \frac { d \omega } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } } .
$$

(h) A sketch (graph) of $C _ { V }$ versus absolute temperature $T$ is shown below.
![](../../../figures/solution-ocr/a56dcbea5f7b11351b9b976a.jpg)

For $T \ll 1 , C _ { V }$ displays the following behaviour: $C _ { V }$ is linear in $T$.
As $T \rightarrow \infty , C _ { V }$ displays the following behaviour: $C _ { V } \rightarrow N k _ { \mathrm { B } } = R$, the universal gas constant.
