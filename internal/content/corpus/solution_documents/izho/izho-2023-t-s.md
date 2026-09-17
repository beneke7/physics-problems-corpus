---
id: solution-document-izho-2023-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2023_T_S.pdf
extraction_method: cached-mmd
mapped_problems: [izho-2023-t-q1, izho-2023-t-q2, izho-2023-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2023_T_S.pdf."
---

# SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL COMPETITION 

## Attention. Points in grading are not divided! <br> Problem 1 (10.0 points) <br> Problem 1.1 (3.0 points)

It follows from the first law of thermodynamics that

$$
\delta Q=d U+d A
$$

where $\delta Q$ is the amount of heat supplied, $d U$ is the change in internal energy, $d A$ is the work done by the gas.

For one mole of an ideal gas, these quantities can be written in terms of a change in volume $d V$ and temperature $d T$ at a known pressure $p$ in the following form

$$
\begin{aligned}
& \delta A=p d V \\
& d U=C_{V} d T
\end{aligned}
$$

By definition of heat capacity, we have

$$
C=\frac{\delta Q}{d T}
$$

then from relations (1)-(4) one obtains

$$
p \frac{d V}{d T}=C-C_{V}
$$

at the molar heat capacity of a monatomic gas at a constant volume equal to

$$
C_{V}=\frac{3}{2} R .
$$

From the graph given in the problem statement, it can be seen that at a temperature

$$
T_{1}^{*}=350 \mathrm{~K}
$$

the heat capacity is $C=C_{V}$ and, accordingly, $\frac{d V}{d T}=0$. When passing through this temperature, the derivative sign changes from plus to minus. This means that at this temperature the gas volume reaches a local maximum: $T_{\text {max }}=T_{1}^{*}=350 \mathrm{~K}$.

At a temperature

$$
T_{2}^{*}=500 \mathrm{~K}
$$

the derivative $\frac{d V}{d T}$ also equals zero, and when passing through this point, the sign of the derivative changes from minus to plus. This means that $T_{2}^{*}$ is the point of the local minimum of the volume: $T_{\text {min }}=T_{2}^{*}=500 \mathrm{~K}$.

In the section from $T_{1}^{*}=350 \mathrm{~K}$ to $T_{2}^{*}=500 \mathrm{~K}$, the gas receives heat $Q$, numerically equal to the area under the dependence $C(T)$, i.e. the area of the figure $\boldsymbol{A} \boldsymbol{B} \boldsymbol{C} \boldsymbol{D} \boldsymbol{E}$. The change in internal energy $\Delta U=C_{V}\left(T_{2}^{*}-T_{1}^{*}\right)$ is numerically equal to the area of the rectangle $\boldsymbol{A B D E}$.
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-01.jpg?height=592&width=873&top_left_y=1791&top_left_x=1050) According to the first law of thermodynamics, therefore, the work on the gas from $T_{1}^{*}$ to $T_{2}^{*}$ is numerically equal to the difference in the areas of the rectangle $\boldsymbol{A} \boldsymbol{B} \boldsymbol{D} \boldsymbol{E}$ and the figure $\boldsymbol{A} \boldsymbol{B} \boldsymbol{C} \boldsymbol{D} \boldsymbol{E}$, i.e. area of the shaded figure $\boldsymbol{B} \boldsymbol{D} \boldsymbol{C}$ :

$$
A=\frac{1}{4} R\left(T_{\max }-T_{\min }\right)=312 \mathrm{~J}
$$

Note: Exact dependence $V(T)$ :

$$
\begin{aligned}
& \frac{V}{V_{1}}=\left(\frac{T}{T_{1}}\right)^{7 / 2} \exp \left(-\frac{T-T_{1}}{\Delta T_{1}}\right), \text { at } T_{1}=300 \mathrm{~K} \leq T \leq T_{0}=400 \mathrm{~K} \text { and } \Delta T_{1}=100 \mathrm{~K} ; \\
& \frac{V}{V_{0}}=\left(\frac{T}{T_{0}}\right)^{-5 / 2} \exp \left(\frac{T-T_{0}}{\Delta T_{2}}\right), \text { at } T_{0}=400 \mathrm{~K} \leq T \leq T_{2}=600 \mathrm{~K} \text { and } \Delta T_{2}=200 \mathrm{~K} .
\end{aligned}
$$

Dependences $V(T)$ and $P(V)$ in the process of gas heating are shown in the figures below.
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-02.jpg?height=480&width=699&top_left_y=717&top_left_x=277)
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-02.jpg?height=480&width=703&top_left_y=717&top_left_x=1147)

| Content | Points |
| :--- | :--- |
| Formula (1): $\delta Q=d U+d A$ | 0.2 |
| Formula (2): $\delta A=p d V$ | 0.2 |
| Formula (3): $d U=C_{V} d T$ | 0.2 |
| Formula (4): $C=\frac{\delta Q}{d T}$ | 0.2 |
| Formula (5): $p \frac{d V}{d T}=C-C_{V}$ | 0.4 |
| Formula (6): $C_{V}=\frac{3}{2} R$ | 0.2 |
| Formula (7): $T_{1}^{*}=350 \mathrm{~K}$ | 0.4 |
| Formula (8): $T_{2}^{*}=500 \mathrm{~K}$ | 0.4 |
| Formula (9): $A=\frac{1}{4} R\left(T_{\max }-T_{\min }\right)$ | 0.4 |
| Numerical value in formula (9): $A=312 \mathrm{~J}$ | 0.4 |
| Total | 3.0 |

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

