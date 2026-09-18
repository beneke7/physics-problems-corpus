---
id: solution-ocr-gpho-2016-theory-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2016_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2016-t1, gpho-2016-t2, gpho-2016-t3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Problem T1. Stabilizing unstable states (11 points)

Part A. Stabilization via feedback (3.5 points)
i. (1.5 pts) The moment of inertia of the rod is $I = \frac { m l ^ { 2 } } { 3 }$. The torque is $m g \frac { \varphi l } { 2 }$. (0.4 pts) so that the Newton's 2nd law is written as

$$
\begin{align*}
I \ddot { \varphi } & = m g \frac { \varphi l } { 2 } \\
\ddot { \varphi } & = \frac { 3 } { 2 } \frac { g } { l } \varphi . \tag{1}
\end{align*}
$$

(0.4 pts)

If we take $\varphi = A e ^ { \frac { t } { \tau } } + B e ^ { - \frac { t } { \tau } }$, then

$$
\begin{equation*}
\ddot { \varphi } = \frac { A } { \tau ^ { 2 } } e ^ { \frac { t } { \tau } } + \frac { B } { \tau ^ { 2 } } e ^ { - \frac { t } { \tau } } = \frac { \varphi } { \tau ^ { 2 } } . \tag{0.3pts}
\end{equation*}
$$

Substituting this into the equation of motion (1) we get

$$
\begin{align*}
\frac { \varphi } { \tau ^ { 2 } } & = \frac { 3 } { 2 } \frac { g } { l } \varphi  \tag{0.2pts}\\
\tau & = \sqrt { \frac { 2 } { 3 } \frac { l } { g } } . \tag{0.2pts}
\end{align*}
$$

(0.4 pts)

This means that $\varphi = A e ^ { \frac { t } { \tau } } + B e ^ { - \frac { t } { \tau } }$ is the solution for the equation of motion.
ii. (0.5 pts) The boy has to react before the rod falls over the angle $\frac { \pi } { 2 }$. Boy notices that the rod is falling, and tries to react. If the rod falls faster than his reaction time, he cannot keep it in balance. In the expression $\varphi = A e ^ { \frac { t } { \tau } } + B e ^ { - \frac { t } { \tau } }$, the dominating term is the first one (the second one decays in time), so we can put $\varphi = A e ^ { \frac { t } { \tau } }$, where $A$ is the angle at $t = 0$. Hence, the falling time $t = \tau \ln ( \pi / 2 A )$ depends on the initial angle $A$, but logarithmic dependence is very slow - the logarithm remains always of the order of unity. So we can estimate the falling time just as the characteristic time of the rod. This means that

$$
\begin{equation*}
\tau _ { r } \approx \sqrt { \frac { 2 } { 3 } \frac { l _ { r } } { g } } \tag{0.3pts}
\end{equation*}
$$

$$
\begin{equation*}
l _ { r } = \tau _ { r } ^ { 2 } \frac { 3 g } { 2 } = 0.59 \mathrm {~m} \tag{3}
\end{equation*}
$$

iii. (0.5 pts) The bird won't be able to rebalance itself when it has fallen over $\frac { \pi } { 2 }$. Similarly to the previous question, we can say that the bird's reaction time must be equal to the characteristic time $\tau _ { b }$.

Then we get

$$
\tau _ { b } \approx \sqrt { \frac { 2 } { 3 } \frac { l _ { b } } { g } } = 0.065 \mathrm {~s}
$$

(0.2 pts)
iv. (1 pt) The cyclist is able to balance himself by turning the handlebar so that the line connecting the wheels will move to the desire direction. For that line to move, the bike must move forward to a distance which is of the order of inter-wheel separation. So we can require $v _ { m } \tau \approx d$, where $\tau$ is bike's characteristic falling time.
(0.5 pts)

Note that with this equation we neglect the cyclists' reaction time (which makes balancing more difficult) but on the other hand the line connecting the wheels moves slightly already at a twice smaller forward-displacement of the bike (which makes balancing easier). Anyway, we are only making an estimate, so a mistake by a factor of 2 is perfectly OK.

Then we get

$$
d = v _ { m } \tau = v _ { m } \sqrt { \frac { 2 } { 3 } \frac { L } { g } }
$$

$$
v _ { m } = d \sqrt { \frac { 3 } { 2 } \frac { g } { L } } = 2.7 \mathrm {~m} / \mathrm { s }
$$

(0.3 pts)

Part B. Tightrope walker (3.5 points)
i. (1 pt) From the conservation of angular momentum

