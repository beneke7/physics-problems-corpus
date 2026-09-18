---
id: solution-ocr-kevin-zhou-w3sol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w3-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 1. In this problem, you'll work through Newton's slick derivation of the speed of sound. Instead of considering how parcels of gas move, we consider the force the gas exerts when squeezed.
    (a) In M4, we showed that the speed $v$ of longitudinal waves in a spring of length $L$, mass $M$, and spring constant obeys $v ^ { 2 } = k L ^ { 2 } / M$. For a cylinder of gas of length $L$ and area $A$, show that the effective spring constant is
$$
k = - A ^ { 2 } \frac { d p } { d V } .
$$
    (b) Assuming the sound waves are adiabatic, use this to conclude that
$$
v ^ { 2 } = \frac { \gamma p } { \rho } .
$$
If each gas molecule has mass $m$, rewrite the result in terms of $\gamma , T$, and $m$.

Next, we consider some limitations of this result.


(c) In an ideal gas, we assume the particles are noninteracting: they pass right through each other. But for sound waves to propagate, adjacent packets of ideal gas must exert pressure on each other. How is this possible? Use this observation to estimate the maximum possible angular frequency of sound in a gas in terms of the number density $n = N / V = p / k _ { B } T$, the radius $r$ of a gas molecule, and the speed of sound $v$.
(d) Our analysis also breaks down if the pressure variations are no longer adiabatic. The rate of heat conduction in a gas with thermal conductivity $k _ { t }$ across a surface of area $A$ is
$$
\frac { d Q } { d t } = - A k _ { t } \frac { d T } { d x }
$$
For a sound wave with angular frequency $\omega$, show that the adiabatic approximation holds when $\omega \ll p k _ { B } / m k _ { t }$. Does this hold for audible sound in air, where $k _ { t } \approx 25 \mathrm {~mW} / ( \mathrm { m } \cdot \mathrm { K } )$ ?

Solution. (a) By definition, we have $k = - d F / d x$, where $F$ is the force experienced by a piston at the end of the cylinder as it moves a distance $x$. But we also have $F = A p$ and $d V = A d x$, and combining these gives the result.


(b) Plugging the result of part (a) in, we have
$$
v ^ { 2 } = - A ^ { 2 } \frac { d p } { d V } \frac { L ^ { 2 } } { M } = - V \frac { d p } { d V } \frac { V } { M } .
$$
For adiabatic sound waves, $V d p / d V = - \rho d p / d \rho = - \gamma p$, so that $v ^ { 2 } = \gamma p / \rho$.
Alternatively, using the ideal gas law $p = \rho k _ { B } T / m$, we can rewrite this as $v ^ { 2 } = \gamma k _ { B } T / m$.
(c) There have to be enough gas molecules so that each individual gas molecule undergoes many collisions per wave period, or else the wave will simply fall apart. We saw in part (b) that the typical thermal speed of the air molecules is comparable to the speed of sound, so the mean time between collisions is $\sim 1 / \left( n r ^ { 2 } v \right)$. Then we must have
$$
\omega \ll n r ^ { 2 } v .
$$
One easy trick to evaluate this is to note that air molecules are separated by roughly 10 times their radius, $n \sim 1 / ( 10 r ) ^ { 3 }$, and $r \sim 10 ^ { - 10 } \mathrm {~m}$. Then we have $f \ll 10 ^ { - 3 } v / r \sim \mathrm { GHz }$.
(d) A sound wave consists of regions of higher and lower temperature. For the adiabatic approximation to be valid, the heat transfer rate has to be negligible compared to the rate at which a parcel's energy changes due to the propagation of the sound wave.
Let the sound wave have temperature amplitude $\Delta T$, wavelength $\lambda$, and period $\tau \sim \lambda / v$. Then a half-wavelength of warm air loses heat to its surroundings at rate
$$
\frac { d Q } { d t } \sim \frac { A k _ { t } \Delta T } { \lambda } \sim A k _ { t } \Delta T \frac { \omega } { v } .
$$
On the other hand, its internal energy varies as the sound wave passes by, at the typical rate
$$
\frac { d E } { d t } \sim n A \lambda k _ { B } \frac { \Delta T } { \tau } \sim n A k _ { B } \Delta T v .
$$
Comparing these expressions, we must have
$$
\omega \ll \frac { n k _ { B } v ^ { 2 } } { k _ { t } } \sim \frac { n k _ { B } ^ { 2 } T / m } { k _ { t } } \sim \frac { p k _ { B } } { m k _ { t } } \sim \mathrm { GHz } .
$$
Based on the intuition that adiabatic processes are "fast", you might have guessed that sound is adiabatic for high frequencies. Instead, it's the opposite. The reason is that heat transfer is enhanced at higher frequencies because $\lambda$ gets shorter, so $d T / d x$ gets higher.
Interestingly, the frequency cutoff is GHz, just like in the answer in part (c)! This isn't a coincidence: one can compute $k _ { t }$ in terms of properties of the gas molecules (as was done in T1), and plugging this in gives precisely the same expression as part (c). We conclude that sound waves in air are adiabatic for all the frequencies they can even exist, and certainly at audible frequencies.

