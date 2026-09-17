---
id: kevin-zhou-m8-p028
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m8-p028
solution_type: author
source_document: solution-document-kevin-zhou-m8sol
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M8Sol.pdf."
---

[3] Problem 28. In this problem, we’ll go through Laplace’s slick derivation of Kepler’s first law.
Throughout, we assume the orbit takes place in the xy plane, with the Sun at the origin.
(a) Show that
ẍ = −
γx
r3
, ÿ = −
γy
r3
where γ is a constant that depends on the parameters.
(b) Show that
d
dt
(r3
ẍ) = −γẋ,
d
dt
(r3
ÿ) = −γẏ.
(c) Show that
d
dt
(r3
r̈) = −γṙ.
(Hint: this can get messy. As a first step, try showing the left-hand side is equal to
(r2/2)d3(r2)/dt3. You will have to switch variables to x and y and then switch back; for
these purposes it’s useful to use the results of part (a), and the definition r2 = x2 + y2.)
33
Kevin Zhou Physics Olympiad Handouts
(d) Define ψ(t) = r(t)3. In parts (b) and (c), we have shown that the differential equation
d
dt

ψ(t)
du
dt

= −γu
has three solutions, namely ẋ, ẏ, and ṙ. Any second-order linear differential equations only
has two independent solutions. If ẋ and ẏ are not independent, the orbit is simply a line,
which is trivial. Assuming that doesn’t happen, they are independent, so ṙ must be a linear
combination of them,
ṙ = Aẋ + Bẏ.
Use this result to argue that the orbit is a conic section.
Solution. (a) This just follows from F = ma. In terms of the usual parameters, γ = GM.
(b) This immediately follows from clearing denominators in the results of part (a) and differenti-
ating both sides.
(c) Following the hint, we have
d
dt
(r3
r̈) = r3 ...
r + 3r2
ṙr̈ =
1
2
r2 d3
dt3
(r2
) = r2 d2
dt2
(rṙ).
At this point, we switch back to x and y. By differentiating r2 = x2 + y2,
rṙ = xẋ + yẏ.
Plugging this in gives
d
dt
(r3
r̈) = r2 d2
dt2
(xẋ + yẏ) = r2 d
dt
(xẍ + yÿ + ẋ2
+ ẏ2
).
We see that we’ll have a lot of factors involving ẍ and ÿ, but we know how to handle these
using part (a). Using part (a) several times, we have
ẋẍ + ẏÿ = −
γ
r3
(xẋ + yẏ) = −
γ
r3
(rṙ) = −
γṙ
r2
and
xẍ + yÿ = −
γ
r3
(x2
+ y2
) = −
γ
r
.
Plugging these results in, we find
d
dt
(r3
r̈) = −r2

d
dt
γ
r

+
2γṙ
r2

= −γṙ
just as desired.
(d) Integrating both sides,
r = Ax + By + C.
But then squaring both sides shows that the equation of the orbit is just a quadratic in
x and y, which is precisely the form of a conic section in Cartesian coordinates. You can
also show that the focus is at the origin, though this requires a bit more knowledge about conics.
This question was inspired by this paper, which has a few more derivations of Kepler’s first law.
34
Kevin Zhou Physics Olympiad Handouts
6 Mechanics and Geometry
For dessert, we’ll consider a few cute problems that relate statics to geometry.
