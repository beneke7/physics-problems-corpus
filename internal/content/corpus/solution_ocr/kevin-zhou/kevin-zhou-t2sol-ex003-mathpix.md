---
id: solution-ocr-kevin-zhou-t2sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3: Heat Capacities
The heat capacities at constant volume and constant pressure are defined as

$$
C _ { V } = \left. \frac { \partial Q } { \partial T } \right| _ { V } , \quad C _ { P } = \left. \frac { \partial Q } { \partial T } \right| _ { P } .
$$


Find a formula for $C _ { P } - C _ { V }$ in terms of $P , V , T$, and the internal energy $U$.

Solution
To avoid confusion, we again note that the partial derivative notation above does not imply that $Q$ is a state function. It simply means that a small increment of heat transfer $d Q$ can be related to small increments of $P , V$, and $T$, via

$$
đ Q = C _ { V } d T + \left. \frac { \partial Q } { \partial V } \right| _ { T } d V = C _ { P } d T + \left. \frac { \partial Q } { \partial P } \right| _ { T } d P
$$

Now, to solve the problem itself, we apply the second identity derived in example 2, to get

$$
C _ { P } = C _ { V } + \left. \left. \frac { \partial Q } { \partial V } \right| _ { T } \frac { \partial V } { \partial T } \right| _ { P } .
$$

To write this in terms of $U$, we use the first law of thermodynamics,

$$
d Q = d U + P d V .
$$

By expanding both $d Q$ and $d U$ in the differentials $d V$ and $d T$, we read off

$$
\left. \frac { \partial Q } { \partial T } \right| _ { V } = \left. \frac { \partial U } { \partial T } \right| _ { V } , \left. \quad \frac { \partial Q } { \partial V } \right| _ { T } = \left. \frac { \partial U } { \partial V } \right| _ { T } + P .
$$

The first result just tells us that $C _ { V }$ can be equivalently defined as $\left. ( \partial U / \partial T ) \right| _ { V }$. As for the second result, plugging it in gives an answer of

$$
C _ { P } - C _ { V } = \left. \left( \left. \frac { \partial U } { \partial V } \right| _ { T } + P \right) \frac { \partial V } { \partial T } \right| _ { P } .
$$

This is actually quite intuitive. The extra heat we have to put in at constant pressure, when we allow the volume to change, comes from two sources. First, we have to make up for the energy lost to $P d V$ work. Second, we have to make up for the energy intrinsically needed to expand the gas, by doing work against the attractive intermolecular forces between the gas molecules. (That second term is zero for an ideal gas by definition.) However, trying to show this result without the organizing framework of partial derivatives would be prone to error.