$$
m ( 1.4 H ) ^ { 2 } \frac { d \alpha _ { 1 } } { d t } + m H ^ { 2 } \frac { d \alpha _ { 2 } } { d t } = \text { Const. }
$$

(0.3 pts)

Partial credit 0.2 pts if the conservation is mentioned without writing equation. This process is instantaneous, i.e. $\frac { d \alpha _ { 1 } } { d t }$ and $\frac { d \alpha _ { 1 } } { d t }$ are very large, much large than that constant at the righthand-side (which is defined by the initial falling speed), hence we can put Const $= 0$.
(0.2 pts)

This simplifies into

$$
\begin{equation*}
1.96 \Delta \alpha _ { 1 } = - \Delta \alpha _ { 2 } \tag{2}
\end{equation*}
$$

(0.1 pts)

We also have

$$
\begin{equation*}
\beta = \alpha _ { 1 } - \alpha _ { 2 } = \left( \alpha _ { 0 } + \Delta \alpha _ { 1 } \right) - \left( \alpha _ { 0 } + \Delta \alpha _ { 2 } \right) = \Delta \alpha _ { 1 } - \Delta \alpha _ { 2 } \tag{0.2pts}
\end{equation*}
$$

(0.2 pts)

Solving the equations (1) and (2) we get

$$
\begin{align*}
& \alpha _ { 1 } = \alpha _ { 0 } + \frac { \beta } { 2.96 }  \tag{0.3pts}\\
& \alpha _ { 2 } = \alpha _ { 0 } - \frac { 1.96 } { 2.96 } \beta \tag{0.1pts}
\end{align*}
$$

(0.1 pts)
ii. (0.5 pts) In order to be able to straighten himself, the walker's centre of mass has to move leftwards, by a negative


angle. (0.1 pts)

By changing the upper body's angle by $\Delta \alpha _ { 1 }$, the lower body's angle will change by $\Delta \alpha _ { 2 } = - 1.96 \Delta \alpha _ { 1 }$. The centre of mass will then move by

$$
1.4 H \Delta \alpha _ { 1 } + H \Delta \alpha _ { 2 } = 1.4 H \Delta \alpha _ { 1 } - 1.96 H \Delta \alpha _ { 1 } = - 0.56 H \Delta \alpha _ { 1 }
$$

(0.3 pts)

Because the centre of mass will have to move by a negative angle, $\Delta \alpha _ { 1 }$ needs to be positive, which means that the walker has to bow clockwise. (0.1 pts)
iii. (1 pt) We can write the equation of motion

$$
2.96 \ddot { \alpha _ { 1 } } H = 2.4 g \alpha _ { 1 }
$$

Similarly to the question i. in part A, the solution for this differential equation is $\alpha _ { 1 } ( t ) = A \mathrm { e } ^ { \frac { t } { \tau } } + B \mathrm { e } ^ { - \frac { t } { \tau } }$, where $\tau = \sqrt { \frac { 2.96 } { 2.4 } \frac { H } { g } }$. (0.2 pts)
Because the time it takes to get to the vertical position is infinite, the component $A \mathrm { e } ^ { \frac { t } { \tau } }$ needs to be 0, meaning that $\alpha _ { 1 } ( t ) = B \mathrm { e } ^ { - \frac { t } { \tau } }$. (0.3 pts)
By taking time derivative, we obtain

$$
\dot { \alpha } _ { 1 } = - \frac { 1 } { \tau } B \mathrm { e } ^ { - \frac { t } { \tau } } .
$$

(0.3 pts)
For the instance when the boy straightened himself, $t = 0$, the equations take form $\alpha _ { 1 } = B$ and $\dot { \alpha } _ { 1 } = - \frac { B } { \tau }$. So, $\dot { \alpha } _ { 1 } = - \frac { \alpha _ { 1 } } { \tau }$, which can be rewritten as

$$
\frac { \dot { \alpha } _ { 1 } } { \alpha _ { 1 } } = - \frac { 1 } { \tau } = - \sqrt { \frac { 2.4 } { 2.96 } \frac { g } { H } }
$$

(0.2 pts)
iv. (1 pt) After the walker has straightened himself, the angle which he is at is still $\alpha _ { 0 }$, because during stage where he is bowing, the torque is much larger than when he is straightened, meaning that the change in angular speed is much larger than the change in the angle. (0.1 pts)
As found in the previous subquestion, the speed before and after the bowing are $\frac { \alpha _ { 0 } } { \tau }$ and $- \frac { \alpha _ { 0 } } { \tau }$ respectively. Then the change in the angular momentum is

