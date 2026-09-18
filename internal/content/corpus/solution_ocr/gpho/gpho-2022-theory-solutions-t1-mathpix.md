---
id: solution-ocr-gpho-2022-theory-solutions-t1
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2022_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2022-t1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem T1. Dark Matter (10 points) Part A. Rotation curves (5.5 points)

1. (1 pt) If Sun's orbital speed is $v _ { \odot }$, then it must cover a distance of $2 \pi r _ { \odot } = v _ { \odot } T _ { \odot }$ in one full period. Here, $r _ { \odot }$ is Sun's distance from the galactic centre. Hence,

$$
\begin{equation*}
r _ { \odot } = \frac { v _ { \odot } T _ { \odot } } { 2 \pi } . \tag{0.5pts}
\end{equation*}
$$

The Sun can be in one of the regions, either $r _ { \odot } \leq r _ { 1 }$ or $r _ { \odot } > r _ { 1 }$. If $r _ { \odot } \leq r _ { 1 }$, then $v _ { \odot } = v _ { 0 } r _ { \odot } / r _ { 1 }$ and so we get $1 = v _ { 0 } T _ { \odot } / \left( 2 \pi r _ { 1 } \right)$ which, after plugging in the values, gives a contradiction. $\square$

Hence, $r _ { \odot } > r _ { 1 }$ and $v _ { \odot } = v _ { 0 }$. Therefore,

$$
\begin{equation*}
r _ { \odot } = \frac { v _ { 0 } T _ { \odot } } { 2 \pi } = 2.5 \times 10 ^ { 20 } \mathrm {~m} = 8.1 \mathrm { kpc } . \tag{0.2pts}
\end{equation*}
$$

Indeed, $r _ { \odot } > r _ { 1 }$.
2. (1 pt) The orbiting test particle of mass $m _ { \text {test } } \ll m$ experiences gravitational acceleration

$$
\begin{equation*}
F _ { g } = \frac { G m m _ { \mathrm { test } } } { r ^ { 2 } } , \tag{0.4pts}
\end{equation*}
$$

which acts as the centripetal force

$$
\begin{equation*}
F _ { c } = \frac { m _ { \mathrm { test } } v ^ { 2 } } { r } \tag{0.4pts}
\end{equation*}
$$

due to it orbiting on a circular trajectory. Equating the two, we find

$$
\begin{equation*}
v = \sqrt { \frac { G m } { r } } . \tag{0.2pts}
\end{equation*}
$$

If the student writes the final answer directly, they receive full marks.
3. (1.5 pts) Solving this part requires the use of Gauss' law for gravity. Applying it gives that the gravitational acceleration at a given point is only dictated by the mass that's within an imaginary sphere of radius $r$.

Outside of the cloud, when $r > r _ { 0 }$, via Gauss' law, the gas acts as a point mass of mass $m _ { 0 } = 4 \pi r _ { 0 } ^ { 3 } \rho _ { 0 } / 3$ and the speed is therefore given by $v = \sqrt { G m _ { 0 } / r }$.

Inside the cloud, when $r \leq r _ { 0 }$, the mass within $r$ is given by $m ( r ) = 4 \pi r ^ { 3 } \rho _ { 0 } / 3 = m _ { 0 } r ^ { 3 } / r _ { 0 } ^ { 3 }$ and so the speed is $v = r \sqrt { G m _ { 0 } / r _ { 0 } ^ { 3 } }$.

The gravitational acceleration inside and outside the cloud are given by

$$
\begin{align*}
& g \left( r \leq r _ { 0 } \right) = \frac { G m ( r ) } { r ^ { 2 } } = \frac { G m _ { 0 } r } { r _ { 0 } ^ { 3 } } , \\
& g \left( r > r _ { 0 } \right) = \frac { G m _ { 0 } } { r ^ { 2 } } \tag{0.3pts}
\end{align*}
$$

The potential energy in the cloud can be found from its integral definition

$$
\begin{align*}
\varphi \left( r \leq r _ { 0 } \right) & = \int _ { \infty } ^ { r } g \mathrm {~d} r = \int _ { \infty } ^ { r _ { 0 } } g \mathrm {~d} r + \int _ { r _ { 0 } } ^ { r } g \mathrm {~d} r \\
& = \int _ { \infty } ^ { r _ { 0 } } \frac { G m _ { 0 } } { r ^ { 2 } } \mathrm {~d} r + \int _ { r _ { 0 } } ^ { r } \frac { G m _ { 0 } r } { r _ { 0 } ^ { 3 } } \mathrm {~d} r \\
& = - \frac { G m _ { 0 } } { r _ { 0 } } + \frac { G m _ { 0 } r ^ { 2 } } { 2 r _ { 0 } ^ { 3 } } - \frac { G m _ { 0 } } { 2 r _ { 0 } } \\
& = \frac { G m _ { 0 } } { 2 r _ { 0 } } \left( r ^ { 2 } - 3 r _ { 0 } ^ { 2 } \right) \tag{0.4pts}
\end{align*}
$$

