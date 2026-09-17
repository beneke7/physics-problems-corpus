---
id: eupho-2018-T3
problem: eupho-2018-T3
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

Since $n = -y/h = (x/\lambda)^{2/3}$, we have $x(n) = n^{2/3}\lambda$. The distance between adjacent steps is:
$$d_n = x(n+1) - x(n) \approx \frac{dx(n)}{dn} = \frac{2}{3}\lambda\, n^{-1/3} = n^{-1/3} \cdot 30\,\mu\text{m}.$$

### Part B

The equilibrium energy, being a minimum, must be stable against small perturbations of the crystal shape that conserve the total volume. Such perturbations consist of equal and opposite horizontal displacements of pairs of steps: a displacement $+\delta$ of step $n$ must be compensated by $-\delta$ of some other step $m$.

The energy change of step $n$ under displacement $\delta$ (from its interactions with steps $n-1$ and $n+1$) is:
$$\epsilon_n(\delta) = \mu\!\left[(d_n+\delta)^\nu - d_n^\nu + (d_{n+1}-\delta)^\nu - d_{n+1}^\nu\right] \approx \mu\nu\!\left(d_n^{\nu-1} - d_{n+1}^{\nu-1}\right)\delta.$$

For $\epsilon_n(\delta) + \epsilon_m(-\delta) = 0$ for arbitrary $n$ and $m$, the factor $(d_n^{\nu-1} - d_{n+1}^{\nu-1})$ must be independent of $n$:
$$d_n^{\nu-1} - d_{n+1}^{\nu-1} = \text{const}.$$

Substituting $d_n \propto n^{-1/3}$:
$$n^{-(1-\nu)/3} - (n+1)^{-(1-\nu)/3} \approx \frac{1-\nu}{3}\, n^{-(1-\nu)/3 - 1} = \text{const},$$
which requires the exponent of $n$ to vanish:
$$-\frac{1-\nu}{3} - 1 = 0 \implies \nu = -2.$$

The interaction energy $E(d) \propto d^{-2}$ corresponds to that of two dipoles in 2D.

$$\boxed{\nu = -2.}$$

*Footnote: the trivial solutions $\nu = 0$ and $\nu = 1$ imply that the total energy within given constraints does not depend on the shape of the crystal.*
