---
id: usapho-1999-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-1999-b1
solution_type: official
source_document: solution-document-usapho-1999-s
source_pdf: cache/phoxiv/usapho/1999_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/1999_S.pdf."
---

B1.
![](https://cdn.mathpix.com/cropped/112d23ef-1068-4ef8-abd5-030c70654242-5.jpg?height=693&width=1355&top_left_y=758&top_left_x=457)

Bla. For $\theta=45^{\circ}$, both $\cos \theta=1 / \sqrt{2}$ and $\sin \theta=1 / \sqrt{2}$. The relation between the magnitude of the angular acceleration $\alpha$ and the magnitude of the linear acceleration $\mathbf{a}$ is $a=\alpha L / 2$ with $a_{x}=a_{y}=\alpha L /(2 \sqrt{2})$. Using $\mathrm{I} \alpha=\Sigma \tau$ for the rotation about the hinge at the lower end of the left rod

$$
\frac{M L^{2} \alpha}{3}=\frac{M g L}{2 \sqrt{2}}-\frac{V L}{\sqrt{2}}-\frac{H L}{\sqrt{2}}
$$

Applying Newton's second law to the right rod

$$
\begin{aligned}
& M a_{x}=\sum F_{x} \\
& M a_{y}=\sum F_{y}
\end{aligned}
$$

$$
\begin{gathered}
\frac{M 3 \alpha L}{2 \sqrt{2}}=H \\
\frac{M \alpha L}{2 \sqrt{2}}=M g+V-F_{N}
\end{gathered}
$$

The net torque about the center of mass of the right rod is

$$
I \alpha=\sum \tau
$$

$$
\frac{M L^{2} \alpha}{12}=\frac{F_{N} L}{2 \sqrt{2}}+\frac{V L}{2 \sqrt{2}}-\frac{H L}{2 \sqrt{2}}
$$

Equations (a.1), (a.2), (a.3), and (a.4) form a set of four simultaneous equations in the four unknowns $H, V, \alpha$, and $F_{N}$. Solving them simultaneously for $F_{N}$, yields $F_{N}=\frac{7}{10} \mathrm{Mg}$
b. By symmetry $\mathrm{V}=0$. Applying Newton's second law to the right rod

$$
\begin{array}{cc}
M a_{x}=\sum F_{x} & \frac{M \alpha L}{2 \sqrt{2}}=H \\
M a_{y}=\sum F_{y} & \frac{M \alpha L}{2 \sqrt{2}}=M g-F_{N}
\end{array}
$$

The net torque about the center of mass

$$
I \alpha=\sum \tau \quad \frac{M L^{2} \alpha}{12}=\frac{F_{N} L}{2 \sqrt{2}}-\frac{H L}{2 \sqrt{2}}
$$

Solving these three equations in unknowns $H, \alpha$ and $F_{N}$. Solving them simultancously for $F_{N}$, yields
![](https://cdn.mathpix.com/cropped/112d23ef-1068-4ef8-abd5-030c70654242-6.jpg?height=577&width=693&top_left_y=502&top_left_x=1222)

$$
F_{N}=\frac{5}{8} M g
$$

c. Considering both rods as the system so we don't need to include the work done by the forces H and V,

$$
P E_{L i}+P E_{R i}=P E_{l f}+P E_{R f}+K E_{L j}+K E_{R f}
$$

Initially the center of mass of each rod is at a height $(\mathrm{L} / 2) \sin \theta_{\mathrm{i}}$ where $\theta_{\mathrm{i}}=45^{\circ}$

$$
P E_{L i}+P E_{R i}=M g \frac{L}{2} \sin \theta_{i}+M g \frac{L}{2} \sin \theta_{i}=M g L \sin \theta_{i}
$$

Finally,

$$
P E_{L f}+P E_{R f}=M g \frac{L}{2} \sin \theta+M g \frac{L}{2} \sin \theta=M g L \sin \theta
$$

For each side

$$
K E_{f}=\frac{1}{2} M v^{2}+\frac{1}{2} l \omega^{2} \text { with } \quad I=\frac{1}{12} M L^{2}
$$

For the left rod $\mathrm{v}_{\mathrm{L}}=\omega \mathrm{L} / 2$, so $\quad K E_{L f}=\frac{1}{2} M\left(\frac{\omega L}{2}\right)^{2}+\frac{1}{2}\left(\frac{1}{12} M L^{2}\right) \omega^{2}=\frac{1}{6} M L^{2} \omega^{2}$.
For the right rod $\mathrm{v}_{\mathrm{Ry}}=\omega(\mathrm{L} / 2) \cos \theta$, but $\mathrm{v}_{\mathrm{Rx}}=3 \omega(\mathrm{~L} / 2) \sin \theta$, so

$$
K E_{R f}=\frac{1}{2} M\left(\frac{\omega L}{2}\right)^{2}\left(\cos ^{2} \theta+9 \sin ^{2} \theta\right)+\frac{1}{2}\left(\frac{1}{12} M L^{2}\right) \omega^{2}=M L^{2} \omega^{2}\left(\frac{1}{6}+\sin ^{2} \theta\right)
$$

Substituting all of the above into (c.1):

$$
M g L \sin \theta_{i}=M g L \sin \theta+M L^{2} \omega^{2}\left(\frac{2}{6}+\sin ^{2} \theta\right)
$$

Or

$$
\omega^{2}=\frac{3 g}{L} \frac{\left(\sin \theta_{i}-\sin \theta\right)}{\left(1+3 \sin ^{2} \theta\right)}=\frac{3 g}{L} \frac{(1 / \sqrt{2}-\sin \theta)}{\left(1+3 \sin ^{2} \theta\right)}
$$

d. By symmetry, $\mathrm{V}=0$. The top of the "vee" doesn't move horizontally so H does no work. v $=\omega L / 2$ for both rods. Applying energy conservation to either rod

$$
P E_{1}=P E_{f}+K E_{f}
$$

with $P E_{i}=M g \frac{L}{2} \sin \theta_{i} \quad$ and $\quad P E_{f}=M g \frac{L}{2} \sin \theta$

For either side $\quad K E_{f}=\frac{1}{2} M v^{2}+\frac{1}{2} I \omega^{2}$ with $\quad I=\frac{1}{12} M L^{2}$
With $\mathrm{v}_{\mathrm{L}}=\omega \mathrm{L} / 2$, so $\quad K E_{f}=\frac{1}{2} M\left(\frac{\omega L}{2}\right)^{2}+\frac{1}{2}\left(\frac{1}{12} M L^{2}\right) \omega^{2}=\frac{1}{6} M L^{2} \omega^{2}$.

Combining equations (d.1), (d.2), and (d.3). yields

Or

$$
\begin{gathered}
M g L \sin \theta_{i}=M g L \sin \theta+\frac{2}{6} M L^{2} \omega^{2} \\
\omega^{2}=\frac{3 g}{L}\left(\sin \theta_{i}-\sin \theta\right)=\frac{3 g}{L}(1 / \sqrt{2}-\sin \theta)
\end{gathered}
$$
