---
id: solution-ocr-kevin-zhou-m5sol-p026
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m5-p026]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 26. Using a physical pendulum, one can measure the acceleration due to gravity as
$$
g = \frac { 4 \pi ^ { 2 } } { T ^ { 2 } } \frac { I } { m d } .
$$
In practice, $I$ is not very precisely known, since it depends on the exact shape of the material. Kater found an ingenious way to circumvent this problem. We pivot the pendulum at an arbitrary point and measure the period $T$. Next, by trial and error, we find another pivot point which has the same period, which lies at a different distance from the center of mass.
    (a) Show that
$$
g = \frac { 4 \pi ^ { 2 } L } { T ^ { 2 } }
$$
where $L$ is the sum of the lengths from these points to the center of mass. This allows a measurement of $g$ without knowledge of the moment of inertia about the center of mass.
    (b) When the two pivot points lie on a line, on opposite sides of the center of mass, then $L$ is simply the distance between the pivot points, which can be measured quite precisely, removing the need to find the center of mass. However, we do have to be a bit careful. Show that the formula in part (a) gives a totally wrong answer for a uniform cylinder of length $L$, with pivot points at its two ends. What's going on, and how can we fix the problem?

Solution. (a) Using the parallel axis theorem where $I _ { c }$ is the moment of inertia about the center of mass and $x _ { 1 }$ and $x _ { 2 }$ are the distances between the pivots and center of mass,

$$
I _ { 1 } = I _ { c } + m x _ { 1 } ^ { 2 } , \quad I _ { 2 } = I _ { c } + m x _ { 2 } ^ { 2 } .
$$

For them to have the same period $T$, then the ratio $I / x = m g T ^ { 2 } / 4 \pi ^ { 2 }$ must be the same, so

$$
\frac { I _ { 1 } } { x _ { 1 } } = \frac { I _ { 2 } } { x _ { 2 } } .
$$

Combining these equations, we find

$$
I _ { c } \left( \frac { 1 } { x _ { 1 } } - \frac { 1 } { x _ { 2 } } \right) = m \left( x _ { 2 } - x _ { 1 } \right) .
$$

Since $x _ { 1 } \neq x _ { 2 }$, we can divide by $x _ { 2 } - x _ { 1 }$ and find $I _ { c } = m x _ { 1 } x _ { 2 }$. Thus,

$$
\frac { I _ { 1 } } { m x _ { 1 } } = \frac { m x _ { 1 } x _ { 2 } + m x _ { 1 } ^ { 2 } } { m x _ { 1 } } = x _ { 1 } + x _ { 2 } = L .
$$

The answer follows straightforwardly,

$$
g = \frac { 4 \pi ^ { 2 } } { T ^ { 2 } } \frac { I } { m x _ { 1 } } = \frac { 4 \pi ^ { 2 } L } { T ^ { 2 } } .
$$

