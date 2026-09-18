---
id: solution-ocr-izho-2020-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2020_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2020-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 1.2 (3.0 points)

Consider a conductor with a resistivity $\rho$, length $l$ and a cross section area $S$ in which the current $I$ flows. According to the Joule-Lenz law, the heat power dissipated in a conductor per unit of time is equal to

$$
\begin{equation*}
W = I ^ { 2 } R , \tag{1}
\end{equation*}
$$

where the current density is defined as

$$
\begin{equation*}
j = \frac { I } { s } , \tag{2}
\end{equation*}
$$

and the resistance is found by the formula

$$
\begin{equation*}
R = \rho \frac { l } { s } . \tag{3}
\end{equation*}
$$

It follows from formulas (1)-(3) that the heat power per unit volume is determined by the expression

$$
\begin{equation*}
w = \frac { W } { S l } = \rho j ^ { 2 } . \tag{4}
\end{equation*}
$$

On the other hand, Ohm's law is written as

$$
\begin{equation*}
U = I R , \tag{5}
\end{equation*}
$$

in which the voltage across the conductor is expressed in terms of the field strength $E$ in the form

$$
\begin{equation*}
U = E l . \tag{6}
\end{equation*}
$$


Hence, equation (5), taking into account (2), (3) and (6), is written in the following differential form

$$
\begin{equation*}
j = \frac { 1 } { \rho } E , \tag{7}
\end{equation*}
$$

Thus, according to the Joule-Lenz law, the heat power dissipated per unit of volume of the substance is

$$
\begin{equation*}
w = \rho ( r ) j ( r ) ^ { 2 } , \tag{8}
\end{equation*}
$$

where the current density is determined by the expression

$$
\begin{equation*}
j ( r ) = \frac { I } { 4 \pi r ^ { 2 } } , \tag{9}
\end{equation*}
$$

with $\rho ( r )$ denotes the dependence of the resistivity on the distance $r$ to the common center of spheres.

On the other hand, Ohm's law (7) is written in the differential form as

$$
\begin{equation*}
j ( r ) = \frac { 1 } { \rho ( r ) } E ( r ) , \tag{10}
\end{equation*}
$$

where $E ( r )$ stands for the electric field strength in the substance.
It follows from relations (8)-(10) that the electric field strength has the form

$$
\begin{equation*}
E ( r ) = \frac { w } { j ( r ) } = \frac { 4 \pi w } { I } r ^ { 2 } . \tag{11}
\end{equation*}
$$

To determine the charge inside the conducting substance, we use the Gauss theorem for the closed volume, which is practically enclosed between spheres of radii $a$ and $b$

$$
\begin{equation*}
E ( b ) 4 \pi b ^ { 2 } - E ( a ) 4 \pi a ^ { 2 } = \frac { Q } { \varepsilon _ { 0 } } . \tag{12}
\end{equation*}
$$

where $Q$ symbolizes the total charge inside the conductive substance.
Since the volume of the substance enclosed between the two spheres is equal to

$$
\begin{equation*}
V = \frac { 4 } { 3 } \pi b ^ { 3 } - \frac { 4 } { 3 } \pi a ^ { 3 } , \tag{13}
\end{equation*}
$$

Then, the average charge density in the conducting substance is obtained as

$$
\begin{equation*}
\rho _ { Q } = \frac { Q } { V } = \frac { 12 \pi \varepsilon _ { 0 } w } { I } \left( \frac { b ^ { 4 } - a ^ { 4 } } { b ^ { 3 } - a ^ { 3 } } \right) . \tag{14}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| Formula (1): $W = I ^ { 2 } R$ | 0,2 |
| Formula (2): $j = \frac { I } { S }$ | 0,2 |
| Formula (3): $R = \rho \frac { l } { s }$ | 0,2 |
| Formula (4): $w = \frac { W } { S l } = \rho j ^ { 2 }$ | 0,2 |
| Formula (5): $U = I R$ | 0,2 |
| Formula (6): $U = E l$ | 0,2 |
| Formula (7): $j = \frac { 1 } { \rho } E$ | 0,2 |
| Formula (8): $w = \rho ( r ) j ( r ) ^ { 2 }$ | 0,2 |
| Formula (9): $j ( r ) = \frac { I } { 4 \pi r ^ { 2 } }$ | 0,2 |
| Formula (10): $j ( r ) = \frac { 1 } { \rho ( r ) } E ( r )$ | 0,2 |
| Formula (11): $E ( r ) = \frac { w } { j ( r ) } = \frac { 4 \pi w } { I } r ^ { 2 }$ | 0,2 |
| Formula (12): $E ( b ) 4 \pi b ^ { 2 } - E ( a ) 4 \pi a ^ { 2 } = \frac { Q } { \varepsilon _ { 0 } }$ | 0,3 |
| Formula (13): $V = \frac { 4 } { 3 } \pi b ^ { 3 } - \frac { 4 } { 3 } \pi a ^ { 3 }$ | 0,2 |
| Formula (14): $\rho _ { Q } = \frac { 12 \pi \varepsilon _ { 0 } w } { I } \left( \frac { b ^ { 4 } - a ^ { 4 } } { b ^ { 3 } - a ^ { 3 } } \right)$ | 0,3 |
| Total | 3,0 |


