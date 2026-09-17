---
id: kevin-zhou-w1-p008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-p008
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

[3] Problem 8. [A] With a little vector calculus, the results above can be generalized to an arbitrary
number of dimensions. For example, ideal waves in three dimensions obey
∂2ψ
∂t2
= v2

∂2ψ
∂x2
+
∂2ψ
∂y2
+
∂2ψ
∂z2

= v2
∇2
ψ
where the function ψ(r,t) could stand for a variety of things, such as the pressure, density, or
temperature (for a sound wave) or the electric or magnetic field (for an electromagnetic wave).
(a) For simplicity, let’s restrict to waves which have spherical symmetry, so that ψ only depends
on r and t. Plug such a spherical wave into the wave equation, and simplify until you get an
equation only in terms of the partial derivatives of ψ(r,t).
10
Kevin Zhou Physics Olympiad Handouts
(b) Because the area of a sphere goes as r2, we expect the energy density of a spherical wave
to fall as 1/r2, and therefore expect the amplitude to fall as 1/r. Therefore, it is useful to
consider the quantity rψ, which has this falloff factored out. By considering the differential
equation that rψ obeys, find the general solution for ψ(r,t).
Solution. (a) To do this, we need to simplify the partial derivatives with respect to x, y, and z.
We have
∂ψ
∂x
=
∂ψ
∂r
∂r
∂x
where these partial derivatives are all keeping the other spatial variables y and z constant. To
evaluate ∂r/∂x, we note that
r2
= x2
+ y2
+ z2
and take ∂/∂x of both sides, giving
2r
∂r
∂x
= 2x
from which we conclude
∂r
∂x
=
x
r
.
Plugging this back in, we conclude
∂ψ
∂x
=
x
r
∂ψ
∂r
.
Of course, we actually want the second spatial derivative, which is
∂2ψ
∂x2
=
1
r
∂ψ
∂r
−
x2
r3
∂ψ
∂r
+
x
r
∂
∂x
∂ψ
∂r
=
1 − x2/r2
r
∂ψ
∂r
+
x2
r2
∂2ψ
∂r2
where we used the product rule. By similar logic for the other components, we conclude
∂2ψ
∂t2
= v2

3 − (x2 + y2 + z2)/r2
r
∂ψ
∂r
+
x2 + y2 + z2
r2
∂2ψ
∂r2

= v2

2
r
∂ψ
∂r
+
∂2ψ
∂r2

.
Of course, a shortcut to this result would be to just look up the formula for the Laplacian in
spherical coordinates, but it’s good to go through this once in your life.
(b) We notice that
∂2
∂t2
(rψ) = v2 ∂2
∂r2
(rψ)
by the product rule. That is, the quantity rψ obeys the ordinary, one-dimensional wave
equation, for which we already know the general solution! We thus conclude
ψ(r,t) =
f(r − vt) + g(r + vt)
r
.
If we also want the wave not to blow up at r = 0, we additionally need f(−vt) + g(vt) = 0.
By the way, an analogous trick does not work for a cylindrical wave (which is equivalent to a
wave spreading out in two dimensions). The quantity
√
rψ does not maintain its profile, but rather
develops a tail behind it. More generally, the trick above only works in an odd number of dimensions.
2 Standing Waves
11
Kevin Zhou Physics Olympiad Handouts
Idea 3
A standing wave is a solution to the wave equation of the form
y(x,t) = f(x)cos(ωt).
Typically, only discrete values of ω are possible, with the allowed values depending on the
boundary conditions. If the setup is translationally symmetric, then f(x) will be sinusoidal.
If you want to get some intuition, try playing with this PhET simulation.
