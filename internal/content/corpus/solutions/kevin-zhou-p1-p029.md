---
id: kevin-zhou-p1-p029
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p029
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[2] Problem 29. Some more about power.
(a) Use similar reasoning to derive P = Fv.
(b) An electric train has a power line that can deliver power P(x), where x is the distance along
the track. If the train starts at rest at x = 0, find its speed at point x0 in terms of an integral
of P(x). (Hint: try to get rid of the dt’s to avoid having to think about the time dependence.)
Solution. (a) First, let’s use differentials. Since P = dW/dt, we have
dW = Fv dt.
Using the same reasoning as before, dW = md(v2)/2 = mv dv, so
mv dv = mav dt.
Canceling on both sides, this simplifies to dv = adt, which is clearly true. Alternatively, we
can use derivatives directly. We have
P =
dW
dt
= mv
dv
dt
= mva = Fv
35
Kevin Zhou Physics Olympiad Handouts
as desired.
(b) We note that
dW = mv dv
but we also have
dW = P dt = P
dt
dx
dx =
P
v
dx
where we introduced a factor of v to convert dt (which we don’t want to deal with) to dx.
Doing some rearrangement, Z
mv2
dv =
Z
P dx.
Performing the integral, we have
v(x0) =

3
m
Z x0
0
P(x)dx
 1/3
.
In the context of drag car racing, this is called Huntington’s rule.
If P is constant, we must have F ∝ 1/v. But how can such a force arise? A car engine (or
your legs, on a bicycle) turns an axle at angular velocity ω with torque τ with P = τω. The
engine works best at a restricted range of ω. So when a modern car increases its speed, the
gear is automatically changed to keep ω near the optimal range. At maximum power, P is
fixed, so τ is roughly fixed as well, but the higher gear reduces the torque acting on the wheels,
and hence the force accelerating the car.
