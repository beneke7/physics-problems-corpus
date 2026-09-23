---
id: usapho-2022-b1
source: usapho
native_id: "Question B1"
year: 2022
language: en
translated: false
topic: [thermodynamics]
subtopic: [ideal-gas, pressure, data-fitting]
difficulty: null
difficulty_norm: 3
difficulty_level: 4
math_tools: [numerical]
format: scaffolded
core_ideas: []
estimated_time_min: 35
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/usapho/2022.mmd"
verification_status: pending
---

## Question B1

## Virial Reality

The ideal gas law states that $P V_{m}=R T$, where $V_{m}=V / n$ is the volume per mole of gas. However, any real gas will exhibit deviations from the ideal gas law, described by the virial expansion,

$$
P V_{m}=R T\left(1+\frac{B(T)}{V_{m}}+\frac{C(T)}{V_{m}^{2}}+\ldots\right) .
$$

For gases with low density, the higher-order terms are negligible, so in this problem we will neglect all of the temperature-dependent terms in parentheses except for $B(T) / V_{m}$. The table below shows measurements of $B$ for nitrogen gas $\left(N_{2}\right)$ at atmospheric pressure, $P=1.01 \times 10^{5} \mathrm{~Pa}$.

| $T(\mathrm{~K})$ | $B\left(\mathrm{~cm}^{3} / \mathrm{mol}\right)$ |
| :--- | :--- |
| 100 | -160 |
| 200 | -35 |
| 300 | -4.2 |
| 400 | 9.0 |
| 500 | 16.9 |
| 600 | 21.3 |

a. According to the ideal gas law, what is the value of $V_{m}$ at temperatures 100 K, 300 K, and 600 K? Give your answers in SI units.
b. What is the percentage change in $V_{m}$ at these temperatures if one accounts for $B(T)$ ?
c. In 1910, van der Waals was awarded the Nobel Prize for formulating the equation
$$
\left(P+\frac{a}{V_{m}^{2}}\right)\left(V_{m}-b\right)=R T
$$
which accurately describes many real gases. According to this equation, what is the form of $B(T)$ ? You may assume that $b \ll V_{m}$.
d. Using the data above, extract the values of $a$ and $b$. Give your answers in SI units.
e. In this problem, we have neglected terms in the virial expansion beyond $B(T)$, which is a good approximation as long as the volume correction due to $B(T)$ itself is small. Assuming the van der Waals equation holds, numerically estimate the temperature range within which the volume correction due to $B(T)$ is at most 10\%, for nitrogen gas at atmospheric pressure.
