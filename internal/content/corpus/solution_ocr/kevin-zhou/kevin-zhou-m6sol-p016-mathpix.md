---
id: solution-ocr-kevin-zhou-m6sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 16. The classic cosmic speeds. For each part, express your answers in terms of
$$
v _ { 0 } = \sqrt { \frac { G M _ { \text {Earth } } } { R _ { \text {Earth } } } } = 7.9 \mathrm {~km} / \mathrm { s } , \quad u _ { 0 } = \sqrt { \frac { G M _ { \text {Sun } } } { d _ { \text {Sun } } } } = 29.8 \mathrm {~km} / \mathrm { s } .
$$
Neglect the rotation of the Earth about its own axis for all parts except for part (b).
    (a) What is the minimum launch speed required to put a satellite into orbit around the Earth? This is the first cosmic speed. (It's useful to think in terms of speeds because the Tsiolkovsky rocket equation tells us that directly determines the amount of fuel needed. Multistage rocket maneuvers are often described in terms of their "total $\Delta v$ ".)
    (b) If you account for the rotation of the Earth, which has speed $v _ { r }$ at the equator, what is the new minimum speed and how should the satellite be launched?
    (c) What is the minimum launch speed required for a rocket to escape the gravitational field of the Earth? This is the second cosmic speed.
    (d) What is the minimum launch speed required for a rocket to leave the solar system? This is the third cosmic speed. How should the satellite be launched? (Hint: doing this exactly is very hard; instead use the approximation $R _ { \text {Earth } } \ll d _ { \text {Sun } }$. To check, the answer is 16.7 km/s.)
    (e) What is the minimum launch speed required for a rocket to hit the Sun? Assume you cannot make any adjustments to the rocket's path after launch. (To check, the answer is 31.8 km/s.)
    (f) If subsequent adjustments are allowed, the minimum launch speed to hit the Sun can be dramatically reduced. Find the minimum launch speed required to hit the Sun if an infinitesimal adjustment later is allowed.
    (g) Comets orbit very far from the Sun, with nearly zero speed. What is the maximum relative speed with which a comet can impact the Earth?

Solution. Note that $u _ { 0 }$ is the speed the Earth orbits the Sun.


(a) By Newton's second law, $m v ^ { 2 } / R = G M m / R ^ { 2 }$, so the answer is simply $v _ { 0 } = 7.9 \mathrm {~km} / \mathrm { s }$.
(b) Let $v _ { r }$ be the speed of rotation from the earth. To launch from the poles, we need to launch with speed $v _ { 0 }$, but from the equator, we need to launch with only $v _ { 0 } - v _ { r }$, giving 7.4 km/s.
(c) The total energy must be 0, so $- G M m / R + \frac { 1 } { 2 } m v ^ { 2 } = 0$, or $v = \sqrt { 2 } v _ { 0 } = 11.2 \mathrm {~km} / \mathrm { s }$.
(d) We work in two stages: first the rocket leaves the field of the Earth, then it leaves the field of the Sun. This is valid since $R _ { \text {Earth } } \ll d _ { \text {Sun } }$. In fact, this is necessary: we cannot do the problem in a single step using energy conservation, because we would necessarily have to work in a frame where either the Earth or Sun has a significant velocity. Then there may be large changes in the kinetic energy of the Earth or Sun, which can be extremely subtle to deal with. (Recall the problem we had with the accelerating car in M3!)
Once the rocket has left the field of the Earth, its velocity relative to the Sun must be $\sqrt { 2 } u _ { 0 }$. Since the Earth already has velocity $u _ { 0 }$, the minimum relative velocity to the Earth is $( \sqrt { 2 } - 1 ) u _ { 0 }$. Now work in the frame of the Earth for the first stage. If the launch velocity is $v$, then energy conservation gives
$$
\frac { 1 } { 2 } \left( v ^ { 2 } - \left( ( \sqrt { 2 } - 1 ) u _ { 0 } \right) ^ { 2 } \right) = \frac { G M _ { \mathrm { Earth } } } { R _ { \mathrm { Earth } } } = v _ { 0 } ^ { 2 } .
$$
Solving for $v$, we get
$$
v = \sqrt { 2 v _ { 0 } ^ { 2 } + ( 3 - 2 \sqrt { 2 } ) u _ { 0 } ^ { 2 } } = 16.7 \mathrm {~km} / \mathrm { s }
$$
which gives the advertised numeric answer.
If you found this part quite tricky, don't worry: there have been whole papers written about it, and many textbooks that got it wrong, including Halliday and Resnick!
(e) In this case, after leaving the Earth we need zero velocity, so velocity $u _ { 0 }$ relative to the Earth. By similar reasoning, we get
$$
v = \sqrt { 2 v _ { 0 } ^ { 2 } + u _ { 0 } ^ { 2 } } = 31.8 \mathrm {~km} / \mathrm { s } .
$$
(f) The best option is actually to do the procedure of part (d), in order to leave the solar system. After the rocket is a very large distance away, it can perform a very small boost to cancel out its angular momentum and fall into the Sun. This gives an answer of 16.7 km/s. (This solution is the first two thirds of an Edelbaum maneuver, as described in the remark below.)
(g) This is very similar to part (d), but in reverse. Once the comet gets near the Earth, it has speed $\sqrt { 2 } u _ { 0 }$ in the Sun's frame. To get the highest possible relative velocity, this should be directed against the Earth's velocity, giving a relative velocity of $( \sqrt { 2 } + 1 ) u _ { 0 }$ in the Earth's frame. Applying energy conservation until impact gives
$$
\frac { 1 } { 2 } \left( v ^ { 2 } - \left( ( \sqrt { 2 } + 1 ) u _ { 0 } \right) ^ { 2 } \right) = v _ { 0 } ^ { 2 } .
$$
Solving for $v$ gives the remarkably high answer
$$
v = \sqrt { 2 v _ { 0 } ^ { 2 } + ( 3 + 2 \sqrt { 2 } ) u _ { 0 } ^ { 2 } } = 72.8 \mathrm {~km} / \mathrm { s } .
$$

Remark
There's a whole science of multi-stage rocket maneuvers. For example, suppose your goal is to quickly escape the solar system. As you found in part (d) of problem 16, the minimum launch speed necessary is the third cosmic speed. However, you can also start by doing the maneuver of part (e). Once the rocket is very close to the Sun, it'll be moving extremely quickly, which means that a second impulse can provide a huge amount of energy. This is called the Oberth maneuver, as it uses the Oberth effect. Doing it this way costs more fuel, in terms of total $\Delta v$, but can allow the rocket to leave much faster.

In practice, you can only get within some distance $r _ { \text {min } }$ of the Sun without the rocket burning up, so there's a limit to how much you can employ the Oberth effect. Thus, in some cases a three-impulse maneuver, called the Edelbaum maneuver, can be even better. In the Edelbaum maneuver, you begin with a forward impulse to get to a higher elliptical orbit, then perform a backward impulse to drop to $r _ { \text {min } }$. This gives a higher speed at $r _ { \text {min } }$, since the rocket is on an elliptical orbit with higher total energy. Then a final forward impulse can be used to escape the solar system. You can read more about these maneuvers here. However, neither the Oberth or Edelbaum maneuvers have ever been used, because the $\Delta v$ requirement is too high for them to be feasible. For an authoritative reference on rocket maneuvers, see $A n$ Introduction to the Mathematics and Methods of Astrodynamics by Battin.

[4] Problem 17 (MPPP 36). Consider a solar system with two planets, in circular orbits with radii $R _ { 1 }$ and $R _ { 2 } = x R _ { 1 }$, where $x > 1$. A space probe is planned to be launched from the first planet, which we will call the Earth, and use a gravitational slingshot from the second planet to exit the solar system. The goal is to do this with the smallest fuel energy expenditure possible. Assume that all planets orbit in circles in the same plane.
    (a) The space probe is launched so that, after it has exited the gravitational field of the Earth, but before it has moved very far, it has speed $v _ { 0 }$ in the Sun's frame. Furthermore, its velocity is parallel to the Earth's velocity in the Sun's frame. Explain why this direction of launch minimizes the energy needed.
    (b) Assume the space probe arrives near the second planet, with radial and tangential speeds $v _ { r }$ and $v _ { t }$ with respect to the Sun. Find $v _ { r }$ and $v _ { t }$.
    (c) Suppose the planet have speed $v _ { p }$. In terms of $v _ { p } , v _ { r }$, and $v _ { t }$, what is the largest possible speed $v _ { f }$ of the space probe (relative to the Sun) after the gravitational slingshot ends?
    (d) To three significant figures, find the value of $x$ that minimizes the required initial launch speed $v _ { 0 }$, for the probe to be able to escape the solar system.
    (e) Which real solar system planet is closest to this ideal planet?

Solution. (a) We can achieve any velocity relative to the Earth with the same energy expenditure (ignoring the small effect of the Earth's rotation). But what matters for escaping the solar system is the velocity relative to the Sun. This is biggest if the velocity relative to the Earth and the Earth's velocity relative to the Sun are parallel, so that the speeds add.


(b) By angular momentum conservation,
$$
v _ { t } = \frac { v _ { 0 } } { x } .
$$
By energy conservation,
$$
\frac { 1 } { 2 } m v _ { 0 } ^ { 2 } - \frac { G M m } { R } = \frac { 1 } { 2 } m \left( v _ { r } ^ { 2 } + v _ { t } ^ { 2 } \right) - \frac { G M m } { x R } .
$$
This can be solved straightforwardly. Introducing the Earth's speed $v _ { E } = \sqrt { G M / R }$,
$$
v _ { r } = \sqrt { v _ { 0 } ^ { 2 } \left( 1 - \frac { 1 } { x ^ { 2 } } \right) - 2 v _ { E } ^ { 2 } \left( 1 - \frac { 1 } { x } \right) } .
$$
(c) A gravitational slingshot is simply an elastic collision, so as we saw in M3, the best frame to use is the center of mass frame, which in this case is effectively the planet's frame. In this frame the speed of the probe is
$$
v _ { \text {rel } } = \sqrt { \left( v _ { t } - v _ { p } \right) ^ { 2 } + v _ { r } ^ { 2 } } .
$$
As shown in M3, the most general thing that can happen is that the velocity of the probe (in this frame) is rotated.
The final speed of the space probe, relative to the Sun, is a vector of length $v _ { \text {rel } }$ plus the velocity of the planet $v _ { p }$. So the highest possible speed is achieved when these are parallel,
$$
v _ { f } = v _ { p } + \sqrt { \left( v _ { t } - v _ { p } \right) ^ { 2 } + v _ { r } ^ { 2 } } .
$$
(d) Escape velocity is achieved when $v _ { f } = \sqrt { 2 } v _ { p }$. Plugging this in gives
$$
( \sqrt { 2 } - 1 ) v _ { p } = \sqrt { \left( v _ { t } - v _ { p } \right) ^ { 2 } + v _ { r } ^ { 2 } } .
$$
Squaring both sides, we have
$$
( 2 - 2 \sqrt { 2 } ) v _ { p } ^ { 2 } = v _ { r } ^ { 2 } + v _ { t } ^ { 2 } - 2 v _ { t } v _ { p } .
$$
Plugging in the results of part (b),
$$
( 2 - 2 \sqrt { 2 } ) v _ { p } ^ { 2 } = \frac { v _ { 0 } ^ { 2 } } { x ^ { 2 } } + v _ { 0 } ^ { 2 } \left( 1 - \frac { 1 } { x ^ { 2 } } \right) - 2 v _ { E } ^ { 2 } \left( 1 - \frac { 1 } { x } \right) - \frac { 2 } { x } v _ { 0 } v _ { p } .
$$
After a little simplification, and using $v _ { p } = v _ { E } / \sqrt { x }$, this becomes
$$
\frac { v _ { E } ^ { 2 } } { x } ( 2 - 2 \sqrt { 2 } ) = v _ { 0 } ^ { 2 } - 2 v _ { E } ^ { 2 } \left( 1 - \frac { 1 } { x } \right) - \frac { 2 v _ { 0 } v _ { E } } { x ^ { 3 / 2 } } .
$$
Let's work with the dimensionless variable $u = v _ { 0 } / v _ { E }$, which obeys
$$
u ^ { 2 } - \frac { 2 u } { x ^ { 3 / 2 } } + \frac { 2 \sqrt { 2 } } { x } - 2 = 0 .
$$

This is a quadratic in $u$. Applying the quadratic formula and taking the physical sign gives

$$
u = \frac { 1 } { x ^ { 3 / 2 } } + \sqrt { \frac { 1 } { x ^ { 3 } } - \frac { 2 \sqrt { 2 } } { x } + 2 } .
$$

This is the function we want to minimize with respect to $x$. Taking the derivative and setting it to zero is possible, though extremely painful; this yields

$$
x = \frac { 9 + \sqrt { 81 - 24 \sqrt { 8 } } } { 8 } \approx 1.58 .
$$

Alternatively, one can simply perform binary search on a calculator, giving the same result.
(e) This is the closest to Mars, which has $x = 1.52$.

Remark
Above we discussed the Oberth and Edelbaum maneuvers, which use two and three impulses, respectively. In general, if you only deal with the gravity of the Sun, optimal maneuvers never require more than three impulses, so they can't get too complicated. But in reality, it would be impractical to exit the solar system or reach the Sun without also using gravitational slingshots. The Voyager probes used multiple slingshots off the gas giants to do the former, while the Parker Solar Probe did seven gravitational slingshots off Venus to do the latter!

Such trajectories need to be planned years in advance. They require careful adjustment to make sure the rocket reaches the right points at the right times. Even the simplest case of reaching a single desired point at a desired time, which is called Lambert's problem, is already analytically messy, and anything more than that has to be done numerically.

Still, you might be thinking, is this really the hardest stuff in the world, when it just boils down to Newtonian mechanics? Well, as Lee DuBridge, the president of Caltech once said:

I [like] to talk about space to nonscientific audiences. In the first place, they can't check up on whether what you are saying is right or not. And in the second place, they can't make head or tail out of what you are telling them anyway-so they just gasp with surprise and wonderment, and give you a big hand for being smart enough to say such incomprehensible things. And I never let on that all you have to do to work the whole thing out is to set the centrifugal force equal to the gravitational force and solve for the velocity. That's all there is to it!

I'm just being glib here - the moon landing is unquestionably one of the greatest engineering feats in history. The physical laws at play are elementary, but their application is subtle, and the engineering required getting thousands of tricky real-world details right.
