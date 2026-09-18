---
id: solution-ocr-izho-2019-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2019_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2019-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Conductors in an electric field ( $\mathbf { 1 0 , 0 }$ points) <br> Conductive ball and point charge

2.1 The electric potential of the point-like charge $q$ is equal to

$$
\begin{equation*}
\varphi _ { 1 } = \frac { q } { 4 \pi \varepsilon _ { 0 } \sqrt { ( l - x ) ^ { 2 } + y ^ { 2 } } } , \tag{1}
\end{equation*}
$$

whereas the electric potential of the fictitious point-like charge $Q$ is found to be

$$
\begin{equation*}
\varphi _ { 2 } = \frac { Q } { 4 \pi \varepsilon _ { 0 } \sqrt { ( x - a ) ^ { 2 } + y ^ { 2 } } } . \tag{2}
\end{equation*}
$$

According to the principle of superposition, the full potential is just a sum of equations (1) and (2)

$$
\begin{equation*}
\varphi = \varphi _ { 1 } + \varphi _ { 2 } = \frac { q } { 4 \pi \varepsilon _ { 0 } \sqrt { ( l - x ) ^ { 2 } + y ^ { 2 } } } + \frac { Q } { 4 \pi \varepsilon _ { 0 } \sqrt { ( x - a ) ^ { 2 } + y ^ { 2 } } } . \tag{3}
\end{equation*}
$$

2.2 The equation of the circle corresponding to the surface of the ball is written as

$$
\begin{equation*}
x ^ { 2 } + y ^ { 2 } = R ^ { 2 } . \tag{4}
\end{equation*}
$$

Eliminating $y$ with the help of relation (4) and substituting it into formula (3) yield

$$
\begin{equation*}
\varphi = \frac { q } { 4 \pi \varepsilon _ { 0 } \sqrt { l ^ { 2 } - 2 l x + R ^ { 2 } } } + \frac { Q } { 4 \pi \varepsilon _ { 0 } \sqrt { a ^ { 2 } - 2 a x + R ^ { 2 } } } . \tag{5}
\end{equation*}
$$

2.3 The potential of the ball is zero, since it is grounded, i.e.

$$
\begin{equation*}
\varphi = 0 . \tag{6}
\end{equation*}
$$

Equating expression (5) to zero, it can be rewritten in the form

$$
\begin{equation*}
\frac { Q } { q } = - \frac { \sqrt { a ^ { 2 } - 2 a x + R ^ { 2 } } } { \sqrt { l ^ { 2 } - 2 l x + R ^ { 2 } } } = \beta = \text { const } < 0 . \tag{7}
\end{equation*}
$$

Raising equation (7) in the square, one gets the following equation

$$
\begin{equation*}
2 x \left( l \beta ^ { 2 } - a \right) + a ^ { 2 } + R ^ { 2 } - \beta ^ { 2 } \left( l ^ { 2 } + R ^ { 2 } \right) = 0 . \tag{8}
\end{equation*}
$$

Equation (8) should be satisfied for all $x \in ( - R , R )$, and this is possible only if the coefficient at the linear term $x$ and the free term are separately equal to zero, i.e.

$$
\begin{align*}
& l \beta ^ { 2 } - a = 0 ,  \tag{9}\\
& a ^ { 2 } + R ^ { 2 } - \beta ^ { 2 } \left( l ^ { 2 } + R ^ { 2 } \right) = 0 . \tag{10}
\end{align*}
$$

Solving the set of equations (9) and (10), the following two solutions are obtained

$$
\begin{align*}
& a = l , \quad \beta = - 1 ,  \tag{11}\\
& a = \frac { R ^ { 2 } } { l } , \quad \beta = - \frac { R } { l } . \tag{12}
\end{align*}
$$

Only solution (12) is nonzero, so we finally get

$$
\begin{align*}
& Q = - q \frac { R } { l } ,  \tag{13}\\
& a = \frac { R ^ { 2 } } { l } . \tag{14}
\end{align*}
$$

2.4 The force acting on the point-like charge reads as

$$
\begin{equation*}
F = \frac { q ^ { 2 } R l } { 4 \pi \varepsilon _ { 0 } \left( l ^ { 2 } - R ^ { 2 } \right) ^ { 2 } } , \tag{15}
\end{equation*}
$$

and, therefore, the work sought is found by integrating as

$$
\begin{equation*}
A = \int _ { l } ^ { \infty } F d l = \frac { q ^ { 2 } R } { 8 \pi \varepsilon _ { 0 } \left( l ^ { 2 } - R ^ { 2 } \right) } . \tag{16}
\end{equation*}
$$