$$
\Delta L = - 5.92 m H ^ { 2 } \frac { \alpha _ { 0 } } { \tau }
$$

(0.3 pts)

Because during the falling stage the change in angle is minuscule, we can express the change in angular momentum as $\Delta L = M T _ { b }$, where $M$ is the torque during bowing stage.
(0.2 pts)

During the bowing stage, the angles of the body segments are

$$
\alpha _ { 1 } = \alpha _ { 0 } + \frac { \beta _ { 0 } } { 2.96 } \approx \frac { \beta _ { 0 } } { 2.96 }
$$

$$
\alpha _ { 2 } = \alpha _ { 0 } - \frac { 1.96 } { 2.96 } \beta _ { 0 } \approx \frac { 1.96 } { 2.96 } \beta _ { 0 }
$$

The torque can be expressed as

$$
\begin{gathered}
M = 1.4 m g H \alpha _ { 1 } + m g H \alpha _ { 2 } = \\
\frac { 1.4 } { 2.96 } \beta _ { 0 } m g H - \frac { 1.96 } { 2.96 } \beta _ { 0 } m g H = - \frac { 0.56 } { 2.96 } \beta _ { 0 } m g H
\end{gathered}
$$

(0.3 pts)

Writing out $\Delta L = M T _ { b }$ we get

$$
\begin{gathered}
- 5.92 m H ^ { 2 } \frac { \alpha _ { 0 } } { \tau } = - \frac { 0.56 } { 2.96 } \beta _ { 0 } m g H T _ { b } \\
T _ { b } = 31.29 \frac { \alpha _ { 0 } } { \beta _ { 0 } } \frac { H } { \tau g } = 31.29 \frac { \alpha _ { 0 } } { \beta _ { 0 } } \frac { H } { g } \sqrt { \frac { 2.4 } { 2.96 } \frac { g } { H } } = 28.18 \frac { \alpha _ { 0 } } { \beta _ { 0 } } \sqrt { \frac { H } { g } }
\end{gathered}
$$

(0.1 pts)

## Part C. Kapitza's pendulum (4 points)

Throughout the entire problem, we use the system of reference of the suspension point.
i. (1.5 pts) During these periods of time when the suspension point accelerates upwards (and force of inertia is downwards), the equation of motion of the pendulum can be written as

$$
\frac { d ^ { 2 } \varphi } { d t ^ { 2 } } = \frac { a _ { 0 } } { l } \varphi ,
$$

where $a _ { 0 } = 2 v _ { 0 } / T$ is the frame's acceleration. (0.4 pts)
Incomplete attempts at writing Newton second law will be partially credited (0.2 pts).
The relative change of $\varphi$ is assumed to be small, so we can approximate $\varphi \approx \varphi _ { 0 }$ to obtain

$$
\frac { d ^ { 2 } \varphi } { d t ^ { 2 } } = \frac { 2 v _ { 0 } } { T l } \varphi _ { 0 } .
$$

(0.2 pts)

During the rest of the time, the same equation can be used if $a _ { 0 }$ is changed to $- a _ { 0 }$. (0.2 pts)
Therefore, the graph consists of parabolic segments, as depicted in the Figure. (0.4 pts)
The amplitude is found as

$$
\Delta \varphi = \frac { 1 } { 4 } \frac { v _ { 0 } T } { l } \varphi _ { 0 } .
$$

(0.3 pts)
![](../../../figures/solution-ocr/d86e7e2cc63f0dc0037d7549.jpg)
ii. (1.5 pts)

The average torque $\langle M \rangle = \langle m l a ( t ) \varphi ( t ) \rangle$. (0.3 pts)
Let us note that $\langle a ( t ) \langle \varphi \rangle \rangle = \langle a ( t ) \rangle \langle \varphi \rangle = 0$. (0.3 pts)
Therefore we can rewrite the average torque as


$$
\langle M \rangle = \langle m l a ( t ) [ \varphi ( t ) - \langle \varphi \rangle ] \rangle = - m l \frac { 2 v _ { 0 } } { T } \langle | \varphi ( t ) - \langle \varphi \rangle | \rangle
$$

(0.3 pts; if wrong sign 0.2 pts) It is easy to see that the average of $| \varphi - \langle \varphi \rangle |$ over the entire period equals to the average over the time interval $0 < t < \tau$. Straightforward integration yields

