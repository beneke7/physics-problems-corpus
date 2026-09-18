---
id: solution-ocr-spot-2026-s-q4
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
4. Optical microscopes use optical lenses to bend light and form images. Electron microscopes on the other hand rely on electromagnetic fields to bend electrons. We will explore the properties of a magnetic lens in the following question. For all parts below we will work in cylindrical coordinates $( r , \theta , z )$ with the origin coninciding with the center of the top face of the magnet.
![](../../../figures/solution-ocr/9dba5798717d9aa2c4d3b693.jpg)
We can use a cylindrically symmetric magnetic field as a lens. Near the central axis of the magnet (small $r$ ), the $z$ component of the field can be approximated by
$$
B _ { z } ( z ) = \frac { B _ { 0 } } { 1 + \left( \frac { z } { a } \right) ^ { 2 } }
$$
where $a$ is some constant.
    (a) Show that the radial magnetic field $B _ { r }$ near the central axis is given by
$$
\begin{equation*}
B _ { r } = - \frac { r } { 2 } \frac { d B _ { z } } { d z } \tag{1}
\end{equation*}
$$

Solution: The magnetic field must obey Gauss' Law. Thus we can construct a cylindrical surface with its axis on the z axis, has height $d z$ and radius r. Given


that the total outgoing flux is 0:
$$
\begin{gathered}
2 \pi r B _ { r } d z + \pi r ^ { 2 } B _ { z } ( z + d z ) - \pi r ^ { 2 } B _ { z } ( z ) = 0 \\
B _ { r } = - \frac { r } { 2 } \frac { d B _ { z } } { d z }
\end{gathered}
$$
(b) By considering the equation of motion for an electron with mass $m$ and charge $- e$ originating far away from the lens with some initial position $\left( r _ { 0 } , \theta _ { 0 } , z _ { 0 } \right)$, show that the angular position of the electron is governed by
$$
\dot { \theta } = \frac { e } { 2 m } B _ { z }
$$
You may assume that the electrons are paraxial ( $r _ { 0 }$ is small) and that the initial speed $v$ of the electron is almost entirely in $z$ direction $\left( v \approx v _ { z } \right)$ at all times.

Solution: The velocity of the electron is given by $( \dot { r } , r \dot { \theta } , \dot { z } )$, so Newton's $2 ^ { n d }$ Law can be written as such:

$$
\begin{aligned}
\vec { F } & = - e \vec { v } \times \vec { B } \\
& = - e \left( \begin{array} { c }
\dot { r } \\
r \dot { \theta } \\
\dot { z }
\end{array} \right) \times \left( \begin{array} { c }
- \frac { r } { 2 } \frac { d B _ { z } } { d z } \\
0 \\
B _ { z }
\end{array} \right)
\end{aligned}
$$

This is equal to $\frac { \mathrm { d } ( m \vec { v } ) } { \mathrm { d } t }$ where $| \vec { v } |$ is constant.Splitting this up in to the relevant components we get:

$$
\begin{aligned}
m \ddot { r } & = - e B _ { z } r \dot { \theta } + m r \dot { \theta } ^ { 2 } \\
\frac { d } { d t } \left( m r ^ { 2 } \dot { \theta } \right) & = e B _ { z } r \dot { r } + e \frac { r ^ { 2 } } { 2 } \dot { z } \frac { d B _ { z } } { d z } \\
& = \frac { d } { d t } \left( \frac { e } { 2 } r ^ { 2 } B _ { z } \right) \\
m \ddot { z } & = e B _ { r } r \dot { \theta } \approx 0
\end{aligned}
$$

From the azimuthal equation we get that:

$$
m r ^ { 2 } \dot { \theta } = \frac { e } { 2 } r ^ { 2 } B _ { z } + C
$$

But since at $z = \infty , B _ { z } = 0$ and $\dot { \theta } = 0$ then $C = 0$. Giving us the final expression for $\dot { \theta }$ :

$$
\dot { \theta } = \frac { e } { 2 m } B _ { z }
$$

(c) From the equation of motion in the radial direction, derive the following equation relating $z$ and $r$ for the trajectory of the particle:
$$
\frac { d ^ { 2 } y } { d x ^ { 2 } } = - \frac { k ^ { 2 } } { \left( 1 + x ^ { 2 } \right) ^ { 2 } } y
$$
where $y = \frac { r } { a } , x = \frac { z } { a }$ and $k$ is to be determined in terms of the electron's initial kinetic energy, $E$, its mass, $m$, and other constants.

