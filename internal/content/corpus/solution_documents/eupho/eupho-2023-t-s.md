---
id: solution-document-eupho-2023-t-s
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2023_T_S.pdf
extraction_method: cached-mmd
mapped_problems: [eupho-2023-T1, eupho-2023-T2, eupho-2023-T3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eupho/2023_T_S.pdf."
---

## T1: Thermal lens - Solution

## (a) Drawing a $T(r)$ graph

The graph should present or clearly infer for the four elements shown in the figure.
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-01.jpg?height=465&width=755&top_left_y=463&top_left_x=150)

| Element of the graph | Pts. |
| :--- | :---: |
| Horizontal tangent at $r=0$ | 0.5 |
| Graph is concave and decreasing in $0 \leq r \leq \sigma$ | 0.5 |
| Graph is convex and decreasing in $\sigma \leq r \leq a$ | 0.5 |
| Nonzero negative slope at $r=a$ | 0.5 |
| Totally on (a) | $\mathbf{2 . 0}$ |

(b) Finding $T_{\mathrm{c}}$

## Approach with a direct solution of the heattransport equation.

Consider a cylindrical cut of the disk with radius $r$. Let $P_{\text {abs }}(r)$ be the portion of laser power absorbed within the cylinder. The absorbed power is being transferred as heat towards the outer holder through the circumvent surface $2 \pi b r$ of the cylinder. The heat-transport equation reads:

$$
-k(2 \pi r b) \frac{\mathrm{d} T(r)}{\mathrm{d} r}=P_{\mathrm{abs}}(r)
$$

Depending on $r$, the absorbed power is given by two different expressions. Within the illuminated area $0 \leq r \leq \sigma$, the incident light intensity $I=P_{\mathrm{L}} /\left(\pi \sigma^{2}\right)$ is constant, so the absorbed power is:

$$
P_{\mathrm{abs}}(r)=I \pi r^{2}=A P_{\mathrm{L}} \frac{r^{2}}{\sigma^{2}}
$$

and the solution for $T(r)$ is quadratic in $r$ :

$$
T(r)=T_{\mathrm{C}}-\frac{A P_{\mathrm{L}} r^{2}}{4 \pi k b \sigma^{2}}
$$

where $T_{\mathrm{C}}=T(0)$ is the temperature at the center. It is clear from that expression that the parameter $m$ is:

$$
m=-\frac{A P_{\mathrm{L}}}{4 \pi k b \sigma^{2}}=-1.1 \cdot 10^{7} \mathrm{Km}^{-2}
$$

Outside the illuminated area, i.e. for $\sigma \leq r \leq a$, $P_{\text {abs }}(r)=A P_{\mathrm{L}}$, which does not depend on $r$. The solution for $T(r)$ is logarithmic in $r$ :

$$
T(r)=T_{\mathrm{h}}+\frac{A P_{\mathrm{L}}}{2 \pi k b} \ln \left(\frac{a}{r}\right)
$$

where $T_{\mathrm{h}}=T(a)$ is the temperature of the holder, which is equal to the temperature along the outer
rim of the disk. After matching the two solutions at $r=\sigma$ we obtain:

$$
T_{\mathrm{C}}=T_{\mathrm{h}}+\frac{A P_{\mathrm{L}}}{4 \pi k b}\left[1+2 \ln \left(\frac{a}{\sigma}\right)\right]=41^{\circ} \mathrm{C}
$$

| Task | Pts. |
| :--- | :--- |
| Writes down the heat-transport equation in radial coordinates | 0.7 |
| Derives an expression for $P_{\text {abs }}$ at $0 \leq r \leq \sigma$ | 0.5 |
| Finds a quadratic solution for $T(r)$ in the region $0 \leq r \leq \sigma$ (Subtract 0.2 pts. if he boundary condition $T(0)=T_{\mathrm{C}}$ has not been accounted for) | 0.5 |
| Identifies the expression for $m$ (Subtract 0.1 pts . if the minus sign is missing) | 0.2 |
| Calculates $m$ numerically (Subtract 0.1 pts. if the minus sign is missing) | 0.2 |
| Derives an expression for $P_{\text {abs }}$ at $\sigma \leq r \leq a$ | 0.3 |
| Finds a logarithmic solution for $T(r)$ in the region $\sigma \leq r<a$ (Subtract 0.2 pts. if he boundary condition $T(a)=T_{\mathrm{h}}$ has not been accounted for) | 0.5 |
| Sets up an equation by matching the two solutions at $r=a$ | 0.6 |
| Writes down the final expression for $T_{\mathrm{C}}$ | 0.2 |
| Calculates $T_{\mathrm{C}}$ numerically | 0.3 |
| Totally on (b) | 4.0 |

## Alternative approach - direct piece-wise integration of the heat-transport equation.

After realizing that $P_{\text {abs }}(r)$ is given by a piece-wise function:

$$
P_{\mathrm{abs}}= \begin{cases}A P_{\mathrm{L}} r^{2} / \sigma^{2} & \text { if } 0 \leq r \leq \sigma \\ A P_{\mathrm{L}}=\mathrm{const} & \text { if } \sigma \leq r \leq a\end{cases}
$$

the student may substitute the given solution $T(r)= T_{\mathrm{c}}+m r^{2}$ into heat-transport equation (1) for $0 \leq r \leq \sigma$. This gives directly the expression (4) for the parameter $m$. The parameter $T_{\mathrm{c}}$ could be easily identified with the temperature $T(0)$ at the center of the disk. On the other hand, $T_{\mathrm{h}}=T(a)$ due to the thermal contact between the rim of the disk and the holder. It follows from the heat-transport equation that:

$$
-\frac{\mathrm{d} T(r)}{\mathrm{d} r}=\frac{P_{\mathrm{abs}}(r)}{2 \pi k b r}
$$

The piece-wise integration of the two sides of the equation in the interval $0 \leq r \leq a$ gives:

$$
\begin{aligned}
T(0)-T(a) & =T_{\mathrm{c}}-T_{\mathrm{h}}=\int_{0}^{a} \frac{P_{\mathrm{abs}}(r)}{2 \pi k b r} \mathrm{~d} r \\
& =\int_{0}^{\sigma} \frac{P_{\mathrm{abs}}(r)}{2 \pi k b r} \mathrm{~d} r+\int_{\sigma}^{a} \frac{P_{\mathrm{abs}}(r)}{2 \pi k b r} \mathrm{~d} r \\
& =\frac{A P_{\mathrm{L}}}{4 \pi k b}\left[1+2 \ln \left(\frac{a}{\sigma}\right)\right]
\end{aligned}
$$

which is equivalent to the expression (6) for $T_{\mathrm{c}}$.

| Task | Pts. |
| :--- | :--- |
| Writes down the heat-transport equation in radial coordinates | 0.7 |
| Derives an expression for $P_{\text {abs }}$ at $0 \leq r \leq \sigma$ | 0.5 |
| Derives an expression for $P_{\text {abs }}$ at $\sigma \leq r \leq a$ | 0.3 |
| Substitutes the given form of $T(r)$ into heattransport equation for the region $0 \leq r \leq \sigma$ | 0.3 |
| Obtains the expression for $m$ (Subtract 0.1 pts. if the minus sign is missing) | 0.2 |
| Calculates $m$ numerically (Subtract 0.1 pts. if the minus sign is missing) | 0.2 |
| States that $T_{\mathrm{c}}=T(0)$ | 0.2 |
| States that $T_{\mathrm{h}}=T(a)$ | 0.2 |
| Expresses $T_{\mathrm{c}}-T_{\mathrm{h}}$ through integral of $\mathrm{d} T / \mathrm{d} r$ in the $0 \leq r \leq a$ interval | 0.3 |
| Calculates the integral in the $0 \leq r \leq \sigma$ interval | 0.3 |
| Calculates the integral in the $\sigma \leq r \leq a$ interval | 0.3 |
| Writes down the final expression for $T_{\mathrm{C}}$ | 0.2 |
| Calculates $T_{\mathrm{C}}$ numerically | 0.3 |
| Totally on (b) | 4.0 |

