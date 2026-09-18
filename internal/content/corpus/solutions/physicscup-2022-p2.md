---
id: physicscup-2022-p2
problem: physicscup-2022-p2
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Vlad-Ștefan Oros
solution_source_url: https://physicscup.ee/wp-content/uploads/2022/P2solutions/VSO_Problem_2.pdf
selection_note: "Chosen over the top-ranked Li-Chen hodograph solution (17 pp) as a shorter, more elegant LaTeX-compiled alternative (8 pp). Kalda's comment: \"A really nice and thorough solution based on the calculus of variations, with a generalization to regular polygons.\""
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2022-p2-sol-1.png]
---

## Solution
*Student solution by Vlad-Ștefan Oros (Romania), transcribed faithfully from the LaTeX source. The competition published no official solution. The author measures the acceleration angle $\theta$ from the negative $y$-axis (counter-clockwise positive); $\theta_0$ is its value at the start point $A$.*

### 1. Initial considerations

The only length scale is the side $a$ and the only acceleration scale is the maximal friction deceleration $\mu g$ (vertical gravity does not affect the horizontal motion). By dimensional analysis the minimal loop time must have the form
$$ T_m = C\sqrt{\frac{a}{\mu g}} \equiv C\tau, \tag{1} $$
with $C$ a constant to be found.

Several observations fix the geometry of the optimal trajectory:

- By (1) the time decreases with $a$, so the optimal trajectory is as tight as possible: it must **touch all three vertices** (otherwise one could shrink it homothetically and save time).
- A kink would force speed $0$ there (the speed's derivative is continuous), wasting time; so the trajectory is **kink-free**.
- Friction can always be used either to speed up or to tighten the path, both of which shorten the time; hence the acceleration magnitude is **always maximal, $=\mu g$**.
- Assuming the optimum is unique, it should inherit the symmetry of the triangle: **3-fold rotational symmetry** and **mirror symmetry** about each axis. Call this the *assumption of symmetry*.

Under this assumption, with $T_\text{side}$ the vertex-to-vertex time, $T = 3T_\text{side}$. At a vertex the velocity makes equal angles with the path on both sides, which together with the no-kink condition forces the velocity there to be **tangential**, i.e. at $60^\circ$ to the next side. Further consequences:

- The speed at every vertex is the same, $v_0$.
- The trajectory is symmetric about the perpendicular bisector of each side; at the midpoint $M$ the velocity is tangential ($v_y = 0$ there).
- The $A\!\to\!M$ time equals the $M\!\to\!B$ time, call it $T_0$. Thus $T_m = 6T_0$, and the problem reduces to minimizing $T_0$ subject to:
  - $\vec v_A$ at $60^\circ$ from side $AB$;
  - $M$ on the perpendicular bisector, $x_M = a/2$;
  - $v_{y}=0$ at $M$;
  - acceleration magnitude always $\mu g$.

![Figure 1: An example trajectory of the boy from A to B. The velocity at A makes 60° with the side; C is a generic point; M is the midpoint, where the velocity is tangential (horizontal).](../../../../../sources/physicscup/figures/physicscup-2022-p2-sol-1.png)

### 2. Minimization of the time

*From here on only the motion from $A$ to $M$ is considered.* With $\theta(t)$ the angle of the acceleration from the negative $y$-axis (CCW positive), $t=0$ at $A$ and $t=T_0$ at $M$, the equations of motion are
$$ \dot v_y = -\mu g\cos\theta, \qquad \dot v_x = \mu g\sin\theta. \tag{2} $$

**Expressing the integrals.** Integrating the first from $0$ to $T_0$,
$$ v_{y,M} - v_{y,A} = -\mu g\int_0^{T_0}\cos\theta\,dt. \tag{3} $$
With $v_{y,A} = v_0\sin 60^\circ = \tfrac{\sqrt3}{2}v_0$ and $v_{y,M}=0$,
$$ \boxed{\,I_1 \equiv \int_0^{T_0}\cos\theta\,dt = \frac{\sqrt3}{2}\frac{v_0}{\mu g}.\,} \tag{4} $$
Integrating the second twice, with $v_{x,A} = v_0\cos 60^\circ = \tfrac12 v_0$,
$$ x_M - x_A = \tfrac12 v_0 T_0 + \mu g\int_0^{T_0}\!\!\int_0^{t}\sin\theta\,dt'\,dt \equiv \tfrac12 v_0 T_0 + \mu g\iint_0^{T_0}\sin\theta\,dt^2. \tag{5,6} $$
Since $x_A=0$, $x_M = a/2$,
$$ \boxed{\,I_2 \equiv \iint_0^{T_0}\sin\theta\,dt^2 = \frac{a}{2\mu g} - \frac12\frac{v_0 T_0}{\mu g}.\,} \tag{7} $$

**Maximizing $I_2$.** For fixed $v_0,T_0$, (4) constrains $\theta(t)$ while (7) (through $a$) is what we want to make large: maximizing $a$ at fixed $T$ is equivalent to minimizing $T$ at fixed $a$. So we maximize $I_2$ subject to $I_1$ fixed. Under $\theta\to\theta+\epsilon$, fixing $I_1$ requires
$$ \int_0^{T_0}\epsilon(t)\sin\theta(t)\,dt = 0, \tag{9} $$
while stationarity of $I_2$ gives $\iint_0^{T_0}\epsilon\cos\theta\,dt^2 = 0$, i.e.
$$ \int_0^{T_0}\!\!\int_0^t \epsilon(t')\cos\theta(t')\,dt'\,dt = 0. \tag{11} $$
The integrand depends on $t$ only through the upper limit, so a term $\epsilon(t')\cos\theta(t')$ is counted for every $t>t'$, i.e. weighted by $T_0-t'$:
$$ \int_0^{T_0}(T_0-t)\,\epsilon(t)\cos\theta(t)\,dt = 0. \tag{12,13} $$
For (13) to hold for every $\epsilon$ obeying (9), the multiplier of $\epsilon$ must be proportional to $\sin\theta$:
$$ (T_0-t)\cos\theta(t) = A\sin\theta(t) \;\Longrightarrow\; \boxed{\,\tan\theta(t) = \frac{T_0-t}{A}\,} \tag{14} $$
for some constant $A$. This is the optimal control law.

### 3. Calculation of the minimal time

Define $\theta_0 = \arctan(T_0/A)$, the initial value of $\theta$. Then
$$ \tan\theta = \frac{T_0-t}{T_0}\tan\theta_0. \tag{15,16} $$
From (14),
$$ \cos\theta = \frac{A}{\sqrt{A^2+(T_0-t)^2}} \;\Longrightarrow\; I_1 = \frac12 A\ln\!\left(\frac{2T_0\big(\sqrt{A^2+T_0^2}+T_0\big)}{A^2}+1\right) = \frac{T_0}{2}\cot\theta_0\,\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right), \tag{17} $$
$$ \sin\theta = \frac{T_0-t}{\sqrt{A^2+(T_0-t)^2}} \;\Longrightarrow\; \int_0^t\sin\theta\,dt = \sqrt{A^2+T_0^2}-\sqrt{A^2+(T_0-t)^2}, \tag{18} $$
and integrating once more,
$$ I_2 = \frac12\!\left(T_0\sqrt{A^2+T_0^2} - A^2\ln\!\left(\frac{\sqrt{A^2+T_0^2}+T_0}{A}\right)\right) = \frac{T_0^2}{4}\!\left(\frac{2}{\sin\theta_0} - \cot^2\theta_0\,\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right). \tag{19} $$

