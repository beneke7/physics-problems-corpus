---
id: nbpho-2022-gas
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2022-gas
figure_files: []
provenance_note: "Official NBPhO 2022 solution, Problem 2, by Jaan Kalda. Mathpix OCR of the cached solutions PDF (cache/phoxiv/nbpho/2022_S.pdf)."
---

**Solution.**

**i)** Immediately after stopping, all molecules move with speed $v$. In the box's
frame, the total molecular energy is conserved, so the average kinetic energy of one
molecule is $m v^2/2$. After thermalization this is $3kT/2$, hence

$$
T=\frac{1}{3}\frac{m v^2}{k}=\frac{1}{3}\frac{\mu v^2}{R}.
$$

**ii)** Immediately after stopping, all molecules move towards the front wall with
speed $v$. During a time interval $t$, the molecules in a layer of thickness $vt$
and volume $A v t$ hit the wall. Their number is

$$
N=\frac{\nu N_A A v t}{V}.
$$

Each molecule reverses its velocity and transfers momentum $2mv$ to the wall. Thus

$$
\Delta p=2\frac{\nu N_A A m v^2 t}{V},
\qquad
P=\frac{\Delta p}{At}=\frac{2\nu\mu v^2}{V}.
$$

**iii)** Only molecules whose three velocity components satisfy $|v_x|,|v_y|,|v_z|
<u$ remain in the trapping region, where

$$
u=\frac{1}{2}\frac{V^{1/3}}{\tau}=100\ \mathrm{m/s}.
$$

This is much smaller than the thermal speed, so the Maxwell distribution is nearly
constant in the relevant interval. The trapped components may therefore be treated
as uniformly distributed between $-u$ and $u$, giving

$$
\langle v_x^2\rangle=\frac{u^2}{3},
\qquad
\left\langle \frac12m(v_x^2+v_y^2+v_z^2)\right\rangle=\frac12m u^2.
$$

Equating this with $3kT'/2$ gives

$$
T'=\frac{1}{3}\frac{m u^2}{k}=\frac{1}{3}\frac{\mu u^2}{R}
\approx 1.6\ \mathrm{K}.
$$
