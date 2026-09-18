---
id: solution-ocr-usapho-2015-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2015-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

Consider the circuit shown below. $I _ { s }$ is a constant current source, meaning that no matter what device is connected between points A and B, the current provided by the constant current source is the same.
![](../../../figures/solution-ocr/e89eae0eda8efe9ce195ac2c.jpg)

a. Connect an ideal voltmeter between $A$ and $B$. Determine the voltage reading in terms of any or all of $R$ and $I _ { s }$.

## Solution

An ideal voltmeter has infinite resistance, so no current flows between A and B. By symmetry, the same current must flow down each leg, so the current in each leg is $I _ { s } / 2$.
Assume the potential at the bottom is zero. The potential at A is the same as the junction to the left of A, so

$$
V _ { A } = \frac { I _ { s } } { 2 } 2 R = I _ { s } R .
$$

The potential at B is found the same way,

$$
V _ { B } = \frac { I _ { s } } { 2 } 4 R = 2 I _ { s } R .
$$

The difference is

$$
V _ { A } - V _ { B } = - I _ { s } R .
$$

The sign is not important for scoring purposes.

b. Connect instead an ideal ammeter between $A$ and $B$. Determine the current in terms of any or all of $R$ and $I _ { s }$.

## Solution

An ideal ammeter has zero resistance, so we just need to find the current through the effective $6 R$ resistor that connects the two vertical branches. This current will flow to the left.

By symmetry, the current through each vertical resistance of $2 R$ must be the same, as well as the currents through each vertical resistance of $4 R$. This gives the system of equations

$$
\begin{aligned}
I _ { s } & = I _ { 2 } + I _ { 4 } , \\
I _ { 2 } & = I _ { 6 } + I _ { 4 } , \\
I _ { 4 } ( 4 R ) & = I _ { 2 } ( 2 R ) + I _ { 6 } ( 6 R ) .
\end{aligned}
$$


Eliminating $I _ { 2 }$ gives

$$
\begin{aligned}
I _ { s } & = I _ { 6 } + 2 I _ { 4 } , \\
4 I _ { 4 } & = 2 \left( I _ { 6 } + I _ { 4 } \right) + 6 I _ { 6 } .
\end{aligned}
$$

Finally, eliminating $I _ { 4 }$ gives $I _ { 4 } = 4 I _ { 6 }$ and

$$
I _ { 6 } = \frac { 1 } { 9 } I _ { s } .
$$

c. It turns out that it is possible to replace the above circuit with a new circuit as follows:
![](../../../figures/solution-ocr/f3a8672ea7e440361a397de7.jpg)
From the point of view of any passive resistance that is connected between A and B the circuits are identical. You don't need to prove this statement, but you do need to find $I _ { t }$ and $R _ { t }$ in terms of any or all of $R$ and $I _ { s }$.

## Solution

We can simply use the previous results. If A and B are shorted, all of the current will flow through AB, so $I _ { t } = I _ { 6 } = I _ { s } / 9$. If the resistance between A and B is infinite, the potential across AB will be $I _ { s } R$, so $R _ { t } = 9 R$. The statement we made above is called Norton's theorem.
