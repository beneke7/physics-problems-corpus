---
id: solution-ocr-usapho-2015-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2015-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

The nature of magnetic dipoles.

a. A "Gilbert" dipole consists of a pair of magnetic monopoles each with a magnitude $q _ { m }$ but opposite magnetic charges separated by a distance $d$, where $d$ is small. In this case, assume that $- q _ { m }$ is located at $z = 0$ and $+ q _ { m }$ is located at $z = d$.
![](../../../figures/solution-ocr/9e62829b1a894c3ca5b18399.jpg)
Assume that magnetic monopoles behave like electric monopoles according to a coulomb-like force
$$
F = \frac { \mu _ { 0 } } { 4 \pi } \frac { q _ { m 1 } q _ { m 2 } } { r ^ { 2 } }
$$
and the magnetic field obeys
$$
B = F / q _ { m } .
$$
i. What are the dimensions of the quantity $q _ { m }$ ?

## Solution

By the second expression, $q _ { m }$ must be measured in Newtons per Tesla. But since Tesla are also Newtons per Ampere per meter, then $q _ { m }$ is also measured in Ampere meters.

ii. Write an exact expression for the magnetic field strength $B ( z )$ along the $z$ axis as a function of $z$ for $z > d$. Write your answer in terms of $q _ { m } , d , z$, and any necessary fundamental constants.

## Solution

Adding the two terms,

$$
B ( z ) = - \frac { \mu _ { 0 } } { 4 \pi } \frac { q _ { m } } { z ^ { 2 } } + \frac { \mu _ { 0 } } { 4 \pi } \frac { q _ { m } } { ( z + d ) ^ { 2 } } .
$$

iii. Evaluate this expression in the limit as $d \rightarrow 0$, assuming that the product $q _ { m } d = p _ { m }$ is kept constant, keeping only the lowest non-zero term. Write your answer in terms of $p _ { m } , z$, and any necessary fundamental constants.

## Solution

Simplifying our previous expression,

$$
B ( z ) = \frac { \mu _ { 0 } } { 4 \pi } q _ { m } d \left( \frac { 2 + d / z } { z ( z + d ) ^ { 2 } } \right) .
$$

Thus in the limit $d \rightarrow 0$ we have

$$
B ( z ) = \frac { \mu _ { 0 } } { 2 \pi } \frac { q _ { m } d } { z ^ { 3 } } = \frac { \mu _ { 0 } } { 2 \pi } \frac { p _ { m } } { z ^ { 3 } } .
$$


b. An "Ampère" dipole is a magnetic dipole produced by a current loop $I$ around a circle of radius $r$, where $r$ is small. Assume the that the $z$ axis is the axis of rotational symmetry for the circular loop, and the loop lies in the $x y$ plane at $z = 0$.
![](../../../figures/solution-ocr/b5f5ace22d802a900cdf56d5.jpg)
    i. Write an exact expression for the magnetic field strength $B ( z )$ along the $z$ axis as a function of $z$ for $z > 0$. Write your answer in terms of $I , r , z$, and any necessary fundamental constants.

## Solution

Applying the Biot-Savart law, with s the vector from the point on the loop to the point on the $z$ axis,

$$
B ( z ) = \frac { \mu _ { 0 } I } { 4 \pi } \oint \frac { d \mathbf { l } \times \mathbf { s } } { s ^ { 3 } } = \frac { \mu _ { 0 } I } { 4 \pi } \frac { 2 \pi r } { r ^ { 2 } + z ^ { 2 } } \sin \theta
$$

where $\theta$ is the angle between the point on the loop and the center of the loop as measured by the point on the $z$ axis, so

$$
\sin \theta = \frac { r } { \sqrt { r ^ { 2 } + z ^ { 2 } } } .
$$

Then we have

$$
B ( z ) = \frac { \mu _ { 0 } I } { 4 \pi } \frac { 2 \pi r ^ { 2 } } { \left( r ^ { 2 } + z ^ { 2 } \right) ^ { 3 / 2 } } .
$$

