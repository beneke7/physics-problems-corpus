---
id: solution-ocr-izho-2021-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2021_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2021-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3. Optical waveguide (10.0 points) Description of waves

3.1 The function

$$
\begin{equation*}
\vec { E } ( t , x ) = \vec { E } _ { 0 } \cos ( \omega t - k x + \varphi ) , \tag{1}
\end{equation*}
$$

describing a wave at a fixed moment in time $t = t _ { 0 }$ gives the distribution of the electric field strength in space. When the coordinate is changed by the wavelength $\lambda$, the argument of the cosine must change to $2 \pi$, therefore

$$
\begin{equation*}
\left( \omega t _ { 0 } - k ( x + \lambda ) + \varphi \right) - \left( \omega t _ { 0 } - k x + \varphi \right) = 2 \pi . \tag{2}
\end{equation*}
$$

It follows from this relation that

$$
\begin{equation*}
k = \frac { 2 \pi } { \lambda } . \tag{3}
\end{equation*}
$$

Fixing a point in space $x = x _ { 0 }$ and reasoning similarly, we can write

$$
\begin{equation*}
\left( \omega ( t + T ) - k x _ { 0 } + \varphi \right) - \left( \omega t - k x _ { 0 } + \varphi \right) = 2 \pi , \tag{4}
\end{equation*}
$$

which yields

$$
\begin{equation*}
\omega = \frac { 2 \pi } { T } . \tag{5}
\end{equation*}
$$

3.2 The speed of propagation of a monochromatic wave is the speed of motion of a certain wave surface of constant phase. This surface satisfies the equation

$$
\begin{equation*}
\omega t - k x + \varphi = \text { const } . \tag{6}
\end{equation*}
$$

It follows from this relation that the wave propagation speed is

$$
\begin{equation*}
c = \frac { d x } { d t } = \frac { \omega } { k } . \tag{7}
\end{equation*}
$$

3.3 The surface of the constant phase at a fixed time instant satisfies the equation

$$
\begin{equation*}
\vec { k } \cdot \vec { r } = \text { const } , \tag{8}
\end{equation*}
$$


and this is a family of planes perpendicular to the wave vector.
![](../../../figures/solution-ocr/158cfedc8b71b4e86c654985.jpg)
3.4 Expanding the scalar product, we obtain the wave equation in the coordinate representation:

$$
\begin{equation*}
E = E _ { 0 } ^ { \prime } \cos ( \omega t - k x \cos \theta - k y \sin \theta + \varphi ) \tag{9}
\end{equation*}
$$

3.5 Since the superposition principle is valid for the electric field strength, we can write for a composite wave

$$
\begin{align*}
& E = E _ { 0 } \cos \left( \omega _ { 0 } t - k _ { 0 } x \right) + E _ { 0 } \cos \left( \left( \omega _ { 0 } + \Delta \omega \right) t - \left( k _ { 0 } + \Delta k \right) x \right) = \\
& = 2 E _ { 0 } \cos \left( \left( \omega _ { 0 } + \frac { \Delta \omega } { 2 } \right) t - \left( k _ { 0 } + \frac { \Delta k } { 2 } \right) x \right) \cos \left( \frac { \Delta \omega } { 2 } t - \frac { \Delta k } { 2 } x \right) . \tag{10}
\end{align*}
$$

Taking into account that $\Delta \omega \ll \omega _ { 0 }$, and, consequently, $\Delta k \ll k _ { 0 }$, we rewrite this expression as:

$$
\begin{equation*}
E = A _ { 0 } ( x , t ) \cos \left( \omega _ { 0 } t - k _ { 0 } x \right) . \tag{11}
\end{equation*}
$$

Here the following notation is used

$$
\begin{equation*}
A _ { 0 } ( x , t ) = 2 E _ { 0 } \cos \left( \frac { \Delta \omega } { 2 } t - \frac { \Delta k } { 2 } x \right) \tag{12}
\end{equation*}
$$

for slowly varying wave amplitude.
3.6 To determine the time duration of the packet, it should be taken into account that when passing from one "zero" of the cosine to the next, the argument of the cosine changes to $\pi$, therefore

$$
\begin{equation*}
\frac { \Delta \omega } { 2 } \tau = \pi \quad \Rightarrow \quad \tau = \frac { 2 \pi } { \Delta \omega } . \tag{13}
\end{equation*}
$$

Taking into account that $\Delta \omega = 2 \pi \Delta v$, we obtain from expression (13) the relationship between the packet duration and its spectral width as

