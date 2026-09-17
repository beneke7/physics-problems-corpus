---
id: solution-document-usapho-2001-s
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2001_S.pdf
extraction_method: cached-mmd
mapped_problems: [usapho-2001-a1, usapho-2001-a2, usapho-2001-a3, usapho-2001-a4, usapho-2001-b1, usapho-2001-b2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2001_S.pdf."
---

2001 Semi-Final Exam
Part A - Solutions

A1. Each ball starts at rest and falls through a height $H$ to its lowest point, which we will take as the zero of gravitational potential energy. Applying energy conservation, each ball reaches its lowest point with velocity

$$
v_{d}=\sqrt{2 g H} .
$$

The large ball collides elastically with the floor and the direction of its velocity reverses. Moving upward, $M$ collides elastically with $m$ moving downward. Letting $v$ be the speed of $m$ and $V$ be the speed of $M$ after the collision and taking down to be negative and up positive, momentum conservation yields

$$
M v_{d}-m v_{d}=m v+M v .
$$

Solving for $V$

$$
V=\frac{\left(M v_{d}-m v_{d}-m v\right)}{M}=v_{d}-\frac{m}{M}\left(v_{d}+v\right)
$$

Energy conservation yields: $\quad \frac{1}{2} M v_{d}{ }^{2}+\frac{1}{2} m v_{d}{ }^{2}=\frac{1}{2} M v^{2}+\frac{1}{2} m v^{2}$.
Inserting $V$ from the momentum equation.

$$
\begin{gathered}
\frac{1}{2} M v_{d}^{2}+\frac{1}{2} m v_{d}^{2}=\frac{1}{2} M\left(v_{d}-\frac{m}{M}\left(v_{d}+v\right)\right)^{2}+\frac{1}{2} m v^{2} \\
\frac{1}{2} M v_{d}^{2}+\frac{1}{2} m v_{d}^{2}=\frac{1}{2} M v_{d}^{2}-\frac{1}{2} M 2 v_{d} \frac{m}{M}\left(v_{d}+v\right)+\frac{1}{2} M \frac{m^{2}}{M^{2}}\left(v_{d}^{2}+2 v_{d} v+v^{2}\right)+\frac{1}{2} m v^{2} \\
\frac{1}{2} m v_{d}^{2}=-\frac{1}{2} 2 v_{d} m\left(v_{d}+v\right)+\frac{1}{2} \frac{m^{2}}{M}\left(v_{d}^{2}+2 v_{d} v+v^{2}\right)+\frac{1}{2} m v^{2}
\end{gathered}
$$

Multiplying by $2 \mathrm{M} / \mathrm{m}$

Regrouping terms

$$
\begin{gathered}
M v_{d}^{2}=-2 v_{d} M\left(v_{d}+v\right)+m\left(v_{d}^{2}+2 v_{d} v+v^{2}\right)+M v^{2} \\
0=(m+M) v^{2}-2 v v_{d}(M-m)+(m-3 M) v_{d}{ }^{2} .
\end{gathered}
$$

Solving the quadratic equation for $v$ yields

$$
v=\left(\frac{M-m \pm 2 M}{M+m}\right) v_{d}=\left(\frac{M-m \pm 2 M}{M+m}\right) \sqrt{2 g H} .
$$

Since we want $m$ moving upward (positive velocity), we select the plus sign.

$$
v=\left(\frac{3 M-m}{M+m}\right) \sqrt{2 g H}
$$

Let $h$ equal the maximum height of the small ball above its lowest position. At $m$ 's highest point its kinetic energy is zero and

$$
m g h=\frac{1}{2} m v^{2}=\frac{1}{2} m\left(\left(\frac{3 M-m}{M+m}\right) \sqrt{2 g H}\right)^{2}=m g H\left(\frac{9 M^{2}-6 M m+m^{2}}{M^{2}+2 M m+m^{2}}\right)
$$

The ball's height above its initial position is $\Delta h=h-H$.

$$
\begin{gathered}
\Delta h=H\left(\frac{9 M^{2}-6 M m+m^{2}}{M^{2}+2 M m+m^{2}}\right)-H=H\left(\frac{9 M^{2}-6 M m+m^{2}-M^{2}-2 M m-m^{2}}{M^{2}+2 M m+m^{2}}\right) \\
\Delta h=H\left(\frac{8 M^{2}-8 M m}{M^{2}+2 M m+m^{2}}\right)=H \frac{8 M(M-m)}{(M+m)^{2}}=H \frac{8(1-m / M)}{(1+m / M)^{2}}
\end{gathered}
$$

A2. (10) a. We will write the fields $\vec{E}_{1}, \vec{E}_{2}$. and $\vec{E}_{3}$ due to $q_{1}, q_{2}$, and $Q$, respectively, in terms of the usual unit vectors $\hat{i}$ and $\hat{j}$. See accompanying diagram.

$$
\vec{E}_{1}=-\hat{j} k \frac{q_{1}}{r_{1}^{2}}
$$

where $k=$ Coulomb's constant.

$$
\begin{gathered}
\vec{E}_{2}=-\hat{i} k \frac{q_{2}}{r_{2}^{2}} \\
\vec{E}_{3}=-(\hat{i} \cos \theta+\hat{j} \sin \theta) k \frac{Q}{\left(r_{1}^{2}+r_{2}^{2}\right)}
\end{gathered}
$$

![](https://cdn.mathpix.com/cropped/c1232a03-128d-466d-917c-0fa736eb967c-2.jpg?height=258&width=695&top_left_y=956&top_left_x=1233)

Noting that $\cos \theta=\frac{r_{2}}{\sqrt{r_{1}^{2}+r_{2}^{2}}}$ and $\sin \theta=\frac{r_{1}}{\sqrt{r_{1}^{2}+r_{2}^{2}}}$, the total field becomes

$$
\vec{E}=-k\left(\frac{q_{2}}{r_{2}^{2}}+\frac{Q r_{2}}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}}\right) \hat{i}-k\left(\frac{q_{1}}{r_{1}^{2}}+\frac{Q r_{1}}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}}\right) \hat{j}
$$

