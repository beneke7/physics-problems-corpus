---
id: solution-ocr-spot-2026-s-q6
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q6]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
6. In this question, we will consider variations of the Michelson-Morley interferometer.
(a) In the interferometer below, an ideal beam splitter is placed at $A$ while two perfectly reflective mirrors are placed at $B$ and $C$, with $| A B |$ and $| A C |$ being equidistant. To mesaure the refractive index of a gas such as helium, we insert a hollow glass cell of

width $D = 0.10 \mathrm {~m}$ and negligible thickness into one path of the interferometer and evacuate it. Monochromatic light of wavelength $\lambda$ is shone into the interferometer.
![](../../../figures/solution-ocr/7ec9a6558908ceb18d3d94e5.jpg)
Helium gas with refractive index $n$ is then slowly added to the cell until the pressure reaches atmospheric pressure. As this is done, the intensity of the light at the detector will vary. We then carefully count the number of times the intensity varies from maximum to minimum and back to maximum. If $\lambda = 633 \mathrm {~nm}$ (from a helium-neon laser) and there are $k = 11$ cycles back to maximum intensity, find the numerical value of $n - 1$ at atmospheric pressure. The interferometer is placed in the $x - y$ plane and you may neglect effects of gravity.

Solution: The path length difference increases by $11 \lambda$. Letting $k = 11$, we have

$$
\frac { 2 n D - 2 D } { \lambda } = k \lambda
$$

We get

$$
n - 1 = \frac { k \lambda } { 2 D } = 3.48 \times 10 ^ { - 5 }
$$

(b) Suppose the tiny gas chamber is now moving at speed $v$ from $A$ towards $B$, find the phase difference $| \Delta \phi |$ between the light from the two paths meeting at the detector in terms of the refractive index $n$, wavelength $\lambda$, and other relevant constants.

Solution: The speed of light in a stationary chamber is $\frac { 1 } { n }$ (we work in units where $c = 1$ ). By relativistic velocity addition, the light is effectively "dragged along" the gas chamber when the chamber is moving at speed $v$. We therefore have the new speed

$$
v _ { \mathrm { in } } = \frac { \frac { 1 } { n } + v } { 1 + \frac { v } { n } } = \frac { v n + 1 } { n + v }
$$

The time taken $A \rightarrow B$ to travel through the chamber when the light travels in the same direction as the chamber is

$$
t _ { \mathrm { in } } = \frac { D / \gamma _ { v } } { v ^ { \prime } - v }
$$

where $\frac { D } { \gamma _ { v } }$ is due to length contraction. The time the light spends outside of the


chamber is

$$
t _ { \mathrm { out } } = \frac { L - \frac { D } { \gamma _ { v } } - v t _ { \mathrm { in } } } { c }
$$

The total time is therefore

$$
t _ { \mathrm { in } } + t _ { \mathrm { out } } = \frac { L - \frac { D } { \gamma _ { v } } + ( c - v ) t _ { \mathrm { in } } } { c } \Longrightarrow L - \frac { D } { \gamma _ { v } } + ( 1 - v ) t _ { \mathrm { in } } = L + \frac { D ( n - 1 ) } { \gamma ( v + 1 ) }
$$

When the light is travelling from $B \rightarrow A$ against the direction of the glass, we reverse the direction of $v \rightarrow - v$ and get a total time of $L + \frac { D ( n - 1 ) } { \gamma ( 1 - v ) }$. The original time without the gas chamber would have been $\frac { 2 L } { c }$. Hence, the time difference is

$$
\Delta t = \frac { 2 D ( n - 1 ) } { \sqrt { 1 - v ^ { 2 } } }
$$

We also have $\Delta \phi = \omega \Delta t$. Restoring the factor of $t$ and setting $\omega = \frac { 2 \pi c } { \lambda }$, we get

$$
\Delta \phi = \frac { 4 \pi ( n - 1 ) } { \sqrt { 1 - \frac { v ^ { 2 } } { c ^ { 2 } } } } \frac { D } { \lambda }
$$

Alternative Solution: We can also solve this problem by working in the frame of the gas chamber, which is simpler. In this frame, the distance travelled is $x ^ { \prime } = D$ and time taken is $t ^ { \prime } = \frac { D } { v _ { \mathrm { in } } } = \frac { n D } { c }$. We can use Lorentz transformation to change back to the lab frame

