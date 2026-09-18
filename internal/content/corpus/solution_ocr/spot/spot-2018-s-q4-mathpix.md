---
id: solution-ocr-spot-2018-s-q4
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2018-q4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 4 Charged sphere

4(a)(i)

$$
U = \frac { 2 \pi r ^ { 3 } \sigma ^ { 2 } } { \epsilon _ { 0 } }
$$

Students could either consider the work done in assembling the charged sphere, or integrating the energy of the electric field over all space.

4(a)(ii)

$$
p = \frac { \sigma ^ { 2 } } { 2 \epsilon _ { 0 } }
$$


Some students made the mistake of assuming that $\sigma$ is constant when differentiating $F = - d U / d r$. There were even mistakes made in the definition of $p$ as well, as the $4 \pi$ factors seemed too temptingly nice to cancel.

4(b)(i) Some explanations involved too many leaps. The idea is to take a small square patch, pull it on all four sides with the same force, then resolve the radial component and relate it to pressure.

4(b)(ii) $9.96 \times 10 ^ { 6 } \mathrm { Nm } ^ { - 2 }$
4(b)(iii) With $N$ identical spheres of radius $r$, from part (a)(i) the energy stored goes as

$$
U \propto N r ^ { 3 } \sigma ^ { 2 }
$$

and the amount of metal used goes as $N r ^ { 2 }$.
Consider electrostatic breakdown and mechanical rupture scenarios separately.
We note that the electric field at the surface goes as $E \propto \sigma$, so if electrostatic breakdown is the limiting factor, we cap the allowed value of $\sigma$ and see that increasing $r$ at the expense of $N$ gives us greater gain in $U$ relative to the amount of metal used. (Better to use a large sphere.)

If mechanical rupture is the limiting factor, from the working for part (b)(ii) we see that we must cap the allowed value of $\sigma ^ { 2 } r$, so the amount of energy stored scales in the same way as the amount of metal used. (No difference in using a large sphere or several smaller spheres.)

Some students failed to structure their approach such that the comparison was fair - there was a need to either keep the amount of metal used constant, or keep the amount of energy stored constant. There are a lot of inter-related variables like $\sigma$ and $r$ at play here, so only by considering their combined effect would a reasonable conclusion be reached.
