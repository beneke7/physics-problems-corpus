---
id: eupho-2018-T2
problem: eupho-2018-T2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2018
verification_status: unverified
figure_files: []
---

## Solution

Magnetic field gives rise to magnetization of water molecules — each becomes a magnetic dipole. An inhomogeneous magnetic field exerts a force on a magnetic dipole. Water molecules, being diamagnetic, are pushed away from regions of stronger magnetic field. Water reaches mechanical equilibrium where the magnetic force is balanced by a pressure gradient. Hence, regions of stronger magnetic field correspond to *lower* pressure. As the current is increased, the pressure inside the solenoid (where $B$ is largest) decreases, and boiling begins when the local pressure falls to the vapour pressure, which under these conditions is negligible compared to $p_0$.

**Approximations.** (1) The water column above the solenoid contributes only 2–4% of atmospheric pressure — neglected. (2) The saturation vapour pressure of water at 293 K is also much smaller than $p_0$ — neglected. Boiling therefore begins when the pressure drop due to the magnetic field equals $p_0$.

**Pressure–field relation.** Consider pushing a small volume $V$ of water out of a point $P$ (field $B$) to the free surface (field $\approx 0$). The change in magnetic interaction energy is $V(\mu_r^{-1} - 1)B^2/(2\mu_0)$. Energy conservation (mechanical work $pV$ done by pressure at $P$ minus work $p_0 V$ done at the surface) gives:
$$(\mu_r^{-1} - 1)\frac{B^2}{2\mu_0} = p_0 - p.$$
Since $\mu_r^{-1} - 1 \approx -\chi$ (for $|\chi| \ll 1$):
$$p_0 - p = -\frac{\chi B^2}{2\mu_0}.$$

(This is the magnetic analogue of Bernoulli's equation for a static fluid.)

**Boiling condition.** Setting $p = 0$:
$$B = \sqrt{\frac{-2\mu_0 p_0}{\chi}}.$$

**Current.** Using the field inside a long solenoid, $B = \mu_0 I N/\ell$:
$$I = \frac{\ell}{N}\sqrt{\frac{-2p_0}{\chi\mu_0}} = \frac{0.20}{6000}\sqrt{\frac{2 \times 101\times10^3}{9.04\times10^{-6} \times 12.57\times10^{-7}}}$$
$$\boxed{I \approx 4.4\,\text{kA}.}$$
