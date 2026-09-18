---
id: solution-ocr-nbpho-2019-s-p7
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2019-dominoes]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
7. Dominoes (6 points) - Kaarel Hänni. Let the $i$ 'th domino have initial angular velocity $\omega _ { i }$. Let us first find $\omega _ { i } ^ { \prime }$, the angular velocity of this domino just before colliding with the next one. A collision occurs after the domino has fallen by an angle of $\alpha = \arctan \left( \frac { 1 } { 2 } \right)$. By conservation of energy, $\frac { 1 } { 2 } I \omega _ { i } ^ { \prime 2 } = \frac { 1 } { 2 } I \omega _ { i } ^ { 2 } +$ $\frac { 1 } { 2 } m g \ell ( 1 - \cos ( \alpha ) )$. Hence,

$$
\begin{equation*}
\omega _ { i } ^ { \prime } = \sqrt { \omega _ { i } ^ { 2 } + \frac { m g \ell } { I } ( 1 - \cos ( \alpha ) ) } = \tag{1}
\end{equation*}
$$

$$
\sqrt { \omega _ { i } ^ { 2 } + \frac { 3 g } { \ell } \left( 1 - \frac { 2 } { \sqrt { 5 } } \right) } .
$$

The collision of two dominoes is inelastic, so after the collision the two dominoes move together (for a negligibly short time before the first domino bumps into the corner of a step). After the two dominoes collide, let the angular velocity of the first one be $\omega _ { i } ^ { \prime \prime }$. Since the two dominoes move in unison,

$$
\begin{equation*}
\cos ( \alpha ) \ell \omega _ { i } ^ { \prime \prime } = \cos ( \alpha ) \frac { \ell } { 2 } \omega _ { i + 1 } \Longrightarrow \omega _ { i } ^ { \prime \prime } = \frac { 1 } { 2 } \omega _ { i + 1 } . \tag{2}
\end{equation*}
$$

During the collision, the force between the two dominoes is always horizontal (since there is no friction between the two), let this force be $F ( t )$, where $t$ is the time. Let us consider the angular momentum of the $i$ 'th domino w.r.t. its base.

$$
\begin{equation*}
I \left( \omega _ { i } ^ { \prime } - \omega _ { i } ^ { \prime \prime } \right) = \ell \cos ( \alpha ) \int _ { \text {beginning of collision } } ^ { \text {uniformiz. of velocities } } \tag{3}
\end{equation*}
$$

For the second domino, we have an analogous equation.

$$
\begin{equation*}
I \omega _ { i + 1 } = \cos ( \alpha ) \frac { \ell } { 2 } \int _ { \text {beginning of collision } } ^ { \text {uniformiz. of velocities } } F ( t ) \mathrm { d } t \tag{4}
\end{equation*}
$$

Equations (3) and (4) together imply

$$
\begin{equation*}
\omega _ { i } ^ { \prime } - \omega _ { i } ^ { \prime \prime } = 2 \omega _ { i + 1 } . \tag{5}
\end{equation*}
$$

We can now plug equations (2) and (1) into (5) to express $\omega _ { i + 1 }$ in terms of $\omega _ { i }$.

$$
\begin{equation*}
\omega _ { i + 1 } = \frac { 2 } { 5 } \omega _ { i } ^ { \prime } = \frac { 2 } { 5 } \sqrt { \omega _ { i } ^ { 2 } + \frac { 3 g } { \ell } \left( 1 - \frac { 2 } { \sqrt { 5 } } \right) } \tag{6}
\end{equation*}
$$

By stability, $\omega _ { i } = \omega _ { i + 1 } = \omega$. This lets us finally evaluate $\omega$.

$$
\begin{gathered}
\omega _ { i } ^ { 2 } = \frac { 4 } { 25 } \omega _ { i } ^ { 2 } + \frac { 12 g } { 25 \ell } \left( 1 - \frac { 2 } { \sqrt { 5 } } \right) \Longrightarrow \\
\omega = \omega _ { i } = \sqrt { \frac { 4 g } { 7 \ell } \left( 1 - \frac { 2 } { \sqrt { 5 } } \right) }
\end{gathered}
$$
