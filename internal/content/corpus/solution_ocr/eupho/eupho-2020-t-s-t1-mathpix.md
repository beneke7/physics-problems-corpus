---
id: solution-ocr-eupho-2020-t-s-t1
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2020_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2020-T1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T1: Solenoid and loop

Part a. Solution I. According to Newton's third law, the force acting on the solenoid is equal in magnitude, but opposite in direction to the force acting on the loop. The latter can be obtained from Lorentz's law by summation of infinitesimal forces $\vec { F } = J \Delta \vec { l } \times \vec { B }$ acting on the individual loop elements $\Delta \vec { l }$, where $J = \mathcal { E } / R$ is the current in the loop.

Since the solenoid is long and thin, the magnetic field lines inside it are directed in $+ z$ direction, and escape only from the immediate vicinity of its ends. The magnetic field outside the solenoid is vortex-free and sourcefree. The same requirements are satisfied by the electric field in empty space. Hence, the magnetic field outside the solenoid can be well approximated by a field created by two magnetic poles: a North pole residing close to point $O _ { 1 }$ and a South pole located near to $O _ { 2 }$. The flux $\Phi$ emerging from the North pole (and the flux entering the South pole) is the same as the flux passing through the solenoid's cross-section:

$$
\Phi = B _ { \text {in } } A = \mu _ { 0 } \frac { N I } { \ell } A .
$$

When the endpoint $O _ { 1 }$ of the solenoid is placed in the loop centre $O$, the magnetic field of the other end $\left( O _ { 2 } \right)$ near the loop is negligible. The field created by the North pole located at $O _ { 1 }$ is pointing radially outwards, and its magnitude at the loop circumference is (from spherical symmetry):

$$
B ( r ) = \frac { \Phi } { 4 \pi r ^ { 2 } } = \frac { \mu _ { 0 } } { 4 \pi } \frac { N I A } { \ell r ^ { 2 } } .
$$

