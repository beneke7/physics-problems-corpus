---
id: solution-ocr-usatst-2021-t-s-q3
source: usatst
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usatst/2021_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usatst-2021-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 3
Great Hall
The classical Hall effect was first measured by Edwin Hall in 1879, shortly after the publication of Maxwell's equations. In all parts of this problem, materials contain $n _ { V }$ electrons per unit volume, and each electron has charge $q _ { e } < 0$ and mass $m _ { e }$. You may use these quantities in all of your answers. We will begin by investigating the implications of the classical Hall effect.

1. An infinite plate in the $x y$ plane, with thickness $d$ in the $z$ direction, is placed in a uniform magnetic field $\mathbf { B } = B \hat { z }$ as shown. An electric field $\mathbf { E } = E \hat { x }$ is applied in the plane of the plate and the system is allowed to reach a steady state.
![](../../../figures/solution-ocr/3f76e61c04ea1d8d4b11091d.jpg)
(a) If the electrons have velocity $\mathbf { v }$ at steady state, what is the current density $\mathbf { J }$ ? Recall that $\mathbf { J }$ is defined as the total flow of charge through a unit cross-section area per unit time.
Solution
The current density is given by $n _ { V } q _ { e } \mathbf { v }$.
(b) In the Drude model, electrons are subject to both the Lorentz force and a damping force $- \gamma \mathbf { v }$, where $\gamma$ is a constant that depends on the material. In the above system, what is the current density in the steady state? Give both the magnitude and direction of J , e.g. in polar coordinates.

Solution
The equation of motion for an electron is

$$
q _ { e } E \hat { \mathbf { x } } - q _ { e } v _ { x } B \hat { \mathbf { y } } + q _ { e } v _ { y } B \hat { \mathbf { x } } - \gamma v _ { x } \hat { \mathbf { x } } - \gamma v _ { y } \hat { \mathbf { y } } = 0 .
$$

Solving the system of equations gives us

$$
v _ { x } = \frac { \gamma q _ { e } E } { \gamma ^ { 2 } + q _ { e } ^ { 2 } B ^ { 2 } } , \quad v _ { y } = \frac { - q _ { e } ^ { 2 } E B } { \gamma ^ { 2 } + q _ { e } ^ { 2 } B ^ { 2 } } .
$$

Then,

$$
J _ { x } = \frac { \gamma n _ { V } q _ { e } ^ { 2 } E } { \gamma ^ { 2 } + q _ { e } ^ { 2 } B ^ { 2 } } , \quad J _ { y } = \frac { - n _ { V } q _ { e } ^ { 3 } E B } { \gamma ^ { 2 } + q _ { e } ^ { 2 } B ^ { 2 } }
$$


As requested, we compute the magnitude and direction:
$$
| \mathbf { J } | = \frac { q _ { e } ^ { 2 } n _ { V } E } { \sqrt { \gamma ^ { 2 } + B ^ { 2 } q _ { e } ^ { 2 } } } , \quad \theta = - \arctan \left( \frac { B q _ { e } } { \gamma } \right) .
$$
(c) Compute the electrical resistivity,
$$
\rho _ { 0 } = \lim _ { B \rightarrow 0 } \frac { E } { \left| J _ { x } \right| }
$$
and the transverse Hall resistivity
$$
\rho _ { H } = \lim _ { \gamma \rightarrow 0 } \frac { E } { \left| J _ { y } \right| } .
$$

## Solution

The two resistivities are

$$
\rho _ { 0 } = \frac { \gamma } { n _ { V } q _ { e } ^ { 2 } } , \quad \rho _ { H } = \frac { B } { n _ { V } q _ { e } } .
$$

