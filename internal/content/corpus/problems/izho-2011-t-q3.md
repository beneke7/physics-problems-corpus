---
id: izho-2011-t-q3
source: izho
native_id: "Problem 3"
year: 2011
language: en
translated: false
topic: [quantum-physics, thermodynamics]
subtopic: [energy-levels, ideal-gas, kinetic-theory, statistical-distributions, specific-heat]
difficulty: null
difficulty_norm: 4
math_tools: [calculus, series-complex]
format: scaffolded
core_ideas: []
estimated_time_min: 35
points: "10 points"
has_solution: true
has_figure: false
figure_files: []
provenance_note: "IZhO 2011 Theory, p. 5-6"
verification_status: pending
solution_language: ru
techniques: [superposition, differential-element]
---

**Problem 3 (10 points)**
Thermodynamics of simple quantum ideal gas

In classical physics, the energy of the system varies continuously. In the physics of the microworld, most physical parameters are quantized, i.e., they can take a discrete set of values. Quantization of energy can result in actually observed macroscopic effects. In this problem, you are to consider the simplest model of a quantum ideal gas.

## Model

Let a gas consist of $N$ identical atoms of mass $m$, which are placed in a long cylindrical vessel of length $L$ and cross-section $S$. Atoms can only move along the axis of the vessel. The kinetic energy of atoms is quantized, i.e. it can take a discrete set of values determined by

$$
E_n = n\varepsilon, \tag{1}
$$

where $n = 1, 2, 3\ldots$ and $\varepsilon$ is a known constant value. Assume that the kinetic energy of an atom is expressed by the formula of classical physics.

The vessel is brought into contact with the thermostat so that the gas temperature in the vessel is $T$. The value of kinetic energy of a single atom is changed due to contact with the thermostat. Assume that the atom number density is such low that collisions between atoms are rare and can be neglected.

At thermodynamic equilibrium the number of atoms, which occupy the level with the energy $E_n$, is determined by the Boltzmann distribution function of the form

$$
N_n = C\exp\left(-n\frac{\varepsilon}{k_B T}\right), \tag{2}
$$

where $k_B$ denotes the Boltzmann constant, $C$ is a normalization factor that you have to determine by yourself.

## Subproblems:

1 [1 point] Find the number of atoms $N_n$ that occupy the energy level $E_n$. Express your answer in terms of $N$, $\varepsilon$, $T$, and $k_B$.

2 [3 points] Find the expression for the internal energy $U$ of the gas. Express your answer in terms of $N$, $\varepsilon$, $T$, and $k_B$. Obtain approximate formulae for the internal energy of the gas in two limiting cases: $k_B T \gg \varepsilon$ (**high temperature limit or classical limit**) and $k_B T \ll \varepsilon$ (**low temperature limit**).

3 [3 points] Calculate the molar heat capacity of gas at constant volume. Express your answer in terms of $N$, $\varepsilon$, $T$, and $k_B$. Obtain approximate formulae for the molar heat capacity at constant volume both in the classical limit and the limit of low temperatures. Draw a schematic plot of the molar heat capacity dependence against the gas temperature.

4 [3 points] Find the pressure $P$ exerted by the gas on the vessel walls. Express your answer in terms of $N$, $\varepsilon$, $T$, and $k_B$. Obtain approximate formulae for the pressure both in the classical limit and the limit of low temperatures. Draw a schematic plot of the pressure dependence against the gas temperature.

*In solving these problems you can use the following formulae:*

$$
\begin{aligned}
& \sum_{n=1}^{\infty} x^n = \frac{x}{1-x}, \\
& \sum_{n=1}^{\infty} nx^n = \frac{x}{(1-x)^2}, \\
& \exp(x) \approx 1 + x, \quad x \ll 1, \\
& \frac{1}{1-x} \approx 1 + x, \quad |x| \ll 1.
\end{aligned}
$$
