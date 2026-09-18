---
id: eupho-2022-T2
problem: eupho-2022-T2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2022
verification_status: unverified
figure_files: [eupho-2022-T2-sol-1.png]
---
## Solution

### Part (a): Critical voltages

The power heating the resistor is $P_{\text{el}} = V^2/R$. The equilibrium is reached when $P_{\text{el}} = P = \alpha(T_{\text{eq}} - T_0)$. The equilibrium temperature $T_{\text{eq}}$ must satisfy $T_{\text{eq}} > T_c$ if $R = R_1$ and $T_{\text{eq}} < T_c$ if $R = R_2$. The critical values therefore are

$$V_1 = \sqrt{R_1\alpha(T_c - T_0)}, \qquad V_2 = \sqrt{R_2\alpha(T_c - T_0)}.$$

### Part (b): Temperature behavior

In the oscillating regime, we have a time-dependent current $I(t)$. The power dissipated over the resistor is $P_{\text{el}}(t) = R(t)I(t)^2$. By assumption (ii), we may assume that the thermal equilibrium is reached very fast, i.e. $P_{\text{el}}(t) = P(t)$. The temperature $T(t)$ is therefore determined by the current via

$$T(t) = T_0 + \frac{R(t)I(t)^2}{\alpha}. \tag{3}$$

If the resistance has value $R_1$, the current will increase, trying to reach $J_1 = V/R_1$. The difference $I(t) - V/R_1$ will decay exponentially, with characteristic time $L/R_1$. The phase transition occurs once the critical current

$$I_1 = \sqrt{\frac{\alpha(T_c - T_0)}{R_1}}$$

is reached. After the phase transition, the current will decrease, approaching the new equilibrium value $J_2 = V/R_2$. Again, $I(t) - V/R_2$ will decay exponentially with characteristic time $L/R_2$, until the critical current

$$I_2 = \sqrt{\frac{\alpha(T_c - T_0)}{R_2}}$$

is reached.

The maximum and minimum temperatures will be attained just after the phase transitions occur. We obtain that

$$\frac{T_{\max} - T_0}{T_{\min} - T_0} = \frac{R_2 I_1^2}{R_1 I_2^2} = \frac{R_2^2}{R_1^2}. \tag{4}$$

The qualitative dependence $T(t)$ (and the corresponding resistance $R(t)$) is sketched below: $T$ rises slowly while $R = R_1$, jumps up at the transition, then falls while $R = R_2$, and so on.

![figure](../../../../../sources/eupho/figures/eupho-2022-T2-sol-1.png)

*Fig. 2*

### Part (c): Period of oscillations

If the phase transition occurs at $t = 0$, with the resistance changing from $R_{j'}$ to $R_j$, the current is given by

$$I(t) = \frac{V}{R_j} + \left(I_{j'} - \frac{V}{R_j}\right)e^{-R_j t/L} \tag{5}$$

until the next phase transition occurs when $I(t_j) = I_j$. Hence, the period is the sum of the two half-periods,

$$t_1 + t_2 = \frac{L}{R_1}\ln\left(\frac{I_2 - V/R_1}{I_1 - V/R_1}\right) + \frac{L}{R_2}\ln\left(\frac{I_1 - V/R_2}{I_2 - V/R_2}\right).$$

Substituting $V = \sqrt{V_1 V_2}$ and $R_2 = 16 R_1$ (note $V_2 = 4 V_1$, so $V = 2 V_1$, and $I_1 = 4 I_2$), one obtains

$$T = \frac{L}{R_1}\ln\left(\frac{7}{4}\right) + \frac{L}{R_2}\ln(7) = \frac{L}{R_1}\left(\ln\left(\frac{7}{4}\right) + \frac{1}{16}\ln(7)\right) \approx 0.68\,\frac{L}{R_1}. \tag{7}$$

*Transcribed faithfully from the official EuPhO 2022 theory solutions (born-digital PDF, via phoxiv.org); inline math normalized from Unicode to LaTeX. The intermediate substitution leading to Eq. (7) is summarized; the source presents the two logarithm arguments evaluated directly.*
