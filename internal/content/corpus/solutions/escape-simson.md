---
id: escape-simson
source: nbpho
language: en
solution_language: en
translated: false
problem: escape-simson
figure_files: [nbpho-2022-solution-p1.png]
provenance_note: "Official NBPhO 2022 solution, Escape. Mathpix OCR of the cached solutions PDF (cache/phoxiv/nbpho/2022_S.mmd). Solution diagrams are preserved as local rendered source pages."
---

i) Let's denote the diving angle by $\phi$, the magnitude of the trust force by $T$ and the magnitude of the lift force by $L$. As we can see below, the later is not needed in the solution. The Forces acting on the ariplane during a dive are shown in the figure below.
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p1.png)

For the level flight $\phi=0$, and we have, by balancing the horizontal forces

$$
F_{d}=k v_{0}^{2}=T .
$$

For the dive we have, by balancing the forces acting parallel to the trajectory,

$$
F_{d}=k v^{2}=T+m g \sin \phi .
$$

By eliminating $T$ from the above equations we get

$$
v^{2}=v_{0}^{2}\left(1+\frac{m g}{k v_{0}^{2}} \sin \phi\right) .
$$

The maximum angle is obtained from the last equation by equating $v=c$ and solving for $\phi$ :

$$
\phi_{\max }=\arcsin \left(\frac{k \cdot\left(c^{2}-v_{0}^{2}\right)}{m g}\right) .
$$

## Grading:

- Correct force equations (0.5 pts)
- Correct expression for $v$ or $v^{2}$ ( $\mathbf{0 . 3 ~ p t s )}$
- Expressing the final answer (0.2 pts)
ii) The propagation speed of the radiation can be considered infinite compared to the speed of the airplane. Therefore, the radiation burst hits the plane at the same instant when the bomb detonates. The time it takes for the bomb to drop from altitude $H$ to $h$, without air resistance, is obtained from

$$
H-h=g \frac{t^{2}}{2}
$$

By solving for $t$ we have

$$
t=\sqrt{\frac{2(H-h)}{g}} \approx 41.6 \mathrm{~s} .
$$

## Grading:

- Understanding that the propagation speed of the radiation can be considered infinite compared to the speed of the plane (0.3 pts)
- Correct free fall equation (0.2 pts)
- Correct formula for $t$ (0.3 pts)
- Correct numerical answer (0.2 pts)
iii) The forces acting perpendicular to the plane's trajectory during a turn are shown in the figure below.
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p1.png)
Here

$$
F_{c}=m \frac{v^{2}}{R}
$$

is the centripetal force, and $R$ is the curvature radius of the trajectory. From the figure we get

$$
L \cos \alpha=m g ; \quad L \sin \alpha=m \frac{v^{2}}{R} .
$$

Since the maximum allowed lift-to-weight ratio is $n=2.5$, we have for this case

$$
L=\frac{m g}{\cos \alpha}=n m g .
$$

By solving the above equations with respect to $R$ and $\alpha$, we get the following values for the minimal curvature radius and for the corresponding bank angle of the airplane:

$$
\begin{aligned}
R & =\frac{v^{2}}{g \tan \alpha}=\frac{v^{2}}{g \sqrt{n^{2}-1}}= \\
& =1606.0 \mathrm{~m} \approx 1.6 \mathrm{~km} \\
\alpha & =\arccos \left(\frac{1}{n}\right) \approx 66.4^{\circ}
\end{aligned}
$$

## Grading:

- Correct force equations (0.3 pts)
- Correct understanding and use of $n$ (0.1 pts)
- Correct formula for $R$ (0.2 pts)
- Correct formula for $\alpha$ (0.2 pts)
- Correct numerical value for $R$ (0.1 pts)
- Correct numerical value for $\alpha$ (0.1 pts)
iv) As the problem text states, the air resistance acting on the bomb can be neglected. This means that the bomb's horizontal speed is always the same as the speed of the plane, $v=190 \mathrm{~m} / \mathrm{s}$. If the airplane keeps travelling straight after releasing the bomb, it will end up directly above the detonation point by the time the bomb explodes, leaving only the distance $H-h=8.5 \mathrm{~km}$ between the bomb and the airplane. Hypothetically, the best way to get as much distance between the bomb and the airplane would be if the plane turned around instantly and kept flying straight after that. This is clearly not possible, but it gives us the clue that the plane should start turning immediately after releasing the bomb, and the turn should be as sharp as possible, leaving us with the previously found curvature radius $R=1.6 \mathrm{~km}$. After the turn, it should fly straight so that the detonation point is directly behind it. The geometric construction of this trajectory is shown in the figure below.
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p1.png)

In the figure, $d$ is the horizontal distance the bomb travels before detonation,

$$
d=v t=v \sqrt{\frac{2(H-h)}{g}}=7909.4 \mathrm{~m} \approx 7.9 \mathrm{~km},
$$

and $\beta$ is the total turning angle. From the right triangle shown in the figure, we get

$$
\beta=2 \arctan \left(\frac{d}{R}\right) \approx 157^{\circ} .
$$

## Grading:

- Good and well explained overall analysis of the problem (even if it contains some mistaken assumptions and the suggested trajectory ends up being incorrect) (0.6 pts)
- Realising that the plane has to start turning immediately with the previously found turning radius $R$ (0.2 pts)
- Correct trajectory (0.6 pts)
- Good justification for the correct trajectory (0.5 pts)
- Correct formula for $d$ (0.2 pts)
- Correct numerical value for $d$ (0.2 pts)
- Correct formula for $\beta$ (0.5 pts)
- Correct numerical value for $\beta$ (0.2 pts)
v) Solution 1. Let $D$ be the distance from the detonation point to the airplane at the moment when the shockwave hits it, and let $z=H-h=8500 \mathrm{~m}$. We can divide the horizontal distance from the detonation point to the plane into three parts as shown in the figure below.
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p1.png)

In the figure, $s$ is the distance the plane files straight after the turn and before the bomb detonates,

$$
s=v \cdot\left(t-t_{\text {turn }}\right)=d-R \beta=3507.3 \mathrm{~m},
$$

and $x$ is the distance it flies straight while the shockwave travels. If the travelling time is $t_{0}$, then $x=v t_{0}$ and $D=u t_{0}$. Eliminating $t_{0}$ from these equations gives

$$
x=\frac{v}{u} D .
$$

From the Pythagorean theorem we have

$$
D^{2}=(d+s+x)^{2}+z^{2},
$$

or

$$
D^{2}=\left(a+\frac{v}{u} D\right)^{2}+z^{2},
$$

where we have eliminated $x$ and denoted $a=$ $d+s=2 d-R \beta$ for simplicity. The distance $D$ is obtained by solving this quadratic equation. The solution corresponding to our problem is

$$
\begin{gathered}
D=\frac{a u}{v} \cdot \frac{1+\sqrt{1+\left(\frac{u^{2}}{v^{2}}-1\right)\left(\frac{z^{2}}{a^{2}}+1\right)}}{\frac{u^{2}}{v^{2}}-1} \approx \\
\approx 27.9 \mathrm{~km} .
\end{gathered}
$$

Since the safe distance was 25 km, we can say that the airplane can escape the explosion.

Additional numerical values to help with the grading. Lenght of the turn: $R \beta=4.4 \mathrm{~km}$; the time required to make the turn: $t_{\text {turn }}=$ $R \beta / v=23.2$ s; the time to travel the distance $s: t-t_{\text {turn }}=41.6-23.2=18.4 \mathrm{~s}$; distance $x: x=v t_{0}=15.1 \mathrm{~km}$; total time from releasing the bomb to getting hit by the shockwave: $t+t_{0}=121.3 \mathrm{~s}$; Total horizontal distance: $d+s+x=26.5 \mathrm{~km}$; the parameter $a$ : $a=d+s=2 d-R \beta=11.4 \mathrm{~km}$.