## Problem 2. Fermi acceleration ( $\mathbf{1 0 . 0}$ points)

## Why are there more oncoming cars than overtaking cars?

2.1 Within the time period $t$, a car in lane $\boldsymbol{B}$ overtakes only those cars that are located at the distance no longer than

$$
l=(v-(v-\Delta v)) t=\Delta v t
$$

Therefore, the number of those cars is

$$
N_{1}=n l=n \Delta v t \approx 0.83
$$

The time between overtakes is found as

$$
\tau_{1}=\frac{1}{n \Delta v}=0.02 \mathrm{~h}=72 \mathrm{~s}
$$

2.2 Similar reasoning leads to the conclusion that the number of overtakes and the time between overtakes remain the same, i.e.

$$
\begin{aligned}
& N_{2}=n l=n \Delta v t \approx 0.83 \\
& \tau_{2}=\frac{1}{n \Delta v}=0.02 \mathrm{~h}=72 \mathrm{~s}
\end{aligned}
$$

2.3 When driving towards oncoming cars, the number of cars and the time between two consecutive meetings are calculated by the formulas

$$
\begin{aligned}
& N_{3,4}=n(v+(v \pm \Delta v)) t=n(2 v \pm \Delta v) t \\
& \tau_{3,4}=\frac{1}{n(2 v \pm \Delta v)}
\end{aligned}
$$

and numerical calculations give the following values

$$
\begin{array}{ll}
N_{3}=14.2 ; & \tau_{3}=4.2 \mathrm{~s} \\
N_{3}=15.8 ; & \tau_{3}=3.8 \mathrm{~s}
\end{array} .
$$

## Elastic collision

2.4 Let us write down the momentum conservation law as

$$
m_{1} v_{1}+m_{2} v_{2}=m_{1} u_{1}+m_{2} u_{2}
$$

together with the conservation of kinetic energy

$$
\frac{m_{1} v_{1}^{2}}{2}+\frac{m_{2} v_{2}^{2}}{2}=\frac{m_{1} u_{1}^{2}}{2}+\frac{m_{2} u_{2}^{2}}{2}
$$

![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-07.jpg?height=270&width=649&top_left_y=210&top_left_x=739)

Rewriting these equations in the following form

$$
\begin{aligned}
& m_{1} v_{1}-m_{1} u_{1}=m_{2} u_{2}-m_{2} v_{2} \\
& m_{1} v_{1}^{2}-m_{1} u_{1}^{2}=m_{2} u_{2}^{2}-m_{2} v_{2}^{2}
\end{aligned}
$$

and dividing then, yields the relation

$$
v_{1}+u_{1}=u_{2}+v_{2} .
$$

From this equality, we express $u_{2}=v_{1}+u_{1}-v_{2}$ and substitute it into the equation of conservation of momentum

$$
\left(m_{1}+m_{2}\right) u_{1}=\left(m_{1}-m_{2}\right) v_{1}+2 m_{2} v_{2},
$$

from which it follows that

$$
u_{1}=\frac{m_{1}-m_{2}}{m_{1}+m_{2}} v_{1}+\frac{2 m_{2}}{m_{1}+m_{2}} v_{2} .
$$

The speed of the second ball can be easily obtained by changing the indices " 1 " and " 2 " in formula (13)

$$
u_{2}=\frac{2 m_{1}}{m_{1}+m_{2}} v_{1}+\frac{m_{2}-m_{1}}{m_{1}+m_{2}} v_{2} .
$$

2.5 Using formula (13), we obtain an explicit form of the dependence between the required parameters

$$
\begin{aligned}
& \frac{u_{1}}{v_{1}}=\frac{m_{1}-m_{2}}{m_{1}+m_{2}}+\frac{2 m_{2}}{m_{1}+m_{2}} \frac{v_{2}}{v_{1}}=\frac{1-\frac{m_{2}}{m_{1}}}{1-\frac{m_{2}}{m_{1}}}+\frac{2 \frac{m_{2}}{m_{1}}}{1+\frac{m_{2}}{m_{1}}} \frac{v_{2}}{v_{1}} \Rightarrow \\
& \eta_{1}=\frac{1-\mu}{1+\mu}+\frac{2 \mu}{1+\mu} \eta_{2}
\end{aligned}
$$

As follows from the resulting expression, for any values of the mass ratio $\mu$, the dependence is linear, i.e. its graph is a straight line. It is also not difficult to see that all these lines pass through the point $\eta_{1}=1 ; \eta_{2}=1$. When $\mu \rightarrow 0$, the slope coefficient tends to zero, that is, the dependence graph tends to a horizontal straight line $\eta_{1}=1$. At $\mu \rightarrow \infty$, the desired dependence tends to

$$
\eta_{1}=-1+2 \eta_{2} .
$$

The set of graphs of function (15) is shown in the figure below.
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-07.jpg?height=598&width=673&top_left_y=1970&top_left_x=726)
2.6 Кинетическая энергия шарика увеличится, если модуль скорости шарика после удара станет больше модуля скорости до удара, то есть при выполнении неравенств The kinetic energy of the ball increases if the modulus of its velocity after the collision becomes greater than the modulus of its velocity before the collision, that is, if the following inequalities are fulfilled

