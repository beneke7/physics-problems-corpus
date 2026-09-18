---
id: solution-ocr-nbpho-2006-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2006_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2006-drying]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## I. Drying

1) Let the number of moles of cold and warm air be $\nu _ { 1 }$ and $\nu _ { 2 }$; let $C _ { V }$ designate the molar heat capacitance at a fixed volume. Then the total change of internal energy is $\Delta U = C _ { V } \left[ \nu _ { 1 } \left( T - T _ { 1 } \right) + \nu _ { 2 } ( T - \right.$ $\left. T _ { 2 } \right) = \left( C _ { V } p _ { 0 } / R \right) \left( V - V _ { 1 } - V _ { 2 } \right)$ (using the ideal gas law). Internal energy change must be equal to the work of the external pressure: $\left( C _ { V } p _ { 0 } / R \right) \left( V - V _ { 1 } - \right. \left. V _ { 2 } \right) = p _ { 0 } \left( V - V _ { 1 } - V _ { 2 } \right)$, hence $V - V _ { 1 } - V _ { 2 }$ (since $C _ { V } / R \neq 1$ ).
2) The molar amount of gas $\left( p _ { 0 } / R \right) \left( V _ { 1 } / T _ { 1 } + \right.$ $\left. V _ { 2 } / T _ { 2 } \right) = \left( p _ { 0 } / R \right) \left( V _ { 1 } + V _ { 2 } \right) / T _ { * }$, hence $T _ { * } = \left( V _ { 1 } + \right.$ $\left. V _ { 2 } \right) / \left( V _ { 1 } T _ { 1 } ^ { - 1 } + V _ { 2 } T _ { 2 } ^ { - 1 } \right)$, i.e. $t _ { * } \approx 16,5 ^ { \circ } \mathrm { C }$.
3) The vapor mass $m _ { a } = \rho _ { a } \left( t _ { 1 } \right) V _ { 1 } + \rho _ { a } \left( t _ { 2 } \right) V _ { 2 }$, the mass of saturating vapor at the given temperature $m _ { a k } = \rho _ { a } \left( t _ { * } \right) \left( V _ { 1 } + V _ { 2 } \right)$. Relative humidity $r = m _ { a } / m _ { a k }$, because at the fixed temperature, the pressure is proportional to the density. So, $r = \tilde { \rho } _ { a } / \rho _ { a } \left( t _ { * } \right)$, where the weighted average of the vapor $\tilde { \rho } _ { a } = \left[ \rho _ { a } \left( t _ { 1 } \right) V _ { 1 } + \rho _ { a } \left( t _ { 2 } \right) \right] / \left( V _ { 1 } + V _ { 2 } \right)$ - this value can be found from the graph as the coordinate of the point $C$ : we draw the line $a t + b$, connecting points $A$ and $B$, and take the reading for the point $C$ lying on the line $a t _ { * * } + b \approx 1,68 \mathrm {~g} / \mathrm { m } ^ { 3 }$ at $t _ { * * } = 17 ^ { \circ } \mathrm { C }$ (this value divides the interval $\left[ t _ { 2 } ; t _ { 1 } \right]$ in the proportions $V _ { 1 } : V _ { 2 }$ ). The saturating vapor pressure at the given temperature is found as the coordinate of the point $D : p _ { a } \left( t _ { * } \right) \approx 1,38 \mathrm {~g} / \mathrm { m } ^ { 3 }$. Finally we obtain $r \approx 1,22 = 122 \%$.
![](../../../figures/solution-ocr/c39168c28eb7aaf4c72b9b3d.jpg)
4) In order to find the condensating mass, we write down heat balance: $c _ { p } \rho _ { 0 } \Delta t = q \left[ \tilde { \rho } _ { a } - \rho _ { a } \left( t _ { * } + \Delta t \right) \right]$, where $\Delta t$ is the temperature change due to the condensation. By designating $t _ { * } + \Delta t = \tau$ we can rewrite the balance as $\rho _ { a } ( \tau ) = \tilde { \rho } _ { a } - c _ { p } \rho _ { 0 } \left( \tau - t _ { * } \right) / q$. So, we need to find the intersection point $E$ of the curve $\rho _ { a } ( \tau )$ with the line $\tilde { \rho } _ { a } - c _ { p } \rho _ { 0 } \left( \tau - t _ { * } \right) / q =$ $\tilde { \rho } _ { a } - 0,478 \mathrm {~g} \cdot \mathrm {~m} ^ { - 3 } \mathrm {~K} ^ { - 1 } \cdot \left( \tau - t _ { * } \right)$ (line $C ^ { \prime } E$ in Fig.). Using the graph we find $\Delta \rho \approx 0,25 \mathrm {~g} / \mathrm { m } ^ { 3 } -$ this is the length of the line with arrows. So, the condensating mass $\Delta m = \Delta \rho \left( V _ { 1 } + V _ { 2 } \right) \approx 7,5 \mathrm {~g}$.

Thus, when meteorologists tell us that at the meeting point of cold and hot air, there are heavy rains, the phenomenon can be explained by this problem.
