---
id: usatst-2021-q3
source: usatst
native_id: "Question 3"
year: 2021
language: en
translated: false
topic: [electromagnetism, quantum-physics]
subtopic: [hall-effect, magnetic-field, current, induction]
difficulty: null
difficulty_norm: 5
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 90
points: null
has_solution: false
has_figure: true
figure_files: [usatst-2021-q3-fig01.png, usatst-2021-q3-fig02.png, usatst-2021-q3-fig03.png, usatst-2021-q3-fig04.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/usatst/2021_T.mmd; figures require local harvest"
verification_status: pending
---

Question 3
Great Hall
The classical Hall effect was first measured by Edwin Hall in 1879, shortly after the publication of Maxwell's equations. In all parts of this problem, materials contain $n_{V}$ electrons per unit volume, and each electron has charge $q_{e}<0$ and mass $m_{e}$. You may use these quantities in all of your answers. We will begin by investigating the implications of the classical Hall effect.

1. An infinite plate in the $x y$ plane, with thickness $d$ in the $z$ direction, is placed in a uniform magnetic field $\mathbf{B}=B \hat{z}$ as shown. An electric field $\mathbf{E}=E \hat{x}$ is applied in the plane of the plate and the system is allowed to reach a steady state.
![](usatst-2021-q3-fig01.png)
    (a) If the electrons have velocity $\mathbf{v}$ at steady state, what is the current density $\mathbf{J}$ ? Recall that $\mathbf{J}$ is defined as the total flow of charge through a unit cross-section area per unit time.
    (b) In the Drude model, electrons are subject to both the Lorentz force and a damping force $-\gamma \mathbf{v}$, where $\gamma$ is a constant that depends on the material. In the above system, what is the current density in the steady state? Give both the magnitude and direction of J, e.g. in polar coordinates.
    (c) Compute the electrical resistivity,
$$
\rho_{0}=\lim _{B \rightarrow 0} \frac{E}{\left|J_{x}\right|}
$$
and the transverse Hall resistivity
$$
\rho_{H}=\lim _{\gamma \rightarrow 0} \frac{E}{\left|J_{y}\right|} .
$$
(d) A Hall effect sensor detects the strength of magnetic fields. Consider the following circuit consisting of a square plate of side length $L$ and thickness $d$ in a perpendicular uniform magnetic field $B$.
![](usatst-2021-q3-fig02.png)

A longitudinal $\operatorname{emf} \mathcal{E}$ is applied to the plate. At steady state, a Hall voltage $V_{H}$ is measured across the plate due to the buildup of charge on either side of the plate. If the electrical resistivity of the plate at zero magnetic field is $\rho_{0}$, what is the Hall voltage $V_{H}$ and the current $I$ through the plate? Express your answer in terms of $\rho_{0}, \mathcal{E}, B$, and the dimensions of the plate.

Experiments in the 20th century revealed that in many materials, the Hall resistivity could only take certain discrete values. We will now show how this follows from Bohr quantization. (These next parts are independent of the first part of the problem.)

2. A zero-resistance loop of wire of radius $R$ and cross-sectional area $A_{w}$ carries a counterclockwise current $I$. A solenoid through the middle of the loops carries magnetic flux $\Phi$ out of the page, which we define to be the positive $\hat{z}$ direction.
![](usatst-2021-q3-fig03.png)
    (a) If the electrons all have the same speed, what is the angular momentum of each electron?
    (b) If we allow the flux in the solenoid to change, the usual, "mechanical" angular momentum $L$ of each electron is not conserved. Instead, a quantity called the canonical angular momentum, $L_{\text {can }}=L+C q_{e} \Phi$, for some constant $C$, is conserved. Find $C$.
    (c) The Bohr quantization condition says that for a closed circular orbit, an integer number of de Broglie wavelengths must fit in its circumference. The de Broglie wavelength is
$$
\lambda=\frac{h}{p_{\text {can }}},
$$
where $h$ is Planck's constant, and $p_{\text {can }}=L_{\text {can }} / R$ is the canonical momentum. For a given solenoid flux $\Phi$, what is the set of allowed mechanical angular momenta $L$ ?
    (d) What is the minimum possible change in the magnetic flux for which the same set of mechanical angular momenta is allowed? This is known as the flux quantum.
3. Now, consider an annulus held perpendicular to a fixed, uniform external magnetic field $B$, and suppose an additional, tunable magnetic flux $\Phi$ threads the center of the annulus, with both pointing out of the page. The annulus has a transverse Hall resistance $R_{H}$ (i.e., an EMF of $\mathcal{E}$ around the annulus generates a perpendicular current $\mathcal{E} / R_{H}$ via the Hall effect) and you may neglect its self-inductance.
![](usatst-2021-q3-fig04.png)

(a) Suppose $\Phi$ begins to increase slowly and steadily in time. After a short time, the electrons will begin flowing steadily from one side of the annulus to the other. Do the electrons move inward or outward? Justify your answer.
(b) If the threaded flux increases by $\Delta \Phi$, how many electrons pass from one edge of the annulus to the other? You may use $R_{H}$, among other variables, in your answer.
(c) As we showed in 2(d), if the magnetic flux changes by the flux quantum $\Phi_{q}$, the allowed orbits from Bohr quantization are unchanged. Quantum mechanics thus tells us that in conventional materials, if the magnetic flux changes by $\Phi_{q}$, an integer number $k$ of electrons must pass from one edge to another. What constraint does this place on the Hall resistance?

[^0]:    ${ }^{1}$ aka, A Broadband/Resonant Approach to Cosmic Axion Detection with an Amplifying B-field Ring Apparatus.