$$
\langle | \varphi - \langle \varphi \rangle | \rangle = \frac { 2 } { T } \int _ { 0 } ^ { T / 2 } \Delta \varphi \left( 1 - \frac { 4 t ^ { 2 } } { T ^ { 2 } } \right) d t = \frac { 2 } { 3 } \Delta \varphi = \frac { 1 } { 6 } \frac { v _ { 0 } T } { l } \varphi _ { 0 }
$$

(0.4 pts) Upon substituting this result into the previous expression we obtain

$$
\langle M \rangle = - \frac { 1 } { 3 } m v _ { 0 } ^ { 2 } \varphi _ { 0 } .
$$

iii. (1 pt) Gravity field does not affect the expression for the average torque of the force of inertia. So, we can use the result of the previous question. However, it gives rise to an additional contribution to the average torque, equal to $g \operatorname { lm } \varphi _ { 0 }$. (0.4 pts) Therefore, the equation of motion can be written as

$$
l ^ { 2 } \frac { d ^ { 2 } \varphi _ { 0 } } { d t ^ { 2 } } = \left( g l - \frac { 1 } { 3 } v _ { 0 } ^ { 2 } T ^ { 2 } \right) \varphi _ { 0 } .
$$

(0.4 pts) The stability is ensured if the factor at the right-hand-side is negative, i.e. if $3 g l < v _ { 0 } ^ { 2 }$.
(0.2 pts)


## Problem T2. Gravitational waves (10 points) Part A. Dipole radiation (2.4 points)

For the sake of convenience, let us denote $k = \frac { 1 } { 4 \pi \epsilon _ { 0 } }$
i. (1.4 pts) The total dipole moment can be expressed as $\vec { d } = - \vec { r } _ { 1 } e + \vec { r } _ { 2 } Z e$, (0.2 pts) where $\vec { r } _ { 1 }$ and $\vec { r } _ { 2 }$ are the position vectors of the electron and nucleus respectively. Then $\ddot { \vec { d } } = - \ddot { \overrightarrow { r _ { 1 } } } e + \ddot { \overrightarrow { r _ { 2 } } } Z e = - \frac { \vec { F } } { m } e - \frac { \vec { F } } { m _ { 1 } } Z e$,
(0.1 pts) but because the mass of the nucleus $m _ { 1 }$ is much larger than $m$, we can neglect the second term. Then

$$
\begin{equation*}
| \ddot { \vec { d } } | = \left| - \frac { \vec { F } } { m } e \right| = \frac { k Z e ^ { 3 } } { m r ^ { 2 } } \tag{0.3pts}
\end{equation*}
$$

$$
\begin{equation*}
P _ { e d } = \frac { \ddot { \vec { d } } ^ { 2 } } { 4 \pi \epsilon _ { 0 } c ^ { 3 } } = \left( \frac { k Z e ^ { 3 } } { m r ^ { 2 } } \right) ^ { 2 } \frac { 1 } { 6 \pi \epsilon _ { 0 } c ^ { 3 } } \tag{0.2pts}
\end{equation*}
$$

We can express $\lambda$ as $\lambda = \frac { c } { f } = \frac { 2 \pi r c } { v }$. (0.2 pts) We get $v$ from the relation $\frac { m v ^ { 2 } } { r } = k \frac { Z e ^ { 2 } } { r ^ { 2 } }$, then $v = e \sqrt { \frac { k Z } { m r } }$.
(0.3 pts) Finally

$$
\begin{equation*}
\lambda = \frac { 2 \pi r c } { v } = \frac { 2 \pi r c } { e } \sqrt { \frac { m r } { k Z } } \tag{0.1pts}
\end{equation*}
$$

ii. (1 pt) We know that $\vec { d } _ { g } = \sum _ { i } \vec { r } _ { i } m _ { i }$. Let us recall that the distance to centre of mass is

$$
\begin{equation*}
\vec { r } _ { c m } = \frac { \sum _ { i } \vec { r } _ { i } m _ { i } } { \sum _ { i } m _ { i } } . \tag{0.3pts}
\end{equation*}
$$

Then

$$
\vec { d } _ { g } = \sum _ { i } \vec { r } _ { i } m _ { i } = \vec { r } _ { c m } \sum _ { i } m _ { i }
$$

(0.2 pts) (Equivalently one can notice that $\dot { \overrightarrow { d _ { g } } } = \sum _ { i } \vec { v } _ { i } m _ { i }$ the net momentum.) $\vec { r } _ { c m }$ is constant because there aren't any external forces acting on the system. (0.3 pts)
This means that $\ddot { \overrightarrow { d _ { g } } } = 0$ and $P _ { g d } = 0$. (0.2 pts)

Part B. Quadrupole radiation (7.6 points)
i. (1 pt) The force acting on one of the stars is

