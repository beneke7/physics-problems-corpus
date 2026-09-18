---
id: physicscup-2022-p1
problem: physicscup-2022-p1
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Eddie Chen and Zhening Li
solution_source_url: https://physicscup.ee/wp-content/uploads/2022/P1solutions/ZheningPhysics_Cup_2022_Problem_1.pdf
selection_note: "Selected as the most machine-readable + elegant of 7 published solutions (LaTeX-compiled). Kalda's comment: a really concise proof of B=-2H, based on the uniqueness of the solution."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2022-p1-sol-1.png, physicscup-2022-p1-sol-2.png]
---

## Solution
*Student solution by Eddie Chen and Zhening Li (LaTeX source transcribed faithfully). The competition published no official solution; this is one of the awarded submissions.*

**Lemma 1.** If a magnetic sphere is placed in an external uniform magnetic field $B_0$ pointing in the $z$-direction, the sphere becomes uniformly magnetized with uniform $B$ and $H$ inside the ball. They point in the direction of $B_0$ and satisfy
$$ B + 2\mu_0 H = 3B_0. \tag{1} $$

**Proof.** First, note that
$$ H = \frac{B}{\mu_0} - M, $$
$$ \nabla\times H = \frac{1}{\mu_0}\nabla\times B - \nabla\times M = J + \epsilon_0\dot{E} - J_b = J_f, $$
$$ \nabla\times H = 0, \tag{2} $$
using $\dot{E}=0$ (the system is static) and free current density $J_f=0$. Recall also Gauss's law for magnetism,
$$ \nabla\cdot B = 0. \tag{3} $$

In addition to (2) and (3), there is a direct relationship between $H$ and $B$ determined by the material's properties within the ball, and given by $H = B/\mu_0$ outside. The fields tend to the externally applied field $B_0$ at infinity. These conditions let us solve for $B$ and $H$. A solution is described as follows.

1. In the region $r < R$, the $B$-field and $H$-field are uniform and point in the $z$-direction.
2. In the region $r > R$, the $B$-field is the superposition of the externally applied field $B_0$ and the field $B_m$ of a magnetic dipole $m$ at $r=0$ pointing in the $z$-direction.

![Figure 1: H-field (a) and B-field (b) at the surface of the ball, decomposed at angle $\theta$.](../../../../../sources/physicscup/figures/physicscup-2022-p1-sol-1.png)

Equations (3) and (2) are satisfied for $r<R$ and $r>R$, and the boundary conditions hold since the dipole field tends to zero at infinity. It remains to check the interface conditions.

(2) gives that $H_\parallel$ is continuous across the interface. For a point on the interface at angle $\theta$ from the $z$-direction (Figure 1a):
$$ \mu_0 H_{\parallel 1} = \mu_0 H_{\parallel 2} = B_{\parallel 2} $$
$$ \mu_0 H\sin\theta = B_0\sin\theta + B_{m\parallel} $$
$$ \mu_0 H\sin\theta = B_0\sin\theta - \frac{\mu_0 m\sin\theta}{4\pi R^3} $$
$$ \mu_0 H = B_0 - \frac{\mu_0 m}{4\pi R^3}. \qquad (H := \text{H-field inside the ball}) \tag{4} $$

(3) gives that $B_\perp$ is continuous across the interface. For a point at angle $\theta$ (Figure 1b):
$$ B_{\perp 1} = B_{\perp 2} $$
$$ B\cos\theta = B_0\cos\theta + B_{m\perp} $$
$$ B\cos\theta = B_0\cos\theta + \frac{\mu_0 m\cos\theta}{2\pi R^3} $$
$$ B = B_0 + \frac{\mu_0 m}{2\pi R^3}. \qquad (B := \text{B-field inside the ball}) \tag{5} $$

Eliminating $m$ between (4) and (5) gives
$$ B + 2\mu_0 H = 3B_0, $$
as desired. $\qquad\blacksquare$

To find the full $B$- and $H$-fields, one determines the interior $(H,B)$ from (1) together with the material relation between $B$ and $H$ (the hysteresis curve); then $m$ follows from (4) or (5), fixing the exterior fields.

**Applying to the problem.** The ball is first saturated by a large external field, so it follows the hysteresis curve as the external field is removed. With the external field fully removed ($B_0=0$), Lemma 1 gives
$$ B + 2\mu_0 H = 0, $$
which on the graph is the line $l$ of slope $-2$ through the origin (Figure 2). Its intersection with the hysteresis curve gives the ball's $(H,B)$ after removal: $B = 0.95\ \text{T}$ at $20\,^\circ\text{C}$.

When the ball is heated to $120\,^\circ\text{C}$, it descends along $l$ until it meets the $120\,^\circ\text{C}$ hysteresis curve, where $B' = 0.48\ \text{T}$. So the decrease in flux density inside the ball is
$$ B - B' = 0.47\ \text{T}. $$

Since $B + 2\mu_0 H = 0$ and $H = B/\mu_0 - M$, we get $B + 2\mu_0(B/\mu_0 - M) = 0$, i.e. $3B - 2\mu_0 M = 0$, so
$$ M = \frac{3}{2\mu_0}B. $$

Thus the decrease in magnetization is
$$ M - M' = \frac{3}{2\mu_0}(B - B') = 5.6\times 10^5\ \text{A/m}. $$

Finally, since the magnetic dipole moment is $m = VM = \tfrac{4}{3}\pi R^3 M$, the decrease in dipole moment is
$$ m - m' = \frac{4}{3}\pi R^3 (M - M') = 2.4\ \text{A·m}^2. $$

![Figure 2: the two hysteresis curves (20 °C and 120 °C) with the line $l$ of slope $-2$ through the origin marking the working points.](../../../../../sources/physicscup/figures/physicscup-2022-p1-sol-2.png)

---
*Re-derivation check (consistent): from the graph read-offs $B=0.95$ T, $B'=0.48$ T, the chain $B-B'=0.47$ T → $M-M'=\tfrac{3}{2\mu_0}(B-B')=5.6\times10^5$ A/m → $m-m'=\tfrac43\pi R^3(M-M')=2.35\approx2.4$ A·m² reproduces all published values. The graph read-offs themselves depend on the figure and are not independently verified.*
