---
id: solution-ocr-spot-2025-s-q9
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2025-q9]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
9. When stars collapse, over 97\% of them become white dwarves. These are extremely dense bodies consisting largely of degenerate electron matter and some ions. Unlike stars, the white dwarves can no longer support itself against gravitational collapse by its gas pressure, and instead the electron degeneracy pressure dominates.
For the free electrons in white dwarves, we must use a quantum mechanical description. We can define their number density of state $g ( p )$ as:
$$
g ( p ) d p = \frac { 8 \pi } { h ^ { 3 } } p ^ { 2 } d p
$$
where $p$ is the momentum of the state and $h$ is Planck's constant. In other words, in a volume $d V$, there are $g ( p ) d p d V$ states of momentum $p$ that may be occupied by an electron.
To describe the probability in which these states are occupied, we can apply Fermi-Dirac statistics, which tells us that a state of energy $\varepsilon$ has an average occupation probability $f ( \varepsilon )$ :
$$
f ( \varepsilon ) = \frac { 1 } { \exp \left( \frac { \varepsilon - \mu } { k T } \right) + 1 }
$$
where $k$ is the Boltzmann constant, $T$ is the temperature and $\mu$ is an energy term known as the chemical potential.
    (a) Show that the pressure $P$ due to the free electrons is given by:
$$
P = \frac { 8 \pi } { 3 h ^ { 3 } } \int _ { 0 } ^ { \infty } \frac { p ^ { 3 } } { \exp \left( \frac { \varepsilon - \mu } { k T } \right) + 1 } v ( p ) d p
$$
where $v ( p )$ is the magnitude of the velocity of an electron as a function of its momentum $p$.

Solution: The pressure can be seen as the momentum flux through a unit surface. Firstly, we can get the actual electron number density by multiplying the number density of states with the probability that that state is occupied:

$$
n ( p ) = g ( p ) f ( \varepsilon ( p ) )
$$

Consider a flat surface with area $d S$, placed in a spherical coordinate system at its origin. In unit time $d t$, the number of electrons hitting the surface from a polar angle $\theta$ and azimuthal angle $\phi$ with velocity $v$ is given by $n ( p )$ multiplied by the volume of the parallelepiped with base $d S$ and height $v d t \cos \theta$. The fraction of the electrons which come from any angle is uniform, and given by $\frac { \sin \theta d \theta d \phi } { 4 \pi }$. Since the net momentum is in the directional perpendicular to the surface, we only want the perpendicular component of the momentum $p \cos \theta$. Integrating across the upper a spherical shell, and across all values of $p$, the total perpendicular momentum transferred through the surface in time $d t$ is given by:

$$
\int _ { 0 } ^ { \infty } \int _ { 0 } ^ { 2 \pi } \int _ { 0 } ^ { \pi } n ( p ) d S v d t \cos \theta p \cos \theta \frac { \sin \theta d \theta d \phi } { 4 \pi } d p
$$

We divide by $d S$ and $d t$ to get the momentum transferred per unit surface and per


unit time.

$$
\begin{aligned}
P & = \int _ { 0 } ^ { \infty } \int _ { 0 } ^ { 2 \pi } \int _ { 0 } ^ { \pi } n ( p ) v ( p ) p \cos ^ { 2 } \theta \frac { \sin \theta d \theta d \phi } { 4 \pi } d p \\
& = \frac { 1 } { 3 } \int _ { 0 } ^ { \infty } n ( p ) v ( p ) p d p \\
& = \frac { 8 \pi } { 3 h ^ { 3 } } \int _ { 0 } ^ { \infty } \frac { p ^ { 3 } } { \exp \left( \frac { \varepsilon - \mu } { k T } \right) + 1 } v ( p ) d p
\end{aligned}
$$

Alternatively, answers using a simpler model exploiting symmetry may obtain full credit if explained clearly.

