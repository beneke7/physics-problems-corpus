---
id: eupho-2021-E1
problem: eupho-2021-E1
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

### Theoretical background

The horizontal projection $\vec{B}_h$ of the magnetic induction $\vec{B}_w$ of the wire is perpendicular to the wire in all points of the $xy$-plane. It makes an angle $\psi = 180^\circ - \theta$ with North, where $\theta$ is the angle between the current direction and the positive $x$-direction. The magnetic needle points along $\vec{B} = \vec{B}_h + \vec{B}_E$. By the sine rule in the vector triangle:

$$
\frac{B_h}{B_E} = \frac{\sin\varphi}{\sin(\theta + \varphi)}.
\tag{1}
$$

At a point on the surface at perpendicular distance $d$ from the wire's horizontal projection, and at distance $r = \sqrt{d^2 + h^2}$ from the wire, Ampère's law gives

$$
B_w = \frac{\mu_0 I}{2\pi r},
\tag{2}
$$

and the horizontal projection is

$$
B_h = B_w \cos\alpha = \frac{\mu_0 I h}{2\pi(d^2 + h^2)}.
\tag{3}
$$

### Task (a): Horizontal position of the wire

The maximum $|\varphi|$ at a given current occurs where $B_h$ is maximal, i.e. directly above the wire ($d = 0$). Track the wire by scanning the boundary and interior of the square for maxima of $|\varphi|$.

A coarse scan (step 10 mm) locates the wire crossing the West border ($x = 0$) near $y \in [60, 90]$ mm and the East border ($x = 100$ mm) near $y \in [10, 30]$ mm. A fine scan (step 1 mm) in these intervals gives two cross-points:

$$
P_1 = (0.0 \pm 0.5,\ 75 \pm 1)\text{ mm}, \quad P_2 = (100.0 \pm 0.5,\ 17 \pm 1)\text{ mm}.
$$

Scanning along additional vertical and horizontal lines yields more points on the wire projection. A least-squares fit gives

$$
y = ax + b = -0.58x + 75.3\text{ mm},
$$

with estimated uncertainties $\delta a \approx 0.01$ and $\delta b \approx 0.4\text{ mm}$.

Since $\varphi < 0$ when $I > 0$ at points above the wire (East deflection is negative here), the direction of positive $I$ is from West to East.

### Task (b): Determination of $h$ and $B_E$

The wire angle is

$$
\theta = \arctan(a) = -30.1^\circ \pm 0.4^\circ.
$$

The perpendicular distance from a surface point $(x, y)$ to the wire projection is

$$
d = |(ax + b - y)\cos\theta| \approx 0.865\,|ax + b - y|.
$$

Equations (1) and (3) give

$$
\frac{\sin\varphi}{\sin(\theta + \varphi)} = \frac{\mu_0 I h}{2\pi B_E(d^2 + h^2)}.
\tag{5}
$$

**Method I — vary current at fixed $d$.** Define the linearising variable $U = \sin\varphi / \sin(\varphi - 30.1^\circ)$. Then equation (5) becomes $I = kU$ with slope

$$
k = \frac{2\pi B_E(d^2 + h^2)}{\mu_0 h}.
\tag{9}
$$

Measuring at $d_1 = 0$ and $d_2 = 10\text{ mm}$ (point $(20, 75)$ mm) yields $k_1 = 1.01 \pm 0.01\text{ A}$ and $k_2 = 5.04 \pm 0.03\text{ A}$. From these:

$$
\frac{B_E}{h} = \frac{\mu_0(k_2 - k_1)}{2\pi(d_2 - d_1)} = 8.06 \times 10^{-6}\text{ T/mm},
\tag{10}
$$

$$
B_E h = \frac{\mu_0(d_2^2 k_1 - d_1^2 k_2)}{2\pi(d_2^2 - d_1^2)} = 1.98 \times 10^{-4}\text{ T·mm},
\tag{11}
$$

giving

$$
\boxed{h = 5.0\text{ mm}, \quad B_E = 4.0 \times 10^{-5}\text{ T}.}
$$

**Method II — fixed current, vary $d$.** Set $U = d^2$, $V = \sin(\varphi - 30.1^\circ)/\sin\varphi$. Equation (5) becomes linear: $V = (2\pi B_E/\mu_0 Ih)\,U + 2\pi B_E h/\mu_0 I$. A fit to measurements at $I = 5.0\text{ A}$ at various distances gives $V = 7.37 \times 10^{-3}\text{ mm}^{-2}\,U + 0.208$, leading to $B_E \approx 3.9 \times 10^{-5}\text{ T}$ and $h \approx 5.3\text{ mm}$ (slightly less accurate than Method I due to positioning errors at small $d$ and small deflection angles at large $d$).
