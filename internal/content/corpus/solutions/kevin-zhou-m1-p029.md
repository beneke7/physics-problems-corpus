---
id: kevin-zhou-m1-p029
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p029
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[4] Problem 29. Consider a mass m on a table attached to a spring at the origin with zero relaxed
length, which exerts the force
F = −kr
on the mass. We will find the general solution for r(t) = (x(t),y(t)) in two different ways.
(a) Directly write down the answer, using the fact that the x and y coordinates are independent.
(b) Sketch a representative sample of solutions. What kind of curve does the trajectory follow?
(c) ⋆ Here’s a more unusual way to arrive at the same answer. Go to a noninertial reference frame
rotating with angular velocity ω0 about the origin, so that the centrifugal force cancels out
the spring force. In this frame, the only relevant force is the Coriolis force −2mω0 × v. Find
the general solution in this frame, then transform back to the original frame and show that
you get the same answer as in part (a). (This can get a bit messy; the easiest way is to treat
the plane as the complex plane, i.e. work in terms of the variable r = x + iy.)
Solution. (a) We have a separate equation for each component,
d2x
dt2
= −
k
m
x,
d2y
dt2
= −
k
m
y.
Both describe a harmonic oscillator with angular frequency ω0 =
p
k/m. Then the general
solution can be written as
x(t) = Acos(ω0t + ϕ1), y(t) = B sin(ω0t + ϕ2).
In general, it is very rare for the x and y coordinates to be independent. Another example of
this type is projectile motion in linear drag, F = −kv. In these cases the 2D or 3D problem
is no harder than the 1D version, but we’re rarely so lucky.
(b) In the case where ϕ1 = ϕ2 = 0 and A = B, the mass moves in a circle centered at the origin.
More generally, when the angles ϕi are unequal, the mass can move in an ellipse with center
at the origin.
(c) The centrifugal force is mω2
0r, so to cancel the spring force we need to choose ω0 =
p
k/m.
Now, in the rotating frame, the Coriolis force acts just like a magnetic field: it’s always
perpendicular to the motion, so the solution is circular motion. The angular frequency ωc of
that circular motion satisfies
2mω0v =
mv2
r
= mωcv
20
Kevin Zhou Physics Olympiad Handouts
from which we conclude ωc = 2ω0. So in complex notation,
r(t) = r0 + r1e2iω0t
in the rotating frame. We can return to the original frame by simply multiplying by e−iω0t,
to give
r(t) = r0e−iω0t
+ r1eiω0t
.
Taking real and imaginary parts and letting ri = ai + ibi,
x(t) = (a0 + a1)cos(ω0t) + (b0 − b1)sin(ω0t), y(t) = (b0 + b1)cos(ω0t) + (a1 − a0)sin(ω0t).
This is the same as our result for part (a), after you use the sine and cosine addition formulas
and appropriately redefine the parameters. Evidently, elliptical motion is just the superposition
of two opposite circular motions! (In general, complex numbers are a useful way to deal with
magnetic or Coriolis forces for motion in a plane, where B or ω points perpendicular to the
plane. In these cases the force lies in the plane perpendicular to the velocity, so it’s just
proportional to iṙ, which is nice and simple; we’ll see this idea again later.)
4 Optimal Launching
Finally, we’ll consider projectile motion questions that involve optimization. These are rare on the
USAPhO, but they are quite fun problems, with occasionally very slick solutions.
