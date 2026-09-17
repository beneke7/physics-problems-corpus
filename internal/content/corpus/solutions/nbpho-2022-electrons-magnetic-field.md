---
id: nbpho-2022-electrons-magnetic-field
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2022-electrons-magnetic-field
figure_files: [nbpho-2022-solution-p6.png, nbpho-2022-solution-p7.png]
provenance_note: "Official NBPhO 2022 solution, Electrons in magnetic field. Mathpix OCR of the cached solutions PDF (cache/phoxiv/nbpho/2022_S.mmd). Solution diagrams are preserved as local rendered source pages."
---

i) (2 points) Due to Lorentz force not acting along the direction that's parallel to $B$, the condition for electrons to stay the same distance along that axis becomes simply that their velocity components along $B$ are equal. We will henceforth only consider the motion on the plane that's perpendicular to $B$.

Neglecting electrostatic interactions, electrons move on circular trajectories of frequency $\omega$ given by the right hand rule, found from the centrifugal and Lorentz force balance:

$$
\frac{m v^{2}}{R}=m v \omega=v e B,
$$

hence $\omega_{0}=e B / m$. In other words, the angular frequency for both electrons is the same and independent of their speeds. We also get an expression for the radius of the circular trajectory: $R=v / \omega_{0}=m v /(e B)$.

An important consequence is that the angle between the velocities of the two electrons stays constant in time. Hence, the relative velocity between the two electrons is also constant in magnitude (and not zero!) and rotating with $\omega_{0}$. For the relative velocity to keep the distance between electrons constant, the distance vector between the two electrons must be perpendicular to the relative velocity and hence also rotate with angular speed $\omega_{0}$. This is enough to conclude
that the only way this is satisfied is when the two electrons move on concentric circular trajectories.

The condition for the relative velocity to be perpendicular to the distance vector gives us that the speed of the other electron is $u=$ $v / \cos \alpha$. The radii of the two circles are then $R_{1}=v / \omega_{0}$ and $R_{2}=v /\left(\cos \alpha \omega_{0}\right)$. The trajectories are illustrated below.
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p6.png)

## Grading:

- Finding the cyclotron frequency and radius of curvature from force balance (0.5 pts)
- Showing that the two orbits must be concentric, of which
- deducing that the angle between velocities is constant (0.3 pts)
- showing that the displacement trajectory rotates with $\omega_{0}$ on a circular trajectory (0.4 pts)
- concluding that the orbits are concentric (0.2 pts)
- Correct sketch of the trajectories (0.3 pts)
- Correct expression for the speed of the other electron (0.3 pts)

ii) (1 point) The class of solutions we found in the previous part does not cover the case where the two trajectories intersect. However, the previous part assumed that $\alpha \neq 0$. Hence, for the trajectories to intersect, we need $\alpha=0$ and $u=v$. In other words, $\vec{u}=\vec{v}$. This leaves us complete freedom in the locations of the centres of the two trajectories, as long as they intersect. A sketch of a potential trajectory is shown below

## Grading:

- Deducing that $\alpha=0$ and $u=v$ (0.4 pts)
- Concluding that $\vec{u}=\vec{v}$ (0.3 pts)
- Sketch (0.3 pts)

iii) (2 points) The frequency of the periodic motion is $2 \pi / T=e B /(3 m)=\omega_{0} / 3$, i.e. a third of the cyclotron frequency. Now, it's clear that a simple solution that can satisfy the electrons being equidistant and with equal speeds is simply the one where they move on the same circular trajectory, but in the opposite phase. We proceed to reason why this is the only potential solution.

The net force on any of the electrons must be perpendicular to the velocity of the said electron (otherwise $v \neq$ const). The Lorentz force is automatically perpendicular to the velocity, and hence we need the Coulomb force to also be perpendicular to the velocity. This means that the displacement vector has to be perpendicular to the velocities and this, combined with the electrons being equidistant, gives us the aforementioned circular solution.

The radial force balance equation reads

$$
\frac{m \omega^{2} l}{2}=e v B-\frac{k e}{l^{2}},
$$

where negative sign points outward (Lorentz force must be positive signed for the electrons not to repulse each-other). Using $v=$ $\omega l / 2$ and substituting $\omega$, we get

$$
\frac{e^{2} B^{2} l}{18 m}=\frac{e^{2} B^{2} l}{2 m}-\frac{k e^{2}}{l^{2}}
$$

and so

$$
l=\sqrt[3]{\frac{9 k m}{4 B^{2}}}
$$

## Grading:

- Showing that the electrons must be orbiting each-other on a circular orbit (0.7 pts)
- Radial force balance (0.8 pts)
- Final answer (0.5 pts)

iv) (2 points)In order to analyse the trajectories given on the figure, we need some basic understanding of their underlying dynamics. As compared to the previous task, the condition for the centre of mass to be at rest is now relaxed. We start in the most general form and write down the forces acting on the two electrons, 1 and 2:

$$
\begin{aligned}
& m \dot{\vec{v}}_{1}=-\frac{k e^{2}}{l^{2}} \hat{l}+e \vec{v}_{1} \times \vec{B} \\
& m \dot{\vec{v}}_{2}=\frac{k e^{2}}{l^{2}} \hat{l}+e \vec{v}_{2} \times \vec{B}
\end{aligned}
$$

where $\vec{l}=\vec{r}_{2}-\vec{r}_{1}$ is the displacement vector from 1 to 2 and $\hat{l}$ is the corresponding unit vector. We can cancel out the Coulomb force by adding the two equations together:

$$
m\left(\dot{\vec{v}}_{1}+\dot{\vec{v}}_{2}\right)=e\left(\vec{v}_{1}+\vec{v}_{2}\right) \times \vec{B} .
$$

This can be further simplified by substituting the centre of mass velocity $\vec{v}_{\mathrm{CM}}=\left(\vec{v}_{1}+\vec{v}_{2}\right) / 2$ :

$$
m \dot{\vec{v}}_{\mathrm{CM}}=e \vec{v}_{\mathrm{CM}} \times \vec{B} .
$$

This mirrors exactly the equation of motion of a single electron, meaning the centre of mass moves on a circular trajectory with frequency $\omega_{0}$, even in the presence of the Coulomb force.

We proceed with a similar analysis for the difference of velocities:

$$
m\left(\dot{\vec{v}}_{1}-\dot{\vec{v}}_{2}\right)=-2 \frac{k e^{2}}{l^{2}} \hat{l}+e\left(\vec{v}_{1}-\vec{v}_{2}\right) \times \vec{B} .
$$

Substituting in the velocity of 1 w.r.t. CM $\Delta \vec{v}_{1}=\vec{v}_{1}-\vec{v}_{\mathrm{CM}}=\left(\vec{v}_{1}-\vec{v}_{2}\right) / 2$ we get

$$
m \Delta \dot{\vec{v}}_{1}=-\frac{k e^{2}}{l^{2}} \hat{l}+e \Delta \vec{v}_{1} \times \vec{B}
$$

which, once again, mirrors the equation of motion of the previous sub-task. Explicitly, the EoM of the previous part was

$$
m \dot{\vec{v}}=-\frac{k e^{2}}{l^{2}} \hat{l}+e \vec{v} \times \vec{B} .
$$

Therefore, $\Delta \vec{v}_{1}$ rotates with an angular frequency $\omega$ that's smaller than $\omega_{0}$.

In conclusion, the motion of an electron is the superposition of the circular trajectory of the centre of mass of radius $\left|\vec{R}_{1}\right|=R_{1}$ and frequency $\omega_{0}$ and the circular motion of the electron of radius $\left|\vec{R}_{2}\right|=R_{2}$ and frequency $\omega<\omega_{0}$ around the centre of mass. The other electron is diametrically opposite around the centre of mass, separated by a distance $R_{2}$ from the first electron. $R_{1}, R_{2}$ and $\omega$ are free parameters.

We finally continue with the graph given in the statement. Since the trajectory makes one hoop in a full period, $\omega_{0}$ must be an integer multiple of $\omega$. If this wasn't the case, both $\vec{R}_{1}$ and $\vec{R}_{2}$ must make more than one full rotation in a period and the result would be a hoop that goes around itself more than once (possibly self-intersecting in the process). Thus, $\omega_{0}=N \omega$, where $N \in\{2,3, \ldots\}$ ( $N=1$ gives a circle).

For the next step, let's consider the effect of radius of curvature, an easily observable property of the trajectory. In general, the bigger the speed, the bigger the radius of curvature (Coulomb force gives a constant contribution to the radial force, and Lorentz force has a monotonously increasing relation between $R$ and $v$ ). Hence, the point on the trajectory with the biggest radius of curvature has the highest speed (marked on the figure with $B$ ), and vice-versa (marked with $A$ ). Further, the biggest speed happens when $\vec{R}_{1}$ and $\vec{R}_{2}$ are parallel, and the smallest when they're antiparallel (having speeds $\omega_{0} R_{1}+\omega R_{2}$ and $\left|\omega_{0} R_{1}-\omega R_{2}\right|$ respectively). Now, in a full period, $\vec{R}_{2}$ goes around once, and $\vec{R}_{1}$ goes around $N$ times. Therefore, $\vec{R}_{1}$ overtakes $\vec{R}_{2}$ a total of $N-1$ times and we expect to see $N-1$ occurrences of maximal speed, i.e. maximal radius of curvature. Because we see this happen once, $N=2$. This immediately gives the period of the motion to be $T=2 \pi / \omega=4 \pi / \omega_{0}=4 \pi m /(e B)$.