4. (1.5 pts) The speed profile in the region $r \leq r _ { 1 }$ is linearly increasing, which is also the case for the uniform density cloud in part 3. Hence, in region A, when $r \leq r _ { 1 } , \rho$ is constant
and can be found from

$$
v = r \sqrt { \frac { G m _ { 0 } } { r _ { 0 } ^ { 3 } } } = r \sqrt { \frac { 4 \pi \rho G } { 3 } } = v _ { 0 } \frac { r } { r _ { 1 } }
$$

to be

$$
\begin{equation*}
\rho \left( r \leq r _ { 1 } \right) = \frac { 3 v _ { 0 } ^ { 2 } } { 4 \pi G r _ { 1 } ^ { 2 } } = \rho _ { 1 } = 2.20 \times 10 ^ { - 20 } \mathrm {~kg} / \mathrm { m } ^ { 3 } . \tag{0.3pts}
\end{equation*}
$$

In region B, when $r > r _ { 1 }$, we have $v ( r ) = v _ { 0 }$. This doesn't directly agree with any of the previously investigated scenarios. We can still express the total enclosed mass as

$$
\begin{equation*}
m = \frac { r v _ { 0 } ^ { 2 } } { G } . \tag{0.3pts}
\end{equation*}
$$

The differential of the mass can be related to the density at $r$ via $\mathrm { d } m = 4 \pi r ^ { 2 } \rho ( r ) \mathrm { d } r = \mathrm { d } r v _ { 0 } ^ { 2 } / G$. Thus,

$$
\begin{equation*}
\rho \left( r > r _ { 1 } \right) = \frac { v _ { 0 } ^ { 2 } } { 4 \pi r ^ { 2 } G } . \tag{0.7pts}
\end{equation*}
$$

If the student calculates the average density $\rho _ { \text {avg } } = m ( r ) / V ( r )$, then they lose up to (0.5 pts) in the last point.
5. (0.5 pts) From the previous part, We calculate the matter density at $r = r _ { \odot }$ to be

$$
\begin{equation*}
\rho _ { \odot } = \rho \left( r = r _ { \odot } \right) = \frac { v _ { 0 } ^ { 2 } } { 4 \pi r _ { \odot } ^ { 2 } G } = 1.01 \times 10 ^ { - 21 } \mathrm {~kg} / \mathrm { m } ^ { 3 } . \tag{0.1pts}
\end{equation*}
$$

The visible density around the Sun can be estimated as the product of the number density of stars $n \approx 1 / d ^ { 3 }$ and the mass of a typical star. This gives

$$
\begin{equation*}
\rho _ { \mathrm { vis } } \approx M / d ^ { 3 } = 4.2 \times 10 ^ { - 21 } \mathrm {~kg} / \mathrm { m } ^ { 3 } . \tag{0.2pts}
\end{equation*}
$$

We see that $\rho _ { \text {vis } } > \rho _ { \odot }$. The reason for this is that when calculating total matter density, we assumed spherical symmetry, while visible mass is concentrated on the galactic disc, which is highly non-spherical. As a result, $\rho _ { \odot }$ underestimates the density around the solar neighbourhood.


Part B. Self-interacting dark matter (4.5 points) 1. (1.5 pts)

In region A, when $r \leq r _ { 1 }$, we have $\rho ( r ) = \rho _ { 1 }$ and $\varphi ( r ) =$ $G m _ { 0 } \left( r ^ { 2 } - 3 r _ { 0 } ^ { 2 } \right) / \left( 2 r _ { 0 } \right)$. However, Boltzmann statistics would predict the density to be

$$
\rho = C \mathrm { e } ^ { - \frac { m \left( r ^ { 2 } - 3 r _ { 0 } ^ { 2 } \right) } { k _ { B } T } } ,
$$

where $C$ is a constant. This can't agree with the actual constant density, no matter the value of $m / T$. Hence, $r \leq r _ { 1 }$ doesn't agree with the SIDM model. This is not surprising, as visible matter dominates in the centre of the galaxy. (0.5 pts)

In region B, when $r > r _ { 1 }$, we have $\rho ( r ) = \rho _ { 1 } r _ { 1 } ^ { 2 } / r ^ { 2 }$. The potential can be found by integrating. First,

