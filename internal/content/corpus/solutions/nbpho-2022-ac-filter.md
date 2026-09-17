---
id: nbpho-2022-ac-filter
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2022-ac-filter
figure_files: [nbpho-2022-solution-p3.png]
provenance_note: "Official NBPhO 2022 solution, AC filter. Mathpix OCR of the cached solutions PDF (cache/phoxiv/nbpho/2022_S.mmd). Solution diagrams are preserved as local rendered source pages."
---

i) (2 points) The output voltage $V_{\text {out }}$ is the difference of the voltages on the capacitors. Hence, for $V_{\text {out }}$ to become infinite, one of the currents must become infinite. This is possible only if the impedance of the lower branch becomes zero:

$$
\frac{1}{\mathrm{i} \omega_{0} C_{0}}+\mathrm{i} \omega_{0} L=0,
$$

hence $\omega_{0}=1 / \sqrt{L C_{0}}$.
Grading: Concluding that the impedance of the lower branch must be zero: 0.8 pts; expressing this impedance: 1 pt; finding the final answer: 0.2 pts.
ii) (3 points) Let us draw a phasor for this circuit. As compared with $\omega=\omega_{0}$, the ratio of the impedances on the inductor and on a capacitor is increased four-fold. For the lower branch, these two impedances were equal previously, hence now the impedance of the inductor is four times bigger than the impedance of the capacitor; the same applies to the corresponding voltages: $V_{L}=4 V_{C 0}$. The two voltage vectors are antiparallel and must add up to the input voltage $V_{0}$, hence $V_{L}-V_{C 0}=$ $V_{0}$, hence $V_{C 0}=V_{0} / 3$ and $V_{L}=\frac{4}{3} V_{0}$. The voltage vectors on $C_{1}$ and $R$ are perpendicular to each other and must add up also to the input voltage $V_{0}$, hence these three voltage vectors form a right triangle. According to the Thales theorem, the right angle must lie on a circle, with the input voltage being a diameter of this circle. This is depicted in the figure below where the voltage vectors are color-couded as follows: output - black; capacitor $C_{1}$ - cyan; capacitor $C_{0}$ - blue; inductor - red; resistor - green. Radius of the circle is shown in purple.
![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p3.png)
From this figure, it becomes obvious that the phase shift $\varphi$ is maximal when
the output voltage vector is tangent to the circle, hence

$$
\varphi=\arcsin \frac{V_{0} / 2}{V_{L}-V_{0} / 2}=\arcsin\frac{3}{5},
$$

and

$$
V_{\mathrm{out}}=\frac{V_{0} / 2}{\tan \varphi}=\frac{2}{3} V_{0} .
$$

Alternatively, the problem can be solved using the standard impedance-based approach, but this will be mathematically significantly more technical.

Grading: Concluding that $V_{C 0}=V_{0} / 3$ and $V_{L}=\frac{4}{3} V_{0}: 0.5 \mathrm{pts}$; concluding that the potential of the upper output node draws a circle (applying the Thales theorem): 1 pt; noting that phase shift is maximal when the output voltage vector is tangent to the circle: 1 pt; finding the phase shift: 0.2 pts; finding $V_{\text {out }}: 0.3$ pts.