We now make the assumption that the electron gas is fully degenerate. This means that all the electron states are occupied up till the state with Fermi momentum $p _ { f }$, and no electron states above that are occupied. This is equivalent to assuming zero temperature for the gas, and the energy of the electron is equal to $\mu$ when it occupies the state with momentum $p _ { f }$.

(b) Under this assumption, show that the pressure $P$ can be simplified to:
$$
P = \frac { 8 \pi } { 3 h ^ { 3 } } \int _ { 0 } ^ { p _ { f } } p ^ { 3 } v ( p ) d p
$$

Solution: With the zero temperature assumption, the Fermi-Dirac distribution simplifies to a step function. When $\varepsilon < \mu , \exp \left( \frac { \varepsilon - \mu } { k T } \right) = 0$ and $f ( \varepsilon ) = 1$. On the other hand, when $\varepsilon > \mu , \exp \left( \frac { \varepsilon - \mu } { k T } \right)$ tends towards infinity and $f ( \varepsilon ) = 0$. With this in mind, any momentum values above $p _ { f }$ in the integral all go to zero, and we can simplify the denominator to 1 . This leaves us with the desired equation:

$$
P = \frac { 8 \pi } { 3 h ^ { 3 } } \int _ { 0 } ^ { p _ { f } } p ^ { 3 } v ( p ) d p
$$

(c) Determine an expression for $n _ { e }$, the number density of electrons. Assume that the electron gas is fully degenerate. Leave your answer in terms of $h$ and $p _ { f }$.

Solution: With the assumption that the electron is fully degenerate, we consider all states above momentum $p _ { f }$ to be empty and all states below momentum $p _ { f }$ to be fully filled. We can integrate $g ( p ) d p$ from 0 to $p _ { f }$ to obtain:

$$
\begin{aligned}
n _ { e } & = \frac { 8 \pi } { h ^ { 3 } } \int _ { 0 } ^ { p _ { f } } p ^ { 2 } d p \\
& = \frac { 8 \pi } { 3 h ^ { 3 } } p _ { f } ^ { 3 }
\end{aligned}
$$

(d) Assume that the electrons only move non-relativistically. Determine the pressure $P$ for the electron cloud. Leave your answer in terms of $h , m _ { e }$ and $n _ { e }$.

Solution: For non-relativistic particles, $v \ll c$. The velocity $v$ is given by $\frac { p } { m _ { e } }$, so the integral for pressure becomes:

$$
\begin{aligned}
P & = \frac { 8 \pi } { 3 h ^ { 3 } m _ { e } } \int _ { 0 } ^ { p _ { f } } p ^ { 4 } d p \\
& = \frac { 8 \pi } { 15 h ^ { 3 } m _ { e } } p _ { f } ^ { 5 }
\end{aligned}
$$

Substuting the expression for $n _ { e }$, we have:

$$
P = \frac { 1 } { 20 } \left( \frac { 3 } { \pi } \right) ^ { \frac { 2 } { 3 } } \frac { h ^ { 2 } } { m _ { e } } n _ { e } ^ { \frac { 5 } { 3 } }
$$

Unlike the electrons in the white dwarf, the ions can be described using classical ideal gas equations. Consider the white dwarf Sirius B, which we assume to be purely carbon such that the number of ions $n _ { i }$ is given by $6 n _ { i } = n _ { e }$. The electrons here move non-relativistically.

(e) Estimate the numerical ratio of pressures exerted by the electrons to the ions $\frac { P _ { e } } { P _ { i } }$. The mean density of Sirius B is $2.38 \times 10 ^ { 9 } \mathrm {~kg} \mathrm {~m} ^ { - 3 }$ and its temperature can be estimated to be 25000 K. Despite the non-zero temperature, assume that your result in part (d) remains valid.

Solution: The equation of state for the ions is given by the ideal gas equation:

$$
P _ { i } = n _ { i } k T
$$

