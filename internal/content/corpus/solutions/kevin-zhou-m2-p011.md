---
id: kevin-zhou-m2-p011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-p011
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

[3] Problem 11. An object of mass m lies on a uniform floor, with coefficient of static friction µ.
9
Kevin Zhou Physics Olympiad Handouts
(a) First, suppose the object is a point mass. What is the minimum force required to make the
object start moving, if you can apply the force in any direction?
(b) Now suppose the object is a thin, uniform bar. What is the minimum force required to make
the object start moving in any way, if the force can only be applied horizontally? Assume the
normal pressure on the floor remains uniform.
Solution. (a) Just before the block slides, the friction force is µ times the normal force, so the
sum of the normal force and friction force yields a single force with angle ϕ with respect to
the vertical, where tanϕ = µ. Let’s call this sum the “contact force”, with magnitude FC.
The contact force FC, gravitational force mg, and applied force FA acting on the object have
to sum to zero, so the three force vectors have to form a closed triangle.
By varying the direction of the applied force, we vary both FC and FA. The smallest possible
value of FA occurs when the contact and applied force are perpendicular, so that the force
vectors form a right triangle. Then by basic trigonometry, the minimum FA is
Fmin = mg sinϕ =
mgµ
p
1 + µ2
.
As a sidenote, if the block were treated as an extended object, not just a point particle, one
would have to worry about whether it’s possible to do this without tipping the block over
instead. However, by choosing the point of application of the force correctly, it’s always
possible to make the block slide without tipping. Can you see why?
(b) Naively the answer is µmg, because that’s the maximum total friction force. However, we
know from everyday experience that it’s easier to get the object to start moving if you pull
at the edge. That’s because the friction forces distributed along the bar also need to balance
torque, which means some of them must point forward, along the force you exert.
The figure above shows a top-down view of the bar. Just before slipping, the friction needs
to be trying as hard as possible to balance both the applied force and applied torque. This
implies that it must have the maximum possible magnitude everywhere, and this fixes the
10
Kevin Zhou Physics Olympiad Handouts
total length of the bar where the friction points forward, and the total length where it points
backward. To oppose the torque you apply as effectively as possible, the part of the bar where
friction points forward must be all on the opposite side of the bar, as shown above.
Using the variables defined in the figure, just barely balancing forces and torques simultane-
ously gives
F = µmg

ℓ
L
−
L − ℓ
L

, Fℓ = µmg

ℓ
L
ℓ
2
+
L − ℓ
L
L − ℓ
2

