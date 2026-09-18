---
id: solution-ocr-nbpho-2014-s-p9
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2014-thermal-acceleration]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 9. Thermal acceleration

1) For the heat energy of one mole of material $d q = C _ { v } d T$. There is no heat energy by $T = 0$, hence $q = \int _ { 0 } ^ { T } C _ { v } d T$. Using the graph we find this as the area under the curve, $q \approx R \cdot 560 \mathrm {~J} / \mathrm { K }$. The number of moles $\nu = a ^ { 3 } \rho / M _ { A } \approx 0.117 \mathrm {~mol}$, hence the total heat energy $Q = q \nu \approx 546 \mathrm {~J}$.
2) Each photon of frequency $\nu$ radiated by the cube carries away heat energy equal to $E = h \nu$, and carries momentum $p = h / \lambda = h \nu / c = E / c$. If the photon departs at the angle $\alpha$ with respect to the surface normal then the component parallel to the surface normal $p _ { \| } = \frac { E } { c } \cos \alpha$. The total momentum given by the photons to the cube equals by modulus to the total momentum carried by the photons; when averaged over all the photons, the perpendicular to the surface normal components cancel out (photons go to all the directions). The average value of the parallel component can be estimated just as $p _ { \| } \sim \frac { E } { c }$.

If we want to obtain an exact result, we need to integrate over all the directions while keeping in mind that the light intensity is proportional to $\cos \alpha$. So, the momentum averaged over all the directions $\bar { p } _ { \| } = \frac { E } { c } \frac { 1 } { 2 \pi } \int \cos ^ { 2 } \alpha d \Omega$, where the solid angle differential $d \Omega = 2 \pi \sin \alpha d \alpha$. Therefore, $\bar { p } _ { \| } =$ $\frac { E } { c } \int _ { 0 } ^ { \pi / 2 } \sin \alpha \cos ^ { 2 } \alpha d \alpha = \frac { E } { c } \int _ { 0 } ^ { \pi / 2 } \cos ^ { 2 } \alpha d \cos \alpha = \frac { E } { 3 c }$.
Since the momentum-energy ratio is the same for all the photons, equal to $1 / c$, the overall momentum equals to $Q / c$. Thus, $a ^ { 3 } \rho v \sim Q / c$, hence

$$
v \sim \frac { Q } { \rho a ^ { 3 } c } \approx 0.67 \mathrm {~mm} / \mathrm { s } .
$$

If we apply the exact factor $\frac { 1 } { 3 }$ (obtained above via integration), we end up with $v \approx 0.22 \mathrm {~mm} / \mathrm { s }$. 3) The heat balance at very low temperatures can be written as $A T ^ { 3 } d T = - \sigma S T ^ { 4 } d t$, where $A$ is a constant, $\sigma$ is the Stefan-Boltzmann constant, and $S$ - the radiating area. This simplifies to

$$
\frac { d T } { T } = - B t \Rightarrow T = A \cdot e ^ { - B t } .
$$

4) In the case of a hydrogen atmosphere, the momentum is given to the cube due to the fact that the molecules colliding with the coated faces bounce back with the same speed as the they came, but uncoated face gives away heat energy, and the molecules leave at higher temperature. If we assume that the departing molecules have the same temperature as the cube (which serves us only as an estimate - when particles of different masses collide, only a part of the energy is transferred), then the momentum-to-heat ratio is estimated as $1 / v _ { T }$, where $v _ { T } = \sqrt { R T / M _ { H } }$ is the thermal speed of the molecules after the collision with the cube for the motion along the surface normal. So we estimate $a ^ { 3 } \rho v \sim Q / v _ { T }$, hence

$$
v \sim \frac { Q } { \rho a ^ { 3 } } \sqrt { \frac { M _ { H } } { R T } } \approx 180 \mathrm {~m} / \mathrm { s } .
$$

It should be noted that in fact, one should have been careful with such an estimate, because the thermal speed is at the denominator. This will increase the relative contribution of the heat radiated at low temperatures. However, the remaining heat at low temperatures is proportional to $T ^ { 4 }$, and therefore the contribution of those molecules which collide with the cube at low temperatures to the overall momentum remains still small.
