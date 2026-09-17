---
id: nbpho-2013-friction-of-a-string
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2013-friction-of-a-string
solution_type: official
source_document: solution-document-nbpho-2013-s
source_pdf: cache/phoxiv/nbpho/2013_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2013_S.pdf."
---

## 5. FRICTION OF A STRING (8 points)

Let's first calculate the difference of tension force $T$ between two ends of a sliding string arced over a cylinder by an angle $\alpha$. Furthermore, let's look at a short piece of the arc that subtends an angle $d \alpha$. On one hand, $d T=\mu d R$ is the friction force acting on the piece, where $d R$ is the reaction force. On the other hand, $d R \approx T d \alpha$, because both ends of the piece are pulled by a force with a radial component of $T \frac{d \alpha}{2}$ (where $\alpha$ is measured in radians). Therefore, we get a differential equation: $d T=\mu T d \alpha$ or $d \ln T=\mu d \alpha$, whence $T=T_{0} e^{\mu \alpha}$.

As a solution to the problem, we can measure the change of the tension force for different angles $\alpha$ (for example, $\frac{\pi}{2}, \pi, \frac{3 \pi}{2}, 2 \pi, \frac{5 \pi}{2}$ etc. for several turns; however, keeping the strings vertical offers better precision) and plot $\ln T$ with respect to $\alpha$. The slope of the graph is the $\mu$ to be measured.

Extra solution (not as exact). Those who cannot derive the necessary formula can still do the experiment by doing the same measurements and noting from the plot that the relationship between $\alpha$ and $T$ looks exponential. Thus, we can make an ansatz that $T=T_{0} X^{\mu \alpha}$ : as $\alpha=0$ must correspond to $T=T_{0}$, we cannot reasonably write the $\mu$ anywhere else without over-complicating the formula. Now, we can re-measure the given pencil (it may be reasonably enough approximated with a cylinder here; more exact approaches exist) and conclude that $X \approx 2.7$. From there on, the calculation is the same.
