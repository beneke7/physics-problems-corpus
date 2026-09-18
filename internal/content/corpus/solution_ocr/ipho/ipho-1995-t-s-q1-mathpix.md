---
id: solution-ocr-ipho-1995-t-s-q1
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1995_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1995-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Solutions to Theoretical Question 1

## Gravitational Red Shift and the Measurement of Stellar Mass

(a) If a photon has an effective inertial mass $m$ determined by its energy then $m c ^ { 2 } = h f$ or $m = \frac { h f } { c ^ { 2 } }$. Now, assume that gravitational mass = inertial mass, and consider a photon of energy $h f$ (mass $m = \frac { h f } { c ^ { 2 } }$ ) emitted upwards at a distance $r$ from the centre of the star. It will lose energy on escape from the gravitational field of the star.
Apply the principle of conservation of energy:
Change in photon energy $\left( h f _ { i } - h f _ { f } \right) =$ change in gravitational energy, where subscript $i \rightarrow$ initial state and subscript $f \rightarrow$ final state.
$$
\begin{aligned}
h f _ { i } - h f _ { f } & = - \frac { G M m _ { f } } { \infty } - \left[ - \frac { G M m _ { i } } { r } \right] \\
h f _ { f } & = h f _ { i } - \frac { G M m _ { i } } { r } \\
h f _ { f } & = h f _ { i } - \frac { G M \frac { h f _ { i } } { c ^ { 2 } } } { r } \\
h f _ { f } & = h f _ { i } \left[ 1 - \frac { G M } { r c ^ { 2 } } \right] \\
\frac { f _ { f } } { f _ { i } } & = \left[ 1 - \frac { G M } { r c ^ { 2 } } \right] \\
\frac { \Delta f } { f } & = \frac { f _ { f } - f _ { i } } { f _ { i } } = - \frac { G M } { r c ^ { 2 } }
\end{aligned}
$$
The negative sign shows red-shift, i.e. a decrease in $f$, and an increase in wavelength. Thus, for a photon emitted from the surface of a star of radius $R$, we have
$$
\frac { \Delta f } { f } = \frac { G M } { R c ^ { 2 } }
$$
Since the change in photon energy is small, $( \delta f \ll f )$,
$$
m _ { f } \simeq m _ { i } = \frac { h f _ { i } } { c ^ { 2 } } .
$$
(b) The change in photon energy in ascending from $r _ { i }$ to $r _ { f }$ is given by
$$
\begin{aligned}
h f _ { i } - h f _ { f } & = - \frac { G M m _ { f } } { r _ { f } } + \frac { G M m _ { i } } { r _ { i } } \\
& \simeq \frac { G M h f _ { i } } { c ^ { 2 } } \left[ \frac { 1 } { r _ { i } } - \frac { 1 } { r _ { f } } \right] \\
\therefore \frac { f _ { f } } { f _ { i } } & = 1 - \frac { G M } { c ^ { 2 } } \left[ \frac { 1 } { r _ { i } } - \frac { 1 } { r _ { f } } \right]
\end{aligned}
$$
In the experiment, $R$ is the radius of the star, $d$ is the distance from the surface of the star to the spacecraft and the above equation becomes:
$$
\begin{equation*}
\frac { f _ { f } } { f _ { i } } = 1 - \frac { G M } { c ^ { 2 } } \left[ \frac { 1 } { R } - \frac { 1 } { R + d } \right] \tag{1}
\end{equation*}
$$
The frequency of the photon must be doppler shifted back from $f _ { f }$ to $f _ { i }$ in order to cause resonance excitation of the $\mathrm { He } ^ { + }$ions in the spacecraft.
Thus apply the relativistic Doppler principle to obtain:
$$
\frac { f ^ { \prime } } { f _ { f } } = \sqrt { \frac { 1 + \beta } { 1 - \beta } }
$$

where $f ^ { \prime }$ is the frequency as received by $\mathrm { He } ^ { + }$ions in the spacecraft, and $\beta = v / c$.
That is, the gravitationally reduced frequency $f _ { f }$ has been increased to $f ^ { \prime }$ because of the velocity of the ions on the spacecraft towards the star. Since $\beta \ll 1$,

