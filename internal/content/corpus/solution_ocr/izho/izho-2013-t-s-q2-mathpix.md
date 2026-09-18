---
id: solution-ocr-izho-2013-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2013_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2013-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2 (10 points) Square frame

1. In physics, it is agreed that the magnetic field lines begin at the north pole and ends at the South pole. Therefore, the drawing should look like this
![](../../../figures/solution-ocr/0c70a6e144f04e3313cb7888.jpg)
2. Whentheframe is removedfromtheuniformmagneticfield,the induced emf can be found from the Faraday law

$$
\begin{equation*}
\varepsilon = - \frac { d \Phi } { d t } = - \frac { d } { d t } ( \operatorname { Bax } ) = \operatorname { Bav } ( t ) . \tag{1}
\end{equation*}
$$

On the other hand Ohm's law is written as

$$
\begin{equation*}
\varepsilon = I R , \tag{2}
\end{equation*}
$$

Thus, we get the relation between the current and the velocity

$$
\begin{equation*}
I ( t ) = \frac { B a v ( t ) } { R } . \tag{3}
\end{equation*}
$$

The frame is affectedbythe force that pullsthe frame back into the magnetic field.It isfoundfromAmpere'slaw

$$
\begin{equation*}
F _ { A } ( t ) = B a I ( t ) = \frac { B ^ { 2 } a ^ { 2 } \mathrm { v } ( t ) } { R } . \tag{4}
\end{equation*}
$$

Thus, the equation of motion is written as

$$
\begin{equation*}
m \frac { d v ( t ) } { d t } = F - \frac { B ^ { 2 } a ^ { 2 } v ( t ) } { R } . \tag{5}
\end{equation*}
$$

Solutionofequation (5) with the initial condition $\mathrm { v } ( 0 ) = 0$ is

$$
\begin{equation*}
\mathrm { v } ( t ) = \frac { F R } { B ^ { 2 } a ^ { 2 } } \left[ 1 - \exp \left( - \frac { B ^ { 2 } a ^ { 2 } } { m R } t \right) \right] . \tag{6}
\end{equation*}
$$

3. Integrating (6) we get following relation

$$
\begin{equation*}
x ( t ) = \int _ { 0 } ^ { t } \mathrm { v } ( t ) d t = \frac { F R } { B ^ { 2 } a ^ { 2 } } \left[ t + \frac { m R } { B ^ { 2 } a ^ { 2 } } \left( \exp \left( - \frac { B ^ { 2 } a ^ { 2 } } { m R } t \right) - 1 \right) \right] . \tag{7}
\end{equation*}
$$

When the frame leaves the magnetic field

$$
\begin{equation*}
x \left( t _ { 0 } \right) = a , \tag{8}
\end{equation*}
$$

Thus, we get an equation for $t _ { 0 }$

$$
\begin{equation*}
t _ { 0 } + \frac { m R } { B ^ { 2 } a ^ { 2 } } \left[ \exp \left( - \frac { B ^ { 2 } a ^ { 2 } } { m R } t _ { 0 } \right) - 1 \right] = \frac { B ^ { 2 } a ^ { 3 } } { F R } . \tag{9}
\end{equation*}
$$

Equation (9) istranscendentalandcannotbesolvedanalytically. Toestimate $t _ { 0 }$ wecansee from equation (6) thatforthe characteristic time $\tau \sim m R / B ^ { 2 } a ^ { 2 }$ the frame reaches the steady velocity $\mathrm { v } _ { 0 } = F R / B ^ { 2 } a ^ { 2 }$. Weassumethatfrom 0 to $\tau$ the framemoveswiththe constantacceleration $w = F / m$, then it moves with the steady velocity $\mathrm { v } _ { 0 }$. Hence, we get an estimate

$$
\begin{equation*}
t _ { 0 } \sim \tau + \frac { a - \frac { w t ^ { 2 } } { 2 } } { \mathrm { v } _ { 0 } } = \frac { B ^ { 2 } a ^ { 3 } } { F R } + \frac { m R } { 2 B ^ { 2 } a ^ { 2 } } = 10.25 \mathrm { c } . \tag{10}
\end{equation*}
$$

Note that numerical solution of equation (9) gives $t _ { 0 } \approx 10.5 \mathrm { c }$.
4. Afterthe $t _ { 0 }$ theframe continues its motion with the constant acceleration $w$. At the same time the speed should be a continuous function of time, so the time dependence is written as