Solution: We substitute the expression for $\dot { \theta }$ into the radial equation of motion:

$$
\begin{aligned}
m \ddot { r } & = - e B _ { z } r \frac { e } { 2 m } B _ { z } + m r \left( \frac { e } { 2 m } B _ { z } \right) ^ { 2 } \\
& = - \frac { e ^ { 2 } } { 4 m } B _ { z } ^ { 2 } r
\end{aligned}
$$

Since $v$ is constant and mostly in the $z$ direction we can replace the time derivative with a spatial derivative, $\frac { d } { d t } = v \frac { d } { d z }$. This turns our equation into:

$$
\frac { d ^ { 2 } r } { d z ^ { 2 } } = - \frac { e ^ { 2 } } { 4 m ^ { 2 } v ^ { 2 } } r B _ { z } ^ { 2 }
$$

Using this and the relevant substitutions mentioned in the question our equation becomes:

$$
\frac { d ^ { 2 } y } { d x ^ { 2 } } = - \frac { e ^ { 2 } B _ { 0 } ^ { 2 } a ^ { 2 } } { 16 E ^ { 2 } } \frac { y } { \left( 1 + x ^ { 2 } \right) ^ { 2 } }
$$

Giving us $k = \frac { e B _ { 0 } a } { 4 E }$

(d) The general solution to the equation can be found using the substitutions $x = \frac { z } { a } = \cot ( \phi )$ and $y = \frac { r } { a }$ :
$$
y ( \phi ) = C _ { 1 } \frac { \sin ( \omega \phi ) } { \sin \phi } + C _ { 2 } \frac { \cos ( \omega \phi ) } { \sin \phi } , \quad \text { where } \omega = \sqrt { 1 + k ^ { 2 } }
$$
where $C _ { 1 }$ and $C _ { 2 }$ depend on the initial direction and position of the electron. If a point source of electrons emitting electrons in all directions is at some point $P _ { 0 } \left( y _ { 0 } , \phi _ { 0 } \right)$, determine the $\phi$ values ( $\phi _ { n }$ ) where the emitted electrons converge. Also determine the minimum $k$ such that two images will be formed for any $\phi _ { 0 }$.

Solution: Substituting the initial condition in we can obtain one of the constants:

$$
\begin{aligned}
y _ { 0 } & = C _ { 1 } \frac { \sin \left( \omega \phi _ { 0 } \right) } { \sin \phi _ { 0 } } + C _ { 2 } \frac { \cos \left( \omega \phi _ { 0 } \right) } { \sin \phi _ { 0 } } \\
C _ { 1 } & = \frac { y _ { 0 } \sin \phi _ { 0 } } { \sin \left( \omega \phi _ { 0 } \right) } - C _ { 2 } \frac { \cos \left( \omega \phi _ { 0 } \right) } { \sin \left( \omega \phi _ { 0 } \right) }
\end{aligned}
$$

Giving us the expression for $y ( \phi )$ :

$$
y ( \phi ) = \frac { \sin \left( \omega \phi _ { 0 } \right) \sin \phi _ { 0 } } { \sin \left( \omega \phi _ { 0 } \right) \sin \phi _ { 0 } } y _ { 0 } + \frac { C _ { 2 } } { \sin \phi } \left[ \cos ( \omega \phi ) - \frac { \cos \left( \omega \phi _ { 0 } \right) } { \sin \left( \omega \phi _ { 0 } \right) } \sin ( \omega \phi ) \right]
$$

Because the final $y _ { n }$ of the image are independent of the initial direction of the electrons, the result must be independent of $C _ { 2 }$. Giving:

$$
\cos ( \omega \phi ) - \frac { \cos \left( \omega \phi _ { 0 } \right) } { \sin \left( \omega \phi _ { 0 } \right) } \sin ( \omega \phi ) = 0
$$

Which is equivalent to:

$$
\sin \left( \omega \left( \phi - \phi _ { 0 } \right) \right) = 0
$$

The solutions are $\phi _ { n } = \phi _ { 0 } - n \frac { \pi } { \omega }$. Since $0 < \phi < \pi \Rightarrow \omega \left( \frac { \phi _ { 0 } } { \pi } - 1 \right) < n < \omega \frac { \phi _ { 0 } } { \pi }$
The smallest value such that $n = 2$ is possible is when $\omega \geq 2$ thus $k \geq \sqrt { 3 }$.
