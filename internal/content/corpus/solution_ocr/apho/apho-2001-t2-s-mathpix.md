---
id: solution-ocr-apho-2001-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2001/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2001-t2]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
[Solution] Theoretical Question 2

## Motion of an Electric Dipole in a Magnetic Field

(1) Conservation Laws


(1a) $\quad \vec { r } _ { C M } = \frac { 1 } { 2 } \left( \vec { r } _ { 1 } + \vec { r } _ { 2 } \right) , \quad \vec { v } _ { C M } = \frac { 1 } { 2 } \left( \vec { v } _ { 1 } + \vec { v } _ { 2 } \right) , \quad \vec { \ell } = \vec { r } _ { 1 } - \vec { r } _ { 2 } , \quad \vec { u } = \dot { \vec { \ell } } = \vec { v } _ { 1 } - \vec { v } _ { 2 }$
Total force $\vec { F }$ on the dipole is
$$
\begin{aligned}
\vec { F } & = \vec { F } _ { 1 } + \vec { F } _ { 2 } = q \left( \vec { E } + \vec { v } _ { 1 } \times \vec { B } \right) + ( - q ) \left( \vec { E } + \vec { v } _ { 2 } \times \vec { B } \right) = q \left( \vec { v } _ { 1 } - \vec { v } _ { 2 } \right) \times \vec { B } \\
& = q \dot { \vec { \ell } } \times \vec { B }
\end{aligned}
$$
so that
$$
\begin{equation*}
M \dot { \vec { v } } _ { C M } = q \dot { \vec { \ell } } \times \vec { B } \quad ( M = 2 m ) \tag{1}
\end{equation*}
$$
Computing the torque for rotation around the center of mass, we obtain
$$
\begin{align*}
I \dot { \vec { \omega } } & = \left( \frac { \vec { \ell } } { 2 } \right) \times \left( q \vec { v } _ { 1 } \times \vec { B } \right) + \left( \frac { - \vec { \ell } } { 2 } \right) \times \left( - q \vec { v } _ { 2 } \times \vec { B } \right)  \tag{2}\\
& = q \vec { \ell } \times \left( \vec { v } _ { C M } \times \vec { B } \right)
\end{align*}
$$
where
$$
\begin{equation*}
I = \frac { 1 } { 2 } m \ell ^ { 2 } \tag{3}
\end{equation*}
$$
(1b) From eq.(1), we obtain the conservation law for the momentum:
$$
\begin{equation*}
\dot { \vec { P } } = 0 , \quad \vec { P } = M \vec { v } _ { C M } - q \vec { \ell } \times \vec { B } \tag{4}
\end{equation*}
$$
From eq.(1) and eq.(2), one obtains the conservation law for the energy.
$$
\begin{equation*}
\dot { E } = 0 , \quad E = \frac { 1 } { 2 } M v _ { C M } ^ { 2 } + \frac { 1 } { 2 } I \omega ^ { 2 } \tag{5}
\end{equation*}
$$
(1c) Using eq.(4) and eq.(2),
$$
\begin{aligned}
\frac { d } { d t } \left( \vec { r } _ { C M } \times \vec { P } \right) \cdot \hat { B } & = \left( \vec { v } _ { C M } \times \vec { P } \right) \cdot \hat { B } = - q \vec { v } _ { C M } \times ( \vec { \ell } \times \vec { B } ) \cdot \hat { B } \\
& = q ( \vec { \ell } \times \vec { B } ) \times \vec { v } _ { C M } \cdot \hat { B } = q ( \vec { \ell } \times \vec { B } ) \cdot \left( \vec { v } _ { C M } \times \hat { B } \right) \\
& = q \vec { \ell } \cdot \left( \vec { B } \times \left( \vec { v } _ { C M } \times \hat { B } \right) \right) = - q \vec { \ell } \cdot \left( \left( \vec { v } _ { C M } \times \vec { B } \right) \times \hat { B } \right) \\
& = - q \vec { \ell } \times \left( \vec { v } _ { C M } \times \vec { B } \right) \cdot \hat { B } \\
& = - I \dot { \vec { \omega } } \cdot \hat { B }
\end{aligned}
$$


