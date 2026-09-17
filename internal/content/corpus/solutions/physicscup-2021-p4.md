---
id: physicscup-2021-p4
problem: physicscup-2021-p4
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Nikita Semenin
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2021/P4/Problem-Nikita-Semenin-4_full.pdf
selection_note: "Selected as the most machine-readable + elegant of the published solutions (LaTeX-compiled, 2 pp). Kalda's comment: a nicely written full and compact solution covering both parts A and B (the adiabatic and non-adiabatic regimes)."
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Nikita Semenin (MIPT), transcribed faithfully from the LaTeX source. The competition published no official solution. $v_T \equiv \sqrt{2k_BT/m}$ throughout.*

### Decoupling in the strong field

The condition $B \gg m k_B T/(\hbar e)$ is $\hbar\omega_c \gg k_B T$, where $\omega_c = eB/m$ is the cyclotron frequency. So the transverse motion (in planes parallel to the walls) is confined to a region of size $l \approx \sqrt{\hbar/eB}$, deep in the quantum limit: the transverse Landau levels are
$$ E_n = \hbar\omega_c\left(n+\tfrac12\right), \tag{1} $$
and the occupation of $n\ge 1$ is suppressed by
$$ \exp\!\left(-\hbar\omega_c/k_B T\right) \ll 1. \tag{2} $$
Together with the gas being sparse (non-degenerate, so Maxwellian), this means that once the field is on the electrons decouple: there are no electron–electron collisions, the rms velocities along the three axes never equalize, and the electrons never thermalize. The field does not affect $z$-motion at all, so along $z$ only the shock-wave potential acts.

### Single electron meeting the shock front

Take an electron of speed $v_0$ along $z$. Since $U_0 \gg k_B T$ it almost surely cannot clear the barrier on the first hit, so it bounces back, gaining $2u$ from the moving wall. As $u \ll v_T$ it is still short, so each bounce adds another $2u$; after the $n$-th bounce
$$ v_n = v_0 + 2un. \tag{3} $$
This repeats until the speed exceeds
$$ \sqrt{\frac{2U_0}{m}} = 10\sqrt{\frac{2k_BT}{m}} \equiv 10v_T, \tag{4} $$
i.e. $v_0 + 2un > 10v_T$ (5), whose integer solution is
$$ n = \left\lfloor \frac{10v_T - v_0}{2u}\right\rfloor + 1. \tag{6} $$
For most electrons this $n$ is large. On clearing the barrier the electron loses $U_0$ of energy, emerging with
$$ v_f = \sqrt{v_n^2 - 100v_T^2} = \sqrt{(v_n-10v_T)(v_n+10v_T)} \approx \sqrt{20v_T(v_n-10v_T)}, \tag{7} $$
where
$$ v_n - 10v_T = 2u\left(1 - \left\{\frac{10v_T - v_0}{2u}\right\}\right), \tag{8} $$
$\{\cdot\}$ denoting the fractional part. By (7)–(8), $v_f^2(v_0)$ is a sawtooth in $v_0$ of period $2u$ spanning $v_0\in(0,10v_T)$ (above $10v_T$ the electron crosses without bouncing). Since $u\ll v_T$ we average the sawtooth to half its maximum:
$$ v_f^2 \approx \tfrac12\cdot 20v_T\cdot 2u = 20v_T u. \tag{9} $$
Thus $v_f \gg u$: even after losing most of its energy the electron still far outruns the wall.

### Part A — adiabatic (slow) shock

Because $v_f \gg u$, the motion is fast and periodic while conditions vary slowly, so the **adiabatic theorem** applies: the phase-space area is conserved. Initially the trajectory is a rectangle of length $L$ and width $2p_0 = 2mv_0$. As the front advances the rectangle shrinks in position and stretches in momentum at constant area; when the half-width reaches $10mv_T$ a second rectangle nucleates in the newly opened region behind the front. In the end the first rectangle vanishes and the second has length $L$; total area is preserved. Two rectangles of equal length $L$ and equal total area must have equal widths, so the final velocity equals the initial one. The number density and the mean-square velocity are both unchanged, hence
$$ \boxed{\,p = p_0.\,} \tag{10} $$

