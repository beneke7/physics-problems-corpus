---
id: solution-document-eupho-2024-e-s
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2024_E_S.pdf
extraction_method: cached-mmd
mapped_problems: [eupho-2024-E1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eupho/2024_E_S.pdf."
---

## E1 - Piezoelectricity - Solution

## Task E. 1 - Elasticity of the ball

The elasticity $\eta$ can be computed as the ratio of the kinetic energy immediately before and after the bounce. Since the air drag is small, these energies are directly proportional to the dropping height $h$, or to the bouncing height $h_{b}$. In order to measure $h$ or $h_{b}$ as precisely as possible, it is necessary to devise a method to minimise parallax errors and take into the fact that the rule's zero is offset from its endpoint. Below is described one of the ways to do this.

We attach the ruler with the help of a peg onto one of the wings of the stand, fix (by sucking) a ball to the the black pipe of the release mechanism, and take the reading of the ruler at the lowest point of the hanging ball. We call this measured quantity $s$ and it relates to $h$ via the thickness of the wood on the bottom ( $t=4 \mathrm{~mm}$ ), and the starting height of the scale on the ruler ( $z=5 \mathrm{~mm}$ ) so that $h=s-t-z$.

We record the dropping and bouncing height for 4 different heights, and for each height, we repeat the experiment 5 times. With a linear fit (Fig. 1), we obtain a slope of $\gamma=(81 \pm 1) \%=: \eta$; therefore, the energy loss fraction $1-\eta$ is expressed as

$$
\frac{\Delta E}{E_{0}}=1-\eta=(19 \pm 1) \%
$$

In the framework of this task, it would also be a valid, yet less precise method and therefore, awarded partial marks only, for each height to compute the ratio and take the average of these 4 ratios.

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-01.jpg?height=652&width=876&top_left_y=1647&top_left_x=118)
Figure 1

Figure 1
| E. 1 - Elasticity of the ball |  | Points |
| :--- | :--- | :--- |
| a | Approach and Measurement | 0.9 |
|  | Idea that the fraction of kinetic energy after bounce can be found as $h_{b} / h$ | 0.3 |
|  | 0.1 per each three measured pairs of heights ( $h$ and $h_{b}$ ), up to 9 pairs of heights, possibly with the same $h$ | 0.3 |
|  | 0.1 per each different $h$ value used, up to 3 values | 0.3 |
| b | Evaluation and result | 1.1 |
|  | Graphical evaluation, or fit via calculator <br> Alternatively: evaluation via point-wise average | 0.5 <br> or 0.3 |
|  | value of $1-\eta^{*}$ inside $0.19 \pm 0.04$ <br> OR value of $1-\eta$ inside $0.19 \pm 0.06$ | 0.6 <br> or 0.3 |
| Total on E. 1 |  | 2.0 |


## Special cases and penalties

* If a student computes $\eta$ instead of $1-\eta$, full marks will still be given according to the table above.
- Special case: multiple bounces It is a valid approach to measure the time it takes for the ball to make several bounces for different heights or the total time it takes for the ball to stop bouncing. The theory behind that must be demonstrated to evaluate to a correctly linearized form of which $\eta$ can be extracted but in that case one can receive full marks with that approach. If the approach is chosen without correct linearization, the first 0.3 points are deducted, the rest is graded normally, so a total 1.7 points would still be possible.


## Task E. 2 - Piezoelectric properties

a) Capacitance of the capacitor We charge the capacitor with the battery, connect it to the multimeter in the 2 V DC voltage range and switch off the battery using the top switch in the figure 2. If the bottom switch is not present, we start recording the time with the stopwatch the moment the switch is disconnected. If the bottom switch is present, we first disconnect the top switch, and start measuring time once the bottom switch is connected

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-01.jpg?height=239&width=537&top_left_y=2103&top_left_x=1238)
Figure 2

The capacitor now discharges via the inner resistance ( $R_{V}=11.1 \mathrm{M} \Omega$ ) of the voltmeter. Every 5 seconds, we write down the voltage reading, see Tab. 2. The discharge of the capacitor can be described as:

$$
\ln \frac{U(t)}{U_{0}}=-\frac{t}{R_{V} C}
$$

We plot the data, fit it to a linear function and compute $C$ from the slope (Fig. 3).

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-02.jpg?height=631&width=878&top_left_y=404&top_left_x=118)
Figure 3

We finally obtain a capacitance of:

$$
C=(2.24 \pm 0.08) \mu \mathrm{F}
$$

| E.2a - Capacitance |  | Points |
| :--- | :--- | :--- |
| a | Aproach and Measurement | 0.9 |
|  | Idea to use the inner resistance of the voltmeter to discharge (documented via circuit diagram!) | 0.3 |
|  | Exponential decay of the capacitor voltage expressed equivalently to Eq. 2 | 0.2 |
|  | 0.1 per measured 20 s , up to 40 s | 0.2 |
|  | 0.1 per 4 data points (voltage, time) up to 8 total data points | 0.2 |
| b | Evaluation and result | 1.1 |
|  | A graphical evaluation, or a fit via a calculator <br> Alternatively, a point-wise averages | 0.5 <br> or 0.3 |
|  | value of $C$ within $(2.28 \pm 0.08) \mu \mathrm{F}$ <br> OR value of $C$ within $(2.28 \pm 0.12) \mu \mathrm{F}$ | 0.6 <br> or 0.3 |
| Total on E.2a |  | 2.0 |

## Special cases and penalties

- The reference capacitance in this grading scheme is the average of ca 20 capacitors and therefore differs slightly from Eq.(3).
- It is also possible to calculate the total charge $q=\int V / R \mathrm{~d} t$ leaving the capacitor during the discharge. In this case, the table above can be still used ( 0.2 will be awarded for $q=\int V / R \mathrm{~d} t$, instead of Eq. 2), and numerical integration substitutes the graphical evaluation.
b) Capacitance of the piezo It can be noticed that the capacitance of the piezo element is much smaller than $C$, since with the same measurement technique as in E.2a, the piezo discharges too fast to take measurements of the direct discharging behaviour. However, with the provided switches and the capacitor,
one can build a circuit (Fig. 4) which enables us to go through multiple cycles of charging the piezo with the battery and then discharging it onto the much larger capacitance $C$.

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-02.jpg?height=241&width=848&top_left_y=406&top_left_x=1085)
Figure 4: Circuit diagram for task E.2b

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-02.jpg?height=657&width=882&top_left_y=863&top_left_x=1069)
Figure 5

