---
id: solution-ocr-kevin-zhou-m6sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 8
Consider two planets of mass $m$. If one planet is somehow fixed in place, the other can perform a circular orbit of radius $R$ with period $T$. If both planets are allowed to move, they can simultaneously perform circular orbits of radius $R / 2$ about their center of mass. What is the period of this motion?

Solution
First let's try an explicit solution. In the first case,

$$
\frac { m v ^ { 2 } } { R } = \frac { G m ^ { 2 } } { R ^ { 2 } } , \quad v = \sqrt { \frac { G m } { R } } .
$$

In the second case, we have

$$
\frac { m v ^ { 2 } } { R / 2 } = \frac { G m ^ { 2 } } { R ^ { 2 } } , \quad v = \frac { 1 } { \sqrt { 2 } } \sqrt { \frac { G m } { R } } .
$$

The velocity in this case is a factor of $1 / \sqrt { 2 }$ smaller, but the arc length of the orbit is a factor of 2 smaller, so the period is $T / \sqrt { 2 }$.

We can also handle the problem with reduced mass. Consider the relative position $\mathbf { r } _ { 1 } - \mathbf { r } _ { 2 }$ in the second case, which orbits in a circle of radius $R$. Applying the above idea, we can work in the reduced system. In this system, there is a single mass $\mu = ( 1 / m + 1 / m ) ^ { - 1 } = m / 2$ in a circular orbit of radius $R$, experiencing the same force $G m ^ { 2 } / R ^ { 2 }$, so

$$
\frac { \mu v ^ { 2 } } { R } = \frac { G m ^ { 2 } } { R ^ { 2 } } , \quad v = \sqrt { \frac { 2 G m } { R } } .
$$

The speed is $\sqrt { 2 }$ bigger than in the first case, but the arc length of the orbit is the same, so the period is $T / \sqrt { 2 }$.

Reduced mass is a bit unintuitive, since you need to work in two very different pictures. On the other hand, some people like it because it's mathematically concrete, and can reduce some problems to one-liners. Whether you use it is up to you.
[2] Problem 11 (MPPP 27). Two permanent magnets are aligned on a horizontal frictionless table, separated by a distance $d$. The magnets are held in such a way so that the net force between them is attractive, and there are no torques generated.

If one of the magnets is held and the other is released, the two collide after time $t _ { 1 }$. If instead the roles are reversed, the two collide after time $t _ { 2 }$. If instead both magnets are released from rest, how long does it take for them to collide?

Solution. The fact that magnets are involved doesn't really matter; all that matters is that when the objects have a given separation $r$, they have a fixed total kinetic energy $K ( r )$, in all three scenarios. What differs in each case is the rate of change of the separation between them.

If the magnets have masses $m _ { 1 }$ and $m _ { 2 }$, then in the first and second cases, we have $d r / d t =$


$\sqrt { 2 K / m _ { 1 } }$ and $\sqrt { 2 K / m _ { 2 } }$ respectively. In the final case, momentum conservation gives

$$
m _ { 1 } v _ { 1 } + m _ { 2 } v _ { 2 } = 0 , \quad \frac { 1 } { 2 } m _ { 1 } v _ { 1 } ^ { 2 } + \frac { 1 } { 2 } m _ { 2 } v _ { 2 } ^ { 2 } = K
$$

which implies

$$
\frac { d r } { d t } = \left| v _ { 1 } - v _ { 2 } \right| = \sqrt { 2 K } \left( \sqrt { \frac { m _ { 2 } } { m _ { 1 } \left( m _ { 1 } + m _ { 2 } \right) } } + \sqrt { \frac { m _ { 1 } } { m _ { 2 } \left( m _ { 1 } + m _ { 2 } \right) } } \right) .
$$

In all three cases, $d r / d t$ has the same profile up to an overall constant, and the total time is inversely proportional to this constant. That is, we have

$$
t _ { 1 } = C \sqrt { m _ { 1 } } , \quad t _ { 2 } = C \sqrt { m _ { 2 } } , \quad t = C \left( \sqrt { \frac { m _ { 2 } } { m _ { 1 } \left( m _ { 1 } + m _ { 2 } \right) } } + \sqrt { \frac { m _ { 1 } } { m _ { 2 } \left( m _ { 1 } + m _ { 2 } \right) } } \right) ^ { - 1 }
$$

for some $C$. Solving for $t$ yields

$$
t = \frac { t _ { 1 } t _ { 2 } } { \sqrt { t _ { 1 } ^ { 2 } + t _ { 2 } ^ { 2 } } } .
$$

[3] Problem 12. USAPhO 2012, problem A4.
Remark: Discovering Gravity
In popular science, we are told that Newton understood gravity in a flash of inspiration, after being hit on the head with an apple. You might know that it didn't quite work that way: there was an apple tree in Newton's childhood home, but an apple didn't hit him, and Newton didn't publish his ideas on gravity until decades afterward.

However, the story is an oversimplification in a much more significant way: Newton's law of gravity actually contains many independent insights. For example, you need to realize that gravitational forces occur between pairs of objects, rather than emanating from an object, or reflecting an object's desire to move towards its "natural" place of being. To explain the orbits, you need to understand that the force is radial, not tangential, and moreover that it is not balanced by any other radial force. You need to see that the force acts between all pairs of objects, and not just certain pairs of objects with the right qualities, like iron and magnets, that the force is proportional to mass (i.e. the parameter that shows up in $F = m a$ ) and falls off with distance, and that it occurs "at a distance" with nothing in between.

All of these insights, which we think of as obvious today, were viewed as unintuitive or downright occult by intelligent thinkers of the time. For example, you probably think the astrological idea that Jupiter governs blood and Venus governs phlegm is laughable, as did many $17 ^ { \text {th } }$ century astronomers, but would the idea that the Moon governs the rise and fall of water on Earth sound any more plausible, if you hadn't been told early on that it's true by people you trust? (If you flip this logic around, you can understand why so many people believe in astrology.) Or, going further back to antiquity, if you claimed then that everything is affected by gravity, how could you explain why flames go up? (To explain buoyancy, you would first have to explain how air exerts a massive yet somehow unobservable pressure on everything, why air has mass but doesn't fall, and that buoyant forces for air ex-


ist at all. In the ancient world, there are no helium balloons, and it's hard to make a vacuum.)
Between Galileo and Newton, there were many incremental steps towards the development of universal gravitation. For instance, Cassini proposed that planets orbited in ovals, which are very similar to ellipses, Borelli proposed that Jupiter's moons obeyed Kepler's laws, and Horrocks found that Jupiter and Saturn slightly deviated from Kepler's laws because of their mutual attraction. Newton played an important role by putting everything on a solid foundation, such as by deriving Kepler's first law and the shell theorems. But as you can see from Newton's notebooks, these insights came from years of experience tinkering with concrete calculations, not from a single inspired thought.

In antiquity, the world was full of unexplainable mysteries. Aristotle's best bet was that things fall because they seek their "natural" place. To get from Aristotle's "rocks want to go home" theory to Newtonian mechanics requires not just genius, but many geniuses. And of course, there were just as many steps needed to get from noticing static electricity existed to writing down Coulomb's law, including centuries of homemade experiments with medieval technology. Nothing is trivial in physics.

## 4 Rocket Science

So far you've done some challenging problems, but they haven't exactly been rocket science. But the following questions literally are rocket science!
