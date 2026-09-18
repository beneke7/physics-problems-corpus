---
id: solution-ocr-apho-2005-e-s-q1
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2005_E_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2005-e-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 1. SHAPES DETERMINATION BY REFLECTION <br> SUGGESTED SOLUTION

Barcode: B00110

| Object Position ( $\alpha ^ { \circ }$ ) | Reflected Ray ( $\beta ^ { \circ }$ ) | Cal. Reflected Ray ( $\beta ^ { \circ }$ ) |
| :--- | :--- | :--- |
| -10 | 211 | -149 |
| -5 | 223 | -137 |
| 0 | 230 | -130 |
| 10 | 251 | -109 |
| 20 | 270 | -90 |
| 30 | 290 | -70 |
| 40 | 310 | -50 |
| 50 | 330 | -30 |
| 60 | 349 | -11 |
| 75 | 17 | 17 |
| 80 | 28 | 28 |
| 90 | 46 | 46 |
| 100 | 65 | 65 |
| 110 | 87 | 87 |
| 120 | 117 | 117 |
| 130 | 128 | 128 |
| 140 | 273 | -87 |
| 150 | 291 | -69 |
| 160 | 310 | -50 |
| 170 | 326 | -34 |
| 180 | 343 | -17 |
| 195 | 10 | 10 |
| 200 | 12 | 12 |
| 210 | 34 | 34 |
| 220 | 249 | -111 |
| 230 | 267 | -93 |
| 240 | 285 | -75 |
| 250 | 301 | -59 |
| 260 | 319 | -41 |
| 270 | 337 | -23 |
| 275 | 345 | -15 |
| 290 | 13 | 13 |
| 300 | 29 | 29 |
| 310 | 46 | 46 |
| 320 | 64 | 64 |
| 330 | 83 | 83 |
| 340 | 102 | 102 |


![](../../../figures/solution-ocr/bf5a1de7ed63397494c1c118.jpg)

Function: $\beta ( \alpha )$
There are 3 jumps on the graph. This is observed at $\alpha = - 10 ^ { \circ } , 140 ^ { \circ }$ and $220 ^ { \circ }$. The jump in the reflection angles are caused by the change of sides, therefore the object has 3 sides and if all the sides are straight sides, we can approximate the lines on the graph using linear regression, i.e:

$$
\boldsymbol { \beta } = \mathbf { m } \boldsymbol { \alpha } + \mathbf { c }
$$

Where: $\alpha =$ position angle of the object (in ${ } ^ { \circ }$ ) and $\beta =$ reflected ray angle (in °)

$$
\begin{equation*}
\text { Segment } 1 \text { ( } - 10 \text { to } 130 \text { ): } \quad \beta = 1.98 \alpha + \mathrm { c } 1 \tag{A1}
\end{equation*}
$$

$$
\begin{equation*}
\text { Segment } 2 \text { (140 to } 210 \text { ): } \beta = 1.73 \alpha + \mathrm { c } 2 \tag{A2}
\end{equation*}
$$

$$
\begin{equation*}
\text { Segment } 3 \text { (220 to 340): } \beta = 1.78 \alpha + \mathrm { c } 3 \tag{A3}
\end{equation*}
$$

To find the gradient, m , as function of side distance from the rotation axis, r , we can simulate it and get a graph and for 'small' r:


![](../../../figures/solution-ocr/dad5283c4084775a3d7fdc16.jpg)

From (A1) to (A3) and using (A4) we can determine r from the 3 sides:

$$
\begin{aligned}
& \mathrm { r } _ { 1 } = 100 - 50 ( 1.98 ) = 1.5 \mathrm {~mm} \\
& \mathrm { r } _ { 2 } = 100 - 50 ( 1.73 ) = 13.5 \mathrm {~mm} \\
& \mathrm { r } _ { 3 } = 100 - 50 ( 1.78 ) = 11.0 \mathrm {~mm}
\end{aligned}
$$

For each side, we can use the object position when the reflection angle is $0 ^ { \circ }$ to draw with a higher precision. The angle for each segment is:

$$
\begin{aligned}
& \alpha _ { 1 } = 66 ^ { \circ } \\
& \alpha _ { 2 } = 189 ^ { \circ } \\
& \alpha _ { 3 } = 282 ^ { \circ }
\end{aligned}
$$

From data obtain the shape of the object can be determined as:
![](../../../figures/solution-ocr/fcf9b457841bc9c523e8e51c.jpg)


## EXPERIMENTAL COMPETITION

Barcode : B01110
| Object Position $\left( \alpha ^ { \circ } \right)$ | Reflected Ray $\left( \beta ^ { \circ } \right)$ | Cal Reflected Ray $\left( \beta ^ { \circ } \right)$ |
| :--- | :--- | :--- |
| 10 | 278 | -82 |
| 20 | 296 | -64 |
| 30 | 313 | -47 |
| 40 | 330 | -30 |
| 50 | 347 | -13 |
| 65 | 12 | 12 |
| 70 | 20 | 20 |
| 80 | 36 | 36 |
| 90 | 56 | 56 |
| 100 | 73 | 73 |
| 110 | 91 | 91 |
| 120 | 300 | -60 |
| 130 | 320 | -40 |
| 140 | 342 | -18 |
| 145 | 351 | -9 |
| 155 | 13 | 13 |
| 160 | 23 | 23 |
| 170 | 43 | 43 |
| 180 | 67 | 67 |
| 190 | 277 | -83 |
| 200 | 297 | -63 |
| 210 | 313 | -47 |
| 220 | 330 | -30 |
| 230 | 347 | -13 |
| 245 | 13 | 13 |
| 250 | 22 | 22 |
| 260 | 39 | 39 |
| 270 | 55 | 55 |
| 280 | 74 | 74 |
| 290 | 91 | 91 |
| 300 | 335 | -25 |
| 305 | 335 | -25 |
| 310 | 336 | -24 |
| 315 | 337 | -23 |
| 320 | 338 | -22 |
| 345 | 21 | 21 |
| 350 | 22 | 22 |
| 355 | 22 | 22 |
| 360 | 23 | 23 |
| 365 | 23 | 23 |


