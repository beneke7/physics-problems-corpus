---
id: eupho-2022-E1
problem: eupho-2022-E1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2022
verification_status: unverified
figure_files: []
---
## Solution

*Source heading: "Experimental Problem – Solution – Preliminary grading scheme." Theory and key analytic results are transcribed faithfully below; the detailed per-item point-allocation grading tables and example-data plots in the source PDF are summarized rather than reproduced, as they are marking aids rather than physics.*

### E1: Colour and temperature

**Theory.** The infrared thermometer cannot be used to measure the filament temperature for several reasons – the range of the IR thermometer (stated on the instrument) only goes up to $100\,^\circ$C. The filament is also too small to be the only thing measured. IR opacity of the glass bulb is also not guaranteed. Therefore, the only way to measure the temperature is indirectly through the colour index, for which the relation to temperature is provided.

Wien's displacement law suggests that at lower temperatures, the light will contain more red component than green and blue, while at higher temperatures, the green and then the blue will increase faster than red, leading to increasing ratios $G/R$, $B/R$ and $B/G$. We must, however, consider, which pair of filters will be the most suitable choice.

The values measured through different filters depend on the spectral response of each filter, including its overall opacity. It also depends on the sensitivity of the light meter to each wavelength. Instead of theoretical predictions, we are given reference measurements at known temperatures. If we plot the ratios for all three pairs, we observe that $B/G$ is the least suitable, as it changes much less with temperature, compared to the other two. $B/R$ and $G/R$ are comparable, but the blue filter has lower transmittance, which will lead to lower accuracy (higher relative error).

Any pair of filters is a valid choice to proceed with the measurements, but will affect the end accuracy. Averaging the results is also an option, but including $B/G$ combination may still reduce the accuracy of the end result.

To use the plot for converting the colour index to temperature, we need a trend line. A linear trend is enough to cover most of the range, except at lower temperatures, where the relationship tapers off. We can extend the range by combining two trends across the range, or to draw a smooth curve by hand. Zig-zag interpolation is less suitable due to scatter in the reference measurements.

**Experiment.** For the measurement of the power dependence of the temperature, we will read out the voltage and current from the power supply. To sample the expected curve of the $T(P)$ relationship, we must sample it sufficiently well, especially at lower powers where the temperature changes more quickly. We suggest sampling at least 8 powers/temperatures to cover the relationship more precisely and distinguish outliers from reliable measurements. For each power setting, we must measure the illuminance through the chosen filters by covering the sensor of the light meter with a filter. Covering the light meter filters all the light, including the light reflected from the walls and the floor, leading to a better measurement. Placing the filter next to the light source also introduces the risk of burning the filter. Plotting and analysis is to be done in Task 2.

According to measurements with multiple light bulbs in different environments, the fit is

$$T \propto \sqrt[4]{P}, \tag{1}$$

which is used as a baseline for determining the RMS of students' measurements. The *background illuminance* must be measured through all filters – it is most likely zero, but a good experimentalist must check, and if significant, it must be subtracted from measurements. The relation given here is

$$T = (1220\,\text{KW}^{-1/4} \pm 20\,\text{KW}^{-1/4})\sqrt[4]{P}. \tag{2}$$

The distance between the light source and the light meter should be short enough to enable accurate measurements at lower powers. Distance can also be different for different measurements, since not all measurements rely on the constants. (At very low powers, the relation $T\propto\sqrt[4]{P}$ breaks down once the critical temperature is reached, so the trend tapers off at low temperature.)

### E2: Luminous efficacy

**Theory.** Light sources do not radiate in all directions equally. The angular distribution of luminous flux $\Phi$ (luminous intensity) must be integrated over the solid angle. A light meter at distance $r$ to the light source, oriented so that the light falls on it perpendicularly, measures the illuminance $E$ of a certain part of the imagined integration sphere surrounding the light source:

$$\Phi = \oint E(\Omega) r^2 \,\mathrm{d}\Omega. \tag{3}$$

The LED only shines the light into a hemisphere, and has cylindrical symmetry around the direction straight ahead, so we can simplify the expression,

$$\Phi_{\text{LED}} = 2\pi\int_0^{\pi/2} E(\theta) r^2 \sin\theta\,\mathrm{d}\theta, \tag{4}$$

and for the incandescent bulb, the symmetry axis is perpendicular to the direction straight ahead, and shines into full solid angle:

$$\Phi_W = 4\pi\int_0^{\pi/2} E(\theta) r^2 \cos\theta\,\mathrm{d}\theta. \tag{5}$$

