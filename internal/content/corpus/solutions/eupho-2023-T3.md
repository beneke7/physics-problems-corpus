---
id: eupho-2023-T3
problem: eupho-2023-T3
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2023
verification_status: unverified
figure_files: []
---
## Solution

**General remarks:** Calculational numerical errors carry a small penalty; dimensionally wrong answers receive no credit.

### Part a ($\sim$3 pts)

Let us analyze how the current in the metal starts to build up when we start moving the plate in the rest frame of the magnets. The free electrons in the metal try to move together with the plate in the $+y$ direction, but a Lorentz force acting in the $-x$ direction makes them deviate.

After some time the charge accumulation stops and the charge and current distributions do not depend on time anymore. According to Ohm's law,

$$\vec{j} = \vec{j}_P + \frac{1}{\varrho}\,\vec{v} \times \vec{B}, \tag{(Ohm)}$$

where $\vec{j}$ is the total current density, $\vec{v} \times \vec{B}$ is the result of the Lorentz force, and $\vec{j}_P$ is the current density caused by the electric field (and is therefore a potential field).

Inside the circular region ($r < R$) the Lorentz term is constant, but outside it is zero. Nevertheless, the $E$-field of the accumulated charges is present there, which gives rise to a current. In the steady state considered here, the charge distribution is constant in time, and hence the total current density $\vec{j}$ is source-free everywhere. However, this does not hold for $\vec{j}_P$, which is driven by the "sources" and "sinks" along the rim of the circular region of radius $R$. Those sources and sinks compensate exactly the sources of the Lorentz term mentioned above. Only a source-free jump of the total current density is allowed on the rim, resulting in the kinks on the streamlines along the boundary.

Based on these considerations, we can draw a qualitative pattern of the current flow: inside the circular disc, there is a flow in the direction of the Lorentz force and the streamlines of the created flow of current close onto themselves outside of that region (see fig. 1 of the source). The current density is $+x$ inside the circular region and $-x$ outside (along the relevant axis), with the streamlines forming closed loops with kinks on the boundary circle.

### Part b ($\sim$5 pts)

From here on, we make use of the uniqueness of the solution to the correctly posed boundary conditions for the Maxwell equations inside the plate. We need to satisfy the condition that current density is sourceless everywhere, i.e.

$$\oint \vec{j} \times \mathrm{d}\vec{l} = 0, \tag{38}$$

where $\vec{j}$ denotes the current density and the integral is taken over an arbitrary closed loop inside the plate. The current density must satisfy Ohm's law in differential form,

$$\vec{j} = \varrho^{-1}(\vec{E} + \vec{v} \times \vec{B}), \tag{39}$$

where $\vec{v}$ denotes the velocity of the plate; the electric field caused by the accumulated charges $\vec{E}$ must satisfy the circulation theorem,

$$\oint \vec{E} \cdot \mathrm{d}\vec{l} = 0, \tag{40}$$

where the integration loop can be arbitrary. To close the system of equations, we integrate Eq. 39 either over a closed loop entirely inside or entirely outside the circular region; then we obtain zero, because for such loops $\oint \vec{v} \times \vec{B} \cdot \mathrm{d}\vec{l} = 0$. From this we conclude that for such integration loops,

$$\oint \vec{j} \cdot \mathrm{d}\vec{l} = 0. \tag{41}$$

Note that the electric field $\vec{E}_\mathrm{pol}$ of a polarised cylinder satisfies Eq. 40, but we must also satisfy Eqns. (38, 39). We will look for such a solution in the form of a superposition

$$\vec{j} = \varrho^{-1}(\vec{E}_\mathrm{pol} + \vec{v} \times \vec{B}). \tag{42}$$

First we need to find an expression for the field $\vec{E}_\mathrm{pol}$. To that end, we can consider the electric field produced by an infinite homogeneously charged cylinder of radius $R$ and volume charge density $q$. From Gauss's law, the electric field inside and outside the cylinder is

$$\vec{E}_+(\vec{r}) = \begin{cases} \dfrac{1}{2\varepsilon_0} q\vec{r} & \text{if } r \le R, \\[2mm] \dfrac{1}{2\varepsilon_0} q\dfrac{R^2}{r^2}\vec{r} & \text{if } r > R. \end{cases}$$

