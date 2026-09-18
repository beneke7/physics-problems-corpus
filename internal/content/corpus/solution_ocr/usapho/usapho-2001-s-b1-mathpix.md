---
id: solution-ocr-usapho-2001-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2001_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2001-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
B1. a. (5) Using Gauss's Law the field is $E = k \frac { Q _ { \text {enc } } } { r ^ { 2 } } \quad$ where $k$ is Coulomb's constant and $Q _ { \text {enc } }$ is the total charge enclosed by a Gaussian sphere of radius $r$. Since $b > r > a , Q _ { \text {enc } } = + Q$. The field direction is radially outward and

$$
\vec { E } = k \frac { Q } { r ^ { 2 } } \text { radially outward }
$$

b. (5) The total potential anywhere in the region $b \geq r \geq a$ is

$$
V = k \frac { ( - Q ) } { b } + k \frac { Q } { r }
$$

where the first term is due to the outer sphere and the second term to the inner sphere. finding the difference between $V$ at $r = a$ and $V$ at $r = b$,

$$
\begin{equation*}
V = \left( k \frac { ( - Q ) } { b } + k \frac { Q } { a } \right) - \left( k \frac { ( - Q ) } { b } + k \frac { Q } { b } \right) = k Q \left( \frac { 1 } { a } - \frac { 1 } { b } \right) \tag{B1-1}
\end{equation*}
$$

c. (5) The capacitance is defined

$$
C = \frac { Q } { V } .
$$

Inserting equation (B1-1)

$$
C = \frac { Q } { k Q \left( \frac { 1 } { a } - \frac { 1 } { b } \right) } = \frac { a b } { k ( b - a ) }
$$

d. (5) The work done in charging the capacitor to charge $Q$ and voltage $V$ is $W = \frac { 1 } { 2 } Q V$. This is equal to the stored energy

$$
U = \frac { 1 } { 2 } Q V = \frac { 1 } { 2 } \frac { Q ^ { 2 } } { C } = \frac { k ( b - a ) } { 2 a b } Q ^ { 2 }
$$

e. (10) Since the capacitor has been disconnected from the battery without discharging the charge on the shells is still $Q$. Using the subscript K to denote quantities with the dielectric inserted, $Q _ { K } = Q$.
In $E , V$, and $C$

$$
k = \frac { 1 } { 4 \pi \varepsilon _ { o } } \rightarrow \frac { 1 } { 4 \pi K \varepsilon _ { o } } = \frac { k } { K }
$$

Therefore

$$
\begin{aligned}
E _ { K } & = E / K \\
V _ { A } & = V / K \\
C _ { K } & = K C
\end{aligned}
$$


For the stored energy

$$
U _ { K } = \frac { 1 } { 2 } Q _ { K } V _ { K } = \frac { 1 } { 2 } Q \frac { V } { K } = \frac { U } { K }
$$

f. (5) The magnitude of the field at $b > r > a$ is $E _ { K } = \frac { E } { K } = k \frac { ( Q / K ) } { r ^ { 2 } }$. Using Gauss's Law, the total charge enclosed by a Gaussian sphere of radius $r$ is $Q _ { \text {enc } } = Q / K$. This charge includes the charge on the conducting shell $+ Q$ and the charge on the inner surface of the dielectric $Q _ { \mathrm { D } }$.

$$
Q _ { \text {enc } } = Q / K = + Q + Q _ { D }
$$

Solving for

$$
Q _ { D } = - \frac { Q ( K - 1 ) } { K }
$$

g. (10) Since the capacitor is left connected to the battery

$$
V _ { K } = V
$$

Since $V$ is unchanged so is $E$.

$$
E _ { K } = E .
$$

The capacitance is independent of whether or not the battery was connected.

$$
C _ { K } = K C
$$

Additional charge flows onto the capacitor

$$
Q _ { K } = C _ { K } V _ { K } = K C V = K Q
$$

The energy stored is

$$
U _ { K } = \frac { 1 } { 2 } Q _ { K } V _ { K } = \frac { 1 } { 2 } K Q V = K U
$$

Applying Gauss's Law to find the total charge enclosed by a Gaussian sphere with radius $r$,

$$
Q _ { e n c } = Q = Q _ { K } + Q _ { D } = K Q + Q _ { D }
$$

Solving for

$$
Q _ { D } = - Q ( K - 1 )
$$

h. (5) The two halves can be considered capacitors in parallel. Each has half the capacitance it would have if it were whole. Therefore

$$
C = C _ { 1 } + C _ { 2 } = \frac { 1 } { 2 } \frac { K _ { 1 } a b } { k ( b - a ) } + \frac { 1 } { 2 } \frac { K _ { 2 } a b } { k ( b - a ) } = \frac { 1 } { 2 } \frac { \left( K _ { 1 } + K _ { 2 } \right) a b } { k ( b - a ) }
$$
