---
id: solution-document-eupho-2022-e-s
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2022_E_S.pdf
extraction_method: cached-mmd
mapped_problems: [eupho-2022-E1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eupho/2022_E_S.pdf."
---

## E1: Colour and temperature

## Theory

The infrared thermometer cannot be used to measure the filament temperature for several reasons - the range of the IR thermometer (stated on the instrument) only goes up to $500^{\circ} \mathrm{C}$. The filament is also too small to be the only thing measured. IR opacity of the glass bulb is also not guaranteed. Therefore, the only way to measure the temperature is indirectly through the colour index, for which the relation to temperature is provided.

Wien's displacement law suggests that at lower temperatures, the light will contain more red component than green and blue, while at higher temperatures, the green and then the blue will increase faster than red, leading to increasing ratios $G / R, B / R$ and $B / G$. We must, however, consider, which pair of filters will be the most suitable choice.

The values measured through different filters depend on the spectral response of each filter, including its overall opacity. It also depends on the sensitivity of the light meter to each wavelength. Instead of theoretical predictions, we are given reference measurements at known temperatures. If we plot the ratios for all three pairs, we observe that $B / G$ is the least suitable, as it changes much less with temperature, compared to the other two. $B / R$ and $G / R$ are comparable, but the blue filter has lower transmittance, which will lead to lower accuracy (higher relative error).

Any pair of filters is a valid choice to proceed with the measurements, but will affect the end accuracy. Averaging the results is also an option, but including $B / G$ combination may still reduce the accuracy of the end result.

To use the plot for converting the colour index to temperature, we need a trend line. A linear trend is enough to cover most of the range, except at lower temperatures, where the relationship tapers off. We can extend the range by combining two trends across the range, or to draw a smooth curve by hand. Zig-zag interpolation is less suitable due to scatter in the reference measurements.

Figure 1: Three choices of the colour index based on each pair of filters. Linear fits for the top part of the range are shown, and a smooth curve.
![](https://cdn.mathpix.com/cropped/79143aec-b0c6-417b-943b-b55ded76014c-01.jpg?height=533&width=920&top_left_y=2177&top_left_x=95)

Using the absolute values from the table instead of ratios is not correct, as the intrinsic luminous flux of
the light source and the measurement distance are not given.

## Experiment

For the measurement of the power dependence of the temperature, we will read out the voltage and current from the power supply. To sample the expected curve of the $T(P)$ relationship, we must sample it sufficiently well, especially at lower powers where the temperature changes more quickly. We suggest sampling at least 8 powers/temperatures to cover the relationship more precisely and distinguish outliers from reliable measurements. For each power setting, we must measure the illuminance through the chosen filters by covering the sensor of the light meter with a filter. Covering the light meter filters all the light, including the light reflected from the walls and the floor, leading to a better measurement. Placing the filter next to the light source also introduces the risk of burning the filter. Planning ahead, we can simultaneously measure the illuminances without a filter, needed in Task 2.

Each colour index is then converted to a temperature by reading out from the calibration graph. We can also estimate the relationship by employing the StefanBoltzman law if we neglect other losses and the contribution of the ambient temperature:

$$
T \propto \sqrt[4]{P}
$$

According to measurements with multiple light bulbs in different environments, the fit is

$$
T=\left(1220 \mathrm{KW}^{-1 / 4} \pm 20 \mathrm{KW}^{-1 / 4}\right) \sqrt[4]{P}
$$

which is used as a baseline for determining the RMS of students' measurements.

The background illuminance must be measured through all filters - it is most likely zero, but a good experimentalist must check, and if significant, it must be subtracted from measurements. This is also a way for us to detect if they left their desk lamp on - if the background differs significantly from the rest of the contestants.

The distance between the light source and the light meter should be short enough to enable accurate measurements at lower powers. Distance can also be different for different power ranges, but care must be taken, as the effect of the finite size of the filament may play a role, as well as the changing reflections from surroundings and from the top of the light stand.

## Marking scheme

General guidelines for marking in all tasks

- Granularity for marks is 0.1 p .
- measurements/results given with inappropriate number of significant figures may get deducted 0.1 p. (rule of no propagating error applies)
- A simple numerical error resulting from a typo is punished by 0.1 p unless the grading scheme explicitly says otherwise.

Figure 2: Dependence of the temperature on the power with a superimposed prediction from the StefanBoltzman law. Shown is a comparison measured at two distances and using two combinations of filters. We see the trends are comparable and remain within $\pm 100 \mathrm{~K}$, and RMS is around $\pm 40 \mathrm{~K}$ based on multiple measurements.
![](https://cdn.mathpix.com/cropped/79143aec-b0c6-417b-943b-b55ded76014c-02.jpg?height=531&width=901&top_left_y=532&top_left_x=98)

- Errors in theoretical derivations which cause dimensionally wrong results are punished by at least $50 \%$ of the marks for the derivation unless the grading scheme explicitly says otherwise.
- Propagating errors are not punished repeatedly unless they either lead to considerable simplifications or wrong results whose validity can easily be checked later.
- Negative points cannot decrease the score under the same section (A1,A2,...) below zero.

| Calibration |  | Points |
| :--- | :--- | :--- |
| A1 | Plotting | 1.0 |
|  | Compute color indices for sufficient number of data points over range | 0.3 |
|  | Proper axis labels \& ticks | 0.1 |
|  | Sufficient size of graph for precise readout ( $\geq \frac{1}{2}$ page) | 0.1 |
|  | Each point computed/drawn incorrectly | -0.1 |
| A2 | Trend line | 0.5 |
|  | Smooth trend curve or a composite of linear trends | 0.5 |
|  | Single linear trend line (generates outliers at some temperatures) | or 0.3 |
|  | Zig zag connected points (=used interpolation for readout), or pointwise connected curve | or 0.1 |
| Total on Calibration |  | 1.5 |

This section is only for the calibration data (tables, graphs) based on the given table. Plots made based on IR measurements, get zero points.

Full points are given for a single colour index graph, or for multiple colour indices which may be on the same plot or on the separate plots.

Absolute values plotted: At most 0.2 points for A1 (if axes and ticks are done correctly, see the table above), if they plotted the absolute values through one filter or differences of values of several filters, instead of colour indices. The illuminance depends on the distance and
the brightness of the light source, so absolute values cannot be used to determine the temperature. Points for A2 may nevertheless be given.

Figure 2: Dependence of the temperature on the power with a superimposed prediction from the StefanBoltzman law. Shown is a comparison measured at two distances and using two combinations of filters. We see the trends are comparable and remain within $\pm 100 \mathrm{~K}$, and RMS is around $\pm 40 \mathrm{~K}$ based on multiple measurements.
| Measurements |  | Points |
| :--- | :--- | :--- |
| B1 | Data collection † | 1.2 |
|  | Measured $U, I, E$ through 2 or 3 filters at $n \leq 8$ points (for 1 filter only $3 / 4 n$ and rounded, for measurement of $U$ and $I$ or RG(B) only, which typically happens with measurements with IR thermometer, max. 0.3) | -0.1 |
| B2 | Temperature plot ‡ | 0.9 |
|  | Determine temperatures | 0.3 |
|  | Plot of data | 0.3 |
|  | Add best fit curve | 0.1 |
|  | Proper axis labels \& ticks | 0.1 |
|  | Proper size of graph | 0.1 |
|  | Each point determined/drawn incorrectly | -0.1 |
| B3 | Result quality ‡ | 0.4 |
|  | Nonlinearity of the relationship is visible | 0.1 |
|  | Nonmonotonous relationship | -0.1 |
|  | RMS from best fit within 40 K | 0.3 |
|  | RMS from best fit within 80 K | or 0.2 |
|  | RMS from best fit within 120 K | or 0.1 |
| Total on Measurements |  | 2.5 |


† Presentation of data: If $U$ and $I$ are directly multiplied and only $P$ values are presented, no marks are deducted.

Background: Points for background are only granted if the background is subtracted from the measurements, or can be reasonably neglected.
‡ IR measurement: If temperatures are "determined" from IR measurements or any other method unfit to determine the temperature, no marks are given for B2. The same holds for B3, because presence of nonlinearity is not an indicator of quality for meaningless data.

To determine the RMS at B3, we compare it to Eq. 2 and take the root of the mean squared deviation. Reasonably exclude any outlying measurements at very low powers where we expect large deviations. The RMS calculations can be handled by the auxiliary Excel file.

## E2: Efficacy

## Theory

Light sources do not radiate in all directions equally. The angular distribution of luminous flux $\Phi$ (luminous intensity) must be integrated over the solid angle. A light meter at distance $r$ to the light source, oriented so that the light falls on it perpendicularly, measures the illuminance $E$ of a certain part of the imagined integration sphere surrounding the light source:

$$
\Phi=\oint E(\Omega) r^{2} \mathbf{d} \Omega
$$

The LED only shines the light into a hemisphere, and has cylindrical symmetry around the direction straight ahead, so we can simplify the expression,

$$
\Phi_{L E D}=2 \pi \int_{0}^{\pi / 2} E(\theta) r^{2} \sin \theta \mathrm{~d} \theta
$$

and for the incandescent bulb, the symmetry axis is perpendicular to the direction straight ahead, and shines into full solid angle:

$$
\Phi_{W}=4 \pi \int_{0}^{\pi / 2} E(\theta) r^{2} \cos \theta \mathrm{~d} \theta
$$

The integrals will have to be evaluated numerically it can be done by using the trapezoidal or the Simpson method, or by using the formula for a spherical segment area given in the hint:

$$
\Phi=2 \pi r^{2} \sum_{i} E\left(\theta_{i+1 / 2}\right)\left(\cos \theta_{i}-\cos \theta_{i+1}\right)
$$

and equivalent (but with sin ⟺ cos) for the incandescent bulb. Here, choosing evaluation points in the middles of intervals is better than choosing one of the edge points. However, the exception are the "edge" measurements, where the measurement point is actually in the middle of the interval - the point straight ahead for the LED is in the middle of the spherical cap. The same goes for the "poles" of the incandescent light bulb.

The ratio between the head-on measured illuminance and the luminous flux, can be expressed as

$$
\Phi=C r^{2} E(0),
$$

or, more intuitively, as a correction factor to the isotropic source:

$$
\Phi=\{4 \pi, 2 \pi\} \tilde{C} r^{2} E(0)
$$

## Analytical estimates

One possible pathway is to estimate these factors without measurements, using reasonable assumptions about the light distribution. The LED can be assumed a planar emitter, with a cosine distribution of luminous flux:

$$
\tilde{C}_{L E D}=\frac{\int_{0}^{\pi / 2} \cos \theta \sin \theta \mathrm{~d} \theta}{\int_{0}^{\pi / 2} \sin \theta \mathrm{~d} \theta}=\frac{1}{2}
$$

which turns out to match the experiment well.
For the incandescent bulb, a similar assumption can be made based on a thin filament model. The different orientation of the symmetry axis leads to a different result:

$$
\tilde{C}_{W}=\frac{\int_{0}^{\pi / 2} \cos ^{2} \theta \mathrm{~d} \theta}{\int_{0}^{\pi / 2} \cos \theta \mathrm{~d} \theta}=\frac{\pi}{4} \approx 0.79
$$

These approximations can be used to a good effect but are not required in the experimental task.

## Experiment

To measure the angular dependence, a suitable distance to the light source must be chosen. Too far, and the signal becomes weak and any background could become noticeable. It is advisable to measure the angular dependence at the highest power in order to improve the signal to background ratio. Measurement can also be performed through one of the filters.

For the incandescent bulb, the finite size of the filament becomes an issue if we measure too close to the bulb. This becomes noticeable at distances lower than 10 cm . This was not an issue for the colour index measurement, but it matters for the absolute flux estimation.

Figure 3: Angular profile of the incandescent light bulb, measured at $r=15 \mathrm{~cm}, P=20.6 \mathrm{~W}$ in increments $10^{\circ}$. Vertical lines are the division angles for formula (6). We obtain $C=10.01$ ( $\tilde{C}=0.80$ ).
![](https://cdn.mathpix.com/cropped/79143aec-b0c6-417b-943b-b55ded76014c-03.jpg?height=533&width=903&top_left_y=1546&top_left_x=1048)

To describe the inflection point in the light distribution well, we will need at least 5 measurements in the $\theta \in [0, \pi / 2]$ interval. We can either rotate the light source on the spot, or position the light meter at different angles in relation to the stationary light source.

For the light distribution left-right symmetry can be assumed, or, alternatively, the entire $\theta \in\left[-90^{\circ}, 90^{\circ}\right]$ range can be measured, allowing to take into account asymmetries and an angular offset in the light distribution. The straight ahead measurement is centered in a symmetric band, which needs care so it is not double-counted in case only half of the range is integrated and then doubled.

With the conversion factors known, the luminous efficacy can be determined by measuring the frontal illuminance at powers that cover the entire range from the lowest detectable illuminance to the maximum allowed

Figure 4: Angular profile of the LED, measured at $r= 10 \mathrm{~cm}, P=1.33 \mathrm{~W}$ in increments $10^{\circ}$. Vertical lines are the division angles for formula (6). We obtain $C=2.63$ ( $\tilde{C}=0.42$ ).

![](https://cdn.mathpix.com/cropped/79143aec-b0c6-417b-943b-b55ded76014c-04.jpg?height=709&width=899&top_left_y=411&top_left_x=102)
Table 1: Example values of the conversion factor between the frontally measured illuminance and the luminous flux for both light sources. The values will vary within some wider distribution because of varying light sources and other errors, which is indicated by the brackets in the grading sheet.

power. For the incandescent bulb, this measurement can be done simultaneously with Task 1 for better time efficiency.

It is not required to measure at the same distance as the angular dependence. Multiple distances may also be used.

We have to avoid placing any additional objects near the light source to avoid introducing more reflected or blocked light - such as placing the light source directly on the white paper, or having other obstructions such as the black paper screen or any filters too close to the light bulb.

To plot the efficacy, we divide the $\Phi$ obtained from eq. (3) for each of the light sources, with $P=U I$ read out from the power supply.

The result shows that the efficacy of the incandescent light starts out at zero at low powers and increasing with power, as its temperature increases. The LED has the highest efficacy at lowest powers, then it drops off at higher powers, mostly due to increased temperature of the light emitting junction.

At the lowest settable currents, the readout on the power source is no longer reliable - for example, LED may glow slightly even at 0 A . The pole at the origin can be attributed to this source of error.

## Marking scheme

The basic equations could be stated in a separate section of the solution, or spread over different parts of the solution.

Figure 5: Efficacy of both light sources depending on the input power.
![](https://cdn.mathpix.com/cropped/79143aec-b0c6-417b-943b-b55ded76014c-04.jpg?height=1095&width=917&top_left_y=328&top_left_x=1046)

| Theoretical background |  | Points |
| :--- | :--- | :--- |
| A1 | Eq. (3) or equivalent | 0.5 |
|  | Dependence on $r^{-2}$ <br> Dependence on angle (noticing anisotropy) | 0.2 <br> 0.3 |
| A2 | Take into account cylindrical symmetry (each) <br> Choose right symmetry axis for light sources (each) <br> Correct factors of $2 \pi$ and $4 \pi$ (LED and bulb, respectively) <br> Assume area of the sensor comes into calculations | $2 \times 0.1$ <br> $2 \times 0.1$ <br> 0.1 <br> -0.2 |
|  | Total on Theory | 1.0 |

$2 \times$ means one for each light source (bulb, LED).

| Angular measurement |  | Points |
| :--- | :--- | :--- |
| B1 | Incandescent measurement | 0.9 |
|  | Measured at $n \leq 6$ or more angles between 0 and $\pi / 2$ | $0.1 n$ |
|  | Measured full angular range $\left[-90^{\circ}, 90^{\circ}\right]$ (e.g. by rotating light) | 0.1 |
|  | Maximum illuminance below 100 lx | -0.2 |
|  | Measured closer than 10 cm | -0.1 |
| B2 | Integration procedure | 0.7 |
|  | Used the hint | 0.7 |
|  | →Values at the edges of intervals | -0.1 |
|  | → Double counting of the equator | -0.1 |
|  | Used trapezoidal or similar rule | or 0.7 |
|  | → Incorrect treatment of edge values | -0.1 |
|  | → Double counting of the equator | -0.1 |
|  | Analytically derived eq. (10) or sim- | or 0.7 |
|  | ilar |  |
|  | Averaged values without weights | or 0.3 |
| B3 | C result accuracy for Tungsten | 0.3 |
|  | Calculated $C$ or equivalent | 0.1 |
|  | Value of $C \in[9.7,10.3]$ | 0.2 |
|  | Value of $C \in[9.4,10.6]$ | or 0.1 |
| B4 | LED angular measurement | 0.9 |
|  | Measured at $n \leq 6$ or more angles between 0 and $\pi / 2$ | 0.1 $n$ |
|  | Specified auxiliary data (power, distance) | 0.2 |
|  | Measured full angular range $\left[-90^{\circ}, 90^{\circ}\right]$ (e.g. by rotating light) | 0.1 |
|  | Maximum illuminance below 100 lx | -0.2 |
| B5 | Integration same as B2 | 0.7 |
| B6 | $C$ result accuracy for LED | 0.3 |
|  | Calculated $C$ or equivalent | 0.1 |
|  | Value of $C \in[2.8,3.2]$ | 0.2 |
|  | Value of $C \in[2.6,3.4]$ | or 0.1 |
| B7 | Background measured | 0.1 |
|  | Background constancy check (multiple measurements) | 0.1 |
| Total on Angular |  | 4.0 |

Plotting the angular dependence is not required for the procedure, but it counts as 0.2 points if the integration procedure was otherwise not performed.

If a matching analytical value for both conversions are obtained, but angular dependence is not measured, the contestant can get all marks except for the measurement (1.0 out of 1.9 for each light source).

If a comparison of analytical and experimental estimate are done, or if an analytical model is fitted to the experimental data, the procedure is correct, and up to additional +0.3 points per light source may be given to compensate points lost for steps that merit points that may not be necessary for the method used.

| Efficacy measurement |  | Points |
| :--- | :--- | :--- |
| C1 | Incandescent measurement | 0.7 |
|  | Measured $U, I, E$ for incandescent light at $n \leq 7$ points | 0.1n |
|  | No measurements above 16 W | -0.1 |
| C2 | Plotting bulb efficacy | 0.8 |
| † | Convert and plot points $n \leq 6$ (if converted into flux, not efficacy max 0.3) | 0.1 $n$ |
|  | Missing axis labels | -0.1 |
|  | Deviation from a monotonous shape | -0.1 |
|  | Values within RMS< 0.2 | 0.2 |
|  | Values within RMS< 0.5 | or 0.1 |
| C3 | LED measurement | 0.7 |
|  | Measured $U, I, E$ for LED at $n \leq 7$ points | 0.1n |
|  | Fewer than 2 measurements above 0.2 W | -0.2 |
|  | Fewer than 2 measurements below 0.2 W | -0.1 |
| C4 | Plotting LED efficacy | 0.8 |
| ‡ | Convert and plot points $n \leq 6$ (if con- | -0.1 |
|  | Deviation from a monotonous shape | -0.1 |
|  | Values within RMS<5 | 0.2 |
|  | Values within RMS<10 | or 0.1 |
| Total on Efficacy |  | 3.0 |

† Vary the $C$ factor within the range [9.4, 10.6] to check for a better match. This helps remove propagation error from a badly determined $C$ and additionally, any small variations in power output between light bulbs.
‡ Vary the $C$ factor within the range [2.6,3.4] to check if there is a better match. The LEDs may vary in light distribution and absolute intensity, so the trend cannot be matched $1: 1$. Exclude also the lowest power outliers from the assessment, as the singularity can give a high RMS without being significant to the LED itself. It depends on the voltage bias of the power source and resistivity of junctions.

RMS comparison: To make the comparison of the graphed solutions to the reference less subjective, we do a root mean square comparison: average square deviation from an empirical model curve based on a larger number of measurements in a controlled environment (Fig. 5). For the light bulb efficacy, we use

$$
\eta(P)=\ln (1+\exp (1.189 P-4.632))
$$

which is just a linear function smoothly flattened at the bottom.

For the LED, we use

$$
\eta(P)=2.56 / P-23.78 P+259.56
$$

where possible intensity variations can be compensated by allowing $C$ variation in C2/C4. Variations in the $1 / P$ part (due to different offsets in power supply readout) can be compensated by excluding the low-power measurements from the RMS calculations in a reasonable way.

All these are in base units without prefixes (omitted for clarity).

If angular dependence is ignored use this table as a shortcut for grading

| A1 | dependence on $r^{-2}$ only | 0.2 |
| :--- | :--- | :--- |
| A2 | Correct factor of $2 \pi$ or $4 \pi$ only | 0.1 |
| B1- | not applicable | 0.0 |
| B6 |  |  |
| B7 | Background measured | 0.1 |
|  | Background constancy check (multiple measurements) | 0.1 |
| C1 | No change | 0.7 |
| C2 | Rescale with correct $C$ to check RMS | 0.8 |
| C3 | No change | 0.7 |
| C4 | Rescale with correct $C$ to check RMS | 0.8 |

## E3: Radiative heating

## Theory

The plate receives a radiant flux density $j$, determined by the power $P$ of the light source, and the distance $r$ between the target and the light source. The light source does not shine equal amounts of light in all directions, therefore we must use the correction factor $C$, derived in Task 2, to convert from the total radiant flux to forward radiant flux density.

$$
P=C r^{2} j \rightarrow j=\frac{P}{C r^{2}}
$$

Not necessary, but also correct, is to (numerically) integrate/average across the entire plate, $j\left(\pi r^{2}\right)= P \int C r^{-2} \cos \theta \mathrm{~d} A$ to take into account spatial variation of $C, r$ and $\theta$ (angle of incidence).

The incident flux density is dissipated to the environment directly, as well as by heat conduction through the plate. Mark by $T_{F}$ the front temperature and $T_{B}$ the back temperature. Conservation of energy gives us the system of equations

$$
\begin{aligned}
j & =h\left(T_{F}-T_{0}\right)+\frac{\lambda}{d}\left(T_{F}-T_{B}\right) \\
0 & =h\left(T_{B}-T_{0}\right)+\frac{\lambda}{d}\left(T_{B}-T_{F}\right)
\end{aligned}
$$

This system of equations leads to the following relations:

$$
\begin{aligned}
& j=h\left(T_{F}+T_{B}-2 T_{0}\right) \\
& j=\left(h+2 \frac{\lambda}{d}\right)\left(T_{F}-T_{B}\right) .
\end{aligned}
$$

Any linear combination of equations $(14,15)$ also allows determination of both $h$ and $\lambda$. A particular linear combination that may be used is the isolation of individual temperatures:

$$
\begin{aligned}
& T_{F}-T_{0}=\frac{1}{2}\left(\frac{1}{h}+\frac{1}{h+2 \frac{\lambda}{d}}\right) j \\
& T_{B}-T_{0}=\frac{1}{2}\left(\frac{1}{h}-\frac{1}{h+2 \frac{\lambda}{d}}\right) j .
\end{aligned}
$$

In our system, $2 \frac{\lambda}{d}>h$, but still in the same order of magnitude. Treating the slope of $T_{F}$ as $1 /(2 h)$ or the slope of $T_{F}-T_{B}$ as $(2 \lambda / d)^{-1}$ is a reasonable approximation, but still not theoretically correct.

## Error analysis

Errors should be propagated from the slope. For example, if they obtain slopes $k_{1}=1 / h$ and $k_{2}=1 /(h+ 2 \lambda / d$ ), they should propagate the errors. We should allow both straight addition of error contributions of different terms, or adding squared errors (independent errors), e.g.

$$
\begin{aligned}
h & =\frac{1}{k_{1}} \pm \frac{\sigma_{1}}{k_{1}^{2}} \\
\lambda & =\frac{d}{2}\left(\frac{1}{k_{2}}-\frac{1}{k_{1}}\right) \pm \frac{d}{2}\left(\frac{\sigma_{1}}{k_{1}^{2}}+\frac{\sigma_{2}}{k_{2}^{2}}\right)
\end{aligned}
$$

and analogously for other slope definitions.

## Albedo

For the white plate, only a part of the incident flux is absorbed, so we replace $j$ by $j(1-a)$ if $a$ is the albedo:

$$
j=(1-a) \frac{P}{C r^{2}} .
$$

As a consequence, any slope measured for both plates will be in the ratio ( $1-a$ ) to each other. This can be expressed as a fraction of trend slopes, ratio of temperature differences, or similar.

## Experiment

The radiant flux density can be varied in two main ways, or a combination of both: by changing the distance, or by changing the current through the light bulb. Both methods are acceptable, but varying the current also changes the spectrum and the efficiency of the light bulb, so it may produce biased and nonlinear results. The students should know that varying a single parameter is the correct procedure.

The required measurements in this task are the front and back temperature at different powers, for black and white plate. It is essential to wait for equilibration, which includes waiting the back temperature to stabilize. It is advisable to measure starting with the lowest flux density, because it will require the least equilibration time from the initial room temperature of the plate.

The target should not be too close to the light source, not only because of the risk of burning, but also because close to the light bulb, the light is very nonuniformly distributed across the plate. Increased convection rate due to high temperature also starts deviating from the linear regime. Placing the target too far from the light source leads to a negligible heating and thus a very large relative error in temperature differences, especially for the white plate.

In this task, the measurements are subject to many sources of errors: measuring from different distances and at different angles may include different proportions of background or reflected IR radiation from the light source (if the targeted area is still illuminated), if the measurement takes too long, the plate may start cooling down (this is noticeable in a few seconds), air currents may increase convective heat dissipation, and the ambient temperature may also change during the measurement (especially if the light source is placed too close to the wall, or if the power source's fan exhaust is too close to the measurement setup). The errors are most noticeable at low radiant flux and for the white plate, where increases in temperature are the smallest.

For these reasons, it is advisable to take more than one measurement per data point and average the results, and to cover a sufficiently wide range to reduce the slope error. At least 3 points are needed to draw a trend, but 5 is better. With more points, it is easier to spot outliers and utilise the measurements which are least subjected to errors. Back and front temperatures are best measured in pairs one after the other to reduce the error in the temperature difference signal due to changing conditions.

Note: the ambient temperature $T_{0}$ is an effective temperature that combines air temperature and radiative exchange with the surrounding walls, ceiling and other objects. We do not need its value, we only need the slopes of the linear trends. Inexact $T_{0}$ can lead to inaccuracies if used together with an assumption the linear relations go through the origin. $T_{0}$ cannot be reliably determined by measuring surrounding temperatures, but it can be estimated by measuring the equilibrium temperature of the plate in the absence of the light source.

The measurements of the front and back temperature at different radiant fluxes, must be processed and plotted to extract the necessary slopes. For the black plate, two plots will be needed, based on equations $(14,15)$, equations $(16,17)$, or any linearly independent pair. Linear regression gives us the slopes $h$ and $h+2 \frac{\lambda}{d}$ (or their reciprocals). $T_{0}$ is best determined by the $j=0$ intercept of the trend line for (Eq. 16) or any equivalent plot, and should match $T_{0}$ determined by other methods. If measured correctly, the intercept of the trend line for (Eq. 17) should be zero within the error margin.

It is possible to calculate the necessary slopes from a measurement at a single input power (for each plate color), if $T_{0}$ is measured well. This can be done without a graph. However, using multiple measurements decreases the impact of statistical errors and enables us to better estimate the error, so a single measurement will carry a significant error.

Albedo, as defined in the task text through irradiance units, cannot be measured using a light meter, which measures in photometric units. Additionally, light reflected from a white plate introduces additional geometric considerations and angular distribution of reflected light, that cannot easily be taken into account.

The albedo can be estimated as a fraction of the corresponding line slopes between the black and the white plate, taking any of the relations ( $14,15,16,17$ ). This means that for the white plate, measuring only one side of the plate is enough to determine the albedo, assuming $h$ and $\lambda$ remain the same. The difference slope or the back temperature slope are the least suitable, as they introduce a large relative error to the measurement due to a minimal increase in temperature.

## Marking scheme

The basic equations could be stated in a separate section of the solution, or spread over different parts of the solution.

Figure 6: Black plate measurements for eqs. (16,17). The flux density $j$ was varied by changing the distance $r$. The slope of the first graph equals $h^{-1}$, so $h=10 \mathrm{Wm}^{-2} \mathrm{~K}^{-1}$. Lowest and highest measurement were excluded from the fit. The intercept is $2 T_{0}$.
The slope of the second graph equals $(h+2 \lambda / d)^{-1}$, so $\lambda= 0.072 \mathrm{Wm}^{-1} \mathrm{~K}^{-1}$. The intercept is reasonably close to 0 .
![](https://cdn.mathpix.com/cropped/79143aec-b0c6-417b-943b-b55ded76014c-08.jpg?height=505&width=908&top_left_y=539&top_left_x=1050)
![](https://cdn.mathpix.com/cropped/79143aec-b0c6-417b-943b-b55ded76014c-08.jpg?height=513&width=905&top_left_y=1089&top_left_x=1053)

| Theoretical background |  | Points |
| :--- | :--- | :--- |
| A1 | Power to irradiance | 0.4 |
|  | Correct eq. (13) or equivalent Realizing the same geometry from Task 2 applies ( $C$ or equivalent) | 0.3 0.1 |
| A2 | Heat exchange balance | 0.6 |
|  | Correct each of eqs. $(14,15)$ or equivalent. <br> Each partially correct eq., e.g. assumed $T_{B}=T_{0}$ in (14) or missing 2 or $h$ in (17) | $2 \times 0.3$ <br> or 0.1 |
| A3 | Albedo balance | 0.2 |
|  | Correct eq. (22) or equivalent | 0.2 |
| Total on Theory |  | 1.2 |

The assumption that the left hand side of equation $P / A=h\left(T-T_{0}\right)$ distributes the full power of the light source to the area of the plate, indicates a lack of understanding and merits 0 points for theory part.

If conduction is not considered at all a maximum of 0.1 points is given to A2.

Figure 7: White plate measurements for eqs. $(16,17)$. The slope ratio with the black plate result is $(1-a)= 0.0254 / 0.0988=0.26$ for the first graph. The second graph confirms this with a closely matching $(1-a)= 0.00465 / 0.0173=0.27$.
![](https://cdn.mathpix.com/cropped/79143aec-b0c6-417b-943b-b55ded76014c-09.jpg?height=1080&width=922&top_left_y=447&top_left_x=93)

| Measurements |  | Points |
| :--- | :--- | :--- |
| B1 | $n \leq 5$ measurements of $T_{F}$ (black) | $0.1 n$ |
| B2 | $n \leq 5$ measurements of $T_{B}$ (black) | $0.1 n$ |
| B3 | $n \leq 5$ measurements of $T_{F}, T_{B}$ or both (white) | $0.1 n$ |
| B4 | Measured the unchanging values (distance if $U, I$ varied, $U, I$ if distance varied) <br> Estimated measurement errors (at least separate for each plate color) - the instrument precision is not a valid error estimate <br> Estimated measurement errors (common for all) <br> Measured by varying the current (not distance) | 0.2 <br> 0.2 <br> or 0.1 <br> -0.2 |
| Total on Dissipation |  | 1.9 |

Determination of $h$ and $\lambda$ will require extraction of two trend lines from two plots. Plotting on the same graph counts as two, but the vertical axes must be labelled correctly. The trend lines will have a $j=0$ intercept that will be 0 in case of temperature difference, and related to ambient temperature otherwise. Using $r^{-2}$ or $P$ instead of $j$ as an axis is valid as long as the conversion is done correctly at the slope readout.

Figure 7: White plate measurements for eqs. $(16,17)$. The slope ratio with the black plate result is $(1-a)= 0.0254 / 0.0988=0.26$ for the first graph. The second graph confirms this with a closely matching $(1-a)= 0.00465 / 0.0173=0.27$.
| Dissipation parameters |  | Points |
| :--- | :--- | :--- |
| C1 | First of the two plots | 0.8 |
|  | $n \leq 5$ correctly converted and drawn points | 0.1n |
|  | Correct trend line | 0.1 |
|  | Correct slope readout | 0.1 |
|  | Slope error estimate | 0.1 |
|  | Intercept disagrees with expectations | -0.1 |
|  | Missing axis labels, ticks or unsuitable size | -0.1 |
| C2 | Second of the two plots | 0.8 |
|  | Same breakdown as C1 |  |
| C3 | Calculation of $h$ | 0.8 |
|  | Correct algebraic relation to slopes | 0.2 |
|  | Numerical value within [10,14] | 0.3 |
|  | Numerical value within [8, 16] | or 0.2 |
|  | Numerical value within [6,18] | or 0.1 |
|  | Correct error analysis | 0.2 |
|  | Error estimate < 1 (if error analysis is reasonable) | 0.1 |
| C4 | Calculation of $\lambda$ | 0.8 |
|  | Correct algebraic relation to slopes | 0.2 |
|  | Numerical value within [0.06, 0.08] | 0.3 |
|  | Numerical value within [0.05, 0.09] | or 0.2 |
|  | Numerical value within [0.04, 0.10] | or 0.1 |
|  | Correct error analysis | 0.2 |
|  | Error estimate < 0.01 (if error analysis is reasonable) | 0.1 |
| Total on Dissipation |  | 3.2 |


The values are in SI base units.

Without plotting: If the entire fitting process is done numerically without plotting, use equivalent concepts to the grading above - tables instead of plots, slope calculations instead of trend lines, etc. As the plot is not required, a correct procedure can yield full points.

The error analysis in this case may consist of doing the entire procedure (e.g. using a single measurement with $T_{0}$ knowledge, or two points without background), with multiple measurement runs and doing statistics. Another option is propagating relative errors from the single measurement errors. The main criterion is, that the error source is statistical, not instrumental.

The point count includes the origin for the plot of the temperature difference (eq. 17).

The slope error is the main source of error - distances and powers can be considered accurate. Error estimate on the slope can be done based on point scatter (but not with fewer than 5 points), with or without taking into account errorbars (if the students estimated them).

Error propagation: if a wrong value of $C$ is used, recalculate with a suitable value and grade accordingly.

| Albedo |  | Points |
| :--- | :--- | :--- |
| D1 | One or more plots | 1.0 |
|  | $n \leq 5$ correctly converted and drawn points | 0.1n |
|  | Estimated individual measurement error | 0.1 |
|  | Correct trend line(s) | 0.2 |
|  | Correct slope readout | 0.1 |
|  | Slope error estimate | 0.1 |
|  | Intercept disagrees with expectations | -0.1 |
|  | Missing axis labels | -0.1 |
| D2 | Data processing | 0.7 |
|  | Correct algebraic expression for $a$ | 0.2 |
|  | Numerical value $a \in[0.65,0.75]$ | 0.2 |
|  | Numerical value $a \in[0.6,0.8]$ | or 0.1 |
|  | Correct error analysis | 0.2 |
|  | Error estimate < 0.05 (if error analysis is reasonable) | 0.1 |
| Total on Albedo |  | 1.7 |

The possibility of measuring both temperatures allows combinations where both sets of data can be used for albedo estimation - by averaging two slope ratios, or similar. This is also a valid approach.

In cases where only pointwise numerical evaluation using several data points is employed a maximum of 0.5 points for D1 ( 0.3 conversion of data, 0.2 for error estimates) and a maximum of 0.7 for D2 will be awarded. For evaluation with one data point only a maximum of 0.2 points for D1 ( 0.1 for conversion of data, 0.1 for error estimate) and 0.5 for D2 (0.2 algebraic expression, 0.2 value, 0.1 error analysis) will be awarded.
