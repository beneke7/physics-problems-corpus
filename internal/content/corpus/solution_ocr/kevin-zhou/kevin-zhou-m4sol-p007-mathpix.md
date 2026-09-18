---
id: solution-ocr-kevin-zhou-m4sol-p007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 7. A particle in a uniform vertical gravitational field is constrained to move on a curve $y ( x )$. If $y ( x )$ is a circular arc, then this system is just a simple pendulum, and we know that its period is not perfectly independent of its amplitude. Find a differential equation relating $d y / d x$ and $y$, so that the period of oscillation is exactly $2 \pi / \omega _ { 0 }$ for a fixed parameter $\omega _ { 0 }$, independent of amplitude. (Hint: as a generalized coordinate, use the arc length $s$ along the curve.)
Solution. The reason $s$ is useful is because
$$
K = \frac { 1 } { 2 } m \dot { s } ^ { 2 }
$$
exactly. So, we would get motion with fixed period $2 \pi / \omega _ { 0 }$ if the potential energy had the form
$$
V = \frac { 1 } { 2 } \omega _ { 0 } ^ { 2 } m s ^ { 2 } .
$$
On the other hand, since the system is in a uniform gravitational field, $V = m g y$, so we need
$$
y = \frac { \omega _ { 0 } ^ { 2 } } { 2 g } s ^ { 2 } .
$$

Taking the derivative with respect to $x$ of both sides, we have

$$
\frac { d y } { d x } = \frac { \omega _ { 0 } ^ { 2 } } { g } s \frac { d s } { d x } = \sqrt { \frac { 2 \omega _ { 0 } ^ { 2 } y } { g } } \sqrt { 1 + ( d y / d x ) ^ { 2 } } .
$$

Solving this for $d y / d x$ gives

$$
\frac { d y } { d x } = \sqrt { \frac { y } { \left( g / 2 \omega _ { 0 } ^ { 2 } \right) - y } }
$$

where we took the positive sign to get a proper restoring force. As a check, when $y$ is small, this equation is approximately solved by $y ( x ) = \omega _ { 0 } ^ { 2 } x ^ { 2 } / ( 2 g )$, which in turn is approximately an arc of a circle of radius $L$, where $\omega _ { 0 } ^ { 2 } = g / L$.

Solving the differential equation exactly is a bit nasty, but it turns out to be a cycloid. This fact was first discovered by Huygens, who invented the cycloidal pendulum for accurate timekeeping. It is equivalent to the usual textbook statement that the cycloid is a "tautochrone".

[3] Problem 8 (Cahn). A particle of mass $M$ is constrained to move on a frictionless horizontal plane. A second particle of mass $m$ is constrained to a vertical line. The two particles are connected by a massless string which passes through a hole in the plane.
![](../../../figures/solution-ocr/97b3a89e23235bbacddf474d.jpg)
The system is set up so that the mass $M$ moves in a circle of radius $r$, while the mass $m$ remains still. Show that this motion is stable with respect to small changes in $r$, and find the angular frequency of small oscillations.
Solution. In equilibrium we have
$$
m g = \frac { M v ^ { 2 } } { r } = \frac { L ^ { 2 } } { M r ^ { 3 } }
$$
where $r$ is the radius of the circle, and $L$ is the conserved angular momentum. If the hanging mass goes downward, then $r$ decreases, so the tension in the string increases providing a restoring force; hence the orbit is stable.
To find the angular frequency of small oscillations, we'll use the energy method, with generalized coordinate $r$. The "kinetic energy", which is the part of the energy dependent on $\dot { r }$, is
$$
T = \frac { 1 } { 2 } M \dot { r } ^ { 2 } + \frac { 1 } { 2 } m \dot { r } ^ { 2 } .
$$
The "potential energy", which is the part of the energy dependent on $r$, is
$$
V = m g r + \frac { L ^ { 2 } } { 2 M r ^ { 2 } } .
$$
Note that $L ^ { 2 } / 2 M r ^ { 2 }$ is treated as potential energy here even though it is associated with the motion of the large mass. From the kinetic energy, we see the "effective mass" is $m _ { \text {eff } } = M + m$, as one might expect. From the potential energy, we see the "effective spring constant" is
$$
k _ { \mathrm { eff } } = V ^ { \prime \prime } = \frac { 3 L ^ { 2 } } { M r ^ { 4 } } = \frac { 3 m g } { r } .
$$

Since $k _ { \text {eff } } / m _ { \text {eff } }$ is positive, the motion is stable, and the angular frequency is

$$
\omega = \sqrt { \frac { k _ { \mathrm { eff } } } { m _ { \mathrm { eff } } } } = \sqrt { \frac { 3 g } { r } } \sqrt { \frac { m } { m + M } } .
$$