$$
F = G \frac { M ^ { 2 } } { 4 R ^ { 2 } } = \frac { M v ^ { 2 } } { R }
$$

(0.6 pts) From here we can express the star's speed $v$. We can express the star's angular speed from the relation $\omega = \frac { v } { R }$. (0.2 pts)

$$
\omega = \frac { v } { R } = \frac { 1 } { 2 } \sqrt { \frac { G M } { R ^ { 3 } } }
$$

(0.2 pts)
ii. (0.8 pts) The dimensions for $A$ need to be

$$
\begin{equation*}
\mathrm { W } \frac { 1 } { \mathrm {~kg} ^ { 2 } \mathrm {~m} ^ { 4 } } = \frac { \mathrm { kgm } ^ { 2 } } { \mathrm {~s} ^ { 3 } } \frac { 1 } { \mathrm {~kg} ^ { 2 } \mathrm {~m} ^ { 4 } } = \frac { 1 } { \mathrm {~s} ^ { 3 } \mathrm {~m} ^ { 2 } \mathrm {~kg} } \tag{0.2pts}
\end{equation*}
$$

$A$ can only consist of the gravitational constant $G$, speed of light $c$ and angular velocity $\omega$. (0.2 pts) We can write a system of equations for every unit, m, s and kg. If we take the power of $G , c$ and $\omega$ to be $a , b$ and $c$ respectively, we can write out for metres

$$
\begin{equation*}
3 a + b = - 2 , \tag{0.1pts}
\end{equation*}
$$

for seconds

$$
\begin{equation*}
- 2 a - b - c = - 3 , \tag{0.1pts}
\end{equation*}
$$

and finally for kilograms

$$
\begin{equation*}
- a = - 1 . \tag{0.1pts}
\end{equation*}
$$

Solving the equations we get $a = 1 , b = - 5$ and $c = 6$, which means that

$$
\begin{equation*}
A = G \frac { \omega ^ { 6 } } { c ^ { 5 } } \tag{0.1pts}
\end{equation*}
$$

iii. (0.8 pts) The solution for this subquestion is the same as for the previous one. The units for $K$ are

$$
\begin{equation*}
\frac { \mathrm { W } } { \mathrm {~m} ^ { 2 } } = \frac { \mathrm { kg } } { \mathrm {~s} ^ { 3 } } \tag{0.2pts}
\end{equation*}
$$

$K$ can only depend on $G , c$ and $\omega$, (0.2 pts) if we take their powers to be $a , b$ and $c$ respectively, we can write out for metres

$$
\begin{equation*}
3 a + b = 0 \tag{0.1pts}
\end{equation*}
$$

for seconds

$$
\begin{equation*}
- 2 a - b - c = - 3 \tag{0.1pts}
\end{equation*}
$$

and finally for kilograms

$$
\begin{equation*}
- a = 1 \tag{0.1pts}
\end{equation*}
$$

Solving the equations we get $a = - 1 , b = 3$ and $c = 2$, which means that

$$
\begin{equation*}
K = \frac { c ^ { 3 } \omega ^ { 2 } } { G } \tag{0.1pts}
\end{equation*}
$$


iv. (1 pt) The flux at distance $L$ is $S = \frac { P _ { q g } } { 4 \pi L ^ { 2 } }$, (0.4 pts) on the other hand we can express flux as $S = K h _ { 0 } ^ { 2 }$. This means that

$$
\begin{equation*}
K h _ { 0 } ^ { 2 } = \frac { P _ { q g } } { 4 \pi L ^ { 2 } } = \frac { A M ^ { 2 } R ^ { 4 } } { 4 \pi L ^ { 2 } } \tag{0.4pts}
\end{equation*}
$$

and finally

$$
\begin{equation*}
h _ { 0 } = \sqrt { \frac { A M ^ { 2 } R ^ { 4 } } { K 4 \pi L ^ { 2 } } } = \sqrt { \frac { G \omega ^ { 6 } } { c ^ { 5 } } \frac { G } { c ^ { 3 } \omega ^ { 2 } } \frac { M ^ { 2 } R ^ { 4 } } { 4 \pi L ^ { 2 } } } = \frac { G \omega ^ { 2 } M R ^ { 2 } } { 2 \sqrt { \pi } c ^ { 4 } L } = \frac { G ^ { 2 } M ^ { 2 } } { 8 \sqrt { \pi } c ^ { 4 } L R } \tag{0.2pts}
\end{equation*}
$$