The integrals will have to be evaluated numerically – it can be done by using the trapezoidal or the Simpson method, or by using the formula for a spherical segment area given in the hint:

$$\Phi = 2\pi r^2 \sum_i E(\theta_{i,i+1})(\cos\theta_i - \cos\theta_{i+1}) \tag{6}$$

and equivalent (but with use $\cos$) for the incandescent bulb. Here, choosing evaluation points in the middles of intervals is better than choosing one of the edge points. However, the exception are the "edge" measurements, where the measurement point is actually in the middle of the interval – the point straight ahead for the LED is in the middle of the spherical cap. The same goes for the "poles" of the incandescent light bulb.

The ratio between the head-on measured illuminance and the luminous flux, can be expressed as

$$\Phi = \frac{1}{C}r^2 E(0), \tag{7}$$

or, more intuitively, as a correction factor to the isotropic source:

$$\Phi = \frac{1}{C}\,4\pi r^2 E(0). \tag{8}$$

**Analytical estimates.** One possible pathway is to estimate these factors without measurements, using reasonable assumptions about the light distribution. The LED can be assumed a perfect emitter, with a cosine distribution of luminous flux:

$$\hat{C}_{\text{LED}} = \frac{\int_0^{\pi/2}\cos\theta\sin\theta\,\mathrm{d}\theta}{\int_0^{\pi/2}\sin\theta\,\mathrm{d}\theta} = \frac{1}{2}, \tag{9}$$

which turns out to match the experiment well. For the incandescent bulb, a similar assumption can be made based on a thin filament model. The different orientation of the symmetry axis leads to a different result:

$$\hat{C}_W = \frac{\int_0^{\pi/2}\cos^2\theta\,\mathrm{d}\theta}{\int_0^{\pi/2}\cos\theta\,\mathrm{d}\theta} = \frac{\pi}{4} \approx 0.79. \tag{10}$$

These approximations can be used to a good effect but are not required in the experimental solution.

**Experiment.** To measure the angular dependence, a suitable distance to the light source must be chosen. Too far, and the signal and background could become noticeable. It is advisable to measure the angular dependence at the highest power in order to improve the signal to background ratio. Measurement can also be performed through one of the filters. For the incandescent bulb, the finite size of the filament becomes an issue at distances lower than 10 cm. This was not an issue for the colour index measurement, but it matters for the absolute flux estimation. To describe the inflection point in the light distribution well, we will need at least 5 measurements in the $\theta \in [0,\pi/2]$ interval. We can either rotate the light source on the spot, or position the light meter at different angles in relation to the stationary light source.

For the light distribution left-right symmetry can be assumed, or, alternatively, the entire $\theta \in [-\pi/2,\pi/2]$ range can be measured, allowing to check for any systematic error and possible angular offset in the light distribution. The straight ahead measurement is centered in a symmetric band, which needs care so it is not double-counted in case only half of the range is integrated and then doubled.

With the conversion factors known, the luminous efficacy can be determined by measuring the frontal illuminance at powers that cover the entire range from the lowest detectable illuminance to the maximum allowed power. By plotting we observe that the luminous efficacy curves of both light sources flatten at the bottom. For the LED, we can use this baseline to compare against the rated power. For the incandescent bulb, the RMS comparison fits a smoothly flattened function:

$$\eta(P) = \ln(1 + \exp(1.189P - 4.632)) \tag{11}$$

For the LED, the RMS comparison fits

$$\eta(P) = 2.56/P - 23.78P + 259.56 \tag{12}$$

where possible intensity variations can be compensated by allowing $C$ variation in (2)/(4). Variations in the $1/P$ part (due to different offsets in power supply readout) can be compensated by including the low-power measurements from the RMS calculations in a reasonable way.

### E3: Radiative heating

**Theory.** The plate receives a radiant flux density $j$, determined by the power $P$ of the light source, and the distance $r$ between the target and the light source. The light source does not shine equal amounts of light in all directions, therefore we must use the correction factor $C$, derived in Task 2, to convert from the total radiant flux to forward radiant flux density.

$$P = Cr^2 j \;\Rightarrow\; j = \frac{P}{Cr^2}. \tag{13}$$

Not necessary, but also correct, is to (numerically) integrate/average across the different powers, for black and white plate. It is essential to wait for equilibrium, which includes waiting the back temperature to stabilize. The incident flux density is dissipated to the following relations:

$$j = h(T_F - T_0) + \frac{\lambda}{d}(T_F - T_B), \tag{14}$$
$$0 = h(T_B - T_0) + \frac{\lambda}{d}(T_B - T_F). \tag{15}$$

