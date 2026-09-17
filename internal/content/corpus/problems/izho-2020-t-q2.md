---
id: izho-2020-t-q2
source: izho
native_id: "Problem 2. Phase states and phase transitions ( $\mathbf{1 0 . 0}$ points)"
year: 2020
language: en
translated: false
topic: [thermodynamics]
subtopic: [phase-transitions, latent-heat, ideal-gas, first-law, adiabatic-processes]
difficulty: null
difficulty_norm: 4
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 120
points: null
has_solution: true
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2020_T.mmd"
verification_status: pending
solution_language: ru
techniques: [differential-element, limiting-and-special-cases, conservation-laws]
---

## Problem 2. Phase states and phase transitions ( $\mathbf{1 0 . 0}$ points)

At a given pressure, the transition from one phase state of matter to another always occurs at a strictly defined temperature, and the transition itself is called a phase transition. For example, ice at atmospheric pressure melts at 0 °C, so that when the heat is supplied, the temperature of the mixture of ice and water remains unchanged until all the ice turns into water.

In all the subtasks proposed below, consider that the specific volume of the liquid phase is negligible compared to the specific volume of saturated vapor, which can be considered an ideal gas. Assume as well that the heat capacity of liquid water is independent of temperature.

Useful physical constants
Gas constant $R=8,31 \mathrm{~J} /(\mathrm{mol} \cdot \mathrm{K})$;
molar mass of air $\mu_{\text {air }}=29,0 \mathrm{~g} / \mathrm{mol}$;
acceleration of gravity $g=9,81 \mathrm{~m} / \mathrm{s}^{2}$.
Normal conditions:
pressure $P_{0}=1 \mathrm{~atm}=760 \mathrm{~mm} \mathrm{Hg}=101325 \mathrm{~Pa}$;
temperature $T_{0}=273,15 \mathrm{~K}=0^{\circ} \mathrm{C}$.
Properties of water ( $\mathrm{H}_{2} \mathrm{O}$ )
Molar mass of water $\mu_{w}=18,0 \mathrm{~g} / \mathrm{mol}$;
water density $\rho_{w}=1,00 \mathrm{~g} / \mathrm{sm}^{3}$;
ice density $\rho_{i}=0,920 \mathrm{~g} / \mathrm{sm}^{3}$;
melting point of ice at normal pressure $t_{m}=0,00^{\circ} \mathrm{C}$;
boiling point of water at normal pressure $t_{b}=100,0^{\circ} \mathrm{C}$;
specific heat of water $c_{w}=4,20 \mathrm{~J} /(g \cdot K)$;
specific heat of melting ice $q_{i}=334 \mathrm{~J} / g$;
specific heat of water vaporization (at $\left.100^{\circ} \mathrm{C}\right) r_{w}=2259 \mathrm{~J} / g$;
Poisson's adiabatic exponent for water vapor $\gamma=\mathrm{C}_{P} / \mathrm{C}_{V}=4 / 3$.

## Specific heat of phase transition

If a transition from one phase state to another is associated with the release or absorption of a certain amount of heat, called the transition heat, then such a transition is called the first-order phase transition. In this case, the transition heat $q$ for a unit mass is called the specific heat of the phase transition (melting, evaporation, sublimation).

Since the phase transition occurs at constant pressure, according to the first law of thermodynamics, the heat $q$ is spent on changing the internal energy $u$ and on performing the work $A$ against constant external pressure:

$$
q=u_{2}-u_{1}+A,
$$

where $u_{1}, u_{2}$ stand for the specific internal energies of the first and second phases, respectively.
During melting (crystallization), due to a small difference in the densities of the liquid and solid phases, the volume change as a result of the phase transition is small, therefore, the work $A$ can be neglected in comparison with the change in internal energy.
2.1 Evaluate how much of the evaporation heat of water at $t_{b}=100^{\circ} \mathrm{C}$ is spent on changing the internal energy. Express your answer in \%.
2.2 Evaluate the specific heat of water vaporization at room temperature $t=20,0^{\circ} \mathrm{C}$.

In the following, the specific heat of vaporization of all liquids is considered to be temperature independent.

## The Clausius-Clapeyron relation

