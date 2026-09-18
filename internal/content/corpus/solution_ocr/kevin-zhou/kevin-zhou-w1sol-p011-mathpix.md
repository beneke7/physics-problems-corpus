---
id: solution-ocr-kevin-zhou-w1sol-p011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 11. Some instruments, such as xylophones and marimbas, are made with rigid rods instead of strings. The equation that describes transverse vibrations is instead

$$
\frac { \partial ^ { 2 } y } { \partial t ^ { 2 } } = - A \frac { \partial ^ { 4 } y } { \partial x ^ { 4 } }
$$

for a constant $A$ that depends on the material and cross-sectional area.

(a) For a xylophone bar of length $L$, find the standing wave solutions and their angular frequencies. For simplicity, pretend that the solutions are sinusoidal in space, and that the bar has free ends just like a string, even though this is not true in reality.
(b) When the bar in part (a) is hit, a certain note is sounded. What is the length of the bar that makes a note one octave higher?

(c) $[ \mathbf { A } ] \star$ The actual boundary conditions for a free bar are
$$
\frac { \partial ^ { 2 } y } { \partial x ^ { 2 } } = \frac { \partial ^ { 3 } y } { \partial x ^ { 3 } } = 0
$$
at the endpoints, and the solutions aren't purely sinusoidal in space. Numerically compute the lowest few standing wave angular frequencies and compare them to those you found in part (a).
(d) A guitar or piano string satisfies the wave equation with a small additional fourth-order term,
$$
\frac { \partial ^ { 2 } y } { \partial t ^ { 2 } } = v ^ { 2 } \frac { \partial ^ { 2 } y } { \partial x ^ { 2 } } - A \frac { \partial ^ { 4 } y } { \partial x ^ { 4 } } .
$$
Show that the standing wave frequencies are not linearly spaced, as they would be for an ideal string, but instead are slightly more spaced out. This effect is called inharmonicity. (Hint: the spatial profiles of the standing waves are still sinusoidal.)
We perceived two notes to be "in tune" when the component frequencies in the notes line up with each other. But since the frequencies are more spread out than ideal harmonics, a piano feels more in tune when the fundamental frequencies are spread out a little bit more. This "stretch tuning" is significant and adds up to about an entire semitone across the piano!

Solution. (a) If we assume that the solutions are $y ( x , t ) = \sin ( k x ) \cos ( \omega t )$ where $k L = \pi n$, using the differential equation will get

$$
- \omega ^ { 2 } = - A k ^ { 4 } , \quad \omega = \sqrt { A } \frac { \pi ^ { 2 } n ^ { 2 } } { L ^ { 2 } } .
$$

(b) The fundamental frequency is proportional to $1 / L ^ { 2 }$, and going up by an octave doubles this, so we need a length of $L / \sqrt { 2 }$.
(c) The spatial solutions look like exponentials $e ^ { \pm k x }$ and $e ^ { \pm i k x }$. It's easiest to use even and odd combinations. Letting $y ( x , t ) = u ( x ) \cos ( \omega t )$, we have
$$
u ( x ) = A _ { 1 } \cosh ( k x ) + A _ { 2 } \sinh ( k x ) + A _ { 3 } \cos ( k x ) + A _ { 4 } \sin ( k x ) .
$$
For convenience, let's place the left end of the bar at $x = 0$. Then the boundary conditions at this point imply $A _ { 3 } = A _ { 1 }$ and $A _ { 4 } = A _ { 2 }$, so
$$
u ( x ) = A _ { 1 } ( \cosh ( k x ) + \cos ( k x ) ) + A _ { 2 } ( \sinh ( k x ) + \sin ( k x ) ) .
$$
There are two more boundary conditions for the right side, and they both determine the ratio $A _ { 2 } / A _ { 1 }$, so for a solution to exist, the boundary conditions must be redundant with each other. In other words, we should have
$$
\frac { \left( d ^ { 2 } / d x ^ { 2 } \right) ( \cosh ( k x ) + \cos ( k x ) ) } { \left( d ^ { 2 } / d x ^ { 2 } \right) ( \sinh ( k x ) + \sin ( k x ) ) } = \frac { \left( d ^ { 3 } / d x ^ { 3 } \right) ( \cosh ( k x ) + \cos ( k x ) ) } { \left( d ^ { 3 } / d x ^ { 3 } \right) ( \sinh ( k x ) + \sin ( k x ) ) } .
$$
Carrying out the derivatives, this condition is equivalent to $( \cosh ( k x ) - \cos ( k x ) ) ^ { 2 } = \sinh ^ { 2 } ( k x ) -$ $\sin ^ { 2 } ( k x )$, which further simplifies to
$$
\cosh ( k L ) \cos ( k L ) = 1 .
$$

At this point, we can numerically solve to find

$$
k L = 4.73,7.85,11.00,14.14,17.28 , \ldots
$$

which is quite different from the naive solutions $k L = \pi n$. From here we can straightforwardly calculate $\omega = \sqrt { A } k ^ { 2 }$.