(5) $b$. The field at $X$ will vanish if each component vanishes.

$$
\begin{aligned}
& \left(\frac{q_{2}}{r_{2}^{2}}+\frac{Q r_{2}}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}}\right)=0 \quad \text { or } \quad q_{2}=-\frac{Q r_{2}^{3}}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}} \\
& \left(\frac{q_{1}}{r_{1}^{2}}+\frac{Q r_{1}}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}}\right)=0 \quad \text { or } \quad q_{1}=-\frac{Q r_{1}^{3}}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}}
\end{aligned}
$$

(5) c. The electrostatic potential at X is

$$
V=k \frac{q_{1}}{r_{1}}+k \frac{q_{2}}{r_{2}}+k \frac{Q}{\left(r_{1}^{2}+r_{2}^{2}\right)^{1 / 2}}
$$

For the charges found in Part b

$$
V=-k \frac{Q r_{1}^{2}}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}}-k \frac{Q r_{2}^{2}}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}}+k \frac{Q}{\left(r_{1}^{2}+r_{2}^{2}\right)^{1 / 2}}=k \frac{Q\left(-r_{1}^{2}-r_{2}^{2}+r_{1}^{2}+r_{2}^{2}\right)}{\left(r_{1}^{2}+r_{2}^{2}\right)^{3 / 2}}=0
$$

(5) d . The total work is done by the electric force as a fourth charge $q_{4}$ is moved from infinity to the point marked X is

$$
W=-\Delta U=-q_{4} \Delta V=-q_{4}\left(V_{X}-V_{\infty}\right)=-q_{4}(0-0)=0
$$