## (c) Finding the focal length

## Approach based on the Fermat's principle

We consider only the illuminated area of the disk $(0 \leq r \leq \sigma)$. Due to the nonuniform temperature distribution, the index of refraction is also $r$-dependent, which leads to a bending of the light rays incident at nonzero radii $r$, as shown schematically in the figure. As a result, the light rays exiting the disk, converge toward the optical axis, and, eventually, cross it in a certain point at a distance $f$ from the disk.
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-02.jpg?height=406&width=479&top_left_y=1621&top_left_x=127)

Since the ray bending is relatively small, one may assume that: (i) all the rays travel approximately the same distance $b$ inside the disk; (ii) any given ray enters and exits the disk at approximately the same height $r$; (iii) $f \gg r$. Thus, the optical pathway $s(r)$ of a ray, incident at a height $r$ above the optical axis, is:

$$
s(r) \approx n(r) b+\sqrt{f^{2}+r^{2}} \approx n(r) b+f+\frac{r^{2}}{2 f}
$$

According to Fermat's principle, in order that all the rays focus at the same point, it is necessary that $s(r)$ is constant within $0 \leq r<\sigma$. In particular, $s(r) \equiv s(0)$ for any $r$, which leads to the condition:

$$
b(n(0)-n(r)) \equiv \frac{r^{2}}{2 f}
$$

Since:

$$
n(0)-n(r)=\gamma(T(0)-T(r))=-\gamma m r^{2}=\gamma|m| r^{2}
$$

condition (11) is satisfied if

$$
\gamma b|m| r^{2} \equiv \frac{r^{2}}{2 f}
$$

The beam hence focuses at

$$
f=\frac{1}{2 \gamma b|m|}
$$

Taking into account the expression for $m$ derived in part (b), we represent the answer in terms of the known parameters and calculate its numerical value:

$$
f=\frac{2 \pi k \sigma^{2}}{\gamma A P} \approx 0.94 \mathrm{~m}
$$

Alternatively, the student may state that the optical pathway $s(r)$ does not depend on $r$ and use the condition $\mathrm{d} s / \mathrm{d} r \equiv 0$, which gives:

$$
\frac{\mathrm{d} n(r)}{\mathrm{d} r} b+\frac{r}{f} \equiv 0
$$

Since:

$$
\frac{\mathrm{d} n(r)}{\mathrm{d} r}=\frac{\mathrm{d} n}{\mathrm{~d} T} \frac{\mathrm{~d} T}{\mathrm{~d} r}=\gamma 2 m r
$$

we obtain:

$$
\frac{r}{f}+2 b \gamma m r \equiv 0
$$

The beam thus focuses at:

$$
f=\frac{1}{2 \gamma b|m|}=\frac{2 \pi k \sigma^{2}}{\gamma A P} \approx 0.94 \mathrm{~m}
$$

| Task | Pts. |
| :--- | :--- |
| Formulates assumptions (i) and (ii) or equivalent statements | 0.2 |
| Derives a general expression for the optical pathway $s$ as a function of $r$ | 0.8 |
| Uses that $f \gg r$ and derives approximate quadratic expression for $s(r)$ | 0.5 |
| States that focusing takes place when $s(r)$ is the same for all rays converging in the focus | 0.5 |
| Writes explicitly equation in the form $s(r) \equiv s(0)$ OR $\mathrm{d} s / \mathrm{d} r \equiv 0$ | 0.5 |
| Uses the $T(r)$ dependence to derive the $n(r)$ dependence OR to find $\mathrm{d} n / \mathrm{d} r$ | 0.5 |
| Derives an expression for the focal length $f$ in terms of $m$ or of the parameters given in the problem statement | 0.8 |
| Calculates $f$ numerically | 0.2 |
| Totally on (c) | 4.0 |

## Approach based on a direct ray/wavefront tracing

As a next approximation, the light ray inside the disk can be modeled as a circular arc of a radius $R(R \gg b$, see the figure). As a result, the ray exits the disk at a smaller height $r-h$ above the optical axis ( $h \ll r$ ). The angle of bending $\varphi$ of the ray inside the material is related to $h$ by:

$$
\cos \varphi=1-\frac{h}{R}
$$

From the Snell's law it follows that:

$$
n(r) \sin (\pi / 2)=n(r-h) \sin (\pi / 2-\varphi)=n(r-h) \cos \varphi
$$

Up to terms, linear in $h$, one may write that:

$$
\cos \varphi=\frac{n(r)}{n(r-h)} \approx 1+\frac{n^{\prime}(r)}{n(r)} h
$$

Thus, the radius of the ray inside the material, is:

$$
R=-\frac{n(r)}{n^{\prime}(r)}
$$

and the bending angle is approximately:

$$
\varphi=\frac{b}{R}=-\frac{n^{\prime}(r) b}{n(r)}
$$

Alternatively, the students may trace a small part of the wavefront, associated with two rays, incident at close distances $r$ and $r+\mathrm{d} r$ from the optical axis. By noticing that the wavefront is perpendicular to the rays, the angle $\varphi$ of deviation of the rays is equal to the angle of rotation of the wavefront. Let $v(r)= c / n(r)$ be the speed of light in the material at a distance $r$ from the axis. The time-rate $\dot{\varphi}$, i.e. the angular speed of the wavefront is:

$$
\dot{\varphi}=\mathrm{d} v(r) / \mathrm{d} r=-c n^{\prime}(r) / n(r)^{2}
$$

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-03.jpg?height=216&width=455&top_left_y=1541&top_left_x=155)

The rays reach the opposite surface of the disk in approximately the same time $t=b n(r) / c$, so the total deflection angle of the wavefront, and of the rays, thereof, is $\varphi=\dot{\varphi} t=-n^{\prime}(r) b / n(r)$

Upon exiting the disk, the ray undergoes additional refraction, and inclines at a new angle $\theta$ relative to the optical axis. The Snell's law in the small-angle approximation ( $\sin \theta \approx \theta, \sin \varphi \approx \varphi$ ) states that:

$$
\theta=n(r-h) \varphi \approx n(r) \varphi=-n^{\prime}(r) b
$$

Since $n^{\prime}(r)=\gamma T^{\prime}(r)=2 m r$, one obtains the following expression for the angle of inclination:

$$
\theta=2 \gamma|m| r
$$

It is clear from the figure that:

$$
f=\frac{r-h}{\tan \theta} \approx \frac{r}{\theta}=\frac{1}{2 \gamma|m| b}
$$

which reproduces the result obtained by the Fermat's principle.

| Task | Pts. |
| :--- | :--- |
| States or shows on a graph that the light ray inside the material can be approximated by an arc OR illustrates on a graph that the wavefront is perpendicular to the light rays | 0.2 |
| Derives the relation $\cos \varphi=1-h / R$ or equivalent OR expresses the time of travel of the ray across the disk | 0.5 |
| Applies the Snell's law to the ray path inside the material OR derives a formula for the time-rate $\dot{\varphi}$ by considering the wavefront passing through two closely separated rays | 0.8 |
| Finds expression for the bending angle $\varphi$ inside the material | 0.5 |
| Applies the Snell's law for the refraction of rays exiting the disk | 0.5 |
| Uses the $T(r)$ dependence to find $n^{\prime}(r)$ | 0.5 |
| Derives an expression for the focal length $f$ in terms of $m$ or of the parameters given in the problem statement | 0.8 |
| Calculates $f$ numerically | 0.2 |
| Totally on (c) | 4.0 |

## Alternatively:

Consider a ray incident at a specific height $r_{0}$. Let $x \in[0, b]$ be the horizontal coordinate of the ray inside the material. Our goal is to find approximately the profile $r(x)$ of the light ray inside the material. From Snell's law:

$$
n(r) \cos \varphi=n\left(r_{0}\right)
$$

Since:

$$
\tan \varphi=-\frac{\mathrm{d} r(x)}{\mathrm{d} x}=-\frac{\sqrt{\left(1-\cos ^{2} \varphi\right)}}{\cos \varphi}
$$

we obtain:

$$
-\frac{\mathrm{d} r(x)}{\mathrm{d} x}=\frac{\sqrt{\left(n(r)-n\left(r_{0}\right)\right)\left(n(r)+n\left(r_{0}\right)\right)}}{n(r)}
$$

Since $n(r) \approx n\left(r_{0}\right)+n^{\prime}\left(r_{0}\right)\left(r-r_{0}\right)=n\left(r_{0}\right)+2 \gamma|m| r_{0}\left(r_{0}-r\right)$, the differential equation approximates to:

$$
-\frac{\mathrm{d} r(x)}{\mathrm{d} x}=\sqrt{\frac{4 \gamma|m| r_{0}}{n\left(r_{0}\right)}} \sqrt{r 0-r}
$$

which is solvable by separation of variables and gives an approximate parabolic path:

$$
r(x)=r_{0}-\frac{\gamma|m| r_{0}}{n\left(r_{0}\right)} x^{2}
$$

Finally, for the angle, just before exiting the disk, we obtain:

$$
\varphi \approx \tan \varphi=-r^{\prime}(x=b)=\frac{2 \gamma|m| r_{0} b}{n\left(r_{0}\right)}
$$

| Task | Pts. |
| :--- | :--- |
| Applies the Snell's law to express the angle $\varphi$ dependence on $r$ for one ray | 0.8 |
| Expresses $\tan \varphi=d r / d x$ | 0.2 |
| Applies approximation to derive a separable differential equation for $r(x)$ | 0.8 |
| Integrates to obtain parabolic path | 0.5 |
| Finds expression for the angle $\varphi$, before exiting the disk | 0.2 |
| Applies the Snell's law for the refraction of rays exiting the disk | 0.5 |
| Derives an expression for the focal length $f$ in terms of $m$ or of the parameters given in the problem statement | 0.8 |
| Calculates $f$ numerically | 0.2 |
| Totally on (c) | 4.0 |

## T2: A brick between planes - Solution

## (a)

The brick is squeezed between the plates and constrained between the plates, so the normal force on the top and bottom surfaces of the brick must be equal.

Since the brick is moving relative to each plate, the kinetic friction vector on each surface must also be equal in magnitude, but in a direction given by the relative velocity of each plate with respect to the brick. Note that this statement is true whether the plates are moving at the same speed, or different speeds.

A simple vector diagram can illustrate the velocity vectors, the frictional force vectors, and the net force vector.
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-05.jpg?height=360&width=366&top_left_y=945&top_left_x=137)

Then $\vec{a}=\vec{F} / m$, and after a time $\Delta t$ the new relative velocity vectors will be given by
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-05.jpg?height=330&width=366&top_left_y=1420&top_left_x=137)

By symmetry, this continues so that the acceleration of the brick is always at 45 degrees, until eventually,

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-05.jpg?height=327&width=364&top_left_y=1928&top_left_x=105)
Figure 1: Vector diagram for solution of part (a)

As such, $v=u_{1} / \sqrt{2}$.

| (a) | Pts |
| :--- | ---: |
| Use symmetry to find $u_{1}^{\prime}=u_{2}^{\prime}$. Must <br> be stated! | 1.0 |
| $\vec{u}_{1}^{\prime}=-\vec{u}_{2}^{\prime}$ at steady state. Must be <br> stated! | 1.0 |
| Vector diagram or algebraic equiva- <br> lent Fig 1 | 1.0 |
| Correctly find $v$ | 1.0 |
| Total on (a) | $\mathbf{4 . 0}$ |

The two "must be stated" points above need some sort of clear justification, but does not need to be written out in sentences. Just using it in the vector diagram is not sufficient to earn the points.

## Special case for students who solve part (b) first

A student who solves part (b) correctly, at least as far as required to solve part (a), and then uses it to write the answer for part (a) correctly will get full marks for part (a). A single trivial mistake in the application of a fully correct part (b) to part (a) will result in half marks for part (a). Trivial mistakes are a clearly identifiable sign error in an an algebra expression, or dropped coefficient between lines. Mistakes that make the answer dimensionally incorrect or physically improbable are not trivial, and would result in 0 marks for part (a).

A student who does not have full marks for part (b), but who used the results of part (b) that has incorrect physics to answer part (a), will get no marks for part (a), even if the answer to part (a) is correct.

## (b)

Though the initial vector diagram for velocities looks different, the force components are still equal in magnitude, directed along the relative velocity vectors.
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-05.jpg?height=360&width=764&top_left_y=1356&top_left_x=1087)

Then $\vec{a}=\vec{F} / m$, and after a time $\Delta t$ the new relative velocity vectors will be given by
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-05.jpg?height=328&width=764&top_left_y=1836&top_left_x=1087)

The process is repeated, where the direction of the net force is the angle bisector of the relative velocity vectors $\vec{u}_{1}^{\prime}$ and $\vec{u}_{2}^{\prime}$

As the quantity $a \Delta t$ is a small quantity compared to the magnitude of the velocity vectors, we can conclude that an equal amount is removed from each of the velocity vectors, so that magnitude comparison

$$
u_{1}-u_{2}=u_{1}^{\prime}-u_{2}^{\prime}
$$

is a conserved quantity.
For the next step, the net force vector is still the angle bisector for $u_{1}$ and $u_{2}$. The above arguments will hold true for the conserved quantity, and then the final velocity can be found by

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-06.jpg?height=330&width=761&top_left_y=210&top_left_x=105)
Figure 2: The correct construction to find direction of net force

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-06.jpg?height=336&width=768&top_left_y=699&top_left_x=98)
Figure 3: Vector diagram for solution of part (b)

Then

$$
\left(u_{1}^{\prime}+u_{2}^{\prime}\right)^{2}=u_{1}^{2}+u_{2}^{2}=D^{2}
$$

and

$$
u_{1}^{\prime}-u_{2}^{\prime}=u_{1}-u_{2}=\delta
$$

can be solved for $u_{1}^{\prime}$ and $u_{2}^{\prime}$, with

$$
u_{2}^{\prime}=\frac{1}{2}(D-\delta)
$$

and

$$
u_{1}^{\prime}=\frac{1}{2}(D+\delta)
$$

This gives the components of $v$ as

$$
v_{x}=\frac{u_{2}^{\prime}}{D} u_{1}=\frac{u_{1}}{2}\left(1-\frac{\delta}{D}\right)
$$

and

$$
v_{y}=\frac{u_{1}^{\prime}}{D} u_{2}=\frac{u_{2}}{2}\left(1+\frac{\delta}{D}\right)
$$

and the magnitude is

$$
v=\frac{1}{2} \sqrt{D^{2}+\delta^{2}-2 \frac{\delta}{D}\left(u_{1}^{2}-u_{2}^{2}\right)}
$$

Writing this in terms of $u_{1}$ and $u_{2}$ is left as an exercise for the reader.

$$
\begin{aligned}
v=\sqrt{\frac{1}{2}\left(u_{1}^{2}+u_{2}^{2}\right.}- & \left.u_{1} u_{2}-\frac{\left(u_{1}-u_{2}\right)^{2}\left(u_{1}+u_{2}\right)}{\sqrt{u_{1}^{2}+u_{2}^{2}}}\right) \\
& =\frac{1}{\sqrt{2}} \sqrt{u_{1} u_{2}-\left(u_{1}-u_{2}\right)^{2}\left(\frac{u_{1}+u_{2}}{\sqrt{u_{1}^{2}+u_{2}^{2}}}-1\right)}
\end{aligned}
$$

| (b) Scheme G1 | Pts |
| :--- | :--- |
| Show/explain that $\vec{a}$ is always angle bisector | 1.0 |
| Show that $\delta$ (Eq 29) is a constant of the motion | 1.0 |
| $\vec{u}_{1}^{\prime}$ and $\vec{u}_{2}^{\prime}$ are in opposite directions at steady state | 1.0 |
| Vector diagram for relative velocities Fig 3 | 1.0 |
| Apply $D$ (Eq 30) or equivalent | 0.2 |
| Apply $\delta$ (Eq 31) or equivalent | 0.2 |
| Correctly find $v_{x}$ or $v_{y}$ | 0.4 |
| Correctly find other one | 0.2 |
| Correctly find $v$ | 1.0 |
| Total on (b) | 6.0 |