v. (1 pt) At distance $R _ { s }$ from the black hole, it takes all the energy $m c ^ { 2 }$ for an object to overcome the potential energy $- G \frac { M m } { R _ { s } }$. This means that

$$
m c ^ { 2 } = G \frac { M m } { R _ { s } } .
$$

(0.7 pts) (If non-relativistic energy $m c ^ { 2 } / 2$ is used, deduct 0.3 pts.) From here we can express $R _ { s }$

$$
R _ { s } = \frac { G M } { c ^ { 2 } }
$$

(0.1 pts) This answer is 2 times smaller than the correct one, which means that

$$
R _ { s } = \frac { 2 G M } { c ^ { 2 } }
$$

(0.2 pts)
vi. (1.5 pts) We can estimate the mass of the black holes by finding the orbital frequency and then using the expression we found in the first subquestion (Kepler's III law). (0.3 pts) The strain is maximal when the orbital radius for the black holes is $R _ { s }$. (0.3 pts) Reading from the graph, we get that the orbital period is $T \approx 0.006 \mathrm {~s}$ (0.3 pts)

$$
\begin{equation*}
\omega = \frac { 1 } { 2 } \sqrt { \frac { G M } { R _ { s } ^ { 3 } } } ; \tag{0.2pts}
\end{equation*}
$$

substituting $R _ { s }$ we obtain

$$
\begin{equation*}
\omega = \frac { 1 } { 2 } \sqrt { G M \frac { c ^ { 6 } } { 8 G ^ { 3 } M ^ { 3 } } } = \frac { c ^ { 3 } } { 2 \sqrt { 2 } G M } \tag{0.2pts}
\end{equation*}
$$

The mass of a black hole is

$$
\begin{equation*}
M = \frac { c ^ { 3 } } { 2 \sqrt { 2 } \omega G } = 1.45 \times 10 ^ { 32 } \mathrm {~kg} = 72 \mathrm { M } _ { \odot } \tag{0.2pts}
\end{equation*}
$$

In reality the masses of the black holes were $36 \mathrm { M } _ { \odot }$ and $29 \mathrm { M } _ { \odot }$, where $M _ { \odot }$ is the mass of Sun.
vii. (1.5 pts) As mentioned previously the maximal strain is when the black hole's orbital radius is $R _ { s }$, reading from the graph we get that the strain is $h _ { 0 } \approx 0.9 \times 10 ^ { - 21 }$. (0.4 pts) Then, using the result of question iv,

$$
\begin{equation*}
h _ { 0 } = \frac { G ^ { 2 } M ^ { 2 } } { 8 \sqrt { \pi } c ^ { 4 } L R _ { s } } ; \tag{0.4pts}
\end{equation*}
$$

Substituting $R _ { s }$ we obtain

$$
\begin{equation*}
h _ { 0 } = \frac { G ^ { 2 } M ^ { 2 } } { 8 \sqrt { \pi } c ^ { 4 } L } \frac { c ^ { 2 } } { 2 G M } = \frac { G M } { 16 \sqrt { \pi } c ^ { 2 } L } \tag{0.3pts}
\end{equation*}
$$

The distance to the black hole is

$$
\begin{equation*}
L = \frac { G M } { 16 \sqrt { \pi } c ^ { 2 } h _ { 0 } } ; \tag{0.2pts}
\end{equation*}
$$

numerically

$$
L = 4.21 \times 10 ^ { 24 } \mathrm {~m} .
$$

(0.2 pts)
This can be also expressed in megaparsecs, $L = 136 \mathrm { Mpc }$. In reality, the distance was $L = 410 \mathrm { Mpc } \pm 170 \mathrm { Mpc }$.


## Problem T3. Magnetars (11 points)

i. (1.5 pts) If we change the frog's height by $\Delta h$, the change in potential energy needs to be smaller than the change in magnetic energy. (0.2 pts)
Note that for every point in frog, the change in magnetic energy is the same, thus we can express it as

$$
\Delta E = - V \frac { \Delta \left( B ^ { 2 } \right) \chi } { 2 \mu _ { 0 } } = V \frac { B _ { 0 } ^ { 2 } \chi \Delta h } { 2 h _ { 0 } \mu _ { 0 } }
$$

The change in potential energy is

$$
\Delta \Pi = V \rho g \Delta h
$$

Then

$$
\begin{gathered}
\Delta E + \Delta \Pi < 0 \\
V \frac { B _ { 0 } ^ { 2 } \chi \Delta h } { 2 h _ { 0 } \mu _ { 0 } } + V \rho g \Delta h < 0
\end{gathered}
$$

(0.2 pts)

This means that

$$
B _ { 0 } > \sqrt { - \frac { 2 h _ { 0 } \mu _ { 0 } \rho g } { \chi } }
$$

(0.1 pts)
and numerically

$$
B _ { 0 } = 5.32 \mathrm {~T} .
$$

(0.1 pts)
ii. (1 pt) Let us observe a piece of the star with a volume $V _ { 0 }$ before the collapse and volume $V _ { 1 }$ after the collapse. The mass before and after are same. This means that

$$
V _ { 0 } \rho _ { s } = V _ { 1 } \rho _ { n }
$$

(0.1 pts)

The radius of the star scales as $V ^ { 1 / 3 }$, (0.1 pts) and the cross-sectional area as $V ^ { 2 / 3 }$. (0.1 pts)
The total magnetic field through the volume is also the same before and after the collapse:

$$
B _ { s } V _ { 0 } ^ { \frac { 2 } { 3 } } = B _ { n } V _ { 1 } ^ { \frac { 2 } { 3 } }
$$

(0.4 pts)

Now we can express $B _ { n }$

$$
B _ { n } = B _ { s } \left( \frac { V _ { 0 } } { V _ { 1 } } \right) ^ { \frac { 2 } { 3 } } = B _ { s } \left( \frac { \rho _ { n } } { \rho _ { s } } \right) ^ { \frac { 2 } { 3 } }
$$

(0.2 pts)
and numerically

$$
B _ { n } = 5.0 \times 10 ^ { 5 } \mathrm {~T}
$$

iii. (1 pt) During the collapse there is no torque on the star, this means that the angular momentum remains constant. Thus

$$
\frac { 2 } { 5 } M R _ { s } ^ { 2 } \omega _ { s } = \frac { 2 } { 5 } M R _ { n } ^ { 2 } \omega _ { n }
$$

(0.6 pts)

Recall that $R _ { s }$ is inversely proportional to $\rho _ { s } ^ { 1 / 3 }$. (0.2 pts)
Now we can express $\omega _ { n }$

$$
\omega _ { n } = \omega _ { s } \frac { R _ { s } ^ { 2 } } { R _ { n } ^ { 2 } } = \omega _ { s } \left( \frac { \rho _ { n } } { \rho _ { s } } \right) ^ { \frac { 2 } { 3 } }
$$

(0.2 pts)
iv. (1.5 pts) After time $t$, the neutron star has turned by an angle $\beta = \omega _ { n } t$. (0.2 pts)
The magnetic fields pass any radial line from the centre of the neutron star on average $N = \frac { \beta } { 2 \pi } = \frac { \omega _ { n } t } { 2 \pi }$ times. (0.3 pts)
The total magnetic flux entering the outer shell remains constant, and thus is always equal to $\Phi = 2 \pi R _ { 0 } B _ { 0 }$, (0.3 pts) where $R _ { 0 }$ is the radius of the outer shell. This means that the flux through any radial line is $\Phi N$. (0.4 pts)
Then

$$
B R _ { 0 } = 2 \pi R _ { 0 } B _ { 0 } N = R _ { 0 } B _ { 0 } \omega _ { n } t
$$

(0.2 pts)

And finally

$$
B = B _ { 0 } \omega _ { n } t
$$

(0.1 pts)
v. (1 pt) We can find the gravitational energy by integrating: we imagine removing the material layers of thickness $\mathrm { d } x$ one by one, starting from the outermost one. The potential energy for a hollow sphere with a thickness $\mathrm { d } x$ in the gravity field of the matter inside it is

$$
\mathrm { d } \Pi = - G \frac { \left( 4 \pi x ^ { 2 } \mathrm {~d} x \rho _ { n } \right) \frac { 4 } { 3 } \pi x ^ { 3 } \rho _ { n } } { x } = - \frac { 16 \pi ^ { 2 } } { 3 } G \rho _ { n } ^ { 2 } x ^ { 4 } \mathrm {~d} x
$$

(0.2 pts)

Integrating from $x = 0$ to $x = R _ { n }$ we get

$$
\Pi = - \frac { 16 \pi ^ { 2 } } { 15 } G \rho _ { n } ^ { 2 } R _ { n } ^ { 5 } = - \frac { 3 } { 5 } \frac { G M _ { n } ^ { 2 } } { R _ { n } }
$$

(0.3 pts)

A partial credit of 0.2 pts is given is if integration is substituted by a simplifying product.
This potential energy is equal to the magnetic energy

$$
\Pi = \frac { 4 } { 3 } \pi R ^ { 3 } B _ { n } ^ { 2 } \frac { 1 } { 2 \mu _ { 0 } } = \frac { 3 } { 5 } \frac { G M _ { n } ^ { 2 } } { R _ { n } }
$$

(0.3 pts)


Solving for $B _ { n }$ we get

$$
\begin{equation*}
B _ { n } = 3 \frac { M } { R ^ { 2 } } \sqrt { \frac { \mu _ { 0 } G } { 10 \pi } } \tag{0.1pts}
\end{equation*}
$$

and numerically

$$
\begin{equation*}
B _ { n } = 1.18 \times 10 ^ { 14 } \mathrm {~T} \tag{0.1pts}
\end{equation*}
$$

vi. (1 pt) The electron orbit will get distorted when the Lorentz force becomes in the same order of magnitude as Coulomb force.
The Coulomb force is

$$
\begin{equation*}
F _ { 1 } = \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } } { R _ { H } ^ { 2 } } \tag{0.2pts}
\end{equation*}
$$