Now we superpose a similar cylinder of charge density $-q$, displaced from the first cylinder by a small displacement vector $\vec{s}$. With the origin still at the centre of the positively charged cylinder, the electric field of this negatively charged cylinder is $-\vec{E}_+(\vec{r} - \vec{s})$ (which works for both inside and outside). In the overlapping area of the two cylinders, the charge density is zero.

We consider the limit $|\vec{s}| \to 0$ while keeping the product $q\vec{s} = -\vec{P}$ constant, which represents the volume density of the dipole moments (i.e. the polarisation). The field inside can then be calculated as

$$\vec{E}_\mathrm{inside} = \vec{E}_+(\vec{r}) + \vec{E}_-(\vec{r}) = \vec{E}_+(\vec{r}) - \vec{E}_+(\vec{r} - \vec{s}) = -\frac{1}{2\varepsilon_0}\vec{P}, \tag{43}$$

which is homogeneous. Outside, the field is given by

$$\vec{E}_\mathrm{outside} = \vec{E}_+(\vec{r}) - \vec{E}_+(\vec{r} - \vec{s}) = \frac{1}{2\varepsilon_0} q R^2 \left(\frac{\vec{r}}{r^2} - \frac{\vec{r} - \vec{s}}{|\vec{r} - \vec{s}|^2}\right).$$

Expanding the second term in the bracket up to first order ($|\vec{s}| \ll |\vec{r}|$):

$$\frac{\vec{r} - \vec{s}}{|\vec{r} - \vec{s}|^2} \approx \frac{\vec{r} - \vec{s}}{r^2 - 2\vec{r}\vec{s}} \approx \frac{\vec{r} - \vec{s}}{r^2}\left(1 + 2\frac{\vec{r}\vec{s}}{r^2}\right).$$

Substituting this into the formula of $\vec{E}_\mathrm{outside}$ and simplifying:

$$\vec{E}_\mathrm{outside} = \frac{1}{2\varepsilon_0} R^2 \frac{2\vec{r}(\vec{r}\vec{P}) - r^2\vec{P}}{r^4}.$$

This is the field of an ideal two-dimensional electric dipole. From this general formula we can obtain an expression for the field along the $y$ axis:

$$\vec{E}_\mathrm{outside} = -\frac{1}{2\varepsilon_0}\vec{P}\left(\frac{R}{r}\right)^2. \tag{44}$$

The normal component of this field exhibits discontinuity $\sigma/\varepsilon$ at the boundary of the cylinder given by the surface charge density $\sigma$, found again from the superposition of the two cylinders: the non-overlapping region has the shape of a crescent moon of width $s$ in the $x$ direction, where $\varphi$ denotes the angle between the radius direction and the $x$-axis. Hence the surface charge density is $\sigma = qt = P\cos\varphi$. Due to Gauss's law, the radial electric field jumps by $\{E_r\} = \sigma/\varepsilon_0$. This corresponds to a jump in the magnitude of the current density

$$\{j\} = \varrho^{-1}\sigma/\varepsilon_0 = \varrho^{-1}\sigma P\cos\varphi \tag{45}$$

which must eliminate the discontinuity due to the jump in the radial component of the Lorentz force term in Eq. (42), equal to

$$\{\varrho^{-1}(v \times B)_r\} = -vB\cos\varphi. \tag{46}$$

The cancellation occurs when $\vec{P} = -\vec{e}_x vB\varepsilon_0$. Putting all the results together, we conclude that inside the cylinder the current density in the plate is homogeneous and equal to

$$\vec{j} = \frac{1}{2}\frac{\vec{v} \times \vec{B}}{\varrho}. \tag{47}$$

Outside the cylinder, along the $y$ axis, $\vec{B} = 0$ so that

$$\vec{j} = \frac{\vec{E}_\mathrm{outside}}{\varrho} = -\frac{1}{2\varepsilon_0}\vec{P}\left(\frac{R}{r}\right)^2\frac{1}{\varrho} = -\frac{1}{2}\frac{\vec{v} \times \vec{B}}{\varrho}\left(\frac{R}{r}\right)^2. \tag{48}$$

The graph (fig. 3 of the source) plots the current density along the $y$ axis: a constant value $+\frac{vB}{2\varrho}$ in the region $-R \le y \le R$, falling off as $\sim 1/r^2$ (with magnitude $\frac{vB}{2\varrho}(R/r)^2$ but opposite sign) outside, with kinks at $y = \pm R$.

