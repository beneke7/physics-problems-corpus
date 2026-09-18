---
id: solution-ocr-kevin-zhou-m6sol-p013
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-p013]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 13. A rocket burns fuel at a constant rate to produce a fixed thrust force $F$. The corresponding power $P = F v$ depends on the rocket's velocity, and becomes higher as the rocket moves faster. This is called the Oberth effect, and it has real practical consequences; all else equal, it implies that a rocket should be preferentially fired when the velocity is high. But where does the "extra" power come from?

Solution. When fuel in a stationary rocket is burned, it is ejected out the back of the rocket with a huge kinetic energy. On the other hand, if the rocket is already moving forward, the fuel inside it already has kinetic energy. And once that fuel is ejected, it ends up with less kinetic energy than in the stationary case. These effects allow more of the burnt fuel's chemical energy to go into the kinetic energy of the rocket. (For an explicit calculation, see here.)

We saw a similar problem in M3 with a car viewed from a different reference frame, in which case the source of the extra energy was the Earth itself. In general, the "extra" energy comes from whatever the vehicle pushes on to move itself forward. For a rocket that starts at rest in space, that energy doesn't come for free; the initial kinetic energy of the fuel at later times comes from the firing of the rocket at earlier times.

Note that above, we said that the Oberth effect means the rocket should be fired when its velocity is high. But what is that velocity with respect to? After all, for any rocket, you can find some frame where it's moving fast, and some frame where it isn't moving at all. The answer is that the "correct" frame depends on what you want to do. For example, if you want to escape the solar system, you need to achieve escape velocity in the Sun's frame, because the Sun's gravity dominates.
[4] Problem 14. A rocket with a full fuel tank has a mass $M$ and is initially stationary. The fuel is ejected at a rate $\sigma$, where $\sigma$ has units of kg/s, at a relative velocity of $u$.


