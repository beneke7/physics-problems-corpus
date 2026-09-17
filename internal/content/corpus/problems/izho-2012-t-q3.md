---
id: izho-2012-t-q3
source: izho
native_id: "Problem 3 <br> Nuclear droplet (10 points)"
year: 2012
language: en
translated: false
topic: [quantum-physics]
subtopic: [nuclear, mass-defect, fission-fusion, coulomb-force]
difficulty: null
difficulty_norm: 5
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 100
points: "10"
has_solution: true
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2012_T.mmd"
verification_status: pending
solution_language: ru
techniques: [extremization, limiting-and-special-cases, exploit-symmetry]
---

## Problem 3 <br> Nuclear droplet (10 points)

In this task, we consider the main characteristics and conditions for the stability of atomic nuclei. Let the atomic nucleus contains A nucleons (A is atomic weight of elements), namely, Z protons (Z is element's number in the table of chemical elements) and N=A-Z neutrons. The expression for the total energy of the nucleus can be written as
(1)
where M is the mass of nucleus, mp is the mass of the free proton, mn is the mass of the free neutron, c is the speed of light, and Ep is the potential energy of the nucleons in the nucleus.
The potential energy of nucleon-nucleon interaction can be described by the following semi-empirical formula by Weizsäcker
(2)
where MeV MeV MeV MeV.

Weizsacker semiempirical formula corresponds to one of the simplest model of the atomic nucleus, the so-called spherical liquid drop model, which rely on the analogy between the nucleus and drop an ordinary liquid. The mass and charge of the nucleus assumed to be uniformly distributed inside a sphere of some radius, and the nucleon fluid is characterized by some parameter sigma, which is an analogue of the surface tension of the liquid.

The formula for potential energy Ep takes into account the following contributions:

- surface energy, which takes into account the surface tension of nuclear matter in the liquid drop model;
- the energy of the Coulomb repulsion of the protons within the nucleus;
- the exchange interaction energy, reflecting the trend towards the stability of nuclei at N=Z;
- direct dependence on the number of nucleons A due to nuclear forces.

Also in the derivation of this semiempirical formula Weizsäcker used experimentally established the following dependence of the radius of the atomic nucleus of the number of nucleons
(3)
where R0 is a constant.
Based on all the above, give answers to the following questions:
3.1 [2 points] Find the electrostatic energy EC of a sphere of radius R, uniformly charged with total charge Q. Express answer in terms of charge Q, the dielectric constant epsilon0, and radius R of the ball.
3.2 [1 point] Find the numerical value of the coefficient R0 in the formula (3).
3.3 [1 point] Find the numerical value of the density rho_m of nuclear matter.
3.4 [1 point] Find the numerical value of the surface tension sigma of liquid nucleons.

Suppose now that the nucleus is broken into two parts with atomic weights kA and (1-k)A respectively, where $0<\mathrm{k}<1$. We can assume that the nuclear charge and the number of neutrons are distributed between the fragments as the atomic weight.
3.5 [2 points] Nuclear fission becomes energetically favorable under the condition Z2/A > f(k). Find an expression for the function f(k) and plot it schematically.
3.6 [0.5 points] Wit the accuracy up to two significant figures, find the limiting value (Z2/A)0 at which the spontaneous fission is theoretically possible.
Under the condition of § 3.5, the nucleus can stay for a long time. For example, the half-life of Uranium-235 nucleus is equal to 713 million years. Consequently, an instantaneous fission is prevented by some energy barrier, which disappears at some critical value. In fact, the nucleus will be broken when a significant deviation in its shape from spherical occurs.

For simplicity, we assume that a spherical nucleus undergoes such deformations under which the surface is the surface of a prolate ellipsoid of rotation, which in Cartesian coordinates by the equation
where a is small, and b is big semi-axes of the ellipsoid, respectively.
The volume of a prolate spheroid is given by
and its surface area can be calculated by the formula
Let a spherical nucleus undergoes such a deformation that $\mathrm{b}=\mathrm{R}(1+$ epsilon $)$ and $\mathrm{a}=\mathrm{R}(1-$ lambda $)$, so that epsilon, lambda $\ll 1$, and R is initial radius of the nuclear droplet.
3.7 [0.5 points] Find the relation between epsilon and lambda.
Calculations show that the energy of the electrostatic interaction of protons of the deformed nucleus is about Ecdeformed = .
3.8 [2 points] Find the expression and the numerical value of (Z2/A)_critical.

Known physical constants:
Elementary charge
The dielectric constant
The mass of the nucleon (proton or neutron) k 1eV in J

In addressing these tasks, you can use the formulas:
