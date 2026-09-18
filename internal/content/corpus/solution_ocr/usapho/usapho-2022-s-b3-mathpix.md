---
id: solution-ocr-usapho-2022-s-b3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2022-b3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B3

## Time Crystal

The kinetic energy $E$, momentum $p$, and velocity $v$ of a particle moving in one dimension satisfy

$$
F = \frac { d p } { d t } = \frac { d E } { d x } , \quad v = \frac { d E } { d p }
$$

where $F$ is the external force. For a free particle, the momentum and energy are related by $E = p ^ { 2 } / 2 m$. However, when an electron moves inside a metal, its interactions with the crystal lattice of positively charged ions lead to a different relationship between momentum and energy. All of the above identities still apply, but now suppose that

$$
E ( p ) = V ( 1 - \cos ( p b ) )
$$

where $V$ and $b$ are constants that depend on the metal. This result is inherently quantum mechanical in origin, and as we will see, it leads to some rather strange behavior.

a. First, we investigate the motion of the electron in general.
    i. Find the velocity as a function of $p$.

## Solution

Using the provided identity,

$$
v = \frac { d E } { d p } = V b \sin ( p b ) .
$$

ii. The effective mass $m _ { * }$ of the electron is defined so that it satisfies $F = m _ { * } a$. Find the effective mass as a function of $p$.

## Solution

By definition, we have

$$
\frac { d p } { d t } = m _ { * } \frac { d v } { d t }
$$

so by the chain rule, we conclude

$$
m _ { * } = \left( \frac { d v } { d p } \right) ^ { - 1 } = \frac { 1 } { V b ^ { 2 } } \frac { 1 } { \cos ( p b ) } .
$$

Note that at some points, this mass is negative! Applying a forward force can cause an electron to accelerate backwards, which leads to the strange result we'll find in part b.ii. (This doesn't contradict conservation of momentum, because the forward momentum ends up imparted to the crystal lattice, causing the solid as a whole to recoil.)

b. Now suppose a metal rod of infinite length, aligned with the $x$-axis, contains conducting electrons of charge $- e$, initially with zero momentum. At time $t = 0$, an electric field $\mathbf { E } = E _ { 0 } \hat { \mathbf { x } }$ is turned on, and is experienced by every electron in the rod. Ignore the interactions of the electrons with each other.
    i. For an electron that starts at $x = 0$ at time $t = 0$, find its position $x ( t )$.


## Solution

The momentum is $p = F t = - e E _ { 0 } t$, so using the result of part a.i,

$$
v ( t ) = - V b \sin \left( e E _ { 0 } t b \right) .
$$

Integrating both sides gives

$$
x ( t ) = \frac { V } { e E _ { 0 } } \left( \cos \left( e E _ { 0 } t b \right) - 1 \right) .
$$

ii. If the number of conducting electrons per unit volume is $n$, and the cross-sectional area of the rod is $A$, find the average current in the rod over a long time.

## Solution

The electrons just oscillate, with zero average velocity. Therefore, the average current they supply is zero! This strange phenomenon is called a Bloch oscillation. It doesn't occur in ordinary metals because of the frequent collisions between electrons and ions, considered in the parts below.

iii. Now suppose that every time $\tau$, each electron suffers a collision with the crystal lattice, causing its momentum to reset to zero. In the limit of frequent collisions, $e E _ { 0 } b \tau \ll 1$, find the average current in the rod over a long time.

## Solution

For small times, the velocity is approximately

$$
v ( t ) \approx - \left( e E _ { 0 } V b ^ { 2 } \right) t
$$

where we applied the small angle approximation to the result of part b.i. Thus, if collisions happen every time $\tau$, the average velocity is

$$
\bar { v } = - \frac { 1 } { 2 } \left( e E _ { 0 } V b ^ { 2 } \right) \tau .
$$

Therefore, the average current is

$$
I = - n A e \bar { v } = \frac { 1 } { 2 } n A e ^ { 2 } E _ { 0 } V b ^ { 2 } \tau .
$$

The plus sign makes sense, since it means current flows parallel to the applied field.

iv. If $\tau$ can be freely adjusted, estimate the maximum possible average current in the rod, up to a dimensionless constant.

## Solution

If $\tau$ is small, then more frequent collisions slow down the current, as we showed in part b.iii. But if $\tau$ is very large, then the current cancels itself out due to Bloch oscillations, as we showed in part b.ii. Therefore, the highest possible current occurs when the electrons


have time to accelerate to a substantial fraction of their maximum possible speed $V b$, but collide before their effective mass goes negative. This occurs when

$$
e E _ { 0 } \tau b \sim 1
$$

and gives an average current

$$
I \sim n A e V b .
$$

Some students tried to answer this part using dimensional analysis, but that won't work, since there are 5 variables and only 4 independent dimensions (mass, length, time, and charge). Incidentally, you can find the dimensionless coefficient by solving a simple equation numerically, though this wasn't required.
