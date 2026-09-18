---
id: solution-ocr-kevin-zhou-m2sol-p011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-p011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 11. An object of mass $m$ lies on a uniform floor, with coefficient of static friction $\mu$.


(a) First, suppose the object is a point mass. What is the minimum force required to make the object start moving, if you can apply the force in any direction?
(b) Now suppose the object is a thin, uniform bar. What is the minimum force required to make the object start moving in any way, if the force can only be applied horizontally? Assume the normal pressure on the floor remains uniform.

Solution. (a) Just before the block slides, the friction force is $\mu$ times the normal force, so the sum of the normal force and friction force yields a single force with angle $\phi$ with respect to the vertical, where $\tan \phi = \mu$. Let's call this sum the "contact force", with magnitude $F _ { C }$.

The contact force $F _ { C }$, gravitational force $m g$, and applied force $F _ { A }$ acting on the object have to sum to zero, so the three force vectors have to form a closed triangle.
![](../../../figures/solution-ocr/c23fed3e25d24433f9774b49.jpg)
By varying the direction of the applied force, we vary both $F _ { C }$ and $F _ { A }$. The smallest possible value of $F _ { A }$ occurs when the contact and applied force are perpendicular, so that the force vectors form a right triangle. Then by basic trigonometry, the minimum $F _ { A }$ is

$$
F _ { \min } = m g \sin \phi = \frac { m g \mu } { \sqrt { 1 + \mu ^ { 2 } } } .
$$

As a sidenote, if the block were treated as an extended object, not just a point particle, one would have to worry about whether it's possible to do this without tipping the block over instead. However, by choosing the point of application of the force correctly, it's always possible to make the block slide without tipping. Can you see why?

(b) Naively the answer is $\mu m g$, because that's the maximum total friction force. However, we know from everyday experience that it's easier to get the object to start moving if you pull at the edge. That's because the friction forces distributed along the bar also need to balance torque, which means some of them must point forward, along the force you exert.
![](../../../figures/solution-ocr/4275d196edd98b1d88ee2b60.jpg)
The figure above shows a top-down view of the bar. Just before slipping, the friction needs to be trying as hard as possible to balance both the applied force and applied torque. This implies that it must have the maximum possible magnitude everywhere, and this fixes the

total length of the bar where the friction points forward, and the total length where it points backward. To oppose the torque you apply as effectively as possible, the part of the bar where friction points forward must be all on the opposite side of the bar, as shown above.
Using the variables defined in the figure, just barely balancing forces and torques simultaneously gives
$$
F = \mu m g \left( \frac { \ell } { L } - \frac { L - \ell } { L } \right) , \quad F \ell = \mu m g \left( \frac { \ell } { L } \frac { \ell } { 2 } + \frac { L - \ell } { L } \frac { L - \ell } { 2 } \right) .
$$
Solving for $\ell$ gives $\ell = L / \sqrt { 2 }$, and plugging this in gives
$$
F = ( \sqrt { 2 } - 1 ) \mu m g
$$
which is less than half the naive answer!
[3] Problem 12 (Morin 2.17). A spool consists of an axle of radius $r$ and an outside circle of radius $R$ which rolls on the ground.
![](../../../figures/solution-ocr/a6f4c4767e2ab937fd753e59.jpg)
A thread is wrapped around the axle and is pulled with tension $T$ at an angle $\theta$ with the horizontal.
    (a) Which way does the spool move if it is pulled with $\theta = 0$ ?
    (b) Given $R$ and $r$, what should $\theta$ be so that the spool doesn't move? Assume that the friction between the spool and the ground is large enough so that the spool doesn't slip.
    (c) Given $R , r$, and the coefficient of friction $\mu$ between the spool and the ground, what is the largest value of $T$ for which the spool remains at rest?
    (d) Given $R$ and $\mu$, what should $r$ be so that you can make the spool slip from the static position with as small a $T$ as possible? That is, what should $r$ be so that the upper bound on $T$ in part (c) is as small as possible? What is the resulting value of $T$ ?

