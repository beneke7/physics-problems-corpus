---
id: solution-ocr-inpho-2012-s2
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2012_S2.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
# 2012 INPhO Solutions

Ashmit Dutta

February 27, 2023


#### Abstract

Some years from the Indian Physics Olympiad do not have given solutions. This document serves to provide solutions for the 2012 Indian Physics Olympiad.


## Contents

1 Problem 1 ..... 2
2 Problem 2 ..... 4
3 Problem 3 ..... 5
4 Problem 4 ..... 7
5 Problem 5 ..... 9


## 1 Problem 1

(a) We have by conservation of angular momentum,
$$
I \omega _ { i } + m v r = I \omega _ { i + 1 } - m u r
$$
and
$$
v - u = \left( \omega _ { i } + \omega _ { i + 1 } \right) r .
$$
Also noting that
$$
I = \frac { 4 } { 3 } m r ^ { 2 } + 2 m r ^ { 2 } = \frac { 10 } { 3 } m r ^ { 2 } ,
$$
we can solve these systems together to result in
$$
\omega _ { i + 1 } = \frac { 7 } { 13 } \omega _ { i } + \frac { 6 } { 13 } \frac { v } { r } .
$$
(b) Initially $\omega _ { i }$ increases until it reaches a value $v = \omega ^ { * } r$, i.e. the speed of the falling ball. Thereafter the ball merely "touches" the sphere and does not impart it any momentum. Therefore, the answer is $\omega ^ { * } = v / r$.
(c) The initial angular velocity is $\omega _ { 0 } = 0$ since none of the balls have collided yet. The recursion then follows an Arithmetico-Geometric sequence which tells us that $\omega _ { i }$ would take the form of
$$
\omega _ { i } = \frac { v } { r } \left( 1 - \left( \frac { 7 } { 13 } \right) ^ { i } \right)
$$
where $i = 0,1,2,3 , \ldots$

Note: The arithmetico-geometric series takes a recursive form of

$$
a _ { n + 1 } = p \cdot a _ { n } + q .
$$

Let us consider a few examples:

$$
\begin{aligned}
& a _ { 0 } = A \\
& a _ { 1 } = p A + q \\
& a _ { 2 } = p ( p A + q ) + q = p ^ { 2 } A + ( p + 1 ) q \\
& a _ { 3 } = p \left( p ^ { 2 } A + ( p + 1 ) q \right) + q = p ^ { 3 } A + \left( p ^ { 2 } + p + 1 \right) q \\
& . \\
& .
\end{aligned}
$$

We see that this arithmetico-geometric series then can take the form for $a _ { i }$ as

$$
a _ { i } = p ^ { i } A + q \sum _ { k = 0 } ^ { i - 1 } p ^ { k } .
$$

Using the formula for a partial sum of a geometric series, we find that

$$
a _ { i } = p ^ { i } A + q \frac { 1 - p ^ { i } } { 1 - p } .
$$


In the case of our arithmetico-geometric series, we have the recursive function to be

$$
\omega _ { i + 1 } = \frac { 7 } { 13 } \omega _ { i } + \frac { 6 } { 13 } \frac { v } { r }
$$

with $A = 0$. Substituting in values to this equation we found gives us

$$
\omega _ { i } = \frac { v } { r } \left( 1 - \left( \frac { 7 } { 13 } \right) ^ { i } \right)
$$

where $i = 0,1,2,3 , \ldots$

(d) By the same reasoning as part (b), we find that the system will assume a constant angular velocity of $\omega ^ { * } = \frac { v } { r }$.


## 2 Problem 2

(a) We use the mirror equation
$$
\frac { 1 } { f } = \frac { 1 } { d _ { 0 } } + \frac { 1 } { d _ { i } } .
$$
Let the radius of curvature of the convex mirror be $R$. The relationship between the radius of curvature $R$ and the focal length is $f = R / 2$. Note that $d _ { 0 } = - x$ (since $x$ is behind car A) and $y = d _ { i }$. Using the mirror equation, we have that
$$
\frac { 2 } { R } = - \frac { 1 } { x } + \frac { 1 } { y } \Longrightarrow \frac { 1 } { y } = \frac { 2 } { R } + \frac { 1 } { x } \Longrightarrow y = \frac { x R } { 2 x + R } .
$$
Since $v _ { y } = \frac { \mathrm { d } y } { \mathrm {~d} t }$, we can write that
$$
\frac { \mathrm { d } y } { \mathrm {~d} t } = \frac { \mathrm { d } } { \mathrm {~d} x } \left( \frac { x R } { 2 x + R } \right) \cdot \frac { \mathrm { d } x } { \mathrm {~d} t } .
$$
Using quotient rule, we find that
$$
v _ { y } = \frac { R ^ { 2 } } { ( 2 x + R ) ^ { 2 } } v _ { x } .
$$
(b) https://www.desmos.com/calculator/zuu3p08rck
Let us rearrange the equation from part (a) to get
$$
\frac { v _ { y } } { v _ { x } } = \frac { R ^ { 2 } } { ( 2 x + R ) ^ { 2 } } .
$$
Let us examine the extreme cases. When $x = 0$, we have that
$$
\frac { v _ { y } } { v _ { x } } = \frac { R ^ { 2 } } { ( 2 \cdot 0 + R ) ^ { 2 } } = 1 .
$$
When $x \rightarrow \infty$, we have that
$$
\lim _ { x \rightarrow \infty } \frac { v _ { y } } { v _ { x } } = 0 .
$$
We can now combine these two together by noting that the graph won't be linear but rather curved.
(c) Plugging in numbers gives us $v _ { y } = 2.22 \mathrm {~km} / \mathrm { h }$.


