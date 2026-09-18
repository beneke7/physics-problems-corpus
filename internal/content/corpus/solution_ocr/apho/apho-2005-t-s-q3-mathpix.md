---
id: solution-ocr-apho-2005-t-s-q3
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2005_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2005-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question 3 light deflection by a moving mirror

Reflection of light by a relativistically moving mirror is not theoretically new. Einstein discussed the possibility or worked out the process using the Lorentz transformation to get the reflection formula due to a mirror moving with a velocity $\vec { v }$. This formula, however, could also be derived by using a relatively simpler method. Consider the reflection process as shown in Fig. 3.1, where a plane mirror M moves with a velocity $\vec { v } = v \hat { e } _ { x }$ (where $\hat { e } _ { x }$ is a unit vector in the $x$-direction) observed from the lab frame F. The mirror forms an angle $\phi$ with respect to the velocity (note that $\phi \leq 90 ^ { \circ }$, see figure 3.1). The plane of the mirror has n as its normal. The light beam has an incident angle $\alpha$ and reflection angle $\beta$ which are the angles between $\vec { n }$ and the incident beam 1 and reflection beam $1 ^ { \prime }$, respectively in the laboratory frame F. It can be shown that,

$$
\begin{equation*}
\sin \alpha - \sin \beta = \frac { v } { c } \sin \phi \sin ( \alpha + \beta ) \tag{1}
\end{equation*}
$$

![](../../../figures/solution-ocr/6bb38c2d322d465cc38f8983.jpg)
Figure 3.1. Reflection of light by a relativistically moving mirror


## 3A. Einstein's Mirror (2.5 points)

About a century ago Einstein derived the law of reflection of an electromagnetic wave by a mirror moving with a constant velocity $\vec { v } = - v \hat { e } _ { x }$ (see Fig. 3.2). By applying the Lorentz transformation to the result obtained in the rest frame of the mirror, Einstein found that:

$$
\begin{equation*}
\cos \beta = \frac { \left( 1 + \left( \frac { v } { c } \right) ^ { 2 } \right) \cos \alpha - 2 \frac { v } { c } } { 1 - 2 \frac { v } { c } \cos \alpha + \left( \frac { v } { c } \right) ^ { 2 } } \tag{2}
\end{equation*}
$$

Derive this formula using Equation (1) without Lorentz transformation!

![](../../../figures/solution-ocr/1bd0809e8e8a09f8f4e19d9c.jpg)
Figure 3.2. Einstein mirror moving to the left with a velocity $v$.

## 3B. Frequency Shift (2 points)

In the same situation as in 3A, if the incident light is a monochromatic beam hitting M with a frequency $f$, find the new frequency $f ^ { \prime }$ after it is reflected from the surface of the moving mirror. If $\alpha = 30 ^ { 0 }$ and $v = 0.6 c$ in figure 3.2, find frequency shift $\Delta f$ in percentage of $f$.


## 3C. Moving Mirror Equation (5.5 Points)

![](../../../figures/solution-ocr/b0fd363a06ca43bec7fd33ef.jpg)
Figure 3.3 shows the positions of the mirror at time $t _ { 0 }$ and $t$. Since the observer is moving to the left, the mirror moves relatively to the right. Light beam 1 falls on point $a$ at $t _ { 0 }$ and is reflected as beam $1 ^ { \prime }$. Light beam 2 falls on point $d$ at $t$ and is reflected as beam 2'. Therefore, $\overline { a b }$ is the wave front of the incoming light at time $t _ { 0 }$. The atoms at point are disturbed by the incident wave front $\overline { a b }$ and begin to radiate a wavelet. The disturbance due to the wave front $\overline { a b }$ stops at time $t$ when the wavefront strikes point $d$.

By referring to figure 3.3 for light wave propagation or using other methods, derive equation (1).


Solution:
a) EINSTEIN'S MIRROR