Solution. (a) The torque about the contact point with the ground is clockwise, so the spool rolls to the right. You might think it would roll to the left, by thinking about torque about the center, but one must also account for the torque from friction with the ground; taking torques about the contact point avoids this complication.


(b) Let $O$ be the center of the spool, $A$ the point where the thread leaves the inner circle, and $B$ the point of contact of the outer circle with the floor. We see that $\angle B O A = \theta$. Considering torques about $B$, we see that gravity provides 0 torque, so the tension must provide 0 torque as well. This means $B A$ is tangent to the inner circle. Since $B A O$ is a right triangle with $\angle B A O = 90 ^ { \circ }$, we have $\cos \theta = r / R$.

(c) Let $f$ be the friction force, and $N$ the normal force. We see that $T \cos \theta = f$ and $N =$ $M g - T \sin \theta$. Since $f \leq \mu N$, we see
$$
T \cos \theta \leq \mu ( M g - T \sin \theta ) \Longrightarrow T \leq \frac { \mu M g } { \cos \theta + \mu \sin \theta }
$$
where $\theta = \cos ^ { - 1 } ( r / R )$.
(d) We see that $\cos \theta + \mu \sin \theta = \frac { 1 } { \sqrt { 1 + \mu ^ { 2 } } } \cos ( \theta - \beta )$ where $\tan \beta = \mu$. Thus,
$$
T = \frac { \mu M g } { \sqrt { 1 + \mu ^ { 2 } } \cos ( \theta - \beta ) } ,
$$
so to minimize $T$, we want $\theta = \beta$, so $r = R \cos \beta = \frac { R } { \sqrt { 1 + \mu ^ { 2 } } }$, and the minimum value of $T$ is $\frac { \mu M g } { \sqrt { 1 + \mu ^ { 2 } } }$.
[3] Problem 13 (PPP 44). A plate, bent at right angles along its center line, is placed on a horizontal fixed cylinder of radius $R$ as shown. Each arm of the plate has length $2 R$.
![](../../../figures/solution-ocr/68b2c8c63edbe84171546ef3.jpg)
How large does the coefficient of static friction between the cylinder and plate need to be if the plate is not to slip off the cylinder?
Solution. Let the normal and friction forces at the top be $N _ { t } , f _ { t }$ and at the right $N _ { r } , f _ { r }$, and the static coefficient of friction be $\mu$. Balancing forces on the plate gives
$$
f _ { t } = N _ { r } , \quad N _ { t } + f _ { r } = m g .
$$
Now, it's not obvious whether friction will be maximal at the top or the right contact point, or both, so we define
$$
f _ { t } = \mu _ { t } N _ { t } , \quad f _ { r } = \mu _ { r } N _ { r }
$$
where $\mu _ { t } , \mu _ { r } \leq \mu$. Eliminating the friction forces and solving the force balance equations gives
$$
N _ { t } = \frac { m g } { 1 + \mu _ { r } \mu _ { t } } , \quad N _ { r } = \frac { m g \mu _ { t } } { 1 + \mu _ { r } \mu _ { t } } .
$$
Next, consider torques on the plate about its vertex. (This is an arbitrary choice; taking torques about either of the contact points also works about equally well.) The weight of the vertical of the plate contributes no torque, so the torque balance equation is
$$
N _ { r } + m g / 2 = N _ { t } .
$$

Plugging in our results for $N _ { r }$ and $N _ { t }$ gives

$$
\mu _ { t } \left( 2 + \mu _ { r } \right) = 1 .
$$

To find the minimum coefficient of friction to avoid slipping, we need to find the solution to this equation where the larger of $\mu _ { r }$ and $\mu _ { t }$ is as small as possible. But it's clear now that increasing one decreases the other, so this is achieved when the two are equal. In other words, at the limit, slipping is just about to occur at both contact points simultaneously. Setting $\mu _ { r } = \mu _ { t } = \mu$ gives

$$
\mu ^ { 2 } + 2 \mu - 1 = 0 , \quad \mu = \sqrt { 2 } - 1 .
$$