$$
\begin{equation*}
g = \frac { G m ( r ) } { r ^ { 2 } } = \frac { v _ { 0 } ^ { 2 } } { r } \tag{0.2pts}
\end{equation*}
$$

and so

$$
\begin{equation*}
\varphi \left( r > r _ { 1 } \right) = \int _ { \infty } ^ { r } \frac { v _ { 0 } ^ { 2 } } { r } \mathrm {~d} r = v _ { 0 } ^ { 2 } \ln r + C . \tag{0.3pts}
\end{equation*}
$$

$\ln r$ doesn't converge at infinity, instead we substituted the infinite limit by a constant, as in reality the constant speed profile can't be sustained indefinitely (that would lead to infinite mass galaxy) and must decay at some point. Boltzmann statistics would then predict the density to be

$$
\begin{equation*}
\rho = B \exp \left( - \frac { m } { k _ { B } T } \left( v _ { 0 } ^ { 2 } \ln r + C \right) \right) = C r ^ { - \frac { m v _ { 0 } ^ { 2 } } { k _ { B } T } } . \tag{0.2pts}
\end{equation*}
$$

$C$ stands as a proxy for a constant. This must agree with $\rho = \rho _ { 1 } r _ { 1 } ^ { 2 } / r ^ { 2 }$ and indeed, it's satisfied when we set $- m v _ { 0 } ^ { 2 } / \left( k _ { B } T \right) = - 2$ and $C = \rho _ { 1 } r _ { 1 } ^ { 2 }$. Hence region B is the only region that agrees with the SIDM model.
2. (1 pt) In region B, when $r > r _ { 1 }$, we found that $m v _ { 0 } ^ { 2 } / 2 =$ $k _ { B } T$. In an isothermal gas, the thermal speed satisfies

$$
\begin{equation*}
\frac { m v _ { \mathrm { th } } ^ { 2 } } { 2 } = \frac { 3 k _ { B } T } { 2 } \tag{0.7pts}
\end{equation*}
$$

so $v _ { \mathrm { th } } = \sqrt { 3 } v _ { 0 } = 400 \mathrm {~km} / \mathrm { s }$.
3. (1 pt) When travelling a radial distance of $\mathrm { d } r$, a dark matter particle encounters around $\mathrm { d } r \sigma n ( r )$ other particles. (0.4 pts) Here $\sigma$ is the cross-sectional area of a dark matter particle, and $n ( r ) = \rho ( r ) / m$ is the number density of dark matter. The thermalization condition in region $r > r _ { 1 }$ is then

$$
\begin{equation*}
\int _ { r _ { 1 } } ^ { \infty } \frac { \rho } { m } \sigma \mathrm {~d} r = \int _ { r _ { 1 } } ^ { \infty } \frac { \mathrm { d } r } { r ^ { 2 } } \frac { \rho _ { 1 } r _ { 1 } ^ { 2 } \sigma } { m } = \frac { \rho _ { 1 } r _ { 1 } \sigma } { m } \gg 1 \tag{0.4pts}
\end{equation*}
$$

Hence,

$$
\begin{equation*}
\frac { \sigma } { m } \gg \frac { 1 } { \rho _ { 1 } r _ { 1 } } = 0.7 \mathrm {~m} ^ { 2 } / \mathrm { kg } . \tag{0.2pts}
\end{equation*}
$$

4. (1 pt) We use $n = \rho / m$ and $m v _ { 0 } ^ { 2 } = 2 k _ { B } T$ to get

$$
\begin{equation*}
\frac { \rho } { m } \ll \left( \frac { m ^ { 2 } v _ { 0 } ^ { 2 } } { 4 \pi \hbar ^ { 2 } } \right) ^ { \frac { 1 } { 3 } } = \frac { m ^ { 3 } v _ { 0 } ^ { 3 } } { 8 \hbar ^ { 3 } \pi ^ { 3 / 2 } } \tag{0.5pts}
\end{equation*}
$$

Hence,

$$
\begin{equation*}
m \gg \left( \frac { 8 \hbar ^ { 3 } \pi ^ { 3 / 2 } \rho } { v _ { 0 } ^ { 3 } } \right) ^ { \frac { 1 } { 4 } } = 7.5 \times 10 ^ { - 35 } \mathrm {~kg} . \tag{0.5pts}
\end{equation*}
$$

This is significantly smaller than any other elementary particle. For example electron's mass is $m _ { e } = 9.1 \times 10 ^ { - 31 } \mathrm {~kg}$.
