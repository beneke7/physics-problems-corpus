---
id: solution-ocr-gpho-2022-theory-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2022_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2022-t1, gpho-2022-t2, gpho-2022-t3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
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


## Problem T2. Global warming (10 points)

1. (2 pts) The total radiated power of the Sun is given by Stefan-Boltzmann's law:

$$
L _ { \odot } = 4 \pi R _ { \odot } ^ { 2 } \sigma T _ { \odot } ^ { 4 } .
$$

Here we used that the emissivity of the sun is 1.00.
Using Stefan-Boltzmann's law correctly for the Sun with its values for radius, emissivity, and temperature (0.5 pts)

As the radiation reaches Earth, it assumes an intensity given by the ratio of $L _ { \odot }$ and the area of a sphere of radius $D$ :

$$
I _ { 0 } = \frac { L _ { \odot } } { 4 \pi D ^ { 2 } } = \frac { R _ { \odot } ^ { 2 } \sigma T _ { \odot } ^ { 4 } } { D ^ { 2 } } = 1419 \mathrm {~W} .
$$

Arriving at the solar intensity or flux at Earth's distance from the Sun using the surface area, and getting the correct value within 25\% with units (0.2 + 0.2 + 0.1) (0.5 pts)

The cross-sectional area of Earth is $\pi R _ { \odot } ^ { 2 }$, hence the total solar power reaching Earth's surface before being absorbed is

$$
P _ { 0 } = I _ { 0 } \pi R _ { \odot } ^ { 2 } = \frac { R _ { \odot } ^ { 2 } \sigma T _ { \odot } ^ { 4 } } { D ^ { 2 } } R _ { 0 } ^ { 2 } \pi = 1.81 \times 10 ^ { 17 } \mathrm {~W} .
$$

Obtaining the solar power at Earth while using $I _ { 0 }$ and Earth's cross sectional area with correct value within 25\% and units (0.2 + 0.2 + 0.1) (0.5 pts)

The absorbed amount is $P _ { 0 } \alpha$. The duration of a year is $\Delta t = 365.24 \cdot 24 \cdot 60 \cdot 60 \mathrm {~s} = 3.15 \times 10 ^ { 7 } \mathrm {~s}$. Hence, the ratio of mankind's power consumption and the solar radiation is

$$
\frac { A } { P _ { 0 } \alpha \Delta t } = 2.20 \times 10 ^ { - 4 } .
$$

Combining $P _ { 0 }$ correctly with $\alpha = 0.7$ for 1 year in correct units with $A$ to get the ratio (0.2 + 0.3). Full mark for a value within 25\% (0.5 pts)
2. (1 pt) The average amount of solar radiation arriving on a unit area of Earth before being absorbed is $I _ { 1 } = P _ { 0 } / \left( 4 \pi R _ { \odot } ^ { 2 } \right) =$ $I _ { 0 } / 4 = 355 \mathrm {~W}$.
(0.3 pts)

Solar panels convert to power an intensity of $I _ { 1 } \eta$. Thus, the total area needed for the solar panels is

$$
A _ { S } = \frac { A } { \Delta t I _ { 1 } \eta } = 393000 \mathrm {~km} ^ { 2 } ,
$$

which is around 1.5 times bigger than the surface area of the Persian Gulf.

Combining $I _ { 1 }$ with the efficiency, A, and time (0.3 + 0.2 + 0.2). Full mark for a value within 25\% (0.7 pts)
3. (2 pts) Because the Earth is in thermal equilibrium, it must release the same amount of heat as it absorbs. The absorbed heat flux has two contributions, one is the absorbed flux $I _ { 1 } \alpha$ from the Sun
(0.5 pts) , and the other is the flux produced by Mankind $I _ { h } =$ $A / \left( \Delta t 4 \pi R _ { \odot } ^ { 2 } \right) = 0.0547 \mathrm {~W}$.
(0.5 pts)

The total absorbed and released flux are therefore $I _ { \text {tot } } =$ $I _ { 1 } \alpha + I _ { h }$.
(0.5 pts)

Humanity's contribution to the total flux is small, but we keep track of this for the sake of the next subtask. The ideal black body flux from the surface is $\sigma T _ { 0 } ^ { 4 }$ (note that we're missing $\varepsilon _ { 0 }$ because calculating the effective emissivity requires comparing the actual flux with ideal black body radiation) so the effective emissivity is given by