After a number of cycles (above 10), the voltmeter can be connected via a switch to measure the voltage of the capacitor $U_{C}$. After each voltage measurement, it is important to discharge both $C$ and $C_{p}$, which can be done by two more switches in the circuit. We can now plot the capacitor voltage as a function of charging cycles (Fig. 5).

Detailed derivation After many charging cycles, the voltage across the capacitor approaches the voltage used to charge the piezo. With each cycle, the amount of charge transferred to the capacitor gets smaller.

Let us work out the charge transferred to the capacitor during the $N^{\text {th }}$ charging cycle. Suppose it initially has voltage $U_{N-1}$ across it, meaning it has stored charge $Q_{N-1}=C U_{N-1}$. Now connect the fully charged piezo, which has stored charge $Q_{p}=C_{p} U_{0}$. After connecting them together, the combined system acts as a single capacitor with stored charge $Q_{N-1}+Q_{p}$ and capacitance $C+C_{p}$, so the new voltage across the capacitor and the piezo is

$$
\begin{aligned}
U_{N} & =\frac{Q_{N-1}+Q_{p}}{C+C_{p}} \\
& =\frac{C}{C+C_{p}} U_{N-1}+\frac{C_{p}}{C+C_{p}} U_{0}
\end{aligned}
$$

When the voltage saturates, the change in one charging cycle is negligible so $U_{N}=U_{N-1}$. In this case, (4) gives $U_{N}=U_{N-1}=U_{0}$; the voltage saturates at the voltage used to charge the piezo.

Suppose we are far from saturation, meaning $U_{N} \ll U_{0}$. Rewrite (4) as follows:

$$
\frac{C}{C+C_{p}}\left(U_{N}-U_{N-1}\right)+\frac{C_{p}}{C+C_{p}} U_{N}=\frac{C_{p}}{C+C_{p}} U_{0} .
$$

The condition $U_{N} \ll U_{0}$ means we can approximate this as

$$
\frac{C}{C+C_{p}}\left(U_{N}-U_{N-1}\right)=\frac{C_{p}}{C+C_{p}} U_{0}
$$

which has a simple linear solution

$$
U_{N}=N \frac{C_{p} U_{0}}{C}
$$

This linear solution is a good approximation when $N C_{p} \ll C$. We measure $U_{0} \approx 1.405 \mathrm{mV}$. Fitting this linear relation can be used to measure $C_{p}$. Here, the fit from Fig. 5 evaluates to

$$
C_{p}=(23.5 \pm 2.4) \mathrm{nF}
$$

Note: the following precise calculations are not necessary for being awarded with full marks. The general solution to recursive equation (4) can be found as follows. Let $X_{N}=U_{0}-U_{N}$, which is the distance of $U_{N}$ from its saturation value. With this, (5) can be written as

$$
X_{N}=\frac{C}{C+C_{p}} X_{N-1}
$$

The initial condition is $U_{0}=0$, which means $X_{0}=U_{0}$. Then

$$
X_{N}=\left(\frac{C}{C+C_{p}}\right)^{N} U_{0} .
$$

Returning to the original variables, we arrive at

$$
U_{N}=U_{0}-\left(\frac{C}{C+C_{p}}\right)^{N} U_{0}
$$

Indeed, in the limit $N \rightarrow \infty$, this result gives the same saturation value that we found above.

Students are expected to fit the linear model $U_{N} \propto N$. However, if they use (8) and fitting to

$$
\log \left(\frac{U_{0}-U_{N}}{U_{0}}\right)=N \log \left(\frac{C}{C+C_{p}}\right)
$$

they will also get full marks.

| E.2b - Capacitance of the piezo |  | Points |
| :--- | :--- | :--- |
| a | Aproach and Measurement | 1.4 |
|  | Measurement technique to charge piezo (documented via circuit diagram!) | 0.1 |
|  | discharge onto capacitor (documented via circuit diagram!) | 0.2 |
|  | Idea to repeat multiple times to increase precision (multiple charging cycle idea) | 0.4 |
|  | 0.1 per measured 2 cycles, up to 6 cycles and after that 0.1 per measured 4 cycles up to 10 | 0.4 |
|  | 0.1 per repetition per data point, up to 3 repetitions per point | 0.3 |
| b | Evaluation and result | 1.1 |
|  | Approximation $N C_{p} \ll U_{0}$ leading to Eq. 6 and only taking into account values up to 15 charge cycles <br> OR using Eq. 6 and only taking into account values up to 20 charge cycles OR exact solution like eq. 8 for arbitrary measurement range (also large cycle numbers allowed) | 0.5 <br> or 0.3 <br> or 0.5 |
|  | value of $C_{p}$ inside ( $23.5 \pm 3$ )nF <br> OR value of $C_{p}$ inside ( $23.5 \pm 5$ ) nF | 0.6 <br> or 0.3 |
| Total on E.2b |  | 2.5 |

## Special cases and penalties

- -0.1 if $U_{0}$ was assumed to be 1.5 V instead of measuring it.
- If no circuit diagram was provided, the first 0.3 points are deducted for the measurement technique and discharging the piezo on the capacitor.
- Capacitor parallel to piezo case: This was quite common: If the student repeated the measurement from task E.2a but with the parallel circuit of piezo and capacitor (hence, measuring the sum of capacities), this is still a very imprecise measurement technique because the relative error will be on the order of the value that we seek to measure. It will however be possible to receive the following partial points if everything else was done as required:
- 0.1 for measurement technique
- 0 for discharge on capacitor idea
- 0 for multiple charging cycles
- 0 for measured cycle number
- up to 0.3 for repetitions
- 0.2 for approach of using parallel capacitor
- max. 0.3 for correct value $\pm 5 \mathrm{nF}$ range.
- so, a maximum total of 0.9 points can be awarded.
- Penalty: Student discharges piezo directly via Voltmeter If the student has only used a circuit that consists of the voltmeter and the piezo, (like in E.2a), the student always receives only the first 0.1 points for the entire task, given that they drew the circuit, else, 0 points.
c) Response function To measure the piezo voltage as a function of force, we assemble the circuit like shown in Fig. 6 and operate it as follows:

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-04.jpg?height=236&width=846&top_left_y=201&top_left_x=132)
Figure 6: .

