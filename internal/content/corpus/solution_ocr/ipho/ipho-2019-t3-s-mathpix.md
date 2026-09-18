---
id: solution-ocr-ipho-2019-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2019/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2019-t3]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Thermoacoustic engine - Solution

## Part A: Sound wave in a closed tube

A.1. The boundary conditions are: $u ( 0 , t ) = u ( L , t ) = 0$. As a result, $\sin \left( \frac { 2 \pi } { \lambda } L \right) = 0$, so we get $\lambda _ { \text {max } } = 2 L$.
A.2. We get

$$
V ( x , t ) = S \cdot ( \Delta x + u ( x + \Delta x , t ) - u ( x , t ) ) = S \Delta x \cdot \left( 1 + u ^ { \prime } \right) = V _ { 0 } + V _ { 0 } u ^ { \prime } .
$$

Thus,

$$
V ( x , t ) = V _ { 0 } + a k V _ { 0 } \cos ( k x ) \cos ( \omega t ) \quad \Rightarrow \quad V _ { 1 } ( x ) = a k V _ { 0 } \cos ( k x ) .
$$

A.3. We use Newton's Second Law $\rho _ { 0 } \ddot { u } = - p ^ { \prime }$ to deduce $p ^ { \prime } = - \rho _ { 0 } \ddot { u } = \rho _ { 0 } a \omega ^ { 2 } \sin ( k x ) \cos ( \omega t )$, so that

$$
p ( x , t ) = p _ { 0 } - a \frac { \omega ^ { 2 } } { k } \rho _ { 0 } \cos ( k x ) \cos ( \omega t ) \quad \Rightarrow \quad p _ { 1 } ( x ) = a \frac { \omega ^ { 2 } } { k } \rho _ { 0 } \cos ( k x ) .
$$

A.4. Using $a \ll L$, we obtain $\frac { p _ { 1 } ( x ) } { p _ { 0 } } = \gamma \frac { V _ { 1 } ( x ) } { V _ { 0 } }$. As a result, $\frac { \rho _ { 0 } } { p _ { 0 } } \frac { \omega ^ { 2 } } { k } = \gamma \cdot k$, and $c = \sqrt { \frac { \gamma p _ { 0 } } { \rho _ { 0 } } }$.
A.5. The relative change in $T ( x , t )$ is the sum of the relative changes in $V ( x , t )$ and $p ( x , t )$. As a result,

$$
T _ { 1 } ( x ) = \frac { T _ { 0 } } { p _ { 0 } } p _ { 1 } ( x ) - \frac { T _ { 0 } } { V _ { 0 } } V _ { 1 } ( x ) = ( \gamma - 1 ) \frac { T _ { 0 } } { V _ { 0 } } V _ { 1 } ( x ) = a k ( \gamma - 1 ) T _ { 0 } \cos ( k x ) .
$$

A.6. The movement of the gas parcels inside the tube conveys heat along its boundary. To determine the direction of the convection, we combining the result of Task A. 5 and the expression (1) for $u ( x , t )$. We see that when $0 < x < \frac { L } { 2 }$, the gas is colder when the displacement $u ( x , t )$ is positive. Likewise, when $\frac { L } { 2 } < x < L$, the gas is colder when the displacement $u ( x , t )$ is negative. Hence, heat flows into the gas near the point B, cooling it down, and out of the gas near the points A and C, heating them up.

## Part B: Sound wave amplification induced by external thermal contact

B.1. We get

$$
T _ { \text {env } } ( t ) = T _ { \text {plate } } \left( x _ { 0 } + u \left( x _ { 0 } , t \right) \right) = T _ { 0 } - \frac { \tau } { \ell } \cdot u \left( x _ { 0 } , t \right) ,
$$


so that:

$$
T _ { \mathrm { st } } = \frac { a \tau } { \ell } \sin \left( k x _ { 0 } \right) = \frac { a \tau } { \ell \sqrt { 2 } } .
$$

B.2. The gas will convey heat from the hot reservoir to the cold one if the parcels are colder than the environment when $u \left( x _ { 0 } , t \right) < 0$, and hotter when $u \left( x _ { 0 } , t \right) > 0$. This occurs precisely if

$$
T _ { \mathrm { st } } > T _ { 1 } .
$$

Plugging in the results of Tasks A. 5 and B.1, we get

$$
\frac { a \tau _ { \mathrm { cr } } } { \ell } \sin \left( k x _ { 0 } \right) = a k ( \gamma - 1 ) T _ { 0 } \cos \left( k x _ { 0 } \right) \quad \Rightarrow \quad \tau _ { \mathrm { cr } } = k \ell ( \gamma - 1 ) T _ { 0 } .
$$

B.3. Using the first law of thermodynamics, we get

$$
\frac { d Q } { d t } = \frac { d E } { d t } + p \frac { d V } { d t } .
$$

Plugging in the relation $E = \frac { 1 } { \gamma - 1 } p V$, we see that:

$$
\frac { d Q } { d t } = \frac { 1 } { \gamma - 1 } \frac { d } { d t } ( p V ) + p \frac { d V } { d t } = \frac { 1 } { \gamma - 1 } V \frac { d p } { d t } + \frac { \gamma } { \gamma - 1 } p \frac { d V } { d t } \approx \frac { 1 } { \gamma - 1 } V _ { 0 } \frac { d p } { d t } + \frac { \gamma } { \gamma - 1 } p _ { 0 } \frac { d V } { d t } .
$$

B.4. We plug the expression for $\frac { d Q } { d t }$ into the result of Task B.3. This gives:

