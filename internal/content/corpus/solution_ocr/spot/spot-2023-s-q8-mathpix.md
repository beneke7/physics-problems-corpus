---
id: solution-ocr-spot-2023-s-q8
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2023-q8]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
8. This question is on pulse spreading in fibre optics.

Consider a cylindrical optical fibre in the region $0 \leq r \leq a$ for $z > 0$, see diagram. There is a light source at $r = z = 0$ that emits monochromatic waves. The refractive index $n ( r )$ is a function of the radial distance from the cylindrical axis.
Along the path of a ray, if the refractive index at some point is $n$ and the angle the ray makes with the horizontal ( $z$-axis) is $\theta$, we may use Snell's Law to conclude that

$$
n \cos \theta = \tilde { \beta }
$$

is a constant at all points along the path of the ray.
![](../../../figures/solution-ocr/baee8d4a48e88f995497e0c2.jpg)

(a) Show that the path that a ray takes satisfies
$$
\frac { d ^ { 2 } r } { d z ^ { 2 } } = \frac { 1 } { 2 \tilde { \beta } ^ { 2 } } \frac { d \left( n ( r ) ^ { 2 } \right) } { d r } .
$$
This is known as the ray equation.
(b) The fibre is characterised by the following refractive index distribution:
$$
n ( r ) ^ { 2 } = n _ { 1 } ^ { 2 } \left[ 1 - 2 \Delta \left( \frac { r } { a } \right) ^ { 2 } \right] , \quad 0 \leq r \leq a
$$
where $\Delta \ll 1$ and $n _ { 1 }$ are constants.

The refractive index of the medium outside the optical fibre is uniform, with the value $n _ { 2 }$ given by
$$
n ( r ) ^ { 2 } = n _ { 2 } ^ { 2 } = n _ { 1 } ^ { 2 } ( 1 - 2 \Delta ) , \quad r > a .
$$
The initial angle of projection $\theta _ { 1 }$ has to be small enough for the ray to return to the $z$-axis.
    i. Assuming this is the case, find the equation of the path $r = r ( z )$ taken by the ray of light, as well as the position $z _ { 1 }$ of the first instance that the ray returns to the $z$-axis. Express your answers in terms of $n _ { 1 } , \Delta , a$, and $\tilde { \beta }$.
    ii. If $\theta _ { 1 } \ll 1$ such that we make the approximation $\cos \theta _ { 1 } \approx 1$, state the value of $z _ { 1 }$.
    iii. Find the maximum possible value of $\theta _ { 1 }$, in terms of $\Delta$.
(c) One of the important characteristics of a waveguide is pulse dispersion, the temporal spreading of a pulse of light launched into the waveguide. This is due to the difference in time taken by different rays. To calculate this dispersion, we calculate the time taken by a ray to traverse a given length of the waveguide.
Define the maximum radial distance the ray reaches from the $z$-axis to be $r _ { t }$. Show that the time taken for the light ray to first reach a distance $r _ { t }$ from the $z$-axis is given by
$$
\frac { 1 } { c } \int _ { 0 } ^ { r _ { t } } \frac { n ( r ) ^ { 2 } } { \sqrt { n ( r ) ^ { 2 } - \tilde { \beta } ^ { 2 } } } d r
$$
where $c$ is the speed of light in vacuum.
(d) For the fibre optic medium described in (b):
    i. Find the time taken for a light ray to first reach a distance $r _ { t }$ from the $z$-axis, expressing your answer in terms of $a , n _ { 1 } , \tilde { \beta } , \Delta$, and $c$.
    ii. Calculate the difference in the maximum and minimum times for rays to travel a distance $z$ along the $z$-axis, in terms of $n _ { 1 } , \Delta$, and $c$. This time difference $\tau$ can be taken to be the pulse dispersion time.
(e) To appreciate the small dispersion given in the previous part, let us consider the pulse dispersion in a cylindrical fibre optic medium with the same physical dimensions but with homogeneous refractive index $n _ { 1 }$, while the outside is still kept at refractive index $n _ { 2 }$ satisfying $n _ { 2 } ^ { 2 } = n _ { 1 } ^ { 2 } ( 1 - 2 \Delta )$.
Find the pulse dispersion time over a distance $z$ along the $z$-axis for such a setup, in terms of $n _ { 1 } , \Delta$, and $c$.

