---
id: kevin-zhou-m1-p033
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p033
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[4] Problem 33. Two fences of heights h1 and h2 are erected on a horizontal plain, so that the
straight-line distance between the tops of the fences is d. Show that the minimum speed needed to
throw a projectile over both fences is
p
g(h1 + h2 + d).
Solution. It’s tricky to think about how to throw the projectile starting from the ground, because
you need to figure out where to launch and at what angle, under the condition that the trajectory
just touches the tops of both fences. Instead, imagine the projectile starts at the top of the higher
fence; the goal is then to throw it with minimal energy so that it just touches the top of the lower
fence. Later the projectile will reach the ground, but we don’t have to worry about where. Since
mechanics is time-reversible, its speed at this point (which is found easily by energy conservation)
will be the minimal possible speed.
Now there are many ways to do this problem. A very slick solution, which requires no computation
at all, is presented in problem 34. However, we’ll present a more direct attack for completeness.
Note that if you want to hit the top of the lower fence with the minimum velocity, it’s equivalent
to maximizing your throwing range down an inclined plane, namely the plane that connects the
tops of the two fences. Then the optimal launch angle is along the angle bisector, as we found in
problem 31. Using the same starting point as the solution to that problem, we have
−
h
√
d2 − h2
= tanθ −
g
√
d2 − h2
2v2 cos2 θ
where we let h = h2 − h1 > 0. That solution gives a simple expression for tan2θ, so we massage
this equation to
g
v2
=
sin2θ
√
d2 − h2
+
h
d2 − h2
(1 + cos2θ).
We then plug in our previous results, which are
sin2θ =
√
d2 − h2
d
, cos2θ =
h
d
23
Kevin Zhou Physics Olympiad Handouts
to get the result
v2
= (d − h)g = (d + h1 − h2)g.
By energy conservation, the speed at the ground is
v2
0 = v2
+ 2h2g = (d + h1 + h2)g
as desired.
[4] Problem 34. Problems 31 and 33 can be solved with pure geometry. To do this, consider the set
of points, in two dimensions, that a projectile can reach with a fixed initial speed v and a fixed
launch point. It turns out that the boundary of this set (i.e. the curve of points that a projectile can
just barely reach) is a vertical parabola with its focus at the launch point. A parabola is defined as
the set of points whose distance to the focus equals the distance to a line, called the directrix.
(a) Show that trajectories that touch this parabola must be tangent to it.
(b) Show that if any point is reached with the smallest possible initial speed, then the initial
velocity must be perpendicular to the final velocity.
(c) Using the geometric definition of a parabola, recover the answers to problems 31 and 33.
If you really like this kind of thing, you can try Physics Cup 2019, problem 3, with solutions here.
Solution. (a) This is just because the parabola is defined to be the boundary of the set of points
you can hit. If the trajectory weren’t tangent to the parabola, you would be able to hit a
point outside the parabola by continuing it either forwards or backwards.
(b) Let vi be the initial velocity and v̂⊥ be a unit vector in the perpendicular direction. If we
replace the initial velocity by vi + ϵv̂⊥, where ϵ is infinitesimal, then the speed isn’t changed,
which implies that the new trajectory should remain inside the parabola. Now suppose the
original projectile’s velocity is vf when it is tangent to the parabola, at position rf. Then
at the same time, the new projectile’s position is rf + tϵv̂⊥. In order to keep this inside
the parabola for all infinitesimal ϵ, both positive and negative, tϵv̂⊥ must be tangent to the
parabola at this point. Hence v̂⊥ is parallel to vf, so vi is perpendicular to vf, as desired.
(c) A parabola is the set of points equidistant from a focus F and a line, called the directrix. In
this case, the directrix is horizontal, as shown below.
We showed in part (a) that the final velocity vf is tangent to the parabola. Therefore, it must
point along the angle bisector between the downward vertical and the downward direction
along the plane, because this is the direction along which the distance from the focus and
directrix will be increased at the same rate. (You can show, by looking at some angles, that
24
Kevin Zhou Physics Olympiad Handouts
this is equivalent to the so-called “reflective property of the parabola”, which states that a
light beam sent in perpendicular to the directrix will reflect off the parabola to the focus.)
We showed in part (b) that vi is perpendicular to vf, which means it is along the angle
bisector between the upward vertical and the downward direction along the plane. That is
precisely the result we found in problem 31.
As for problem 33, imagine the projectile is launched from the top of the second fence. To
see the points we can hit, we draw a parabola with focus at that point. At the minimum
launching velocity, the parabola should just touch the top of the first fence, as shown below.
The horizontal line shown above is the directrix, and we have x = v2
2/2g where v2 is the
launching velocity from h2.
From the picture, we read off d + h1 = 2x + h2. (The picture is drawn with h1 > h2, while
in the previous explicit calculation we assumed h1 < h2. But it doesn’t really matter, as the
geometric derivation works the same either way!) Thus the launching velocity at h2 satisfies
v2
2/g = d + h1 − h2. We actually care about the launch velocity v0 from the ground, and by
energy conservation, we have
1
2
v2
0 =
1
2
v2
2 + gh2.
Solving for v0 gives the answer,
v0 =
p
g(d + h1 + h2).
[3] Problem 35.   m 1 0IPhO 2012, problem 1A.
5 Reading Graphs
In some kinematics problems, you’ll have to infer what’s going on from a diagram. To make progress,
you’ll have to print out the diagram to make measurements directly on it.
[3] Problem 36. NBPhO 2015, problem 6.
[3] Problem 37. NBPhO 2008, problem 3.
Remark
For a harder problem from the same genre, see EuPhO 2019, problem 3. Almost all com-
petitors received zero points on it, largely because it relies on a specialized trick introduced
earlier in this problem set. You can try it for entertainment if you have time and really like
25
Kevin Zhou Physics Olympiad Handouts
kinematics.
26
