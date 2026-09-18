---
id: solution-ocr-kevin-zhou-r2sol-p005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r2-p005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 5. A particle with mass $M$ and energy $E$ moves towards a detector when it suddenly decays and emits a photon in its direction of motion. The detector measures a photon angular frequency of $\omega$. What was the photon's angular frequency in the rest frame of the decaying particle?

Solution. It's not hard to solve this using four-momentum conservation, but a nice alternative is to use the Doppler shift formula from R1. Letting $p$ be the particle's momentum in the lab frame,

$$
\omega = \omega ^ { \prime } \sqrt { \frac { 1 + v } { 1 - v } } = \omega ^ { \prime } \sqrt { \frac { E + p } { E - p } } = \omega ^ { \prime } \frac { E + p } { \sqrt { E ^ { 2 } - p ^ { 2 } } } = \omega ^ { \prime } \frac { E + p } { M } .
$$

Thus, the answer is

$$
\omega ^ { \prime } = \frac { M } { E + \sqrt { E ^ { 2 } - M ^ { 2 } } } \omega .
$$

If you solve the problem a different way, you might get the equivalent answer

$$
\omega ^ { \prime } = \frac { E - \sqrt { E ^ { 2 } - M ^ { 2 } } } { M } \omega .
$$

[3] Problem 6. USAPhO 2002, problem A2.
Now let's try some more involved problems.
Example 3: Woodhouse 7.5
A particle of rest mass $m$ moves with velocity $\mathbf { u }$ and collides elastically with a second particle, also of rest mass $m$, which is initially at rest. After the collision, the particles have velocities v and w. Show that if $\theta$ is the angle between v and w, then

$$
\cos \theta = \frac { \left( 1 - \sqrt { 1 - v ^ { 2 } } \right) \left( 1 - \sqrt { 1 - w ^ { 2 } } \right) } { v w } .
$$

Solution
First, a remark: in Newtonian mechanics, you learn that in an inelastic collision, the kinetic energy is dissipated into microscopic thermal motion. This often leads students to ask: if we keep track of the motion of all particles in detail, then are all collisions actually perfectly elastic? According to particle physics, the answer is no. You really can lose kinetic energy by converting it to mass-energy, in collisions which change the identity of the particles or produce new particles. Therefore, at particle colliders, we say a collision is elastic if the particles that come out are precisely the same as the ones that came in. For this example, that means the final particles still have rest mass $m$.


Conservation of energy and momentum imply

$$
1 + \gamma _ { u } = \gamma _ { v } + \gamma _ { w } , \quad \gamma _ { u } \mathbf { u } = \gamma _ { v } \mathbf { v } + \gamma _ { w } \mathbf { w } .
$$

To get an expression with $\cos \theta$, we take the norm squared of the momentum equation,

$$
\gamma _ { u } ^ { 2 } u ^ { 2 } = \gamma _ { v } ^ { 2 } v ^ { 2 } + \gamma _ { w } ^ { 2 } w ^ { 2 } + 2 \gamma _ { v } \gamma _ { w } v w \cos \theta .
$$

This can be substantially simplified by noting that $\gamma _ { u } ^ { 2 } u ^ { 2 } = \gamma _ { u } ^ { 2 } - 1$, giving

$$
2 v w \gamma _ { v } \gamma _ { w } \cos \theta = \gamma _ { u } ^ { 2 } - \gamma _ { v } ^ { 2 } - \gamma _ { w } ^ { 2 } + 1 .
$$

The appearance of so many squares motivates us to square both sides of the energy equation,

$$
1 + 2 \gamma _ { u } + \gamma _ { u } ^ { 2 } = \gamma _ { v } ^ { 2 } + \gamma _ { w } ^ { 2 } + 2 \gamma _ { v } \gamma _ { w }
$$

Using this to simplify the right-hand side of the previous equation,

$$
2 v w \gamma _ { v } \gamma _ { w } \cos \theta = 2 \gamma _ { v } \gamma _ { w } - 2 \gamma _ { u } = 2 \left( \gamma _ { v } \gamma _ { w } - \gamma _ { v } - \gamma _ { w } + 1 \right) = 2 \left( \gamma _ { v } - 1 \right) \left( \gamma _ { w } - 1 \right)
$$

where in the second step we used conservation of energy. After solving for $\cos \theta$, we get the desired result. This was a bit of a slog, but it's representative of the hardest calculations you'll ever have to do for special relativity problems.

As a check on that result, note that in the nonrelativistic limit we get $\cos \theta = 0$, indicating a $90 ^ { \circ }$ angle, which you saw in M3. At relativistic speeds, the opening angle gets smaller, which is a manifestation of the "beaming" effect you saw in R1. This is a familiar effect, commonly observed in particle physics experiments.
[3] Problem 7 (Morin 12.6). A ball of mass $M$ and energy $E$ collides head-on elastically with a stationary ball of mass $m$. Show that the final energy of mass $M$ is

$$
E ^ { \prime } = \frac { 2 m M ^ { 2 } + E \left( m ^ { 2 } + M ^ { 2 } \right) } { 2 E m + m ^ { 2 } + M ^ { 2 } } .
$$

This problem is a little messy, but you can save yourself some trouble by noting that $E ^ { \prime } = E$ must be a root of the equation you get for $E ^ { \prime }$.

Solution. Let the answer be $x$. The final momentum is $( E + m , p )$, split between $P _ { M } = \left( x , p _ { M } \right)$ and $P _ { m }$. Now, $P _ { m } = ( E + m , p ) - \left( x , p _ { M } \right)$, so taking the norm squared, we see that

