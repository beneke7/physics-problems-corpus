---
id: eupho-2023-T1
problem: eupho-2023-T1
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

### (a) Drawing a $T(r)$ graph

The graph should present (or clearly infer) the four elements:

- Horizontal tangent at $r = 0$.
- Graph is concave and decreasing in $0 \le r \le \sigma$.
- Graph is convex and decreasing in $\sigma \le r \le a$.
- Nonzero negative slope at $r = a$.

### (b) Finding $T_\mathrm{c}$

**Approach with a direct solution of the heat-transport equation.**

Consider a cylindrical cut of the disk with radius $r$. Let $P_\mathrm{abs}(r)$ be the portion of laser power absorbed within the cylinder. The absorbed power is being transferred as heat towards the outer holder through the circumvent surface $2\pi b r$ of the cylinder. The heat-transport equation reads:

$$-k(2\pi r b)\frac{\mathrm{d}T(r)}{\mathrm{d}r} = P_\mathrm{abs}(r) \tag{1}$$

Depending on $r$, the absorbed power is given by two different expressions. Within the illuminated area $0 \le r \le \sigma$, the incident light intensity $I = P_\mathrm{L}/(\pi\sigma^2)$ is constant, so the absorbed power is:

$$P_\mathrm{abs}(r) = I\pi r^2 = A P_\mathrm{L}\frac{r^2}{\sigma^2} \tag{2}$$

and the solution for $T(r)$ is quadratic in $r$:

$$T(r) = T_\mathrm{c} - \frac{A P_\mathrm{L}\, r^2}{4\pi k b \sigma^2} \tag{3}$$

where $T_\mathrm{c} = T(0)$ is the temperature at the center. It is clear from that expression that the parameter $m$ is:

$$m = -\frac{A P_\mathrm{L}}{4\pi k b \sigma^2} = -1.1 \cdot 10^7\,\mathrm{K\,m^{-2}} \tag{4}$$

Outside the illuminated area, i.e. for $\sigma \le r \le a$, $P_\mathrm{abs}(r) = A P_\mathrm{L}$, which does not depend on $r$. The solution for $T(r)$ is logarithmic in $r$:

$$T(r) = T_\mathrm{h} + \frac{A P_\mathrm{L}}{2\pi k b}\ln\frac{a}{r} \tag{5}$$

where $T_\mathrm{h} = T(a)$ is the temperature of the holder, which is equal to the temperature along the outer rim of the disk. After matching the two solutions at $r = \sigma$ we obtain:

$$T_\mathrm{c} = T_\mathrm{h} + \frac{A P_\mathrm{L}}{4\pi k b}\left[1 + 2\ln\left(\frac{a}{\sigma}\right)\right] = 41\,^\circ\mathrm{C} \tag{6}$$

**Alternative approach – direct piece-wise integration of the heat-transport equation.**

After realizing that $P_\mathrm{abs}(r)$ is given by a piece-wise function:

$$P_\mathrm{abs} = \begin{cases} A P_\mathrm{L}\, r^2/\sigma^2 & \text{if } 0 \le r \le \sigma \\ A P_\mathrm{L} = \text{const} & \text{if } \sigma \le r \le a \end{cases} \tag{7}$$

the student may substitute the given solution $T(r) = T_\mathrm{c} + m r^2$ into the heat-transport equation (1) for $0 \le r \le \sigma$. This gives directly the expression (4) for the parameter $m$. The parameter $T_\mathrm{c}$ could be easily identified with the temperature $T(0)$ at the center of the disk. On the other hand, $T_\mathrm{h} = T(a)$ due to the thermal contact between the rim of the disk and the holder. It follows from the heat-transport equation that:

$$-\frac{\mathrm{d}T(r)}{\mathrm{d}r} = \frac{P_\mathrm{abs}(r)}{2\pi k b r} \tag{8}$$

The piece-wise integration of the two sides of the equation in the interval $0 \le r \le a$ gives:

$$T(0) - T(a) = T_\mathrm{c} - T_\mathrm{h} = \int_0^a \frac{P_\mathrm{abs}(r)}{2\pi k b r}\,\mathrm{d}r = \int_0^\sigma \frac{P_\mathrm{abs}(r)}{2\pi k b r}\,\mathrm{d}r + \int_\sigma^a \frac{P_\mathrm{abs}(r)}{2\pi k b r}\,\mathrm{d}r = \frac{A P_\mathrm{L}}{4\pi k b}\left[1 + 2\ln\left(\frac{a}{\sigma}\right)\right] \tag{9}$$

which is equivalent to the expression (6) for $T_\mathrm{c}$.

### (c) Finding the focal length

**Approach based on the Fermat's principle.**

We consider only the illuminated area of the disk ($0 \le r \le \sigma$). Due to the nonuniform temperature distribution, the index of refraction is also $r$-dependent, which leads to a bending of the light rays incident at nonzero radii $r$, as shown schematically in the figure. As a result, the light rays exiting the disk, converge toward the optical axis, and, eventually, cross it in a certain point at a distance $f$ from the disk.

