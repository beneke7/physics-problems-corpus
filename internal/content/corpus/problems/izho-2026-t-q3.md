---
id: izho-2026-t-q3
source: izho
native_id: "Problem 3. Electron Paramagnetic Resonance (10.0 points) Magnetic Moment"
year: 2026
language: en
translated: false
topic: [quantum-physics, electromagnetism]
subtopic: [magnetic-field, energy-levels, resonance, photon-energy, atomic-structure]
difficulty: null
difficulty_norm: 4
difficulty_level: 4
math_tools: [dimensional-analysis, calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 120
points: "\"10.0 points\""
has_solution: true
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2026_T.mmd"
verification_status: pending
solution_language: ru
techniques: [conservation-laws, differential-element, cross-domain-analogy]
---

## Problem 3. Electron Paramagnetic Resonance (10.0 points) Magnetic Moment

The magnetic moment $\boldsymbol{m}$ of a planar current loop is a vector quantity defined as the product of the electric current $I$, the area of the loop $S$, and the unit normal vector $\mathbf{n}$ perpendicular to the plane of the loop:

$$
m=I S n .
$$

The direction of the magnetic moment vector is determined by the right-hand (corkscrew) rule: if the fingers of the right hand curl in the direction of the current in the loop, the thumb points in the direction of $\boldsymbol{m}$.
3.1 A circular loop of radius $R$ carries an electric current and has a magnetic moment $\boldsymbol{m}$. Find the magnetic field induction $\boldsymbol{B}_{0}$ at the center of the loop.
3.2 The same loop is placed in an external uniform magnetic field of induction $\boldsymbol{B}$ such that the magnetic moment vector makes an angle $\varphi$ with the direction of $\boldsymbol{B}$. Find the magnitude of the mechanical torque $\boldsymbol{M}$ acting on the loop due to the external magnetic field.
3.3 The loop is slowly rotated in an external uniform magnetic field $\boldsymbol{B}$ so that the direction of its magnetic moment $\boldsymbol{m}$ changes from being aligned with the field $(\boldsymbol{m} \uparrow \uparrow \boldsymbol{B})$ ) to being opposite to the field $(\boldsymbol{m} \uparrow \downarrow \boldsymbol{B})$. Find the mechanical work $A$ done by the magnetic field during this rotation.

## Electron Paramagnetic Resonance

If a charged particle rotates or moves along a closed trajectory, it possesses a mechanical (angular) momentum, and as a result a magnetic moment also arises. In this case, a universal gyromagnetic relation holds, which shows how the magnetic moment and the mechanical moment of the particle are related.

Suppose an electron in an atom moves along a circular orbit such that its orbital angular momentum with respect to the center is $\boldsymbol{L}$. Such motion can be regarded as equivalent to a circular electric current, which has a magnetic moment $\boldsymbol{m}$. The magnetic moment and the angular momentum are related by the gyromagnetic relation

$$
\boldsymbol{m}=-g_{L} \frac{e}{2 m_{e}} \boldsymbol{L},
$$

where $e$ is the elementary charge, $m_{e}$ denotes the electron mass, and $g_{L}$ stands for the so-called Landé $g$ factor.
3.4 Find the Landé factor $g_{L}$ for the circular orbital motion of an electron.

Electron Paramagnetic Resonance (EPR) is a phenomenon in which a substance containing unpaired electrons absorbs electromagnetic radiation (usually in the microwave range) when placed in a constant magnetic field. This absorption does not occur at arbitrary frequencies but only at a strictly defined one, and is therefore called resonant.

Assume that an atom has a single unpaired electron in its outer shell with zero orbital angular momentum. Such an electron has an intrinsic angular momentum called spin. When a sample of the substance is placed in a constant magnetic field produced by a solenoid with magnetic induction $B$, the spin can be oriented in two ways relative to the field: along the magnetic field direction with angular momentum projection $+\hbar / 2$, or opposite to it with projection $-\hbar / 2$. These two orientations have different energies, so transitions between them are possible. In what follows, assume that the Landé factor for the spin, $g_{s}$, is twice that for the electron's orbital motion. The sample is irradiated with an electromagnetic wave of fixed angular frequency $\omega$, which can induce transitions of the electron between the two states with different spin projections. Then the magnitude of the external magnetic field induction is slowly varied, while the change in the absorption intensity of the electromagnetic radiation is recorded.
3.5 Find the angular frequency $\omega$ of the external electromagnetic radiation and calculate its numerical value if the maximum absorption occurs at a magnetic field induction $B_{0}=350 \mathrm{mT}$.

Now atoms of the same type are embedded in an unknown material from which the core of the solenoid is made.
3.6 The magnetic field specified in the previous part was achieved at a current $I_{0}=1.50 \mathrm{~A}$ in the solenoid winding. Determine the new current $I$ in the solenoid winding required for resonant absorption if the magnetic permeability of the unknown material is $\mu=1.25$.

## Thermodynamic equilibrium

Assume that the core placed in the same magnetic field is in a state of thermodynamic equilibrium at a temperature $T=50 \mathrm{~K}$, and the total number of embedded atoms is $N=1.00 \times 10^{20}$. Let $n_{0}$ denote the difference between the number of atoms occupying the lower $\left(N_{1}\right)$ and the upper $\left(N_{2}\right)$ energy levels.
3.7 Calculate $n_{0}$ under the given conditions.

