---
id: solution-ocr-kevin-zhou-r1sol-p017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 17. In the lab frame, a horizontal stick of proper length $L$ has horizontal speed $v$. There is a horizontal thin sheet which has a hole of length $L$. Since the stick's length is contracted to $L / \gamma$, it easily passes through the hole in the sheet, if the sheet is moved vertically. But in the frame of the stick, the sheet is moving horizontally, so the hole is length contracted instead. Qualitatively explain how the stick can still pass through the hole in this frame, in the following two cases:
    (a) The sheet has a uniform vertical velocity in the lab frame.

(b) The sheet begins at rest at the lab frame, but is pushed upward a small amount when the stick passes over the hole, then ends at rest again.

Solution. The idea behind this classic problem was first proposed by Rindler in 1961, then refined by Shaw in 1962, and incorporated into many textbooks. A detailed solution of Rindler's original version, with illustrations, is given in section 6.4 of Understanding Relativity by Sartori.

(a) The resolution is that the sheet is not horizontal in the stick's frame. The simplest way to see this is to let the $z$-axis be vertical, and consider when different points in the sheet cross the point $z = 0$. In the lab frame, these events are all simultaneous, so they're not simultaneous in the stick's frame, which means that in the stick's frame the sheet is rotated; you can calculate the angle with the Lorentz transformation. (This rotation is closely related to the Thomas precession effect mentioned in problem 13.) Since the sheet isn't horizontal, the hole passes around the stick at an angle, so it fits. For a detailed quantitative solution, see this paper.
(b) The resolution is that the sheet is not straight in the stick's frame. Again, the simplest way to see this is to consider when different points in the sheet start to be raised. In the lab frame, these events are all simultaneous, so they're not simultaneous in the stick's frame. At any given moment in the stick's frame, part of the sheet is still at the lower position, part of the sheet is already at the upper position, and part in between is moving upward while slanted, as in part (a). So, as the sheet moves horizontally, the hole appears to "bend around" the stick, letting it pass through.
This might seem very disturbing. The sheet is always perfectly straight in the lab frame, but it has two kinks in the stick's frame! But this is no more paradoxical than length contraction is. To decide whether a piece of an object is actually deformed, we need to look at it in its rest frame. An rod that's severely length contracted in one frame is in no danger of breaking, and this sheet, which is severely kinked in some frames, is in no danger of tearing.
Here's another example: suppose you have a uniformly rotating cylinder. Then in the frame of an object moving along the axis of the cylinder, the cylinder is twisted because of the loss of simultaneity effect. (But it's not really twisted, in the sense that if you work in the frame locally moving with any piece of the cylinder, it will have no shear stress.)
The lesson is that the classical definition of a rigid body from M8, i.e. that angles and lengths between points on the body always remain the same, doesn't work in special relativity; even if those conditions hold in one frame, they won't necessarily in another.
[4] Problem 18. Here is the statement of the traditional twin paradox.
Bob is an astronaut who leaves home on a rocket with speed $v$. Alice stays home. After time $T$ in Alice's frame, Bob reverses direction and travels home with speed $v$. Who, if either, has aged more?

The obvious answer is that Alice has aged more by time dilation. The trouble is explaining why we can't just work in Bob's frame and conclude that Bob has aged more by time dilation.

(a) Draw a Minkowski diagram for Alice and Bob where Alice's worldline is $x = 0$.
(b) The reason that working in Bob's frame is subtle is that it is not a single inertial frame. Draw $x ^ { \prime }$ and $t ^ { \prime }$ axes for Bob at several points on Bob's worldline. Argue that when Bob turns around,

thereby moving to a different inertial frame, Alice's age jumps upward. (Using the results of chapter 11 of Morin, you can even show that the amount of aging is exactly what is needed, using the Minkowski diagram alone.)

This illustrates why the situation is not symmetric between Alice and Bob. But this resolution of the twin paradox is a little unphysical. It does explain what goes wrong working in Bob's frame, but it's not related to what Bob actually physically sees, which is determined by when photons from Earth reach his eyes; nothing about that changes discontinuously when he turns around.

