---
id: kevin-zhou-t2-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p004
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[3] Problem 4. [A] Now let’s revisit the nonideal gas considered in problem 2. We would like to take
the given form of the internal energy and derive the equation of state, which gives the pressure in
terms of the other variables.
(a) Explain why it’s true that
∂U
∂S V
∂S
∂V T
= −
∂U
∂V S
+
∂U
∂V T
.
Three of these partial derivatives can be evaluated easily; simplify accordingly.
(b) This gets us close to the desired result, except that we don’t know how to evaluate ∂S/∂V |T .
To do this, we’re going to need another Maxwell relation. Find the Maxwell equation that
follows from taking the partial derivatives of the quantity U − TS with respect to T and V .
(c) You should now have a differential equation for the pressure as a function of temperature,
at constant volume. To finish, integrate this equation and use the fact that the attractive
interaction has negligible effect as a → 0.
Solution. (a) This is simply a direct application of the change of variable identity in example 2.
The easy things to evaluate are
∂U
∂S V
= T,
∂U
∂V S
= −P,
∂U
∂V T
=
an2
V 2
from which we conclude that
T
∂S
∂V T
= P +
an2
V 2
.
(b) First, let’s figure out what the differential of this quantity is. Calling it F, we have
dF = T dS − P dV − T dS − S dT = −P dV − S dT.
Therefore, we conclude that
∂F
∂V T
= −P,
∂F
∂T V
= −S
and the corresponding Maxwell relation is
∂P
∂T V
=
∂S
∂V T
.
Plugging this in, we conclude that
T
∂P
∂T V
= P +
an2
V 2
.
7
Kevin Zhou Physics Olympiad Handouts
(c) If we separate the variables, at constant V , then we have
dP
P + an2/V 2
=
dT
T
and integrating tells us that
T ∝ P +
an2
V 2
where the constant of proportionality can depend on n and V , since these quantities were
held constant. When a → 0, we have to recover the ideal gas law, so the constant has to be
nR/V , and we conclude that
P +
an2
V 2
=
nRT
V
as desired. (In T3, we will combine this pressure correction with a “volume exclusion factor”
to yield the van der Waals gas, which is useful for modeling the liquid-gas phase transition.)
[3] Problem 5. [A] INPhO 2020, problem 1. A very contrived application of partial derivatives.
2 The Second Law
Idea 5: Entropy
The increase in entropy of a body at temperature T that receives heat d̄Q is
dS =
d̄Q
T
if the process is reversible; moreover, entropy is a state function.
Idea 6: Second Law
The second law of thermodynamics takes several equivalent forms, which are all useful.
• For an isolated system, dS ≥ 0 for any spontaneous process.
• Clausius: no process is possible whose sole result is the transfer of heat from a colder to
a hotter body.
• Kelvin: no process is possible whose sole result is the complete conversion of heat into
work.
• Carnot: of all heat engines working between two given temperatures, none is more
efficient than a Carnot engine.
