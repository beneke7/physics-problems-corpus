---
id: physicscup-2025-p5
problem: physicscup-2025-p5
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Eric Wang
solution_source_url: https://physicscup.ee/wp-content/uploads/2025/09/EricWang.pdf
selection_note: "Selected as the cleanest and most elegant published solution (LaTeX-compiled, 2 pp, single velocity-circle/hodograph diagram). Kalda's comment singles it out: \"Eric Wang's type-I solution is clean and concise, featuring a unique dynamical proof of the hodograph\" and \"provided a beautiful and unique proof from the most fundamental principles of dynamics.\""
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2025-p5-sol-1.png]
---

## Solution
*Student solution by Eric Wang, transcribed faithfully from the LaTeX source. The competition published no official solution. The diagram is the author's. Notation: $\vec r$ is the position vector, $\hat r = \langle\cos\theta,\sin\theta\rangle$ its unit vector, $A$ the swept area, $L$ the (specific) angular momentum, and $\Gamma$ the velocity circle; $X$ is the velocity-space origin and $O$ its centre.*

**Lemma 1.** *The velocity vector of the satellite traces a circle in velocity space.*

*Proof.* Place the planet at the origin. The swept area $A$ and angle $\theta$ of the position vector $\vec r$ are related by $dA = \tfrac12 r^2\,d\theta$. By Newton's law of gravitation,
$$
d\vec v = -\frac{GM}{r^2}\hat r\,dt
= -\frac{GM}{r^2}\hat r\,\frac{dA}{L}
= -\frac{GM}{2L}\hat r\,d\theta
= -\frac{GM}{2L}\langle\cos\theta,\sin\theta\rangle\,d\theta,
$$
where we used Kepler's second law of the form $L = \frac{dA}{dt}$. Integrating, we get
$$
\vec v = \vec v_0 - \frac{GM}{2L}\langle\sin\theta, -\cos\theta\rangle,
$$
which traces a circle, as desired. We call this circle the *velocity circle*. $\qquad\square$

The velocity circle $\Gamma$ of the satellite and the points $A$, $B$, $C$ in velocity space are shown in Figure 1. By the Pythagorean Theorem, we find $AB = \sqrt{v_1^2 + v_2^2}$ and $BC = \sqrt{v_2^2 + v_3^2}$. Thus, the radius of $\Gamma$ is given by
$$
R = \frac{abc}{4[ABC]}
= \frac{(v_1 + v_3)\sqrt{v_1^2 + v_2^2}\,\sqrt{v_2^2 + v_3^2}}{2v_1 v_2 + 2v_2 v_3}
= \frac{\sqrt{(v_1^2 + v_2^2)(v_2^2 + v_3^2)}}{2v_2}.
$$

![Figure 1: Diagram of the velocity circle Γ. The origin is located at X. The points A, B, C are the tips of the velocity vectors v₁, v₂, v₃ from X; A' and C' are the antipodal/reflected points used for the power-of-a-point argument, R is the circumradius (O the centre), d = OX, and v_max = R+d, v_min = R−d.](../../../../../sources/physicscup/figures/physicscup-2025-p5-sol-1.png)

Let $v_{\min}$ and $v_{\max}$ be the minimum and maximum velocities of the satellite, respectively. By conservation of angular momentum, these velocities occur at the apoapsis and periapsis, with $v_{\min} r_{\max} = v_{\max} r_{\min}$. Hence, the eccentricity of the orbit is given by
$$
e = \frac{r_{\max} - r_{\min}}{r_{\max} + r_{\min}}
= \frac{v_{\max} - v_{\min}}{v_{\max} + v_{\min}}
= \frac{2d}{2R}
= \frac{d}{R}.
$$

**Lemma 2 (Power of a Point).** $R^2 - d^2 = v_1 v_3$.

*Proof.* Note that
$$
\triangle AXC' \sim \triangle A'XC
\implies \frac{v_1}{R - d} = \frac{R + d}{v_3}.
$$
Rearranging gives the desired result. $\qquad\square$

Hence, we can directly find
$$
\boxed{\;\frac{d}{R} = \sqrt{1 - \frac{v_1 v_3}{R^2}} = \sqrt{1 - \frac{4 v_1 v_2^2 v_3}{(v_1^2 + v_2^2)(v_2^2 + v_3^2)}}.\;}
$$

For the given values in the problem, the eccentricity is $\sqrt{\frac{17}{65}} \approx 0.5114$.

---
*Re-derivation check (consistent): From the hodograph, A, B, C are the tips of $\vec v_1,\vec v_2,\vec v_3$ from X. Since $\vec v_2\perp\vec v_1$ and $\vec v_3$ is antiparallel to $\vec v_1$ (so also $\perp\vec v_2$), the chords are $AB=\sqrt{v_1^2+v_2^2}$, $BC=\sqrt{v_2^2+v_3^2}$, $AC=v_1+v_3$; the altitude from B to AC is $v_2$, so $[ABC]=\tfrac12(v_1+v_3)v_2$ and $R=\frac{abc}{4[ABC]}=\frac{\sqrt{(v_1^2+v_2^2)(v_2^2+v_3^2)}}{2v_2}$, matching the author. The power of the interior point X along chord AC gives $XA\cdot XC=v_1 v_3=R^2-d^2$ (Lemma 2). With $v_{\max}=R+d$, $v_{\min}=R-d$, $e=d/R=\sqrt{1-v_1v_3/R^2}=\sqrt{1-\frac{4v_1v_2^2v_3}{(v_1^2+v_2^2)(v_2^2+v_3^2)}}$. For $(v_1,v_2,v_3)=(1,2,3)$: $\frac{4\cdot1\cdot4\cdot3}{5\cdot13}=\frac{48}{65}$, so $e=\sqrt{1-48/65}=\sqrt{17/65}\approx0.5114$, reproducing the author's boxed result.*