(c) More physically, let us suppose that Bob continually emits radiation of frequency $f$ (in his frame) towards Alice. Suppose that in Alice's frame, Bob travels with speed $v$, reaches a maximum distance $L$ from Alice, and accelerates quickly to return with speed $v$. If Alice sees $N _ { b }$ wave crests in total during Bob's trip, then Bob has aged by $N _ { b } / f$. Use the relativistic Doppler effect to compute $N _ { b } / f$, working entirely from Alice's perspective.
(d) Now suppose Alice continually emits radiation of frequency $f$ (in her frame) towards Bob. If Bob sees $N _ { a }$ wave crests, use the relativistic Doppler effect to compute $N _ { a } / f$, working entirely from Bob's perspective. If you're careful, this should differ from the answer to (c).
(e) [A] Now consider a trickier example. Suppose Alice and Bob live on a torus, i.e. a spacetime where the point $( x , y , z , t )$ is the same as the point $( x + L , y , z , t )$. Alice stays home, while Bob leaves on a rocket with velocity $v \hat { \mathbf { x } }$. After a while, Bob returns home, without having done any acceleration along the way! It seems like the resolution above does not apply, so who, if either, has aged more? Can you explain the results from Bob's reference frame?

Solution. (a) Here's the result.
![](../../../figures/solution-ocr/8912de2300c110a4d9e7353f.jpg)

(b) Bob's $x ^ { \prime }$ and $c t ^ { \prime }$ axes before and after the acceleration are also displayed. We see that as these axes rotate during the acceleration, Alice's age changes extremely quickly.
This might feel strange, but it's really just an artifact of changing reference frames. As a simpler example, suppose you were a surveyor trying to measure the height of a mountain, which can be done by measuring the angle to its summit with respect to a horizontal level. If

the surveyor then gets on an accelerating car, their horizontal level will tilt, causing the height reading to change extremely quickly. But that doesn't mean people living on the mountain will be flung off! They don't feel anything; it's just the surveyor's notion of horizontal that changed. Similarly, when Bob turns around, his definition of time changes, so that Alice's age "right now" (according to Bob) suddenly changes.
(c) The radiation that was emitted while Bob was moving away from Alice is received by Alice with redshifted frequency
$$
f _ { r } = \sqrt { \frac { 1 - v } { 1 + v } } f .
$$
The radiation that was emitted while Bob was moving towards Alice is received by Alice with blueshifted frequency
$$
f _ { b } = \sqrt { \frac { 1 + v } { 1 - v } } f
$$
Suppose that Alice sees these frequencies for times $t _ { r }$ and $t _ { b }$. Then the answer is
$$
N _ { b } = t _ { r } f _ { r } + t _ { b } f _ { b } .
$$
It remains to compute $t _ { r }$ and $t _ { b }$. Naively we would say $t _ { r } = t _ { b } = L / v$, because that's how long Bob spends moving towards and away from Alice respectively, but this question is about what Alice sees with her eyeballs. The transition point between the two phases is when the radiation that Bob emitted while turning around gets to Alice. In other words,
$$
t _ { r } = \frac { L } { v } + \frac { L } { c } , \quad t _ { b } = \frac { L } { v } - \frac { L } { c } .
$$
Then we have
$$
N _ { b } = \frac { L f } { v } \left( ( v + 1 ) \sqrt { \frac { 1 - v } { 1 + v } } + ( 1 - v ) \sqrt { \frac { 1 + v } { 1 - v } } \right) = \frac { 2 L f } { v } \sqrt { 1 - v ^ { 2 } }
$$
so Bob has aged by $2 L / \gamma v$, exactly as expected. Physically, Alice sees Bob aging in slow motion for more than half the time, and aging in fast motion for less than half the time, with the overall effect of Alice aging more.
(d) Let's define all the terms as in the previous part. Bob turns around when he is a distance $L / \gamma$ (according to him) from Alice. The fundamental difference is that Bob starts seeing the higher frequency the instant he turns around, so
$$
t _ { r } = t _ { b } = \frac { L } { \gamma v } .
$$
Therefore, we have
$$
N _ { a } = \frac { L f } { \gamma v } \left( \sqrt { \frac { 1 - v } { 1 + v } } + \sqrt { \frac { 1 + v } { 1 - v } } \right) = \frac { 2 L f } { \gamma v } \frac { 1 } { \sqrt { 1 - v ^ { 2 } } }
$$
so Alice has aged by $2 L / v$, exactly as expected. Physically, Bob sees Alice aging in slow motion for half the time, and aging in fast motion for half the time, with the overall effect of Alice aging more. Again, note that the fundamental asymmetry is due to Bob being the one accelerating, which is baked into how we computed the $t _ { r }$ and $t _ { b }$.

