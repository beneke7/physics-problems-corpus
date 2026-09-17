---
id: kevin-zhou-t2-p013
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p013
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[2] Problem 13. Show that the third law requires the specific heat C to approach zero as the temper-
ature approaches zero. (Since this isn’t true for a classical ideal gas, the ideal gas law must break
down in quantum mechanics, at low temperatures. You can also see this from your result for the
entropy in problem 9, which diverges at low temperatures; there’s no way to add a constant to it
to make it go to zero at zero temperature.)
Solution. We have
dS =
d̄Q
T
=
C(T)dT
T
.
Therefore, for a small temperature T0, we have
S(T0) =
Z T0
0
dT
C(T)
T
and the right-hand side must go to zero as T0 goes to zero. But if C(T) doesn’t go to zero as T
does, instead approaching a nonzero limit, then the right-hand side is instead infinite.
Idea 8: Microcanonical Ensemble
If a large isolated system in thermodynamic equilibrium is in one of Ω quantum states, then
we assume all of the states are equally likely, and the entropy is
S = kB logΩ.
This is the fundamental definition of entropy; in fact the equation dS = d̄Q/T does not
define entropy, but rather defines temperature! The third law follows from this result because
at temperature T = 0, all systems settle into their ground state, so Ω = 1 and S = 0.
The entropy describes how much information is required to specify the true state of the
system. The factor of kB is due to historical convention. The logarithm makes sense because
if we have two independent systems, which could be in Ω1 or Ω2 different states, then we
want the entropy to add, log(Ω1Ω2) = log(Ω1) + log(Ω2).
Remark
The assumption that all states are equally likely may sound a bit confusing, because in T1
we used the Boltzmann distribution, which stated that higher-energy states were less likely to
be occupied. The difference is that for the Boltzmann distribution, we assumed the system
13
Kevin Zhou Physics Olympiad Handouts
was inside an environment at temperature T. In fact, all quantum states of the system and
environment together remain equally likely in this context, but lower-energy states of the
system correspond to more energy in the environment, and hence (usually) more possible
environment states. Thus, accounting for the number of possible environment states, lower-
energy states of the system are more likely. You will make all this precise in problem 14,
where you will use it to derive the Boltzmann distribution.
Example 5: Mixing Entropy
Repeat example 4 using statistical mechanics.
Solution
In statistical mechanics, we can compute S directly using S = kB logΩ. Focusing on a
single oxygen or nitrogen molecule, let Ωi be the initial number of possible states. When the
partition is removed, the possible position space for the particle doubles, and since quantum
states all have the same volume in phase space, the number of states available doubles. So
for one particle,
∆Spart = kB log(2Ωi) − kB logΩi = kB log2.
Since the 2N particles are independent,
∆S = 2N∆Spart = 2NkB log2
in agreement with the result from thermodynamics.
