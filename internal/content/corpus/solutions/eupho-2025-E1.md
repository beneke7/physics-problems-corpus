---
id: eupho-2025-E1
problem: eupho-2025-E1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2025
verification_status: unverified
figure_files: []
---
## Solution

The term "neuron" was chosen in analogy to cells of the nervous system, which transmit electrochemical signals (variable $y$) depending on the integral stimulus ($z$) on their input extremities (variables $x_i$). The Nobel Prize in Physics 2024 was awarded to John J. Hopfield and Geoffrey E. Hinton "for foundational discoveries and inventions that enable machine learning with artificial neural networks."

### Task 1

The multimeter is connected in ohmmeter mode to all three pairs of output terminals of the A-potentiometer. Turning the knob gives the following maximum and minimum resistances:

| Terminals | $R_\text{min}\ (\Omega)$ | $R_\text{max}\ (\Omega)$ |
|-----------|--------------------------|--------------------------|
| A1–A2 | 1000 | 1000 |
| A1–A3 | 222  | 1222 |
| A2–A3 | 222  | 1222 |

If the load resistor were connected to either A1 or A2, then $R_\text{min}$ for the A1–A3 and A2–A3 pairs would be close to zero. In contrast, measurements show $R_\text{min} = 222\ \Omega$ for these pairs. Therefore, the load resistor is connected between A3 and the potentiometer slider (circuit **scheme 2**). For either of A1–A3 and A2–A3 we have $R_\text{min} = R_L$ and $R_\text{max} = R_P + R_L$:

$$R_L = 222\ \Omega, \qquad R_P = 1000\ \Omega$$

### Task 2

Connect one potentiometer (e.g. A-potentiometer) so that A1 is connected to GND, A2 is connected to +V, and the slider A3 is connected to X1. Similarly connect the B-potentiometer to X2. This allows $x_1$ and $x_2$ to range independently from 0 V to $\approx +V$.

### Task 3

Points of constant output voltage satisfy $w_1 x_1 + w_2 x_2 + b = \text{const}$, defining a family of parallel straight lines perpendicular to $\vec{w} = (w_1, w_2)$. For any set of weights, $y_\text{max}$ and $y_\text{min}$ are always attained at vertices of the accessible input rectangle.

Therefore, only three corner measurements are needed to determine $y_\text{max}$: measure two adjacent corners, identify the higher one, then follow one edge from that corner to a third corner. The fourth corner must be lower than the third.

| $x_1\ (\text{V})$ | $x_2\ (\text{V})$ | $y\ (\text{V})$ |
|-------------------|-------------------|-----------------|
| 0.00 | 0.00 | 2.30 |
| 3.15 | 0.00 | 1.15 |
| 3.15 | 3.15 | 2.56 |
| 0.00 | 3.15 | 2.73 |

$$y_\text{max} = 2.73\ \text{V}, \quad x_1 = 0.00\ \text{V},\quad x_2 = 3.15\ \text{V}$$

### Task 4

The three parameters $w_1$, $w_2$, $b$ are determined by two series of measurements: varying $x_1$ at fixed $x_2 = 0$ and varying $x_2$ at fixed $x_1 = 3.02\ \text{V}$. The path $(0,0)\to(3,0)\to(3,3)\ \text{V}$ avoids the high-$y$ corner near $(0, 3.15)$ where the logarithmic transformation diverges.

The output $y$ is linearised by transforming to:

$$z = \ln\frac{y}{A - y} \approx \ln\frac{y}{y_\text{max} - y}$$

since $z = w_1 x_1 + w_2 x_2 + b$.

**Measurements for $x_2 = 0.00\ \text{V}$** (sample; full data documented on graph paper):

| $x_1\ (\text{V})$ | $y\ (\text{V})$ | $z$ |
|-------------------|-----------------|------|
| 0.00 | 2.31 | 1.68 |
| 0.59 | 2.15 | 1.29 |
| 1.09 | 2.00 | 0.99 |
| 1.72 | 1.76 | 0.59 |
| 2.20 | 1.57 | 0.29 |
| 2.88 | 1.29 | −0.12 |
| 3.02 | 1.23 | −0.21 |

Linear fit of $z$ vs. $x_1$ gives slope $w_1 = \Delta z/\Delta x_1$:

$$w_1 = -0.62\ \text{V}^{-1}$$