$$
\left|\eta_{1}\right|>1 \Rightarrow\left\{\begin{array}{l}
\eta_{1}>1 \\
\eta_{1}<-1
\end{array}\right.
$$

Substituting expression (15) for the quantity $\eta_{1}$, we obtain the following two inequalities

$$
\left\{\begin{array}{l}
\frac{1-\mu}{1+\mu}+\frac{2 \mu}{1+\mu} \eta_{2}>1 \\
\frac{1-\mu}{1+\mu}+\frac{2 \mu}{1+\mu} \eta_{2}<-1
\end{array}\right.
$$

The solutions of these inequalities are the following relations:
a)

$$
\eta_{2}>1
$$

that is, to fulfill this condition, the second ball must catch up with the first one;;
b)

$$
\eta_{2}<-\frac{1}{\mu}
$$

in this case, the second ball must move towards the first one and the modulus of its velocity must exceed the above specified value.
2.7 In the limiting case $m_{2}>m_{1}$, the speed of the first ball after the collision is

$$
\tilde{u}_{1}=-v_{1}+2 v_{2}
$$

that is, the speed of the first ball changes sign (the ball is reflected) and its modulus changes to twice the speed of the second, heavy ball.

The light ball increases its speed, and, consequently, its kinetic energy, if:
a) the heavy ball catches up with the light ball (hit from behind) $v_{2}>1$;
б) the heavy ball moves towards the light ball $v_{2}<0$.

## The simplest Fermi acceleration model

2.8 We write the law of motion of the plate in the traditional form

$$
x(t)=A \cos (\omega t)
$$

then the dependence of the velocity on time is described by the function

$$
v(t)=-A \omega \sin (\omega t),
$$

thus, the maximum speed of the platform is

$$
V_{0}=A \omega=2 \pi \frac{A}{T}
$$

2.9 To answer the question posted, it is enough to consider one period of plate oscillations. Let us plot the dependence of the plate coordinates on time (22) and plot on the same graph the dependences of the incoming particle coordinates on time, which are straight lines $x=x_{0}-u t$.
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-09.jpg?height=601&width=833&top_left_y=197&top_left_x=635)

The figure shows the case $u>V_{0}$. As a result of the collision, balls that collide with the plate increase their speed at those time moments when the plate moves towards the positive direction of the axis, while collisions must occur in the time interval from $\frac{T}{2}$ to $T$. However, the collision times are not randomly and uniformly distributed, but the times of approach to the plate itself are uniformly distributed, so we consider a plane $x=A$, the times of approach to which are equally probable. Let us draw a straight line that describes the law of motion of a ball colliding with the plate at the moment of time $t=\frac{T}{2}$ (the thick line in the figure). Let us denote $t_{1}$ as the moment of time when this ball crosses the plane $x=A$. Balls that collide with the plate after this moment of time increase their speed and energy. But these balls cross the plane in the time interval from $t_{1}$ to $T$, so the fraction of these particles is obtained as

$$
\eta=\frac{T-t_{1}}{T} .
$$

The moment of time $t_{1}$ is easy to find from the law of the ball motion

$$
t_{1}=\frac{T}{2}-\frac{2 A}{u}
$$

then the fraction of accelerated particles is equal to

$$
\eta=\frac{T-t_{1}}{T}=\frac{1}{2}+\frac{2 A}{u T}=\frac{1}{2}+\frac{V_{0}}{\pi u} .
$$

Here we use the relation that follows from formula (24): $\frac{2 A}{T}=\frac{V_{0}}{\pi}$. Substituting the specified numerical value $u=1.5 V_{0}$, we get:

$$
\eta=\frac{1}{2}+\frac{1}{1.5 \pi} \approx 0.71
$$

A somewhat different situation is realized at $u<V_{0}$, which is shown in the figure below.
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-09.jpg?height=481&width=686&top_left_y=2053&top_left_x=726)

In this case, the "border time" $t_{1}$ between accelerated and decelerated balls is determined by a straight line, which is tangent to the graph of the plate law of motion, as shown in the figure below.
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-10.jpg?height=547&width=719&top_left_y=309&top_left_x=704)

When the graphs of two functions touch at the moment of time $t_{2}$, the values of both functions themselves and their derivatives, that is, the speeds of the plate and the ball, coincide, therefore

$$
-A \omega \sin \left(\omega t_{2}\right)=-u,
$$

which gives rise to

$$
\begin{aligned}
& t_{2}=\frac{1}{\omega} \arcsin \frac{u}{A \omega}=\frac{T}{2 \pi} \arcsin \frac{u}{V_{0}} \\
& x_{2}=A \cos \omega t_{2}=A \sqrt{1-\sin ^{2} \omega t_{2}}=A \sqrt{1-\frac{u^{2}}{V_{0}^{2}}}
\end{aligned}
$$

These expressions allow us to determine the time of approach to the plane $x=A$

$$
t_{1}=t_{2}-\frac{A-x_{2}}{u}=\frac{T}{2 \pi}\left(\arcsin \frac{u}{V_{0}}-\frac{V_{0}}{u}\left(1-\sqrt{1-\frac{u^{2}}{V_{0}^{2}}}\right)\right) .
$$

The ratio of this time to the oscillation period determines the fraction of particles that collide with the plate, catching it up, such that their energy decreases:

$$
1-\eta=\frac{1}{2 \pi}\left(\arcsin \frac{u}{V_{0}}-\frac{V_{0}}{u}\left(1-\sqrt{1-\frac{u^{2}}{V_{0}^{2}}}\right)\right) \approx 0.04,
$$

therefore, the fraction of balls whose energy increases after the collision is equal to

$$
\eta \approx 0.96 .
$$

2.10 In one period of oscillation, the plate travels a path $4 A$, so the modulus of its speed is equal to

