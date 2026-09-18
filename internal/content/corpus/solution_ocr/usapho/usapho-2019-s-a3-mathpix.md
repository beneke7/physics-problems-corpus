---
id: solution-ocr-usapho-2019-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2019-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A3
Electric Slide
Two large parallel plates of area $A$ are placed at $x = 0$ and $x = d \ll \sqrt { A }$ in a semiconductor medium. The plate at $x = 0$ is grounded, and the plate at $x = d$ is at a fixed potential $- V _ { 0 }$, where $V _ { 0 } > 0$. Particles of positive charge $q$ flow between the two plates. You may neglect any dielectric effects of the medium.

a. For large $V _ { 0 }$, the velocity of the positive charges is determined by a strong drag force, so that
$$
v = \mu E
$$
where $E$ is the local electric field and $\mu$ is the charge mobility.
    i. In the steady state, there is a nonzero but time-independent density of charges between the two plates. Let the charge density at position $x$ be $\rho ( x )$. Use charge conservation to find a relationship between $\rho ( x ) , v ( x )$, and their derivatives.

Solution
In the steady state, the current is the same everywhere. Consider the region $( x , x + d x )$. The time it takes for the charge in the second region to leave is $\frac { \mathrm { d } x } { v ( x ) }$. The amount of charge that leaves is $\rho A \mathrm {~d} x$. The current is thus given by $\rho A v$, so $\rho v$ is constant. Alternatively, one can write this as

$$
v \frac { \mathrm {~d} \rho } { \mathrm {~d} x } + \rho \frac { \mathrm { d } v } { \mathrm {~d} x } = 0 .
$$

Both forms were accepted.

ii. Let $V ( x )$ be the electric potential at $x$. Derive an expression relating $\rho ( x ) , V ( x )$, and their derivatives. (Hint: start by using Gauss's law to relate the charge density $\rho ( x )$ to the derivative of the electric field $E ( x )$.)

Solution
Let us find an expression for the electric field at position $x$. The position $x$ is effectively in between two uniform sheets of charge density. The sheet on the left has charge density $\int _ { 0 } ^ { x } \rho \mathrm {~d} x + \sigma _ { 0 }$, where $\sigma _ { 0 }$ is the charge density on the left plate, and the sheet on the right has charge density $\int _ { x } ^ { d } \rho \mathrm {~d} x + \sigma _ { d }$, where $\sigma _ { d }$ is the charge density on the left plate. Then, the electric field is given by

$$
E = \sigma _ { 0 } / \left( 2 \epsilon _ { 0 } \right) + \int _ { 0 } ^ { x } \rho / \left( 2 \epsilon _ { 0 } \right) \mathrm { d } x - \int _ { x } ^ { d } \rho / \left( 2 \epsilon _ { 0 } \right) \mathrm { d } x - \sigma _ { d } / \left( 2 \epsilon _ { 0 } \right) .
$$

Then, by the Fundamental Theorem of Calculus

$$
\frac { d E } { d x } = \frac { \rho } { \epsilon _ { 0 } } ,
$$


so
$$
\frac { d ^ { 2 } V } { d x ^ { 2 } } = - \frac { \rho } { \epsilon _ { 0 } } .
$$
This can also be derived from the differential form of Gauss's Law more easily and is known as Poisson's equation.
iii. Suppose that in the steady state, conditions have been established so that $V ( x )$ is proportional to $x ^ { b }$, where $b$ is an exponent you must find, and the current is nonzero. Derive an expression for the current in terms of $V _ { 0 }$ and the other given parameters.

## Solution

We have that

$$
\rho \frac { d v } { d x } + v \frac { d \rho } { d x } = 0
$$

and now that $v = - \mu \frac { d V } { d x }$, so substituting in Poisson's equation gives us that

$$
\left( \frac { d ^ { 2 } V } { d x ^ { 2 } } \right) ^ { 2 } + \frac { d V } { d x } \left( \frac { d ^ { 3 } V } { d x ^ { 3 } } \right) = 0 .
$$

Using $V ( x ) = - V _ { 0 } ( x / d ) ^ { b }$ gives

$$
b ( b - 1 ) b ( b - 1 ) = - b b ( b - 1 ) ( b - 2 ) .
$$

The solution with $b = 0$ cannot satisfy the boundary conditions, while $b = 1$ has zero current. Assuming $b$ is neither of these values, we have $b - 1 = - ( b - 2 )$, so $b = 3 / 2$. Substituting gives

$$
v = - \frac { 3 V _ { 0 } \mu x ^ { 1 / 2 } } { 2 d ^ { 3 / 2 } }
$$

and

$$
\rho = - \frac { 3 V _ { 0 } \epsilon _ { 0 } } { 4 d ^ { 3 / 2 } x ^ { 1 / 2 } } ,
$$

so

$$
I = \rho A v = \frac { 9 \epsilon _ { 0 } \mu A V _ { 0 } ^ { 2 } } { 8 d ^ { 3 } } ,
$$

with the current flowing from left to right.

b. For small $V _ { 0 }$, the positive charges move by diffusion. The current due to diffusion is given by Fick's Law,
$$
I = - A D \frac { \mathrm {~d} \rho } { \mathrm {~d} x } .
$$
Here, $D$ is the diffusion constant, which you can assume to be described by the Einstein relation
$$
D = \frac { \mu k _ { B } T } { q } ,
$$
where $T$ is the temperature of the system.

i. Assume that in the steady state, conditions have been established so that a nonzero, steady current flows, and the electric potential again satisfies $V ( x ) \propto x ^ { b ^ { \prime } }$, where $b ^ { \prime }$ is another exponent you must find. Derive an expression for the current in terms of $V _ { 0 }$ and the other given parameters.

## Solution

We again have that $V ( x ) = V _ { 0 } ( x / d ) ^ { b }$. Note that from Poisson's equation, $\frac { d \rho } { d x } = - \epsilon _ { 0 } \frac { d ^ { 3 } V } { d x ^ { 3 } }$, so we need $b = 3$ for this expression to be constant. Therefore,

$$
I = \frac { 6 \mu k _ { B } T A \epsilon _ { 0 } V _ { 0 } } { q d ^ { 3 } } .
$$

ii. At roughly what voltage $V _ { 0 }$ does the system transition from this regime to the high voltage regime of the previous part?

## Solution

We find the crossover voltage by equating our answers in previous parts, to get

$$
\frac { 6 \mu k _ { B } T A \epsilon _ { 0 } V _ { 0 } } { q d ^ { 3 } } = \frac { 9 \epsilon _ { 0 } \mu A V _ { 0 } ^ { 2 } } { 8 d ^ { 3 } } ,
$$

or

$$
V _ { 0 } = \frac { 16 k _ { B } T } { 3 q } .
$$


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.

Once you start Part B, you will not be able to return to Part A.


## Part B
