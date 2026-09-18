---
id: solution-ocr-usapho-2024-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2024-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

## Ping Pong

A thin wire of negligible resistance and total length $D$ is wound to form a thin cylindrical solenoid of length $\ell \ll D$. A conducting sphere of radius $R \ll \ell$ is attached to each end of the solenoid. Initially there is no current in the wire, and the spheres have charges $Q$ and $- Q$. Give all your answers in terms of $R , \ell , D$, and the speed of light $c = 1 / \sqrt { \mu _ { 0 } \epsilon _ { 0 } }$.

a. Assume this system can be modeled as an LC circuit. What is the angular frequency of its oscillations?

## Solution

The capacitance of this system is

$$
C = \frac { Q } { \Delta V } = \frac { Q } { Q / \left( 2 \pi \epsilon _ { 0 } R \right) } \approx 2 \pi \epsilon _ { 0 } R
$$

since the potential on the spheres is approximately $\pm Q / 4 \pi \epsilon _ { 0 } R$. Its inductance can be found by considering the magnetic field energy,

$$
\frac { 1 } { 2 } L I ^ { 2 } = \frac { 1 } { 2 \mu _ { 0 } } \int B ^ { 2 } d V
$$

If the radius of the solenoid is $a$, then $D = 2 \pi a n \ell$, where $n$ is the number of turns per length. Then we have

$$
\int B ^ { 2 } d V = \left( \mu _ { 0 } n I \right) ^ { 2 } \pi a ^ { 2 } \ell = \frac { \mu _ { 0 } I ^ { 2 } D ^ { 2 } } { 4 \pi \ell }
$$

which implies an inductance

$$
L = \frac { \mu _ { 0 } D ^ { 2 } } { 4 \pi \ell } .
$$

The angular frequency of LC oscillations is

$$
\omega = \frac { 1 } { \sqrt { L C } } = \frac { c } { D } \sqrt { \frac { 2 \ell } { R } } .
$$

We weren't told the values of $a$ and $n$, but the dependence on them simply dropped out.

This system loses energy because it emits electromagnetic radiation. Consider an electric dipole consisting of charges $\pm q _ { 0 } \cos ( \omega t )$ separated by distance $d$, whose dipole moment oscillates with amplitude $p _ { 0 } = q _ { 0 } d$. If $d$ is much smaller than the wavelength $\lambda$ of the radiation produced, then it can be shown that the power radiated is roughly (i.e. up to an order-one dimensionless factor)

$$
P \sim \frac { \omega ^ { 4 } p _ { 0 } ^ { 2 } } { \epsilon _ { 0 } c ^ { 3 } } .
$$

For the rest of the problem, your answers only need to be similarly rough estimates.

b. For this setup, the above formula applies if $D \gg D _ { 0 }$. Find a rough estimate for $D _ { 0 }$.


## Solution

The radiation produced has angular frequency $\omega$, so wavelength

$$
\lambda \sim \frac { c } { \omega } \sim D \sqrt { R / \ell } .
$$

The Larmor formula works when $\ell \ll \lambda$, which corresponds to $D \gg D _ { 0 } \sim \sqrt { \ell ^ { 3 } / R }$.
c. Assuming $D \gg D _ { 0 }$, estimate the number of oscillations that occurs until half the energy is lost.

## Solution

The total stored energy is of order

$$
E \sim \frac { Q ^ { 2 } } { C } \sim \frac { Q ^ { 2 } } { \epsilon _ { 0 } R } .
$$

Thus, the typical number $N$ of cycles for the energy to decay is approximately the inverse of the fraction of the energy that is radiated away in each cycle, so

$$
N \sim \frac { E } { P / \omega } \sim \frac { Q ^ { 2 } / \epsilon _ { 0 } R } { \omega ^ { 3 } ( Q \ell ) ^ { 2 } / \epsilon _ { 0 } c ^ { 3 } } \sim \frac { ( c / \omega ) ^ { 3 } } { R \ell ^ { 2 } } \sim \sqrt { \frac { R D ^ { 6 } } { \ell ^ { 7 } } } .
$$

This is roughly the quality factor of the LC circuit. Note that we implicitly assumed above that many oscillations occur before half the energy is lost. This assumption made sense because we know $N \gg \sqrt { R D _ { 0 } ^ { 6 } / \ell ^ { 7 } } \sim \ell / R \gg 1$.
Part (a) of this problem was inspired by problem 19.16 of Zangwill's Modern Electrodynamics. Compared to that problem, we replaced a straight connecting wire with a solenoid, which makes the problem a bit easier, and allows the LC circuit description to work for a broader range of parameters.
