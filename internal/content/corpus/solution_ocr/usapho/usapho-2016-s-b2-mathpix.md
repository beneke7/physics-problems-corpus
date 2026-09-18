---
id: solution-ocr-usapho-2016-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2016-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question B2

a. A spherical region of space of radius $R$ has a uniform charge density and total charge $+ Q$. An electron of charge $- e$ is free to move inside or outside the sphere, under the influence of the charge density alone. For this first part ignore radiation effects.
    i. Consider a circular orbit for the electron where $r < R$. Determine the period of the orbit $T$ in terms of any or all of $r , R , Q , e$, and any necessary fundamental constants.

## Solution

We apply Gauss's law,

$$
\frac { Q _ { \text {in } } } { \epsilon _ { 0 } } = \oint \overrightarrow { \mathbf { E } } \cdot d \overrightarrow { \mathbf { A } } .
$$

This yields

$$
\frac { Q } { \epsilon _ { 0 } } \frac { r ^ { 3 } } { R ^ { 3 } } = 4 \pi r ^ { 2 } E \Rightarrow E = \frac { Q } { 4 \pi \epsilon _ { 0 } } \frac { r } { R ^ { 3 } }
$$

Since the motion is circular,

$$
m \frac { 4 \pi ^ { 2 } r } { T ^ { 2 } } = e E = \frac { e Q } { 4 \pi \epsilon _ { 0 } } \frac { r } { R ^ { 3 } }
$$

and solving for $T$ gives

$$
T = 2 \pi \sqrt { \frac { 4 \pi \epsilon _ { 0 } m R ^ { 3 } } { e Q } } .
$$

It is independent of $r$ since the motion is simple harmonic.

ii. Consider a circular orbit for the electron where $r > R$. Determine the period of the orbit $T$ in terms of any or all of $r , R , Q , e$, and any necessary fundamental constants.

## Solution

Applying Gauss's law as in the previous part gives

$$
E = \frac { Q } { 4 \pi \epsilon _ { 0 } } \frac { 1 } { r ^ { 2 } }
$$

as expected by the shell theorem; one could also just write this down directly. Using the same circular motion equation,

$$
m \frac { 4 \pi ^ { 2 } r } { T ^ { 2 } } = e \frac { e Q } { 4 \pi \epsilon _ { 0 } } \frac { 1 } { r ^ { 2 } }
$$

and solving for $T$ gives

$$
T = 2 \pi \sqrt { \frac { 4 \pi \epsilon _ { 0 } m r ^ { 3 } } { e Q } } .
$$

It is proportional to $r ^ { 3 / 2 }$ in accordance with Kepler's third law.


iii. Assume the electron starts at rest at $r = 2 R$. Determine the speed of the electron when it passes through the center in terms of any or all of $R , Q , e$, and any necessary fundamental constants.

## Solution

We use the above results to compute the potential difference,

$$
\begin{aligned}
\Delta V & = - \int _ { 2 R } ^ { 0 } \overrightarrow { \mathbf { E } } \cdot d \overrightarrow { \mathbf { s } } , \\
& = \int _ { 2 R } ^ { R } \frac { Q } { 4 \pi \epsilon _ { 0 } } \frac { 1 } { r ^ { 2 } } + \int _ { R } ^ { 0 } \frac { Q } { 4 \pi \epsilon _ { 0 } } \frac { r } { R ^ { 3 } } , \\
& = \frac { Q } { 4 \pi \epsilon _ { 0 } } \left( \frac { - 1 } { 2 R } - \frac { - 1 } { R } + \frac { R ^ { 2 } } { 2 R ^ { 3 } } \right) , \\
& = \frac { Q } { 4 \pi \epsilon _ { 0 } R } .
\end{aligned}
$$

By energy conservation,

$$
v = \sqrt { \frac { 2 } { m } e \Delta V } = \sqrt { \frac { 2 e Q } { 4 \pi \epsilon _ { 0 } m R } } .
$$