A student who correctly finds $v$ without explicitly writing $v_{x}$ and $v_{y}$ will be assumed to have found $v_{x}$ and $v_{y}$ by applying $D$ and $\delta$ and should get those points.

An incorrect value for $v_{x}$ or $v_{y}$ or $v$ that is dimensionally correct and wrong only because of a math error will get half marks, but the math error must be clear.

Writing $v$ in an equivalent form of Eq. 34 but not in the final form in terms of $u_{1}$ and $u_{2}$ only receives only 0.6/1.0 points for last part.

## Possible Error Scenarios

Students who attempt graphical approach who have an error below should follow the grading scheme below.

1. Assuming that the direction of the frictional force is given by the vector sum of the relative velocities.

An example of the improper vector construction is shown in the following figure.
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-06.jpg?height=334&width=764&top_left_y=1866&top_left_x=1123)

The immediate consequence is that Eq. 29 is no longer true. With quick inspection, the student should conclude that the final state must have $\vec{u}_{1}=-\vec{u}_{2}$, and then the graphical velocity picture would be, at steady state,
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-06.jpg?height=332&width=762&top_left_y=2460&top_left_x=1123)

| (b) Scheme E1 | Pts |
| :--- | :--- |
| Vector diagram showing (incorrect!) force direction, or equivalent statement | 0.5 |
| A clear statement that the (incorrect) force direction depends on the vector sum of the relative velocities (see note below!) | 0.5 |
| Explicitly stating (incorrect!) $\vec{u}_{1}^{\prime}= -\vec{u}_{2}^{\prime}$ at steady state. | 0.5 |
| Vector diagram for steady state, or equivalent statement | 0.8 |
| Stating $v=\frac{1}{2} \sqrt{u_{1}^{2}+u_{2}^{2}}$ | 0.7 |
| Total on (b) | 3.0 |

There is no other partial credit possible for this approach.

Note: the student must demonstrate knowledge that the force is proportional to the relative velocity; if they only look at the force at the start of the problem, and never address what happens as the problem evolves, they don't get this 0.5 points.
2. Assuming that the direction of the final velocity is orthogonal to the vector difference of the velocities of the plates.

This scheme only applies when a student explicitly states that $v$ is perpendicular. Do not use this grading scheme if it is simply a vaguely drawn vector diagram.

It is true that the acceleration vector approaches the steady state orthogonal to the hypotenuse of the triangle, but not the final velocity. As such, the following vector diagram is wrong:
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-07.jpg?height=348&width=766&top_left_y=1969&top_left_x=169)

It is possible that the student started with some correct physics according to the original approach, and then makes the above assumption to finish the problem; it is also possible that they started with the perpendicular assumption.

If the only mistake is a bad final vector diagram with a perpendicular marking, but then did the algebra based on $D$ and $\delta$ then use the following:

| (b) Scheme E2A | Pts |
| :--- | :--- |
| Show/explain that $\vec{a}$ is always angle bisector | 1.0 |
| Show that $\delta$ (Eq 29) is a constant of the motion | 1.0 |
| $\vec{u}_{1}^{\prime}$ and $\vec{u}_{2}^{\prime}$ are in opposite directions at steady state | 1.0 |
| Vector diagram above (incorrect!) for relative velocities at steady state, or any statement that final $v$ is orthogonal. | 0.5 |
| Apply $D$ (Eq 30) or equivalent | 0.2 |
| Apply $\delta$ (Eq 31) or equivalent | 0.2 |
| Correctly find $v_{x}$ | 0.3 |
| Correctly find $v_{y}$ | 0.3 |
| Correctly find $v$ | 1.0 |
| Total on (b) | 5.5 |

A student who correctly finds $v$ without explicitly writing $v_{x}$ and $v_{y}$ will be assumed to have found $v_{x}$ and $v_{y}$ by applying $D$ and $\delta$ and should get those points.

An incorrect value for $v_{x}$ or $v_{y}$ or $v$ that is dimensionally correct and wrong only because of a math error will get half marks, but the math error must be clear.

Writing $v$ in an equivalent form of Eq. 34 but not in the final form in terms of $u_{1}$ and $u_{2}$ only receives only 0.6/1.0 points for last part.
If the mistake is that they used the perpendicular vector diagram to solve the problem, then their answers would be different, so use the following:

| (b) Scheme E2B | Pts |
| :--- | :--- |
| Show/explain that $\vec{a}$ is always angle bisector | 1.0 |
| Show that $\delta$ (Eq 29) is a constant of the motion | 1.0 |
| $\vec{u}_{1}^{\prime}$ and $\vec{u}_{2}^{\prime}$ are in opposite directions at steady state | 1.0 |
| Vector diagram above (incorrect!) for relative velocities at steady state, or any statement that final $v$ is orthogonal. | 0.5 |
| Find (incorrect!) $v=u_{1} u_{2} / \sqrt{u_{1}^{2}+u_{2}^{2}}$ | 1.0 |
| Total on (b) | 4.5 |

A dimensionally correct formula for $v$ that differs from above because of a single math error in a clear derivation based on the figure will get 0.5 out of 1.0 for the $v$.
3. Assuming that the final velocity is the average of the vector velocities of the plates.
Note that this approach yields the same result as a previous approach, but it is not worth as many points, as the fundamental physics starts from a higher level incorrect assumption. Here, the student is just assuming that the final speed is an average, in the previous approach the student
had an error in the direction of the forces. If they use forces, a previous grading scheme applies.
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-08.jpg?height=332&width=766&top_left_y=322&top_left_x=169)

| (b) Scheme E3 | Pts |
| :--- | ---: |
| Explicity stating $\vec{u}_{1}^{\prime}$ and $\vec{u}_{2}^{\prime}$ are <br> in opposite directions at steady <br> state. | 1.0 |
| Vector diagram above | 0.5 |
| Stating $v=\frac{1}{2} \sqrt{u_{1}^{2}+u_{2}^{2}}$ | 0.5 |
| Total on (b) | $\mathbf{2 . 0}$ |

There is no other partial credit possible for this approach.
4. Assuming that the final velocity is the vector sum of the velocities of the plates.

Though very tempting, it violates so many requirements for a steady state solution that this is not worth very many points at all.
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-08.jpg?height=332&width=770&top_left_y=1416&top_left_x=169)

| (b) Scheme E4 | Pts |
| :--- | ---: |
| Vector diagram above | 0.5 |
| Total on (b) | $\mathbf{0 . 5}$ |

There are no points for finding an expression for $v$, as the method is just wrong.

## Alternative Approaches

Non-Cartesian Differential Equations Effectively a graphical approach without graphics, one can focus on the relative velocity vectors as coordinate axis. Then the important equations of motion are

$$
\frac{d u_{1 r}}{d t}=-\frac{F}{m} \text { and } \frac{d u_{2 r}}{d t}=-\frac{F}{m}
$$

where the force magnitude $F$ is a function of the relative directions of the coordinate axes $\vec{u}_{1 r}$ and $\vec{u}_{2 r}$.

The student can quickly realize that the difference of these two expressions is zero, so that $\delta$ is a constant of the motion.

At steady state, $F=0$, and this happens when $\vec{u}_{1 r}$ and $\vec{u}_{2 r}$ point in opposite directions.

| (b) Scheme A1 | Pts |
| :--- | :--- |
| A set of differential equations Eq35 | 1.0 |
| Show that $\delta$ (Eq 29) is a constant of the motion | 1.0 |
| $\vec{u}_{1}^{\prime}$ and $\vec{u}_{2}^{\prime}$ are in opposite directions at steady state | 1.0 |
| Equivalent math statement or diagram for steady state relative velocities Fig 3 | 1.0 |
| Apply $D$ (Eq 30) or equivalent | 0.2 |
| Apply $\delta$ (Eq 31) or equivalent | 0.2 |
| Correctly find $v_{x}$ or $v_{y}$ | 0.4 |
| Correctly find other one | 0.2 |
| Correctly find $v$ | 1.0 |
| Total on (b) | 6.0 |

