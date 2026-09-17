---
id: eupho-2025-T1
problem: eupho-2025-T1
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

### Part a)

Since points A and B are very close, $I_0$ is the illuminance surplus due to direct sunlight.

Consider a small (infinitesimal) horizontal rectangle $[x, x+\delta x]\times[y, y+\delta y]$ placed in the light beam. Let $l$ be the horizontal distance between the point where a ray hits the cylinder and where it hits the floor, and $\alpha$ the horizontal angle between the ray and the surface normal. The spot on the floor made by the light makes an angle of $2\alpha$ from the incident ray, and forms a small patch of size $(l\,2\delta\alpha)(\delta l)$ on the floor.

From the side-view geometry, $\delta l \propto \delta y$ for both a ray hitting the ground directly and a ray reflected before hitting the ground. We thus have:

$$I_0\,\delta x = 2I\,l\,\delta\alpha \tag{1}$$

Let $\beta = \pi - \alpha$ as sketched in the figure. Then:

$$\delta x = a(\sin(\beta+\delta\beta) - \sin\beta) \approx a\cos\beta\,\delta\beta \tag{2}$$

Therefore:

$$I = -\frac{I_0 a}{2l}\cos(\beta) \tag{3}$$

(Note that $\cos\beta < 0$.) This expression is accurate to order $(a/l)^2$, but is not yet in terms of the variables requested.

A more accurate expression would be $I = -\sqrt{\frac{I_0 a}{4l^2 + a^2\sin^2(\beta)}}\cos(\beta)$, but it is not necessary to find this expression.

To obtain $I$ as a function of $r$ and $\theta$: if $a \ll r$, then $l$ and $r$ almost coincide. To leading order $l \approx r$ and $\theta \approx \pi - 2\alpha = 2\beta - \pi$. Substituting $l$ and $\beta$ in (3):

$$\boxed{I \approx \frac{I_0 a}{2r}\sin(\theta/2)} \tag{4}$$

### Part b)

The rings appear because the fingers block the light. For the middle ring, the finger is approximately horizontal.

Let $l_0$ be the horizontal distance $l$ for $\alpha = \pi/2$. From the side-view geometry:

$$l = l_0 + a\cos\alpha = l_0 + a|\cos(\beta)| \tag{5}$$

The minimum value $R_{\min}$ is attained at $\alpha = \beta = \pi/2$, where $\theta \approx 0$ and $R_{\min} \approx l_0$ within an error of order $(a/r)^2$. Hence:

$$l \approx R_{\min} + a\cos\alpha = R_{\min} + a|\cos(\beta)|$$

The Cosine theorem applied to the triangle between the centre of the chair leg, the point where the ray reflects from the leg, and the point where it hits the floor gives:

$$r^2 = a^2 + l^2 - 2al\cos(\beta) \tag{6}$$

Using (6) and expanding:

$$r^2 = R_{\min}^2 + 4aR_{\min}\cos\alpha + 3a^2\cos^2\alpha$$

Using $\cos\alpha \approx \sin(\theta/2)$, and dropping terms of order $(a/r)^2$:

$$\boxed{R - R_{\min} \approx 2a\sin(\theta/2)} \tag{7}$$

The factor of 2 is significant.

*European Physics Olympiad 2025, Theory Problem 1 — Official Solution. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX. Marking scheme omitted.*
