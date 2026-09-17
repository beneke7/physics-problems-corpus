---
id: eupho-2021-T2
problem: eupho-2021-T2
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

Imagine that the side of the cylinder is cut along the generatrix $AB$ passing through point $P$ (the pulled point of the loop), and then the side (including the loop) is unfolded into a flat rectangle. Points $A$ and $A'$, $B$ and $B'$, $P$ and $P'$ are identified pairwise. Introduce a Cartesian coordinate system on this unfolded plane: origin at point $O$ (the top point of the thread on the unfolded surface), $z$-axis parallel to the cylinder axis (directed downwards), $x$-axis horizontal (perpendicular to $z$).

Consider the forces acting on a small piece of the thread with horizontal projection $\Delta x$. These are the tensions at both ends, the normal force $\Delta N$, and the friction force $\Delta f$ from the cylinder. On the verge of slipping, the direction of $\Delta f$ is parallel to the $z$-axis.

**$x$-component of tension is constant.** Since the small piece of thread is in equilibrium, the $x$-component of tension is the same everywhere:

$$
T_x = \text{const}.
$$

**Normal force.** The polar angle corresponding to the small piece is $\Delta\varphi = \Delta x/R$, so the force balance in the radial direction gives

$$
2T_x \sin\frac{\Delta\varphi}{2} - \Delta N = 0
\;\Longrightarrow\;
\Delta N = T_x \frac{\Delta x}{R}.
\tag{4}
$$

**Friction force on the verge of slipping:**

$$
\Delta f = \mu\,\Delta N.
\tag{5}
$$

**$z$-component balance:**

$$
T_x\left.\frac{dz}{dx}\right|_{x+\Delta x} - T_x\left.\frac{dz}{dx}\right|_{x} - \Delta f = 0.
\tag{6}
$$

Using (4)–(6) and taking $\Delta x \to 0$:

$$
\frac{d^2 z}{dx^2} = \frac{\mu}{R}.
$$

With boundary conditions $z(0) = 0$ and $z'(0) = 0$ (by symmetry, $O$ is the apex):

$$
z(x) = \frac{\mu}{2R}\,x^2.
$$

The shape of the thread on the unfolded surface is a **parabola**.

**Length of the thread.** The thread must span the full cylinder ($x$ from $-\pi R$ to $\pi R$), so

$$
L_0 = \int_{-\pi R}^{\pi R}\!\sqrt{dx^2 + dz^2}
= 2\int_0^{\pi R}\!\sqrt{1 + \left(\frac{\mu x}{R}\right)^2}\,dx.
$$

Substituting $\xi = \mu x / R$:

$$
L_0 = \frac{2R}{\mu}\int_0^{\pi\mu}\!\sqrt{1 + \xi^2}\,d\xi.
$$

Using the given integral $2\int\sqrt{1+\xi^2}\,d\xi = \xi\sqrt{1+\xi^2} + \operatorname{arcsinh}\xi$:

$$
\boxed{L_0 = \pi R\sqrt{1 + (\pi\mu)^2} + \frac{R}{\mu}\operatorname{arcsinh}(\pi\mu).}
$$

**Check ($\mu \to 0$).** Using $\operatorname{arcsinh} x \approx x$ for small $x$:

$$
L_0 \approx \pi R + \frac{R}{\mu}(\pi\mu) = 2\pi R,
$$

as expected: without friction the loop can slide at the minimum length $2\pi R$.
