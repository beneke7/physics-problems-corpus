---
id: solution-ocr-nbpho-2019-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2019-four-resistors]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
8. Four resistors (10 points) - Jaan Kalda and Eero Uustalu. i) (2 points) If we were to measure the resistance of each of the resistors separately, the reading would be something like $4.67 \mathrm { k } \Omega$, and the uncertainty would be four last digits, $40 \Omega$, plus 1\% of the reading, $47 \Omega$, all together $\delta r = 87 \Omega$. This can be a systematic error which means that different measurement errors can be strongly correlated so that for the sum $r _ { A } + r _ { B } + r _ { C } + r _ { D }$, we need to add the uncertainties (as opposed to adding squared uncertainties in the case of uncorrelated errors). Therefore, the uncertainty of $\bar { r } = \left( r _ { A } + r _ { B } + r _ { C } + r _ { D } \right) / 4$ would be also $87 \Omega$.

However, we can also measure a series connection of any number of these resistors. It can be easily seen that the smallest uncertainty will be if we connect all the four resistors in series, in which case we obtain $r _ { A } + r _ { B } + r _ { C } + r _ { D } = 18.68 \mathrm { k } \Omega$ with the uncertainty of $187 + 40 = 227 \Omega$; hence, $\bar { r } =$ $4.67 \mathrm { k } \Omega \pm 57 \Omega$.
ii) (2 points) The problem with the given resistors is that the ohmmeter cannot operate in the more precise $4 \mathrm { k } \Omega$ range. However, if we connect two resistors in parallel, we'll measure directly their harmonic average, and the ohmmeter will operate in the $4 \mathrm { k } \Omega$ range. Note that we shouldn't connect more than two resistors as that would reduce the reading without changing the range and hence, increase the relative error. So, we can obtain $r _ { A } r _ { B } / \left( r _ { A } + r _ { B } \right) = r _ { C } r _ { D } / \left( r _ { C } + r _ { D } \right) =$ $2.337 \mathrm { k } \Omega \pm 27.4 \Omega$, hence $\langle r \rangle = 4.674 \mathrm { k } \Omega \pm 55 \Omega$
iii) (1 point) The precision of direct measurments is not sufficient for distinguishing, which resistors have bigger resistance, and which have smaller. So, we need to build a bridge connection by connecting. For instance, we can connect the minus of the voltage source to the resistor $A$, connect $A$ to $B$, and $B$ - to the plus of the voltage source; we'll do the same with $C$ and $D$, and measure voltage between the junction $P$ between $A$ and $B$ and junction $Q$ between $C$ and $D$. In order to get the highest precision, we'll use the highest possible voltage of $U = 30 \mathrm {~V}$. If we connect $Q$ to the minus of the voltmeter and $P$ to the plus of the voltmeter, we might get the reading $V _ { 1 } = 7.5 \pm 0.5 \mathrm { mV }$. If we switch the order of the resistors $A$ and $B$, the reading becomes negative: $V _ { 1 } ^ { \prime } = - 17.5 \pm$ 0.5 mV : the potential of the junction $P$ became smaller. In the first case, the junction's potential was $U r _ { A } / \left( r _ { A } + r _ { B } \right)$, in the second case $- U r _ { B } / \left( r _ { A } + r _ { B } \right)$. So we conclude $r _ { A } >$ $r _ { B }$. Repeating this procedure with different connections, we'll find $r _ { A } > r _ { C } > r _ { D } > r _ { B }$.
iv) (5 points) With the data of the previous task we have

$$
\frac { r _ { A } - r _ { B } } { r _ { A } + r _ { B } } = \frac { V _ { 1 } - V _ { 1 } ^ { \prime } } { U } .
$$

Similarly we can have

$$
\frac { r _ { A } - r _ { C } } { r _ { A } + r _ { C } } = \frac { V _ { 2 } - V _ { 2 } ^ { \prime } } { U }
$$

with $V _ { 2 } = 7.5 \pm 0.5 \mathrm { mV }$ and $V _ { 2 } ^ { \prime } = - 0.8 \pm$ 0.4 mV; also

$$
\frac { r _ { A } - r _ { D } } { r _ { A } + r _ { D } } = \frac { V _ { 3 } - V _ { 3 } ^ { \prime } } { U }
$$

with $V _ { 3 } = 17.5 \pm 0.5 \mathrm { mV }$ and $V _ { 3 } ^ { \prime } = - 0.8 \pm$ 0.4 mV. With a very good approximation (negligible relative error), we can use $r _ { A } +$ $r _ { B } = r _ { A } + r _ { C } = r _ { A } + r _ { D } = 2 \bar { r }$ so that with the given data we obtain:
$\frac { r _ { A } - r _ { B } } { 2 \bar { r } } = ( 8.34 \pm 0.3 ) \cdot 10 ^ { - 4 }$,
$\frac { r _ { A } - r _ { C } } { 2 \bar { r } } = ( 2.78 \pm 0.3 ) \cdot 10 ^ { - 4 }$,
$\frac { r _ { A } - r _ { D } } { 2 \bar { r } } = ( 6.10 \pm 0.3 ) \cdot 10 ^ { - 4 }$.
If we add up all these equalities, we obtain $2 \left( r _ { A } - \bar { r } \right) = \bar { r } \cdot ( 17.2 \pm 0.9 ) \cdot 10 ^ { - 4 }$. With $\bar { r } = 4.67 \mathrm { k } \Omega$ (which has negligbly small relative error), we end up with

$$
r _ { A } - \bar { r } = ( 4.02 \pm 0.21 ) \Omega .
$$

In a similar way, we can find

$$
\begin{gathered}
r _ { B } - \bar { r } = ( - 3.78 \pm 0.21 ) \Omega , \\
r _ { C } - \bar { r } = ( 1.43 \pm 0.21 ) \Omega ,
\end{gathered}
$$

and

$$
r _ { D } - \bar { r } = ( - 1.68 \pm 0.21 ) \Omega .
$$