This system of equations leads to the following relations:

$$j = h(T_F + T_B - 2T_0), \tag{16}$$
$$j = (h + 2\frac{\lambda}{d})(T_F - T_B). \tag{17}$$

Any linear combination of equations (14,15) also allows determination of both $h$ and $\lambda$. A particular linear combination that may be used is the isolation of individual temperatures:

$$T_F - T_0 = \frac{1}{2}\left(\frac{1}{h} + \frac{1}{h + 2\frac{\lambda}{d}}\right)j, \tag{18}$$
$$T_B - T_0 = \frac{1}{2}\left(\frac{1}{h} - \frac{1}{h + 2\frac{\lambda}{d}}\right)j. \tag{19}$$

In our system, $2\frac{\lambda}{d} > h$, but still in the same order of magnitude. Treating the slope of $T_F$ as $1/(2h)$ for the slope of $T_F - T_0$ is a valid approximation, but still not theoretically correct.

**Error analysis.** Errors should be propagated from the slope. For example, if they obtain slopes $k_1 = 1/h$ and $k_2 = 1/(h + 2\lambda/d)$, they should propagate the errors. We should also build up an estimate of error contributions of different terms, or adding squared errors (independent errors), e.g.

$$h = \frac{1}{k_1} \pm \frac{\sigma_1}{k_1^2}, \tag{20}$$
$$\lambda = \frac{d}{2}\left(\frac{1}{k_2} - \frac{1}{k_1}\right) \pm \frac{d}{2}\left(\frac{\sigma_1}{k_1^2} + \frac{\sigma_2}{k_2^2}\right) \tag{21}$$

and analogously for other slope definitions.

**Albedo.** For the white plate, only a part of the incident flux is absorbed, so we replace $j$ by $j(1-\alpha)$ if $\alpha$ is the albedo:

$$j = (1 - \alpha)\frac{P}{Cr^2}. \tag{22}$$

As a consequence, any slope measured for both plates will be in the ratio $(1-\alpha) =$ ratio of slopes. This can be expressed as a ratio of temperatures, or similar differences, or similar.

**Experiment.** The radiant flux density can be varied in two main ways, or a combination of both: by changing the distance, or by changing the current through the light bulb. Both methods are valid, with optimal experimental procedure and nonlinear results. The students should know that varying a single parameter at a time produces cleaner results, and combining both can also be done correctly. The required measurements in this task are the front and back temperature at different illumination powers. Different orientations of symmetry axis ... and additionally, any small variations in power output between light bulbs.

The measurements may take a long time, since at each power one must wait for equilibrium. With large relative temperature differences, the equilibration time is longer, so for the white plate one needs to wait longer, and the lowest temperature difference is the smallest.

In this task, the measurements are subject to many sources of errors: measuring from different distances and at different angles may include different proportions of background or reflected light from the light source from the surrounding area. All measurements should start from the highest power. The model can be expected from the high-power measurements down to the lowest detectable illuminance, where one expects large relative errors due to temperature differences (eq. 17).

For black plate measurements (eqs. 16, 17), example fit gives a slope of the first graph equals $(h + 2\lambda/d)^{-1}$, so $h \approx 16\,\text{Wm}^{-2}\text{K}^{-1}$. Lowest and highest measurement were excluded from the fit. The intercept is $2T_0$. The slope of the second graph equals $(h + 2\lambda/d)^{-1}$, so $\lambda \approx 0.072\,\text{Wm}^{-1}\text{K}^{-1}$. The intercept is reasonably close to 0.

For white plate measurements (eqs. 16, 17), the slope ratio with the black plate result is $(1 - \alpha) = 0.0265/0.0986 = 0.20$ for the first graph, and the second graph confirms this with a closely matching $(1 - \alpha) = 0.0685/0.0173 = 0.27$.

Determination of $h$ and $\lambda$ will require extraction of two trend lines from two plots. Plotting on the same graph counts as two, but the vertical axes must be labelled correctly. The trend lines will have a $j$ = 0 intercept that will be $r$ in case of temperature difference, and the conversion is done correctly at the stage readout.

*Transcribed faithfully from the official EuPhO 2022 experimental solution (born-digital PDF, "Preliminary grading scheme", via phoxiv.org); inline math normalized from Unicode to LaTeX. Equation numbers follow the source. Numerical example-data plots (calibration curves, angular profiles, heat-balance fits) and the detailed point-by-point marking tables in the source are summarized rather than reproduced verbatim.*