By taking $\phi = \pi / 2$ and replacing $v$ with $- v$ in Equation (1) we obtain

$$
\begin{equation*}
\sin \alpha - \sin \beta = - \frac { v } { c } \sin ( \alpha + \beta ) \tag{3}
\end{equation*}
$$

This equation can also be written in the form of

$$
\begin{equation*}
\left( 1 + \frac { v } { c } \cos \beta \right) \sin \alpha = \left( 1 - \frac { v } { c } \cos \alpha \right) \sin \beta \tag{4}
\end{equation*}
$$

The square of this equation can be written in terms of a squared equation of $\cos \beta$, as follows,

$$
\begin{equation*}
\left( 1 - 2 \frac { v } { c } \cos \alpha + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos ^ { 2 } \beta + 2 \frac { v } { c } \left( 1 - \cos ^ { 2 } \alpha \right) \cos \beta + 2 \frac { v } { c } \cos \alpha - \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos ^ { 2 } \alpha = 0 \tag{5}
\end{equation*}
$$

which has two solutions,

$$
\begin{equation*}
( \cos \beta ) _ { 1 } = \frac { 2 \frac { v } { c } \cos ^ { 2 } \alpha - \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos \alpha } { 1 - 2 \frac { v } { c } \cos \alpha + \frac { v ^ { 2 } } { c ^ { 2 } } } \tag{6}
\end{equation*}
$$

and

$$
\begin{equation*}
( \cos \beta ) _ { 2 } = \frac { - 2 \frac { v } { c } + \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos \alpha } { 1 - 2 \frac { v } { c } \cos \alpha + \frac { v ^ { 2 } } { c ^ { 2 } } } \tag{7}
\end{equation*}
$$

However, if the mirror is at rest ( $v = 0$ ) then $\cos \alpha = \cos \beta$; therefore the proper solution is

$$
\begin{equation*}
\cos \beta _ { 2 } = \frac { - 2 \frac { v } { c } + \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos \alpha } { 1 - 2 \frac { v } { c } \cos \alpha + \frac { v ^ { 2 } } { c ^ { 2 } } } \tag{8}
\end{equation*}
$$


b) FREQUENCY SHIFT

The reflection phenomenon can be considered as a collision of the mirror with a beam of photons each carrying an incident and reflected momentum of magnitude

$$
\begin{equation*}
p _ { f } = h f / c \text { and } p _ { f } { } ^ { \prime } = h f ^ { \prime } / c \text {, } \tag{9}
\end{equation*}
$$

The conservation of linear momentum during its reflection from the mirror for the component parallel to the mirror appears as

$$
\begin{equation*}
p _ { f } \sin \alpha = p _ { f } { } ^ { \prime } \sin \beta \text { or } f ^ { \prime } \sin \beta = f ^ { \prime } \frac { \left( 1 - \frac { v ^ { 2 } } { c ^ { 2 } } \right) \sin \alpha } { \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) - 2 \frac { v } { c } \cos \alpha } = f \sin \alpha \tag{10}
\end{equation*}
$$

Thus

$$
\begin{equation*}
f ^ { \prime } = \frac { \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) - 2 \frac { v } { c } \cos \alpha } { \left( 1 - \frac { v ^ { 2 } } { c ^ { 2 } } \right) } f \tag{11}
\end{equation*}
$$

For $\alpha = 30 ^ { 0 }$ and $v = 0.6 c$,

$$
\begin{equation*}
\cos \alpha = \frac { 1 } { 2 } \sqrt { 3 } , 1 - \frac { v ^ { 2 } } { c ^ { 2 } } = 0.64,1 + \frac { v ^ { 2 } } { c ^ { 2 } } = 1.36 \tag{12}
\end{equation*}
$$

so that

$$
\begin{equation*}
\frac { f ^ { \prime } } { f } = \frac { 1.36 - 0.6 \sqrt { 3 } } { 0.64 } = 0.5 \tag{13}
\end{equation*}
$$

