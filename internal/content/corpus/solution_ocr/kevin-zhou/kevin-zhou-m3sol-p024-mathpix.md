---
id: solution-ocr-kevin-zhou-m3sol-p024
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m3-p024]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 24. A uniform half-disc of radius $R$ is nailed to a wall at the center of its circle and allowed to come to equilibrium. The half-disc is then rotated by an angle $d \theta$. By calculating the energy needed to do this in two different ways, find the distance from the pivot point to the center of mass.
Solution. Refer to the diagram below.
![](../../../figures/solution-ocr/2d2e67d54995306df0a44df7.jpg)
Suppose the center of mass is at radius $r$. The energy required to turn the disc by $d \theta$ is
$$
( 1 - \cos ( d \theta ) ) m g x \approx \frac { m g x } { 2 } d \theta ^ { 2 }
$$
However, when rotated, all that has changed is that there is a new sector of angle $d \theta$ above (sector A), and one sector is now missing (sector B). A thin sector is approximately an isosceles triangle, so its center of mass is at radius $2 R / 3$. Thus, the total extra energy of A is $( d m ) g ( 2 R / 3 ) d \theta / 2$, where $d m / m = d \theta / \pi$, so it's $m g R ( 1 / 3 \pi ) d \theta ^ { 2 }$, and the extra energy due to the absence of B is the same, so we have
$$
\frac { 2 } { 3 \pi } m g R d \theta ^ { 2 } = \frac { m g x } { 2 } d \theta ^ { 2 }
$$
which implies
$$
x = \frac { 4 } { 3 \pi } R .
$$
[4] Problem 25 (Morin 5.31). Assume that a cloud consists of tiny water droplets suspended (uniformly distributed, and at rest) in air, and consider a raindrop falling through them. Assume the raindrop is initially of negligible size, remains spherical at all times, and collides perfectly inelastically with the droplets. It turns out that the raindrop accelerates uniformly; assuming this, find the acceleration.
Solution. Suppose the mass density in the cloud is $\lambda$ and the mass density of the raindrop is $\rho$ (note $\rho > \lambda$ ), and suppose $r$ is the radius of the drop, $M$ the mass, and $v$ the velocity. We see that
$$
\dot { M } = 4 \pi r ^ { 2 } \dot { r } \rho = 3 M \frac { \dot { r } } { r }
$$
and
$$
\dot { M } = \pi r ^ { 2 } v \lambda ,
$$
which combine to give
$$
v = \frac { 4 \rho } { \lambda } \dot { r } .
$$

We see that $M g = \dot { M } v + M \dot { v }$, so Newton's second law is

$$
M g = M \left( \frac { 3 \dot { r } } { r } \frac { 4 \rho } { \lambda } \dot { r } + \frac { 4 \rho } { \lambda } \ddot { r } \right)
$$

and writing everything in terms of $r$ gives

$$
r g \lambda / \rho = 12 \dot { r } ^ { 2 } + 4 r \ddot { r } .
$$

This is a nonlinear second-order differential equation; there is no general method to solve these equations. Certainly an exponential won't work, because you won't get the same exponential on the left and right-hand sides. However, we can use the hint, which indicates that $v$ is linear in time. This implies that $r$ is a quadratic, so guessing $r = A t ^ { 2 }$ gives

$$
A t ^ { 2 } g \lambda / \rho = 4 A ^ { 2 } \left( 12 t ^ { 2 } + 2 t ^ { 2 } \right) .
$$

This implies that we indeed have a solution, as long as

$$
A = ( g \lambda / \rho ) / 56 .
$$

Using our relation between $v$ and $\dot { r }$, we finally have

$$
\dot { v } = \frac { 4 \rho } { \lambda } \ddot { r } = \frac { g } { 7 }
$$

which is the acceleration.
As you can see from this problem and an earlier one, nonlinear second-order differential equations are actually quite common in physics. Trying a pure power $A t ^ { n }$ is a decent first guess, because monomials remain monomials under both differentiation and multiplication; for the same reason, an exponential $A e ^ { B t }$ can also work. However, in practice, the vast majority of such differential equations don't have analytic solutions at all, or only have solutions in terms of exotic special functions. Problems for Olympiads and undergraduate textbooks are generally chosen precisely to avoid these complications, since they draw attention away from the essential physics.

