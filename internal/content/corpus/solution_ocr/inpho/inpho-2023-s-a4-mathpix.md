---
id: solution-ocr-inpho-2023-s-a4
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2023-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 4. Electrostatic TikTok

Consider a fixed infinite vertical thin rod (shown by the red color in the figure below) of linear charge density $\lambda$ along the $z$-axis at the origin (see figure below). A uniformly charged ring of total charge $Q$, mass $M$, and radius $a$ is placed with its center at the origin in the $x - y$ plane. Point P is an arbitrary point on the ring. The projection of point P on $x - y$ plane makes an angle $\theta$ with respect to the $x$-axis in the anticlockwise direction as seen from the top.

The ring is now given an initial angular velocity $\omega _ { 0 }$ about the $x$-axis. We define the angle $\alpha$ which the plane of the ring makes with the $x - y$ plane. This is illustrated by drawing line segment AB in the plane of the ring. Initially $\alpha = 0$. Ignore gravity.
![](../../../figures/solution-ocr/91dd4d2cdc33de54bb4c7345.jpg)
You may find the following differentiation useful

$$
\begin{equation*}
D = \frac { d } { d \theta } \left[ \tan ^ { - 1 } ( q \tan \theta ) \right] = \frac { 1 } { 1 + ( q \tan \theta ) ^ { 2 } } \left[ q \left( \sec ^ { 2 } \theta \right) \right] \tag{4.1}
\end{equation*}
$$

(a) [1 marks] State an expression for the electric field $\left( \vec { E } _ { 0 } \right)$ due to the infinite rod at a point on the ring when $\alpha = 0$ in terms of $x , y$ and $\theta$, and related quantities.
Solution: The electric field on the ring due to the infinite rod is given by
$$
\begin{equation*}
\vec { E } _ { 0 } = \frac { \lambda ( x \hat { x } + y \hat { y } ) } { 2 \pi \epsilon _ { 0 } \left( x ^ { 2 } + y ^ { 2 } \right) } \tag{4.2}
\end{equation*}
$$
Since the rod is infinite, the electric field will not depend on $z$.
$$
\begin{equation*}
\overrightarrow { E _ { 0 } } = \frac { \lambda ( a \cos \theta \hat { x } + a \sin \theta \hat { y } ) } { 2 \pi \epsilon _ { 0 } \left( a ^ { 2 } \cos ^ { 2 } \theta + a ^ { 2 } \sin ^ { 2 } \theta \right) } \tag{4.3}
\end{equation*}
$$
The above expression simplifies to
$$
\begin{equation*}
\vec { E } _ { 0 } = \frac { \lambda ( \cos \theta \hat { x } + \sin \theta \hat { y } ) } { 2 \pi \epsilon _ { 0 } a } \tag{4.4}
\end{equation*}
$$
(b) [2 marks] At some instant the ring makes an angle $\alpha$. Derive an expression for the electric field $\vec { E }$ due to the infinite rod at a point on the ring in terms of $\theta$, and $\alpha$.
Solution: The new coordinates of the ring are
$$
\begin{align*}
x = \frac { a \cos \theta } { \sqrt { 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha } } , y & = \frac { a \sin \theta } { \sqrt { 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha } } \text { and } z = \frac { a \sin \theta \tan \alpha } { \sqrt { 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha } } . \\
\vec { E } & = \frac { \lambda ( x \hat { x } + y \hat { y } ) } { 2 \pi \epsilon _ { 0 } \left( x ^ { 2 } + y ^ { 2 } \right) }  \tag{4.5}\\
& = \frac { \lambda } { 2 \pi \epsilon _ { 0 } a } \sqrt { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } ( \cos \theta \hat { x } + \sin \theta \hat { y } ) \tag{4.6}
\end{align*}
$$

