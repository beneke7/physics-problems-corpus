---
id: solution-ocr-usapho-2013-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2013-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

This problem concerns three situations involving the transfer of energy into a region of space by electromagnetic fields. In the first case, that energy is stored in the kinetic energy of a charged object; in the second and third cases, the energy is stored in an electric or magnetic field.

In general, whenever an electric and a magnetic field are at an angle to each other, energy is transferred; for example, this principle is the reason electromagnetic radiation transfers energy. The power transferred per unit area is given by the Poynting vector:

$$
\vec { S } = \frac { 1 } { \mu _ { 0 } } \vec { E } \times \vec { B }
$$

In each part of this problem, the last subpart asks you to verify that the rate of energy transfer agrees with the formula for the Poynting vector. Therefore, you should not use the formula for the Poynting vector before the last subpart!

a. A long, insulating cylindrical rod has radius $R$ and carries a uniform volume charge density $\rho$. A uniform external electric field $E$ exists in the direction of its axis. The rod moves in the direction of its axis at speed $v$.
    i. What is the power per unit length $\mathcal { P }$ delivered to the rod?
    ii. What is the magnetic field $B$ at the surface of the rod? Draw the direction on a diagram.
    iii. Compute the Poynting vector, draw its direction on a diagram, and verify that it agrees with the rate of energy transfer.
b. A parallel plate capacitor consists of two discs of radius $R$ separated by a distance $d \ll R$. The capacitor carries charge $Q$, and is being charged by a small, constant current $I$.
    i. What is the power $P$ delivered to the capacitor?
    ii. What is the magnetic field $B$ just inside the edge of the capacitor? Draw the direction on a diagram. (Ignore fringing effects in the electric field for this calculation.)
    iii. Compute the Poynting vector, draw its direction on a diagram, and verify that it agrees with the rate of energy transfer.
c. A long solenoid of radius $R$ has $\mathcal { N }$ turns of wire per unit length. The solenoid carries current $I$, and this current is increased at a small, constant rate $\frac { d I } { d t }$.
    i. What is the power per unit length $\mathcal { P }$ delivered to the solenoid?
    ii. What is the electric field $E$ just inside the surface of the solenoid? Draw its direction on a diagram.
    iii. Compute the Poynting vector, draw its direction on a diagram, and verify that it agrees with the rate of energy transfer.

## Solution


a. i. A length $l$ of the rod has charge $q = \pi R ^ { 2 } l \rho$; the force on it is $F = q E$ and the power delivered is $P = F v$. Combining these,
$$
P = \pi R ^ { 2 } l \rho E v , \quad \mathcal { P } = \pi R ^ { 2 } \rho E v .
$$
    ii. The length $l$ of the rod moves past a point in a time $t = \frac { l } { v }$, so the current carried by the rod is
$$
I = \frac { q } { t } = \pi R ^ { 2 } \rho v .
$$
Applying Ampere's law to a loop of radius $R$,
$$
\begin{gathered}
\oint \mathbf { B } \cdot d \mathbf { l } = \mu _ { 0 } I _ { e n c } \\
2 \pi R B = \mu _ { 0 } \pi R ^ { 2 } \rho v \Rightarrow B = \frac { 1 } { 2 } \mu _ { 0 } R \rho v
\end{gathered}
$$
The field is circumferential as given by the right-hand rule.
    iii. The electric and magnetic fields are perpendicular, so the Poynting vector has magnitude
$$
S = \frac { 1 } { \mu _ { 0 } } E B = \frac { 1 } { 2 } R \rho v E .
$$
A quick application of the right hand rule indicates that it points inward along the surface of the cylinder, as it ought. The cylinder has area per unit length $2 \pi r$, so the rate of energy transfer per unit length is
$$
\mathcal { P } = 2 \pi r S = \pi R ^ { 2 } \rho v E
$$
in agreement with the previous result.
b. i. The capacitance is given by the standard parallel-plate capacitor formula,
$$
C = \frac { \epsilon _ { 0 } \pi R ^ { 2 } } { d } .
$$
The voltage on the capacitor is thus
$$
V = \frac { Q } { C } = \frac { Q d } { \epsilon _ { 0 } \pi R ^ { 2 } }
$$
and the power is
$$
P = I V = \frac { I Q d } { \epsilon _ { 0 } \pi R ^ { 2 } }
$$
Students may choose instead to apply the formula for the volume energy density,
$$
\mathcal { U } = \frac { 1 } { 2 } \epsilon _ { 0 } E ^ { 2 } .
$$
    ii. Consider an Amperian loop encircling the edge of the capacitor, and use a flat Gaussian surface through the center of the capacitor. The electric field here is perpendicular to the surface and has magnitude
$$
E = \frac { V } { d } = \frac { Q } { \epsilon _ { 0 } \pi R ^ { 2 } } .
$$

