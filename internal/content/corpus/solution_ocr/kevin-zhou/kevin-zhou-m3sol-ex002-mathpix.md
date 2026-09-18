---
id: solution-ocr-kevin-zhou-m3sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m3-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
A massless rope passes over a frictionless pulley. A monkey hangs on one side, while a bunch of bananas with exactly the same weight hangs from the other side. When the monkey tries to climb up the rope, what happens?

Solution
Remarkably, the answer doesn't depend on how the monkey climbs, whether slowly or quickly, or symmetrically or not! The total vertical force on the monkey is $T - m g$, so the acceleration of the center of mass of the monkey is $T / m - g$. But since the tension is uniform through a massless rope, the acceleration of the bananas is also $T / m - g$. Therefore, the monkey and bananas rise at the same rate, and meet each other at the pulley.

Now here's a question for you: compared to climbing up a rope fixed to the ceiling, climbing up to the pulley takes twice as much work, because the bananas are raised too. But in both cases, isn't the monkey applying the same force through the same distance? Where does the extra work come from? (The answer involves the ideas at the end of this problem set.)

Example 3: KK 3.14 / INPhO 2014.5
Two men, each with mass $m$, stand on a railway flatcar of mass $M$ initially at rest. They jump off one end of the flatcar with velocity $u$ relative to the car. The car rolls in the opposite direction without friction. Find the final velocities of the flatcar if they jump off at the same time, and if they jump off one at a time. Generalize to the case of $N \gg 1$ men, with a total mass of $m _ { \text {tot } }$.

Solution
In the first case, by conservation of momentum, we have

$$
M v + 2 m ( v - u ) = 0
$$

where $v$ is the final velocity of the flatcar, so

$$
v = \frac { 2 m u } { M + 2 m } .
$$

In the second case, by a similar argument, we find that after the first man jumps,

$$
v _ { 1 } = \frac { m u } { M + 2 m } .
$$


Now transform to the frame moving with the flatcar. When the second man jumps, he imparts a further velocity $v _ { 2 } = m u / ( M + m )$ to the flatcar by another similar argument. The final velocity of the flatcar relative to the ground is then

$$
v = v _ { 1 } + v _ { 2 } = m u \left( \frac { 1 } { M + 2 m } + \frac { 1 } { M + m } \right) .
$$

It might be a bit disturbing that the final speeds and hence energies of the flatcar are different, even though the men are doing the same thing (i.e. expending the same amount of energy in their legs to jump) in both cases.

The reason for the difference is that in the second case, the second man to jump ends up with less energy, since the velocity he gets from jumping is partially cancelled by the existing velocity $v _ { 1 }$. So the extra energy that goes into the flatcar corresponds to less kinetic energy in the men after jumping, which would ultimately have ended up as heat after they slid to a stop. Accounting properly for the kinetic energy of everything in the system solves a lot of paradoxes involving energy, as we'll see below.

In the case of many men, by similar reasoning we have

$$
v = \frac { m _ { \mathrm { tot } } } { M + m _ { \mathrm { tot } } } u
$$

in the first case, while in the second case the answer is the sum

$$
v = \sum _ { i = 1 } ^ { N } \frac { m _ { \mathrm { tot } } u } { N } \frac { 1 } { M + ( i / N ) m _ { \mathrm { tot } } } .
$$

This can be converted into an integral, by letting $x = i / N$, in which case $\Delta x = 1 / N$ and

$$
v = \sum _ { i } \Delta x \frac { m _ { \mathrm { tot } } u } { M + x m _ { \mathrm { tot } } } \approx \int _ { 0 } ^ { 1 } d x \frac { m _ { \mathrm { tot } } u } { M + x m _ { \mathrm { tot } } } = \log \left( \frac { M + m _ { \mathrm { tot } } } { M } \right) u .
$$

Note that this is essentially the rocket equation, which we'll derive in a different way in M6.
[2] Problem 5 (KK 4.11). A perfectly flexible chain of mass $M$ and length $\ell$ is suspended vertically with its lowest end touching a scale. The chain is released and falls onto the scale. Find the reading on the scale when a length of chain $x$ has fallen.

Solution. Because the chain is flexible, each link just crumples when it hits the ground, without pulling the rest of the chain downward. In other words, the assumption of ideal flexibility implies the tension in the chain vanishes, so that the vertical part of the chain is always in free fall.

Now, the lowest end of the chain is moving with velocity $\sqrt { 2 g x }$, so in time $d t$, a mass $M \sqrt { 2 g x } d t / \ell$ falls on to the scale, so the change in momentum of that piece is $( 2 M g x / \ell ) d t$. Thus, we need a force $2 M g x / \ell$ to stop the links that are falling on the scale. In addition, there must be a force $M g x / \ell$ to balance the weight of the chain that's already lying on the scale, for a total of $3 M g x / \ell$.

This is nice and elegant, but is it true? The result is actually pretty accurate, as you can see from experimental data here. The deviation from the expected result is because no chain is perfectly


flexible. Since the chain has to bend at the spot it hits the scale, some tension is produced, which pulls down the rest of the chain slightly faster than free fall.

This has a connection to the "inherently inelastic" processes mentioned later in the problem set. The fastest possible fall corresponds to the case where energy is conserved, i.e. when all the kinetic energy of each link hitting the ground is nearly transferred through tension to the still falling part of the chain. The answer we gave above corresponds to the slowest possible fall, where each link collides perfectly inelastically with the ground. For a flexible chain, the latter is closer to reality.
