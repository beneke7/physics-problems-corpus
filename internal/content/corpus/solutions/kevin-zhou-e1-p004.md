---
id: kevin-zhou-e1-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e1-p004
solution_type: author
source_document: solution-document-kevin-zhou-e1sol
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E1Sol.pdf."
---

[3] Problem 4. There are two point charges, q1 > 0 and q2 < 0, in empty space. An electric field line
leaves q1 at an angle α from the line connecting the two charges. Determine whether this field line
hits q2, and if so, at what angle β from the line connecting the two charges. (Hint: this can be done
without solving any differential equations.)
Solution. Suppose the field line does hit q2. Rotate the field line about the line connecting the two
charges, to form a Gaussian surface. Because no electric field lines go across this surface, the total
charge inside must be zero. Now, this surface envelopes “slices” of each point charge. (If you’re
not happy with “slicing a point charge”, just replace the point charges with tiny uniformly charged
spheres; everything outside stays the same.) The solid angle of the first point charge enveloped is
Z
dΩ =
Z 2π
0
dϕ
Z α
0
sinθdθ = 2π(1 − cosα)
so the amount of charge enclosed is
Ω
4π
q1 =
1 − cosα
2
q1 = q1 sin2 α
2
.
Reasoning similarly for the other surface, we have
q1 sin2 α
2
= |q2|sin2 β
2
and the field line hits q2 if there is a solution for β, i.e. when |q1/q2| sin2
(α/2) ≤ 1. (If you like this
question, you can also think about what we can say when the point charges have the same sign.)
3
Kevin Zhou Physics Olympiad Handouts
Idea 2
Gauss’s law is written in differential form as
∇ · E =
ρ
ϵ0
.
The divergence of a vector field F = Fxx̂ + Fyŷ + Fzẑ is
∇ · F = ∂xFx + ∂yFy + ∂zFz
in Cartesian coordinates, where ∂x stands for ∂/∂x, and so on.
Example 2
Show that the two forms of Gauss’s law are equivalent.
Solution
To do this, we need to establish the geometric meaning of the divergence. For simplicity we
consider two dimensions; the proof for three dimensions is similar. Consider a small rectangle
with one corner at the origin, with axes aligned with the Cartesian coordinate axes and side
lengths ∆x and ∆y. To apply Gauss’s law in integral form, we need to compute the flux
through each side. The flux going out the top side is
Z ∆x
0
Ey(x,∆y)dx
while the flux going out the bottom side is
−
Z ∆x
0
Ey(x,0)dx.
The sum of these two terms is
Z ∆x
0
(Ey(x,∆y) − Ey(x,0))dx ≈ ∆y
Z ∆x
0
(∂yEy)|(x,0) dx
where we applied a tangent line approximation, and the subscript indicates where the
function ∂yEy is evaluated. Higher-order terms in the Taylor series would be proportional to
higher powers of ∆y, which is small, so we can ignore them.
The integrand is still a function of x, but we can Taylor expand it about the origin as
(∂yEy)|(x,0) = (∂yEy)|(0,0) + ∆x(...) + ....
These extra terms are again higher-order in ∆x and ∆y, so we ignore them. The net flux
through the top and bottom faces is hence, to lowest order,
∆y
Z ∆x
0
(∂yEy)|(0,0) dx = ∆x∆y (∂yEy)|(0,0).
4
Kevin Zhou Physics Olympiad Handouts
By similar reasoning, pairing up the left and right faces gives
flux = ∆x∆y (∂xEx + ∂yEy)|(0,0) = ∆x∆y (∇ · E)|(0,0).
Thus the divergence is the outgoing flux per unit area, or volume in three dimensions.
This shows us why the two forms of Gauss’s law are equivalent. For example, starting from
the differential form, the left-hand side is the flux per volume, while the right-hand side is
the charge per volume, divided by ϵ0. Integrating both sides over some volume relates the
total flux to the total charge divided by ϵ0, which is Gauss’s law in integral form.