[4] Problem 9. IPhO 1984, problem 2. If you use the energy methods above, you won't actually need to know anything about fluid mechanics to do this nice, short problem!
Solution. To find the period of oscillation, we will find expressions for the kinetic energy and potential energy associated with the seiching. Refer to the diagram below.
![](../../../figures/solution-ocr/e3dd99f84f7818d3dd9981b8.jpg)
First, to find the potential energy increase when the water is displaced by $\xi$, note that a triangular prism of water has effectively been moved upward, as shown above. The centers of masses of these triangles are $\xi / 3$ from their bases, so the center of mass of the triangle will move up a distance of $2 \xi / 3$. Let the width of the container by $w$. Then the potential energy $U$ will be $2 m g \xi / 3$, where the mass of the triangular prism of water is $m = \frac { 1 } { 2 } \frac { L } { 2 } \xi w \rho$, so
$$
U = \frac { 1 } { 6 } \rho L w g \xi ^ { 2 } .
$$
To find a rough estimate of the kinetic energy, consider the movement of the center of mass alone; this won't get all of the kinetic energy, but it'll get enough to get a reasonable answer. By thinking of the contribution of moving the triangle mentioned above, we have
$$
\begin{gathered}
\Delta x _ { \mathrm { cm } } = \frac { m ( 2 L / 3 ) } { M } = \frac { \frac { 1 } { 4 } L \xi w ( 2 L / 3 ) } { L w h } = \frac { 1 } { 6 } \frac { L \xi } { h } . \\
\Delta y _ { \mathrm { cm } } = \frac { m ( 2 \xi / 3 ) } { M } = \frac { \xi ^ { 2 } } { 6 h } .
\end{gathered}
$$
We see that $\Delta x _ { \mathrm { cm } }$ dominates since $\xi$ is small, so we focus on it. The total mass of the water is
$$
M = \rho L w h
$$
and our approximation for the kinetic energy is
$$
K \approx \frac { 1 } { 2 } M \dot { x } _ { \mathrm { cm } } ^ { 2 } = \frac { 1 } { 2 } \rho L w h \frac { L ^ { 2 } \dot { \xi } ^ { 2 } } { 36 h ^ { 2 } } .
$$
Besides the overall side-to-side center of mass motion of the water, the water also has internal motions that can't be described just in terms of the center of mass moving. However, our result is good enough for the purposes of this problem.

Putting this together yields

$$
E \approx \frac { \rho w L ^ { 3 } } { 72 h } \dot { \xi } ^ { 2 } + \frac { 1 } { 6 } \rho L w g \xi ^ { 2 } = \frac { 1 } { 2 } m _ { \mathrm { eff } } \dot { \xi } ^ { 2 } + \frac { 1 } { 2 } k _ { \mathrm { eff } } \xi ^ { 2 }
$$

and thus a period of

$$
T \approx 2 \pi \sqrt { \frac { L ^ { 2 } } { 12 g h } } .
$$

This is compatible with the data given in the problem statement, up to order-one factors. Your answer may look different, since we've made a lot of approximations throughout the problem; as long as it agrees dimensionally, with the prefactor within an order of magnitude, you can regard it as correct.

This is a very brief taste of the fascinating field of oceanography, which is one of the premier real-world applications of fluid dynamics. For a lot more about seiches and their relatives, see chapter 9 of the Handbook of Coastal and Ocean Engineering.

## 2 Springs and Pendulums

Now we'll consider more general problems involving springs and pendulums, two very common components in mechanics questions. As a first example, we'll use the fictitious forces met in M2.

Example 4: PPP 79
A pendulum of length $L$ and mass $m$ initially hangs straight downward in a train. The train begins to move with uniform acceleration $a$. If $a$ is small, what is the period of small oscillations? If $a$ can be large, is it possible for the pendulum to loop over its pivot?

Solution
The fictitious force in the train's frame due to the acceleration is equivalent to an additional, horizontal gravitational field, so the effective gravity is

$$
\mathbf { g } _ { \text {eff } } = - a \hat { \mathbf { x } } - g \hat { \mathbf { y } } .
$$

For small oscillations, we know the period is $2 \pi \sqrt { L / g }$ in ordinary circumstances. By precisely the same logic, it must be replaced with

$$
T = 2 \pi \sqrt { \frac { L } { g _ { \mathrm { eff } } } } = \frac { 2 \pi \sqrt { L } } { \left( g ^ { 2 } + a ^ { 2 } \right) ^ { 1 / 4 } } .
$$

As $a$ gets larger, the effective gravity points closer to the horizontal. In the limit $g / a \rightarrow 0$, the effective gravity is just horizontal, so the pendulum oscillates about the horizontal. Its endpoints are the downward and upward directions, so it never can get past the pivot.

Here's a follow-up question: if the train can decelerate quickly, how should you stop it so that the pendulum doesn't end up swinging at the end? The most efficient way is to first quickly decelerate to half speed, which, in the frame of the train, provides a horizontal impulse to the pendulum. Then wait a half-period $\pi \sqrt { L / g }$, so that the pendulum's momentum


turns around, and then quickly stop, providing a second impulse that precisely cancels the pendulum's horizontal motion. Tricks like this are used by crane operators to transport loads, and by physicists to transport clouds of ultracold atoms without warming them up.