(d) Plugging $y ( x , t ) = \sin ( k x ) \cos ( \omega t )$ into the differential equation and setting $k L = \pi n$ gives
$$
- \omega ^ { 2 } = - v ^ { 2 } k ^ { 2 } - A k ^ { 4 }
$$
which gives solutions
$$
\omega _ { n } = k _ { n } \sqrt { v ^ { 2 } + A k _ { n } ^ { 2 } } = \frac { \pi n } { L } \sqrt { v ^ { 2 } + \frac { A \pi ^ { 2 } n ^ { 2 } } { L ^ { 2 } } }
$$
where the extra spacing comes from the $A \pi ^ { 2 } n ^ { 2 } / L ^ { 2 }$ term. Using an app on your phone, you can check that this occurs for piano strings and guitar strings.

Remark: Beam Theory
Where does the strange fourth-order equation for transverse vibrations above come from? Since force is the derivative of energy, it's easier to think about how the energy stored in a rigid rod differs from that of a string. When a string with tension $T$, mass per length $\lambda$, and length $\ell$ is plucked, giving it a transverse displacement $y$, then

$$
\frac { \text { kinetic energy } } { \text { length } } \sim \lambda \dot { y } ^ { 2 } , \quad \frac { \text { potential energy } } { \text { length } } \sim \frac { T \Delta \ell } { \ell } \sim \frac { T y ^ { 2 } } { \ell ^ { 2 } }
$$

where our expression for $\Delta \ell$ comes from the Pythagorean theorem. As we know from M4, the ratio of the coefficients gives $\omega ^ { 2 }$, so $\omega \ell \sim \sqrt { T / \lambda }$. For a general wave with wavenumber $k$, we would replace $\ell$ with $1 / k$ above, giving $\omega \propto k$ as expected.

Now, a rod is characterized by a Young's modulus $Y$, mass density $\rho$, length $\ell$, width $w$, and vertical thickness $h$. If the transverse displacement is $y$, then

$$
\frac { \text { kinetic energy } } { \text { volume } } \sim \rho \dot { y } ^ { 2 } , \quad \frac { \text { potential energy } } { \text { volume } } \sim Y ( \text { strain } ) ^ { 2 } .
$$

The tricky part is understanding the strain. If you naively used the same logic as for the string, then all parts of the rod would be stretched, with typical strain $( y / \ell ) ^ { 2 }$. This is correct in the limit of large displacements, $y \gg h$, where the rod's thickness is negligible. But for small displacements, it's an overestimate.
![](../../../figures/solution-ocr/edf4815d78b0892e98de0b81.jpg)
As the rod is displaced vertically, it slightly shrinks horizontally. As a result, there is a "neutral line" in the middle of the rod that is neither stretched or compressed. Bonds above the line are stretched, and bonds below the line are compressed.


The neutral line has radius of curvature $R \sim \ell ^ { 2 } / y$. Thus, the strain at the top and bottom of the rod is of order $h / R \sim h y / \ell ^ { 2 }$. Plugging this in gives

$$
\omega \sim \sqrt { \frac { Y } { \rho } } \frac { h } { \ell ^ { 2 } } .
$$

Again, for a general wavenumber we would replace $\ell$ with $1 / k$, giving the $\omega \propto k ^ { 2 }$ scaling. For a derivation of this result by dimensional analysis, see section 9.2.3 of The Art of Insight.

There's another neat bit of physics we can get here. Consider a horizontal rod with one end fixed at a wall. What is the vertical deflection of the other end of the rod, due to its own weight? The gravitational and internal potential energy densities both have "reasonable", power-law dependence on the deflection $y$. Thus, when their derivatives match, so that forces balance, their absolute values should match within an order of magnitude,

$$
\frac { \text { elastic potential energy } } { \text { volume } } \sim \frac { \text { gravitational potential energy } } { \text { volume } } \sim \rho g y .
$$

Solving for the deflection gives

$$
y \sim \frac { \rho g \ell ^ { 4 } } { Y h ^ { 2 } }
$$

which is the fundamental result of Euler-Bernoulli beam theory. (For a proper derivation in terms of force and torque balance, see chapters 9 and 10 of Lautrup.)

Example 2
How are the sounds of a violin, a trumpet, and a person different in a room full of helium?

Solution
As we saw in T3, the speed of sound in air is $\sqrt { \gamma p / \rho }$. When the air is replaced with helium, $\rho$ decreases, increasing the speed of sound.

The standing wave frequencies of a violin are determined by properties of the strings, which aren't affected by the helium. The only difference will be that the way the violin's sound reverberates will be subtly changed.

For the trumpet, the standing wave frequencies are proportional to $v / L$ where $L$ is the length of the air column inside the trumpet. Thus, the standing wave frequencies go up, and the trumpet makes higher-pitched notes.

The human voice is more subtle. A wind instrument works by exciting standing waves inside it. But the source of the human voice is the vibrations of the vocal folds, whose fundamental vibration frequency is directly controlled by your muscles. The entire rest of your vocal tract does not affect what frequencies are present, but rather affects how energy is distributed between those frequencies. (For instance, vowels are characterized by having extra energy


near two particular frequencies, called formants.) Helium changes the resonant frequencies of the vocal tract and thus changes which frequencies emitted by the vocal folds are emphasized. It thus changes the timbre, but not the pitch.