## Grading:

- Correct understanding of the problem and correctly breaking it into smaller parts (even if the detailed calculations are incorrect) (0.2 pts)
- Correct expression and/or value for the distance $s$ ( $\mathbf{0 . 4} \mathbf{~ p t s}$ )
- Correct expression relating $x$ and $D$ (0.4 pts)
- Correct Pythagorean equation or analogous equation for the suggested trajectory (even if the trajectory found before was incorrect) (0.4 pts)
- Correct solution of the Pythagorean or corresponding equation (0.4 pts)
- Correct value $D=27.9 k m$ (0.2 pts)
- Vertical distance $z$ is not taken into account when calculating $D$ (-0.3 pts)

Solution 2. The beginning is the same as in Solution 1. Instead of directly calculating $D$, we can first calculate the travelling time $t_{0}$ of the shockwave. We have

$$
x=v t_{0}=190 t_{0} ; \quad D=u t_{0}=350 t_{0} ;
$$

$$
d=7909.4 \mathrm{~m} ; \quad s=3507.3 \mathrm{~m} .
$$

Inserting these into the Pythagorean theorem and simplifying, we get a quadratic equation for $t_{0}$ :

$$
t_{0}^{2}-50.2 t_{0}-2344.8=0 .
$$

The positive solution is $t_{0}=79.65 \mathrm{~s}$ and

$$
D=u t_{0} \approx 27.9 \mathrm{~km} .
$$

## Grading:

- Correct understanding of the problem and correctly breaking it into smaller parts (even if the detailed calculations are incorrect) (0.2 pts)
- Correct expression and/or value for the distance $s$ ( $\mathbf{0 . 4} \mathbf{~ p t s}$ )
- Correct expressions for $x$ and $D$ (0.4 pts)
- Correct equation for shockwave travelling time $t_{0}$ for the suggested trajectory (even if the trajectory found before was incorrect) (0.4 pts)
- Correct expression and/or value for $t_{0}$ for the suggested trajectory (0.4 pts)
- Correct numerical value $D=27.9 k m$ or close to it if approximations were used (0.2 pts)
- Vertical distance $z$ is not taken into account when calculating $D$ (-0.3 pts)

Solution 3. Same as Solution 1. but solving the Pythagorean equation approximately. For the first approximation we can take $z=0$. This gives us a simple linear equation for $D_{1}$ :

$$
D_{1}=a+\frac{v}{u} D_{1}
$$

with $a=d+s=2 d-R \beta=11.4 \mathrm{~km}$, and the solution

$$
D_{1}=\frac{a}{1-\frac{v}{u}}=25.0 \mathrm{~km} .
$$

The second approximation is

$$
D_{2}=\sqrt{\left(a+\frac{v}{u} D_{1}\right)^{2}+z^{2}}=26.4 \mathrm{~km} .
$$

This is enough to see that the plane is able to escape the explosion. The third approximation would be

$$
D_{3}=\sqrt{\left(a+\frac{v}{u} D_{2}\right)^{2}+z^{2}}=27.1 \mathrm{~km} .
$$

## Grading:

- Correct understanding of the problem and correctly breaking it into smaller parts (even if the detailed calculations are incorrect) (0.2 pts)

- Correct expression and/or value for the distance $s$ ( $\mathbf{0 . 4} \mathbf{~ p t s}$ )
- Correct expression relating $x$ and $D$ (0.4 pts)
- Correct Pythagorean equation or analogous equation for the suggested trajectory (even if the trajectory found before was incorrect) (0.4 pts)
- Correct approximate solution method of the Pythagorean or corresponding equation (0.4 pts)
- Correct value $D=26 \ldots 28 k m$ ( $\mathbf{0 . 2}$ pts)
- Vertical distance $z$ is not taken into account when calculating $D$ (-0.3 pts)
