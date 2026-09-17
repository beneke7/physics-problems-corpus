---
id: physicscup-2021-p5
problem: physicscup-2021-p5
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Nikita Semenin
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2021/P5/Nikita-Problem_5.pdf
selection_note: "Selected as the most machine-readable + elegant of the published solutions (LaTeX-compiled, 3 pp). Kalda's comment: a correct solution made at the first try and the only one submitted during the first week — a well written and solid solution (awarded 1/3 of the full bonus)."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2021-p5-sol-1.png]
---

## Solution
*Student solution by Nikita Semenin (MIPT), transcribed faithfully from the LaTeX source. The competition published no official solution. Notation: $E$ = main-frequency amplitude, $\mathcal E$ = double-frequency amplitude; subscript $1$ = first semicircle $A\!\to\!B\!\to\!C$, subscript $2$ = second semicircle $C\!\to\!\dots\!\to\!A$; a tilde marks amplitudes arriving at the coupling $C$ (see Figure 1).*

![Figure 1: the ring resonator. Main-frequency amplitudes E and double-frequency amplitudes 𝓔 at the couplings A (bottom) and C (top); input E₀ at O, outputs E and 𝓔 at D.](../../sources/physicscup/figures/physicscup-2021-p5-sol-1.png)

Work in the steady state, where the amplitude at each point is constant in time for both harmonics.

### Propagation around the ring

Travelling the semicircle from $A$ to $C$ generates double-frequency light, so
$$ \tilde{\mathcal E}_1 = \mathcal E_1 + \delta E_1^2. \tag{1} $$
The total optical energy of the two harmonics is conserved (fibre loss negligible). The intensity is $\propto nE^2$ with $n$ the refractive index, equal for both harmonics, so energy conservation reads
$$ E_1^2 + \mathcal E_1^2 = \tilde E_1^2 + \tilde{\mathcal E}_1^2, \tag{2} $$
whence, using (1),
$$ \tilde E_1 = E_1\sqrt{1 - 2\delta\mathcal E_1 - \delta^2 E_1^2} \approx E_1(1 - \delta\mathcal E_1). \tag{3} $$
At the coupling $C$ a fraction of energy crosses into the upper straight fibre; with no input there, the amplitudes are scaled by the coupling factors ($\sqrt{1-\alpha}$ for the main wave, $\sqrt{1-\alpha^2}$ for the double-frequency wave, assuming no coupling-induced phase shift):
$$ \tilde{\mathcal E}_2 = \sqrt{1-\alpha^2}\,\tilde{\mathcal E}_1 = \sqrt{1-\alpha^2}\left(\mathcal E_1 + \delta E_1^2\right); \tag{4} $$
$$ \tilde E_2 = \sqrt{1-\alpha}\,\tilde E_1 = \sqrt{1-\alpha}\,(1 - \delta\mathcal E_1)E_1. \tag{5} $$
Propagating the second semicircle back to $A$ (again generating double-frequency light, and depleting the main wave):
$$ \mathcal E_2 = \tilde{\mathcal E}_2 + \delta\tilde E_2^2 = \sqrt{1-\alpha^2}\left(\mathcal E_1 + \delta E_1^2\right) + (1-\alpha)(1-2\delta\mathcal E_1)\delta E_1^2; \tag{6} $$
$$ E_2 = \tilde E_2(1 - \delta\tilde{\mathcal E}_2) = \sqrt{1-\alpha}\,(1-\delta\mathcal E_1)\Big(1 - \delta\sqrt{1-\alpha^2}\left(\mathcal E_1 + \delta E_1^2\right)\Big)E_1. \tag{7} $$

### Self-consistency (steady state)

At $A$ the main wave has two coherent inputs (from the ring and from the bottom straight fibre); the long coherence length means amplitudes add:
$$ E_1 = \sqrt\alpha\,E_0 + \sqrt{1-\alpha}\,E_2. \tag{8} $$
No phase factor appears because the ring length is an integer number of wavelengths. Substituting (7),
$$ E_1 = \sqrt\alpha\,E_0 + (1-\alpha)(1-\delta\mathcal E_1)\Big(1 - \delta\sqrt{1-\alpha^2}\left(\mathcal E_1 + \delta E_1^2\right)\Big)E_1. \tag{9} $$
For the double-frequency wave (its ring-length phase is a multiple of $4\pi$, again no factor), the steady state requires
$$ \mathcal E_1 = \sqrt{1-\alpha^2}\,\mathcal E_2 = (1-\alpha^2)(\mathcal E_1 + \delta E_1^2) + \delta(1-\alpha)\sqrt{1-\alpha^2}(1-2\delta\mathcal E_1)E_1^2. \tag{10} $$
Solving (10) for $\mathcal E_1$,
$$ \mathcal E_1 = \frac{(1-\alpha^2) + (1-\alpha)\sqrt{1-\alpha^2}}{\alpha^2 + 2\delta^2(1-\alpha)\sqrt{1-\alpha^2}\,E_1^2}\,\delta E_1^2. \tag{11} $$
The output double-frequency amplitude is $\mathcal E = \sqrt{\alpha^2/(1-\alpha^2)}\,\mathcal E_1$ (the fraction coupled out at $C$), so
$$ \mathcal E = \frac{\alpha^2}{\sqrt{1-\alpha^2}}\cdot\frac{(1-\alpha^2)+(1-\alpha)\sqrt{1-\alpha^2}}{\alpha^2 + 2\delta^2(1-\alpha)\sqrt{1-\alpha^2}\,E_1^2}\,\frac{\delta E_1^2}{\alpha}. \tag{12} $$
Inverting for $E_1^2$,
$$ E_1^2 = \frac{\alpha^2\mathcal E}{\alpha\delta\left(\sqrt{1-\alpha^2}+1-\alpha\right) - 2\delta^2\mathcal E(1-\alpha)\sqrt{1-\alpha^2}}. \tag{13} $$