### Part B — non-adiabatic (fast) shock

The adiabatic approximation requires
$$ \left|\frac{d\lambda}{dt}\right| \ll \frac{\lambda}{\mathcal T}, \tag{11} $$
with $\lambda$ an external parameter and $\mathcal T$ the period. Take $\lambda = x$, the distance from the front to the far wall. The adiabatic invariant fixes $x$ at the moment of the jump:
$$ x = L/k, \qquad k = \sqrt{U_0/k_B T} = 10. \tag{12} $$
The period at that moment is
$$ \mathcal T = \frac{x}{k v_T} + \frac{L-x}{v_f} \sim \frac{L}{k^2 v_T} + \frac{L}{\sqrt{k v_T u}} \approx \frac{L}{\sqrt{k v_T u}}, \tag{13} $$
the second fraction dominating (its denominator is much smaller). With $\dot x = u$, condition (11) gives
$$ u \ll \frac{x\sqrt{k v_T u}}{L} = \sqrt{\frac{v_T u}{k}}, \tag{14} $$
which simplifies to
$$ \boxed{\;u \ll \frac{v_T}{k} \sim \sqrt{\frac{k_B T}{U_0}}\sqrt{\frac{k_B T}{m}}.\;} \tag{15} $$
When (15) holds, Part A applies and $p = p_0$. **When the opposite holds**, the electron instead keeps the velocity $v_f$ of (9) to the end. The electrons do not thermalize, so the initial Maxwell distribution of $v_0$ persists; the force from electrons near $v_0$ is the momentum change per collision over the time between collisions, times their number:
$$ dF = \frac{2m v_f(v_0)}{2L/v_f(v_0)}\,n(v_0)\,dv_0 = \frac{2m v_f(v_0)}{2L/v_f(v_0)}\cdot 2N\sqrt{\frac{m}{2\pi k_B T}}\,e^{-mv_0^2/2k_BT}\,dv_0 = \frac{2Nm\,v_f^2(v_0)}{L v_T\sqrt\pi}\,e^{-v_0^2/v_T^2}\,dv_0, \tag{16} $$
where $N$ is the total electron number and the factor 2 makes the one-sided speed distribution. Using $\langle v_f^2\rangle = 20v_Tu$ and extending the integral to $\infty$ (the weight beyond $10v_T$ is negligible),
$$ F = \frac{40mNv_Tu}{Lv_T\sqrt\pi}\int_0^{\infty} e^{-v_0^2/v_T^2}\,dv_0 = \frac{40mNu}{L\sqrt\pi}\cdot\frac{\sqrt\pi}{2}v_T = \frac{20mNv_Tu}{L}. \tag{17} $$
For wall area $S$ the pressure is
$$ p = \frac{F}{S} = 20m v_T u\cdot\frac{N}{LS}. \tag{18} $$
The last factor is the number density $n = N/(LS)$, linked to the initial pressure by $p_0 = n k_B T$. Eliminating $n$,
$$ \boxed{\;p = 20m v_T u\cdot\frac{p_0}{k_B T} = 20\,p_0\,u\sqrt{\frac{2m}{k_B T}}.\;} \tag{19} $$

So the answer is two-regime: $p = p_0$ for a slow shock $u \ll v_T/k$, and $p = 20\,p_0\,u\sqrt{2m/k_BT}$ for a fast one.

---
*Re-derivation check (consistent): the dimensional/algebraic links hold — $\sqrt{2U_0/m}=10v_T$ uses $U_0=100k_BT$; (9) is the mean of a sawtooth of amplitude $20v_Tu$; the Gaussian integral $\int_0^\infty e^{-v_0^2/v_T^2}dv_0=\tfrac{\sqrt\pi}{2}v_T$ reduces (17) to $20mNv_Tu/L$; and $mv_T/k_BT=\sqrt{2m/k_BT}$ turns (18) into (19). The crossover $v_T/k=\sqrt{2}\,\sqrt{k_BT/U_0}\sqrt{k_BT/m}$ matches (15). The physical adiabatic-invariant argument is the author's.*