2.5 Let the point-like charge be slowly moved from the initial position to infinity such that the resulting current strength in the ball is negligibly small and the release of Joule heat can be omitted. Let $W _ { q }$ be the energy of the point-like charge $q , W _ { Q }$ be the sought interaction energy of induced


charges, $W _ { Q q }$ be the interaction energy of the point charge $q$ with the induced charges, which is simply obtained as

$$
\begin{equation*}
W _ { Q q } = - \frac { q ^ { 2 } R } { 4 \pi \varepsilon _ { 0 } \left( l ^ { 2 } - R ^ { 2 } \right) } . \tag{17}
\end{equation*}
$$

When the charge is removed to infinity, the law of energy conservation must be satisfied, which in this case has the form

$$
\begin{equation*}
W _ { q } + W _ { Q } + W _ { Q q } + A = W _ { q } . \tag{18}
\end{equation*}
$$

The set of equations (16)-(18) finally provides the following result

$$
\begin{equation*}
W _ { Q } = \frac { q ^ { 2 } R } { 8 \pi \varepsilon _ { 0 } \left( l ^ { 2 } - R ^ { 2 } \right) } . \tag{19}
\end{equation*}
$$

## Conductive ball in a uniform electric field

2.6 To find the electric field inside a uniformly charged ball, the Gauss theorem is written for a spherical volume of radius $r < R$. The charge inside this volume is easily derived as

$$
\begin{equation*}
q = \frac { 4 } { 3 } \pi r ^ { 3 } \rho , \tag{20}
\end{equation*}
$$

and the electric field flux is found to be

$$
\begin{equation*}
\Phi _ { E } = 4 \pi r ^ { 2 } E . \tag{21}
\end{equation*}
$$

According to the Gauss theorem

$$
\begin{equation*}
\Phi _ { E } = \frac { q } { \varepsilon _ { 0 } } , \tag{22}
\end{equation*}
$$

which ultimately entails

$$
\begin{equation*}
\vec { E } = \frac { \rho } { 3 \varepsilon _ { 0 } } \vec { r } . \tag{23}
\end{equation*}
$$

The last expression takes into account that the electric field strength vector is collinear to the vector $\vec { r }$.
2.7 Now consider the two fictitious balls with the bulk charge densities of opposite signs and evaluate the electric field in the domain of their intersection. Take an arbitrary point inside this domain and draw the radii of the vectors from the centers of the balls, denoting them $\overrightarrow { r _ { + } }$and $\overrightarrow { r _ { - } }$, respectively. Then, applying formula (23) for each ball results in

$$
\begin{align*}
& \overrightarrow { E _ { + } } = \frac { \rho } { 3 \varepsilon _ { 0 } } \overrightarrow { r _ { + } } ,  \tag{24}\\
& \overrightarrow { E _ { - } } = - \frac { \rho } { 3 \varepsilon _ { 0 } } \overrightarrow { r _ { - } } . \tag{25}
\end{align*}
$$

The net electric field is found with the help of the superposition principle as

$$
\begin{equation*}
\vec { E } = \frac { \rho } { 3 \varepsilon _ { 0 } } \left( \overrightarrow { r _ { + } } - \overrightarrow { r _ { - } } \right) = \frac { \rho } { 3 \varepsilon _ { 0 } } \vec { a } , \tag{26}
\end{equation*}
$$

where $\vec { a }$ stands for the vector, drawn from the center of the negatively charged ball to the center of the positively charged ball.
2.8 The field strength inside the conducting ball must be zero. The induced charges create, according to formula (26), a uniform electric field, which must completely compensate for the external electric field, whence we obtain that

$$
\begin{equation*}
\rho a = 3 \varepsilon _ { 0 } E _ { 0 } . \tag{27}
\end{equation*}
$$

The charges of the fictitious balls are fully compensated with the exception of a thin layer near their surfaces, which can be considered a surface charge. The layer thickness $\delta$ depends on the angle $\theta$ and, due to the smallness of $a$, is equal to

$$
\begin{equation*}
\delta = a \cos \theta . \tag{28}
\end{equation*}
$$

Hence, the magnitude of the surface charge near the angle $\theta$ is equal to

$$
\begin{equation*}
\sigma = \frac { \rho V } { S } = \frac { \rho S \delta } { S } = \rho \delta . \tag{29}
\end{equation*}
$$

