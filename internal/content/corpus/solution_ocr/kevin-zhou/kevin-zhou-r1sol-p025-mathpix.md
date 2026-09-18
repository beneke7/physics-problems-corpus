---
id: solution-ocr-kevin-zhou-r1sol-p025
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p025]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 25. A rocket starts from rest in the lab frame at the origin, then accelerates with uniform proper acceleration $a _ { 0 }$ (i.e. as measured by an accelerometer on the ship).
    (a) Show that the acceleration measured in the lab frame is $a _ { 0 } / \gamma ^ { 3 }$. (We already proved this more generally in problem 23, but try to do this more explicitly by working in the comoving frame, then going back to the lab frame.)
    (b) Find the speed of the rocket ship in the lab frame as a function of time $t$ in the lab frame, and as a function of the proper time $\tau$ elapsed on the rocket.
    (c) Find $t ( \tau ) , x ( t )$, and $x ( \tau )$, and comment on their limits.
    (d) If a light beam starts a distance $d > d _ { 0 }$ behind the rocket at time $t = 0$, it will never catch up to the rocket. Find the value of $d _ { 0 }$.

Solution. (a) Suppose the rocket has speed $v$ in the lab frame, and now consider the momentarily comoving frame $S ^ { \prime }$ moving with speed $v$. In that frame, in time $d t ^ { \prime }$, the rocket accelerates from zero speed to speed $a _ { 0 } d t ^ { \prime }$. Then the new speed in the lab frame is the result of relativistically adding velocities $v$ and $a _ { 0 } d t ^ { \prime }$,

$$
\frac { v + a _ { 0 } d t ^ { \prime } } { 1 + v a _ { 0 } d t ^ { \prime } } = v + a _ { 0 } d t ^ { \prime } - v ^ { 2 } a _ { 0 } d t ^ { \prime } + \mathcal { O } \left( d t ^ { 2 } \right) .
$$

Therefore, we have

$$
\frac { d v } { d t } = a _ { 0 } \left( 1 - v ^ { 2 } \right) \frac { d t ^ { \prime } } { d t } = a _ { 0 } \left( 1 - v ^ { 2 } \right) ^ { 3 / 2 } = \frac { a _ { 0 } } { \gamma ^ { 3 } }
$$

as desired.


