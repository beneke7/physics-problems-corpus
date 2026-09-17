---
id: usapho-2011-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2011-a1
solution_type: official
source_document: solution-document-usapho-2011-s
source_pdf: cache/phoxiv/usapho/2011_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2011_S.pdf."
---

A1 - 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the
exam papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• In order to maintain exam security, do not communicate any information about
the questions (or their answers/solutions) on this contest until after April 1, 2011.
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
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part A 3
Part A
Question A1
Single bubble sonoluminescence occurs when sound waves cause a bubble suspended in a fluid
to collapse so that the gas trapped inside increases in temperature enough to emit light. The
bubble actually undergoes a series of expansions and collapses caused by the sound wave pressure
variations.
We now consider a simplified model of a bubble undergoing sonoluminescence. Assume the bub-
ble is originally at atmospheric pressure P0 = 101 kPa. When the pressure in the fluid surrounding
the bubble is decreased, the bubble expands isothermally to a radius of 36.0 µm. When the pressure
increases again, the bubble collapses to a radius of 4.50 µm so quickly that no heat can escape.
Between the collapse and subsequent expansion, the bubble undergoes isochoric (constant volume)
cooling back to its original pressure and temperature. For a bubble containing a monatomic gas,
suspended in water of T = 293 K, find
a. the number of moles of gas in the bubble,
b. the pressure after the expansion,
c. the pressure after collapse,
d. the temperature after the collapse, and
e. the total work done on the bubble during the whole process.
You may find the following useful: the specific heat capacity at constant volume is CV = 3R/2
and the ratio of specific heat at constant pressure to constant volume is γ = 5/3 for a monatomic
gas.
Solution
a. The most important thing in problems like this is to keep track of all the variables carefully.
Let the initial pressure, volume, and temperature be P0, V0, and T0 = T. The steps are:
i. Isothermal expansion, after which we have P1, V1, and T1 = T0.
ii. Adiabatic collapse, after which we have P2, V2, and T2.
iii. Isochoric cooling, to return to the initial state. This implies V2 = V0.
In all cases the bubble contains an ideal monatomic gas, so
PiVi = nRTi.
We are also given the volumes
V0 =
4
3
π(4.50µm)3
= 3.82 × 10−16
m3
, V0 =
4
3
π(36.0µm)3
= 1.95 × 10−13
m3
In particular, we have
n =
P0V0
RT0
= 1.58 × 10−14
mol.
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part A 4
b. During an isothermal expansion, PV is constant by the ideal gas law. Thus
P1 =
P0V0
V1
= 197Pa.
c. During an adiabatic process, PV γ is constant where here γ = 5/3, so
P2 =
P1V γ
1
V γ
2
= 6.46 × 106
Pa.
d. To find the temperature after collapse, we can use the ideal gas law again,
T2 =
P2V2
nR
= 1.88 × 104
K.
e. The work done on the bubble is dW = −P dV . During an isothermal expansion, we have
Z
P dV = nRT
Z
dV
V
= nRT log
Vf
Vi
so the work done on the bubble during the isothermal expansion is
W1 = −nRT log
V1
V0
= −2.40 × 10−10
J.
During the adiabatic collapse, it is easiest to find the work done on the bubble using the first
law of thermodynamics, ∆E = Q + W. Since the process is adiabatic, Q = 0, so
W2 = ∆E = nCV ∆T =
3nR
2
(T2 − T1) = 3.64 × 10−9
J
where we used the fat that CV = 3R/2 for a monatomic gas. There is no work done during
the isochoric process, so the total work done on the bubble is
W = 3.40 × 10−9
J.
Since the process is cyclic, this energy must have been radiated away by the bubble, in a flash
of light. Note that the final (positive) sign is important. Some textbooks define dW to be the
work done on the bubble, while some define it to be the work done by the bubble. Depending
on the conventions used, there may be some extra signs in intermediate steps, but the final
answer doesn’t depend on the convention.
Question A2
A thin, uniform rod of length L and mass M = 0.258 kg is suspended from a point a distance R
away from its center of mass. When the end of the rod is displaced slightly and released it executes
simple harmonic oscillation. The period, T, of the oscillation is timed using an electronic timer.
The following data is recorded for the period as a function of R. What is the local value of g? Do
not assume it is the canonical value of 9.8 m/s2. What is the length, L, of the rod? No estimation
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part A 5
of error in either value is required. The moment of inertia of a rod about its center of mass is
(1/12)ML2.
R T
(m) (s)
0.050 3.842
0.075 3.164
0.102 2.747
0.156 2.301
0.198 2.115
R T
(m) (s)
0.211 2.074
0.302 1.905
0.387 1.855
0.451 1.853
0.588 1.900
You must show your work to obtain full credit. If you use graphical techniques then you must
plot the graph; if you use linear regression techniques then you must show all of the formulae and
associated workings used to obtain your result.
Solution
Using the parallel axis theorem, the period of such a physical pendulum is
T = 2π
s
I
mgR
= 2π
s
R2 + L2/12
gR
.
We can rearrange this into the linear form
y = mx + b, y = R2
, x =
T2R
4π2
, m = g, b = −
L2
12
.
Filling out a data table, we get
R T T2R/4π2 R2
0.050 3.842 0.0187 0.0025
0.075 3.164 0.0190 0.0056
0.102 2.747 0.0195 0.0104
0.156 2.301 0.0209 0.0243
0.198 2.115 0.0224 0.0392
0.211 2.074 0.0230 0.0445
0.302 1.905 0.0278 0.0912
0.387 1.855 0.0337 0.1498
0.451 1.853 0.0392 0.2034
0.588 1.900 0.0538 0.3457
The graph of T2R/4π2 versus R2 is a line with slope g and intercept −L2/12, which should be
plotted on graph paper.
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part A 6
Looking at the graph, we read off the results
g = 9.79 m/s2
, L = 1.47 m.
Also note that most of the first few data points are not useful. To get full credit, only the five
useful data points had to be used.