It immediately follows from equations (27)-(29) that

$$
\begin{equation*}
\sigma = 3 \varepsilon _ { 0 } E _ { 0 } \cos \theta . \tag{30}
\end{equation*}
$$

2.9 Consider a thin cylinder near the surface of the conductor and apply the Gauss theorem to it. Since the field inside the conductor is absent, and is directed normally just outside of it, then according to the Gauss theorem


$$
\begin{equation*}
E S = \frac { \sigma S } { \varepsilon _ { 0 } } \tag{31}
\end{equation*}
$$

which yields

$$
\begin{equation*}
E = 3 E _ { 0 } \cos \theta . \tag{32}
\end{equation*}
$$

## Conductive ball and charged ring

2.10 The conducting ball is very small, so that the electric field of the ring $E$ in its vicinity can be considered almost uniform. It has been shown in the previous part of this problem that its polarization can be represented as two fictitious balls of opposite charge. These two balls behave in an external field as a dipole with the moment

$$
\begin{equation*}
\vec { p } = q \vec { a } , \tag{33}
\end{equation*}
$$

where

$$
\begin{equation*}
q = \rho \frac { 4 } { 3 } \pi r ^ { 3 } . \tag{34}
\end{equation*}
$$

Using (27), formulas (33) and (34) produce

$$
\begin{equation*}
\vec { p } = 4 \pi r ^ { 3 } \varepsilon _ { 0 } \vec { E } , \tag{35}
\end{equation*}
$$

Let us evaluate the electric field of the ring $E$ in the vicinity of the ball as a function of its distance $z$ to the center. Obviously, the ring field is directed along the needle. Dividing the ring into small parts that carry an electric charge $\Delta q _ { i }$ the projection of their field on the direction of the needle has the form

$$
\begin{equation*}
\Delta E _ { Z } = \frac { \Delta q _ { i } \cos \alpha } { 4 \pi \varepsilon _ { 0 } \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 2 } } . \tag{36}
\end{equation*}
$$

Taking into account

$$
\begin{equation*}
\cos \alpha = \frac { z } { \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 1 / 2 } } \tag{37}
\end{equation*}
$$

and summing over all elements of the ring, one gets

$$
\begin{equation*}
E ( z ) = \frac { q z } { 4 \pi \varepsilon _ { 0 } \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 3 / 2 } } . \tag{38}
\end{equation*}
$$

The force acting on the dipole is obtained as

$$
\begin{equation*}
F = q E ( z + a ) - q E ( z ) = q a \frac { d E } { d z } = p \frac { d E } { d z } . \tag{39}
\end{equation*}
$$

Substituting formulas (35) and (38) into (39) gives rise to

$$
\begin{equation*}
F = \frac { q ^ { 2 } r ^ { 3 } z \left( R ^ { 2 } - 2 z ^ { 2 } \right) } { 4 \pi \varepsilon _ { 0 } \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 4 } } . \tag{40}
\end{equation*}
$$

It follows from expression (40) that there are three equilibrium positions, which are determined by the points

$$
\begin{align*}
& z _ { 1 } = 0  \tag{41}\\
& z _ { 2,3 } = \pm \frac { R } { \sqrt { 2 } } . \tag{42}
\end{align*}
$$

A simple analysis proves that the equilibrium position (41) is unstable, and the symmetric positions (42) are both stable.

Near the position of the stable equilibrium, expression (40) for the force simplifies to

$$
\begin{equation*}
F = - \frac { 8 q ^ { 2 } r ^ { 3 } x } { 81 \pi \varepsilon _ { 0 } R ^ { 6 } } , \tag{43}
\end{equation*}
$$

where

$$
\begin{equation*}
x = z - \frac { R } { \sqrt { 2 } } \ll R . \tag{44}
\end{equation*}
$$

Newton's equation for the motion of the ball along the needle at small deviations $x$ has the form

$$
\begin{equation*}
m \ddot { x } + \frac { 8 q ^ { 2 } r ^ { 3 } } { 81 \pi \varepsilon _ { 0 } R ^ { 6 } } x = 0 , \tag{45}
\end{equation*}
$$

which is a harmonic equation with the frequency

$$
\begin{equation*}
\omega = \sqrt { \frac { 8 q ^ { 2 } r ^ { 3 } } { 81 \pi \varepsilon _ { 0 } m R ^ { 6 } } } . \tag{46}
\end{equation*}
$$

2.11 There is no need to integrate formula (40). In the initial position, the conducting ball is not polarized and in the final state it is also not polarized, since at zero and at infinity separations the


