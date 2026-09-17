---
id: eupho-2024-E1
problem: eupho-2024-E1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2024
verification_status: unverified
figure_files: []
---
## Solution

*This is an experimental problem; the official solution gives one valid measurement procedure per part together with the reference numerical results. Plots referenced (Figs. 1–12 of the solution document) are not reproduced here.*

### Task E.1 — Elasticity of the ball

The elasticity $\eta$ can be computed as the ratio of the kinetic energy immediately before and after the bounce. Since air drag is small, these energies are directly proportional to the dropping height $h$, or to the bouncing height $h_b$. To measure $h$ or $h_b$ precisely, minimise parallax errors and account for the ruler's zero being offset from its endpoint.

One method: attach the ruler with the peg onto one wing of the stand, fix (by suction) a ball to the black pipe of the release mechanism, and read the ruler at the lowest point of the hanging ball. Call this reading $s$; it relates to $h$ via the wood thickness on the bottom ($t = 4$ mm) and the start of the scale on the ruler ($z = 5$ mm), so $h = s - t - z$.

Record the dropping and bouncing height for 4 different heights, repeating 5 times each. A linear fit of $h_b$ vs. $h$ gives a slope

$$\gamma = (81 \pm 1)\% =: \eta;$$

therefore the energy loss fraction is

$$\frac{\Delta E}{E_0} = 1 - \eta = (19 \pm 1)\%. \tag{1}$$

(Computing the ratio at each height and averaging the 4 ratios is a valid but less precise method.)

### Task E.2 — Piezoelectric properties

**a) Capacitance of the capacitor.** Charge the capacitor with the battery, connect it to the multimeter in the 2 V DC range, and switch off the battery. Start the stopwatch when the discharge begins. The capacitor discharges via the voltmeter's inner resistance ($R_V = 11.1\ \mathrm{M\Omega}$). Every 5 s, record the voltage. The discharge obeys

$$\ln\frac{U(t)}{U_0} = -\frac{t}{R_V C}. \tag{2}$$

Plot $\ln U(t)$ vs. $t$, fit a line and compute $C$ from the slope:

$$C = (2.24 \pm 0.08)\ \mu\mathrm{F}. \tag{3}$$

**b) Capacitance of the piezo element.** The piezo capacitance $C_p$ is much smaller than $C$, so the direct-discharge technique of part (a) is too fast. Instead, build a circuit that repeatedly charges the piezo with the battery and discharges it onto the much larger capacitor $C$. After each cycle, measure the capacitor voltage $U_C$, discharging both $C$ and $C_p$ between measurements.

Working out the charge transferred in the $N$th cycle: if the capacitor has voltage $U_{N-1}$ (charge $Q_{N-1} = C U_{N-1}$) and the fully charged piezo has charge $Q_p = C_p U_0$, then after connecting them the new voltage is

$$U_N = \frac{Q_{N-1} + Q_p}{C + C_p} = \frac{C}{C + C_p}U_{N-1} + \frac{C_p}{C + C_p}U_0. \tag{4}$$

At saturation $U_N = U_{N-1} = U_0$: the voltage saturates at the charging voltage. Far from saturation ($U_N \ll U_0$), (4) reduces to

$$\frac{C}{C+C_p}(U_N - U_{N-1}) = \frac{C_p}{C+C_p}U_0,$$

with linear solution

$$U_N = N\frac{C_p U_0}{C}, \tag{6}$$

a good approximation when $N C_p \ll C$. Measuring $U_0 \approx 1.405$ mV and fitting the linear relation $U_N \propto N$ gives

$$C_p = (23.5 \pm 2.4)\ \mathrm{nF}. \tag{7}$$

(The exact recursion solves to $U_N = U_0 - \left(\tfrac{C}{C+C_p}\right)^N U_0$, giving the same saturation in the limit $N\to\infty$; fitting $\log\frac{U_0 - U_N}{U_0} = N\log\frac{C}{C+C_p}$ is also accepted. Eq. (8)/(9).)

**c) Response function.** Assemble a circuit charging the capacitor $C$ via the piezo (the capacitor is needed because connecting the voltmeter directly to the piezo discharges it faster than a reading can be taken). Place the piezo on the scales and push down while the switch to the capacitor is closed; at the desired weight, cut off the capacitor and release. The under-load voltage is transferred to $C$ and read via the voltmeter. Compute force from mass via $F = mg$, and piezo voltage from capacitor voltage by multiplying by $C/C_p$ (using $C_p \ll C$). Repeat ~5 times per weight and average.

Plotting piezo voltage $U_p$ vs. force $F$, the dependence is linear up to about 10 N. Fitting that range gives

$$\beta = (3.37 \pm 0.1)\ \mathrm{V/N}. \tag{10}$$

(A wider linear fit yields $\beta = (3.54 \pm 0.08)\ \mathrm{V/N}$.)

