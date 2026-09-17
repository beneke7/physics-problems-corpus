---
id: kevin-zhou-t2-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-ex001
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

Example 1
Consider describing a plane with Cartesian coordinates (x,y) and polar coordinates (r,θ).
Calculate the partial derivatives (∂x/∂r)|θ and (∂x/∂r)|y.
Solution
To evaluate the first partial derivative, we need to write x as a function of r and θ. This is
done by x = rcosθ. Differentiating with respect to r and treating θ as a constant, we have
∂x
∂r θ
= cosθ.
To evaluate the second, we should write x in terms of r and y. This is done starting with
r2
= x2
+ y2
.
We could solve for x here. However, it’s quicker to use the usual trick of implicit differentiation:
note that differentiating both sides with respect to r, at fixed y, gives
2r = 2x
∂x
∂r y
+ 0
which yields the answer,
∂x
∂r y
=
r
x
=
1
cosθ
.
These two results are different: changing what you keep constant changes the derivative. You
can see this geometrically by evaluating the two versions of ∂x/∂r at a few points.
Idea 3: Multivariable Differential
The change of a function f(x,y) upon independent changes in x and y is
df =
∂f
∂x y
dx +
∂f
∂y x
dy
which you can recognize as an alternative form of the multivariable chain rule from P1.
We can also use this equation to describe small increments of quantities that aren’t state
functions, in which case we’ll write the left-hand side as d̄f.
[1] Problem 1. How are pressure and temperature defined, in terms of partial derivatives of U?
Solution. By the first law of thermodynamics, we have
dU = d̄Q + d̄W = T dS − P dV.
From this result, we immediately read off the answers,
T =
∂U
∂S V
, P = −
∂U
∂V S
.
2
Kevin Zhou Physics Olympiad Handouts