A student who correctly finds $v$ without explicitly writing $v_{x}$ and $v_{y}$ will be assumed to have found $v_{x}$ and $v_{y}$ by applying $D$ and $\delta$ and should get those points.

An incorrect value for $v_{x}$ or $v_{y}$ or $v$ that is dimensionally correct and wrong only because of a math error will get half marks, but the math error must be clear.

Writing $v$ in an equivalent form of Eq. 34 but not in the final form in terms of $u_{1}$ and $u_{2}$ only receives only 0.6/1.0 points for last part.

Follow on errors are not allowed for first parts, as the math expressions are almost trivial. They are also not allowed for the algebraic part at the end; see possible mistakes above for possible scenarios where points could be awarded by writing an equivalent algebraic expression for the graphical approach.

Cartesian Differential Equations Attempting to set up equations of motions in a Cartesian system requires finding the direction of relative velocity of each surface. Assuming that $u_{1}$ is in the $x$ direction and $u_{2}$ is in the $y$ direction, and if the velocity components of the block are $v_{x}$ and $v_{y}$, the relative velocities of the planes are

$$
u_{1 r x}=u_{1}-v_{x} \text { and } u_{1 r y}=-v_{y}
$$

and

$$
u_{2 r x}=-v_{x} \text { and } u_{2 r y}=u_{2}-v_{y}
$$

The forces of friction from each plane are equal in magnitude and directed along the relative velocity vectors, so a steady state solution is when these two relative vectors are in opposite directions.

The force vectors then have components

$$
F_{1 x}=F \frac{u_{1 r x}}{u_{1 r}} \text { and } F_{1 y}=F \frac{u_{1 r y}}{u_{1 r}}
$$

and

$$
F_{2 x}=F \frac{u_{2 r x}}{u_{2 r}} \text { and } F_{2 y}=F \frac{u_{2 r y}}{u_{2 r}}
$$

This gives the following equation of motion for the block:

$$
\frac{d v_{x}}{d t}=a_{x}=\frac{F}{m}\left(\frac{u_{1 r x}}{u_{1 r}}+\frac{u_{2 r x}}{u_{2 r}}\right)
$$

and

$$
\frac{d v_{y}}{d t}=a_{y}=\frac{F}{m}\left(\frac{u_{1 r y}}{u_{1 r}}+\frac{u_{2 r y}}{u_{2 r}}\right)
$$

A student might have noticed that this is a nasty set of coupled differential equations.

Both of these have vanishing accelerations according to the same condition:

$$
u_{1 r x}^{2} u_{2 r y}^{2}=u_{2 r x}^{2} u_{1 r y}^{2}
$$

which is merely the statement that at steady state the two relative velocity vectors are in opposite directions. As this is still only one equation, it is not possible to find the steady state $v_{x}$ and $v_{y}$ from this alone. A simpler expression can be found, however,

$$
u_{1} u_{2}=u_{1} v_{y}+u_{2} v_{x} .
$$

This, however, is merely the statement of the graphical vector diagram
![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-09.jpg?height=332&width=761&top_left_y=932&top_left_x=137)

Still, it is not possible to know where the vector $\vec{v}$ touches the line described by $\vec{u}_{1}-\vec{u}_{2}$.

This isn't the end, however. Consider

$$
u_{1 r}^{2}=u_{1 r x}^{2}+u_{1 r y}^{2}
$$

Taking the time derivative, one gets

$$
u_{1 r} \dot{u}_{1 r}=u_{1 r x} \dot{u}_{1 r x}+u_{1 r y} \dot{u}_{1 r y}
$$

Combine with the above, and

$$
u_{1 r} \dot{u}_{1 r}=-\frac{F}{m}\left(\frac{u_{1 r x}^{2}}{u_{1 r}}+\frac{u_{1 r x} u_{2 r x}}{u_{2 r}}+\frac{u_{1 r y}^{2}}{u_{1 r}}+\frac{u_{1 r y} u_{2 r y}}{u_{2 r}}\right)
$$

which means

$$
\dot{u}_{1 r}=-1-\frac{u_{1 r x} u_{2 r x}}{u_{1 r} u_{2 r}}-\frac{u_{1 r y} u_{2 r y}}{u_{1 r} u_{2 r}}
$$

Out of symmetry, an identical expression will be found for $\dot{u}_{2 r}$, which means that

$$
\delta=u_{1 r}-u_{2 r}
$$

is a constant of the motion.
At this point, a student can apply the results of Eq 36 with this constant difference formula and solve for $v_{x}$ and $v_{y}$ as done in the first solution.

In the scheme below, finding the expression assumes found correctly and completely, and a student would get 0.2 points for (most) expressions. There are no partial points if the equation is wrong.

However, for the first four categories only (marked with an *, follow on errors are not penalized for work based on a previous mistake, assuming that it does not trivialize the result.

| (b) Scheme A2 | Pts |
| :--- | :--- |
| Expressions for relative velocity components (4 @ 0.2 each, *) | 0.8 |
| Expressions for force components (4 @ 0.2 each, *) | 0.8 |
| Expressions for acceleration components (2 @ 0.2 each, *) | 0.4 |
| Find equation for steady state or equivalent to Eq 36 (must not have relative velocity, or is incomplete, *) | 0.5 |
| Show that $\delta$ (Eq 37) is a constant of the motion (must be correct, regardless of follow on error) | 1.0 |
| Apply $D$ (Eq 30) or equivalent | 0.2 |
| Apply $\delta$ (Eq 31) or equivalent | 0.2 |
| Correctly find $v_{x}$ or $v_{y}$ | 0.4 |
| Correctly find other one | 0.2 |
| Correctly find $v$ | 1.0 |
| Total on (b) | 6.0 |

A student who correctly finds $v$ without explicitly writing $v_{x}$ and $v_{y}$ will be assumed to have found $v_{x}$ and $v_{y}$ by applying $D$ and $\delta$ and should get those points.

An incorrect value for $v_{x}$ or $v_{y}$ or $v$ that is dimensionally correct and wrong only because of a math error will get half marks, but the math error must be clear.

Writing $v$ in an equivalent form of Eq. 34 but not in the final form in terms of $u_{1}$ and $u_{2}$ only receives only 0.6/1.0 points for last part.

Hannover Germany

## T3: Plate between magnets - Solution

General remarks:
Calculational numerical errors - 0.2 p Dimensionally wrong answers - 0 p

## Part a) ( $\sim 3$ pts)

Let us analyze how the current in the metal starts to build up when we start moving the plate in the rest frame of the magnets. The free electrons in the metal try to move together with the plate in the $+y$ direction, but a Lorentz force pointing in the $-x$ direction makes them deviate.

After some time the charge accumulation stops and the charge and current distributions do not depend on time anymore. According to Ohm's law,

$$
\vec{j}=\vec{j}_{P}+\frac{1}{\varrho} \vec{v} \times \vec{B},
$$

where $\vec{j}$ is the total current density, $\vec{v} \times \vec{B}$ is the result of the Lorentz force, and $\vec{j}_{p}$ is the current density caused by the electric field (and is therefore a potential field).

Inside the circular region ( $r<R$ ) the Lorentz term is constant, but outside it is zero. Nevertheless, the $E$-field of the accumulated charges is present there, which gives rise to a current. In the steady state considered here, the charge distribution is constant in time, and hence the total current density $\vec{j}$ is sourcefree everywhere. However, this does not hold for $\vec{j}_{P}$ which is driven by the "sources" and "sinks" along the rim of the circular region of radius $R$. Those sources and sinks compensate exactly the sources of the Lorentz term mentioned above. Only a sourcefree jump of the total current density is allowed on the rim, resulting in the kinks on the streamlines along the boundary.

Based on these considerations, we can draw a qualitative pattern of the current flow: inside the circular disc, there is a flow in the direction of the Lorentz force and the streamlines of the created flow of current close onto themselves outside of that region as shown in the figure below.

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-10.jpg?height=455&width=833&top_left_y=2298&top_left_x=141)
fig. 1

