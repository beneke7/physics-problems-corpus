---
id: solution-ocr-kevin-zhou-m3sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m3-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. A block of mass $m$ is placed at rest on top of a frictionless wedge of mass $M$. The wedge rests on a frictionless horizontal table, and its sloped top makes an angle $\theta$ to the horizontal.

(a) When the block is released, what is the horizontal acceleration of the wedge?
(b) Assume the block starts a distance $d$ above the table. Using results from part (a), what is the horizontal velocity of the block just before it reaches the floor?
(c) Find the speed of the block after it reaches the floor by applying energy and momentum conservation to the entire process.
(d) Your results for parts (b) and (c) should not match. What's going on?

Solution. (a) Applying Newton's second law to the wedge gives

$$
M a = N \sin \theta .
$$

Next, work in the noninertial frame of the wedge, where the block only moves parallel to the slope. Balancing the forces perpendicular to the slope gives

$$
N = m g \cos \theta - m a \sin \theta .
$$

It's now straightforward to eliminate $N$ and thereby solve for $a$, which gives

$$
a = \frac { m g \sin \theta \cos \theta } { M + m \sin ^ { 2 } \theta } .
$$

By the way, it's easy to get confused on this problem if you focus too much on the block, because its motion is somewhat confusing; you have to decompose it into motion parallel to the slope, and motion of the wedge itself. Once you do that, the problem can be solved straightforwardly. The solution above is especially short because it never considers the acceleration of the block parallel to the slope, which isn't required to get the answer.


(b) Since the only horizontal forces in the problem are between the block and wedge, the horizontal acceleration of the block is
$$
a _ { b } = \frac { M } { m } a .
$$
Thus, the relative acceleration of the two is
$$
a _ { \mathrm { rel } } = a + a _ { b } = \frac { M + m } { m } a .
$$
The block goes off the wedge once the two have moved a relative horizontal distance of $d / \tan \theta$, which takes a time $t = \sqrt { 2 d / \left( a _ { \text {rel } } \tan \theta \right) }$. At this point the block has a horizontal velocity
$$
v _ { b } = a _ { b } t = \sqrt { 2 g d } \frac { M \cos \theta } { \sqrt { \left( M + m \sin ^ { 2 } \theta \right) ( M + m ) } } .
$$
(c) By momentum conservation, the final horizontal speeds obey
$$
M v _ { p } = m v _ { b }
$$
while by energy conservation,
$$
\frac { 1 } { 2 } M v _ { p } ^ { 2 } + \frac { 1 } { 2 } m v _ { b } ^ { 2 } = m g d .
$$
Combining the two and solving gives
$$
v _ { b } = \sqrt { 2 g d } \sqrt { \frac { M } { M + m } } .
$$
(d) It turns out that both results are correct, but they're the answers to different questions. Note that at the instant the block gets to the bottom of the wedge, its velocity isn't horizontal, but right after it's off the wedge, its velocity must be exactly horizontal. This requires a rather large vertical impulse. (For an illustration of this, see $F = m a$ 2021, problems 1 and 2.)
Depending on how the wedge and block are constructed, there are several possibilities. If the wedge abruptly ends, and the block immediately begins moving horizontally, then we have an inherently inelastic process. The vertical kinetic energy $m v _ { y } ^ { 2 } / 2$ of the block is lost, so the answer to part (c) doesn't apply, and the answer to part (b) is correct. (Another possibility, if the block is very bouncy, is that the sign of its $v _ { y }$ will flip, and it'll bounce off the floor. In this case, the answer to part (b) is still correct. Energy is conserved now, but the answer to part (c) is still wrong because it assumes the final velocity of the block is horizontal.)
On the other hand, if the wedge ends in a transition region, where $\theta$ smoothly goes to zero, then ideally energy remains conserved, and the answer of part (c) applies. In this region, a strong normal force reorients the velocity to be horizontal, supplying both a large horizontal and vertical impulse. As a result, the answer to part (b) doesn't apply.
This subtlety about how wedges end applies to lots of physics problems. Often people implicitly assume the answer of part (c), but in reality it depends sensitively on how the wedge and block are made. In fact, in practice you can lose a lot of energy even if there's a smooth curve at the end, if that curve is not gradual enough.

## 2 Momentum


Idea 2
The momentum of a system is

$$
\mathbf { P } = \sum _ { i } m _ { i } \mathbf { v } _ { i } = M \mathbf { v } _ { \mathrm { CM } }
$$

In particular, the total external force on the system is $M \mathbf { a } _ { \mathrm { CM } }$, and if there are no external forces, the center of mass moves at constant velocity.