$$
\begin{aligned}
& m ^ { 2 } = ( E + m - x ) ^ { 2 } - \left( \sqrt { E ^ { 2 } - M ^ { 2 } } - \sqrt { x ^ { 2 } - M ^ { 2 } } \right) ^ { 2 } \\
& \Longrightarrow m ^ { 2 } = \left( E ^ { 2 } + m ^ { 2 } + x ^ { 2 } + 2 E m - 2 E x - 2 m x \right) - E ^ { 2 } + M ^ { 2 } - x ^ { 2 } + M ^ { 2 } + 2 \sqrt { \left( E ^ { 2 } - M ^ { 2 } \right) \left( x ^ { 2 } - M ^ { 2 } \right) } \\
& \Longrightarrow 0 = 2 E m - 2 E x - 2 m x + 2 M ^ { 2 } + 2 \sqrt { \left( E ^ { 2 } - M ^ { 2 } \right) \left( x ^ { 2 } - M ^ { 2 } \right) } \\
& \Longrightarrow \left( E ^ { 2 } - M ^ { 2 } \right) \left( x ^ { 2 } - M ^ { 2 } \right) = \left( m x + E x - E m - M ^ { 2 } \right) ^ { 2 }
\end{aligned}
$$

This is manifestly a quadratic in $x$, and we know that one root is $x = E$, so applying Vieta's formulas and some tedious algebra reveals that

$$
x = \frac { 2 m M ^ { 2 } + E \left( m ^ { 2 } + M ^ { 2 } \right) } { 2 E m + m ^ { 2 } + M ^ { 2 } }
$$


as desired.

[3] Problem 8 (Morin 12.7). In Compton scattering, a photon collides with a stationary electron.
![](../../../figures/solution-ocr/2135da3b3ef9dfad65697b41.jpg)
    (a) If the photon scatters at an angle $\theta$, show that the resulting wavelength $\lambda ^ { \prime }$ is given in terms of the original wavelength $\lambda$ by
$$
\lambda ^ { \prime } = \lambda + \frac { h } { m c } ( 1 - \cos \theta )
$$
where $m$ is the mass of the electron.
    (b) While Compton scattering can occur for photons of any frequency, it is usually used in reference to X-rays, which have very high frequencies. Why?

Solution. (a) The original momentum of the system is $( E + m , E , 0 )$ where $E$ is the original energy of the photon. Let $x$ be the new energy of the photon. Then $P _ { \gamma } = ( x , x \cos \theta , x \sin \theta )$, and $P _ { m } = ( E + m , E , 0 ) - x ( 1 , \cos \theta , \sin \theta )$. Taking the norm squared, we see that

$$
\begin{aligned}
m ^ { 2 } & = ( E + m - x ) ^ { 2 } - ( E - x \cos \theta ) ^ { 2 } - x ^ { 2 } \sin ^ { 2 } \theta \\
& \Longrightarrow 0 = 2 E m - 2 E x - 2 m x + 2 E x \cos \theta \\
& \Longrightarrow x = \frac { E m } { m + E ( 1 - \cos \theta ) } = c ^ { 2 } \left( c ^ { 2 } / E + \frac { 1 } { m } ( 1 - \cos \theta ) \right) ^ { - 1 } .
\end{aligned}
$$

Now, $\lambda = h c / x = \lambda + \lambda _ { C } ( 1 - \cos \theta )$ where $\lambda _ { C } = h / m c$.


(b) The wavelength shift is independent of frequency, and since $c = f \lambda$ the frequency shift (which is what we measure directly) is larger if the frequency begins large. The energy loss for visible photons is hardly noticeable, while it is very large for X-rays.
Indeed, for such photons we usually talk about Thomson scattering (as in E7) which does not change the frequency of the photon at all. At the level of relativistic dynamics, Thomson scattering is nothing more than the low-frequency limit of Compton scattering. Incidentally, at even higher frequencies, the result has more subtle corrections due to quantum field theory effects, and the cross section is given by the Klein-Nishina formula.
[3] Problem 9. USAPhO 2017, problem A4. However, to make it a little harder, solve part (a) without assuming $E _ { b }$ is small.


## 2 Optimal Collisions

These collision problems are conceptually simple, but somewhat more mathematically challenging.
Idea 3
The minimum energy configuration of a system of particles with fixed total momentum is the one where they all move with the same velocity. This is easiest to show by boosting to the center of mass frame (i.e. the frame with zero total momentum) and then boosting back.

Example 4: KK 14.3
A high energy photon ( $\gamma$ ray) collides with a proton at rest. A neutral pi meson is produced according to the reaction

$$
\gamma + p \rightarrow p + \pi ^ { 0 } .
$$

What is the minimum energy the $\gamma$ ray must have for this reaction to occur? The rest mass of a proton is 938 MeV and the rest mass of a neutral pion is 135 MeV.

Solution
The total four-momentum is $\left( E + m _ { p } , E \right)$ where $E$ is the energy of the $\gamma$ ray in the lab frame. This four-momentum has norm $2 E m _ { p } + m _ { p } ^ { 2 }$. Crucially, the norms of four-momenta don't change upon changing frames, so the total four-momentum in the center of mass frame is

$$
\left( \sqrt { 2 E m _ { p } + m _ { p } ^ { 2 } } , 0 \right)
$$

because the total spatial momentum vanishes by definition. On the other hand, we also know that the reaction can just barely happen when both the proton and pion are produced at rest in the center of mass frame, with a final four-momentum of $\left( m _ { p } + m _ { \pi } , 0 \right)$. Hence we have

$$
\sqrt { 2 E m _ { p } + m _ { p } ^ { 2 } } = m _ { p } + m _ { \pi }
$$

and plugging in the numbers gives $E = 145 \mathrm { MeV }$. As expected, this is a little bit more than the mass-energy of the pion, because the final system inevitably has some kinetic energy too.