(e) This example was first considered in 1973 by this paper, and reviewed pedagogically by this paper. In this exotic spacetime, there really is a notion of absolute rest: we can unambiguously say that Bob moved and Alice didn't, so Alice has aged more. The reason is that the torus itself picks out a special frame. Only in Alice's frame is it true that when you wrap around the edge of the torus, you emerge on the other end at the same time. In Bob's frame, this isn't true, by loss of simultaneity. In Bob's frame, Alice gets to the edge of the torus, then emerges out the other edge at a later time, which ultimately makes her older than Bob when she returns.
The more general lesson is that while special relativity restricts the forms of physical laws to have certain symmetries, it doesn't mean that the solutions of the corresponding equations must always have the same symmetry. The dynamics of salt molecules in solution obey perfect rotational symmetry, but when they crystallize, the faces of the crystal pick out special directions. Likewise, as far as we've ever measured, all of the dynamics in our universe perfectly obey the Lorentz symmetry of special relativity, but the cosmic microwave background radiation does provide an absolute rest frame.

## Remark

The above problem on the twin paradox is quite long. Every physics textbook that covers relativity mentions the twin paradox, and Morin even has a whole appendix with five different resolutions of it. But it's not that hard to resolve, so why spend so much energy on it?

The answer is that seemingly intelligent people really can get stuck on these things for years, or even decades. As an example, consider the honored English astronomer and philosopher Herbert Dingle. Dingle wrote several textbooks, served as president of the Royal Astronomical Society, and even wrote popular essays introducing relativity. But late in life, he started to believe that relativity could not explain the twin paradox.

Dingle's arguments contained thousands of words of vague, equation-free prose. Here's the simplest mathematical formalization of what he meant. In the Lorentz transformations

$$
x ^ { \prime } = \gamma ( x - v t ) , \quad t ^ { \prime } = \gamma ( t - v x ) , \quad x = \gamma \left( x ^ { \prime } + v t ^ { \prime } \right) , \quad t = \gamma \left( t ^ { \prime } + v x ^ { \prime } \right) ,
$$

we notice that if we set $x = 0$, then $t ^ { \prime } = \gamma t$, while if we set $x ^ { \prime } = 0$, then $t = \gamma t ^ { \prime }$. Therefore, aging in the twin paradox must be symmetric, $\gamma = 1 / \gamma$. However, this implies $\gamma = 1$, so that time dilation doesn't happen at all, and relativity collapses.

Dingle continued pushing this for the rest of his life, writing endless letters and articles, and even publishing a rambling book, Science at the Crossroads, which warned of the grave dangers of trusting relativity. Today, it is a favorite of flat Earthers. And it's far from the only example. For instance, there was a book published in 1930s Germany called $A$ Hundred Authors Against Einstein, where an army of philosophers argued that relativity had to be wrong, e.g. because it contradicted the metaphysical system of the native German, $18 { } ^ { \text {th } }$ century philosopher Immanuel Kant. Kant's ideas about space and time, they said, could be proven true by verbal reasoning alone, so any theory or experiment saying otherwise had to be wrong.


If there's a lesson to be drawn from this bizarre history, it's that the ability to write or speak is not the same as the ability to think. People can churn out pages of flowing prose without ever having a single coherent thought. Physicists learn to think by solving well-defined problems mathematically. Many others never gain this skill, and spend their whole lives drunkenly stumbling from word to word. The real tragedy is that such people often grow to believe that no better method of reasoning can exist.

## 4 Four-Vectors

Idea 4
A four-vector $V ^ { \mu }$ is a set of four quantities $\left( V ^ { 0 } , V ^ { 1 } , V ^ { 2 } , V ^ { 3 } \right)$ that transform in the same manner as $( c t , x , y , z )$. The inner product of two four-vectors is defined as

$$
V \cdot W = V ^ { 0 } W ^ { 0 } - V ^ { 1 } W ^ { 1 } - V ^ { 2 } W ^ { 2 } - V ^ { 3 } W ^ { 3 } .
$$

It is invariant under Lorentz transformations. By convention, $V \cdot W$ is also written as $V ^ { \mu } W _ { \mu }$.
