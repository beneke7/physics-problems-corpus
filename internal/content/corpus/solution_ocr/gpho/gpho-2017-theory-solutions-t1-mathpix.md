---
id: solution-ocr-gpho-2017-theory-solutions-t1
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2017_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2017-t1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem T1. Main sequence stars (11 points) Part A. Lifetime of Sun (3 points)

i. (0.7 pts) Since the Sun behaves as a perfectly black body it's total radiation power can be expressed from the StefanBoltzmann law as

$$
P = 4 \pi R _ { \odot } ^ { 2 } \sigma T _ { \odot } ^ { 4 } = 4.5 \times 10 ^ { 26 } \mathrm {~W} .
$$

(Formula 0.5, nuber 0.1, units 0.1 pts.)
ii. (0.5 pts) From the energy conservation law

$$
4 m _ { p } c ^ { 2 } = m _ { H e } c ^ { 2 } + 2 m _ { e } c ^ { 2 } + W _ { 0 }
$$

(0.2 pts). Then

$$
W _ { 0 } = 4 m _ { p } c ^ { 2 } - m _ { H e } c ^ { 2 } - 2 m _ { e } c ^ { 2 } = 24 \mathrm { MeV } .
$$

(Formula 0.1, nuber 0.1, units 0.1 pts.)
iii. (0.5 pts) The fusion of four protons creates two positrons which in turn annihilate with two electrons meaning that an additional energy of $W _ { 1 } = 4 m _ { e } c ^ { 2 } = 2.0 \mathrm { MeV }$ is released. Then the total energy released is $W _ { 2 } = W _ { 0 } + W _ { 1 } = 26 \mathrm { MeV }$. (Noticing that 4 particles annihilate per one He atom 0.2, formula 0.1, number 0.1, units 0.1 pts.)
iv. (1.3 pts) Over the course of Sun's lifetime the central part of the Sun will undergo fusion and release energy. The total number of reactions that will take place is

$$
N = \frac { M _ { \odot } } { 8 } \frac { 1 } { 4 m _ { p } }
$$

(0.3 pts). And thus, the total energy released is

$$
E = N W _ { 2 } = \frac { 1 } { 8 } M _ { \odot } \frac { W _ { 2 } } { 4 m _ { p } } = 1.56 \times 10 ^ { 44 } \mathrm {~J}
$$

(0.3 pts). The total lifetime of the Sun can be approximated as

$$
\tau = \frac { E } { P } = 1.1 \times 10 ^ { 10 } \mathrm { y } .
$$

(Formula 0.4, nuber 0.1, units 0.1 pts.)
The current age of the sun $\tau _ { \odot } = 5 \times 10 ^ { 9 } \mathrm { y }$ is approximately two times smaller than the calculated theoretical age (0.1 pts).
Part B. Mass-luminosity relationship of stars (4.5 points)
i. (0.4 pts) Since all of the star's mass is below the point $Q$, the gravitational acceleration is the same as that of a point mass with a mass of $M$ (0.2 pts). Then

$$
a _ { Q } = \frac { G M } { \left( \frac { R _ { 0 } } { 2 } \right) ^ { 2 } } = \frac { 4 G M } { R _ { 0 } ^ { 2 } }
$$

(0.2 pts).
ii. (0.4 pts) By applying Gauss's law for gravity for a sphere surrounding the stellar core

$$
4 \pi \left( \frac { R _ { 0 } } { 2 } \right) ^ { 2 } a _ { P } = 4 \pi G \frac { M } { 8 }
$$

(0.2 pts);

$$
a _ { P } = \frac { G M } { 2 R _ { 0 } ^ { 2 } }
$$

(0.2 pts).
iii. (0.4 pts) Since the gravitational acceleration decreases linearly along the thickness of the spherical layer, the average acceleration experienced by the spherical layer is $a _ { \text {avg } } =$ $\frac { a _ { P } + a _ { Q } } { 2 } = \frac { 9 G M } { 4 R _ { 0 } ^ { 2 } }$ (0.1 pts). Furthermore, a piece of the small spherical layer with an area $A$ has a mass of

$$
m = \frac { A } { 4 \pi \left( \frac { R _ { 0 } } { 2 } \right) ^ { 2 } } \frac { 7 M } { 8 } = \frac { 7 } { 8 \pi } \frac { M A } { R _ { 0 } ^ { 2 } }
$$

(0.1 pts). From the Newton's second law

$$
F = m a _ { \mathrm { avg } } = \frac { 63 } { 32 \pi } \frac { G M ^ { 2 } A } { R _ { 0 } ^ { 4 } }
$$

(0.2 pts).
iv. (0.4 pts) The previously calculated force acting on the small piece of the narrow spherical layer can also be expressed as

$$
F = A p _ { c } = \frac { 63 } { 32 \pi } \frac { G M ^ { 2 } A } { R _ { 0 } ^ { 4 } }
$$