Thus, there is a decrease of frequency by $50 \%$ due to reflection by the moving mirror.


## c) RELATIVISTICALLY MOVING MIRROR EQUATION

Figure 3.3 shows the positions of the mirror at time $t _ { 0 }$ and $t$. Since the observer is moving to the left, system is moving relatively to the right. Light beam 1 falls on point $a$ at $t _ { 0 }$ and is reflected as beam $1 ^ { \prime }$. Light beam 2 falls on point $d$ at $t$ and is reflected as beam 2'. Therefore, $\overline { a b }$ is the wave front of the incoming light at time $t _ { 0 }$. The atoms at point are disturbed by the incident wave front $\overline { a b }$ and begin to radiate a wavelet. The disturbance due to the wave front $\overline { a b }$ stops at time $t$ when the wavefront strikes point $d$. As a consequence

$$
\begin{equation*}
\overline { a c } = \overline { b d } = c \left( t - t _ { 0 } \right) . \tag{14}
\end{equation*}
$$

From this figure we also have $\overline { e d } = \overline { a g }$, and

$$
\begin{equation*}
\sin \alpha = \frac { \overline { b d } + \overline { d g } } { \overline { a g } } , \quad \sin \beta = \frac { \overline { a c } - \overline { a f } } { \overline { a g } - \overline { e f } } . \tag{15}
\end{equation*}
$$

Figure 3.4 displays the beam path 1 in more detail. From this figure it is easy to show that

$$
\begin{equation*}
\overline { d g } = \overline { a e } = \frac { \overline { a o } } { \cos \alpha } = \frac { v \left( t - t _ { 0 } \right) \sin \phi } { \cos \alpha } \tag{16}
\end{equation*}
$$

and

$$
\begin{equation*}
\overline { a f } = \frac { \overline { a o } } { \cos \beta } = \frac { v \left( t - t _ { 0 } \right) \sin \phi } { \cos \beta } \tag{17}
\end{equation*}
$$


From the triangles aeo and afo we have $\overline { e o } = \overline { a o } \tan \alpha$ and $\overline { o f } = \overline { a o } \tan \beta$. Since $\overline { e f } = \overline { e o } + o f$, then

$$
\begin{equation*}
\overline { e f } = v \left( t - t _ { 0 } \right) \sin \phi ( \tan \alpha + \tan \beta ) \tag{18}
\end{equation*}
$$

By substituting Equations (14), (16), (17), and (18) into Equation (15) we obtain

$$
\begin{equation*}
\sin \alpha = \frac { c + v \frac { \sin \phi } { \cos \alpha } } { \frac { \overline { a g } } { t - t _ { 0 } } } \tag{19}
\end{equation*}
$$

![](../../../figures/solution-ocr/fde30943fedb662475143cbd.jpg)
Figure 3.4.

and

$$
\begin{equation*}
\sin \beta = \frac { c - v \frac { \sin \phi } { \cos \beta } } { \overline { \overline { a g } } - v \sin \phi ( \tan \alpha + \tan \beta ) } \tag{20}
\end{equation*}
$$

Eliminating $\overline { a g } / \left( t - t _ { 0 } \right)$ from the two Equations above leads to


$$
\begin{equation*}
v \sin \phi ( \tan \alpha + \tan \beta ) = c \left( \frac { 1 } { \sin \alpha } - \frac { 1 } { \sin \beta } \right) + v \sin \phi \left( \frac { 1 } { \sin \alpha \cos \alpha } + \frac { 1 } { \sin \beta \cos \beta } \right) \tag{21}
\end{equation*}
$$

By collecting the terms containing $v \sin \phi$ we obtain

$$
\begin{equation*}
\frac { v } { c } \sin \phi \left( \frac { \cos \alpha } { \sin \alpha } + \frac { \cos \beta } { \sin \beta } \right) = \frac { \sin \alpha - \sin \beta } { \sin \alpha \sin \beta } \tag{22}
\end{equation*}
$$

