---
id: solution-ocr-usapho-2020-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2020-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

## Braking up

An infinitely long wire with linear charge density $- \lambda$ lies along the $z$-axis. An infinitely long insulating cylindrical shell of radius $a$ is concentric with the wire and can rotate freely about the $z$-axis. The shell has moment of inertia per unit length $I$. Charge is uniformly distributed on the shell, with surface charge density $\frac { \lambda } { 2 \pi a }$.

The system is immersed in an external magnetic field $B _ { 0 } \hat { \mathbf { z } }$, and is initially at rest. Starting at $t = 0$, the external magnetic field is slowly reduced to zero over a time $T \gg a / c$, where $c$ is the speed of light.
![](../../../figures/solution-ocr/f7a19d1e46892ea4d4915531.jpg)

a. Find an expression of the final angular velocity $\omega$ of the cylinder in terms of the symbols given and other constants.

## Solution

From Faraday's law, you can find the induced electric field inside the cylinder at a distance $r$ from the wire:

$$
\begin{align*}
\oint \vec { E } _ { \mathrm { ind } } \cdot d \vec { \ell } & = - \frac { d \Phi _ { B } } { d t }  \tag{A1-1}\\
E _ { \mathrm { ind } } ( r ) & = - \frac { r } { 2 } \frac { d B } { d t } \tag{A1-2}
\end{align*}
$$

This induced field exerts a torque on the cylinder, causing it to rotate:

$$
\begin{align*}
\tau & = 2 \pi a \cdot \frac { \lambda } { 2 \pi a } \cdot E _ { \mathrm { ind } } ( a ) \cdot a = I \cdot \frac { d \omega } { d t }  \tag{A1-3}\\
& \Rightarrow \frac { d \omega } { d t } = - \frac { \lambda a ^ { 2 } } { 2 I } \cdot \frac { d B } { d t } \tag{A1-4}
\end{align*}
$$

Integrate on both sides, and noting that $\omega ( t = 0 ) = 0$, we have:

$$
\begin{equation*}
\omega ( T ) = - \frac { \lambda a ^ { 2 } } { 2 I } \left( B ( T ) - B _ { 0 } \right) \tag{A1-5}
\end{equation*}
$$


It is important to note that $B ( T ) \neq 0$. Even though the external field decreases to zero, the now-rotating charged cylinder generates a magnetic field. Using Ampere's Law, you can find at $t = T$, the magnetic field is:

$$
\begin{gather*}
\oint \vec { B } _ { \mathrm { ind } } \cdot d \vec { \ell } = \mu _ { 0 } I _ { \mathrm { enc } } ,  \tag{A1-6}\\
\text { where } I _ { \mathrm { enc } } = \frac { \lambda } { 2 \pi a } \cdot \omega ( T ) \cdot a  \tag{A1-7}\\
\Rightarrow B ( T ) = \mu _ { 0 } \frac { \lambda } { 4 \pi ^ { 2 } a } \omega ( T ) \tag{A1-8}
\end{gather*}
$$

Combining equations (A1-5) and (A1-8), we have:

$$
\omega ( T ) = \frac { \frac { \lambda a ^ { 2 } } { 2 I } B _ { 0 } } { 1 + \mu _ { 0 } \frac { \lambda ^ { 2 } a } { 8 \pi I } }
$$

b. You may be surprised that the expression you find above is not zero! However, the electric and magnetic fields can have angular momentum. Analogous to the "regular" angular momentum definition, the EM field angular momentum per unit volume at a displacement r from the axis of rotation is:
$$
\mathcal { L } ( \mathbf { r } ) = \mathbf { r } \times \mathcal { P } ( \mathbf { r } ) .
$$
$\mathcal { P } ( \mathbf { r } )$ is a vector analogous to momentum, given by
$$
\mathcal { P } ( \mathbf { r } ) = \alpha \cdot ( \mathbf { E } ( \mathbf { r } ) \times \mathbf { B } ( \mathbf { r } ) ) .
$$
where $\alpha$ is some proportionality constant. Find an expression for $\alpha$ in terms of given variables and fundamental constants.

## Solution

The electric field inside the cylindrical shell is given by $\mathbf { E } ( r ) = - \frac { \lambda } { 2 \pi \epsilon _ { 0 } r } \hat { \mathbf { r } }$ inward. The magnetic field is given by $B ( t ) \hat { \mathbf { z } }$. Then:

$$
\mathcal { P } ( \mathbf { r } ) = \alpha \frac { \lambda B ( t ) } { 2 \pi \epsilon _ { 0 } r } \hat { \theta }
$$

The angular momentum per unit volume is then:

$$
\mathcal { L } ( \mathbf { r } ) = - \alpha \frac { \lambda } { 2 \pi \epsilon _ { 0 } } \hat { \mathbf { z } }
$$

The angular momentum per unit length is then:

$$
\mathbf { L } = - \frac { \alpha \lambda B ( t ) a ^ { 2 } } { 2 } \hat { \mathbf { z } }
$$

Comparing this to Equation (A1-5) shows that $\alpha = \epsilon _ { 0 }$.
