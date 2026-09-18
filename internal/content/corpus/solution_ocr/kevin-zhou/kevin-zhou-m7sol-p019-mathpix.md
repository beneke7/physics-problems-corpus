---
id: solution-ocr-kevin-zhou-m7sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 19. This problem is about the subtle phenomenon of vena contracta. An incompressible fluid of density $\rho$ is flowing through a tube of area $A _ { 1 }$, which suddenly contracts to area $A _ { 2 } \ll A _ { 1 }$. Naively, the flow looks as shown at left below.
![](../../../figures/solution-ocr/6a6c86d4219056f3ab2573f2.jpg)
![](../../../figures/solution-ocr/3b9af595b53fec7d94f5b653.jpg)

(a) Argue by energy conservation that $v _ { 2 } \approx \sqrt { 2 \left( P _ { 1 } - P _ { 2 } \right) / \rho }$.
(b) Argue that the net force on the fluid shown in the picture is approximately $\left( P _ { 1 } - P _ { 2 } \right) A _ { 2 }$. Then argue by momentum conservation that $v _ { 2 } \approx \sqrt { \left( P _ { 1 } - P _ { 2 } \right) / \rho }$.
(c) The resolution of the paradox is that in part (a), we're actually solving for the final speed of the water, and in part (b), we're actually solving for the horizontal component of the velocity. So the resolution has to be that the fluid does not exit through the orifice purely horizontally. Instead, it contracts as it exits, as shown at right above, eventually shrinking to a minimum area $A _ { 3 }$, at which point the flow actually is horizontal. Assume for simplicity that $P _ { 1 } \gg P _ { 3 }$. Show that the final area is $A _ { 3 } \approx A _ { 2 } / 2$, so that the hole is effectively only half its size.
(d) Even assuming ideal fluid flow satisfying Bernoulli's principle, the result above for $A _ { 3 }$ is not exact, but is instead off by about 20\% for the sudden opening shown above. Is the true value of $A _ { 3 }$ higher or lower than $A _ { 2 } / 2$ ?
(e) How could the shape of the orifice be modified so that $A _ { 3 }$ is almost exactly $A _ { 2 } / 2$ ? How could the orifice be modified so that the water comes out perfectly straight?

Solution. (a) Applying Bernoulli's principle,

$$
\frac { 1 } { 2 } \rho \left( v _ { 2 } ^ { 2 } - v _ { 1 } ^ { 2 } \right) = P _ { 1 } - P _ { 2 }
$$

Since $A _ { 1 } v _ { 1 } = A _ { 2 } v _ { 2 }$ and $A _ { 2 } \ll A _ { 1 }$, we have $v _ { 2 } ^ { 2 } - v _ { 1 } ^ { 2 } \approx v _ { 2 } ^ { 2 }$, so the desired equation follows.

(b) Taking a tube bounded by $A _ { 1 }$ and $A _ { 2 }$ and apply $F = d p / d t$ to the fluid within it. The pressure at the walls is approximately $P _ { 1 }$ everywhere, so the force cancels out except at the area $A _ { 2 }$. The net force is
$$
F \approx \left( P _ { 1 } - P _ { 2 } \right) A _ { 2 } .
$$
On the other hand, the rate of change of momentum is $( d m / d t ) v _ { 2 } = \rho A _ { 2 } v _ { 2 } ^ { 2 }$, where we again use $v _ { 1 } \ll v _ { 2 }$, giving the result.
(c) Neglecting $P _ { 3 }$, Bernoulli's principle gives
$$
\frac { 1 } { 2 } \rho v _ { 3 } ^ { 2 } \approx P _ { 1 } .
$$
To use momentum conservation, apply $F = d p / d t$ to a tube bounded by $A _ { 1 }$ and $A _ { 3 }$, giving
$$
F \approx P _ { 1 } A _ { 2 } , \quad \frac { d p } { d t } = \rho A _ { 3 } v _ { 3 } ^ { 2 }
$$
which gives us
$$
\frac { A _ { 3 } } { A _ { 2 } } \rho v _ { 3 } ^ { 2 } \approx P _ { 1 } .
$$
Combining these equations gives $A _ { 3 } / A _ { 2 } \approx 1 / 2$ as desired.
(d) In reality, the pressure on the right wall is not precisely $P _ { 1 }$, but instead slightly lower near the hole because the fluid has nonzero speed there. So the net force is actually larger than expected, so $A _ { 3 } > A _ { 2 } / 2$. (Actually calculating this amount exactly would be rather difficult.)

(e) We can force the net force to be almost exactly $\left( P _ { 1 } - P _ { 2 } \right) A _ { 2 }$ with a "Borda mouthpiece."
![](../../../figures/solution-ocr/fc7d11231b9d724b0a8606d9.jpg)
This works because by construction, the fluid in the parts jutting out to the right is almost perfectly at rest.
On the other hand, if we wanted the water to come out perfectly straight, we could simply make a curved mouthpiece that perfectly follows the path the water would have taken if it weren't there, and end it once the water reaches its final area $A _ { 3 }$. At that point, it will come out of the hole straight.

## Remark

Vena contracta is too subtle for introductory textbooks, but it makes a big practical difference. For example, if you estimate how long it takes water in a bucket to empty through a hole using Torricelli's law, you'll be off by up to a factor of 2 if you don't include vena contracta! And Halliday, Resnick, and Krane don't consider it in their example titled "thrust on a rocket", getting a thrust which is also off. Of course, real plumbers and rocket scientists are perfectly aware of vena contracta, and carefully design nozzles and drains to account for it. For further discussion, see this paper.

## 4 Fluid Systems

Now we put it all together and consider complex mechanical systems with moving fluids.
Idea 7
If a fluid is moving in a complex way, it's usually difficult to say anything by directly considering the flow. Instead, it's easier to apply conservation laws.