## Remark

Phase shifts upon reflection for sound waves can be a bit tricky. Recall from W1 that a hard boundary for a transverse string wave $y ( x , t )$ sets $y$ to zero. As a result, upon reflection, $y$ flips sign, but $v _ { y } = \partial y / \partial t$ stays the same.


When a sound wave hits a hard wall, the wall sets the displacement $\xi ( x , t )$ to zero. Then upon reflection, the displacement flips sign, while the pressure variation $\delta P ( x , t ) \propto \partial \xi / \partial x$ stays the same. In standing waves, a hard wall is thus a node for $\xi$ and an antinode for $\delta P$. Similarly, when sound waves in a tube reflect off an open end, the end sets $\delta P$ to zero (since everything outside the tube has atmospheric pressure), so it flips sign. An open end is thus a node for $\delta P$ and an antinode for $\xi$.

The rule is always the same: whatever quantity gets fixed to zero by the boundary gets flipped in sign upon reflection, and for a standing wave, that quantity has a node at the boundary. But it's confusing enough that several common high school textbooks get it wrong. Some even state, in their confusion, that "hard boundaries flip transverse waves but not longitudinal ones", which is definitely not true in general.
[2] Problem 2 (HRK). Some conceptual questions about sound waves.

(a) What is larger for a sound wave, the relative density variations $\Delta \rho / \rho$ or the relative pressure variations $\Delta P / P$ ? Or does it depend on the situation?
(b) What is larger, the velocity of a sound wave $v$ or the amplitude of the velocity variations $\Delta u$ of the underlying particles? Or does it depend on the situation?
(c) A speaker periodically switches between emitting frequency $f _ { 1 }$ and $f _ { 2 }$, with a frequency $f ^ { \prime }$. If you start moving, the $f _ { 1 }$ and $f _ { 2 }$ you hear will be Doppler shifted. Is $f ^ { \prime }$ also Doppler shifted?

Solution. (a) For an adiabatic sound wave, $P \propto \rho ^ { \gamma }$, which implies $\Delta P / P = \gamma \Delta \rho / \rho$. Then $\Delta P / P$ is larger.

(b) For a sound wave of wavelength $\lambda$, during a time $t \sim \lambda / v$ the particles will move a distance $\Delta x \sim \Delta u \lambda / v$. Then the maximum relative compression will be $\Delta x / \lambda \sim \Delta u / v$. So as long as the density variations are small, which would be true for a typical sound wave, we have $\Delta u \ll v$. (If we had $\Delta u \sim v$, then we would instead have a strong shock wave, which can't be described by the results above.)
(c) Yes. The Doppler shift is due to your relative velocity to the sound wave, so you pass through the waveform (and thereby experience all of its properties) faster or slower by the same factor.