The electric flux through the surface is thus

$$
\phi _ { E } = \pi R ^ { 2 } E = \frac { Q } { \epsilon _ { 0 } } .
$$

This can also be determined directly using Gauss's law and appropriate symmetries. There is no current through the surface, so from Ampere's law

$$
\begin{gathered}
\oint \mathbf { B } \cdot d \mathbf { l } = \mu _ { 0 } \epsilon _ { 0 } \frac { d \phi _ { E } } { d t } \\
2 \pi R B = \mu _ { 0 } \frac { d Q } { d t } \Rightarrow B = \frac { \mu _ { 0 } I } { 2 \pi R }
\end{gathered}
$$

The field is circumferential as given by the right-hand rule.
Note that we could instead use a curved Gaussian surface that avoids the center of the capacitor and intersects one of the charging wires! In this case we have directly

$$
\oint \mathbf { B } \cdot d \mathbf { l } = \mu _ { 0 } I
$$

and the calculation proceeds as before.

iii. The electric and magnetic fields are perpendicular, so again
$$
S = \frac { 1 } { \mu _ { 0 } } E B = \frac { I Q } { 2 \epsilon _ { 0 } \pi ^ { 2 } R ^ { 3 } }
$$
A quick application of the right hand rule indicates that it points inward along the edge of the capacitor, as it ought. The area of this region is $2 \pi R d$, so the power delivered is
$$
P = 2 \pi R d S = \frac { I Q d } { \epsilon _ { 0 } \pi R ^ { 2 } }
$$
in agreement with the previous result.
c. i. Suppose that the solenoid has length $l$. The inductance is
$$
L = \mu _ { 0 } \mathcal { N } ^ { 2 } \pi R ^ { 2 } l .
$$
Students may quote this formula directly, or derive it as follows. Consider an Amperian loop of length $d$ intersecting the solenoid. This loop encloses $\mathcal { N } d$ turns of wire, so from Ampere's law (remembering that the magnetic field exists entirely within the solenoid)
$$
\begin{gathered}
\oint \mathbf { B } \cdot d \mathbf { l } = \mu _ { 0 } I _ { e n c } \\
B d = \mu _ { 0 } \mathcal { N } d I \Rightarrow B = \mu _ { 0 } \mathcal { N } I
\end{gathered}
$$
There are $\mathcal { N } l$ loops, so the total flux is
$$
\Phi = \mathcal { N } l B \pi R ^ { 2 } = \mu _ { 0 } \mathcal { N } ^ { 2 } I \pi R ^ { 2 } l
$$
and since $\Phi = L I$,
$$
L = \mu _ { 0 } \mathcal { N } ^ { 2 } \pi R ^ { 2 } l
$$

as quoted above.
The voltage across the inductor is thus

$$
V = L \frac { d I } { d t } = \mu _ { 0 } \mathcal { N } ^ { 2 } \pi R ^ { 2 } l \frac { d I } { d t }
$$

and the power delivered is

$$
P = I V = \mu _ { 0 } \mathcal { N } ^ { 2 } \pi R ^ { 2 } l I \frac { d I } { d t }
$$

or, dividing by $l$,

$$
\mathcal { P } = \mu _ { 0 } \mathcal { N } ^ { 2 } \pi R ^ { 2 } I \frac { d I } { d t } .
$$

Students may choose instead to apply the formula for the volume energy density,

$$
\mathcal { U } = \frac { 1 } { 2 \mu _ { 0 } } B ^ { 2 } .
$$

ii. Consider an Amperian loop just inside the surface of the solenoid. From above, the magnetic field through this loop is $B = \mu _ { 0 } \mathcal { N } I$, so
$$
\oint \mathbf { E } \cdot d \mathbf { l } = \frac { d \phi _ { B } } { d t }
$$
$$
2 \pi R E = \mu _ { 0 } \mathcal { N } \pi R ^ { 2 } \frac { d I } { d t } \quad \Rightarrow \quad E = \frac { 1 } { 2 } \mu _ { 0 } \mathcal { N } R \frac { d I } { d t }
$$
The field is circumferential as given by Lenz's law and the right-hand rule.
iii. The electric and magnetic fields are perpendicular, so again
$$
S = \frac { 1 } { \mu _ { 0 } } E B = \frac { 1 } { 2 } \mu _ { 0 } \mathcal { N } ^ { 2 } R I \frac { d I } { d t } .
$$
A quick application of the right hand rule indicates that it points inward towards the axis of the solenoid, as it ought. The area per unit length is just $2 \pi R$, so the power per unit length is
$$
\mathcal { P } = 2 \pi R S = \mu _ { 0 } \mathcal { N } ^ { 2 } \pi R ^ { 2 } I \frac { d I } { d t }
$$
in agreement with the previous result.