Since the number of ions and electrons is fairly similar and the mass of each ion is much greater than each electron, we can make the approximation $\rho \approx n _ { i } m _ { i }$, where $m _ { i } = 12 \mathrm { u }$ for carbon. Then, $n _ { e } = 6 \frac { \rho } { m _ { i } }$. Upon plugging in numerical values, we obtain:

$$
\begin{aligned}
\frac { P _ { e } } { P _ { i } } & = \frac { \frac { 1 } { 20 } \left( \frac { 3 } { \pi } \right) ^ { \frac { 2 } { 3 } } \frac { h ^ { 2 } } { m _ { e } } n _ { e } ^ { \frac { 5 } { 3 } } } { n _ { i } k T } \\
& \approx 3.3 \times 10 ^ { 5 }
\end{aligned}
$$

This confirms that the pressure in a white dwarf is mostly due to electrons rather than ions.


| Marking Scheme: |  |  |
| :--- | :--- | :--- |
| Part | Steps | Marks |
| (a) | Electron number density $n ( p )$ | M0.5 |
|  | Forming the triple integral accurately | M1 |
|  | Each inaccurate reasoning step (e.g. using $p$ instead of $p \cos \theta$ ) | -M0.3 |
| (b) | Performing the integration accurately | M0.5 |
|  | Noticing the step function | M1 |
|  | Setting momentum values to 0 and 1 | M0.5 |
| (c) | Setting appropriate limits for integration | M1 |
|  | Correct final answer | A0.5 |
| (d) | Identifying $v ( p )$ for non-relativistic particles | M0.3 |
|  | Substitution and integration | M0.5 |
|  | Correct final answer | A0.7 |
| (e) | Writing the ideal gas equation | M0.5 |
|  | $n _ { e } = 6 \frac { \rho } { m _ { i } }$ | M0.5 |
|  | Correct final answer | A0.5 |


