---
id: solution-ocr-eupho-2017-t-s-t2
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2017_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2017-T2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 2 Disk in gas

The initial pressure on the thermal insulating layer is $P _ { 0 } =$ $n k _ { B } T _ { 0 }$, where $n$ is number density of the gas. It originates from multiplying the flux $j _ { 0 } \propto v _ { x 0 }$ and momentum that one molecule transfers $p _ { 0 } = 2 m v _ { x 0 }$ (elastic collision), where $v _ { x 0 }$ is the normal component of molecule's velocity, and taking the average $\left( \overline { 2 v _ { x 0 } ^ { 2 } } \propto T _ { 0 } \right)$. When applying the same idea to the surface with good thermal contact, we find out that the flux remains the same, although the momentum increases:

$$
p _ { 1 } = m \left( v _ { x 0 } + v _ { x 1 } \right) \approx m v _ { x 1 } ,
$$

where $v _ { x 1 }$ is the normal velocity component of the molecule flying away from the disk. Thus for pressure $P _ { 1 }$ :

$$
\frac { P _ { 1 } } { P _ { 0 } } = \frac { \overline { v _ { x 0 } v _ { x 1 } } } { \overline { 2 v _ { x 0 } ^ { 2 } } } \approx \frac { \sqrt { T _ { 1 } T _ { 0 } } } { T _ { 0 } } ,
$$

which is correct to some numerical coefficient of the order of one.

The net force acting on the disk:

$$
F = \left( P _ { 1 } - P _ { 0 } \right) S \approx S n k _ { B } \sqrt { T _ { 0 } T _ { 1 } } ,
$$

and then the initial acceleration:

$$
a _ { 0 } \approx \frac { S n k _ { B } } { M } \sqrt { T _ { 0 } T _ { 1 } } = \frac { S \rho k _ { B } } { m M } \sqrt { T _ { 0 } T _ { 1 } } .
$$


Since $P _ { 1 } \gg P _ { 0 }$, the disk will accelerate until its speed becomes of the order of average gas molecules speed. After the velocity $v$ of the disc becomes on the order of $v _ { 0 } = \sqrt { k T _ { 0 } / m }$, the flux of molecules reaching the backside $j ( v )$ decays faster than exponentially due to the nature of the molecular velocity distribution in the ideal gas (for example, $j \left( 2 v _ { 0 } \right) \approx 10 ^ { - 3 } j _ { 0 }$ and $j \left( 3 v _ { 0 } \right) \approx 10 ^ { - 6 } j _ { 0 }$ ). That leads to a proportional decrease in a propelling pressure $P _ { 1 }$. In order to compensate for an initial bias $\sqrt { T _ { 1 } / T _ { 0 } } \approx 30$, it will take around a factor of one on the velocity of the disk. Therefore the maximum velocity of the disk:

$$
v _ { \max } \approx v _ { 0 } = \sqrt { \frac { k _ { B } T _ { 0 } } { m } } .
$$

Here we assumed that the disk will not cool close to $T _ { 0 }$ before it reaches the maximum velocity. Let us show it. The acceleration time is approximately:

$$
t _ { a } \approx \frac { v _ { \max } } { a _ { 0 } } \approx \frac { M \sqrt { m k _ { B } T _ { 0 } } } { S \rho k _ { B } \sqrt { T _ { 0 } T _ { 1 } } } = \frac { M } { \rho S } / \sqrt { \frac { k _ { B } T _ { 1 } } { m } }
$$

Since the power of heat removal $P _ { \mathrm { th } }$ is maximal at the beginning (at zero velocity), we can upper-bound estimate the time for the disk to cool as $t _ { c } = Q / P _ { \mathrm { th } }$, where $Q$ is the total heat of the disk. The initial thermal power of heat removal can be estimated as:

$$
P _ { \mathrm { th } } \approx S j _ { 0 } \times k _ { B } T _ { 1 } \approx S n k _ { B } \sqrt { T _ { 0 } T _ { 1 } } \sqrt { \frac { k _ { B } T _ { 1 } } { m } }
$$

and the total heat $Q \approx N k _ { B } T _ { 1 }$. Given $M \approx N m$, we obtain:

$$
t _ { c } \approx \frac { ( M / m ) k _ { B } T _ { 1 } } { S n k _ { B } T _ { 1 } \sqrt { k _ { B } T _ { 0 } / m } } = \frac { M } { \rho S } / \sqrt { \frac { k _ { B } T _ { 0 } } { m } }
$$

Finally, $t _ { a } / t _ { c } \approx \sqrt { T _ { 0 } / T _ { 1 } } \ll 1$, and indeed disk will not cool significantly before it reaches the velocity about $v _ { 0 }$.
