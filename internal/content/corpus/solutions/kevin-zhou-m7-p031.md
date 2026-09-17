---
id: kevin-zhou-m7-p031
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-p031
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

[2] Problem 31 (Eotvos 2018). A large sealed cylindrical container of water of density ρ and atmo-
spheric pressure contains an air bubble of volume V and surface tension γ. The cylinder is in zero
gravity, but then begins to rotate with angular velocity ω. If ω is sufficiently high, the bubble will
acquire a simple shape. Qualitatively describe it, and find the condition on ω for this to occur.
Solution. Working in the frame rotating with the container, the centrifugal force tries to push
water outward, which tends to compress the bubble (which contains no water) towards the axis of
rotation. Thus, in the limit of high ω, the bubble is shaped like a long cylinder.
For this shape to be achieved, the energy associated with the centrifugal force must dominate
over that associated with surface tension. So we must have
ρV ω2
r2
≫ γr2
where r ∼ V 1/3 is the characteristic length of the initial spherical bubble. This is equivalent to
ω ≫
p
γ/ρV . I thank Kai Wen Teo for translating this problem.
[3] Problem 32.  ^ 1 0USAPhO 2020, problem B1. A nice, slightly mathematically involved surface
tension problem with a real-world impact. This setup is discussed in detail in section 5.4 of Lautrup.
[4] Problem 33. @ 1 0IPhO 2023, problem 3, parts B and C. A nice problem on the shape of a
meniscus, which also explains why pieces of cereal clump together in a bowl of milk.
Example 21: IPhO 2022 3B
Slightly wet sand is much stronger than either dry sand or very wet sand, which allows the
construction of large structures like sand castles. Why is this, and how does the strength
depend on the typical size r of the sand grains?
Solution
When a pile of sand is dry, the only force keeping it in place is friction, which is weak. When
it’s very wet, it’s essentially just water, which will simply collapse. But when it’s slightly
wet, adjacent sand grains have a small layer of water connecting them. Since sand grains are
37
Kevin Zhou Physics Olympiad Handouts
small, this implies a huge total surface area, and thus large surface tension effects.
There are actually two conceptually distinct components to the effect. First, the bit of water
connecting two sand grains will provide a surface tension force F ∼ γr. Second, as you
saw in problem 29, the water has a pressure lower by ∆P ∼ γ/r, leading to an attractive
pressure force (∆P)A ∼ γr. In either case, that means the force needed to displace a single
grain of sand scales with r. The number of sand grains in a fixed cross-sectional area scales
as 1/r2, so the weight a sand castle can bear scales as 1/r. Thus, fine-grained sand is stronger.
This is another example of the subtleties of granular media, first mentioned in M2. Neither
sand nor water are strong on their own, but they’re strong together. Water provides the
forces, while the sand provide the structure which lets those forces be effective.
38