$$
\frac { f _ { f } } { f ^ { \prime } } = ( 1 - \beta ) ^ { \frac { 1 } { 2 } } ( 1 + \beta ) ^ { - \frac { 1 } { 2 } } \simeq 1 - \beta
$$

Alternatively, since $\beta \ll 1$, use the classical Doppler effect directly.
Thus

$$
f ^ { \prime } = \frac { f _ { f } } { 1 - \beta }
$$

or

$$
\frac { f _ { f } } { f ^ { \prime } } = 1 - \beta
$$

Since $f ^ { \prime }$ must be equal to $f _ { i }$ for resonance absorption, we have

$$
\begin{equation*}
\frac { f _ { f } } { f _ { i } } = 1 - \beta \tag{2}
\end{equation*}
$$

Substitution of 2 into 1 gives

$$
\begin{equation*}
\beta = \frac { G M } { c ^ { 2 } } \left( \frac { 1 } { R } - \frac { 1 } { R + d } \right) \tag{3}
\end{equation*}
$$

Given the experimental data, we look for an effective graphical solution. That is, we require a linear equation linking the experimental data in $\beta$ and $d$.
Rewrite equation 3:

$$
\beta = \frac { G M } { c ^ { 2 } } \left[ \frac { R + d - R } { ( R + d ) R } \right]
$$

Inverting the equation gives:

$$
\frac { 1 } { \beta } = \left( \frac { R c ^ { 2 } } { G M } \right) \left[ \frac { R } { d } + 1 \right]
$$

or

$$
\frac { 1 } { \beta } = \left( \frac { R ^ { 2 } c ^ { 2 } } { G M } \right) \frac { 1 } { d } + \frac { R c ^ { 2 } } { G M }
$$

Graph of $\frac { 1 } { \beta }$ vs. $\frac { 1 } { d }$
![](../../../figures/solution-ocr/832854d4184ef6bd2eb334fa.jpg)

$$
\begin{equation*}
\text { The slope is } \left( \frac { R c ^ { 2 } } { G M } \right) R = \alpha R \tag{A}
\end{equation*}
$$

$$
\begin{equation*}
\text { The } \frac { 1 } { \beta } \text {-intercept is } \left( \frac { R c ^ { 2 } } { G M } \right) = \alpha \tag{B}
\end{equation*}
$$

$$
\begin{equation*}
\text { and the } \frac { 1 } { d } \text {-intercept is } - \frac { 1 } { R } \tag{C}
\end{equation*}
$$


$R$ and $M$ can be conveniently determined from (A) and (B). Equation (C) is redundant. However, it may be used as an (inaccurate) check if needed.
From the given data:

$$
\begin{aligned}
R & = 1.11 \times 10 ^ { 8 } \mathrm {~m} \\
M & = 5.2 \times 10 ^ { 3 } 0 \mathrm {~kg}
\end{aligned}
$$

$$
\begin{align*}
& \text { From the graph, the slope } \alpha R = 3.2 \times 10 ^ { 12 } \mathrm {~m}  \tag{A}\\
& \text { The } \frac { 1 } { \beta } \text {-intercept } \alpha = \frac { R c ^ { 2 } } { G M } = 0.29 \times 10 ^ { 5 } \tag{B}
\end{align*}
$$

Dividing (A) by (B)

$$
R = \frac { 3.2 \times 10 ^ { 12 } \mathrm {~m} } { 0.29 \times 10 ^ { 5 } } \simeq 1.104 \times 10 ^ { 8 } \mathrm {~m}
$$

Substituting this value of $R$ back into (B) gives:

$$
M = \frac { R c ^ { 2 } } { g \alpha } = \frac { \left( 1.104 \times 10 ^ { 8 } \right) \times \left( 3.0 \times 10 ^ { 8 } \right) ^ { 2 } } { \left( 6.7 \times 10 ^ { - 11 } \right) \times \left( 0.29 \times ^ { 1 } 0 ^ { 5 } \right) }
$$