## [Solution] (continued) Theoretical Question 2 Motion of an Electric Dipole in a Magnetic Field

we obtain the conservation law

$$
\begin{equation*}
\dot { J } = 0 \quad J = \left( \vec { r } _ { C M } \times \vec { P } + I \vec { \omega } \right) \cdot \hat { B } \tag{6}
\end{equation*}
$$

for the component of the angular momentum along the direction of $\vec { B }$.
(2) Motion in a Plane Perpendicular to $\overrightarrow { \boldsymbol { B } }$
(2a) Write

$$
\begin{equation*}
\vec { \ell } = \ell \{ \cos \varphi ( t ) \hat { x } + \sin \varphi ( t ) \hat { y } \} , \quad \varphi ( 0 ) = 0 , \dot { \varphi } ( 0 ) = \omega _ { 0 } \tag{7}
\end{equation*}
$$

Note that

$$
\begin{equation*}
\vec { \omega } = \dot { \varphi } \hat { z } \tag{8}
\end{equation*}
$$

From eq.(4), we have

$$
\begin{equation*}
M \vec { v } _ { C M } = \vec { P } + q \ell B ( \sin \varphi \hat { x } - \cos \varphi \hat { y } ) \tag{9}
\end{equation*}
$$

At $t = 0$, we have $v _ { C M } = 0 , \quad \varphi = 0$ so that

$$
\begin{equation*}
\vec { P } = q \ell B \hat { y } \tag{10}
\end{equation*}
$$

Hence from eqs.(9) and (10) we have

$$
\begin{equation*}
\dot { x } _ { C M } = \left( \frac { q \ell B } { M } \right) \sin \varphi , \quad \dot { y } _ { C M } = \left( \frac { q \ell B } { M } \right) ( 1 - \cos \varphi ) \tag{11}
\end{equation*}
$$

From conservation of energy, i.e. Eq.(5), we have

$$
\begin{align*}
& \frac { 1 } { 2 } I \dot { \varphi } ^ { 2 } + \frac { ( q \ell B ) ^ { 2 } } { M } ( 1 - \cos \varphi ) = \frac { 1 } { 2 } I \omega _ { 0 } ^ { 2 } \\
\therefore \quad & \dot { \varphi } ^ { 2 } + \frac { 1 } { 2 } \omega _ { c } ^ { 2 } ( 1 - \cos \varphi ) = \omega _ { 0 } ^ { 2 } \tag{12}
\end{align*}
$$

where

$$
\begin{equation*}
\omega _ { c } ^ { 2 } = \frac { 4 ( q \ell B ) ^ { 2 } } { M I } = \left( \frac { 2 q B } { m } \right) ^ { 2 } \tag{13}
\end{equation*}
$$

In order to make a full turn, $\dot { \varphi }$ can not become zero so that


[Solution] (continued) Theoretical Question 2

## Motion of an Electric Dipole in a Magnetic Field

$$
\begin{equation*}
\omega _ { 0 } ^ { 2 } > \omega _ { c } ^ { 2 } \Rightarrow \left| \omega _ { 0 } \right| > \omega _ { c } = \frac { 2 q B } { m } \tag{14}
\end{equation*}
$$

(2b) From Eq.(6), we have

$$
\begin{equation*}
x _ { C M } P + I \omega = J \tag{15}
\end{equation*}
$$

where $P$ is the magnitude of $\vec { P }$.
At $\quad t = 0$, we have $J = I \omega _ { 0 }$ so that

$$
\begin{equation*}
x _ { C M } P + I \omega = I \omega _ { 0 } \tag{16}
\end{equation*}
$$

From eq.(12), one can see that $\omega _ { 0 } ^ { 2 } \geq \omega ^ { 2 }$ so that $x _ { C M } \geq 0$. Thus $x _ { C M }$ reaches a maximum $d _ { m }$ when $\omega$ takes its minimum value.

