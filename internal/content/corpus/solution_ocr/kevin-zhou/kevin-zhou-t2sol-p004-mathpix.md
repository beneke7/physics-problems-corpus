---
id: solution-ocr-kevin-zhou-t2sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. [A] Now let's revisit the nonideal gas considered in problem 2. We would like to take the given form of the internal energy and derive the equation of state, which gives the pressure in terms of the other variables.
    (a) Explain why it's true that
$$
\left. \left. \frac { \partial U } { \partial S } \right| _ { V } \frac { \partial S } { \partial V } \right| _ { T } = - \left. \frac { \partial U } { \partial V } \right| _ { S } + \left. \frac { \partial U } { \partial V } \right| _ { T } .
$$
Three of these partial derivatives can be evaluated easily; simplify accordingly.
    (b) This gets us close to the desired result, except that we don't know how to evaluate $\partial S / \left. \partial V \right| _ { T }$. To do this, we're going to need another Maxwell relation. Find the Maxwell equation that follows from taking the partial derivatives of the quantity $U - T S$ with respect to $T$ and $V$.
    (c) You should now have a differential equation for the pressure as a function of temperature, at constant volume. To finish, integrate this equation and use the fact that the attractive interaction has negligible effect as $a \rightarrow 0$.

Solution. (a) This is simply a direct application of the change of variable identity in example 2. The easy things to evaluate are

$$
\left. \frac { \partial U } { \partial S } \right| _ { V } = T , \left. \quad \frac { \partial U } { \partial V } \right| _ { S } = - P , \left. \quad \frac { \partial U } { \partial V } \right| _ { T } = \frac { a n ^ { 2 } } { V ^ { 2 } }
$$

from which we conclude that

$$
\left. T \frac { \partial S } { \partial V } \right| _ { T } = P + \frac { a n ^ { 2 } } { V ^ { 2 } } .
$$


(b) First, let's figure out what the differential of this quantity is. Calling it $F$, we have
$$
d F = T d S - P d V - T d S - S d T = - P d V - S d T .
$$
Therefore, we conclude that
$$
\left. \frac { \partial F } { \partial V } \right| _ { T } = - P , \left. \quad \frac { \partial F } { \partial T } \right| _ { V } = - S
$$
and the corresponding Maxwell relation is
$$
\left. \frac { \partial P } { \partial T } \right| _ { V } = \left. \frac { \partial S } { \partial V } \right| _ { T } .
$$
Plugging this in, we conclude that
$$
\left. T \frac { \partial P } { \partial T } \right| _ { V } = P + \frac { a n ^ { 2 } } { V ^ { 2 } } .
$$

(c) If we separate the variables, at constant $V$, then we have
$$
\frac { d P } { P + a n ^ { 2 } / V ^ { 2 } } = \frac { d T } { T }
$$
and integrating tells us that
$$
T \propto P + \frac { a n ^ { 2 } } { V ^ { 2 } }
$$
where the constant of proportionality can depend on $n$ and $V$, since these quantities were held constant. When $a \rightarrow 0$, we have to recover the ideal gas law, so the constant has to be $n R / V$, and we conclude that
$$
P + \frac { a n ^ { 2 } } { V ^ { 2 } } = \frac { n R T } { V }
$$
as desired. (In T3, we will combine this pressure correction with a "volume exclusion factor" to yield the van der Waals gas, which is useful for modeling the liquid-gas phase transition.)

[3] Problem 5. [A] INPhO 2020, problem 1. A very contrived application of partial derivatives.

## 2 The Second Law

Idea 5: Entropy
The increase in entropy of a body at temperature $T$ that receives heat $d Q$ is

$$
d S = \frac { d Q } { T }
$$

if the process is reversible; moreover, entropy is a state function.

Idea 6: Second Law
The second law of thermodynamics takes several equivalent forms, which are all useful.

- For an isolated system, $d S \geq 0$ for any spontaneous process.
- Clausius: no process is possible whose sole result is the transfer of heat from a colder to a hotter body.
- Kelvin: no process is possible whose sole result is the complete conversion of heat into work.
- Carnot: of all heat engines working between two given temperatures, none is more efficient than a Carnot engine.
