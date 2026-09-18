---
id: usapho-2008-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2008-a1
solution_type: official
source_document: solution-document-usapho-2008-s
source_pdf: cache/phoxiv/usapho/2008_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2008_S.pdf."
---

A1 - 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You may use
only the basic functions found on a simple scientific calculator. Calculators may not be shared. Cell
phones, PDA’s or cameras may not be used during the exam or while the exam papers are present.
You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• Part C is an optional part of the test. You will be given 20 additional minutes to complete part C.
Your score on part C will not affect the selection for the US Team, but can be used for special prizes
and recognition to be awarded by the Optical Society of America.
• In order to maintain exam security, do not communicate any information about the
questions (or their answers/solutions) on this contest until after March 31, 2008.
Possibly Useful Information. You may use this sheet for all three parts of the exam.
g = 9.8 N/kg G = 6.67 × 10−11
N · m2
/kg2
k = 1/4π 0 = 8.99 × 109
N · m2
/C2
km = µ0/4π = 10−7
T · m/A
c = 3.00 × 108
m/s kB = 1.38 × 10−23
J/K
NA = 6.02 × 1023
(mol)−1
R = NAkB = 8.31 J/(mol · K)
σ = 5.67 × 10−8
J/(s · m2
· K) e = 1.602 × 10−19
C
1eV = 1.602 × 10−19
J h = 6.63 × 10−34
J · s = 4.14 × 10−15
eV · s
me = 9.109 × 10−31
kg = 0.511 MeV/c2
(1 + x)n
≈ 1 + nx for |x|
 1
sinθ ≈ θ − 1
6θ3
for |θ|
 1 cosθ ≈ 1 − 1
2θ2
for |θ|
 1
Copyright ©2008 American Association of Physics Teachers
2008 Semifinal Exam Part A 3
Part A
Question A1
Four square metal plates of area A are arranged at an even spacing d as shown in the diagram. (Assume
that A
 d2
.)
Plate 1
Plate 2
Plate 3
Plate 4
d
d
d
Plates 1 and 4 are first connected to a voltage source of magnitude V0, with plate 1 positive; plates 2 and
3 are then connected together with a wire. The wire is subsequently removed. Finally, the voltage source
attached between plates 1 and 4 is replaced with a wire. The steps are summarized in the diagrams below.
Step 1 Step 2 Step 3
Find the resulting potential difference ∆V12 between plates 1 and 2; like wise find ∆V23 and ∆V34, defined
similarly.
Assume, in each case, that a positive potential difference means that the top plate is at a higher potential
than the bottom plate.
Solution
We treat the plates as three capacitors in series. Each has an identical capacitance C. The figure below then
show the three steps.
C1
C2
C3
C1
C2
C3
C1
C2
C3
Since C2 is shorted out originally, then effectively there are only two capacitors in series, so the voltage
drop across each is V0/2, where the a positive potential difference means that the top plate of any given
capacitor is positive. The top plate of C1 will then have a positive charge of q0 = CV0/2. Note that this
means that the bottom plate of the top capacitor will have a negative charge of −q0. Removing the shorting
wire across C2 will not change the charges or potential drops across the other two capacitors. Removing the
source V0 will also make no difference.
Shorting the top plate of C1 with the bottom plate of C3 will make a difference. Positive charge will flow
out of top plate of C1 into the bottom plate of C3. Also, negative charge will flow out of the bottom plate
of C1 into the top plate of C2. The result is that C1 will acquire a potential difference of V1, C2 a potential
Copyright ©2008 American Association of Physics Teachers
2008 Semifinal Exam Part A 4
difference of V2, and C3 a potential difference of V3. Let the final charge on the top plate of each capacitor
also be labeled as q1, q2, and q3.
The last figure implies that
V1 + V2 + V3 = 0.
By symmetry, we have
V1 = V3.
so
2V1 = −V2.
By charge conservation between the bottom plate of C1 and the top plate of C2 we have
−q0 = −q1 + q2.
But q = CV , so
−
1
2
V0 = −V1 + V2
Combining the above we get
−
1
2
V0 =
1
2
V2 + V2,
−
1
3
V0 = V2.
Finally, solving for V1, we get V1 = V0/6.
Alternatively, we could focus on the plate arrangement and the fact that across a boundary |∆E⊥| =
|σ/ 0|, a consequence of Gauss’s Law. Also, we have, for parallel plate configurations, |∆V | = |Ed|. Since
 0 and d are the same for each of the three regions, it is sufficient to simply look at the electric fields.
E0
E0
E2
E1
E1
In the first picture we require that 2E0 = V0/d. The charge density on the second plate requires that
∆E = E0. In the last picture we have 2E1+E2 = 0, since the potential between the top plate and the bottom
plate is zero. But we also have, on the second plate, ∆E = E1 −E2. Combining, E0 = −1
2E2 −E2 = −3
2E2,
and therefore V2 = −1
3V0, and V1 = V0/6.