ii. Let $k I r ^ { \gamma }$ have dimensions equal to that of the quantity $p _ { m }$ defined above in Part aiii, where $k$ and $\gamma$ are dimensionless constants. Determine the value of $\gamma$.

## Solution

We know $p _ { m }$ must have dimensions of Amperes times meters squared, so $\gamma = 2$.

iii. Evaluate the expression in Part bi in the limit as $r \rightarrow 0$, assuming that the product $k I r ^ { \gamma } = p _ { m } ^ { \prime }$ is kept constant, keeping only the lowest non-zero term. Write your answer in terms of $k , p _ { m } ^ { \prime } , z$, and any necessary fundamental constants.

## Solution

Using our previous result,

$$
B ( z ) = \frac { \mu _ { 0 } I } { 4 \pi } \frac { 2 \pi r ^ { 2 } } { \left( r ^ { 2 } + z ^ { 2 } \right) ^ { 3 / 2 } } \approx \frac { \mu _ { 0 } I } { 2 \pi } \frac { \pi r ^ { 2 } } { z ^ { 3 } } = \frac { \mu _ { 0 } } { 2 \pi } \frac { \pi } { k } \frac { p _ { m } ^ { \prime } } { z ^ { 3 } }
$$


iv. Assuming that the two approaches are equivalent, $p _ { m } = p _ { m } ^ { \prime }$. Determine the constant $k$ in Part bii.

## Solution

By inspection, $k = \pi$.

c. Now we try to compare the two approaches if we model a physical magnet as being composed of densely packed microscopic dipoles.
![](../../../figures/solution-ocr/e73d4bc4ec3f20679675e066.jpg)
A cylinder of this uniform magnetic material has a radius $R$ and a length $L$. It is composed of $N$ magnetic dipoles that could be either all Ampère type or all Gilbert type. $N$ is a very large number. The axis of rotation of the cylinder and all of the dipoles are all aligned with the $z$ axis and all point in the same direction as defined above so that the magnetic field outside the cylinder is the same in either dipole case as you previously determined. Below is a picture of the two dipole models; they are cubes of side $d \ll R$ and $d \ll L$ with volume $v _ { m } = d ^ { 3 }$.

![](../../../figures/solution-ocr/421444db6c2b8cfdcc91f291.jpg)
Gilbert Dipole

![](../../../figures/solution-ocr/3415c60ddb6a824fbbca98cc.jpg)
Ampère Dipole


i. Assume that $R \gg L$ and only Gilbert type dipoles, determine the magnitude and direction of $B$ at the center of the cylinder in terms of any or all of $p _ { m } , R , L , v _ { m }$, and any necessary fundamental constants.

## Solution


The monopoles that make up the dipoles cancel out except on the flat surfaces. Then the cylinder acts like a parallel plate capacitor.
If the size of a dipole is $d$, then the surface density of monopole charge is

$$
\sigma _ { m } = q _ { m } / d ^ { 2 } .
$$

Using the analogy with a parallel place capacitor, the magnitude of $B$ is

$$
B = \mu _ { 0 } \sigma _ { m } = \mu _ { 0 } \frac { p _ { m } } { d ^ { 3 } }
$$

and the direction is to the left.
ii. Assume that $R \ll L$ and only Ampère type dipoles, determine the magnitude and direction of $B$ at the center of the cylinder in terms of any or all of $p _ { m } , R , L , v _ { m }$, and any necessary fundamental constants.

## Solution

The currents that make up the dipoles all cancel out except on the cylindrical surfaces. Then the cylinder acts like a solenoid, with

$$
B = \frac { \mu _ { 0 } I } { d }
$$

where $I / d$ is the surface current density. The magnitude of $B$ is

$$
B = \frac { \mu _ { 0 } I } { d } = \mu _ { 0 } \frac { p _ { m } } { d ^ { 3 } }
$$

and the direction is to the right.


## Answer Sheets

Following are answer sheets for some of the graphical portions of the test.


![](../../../figures/solution-ocr/95ed038d4d1a8ceb817c7aad.jpg)
![](../../../figures/solution-ocr/3c5ad1864d8b56626be19ae8.jpg)
