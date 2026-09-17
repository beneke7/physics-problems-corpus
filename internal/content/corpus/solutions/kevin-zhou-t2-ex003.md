---
id: kevin-zhou-t2-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-ex003
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

Example 3: Heat Capacities
The heat capacities at constant volume and constant pressure are defined as
CV =
∂Q
∂T V
, CP =
∂Q
∂T P
.
3
Kevin Zhou Physics Olympiad Handouts
Find a formula for CP − CV in terms of P, V , T, and the internal energy U.
Solution
To avoid confusion, we again note that the partial derivative notation above does not imply
that Q is a state function. It simply means that a small increment of heat transfer d̄Q can
be related to small increments of P, V , and T, via
d̄Q = CV dT +
∂Q
∂V T
dV = CP dT +
∂Q
∂P T
dP.
Now, to solve the problem itself, we apply the second identity derived in example 2, to get
CP = CV +
∂Q
∂V T
∂V
∂T P
.
To write this in terms of U, we use the first law of thermodynamics,
d̄Q = dU + P dV.
By expanding both d̄Q and dU in the differentials dV and dT, we read off
∂Q
∂T V
=
∂U
∂T V
,
∂Q
∂V T
=
∂U
∂V T
+ P.
The first result just tells us that CV can be equivalently defined as (∂U/∂T)|V . As for the
second result, plugging it in gives an answer of
CP − CV =

∂U
∂V T
+ P

∂V
∂T P
.
This is actually quite intuitive. The extra heat we have to put in at constant pressure, when
we allow the volume to change, comes from two sources. First, we have to make up for the
energy lost to P dV work. Second, we have to make up for the energy intrinsically needed to
expand the gas, by doing work against the attractive intermolecular forces between the gas
molecules. (That second term is zero for an ideal gas by definition.) However, trying to show
this result without the organizing framework of partial derivatives would be prone to error.
