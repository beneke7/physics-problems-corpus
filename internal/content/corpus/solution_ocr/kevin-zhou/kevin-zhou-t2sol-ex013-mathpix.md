---
id: solution-ocr-kevin-zhou-t2sol-ex013
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex013]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 13
Model a brick pizza oven as a sphere with inner radius $R _ { 1 }$, outer radius $R _ { 2 }$, and thermal conductivity $\kappa$. The inside of the oven is held at temperature $T _ { 1 }$ and the outside of the oven is held at temperature $T _ { 2 }$. In equilibrium, find $T ( r )$, and the power needed to keep the inside of the oven at temperature $T _ { 1 }$.

Solution
Consider a shell of radius $r$ and thickness $d r$. The outward heat flow through it is

$$
P ( r ) = - \kappa \left( 4 \pi r ^ { 2 } \right) \frac { d T } { d r }
$$

In addition, because the shells have constant temperature, there can be no net heat accumulating in any shell. Thus, $P ( r )$ must actually be independent of $r$. Renaming it to $P$, we can integrate the resulting differential equation to find

$$
\int _ { T _ { 1 } } ^ { T ( r ) } d T = - \int _ { R _ { 1 } } ^ { r } \frac { P } { 4 \pi \kappa r ^ { 2 } } d r
$$

which gives the solution

$$
T ( r ) = T _ { 1 } + \left( T _ { 2 } - T _ { 1 } \right) \frac { r - R _ { 1 } } { r } \frac { R _ { 2 } } { R _ { 2 } - R _ { 1 } } .
$$

Now that we know $T ( r )$, we can evaluate $d T / d r$ at any radius to find the total power, using the first equation. Another slicker way, which doesn't even require knowing $T ( r )$, is to


integrate the first equation all the way from the inside of the oven to the outside,
$$
\int _ { T _ { 1 } } ^ { T _ { 2 } } d T = - \int _ { R _ { 1 } } ^ { R _ { 2 } } \frac { P } { 4 \pi \kappa r ^ { 2 } } d r
$$
This gives an expression for the power in terms of the other parameters, yielding
$$
P = 4 \pi \kappa \left( T _ { 1 } - T _ { 2 } \right) \frac { R _ { 1 } R _ { 2 } } { R _ { 2 } - R _ { 1 } }
$$
