---
id: nbpho-2022-life-hacks
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2022-life-hacks
figure_files: [nbpho-2022-solution-p5.png]
provenance_note: "Official NBPhO 2022 solution, Life hacks. Mathpix OCR of the cached solutions PDF (cache/phoxiv/nbpho/2022_S.mmd). Solution diagrams are preserved as local rendered source pages."
---

i) (1 point) A healthy eye can see from $a_{0}=$ 0.25 m to $b_{0}=\infty$. The images formed by the two limit points through the contact lens define the range $\left(a_{1}, b_{1}\right)$ the nearsighted eye can focus. For this, we use the Lens' formula:

$$
\begin{aligned}
& \frac{1}{a_{0}}+\frac{1}{a_{1}}=D_{0}, \\
& \frac{1}{b_{0}}+\frac{1}{b_{1}}=D_{0}=\frac{1}{b_{0}},
\end{aligned}
$$

where $D_{0}=-6 \mathrm{dptr}$. This yields

$$
\begin{aligned}
a_{1} & =\frac{1}{D_{0}-1 / a_{0}}=-10.0 \mathrm{~cm}, \\
b_{1} & =-\frac{1}{D_{0}}=-16.7 \mathrm{~cm} .
\end{aligned}
$$

Because of the sign convention in the Lens formula, the clear-vision range without contact lenses is from $-a_{1}=10.0 \mathrm{~cm}$ to $-b_{1}=$ 16.7 cm.

Grading:

- Correct understanding of the optical setup (0.5 pts)
- Lens equation (0.3 pts)
- Expressing the final answer (0.2 pts)

ii) (2 points) The setup is the same, only that the lens moves a distance $L=2.00 \mathrm{~cm}$ away from the eye. Since both of the locations of the limit points and their images must stay the same relative to the eye, both the limit points and their images are shifted relative to the glass lens by $L$. Taking care with the signs, this translates to the required lens power for the limit points to be

$$
\begin{aligned}
& \frac{1}{a_{1}+L}+\frac{1}{a_{0}-L}=-8.15 \mathrm{dptr}, \\
& \frac{1}{b_{1}+L}+\frac{1}{b_{0}-L}=-6.82 \mathrm{dptr} .
\end{aligned}
$$

The minimal required glass lens power $D_{1}$ is the higher (in absolute value) of the two values, hence $D_{1}=-8.15 \mathrm{dptr}$. We can indeed check that this focuses infinity, as infinity gets focused to a distance of $-1 / D_{1}+L=$ 14.2 cm from the eye, safely in $\left(a_{1}, b_{1}\right)$.

Grading: - Understanding that the limit points and their images stay the same relative to the eye (1.0 pts)

- Correct formulation of the lens equations (0.5 pts)

- Choosing the correct value for the lens power (0.3 pts)

- Expressing the final answer (0.2 pts)

iii) (3 points) Let the distance between the front and back wheels be $2 a$, and the height of the centre of mass from the bottom of the car $h$.

In the case of the car blocking all the wheels, the car acts as one solid body, i.e. the slipping condition can be written as $\mu=$ $\tan \alpha_{0}=\tan 45^{\circ}=1$.

The acceleration of a front-wheel-drive car is limited by the grip of its front wheels (i.e. friction with the ground) with the back wheels rolling frictionlessly. In total, there are four forces acting on the car, but the normal and friction forces acting on the front wheel can be coupled into one resultant force $\vec{F}_{f}$ acting at an angle of $\beta=\arctan \mu$ with respect to the surface normal. There is further the normal force of the back wheels, $\vec{N}_{b}$, and finally the gravitational force $m \vec{g}$ applied on the centre of mass of the car. The forces are shown on the figure below
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p5.png)

At the critical angle $\alpha_{1}=22^{\circ}$, the forces are in equilibrium. This condition can be solved in multitude of ways, either by brute force (1 rotational and 2 translational force balance equations) or geometrically by noting that the three forces in equilibrium must all intersect in one point. This can be proven by contradiction by observing the torque around any intersection of two of the forces. With the geometrical approach, we make use of the fact that $m \vec{g}$ is vertical, $\vec{N}_{b}$ is perpendicular to the surface (so at an angle $\alpha_{1}$ w.r.t. $m \vec{g}$ ) and $\vec{F}_{f}$ at an angle $\beta$ w.r.t. the surface normal. The intersection condition is then most conveniently written by expressing the distance of the intersection point from the surface, $y$, in two different ways:

$$
y=\frac{2 a}{\tan \beta}=\frac{a}{\tan \alpha_{1}}-h .
$$

Hence,

$$
\frac{h}{a}=\frac{1}{\tan \alpha_{1}}-\frac{2}{\tan \alpha_{0}} .
$$

We can proceed exactly the same way for the case of the car backing up at the other, yet unknown, critical angle $\alpha_{2}$, illustrated below.
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p5.png)

We proceed to write down the equilibrium condition the same way as before, by expressing the distance of the intersection point from the surface in two different ways:

$$
y=\frac{2 a}{\tan \beta}=\frac{a}{\tan \alpha_{2}}+h .
$$

Hence,

$$
\begin{aligned}
\tan \alpha_{2} & =\left(\frac{2}{\tan \alpha_{0}}-\frac{h}{a}\right)^{-1} \\
& =\left(\frac{4}{\tan \alpha_{0}}-\frac{1}{\tan \alpha_{1}}\right)^{-1}
\end{aligned}
$$

and so $\alpha_{2}=33.3^{\circ}$.
Grading:

- Understanding the dynamics of a frontwheel-drive car; identifying the four forces acting on the car ( $\mathbf{0 . 8 ~ p t s )}$
- Solving the case with brakes blocking all wheels (0.4 pts)
- Writing down the equilibrium condition for going uphill (0.8 pts)
- Writing down the equilibrium condition for reversing uphill (0.8 pts)
- Expressing the final answer (0.2 pts)
