---
id: kevin-zhou-t2-ex002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-ex002
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

Example 2: Change of Variable
The same differential df can be described by coordinates x and y, and by x′ and y, so that
df =
∂f
∂x y
dx +
∂f
∂y x
dy =
∂f
∂x′
y
dx′
+
∂f
∂y x′
dy
How are these partial derivatives related to each other?
Solution
The two forms of the differential are in terms of dx and dy, and dx′ and dy respectively. We
thus need to write dx in terms of dx′ and dy, which we do by applying idea 3 to x itself,
dx =
∂x
∂x′
y
dx′
+
∂x
∂y x′
dy.
After plugging this in, the first form of df becomes
df =
∂f
∂x y
∂x
∂x′
y
dx′
+
∂f
∂x y
∂x
∂y x′
+
∂f
∂y x
!
dy.
Comparing this to the second form of df, we conclude that
∂f
∂x′
y
=
∂f
∂x y
∂x
∂x′
y
,
∂f
∂y x′
=
∂f
∂y x
+
∂f
∂x y
∂x
∂y x′
.
These expressions might look a bit complicated, but their interpretations are simple. The
first one just says that when we hold the same quantity y constant throughout, then the
ordinary single-variable chain rule in P1 works, since all the functions involved become
effectively single-variable. (This also implies that reciprocals of partial derivatives behave
as expected. For instance, (∂f/∂x)|y = 1/(∂x/∂f)y.) The second one says that when we
change y while keeping x′ constant, there are two contributions: one solely from the change
in y itself, and one from the induced change in x, needed to keep x′ constant.
If you want, you can generalize the reasoning here to see what happens when you change
both coordinates at once, but that won’t be needed for the problems below.
Now we’re going to embark on some serious partial derivative acrobatics. The techniques we’re
about to cover are a bit tricky, and are generally regarded as the hardest thing covered in an
undergraduate thermodynamics class. But they’re also the simplest way to solve the problems in
this section. The material covered below will not be necessary for anything else in these handouts.
