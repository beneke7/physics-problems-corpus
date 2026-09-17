---
id: solution-document-usapho-2004-s
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2004_S.pdf
extraction_method: cached-mmd
mapped_problems: [usapho-2004-a1, usapho-2004-a2, usapho-2004-a3, usapho-2004-a4, usapho-2004-b1, usapho-2004-b2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2004_S.pdf."
---

## |  |  |
| ---: | :--- |
| AfPT | UnITED ST |
| AIP | 2004 |

## 2004 Semi-Final Exam <br> Part A - Solutions

A1. a. At the instant the switch is closed, there is no charge on the capacitor and no voltage across it. Applying Kirchhoff's junction rule Applying Kirchhoff's loop rule to the right loop

$$
I_{111}=I_{20}+I_{30} .
$$

Solving for $f_{30}$ and then $I_{10}$.

$$
t_{30}=1.5 t_{30} \quad t_{10}=1.5 t_{31}+t_{30}=2.5 t_{30}
$$

Applying Kirchhoff's loop rule to the left loop

$$
\begin{gathered}
0=6.00 \mathrm{~V}-(20.0 \Omega) I_{30}-(10.0 \Omega) I_{10}=6.00 \mathrm{~V}-(20.0 \Omega)\left(1.5 H_{30}\right)-(10.0 \Omega)\left(2.5 t_{30}\right) \\
0=6.00 \mathrm{~V}-(30.0 \Omega) t_{30}-(25.0 \Omega) t_{30}=6.00 \mathrm{~V}-(55.0 \Omega) H_{30}
\end{gathered}
$$

Solving for the currents $\quad l_{30}=\frac{6.00 \mathrm{~V}}{550 \Omega}=0.109 \mathrm{~A} . \quad l_{20}=1.5(0.109 \mathrm{~A})=0.104 \mathrm{~A}$ and

$$
I_{10}=2.5(0.109 \mathrm{~A})=0.273 \mathrm{~A}
$$

## (A solution using parallel and series resister combinations is equally valid.)

b. When the switch has been closed for a very long time, the capacitors are fully charged. Current no longer flows in the capacitor branch and

$$
I_{41}=0
$$

Applying Kitchhoff's loop rule to the left loop

$$
\begin{gathered}
0-6.00 \mathrm{~V}-(20.0 \Omega) t_{10}-(10.0 \Omega) t_{11}=6.00 \mathrm{~V}-(30.0 \Omega) t_{10} \\
t_{30}=t_{10}=\frac{6.00 \mathrm{~V}}{30.0 \Omega}=0.200 \mathrm{~A}
\end{gathered}
$$

c. The two capacitors are in series. Both have the same charge. The equivalent capacitance is
or

$$
\begin{gathered}
\frac{1}{C_{m}}=\frac{1}{C_{2}}+\frac{1}{C_{4}}=\frac{1}{2.00 \mu \mathrm{~F}}+\frac{1}{4.00 \mu \mathrm{~F}}=\frac{3}{4.00 \mu \mathrm{~F}} \\
C_{C_{9}}=1.33 \mu \mathrm{~F}
\end{gathered}
$$

The voltage across the equivalent capacitance is the same as that across the $20.0 \Omega 2$ resistor.

So the charge

$$
\begin{aligned}
& V_{r}=V_{10}=(20.0 \Omega) I_{20}=(20.0 \Omega)(0.200 \mathrm{~A})=4.00 \mathrm{~V} \\
& Q_{2}=Q_{4}=Q_{r q}=C_{e q} V_{.}=(1.33 \mu \mathrm{~F})(4.00 \mathrm{~V})=5.33 \mu \mathrm{C}
\end{aligned}
$$

A2. First find the forces on the balloon. The weight force is

$$
W=m g=\rho_{i} V g
$$

where $\rho_{b}=1.20 \mathrm{~kg} / \mathrm{m}^{3}$ is the density of the balloon. $V$ is its volume. and $g$ is the gravitational field strength. The buoyant force is

$$
B=\rho_{n} V_{R}
$$

![](https://cdn.mathpix.com/cropped/24a81c85-c0c8-47f9-a5fa-d7d04220c7a3-1.jpg?height=422&width=271&top_left_y=2056&top_left_x=1607)
where $\rho_{a}$ is the density of air. Since it is assumed to be a linear function of height, $\rho_{u}=\rho_{0}-\alpha h$ where $\rho_{0}=1.29 \mathrm{~kg} / \mathrm{m}^{3}$ is the density of air at sea level and $h$ is the height above sea level. The forces are in equilibrium at $h_{0}=1.00 \mathrm{~km}=1.00 \times 10^{\circ} \mathrm{m}$.

$$
\begin{aligned}
& \rho_{b} V g=\rho_{a} V_{g}-\left(\rho_{0}-\alpha h_{0}\right) V g . \\
\alpha= & \frac{\rho_{0}}{h_{0}}=\frac{1.29 \mathrm{~kg} / \mathrm{m}^{2}-1.20 \mathrm{~kg} / \mathrm{m}^{5}}{1000 \mathrm{~m}}=9 \times 10^{-5} \mathrm{~kg} / \mathrm{m}^{4}
\end{aligned}
$$

Solving this for $\alpha$.
a. After being blown to a height of $h=1.10 \mathrm{~km}$, the forces are no longer balanced.

$$
\begin{aligned}
& m a-B-W \\
\rho_{b} V_{a}= & \left(\rho_{11}-\alpha h\right) V_{g}-\rho_{b} V_{g} .
\end{aligned}
$$

Substituting (A2 - I) into the above equation

$$
\rho_{b} V a=\left(\rho_{0}-\alpha h_{1}\right) V g-\left(\rho_{0}-\omega h_{0}\right) V g=-\alpha\left(h-h_{0}\right) V g=-\alpha_{i} \Delta h V_{g} .
$$

Solving for the acceleration $a$

$$
a=\sqrt{ }\left(\frac{\alpha_{g}}{\rho_{i}}\right) \Delta /
$$

The acceleration is proportional to the displacement. The motion is simple harmonic motion
with

$$
\omega=\sqrt{\left(\frac{\alpha g}{\rho_{b}}\right)}=\sqrt{\frac{\left(9 \times 10^{-5} \mathrm{~kg} / \mathrm{m}^{4}\right)\left(9.8 \mathrm{~m} / \mathrm{s}^{2}\right)}{1.20 \mathrm{~kg} / \mathrm{m}^{2}}}=0.0271 \mathrm{rad} / \mathrm{s} .
$$

The balloon is released at rest at amplitude $A=h-h_{0}=100 \mathrm{~m}$ and first passes through its equilibrium position at a time equal to one fourth its period.

$$
t=\frac{T}{4}=\frac{2 \pi}{4 \omega}=\frac{\pi}{2(0.0271 \mathrm{rad} / \mathrm{s})}=57.9 \mathrm{~s}
$$

b. The balloon passes through its equilibrium position with maximum velocity

$$
v=\omega A=(0.0271 \mathrm{rad} / \mathrm{s})(100 \mathrm{~m})-2.71 \mathrm{~m} / \mathrm{s}
$$

A3. a. In order for minimum sound intensity to be heard in the region along the $x$-axis with $x> x_{0}$. the distance between sources must be an odd half-integer multiple of the wavelength $i$.

$$
2 x_{n}=\left(\begin{array}{ll}
2 n & 1
\end{array}\right) \frac{\lambda}{2}=(2 n-1) \frac{y}{2 f} \quad n=1,2,3, \ldots
$$

where $v=340 \mathrm{~m} / \mathrm{s}$, the velocity of sound in air, and $175 \mathrm{~Hz} \leq f \leq 625 \mathrm{~Hz}$, the frequency of the sound that produces minimum intensity, Solving for the frequency

$$
f_{n}=(2 n-1) \frac{1^{\prime}}{4 x_{0}}=(2 n-1) \frac{(340 \mathrm{~m} / \mathrm{s})}{4(0.85 \mathrm{~m})}-(2 n-1)(100 \mathrm{~Hz})
$$

The frequencies in the possible range are

$$
f_{2}=300 \mathrm{~Hz} \quad \text { and } \quad f_{1}=500 \mathrm{~Hz}
$$

b. In the region between the sources, source $S$, emits a wave $\Psi_{1}$ that travels to the left and source $S_{2}$ emits a wave $\Psi_{2}^{\prime}$ that travels to the right.

$$
\begin{array}{ccc}
\Psi_{1}=A \sin \left(\omega t+k\left(x-x_{0}\right)\right) & \Psi_{2}-A \sin \left(\omega t-k\left(x+x_{0}\right)\right) \\
k=\frac{2 \pi}{\lambda} & \text { and } & \omega=2 \pi f .
\end{array}
$$

where

Adding the waves to determine the resultant wave

$$
\begin{gathered}
\Psi=\Psi_{1}+\Psi_{2}=A \sin \left(\omega t+k\left(x-x_{0}\right)\right)+A \sin \left(\omega t-k\left(x+x_{0}\right)\right) \\
\Psi^{\prime}=A \sin \left(\omega t-k x_{0}\right) \cos (k x)+A \cos \left(\omega t-k x_{0}\right) \sin (k x) \\
+A \sin \left(\omega t-k x_{0}\right) \cos (k x)-A \cos \left(\omega t-k x_{0}\right) \sin (k x) \\
\Psi=2 A \cos (k x) \sin \left(\omega t-k x_{0}\right)
\end{gathered}
$$

Note: This equation has the correct $x$-dependence. The waves travel the same distance to reach $x=0$. This point is an interference maximum. Any expression with

$$
\Psi=2 A \cos (k x) \sin \left(\omega r-k x_{0}+\delta\right)
$$

where $\delta$ is a phase constant is valid.
c. Minimum sound intensity occurs when $\cos (k x)=0$. i.e., $k x= \pm(2 n+1) \pi / 2$. Solving for $x$,

$$
x=+\frac{(2 n+1) \pi}{2 k}=+\frac{(2 n+1) \pi}{2(2 \pi / \lambda)}=+\frac{(2 n+1) \lambda}{4}=+\frac{(2 n+1) v}{4 f}
$$

For $f=300 \mathrm{~Hz}: \quad x= \pm \frac{(2 n+1)(340 \mathrm{~m} / \mathrm{s})}{4(300 \mathrm{~Hz})}= \pm(2 n+1)(0.283 \mathrm{~m})= \pm 0.283 \mathrm{~m} \quad$ with $n=0$.
For $f=500 \mathrm{~Hz}: \quad x= \pm \frac{(2 n+1)(340 \mathrm{~m} / \mathrm{s})}{4(500 \mathrm{~Hz})}= \pm(2 n+1)(0.170 \mathrm{~m})= \pm 0.170 \mathrm{~m}, \pm 0.510 \mathrm{~m}$
with $n=0,1$.

A4. Selecting the $y$-axis perpendicular to the ramp and the $x$-axis parallel to the ramp in the upward direction, the components of the gravitational acceleration are

$$
a_{1}=-g \sin \theta \quad \text { and } \quad a_{1}=-g \cos \theta
$$

where $\theta$ is the angle the ramp makes with the horizontal. The components of the initial velocity are

$$
v_{n_{1}}=v_{o} \cos \theta \quad \text { and } \quad v_{0_{r}}=-r_{11} \sin \theta
$$

i. At each collision with the plane, the $x$-component of velocity does not change while the $y$ component reverses sign. At the start of the first bounce $v_{0:}=+v_{0} \sin \theta$.

The $y$-displacement is given by

$$
v=v_{0}+v_{0 y} t+\frac{1}{2} a_{v} t^{2}
$$

Let $v_{11}=0$ at $t=0$, the start of the first bounce. Let $t=t_{1}$. the time when the ball returns to the ramp $y=0$, at the end of the first bounce. Substituting these values into (A4-1)

$$
0=v_{1,} \sin \theta t_{1}-\frac{1}{2} g \cos \theta t_{1}^{2}
$$

Solving for $t_{1}$ and eliminating the initial time $t_{1}=0, \quad t_{1}=\frac{2 v_{0} \sin \theta}{g \cos \theta}=\frac{2 v_{i}}{g} \tan \theta$.
The velocity at the end of the first bounce, as the ball is about to impact the ramp again, is

$$
v_{v}=v_{0_{r}}+a_{s} t=v_{01} \sin \theta-g \cos \theta h=v_{11} \sin \theta-g \cos \theta \frac{2 v_{0} \sin \theta}{g \cos \theta}=-v_{0} \sin \theta .
$$

Upon hitting the ramp the velocity reverses to become

$$
v_{\mathrm{ne}}=+v_{11} \sin \theta
$$

Each bounce has the same $v_{0}$; and $a_{3}$, so each bounce takes the same amount of time $t_{1}$.
Therefore the time for $N$ bounces is

$$
t_{\mathrm{N}}=N t=N \frac{2 v_{0} \sin \theta}{g \cos \theta}=\frac{2 N v_{\mathrm{u}}}{g} \tan \theta
$$

There is no impulse in the $x$-direction, so the $x$-equations hold continuously. At the end of the Nith bounce, the ball's velocity is perpendicular to the ramp, $v_{\mathrm{c}}=0$. Substituting this into the equation for the $x$-component of velocity.

$$
\begin{gathered}
v_{\mathrm{s}}=v_{v_{\mathrm{s}}}+a_{\mathrm{s}} t \\
0=v_{0} \cos \theta-g \sin \theta t_{N}=v_{0} \cos \theta-g \sin \theta\left(N \frac{2 v_{0} \sin \theta}{g \cos \theta}\right)
\end{gathered}
$$

Dividing by $v_{0} \cos \theta$,

$$
0=1-\frac{2 N \sin ^{2} \theta}{\cos ^{2} \theta}-1-2 N \tan ^{2} \theta
$$

Solving for $\tan \theta$

$$
\tan \theta=\frac{1}{\sqrt{2 N}}
$$

b. The $x$-displacement is given by $\quad x=v_{\ldots} t+\frac{1}{2} a_{r} t^{2}$.

The maximum displacement occurs at the end of the Nith bounce, time $t_{N}$. Combining (A4-2) and (A4-3)

$$
t_{N}=\frac{2 N v_{0}}{g} \tan \theta=\frac{2 N v_{11}}{g} \frac{1}{\sqrt{2 N}}=\frac{v_{11}}{g} \sqrt{2 N}
$$

Substituting this into the $x$-equation.

$$
x=(v \cos \theta)\left(\frac{v_{0}}{g} \sqrt{2 N}\right)+\frac{1}{2}(-g \sin \theta)\left(\frac{v_{0}}{g} \sqrt{2 N}\right)^{2}=\frac{v_{0}^{2}}{g} \cos \theta \sqrt{2 N}-\frac{v_{0}^{2}}{2 g} 2 N \sin \theta
$$

Using the triangle to the right to determine $\cos \theta$ and $\sin \theta$

$$
\begin{gathered}
\cos \theta=\sqrt{\frac{2 N}{2 N+1}} \quad \sin \theta=\frac{1}{\sqrt{2 N-1}} \\
x=\frac{v_{0}^{2}}{g} \sqrt{\frac{2 N}{2 N+1}} \sqrt{2 N}-\frac{v_{0}^{2}}{2 g} 2 N \frac{1}{\sqrt{2 N+1}}=\frac{v_{10}^{2}}{g} \frac{N}{\sqrt{2 N+1}}
\end{gathered}
$$

![](https://cdn.mathpix.com/cropped/24a81c85-c0c8-47f9-a5fa-d7d04220c7a3-4.jpg?height=271&width=572&top_left_y=1377&top_left_x=1351)

![](https://cdn.mathpix.com/cropped/24a81c85-c0c8-47f9-a5fa-d7d04220c7a3-5.jpg?height=484&width=1496&top_left_y=77&top_left_x=249)
2004 Semi-Final Exam
Part B-Solutions

B1. a. The electrostatic force causes the ecntripetal acceleration that keeps the electron in its circular orbit around the proton. Since the proton is assumed to be very massive, reduced mass effects can be neglected.

$$
m \frac{r^{2}}{r}=k \frac{e^{\prime}}{r^{2}}
$$

where $m$ is the electron mass, $e$ is the electron charge, $v$ is its orbital velocity, $r$ is its orbital radius and $k$ is Coulomb's constant. Multiplying by $r$ yields

$$
m v^{2}=k \frac{e^{2}}{r}
$$

The angular momentum of an object moving in a circle is Combining this with Bohr's postulate

$$
\begin{aligned}
& L=m v r . \\
& m v r=n h
\end{aligned}
$$

Solving this for $m v^{2}$

$$
\begin{gathered}
m v^{2}=\frac{1}{m}\left(\frac{n \hbar}{r}\right)^{2} \\
\frac{1}{m}\left(\frac{n \hbar}{r}\right)^{2}=k \frac{e^{2}}{r} \\
\frac{1}{r}=\frac{m k e^{2}}{(n \hbar)^{2}}
\end{gathered}
$$

Solving this for $\frac{1}{r}$
The total energy $E$ is the sum of the electron's kinetic and potential cnergy.

Which is

$$
\begin{gathered}
E_{n}=\frac{1}{2} m v^{2}-k \frac{e^{2}}{r}=-k \frac{e^{2}}{2 r}=-\frac{m\left(k e^{2}\right)^{2}}{2(n h)^{2}} \\
E_{n}=-\frac{\left(9.109 \times 10^{-11}\right)\left[\left(8.99 \times 10^{2}\right)\left(1.602 \times 10^{12}\right)^{2}\right]^{2}}{2 n^{2}\left(6.63 \times 10^{-14} /(2 \pi)\right)^{2}}=\frac{2.18 \times 10^{18}}{n^{2}} \mathrm{~J} .
\end{gathered}
$$

b. i. As the electrons are accelerated through the potential difference $V$, they gained kinetic energy $e V$. The hydrogen is initially in its ground state $E_{1}$. After the collision the electron has kinetic energy $\frac{1}{2} m v_{n z}{ }^{2}$ and the atom is in state $n$ with energy $E_{\gamma^{*}}$. Applying energy conservation. we have

$$
e V+E_{1}=\frac{1}{2} m v_{e}{ }^{2}+E_{p} .
$$

The electron enters the magnetic field $B$ with velocity $w_{i,}$ perpendicular to $\vec{B}$. The force on the electron causes it to move in a circular path with radius $f_{n}$.

Solving for $m v_{n}$

Combining with (BI-I),

$$
\begin{gathered}
e v_{n} B=m \frac{v_{n}^{2}}{r_{n}} \\
m v_{n}=e B r_{\eta} \\
e V+E-\frac{\left(e B r_{n}\right)^{2}}{2 m}+E_{n}-
\end{gathered}
$$

The two furthest out spots correspond to $n=1$ and 2. The diameters of the paths are $2 r_{1}=0.09491 \mathrm{~m}$ and $2 r_{2}=0.03980 \mathrm{~m}$. The radii are $r_{1}=0.04746 \mathrm{~m}$ and $r_{2}=0.01990 \mathrm{~m}$
Writing (B1-2) for these two cases $\quad r V+E_{1}-\frac{\left(e B r_{1}\right)^{2}}{2 m}+E_{1}$
or

$$
e V=\frac{\left(e B r_{i}\right)^{2}}{2 m}
$$

and

$$
e^{\prime} V+E_{1}=\frac{\left(e B r_{2}\right)^{2}}{2 m}+E_{2}=\frac{\left(e B r_{2}\right)^{2}}{2 m}+\frac{E_{1}}{2^{2}}
$$

or

$$
\frac{\left(e B_{r_{1}}\right)^{2}}{2 m}=\frac{\left(e B_{r_{2}}\right)^{2}}{2 m}-\frac{3 E_{1}}{4}
$$

Solving for $B$

$$
B=\sqrt{\frac{3 E_{1} m}{2 e^{2}\left(r_{1}^{2}-r_{2}^{2}\right)}}=\frac{3\left(-2.18 \times 10^{-18} \mathrm{~J}\right)\left(9.109 \times 10^{-21} \mathrm{~kg}\right)}{2\left(1.602 \times 10^{14} \mathrm{C}\right)^{2}\left((0.04746 \mathrm{~m})^{2}-(0.01990 \mathrm{~m})^{2}\right)}=2.50 \times 10^{-4} \mathrm{~T}
$$

ii. Substituting into (B1-3)

$$
v=\frac{e(B r)^{2}}{2 m}=\frac{\left(1.602 \times 10^{-14} \mathrm{C}\right)\left(\left(2.50 \times 10^{-4} \mathrm{~T}\right)(0.09491 \mathrm{~m}) / 2\right)^{2}}{2\left(9.109 \times 10^{-1} \mathrm{~kg}\right)}=12.4 \mathrm{~V}
$$

iii. The electron's kinetic energy $\frac{1}{3} m v_{\text {" }}{ }^{2}$ after the collision has got to be greater than zero. Using $n$ to represent the maximum $n$ in ( $\mathrm{BI}-1$ )

$$
\left.e V>E_{n}-E_{1}=\frac{E_{1}}{n^{2}}-E_{1}=-E_{1}^{\prime} 1-\frac{1}{n^{2}}\right) .
$$

Expressing the energies in electron volts, this is $12.4 \mathrm{eV}>13.6 \mathrm{eV}\left(1-\frac{1}{n^{2}}\right)$
or

$$
\frac{13.6}{n^{2}}>1.2
$$

or

$$
13.6 / 1.2=11.3>n^{2}
$$

The maximum number of spots is 3.

B2. a. Lising 2 to represent a unit vector in the z-direction, $\dot{B}=\mu_{0} n \hat{z}$. for $r<b$. (It is not necessary to derive this result from Ampere's Law )
h.

$$
t_{i s}=\frac{1}{2 \mu_{0}} B^{2}=\frac{\mu_{0} n^{2} l^{2}}{2} .
$$

It is also possible to derive this result from

$$
\begin{aligned}
& U=\frac{1}{2} L l^{2} \\
& U=u_{u} h A
\end{aligned}
$$

If edge effects are ignored
where $h$ is the length and $A$ is the cross-sectional area of the solenoid. Combining this with

$$
L /=N \Phi=(n h)(B A)
$$

yiclds

$$
u_{B} h A=\frac{1}{2} n h B A t,
$$

or

$$
u_{n}=\frac{1}{2} n B I=\frac{1}{2} \mu_{0} n^{2} I^{2}
$$

c. The charge per unil length on the inner cylindrical shell is

$$
\lambda=+Q / h .
$$

Letting $\hat{r}$ represent a unit vector in the $r$-direction, Gauss's Law for cylindrical symmetry yields

$$
\vec{E}=+\frac{Q}{2 \pi \varepsilon_{0} h r} \hat{r}
$$

d.

$$
u_{F}=\frac{1}{2} \varepsilon_{n} E^{2}=\frac{Q^{2}}{8 \pi^{2} \varepsilon_{n} h^{2} r^{2}}
$$

c. Lise Faradays Law to find the induced electric field at the location of each charged cylinder.

$$
\hat{\oint E} \cdot \overrightarrow{l l}=-\frac{d \Phi_{i i}}{d l} .
$$

$\dot{E}$ is constant around a circular path, the cross-section of the cylinder, $\quad \dot{\rho} \vec{E} \cdot \overrightarrow{d t}=E 2 \pi r$.
The magnetic flux is

$$
\Phi_{R}=B A
$$

where $A$ is the enclosed area that has a magnetic field. Thus

$$
E 2 \pi r=-\Lambda \frac{d B}{d t}=-\Lambda \mu_{1} n \frac{d t}{d t} .
$$

Since $I$ is decreasing at a constant rate $\quad E 2 \pi r=-\lambda \mu_{n} n \frac{\Delta t}{\Delta l}$

For the inner cylinder, $r=a$ and $A=\pi a^{\prime}$, and

$$
E_{n} 2 \pi a=-\pi a^{2} \mu_{0} n \frac{\Delta V}{\Delta t} .
$$

Therefore

$$
E_{a}=-\frac{\mu_{0} \operatorname{ms}}{2} \frac{\Delta t}{\Delta t} .
$$

In order to oppose the decrease in $I, E$ is in the same direction as $I$

$$
\dot{E}_{\nu}=-\frac{\mu_{0} n a}{2} \frac{\Delta t}{\Delta t} \hat{\boldsymbol{\varphi}}
$$

For the outer cylunder, $r=c$ and $A=\pi b^{2}$, since the field $B=0$ for $r>b$
and

$$
t_{1} ; 2 \pi e=-\pi b^{2} \mu_{0} n \frac{\Delta V}{\Delta t}
$$

Therefore

$$
E_{1}=-\frac{\mu_{0} n b^{2}}{2 c} \frac{\Delta I}{\Delta t}
$$

with

$$
\dot{E}_{\mathrm{r}}=-\frac{\mu_{0} n b^{2}}{2 c} \frac{\Delta}{\Delta t} \hat{\phi}
$$

Each cylinder experiences a torque caused by the electric force.

$$
\frac{d \vec{L}}{d t}=\vec{\tau}=\vec{r} \times \vec{F}_{5}
$$

For the inner cylinder

$$
\frac{d L_{q}}{d t}=a \hat{r} \times Q\left(-\frac{\mu_{0} n a}{2} \frac{\Delta t}{\Delta t} \hat{\phi}\right)=-\frac{\mu_{0} n a^{2} Q}{2} \frac{\Delta t}{\Delta t} \hat{z} .
$$

Since $I$ decreases at a constant rate, $L$ also changes at a constant rate.

$$
\begin{gathered}
\frac{\Delta \vec{t}_{n}}{\Delta t}=-\frac{\mu_{0} n t^{2} Q}{2} \frac{(0-I)}{\Delta t}: \\
\Delta \vec{L}_{e}=\frac{1}{2} \mu_{0} n t^{2} Q \hat{z}^{2}
\end{gathered}
$$

For the outer cylinder $\frac{d \vec{L}_{1}}{d t}=\left(\hat{r} \times(-Q)\left(-\frac{\mu_{0} n b^{2}}{2 t} \frac{\Delta t}{\Delta t} \hat{\varphi}\right)=+\frac{\mu_{0} n b^{2} Q}{2} \frac{\Delta t}{\Delta t}=\right.$
and

$$
\begin{gathered}
\frac{\Delta \dot{L}_{i}}{\Delta t}=+\frac{\mu_{11} n b^{2} Q}{2} \frac{(0-1)}{\Delta t} \\
\Delta \vec{L}_{i}=\frac{1}{2} \mu_{0} n t b^{2} Q \dot{z}^{2}
\end{gathered}
$$

f. $E=0$ for $r<a$ and $B=0$ for $r>b$. Using $\vec{\pi}_{A M}$ to represent the linear momentum
density

$$
\vec{n}_{F B}=\varepsilon_{0} \vec{E} \times \vec{B}=\varepsilon_{0}\left(\frac{Q}{2 \pi \varepsilon_{11} h r}\right) \vec{r} \times\left(\mu_{0} n l\right) \vec{z}=-\frac{Q \mu_{11} n I}{2 \pi h r} \vec{\phi} \text { for } a<r<b
$$

and

$$
\vec{\pi}_{e m}=0 \text { for } r<a \text { and } b<r
$$

Using $\vec{l}_{\text {EM }}$ to represent the angular momentum density

In the region $a<r<b$,

$$
\begin{gathered}
\vec{f}_{r u}=\vec{r} \times \vec{\pi}_{E m} \\
\vec{f}_{E M}=\vec{r} \times \vec{\pi}_{E M}=(r \vec{r}) \times\left(-\frac{Q \mu_{0} n l}{2 \pi h r} \hat{\theta}\right)=-\frac{Q \mu_{0} n l}{2 \pi h_{1}} \div
\end{gathered}
$$

The angular momentum density is constant in the region $a<r<b$ and zero outside. Therefore the total angular momentum originally stored in the fields is

$$
\begin{gathered}
\vec{L}_{E \cdot d}=(\text { volume containing field }) \vec{f}_{E M} \\
\left.\vec{L}_{E n}=\left[h \pi\left(b^{2}-a^{2}\right)\right]-\frac{Q \mu_{0} n t}{2 \pi h} \div\right)=-\frac{1}{2} Q \mu_{0} n t\left(b^{2}-a^{2}\right) \hat{z}
\end{gathered}
$$

When the current is reduced to zero, this angular momentum goes to zero. Therefore the change in angular momentum is

$$
\vec{L}_{\bar{L} M}=-\frac{1}{2} Q \mu_{0} n\left(b^{2}-a^{2}\right) z
$$