(d) A Hall effect sensor detects the strength of magnetic fields. Consider the following circuit consisting of a square plate of side length $L$ and thickness $d$ in a perpendicular uniform magnetic field $B$.
![](../../../figures/solution-ocr/af812343c4464bce47ff6def.jpg)
A longitudinal $\operatorname { emf } \mathcal { E }$ is applied to the plate. At steady state, a Hall voltage $V _ { H }$ is measured across the plate due to the buildup of charge on either side of the plate. If the electrical resistivity of the plate at zero magnetic field is $\rho _ { 0 }$, what is the Hall voltage $V _ { H }$ and the current $I$ through the plate? Express your answer in terms of $\rho _ { 0 } , \mathcal { E } , B$, and the dimensions of the plate.

## Solution

The Hall voltage is such that the electric field from the external EMF and from the charge buildup causes the current to flow in the $x$ direction. Our equation of motion is thus

$$
q _ { e } \mathcal { E } / L \hat { \mathbf { x } } + q _ { e } V _ { H } / L \hat { \mathbf { y } } - q _ { e } v _ { x } B \hat { \mathbf { y } } - \gamma v _ { x } \hat { \mathbf { x } } = 0 .
$$


Then, we have the two equations

$$
V _ { H } = L v _ { x } B . \quad L v _ { x } = \frac { q _ { e } \mathcal { E } } { \gamma } .
$$

Substituting gives us

$$
\begin{gathered}
V _ { H } = \frac { q _ { e } \mathcal { E } B } { \gamma } = \frac { \mathcal { E } B } { n _ { V } q _ { e } \rho _ { 0 } } , \\
I = n _ { V } q _ { e } v _ { x } L w = \frac { n _ { V } q _ { e } ^ { 2 } \mathcal { E } d } { \gamma } = \frac { \mathcal { E } d } { \rho _ { 0 } } .
\end{gathered}
$$

Experiments in the 20th century revealed that in many materials, the Hall resistivity could only take certain discrete values. We will now show how this follows from Bohr quantization. (These next parts are independent of the first part of the problem.)

2. A zero-resistance loop of wire of radius $R$ and cross-sectional area $A _ { w }$ carries a counterclockwise current $I$. A solenoid through the middle of the loops carries magnetic flux $\Phi$ out of the page, which we define to be the positive $\hat { z }$ direction.
![](../../../figures/solution-ocr/fd8c8ce9d3d46632886e328c.jpg)
    (a) If the electrons all have the same speed, what is the angular momentum of each electron?

\section*{Solution}
The current is $I = q _ { e } n _ { V } a A _ { w }$, where $v$ is the speed of each electron. Then the angular momentum is
$$
m _ { e } v R \hat { \mathbf { z } } = \frac { I m _ { e } R } { q _ { e } n _ { V } A _ { w } } \hat { \mathbf { z } } .
$$
Note that the angular momentum points into the page, because the electrons have negative charge.
(b) If we allow the flux in the solenoid to change, the usual, "mechanical" angular momentum $L$ of each electron is not conserved. Instead, a quantity called the canonical angular momentum, $L _ { \text {can } } = L + C q _ { e } \Phi$, for some constant $C$, is conserved. Find $C$.

## Solution

We compute the change in angular momentum associated with a change in flux $\Delta \Phi$. By Faraday's Law, there is an induced electric field resulting from the change in magnetic flux.

$$
2 \pi R E = - \frac { d \Phi } { d t } .
$$


The electric field results in a force $q _ { e } E$ on each electron, and thus we find that

$$
2 \pi R \frac { m _ { e } } { q _ { e } } \frac { d v } { d t } = - \frac { d \Phi } { d t } .
$$

Then, the rate of change in angular momentum is

$$
R m _ { e } \frac { d v } { d t } = \frac { q _ { e } } { 2 \pi } \frac { d \Phi } { d t } .
$$

Therefore,

$$
\Delta L = - \frac { q _ { e } } { 2 \pi } \Delta \Phi .
$$

Then, for $L + C q _ { e } \Phi$ to be conserved,

$$
C = \frac { 1 } { 2 \pi } .
$$

(c) The Bohr quantization condition says that for a closed circular orbit, an integer number of de Broglie wavelengths must fit in its circumference. The de Broglie wavelength is
$$
\lambda = \frac { h } { p _ { \text {can } } } ,
$$
where $h$ is Planck's constant, and $p _ { \text {can } } = L _ { \text {can } } / R$ is the canonical momentum. For a given solenoid flux $\Phi$, what is the set of allowed mechanical angular momenta $L$ ?

