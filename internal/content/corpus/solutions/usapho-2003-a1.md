---
id: usapho-2003-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2003-a1
solution_type: official
source_document: solution-document-usapho-2003-s
source_pdf: cache/phoxiv/usapho/2003_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2003_S.pdf."
---

A1. a. Setting the mass times centripetal acceleration equal to the gravitational force

Solving for speed

$$
\begin{gathered}
m \frac{v^{2}}{r}=G \frac{M m}{r^{2}} \\
v=\sqrt{\frac{G M}{r}}
\end{gathered}
$$

and multiplying by mass to get the momentum

$$
p=m v=m \sqrt{\frac{G M}{r}}
$$

b. To escape from the star the total energy must be at least zero. Writing the escape speed $v_{e}$,

$$
\frac{1}{2} m v_{e}^{2}-G \frac{M m}{r}-0
$$

Solving for $v_{\mathrm{c}}$, and multiplying by mass to get the needed momentum,

$$
p_{e}=m v_{e}=m \sqrt{\frac{2 G M}{r}}=\sqrt{2} p .
$$

This is greater than $p$ above, so the impulse must be in the direction of $\vec{p}$.

$$
\vec{I}_{e}=\vec{p}_{e}-\vec{p}=(\sqrt{2}-1) \vec{p}
$$

c. Since angular momentum $L=m v r$ must be conserved, the only way to crash into a star with $R=0$ is with $L=0$. The satellite's momentum $m v_{C 0}$ must be slowed to zero.

$$
\vec{l}_{C 0}=m \vec{v}_{C 0}-\dot{p}=0-\vec{p}=-\vec{p}
$$

d. Letting $v_{1}$ be the new speed at orbital radius $r$ and $v_{\mathrm{k}}$ be the speed at stellar radius $R$, angular momentum conservation yields

$$
\begin{aligned}
m v_{r} r & =m v_{R} R \\
v_{R} & =v, \frac{r}{R}
\end{aligned}
$$

Solving for $\mathrm{w}^{\prime} \mathrm{R}$
Mechanical energy is also conserved.

$$
\frac{1}{2} m v_{1}^{2}-G \frac{M m}{r}=\frac{1}{3} m v_{R}^{2}-G \frac{M m}{R}
$$

Regrouping terms and canceling $m$,

$$
G \frac{M}{R}-G \frac{M}{r}=\frac{1}{2} v_{R}^{2}-\frac{1}{2} v_{,}^{2} .
$$

Substituting (Al-1)

$$
\begin{aligned}
& 2 G M\left(\frac{1}{R}-\frac{1}{r}\right)=v_{1}^{2}\left(\frac{r}{R}\right)^{2}-v_{2}^{2} \\
& \frac{2 G M}{r R}(r-R)=\frac{v_{2}^{2}}{R^{2}}\left(r^{2}-R^{2}\right)
\end{aligned}
$$

Multiplying by $R$ and dividing by ( $r-R$ )

$$
\frac{2 G M}{r}=\frac{v_{r}^{2}}{R}(r+R)
$$

Solving for $v_{\mathrm{r}}$ and multiplying by mass to get $p_{\mathrm{r}}$,

$$
p_{r}=m v_{r}=m \sqrt{\frac{2 G M R}{r(r+R)}}-m \sqrt{\frac{G M}{r}} \sqrt{\frac{2}{1+\frac{r}{R}}}=p \sqrt{\frac{2}{1+\frac{r}{R}}}
$$

This is less than the original orbital momentum. Fioding the impulse,

$$
\vec{I}_{C S}=\vec{p}_{r}-\vec{p}=\vec{p} \sqrt{\frac{2}{1+r / R}-\vec{p}=-\vec{p} 1-\sqrt{\frac{2}{1+r / R}}}
$$