Note that we need the capacitor, because if we were to connect the voltmeter directly to the piezo, it would discharge faster than we are able to take a reading. We place the piezo element on the scales and push down on the scales, while the switch connecting it to the capacitor is closed. When the desired weight is reached, we cut the capacitor off and release the weight from the scales. The voltage under load has been transferred to the capacitor and can now, via the voltmeter, be read out. Via $F=m g$ we can compute the force from the displayed mass values and by multiplying with $C / C_{p}$, we obtain the piezo voltages from the capacitor voltages, using $C_{p} \ll C$. We repeat the measurement 5 times per weight value to get an idea of fluctuations and utilize average values; the data can found in Table 4. The plot shown in Fig. 7 is achieved if we use most of the permitted force range of the scales.

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-04.jpg?height=659&width=885&top_left_y=1290&top_left_x=114)
Figure 7

For large values of $F$, the voltages become noisy and seem to saturate (see next sub-task). However, the dependence is fairly linear up to ca 10 N . We can fit that range and obtain a piezo voltage coefficient

$$
\beta=(3.37 \pm 0.1) \mathrm{V} / \mathrm{N}
$$

| E.2c - Response function |  | Points |
| :--- | :--- | :--- |
| a | Approach | 0.9 |
|  | The idea to charge the capacitor using the piezo | 0.4 |
|  | and measure afterwards the capacitor voltage with voltmeter | 0.1 |
|  | using switch to discharge piezo (documented via circuit diagram or detailed description!) | 0.4 |
| b | Measurement <br> If they did not discharge the piezo before each individual measurement, or if there are obvious points of piezozero floating, we half the measurement points | 1.9 or 0.9 |
|  | 0.05 for each measurement at a different weight (forces) value, up to for 16 data points; the result is to be rounded down to the precision of 0.1 | 0.8 |
|  | 0.1 per data points within each 1 kg wide weight range, up to 6 kg | 0.6 |
|  | 0.1 per repetition per data point (average number of repetitions for the entire measurement series), up to 5 repetitions per point | 0.5 |
| c | Evaluation and result | 1.2 |
|  | Accurate plot of the data points | 0.3 |
|  | Graphical evaluation of the slope, or fit with calculator of linear region OR point-wise average of linear region | 0.4 or 0.2 |
|  | value of $\beta$ inside $(3.54 \pm 0.2) \mathrm{V} / \mathrm{N}$ OR value of $\beta$ inside ( $3.54 \pm 0.4$ )V/N | 0.5 or 0.3 |
| Total on E.2c |  | 4.0 |

## Special cases and penalties

- If no circuit diagram was provided, the first 0.9 points for the Approach are not awarded.
- If the student uses only the voltmeter, to measure directly the piezo voltage, the results will not be reliable because the piezo discharges very quickly via the voltmeter, with the RC-time being equal to 20 ms . Therefore, this approach is very inaccurate, and no points ( $0 / 0.9$ ) are given for the approach. For the measurements, only $50 \%$ of points can be given ( $0.9 / 1.9$ ) points if an instantaneous voltage reading is taken after applying a force AND the result differs from the value that is expected for the given force no more than by a factor of 2.0. The points for Evaluation and result can be graded according to the table above.
d) Saturation If we already measured large enough weight values in the previous task, we can just use the data from there, otherwise, we record more data over a larger range now. Due to the noise in the saturated region, it is important to use multiple measurements per point and take the average. The saturation point can be found by computing the intersection of the fitting functions of the linear region for low forces and the saturated region, just as visible in Fig. 7. We can read out the relevant values, having measured the area of the piezo as $A_{p}=\pi r_{p}^{2} \approx 4.1510^{-4} \mathrm{~m}^{2}:$

$$
U_{\text {sat }}=(86 \pm 16) \mathrm{V}
$$

and

$$
p_{\text {sat }}=F_{\text {sat }} / A_{p}=(55000 \pm 7000) \mathrm{Pa}
$$

and therefore,

$$
\sigma_{\max }=\frac{C_{p} U_{\text {sat }}}{A}=(4.9 \pm 0.9) \mathrm{mC} / \mathrm{m}^{2}
$$

| E.2d - Saturation |  | Points |
| :--- | :--- | :--- |
| a | Aproach and Measurement | 0.6 |
|  | Determination method of saturation point as intersection of extreme region fit functions (using data from Figure 7) | 0.4 |
|  | Formula Eq. 13 | 0.2 |
| b | Evaluation and result | 0.9 |
|  | Graphical evaluation, or calculation of intersection | 0.3 |
|  | value of $U_{\text {sat }}$ inside $(86 \pm 25) \mathrm{V}$ | 0.2 |
|  | value of $p_{\text {sat }}$ from 40 kPa to 85 kPa | 0.2 |
|  | value of $\sigma_{\text {max }}$ inside ( $4.9 \pm 2$ ) $\mathrm{mC} / \mathrm{m}^{2}$ | 0.2 |
| Total on E.2d |  | 1.5 |

## Special cases and penalties

- If measurements additional to what have been done for E.2c are made here, these are to be taken into account while grading E-2c-b.
- Common case If the saturation was not determined via a plot but simply by pressing and ballparking the force at which the voltage does not rise anymore, we can award points up to the following maxima:
- 0.2/0.4 for evaluation method (because it works in principle but can be very imprecise)
- 0.2 if the formula was given
- 0 for graphical evaluation - at least a plot with meaningfull graphical interpretation (could be the one from E.2c) is required to correctly assess the situation here. Without (which is this common case) it's 0.
- max $3 \times 0.2$ for all remaining values, graded just normally.
- So a total of 1.0/1.5 points can be awarded for this technique.
- Penalty: Without a way to quantitatively measure piezo voltage responses to applied forces in E.2c, (especially if E.2c was not done or measurements were only attempted with a voltmeter directly attached to the piezo without anything else), this task can not be done in a way that is physically meaningfull and it will always receive 0 points.


## Task E. 3 - Small area behaviour

