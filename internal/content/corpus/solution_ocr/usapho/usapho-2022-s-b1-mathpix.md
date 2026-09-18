---
id: solution-ocr-usapho-2022-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2022-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

## Virial Reality

The ideal gas law states that $P V _ { m } = R T$, where $V _ { m } = V / n$ is the volume per mole of gas. However, any real gas will exhibit deviations from the ideal gas law, described by the virial expansion,

$$
P V _ { m } = R T \left( 1 + \frac { B ( T ) } { V _ { m } } + \frac { C ( T ) } { V _ { m } ^ { 2 } } + \ldots \right) .
$$

For gases with low density, the higher-order terms are negligible, so in this problem we will neglect all of the temperature-dependent terms in parentheses except for $B ( T ) / V _ { m }$. The table below shows measurements of $B$ for nitrogen gas $\left( N _ { 2 } \right)$ at atmospheric pressure, $P = 1.01 \times 10 ^ { 5 } \mathrm {~Pa}$.

$$
\begin{array} { c c }
T ( \mathrm {~K} ) & B \left( \mathrm {~cm} ^ { 3 } / \mathrm { mol } \right) \\
\hline 100 & - 160 \\
200 & - 35 \\
300 & - 4.2 \\
400 & 9.0 \\
500 & 16.9 \\
600 & 21.3
\end{array}
$$

a. According to the ideal gas law, what is the value of $V _ { m }$ at temperatures 100 K, 300 K, and 600 K? Give your answers in SI units.

## Solution

Plugging in the values and converting to $\mathrm { m } ^ { 3 } / \mathrm { mol }$ gives

$$
V _ { m } = \frac { R T } { P } = \begin{cases} 8.23 \times 10 ^ { - 3 } \mathrm {~m} ^ { 3 } / \mathrm { mol } & T = 100 \mathrm {~K} \\ 2.47 \times 10 ^ { - 2 } \mathrm {~m} ^ { 3 } / \mathrm { mol } & T = 300 \mathrm {~K} \\ 4.94 \times 10 ^ { - 2 } \mathrm {~m} ^ { 3 } / \mathrm { mol } & T = 600 \mathrm {~K} \end{cases}
$$

b. What is the percentage change in $V _ { m }$ at these temperatures if one accounts for $B ( T )$ ?

\section*{Solution}
The fractional change in volume is
$$
\frac { \Delta V _ { m } } { V _ { m } } \approx \frac { B ( T ) } { V _ { m } } \approx \begin{cases} - 1.9 \% & T = 100 \mathrm {~K} \\ - 0.02 \% & T = 300 \mathrm {~K} \\ 0.04 \% & T = 600 \mathrm {~K} \end{cases}
$$
c. In 1910, van der Waals was awarded the Nobel Prize for formulating the equation
$$
\left( P + \frac { a } { V _ { m } ^ { 2 } } \right) \left( V _ { m } - b \right) = R T
$$
which accurately describes many real gases. According to this equation, what is the form of $B ( T )$ ? You may assume that $b \ll V _ { m }$.


## Solution

We have

$$
P + \frac { a } { V _ { m } ^ { 2 } } = \frac { R T } { V _ { m } - b } \approx \frac { R T } { V _ { m } } \left( 1 + \frac { b } { V _ { m } } \right) .
$$

Rearranging yields

$$
P V _ { m } \approx R T \left( 1 + \frac { b } { V _ { m } } - \frac { a } { V _ { m } R T } \right)
$$

from which we conclude

$$
B ( T ) = b - \frac { a } { R T } .
$$

d. Using the data above, extract the values of $a$ and $b$. Give your answers in SI units.

## Solution

First, we convert the data points to SI units, giving

| $T ( \mathrm {~K} )$ | $B \left( \mathrm {~m} ^ { 3 } / \mathrm { mol } \right)$ |
| :--- | :--- |
| 100 | $- 1.6 \times 10 ^ { - 4 }$ |
| 200 | $- 3.5 \times 10 ^ { - 5 }$ |
| 300 | $- 4.2 \times 10 ^ { - 6 }$ |
| 400 | $9.0 \times 10 ^ { - 6 }$ |
| 500 | $1.69 \times 10 ^ { - 5 }$ |
| 600 | $2.13 \times 10 ^ { - 5 }$ |

Now, plotting $B$ versus $1 / T$, the slope is $- a / R$ and the $y$-intercept is $b$.
![](../../../figures/solution-ocr/90431425ddfb50dd90a3d878.jpg)
The final result is

$$
a = 0.18 \mathrm {~J} \mathrm {~m} ^ { 3 } / \mathrm { mol } ^ { 2 } , \quad b = 6 \times 10 ^ { - 5 } \mathrm {~m} ^ { 3 } / \mathrm { mol } .
$$

Any answer within 20\% of this is acceptable.
e. In this problem, we have neglected terms in the virial expansion beyond $B ( T )$, which is a good approximation as long as the volume correction due to $B ( T )$ itself is small. Assuming the van der Waals equation holds, numerically estimate the temperature range within which the volume correction due to $B ( T )$ is at most 10\%, for nitrogen gas at atmospheric pressure.

Copyright ©2022 American Association of Physics Teachers


## Solution

We are looking for the temperature range where

$$
| B ( T ) | \lesssim \frac { V _ { m } } { 10 } \approx \frac { R T } { 10 P } .
$$

At high temperatures, $B ( T )$ always yields a small correction for nitrogen at atmospheric pressure. At low temperatures, $B ( T )$ is dominated by the $- a / R T$ term, so we require

$$
T \gtrsim \frac { \sqrt { 10 P a } } { R } = 50 \mathrm {~K} .
$$

Any answer within 25\% of this is acceptable.
