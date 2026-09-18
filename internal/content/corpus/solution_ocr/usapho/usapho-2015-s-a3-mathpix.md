---
id: solution-ocr-usapho-2015-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2015-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

A large block of mass $m _ { b }$ is located on a horizontal frictionless surface. A second block of mass $m _ { t }$ is located on top of the first block; the coefficient of friction (both static and kinetic) between the two blocks is given by $\mu$. All surfaces are horizontal; all motion is effectively one dimensional. A spring with spring constant $k$ is connected to the top block only; the spring obeys Hooke's Law equally in both extension and compression. Assume that the top block never falls off of the bottom block; you may assume that the bottom block is very, very long. The top block is moved a distance $A$ away from the equilibrium position and then released from rest.
![](../../../figures/solution-ocr/90c59df95a895c375db43b8f.jpg)

a. Depending on the value of $A$, the motion can be divided into two types: motion that experiences no frictional energy losses and motion that does. Find the value $A _ { c }$ that divides the two motion types. Write your answer in terms of any or all of $\mu$, the acceleration of gravity $g$, the masses $m _ { t }$ and $m _ { b }$, and the spring constant $k$.

## Solution

The maximum possible acceleration of the top block without slipping is $m _ { b } a _ { \max } = \mu m _ { t } g$. If the top block is not slipping then the angular frequency is given by

$$
\omega _ { 2 } = \sqrt { \frac { k } { m _ { t } + m _ { b } } } ,
$$

so

$$
a _ { \max } \geq A \omega _ { 2 } { } ^ { 2 }
$$

or

$$
A _ { c } = \mu g \frac { m _ { t } } { k } \left( 1 + \frac { m _ { t } } { m _ { b } } \right) .
$$

b. Consider now the scenario $A \gg A _ { c }$. In this scenario the amplitude of the oscillation of the top block as measured against the original equilibrium position will change with time. Determine the magnitude of the change in amplitude, $\Delta A$, after one complete oscillation, as a function of any or all of $A , \mu , g$, and the angular frequency of oscillation of the top block $\omega _ { t }$.

## Solution

The energy of an oscillation is approximately equal to

$$
E = \frac { 1 } { 2 } k A ^ { 2 } .
$$


Taking the differential gives the energy loss due to friction,

$$
\Delta E = k A \Delta A .
$$

If $A \gg A _ { c }$, then the top block has almost completed a complete half cycle before the bottom block catches up with it, so the energy lost in half a cycle is approximately

$$
\frac { 1 } { 2 } \Delta E = 2 A f = 2 A \mu m _ { t } g
$$

where $f$ is the friction force. Combining,

$$
4 \mu m _ { t } g = k \Delta A \quad \Rightarrow \quad \Delta A = 4 \frac { \mu m _ { t } g } { k } = 4 \frac { \mu g } { \omega _ { t } ^ { 2 } } .
$$

c. Assume still that $A \gg A _ { c }$. What is the maximum speed of the bottom block during the first complete oscillation cycle of the upper block?

## Solution

The bottom block accelerates according to

$$
a = \mu g \frac { m _ { t } } { m _ { b } } .
$$

Since the bottom block exerts a constant force on the top block, the top block oscillates just as if it were free, but with a shifted equilibrium position for the spring. Hence

$$
\omega _ { t } = \sqrt { k / m _ { t } }
$$

which gives a half period of

$$
t = \pi \sqrt { m _ { t } / k } .
$$

The maximum speed is then

$$
v _ { b } = \pi \mu g \frac { m _ { t } } { m _ { b } } \sqrt { m _ { t } / k }
$$