Incidentally, you can also do this problem with the idea of problem 5. At the minimum $\mu$, we assume both friction forces are saturated. The lines of these forces must cross at a point directly above/below the center of mass, where gravity is applied. This quickly yields the same quadratic equation as found above. If you do it this way, though, it's a bit harder to see why both friction forces are saturated simultaneously at the minimum $\mu$. It's usually true, but not guaranteed in general; our more explicit derivation above shows why.

## 3 Trickier Torques

Idea 9
Sometimes, a clever use of torque balance can be used to remove any need to have explicit force equations at all. Rarely, the same situation can occur in reverse.

Example 4: NBPhO 2010.4
A spherical ball of mass $M$ is rolled up along a vertical wall, by exerting a force $F$ to some point $P$ on the ball. The coefficient of friction is $\mu$. What is the minimum possible force $F$, and in this case, where is the point $P$ ?

Solution
Following the logic of idea 3, when the minimum possible force is used, the frictional force with the wall must be maximal, $f = \mu N$, and directed upward. (If friction weren't pushing the ball up as hard as possible, we could get by using a smaller force $F$.) So even though we don't know the magnitude of the normal or the frictional force, we know the direction of the sum of these two forces, so we'll consider them as one combined force.

This reduces the number of independent forces in the problem to three: gravity (acting at the center of mass), the force $F$ (acting at $P$ ), and the combined normal and friction forces (acting at the point of contact $C$ with the wall). Therefore, by the result of problem 5, the lines of these forces must all intersect at some point $A$, as shown.


![](../../../figures/solution-ocr/ff5e2520aeef42000da72e8b.jpg)
This ensures that the torques will balance, when taken about point $A$.
Next, we need to incorporate the information from force balance. Doing this directly will lead us to some nasty trigonometry, but there's a better way. There are in principle two force balance equations, for horizontal and vertical forces. However, one of these equations is just going to tell us the magnitude of the normal/frictional force, which we don't care about. So in reality, we just need one equation, which preferably doesn't involve that force.

The trick is to use torque balance again, about the point $C$. (You might ask, didn't we already use torque balance? Yes, but the torque balance equations about different points have different forms; they are related by adding combinations of the horizontal and vertical force balance equations. Here, we've chosen $C$ to avoid the normal/friction force.)

Now, when taking the torque about $C$, the torques due to gravity and $F$ must cancel. Then the force $F$ is minimized if $P$ is chosen to maximize its lever arm. This occurs when $C A \perp P A$, in which case the lever arm is $R \sqrt { 1 + \mu ^ { 2 } }$, where $R$ is the radius of the ball. So we have

$$
M g R = F R \sqrt { 1 + \mu ^ { 2 } } , \quad F = \frac { M g } { \sqrt { 1 + \mu ^ { 2 } } }
$$

and $P$ is determined as described above.
[2] Problem 14. NBPhO 2020, problem 4, parts (i) and (ii).
[3] Problem 15. NBPhO 2012, problem 3. The problem statement is missing some information: both the bars and rod have diameter $d$.
[3] Problem 16. NBPhO 2006, problem 6. You will need to print out the problem to make measurements on the provided figure.
[4] Problem 17 (Physics Cup 2012). A thin rod of mass $m$ is placed in a corner so that the rod forms an angle $\alpha$ with the floor. The gravitational acceleration is $g$, and the coefficient of friction with the wall and floor is $\mu _ { s } = \tan \beta$, which is not large enough to keep the rod from slipping.


![](../../../figures/solution-ocr/5b7277304783f70413b6237a.jpg)
What is the minimum additional force $F$ needed to keep the rod static?
Solution. The answer is

$$
F = \frac { m g } { 2 } \cos ( \alpha + 2 \beta ) \times \begin{cases} 1 / \cos ( \alpha + \beta ) & \alpha + \beta \leq \pi / 4 \\ 1 / \sin ( \alpha + \beta ) & \alpha + \beta \geq \pi / 4 \end{cases}
$$

and several nice solutions are given here.
By the way, this is an example of how a great question writer gets around the problem of nonunique solutions, as we'll discuss further in example 5. The famous question of when a ladder will slip (e.g. as a person climbs up the ladder) has been appearing in books and exams for centuries. But the answer is usually not well-defined, because there are four unknowns (two normal forces and two friction forces) but only three equations (two from force balance, and torque balance). Instead, the answer in practice depends on details, such as how the ladder was placed in contact with the walls, and how much it can compress and bend. To avoid this, question writers often assume something artificial, such as making one wall frictionless. But in this nice problem, the indeterminacy is cancelled out by the freedom in deciding how to apply the force $F$.

Next, we consider some questions that train three-dimensional thinking.

[2] Problem 18 (PPP 10). In Victor Hugo's novel les Miserables, the main character Jean Valjean, an escaped prisoner, was noted for his ability to climb up the corner formed by the intersection of two vertical perpendicular walls. Suppose for simplicity that Jean has no feet. Let $\mu$ be the coefficient of static friction between his hands and the walls. What is the minimum force that Jean had to exert on each hand to climb up the wall? Also, for what values of $\mu$ is this feat possible at all?
Solution. Jean Valjean experiences two normal forces and two friction forces, one from each hand. Each friction force must balance the other normal force, plus half the weight, so
$$
f _ { \text {fric } } ^ { 2 } = N ^ { 2 } + ( m g / 2 ) ^ { 2 } .
$$
Assuming the friction is maximal, $f _ { \text {fric } } = \mu N$, we have
$$
N = \frac { m g } { 2 \sqrt { \mu ^ { 2 } - 1 } }
$$
and the force Jean Valjean exerts with each hand is
$$
F = \sqrt { N ^ { 2 } + f _ { \text {fric } } ^ { 2 } } = \frac { m g } { 2 } \sqrt { \frac { \mu ^ { 2 } + 1 } { \mu ^ { 2 } - 1 } } .
$$
The feat is only possible if $\mu > 1$.

[3] Problem 19 (PPP 69). A homogeneous triangular plate has threads of length $h _ { 1 } , h _ { 2 }$, and $h _ { 3 }$ fastened to its vertices. The other ends of the string are fastened to a common point on the ceiling. Show that the tension in each thread is proportional to its length. (Hint: with the origin at the point on the ceiling, let the vertices be at positions $\mathbf { r } _ { i }$ and express everything in vector form.)
Solution. Define the origin to be the attachment point on the ceiling, and let the vertices be at positions $\mathbf { r } _ { i }$. The tensions are along the ropes, so let them be $\mathbf { T } _ { i } = - \eta _ { i } \mathbf { r } _ { i }$. Force balance says
$$
\eta _ { 1 } \mathbf { r } _ { 1 } + \eta _ { 2 } \mathbf { r } _ { 2 } + \eta _ { 3 } \mathbf { r } _ { 3 } = m \mathbf { g } .
$$
Torque balance tells us that the center of mass of the triangle must lie directly below the attachment point, and the center of mass is at
$$
\mathbf { r } _ { \mathrm { cm } } = \frac { 1 } { 3 } \left( \mathbf { r } _ { 1 } + \mathbf { r } _ { 2 } + \mathbf { r } _ { 3 } \right)
$$
which means that
$$
\mathbf { r } _ { 1 } + \mathbf { r } _ { 2 } + \mathbf { r } _ { 3 } \propto \mathbf { g } .
$$
Thus, we know that the sum of the $\mathbf { r } _ { i }$ is in the vertical direction, and also that the weighted sum of the $\eta _ { i } \mathbf { r } _ { i }$ is in the same vertical direction. This is only possible if all the $\eta _ { i }$ are equal to each other, which proves the desired result.
In case you're not convinced, we can justify this in more detail. Let $\mathbf { r } _ { 1 } + \mathbf { r } _ { 2 } + \mathbf { r } _ { 3 } = \alpha \mathbf { g }$. Then subtracting this equation from $\alpha / m$ times the force balance equation gives
$$
\sum _ { i } \left( 1 - \frac { \alpha } { m } \eta _ { i } \right) \mathbf { r } _ { i } = 0 .
$$
The only way a nontrivial sum of three vectors can vanish is if they lie in a plane, which isn't true here. So each of the coefficients must vanish, so $1 - ( \alpha / m ) \eta _ { i } = 0$, which means all the $\eta _ { i }$ are the same, $\eta _ { i } = m / \alpha$.
[4] Problem 20 (KoMaL 2019, BAUPC 1998). Two identical uniform solid cylinders are placed on a level tabletop next to each other, so that they are touching. A third identical cylinder is placed on top of the other two.
    (a) Let the coefficient of static friction between the cylinders be $\mu _ { 1 }$, and the coefficient of static friction between the cylinders and table be $\mu _ { 2 }$. Find the minimum values of $\mu _ { 1 }$ and $\mu _ { 2 }$ so that the arrangement can stay at rest.
    (b) Repeat part (a) with the three cylinders replaced with four spheres, stacked so that their centers form an equilateral triangle.
    (c) Now return to part (a), and suppose the setup is frictionless. A force is applied directly to the right on the leftmost cylinder, causing the entire setup to accelerate. Find the minimum and maximum accelerations so that all three cylinders remain in contact with each other.

Parts (a) and (b) demonstrate an interesting point: it is possible for a collection of objects to resist some force, even though a single one of those objects would begin moving even with an infinitesimal applied force! This is a simple example of how granular materials, like sand, can give rise to emergent phenomena that are hard to predict from analyzing individual grains alone. Understanding these materials is a whole field of applied research.


Solution. (a) Call the top cylinder A, and the bottom ones B and C. Suppose the normal force between the top cylinder and either of the bottom cylinders is $N$, and the friction force is $f$. When $\mu _ { 1 }$ takes its minimum possible value, we have $f = \mu _ { 1 } N$. Note that since B and C are already being pushed apart by A, there's no normal force between B and C. (It would be possible in principle for the normal force to be nonzero, but that would require more friction to counteract it, and we're trying to find the configuration with the smallest $\mu _ { i }$ possible.) This also implies that there's no friction between B and C.
Now let's balance forces and torques on C. For torque to be balanced, the friction force from the ground must also be $f$. Then balancing horizontal forces yields