## Problem 1.3 (3.0 points)

To analyze the image on the screen, it is more convenient to build first the image $L ^ { \prime }$ of the source in the mirror. This image is located at the distance $l$ from the mirror and has the same dimensions as the real source.
![](../../../figures/solution-ocr/36f68ed648d86e1b60cd2c0e.jpg)
1.3.1 In this case, the source size is much smaller than the size of the mirror. As a first approximation, the source can be considered point-like. Therefore, the illuminated area on the screen has the form of a regular triangle repeating the shape of the mirror (see. fig.).

It follows from simple geometric constructions that the size of the triangle is 3 times the size of the mirror, i.e. a triangle on the screen can be inscribed in a circle of radius $r = 3 r _ { 2 } = 30 m m$.
![](../../../figures/solution-ocr/aae33a04caa501294c517b47.jpg)
![](../../../figures/solution-ocr/5c4c89028de38acae5c46c6b.jpg)
![](../../../figures/solution-ocr/22f38a1e467a42f969adc3f5.jpg)

Since the source has, albeit small, but finite dimensions, the image of the triangle is to be slightly blurry, i.e. bordered by a semi-illuminated strip (border). The width of this strip is approximately equal to $\Delta r \approx 3 r _ { 1 } = 3 m m$. It can be imagined that each source point gives an image in the form of a triangle, these images are displaced relative to each other by the twice displacement of the source points.

In the center of the triangle there should be a blurred shadow from the source (shadow and semi shadow) whose radius is $r _ { S } \approx 2 r _ { 1 } = 2 m m$.
1.3.2 In this case, the size of the source is much larger than the size of the mirror, which in the first approximation can be considered as a very small "point" hole that forms an inverted image of the source. Such an effect is used in a pinhole camera, which also forms an inverted image.

It follows from geometric constructions that a star can be inscribed in a circle of radius $r = 2 r _ { 1 } = 20 m m$. The final dimensions of the source lead to slight blurring of the image with the width of the semi-illuminated strip (border) approximately equal to $\Delta r = 2 r _ { 2 } = 0.2 m m$.
![](../../../figures/solution-ocr/35dd3fdb71ce31f9eaf0ed34.jpg)
Further, it should be noted that the real source creates a shadow on the screen in the form of the same five-pointed star and of the same size! However, this shadow is not inverted. Therefore, only part of


the bright star is closed, as shown in the figure. Thus, only five irregular quadrangles remain illuminated on the screen.
![](../../../figures/solution-ocr/6b2257754963faee97ea9dd4.jpg)

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 1.3.1 | The rays are correctly constructed (the image of the source, or the correct reflection of the rays); | 0.3 | 1.3 |
|  | Image grading: the main part is an inverted triangle; (if not, then the rest in this paragraph is not counted); | 0,3 |  |
|  | Triangle size - numerical value (side or radius); | 0,1 |  |
|  | There is a semi-illuminated border; | 0,2 |  |
|  | Border width; | 0,1 |  |
|  | There is a blurred shadow in the center; | 0,2 |  |
|  | The size of the shadow (partial shade) is the radius in the range of 1-2 mm; | 0,1 |  |
| 1.3.2 | The rays are correctly constructed (the image of the source, or the correct reflection of the rays); | 0,2 | 1.7 |
|  | Image grading |  |  |
|  | The main part is an inverted star; (if not, then the rest in this paragraph is not counted); | 0,4 |  |
|  | The radius of the star (numerical value); | 0,2 |  |
|  | There is a border; | 0,1 |  |
|  | Estimation of the border thickness; | 0,2 |  |
|  | There is a shadow from the source; | 0,2 |  |
|  | Shadow is not an inverted star; | 0,1 |  |
|  | The size of the shadow coincides with the size of the inverted star; | 0,2 |  |
|  | Illuminated areas - 5 quadrangles; | 0,1 |  |
|  | Total |  | 3,0 |