When $\omega _ { 0 } < \omega _ { c }$, the minimum value of $\omega$ is $- \omega _ { 0 }$ so that

$$
\begin{equation*}
d _ { m } = \frac { 2 I } { P } \omega _ { 0 } = \left( \frac { m \omega _ { 0 } } { q B } \right) \ell , \quad \omega _ { 0 } < \omega _ { c } \tag{17}
\end{equation*}
$$

When $\omega _ { 0 } > \omega _ { c }$, the minimum value of $\omega$ is $\sqrt { \omega _ { 0 } ^ { 2 } - \omega _ { c } ^ { 2 } }$ so that

$$
\begin{equation*}
d _ { m } = \left( \frac { I } { P } \right) \left( \omega _ { 0 } - \sqrt { \omega _ { 0 } ^ { 2 } - \omega _ { c } ^ { 2 } } \right) = \frac { m } { 2 q B } \left( \omega _ { 0 } - \sqrt { \omega _ { 0 } ^ { 2 } - \omega _ { c } ^ { 2 } } , \ell , \quad \omega _ { 0 } > \omega _ { c } \right. \tag{18}
\end{equation*}
$$

When $\omega _ { 0 } = \omega _ { c } , \omega ^ { 2 } = \frac { 1 } { 2 } \omega _ { c } ^ { 2 } ( 1 + \cos \varphi ) = \omega _ { c } ^ { 2 } \cos ^ { 2 } \frac { \phi } { 2 }$

$$
\therefore \quad \dot { \varphi } = \omega _ { c } \cos \frac { \phi } { 2 }
$$

When $\varphi$ is close to $\pi$, let $\varphi = \pi - 2 \varepsilon$ then

$$
\begin{aligned}
& \dot { \varepsilon } = - \frac { 1 } { 2 } \omega _ { c } \sin \varepsilon \approx - \frac { 1 } { 2 } \omega _ { c } \varepsilon \\
\therefore & \varepsilon \sim e ^ { - \omega _ { c } t / 2 }
\end{aligned}
$$

so that it will take $t \rightarrow \infty$ for $\varepsilon \rightarrow 0$, i.e. for $\varphi$ to reach $\pi$. Hence

$$
\begin{equation*}
d _ { m } = \left( \frac { I } { P } \right) \omega _ { c } = \left( \frac { m \omega _ { c } } { 2 q B } \right) \ell , \omega _ { 0 } = \omega _ { c } \tag{19}
\end{equation*}
$$

(2c) Tension on the rod comes from three sources:


[Solution] (continued) Theoretical Question 2

## Motion of an Electric Dipole in a Magnetic Field

(i) Coulomb force $= \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { q ^ { 2 } } { \ell ^ { 2 } }$ (20)
Positive value means compression on the rod.
(ii) Centrifugal force due to rotation of the $\operatorname { rod } = - \frac { 1 } { 2 } m \omega ^ { 2 } \ell$ (21)
(iii) Magnetic force on the particles due to the motion of the center of the mass
$$
= q \vec { v } _ { C M } \times \vec { B } \cdot ( - \hat { \ell } ) = q \vec { v } _ { C M } \cdot \hat { \ell } \times \vec { B }
$$

Taking the square of both sides of eq.(4) and using the initial condition for the value of $P ^ { 2 }$, we obtain

$$
\begin{equation*}
\frac { 1 } { 2 } M v _ { C M } ^ { 2 } = q \ell \vec { v } _ { C M } \cdot \hat { \ell } \times \vec { B } = \frac { 1 } { 2 } I \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) \tag{22}
\end{equation*}
$$

Combining the three forces, we have

$$
\begin{equation*}
\text { tension on the } \mathrm { rod } = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { q ^ { 2 } } { \ell ^ { 2 } } - \frac { 1 } { 2 } m \ell \omega ^ { 2 } + \frac { 1 } { 4 } m \ell \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) \tag{23}
\end{equation*}
$$

A positive value means compression on the rod.