b. Accelerating charges radiate. The total power $P$ radiated by charge $q$ with acceleration $a$ is given by
$$
P = C \xi a ^ { n }
$$
where $C$ is a dimensionless numerical constant (which is equal to $1 / 6 \pi ) , \xi$ is a physical constant that is a function only of the charge $q$, the speed of light $c$, and the permittivity of free space $\epsilon _ { 0 }$, and $n$ is a dimensionless constant. Determine $\xi$ and $n$.

## Solution

This is a dimensional analysis problem. The most straightforward method is to write out all the dimensions explicitly. Note that $a$ has dimensions of $[ \mathrm { L } ] / [ \mathrm { T } ] ^ { 2 } , P$ has dimensions of $[ \mathrm { M } ] [ \mathrm { L } ] ^ { 2 } / [ \mathrm { T } ] ^ { 3 } , c$ has dimensions of [L]/[T], $q$ has dimensions of [C], and $\epsilon _ { 0 }$ has dimensions of $[ \mathrm { C } ] ^ { 2 } [ \mathrm {~T} ] ^ { 2 } / [ \mathrm { M } ] [ \mathrm { L } ] ^ { 3 }$. The equation

$$
P = a ^ { \alpha } c ^ { \beta } \epsilon _ { 0 } { } ^ { \gamma } q ^ { \delta }
$$

has dimensions

$$
[ \mathrm { M } ] [ \mathrm { L } ] ^ { 2 } / [ \mathrm { T } ] ^ { 3 } = \left( [ \mathrm { L } ] / [ \mathrm { T } ] ^ { 2 } \right) ^ { \alpha } ( [ \mathrm { L } ] / [ \mathrm { T } ] ) ^ { \beta } \left( [ \mathrm { C } ] ^ { 2 } [ \mathrm {~T} ] ^ { 2 } / [ \mathrm { M } ] [ \mathrm { L } ] ^ { 3 } \right) ^ { \gamma } ( [ \mathrm { C } ] ) ^ { \delta }
$$

Mass is only balanced if $\gamma = - 1$. As a result, charge is balanced if $\delta = 2$. Proceeding similarly for length and time,

$$
P = \frac { 1 } { 6 \pi } a ^ { 2 } c ^ { - 3 } \epsilon _ { 0 } ^ { - 1 } q ^ { 2 }
$$

giving answers of $\xi = q ^ { 2 } / c ^ { 3 } \epsilon _ { 0 }$ and $n = 2$.


c. Consider the electron in the first part, except now take into account radiation. Assume that the orbit remains circular and the orbital radius $r$ changes by an amount $| \Delta r | \ll r$.
    i. Consider a circular orbit for the electron where $r < R$. Determine the change in the orbital radius $\Delta r$ during one orbit in terms of any or all of $r , R , Q , e$ and any necessary fundamental constants. Be very specific about the sign of $\Delta r$.

## Solution

The energy radiated away is given by

$$
\Delta E = - P T
$$

where $T$ is determined in the previous sections.
It is possible to compute the actual energy of each orbit, and it is fairly trivial to do for regions $r > R$, but perhaps there is an easier, more entertaining way. Consider

$$
\Delta E = \Delta K + \Delta U
$$

and for small changes in $r$,

$$
\frac { \Delta U } { \Delta r } \approx - F = \frac { e Q } { 4 \pi \epsilon _ { 0 } } \frac { r } { R ^ { 3 } } .
$$

This implies the potential energy increases with increasing $r$, as expected. Now

$$
\frac { \Delta K } { \Delta r } \approx \frac { d } { d r } \left( \frac { 1 } { 2 } m v ^ { 2 } \right) = \frac { 1 } { 2 } \frac { d } { d r } \left| r \frac { m v ^ { 2 } } { r } \right|
$$

but $m v ^ { 2 } / r = F$, so

$$
\frac { \Delta K } { \Delta r } \approx \frac { 1 } { 2 } \frac { d } { d r } | r F | = \frac { e Q } { 4 \pi \epsilon _ { 0 } } \frac { r } { R ^ { 3 } } .
$$