### Part c ($\sim$2 pts)

The current inside the magnetic field contributes to the force. The force acting on an infinitesimal volume element $\mathrm{d}V$ of the metal slab is given by

$$\mathrm{d}\vec{F} = \vec{j}_\mathrm{inside} \times \vec{B}\,\mathrm{d}V.$$

Since $\vec{j}_\mathrm{inside}$ and $\vec{B}$ are uniform in the region of non-zero $\vec{B}$, and perpendicular, the integral simplifies to

$$\vec{F} = \vec{j}_\mathrm{inside} \times \vec{B} \int \mathrm{d}V = \vec{j}_\mathrm{inside} \times \vec{B}\, V = \vec{j}_\mathrm{inside} \times \vec{B}\, \pi R^2 \delta.$$

Using the previous result for the current density we get

$$\vec{F} = \frac{\pi R^2 \delta}{2\varrho}(\vec{v} \times \vec{B}) \times \vec{B} = -\frac{\pi R^2 \delta}{2\varrho}B^2 \vec{v}.$$

The direction of the force is opposite to the velocity of the plate, in agreement with physical intuition.

**Method 2 (integrating the dissipated power).** Due to energy conservation, the mechanical power provided by the external force is dissipated in the plate in the form of Joule heat:

$$F v = P_\mathrm{dissipated}.$$

The total power of dissipation can be written as an integral over the volume:

$$P_\mathrm{dissipated} = \int_\mathrm{in} \varrho\, j_\mathrm{inside}^2\,\mathrm{d}V + \int_\mathrm{out} \varrho\, j_\mathrm{outside}^2\,\mathrm{d}V.$$

The first integral simplifies due to the constant current density inside the circular region of radius $R$:

$$\int_\mathrm{in} \varrho\, j_\mathrm{inside}^2\,\mathrm{d}V = \varrho\, j_\mathrm{inside}^2 V = \frac{1}{4\varrho}v^2 B^2 \cdot \pi R^2 \delta.$$

To evaluate the second integral, since $j_\mathrm{outside}^2 = \frac{1}{4\varrho^2}R^4\frac{(v^2)^2}{r^4}B$ depends on $r$ only,

$$\int_\mathrm{out} \varrho\, j_\mathrm{outside}^2\,\mathrm{d}V = \int_R^\infty \frac{1}{4\varrho^2}R^4\frac{v^2}{r^4}B^2 \cdot 2\delta\pi r\,\mathrm{d}r = \frac{v^2 B^2 \pi R^4 \delta}{2\varrho}\int_R^\infty \frac{\mathrm{d}r}{r^3} = \frac{v^2 B^2 \pi R^4 \delta}{2\varrho}\frac{1}{2R^2}.$$

It is an interesting coincidence that the power dissipated inside and outside is the same. Now the total power of dissipation is known and the force can be calculated:

$$F = \frac{P_\mathrm{dissipated}}{v} = \frac{\pi R^2 \delta}{2\varrho}B^2 v.$$

### Alternative approach (frame of the plate)

The correct solution can also be carried out in the reference frame of the plate, where the circular region of the magnetic field moves with velocity $-\vec{v}$. The Lorentz force $e\,\vec{v} \times \vec{B}$ is replaced by the Coulomb force $e\vec{E}_B$, where $\vec{E}_B = \vec{v} \times \vec{B}$ is the electric field resulting from the Lorentz transformation. There is no electric field outside the cylinder ($r > R$) at large distances in the $z$ direction from the plate (no $\vec{B}$ nor $\vec{E}$ in the cylinder's frame, so none in the new frame). Outside the cylinder but inside the plate there is an electric field driving the current flow. The tangential electric field cannot be discontinuous at the surface, so outside the cylinder the field $e\,\vec{v} \times \vec{B}$ and the field from charge accumulation combine, and inside the cylinder these two fields add up constructively, recovering the same result.

A further model in the source ("stepping cylinders") analyses two almost-overlapping circles separated by a short time interval $\tau$: any flux change occurs on the rim, giving rise to an induced electric field that drives the currents; applying Faraday's law and Lenz's law reproduces the same induced $E$-field and current pattern.
