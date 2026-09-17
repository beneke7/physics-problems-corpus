---
id: kevin-zhou-x2-p020
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x2-p020
solution_type: author
source_document: solution-document-kevin-zhou-x2sol
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X2Sol.pdf."
---

[3] Problem 20. In this problem, we discuss how atomic physicists observe atomic energy levels.
(a) The discrete wavelengths of light observed in the spectra are called “spectral lines”. Why are
they called lines?
Ideally, each spectral line has zero width. However, in practice, isolated atoms emit radiation
in a range of wavelengths centered about each spectral line. For concreteness, we’ll consider the
sodium doublet, a spectral line in sodium vapor which corresponds to yellow light with wavelength
λ = 589nm. (Why specifically sodium vapor?)
(b) One contribution to spectral line width is the energy-time uncertainty principle: if an excited
state survives for time ∆t, then the resulting emitted energy must have a spread ∆E∆t ≳ ℏ.
In the case of the sodium doublet, the lifetime is 16ns. Estimate the spread in wavelengths
∆λ due to this “lifetime broadening”.
(c) Another contribution to spectral line width is Doppler broadening: when a gas of atoms is
at a nonzero temperature, the atomic motion causes the wavelengths to be changed by the
Doppler effect. Estimate the resulting spread in wavelengths ∆λ at T = 1000K. (You can
consult the tables in appendix D of Krane.)
(d) The spectrum of the Sun has a rather different form. Instead of having radiation at only a few
wavelengths, it has radiation at almost all wavelengths, except for a few wavelengths where
the amount of radiation decreases. Why?
12
Kevin Zhou Physics Olympiad Handouts
Solution. (a) The spectra of light can be observed through the dispersion of light, where we
a band of colors in increasing (or decreasing) wavelength. When discrete wavelengths are
emitted or absorbed, we notice one particular wavelength emitted or absorbed, which will
make a colored or dark line in the spectrum. It looks like this:
(b) Since ∆E = h∆f ∼ ℏ/∆t and f = c/λ, giving ∆f = c∆λ/λ2, we get
∆λ = λ2 ℏ
hc∆t
=
λ2
2πc∆t
≈ 10−5
nm.
(c) Velocities from thermal motion is much less than c, so we can use ∆f = fv/c. We can estimate
1
2mv2 = 3
2kBT, where the mass of a sodium atom is m = 3.8 × 10−26 kg. This gives
∆λ = λ2 ∆f
c
= λv/c =
λ
c
r
3kBT
m
≈ 2 × 10−3
nm.
(d) The electrons in the Sun are stripped off the nuclei because it’s hot, so they emit a continuous
spectrum of blackbody radiation. But the atoms in the cooler atmosphere of the Sun will
absorb certain wavelengths, which will create an absorption spectrum.
Idea 7
Conversely, when an atom is placed in an electromagnetic field of angular frequency ω,
it may absorb a photon to go from energy level E0 to E1. The presence of such a field
also increases the rate of decay from E1 down to E0 via stimulated emission, as we saw in T1.
Finally, an electron can be ejected from an atom entirely by absorbing a photon in the
photoelectric effect; if the initial energy was −E, then the final kinetic energy of the electron
is ℏω − E.
[3] Problem 21.  W 1 0USAPhO 1997, problem A4.
[3] Problem 22.  W 1 0USAPhO 1998, problem A3.
[3] Problem 23.  m 1 0USAPhO 1998, problem B2. (There’s a typo in the solutions, pointed out here.)
[3] Problem 24.  m 1 0INPhO 2012, problem 5.
[5] Problem 25.  h 1 0IPhO 2009, problem 2. This relatively straightforward problem covers the neat
application of Doppler laser cooling, a technique for creating ultracold gases that won the 1997
Nobel prize. (For a very similar problem, see APhO 2006, problem 1.)
13
Kevin Zhou Physics Olympiad Handouts
Solution. See the official solution, but note that it has some factor of 2 errors, as pointed out by
Stefan Ivanov here.
[5] Problem 26.  h 1 0IPhO 2020, problem 3. A somewhat more challenging problem focusing on
chirped pulse amplification, which won the 2018 Nobel prize.
Remark
In a conventional refrigerator, cooling the inside requires the heating of a hot reservoir,
which is usually a metal coil located at the back of the fridge. But in Doppler laser cooling,
a sample of atoms is cooled without a hot reservoir heating up! This is actually allowed by
the second law of thermodynamics because the entropy of the photons goes up. They begin
by coming in by a definite direction (the laser beam) and come out in a random direction,
so the entropy associated with their orientation increases.
To reach even lower temperatures, one uses the technique of evaporative cooling. The atoms
are held in place by a trap, which you can think of as a static, attractive potential U(r) ∝ r2.
If the trap has finite height, then only the most energetic atoms can escape. The remaining
atoms have less energy on average, and hence are colder, just like how evaporating sweat
cools people down. This doesn’t violate the second law of thermodynamics because the atoms
that escape the trap end up in some random place in the lab, so the entropy associated with
their position increases.
[5] Problem 27.  T 1 0IZhO 2019, problem 3. A problem on the dynamics on a laser, which is arguably
the most important invention for atomic physics in history.
14