This implies the kinetic energy increases with increasing $r$, also as expected, as this region acts like a multidimensional simple harmonic oscillator. Combining,

$$
\frac { \Delta E } { \Delta r } \approx 2 \frac { e Q } { 4 \pi \epsilon _ { 0 } } \frac { r } { R ^ { 3 } } = 2 m a
$$

Finally,

$$
\Delta r = - \left( \frac { 1 } { 6 \pi } \frac { a ^ { 2 } } { c ^ { 3 } \epsilon _ { 0 } } e ^ { 2 } \right) \left( 2 \pi \sqrt { \frac { 4 \pi \epsilon _ { 0 } m R ^ { 3 } } { e Q } } \right) \left( \frac { 1 } { 2 m a } \right) .
$$

Plugging in the value of $a$, this can be simplified to

$$
\Delta r = - \frac { 1 } { 6 } \sqrt { \frac { e ^ { 5 } Q } { 4 \pi \epsilon _ { 0 } { } ^ { 3 } R \left( m c ^ { 2 } \right) ^ { 3 } } } \frac { r } { R } .
$$

Alternatively, we can write the result in terms of dimensionless groups,

$$
\Delta r = - \frac { 2 \pi } { 3 } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } R m c ^ { 2 } } \right) \sqrt { \frac { e Q } { 4 \pi \epsilon _ { 0 } R m c ^ { 2 } } } r .
$$


ii. Consider a circular orbit for the electron where $r > R$. Determine the change in the orbital radius $\Delta r$ during one orbit in terms of any or all of $r , R , Q , e$ and any necessary fundamental constants. Be very specific about the sign of $\Delta r$.

## Solution

Picking up where we left off,

$$
\frac { \Delta U } { \Delta r } \approx - F = \frac { e Q } { 4 \pi \epsilon _ { 0 } } \frac { 1 } { r ^ { 2 } } .
$$

This implies the potential energy increases with increasing $r$.

$$
\frac { \Delta K } { \Delta r } \approx \frac { 1 } { 2 } \frac { d } { d r } | r F | = \frac { \Delta K } { \Delta r } \approx - \frac { e Q } { 8 \pi \epsilon _ { 0 } } \frac { 1 } { r ^ { 2 } } .
$$

This implies the kinetic energy decreases with increasing $r$, a somewhat nonintuitive but true statement for circular orbits. Combining,

$$
\frac { \Delta E } { \Delta r } \approx \frac { 1 } { 2 } \frac { e Q } { 4 \pi \epsilon _ { 0 } } \frac { r } { R ^ { 3 } } = \frac { m a } { 2 } .
$$

Using the same manipulations as before,

$$
\Delta r = - \left( \frac { 1 } { 6 \pi } \frac { a ^ { 2 } } { c ^ { 3 } \epsilon _ { 0 } } e ^ { 2 } \right) \left( 2 \pi \sqrt { \frac { 4 \pi \epsilon _ { 0 } m r ^ { 3 } } { e Q } } \right) \left( \frac { 2 } { m a } \right) .
$$

Plugging in the value of $a$, this can be simplified to

$$
\Delta r = - \frac { 2 } { 3 } \sqrt { \frac { e ^ { 5 } Q } { 4 \pi \epsilon _ { 0 } ^ { 3 } r \left( m c ^ { 2 } \right) ^ { 3 } } } .
$$

Alternatively, we can write the result in terms of dimensionless groups,

$$
\Delta r = - \frac { 8 \pi } { 3 } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } R m c ^ { 2 } } \right) \sqrt { \frac { e Q } { 4 \pi \epsilon _ { 0 } R m c ^ { 2 } } } \frac { R ^ { 2 } } { r } .
$$


## Answer Sheets

Following are answer sheets for some of the graphical portions of the test.


The Cylinder's Frame
![](../../../figures/solution-ocr/a5349f06459d3afa523db500.jpg)


The Rod's Frame ct'
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
