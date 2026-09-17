---
id: kevin-zhou-t2-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p006
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[3] Problem 6. Some basic conceptual questions about the second law.
(a) Verify explicitly that the second law of thermodynamics allows heat to flow from a hot body
to a cold one, but not vice versa.
(b) Derive the efficiency of a Carnot engine operating between reservoirs of temperatures TH > TC
by using the fact that the Carnot cycle is reversible, i.e. that after a complete Carnot cycle
the entropy of the universe is unchanged.
(c) Let’s suppose that in addition to reservoirs at temperatures TH and TC, you had a reservoir
at temperature (TH +TC)/2. Is the Carnot cycle between the extreme reservoirs still the most
efficient option? If not, what’s the maximum possible efficiency?
(d) Consider the free expansion of an ideal gas. No work is done, and the internal energy U does
not change. However, the entropy increases since the process is irreversible. On the other
hand, the first law states
dU = TdS + d̄W
so there appears to be a contradiction. What is wrong with this argument?
Solution. (a) If d̄Q of heat flows from T1 to T2 with T1 > T2, the total change in entropy is
−d̄Q/T1 + d̄Q/T2 > 0,
so d̄Q > 0 as desired.
(b) The change in entropy of the engine itself is zero, because it just ends up at its original state.
The only other contribution is the change in entropy of the reservoirs,
∆Suniv =
QC
TC
−
QH
TH
.
9
Kevin Zhou Physics Olympiad Handouts
Setting this to zero gives QC/TC = QH/TH. The efficiency is then
η =
W
QH
=
QH − QC
QH
= 1 −
TC
TH
.
(c) The Carnot engine is still the most efficient option. From the standpoint of entropy changes
in part (b), it is always best to draw heat from the hottest possible reservoir and to expel it
to the coldest possible reservoir.
(d) The problem is that d̄Q ̸= T dS for irreversible processes. For example, in free expansion the
entropy goes up, even though no heat is added.
