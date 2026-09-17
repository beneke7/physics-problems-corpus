---
id: eupho-2017-T3
problem: eupho-2017-T3
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2017
verification_status: unverified
figure_files: []
---

## Solution

### Setting up the image problem

The most important physics to consider is that the magnetic flux through the superconducting mesh is effectively locally locked in place. Once the mesh is cooled to the superconducting state the magnetic field as a function of position on the mesh cannot be varied, regardless of the change in location of the dipole. Since the magnetic field is effectively specified along this superconducting plane, the problem reduces to a boundary value problem that is traditionally solved by the method of images.

First, consider what happens if the physical dipole is moved far away from the mesh. An image dipole must be located that fixes the magnetic field to be unchanged. This can be done with an image dipole that is located a distance $a$ behind the mesh, and it must have the same orientation $\mathbf{m}$. Now bring back the original dipole, placing it at distance $b$. It is necessary to cancel out the field from this original, but now displaced, dipole with an opposite dipole $-\mathbf{m}$ placed behind the mesh at a distance $b$.

**Double check:** If the original dipole is placed at the original location $a$, then there is no need for image charges, and they should cancel out. Indeed, the two image dipoles have opposite orientations, so they cancel.

The two image dipoles are therefore:
- At distance $a$ behind the mesh: dipole moment $+\mathbf{m}$ (same orientation as original).
- At distance $b$ behind the mesh: dipole moment $-\mathbf{m}$ (opposite orientation).

### Force between two magnetic dipoles

Consider a magnetic dipole moment $m$ as a pair of magnetic monopoles of strength $q_m$ and $-q_m$ separated by a distance $d$ such that $m = q_m d$. The magnetic field strength at a distance $x \gg d$ along the axis from the dipole is:

$$B \approx \frac{\mu_0 q_m}{4\pi x^2} - \frac{\mu_0 q_m}{4\pi (x+d)^2} \approx \frac{\mu_0 q_m d}{2\pi x^3} = \frac{\mu_0 m}{2\pi x^3}.$$

The force on a dipole at position $x$ in a non-uniform field $B$ is:

$$F = -q_m B(x) + q_m B(x+d) \approx q_m d\,\frac{dB}{dx} = m\,\frac{dB}{dx}.$$

Applying this with $B(x) = \mu_0 m / (2\pi x^3)$:

$$F \approx m\cdot\left(-\frac{3\mu_0 m}{2\pi x^4}\right) = -\frac{3\mu_0 m^2}{2\pi x^4}.$$

The negative sign means that two parallel identical dipoles separated by a distance $x$ will attract.

### Force on the physical dipole

The physical dipole at $b$ is:
- Attracted to the image dipole at location $-(a+b)$ from it (total distance $a+b$), with the same orientation $+\mathbf{m}$.
- Repelled from the image dipole at location $-2b$ from it (total distance $2b$), with opposite orientation $-\mathbf{m}$.

Combining (taking attraction toward the mesh as negative):

$$F = -\frac{3\mu_0 m^2}{2\pi(b+a)^4} + \frac{3\mu_0 m^2}{2\pi(2b)^4} = \frac{3\mu_0 m^2}{2\pi}\left(\frac{1}{16b^4} - \frac{1}{(a+b)^4}\right),$$

where a negative value of $F$ indicates attraction toward the mesh.

### Small-displacement limit

When $b = a + \delta$ with $\delta \ll a$:

$$F \approx \frac{3\mu_0 m^2}{2\pi}\left(\frac{1}{16(a+\delta)^4} - \frac{1}{(2a+\delta)^4}\right) \approx -\frac{3\mu_0 m^2}{16\pi a^5}\,\delta.$$

This is a linear restoring force, so slight disturbances to the physical dipole about $b = a$ result in simple harmonic oscillations.
