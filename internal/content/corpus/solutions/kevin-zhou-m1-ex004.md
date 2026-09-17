---
id: kevin-zhou-m1-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-ex004
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

Example 4
A rabbit begins at the origin, and the fox begins at the point (0,−a). The rabbit begins
running east, with a constant speed vx̂. At the same time, the fox begins chasing the rabbit,
always moving towards it with speed v. After a long time, the rabbit and fox simply follow
each other in a straight line, with a constant separation d. What is d?
Solution
This is the simplest example of a pursuit problem. Physicists and mathematicians have been
posing them for centuries, though most are too mathematically involved for Olympiads.
Here, the trick to realize that if the displacement between the rabbit and fox is r(t) =
(x(t),y(t)), then the quantity r + x is conserved. To see this, let θ be the angle between the
rabbit and fox’s velocity vectors. Then
dr
dt
= −v + v cosθ
because of the fox’s chasing and rabbit’s motion, and
dx
dt
= v − v cosθ
because of the rabbit’s motion and fox’s chasing. Then r + x is constant. Initially r + x =
a + 0 = a, and after a long time r = x = d, so the final separation is d = a/2.
[2] Problem 19. Suppose the fox in the above example instead has speed u > v. How long does it
take to catch the rabbit?
14
Kevin Zhou Physics Olympiad Handouts
Solution. We can simply modify the logic of the example. Now the equations of motion are
dr
dt
= −u + v cosθ,
dx
dt
= v − ucosθ.
Combining these equations, we can cancel out θ to get
u
dr
dt
+ v
dx
dt
= v2
− u2
.
This can now easily be integrated between the initial and final times. During this time, the change
in r is −a, while the change in x is zero, so
−au = (v2
− u2
)t, t =
ua
u2 − v2
.
This is much easier than solving for the full trajectory; if you’re curious what it looks like, you can
find it in this paper, which was written by a past coach of the U.S. Physics Team.
[2] Problem 20 (PPP 85). A child is at rest on an icy hill, which may be modeled as an inclined
plane.
The coefficient of friction µk = µs is such that if the child gets the tiniest push, she will begin sliding
down the plane. Now suppose the child gets a horizontal push, with initial speed v0. What is the
child’s final speed?
Solution. This is identical to example 4. Specifically, the displacement between the rabbit and
fox there corresponds to the velocity of the child here. At every increment of time dt, the velocity
changes in two ways: it shrinks along its direction by µg cosθdt due to friction (corresponding to
the fox) and it gains a component g sinθdt in a fixed direction due to gravity (corresponding to
the rabbit). Furthermore, the problem statement implies the coefficient of friction is just enough to
prevent sliding from rest, so that µ = tanθ and these two magnitudes are equal. Thus, the problem
is exactly analogous to example 4 (with an extra time derivative) and the answer is v0/2.
Again, it’s possible to solve for the full trajectory, but it’s quite difficult and messy. You can
find the full result in this paper.
[4] Problem 21.  O 1 0EuPhO 2023, problem 2. (Warning: compared to most EuPhO problems, the
algebra will be uncharacteristically messy.)
3 Motion in Two Dimensions
15
Kevin Zhou Physics Olympiad Handouts
Idea 6
Often, motion in two dimensions can be treated as two independent one-dimensional problems.
A change of reference frame may be necessary first.
Idea 7
In problems involving an inclined plane, don’t draw the inclination angle θ near 45◦, because
it will be easy to confuse the angles θ and 90◦ − θ.