(0.3 pts). Then

$$
p _ { c } = \frac { 63 } { 32 \pi } \frac { G M ^ { 2 } } { R _ { 0 } ^ { 4 } }
$$

(0.1 pts).
v. (1 pt) From the ideal gas law

$$
p _ { c } \frac { 4 \pi \left( \frac { R _ { 0 } } { 2 } \right) ^ { 3 } } { 3 } = n R _ { g } T _ { c }
$$

where $n$ is the number of moles of protons and electrons inside the stellar core (0.6 pts; 0.4 if electrons are forgetten). Since the mass of an electron is negligible compared to the mass of a proton, $n = \frac { 2 M } { 8 m _ { p } N _ { a } } = \frac { M } { 4 m _ { p } N _ { a } }$ (0.3 pts). Then

$$
p _ { c } \frac { \pi R _ { 0 } ^ { 3 } } { 6 } = \frac { M R _ { g } T _ { c } } { 4 m _ { p } N _ { a } } = \frac { M k _ { B } T _ { c } } { 4 m _ { p } }
$$

and

$$
p _ { c } = \frac { 3 } { 2 \pi } \frac { M k _ { B } T _ { c } } { R _ { 0 } ^ { 3 } m _ { p } }
$$

(0.1 pts).
vi. (0.4 pts) Combing both expressions for $p _ { c }$, one gets

$$
\frac { 63 } { 32 \pi } \frac { G M ^ { 2 } } { R _ { 0 } ^ { 4 } } = \frac { 3 } { 2 \pi } \frac { M k _ { B } T _ { c } } { R _ { 0 } ^ { 3 } m _ { p } }
$$

(0.2 pts).

$$
R _ { 0 } = \frac { 21 } { 16 } \frac { G M m _ { p } } { k _ { B } T _ { c } }
$$

(0.2 pts).


vii. (1.5 pts) Writing out the energy balance for a spherical shell with a radius of $x$ and thickness $\mathrm { d } x$ concentric to the star

$$
- 4 \pi x ^ { 2 } \frac { \mathrm {~d} T } { \mathrm {~d} x } \kappa = P
$$

(0.4 pts) and rearranging the terms, one gets

$$
- 4 \pi \kappa \mathrm {~d} T = P \frac { \mathrm {~d} x } { x ^ { 2 } }
$$

(0.2 pts). Integrating from $x = \frac { R _ { 0 } } { 2 }$ to $x = R _ { 0 }$ yields

$$
\begin{aligned}
- 4 \pi \kappa \int _ { T _ { c } } ^ { T \left( R _ { 0 } \right) } \mathrm { d } T & = P \int _ { \frac { R _ { 0 } } { 2 } } ^ { R _ { 0 } } \frac { \mathrm {~d} x } { x ^ { 2 } } \\
- 4 \pi \kappa \left( T \left( R _ { 0 } \right) - T _ { c } \right) & = - P \left( \frac { 1 } { R _ { 0 } } - \frac { 2 } { R _ { 0 } } \right) \\
4 \pi \kappa T _ { c } & = \frac { P } { R _ { 0 } }
\end{aligned}
$$

(0.2 pts). Then

$$
P = 4 \pi \kappa T _ { c } R _ { 0 }
$$

(0.3 pts). When similar expression is obtained without integration (leading to a wrong factor), only 0.2 for integration is lost.

Substituting $\kappa = \frac { f \left( T _ { c } \right) } { \rho _ { c } } , \rho _ { c } = \frac { 3 M } { 4 \pi R _ { 0 } ^ { 3 } }$ and $R _ { 0 } = \frac { 21 } { 16 } \frac { G M m _ { p } } { k _ { B } T _ { c } }$, we ultimately end up with

$$
P = \left( \frac { 21 } { 8 } \frac { G m _ { p } } { k _ { B } } \right) ^ { 4 } \frac { \pi ^ { 2 } T _ { c } ^ { 3 } f \left( T _ { c } \right) } { 3 } M ^ { 3 }
$$

(0.3 pts). Thus $\gamma = 3$ (0.1 pts).