$$
f + f \cos ( \pi / 6 ) = N \sin ( \pi / 6 )
$$

from which we infer

$$
\mu _ { 1 } = \frac { f } { N } = \frac { 1 } { 2 + \sqrt { 3 } } \approx 0.268 .
$$

To find $\mu _ { 2 }$, let $N ^ { \prime }$ be the normal force between C and the ground. By symmetry, it has to be half of the total weight, so $N ^ { \prime } = 3 m g / 2$, but by balancing vertical forces on C, we also have

$$
N ^ { \prime } = N \cos ( \pi / 6 ) + f \sin ( \pi / 6 ) + m g .
$$

Using our previously derived result for $f / N$, we conclude that

$$
f = \frac { \mu _ { 1 } } { 3 } N ^ { \prime }
$$

from which we conclude that

$$
\mu _ { 2 } = \frac { \mu _ { 1 } } { 3 } \approx 0.0893 .
$$

(b) All the spheres are being pushed apart, so the analysis above is the same except now the angle is a bit different and the bottom balls exert a vertical force of $m g / 3$ on the top ball since there are 3 supports now.
The lines connecting the centers of the spheres form a tetrahedron by symmetry.
Let the length of the sides of a tetrahedron $A B C D$ be $\ell$, and $A$ being the point at the top (center of the top sphere). Then the distance from the centroid of triangle $B C D$ to $B$ is $\ell / \sqrt { 3 }$ (use the fact that medians intersect in a ratio of 2 to 1 or draw a line from the centroid to a side). Since $A B$ has length $\ell$, the angle between the vertical and the lines connecting the centers of the top sphere and a bottom sphere is $\alpha = \arcsin ( 1 / \sqrt { 3 } )$.
We can thus replace $\sin ( \pi / 6 )$ with $1 / \sqrt { 3 }$ and $\cos ( \pi / 6 )$ with $\sqrt { 2 / 3 }$ in the previous equations. Thus with the same analysis on a bottom ball with only the top ball acting on it, the friction coefficient between the balls is:
$$
\mu _ { 1 } = \frac { \sin \alpha } { 1 + \cos \alpha } = \sqrt { 3 } - \sqrt { 2 } \approx 0.318 .
$$
Similarly, we have $N ^ { \prime } = 4 m g / 3$ and $N \cos ( \alpha ) + f \sin ( \alpha ) = m g / 3$, so
$$
N ^ { \prime } = 4 \left( \frac { \cos \alpha } { \mu _ { 1 } } + \sin \alpha \right) f
$$
from which we conclude
$$
\mu _ { 2 } = \frac { \mu _ { 1 } } { 4 } \approx 0.0795 .
$$

