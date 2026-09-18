---
id: solution-ocr-nbpho-2018-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2018-cube]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
6. CUBE The cube gets pushed by the light reflecting against its surfaces. Since there is no partial reflection, light can only reflect inside the cube via total internal reflection.

Let the cube's faces be aligned to $\mathrm { x } - \mathrm { y } - \mathrm { z }$ axis and let the light enter from the face which is perpendicular to the z-axis.

Before entering the cube, let the unit vector directed along the motion of the light be $\vec { t } = \left( t _ { x } , t _ { y } , t _ { z } \right)$, after entering the cube, $\vec { r } = \left( r _ { x } , r _ { y } , r _ { z } \right)$, before leaving the cube, $\vec { r } ^ { \prime } =$ $\left( r _ { x } ^ { \prime } , r _ { y } ^ { \prime } , r _ { z } ^ { \prime } \right)$ and after leaving the cube, $\vec { t } ^ { \prime } =$ $\left( t _ { x } ^ { \prime } , t _ { y } ^ { \prime } , t _ { z } ^ { \prime } \right)$. Every time the light bounces against one of the sides of the cube, the respective component of $\vec { r }$ gets flipped.
i) The laser beam is limited to propagate in a two-dimensional plane. Take $t _ { y } = 0 , r _ { y } = 0$, $r _ { y } ^ { \prime } = 0$ and $t _ { y } ^ { \prime } = 0$.

In time $\mathrm { d } t$, the laser pointer generates light with total energy $P \mathrm {~d} t$ carrying momentum $\frac { P } { c } \mathrm {~d} t$. In that time, the same amount of light enters the cube and exits it, only with different direction. Applying Newton's III law, the cube must attain a momentum of $\mathrm { d } \vec { p } = \frac { P } { c } \mathrm {~d} t \left( \vec { t } - \vec { t } ^ { \prime } \right)$ and thus experiences a force of $\vec { F } = \frac { \mathrm { d } \vec { p } } { \mathrm {~d} t } = \frac { P } { c } \left( \vec { t } - \vec { t } ^ { \prime } \right) =$ $\frac { P } { c } \sqrt { \left( t _ { x } - t _ { x } ^ { \prime } \right) ^ { 2 } + \left( t _ { z } - t _ { z } ^ { \prime } \right) ^ { 2 } }$. This means that we wish to maximize the quantity $\left( t _ { x } - t _ { x } ^ { \prime } \right) ^ { 2 } + \left( t _ { z } - \right.$ $\left. t _ { z } ^ { \prime } \right) ^ { 2 }$.

Snell's law can be written as $n r _ { x } = t _ { x }$ and $n r _ { x } ^ { \prime } = t _ { x } ^ { \prime }$ since $t _ { x }$ and $r _ { x }$ are the sines of angles of incidence and departure respectively.

The laser beam can only reflect against the side that is perpendicular to the x -axis, beam path with internal reflection is shown inthe figure. Thus, $r _ { z } ^ { \prime } = r _ { z }$ and $t _ { z } ^ { \prime } = t _ { z }$. Let's investigate the reflection against the x -face. The angle of incidence is $\cos \alpha = r _ { x }$. The condition for total internal reflection is $\sin \alpha n \geq 1$. Rearranging the terms yields $\cos \alpha < \sqrt { 1 - \frac { 1 } { n ^ { 2 } } }$ or $r _ { x } < \sqrt { 1 - \frac { 1 } { n ^ { 2 } } }$. This means that $t _ { x } < \sqrt { n ^ { 2 } - 1 }$.
![](../../../figures/solution-ocr/f0cf42aa1ff473112d403d29.jpg)

The force is maximal when the laser beam bounces against the cube odd number of times. Then $r _ { x } ^ { \prime } = - r _ { x }$ and $t _ { x } ^ { \prime } - t _ { x } < 2 \sqrt { n ^ { 2 } - 1 }$. Thus, $F = \frac { P } { c } \sqrt { \left( t _ { x } - t _ { x } ^ { \prime } \right) ^ { 2 } + \left( t _ { z } - t _ { z } ^ { \prime } \right) ^ { 2 } } < \frac { 2 P } { c } \left( n ^ { 2 } - 1 \right)$. Note that $t _ { x } ^ { 2 } + t _ { z } ^ { 2 } = 1$ so $t _ { x } < 1$. This means that the force can't be larger than $\frac { 2 P } { c }$. The maximal force is then

