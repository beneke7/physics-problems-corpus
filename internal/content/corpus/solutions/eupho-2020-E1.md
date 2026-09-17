---
id: eupho-2020-E1
problem: eupho-2020-E1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2020
verification_status: unverified
figure_files: []
---

## Solution

### Finding $x_Q$ and $y_Q$

**Method 1.** Select any fixed initial launch point, e.g.\ $(x_i, y_i) = (0, 0)$. Vary the accelerating voltage to obtain several screen hits and plot them on a graph; the target charge lies on the line through those points. Repeat with a different launch point, e.g.\ $(0, 10)$, obtaining a second line. The two lines intersect at $(x_Q, y_Q)$. A third launch point (e.g.\ $(0, -10)$, approximately perpendicular to one of the first two lines) provides a consistency check.

Expected values: $x_Q \approx 5.4\ \mathrm{cm}$, $y_Q \approx -2.6\ \mathrm{cm}$.

### Determining $Q$ and $z_Q$

Work with the Rutherford formula written as

$$\tan\frac{\theta}{2} = \frac{kqQ}{2Eb}.$$

**Method 1: keep $\theta$ fixed** (equivalently, keep $bE$ constant). The screen distance satisfies

$$d\cos\theta = z\sin\theta + b.$$

Graph $b$ vertically against $d$ horizontally at fixed $\theta$: the slope gives $\cos\theta$ and the intercept gives $z\sin\theta$, yielding $z_Q$ and $Q$ separately.

**Method 2: keep $b$ small and fixed, vary $E$.** Using the double-angle formula $\tan\theta = 2\tan(\theta/2)/(1-\tan^2(\theta/2))$ and letting $\gamma = 2b/(kqQ)$:

$$\frac{2E}{d} = \frac{\gamma}{z} E^2 - \frac{1}{z\gamma}.$$

Plot $2E/d$ against $E^2$: a straight line whose slope is $\gamma/z$ and intercept is $-1/(z\gamma)$, giving $z_Q$ and $Q$.

**Method 3 (product only).** Approximating $\tan(\theta/2) \approx \delta/(2z)$ yields

$$\delta = \frac{kqQz}{Eb},$$

which gives only the product $Qz$.

### Expected results

$$z_Q \approx 11.5\ \mathrm{cm}, \quad Q \approx -86\ \mathrm{pC} \quad (Q < 0).$$

The leading error sources are: (1) 0.5 mm beam spread (random); (2) 1 mm pixel resolution (random); (3)–(5) approximations in defining the asymptote and impact parameter (systematic).
