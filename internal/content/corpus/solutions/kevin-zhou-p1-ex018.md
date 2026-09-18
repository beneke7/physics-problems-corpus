---
id: kevin-zhou-p1-ex018
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex018
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 18
Calculate the moment of inertia of the circle above, about the y axis, if it has total mass M
and uniform density.
Solution
The moment of inertia of a small piece of the circle is
dI = x2
dm = x2
σ dA =
x2M
πR2
dA
where x2 appears because x is the distance to the rotation axis, and σ is the mass density
per unit area. Using Cartesian coordinates, we have
I =
M
πR2
Z R
−R
dx
Z √
R2−x2
−
√
R2−x2
x2
dy.
The inner integral is still trivial; the x2 doesn’t change anything, because from the perspective
of the dy integral, x is just some constant. However, the remaining integral becomes a bit
nasty. In general, when this happens, we can try flipping the order of integration, giving
I =
M
πR2
Z R
−R
dy
Z √
R2−y2
−
√
R2−y2
x2
dx.
Unfortunately, this is equally difficult. Both of these integrals can be done with trigonometric
substitutions, as you’ll check below, but there’s also a clever symmetry argument.
Notice that I is also equal to the moment of inertia about the x axis, by symmetry. So if we
add them together, we get
2I =
Z
x2
+ y2
dm =
Z
r2
dm.
41
Kevin Zhou Physics Olympiad Handouts
The r2 factor has no dependence on θ at all, so the angular integral in polar coordinates is
trivial. We end up with
2I =
M
πR2
Z R
0
2πrr2
dr =
1
2
MR2
which gives an answer of I = MR2/4, as expected.
[2] Problem 32. Calculate I in the previous example by explicitly performing either Cartesian integral.
Solution. Starting from the second expression in the example,
I =
M
πR2
Z R
−R
dy
Z √
R2−y2
−
√
R2−y2
x2
dx =
M
3πR2
Z R
−R
2(R2
− y2
)3/2
dy.
Let y = Rsinθ. Then we have
I =
2MR2
3π
Z π/2
−π/2
cos4
θdθ.
This integral can be done by repeatedly using the double angle formula,
Z π/2
−π/2
cos4
θdθ =
Z π/2
−π/2

1 + cos(2θ)
2
 2
dθ =
Z π/2
−π/2

1
4
+
1
2
cos(2θ) +
1
8
+
1
8
cos(4θ)

dθ =
3π
8
.
Personally, I can never remember all the trigonometric formulas, and I usually just expand everything
in complex exponentials. Here that method gives a slick solution, as
Z π/2
−π/2
cos4
θdθ =
1
16
Z π/2
−π/2
(eiθ
+ e−iθ
)4
dθ.
Now note that expanding with the binomial theorem gives terms of the form e2inθ for integers n,
which integrate to zero unless n = 0. So the only term that matters gives
Z π/2
−π/2
cos4
θdθ =
1
16
Z π/2
−π/2

4
2

dθ =
3π
8
.
Whichever method you used, we conclude the answer is I = MR2/4, as expected.
