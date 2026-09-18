---
id: solution-ocr-kevin-zhou-m2sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 9
Find the distance $d$ of the center of mass of a uniform semicircle of radius $R$ to its center. (Note that a semicircle is half of a circle, not half of a disc.)

Solution
This can be done by taking the setup of the previous problem, and taking a subsystem comprising exactly half of the rope. In this case the net tension force is simply

$$
F = 2 T .
$$

The total mass is $m = \pi R \lambda$, and the force must provide the centripetal force, so

$$
F = ( \pi R \lambda ) \left( \omega ^ { 2 } d \right)
$$

But we also know that $T = R ^ { 2 } \omega ^ { 2 } \lambda$ as before, so plugging this in gives

$$
d = \frac { 2 } { \pi } R .
$$

Alternatively, we could have worked in the frame rotating with the rope. The equations would be the same, but instead we would say the tension balances the centrifugal force.

[1] Problem 23 (KK 2.22). A uniform rope of weight $W$ hangs between two trees. The ends of the rope are the same height, and they each make angle $\theta$ with the trees.

![](../../../figures/solution-ocr/bed3ef2fc3a8ef3002d93f15.jpg)
Find the tension at either end of the rope, and the tension at the middle of the rope.
Solution. Let the tension at the end be $T _ { 0 }$, and $T _ { 1 }$ at the center. Considering the entire rope as one system, we see that $2 T _ { 0 } \cos \theta = W$, so $T _ { 0 } = \frac { W } { 2 \cos \theta }$. Considering one half of the rope as a system, we see $T _ { 1 } = T _ { 0 } \sin \theta = \frac { W } { 2 } \tan \theta$.

[3] Problem 24 (KK 2.24). A capstan is a device used aboard ships to control a rope which is under great tension.
![](../../../figures/solution-ocr/b2797883ea5072365c2cd46e.jpg)
The rope is wrapped around a fixed drum with coefficient of friction $\mu$, usually for several turns. The load on the rope pulls it with a force $T _ { A }$. Ignore gravity.
    (a) Show that the minimum force $T _ { B }$ needed to hold the other end of the rope in place is $T _ { A } e ^ { - \mu \theta }$, an exponential decrease.
    (b) How does this result depend on the shape of the capstan, if we fix the angle $\theta$ between the initial and final tension forces? Would the answer be the same for an oval, or a square?
    (c) If $\theta = \pi$, explain why the total normal and friction force of the rope on the drum is $T _ { A } + T _ { B }$.

Solution. (a) Consider a small piece of the rope that turns through an angle $d \theta$. Using the small angle approximation, the normal force must be $T d \theta$, and the friction force must be $d T$. Setting $f = \mu N$ gives $\mu T d \theta = d T$, or $d T / T = \mu d \theta$, and integrating gives the desired result.


(b) The infinitesimal reasoning above doesn't care about the shape as long as it's reasonably smooth, so the answer for an oval is the same: just break it into pieces that turn through $d \theta$ again. On the other hand, for a square one has sharp kinks where the normal force is singular, in which case the answer won't be as reliable.
(c) Consider the system consisting of the curved part of the rope. This system experiences a force $T _ { A } + T _ { B }$ from the straight part of the rope. But it is static, which means it must also experience an equal and opposite force from the drum, which comes from integrating the friction and normal forces along the contact surface.

That's all you have to say, but we can also show this more explicitly. For concreteness, let both tensions be vertical. We have a normal force and difference in tension forces

$$
d N = T d \theta , \quad d T = - d f _ { \text {fric } }
$$

on a small piece $d \theta$ of the rope. The contribution to the vertical force on the drum is

$$
d F _ { y } = d N \sin \theta + d f _ { \text {fric } } \cos \theta = T \sin \theta d \theta - d T \cos \theta = - d ( T \cos \theta )
$$

by the product rule. So the total vertical force is

$$
F _ { y } = \int d F _ { y } = - \int _ { 0 } ^ { \pi } d ( T \cos \theta ) = - \left( T _ { A } + T _ { B } \right)
$$

as expected. A very similar manipulation shows that $F _ { x } = 0$.