We can use the setup from the task E.2c, but instead of loading the whole surface of the piezo, we will use the wooden stick to poke into a hole of the plywood cover and measure $F_{s}$ with the scales as before.

By plotting $U_{p}\left(F_{s}\right)$ (Fig. 8), we find it has almost the same dependence as in part E2.c with the slope coefficient $\beta_{s}= (3.37 \pm 0.1) \mathrm{V} / \mathrm{N}$ almost the same as $\beta$ from part E2.c.

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-05.jpg?height=657&width=883&top_left_y=278&top_left_x=1066)
Figure 8

It seems counter-intuitive that limiting the area drastically does not change the response, because the top electrode of the piezo is thin and flexible. What we are observing in this experiment can be explained as follows. Pressing with a stick creates a voltage across the piezo that leads to a mechanical stress radially inside the crystal. The thick bottom electrode prevents the crystal bottom part contracting radially. At the same time, the top electrode is thin, and would be free to contract if there were no wooden plate. Such a contraction would cause the piezo crystal to curve into a bowl-like shape. The wooden cover plate prevents that happening; this means that the mechanical stress will grow along the rim of the piezo disc, and decrease at the point where we press. As a result, the pressure is effectively distributed over the entire piezo crystal. Therefore the correct answer to this part is that there are no significant changes in the response.

| E.3 - Small area effects |  | Points |
| :--- | :--- | ---: |
|  | Idea to use the stick through the hole <br> for exposing a limited area to pressure | 0.5 |
|  | Adequate measurement of $U_{p}$ for dif- <br> ferent values of force | 0.3 |
|  | Correct result: No significant change. | 0.2 |
| Total on E.3 | $\mathbf{1 . 0}$ |  |

## Special cases and penalties

- Penalty: Without an explicit drawing or written description that the stick was put through the hole, the corresponding 0.5 and the 0.2 for the result will not be awarded, since there is no proof that the measurement are meaningful for this part. The same holds for approaches that only put smaller areas of the wooden cover plate under pressure.
- Adequate measurements of $U_{p}$ should have at least three points for different forces and it should be concludable (but does not need to be calculated explicitely by the student) from that data that the slope is the same as in E.2c within the error margins. For 2 measurements we award 0.2 and for one 0.1 points, still.
- Penalty: Without a reproducable way to measure piezo voltage responses to applied forces in E2.c, (especially if E2.c was not done or measurements were only attempted with a voltmeter directly attached to the piezo without anything else), the measurements and conclusion in this task are not meaningful. Therefore, the stu-
dent can only receive max. 0.5 points for the idea of applying pressure through the whole but nothing else. Otherwise the student receives 0 points total.


## Task E. 4 - Deformation of the ball

When the ball is dropped onto the piezo element, the kinetic energy just before the collision is partially converted into elastic deformation and the remainder dissipated as heat and sound. At the point of maximal deformation, the kinetic energy is zero and the force on the ball and piezo is also at its maximum. By using the diode that is soldered to the capacitor, we can prevent charges from flowing backwards and therefore store the maximum voltage during the measurement. You can see the corresponding circuit diagram in Fig. 9.

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-06.jpg?height=429&width=856&top_left_y=826&top_left_x=127)
Figure 9: .

If we drop the ball onto the piezo element from different heigths, we will provide different kinetic energies before the impact. Each time, we read the maximum voltage from the capacitor and convert it into piezo voltage by multiplying with $C / C_{p}$. Multiplying again with the linear slope $\beta$ found in task E.2c, we get the maximum force during the impact $F_{m}$. With that, we can, for each initial kinetic energy, compute the maximum deformation $x_{m}$.

$$
F=k x_{m}^{\alpha} \Rightarrow x_{m}=\left(\frac{F}{k}\right)^{1 / \alpha}
$$

We integrate the force and find the maximum elastic energy the ball reaches during the collision.

$$
E_{\text {elastic }}=\int_{0}^{x_{m}} F(x) \mathrm{d} x=\frac{1}{\alpha+1} k x_{m}^{\alpha+1}=\frac{k^{-1 / \alpha}}{\alpha+1} F_{m}^{1+1 / \alpha}
$$

From task E.1, we can express the elastic energy of the ball, when dropped from height $h$ :

$$
E_{\text {elastic }}=\eta m g h
$$

where $m=(8 \pm 0.5) g$ can be measured using the scales. Using that, we can plot the elastic energy as a function of the maximum force. However, this linear plot (Fig. 10) was not required from the students, we only show it here for illustration.

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-06.jpg?height=639&width=885&top_left_y=278&top_left_x=1064)
Figure 10

Taking the logarithm of both $F_{m}$ and $E_{\text {elastic }}$, we arrive at a linear function, which we can plot (Fig. 11).

$$
\ln E_{e l a s t i c}=\ln \frac{k^{-1 / \alpha}}{\alpha+1}+\left(1+\frac{1}{\alpha}\right) \ln F_{m}
$$

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-06.jpg?height=652&width=896&top_left_y=1407&top_left_x=1055)
Figure 11

Extracting the slope $\gamma$, we arrive at a value of $\alpha$ of:

$$
\gamma=\left(1+\frac{1}{\alpha}\right) \Rightarrow \alpha=\frac{1}{\gamma-1} \approx 0.75 \pm 0.06
$$

A more correct way is to take into account only the nicely linear region in the center of the range. The reason for dropping the leftmost datapoint is that the relative uncertainty of the underlying height measurement is very low. The reason for dropping the rightmost datapoints lies in the force-voltage curve: we are already starting to approach the saturation region.

$$
\gamma_{2}=\approx 1.06 \pm 0.05
$$

Note: This result is actually surprising, since, according to the Hertz theory, we would have expected an exponent
of $3 / 2$. This is again something related to the piezo element being glued to the plates: while the crystal tries to take a bowl-like shape, plate moves slightly towards the ball, hence the deformation of the ball does no longer strictly correspond to its displacement during the impact.

With Eq. 17, we can compute $k$ from the interception of the fit ( $y_{0}=-15.7$ ), so:

$$
k=\left(\left(\exp y_{0}\right)(\alpha+1)\right)^{-\alpha} \approx(84000 \pm 7000) \mathrm{N} / \mathrm{m}^{\alpha}
$$

