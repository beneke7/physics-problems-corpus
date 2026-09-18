---
id: solution-ocr-kevin-zhou-mrevsol-p024
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-mrev-p024]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 24. Consider a potential of the form $V ( r ) = - a / r ^ { n }$.

(a) For what $n$ is it possible for a particle to orbit in a circle passing through the origin?
(b) For what $n$ is it possible for a particle to spiral inward, $r ( \theta ) \propto e ^ { - c \theta }$ for some $c$ ?

Solution. Using the effective potential results from M6, we have

$$
\frac { 1 } { 2 } m \left( \frac { d r } { d t } \right) ^ { 2 } = E + \frac { a } { r ^ { n } } - \frac { L ^ { 2 } } { 2 m r ^ { 2 } } .
$$

We also know that

$$
\frac { d \theta } { d t } = \frac { L } { m r ^ { 2 } }
$$

and since we're interested in the trajectory's shape, we multiply by $( d \theta / d t ) ^ { - 2 }$ to get

$$
\frac { 1 } { 2 } m \left( \frac { d r } { d \theta } \right) ^ { 2 } = \frac { m ^ { 2 } } { L ^ { 2 } } \left( E r ^ { 4 } + \frac { a } { r ^ { n - 4 } } - \frac { L ^ { 2 } r ^ { 2 } } { 2 m } \right) .
$$

This setup will be common to both of the parts of the problem.

(a) The equation of a circle through the origin in polar coordinates is $r = b \sin \theta$, so
$$
\left( \frac { d r } { d \theta } \right) ^ { 2 } = b ^ { 2 } \cos ^ { 2 } \theta = b ^ { 2 } - r ^ { 2 } .
$$
We therefore must have, for appropriate constants $E , L$, and $b$, that
$$
b ^ { 2 } - r ^ { 2 } = \frac { 2 m } { L ^ { 2 } } \left( E r ^ { 4 } + \frac { a } { r ^ { n - 4 } } - \frac { L ^ { 2 } r ^ { 2 } } { 2 m } \right) .
$$
The final terms on each side cancel, so the first two terms on the right-hand side have to sum to a constant. This is only possible if $E = 0$ and $n = 4$.
Note that the orbit can have finite $L$ because $v$ diverges when $r$ goes to zero. This is a classic problem, which was common in mechanics books in the 1800s. Technically, it's not really physical since the potential blows up near the origin, so the particle has to be aimed perfectly to pass straight through it rather than get deflected through some angle, but it's still cute.
(b) In order for this to hold, $d r / d \theta$ must be proportional to $r$ itself, which means we must have $E = 0$ and $n = 2$, corresponding to an inverse cube force. This odd behavior was discovered by Cotes in the early 1700s, and the resulting shape is called a Cotes spiral.

These examples show that Kepler's first law is nontrivial. When you go beyond the inverse square law, you don't just get modifications of conics, you get orbits with completely different character. More generally, weird behaviors like these can occur when $n \geq 2$, as the gravitational potential can overwhelm the centrifugal potential barrier. In our universe, we have $n = 1$ because there are $d = n + 2 = 3$ spatial dimensions. It has been proposed that $d = 3$ is the only option, because $d = 2$ is too simple and $d > 3$ would not generically allow stable orbits, needed for the development of life.