Equation (4) then gives
$$ \frac{T_0}{2}\cot\theta_0\,\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right) = \frac{\sqrt3}{2}\frac{v_0}{\mu g}, \tag{20} $$
and equation (7) gives
$$ \frac{T_0^2}{4}\!\left(\frac{2}{\sin\theta_0} - \cot^2\theta_0\,\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right) = \frac{a}{2\mu g} - \frac12\frac{v_0 T_0}{\mu g}. \tag{21} $$

Together (20)–(21) determine $T_0$ and $\theta_0$ in terms of $a,\mu,g,v_0$. But we want the minimum over $v_0$: at the minimum $dT_0/dv_0 = 0$, so on both (20) and (21) the $v_0$-derivative of the left side comes only through $\theta_0$:
$$ \frac{T_0}{2}\frac{d}{dv_0}\!\left[\cot\theta_0\,\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right] = \frac{\sqrt3}{2}\frac{1}{\mu g}, \tag{22} $$
$$ \frac{T_0}{4}\frac{d}{dv_0}\!\left[\frac{2}{\sin\theta_0} - \cot^2\theta_0\,\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right] = -\frac12\frac{1}{\mu g}. \tag{23} $$
Dividing (22) by (23) and cancelling $d\theta_0/dv_0$,
$$ \csc\theta_0\!\left(2 - \csc\theta_0\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right) = -\sqrt3\,\csc\theta_0\cot\theta_0\!\left(-2 + \csc\theta_0\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right), \tag{24,25} $$
and since $\csc\theta_0\neq0$,
$$ \left(2 - \csc\theta_0\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right)\!\left(1 - \sqrt3\cot\theta_0\right) = 0. \tag{27} $$
The first factor vanishes only at $\theta_0=0$ (excluded), so
$$ \sqrt3\cot\theta_0 = 1 \;\Longrightarrow\; \theta_0 = \arctan\sqrt3 \;\Longrightarrow\; \boxed{\,\theta_0 = \frac{\pi}{3}.\,} \tag{28} $$

Substituting $v_0$ from (20) into (21),
$$ \frac{a}{\mu g} = \frac{T_0^2}{2}\!\left(\frac{2}{\sin\theta_0} - \cot^2\theta_0\,\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right) + \frac{T_0^2}{\sqrt3}\cot\theta_0\,\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right), \tag{29} $$
or
$$ T_0 = \frac{1}{\sqrt{\dfrac{1}{\sin\theta_0} - \dfrac12\cot^2\theta_0\,\ln\!\left(\dfrac{1+\sin\theta_0}{1-\sin\theta_0}\right) + \dfrac{1}{\sqrt3}\cot\theta_0\,\ln\!\left(\dfrac{1+\sin\theta_0}{1-\sin\theta_0}\right)}}\sqrt{\frac{a}{\mu g}}. \tag{30} $$
With $\theta_0 = \pi/3$ this evaluates to
$$ T_0 = \sqrt{\frac{6}{4\sqrt3 + \ln\!\left(7 + 4\sqrt3\right)}}\,\sqrt{\frac{a}{\mu g}} \approx 0.7921\sqrt{\frac{a}{\mu g}}, $$
so that, finally,
$$ T_m = 6T_0 \;\Longrightarrow\; \boxed{\,T_m = 4.753\sqrt{\frac{a}{\mu g}}.\,} $$

### 4. Appendix: generalization to a regular $N$-gon