A3 (5) a. The resultant wave is the sum of the individual waves

$$
\psi(z, t)=A \sin \left(k z_{1}-\omega t+\phi\right)+A \sin \left(k z_{2}-\omega t+\phi\right)
$$

Using the trigonometric identity provided

$$
\begin{gathered}
\psi(z, t)=A 2 \cos \left[\frac{1}{2}\left(\left(k z_{1}-\omega t+\phi\right)-\left(k z_{2}-\omega t+\phi\right)\right)\right] \sin \left[\frac{1}{2}\left(\left(k z_{1}-\omega t+\phi\right)+\left(k z_{2}-\omega t+\phi\right)\right)\right] \\
\psi\left(z_{1} t\right)=2 A \cos \left[\frac{k}{2}\left(z_{1}-z_{2}\right)\right] \sin \left[\frac{k}{2}\left(z_{1}+z_{2}\right)-\omega t+\phi\right] .
\end{gathered}
$$

(4) b. The amplitude of the resultant traveling wave is zero if

$$
\cos \left[\frac{k}{2}\left(z_{1}-z_{2}\right)\right]=0
$$

This occurs when the argument of the cosine is an odd half-integer multiple of $\pi$.

Since

$$
k=\frac{2 \pi}{\lambda}
$$

$$
\begin{aligned}
& \frac{k}{2} \Delta z=\frac{2 n+1}{2} \pi \quad \text { for } n=0,1,2, \ldots \\
& \frac{1}{2} \frac{2 \pi}{\lambda} \Delta z=\frac{2 n+1}{2} \pi . \\
& \Delta z=\left(\frac{2 n+1}{2}\right) \lambda \quad \text { for } n=0,1,2, \ldots
\end{aligned}
$$

(4) c. The amplitude of the resultant traveling wave is maximum if

$$
\cos \left[\frac{k}{2}\left(z_{1}-z_{2}\right)\right]= \pm 1 .
$$

This occurs when the argument of the cosine is an integer multiple of $\pi$.

$$
\begin{aligned}
\frac{k}{2} \Delta z=\frac{1}{2} \frac{2 \pi}{\lambda} \Delta z=n \pi & \text { for } \quad n=0,1,2, \ldots \\
\Delta z=n \lambda & \text { for }
\end{aligned}
$$

(4) d . The frequency does not change as the wave enters the new material. Letting $\lambda_{\mathrm{m}}$ be the wavelength in the material

Solving for $\lambda_{\mathrm{m}}$

$$
\begin{gathered}
\frac{v_{s q}}{\lambda}=\frac{v_{s m}}{\lambda_{m}} . \\
\lambda_{m}=\frac{v_{s m}}{v_{s o}} \lambda=\frac{1020 \mathrm{~m} / \mathrm{s}}{340 \mathrm{~m} / \mathrm{s}} \lambda=3 \lambda
\end{gathered}
$$

(8) $e$. The reflected sound intensity will be a minimum when the condition specified in part (b) is met. $\Delta z$ is twice the thickness (up and down) of the coating material and $\lambda$ is the wavelength in the material.

$$
\begin{gathered}
2 t=\left(\frac{2 n+1}{2}\right) \lambda_{m} \quad \text { for } \quad n=0,1,2, \ldots \\
2 t=\left(\frac{2 n+1}{2}\right) \frac{v_{s m}}{f}
\end{gathered}
$$

or

$$
f=\left(\frac{2 n+1}{2}\right) \frac{v_{s m}^{\prime}}{2 t}=\left(\frac{2 n+1}{2}\right) \frac{1020 \mathrm{~m} / \mathrm{s}}{2(0.200 \mathrm{~m})}=(2 n-1) 1275 \mathrm{~Hz}
$$

Inserting the integers into the above equation, we have

$$
f=1275 \mathrm{~Hz}, 3825 \mathrm{~Hz}, 6375 \mathrm{~Hz}, 8925 \mathrm{~Hz}
$$