$$
V=\frac{4 A}{T} .
$$

2.11 When the ball speed is greater than the platform speed, the proportion of balls that increase their energy as a result of the collision is calculated by a formula similar to formula (27):

$$
\eta=\frac{T-t_{1}}{T}=\frac{1}{2}+\frac{2 A}{u T}=\frac{1}{2}+\frac{V}{2 u},
$$

and the corresponding figure is shown below.
![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-11.jpg?height=487&width=676&top_left_y=195&top_left_x=721)

Since the modulus of the plate velocity is assumed to be constant, the ball velocity modulus after the impact becomes equal to

$$
u_{+}=u+2 V
$$

The velocities of balls that collide with the plate in the time interval from 0 to $t_{1}$, are equal to

$$
u_{-}=u-2 V .
$$

Thus, the average ball energy after the collision becomes equal to

$$
\begin{aligned}
& E=\eta \frac{m u_{+}^{2}}{2}+(1-\eta) \frac{m u_{-}^{2}}{2}=\frac{m}{2}\left(\left(\frac{1}{2}+\frac{V}{2 u}\right)(u+2 V)^{2}+\left(\frac{1}{2}-\frac{V}{2 u}\right)(u-2 V)^{2}\right)= \\
& =\frac{m u^{2}}{4}\left(\left(1+\frac{V}{u}\right)\left(1+2 \frac{V}{u}\right)^{2}+\left(1-\frac{V}{u}\right)\left(1-2 \frac{V}{u}\right)^{2}\right)=\frac{m u^{2}}{2}\left(1+8\left(\frac{V}{u}\right)^{2}\right)
\end{aligned}
$$

and, consequently, the increase in the average energy is equal to

$$
\varepsilon=1+8\left(\frac{V}{u}\right)^{2} \approx 4.6
$$

If the speed of the balls is less than the speed of the plate, then all the balls collide with the plate when it moves in the opposite direction, so all the balls increase their speed and energy. After the collision, the particle velocities become equal $u_{+}=u+2 V$, and their energy

$$
E=\frac{m}{2}(u+2 V)^{2}=\frac{m u^{2}}{2}\left(1+2 \frac{V}{u}\right)^{2},
$$

and, consequently, the ratio of the ball energies after and before the collision is equal to

$$
\varepsilon=\left(1+2 \frac{V}{u}\right)^{2}=25.0
$$

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 2.1 | Formula (2): $N_{1}=n \Delta v t$ | 0.1 | 0.4 |
|  | Numerical value in formula (2): $N_{1} \approx 0.83$ | 0.1 |  |
|  | Formula (3): $\tau_{1}=\frac{1}{n \Delta v}$ | 0.1 |  |
|  | Numerical value in formula (3): $\tau_{1}=0.02 \mathrm{~h}=72 \mathrm{~s}$ | 0.1 |  |
| 2.2 | Formula (4): $N_{2}=n \Delta v t$ | 0.1 | 0.4 |
|  | Numerical value in formula (4): $N_{2} \approx 0.83$ | 0.1 |  |
|  | Formula (5): $\tau_{2}=\frac{1}{n \Delta v}$ | 0.1 |  |
|  | Numerical value in formula (5): $\tau_{2}=0.02 \mathrm{~h}=72 \mathrm{~s}$ | 0.1 |  |


| 2.3 | $N_{3,4}=n(2 v \pm \Delta v) t$ <br> Formulas (6): $\tau_{3,4}=\frac{1}{n(2 v \pm \Delta v)}$ | 0.4 | 0.8 |
| :--- | :--- | :--- | :--- |
|  | Numerical values in formula (7): $\begin{array}{ll} N_{3}=14.2 ; & \tau_{3}=4.2 \mathrm{~s} ; \\ N_{3}=15.8 ; & \tau_{3}=3.8 \mathrm{~s} . \end{array}$ | 0.4 |  |
| 2.4 | Formula (8): $m_{1} v_{1}+m_{2} v_{2}=m_{1} u_{1}+m_{2} u_{2}$ | 0.1 | 0.6 |
|  | Formula (9): $\frac{m_{1} v_{1}^{2}}{2}+\frac{m_{2} v_{2}^{2}}{2}=\frac{m_{1} u_{1}^{2}}{2}+\frac{m_{2} u_{2}^{2}}{2}$ | 0.1 |  |
|  | Formula (13): $u_{1}=\frac{m_{1}-m_{2}}{m_{1}+m_{2}} v_{1}+\frac{2 m_{2}}{m_{1}+m_{2}} v_{2}$ | 0,2 |  |
|  | Formula (14): $u_{2}=\frac{2 m_{1}}{m_{1}+m_{2}} v_{1}+\frac{m_{2}-m_{1}}{m_{1}+m_{2}} v_{2}$ | 0,2 |  |
| 2.5 | Formula (15): $\eta_{1}=\frac{1-\mu}{1+\mu}+\frac{2 \mu}{1+\mu} \eta_{2}$ | 0.2 | 1.6 |
|  | There are only straight lines on the graph, otherwise the graph is not graded | 0.2 |  |
|  | All lines pass through the point $\eta_{1}=1 ; \eta_{2}=1$ | 0.4 |  |
|  | There is a straight line $\eta_{1}=1$ | 0.2 |  |
|  | There is a straight line $\eta_{1}=-1+2 \eta_{2}$ | 0.4 |  |
|  | All lines are located in between $\eta_{1}=1$ and $\eta_{1}=-1+2 \eta_{2}$ | 0,2 |  |
| 2.6 | Inequalities (7): $\left\|\eta_{1}\right\|>1 \Rightarrow\left\{\begin{array}{l}\eta_{1}>1 \\ \eta_{1}<-1\end{array}\right.$ | 0.2 | 0.4 |
|  | Inequality (19): $\eta_{2}>1$ | 0.1 |  |
|  | Inequality (20): $\eta_{2}<-\frac{1}{\mu}$ | 0.1 |  |
| 2.7 | Formula (21): $\tilde{u}_{1}=-v_{1}+2 v_{2}$ | 0.1 | 0.3 |
|  | Inequality a): $v_{2}>1$ | 0.1 |  |
|  | Inequality b): $v_{2}<0$ | 0.1 |  |
| 2.8 | Formula (22): $x(t)=A \cos (\omega t)$ | 0.1 | 0.4 |
|  | Formula (23): $v(t)=-A \omega \sin (\omega t)$ | 0.1 |  |
|  | Formula (24): $V_{0}=A \omega=2 \pi \frac{A}{T}$ | 0,2 |  |
| 2.9 | Formula (25): $\eta=\frac{T-t_{1}}{T}$ | 0.3 | 2.7 |
|  | Formula (26): $t_{1}=\frac{T}{2}-\frac{2 A}{u}$ | 0.3 |  |
|  | Formula (27): $\eta=\frac{1}{2}+\frac{V_{0}}{\pi u}$ | 0.3 |  |
|  | Numerical value in formula (28): $\eta \approx 0.71$ | 0.3 |  |
|  | Formula (29): $-A \omega \sin \left(\omega t_{2}\right)=-u$ | 0.2 |  |
|  | Formula (30): $t_{2}=\frac{T}{2 \pi} \arcsin \frac{u}{V_{0}}$ | 0.2 |  |