(c) [1 marks] Find the net force $\vec { F }$ acting on the ring.
Solution: Charge $d Q$ in elementary length is $\frac { Q } { 2 \pi \cos \alpha } \frac { 1 } { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } d \theta$. Force on small element $d s$ is
$$
\begin{equation*}
d \vec { F } = \vec { E } d Q = \frac { \lambda } { 2 \pi \epsilon _ { 0 } a } \sqrt { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } ( \cos \theta \hat { x } + \sin \theta \hat { y } ) \frac { Q } { 2 \pi \cos \alpha } \frac { 1 } { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } d \theta \tag{4.7}
\end{equation*}
$$
which simplifies to
$$
\begin{equation*}
d \vec { F } = \frac { \lambda Q } { 4 \pi ^ { 2 } \epsilon _ { 0 } a \cos \alpha } \frac { \cos \theta \hat { x } + \sin \theta \hat { y } } { \sqrt { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } } \tag{4.8}
\end{equation*}
$$
where $C = \lambda Q / 4 \pi ^ { 2 } \epsilon _ { o } a$. Consider
$$
\begin{align*}
d F _ { x } & = \frac { C } { \cos \alpha } \frac { \cos \theta } { \sqrt { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } } d \theta  \tag{4.9}\\
F _ { x } & = \frac { C } { \cos \alpha } \int _ { - \pi } ^ { \pi } \frac { \cos \theta } { \sqrt { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } } d \theta \tag{4.10}
\end{align*}
$$
The integrand is an even function, hence
$$
\begin{equation*}
F _ { x } = \frac { 2 C } { \cos \alpha } \int _ { 0 } ^ { \pi } \frac { \cos \theta } { \sqrt { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } } d \theta \tag{4.12}
\end{equation*}
$$
using $\int _ { 0 } ^ { 2 a } f ( x ) d x = \int _ { 0 } ^ { a } f ( x ) d x + \int _ { 0 } ^ { a } f ( 2 a - x ) d x$
$$
\begin{equation*}
F _ { x } = \frac { 2 C } { \cos \alpha } \left[ \int _ { 0 } ^ { \pi / 2 } \frac { \cos \theta } { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } + \int _ { 0 } ^ { \pi / 2 } \frac { \cos ( \pi - \theta ) } { \left( 1 + \sin ^ { 2 } ( \pi - \theta ) \tan ^ { 2 } \alpha \right) } \right] = 0 \tag{4.14}
\end{equation*}
$$
Similarly
$$
\begin{equation*}
F _ { y } = 0 \tag{4.15}
\end{equation*}
$$
The total force acting on the ring is zero. Answers based on symmetric arguments will be also given credit.
(d) [5 marks] Find the net torque $\vec { \tau }$ acting on the ring in terms of $\alpha$ and the constants only. Qualitatively plot torque as a function of $\alpha$.

Solution:

$$
\begin{equation*}
d \tau = \vec { r } \times d \vec { F } ( \theta ) \tag{4.16}
\end{equation*}
$$

Consider

$$
\begin{align*}
d \tau _ { z } & = x d F _ { y } - y d F _ { x }  \tag{4.17}\\
& = 0  \tag{4.18}\\
\Longrightarrow \tau _ { z } & = 0  \tag{4.19}\\
\tau _ { y } = \int _ { - \pi } ^ { \pi } z d F _ { x } \tau _ { y } & = \frac { a C \tan \alpha } { 2 \cos \alpha } \int _ { - \pi } ^ { \pi } \frac { \sin 2 \theta } { \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha \right) } \tag{4.20}
\end{align*}
$$

Integrand is odd function, hence

$$
\begin{equation*}
\tau _ { y } = 0 \tag{4.21}
\end{equation*}
$$


$$
\begin{align*}
& \tau _ { x } = \int _ { - \pi } ^ { \pi } - z d F _ { y }  \tag{4.22}\\
& \tau _ { x } = - \int _ { - \pi } ^ { \pi } \frac { a \sin \theta \tan \alpha } { \sqrt { 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \alpha } } \frac { C \sin \theta } { \cos \alpha \left( 1 + \sin ^ { 2 } \theta \tan ^ { 2 } \theta \right) } \tag{4.23}
\end{align*}
$$