A4. ( 25 points) The sun's radius is $R_{\mathrm{S}}=6.96 \times 10^{8} \mathrm{~m}$ and its surface temperature is $T=5.80 \times 10^{3} \mathrm{~K}$. The sun-Earth distance is $R_{\mathrm{FS}}=1.50 \times 10^{11} \mathrm{~m}$. Each set of reactions release 2 neutrinos and thermal energy $Q=26.2 \mathrm{MeV}=26.2 \mathrm{MeV}\left(1.6 \times 10^{-13} \mathrm{~J} / \mathrm{MeV}\right)=4.192 \times 10^{-12} \mathrm{~J}$. The energy/neutrino ratio is $2.096 \times 10^{-12} \mathrm{~J} / \mathrm{v}$ For a perfect absorber emitter, $e=1$.

The power radiated by the sun is $P=e \sigma A T^{4}=e \sigma\left(4 \pi R_{S}^{2}\right) T^{4}$.
The solar intensity reaching the Earth is

$$
I=\frac{P}{A_{E S}}=\frac{e \sigma 4 \pi R_{S}^{2} T^{4}}{4 \pi R_{E S}^{2}}=\frac{(1)\left(5.67 \times 10^{-8} \mathrm{~J} /\left(\mathrm{s} \cdot \mathrm{~m}^{2} \cdot K^{4}\right)\right)\left(6.96 \times 10^{8} \mathrm{~m}\right)^{2}(5800 \mathrm{~K})^{4}}{\left(1.50 \times 10^{11} \mathrm{~m}\right)^{2}}=1.38 \times 10^{3} \frac{\mathrm{~J}}{\mathrm{~s} \cdot \mathrm{~m}^{2}}
$$

To find the neutrino intensity $f_{\mathrm{v}}$, divide the solar intensity $I$ by the energy/neutrino ratio.

$$
l_{v}=\frac{l}{Q / v}=\frac{1380 \mathrm{~J} /\left(\mathrm{s} \cdot \mathrm{~m}^{2}\right)}{2.096 \times 10^{-12} \mathrm{~J} / v}=6.59 \times 10^{14} \mathrm{~s}^{-1} \mathrm{~m}^{-2}
$$

The neutrino intensity is also equal to their velocity $c$ times their number density $N / V . I_{v}=c N / V$.
Solving for $N, \quad N=\frac{l_{v} V}{c}=\frac{\left(6.59 \times 10^{14} \mathrm{~s}^{-1} \mathrm{~m}^{-2}\right)\left(8.00 \times 10^{-2} \mathrm{~m}^{3}\right)}{3.0 \times 10^{8} \mathrm{~m} / \mathrm{s}}=1.76 \times 10^{5}$

