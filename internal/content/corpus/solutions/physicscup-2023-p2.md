---
id: physicscup-2023-p2
problem: physicscup-2023-p2
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Eyal Walach
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2023/PC2-best/Eyal_with_graph.pdf
selection_note: "Selected as the shortest and most elegant of the LaTeX-compiled published solutions (3 pp). Compact step-by-step derivation of the two-temperature state and a complete, fully-labeled P(t) graph (the deliverable). The top-ranked candidate (Passek-Kumericki) is 6 pp; this one captures the same result more concisely. Title page mislabels it 'Problem 1' but the physics is unambiguously Problem 2 (phase-transition wire, rho_2 = 2 rho_1)."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2023-p2-sol-1.png]
---

## Solution
*Student solution by Eyal Walach, transcribed faithfully from the LaTeX source. The competition published no official solution. The final P(t) graph is the author's hand drawing. The author's title page mislabels this as "Problem 1"; it is Problem 2. Notation: $R_1 = \rho_1 L/A$ is the full-wire low-temperature resistance, $r = \rho_1/A = R_1/L$, $T_l$ and $T_h$ are the low- and high-temperature values, $\ell$ is the length of the high-temperature ($\rho_2$) segment. One transcription flag is noted inline in §1.3.*

## 1 Step By Step

### 1.1 Two Temperatures

As there is almost no heat current through the wire, almost every wire infinitesimal is in thermal equilibrium with the environment. Because the current is constant through the sample, that means all the $\rho_2$ regimes have the same temperature — same $I$ and same resistivity mean same Joule heating — hence same temperature. Same is true for all $\rho_1$ regimes of course.

Note that these temperatures are **different** — parts with higher temperature have higher resistivity, hence more heat is dissipated in them. Following the Matthew effect: "For him who has will more be given, and he will have abundance; but from him who has not, even what he has will be taken away." (Matthew 13:12). The wire will have two temperatures, $T_h$ for $\rho_2$ and $T_l$ for $\rho_1$.

### 1.2 First Temperatures Condition

Suppose a steady state occurs where a segment of length $\ell$ is in the high temperature, and the rest $(L-\ell)$ is in the low temperature.

The overall resistance is
$$ \frac{\rho_2\ell}{A} + \frac{\rho_1(L-\ell)}{A} = \frac{\rho_1 L}{A} + \frac{\rho_1}{A}\ell \equiv R_1 + r\ell = R_1\!\left(1+\tfrac{\ell}{L}\right), $$
and the current is $\dfrac{V}{R_1+r\ell}$. We will use $R_1, r$ from now on.

A unit length $dL$ in phase 1 will experience voltage of
$$ dV = I\,\frac{\rho_1\,dL}{A} = \frac{V}{R_1\!\left(1+\frac{\ell}{L}\right)}\,\frac{R_1\,dL}{L} = V\,\frac{dL}{L+\ell}, $$
hence it omits heat of
$$ I\,dV = V\frac{dL}{L+\ell}\,\frac{V}{R\!\left(1+\frac{\ell}{L}\right)} = \frac{V^2}{R}\,\frac{L\,dL}{(L+\ell)^2}. $$
Was it in phase 2, the voltage was $I\dfrac{2\rho_1\,dL}{A} = 2V\dfrac{dL}{L+\ell}$. Heat would've been $\dfrac{2V^2 L\,dL}{R_1(L+\ell)^2}$. From this we directly see that
$$ T_h - T_0 = \frac{2V^2 L}{\alpha R_1(L+\ell)^2}\qquad\text{while}\qquad T_l - T_0 = \frac{V^2 L}{\alpha R_1(L+\ell)^2}. $$
We note that $(T_h - T_0) = 2(T_l - T_0)$.

### 1.3 Second Temperatures Condition

Look on a "marginal" piece of wire $dL$, the one that isn't sure whether it should be in $\rho_1$ or in $\rho_2$. Such infinitesimal piece must be in temperature $T_c$, with neighbors in both phases; hence, for the heat current to work and not accumulate, we get our second condition — $T_h - T_c = T_c - T_h$.

*(Transcription note: the author wrote this last relation literally as $T_h - T_c = T_c - T_h$. This is a typo for $T_h - T_c = T_c - T_l$ — the marginal point sits between a hot and a cold region, so its excess heat splits equally toward each neighbor. The rest of the derivation uses the correct relation $T_c = \tfrac12(T_h+T_l)$.)*

Combined with the previous condition, we can extract the temperatures — independently of $\ell$! We have
$$ T_l = T_0 + \tfrac23(T_c - T_0) = \tfrac23 T_c + \tfrac13 T_0 \qquad\text{and}\qquad T_h = T_0 + \tfrac43(T_c - T_0) = \tfrac43 T_c - \tfrac13 T_0. $$

### 1.4 Finding $\ell$

We now find the single allowed steady state. Note that larger $\ell$ leads to higher **outflux** (more hot part) and lower **influx** (higher resistance, lower heat emission), hence there is a single solution given $V$. We can actually just extract it from the expressions of $T_h$ and $T_l$ from the second section.
$$ \frac{V^2 L}{\alpha R_1(L+\ell)^2} = \tfrac23(T_c - T_0) $$
gives
$$ L+\ell = \sqrt{\frac{3}{2}\,\frac{L}{\alpha R_1(T_c - T_0)}}\;V. $$
We get $\ell$ that's linear in $V$! The minimal value is $V_{min} = \sqrt{\tfrac23\,\alpha R_1(T_c - T_0)}\;L$, and the maximal is $V_{max} = \sqrt{\tfrac83\,\alpha R_1(T_c - T_0)}\;L$.