which simplifies to

$$
\begin{equation*}
\tau _ { x } = - a C \int _ { - \pi } ^ { \pi } \frac { \tan ^ { 2 } \theta \sin \alpha } { \left( \cos ^ { 2 } \alpha + \tan ^ { 2 } \theta \right) } d \theta \tag{4.24}
\end{equation*}
$$

The integrand is an even function, hence

$$
\begin{equation*}
\tau _ { x } = - 2 a C \sin \alpha \int _ { 0 } ^ { \pi } \frac { \tan ^ { 2 } \theta } { \left( \cos ^ { 2 } \alpha + \tan ^ { 2 } \theta \right) } d \theta \tag{4.25}
\end{equation*}
$$

using $\int _ { 0 } ^ { 2 a } f ( x ) d x = \int _ { 0 } ^ { a } f ( x ) d x + \int _ { 0 } ^ { a } f ( 2 a - x ) d x$

$$
\begin{align*}
& \tau _ { x } = - 4 a C \sin \alpha \int _ { 0 } ^ { \pi / 2 } \frac { \tan ^ { 2 } \theta } { \left( \cos ^ { 2 } \alpha + \tan ^ { 2 } \theta \right) } d \theta  \tag{4.26}\\
& \tau _ { x } = - 4 a C \sin \alpha \sec ^ { 2 } \alpha \int _ { 0 } ^ { \pi / 2 } \frac { \tan ^ { 2 } \theta } { \left( 1 + \sec ^ { 2 } \alpha \tan ^ { 2 } \theta \right) } d \theta \tag{4.27}
\end{align*}
$$

Substituting $\sec \alpha = u$, in above equation, we get

$$
\begin{equation*}
\tau _ { x } = - 4 a C \sin \alpha u ^ { 2 } \int _ { 0 } ^ { \pi / 2 } \frac { \tan ^ { 2 } \theta } { \left( 1 + u ^ { 2 } \tan ^ { 2 } \theta \right) } d \theta \tag{4.28}
\end{equation*}
$$

It is given that

$$
\begin{align*}
D & = \frac { d } { d \theta } \left( \tan ^ { - 1 } ( u \tan \theta ) \right) = \frac { u \sec ^ { 2 } \theta } { 1 + u ^ { 2 } \tan ^ { 2 } \theta }  \tag{4.29}\\
& = \frac { u \left( 1 + \tan ^ { 2 } \theta \right) } { 1 + u ^ { 2 } \tan ^ { 2 } \theta }  \tag{4.30}\\
D & = \frac { u } { 1 + u ^ { 2 } \tan ^ { 2 } \theta } + \frac { u \tan ^ { 2 } \theta } { 1 + u ^ { 2 } \tan ^ { 2 } \theta } + u - u \frac { 1 + u ^ { 2 } \tan ^ { 2 } \theta } { 1 + u ^ { 2 } \tan ^ { 2 } \theta } \tag{4.31}
\end{align*}
$$

Solving above equation, we get

$$
\begin{equation*}
\frac { \tan ^ { 2 } \theta } { 1 + u ^ { 2 } \tan ^ { 2 } \theta } = \frac { D } { u - u ^ { 3 } } - \frac { 1 } { 1 - u ^ { 2 } } \tag{4.32}
\end{equation*}
$$

Hence Substituting above equation in Eq.(4.28) , we get

$$
\begin{align*}
\tau _ { x } & = - 4 C a \sin \alpha u ^ { 2 } \int _ { 0 } ^ { \pi / 2 } \left[ \frac { D } { u - u ^ { 3 } } - \frac { 1 } { 1 - u ^ { 2 } } \right] d \theta  \tag{4.33}\\
\tau _ { x } & = - 4 C a \sin \alpha u ^ { 2 } \int _ { 0 } ^ { \pi / 2 } \left[ \frac { D } { u - u ^ { 3 } } - \frac { 1 } { 1 - u ^ { 2 } } \right] d \theta \tag{4.34}
\end{align*}
$$

