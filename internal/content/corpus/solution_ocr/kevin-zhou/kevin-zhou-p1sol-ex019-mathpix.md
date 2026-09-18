---
id: solution-ocr-kevin-zhou-p1sol-ex019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 19
For $\epsilon \ll 1$, find a rough estimate for the leading term in the definite integral

$$
I = \int _ { 0 } ^ { \pi / 4 } \frac { d \theta } { \epsilon ^ { 2 } + \sin ^ { 2 } \theta }
$$

Solution
The integrand has a sharp peak near $\theta = 0$ of height $\sim 1 / \epsilon ^ { 2 }$ and width $\theta \sim \epsilon$, so $I \sim 1 / \epsilon$.
If we also want to get the prefactor, we can approximate the integral by keeping only the contribution from the peak. On the peak, we can use the small angle approximation,

$$
I \approx \int _ { 0 } ^ { \pi / 4 } \frac { d \theta } { \epsilon ^ { 2 } + \theta ^ { 2 } } \approx \int _ { 0 } ^ { \infty } \frac { d \theta } { \epsilon ^ { 2 } + \theta ^ { 2 } } = \frac { \pi } { 2 \epsilon }
$$

where the second step followed because the integrand falls rapidly for $\theta \gtrsim \epsilon$.

Remark
The estimate above is right, but you might worry we've missed some important contributions, e.g. from the integration range away from the peak, or from applying the small angle approximation within the integral. A more careful method is to split the integration range,

$$
I = \int _ { 0 } ^ { \delta } \frac { d \theta } { \epsilon ^ { 2 } + \sin ^ { 2 } \theta } + \int _ { \delta } ^ { \pi / 4 } \frac { d \theta } { \epsilon ^ { 2 } + \sin ^ { 2 } \theta } = I _ { 1 } + I _ { 2 }
$$

where $\epsilon \ll \delta \ll 1$. Then we can apply approximations within $I _ { 1 }$ and $I _ { 2 }$ separately. First,

$$
I _ { 1 } = \int _ { 0 } ^ { \delta } \frac { d \theta } { \epsilon ^ { 2 } + \theta ^ { 2 } } + O \left( \int _ { 0 } ^ { \delta } \frac { \theta ^ { 4 } d \theta } { \left( \epsilon ^ { 2 } + \theta ^ { 2 } \right) ^ { 2 } } \right) = \frac { 1 } { \epsilon } \tan ^ { - 1 } \frac { \delta } { \epsilon } + \mathcal { O } ( \delta )
$$

where we accounted for the leading correction to the small angle approximation, and expanded the integrand with the binomial theorem. Similarly, in the second case, expanding the denominator for small $\epsilon$ gives

$$
I _ { 2 } = \int _ { \delta } ^ { \pi / 4 } \frac { d \theta } { \sin ^ { 2 } \theta } + O \left( \int _ { \delta } ^ { \pi / 4 } \frac { \epsilon ^ { 2 } } { \sin ^ { 4 } \theta } \right) = ( \cot \delta - 1 ) + \mathcal { O } \left( \epsilon ^ { 2 } / \delta ^ { 3 } \right)
$$

We now can explicitly see how big the error terms are. To finish, we should check that we can choose $\delta$ so that the error terms are reasonably small, and that the answer is independent of the precise value of $\delta$. Here, we take $\delta \sim \sqrt { \epsilon }$. Taylor expanding the arctangent and cotangent,

$$
I _ { 1 } = \frac { \pi } { 2 \epsilon } - \frac { 1 } { \delta } + \mathcal { O } ( \sqrt { \epsilon } ) , \quad I _ { 2 } = \frac { 1 } { \delta } - 1 + \mathcal { O } ( \sqrt { \epsilon } ) .
$$

We thus conclude $I = \pi / ( 2 \epsilon ) - 1 + \mathcal { O } ( \sqrt { \epsilon } )$, which is more accurate than the rough treatment above, and has an estimate on the error. You probably won't ever have to do anything this intricate for an Olympiad, but this is the kind of reasoning you might informally do (much more roughly than what's written above) to check that your initial estimate is right.