$$
\begin{equation*}
\tau \Delta v = 1 . \tag{14}
\end{equation*}
$$

3.7 For a similar reasoning, it is not difficult to find that

$$
\begin{equation*}
\frac { \Delta k } { 2 } L = \pi \quad \Rightarrow \quad L = \frac { 2 \pi } { \Delta k } . \tag{15}
\end{equation*}
$$

3.8 The phase velocity can be found as the velocity of motion of the wave surface of constant phase. It is derived from function (11) that this surface satisfies the condition

$$
\begin{equation*}
\left( \omega _ { 0 } t - k _ { 0 } x \right) = \text { const } , \tag{16}
\end{equation*}
$$

which results in the phase velocity

$$
\begin{equation*}
v _ { p } = \frac { \omega _ { 0 } } { k _ { 0 } } . \tag{17}
\end{equation*}
$$

3.9 To determine the group velocity, we write down the condition that the wave amplitude, for example, is maximum

$$
\begin{equation*}
\frac { \Delta \omega } { 2 } t - \frac { \Delta k } { 2 } x = 0 . \tag{18}
\end{equation*}
$$

It is concluded from this expression that the group velocity is given by the formula

$$
\begin{equation*}
v _ { g } = \frac { \Delta \omega } { \Delta k } . \tag{19}
\end{equation*}
$$

3.10 For electromagnetic waves in vacuum, the relation $\lambda v = c$ is fulfilled, which validates

$$
\begin{equation*}
\omega = k c , \tag{20}
\end{equation*}
$$

and it is finally obtained that

$$
\begin{equation*}
v _ { p } = \frac { \omega } { k } = c , \tag{21}
\end{equation*}
$$


$$
\begin{equation*}
v _ { g } = \frac { \Delta \omega } { \Delta k } = c = v _ { p } , \tag{22}
\end{equation*}
$$

i.e. both the phase and group speeds are equal to the speed of light $c$ in a vacuum.

## Plane waveguide

3.11 The function proposed in the problem statement describes the field in a plane waveguide

$$
\begin{equation*}
E ( t , x , y ) = E _ { 0 } \cos \left( \omega t - k _ { x } x \right) \sin \left( k _ { y } y \right) \tag{23}
\end{equation*}
$$

and satisfies one boundary condition: at $y = 0$ the electric field strength $E = 0$. Therefore, one should choose such values of $k _ { y }$ so that the second boundary condition is fulfilled: at $y = a$ the field strength should also vanish. This condition is satisfied when

$$
\begin{equation*}
\sin k _ { y } a = 0 \Rightarrow k _ { y } a = m \pi \Rightarrow k _ { y } = m \frac { \pi } { a } . \tag{24}
\end{equation*}
$$

In the expressions above $m$ stands for a positive integer, $m = 1,2,3 \ldots$
3.12 Let us write the equations of symmetric waves

$$
\begin{align*}
& E _ { 1 } = E _ { 0 } ^ { \prime } \cos \left( \omega t - k _ { 0 } x \cos \theta + k _ { 0 } y \sin \theta + \varphi \right) ,  \tag{25}\\
& E _ { 2 } = E _ { 0 } ^ { \prime } \cos \left( \omega t - k _ { 0 } x \cos \theta - k _ { 0 } y \sin \theta - \varphi \right) , \tag{26}
\end{align*}
$$

where $k _ { 0 } = \frac { \omega } { c }$ is the wavenumber for waves, propagating at an angle $\pm \theta$ to the planes of the waveguide, and summing them up yileds

$$
\begin{equation*}
E = E _ { 1 } + E _ { 2 } = 2 E _ { 0 } ^ { \prime } \cos \left( \omega t - k _ { 0 } x \cos \theta \right) \cos \left( k _ { 0 } y \sin \theta + \varphi \right) , \tag{27}
\end{equation*}
$$

with the following relation

$$
\begin{equation*}
E _ { 0 } ^ { \prime } = E _ { 0 } / 2 . \tag{28}
\end{equation*}
$$

Note that there should be $\varphi = - \pi / 2$.
3.13 Comparison of the obtained formulas (23) and (27) implies that they coincide if

$$
\begin{align*}
& k _ { x } = k _ { 0 } \cos \theta ,  \tag{29}\\
& k _ { y } = k _ { 0 } \sin \theta . \tag{30}
\end{align*}
$$