![](https://cdn.mathpix.com/cropped/c1232a03-128d-466d-917c-0fa736eb967c-5.jpg?height=482&width=800&top_left_y=81&top_left_x=212)
2001 Semi-Final Exam
Part B - Solutions

B1. a. (5) Using Gauss's Law the field is $E=k \frac{Q_{\text {enc }}}{r^{2}} \quad$ where $k$ is Coulomb's constant and $Q_{\text {enc }}$ is the total charge enclosed by a Gaussian sphere of radius $r$. Since $b>r>a, Q_{\text {enc }}=+Q$. The field direction is radially outward and

$$
\vec{E}=k \frac{Q}{r^{2}} \text { radially outward }
$$

b. (5) The total potential anywhere in the region $b \geq r \geq a$ is

$$
V=k \frac{(-Q)}{b}+k \frac{Q}{r}
$$

where the first term is due to the outer sphere and the second term to the inner sphere. finding the difference between $V$ at $r=a$ and $V$ at $r=b$,

$$
V=\left(k \frac{(-Q)}{b}+k \frac{Q}{a}\right)-\left(k \frac{(-Q)}{b}+k \frac{Q}{b}\right)=k Q\left(\frac{1}{a}-\frac{1}{b}\right)
$$

c. (5) The capacitance is defined

Inserting equation (B1-1)
d. (5) The work done in charging the capacitor to charge $Q$ and voltage $V$ is $W=\frac{1}{2} Q V$. This is equal to the stored energy

$$
U=\frac{1}{2} Q V=\frac{1}{2} \frac{Q^{2}}{C}=\frac{k(b-a)}{2 a b} Q^{2}
$$

e. (10) Since the capacitor has been disconnected from the battery without discharging the charge on the shells is still $Q$. Using the subscript K to denote quantities with the dielectric inserted, $Q_{K}=Q$.
In $E, V$, and $C$

$$
k=\frac{1}{4 \pi \varepsilon_{o}} \rightarrow \frac{1}{4 \pi K \varepsilon_{o}}=\frac{k}{K}
$$

Therefore

$$
C=\frac{Q=\frac{Q}{V} .}{k Q\left(\frac{1}{a}-\frac{1}{b}\right)}=\frac{a b}{k(b-a)}
$$

For the stored energy

$$
U_{K}=\frac{1}{2} Q_{K} V_{K}=\frac{1}{2} Q \frac{V}{K}=\frac{U}{K}
$$

f. (5) The magnitude of the field at $b>r>a$ is $E_{K}=\frac{E}{K}=k \frac{(Q / K)}{r^{2}}$. Using Gauss's Law, the total charge enclosed by a Gaussian sphere of radius $r$ is $Q_{\text {enc }}=Q / K$. This charge includes the charge on the conducting shell $+Q$ and the charge on the inner surface of the dielectric $Q_{0}$.

$$
\begin{gathered}
Q_{\text {enc }}=Q / K=+Q+Q_{D} \\
Q_{D}=-\frac{Q(K-1)}{K}
\end{gathered}
$$

Solving for

$$
\begin{aligned}
& V_{K}=V \\
& E_{K}=E
\end{aligned}
$$

g. (10) Since the capacitor is left connected to the battery

Since $V$ is unchanged so is $E$.
The capacitance is independent of whether or not the battery was connected.

$$
\begin{array}{r}
y \text { was connected. } \quad C K=K C \\
Q_{K}=C_{K} V_{K}=K C V=K Q \\
U_{K}=\frac{1}{2} Q_{K} V_{K}=\frac{1}{2} K Q V=K U
\end{array}
$$

Additional charge flows onto the capacitor
The energy stored is
a Gaussian sphere with radius $r$,
Applying Gauss's Law to find the total charge enclosed by a Gaussian sphere with radius $r$,
Solving for

$$
\begin{gathered}
Q_{e n c}=Q=Q_{K}+Q_{D}=K Q+Q_{D} \\
Q_{D}=-Q(K-1)
\end{gathered}
$$

h. (5) The two halves can be considered capacitors in parallel. Each has half the capacitance it would have if it were whole. Therefore $\quad C=C_{1}+C_{2}=\frac{1}{2} \frac{K_{1} a b}{k(b-a)}+\frac{1}{2} \frac{K_{2} a b}{k(b-a)}=\frac{1}{2} \frac{\left(K_{1}+K_{2}\right) a b}{k(b-a)}$

B2. a. (5) The magnetic force is

$$
\vec{F}=q \vec{v} \times \vec{B} .
$$

Inserting the expressions for the velocity and magnetic field and taking the cross product.

$$
\begin{gathered}
\vec{F}=q\left(v_{r} \hat{u}_{r}+r \omega \hat{u}_{\theta}\right) \times B_{o} \hat{u}_{z}=q B_{o}\left(v_{r} \hat{u}_{r} \times \hat{u}_{z}+r \omega \hat{u}_{\theta} \times \hat{u}_{z}\right) \\
\vec{F}=q B_{o}\left(r \omega \hat{u}_{r}-v_{r} \hat{u}_{\theta}\right)
\end{gathered}
$$

b. (5) At any instant the displacement is in the direction of the velocity while the force is perpendicular to it. Therefore

$$
W=0
$$

Or

$$
d W=\vec{F} \cdot d \vec{l}=\vec{F} \cdot \vec{v} d t=q(\vec{v} \times \vec{B}) \cdot \vec{v} d t=0
$$

c. (8) The magnetic force does no work. The other force has an associated potential energy. Using the work-energy theorem which reduces to conservation of mechanical energy,

$$
U_{o}+K_{o}=U+K
$$

Since the particle is initially at rest. its initial kinetic energy is zero. $K_{o}=0$
Substituting the energy terms

$$
-\frac{k}{r_{o}^{2}}=\frac{1}{2} m v^{2}-\frac{k}{r^{2}}
$$

Where

$$
v^{2}=\left(v_{r} \hat{u}_{r}+r \omega \hat{u}_{\theta}\right) \cdot\left(v_{r} \hat{u}_{r}+r \omega \hat{u}_{\theta}\right)=v_{r}^{2}+r^{2} \omega^{2}
$$

Combining the last two equations

$$
-\frac{k}{r_{o}^{2}}=-\frac{k}{r^{2}}+\frac{1}{2} m\left(w_{r}^{2}+r^{2} \omega^{2}\right)
$$

d. (7) The torque about the $z$-axis is $\vec{\tau}=\vec{r} \times \vec{F}=r \hat{u}, \times \vec{F}$. The other force $\vec{F}=-\frac{2 k}{r^{3}} \hat{u}_{r}$ contributes no torque, since $\hat{u}_{r} \times \hat{u}_{r}=0$. Therefore the net torque is due to the magnetic force

$$
\vec{\tau}=r \hat{u}_{r} \times q B_{o}\left(r \omega \hat{u}_{r}-v_{r} \hat{u}_{\theta}\right)=-q B_{o} r v_{r} \hat{u}_{z}
$$

e. (5) The net torque is equal to the time rate of change of angular momentum. The radial component of the velocity $v_{r}$ is equal to the time rate of change of $r$.

$$
\begin{aligned}
& \frac{d \vec{L}}{d t}=\vec{\tau}=-q B_{o} r v_{r} \hat{u}_{z}=-q B_{o} r \frac{d r}{d t} \hat{u}_{z}=-q B_{o} \frac{1}{2} \frac{d r^{2}}{d t} \hat{u}_{z} \\
& \frac{d}{d t}\left(\vec{L}+q B_{o} \frac{1}{2} r^{2} \hat{u}_{z}\right)=0 \\
& \vec{L}+q B_{o} \frac{1}{2} r^{2} \hat{u}_{z}=\vec{C}, \\
& \vec{L}=\vec{C}-q B_{o} \frac{1}{2} r^{2} \hat{u}_{z}
\end{aligned} .
$$

Or
where $\vec{C}$ is a constant vector.
Dropping the vector notation since all motion occurs in the $x y$-plane,

$$
L=C-q B_{0} \frac{1}{2} r^{2}
$$

f. (5) For a particle the magnitude of the angular momentum about the $z$-axis can be written

Combining the last two equations
Or

$$
\begin{gathered}
L=m r^{2} \omega \\
m r^{2} \omega=C-q B_{o} \frac{1}{2} r^{2} \\
m r^{2} \omega+q B_{o} \frac{1}{2} r^{2}=C
\end{gathered}
$$

The constant $C$ can be evaluated in terms of the initial conditions

$$
m r^{2} \omega+q B_{o} \frac{1}{2} r^{2}=m r_{o}^{2} \omega_{o}+q B_{o} \frac{1}{2} r_{o}^{2}
$$

since the particle is initially at rest $\omega_{o}=0$ and

Solving for $\omega$, we have

$$
\begin{gathered}
m r^{2} \omega+q B_{o} \frac{1}{2} r^{2}=q B_{o} \frac{1}{2} r_{o}^{2} \\
m r^{2} \omega=q B_{o} \frac{1}{2}\left(r_{o}^{2}-r^{2}\right) \\
\omega=\frac{q B_{o}}{2 m}\left(\frac{r_{o}^{2}}{r^{2}}-1\right)
\end{gathered}
$$

g. (5) At $r_{\text {min }}, v_{T}=0$, Equation (B2-1) becomes

$$
-\frac{k}{r_{a}^{2}}=-\frac{k}{r_{\min }^{2}}+\frac{1}{2} m r_{\min }^{2} \omega^{2}
$$

Bring the other k term to the left and substituting equation (B2-2) at $r_{\text {min }}$

$$
\frac{k}{r_{\min }^{2}}-\frac{k}{r_{o}^{2}}=\frac{1}{2} m r_{\min }^{2}\left(\frac{q B_{o}}{2 m}\left(\frac{r_{o}^{2}}{r_{\min }^{2}}-1\right)\right)^{2}
$$

or multiplying by $r_{\text {min }}{ }^{2} r_{o}{ }^{2}, \quad k\left(r_{o}{ }^{2}-r_{\text {min }}{ }^{2}\right)=\frac{r_{o}{ }^{2} q^{2} B_{o}{ }^{2}}{8 m}\left(r_{o}{ }^{2}-r_{\text {min }}{ }^{2}\right)^{2}$.
Canceling the common factor $\quad k=\frac{r_{0}{ }^{2} q^{2} B_{o}{ }^{2}}{8 m}\left(r_{o}{ }^{2}-r_{\min }{ }^{2}\right)$
and solving for

$$
r_{\min }^{2}=r_{0}^{2}-\frac{8 k m}{q^{2} B_{0}^{2} r_{0}^{2}}
$$

h. (5) The particle will not reach the origin if $r_{\mathrm{min}}{ }^{2}>0$. From the preceding expression, this occurs when
or solving for

$$
r_{Q}^{2}>\frac{8 k m}{q^{2} B_{u}^{2} r_{a}^{2}}
$$

Thus

$$
\begin{gathered}
B_{o}^{2}>\frac{8 k m}{q^{2} r_{o}^{4}} . \\
\left|B_{o}\right|>\frac{1}{r_{o}^{2}} \sqrt{\frac{8 k m}{q^{2}}}
\end{gathered}
$$

i. (5) Evaluating equation (B2-2)
at $r=r_{0}$

$$
\omega_{o}=\frac{q B_{o}}{2 m}\left(\frac{r_{o}^{2}}{r_{o}^{2}}-1\right)=0
$$

at $r=r_{\text {min }}$

$$
\omega=\frac{q B_{v}}{2 m}\left(\frac{r_{0}^{2}}{r_{\min }^{2}}-1\right)
$$

combining with equation $(\mathrm{B} 2-3) \omega=\frac{q B_{0}}{2 m}\left(\frac{r_{0}{ }^{2}}{r_{0}{ }^{2}-\frac{8 k m}{q^{2} B_{0}{ }^{2} r_{0}{ }^{2}}}-1\right)=\frac{q B_{0}}{2 m}\left(\frac{1}{1-\frac{8 k m}{q^{2} B_{0}{ }^{2} r_{0}{ }^{4}}}-1\right)$.
For large $B_{0}, \frac{8 k m}{q^{2} B_{o}{ }^{2} r_{o}{ }^{4}}$ is small. Using the binomial expansion

$$
\omega=\frac{q B_{o}}{2 m}\left(1+\frac{8 k m}{q^{2} B_{o}^{2} r_{o}^{4}}-1\right)=\frac{4 k}{q B_{o} r_{o}^{4}}
$$