From the previous theory, $|A B|=2 R_{2}$, and the centre point $O_{1}$ between $A$ and $B$ is where $\vec{R}_{1}$ intersects with the axis of symmetry. The other point where $\vec{R}_{1}$ intersects with the axis is when $\vec{R}_{1}$ and $\vec{R}_{2}$ are per-
pendicular. This can be found by finding the points (using a ruler) which are $|A B| / 2$ away from the principal axis (we mark these by $C$ and $D$ ). There are two solutions, the right one of which is unphysical (as can be seen by the following constructions breaking down). Having found the other intersection point $O_{2}$ (which happens to coincide with $A$ ), we can fully reconstruct $\vec{R}_{1}$ (colored blue) and from there it's easy to find the centre of mass corresponding to the marked electron (by finding the point on $\vec{R}_{1}$ which is a distance $R_{2}$ from the marked point using a compass) and hence the location of the other electron (by mirroring the marked electron w.r.t. the centre of mass), marked cyan.
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p7.png)

Alternative solution.
An alternative solution with simpler geometric operations, but more complex algebra would follow a similar line of reasoning until $N=2$. After that, one can show that the two electrons follow the same orbit by expressing the locations of the two electrons via complex numbers $z_{ \pm}=R_{1} \exp (2 \mathrm{i} \omega t) \pm R_{2} \exp (\mathrm{i} \omega t)$. This is a commonly deployed method to simplify vector operations. The real part of the complex number is the $x$-coordinate, and the imaginary the $y$-coordinate. Now, if we apply a phaseshift of $\pi$ to $\omega t, z_{+}$becomes $z_{-}$and vice-versa. This is because $\exp (2 \mathrm{i}(\omega t+\pi))=\exp (2 \mathrm{i} \omega t) \cdot \exp (2 \pi \mathrm{i})=$ $\exp (2 \mathrm{i} \omega t)$ and $\exp (\mathrm{i} \omega t+\mathrm{i} \pi)=-\exp (\mathrm{i} \omega t)$. Hence, $z_{+}$and $z_{-}$follow the same trajectory but with a $\pi$ phaseshift, exactly as we wanted.

Now, the location of the other electron can be simply found by drawing a circle of radius $|A B|$ from the first electron and seeing where it intersects with the trajectory.

## Grading:

- Analysis of the dynamics of the system, of which:
- Equations of motions for both electrons (0.4 pts)
- Deducing that the centre of mass moves on a circular orbit of frequency $\omega_{0}$ (0.3 pts)
- Deducing that the electrons orbit centre of mass with frequency $\omega<\omega_{0}$. (0.4 pts) If the student implicitly assumes $\omega>\omega_{0}$ but does the rest correctly (including the constructions), award a maximum of 1.5 points.
- Analysing the trajectory to show that $\omega=$ $\omega_{0} / 2$. (0.3 pts)
- Using points $A$ and $B$ to get $2 R_{2}$ (0.3 pts)
- Using $C$ and $D$ to find $R_{1}$ and hence the location of the other electron (alternatively using $|A B|$ and reasoning that the electrons must share a trajectory) (0.3 pts)

v) (2 points) Based on the previous reasoning, we see that the trajectory has two points with maximal radius of curvature, and hence $N=3$, i.e. the same as in part iii). Now, the first electron is at the inflection point where it's momentarily at rest (before being pushed into motion by Coulomb force). Also, since it's the point with highest curvature, we have $v_{1}=\left|\omega_{0} R_{1}-\omega R_{2}\right|=0$ so $\omega_{0} R_{1}=\omega R_{2}$. Because the other electron is diametrically opposite w.r.t. centre of mass, it's at the point of highest speed, i.e. $v_{2}=\omega_{0} R_{1}+\omega R_{2}=2 \omega R_{2}$.

Now, because the equation of motion defining $R_{2}$ is the same as in part iii) (as highlighted in the previous subtask), we can reuse the result form that part to get

$$
R_{2}=\frac{l}{2}=\sqrt[3]{\frac{9 k m}{32 B^{2}}}
$$

and so

$$
v_{2}=2 \omega R_{2}=\frac{2 e B}{3 m} R_{2}=e \sqrt[3]{\frac{k B}{12 m^{2}}} .
$$

## Grading:

- Deducing that $\omega=\omega_{0} / 3$ (the toolset for this should've been developed in the previous part) (0.3 pts)
- Finding that the highlighted electron is at rest (0.3 pts)
- Rest condition $\omega_{0} R_{1}=\omega R_{2}$ (0.3 pts)
- Expressing the speed of the other electron as $2 \omega R_{2}$ ( $\mathbf{0 . 3}$ pts)
- Solving the force balance equation for $R_{2}$ (or reusing the result from part iii)) (0.7 pts)
- Final expression (0.1 pts)
