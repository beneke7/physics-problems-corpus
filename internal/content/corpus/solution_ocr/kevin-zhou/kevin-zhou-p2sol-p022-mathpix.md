---
id: solution-ocr-kevin-zhou-p2sol-p022
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p022]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 22. The rate $R$ of electron emission from a solid in an electric field $E$ is
$$
R = \beta e ^ { - E _ { 0 } / E }
$$
for some constants $\beta$ and $E _ { 0 }$. The exponential form is because the effect is due to quantum tunneling, as will be discussed in X2.
    (a) If $E$ and $R$ are measured, what line can be plotted to find $\beta$ and $E _ { 0 }$ ? Make sure the dimensions of your equations make sense.
    (b) Suppose both $\beta$ and $E _ { 0 }$ have 1\% uncertainty. For small $E$, which is more important for the uncertainty of $R$ ? What about for large $E$ ? Around where is the crossover point?

Solution. (a) Naively, if we take the natural log of the equation, we get

$$
\log R = - \frac { E _ { 0 } } { E } + \log \beta .
$$

Plotting $1 / E$ on the $x$-axis and $\log R$ on the $y$-axis gives a line with slope $- E _ { 0 }$ and $y$-intercept $\log \beta$.

But the dimensions of this equation look wrong, because $R$ and $\beta$ are dimensionful quantities. Technically, we are really plotting dimensionless quantities, involving the ratios of $E$ and $R$ to a standard unit of energy and rate, respectively. For example, in SI units, we would have

$$
\log \frac { R } { 1 \mathrm {~Hz} } = - \frac { E _ { 0 } / ( 1 \mathrm {~J} ) } { E / ( 1 \mathrm {~J} ) } + \log \frac { \beta } { 1 \mathrm {~Hz} } .
$$

On the page, we literally plot $( 1 \mathrm {~J} ) / E$ versus $\log ( R / ( 1 \mathrm {~Hz} ) )$. This gives a line with dimensionless slope $- E _ { 0 } / ( 1 \mathrm {~J} )$ and intercept $\log ( \beta / ( 1 \mathrm {~Hz} ) )$. You don't have to keep this technicality in mind, but this sort of thing is always implicitly happening whenever one plots data.


(b) The uncertainty in $\beta$ alone always gives a 1\% uncertainty in $R$. But the uncertainty in $R$ due to the uncertainty in $E _ { 0 }$ depends on the value of $E$. For $E \ll E _ { 0 }$, we can expand the exponential as $\left( 1 - E / E _ { 0 } \right)$, and in this case the uncertainty in $E _ { 0 }$ does almost nothing at all, so the uncertainty in $\beta$ dominates. For $E \gg E _ { 0 }$, the reverse is true. By dimensional analysis, the crossover must be around $E \sim E _ { 0 }$.
