---
id: kevin-zhou-p2-p022
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p022
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[2] Problem 22. The rate R of electron emission from a solid in an electric field E is
R = βe−E0/E
for some constants β and E0. The exponential form is because the effect is due to quantum tunneling,
as will be discussed in X2.
(a) If E and R are measured, what line can be plotted to find β and E0? Make sure the dimensions
of your equations make sense.
(b) Suppose both β and E0 have 1% uncertainty. For small E, which is more important for the
uncertainty of R? What about for large E? Around where is the crossover point?
Solution. (a) Naively, if we take the natural log of the equation, we get
logR = −
E0
E
+ logβ.
Plotting 1/E on the x-axis and logR on the y-axis gives a line with slope −E0 and y-intercept
logβ.
But the dimensions of this equation look wrong, because R and β are dimensionful quantities.
Technically, we are really plotting dimensionless quantities, involving the ratios of E and R
to a standard unit of energy and rate, respectively. For example, in SI units, we would have
log
R
1Hz
= −
E0/(1J)
E/(1J)
+ log
β
1Hz
.
On the page, we literally plot (1J)/E versus log(R/(1Hz)). This gives a line with dimensionless
slope −E0/(1J) and intercept log(β/(1Hz)). You don’t have to keep this technicality in mind,
but this sort of thing is always implicitly happening whenever one plots data.
16
Kevin Zhou Physics Olympiad Handouts
(b) The uncertainty in β alone always gives a 1% uncertainty in R. But the uncertainty in R
due to the uncertainty in E0 depends on the value of E. For E ≪ E0, we can expand the
exponential as (1 − E/E0), and in this case the uncertainty in E0 does almost nothing at all,
so the uncertainty in β dominates. For E ≫ E0, the reverse is true. By dimensional analysis,
the crossover must be around E ∼ E0.