$$
F = \begin{cases} 2 \frac { P } { c } \sqrt { n ^ { 2 } - 1 } , & \text { if } n < \sqrt { 2 } \\ 2 \frac { P } { c } , & \text { otherwise } \end{cases}
$$

ii) We proceed in a similar way as in the previous part, the main difference being that the y-component doesn't have to be 0.

The act of entering the cube keeps the light moving in the same direction in the $\mathrm { x } - \mathrm { y }$ plane. Thus, $\frac { t _ { x } } { t _ { y } } = \frac { r _ { x } } { r _ { y } }$. Snell's law can be written as $\sqrt { t _ { x } ^ { 2 } + t _ { y } ^ { 2 } } = n \sqrt { r _ { x } ^ { 2 } + r _ { y } ^ { 2 } }$, since $\sqrt { t _ { x } ^ { 2 } + t _ { y } ^ { 2 } }$ and $\sqrt { r _ { x } ^ { 2 } + r _ { y } ^ { 2 } }$ are the sines of the angles of incidence and departure respectively. Combining these equations, we get $r _ { x } = \frac { t _ { x } } { n } , r _ { y } = \frac { t _ { y } } { n }$. Similarly, $t _ { x } ^ { \prime } = n r _ { x } ^ { \prime }$ and $t _ { y } ^ { \prime } = n r _ { y } ^ { \prime }$.

The act of reflecting against the sides of the cube doesn't change the magnitude of $r _ { x }$ and $r _ { y }$. Thus, $t _ { z } ^ { \prime } = t _ { z }$. This means that the quantity $\left( t _ { x } - t _ { x } ^ { \prime } \right) ^ { 2 } + \left( t _ { y } - t _ { y } ^ { \prime } \right) ^ { 2 }$ needs to be maximized and this happens when $r _ { y } ^ { \prime } = - r _ { y }$ and $r _ { x } ^ { \prime } = - r _ { x }$ so $F = 2 \frac { P } { c } \sqrt { t _ { x } ^ { 2 } + t _ { y } ^ { 2 } } = 2 n \frac { P } { c } \sqrt { r _ { x } ^ { 2 } + r _ { y } ^ { 2 } }$.

Using the same argumentation as in the previous subtask, the condition for a reflection to happen against the x -face is $t _ { x } < \sqrt { n ^ { 2 } - 1 }$. Similarly, $t _ { y } < \sqrt { n ^ { 2 } - 1 }$ must hold for the y-face.

This means that $r _ { x } ^ { 2 } + r _ { y } ^ { 2 } < 2 \left( 1 - \frac { 1 } { n ^ { 2 } } \right)$. On the other hand, $t _ { x } ^ { 2 } + t _ { y } ^ { 2 } + t _ { z } ^ { 2 } = 1$ so $t _ { x } ^ { 2 } + t _ { y } ^ { 2 } < 1$ and $r _ { x } ^ { 2 } +$ $r _ { y } ^ { 2 } < \frac { 1 } { n ^ { 2 } }$. Thus, $r _ { x } ^ { 2 } + r _ { y } ^ { 2 } < \min \left( 2 \left( 1 - \frac { 1 } { n ^ { 2 } } \right) , \frac { 1 } { n ^ { 2 } } \right) =$ $\frac { 1 } { n ^ { 2 } } \min \left( 2 \left( n ^ { 2 } - 1 \right) , 1 \right)$. The maximum force the cube can experience is then

$$
F = \begin{cases} 2 \sqrt { 2 } \frac { P } { c } \sqrt { n ^ { 2 } - 1 } , & \text { if } n < \sqrt { 3 / 2 } \\ 2 \frac { P } { c } , & \text { otherwise } \end{cases}
$$