On the other hand,

$$
\begin{equation*}
F _ { 1 } = \frac { m _ { e } v ^ { 2 } } { R _ { H } } \tag{0.2pts}
\end{equation*}
$$

We can express the velocity of electron

$$
\begin{equation*}
v = e \sqrt { \frac { 1 } { 4 \pi \epsilon _ { 0 } R _ { H } m _ { e } } } \tag{0.1pts}
\end{equation*}
$$

Then the Lorentz force is

$$
\begin{equation*}
F _ { 2 } \approx e v B \tag{0.2pts}
\end{equation*}
$$

Upon substituting $v$ we obtain

$$
F _ { 2 } = e ^ { 2 } \sqrt { \frac { 1 } { 4 \pi \epsilon _ { 0 } R _ { H } m _ { e } } }
$$

From the condition $F _ { 1 } \approx F _ { 2 }$ we can express the magnetic field strength

$$
\begin{equation*}
B = \sqrt { \frac { m _ { e } } { 4 \pi \epsilon _ { 0 } R _ { H } ^ { 3 } } } \tag{0.1pts}
\end{equation*}
$$

and numerically

$$
\begin{equation*}
B = 2.56 \times 10 ^ { 5 } \mathrm {~T} \tag{0.1pts}
\end{equation*}
$$