$$
\binom { c t } { x } = \left( \begin{array} { c c }
\gamma & \gamma \beta \\
\gamma \beta & \gamma
\end{array} \right) \binom { c t ^ { \prime } } { x ^ { \prime } } \Longrightarrow \left\{ \begin{array} { l }
{ c t = \gamma ( c t ^ { \prime } + \beta x ^ { \prime } ) } \\
{ x = \gamma ( x ^ { \prime } + \beta c t ^ { \prime } ) }
\end{array} \Longrightarrow \left\{ \begin{array} { l }
c t = \gamma D ( n + \beta ) \\
x = \gamma D ( 1 + \beta n )
\end{array} \right. \right.
$$

As the light travels from $A$ to $B$, the light takes time $t$ to travel a distance $x$, while the light on the other path from $A$ to $C$ takes time $\frac { x } { c }$ to travel the same distance $x$. Hence, the difference in time is

$$
\Delta t _ { 1 } = t - \frac { x } { c } = \gamma \frac { D } { c } ( n + \beta ) - \gamma \frac { D } { c } ( 1 + \beta n )
$$

For the reverse direction, we replace $\beta \rightarrow - \beta$ and get

$$
\Delta t _ { 2 } = \gamma \frac { D } { c } ( n - \beta ) - \gamma \frac { D } { c } ( 1 - \beta n )
$$

Adding $\Delta t _ { 1 }$ and $\Delta t _ { 2 }$ gives us

$$
\Delta t = \Delta t _ { 1 } + \Delta t _ { 2 } = 2 \gamma \frac { D } { c } ( n - 1 )
$$

Since $\Delta \phi = \frac { 2 \pi c } { \lambda } \Delta t$, we get the same answer as before.

(c) Now, we consider a different Michelson-Morley interferometer set up in the vertical plane, with the top mirror at $B$ removed. A beam of neutrons, each having mass $m$, is fired from the left. The splitter placed at $A$ causes half of it to take the horizontal path with distance $L$ to a mirror at $C$ and back, while the other half takes the vertical path against gravity to some turning point $B ^ { \prime }$ and back. The initial kinetic energy of

each neutron is $\varepsilon = \alpha m g L$.
By treating the neutrons as non-relativistic de Broglie waves, derive the expression for the phase difference $| \Delta \phi |$ when the two neutron beams meet at the detector in terms of $\alpha , m , g , L$, and $\hbar$. Effects of gravity are not negligible.

Solution: The phase of $A C$ is

$$
\phi _ { 1 } = 2 \pi \frac { 2 L } { \lambda _ { 1 } } = \frac { 2 L p _ { 1 } } { \hbar } = \frac { 2 L \sqrt { 2 m \epsilon } } { \hbar }
$$

Along $A B$, the momentum $p _ { 2 }$ changes as a function of the vertical position as part of the energy is converted to gravitational potential energy $p _ { 2 } = \sqrt { 2 m ( \epsilon - m g y ) }$ Then the differential phase is

$$
d \phi _ { 2 } = 2 \pi \frac { d y } { \lambda _ { 2 } } = \frac { p _ { 2 } d y } { \hbar }
$$

Integrating $d \phi _ { 2 }$ from 0 to the turning point $h = \frac { \epsilon } { m g }$ and back to 0 (making sure to reverse the sign of the backwards integral) gives us

$$
\phi _ { 2 } = \frac { 4 } { 3 g h } \sqrt { \frac { 2 \epsilon ^ { 3 } } { m } }
$$

Replacing $\epsilon = \alpha m g L$ gives us a phase difference

$$
\Delta \phi = \frac { m \sqrt { 2 g L ^ { 3 } } } { \hbar } \left| 2 \alpha ^ { 1 / 2 } - \frac { 4 } { 3 } \alpha ^ { 3 / 2 } \right|
$$

Some students accounted for the phase shift due to reflection from the mirror at $C$ and added a $\pm \pi$ to the answer, which is also acceptable.

(d) Qualitatively sketch the graph of intensity $I$ measured at the detector against $\alpha$ for $0 \leq \alpha \leq 6$ assuming the number of neutrons emitted per unit time is the same.

Solution: Constructive interference happens when $\Delta \phi = 2 \pi N$ with $N$ being an integer, and destructive interference happens when $\Delta \phi = ( 2 N + 1 ) \pi$. The intensity $I$ is proportional to the total energy per unit time: $I \propto \alpha$. So the equation of the graph would look like something like

$$
I \propto \alpha \cos ^ { 2 } \left( 2 \alpha ^ { 1 / 2 } - \frac { 4 } { 3 } \alpha ^ { 3 / 2 } \right)
$$

![](../../../figures/solution-ocr/816ed5eaff4cf55c5850167c.jpg)


The 2 important features that one must get correct will be the increasing amplitude and decreasing gaps between adjacent intensity maxima.
