---
id: solution-ocr-ipho-2007-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2007/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2007-t1]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
1.1) One may use any reasonable equation to obtain the dimension of the questioned quantities.
I) The Planck relation is $h v = E \quad \Rightarrow \quad [ h ] [ v ] = [ E ] \quad \Rightarrow \quad [ h ] = [ E ] [ v ] ^ { - 1 } = M L ^ { 2 } T ^ { - 1 }$ (0.2)
II) $[ c ] = L T ^ { - 1 }$
III) $F = \frac { G m m } { r ^ { 2 } } \Rightarrow [ G ] = [ F ] \left[ r ^ { 2 } \right] [ m ] ^ { - 2 } = M ^ { - 1 } L ^ { 3 } T ^ { - 2 }$
IV) $E = K _ { B } \theta \Rightarrow \left[ K _ { B } \right] = [ \theta ] ^ { - 1 } [ E ] = M L ^ { 2 } T ^ { - 2 } K ^ { - 1 }$
1.2) Using the Stefan-Boltzmann's law,
$\frac { \text { Power } } { \text { Area } } = \sigma \theta ^ { 4 }$, or any equivalent relation, one obtains:
(0.3)
$[ \sigma ] K ^ { 4 } = [ E ] L ^ { - 2 } T ^ { - 1 } \Rightarrow [ \sigma ] = M T ^ { - 3 } K ^ { - 4 }$.
1.3) The Stefan-Boltzmann's constant, up to a numerical coefficient, equals $\sigma = h ^ { \alpha } c ^ { \beta } G ^ { \gamma } k _ { B } { } ^ { \delta }$, where $\alpha , \beta , \gamma , \delta$ can be determined by dimensional analysis. Indeed, $[ \sigma ] = [ h ] ^ { \alpha } [ c ] ^ { \beta } [ G ] ^ { \gamma } \left[ k _ { B } \right] ^ { \delta }$, where e.g. $[ \sigma ] = M T ^ { - 3 } K ^ { - 4 }$.

$$
\begin{equation*}
M T ^ { - 3 } K ^ { - 4 } = \left( M L ^ { 2 } T ^ { - 1 } \right) ^ { \alpha } \left( L T ^ { - 1 } \right) ^ { \beta } \left( M ^ { - 1 } L ^ { 3 } T ^ { - 2 } \right) ^ { \gamma } \left( M L ^ { 2 } T ^ { - 2 } K ^ { - 1 } \right) ^ { \delta } = M ^ { \alpha - \gamma + \delta } L ^ { 2 \alpha + \beta + 3 \gamma + 2 \delta } T ^ { - \alpha - \beta - 2 \gamma - 2 \delta } K ^ { - \delta } , \tag{0.2}
\end{equation*}
$$

The above equality is satisfied if,

