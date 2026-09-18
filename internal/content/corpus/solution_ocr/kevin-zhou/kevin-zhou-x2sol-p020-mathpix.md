---
id: solution-ocr-kevin-zhou-x2sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x2-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 20. In this problem, we discuss how atomic physicists observe atomic energy levels.

(a) The discrete wavelengths of light observed in the spectra are called "spectral lines". Why are they called lines?

Ideally, each spectral line has zero width. However, in practice, isolated atoms emit radiation in a range of wavelengths centered about each spectral line. For concreteness, we'll consider the sodium doublet, a spectral line in sodium vapor which corresponds to yellow light with wavelength $\lambda = 589 \mathrm {~nm}$. (Why specifically sodium vapor?)

(b) One contribution to spectral line width is the energy-time uncertainty principle: if an excited state survives for time $\Delta t$, then the resulting emitted energy must have a spread $\Delta E \Delta t \gtrsim \hbar$. In the case of the sodium doublet, the lifetime is 16 ns. Estimate the spread in wavelengths $\Delta \lambda$ due to this "lifetime broadening".
(c) Another contribution to spectral line width is Doppler broadening: when a gas of atoms is at a nonzero temperature, the atomic motion causes the wavelengths to be changed by the Doppler effect. Estimate the resulting spread in wavelengths $\Delta \lambda$ at $T = 1000 \mathrm {~K}$. (You can consult the tables in appendix D of Krane.)
(d) The spectrum of the Sun has a rather different form. Instead of having radiation at only a few wavelengths, it has radiation at almost all wavelengths, except for a few wavelengths where the amount of radiation decreases. Why?

Solution. (a) The spectra of light can be observed through the dispersion of light, where we a band of colors in increasing (or decreasing) wavelength. When discrete wavelengths are emitted or absorbed, we notice one particular wavelength emitted or absorbed, which will make a colored or dark line in the spectrum. It looks like this:
![](../../../figures/solution-ocr/07b297df59dbd6ea7762ebe2.jpg)

(b) Since $\Delta E = h \Delta f \sim \hbar / \Delta t$ and $f = c / \lambda$, giving $\Delta f = c \Delta \lambda / \lambda ^ { 2 }$, we get
$$
\Delta \lambda = \lambda ^ { 2 } \frac { \hbar } { h c \Delta t } = \frac { \lambda ^ { 2 } } { 2 \pi c \Delta t } \approx 10 ^ { - 5 } \mathrm {~nm} .
$$
(c) Velocities from thermal motion is much less than $c$, so we can use $\Delta f = f v / c$. We can estimate $\frac { 1 } { 2 } m v ^ { 2 } = \frac { 3 } { 2 } k _ { B } T$, where the mass of a sodium atom is $m = 3.8 \times 10 ^ { - 26 } \mathrm {~kg}$. This gives
$$
\Delta \lambda = \lambda ^ { 2 } \frac { \Delta f } { c } = \lambda v / c = \frac { \lambda } { c } \sqrt { \frac { 3 k _ { B } T } { m } } \approx 2 \times 10 ^ { - 3 } \mathrm {~nm} .
$$
(d) The electrons in the Sun are stripped off the nuclei because it's hot, so they emit a continuous spectrum of blackbody radiation. But the atoms in the cooler atmosphere of the Sun will absorb certain wavelengths, which will create an absorption spectrum.

Idea 7
Conversely, when an atom is placed in an electromagnetic field of angular frequency $\omega$, it may absorb a photon to go from energy level $E _ { 0 }$ to $E _ { 1 }$. The presence of such a field also increases the rate of decay from $E _ { 1 }$ down to $E _ { 0 }$ via stimulated emission, as we saw in T1.

Finally, an electron can be ejected from an atom entirely by absorbing a photon in the photoelectric effect; if the initial energy was $- E$, then the final kinetic energy of the electron is $\hbar \omega - E$.

[3] Problem 21. USAPhO 1997, problem A4.
[3] Problem 22. USAPhO 1998, problem A3.
[3] Problem 23. USAPhO 1998, problem B2. (There's a typo in the solutions, pointed out here.)
[3] Problem 24. INPhO 2012, problem 5.
[5] Problem 25. IPhO 2009, problem 2. This relatively straightforward problem covers the neat application of Doppler laser cooling, a technique for creating ultracold gases that won the 1997 Nobel prize. (For a very similar problem, see APhO 2006, problem 1.)

Solution. See the official solution, but note that it has some factor of 2 errors, as pointed out by Stefan Ivanov here.
[5] Problem 26. IPhO 2020, problem 3. A somewhat more challenging problem focusing on chirped pulse amplification, which won the 2018 Nobel prize.

## Remark

In a conventional refrigerator, cooling the inside requires the heating of a hot reservoir, which is usually a metal coil located at the back of the fridge. But in Doppler laser cooling, a sample of atoms is cooled without a hot reservoir heating up! This is actually allowed by the second law of thermodynamics because the entropy of the photons goes up. They begin by coming in by a definite direction (the laser beam) and come out in a random direction, so the entropy associated with their orientation increases.

To reach even lower temperatures, one uses the technique of evaporative cooling. The atoms are held in place by a trap, which you can think of as a static, attractive potential $U ( r ) \propto r ^ { 2 }$. If the trap has finite height, then only the most energetic atoms can escape. The remaining atoms have less energy on average, and hence are colder, just like how evaporating sweat cools people down. This doesn't violate the second law of thermodynamics because the atoms that escape the trap end up in some random place in the lab, so the entropy associated with their position increases.
[5] Problem 27. IZhO 2019, problem 3. A problem on the dynamics on a laser, which is arguably the most important invention for atomic physics in history.
