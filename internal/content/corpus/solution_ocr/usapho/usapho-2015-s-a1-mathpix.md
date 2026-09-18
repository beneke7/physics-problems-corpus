---
id: solution-ocr-usapho-2015-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2015-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

Consider a particle of mass $m$ that elastically bounces off of an infinitely hard horizontal surface under the influence of gravity. The total mechanical energy of the particle is $E$ and the acceleration of free fall is $g$. Treat the particle as a point mass and assume the motion is non-relativistic.

a. An estimate for the regime where quantum effects become important can be found by simply considering when the deBroglie wavelength of the particle is on the same order as the height of a bounce. Assuming that the deBroglie wavelength is defined by the maximum momentum of the bouncing particle, determine the value of the energy $E _ { q }$ where quantum effects become important. Write your answer in terms of some or all of $g , m$, and Planck's constant $h$.

## Solution

The de Broglie wavelength is $p = h / \lambda$, so if the height $H$ of the bounce is given by

$$
E = m g H = \frac { p ^ { 2 } } { 2 m }
$$

and $\lambda = H$, then

$$
m g H = \frac { h ^ { 2 } } { 2 m H ^ { 2 } } \quad \Rightarrow \quad H ^ { 3 } = \frac { h ^ { 2 } } { 2 m ^ { 2 } g }
$$

or

$$
E _ { q } = \sqrt [ 3 ] { \frac { 1 } { 2 } m g ^ { 2 } h ^ { 2 } } .
$$

One can also use dimensional analysis to find $E _ { q } \propto \sqrt [ 3 ] { m g ^ { 2 } h ^ { 2 } }$, though this will receive only partial credit.

b. A second approach allows us to develop an estimate for the actual allowed energy levels of a bouncing particle. Assuming that the particle rises to a height $H$, we can write
$$
2 \int _ { 0 } ^ { H } p d x = \left( n + \frac { 1 } { 2 } \right) h
$$
where $p$ is the momentum as a function of height $x$ above the ground, $n$ is a non-negative integer, and $h$ is Planck's constant.
    i. Determine the allowed energies $E _ { n }$ as a function of the integer $n$, and some or all of $g$, $m$, and Planck's constant $h$.
    ii. Numerically determine the minimum energy of a bouncing neutron. The mass of a neutron is $m _ { n } = 1.675 \times 10 ^ { - 27 } \mathrm {~kg} = 940 \mathrm { MeV } / \mathrm { c } ^ { 2 }$; you may express your answer in either Joules or eV.
    iii. Determine the bounce height of one of these minimum energy neutrons.


## Solution

We simply evaluate the given integral,

$$
\begin{aligned}
\left( n + \frac { 1 } { 2 } \right) h & = 2 \int _ { 0 } ^ { H } p d x \\
& = 2 \sqrt { 2 m } \int _ { 0 } ^ { H } \sqrt { E - m g x } d x \\
& = 2 \sqrt { 2 m E } \int _ { 0 } ^ { H } \sqrt { 1 - m g x / E } d x \\
& = 2 \sqrt { 2 m E } \frac { E } { m g } \int _ { 0 } ^ { 1 } \sqrt { 1 - u } d u \\
& = 2 \sqrt { 2 m E } \frac { E } { m g } \int _ { 0 } ^ { 1 } \sqrt { v } d v \\
& = 2 \sqrt { 2 } \frac { E ^ { 3 / 2 } } { \sqrt { m } g } \frac { 2 } { 3 }
\end{aligned}
$$

so

$$
E _ { n } = \sqrt [ 3 ] { \frac { 9 m g ^ { 2 } h ^ { 2 } } { 32 } } \left( n + \frac { 1 } { 2 } \right) ^ { 2 / 3 } .
$$

Solving for the minimum energy we get

$$
E _ { 0 } = \sqrt [ 3 ] { \frac { 9 m g ^ { 2 } h ^ { 2 } } { 128 } } = \sqrt [ 3 ] { \frac { 9 \left( m c ^ { 2 } \right) g ^ { 2 } h ^ { 2 } } { 128 c ^ { 2 } } } = 1.1 \times 10 ^ { - 12 } \mathrm { eV } .
$$

The bounce height is given by

$$
H = \frac { E _ { 0 } } { m g } = 10 \mu \mathrm {~m} .
$$

This is a very measurable distance!

c. Let $E _ { 0 }$ be the minimum energy of the bouncing neutron and $f$ be the frequency of the bounce. Determine an order of magnitude estimate for the ratio $E / f$. It only needs to be accurate to within an order of magnitude or so, but you do need to show work!

## Solution

One can simply use the results found above. A quicker method is dimensional analysis: the only quantity with units of energy times time is $h$ itself, so we must have

$$
E / f \sim h .
$$

A mnemonic to remember the units is the energy-time uncertainty principle $\Delta E \Delta t \sim h$.