Solution: For a comprehensive discussion on this problem, see Chapter 4 of [2].


(a) Writing $d s ^ { 2 } = d r ^ { 2 } + d z ^ { 2 }$ and using $\cos \theta = \frac { d z } { d s }$, we obtain
$$
\frac { d s } { d z } = \frac { 1 } { \cos \theta } = \frac { n } { \tilde { \beta } }
$$
Therefore,
$$
\left( \frac { d r } { d z } \right) ^ { 2 } = \frac { n ( r ) ^ { 2 } } { \tilde { \beta } ^ { 2 } } - 1 .
$$
Differentiating both sides with respect to $z$,
$$
2 \frac { d r } { d z } \frac { d ^ { 2 } r } { d z ^ { 2 } } = \frac { 1 } { \tilde { \beta } ^ { 2 } } \frac { d \left( n ^ { 2 } \right) } { d r } \frac { d r } { d z } .
$$

Rearranging,

$$
\frac { d ^ { 2 } r } { d z ^ { 2 } } = \frac { 1 } { 2 \tilde { \beta } ^ { 2 } } \frac { d \left( n ^ { 2 } \right) } { d r }
$$

1 - Writing down $d s / d z$ in terms of $n$ and $\tilde { \beta }$
1 - Obtaining the final expression
(b) (i) Substituting into the ray equation,
$$
\frac { d ^ { 2 } r } { d z ^ { 2 } } = \frac { 1 } { 2 \tilde { \beta } ^ { 2 } } \frac { d } { d r } n _ { 1 } ^ { 2 } \left[ 1 - 2 \Delta \left( \frac { r } { a } \right) ^ { 2 } \right] = - \frac { 2 \Delta n _ { 1 } ^ { 2 } } { a ^ { 2 } \tilde { \beta } ^ { 2 } } r
$$
The general solution is given by
$$
r ( z ) = A \sin \Gamma z + B \cos \Gamma z
$$
where $\Gamma = \frac { n _ { 1 } \sqrt { 2 \Delta } } { \tilde { \beta } a }$.
Since $r ( 0 ) = 0$, therefore $B = 0$, and
$$
r ( z ) = A \sin \Gamma z .
$$
If the ray makes an angle $\theta _ { 1 }$ with the $z$-axis at $z = 0$, then
$$
\begin{gathered}
\tan \theta _ { 1 } = A \Gamma \\
A = \frac { \tilde { \beta } a \tan \theta _ { 1 } } { n _ { 1 } \sqrt { 2 \Delta } } = \frac { a \sin \theta _ { 1 } } { \sqrt { 2 \Delta } } = \frac { a } { \sqrt { 2 \Delta } } \left[ 1 - \left( \frac { \tilde { \beta } } { n _ { 1 } } \right) ^ { 2 } \right] ^ { \frac { 1 } { 2 } }
\end{gathered}
$$
where we have used the fact that
$$
\tilde { \beta } = n _ { 1 } \cos \theta _ { 1 } .
$$
Therefore,
$$
r ( z ) = \frac { a } { \sqrt { 2 \Delta } } \left[ 1 - \left( \frac { \tilde { \beta } } { n _ { 1 } } \right) ^ { 2 } \right] ^ { \frac { 1 } { 2 } } \sin \left( \frac { n _ { 1 } \sqrt { 2 \Delta } } { a \tilde { \beta } } z \right) .
$$
The first time the ray returns to the $z$-axis, we have
$$
\frac { n _ { 1 } \sqrt { 2 \Delta } } { a \tilde { \beta } } z _ { 1 } = \pi
$$
Therefore,
$$
z _ { 1 } = \frac { \pi a \tilde { \beta } } { n _ { 1 } \sqrt { 2 \Delta } }
$$
1 - Correctly simplifying the ray equation
1 - Recognising that the path is is sinusoidal
1 - Correct boundary condition
1 - Correct position along $z$-axis