.
Solving for ℓ gives ℓ = L/
√
2, and plugging this in gives
F = (
√
2 − 1)µmg
which is less than half the naive answer!
[3] Problem 12 (Morin 2.17). A spool consists of an axle of radius r and an outside circle of radius
R which rolls on the ground.
A thread is wrapped around the axle and is pulled with tension T at an angle θ with the horizontal.
(a) Which way does the spool move if it is pulled with θ = 0?
(b) Given R and r, what should θ be so that the spool doesn’t move? Assume that the friction
between the spool and the ground is large enough so that the spool doesn’t slip.
(c) Given R, r, and the coefficient of friction µ between the spool and the ground, what is the
largest value of T for which the spool remains at rest?
(d) Given R and µ, what should r be so that you can make the spool slip from the static position
with as small a T as possible? That is, what should r be so that the upper bound on T in
part (c) is as small as possible? What is the resulting value of T?
Solution. (a) The torque about the contact point with the ground is clockwise, so the spool rolls
to the right. You might think it would roll to the left, by thinking about torque about the
center, but one must also account for the torque from friction with the ground; taking torques
about the contact point avoids this complication.
(b) Let O be the center of the spool, A the point where the thread leaves the inner circle, and B
the point of contact of the outer circle with the floor. We see that ∠BOA = θ. Considering
torques about B, we see that gravity provides 0 torque, so the tension must provide 0 torque
as well. This means BA is tangent to the inner circle. Since BAO is a right triangle with
∠BAO = 90◦, we have cosθ = r/R .
11
Kevin Zhou Physics Olympiad Handouts
(c) Let f be the friction force, and N the normal force. We see that T cosθ = f and N =
Mg − T sinθ. Since f ≤ µN, we see
T cosθ ≤ µ(Mg − T sinθ) =⇒ T ≤
µMg
cosθ + µsinθ
,
where θ = cos−1(r/R).
(d) We see that cosθ + µsinθ = 1 √
1+µ2
cos(θ − β) where tanβ = µ. Thus,
T =
µMg
p
1 + µ2 cos(θ − β)
,
so to minimize T, we want θ = β, so r = Rcosβ =
R
p
1 + µ2
, and the minimum value of T
is
µMg
p
1 + µ2
.
[3] Problem 13 (PPP 44). A plate, bent at right angles along its center line, is placed on a horizontal
fixed cylinder of radius R as shown. Each arm of the plate has length 2R.
How large does the coefficient of static friction between the cylinder and plate need to be if the
plate is not to slip off the cylinder?
Solution. Let the normal and friction forces at the top be Nt, ft and at the right Nr, fr, and the
static coefficient of friction be µ. Balancing forces on the plate gives
ft = Nr, Nt + fr = mg.
Now, it’s not obvious whether friction will be maximal at the top or the right contact point, or
both, so we define
ft = µtNt, fr = µrNr
where µt,µr ≤ µ. Eliminating the friction forces and solving the force balance equations gives
Nt =
mg
1 + µrµt
, Nr =
mgµt
1 + µrµt
.
Next, consider torques on the plate about its vertex. (This is an arbitrary choice; taking torques
about either of the contact points also works about equally well.) The weight of the vertical of the
plate contributes no torque, so the torque balance equation is
Nr + mg/2 = Nt.
12
Kevin Zhou Physics Olympiad Handouts
Plugging in our results for Nr and Nt gives
µt(2 + µr) = 1.
To find the minimum coefficient of friction to avoid slipping, we need to find the solution to this
equation where the larger of µr and µt is as small as possible. But it’s clear now that increasing
one decreases the other, so this is achieved when the two are equal. In other words, at the limit,
slipping is just about to occur at both contact points simultaneously. Setting µr = µt = µ gives
µ2
+ 2µ − 1 = 0, µ =
√
2 − 1.
Incidentally, you can also do this problem with the idea of problem 5. At the minimum µ, we
assume both friction forces are saturated. The lines of these forces must cross at a point directly
above/below the center of mass, where gravity is applied. This quickly yields the same quadratic
equation as found above. If you do it this way, though, it’s a bit harder to see why both friction
forces are saturated simultaneously at the minimum µ. It’s usually true, but not guaranteed in
general; our more explicit derivation above shows why.
3 Trickier Torques
Idea 9
Sometimes, a clever use of torque balance can be used to remove any need to have explicit
force equations at all. Rarely, the same situation can occur in reverse.
Example 4: NBPhO 2010.4
A spherical ball of mass M is rolled up along a vertical wall, by exerting a force F to some
point P on the ball. The coefficient of friction is µ. What is the minimum possible force F,
and in this case, where is the point P?
Solution
Following the logic of idea 3, when the minimum possible force is used, the frictional
force with the wall must be maximal, f = µN, and directed upward. (If friction weren’t
pushing the ball up as hard as possible, we could get by using a smaller force F.)
So even though we don’t know the magnitude of the normal or the frictional force, we
know the direction of the sum of these two forces, so we’ll consider them as one combined force.
This reduces the number of independent forces in the problem to three: gravity (acting at
the center of mass), the force F (acting at P), and the combined normal and friction forces
(acting at the point of contact C with the wall). Therefore, by the result of problem 5, the
lines of these forces must all intersect at some point A, as shown.
13
Kevin Zhou Physics Olympiad Handouts
This ensures that the torques will balance, when taken about point A.
Next, we need to incorporate the information from force balance. Doing this directly will
lead us to some nasty trigonometry, but there’s a better way. There are in principle two
force balance equations, for horizontal and vertical forces. However, one of these equations is
just going to tell us the magnitude of the normal/frictional force, which we don’t care about.
So in reality, we just need one equation, which preferably doesn’t involve that force.
The trick is to use torque balance again, about the point C. (You might ask, didn’t
we already use torque balance? Yes, but the torque balance equations about different
points have different forms; they are related by adding combinations of the horizontal
and vertical force balance equations. Here, we’ve chosen C to avoid the normal/friction force.)
Now, when taking the torque about C, the torques due to gravity and F must cancel. Then
the force F is minimized if P is chosen to maximize its lever arm. This occurs when CA ⊥ PA,
in which case the lever arm is R
p
1 + µ2, where R is the radius of the ball. So we have
MgR = FR
p
1 + µ2, F =
Mg
p
1 + µ2
and P is determined as described above.
[2] Problem 14. NBPhO 2020, problem 4, parts (i) and (ii).
[3] Problem 15. NBPhO 2012, problem 3. The problem statement is missing some information: both
the bars and rod have diameter d.
[3] Problem 16. NBPhO 2006, problem 6. You will need to print out the problem to make measure-
ments on the provided figure.
[4] Problem 17 (Physics Cup 2012). A thin rod of mass m is placed in a corner so that the rod forms
an angle α with the floor. The gravitational acceleration is g, and the coefficient of friction with
the wall and floor is µs = tanβ, which is not large enough to keep the rod from slipping.
14
Kevin Zhou Physics Olympiad Handouts
What is the minimum additional force F needed to keep the rod static?
Solution. The answer is
F =
mg
2
cos(α + 2β) ×
(
1/cos(α + β) α + β ≤ π/4
1/sin(α + β) α + β ≥ π/4
and several nice solutions are given here.
By the way, this is an example of how a great question writer gets around the problem of
nonunique solutions, as we’ll discuss further in example 5. The famous question of when a ladder
will slip (e.g. as a person climbs up the ladder) has been appearing in books and exams for centuries.
But the answer is usually not well-defined, because there are four unknowns (two normal forces
and two friction forces) but only three equations (two from force balance, and torque balance).
Instead, the answer in practice depends on details, such as how the ladder was placed in contact
with the walls, and how much it can compress and bend. To avoid this, question writers often
assume something artificial, such as making one wall frictionless. But in this nice problem, the
indeterminacy is cancelled out by the freedom in deciding how to apply the force F.
Next, we consider some questions that train three-dimensional thinking.
[2] Problem 18 (PPP 10). In Victor Hugo’s novel les Miserables, the main character Jean Valjean, an
escaped prisoner, was noted for his ability to climb up the corner formed by the intersection of two
vertical perpendicular walls. Suppose for simplicity that Jean has no feet. Let µ be the coefficient
of static friction between his hands and the walls. What is the minimum force that Jean had to
exert on each hand to climb up the wall? Also, for what values of µ is this feat possible at all?
Solution. Jean Valjean experiences two normal forces and two friction forces, one from each hand.
Each friction force must balance the other normal force, plus half the weight, so
f2
fric = N2
+ (mg/2)2
.
Assuming the friction is maximal, ffric = µN, we have
N =
mg
2
p
µ2 − 1
and the force Jean Valjean exerts with each hand is
F =
q
N2 + f2
fric =
mg
2
s
µ2 + 1
µ2 − 1
.
The feat is only possible if µ > 1.
15
Kevin Zhou Physics Olympiad Handouts
[3] Problem 19 (PPP 69). A homogeneous triangular plate has threads of length h1, h2, and h3
fastened to its vertices. The other ends of the string are fastened to a common point on the ceiling.
Show that the tension in each thread is proportional to its length. (Hint: with the origin at the
point on the ceiling, let the vertices be at positions ri and express everything in vector form.)
Solution. Define the origin to be the attachment point on the ceiling, and let the vertices be at
positions ri. The tensions are along the ropes, so let them be Ti = −ηiri. Force balance says
η1r1 + η2r2 + η3r3 = mg.
Torque balance tells us that the center of mass of the triangle must lie directly below the attachment
point, and the center of mass is at
rcm =
1
3
(r1 + r2 + r3)
which means that
r1 + r2 + r3 ∝ g.
Thus, we know that the sum of the ri is in the vertical direction, and also that the weighted sum of
the ηiri is in the same vertical direction. This is only possible if all the ηi are equal to each other,
which proves the desired result.
In case you’re not convinced, we can justify this in more detail. Let r1 + r2 + r3 = αg. Then
subtracting this equation from α/m times the force balance equation gives
X
i

1 −
α
m
ηi

ri = 0.
The only way a nontrivial sum of three vectors can vanish is if they lie in a plane, which isn’t true
here. So each of the coefficients must vanish, so 1 − (α/m)ηi = 0, which means all the ηi are the
same, ηi = m/α.
[4] Problem 20 (KoMaL 2019, BAUPC 1998). Two identical uniform solid cylinders are placed on a
level tabletop next to each other, so that they are touching. A third identical cylinder is placed on
top of the other two.
(a) Let the coefficient of static friction between the cylinders be µ1, and the coefficient of static
friction between the cylinders and table be µ2. Find the minimum values of µ1 and µ2 so that
the arrangement can stay at rest.
(b) Repeat part (a) with the three cylinders replaced with four spheres, stacked so that their
centers form an equilateral triangle.
(c) Now return to part (a), and suppose the setup is frictionless. A force is applied directly to
the right on the leftmost cylinder, causing the entire setup to accelerate. Find the minimum
and maximum accelerations so that all three cylinders remain in contact with each other.
Parts (a) and (b) demonstrate an interesting point: it is possible for a collection of objects to resist
some force, even though a single one of those objects would begin moving even with an infinitesimal
applied force! This is a simple example of how granular materials, like sand, can give rise to emergent
phenomena that are hard to predict from analyzing individual grains alone. Understanding these
materials is a whole field of applied research.
16
Kevin Zhou Physics Olympiad Handouts
Solution. (a) Call the top cylinder A, and the bottom ones B and C. Suppose the normal force
between the top cylinder and either of the bottom cylinders is N, and the friction force is f.
When µ1 takes its minimum possible value, we have f = µ1N. Note that since B and C are
already being pushed apart by A, there’s no normal force between B and C. (It would be
possible in principle for the normal force to be nonzero, but that would require more friction
to counteract it, and we’re trying to find the configuration with the smallest µi possible.) This
also implies that there’s no friction between B and C.
Now let’s balance forces and torques on C. For torque to be balanced, the friction force from
the ground must also be f. Then balancing horizontal forces yields
f + f cos(π/6) = N sin(π/6)
from which we infer
µ1 =
f
N
=
1
2 +
√
3
≈ 0.268.
To find µ2, let N′ be the normal force between C and the ground. By symmetry, it has to be
half of the total weight, so N′ = 3mg/2, but by balancing vertical forces on C, we also have
N′
= N cos(π/6) + f sin(π/6) + mg.
Using our previously derived result for f/N, we conclude that
f =
µ1
3
N′
from which we conclude that
µ2 =
µ1
3
≈ 0.0893.
(b) All the spheres are being pushed apart, so the analysis above is the same except now the angle
is a bit different and the bottom balls exert a vertical force of mg/3 on the top ball since there
are 3 supports now.
The lines connecting the centers of the spheres form a tetrahedron by symmetry.
Let the length of the sides of a tetrahedron ABCD be ℓ, and A being the point at the top
(center of the top sphere). Then the distance from the centroid of triangle BCD to B is ℓ/
√
3
(use the fact that medians intersect in a ratio of 2 to 1 or draw a line from the centroid to
a side). Since AB has length ℓ, the angle between the vertical and the lines connecting the
centers of the top sphere and a bottom sphere is α = arcsin(1/
√
3).
We can thus replace sin(π/6) with 1/
√
3 and cos(π/6) with
p
2/3 in the previous equations.
Thus with the same analysis on a bottom ball with only the top ball acting on it, the friction
coefficient between the balls is:
µ1 =
sinα
1 + cosα
=
√
3 −
√
2 ≈ 0.318.
Similarly, we have N′ = 4mg/3 and N cos(α) + f sin(α) = mg/3, so
N′
= 4

cosα
µ1
+ sinα

f
from which we conclude
µ2 =
µ1
4
≈ 0.0795.
17
Kevin Zhou Physics Olympiad Handouts
(c) Call the top cylinder A, the left cylinder B, and the right cylinder C, and the normal forces
between them Nij. Let θ = π/6.
At the minimum acceleration, the weight of cylinder A almost pushes B and C apart, so
NBC = 0. Under this assumption, considering horizontal forces on cylinders A and C gives
NAC sinθ = ma, (NBA − NAC)sinθ = ma
while balancing vertical forces on cylinder A gives
(NBA + NAC)cosθ = mg
Combining these equations and plugging in θ, we find
2NAC = 4ma =
mg
√
3/2
− 2ma
from which we read off
amin =
g
3
√
3
.
Now consider the maximum acceleration. In this case, cylinder A will be just about to fly off
the top, so that NAC = 0. Thus, the only normal force on cylinder A is from cylinder B, and
considering horizontal and vertical forces on cylinder A gives
NBA sinθ = ma, NBA cosθ = mg
from which we read off
amax =
g
√
3
.
4 Paradoxical Reactions
Idea 10
Physics is not fundamentally about solving tricky sets of idealized equations; that is just
mathematics. Physics is also not fundamentally about describing common real-world
situations as accurately as possible; that is just engineering. The heart of physics is to
bridge the two effectively. A good physicist invents mathematical idealizations that decently
describe as many things as possible. A great physicist figures out exactly when and why
those idealizations break down, and how to replace them with better ones.
The point of this philosophical speech is that everything you’ve learned so far in this handout
is an idealization. Real objects don’t have single normal and friction forces applied at points.
Instead, they are made of huge numbers of atoms connected by chemical bonds. Each
atom applies forces to its neighbors, and each bond deforms in response to applied forces.
Sometimes we can ignore these details, sometimes we can save our preferred idealizations
with a clever adjustment, and sometimes the idealized picture breaks down completely. Each
case is different, and requires thinking about the physics in play.
18
Kevin Zhou Physics Olympiad Handouts
Example 5
A uniform bar with mass m and length ℓ hangs on four equally spaced identical light wires.
Initially, all four wires have tension mg/4.
Find the tensions after the leftmost wire is cut.
Solution
This illustrates a common issue with setups involving rigid supports: there are often more
normal or tension forces than independent equations, so there is not a unique solution. In the
real world, the result is determined by imperfect characteristics of the wires. A reasonable
assumption here is that the wires are identical, very stiff springs. In equilibrium, the bar
will tilt a tiny bit, so that the length of the middle wire will be the average of the lengths of
the other two. By Hooke’s law, the force in that wire will than be the average of the other
two, so the tensions are mg/3 − x, mg/3, and mg/3 + x. Applying torque balance yields
7mg/12, mg/3, and mg/12.
A real civil engineer designing a structure would use a sophisticated computer program which
simulates all the complex internal forces, torques, and strains in play. For intuition, you
could try building some structures yourself in a simple game, like Poly Bridge.
