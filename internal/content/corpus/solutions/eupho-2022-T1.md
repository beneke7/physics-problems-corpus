---
id: eupho-2022-T1
problem: eupho-2022-T1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2022
verification_status: unverified
figure_files: [eupho-2022-T1-sol-1.png, eupho-2022-T1-sol-2.png]
---
## Solution

### Solution I: energetic approach

Denote the density of the liquid by $\varrho$, so the density of the cylinder is $\gamma\varrho$. In equilibrium (i.e. when the net force acting on the cylinder is zero) the immersed part of the cylinder has height $\gamma h$.

Consider the system in a moment when the cylinder is displaced by distance $x_1$ downward and moves down with velocity $v_1$. As a result of the motion of cylinder the liquid level rises by some height $x_2$, and the liquid flows in the gap between the cylinder and beaker with some velocity $v_2$ upwards (see *Fig. 1*).

![figure](../../sources/eupho/figures/eupho-2022-T1-sol-1.png)

*Fig. 1*

The relation between the aforementioned displacements and velocities are given by the continuity law:

$$x_1 s = x_2 (S - s), \qquad v_1 s = v_2 (S - s).$$

In the following we express the potential and kinetic energy of the system. Compared to the equilibrium position the cylinder of mass $\gamma\varrho s h$ sunk by $x_1$, while the potential energy change caused by the redistribution of liquid can be imagined as the center of mass of liquid with mass $\varrho s x_1$ rises by distance $\gamma h + \frac{x_1}{2} + \frac{x_2}{2}$. Taken the potential energy in the equilibrium state to be zero, the potential energy in the state indicated in the right figure can be written as

$$E_{\text{pot}} = -\gamma\varrho s h g x_1 + \varrho s x_1 g\left(\gamma h + \frac{x_1 + x_2}{2}\right).$$

After opening the bracket the first two terms cancel each other:

$$E_{\text{pot}} = \frac{1}{2}\varrho s g x_1 (x_1 + x_2).$$

After expressing $x_2$ from continuity law and some simplification we get a quadratic expression for the potential energy:

$$E_{\text{pot}} = \frac{1}{2}\varrho s g x_1\left(x_1 + \frac{s}{S-s}x_1\right) = \frac{1}{2}\varrho\frac{sS}{S-s}g x_1^2.$$

Now let us calculate the kinetic energy of the system. The contribution from the cylinder is straightforward, $\gamma\varrho s h v_1^2/2$, but the motion of the liquid is more complicated.

*Note.* We may notice that since $s/(S-s) = 50$, the speed $v_2$ of the liquid in the narrow gap is 50 times larger than the typical speed of the liquid below the cylinder (which can be estimated to be in the range of $v_1$). And while the mass of the liquid below the cylinder is much larger than the mass of liquid inside the gap (the ratio is ca. 25 if the "few centimeters" in the problem text is taken to be 3.5 cm), the kinetic energy is proportional to the square of the velocity, so the kinetic energy of the liquid inside the gap is roughly 100 times larger than the kinetic energy of the liquid below the cylinder.

Since the kinetic energy of the liquid below the cylinder is negligible, we can write the total kinetic energy of the system as:

$$E_{\text{kin}} = \underbrace{\frac{1}{2}\gamma\varrho s h v_1^2}_{\text{cylinder}} + \underbrace{\frac{1}{2}\varrho(S-s)(\gamma h + x_1 + x_2)\,v_2^2}_{\text{liquid}}.$$

Here $x_1, x_2 \ll \gamma h$, so we shall keep only the term containing $\gamma h$ in the second bracket:

$$E_{\text{kin}} = \frac{1}{2}\gamma\varrho s h v_1^2 + \frac{1}{2}\varrho(S-s)\gamma h v_2^2.$$

Expressing $v_2$ from continuity law gives the following:

$$E_{\text{kin}} = \frac{1}{2}\gamma\varrho s h v_1^2 + \frac{1}{2}\varrho\gamma h\frac{s^2}{S-s}v_1^2 = \frac{1}{2}\varrho\gamma h\frac{sS}{S-s}v_1^2.$$