(c) Call the top cylinder $A$, the left cylinder $B$, and the right cylinder $C$, and the normal forces between them $N _ { i j }$. Let $\theta = \pi / 6$.
At the minimum acceleration, the weight of cylinder A almost pushes B and C apart, so $N _ { B C } = 0$. Under this assumption, considering horizontal forces on cylinders A and C gives
$$
N _ { A C } \sin \theta = m a , \quad \left( N _ { B A } - N _ { A C } \right) \sin \theta = m a
$$
while balancing vertical forces on cylinder A gives
$$
\left( N _ { B A } + N _ { A C } \right) \cos \theta = m g
$$
Combining these equations and plugging in $\theta$, we find
$$
2 N _ { A C } = 4 m a = \frac { m g } { \sqrt { 3 } / 2 } - 2 m a
$$
from which we read off
$$
a _ { \min } = \frac { g } { 3 \sqrt { 3 } } .
$$
Now consider the maximum acceleration. In this case, cylinder $A$ will be just about to fly off the top, so that $N _ { A C } = 0$. Thus, the only normal force on cylinder $A$ is from cylinder $B$, and considering horizontal and vertical forces on cylinder $A$ gives
$$
N _ { B A } \sin \theta = m a , \quad N _ { B A } \cos \theta = m g
$$
from which we read off
$$
a _ { \max } = \frac { g } { \sqrt { 3 } } .
$$