| Grading scheme part a) | Pts |
| :--- | :--- |
| Streamlines are continuous and arrows are consistent along each streamline and streamlines don't meet or intersect. If the streamlines are qualitatively (physically) wrong, 0 p should be given. | 1.0 |
| Twofold symmetry* with respect to $x$ axis (if axis is not indicated in any way, only 0.1 p ) | 0.2 |
| Twofold symmetry with respect to $y$ axis (if axis is not indicated in any way, only 0.1 p ) | 0.2 |
| Indicating the boundary of the circular region | 0.1 |
| Breaking points on the boundary (only rewarded if both inside and outside streamlines are shown) | 0.8 |
| Along the $y$-axis the direction of current density is $+x$ inside and $-x$ outside (if axis is not indicated in any way, 0.0 p ; if the direction is correct in only one rigion, 0.3 p ; if there is a sign mistake only, 0.3 p ) | 0.7 |
| Stating that current density is homogeneous inside is not required in part a) | 0.0 |
| Total on part a) | 3.0 |

## Part b ( $\sim 5$ pts)

From here on, we make use of the uniqueness of the solution to the correctly posed boundary conditions for the Maxwell equations inside the plate. We need to satisfy the condition that current density is sourceless everywhere, i.e.

$$
\oint \vec{j} \times \vec{d} l=0,
$$

where $\vec{j}$ denotes the current density and integral is taken over an arbitrary closed loop inside the plate. The current density must satisfy the Ohm's law in differential form,

$$
\vec{j}=\rho^{-1}(\vec{E}+\vec{v} \times \vec{B}),
$$

where $\vec{v}$ denotes the velocity of the plate; the electric field caused by the accumulated charges $\vec{E}$ must satisfy the circulation theorem,

$$
\oint \vec{E} \cdot \vec{d} l=0,
$$

where integration loop can be arbitrary. To close the system of equations we need to satisfy, we integrate Eq. 39 either over a closed loop entirely inside or entirely outside the circular region then we obtain zero, because for such loops $\oint \vec{v} \times \vec{B} \cdot \overrightarrow{d l}=0$. From this we conclude that for such integration loops,

$$
\oint \vec{j} \cdot \overrightarrow{d l}=0 .
$$

Note that the electric field $\vec{E}_{\text {pol }}$ of a polarised cylinder satisfies Eq. 40, but we must also satisfy

Eqns. $(38,39)$. We will look for such a solution in the form of a superposition

$$
\vec{j}=\rho^{-1}\left(\vec{E}_{\mathrm{pol}}+\vec{v} \times \vec{B}\right) .
$$

First we need to find an expression for the field $\vec{E}_{\text {pol }}$. To that end, we can consider the electric field produced by an infinite homogeneously charged cylinder of radius $R$ and volume charge density $q$. From Gauss's law, we can conclude that inside and outside the cylinder the electric field is

$$
\vec{E}_{+}(\vec{r})= \begin{cases}\frac{1}{2 \varepsilon_{0}} q \vec{r} & \text { if } r \leq R, \\ \frac{1}{2 \varepsilon_{0}} q \frac{R^{2}}{r^{2}} \vec{r} & \text { if } r>R .\end{cases}
$$

Now we can take another similar cylinder of charge density $-q$, displaced from the first cylinder by a small displacement vector $\vec{s}$. With the origin still

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-11.jpg?height=463&width=851&top_left_y=1260&top_left_x=133)
fig. 2

at the centre of the positively charged cylinder, the electric field of this negatively charged cylinder is written as $-\vec{E}_{+}(\vec{r}-\vec{s})$ (which works for both inside and outside). Note that in the overlapping area of the two cylinders, the charge density is zero.

We consider the limit $|\vec{s}| \rightarrow 0$ while keeping the product $q \vec{s}=-\vec{P}$ constant, which represents the volume density of the dipole moments (i.e. the polarisation), constant. In this case, the field inside can be calculated as

$$
\vec{E}_{\text {inside }}=\vec{E}_{+}(\vec{r})+\vec{E}_{-}(\vec{r})=\vec{E}_{+}(\vec{r})-\vec{E}_{+}(\vec{r}-\vec{s})=-\frac{1}{2 \varepsilon_{0}} \vec{P}
$$

which is homogeneous.
Outside, the field is given by

$$
\vec{E}_{\text {outside }}=\vec{E}_{+}(\vec{r})-\vec{E}_{+}(\vec{r}-\vec{s})=\frac{1}{2 \varepsilon_{0}} q R^{2}\left(\frac{\vec{r}}{r^{2}}-\frac{\vec{r}-\vec{s}}{|\vec{r}-\vec{s}|^{2}}\right) .
$$

Expanding the second term in the bracket up to first order $(|\vec{s}| \ll|\vec{r}|)$ :

$$
\frac{\vec{r}-\vec{s}}{|\vec{r}-\vec{s}|^{2}} \approx \frac{\vec{r}-\vec{s}}{r^{2}-2 \vec{r} \vec{s}} \approx \frac{\vec{r}-\vec{s}}{r^{2}}\left(1+2 \frac{\vec{r} \vec{s}}{r^{2}}\right) .
$$

Substituting this into the formula of $\vec{E}_{\text {outside }}$ and simplifying:

$$
\vec{E}_{\text {outside }}=\frac{1}{2 \varepsilon_{0}} R^{2} \frac{2 \vec{r}(\vec{r} \vec{P})-r^{2} \vec{P}}{r^{4}} .
$$

This is the field of an ideal two-dimensional electric dipole. From this general formula we can obtain an expression for the field along the $y$ axis:

$$
\vec{E}_{\text {outside }}=-\frac{1}{2 \varepsilon_{0}} \vec{P}\left(\frac{R}{r}\right)^{2} .
$$

The normal component of this field exhibits discontinuity $\sigma / \varepsilon$ at the boundary of the cylinder given by the surface charge density $\sigma$, which can be found again from the superposition of the two cylinders: the non-overlapping region has the shape of a crescent moon of width $s$ in the $x$ direction; this means that the width in the radial direction is $t=s \cos \varphi$, where $\varphi$ denotes the angle between the radius vector and the $x$-axis. Hence, we can find the surface charge density as $\sigma=q t=P \cos \varphi$. Due to Gauss' law, the radial electric field jumps by an amount given by the surface charge density, $\left\{E_{r}\right\}=\sigma / \varepsilon_{0}$. This corresponds to a jump in the magnitude of the current density

$$
\{j\}=\rho^{-1} \sigma / \varepsilon_{0}=\rho^{-1} \sigma P \cos \varphi
$$

which must eliminate the discontinuity due to the jump in the radial component of the Lorentz force term in Eq. (42, equal to

$$
\left\{\rho^{-1}(v \times B)_{r}\right\}=-v B \cos \varphi .
$$

The cancellation occurs when $\vec{P}=-\vec{e}_{x} v B \varepsilon_{0}$. Putting all the results together, we can conclude that inside the cylinder, the current density in the plate is homogeneous and equal to

$$
\vec{j}=\frac{1}{2} \frac{\vec{v} \times \vec{B}}{\varrho} .
$$

Outside the cylinder, along the $y$ axis, $\vec{B}=0$ so that

$$
\vec{j}=\frac{\vec{E}_{\text {outside }}}{\varrho}=-\frac{1}{2 \varepsilon_{0}} \vec{P}\left(\frac{R}{r}\right)^{2}=-\frac{1}{2} \frac{\vec{v} \times \vec{B}}{\varrho}\left(\frac{R}{r}\right)^{2} .
$$

Now we can plot the graph:

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-11.jpg?height=330&width=778&top_left_y=2421&top_left_x=1121)
fig. 3

