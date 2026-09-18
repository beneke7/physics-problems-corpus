---
id: kevin-zhou-t2-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p002
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[3] Problem 2. [A] Let’s illustrate some consequences of the previous example.
(a) For a monatomic ideal gas, we have U = (3/2)nRT and the equation of state PV = nRT.
Evaluate CV and CP using the results above.
(b) In a real gas, there are short-ranged attractive intermolecular forces. If they are relatively
weak, they yield a small negative contribution to the energy, of the form
U =
3
2
nRT −
an2
V
.
Explain qualitatively why the change in energy is proportional to n2/V .
4
Kevin Zhou Physics Olympiad Handouts
(c) We will show in problem 4 that this modifies the equation of state to

P +
an2
V 2

V = nRT.
Using these results, show that to first order in a, we have
CV =
3
2
nR, CP − CV ≈ nR +
2an2
TV
.
Qualitatively explain why the new term has a positive sign.
Solution. (a) Using the results of the previous example, we have
CV =
∂U
∂T V
=
3
2
nR, CP − CV =

∂U
∂V T
+ P

∂V
∂T P
= P
nR
P
= nR.
Combining these gives CP = (5/2)nR, just as expected.
(b) Since the interaction is short-ranged, the number of molecules near a single given molecule is
proportional to the average density n/V . We then multiply by the total number of molecules,
which is proportional to n, to get a contribution proportional to n2/V . The sign of this
contribution is negative since the force is attractive.
Note that we implicitly assumed that the density of molecules near a given molecules was the
same as the density in the whole container. But if the interaction is sufficiently strong, that
won’t be true, because the molecules will clump up. This dramatic behavior is associated
with a phase transition to a liquid or solid state, and will be discussed further in T3. For now,
we’re just concerned with the case of weak interactions.
(c) The first result follows directly from the definition of the heat capacity. Next,
CP − CV =

∂U
∂V T
+ P

∂V
∂T P
=

P +
an2
V 2

∂V
∂T P
.
To get ∂V/∂T|P , differentiate the equation of state with respect to T at constant P,
nR =

P +
an2
V 2
−
2an2
V 2

∂V
∂T P
.
Plugging this result in and expanding to lowest order in a gives the result. The reason the
new term has a positive sign is that the interaction is attractive, so when the gas expands
under heating, we need to put in extra heat to get the molecules further away from each other.
Idea 4: Equality of Mixed Partial Derivatives
If we take two distinct partial derivatives of a state function f, then the order doesn’t matter,
∂
∂x y
∂f
∂y x
=
∂
∂y x
∂f
∂x y
.
If this identity doesn’t hold, it means that f is not actually a state function. Imposing this
requirement for various choices of independent variables x and y yields a variety of nontrivial
5
Kevin Zhou Physics Olympiad Handouts
identities, collectively called Maxwell relations.