## 2 Overall Result

There is one more complication to consider. The influx–outflux argument gives only one solution in which there is an equilibrium of two phases. Carefully heating can lead us to a "metastable" state of only $R_1$ all the way up to $T_c$. This will happen in voltage $V_0 \equiv \sqrt{\alpha R_1(T_c - T_0)}\,L$. The wire will heat in rate of $\dfrac{V_0^2}{R_1} = \alpha(T_c - T_0)L = P_0$, of course. Then we will "jump" to a state with finite $\ell$, hence with a qualitatively **lower** heat emission — $L+\ell = \sqrt{\tfrac32}\,L$, hence $\ell = \sqrt{\tfrac32}-1$ (in units of $L$). The emission is
$$ \alpha(T_l - T_0)(L-\ell) + \alpha(T_h - T_0)\ell = \left(1-\tfrac{\ell}{L}\right)\tfrac23 P_0 + \tfrac{\ell}{L}\tfrac43 P_0 = \tfrac23\!\left(1+\tfrac{\ell}{L}\right)P_0 = \sqrt{\tfrac23}\,P_0. $$
We will go all the way up to $V_{max}$, and then will find ourself in a state of a single, high temperature — now with $P = \tfrac43 P_0$.

**Cooling.** We will go down to $\sqrt2\,V_0$, heating in $\dfrac{2V_0^2}{R_2} = P_0$, and then experience another jump — $L+\ell = \sqrt3\,L$, hence we'll suddenly get $P = \dfrac{2}{\sqrt3}P_0$, as a large portion suddenly became more conducting. This will cool down all the way to the single low temperature with $\tfrac23 P_0$, and then of course to zero.

In the intermediate state we note that the heat emission is $\alpha(L+\ell)(T_l - T_0) = \tfrac23\!\left(1+\tfrac{\ell}{L}\right)P_0$. But as $L+\ell$ is linear in $V$, we get that $P$ is linear in $V$ as well —
$$ P = \tfrac23\,\frac{L+\ell}{L}\,P_0 = \sqrt{\tfrac23}\,\sqrt{\frac{1}{\alpha R_1 L(T_c - T_0)}}\,V\,P_0 = \sqrt{\tfrac23}\,\frac{V}{V_0}\,P_0. $$

A full description, therefore:

- Simple voltage raising — $P \propto V^2$ up to $V = V_0$ and $P = P_0$.
- A discrete jump to $P = \sqrt{\tfrac23}\,P_0$.
- A linear rise up to $P = \tfrac43 P_0$, $V = \sqrt{\tfrac83}\,V_0$.
- *[A possible quadratic rise further, but the cooling stops it.]*

Then, cooling back down:

- A quadratic decay, $P \propto V^2$, down to $T = T_c$ with $V = \sqrt2\,V_0$ and $P = P_0$.
- A discrete jump to $P = \dfrac{2}{\sqrt3}P_0$ at the same voltage.
- A linear decay down to $P = \tfrac23 P_0$ at $V = \sqrt{\tfrac23}\,V_0$.
- A quadratic decay down with $P \propto V^2$ to zero.

![Figure: power dissipated to the environment vs. time. Heating branch (left): a convex $P\propto V^2$ rise to $P_0$ at $V_0$, a discrete drop to $\sqrt{2/3}\,P_0$, then a linear rise to the peak $\tfrac43 P_0$ at $\sqrt{8/3}\,V_0$. Cooling branch (right): a convex $P\propto V^2$ decay to $P_0$ at $\sqrt2\,V_0$, a discrete jump up to $\tfrac{2}{\sqrt3}P_0$, a linear decay to $\tfrac23 P_0$ at $\sqrt{2/3}\,V_0$, then a convex $P\propto V^2$ decay to zero.](../../sources/physicscup/figures/physicscup-2023-p2-sol-1.png)

---
*Re-derivation check (consistent): Independent re-derivation reproduces every labeled value. Metastable single-$\rho_1$ branch: $P=V^2/R_1$, reaching $T_c$ when $V^2=\alpha R_1(T_c-T_0)L^2$, i.e. $V_0$, with $P_0=V_0^2/R_1=\alpha L(T_c-T_0)$. At $V_0$ the two-phase relation $L+\ell=\sqrt{3/2}\,(V/V_0)L$ gives $\ell=(\sqrt{3/2}-1)L$ and $P=\tfrac23(1+\ell/L)P_0=\tfrac23\sqrt{3/2}P_0=\sqrt{2/3}P_0\approx0.816P_0$ — the down-jump. The linear branch $P=\sqrt{2/3}\,(V/V_0)P_0$ hits $\ell=L$ at $V/V_0=\sqrt{8/3}$, where $P=\sqrt{2/3}\sqrt{8/3}P_0=\tfrac43 P_0$. Cooling single-$\rho_2$ branch ($R_2=2R_1$): $P=V^2/(2R_1)$ reaches $T_c$ at $V=\sqrt2 V_0$, $P=P_0$; the up-jump uses $L+\ell=\sqrt3 L$ giving $P=\tfrac23\sqrt3 P_0=\tfrac{2}{\sqrt3}P_0\approx1.155P_0$; the linear decay reaches $\ell=0$ at $V=\sqrt{2/3}V_0$, $P=\tfrac23 P_0$. All consistent. The one flagged item is the §1.3 condition printed as $T_h-T_c=T_c-T_h$ (should read $T_c-T_l$); the author nonetheless uses the correct $T_c=\tfrac12(T_h+T_l)$ downstream, so the result is unaffected.*