vii. (2 pts) Perpendicularly to the magnetic field, the Lorentz force is much larger than the Coulomb force since the magnetic field $B _ { n }$ is much larger than the magnetic field found in the previous question. This means that in the perpendicular plane, the electrons move along a circular cyclotron orbit. (0.2 pts) Then we can write

$$
\begin{equation*}
\frac { m _ { e } v ^ { 2 } } { R _ { 1 } } = e v B _ { n } , \tag{0.2pts}
\end{equation*}
$$

where $R _ { 1 } = d / 2$ is the orbit's radius. Now we apply the uncertainty principle. The uncertainty of the momentum is

$$
\begin{equation*}
\Delta p = 2 m _ { e } v \tag{0.3pts}
\end{equation*}
$$

and uncertainty of the coordinate

$$
\Delta x = 2 R _ { 1 }
$$

So we have

$$
\begin{equation*}
4 m _ { e } v R _ { 1 } \approx \hbar \tag{0.2pts}
\end{equation*}
$$

Substituting $m _ { e } v = \frac { \hbar } { 4 R _ { 1 } }$ to the first equation we get

$$
\begin{equation*}
\frac { \hbar } { R _ { 1 } ^ { 2 } } = 4 e B _ { n } \tag{0.1pts}
\end{equation*}
$$

Then

$$
\begin{equation*}
R _ { 1 } = \sqrt { \frac { \hbar } { 4 e B _ { n } } } \tag{0.1pts}
\end{equation*}
$$

The length of the cylinder will still remain in the order of magnitude of $R _ { H }$ because the Lorentz force doesn't act on the electron in that axis (parallel to the magnetic field). (0.5 pts) Then the ratio of the length and diameter is approximately

$$
\begin{equation*}
\kappa = \frac { R _ { H } } { R _ { 1 } } = 2 R _ { H } \sqrt { \frac { e B _ { n } } { \hbar } } \tag{0.1pts}
\end{equation*}
$$

and numerically

$$
\begin{equation*}
\kappa = 39 \approx 40 . \tag{0.1pts}
\end{equation*}
$$

Note that if we were to make calculations for magnetars with $B = 1 \times 10 ^ { 11 } \mathrm {~T}$, the orbital electrons would be ultrarelativistic.
