---
id: solution-ocr-kevin-zhou-t2sol-p003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 3. [A] Let's check the consequences of this idea.

(a) We should be able to take the partial derivatives of $U$ with respect to $S$ or $V$ in either order. By combining this idea with your solution to problem 1, infer a nontrivial relationship between the derivatives of $T$ and $P$, and check that it is satisfied for an ideal gas.
(b) If heat was a state function, we could take the partial derivatives of $Q$ with respect to $T$ or $V$ in either order. Check that this implies a relationship which is not satisfied for an ideal gas.

Solution. (a) Since we can take the partial derivatives of $U$ with respect to $S$ and $V$ in either order, we conclude that we need the nontrivial relation

$$
\left. \frac { \partial T } { \partial V } \right| _ { S } = - \left. \frac { \partial P } { \partial S } \right| _ { V } .
$$

To evaluate the left-hand side, we need to consider how $T$ varies with $V$ in an adiabatic expansion. In this case $T V ^ { \gamma - 1 }$ is constant, so that

$$
\frac { d T } { T } = ( 1 - \gamma ) \frac { d V } { V }
$$

from which we conclude that

$$
\left. \frac { \partial T } { \partial V } \right| _ { S } = - \frac { T } { V } ( \gamma - 1 ) .
$$

To evaluate the right-hand side, note that for constant volume heating, $d U = d Q = T d S$, so

$$
\left. \frac { \partial P } { \partial S } \right| _ { V } = \left. T \frac { \partial P } { \partial U } \right| _ { V } = T \left( \left. \frac { \partial U } { \partial P } \right| _ { V } \right) ^ { - 1 } .
$$

But for an ideal gas, we have $U = n R T / ( \gamma - 1 ) = P V / ( \gamma - 1 )$, so

$$
\left. \frac { \partial P } { \partial S } \right| _ { V } = \frac { T } { V } ( \gamma - 1 )
$$

which confirms the expected result.

(b) By definition, the differential of heat is
$$
\partial Q = C _ { V } d T + \left. \frac { \partial Q } { \partial V } \right| _ { T } d V
$$
and the required identity, if heat were a state function, is
$$
\left. \frac { \partial C _ { V } } { \partial V } \right| _ { T } = \left. \frac { \partial } { \partial T } \right| _ { V } \left( \left. \frac { \partial Q } { \partial V } \right| _ { T } \right) .
$$
The left-hand side just vanishes for an ideal gas. As for the right hand side, we note that
$$
\left. \frac { \partial Q } { \partial V } \right| _ { T } = \left. \frac { \partial U } { \partial V } \right| _ { T } - \left. \frac { \partial W } { \partial V } \right| _ { T } = - \left. \frac { \partial W } { \partial V } \right| _ { T } = P
$$

where we used the fact that the internal energy of an ideal gas depends only on temperature. Thus, the right-hand side is
$$
\left. \frac { \partial P } { \partial T } \right| _ { V } = \frac { n R } { V } \neq 0
$$
so the identity is not satisfied, as expected.
