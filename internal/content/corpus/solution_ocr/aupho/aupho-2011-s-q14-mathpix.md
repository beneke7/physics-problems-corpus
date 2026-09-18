---
id: solution-ocr-aupho-2011-s-q14
source: aupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/aupho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [aupho-2011-q14]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 14
Argon atoms are special because they stay in the atmosphere for a very long time. They are not recycled like oxygen and nitrogen. The aim of this problem is to estimate how many of the argon atoms in each of your breaths were once in Galileo Galilei's lungs.
An average breath inhales around 0.5 L of air and people breath on average around once every five seconds. Air is about 1\% argon and has density $1.2 \mathrm {~kg} \mathrm {~m} ^ { - 3 }$. Assume all air particles have a mass of approximately $5 \times 10 ^ { - 26 } \mathrm {~kg}$. Take the atmosphere to have constant density and be around 20 km thick. The radius of the Earth is $R _ { \mathrm { E } } = 6.4 \times 10 ^ { 6 } \mathrm {~m}$.
Note: $1000 \mathrm {~L} = 1 \mathrm {~m} ^ { 3 }$
Solution Setup:
volume of each breath $V = 0.5 \mathrm {~L}$
density of air $\rho = 1.2 \mathrm {~kg} \mathrm {~m} ^ { - 3 }$
concentration of argon in air $n = 0.01$
molecular mass of argon $\mu = 5 \times 10 ^ { - 26 } \mathrm {~kg}$
lifetime of Galileo $T = 77 \mathrm { yr }$
frequency of breathing $f = 0.2 \mathrm {~s} ^ { - 1 }$
thickness of atmosphere $t = 20 \mathrm {~km}$
radius of Earth $R _ { E } = 6.4 \times 10 ^ { 6 } \mathrm {~m}$

a) Estimate the number of argon atoms inhaled with each breath.
Solution: The number of argon atoms in each breath is
$$
\begin{aligned}
N & = \frac { n \rho V } { \mu } \\
& = 1.2 \times 10 ^ { 20 }
\end{aligned}
$$
b) Estimate the total number of argon atoms that passed through Galileo's lungs in his 77 years of life. You may assume that when a person breathes, half of the argon atoms in each breath have never been in that person's lungs before.
Solution: The number of argon atoms Galileo has breathed is the number of breaths times the atoms in each breath, multiplied by half (to account for rebreathed atoms):
$$
\begin{aligned}
N _ { \text {Gal } } & = \frac { 1 } { 2 } N T f \\
& = 2.9 \times 10 ^ { 28 }
\end{aligned}
$$
c) Estimate the total number of argon atoms in the Earth's atmosphere.
Solution: The total number of argon atoms in the Earth's atmosphere is
$$
\begin{aligned}
N _ { a t m } & = \frac { n \rho \left( 4 \pi R _ { E } ^ { 2 } t \right) } { \mu } \\
& = 2.5 \times 10 ^ { 42 }
\end{aligned}
$$
d) Assuming that the argon breathed by Galileo is now mixed uniformly through the atmosphere, estimate the number of argon atoms in each of your breaths that were once in Galileo's lungs.

Solution: The fraction of argon in the atmosphere that has passed through Galileo is thus

$$
\begin{aligned}
p & = \frac { N _ { \text {Gal } } } { N _ { \text {atm } } } \\
& = 1.4 \times 10 ^ { - 14 }
\end{aligned}
$$

Thus in each breath, the number of atoms which were once in Galileo's lungs is

$$
\begin{aligned}
N ^ { \prime } & = p N \\
& = 1.2 \times 10 ^ { 6 }
\end{aligned}
$$
