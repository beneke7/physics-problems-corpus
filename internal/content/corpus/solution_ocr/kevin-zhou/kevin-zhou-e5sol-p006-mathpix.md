---
id: solution-ocr-kevin-zhou-e5sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e5-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 6. A wheel of radius $R$ and moment of inertia $J$ consisting of a large number of thin conducting spokes is free to rotate about an axle. A brush always makes electrical contact with one spoke at a time at the bottom of the wheel.
![](../../../figures/solution-ocr/929d66f30fe93646cc8d255b.jpg)
A battery with voltage $V$ feeds current through an inductor $L$, into the axle, through the spoke, to the brush. There is a uniform magnetic field B pointing into the plane of the paper. At time $t = 0$ the switch is closed.

(a) Find the torque on the wheel and the motional emf along a spoke, as a function of the current $I$ in the circuit and the angular velocity $\omega$ of the wheel.
(b) Solve for the full time evolution of $I ( t )$ and $\omega ( t )$. If there is a small amount of friction and resistance, then what will the final state of the system be?

This setup is an example of a homopolar motor.
Solution. (a) By integrating the force along the wire, the torque is

$$
\tau = \int _ { 0 } ^ { R } I B r d r = \frac { I B R ^ { 2 } } { 2 } .
$$

Similarly, the force per unit charge on a charge a distance $r$ from the center of the disk is $v B = \omega r B$, so the motional emf is

$$
\mathcal { E } = \int _ { 0 } ^ { R } \omega B r d r = \frac { \omega B R ^ { 2 } } { 2 }
$$


(b) Newton's second law gives the time evolution of the wheel,
$$
J \dot { \omega } = \frac { I B R ^ { 2 } } { 2 } .
$$
Kirchhoff's loop rule gives the time evolution of the circuit,
$$
V = L \dot { I } + \frac { \omega B R ^ { 2 } } { 2 } .
$$
When the switch is closed, the current and the wheel will start spinning up simultaneously. However, eventually the wheel will be rotating so fast that the back-emf starts to decrease the current through the inductor. After a while, this current goes negative and starts to slow down the wheel. Finally, once the wheel slows down enough, the current through the inductor can start increasing again. Then it turns out that both $\omega$ and $I$ go to zero, and the process starts again. In other words, both $\omega$ and $I$ oscillate in time.
Now let's see this quantitatively. Differentiating the first equation and plugging it into the second gives
$$
\ddot { \omega } + \frac { 1 } { J L } \left( \frac { B R ^ { 2 } } { 2 } \right) ^ { 2 } \omega = \frac { B R ^ { 2 } } { 2 J L } V
$$
which is a simple harmonic motion equation with solution
$$
\omega ( t ) = C \cos \Omega t + D \sin \Omega t + \frac { 2 V } { B R ^ { 2 } } , \quad \Omega = \frac { B R ^ { 2 } } { 2 \sqrt { J L } } .
$$
We know that $\omega ( 0 ) = 0$, and that initially $I = 0$, which implies $\dot { \omega } ( 0 ) = 0$. Therefore,
$$
\omega ( t ) = \frac { 2 V } { B R ^ { 2 } } ( 1 - \cos \Omega t ) .
$$
Plugging this into Kirchhoff's loop rule gives
$$
I ( t ) = \frac { V } { \Omega L } \sin \Omega t .
$$
Note that if there were a tiny bit of friction or resistance, then eventually these oscillations would damp out. We would then approach the steady state solution, which is where the backemf balances the battery's emf and almost no current flows at all, $I \approx 0$ and $\omega \approx 2 V / B R ^ { 2 }$. (Or, if we used the motor to do work, then in the steady state the current would be nonzero and the angular velocity would be somewhat lower.)
[4] Problem 7. IPhO 1990, problem 2. A neat problem on an exotic propulsion mechanism called an electrodynamic tether, which also reviews M6.

## 2 Faraday's Law


Idea 3
Faraday's law states that even for a time-dependent magnetic field, we still have

$$
\mathcal { E } = - \frac { d \Phi } { d t }
$$

In the case where the loop isn't moving but the magnetic field is changing, the emf is entirely provided by the electric field,

$$
\mathcal { E } = \oint _ { C } \mathbf { E } \cdot d \mathbf { s } .
$$

Electric fields in the presence of changing magnetic fields can thus be nonconservative, i.e. they can have a nonzero closed line integral, a situation we haven't seen in any previous problem set. The differential form of Faraday's law is

$$
\nabla \times \mathbf { E } = - \frac { \partial \mathbf { B } } { \partial t } .
$$
