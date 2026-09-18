---
id: solution-ocr-nbpho-2022-s-p9
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2022-magnet-in-glass]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
9. Magnet in glass (12 points) - Solution by Jaan and Taavet Kalda.
i)(1 point)The height is best measured using a caliper by either making markings on the surface of the cylinder corresponding to the perpendiculars of the ends of the magnet, or by measuring it from far away. Either way, the goal is to remove the effects of parallax when measuring the height of the cylinder. The following measurements were made

| $i$ | $h ( \mathrm {~mm} )$ |
| :--- | :--- |
| 1 | 9.7 |
| 2 | 9.5 |
| 3 | 9.4 |

1 measurement (0.3/0.5 pts)
2 measurements (0.4/0.5 pts)
3 or more measurements (0.5/0.5 pts)

The average height is found to be $h =$ 9.5(2) mm. value within $[ 9.1 \mathrm {~mm} , 10.0 \mathrm {~mm} ]$ (0.3 pts) error (0.2 pts)
ii) (3 points)Note that if the solid cylinder and the cylinder with a magnet were to roll down on the same slope of angle $\alpha$, the former will roll slower because it has relatively larger moment of inertia. One can easily derive a formula for the acceleration by rolling: $a = g \sin \alpha / ( 1 + \kappa )$. For cylinder, $\kappa _ { c } = \frac { 1 } { 2 }$, hence, for the cylinder with magnet, $\kappa > \frac { 1 } { 2 }$.

Correct formula for $a$ (0.4 pts)
This observation brings us to the idea about how to perform the experiment: we need to build two slopes side-by-side, with slightly different slope angles, so that the two cylinders were to roll down with exactly the same speed.

This idea (0.6 pts)
If we release cylinders simultaneously, we can easily detect by eye if one of them is faster. We need to perform many experiments, though, because the release is sometimes unsuccessful, and one of the cylinders will obtain a slight head-start. Also, we need to make many experiments to reduce the statistical uncertainty.

It is convenient to build the sightly different slopes by supporting the two boards from one end on the same brick, but displacing one of them by a certain distance $s$.

With board length $L = 60 \mathrm {~cm}$ and brick height $h = 56 \mathrm {~mm}$, we build slopes so that the brick is supporting the boards near their end.
![](../../../figures/solution-ocr/5e2b106edfd8378cba563904.jpg)
This means that in average, $s \approx 52 \mathrm {~mm}$


Each measurement up to the 7th (0.1/0.7 pts) Measuring $L$ (0.2 pts) Measuring $h$ (0.2 pts)

Based on the formula for $a$, we obtain $( 1 + \kappa ) \sin \alpha = \frac { 3 } { 2 } \sin ( \alpha + \Delta )$ from where from where

$$
\kappa = \frac { 3 } { 2 } \frac { \sin ( \alpha + \Delta ) } { \sin \alpha } - 1 ,
$$

Relating $\kappa$ to $\Delta$ (0.2 pts)

Meanwhile, $\sin \alpha = \frac { h } { L }$ and $\sin ( \alpha + \Delta ) =$ $\frac { h } { L - s }$, hence

$$
\frac { \sin ( \alpha + \Delta ) } { \sin \alpha } = \frac { L - s } { L } .
$$

Bringing all together,

$$
\kappa = \frac { 3 } { 2 } \frac { L - s } { L } - 1 = \frac { 1 } { 2 } - \frac { 3 s } { L } .
$$

Numerically we obtain $\kappa \approx 0.24$.

Relating $\kappa$ to the directly measured quantities (0.2 pts) Numerical values from 0.2 to 0.3 (0.5/0.5 pts)
From 0.15 to 0.2 and from 0.3 to 0.4 (0.2/0.5 pts)
iii) (2.5 points) A potential method would be to observe the light ray that barely touches the edge of the magnet, (0.5 pts) and make markings where the ray enters and exits the cylinder. This works, because the markings define a chord whose distance from the centre is the radius of the magnet $r = d / 2$. Hence, the distance between the markings $a$ relates to $r$ and $R$ via Pythagoras theorem via $r = \sqrt { R ^ { 2 } - a ^ { 2 } / 4 }$ or in other words,

$$
d = \sqrt { 4 R ^ { 2 } - a ^ { 2 } } .
$$

(0.7 pts)
![](../../../figures/solution-ocr/68c7acc3748f35baba70dc4b.jpg)

We start by using the caliper to measure the base diameter $2 R \approx 25.1 \mathrm {~mm}$. (0.2 pts)

We make the following measurements for $a$ :
![](../../../figures/solution-ocr/d33972e30c3bf76630e43135.jpg)

1 measurement (0.3/0.5 pts)
1 measurement (0.3/0.5 pts) 2 measurements (0.4/0.5 pts) 2 measurements (0.4/0.5 pts) 3 or more measurements (0.5/0.5 pts) 3 or more measurements (0.5/0.5 pts)

This yields $a = 22.2 ( 3 ) \mathrm { mm }$ such that $d =$
Tabulated measurements of the apparent 12.0(7) mm. width are shown below

![](../../../figures/solution-ocr/f1740baf32bf19fda7a350d1.jpg)
3 or more measurements (0.3 pts) with units (0.2 pts)

Averaging, $d ^ { \prime } = 18.5 ( 4 ) \mathrm { mm }$ average value of $d$ with errors (0.25 pts)
and so $n _ { o } = 1.54$ with an associated error of $\Delta n _ { o } = 0.09$. value within [1.50, 1.58] (0.25 pts) error (0.25 pts)
v) (3 points)We repeat what we did by part iii: we mark a point $A$ on the cylinder, turn the cylinder until the point $A$, as seen through the cylinder, is barely seen through the outer part, and just disappearing behind the interface between the inner and outer parts, and make marking $B$ at that point on the front surface were the image of $A$ is seen, cf. the figure below. Then we continue turning the cylinder until point $A$ appears again, now at point $C$ and is seen through the inner region of the cylinder. The corresponding ray undergoes refraction at 90-degree incidence angle at point $M$, hence $\cos \gamma = n _ { o } / n _ { c }$, see the figure.

It can be seen that $\angle B O C = 2 \gamma$. We can measure the distance between the markings $| B C | \approx 5.3 \mathrm {~mm}$ using the caliper. Then we can express $\sin \gamma = | B C | / 2 R \approx 0.211$. Finally, $n _ { c } = n _ { o } / \cos \gamma = n _ { o } / \sqrt { 1 - \sin ^ { 2 } \gamma } \approx$
![](../../../figures/solution-ocr/e2a744bafeb70757531ea131.jpg)

Idea of this method (0.8 pts) Formula for relating $| B C |$ to $\gamma$ ( $\mathbf { 0 . 8 }$ pts) Measuring $| B C |$ (0.4 pts) Formula for relating $n _ { c }$ to $\gamma$ ( $\mathbf { 0 . 4 }$ pts) Obtaining final result for $n _ { c }$ which is from 1\% to 4\% bigger than $n _ { o }$ (0.6 pts)