| E. 4 - Deformation of the ball |  | Points |
| :--- | :--- | :--- |
| a | Aproach | 1.5 |
|  | Idea to use the diode in combination with the capacitor for extracting the maximum piezo voltage during a drop | 0.5 |
|  | using switch to discharge piezo (documented via circuit diagram or detailed description!) | 0.5 |
|  | Approach that the elastic kinetic energy part from dropping is the same as deformation energy | 0.5 |
| b | Measurement | 1.0 |
|  | If the piezo has not been discharged before each individual measurement, the points are halved (it is assumed that the piezo has not been discharged if the voltage readings of the datapoints fluctuate significantly around the expected values) | or 0.5 |
|  | 0.1 per measured 2 height values, up to 8 different height values | 0.4 |
|  | 0.1 per measured 10 cm of height range | 0.3 |
|  | 0.1 per repetition per data point, up to 3 repetitions | 0.3 |
| c | Evaluation and result | 2.0 |
|  | Linearisation equivalent to Eq. 17 | 0.8 |
|  | Graphical evaluation for $\alpha$ and $k$, or fit via calculator | 0.7 |
|  | Value of $\alpha$ between $1 \pm 0.5$ | 0.3 |
|  | Value of $k$ between $(84000 \pm 40000) \mathrm{N} / \mathrm{m}^{\alpha}$ | 0.2 |
| Total on E. 4 |  | 4.5 |

## Special cases and penalties

- If no circuit diagram was provided, the first 1.0 points are deducted for the measurement technique with the diode and discharging the piezo on the capacitor.
- If the voltmeter has been used directly for measuring the piezo voltage (without capacitor and diode), the data are unusable. Therefore, we cannot award the first $0.5+0.5$ points in the approach, and also, no points are awarded for the measurement data taken. However, for the evaluation part, we do not subtract points even if it is done with these unusable data as long as a correct evaluation method has been used.


## Task E. 5 - Interaction time

When the less elastic ball bounces, we can estimate the change of its momentum $\Delta p_{1}$ as:

$$
\Delta p_{1}=\int_{t} F_{1}(t) \mathrm{d} t=\frac{a_{1}}{b_{1}} \int f(t) \mathrm{d} t \propto F_{1 \max } \tau_{1},
$$

where $F_{1 \text { max }}=a_{1} F_{0 \text { max }}$ is the maximal force during the collision and $\tau_{1} \approx \tau_{0} / b_{1}$ is the interaction time.

In other words,

$$
\frac{\Delta p_{1}}{\Delta p_{0}}=\frac{v_{1}}{v_{0}}=\frac{F_{1 \max }}{F_{0 \max }} \cdot \frac{\tau_{1}}{\tau_{0}} .
$$

By measuring $v_{1} / v_{0}=\sqrt{h_{1} / h_{0}}$ and $\frac{F_{1 \text { max }}}{F_{0 \text { max }}}=\frac{U_{1}}{U_{0}}$, we can estimate the time scaling $\tau_{1} / \tau_{0}$ :

$$
\frac{U_{1}}{U_{0}}=\frac{\tau_{1}}{\tau_{0}} \cdot \frac{\sqrt{h_{1}}}{\sqrt{h_{0}}}, \quad \text { or } \quad \tau \propto \frac{U}{\sqrt{h}}
$$

The measurements are in the table 7. We plot the dependency of $U / \sqrt{h_{1}}$ on $\sqrt{h_{1}}$ and find that it is horizontal up to the measurement errors (Fig. 12). In other words, $\tau$ does not change too much within the range of forces.

