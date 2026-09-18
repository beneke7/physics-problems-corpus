---
id: solution-ocr-nbpho-2017-s-p4
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2017-gravitational-waves]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 4. GRAVITATIONAL WAVES

i) Black holes will merge at this distance.

$$
r _ { \min } = r _ { s 1 } + r _ { s 2 } = \frac { 2 G \left( m _ { 1 } + m _ { 2 } \right) } { c ^ { 2 } }
$$

Substituting for $r$ in the power equation, we get the maximum power for a system with masses $m _ { 1 }$ and $m _ { 2 }$.

$$
P _ { \max } \left( m _ { 1 } , m _ { 2 } \right) = \frac { 1 } { 5 } \frac { c ^ { 5 } } { G } \frac { \left( m _ { 1 } m _ { 2 } \right) ^ { 2 } } { \left( m _ { 1 } + m _ { 2 } \right) ^ { 4 } }
$$

Now let us consider the effect of masses. Let us define $a : = \frac { \left( m _ { 1 } m _ { 2 } \right) ^ { 2 } } { \left( m _ { 1 } + m _ { 2 } \right) ^ { 4 } }$. The intuition tells us, that more power should be radiated off a bigger system, thus the masses should tend to infinity for maximum power.

However the limit $\lim _ { m _ { 1 } = m _ { 2 } \rightarrow \infty } a = 1$ suggests otherwise. So does the dimensional analysis: the dimension of $[ a ] = \frac { ( M \cdot M ) ^ { 2 } } { M ^ { 4 } } = 1$ means that the absolute values of the masses don't contribute to the equation. This is intuitively explained by the proportionally increasing Schwarzschild radii.

However the mass distribution does matter, since $a$ isn't the same for all $m _ { 1 } , m _ { 2 }$ either. Let us determine the maximum value it can take. Let us redefine it in terms of the total mass $M : = m _ { 1 } + m _ { 2 }$ and the mass distribution $k : = \frac { m _ { 1 } } { M }$. Then $m _ { 1 } = k M$
$m _ { 2 } = ( 1 - k ) M$
$\Rightarrow a = \frac { \left( m _ { 1 } m _ { 2 } \right) ^ { 2 } } { \left( m _ { 1 } + m _ { 2 } \right) ^ { 4 } } = \frac { ( k M ( k - 1 ) M ) ^ { 2 } } { M ^ { 4 } } = [ k ( k - 1 ) ] ^ { 2 }$
$\frac { d } { d k } [ k ( k - 1 ) ] ^ { 2 } = 0 \Leftrightarrow k = \frac { 1 } { 2 } \Leftrightarrow m _ { 1 } = m _ { 2 }$
$\Rightarrow a _ { \text {max } } = \left[ \frac { 1 } { 2 } \left( 1 - \frac { 1 } { 2 } \right) \right] ^ { 2 } = \frac { 1 } { 16 }$
So that finally
$P _ { \text {max } } = \frac { 1 } { 5 } \frac { c ^ { 5 } } { G } \frac { 1 } { 16 } = \frac { 1 } { 80 } \frac { c ^ { 5 } } { G } = 4.5 \times 10 ^ { 50 } \mathrm {~W}$
Interestingly enough, the peak power emitted in gravitational radiation by any merging binary system will be the same. $\frac { c ^ { 5 } } { G }$ is also called luminosity of the universe.
ii) $U = \frac { 1 } { 2 } k \Delta \ell ^ { 2 }$, energy stored in a uniformly deformed body
$k = \frac { F } { \Delta \ell }$
$F = \sigma S$
$\Delta \ell = \varepsilon \ell$
$\sigma = \varepsilon E$
$u = \frac { U } { V }$, where $V = S \ell$ is the volume
$\Rightarrow u = \frac { U } { V _ { 0 } } = \frac { 1 } { 2 } E \varepsilon ^ { 2 }$
iii) $[ G ] = L ^ { 3 } M ^ { - 1 } T ^ { - 2 }$, from e.g. $F = \frac { G M m } { r ^ { 2 } }$
$[ c ] = L T ^ { - 1 }$
$[ f ] = T ^ { - } 1$
$[ E ] = M L ^ { - 1 } T ^ { - 2 }$, from e.g. $\sigma = \varepsilon E$
let $E = G ^ { \alpha } c ^ { \beta } f ^ { \gamma }$. Solving for each dimension yields
$M : 1 = - \alpha \quad \Rightarrow \alpha = - 1$
$L : - 1 = 3 \alpha + \beta \Rightarrow \beta = 2$
$T : - 2 = - 2 \alpha - \beta - \gamma \quad \Rightarrow \gamma = 2$
$\Rightarrow E = \frac { c ^ { 2 } } { G } f ^ { 2 }$
iv) The gravitational wave spreads as a spherical wave centered at the source. It's wavefront occupies a thin spherical shell with the surface area $S = 4 \pi z ^ { 2 }$ and its associated infinitesimal volume is $d V = S d z$, where $d z = c d t$ for a wave traveling with the speed of light $c$. The power $P$ and energy density $u$ at a distance $z$ is coupled through $d E = P d t = u d V \Leftrightarrow z = \sqrt { \frac { P } { 4 \pi u c } }$.

Using the models from


$$
\begin{aligned}
& P = \frac { 1 } { 80 } \frac { c ^ { 5 } } { G } \\
& u = \frac { U } { V _ { 0 } } = \frac { 1 } { 2 } E \varepsilon ^ { 2 } \\
& E = \frac { c ^ { 2 } } { G } f ^ { 2 }
\end{aligned}
$$

we finally get

$$
z = \frac { 1 } { \sqrt { 160 \pi } } \frac { c } { \varepsilon f }
$$
