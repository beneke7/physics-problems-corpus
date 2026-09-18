---
id: solution-ocr-ipho-1986-t-s-q3
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1986_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1986-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Answer Q3
Equations of motion:

$$
\begin{aligned}
& m \frac { d ^ { 2 } u _ { 1 } } { d t ^ { 2 } } = k \left( u _ { 2 } - u _ { 1 } \right) + k \left( u _ { 3 } - u _ { 1 } \right) \\
& m \frac { d ^ { 2 } u _ { 2 } } { d t ^ { 2 } } = k \left( u _ { 3 } - u _ { 2 } \right) + k \left( u _ { 1 } - u _ { 2 } \right) \\
& m \frac { d ^ { 2 } u _ { 3 } } { d t ^ { 2 } } = k \left( u _ { 1 } - u _ { 3 } \right) + k \left( u _ { 2 } - u _ { 3 } \right)
\end{aligned}
$$

Substituting $u _ { n } ( t ) = u _ { n } ( 0 ) \cos \omega t$ and $\omega _ { o } { } ^ { 2 } = \frac { k } { m }$ :

$$
\begin{align*}
\left( 2 \omega _ { o } { } ^ { 2 } - \omega ^ { 2 } \right) u _ { 1 } ( 0 ) - \omega _ { o } { } ^ { 2 } u _ { 2 } ( 0 ) - \omega _ { o } { } ^ { 2 } u _ { 3 } ( 0 ) & = 0  \tag{a}\\
- \omega _ { o } { } ^ { 2 } u _ { 1 } ( 0 ) + \left( 2 \omega _ { o } { } ^ { 2 } - \omega ^ { 2 } \right) u _ { 2 } ( 0 ) - \omega _ { o } { } ^ { 2 } u _ { 3 } ( 0 ) & = 0  \tag{b}\\
- \omega _ { o } { } ^ { 2 } u _ { 1 } ( 0 ) - \omega _ { o } { } ^ { 2 } u _ { 2 } ( 0 ) + \left( 2 \omega _ { o } { } ^ { 2 } - \omega ^ { 2 } \right) u _ { 3 } ( 0 ) & = 0 \tag{c}
\end{align*}
$$

Solving for $u _ { 1 } ( 0 )$ and $u _ { 2 } ( 0 )$ in terms of $u _ { 3 } ( 0 )$ using (a) and (b) and substituting into (c) gives the equation equivalent to

$$
\begin{gathered}
\quad \left( 3 \omega _ { o } { } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } \omega ^ { 2 } = 0 \\
\omega ^ { 2 } = 3 \omega _ { o } { } ^ { 2 } , 3 \omega _ { o } { } ^ { 2 } \text { and } 0 \\
\omega = \sqrt { 3 } \omega _ { o } , \sqrt { 3 } \omega _ { o } \text { and } 0
\end{gathered}
$$

(ii) Equation of motion of the n'th particle:

$$
\begin{aligned}
& m \frac { d ^ { 2 } u _ { n } } { d t ^ { 2 } } = k \left( u _ { 1 + n } - u _ { n } \right) + k \left( u _ { n - 1 } - u _ { n } \right) \\
& \frac { d ^ { 2 } u _ { n } } { d t ^ { 2 } } = k \left( u _ { 1 + n } - u _ { n } \right) + \omega _ { o } ^ { 2 } \left( u _ { n - 1 } - u _ { n } \right)
\end{aligned}
$$

Substituting $u _ { n } ( t ) = u _ { n } ( 0 ) \sin \left( 2 n s \frac { \pi } { N } \right) \cos \omega _ { s } t$

