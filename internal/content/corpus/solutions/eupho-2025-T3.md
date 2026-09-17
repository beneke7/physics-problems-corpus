---
id: eupho-2025-T3
problem: eupho-2025-T3
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2025
verification_status: unverified
figure_files: []
---
## Solution

### Part a) — Field line topology near a wire in an external field

In the absence of an externally imposed magnetic field, an infinite straight thin wire creates a magnetic field whose field lines are closed circular loops lying in planes perpendicular to the wire and centred on the wire.

When an external field is introduced, the total field at any point is the vector sum of the wire field and the external field. The total field now has a component parallel to the wire, so the field lines no longer close on themselves. Instead, they spiral around the wire, tracing out a helix (wound with variable pitch). The helix:
- is not a closed loop,
- is periodic in $x$ (the coordinate along the wire),
- is helical (centred on the wire),
- has chirality determined by the direction of the current and external field.

### Part b) — Distance of closest approach $d$

Setup: wire X carries current $I$ along the $x$-axis; wire Y carries current $I$ along the $z$-axis, offset by $a$ in the $y$-direction, so at position $(0, a, x)$ from any point $(0, 0, x)$ on wire X. The distance from wire Y to any point $(x, \rho\cos\phi, \rho\sin\phi)$ near wire X is $\sqrt{a^2+x^2}$ to leading order when $\rho \ll a$.

Let $\vec{B}_X$ be the field of wire X and $\vec{B}_Y$ the field of wire Y. Near wire X ($\rho \ll a$), $|\vec{B}_X| \gg |\vec{B}_Y|$, so the field lines are nearly circular loops centred on wire X. However, $\vec{B}_Y$ has a component along wire X, causing the loops to spiral.

**Flux-tube argument.** Define the surface $S$ as the set of field lines passing through a small circle $C$ of radius $r$ centred on wire X in the plane $x = 3a$ (i.e., through point P). Since the magnetic field is tangent to $S$ everywhere by construction, the region bounded by $S$ is a flux tube and the $\vec{B}_Y$-flux through it is conserved.

The component of $\vec{B}_Y$ directed along wire X at position $x$ along wire X is:

$$B_\parallel = |\vec{B}_Y|\cos\theta = \frac{\mu_0 I}{2\pi}\cdot\frac{a}{a^2 + x^2}$$

where $\theta$ is the angle between $\vec{B}_Y$ and the $x$-axis. The $\vec{B}_Y$-flux through the (approximately circular) cross-section of the flux tube at position $x$ is:

$$\Phi(x) = B_\parallel \cdot \pi\rho(x)^2 = \frac{\mu_0 I}{2}\cdot\frac{a\,\rho(x)^2}{a^2 + x^2}$$

Flux conservation: $\Phi(x) = \Phi(3a)$ gives:

$$\frac{\rho(x)^2}{a^2 + x^2} = \frac{r^2}{a^2 + (3a)^2} = \frac{r^2}{10a^2}$$

so the equation of surface $S$ is:

$$\rho(x)^2 = \frac{r^2(a^2 + x^2)}{10a^2}$$

This is valid for all $x$ since $\rho(x) \ll \sqrt{a^2+x^2}$ is satisfied everywhere (as $r \ll a$). The minimal $\rho$ occurs at $x = 0$:

$$\boxed{d = \rho(0) = \frac{r}{\sqrt{10}}}$$

With $r = 1\ \text{cm}$ and $a = 10\ \text{cm}$: $d = r/\sqrt{10} \approx 3.16\ \text{mm}$.

### Part c) — Length $L$ of the spiraling field line from P to Q

The point Q of closest approach is at $x = 0$. Since the helix is wound very tightly ($B_\parallel \ll B_\perp$), the length of the field line greatly exceeds both $r$ and $a$, so the precise azimuthal location of Q around wire X is unimportant to leading order.

Consider two nearby points on the field line with $x$-coordinates differing by $\mathrm{d}x$. The length $\mathrm{d}L$ of the segment joining them satisfies:

$$\mathrm{d}x \approx \frac{B_\parallel}{B_\perp}\,\mathrm{d}L$$

Here $B_\parallel = \frac{\mu_0 I}{2\pi}\cdot\frac{a}{a^2+x^2}$ and $B_\perp \approx \frac{\mu_0 I}{2\pi\rho}$ (dominated by wire X). Thus:

$$\mathrm{d}L = \frac{a^2 + x^2}{a\,\rho}\,\mathrm{d}x$$

Using $\rho(x)^2 = r^2(a^2+x^2)/(10a^2)$:

$$L = \int_0^{3a} \frac{a^2+x^2}{a\,\rho(x)}\,\mathrm{d}x = \int_0^{3a} \frac{\sqrt{10}\,\sqrt{a^2+x^2}}{r}\,\mathrm{d}x = \frac{\sqrt{10}\,a^2}{r}\int_0^3\sqrt{1+u^2}\,\mathrm{d}u$$

where $u = x/a$.

**Numerical evaluation.** A single-trapezium estimate gives:

$$\int_0^3\sqrt{1+u^2}\,\mathrm{d}u \approx \int_0^3\left[1 + (\sqrt{10}-1)\frac{u}{3}\right]\mathrm{d}u = 3 + \frac{3}{2}(\sqrt{10}-1) \approx 6.24$$

leading to $L \approx 19.7\,a^2/r \approx 197\ \text{m}$.

**Exact result.** Substituting $u = \sinh\beta$:

$$\int_0^3\sqrt{1+u^2}\,\mathrm{d}u = \frac{1}{2}\left[3\sqrt{10} + \ln(3+\sqrt{10})\right] \approx 5.65$$

so $L \approx 17.9\,a^2/r \approx 179\ \text{m}$.

The required 20%-accuracy condition is satisfied by the trapezium estimate: $\mathbf{140\ \text{m} \leq L \leq 215\ \text{m}}$.

*European Physics Olympiad 2025, Theory Problem 3 — Official Solution. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX. Marking scheme omitted.*
