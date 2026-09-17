---
id: izho-2023-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2023-t-q3
solution_type: official
source_document: solution-document-izho-2023-t-s
source_pdf: cache/phoxiv/izho/2023_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2023_T_S.pdf."
---

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
