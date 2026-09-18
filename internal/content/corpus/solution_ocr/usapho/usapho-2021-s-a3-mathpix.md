---
id: solution-ocr-usapho-2021-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2021-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

## Electroneering

An electron is a particle with charge $- q$, mass $m$, and magnetic moment $\mu$. In this problem we will explore whether a classical model consistent with these properties can also explain the rest energy $E _ { 0 } = m c ^ { 2 }$ of the electron.

Let us describe the electron as a thin spherical shell with uniformly distributed charge and radius $R$. Recall that the magnetic moment of a closed, planar loop of current is always equal to the product of the current and the area of the loop. For the electron, a magnetic moment can be created by making the sphere rotate around an axis passing through its center.

a. If no point on the sphere's surface can travel faster than the speed of light (in the frame of the sphere's center of mass), what is the maximum magnetic moment that the sphere can have? You may use the integral:
$$
\int _ { 0 } ^ { \pi } \sin ^ { 3 } \theta d \theta = \frac { 4 } { 3 }
$$

## Solution

A point on the sphere's equator moves at a speed $\omega R$, where $\omega$ is the angular velocity of rotation. Setting $\omega R = c$ gives $\omega = c / R$.

The spinning sphere can be thought of as a stack of infinitesimal current loops, all of which have a magnetic moment pointing in the same direction. Consider making a thin, circular slice of the sphere's surface, corresponding to polar angles in the range $( \theta , \theta + d \theta )$. This slice has a radius $R \sin \theta$, so that the surface area of the slice is

$$
d s = 2 \pi R \sin \theta R d \theta .
$$

The charge of the slice is

$$
d Q = - \frac { q d s } { 4 \pi R ^ { 2 } } = - \frac { q \sin \theta } { 2 } .
$$

Since the charge $d Q$ moves around the rotation axis one time per period $T = 2 \pi / \omega$, the corresponding current is

$$
d I = \frac { d Q } { T } = - \frac { \omega q \sin \theta } { 4 \pi } .
$$

The magnitude of the magnetic moment of this slice is

$$
d \mu = \pi ( R \sin \theta ) ^ { 2 } | d I | = \frac { 1 } { 4 } q \omega R ^ { 2 } \sin ^ { 3 } \theta d \theta .
$$

Using the provided integral, the total magnetic moment is

$$
\mu = \int _ { 0 } ^ { \pi } \frac { 1 } { 4 } q \omega R ^ { 2 } \sin ^ { 3 } \theta d \theta = \frac { 1 } { 3 } q c R
$$

If you weren't able to do this, you could also have given the answer $\mu \sim q c R$, which can be derived by dimensional analysis, for partial credit.
Alternative solution: Note that for a uniformly charged ring of mass $d m$, charge $d q$, and radius $r$, rotating with angular velocity $\omega$, the ratio of the magnetic moment and the


angular momentum is

$$
\frac { \mu } { L } = \frac { \pi r ^ { 2 } ( \omega d q / 2 \pi ) } { \left( r ^ { 2 } d m \right) \omega } = \frac { 1 } { 2 } \frac { d q } { d m } .
$$

The ratio is independent of $r$ and $\omega$. Since the sphere can be decomposed into such rings, the total magnetic moment and total angular momentum must have the same ratio,

$$
\frac { \mu } { L } = \frac { 1 } { 2 } \frac { q } { m } .
$$

Finally, we know that $L = ( 2 / 3 ) m R ^ { 2 } \omega$ for a spherical shell. Plugging this in and using $\omega = c / R$ gives $\mu = q c R / 3$ as before, but with no integration required.

b. The electron's magnetic moment is known to be $\mu = q \hbar / 2 m$, where $\hbar$ is the reduced Planck constant. In this model, what is the minimum possible radius of the electron? Express your answer in terms of $m$ and fundamental constants.

## Solution

Since the magnetic moment is fixed, and we want the radius to be small, we want the electron to be spinning as fast as possible. Thus, the magnetic moment has the value found in part (a), and equating this to the known value gives

$$
R = \frac { 3 } { 2 } \frac { \hbar } { m c } .
$$

