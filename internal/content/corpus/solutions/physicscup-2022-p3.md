---
id: physicscup-2022-p3
problem: physicscup-2022-p3
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Isaac Wu
solution_source_url: https://physicscup.ee/wp-content/uploads/2022/P3solutions/Isaac.pdf
selection_note: "Selected as the most compact and elegant of the published solutions (LaTeX-compiled, 3 pp, the relativistic-invariant approach). Awarded 60% of the bonus, with Kalda's comment: a well-written solution based on relativistic invariants."
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Isaac Wu, transcribed faithfully from the LaTeX source. The competition published no official solution. Relativistic units ($c=1$) are used throughout. Notation: $S$ is the intermediate frame (the rocket's rest frame just after the first acceleration phase) and $S'$ is the initial (lab) frame; $m_m=\eta m$ and $m_f=f m$ denote the intermediate and final rest masses of the rocket. There are no load-bearing figures.*

### Lemma 1 — single-photon acceleration

Consider an object of mass $m$ at rest in frame $S$, accelerated by emitting a single photon. The proper final mass is $\kappa m$ with $0<\kappa<1$. Then the final energy and momentum magnitude observed in $S$ are
$$ E = \frac{1}{2}m\left(1+\kappa^2\right), \qquad p = \frac{1}{2}m\left(1-\kappa^2\right). \tag{1} $$

*Proof.* Let $P_i$, $P_f$ and $P_p$ be the 4-momenta of the initial object, final object and photon respectively. In frame $S$ they take the form
$$ P_i = (m,0,0,0), \qquad P_f = (E,p,0,0), \qquad P_p = (p,p,0,0). $$
By conservation of 4-momentum,
$$ P_p = P_i - P_f $$
$$ P_p^2 = P_i^2 - 2P_i\cdot P_f + P_f^2 $$
$$ 0 = m^2 - 2mE + (\kappa m)^2 $$
$$ E = \frac{1}{2}m\left(1+\kappa^2\right), $$
where we used that light-like vectors have length zero. Using the mass-shell relation,
$$ p^2 = E^2 - (\kappa m)^2 = \frac{1}{4}m^2\left(1+2\kappa^2+\kappa^4\right) - m^2\kappa^2 $$
$$ p = \frac{1}{2}m\left(1-\kappa^2\right), $$
which concludes the proof. $\qquad\blacksquare$

### Corollary 2 — series of collinear photons

The same formulas apply if the object is accelerated via the emission of a series of photons in the same direction. Since the emitted photons are collinear, their 4-momenta are linearly dependent (being light-like), so their vector sum is also light-like and the above proof carries over.

The implication is that the final momentum of the rocket only depends on the mass lost during the two phases of acceleration; the specific thrust profile is of no physical significance, and the total acceleration during each phase might as well be due to a single photon.

### Working in the intermediate frame $S$

We now perform the analysis in the intermediate frame $S$, the frame of the rocket just after the first acceleration phase. With $m_m=\eta m$ and $m_f=fm$ the intermediate and final masses, equation (1) gives the final energy and momentum of the rocket as
$$ E_f = \frac{m_m}{2}\left[1+(m_f/m_m)^2\right] = \frac{m}{2}\left(\eta + f^2/\eta\right) $$
$$ p_f = \frac{m_m}{2}\left[1-(m_f/m_m)^2\right] = \frac{m}{2}\left(\eta - f^2/\eta\right) \tag{2} $$

To derive the initial energy and momentum of the rocket observed from $S$, we first compute the corresponding intermediate quantities observed from the initial frame $S'$,
$$ E_m' = \gamma m_m = \gamma\eta m = \frac{m}{2}\left(1+\eta^2\right) $$
$$ p_m' = \gamma m_m v = \gamma\eta m v = \frac{m}{2}\left(1-\eta^2\right) \tag{3} $$
from which we observe that dividing by $\eta$ yields the correct quantities,
$$ E_i = \gamma m = \frac{E_m'}{\eta} = \frac{m}{2}\left(1/\eta + \eta\right) $$
$$ p_i = -\gamma m v = -\frac{p_m'}{\eta} = \frac{m}{2}\left(1/\eta - \eta\right) \tag{4} $$
Note that we have used that the Lorentz factor $\gamma$ is the same for a boost and its inverse, as well as that the relative velocity takes on a minus sign when switching between frames.

### The invariant $P_i\cdot P_f$

We now make use of the invariant nature of 4-vector dot products: we evaluate $P_i\cdot P_f$ in both frame $S$ and $S'$. Firstly in $S$,
$$ P_i\cdot P_f = (E_i,-p_i,0,0)\cdot(E_f,p_f\cos\alpha,p_f\sin\alpha,0) = E_iE_f + p_ip_f\cos\alpha $$
$$ = \frac{m^2}{4}\left[\left(\frac{1}{\eta}+\eta\right)\left(\eta+\frac{f^2}{\eta}\right) + \left(\frac{1}{\eta}-\eta\right)\left(\eta-\frac{f^2}{\eta}\right)\cos\alpha\right] $$
$$ = \frac{m^2}{4}\left[\left(1+\eta^2+f^2+\frac{f^2}{\eta^2}\right) + \left(1-\eta^2+f^2-\frac{f^2}{\eta^2}\right)\cos\alpha\right] \tag{5} $$

Next in frame $S'$, observe that $P_i=(m,0,0,0)$. Thus the dot product only depends on the temporal component of $P_f$, which is the final energy of the rocket,
$$ E_f' = \gamma m_f = \gamma f m $$
$$ P_i\cdot P_f = mE_f' = \gamma f m^2 \tag{6} $$
where $\gamma$ can be calculated directly from the final speed of the rocket provided in the question,
$$ \gamma = \left(1-v^2\right)^{-1/2} = (1-16/25)^{-1/2} = (9/25)^{-1/2} = 5/3. $$

### Solving for $\alpha$ and minimizing

Finally equating equations (5) and (6), we can solve for $\cos\alpha$,
$$ 4\gamma f = \left(1+\eta^2+f^2+\frac{f^2}{\eta^2}\right) + \left(1-\eta^2+f^2-\frac{f^2}{\eta^2}\right)\cos\alpha \tag{7} $$
$$ \cos\alpha = \frac{4\gamma f - 1 - \eta^2 - f^2 - f^2/\eta^2}{1-\eta^2+f^2-f^2/\eta^2} = 1 + \frac{4\gamma f - 2f^2 - 2}{1-\eta^2+f^2-f^2/\eta^2} \tag{8} $$
which we need to maximize in $\eta$. Close observation of equation (8) reveals that this is equivalent to minimizing $\eta^2+f^2/\eta^2$ (in the denominator), which is a straightforward calculus exercise.
$$ 0 = \frac{d}{d\eta}\left(\eta^2+f^2/\eta^2\right) = 2\eta - 2f^2/\eta^3 $$
$$ \eta = \sqrt{f} $$

Substituting into equation (8) we obtain
$$ \cos\alpha = 1 + \frac{4\gamma f - 2f^2 - 2}{1-2f+f^2} = 1 + \frac{5/3 - 1/8 - 2}{1-1/2+1/16} = \frac{5}{27} \tag{9} $$
where we have used the calculated result for $\gamma$ and $f=1/4$ as provided in the question. Thus the final answer is
$$ \boxed{\;\alpha_{\min} = \arccos\left(5/27\right).\;} \tag{10} $$

---
*Re-derivation check (consistent): the extremum $\eta=\sqrt f$ makes $\eta^2+f^2/\eta^2=2f$, so the denominator of (8) becomes $1-2f+f^2=(1-f)^2$. With $f=1/4$ and $\gamma=5/3$: numerator $4\gamma f-2f^2-2=5/3-1/8-2=-11/24$; denominator $(1-1/4)^2=9/16$; thus $\cos\alpha=1+(-11/24)/(9/16)=1-22/27=5/27$, reproducing the author's boxed $\alpha_{\min}=\arccos(5/27)\approx79.3^\circ$. The relativistic-invariant setup and the claim that the optimum lies at $\eta=\sqrt f$ are the author's.*