$$
\begin{align*}
& \Rightarrow \left\{ \begin{array} { l }
{ \alpha - \gamma + \delta = 1 , } \\
{ 2 \alpha + \beta + 3 \gamma + 2 \delta = 0 , } \\
{ - \alpha - \beta - 2 \gamma - 2 \delta = - 3 , } \\
{ - \delta = - 4 , }
\end{array} \quad ( \text { Each one } ( 0 . 1 ) ) \quad \Rightarrow \left\{ \begin{array} { l }
\alpha = - 3 , \\
\beta = - 2 , \\
\gamma = 0 , \\
\delta = 4 .
\end{array} \quad ( \text { Each one } ( 0.1 ) ) \right. \right.  \tag{0.1}\\
& \Rightarrow \quad \sigma = \frac { k _ { B } ^ { 4 } } { c ^ { 2 } h ^ { 3 } }
\end{align*}
$$

2.1) Since $A$, the area of the event horizon, is to be calculated in terms of $m$ from a classical theory of relativistic gravity, e.g. the General Relativity, it is a combination of $c$, characteristic of special relativity, and $G$ characteristic of gravity. Especially, it is


independent of the Planck constant $h$ which is characteristic of quantum mechanical phenomena.

$$
A = G ^ { \alpha } c ^ { \beta } m ^ { \gamma }
$$

Exploiting dimensional analysis,

$$
\begin{equation*}
\Rightarrow [ A ] = [ G ] ^ { \alpha } [ c ] ^ { \beta } [ m ] ^ { \gamma } \Rightarrow L ^ { 2 } = \left( M ^ { - 1 } L ^ { 3 } T ^ { - 2 } \right) ^ { \alpha } \left( L T ^ { - 1 } \right) ^ { \beta } M ^ { \gamma } = M ^ { - \alpha + \gamma } L ^ { 3 \alpha + \beta } T ^ { - 2 \alpha - \beta } \tag{0.2}
\end{equation*}
$$

The above equality is satisfied if,

$$
\begin{aligned}
\Rightarrow & \left\{ \begin{array} { c }
{ - \alpha + \gamma = 0 , } \\
{ 3 \alpha + \beta = 2 , } \\
{ - 2 \alpha - \beta = 0 , }
\end{array} ( \text { Each one } ( 0 . 1 ) ) \Rightarrow \left\{ \begin{array} { c }
\alpha = 2 , \\
\beta = - 4 , \\
\gamma = 2 ,
\end{array} \quad ( \text { Each one } ( 0.1 ) ) \Rightarrow \right. \right. \\
& \quad A = \frac { m ^ { 2 } G ^ { 2 } } { c ^ { 4 } } .
\end{aligned}
$$

2.2)

From the definition of entropy $d S = \frac { d Q } { \theta }$, one obtains $[ S ] = [ E ] [ \theta ] ^ { - 1 } = M L ^ { 2 } T ^ { - 2 } K ^ { - 1 }$ (0.2)
2.3) Noting $\eta = S / A$, one verifies that,

$$
\left\{ \begin{array} { l }
{ [ \eta ] = [ S ] [ A ] ^ { - 1 } = M T ^ { - 2 } K ^ { - 1 } , }  \tag{0.2}\\
{ [ \eta ] = [ G ] ^ { \alpha } [ h ] ^ { \beta } [ c ] ^ { \gamma } \left[ k _ { B } \right] ^ { \delta } = M ^ { - \alpha + \beta + \delta } L ^ { 3 \alpha + 2 \beta + \gamma + 2 \delta } T ^ { - 2 \alpha - \beta - \gamma - 2 \delta } K ^ { - \delta } , }
\end{array} \right.
$$

Using the same scheme as above,

$$
\Rightarrow \left\{ \begin{array} { l }
{ - \alpha + \beta + \delta = 1 , }  \tag{0.1}\\
{ 3 \alpha + 2 \beta + \gamma + 2 \delta = 0 , } \\
{ - 2 \alpha - \beta - \gamma - 2 \delta = - 2 , } \\
{ \delta = 1 , }
\end{array} ( \text { Each one } ( 0 . 1 ) ) \Rightarrow \left\{ \begin{array} { l }
\alpha = - 1 , \\
\beta = - 1 , \\
\gamma = 3 , \\
\delta = 1 ,
\end{array} \right. \right.
$$

thus, $\quad \eta = \frac { c ^ { \circ } k _ { B } } { G h }$.
3.1)


The first law of thermodynamics is $d E = d Q + d W$. By assumption, $d W = 0$. Using the definition of entropy, $d S = \frac { d Q } { \theta }$, one obtains,

$$
d E = \theta _ { H } d S + 0 , \quad ( 0.2 ) + ( 0.1 ) , \text { for setting } d W = 0
$$

Using, $\left\{ \begin{array} { l } S = \frac { G k _ { B } } { c h } m ^ { 2 } , \\ E = m c ^ { 2 } , \end{array} [ ( 0.1 ) \right.$ for $S ]$
one obtains, $\theta _ { H } = \frac { d E } { d S } = \left( \frac { d S } { d E } \right) ^ { - 1 } = c ^ { 2 } \left( \frac { d S } { d m } \right) ^ { - 1 }$
Therefore, $\theta _ { H } = \left( \frac { 1 } { 2 } \right) \frac { c ^ { 3 } h } { G k _ { B } } \frac { 1 } { m }$.
(0.1)+(0.1) (for the coefficient)
3.2) The Stefan-Boltzmann's law gives the rate of energy radiation per unit area. Noting that $E = m c ^ { 2 }$ we have:

$$
\left\{ \begin{array} { l }
d E / d t = - \sigma \theta _ { H } ^ { 4 } A ,  \tag{0.2}\\
\sigma = \frac { k _ { B } ^ { 4 } } { c ^ { 2 } h ^ { 3 } } \\
A = \frac { m ^ { 2 } G ^ { 2 } } { c ^ { 4 } } \\
E = m c ^ { 2 , }
\end{array} \Rightarrow c ^ { 2 } \frac { d m } { d t } = - \frac { k _ { B } ^ { 4 } } { c ^ { 2 } h ^ { 3 } } \left( \frac { c ^ { 3 } h } { 2 G k _ { B } } \frac { 1 } { m } \right) ^ { 4 } \frac { m ^ { 2 } G ^ { 2 } } { c ^ { 4 } } , \right.
$$

$\Rightarrow \quad \frac { d m } { d t } = - \frac { 1 } { 16 } \frac { c ^ { 4 } h } { G ^ { 2 } } \frac { 1 } { m ^ { 2 } } . ( 0.1 ) ($ for simplification $) + ( 0.2 ) ($ for the minus sign $)$
3.3)
By integration:

$$
\begin{equation*}
\frac { d m } { d t } = - \frac { 1 } { 16 } \frac { c ^ { 4 } h } { G ^ { 2 } } \frac { 1 } { m ^ { 2 } } . \quad \Rightarrow \int m ^ { 2 } d m = - \int \frac { c ^ { 4 } h } { 16 G ^ { 2 } } d t \tag{0.3}
\end{equation*}
$$

$\Rightarrow m ^ { 3 } ( t ) - m ^ { 3 } ( 0 ) = - \frac { 3 c ^ { 4 } h } { 16 G ^ { 2 } } t , \quad ( 0.2 ) + ( 0.2 ) \quad$ (Integration and correct boundary values)
At $t = t ^ { * }$ the black hole evaporates completely:

$$
m \left( t ^ { * } \right) = 0 \quad ( 0.1 ) \quad \Rightarrow t ^ { * } = \frac { 16 G ^ { 2 } } { 3 c ^ { 4 } h } m ^ { 3 } \quad ( 0.2 ) + ( 0.1 ) \text { (for the coefficient) }
$$

3.4) $C _ { V }$ measures the change in $E$ with respect to variation of $\theta$.


$$
\left\{ \begin{array} { l }
C _ { V } = \frac { d E } { d \theta } , \\
E = m c ^ { 2 } , \\
\theta = \frac { c ^ { 3 } h } { 2 G k _ { B } } \frac { 1 } { m }
\end{array} \Rightarrow C _ { V } = - \frac { 2 G k _ { B } } { c h } m ^ { 2 } .0 .1 \right) + ( 0.1 ) \text { (for the coefficient) }
$$

4.1) Again the Stefan-Boltzmann's law gives the rate of energy loss per unit area of the black hole. A similar relation can be used to obtain the energy gained by the black hole due to the background radiation. To justify it, note that in the thermal equilibrium, the total change in the energy is vanishing. The blackbody radiation is given by the Stefan-Boltzmann's law. Therefore the rate of energy gain is given by the same formula.
$( 0.1 ) + ( 0.4 )$ (For the first and the second terms respectively)
$$
\left\{ \begin{array} { r l }
\frac { d E } { d t } & = - \sigma \theta ^ { 4 } A + \sigma \theta _ { B } ^ { 4 } A  \tag{0.3}\\
E & = m c ^ { 2 } ,
\end{array} \quad \Rightarrow \frac { d m } { d t } = - \frac { h c ^ { 4 } } { 16 G ^ { 2 } } \frac { 1 } { m ^ { 2 } } + \frac { G ^ { 2 } } { c ^ { 8 } h ^ { 3 } } \left( k _ { B } \theta _ { B } \right) ^ { 4 } m ^ { 2 } \right.
$$
4.2) Setting $\frac { d m } { d t } = 0$, we have:
$$
\begin{equation*}
- \frac { h c ^ { 4 } } { 16 G ^ { 2 } } \frac { 1 } { m ^ { * 2 } } + \frac { G ^ { 2 } } { c ^ { 8 } h ^ { 3 } } \left( k _ { B } \theta _ { B } \right) ^ { 4 } m ^ { * 2 } = 0 \tag{0.2}
\end{equation*}
$$
and consequently,
$$
\begin{equation*}
m ^ { * } = \frac { c ^ { 3 } h } { 2 G k _ { B } } \frac { 1 } { \theta _ { B } } \tag{0.2}
\end{equation*}
$$
4.3) $$
\begin{equation*}
\theta _ { B } = \frac { c ^ { 3 } h } { 2 G k _ { B } } \frac { 1 } { m ^ { * } } \quad \Rightarrow \quad \frac { d m } { d t } = - \frac { h c ^ { 4 } } { 16 G ^ { 2 } } \frac { 1 } { m ^ { 2 } } \left( 1 - \frac { m ^ { 4 } } { m ^ { * 4 } } \right) \tag{0.2}
\end{equation*}
$$
4.4) Use the solution to 4.2,
$$
\begin{equation*}
m ^ { * } = \frac { c ^ { 3 } h } { 2 G k _ { B } } \frac { 1 } { \theta _ { B } } \quad ( 0.2 ) \text { and } 3.1 \text { to obtain, } \quad \theta ^ { * } = \frac { c ^ { 3 } h } { 2 G k _ { B } } \frac { 1 } { m ^ { * } } = \theta _ { B } \tag{0.2}
\end{equation*}
$$
One may also argue that $m ^ { * }$ corresponds to thermal equilibrium. Thus for $m = m ^ { * }$ the black hole temperature equals $\theta _ { B }$.
Or one may set $\frac { d E } { d t } = - \sigma \left( \theta ^ { * 4 } - \theta _ { B } { } ^ { 4 } \right) A = 0 \quad$ to get $\theta ^ { * } = \theta _ { B }$.

4.5) Considering the solution to 4.3, one verifies that it will go away from the equilibrium.

$$
\frac { d m } { d t } = - \frac { h c ^ { 4 } } { G ^ { 2 } } \frac { 1 } { m ^ { 2 } } \left( 1 - \frac { m ^ { 4 } } { m ^ { * 4 } } \right) \Rightarrow \left\{ \begin{array} { l l l }
m > m ^ { * } & \Rightarrow & \frac { d m } { d t } > 0  \tag{0.6}\\
m < m ^ { * } & \Rightarrow & \frac { d m } { d t } < 0
\end{array} \right.
$$
