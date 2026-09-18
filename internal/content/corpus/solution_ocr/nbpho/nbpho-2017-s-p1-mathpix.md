---
id: solution-ocr-nbpho-2017-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2017-dragon]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 1. DRAGON

i) First we have to note that the diameter of the bowl and the height of the dragon give inconsistent results. Because the distance between the two images of the dragons is relatively small compared to the height of the dragon, the height of the water level is almost 3 cm, i.e. the dragon's height. But by comparing the water level to the diameter of the bowl the water level is around 7 cm . So either the bowl's diameter or the dragon's height is incorrect. Neglecting the inconsistency of the provided values we will give the solution method below.

The dragon is relatively large and covers most of the bottom of the bowl. Therefore when viewing from below we would expect some of the rays to always hit the dragon after being reflected from the horizontal top water surface. This happens until the rays are incident to the water surface at an angle smaller than the total internal reflection angle. Then the rays will go through the water surface and we no longer see the reflection of the dragon. From the image below for the total internal reflection case we have

$$
\begin{gathered}
n \sin \gamma _ { 1 } = \sin 90 = 1 , \\
\gamma _ { 1 } = \arcsin \left( \frac { 1 } { n } \right) \approx 48.8 ^ { \circ } .
\end{gathered}
$$

Because the normals to the top water surface and the side of the bowl are at $60 ^ { \circ }$, we have

$$
\gamma _ { 1 } + \gamma _ { 2 } = 60 ^ { \circ } \Longrightarrow \gamma _ { 2 } \approx 11.2 ^ { \circ } .
$$

From Snell's law we have

$$
\begin{gathered}
\sin \gamma _ { 3 } = n \sin \gamma _ { 2 } \Longrightarrow \gamma _ { 3 } = \arcsin \left( n \sin \gamma _ { 2 } \right) , \\
\gamma _ { 3 } \approx 15.0 ^ { \circ } .
\end{gathered}
$$

Because the normal to the side of the bowl is at $30 ^ { \circ }$ to the horizon, the angle of the ray that exited the bowl is $30 ^ { \circ } + \gamma _ { 3 } \approx 45.0 ^ { \circ }$ below the horizon.
![](../../../figures/solution-ocr/d1461b6409bb7fbb98e43003.jpg)
ii) First, notice that all calculations below are not very precise and slight departure from the given numbers is acceptable as the bowl wall is slightly curved (the angle between horizon and the wall is not strictly constant).

By the size and shape of the dragon we will assume that the highest point of the dragon is roughly in the middle of the bowl. The last point that we will see as we increase the viewing angle is the image of the highest point of the dragon, which we denote by $O$. By using a ruler to measure the size of the dragon and the distance between the highest point of the dragon to the same point on the reflected image, we get 4.5 cm and 0.45 cm. The actual height of the dragon is 3cm, so the actual distance between the dragon and its reflection is $2 h = \frac { 0.45 } { 4.5 } \cdot 3 \mathrm {~cm} = 0.3 \mathrm {~cm}$. The two images are at equal distances from the water surface, because they are reflections of each other. Therefore the distance from the highest point of the dragon to the water surface is $h = 0.15 \mathrm {~cm}$.
![](../../../figures/solution-ocr/929377e320739d079d5b42cd.jpg)

The height $H$ of the water surface can be measured from the photo, by measuring the diameter of the bottom of the bowl and the height of the water level on the photo with a ruler. We get 9.3 cm and 6.5 cm. The actual diameter is $d = 10 \mathrm {~cm}$. Therefore the actual height of the water level is $H = \frac { 6.5 } { 9.3 } \cdot 10 \mathrm {~cm} = 7.0 \mathrm {~cm}$ (or we can add up the height of the dragon and the distance of it's highest point from the water surface, which we found before). In the image below we can find

$$
| Q P | = \frac { d } { 2 } + H \tan \left( 30 ^ { \circ } \right) \approx 9 \mathrm {~cm} .
$$

Now we can use the following relations

$$
\begin{gathered}
\tan \gamma _ { 3 } = \frac { h } { | Q P | } \\
\gamma _ { 2 } = 30 ^ { \circ } - \gamma _ { 3 } \\
n \sin \gamma _ { 2 } = \sin \gamma _ { 1 }
\end{gathered}
$$

The final angle above the horizon is $\alpha = \gamma _ { 1 } -$ 30 deg and by using the previous relations we get

$$
\begin{gathered}
\alpha = \operatorname { asin } \left( n \sin \left( 30 ^ { \circ } - \operatorname { atan } \left( \frac { h } { | Q P | } \right) \right) - 30 \mathrm { deg } , \right. \\
\alpha \approx 10.2 ^ { \circ } .
\end{gathered}
$$