3.14 Comparing the values of $k _ { y }$ in formulas (24) and (30), we find

$$
\begin{equation*}
k _ { y } = k _ { 0 } \sin \theta _ { m } = m \frac { \pi } { a } \Rightarrow \sin \theta _ { m } = m \frac { \pi } { a k _ { 0 } } . \tag{31}
\end{equation*}
$$

The wavenumber of the considered waves in vacuum is related to the wavelength by

$$
\begin{equation*}
k _ { 0 } = \frac { 2 \pi } { \lambda } , \tag{32}
\end{equation*}
$$

then the values of the possible angles are given by the formula

$$
\begin{equation*}
\sin \theta _ { m } = m \frac { \pi } { a k _ { 0 } } = m \frac { \lambda } { 2 a } . \tag{33}
\end{equation*}
$$

3.15 Equation (23) implies that the phase velocity of wave propagation in the waveguide is given by the formula

$$
\begin{equation*}
v _ { p } = \frac { \omega } { k _ { x } } = \frac { \omega } { k _ { 0 } \cos \theta } . \tag{34}
\end{equation*}
$$

Expressing the value of the cosine of the angle in terms of its sine, which is determined by formula (33), we obtain

$$
\begin{equation*}
v _ { p } = \frac { \omega } { k _ { 0 } \cos \theta } = \frac { \omega } { k _ { 0 } \sqrt { 1 - \sin ^ { 2 } \theta } } = \frac { \omega } { k _ { 0 } \sqrt { 1 - \left( m \frac { \lambda } { 2 a } \right) ^ { 2 } } } . \tag{35}
\end{equation*}
$$


Finally, using formulas relating frequencies, wavelengths and the speed of light in a vacuum $\frac { \omega } { k _ { 0 } } = c$, $\lambda = \frac { 2 \pi } { \omega } c$, it is derived that

$$
\begin{equation*}
v _ { p } = \frac { \omega } { k _ { 0 } \cos \theta } = \frac { \omega } { k _ { 0 } \sqrt { 1 - \sin ^ { 2 } \theta } } = \frac { c } { \sqrt { 1 - \left( m \frac { \pi c } { \omega a } \right) ^ { 2 } } } . \tag{36}
\end{equation*}
$$

Thus, it turns out that the phase velocity of propagation of an undamped wave in the waveguide is greater than the speed of light in vacuum.
3.16 The propagation velocity of a pulse is the group velocity, therefore, it is determined by formula (19), in which the ratio of the increments can be replaced by the derivative

$$
\begin{equation*}
v _ { g } = \frac { \Delta \omega } { \Delta k } = \frac { d \omega } { d k } = \left( \frac { d k } { d \omega } \right) ^ { - 1 } . \tag{37}
\end{equation*}
$$

To evaluate the velocity using this formula, it is necessary to obtain explicitly the dependence of the wavenumber on the frequency, $k ( \omega )$. To do so, we use the general formula for the phase velocity $v _ { p } = \frac { \omega } { k }$ and obtain

$$
\begin{equation*}
k = \frac { \omega } { v _ { p } } = \frac { \omega } { c } \sqrt { 1 - \left( m \frac { \pi c } { \omega a } \right) ^ { 2 } } = \frac { 1 } { c } \sqrt { \omega ^ { 2 } - \left( m \frac { \pi c } { a } \right) ^ { 2 } } , \tag{38}
\end{equation*}
$$

and the pulse propagation velocity is written as

$$
\begin{equation*}
v = v _ { g } = \left( \frac { d k } { d \omega } \right) ^ { - 1 } = \left( \frac { \omega } { c } \frac { \omega } { \sqrt { \omega ^ { 2 } - \left( m \frac { \pi c } { a } \right) ^ { 2 } } } \right) ^ { - 1 } = c \sqrt { 1 - \left( m \frac { \pi c } { a \omega } \right) ^ { 2 } } . \tag{39}
\end{equation*}
$$

As follows from this formula, the group velocity is naturally less than the speed of light in a vacuum. Also, it should be indicated that this speed is equal to $c \cos \theta$, which is quite obvious.
3.17 Let us turn to formula (33) and substitute the given ratio $a / \lambda = 1.2$

$$
\begin{equation*}
\sin \theta _ { m } = m \frac { \lambda } { 2 a } \approx 0,42 m . \tag{40}
\end{equation*}
$$

