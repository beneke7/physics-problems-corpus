---
id: eupho-2025-E2
problem: eupho-2025-E2
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

### Task a — Sinusoid period $\Lambda$

The light transmitted through the foil produces a primary diffraction pattern. Within the laser spot, the printed sinusoidal lines form a diffraction grating of locally parallel fringes; the diffraction maxima lie on a straight line perpendicular to the tangent to the illuminated sinusoid.

By scanning the laser horizontally across the foil, the diffraction pattern tilts according to the local slope of the sinusoid. The pattern is **vertical** when the laser hits a crest or valley. The distance between two consecutive vertical positions of the pattern is $\ell = \Lambda/2$, hence $\Lambda = 2\ell$.

**Setup:** Fix the foil on one L-shaped stand, the laser on the other. Place the goniometer screen as far as possible ($\geq 60\ \text{cm}$) for precision. Slide the foil stand along the ruler in small steps; use the diagonal scale to record the foil position $x$ to $\pm 0.1\ \text{mm}$ precision. Record the tilt angle $\theta$ of the diffraction pattern at each position.

**Approach A (graphical).** Record $\theta$ vs. $x$ over at least one half-period. The zero-crossings $x_1$ and $x_2$ (where $\theta = 0°$) are obtained by linear interpolation:

$$x_1 = (10.0 \pm 0.5)\ \text{mm}, \qquad x_2 = (40.5 \pm 0.5)\ \text{mm}$$

$$\ell = x_2 - x_1 = 30.5\ \text{mm}, \quad \delta\ell = \sqrt{\delta x_1^2 + \delta x_2^2} = 0.7\ \text{mm}$$

$$\boxed{\Lambda = (61.0 \pm 1.4)\ \text{mm}}$$

**Approach B (direct alignment).** Find positions where the diffraction maxima align vertically; repeat 5 times:

| No. | $x_1/\text{mm}$ | $x_2/\text{mm}$ |
|-----|-----------------|-----------------|
| 1 | 77.8 | 47.3 |
| 2 | 78.0 | 47.4 |
| 3 | 77.7 | 47.5 |
| 4 | 77.6 | 47.3 |
| 5 | 77.7 | 47.4 |
| avg | 77.76 | 47.38 |

$$\Lambda = 2(x_2 - x_1) = 60.8\ \text{mm}, \qquad \Delta\Lambda = 0.16\ \text{mm}$$

### Task b — Vertical offset $d$

The primary diffraction pattern is created by the sinusoidal spacing $d$ between consecutive sinusoid rows. At tilt angle $\theta$, the effective period of the diffraction grating perpendicular to the local fringe direction is $d' = d\cos\theta$, giving a diffraction angle $\phi = \arcsin(n\lambda/d\cos\theta)$.

For small angles the distance between the $n$-th and $-n$-th order on the screen is:

$$D_n = R_n + R_{-n} \approx \frac{2n\lambda L}{d\cos\theta} \tag{9}$$

where $L$ is the foil-to-screen distance. Hence:

$$d = 2\lambda L \left\langle \frac{1}{D_n\cos\theta} \right\rangle \tag{10}$$

At the $\theta = 0$ points the formula simplifies to:

$$d = 2\lambda\sqrt{L^2 + D_n^2/4}\,/\,D_n$$

With $L = 74.6\ \text{cm}$, using the 5th-order maxima at multiple angles and averaging:

$$\boxed{d = (60.1 \pm 0.7)\ \mu\text{m}}$$

(Uncertainty includes the $\pm 5\ \text{nm}$ laser wavelength uncertainty added in quadrature.)

### Task c — Sinusoid amplitude $A$

The sinusoid is $y = A\sin(k(x - x_0))$ with $k = 2\pi/\Lambda$. The local slope is $\tan\theta = dy/dx = kA\cos(k(x-x_0))$.

Introduce auxiliary variables $t = \tan\theta$ and $z = \cos(k(x-x_0))$. Then:

$$t = kA\cdot z \equiv m\cdot z \tag{11}$$

This is a linear relation; plotting $t$ vs. $z$ gives slope $m = kA$ and hence:

$$A = \frac{m}{k}$$

The zero-crossing $x_0 = (x_1 + x_2)/2 = (25.3 \pm 0.7)\ \text{mm}$ and $k = (0.103 \pm 0.002)\ \text{mm}^{-1}$.

From $\geq 10$ data points in $\theta$ vs. $x$ (converted to $t$ and $z$), a linear fit gives:

$$m = (0.52 \pm 0.01)$$

$$\boxed{A = (5.0 \pm 0.2)\ \text{mm}}$$

**Approach B (maximal inclination).** The amplitude can also be determined from $\theta_\text{max}$, the maximum tilt of the diffraction pattern, since $\max_x\tan\theta = kA$:

$$\theta_\text{max} = (27.5 \pm 0.3)°, \qquad A = \frac{\Lambda\tan\theta_\text{max}}{2\pi} = (5.05 \pm 0.06)\ \text{mm}$$

### Task d — Step height $s$

The horizontal line segments of the discrete printing form a **secondary diffraction pattern** superimposed on the primary pattern. The secondary maxima appear orthogonal to the primary maxima.

At tilt angle $\theta$, the vertical line segments (edges) producing the secondary pattern are separated by:

$$g = \frac{s}{\tan\theta}$$

The diffraction angle $\omega$ of the secondary maxima satisfies $\lambda/g \approx \omega$, and is measured by the distance between the $+1$ and $-1$ secondary orders on the screen:

$$\omega \approx \frac{R_+ + R_-}{2L}$$

Combining:

$$s = g\tan\theta = \frac{2L\lambda\tan\theta}{R_+ + R_-} \tag{13}$$

The secondary pattern is only visible for large $\theta > 25°$ (near crest/valley) where the sinusoid slope is nearly constant. Measurements at several angles (Table 6 in the original):

| $\theta\ (°)$ | $\tan\theta$ | $R_+ + R_-\ (\text{cm})$ | $s\ (\mu\text{m})$ |
|---------------|--------------|--------------------------|---------------------|
| 27.8 | 0.527 | 4.75 | 10.8 |
| 25.7 | 0.481 | 4.65 | 10.1 |
| 24.5 | 0.456 | 4.50 | 9.88 |
| 24.7 | 0.460 | 4.60 | 9.76 |
| 21.8 | 0.400 | 3.90 | 10.0 |
| 18.1 | 0.327 | 3.00 | 10.6 |

Averaging point-wise results:

$$\boxed{s \approx (10.2 \pm 0.4)\ \mu\text{m}}$$

**Alternative formula (Approach B).** The characteristic length is the hypotenuse $h = s/\sin\theta$ of a right triangle with legs $s$ and $g$, giving:

$$s = \frac{2L\lambda\sin\theta}{\tilde{R}_+ + \tilde{R}_-} \tag{14}$$

where $\tilde{R}_\pm$ are measured orthogonal to the primary pattern. Both (13) and (14) are equivalent since $\tilde{R}_\pm = \cos\theta\cdot R_\pm$.

*European Physics Olympiad 2025, Experimental Problem 2 — Official Solution. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX. Marking scheme omitted.*
