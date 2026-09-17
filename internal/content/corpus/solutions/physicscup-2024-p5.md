---
id: physicscup-2024-p5
problem: physicscup-2024-p5
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Lukas Schicht
solution_source_url: https://physicscup.ee/wp-content/uploads/2024/PC5-best/Lukas.pdf
selection_note: "Selected as the top-ranked, LaTeX-compiled best-solution candidate (3 pp), the only one that carries the full quasi-stationary radial-heating model end to end with an explicit closed-form waiting time. Compact and clean; no official solution was published."
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Lukas Schicht, transcribed faithfully from the LaTeX source. The competition published no official solution. Notation: $\dot Q$ denotes a heat rate (power), $l$ the position along the pipe, $\tilde r$ the radial coordinate in the soil, $T_w$ the water temperature, $T_s$ the soil temperature, $K$ an order-unity constant, and $T_{1/2}\equiv\tfrac{T_1+T_0}{2}$.*

Let us call the waiting time $\tau$ and let us define $T_{1/2}=\frac{T_1+T_0}{2}$. Our aim is to find the temperature of the water $T_w(l,t)$ as a function of the position in the pipe and time. We can then solve $T_w(L,\tau)=T_{1/2}$ for $\tau$.

The temperature gradient of the water in the pipe determines how much heat is transferred to the soil at a particular point $l$ per length and time:
$$ \frac{d\dot Q}{dl}(l,t) = -c_w\rho_w\pi r^2 v\cdot\frac{\partial T_w}{\partial l}(l,t). \tag{1} $$
Here, $\pi r^2 v$ is the volume of water flowing through the cross-section of the pipe per unit time. This heat propagates through the soil, determined by the temperature gradient field. There are two transport processes taking place simultaneously; heat is transferred radially and along the pipe.

The water and the surrounding soil / the pipe wall are always in thermodynamic equilibrium, i.e. their temperatures are the same. This means that the heat flux along the pipe also has an influence on the temperature of the water. We therefore assume that at each point in time a quasi-stationary equilibrium is established. Then no heat is transported longitudinally (anymore), and the temperature distribution of the water in the pipe and of the soil in a region around the pipe does not change. Thus, given the resulting temperature distribution $T_w(l,t)$ of this equilibrium at time $t$, the heat that is released by the water according to Equation (1) is transported radially only and used to warm up the soil in the "next" region, thus enlarging the "first" one that surrounds the pipe and in which the temperature remains constant (at least for short times in this equilibrium state).

As the first hint suggests, the radius of the first region, call it $R$, grows diffusively, at the rate defined by the heat conductivity, specific heat, and density of the soil. Dimensional analysis yields that this rate is given by
$$ \frac{dR}{dt} = \frac{K\kappa}{c\rho}\cdot\frac{1}{R}, $$
where $K$ is a constant. The factor $R^{-1}$ appears because it makes sense to assume that the rate at which a volume of cold soil is heated up remains constant, i.e.
$$ 2\pi R\cdot\frac{dR}{dt}\cdot dl = \text{const}\cdot\frac{\kappa\, dl}{c\rho}. $$
In order to simplify the problem, it is assumed that the radius of this first region is the same everywhere along the pipe, depending only on time:
$$ R(t) = \sqrt{\frac{2K\kappa}{c\rho}\cdot t + r^2}. $$
Moreover, in the first region surrounding the pipe, the heat that flows through the area $2\pi\tilde r\, dl$ should be the same as the energy supplied by the water at each point $l$. Hence,
$$ \frac{d\dot Q}{dl} = -2\pi\tilde r\kappa\cdot\frac{\partial T_s}{\partial r}(\tilde r) $$
for all $\tilde r\in[r,R(t)]$ and at each position $l$ and time $t$. Here, $T_s$ denotes the temperature of the soil. Taking into account the boundary condition $T_s(r)=T_w$, solving this equation yields the following temperature distribution:
$$ T_s(\tilde r) = T_w - \frac{1}{2\pi\kappa}\cdot\frac{d\dot Q}{dl}\cdot\ln\frac{\tilde r}{r}. $$
We assume here that the heat released per unit length is so small that $T_s(R(t))>T_0$ everywhere along the pipe and at all relevant times $t<\tau$. Since the total power supplied by the water is not greater than $\dot Q = c_w\rho_w\pi r^2 v\cdot(T_1-T_0)$, this means that the pipe must be sufficiently long.

