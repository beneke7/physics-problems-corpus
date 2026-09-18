---
id: kevin-zhou-m3-ex007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m3-ex007
solution_type: author
source_document: solution-document-kevin-zhou-m3sol
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M3Sol.pdf."
---

Example 7
Three balls of mass M are initially at rest. Then an explosion occurs, giving the system a
fixed total kinetic energy. What is the maximum possible fraction of this energy that one
ball can carry by itself?
Solution
Suppose we want to maximize the energy of the first ball, and let p0 be the magnitude of its
final momentum. Since the total momentum is zero, the other two balls also have a total
momentum of magnitude p0. As shown in the above idea, the energy of those two balls is
minimized if they travel at the same speed. Therefore, the optimal scenario is to have the
first ball come out with speed v0 and have both of the other two come out the other direction
with equal speed v0/2. Then the first ball has 2/3 of the total energy.
This is the simplest possible “optimal collision” problem; we’ll see more in R2. Many can be
solved with the basic idea that some of the outgoing masses should have the same velocity.
[1] Problem 18 (Morin 5.23). A tennis ball with mass m2 sits on top of a basketball with a mass
m1 ≫ m2. The bottom of the basketball is a height h above the ground. When the balls are
dropped, how high does the tennis ball bounce?
Solution. Right after the basketball hits the ground, it has velocity v =
√
2gh upwards, and the
tennis ball has velocity v downwards. In an elastic collision the relative velocity is reversed, and
the basketball’s velocity barely changes because it’s heavy, so the final velocity of the tennis ball
after the collision must be 3v upward. This multiplies its energy by 9, so it bounces to a height 9h.
[3] Problem 19 (PPP 46). A Newton’s cradle consists of three suspended steel balls of masses m1,
m2, and m3 arranged in that order with their centers in a horizontal line. The ball of mass m1 is
drawn aside in their common plane until its center has been raised by h and is then released. If
all collisions are elastic, how should m2 be chosen so that the ball of mass m3 rises to the greatest
possible height, and what is this height? (Neglect all but the first two collisions.)
Solution. The ball of mass m1 has speed v =
√
2gh once it hits the ball of mass m2. By applying
the result of example 6 twice, the speed of mass m3 after the first two collisions is
v′
=
2m1
m1 + m2
2m2
m2 + m3
v
which means the final height is
h′
=

4m1m2
(m1 + m2)(m2 + m3)
 2
h.
By some basic calculus, this is maximized when
m2 =
√
m1m3
20
Kevin Zhou Physics Olympiad Handouts
in which case
h′
=
2
1 +
p
m3/m1
!4
h.
For a wide range of m3/m1, this is pretty close to perfect efficiency. (Transferring 100% of the
energy would yield h′ = (m1/m3)h.)
