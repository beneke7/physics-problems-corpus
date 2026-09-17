---
id: solution-document-gpho-2019-experiment-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2019_experiment_solutions.pdf
extraction_method: pdftotext-raw
mapped_problems: [gpho-2019-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2019_experiment_solutions.pdf."
---

GPhO Muscat 2019
COVER
The 3rd
Gulf Physics Olympiad — Experimental Competition Solutions
Muscat, Oman — October 8th
2019
Error analysis
In what follows, any time errors of the mean of tabulated data are calculated, standard deviation is used. Assuming there are
N data points of the form xi, i ∈ {1,...,N}, the mean is
xavg =
1
N
N X
i=1
xi,
and the standard deviation of the mean
∆xavg =
sPN
i=1(xi − xavg)2
N(N − 1)
.
For error propagation through equations, Pythagoran rule for adding errors in quadrature is used (alternatively, one could use
min-max but for lower accuracy). In general, when you have a variable y be a function of variables xi, i ∈ {1,...N} with errors
∆xi, then the error of y is given by
∆y =
v
u
u
t
N X
i=1

∂y
∂xi
2
∆x2
i .
Any time the methods used in finding the errors is not specified, 50% of the marks for error analysis are to be deducted.
— page 1 of 6 —Problem E1. Magnetic properties of matter (20
points)
Part A. Diameter of the syringe needle (3 points)
In order to maximize the accuracy, the path length of the
diffracted laser needs to be maximized since that increases the
separation of the maxima on the screen. (0.2pts)
A two-fold increase in the path length can be achieved by using
a mirror to reflect the laser from one end of the table to the
other and then back again. (0.3pts)
For both needles, the distance from needle to the mirror and
from the mirror to the screen were both L0 = 119cm ± 0.5cm.
The optical path length is then L = 2L0 = 238cm ± 0.5cm.
(0.3pts)
On the screen, the optical path difference between two neigh-
bouring maxima is λ, which corresponds to a distance of
l1 = λ
d L on the screen, where d is the diameter of the syringe
needle. In order to increase the accuracy, the measurements
should cover as many maxima, N as possible. Then the separ-
ation is lN = NLλ
d and d = NLλ
ln
. (0.4pts)
For the white needle, following measurements were made:
i N lN(mm) lN/N(mm) d(mm)
1 22 89 4.05 0.313
2 18 74 4.11 0.308
3 20 79 3.95 0.321
1 measurement (0.4/0.6pts)
2 measurements (0.5/0.6pts)
3 or more measurements (0.6/0.6pts)
The average diameter is found to be d = 0.31mm(0.1pts)
with an error of ∆d = 0.004mm. (0.2pts)
For the green needle, following measurements were made:
i N lN(mm) lN/N(mm) d(mm)
1 18 98 5.44 0.233
2 15 76 5.07 0.250
3 16 85 5.31 0.238
1 measurement (0.4/0.6pts)
2 measurements (0.5/0.6pts)
3 or more measurements (0.6/0.6pts)
The average diameter is found to be d = 0.24mm (0.1pts)
with an error of ∆d = 0.005mm. (0.2pts)
Part B. Surface tension of water (4 points)
After correctly setting up the equipment and pulling the
middle part downwards, the needle should start dripping at one
point. This happens because the surface tension isn’t enough
to hold back the additional pressure pushing the water down.
Note that the critical case is when the radius of curvature of
the water drop is the smallest, because then the extra pressure,
2σ/r, is the biggest. This happens when r = d/2, shown in the
figure below. (0.6pts)
The pressure balance reads
2σ/r = ρgh,
where ρgh is the pressure from the water column of height h
with respect to the needle. If we measure h, we can thus express
the surface tension as
σ =
ρghr
2
=
ρghd
4
. (1)
(0.6pts)
The following repeated measurements were made for the
white needle:
i h(mm)
1 84
2 80
3 83
4 82
5 83
1 measurement (0.2/0.6pts)
2-4 measurements (0.4/0.6pts)
5 or more measurements (0.6/0.6pts)
The average height is found to be havg = 82.4mm with an error
of ∆havg = 0.7mm, and using (1), we get σ = 63.4mN/m with
an error of ∆σ = σ
p
(∆havg/havg)2 + (∆d/d)2 = 1mN/m.
— page 2 of 6 —values (0.3pts)
errors (0.4pts)
The measurements for the green needle were:
i h(mm)
1 114
2 113
3 116
4 112
5 113
1 measurement (0.2/0.6pts)
2-4 measurements (0.4/0.6pts)
5 or more measurements (0.6/0.6pts)
The average height is havg = 113.6mm with an error ∆hmax =
0.7mm. That gives σ = 67.0mN/m, and an error of ∆σ =
1.5mN/m.
values (0.3pts)
errors (0.4pts)
The final expression for the surface tension is found by av-
eraging the results of the white and green needle. This yields
σ = (σwhite + σgreen)/2 = 65.2mN/m, (0.1pts)
∆σ =
q
∆σ2
white/2 + ∆σ2
green/2 = 1.3mN/m. (0.1pts)
Part C. Susceptibility of graphite (4 points)
Taking only 1 measurement of the diameter of the mag-
net is enough since the measurement results are all virtually
the same. The error of the result comes from the accuracy of
a ruler, taken to be 0.3mm. The diameter of the magnet is
measured to be d = 10.0mm.
value (0.3pts)
error (0.2pts)
In both configurations, the graphite will experience three
forces: gravity, normal force and magnetic force, all of them
being in balance, with the magnetic force being at an angle
45◦
with respect to the horizon. Purely under the force of
gravity, the graphite would start accelerating with accelera-
tion ag ≈ gα (where we have used small angle approximations)
along the water surface (normal force does not contribute to
this as it’s perpendicular to the surface). Since the angles are
small, this translates to horizontal acceleration of the same
magnitude. This is counteracted by the acceleration from the
magnet, given by the formula
explaining the force balance (0.5pts)
am =
F
m
= (|χg − χw|)
1
2µ0
dB2
dz
= (|χg − χw|)
∂w
∂z
.
Since the magnet is pushing the graphite at a 45◦
angle, the
force balance is am/
√
2 = ag. This let us express χg in terms
of the measured quantities α and ∂w
∂z :
χg = χw −
√
2gα
∂w
∂z
. (2)
(0.6pts)
Here we’ve been careful with the signs, since graphite must
have a larger susceptibility in magnitude than water but it’s
still negative. This concludes the necessary theoretical calcula-
tions.
In the first configuration with the equilateral triangle, fol-
lowing measurements for the distance from the wall were made:
i l(mm)
1 12
2 10
3 11
4 10
5 11
1-2 measurement (0.3/0.5pts)
3-4 measurements (0.4/0.5pts)
5 or more measurements (0.5/0.5pts)
this gives an average of l = 10.8mm with an error of ∆l =
0.4mm + 0.5mm = 0.9mm, where we have added the meas-
urement error from the ruler and the standard deviation from
the tabulated data (we usually omit the ruler’s accuracy in the
case of repeat measurements, but that’s usually because the
ruler’s accuracy is much smaller than standard deviation).
The corresponding surface slope can be read from the graph,
but first we need to convert l to units of λ =
p
σ/(ρg) =
2.58mm, with ∆λ = 0.03mm. Thus, l = (l/2.58mm)λ = 4.2λ
with ∆l = 0.4λ. From figure 7, we measure
α = 2.4 × 10−3
rad.
∆α = 1.8 × 10−3
rad
where the error was measured from the figure by looking at
α(λ ± ∆λ). The error is big but this is to be expected due to
the exponential nature of the graphs.
To get a reading of the magnetic pressure gradient, we first
calculate the distance of the graphite from the surface of the
magnet. We see that the distance is that of the height of
an equilateral triangle with side length d = 10mm ± 0.3mm.
— page 3 of 6 —The distance is then simply l1 =
√
3/2d = 8.7mm ± 0.3mm.
From figure 8, we read the magnetic pressure gradient to be
∂w
∂z = 6.1 × 105
J/m4
± 0.9 × 105
J/m4
.
Finally, using equation (2), we find
χg = 6.4 × 10−8
m3
/kg ± 4 × 10−8
m3
/kg.
reading the data from the graphs properly (0.2pts)
final value for χg (0.1pts)
error propagation (0.3pts)
We go through the same calculations in the 2nd configura-
tion to get a different estimate for χg. The measurements for
2nd configuration are tabulated below
i l(mm)
1 7
2 8
3 8
4 6
5 7
1-2 measurement (0.3/0.5pts)
3-4 measurements (0.4/0.5pts)
5 or more measurements (0.5/0.5pts)
We find l = 7.2mm, ∆l = 0.4mm + 0.5mm = 0.9mm.
This corresponds to l = 2.8λ ± 0.4λ From figure 7, we read
α = 1.7 × 10−2
rad ± 0.9 × 10−2
rad.
In this case, a right-angled isosceles is formed. It’s easy to
see that the graphite is distance d/2 = 5mm±0.15mm from the
surface of the magnet. This gives the magnetic pressure gradi-
ent to be ∂w
∂z = 4.6 × 106
J/m4
± 0.4 × 106
J/m4
. This gives
the susceptibility to be χg = 6.0 × 10−8
kg/m3
± 3kg/m3
.
reading the data from the graphs properly (0.2pts)
final value for χg (0.1pts)
error propagation (0.3pts)
Finally, we average the two results to get
χg = 6.2 × 10−8
kg/m3
± 4 × 10−8
kg/m3
.
final answer (0.1pts)
error (0.1pts)
Part D. Relative permeability of ferromagnetic strip (9
points)
i. (1 pt) The voltage on the output leads of the battery holder
can be measured to be E = 3.17V, no uncertainty is needed.
(0.5pts)
After correctly setting up the experimental equipment, the
zero off-set is measured to be V0 = 2mV. (0.5pts)
ii. (4 pts) Rearranging the expression for the magnetic field
strength between the strips, B = B0cosh(z/λ), we get
cosh−1
(B/B0) = z/λ. (0.5pts)
We can measure z and V , and V can be converted into mag-
netic field strength B by noting that the maximal field strength
Bmax = 3V· 10µT
1mV = 30mT is measured at V = E, and thus,
we must have
B = Bmax
V
E
= 30mT·
V
E
. (3)
(0.3pts)
This relies on the fact that the magnetic field strength scales
linearly with voltage. To linearize the measured data, we need
to know B0. This can be found by noting that cosh(0) = 1 and
so B0 = B(z = 0). This we can read from the measured data
to be B0 = 0.227T. (0.2pts)
Now note that we can plot cosh−1
(B/B0) against z to get
a linear graph with slope 1/λ. The tabulated data is given
below.
z(cm) V (mV) B(mT) cosh−1
(B/B0)
0 24 0.227 0.130
5 25 0.237 0.316
10 27 0.256 0.513
15 30 0.284 0.707
20 35 0.331 0.936
25 44 0.416 1.225
30 52 0.492 1.418
35 58 0.549 1.539
40 71 0.672 1.757
45 85 0.804 1.946
50 104 0.984 2.154
55 200 1.893 2.818
less than 3 measurements (0.0/0.4pts)
3 - 11 measurements (0.2/0.4pts)
correct number of measurements (0.4/0.4pts)
calculations (0.4pts)
It is important to note that on the graph, the line doesn’t
need to pass through origin due to systematic errors affecting
all the points equally. For example, the measured z = 0 doesn’t
coincide with the actual origin due to the physical dimensions
of the magnet. Furthermore, the final point in the graph is not
— page 4 of 6 —used for fitting since it deviates due to the over saturation effect.
z
z
plotting (1.0pts)
From the graph, we read the slope to be 1/λ = 0.0409m−1
.
(0.2pts)
The uncertainty can be estimated by looking at the spread
of lines that can be reasonably expected to pass through the
points. This yields ∆(1/λ) = 0.00072m−1
. (0.2pts)
Now, µ = 2λ2
δh . We measure h, the width of the gap, with a
ruler to be h = 7.7mm±0.3mm. The error is found by noting
that the error of a ruler is half, or slightly less depending on
how good your eye is, of the distance between two neighbour-
ing ticks, 0.1mm. Finally, we calculate µ = 57000 (0.4pts)
with an error of
∆µ = µ
s
2
∆(1/λ)
(1/λ)
2
+

∆h
h
2
= 3000. (0.4pts)
iii. (2 pts) The tabulated measurement data is given below.
The voltages are translated to teslas using equation (3).
x(mm) s(mm) V (mV) B(mT)
0 -18 18 0.170
2 -16 29 0.274
4 -14 41 0.388
6 -12 43 0.407
8 -10 44 0.416
10 -8 46 0.435
12 -6 48 0.454
14 -4 50 0.473
16 -2 52 0.492
18 0 52 0.492
20 2 51 0.483
22 4 50 0.473
24 6 49 0.464
26 8 47 0.445
28 10 46 0.435
30 12 44 0.416
32 14 40 0.379
34 16 28 0.265
36 18 18 0.170
less than 3 measurements (0.1/0.6pts)
3 - 5 measurements (0.3/0.6pts)
6 - 7 measurements (0.4/0.6pts)
correct number of measurements (0.6/0.6pts)
calculations (0.4pts)
x is measured with respect to the first data point, s is with
respect to the symmetry axis (found to be at x = 18mm). The
graph for B vs s is given below.
plotting (0.6pts)
As can be seen, the magnetic field strength is uniform and
with small deviations up to ∼ 10% over the width of the strip.
Outside the strip, the field strength starts dropping rapidly.
(0.4pts)
— page 5 of 6 —iv. (2 pts) The main idea relies on the fact that magnetic
field lines are conserved, or in other words the magnetic flux
through a closed surface is 0. This is equivalent to Gauss’ law.
In the context of this problem, it implies that the flux entering
the gap must come from the decrease of the flux flowing along
the ferromagnetic strip. The flux flowing outside the strip will
be negligible because of the high value of µ.
Let the total flux along the strip be Φin, z-axis be along
the strip, and x-axis be horizontal, perpendicular to z. Also
denote the flux through the x − z plane intersecting the gap
from z = 0 to z as Φz. The Gauss’ law can then be formulated
as
Φin(z) − Φin(z = 0) = Φz. (4)
(0.5pts)
Note that since the flux inside the ferromagnet drops exponen-
tially, and judging from the tabulated data, it’s reasonable to
say that Φin(z) ≫ Φin(z = 0). (0.1pts)
We can approximate the magnetic field to be homogeneous
throughout the cross-section of the ferromagnet (to very high
accuracy, this can be verified using Ampère’s law). Then
Φin(z) = aδBin(z), where a is the width of the ferromagnet,
measured to be a = 30mm ± 0.3mm, and Bin(z) is the mag-
netic field inside the ferromagnet. (0.1pts)
This means that if we calculate Φz, we can find Bin us-
ing equation (4). To find Φz, we need to sum the magnetic
field over the z- and x-direction. In integral form, it looks like
Φz =
Rz
0
dz′
R∞
−∞
dxB(x,z′
). We can simplify this with the in-
tegral Φz = aeﬀ
Rz
0
dz′
B(z′
), where aeﬀ is the effective width
of the gap such that the area under the graph found in the
previous part is equal to B(z′
)aeﬀ, where B(z′
) is the maximal
magnetic field in the gap found in part (ii).
From an approximate plot shown below, we find aeﬀ =
0.955a = 28.7mm.
Finding aeﬀ using a plot, or something equivalent (0.2pts)
All that’s left is to find
Rz
0
dz′
B(z′
). This can be found from
the tabulated data found in part (ii) by summing over the data
points using the trapezoid rule,
Φi = Φi−1 +
Bi + Bi−1
2
(zi − zi−1)aeﬀ
= Φi−1 +
Bi + Bi−1
2
∆A = Φi−1 + ∆Φi,
(0.3pts)
where ∆A = (zi − zi−1)aeﬀ = 5cm·28.7mm = 0.00144m2
is
the effective area of the last segment and ∆Φi = Bi+Bi−1
2 ∆A
the flux through the corresponding surface. After that, the
magnetic field inside the ferromagnetic is simply found using
(4) as Bin = Φin
aδ .
The calculated data is given below alongside with the plot
of Bin vs z.
z(cm) B(mT) ∆Φ(µT·m2
) Φ(µT·m2
) Bin(T)
0 - - 0
5 0.232 0.334 0.334 0.041
10 0.246 0.354 0.688 0.085
15 0.27 0.389 1.077 0.133
20 0.308 0.444 1.521 0.188
25 0.374 0.539 2.06 0.254
30 0.454 0.654 2.714 0.335
35 0.521 0.75 3.464 0.428
40 0.61 0.878 4.342 0.536
45 0.738 1.063 5.405 0.667
50 0.894 1.287 6.692 0.826
55 1.438 2.071 8.763 1.082
calculations (0.3pts)
plotting (0.3pts)
Since in the graph found in part (ii), the saturation cut-off
happened at the last data point, we can use the corresponding
value for Bin as an estimate for Bs. Then Bs ∼ 1.1T.
(0.2pts)
— page 6 of 6 —
