---
id: solution-ocr-usapho-2018-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2018-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

The electric potential at the center of a cube with uniform charge density $\rho$ and side length $a$ is

$$
\Phi \approx \frac { 0.1894 \rho a ^ { 2 } } { \epsilon _ { 0 } } .
$$

You do not need to derive this. ${ } ^ { 1 }$
For the entirety of this problem, any computed numerical constants should be written to three significant figures.

a. What is the electric potential at a corner of the same cube? Write your answer in terms of $\rho , a , \epsilon _ { 0 }$, and any necessary numerical constants.

## Solution

By dimensional analysis, the answer takes the form

$$
\Phi _ { c } ( a , \rho ) \approx \frac { C \rho a ^ { 2 } } { \epsilon _ { 0 } }
$$

for a dimensionless constant $C$. Note that a cube of side length $a$ consists of 8 cubes of side length $a / 2$, each with a corner at the center of the larger cube. Then

$$
\frac { 0.1894 \rho a ^ { 2 } } { \epsilon _ { 0 } } = 8 \frac { C \rho ( a / 2 ) ^ { 2 } } { \epsilon _ { 0 } }
$$

so $C = 0.1894 / 2 = 0.0947$.

b. What is the electric potential at the tip of a pyramid with a square base of side length $a$, height $a / 2$, and uniform charge density $\rho$ ? Write your answer in terms of $\rho , a , \epsilon _ { 0 }$, and any necessary numerical constants.

## Solution

A cube of side length $a$ consists of 6 such pyramids. Then we simply compute 0.1894/6 for

$$
\Phi _ { p } ( a , \rho ) \approx \frac { 0.0316 \rho a ^ { 2 } } { \epsilon _ { 0 } }
$$

c. What is the electric potential due to a square plate with side length $a$ of uniform charge density $\sigma$ at a height $a / 2$ above its center? Write your answer in terms of $\sigma , a , \epsilon _ { 0 }$, and any necessary numerical constants.
[^0]

## Solution

Let the potential due to such a square be $\Phi _ { s } ( a , \sigma )$. Note that adding a square plate of infinitesimal thickness $d z$ and side length $a$ to a square pyramid with base side length $a$ and height $a / 2$ yields a square pyramid with base side length $a + 2 d z$ and height $a / 2 + d z$.
The surface charge density of a square plate with thickness $d z$ and volume charge density $\rho$ is $\sigma = \rho d z$. Then by the principle of superposition,

$$
\Phi _ { s } ( a , \rho d z ) = \Phi _ { p } ( a + 2 d z , \rho ) - \Phi _ { p } ( a , \rho ) \approx \frac { 0.0316 \rho \left( ( a + 2 d z ) ^ { 2 } - a ^ { 2 } \right) } { \epsilon _ { 0 } } = \frac { 0.126 a \rho d z } { \epsilon _ { 0 } } .
$$

so we have

$$
\Phi _ { s } ( a , \sigma ) \approx \frac { 0.126 a \sigma } { \epsilon _ { 0 } } .
$$

d. Let $E ( z )$ be the electric field at a height $z$ above the center of a square with charge density $\sigma$ and side length $a$. If the electric potential at the center of the square is approximately $\frac { 0.281 a \sigma } { \epsilon _ { 0 } }$, estimate $E ( a / 2 )$ by assuming that $E ( z )$ is linear in $z$ for $0 < z < a / 2$. Write your answer in terms of $\sigma , a , \epsilon _ { 0 }$, and any necessary numerical constants.

## Solution

The potential difference between height 0 and $a / 2$ is

$$
\Delta \Phi = ( 0.281 - 0.126 ) \frac { a \sigma } { \epsilon _ { 0 } } = \frac { 0.155 a \sigma } { \epsilon _ { 0 } } .
$$

On the other hand, we have

$$
\Delta \Phi = \int _ { 0 } ^ { a / 2 } E ( z ) d z \approx \frac { a } { 2 } \frac { E ( 0 ) + E ( a / 2 ) } { 2 }
$$

where we approximated $E ( z )$ as linear, and $E ( 0 ) = \sigma / 2 \epsilon _ { 0 }$ by Gauss's law. Solving for $E ( a / 2 )$,

$$
E ( a / 2 ) \approx \frac { 0.119 \sigma } { \epsilon _ { 0 } }
$$

where the last significant digit is not important. Incidentally, the actual value is exactly $\sigma / 6 \epsilon _ { 0 }$, and this fact has a slick calculation-free proof.