$$
\mathrm { v } ( t ) = \left\{ \begin{array} { l l }
\frac { F R } { B ^ { 2 } a ^ { 2 } } \left[ 1 - \exp \left( - \frac { B ^ { 2 } a ^ { 2 } } { m R } t \right) \right] , & t < t _ { 0 }  \tag{11}\\
\frac { F R } { B ^ { 2 } a ^ { 2 } } + \frac { F } { m } \left( t - t _ { 0 } \right) , & t \geq t _ { 0 }
\end{array} . \right.
$$

The corresponding graph is plotted as


![](../../../figures/solution-ocr/5cc00e21249b058416f09f40.jpg)
5. Whilethe frameisbetweenthe magneticpoles, thecurrent is determined by the equations (3) and (6). After that, the frame current vanishesinstantaneously. Thus,

$$
I ( t ) = \left\{ \begin{array} { l l }
\frac { F } { B a } \left[ 1 - \exp \left( - \frac { B ^ { 2 } a ^ { 2 } } { m R } t \right) \right] , & t < t _ { 0 }  \tag{12}\\
0 , & t \geq t _ { 0 }
\end{array} . \right.
$$

The corresponding graph is plotted as
![](../../../figures/solution-ocr/334c90764470f018ed67422e.jpg)
6. As in the previous part, when the frame is removed from the constant magnetic field,theemf (1) is induced.There is anotheremfappearing due to the self-induction of the superconductive frame

$$
\begin{equation*}
\varepsilon _ { L } = - L \frac { d I } { d t } . \tag{13}
\end{equation*}
$$

Since the resistance of the superconductive frame is zero, Ohm's law for the frame becomes

$$
\begin{equation*}
\operatorname { Bav } ( t ) - L \frac { d I } { d t } = 0 . \tag{14}
\end{equation*}
$$

Taking into accountthat $I = 0$ when $x = 0$ we get from equations (13) and (14)

$$
\begin{equation*}
I = \frac { B a x } { L } . \tag{15}
\end{equation*}
$$

The corresponding force is given by

$$
\begin{equation*}
F _ { A } = B a I = \frac { B ^ { 2 } a ^ { 2 } x } { L } . \tag{16}
\end{equation*}
$$

Thus,the equation of motion is written as

$$
\begin{equation*}
m \frac { d ^ { 2 } x } { d t ^ { 2 } } = F - \frac { B ^ { 2 } a ^ { 2 } } { L } x . \tag{17}
\end{equation*}
$$

Expression (17) isan equation ofsimpleharmonicoscillationswith the frequency


$$
\begin{equation*}
\omega = \frac { B a } { \sqrt { m L } } , \tag{18}
\end{equation*}
$$

that are performed near the new equilibrium position with the coordinate

$$
\begin{equation*}
x _ { 0 } = \frac { F L } { B ^ { 2 } a ^ { 2 } } . \tag{19}
\end{equation*}
$$

Obviously, theforce $F$ is minimal when

$$
\begin{equation*}
x _ { 0 } = a / 2 , \tag{20}
\end{equation*}
$$

whence

$$
\begin{equation*}
F _ { \min } = \frac { B ^ { 2 } a ^ { 3 } } { 2 L } = 5.00 \times 10 ^ { - 5 } \mathrm { H } . \tag{21}
\end{equation*}
$$

7. From previoussection 6, the frame reaches the edge of the magnet for a half period of oscillations, thus

$$
\begin{equation*}
t _ { 0 } = \frac { \pi } { \omega } = \pi \frac { \sqrt { m L } } { B a } = 7.02 \mathrm { c } . \tag{22}
\end{equation*}
$$

8. Solutionofequation (17) with the initial conditions $x ( 0 ) = 0 , x ^ { \prime } ( 0 ) = 0$ is written as

$$
\begin{equation*}
x ( t ) = \frac { F _ { \min } L } { B ^ { 2 } a ^ { 2 } } ( 1 - \cos \omega t ) = \frac { a } { 2 } ( 1 - \cos \omega t ) . \tag{23}
\end{equation*}
$$

According to equation (15) the frame current varies as

$$
\begin{equation*}
I ( t ) = \frac { B a x ( t ) } { L } = \frac { B a ^ { 2 } } { 2 L } ( 1 - \cos \omega t ) . \tag{24}
\end{equation*}
$$

The corresponding graph is plotted as
![](../../../figures/solution-ocr/370bc87360807c34bae5ea78.jpg)
9. Ohm's law for the frame is written as

$$
\begin{equation*}
B a \mathrm { v } - L \frac { d I } { d t } = I R \tag{25}
\end{equation*}
$$

and its equation of motion is as follows

$$
\begin{equation*}
m \frac { d \mathrm { v } } { d t } = - B I a . \tag{26}
\end{equation*}
$$

Equations (25) and (26) can be rewritten in finite differences as follows

$$
\begin{align*}
& B a ^ { 2 } - L I _ { 0 } = q R ,  \tag{27}\\
& m \mathrm { v } _ { 0 } = B q a , \tag{28}
\end{align*}
$$

where $q$ is the charge flown through the circuit.
Solving (27) and (28) together, we obtain

$$
\begin{equation*}
I _ { 0 } = \frac { B ^ { 2 } a ^ { 3 } - m \mathrm { v } _ { 0 } R } { a B L } . \tag{29}
\end{equation*}
$$
