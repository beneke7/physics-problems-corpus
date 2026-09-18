---
id: solution-ocr-usapho-2022-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2022-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

## Death Metal

A droplet of liquid metal has constant mass density and constant surface tension $\sigma$, which causes it to form into a sphere of radius $R$. (Throughout this problem, you may neglect gravity.) A thin wire is inserted into the droplet and connected to an electric current source which slowly charges the droplet. There is a critical value of the charge, $Q _ { 0 }$, that causes the droplet to split in half. Each half takes half the total charge, $Q _ { 0 } / 2$, and half the mass of the original droplet. The "ejected half" is repelled far away from the other half, which remains in contact with the wire.

a. For simplicity, assume the droplet splits as soon as the final state (after the droplet has split in half and the two halves are well separated) has a lower total energy than that of the initial, single droplet. What is the value of $Q _ { 0 }$ ? Give your answer in terms of a dimensionless constant $A$ multiplied by a product of powers of $\sigma , R$, and the vacuum permittivity $\epsilon _ { 0 }$, and give the numeric value of $A$ to three significant figures.

## Solution

Note that $\sigma$ has units of energy/length ${ } ^ { 2 } , R$ has units of length, and $\epsilon _ { 0 }$ has units of charge ${ } ^ { 2 }$ /(energy × length). There is only one combination with dimensions of charge, so we must have

$$
Q _ { 0 } = A \sqrt { \epsilon _ { 0 } \sigma R ^ { 3 } } .
$$

To find the value of $A$, note that a droplet of radius $R$ and charge $Q _ { 0 }$ has a surface tension energy $4 \pi R ^ { 2 } \sigma$ and an electrostatic energy $Q _ { 0 } ^ { 2 } / 2 C$, where $C = 4 \pi \epsilon _ { 0 } R$ is the capacitance of a conducting sphere relative to infinity. Thus, the total energy of the drop is

$$
E _ { 0 } = 4 \pi \sigma R ^ { 2 } + \frac { Q _ { 0 } ^ { 2 } } { 8 \pi \epsilon _ { 0 } R } .
$$

When the droplet splits, the new halves both have charge $Q _ { 0 } / 2$ and a radius $R _ { 1 } = R / 2 ^ { 1 / 3 }$, since the total volume stays the same. The total energy of each of the halves is thus

$$
E _ { 1 } = 4 \pi \sigma R _ { 1 } ^ { 2 } + \frac { \left( Q _ { 0 } / 2 \right) ^ { 2 } } { 8 \pi \epsilon _ { 0 } R _ { 1 } } .
$$

Setting $E _ { 0 } = 2 E _ { 1 }$ and solving for $Q _ { 0 }$ gives

$$
A = 8 \pi \sqrt { \frac { 2 ^ { 1 / 3 } - 1 } { 2 - 2 ^ { 1 / 3 } } } \approx 14.9 .
$$

This model of the instability of a charged liquid drop is not exactly accurate, and was chosen to keep the problem simple. In reality, it isn't enough for the final state to have lower energy; the repulsive electrostatic force needs to exceed the surface tension force, or else the bubble can't get to this state of lower energy. Accounting for this requires a different calculation, first performed by Lord Rayleigh in 1882, which gives the "Rayleigh limit" of $A = 8 \pi \approx 25.1$. Students who successfully derived this result also received full credit for part (a).

b. As more charge is added to the droplet by the current source, it continues to split in half repeatedly. What is the charge $q _ { n }$ on the $n ^ { \text {th } }$ ejected droplet? Give your answer in terms of $Q _ { 0 }$.


## Solution

Consider the situation just before the $n ^ { \text {th } }$ split. At this point, the initial droplet has split in half $n - 1$ times, so it has a volume that is $2 ^ { n - 1 }$ times smaller than the original volume, and thus a radius $R _ { n - 1 } = R / 2 ^ { ( n - 1 ) / 3 }$. By part (a), the charge required to split this drop is

$$
Q _ { n } = A \sqrt { \epsilon _ { 0 } \sigma R _ { n - 1 } ^ { 3 } } = \frac { Q _ { 0 } } { 2 ^ { ( n - 1 ) / 2 } } .
$$

Once the split happens, the $n ^ { \text {th } }$ ejected droplet takes half of this charge, so

$$
q _ { n } = \frac { Q _ { n } } { 2 } = \frac { Q _ { 0 } } { 2 ^ { ( n + 1 ) / 2 } } .
$$

Also note that the radius of this droplet is $R _ { n } = R / 2 ^ { n / 3 }$.

c. In the limit where all of the initial mass of the droplet has been ejected, what is the total work done by the current source? Give your answer in terms of a dimensionless constant $B$ multiplied by a product of powers of $\sigma , R$, and $\epsilon _ { 0 }$, and give the numeric value of $B$ to three significant figures.

## Solution

By dimensional analysis, the total work $W$ done by the voltage source must be

$$
W = B \sigma R ^ { 2 } .
$$

The work $W$ is equal to the difference between the energy $E _ { f }$ of the final state, where there are many small droplets that have been dispersed to far away, and the energy $E _ { i } = 4 \pi \sigma R ^ { 2 }$ of the initial, uncharged droplet. The final energy includes the surface tension and electrostatic energy of all the small droplets, which have radius $R _ { n }$ and charge $q _ { n }$ found in the previous problem. This means that the final energy is

$$
\begin{aligned}
E _ { f } & = \sum _ { n = 1 } ^ { \infty } \left( 4 \pi \sigma R _ { n } ^ { 2 } + \frac { q _ { n } ^ { 2 } } { 8 \pi \epsilon _ { 0 } R _ { n } } \right) \\
& = 4 \pi \sigma R ^ { 2 } \sum _ { n = 1 } ^ { \infty } \frac { 1 } { 2 ^ { 2 n / 3 } } + \frac { Q _ { 0 } ^ { 2 } } { 16 \pi R _ { 0 } \epsilon _ { 0 } } \sum _ { n = 1 } ^ { \infty } \frac { 1 } { 2 ^ { 2 n / 3 } } \\
& = 4 \pi \sigma R ^ { 2 } \left( 1 + \frac { A ^ { 2 } } { 64 \pi ^ { 2 } } \right) \sum _ { n = 1 } ^ { \infty } \frac { 1 } { 2 ^ { 2 n / 3 } } \\
& = 4 \pi \sigma R ^ { 2 } \left( 1 + \frac { A ^ { 2 } } { 64 \pi ^ { 2 } } \right) \frac { 1 } { 2 ^ { 2 / 3 } - 1 } = 4 \pi \sigma R ^ { 2 } \times 2.30 .
\end{aligned}
$$

Here we have inserted the results found in part (b), then used the result of part (a) and summed the geometric series. Thus,

$$
W = E _ { f } - E _ { i } \approx \left( 4 \pi \sigma R ^ { 2 } \right) \times 1.30 = 16.3 \sigma R ^ { 2 } .
$$
