---
id: solution-ocr-nbpho-2025-phase-spiral-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2025-phase-spiral]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; split from the full 2025 booklet; grading-only material omitted from canonical display."
---
# 8. Phase spiral (9 points) — Solution by Taavet Kalda

i) (1 point) Gravitational acceleration obeys Gauss' law, i.e., the number of field lines passing through a closed surface is proportional to the enclosed mass. We can see from the example of a point mass $M$ that $\int g \mathrm {~d} A =$ $4 \pi G M$. Applied for the case of an infinite plane with constant density with a cuboid of area $A$ and half-thickness $z$, we get $- 2 a _ { z } A =$ $4 \pi G 2 A z \rho _ { 0 }$ so
$a _ { z } = - 4 \pi G \rho _ { 0 } z$.


ii) (0.5 points) The acceleration is proportional to displacement and therefore corresponds to a harmonic oscillator. The period

$$
T = \frac { 2 \pi } { \sqrt { 4 \pi G \rho _ { 0 } } } = \sqrt { \frac { \pi } { G \rho _ { 0 } } } .
$$


iii) (2.5 points) If we follow the trajectory of a single star that lies on the spiral, we would find it oscillating around the mid-plane with some period $T ( z )$ that decreases with increasing $z$. Over the course of an orbit, the energy per unit mass is conserved and is given by $E = v _ { z } ^ { 2 } / 2 + \Phi ( z )$. We know that near the mid-plane, the gravitational potential is minimal and equal to zero, so $v _ { z }$ is maximal and the kinetic energy is equal to the total energy. Hence, we know the total energy of stars at the seven intersection points of the spiral with $z = 0$. Similarly, when $v _ { z } = 0$, the kinetic energy is minimal and equal to zero, so the total energy is equal to $\Phi ( z )$ at those points.

As one traces the various intersection points with $v _ { z } = 0$ and $z = 0$ along the spiral, the maximal extent of the orbit keeps increasing. To the first order, if we assume that the maximal extent increases linearly with each crossing, we can find the potential energy of the crossings of $v _ { z } = 0$ as the average between the kinetic energies of the previous and subsequent crossing over $z = 0$. This allows us to determine the potential energy at all the crossings with $v _ { z } = 0$, as tabulated and plotted below.

| $i$ | $z _ { i }$ (kpc) | $\Phi \left( z _ { i } \right) \left( \mathrm { km } ^ { 2 } / \mathrm { s } ^ { 2 } \right)$ |
| :--- | :--- | :--- |
| 1 | 0.27 | 180 |
| 2 | 0.39 | 330 |
| 3 | 0.54 | 530 |
| 4 | 0.72 | 800 |
| 5 | 0.97 | 1200 |
| 6 | 1.34 | 1800 |


iv) (1 point) For a harmonic oscillator, the potential energy would grow as $z^2$. Based on the plot of the potential energy, it seems to grow roughly quadratically at first and then transition into a more linear regime, implying that smaller values of $z$ have a more uniform $\rho$. Taking the first value $\Phi(z_1)=180\,\mathrm{km^2\,s^{-2}}$, we can estimate the mid-plane density. From the first part,

$$
\Phi(z)=\int a_z\,\mathrm{d}z=2\pi G\rho_0z^2,
$$
so

$$
\rho_0=\frac{\Phi(z_1)}{2\pi Gz_1^2}=6.1\times10^{-21}\,\mathrm{kg\,m^{-3}}=0.090\,M_\odot\,\mathrm{pc^{-3}}.
$$

v) (2 points) We can compute the enclosed surface density $\Sigma(z)$ between $0<z$ using the harmonic-oscillator estimate. With the constant-density approximation,

$$
\Sigma(z)=\rho_0z=\frac{\Phi(z)}{2\pi Gz}.
$$
Of course, here, $\rho _ { 0 }$ is a placeholder variable while using the constant profile approximation to simplify the calculus. The final result is expected to deviate from the true value by a numerical factor that's close to unity.

Assuming that dark matter density dominates far away, we can use the difference between the farthest two datapoints at $z _ { 5 }$ and $z _ { 6 }$ to estimate the dark matter density via

$$
\begin{aligned}
\Sigma \left( z _ { 6 } \right) - \Sigma \left( z _ { 5 } \right) & = \rho _ { \mathrm { DM } } \left( z _ { 6 } - z _ { 5 } \right) \\
& = \frac { 1 } { 2 \pi G } \left( \frac { \Phi \left( z _ { 6 } \right) } { z _ { 6 } } - \frac { \Phi \left( z _ { 5 } \right) } { z _ { 5 } } \right) .
\end{aligned}
$$

Thus,

$$
\begin{aligned}
\rho _ { \mathrm { DM } } & \approx \frac { 1 } { 2 \pi G \left( z _ { 6 } - z _ { 5 } \right) } \left( \frac { \Phi \left( z _ { 6 } \right) } { z _ { 6 } } - \frac { \Phi \left( z _ { 5 } \right) } { z _ { 5 } } \right) \\
& = 7.7 \times 10 ^ { - 22 } \mathrm {~kg} / \mathrm { m } ^ { 3 } = 0.011 \mathrm { M } _ { \odot } / \mathrm { pc } ^ { 3 } .
\end{aligned}
$$

Dark matter therefore makes up around $\rho _ { \mathrm { DM } } / \rho _ { 0 } = 13 \%$ of the total local matter budget.


vi) (2 points) We can estimate the time of the perturbation by using the winding rate between two points on the spiral and how many full turns around the origin they have made relative to each other. Using the harmonic estimate, firstly, $\rho _ { 0 } = \Phi ( z ) / \left( 2 \pi G z ^ { 2 } \right)$ and secondly the angular frequency is

$$
\omega ( z ) = \sqrt { 4 \pi G \rho _ { 0 } } = \sqrt { 2 \Phi ( z ) / z ^ { 2 } } .
$$

By, for example, picking points $z _ { 1 }$ and $z _ { 6 }$ and seeing that they have 2.5 full turns between


them, we can express how long ago the perturbation happened:

$$
\begin{aligned}
T _ { 0 } & = 2.5 \frac { 2 \pi } { \omega \left( z _ { 6 } \right) - \omega \left( z _ { 5 } \right) } \\
& = 5 \pi \left( \sqrt { 2 \Phi \left( z _ { 1 } \right) / z _ { 1 } ^ { 2 } } - \sqrt { 2 \Phi \left( z _ { 6 } \right) / z _ { 6 } ^ { 2 } } \right) ^ { - 1 } \\
& = 1.9 \times 10 ^ { 16 } \mathrm {~s} = 620 \mathrm { Myr } .
\end{aligned}
$$

The timescale is relatively long, but compared to the lifespan of the Milky Way, which is around 13.6 billion years, it's relatively recent.
