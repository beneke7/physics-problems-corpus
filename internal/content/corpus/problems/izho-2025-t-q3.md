---
id: izho-2025-t-q3
source: izho
native_id: "Problem 3. Dirac's monopole (10.0 points) Introduction"
year: 2025
language: en
translated: false
topic: [electromagnetism, quantum-physics]
subtopic: [magnetic-field, induction, inductance, current, energy-levels]
difficulty: null
difficulty_norm: 5
math_tools: [dimensional-analysis, calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 150
points: "\"10.0 points\""
has_solution: true
has_figure: true
figure_files: [izho-2025-t-q3-fig01.png, izho-2025-t-q3-fig02.png, izho-2025-t-q3-fig03.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2025_T.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [conservation-laws, choose-reference-frame, differential-element]
---

## Problem 3. Dirac's monopole (10.0 points) Introduction

A monopole is a hypothetical elementary particle which, unlike all known magnets, is a unipolar magnet. The hypothesis of the existence of magnetic monopoles was put forward by the English physicist Paul Dirac in 1931, and a number of theoretical models have been developed to date of the electromagnetic field in the presence of magnetic charges (monopoles). Note that numerous attempts to experimentally detect magnetic monopoles have been unsuccessful.

Let us accept the hypothesis of the existence of point-like monopoles with a magnetic charge $q_{m}$. By analogy with Coulomb's law, it is assumed that the magnetic field created by the monopole is central, and the modulus of the induction vector $B$ at a distance $r$ from the particle is determined by the formula

$$
B=\frac{\mu_{0} q_{m}}{4 \pi r^{2}},
$$

where $\mu_{0}$ is the magnetic constant.
3.1 The dimension of magnetic charge $q_{m}$ in the SI system of units is: $\left[q_{m}\right]=\mathrm{A}^{x_{1}} \cdot m^{x_{2}} \cdot k g^{x_{3}} \cdot s^{x_{4}}$, where $x_{1}, x_{2}, x_{3}, x_{4}$ are some integers. Find all $x_{1}, x_{2}, x_{3}, x_{4}$.

A ring of radius $R=2.50 \mathrm{~cm}$ made of thin superconducting wire with thickness $\delta=R / 100$ is used as a detector of varying magnetic fields. The induced electric current arising in the ring can be recorded and its strength can be measured. When particles with magnetic fields pass through the ring, conclusions about their magnetic field structures can be drawn from the character of the ring current variations. It is known that the inductance of a thin ring is determined by the formula

$$
L=\mu_{0} R\left(\ln \frac{16 R}{\delta}-2\right) .
$$

3.2 Calculate the inductance $L$ of the superconducting ring.

## Classical description

Assume that the motion of an electron in a superconductor obeys the laws of classical physics, and its mass can be neglected. This part of the problem requires drawing of schematic graphs. You are not required to strictly calculate the functions being analyzed, you are not required to indicate any numerical characteristics, it is enough to show its qualitative behavior: domains of increase and decrease, the presence of maxima and minima, the presence of discontinuity points, behavior with arguments tending to $\pm \infty$. You can construct these graphs even if you have not obtained the exact form of functional dependencies, such drawings will be graded as well.

In the first experiment, a thin disk magnet is used, whose thickness is small compared to its radius. We align the $z$-axis with the axis of the magnet, and place the origin at its center. It can be shown that the cross-sectional average axial component $B_{z}$ of the magnetic field induction vector on the axis of the magnet depends
![](izho-2025-t-q3-fig01.png)
on the $z$-coordinate according to the law

$$
B_{z}(z)=B_{0} \frac{a^{3}}{\left(z^{2}+a^{2}\right)^{3 / 2}},
$$

where $B_{0}, a$ are known positive constants.
Let the disk magnet move with a constant velocity $\vec{V}$ along the axis of the superconducting ring, such that its axis always coincides with the axis of the ring. Let us consider this experiment in a frame of reference associated with the ring. We direct the coordinate axis $O x$ along the axis of the ring, its origin is coincident with the ring center, so that the coordinate of the magnet $x$ changes from $-\infty$ to $+\infty$.
![](izho-2025-t-q3-fig02.png)
3.3 Find the dependence of the induction EMF $\varepsilon_{\text {ind }}(x)$, arising in the ring when the magnet moves, on the magnet coordinate $x$. Plot a schematic graph of this dependence.
3.4 Find the dependence of the current in the ring $I(x)$ on the coordinate of the magnet $x$, if at the initial moment of time the current was zero. Plot a schematic graph of this dependence.
3.5 Find the current in the ring $I_{f}$ after the magnet flies away through the ring.

Let us now consider the second experiment on the passage of a monopole through the superconducting ring. Let the monopole move with a constant velocity $\vec{V}$ along the axis of the superconducting ring. In contrast, we consider this experiment in the reference frame associated with the monopole. Let us direct the coordinate axis $O z$ along the axis of the ring, its origin is coincident with the monopole, so that the
![](izho-2025-t-q3-fig03.png)
coordinate of the ring $z$ changes from $+\infty$ to $-\infty$.
3.6 Find the dependence of the Lorentz force $F_{L}(z)$, acting on a free electron in the ring from the magnetic field of the monopole, on the coordinate of the ring $z$.
3.7 Using the obtained dependence $F_{L}(z)$, find the EMF of induction in the ring $\varepsilon_{\text {ind }}(z)$ on the coordinate of the ring $z$. Plot a schematic graph of this dependence.
3.8 Find the dependence of the current in the ring $I(z)$ on the ring coordinate $z$ if at the initial moment of time there was no current in the ring. Plot a schematic graph of this dependence.
3.9 Find the current in the ring $I_{f}$ after the monopole flies away through the ring.

## Quantization of magnetic flux in superconductors

Quantum theory shows that free electrons in a superconductor combine into bound pairs that move as a single unit (such pairs are called Cooper pairs). To describe their motion, one can use a semiclassical approximation: Newton's equations are supplemented with Bohr's quantization rule, which in this case states that the angular momentum $M$ of a pair relative to the ring center can only take integer values that are multiples of the reduced Planck constant $\hbar$.
3.10 Express the change in the angular momentum of an electron pair $\Delta M$ moving along a circular superconducting ring through the change in the magnetic flux of the external magnetic field through the ring $\Delta \Phi$.
3.11 Find the minimum possible change in the magnetic flux of the external field through the ring, which is called the quantum of magnetic flux $\varphi_{0}$ and calculate its numerical value.
3.12 Find the change in current in the ring $\Delta I_{0}$ when the magnetic flux through it changes by 1 quantum $\varphi_{0}$.

## Estimating the Dirac Monopole Mass

By applying the quantization rule to the total magnetic flux generated by the Dirac monopole, we can estimate the magnetic charge and its mass. A Dirac monopole is a monopole with the minimum possible magnetic charge $q_{m 0}$.

Theoretical physics uses the following model of an electron: it is a spherical particle with a charge uniformly distributed over the surface of a sphere whose radius is called the classical radius of an electron. It is also assumed that the rest mass of an electron is completely determined by the energy of its electrostatic field.
3.13 Find the numerical value of the minimum magnetic charge of a monopole $q_{m 0}$.
3.14 Find the change in current $\Delta I$ in the superconducting ring if a Dirac monopole flies through it.
3.15 Express the classical radius of an electron $r_{0}$ through its mass $m_{e}$, charge $e$ and fundamental physical constants. Calculate its numerical value.
3.16 Assuming that the radius of the monopole is equal to the classical radius of the electron, and its rest mass is determined by the energy of its magnetic field, find the mass ratio of the Dirac monopole $m_{m}$ and of the electron $m_{e}$ and calculate its numerical value.

## Mathematical hint for the theoretical competition

The following formulas may be useful:

$$
\begin{gathered}
\int x^{n} d x=\frac{x^{n+1}}{n+1}+C \text {, where } n \neq-1 \text { is a fixed number, } C \text { refers to an arbitrary constant; } \\
\qquad \int \frac{d x}{x}=\ln |x|+C \text {, where } C \text { stands for an arbitrary constant; } \\
\int \frac{d x}{\left(a^{2}+x^{2}\right)^{3 / 2}}=\frac{x}{a^{2} \sqrt{a^{2}+x^{2}}}+C \text {, where } a \text { - constant, } C \text { - arbitrary constant; }
\end{gathered}
$$

$$
\begin{aligned}
& (1+x)^{\gamma} \approx 1+\gamma x+\frac{\gamma(\gamma-1)}{2} x^{2}, \text { for }|x| \ll 1 \text { and any value of } \gamma ; \\
& \qquad \tan x \approx \sin x \approx x, \text { for }|x| \ll 1 ; \\
& \ln (1+x) \approx x, \text { for }|x| \ll 1 .
\end{aligned}
$$

## List of physical constants

Speed of light in vacuum $c=3.00 \cdot 10^{8} \mathrm{~m} / \mathrm{s}$;
Reduced Planck constant $\hbar=1.05 \cdot 10^{-34} \mathrm{~J} \cdot \mathrm{~s}$;
Magnetic constant $\mu_{0}=4 \pi \cdot 10^{-7} \mathrm{H} \cdot \mathrm{m}$;
Electric constant $\varepsilon_{0}=8.85 \cdot 10^{-12} \mathrm{~F} / \mathrm{m}$;
Stefan-Boltzmann constant $\sigma=5.67 \cdot 10^{-8} W /\left(m^{2} \cdot K^{4}\right)$;
Elementary charge $e=1.60 \cdot 10^{-19} \mathrm{C}$;
Electron mass $m_{e}=9.11 \cdot 10^{-31} \mathrm{~kg}$.