## Solution

The circumference of such an orbit is $2 \pi R$. A de Broglie wavelength is given by

$$
\lambda = \frac { h R } { L _ { \mathrm { can } } } .
$$

Then,

$$
n = \frac { 2 \pi L _ { \mathrm { can } } } { h } = \frac { L _ { \mathrm { can } } } { \hbar } ,
$$

or $L _ { \text {can } } = n \hbar$ where $\hbar = h / 2 \pi$. Then the allowed mechanical momenta satisfy

$$
L = n \hbar - \frac { q _ { e } \Phi } { 2 \pi } ,
$$

where $n$ is an integer.

(d) What is the minimum possible change in the magnetic flux for which the same set of mechanical angular momenta is allowed? This is known as the flux quantum.

## Solution

We require $\frac { \left| q _ { e } \right| \Delta \Phi } { 2 \pi } = \hbar$ such that we get the same set of allowed mechanical angular momenta. Then,

$$
\Delta \Phi = \frac { h } { \left| q _ { e } \right| } .
$$


Note that for a superconducting ring, the flux quantum is $h / 2 \left| q _ { e } \right|$ because the electrons come in Cooper pairs, but this wasn't part of this problem.
3. Now, consider an annulus held perpendicular to a fixed, uniform external magnetic field $B$, and suppose an additional, tunable magnetic flux $\Phi$ threads the center of the annulus, with both pointing out of the page. The annulus has a transverse Hall resistance $R _ { H }$ (i.e., an EMF of $\mathcal { E }$ around the annulus generates a perpendicular current $\mathcal { E } / R _ { H }$ via the Hall effect) and you may neglect its self-inductance.
![](../../../figures/solution-ocr/e995d4cfda50cbbd23fa2d61.jpg)
    (a) Suppose $\Phi$ begins to increase slowly and steadily in time. After a short time, the electrons will begin flowing steadily from one side of the annulus to the other. Do the electrons move inward or outward? Justify your answer.

## Solution

The increasing flux induces a clockwise EMF. The Lorentz force on an electron is

$$
q _ { e } ( \mathbf { E } + \mathbf { v } \times \mathbf { B } ) \text {. }
$$

Then, $\mathbf { v } \times \mathbf { B }$ must oppose E. Therefore, $\mathbf { v }$ must point radially inward by the right hand rule. Therefore, electrons must be flowing radially inward.

(b) If the threaded flux increases by $\Delta \Phi$, how many electrons pass from one edge of the annulus to the other? You may use $R _ { H }$, among other variables, in your answer.

## Solution

We have that

$$
| I | = \frac { 1 } { R _ { H } } \left| \frac { \mathrm {~d} \Phi } { \mathrm {~d} t } \right| \Longrightarrow \Delta Q = \frac { 1 } { R _ { H } } \Delta \Phi .
$$

Therefore, the number of electrons that pass from one edge to another is

$$
\frac { \Delta \Phi } { R _ { H } \left| q _ { e } \right| } .
$$

(c) As we showed in 2(d), if the magnetic flux changes by the flux quantum $\Phi _ { q }$, the allowed orbits from Bohr quantization are unchanged. Quantum mechanics thus tells us that in conventional materials, if the magnetic flux changes by $\Phi _ { q }$, an integer number $k$ of electrons must pass from one edge to another. What constraint does this place on the Hall resistance?


## Solution

We set

$$
\left| q _ { e } \right| \nu = \frac { h } { R _ { H } \left| q _ { e } \right| } \Longrightarrow R _ { H } = \frac { h } { k q _ { e } ^ { 2 } } .
$$

This is known as the integer quantum Hall effect, and it applies to any material shape.


[^0]:    ${ } ^ { 1 }$ aka, A Broadband/Resonant Approach to Cosmic Axion Detection with an Amplifying B-field Ring Apparatus.