## 3 Problem 3

(a) The force of gravity on a slab of air of thickness $d y$ will be $\rho g S \mathrm {~d} y$ where $S$ is the cross-sectional area of the slab. This must be equal to $S d P$ which is the opposing force of gravity. This gives us the equation
$$
S \mathrm {~d} p = - \rho g S \mathrm {~d} y \Longrightarrow \mathrm {~d} p = - \rho g \mathrm {~d} y .
$$
From the ideal gas law, we have:
$$
p V = n R T \Longrightarrow p m _ { a } = \rho R T \Longrightarrow \rho = \frac { m _ { a } p } { R T } .
$$
Also, since it is assumed that the atmosphere is adiabatic, we have that
$$
p T ^ { \frac { \gamma } { 1 - \gamma } } = \text { const. }
$$
Solving these equations together gives us
$$
\Gamma = \frac { \mathrm { d } T } { \mathrm {~d} h } = \frac { m _ { a } g } { R } \frac { ( \gamma - 1 ) } { \gamma } .
$$
(b) Substituting values given that
$$
\Gamma = \frac { \Delta T } { \Delta h } = \frac { m _ { a } g } { R } \frac { ( \gamma - 1 ) } { \gamma }
$$
with using $m _ { a } = 29.0 \mathrm {~kg} / \mathrm { mol }$ gives us $\Gamma = 10 \mathrm {~K} \cdot \mathrm {~km} ^ { - 1 }$.
(c) The temperature of the adiabatic atmosphere decreases with altitude by
$$
T ( z ) = T _ { 0 } - \frac { m _ { a } g } { R } \frac { ( \gamma - 1 ) } { \gamma } z = T _ { 0 } - \Gamma z .
$$
Since it is assumed that the atmosphere is adiabatic, we have that
$$
p T ^ { \frac { \gamma } { 1 - \gamma } } = \text { const. }
$$
Therefore by substituting, we have that
$$
p = p _ { 0 } \left( \frac { T _ { 0 } } { T _ { z } } \right) ^ { \frac { \gamma } { \gamma - 1 } } = p _ { 0 } \left( \frac { T _ { 0 } } { T _ { 0 } - \Gamma z } \right) ^ { \frac { \gamma } { \gamma - 1 } } = p _ { 0 } \left( \frac { T _ { 0 } - \Gamma z } { T _ { 0 } } \right) ^ { \frac { \gamma - 1 } { \gamma } } .
$$
Therefore, we have that $\alpha = \frac { \gamma - 1 } { \gamma }$.
(d) Substituting values will give 30 km.
(e) Since we are assuming $v _ { 2 } \gg v _ { 1 }$, we then have the equation
$$
\frac { \mathrm { d } p _ { s } } { \mathrm {~d} T } = \frac { L } { T v _ { 2 } } = p _ { s } \frac { L m _ { a } } { R T ^ { 2 } } .
$$
Separating variables gives us
$$
\frac { 1 } { p _ { s } } \mathrm {~d} p _ { s } = \frac { L m _ { v } } { R T ^ { 2 } } \mathrm {~d} T .
$$

Integrating this gives us

$$
\int _ { p _ { s _ { 1 } } } ^ { p _ { s _ { 2 } } } \frac { \mathrm {~d} p _ { s } } { p _ { s } } = \int _ { T _ { 1 } } ^ { T _ { 2 } } L \mu \frac { \mathrm {~d} T } { R T ^ { 2 } } \Longrightarrow \ln \frac { p _ { s _ { 2 } } } { p _ { s _ { 1 } } } = \frac { L m _ { v } } { R } \left( \frac { 1 } { T _ { 1 } } - \frac { 1 } { T _ { 2 } } \right) .
$$

Simplifying this result finally gives us

$$
p _ { s _ { 2 } } = p _ { s _ { 1 } } \exp \left[ \frac { L m _ { v } } { R } \left( \frac { 1 } { T _ { 1 } } - \frac { 1 } { T _ { 2 } } \right) \right] .
$$

