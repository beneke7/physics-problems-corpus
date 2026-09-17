---
id: izho-2023-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2023-t-q2
solution_type: official
source_document: solution-document-izho-2023-t-s
source_pdf: cache/phoxiv/izho/2023_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2023_T_S.pdf."
---

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
