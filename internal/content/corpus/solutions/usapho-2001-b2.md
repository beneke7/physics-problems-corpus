---
id: usapho-2001-b2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2001-b2
solution_type: official
source_document: solution-document-usapho-2001-s
source_pdf: cache/phoxiv/usapho/2001_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2001_S.pdf."
---

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
