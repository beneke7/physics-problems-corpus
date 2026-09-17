---
id: usapho-2001-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2001-a1
solution_type: official
source_document: solution-document-usapho-2001-s
source_pdf: cache/phoxiv/usapho/2001_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2001_S.pdf."
---

A1. Each ball starts at rest and falls through a height $H$ to its lowest point, which we will take as the zero of gravitational potential energy. Applying energy conservation, each ball reaches its lowest point with velocity

$$
v_{d}=\sqrt{2 g H} .
$$

The large ball collides elastically with the floor and the direction of its velocity reverses. Moving upward, $M$ collides elastically with $m$ moving downward. Letting $v$ be the speed of $m$ and $V$ be the speed of $M$ after the collision and taking down to be negative and up positive, momentum conservation yields

$$
M v_{d}-m v_{d}=m v+M v .
$$

Solving for $V$

$$
V=\frac{\left(M v_{d}-m v_{d}-m v\right)}{M}=v_{d}-\frac{m}{M}\left(v_{d}+v\right)
$$

Energy conservation yields: $\quad \frac{1}{2} M v_{d}{ }^{2}+\frac{1}{2} m v_{d}{ }^{2}=\frac{1}{2} M v^{2}+\frac{1}{2} m v^{2}$.
Inserting $V$ from the momentum equation.

$$
\begin{gathered}
\frac{1}{2} M v_{d}^{2}+\frac{1}{2} m v_{d}^{2}=\frac{1}{2} M\left(v_{d}-\frac{m}{M}\left(v_{d}+v\right)\right)^{2}+\frac{1}{2} m v^{2} \\
\frac{1}{2} M v_{d}^{2}+\frac{1}{2} m v_{d}^{2}=\frac{1}{2} M v_{d}^{2}-\frac{1}{2} M 2 v_{d} \frac{m}{M}\left(v_{d}+v\right)+\frac{1}{2} M \frac{m^{2}}{M^{2}}\left(v_{d}^{2}+2 v_{d} v+v^{2}\right)+\frac{1}{2} m v^{2} \\
\frac{1}{2} m v_{d}^{2}=-\frac{1}{2} 2 v_{d} m\left(v_{d}+v\right)+\frac{1}{2} \frac{m^{2}}{M}\left(v_{d}^{2}+2 v_{d} v+v^{2}\right)+\frac{1}{2} m v^{2}
\end{gathered}
$$

Multiplying by $2 \mathrm{M} / \mathrm{m}$

Regrouping terms

$$
\begin{gathered}
M v_{d}^{2}=-2 v_{d} M\left(v_{d}+v\right)+m\left(v_{d}^{2}+2 v_{d} v+v^{2}\right)+M v^{2} \\
0=(m+M) v^{2}-2 v v_{d}(M-m)+(m-3 M) v_{d}{ }^{2} .
\end{gathered}
$$

Solving the quadratic equation for $v$ yields

$$
v=\left(\frac{M-m \pm 2 M}{M+m}\right) v_{d}=\left(\frac{M-m \pm 2 M}{M+m}\right) \sqrt{2 g H} .
$$

Since we want $m$ moving upward (positive velocity), we select the plus sign.

$$
v=\left(\frac{3 M-m}{M+m}\right) \sqrt{2 g H}
$$

Let $h$ equal the maximum height of the small ball above its lowest position. At $m$ 's highest point its kinetic energy is zero and

$$
m g h=\frac{1}{2} m v^{2}=\frac{1}{2} m\left(\left(\frac{3 M-m}{M+m}\right) \sqrt{2 g H}\right)^{2}=m g H\left(\frac{9 M^{2}-6 M m+m^{2}}{M^{2}+2 M m+m^{2}}\right)
$$

The ball's height above its initial position is $\Delta h=h-H$.

$$
\begin{gathered}
\Delta h=H\left(\frac{9 M^{2}-6 M m+m^{2}}{M^{2}+2 M m+m^{2}}\right)-H=H\left(\frac{9 M^{2}-6 M m+m^{2}-M^{2}-2 M m-m^{2}}{M^{2}+2 M m+m^{2}}\right) \\
\Delta h=H\left(\frac{8 M^{2}-8 M m}{M^{2}+2 M m+m^{2}}\right)=H \frac{8 M(M-m)}{(M+m)^{2}}=H \frac{8(1-m / M)}{(1+m / M)^{2}}
\end{gathered}
$$
