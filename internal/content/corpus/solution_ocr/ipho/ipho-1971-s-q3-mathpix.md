---
id: solution-ocr-ipho-1971-s-q3
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1971_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1971-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question 3.

A circuit equivalent to the given one is shown in Fig. 3. In a steady state (the capacitors are completely charged already) the same current $I$ flows through all the resistors in the closed circuit ABFGHDA. From the Kirchhoff's second rule we obtain:

$$
\begin{equation*}
I = \frac { E _ { 4 } - E _ { 1 } } { 4 R } . \tag{3.1}
\end{equation*}
$$

Next we apply this rule for the circuit ABCDA:

$$
\begin{equation*}
V _ { 1 } + I R = E _ { 2 } - E _ { 1 } , \tag{3.2}
\end{equation*}
$$

where $V _ { 1 }$ is the potential difference across the capacitor $C _ { 1 }$. By using the expression (3.1) for $I$, and the equation (3.2) we obtain:

$$
\begin{equation*}
V _ { 1 } = E _ { 2 } - E _ { 1 } - \frac { E _ { 4 } - E _ { 1 } } { 4 } = 1 \mathrm {~V} . \tag{3.3}
\end{equation*}
$$

Similarly, we obtain the potential differences $V _ { 2 }$ and $V _ { 4 }$ across the capacitors $C _ { 2 }$ and $C _ { 4 }$ by considering circuits BFGCB and FGHEF:

$$
\begin{equation*}
V _ { 2 } = E _ { 4 } - E _ { 2 } - \frac { E _ { 4 } - E _ { 1 } } { 4 } = 5 \mathrm {~V} , \tag{3.4}
\end{equation*}
$$


$$
\begin{equation*}
V _ { 4 } = E _ { 4 } - E _ { 3 } - \frac { E _ { 4 } - E _ { 1 } } { 4 } = 1 \mathrm {~V} . \tag{3.5}
\end{equation*}
$$

Finally, the voltage $V _ { 3 }$ across $C _ { 3 }$ is found by applying the Kirchhoff's rule for the outermost circuit EHDAH:

$$
\begin{equation*}
V _ { 3 } = E _ { 3 } - E _ { 1 } - \frac { E _ { 4 } - E _ { 1 } } { 4 } = 5 \mathrm {~V} . \tag{3.6}
\end{equation*}
$$

The total energy of the capacitors is expressed by the formula:

$$
\begin{equation*}
W = \frac { C } { 2 } \left( V _ { 1 } ^ { 2 } + V _ { 2 } ^ { 2 } + V _ { 3 } ^ { 2 } + V _ { 4 } ^ { 2 } \right) = 26 \mu \mathrm {~J} . \tag{3.7}
\end{equation*}
$$

![](../../../figures/solution-ocr/9c1e4d58de4a35ba56f3fb38.jpg)
Fig. 3

When points B and H are short connected the same electric current $I$ ' flows through the resistors in the BFGH circuit. It can be calculated, again by means of the Kirchhoff's rule, that:

$$
\begin{equation*}
I ^ { \prime } = \frac { E _ { 4 } } { 2 R } . \tag{3.8}
\end{equation*}
$$

The new steady-state voltage on $C _ { 2 }$ is found by considering the BFGCB circuit:

$$
\begin{equation*}
V _ { 2 } ^ { \prime } + I ^ { \prime } R = E _ { 4 } - E _ { 2 } \tag{3.9}
\end{equation*}
$$

or finally:

$$
\begin{equation*}
V _ { 2 } ^ { \prime } = \frac { E _ { 4 } } { 2 } - E _ { 2 } = 0 \mathrm {~V} . \tag{3.10}
\end{equation*}
$$

Therefore the charge $q _ { 2 } ^ { \prime }$ on $C _ { 2 }$ in the new steady state is zero.
