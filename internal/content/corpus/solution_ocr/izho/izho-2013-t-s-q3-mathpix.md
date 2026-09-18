---
id: solution-ocr-izho-2013-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2013_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2013-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3 (10 pts) <br> Bohr model for hydrogen atom

1. We can use Kepler's third law to find the free fall time of the electron onto the proton. Consider a circular orbit of radius $R$, then the equation of motion of the electron can be written as

$$
\begin{equation*}
m _ { e } \left( \frac { 2 \pi } { T } \right) ^ { 2 } R = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { e ^ { 2 } } { R ^ { 2 } } , \tag{1}
\end{equation*}
$$

where $T$ is the period of revolution.
Thus,Kepler's third law for the electron is given by

$$
\begin{equation*}
\frac { a ^ { 3 } } { T ^ { 2 } } = \frac { 1 } { 16 \pi ^ { 3 } \varepsilon _ { 0 } } \frac { e ^ { 2 } } { m _ { e } } , \tag{2}
\end{equation*}
$$

where $a$ is the majorsemi-axisof an elliptic orbit.
Consider the free fall of the electron onto the proton as a motion along a very elongated ellipse with semi-axes $a = r _ { 0 } / 2$. Then,the free fall time of the electron equals to the half of this period

$$
\begin{equation*}
t _ { 1 } = \frac { T } { 2 } = \sqrt { \frac { \pi ^ { 3 } m _ { e } \varepsilon _ { 0 } r _ { 0 } ^ { 3 } } { 2 e ^ { 2 } } } = 2.46 \times 10 ^ { - 17 } \mathrm { c } . \tag{3}
\end{equation*}
$$

2. To find the dependence of the electron velocity on the orbit radius we again use Newton's second law, which is now written in the form

$$
\begin{equation*}
m _ { e } \frac { \mathrm { v } ^ { 2 } } { r } = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { e ^ { 2 } } { r ^ { 2 } } , \tag{4}
\end{equation*}
$$

which yields

$$
\begin{equation*}
\mathrm { v } = \sqrt { \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { e ^ { 2 } } { m _ { e } r } } , \tag{5}
\end{equation*}
$$

3. The angular momentum of the electron is found from equation (5) as

$$
\begin{equation*}
L = m _ { e } \mathrm { v } r = \sqrt { \frac { m _ { e } r e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } } } . \tag{6}
\end{equation*}
$$

4. Since, according to the Bohr model of the hydrogen atom the angular momentum of the electron is quantized, that is $L = n \hbar$, From equation (6) we can get

$$
\begin{equation*}
r _ { n } = \frac { 4 \pi \varepsilon _ { 0 } n ^ { 2 } \hbar ^ { 2 } } { m _ { e } e ^ { 2 } } . \tag{7}
\end{equation*}
$$

5. Fromequation (7) weseethatthe minimalradiuscorresponds tothe quantumnumber $n = 1$, hence

$$
\begin{equation*}
r _ { 1 } = \frac { 4 \pi \varepsilon _ { 0 } \hbar ^ { 2 } } { m _ { e } e ^ { 2 } } = 5.19 \times 10 ^ { - 11 } \mathrm { M } . \tag{8}
\end{equation*}
$$

6. The total energy of the electron in the atom is the sum of the kinetic and potential energies.Takingintoaccountequation (5) wecanwritethetotalenergyofelectronin the following form

$$
\begin{equation*}
E = \frac { m _ { e } v ^ { 2 } } { 2 } - \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } r } = - \frac { e ^ { 2 } } { 8 \pi \varepsilon _ { 0 } r } . \tag{9}
\end{equation*}
$$

Substituting the possible values of the orbit radii ofthe electron (7), we immediately obtain


$$
\begin{equation*}
E _ { n } = - \frac { m _ { e } e ^ { 4 } } { 32 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } \hbar ^ { 2 } n ^ { 2 } } . \tag{10}
\end{equation*}
$$

7. Fromequation (10) weseethatthe minimaltotalenergycorrespondstothe quantumnumber $n = 1$, hence

$$
\begin{equation*}
E _ { 1 } = - \frac { m _ { e } e ^ { 4 } } { 32 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } \hbar ^ { 2 } } = - 2.24 \times 10 ^ { - 18 } \text { Дж. } \tag{11}
\end{equation*}
$$

8. The total energy of the electron (9) is spent on the emission of electromagnetic waves

$$
\begin{equation*}
\frac { d E } { d t } = - P . \tag{12}
\end{equation*}
$$

From the equation (9) and (12) we get

$$
\begin{equation*}
r ( t ) ^ { 2 } \frac { d r ( t ) } { d t } = - \frac { e ^ { 4 } } { 12 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m _ { e } ^ { 2 } c ^ { 3 } } . \tag{13}
\end{equation*}
$$

By solving equation (13) with the initial condition $r ( 0 ) = r _ { 1 }$, we get

$$
\begin{equation*}
r ( t ) = \sqrt [ 3 ] { r _ { 1 } ^ { 3 } - \frac { e ^ { 4 } } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m _ { e } ^ { 2 } c ^ { 3 } } } t . \tag{14}
\end{equation*}
$$

9. The fallingtime $\tau _ { 1 }$ is found from the condition $r ( t ) = 0$. By substituting this into equation (14)

$$
\begin{equation*}
\tau _ { 1 } = \frac { 4 \pi ^ { 2 } m _ { e } ^ { 2 } \varepsilon _ { 0 } ^ { 2 } c ^ { 3 } r _ { 1 } ^ { 3 } } { e ^ { 4 } } = \frac { 256 \pi ^ { 5 } \varepsilon _ { 0 } ^ { 5 } c ^ { 3 } \hbar ^ { 5 } } { m _ { e } e ^ { 10 } } = 1.44 \times 10 ^ { - 11 } \mathrm { c } . \tag{15}
\end{equation*}
$$

10. |For a short time interval $d t$ the electron makes a turn by theangle $d \varphi$, defined as

$$
\begin{equation*}
d \varphi = \frac { \mathrm { v } } { r } d t . \tag{16}
\end{equation*}
$$

Bysubstituting the velocity from equation (5) and $d t$ from equation (13), we find

$$
\begin{equation*}
d \varphi = - \frac { 6 c ^ { 3 } \left( \pi m _ { e } \varepsilon _ { 0 } \right) ^ { 3 / 2 } } { e ^ { 3 } } \sqrt { r } d r . \tag{17}
\end{equation*}
$$

Total angle of rotation is found by the integration from $r _ { 1 }$ to zero

$$
\begin{equation*}
\varphi = \int _ { r _ { 1 } } ^ { 0 } d \varphi = \int _ { 0 } ^ { r _ { 1 } } \frac { 6 c ^ { 3 } \left( \pi m _ { e } \varepsilon _ { 0 } \right) ^ { 3 / 2 } } { e ^ { 3 } } \sqrt { r } d r = \frac { 4 c ^ { 3 } \left( \pi m _ { e } \varepsilon _ { 0 } r _ { 1 } \right) ^ { 3 / 2 } } { e ^ { 3 } } = \frac { 32 \pi ^ { 3 } \varepsilon _ { 0 } ^ { 3 } c ^ { 3 } \hbar ^ { 3 } } { e ^ { 6 } } . \tag{18}
\end{equation*}
$$

Thus, the total number of revolutions is equal to

$$
\begin{equation*}
N = \frac { \varphi } { 2 \pi } = \frac { 16 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 3 } c ^ { 3 } \hbar ^ { 3 } } { e ^ { 6 } } = 1.96 \times 10 ^ { 5 } . \tag{19}
\end{equation*}
$$