When electromagnetic radiation interacts with matter, three processes occur:

1) Absorption: an atom transitions from a lower energy level $E_{1}$ to a higher energy level $E_{2}$ by absorbing a photon. The number of transitions from the lower level per unit time is given by
$$
\frac{d N_{1}}{d t}=-B_{12} \rho N_{1},
$$
where $\rho$ is the energy density of the electromagnetic radiation;
2) Stimulated emission: under the influence of an external photon an atom transitions from a higher energy level $E_{2}$ to a lower energy level $E_{1}$ with the emission of another photon. The number of transitions from the upper level per unit time is given by
$$
\frac{d N_{2}}{d t}=-B_{21} \rho N_{2} ;
$$
3) Spontaneous transition: a spontaneous transition of an atom from the upper level to the lower level accompanied by the emission of a photon. The number of such transitions from the upper level per unit time is given by
$$
\frac{d N_{2}}{d t}=-A_{21} N_{2} .
$$

The constants $B_{12}, B_{21}, A_{21}$ are called Einstein's coefficients. Planck showed that in a state of thermodynamic equilibrium, the energy density of equilibrium electromagnetic radiation is described by the formula:

$$
\rho=\frac{2 \hbar \omega^{3}}{\pi \mathrm{c}^{3}} \frac{1}{\exp \left(-\frac{\hbar \omega}{k_{B} T}\right)-1} .
$$

3.8 Prove that $B_{12}=B_{21}$.

## Presence of an external microwave field source

At the initial moment of time, the system is in thermodynamic equilibrium at the temperature specified above. Then a source of microwave radiation is switched on in such a way that the energy density of the electromagnetic radiation $\rho$ in the sample remains constant in time, and its magnitude is such that spontaneous transitions in the system can be neglected.
3.9 Find the analytical time dependence $n(t)$ of the difference between the numbers of atoms occupying the lower and the upper energy levels, as a function of time $t$, assuming that $k=B_{12} \rho$.
3.10 It is known that the difference between the numbers of atoms occupying the lower and the upper energy levels changes by exactly a factor of 2 after a time $\tau=1.00 \mathrm{~s}$ from the moment the source is switched on. Under these conditions, calculate the power $P$ of the microwave radiation source at the initial moment of time.

In reality, absorption and stimulated emission are not the only processes by which an electron in the upper energy level loses its excess energy. Relaxation processes play an important role, in which the excess energy is transferred to the surrounding matter; it is precisely due to these processes that an equilibrium distribution over energy levels is established.

The relaxation process for level 1 can be described as continuous transitions from level 1 to level 2 and back; the same is true for level 2. The terms describing relaxation for level 1 are written via constants $\alpha_{1}$ and $\alpha_{2}$ as

$$
\frac{d N_{1}}{d t}=-\alpha_{1} N_{1}+\alpha_{2} N_{2},
$$

and, consequently, a similar relation can be put down for level 2.
3.11 For the given substance, let $\alpha_{1}+\alpha_{2}=0.670 \cdot 10^{-3} \mathrm{~s}^{-1}$. Under these conditions, calculate the power of the microwave radiation source in the steady-state regime of spectrum measurement using the electron paramagnetic resonance method.

## Mathematical hint for the theoretical competition

The following formulas may be useful:

$$
\begin{gathered}
\int x^{n} d x=\frac{x^{n+1}}{n+1}+C \text {, where } n \neq-1 \text { is a fixed number, } C \text { refers to an arbitrary constant; } \\
\int \frac{d x}{x}=\ln |x|+C, \text { where } C \text { stands for an arbitrary constant; } \\
\int \frac{d x}{\left(a^{2}+x^{2}\right)^{3 / 2}}=\frac{x}{a^{2} \sqrt{a^{2}+x^{2}}}+C, \text { where } a \text { - constant, } C-\text { arbitrary constant; }
\end{gathered}
$$

$$
\begin{gathered}
(1+x)^{\gamma} \approx 1+\gamma x+\frac{\gamma(\gamma-1)}{2} x^{2}, \text { for }|x| \ll 1 \text { and any value of } \gamma ; \\
\tan x \approx \sin x \approx x, \text { for }|x| \ll 1 ; \\
\ln (1+x) \approx x, \text { for }|x| \ll 1 .
\end{gathered}
$$

## List of physical constants

Acceleration of gravity $g=9.80 \mathrm{~m} / \mathrm{s}^{2}$;
Universal gas constant $R=8.31 \mathrm{~J} /(\mathrm{mole} \cdot \mathrm{K})$;
Speed of light in vacuum $c=3.00 \cdot 10^{8} \mathrm{~m} / \mathrm{s}$;
Reduced Planck constant $\hbar=1.05 \cdot 10^{-34} \mathrm{~J} \cdot \mathrm{~s}$;
Magnetic constant $\mu_{0}=4 \pi \cdot 10^{-7} \mathrm{H} / \mathrm{m}$;
Electric constant $\varepsilon_{0}=8.85 \cdot 10^{-12} \mathrm{~F} / \mathrm{m}$;
Stefan-Boltzmann constant $\sigma=5.67 \cdot 10^{-8} W /\left(m^{2} \cdot K^{4}\right)$;
Elementary charge $e=1.60 \cdot 10^{-19} \mathrm{C}$;
Electron mass $m_{e}=9.11 \cdot 10^{-31} \mathrm{~kg}$.
