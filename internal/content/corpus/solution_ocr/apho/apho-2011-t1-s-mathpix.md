---
id: solution-ocr-apho-2011-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2011/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2011-t1]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Theoretical Question 1: The Shockley-James Paradox <br> SOLUTION

a. The magnetic field created by the large loop at its center is:
$$
B = \frac { \mu _ { 0 } I _ { 2 } } { 2 R }
$$
Since $r \ll R$, this is the field throughout the area of the small loop. Therefore, the flux through the small loop is given by:
$$
\Phi _ { B 1 } = \pi r ^ { 2 } B = \frac { \pi \mu _ { 0 } r ^ { 2 } I _ { 2 } } { 2 R }
$$
The mutual inductance is then given by:
$$
M _ { 21 } = \frac { \pi \mu _ { 0 } r ^ { 2 } } { 2 R }
$$
b. Since $M _ { 12 } = M _ { 21 } = M$, we have:
$$
\Phi _ { B 2 } = M I _ { 1 } = \frac { \pi \mu _ { 0 } r ^ { 2 } I _ { 1 } } { 2 R }
$$
Taking the derivative with respect to time, this becomes:
$$
\varepsilon _ { 2 } = \frac { \pi \mu _ { 0 } r ^ { 2 } \dot { I } _ { 1 } } { 2 R }
$$
c. The EMF is work per unit charge, while the electric field is force per unit charge. Therefore:
$$
E = \frac { \varepsilon _ { 2 } } { 2 \pi R } = \frac { \mu _ { 0 } r ^ { 2 } \dot { I } _ { 1 } } { 4 R ^ { 2 } }
$$
d. The electric field from part (c) leads to a force:
$$
F = E Q = \frac { \mu _ { 0 } r ^ { 2 } Q \dot { I } } { 4 R ^ { 2 } }
$$
Integrating over $d t$ (and disregarding the sign), we get the impulse:
$$
\Delta p = \frac { \mu _ { 0 } r ^ { 2 } I Q } { 4 R ^ { 2 } }
$$
e. The current can be written as:
$$
I = n A q v
$$
where $v$ is the charge carriers' velocity. We therefore have:

$$
v = \frac { I } { n A q }
$$

The momentum is then given by:

$$
p = \gamma m n A l v = \frac { m n A l v } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } = \frac { m I l } { q } \left( 1 - \left( \frac { I } { n A q c } \right) ^ { 2 } \right) ^ { - 1 / 2 }
$$

where $\gamma$ is the Lorentz factor associated with $v$.
f. The hidden momentum is due to the charge carriers in the two vertical sides of the loop. Let $m$ be the mass of the charge carriers, let $q$ be their charge, and let $\Delta U = k Q q l / R ^ { 2 }$ be the potential energy difference for a charge carrier between the two sides. Denote the longitudinal densities and velocities of the charges in the two sides by $\lambda _ { 1 } , v _ { 1 } , \lambda _ { 2 }$ and $v _ { 2 }$. Let $\gamma _ { 1 }$ and $\gamma _ { 2 }$ be the appropriate Lorentz factors. From the constant value of the current, we have:

$$
q \lambda _ { 1 } v _ { 1 } = q \lambda _ { 2 } v _ { 2 } = I
$$

Energy conservation for the charge carriers passing from one side to the other reads:

$$
\left( \gamma _ { 2 } - \gamma _ { 1 } \right) \cdot m c ^ { 2 } = \Delta U
$$

The total momentum now reads:

$$
p _ { h i d } = p _ { 2 } - p _ { 1 } = m l \left( \gamma _ { 2 } \lambda _ { 2 } v _ { 2 } - \gamma _ { 1 } \lambda _ { 1 } v _ { 1 } \right) = \frac { m I l } { q } \left( \gamma _ { 2 } - \gamma _ { 1 } \right) = \frac { I l \Delta U } { q c ^ { 2 } } = \frac { k Q I l ^ { 2 } } { R ^ { 2 } c ^ { 2 } }
$$

Note that all the microscopic quantities $m , q , \lambda _ { i }$ and $v _ { i }$ have dropped out.
g) In part (d), the magnetic moment is $\mu = \pi r ^ { 2 } I$, and we get:

$$
\Delta p = \frac { \mu _ { 0 } Q \mu } { 4 \pi R ^ { 2 } }
$$

In part (f), the magnetic moment is $\mu = l ^ { 2 } I$, and we get:

$$
p _ { \text {hid } } = \frac { k Q \mu } { R ^ { 2 } c ^ { 2 } } = \frac { \mu _ { 0 } Q \mu } { 4 \pi R ^ { 2 } }
$$

We see that the results are identical.
h) The answer is $( \mathrm { A } ) + ( \mathrm { C } )$. (A) is true because $\Delta U$ between the near side and the far side of the loop vanishes. (B) cannot be true, because the back-reaction of the induced charges on the external charge is a higher-order effect; for instance, it involves higher powers of $Q$. Then the conservation of center-of-mass velocity requires that (C) is true.
