---
id: solution-ocr-apho-2008-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2008/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2008-t2]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Solutions:

S1. Consider a positive ion in the NaCl is surrounded by 26 neighbors (see Fig.1) . The first group of 6 nearest "central" neighbors have negative charges. They are located in distance r from the considered ion and their contribution is attractive:

$$
V _ { C 0 ^ { \prime } } ( r ) = - 6 \cdot k \frac { e ^ { 2 } } { r }
$$

The next group of "central" neighbors are 12 ions standing in distance $\sqrt { r ^ { 2 } + r ^ { 2 } } = \sqrt { 2 } r$. All they have positive charge and act repulsively

$$
V _ { C 0 ^ { \prime \prime } } ( r ) = + \frac { 12 } { \sqrt { 2 } } \cdot k \frac { e ^ { 2 } } { r }
$$

Easily to guess that the "vertex" 8 negative ions standing in distance $\sqrt { r ^ { 2 } + r ^ { 2 } + r ^ { 2 } } = \sqrt { 3 } r$ produce an attractive potential:

$$
V _ { C 0 ^ { m } } ( r ) = - \frac { 8 } { \sqrt { 3 } } \cdot k \frac { e ^ { 2 } } { r }
$$

Having done summation of these contributions, we obtain the zero-order Coulomb potential

$$
V _ { C 0 } ( r ) = V _ { C 0 ^ { \prime } } ( r ) + V _ { C 0 ^ { \prime \prime } } ( r ) + V _ { C 0 ^ { \prime \prime } } ( r ) = - \alpha _ { 0 } \cdot k \frac { e ^ { 2 } } { r }
$$

where the approximate Madelung constant reads

$$
\alpha _ { 0 } = 6 - \frac { 12 } { \sqrt { 2 } } + \frac { 8 } { \sqrt { 3 } } \approx 2.134
$$

S2. The net potential energy is the sum of attractive and repulsive exponential parts and reads

$$
V _ { 1 } ( r ) = V _ { a t t } + V _ { r e p 1 } = - \alpha \cdot k \frac { e ^ { 2 } } { r } + \lambda \cdot e ^ { - r / \rho }
$$

The condition for the equilibrium position $\mathrm { r } = r _ { 0 }$ is

$$
F \left( r _ { 0 } \right) = \frac { d V _ { 1 } } { d r } \left( r _ { 0 } \right) = - \alpha \cdot k \frac { e ^ { 2 } } { r _ { 0 } ^ { 2 } } + \frac { \lambda } { \rho } e ^ { - r _ { 0 } / \rho } = 0
$$

Then, $r _ { 0 }$ may be defined from

$$
e ^ { - r _ { 0 } / \rho } = \rho \cdot \frac { \alpha \cdot k \cdot e ^ { 2 } } { \lambda \cdot r _ { 0 } ^ { 2 } }
$$

The equilibrium potential is:

$$
V _ { 1 } \left( r _ { 0 } \right) = - \alpha \cdot k \frac { e ^ { 2 } } { r _ { 0 } } \left( 1 - \frac { \rho } { r _ { 0 } } \right)
$$


S3. The dissociation energy corresponding to an ion (pair of atoms) is

$$
E _ { \text {pair } } = \frac { E _ { \text {dis } } } { N _ { A } } = \frac { - 764 [ \mathrm {~kJ} / \mathrm { mole } ] } { 6.022 \cdot 10 ^ { 23 } [ 1 / \mathrm { mole } ] } \approx - 1.269 \cdot 10 ^ { - 18 } [ \mathrm {~J} ]
$$

This energy will be spent to overcome the potential energy $E _ { \text {pair } } = V _ { 1 } \left( r _ { 0 } \right) = - k \cdot \alpha \frac { e ^ { 2 } } { r _ { 0 } } \left( 1 - \frac { \rho } { r _ { 0 } } \right)$
Then,

$$
\frac { \rho } { r _ { 0 } } = 1 + \frac { r _ { 0 } E _ { \text {pair } } } { k \alpha e ^ { 2 } } \approx 1 - \frac { 0.282 \cdot 10 ^ { - 9 } \cdot 1.269 \cdot 10 ^ { - 18 } } { 9 \cdot 10 ^ { 9 } \cdot 1.7476 \cdot \left( 1.6 \cdot 10 ^ { - 19 } \right) ^ { 2 } } \approx 0.112 \ldots
$$

Subsequently,

$$
\rho = 0.112 \cdot r _ { 0 } \approx 0.0316 \cdot 10 ^ { - 9 } [ \mathrm {~m} ]
$$

