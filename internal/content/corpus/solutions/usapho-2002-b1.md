---
id: usapho-2002-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2002-b1
solution_type: official
source_document: solution-document-usapho-2002-s
source_pdf: cache/phoxiv/usapho/2002_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2002_S.pdf."
---

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