| Grading scheme part b) | Pts |
| :--- | :--- |
| Realizing that $j$ is driven by the sum of the term $(\vec{v} \times \vec{B}) / \varrho$ and the electric field (if only one term is considered, 0 p ) | 0.5 |
| Writing the boundary condition for $j_{P}$ and for $\vec{j}$ (or equivalent) | 0.5 |
| Guessing the solution of the 2D boundary value problem (either with analogy of a polarized dielectric cylinder or with the superposition of a 2D dipole field outside and a uniform field inside) | 1.0 |
| Calculating the electric field of a 2D dipole along the symmetry axis | 1.0 |
| Finding the appropriate weight of the dipole field (i.e. dipole moment) by matching boundary conditions | 0.5 |
| Expressing $\vec{j}$ inside and outside correctly | 0.5 |
| Plotting the graph (axis are labelled correctly, $0.1+0.1$; sign changes at the rim and function jumps, 0.3, function is constant in region $[-R, R]$ 0.2, if the area below the curve could add up to zero 0.3) | 1.0 |
| Total on part b) | 5.0 |

## Part c( $\sim 2$ pts)

Method 1: integrating the force density. Only the current inside the magnetic field contributes to the force. The force acting on an infinitesimal volume element $\mathrm{d} V$ of the metal slab is given by

$$
\mathrm{d} \vec{F}=\vec{j}_{\text {inside }} \times \vec{B} \mathrm{~d} V .
$$

Since $\vec{j}_{\text {inside }}$ and $\vec{B}$ are uniform in the region of non zero $B$, and perpendicular, the integral simplifies to

$$
\vec{F}=\vec{j}_{\text {inside }} \vec{B} \int \mathrm{~d} V=\vec{j}_{\text {inside }} \times \vec{B} V=\vec{j}_{\text {inside }} \times \vec{B} \pi R^{2} \delta .
$$

Using our previous result for the current density we get

$$
\vec{F}=\frac{\pi R^{2} \delta}{2 \varrho}(\vec{v} \times \vec{B}) \times \vec{B}=-\frac{\pi R^{2} \delta}{2 \varrho} B^{2} \vec{v} .
$$

The direction of the force is opposite to the velocity of the plate, in agreement with physical intuition.

| Grading of part c) - Method 1 | Pts |
| :--- | ---: |
| Expressing the force acting on a cur- <br> rent element | 0.5 |
| integrating over the circular region | 1.0 |
| final result (it can be given only if <br> prefactor is correct) | 0.5 |
| Total on part c) | 2.0 |

Method 2: integrating the dissipated power.
Due to energy conservation, the mechanical power provided by the external force is dissipated in the plate in the form of Joule heat:

$$
F v=P_{\text {dissipated }} .
$$

The volume density of the dissipated power is $\varrho j^{2}$, so the total power of dissipation can be written as an integral over the volume:

$$
P_{\text {dissipated }}=\int_{\text {in }} \varrho j_{\text {inside }}^{2} \mathrm{~d} V+\int_{\text {out }} \varrho j_{\text {outside }}^{2} \mathrm{~d} V .
$$

The first integral simplifies due to the constant current density inside the circular region of radius $R$ :

$$
\int_{\text {in }} \varrho j_{\text {inside }}^{2} \mathrm{~d} V=\varrho j_{\text {inside }}^{2} V=\frac{1}{4 \varrho} v^{2} B^{2} \cdot \pi R^{2} \delta .
$$

In order to evaluate the second integral, let us calculate $j_{\text {outside }}^{2}$ first:

$$
j_{\text {outside }}^{2}=\frac{1}{4 \varrho^{2}} R^{4} \frac{\left|r^{2} \vec{v}-2 \vec{r}(\vec{r} \vec{v})\right|^{2}}{r^{8}} B^{2},
$$

where the absolute value squared can be simplified as

$$
\left|r^{2} \vec{v}-2 \vec{r}(\vec{r} \vec{v})\right|^{2}=r^{4} v^{2}-4 r^{2}(\vec{r} \vec{v})(\vec{r} \vec{v})+4 r^{2}(\vec{r} \vec{v})(\vec{r} \vec{v})=r^{4} v^{2}
$$

so the quantity $j_{\text {outside }}^{2}$ depends on the distance $r$ only (and not on the polar angle):

$$
j_{\text {outside }}^{2}=\frac{1}{4 \varrho^{2}} R^{4} \frac{\left.v^{2}\right)}{r^{4}} B^{2} .
$$

Now the power dissipated outside the circular region $(r>R)$ can be written as:

$$
\int_{\text {out }} \varrho j_{\text {outside }}^{2} \mathrm{~d} V=\int_{R}^{\infty} \frac{1}{4 \varrho^{2}} R^{4} \frac{v^{2}}{r^{4}} B^{2} \cdot 2 \delta \pi r \mathrm{~d} r
$$

Let us evaluate the integral:

$$
\int_{\text {out }} \varrho j_{\text {outside }}^{2} \mathrm{~d} V=\frac{v^{2} B^{2} \pi R^{4} \delta}{2 \varrho} \int_{R}^{\infty} \frac{\mathrm{d} r}{r^{3}}=\frac{v^{2} B^{2} \pi R^{4} \delta}{2 \varrho} \frac{1}{2 R^{2}} .
$$

It is an interesting coincidence that the power dissipated inside and outside is the same. Now the total power of dissipation is known and the force can be calculated:

$$
F=\frac{P_{\text {dissipated }}}{v}=\frac{\pi R^{2} \delta}{2 \varrho} B^{2} v .
$$

| Grading of part c) - Method 2 | Pts |
| :--- | ---: |
| Expressing the force in terms of the <br> dissipated power | 0.5 |
| integrating over the circular region | 0.3 |
| integrating over the outer region | 0.7 |
| final result (it can be given only if <br> prefactor is correct) | 0.5 |
| Total on part c) | 2.0 |

An incorrect method of obtaining the correct answer. The correct solution described above can be carried out with minor modifications when using the reference frame of the plate, where the circular region of the magnetic field moves with velocity $-\vec{v}$.

The only difference is that the Lorentz force $e \vec{v} \times \vec{B}$ acting on the charge carriers in the cylinder frame is now replaced by the Coulomb force $e \vec{E}_{B}$, where $\vec{E}_{B}=\vec{v} \times \vec{B}$ is the electric field resulting now from the Lorentz transformation.

What we need to notice is that there is no electric field outside of the cylinder ( $r>R$ ) at large distances in the $z$ direction from the plate. Indeed, there are clearly no fields there (neither $\vec{B}$ nor $\vec{E}$ ) in the cylinder's frame. Using the Lorentz transformation it is clear that no fields can emerge in our new frame. Meanwhile, outside the cylinder and inside the plate, there is definitely an electric field driving the current flow as derived above. The tangential-to-theplate electric field cannot be discontinuous at the surface because the electrostatic field (in the cylinder's frame) is potential. Hence, outside the cylinder and outside the plate, there is also an electric field in the neighbourhood of the plate, It is caused by the charge density formed on and in the plate, the generation of which is described in the solution of Part a). From large distances, however, these charges are seen as an electric dipole, whose field vanishes inversely proportional to the cubed distance.

A tempting but incorrect approach is trying to describe the motion of the cylinder in the plate's frame as a discontinuous stepping motion of the cylinders: at the current position of the cylinder, the magnetic flux disappears and at the same time reappears at a small distance away from its previous position. According to the Faradey's law, the disappearing flux will produce circular clockwise fieldlines of $\vec{E}$, and the reappearing flux will produce slightly displaced counterclockwise fieldlines. The corresponding fields and their superposition $\vec{E}_{s}(\vec{r})$ can be easily calculated, see below. The result turns out to be exactly the same as the field $\vec{E}_{o}(\vec{r})$ obtained above for the field inside the plate. However, the equivalence of these fields is just a coincidence (there is a good reason for this coincidence: in both cases, the field is obtained as a superposition of the fields produced by two overlapping cylinders). Furthermore, there is a fundamental difference: in reality, the field $\vec{E}_{o}(\vec{r})$ is only observed in the plate (at $z \approx 0$ ) and disappears at $z \gg R$; meanwhile, in the stepping cylinder model, the field $\vec{E}_{s}(\vec{r})$ remains the same regardless of the value of $z$.