## 4 Paradoxical Reactions

Idea 10
Physics is not fundamentally about solving tricky sets of idealized equations; that is just mathematics. Physics is also not fundamentally about describing common real-world situations as accurately as possible; that is just engineering. The heart of physics is to bridge the two effectively. A good physicist invents mathematical idealizations that decently describe as many things as possible. A great physicist figures out exactly when and why those idealizations break down, and how to replace them with better ones.

The point of this philosophical speech is that everything you've learned so far in this handout is an idealization. Real objects don't have single normal and friction forces applied at points. Instead, they are made of huge numbers of atoms connected by chemical bonds. Each atom applies forces to its neighbors, and each bond deforms in response to applied forces. Sometimes we can ignore these details, sometimes we can save our preferred idealizations with a clever adjustment, and sometimes the idealized picture breaks down completely. Each case is different, and requires thinking about the physics in play.


Example 5
A uniform bar with mass $m$ and length $\ell$ hangs on four equally spaced identical light wires. Initially, all four wires have tension $\mathrm { mg } / 4$.
![](../../../figures/solution-ocr/97d2639982cedb6655dde131.jpg)
Find the tensions after the leftmost wire is cut.

Solution
This illustrates a common issue with setups involving rigid supports: there are often more normal or tension forces than independent equations, so there is not a unique solution. In the real world, the result is determined by imperfect characteristics of the wires. A reasonable assumption here is that the wires are identical, very stiff springs. In equilibrium, the bar will tilt a tiny bit, so that the length of the middle wire will be the average of the lengths of the other two. By Hooke's law, the force in that wire will than be the average of the other two, so the tensions are $m g / 3 - x , m g / 3$, and $m g / 3 + x$. Applying torque balance yields 7mg/12, mg/3, and mg/12.

A real civil engineer designing a structure would use a sophisticated computer program which simulates all the complex internal forces, torques, and strains in play. For intuition, you could try building some structures yourself in a simple game, like Poly Bridge.
