---
id: solution-ocr-usapho-2025-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2025-qa3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem A3: Bitter and Magnetic

In this problem, we explore some of the design considerations for an electromagnet.

a. Consider an electromagnet consisting of a long solenoid, i.e. a spiral of thin wire wrapped in a single layer around a cylindrical nonmagnetic core. The wire is wrapped in such a way that the adjacent coils almost touch. When a current is sent through the wire, a magnetic field is generated inside the solenoid; this magnetic field exerts an outward force on the wire. Find the pressure $P$ on the solenoid in terms of the magnetic field $B$ inside the solenoid.

## Solution

The energy density of the magnetic field inside the solenoid is $B ^ { 2 } / \left( 2 \mu _ { 0 } \right)$; this is also the pressure it exerts on the outer walls of the solenoid. (To see that "energy density" is the same as "pressure", consider the work done when a portion of the wall is displaced by some distance.)
Alternatively, we can think about the force on a small segment of wire of length $d s$. If the current in the wire is $I$, the force on the segment will be $\tilde { B } \times I d s$, where $\tilde { B }$ is the average magnetic field through the wire. We must have $\tilde { B } = B / 2$ by symmetry - the field is $B$ inside the solenoid, 0 on the outside, and to a small segment of wire the solenoid just looks like an infinite plane. Also, $I = B / \left( \mu _ { 0 } n \right)$, where $n$ is the number of turns per unit length of the wire. Thus, the force on the segment is $B ^ { 2 } / \left( 2 \mu _ { 0 } n \right) d s$, and the area of the segment's cross-section is $d s / n$, leading to a pressure of $B ^ { 2 } / \left( 2 \mu _ { 0 } \right)$.

b. The pressure on the "walls" of the solenoid is counteracted by tension inside the wire. Derive an expression for the maximal achievable magnetic field $B$ in terms of coil radius $a$, wire diameter (thickness) $t \ll a$, and wire tensile strength $\sigma$. (The tensile strength of a material is the force per unit cross-sectional area that needs to be applied in order to pull the material apart.) Assume the wire is circular in cross-section.

## Solution

We need to convert pressure into tension. Consider a wire segment subtending an angle $d \theta$ : the outward force on it is

$$
\frac { B ^ { 2 } } { 2 \mu _ { 0 } } \cdot t \cdot R d \theta
$$

Denoting the tension in the wire by $T$, the inward force is $2 T ( d \theta / 2 ) = T d \theta$. Since $T = \frac { \pi } { 4 } t ^ { 2 } \sigma$, the necessary inequality is

$$
\frac { 2 } { \pi } \frac { B ^ { 2 } } { \mu _ { 0 } } \frac { a } { t } \leq \sigma
$$

or

$$
B \leq \sqrt { \frac { \pi } { 2 } \sigma \mu _ { 0 } \frac { t } { a } } .
$$

c. Let $a = 0.1 \mathrm {~m} , t = 0.001 \mathrm {~m}$. The tensile strength of copper is $\sigma = 250 \mathrm { MPa }$, and the permeability of free space is $\mu _ { 0 } = 4 \pi \times 10 ^ { - 7 } \mathrm { H } / \mathrm { m }$. What is the maximum magnetic field that can be achieved in a single-layer solenoid made out of such a wire without the wire snapping?


## Solution

$$
B \leq \sqrt { \frac { \sigma \mu _ { 0 } \pi t } { 2 a } } \approx 2.2 \mathrm {~T}
$$

d. In theory, we could generate a stronger field by increasing the wire thickness, but the nonuniform distribution of current inside the wire makes this difficult to analyze.
Instead, consider wrapping the solenoid in many layers of wire. We will place adjacent layers a distance $t$ apart so that they just barely don't touch, and will adjust the current through each wire to equalize the tensile stress. The wire coils span the space from an inner core radius of $a$ to an outer radius of $b$. Estimate the maximum achievable field strength inside this electromagnet. You may assume that the wire is thin $( t \ll a , t \ll b - a )$.

## Solution

Number the coils from the outside in, and let $I _ { k }$ be the current inside the $k$ th coil. For the outermost coil, the situation is as in part b, so the field inside it satisfies

$$
B _ { 1 } \leq \sqrt { \frac { \sigma \mu _ { 0 } \pi t } { 2 b } }
$$

For coil $k$, the energy density inside it is $B _ { k } ^ { 2 } / \left( 2 \mu _ { 0 } \right)$ and the energy density outside it is $B _ { k - 1 } ^ { 2 } / \left( 2 \mu _ { 0 } \right)$. The constraint on tensile stress becomes

$$
B _ { k } ^ { 2 } - B _ { k - 1 } ^ { 2 } \leq \frac { \pi } { 2 } \sigma \mu _ { 0 } \frac { t } { b - t k }
$$

Letting $N = ( b - a ) / t$ be the number of coils, we have

$$
B ^ { 2 } = B _ { N } ^ { 2 } \leq \sum _ { k = 1 } ^ { N } \left( B _ { k } ^ { 2 } - B _ { k - 1 } ^ { 2 } \right) = \frac { \pi } { 2 } \sigma \mu _ { 0 } \sum _ { k = 1 } ^ { N } \frac { t } { b - t k } \approx \frac { \pi } { 2 } \sigma \mu _ { 0 } \int _ { b } ^ { a } \frac { - d u } { u } = \frac { \pi } { 2 } \sigma \mu _ { 0 } \ln ( b / a ) .
$$

e. Estimate the numeric value of the maximum magnetic field that can be achieved in a multi-layer solenoid described above with $a = 0.1 \mathrm {~m}$ and $b = 0.3 \mathrm {~m}$.

## Solution

The maximum possible field will be

$$
B = \sqrt { \frac { \pi } { 2 } \sigma \mu _ { 0 } \ln ( 3 ) } = 23.3 \mathrm {~T} .
$$