Since the sine of any argument does not exceed unity, it follows from the obtained expression that only two modes with $m = 1$ and $m = 2$ can propagate in a given waveguide, and, in other words, the input pulse generate two pulses of these modes in the waveguide. The propagation velocities of pulses in these modes differ markedly. First of all, let us express these velocities in terms of a given ratio $a / \lambda$ in the form

$$
\begin{equation*}
v = c \sqrt { 1 - \left( m \frac { \pi c } { a \omega } \right) ^ { 2 } } = c \sqrt { 1 - \left( m \frac { \lambda } { 2 a } \right) ^ { 2 } } . \tag{41}
\end{equation*}
$$

At the waveguide input, pulses in both modes are excited simultaneously, but since they move at different speeds, as the distance traveled increases, they diverge in time. The number of pulses doubles when pulses in different modes diverge for a time exceeding the pulse duration, hence, the minimum distance $X$ can be found from the condition

$$
\begin{equation*}
\frac { X } { v _ { 2 } } - \frac { X } { v _ { 1 } } = \tau , \tag{42}
\end{equation*}
$$

which leads to the final answer


$$
\begin{equation*}
X = \frac { \tau } { \frac { 1 } { v _ { 2 } } - \frac { 1 } { v _ { 1 } } } = \frac { c \tau } { \frac { 1 } { \sqrt { 1 - \left( \frac { \lambda } { 2 a } \right) ^ { 2 } } } - \frac { 1 } { \sqrt { 1 - \left( 2 \frac { \lambda } { 2 a } \right) ^ { 2 } } } } \approx 1,4 c \tau . \tag{43}
\end{equation*}
$$

3.18 For a waveguide to operate in a single-mode regime, it is necessary to satisfy the following condition

$$
\begin{equation*}
\sin \theta _ { 2 } = 2 \frac { \lambda } { 2 a } > 1 , \tag{44}
\end{equation*}
$$

which yields the inequality

$$
\begin{equation*}
\frac { a } { \lambda } < 1 . \tag{45}
\end{equation*}
$$

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 3.1 | Formula (2): $\left( \omega t _ { 0 } - k ( x + \lambda ) + \varphi \right) - \left( \omega t _ { 0 } - k x + \varphi \right) = 2 \pi$ | 0.2 | 0.8 |
|  | Formula (3): $k = \frac { 2 \pi } { \lambda }$ | 0.2 |  |
|  | Formula (4): $\left( \omega ( t + T ) - k x _ { 0 } + \varphi \right) - \left( \omega t - k x _ { 0 } + \varphi \right) = 2 \pi$ | 0.2 |  |
|  | Formula (5): $\omega = \frac { 2 \pi } { T }$ | 0.2 |  |
| 3.2 | Формула (6): $\omega t - k x + \varphi =$ const | 0.2 | 0.4 |
|  | Formula (7): $v = \frac { d x } { d t } = \frac { \omega } { k }$ | 0.2 |  |
| 3.3 | A family of planes, perpendicular to the wave vector.. | 0.2 | 0.2 |
| 3.4 | Formula (9): $E = E _ { 0 } ^ { \prime } \cos ( \omega t - k x \cos \theta - k y \sin \theta + \varphi )$ | 0.2 | 0.2 |
| 3.5 | Formula (10): $E = 2 E _ { 0 } \cos \left( \left( \omega _ { 0 } + \frac { \Delta \omega } { 2 } \right) t - \left( k _ { 0 } + \frac { \Delta k } { 2 } \right) x \right) \cos \left( \frac { \Delta \omega } { 2 } t - \frac { \Delta k } { 2 } x \right)$ | 0.2 | 0.4 |
|  | Formula (12): $A _ { 0 } ( x , t ) = 2 E _ { 0 } \cos \left( \frac { \Delta \omega } { 2 } t - \frac { \Delta k } { 2 } x \right)$ | 0.2 |  |
| 3.6 | Formula (13): $\frac { \Delta \omega } { 2 } \tau = \pi \Rightarrow \tau = \frac { 2 \pi } { \Delta \omega }$ | 0.2 | 0.4 |
|  | Formula (14): $\tau \Delta v = 1$ | 0.2 |  |
| 3.7 | Formula (15): $\frac { \Delta k } { 2 } L = \pi \quad \Rightarrow \quad L = \frac { 2 \pi } { \Delta k }$ | 0.2 | 0.2 |
| 3.8 | Formula (16): $\left( \omega _ { 0 } t - k _ { 0 } x \right) =$ const | 0.2 | 0.4 |
|  | Formula (17): $v _ { p } = \frac { \omega _ { 0 } } { k _ { 0 } }$ | 0.2 |  |
| 3.9 | Formula (18): $\frac { \Delta \omega } { 2 } t - \frac { \Delta k } { 2 } x = 0$ | 0.2 | 0.4 |
|  | Formula (19): $v _ { g } = \frac { \Delta \omega } { \Delta k }$ | 0.2 |  |
| 3.10 | Formula (20): $\omega = k c$ | 0.2 | 0.6 |
|  | Formula (21): $v _ { p } = \frac { \omega } { k } = c$ | 0.2 |  |
|  | Formula (22): $v _ { g } = \frac { \Delta \omega } { \Delta k } = c = v _ { p }$ | 0.2 |  |


