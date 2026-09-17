---
id: inpho-2023-a4
source: inpho
native_id: "4. Electrostatic TikTok"
year: 2023
language: en
translated: false
topic: [electromagnetism, oscillations-and-waves]
subtopic: [electric-field, coulomb-force, torque, oscillations-mechanical]
difficulty: null
difficulty_norm: 5
math_tools: [calculus]
format: open-ended
core_ideas: []
estimated_time_min: 90
points: "1"
has_solution: true
has_figure: true
figure_files: [inpho-2023-a4-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/inpho/2023.mmd; figures require local harvest"
verification_status: pending
solution_language: en
techniques: [exploit-symmetry, stability-analysis]
---

## 4. Electrostatic TikTok

Consider a fixed infinite vertical thin rod (shown by the red color in the figure below) of linear charge density $\lambda$ along the $z$-axis at the origin (see figure below). A uniformly charged ring of total charge $Q$, mass $M$, and radius $a$ is placed with its center at the origin in the $x-y$ plane. Point P is an arbitrary point on the ring. The projection of point P on $x-y$ plane makes an angle $\theta$ with respect to the $x$-axis in the anticlockwise direction as seen from the top.

The ring is now given an initial angular velocity $\omega_{0}$ about the $x$-axis. We define the angle $\alpha$ which the plane of the ring makes with the $x-y$ plane. This is illustrated by drawing line segment AB in the plane of the ring. Initially $\alpha=0$. Ignore gravity.
![](inpho-2023-a4-fig01.png)
You may find the following differentiation useful

$$
D=\frac{d}{d \theta}\left[\tan ^{-1}(q \tan \theta)\right]=\frac{1}{1+(q \tan \theta)^{2}}\left[q\left(\sec ^{2} \theta\right)\right]
$$

(a) [1 marks] State an expression for the electric field $\left(\vec{E}_{0}\right)$ due to the infinite rod at a point on the ring when $\alpha=0$ in terms of $x, y$ and $\theta$, and related quantities.
(b) [2 marks] At some instant the ring makes an angle $\alpha$. Derive an expression for the electric field $\vec{E}$ due to the infinite rod at a point on the ring in terms of $\theta$, and $\alpha$.
(c) [1 marks] Find the net force $\vec{F}$ acting on the ring.
(d) [5 marks] Find the net torque $\vec{\tau}$ acting on the ring in terms of $\alpha$ and the constants only. Qualitatively plot torque as a function of $\alpha$.
(e) [2 marks] Let the ring is in equilibrium with respect to $\alpha=0$. Derive an expression for the time period $T$ of small oscillations of the ring in terms of $\lambda$, and $Q$. Take $\lambda=0.1 \mu \mathrm{C} / \mathrm{m}$, $Q=2.0 \mu \mathrm{C}, M=50.0 \mathrm{~g}$, radius $a=5.0 \mathrm{~cm}$, and $\omega_{0}=1.0 \mathrm{rad} / \mathrm{s}$. Calculate $T$.
(f) [2.5 marks] Find an expression for the potential energy $U$ of the ring in terms of $\alpha$. Qualitatively plot $U$ as a function of $\alpha$. Take the zero of potential energy to be at $\alpha=0$.
(g) [2.5 marks] Obtain the expression of maximum value of $\alpha\left(\alpha_{\text {max }}\right)$ in terms of $\omega_{0}$. Calculate $\alpha_{\text {max }}$.