Defining $T_0$ analogously, now $T_m = 2N T_0$ and $\vec v_A$ makes angle $\pi/N$ with the side $AB$. The integrals become
$$ I_1 = \frac{v_0}{\mu g}\sin\frac{\pi}{N}, \qquad I_2 = \frac{a}{2\mu g} - \frac{v_0 T_0}{\mu g}\cos\frac{\pi}{N}. \tag{32,33} $$
The variational result (14) and the $\theta_0$-expressions (17),(19) are unchanged. Running the same minimization,
$$ \csc\theta_0\!\left(2 - \csc\theta_0\ln\!\left(\frac{1+\sin\theta_0}{1-\sin\theta_0}\right)\right)\!\left(1 - \tan\frac{\pi}{N}\cot\theta_0\right) = 0 \;\Longrightarrow\; \boxed{\,\theta_0 = \frac{\pi}{N}.\,} \tag{37,38,39} $$
Then $I_2 = \dfrac{a}{2\mu g} - I_1 T_0\cot\dfrac{\pi}{N}$ yields
$$ T_0 = \frac{1}{\sqrt{\dfrac{1}{\sin\frac{\pi}{N}} + \dfrac12\cot^2\frac{\pi}{N}\,\ln\!\left(\dfrac{1+\sin\frac{\pi}{N}}{1-\sin\frac{\pi}{N}}\right)}}\sqrt{\frac{a}{\mu g}}, \tag{42} $$
$$ T_m = 2N T_0 = \frac{2N}{\sqrt{\dfrac{1}{\sin\frac{\pi}{N}} + \dfrac12\cot^2\frac{\pi}{N}\,\ln\!\left(\dfrac{1+\sin\frac{\pi}{N}}{1-\sin\frac{\pi}{N}}\right)}}\sqrt{\frac{a}{\mu g}}. \tag{43} $$

| $N$ | $T_m$ (in units of $\sqrt{a/\mu g}$) |
|----|----|
| 2 | 4.000 |
| 3 | 4.753 |
| 5 | 5.794 |
| 10 | 7.992 |
| 50 | 17.73 |

(The $N=2$ value $T_m = 4\sqrt{a/\mu g}$ is the limit $N\to 2$: the "house" degenerates to a segment and the boy accelerates then decelerates along it, stopping at each end.)

**The limit $N\to\infty$.** With $\pi/N\ll 1$, $\sin\frac{\pi}{N}\simeq\frac{\pi}{N}$, $\cot\frac{\pi}{N}\simeq\frac{N}{\pi}$ and $\ln\!\left(\frac{1+\sin\frac{\pi}{N}}{1-\sin\frac{\pi}{N}}\right)\simeq 2\frac{\pi}{N}$ (44,45), so
$$ T_m \simeq \frac{2N}{\sqrt{\frac{N}{\pi} + \frac12\frac{N^2}{\pi^2}2\frac{\pi}{N}}}\sqrt{\frac{a}{\mu g}} \;\Longrightarrow\; T_m \simeq \sqrt{2N\pi}\,\sqrt{\frac{a}{\mu g}}. \tag{46} $$
With circumradius $R$, $a = 2R\sin\frac{\pi}{N}\simeq \frac{2\pi R}{N}$ (47), giving
$$ T_m \simeq 2\pi\sqrt{\frac{R}{\mu g}}, \tag{48} $$
the time to traverse a circle of radius $R$ at maximal friction, as expected.

---
*Re-derivation check (consistent): with $\theta_0=\pi/3$ one has $\sin\theta_0=\tfrac{\sqrt3}{2}$, $\cot\theta_0=\tfrac{1}{\sqrt3}$, $\ln\!\frac{1+\sin\theta_0}{1-\sin\theta_0}=\ln\frac{2+\sqrt3}{2-\sqrt3}=\ln(7+4\sqrt3)\approx2.6339$. The denominator of (30) is $\frac{1}{\sin\theta_0}-\frac12\cot^2\theta_0 L+\frac{1}{\sqrt3}\cot\theta_0 L = \frac{2}{\sqrt3} - \frac{1}{6}L + \frac{1}{3}L = \frac{2}{\sqrt3}+\frac{L}{6} = \frac{4\sqrt3+L}{6}$, so $T_0=\sqrt{6/(4\sqrt3+\ln(7+4\sqrt3))}\sqrt{a/\mu g}=0.79213\sqrt{a/\mu g}$ and $T_m=6T_0=4.7528\sqrt{a/\mu g}$, matching the author's boxed $4.753$ and the $N=3$ table entry. The variational optimal-control argument is the author's.*
