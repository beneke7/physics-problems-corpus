---
id: kevin-zhou-m2-ex009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex009
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

Example 9
Find the distance d of the center of mass of a uniform semicircle of radius R to its center.
(Note that a semicircle is half of a circle, not half of a disc.)
Solution
This can be done by taking the setup of the previous problem, and taking a subsystem
comprising exactly half of the rope. In this case the net tension force is simply
F = 2T.
The total mass is m = πRλ, and the force must provide the centripetal force, so
F = (πRλ)(ω2
d)
But we also know that T = R2ω2λ as before, so plugging this in gives
d =
2
π
R.
Alternatively, we could have worked in the frame rotating with the rope. The equations
would be the same, but instead we would say the tension balances the centrifugal force.
[1] Problem 23 (KK 2.22). A uniform rope of weight W hangs between two trees. The ends of the
rope are the same height, and they each make angle θ with the trees.
23
Kevin Zhou Physics Olympiad Handouts
Find the tension at either end of the rope, and the tension at the middle of the rope.
Solution. Let the tension at the end be T0, and T1 at the center. Considering the entire rope as
one system, we see that 2T0 cosθ = W, so T0 = W
2cosθ. Considering one half of the rope as a system,
we see T1 = T0 sinθ = W
2 tanθ.
[3] Problem 24 (KK 2.24). A capstan is a device used aboard ships to control a rope which is under
great tension.
The rope is wrapped around a fixed drum with coefficient of friction µ, usually for several turns.
The load on the rope pulls it with a force TA. Ignore gravity.
(a) Show that the minimum force TB needed to hold the other end of the rope in place is TAe−µθ,
an exponential decrease.
(b) How does this result depend on the shape of the capstan, if we fix the angle θ between the
initial and final tension forces? Would the answer be the same for an oval, or a square?
(c) If θ = π, explain why the total normal and friction force of the rope on the drum is TA + TB.
Solution. (a) Consider a small piece of the rope that turns through an angle dθ. Using the
small angle approximation, the normal force must be T dθ, and the friction force must be dT.
Setting f = µN gives µT dθ = dT, or dT/T = µdθ, and integrating gives the desired result.
(b) The infinitesimal reasoning above doesn’t care about the shape as long as it’s reasonably
smooth, so the answer for an oval is the same: just break it into pieces that turn through dθ
again. On the other hand, for a square one has sharp kinks where the normal force is singular,
in which case the answer won’t be as reliable.
(c) Consider the system consisting of the curved part of the rope. This system experiences a
force TA + TB from the straight part of the rope. But it is static, which means it must also
experience an equal and opposite force from the drum, which comes from integrating the
friction and normal forces along the contact surface.
24
Kevin Zhou Physics Olympiad Handouts
That’s all you have to say, but we can also show this more explicitly. For concreteness, let
both tensions be vertical. We have a normal force and difference in tension forces
dN = T dθ, dT = −dffric
on a small piece dθ of the rope. The contribution to the vertical force on the drum is
dFy = dN sinθ + dffric cosθ = T sinθdθ − dT cosθ = −d(T cosθ)
by the product rule. So the total vertical force is
Fy =
Z
dFy = −
Z π
0
d(T cosθ) = −(TA + TB)
as expected. A very similar manipulation shows that Fx = 0.
