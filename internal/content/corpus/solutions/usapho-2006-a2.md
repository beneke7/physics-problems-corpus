---
id: usapho-2006-a2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2006-a2
solution_type: official
source_document: solution-document-usapho-2006-s
source_pdf: cache/phoxiv/usapho/2006_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2006_S.pdf."
---

## Question 2

a. Treat the system as two capacitors in parallel. One has a spacing of $2 d$ and a surface area of $L(L-y)$, the other a spacing of 2 $d-d$ and a surface area of $L y$. The capacitance is then found from the formula $\epsilon_{0} A / d$ and the rule for capacitors in parallel to be

$$
C=\frac{f_{11} L(L-y)}{2 d}+\frac{f_{12} L y}{d}=\frac{r_{0} L(L+y)}{2 d} .
$$

b. The potential energy stored in the mapacitor is given by

$$
U=\frac{1}{2} \frac{Q^{2}}{C}
$$

so the electric force of attraction on the slab is

$$
\begin{aligned}
F & =-\frac{\partial U}{\partial y} \\
& =\frac{Q^{2}}{2 C^{2}} \frac{\partial C}{\partial y} \\
& =\frac{d Q^{2}}{\epsilon_{0} L(L+y)^{2}}
\end{aligned}
$$

But this is equal to the force from gravity, $m g$, when $y=L / 2$, so

$$
m=\frac{d Q^{2}}{t_{0} g L(L+L / 2)^{2}}=\frac{4 d Q^{2}}{9 f_{0} g L^{3}}
$$

c. We need to expand the expression for the force abont the point $y=L / 2$. Letting $y=L / 2 \cdot x$. we get

$$
\begin{aligned}
F & =\frac{d Q^{2}}{e_{0} L(3 L / 2+x)^{2}} \\
& =\frac{4 d Q^{2}}{9 e_{0} L^{3}}\left(1+\frac{2 x}{3 L}\right)^{-2} \\
& \approx \frac{4 d Q^{2}}{9 e_{0} L^{3}}\left(1-2 \frac{2 x}{3 L}\right) \\
& =\frac{4 d Q^{2}}{9 e_{0} L^{3}}-\frac{16 d Q^{2}}{27 e_{0} L^{4}} x
\end{aligned}
$$

We know the first term in the last line halames gravity; if is the second term that is of interest. It is useful to write it in terms of the mass.

$$
\Delta F=\frac{16 d Q^{2}}{27 \epsilon_{17} L^{4}} x=\frac{4 m g}{3 L} x
$$

so that the effective spring constant $k$ is given by

$$
k=\frac{4 m g}{3 L}
$$

The frequency of small oscillations is then

$$
f=\frac{1}{2 \pi} \sqrt{k}=\frac{1}{\pi} \sqrt{\frac{g}{3 L}}
$$