### Small-coupling limit $\alpha\ll1$

$$ E_1^2 \approx \frac{\alpha^2\mathcal E}{2\alpha\delta - 2\delta^2\mathcal E} = \frac{\alpha}{2\delta}\cdot\frac{\alpha\mathcal E}{\alpha - \delta\mathcal E}. \tag{14} $$
Since $\delta\mathcal E_1\ll1$ and $\mathcal E\approx\alpha E_1$ give $\delta\mathcal E\ll\alpha$, the denominator simplifies:
$$ E_1^2 \approx \frac{\alpha\mathcal E}{2\delta}. \tag{15} $$
From (11) with $\alpha\ll1$,
$$ \mathcal E_1 \approx \frac{2\delta E_1^2}{\alpha^2 + 2\delta^2 E_1^2} \approx \frac{2\delta E_1^2}{\alpha^2}, \tag{16} $$
so $\delta\mathcal E_1^2\ll E_1$ and (9) reduces to
$$ E_1 \approx \sqrt\alpha\,E_0 + (1-\alpha)\Big(1 - \frac{4\delta^2 E_1^2}{\alpha^2}\Big)E_1 \approx \sqrt\alpha\,E_0 + E_1 - \alpha E_1 - \frac{4\delta^2 E_1^3}{\alpha^2}, \tag{17} $$
i.e. the cubic
$$ \frac{4\delta^2}{\alpha^2}E_1^3 + \alpha E_1 - \sqrt\alpha\,E_0 = 0. \tag{18} $$
Using (15) to rewrite in terms of $\mathcal E$ and then substituting $x = \sqrt{\mathcal E}$,
$$ \frac{\sqrt{2\delta}}{\alpha}\,\mathcal E^{3/2} + \sqrt{\frac{\alpha}{2\delta}}\,\sqrt{\mathcal E} - E_0 = 0 \;\;\Longrightarrow\;\; \frac{\sqrt{2\delta}}{\alpha}x^3 + \frac{\alpha}{\sqrt{2\delta}}\,x - E_0 = 0. \tag{19,20} $$

### Extremizing over $\alpha$

$x(\alpha)$ is maximal where $x'(\alpha)=0$. Differentiating (20) with respect to $\alpha$ and setting $x'(\alpha_m)=0$,
$$ -\frac{\sqrt{2\delta}}{\alpha_m^2}x_m^3 + \frac{1}{\sqrt{2\delta}}x_m = 0 \;\;\Longrightarrow\;\; x_m = \frac{\alpha_m}{\sqrt{2\delta}}. \tag{21,22} $$
Substituting $x_m$ back into (20),
$$ \frac{\sqrt{2\delta}}{\alpha_m}\left(\frac{\alpha_m}{\sqrt{2\delta}}\right)^3 + \frac{\alpha_m}{\sqrt{2\delta}}\left(\frac{\alpha_m}{\sqrt{2\delta}}\right) - E_0 = \frac{\alpha_m^2}{2\delta} + \frac{\alpha_m^2}{2\delta} - E_0 = 0, \tag{23} $$
so $\alpha_m^2/\delta = E_0$ and therefore
$$ \boxed{\;\alpha_m = \sqrt{\delta E_0} = \sqrt{\delta\sqrt{I_0}}\;} \tag{24} $$
The optimal double-frequency intensity follows from $\mathcal E_m = x_m^2 = \alpha_m^2/(2\delta) = E_0/2$:
$$ \boxed{\;\mathcal I_m = x_m^4 = \mathcal E_m^2 = \frac{E_0^2}{4} = \frac{I_0}{4}.\;} \tag{25} $$

Finally, checking the assumption $\delta\mathcal E_1\ll1$ at the optimum:
$$ \delta\mathcal E_1 = \frac{\delta\mathcal E_m}{\alpha_m} = \frac{\sqrt{\delta E_0}}{2}, \tag{26} $$
so it (and hence $\alpha\ll1$) holds whenever $\sqrt{\delta E_0}\ll1$.

---
*Re-derivation check (consistent): the cubic-coefficient reduction holds — substituting $E_1^2=\alpha\mathcal E/2\delta$ into $(4\delta^2/\alpha^2)E_1^3$ gives $\sqrt{2\delta}\,\mathcal E^{3/2}/\alpha$ and dividing (18) by $\sqrt\alpha$ yields (20). The stationarity $x'=0$ gives $x_m=\alpha_m/\sqrt{2\delta}$; back-substitution sums two equal $\alpha_m^2/2\delta$ terms to $\alpha_m^2/\delta=E_0$, so $\alpha_m=\sqrt{\delta E_0}=(\delta^2 I_0)^{1/4}$ and $\mathcal E_m=E_0/2\Rightarrow\mathcal I_m=I_0/4$. The fibre-coupling energy bookkeeping is the author's.*