(a) If the rocket begins in space, show that the velocity of the rocket when its total mass is $M ^ { \prime }$ is
$$
v = u \log \frac { M } { M ^ { \prime } } .
$$
This is the Tsiolkovsky rocket equation.
(b) Repeat part (a) for a rocket in a uniform gravitational field $g$. Do you get the best final velocity if $\sigma$ is high or low? (Ignore gravity for the rest of this problem.)
(c) In a multi-stage rocket, an empty fuel tank detaches from the rocket once it is used up, after which a second engine starts up. Explain why this can achieve a much higher final velocity than just firing both engines at once. (If you want a quantitative treatment of this, you can see INPhO 2016, problem 3.)
(d) It is desired for a rocket to begin at zero speed and accelerate to speed $v$, to deliver a given payload. If the exhaust comes out with a relative velocity of $u$, how should $u$ be chosen to minimize the fuel energy that must be spent to perform this maneuver? (Hint: let the final mass of the rocket be fixed, since that's the mass of the payload we want to transport. You will have to solve an equation numerically.)
(e) If $u$ has this value, what fraction $\eta$ of the spent fuel's energy ends up in the rocket's final kinetic energy?
(f) Now suppose $u$ can be freely varied over time. Qualitatively, how should it be chosen to maximize $\eta$, and what is the maximum possible value of $\eta$ ?

Solution. (a) Let $p = m v$ be the momentum of the rocket and all the fuel instantaneously inside it. As some fuel of mass $d m$ is ejected from the rocket, the total momentum is conserved, so

$$
d p = ( v - u ) d m .
$$

On the other hand, we also have

$$
d p = m d v + v d m .
$$

Combining these equations gives

$$
m d v = - u d m
$$

so integrating gives

$$
\log m = - \frac { v } { u } + C .
$$

Fixing $C$ with the initial condition gives the desired result.

(b) The reasoning is similar except that there is now an additional term representing the change in momentum due to the gravitational force. We have $d p + ( - d m ) ( v - u ) = - m g d t$, so $m d v = - u d m - m g d t$. Therefore,
$$
\frac { d m } { m } = - \frac { d v } { u } - \frac { g } { u } d t ,
$$
so $\log m = - v / u - g t / u + \log ( M )$. Solving for $v$ gives
$$
v = u \log \frac { M } { M ^ { \prime } } - \frac { g } { \sigma } \left( M - M ^ { \prime } \right) .
$$
It's better if $\sigma$ is high, since you are constantly losing momentum to gravity.

(c) The idea is that $\frac { M - M _ { 0 } } { M ^ { \prime } - M _ { 0 } } > \frac { M } { M ^ { \prime } }$ where $M _ { 0 }$ is the mass of the ejected tank, so the change in speed is higher. Basically, the empty fuel tank is now dead weight, so ejecting it means you don't waste energy speeding it up.
(d) Let the initial and final masses be $M$ and $M ^ { \prime }$. In order for the rocket to reach a velocity of $v$, $v = u \log \frac { M } { M ^ { \prime } }$, or $M = M ^ { \prime } e ^ { v / u }$.
Now, the energy released by burning a small mass $d m$ of fuel is precisely $( d m ) u ^ { 2 } / 2$. One way to see this is to work in the frame instantaneously moving with the rocket; then the only final energy is in the kinetic energy $( d m ) u ^ { 2 } / 2$ of the ejected fuel itself, since the rocket picks up negligible speed. This energy must have come from the internal energy of the burning of the fuel, and this quantity is the same in all frames, as we've discussed in M3.
Therefore, the total fuel energy burnt is, in any frame,
$$
E = \frac { 1 } { 2 } \left( M - M ^ { \prime } \right) u ^ { 2 } = \frac { 1 } { 2 } M ^ { \prime } \left( e ^ { v / u } - 1 \right) u ^ { 2 }
$$
This is minimized when $d E / d u = 0$ (treating $M ^ { \prime }$ as fixed), which gives
$$
2 u \left( e ^ { v / u } - 1 \right) = v e ^ { v / u } .
$$
Letting $x = v / u$, we need to numerically solve
$$
x = 2 \left( 1 - e ^ { - x } \right) .
$$
This can be done using the method of iteration in P1 (concretely, one plugs $2 \left( 1 - e ^ { - \text {Ans } } \right)$ repeatedly into the calculator) to get $x = 1.5936$. This implies $u = 0.6275 v$.
(e) At the end, the rocket will have a kinetic energy $\frac { 1 } { 2 } M ^ { \prime } v ^ { 2 }$ and the total fuel burnt will be $\frac { 1 } { 2 } M ^ { \prime } \left( e ^ { x } - 1 \right) v ^ { 2 } / x ^ { 2 }$. We divide the former by the latter to get an efficiency
$$
\eta = \frac { x ^ { 2 } } { \left( e ^ { x } - 1 \right) } = 0.6476 .
$$
(f) We should always set $u$ equal to the velocity of the rocket at that moment. Then when the fuel comes out, it's at a dead stop, so all of the kinetic energy burned goes into the rocket. Thus the maximum value of $\eta$ is 100\%. This is called a "perfect rocket", though it's not the kind of thing one would want to use in practice. It's not trivial to change $u$ arbitrarily, from an engineering point of view, and a perfect rocket at low speeds would have low power.

[3] Problem 15. USAPhO 2015, problem B1. A basic, two-step rocket maneuver.
Remark: Patched Conic Approximation
Treating an orbital maneuver exactly, accounting for the gravitational fields of the Sun and all planets, would be very complicated. So in the problems below, we will use the common "patched conic" approximation, where only the gravitational effect of a single object is considered at a time. The reason this makes sense is that, for the vast majority of the volume of the solar system, the Sun's gravity dominates, so we can ignore the planets. The gravity of a planet dominates when we pass close to it, but these encounters are very


brief compared to the period of an entire orbit, so during those encounters we can work in the frame following the planet and ignore the Sun.

To understand when the planet dominates, suppose it has mass $m$ and orbits at radius $R$, while the Sun has mass $M$. Consider a nonrotating coordinate system which accelerates with the planet, and a point a distance $r \ll R$ from the planet, and $R - r$ from the Sun.

At this point, the gravitational acceleration from the planet is $a _ { P } = G m / r ^ { 2 }$. The gravitational acceleration due to the Sun is $a _ { S } = G M / ( R - r ) ^ { 2 } - G M / R ^ { 2 }$, where we subtract $G M / R ^ { 2 }$ because the frame accelerates with the planet. The Sun's effect is subdominant when $a _ { S } \lesssim a _ { P }$, which means $r \lesssim ( m / M ) ^ { 1 / 3 } R$. This is roughly the radius of the Hill sphere.

There are other possible definitions; for example, it turns out that you get the best numeric results if you consider the planet's gravity for $r \lesssim ( m / M ) ^ { 2 / 5 } R$, the so-called sphere of influence. In any case, the point is that there exists a radius $r \ll R$ within which you can ignore the Sun and get an accurate result; for our purposes the exact choice of $r$ won't matter.