$$
\frac { 1 } { \gamma - 1 } V _ { 0 } \frac { d p } { d t } + \frac { \gamma } { \gamma - 1 } p _ { 0 } \frac { d V } { d t } = \beta V _ { 0 } \left( T _ { \mathrm { st } } - T _ { 1 } \right) \cdot \cos ( \omega t ) .
$$

We now plug in the data given in equation (6), and get (by considering terms with $\cos ( \omega t )$ and $\sin ( \omega t )$ separately):

$$
\begin{gathered}
\frac { 1 } { \gamma - 1 } V _ { 0 } p _ { a } \omega + \frac { \gamma } { \gamma - 1 } p _ { 0 } V _ { a } \omega = \beta V _ { 0 } \left( T _ { \mathrm { st } } - T _ { 1 } \right) \\
\frac { 1 } { \gamma - 1 } V _ { 0 } p _ { b } \omega - \frac { \gamma } { \gamma - 1 } p _ { 0 } V _ { b } \omega = 0
\end{gathered}
$$

and thus, we can already express $V _ { b }$ as

$$
V _ { b } = \frac { 1 } { r } p _ { b } \cdot \frac { V _ { 0 } } { p _ { 0 } } .
$$

For $V _ { a }$, we plug in the results of Tasks B. 1 and B.2,

$$
T _ { \mathrm { st } } - T _ { 1 } = \frac { a } { \ell \sqrt { 2 } } \left( \tau - \tau _ { \mathrm { cr } } \right) ,
$$


giving:

$$
V _ { a } = \left( - \frac { 1 } { \gamma } p _ { a } - \frac { \gamma - 1 } { \gamma } \frac { \beta } { \omega } \frac { a } { \ell \sqrt { 2 } } \left( \tau - \tau _ { \mathrm { cr } } \right) \right) \cdot \frac { V _ { 0 } } { p _ { 0 } } .
$$

B.5. We want to integrate the mechanical work generated, $\int p d V$, and averaging the result over a long time. To do this, we substitute our expressions (6) for the perturbed $p$ and $V$. Since the average of $\cos ( \omega t ) \sin ( \omega t )$ is 0 , and that of $\sin ^ { 2 } ( \omega t )$ and $\cos ^ { 2 } ( \omega t )$ is $\frac { 1 } { 2 }$, we get:

$$
\frac { V _ { 0 } } { S \ell } W _ { \text {tot } } = - \pi \cdot \left( p _ { a } V _ { b } + p _ { b } V _ { a } \right) .
$$

Using the result of B.4, we get

$$
\frac { V _ { 0 } } { S \ell } W _ { \text {tot } } = \frac { \pi } { \omega } \cdot \frac { \gamma - 1 } { \gamma } \beta \frac { a } { \ell \sqrt { 2 } } \left( \tau - \tau _ { \mathrm { cr } } \right) \cdot V _ { 0 } \frac { p _ { b } } { p _ { 0 } } .
$$

To leading order, $p _ { b }$ is the unperturbed wave $p _ { b } \approx p _ { 1 } \left( x _ { 0 } \right) = a \frac { \omega ^ { 2 } } { k } \rho _ { 0 } \cos \left( k x _ { 0 } \right) = a k \gamma p _ { 0 } \frac { 1 } { \sqrt { 2 } }$. Simplifying, we get

$$
W _ { \text {tot } } = \frac { \pi } { \omega } S \cdot \frac { \gamma - 1 } { \gamma } \beta \frac { a } { \sqrt { 2 } } \left( \tau - \tau _ { \mathrm { cr } } \right) \cdot \frac { p _ { b } } { p _ { 0 } } = \frac { \pi } { 2 \omega } ( \gamma - 1 ) \beta \left( \tau - \tau _ { \mathrm { cr } } \right) k a ^ { 2 } S .
$$

B.6 We want to compute the amount of heat convection over one cycle. This means that we need to take the amount of heat moving in or out of the parcel, and weigh it by the position of the parcel at that time. Thus, the total heat conveyed by the parcel, integrated along a cycle, is:

$$
Q _ { \text {tot } } = \frac { 1 } { \Delta x } \int \frac { d Q } { d t } u \cdot d t .
$$

This expression can be computed to leading order using $\frac { d Q } { d t } = \beta V _ { 0 } \left( T _ { \mathrm { st } } - T _ { 1 } \right) \cdot \cos ( \omega t )$ and the unperturbed displacement $u \left( x _ { 0 } , t \right) = \frac { a } { \sqrt { 2 } } \cos ( \omega t )$. This gives

$$
Q _ { \mathrm { tot } } = \frac { \pi } { \omega } \beta V _ { 0 } \left( T _ { \mathrm { st } } - T _ { 1 } \right) \frac { a } { \sqrt { 2 } } = \frac { \pi } { \omega } \beta V _ { 0 } \cdot \frac { a } { \ell \sqrt { 2 } } \left( \tau - \tau _ { \mathrm { cr } } \right) \cdot \frac { a } { \sqrt { 2 } } = \frac { \pi } { 2 \omega } \beta \left( \tau - \tau _ { \mathrm { cr } } \right) \frac { a ^ { 2 } S } { \ell } .
$$

B.7. Dividing the results of Tasks B. 5 and B.6, we obtain the expression:

$$
\eta = \frac { W _ { \mathrm { tot } } } { Q _ { \mathrm { tot } } } = ( \gamma - 1 ) k \ell = \frac { \tau _ { \mathrm { cr } } } { T _ { 0 } } = \frac { \tau _ { \mathrm { cr } } } { \tau } \cdot \frac { \tau } { T _ { 0 } } = \frac { \tau _ { \mathrm { cr } } } { \tau } \cdot \eta _ { c } .
$$