|  | Formula (31): $x_{2}=A \sqrt{1-\frac{u^{2}}{V_{0}^{2}}}$ | 0.3 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (32): $t_{1}=\frac{T}{2 \pi}\left(\arcsin \frac{u}{V_{0}}-\frac{V_{0}}{u}\left(1-\sqrt{1-\frac{u^{2}}{V_{0}^{2}}}\right)\right)$ | 0.3 |  |
|  | Formula (33): $1-\eta=\frac{1}{2 \pi}\left(\arcsin \frac{u}{V_{0}}-\frac{V_{0}}{u}\left(1-\sqrt{1-\frac{u^{2}}{V_{0}^{2}}}\right)\right)$ | 0.3 |  |
|  | Numerical value in formula (34): $\eta \approx 0.96$ | 0.2 |  |
| 2.10 | Formula (35): $V=\frac{4 A}{T}$ | 0.2 | 0.2 |
| 2.11 | Formula (36): $\eta=\frac{1}{2}+\frac{V}{2 u}$ | 0.3 | 2.2 |
|  | Formula (37): $u_{+}=u+2 V$ | 0.2 |  |
|  | Formula (38): $u_{-}=u-2 V$ | 0.2 |  |
|  | Formula (39): $E=\eta \frac{m u_{+}^{2}}{2}+(1-\eta) \frac{m u_{-}^{2}}{2}$ | 0.3 |  |
|  | Formula (40): $\varepsilon=1+8\left(\frac{V}{u}\right)^{2}$ | 0.3 |  |
|  | Numerical value in formula (40): $\varepsilon \approx 4.6$ | 0.2 |  |
|  | Formula (41): $E=\frac{m}{2}(u+2 V)^{2}$ | 0.2 |  |
|  | Formula (42): $\varepsilon=\left(1+2 \frac{V}{u}\right)^{2}$ | 0.3 |  |
|  | Numerical value in formula (42): $\varepsilon=25.0$ | 0.2 |  |
| Total |  |  | 10.0 |

## Problem 3. Magnetron

## Electron motion in electric and magnetic fields

3.1 Under the action of a uniform electric field, an electron moves with a constant acceleration

$$
a=\frac{e E}{m}
$$

which is directed in the negative direction of the $x$ axis, so the maximum value of the achieved coordinate is determined by the expression

$$
x_{\max }=\frac{u_{0}^{2}}{2 a}=\frac{m u_{0}^{2}}{2 e E}
$$

3.2 When moving in a uniform magnetic field, the Lorentz force acts on an electron, equal to

$$
F_{L}=e u_{0} B
$$

and it moves in a circle whose radius $R$ is determined from Newton's second law

$$
m \frac{u_{0}^{2}}{R}=F_{L}
$$

which yeilds

$$
R=\frac{m u_{0}}{e B}
$$

It is obvious that the maximum value of the coordinate in this case is equal to

$$
x_{\max }=R=\frac{m u_{0}}{e B}
$$

3.3 The problem is most easily solved in the laboratory reference frame, in which the electron moves along the circle with the frequency determined by formula (5) in the form

$$
\omega=\frac{u_{0}}{R}=\frac{e B}{m} .
$$

When an electron is given a small additional speed, it begins to move along a circle that is close to the original one and intersects with it at two diametrically opposite points, which can be considered as motion along a closed two-dimensional trajectory with the period

$$
T=\frac{2 \pi}{\omega}=\frac{2 \pi m}{e B}
$$

3.4 В момент, когда координата $x$ максимальна, скорость частицы $u$ направлена вдоль оси $z$ и по закону сохранения энергии равна At the moment when the coordinate $x$ is maximum, the particle velocity $u$ is directed along the $z$ axis and, according to the law of conservation of energy, is equal to

