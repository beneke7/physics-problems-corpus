---
id: solution-document-usapho-2002-s
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2002_S.pdf
extraction_method: cached-mmd
mapped_problems: [usapho-2002-a1, usapho-2002-a2, usapho-2002-a4, usapho-2002-b1, usapho-2002-b2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2002_S.pdf."
---

2002 Semi-Final Exam
Part A - Solutions

A1. a. The magnitude of the magnetic field inside an ideal solenoid is $\quad B=\mu_{0} n I$ where the number of turns per unit length $n$ is the inverse of the length per turn - the diameter $d$ of the wire.

$$
n=\frac{1}{d}=\frac{1}{2 r_{1}}
$$

The total resistance of the wire used to construct the solenoid is

The current

$$
R=\rho \frac{l}{A_{1}}=\rho \frac{l}{\pi r_{1}^{2}} .
$$

Combining to find

$$
B=\mu_{o}\left(\frac{1}{2 r_{1}}\right)\left(\frac{V \pi r_{1}^{2}}{\rho l}\right)=\frac{\mu_{o} \pi V r_{1}}{2 \rho l}
$$

b. The self inductance $L$ can be found from

$$
L l=N \Phi
$$

where $N$ is the total number of turns - the length of the wire divided by the circumference of one turn

$$
N=\frac{l}{2 \pi r_{2}}
$$

and $\Phi$ is the flux through one turn

$$
\Phi=B \pi r_{2}^{2}=\mu_{0} n I \pi r_{2}^{2}=\frac{\mu_{0} \pi r_{2}^{2}}{2 r_{1}} I
$$

combining with (A1-1)

$$
L=\frac{N \Phi}{I}=\left(\frac{l}{2 \pi r_{2}}\right)\left(\frac{\mu_{0} \pi r_{2}^{2}}{2 r_{1}}\right)=\frac{\mu_{0} r_{2} l}{4 r_{1}}
$$

c. The inductive impedance is $Z_{L}=\omega L$. The total impedance of the circuit is $Z=\sqrt{R^{2}+(\omega L)^{2}}$

$$
I_{r m s}=\frac{V_{r m s}}{\sqrt{R^{2}+(\omega L)^{2}}}=\frac{V_{r m s}}{\sqrt{\left(\frac{\rho l}{\pi r_{1}^{2}}\right)^{2}+\left(\frac{2 \pi f \mu_{o} r_{2} l}{4 r_{1}}\right)^{2}}}=\frac{2 r_{1} V_{r m s}}{l \sqrt{\left(\frac{2 \rho}{\pi r_{1}}\right)^{2}+\left(\pi f \mu_{o} r_{2}\right)^{2}}}
$$

A2. a. The energy and magnitude of the momentum of a photon of frequency $f$ are:

$$
E=h f \quad p=\frac{h}{\lambda}=\frac{h f}{c}
$$

Energy is conserved. Equating the energy of the particle before the decay to the total photon energy after the decay

$$
\frac{m c^{2}}{\sqrt{1-(v / c)^{2}}}=h f+h f
$$

Momentum is conserved. Equating the momentum of the particle before the decay to the sum of the x-components of the photon momentum after the decay

$$
\frac{m v}{\sqrt{1-(v / c)^{2}}}=\frac{h f}{c} \cos \theta+\frac{h f}{c} \cos \theta
$$

Dividing (A2-2) by (A2-1) $\frac{m v}{\sqrt{1-(v / c)^{2}}} \frac{\sqrt{1-(v / c)^{2}}}{m c^{2}}=\frac{(2 h f / c) \cos \theta}{2 h f}$
Or

$$
\begin{aligned}
& \frac{v}{c^{2}}=\frac{\cos \theta}{c} \\
& v=c \cos \theta \quad \text { in the positive } x \text {-direction }
\end{aligned}
$$

b. Solving (A2-1) for $m c^{2} \quad m c^{2}=2 h f \sqrt{1-(v / c)^{2}}$ and substituting in (A2-3) $m c^{2}=2 h f \sqrt{1-(c \cos \theta / c)^{2}}=2 h f \sqrt{1-(\cos \theta)^{2}}=2 h f \sin \theta$

$$
m=\frac{2 h f}{c^{2}} \sin \theta
$$

c. In this frame, the particle has zero momentum, so the momentum of the final photons must be equal and opposite - one along the $+y$-axis, the other along the $-y$-axis. If each photon's momentum has the same magnitude, the photons must have the same frequency $f^{\prime}$.

In this frame the particles energy is $m c^{2}$. Applying energy conservation

$$
m c^{2}=2 h f^{\prime}
$$

Solving for $f^{\prime}$ and substituting in (A2-4)

$$
f^{\prime}=\frac{m c^{2}}{2 h}=\left(\frac{2 h f}{c^{2}} \sin \theta\right) \frac{c^{2}}{2 h}=f \sin \theta
$$

A3. The Planck length $\lambda_{\mathrm{P}}$, the Planck time $t_{\mathrm{P}}$, and the Planck mass $m_{\mathrm{P}}$ depend only on the Newton's gravitational constant $G$, Planck's constant $h$, and speed of light in a vacuum $c$ and no other constant. Use dimensional analysis to obtain the equations. Let
[T] represent the dimension of time
[L] represent the dimension of length
[M] represent the dimension of mass

Since $G$ has units $\mathrm{N} \cdot \mathrm{m}^{2} / \mathrm{kg}^{2}=\left(\mathrm{kg} \cdot \mathrm{m} / \mathrm{s}^{2}\right) \mathrm{m}^{2} / \mathrm{kg}^{2}=\mathrm{m}^{3} \mathrm{~kg}^{-1} \mathrm{~s}^{-2}$ its dimensions are $h$ has units $\mathrm{J} s=\left(\mathrm{kg} \cdot \mathrm{m}^{2} / \mathrm{s}^{2}\right) \mathrm{s}=\mathrm{m}^{2} \mathrm{~kg}^{1} \mathrm{~s}^{-1}$ its dimensions are $c$ has units $\mathrm{m} / \mathrm{s}=\mathrm{m}^{1} \mathrm{~s}^{-1} \quad$ its dimensions are
$[\mathrm{L}]^{3}[\mathrm{M}]^{-1}[\mathrm{~T}]^{-2}$ for $G$
$[\mathrm{L}]^{2}[\mathrm{M}]^{1}[\mathrm{~T}]^{-1}$ for $h$
$[\mathrm{L}]^{1}[\mathrm{M}]^{0}[\mathrm{~T}]^{-1}$ for $c$

Let

$$
\lambda_{\mathrm{p}}=G^{\mathrm{a}} h^{\mathrm{b}} c^{\mathrm{d}}
$$

Then analyzing the dimensions

$$
[\mathrm{L}]^{\mathrm{l}}[\mathrm{M}]^{0}[\mathrm{~T}]^{0}=[\mathrm{L}]^{3 \mathrm{a}}[\mathrm{M}]^{-\mathrm{a}}[\mathrm{~T}]^{-2 \mathrm{a}}[\mathrm{~L}]^{2 \mathrm{~b}}[\mathrm{M}]^{\mathrm{b}}[\mathrm{~T}]^{-\mathrm{b}}[\mathrm{~L}]^{\mathrm{d}}[\mathrm{M}]^{0}[\mathrm{~T}]^{-\mathrm{d}}=[\mathrm{L}]^{3 \mathrm{a}+2 \mathrm{~b}+\mathrm{d}}[\mathrm{M}]^{-\mathrm{a}+\mathrm{b}}[\mathrm{~T}]^{-2 \mathrm{a}-\mathrm{b}-\mathrm{d}}
$$

Equating exponents of $[\mathrm{L}]$

$$
1=3 a+2 b-d
$$

Equating exponents of [M]

$$
0=-a+b
$$

Equating exponents of [T]

$$
0=-2 a-b-d
$$

Solving these equations $\quad \mathrm{b}=\mathrm{a}$ and $\mathrm{d}=-3 \mathrm{a}$ then $1=3 \mathrm{a}+2 \mathrm{a}-3 \mathrm{a}=2 \mathrm{a}$
So $\mathrm{a}=1 / 2, \mathrm{~b}=1 / 2$, and $\mathrm{d}=-3 / 2$ and

$$
\lambda_{\mathrm{p}}=G^{1 / 2} h^{1 / 2} c^{-3 / 2}=\left(\frac{G h}{c^{3}}\right)^{1 / 2}=\left(\frac{\left(6.67 \times 10^{-11} \mathrm{~N} \cdot \mathrm{~m}^{2} / \mathrm{kg}^{2}\right)\left(6.63 \times 10^{-34} \mathrm{~J} \cdot \mathrm{~s}\right)}{\left(3.0 \times 10^{8} \mathrm{~m} / \mathrm{s}\right)^{3}}\right)^{1 / 2}=4.05 \times 10^{-35} \mathrm{~m}
$$

Let

$$
t_{\mathrm{p}}=G^{\mathrm{a}} h^{\mathrm{b}} c^{\mathrm{d}}
$$

Then analyzing the dimensions

$$
[\mathrm{L}]^{0}[\mathrm{M}]^{0}[\mathrm{~T}]^{1}=[\mathrm{L}]^{3 \mathrm{a}+2 \mathrm{~b}+\mathrm{d}}[\mathrm{M}]^{-\mathrm{a}+\mathrm{b}}[\mathrm{~T}]^{-2 \mathrm{a} \cdot \mathrm{~b}-\mathrm{d}}
$$

Equating exponents of [L]

$$
0=3 \mathrm{a}+2 \mathrm{~b}+\mathrm{d}
$$

Equating exponents of [M]

$$
0=-a+b
$$

Equating exponents of [T]

$$
1=-2 a-b-d
$$

Solving these equations

$$
\mathrm{b}=\mathrm{a}, \mathrm{~d}=-5 \mathrm{a}, \text { and } \mathrm{l}=-2 \mathrm{a}-\mathrm{a}+5 \mathrm{a}=2 \mathrm{a}
$$

So $\mathrm{a}=1 / 2, \mathrm{~b}=1 / 2 \mathrm{~m}$ and $\mathrm{d}=-5 / 2$

$$
t_{\mathrm{p}}=G^{1 / 2} h^{1 / 2} c^{-5 / 2}=\left(\frac{G h}{c^{5}}\right)^{1 / 2}=\left(\frac{\left(6.67 \times 10^{-11} \mathrm{~N} \cdot \mathrm{~m}^{2} / \mathrm{kg}^{2}\right)\left(6.63 \times 10^{-34} \mathrm{~J} \cdot \mathrm{~s}\right)}{\left(3.0 \times 10^{8} \mathrm{~m} / \mathrm{s}\right)^{5}}\right)^{1 / 2}=1.35 \times 10^{-43} \mathrm{~s}
$$

Let

$$
m_{\mathrm{p}}=G^{\mathrm{a}} h^{\mathrm{b}} c^{\mathrm{d}}
$$

Then analyzing the dimensions

$$
[L]^{0}[M]^{1}[T]^{0}=[L]^{3 a+2 b+d}[M]^{-a+b}[T]^{-2 a-b-d}
$$

Equating exponents of $[L]$

$$
0=3 a+2 b+d
$$

Equating exponents of [M]

$$
1=-a+b
$$

Equating exponents of [ T ]

$$
0=-2 \mathrm{a}-\mathrm{b}-\mathrm{d}
$$

Solving these equations

$$
\mathrm{a}=-1 / 2, \mathrm{~b}=1 / 2, \text { and } \mathrm{d}=1 / 2
$$

$$
m_{\mathrm{p}}=G^{-1 / 2} h^{1 / 2}{ }_{c} 1 / 2=\left(\frac{h c}{G}\right)^{1 / 2}=\left(\frac{\left(6.63 \times 10^{-34} \mathrm{~J} \cdot \mathrm{~s}\right)\left(3.0 \times 10^{8} \mathrm{~m} / \mathrm{s}\right)}{\left(6.67 \times 10^{-11} \mathrm{~N} \cdot \mathrm{~m}^{2} / \mathrm{kg}^{2}\right)}\right)^{1 / 2}=5.46 \times 10^{-8} \mathrm{~kg}
$$

A4. a. Let $L=0.75 \mathrm{~m}$, the length of the rod.
$\rho=$ the density of the unknown fluid
$V=$ the total volume of the rod
$\lambda L=$ mass of the rod
Since if the rod were fully submerged it would displaced $7.5 \times 10^{-4} \mathrm{~kg}$ of fluid, $7.5 \times 10^{-4} \mathrm{~kg}=\rho V$ In the present case the rod is only $2 / 3$ submerged so The buoyant force acting on the rod is

$$
B=W_{\text {n dis }}=\rho\left(\frac{2}{3} V\right) g=\frac{2}{3}\left(7.5 \times 10^{-4} \mathrm{~kg}\right) g=\left(5.0 \times 10^{-4} \mathrm{~kg}\right) g
$$

Since the system is in equilibrium the buoyant force balances the total weight force.
or

$$
\begin{gathered}
\left(5.0 \times 10^{-4} \mathrm{~kg}\right) g=m g+\lambda L g \\
5.0 \times 10^{-4} \mathrm{~kg}=m+\lambda L
\end{gathered}
$$

Since \% cannot be negative the largest value m can have is $\quad 5.0 \times 10^{-4} \mathrm{~kg} \geq m$.
b. The system oscillates and comes to rest. It must be in stable equilibrium. For this to occur the center of gravity must be below the center of buoyancy. The fluid is uniform. The center of buoyancy is at the mid point of the submerged length. Measuring distances from the bottom end of the rod, the location of the center of buoyancy is

$$
y_{c b}=\frac{1}{2}\left(\frac{2}{3} L\right)=\frac{1}{3} L .
$$

Mass $m$ is located at $y=0$. The center of gravity of the rod is at $L / 2$. The combined center of gravity of the system $y_{\mathrm{cg}}$ is

$$
\begin{gathered}
y_{c g} \sum m_{l g}=\sum y_{l} m_{l} g \\
y_{c g}(m+\lambda L) g=0 m g+(L / 2)(\lambda L) g \\
y_{c g}=\frac{\lambda L^{2}}{2(m+\lambda L)}
\end{gathered}
$$

Requiring the center of gravity to be below the center of buoyancy
or
Combining this with (A4-1)
Or

$$
\begin{gathered}
y_{c g}<y_{c b} \\
\frac{\lambda L^{2}}{2(m+\lambda L)}<\frac{1}{3} L \\
3 \lambda L<2(m+\lambda L) \\
\lambda L<2 m \\
5.0 \times 10^{-4} \mathrm{~kg}<m+2 m \\
m>\frac{1}{3}\left(5.0 \times 10^{-4} \mathrm{~kg}\right)=1.7 \times 10^{-4} \mathrm{~kg}
\end{gathered}
$$

c. Solving (A4-1) for $\lambda \quad \lambda=\frac{5.0 \times 10^{-4} \mathrm{~kg}-m}{L}=\frac{0.5 \text { grams }-m}{0.75 \mathrm{~m}}$.

At its minimum value $m_{\text {mig }}=1.7 \times 10^{-4} \mathrm{~kg}=0.17$ grams , $\lambda=0.44$ grams $/ \mathrm{m}$
At its maximum value $m_{\max }=5.0 \times 10^{-4} \mathrm{~kg}=0.50$ grams, $\lambda=0$.
The graph is a straight line with negative slope between these two points.
![](https://cdn.mathpix.com/cropped/e28ffa88-a52f-46a6-a0ec-5b1223879b00-5.jpg?height=731&width=1264&top_left_y=453&top_left_x=397)

2002 Semi-Final Exam
Part B-Solutions

B1. (10) a. The semicircular hoop's moment of inertia about its center is Using the parallel axis theorem to find the moment of inertia about the center of mass $I_{\mathrm{cm}}$

$$
I=I_{c m}+m h^{2}
$$

where $h$ is the perpendicular distance between an axis through the center of mass and a parallel axis through an arbitrary point.
In this case

$$
\begin{gathered}
h=\frac{2 R}{\pi} \\
I_{\mathrm{cm}}=I-m h^{2}=m R^{2}-m\left(\frac{2 R}{\pi}\right)^{2}=m R^{2}\left(1-\frac{4}{\pi^{2}}\right)
\end{gathered}
$$

(20) b. Finding the moment of inertia about the stationary point, the point where the hoop is in contact with the surface.

$$
I=I_{c m}+m L^{2}=m R^{2}\left(1-\frac{4}{\pi^{2}}\right)+m L^{2} .
$$

Using the Law of cosines to find $L$

$$
L^{2}=R^{2}+\left(\frac{2 R}{\pi}\right)^{2}-\frac{4 R^{2}}{\pi} \cos \theta .
$$

Substituting into the expression for $I$
![](https://cdn.mathpix.com/cropped/e28ffa88-a52f-46a6-a0ec-5b1223879b00-6.jpg?height=416&width=511&top_left_y=1310&top_left_x=1503)

$$
\begin{aligned}
& \quad I=m R^{2}\left(1-\frac{4}{\pi^{2}}\right)+m\left(R^{2}+\left(\frac{2 R}{\pi}\right)^{2}-\frac{4 R^{2}}{\pi} \cos \theta\right) \\
& I=m R^{2}\left(1-\frac{4}{\pi^{2}}+1+\frac{4}{\pi^{2}}-\frac{4}{\pi} \cos \theta\right)=m R^{2}\left(2-\frac{4}{\pi} \cos \theta\right) .
\end{aligned}
$$

For small amplitude oscillations (keeping only terms through first order in $\theta$

$$
\cos \theta \approx 1 \quad \text { and }
$$

$$
I \approx 2 m R^{2}\left(1-\frac{2}{\pi}\right) .
$$

The restoring torque about the stationary point is

$$
\tau=-m g d=-m g\left(\frac{2 R}{\pi}\right) \sin \theta \approx-\frac{2 m g R}{\pi} \theta,
$$

where the small angle approximation $\sin \theta \approx \theta$ has been used.
Combining the last two equations in $\quad \tau=I \alpha$,
yields

$$
-\frac{2 m g R}{\pi} \theta \approx 2 m R^{2}\left(1-\frac{2}{\pi}\right) \alpha .
$$

Comparing this with the defining equation of simple harmonic motion $-\omega^{2} x=a$, gives an expression for $\omega^{2}$.

$$
\omega^{2}=\frac{2 m g R}{\pi 2 m R^{2}\left(1-\frac{2}{\pi}\right)}=\frac{g}{R \pi\left(1-\frac{2}{\pi}\right)}=\frac{g}{R(\pi-2)}
$$

For the period $T_{\text {boslip }}$

$$
T_{00 \text { sij }}=\frac{2 \pi}{\omega}=\frac{2 \pi}{\sqrt{\frac{g}{R(\pi-2)}}}=2 \pi \sqrt{\frac{R(\pi-2)}{g}}
$$

(20) c. There is no horizontal force. The center of mass does not move from side to side. The $y$ coordinate of the center of mass is

$$
y=R-\frac{2 R}{\pi} \cos \theta=R-\frac{2 R}{\pi}\left(1-\frac{\theta^{2}}{2}+\ldots\right) \approx R-\frac{2 R}{\pi}
$$

including only terms through first order in $\theta$. To this approximation, the vertical position of the center of mass is constant and its acceleration is zero as well. Thus

$$
\sum F_{y}=N-m g=m a_{y}=0
$$

or

$$
N \approx m g
$$

Taking torques about the center of mass

$$
\tau=-N d=-N \frac{2 R}{\pi} \sin \theta \approx-\frac{2 m g R}{\pi} \theta
$$

where we have once again used the small angle approximation
![](https://cdn.mathpix.com/cropped/e28ffa88-a52f-46a6-a0ec-5b1223879b00-7.jpg?height=416&width=508&top_left_y=979&top_left_x=1413)
$\sin \theta=\theta$.

$$
\begin{aligned}
\tau & =I_{c m} \alpha \\
-\frac{2 m g R}{\pi} \theta & =m R^{2}\left(1-\frac{4}{\pi^{2}}\right) \alpha
\end{aligned}
$$

Comparing this with the defining equation of simple harmonic motion $-\omega^{2} x=a$, gives an expression for $\omega^{2}$.

$$
\omega^{2}=\frac{2 m g R}{\pi m R^{2}\left(1-\frac{4}{\pi^{2}}\right)}=\frac{2 g}{R \pi\left(1-\frac{4}{\pi^{2}}\right)}=\frac{2 g \pi}{R\left(\pi^{2}-4\right)}
$$

For the period $T_{\text {slip }}$

$$
T_{\text {slip }}=\frac{2 \pi}{\omega}=\frac{2 \pi}{\sqrt{\frac{2 g \pi}{R\left(\pi^{2}-4\right)}}}=2 \pi \sqrt{\frac{R\left(\pi^{2}-4\right)}{2 g \pi}}
$$

The ratio of periods is $\frac{T_{\text {slip }}}{T_{\text {ao slip }}}=\frac{2 \pi \sqrt{\frac{R\left(\pi^{2}-4\right)}{2 g \pi}}}{2 \pi \sqrt{\frac{R(\pi-2)}{g}}}=\sqrt{\frac{R\left(\pi^{2}-4\right) g}{2 g \pi R(\pi-2)}}=\sqrt{\frac{(\pi-2)(\pi+2)}{2 \pi(\pi-2)}}=\sqrt{\frac{\pi+2}{2 \pi}}$

B2. (5) a. If the charge $Q$ is uniformly distributed, the charge density is

$$
\rho=\frac{Q}{\frac{4}{3} \pi R^{3}} .
$$

The charge in a sphere of radius $R / 2$ is

$$
q=\rho \frac{4}{3} \pi\left(\frac{R}{2}\right)^{3}=\frac{1}{8} \rho \frac{4}{3} \pi R^{3}=\frac{1}{3} \frac{Q}{\frac{4}{3} \pi R^{3}} \frac{4}{3} \pi R^{3}=\frac{1}{8} Q .
$$

(10) b. The $x$-axis is totally outside the cavity. By Gauss's Law the field outside a spherical symmetric charge distribution of radius $R / 2$ centered on $z=R / 2$ is the same as that due to point charge at the center with the same total charge. So on the $x$-axis the field is the same as that due to uniform charge distribution of total charge $Q$ and radius $R$.
From Gauss's Law for a spherically symmetric charge distribution

$$
E=k \frac{Q_{e n c}}{R^{2}}
$$

where $k$ is Coulomb's constant and $Q_{\text {enc }}$ is the total charge enclosed by a Gaussian sphere of radius $R$.
Outside the sphere

$$
Q_{e n c}=Q
$$

For $|x|>R$

$$
E=k \frac{Q}{R^{2}}
$$

in a direction out from the origin.

Inside the sphere

$$
Q_{\text {enc }}=\rho \frac{4}{3} \pi|x|^{3}=\frac{Q}{\frac{4}{3} \pi R^{3}} \frac{4}{3} \pi|x|^{3}=\frac{Q|x|^{3}}{R^{2}}
$$

For $|x|<R$

$$
E=k \frac{1}{x^{2}} \frac{Q|x|^{3}}{R^{3}}=k \frac{Q|x|}{R^{3}}
$$

in a direction out from the origin.
(10) c. The total field can be considered the sum of two terms. That due to:
a sphere of radius $R$ centered on the origin with uniformly distributed total charge $+Q$.
a sphere of radius $R / 2$ centered on $z=R / 2$ with uniformly distributed total charge $-Q / 8$.
Outside the large sphere both fields are equal to those due to point charges at their centers.
For $|z|>R$

$$
E=k \frac{Q}{z^{2}}-k \frac{Q}{8(z-R / 2)^{2}}
$$

out from the origin.

Inside the large sphere but outside the cavity, treat the cavity as a point charge at its center and the sphere as an extended distribution

For $-R<z<0$

$$
E=k \frac{Q|z|}{R^{3}}-k \frac{Q}{8(z-R / 2)^{2}}
$$

out from the origin.

Inside the cavity, treat both the sphere and cavities as extended charge distributions.
$0<z<R / 2$

$$
E=k \frac{Q z}{R^{3}}+k \frac{Q(R / 2-z)}{8(R / 2)^{3}}=k \frac{Q z}{R^{3}}+k \frac{Q(R / 2-z)}{R^{3}}=k \frac{Q}{2 R^{2}}
$$

out from the origin.
$R / 2<z<R$

$$
E=k \frac{Q z}{R^{3}}-k \frac{Q(z-R / 2)}{8(R / 2)^{3}}=k \frac{Q z}{R^{3}}+k \frac{Q(R / 2-z)}{R^{3}}=k \frac{Q}{2 R^{2}} \quad \text { out from the origin. }
$$

(10) d. Outside the sphere, the electrostatic potential is the same as that due to a point charge of $+Q$ at the origin and a point charge of $-Q^{\prime} 8$ at $x=0, y=0, z=R / 2$.

Writing the distance from the origin as and the distance from at $x=0, y=0, z=R / 2$.
The potential is

$$
V=k \frac{Q}{r}-k \frac{q}{r^{\prime}}=k \frac{Q}{\sqrt{x^{2}+y^{2}+z^{2}}}-k \frac{Q}{8 \sqrt{x^{2}+y^{2}+(z-R / 2)^{2}}}
$$

(10) e. In order to get the electrostatic potential in the form shown, expand $r^{\prime}$ in a binomial series.

$$
\begin{aligned}
& r^{\prime}=\sqrt{x^{2}+y^{2}+(z-R / 2)^{2}}=\sqrt{x^{2}+y^{2}+z^{2}-z R+R^{2} / 4}=\sqrt{r^{2}-z R+R^{2} / 4}=r \sqrt{1-\frac{z R}{r^{2}}+\frac{R^{2}}{4 r^{2}}} \\
& V=k \frac{Q}{r}-k \frac{q}{r^{\prime}}=k \frac{Q}{r}-k \frac{Q}{8 r \sqrt{1-\frac{z R}{r^{2}}+\frac{R^{2}}{4 r^{2}}}}=k \frac{Q}{r}-k \frac{Q}{8 r}\left(1+\frac{1}{2} \frac{z R}{r^{2}}-\frac{1}{2} \frac{R^{2}}{4 r^{2}}+\ldots\right) \\
&
\end{aligned}
$$

Only terms of order $\frac{1}{r}$ and of order $\frac{1}{r^{2}}\left(\right.$ such as $\left.\frac{z}{r^{3}}\right)$ have been retained.
Comparing to the expression for $V$ given in 2 Be
And with $z=\vec{r} \cdot \hat{k}$
Which gives

$$
\stackrel{\rightharpoonup}{b} \cdot \stackrel{\rightharpoonup}{r}=-\frac{Q z R}{16}=-\frac{Q(\vec{r} \cdot \hat{k}) R}{16},
$$

(5) f. A point charge of $\frac{7}{8} Q$ at the origin and a dipole consisting of $-\frac{1}{8} Q$ at $(0,0, R / 2)$ and $+\frac{1}{8} Q$ at the origin.
