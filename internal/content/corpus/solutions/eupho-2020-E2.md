---
id: eupho-2020-E2
problem: eupho-2020-E2
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

Equations of motion (ignoring drag):

$$m_1 a_1 = F - F_1 - m_1 g, \qquad m_2 a_2 = F_1 - F_2 - m_2 g, \qquad m_3 a_3 = F_2 - m_3 g,$$

where $F_1$, $F_2$ are spring forces and $a_1, a_2, a_3$ are the accelerations of the ceiling, $m_2$, and $m_3$ respectively. At small deformations near equilibrium, $\Delta F_1 = k_1 \Delta(y_1 - y_2)$ and $\Delta F_2 = k_2 \Delta(y_2 - y_3)$.

### Finding $m_1 + m_2 + m_3$

At rest ($a_i = 0$), $F = F_0 = (m_1 + m_2 + m_3)g$. Measuring $F_0$ from the initial quiescent reading:

$$m_1 + m_2 + m_3 = F_0/g \approx 14.774\ \mathrm{N} / 9.81\ \mathrm{m/s^2} \approx 1.506\ \mathrm{kg}.$$

Exact answer: **1.506 kg**.

### Finding $m_1$

The initial force at the start of each experiment (before the masses move) is $F = m_1 a_1 + m_1 g + F_1^{(0)}$, where $F_1^{(0)}$ is the equilibrium spring force (the same at the start of every experiment). So $\Delta F / \Delta a_1 = m_1$. Using maximum acceleration $a_1 = \pm 30\ \mathrm{m/s^2}$:

$$m_1 = \frac{F_{30} - F_{-30}}{60\ \mathrm{m/s^2}} \approx \frac{(40.487 - 14.774)\ \mathrm{N}}{30\ \mathrm{m/s^2}} \approx 0.857\ \mathrm{kg}, \quad m_2 + m_3 \approx 0.649\ \mathrm{kg}.$$

Exact answer: **0.857 kg**.

### Finding $k_1$

**Method 1 (fast pulse).** Accelerate the box with $a_1$ for a very short time $t$ then with $-a_1$ for the same time. If $t$ is small enough, $m_2$ barely moves, so $\Delta y_1 = \frac{1}{2}a_1 t^2$ and $\Delta F \approx k_1 \Delta y_1$:

$$k_1 \approx \frac{F_u - F_d}{2 a_1 t^2} \approx \frac{(14.890 - 14.652)\ \mathrm{N}}{2 \cdot 30\ \mathrm{m/s^2} \cdot (0.01\ \mathrm{s})^2} \approx 39.7\ \mathrm{N/m}.$$

Exact answer: **39.2 N/m**.

### Finding $m_2$, $m_3$, $k_2$

**Method 1: natural frequencies.** With small displacements $x_2 = \Delta y_2$, $x_3 = \Delta y_3$ from equilibrium:

$$m_2 \ddot{x}_2 = -k_1 x_2 - k_2(x_2 - x_3), \qquad m_3 \ddot{x}_3 = k_2(x_2 - x_3).$$

Substituting $x_2 = A\cos(\omega t)$, $x_3 = B\cos(\omega t)$ and eliminating $A$, $B$ gives a biquadratic:

$$\omega^4 - \left(\frac{k_2}{m_3} + \frac{k_1 + k_2}{m_2}\right)\omega^2 + \frac{k_1 k_2}{m_2 m_3} = 0.$$

Let $c_1 = \omega_1^2 + \omega_2^2$ and $c_2 = \omega_1^2 \omega_2^2$ (Vieta's formulas). Then:

$$m_2 = \frac{k_1^2}{c_1 k_1 - c_2(m_2 + m_3)}, \qquad m_3 = (m_2 + m_3) - m_2, \qquad k_2 = \frac{c_2 m_2 m_3}{k_1}.$$

Measured periods $T_1 \approx 1.11\ \mathrm{s}$ and $T_2 \approx 0.373\ \mathrm{s}$ give $\omega_1^2 \approx 32.04\ \mathrm{Hz^2}$, $\omega_2^2 \approx 283.8\ \mathrm{Hz^2}$, $c_1 \approx 315.8\ \mathrm{Hz^2}$, $c_2 \approx 9093\ \mathrm{Hz^4}$.

Results:

$$m_2 \approx 0.238\ \mathrm{kg}, \qquad m_3 \approx 0.411\ \mathrm{kg}, \qquad k_2 \approx 22.4\ \mathrm{N/m}.$$

Exact answers: $m_2 = 0.236\ \mathrm{kg}$, $m_3 = 0.413\ \mathrm{kg}$, $k_2 = 22.6\ \mathrm{N/m}$.
