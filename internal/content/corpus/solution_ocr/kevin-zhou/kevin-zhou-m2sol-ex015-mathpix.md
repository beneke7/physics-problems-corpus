---
id: solution-ocr-kevin-zhou-m2sol-ex015
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex015]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 15
A spherical soap bubble of radius $R$ and surface tension $\gamma$ is in air with pressure $P$, and contains air with pressure $P + \Delta P$. Compute $\Delta P$.

Solution
We use the result of the previous problem to conclude that the force of one hemisphere on another is $\pi R ^ { 2 } \Delta P$. This must be balanced by the surface tension force. By imagining cutting the surface of the bubble in half, the surface tension force is $\gamma L$ where $L$ is the total length of the surface connecting the hemispheres.

At this point, we can write $L = 2 \pi R$, giving

$$
\Delta P = \frac { 2 \gamma } { R } .
$$

This is called the Young-Laplace equation. However, in this particular case, this is not the right answer. The reason is that we should actually take $L = 4 \pi R$ because the surface tension is exerted at both the inside and outside surfaces of the bubble wall, and thus the answer is

$$
\Delta P = \frac { 4 \gamma } { R } .
$$

The increased pressure inside balances the surface tension, which wants to collapse the bubble.
If you're confused about why $L = 4 \pi R$, you can also think about it in terms of energy. Surface tension arises from the fact that it costs energy to take soapy water and stretch it out into a surface, because this breaks some of the attractive intermolecular bonds. The Young-Laplace equation would give the correct answer for a ball of soapy water. But for a bubble of soapy water, twice as much soapy water/air surface is created. So the energy cost is double, and the force is double.