When the pressure changes, the temperature of the first-order phase transition changes as well, i.e. the phase transition occurs at a strictly defined dependence $P(T)$ between the pressure $P$ and the temperature $T$ of the matter under investigation. This dependence, depicted on the ( $T, P$ )-plane, is called the $(T, P)$-phase diagram, and the $P(T)$ curve itself is called the phase equilibrium curve. The Clapeyron-Clausius relation gives the slope of the phase equilibrium curve $P(T)$ in the following form:

$$
\frac{d P}{d T}=\frac{q}{T\left(v_{2}-v_{1}\right)^{\prime}}
$$

where $q$ denotes the specific heat of transition from phase 1 with the specific volume $v_{1}$ to phase 2 with the specific volume $v_{2}$.
2.3 Assuming that the pressure of the saturated water vapor at the temperature $t_{b}=100^{\circ} \mathrm{C}$ is known, obtain an explicit dependence of the pressure of the saturated water vapor on its temperature $P(T)$.
2.4 Evaluate the boiling point of water at the highest peak in Kazakhstan - Khan-Tengri mountain. The height of the Khan-Tengri mountain peak is $h \approx 7000 m$ above the sea level. The altitude air temperature should be considered constant and equal to $t_{0}=0{ }^{\circ} \mathrm{C}$.
2.5 At what pressure (in atmospheres) the ice melts at the temperature of $t=-1,00^{\circ} \mathrm{C}$ ?
2.6 It is known that ice crystals begin to break down if a force is applied along any direction of the crystal to create a pressure $P>P_{c r} \sim 1000 \mathrm{~atm}$. Therefore, snow in frosty weather "crunches" when walking. Estimate the maximum air temperature $t_{\text {max }}$ at which the snow still "crunches" when walking. 2.7 One mole of the saturated water vapor occupies a vessel and has the temperature of $t_{b}=100{ }^{0} \mathrm{C}$. The vapor heats up and at the same time its volume changes such that it remains saturated at all times. Find the molar heat capacity of vapor in such a process.

## Border boiling

Border boiling is boiling at the interface between two immiscible liquids. The border boiling point may vary significantly from the volume boiling points of each liquid.

Tetrachloromethane or hydrogen tetrachloride is a heavy (density $\rho=1,60 g / s m^{3}$ ) transparent liquid with a molar mass $\mu=153,8 g / m o l$. Under normal atmospheric pressure, carbon tetrachloride boils at a temperature of $t=76,65^{\circ} \mathrm{C}$, while it practically does not dissolve in water. A vessel with a volume of $V=100 m l$ is half-filled with the carbon tetrachloride, and the same (by volume) amount of water is poured over it. In this case, a clear water-carbon tetrachloride border is formed. When the vessel is uniformly heated in a water bath, the border boiling at the liquid interface begins at the temperature of $t^{*}=66,0^{\circ} \mathrm{C}$, which is significantly lower than the volume boiling temperature of each liquid.
2.8 Calculate the specific heat of evaporation of carbon tetrachloride, if it is known that the pressure of the saturated water vapor at the border boiling point is $P_{w}\left(t^{*}\right)=196 m m H g$.
2.9 Find the mass of liquid remaining in the vessel by the time the other liquid is completely boiled away at such border boiling.

Consider another pair of immiscible liquids, water and fluoroketone.
Fluoroketone, sometimes called "dry water", is used to extinguish fires in libraries, museums, and offices because it does not wet paper. It is a heavy (density $\rho=1,72 g / s m^{3}$ ) transparent liquid with a molar mass $\mu=316 g / m o l$, which practically does not dissolve in water. The boiling point of fluoroketone at atmospheric pressure is $t_{f}=49,2^{\circ} \mathrm{C}$, its specific heat of vaporization is $r=95,0 \mathrm{~J} / g$. If water is poured over the fluoroketone into the vessel, a clear water-fluoroketone border is also formed.
2.10 Estimate the boiling point $t_{x}$ of liquids at the water-fluoroketone border if the saturated vapor pressure of water is known at the volume boiling point of fluoroketone to be $P_{w}\left(t_{f}\right)=89,0 m m \mathrm{Hg}$.
