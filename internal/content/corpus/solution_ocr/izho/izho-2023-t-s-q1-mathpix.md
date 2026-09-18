---
id: solution-ocr-izho-2023-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2023_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2023-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Solution 1. The bridge balance condition in complex numbers is written as

$$
\begin{equation*}
Z _ { L } Z _ { C } = R _ { 1 } R _ { 2 } , \tag{1}
\end{equation*}
$$

where the impedances are respectively

$$
\begin{equation*}
Z _ { L } = r _ { L } + i \omega L \tag{2}
\end{equation*}
$$

and

$$
\begin{equation*}
Z _ { C } = \frac { r _ { C } } { 1 + i \omega C r _ { C } } . \tag{3}
\end{equation*}
$$

After some transformation we get from expressions (1)-(3):

$$
\begin{equation*}
i \omega \left( L - R _ { 1 } R _ { 2 } C \right) = r _ { L } - \frac { R _ { 1 } R _ { 2 } } { r _ { C } } \tag{4}
\end{equation*}
$$

While varying the frequency, this equality is not violated if both sides of the equation are equal to zero, therefore

$$
\begin{align*}
& C = \frac { L } { R _ { 1 } R _ { 2 } } = 0.5 \mu \mathrm {~F} ,  \tag{5}\\
& r _ { C } = \frac { R _ { 1 } R _ { 2 } } { r _ { L } } = 2 \mathrm { M } \Omega . \tag{6}
\end{align*}
$$

Solution 2. Let the voltage across the capacitor be

$$
\begin{equation*}
U _ { C } = U _ { 0 } \cos \omega t , \tag{1}
\end{equation*}
$$

then current through it is found as

$$
\begin{equation*}
I _ { C } = - C \omega \sin \omega t , \tag{2}
\end{equation*}
$$

and the current through its leakage resistance is

$$
\begin{equation*}
I _ { r _ { C } } = \frac { U _ { 0 } \cos \omega t } { r _ { C } } . \tag{3}
\end{equation*}
$$

The total current through the upper arm containing the capacitor is

$$
\begin{equation*}
I _ { 1 } = I _ { C } + I _ { r _ { C } } , \tag{4}
\end{equation*}
$$

and since the bridge is balanced, the same current flows through the resistance $R _ { 1 }$, therefore

$$
\begin{equation*}
U _ { R _ { 1 } } = I _ { 1 } R _ { 1 } . \tag{5}
\end{equation*}
$$

On the other hand, this voltage is equal to the voltage drop across the arm with the inductance

$$
\begin{equation*}
U _ { L } = U _ { R _ { 1 } } , \tag{6}
\end{equation*}
$$

for which the voltage drop is given by

$$
\begin{equation*}
U _ { L } = L \frac { d I _ { 2 } } { d t } + I _ { 2 } r _ { L } , \tag{7}
\end{equation*}
$$

in which the current is determined by the balance equation

$$
\begin{equation*}
I _ { 2 } = I _ { R _ { 2 } } = \frac { U _ { C } } { R _ { 2 } } . \tag{8}
\end{equation*}
$$

since

$$
\begin{equation*}
U _ { R _ { 2 } } = U _ { C } . \tag{9}
\end{equation*}
$$


Collecting equations (1)-(9) together, we obtain

$$
\begin{equation*}
\left( - \frac { \omega L } { R _ { 2 } } + C \omega R _ { 1 } \right) U _ { 0 } \sin \omega t = \left( \frac { R _ { 1 } } { r _ { C } } - \frac { r _ { L } } { R _ { 2 } } \right) U _ { 0 } \cos \omega t . \tag{10}
\end{equation*}
$$

It can be seen from this equality that the frequency-independent balance condition is satisfied if both sides of the equation are equal to zero, that is, one obtains the final answer

$$
\begin{align*}
& C = \frac { L } { R _ { 1 } R _ { 2 } } = 0.5 \mu \mathrm {~F} ,  \tag{11}\\
& r _ { C } = \frac { R _ { 1 } R _ { 2 } } { r _ { L } } = 2 \mathrm { M } \Omega . \tag{12}
\end{align*}
$$

| Content | Points |
| :--- | :--- |
| Solution 1 |  |
| Equivalent circuit: All elements are correctly connected | 0.5 |
| Formula (1): $Z _ { L } Z _ { C } = R _ { 1 } R _ { 2 }$ | 0.3 |
| Formula (2): $Z _ { L } = r _ { L } + i \omega L$ | 0.3 |
| Formula (3): $Z _ { C } = \frac { r _ { C } } { 1 + i \omega C r _ { C } }$ | 0.3 |
| Formula (4): $i \omega \left( L - R _ { 1 } R _ { 2 } C \right) = r _ { L } - \frac { R _ { 1 } R _ { 2 } } { r _ { C } }$ | 0.4 |
| Formula (5): $C = \frac { L } { R _ { 1 } R _ { 2 } }$ | 0.4 |
| Numerical value in formula (5): $C = 0.5 \mu \mathrm {~F}$ | 0.2 |
| Formula (6): $r _ { C } = \frac { R _ { 1 } R _ { 2 } } { r _ { L } }$ | 0.4 |
| Numerical value in formula (6): $r _ { C } = 2 \mathrm { M } \Omega$ | 0.2 |
| Total | 3.0 |
| Solution 2 |  |
| Equivalent circuit: All elements are correctly connected | 0.5 |
| Formula (1): $U _ { C } = U _ { 0 } \cos \omega t$ | 0.1 |
| Formula (2): $I _ { C } = - C \omega \sin \omega t$ | 0.1 |
| Formula (3): $I _ { r _ { c } } = \frac { U _ { 0 } \cos \omega t } { r _ { C } }$ | 0.1 |
| Formula (4): $I _ { 1 } = I _ { C } + I _ { r _ { C } }$ | 0.1 |
| Formula (5): $U _ { R _ { 1 } } = I _ { 1 } R _ { 1 }$ | 0.1 |
| Formula (6): $U _ { L } = U _ { R _ { 1 } }$ | 0.1 |
| Formula (7): $U _ { L } = \frac { d I _ { 2 } } { d t } + I _ { 2 } r _ { L }$ | 0.1 |
| Formula (8): $I _ { 2 } = I _ { R _ { 2 } } = \frac { U _ { C } } { R _ { 2 } }$ | 0.1 |
| Formula (9): $U _ { R _ { 2 } } = U _ { C }$ | 0.1 |
| Formula (10): $\left( - \frac { \omega L } { R _ { 2 } } + C \omega R _ { 1 } \right) U _ { 0 } \sin \omega t = \left( \frac { R _ { 1 } } { r _ { C } } - \frac { r _ { L } } { R _ { 2 } } \right) U _ { 0 } \cos \omega t$ | 0.4 |


