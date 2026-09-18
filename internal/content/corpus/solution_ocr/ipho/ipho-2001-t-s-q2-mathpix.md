---
id: solution-ocr-ipho-2001-t-s-q2
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2001_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2001-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Part 2a

The total energy radiated per second $= 4 \pi \mathrm { R } ^ { 2 } \sigma \mathrm {~T} ^ { 4 }$, where $\sigma$ is the Stephan-Boltzmann constant. The energy incident on a unit area on earth per second is;

$$
\begin{equation*}
P = \frac { 4 \pi R ^ { 2 } \sigma T ^ { 4 } } { 4 \pi \ell ^ { 2 } } \text { yielding, } R = \left( P / \sigma T ^ { 4 } \right) ^ { 1 / 2 } \ell \tag{1}
\end{equation*}
$$

The energy of a photon is $\mathrm { hf } = \mathrm { hc } / \lambda$. The equivalent mass of a photon is $\mathrm { h } / \mathrm { c } \lambda$. Conservation of photon energy:

$$
\begin{equation*}
\frac { h c } { \lambda _ { 0 } } - \frac { G m _ { 0 } } { R } \cdot \frac { h } { c \lambda _ { 0 } } = \frac { h c } { \lambda } \tag{0.8pts}
\end{equation*}
$$

yielding

$$
\begin{equation*}
R = \frac { G m _ { 0 } \left( \lambda _ { 0 } + \Delta \lambda \right) } { c ^ { 2 } \Delta \lambda } \tag{2}
\end{equation*}
$$

and (2) yields,

$$
\begin{equation*}
m _ { 0 } = \frac { c ^ { 2 } \Delta \lambda \left( P / \sigma T ^ { 4 } \right) ^ { 1 / 2 } } { G \left( \lambda _ { 0 } + \Delta \lambda \right) } \ell \tag{3}
\end{equation*}
$$

The stars are rotating around the center of mass with equal angular speeds:

$$
\begin{equation*}
\omega = ( 2 \pi / 2 \tau ) = \pi / \tau ( 4 ) \tag{0.2pts}
\end{equation*}
$$

The equilibrium conditions for the stars are;

$$
\begin{equation*}
\frac { G M m _ { 0 } } { \left( r _ { 1 } + r _ { 2 } \right) ^ { 2 } } = m _ { 0 } r _ { 1 } \omega ^ { 2 } = M r _ { 2 } \omega ^ { 2 } \tag{5}
\end{equation*}
$$

with

$$
\begin{equation*}
r _ { 1 } = \ell \frac { \Delta \theta } { 2 } , r _ { 2 } = \ell \frac { \Delta \phi } { 2 } \tag{6}
\end{equation*}
$$

Substituting (3), (4) and (6) into (5) yields

$$
\begin{equation*}
\ell = \left( \frac { 8 c ^ { 2 } \Delta \lambda \left( P / \sigma T ^ { 4 } \right) ^ { 1 / 2 } } { \Delta \phi ( \pi / \tau ) ^ { 2 } \left( \lambda _ { 0 } + \Delta \lambda \right) ( \Delta \theta + \Delta \phi ) ^ { 2 } } \right) ^ { 1 / 2 } . \tag{0.8pts}
\end{equation*}
$$

## Part 2b

Conservation of angular momentum for the ordinary star;

$$
\begin{equation*}
m r ^ { 2 } \omega = m _ { 0 } r _ { 0 } ^ { 2 } \omega _ { 0 } \quad \text { (7) } \tag{0.6pts.}
\end{equation*}
$$

Conservation of angular momentum for dm:

$$
\begin{equation*}
r ^ { 2 } \omega d m = r _ { f } ^ { 2 } \omega _ { f } d m \tag{8}
\end{equation*}
$$

where $\omega _ { \mathrm { f } }$ is the angular velocity of the ring. Equilibrium in the original state yields,

$$
\begin{equation*}
\omega _ { 0 } = \left( \frac { G M } { r _ { 0 } ^ { 3 } } \right) ^ { 1 / 2 } \tag{9}
\end{equation*}
$$

and (7), (8) and (9) give,


$$
\begin{equation*}
\omega = \frac { m _ { 0 } r _ { 0 } } { m r ^ { 2 } } \left( \frac { G M } { r _ { 0 } } \right) ^ { 1 / 2 } , \omega _ { f } = \frac { m _ { 0 } r _ { 0 } } { m r _ { f } ^ { 2 } } \left( \frac { G M } { r _ { 0 } } \right) ^ { 1 / 2 } \tag{10}
\end{equation*}
$$

Conservation of energy for dm;

$$
\begin{equation*}
\frac { 1 } { 2 } d m \left( v _ { 0 } ^ { 2 } + r ^ { 2 } \omega ^ { 2 } \right) - \frac { G M \mathrm { dm } } { \mathrm { r } } = \frac { 1 } { 2 } d m r _ { f } ^ { 2 } \omega _ { f } ^ { 2 } - \frac { G M \mathrm { dm } } { \mathrm { r } _ { \mathrm { f } } } \tag{11}
\end{equation*}
$$

Substituting (10);

$$
\begin{equation*}
v _ { 0 } ^ { 2 } + \frac { m _ { 0 } ^ { 2 } r _ { 0 } G M } { m ^ { 2 } } \left( \frac { 1 } { r ^ { 2 } } - \frac { 1 } { r _ { f } ^ { 2 } } \right) - 2 G M \left( \frac { 1 } { r } - \frac { 1 } { r _ { f } } \right) = 0 \tag{12}
\end{equation*}
$$

Since $r _ { 0 } \gg r _ { f }$, if $r > r _ { 0 } , r ^ { - 1 }$ and $r ^ { - 2 }$ terms can be neglected. Hence,

$$
\begin{equation*}
r _ { f } = \frac { G M } { v _ { 0 } ^ { 2 } } \left( \left( 1 + \frac { m _ { 0 } ^ { 2 } r _ { 0 } v _ { 0 } ^ { 2 } } { G M m ^ { 2 } } \right) ^ { 1 / 2 } - 1 \right) . \tag{0.8pts}
\end{equation*}
$$

To show that $\mathrm { r } > \mathrm { r } _ { 0 }$ change in the linear momentum of the ordinary star in its reference frame:

$$
\begin{equation*}
- \frac { G M m } { r ^ { 2 } } + m r \omega ^ { 2 } - m \frac { d v _ { r } } { d t } = - v _ { 0 } \frac { d m _ { g a s } } { d t } \tag{13}
\end{equation*}
$$

and (13) implies the existence of an outward force initially and hence r starts growing. Using (7) one can write

$$
\begin{equation*}
m r \omega ^ { 2 } = \frac { m _ { 0 } ^ { 2 } r _ { 0 } ^ { 4 } \omega _ { 0 } ^ { 2 } } { m r ^ { 3 } } . \tag{0.4pts}
\end{equation*}
$$

Hence, $\frac { \text { Gravitational force } } { \text { Centrifugal force } } \alpha \mathrm { m } ^ { 2 } r$.
where m is definitely decreasing. If r starts decreasing at some time also, this ratio starts decreasing, which is a contradiction.

So $\mathrm { r } > \mathrm { r } _ { 0 }$.
