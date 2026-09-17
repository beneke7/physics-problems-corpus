---
id: usapho-2004-a3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2004-a3
solution_type: official
source_document: solution-document-usapho-2004-s
source_pdf: cache/phoxiv/usapho/2004_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2004_S.pdf."
---

A3. a. In order for minimum sound intensity to be heard in the region along the $x$-axis with $x> x_{0}$. the distance between sources must be an odd half-integer multiple of the wavelength $i$.

$$
2 x_{n}=\left(\begin{array}{ll}
2 n & 1
\end{array}\right) \frac{\lambda}{2}=(2 n-1) \frac{y}{2 f} \quad n=1,2,3, \ldots
$$

where $v=340 \mathrm{~m} / \mathrm{s}$, the velocity of sound in air, and $175 \mathrm{~Hz} \leq f \leq 625 \mathrm{~Hz}$, the frequency of the sound that produces minimum intensity, Solving for the frequency

$$
f_{n}=(2 n-1) \frac{1^{\prime}}{4 x_{0}}=(2 n-1) \frac{(340 \mathrm{~m} / \mathrm{s})}{4(0.85 \mathrm{~m})}-(2 n-1)(100 \mathrm{~Hz})
$$

The frequencies in the possible range are

$$
f_{2}=300 \mathrm{~Hz} \quad \text { and } \quad f_{1}=500 \mathrm{~Hz}
$$

b. In the region between the sources, source $S$, emits a wave $\Psi_{1}$ that travels to the left and source $S_{2}$ emits a wave $\Psi_{2}^{\prime}$ that travels to the right.

$$
\begin{array}{ccc}
\Psi_{1}=A \sin \left(\omega t+k\left(x-x_{0}\right)\right) & \Psi_{2}-A \sin \left(\omega t-k\left(x+x_{0}\right)\right) \\
k=\frac{2 \pi}{\lambda} & \text { and } & \omega=2 \pi f .
\end{array}
$$

where

Adding the waves to determine the resultant wave

$$
\begin{gathered}
\Psi=\Psi_{1}+\Psi_{2}=A \sin \left(\omega t+k\left(x-x_{0}\right)\right)+A \sin \left(\omega t-k\left(x+x_{0}\right)\right) \\
\Psi^{\prime}=A \sin \left(\omega t-k x_{0}\right) \cos (k x)+A \cos \left(\omega t-k x_{0}\right) \sin (k x) \\
+A \sin \left(\omega t-k x_{0}\right) \cos (k x)-A \cos \left(\omega t-k x_{0}\right) \sin (k x) \\
\Psi=2 A \cos (k x) \sin \left(\omega t-k x_{0}\right)
\end{gathered}
$$

Note: This equation has the correct $x$-dependence. The waves travel the same distance to reach $x=0$. This point is an interference maximum. Any expression with

$$
\Psi=2 A \cos (k x) \sin \left(\omega r-k x_{0}+\delta\right)
$$

where $\delta$ is a phase constant is valid.
c. Minimum sound intensity occurs when $\cos (k x)=0$. i.e., $k x= \pm(2 n+1) \pi / 2$. Solving for $x$,

$$
x=+\frac{(2 n+1) \pi}{2 k}=+\frac{(2 n+1) \pi}{2(2 \pi / \lambda)}=+\frac{(2 n+1) \lambda}{4}=+\frac{(2 n+1) v}{4 f}
$$

For $f=300 \mathrm{~Hz}: \quad x= \pm \frac{(2 n+1)(340 \mathrm{~m} / \mathrm{s})}{4(300 \mathrm{~Hz})}= \pm(2 n+1)(0.283 \mathrm{~m})= \pm 0.283 \mathrm{~m} \quad$ with $n=0$.
For $f=500 \mathrm{~Hz}: \quad x= \pm \frac{(2 n+1)(340 \mathrm{~m} / \mathrm{s})}{4(500 \mathrm{~Hz})}= \pm(2 n+1)(0.170 \mathrm{~m})= \pm 0.170 \mathrm{~m}, \pm 0.510 \mathrm{~m}$
with $n=0,1$.