Again, you can get $R \sim \hbar / m c$ by dimensional analysis.

c. Assuming the radius is the value you found in part (b), how much energy is stored in the electric field of the electron? Express your answer in terms of $E _ { 0 } = m c ^ { 2 }$ and the fine structure constant,
$$
\alpha = \frac { q ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar c } \approx \frac { 1 } { 137 } .
$$

## Solution

For a collection of charges, the total energy stored in the electrostatic field is

$$
U _ { E } = \frac { 1 } { 2 } \sum _ { i } q _ { i } V _ { i }
$$

where $V _ { i }$ is the electric potential at $q _ { i }$. In this case, the total charge is $q$, and all of the charge is at potential $q / 4 \pi \epsilon _ { 0 } R$, so

$$
U _ { E } = \frac { q ^ { 2 } } { 8 \pi \epsilon _ { 0 } R } .
$$

Using the result of part (b),

$$
U _ { E } = \frac { 1 } { 3 } \alpha E _ { 0 } .
$$

Note that you can't get this answer by dimensional analysis alone, since $\alpha$ is dimensionless. (However, if you found $R$ by dimensional analysis, and additionally reasoned that $U _ { E }$ could


depend only on $q , \epsilon _ { 0 }$, and $R$, then you could derive $U _ { E } \sim \alpha E _ { 0 }$, for partial credit.)

d. Roughly estimate the total energy stored in the magnetic field of the electron, in terms of $E _ { 0 }$ and $\alpha$. (Hint: one way to do this is to suppose the magnetic field has roughly constant magnitude inside the sphere and is negligible outside of it, then estimate the field inside the sphere.)

## Solution

Following the hint, we can estimate

$$
U _ { B } \sim \frac { B _ { 0 } ^ { 2 } } { 2 \mu _ { 0 } } \left( \frac { 4 } { 3 } \pi R ^ { 3 } \right)
$$

where $B _ { 0 }$ is the typical magnetic field inside the sphere. Actually finding the value of $B _ { 0 }$ would require doing some complicated integrals. To get a rough estimate, note that if we replaced the sphere with a ring of charge, then at the center of the ring,

$$
B _ { 0 } \sim \frac { \mu _ { 0 } I } { R } \sim \frac { \mu _ { 0 } q c } { R ^ { 2 } } .
$$

Thus, we have

$$
U _ { B } \sim \frac { 1 } { \mu _ { 0 } } \left( \frac { \mu _ { 0 } q c } { R ^ { 2 } } \right) ^ { 2 } R ^ { 3 } \sim \frac { \mu _ { 0 } q ^ { 2 } c ^ { 2 } } { R } \sim \frac { \mu _ { 0 } m c ^ { 3 } q ^ { 2 } } { \hbar } .
$$

To get this in terms of the fine structure constant, we use $c ^ { 2 } = 1 / \mu _ { 0 } \epsilon _ { 0 }$, giving

$$
U _ { B } \sim m c ^ { 2 } \frac { q ^ { 2 } } { \epsilon _ { 0 } \hbar c } \sim \alpha E _ { 0 } .
$$

An even faster way to get this result is to note that in general, the energy stored in magnetic fields tends to be a factor of order $( v / c ) ^ { 2 }$ smaller than the energy stored in electric fields, where $v$ is the speed of the charge. In this problem the charge is all moving relativistically, so we must have $U _ { B } \sim U _ { E }$.

e. How does your estimate for the total energy in the electric and magnetic fields compare to $E _ { 0 }$ ?

## Solution

Both $U _ { E }$ and $U _ { B }$ are much smaller than $E _ { 0 }$, by a factor of $\alpha \ll 1$. Thus, this classical model cannot explain the origin of the electron's rest energy.
There were many attempts to make classical models of the electron in the early $20 { } ^ { \text {th } }$ century, but they all ran into difficulties like this one. For more on this subject, see chapter II-28 of the Feynman lectures.

In parts (a) and (b), you can also give your answers up to a dimensionless multiplicative constant for partial credit.


## Part B