Fundamental Physical Constants - Frequently used constants
| Quantity | Symbol | Value | Unit | Relative std. uncert. $u _ { \mathrm { r } }$ |
| :--- | :--- | :--- | :--- | :--- |
| speed of light in vacuum | $c$ | 299792458 | $\mathrm { m } \mathrm { s } ^ { - 1 }$ | exact |
| Newtonian constant of gravitation | $G$ | $6.67430 ( 15 ) \times 10 ^ { - 11 }$ | $\mathrm { m } ^ { 3 } \mathrm {~kg} ^ { - 1 } \mathrm {~s} ^ { - 2 }$ | $2.2 \times 10 ^ { - 5 }$ |
| Planck constant* | $h$ | $6.62607015 \times 10 ^ { - 34 }$ | $\mathrm { J } \mathrm { Hz } ^ { - 1 }$ | exact |
|  | ћ | $1.054571817 \ldots \times 10 ^ { - 34 }$ | J s | exact |
| elementary charge | $e$ | $1.602176634 \times 10 ^ { - 19 }$ | C | exact |
| vacuum magnetic permeability $4 \pi \alpha \hbar / e ^ { 2 } c$ | $\mu _ { 0 }$ | $1.25663706127 ( 20 ) \times 10 ^ { - 6 }$ | $\mathrm { N } \mathrm { A } ^ { - 2 }$ | $1.6 \times 10 ^ { - 10 }$ |
| vacuum electric permittivity $1 / \mu _ { 0 } c ^ { 2 }$ | $\epsilon _ { 0 }$ | $8.8541878188 ( 14 ) \times 10 ^ { - 12 }$ | $\mathrm { F } \mathrm { m } ^ { - 1 }$ | $1.6 \times 10 ^ { - 10 }$ |
| Josephson constant $2 e / h$ | $K _ { \mathrm { J } }$ | $483597.8484 \ldots \times 10 ^ { 9 }$ | $\mathrm { Hz } \mathrm { V } ^ { - 1 }$ | exact |
| von Klitzing constant $\mu _ { 0 } c / 2 \alpha = 2 \pi \hbar / e ^ { 2 }$ | $R _ { \mathrm { K } }$ | $25812.80745 \ldots$ | $\Omega$ | exact |
| magnetic flux quantum $2 \pi \hbar / ( 2 e )$ | $\Phi _ { 0 }$ | $2.067833848 \ldots \times 10 ^ { - 15 }$ | Wb | exact |
| conductance quantum $2 e ^ { 2 } / 2 \pi \hbar$ | $G _ { 0 }$ | $7.748091729 \ldots \times 10 ^ { - 5 }$ | S | exact |
| electron mass | $m _ { \mathrm { e } }$ | $9.1093837139 ( 28 ) \times 10 ^ { - 31 }$ | kg | $3.1 \times 10 ^ { - 10 }$ |
| proton mass | $m _ { \mathrm { p } }$ | $1.67262192595 ( 52 ) \times 10 ^ { - 27 }$ | kg | $3.1 \times 10 ^ { - 10 }$ |
| proton-electron mass ratio | $m _ { \mathrm { p } } / m _ { \mathrm { e } }$ | 1836.152673 426(32) |  | $1.7 \times 10 ^ { - 11 }$ |
| fine-structure constant $e ^ { 2 } / 4 \pi \epsilon _ { 0 } \hbar c$ | $\alpha$ | $7.2973525643 ( 11 ) \times 10 ^ { - 3 }$ |  | $1.6 \times 10 ^ { - 10 }$ |
| inverse fine-structure constant | $\alpha ^ { - 1 }$ | 137.035999 177(21) |  | $1.6 \times 10 ^ { - 10 }$ |
| Rydberg frequency $\alpha ^ { 2 } m _ { \mathrm { e } } c ^ { 2 } / 2 h$ | $c R _ { \infty }$ | $3.2898419602500 ( 36 ) \times 10 ^ { 15 }$ | Hz | $1.1 \times 10 ^ { - 12 }$ |
| Boltzmann constant | $k$ | $1.380649 \times 10 ^ { - 23 }$ | $\mathrm { J } \mathrm { K } ^ { - 1 }$ | exact |
| Avogadro constant | $N _ { \mathrm { A } }$ | $6.02214076 \times 10 ^ { 23 }$ | $\mathrm { mol } ^ { - 1 }$ | exact |
| molar gas constant $N _ { \mathrm { A } } k$ | $R$ | 8.314462618 … | $\mathrm { J } \mathrm { mol } ^ { - 1 } \mathrm {~K} ^ { - 1 }$ | exact |
| Faraday constant $N _ { \mathrm { A } } e$ | $F$ | $96485.33212 \ldots$. | $\mathrm { C } \mathrm { mol } ^ { - 1 }$ | exact |
| Stefan-Boltzmann constant $\left( \pi ^ { 2 } / 60 \right) k ^ { 4 } / \hbar ^ { 3 } c ^ { 2 }$ | $\sigma$ | $5.670374419 \ldots \times 10 ^ { - 8 }$ | $\mathrm { W } \mathrm { m } ^ { - 2 } \mathrm {~K} ^ { - 4 }$ | exact |
| Non-SI units accepted for use with the SI |  |  |  |  |
| electron volt ( $e / \mathrm { C }$ ) J | eV | $1.602176634 \times 10 ^ { - 19 }$ | J | exact |
| (unified) atomic mass unit $\frac { 1 } { 12 } m \left( { } ^ { 12 } \mathrm { C } \right)$ | u | $1.66053906892 ( 52 ) \times 10 ^ { - 27 }$ | kg | $3.1 \times 10 ^ { - 10 }$ |


[^0]

[^0]:    * The energy of a photon with frequency $\nu$ expressed in unit Hz is $E = h \nu$ in J. Unitary time evolution of the state of this photon is given by $\exp ( - i E t / \hbar ) | \varphi \rangle$, where $| \varphi \rangle$ is the photon state at time $t = 0$ and time is expressed in unit s. The ratio $E t / \hbar$ is a phase.