where $p _ { s _ { 1 } }$ and $T _ { 1 }$ are the initial points of integration. A convenient choice would be the triple point of water.

(f) At $z _ { c }$, the atmospheric pressure should be equal to saturation pressure. Therefore, the condition is
$$
p _ { 0 } \left( \frac { T _ { 0 } - \Gamma z } { T _ { 0 } } \right) ^ { \frac { \gamma } { \gamma - 1 } } = p _ { s _ { 1 } } \exp \left[ \frac { L m _ { v } } { R } \left( \frac { 1 } { T _ { 1 } } - \frac { 1 } { T - \Gamma z _ { c } } \right) \right] .
$$


## 4 Problem 4

(a) By Ampere's Law, we have that the magnetic field anywhere inside the solenoid will be
$$
B l = \mu N I \Longrightarrow B = \frac { \mu N I } { l } .
$$
The magnetic field anywhere outside will be zero. Substituting values gives us the magnetic field inside the solenoid to be $1.26 \times 10 ^ { - 2 } \mathrm {~T}$.
(b) The magnetic flux is given as
$$
\Phi = B A = \frac { \mu N I A } { l } .
$$
The electric field of the solenoid is then given as
$$
E = - \frac { \mathrm { d } \Phi } { \mathrm {~d} t } = - N \frac { \mathrm {~d} } { \mathrm {~d} t } \Phi = - \frac { \mathrm { d } } { \mathrm {~d} t } \left( \frac { \mu N ^ { 2 } I A } { l } \right) = \frac { \mu N ^ { 2 } I A } { l } \frac { \mathrm {~d} I } { \mathrm {~d} t } .
$$
The electric field is also given as
$$
E = - L \frac { \mathrm {~d} I } { \mathrm {~d} t } \Longrightarrow L = \frac { \mu N ^ { 2 } I A } { l } = \frac { \mu N ^ { 2 } \pi r ^ { 2 } } { I } .
$$
(c) The energy in a solenoid is given by
$$
U = \frac { B ^ { 2 } } { 2 \mu _ { 0 } } A l .
$$
Substituting values gives us 3.95 J.
(d) Suppose the circuit intially has 0 emf and has an initial current $I _ { 0 }$. According to Kirchoff's laws,
$$
R I + L \frac { \mathrm {~d} I } { \mathrm {~d} t } = 0 .
$$
Hence,
$$
\frac { \mathrm { d } I } { I } = - \frac { R \mathrm {~d} t } { L } \Longrightarrow \ln I - \ln I _ { 0 } = - \frac { R t } { L } \Longrightarrow I = I _ { 0 } e ^ { - R t / L } .
$$
Now, when the emf is turned on, we have by Kirchoff's laws:
$$
R I + L \frac { \mathrm {~d} I } { \mathrm {~d} t } = e .
$$
By separating variables, we obtain
$$
\frac { \mathrm { d } I } { I - e / R } = - \frac { R \mathrm {~d} t } { L } \Longrightarrow I = \frac { e } { R } \left( 1 - e ^ { - R t / L } \right) .
$$
Superimposing both solutions yields
$$
I ( t ) = I _ { 0 } e ^ { - R t / L } + \frac { e } { R } \left( 1 - e ^ { - R t / L } \right) .
$$

