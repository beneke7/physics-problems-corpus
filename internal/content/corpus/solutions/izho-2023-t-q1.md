---
id: izho-2023-t-q1
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2023-t-q1
solution_type: official
source_document: solution-document-izho-2023-t-s
source_pdf: cache/phoxiv/izho/2023_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2023_T_S.pdf."
---

## Problem 1.2 ( 3.0 points)

The equivalent circuit of the bridge is shown in the figure below, which takes into account that the non-ideal inductance circuit is equivalent to an ideal coil $L$ and resistor $r_{L}$ connected in series, whereas the equivalent circuit of a leaky capacitor is a resistor $r_{C}$ connected in parallel to an ideal capacitor $C$.
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-03.jpg?height=469&width=397&top_left_y=193&top_left_x=852)

Solution 1. The bridge balance condition in complex numbers is written as

$$
Z_{L} Z_{C}=R_{1} R_{2},
$$

where the impedances are respectively

$$
Z_{L}=r_{L}+i \omega L
$$

and

$$
Z_{C}=\frac{r_{C}}{1+i \omega C r_{C}} .
$$

After some transformation we get from expressions (1)-(3):

$$
i \omega\left(L-R_{1} R_{2} C\right)=r_{L}-\frac{R_{1} R_{2}}{r_{C}}
$$

While varying the frequency, this equality is not violated if both sides of the equation are equal to zero, therefore

$$
\begin{aligned}
& C=\frac{L}{R_{1} R_{2}}=0.5 \mu \mathrm{~F}, \\
& r_{C}=\frac{R_{1} R_{2}}{r_{L}}=2 \mathrm{M} \Omega .
\end{aligned}
$$

Solution 2. Let the voltage across the capacitor be

$$
U_{C}=U_{0} \cos \omega t,
$$

then current through it is found as

$$
I_{C}=-C \omega \sin \omega t,
$$

and the current through its leakage resistance is

$$
I_{r_{C}}=\frac{U_{0} \cos \omega t}{r_{C}} .
$$

The total current through the upper arm containing the capacitor is

$$
I_{1}=I_{C}+I_{r_{C}},
$$

and since the bridge is balanced, the same current flows through the resistance $R_{1}$, therefore

$$
U_{R_{1}}=I_{1} R_{1} .
$$

On the other hand, this voltage is equal to the voltage drop across the arm with the inductance

$$
U_{L}=U_{R_{1}} \text {, }
$$

for which the voltage drop is given by

$$
U_{L}=L \frac{d I_{2}}{d t}+I_{2} r_{L}
$$

in which the current is determined by the balance equation

$$
I_{2}=I_{R_{2}}=\frac{U_{C}}{R_{2}}
$$

since

$$
U_{R_{2}}=U_{C} .
$$

Collecting equations (1)-(9) together, we obtain

$$
\left(-\frac{\omega L}{R_{2}}+C \omega R_{1}\right) U_{0} \sin \omega t=\left(\frac{R_{1}}{r_{C}}-\frac{r_{L}}{R_{2}}\right) U_{0} \cos \omega t .
$$

It can be seen from this equality that the frequency-independent balance condition is satisfied if both sides of the equation are equal to zero, that is, one obtains the final answer

$$
\begin{aligned}
& C=\frac{L}{R_{1} R_{2}}=0.5 \mu \mathrm{~F} \\
& r_{C}=\frac{R_{1} R_{2}}{r_{L}}=2 \mathrm{M} \Omega
\end{aligned}
$$

| Content | Points |
| :--- | :--- |
| Solution 1 |  |
| Equivalent circuit: All elements are correctly connected | 0.5 |
| Formula (1): $Z_{L} Z_{C}=R_{1} R_{2}$ | 0.3 |
| Formula (2): $Z_{L}=r_{L}+i \omega L$ | 0.3 |
| Formula (3): $Z_{C}=\frac{r_{C}}{1+i \omega C r_{C}}$ | 0.3 |
| Formula (4): $i \omega\left(L-R_{1} R_{2} C\right)=r_{L}-\frac{R_{1} R_{2}}{r_{C}}$ | 0.4 |
| Formula (5): $C=\frac{L}{R_{1} R_{2}}$ | 0.4 |
| Numerical value in formula (5): $C=0.5 \mu \mathrm{~F}$ | 0.2 |
| Formula (6): $r_{C}=\frac{R_{1} R_{2}}{r_{L}}$ | 0.4 |
| Numerical value in formula (6): $r_{C}=2 \mathrm{M} \Omega$ | 0.2 |
| Total | 3.0 |
| Solution 2 |  |
| Equivalent circuit: All elements are correctly connected | 0.5 |
| Formula (1): $U_{C}=U_{0} \cos \omega t$ | 0.1 |
| Formula (2): $I_{C}=-C \omega \sin \omega t$ | 0.1 |
| Formula (3): $I_{r_{C}}=\frac{U_{0} \cos \omega t}{r_{C}}$ | 0.1 |
| Formula (4): $I_{1}=I_{C}+I_{r_{C}}$ | 0.1 |
| Formula (5): $U_{R_{1}}=I_{1} R_{1}$ | 0.1 |
| Formula (6): $U_{L}=U_{R_{1}}$ | 0.1 |
| Formula (7): $U_{L}=\frac{d I_{2}}{d t}+I_{2} r_{L}$ | 0.1 |
| Formula (8): $I_{2}=I_{R_{2}}=\frac{U_{C}}{R_{2}}$ | 0.1 |
| Formula (9): $U_{R_{2}}=U_{C}$ | 0.1 |
| Formula (10): $\left(-\frac{\omega L}{R_{2}}+C \omega R_{1}\right) U_{0} \sin \omega t=\left(\frac{R_{1}}{r_{C}}-\frac{r_{L}}{R_{2}}\right) U_{0} \cos \omega t$ | 0.4 |