The potential and kinetic energies can be written in the form

$$E_{\text{pot}} = \frac{1}{2}k_{\text{eff}}x_1^2, \qquad E_{\text{kin}} = \frac{1}{2}m_{\text{eff}}v_1^2,$$

where the effective spring constant and effective mass are given by

$$k_{\text{eff}} = \varrho g\frac{sS}{S-s}, \qquad m_{\text{eff}} = \varrho\gamma h\frac{sS}{S-s}.$$

So the oscillation is indeed harmonic, thus the angular frequency and the period are:

$$\omega = \sqrt{\frac{k_{\text{eff}}}{m_{\text{eff}}}} = \sqrt{\frac{g}{\gamma h}}, \qquad T = 2\pi\sqrt{\frac{\gamma h}{g}} = 0.53\ \text{s}.$$

*Note.* The static restoring force, acting on the cylinder due to the change (relative to the equilibrium position) of the hydrostatic pressure at its lower base:

$$F = -s\rho g(x_1 + x_2) = -\frac{sS}{S-s}\rho g x_1.$$

This immediately gives effective stiffness of the system $k_{\text{eff}} = \frac{sS}{S-s}\rho g$. Alternatively, one may wish to integrate $\int F\,dx_1$ to get the potential energy

$$E_{\text{pot}} = \frac{sS}{S-s}\frac{\rho g}{2}x_1^2.$$

### Solution II: dynamical approach

When the cylinder is displaced from its equilibrium position downwards by distance $x_1$, the net restoring force (pointing up) can be calculated as the sum of the weight of the cylinder and the force from the difference of pressures at the top ($p_0$) and bottom ($p$) of the cylinder. By the assumption that the pressure across the cylinder $p$ is constant (justified, since the geometry of the column of liquid can be imagined as the center of mass of liquid rises by $x_1/2 + x_2/2$), the relation between the magnitudes of $a_1$ and $a_2$ is given by the continuity law:

$$sa_1 = (S - s)a_2.$$

If the liquid in the gap was not accelerating, the pressure difference $p - p_0$ would be equal to the hydrostatic pressure of the liquid column in the gap. Due to the acceleration of the liquid, $p - p_0$ can be expressed from Newton's 2nd law applied for the liquid column of unit area located in the gap:

$$p_0 - p + \varrho g(\gamma h + x_1 + x_2) = \varrho(\gamma h + x_1 + x_2)\,a_2,$$

where we use the notations of *Solution I*, and the downward direction was taken as positive.

Newton's 2nd law for the cylinder reads as

$$(p - p_0)s - \gamma\varrho s h g = \gamma\varrho s h a_1.$$

After expressing $p - p_0$ from the previous equation, and then substituting it here we get:

$$\varrho g(\gamma h + x_1 + x_2)s - \varrho(\gamma h + x_1 + x_2)a_2 s - \gamma\varrho s h g = \gamma\varrho s h a_1.$$

Since the amplitude of the liquid level is small, the terms containing $a_2 x_1$ and $a_2 x_2$ can be neglected. After rearranging we get:

$$\varrho gs(x_1 + x_2) = \gamma\varrho s h(a_1 + a_2).$$

Using the relations between the displacements and accelerations we finally get:

$$a_1 = \frac{g}{\gamma h}x_1.$$

Taking into account the opposite directions of $x_1$ and $a_1$, this is the dynamical condition of a simple harmonic motion with angular frequency and period

$$\omega = \sqrt{\frac{g}{\gamma h}}, \qquad T = 2\pi\sqrt{\frac{\gamma h}{g}} = 0.53\ \text{s}.$$

![figure](../../sources/eupho/figures/eupho-2022-T1-sol-2.png)

*Fig. 2*

*Note.* In the solution we have assumed that the pressure $p$ is constant throughout the bottom surface of the cylinder. This assumption is equivalent with using that the horizontal acceleration of the liquid below the cylinder at every point is much smaller than $a_2$, which is reasonable.

*Transcribed faithfully from the official EuPhO 2022 theory solutions (born-digital PDF, via phoxiv.org); inline math normalized from Unicode to LaTeX.*