**d) Saturation.** Using large-weight data, the saturation point is the intersection of the low-force linear fit and the saturated-region fit. With the piezo area $A_p = \pi r_p^2 \approx 4.15\times10^{-4}\ \mathrm{m}^2$:

$$U_\mathrm{sat} = (86 \pm 16)\ \mathrm{V}, \tag{11}$$
$$p_\mathrm{sat} = \frac{F_\mathrm{sat}}{A_p} = (55000 \pm 7000)\ \mathrm{Pa}, \tag{12}$$
$$\sigma_\mathrm{max} = \frac{C_p U_\mathrm{sat}}{A} = (4.9 \pm 0.9)\ \mathrm{mC/m^2}. \tag{13}$$

### Task E.3 — Small area behaviour

Use the setup from E.2c, but instead of loading the whole surface, use the wooden stick to poke into the hole of the plywood cover and measure the force $F_s$ with the scales as before. Plotting $U_p(F_s)$ shows almost the same dependence as in E.2c, with slope coefficient

$$\beta_s = (3.37 \pm 0.1)\ \mathrm{V/N},$$

essentially the same as $\beta$ from part c. **Result: there is no significant change** in the electrical response when the force is applied to a small area (in the linear regime).

### Task E.4 — Deformation of the ball

When the ball is dropped onto the piezo, the kinetic energy just before collision is partly converted into elastic deformation and the rest dissipated. At maximum deformation the kinetic energy is zero and the force is maximal. Using the diode soldered to the capacitor to prevent backflow, the maximum voltage during the collision is stored.

Drop the ball from different heights (different pre-impact kinetic energies). Each time, read the maximum capacitor voltage, convert to piezo voltage by $\times C/C_p$, and to maximum force $F_m$ by $\times\beta$ (from E.2c). The maximum deformation is

$$F = k x^\alpha \implies x_m = \left(\frac{F}{k}\right)^{1/\alpha}. \tag{14}$$

Integrating the force gives the maximum elastic energy:

$$E_\mathrm{elastic} = \int_0^{x_m} F(x)\,dx = \frac{1}{\alpha+1}k x_m^{\alpha+1} = \frac{k^{-1/\alpha}}{\alpha+1}F_m^{1+1/\alpha}. \tag{15}$$

From E.1, the elastic energy of the ball dropped from height $h$ is

$$E_\mathrm{elastic} = \eta m g h, \tag{16}$$

where $m = (8 \pm 0.5)$ g. Taking logarithms,

$$\ln E_\mathrm{elastic} = \ln\frac{k^{-1/\alpha}}{\alpha+1} + \left(1 + \frac{1}{\alpha}\right)\ln F_m. \tag{17}$$

The slope $\gamma$ of the $\ln E_\mathrm{elastic}$ vs. $\ln F_m$ plot gives

$$\gamma = 1 + \frac{1}{\alpha} \implies \alpha = \frac{1}{\gamma - 1} \approx 0.75 \pm 0.06 \tag{18}$$

(using the central linear region of the data; the official scheme accepts $\alpha$ between $1 \pm 0.5$). From the intercept ($y_0 = -15.7$),

$$k = \big((\exp y_0)(\alpha+1)\big)^{-\alpha} \approx (84000 \pm 7000)\ \mathrm{N/m^\alpha}. \tag{20}$$

*Note (official): this result is surprising, since Hertz theory predicts an exponent of $3/2$. The discrepancy is again attributed to the piezo crystal being glued to the plates — as the crystal tries to take a bowl shape, the plate moves slightly toward the ball, so the ball's deformation no longer strictly corresponds to its displacement during impact.*

### Task E.5 — Interaction time

When the less elastic ball bounces, estimate its momentum change $\Delta p_1$:

$$\Delta p_1 = \int F_1(t)\,dt = \int \frac{a_1}{b_1}f(t)\,dt \propto F_{1\,\mathrm{max}}\,\tau_1,$$

where $F_{1\,\mathrm{max}} = a_1 F_{0\,\mathrm{max}}$ is the maximal force and $\tau_1 \approx \tau_0/b_1$ is the interaction time. Therefore

$$\frac{\Delta p_1}{\Delta p_0} = \frac{v_1}{v_0} = \frac{F_{1\,\mathrm{max}}}{F_{0\,\mathrm{max}}}\cdot\frac{\tau_1}{\tau_0}.$$

Measuring $v_1/v_0 = \sqrt{h_1/h_0}$ and $F_{1\,\mathrm{max}}/F_{0\,\mathrm{max}} = U_1/U_0$, we estimate the time scaling:

$$\frac{U_1}{U_0} = \frac{\tau_1}{\tau_0}\cdot\sqrt{\frac{h_1}{h_0}}, \qquad \text{or}\qquad \tau \propto \frac{U}{\sqrt{h}}.$$

Plotting $U/\sqrt{h_1}$ against $\sqrt{h_1}$, the dependence is horizontal within the measurement errors. **Conclusion: the interaction time $\tau$ does not change appreciably with collision speed $v$ over the range of forces tested.**