| Formula (11): $C=\frac{L}{R_{1} R_{2}}$ | 0.4 |
| :--- | :--- |
| Numerical value in formula (11): $C=0.5 \mu \mathrm{~F}$ | 0.2 |
| Formula (12): $r_{C}=\frac{R_{1} R_{2}}{r_{L}}$ | 0.4 |
| Numerical value in formula (12): $r_{C}=2 \mathrm{M} \Omega$ | 0.2 |
| Total | 3.0 |

## Problem 1.3 ( 4.0 points)

Let a planet of mass $m$ move around the Sun in a circular orbit of radius $R$ with a speed $v$, then the equation of motion of the planet in the projection onto the radial direction is written as

$$
\frac{m v^{2}}{R}=G \frac{m M_{S}}{R^{2}},
$$

which results in

$$
v=\sqrt{G \frac{M_{S}}{R}},
$$

with $G$ being the gravitational constant.
Writing formula (2) for Jupiter with the index $J$ and Earth with the index $E$, we get after dividing

$$
\frac{v_{J}}{v_{E}}=\sqrt{\frac{R_{E}}{R_{J}}},
$$

and, on the other hand, we have according to Kepler's third law for the ratio of rotation periods

$$
\frac{T_{E}^{2}}{T_{J}^{2}}=\frac{R_{E}^{3}}{R_{J}^{3}} .
$$

The motion of Jupiter cannot be detected with a spectrometer, but it can be done for the Sun, since it also moves around the center of mass of the Sun-Jupiter system. The speed of the Sun is easy to find from the expression

$$
v_{S}=v_{J} \frac{M_{J}}{M_{S}}
$$

Since the Sun moves around the common center of mass of the system, and the observer is located in the same plane, according to the Doppler effect formula, the following condition is satisfied for detection

$$
\frac{\Delta \lambda}{\lambda}=\frac{2 v_{S}}{c} .
$$

Putting together equations (3)-(6), we get the final answer

$$
R_{\min }=\frac{M_{S}}{M_{J}}\left(\frac{T_{J}}{T_{E}}\right)^{1 / 3} \frac{c}{2 v_{E}}=1.20 \cdot 10^{7} .
$$

Such resolution is achievable for many modern spectrometers manufactured in different countries of the world.

| Content | Points |
| :--- | :--- |
| Formula (1): $\frac{m v^{2}}{R}=G \frac{m M_{S}}{R^{2}}$ | 0.2 |
| Formula (2): $v=\sqrt{G \frac{M_{S}}{R}}$ | 0.2 |


| Formula (3): $\frac{v_{J}}{v_{E}}=\sqrt{\frac{R_{E}}{R_{J}}}$ | 0.2 |
| :--- | :--- |
| Formula (4): $\frac{T_{E}^{2}}{T_{J}^{2}}=\frac{R_{E}^{3}}{R_{J}^{3}}$ | 0.4 |
| Formula (5): $v_{S}=v_{J} \frac{M_{J}}{M_{S}}$ | 1.0 |
| Formula (6): $\frac{\Delta \lambda}{\lambda}=\frac{2 v_{S}}{c}$ | 1.0 |
| Formula (7): $R_{\text {min }}=\frac{M_{S}}{M_{J}}\left(\frac{T_{J}}{T_{E}}\right)^{1 / 3} \frac{c}{2 v_{E}}$ | 0.5 |
| Numerical value in formula (7): $R_{\text {min }}=1.20 \cdot 10^{7}$ | 0.5 |
| Total | 4.0 |
