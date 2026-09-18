---
id: solution-ocr-kevin-zhou-r1sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
A reference frame is a formal object made of rulers and synchronized clocks. The length of an object in a given reference frame isn't necessarily the same thing as how long the object looks, to somebody at rest in the frame using their own eyes. That is different, because one has to account for the time the light needs to travel to the eyes.

Consider a train of rest length $L$ moving with speed $v$ to the right in the ground frame. How long does the train look to somebody standing on the ground directly to the right of it?

Solution
Both ends of the train continually emit light. Suppose two pulses of light, one from each end, hit an observer's eyes simultaneously. Then the apparent length of the train $L _ { \text {app } }$ is the distance between the points where the light pulses were originally launched.

For somebody to the right of the train, the pulse from the left end of the train had to travel an extra distance $L _ { \text {app } }$, so it must have been emitted a time $L _ { \text {app } } / c$ earlier. When the left pulse was emitted, the left end of the train was $v L _ { \text {app } } / c$ behind where it was when the right pulse was emitted. So the apparent length is

$$
L _ { \mathrm { app } } = \frac { L } { \gamma } + \frac { v } { c } L _ { \mathrm { app } } .
$$

Solving this for $L _ { \text {app } }$ gives

$$
L _ { \mathrm { app } } = L \sqrt { \frac { 1 + v / c } { 1 - v / c } } .
$$

Unlike the abstract lab frame length $L / \gamma$, this directly observable length is larger than $L$. (But if the person had been to the left of the train, then instead $L _ { \text {app } } = L \sqrt { ( 1 - v / c ) / ( 1 + v / c ) }$.)

Remark
In most of the problems here, we'll focus on how objects are measured in inertial reference frames, not on how they physically appear to an observer's eyes. This is a complicated but fascinating subject. For instance, it turns out that once one accounts for the light travel time delay, moving objects appear to be rotated. For an interactive simulation, check out the game A Slower Speed of Light (3D) and Velocity Raptor (2D only).

[3] Problem 4. USAPhO 2016, problem A3. Print out the custom answer sheet before starting.
[5] Problem 5. IPhO 2006, problem 2. A nice problem about relativistic visual effects.


## 2 Velocity Addition

Idea 2: Velocity Addition
Again, let frame $S ^ { \prime }$ move with velocity $v \hat { \mathbf { x } }$ with respect to frame $S$. If an object has velocity ( $u _ { x } ^ { \prime } , u _ { y } ^ { \prime }$ ) in frame $S ^ { \prime }$, then the velocity in $S$ is

$$
u _ { x } = \frac { u _ { x } ^ { \prime } + v } { 1 + u _ { x } ^ { \prime } v / c ^ { 2 } } , \quad u _ { y } = \frac { u _ { y } ^ { \prime } } { \gamma \left( 1 + u _ { x } ^ { \prime } v / c ^ { 2 } \right) }
$$

where $\gamma = 1 / \sqrt { 1 - v ^ { 2 } / c ^ { 2 } }$ as usual.

[1] Problem 6 (KK 12.6). A rod of proper length $\ell _ { 0 }$ oriented parallel to the $x$ axis moves with velocity $u \hat { \mathbf { x } }$ in frame $S$. What is the length measured by an observer in frame $S ^ { \prime }$, which, as usual, moves with velocity $v \hat { \mathbf { x } }$ with respect to $S$ ?
Solution. The speed of the rod measured by an observer in $S ^ { \prime }$ is
$$
u ^ { \prime } = \frac { u - v } { 1 - u v / c ^ { 2 } } .
$$
The length contraction will result in an observed length of
$$
\ell ^ { \prime } = \ell _ { 0 } \sqrt { 1 - \left( \frac { u - v } { c - u v / c } \right) ^ { 2 } } .
$$
[2] Problem 7 (Morin 11.16). In frame $S ^ { \prime }$, a particle moves with velocity $\left( 0 , u ^ { \prime } \right)$ as shown at left.
![](../../../figures/solution-ocr/b375c84285a9449cb592c08c.jpg)
Frame $S$ moves to the left with speed $v$, so the situation in $S$ is as shown at right, with the $y$ speed now $u$. Consider a series of equally spaced dotted lines, as shown. By considering the rate at which the particle crosses the dotted lines in each frame, find $u$ in terms of $u ^ { \prime }$ and $v$, and confirm the result agrees with the velocity addition formula.
Solution. Before starting, let's recall how the time dilation formula works. Suppose we have two events with the same $x$ coordinate (such as the ticking of a clock at rest in frame $S$ ), separated by time $\Delta t$. Then applying the Lorentz transformation yields $\Delta t ^ { \prime } = \gamma \Delta t$ for the time separation in the primed frame. Conversely, if we had two events with the same $x ^ { \prime }$ coordinate (such as the ticking of a clock at rest in frame $S ^ { \prime }$ ), then $\Delta t = \gamma \Delta t ^ { \prime }$.
In this problem, the particle isn't at rest in either frame $S$ or $S ^ { \prime }$. But the Lorentz transformations don't do anything to the $y$ coordinate, so the motion in the $y$-direction doesn't matter for the purposes of the above argument. Suppose that in frames $S$ and $S ^ { \prime }$, there is an interval $\Delta t$ and $\Delta t ^ { \prime }$ between crossing adjacent dotted lines, respectively. Since these occur at the same $x ^ { \prime }$ coordinate in frame $S ^ { \prime }$, we have
$$
\Delta t = \gamma \Delta t ^ { \prime } .
$$