![](https://cdn.mathpix.com/cropped/0164e5bd-2992-4172-8f7b-1922e86650cb-07.jpg?height=656&width=876&top_left_y=884&top_left_x=1073)
Figure 12

| E. 5 - Interaction time | Points |
| :--- | :--- |
| Theory | 0.5 |
| find how $a_{1} / b_{1}$ depends on $v$ | 0.3 |
| express it through measurable ratios | 0.2 |
| Measurements and plots | 1.5 |
| 0.1 per measured force value, up to 7 different force values | 0.7 |
| 0.1 per repetition per data point, up to 3 repetitions | 0.3 |
| Plot | 0.2 |
| coordinates are related to theory | 0.3 |
| Conclusion ( $\tau$ doesn't depend on $v$ ) | 0.5 |
| Total on E. 5 | 2.5 |

## Experiment 2024 - General Grading Scheme

## General remarks for grading

- For minor mistakes (like minus-sign, factor-2 wrong or just the inverse of a result), we deduct only -0.1 points once, and will grade the remaining task as if the mistake was corrected (no penalty for a propagating error), including the numerical results.
- Even if the data used for making a plot is of low quality because of an inferior measurement technique, the points designated for plotting are not reduced as long as the data points are marked correctly according to the tabulated data.

| E. 1 - Elasticity of the ball |  | Points |
| :--- | :--- | :--- |
| a | Approach and Measurement | 0.9 |
|  | Idea that the fraction of kinetic energy after bounce can be found as $h_{b} / h$ | 0.3 |
|  | 0.1 per each three measured pairs of heights ( $h$ and $h_{b}$ ), up to 9 pairs of heights, possibly with the same $h$ | 0.3 |
|  | 0.1 per each different $h$ value used, up to 3 values | 0.3 |
| b | Evaluation and result | 1.1 |
|  | Graphical evaluation, or fit via calculator <br> Alternatively: evaluation via pointwise average | 0.5 <br> or 0.3 |
|  | value of $1-\eta^{*}$ inside $0.19 \pm 0.04$ <br> OR value of $1-\eta$ inside $0.19 \pm 0.06$ | 0.6 <br> or 0.3 |
| Total on E. 1 |  | 2.0 |

## Special cases and penalties

* If a student computes $\eta$ instead of $1-\eta$, full marks will still be given according to the table above.
- Special case: multiple bounces It is a valid approach to measure the time it takes for the ball to make several bounces for different heights or the total time it takes for the ball to stop bouncing. The theory behind that must be demonstrated to evaluate to a correctly linearized form of which $\eta$ can be extracted but in that case one can receive full marks with that approach. If the approach is chosen without correct linearization, the first 0.3 points are deducted, the rest is graded normally, so a total 1.7 points would still be possible.

| E.2a - Capacitance |  | Points |
| :--- | :--- | :--- |
| a | Aproach and Measurement | 0.9 |
|  | Idea to use the inner resistance of the voltmeter to discharge (documented via circuit diagram!) | 0.3 |
|  | Exponential decay of the capacitor voltage expressed equivalently to Eq. 2 | 0.2 |
|  | 0.1 per measured 20 s , up to 40 s | 0.2 |
|  | 0.1 per 4 data points (voltage, time) up to 8 total data points | 0.2 |
| b | Evaluation and result | 1.1 |
|  | A graphical evaluation, or a fit via a calculator <br> Alternatively, a point-wise averages | 0.5 <br> or 0.3 |
|  | value of $C$ within $(2.28 \pm 0.08) \mu \mathrm{F}$ <br> OR value of $C$ within $(2.28 \pm 0.12) \mu \mathrm{F}$ | 0.6 <br> or 0.3 |
| Total on E.2a |  | 2.0 |

Special cases and penalties

- The reference capacitance in this grading scheme is the average of ca 20 capacitors and therefore differs slightly from Eq.(3).
- It is also possible to calculate the total charge $q= \int V / R \mathrm{~d} t$ leaving the capacitor during the discharge. In this case, the table above can be still used (0.2 will be awarded for $q=\int V / R \mathrm{~d} t$, instead of Eq. 2), and numerical integration substitutes the graphical evaluation.

| E.2b - Capacitance of the piezo |  | Points |
| :--- | :--- | :--- |
| a | Aproach and Measurement | 1.4 |
|  | Measurement technique to charge piezo (documented via circuit diagram!) | 0.1 |
|  | discharge onto capacitor (documented via circuit diagram!) | 0.2 |
|  | Idea to repeat multiple times to increase precision (multiple charging cycle idea) | 0.4 |
|  | 0.1 per measured 2 cycles, up to 6 cycles and after that 0.1 per measured 4 cycles up to 10 | 0.4 |
|  | 0.1 per repetition per data point, up to 3 repetitions per point | 0.3 |
| b | Evaluation and result | 1.1 |
|  | Approximation $N C_{p} \ll U_{0}$ leading to Eq. 6 and only taking into account values up to 15 charge cycles <br> OR using Eq. 6 and only taking into account values up to 20 charge cycles OR exact solution like eq. 8 for arbitrary measurement range (also large cycle numbers allowed) | 0.5 <br> or 0.3 <br> or 0.5 |
|  | value of $C_{p}$ inside ( $23.5 \pm 3$ )nF <br> OR value of $C_{p}$ inside ( $23.5 \pm 5$ ) nF | 0.6 <br> or 0.3 |
|  |  |  |
| Total on E.2b |  | 2.5 |

## Special cases and penalties

-     - 0.1 if $U_{0}$ was assumed to be 1.5 V instead of measuring it.
- If no circuit diagram was provided, the first 0.3 points are deducted for the measurement technique and discharging the piezo on the capacitor.
- Capacitor parallel to piezo case: This was quite common: If the student repeated the measurement from task E.2a but with the parallel circuit of piezo and capacitor (hence, measuring the sum of capacities), this is still a very imprecise measurement technique because the relative error will be on the order of the value that we seek to measure. It will however be possible to receive the following partial points if everything else was done as required:
- 0.1 for measurement technique
- 0 for discharge on capacitor idea
- 0 for multiple charging cycles
- 0 for measured cycle number
- up to 0.3 for repetitions
- 0.2 for approach of using parallel capacitor
- max. 0.3 for correct value $\pm 5 \mathrm{nF}$ range.
- so, a maximum total of 0.9 points can be awarded.
- Penalty: Student discharges piezo directly via Voltmeter If the student has only used a circuit that consists of the voltmeter and the piezo, (like in E.2a), the student always receives only the first 0.1 points for the entire task, given that they drew the circuit, else, 0 points.

| E.2c - Response function |  | Points |
| :--- | :--- | :--- |
| a | Approach | 0.9 |
|  | The idea to charge the capacitor using the piezo | 0.4 |
|  | and measure afterwards the capacitor voltage with voltmeter | 0.1 |
|  | using switch to discharge piezo (documented via circuit diagram or detailed description!) | 0.4 |
| b | Measurement | 1.9 |
|  | If they did not discharge the piezo before each individual measurement, or if there are obvious points of piezozero floating, we half the measurement points | or 0.9 |
|  | 0.05 for each measurement at a different weight (forces) value, up to for 16 data points; the result is to be rounded down to the precision of 0.1 | 0.8 |
|  | 0.1 per data points within each 1 kg wide weight range, up to 6 kg | 0.6 |
|  | 0.1 per repetition per data point (average number of repetitions for the entire measurement series), up to 5 repetitions per point | 0.5 |
| c | Evaluation and result | 1.2 |
|  | Accurate plot of the data points | 0.3 |
|  | Graphical evaluation of the slope, or fit with calculator of linear region OR point-wise average of linear region | 0.4 <br> or 0.2 |
|  | value of $\beta$ inside ( $3.54 \pm 0.2$ )V/N <br> OR value of $\beta$ inside ( $3.54 \pm 0.4$ )V/N | 0.5 <br> or 0.3 |
| Total on E.2c |  | 4.0 |

## Special cases and penalties

- If no circuit diagram was provided, the first 0.9 points for the Approach are not awarded.
- If the student uses only the voltmeter, to measure directly the piezo voltage, the results will not be reliable because the piezo discharges very quickly via the voltmeter, with the RC-time being equal to 20 ms . Therefore, this approach is very inaccurate, and no points ( $0 / 0.9$ ) are given for the approach. For the measurements, only $50 \%$ of points can be given ( $0.9 / 1.9$ ) points if an instantaneous voltage reading is taken after applying a force AND the result differs from the value that is expected for the given force no more than by a factor of 2.0. The points for Evaluation and result can be graded according to the table above.

| E.2d - Saturation |  | Points |
| :--- | :--- | :--- |
| a | Aproach and Measurement | 0.6 |
|  | Determination method of saturation point as intersection of extreme region fit functions (using data from Figure 7) | 0.4 |
|  | Formula Eq. 13 | 0.2 |
| b | Evaluation and result | 0.9 |
|  | Graphical evaluation, or calculation of intersection | 0.3 |
|  | value of $U_{\text {sat }}$ inside $(86 \pm 25) \mathrm{V}$ | 0.2 |
|  | value of $p_{\text {sat }}$ from 40 kPa to 85 kPa | 0.2 |
|  | value of $\sigma_{m a x}$ inside ( $4.9 \pm 2$ ) $\mathrm{mC} / \mathrm{m}^{2}$ | 0.2 |
| Total on E.2d |  | 1.5 |

## Special cases and penalties

- If measurements additional to what have been done for E.2c are made here, these are to be taken into account
while grading E-2c-b.
- Common case If the saturation was not determined via a plot but simply by pressing and ballparking the force at which the voltage does not rise anymore, we can award points up to the following maxima:
- 0.2/0.4 for evaluation method (because it works in principle but can be very imprecise)
- 0.2 if the formula was given
- 0 for graphical evaluation - at least a plot with meaningfull graphical interpretation (could be the one from E.2c) is required to correctly assess the situation here. Without (which is this common case) it's 0.
- max $3 \times 0.2$ for all remaining values, graded just normally.
- So a total of 1.0/1.5 points can be awarded for this technique.
- Penalty: Without a way to quantitatively measure piezo voltage responses to applied forces in E.2c, (especially if E.2c was not done or measurements were only attempted with a voltmeter directly attached to the piezo without anything else), this task can not be done in a way that is physically meaningfull and it will always receive 0 points.

| E.3 - Small area effects |  | Points |
| :--- | :--- | ---: |
|  | Idea to use the stick through the hole <br> for exposing a limited area to pressure | 0.5 |
|  | Adequate measurement of $U_{p}$ for dif- <br> ferent values of force | 0.3 |
|  | Correct result: No significant change. | 0.2 |
| Total on E.3 | $\mathbf{1 . 0}$ |  |

## Special cases and penalties

- Penalty: Without an explicit drawing or written description that the stick was put through the hole, the corresponding 0.5 and the 0.2 for the result will not be awarded, since there is no proof that the measurement are meaningful for this part. The same holds for approaches that only put smaller areas of the wooden cover plate under pressure.
- Adequate measurements of $U_{p}$ should have at least three points for different forces and it should be concludable (but does not need to be calculated explicitely by the student) from that data that the slope is the same as in E.2c within the error margins. For 2 measurements we award 0.2 and for one 0.1 points, still.
- Penalty: Without a reproducable way to measure piezo voltage responses to applied forces in E2.c, (especially if E2.c was not done or measurements were only attempted with a voltmeter directly attached to the piezo without anything else), the measurements and conclusion in this task are not meaningful. Therefore, the student can only receive max. 0.5 points for the idea of applying pressure through the whole but nothing else. Otherwise the student receives 0 points total.

| E. 4 - Deformation of the ball |  | Points |
| :--- | :--- | :--- |
| a | Aproach | 1.5 |
|  | Idea to use the diode in combination with the capacitor for extracting the maximum piezo voltage during a drop | 0.5 |
|  | using switch to discharge piezo (documented via circuit diagram or detailed description!) | 0.5 |
|  | Approach that the elastic kinetic energy part from dropping is the same as deformation energy | 0.5 |
| b | Measurement | 1.0 |
|  | If the piezo has not been discharged before each individual measurement, the points are halved (it is assumed that the piezo has not been discharged if the voltage readings of the datapoints fluctuate significantly around the expected values) | 1.0 <br> or 0.5 |
|  | 0.1 per measured 2 height values, up to 8 different height values | 0.4 |
|  | 0.1 per measured 10 cm of height range | 0.3 |
|  | 0.1 per repetition per data point, up to 3 repetitions | 0.3 |
| c | Evaluation and result | 2.0 |
|  | Linearisation equivalent to Eq. 17 | 0.8 |
|  | Graphical evaluation for $\alpha$ and $k$, or fit via calculator | 0.7 |
|  | Value of $\alpha$ between $1 \pm 0.5$ | 0.3 |
|  | Value of $k$ between $(84000 \pm 40000) \mathrm{N} / \mathrm{m}^{\alpha}$ | 0.2 |
| Total on E. 4 |  | 4.5 |

## Special cases and penalties

- If no circuit diagram was provided, the first 1.0 points are deducted for the measurement technique with the diode and discharging the piezo on the capacitor.
- If the voltmeter has been used directly for measuring the piezo voltage (without capacitor and diode), the data are unusable. Therefore, we cannot award the first $0.5+0.5$ points in the approach, and also, no points are awarded for the measurement data taken. However, for the evaluation part, we do not subtract points even if it is done with these unusable data as long as a correct evaluation method has been used.

| E. 5 - Interaction time | Points |
| :--- | :--- |
| Theory | 0.5 |
| find how $a_{1} / b_{1}$ depends on $v$ | 0.3 |
| express it through measurable ratios | 0.2 |
| Measurements and plots | 1.5 |
| 0.1 per measured force value, up to 7 different force values | 0.7 |
| 0.1 per repetition per data point, up to 3 repetitions | 0.3 |
| Plot | 0.2 |
| coordinates are related to theory | 0.3 |
| Conclusion ( $\tau$ doesn't depend on $v$ ) | 0.5 |
| Total on E. 5 | 2.5 |

## Raw data tables

Table 1: Data for 1
| $S$ | 364 | 305 | 250 | 200 |
| :---: | :---: | :---: | :---: | :---: |
| $s 1$ | 286 | 237 | 195 | 152 |
| $s 2$ | 286 | 241 | 193 | 151 |
| $s 3$ | 287 | 239 | 194 | 154 |
| $s 4$ | 282 | 238 | 196 | 155 |
| $s 5$ | 286 | 237 | 193 | 155 |
| $h$ | 373 | 314 | 259 | 209 |
| $h 1$ | 290 | 241 | 199 | 156 |
| $h 2$ | 290 | 245 | 197 | 155 |
| $h 3$ | 291 | 243 | 198 | 158 |
| $h 4$ | 286 | 242 | 200 | 159 |
| $h 5$ | 290 | 241 | 197 | 159 |


Table 3: Data for 2b
| charges | $U_{c}$ |
| ---: | ---: |
|  | mV |
| 1 | 15 |
| 2 | 31 |
| 3 | 43 |
| 4 | 64 |
| 5 | 78 |
| 6 | 86 |
| 7 | 97 |
| 8 | 117 |
| 9 | 138 |
| 10 | 142 |
| 15 | 206 |
| 20 | 261 |
| 25 | 322 |
| 30 | 372 |


Table 2: Data for 2a
| $U$ | $t$ |
| ---: | ---: |
| mV | s |
| 1408 | 0 |
| 1138 | 5 |
| 943 | 10 |
| 762 | 15 |
| 623 | 20 |
| 502 | 25 |
| 424 | 30 |
| 333 | 35 |
| 276 | 40 |
| 223 | 45 |
| 180 | 50 |
| 151 | 55 |
| 124 | 60 |
| 102 | 65 |
| 81 | 70 |


Table 4: Data for 2c
| $m$ | $U 1$ | U2 | U3 | U4 | $U 5$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| kg | mV | mV | mV | mV | mV |
| 0.0 | 0 | 0 | 0 | 0 | 0 |
| 0.1 | 30 | 34 | 39 | 42 | 37 |
| 0.2 | 63 | 78 | 87 | 82 | 77 |
| 0.3 | 126 | 110 | 119 | 119 | 116 |
| 0.4 | 142 | 173 | 153 | 156 | 153 |
| 0.5 | 176 | 206 | 187 | 186 | 206 |
| 0.6 | 240 | 224 | 216 | 249 | 230 |
| 0.7 | 286 | 285 | 259 | 270 | 272 |
| 0.8 | 304 | 295 | 306 | 306 | 296 |
| 0.9 | 335 | 328 | 337 | 338 | 334 |
| 1.0 | 367 | 346 | 373 | 357 | 339 |
| 1.3 | 429 | 390 | 447 | 432 | 458 |
| 1.7 | 557 | 576 | 550 | 541 | 575 |
| 2.0 | 620 | 629 | 625 | 635 | 600 |
| 2.3 | 702 | 711 | 711 | 676 | 671 |
| 2.7 | 812 | 798 | 759 | 762 | 787 |
| 3.0 | 823 | 847 | 820 | 838 | 841 |
| 3.3 | 856 | 855 | 840 | 888 | 854 |
| 3.7 | 994 | 911 | 926 | 916 | 884 |
| 4.0 | 977 | 881 | 881 | 887 | 911 |
| 4.5 | 1060 | 1024 | 830 | 799 | 812 |
| 5.0 | 977 | 918 | 852 | 893 | 766 |
| 5.5 | 954 | 817 | 789 | 820 | 839 |
| 6.0 | 802 | 890 | 907 | 1089 | 942 |
| 6.5 | 892 | 736 | 836 | 903 | 842 |
| 7.0 | 985 | 867 | 859 | 815 | 795 |
| 7.5 | 984 | 968 | 833 | 1068 | 981 |
| 8.0 | 1110 | 993 | 1247 | 1022 | 1061 |
| 8.5 | 988 | 814 | 971 | 1003 | 874 |
| 9.0 | 1181 | 1267 | 944 | 1022 | 907 |


Table 5: Data for 3
| $m$ | $U 1$ | $U 2$ | $U 3$ | $U 4$ | $U 5$ | $U 6$ |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| kg | mV | mV | mV | mV | mV | mV |
| 0.15 | 52 | 50 | 49 | 55 | 52 | 56 |
| 0.3 | 105 | 102 | 98 | 109 | 111 | 110 |
| 0.5 | 175 | 178 | 166 | 184 | 170 | 172 |
| 0.7 | 245 | 250 | 258 | 233 | 242 | 239 |
| 1.0 | 355 | 340 | 354 | 351 | 345 | 357 |


Table 6: Data for 4
| $S$ | $h$ | $U 1$ | $U 2$ | U3 | U4 | U5 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| mm | mm | mV | mV | mV | mV | mV |
| 363 | 334 | 437 | 411 | 410 | 424 | 422 |
| 341 | 312 | 399 | 395 | 380 | 398 | 413 |
| 320 | 291 | 411 | 414 | 414 | 378 | 425 |
| 300 | 271 | 337 | 358 | 423 | 385 | 369 |
| 280 | 251 | 356 | 345 | 393 | 401 | 358 |
| 260 | 231 | 320 | 311 | 361 | 461 | 373 |
| 240 | 211 | 303 | 364 | 361 | 332 | 371 |
| 220 | 191 | 315 | 340 | 329 | 287 | 365 |
| 200 | 171 | 332 | 326 | 336 | 345 | 347 |
| 180 | 151 | 305 | 322 | 280 | 316 | 315 |
| 160 | 131 | 297 | 297 | 284 | 295 | 273 |
| 140 | 111 | 276 | 271 | 269 | 260 | 261 |
| 120 | 91 | 253 | 238 | 235 | 241 | 252 |
| 100 | 71 | 215 | 203 | 205 | 217 | 217 |
| 80 | 51 | 178 | 177 | 176 | 180 | 181 |
| 60 | 31 | 150 | 141 | 138 | 146 | 146 |
| 40 | 11 | 103 | 103 | 116 | 102 | 104 |


Table 7: Data for 5
| S | $h$ | $U 1$ | U2 | U3 | U4 | U5 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| mm | mm | mV | mV | mV | mV | mV |
| 40 | 11 | 106 | 103 | 103 | 104 | 103 |
| 60 | 31 | 162 | 175 | 153 | 172 | 153 |
| 100 | 71 | 240 | 252 | 227 | 249 | 284 |
| 140 | 111 | 320 | 312 | 367 | 328 | 330 |
| 160 | 131 | 399 | 387 | 361 | 388 | 403 |
| 200 | 171 | 456 | 450 | 451 | 457 | 411 |
| 220 | 191 | 464 | 485 | 484 | 486 | 448 |
| 240 | 211 | 482 | 494 | 514 | 497 | 498 |
| 280 | 251 | 554 | 555 | 567 | 549 | 550 |
| 320 | 291 | 606 | 602 | 507 | 569 | 550 |
| 360 | 331 | 660 | 628 | 645 | 652 | 650 |