(e) The length of the solenoid increases as $l ( t ) = l + v t$. Hence, the inductance changes as $L = \mu _ { 0 } N ^ { 2 } \pi r ^ { 2 } / ( l + v t )$. As the inductance is decreasing, the current must increase when it is stretching which adds energy to the system. The induced emf from this can be represented as the negative derivative of flux, or
$$
\varepsilon = - \frac { \mathrm { d } } { \mathrm {~d} t } \Phi = - \frac { \mathrm { d } } { \mathrm {~d} t } L I .
$$
Hence, this means
$$
e = I R + \frac { \mathrm { d } } { \mathrm {~d} t } L I = I R + \frac { \mathrm { d } L } { \mathrm {~d} t } I + I \frac { \mathrm {~d} L } { \mathrm {~d} t } .
$$
The change in inductance can be written as
$$
\frac { \mathrm { d } L } { \mathrm {~d} t } = \frac { \mathrm { d } } { \mathrm {~d} t } \mu _ { 0 } \frac { N ^ { 2 } } { l } A = - \mu _ { 0 } \frac { N ^ { 2 } } { l ^ { 2 } } A \frac { \mathrm {~d} l } { \mathrm {~d} t } = - \frac { L } { l } \frac { \mathrm {~d} L } { \mathrm {~d} t } = - \frac { L v } { l + v t } .
$$
Therefore, Kirchoff's laws yield
$$
e = I R + L \frac { \mathrm {~d} I } { \mathrm {~d} t } + I \frac { L v } { l + v t } .
$$
(f) The magnetic field in the solenoid is given as
$$
B = \mu _ { 0 } N I = \mu _ { 0 } N I _ { 0 } \cos ( \omega t ) .
$$
The magnetic flux to a circle of radius $\rho < R$ is then
$$
\Phi = B A = \mu _ { 0 } N I _ { 0 } \cos ( \omega t ) \pi \rho ^ { 2 } .
$$
The induced electric field can then be given by Faraday's law:
$$
\oint \vec { E } \cdot \mathrm {~d} \vec { \ell } = \frac { \mathrm { d } \Phi } { \mathrm {~d} t }
$$
Therefore, this means
$$
E ( 2 \pi \rho l ) = \frac { \mathrm { d } } { \mathrm {~d} t } \mu _ { 0 } N I _ { 0 } \cos ( \omega t ) \pi \rho ^ { 2 } = \mu _ { 0 } N I _ { 0 } \pi \rho ^ { 2 } \omega \sin ( \omega t ) .
$$
Therefore, this gives
$$
E ( \rho < R ) = \frac { \mu _ { 0 } N I _ { 0 } \omega \rho } { 2 l } \sin ( \omega t ) .
$$
For $\rho > R$, we can repeat the same steps, but for the magnetic flux to be confined to a circle of radius $R$. This will give
$$
E ( \rho > R ) = \frac { \mu _ { 0 } N I _ { 0 } \omega R ^ { 2 } } { 2 \rho l } \sin ( \omega t ) .
$$
(e) Just plot it with the equations of the electric field. Refer to the graphs in the answer key.


## 5 Problem 5

(a) Since $\hbar \omega _ { 0 } < E _ { b }$, no ionization is possible.

(b) Note that
$$
F = E q \Longrightarrow F = - E e = - F \cos \omega t \cdot e .
$$
Dividing by the mass of the electron $m$ gives us
$$
a = - \frac { F \cos \omega t \cdot e } { m } \Longrightarrow v = \int a d t = - \frac { F _ { 0 } \sin \omega t \cdot e } { m \omega } .
$$
(c) The average kinetic energy is given by
$$
\frac { 1 } { 2 } m \left\langle v ^ { 2 } \right\rangle = \frac { 1 } { 2 } m \left\langle \frac { F _ { 0 } ^ { 2 } \sin ^ { 2 } \omega t \cdot e ^ { 2 } } { m ^ { 2 } \omega ^ { 2 } } \right\rangle = \frac { 1 } { 4 } \frac { F _ { 0 } ^ { 2 } e ^ { 2 } } { m \omega ^ { 2 } }
$$
since the average of $\sin ^ { 2 } \omega t = \frac { 1 } { 2 }$.
(d) We require the condition that $\mathrm { KE } > E _ { b }$, so this implies that
$$
\begin{equation*}
F _ { 0 } > \sqrt { E _ { b } m } \frac { 2 \omega } { e } > 1.5 \cdot 10 ^ { 3 } \mathrm {~N} / \mathrm { C } . \tag{1}
\end{equation*}
$$
(e) Note that the electric field does work when the electron is a distance $z$ away from the rest point. Therefore, the total potential energy is given by
$$
U = U _ { \text {coloumb } } + W _ { \text {electric field } } = - \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } z } - F _ { \text {electric field } z } = - \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } z } + e F _ { 0 } z
$$
where $e$ is negative.
(f) Use the graph given in the answer key. Just note that it will have a vertical asymptote at $z = 0$ because of the $\frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } z }$ term and also, the potential energy will be 0 when $z = 0.22$ by setting the expression in e to zero.
(g) As we have
$$
\begin{equation*}
E = e F _ { 0 } z + \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } z } , \tag{2}
\end{equation*}
$$
we want to find the $z$ when $E$ asymptotes as that is when the electron will ionize. Hence, taking the derivative, we find
$$
\begin{equation*}
\frac { \mathrm { d } E } { \mathrm {~d} z } = 0 \Longrightarrow e F _ { 0 } - \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } z ^ { 2 } } \Longrightarrow z = \sqrt { \frac { e } { 4 \pi \varepsilon _ { 0 } F _ { 0 } } } . \tag{3}
\end{equation*}
$$
Plugging $z$ back into $E$ tells us that
$$
\begin{equation*}
E = \sqrt { \frac { e ^ { 3 } F _ { 0 } } { \pi _ { 0 } } } \Longrightarrow F _ { 0 } = \frac { E ^ { 2 } \pi \varepsilon _ { 0 } } { e ^ { 3 } } = 174 \mathrm {~N} / \mathrm { C } \tag{4}
\end{equation*}
$$
which is physically possible.
