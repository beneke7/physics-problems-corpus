---
id: solution-ocr-spot-2019-s-q4
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2019-q4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 4 Classical Hall Effect

This problem was taken with minor adaptations from IPhO 1985 (Yugoslavia). Please refer to the solutions provided if you need further detail.

4(a)

$$
v = 25 \mathrm {~m} \mathrm {~s} ^ { - 1 }
$$


Some were confused about the direction of the current flow, which is parallel to edge $a$ as stated in the question. The idea is that in the steady-state, there will be some charge build-up to balance the Lorentz (magnetic) force.

$$
\begin{align*}
E _ { \| } & = \frac { v } { \mu } = 3.2 \mathrm {~V} \mathrm {~m} ^ { - 1 }  \tag{b}\\
E _ { \perp } & = v B = 2.5 \mathrm {~V} \mathrm {~m} ^ { - 1 }
\end{align*}
$$

The magnitude is $4.06 \mathrm {~V} \mathrm {~m} ^ { - 1 }$ and the angle is $38 ^ { \circ }$ from the edge $a$.
Some students were confused by the geometry, mixing up $a$ and $b$ and $c$.

$$
\begin{equation*}
\Delta V = b E _ { \perp } = 0.025 \mathrm {~V} \tag{c}
\end{equation*}
$$

$$
\begin{gather*}
\Delta V = \frac { I _ { 0 } B _ { 0 } } { n c e } \sin ( \omega t ) \sin ( \omega t + \delta )  \tag{~d}\\
( \Delta V ) _ { D C } = \frac { 1 } { 2 } \frac { I _ { 0 } B _ { 0 } } { n c e } \cos ( \delta )
\end{gather*}
$$

This involved substitution into the same formula as part (c) and then simplifying using the trigonometric sum-product formulae for addition and subtraction of angles.

$$
\sin ( \omega t + \delta ) = \sin ( \omega t ) \cos \delta + \cos ( \omega t ) \sin \delta
$$

The term $\sin ( \omega t ) \cos ( \omega t )$ will go as $\frac { 1 } { 2 } \sin ( 2 \omega t )$, which is purely oscillatory, while the term $\sin ^ { 2 } ( \omega t )$ goes as $\frac { 1 } { 2 } ( 1 - \cos ( 2 \omega t ) )$, which has a constant term.

The meaning of "DC component" in this case is not the root-mean-square (rms) value. The rms value is rather the DC-equivalent current that would produce the same heating effect in a resistor.
