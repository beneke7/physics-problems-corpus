---
id: kevin-zhou-p1-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex004
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 4
The wavefunction ψ(x,y,z) of the electron in a hydrogen atom obeys the Schrodinger equation
−
ℏ2
2m

∂2
∂x2
+
∂2
∂y2
+
∂2
∂z2

ψ −
e2
4πϵ0r
ψ = Eψ.
Estimate the size of the hydrogen atom.
Solution
By solving this equation, we can find a discrete set of solutions ψ(x,y,z), which correspond
to a discrete set of allowed energies E. However, to estimate the typical size of the solutions,
we can just use dimensional analysis. The dimensionful input parameters in the equation
above are m, ℏ, and e2/4πϵ0, which have dimensions
[m] = kg, [ℏ] = J · s = kgm2
s−1
, [e2
/4πϵ0] = J · m = kgm3
s−2
.
Doing dimensional analysis, the only length scale is the Bohr radius,
a0 =
4πϵ0ℏ2
me2
∼ 10−10
m.
I’ve thrown in a 4π above because ϵ0 shows up in the combination 4πϵ0. The dimensional
analysis would be valid without this factor, but as you’ll see in problem 11, if you don’t
include it then annoying compensating factors of 4π will appear elsewhere.
Classically (i.e. without ℏ), there is no way to form a length, and hence there should be
no classically stable radius for the atom. (This was one of the arguments used by Bohr to
motivate quantum mechanics; it appears in the beginning of his paper introducing the Bohr
model.) Once we introduce ℏ, there are three dimensionful parameters in the problem, as
listed above. And there are exactly three fundamental dimensions. So there is only one way
to create a length, which we found above, one way to create a time, one way to create an
energy, and so on. This means that the solutions to the Schrodinger equation above look
qualitatively the same no matter what these parameters are; all that changes are the overall
length, time, and energy scales. In problem 11, you’ll investigate how this conclusion changes
when we add more dimensionful parameters.
7
Kevin Zhou Physics Olympiad Handouts
Dimensional analysis is especially helpful with scaling relations. For example, a question might ask
you how the radius of the hydrogen atom would change in a world where the electron mass was
twice as large. You would solve this problem in the exact same way as the example above, using
dimensional analysis to show that a0 ∝ 1/m.