electric field of the ring vanishes. Therefore, it is immediately inferred from the law of energy conservation that

$$
\begin{equation*}
A = 0 . \tag{47}
\end{equation*}
$$

It is natural that integrating expression (40) from zero to infinity gives the same answer.

| Part | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 2.1 | Formula (1) $\varphi _ { 1 } = \frac { q } { 4 \pi \varepsilon _ { 0 } \sqrt { ( l - x ) ^ { 2 } + y ^ { 2 } } }$ | 0,2 | 0,6 |
|  | Formula (2) $\varphi _ { 2 } = \frac { Q } { 4 \pi \varepsilon _ { 0 } \sqrt { ( x - a ) ^ { 2 } + y ^ { 2 } } }$ | 0,2 |  |
|  | Formula (3) $\varphi = \varphi _ { 1 } + \varphi _ { 2 } = \frac { q } { 4 \pi \varepsilon _ { 0 } \sqrt { ( l - x ) ^ { 2 } + y ^ { 2 } } } + \frac { Q } { 4 \pi \varepsilon _ { 0 } \sqrt { ( x - a ) ^ { 2 } + y ^ { 2 } } }$ | 0,2 |  |
| 2.2 | Formula (4) $x ^ { 2 } + y ^ { 2 } = R ^ { 2 }$ | 0,2 | 0,4 |
|  | Formula (5) $\varphi = \frac { q } { 4 \pi \varepsilon _ { 0 } \sqrt { l ^ { 2 } - 2 l x + R ^ { 2 } } } + \frac { Q } { 4 \pi \varepsilon _ { 0 } \sqrt { a ^ { 2 } - 2 a x + R ^ { 2 } } }$ | 0,2 |  |
| 2.3 | Formula (6) $\varphi = 0$ | 0,2 | 1,8 |
|  | Formula (7) $\frac { Q } { q } = - \frac { \sqrt { a ^ { 2 } - 2 a x + R ^ { 2 } } } { \sqrt { l ^ { 2 } - 2 l x + R ^ { 2 } } } = \beta =$ const $< 0$ | 0,2 |  |
|  | Formula (8) $2 x \left( l \beta ^ { 2 } - a \right) + a ^ { 2 } + R ^ { 2 } - \beta ^ { 2 } \left( l ^ { 2 } + R ^ { 2 } \right) = 0$ | 0,2 |  |
|  | Formula (9) $l \beta ^ { 2 } - a = 0$ | 0,2 |  |
|  | Formula (10) $a ^ { 2 } + R ^ { 2 } - \beta ^ { 2 } \left( l ^ { 2 } + R ^ { 2 } \right) = 0$ | 0,2 |  |
|  | Formula (11) $a = l , \quad \beta = - 1$ | 0,2 |  |
|  | Formula (12) $a = \frac { R ^ { 2 } } { l } , \quad \beta = - \frac { R } { l }$ | 0,2 |  |
|  | Formula (13) $Q = - q \frac { R } { l }$ | 0,2 |  |
|  | Formula (14) $a = \frac { R ^ { 2 } } { l }$ | 0,2 |  |
| 2.4 | Formula (15) $F = \frac { q ^ { 2 } R l } { 4 \pi \varepsilon _ { 0 } \left( l ^ { 2 } - R ^ { 2 } \right) ^ { 2 } }$ | 0,2 | 0,4 |
|  | Formula (16) $A = \int _ { l } ^ { \infty } F d l = \frac { q ^ { 2 } R } { 8 \pi \varepsilon _ { 0 } \left( l ^ { 2 } - R ^ { 2 } \right) }$ | 0,2 |  |
| 2.5 | Formula (17) $W _ { Q q } = - \frac { q ^ { 2 } R } { 4 \pi \varepsilon _ { 0 } \left( l ^ { 2 } - R ^ { 2 } \right) }$ | 0,2 | 0,6 |
|  | Formula (18) $W _ { q } + W _ { Q } + W _ { Q q } + A = W _ { q }$ | 0,1 |  |
|  | Formula (19) $W _ { Q } = \frac { q ^ { 2 } R } { 8 \pi \varepsilon _ { 0 } \left( l ^ { 2 } - R ^ { 2 } \right) }$ | 0,3 |  |
| 2.6 | Formula (20) $q = \frac { 4 } { 3 } \pi r ^ { 3 } \rho$ | 0,1 | 0,4 |
|  | Formula (21) $\Phi _ { E } = 4 \pi r ^ { 2 } E$ | 0,1 |  |
|  | Formula (22) $\Phi _ { E } = \frac { q } { \varepsilon _ { 0 } }$ | 0,1 |  |
|  | Formula (23) $\vec { E } = \frac { \rho } { 3 \varepsilon _ { 0 } } \vec { r }$ | 0,1 |  |
| 2.7 | Formula (24) $\overrightarrow { E _ { + } } = \frac { \rho } { 3 \varepsilon _ { 0 } } \overrightarrow { r _ { + } }$ | 0,1 | 0,4 |
|  | Formula (25) $\overrightarrow { E _ { - } } = - \frac { \rho } { 3 \varepsilon _ { 0 } } \overrightarrow { r _ { - } }$ | 0,1 |  |
|  | Formula (26) $\vec { E } = \frac { \rho } { 3 \varepsilon _ { 0 } } \left( \overrightarrow { r _ { + } } - \overrightarrow { r _ { - } } \right) = \frac { \rho } { 3 \varepsilon _ { 0 } } \vec { a }$ | 0,2 |  |
| 2.8 | Formula (27) $\rho a = 3 \varepsilon _ { 0 } E _ { 0 }$ | 0,2 | 0,8 |
|  | Formula (28) $\delta = a \cos \theta$ | 0,2 |  |
|  | Formula (29) $\sigma = \frac { \rho V } { S } = \frac { \rho S \delta } { S } = \rho \delta$ | 0,2 |  |
|  | Formula (30) $\sigma = 3 \varepsilon _ { 0 } E _ { 0 } \cos \theta$ | 0,2 |  |
| 2.9 | Formula (31) $E S = \frac { \sigma S } { \varepsilon _ { 0 } }$ | 0,2 | 0,4 |


|  | Formula (32) $E = 3 E _ { 0 } \cos \theta$ | 0,2 |  |
| :--- | :--- | :--- | :--- |
| 2.10 | Formula (33) $\vec { p } = q \vec { a }$ | 0,4 | 3,8 |
|  | Formula (34) $q = \rho \frac { 4 } { 3 } \pi r ^ { 3 }$ | 0,2 |  |
|  | Formula (35) $\vec { p } = 4 \pi r ^ { 3 } \varepsilon _ { 0 } \vec { E }$ | 0,4 |  |
|  | Formula (36) $\Delta E _ { Z } = \frac { \Delta q _ { i } \cos \alpha } { 4 \pi \varepsilon _ { 0 } \left( Z ^ { 2 } + R ^ { 2 } \right) ^ { 2 } }$ | 0,2 |  |
|  | Formula (37) $\cos \alpha = \frac { z } { \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 1 / 2 } }$ | 0,2 |  |
|  | Formula (38) $E ( z ) = \frac { q z } { 4 \pi \varepsilon _ { 0 } \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 3 / 2 } }$ | 0,4 |  |
|  | Formula (39) $F = q E ( z + a ) - q E ( z ) = q a \frac { d E } { d z } = p \frac { d E } { d z }$ | 0,4 |  |
|  | Formula (40) $F = \frac { q ^ { 2 } r ^ { 3 } z \left( R ^ { 2 } - 2 z ^ { 2 } \right) } { 4 \pi \varepsilon _ { 0 } \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 4 } }$ | 0,2 |  |
|  | Formula (41) $z _ { 1 } = 0$ | 0,2 |  |
|  | Formula (42) $z _ { 2,3 } = \pm \frac { R } { \sqrt { 2 } }$ | 0,2 |  |
|  | Formula (43) $F = - \frac { 8 q ^ { 2 } r ^ { 3 } x } { 81 \pi \varepsilon _ { 0 } R ^ { 6 } }$ | 0,4 |  |
|  | Formula (44) $x = z - \frac { R } { \sqrt { 2 } } \ll R$. | 0,2 |  |
|  | Formula (45) $\ddot { x } + \frac { 8 q ^ { 2 } r ^ { 3 } } { 81 \pi \varepsilon _ { 0 } R ^ { 6 } } x = 0$ | 0,2 |  |
|  | Formula (46) $\omega = \sqrt { \frac { 8 q ^ { 2 } r ^ { 3 } } { 81 \pi \varepsilon _ { 0 } m R ^ { 6 } } }$ | 0,2 |  |
| 2.11 | Formula (47) $A = 0$ | 0.4 | 0,4 |
|  | Formal integral of formula (40) without the correct answer | (0.1) |  |
| Total |  |  | 10,0 |
