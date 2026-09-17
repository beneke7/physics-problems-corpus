---
id: eupho-2017-T2
problem: eupho-2017-T2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2017
verification_status: unverified
figure_files: []
---

## Solution

### Initial acceleration

The initial pressure on the thermal insulating layer is $P_0 = nk_BT_0$, where $n$ is the number density of the gas. It originates from multiplying the flux $j_0 \propto v_{x0}$ and the momentum that one molecule transfers $p_0 = 2mv_{x0}$ (elastic collision), where $v_{x0}$ is the normal component of molecule's velocity, and taking the average ($2\langle v_{x0}^2\rangle \propto T_0$).

When applying the same idea to the surface with good thermal contact, we find that the flux remains the same, although the momentum increases:

$$p_1 = m(v_{x0} + v_{x1}) \approx mv_{x1},$$

where $v_{x1}$ is the normal velocity component of the molecule flying away from the disk. Thus for pressure $P_1$:

$$\frac{P_1}{P_0} = \frac{v_{x0}\,v_{x1}}{2v_{x0}^2} \approx \frac{\sqrt{T_1 T_0}}{T_0},$$

which is correct to some numerical coefficient of the order of one.

The net force acting on the disk:

$$F = (P_1 - P_0)S \approx Snk_B\sqrt{T_0 T_1},$$

and then the initial acceleration:

$$a_0 \approx \frac{Snk_B}{M}\sqrt{T_0 T_1} = \frac{S\rho k_B}{mM}\sqrt{T_0 T_1}.$$

### Maximal velocity

Since $P_1 \gg P_0$, the disk will accelerate until its speed becomes of the order of average gas molecules speed. After the velocity $v$ of the disc becomes on the order of $v_0 = \sqrt{k_BT_0/m}$, the flux of molecules reaching the backside $j(v)$ decays faster than exponentially due to the nature of the molecular velocity distribution in the ideal gas (for example, $j(2v_0) \approx 10^{-3}j_0$ and $j(3v_0) \approx 10^{-6}j_0$). That leads to a proportional decrease in the propelling pressure $P_1$. In order to compensate for an initial bias $\sqrt{T_1/T_0} \approx 30$, it will take around a factor of one on the velocity of the disk. Therefore the maximum velocity of the disk:

$$v_\text{max} \approx v_0 = \sqrt{\frac{k_B T_0}{m}}.$$

### Justification of slow cooling

The acceleration time is approximately:

$$t_a \approx \frac{v_\text{max}}{a_0} \approx \frac{M\sqrt{mk_BT_0}}{S\rho k_B\sqrt{T_0 T_1}} = \frac{M}{\rho S}\sqrt{\frac{m}{k_BT_1}}.$$

Since the power of heat removal $P_\text{th}$ is maximal at the beginning (at zero velocity), we can upper-bound estimate the time for the disk to cool as $t_c = Q/P_\text{th}$, where $Q$ is the total heat of the disk. The initial thermal power of heat removal can be estimated as:

$$P_\text{th} \approx Sj_0 \times k_BT_1 \approx Snk_B\sqrt{T_0 T_1}\cdot\sqrt{\frac{k_BT_1}{m}},$$

and the total heat $Q \approx Nk_BT_1$. Given $M \approx Nm$, we obtain:

$$t_c \approx \frac{(M/m)k_BT_1}{Snk_BT_1\sqrt{k_BT_0/m}} = \frac{M}{\rho S}\frac{1}{\sqrt{k_BT_0 m}}.$$

Finally, $t_a/t_c \approx \sqrt{T_0/T_1} \ll 1$, and indeed the disk will not cool significantly before it reaches the velocity about $v_0$.
