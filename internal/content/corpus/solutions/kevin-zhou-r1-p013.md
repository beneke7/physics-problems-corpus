---
id: kevin-zhou-r1-p013
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-p013
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

[3] Problem 13. In relativity, objects that change their direction of motion also automatically rotate,
even if they experience no torque in their own frames. Concretely, suppose an object is moving along
the x-axis with speed v ≪ c. In its own frame, it experiences an impulse along the y-axis, which
doesn’t rotate it, but does change its velocity in that direction by u ≪ v. To keep things simple,
you should set c = 1, and throw away terms smaller than either v2 or uv. Under this approximation,
the final velocity of the object in the lab frame is just (v,u).
(a) Starting in the lab frame, with coordinates (t,x,y), go into the object’s frame by performing
a Lorentz boost of v along x̂, and then of u along ŷ. That is, express the object’s coordinates
(to,xo,yo) in terms of t, x, and y.
(b) To compare the orientation of this frame to that of the lab frame, start again in the lab frame
and go into the object’s frame using a single Lorentz boost of v = (v,u). You’ll need the
formula for a Lorentz transformation in an arbitrary direction, which is
t′
= γ(t − v · r), r′
= r − γvt + (γ − 1)(v̂ · r)v̂.
(c) Your two frames will differ in orientation by a small angle ∆θ. What is ∆θ? More generally,
if the object performs uniform circular motion with angular velocity ω and speed v in the lab
frame, what spin rotation rate ωs is induced by this effect?
10
Kevin Zhou Physics Olympiad Handouts
(d) Suppose the object accelerated by momentarily firing an array of rockets on its back. How
would an observer in the lab frame explain why the object rotated?
This subtle phenomenon goes by several names. When we think about it kinematically, as the
result of composing Lorentz transformations, it’s usually called Wigner rotation, while when we
think about it dynamically, e.g. by tracking the orientation of an orbiting particle, it’s usually called
Thomas precession. In this problem, we considered a very concrete, straightforward derivation of
this effect. For a beautifully geometric but more advanced derivation, see this article. For a rather
messy application of Wigner rotation, see Physics Cup 2023, problem 4.
Solution. (a) After the first Lorentz transformation, we have coordinates
t1 ≈ (1 + v2
/2)t − vx, x1 ≈ (1 + v2
/2)x − vt, y1 = y
where we threw out some small terms, e.g. by approximating γ ≈ 1 + v2/2. After the second
Lorentz transformation, throwing out other small terms (or order v3, u2, uv2, etc.) gives
to ≈ (1 + v2
/2)t − vx − uy
and
xo ≈ (1 + v2
/2)x − vt, yo ≈ y − ut + uvx.
(b) To evaluate the result, we note that v̂ ≈ (1,u/v), so that
(γ − 1)(v̂ · r)v̂ ≈ (v2
/2)(x + uy/v)(1,u/v) ≈
1
2
(v2
x + uvy,uvx)
to the order at which we’re working. Then the Lorentz transformation gives
t′
≈ (1 + v2
/2)t − vx − uy
and
x′
≈ (1 + v2
/2)x − vt +
1
2
uvy, y′
≈ y − ut +
1
2
uvx
(c) By comparing our results and thinking about the form of a small rotation matrix, we see that
the orientation difference is ∆θ = uv/2. If the object keeps moving in a circle, then
ωs =
∆θ
∆t
=
v
2
∆u
∆t
=
v
2
ωv =
v2
2
ω.
So rotations receive a relativistic correction at order v2, like lengths or times. (Tracking the
signs, ωs is antiparallel to ω.) This effect is important for the dynamics of electrons in atoms;
if you don’t account for it, the “spin-orbit” interaction is off by a factor of 2.
(d) As usual, the culprit is loss of simultaneity. If the rockets are fired simultaneously in the
object’s frame, then the object won’t turn in its own frame. But in the lab frame, the rockets
won’t be fired simultaneously, so that the object will momentarily experience a torque about
its center, and turn.
For more discussion, see this paper, which explicitly computes the torque on an accelerating
gyroscope. Its appendix also contains a quick, but tricky derivation of Thomas precession. On
a deeper level, Thomas precession isn’t too surprising. It arises from the fact that boosts don’t
commute (the order you apply them matters), but in special relativity, boosts and rotations
are both Lorentz transformations, and we know from M8 that 3D rotations don’t commute.
11
Kevin Zhou Physics Olympiad Handouts
3 Paradoxes
Now you’re prepared to confront some classic relativistic paradoxes. They won’t appear in compe-
titions, but your understanding of relativity will be deeper if you grapple with them. (Also, now
that we’ve got the basics out of the way, we’ll start setting c = 1 for most problems.)