Part C. Proton-proton fusion chain (3.5 points)
i. (1.5 pts) First, we must convert the units to base units: $[ c ] = \mathrm { m } / \mathrm { s }$,
$[ G ] = \mathrm { m } ^ { 3 } \cdot \mathrm {~kg} ^ { - 1 } \mathrm {~s} ^ { - 2 }$,
$\left[ k _ { B } \right] = \mathrm { m } ^ { 2 } \cdot \mathrm {~kg} \cdot \mathrm {~s} ^ { - 2 } \cdot \mathrm {~K} ^ { - 1 } ( 0.1 \mathrm { pts } )$,
$\left[ N _ { A } \right] = \mathrm { mol } ^ { - 1 }$,
$[ \hbar ] = \mathrm { m } ^ { 2 } \cdot \mathrm {~kg} / \mathrm { s } ( 0.1 \mathrm { pts } )$,
$[ e ] = \mathrm { C }$,
$\left[ k _ { e } \right] = \mathrm { kg } \cdot \mathrm { m } ^ { 3 } \cdot \mathrm { C } ^ { - 2 } \mathrm {~s} ^ { - 2 } ( 0.1 \mathrm { pts } )$.
Let $\alpha = [ c ] ^ { \beta } [ G ] ^ { \gamma } \left[ k _ { B } \right] ^ { \delta } \left[ N _ { A } \right] ^ { \varepsilon } [ \hbar ] ^ { \mu } [ e ] ^ { \phi } \left[ k _ { e } \right] ^ { \omega }$. Then we can create an equation for each unit:
$\mathrm { m } : \beta + 3 \gamma + 2 \delta + 2 \mu + 3 \omega = 0$
$\mathrm { s } : - \beta - 2 \gamma - 2 \delta - \mu - 2 \omega = 0$
$\mathrm { kg } : - \gamma + \delta + \mu + \omega = 0$
$\mathrm { K } : - \delta = 0$
mol: $- \varepsilon = 0$
C: $\phi - 2 \omega = 0$.
(0.1 pts for each equation.) After solving the system of equations and setting $\omega = 1$, we get $\beta = - 1 , \gamma = 0 , \delta = 0 , \varepsilon = 0$, $\mu = - 1 , \phi = 2$, and $\omega = 1$ (apart from $\delta$ and $\varepsilon$, 0.1 pts for each value). Thus

$$
\alpha = \frac { k _ { e } e ^ { 2 } } { c \hbar } = 7.3 \times 10 ^ { - 3 } .
$$

(0.1 pts for the numerical value.)
ii. (1 pt) Let the distance to the centre of mass for both protons be $x$. Then the force acting on one of the protons is $F ( x ) = \frac { k _ { e } e ^ { 2 } } { 4 x ^ { 2 } }$ and thus the potential energy is

$$
\Pi = \int _ { \infty } ^ { x } F ( x ) \mathrm { d } x = \frac { k _ { e } e ^ { 2 } } { 4 } \int _ { \infty } ^ { x } \frac { \mathrm {~d} x } { x ^ { 2 } } = \frac { k _ { e } e ^ { 2 } } { 4 x } .
$$

(0.3 pts out which 0.1 goes for correctly treating the distance to the centre of mass and distance between the protons.) By applying the energy conservation law at $x = \frac { r _ { p } } { 2 }$ and $x = \infty$, we get

$$
\frac { k _ { e } e ^ { 2 } } { 2 r _ { p } } = \frac { m _ { p } v ^ { 2 } } { 2 }
$$

(0.2 pts). Furthermore

$$
\frac { m _ { p } v ^ { 2 } } { 2 } = \frac { 3 k _ { B } T ^ { \prime } } { 2 }
$$

(0.3 pts). $T ^ { \prime }$ can be expressed as

$$
T ^ { \prime } = \frac { k _ { e } e ^ { 2 } } { 3 k _ { B } r _ { p } } = 6.5 \times 10 ^ { 9 } \mathrm {~K}
$$

(0.1 pts for formula). This is around $\frac { T ^ { \prime } } { T _ { c } } = 3600$ times larger than the actual temperature of the stellar core (0.1 pts).
iii. (1 pt) The total energy of a proton moving at speed $v$ is $W = \frac { m _ { p } v ^ { 2 } } { 2 }$ and the potential energy, as expressed in the last subtask, is $\Pi ( r ) = \frac { k _ { e } e ^ { 2 } } { 2 r } = \frac { \alpha c \hbar } { 2 r }$. The moment at which the proton "dives into the tunnel" happens when $W = \Pi ( r ) = \Pi \left( r _ { \star } \right) = \frac { \alpha c \hbar } { 2 r _ { \star } }$ (0.3 pts). Thus $r _ { \star } = \frac { \alpha c \hbar } { m _ { p } v ^ { 2 } }$ (0.1 pts). Then the probability of the tunnelling taking place is

$$
p \approx \exp \left[ - 2 \hbar ^ { - 1 } \int _ { 0 } ^ { r _ { \star } } \sqrt { m _ { p } \alpha c \hbar \left( \frac { 1 } { r } - \frac { 1 } { r _ { \star } } \right) \mathrm { d } r } \right] =
$$

(0.3 pts)

$$
= \exp \left( - 2 \hbar ^ { - 1 } \sqrt { m _ { p } \alpha c \hbar } \frac { \pi \sqrt { r _ { \star } } } { 2 } \right) = \exp \left( - \frac { \pi \alpha c } { v } \right)
$$

(0.3 pts).