$$
\begin{equation*}
\varepsilon _ { \mathrm { eff } } = \frac { I _ { 1 } \alpha + I _ { h } } { \sigma T _ { 0 } ^ { 4 } } = 0.635 . \tag{0.5pts}
\end{equation*}
$$

4. (2 pts) If we remove humanity's contribution, then using similar thermodynamic equilibrium arguments, the total released flux must be equal to $I _ { 1 } \alpha$. If Earth's new temperature is $T _ { 1 }$, then $I _ { 1 } \alpha = \sigma \varepsilon _ { \text {eff } } T _ { 1 } ^ { 4 }$.
(0.5 pts)
0.5 for LHS and RHS each

Plugging in $\varepsilon _ { \text {eff } }$ from the previous part, we get

$$
\begin{equation*}
1 + \frac { I _ { h } } { I _ { 1 } \alpha } = \frac { T _ { 0 } ^ { 4 } } { T _ { 1 } ^ { 4 } } \tag{0.5pts}
\end{equation*}
$$

so the change in Earth's temperature is

$$
\begin{equation*}
\Delta T _ { 1 } = T _ { 0 } - T _ { 1 } = T _ { 0 } \left( 1 - \left( 1 + \frac { I _ { h } } { I _ { 1 } \alpha } \right) ^ { - 1 / 4 } \right) = 0.016 \mathrm {~K} \tag{0.5pts}
\end{equation*}
$$

Full mark for correct values within 25\%
5. (1.5 pts) Our system consists of Earth's surface and the atmospheric layers with greenhouse gases. Both must be in thermodynamic equilibrium. This is in contrast with the previous part where we could look at the total resulting system and its aggregated properties. If we denote the black body radiation being released from the surface with $I _ { s }$, then a fraction of $I _ { s } k$ is absorbed in the greenhouse gases and $I _ { s } k / 2$ (0.5 pts) is being directed back to the surface of the Earth (and the other $I _ { s } k / 2$ to space).
(0.5 pts)

