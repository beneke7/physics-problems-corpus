---
id: solution-ocr-kevin-zhou-p1sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 6

An hourglass is constructed with small sand grains of density $\rho$, and an orifice of diameter $d$. When the sand level above the orifice is $h$, what is the mass flow rate $\mu$ ?

## Solution

The answer can only depend on $\rho , d , h$, and $g$. The Buckingham Pi theorem gives

$$
\mu = f ( h / d ) \rho \sqrt { g d ^ { 5 } } .
$$

That's as far as we can get with dimensional analysis; to go further we need to know more


about sand. If we were dealing with an ideal fluid, then the flow speed would be $v = \sqrt { 2 g h }$ by Torricelli's law, which means the flow rate has to be proportional to $\sqrt { h }$. Then $f ( x ) \propto \sqrt { x }$, giving the result $\mu \propto \rho d ^ { 2 } \sqrt { g h }$. This is a good estimate as long as the orifice isn't so small that viscosity starts to dominate.

But this isn't how sand works: measurements show that the pressure at the orifice doesn't actually depend on the height of the sand, an empirical result known as Janssen's law. That's because sand is a granular material whose motion is dominated by the friction between sand grains, and this friction prevents the additional pressure from propagating downward. The resulting flow rate is independent of $h$, as can be confirmed by watching an hourglass run. Then $f ( x )$ is a constant, giving $\mu \propto \rho \sqrt { g d ^ { 5 } }$. This neat, experimentally verified result is called Beverloo's law, and it's essential in industry to design grain hoppers and corn silos.

## Remark

One has to be a little careful with the Buckingham Pi theorem. For example, if all we had were 3 speeds $v _ { i }$, we can form two dimensionless quantities: $v _ { 1 } / v _ { 2 }$ and $v _ { 1 } / v _ { 3 }$. (The quantity $v _ { 2 } / v _ { 3 }$ is not independent, since it is the quotient of these two.) But there are 3 quantities with 2 dimensions (length and time), so we naively expect only 1 dimensionless quantity.

The problem is that the two dimensions really aren't independent: for any quantity built from the $v _ { i }$, a power of length always comes with an inverse power of time, so there's only one independent dimension. These considerations can be put on a more rigorous footing in linear algebra, where the Buckingham Pi theorem is merely a special case of the rank-nullity theorem. If you're ever in doubt, you can just forget about the theorem and play with the equations directly.

## Remark

Dimensional analysis is an incredibly common tool in Olympiad physics because it lets you say a lot even without much advanced knowledge. If a problem ever says to find some quantity "up to a constant/dimensionless factor", or how that quantity scales as another quantity changes, or what that quantity is proportional to, it's almost certainly asking you to do dimensional analysis. Another giveaway is if the problem looks extremely technical and advanced, because they can't actually be.