![](../../../figures/solution-ocr/7a083209b82bd655ce9cc7e6.jpg)

Function: $\beta ( \alpha )$
There are 5 jumps in the graphics. This can be observed at $\alpha = 10 ^ { \mathrm { o } } , 120 ^ { \mathrm { o } } , 190 ^ { \mathrm { o } } , 300 ^ { \mathrm { o } }$ and $345 ^ { \circ }$. The jumps in reflection angle are caused by the change of sides, therefore there are 5 sides in the object and if all the sides are straight, we can approximate the lines using linear regression, i.e:

$$
\boldsymbol { \beta } = \mathbf { m } \boldsymbol { \alpha } + \mathbf { c }
$$

Where $\alpha =$ angular position of the object (in ${ } ^ { \circ }$ ) and $\beta =$ reflected ray angle (in °)

$$
\begin{equation*}
\text { Segment } 1 ( 10 \text { to } 110 ) : \quad \beta = 1.56 \alpha + \mathrm { c } 1 \tag{B1}
\end{equation*}
$$

$$
\begin{equation*}
\text { Segment } 2 \text { (120 to } 180 \text { ): } \beta = 2.12 \alpha + \mathrm { c } 2 \tag{B2}
\end{equation*}
$$

$$
\begin{equation*}
\text { Segment } 3 \text { (190 to 290): } \beta = 1.64 \alpha + \mathrm { c } 3 \tag{B3}
\end{equation*}
$$

$$
\begin{equation*}
\text { Segment } 4 \text { (190 to 290): } \beta = 0.15 \alpha + \mathrm { c } 3 \tag{B4}
\end{equation*}
$$

$$
\begin{equation*}
\text { Segment } 5 \text { (190 to 290): } \beta = 0.10 \alpha + \mathrm { c } 3 \tag{B5}
\end{equation*}
$$

From (B1) to (B3) and (A4) we can determine r from the 5 sides:

$$
\begin{aligned}
\mathrm { r } _ { 1 } & = 100 - 50 ( 1.56 ) \\
\mathrm { r } _ { 2 } & = 22.0 \mathrm {~mm} \\
\mathrm { r } _ { 3 } & = 100 - 50 ( 2.12 ) \\
\mathrm { r } _ { 4 } & = - 6.0 \mathrm {~mm} \\
\mathrm { r } _ { 5 } & = 100 - 50 ( 0.15 )
\end{aligned}
$$


## EXPERIMENTAL COMPETITION

There are weird data for $\mathrm { r } _ { 2 } , \mathrm { r } _ { 4 }$ and $\mathrm { r } _ { 5 }$. It is impossible to have r with either negative or very large value but not so small angle of reflection. So we can guess that it is either a curve sides or double reflection. For double reflection we need to have two adjacent sides with concave angle, so only $\mathrm { r } _ { 4 }$ and $\mathrm { r } _ { 5 }$ are possible. So $\mathrm { r } _ { 2 }$ can only be a curve side. From segment 2 of the graph we can see that the graph looks like a reverse "S" shape, so it is only possible when the sides is concave.

Considering error in the experiment, we can guess that the shape has reflection symmetry.
For each side, we can use the object position when the reflection angle is 0 to draw with a higher precision. The angle for segment 1 to 3 is:

$$
\begin{aligned}
& \alpha _ { 1 } = 58 ^ { \circ } \\
& \alpha _ { 2 } = 149 ^ { \circ } \\
& \alpha _ { 3 } = 237 ^ { \circ }
\end{aligned}
$$

From the data obtained, the shape of the object can be determined as:
![](../../../figures/solution-ocr/15498e68c766c423050d8286.jpg)


## EXPERIMENTAL COMPETITION

[Marking Scheme] Experimental Question 1
Shapes Determination by Reflection

| (A) | 0.5 | - Get data for object 1 |
| :--- | :--- | :--- |
| 2.0 | 0.5 | - Get data for object 2 |
|  | 0.5 | - Plot graph of object 1 |
|  | 0.5 | - Plot graph of object 2 |
| (B) | 0.25 | - Number of side of the object 1 |
|  | 0.25 | - Number of side of the object 2 |
| 0.5 |  |  |
| (C) | 0.5 | - Angles positions of object 1 |
| 3.0 | 0.5 | - Angles positions of object 2 |
|  | 0.5 | - Orientation of sides of object 1 |
|  | 0.5 | - Orientation of sides of object 2 |
|  | 0.5 | - Side shapes of object 1 |
|  | 0.5 | - Side shapes of object 2 |
| (D) | 1 | - Axis distance from side A of object 1 |
|  | 1 | - Axis distance from side $B$ of object 1 |
| 3.0 | 1 | - Axis distance from side C of object 1 |
| (E) | 0.5 | - Dimension of side $A$ of object 1 |
|  | 0.5 | - Dimension of side $B$ of object 1 |
| 1.5 | 0.5 | - Dimension of side $C$ of object 1 |
