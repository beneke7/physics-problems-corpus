---
id: eupho-2017-E1
problem: eupho-2017-E1
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

*Note: This is an experimental problem. Point tables from the grading scheme are omitted. Numerical results are sample data from the official solution; student results will vary.*

### Task 1: Diode characteristics

**Finding $V_{G0}$ and $n$, $A$ via the $V$–$T$ graph.**

The diode formula is $I_d = Ae^{-V_{G0}/(nV_T)}\left(e^{V/(nV_T)} - 1\right)$. Since $V_T \approx 25\ \text{mV}$ at $T \approx 300\ \text{K}$ and all junction voltages are much larger, the "$-1$" can be dropped. At constant small current $I_d$ (using the multimeter's diode-test mode, $\approx 0.33\ \text{mA}$), taking logarithm gives:

$$\frac{V - V_{G0}}{nV_T} = \text{const},\quad\text{hence}\quad V = V_{G0} - \frac{BnkT}{q},$$

where $B$ is a constant. Therefore $V$ is linear in $T$, and $V_{G0}$ is the extrapolated intercept at $T = 0$. Plotting $V$ vs. $T$ and extrapolating the linear regression to $T = 0$ gives:

$$V_{G0} \approx 2.085\ \text{V}.$$

**Finding $n$ and $A$ from $V$ vs. $\ln I_d$ at room temperature.**

At fixed temperature, with the $-1$ dropped:

$$\frac{V - V_{G0}}{V_T} = n\ln A - n\ln I_d.$$

Plotting $(V - V_{G0})/V_T$ versus $\ln I_d$ gives a straight line; the slope is $-n$ and the intercept is $n\ln A$. From the sample data:

$$n \approx 1.55,\quad A \approx 119\ \text{A}.$$

(Alternatively, the same information can be obtained by varying $T$ at fixed voltage and plotting $(V - V_{G0})q/(kT)$ versus $\ln I_d$.)

**Measuring the series resistance $R_s$.**

At large currents, the voltage drop on $R_s$ becomes comparable to the junction voltage change. Since $\Delta V_\text{junction} \ll \Delta(I_d R_s)$ at high currents (the exponential dependence makes the junction voltage change slowly), measuring $V' = V + I_d R_s$ vs. $I_d$ at large currents yields $R_s$ as the slope:

$$R_s \approx 0.75\ \Omega.$$

### Task 2: LED efficiency $\eta$

The idea is to compare the thermal expansion of sealed air (inside an airtight bottle) when the diode generates heat versus when a resistor generates heat. All electrical power consumed by the resistor becomes heat; the diode converts a fraction $\eta$ of its power to light, which leaves the bottle.

A water U-tube manometer measures the pressure difference $\Delta p$ inside the bottle relative to atmospheric. Since $\Delta p \propto$ thermal power dissipated, measuring $\Delta p$ as a function of electrical power $P$ for both the diode and the resistor, and fitting to linear laws $\Delta p = k_D P$ and $\Delta p = k_R P$, gives:

$$\eta = 1 - \frac{k_R}{k_D}.$$

From the sample data ($k_D = 41.0\ \text{mm/W}$, $k_R = 79.8\ \text{mm/W}$... note: only the ratio $k_R/k_D$ matters; using the actual slopes from the measurement):

$$\eta \approx 0.48.$$

An equivalent method uses the temperature sensor: compare the circuit-board temperature rise $T_D(P)$ vs. $T_R(P)$ for the diode and resistor respectively, and compute $\eta = 1 - \kappa_D/\kappa_R$ where $\kappa$ denotes the slope $dT/dP$. This gives $\eta \approx 0.46 \pm 0.04$.

### Task 3: Photocurrent and photoefficiency $\eta_p$

When one LED illuminates the other at $d = 3.0\ \text{cm}$ with current $I_1 = 0.50\ \text{A}$, the receiving LED acts as a photodiode with photocurrent $I_p$. The total current is $I = I_d - I_p$ (photocurrent subtracts from diode current).

The electrical power harvested is $P = V \cdot I = V(I_d - I_p)$. To find the maximum, vary the voltage on the receiving diode and measure $I$ vs. $V$. The short-circuit current gives $I_p \approx 15\ \mu\text{A}$.

From measurements, the maximum harvestable power:

$$P_\text{max} \approx 17\ \mu\text{W}.$$

The photoefficiency is the ratio of $P_\text{max}$ to the optical power incident on the active area $S = 1.56\ \text{mm}^2$:

$$\eta_p = \frac{P_\text{max}}{P_\text{incident}} = \frac{P_\text{max}}{\eta \cdot V_1 I_1 \cdot \dfrac{S}{\alpha \cdot 4\pi d^2}},$$

where $\alpha = 0.33$ is the fraction of the sphere into which the emitting LED radiates uniformly (so the total solid angle is $\alpha \times 4\pi$, and the intensity is $\eta V_1 I_1 / (\alpha \cdot 4\pi d^2)$ per unit area at distance $d$). Numerically:

$$\eta_p \approx 0.04.$$