Substituting value of D, we get

$$
\begin{gather*}
\tau _ { x } = - 4 C a \sin \alpha u ^ { 2 } \int _ { 0 } ^ { \pi / 2 } \left[ \frac { \frac { d } { d \theta } \left( \tan ^ { - 1 } ( u \tan \theta ) \right) } { u - u ^ { 3 } } - \frac { 1 } { 1 - u ^ { 2 } } \right] d \theta  \tag{4.35}\\
\tau _ { x } = - 4 C a \sin \alpha u ^ { 2 } \left[ \frac { \tan ^ { - 1 } ( u \tan \theta ) } { u - u ^ { 3 } } - \frac { \theta } { 1 - u ^ { 2 } } \right] _ { 0 } ^ { \pi / 2 } \tag{4.36}
\end{gather*}
$$


Applying limits and solving further, we get

$$
\begin{equation*}
\tau _ { x } = - \frac { \lambda Q } { 2 \pi \epsilon _ { 0 } } \tan ( \alpha / 2 ) \tag{4.38}
\end{equation*}
$$

Working of $\tau _ { y } , \tau _ { z }$ is not required.
![](../../../figures/solution-ocr/9cf43a7f9dacd5203c8d5b6f.jpg)

(e) [2 marks] Let the ring is in equilibrium with respect to $\alpha = 0$. Derive an expression for the time period $T$ of small oscillations of the ring in terms of $\lambda$, and $Q$. Take $\lambda = 0.1 \mu \mathrm { C } / \mathrm { m } , Q = 2.0 \mu \mathrm { C }$, $M = 50.0 \mathrm {~g}$, radius $a = 5.0 \mathrm {~cm}$, and $\omega _ { 0 } = 1.0 \mathrm { rad } / \mathrm { s }$. Calculate $T$.

Solution: Under small angle approximation of $\alpha , \tau _ { x }$ becomes

$$
\begin{align*}
\tau _ { x } & = \frac { - \lambda Q \alpha } { 4 \pi \epsilon _ { 0 } }  \tag{4.39}\\
I \frac { d ^ { 2 } \alpha } { d t ^ { 2 } } & = \frac { - \lambda Q \alpha } { 4 \pi \epsilon _ { 0 } }  \tag{4.40}\\
\frac { M a ^ { 2 } } { 2 } \frac { d ^ { 2 } \alpha } { d t ^ { 2 } } & = \frac { - \lambda Q \alpha } { 4 \pi \epsilon _ { 0 } }  \tag{4.41}\\
\frac { d ^ { 2 } \alpha } { d t ^ { 2 } } & = - \frac { 2 \lambda Q } { 4 M a ^ { 2 } \pi \epsilon _ { 0 } } \alpha \tag{4.42}
\end{align*}
$$

This is a differential equation of SHM, hence

$$
\begin{align*}
T ^ { 2 } & = \frac { 4 \pi ^ { 2 } } { \frac { 2 \lambda Q } { 4 M a ^ { 2 } \pi \epsilon _ { 0 } } }  \tag{4.43}\\
\Longrightarrow T & = 2 \pi a \sqrt { \frac { 2 M \pi \epsilon _ { 0 } } { Q \lambda } }  \tag{4.44}\\
T & = 1.17 \mathrm {~s} \tag{4.45}
\end{align*}
$$

This can be used as an electrostatic clock!

(f) [2.5 marks] Find an expression for the potential energy $U$ of the ring in terms of $\alpha$. Qualitatively plot $U$ as a function of $\alpha$. Take the zero of potential energy to be at $\alpha = 0$.

Solution: We know that $\tau = - \frac { d U } { d \alpha }$

