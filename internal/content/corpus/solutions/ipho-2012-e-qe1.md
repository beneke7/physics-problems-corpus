---
id: ipho-2012-e-qe1
source: ipho
language: en
solution_language: en
translated: false
problem: ipho-2012-e-qe1
solution_type: official
source_document: solution-document-ipho-2012-e-s
source_pdf: cache/phoxiv/ipho/2012_E_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/ipho/2012_E_S.pdf."
---

Problem E1. The magnetic permeability of water
(10 points)
Part A. Qualitative shape of the water surface (1 points)
Observing reflections from the water surface (in particular,
those of straight lines, such as the edge of a sheet of paper),
it is easy to see that the profile has one minimum and has a
relatively flat bottom, ie. the correct answer is “Option D” (full
marks are given also for Option B). This profile implies that
water is pushed away from the magnet, which means µ < 1
(recall that ferromagnets with µ > 1 are pulled).
Part B. Exact shape of the water surface (7 points)
i. (1.6 pts) The height of the spot on the screen y is tabulated
below as a function of the horizontal position x of the caliper.
Note that the values of y in millimetres can be rounded to in-
tegers (this series of measurements aimed as high as possible
precision).
x (mm) 10 15 20 25 30 32 34 36
y (mm) 11.5 15.6 19.8 24.3 30.2 33.2 37.2 40.5
x (mm) 38 40 42 44 46 48 50 52
y (mm) 42.2 41.4 40.3 40.3 40.8 42 43.2 44.4
x (mm) 54 56 58 60 62 64 66 68
y (mm) 45.3 45.8 45.4 44.4 43.6 46.2 50 53.6
x (mm) 70 72 74 76 78 80 85 90
y (mm) 56.7 59.5 61.6 63.5 65.3 67 70.9 74.9
ii. (0.7 pts)
On this graph, the data of to two different water levels are
depicted; blue curve corresponds to a water depth of ca 2 mm
(data given in the table above); the violet one — to 1 mm.
iii. (0.5 pts) If the water surface were flat, the dependence of x
on y would be linear, and the tangent of the angle α0 would be
given by tanα0 = ∆y
∆x, where ∆x is a horizontal displacement of
the pointer, and ∆y — the respective displacement of the spot
height. For the extreme positions of the pointer, the beam hits
the water surface so far from the magnet that there, the surface
is essentially unperturbed; connecting the respective points on
the graph, we obtain a line corresponding to a flat water sur-
face — the red line. Using these two extreme data points we
can also easily calculate the angle α0 = arctan 74.9−11.5
90−10 ≈ 38◦
.
iv. (1.4 pts) For faster calculations, y − y0 − (x − x0)tanα0
(appearing in the formula given) can be read from the previous
graph as the distance between red and blue line; the red line
is given by equation yr = y0 + (x − x0)tanα0. One can also
precalculate 1
2 cos2
α0 ≈ 0.31. The calculations lead to the fol-
lowing table (with z = tanβ ·105
; as mentioned above, during
the competition, lesser precision with two significant numbers
is sufficient).
x (mm) 10 15 20 25 30 32 34 36
z 0 10 27 66 204 303 473 591
x (mm) 38 40 42 44 46 48 50 52
z 597 428 239 128 53 26 0 -26
x (mm) 54 56 58 60 62 64 66 68
z -72 -145 -278 -449 -606 -536 -388 -254
x (mm) 70 72 74 76 78 80 85 90
z -154 -74 -40 -20 -6 2 -2 0
— page 1 of 4 —
v. (1.6 pts) The water height can be obtained as the integral
h =
R
tanβdx. Thus, we calculate the water height row-by-
row, by adding to the height in the previous row the product
of the horizontal displacement xi+1 −xi with the average slope
1
2(tanβi+1 + tanβi).
x (mm) 10 15 20 25 30 32 34 36
−h (µm) 0 0 1 4 10 15 23 34
x (mm) 38 40 42 44 46 48 50 52
−h (µm) 46 56 63 66 68 69 69 69
x (mm) 54 56 58 60 62 64 66 68
−h (µm) 68 66 61 54 44 32 23 17
x (mm) 70 72 74 76 78 80 85 90
−h (µm) 12 10 9 8 8 8 8 8
Note that the water level height at the end of the table should
be also 0 (this corresponds also to an unperturbed region); the
non-zero result is explained by the measurement uncertainties.
One can improve the result by subtracting from h a linear trend
8µm· x−10mm
80mm .
If the water level above the magnet is 1 mm, the water level
descends below its unperturbed level at the axis of the magnet
by ca 120µm.
vi. (1 pt)
Similarly to the previous figure, blue curve corresponds to
a water depth of ca 2 mm, (data given in the table above), and
the violet one — to 1 mm.
The position of the magnet can be found by measuring the
caliper (find the positions when the laser beam hits the edges of
the magnet and determine the distance between these positions
— the result is ca 24 mm), and using the symmetry: magnet
is placed symmetrically with respect to the surface elevation
curve.
Part C. Magnetic permeability (2 points)
Water surface takes an equipotential shape; for a unit volume of
water, the potential energy associated with the magnetic inter-
action is B2
2µ0
(µ−1
−1) ≈ B2 1−µ
2µ0
; the potential energy associated
with the Earth’s gravity is ρgh. At the water surface, the sum
of those two needs to be constant; for a point at unperturbed
surface, this expression equals to zero, so B2 µ−1
2µ0
+ ρgh = 0
and hence, µ − 1 = 2µ0ρgh/B2
. Here, h = 120µm stands for
the depth of the water surface at the axis of the magnet; note
that we have compensated the cumulative error as described at
the end of the previous task and obtained h as the difference
between the depth at the magnet’s axis (121µm) and the half-
depth at the right-hand-side of the graph (1µm). Putting in
the numbers, we obtain µ − 1 = −1.2 × 10−5
.
— page 2 of 4 —
