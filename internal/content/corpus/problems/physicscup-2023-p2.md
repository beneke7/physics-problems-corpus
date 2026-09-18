---
id: physicscup-2023-p2
source: physicscup
native_id: "2023 Problem 2"
name: "Physics Cup – TalTech 2023 – Problem 2"
origin: Physics-Cup-TalTech-2023
author: Jaan Kalda
year: 2023
language: en
translated: false
url: https://physicscup.ee/?page_id=3795
figure_files: []
topic: [thermodynamics, electromagnetism]
subtopic: [phase-transitions, joule-heating, thermal-stability]
math_tools: [calculus]
format: open-ended
difficulty_norm: 5
core_ideas: []
techniques: [stability-analysis, model-reduction]
has_solution: true
verification_status: unverified
---
By Jaan Kalda  (TalTech).

A thin long wire is made of a material that undergoes a phase transition so that its resistivity takes one of the two values, $\rho_1$ if its temperature is smaller than $T_c$, and $\rho_2=2\rho_1$ if the temperature is larger than $T_c$.

Assume the following:
(a) the heat flux per unit length of the wire to the ambient medium is $W=\alpha (T-T_0)$, where $\alpha$ is a constant, $T$ denotes the temperature of the wire, and $T_0$ is the ambient temperature ($T_0<T_c$);
(b) the wire is so thin that the thermal flux along the wire can be almost everywhere neglected, and the characteristic thermalization time is much shorter than the time during which the voltage is changed;
(c) while the coefficient $\alpha$ and cross-sectional area $A$ are almost constant along the wire, due to imperfections, there are tiny variations;
(d) the length of the wire $L\gg\sqrt A$.

The voltage $V$ applied to the ends of the wire is increased very slowly, at a constant rate (i.e. linearly in time), from zero until the whole wire has undergone a phase transition, and then reduced back to zero, at the same constant rate. Sketch how the total power $P$ dissipated in the wire depends on time $t$.

Your sketch should show power and voltage values at any point where either $P$ or its time derivative is discontinuous, expressed in terms of  $P_0=\alpha L(T_c-T_0)$ and  $V_0=L\sqrt{\alpha \rho_1(T_c-T_0)/A}$. The solution is considered to be correct only if all these points have correct values, and all segments of the graph are qualitatively correct (e.g. a convex curve should not be drawn as a straight line).