Moreover, length in the $y$-direction isn't contracted at all, so

$$
\gamma = \frac { \Delta t } { \Delta t ^ { \prime } } = \frac { u ^ { \prime } } { u } .
$$

Thus, we have

$$
u _ { y } = \frac { u _ { y } ^ { \prime } } { \gamma }
$$

which agrees with the velocity addition formula, when we plug in $u _ { x } ^ { \prime } = 0$.
[3] Problem 8 (Morin 11.58). A person walks very slowly at speed $u$ from the back of a train of proper length $L$ to the front. The total time dilation effect in the train frame can be made arbitrarily small by picking $u$ to be sufficiently small, so that if a person's watch agrees with a clock at the back of the train when he starts, then it also agrees with a clock at the front when he finishes, to arbitrary accuracy.

Now consider this setup in the ground frame, where the train moves at speed $v$. The rear clock reads $L v / c ^ { 2 }$ more than the front, so in view of the preceding paragraph, the time gained by the person's watch during the process must be $L v / c ^ { 2 }$ less than the time gained by the front clock. By working in the ground frame, explain why this is the case. Assume $u \ll v$.

Solution. This is a tricky issue: even though the extra time dilation effect can be made arbitrarily small by making $u$ smaller, doing so would make the effect last for a longer time. In this particular situation, that means the effect doesn't go away even as $u \rightarrow 0$ ! In this respect, it has something in common with the more subtle approximation problems in P1.

Setting $c = 1$, the person in the ground frame has speed and Lorentz factor

$$
w = \frac { u + v } { 1 + u v } , \quad \gamma _ { w } = \gamma _ { u } \gamma _ { v } ( 1 + u v )
$$

so that the time it takes for them to walk across the train is

$$
\Delta t = \frac { L } { \gamma _ { v } } \frac { 1 } { w - v } .
$$

The difference in time dilation factors, on the person's clock versus the train's clocks, leads to a relative change in time reading of

$$
\Delta \tau = \left( \frac { 1 } { \gamma _ { w } } - \frac { 1 } { \gamma _ { v } } \right) \Delta t = \left( \frac { 1 } { \gamma _ { u } ( 1 + u v ) } - 1 \right) \left( \frac { L } { \gamma _ { v } ^ { 2 } } \frac { 1 } { w - v } \right) .
$$

To simplify the second factor, note that

$$
\frac { 1 } { \gamma _ { v } ^ { 2 } ( w - v ) } = \frac { 1 } { \gamma _ { v } ^ { 2 } } \frac { 1 + u v } { u \left( 1 - v ^ { 2 } \right) } = \frac { 1 + u v } { u }
$$

so that we have

$$
\Delta \tau = \frac { L } { u } \left( \frac { 1 } { \gamma _ { u } } - 1 - u v \right) .
$$

We need to be a bit careful in approximating this expression, since the $1 / \gamma _ { u }$ and 1 terms will almost cancel out. So we instead write $1 / \gamma _ { u } = 1 + \mathcal { O } \left( u ^ { 2 } \right)$, giving

