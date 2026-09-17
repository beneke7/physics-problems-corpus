---
id: physicscup-2022-p5
problem: physicscup-2022-p5
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Vlad-Ștefan Oros
solution_source_url: https://physicscup.ee/wp-content/uploads/2022/P5solutions/Oros5.pdf
selection_note: "Selected as the cleanest of the published solutions: LaTeX-compiled, only 3 pp, and the most transparent of the candidates — it frames the satellite as a two-temperature Carnot engine and reduces the optimization to a single dimensionless variable. No figures, so fully machine-readable. (Competition published no official solution; chosen over the 1-page entries for completeness of the argument while remaining short.)"
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Vlad-Ștefan Oros (Romania), transcribed faithfully from the LaTeX source. The competition published no official solution. Notation: $\dot Q_1,\dot Q_2$ are net heat-input rates of the two faces, $\varepsilon_1,\varepsilon_2$ their emissivities, $T_1,T_2$ their temperatures, $\sigma$ the Stefan–Boltzmann constant.*

### Introductory remarks

Consider first the side of the satellite facing the Sun. This face may be coloured inhomogeneously; at any rate, the overall heat absorbed by the face depends only on the mean emissivity of the face, call it $\varepsilon_1$. The quantity of heat absorbed by this face per unit time is then $\varepsilon_1 AS$. To make the power absorbed maximal it would be favourable to make $\varepsilon_1$ as large as possible — fully black ($\varepsilon_1=1$) — but since it isn't obvious that this leads to maximum useful power output, we assume $\varepsilon_1$ can take any value between $0$ and $1$, and only assume the colouring is homogeneous. If the temperature of this face is $T_1$, the heat radiated per unit time is $\varepsilon_1 A\sigma T_1^4$, so the overall heat input into the satellite from this face is

$$ \dot Q_1 = \varepsilon_1 A\,(S - \sigma T_1^4). \tag{1} $$

Similarly, let the mean emissivity of the side not facing the Sun be $\varepsilon_2$ and its temperature $T_2$. Then the heat lost on this side (in absolute value) is

$$ \dot Q_2 = \varepsilon_2 A\sigma T_2^4. \tag{2} $$

We can consider the system formed — two objects, one at temperature $T_1$, one at $T_2$, exchanging heat with the surroundings and with each other — as a heat engine, with the useful work that is extracted converted into electrical energy.[^1] This quantity of useful work that can be extracted per unit time is precisely the charging power, and is, due to energy conservation, equal to

$$ P = \dot Q_1 - \dot Q_2. \tag{3} $$

The best possible efficiency of work production is obtained if we use a Carnot heat engine. For such a device we will have

$$ \frac{\dot Q_1}{T_1} = \frac{\dot Q_2}{T_2}. \tag{4} $$

Hence we have to maximize $P$ under the conditions stated above. But first, let us obtain a simpler expression for it.

[^1]: In the best case scenario — which is the one we will assume to happen in this problem — this transformation can be done with an efficiency of 100%.

### Obtaining an expression for the power $P$

Firstly, express $T_2$ in terms of $T_1$ using Eq. (4):

$$ \frac{\varepsilon_1 A(S-\sigma T_1^4)}{T_1} = \frac{\varepsilon_2 A\sigma T_2^4}{T_2} \implies T_2^3 = \frac{\varepsilon_1}{\varepsilon_2}\left(\frac{S}{\sigma T_1} - T_1^3\right). \tag{5} $$

Using this, we can express $\dot Q_2$ as

$$ \dot Q_2 = \frac{\varepsilon_1^{\frac43}}{\varepsilon_2^{\frac13}}\,A\sigma\left(\frac{S}{\sigma T_1} - T_1^3\right)^{\frac43}, \tag{6} $$

so that, using Eq. (3),

$$ P = \varepsilon_1 A(S-\sigma T_1^4) - \frac{\varepsilon_1^{\frac43}}{\varepsilon_2^{\frac13}}\,A\sigma\left(\frac{S}{\sigma T_1} - T_1^3\right)^{\frac43}. \tag{7} $$

We see that, assuming known values of $\varepsilon_1$ and $\varepsilon_2$ (along with the other, fixed, parameters), the power is a function of $T_1$. Hence let us define $x$ through

$$ x = \frac{\sigma T_1^4}{S}. \tag{8} $$

If $x$ were greater than $1$, then the face facing the Sun would actually have a net *loss* of heat, which means, according to energy conservation, that either the cold face should absorb heat (impossible due to the second law of thermodynamics), or we should introduce work into the system (which is not what we want), or both. Hence $0 < x \le 1$, and using $x$ the above expression can be rewritten as

$$ \frac{P}{AS} = \varepsilon_1(1-x) - \frac{\varepsilon_1^{\frac43}}{\varepsilon_2^{\frac13}}\,\frac{(1-x)^{\frac43}}{x^{\frac13}}. \tag{9} $$

Now, we will maximize $P$.

### Maximizing $P$

Firstly, since $0 < x \le 1$, we see that the second term above — which is subtracted — is always positive; hence to maximize $P$ we should minimize it. And, as we see that $\varepsilon_2$ appears only in the denominator of this term, it is clear that it would be best to maximize it. Hence

$$ \boxed{\varepsilon_2 = 1}. $$

Now, the expression for $P$ becomes

$$ \frac{P}{AS} = \varepsilon_1(1-x) - \varepsilon_1^{\frac43}\frac{(1-x)^{\frac43}}{x^{\frac13}}. \tag{10} $$

Denoting $y = \varepsilon_1(1-x)$, we can rewrite this as

$$ \frac{P}{AS} = y - \frac{y^{\frac43}}{x^{\frac13}}. \tag{11} $$

We see that for a given value of $y$, $P$ is maximal if $x$ is maximal. And this means that $1-x$ is minimal, and hence, as $y=\varepsilon_1(1-x)$ is fixed, that $\varepsilon_1$ is maximal. Hence, to maximize $P$, we require that

$$ \boxed{\varepsilon_1 = 1}. $$

Further, $P$ can be written as

$$ \frac{P}{AS} = 1 - x - \frac{(1-x)^{\frac43}}{x^{\frac13}} = (1-x)\left(1-\left(\frac1x - 1\right)^{\frac13}\right). \tag{12} $$

The derivative of this with respect to $x$ must be $0$ — hence

$$ (1-x)\frac{1}{3(1-x)^{\frac23}x^{\frac13}} - \left(1-\left(\frac1x-1\right)^{\frac13}\right) = 0 \implies (1-x)^{\frac13}\left(\frac{1}{3x^{\frac43}} + \frac{1}{x^{\frac13}}\right) = 1. \tag{13} $$

Equation (13) must be solved numerically; its solution is

$$ \boxed{x = 0.7506941}. $$

For this value of $x$, we find that

$$ \frac{P}{AS} = 0.07666021, \tag{14} $$

so that, in the end, the maximum power that can be attained is

$$ \boxed{\,P_{\max} = 0.07666021\,AS.\,} $$

---
*Re-derivation check (consistent): with $\varepsilon_1=\varepsilon_2=1$ the optimization condition (13), $(1-x)^{1/3}\!\left(\tfrac{1}{3x^{4/3}}+\tfrac{1}{x^{1/3}}\right)=1$, was solved by bisection, giving $x=0.7506946$ (author's $0.7506941$). Substituting into $P/AS=(1-x)-(1-x)^{4/3}/x^{1/3}$ yields $P/AS=0.07666021$, reproducing the boxed answer to all quoted digits. The Carnot/two-temperature modelling and the $\varepsilon_1=\varepsilon_2=1$ argument are the author's.*
