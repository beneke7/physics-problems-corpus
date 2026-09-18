---
id: solution-ocr-kevin-zhou-r2sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r2-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 16. A rocket of initial mass $M _ { 0 }$ starts from rest and propels itself forward along the $x$ axis by emitting photons backward.
(a) Show that the final velocity of the rocket relative to the initial frame is
$$
\frac { v } { c } = \frac { x ^ { 2 } - 1 } { x ^ { 2 } + 1 } = \tanh ( \log x ) , \quad x = \frac { M _ { 0 } } { M _ { f } }
$$
where $M _ { f }$ is the final rest mass of the rocket. (Hint: for this part, no integration is needed.)
(b) More generally, show that if the rocket fuel comes out at a speed $u$ relative to the rocket,
$$
\frac { v } { c } = \frac { x ^ { 2 u / c } - 1 } { x ^ { 2 u / c } + 1 } = \tanh ( ( u / c ) \log x )
$$
where $x$ is defined as above. (Hint: to avoid nasty differential equations, relate $d m$ and $d v$.)
(c) Show that this reduces to the nonrelativistic rocket equation in the limit $u / c \rightarrow 0$.
(d) Show that in the limit $v / c \rightarrow 0$, the result of part (a) also reduces to the nonrelativistic rocket equation with exhaust speed $c$. Why does this work, given that photons are the most relativistic possible things?

Solution. (a) We see that the four momentum goes from $\left( M _ { 0 } , 0 \right)$ to $\left( \gamma M _ { f } , \gamma M _ { f } v \right)$. Since the difference is given by photons, we must have

$$
- \gamma M _ { f } v = \gamma M _ { f } - M _ { 0 } \Longrightarrow \gamma M _ { f } ( 1 + v ) = M _ { 0 } \Longrightarrow \frac { 1 + v } { 1 - v } = x ^ { 2 } .
$$

Solving for $v$ and restoring $c$, we have

$$
\frac { v } { c } = \frac { x ^ { 2 } - 1 } { x ^ { 2 } + 1 }
$$

as desired.

(b) The reason part (a) didn't require integration is that all the emitted photons have the same speed in the original frame, because light always travels at $c$. But in this case, the emitted fuel will have varying speed in the original frame, depending on when it was emitted.
Since our variable $x$ is in terms of mass, it's useful to relate the decrease in mass $d m$ of the rocket with its increase in speed $d v$. Let's consider the very first instant the rocket is on. The decrease in the rocket's energy is $d m$ (the kinetic energy it picks up is proportional to $d v ^ { 2 }$, which is negligible). All of this energy must be in the fuel, which is traveling with speed $u$, which means the mass of the fuel $d m _ { f }$ obeys
$$
d m = \gamma _ { u } d m _ { f }
$$
The momentum carried by this bit of fuel is
$$
d p = \gamma _ { u } u d m _ { f } = u d m .
$$
This is equal to the momentum change of the rocket, $d p = m d v$. So combining everything,
$$
- \frac { d m } { m } = \frac { d v } { u } .
$$
This is exactly the same as the first half of the derivation of the ordinary rocket equation.
This equation holds as long as we're working in the momentarily comoving frame of the rocket; the difference in relativity is that, as we saw in R1, the velocity does not directly add. Instead, rapidity $\phi = \tanh ^ { - 1 } ( v )$ adds, so that $- d m / m = d \phi / u$, which gives a final $\phi = u \log x$.
If you don't remember this fact, we can get the same result with relativistic velocity addition. If the rocket has speed $v$ in the original frame, then after accelerating by $d v$ in its momentarily comoving frame, it ends up with speed
$$
v ^ { \prime } = \frac { v + d v } { 1 + v d v } \approx v + d v - v ^ { 2 } d v = v + \left( 1 - v ^ { 2 } \right) d v
$$
in the original frame. Therefore, in general we have
$$
- \frac { d m } { m } = \frac { 1 } { u } \frac { d v } { 1 - v ^ { 2 } }
$$
and integrating both sides gives
$$
\log x = \frac { 1 } { u } \int _ { 0 } ^ { v } \frac { d v } { 1 - v ^ { 2 } } = \frac { 1 } { 2 u } \int _ { 0 } ^ { v } \frac { d v } { 1 - v } + \frac { d v } { 1 + v } = \frac { 1 } { 2 u } \log \frac { 1 + v } { 1 - v } .
$$
Solving for $v$ gives the result.