$$
\begin{align*}
\Longrightarrow U & = - \int \tau d \alpha  \tag{4.46}\\
& = \frac { \lambda Q } { 2 \pi \epsilon _ { 0 } } \int \tan ( \alpha / 2 ) d \alpha  \tag{4.47}\\
U & = - \frac { \lambda Q } { 2 \pi \epsilon _ { 0 } } 2 \log ( \cos ( \alpha / 2 ) ) + c \tag{4.48}
\end{align*}
$$

where $c$ is the constant of integration. At $\alpha = 0 , U = 0$, which implies that $c = 0$.

$$
\begin{equation*}
\Longrightarrow U ( \alpha ) = - \frac { \lambda Q } { \pi \epsilon _ { 0 } } \log ( \cos ( \alpha / 2 ) ) \tag{4.49}
\end{equation*}
$$

![](../../../figures/solution-ocr/e91757ba2cc732b40cc420ce.jpg)

(g) [2.5 marks] Obtain the expression of maximum value of $\alpha \left( \alpha _ { \text {max } } \right)$ in terms of $\omega _ { 0 }$. Calculate $\alpha _ { \text {max } }$.

Solution: Consider

$$
\begin{array} { r }
I \frac { d ^ { 2 } \alpha } { d t ^ { 2 } } = \tau _ { x } \\
\frac { M a ^ { 2 } } { 2 } \frac { d ^ { 2 } \alpha } { d t ^ { 2 } } = \frac { - \lambda Q } { 2 \pi \epsilon _ { 0 } } \tan ( \alpha / 2 ) \tag{4.51}
\end{array}
$$

Multiplying both sides by $\frac { d \alpha } { d t }$

$$
\begin{equation*}
\frac { M a ^ { 2 } } { 2 } \frac { d ^ { 2 } \alpha } { d t ^ { 2 } } \frac { d \alpha } { d t } = \frac { - \lambda Q } { 2 \pi \epsilon _ { 0 } } \tan ( \alpha / 2 ) \frac { d \alpha } { d t } \tag{4.52}
\end{equation*}
$$

Integrating on both sides

$$
\begin{align*}
\frac { M a ^ { 2 } } { 4 } \left( \frac { d \alpha } { d t } \right) ^ { 2 } & = \frac { \lambda Q } { \pi \epsilon _ { 0 } } \log ( \cos ( \alpha / 2 ) ) + c ^ { \prime }  \tag{4.53}\\
\left( \frac { d \alpha } { d t } \right) ^ { 2 } & = \frac { 32 \pi ^ { 2 } } { T ^ { 2 } } \log ( \cos ( \alpha / 2 ) ) + c ^ { \prime } \tag{4.54}
\end{align*}
$$

where $c ^ { \prime }$ is the constant of integration. At $t = 0 , \frac { d \alpha } { d t } = \omega _ { 0 }$, which implies that $c = \omega _ { 0 } ^ { 2 }$.

$$
\begin{align*}
\left( \frac { d \alpha } { d t } \right) ^ { 2 } & = \frac { 32 \pi ^ { 2 } } { T ^ { 2 } } \log ( \cos ( \alpha / 2 ) ) + \omega _ { 0 } ^ { 2 }  \tag{4.55}\\
\frac { d \alpha } { d t } & = \sqrt { \frac { 32 \pi ^ { 2 } } { T ^ { 2 } } \log ( \cos ( \alpha / 2 ) ) + \omega _ { 0 } ^ { 2 } } \tag{4.56}
\end{align*}
$$


For $\alpha = \alpha _ { \text {max } } , \frac { d \alpha } { a t } = 0$, hence solving above equation, we get

$$
\begin{align*}
& \alpha _ { \max } = 2 \left[ \cos ^ { - 1 } \left( \exp \left( - \frac { \omega _ { 0 } ^ { 2 } T ^ { 2 } } { 32 \pi ^ { 2 } } \right) \right) \right]  \tag{4.57}\\
& \alpha _ { \max } = 10.66 ^ { \circ } \tag{4.58}
\end{align*}
$$
