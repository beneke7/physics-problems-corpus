---
id: kevin-zhou-t2-p003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p003
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[3] Problem 3. [A] Let’s check the consequences of this idea.
(a) We should be able to take the partial derivatives of U with respect to S or V in either order.
By combining this idea with your solution to problem 1, infer a nontrivial relationship between
the derivatives of T and P, and check that it is satisfied for an ideal gas.
(b) If heat was a state function, we could take the partial derivatives of Q with respect to T or V
in either order. Check that this implies a relationship which is not satisfied for an ideal gas.
Solution. (a) Since we can take the partial derivatives of U with respect to S and V in either
order, we conclude that we need the nontrivial relation
∂T
∂V S
= −
∂P
∂S V
.
To evaluate the left-hand side, we need to consider how T varies with V in an adiabatic
expansion. In this case TV γ−1 is constant, so that
dT
T
= (1 − γ)
dV
V
from which we conclude that
∂T
∂V S
= −
T
V
(γ − 1).
To evaluate the right-hand side, note that for constant volume heating, dU = d̄Q = T dS, so
∂P
∂S V
= T
∂P
∂U V
= T

∂U
∂P V
−1
.
But for an ideal gas, we have U = nRT/(γ − 1) = PV/(γ − 1), so
∂P
∂S V
=
T
V
(γ − 1)
which confirms the expected result.
(b) By definition, the differential of heat is
d̄Q = CV dT +
∂Q
∂V T
dV
and the required identity, if heat were a state function, is
∂CV
∂V T
=
∂
∂T V

∂Q
∂V T

.
The left-hand side just vanishes for an ideal gas. As for the right hand side, we note that
∂Q
∂V T
=
∂U
∂V T
−
∂W
∂V T
= −
∂W
∂V T
= P
6
Kevin Zhou Physics Olympiad Handouts
where we used the fact that the internal energy of an ideal gas depends only on temperature.
Thus, the right-hand side is
∂P
∂T V
=
nR
V
̸= 0
so the identity is not satisfied, as expected.
