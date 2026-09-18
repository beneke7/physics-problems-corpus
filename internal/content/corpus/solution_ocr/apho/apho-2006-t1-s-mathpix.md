---
id: solution-ocr-apho-2006-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2006/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2006-t1]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Theoretical Question 1 <br> Laser Cooling of Atoms

Solutions

a) $\omega \left( 1 + v _ { x } / c \right)$, this is classic Doppler effect.
b) Absolute value of the momentum, transferred during each absorption, equals
$$
\begin{equation*}
\eta \omega _ { 0 } / c \tag{1}
\end{equation*}
$$
The momentum of the emitted photon is uniformly distributed over different directions, and after averaging gives a contribution which is much smaller than $\eta \omega _ { 0 } / c$. The average force is nonzero, since for atoms moving towards right frequency of right laser gets larger( due to Doppler effect discussed in part A), while frequency of left laser goes down. Since number of scattered photons depends on the frequency in the reference frame of the atom, there is a net nonzero force. It equals
$$
F \left( v _ { x } \right) = F _ { + } + F _ { - } = - \left( \eta \omega _ { 0 } / c \right) \cdot \left( s _ { 0 } \gamma / 2 \right) \cdot \left( \frac { 1 } { 1 + 4 \left( \delta + \omega _ { 0 } v _ { x } / c \right) ^ { 2 } / \gamma ^ { 2 } } - \frac { 1 } { 1 + 4 \left( \delta - \omega _ { 0 } v _ { x } / c \right) ^ { 2 } / \gamma ^ { 2 } } \right)
$$
For $v _ { x } / c \ll \delta / \omega _ { 0 }$
$$
\beta = - \frac { 8 \eta \omega _ { 0 } ^ { 2 } \delta s _ { 0 } } { \gamma ^ { 2 } \left( 1 + 4 ( \delta / \gamma ) ^ { 2 } \right) ^ { 2 } }
$$
For $\beta > 0$, one needs
$$
\delta < 0 .
$$
c) Characteristic de-Broglie wavelength at temperature $T$ equals $\lambda = \eta / \sqrt { m k _ { B } T }$. To consider the atoms as point-like objects one needs this distance to be much smaller than characteristic inter particle separation $n ^ { - 1 / 3 }$. From the condition that these two lengths are of the same order of magnitude we get
$$
T _ { Q } = \left( \eta ^ { 2 } n ^ { 2 / 3 } \right) / \left( k _ { B } m \right) \approx 10 ^ { - 6 } K
$$
d) $\left\langle \Delta p ^ { 2 } \right\rangle = \eta ^ { 2 } \omega _ { 0 } ^ { 2 } / c ^ { 2 } \approx 10 ^ { - 54 } k g ^ { 2 } m ^ { 2 } / s ^ { 2 }$ - this is the mean square recoil momentum of a photon.
e) Assume that the steady state value of the average square of the momentum of atom equals $P _ { 0 } ^ { 2 }$. In steady state regime this quantity doesn't change with time, and temperature is obtained according to $3 k _ { B } T _ { d } / 2 = P _ { 0 } ^ { 2 } / ( 2 m )$. Let the momentum at some

point of time in steady state regime be $P _ { 0 }$. Let's consider the value of the momentum after some time $t$. During this time the atom will participate in $N = 6 \gamma _ { p } t \gg 1$ absorption-emission processes (6 comes from the number of lasers). For each absorption-emission event the atom gets two recoil kicks, each with a mean square value $\left\langle \Delta p ^ { 2 } \right\rangle$ calculated in part d) (one kick is during absorption and one is during emission). The directions of these kicks are uncorrelated for different events, so this leads to an increase of the mean square of the momentum by $2 N \left\langle \Delta p ^ { 2 } \right\rangle$.

On the other hand, atoms are cooled because of the dissipative force, and the change of the mean square of the momentum because of this process is $- 2 \beta P _ { 0 } ^ { 2 } t / m$. For steady state solution these two processes compensate each other, so we obtain:

$$
P _ { 0 } ^ { 2 } = 12 < \Delta p ^ { 2 } > \gamma _ { p } m / ( 2 \beta ) = 3 \eta m \gamma \left( \frac { 2 | \delta | } { \gamma } + \frac { \gamma } { 2 | \delta | } \right) / 4
$$

Thus the temperature

$$
T _ { d } = \eta \gamma \left( \frac { 2 | \delta | } { \gamma } + \frac { \gamma } { 2 | \delta | } \right) / \left( 4 k _ { B } \right)
$$

f) The minimum is achieved for $\delta = - \gamma / 2$, and equals $\eta \gamma / \left( 2 k _ { B } \right) = 2.4 \cdot 10 ^ { - 4 } K$


Mark Distribution
| No | Total Pt | Partial Pt | Contents |
| :--- | :--- | :--- | :--- |
| a) | 1 pt |  | Expression for Doppler shifted frequency |
| b) | 2.5 | 0.3 | Expression for photon momentum (1) |
|  |  | 0.5 | Correct $F _ { - }$or $F _ { + }$with the Doppler shifted frequency |
|  |  | 1.0 | Expression for $F \left( v _ { x } \right)$ |
|  |  | 0.5 | Expression for $\beta$ |
|  |  | 0.2 | The correct sign of $\delta$ |
| c) | 2.0 | 0.5 | Expression for characteristic de Broglie wavelength or an estimate from uncertainty principle |
|  |  | 0.5 | Expression for characteristic inter particle separation |
|  |  | 0.5 | The equality between De Broglie wavelength and interparticle separation |
|  |  | 0.5 | Numerical value of temperature |
| d) | 0.5 |  | Numerical answer |
| e) | 3.5 | 0.5 | Calculation of the number of absorption-emission processes during time $t$ |
|  |  | 1.5 | Expression for the change of the mean square momentum (or energy) for time $t$ due to random kicks (heating rate) |
|  |  | 0.5 | Expression for the cooling rate |
|  |  | 1.0 | Final expression $x$ |
| f) | 0.5 | 0.3 | Expression for minimal temperature and numerical value |
|  |  | 0.2 | $\delta = - \gamma / 2$ |