$$
e E x_{\max }=\frac{m u^{2}}{2}
$$

In the projection onto the $z$ axis, the equation of motion is written in finite differences in the form

$$
m \frac{\Delta u_{z}}{\Delta t}=e B u_{x}
$$

which, with account of $\Delta x=u_{x} \Delta t$, leads to the relation

$$
m \Delta u_{z}=e B \Delta x
$$

which for the time moment sought takes the form

$$
m u=e B x_{\max }
$$

Solving equations (9) and (12) simultaneously, we finally obtain

$$
x_{\max }=\frac{2 m E}{e B^{2}}
$$

3.5 Since the magnetic field does not perform any work, the electron velocity remains constant in absolute value and equal to its initial value

$$
u=u_{0}=\text { const }
$$

Let us divide the total velocity into radial $u_{r}=d r / d t$ and $u_{\varphi}=r d \varphi / d t$ azimuthal components. The angular momentum of the electron relative to the origin is obviously equal to

$$
L=m r u_{\varphi},
$$

and the torque of the Lorentz force about the same point is

$$
M=e B u_{r} r
$$

According to the moment equation, we have

$$
\frac{d L}{d t}=M
$$

which together with the use of $u_{r}=d r / d t$ provides to the relation

$$
d\left(m r u_{\varphi}\right)=e \alpha r^{2} d r .
$$

At the moment of time when the distance to the $z$ axis is maximum, the radial velocity vanishes, and the azimuthal velocity is equal to the initial one in accordance with formula (14), so the integration of relation (18) leads to the equation

$$
m r_{\max } u_{0}=e \alpha \frac{r_{\max }^{3}}{3}
$$

which finally gives rise to

$$
r_{\max }=\sqrt{\frac{3 m u_{0}}{e \alpha}}
$$

3.6 Since the electron moves all the time along a circle, then, according to equation (5), with an increase in the magnetic field $B_{0}$ at its orbit, the derivative of the momentum changes according to the law

$$
\frac{d p}{d t}=e r \frac{d B_{0}}{d t} .
$$

The electron is set in motion due to the vortex electric field, whose strength $E$ is determined by the relation

$$
E=\frac{1}{2 \pi r} \frac{d \Phi}{d t}
$$

which, according to the Faraday law, includes the flux of magnetic induction through the electron orbit, equal to

$$
\Phi=\int_{0}^{r} B(r) 2 \pi r d r
$$

The equation of Newton's second law for the acceleration of an electron in orbit has the form

$$
\frac{d p}{d t}=e E
$$

The joint solution of equations (21)-(24) leads to the following equality for the magnetic field, which is called the cyclotron condition

$$
\int_{0}^{r} B(r) 2 \pi r d r=2 \pi r^{2} B_{0}
$$

From formula (25) we conclude that its satisfaction is possible only in the case when the electron moves in the region of a magnetic field with induction $B_{0}=B_{2}$, therefore, integrating the magnetic induction given in the formulation as a function of distance, we obtain the relation

$$
B_{1} \pi r_{1}^{2}+B_{2} \pi\left(r^{2}-r_{1}^{2}\right)=2 \pi r^{2} B_{2},
$$

whose solution has the following form

$$
\frac{B_{1}}{B_{2}}=1+\frac{r^{2}}{r_{1}^{2}}
$$

The motion of an electron in a circle is possible only in the area in which the induction is equal $B_{2}$, that is, at $r_{1}<r<r_{2}$, which means that the ratio sought must lie in the interval

$$
2<\frac{B_{1}}{B_{2}}<1+\frac{r_{2}^{2}}{r_{1}^{2}}
$$

## Cylindrical magnetron

3.7 Let the unit length of the cylindrical cathode and anode have a charge equal to $\lambda$, and the total length of the electrodes is $l$. Then, according to the Gauss theorem, the electric field strength in the space between the cathode and anode is determined by the equation

$$
E 2 \pi r l=\frac{\lambda l}{\varepsilon_{0}}
$$

which immediately yields

$$
E=\frac{\lambda}{2 \pi \varepsilon_{0} r}
$$

Here $r$ stands for the distance to the magnetron axes.
The dependence of the potential difference on the distance $r$, by definition, is written as an integral

$$
V=\int_{a}^{r} E d r=\frac{\lambda}{2 \pi \varepsilon_{0}} \ln \frac{r}{a}
$$

which in particularly for $r=b$ gives rise to

$$
V_{0}=\frac{\lambda}{2 \pi \varepsilon_{0}} \ln \frac{b}{a}
$$

Solving equations (31) and (32) together, we obtain

$$
V=V_{0} \frac{\ln (r / a)}{\ln (b / a)}=57.6 \mathrm{~V}
$$

3.8 Рассмотрим тонкое кольцо радиуса $R$, по которому протекает ток $j$, и рассчитаем величину магнитной индукции в точке на оси кольца, отстоящей то его центра на расстоянии $z$. Разобьем кольцо на малые элементы $d l$, тогда магнитная индукция определяется следующим законом БиоCabappa Consider a thin ring of radius $R$, through which the current $j$ flows, and calculate the magnitude of the magnetic induction at a point on the axis of the ring, which is located at a distance $z$ from its center. Let us divide the ring into small elements $d l$, then the magnetic induction is determined by the following Biot-Savart law

$$
d \bar{B}=\frac{\mu_{0} j}{4 \pi} \frac{d \bar{l} \times \bar{r}}{r^{3}},
$$

