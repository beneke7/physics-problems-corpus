---
id: nbpho-2013-magnetic-dipoles
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2013-magnetic-dipoles
solution_type: official
source_document: solution-document-nbpho-2013-s
source_pdf: cache/phoxiv/nbpho/2013_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2013_S.pdf."
---

## 4. MAGNETIC DIPOLES (7 points)

i) (3 points) There is no torque on the square if $\theta=0$ or $\theta=\pi$, so one of them is stable and the other unstable. If we start from $\theta=0$ and turn the square to some $\theta$, but keep two sides of the square perpendicular to $\vec{B}$, Lorentz forces on these two sides give a torque $\tau=-B I a \cdot a \sin \theta=-B m \sin \theta$ towards decreasing $\theta$. By symmetry, we get the same result if we keep the other keep two sides of the square perpendicular to $\vec{B}$. It is possible to conclude that the torque depends only on $\theta$ (at least near $\theta=0$ ), not on the exact orientation of the square. Since torque acts to restore $\theta=0$, we find that $\theta_{s}=0$ and $\theta_{u}=\pi$. To find the work to get from $\theta_{s}$ to $\theta_{u}$, we can again keep two sides perpendicular to $\vec{B}$ - the answer cannot depend on the path, so we choose the simplest one. Integrating $\tau=B m \sin \theta$ from $\theta=0$ to $\pi$ gives us $w=2 B m$.
ii) (4 points) Let us denote the number of electrons (per unit volume) with magnetic moment projection $+\mu_{B}$ as $n_{+}$and the ones with $-\mu_{B}$ as $n_{-}$. Their sum is always the same, $n_{+}+n_{-}=n$. Also, in thermal equilibrium, their ratio is given by $\frac{n_{-}}{n_{+}}=$ $\exp \left(-\frac{2 \mu_{B} B}{k_{B} T}\right)$, where $k_{B}$ is Boltzmann's constant. Solving the equations, we can find $n_{+}$and $n_{-}$. The total magnetic moment per unit volume (in the direction of $\vec{B}$ ) is given by $M=\mu_{B}\left(n_{+}-n_{-}\right)$. After substituting,

$$
M=\mu_{B} N \frac{1-\exp \left(\frac{2 \mu_{B} B}{k_{B} T}\right)}{1+\exp \left(\frac{2 \mu_{B} B}{k_{B} T}\right)}=\mu_{B} n \tanh \left(\frac{\mu_{B} B}{k_{B} T}\right) .
$$

Additional comments. We see $B$ and $M$ always have the same sign, therefore $\vec{M}$ is parallel with $\vec{B}$. This makes sense, as we saw that $\theta=0$ ( $\vec{m}$ parallel to $\vec{B}$ ) orientation had lowest energy. The graph of $M$ vs $B$ goes to $\mu_{B} n$ for very large $B$ or to $-\mu_{B} n$ for very small $B$ (all spins aligned with $\vec{B}$ ). At $B=0$, $M=0$ as well, since both spin orientations have the same energy. Around zero, the curve is linear, as $\tanh x \approx x$ for small $x$ gives us $M \approx \frac{\mu_{B}^{2} n B}{k_{B} T}$.
