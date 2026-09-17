---
id: eupho-2019-T1
problem: eupho-2019-T1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2019
verification_status: unverified
figure_files: []
---

## Solution

### Part a

With the given assumptions of constant droplet size and constant atmospheric density, the drag force leads to a constant terminal velocity $v$ for the fall of the droplet through the atmosphere.

We assume that the droplet temperature $T_d$ above $h_A$ follows the atmospheric temperature profile, and remains constant and equal to $T_0 = 0\ ^\circ\text{C}$ during the melting below that height.

For small temperature differences $\Delta T = T - T_d$, the heat exchange rate is proportional to this difference:
$$\frac{dQ}{dt} = \kappa\,\Delta T.$$
The factor $\kappa$ depends on the droplet geometry, its velocity, and the air density; since these are all constant, $\kappa = \text{const}$.

In the region between $h_A$ and $h_B$ the droplet is heated at rate
$$dQ = \kappa(T - T_0)\,dt = -\kappa(T - T_0)\,\frac{dh}{v}.$$
The total heat transfer between $h_A$ and $h_B$ equals the latent heat needed to completely melt the droplet:
$$Q = \frac{\kappa A}{v} = mL, \tag{1}$$
where $A = 5.0\ \text{km}\cdot{^\circ\text{C}}$ is the area between the temperature curve and the height axis in the region between $h_A$ and $h_B$.

In the region below $h_B$ the liquid droplet partially freezes again. The mass fraction $\eta$ of liquid freezing before reaching the ground is derived from the area $A' = 4.0\ \text{km}\cdot{^\circ\text{C}}$ between the curve and the height axis below $h_B$:
$$Q' = -\frac{\kappa A'}{v} = -\eta m L. \tag{2}$$

Dividing (2) by (1):
$$\boxed{\eta = \frac{A'}{A} = \frac{4}{5} = 0.80.}$$

### Part b

If the temperature profile follows the dashed line (no inversion), the droplet completely melts and the transferred heat warms it. Since the latent heat of melting is much larger than $c_\text{water}\times\text{(a few degrees)}$, the temperature of the liquid droplet will closely follow the atmospheric temperature. As a zeroth-order estimate the droplet temperature at ground level is close to $8\ ^\circ\text{C}$.

For a better estimate introduce a coordinate $x$ with origin at the height where the droplet is completely molten (somewhat above $h_B$), oriented downward. The droplet temperature satisfies
$$m c_\text{water} v \frac{dT_d}{dx} = \kappa(T - T_d), \tag{3}$$
where the atmospheric temperature is $T(x) = T(0) + b\,x$ with $b = 2.0\ ^\circ\text{C\,km}^{-1}$.

Defining $\Delta T = T - T_d$:
$$\frac{d\Delta T}{dx} = b - \frac{\kappa}{m c_\text{water} v}\,\Delta T. \tag{4}$$

This is solved by
$$\Delta T = b\,x_0 + C\exp(-x/x_0), \qquad x_0 = \frac{m c_\text{water} v}{\kappa}.$$

From equation (1), $\kappa/v = mL/A$, so
$$x_0 = \frac{c_\text{water}\,A}{L} \approx \frac{4.2 \times 5.0}{334}\ \text{km} \approx 0.063\ \text{km}.$$

The exponential factor is negligible at ground level (which is $\sim 2\ \text{km}$ below the origin), giving a steady-state lag:
$$\Delta T \approx b\,x_0 \approx 2.0 \times 0.063 \approx 0.13\ ^\circ\text{C},$$
and therefore
$$T_d \approx 8.0 - 0.13 \approx 7.9\ ^\circ\text{C}.$$

An additional correction from viscous dissipation can be estimated by equating the droplet's gravitational power $mgv$ to the thermal power carried away by the circumfluent air $\kappa\,\Delta T^*$, giving $\Delta T^* \sim mgv/\kappa = gA/L \approx 0.17\ ^\circ\text{C}$. Taking both corrections into account yields $T_d \approx 8.0\ ^\circ\text{C}$.