$$
\Delta \tau = \frac { L } { u } \left( 1 + \mathcal { O } \left( u ^ { 2 } \right) - 1 - u v \right) = - L ( v + \mathcal { O } ( u ) ) \approx - L v
$$

since we are assuming $u \ll v$. This is precisely the expected result.


## Idea 3: Relativistic Doppler Shift

If a light source with (proper) frequency $f ^ { \prime }$ is moving directly towards you at speed $v$, then in nonrelativistic physics, we would measure a frequency

$$
f _ { \mathrm { nr } } = \frac { f ^ { \prime } } { 1 - v / c } .
$$

In relativity, we also need to account for the source being time dilated, so

$$
f = \frac { f _ { \mathrm { nr } } } { \gamma } = \sqrt { \frac { 1 + v / c } { 1 - v / c } } f ^ { \prime } .
$$

This additional, second-order correction was first measured by Ives and Stilwell, in the late 1930s. (The transverse Doppler effect is more subtle, and we'll come back to it in problem 22.)

[3] Problem 9 (KK 12.9). A slab of glass moves to the right with speed $v \ll c$. A flash of light is emitted from $A$ and passes through the glass to arrive at $B$, a distance $L$ away.
![](../../../figures/solution-ocr/5eda7d64d45486ff7403bfe3.jpg)
In the rest frame of the glass, it has thickness $D$ and the speed of light in the glass is $c / n$. Suppose $n$ is a constant independent of light frequency.
    (a) If you were a $19 ^ { \text {th } }$ century physicist, who didn't know relativity but did know about the index of refraction and Galilean velocity addition, how long would you expect it to take the light to go from $A$ to $B$ ? Keep the lowest order term in $v / c$.
    (b) How long does it actually take the light to go from $A$ to $B$, again to lowest order in $v / c$ ?

This kind of setup could be part of an interference experiment, which would allow the tiny time difference to be effectively measured. Before the advent of special relativity, experiments like these which require relativistic velocity addition were very puzzling. They were interpreted by imagining that materials that slowed down light also partially "dragged" the ether along with it.

Solution. (a) Naively, the light moves with speed $c$ in free space, and speed $v _ { \text {in } } = c / n + v$ inside the slab, by Galilean velocity addition. So when the light is in the slab, the relative speed of the light and slab is exactly

$$
v _ { \mathrm { rel } } = \frac { c } { n } .
$$

Therefore, by routine kinematics, the time spent in the slab is

$$
t _ { \mathrm { in } } = \frac { D } { v _ { \mathrm { rel } } }
$$


during which the light moves forward by $D + v t _ { \text {in } }$. The rest of the time is
$$
t _ { \mathrm { out } } = \frac { L - D - v t _ { \mathrm { in } } } { c } .
$$
Adding these together gives a total time of
$$
T = \frac { L } { c } + D \left( \frac { 1 } { v _ { \mathrm { rel } } } - \frac { 1 } { c } - \frac { v } { c v _ { \mathrm { rel } } } \right) = \frac { L } { c } + \frac { D } { c } \left( n - 1 - \frac { v n } { c } \right) .
$$
(b) The slab length contracts, but this is second order in $v / c$, while we're just interested in the first order effect. The key difference is that because of relativistic velocity addition, the light in the slab moves with speed
$$
v _ { \mathrm { in } } = \frac { c / n + v } { 1 + v / n c } = \frac { c } { n } + \left( 1 - \frac { 1 } { n ^ { 2 } } \right) v + \mathcal { O } \left( v ^ { 2 } / c \right) .
$$
Thus, to leading order in $v / c$, when the light is in the slab, the relative speed of the light and slab is, in the lab frame,
$$
v _ { \mathrm { rel } } \approx \frac { c } { n } - \frac { v } { n ^ { 2 } } .
$$
The rest of the above derivation goes through unchanged, giving
$$
T = \frac { L } { c } + D \left( \frac { 1 } { v _ { \mathrm { rel } } } - \frac { 1 } { c } - \frac { v } { c v _ { \mathrm { rel } } } \right) \approx \frac { L } { c } + \frac { D } { c } \left( n - 1 - \frac { v ( n - 1 ) } { c } \right)
$$
again to first order in $v / c$. (Before the advent of relativity, this result was explained by an "ether drag" coefficient of $1 - 1 / n ^ { 2 }$.)
