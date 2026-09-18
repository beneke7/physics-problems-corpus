---
id: usapho-2012-a2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2012-a2
solution_type: official
source_document: solution-document-usapho-2012-s
source_pdf: cache/phoxiv/usapho/2012_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2012_S.pdf."
---

Question A2
An ideal (but not necessarily perfect monatomic) gas undergoes the following cycle.
• The gas starts at pressure P0, volume V0 and temperature T0.
• The gas is heated at constant volume to a pressure αP0, where α > 1.
• The gas is then allowed to expand adiabatically (no heat is transferred to or from the gas) to
pressure P0
• The gas is cooled at constant pressure back to the original state.
The adiabatic constant γ is defined in terms of the specific heat at constant pressure Cp and the
specific heat at constant volume Cv by the ratio γ = Cp/Cv.
a. Determine the efficiency of this cycle in terms of α and the adiabatic constant γ. As a
reminder, efficiency is defined as the ratio of work out divided by heat in.
b. A lab worker makes measurements of the temperature and pressure of the gas during the
adiabatic process. The results, in terms of T0 and P0 are
Pressure units of P0 1.21 1.41 1.59 1.73 2.14
Temperature units of T0 2.11 2.21 2.28 2.34 2.49
Plot an appropriate graph from this data that can be used to determine the adiabatic constant.
c. What is γ for this gas?
Solution
a. Label the end points as 0, 1, and 2. The ideal gas law yields T1 = αT0. The quantity PV γ is
conserved along the adiabatic process 1 → 2, so
P1V γ
1 = P2V γ
2 =
1
α
P1V γ
2 ⇒ V2 = V1α1/γ
= V0α1/γ
.
Again using the ideal gas law
T2 = α1/γ
T0.
Now, heat enters the gas during the isochoric process 0 → 1, so
Qin = nCv∆T = nCv(α − 1)T0.
Heat exits the system during the process 2 → 0, so
Qout = nCp∆T = nCp(α1/γ
− 1)T0.
The work done is the difference,
W = Qin − Qout = nCv(α − 1)T0 − nCp(α1/γ
− 1)T0
and the efficiency is then
η =
W
Qin
=
Cv(α − 1) − Cp(α1/γ − 1)
Cv(α − 1)
= 1 − γ
α1/γ − 1
α − 1
where we used the definition γ = Cp/Cv.
Copyright c 2012 American Association of Physics Teachers
2012 Semifinal Exam Part A 6
b. For an adiabatic process, the quantity
PV γ

T
PV
 γ
= P1−γ
Tγ
is constant, which implies that
P ∝ Tγ/(γ−1)
.
Thus, if we make a graph with logT on the horizontal axis and logP on the vertical, we will
find a line with slope γ/(γ − 1). To get full credit, all five data points should be plotted and
used, though one can get an approximate result with just two.
c. Using the data given, we find a slope of about 3.5, giving γ ≈ 1.4, as expected for a diatomic
gas. Note that credit will not be given for simply writing this number down; some degree of
data analysis is necessary.
Copyright c 2012 American Association of Physics Teachers
2012 Semifinal Exam Part A 7
