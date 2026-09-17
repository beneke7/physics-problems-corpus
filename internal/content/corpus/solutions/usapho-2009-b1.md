---
id: usapho-2009-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2009-b1
solution_type: official
source_document: solution-document-usapho-2009-s
source_pdf: cache/phoxiv/usapho/2009_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2009_S.pdf."
---

Question B1
A bowling ball and a golf ball are dropped together onto a flat surface from a height h. The bowling
ball is much more massive than the golf ball, and both have radii much less than h. The bowling
ball collides with the surface and immediately thereafter with the golf ball; the balls are dropped
so that all motion is vertical before the second collision, and the golf ball hits the bowling ball at
an angle α from its uppermost point, as shown in the diagram. All collisions are perfectly elastic,
and there is no surface friction between the bowling ball and the golf ball.
h
l
α
After the collision the golf ball travels in the absence of air resistance and lands a distance l
away. The height h is fixed, but α may be varied. What is the maximum possible value of l, and
at what angle α is it achieved?
You may present your results as decimals, but remember that you are not allowed to use
graphical or algebraic functions of your calculator.
Solution
Both balls arrive at the surface with a speed v0, which we can determine as usual via conservation
of energy:
1
2
mv2
0 = mgh ⇒ v0 =
p
2gh.
After the bowling ball collides with the surface, it is traveling upwards at v0 and the golf ball is
traveling downwards at v0. The subsequent collision is most easily understood in the reference
frame of the bowling ball; in this frame, the golf ball is traveling downwards at 2v0 and the bowling
Copyright ©2009 American Association of Physics Teachers
2009 Semifinal Exam Part B 11
ball is stationary. Since the bowling ball is very massive compared to the golf ball, the golf ball
will rebound at the same speed 2v0. Since there is no surface friction, the angle of reflection will be
equal to the angle of incidence. Therefore the golf ball will emerge at an angle 2α to the vertical.
In the bowling ball’s reference frame, the golf ball emerges with horizontal velocity 2v0 sin2α
and upward vertical velocity 2v0 cos2α. Transforming these back to the original frame of reference,
we obtain the initial conditions for the golf ball’s projectile motion,
vx = 2v0 sin2α, vy = 2v0 cos2α + v0.
The time of flight t of the golf ball is given by
t =
2vy
g
and therefore the range is
l = vxt =
2vxvy
g
.
Combining with our previous result,
l =
2
g
(2v0 sin2α)(2v0 cos2α + v0) =
8v0
2
g
sin2α

cos2α +
1
2

.
For convenience we set β = 2α. Inserting the expression for v0,
l = 16h sinβ

cosβ +
1
2

⇒
dl
dβ
= 16h

cosβ

cosβ +
1
2

− sin2
β

Setting this to zero to find the maximum,
cos2
β − sin2
β +
1
2
cosβ = 0.
This can be rewritten as a quadratic in cosβ,
2cos2
β +
1
2
cosβ − 1 = 0 ⇒ cosβ =
−1
2 ±
q
1
4 − 8
4
.
Taking the positive root,
cosβ =
√
33 − 1
8
= 0.593, sinβ =
p
1 − cos2 β = 0.805.
So at maximum,
l = 16h · 0.805 ·

0.593 +
1
2

= 14.08h
which occurs at
cos2α = 0.593 ⇒ α = 0.468 = 26.8◦
.
Copyright ©2009 American Association of Physics Teachers
2009 Semifinal Exam Part B 12
