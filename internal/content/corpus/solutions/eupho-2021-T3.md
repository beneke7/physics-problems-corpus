---
id: eupho-2021-T3
problem: eupho-2021-T3
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2021
verification_status: unverified
figure_files: []
---

## Solution

### Part (a) — Qualitative explanation

If a ray from a point $P$ on the thread is refracted at point $Q$ on the surface of the ball towards a very distant point $A$ (the camera aperture), the ray must remain in the plane $PQO$ (where $O$ is the centre of the sphere). Hence all rays from $P$ that reach $A$ must lie in the plane $POA$, and the geometry is two-dimensional in that plane.

The deflection angle $\gamma \equiv 2\alpha - \beta$ (where $\alpha$ is the angle of incidence and $\beta$ the angle of refraction, related by Snell's law $n\sin\alpha = \sin\beta$) is a non-monotonic function of $\alpha$ that reaches a maximum $\gamma_0$. Consequently:

- If $\angle OPA < \gamma_0$, there are **two** refraction points $Q_1$ and $Q_2$ on the ball's surface from which a ray from $P$ can reach $A$, so a single point $P$ gives **two images**.
- If $\angle OPA > \gamma_0$, no rays from $P$ can reach $A$ (the point is invisible).
- If $\angle OPA = \gamma_0$, the two images merge into a single image $Q_0$.

As the camera sweeps along a short segment of thread, each thread point with $\angle OPA < \gamma_0$ contributes two images. At the two endpoints of the visible arc, the images merge. This traces out a **closed loop** in the photo.

A ray diagram showing two rays from a single point $P$, both refracting at the ball surface at different angles and converging on the distant aperture $A$, illustrates this geometry.

### Part (b) — Coefficient of refraction $n_R$ for red light

The extremum condition $d\gamma/d\alpha = 0$ gives $2\,d\alpha = d\beta$, which combined with the differential of Snell's law ($n\cos\alpha\,d\alpha = \cos\beta\,d\beta$) yields

$$
n\cos\alpha_0 = 2\cos\beta_0.
\tag{9}
$$

Combined with $n\sin\alpha_0 = \sin\beta_0$:

$$
n^2 = \sin^2\!\beta_0 + 4\cos^2\!\beta_0 = 4 - 3\sin^2\!\beta_0.
$$

The merge point $Q_0$ is found in the photo as the point where the blue ellipse (the red-light image of the thread) is tangent to a radius of the ball. From the photo, $\sin\beta_0 = h/R$ where $h$ is the perpendicular distance from the ball centre $O$ to the line $Q_0 A$, measurable in the photo. The measurement gives $h/R \approx 0.765$, so

$$
\boxed{n_R = \sqrt{4 - 3 \times 0.765^2} \approx 1.50.}
$$

### Part (c) — Dispersion $\Delta n = n_V - n_R$

To avoid the large relative uncertainty from comparing two similar lengths $|OQ_0|$ and $|OQ_0''|$ (where $Q_0''$ is the violet merge point), use the **width** $|ST|$ of the blue ellipse instead. Here $S$ and $T$ are the two red-light rays from the same point that bracket the extremum for violet; they satisfy $\gamma_{\mathrm{red}}(S) = \gamma_{\mathrm{red}}(T) = \gamma_{\mathrm{violet,extremum}}$.

Setting $\alpha_R = \alpha_V + \delta$ (small), equation (10) in the source gives $\beta_R = \beta_V + 2\delta$. Expanding Snell's law for red in Taylor series and using the extremum condition (9) for violet, the linear-in-$\delta$ terms cancel, leaving

$$
\Delta n = \frac{3n_V\,\delta^2}{2}.
\tag{14}
$$

The width of the ellipse satisfies $|ST|/R = \sin\beta_{R1} - \sin\beta_{R2} \approx 4\delta\cos\beta_V$, so $\delta = |ST|/(4R\cos\beta_V)$. Thus

$$
\Delta n = \frac{3n_V}{2}\cdot\frac{|ST|^2}{16R^2\cos^2\!\beta_V}
= \frac{3n_V\,|ST|^2}{32(R^2 - h^2)}.
$$

Measuring $|ST| \approx 0.20R$ from the photo:

$$
\boxed{\Delta n \approx 0.013.}
$$

### Alternative (Solution 2)

One may work in the plane perpendicular to the thread containing $O$ and the camera, where $\gamma = \arcsin(h/R) - 2\arcsin(h/(nR))$ as a function of the projected distance $h$ from the ball centre. This function is non-monotonic for $n < 2$, and the two values $h_1, h_4$ at which it equals the extremal value for red (and $h_2, h_3$ for violet) can be read from the photo. Solving the resulting transcendental equations gives $n_R \approx 1.51$ and $\Delta n \approx 0.0145$.
