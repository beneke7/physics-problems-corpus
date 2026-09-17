---
id: eupho-2020-T1
problem: eupho-2020-T1
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

### Part a.

**Solution I (Newton's third law + magnetic poles)**

According to Newton's third law, the force acting on the solenoid equals in magnitude and is opposite in direction to the force acting on the loop. The latter is obtained from the Lorentz force $d\vec{F} = J\,d\vec{l} \times \vec{B}$ summed over all loop elements, where $J = \mathcal{E}/R$.

Since the solenoid is long and thin, its magnetic field outside is well approximated by two magnetic poles: a North pole near $O_1$ and a South pole near $O_2$. The total flux emerging from the North pole equals the flux through the solenoid's cross-section:

$$\Phi = B_{\rm in} A = \mu_0 \frac{N}{\ell} I \cdot A.$$

When $O_1$ is at the loop centre $O$, the North pole sits at $O$. Its field points radially outward; by spherical symmetry, at the loop circumference (radius $r$):

$$B(r) = \frac{\Phi}{4\pi r^2} = \frac{\mu_0 N I A}{4\pi \ell r^2}.$$

The net force on the loop elements (and by Newton's third law, the reaction on the solenoid) points in the $+z$ direction:

$$\boxed{F_1 = J \cdot 2\pi r \cdot B(r) = \frac{\mu_0 N I A \mathcal{E}}{2\ell R r}.}$$

When $O_2$ is at the loop centre, the South pole is there; its field points radially inward, giving a force of the same magnitude but opposite direction:

$$\vec{F}_2 = -\vec{F}_1.$$

**Solution IV (gradient-of-moment / Biot–Savart)**

Divide the solenoid into short coils of length $\Delta\ell$, each with magnetic moment $\Delta\vec{m} = IA\frac{N\Delta\ell}{\ell}\,\hat{e}_z$. The force on each segment is $\Delta F = \Delta m \,\frac{dB_{\rm loop}}{dz}$. Summing and using the Biot–Savart expression

$$B_{\rm loop}(z) = \frac{\mu_0 \mathcal{E}}{2R} \frac{r^2}{(z^2+r^2)^{3/2}},$$

and taking $\ell \gg r$ yields the same result:

$$F_1 = IA\frac{N}{\ell}\bigl[B_{\rm loop}(0) - B_{\rm loop}(-\ell)\bigr] \approx \frac{\mu_0 N I A \mathcal{E}}{2\ell R r}.$$

### Part b.

Take $t = 0$ when the solenoid centre is at $O$, so $z_1 = \ell/2 + vt$ (head) and $z_2 = -\ell/2 + vt$ (tail).

The induced EMF in the loop is $V_{\rm ind}(t) = -d\Phi_{\rm loop}/dt$, giving

$$V_{\rm ind}(t) = -\frac{\mu_0 N I A}{2\ell}\left[\frac{r^2 v}{(z_1^2+r^2)^{3/2}} - \frac{r^2 v}{(z_2^2+r^2)^{3/2}}\right].$$

The current is $J(t) = [\mathcal{E} + V_{\rm ind}(t)]/R$. Key features:

| Time range | $V_{\rm ind}(t)$ | $J(t)$ |
|---|---|---|
| $t \ll -\ell/(2v)$ | small, $\propto -1/t^4$ | $\approx \mathcal{E}/R$ |
| $t \approx -\ell/(2v)$ | large negative, $\propto -(t+\ell/2v)^2$ | minimum $J_{\min}$ |
| $|t| \ll \ell/(2v)$ | negligible ($\propto t$) | $\approx \mathcal{E}/R$ |
| $t \approx \ell/(2v)$ | large positive, $\propto (t-\ell/2v)^2$ | maximum $J_{\max}$ |
| $t \gg \ell/(2v)$ | small, $\propto 1/t^4$ | $\approx \mathcal{E}/R$ |

The extrema occur when one pole is near the loop centre:

$$J_{\min} = \frac{\mathcal{E}}{R} - v\frac{\mu_0 N I A}{2Rr\ell}, \qquad J_{\max} = \frac{\mathcal{E}}{R} + v\frac{\mu_0 N I A}{2Rr\ell}.$$

The function $J(t) - \mathcal{E}/R$ is an odd function of $t$. The dip precedes the peak, separated by $\Delta t \approx \ell/v$. Each feature has a time width $\sim r/v$. The graph is smooth everywhere.