| Formula (11): $C = \frac { L } { R _ { 1 } R _ { 2 } }$ | 0.4 |
| :--- | :--- |
| Numerical value in formula (11): $C = 0.5 \mu \mathrm {~F}$ | 0.2 |
| Formula (12): $r _ { C } = \frac { R _ { 1 } R _ { 2 } } { r _ { L } }$ | 0.4 |
| Numerical value in formula (12): $r _ { C } = 2 \mathrm { M } \Omega$ | 0.2 |
| Total | 3.0 |

## Problem 1.3 (4.0 points)

Let a planet of mass $m$ move around the Sun in a circular orbit of radius $R$ with a speed $v$, then the equation of motion of the planet in the projection onto the radial direction is written as

$$
\begin{equation*}
\frac { m v ^ { 2 } } { R } = G \frac { m M _ { S } } { R ^ { 2 } } , \tag{1}
\end{equation*}
$$

which results in

$$
\begin{equation*}
v = \sqrt { G \frac { M _ { S } } { R } } , \tag{2}
\end{equation*}
$$

with $G$ being the gravitational constant.
Writing formula (2) for Jupiter with the index $J$ and Earth with the index $E$, we get after dividing

$$
\begin{equation*}
\frac { v _ { J } } { v _ { E } } = \sqrt { \frac { R _ { E } } { R _ { J } } } , \tag{3}
\end{equation*}
$$

and, on the other hand, we have according to Kepler's third law for the ratio of rotation periods

$$
\begin{equation*}
\frac { T _ { E } ^ { 2 } } { T _ { J } ^ { 2 } } = \frac { R _ { E } ^ { 3 } } { R _ { J } ^ { 3 } } . \tag{4}
\end{equation*}
$$

The motion of Jupiter cannot be detected with a spectrometer, but it can be done for the Sun, since it also moves around the center of mass of the Sun-Jupiter system. The speed of the Sun is easy to find from the expression

$$
\begin{equation*}
v _ { S } = v _ { J } \frac { M _ { J } } { M _ { S } } . \tag{5}
\end{equation*}
$$

Since the Sun moves around the common center of mass of the system, and the observer is located in the same plane, according to the Doppler effect formula, the following condition is satisfied for detection

$$
\begin{equation*}
\frac { \Delta \lambda } { \lambda } = \frac { 2 v _ { S } } { c } . \tag{6}
\end{equation*}
$$

Putting together equations (3)-(6), we get the final answer

$$
\begin{equation*}
R _ { \min } = \frac { M _ { S } } { M _ { J } } \left( \frac { T _ { J } } { T _ { E } } \right) ^ { 1 / 3 } \frac { c } { 2 v _ { E } } = 1.20 \cdot 10 ^ { 7 } . \tag{7}
\end{equation*}
$$

Such resolution is achievable for many modern spectrometers manufactured in different countries of the world.

| Content | Points |
| :--- | :--- |
| Formula (1): $\frac { m v ^ { 2 } } { R } = G \frac { m M _ { S } } { R ^ { 2 } }$ | 0.2 |
| Formula (2): $v = \sqrt { G \frac { M _ { S } } { R } }$ | 0.2 |


| Formula (3): $\frac { v _ { J } } { v _ { E } } = \sqrt { \frac { R _ { E } } { R _ { J } } }$ | 0.2 |
| :--- | :--- |
| Formula (4): $\frac { T _ { E } ^ { 2 } } { T _ { J } ^ { 2 } } = \frac { R _ { E } ^ { 3 } } { R _ { J } ^ { 3 } }$ | 0.4 |
| Formula (5): $v _ { S } = v _ { J } \frac { M _ { J } } { M _ { S } }$ | 1.0 |
| Formula (6): $\frac { \Delta \lambda } { \lambda } = \frac { 2 v _ { s } } { c }$ | 1.0 |
| Formula (7): $R _ { \text {min } } = \frac { M _ { S } } { M _ { J } } \left( \frac { T _ { J } } { T _ { E } } \right) ^ { 1 / 3 } \frac { c } { 2 v _ { E } }$ | 0.5 |
| Numerical value in formula (7): $R _ { \text {min } } = 1.20 \cdot 10 ^ { 7 }$ | 0.5 |
| Total | 4.0 |