| 3.11 | Formula (24): $k _ { y } = m \frac { \pi } { a }$ | 0.2 | 0.2 |
| :--- | :--- | :--- | :--- |
| 3.12 | Formula (25): $E _ { 1 } = E _ { 0 } ^ { \prime } \cos \left( \omega t - k _ { 0 } x \cos \theta + k _ { 0 } y \sin \theta + \varphi \right)$ | 0.2 | 0.8 |
|  | Formula (26): $E _ { 2 } = E _ { 0 } ^ { \prime } \cos \left( \omega t - k _ { 0 } x \cos \theta - k _ { 0 } y \sin \theta - \varphi \right)$ | 0.2 |  |
|  | Formula (28): $E _ { 0 } ^ { \prime } = E _ { 0 } / 2$ | 0.2 |  |
|  | Condition: $\varphi = - \pi / 2$ | 0.2 |  |
| 3.13 | Formula (29): $k _ { x } = k _ { 0 } \cos \theta$ | 0.2 | 0.4 |
|  | Formula (30): $k _ { y } = k _ { 0 } \sin \theta$ | 0.2 |  |
| 3.14 | Formula (31): $k _ { y } = k _ { 0 } \sin \theta _ { m } = m \frac { \pi } { a } \Rightarrow \sin \theta _ { m } = m \frac { \pi } { a k _ { 0 } }$ | 0.3 | 0.6 |
|  | Formula (33): $\sin \theta _ { m } = m \frac { \pi } { a k _ { 0 } } = m \frac { \lambda } { 2 a }$ | 0.3 |  |
| 3.15 | Formula (34): $v _ { p } = \frac { \omega } { k _ { x } } = \frac { \omega } { k _ { 0 } \cos \theta }$ | 0.3 | 0.6 |
|  | Formula (36): $v _ { p } = \frac { c } { \sqrt { 1 - \left( m \frac { \pi c } { \omega a } \right) ^ { 2 } } }$ | 0.3 |  |
| 3.16 | Formula (37): $v _ { g } = \frac { \Delta \omega } { \Delta k } = \frac { d \omega } { d k } = \left( \frac { d k } { d \omega } \right) ^ { - 1 }$ | 0.3 | 1.0 |
|  | Formula (38): $k = \frac { \omega } { v _ { p } } = \frac { \omega } { c } \sqrt { 1 - \left( m \frac { \pi c } { \omega a } \right) ^ { 2 } } = \frac { 1 } { c } \sqrt { \omega ^ { 2 } - \left( m \frac { \pi c } { a } \right) ^ { 2 } }$ | 0.4 |  |
|  | Formula (39): $v _ { g } = c \sqrt { 1 - \left( m \frac { \pi c } { a \omega } \right) ^ { 2 } }$ | 0.3 |  |
| 3.17 | Формула (40): $\sin \theta _ { m } \approx 0,42 m$ | 0.2 | 1.8 |
|  | Possible modes with $m = 1$ and $m = 2$ | 0.4 |  |
|  | Formula (41): $v = c \sqrt { 1 - \left( m \frac { \lambda } { 2 a } \right) ^ { 2 } }$ | 0.4 |  |
|  | Formula (42): $\frac { X } { v _ { 2 } } - \frac { X } { v _ { 1 } } = \tau$ | 0.4 |  |
|  | Formula (43): $X \approx 1,4 c \tau$ | 0.4 |  |
| 3.18 | Formula (44): $\sin \theta _ { 2 } = 2 \frac { \lambda } { 2 a } > 1$ | 0.3 | 0.6 |
|  | Formula (45): $\frac { a } { \lambda } < 1$ | 0.3 |  |
| Total |  |  | 10.0 |