Since the ray bending is relatively small, one may assume that: (i) all the rays travel approximately the same distance $b$ inside the disk; (ii) any given ray enters and exits the disk at approximately the same height $r_i$ (slit $f \approx r$. Thus, the optical pathway $s(r)$ of a ray, incident at a height $r$ above the optical axis, is:

$$s(r) = n(r)b + \sqrt{f^2 + r^2} = n(r)b + f + \frac{r^2}{2f} \tag{10}$$

According to Fermat's principle, in order that all the rays focus at the same point, it is necessary that $s(r)$ is constant within $0 \le r < \sigma$. In particular, $s(r) \equiv s(0)$ for any $r$, which leads to the condition:

$$b(n(0) - n(r)) = \frac{r^2}{2f} \tag{11}$$

Since:

$$n(0) - n(r) = \gamma(T(0) - T(r)) = -\gamma m r^2 = \gamma|m|r^2 \tag{12}$$

condition (11) is satisfied if

$$\gamma b |m| r^2 \equiv \frac{r^2}{2f} \tag{13}$$

The beam hence focuses at

$$f = \frac{1}{2\gamma b |m|} \tag{14}$$

Taking into account the expression for $m$ derived in part (b), we represent the answer in terms of the known parameters and calculate its numerical value:

$$f = \frac{2\pi k \sigma^2}{\gamma A P} \approx 0.94\,\mathrm{m} \tag{15}$$

Alternatively, the student may state that the optical pathway $s(r)$ does not depend on $r$ and use the condition $\mathrm{d}s/\mathrm{d}r \equiv 0$, which gives:

$$\frac{\mathrm{d}n(r)}{\mathrm{d}r}b + \frac{r}{f} \equiv 0 \tag{16}$$

Since:

$$\frac{\mathrm{d}n(r)}{\mathrm{d}r} = \frac{\mathrm{d}n}{\mathrm{d}T}\frac{\mathrm{d}T}{\mathrm{d}r} = \gamma\, 2 m r \tag{17}$$

we obtain:

$$\frac{r}{f} + 2b\gamma m r \equiv 0 \tag{18}$$

The beam thus focuses at:

$$f = \frac{1}{2\gamma b |m|} = \frac{2\pi k \sigma^2}{\gamma A P} \approx 0.94\,\mathrm{m} \tag{19}$$

**Alternative – approach based on ray/wavefront tracing.**

As a next approximation, the light ray inside the disk can be modeled as a circular arc of a radius $\hbar$ ($\hbar \gg b$, see the figure). As a result, the ray exits the disk at a smaller height $r - \hbar$ above the optical axis ($\hbar \ll r$). The angle of bending $\varphi$ of the ray inside the material is related to $\hbar$ by:

$$\cos\varphi \approx 1 - \frac{\hbar}{R} \tag{20}$$

From the Snell's law it follows that:

$$n(r)\sin(\pi/2) = n(r - \hbar)\sin(\pi/2 - \varphi) = n(r - \hbar)\cos\varphi \tag{21}$$

Up to terms, linear in $\hbar$, one may write that:

$$\cos\varphi \approx \frac{n(r)}{n(r - \hbar)} \approx 1 + \frac{n'(r)\hbar}{n(r)} \tag{22}$$

Thus, the radius of the ray inside the material, is:

$$R = -\frac{n(r)}{n'(r)} \tag{23}$$

and the bending angle is approximately:

$$\varphi \approx \frac{b}{R} = -\frac{n'(r)b}{n(r)} \tag{24}$$

Alternatively the students may trace a small part of the wavefront, associated with two rays, incident at close distances $r$ and $r + \mathrm{d}r$ from the optical axis. By noticing that the wavefront is perpendicular to the rays, the angle $\varphi$ of deviation of the rays is equal to the angle of rotation of the wavefront passing through two closely separated rays. The time-rate $\dot\varphi$, i.e. the angular speed of the wavefront is:

$$\dot\varphi = \mathrm{d}v(r)/\mathrm{d}r = -cn'(r)/n(r)^2 \tag{25}$$

The rays reach the opposite surface of the disk in approximately the same time $t = b n(r)/c$, so the total deflection angle of the wavefront, and of the rays, thereof, is $\varphi = \dot\varphi t = -n'(r)b/n(r)$.

Upon exiting the disk, the ray undergoes additional refraction, and inclines at a new angle $\theta$ relative to the optical axis. The Snell's law in the small-angle approximation ($\sin\theta \approx \theta$, $\sin\varphi \approx \varphi$) states that:

$$\theta = n(r - \hbar)\varphi \approx n(r)\varphi \approx -n'(r)b \tag{26}$$

Since $n'(r) = \gamma T'(r) = 2 m r$, one obtains the following expression for the angle of deviation:

$$\theta = 2\gamma|m|r \tag{27}$$

It is clear from the figure that:

$$f = \frac{r - \hbar}{\tan\theta} \approx \frac{r}{\theta} = \frac{1}{2\gamma|m|b} \tag{28}$$

which reproduces the result obtained by the Fermat's principle.

*Note: A further "Alternatively…" approach in the source considers a ray at a specific height $r_0$, lets $x \in [0, b]$ be the horizontal coordinate of the ray inside the material, and uses Snell's law $n(r)\cos\varphi = n(r_0)$ to set up the differential equation $r(x) = r_0 - \frac{\gamma|m|r_0}{n(r_0)}x^2$, recovering the same $\varphi = \tan\varphi = -r'(x = b) = \frac{2\gamma|m|r_0 b}{n(r_0)}$ and hence the same focal length.*
