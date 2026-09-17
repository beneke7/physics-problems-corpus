---
id: inpho-2008-a4
source: inpho
native_id: "4. Two identical walls, each of width $w(=0.01 \mathrm{~m})$, are separated by a distance $d(=0.1 \mathrm{~m})$ as shown in Fig. (3). Temperatures of the external face of the walls are fixed ( $T_{1}$ and $T_{2}, T_{2}>T_{1}$ ). Coefficient of thermal conductivity of wall is $k_{w}=0.72 \mathrm{~W}-\mathrm{m}^{-1}-\mathrm{K}^{-1}$. We define"
year: 2008
language: en
translated: false
topic: [thermodynamics]
subtopic: [heat-transfer, conduction, radiation, convection]
difficulty: null
difficulty_norm: 4
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 50
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/inpho/2008.mmd"
verification_status: pending
---

4. Two identical walls, each of width $w(=0.01 \mathrm{~m})$, are separated by a distance $d(=0.1 \mathrm{~m})$ as shown in Fig. (3). Temperatures of the external face of the walls are fixed ( $T_{1}$ and $T_{2}, T_{2}>T_{1}$ ). Coefficient of thermal conductivity of wall is $k_{w}=0.72 \mathrm{~W}-\mathrm{m}^{-1}-\mathrm{K}^{-1}$. We define

$$
T_{0}=\frac{T_{1}+T_{2}}{2}, \quad \Delta=T_{2}-T_{1} \text { and } \delta=T^{\prime \prime}-T^{\prime}
$$

where $T^{\prime}$ and $T^{\prime \prime}$ are the temperatures of the internal face of the walls 1 and 2 respectively. Then $\delta$ will depend on the type of heat transfer process in central region (of width $d$ ) between the walls i.e. on the conduction, radiation or convection heat transfer. Assume that the heat transfer is a steady state process.

(a) Write down the expression for heat transfer flux $q_{w}$ (watt-m ${ }^{-2}$ ) inside the wall 1 in terms of $k_{w}, T_{1}, T^{\prime}$, and $w$. Similarly also write the expression for wall 2.
(b) Rewrite $q_{w}$ in terms of $\Delta, \delta, k_{w}$, and $w$.

As mentioned above, in the central region between the walls, heat is transmitted by conduction, convection and radiation. Also due to the steady state process, the corresponding fluxes are equal to $q_{w}$. In what follows we will calculate the heat transfer fluxes between the walls due to these three processes each of these processes being considered separately.
Radiation process will take place without the presence of material medium in the central region between the walls. We assume that the central region between the walls is vacuum. Let $\epsilon$ be the emissivity of the walls and $E_{1}$ and $E_{2}$ be the total heat flux due to radiation from wall 1 to 2 and vice versa. Thus $E_{1}=\epsilon \sigma T^{\prime 4}+(1-\epsilon) E_{2}$ where $\sigma$ is Stefan constant. Similarly one may write the equation for $E_{2}$.

(c) The net heat transfer is $q_{r}=E_{2}-E_{1}$. Write the expression for $q_{r}$ in terms of $\epsilon, T^{\prime \prime}$, and $T^{\prime}$.

(d) Rewrite $q_{r}$ in terms of $\left\{k_{w}, \Delta, T_{0}, \sigma, \epsilon\right.$ and $\left.w\right\}$.
[ Hint: Eliminate $\delta$ using $\delta^{2} \ll T_{0}{ }^{2}$.]
(e) Calculate $q_{r}$ if $\epsilon=0.9$.

In the following two parts we are considering only convection betwen the walls.

(f) Now we assume that central region is filled with air of coefficient of thermal conductivity $k_{a}$. In this condition, convected heat transfer between walls will take place. Equation for flux due to this process is given by
$$
q_{c v}=\frac{N_{u} k_{a}}{d}\left(T^{\prime \prime}-T^{\prime}\right)
$$
where $N_{u}$ is called the Nusselt number and for the given system $N_{u}=6.4$.
Due to the steady state nature of the process $q_{w}=q_{c v}$. Express $q_{c v}$ in terms of $\left\{k_{w}, k_{a}, \Delta, w, d\right.$, and $\left.N_{u}\right\}$.
(g) Calculate the value of $q_{c v}$ if $k_{a}=0.026 \mathrm{~W}-\mathrm{m}^{-1}-\mathrm{K}^{-1}$.
(h) Instead of air, the central region is now filled with sheathing material having coefficient of thermal conductivity $k_{s}$. Hence heat transfer will take place by conduction between walls. Express heat transfer flux $q_{c d}$ in terms of $\left\{k_{s}, k_{w}, d, w\right.$, and $\left.\Delta\right\}$. We assume that no radiation passes through sheathing material.
(i) Taking $k_{s}=0.05 \mathrm{~W}-\mathrm{m}^{-1}-\mathrm{K}^{-1}$, calculate the value of $q_{c d}$.
(j) Considering all possible heat transfer process in the central region between the walls, which insulation (sheathing, air, or vaccum) is the most efficient?
$$
[1+1+1+3+2+1.5+1.5+2.5+1.5+1=16]
$$