(ii) Since $\tilde { \beta } \approx n _ { 1 }$,
$$
z _ { 1 } = \frac { \pi a } { \sqrt { 2 \Delta } } .
$$
This is independent of the launch angle (correspondingly $\tilde { \beta }$ )!
1 - Correct answer
(iii) The maximum angle can be found as follows: Suppose at initial angle $\theta _ { 1 }$ the wave reaches distance $a$ from the $z$-axis. Then
$$
\begin{gathered}
n _ { 1 } \cos \theta _ { 1 } = \tilde { \beta } = n _ { 2 } \\
\cos \theta _ { 1 } = \sqrt { 1 - 2 \Delta } \approx 1 - \Delta
\end{gathered}
$$
Since $\cos \theta \approx 1 - \frac { 1 } { 2 } \theta ^ { 2 }$, we get
$$
\theta _ { 1 } \approx \sqrt { 2 \Delta } .
$$
1 - Correct critical angle
(c) The time taken to travel along an arc length $d s$ is given by
$$
d t = \frac { d s } { v } = \frac { n ( r ) } { c } d s .
$$
We know that
$$
d s = \sqrt { 1 + \left( \frac { d z } { d r } \right) ^ { 2 } } d r = \frac { n ( r ) } { \sqrt { n ( r ) ^ { 2 } - \tilde { \beta } ^ { 2 } } } d r
$$
We thus obtain the required integral.
    1 - Correct expression for $d t$
    1 - Correct usage of ray equation
(d) (i) We know that $n \left( r _ { t } \right) = \tilde { \beta }$, therefore
$$
\begin{gathered}
n _ { 1 } ^ { 2 } \left[ 1 - 2 \Delta \left( \frac { r _ { t } } { a } \right) ^ { 2 } \right] = \tilde { \beta } ^ { 2 } \\
r _ { t } = \frac { a } { n _ { 1 } \sqrt { 2 \Delta } } \sqrt { n _ { 1 } ^ { 2 } - \tilde { \beta } ^ { 2 } }
\end{gathered}
$$
Therefore,
$$
\begin{aligned}
t & = \frac { 1 } { c } \int _ { 0 } ^ { r _ { t } } \frac { n _ { 1 } ^ { 2 } \left[ 1 - 2 \Delta ( r / a ) ^ { 2 } \right] } { \sqrt { n _ { 1 } ^ { 2 } \left[ 1 - 2 \Delta ( r / a ) ^ { 2 } \right] - \tilde { \beta } ^ { 2 } } } d r \\
& = \frac { 1 } { c } \left[ \frac { n _ { 1 } \sqrt { 2 \Delta } } { a } \int _ { 0 } ^ { r _ { t } } \sqrt { r _ { t } ^ { 2 } - r ^ { 2 } } d r + \frac { \tilde { \beta } ^ { 2 } a } { n _ { 1 } \sqrt { 2 \Delta } } \int _ { 0 } ^ { r _ { t } } \frac { d r } { \sqrt { r _ { t } ^ { 2 } - r ^ { 2 } } } \right] \\
& = \frac { \pi a } { 4 c n _ { 1 } \sqrt { 2 \Delta } } \left( n _ { 1 } ^ { 2 } + \tilde { \beta } ^ { 2 } \right)
\end{aligned}
$$

    1 - Expressing $r _ { t }$ in terms of known constants
    1 - Performing integration correctly
    1 - Correct final answer


(ii) Since the path is sinusoidal, we might as well talk in terms of periods. Letting $z _ { p }$ and $\tau _ { p }$ be the distance travelled and time taken over one period of the sinusoidal path,
$$
\begin{gathered}
z _ { p } = \frac { 2 \pi } { \Gamma } = \frac { 2 \pi a \tilde { \beta } } { n _ { 1 } \sqrt { 2 \Delta } } \\
\tau _ { p } = \frac { \pi a } { c n _ { 1 } \sqrt { 2 \Delta } } \left( n _ { 1 } ^ { 2 } + \tilde { \beta } ^ { 2 } \right)
\end{gathered}
$$
Thus, if $\tau ( z )$ represents the time taken by the ray to traverse the distance $z$, then
$$
\frac { \tau ( z ) } { z } = \frac { \tau _ { p } } { z _ { p } } = \frac { 1 } { 2 c } \left[ \tilde { \beta } + \frac { n _ { 1 } ^ { 2 } } { \tilde { \beta } } \right]
$$
Since $n _ { 2 } < \tilde { \beta } < n _ { 1 }$ for guided rays, a ray with $\tilde { \beta } = n _ { 1 }$ (i.e. axial) will take minimum time
$$
\tau _ { \min } ( z ) = \frac { n _ { 1 } z } { c }
$$
while a ray with $\tilde { \beta } = n _ { 2 }$ takes maximum time
$$
\tau _ { \max } ( z ) = \frac { 1 } { 2 c } \left[ n _ { 2 } + \frac { n _ { 1 } ^ { 2 } } { n _ { 2 } } \right] z .
$$
The difference is thus
$$
\tau = \tau _ { \max } - \tau _ { \min } = \frac { 1 } { 2 c n _ { 2 } } \left( n _ { 1 } - n _ { 2 } \right) ^ { 2 } z \approx \frac { n _ { 1 } } { 2 c } \Delta ^ { 2 } z .
$$
1 - Correct $\tau _ { \text {min } }$
1 - Correct $\tau _ { \text {max } }$
1 - Correct $\tau$
(e) The maximum angle above the horizontal is $\cos ^ { - 1 } \frac { n _ { 2 } } { n _ { 1 } }$. The shortest path taken has length $z$ and the light ray travels at speed $c / n _ { 1 }$, therefore it takes time $t = n _ { 1 } z / c$ to reach.
The horizontal distance covered by the light ray in the longest path is still $z$, but the horizontal velocity is now $\frac { c } { n _ { 1 } } \cos \theta = \frac { c n _ { 2 } } { n _ { 1 } ^ { 2 } }$. Therefore,
$$
t = \frac { n _ { 1 } ^ { 2 } z } { c n _ { 2 } } .
$$
The pulse dispersion is equal to
$$
\Delta t = \frac { n _ { 1 } ^ { 2 } z } { c n _ { 2 } } - \frac { n _ { 1 } z } { c } = \frac { n _ { 1 } } { c n _ { 2 } } \left( n _ { 1 } - n _ { 2 } \right) z \approx \frac { n _ { 1 } \Delta } { c } z .
$$
    1 - Correct minimum time
    1 - Correct maximum time
    1 - Correct pulse dispersion