The reason why the stepping cylinder model gives an incorrect result - producing an electric field in those places where there clearly is none - lies in the theory of relativity. A continuously moving (not stepping) cylinder obtains a surface charge, because the current density and the charge density together form a 4 -vector. There is a bound surface current on the surface of the cylinder (creating the magnetic field inside), and as the cylinder moves, the Lorentz transformation tells us that there will now also be a surface charge creating an electric field both inside and outside the cylinder. So, with a moving cylinder, the changing flux creates an electric field outside which is cancelled out by the surface charges
on the cylinder. Inside the cylinder, these two fields add up constructively.

In what follows, we analyse mathematically the model of stepping cylinders. By considering two almost overlapping circles with a short time interval $\tau$ between, it is clear that any flux change occurs on rim (see fig. 1). This changing flux gives rise to an induced electric field which makes the charge carriers move inside the plate resulting electrical currents.

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-13.jpg?height=312&width=890&top_left_y=607&top_left_x=1064)
fig. 1

Considering the red region in the figure as the initial non-zero $B$ field, and the green region as the nonzero $B$ field after time $\tau$, the yellow overlapping region corresponds to a non changing magnetic flux, while red on the right is decreasing, and green on the left is increasing. The average rate of change of $B$-field in the two regions is $\pm B / \tau$, respectively.

The induced electric field can be found as a superposition of the electric fields generated by the flux change in the two overlapping circular regions. For one circular region with increasing $B$-field in the $+z$ direction, the magnitude of the electric field can be found from Faraday's law applied for a circular $E$ field line:

$$
E_{+}(r) \cdot 2 \pi r=\frac{\mathrm{d} \Phi}{\mathrm{~d} t},
$$

where the rate of enclosed flux change is given by

$$
\frac{\mathrm{d} \Phi}{\mathrm{~d} t}= \begin{cases}\pi r^{2} \frac{B}{\tau}, & \text { if } r \leq R, \\ \pi R^{2} \frac{B}{\tau}, & \text { if } r>R .\end{cases}
$$

From here the modulus of the induced electric field can be expressed. It is convenient to write the result in the vectorial form with the help of position vector $\vec{r}$, unit vector $\vec{e}_{z}$ and Lenz's law:

$$
\vec{E}_{+}(\vec{r})= \begin{cases}\frac{1}{2} \frac{B}{\tau} \vec{r} \times \vec{e}_{z}, & \text { if } r \leq R, \\ \frac{1}{2} \frac{B}{\tau} \frac{R^{2}}{r^{2}} \vec{r} \times \vec{e}_{z}, & \text { if } r>R .\end{cases}
$$

A similar formula gives the $E$-field generated by the region of decreasing magnetic flux, we only need to change the sign and replace $\vec{r}$ with $\vec{r}-\vec{v} \tau$.

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-13.jpg?height=389&width=888&top_left_y=2366&top_left_x=1066)
fig. 2

Now take the superposition of the induced electric fields produced by the two overlapping circular regions. Between the two magnets ( $r \leq R$ ) we get

$$
\vec{E}_{\text {inside }}=\vec{E}_{+}+\vec{E}_{-}=\frac{1}{2} \frac{B}{\tau} \vec{r} \times \vec{e}_{Z}-\frac{1}{2} \frac{B}{\tau}(\vec{r}-\vec{v} \tau) \times \vec{e}_{Z}=\frac{1}{2} \vec{v} \times \vec{e}_{Z} B .
$$

Using the differential form of Ohm's law $\vec{j}=\vec{E} / \varrho$, we can conclude that the current density in the metal plate in the region $r \leq R$ is uniform,

$$
\vec{j}_{\text {inside }}=\frac{1}{2 \varrho} \vec{v} \times \vec{B},
$$

where we used that $\vec{B}=B \vec{e}_{z}$.
Similarly, in the region $r>R$ we get:

$$
\vec{E}_{\text {outside }}=\vec{E}_{+}+\vec{E}_{-}=\frac{1}{2} \frac{B}{\tau} R^{2}\left[\frac{\vec{r}}{r^{2}}-\frac{\vec{r}-\vec{v} \tau}{|\vec{r}-\vec{v} \tau|^{2}}\right] \times \vec{e}_{z} \text {. }
$$

Expanding the second term in the bracket up to first order $(|\vec{v} \tau| \ll|\vec{r}|)$ :

$$
\frac{\vec{r}-\vec{v} \tau}{|\vec{r}-\vec{v} \tau|^{2}} \approx \frac{\vec{r}-\vec{v} \tau}{r^{2}-2 \vec{r} \vec{v} \tau} \approx \frac{\vec{r}-\vec{v} \tau}{r^{2}}\left(1+2 \frac{\vec{r} \vec{v} \tau}{r^{2}}\right) .
$$

Substituting this into the formula of $\vec{E}_{\text {outside }}$ and simplifying:

$$
\vec{E}_{\text {outside }}=\frac{1}{2} B R^{2} \frac{r^{2} \vec{v}-2 \vec{r}(\vec{r} \vec{v})}{r^{4}} \times \vec{e}_{z} .
$$

Finally, the current density in the region $r>R$ is the following

$$
\vec{j}_{\text {outside }}=\frac{1}{2 \varrho} R^{2} \frac{r^{2} \vec{v}-2 \vec{r}(\vec{r} \vec{v})}{r^{4}} \times \vec{B}
$$

| Grading of incorrect approach | Pts |
| :--- | ---: |
| part a) - same as the original marking <br> scheme | 3.0 |
| If everything is done correctly - 2.0 p | 2.0 |
| part c) - same as the original marking <br> scheme | 2.0 |
| Total for incorrect approach | $\mathbf{7 . 0}$ |

Note no. 1. Although it was not asked in the problem, it is fascinating that the streamlines in the region $r>R$ are circles. To prove this statement, take a circle of radius $a$ with center located at vector $\vec{a}$ such that $\vec{a} \vec{p}=0$ (see fig. 3). The position vectors of the points located on this circle satisfy the equation

$$
|\vec{r}-\vec{a}|^{2}=a^{2},
$$

Which can be rearranged in the form

$$
2 \vec{a} \vec{r}-r^{2}=0
$$

We will show that $\vec{j}_{\text {outside }}$ is tangent to such a circle, regardless of the radius $a$.

![](https://cdn.mathpix.com/cropped/54321aaf-df50-403b-ad20-0561251f3821-14.jpg?height=437&width=556&top_left_y=2316&top_left_x=278)
fig. 3

Consider the scalar product

$$
\vec{j}_{\text {outside }}(\vec{r}-\vec{a}) \sim\left[r^{2} \vec{p}-2 \vec{r}(\vec{r} \vec{p})\right](\vec{r}-\vec{a})
$$

Opening the brackets and using the equality $\vec{a} \vec{p}=0$ we get:

$$
\vec{j}_{\text {outside }}(\vec{r}-\vec{a}) \sim\left(2 \vec{a} \vec{r}-r^{2}\right)(\vec{r} \vec{p})
$$

which equals zero.
Note no. 2: The skin effect. Finally we need to discuss the applicability limits of the solution obtained above. We have assumed that at each point on the plate, the current density is constant across the entire $z$-directional intersection of the plate. This requires the skin depth to be much greater than the thickness of the plate. The skin effect emerges due to the fact that for resistive media, the evolution of the magnetic field can be described by a diffusion equation

$$
\frac{\partial \vec{B}}{\partial t}=D \frac{\mathrm{~d}^{2} \vec{B}}{\mathrm{~d} z^{2}},
$$

where the diffusivity $D=\rho / \mu_{0}$. This means that for a very fast moving magnet, there is no time for the magnetic field to penetrate into the plate. Since any current is surrounded by a magnetic field according to Ampère's circuital law, if there is no magnetic field, there can be no current, either. Consequently, the current will flow only in a narrow boundary layer of the plate. For a diffusive process, during a characteristic time $\tau$, the penetration depth is estimated as $\sqrt{D \tau}$. With $\tau$ estimated as $R / v$, we get the condition

$$
\rho R \gg \mu_{0} v \delta^{2}
$$

which is well satisfied for any metallic plates with reasonable orders of magnitude (e.g. $\delta \sim 1 \mathrm{~mm}, R \sim 1 \mathrm{~cm}$, $v \sim 1 \mathrm{~m} / \mathrm{s}$ ).