(b) For this system, we know that
$$
g = \frac { 4 \pi ^ { 2 } } { T ^ { 2 } } \frac { I } { m d } = \frac { 4 \pi ^ { 2 } } { T ^ { 2 } } \frac { m L ^ { 2 } / 3 } { m ( L / 2 ) } = \frac { 2 } { 3 } \frac { 4 \pi ^ { 2 } L } { T ^ { 2 } }
$$
which is completely different from the result in part (a). Looking back at the solution to part (a), it is because we had to divide by $x _ { 1 } - x _ { 2 }$ at some point, which is invalid if $x _ { 1 } = x _ { 2 }$. (Or, if we don't divide, then we just get the trivial equation $0 = 0$, which provides no information.) Kater's pendulum will always work if the pivot points are both on the same side of the center of mass, as then we automatically have $x _ { 1 } \neq x _ { 2 }$. For pivots with the center of mass in between, we need to ensure that $x _ { 1 } \neq x _ { 2 }$, which means the object can't be perfectly symmetric. In practice, people address this by just putting an extra weight on one end of the rod.
[3] Problem 27. USAPhO 1999, problem A4.
[3] Problem 28. USAPhO 2011, problem B2.
[3] Problem 29. USAPhO 2002, problem B1. An unusually tricky early USAPhO problem.
[4] Problem 30 (IPhO 1982). A coat hanger can perform small oscillations in the plane of the figure about the three equilibrium figures shown.
![](../../../figures/solution-ocr/16187ade17c1b452645e9aec.jpg)
![](../../../figures/solution-ocr/4dfcb6ab57f85c5e35b5adb7.jpg)
In the first two figures, the long side is horizontal. The other two sides have equal length. The period of oscillation is the same in all cases. The coat hanger does not necessarily have uniform density. Where is the center of mass, and how long is the period?

Solution. See the official solutions of IPhO 1982, problem 2.

[4] Problem 31 (APhO 2007). A uniform ball of mass $M$ and radius $r$ is encased in a thin spherical shell, also of mass $M$. The shell is placed inside a fixed spherical bowl of radius $R$, and performs small oscillations about the bottom. Assume that friction between the bowl and shell is very large, so the shell essentially always rolls without slipping.
The ball is made of an unusual material: it can quickly transition between a liquid and solid state. When the ball is in the liquid state, it has no viscosity, and hence no friction with the shell. When the ball is in the solid state, it rotates with the shell.
    (a) Find the period of the oscillations if the ball is always in the solid state.
    (b) Find the period of the oscillations if the ball is always in the liquid state.
    (c) The ball is now set so that it instantly switches to the liquid state whenever it starts moving downward, and instantly switches to the solid state whenever it starts moving upward. If the initial amplitude of oscillations is $\theta _ { 0 }$, find the amplitude after $n$ oscillations.

Solution. (a) In the solid state, the inside rotates with the shell, so the moment of inertia is

$$
I = \frac { 2 } { 5 } M r ^ { 2 } + \frac { 2 } { 3 } M r ^ { 2 } = \frac { 16 } { 15 } M r ^ { 2 } .
$$

The rolling without slipping condition means $v = \omega r$, so the total kinetic energy is

$$
K = \frac { 1 } { 2 } ( 2 M ) v ^ { 2 } + \frac { 1 } { 2 } I \omega ^ { 2 } = M v ^ { 2 } + \frac { 8 } { 15 } M v ^ { 2 } = \frac { 23 } { 15 } M v ^ { 2 } .
$$

If the angle between the line between the centers of the bowl and ball and the vertical is $\theta$, then $v = ( R - r ) \dot { \theta }$, and the potential energy is

$$
U = 2 M g ( R - r ) ( 1 - \cos \theta ) \approx M g ( R - r ) \theta ^ { 2 } .
$$

Since both the kinetic and potential energy are quadratic, this is simple harmonic motion. As we saw in M4, if we write the total energy as

$$
E = \frac { 1 } { 2 } m _ { \mathrm { eff } } \dot { \theta } ^ { 2 } + \frac { 1 } { 2 } k _ { \mathrm { eff } } \theta ^ { 2 }
$$

then the period of oscillations is

$$
T = 2 \pi \sqrt { \frac { m _ { \mathrm { eff } } } { k _ { \mathrm { eff } } } } = 2 \pi \sqrt { \frac { 23 ( R - r ) } { 15 g } } .
$$


(b) The only difference here is that the liquid will no longer rotate, so the first term in the moment of inertia above will no longer contribute. Then the kinetic energy is
$$
K = \frac { 23 } { 15 } M v ^ { 2 } - \frac { 1 } { 5 } M v ^ { 2 } = \frac { 4 } { 3 } M v ^ { 2 }
$$
which implies, by the same logic as in part (a), that
$$
T = 2 \pi \sqrt { \frac { 4 ( R - r ) } { 3 g } } .
$$

(c) When the ball goes from solid to liquid, the entire ball is at rest, so no energy is lost. On the other hand, when the ball switches from liquid to solid, the material inside the ball must suddenly start rotating with the shell. This is an angular inelastic collision, where energy is lost, so we expect the amplitude to decay.
Let's suppose that just before the ball switches from liquid to solid, it has an angular velocity $\omega _ { i }$. Then the total energy is
$$
E _ { i } = \frac { 4 } { 3 } M r ^ { 2 } \omega _ { i } ^ { 2 }
$$
by the work we did in part (b). As the material solidifies, the angular momentum about the ball's contact point with the bowl is conserved. Let the final angular velocity be $\omega _ { f }$.
The initial moment of inertia of the shell about the contact point is
$$
I _ { i } = \frac { 2 } { 3 } M r ^ { 2 } + M r ^ { 2 } = \frac { 5 } { 3 } M r ^ { 2 } .
$$
The shell is instantaneously rotating about the contact point, and so contributes angular momentum $I _ { i } \omega _ { i }$. The liquid is only in translational motion, so it contributes angular momentum $M v _ { i } r = M \omega _ { i } r ^ { 2 }$. Thus, the total angular momentum is
$$
L _ { i } = I _ { i } \omega _ { i } + M \omega _ { i } r ^ { 2 } = \frac { 8 } { 3 } M r ^ { 2 } \omega _ { i } .
$$
After the transition, both the shell and ball will rotate about the contact point, and the moment of inertia is
$$
I _ { f } = \frac { 5 } { 3 } M r ^ { 2 } + \frac { 2 } { 5 } M r ^ { 2 } + M r ^ { 2 } = \frac { 46 } { 15 } M r ^ { 2 } .
$$
Conserving the angular momentum gives
$$
\frac { 8 } { 3 } M r ^ { 2 } \omega _ { i } = \frac { 46 } { 15 } M r ^ { 2 } \omega _ { f }
$$
and therefore
$$
\omega _ { f } = \frac { 20 } { 23 } \omega _ { i } .
$$
Since the energy is $E = \omega L / 2$, this means
$$
E _ { f } = \frac { 20 } { 23 } E _ { i } .
$$
The angular amplitude $\theta \propto \sqrt { E }$, so the amplitude decreases by a factor of $\sqrt { 20 / 23 }$ after each collision. But there are two collisions per oscillation, so after $n$ oscillations, the amplitude is
$$
\theta _ { n } = \theta _ { 0 } \left( \frac { 20 } { 23 } \right) ^ { n } .
$$
