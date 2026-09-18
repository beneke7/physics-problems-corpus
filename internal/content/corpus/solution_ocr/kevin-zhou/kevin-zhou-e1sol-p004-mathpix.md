---
id: solution-ocr-kevin-zhou-e1sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. There are two point charges, $q _ { 1 } > 0$ and $q _ { 2 } < 0$, in empty space. An electric field line leaves $q _ { 1 }$ at an angle $\alpha$ from the line connecting the two charges. Determine whether this field line hits $q _ { 2 }$, and if so, at what angle $\beta$ from the line connecting the two charges. (Hint: this can be done without solving any differential equations.)

Solution. Suppose the field line does hit $q _ { 2 }$. Rotate the field line about the line connecting the two charges, to form a Gaussian surface. Because no electric field lines go across this surface, the total charge inside must be zero. Now, this surface envelopes "slices" of each point charge. (If you're not happy with "slicing a point charge", just replace the point charges with tiny uniformly charged spheres; everything outside stays the same.) The solid angle of the first point charge enveloped is

$$
\int d \Omega = \int _ { 0 } ^ { 2 \pi } d \phi \int _ { 0 } ^ { \alpha } \sin \theta d \theta = 2 \pi ( 1 - \cos \alpha )
$$

so the amount of charge enclosed is

$$
\frac { \Omega } { 4 \pi } q _ { 1 } = \frac { 1 - \cos \alpha } { 2 } q _ { 1 } = q _ { 1 } \sin ^ { 2 } \frac { \alpha } { 2 } .
$$

Reasoning similarly for the other surface, we have

$$
q _ { 1 } \sin ^ { 2 } \frac { \alpha } { 2 } = \left| q _ { 2 } \right| \sin ^ { 2 } \frac { \beta } { 2 }
$$

and the field line hits $q _ { 2 }$ if there is a solution for $\beta$, i.e. when $\left| q _ { 1 } / q _ { 2 } \right| \sin ^ { 2 } ( \alpha / 2 ) \leq 1$. (If you like this question, you can also think about what we can say when the point charges have the same sign.)


Idea 2
Gauss's law is written in differential form as

$$
\nabla \cdot \mathbf { E } = \frac { \rho } { \epsilon _ { 0 } } .
$$

The divergence of a vector field $\mathbf { F } = F _ { x } \hat { \mathbf { x } } + F _ { y } \hat { \mathbf { y } } + F _ { z } \hat { \mathbf { z } }$ is

$$
\nabla \cdot \mathbf { F } = \partial _ { x } F _ { x } + \partial _ { y } F _ { y } + \partial _ { z } F _ { z }
$$

in Cartesian coordinates, where $\partial _ { x }$ stands for $\partial / \partial x$, and so on.

Example 2
Show that the two forms of Gauss's law are equivalent.

Solution
To do this, we need to establish the geometric meaning of the divergence. For simplicity we consider two dimensions; the proof for three dimensions is similar. Consider a small rectangle with one corner at the origin, with axes aligned with the Cartesian coordinate axes and side lengths $\Delta x$ and $\Delta y$. To apply Gauss's law in integral form, we need to compute the flux through each side. The flux going out the top side is

$$
\int _ { 0 } ^ { \Delta x } E _ { y } ( x , \Delta y ) d x
$$

while the flux going out the bottom side is

$$
- \int _ { 0 } ^ { \Delta x } E _ { y } ( x , 0 ) d x
$$

The sum of these two terms is

$$
\left. \int _ { 0 } ^ { \Delta x } \left( E _ { y } ( x , \Delta y ) - E _ { y } ( x , 0 ) \right) d x \approx \Delta y \int _ { 0 } ^ { \Delta x } \left( \partial _ { y } E _ { y } \right) \right| _ { ( x , 0 ) } d x
$$

where we applied a tangent line approximation, and the subscript indicates where the function $\partial _ { y } E _ { y }$ is evaluated. Higher-order terms in the Taylor series would be proportional to higher powers of $\Delta y$, which is small, so we can ignore them.

The integrand is still a function of $x$, but we can Taylor expand it about the origin as

$$
\left. \left( \partial _ { y } E _ { y } \right) \right| _ { ( x , 0 ) } = \left. \left( \partial _ { y } E _ { y } \right) \right| _ { ( 0,0 ) } + \Delta x ( \ldots ) + \ldots .
$$

These extra terms are again higher-order in $\Delta x$ and $\Delta y$, so we ignore them. The net flux through the top and bottom faces is hence, to lowest order,

$$
\left. \Delta y \int _ { 0 } ^ { \Delta x } \left( \partial _ { y } E _ { y } \right) \right| _ { ( 0,0 ) } d x = \left. \Delta x \Delta y \left( \partial _ { y } E _ { y } \right) \right| _ { ( 0,0 ) }
$$


By similar reasoning, pairing up the left and right faces gives

$$
\text { flux } = \left. \Delta x \Delta y \left( \partial _ { x } E _ { x } + \partial _ { y } E _ { y } \right) \right| _ { ( 0,0 ) } = \left. \Delta x \Delta y ( \nabla \cdot \mathbf { E } ) \right| _ { ( 0,0 ) } .
$$

Thus the divergence is the outgoing flux per unit area, or volume in three dimensions.
This shows us why the two forms of Gauss's law are equivalent. For example, starting from the differential form, the left-hand side is the flux per volume, while the right-hand side is the charge per volume, divided by $\epsilon _ { 0 }$. Integrating both sides over some volume relates the total flux to the total charge divided by $\epsilon _ { 0 }$, which is Gauss's law in integral form.
