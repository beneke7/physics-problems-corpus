---
id: usapho-2005-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2005-b1
solution_type: official
source_document: solution-document-usapho-2005-s
source_pdf: cache/phoxiv/usapho/2005_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2005_S.pdf."
---

B1. (a) By symmetry, the $x$ and $y$ components of the electric field from different parts of the ring will cancel

$$
E_{1}=E_{1}=0
$$

Therefore, we need to add up the $z$-components of the electric field from the various parts of the ring.

The electric field due to an infinitesimal charge $d q$ on the ring at a distance $z$ from the origin is

$$
d E=\frac{d q}{4 \pi \varepsilon_{0} r^{2}} \vec{r}
$$

![](https://cdn.mathpix.com/cropped/fd323d79-cd90-4566-94c1-6a6ae813bf3f-08.jpg?height=502&width=583&top_left_y=472&top_left_x=1306)
where $r=\left(b^{2}+z^{2}\right)^{1 \cdot 2}$
( $r$ is the distance from a point on the ring to the point $(0.0 . z)$.) $\hat{r}$ is a unit vector at the point ( $0,0, z$ ) pointing away from the charge $d q$ on the ring

The $z$-component is then given by

$$
d E_{r}=d E \cos \theta=\frac{z d E}{r}
$$

where $\theta$ is the angle between $r$ and the $z$ axis.
Substituting eq. (B1-1) into (B1-2) yields:

$$
d E_{z}=\frac{z d q}{4 \pi \varepsilon_{0} r^{3}}
$$

Integrating (B1-4) around the ring and observing that $r$ is the same for all points on the ring yields

$$
E_{z}=\int \frac{z d q}{4 \pi \varepsilon_{0} r^{4}}=\frac{z Q}{4 \pi \varepsilon_{0} r^{3}}
$$

Using the fact that $E_{1}=E_{y}=0$ and substituting $(\mathrm{B} 1-2)$ into $(\mathrm{B} 1-5)$ gives us the answer.

$$
E=E \dot{k}=\frac{z Q \hat{k}}{4 \pi \varepsilon_{s}\left(b^{2}+z^{2}\right)^{3 / 2}}
$$

(b) The potential a distance $r$ away from an infinitesimal charge $d q$ is given by

$$
d V=\frac{d q}{4 \pi \varepsilon_{v} r}
$$

Integrating around the ring, using the fact that $r$ is the same from every point on the ring to the point ( $0,0,2$ ), and substituting (B1-2) for $r$ yields

$$
\nu=\int \frac{d q}{4 \pi \varepsilon_{o} r}=\frac{Q}{4 \pi \varepsilon_{o} r}=\frac{Q}{4 \pi \varepsilon_{s}\left(b^{2}+z^{2}\right)^{1 / 2}}
$$

Note that it is easier to solve part (b) first and then to solve part (a) using

$$
\begin{aligned}
& E_{z}=-\frac{d V}{d z}=-\frac{d}{d z}\left(\frac{Q}{4 \pi \varepsilon_{o}\left(b^{2}+z^{2}\right)^{1 / 2}}\right)=-\frac{\left(-\frac{1}{2}\right)(2 z Q)}{4 \pi \varepsilon_{o}\left(b^{2}+z^{2}\right)^{1 / 2}} \\
& =\frac{z Q}{4 \pi \varepsilon_{n}\left(b^{2}+z^{2}\right)^{3 / 2}}
\end{aligned}
$$

(c) The potential energy of the system is given by

$$
U=-4 V
$$

Using (B1-8),

$$
U=\frac{-q Q}{4 \pi \varepsilon_{0}\left(b^{2}+z^{2}\right)^{1-2}}
$$

Factoring out $b^{2}$,

$$
U=\frac{-q Q}{4 \pi \varepsilon_{o}}\left(b^{2}+z^{2}\right)^{-1: 2}=\frac{-q Q}{4 \pi \varepsilon_{o} b}\left(1+\frac{z^{2}}{b^{2}}\right)^{-12}
$$

Using the fact that $|z| \ll b$ and using the approximation $(1+x)^{n} \approx 1+n x$ when $x \ll 1$, (B1-12) becomes

$$
U \approx \frac{-q Q}{4 \pi \varepsilon b}\left(1-\frac{z^{2}}{2 b^{2}}\right)
$$

(d) Mechanical energy is conserved, so

$$
U\left(z_{0}\right)+K\left(z_{0}\right)=U(0)+K(0)
$$

Since the charge is at rest at $z=z_{0}$ and using (B1-13),

$$
\frac{-q Q}{4 \pi \varepsilon_{e} b}\left(1-\frac{z_{0}^{2}}{2 b^{2}}\right)+0=\frac{-q Q}{4 \pi \varepsilon_{e} b}+\frac{1}{2} m[v(0)]^{2}
$$

Solving for $v(0)$,

$$
v(0)=\left(\frac{q Q z_{o}^{2}}{4 m \pi \varepsilon_{b} b^{2}}\right)^{1 / 2}
$$

(e) We shall use Newton's Second Law:

$$
F_{r r t}=m a=m \frac{d^{2} z}{d t^{2}}
$$

The force on the charge -q is -qE where E is given by (B1-6). Substituting into (B1-17),

$$
\frac{-q z Q}{4 \pi \varepsilon_{n}\left(b^{2}+z^{2}\right)^{m / 2}}=m \frac{d^{2} z}{d t^{2}}
$$

But, $z \ll b$, so $\left(b^{2}+z^{2}\right)^{3 / 2} \approx b^{3}$ and, after dividing both sides by m, (B1-18) becomes

$$
\frac{d^{2} z}{d t^{2}}=\frac{-q Q z}{4 \pi \varepsilon_{0} m b^{1}}
$$

We recognize that the differential equation

$$
\frac{d^{2} z}{d t^{2}}=-\omega^{2} z
$$

is simple harmonic motion. The solution to $(\mathrm{BI}-20)$ is

$$
z(t)=A \cos t o t
$$

Since $z(0)=z_{0}$, we find that $A=z_{0}$.
By comparison with (B1-19), we find that

$$
\omega=\left(\frac{q Q}{4 \pi \varepsilon_{o} m b^{3}}\right)^{12}
$$

We can derive an expression for the velocity as a function of time by differentiating (BI21):

$$
\nu(t)=\frac{d z(t)}{d t}=-\omega z_{,} \sin \omega t
$$

(where $\omega$ is given by (B1-22).)
Note that an alternative method of solving part (d) is to note that the speed at the origin will be the maximum value of the magnitude of the velocity

$$
v(0)=\omega z_{0}=\left(\frac{q Q z_{0}^{2}}{4 \pi \varepsilon_{0} m b^{3}}\right)^{1 / 2}
$$

Note that an alternative (easier) method of solving part ( e ) is to note that the potential energy found in $(B 1-13)$ is of the form $U(z)=U(0)+\frac{k z^{2}}{2}$

Therefore, since it starts from rest, we know that $z(t)=A \cos \omega t$ and that

$$
v(t)=\frac{d z(t)}{d t}=-\omega z_{a} \sin \omega t=-v_{\operatorname{trax}} \sin \omega t
$$

Thus, $\omega=\frac{v_{\text {max }}}{z_{0}}$ and $v_{\text {max }}$ was found in (B1-16).
(f) According to the Biot-Savart law, the magnetic field due to a moving infinitesimal charge $d q$ is given by

$$
d \vec{B}=\frac{\mu_{0}}{4 \pi} \frac{I d \vec{s} \times \hat{r}}{r^{2}}=\frac{\mu_{0}}{4 \pi} \frac{d q \vec{v} \times \hat{r}}{r^{2}}
$$

Since $d \vec{B}$ depends on the cross product $\vec{v} \times \vec{r}, d \vec{B}$ must be perpendicular to both $\vec{v}$ and $\hat{r}$.
By symmetry, when we add the magnetic field vectors due to all points on the rotating ring, the $x$ and $y$ components will cancel. Therefore, we need to find the $z$ components and add them. Let $\varphi$ be the angle between $\bar{B}$ and $\bar{z}$.
![](https://cdn.mathpix.com/cropped/fd323d79-cd90-4566-94c1-6a6ae813bf3f-12.jpg?height=501&width=598&top_left_y=236&top_left_x=380)

$$
d B_{z}=d B \cos \varphi=\frac{b d B}{r}
$$

Substituting $v=b \omega$ and (B1-24) into (B1-25):

$$
d B_{z}=\frac{\mu_{0}}{4 \pi} \frac{b^{2} \omega d q}{r^{3}}
$$

Integrating (B1-26) around the ring and observing that r is the same for all points on the ring yields

$$
B_{z}=\int \frac{\mu_{0}}{4 \pi} \frac{b^{2} \omega d q}{r^{3}}=\frac{\mu_{0}}{4 \pi} \frac{b^{2} \omega Q}{r^{3}}
$$

Using the fact that $B_{x}=B_{y}=0$ and substituting ( $\mathrm{B} 1-2$ ) into ( $\mathrm{B} 1-27$ ) gives us the answer

$$
B=B \hat{k}=\frac{\mu_{0}}{4 \pi} \frac{b^{2} \omega Q \hat{k}}{\left(b^{2}+z^{2}\right)^{3 / 2}}
$$

(g) A point charge $-q$ moving with velocity $v$ in a magnetic field $B$ experiences a magnetic force

$$
\dot{F}_{m o k n}=-q \vec{v} \times \dot{B}
$$

However, since the charge is moving in the $-\vec{k}$ direction and the magnetic field is in the $\vec{k}$ direction, $\vec{v} \times \vec{B}=0$, so $\dot{F}_{\text {magn }}=0$.
