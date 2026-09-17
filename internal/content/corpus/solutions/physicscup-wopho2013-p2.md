---
id: physicscup-wopho2013-p2
problem: physicscup-wopho2013-p2
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda
solution_source_url: https://physicscup.ee/archive/physics-cup-2013/
selection_note: "Jaan Kalda's official progressive hints plus the editorial worked derivation (the 'simplest way' steps) and Madhivanan Elango's concurrency proof, from the born-digital WoPhO-2013 'Problem 7' PDF. Contestants' full submissions (Szabó, Edtmair, Andronic, Chang, Kurenkov) are appended in the source and not transcribed here. Math reconstructed from the born-digital text layer; preserves the source's stated intermediate results."
verification_status: unverified
figure_files: []
---

## Solution (official hints + editorial commentary)
*Jaan Kalda's hints and editorial discussion for WoPhO-2013 Problem 7 (= Physics Cup 2013 Problem 2), transcribed faithfully from the born-digital source PDF. The contestants' full worked solutions (Andronic — instantaneous rotation centres; Chang; Kurenkov — friction-bound argument; the award solutions of Szabó and Edtmair) are appended in the source and NOT transcribed here.*

**Hint (after 1st week).** This problem can be solved by a brute-force approach, i.e. writing down two equations for two unknown angles. However, the solution can be significantly simplified once a useful geometrical fact is noticed: then, it is enough to write down only one equation for one unknown quantity.

**Hint (after 2nd week).** Typically in statics problems, it is convenient to start with a torque balance, because the origin for the balance equation can be chosen so that the arms of at least two forces become zero; also, you are free to choose which forces you want to disappear from your torque balance. In particular, if there are only three forces applied to a rigid body at equilibrium, the lines along which these forces act always intersect in a single point. Here, to derive the "geometrical fact" mentioned above, study the torque balance with respect to the intersection point of the lines along which two forces (e.g. the friction forces due to the 1st rail) are applied.

**Hint (after 3rd week) — the "to-do list".** Let the $x$-axis be along the rails, the $y$-axis the other horizontal axis, and $z$ the vertical one. Do not put $\alpha = 0$; instead neglect terms much smaller than $\alpha^2$ (e.g. using $\cos\alpha \approx 1 - \alpha^2/2$). Find the magnitudes of the friction forces using the torque balance in the $y$–$z$ plane. Study the torque balance of two friction forces in the $x$–$y$ plane (e.g. those due to the 1st rail) with respect to the intersection point $P$ of the lines defined by the remaining two friction forces. You should then notice that the position of $P$ defines the directions of all four friction forces. Write the $x$-directional force-balance equation using the distance $L$ of $P$ from the 1st rail as the single unknown; solve it using $\alpha \ll 1$ (be careful: $L$ has the same order of smallness as $\alpha^2$!). Once $L$ is known, the ring's speed follows from the distances between the instantaneous rotation centres of the ring (in the 1st-rail and 2nd-rail frames) and the centre of the ring. A numerically approximate answer can also be found by purely geometrical constructions (e.g. a GeoGebra applet), though the analytical exact result is much preferred.

### Editorial — concurrency of the four friction forces
*(After Madhivanan Elango's introductory argument — the simplest proof that the four forces point towards a single point.)*

Let the normal reactions on the moving rail be $N_1$ and on the stationary rail $N_2$, with friction forces opposite to the local velocity vectors and proportional to the normal reaction. Considering torques in the $y$–$z$ plane about the centre of the ring gives $N_1 R\cos\alpha = N_2 R\sin\alpha$... i.e. $N_1\cos\alpha = N_2\cos\beta$, hence $F_1\cos\alpha = F_2\cos\beta$.

Now consider torques about the point $P$, the intersection of $F_1$ and $F_2$: they must sum to zero. The two forces from the first rail are reflections of each other in the line of the rail, so their two torques about $P$ have the same sign; the only way their sum can vanish is if each vanishes — both must therefore pass through $P$, so **all four force-lines are concurrent at $P$.** (Note: for four forces on a rigid body at equilibrium this concurrency is not generic — unlike the three-force case.)

### Editorial — the worked "simplest way"
Using $F_1\cos\alpha = F_2\cos\beta$ with $\beta = \pi/3$ (so $\cos\beta = \tfrac12$), choose units with $F_1 = 1$, $F_2 = 2\cos\alpha$, and $R = 1$. With $|ST| \equiv y = 0.5\,\alpha^2$ and $\gamma = \delta + \pi/6$, where
$$\delta \approx \sin(\pi/6)\,\frac{x+y}{|BT|} = 0.5\tan(\pi/6)\,(x + 0.5\,\alpha^2).$$
The horizontal ($x$-directional) components of the forces are
$$F_{1x} = \frac{|AS|}{|AP|} \approx \frac{\alpha}{\sqrt{\alpha^2 + x^2}} = \left(1 + \tfrac{x^2}{\alpha^2}\right)^{-1/2} \approx 1 - \frac{x^2}{2\alpha^2},$$
$$F_{2x} = (2-\alpha^2)\sin\gamma \approx (2-\alpha^2)\big[0.5 + \cos(\pi/6)\,\delta\big] \approx (2-\alpha^2)\big[0.5 + 0.25(x + 0.5\alpha^2)\big] \approx 1 - 0.25\,\alpha^2 + 0.5\,x.$$
Denoting $z = x/\alpha^2$, the condition $F_{1x} = F_{2x}$ becomes
$$2z^2 + 2z - 1 = 0 \quad\Rightarrow\quad z = \tfrac12(\sqrt3 - 1)\ \ \text{(excluding the negative root)}, \qquad x = \tfrac12(\sqrt3 - 1)\,\alpha^2.$$
Introduce the instantaneous rotation centres $C_1$ (1st-rail frame) and $C_2$ (laboratory frame). From the similar right triangles $C_1AP$ and $ASP$, $|C_1P| \approx |C_1S| = |AS|^2/x = 1/z = \sqrt3 + 1$. Since $C_2$ is very close to the edge of the ring, $|C_2O| \approx 1$. In the 1st-rail frame the centre speed is $v_1 = -\omega|C_1O|$ (down) and in the lab frame $u = \omega|C_2O|$ (up); the difference gives $v = \omega(|C_1O| + |C_2O|)$, so the lab-frame speed of the ring's centre is
$$\boxed{\,u = \frac{v\,|C_2O|}{|C_1O| + |C_2O|} \approx \frac{v}{3 + \sqrt3}\,.}$$

### Editorial — awards
The best-solution awards went to the two first solutions (Szabó — brute force; Edtmair — geometric), split 1:2 in favour of Edtmair, since all later solutions arrived after the very detailed hints. Andronic was the only one to use the instantaneous rotation centres; Chang obtained a correction term describing the slow dependence on $\alpha$; Kurenkov showed that, assuming equal static and dynamic friction coefficients, the ring cannot stay at rest.
