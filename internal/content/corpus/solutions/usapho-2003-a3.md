---
id: usapho-2003-a3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2003-a3
solution_type: official
source_document: solution-document-usapho-2003-s
source_pdf: cache/phoxiv/usapho/2003_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2003_S.pdf."
---

A3. a. The slab has infinite extent in the $x$ and $y$ direction. Therefore the magnetic field $\vec{B}$ can depend at most on z: By the right hand rule and symmetry $\vec{B}$ is to the left for positive $z$ and to the right for negative $z$.

$$
\begin{array}{ll}
\vec{B}=-B(z) \hat{j} & z>0 \\
\vec{B}=+B(z) \hat{j} & z<0
\end{array}
$$

$\vec{B}$ can be found from Ampere's law. To find $\vec{B}$ outside the slab, $z>L / 2$, use the loop shown in Figure a. The loop segments parallel to the $z$ direction are perpendicular to $\vec{B}$ and will not contribute.
![](https://cdn.mathpix.com/cropped/5845cb1d-91fe-4a31-b612-8e6e626e757e-3.jpg?height=446&width=622&top_left_y=777&top_left_x=397)
![](https://cdn.mathpix.com/cropped/5845cb1d-91fe-4a31-b612-8e6e626e757e-3.jpg?height=257&width=643&top_left_y=902&top_left_x=1119)

$$
\begin{aligned}
& \oint \vec{B} \cdot d \vec{l}=\mu_{0} I_{e x i} \\
& B w+B w=\mu_{0}(I w J) \\
& B=\frac{1}{2} \mu_{0} L J \\
& \text { for }|z|>L / 2 .
\end{aligned}
$$

To find $\dot{B}$ inside the slab, $z<L / 2$, use the loop shown in Figure $b$. Once again, the loop segments parallel to the $z$ direction are perpendicular to $\vec{B}$ and will not contribute.

$$
\begin{array}{ll}
\dot{\oint} \dot{B} \cdot d \vec{l}=\mu_{0} l_{v r s} & \\
B w+B w-\mu_{o}(2 z w /) & \\
B=\mu_{o} J z & \text { for }|z|<L / 2
\end{array}
$$

Including the direction,

$$
\begin{array}{ll}
\vec{B}=\frac{1}{2} \mu_{0} \| \hat{j} & -L / 2>z, \\
\vec{B}=-\mu_{0} J_{z j} & +L / 2>z>-1.12, \\
\vec{B}=-\frac{1}{2} \mu_{0} J_{0} \hat{j} & z>L / 2
\end{array}
$$

b. In the region of the loop, $\vec{B}$ is uniform, $\vec{B}=-\frac{1}{2} \mu_{0} H_{j}^{\hat{j}}$. The force on the top segment is equal and opposite to the force on the bottom segment. The force on the left segment it equal and opposite to the force on the right segment. The net force on the loop is zero.

The net torque is given by

$$
\begin{aligned}
\vec{F}_{n e i} & =0 \\
\vec{\tau}_{n e t} & =\vec{\mu} \times \vec{B} \\
\vec{\mu}-L A \hat{n} & =I a^{2}(\cos \theta \hat{i}+\sin \theta \hat{j})
\end{aligned}
$$

$$
\begin{aligned}
& \vec{\tau}_{n e t}=I a^{2}(\cos \theta \hat{i}+\sin \theta \hat{j}) \times\left(-\frac{1}{2} \mu_{0} J L \hat{j}\right) \\
& \vec{\tau}_{n e i}=-\frac{1}{2} \mu_{o} J L H a^{2}(\cos \theta \hat{i} \times \hat{j}+\sin \theta \hat{j} \times \hat{j}) \\
& \vec{\tau}_{n e t}=-\frac{1}{2} \mu_{o} J I A a^{2} \cos \theta \hat{k}
\end{aligned}
$$

c. $\vec{B}$ is uniform so the flux through the loop is

Using Faraday's Law, the emf

$$
\begin{gathered}
\Phi=\vec{B} \cdot A \hat{n}=-\frac{1}{2} \mu_{o} J \hat{j} \cdot a^{2}(\cos \theta \hat{i}+\sin \theta \hat{j}) \\
\Phi=-\frac{1}{2} \mu_{D} J L a^{2} \sin \theta \\
\varepsilon=-\frac{\Delta \Phi}{\Delta t}=\frac{1}{2} \mu_{D} L a^{2} \sin \theta \frac{\Delta t}{\Delta t} \\
\varepsilon=I R=\frac{\Delta Q}{\Delta t} R
\end{gathered}
$$

The emf is also
where

$$
\frac{\Delta Q}{\Delta t}=\frac{1}{2 R} \mu_{0} L a^{2} \sin \theta \frac{\Delta t}{\Delta t}=\frac{1}{8 a S} \mu_{i t} L a^{2} \sin \theta \frac{\Delta J}{\Delta t}
$$

Since $J$ has been reduced to zero over time $T$, the charge $Q$ flowing in time $T$ is

$$
Q=\frac{\mu_{2} a L J}{8 S} \sin \theta
$$