$$
\begin{aligned}
& - \omega _ { s } ^ { 2 } \left( \sin \left( 2 n s \frac { \pi } { N } \right) \right) = \omega _ { o } ^ { 2 } \left[ \sin \left( 2 ( n + 1 ) s \frac { \pi } { N } \right) - 2 \sin \left( 2 n s \frac { \pi } { N } \right) + \sin \left( 2 ( n - 1 ) s \frac { \pi } { N } \right) \right] \\
& - \omega _ { s } ^ { 2 } \left( \sin \left( 2 n s \frac { \pi } { N } \right) \right) = 2 \omega _ { o } ^ { 2 } \left[ \frac { 1 } { 2 } \sin \left( 2 ( n + 1 ) s \frac { \pi } { N } \right) + \sin \left( 2 n s \frac { \pi } { N } \right) - \frac { 1 } { 2 } \sin \left( 2 ( n - 1 ) s \frac { \pi } { N } \right) \right] \\
& - \omega _ { s } ^ { 2 } \left( \sin \left( 2 n s \frac { \pi } { N } \right) \right) = 2 \omega _ { o } ^ { 2 } \left[ \sin \left( 2 n s \frac { \pi } { N } \right) \cos \left( 2 s \frac { \pi } { N } \right) - \sin \left( 2 n s \frac { \pi } { N } \right) \right] \\
& \therefore \omega _ { s } ^ { 2 } = 2 \omega _ { o } ^ { 2 } \left[ 1 - \cos \left( 2 s \frac { \pi } { N } \right) \right] : \quad ( s = 1,2 , \ldots . . N )
\end{aligned}
$$

As $2 \sin ^ { 2 } \theta = 1 - \cos 2 \theta$
This gives

$$
\omega _ { s } = 2 \omega _ { o } \sin \left( \frac { s \pi } { N } \right) \quad ( s = 1,2 , \ldots N )
$$

$\omega _ { s }$ can have values from 0 to $2 \omega _ { o } = 2 \sqrt { \frac { k } { m } }$ when $N \rightarrow \infty$; corresponding to range $s = 1$ to $\frac { N } { 2 }$.


(iv) For s'th mode
$$
\frac { \frac { u _ { n } } { u _ { n + 1 } } = \frac { \sin \left( 2 n s \frac { \pi } { N } \right) } { \sin \left( 2 ( n + 1 ) s \frac { \pi } { N } \right) } } { \frac { u _ { n + 1 } } { u _ { n } } = \frac { \sin \left( 2 n s \frac { \pi } { N } \right) } { \sin \left( 2 n s \frac { \pi } { N } \right) \cos \left( 2 s \frac { \pi } { N } \right) + \cos \left( 2 n s \frac { \pi } { N } \right) \sin \left( 2 s \frac { \pi } { N } \right) } }
$$
(a) For small $\omega , \left( \frac { s } { N } \right) \approx 0$, thus $\cos \left( 2 n s \frac { \pi } { N } \right) \cong 1$ and $= \sin \left( 2 n s \frac { \pi } { N } \right) \approx 0$, and so $\frac { u _ { n } } { u _ { n + 1 } } \cong 1$.
(b) The highest mode, $\omega _ { \text {max } } = 2 \omega _ { o }$, corresponds to $s = N / 2$
$$
\therefore \frac { u _ { n } } { u _ { n + 1 } } = - 1 \text { as } \frac { \sin ( 2 n \pi ) } { \sin ( 2 ( n + 1 ) \pi ) } = - 1
$$

Case (a)
![](../../../figures/solution-ocr/07263925615028e65f5bf776.jpg)

Case (b)
N odd
![](../../../figures/solution-ocr/1c4fcb484ad66d0a559e254e.jpg)

N even
![](../../../figures/solution-ocr/691cae5048611bdde55bd7f6.jpg)


(vi) If $m ^ { \prime } \ll m$, one can consider the frequency associated with $m ^ { \prime }$ as due to vibration of $m ^ { \prime }$ between two adjacent, much heavier, masses which can be considered stationary relative to $m ^ { \prime }$.

The normal mode frequency of $m ^ { \prime }$, in this approximation, is given by
![](../../../figures/solution-ocr/4b5fbd0b2fe186299c56eb34.jpg)

$$
\begin{aligned}
& m ^ { \prime } \ddot { x } = - 2 k x \\
& \omega ^ { \prime 2 } = \frac { 2 k } { m } \\
& \omega ^ { \prime } = \sqrt { \frac { 2 k } { m ^ { \prime } } }
\end{aligned}
$$

For small $m ^ { \prime } , \omega ^ { \prime }$ will be much greater than $\omega _ { \text {max } }$,
![](../../../figures/solution-ocr/ce6f5844fd1dcf3341b3c63a.jpg)

## DIATOMIC SYSTEM

More light masses, $m ^ { \prime }$, will increase the number of frequencies in region of $\omega ^ { \prime }$ giving a bandgap-band spectrum.
![](../../../figures/solution-ocr/fa3695b2dfe0e3fb8dadc088.jpg)