Note. it is also correct to assume that the flux from the $B$-field (which carries a factor of $1 / 2$ compared to the field above at the end of the solenoid is uniformly distributed over hemisphere.

The forces acting on all elements of the loop (and also the net force) point in the $- z$ direction, which can be expected also from the same current directions (i.e. the loop and the solenoid attract each other). Hence, the reaction force acting on the solenoid points in the $+ z$ direction, and its magnitude is given by:

$$
F _ { 1 } = \frac { \mathcal { E } } { R } \cdot 2 \pi r \cdot \frac { \mu _ { 0 } } { 4 \pi } \frac { N I A } { \ell r ^ { 2 } } = \frac { \mu _ { 0 } N I A \mathcal { E } } { 2 \ell R r } .
$$

When the endpoint $O _ { 2 }$ is located at the centre of the loop, the magnetic field produced by the South pole exerts a force on the loop. Since this field is directed radially inward, the force acting on the solenoid is the same in magnitude, but opposite in direction $( - z )$ as the force calculated above:

$$
\vec { F } _ { 2 } = - \vec { F } _ { 1 } .
$$

| Grading scheme: T1 part a., Solution I. |  |
| :--- | :--- |
| using Newton's third law | 0.5 p |
| idea of approximating the outer field with magnetic poles 0.5 p, and justification 0.5 p | 1.0 p |
| calculating the flux $\Phi$ emerging from the magnetic pole (for a wrong factor, 0.3 p) | 1.0 p |
| expressing the field $B ( r )$ of the magnetic pole | 1.0 p |
| finding the magnitude of force acting on the loop from Lorentz's force law | 1.0 p |
| correct direction for $\vec { F } _ { 1 } 0.5 \mathrm { p }$, and $\vec { F } _ { 2 }$ antiparallel to $\vec { F } _ { 1 } 0.5 \mathrm { p }$ | 1.0 p |
| Total for part a.: | 5.5 p |

Solution II. In this solution the force acting on the solenoid is calculated, as the force acting on the magnetic pole placed at the centre of the current-carrying loop. For this we need to find an expression for the magnetic pole strength (or magnetic charge) $Q _ { \mathrm { m } }$, which is defined as the ratio of the force and the magnetic field.

The total dipole moment $m$ of the solenoid is the product of the number of turns and the dipole moment $I A$ of each turn:

$$
m = N I A .
$$

This can be also expressed with the magnetic pole strength and the distance of the poles: $m = Q _ { \mathrm { m } } \ell$. From this we arrive to the expression

$$
Q _ { \mathrm { m } } = \frac { N I A } { \ell } = \frac { \Phi } { \mu _ { 0 } }
$$

where $\Phi$ is the total flux emerging from the pole (see solution I).

Note. The same result can be obtained from the analogy between electrostatic and magnetostatic fields. The Coulomb force between two point charges $\pm Q$ can be derived from the principle of virtual work. The force is the derivative of the interaction part of the field energy with respect to the distance between the charges. The force between two magnetic charges $\pm Q _ { \mathrm { m } }$ can be also calculated this way. From the expressions of electric and magnetic energy densities we can conclude the formula of the magnetic interaction force:

$$
\begin{gathered}
w _ { E } = \frac { 1 } { 2 } \varepsilon _ { 0 } E ^ { 2 } \quad \longleftrightarrow \quad w _ { B } = \frac { 1 } { 2 \mu _ { 0 } } B ^ { 2 } , \\
F _ { E } = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { Q ^ { 2 } } { r ^ { 2 } } \quad \longleftrightarrow \quad F _ { B } = \frac { \mu _ { 0 } } { 4 \pi } \frac { Q _ { m } ^ { 2 } } { r ^ { 2 } } .
\end{gathered}
$$

As it can be seen, the well-known formulae known in electrostatics can be also used in magnetostatics with the substitutions $\varepsilon _ { 0 } ^ { - 1 } \longleftrightarrow \mu _ { 0 } , E \longleftrightarrow B , Q \longleftrightarrow Q _ { \mathrm { m } }$. Carrying on this analogy the magnetic pole strength can be figured out:

$$
Q = \varepsilon _ { 0 } \Psi \quad \longleftrightarrow \quad Q _ { \mathrm { m } } = \frac { \Phi } { \mu _ { 0 } } = \frac { N } { \ell } I A ,
$$

where $\Psi$ and $\Phi$ are the electric and magnetic flux for a closed surface containing the electric and magnetic charge, respectively.

When endpoint $O _ { 1 }$ of the solenoid is located at point $O$, a North pole resides at the centre of the loop. Here the magnetic field created by the loop can be expressed from Biot-Savart-law:

$$
B _ { \text {loop } } ^ { ( \text {at center } ) } = \frac { \mu _ { 0 } J } { 2 r } = \frac { \mu _ { 0 } \mathcal { E } } { 2 R r } ,
$$


pointing in the $+ z$ direction. So the magnitude of the force acting on this end of the solenoid is:

$$
F _ { 1 } = Q _ { \mathrm { m } } B _ { \text {loop } } ^ { ( \text {at center } ) } = \frac { \mu _ { 0 } \mathcal { E } N I A } { 2 \ell R r } ,
$$

and it is directed to $+ z$. When the endpoint $O _ { 2 }$ is located at the center of the loop, the force acting on the South pole should be calculated, resulting a force of same magnitude, but opposite direction.

| Grading scheme: T1 part a., Solution II. |  |
| :--- | :--- |
| idea of approximating the outer field with magnetic poles 0.5 p, and justification 0.5 p | 1.0 p |
| calculating the magnetic pole strength $Q _ { \mathrm { m } }$ (for dimensionally wrong answer 0 p) | 1.0 p |
| justification for calculation | 1.0 p |
| calculating the field of the current loop at its centre from Biot-Savartlaw | 0.5 p |
| finding the magnitude of force acting on the magnetic pole | 1.0 p |
| correct direction for $\vec { F } _ { 1 } 0.5 \mathrm { p }$, and $\vec { F } _ { 2 }$ antiparallel to $\vec { F } _ { 1 } 0.5 \mathrm { p }$ | 1.0 p |
| Total for part a.: | 5.5 p |

Solution III. Some of the magnetic field lines created by the loop enter into the near end $O _ { 1 }$ of the solenoid; this entering flux is given by

$$
\Phi _ { \text {in } } = B _ { \text {loop } } ^ { ( \text {at center } ) } A = \frac { \mu _ { 0 } J } { 2 r } A = \frac { \mu _ { 0 } \mathcal { E } A } { 2 R r } .
$$

Since the end $O _ { 2 }$ is far from the loop, the flux created by the loop escaping there is negligibly small. This means that almost all the flux $\Phi _ { \text {in } }$ escapes from the solenoid through its side.

Denote the radial component of the magnetic field vector produced by the current-carrying loop at the perimeter of the $i$ th turn of the solenoid by $B _ { i }$. Only this component contributes to the net force acting on the solenoid, as the axial component produces a radial force which is cancelled due to rotational symmetry. The axial force acting on the $i$ th turn of the solenoid is given by

$$
F _ { 1 , i } = 2 \sqrt { A \pi } I B _ { i } ,
$$

where $2 \sqrt { A \pi }$ is the circumference of one turn, and the force points in the $+ z$ direction. Summing up both sides gives the net force:

$$
F _ { 1 } = \sum _ { i } F _ { i } = \sum _ { i } 2 \sqrt { A \pi } I B _ { i }
$$

Take out the factor $I$ from the summation and insert 1 written in the unusual way $( \ell / N ) \cdot ( N / \ell )$ :

$$
F _ { 1 } = I \frac { N } { \ell } \sum _ { i } 2 \sqrt { A \pi } \frac { \ell } { N } B _ { i } .
$$

The sum on the right hand side is the flux escaping through the side of the solenoid, which equals $\Phi _ { \text {in } }$, so the force:

$$
F _ { 1 } = I \frac { N } { \ell } \Phi _ { \mathrm { in } } = \frac { \mu _ { 0 } \mathcal { E } A N I } { 2 R r \ell } ,
$$

which agrees with the previous solutions.

| Grading scheme: T1 part a., Solution III. |  |
| :--- | :--- |
| $B$-field at the center of loop | 0.5 p |
| expressing force on one turn | 1.0 p |
| realizing that all the flux escapes through the sides of the solenoid | 0.5 p |
| relating the force to escaping flux | 1.5 p |
| summation and correct result | 1.0 p |
| correct direction for $\vec { F } _ { 1 } 0.5 \mathrm { p }$, and $\vec { F } _ { 2 }$ antiparallel to $\vec { F } _ { 1 } 0.5 \mathrm { p }$ | 1.0 p |
| Total for part a.: | 5.5 p |

Solution IV. The force acting on a current loop of magnetic moment $\vec { m }$ placed in magnetic field $\vec { B }$ is given by $\vec { \nabla } ( \vec { m } \cdot \vec { B } )$. Divide the solenoid into short circular coils of equal length $\Delta \ell$, then the magnetic moment of each short coil is

$$
\Delta \vec { m } = I A \frac { N \Delta \ell } { \ell } \vec { e } _ { z } ,
$$

where $\vec { e } _ { z }$ denotes the unit vector in $z$-direction. This magnetic moment is parallel to the field $\vec { B } _ { \text {loop } }$ created by the large current-carrying loop, so the force acting on each short segment of the solenoid in $z$-direction can be written as:

$$
\Delta F _ { 1 } = \Delta m \frac { \mathrm {~d} B _ { \text {loop } } } { \mathrm { d } z } = I A \frac { N \Delta \ell } { \ell } \frac { \mathrm {~d} B _ { \text {loop } } } { \mathrm { d } z }
$$

The total force on the solenoid can be determined from integration of the force contributions along the solenoid:

$$
F _ { 1 } = \int _ { - \ell } ^ { 0 } \mathrm {~d} \ell \frac { \Delta F _ { 1 } } { \Delta \ell } = I A \frac { N } { \ell } \left( B _ { \text {loop } } ( 0 ) - B _ { \text {loop } } ( - \ell ) \right) .
$$

Using the Biot-Savart-law we can compute the magnetic field $B _ { \text {loop } } ( z )$ of the current-carrying loop along the $z$-axis to

$$
B _ { \text {loop } } ( z ) = \frac { \mu _ { 0 } \mathcal { E } } { 2 R } \frac { r ^ { 2 } } { \left( z ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } .
$$

This expression for $B _ { \text {loop } }$ yields

$$
F _ { 1 } = \frac { \mu _ { 0 } \mathcal { E } A N I r ^ { 2 } } { 2 R \ell } \left( \frac { 1 } { r ^ { 3 } } - \frac { 1 } { \left( \ell ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } \right) \stackrel { \ell \gg r } { \approx } \frac { \mu _ { 0 } \mathcal { E } A N I } { 2 \ell R r } ,
$$

and $F _ { 1 }$ is directed to $+ z$. From a similar calculation we get $\vec { F } _ { 2 } = - \vec { F } _ { 1 }$.

| Grading scheme: T1 part a., Solution IV. |  |
| :--- | :--- |
| idea of dividing the solenoid into short segments of equal lengths | 1.0 p |
| giving the magnetic moment of a segment | 0.5 p |
| expressing the force on a segment by a derivative of the magnetic field | 1.0 p |
| calculating the field of the currentcarrying loop from Biot-Savart-law (alternatively, arguing that only the field at center of loop is important 0.5 p and calculating this field 0.5 p) | 1.0 p |
| integrating force contributions to find total force on solenoid (max. 0.5 if final expression still contains integral) | 1.0 p |
| correct direction for $\vec { F } _ { 1 } 0.5 \mathrm { p }$, and $\vec { F } _ { 2 }$ antiparallel to $\vec { F } _ { 1 } 0.5 \mathrm { p }$ | 1.0 p |
| Total for part a.: | 5.5 p |


Note: Using the idea of dividing the solenoid into small segments other solutions are possible as well (e.g. considering small dipole contributions). In this case the grading scheme of Solution IV should be adapted accordingly. One recurring solution of this type is to divide the solenoid into small segments of length $\mathrm { d } z$, compute the $B$-field in $z$-direction effected by current-loop from Biot-Savart, use Gauss law to relate the radial $B$ flux through the segment to $\mathrm { d } B / \mathrm { d } z$. compute the force on the segment using Lorentz forces and integrate the force over the length of the solenoid. In this case the marking scheme is adapted in the second aspect, awarding 0.5 p for the idea of using Gauss law to find radial $B$-field

Solution V. In this solution we relate the force acting on the solenoid to the change in energy of the system. Investigate the case when point $O _ { 1 }$ is located at $O$ first. Due to the same current directions, the magnetic force $\vec { F } _ { 1 }$ acting on the solenoid points in direction $+ z$. While keeping the solenoid in equilibrium with external force $- \vec { F } _ { 1 }$, let it move by a small displacement $\delta z$ in the positive $z$ direction. The work done by the external force is equal to the change in energy of the system:

$$
- \vec { F } _ { 1 } \cdot \delta \vec { z } = - F _ { 1 } \delta z = \delta E _ { \text {total } } .
$$

We should be aware of the fact that the system is not closed: there is also a battery and a current source included in the circuits. Hence, $\delta E _ { \text {total } }$ contains the change in field energy and the change of energy of the power sources:

$$
\delta E _ { \text {total } } = \delta E _ { \text {field } } + \delta E _ { \text {sources } }
$$

Since the force does not depend on what kind of power supplies we have, let us replace the battery with a current source providing constant current $J = \mathcal { E } / R$.

Now we find a relation between $\delta E _ { \text {field } }$ and $\delta E _ { \text {sources } }$ The energy stored in the field can be expressed as

$$
E _ { \mathrm { field } } = \frac { 1 } { 2 } L _ { 1 } I ^ { 2 } + \frac { 1 } { 2 } L _ { 2 } J ^ { 2 } + L _ { 12 } I J ,
$$

where $L _ { 1 }$ is the inductance of the solenoid, $L _ { 2 }$ is that of the loop and $L _ { 12 }$ is the mutual inductance of the system. Upon small displacement $\delta z$, only the last term changes, so

$$
\delta E _ { \text {field } } = \delta L _ { 12 } \cdot I J
$$

The small displacement results in a change of the flux enclosed by the loop and the solenoid. The flux created by the solenoid on the loop is $L _ { 12 } I$, and the flux created by the loop through the solenoid is $L _ { 21 } J = L _ { 12 } J$ (here we used the symmetry property of mutual inductance). During the short time $\delta t$ of the displacement $\delta z$, the e.m.f. induced in the loop ( $V _ { \text {ind } } ^ { \text {loop } }$ ) and the solenoid ( $V _ { \text {ind } } ^ { \text {solenoid } }$ ) can be expressed with Faraday's law:

$$
V _ { \text {ind } } ^ { \text {loop } } = - \frac { \delta L _ { 12 } } { \delta t } I , \quad V _ { \text {ind } } ^ { \text {solenoid } } = - \frac { \delta L _ { 12 } } { \delta t } J .
$$

In order to keep the current in the circuits constant, the current sources need to provide an additional power, so they give away extra energy (in addition to Joule heat). This energy change of the sources is given by:

$$
\delta E _ { \text {sources } } = \left( V _ { \text {ind } } ^ { \text {loop } } J + V _ { \text {ind } } ^ { \text {solenoid } } I \right) \delta t .
$$

Using the previous results we finally get:

$$
\delta E _ { \text {sources } } = - 2 \delta L _ { 12 } I J = - 2 \delta E _ { \text {field } }
$$

which means $\delta E _ { \text {total } } = - \delta E _ { \text {field } }$, and hence $F _ { 1 } \delta z =$ $\delta E _ { \text {field } } = \delta L _ { 12 } I J$.

Note 1. Naively, one might think that we get the result $\delta E _ { \text {total } } = \delta E _ { \text {field } }$ if we imagine superconducting wires without power supplies. One can show with detailed calculation that in that case the currents in the loop and the coil change, as the total flux enclosed by a superconducting circuit must remain constant. The correct physical justification of the appearing negative sign is an important part of the solution.

Now we calculate the change in mutual inductance $\delta L _ { 12 }$. The small displacement $\delta z$ can be imagined as we take a short segment from the tail $O _ { 2 }$ of the coil (consisting of $N \delta z / \ell$ turns) and move it to the head $O _ { 1 }$. As a result, the flux produced by the loop on the solenoid increases by

$$
\delta \Phi _ { 12 } = \delta L _ { 21 } J = \underbrace { \frac { \mu _ { 0 } J } { 2 r } } _ { B _ { \text {loop } } ^ { \text {(at center) } } } A \frac { N } { \ell } \delta z .
$$

From this we get:

$$
F _ { 1 } = \frac { \delta L _ { 12 } I J } { \delta z } = \frac { \mu _ { 0 } \mathcal { E } N A I } { 2 \ell R r } .
$$

If the tail $O _ { 2 }$ of the solenoid is located at point $O$, the coefficient of mutual inductance decreases upon small displacement, which results in $\vec { F } _ { 2 } = - \vec { F } _ { 1 }$.

Note 2. The field energy can be also calculated from the energy density integrated for the whole space. Instead of calculating the total field energy, it is easier to find its change using the same idea presented above, i.e. take a segment of length $\delta z$ from the tail and move it to the head of the solenoid. Assuming $\ell \gg \delta z \gg \sqrt { A }$, the field created by the solenoid inside that segment is $\mu _ { 0 } N I / \ell$ (because the field differs from this only at distance $\sim \sqrt { A }$ from the ends). At the end we get the same result for the change in field energy using the expression:

$$
\delta E _ { \text {field } } = \frac { 1 } { 2 \mu _ { 0 } } \left[ \left( B _ { \text {loop } } ^ { \text {(at centre) } } + B _ { \text {sol } } \right) ^ { 2 } - \left( B _ { \text {loop } } ^ { \text {(at centre) } } \right) ^ { 2 } - B _ { \text {sol } } ^ { 2 } \right] A \delta z .
$$

Note 3. A third possibility is to calculate the potential energy change of the displaced few turns of the solenoid. The magnetic moment of a segment of length $\delta z$ is $\vec { m } = \vec { e } _ { z } I A N \delta z / \ell$, and its energy in external field is $E _ { \text {pot } } = - \vec { m } \vec { B }$. Important to highlight that this potential energy already contains the factor of -1 discussed at the beginning of the solution, so the force acting on the solenoid can be expressed as

$$
F _ { 1 } = - \frac { \delta E _ { \mathrm { pot } } } { \delta z } .
$$

The external field is the superposition of the field $\vec { B } _ { \text {loop } }$ created by the loop and the field $\vec { B } _ { \text {sol } }$ created by the coil (note that this latter contains a factor of 1/2 compared to the field in the middle of the solenoid). Since $\vec { B } _ { \text {sol } }$ is the same at the two ends $O _ { 1 }$ and $O _ { 2 }$, the energy change is:

$$
\delta E _ { \mathrm { pot } } = - \vec { m } \vec { B } _ { \text {loop } } ^ { \text {(at center) } } - \vec { m } \vec { B } _ { \text {loop } } ( z = \ell ) .
$$

The second term can be neglected, and we get

$$
\delta E _ { \mathrm { pot } } = - \frac { I A N \delta z } { \ell } \frac { \mu _ { 0 } \mathcal { E } } { 2 R r } ,
$$


which gives the same answer for $F _ { 1 }$ as the other ideas.

| Grading scheme: T1 part a., Solution V. |  |
| :--- | :--- |
| Equating force to energy change in system | 0.5 p |
| Formulating energy equation (if sources are missing 0.2 p) | 0.5 p |
| expressing $\delta E _ { \text {field } }$ through contributions from currents and an interaction term | 1.0 p |
| deriving that $\delta E _ { \text {sources } } = - 2 \delta E _ { \text {field } }$ | 1.0 p |
| computing the change in field energy and final result for force. | 1.5 p |
| correct direction for $\vec { F } _ { 1 } 0.5 \mathrm { p }$, and $\vec { F } _ { 2 }$ antiparallel to $\vec { F } _ { 1 } 0.5 \mathrm { p }$ | 1.0 p |
| Total for part a.: | 5.5 p |

Part $b$. In order to plot a graph displaying the important features, it is beneficial to make some calculations. The problem text does not specify the zero point of time, so take $t = 0$ in the moment when the center of the solenoid is located at point $O$. This means that at time $t$ the head $O _ { 1 }$ of the solenoid is located at $z _ { 1 } = \ell / 2 + v t$, while the tail $O _ { 2 }$ is located at $z _ { 2 } = - \ell / 2 + v t$.

The current flowing in the loop at an arbitrary moment of time is given by

$$
J ( t ) = \frac { \mathcal { E } + V _ { \mathrm { ind } } ( t ) } { R } ,
$$

where $V _ { \text {ind } } ( t )$ is the induced electromotive force in the loop as a function of time. Two different approaches can be found below which give an analytical formula for this induced e.m.f.

Solution I. We may again approximate the magnetic field outside the solenoid by a field created by two magnetic poles at $z _ { 1 }$ and $z _ { 2 }$, respectively. The resulting magnetic flux through the loop can be calculated by considering the solid angle the loop extends as seen from either of the poles. Using the total magnetic flux of the poles as calculated in Solution I for part a. we get

$$
\Phi _ { \text {loop } } = \frac { \mu _ { 0 } N I A } { 2 \ell } \left\{ \frac { z _ { 1 } } { \sqrt { z _ { 1 } ^ { 2 } + r ^ { 2 } } } + 1 - \frac { z _ { 2 } } { \sqrt { z _ { 2 } ^ { 2 } + r ^ { 2 } } } - 1 \right\} .
$$

Using this result and $\dot { z _ { 1 } } = \dot { z _ { 2 } } = v$ the induced e.m.f. can be calculated with Faraday's law $V _ { \text {ind } } = - \mathrm { d } \Phi _ { \text {loop } } / \mathrm { d } t$, which gives

$$
V _ { \mathrm { ind } } = - v \frac { \mu _ { 0 } N I A } { 2 \ell } \left\{ \frac { r ^ { 2 } } { \left( z _ { 1 } ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } - \frac { r ^ { 2 } } { \left( z _ { 2 } ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } \right\} .
$$

Solution II. The rate of change of flux produced by the solenoid through the loop can be expressed in terms of the mutual inductance $L _ { 12 }$ of the solenoid with respect to the loop:

$$
\frac { \mathrm { d } \Phi _ { 12 } } { \mathrm {~d} t } = \frac { \mathrm { d } } { \mathrm {~d} t } \left( L _ { 12 } I \right) = I \frac { \mathrm {~d} L _ { 12 } } { \mathrm {~d} t } .
$$

Using the symmetry property of mutual inductance $\left( L _ { 12 } = L _ { 21 } \right)$, instead of calculating $\dot { L } _ { 12 }$ let us find the time derivative of $L _ { 21 }$, i.e. the mutual inductance of the loop with respect to the solenoid. For this, imagine that the current in the loop is constant $J _ { 0 }$, and calculate the change of flux produced by the loop through the solenoid during a short amount of time $\mathrm { d } t$ ! The small displacement $v \mathrm {~d} t$ of the solenoid can be considered as moving a short segment of length $v \mathrm {~d} t$ from the tail to the head. The change in flux in this segment is given by

$$
\mathrm { d } \Phi _ { 21 } = \mathrm { d } L _ { 21 } J _ { 0 } = v \mathrm {~d} t \frac { N A } { \ell } \left( B _ { \text {loop } } \left( z _ { 1 } \right) - B _ { \text {loop } } \left( z _ { 2 } \right) \right) .
$$

Using the formula for $B _ { \text {loop } } ( z )$ obtained from BiotSavart-law (see Solution IV for part a.) we get

$$
\frac { \mathrm { d } L _ { 21 } } { \mathrm {~d} t } = v \frac { N A } { \ell } \frac { \mu _ { 0 } } { 2 } \left[ \frac { r ^ { 2 } } { \left( z _ { 1 } ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } - \frac { r ^ { 2 } } { \left( z _ { 2 } ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } \right] .
$$

From this the induced e.m.f. $V _ { \text {ind } } = I \dot { L } _ { 12 } = I \dot { L } _ { 21 }$ can be expressed:

$$
V _ { \text {ind } } ( t ) = - \frac { \mathrm { d } \Phi _ { 21 } } { \mathrm {~d} t } = - v \frac { \mu _ { 0 } N I A } { 2 \ell } \left[ \frac { r ^ { 2 } } { \left( z _ { 1 } ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } - \frac { r ^ { 2 } } { \left( z _ { 2 } ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } \right]
$$

Although the analytical result gives the correct expression for the current flowing in the loop, the task in part b. was to plot the graph.

The graph should reflect the most important features of the function. First, $V _ { \text {ind } } ( t )$ is an odd function, i.e. $V _ { \text {ind } } ( - t ) = - V _ { \text {ind } } ( t )$. For $t < 0$ the flux through the loop increases meaning that $V _ { \text {ind } } < 0$ and $J < \mathcal { E } / R$, while for $t > 0$ the flux decreases, which results $V _ { \text {ind } } > 0$ and $J > \mathcal { E } / R$.

In different ranges of time, $V _ { \text {ind } } ( t )$ behaves very differently. For times $t \ll - \ell / ( 2 v )$ and $t \gg \ell / ( 2 v )$ the solenoid is very far (approximately at distance $v t$ ) from the current loop, and its field can be approximated by dipole field (proportional to $v ^ { - 3 } t ^ { - 3 }$ ). The time derivative of the field is proportional to the induced e.m.f. in the loop, so in this time range $V _ { \text {ind } } ( t ) \propto t ^ { - 4 }$, and has very small value. The same result can be concluded from the Taylor expansion of the complete analytical formula for $V _ { \text {ind } }$.

When $t \approx \pm \ell / ( 2 v )$ (with the accuracy of $r / v$ ) the effect of one pole of the solenoid can be neglected. The absolute value of the induced e.m.f. is maximal here:

$$
\left| V _ { \mathrm { ind } } \right| = v \frac { \mu _ { 0 } N I A } { 2 \ell r } ,
$$

so the maximal and minimal value of the current are

$$
J _ { \min } = \frac { \mathcal { E } } { R } - v \frac { \mu _ { 0 } N I A } { 2 R r \ell } , \quad J _ { \max } = \frac { \mathcal { E } } { R } + v \frac { \mu _ { 0 } N I A } { 2 R r \ell } .
$$

Around the maximum $V _ { \text {ind } }$ is a quadratic function of time, as it can be proved with expanding the complete analytical formula.

When the centre of the solenoid is close to the centre of the loop, i.e. $| t | \ll \ell / ( 2 v )$, the flux barely changes, so $V _ { \text {ind } } \approx 0$. A more careful analysis gives a very weak linear dependence on time.

The statements above are summarized in the table below.


| time range | $V _ { \text {ind } } ( t )$ | $J ( t )$ |
| :--- | :--- | :--- |
| $t \ll - \ell / ( 2 v )$ | small, $\propto - 1 / t ^ { 4 }$ | $\approx \mathcal { E } / R$ |
| $t \approx - \ell / ( 2 v )$ | large, $\propto - \left( t + \frac { \ell } { 2 v } \right) ^ { 2 }$ | $J _ { \text {min } }$, dip |
| $\| t \| \ll \ell / ( 2 v )$ | negligible $( \propto t )$ | $\approx \mathcal { E } / R$ |
| $t \approx \ell / ( 2 v )$ | large, $\propto \left( t - \frac { \ell } { 2 v } \right) ^ { 2 }$ | $J _ { \text {max } }$, peak |
| $t \gg \ell / ( 2 v )$ | small, $\propto 1 / t ^ { 4 }$ | $\approx \mathcal { E } / R$ |


![](../../../figures/solution-ocr/dc8743288f2f2fdd632a8b35.jpg)
Figure 1: Qualitative graph of $J$ as a function of time for $\ell = 5 r$.

| Grading scheme: T1 part b. |  |
| :--- | :--- |
| relating $J ( t )$ to $V _ { \text {ind } }$ or other suitable quantity (independent of result in a.) | 0.5 p |
| the $J ( t )$ graph is smooth everywhere (if graph does not capture whole domain including asymptotics, 0 p.) | 0.5 p |
| $J ( t ) \approx \mathcal { E } / R$, except if $t \approx \pm \ell / ( 2 v )$ (if $J ( t ) \approx \mathcal { E } / R$ only asymptotically, 0.2 p) | 0.5 p |
| $J ( t ) - \mathcal { E } / R$ is clearly an odd function (computing analytical expression for $J$ and graph showing odd behavior is considered sufficient, if reasoning is missing, 0.2 p) | 0.5 p |
| $J ( t )$ has a minimum first, then a maximum $\ell / v$ time later (if reversed or the time is incorrect, 0 p) | 1.0 p |
| analytical formula for $J _ { \text {min } }$ and $J _ { \text {max } }$ (either approximate or exact), if analytical expression is given but minmax values are not determined 0.5 p are given for deriving the formula and realizing that min-max exist. | 1.0 p |
| it is indicated that the duration of the peak and dip is in the range of $r / v$ | 0.5 p |
| if $J ( z )$ instead of $J ( t )$ is plotted or labels are missing on the axes 0.5 p are deducted from part b. but only if 0.5 or more marks are given to the actual graph at all | (-0.5 p) |
| Total for part b.: | 4.5 p |

Figure 2: Mechanical accelerator

If no graph is drawn: max. 0.5 p for relating $J ( t )$ to $V _ { \text {ind } }$
and 1.0 p for $J _ { \text {min } }$ and $J _ { \text {max } }$ (for a general formula without evaluation of min and max: 0.5 p) are given.
If $B$-field of the solenoid is assumed constant across loop or area for flux is taken to be $A , 0$ p are awarded for min and max.

Additional general guidelines for grading T1:

- Grading should always follow one of the solutions described. If approaches for solutions are mixed the one resulting in the highest marks is considered.
- Granularity for marks is 0.1 p.
- A simple numerical error resulting from a typo is punished by 0.1 p unless the grading scheme explicitly says otherwise.
- Errors which cause dimensionally wrong results are punished by at least 50 \% of the marks if dimensions can easily be checked. In more complicated cases less marks may be deducted.
- Propagating errors are not punished repeatedly unless they either lead to considerable simplifications or wrong results whose validity can easily be checked.
- No marks are given for the directions of the forces in a. if forces are physically incorrect (e.g. resulting force is calculated to zero) or if no forces are calculated.
- If current $I$ in solenoid is used as current in loop instead of $\mathcal { E } / R$ or vice versa in the calculation of the force 0.5 p are substracted.
- If only $z$-component of $B$-field (either from solenoid or loop) is determined and the force on the solenoid is derived from this using Lorentz-forces, marks are only given for ideas (max. 1.0 p.) and the use of the BiotSavart law (max. 1.0 p)
