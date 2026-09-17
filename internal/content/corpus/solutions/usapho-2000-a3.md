---
id: usapho-2000-a3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2000-a3
solution_type: official
source_document: solution-document-usapho-2000-s
source_pdf: cache/phoxiv/usapho/2000_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2000_S.pdf."
---

A3. a. The relativistic energy and momentum of a particle are given by

$$
E=\frac{m c^{2}}{\sqrt{1-(V / c)^{2}}}
$$

$$
p=\frac{m V}{\sqrt{1-(V / c)^{2}}}
$$

where $m$ is the particle mass and $V$ is the particle speed. The energy and momentum of a photon of frequency $v$ are given by

$$
E_{\gamma}=h v
$$

Applying energy conservation, we have
while momentum conservation gives

$$
\begin{gathered}
p_{y}=\frac{h v}{c} \\
\frac{m c^{2}}{\sqrt{1-(V / c)^{2}}}=h v_{1}+h v_{2} \\
\frac{m V}{\sqrt{1-(V / c)^{2}}}=\frac{h v_{1}}{c}-\frac{h v_{2}}{c}
\end{gathered}
$$

Dividing (A3.2) by (A3.1), we have

$$
\frac{m V}{m c^{2}}=\frac{h\left(v_{1}-v_{2}\right)}{c h\left(v_{1}+v_{2}\right)}
$$

Canceling common factors and solving for $V$

$$
V=c \frac{\left(v_{1}-v_{2}\right)}{\left(v_{1}+v_{2}\right)} \quad \text { to the right. }
$$

b. Solving (A3.1) for $m$
$m=\frac{h}{c^{2}}\left(v_{1}+v_{2}\right) \sqrt{1-\left(\frac{V}{c}\right)^{2}}$
and substituting in (A3.3)

$$
\begin{gathered}
m=\frac{h}{c^{2}}\left(v_{1}+v_{2}\right) \sqrt{1-\left(\frac{v_{1}-v_{2}}{v_{1}+v_{2}}\right)^{2}}=\frac{h}{c^{2}} \sqrt{\left(v_{1}+v_{2}\right)^{2}-\left(v_{1}-v_{2}\right)^{2}} \\
m=\frac{2 h}{c^{2}} \sqrt{v_{1} v_{2}}
\end{gathered}
$$

c. In the rest frame of the particle the two photons must have equal and opposite momenta. I travels to the right with frequency $v$ and 2 travels to the left with frequency $v$. In its rest frame the particle's energy is $m c^{2}$. Applying energy conservation we have

Combining this with (A3.4)

$$
\begin{gathered}
m c^{2}=h v+h v=2 h v \\
m c^{2}=2 h \sqrt{v_{1} v_{2}}=2 h v \\
v=\sqrt{v_{1} v_{2}}=\frac{m c^{2}}{2 h}
\end{gathered}
$$

Or

$$
\begin{gathered}
\frac{h v_{1}}{c}=F_{1} \frac{h v}{c}+F_{2} \frac{h v}{c}=\left(F_{1}+F_{2}\right) \frac{h v}{c} \\
\left(F_{1}+F_{2}\right)=\frac{2 h v_{1}}{m c^{2}} .
\end{gathered}
$$

While for photon 2

$$
\begin{gathered}
-\frac{h v_{2}}{c}=-F_{1} \frac{h \sqrt{v_{1} v_{2}}}{c}+F_{2} \frac{h \sqrt{v_{1} v_{2}}}{c} \\
\left(F_{1}-F_{2}\right)=\frac{2 h v_{2}}{m c^{2}}
\end{gathered}
$$

or

$$
2 F_{1}=\frac{2 h}{m c^{2}}\left(v_{1}+v_{2}\right)
$$

and comparing to (A3.1)

$$
F_{1}=\frac{1}{\sqrt{1-(V / c)^{2}}}
$$

Subtracting (A3.6) from (A3.5) we have

$$
2 F_{2}=\frac{2 h}{m c^{2}}\left(v_{1}-v_{2}\right)
$$

and comparing to (A3.2)

$$
F_{2}=\frac{(V / c)}{\sqrt{1-(V / c)^{2}}}
$$
