---
id: usapho-2009-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2009-a1
solution_type: official
source_document: solution-document-usapho-2009-s
source_pdf: cache/phoxiv/usapho/2009_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2009_S.pdf."
---

A1 - 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the
exam papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• In order to maintain exam security, do not communicate any information about
the questions (or their answers/solutions) on this contest until after March 31,
2009.
Possibly Useful Information. You may use this sheet for both parts of the exam.
g = 9.8 N/kg G = 6.67 × 10−11 N · m2/kg2
k = 1/4π 0 = 8.99 × 109 N · m2/C2 km = µ0/4π = 10−7 T · m/A
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
Copyright ©2009 American Association of Physics Teachers
2009 Semifinal Exam Part A 3
Part A
Question A1
A hollow cylinder has length l, radius r, and thickness d, where l
 r
 d, and is made of a
material with resistivity ρ. A time-varying current I flows through the cylinder in the tangential
direction. Assume the current is always uniformly distributed along the length of the cylinder. The
cylinder is fixed so that it cannot move; assume that there are no externally generated magnetic
fields during the time considered for the problems below.
l
r
I
a. What is the magnetic field strength B inside the cylinder in terms of I, the dimensions of the
cylinder, and fundamental constants?
b. Relate the emf E developed along the circumference of the cylinder to the rate of change of
the current dI
dt , the dimensions of the cylinder, and fundamental constants.
c. Relate E to the current I, the resistivity ρ, and the dimensions of the cylinder.
d. The current at t = 0 is I0. What is the current I(t) for t > 0?
Solution
a. The magnetic field through the inside of the cylinder is given by
B = µ0I/l
by Ampere’s law.
b. The magnetic flux is
ΦB = BA = πµ0r2
I/l.
The inductance is then
L = ΦB/I = πµ0r2
/l
and the induced emf is
E = −L
dI
dt
= −
πµ0r2
l
dI
dt
.
Copyright ©2009 American Association of Physics Teachers
2009 Semifinal Exam Part A 4
c. This induced emf will be driving the current, so
E = IR
where R is the resistance, given by
R =
ρL
A
where L is the circumference 2πr, and the area A is the cross sectional area ld of the conductor.
Therefore,
E = Iρ
2πr
ld
.
d. Combining the above, we get a differential equation,
Iρ
2πr
ld
= −
πµ0r2
l
dI
dt
which can be written more simply as
dI
dt
= −αI, α =
2ρ
µ0rd
.
The solution is then
I(t) = I(0)e−αt
.