(b) Separating and integrating, we have
$$
a _ { 0 } t = \int _ { 0 } ^ { v } \frac { d v } { \left( 1 - v ^ { 2 } \right) ^ { 3 / 2 } } = \frac { v } { \sqrt { 1 - v ^ { 2 } } }
$$
by a trigonometric substitution. (Here and below, we're using an abuse of notation mentioned in M1, where the integration variable is denoted by the same letter as its upper bound.) Then
$$
v ( t ) = \frac { a _ { 0 } t } { \sqrt { 1 + \left( a _ { 0 } t \right) ^ { 2 } } } .
$$
Next, note that the increment of proper time measured by the rocket is $d \tau = d t ^ { \prime }$, because $d t ^ { \prime }$ is always defined in the frame momentarily moving with the rocket. Therefore
$$
\frac { d v } { d \tau } = a _ { 0 } \left( 1 - v ^ { 2 } \right) , \quad a _ { 0 } \tau = \int _ { 0 } ^ { v } \frac { d v } { 1 - v ^ { 2 } } .
$$
Using hyperbolic trig substitution, we have
$$
v ( \tau ) = \tanh \left( a _ { 0 } \tau \right)
$$
which we could also have concluded immediately, since the rapidity changes at rate $a _ { 0 }$.
(c) It's easy to crank these out given the above results. First, note that
$$
d t = \gamma d \tau = \frac { d \tau } { \sqrt { 1 - \tanh ^ { 2 } \left( a _ { 0 } \tau \right) } } = \cosh \left( a _ { 0 } \tau \right) d \tau
$$
Integrating both sides gives
$$
t ( \tau ) = \frac { \sinh \left( a _ { 0 } \tau \right) } { a _ { 0 } } .
$$
Next, we integrate the answer to part (b),
$$
x ( t ) = \int _ { 0 } ^ { t } \frac { a _ { 0 } t } { \sqrt { 1 + \left( a _ { 0 } t \right) ^ { 2 } } } d t = \frac { \sqrt { 1 + \left( a _ { 0 } t \right) ^ { 2 } } - 1 } { a _ { 0 } } .
$$
Finally, plugging in our expression for $t ( \tau )$ gives
$$
x ( \tau ) = \frac { \sqrt { 1 + \sinh ^ { 2 } \left( a _ { 0 } \tau \right) } - 1 } { a _ { 0 } } = \frac { \cosh \left( a _ { 0 } \tau \right) - 1 } { a _ { 0 } } .
$$
These results make sense. At small $t$ and $\tau$, they just reduce to the familiar results $t = \tau$ and $x = a _ { 0 } t ^ { 2 } / 2$. At large $t , x ( t )$ increases linearly, since the speed of the rocket approaches the speed of light. What is perhaps most interesting is that at large $\tau , x ( \tau )$ increases exponentially, because of how quickly the time dilation effect increases. If it's possible to make it to another star in a human lifetime, it's actually not that much harder to cross the whole galaxy! This is a neat result, recently highlighted in the 2022 IPhO and the popular book Project Hail Mary.
(d) In the limit $t \rightarrow \infty$, we have $x ( t ) \approx t - 1 / a _ { 0 }$, which implies $d _ { 0 } = 1 / a _ { 0 }$. This is the so-called Rindler horizon. Since it has some features in common with the event horizon of a black hole, this setup is this problem is often used as a toy model in theoretical physics.

[3] Problem 26. USAPhO 2020, problem A3. An unusual problem that tests your understanding of momentarily comoving frames, and higher-dimensional Lorentz transformations. As a warning, this question requires you to make an unstated assumption. The fact that uniformly moving clocks have their time dilated by a factor of $\gamma$ follows directly from the postulates of special relativity. But here you'll have to assume this also holds for accelerating clocks, even though clocks can tell if they're accelerating, and may tick differently. This is called the clock hypothesis. For example, on a roller coaster, a pendulum clock doesn't obey the clock hypothesis, but a quartz watch does. Also, the solution is a bit misleading, so don't worry if you thought about the problem differently as long as you got the same final answers.
[3] Problem 27 (Morin 11.26). The following problem is called Bell's spaceship paradox. It caused a stir at CERN when many particle physicists could not agree on the answer.
Two identical spaceships float in space and are at rest relative to each other. They are connected by a string, which cannot withstand an arbitrary amount of stretching.
![](../../../figures/solution-ocr/f6dfb882cc3a68f3ae24d5b1.jpg)
At a given instant, the spaceships simultaneously (with respect to their initial inertial frame) start accelerating in the same direction along the line between them, with the same constant proper acceleration. Will the string eventually break?
Solution. On one hand, the distance between the rockets is always $L$ in the lab frame, so applying length contraction in reverse, the distance between the two rockets is $\gamma L$ in the co-moving frame, indicating that the string stretches and breaks. On the other hand, in the rocket's frame the two rockets have the same proper acceleration, which suggests their relative velocity is always zero.
The first argument is correct; the string will break. The second argument fails because of the relativity of simultaneity. We can consider, at each moment, the inertial frame comoving with the rear rocket, whose axes are as shown.
![](../../../figures/solution-ocr/fca6e7eadb7f7a95e157d3c9.jpg)
Over time, the $x ^ { \prime }$ axis of this set of inertial frames tilts upward, so the rear rocket sees the front rocket accelerating faster, and hence moving away.
To see this another way, consider discretizing the acceleration, i.e. converting it into a series of rocket pulses. Since the clocks of the rockets are initially synchronized, the first pulses are

simultaneous according to both rockets. But because of the relativity of simultaneity, within the frame moving with the rear rocket after the first pulse, the front rocket does the second pulse earlier, and hence starts to move away. (For a neat visual explanation, see this video.)
[5] Problem 28. APhO 2013, problem 2. This is a challenging question that ties together everything you've learned about kinematics.