(c) We can use the approximation
$$
x ^ { 2 u / c } = e ^ { ( 2 u / c ) \log x } \approx 1 + \frac { 2 u } { c } \log x
$$
to arrive at
$$
\frac { v } { c } \approx \frac { ( 2 u / c ) \log x } { 2 } \approx \frac { u } { c } \log x .
$$
In other words, $v = u \log x$ which is precisely the nonrelativistic rocket equation. (Here we have implicitly assumed that $( u / c ) \log x$ is small, which is equivalent to assuming that the rocket doesn't get to relativistic speeds. If $u / c$ is nonrelativistic, this should be true for any reasonable value of $x$.)
(d) At first glance, this shouldn't make any sense. When $u / c \rightarrow 1$, the rocket fuel is always moving extremely relativistically, so how can we take the nonrelativistic limit? But pressing on, let's consider the limit $v / c \rightarrow 0$. This corresponds to $x \rightarrow 1$, so
$$
v \approx \frac { ( x - 1 ) ( x + 1 ) } { 2 } c \approx ( x - 1 ) c = \frac { M _ { 0 } - M _ { f } } { M _ { f } } c .
$$
On the other hand, the nonrelativistic rocket equation gives
$$
v = u \log \frac { M _ { 0 } } { M _ { f } } = c \log \frac { M _ { 0 } } { M _ { f } } = c \log \left( 1 + \frac { M _ { 0 } - M _ { f } } { M _ { f } } \right) \approx \frac { M _ { 0 } - M _ { f } } { M _ { f } } c
$$
which matches.
Why does this work? The first half of the derivation in part (b) gives precisely the same result as the ordinary rocket equation; the only thing that matters is how much momentum you get from the fuel per energy spent. In the nonrelativistic limit, this ratio is $p / E \approx p / m c ^ { 2 } = u / c ^ { 2 }$. When we apply the nonrelativistic rocket equation to relativistic fuel, we're implicitly assuming $p / E = u / c ^ { 2 }$ for all speeds $u$, but this is actually true in relativity, because the factors of $\gamma$ cancel out! For example, for photons we indeed have $p / E = 1 / c$.
Thus, the only step where we actually need relativity is the velocity addition in the second half of part (b), but this effect is negligible as long as $v / c$ is small, no matter how big $u / c$ is.
[3] Problem 17 (Cahn). An empty box of total mass $M$ and perfectly reflecting walls is at rest in the lab frame. Then $N$ photons are introduced into the box, each with angular frequency $\omega _ { 0 }$ in a standing wave configuration; one can think of these photons as continually bouncing back and forth with velocity $\pm c \hat { \mathbf { x } }$, with zero total momentum.
(a) State what the rest mass $M _ { \text {tot } }$ of the system will be when the photons are present.
(b) Consider the momentum of the system in an inertial frame moving along the $x$ axis with speed $v \ll c$. Using the first order Doppler shift and assuming that at any moment, half the photons are moving left and half the photons are moving right, show that $p = M _ { \mathrm { tot } } v$. This provides a dynamical explanation of exactly how photons contribute to the inertia of an object.
(c) Unfortunately, it is not true that half the photons are moving right at any given time. Show that the fraction of photons moving to the right is modified by an amount of order $v / c$, and find the total momentum accounting for this effect.

(d) [A] The analysis of part (b) is nice and neat, and you can sometimes find it in textbooks. But part (c) shows that this simple analysis is wrong! What's going on? (This requires considering the stress-energy tensor, which is beyond the scope of Olympiad physics.)

Solution. (a) Since $E = m c ^ { 2 }$, the rest mass is

$$
M _ { \mathrm { tot } } = M + \frac { N \hbar \omega _ { 0 } } { c ^ { 2 } } .
$$

(b) Since $v \ll c$, we will use the equation $p = M _ { \text {tot } } v$. We clearly have momentum $M v$ from the box itself. Meanwhile, the photons are Doppler shifted, so their total momentum is
$$
p _ { \gamma } = \frac { N } { 2 } \frac { \hbar \omega _ { 0 } } { c } ( 1 + v / c ) - \frac { N } { 2 } \frac { \hbar \omega _ { 0 } } { c } ( 1 - v / c ) = \frac { N v \hbar \omega _ { 0 } } { c ^ { 2 } } .
$$
Dividing the momentum by $v$, we find the same result as in part (a).
(c) The fraction of photons moving to the right/left is $( 1 \pm v / c ) / 2$, which implies that
$$
p _ { \gamma } = \frac { N } { 2 } \frac { \hbar \omega _ { 0 } } { c } ( 1 + v / c ) ^ { 2 } - \frac { N } { 2 } \frac { \hbar \omega _ { 0 } } { c } ( 1 - v / c ) ^ { 2 } = \frac { 2 N v \hbar \omega _ { 0 } } { c ^ { 2 } } .
$$
This appears to ruin the conclusion of part (b), and there is no other first-order effect to fix it.

Now we resolve the paradox. For simplicity, we'll analyze the system only at first order in $v / c$. There are numerous other effects at second order, such as the relativistic corrections to the Doppler shift and momentum, but these will complicate the analysis without adding much insight.

The resolution is very subtle, so to warm up, let's consider a simpler situation. In R3, you will learn that the charge density and current density can be combined into a four-vector $J ^ { \mu } = ( \rho , \mathbf { J } )$. If you integrate $J ^ { 0 }$ over all of space, you get the total electric charge $Q$. And it can be shown that whenever you integrate the zeroth component of a four-vector over all space, you get a Lorentz scalar. That is, the total charge is the same in all frames.

However, this isn't always true if you don't integrate over all of space. For example, suppose we had a segment of wire with a perfectly steady current flowing through it. In the wire's frame, it's neutral, and each new charge enters the left end as another charge exits the right end. But in a frame with a velocity along the wire, the loss of simultaneity effect implies that the wire has a net charge! That is, "the amount of charge on the wire" is not a Lorentz scalar. (This insight is essential to solving many of the problems in R3.) The amount of charge in a system is only necessarily a Lorentz scalar when there's no current flowing through it.

The same subtlety applies to energy and momentum. The total four-momentum of an isolated system (i.e. through which no external energy or momentum enters or leaves) is indeed a four-vector. That's why, for all the collision problems in this problem set, we could treat the four-momenta of particles long before or after the collision as four-vectors. But the photons in the box are not a closed system, because they are constantly interacting with the box, and as a result their four-momentum is not a four-vector. That's why the total momentum of the photons, in a frame where the box is moving, is not what we expect. However, the total momentum of the photons and box together is exactly what we expect, i.e. it is precisely $M _ { \mathrm { tot } } v$ in the nonrelativistic limit. The rest of the solution will show this explicitly.


To do this properly, we must introduce the stress-energy tensor $T ^ { \mu \nu }$, which is analogous to $p ^ { \mu }$ in the same way that $J ^ { \mu }$ is analogous to $Q$. Concretely, in a one-dimensional universe with only $x$ and $t$ directions, it is

$$
T ^ { \mu \nu } = \left( \begin{array} { l l }
u & S \\
S & \sigma
\end{array} \right)
$$

where the components have the following meanings.

- $T ^ { 00 } = u$ is the energy density.
- $T ^ { 01 } = S$ is the momentum density, i.e. what we must integrate over space to get momentum. We call this $S$ because it coincides with the Poynting vector for a light wave.
- $T ^ { 10 }$ is the current of energy in the $x$ direction. For example, a particle of mass $m$ and velocity $v$ would have $T ^ { 10 } = m v$. It turns out that in general $T ^ { 10 } = T ^ { 01 }$.
- $T ^ { 11 }$ is the current of $x$-momentum in the $x$ direction, i.e. it has units of momentum per time. Physically, a flow of momentum is equivalent to a pressure.

Upon a Lorentz transformation, the stress energy tensor transforms differently from a four-vector. For a four-vector we would have

$$
\binom { x ^ { \prime } } { t ^ { \prime } } = \gamma \left( \begin{array} { c c }
1 & - v \\
- v & 1
\end{array} \right) \binom { x } { t }
$$

but for the stress-energy tensor we have

$$
\left( \begin{array} { l l }
u ^ { \prime } & S ^ { \prime } \\
S ^ { \prime } & \sigma ^ { \prime }
\end{array} \right) = \gamma ^ { 2 } \left( \begin{array} { c c }
1 & - v \\
- v & 1
\end{array} \right) \left( \begin{array} { l l }
u & S \\
S & \sigma
\end{array} \right) \left( \begin{array} { c c }
1 & - v \\
- v & 1
\end{array} \right) .
$$

Expanding to first order in $v$, we have

$$
S ^ { \prime } = ( u + \sigma ) v + \mathcal { O } \left( v ^ { 2 } \right) .
$$

The momentum of the photons is found by integrating $S ^ { \prime }$, giving

$$
p _ { \gamma } = \int _ { 0 } ^ { L / \gamma } S ^ { \prime } d x = L ( u + \sigma ) v + \mathcal { O } \left( v ^ { 2 } \right)
$$

The first term, Luv, is just what we would naively expect by transforming the four-momentum of the photons as a four-vector, and it's the answer we find in part (b). The pressure exerted by the walls yields the additional contribution $v L \sigma$. The energy density in the rest frame is simply $u = N \hbar \omega _ { 0 } / L$, while the pressure exerted by the walls is $\sigma = N \hbar \omega _ { 0 } / L$. Summing the terms gives

$$
p _ { \gamma } = 2 N v \hbar \omega _ { 0 }
$$

just as we found more directly in part (c).
Now we're in a position to see where the extra momentum is. The walls of the box cause a constant current of $x$-momentum to flow rightward through the photons. Hence the internal forces of the box must have an equal and opposite current of $x$-momentum leftward. Thus, by the same argument as above, in the primed frame $p _ { \text {box } }$ contains a contribution $- L \sigma v$ which precisely cancels the unwanted $L \sigma v$ contribution in the photons. Hence the total momentum is indeed

$$
p _ { \text {tot } } = M v + N \hbar \omega _ { 0 } v
$$

as it must be. For a similar setup, see this paper, which considers a capacitor containing an electromagnetic field, modeled classically instead of in terms of photons.


Remark
In Newtonian mechanics, we know that for an isolated system, $\mathbf { p } _ { \text {tot } } = M _ { \text {tot } } \mathbf { v } _ { \mathrm { CM } }$. In relativity, however, the idea of a "center of mass" no longer makes any sense. For example, suppose a particle with mass $m$ decays into two photons. Each of the photons has no mass, so the center of mass is no longer defined! You can always define the mass of an overall system as $\sqrt { E _ { \text {tot } } ^ { 2 } - p _ { \text {tot } } ^ { 2 } }$, and this quantity remains equal to $m$, but it's no longer the sum of the masses of the individual parts. Since you can't break the mass of the system into parts, you can't sum over the parts to define a center of mass.

However, you can still define a "center of energy",

$$
\mathbf { x } _ { \mathrm { CE } } = \frac { \sum _ { i } \mathbf { x } _ { i } E _ { i } } { \sum _ { i } E _ { i } }
$$

where $E _ { i }$ is the energy of particle $i$. It turns out that in relativity, we always have

$$
\mathbf { p } _ { \mathrm { tot } } = \frac { E _ { \mathrm { tot } } } { c ^ { 2 } } \mathbf { v } _ { \mathrm { CE } }
$$

which is called the "center of energy theorem". (Specifically, it comes from applying Noether's theorem to the symmetry of Lorentz boosts.) Of course, this reduces to $\mathbf { p } _ { \text {tot } } = M _ { \text {tot } } \mathbf { v } _ { \mathrm { CM } }$ in the nonrelativistic limit, since in that case almost all the energy is rest energy, $E = m c ^ { 2 }$.

## 4 Relativistic Dynamics

The previous questions could be solved by just using momentum and energy conservation. In this section we'll consider some deeper problems, which require considering the detailed dynamics.

Idea 5
In relativity, the force four-vector is defined as

$$
f ^ { \mu } = \frac { d p ^ { \mu } } { d \tau } .
$$

There's a bit of a subtlety here. In relativity, the invariant mass of a system can change when it absorbs energy. For example, putting a system on the stove gives it energy but not momentum, thereby changing $m = \sqrt { E ^ { 2 } - p ^ { 2 } }$. That's a perfectly valid four-force, but it feels strange to call it a "force".

Thus, we often restrict to "pure" four-forces, which don't change the invariant mass. Since

$$
\frac { d m ^ { 2 } } { d \tau } = \frac { d } { d \tau } ( p \cdot p ) = 2 m u \cdot f
$$

this corresponds to demanding $f \cdot u = 0$. For a pure force, $f ^ { \mu } = m a ^ { \mu }$.


There's another common definition of force, with three-vectors. Since three-accelerations transform in a rather complicated way, as we saw in R1, we define the three-force as

$$
\mathbf { F } = \frac { d \mathbf { p } } { d t } .
$$

The three-force doesn't directly tell us how the energy changes over time, so it's only a useful concept for pure forces. Both F and $f ^ { \mu }$ are common, but they are different even for pure forces ( $F ^ { i }$ and $f ^ { i }$ differ by a factor of $\gamma$ ), so you should carefully track which is being used.

[4] Problem 18. In this problem, we'll derive some properties of the three-force and four-force. For reference, see section 12.5 of Morin.
    (a) Show that for a particle traveling along the $\hat { \mathbf { x } }$ direction,
$$
\mathbf { F } = m \left( \gamma ^ { 3 } a _ { x } , \gamma a _ { y } , \gamma a _ { z } \right) .
$$
This is the relativistic three-vector analogue of $\mathbf { F } = m \mathbf { a }$, but it implies that force is no longer parallel to acceleration, which will be important in the problems below.
    (b) Now let $S ^ { \prime }$ be the momentary rest frame of that particle. In this frame, since the particle is at rest, the nonrelativistic expression $\mathbf { F } ^ { \prime } = m \mathbf { a } ^ { \prime }$ holds. By using the transformation of acceleration derived in R1, show that
$$
\mathbf { F } = \left( F _ { x } ^ { \prime } , F _ { y } ^ { \prime } / \gamma , F _ { z } ^ { \prime } / \gamma \right) .
$$
So transverse forces are reduced, while longitudinal forces are unchanged. Since we derived this using Lorentz transformations alone, it applies to all kinds of forces, including electromagnetic forces, or the tension force from a string.
    (c) Show that the components of the four-force are
$$
f ^ { \mu } = \left( \gamma \frac { d E } { d t } , \gamma \mathbf { F } \right) .
$$
Use the relativistic transformation of the four-force to rederive the result of part (b).
    (d) The four-impulse is defined as
$$
\Delta p ^ { \mu } = \int f ^ { \mu } d \tau .
$$
But you can also consider the Lorentz scalar
$$
\int f ^ { \mu } d x _ { \mu }
$$
This ought to be something nice and simple that you already know about. What is it?

Solution. (a) Using the chain rule and the definition of p,

$$
\mathbf { F } = \frac { d \mathbf { p } } { d t } = \gamma m \mathbf { a } + m \mathbf { v } \frac { d \gamma } { d t } .
$$


Thus, the $y$ and $z$ components in the desired expression are correct, while the $x$ component (i.e. the part parallel to v itself) has an extra contribution due to the second term. We have
$$
\frac { d \gamma } { d t } = \frac { d \gamma } { d v } \frac { d v } { d t } = \gamma ^ { 3 } v a _ { x }
$$
using a result from R1, so
$$
F _ { x } = \gamma m a _ { x } \left( 1 + \gamma ^ { 2 } v ^ { 2 } \right) = m \gamma ^ { 3 } a _ { x }
$$
as desired.
(b) We see that
$$
\mathbf { F } = m \left( \gamma ^ { 3 } a _ { x } , \gamma a _ { y } , \gamma a _ { z } \right) = m \left( \gamma ^ { 3 } a _ { x } ^ { \prime } / \gamma ^ { 3 } , \gamma a _ { y } ^ { \prime } / \gamma ^ { 2 } , \gamma a _ { z } ^ { \prime } / \gamma ^ { 2 } \right) = \left( F _ { x } ^ { \prime } , F _ { y } ^ { \prime } / \gamma , F _ { z } ^ { \prime } / \gamma \right)
$$
where we used $\mathbf { F } ^ { \prime } = m \mathbf { a } ^ { \prime }$ in the last step.
(c) We just note that
$$
\frac { d } { d \tau } = \frac { d t } { d \tau } \frac { d } { d t } = \gamma \frac { d } { d t }
$$
which gives
$$
f ^ { \mu } = \frac { d p ^ { \mu } } { d \tau } = \gamma \frac { d p ^ { \mu } } { d t } = \left( \gamma \frac { d E } { d t } , \gamma \frac { d \mathbf { p } } { d t } \right) = \left( \gamma \frac { d E } { d t } , \gamma \mathbf { F } \right) .
$$
In the primed frame of part (b), the components are
$$
f ^ { \mu ^ { \prime } } = \left( 0 , \mathbf { F } ^ { \prime } \right) .
$$
Applying a Lorentz transformation to the original frame, we have
$$
f ^ { x } = \gamma F _ { x } ^ { \prime } , \quad f ^ { y } = F _ { y } ^ { \prime } , \quad f ^ { z } = F _ { z } ^ { \prime } .
$$
Since we know that $f ^ { i } = \gamma F _ { i }$, we find
$$
F _ { x } = F _ { x } ^ { \prime } , \quad F _ { y } = F _ { y } ^ { \prime } / \gamma , \quad F _ { z } = F _ { z } ^ { \prime } / \gamma
$$
as desired.
(d) Using the chain rule, we have
$$
I = \int f ^ { \mu } \frac { d x _ { \mu } } { d \tau } d \tau = \int f \cdot u d \tau = \int \frac { 1 } { 2 m } \frac { d m ^ { 2 } } { d \tau } d \tau = \Delta m
$$
so $I$ gives the change in rest mass, which is of course a scalar, and just zero in most cases.

Remark
In popular science books and some older textbooks, relativistic dynamics is introduced using the idea of relativistic mass, $m _ { r } = \gamma m$. This definition implies the simple results $E = m _ { r } c ^ { 2 }$ and $\mathbf { p } = m _ { r } \mathbf { v }$, so these books often say that relativistic dynamics is just like ordinary dynamics, except that moving objects have more mass. This picture is misleading because it breaks down once you go beyond one dimension: in problem 18, you showed that F is not


even parallel to a, so there's no definition of mass that recovers Newtonian mechanics. You instead need separate "transverse" and "longitudinal" relativistic masses,

$$
\mathbf { F } = m _ { \perp } \mathbf { a } _ { \perp } + m _ { \| } \mathbf { a } _ { \| } , \quad m _ { \perp } = \gamma m , \quad m _ { \| } = \gamma ^ { 3 } m .
$$

I think this picture is honestly more confusing than helpful, though. It's better to avoid talking about mass and acceleration too much, and focus more on momentum and energy.
