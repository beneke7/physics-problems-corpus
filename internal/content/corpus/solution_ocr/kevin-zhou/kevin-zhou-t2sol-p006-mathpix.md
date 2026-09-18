---
id: solution-ocr-kevin-zhou-t2sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 6. Some basic conceptual questions about the second law.

(a) Verify explicitly that the second law of thermodynamics allows heat to flow from a hot body to a cold one, but not vice versa.
(b) Derive the efficiency of a Carnot engine operating between reservoirs of temperatures $T _ { H } > T _ { C }$ by using the fact that the Carnot cycle is reversible, i.e. that after a complete Carnot cycle the entropy of the universe is unchanged.
(c) Let's suppose that in addition to reservoirs at temperatures $T _ { H }$ and $T _ { C }$, you had a reservoir at temperature $\left( T _ { H } + T _ { C } \right) / 2$. Is the Carnot cycle between the extreme reservoirs still the most efficient option? If not, what's the maximum possible efficiency?
(d) Consider the free expansion of an ideal gas. No work is done, and the internal energy $U$ does not change. However, the entropy increases since the process is irreversible. On the other hand, the first law states
$$
d U = T d S + đ W
$$
so there appears to be a contradiction. What is wrong with this argument?

Solution. (a) If $d Q$ of heat flows from $T _ { 1 }$ to $T _ { 2 }$ with $T _ { 1 } > T _ { 2 }$, the total change in entropy is

$$
- d Q / T _ { 1 } + d Q / T _ { 2 } > 0 ,
$$

so $t Q > 0$ as desired.

(b) The change in entropy of the engine itself is zero, because it just ends up at its original state. The only other contribution is the change in entropy of the reservoirs,
$$
\Delta S _ { \text {univ } } = \frac { Q _ { C } } { T _ { C } } - \frac { Q _ { H } } { T _ { H } } .
$$

Setting this to zero gives $Q _ { C } / T _ { C } = Q _ { H } / T _ { H }$. The efficiency is then
$$
\eta = \frac { W } { Q _ { H } } = \frac { Q _ { H } - Q _ { C } } { Q _ { H } } = 1 - \frac { T _ { C } } { T _ { H } } .
$$
(c) The Carnot engine is still the most efficient option. From the standpoint of entropy changes in part (b), it is always best to draw heat from the hottest possible reservoir and to expel it to the coldest possible reservoir.
(d) The problem is that $d Q \neq T d S$ for irreversible processes. For example, in free expansion the entropy goes up, even though no heat is added.