Hence, the heat flux balance of the surface reads $I _ { 1 } \alpha + I _ { s } k / 2 =$ $I _ { s }$
(0.5 pts)
(we have neglected humanity's thermal contribution, as that leads to a negligible change in temperature $\Delta T _ { 1 } \ll \Delta T$ ). Therefore, $k = 2 \left( 1 - I _ { 1 } \alpha / I _ { s } \right)$.
(0.5 pts)

Additionally, we know that the emissivity of Earth's surface is $\varepsilon _ { 0 }$ so $I _ { s } = \varepsilon _ { 0 } \sigma T ^ { 4 }$, where $T$ is Earth's temperature. This gives us an analytic expression for $k$ :

$$
k = 2 \left( 1 - \frac { I _ { 1 } \alpha } { \varepsilon _ { 0 } \sigma T ^ { 4 } } \right) .
$$


For $T = T _ { 0 }$ we calculate $k _ { 0 } = 0.5886$ and for $T = T _ { 0 } - \Delta T$, $k _ { 1 } = 0.5708$. Therefore, the absorption factor of the greenhouse gases has changed by

$$
\begin{equation*}
\Delta k = k _ { 0 } - k _ { 1 } = 0.0178 , \tag{0.5pts}
\end{equation*}
$$

which on a global scale is very significant!
Full mark for correct values within 25\%
6. (1.5 pts) The Hadley circulation forms a big heat engine. The circulating air receives heat from Earth's surface at temperature $T _ { h } = T _ { 0 } = 15 ^ { \circ } \mathrm { C }$,
and releases heat in the form of radiation in the upper atmospheric layers at an effective temperature $T _ { c } \approx T _ { h } - 10 \mathrm {~km} / \left( 1 ^ { \circ } \mathrm { C } / 100 \mathrm {~m} \right) = 188 \mathrm {~K}$.
The released heat amount is constrained by the total heat radiated into space by the atmospheric gases found in the previous subtask, i.e. $P _ { \text {out } } \leq I _ { s } k _ { 0 } 2 \pi R _ { 0 } ^ { 2 } = \varepsilon _ { 0 } \sigma T ^ { 4 } k _ { 0 } 2 \pi R _ { 0 } ^ { 2 }$. .
On the other hand, the maximal efficiency of the heat engine corresponds to a Carnot cycle

$$
\eta \leq \frac { T _ { h } - T _ { c } } { T _ { h } } .
$$

(0.2 pts)

If the power going into the cycle is $P _ { \text {in } }$, then from conservation of energy we have $P _ { \text {in } } = P _ { \text {work } } + P _ { \text {out } }$, where $P _ { \text {work } }$ is the amount of wind energy produced on Earth. Further, $P _ { \text {work } } = P _ { \text {in } } \eta = \left( P _ { \text {work } } + P _ { \text {out } } \right) \eta$ so

$$
\begin{align*}
P _ { \text {work } } & = P _ { \text {out } } \frac { \eta } { 1 - \eta } \leq P _ { \text {out } } \frac { \frac { T _ { h } - T _ { c } } { T _ { h } } } { 1 - \frac { T _ { h } - T _ { c } } { T _ { h } } } \\
& = P _ { \text {out } } \left( \frac { T _ { h } } { T _ { c } } - 1 \right) \leq \varepsilon _ { 0 } \sigma T _ { 0 } ^ { 4 } k _ { 0 } 2 \pi R _ { 0 } ^ { 2 } \left( \frac { T _ { h } } { T _ { c } } - 1 \right) \\
& = 2.8 \times 10 ^ { 16 } \mathrm {~W} . \tag{0.3pts}
\end{align*}
$$

This is $P _ { \text {work } } \Delta t / A = 1000$ times bigger than humanity's total production.
(0.2 pts)

Full mark for correct values within 25\%


## Problem T3. Sports (10 points) Part A. Hammer throw (4 points)

1. (0.5 pts) We can neglect air drag in this part. The hammer is launched at an angle $\theta = 45 ^ { \circ }$ and travels a distance of $s$. If the starting speed is $v _ { 0 }$, the airtime can be expressed as

$$
\begin{equation*}
t = \frac { 2 v _ { 0 } \sin \theta } { g } = \frac { \sqrt { 2 } v _ { 0 } } { g } . \tag{0.2pts}
\end{equation*}
$$

The horizontal component of the velocity is constant and equal to

$$
\begin{equation*}
v _ { x } = v _ { 0 } \cos \theta = \frac { v _ { 0 } } { \sqrt { 2 } } . \tag{0.1pts}
\end{equation*}
$$

The travelled distance is thus

$$
\begin{equation*}
d = v _ { x } t = \frac { v _ { 0 } ^ { 2 } } { g } \tag{0.1pts}
\end{equation*}
$$

and so

$$
\begin{equation*}
v _ { 0 } = \sqrt { g d } = 28.0 \mathrm {~m} / \mathrm { s } . \tag{0.1pts}
\end{equation*}
$$

2. (1 pt) Before being released, the hammer moves on a circular trajectory of radius $r = L + l = 2.22 \mathrm {~m}$.
This means that the hammer experiences a centripetal acceleration of $v _ { 0 } ^ { 2 } / r$.

This is provided by the tension force $F _ { t }$.
The tension force is compensated by the athlete pulling from the grip. Note that the gravitational force $m g$ is pointing downwards and hence, is perpendicular to the steel wire which is horizontal at the moment when the hammer is released. So the gravitational force cancels out from the force balance projected to the direction of the wire. Hence, the force exerted by the athlete is equal to the centripetal force.
So, we obtain

$$
\begin{equation*}
F _ { t } = \frac { m v _ { 0 } ^ { 2 } } { r } = m g \left( \frac { d } { r } \right) \tag{0.3pts}
\end{equation*}
$$

which yields numerically 2.57 kN.
3. (0.5 pts) We can calculate the drag force from the formula $F _ { D } = 0.24 A \rho _ { a } v _ { 0 } ^ { 2 }$. The radius of the hammer $R$ can be found from the expression for its mass $m = 4 \pi R ^ { 3 } \rho _ { v } / 3$. Hence,

$$
\begin{equation*}
R = \left( \frac { 3 m } { 4 \pi \rho _ { v } } \right) ^ { \frac { 1 } { 3 } } = 6.03 \mathrm {~cm} \tag{0.2pts}
\end{equation*}
$$

and so $A = \pi R ^ { 2 } = 0.0114 \mathrm {~m} ^ { 2 }$ and

$$
\begin{equation*}
F _ { D 0 } = 0.24 A \rho _ { a } v _ { 0 } ^ { 2 } = 2.64 \mathrm {~N} . \tag{0.2pts}
\end{equation*}
$$

4. (1 pt) There are two main approaches. The more reliable one is using energy arguments, the second one using momentum. Both approaches start by noting that the air drag has minimal impact on the velocities and falling positions of the hammer. As such, we can take the hammer's trajectory to be parabolic in the first order, and calculate the second order corrections drag force would have based on the average drag air imparts on the hammer.

One critical thing to note is that we calculated $v _ { 0 }$ ignoring air drag. In reality, the starting speed is a bit bigger to account for drag, but the effect of this on the quantities that this and the following sub-task ask for is negligible. Hence, we still consider the parabolic trajectory starting with speed $v _ { 0 }$ and spanning a horizontal distance of $s$ (this doesn't need to be explicitly mentioned to get full marks).

Approach 1. Energy considerations:
From conservation of energy, the work done by air drag corresponds to change in the kinetic energy between starting and final positions.
Hence, if we can estimate the performed work, we get an estimate for the change in speed. In general, the work done in a segment of length $\Delta l$ is $\Delta W = F _ { D } \Delta l$. The total work done can therefore be approximated as the product of the average drag force and the total length of the parabola. (0.1 pts)

The speed of the hammer starts off at $v _ { 0 }$, then decreases to $v _ { 0 } / \sqrt { 2 }$ at the top of the parabola, and then increases back to $v _ { 0 }$ when it lands. This means the drag force goes from $F _ { D 0 }$ to $F _ { D 0 } / 2$ and back to $F _ { D 0 }$. The average can be estimated as $3 F _ { D 0 } / 4$.

The length of the parabola can be estimated by noting that the actual length of a small segment is $\sqrt { 2 }$ times bigger per its horizontal projection at the sides of the parabola, and equal to the projection at the peak. The length of the parabola is then roughly $( 1 + \sqrt { 2 } ) / 2$ times the horizontal projection, $s$. (0.2 pts)

Putting all this together,

$$
\begin{equation*}
\Delta W \approx \frac { 3 } { 8 } ( 1 + \sqrt { 2 } ) F _ { D 0 } d = 191 \mathrm {~J} . \tag{0.1pts}
\end{equation*}
$$

The conservation of energy reads $m v _ { 0 } ^ { 2 } / 2 = m v _ { 1 } ^ { 2 } / 2 + \Delta W$, where $v _ { 1 }$ is the final speed.
Therefore,

$$
\begin{equation*}
\Delta v \approx v _ { 0 } - v _ { 1 } = v _ { 0 } - \sqrt { v _ { 0 } ^ { 2 } - \frac { 2 \Delta W } { m } } = 0.96 \mathrm {~m} / \mathrm { s } . \tag{0.1pts}
\end{equation*}
$$

Approach 2. Momentum considerations:
The airtime of the hammer is $t \approx \sqrt { 2 } v _ { 0 } / g = 4.04 \mathrm {~s}$.
(0.2 pts)

To a decent approximations, we can decompose the air drag's action into separate horizontal and vertical components. As


such, the horizontal drag at the beginning and at the end of the flight is $0.24 A \rho _ { a } \left( v _ { 0 } \right) ^ { 2 } / \sqrt { 2 } = F _ { D } / \sqrt { 2 }$, and at the middle of the flight $- 0.24 A \rho _ { a } \left( v _ { 0 } / \sqrt { 2 } \right) ^ { 2 } = F _ { D } / \sqrt { 2 }$. We can estimate the average horizontal drag either as the arithmetic average of these two magnitudes, or just take the value $F _ { D } / 2$ from the middle of the flight, because the hammer spends near the maximum height relatively more time than near the ground level.
(0.2 pts)

The drag in the vertical directions is smaller as it starts with the same value $F _ { D } / \sqrt { 2 }$, but at the middle of the flight vanishes ( $v _ { y }$ goes from $v _ { 0 } / \sqrt { 2 }$ to $- v _ { 0 } / \sqrt { 2 }$, passing through 0). We can estimate its average value as the arithmetic average of the initial/final value and the value at the middle of the flight, so $F _ { D } / 4$.
(0.2 pts)

As such, the changes in the horizontal and vertical velocity components can be estimated as $\Delta v _ { x } = - F _ { D } t / ( 2 m ) =$ $- 0.73 \mathrm {~m} / \mathrm { s }$ and $\Delta v _ { y } = - F _ { D } t / ( 4 m ) = - 0.37 \mathrm {~m} / \mathrm { s }$.
(0.2 pts)

The total change in speed is then

$$
\begin{equation*}
\Delta v \approx v _ { 0 } - \sqrt { \left( \frac { v _ { 0 } } { \sqrt { 2 } } - \Delta v _ { x } \right) ^ { 2 } + \left( \frac { v _ { 0 } } { \sqrt { 2 } } - \Delta v _ { y } \right) ^ { 2 } } = 0.77 \mathrm {~m} / \mathrm { s } \tag{0.2pts}
\end{equation*}
$$

Exact answer: $\Delta v = 0.814 \mathrm {~m} / \mathrm { s }$.
5. (1 pt)

One might naturally extend the two approaches in the previous subtask. However, there's a crucial difficulty with using the average horizontal deceleration and that is that the flight duration changes slightly, providing a comparable contribution to the change in length as the horizontal deceleration. This usually results in an error that's bigger than 30 \%. A more accurate approach is to think in terms of the spans of parabolas with different starting speeds, outlined below.

As mentioned in the previous subtask, we're approximating the change in throwing length as the distance between the landing positions of when the hammer is thrown with speed $v _ { 0 }$ with and without drag. Without drag, it flies a distance $s$, but with drag it falls somewhere in-between two points defined by where the hammer falls without drag if the starting speeds were $v _ { 0 }$ and $v _ { 1 }$. We can roughly take this to be in-between the two positions. Hence, with drag the hammer flies a distance of $d ^ { \prime } \approx \left( v _ { 0 } ^ { 2 } / g + v _ { 1 } ^ { 2 } / g \right) / 2$
(0.8 pts)
and so

$$
\begin{equation*}
\Delta x = d - d ^ { \prime } \approx \frac { v _ { 0 } ^ { 2 } - v _ { 1 } ^ { 2 } } { 2 g } = 2.68 \mathrm {~m} . \tag{0.2pts}
\end{equation*}
$$

Exact answer: $\Delta x = 2.39 \mathrm {~m}$.
Part B. Discus throw (1 points)

Even though air drag is stronger during headwind, the wind serves to provide a lift force to the disc, giving it prolonged air time and allowing it to fly farther.
(0.5 pts)
(If additionally to the lift force, other arguments are mentioned, e.g. propelling by rotation, subtract 0.2)

A qualitative force diagram is shown below. The diagram should highlight a tilted discus being pushed against by a headwind.
(0.2 pts)

It should also show gravity, drag and lift force acting on the disc (or instead of the drag and lift, the resultant drag force which is pointed at a more vertical angle than usual). (0.3 pts)
(If any force in the direction of motion is shown, subtract 0.1)
![](../../../figures/solution-ocr/db7c88eca138b3c48082f528.jpg)

Part C. Pole vault (5 points)

1. (0.5 pts) The pole stores its elastic energy in bending deformation, i.e. the more it bends, the more elastic energy is stored.
(0.3 pts)

From the figure, we see that positions 6 and 7 have the most deformed pole. In 7, it's slightly more bent, as can be seen from how the end points of the poles are closer together. Hence, the answer is 7.
(0.2 pts)
2. (2 pts) We can determine the time interval from the fact that in-between positions 9 and 20, the man is in free-fall. Specifically, the $y$-coordinate of the centre of mass follows a quadratic $y = y _ { 0 } + v _ { y 0 } t - g t ^ { 2 } / 2$.
(0.5 pts)

We measure the $y$-coordinates at positions 16, 18, and 20 to be $y _ { 16 } = 593.0 \mathrm {~cm} , y _ { 18 } = 441.4 \mathrm {~cm} , y _ { 20 } = 183.7 \mathrm {~cm}$.
(0.6 pts)

The time difference between two consecutive recorded points is $\Delta t = 2 \tau$.
(0.1 pts)

Subtracting $y _ { 16 }$, we get

$$
\begin{align*}
& y _ { 18 } - y _ { 16 } = v _ { y 0 } \Delta t - \frac { g \Delta t ^ { 2 } } { 2 } \\
& y _ { 20 } - y _ { 16 } = 2 v _ { y 0 } \Delta t - 2 g \Delta t ^ { 2 } \tag{0.4pts}
\end{align*}
$$


We can solve this by plugging $v _ { y 0 }$ from one equation to the other. Solving the resulting equation gives us

$$
\begin{equation*}
\tau = \frac { \Delta t } { 2 } = \frac { 1 } { 2 } \sqrt { \frac { 2 y _ { 18 } - y _ { 20 } - y _ { 16 } } { g } } = 0.165 \mathrm {~s} . \tag{0.4pts}
\end{equation*}
$$

3. (0.5 pts) We can estimate the speed of the man as the distance covered between positions 1 and 3 divided by $2 \tau$. (0.3 pts)

From the figure, we measure $l _ { 13 } = 295.3 \mathrm {~cm}$ and so $v _ { 2 } \approx$ $l _ { 13 } / ( 2 \tau ) = 8.9 \mathrm {~m} / \mathrm { s } = 32.2 \mathrm {~km} / \mathrm { h }$.
4. (1 pt) We can find this from conservation of energy. For one, there is no work being done by the pole as it starts and ends completely straight (and has negligible kinetic energy). Further, the energy at position 12 is the same as in 16 (because the man is in free-fall). The conservation of energy then reads

$$
\begin{equation*}
\frac { m v _ { 3 } ^ { 2 } } { 2 } + m g y _ { 3 } + W = \frac { m v _ { 16 } ^ { 2 } } { 2 } + m g y _ { 16 } . \tag{0.2pts}
\end{equation*}
$$

From the figure, we measure $y _ { 3 } = 113.9 \mathrm {~cm} , x _ { 16 } = 21.1 \mathrm {~cm}$ (with respect to some arbitrary reference point), $x _ { 18 } = 66.3 \mathrm {~cm}$. (0.2 pts) From part ii., we calculate $v _ { y 0 } = v _ { y 16 } = \left( y _ { 18 } - y _ { 16 } + \right.$ $\left. g \Delta t ^ { 2 } / 2 \right) / \Delta t = - 3.00 \mathrm {~m} / \mathrm { s }$.
(0.2 pts)

We also approximate the horizontal component of the velocity at 16 as $v _ { x 16 } \approx \left( x _ { 18 } - x _ { 16 } \right) / ( 2 \tau ) = 1.37 \mathrm {~m} / \mathrm { s }$ and $v _ { 3 } \approx v _ { 2 }$. (0.2 pts)

We can finally manipulate the conservation of energy to

$$
\begin{align*}
W & = \frac { m v _ { 16 } ^ { 2 } } { 2 } + m g y _ { 16 } - \frac { m v _ { 3 } ^ { 2 } } { 2 } - m g y _ { 3 } \\
& \approx \frac { m v _ { x 16 } ^ { 2 } + m v _ { y 16 } ^ { 2 } } { 2 } + m g y _ { 16 } - \frac { m v _ { 2 } ^ { 2 } } { 2 } - m g y _ { 3 } \\
& = 1.0 \mathrm {~kJ} \tag{0.2pts}
\end{align*}
$$

5. (1 pt) The maximal height of the centre of mass can be found following the measurements from part ii.
(0.2 pts)

From there we found that $y _ { 16 } = 5.930 \mathrm {~m} , v _ { y 16 } = - 3.00 \mathrm {~m} / \mathrm { s }$. Hence, the peak took place $\Delta t _ { 1 } = - v _ { y 16 } / g$ in the past and it has coordinates $y _ { p } = y _ { 16 } - v _ { y 16 } \Delta t _ { 1 } + g \Delta t _ { 1 } ^ { 2 } / 2 = y _ { 16 } + v _ { y 16 } ^ { 2 } / ( 2 g ) =$ 6.39 m.
(0.8 pts)
