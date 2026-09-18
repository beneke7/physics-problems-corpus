---
id: solution-ocr-nbpho-2019-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2019-self-gravitating-gas]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
6. Self-gravitating gas (10 points) - Eero Vaher (v: Jaan Kalda).(Solution: Taavet Kalda)
i) (2 points) Consider the parcel having crosssectional area of $S$ and thickness $\mathrm { d } r$. Let the local density of the gas at that parcel be $\rho$. Due to spherical symmetry, the gravitational field acting on the parcel will be $g =$ $- G \frac { M ( r ) } { r ^ { 2 } }$ and thus, the gravitational force is $F _ { g } = - G \frac { M ( r ) m } { r ^ { 2 } } = - G \frac { M ( r ) } { r ^ { 2 } } S \mathrm {~d} r \rho$. This is essentially due to Gauss' Law for gravitational field. The gas will also experience the gas pressure $p$ from the bottom side acting outward and gas pressure $p + \mathrm { d } p$ acting inward from the top surface. This pressure will exert a total force of $F _ { p } = ( p - p - \mathrm { d } p ) S$. In a hydrastatical equilibrium, $F _ { p } + F _ { g } = 0$, thus $S \mathrm {~d} p = - G \frac { M ( r ) S \rho } { r ^ { 2 } } \mathrm {~d} r$ or in other words, $p ^ { \prime } = - G \frac { M ( r ) \rho } { r ^ { 2 } }$.
ii) (2 points) All the subsequent integrals will be from the centre of the gas cloud all the way to the edge where the pressure will be 0. The thermal energy of the gas can be expressed as $U = \int n ( r ) 4 \pi r ^ { 2 } \mathrm {~d} r \langle E \rangle$, where $\langle E \rangle = \frac { 3 } { 2 } k T$ is the average energy of one gas molecule. From the ideal gas law, $p = n k T$ so $U =$ $\frac { 3 } { 2 } \int p \mathrm {~d} V$. We want the integral to be of the form $U = - \alpha \int V \mathrm {~d} p$. For that we can use integration by parts: $\int p \mathrm {~d} V = \left. p V \right| _ { \text {centre } } ^ { \text {edge } } - \int V \mathrm {~d} p$. The limits for $p V$ are both zero because in both cases, either $p = 0$ or $V = 0$. Therefore

$$
U = - \frac { 3 } { 2 } \int V \mathrm {~d} p ,
$$

and $\alpha = \frac { 3 } { 2 }$.
iii) (3 points) Gravitational potential energy


is of the form $E _ { G } = - \int \frac { G M ( r ) } { r } \mathrm {~d} M =$ $- \int \frac { G M ( r ) } { r } 4 \pi r ^ { 2 } \mathrm {~d} r \rho$. To simplify this, we can use the result from the first part $G M =$ $- \frac { \mathrm { d } p } { \mathrm {~d} r } \frac { r ^ { 2 } } { \rho }$. Therefore,

$$
E _ { G } = \int \mathrm { d } p 4 \pi r ^ { 3 } = 3 \int \mathrm {~d} p V
$$

From this we see that

$$
\frac { E _ { G } } { 3 } = - \frac { 2 } { 3 } U
$$

or

$$
U = - \frac { 1 } { 2 } E _ { G } .
$$

Therefore $\beta = \frac { 1 } { 2 }$. Alternatively, one can write this immediately down from virial theorem.
iv) (1 point) With heat radiation, the total energy of the system is slowly being radiated away. In this model, the total energy is negative and some observations about the system can be made. If we increase the dimension of the gas cloud, then clearly the magnitude of the total energy will go down. If we increase the temperature, then the magnitude of the total energy will go up. This is sufficient to determine that due to heat radiation, the temperature of the gas cloud will go up while the radius of the gas cloud will get smaller.
v) (2 points) In the case of a plasma ball, both the electrons and protons are free to move around. Both electrons and protons can be treated as exerting equal pressure. This effectively doubles the average energy of one molecule from $\frac { 3 } { 2 } k T$ to $3 k T$ while keeping the gravitational energy expression the same. Therefore $U = - 3 \int V \mathrm {~d} p = - E _ { G }$ so the new proportionality factor between the thermal energy and gravitational energy is $\beta = 1$.
