---
id: kevin-zhou-p1-p003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p003
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[2] Problem 3. Some questions about vibrations.
(a) The typical frequency f of a vibrating star depends only on its radius R, density ρ, and
the gravitational constant G. Use dimensional analysis to find an expression for f, up to a
dimensionless constant. Then estimate f for the Sun, looking up any numbers you need.
(b) The typical frequency f of a small water droplet freely vibrating in zero gravity could depend
on its radius R, density ρ, surface tension γ, and the gravitational constant G. This is too
many parameters for dimensional analysis to work, but if you think about it for a second,
you’ll see that one of them doesn’t actually matter. Using this, find an expression for f up to
a dimensionless constant.
2
Kevin Zhou Physics Olympiad Handouts
Solution. (a) We just do the usual dimensional analysis,
[f] = s−1
[R] = m [ρ] = kg/m3
[G] =
m3
kg · s2
To cancel out the units of kg, we consider the product of G and ρ, which has units [ρG] = s−2.
Then to get [f] = s−1,
f ∼
p
Gρ ∼ 3 × 10−4
Hz
which is in the right range. These oscillations are measured in the field of helioseismology.
Another application of this result is that the time needed for a ball of gas of density ρ to
collapse is of order 1/
√
Gρ, called the free fall time. This timescale plays an important role
in structure formation in the early universe.
(b) In any nontrivial dimensional analysis problem, you will have too many parameters, and will
have to think about how to reduce them. The right ones to drop depend on the system.
Here, the gravitational forces of the small droplet on itself are completely negligible compared
to surface tension, so we can drop G. Performing dimensional analysis with R, ρ, and γ gives
f ∼
r
γ
ρR3
.
Of course, part (a) is equivalent to starting with the same set of four parameters and dropping
γ, which makes sense since the objects considered are huge.