Intercept at $x_1 = 0$ (i.e. $x_2 = 0$):

$$b = 1.67$$

**Measurements for $x_1 = 3.02\ \text{V}$** (sample):

| $x_2\ (\text{V})$ | $y\ (\text{V})$ | $z$ |
|-------------------|-----------------|------|
| 0.00 | 1.23 | −0.21 |
| 0.51 | 1.56 | 0.28 |
| 1.06 | 1.88 | 0.78 |
| 1.75 | 2.21 | 1.43 |
| 2.53 | 2.47 | 2.21 |
| 3.02 | 2.57 | 2.72 |

Linear fit of $z$ vs. $x_2$ gives slope:

$$w_2 = \frac{\Delta z}{\Delta x_2} = 0.96\ \text{V}^{-1}$$

The crossing point at $x_1 = 3.02\ \text{V}$ is $z = -0.22$, satisfying $-0.22 = w_1 x_1 + b = -1.87 + b$, giving $b = 1.65$. Best estimate:

$$\boxed{w_1 = -0.62\ \text{V}^{-1}, \quad w_2 = 0.96\ \text{V}^{-1}, \quad b = 1.66 \pm 0.01}$$

### Task 5

Since X1 is connected to +V, input must be supplied through X2. To achieve effective weight $w_2/2$, we halve the input voltage $x$ using the B-potentiometer: set the slider B2 at equal resistance on both sides, connect B1 to GND and B3 to the input $x$, then connect B2 to X2. This gives $x_2 = x/2$.

The resulting $z$ is:

$$z = w_1 U_{+V} + \frac{w_2}{2}x + b$$

so the effective bias is:

$$b_5 = w_1 U_{+V} + b \approx -0.35$$

The output is $y_5(x) = A\sigma(w_2 x/2 + b_5)$.

Experimental verification (sample data, Table 4 in original):

| $x\ (\text{V})$ | $y\ (\text{V})$ | $z$ |
|-----------------|-----------------|------|
| 0.00 | 1.13 | −0.36 |
| 0.80 | 1.39 | 0.02 |
| 1.60 | 1.63 | 0.38 |
| 2.56 | 1.93 | 0.86 |

Plot of $z$ vs. $x$ is linear with slope $\approx 0.47\ \text{V}^{-1} \approx w_2/2$ and intercept $b_5 \approx -0.36$, confirming the theoretical value.

### Task 6

#### a) Output resistance $R_\text{out}$

Set the neuron to a known open-circuit voltage $U_\text{open}$ by connecting +V to X2. Connect Y to GND via the potentiometer resistance $R_P$ and measure the voltage drop $U_P$ across $R_P$:

$$U_\text{open} \approx 2.71\ \text{V}, \qquad U_P \approx 2.11\ \text{V}$$

$$R_\text{out} = \left(\frac{U_\text{open}}{U_P} - 1\right)R_P \approx 284\ \Omega$$

#### b) Circuit for $y_6(x) = A_6\cdot\sigma(w_2 x + b) + B_6$

Connect X1 to GND (so $w_1$ plays no role). Add a voltage divider by connecting the B-potentiometer between terminal Y and the supply voltage +V, with the slider B2 providing the output:

$$y = (1-\eta)A\sigma(w_2 x + b) + \eta U_{+V}$$

where $\eta = (R_\text{out} + R_a)/(R_\text{out} + R_P)$ and $R_a$ is the fraction of $R_P$ between B1 and B3.

Setting $B_6 = \eta U_{+V} = 1.48\ \text{V}$ gives $\eta \approx 0.458$, and the required resistance ratio:

$$\frac{R_a}{R_P} = \frac{1}{R_P}\left(\frac{R_\text{out} + R_P}{2} - R_\text{out}\right) \approx 0.389$$

Theoretical value of $A_6$:

$$A_6 = A(1-\eta) = A\left(1 - \frac{B_6}{U_{+V}}\right) \approx 1.5\ \text{V}$$

Experimental confirmation: from a linear fit of $y_6$ vs. $\sigma(w_2 x + b)$, the slope gives $A_6 \approx 1.53\ \text{V}$ and intercept $B_6 \approx 1.45\ \text{V}$, consistent with theoretical values to 2 significant figures.

*European Physics Olympiad 2025, Experimental Problem 1 — Official Solution. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX. Marking scheme omitted.*
