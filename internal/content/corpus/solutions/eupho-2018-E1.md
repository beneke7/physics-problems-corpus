---
id: eupho-2018-E1
problem: eupho-2018-E1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2018
verification_status: unverified
figure_files: []
---

## Solution

### Part A

**Theory.** Let $S_0 = \pi d_w^2/4$ be the membrane window area and $V$ the inner volume of the vessel. The net channel area is $pS_0$. The CO₂ flux through the membrane is $j = D(c - c_0)/h$ (Knudsen regime: $D = vd/3$). Conservation of molecules gives:
$$\frac{d c}{dt} = -\frac{D p S_0}{V h}(c - c_0),$$
with solution:
$$c(t) = c_0 + C\exp\!\left(-\frac{t}{\tau}\right), \qquad \tau = \frac{Vh}{pS_0 D} = \frac{3Vh}{pS_0 vd}.$$

The thermal speed of CO₂ ($\mu = 44\,\text{g/mol}$, $T = 295\,\text{K}$):
$$v = \sqrt{\frac{8RT}{\pi\mu}} = 376\,\text{m/s}.$$

Measured vessel dimensions: $L = 5.0\,\text{cm}$, $D_\text{in} = 7.4\,\text{cm}$, giving $V = 215\,\text{cm}^3$; membrane area $S_0 = \pi d_w^2/4 = 1.33\,\text{cm}^2$.

**Measurement.** Exhale CO₂ into the vessel, seal with clips, run both fans (internal mixer + external blower). Record $c(t)$ at 20 s intervals. Plot $\ln(c - c_0)$ vs $t$ and fit a straight line to obtain:
$$\tau = 1204 \pm 10\,\text{s}.$$

### Part B

The optical path difference between rays reflected from the top and bottom surfaces of the membrane is (including the $\lambda/2$ phase shift at the denser interface):
$$\delta = 2h\sqrt{n_o^2 - \sin^2\alpha} + \frac{\lambda}{2}.$$

Minima (destructive interference, $\delta = (m+\tfrac{1}{2})\lambda$) occur when $2h\sqrt{n_o^2 - \sin^2\alpha} = m\lambda$. Rotating the sample and counting $N$ minima between angles $\alpha_1$ and $\alpha_2$ gives:
$$h = \frac{N\lambda}{2\left(\sqrt{n_o^2-\sin^2\alpha_1} - \sqrt{n_o^2-\sin^2\alpha_2}\right)}.$$

A linear fit of the minimum index $m'$ vs $\sqrt{n_o^2 - \sin^2\alpha}$ yields slope $= 2h/\lambda$, giving:

$$\boxed{h = 74.6 \pm 0.2\,\mu\text{m}.}$$

### Part C

**Deriving $\delta$ in terms of $\Delta n$.** Denote $\Delta n^* = n_2 - n_1$, $\Delta\beta = \beta_1 - \beta_2$. Starting from the given formula and the condition $|n_e - n_o| \ll n_o$:

$$\delta = h(n_1\cos\beta_1 - n_2\cos\beta_2) = -\frac{nh\,\Delta\beta}{\sin\beta},$$

where $\Delta\beta = -\Delta n^* \sin\beta/(n\cos\beta)$ from Snell's law, so:

$$\delta = \frac{h}{\cos\beta}\,\Delta n^*.$$

The relationship between $\Delta n^* \equiv n_2 - n_1$ and $\Delta n = |n_e - n_o|$ follows from the given $n_2$ formula:

$$\Delta n^* = \sin^2\!\beta\,\Delta n, \qquad \Rightarrow \qquad \delta = \frac{h\sin^2\!\beta}{\cos\beta}\,\Delta n.$$

**Measurement.** Using two polarizers at $45°$ to the membrane edge, rotate the membrane and locate three transmittance extrema (at $\delta = \lambda/2,\,\lambda,\,3\lambda/2$). From the angles $\alpha$ (measured from normal):

| $\delta$ | $\alpha$ (°) | $\beta$ (°) | $\Delta n$ |
|---|---|---|---|
| $\lambda/2$ | 32.5 | 20.1 | 0.0352 |
| $\lambda$ | 48 | 27.2 | 0.0375 |
| $3\lambda/2$ | 62 | 31.8 | 0.0405 |

$$\boxed{\Delta n = 0.0378 \pm 0.0015.}$$

Reading the given $\Delta n(p)$ graph at $\Delta n = 0.0378$:
$$\boxed{p = 13.5 \pm 0.5\%.}$$

### Part D

From the expression for $\tau$ in part A:
$$d = \frac{3Vh}{pS_0 v\tau}.$$

With $v = 376\,\text{m/s}$ (at $T \approx 300\,\text{K}$), $V = 215\,\text{cm}^3$, $h = 74.6\,\mu\text{m}$, $p = 0.135$, $S_0 = 1.33\,\text{cm}^2$, $\tau = 1204\,\text{s}$:

$$\boxed{d = 6.0 \pm 0.5\,\text{nm}.}$$

*Note: The SEM image of the membrane shows average channel diameter $\approx 15\,\text{nm}$. The discrepancy arises because diffusion inside pores is not the only rate-limiting step even with both fans running, and some channels are branched or terminated.*

*Problem developed and designed by Alexey Noyan, Alexander Kiselev, and Fedor Tsybrov. Samples fabricated at MSU by Kirill Napolskii, Alexey Leontiev, Ilya Roslyakov, and Sergey Kushnir.*