in which the vector $\dot{r}$ is drawn from the location of the current element $d l$ to the point $O$ where the magnetic induction is sought.

It follows from geometric relations that

$$
d l \times r=d l \cdot r
$$

and since the resulting magnetic induction is directed along the axis of the ring

$$
d B_{z}=d B \sin \alpha
$$

then, using the geometric relation $R=r \sin \alpha$, we finally obtain

$$
d B_{z}=\frac{\mu_{0} j}{4 \pi} \frac{R d l}{r^{3}} .
$$

![](https://cdn.mathpix.com/cropped/2407abeb-0390-4c4f-8424-ac95351347e8-16.jpg?height=499&width=418&top_left_y=1265&top_left_x=848)

Considering that the distances included in formula (37) are constant and

$$
r^{2}=R^{2}+z^{2},
$$

then after summing over all elements of the ring one finds

$$
B_{z}=\frac{\mu_{0} j}{2} \frac{R^{2}}{\left(R^{2}+z^{2}\right)^{3 / 2}}
$$

Let us now calculate the magnetic field induction at the center of the solenoid, since this is where the magnetron lamp is located. To do this, consider the turns located at a distance from the center from $z$ to $z+d z$, through which the current flows

$$
d j=\frac{N I}{L} d z
$$

These turns can be considered as a ring, whose magnetic induction is determined by formula (39), such that

$$
d B=\frac{\mu_{0} N I}{2 L} \frac{R^{2}}{\left(R^{2}+z^{2}\right)^{3 / 2}} d z
$$

which after integration gives the final expression

$$
B=\frac{\mu_{0} N I R^{2}}{2 L} \int_{-L / 2}^{L / 2} \frac{d z}{\left(R^{2}+z^{2}\right)^{3 / 2}}=\frac{\mu_{0} N I}{L \sqrt{1+D^{2} / L^{2}}},
$$

where the expression $D=2 R$ is used for the diameter.
For the motion of electrons in a magnetron, a formula is valid that is similar to formula (18) and has the form

$$
d\left(m r u_{\varphi}\right)=e B r d r
$$

whose integration under the conditions of constant magnetic induction and $a \ll b$ gives

$$
m r u_{\varphi}=\frac{1}{2} e B r^{2} .
$$

On the other hand, it follows from the law of conservation of energy that

$$
\frac{m}{2}\left(u_{r}^{2}+u_{\varphi}^{2}\right)=e V
$$

At the moment when the critical value of the current is reached, the magnetic induction near the anode becomes such that the radial velocity of the electrons vanishes, which leads to the conditions

$$
u_{r}=0, \quad r=b, \quad V=V_{0}
$$

which, using expressions (44) and (45), results in the critical value of the magnetic field

$$
B=\sqrt{\frac{8 m V_{0}}{e b^{2}}}
$$

Using formula (42), we find the corresponding current in the solenoid

$$
I_{\min }=\sqrt{\frac{8 m V_{0}}{e}\left(1+D^{2} / L^{2}\right)} \frac{L}{\mu_{0} N b}=0,701 \mathrm{~A}
$$

3.9 The initial energy of electrons in a lamp near the cathode is determined by the temperature of the cathode itself and is on the order of

$$
E_{T}=k_{B} T
$$

This energy is obviously must be much less than the energy of electrons near the anode, i.e.

$$
E_{T} \lessdot E_{0}
$$

where $E_{0}=e V_{0}$, whence we obtain the desired estimate

$$
T \times \frac{e E_{0}}{k_{B}}=8.70 \cdot 10^{5} \mathrm{~K},
$$

which actually means the applicability of the approximation used, since the cathode temperature is usually at least two orders of magnitude lower.

| 3.1 |  |  |  |
| :--- | :--- | :--- | :--- |
|  | Formula (1): $a=\frac{e E}{m}$ | 0.1 | 0.2 |
|  | Formula (2): $x_{\text {max }}=\frac{m u_{0}^{2}}{2 e E}$ | 0.1 |  |
| 3.2 | Formula (3): $F_{L}=e u_{0} B$ | 0.1 | 0.4 |
|  | Formula (4): $m \frac{u_{0}^{2}}{R}=F_{L}$ | 0.1 |  |
|  | Formula (5): $R=\frac{m u_{0}}{e B}$ | 0.1 |  |
|  | Formula (6): $x_{\text {max }}=R=\frac{m u_{0}}{e B}$ | 0.1 |  |
| 3.3 | Formula (7): $\omega=\frac{u_{0}}{R}=\frac{e B}{m}$ | 0.2 | 0.4 |
|  | Formula (8): $T=\frac{2 \pi}{\omega}=\frac{2 \pi m}{e B}$ | 0.2 |  |


| 3.4 | Formula (9): $e E x_{\text {max }}=\frac{m u^{2}}{2}$ | 0.2 | 1.0 |
| :--- | :--- | :--- | :--- |
|  | Formula (10): $m \frac{\Delta u_{z}}{\Delta t}=e B u_{x}$ | 0.2 |  |
|  | Formula (11): $m \Delta u_{z}=e B \Delta x$ | 0.2 |  |
|  | Formula (12): $m u=e B x_{\text {max }}$ | 0.2 |  |
|  | Formula (13): $x_{\text {max }}=\frac{2 m E}{e B^{2}}$ | 0.2 |  |
| 3.5 | Formula (14): $u=u_{0}=$ const | 0.2 | 1.4 |
|  | Formula (15): $L=m r u_{\varphi}$ | 0.2 |  |
|  | Formula (16): $M=e B u_{r} r$ | 0.2 |  |
|  | Formula (17): $\frac{d L}{d t}=M$ | 0.2 |  |
|  | Formula (18): $d\left(m r u_{\varphi}\right)=e \alpha r^{2} d r$ | 0.2 |  |
|  | Formula (19): $m r_{\text {max }} u_{0}=e \alpha \frac{r_{\text {max }}^{3}}{3}$ | 0.2 |  |
|  | Formula (20): $r_{\text {max }}=\sqrt{\frac{3 m u_{0}}{e \alpha}}$ | 0.2 |  |
| 3.6 | Formula (21): $\frac{d p}{d t}=e r \frac{d B_{0}}{d t}$ | 0.2 | 1.6 |
|  | Formula (22): $E=\frac{1}{2 \pi r} \frac{d \Phi}{d t}$ | 0.2 |  |
|  | Formula (23): $\Phi=\int_{0}^{r} B(r) 2 \pi r d r$ | 0.2 |  |
|  | Formula (24): $\frac{d p}{d t}=e E$ | 0.2 |  |
|  | Formula (25): $\int_{0}^{r} B(r) 2 \pi r d r=2 \pi r^{2} B_{0}$ | 0.2 |  |
|  | Formula (26): $B_{1} \pi r_{1}^{2}+B_{2} \pi\left(r^{2}-r_{1}^{2}\right)=2 \pi r^{2} B_{2}$ | 0.2 |  |
|  | Formula (27): $\frac{B_{1}}{B_{2}}=1+\frac{r^{2}}{r_{1}^{2}}$ | 0.2 |  |
|  | Formula (28): $2<\frac{B_{1}}{B_{2}}<1+\frac{r_{2}^{2}}{r_{1}^{2}}$ | 0.2 |  |
| 3.7 | Formula (29): $E 2 \pi r l=\frac{\lambda l}{\varepsilon_{0}}$ | 0.1 | 1.0 |
|  | Formula (30): $E=\frac{\lambda}{2 \pi \varepsilon_{0} r}$ | 0.1 |  |
|  | Formula (31): $V=\frac{\lambda}{2 \pi \varepsilon_{0}} \ln \frac{r}{a}$ | 0.2 |  |
|  | Formula (32): $V_{0}=\frac{\lambda}{2 \pi \varepsilon_{0}} \ln \frac{b}{a}$ | 0.2 |  |


|  | Formula (33): $V=V_{0} \frac{\ln (r / a)}{\ln (b / a)}$ | 0.2 |  |
| :--- | :--- | :--- | :--- |
|  | Numerical value in formula (33): $V=57.6 \mathrm{~V}$ | 0.2 |  |
| 3.8 | Formula (34): $d \bar{B}=\frac{\mu_{0} j}{4 \pi} \frac{d \bar{l} \times \bar{r}}{r^{3}}$ | 0.2 | 3.2 |
|  | Formula (35): $d l \times r=d l \cdot r$ | 0.2 |  |
|  | Formula (36): $d B_{z}=d B \sin \alpha$ | 0.2 |  |
|  | Formula (37): $d \boldsymbol{B}_{z}=\frac{\mu_{0} j}{4 \pi} \frac{R d l}{r^{3}}$ | 0.2 |  |
|  | Formula (38): $r^{2}=R^{2}+z^{2}$ | 0.2 |  |
|  | Formula (39): $B_{z}=\frac{\mu_{0} j}{2} \frac{R^{2}}{\left(R^{2}+z^{2}\right)^{3 / 2}}$ | 0.2 |  |
|  | Formula (40): $d j=\frac{N I}{L} d z$ | 0.2 |  |
|  | Formula (41): $d B=\frac{\mu_{0} N I}{2 L} \frac{R^{2}}{\left(R^{2}+z^{2}\right)^{3 / 2}} d z$ | 0.2 |  |
|  | Formula (42): $B=\frac{\mu_{0} N I}{L \sqrt{1+D^{2} / L^{2}}}$ | 0.2 |  |
|  | Formula (43): $d\left(m r u_{\varphi}\right)=e B r d r$ | 0.2 |  |
|  | Formula (44): $m r u_{\varphi}=\frac{1}{2} e B r^{2}$ | 0.2 |  |
|  | Formula (45): $\frac{m}{2}\left(u_{r}^{2}+u_{\varphi}^{2}\right)=e V$ | 0.2 |  |
|  | Formula (46): $u_{r}=0, \quad r=b, \quad V=V_{0}$ | 0.2 |  |
|  | Formula (47): $B=\sqrt{\frac{8 m V_{0}}{e b^{2}}}$ | 0.2 |  |
|  | Formula (48): $I_{\text {min }}=\sqrt{\frac{8 m V_{0}}{e}\left(1+D^{2} / L^{2}\right)} \frac{L}{\mu_{0} N b}$ | 0.2 |  |
|  | Numerical value in formula (48): $I_{\text {min }}=0,701 \mathrm{~A}$ | 0.2 |  |
| 3.9 | Formula (49): $E_{T}=k_{B} T$ | 0.2 | 0.8 |
|  | Formula (50): $E_{T}$ « $E_{0}$ | 0.2 |  |
|  | Formula (51): $T \approx \frac{e E_{0}}{k_{B}}$ | 0.2 |  |
|  | Numerical value in formula (51): $T$ « $8.70 \cdot 10^{5} \mathrm{~K}$ | 0.2 |  |
| Total |  |  | 10.0 |