This result is in good agreement with experimental data (see Table 2).

| Crystal | r [nm] | $\rho$ [nm] | $\mathrm { E } _ { \text {dis } } [ k J /$ mole $]$ |
| :--- | :--- | :--- | :--- |
| NaCl | 0.282 | 0.032 | -764.4 |
| LiF | 0.214 | 0.029 | -1014.0 |
| RbBr | 0.345 | 0.034 | -638.8 |

Table 2
Properties of Salt Crystals with the NaCl Structure [C.Kittel, "Introduction to Solid
State Physics", N.Y., Wiley (1976) p.92]

S4. The repulsive inverse-power part leads to the following net potential

$$
V _ { 2 } ( r ) = V _ { \text {att } } + V _ { \text {rep } 2 } = - \alpha \cdot k \frac { e ^ { 2 } } { r } + \frac { b } { r ^ { n } }
$$

The equilibrium position $\mathrm { r } = r _ { 0 }$ is defined from the zero-force condition

$$
F \left( r _ { 0 } \right) = \frac { d V _ { 2 } \left( r _ { 0 } \right) } { d r } = - \alpha \cdot k \frac { e ^ { 2 } } { r _ { 0 } ^ { 2 } } - \frac { n b } { r _ { 0 } ^ { n + 1 } } = 0
$$

The equation for $r _ { 0 }$ reads $r _ { 0 } ^ { n - 1 } = \frac { b \cdot n } { \alpha \cdot k \cdot e ^ { 2 } }$
Then, $\quad V _ { 2 } \left( r _ { 0 } \right) = - \alpha \cdot k \frac { e ^ { 2 } } { r _ { 0 } } \left( 1 - \frac { 1 } { n } \right) = V _ { \text {Coulomb } } \left( r _ { 0 } \right) + V _ { \text {Pauli } } \left( r _ { 0 } \right)$
Here, the first term corresponds to the Coulomb potential and the second - to the Pauli's.
S5. Comparing with previous result (see 3. and 4.) we express the Born exponent

$$
n = \frac { r _ { 0 } } { \rho } \approx \frac { 1 } { 0.112 } \approx 9
$$


With $\mathrm { n } = 9$ one finds that

$$
V _ { \text {Coulomb } } \left( r _ { 0 } \right) : V _ { \text {Pauli } } \left( r _ { 0 } \right) = 1 : ( 1 / 9 )
$$

The Coulomb and the Pauli potentials contribute to the net potential with a proportion 9:1. This result agrees well with experimental data (see, Table 3).

| Ion type | n |
| :--- | :--- |
| $N a ^ { + } , F ^ { + }$ | 7 |
| $K ^ { + } , \mathrm { Cu } ^ { + } , \mathrm { Cl } ^ { - }$ | 9 |
| $A u ^ { + } , I ^ { + }$ | 12 |

Table 3. The experimental fit for the Born exponent.
[CRC Handbook of Physics, 2004]

S6. The ionization energy of the $\mathbf { N a }$ atom is $+ \mathbf { 5 . 1 4 ~ e V }$ while the electron affinity of the $\mathbf { C l }$ atom
is $- \mathbf { 3 . 6 1 ~ e V }$. Subsequently, the electron transfer energy per atom is the half difference

$$
E _ { \text {trans } } \approx \frac { + 5.14 - 3.61 } { 2 } [ \mathrm { eV } ] \approx + 0.77 [ \mathrm { eV } ]
$$

The total binding energy per atom in the NaCl crystal is:

$$
E _ { \text {bind } } = \frac { E _ { \text {pair } } } { 2 } + E _ { \text {trans } } = \frac { - 1.269 \cdot 10 ^ { - 18 } [ \mathrm {~J} ] } { 2 } + 1.232 \cdot 10 ^ { - 19 } [ \mathrm {~J} ] \approx \frac { - 0.511 \cdot 10 ^ { - 18 } [ \mathrm {~J} ] } { 1.602 \cdot 10 ^ { - 19 } [ \mathrm {~J} / \mathrm { eV } ] } \approx - 3.19 [ \mathrm { eV } ]
$$

This estimate is in satisfactory agreement with the experimental result

$$
E _ { \exp } \approx - 3.28 [ \mathrm { eV } ]
$$


[Marking Scheme] Ionic Crystal, Yukawa-type Potential and Pauli Principle

| $Q$ | Item | Answer | Points |
| :--- | :--- | :--- | :--- |
| 1. | Attractive Coulomb potential | $V _ { C 0 } ( r ) = V _ { C 0 ^ { \prime } } ( r ) + V _ { C 0 ^ { \prime \prime } } ( r ) + V _ { C 0 ^ { \prime \prime } } ( r ) = - \alpha _ { 0 } \cdot k \frac { e ^ { 2 } } { r }$ | 0.5 |
|  | Madelung constant | $\alpha _ { 0 } = 6 - \frac { 12 } { \sqrt { 2 } } + \frac { 8 } { \sqrt { 3 } } \approx 2.134$ | 1.0 |
| 2. | Equilibrium position | $F \left( r _ { 0 } \right) = \frac { d V _ { 1 } \left( r _ { 0 } \right) } { d r } = - \alpha \cdot k \frac { e ^ { 2 } } { r _ { 0 } ^ { 2 } } + \frac { \lambda } { \rho } e ^ { - r _ { 0 } / \rho } = 0$ | 0.5 |
|  | Net potential | $V _ { 1 } \left( r _ { 0 } \right) = - \alpha \cdot k \frac { e ^ { 2 } } { r _ { 0 } } \left[ 1 - \frac { \rho } { r _ { 0 } } \right]$ | 1.0 |
| 3. | Pair energy | $E _ { \text {pair } } = \frac { E _ { \text {dis } } } { N _ { A } } = \frac { - 764 [ \mathrm {~kJ} / \mathrm { mole } ] } { 6.022 \cdot 10 ^ { 22 } [ 1 / \mathrm { mole } ] } \approx - 1.269 \cdot 10 ^ { - 18 } [ \mathrm {~J} ]$ | 0.2 |
|  | Equation for potential | $E _ { \text {pair } } = V _ { 1 } \left( r _ { 0 } \right) = - k \alpha \frac { e ^ { 2 } } { r _ { 0 } } \left[ 1 - \frac { \rho } { r _ { 0 } } \right]$ | 0.9 |
|  | Equation for range parameter | $\frac { \rho } { r _ { 0 } } = 1 + \frac { r _ { 0 } E _ { \text {pair } } } { k \alpha e ^ { 2 } } \approx 1 - \frac { 0.282 \cdot 10 ^ { - 9 } \cdot 1.269 \cdot 10 ^ { - 18 } } { 9 \cdot 10 ^ { 9 } \cdot 1.7476 \cdot \left( 1.6 \cdot 10 ^ { - 19 } \right) ^ { 2 } } \approx 0.112 \ldots$ | 0.8 |
|  | Range parameter | $\rho = 0.112 \cdot r _ { 0 } \approx 0.0316 \cdot 10 ^ { - 9 } [ \mathrm {~m} ]$ | 0.1 |
| 4. | Equilibrium position | $F \left( r _ { 0 } \right) = \frac { d V _ { 2 } \left( r _ { 0 } \right) } { d r } = - \alpha \cdot k \frac { e ^ { 2 } } { r _ { 0 } ^ { 2 } } - \frac { n b } { r _ { 0 } ^ { n + 1 } } = 0$ | 0.5 |
|  | Equation for $r _ { 0 }$ | $r _ { 0 } ^ { n - 1 } = \frac { b \cdot n } { \alpha \cdot k \cdot e ^ { 2 } }$ | 0.5 |
|  | Net potential | $V _ { 2 } \left( r _ { 0 } \right) = - \alpha \cdot k \frac { e ^ { 2 } } { r _ { 0 } } \left[ 1 - \frac { 1 } { n } \right]$ | 1.0 |
| 5. | Born exponent | $n = \frac { r _ { 0 } } { \rho } \approx \frac { 1 } { 0.112 } \approx 9$ | 1.2 |
|  | Proportions | $V _ { \text {Coulomb } } \left( r _ { 0 } \right) : V _ { \text {Pauli } } \left( r _ { 0 } \right) = 1 : ( 1 / 9 )$ | 0.3 |
| 6. | Electron transfer energy | $E _ { \text {trans } } \approx \frac { + 5.14 - 3.61 } { 2 } [ \mathrm { eV } ] \approx + 0.77 [ \mathrm { eV } ]$ | 0.5 |
|  | the total binding energy | $E _ { \text {bind } } = \frac { E _ { \text {pair } } } { 2 } + E _ { \text {trans } } = \frac { - 1.269 \cdot 10 ^ { - 18 } [ \mathrm {~J} ] } { 2 \cdot 1.602 \cdot 10 ^ { - 19 } [ \mathrm {~J} / \mathrm { eV } ] } + 0.77 [ \mathrm { eV } ] \simeq - 3.19 [ \mathrm { e }$ | 1.0 |
| total |  |  | 10.0 |
