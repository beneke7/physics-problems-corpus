---
id: cpho-f-2022-en-q6
source: cpho-f
native_id: "Ideal → Real - CPhO 2022"
year: 2022
language: en
translated: false
topic: [thermodynamics]
subtopic: [ideal-gas, processes, internal-energy, specific-heat, phase-transitions]
difficulty: null
difficulty_norm: 5
difficulty_level: 5
math_tools: [calculus]
format: open-ended
core_ideas: []
estimated_time_min: 75
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2022_EN.mmd"
verification_status: pending
---

## Ideal → Real - CPhO 2022

Consider an arbitrary nonrelativistic monatomic gas. If the sizes of gas molecules and their interaction could be neglected, we would come to the model of an ideal gas, but this model is not always applicable to describe real gases. An alternative is the model constructed by van der Waals, in which the equation of state for 1 mole of gas has the form:

$$
\left(P+\frac{a}{V^{2}}\right)(V-b)=R T,
$$

where $T, P$ and $V$ are the temperature, pressure and volume of the gas, respectively, $R$ is the universal gas constant, $a$ and $b$ are some positive values. It is easy to see that for any fixed $T$ in the limit $V \rightarrow+\infty$ this model goes over to the ideal gas model.

1. What is the physical meaning of the quantity $b$ ? Estimate it by considering gas molecules as solid balls of radius $r$. Avogadro's constant is equal to $N_{A}$.
2. Rewrite the equation for $N$ moles of gas. The molar volume of the gas $v$ should not be included in the answer.

It is known that the molar heat capacity of a gas at a constant volume $C_{V}$ satisfies the condition:

$$
\left(\frac{\partial C_{V}}{\partial v}\right)_{T}=\left(\frac{\partial^{2} P}{\partial T^{2}}\right)_{v},
$$

3. Show that $C_{V}=$ constant and find its value.
Attention! Do not substitute this result in subsequent calculations!

It is known that the molar internal energy $u$ of the Van der Waals gas is:

$$
u=C_{V} T-\frac{a}{v} .
$$

4. Get the expression for the molar entropy $s(T, v)$ of the Van der Waals gas. Write down the equation of the adiabatic process for the Van der Waals gas.
Note: Your response may contain undefined constants.

Let 1 mole of Van der Waals gas participate in the following Carnot cycle:

- Isothermal expansion at temperature $T_{1}$, volume increases from $V_{1}$ to $V_{2}$;
- Adiabatic cooling - the temperature drops from $T_{1}$ to $T_{2}$, the volume increases from $V_{2}$ to $V_{3}$;
- Isothermal contraction at $T_{2}$, volume decreases from $V_{3}$ to $V_{4}$;
- Adiabatic heating - the temperature rises from $T_{2}$ to $T_{1}$, the volume decreases from $V_{4}$ to $V_{1}$.
5. Find the heat supplied to the gas $\left(Q_{1}\right)$ and removed from the gas $\left(Q_{2}\right)$. Find the cycle efficiency $\eta$ and represent it as a function of temperatures $T_{1}$ and $T_{2}$ only.

Finally, we define the isothermal compressibility factor as:

$$
\kappa_{T}=-\frac{1}{v}\left(\frac{\partial v}{\partial P}\right)_{T} .
$$

6. Get an expression for the isothermal compressibility factor $\kappa_{T}(T, v)$ of the Van der Waals gas in the limiting case $a \ll P v^{2}$. In what range can the values of $\kappa_{T}$ lie? What is the physical meaning of the result obtained?
