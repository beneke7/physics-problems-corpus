---
id: solution-ocr-kevin-zhou-e2sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e2-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
Two grounded conducting half-planes intersect, so that in cylindrical coordinates, the equations describing the planes are $\theta = 0$ and $\theta = \theta _ { p } = \pi / 2$. A charge $q$ is placed somewhere between the planes. Can the method of images be used to find the force on the charge? What


if $\theta _ { p } = 2 \pi / 3$, or for general $\theta _ { p }$ ?

Solution
We can solve the first case with three image charges. Let the real charge $q$ be at $( x , y )$. Then we can reflect in the plane $\theta = 0$, adding an image charge $- q$ at $( x , - y )$ to satisfy its boundary condition. Then we can reflect both the real charge and this image charge in the plane $\theta = \pi / 2$ to satisfy that plane's boundary condition, adding an image charge $- q$ at $( - x , y )$ and an image charge $q$ at $( - x , - y )$.

But when the other plane is at $\theta = 2 \pi / 3$, there is no configuration of image charges that works. For concreteness, let's suppose the real charge is at point $A$, on the $y$-axis.
![](../../../figures/solution-ocr/9a747392bc27140555f5198f.jpg)
Reflecting in the $\theta = 0$ plane forces us to have an image charge $- q$ at $D$, reflecting in the $\theta = 2 \pi / 3$ plane yields an image charge $q$ at $E$, and reflecting in the $\theta = 0$ plane again yields a $- q$ charge at $F$, which is real since it's in the same region as $A$. But this isn't allowed: the point of image charges is to provide an easy way of calculating the effects of screening charges on conducting surfaces on a given set of real charges (i.e. the charge at $A$ ), so it's not legal to introduce new real charges in the process. We would get the same conclusion if we reflected about the planes in a different order - we always need a charge at $F$. More generally, the method of images works for this problem if and only if $\theta _ { p } = \pi / n$ for integer $n$.
