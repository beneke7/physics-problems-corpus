---
id: usapho-2013-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2013-a1
solution_type: official
source_document: solution-document-usapho-2013-s
source_pdf: cache/phoxiv/usapho/2013_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2013_S.pdf."
---

A1 - 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the
exam papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• In order to maintain exam security, do not communicate any information about
the questions (or their answers/solutions) on this contest until after April 1, 2013.
Possibly Useful Information. You may use this sheet for both parts of the exam.
g = 9.8 N/kg G = 6.67 × 10−11 N · m2/kg2
k = 1/4π0 = 8.99 × 109 N · m2/C2 km = µ0/4π = 10−7 T · m/A
c = 3.00 × 108 m/s kB = 1.38 × 10−23 J/K
NA = 6.02 × 1023 (mol)−1 R = NAkB = 8.31 J/(mol · K)
σ = 5.67 × 10−8 J/(s · m2 · K4) e = 1.602 × 10−19 C
1eV = 1.602 × 10−19 J h = 6.63 × 10−34 J · s = 4.14 × 10−15 eV · s
me = 9.109 × 10−31 kg = 0.511 MeV/c2 (1 + x)n ≈ 1 + nx for |x| 
 1
sinθ ≈ θ − 1
6θ3 for |θ| 
 1 cosθ ≈ 1 − 1
2θ2 for |θ| 
 1
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part A 3
Part A
Question A1
The flow of heat through a material can be described via the thermal conductivity κ. If the two faces
of a slab of material with thermal conductivity κ, area A, and thickness d are held at temperatures
differing by ∆T, the thermal power P transferred through the slab is
P =
κA∆T
d
A heat exchanger is a device which transfers heat between a hot fluid and a cold fluid; they are
common in industrial applications such as power plants and heating systems. The heat exchanger
shown below consists of two rectangular tubes of length l, width w, and height h. The tubes are
separated by a metal wall of thickness d and thermal conductivity κ. Originally hot fluid flows
through the lower tube at a speed v from right to left, and originally cold fluid flows through the
upper tube in the opposite direction (left to right) at the same speed. The heat capacity per unit
volume of both fluids is c.
The hot fluid enters the heat exchanger at a higher temperature than the cold fluid; the difference
between the temperatures of the entering fluids is ∆Ti. When the fluids exit the heat exchanger
the difference has been reduced to ∆Tf. (It is possible for the exiting originally cold fluid to have
a higher temperature than the exiting originally hot fluid, in which case ∆Tf < 0.)
l
h
d
h
w
v
v
Assume that the temperature in each pipe depends only on the lengthwise position, and consider
transfer of heat only due to conduction in the metal and due to the bulk movement of fluid. Under
the assumptions in this problem, while the temperature of each fluid varies along the length of the
exchanger, the temperature difference across the wall is the same everywhere. You need not prove
this.
Find ∆Tf in terms of the other given parameters.
Solution
To see why the temperature difference across the wall is the same everywhere along the wall,
note that at every point along the wall, the warmer fluid on one side transfers energy to the colder
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part A 4
fluid on the other. Since the heat capacities are equal, the temperature of the warmer fluid drops
at the same rate the temperature of the colder fluid rises. But since the fluids move at the same
speed in opposite directions, this means the temperature difference is constant.
Suppose this temperature difference is ∆Tw. Since the total area of the wall is lw, the power
transferred across the wall is
P =
κlw
d
∆Tw
In a time dt, the energy transferred is therefore
dE =
κlw
d
∆Tw dt.
Meanwhile, suppose the red fluid enters at temperature Tr and the blue fluid at temperature Tb.
The red fluid exits at temperature Tb + ∆Tw, so the overall temperature change of the red fluid is
∆Tr = Tr − (Tb + ∆Tw) = ∆Ti − ∆Tw
In a time dt, a volume of red fluid vwh dt enters the pipe, and the same volume leaves, with a
temperature ∆Tr higher. Then the total energy transferred to the red fluid is
dE = vwhc dt ∆Tr = vwhc(∆Ti − ∆Tw) dt.
We would get the same equation if we considered the blue fluid, as expected by energy conservation.
However, this requires vwhc to be the same for both fluids. If this were not true, we would instead
get a contradiction, reflecting the fact that ∆Tw could not be constant.
Equating our two expressions for dE gives
κlw
d
∆Tw = vwhc(∆Ti − ∆Tw) ⇒ ∆Tw =
∆Ti
1 + α
, α =
κl
dvhc
.
Because the red fluid exits at Tb + ∆Tw and the blue fluid exits at Tr − ∆Tw,
∆Tf = (Tb + ∆Tw) − (Tr − ∆Tw) = −∆Ti + 2∆Tw = ∆Ti

2
1 + α
− 1

The performance of the heat exchanger is determined by the dimensionless parameter α.
There are several ways we can check this result. We can check if α is correct by dimensional
analysis or common sense; for example, it’s clear that a long pipe improves performance. We also
see that in the limit of poor performance, α → 0, we find no heat exchange at all, ∆Tf = ∆Ti.
The best possible performance, attained for α → ∞, is ∆Tf = −∆Ti, a complete reversal of the
temperatures of the fluids. This is much better than the best possible performance if the two fluids
moved the same direction, which would be ∆Tf = 0. The general idea here is called countercurrent
heat exchange, and it appears in both biology and practical engineering.
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part A 5
