---
id: solution-ocr-usapho-2006-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2006_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2006-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question 2

a. Treat the system as two capacitors in parallel. One has a spacing of $2 d$ and a surface area. of $L ( L - y )$, the other a spacing of $2 d - d$ and a surface area of $L y$. The capacitance is then found from the formula $\epsilon _ { 0 } A / d$ and the rule for capacitors in parallel to be
$$
\begin{equation*}
C = \frac { f _ { 11 } L ( I - y ) } { 2 d } + \frac { f _ { 12 } t y } { d } = \frac { r _ { 10 } L ( L + y ) } { 2 d } . \tag{\(A2\cdot1\)}
\end{equation*}
$$

b. The potential energy stored in the capacitor is given by

$$
\begin{equation*}
U = \frac { 1 } { 2 } \frac { Q ^ { 2 } } { C } . \tag{A2-2}
\end{equation*}
$$

so the electric force of attraction on the slab is

$$
\begin{align*}
F & = - \frac { \partial U } { \partial y }  \tag{A23}\\
& = \frac { Q ^ { 2 } } { 2 C ^ { 2 } } \frac { \partial C } { \partial y }  \tag{A2-4}\\
& = \frac { d Q ^ { 2 } } { \epsilon _ { 1 } L ( l + y ) ^ { 2 } } \tag{A2-5}
\end{align*}
$$

But this is equal to the force from gravity, $m g$, when $y = L / 2$, so

$$
\begin{equation*}
m = \frac { d Q ^ { 2 } } { t _ { 0 } g L ( L + L / 2 ) ^ { 2 } } = \frac { 4 d Q ^ { 2 } } { 9 f _ { 0 } g L ^ { 3 } } . \tag{A2-6}
\end{equation*}
$$


c. We need to expand the expression for the forw about the point $y = L / 2$. Letting $y = L / 2 \cdot x$. We get.

$$
\begin{align*}
F & = \frac { d Q ^ { 2 } } { \epsilon _ { 0 } L ( 3 L / 2 + x ) ^ { 2 } }  \tag{A2-7}\\
& = \frac { 4 d Q ^ { 2 } } { 9 \epsilon _ { 0 } L ^ { 3 } } \left( 1 + \frac { 2 x } { 3 L } \right) ^ { - 2 }  \tag{A28}\\
& \approx \frac { 4 d Q ^ { 2 } } { 9 \varepsilon _ { 0 } L ^ { 3 } } \left( 1 - 2 \frac { 2 x } { 3 L } \right)  \tag{A2-9}\\
& = \frac { 4 d Q ^ { 2 } } { 9 \epsilon _ { 0 } L ^ { 3 } } - \frac { 16 d Q ^ { 2 } } { 27 \epsilon _ { 0 } L ^ { 4 } } x \tag{A2-10}
\end{align*}
$$

We know the first term in the last line halances gravity; it is the second term that is of interest. It is useful to write it in terms of the mass.

$$
\begin{equation*}
\Delta F = \frac { 16 d Q ^ { 2 } } { 27 \epsilon _ { \emptyset } L ^ { 4 } } x = \frac { 4 m g } { 3 L } x , \tag{A2-11}
\end{equation*}
$$

so that the effective spring constant $k$ is given by

$$
\begin{equation*}
k = \frac { 4 m g } { 3 l } \tag{A2-12}
\end{equation*}
$$

The frequency of small oscillations is then

$$
f = \begin{gather*}
1  \tag{A2-13}\\
2 \pi \\
\sqrt { m }
\end{gather*} = \frac { 1 } { \pi } \sqrt { \frac { g } { 3 L } } .
$$