Fundamental Physical Constants - Frequently used constants
| Quantity | Symbol | Value | Unit | Relative std. uncert. $u _ { \mathrm { r } }$ |
| :--- | :--- | :--- | :--- | :--- |
| speed of light in vacuum | $c$ | 299792458 | $\mathrm { m } \mathrm { s } ^ { - 1 }$ | exact |
| Newtonian constant of gravitation | $G$ | $6.67430 ( 15 ) \times 10 ^ { - 11 }$ | $\mathrm { m } ^ { 3 } \mathrm {~kg} ^ { - 1 } \mathrm {~s} ^ { - 2 }$ | $2.2 \times 10 ^ { - 5 }$ |
| Planck constant* | $h$ | $6.62607015 \times 10 ^ { - 34 }$ | $\mathrm { J } \mathrm { Hz } ^ { - 1 }$ | exact |
|  | え | $1.054571817 \ldots \times 10 ^ { - 34 }$ | J s | exact |
| elementary charge | $e$ | $1.602176634 \times 10 ^ { - 19 }$ | C | exact |
| vacuum magnetic permeability $4 \pi \alpha \hbar / e ^ { 2 } c$ | $\mu _ { 0 }$ | $1.25663706212 ( 19 ) \times 10 ^ { - 6 }$ | $\mathrm { NA } ^ { - 2 }$ | $1.5 \times 10 ^ { - 10 }$ |
| vacuum electric permittivity $1 / \mu _ { 0 } c ^ { 2 }$ | $\epsilon _ { 0 }$ | $8.8541878128 ( 13 ) \times 10 ^ { - 12 }$ | $\mathrm { F } \mathrm { m } ^ { - 1 }$ | $1.5 \times 10 ^ { - 10 }$ |
| Josephson constant $2 e / h$ | $K _ { \mathrm { J } }$ | $483597.8484 \ldots \times 10 ^ { 9 }$ | $\mathrm { Hz } \mathrm { V } ^ { - 1 }$ | exact |
| von Klitzing constant $\mu _ { 0 } c / 2 \alpha = 2 \pi \hbar / e ^ { 2 }$ | $R _ { \mathrm { K } }$ | $25812.80745 \ldots$ | $\Omega$ | exact |
| magnetic flux quantum $2 \pi \hbar / ( 2 e )$ | $\Phi _ { 0 }$ | $2.067833848 \ldots \times 10 ^ { - 15 }$ | Wb | exact |
| conductance quantum $2 e ^ { 2 } / 2 \pi \hbar$ | $G _ { 0 }$ | $7.748091729 \ldots \times 10 ^ { - 5 }$ | S | exact |
| electron mass | $m _ { \mathrm { e } }$ | $9.1093837015 ( 28 ) \times 10 ^ { - 31 }$ | kg | $3.0 \times 10 ^ { - 10 }$ |
| proton mass | $m _ { \mathrm { p } }$ | $1.67262192369 ( 51 ) \times 10 ^ { - 27 }$ | kg | $3.1 \times 10 ^ { - 10 }$ |
| proton-electron mass ratio | $m _ { \mathrm { p } } / m _ { \mathrm { e } }$ | 1836.152673 43(11) |  | $6.0 \times 10 ^ { - 11 }$ |
| fine-structure constant $e ^ { 2 } / 4 \pi \epsilon _ { 0 } \hbar c$ | $\alpha$ | $7.2973525693 ( 11 ) \times 10 ^ { - 3 }$ |  | $1.5 \times 10 ^ { - 10 }$ |
| inverse fine-structure constant | $\alpha ^ { - 1 }$ | 137.035999 084(21) |  | $1.5 \times 10 ^ { - 10 }$ |
| Rydberg frequency $\alpha ^ { 2 } m _ { \mathrm { e } } c ^ { 2 } / 2 h$ | $c R _ { \infty }$ | $3.2898419602508 ( 64 ) \times 10 ^ { 15 }$ | Hz | $1.9 \times 10 ^ { - 12 }$ |
| Boltzmann constant | $k$ | $1.380649 \times 10 ^ { - 23 }$ | $\mathrm { J } \mathrm { K } ^ { - 1 }$ | exact |
| Avogadro constant | $N _ { \mathrm { A } }$ | $6.02214076 \times 10 ^ { 23 }$ | $\mathrm { mol } ^ { - 1 }$ | exact |
| molar gas constant $N _ { \mathrm { A } } k$ | $R$ | 8.314462618... | $\mathrm { J } \mathrm { mol } ^ { - 1 } \mathrm {~K} ^ { - 1 }$ | exact |
| Faraday constant $N _ { \mathrm { A } } e$ | $F$ | $96485.33212 \ldots$. | $\mathrm { C } \mathrm { mol } ^ { - 1 }$ | exact |
| Stefan-Boltzmann constant |  |  |  |  |
| $\left( \pi ^ { 2 } / 60 \right) k ^ { 4 } / \hbar ^ { 3 } c ^ { 2 }$ | $\sigma$ | $5.670374419 \ldots \times 10 ^ { - 8 }$ | $\mathrm { W } \mathrm { m } ^ { - 2 } \mathrm {~K} ^ { - 4 }$ | exact |
| Non-SI units accepted for use with the SI |  |  |  |  |
| electron volt ( $e / \mathrm { C }$ ) J | eV | $1.602176634 \times 10 ^ { - 19 }$ | J | exact |
| (unified) atomic mass unit $\frac { 1 } { 12 } m \left( { } ^ { 12 } \mathrm { C } \right)$ | u | $1.66053906660 ( 50 ) \times 10 ^ { - 27 }$ | kg | $3.0 \times 10 ^ { - 10 }$ |


[^1]

[^0]:    ${ } ^ { 1 }$ To be clear, we mean the charge density "per unit volume".

[^1]:    * The energy of a photon with frequency $\nu$ expressed in unit Hz is $E = h \nu$ in J . Unitary time evolution of the state of this photon is given by $\exp ( - i E t / \hbar ) | \varphi \rangle$, where $| \varphi \rangle$ is the photon state at time $t = 0$ and time is expressed in unit s. The ratio $E t / \hbar$ is a phase.