In order to enlarge the first region at the given rate, i.e. to heat the soil at radius $R(t)$ up to temperature $T_s(R(t))$, the following energy is needed per time and length $dl$:
$$ 2\pi R(t)\dot R(t)\cdot c\rho\cdot(T_s(R(t))-T_0) = 2\pi K\kappa\cdot(T_s(R(t))-T_0). $$
As this must be equal to $\frac{d\dot Q}{dl}$, we obtain the following equation:
$$ \frac{d\dot Q}{dl}(l,t) = 2\pi K\kappa\cdot\left(T_w(l,t) - \frac{1}{2\pi\kappa}\cdot\frac{d\dot Q}{dl}(l,t)\cdot\ln\left(\sqrt{\frac{2K\kappa}{c\rho r^2}\cdot t + 1}\right) - T_0\right) $$
$$ = 2\pi K\kappa\cdot(T_w(l,t)-T_0) - \frac{K}{2}\cdot\frac{d\dot Q}{dl}(l,t)\cdot\ln\left(\frac{2K\kappa}{c\rho r^2}\cdot t + 1\right). $$
Solving for $\frac{d\dot Q}{dl}$ and using Equation (1) gives the following relation:
$$ \frac{2\pi K\kappa\cdot(T_w(l,t)-T_0)}{1+\frac{K}{2}\cdot\ln\left(\frac{2K\kappa}{c\rho r^2}\cdot t + 1\right)} = -c_w\rho_w\pi r^2 v\cdot\frac{\partial T_w}{\partial l}(l,t). $$
Since $T_w(0,t)=T_1$, the solution of this equation is given by
$$ T_w(l,t) = T_0 + (T_1-T_0)\cdot\exp\left(-\frac{2K\kappa l}{c_w\rho_w r^2 v\cdot\left(1+\frac{K}{2}\cdot\ln\left(\frac{2K\kappa}{c\rho r^2}\cdot t + 1\right)\right)}\right). \tag{2} $$
Hence, the temperature of the water inside the pipe decreases exponentially with $l$ and the more time passes, the smaller this decrease is. Furthermore, according to this model, right after the water in the pipe starts flowing, the following temperature distribution arises:
$$ T_w(l,0) = T_0 + (T_1-T_0)\cdot\exp\left(-\frac{2K\kappa l}{c_w\rho_w r^2 v}\right). $$
This is consistent with the fact that the heat propagates much faster along the pipe than radially, as the first hint also states.

It may occur that the temperature is already greater than $T_{1/2}$ everywhere at the beginning, i.e. that $T_w(L,0)>T_{1/2}$. This is the case if
$$ \frac{2K\kappa L}{c_w\rho_w r^2 v} < \ln 2. $$
Then, $\tau=0$. Otherwise, using Equation (2), we obtain the following estimate for the waiting time:
$$ \boxed{\;\tau = \frac{c\rho r^2}{2K\kappa}\cdot\left[\exp\left(\frac{4\kappa L}{\ln 2\cdot c_w\rho_w r^2 v} - \frac{2}{K}\right) - 1\right].\;} $$

---
*Re-derivation check (consistent): imposing $T_w(L,\tau)=T_{1/2}$ in Eq. (2) requires the exponent to equal $\ln\tfrac12$, i.e. $\frac{2K\kappa L}{c_w\rho_w r^2 v\,[1+\frac{K}{2}\ln(\frac{2K\kappa}{c\rho r^2}\tau+1)]}=\ln 2$. Solving the bracket gives $1+\frac{K}{2}\ln(\cdots)=\frac{2K\kappa L}{\ln 2\,c_w\rho_w r^2 v}$, hence $\ln(\frac{2K\kappa}{c\rho r^2}\tau+1)=\frac{2}{K}\big(\frac{2K\kappa L}{\ln 2\,c_w\rho_w r^2 v}-1\big)=\frac{4\kappa L}{\ln 2\,c_w\rho_w r^2 v}-\frac{2}{K}$. Exponentiating and isolating $\tau$ reproduces the boxed result exactly. The quasi-stationary radial-heating model and the order-unity constant $K$ are the author's.*