or

$$
\begin{equation*}
\sin \alpha - \sin \beta = \frac { v } { c } \sin \phi \sin ( \alpha + \beta ) \tag{23}
\end{equation*}
$$


THEORETICAL COMPETITION

Questions and Solutions
FINAL VERSION
[Marking Scheme]

## THEORETICAL Question 3

Relativistic Mirror

| A. (3.0) | 0.5 | Equation: $\sin \alpha - \sin \beta = - \frac { v } { c } \sin ( \alpha + \beta )$ |
| :--- | :--- | :--- |
|  | 0.25 | Equation $\left( 1 + \frac { v } { c } \cos \beta \right) \sin \alpha = \left( 1 - \frac { v } { c } \cos \alpha \right) \sin \beta$ |
|  | 0.5 | $\left( 1 - 2 \frac { v } { c } \cos \alpha + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos ^ { 2 } \beta + 2 \frac { v } { c } \left( 1 - \cos ^ { 2 } \alpha \right) \cos \beta + 2 \frac { v } { c } \cos \alpha - \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos ^ { 2 } \alpha = 0$ |
|  | 0.75 | $\begin{aligned} & ( \cos \beta ) _ { 1 } = \frac { 2 \frac { v } { c } \cos ^ { 2 } \alpha - \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos \alpha } { 1 - 2 \frac { v } { c } \cos \alpha + \frac { v ^ { 2 } } { c ^ { 2 } } } \\ & ( \cos \beta ) _ { 2 } = \frac { - 2 \frac { v } { c } + \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos \alpha } { 1 - 2 \frac { v } { c } \cos \alpha + \frac { v ^ { 2 } } { c ^ { 2 } } } \end{aligned}$ |
|  | 0.5 | Recognize the mirror is at rest ( $v = 0$ ) then $\cos \alpha = \cos \beta$ |
|  | 0.5 | $\cos \beta _ { 2 } = \frac { - 2 \frac { v } { c } + \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) \cos \alpha } { 1 - 2 \frac { v } { c } \cos \alpha + \frac { v ^ { 2 } } { c ^ { 2 } } }$ |
| B(2.0) | 0.25 | $p _ { f } \sin \alpha = p _ { f } { } ^ { \prime } \sin \beta$ |
|  | 0.25 <br> 0.25 | $\begin{aligned} & \text { Know how to calculate } \sin \beta \\ & p _ { f } = h f / c \end{aligned}$ |
|  | 0.75 | $f ^ { \prime } = \frac { \left( 1 + \frac { v ^ { 2 } } { c ^ { 2 } } \right) - 2 \frac { v } { c } \cos \alpha } { \left( 1 - \frac { v ^ { 2 } } { c ^ { 2 } } \right) } f$ |
|  | 0.5 | $\frac { f ^ { \prime } } { f } = 0.5$ |


For part $C$, if the students is not able to prove the equation maximum point is 2.5 .

| (5.0) | 1.0 | Equation $\overline { \text { ef } } = v \left( t - t _ { 0 } \right) \sin \phi ( \tan \alpha + \tan \beta )$ |
| :--- | :--- | :--- |
|  | 1.0 | $\sin \alpha = \frac { c + v \frac { \sin \phi } { \cos \alpha } } { \frac { \overline { a g } } { t - t _ { 0 } } }$ |
|  | 0.5 | $\sin \beta = \frac { c - v \frac { \sin \phi } { \cos \beta } } { \frac { \overline { a g } } { t - t _ { 0 } } - v \sin \phi ( \tan \alpha + \tan \beta ) }$ |
|  | 2.5 | $\sin \alpha - \sin \beta = \frac { v } { c } \sin \phi \sin ( \alpha + \beta )$ |

Propagation error can be considered but the maximum point is 2.5 .
