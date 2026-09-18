---
id: solution-ocr-apho-2005-t-s-q2
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2005_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2005-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question 2 magnetic focusing

There exist many devices that utilize fine beams of charged particles. The cathode ray tube used in oscilloscopes, in television receivers or in electron microscopes. In these devices the particle beam is focused and deflected in much the same manner as a light beam is in an optical instrument.

Beams of particles can be focused by electric fields or by magnetic fields. In problem 2A and 2B we are going to see how the beam can be focused by a magnetic field.

## 2A. MAGNETIC FOCUSING SOLENOID (4 points)

Figure 2.1 shows an electron gun situated inside (near the middle) a long solenoid. The electrons emerging from the hole on the anode have a small transverse velocity component. The electron will follow a helical path. After one complete turn, the electron will return to the axis connecting the hole and point F . By adjusting the magnetic field $B$ inside the solenoid correctly, all the electrons will converge at the same point F after one complete turn. Use the following data:

- The voltage difference that accelerates the electrons $V = 10 \mathrm { kV }$
- The distance between the anode and the focus point $\mathrm { F } , L = 0.50 \mathrm {~m}$
- The mass of an electron $m = 9.11 \times 10 ^ { - 31 } \mathrm {~kg}$
- The charge of an electron $e = 1.60 \times 10 ^ { - 19 } \mathrm { C }$
- $\mu _ { 0 } = 4 \pi \times 10 ^ { - 7 } \mathrm { H } / \mathrm { m }$
- Treat the problem non-relativistically
a) Calculate $B$ so that the electron returns to the axis at point F after one complete turn. (3 points)
b) Find the current in the solenoid if the latter has 500 turns per meter. (1 point)

![](../../../figures/solution-ocr/ac03876a48c8ea2948a4b4ca.jpg)
Figure 2.1


SOLUTION
a) In magnetic field, the particle will be deflected and follow a helical path.

Lorentz Force in a magnetic field $B$,

$$
\begin{equation*}
\frac { m v _ { \perp } ^ { 2 } } { R } = e v _ { \perp } B \tag{1}
\end{equation*}
$$

Where $v _ { \perp }$ is the transverse velocity of the electron, $R$ is the radius of the path.
Since $v _ { \perp } = \omega R \left( \omega = \frac { 2 \pi } { T } \right.$ is the particle angular velocity and $T$ is the period), then,

$$
\begin{equation*}
m \frac { 2 \pi } { T } = e B \tag{2}
\end{equation*}
$$

To be focused, the period of electron $T$ must be equal to $\frac { L } { v _ { l l } }$, where $v _ { l l }$ is the parallel component of the velocity.

We also know,

$$
\begin{equation*}
e V = \frac { 1 } { 2 } m \left( v _ { \perp } ^ { 2 } + v _ { l l } ^ { 2 } \right) \approx \frac { 1 } { 2 } m v _ { l l } ^ { 2 } \tag{3}
\end{equation*}
$$

All the information above leads to

$$
\begin{equation*}
B = 2 ^ { 3 / 2 } \pi \frac { ( m V / e ) ^ { 1 / 2 } } { L } \tag{4}
\end{equation*}
$$

Numerically

$$
B = 4.24 \mathrm { mT }
$$

b) The magnetic field of the Solenoid:

$$
\begin{align*}
& B = \mu _ { 0 } i n  \tag{5}\\
& i = \frac { B } { n \mu _ { 0 } } \tag{6}
\end{align*}
$$

Numerically

$$
i = 6.75 \mathrm {~A} .
$$


THEORETICAL COMPETITION

Questions and Solutions
FINAL VERSION
[Marking Scheme] THEORETICAL Question 2A
Magnetic Focusing Solenoid

| a. (3.0) | 0.3 | Lorentz force $\quad \frac { m v _ { \perp } ^ { 2 } } { R } = e v _ { \perp } B$ |
| :--- | :--- | :--- |
|  | 0.1 | Transverse velocity $v _ { \perp } = \omega R$ |
|  | 0.1 | $\omega = \frac { 2 \pi } { T }$ |
|  | 0.3 | Equation $\quad m \frac { 2 \pi } { T } = e B$ |
|  | 0.2 | Equation $T = \frac { L } { v _ { l l } }$ |
|  | 0.5 | Conservation energy $e V = \frac { 1 } { 2 } m \left( v _ { \perp } ^ { 2 } + v _ { l l } ^ { 2 } \right) \approx \frac { 1 } { 2 } m v _ { l l } ^ { 2 }$ |
|  | 1.0 | Formula $B = 2 ^ { \frac { 3 } { 2 } } \pi \frac { ( m V / e ) ^ { 1 / 2 } } { L }$ |
|  | 0.5 | Numerical value $B = 4.23 \mathrm { mT }$ |
| b. (1.0) | 0.5 | $B = \mu _ { 0 } i n$ |
|  | 0.3 | $i = \frac { B } { n \mu _ { 0 } }$ |
|  | 0.2 | $i = 6.75 \mathrm {~A}$. |

Note: Propagation errors will not be considered.


## 2B. MAGNETIC FOCUSING (FRINGING FIELD) (6 points)

Two pole magnets positioned on horizontal planes are separated by a certain distance such that the magnetic field between them be $B$ in vertical direction (see Figure 2.2). The poles faces are rectangular with length $l$ and width $w$. Consider the fringe field near the edges of the poles (fringe field is field particularly associated to the edge effects). Suppose the extent of the fringe field is $b$ (see Fig. 2.3). The fringe field has two components $B _ { x } \mathbf { i }$ and $B _ { z } \mathbf { k }$. For simplicity assume that $\left| B _ { x } \right| = B | z | / b$ where $z = 0$ is the mid plane of the gap, explicitly:

- when the particle enters the fringe field $B _ { x } = + B z / b$,
- when the particle enters the fringe field after traveling through the magnet, $B _ { x } = - B z / b$

![](../../../figures/solution-ocr/fd3df6134a508efcb0a02ae9.jpg)
Fig.2.2: Overall view (note that $\theta$ is very small).


![](../../../figures/solution-ocr/29e65f2a41612f61ae36586c.jpg)
Figure 2.3. Fringe field

A parallel narrow beam of particles, each of mass $m$ and positive charge $q$ enters the magnet (near the center) with a high velocity $v$ parallel to the horizontal plane. The vertical size of the beam is comparable to the distance between the magnet poles. A certain beam enters the magnet at an angle $\theta$ from the center line of the magnet and leaves the magnet at an angle $- \theta$ (see Figure 2.4. Assume $\theta$ is very small). Assume that the angle $\theta$ with which the particle enters the fringe field is the same as the angle $\theta$ when it enters the uniform field.

![](../../../figures/solution-ocr/6c4eceab9760690f9f4b1153.jpg)
Figure 2.4. Top view


The beam will be focused due to the fringe field. Calculate the approximate focal length if we define the focal length as illustrated in Figure 2.5 (assume $b \ll l$ and assume that the $z$-component of the deflection in the uniform magnetic field $B$ is very small).

![](../../../figures/solution-ocr/1d8765ae51b1dee802ce5750.jpg)
Figure 2.5. Side view

Solution:
The magnetic force due to the fringe field on charge $q$ with velocity $v$ is

$$
\begin{equation*}
\vec { F } = q \vec { v } \times \vec { B } \tag{1}
\end{equation*}
$$

The $z$-component of the force obtained from the cross product is

$$
\begin{equation*}
F _ { z } = q \left( v _ { x } B _ { y } - v _ { y } B _ { x } \right) = - q v _ { y } B _ { x } = - \frac { q v \sin \theta B z } { b } \tag{2}
\end{equation*}
$$

The vertical momentum gained by the particle after entering the fringe field

$$
\begin{equation*}
\Delta P _ { z } = \int F _ { z } d t = - \frac { q v B z \sin \theta } { b } \Delta t = - \frac { q v B z \sin \theta } { b } \frac { b } { v \cos \theta } = - q B z \tan \theta \tag{3}
\end{equation*}
$$

The particle undergoes a circular motion in the constant magnetic field B region

$$
\begin{array} { r }
m \frac { v ^ { 2 } } { R } = q v B \\
v = \frac { q B R } { m } = \frac { q B l } { 2 m \sin \theta } \tag{5}
\end{array}
$$

Therefore,

$$
\begin{equation*}
\sin \theta = \frac { q B l } { 2 m v } \tag{6}
\end{equation*}
$$


After the particle exits the fringe field at the other end, it will gain the same momentum.

The total vertical momentum gained by the particle is

$$
\begin{equation*}
\left( \Delta P _ { z } \right) _ { \text {total } } = 2 \Delta P _ { z } = - 2 q B z \tan \theta \approx - 2 q B z \frac { q B l } { 2 m v } = - \frac { q ^ { 2 } B ^ { 2 } z l } { m v } \tag{7}
\end{equation*}
$$

Note that for small $\theta$, we can approximate $\tan \theta \approx \sin \theta$
Meanwhile, the momentum along the horizontal plane ( $x y$-plane) is

$$
\begin{equation*}
p = m v \tag{8}
\end{equation*}
$$

From the geometry in figure 4, we can get the focal length by the following relation,

$$
\begin{equation*}
\frac { \left| \Delta P _ { z } \right| } { p } = \frac { | Z | } { f } \tag{9}
\end{equation*}
$$

$$
\begin{equation*}
f = \frac { m ^ { 2 } v ^ { 2 } } { q ^ { 2 } B ^ { 2 } l } \tag{10}
\end{equation*}
$$


THEORETICAL COMPETITION
[Marking Scheme]

## THEORETICAL Question 2B

Magnetic Focusing (Fringing Field)

| (6.0) | 0.25 | Lorentz force $\vec { F } = q \vec { v } \times \vec { B }$ |
| :--- | :--- | :--- |
|  | 0.25 | $z$-component $F _ { z } = q \left( v _ { x } B _ { y } - v _ { y } B _ { x } \right)$ |
|  | 0.25 | $z$-component $F _ { z } = - q v _ { y } B _ { x } = - \frac { q v \sin \theta B z } { b }$ |
|  | 0.5 | $z$-component gained momentum $\Delta P _ { z } = \int F _ { z } d t$ |
|  | 0.75 | $\Delta P _ { z } = - q B z \tan \theta$ |
|  | 0.5 | Equation $m \frac { v ^ { 2 } } { R } = q v B$ |
|  | 0.25 | $\sin \theta = \frac { q B l } { 2 m v }$ |
|  | 0.5 | $\left( \Delta P _ { z } \right) _ { \text {total } } = 2 \Delta P _ { z }$ (factor of 2) |
|  | 0.25 | $\left( \Delta P _ { z } \right) _ { \text {total } } = - \frac { q ^ { 2 } B ^ { 2 } z l } { m v }$ |
|  | 0.5 | Horizontal momentum $p = m v$ |
|  | 1.0 | Equation $\frac { \left\| \Delta P _ { z } \right\| _ { \text {total } } } { p } = \frac { \| Z \| } { f }$ |
|  | 1.0 | $f = \frac { m ^ { 2 } v ^ { 2 } } { q ^ { 2 } B ^ { 2 } l }$ |

Note: No propagation error will be considered here.
