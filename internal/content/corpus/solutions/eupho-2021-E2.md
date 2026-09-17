---
id: eupho-2021-E2
problem: eupho-2021-E2
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

The solution strategy separates the four unknowns ($c$, $k$, $\alpha$, $\beta$) by exploiting different experimental regimes. The surface area of the rod including end caps is $A = 2\pi r L + 2\pi r^2$.

### Finding $c$ (specific heat capacity)

Heat the rod at low power for a short time ($< 60\text{ s}$) so that heat losses are negligible. Insert a total heat $Q = P \cdot t$. The average rod temperature rise is

$$
\Delta T_{\mathrm{avg}} = \frac{Q}{mc},
$$

where the average is computed from the five equally-spaced sensor readings by Simpson's rule:

$$
T_{\mathrm{avg}} = \frac{T_1 + 4T_2 + 2T_3 + 4T_4 + T_5}{12}.
$$

(A simple average yields a $\sim 5\%$ error.) Heating at various short-pulse configurations for a total of $Q = 1500\text{ J}$, the average temperature is found to be $T_{\mathrm{avg}} = 55.4 \pm 0.5\text{ °C}$, giving

$$
\boxed{c = \frac{Q}{m\,\Delta T_{\mathrm{avg}}} \approx 114 \pm 1\text{ J/(kg K)}.}
$$

### Finding $\alpha + \beta\sigma 4T_0^3$ (combined low-temperature loss coefficient)

Heat the rod at full power ($300\text{ W}$) for 600 s to reach steady state, then turn off the heater and allow the rod to reach a uniform temperature before it cools. For uniform, low-temperature cooling the heat balance is

$$
mc\frac{dT}{dt} = -A\!\left(\alpha + \beta\sigma 4T_0^3\right)(T - T_0),
$$

with solution $T - T_0 = C e^{-Bt}$, where $B = A(\alpha + \beta\sigma 4T_0^3)/(mc)$.

Plot $\ln(T - T_0)$ vs.\ $t$ (or equivalently $dT/dt$ vs.\ $T - T_0$); the slope is $-B$. Use only data from the linear regime ($T < 45\text{ °C}$ or $T < 50\text{ °C}$). The slope is found to be

$$
-B = -1.78 \times 10^{-3}\text{ s}^{-1}.
$$

### Finding $\beta$ (emissivity)

Heat the rod at full power ($300\text{ W}$) until steady state is reached (wait at least 600 s). At steady state the total power in equals the total power out:

$$
300\text{ W} = A\alpha(T_{\mathrm{avg}} - T_0) + A\beta\sigma(T_{\mathrm{avg}}^4 - T_0^4).
$$

The average steady-state temperature (Simpson's rule over five sensors) is $T_{\mathrm{avg}} = 662\text{ °C}$, and the average $T^4$ is

$$
T_{\mathrm{avg}}^4 = \frac{T_1^4 + 4T_2^4 + 2T_3^4 + 4T_4^4 + T_5^4}{12} = 7.95 \times 10^{11}\text{ K}^4.
$$

The linear loss rate from the previously found slope is

$$
A\!\left(\alpha + \beta\sigma 4T_0^3\right)\!(T_{\mathrm{avg}} - T_0) = B\,mc\,(T_{\mathrm{avg}} - T_0) = 59\text{ W}.
$$

The blackbody remainder is $300 - 59 = 241\text{ W}$. This equals $A\beta\sigma(T_{\mathrm{avg}}^4 - T_0^4) - A\beta\sigma 4T_0^3(T_{\mathrm{avg}} - T_0)$ (subtracting the linear part that was already counted). Solving:

$$
\boxed{\beta \approx 0.304 \pm 0.004.}
$$

(Failing to subtract the linear-regime contribution gives $\beta \approx 0.28$.)

### Finding $\alpha$ (convective loss coefficient)

From the low-temperature slope result:

$$
-B = -A\frac{\alpha + \beta\sigma 4T_0^3}{mc} = -1.78 \times 10^{-3}\text{ s}^{-1}.
$$

With $\beta$ now known, solve for $\alpha$:

$$
\boxed{\alpha \approx 2.93\text{ W/(m}^2\text{K)}.}
$$

### Finding $k$ (thermal conductivity)

In the high-temperature steady state, the total heat flow across the midpoint of the rod equals the heat lost by the non-heated half. The average temperature and $T^4$ over the non-heated half (sensors at five equally-spaced positions) give a heat loss rate of $\sim 112\text{ W}$.

The heat flux through the centre is $q = k\,A_{\mathrm{cross}}\,|dT/dx|$, where $A_{\mathrm{cross}} = \pi r^2$. The temperature gradient at the midpoint (using the symmetric numerical derivative $(T_{x+h} - T_{x-h})/(2h)$ with points no more than 5 cm apart and no closer than 1 cm) is $|dT/dx| \approx 898\text{ K/m}$. Thus

$$
\boxed{k = \frac{q}{A_{\mathrm{cross}}\,|dT/dx|} \approx 397\text{ W/(m K)}.}
$$

The metal is consistent with copper ($k \approx 400\text{ W/(m K)}$, $c \approx 385\text{ J/(kg K)}$ — note that the solution value $c \approx 114\text{ J/(kg K)}$ is somewhat low for copper; the true values set in the simulation are the authoritative reference).
