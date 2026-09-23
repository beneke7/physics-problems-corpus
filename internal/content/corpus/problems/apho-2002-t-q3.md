---
id: apho-2002-t-q3
source: apho
native_id: "Theoretical Question 3 (wafer fabrication)"
year: 2002
language: en
translated: false
topic: [thermodynamics, optics]
subtopic: [kinetic-theory, ideal-gas, thin-films, interference, reflection]
difficulty: null
difficulty_norm: 5
difficulty_level: 4
math_tools: [calculus, probability-statistics]
format: scaffolded
core_ideas: []
estimated_time_min: 90
points: null
has_solution: true
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/apho/2002_T.mmd"
verification_status: pending
solution_language: en
techniques: [limiting-and-special-cases, differential-element]
---

## Theoretical Question 3 (wafer fabrication)

Wafer fabrication refers to the production of semiconductor chips from silicon. In modern technologies there are more than 20 processes; we are going to concentrate on thin films deposition.
In wafer fabrication process, thin films of various materials are deposited on the surface of the silicon wafer. The surface of the substrate must be extremely clean before the process of deposition. The presence of traces of oxygen or other elements will result in the formation of a contamination layer. The rate of formation of this layer is determined by the impingement rate of the gas molecules hitting the substrate surface. Assuming the number of molecules per unit volume is $n$, the impingement rate on a unit area of the substrate from the gas is given by

$$
J=\frac{1}{4} n \bar{v}
$$

where $\bar{v}$ is the average or mean speed of the gas molecules.

(a) Assuming that the gas molecules obey a Maxwell-Boltzmann distribution,
$$
W(v)=4 \pi\left(\frac{M}{2 \pi R T}\right)^{3 / 2} v^{2} e^{-M v^{2} /(2 R T)},
$$
where $W(v) d v$ is the fraction of molecules whose speed lie between $v$ and $v+d v$, $M$ is the molar mass of the gas, $T$ is the gas temperature and $R$ is the gas constant, show that the average or mean speed of the gas molecules is given by
$$
\bar{v}=\int_{0}^{\infty} v W(v) d v=\sqrt{\frac{8 R T}{\partial M}}
$$
[1.5 marks]
(b) Assuming that the gases behave as an ideal gas at low pressure, $P$, show that the rate of impingement is given by
$$
J=\frac{P}{\sqrt{2 \pi m k T}}
$$
where $m$ is the mass of the molecule and $T$ is the temperature of the gas.
[1.5 marks]
(c) If the residual pressure of oxygen in a vacuum system is 133 Pa, and by modelling the oxygen molecule as a sphere of radius approximately $3.6 \times 10^{-10} \mathrm{~m}$, estimate how long it takes to deposit a molecule-thick layer of oxygen on the wafer at $300^{\circ}$ Celsius, assuming that all the oxygen molecules which strike the silicon wafer surface are deposited. Assume also that oxygen molecules in the layer are arranged side by side.
[1.7 marks]

(d) In reality, not all molecules of oxygen react with the silicon. This can be modeled by the concept of activation energy where the reacting molecules should have total energy greater than the activation energy before it can react. Physically this activation energy describes the fact that chemical bonds between the silicon atoms have to be broken before a new bond between silicon and oxygen atoms is formed. Assuming an activation energy for the reaction to be 1 eV, estimate again how long it would take to deposit one atomic layer of oxygen at the above temperature. You may assume that the area under the Maxwell distribution in part (a) is unity.
0.0014
0.0012
0.001

W(v)
0.0008
0.0006
0.0004
0.0002

0
0
500
1000
1500
2000
2500
300(
Velocity, $v(\mathrm{~m} / \mathrm{s})$
[2.8 marks]
(e) For lithography processes, the clean silicon wafer is coated evenly with a layer of transparent polymer (photo-resist) of refractive index $\mu=1.40$. To measure the thickness of this photo-resist, the wafer is illuminated with collimated monochromatic beam of light of wavelength $\lambda=589 \mathrm{~nm}$. For a certain minimum thickness of photoresist, $\boldsymbol{d}$, there is a destructive interference of reflected light, assuming normal incidence on the coating. Derive an expression for relation between $d, \mu$ and $\lambda$. Calculate $d$ using the given data. In this point you may assume that silicon behaves as a medium with a refractive index greater than 1.40 and you may ignore multiple reflections.
[2.5 marks]
The following data may be helpful:
Molar mass of oxygen is $32 \mathrm{~g} \mathrm{~mol}^{-1}$.
Boltzmann constant, $k=1.38 \times 10^{-23} \mathrm{~J} \mathrm{~K}^{-1}$.
Avogadro number, $N_{A}=6.02 \times 10^{23} \mathrm{~mol}^{-1}$
Useful formula:

$$
\int x^{3} e^{-k x^{2}} d x=-\frac{1}{2} e^{-k x^{2}}\left(\frac{1}{k^{2}}+\frac{x^{2}}{k}\right)
$$

| Country : | Question no.: | For Examiners use only |
| :--- | :--- | :--- |
| Student no.: | Page no: Total pages: |  |

Write on this side of the paper only
