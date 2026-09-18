---
id: solution-ocr-izho-2010-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2010_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2010-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Theoretical Question 2

## Solution

1. [1 point] The total inertia moment with respect to the rotation axis is a sum of the inertia moment of the coil itself and the metallic wire

$$
\begin{equation*}
J = J _ { 0 } + m r ^ { 2 } . \tag{1}
\end{equation*}
$$

2. [1 point] The equation of the coil rotation as a rigid bode takes the form

$$
\begin{equation*}
J \varepsilon = J \frac { d \omega } { d t } = - M \tag{2}
\end{equation*}
$$

where $\varepsilon$ is the angular acceleration.
It follows from equation (2) that the coil stops at the time moment

$$
\begin{equation*}
t _ { 0 } = \frac { \omega _ { 0 } J } { M } . \tag{3}
\end{equation*}
$$

Finally, the dependence of the angular velocity on time $t$ is found as

$$
\omega ( t ) = \left\{ \begin{array} { l l }
\omega _ { 0 } - \frac { M } { J } t , & t < t _ { 0 } = \frac { \omega _ { 0 } J } { M }  \tag{4}\\
0 , & t \geq t _ { 0 }
\end{array} . \right.
$$

3. [1 point] At the stoppage of the coil, electrons keep on moving due to their inertia, as a result the galvanometer registers the electric current.. Let $a = \varepsilon r$ be the linear acceleration of the coil rim. If the coil is tightly reeled up and the wire is rather thin that linear acceleration is directed along the wire. At the stoppage process electrons are subjected to the inertial force $- m _ { e } a$ opposite to the linear acceleration of the coil. This inertial force can be interpreted as an effective electric field

$$
\begin{equation*}
E _ { e f f } = - \frac { m _ { e } a } { e } . \tag{5}
\end{equation*}
$$

Thus, the effective electromotive force in the coil caused by the inertia of freely moving electrons is obtained as

$$
\begin{equation*}
\operatorname { Emf } = E _ { e f f } \ell = - \frac { m _ { e } } { e } a \ell . \tag{6}
\end{equation*}
$$

Therefore, the Ohm's law for the electric circuit is written as

$$
\begin{equation*}
I R = - \text { Emf } = \frac { m _ { e } a \ell } { e } . \tag{7}
\end{equation*}
$$

Taking into account solution of 2, one gets

$$
I ( t ) = \left\{ \begin{array} { l l }
\frac { M m _ { e } r \ell } { e J R } , & t < t _ { 0 } = \frac { \omega _ { 0 } J } { M } .  \tag{8}\\
0 , & t \geq t _ { 0 }
\end{array} . \right.
$$

4. [2 points] The electric charge, registered by the galvanometer, is found from (8) as

$$
\begin{equation*}
Q = I t _ { 0 } = \frac { m _ { e } \omega _ { 0 } r \ell } { e R } . \tag{9}
\end{equation*}
$$

The charge-to-mass ratio of electron is simply obtained as

$$
\begin{equation*}
\frac { e } { m _ { e } } = \frac { \omega _ { 0 } r \ell } { R Q } . \tag{10}
\end{equation*}
$$


5. [1 point] In this case equation (7) is rewritten as follows

$$
\begin{equation*}
L \frac { d I } { d t } + I R = - \operatorname { Emf } = \frac { m _ { e } a \ell } { e } . \tag{11}
\end{equation*}
$$

where $L = \mu _ { 0 } n ^ { 2 } \pi r ^ { 2 } h$ is the coil inductance.
It follows from equation (11) that the maximal electric current strength is

$$
\begin{equation*}
I _ { \max } = \frac { M m _ { e } r \ell } { e J R } . \tag{12}
\end{equation*}
$$

The qualitative dependence of the electric current strength is plotted below
![](../../../figures/solution-ocr/18b03f7db06d01cd0335296a.jpg)
6. [1 point] The maximal electromagnetic energy stored in the coil equals

$$
\begin{equation*}
W _ { 0 } = \frac { L I _ { \max } ^ { 2 } } { 2 } = \frac { \mu _ { 0 } \pi h } { 2 } \left( \frac { n M m _ { e } r ^ { 2 } \ell } { e J R } \right) ^ { 2 } . \tag{13}
\end{equation*}
$$

7. [3 points] In the stationary regime the magnetic field inductance

$$
\begin{equation*}
B = \mu _ { 0 } n I \tag{14}
\end{equation*}
$$

remains constant in the coil and the electric field is absent. This is not true for initial time moments while the electric current increases from 0 to its maximal value determined by formula (12). According to (14) the varying magnetic field generates the vortex electric field which causes the flux of the electromagnetic energy to appear. The strength of the vortex electric field at the lateral surface of the coil is found from the electromagnetic induction law of Faradey

$$
\begin{equation*}
E m f = E 2 \pi r = - \frac { d \Phi } { d t } = \frac { d } { d t } \left( B \pi r ^ { 2 } \right) , \tag{15}
\end{equation*}
$$

as

$$
\begin{equation*}
E = \frac { r } { 2 } \frac { d B } { d t } = \frac { \mu _ { 0 } n r } { 2 } \frac { d I } { d t } . \tag{16}
\end{equation*}
$$

The mutual orientation of the vectors $\vec { E } , \vec { B }$ и $\vec { S }$ is shown below.
![](../../../figures/solution-ocr/766a4cfa26682f31295261ec.jpg)
Substituting expressions (14) and |(16) into the expression for the Pointing vector and taking into account that the vectors $\vec { E }$ and $\vec { B }$ are perpendicular, one obtains

$$
\begin{equation*}
S = \frac { \mu _ { 0 } n ^ { 2 } r } { 2 } I \frac { d I } { d t } . \tag{17}
\end{equation*}
$$

Thus, the electromagnetic energy, going inward the lateral surface of the coil while the electric current increases, is given by the summation (or integrating) of (17) as

$$
\begin{equation*}
W = \frac { \mu _ { 0 } n ^ { 2 } r } { 4 } I _ { \max } ^ { 2 } 2 \pi r h = \frac { \mu _ { 0 } \pi h } { 2 } \left( \frac { n M m _ { e } r ^ { 2 } \ell } { e J R } \right) ^ { 2 } . \tag{18}
\end{equation*}
$$


It is obvious that the same amount of the electromagnetic energy goes outward while the electric current strength decreases

$$
\begin{equation*}
W ^ { \prime } = \frac { \mu _ { 0 } n ^ { 2 } r } { 4 } I _ { \max } ^ { 2 } 2 \pi r h = \frac { \mu _ { 0 } \pi h } { 2 } \left( \frac { n M m _ { e } r ^ { 2 } \ell } { e J R } \right) ^ { 2 } . \tag{19}
\end{equation*}
$$