or $M = 5.11 \times 10 ^ { 30 } \mathrm {~kg}$
(c)
![](../../../figures/solution-ocr/dac5fe70e3e8c2d592bd845c.jpg)
For the photon, photon momentum is $p = \frac { h f } { c }$ and photon energy is $E = h f$.
Use the mass-energy equivalence, $E = m c ^ { 2 }$, to relate the internal energy change of the atom to the rest-mass change. Thus:

$$
\begin{equation*}
\Delta E = \left( m _ { 0 } = m _ { 0 } ^ { \prime } \right) c ^ { 2 } \tag{1}
\end{equation*}
$$

In the laboratory frame of reference the energy before emission is

$$
\begin{equation*}
E = m _ { 0 } c ^ { 2 } \tag{2}
\end{equation*}
$$

Recalling the relativistic relation

$$
E ^ { 2 } = p ^ { 2 } c ^ { 2 } + m _ { 0 } ^ { 2 } c ^ { 4 }
$$

The energy after emission of a photon is

$$
\begin{equation*}
E = \sqrt { p ^ { 2 } c ^ { 2 } + m _ { 0 } ^ { \prime } { } ^ { 2 } c ^ { 4 } } + h f \tag{3}
\end{equation*}
$$

where also $p = h f / c$ by conservation of momentum.
Conservation of energy requires that (2) = (3), so that:

$$
\begin{array} { r }
\left( m _ { 0 } c ^ { 2 } - h f \right) ^ { 2 } = ( h f ) ^ { 2 } + m _ { 0 } ^ { 2 } c ^ { 4 } \\
\left( m _ { 0 } c ^ { 2 } \right) ^ { 2 } - 2 h f m _ { 0 } c ^ { 2 } = m _ { 0 } ^ { 2 } c ^ { 4 }
\end{array}
$$

Carrying out the algebra and using equation (1):

$$
\begin{aligned}
h f \left( 2 m _ { 0 } c ^ { 2 } \right) & = \left( m _ { 0 } ^ { 2 } - m _ { 0 } ^ { \prime 2 } \right) c ^ { 4 } \\
& = \left( m _ { 0 } - m _ { 0 } ^ { \prime } \right) c ^ { 2 } \left( m _ { 0 } + m _ { 0 } ^ { \prime } \right) c ^ { 2 } \\
& = \Delta E \left[ 2 m _ { 0 } - \left( m _ { 0 } - m _ { 0 } ^ { \prime } \right) \right] c ^ { 2 } \\
& = \Delta E \left[ 2 m _ { 0 } c ^ { 2 } - \Delta E \right]
\end{aligned}
$$


$$
h f = \Delta E \left[ 1 - \frac { \Delta E } { 2 m _ { 0 } c ^ { 2 } } \right]
$$

(ii)
For the emitted photon,

$$
h f = \Delta E \left[ 1 - \frac { \Delta E } { 2 m _ { 0 } c ^ { 2 } } \right] .
$$

If relativistic effects are ignored, then

$$
h f _ { 0 } = \Delta E .
$$

Hence the relativistic frequency shift $\frac { \Delta f } { f _ { 0 } }$ is given by

$$
\frac { \Delta f } { f _ { 0 } } = \frac { \Delta E } { 2 m _ { 0 } c ^ { 2 } }
$$

For $\mathrm { He } ^ { + }$transition $( n = 2 \rightarrow 1 )$, applying Bohr theory to the hydrogen-like helium ion gives:

$$
\Delta E = 13.6 \times 2 ^ { 2 } \times \left[ \frac { 1 } { 1 ^ { 2 } } - \frac { 1 } { 2 ^ { 2 } } \right] = 40.8 \mathrm { ev }
$$

Also, $m _ { 0 } c ^ { 2 } = 3.752 \times 10 ^ { 6 } \mathrm { eV }$. Therefore the frequency shift due to the recoil gives

$$
\frac { \Delta f } { f _ { 0 } } \simeq 5.44 \times 10 ^ { - 12 }
$$

This is very small compared to the gravitational red-shift of $\frac { \Delta f } { f } \sim 10 ^ { - 5 }$, and may be ignored in the gravitational red-shift experiment.