This raindrop problem is a classic, invented (with a slightly different mass accretion rule) for a Cambridge exam in 1853. (In that era, the exam writers were some of the world's top physicists and mathematicians, and they had a lot of great ideas. For example, Stokes wrote the famous 1854 Cambridge Smith's Prize exam, where one of the problems was what we now call Stokes' theorem.) For more discussion of this problem, see this paper by Krane, who is the K in HRK.
[3] Problem 26. There's a hidden subtlety in the first half of problem 16. Let's suppose that, instead of the rope initially being fed through a small hole, we instead had a tiny part of it initially hanging off the edge of the table. Energy is still conserved, so one might expect the problem is identical. But if you actually try this in real life, the rope will start thrashing back and forth during its fall. Why does this happen, and how much of the rope is still on the table when this motion begins?

Solution. A sizable force is needed to turn each piece of the rope around when it reaches the corner, to go from moving horizontally to vertically. At a certain critical velocity, tension will no longer be enough to do this, and the rope will jump off the corner. This will lead to the hanging part whipping back and forth.

To see when this happens, consider the vertical forces on the rope. As we saw with a similar but static problem in M2, the normal force on the horizontal part of the table has to cancel the


force of gravity acting on the part of the rope on the table. This is because otherwise a piece of the horizontal part of the rope would have an unbalanced vertical force, and would have to go into the table or jump off it, neither of which make sense.

Thus, considering the vertical forces just gives

$$
\frac { d p _ { y } } { d t } = \frac { x } { \ell } M g - N _ { c , y }
$$

where we take the downward direction as positive for convenience, and $N _ { c , y }$ is the vertical part of the normal force acting at the corner of the table. (Recall from M2 that this is significant even when the corner is small.) Since the rope is flexible, the process is elastic, so energy is conserved. The rope jumps off the corner when $N _ { c , y }$ becomes zero.

Thus, we need to find $d p _ { y } / d t$. In part (b) of problem 16, we found that

$$
v = \sqrt { \frac { g } { \ell } } x , \quad a = \frac { g } { \ell } x .
$$

This implies that

$$
\frac { d p _ { y } } { d t } = \frac { M } { \ell } \frac { d } { d t } ( x v ) = \frac { M } { \ell } \left( x a + v ^ { 2 } \right) = \frac { 2 x ^ { 2 } } { \ell ^ { 2 } } M g .
$$

Setting $N _ { c , y }$ to zero gives $x = \ell / 2$, i.e. the rope jumps when it's halfway off the table. For further discussion and a photo of what actually happens afterward, see appendix A here. We avoided this subtlety in problem 16 by using a small hole, which guides the rope in the vertical direction.

You might have noticed that the jump occurs precisely when the rope's speed is equal to the wave speed $v = \sqrt { T / ( M / L ) }$ at the corner; the explanation for this will be found in W1.
[4] Problem 27 (BAUPC 2002). A small ball is attached to a massless string of length $L$, the other end of which is attached to a very thin pole. The ball is thrown so that it initially travels in a horizontal circle, with the string making an angle $\theta _ { 0 }$ with the vertical. As time goes on, the string wraps itself around the pole. Assume that (1) the pole is thin enough so that the length of string in the air decreases very slowly, and (2) the pole has enough friction so that the string does not slide on the pole, once it touches it. Show that the ratio of the ball's final speed (right before it hits the pole) to initial speed is $\sin \theta _ { 0 }$.

Solution. You can see the official solution as usual, but it's a lot longer because it also solves for the evolution of the height of the ball; in this shorter version of the problem, we only want the final speed, which is a lot easier to find.

In this problem, energy is conserved because the string doesn't slide, but angular momentum isn't conserved. Now note that if $\theta$ were constant, the ball would move at a constant height. Changes in $\theta$ as the string winds up change the ball's height, which then changes its speed by energy conservation. By doing some geometry, you can show

$$
m v d v = - m g \ell \sin \theta d \theta
$$

The radial $F = m a$ equation is

$$
m g \tan \theta = \frac { m v ^ { 2 } } { \ell \sin \theta } .
$$

Substituting this into the equation above gives

$$
- m g \frac { m v ^ { 2 } } { m g \tan \theta } d \theta = m v d v
$$


which upon separation gives the simple result

$$
- \int _ { \theta _ { 0 } } ^ { \theta _ { f } } \cot \theta d \theta = \int _ { v _ { 0 } } ^ { v _ { f } } \frac { d v } { v }
$$

Therefore, we have

$$
\frac { \sin \theta _ { 0 } } { \sin \theta _ { f } } = \frac { v _ { f } } { v _ { 0 } } .
$$

Now we just need to know the final angle $\theta _ { f }$. If we substitute this back into the radial $F = m a$ equation, then at the end of the motion we have $\tan \theta _ { f } \propto v _ { f } ^ { 2 } / \left( \ell \sin \theta _ { f } \right) \propto 1 / \left( \ell \sin ^ { 3 } \theta _ { f } \right)$ with $\ell \rightarrow 0$. Since $\sin \theta _ { f }$ is finite, this is only possible if $\tan \theta _ { f }$ diverges, so $\theta _ { f } = \pi / 2$. We therefore conclude the desired result, $v _ { f } / v _ { 0 } = \sin \theta _ { 0 }$.

When dealing with an extended system whose parts all move in different ways, conservation of energy is occasionally useless. However, the somewhat obscure idea of "center of mass energy" may become useful instead. For more about this concept, see section 13.5 of Halliday and Resnick.

## Idea 7: Center of Mass Energy

The work done on a part of a system is

$$
d W = F d x
$$

where $F$ is the force on that specific part of the system, and $d x$ is its displacement. Then $d W = d E$ where $E$ is the total energy of the system.

Similarly, the "center of mass work" done on a system is

$$
d W _ { \mathrm { cm } } = F d x _ { \mathrm { cm } }
$$

where $F$ is the total force on the system and $d x _ { \mathrm { cm } }$ is the displacement of the center of mass. Then $d W _ { \mathrm { cm } } = d E _ { \mathrm { cm } }$ where the "center of mass energy" is defined as $E _ { \mathrm { cm } } = M v _ { \mathrm { cm } } ^ { 2 } / 2$.

It should be noted that, like regular energy and work, center of mass energy and work depend on the reference frame you're using.
