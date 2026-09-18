---
id: solution-ocr-usapho-2020-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2020-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

## Mirror Mirror on the Wall

Consider a square room with side length $L$. The bottom wall of the room is a perfect mirror.* A perfect monochromatic point source with wavelength $\lambda$ is placed a distance $d$ above the center of the mirror, where $\lambda \ll d \ll L$.
![](../../../figures/solution-ocr/abe304c1e6f93531a329419b.jpg)
*Remember that the phase of light reflected by a mirror changes by 180°.

a. On the right wall, an interference pattern emerges. What is the distance $y$ between the bottom corner and the closest bright fringe above it? Hint: you may assume $\lambda \ll y \ll L$ as well.

## Solution

This setup is essentially a double-slit experiment with the second slit being the image of the point source on the other side of the mirror, with the additional phase shift from the mirror. The distance between the source and a spot $y$ on the wall is given by $\sqrt { ( d - y ) ^ { 2 } + ( L / 2 ) ^ { 2 } }$ and the distance between the image and a spot $y$ is given by $\sqrt { ( d + y ) ^ { 2 } + ( L / 2 ) ^ { 2 } }$. Subtracting the two distances and adding in the phase shift gives us approximately

$$
L / 2 \left( \frac { 2 ( d + y ) ^ { 2 } } { L ^ { 2 } } - \frac { 2 ( d - y ) ^ { 2 } } { L ^ { 2 } } \right) + \lambda / 2 .
$$

This distance must be a multiple of $\lambda$ for interference to occur. Then,

$$
\frac { 4 d y } { L } + \lambda / 2 = m \lambda .
$$

Substituting $m = 1$ gives us $y = \frac { \lambda L } { 8 d }$.

b. You plan on running an experiment to determine $\lambda$ in a room with $L = 40 \mathrm {~m}$, and you know that $\lambda$ is between 550 and 750 nm. You will measure $d$ and $y _ { 10 }$ (the distance of the tenth fringe from the corner) with the same ruler (with markings of 1 mm ). At what $d$ should you place the point source to minimize your error in your $\lambda$ measurement? Roughly what is that minimum error?


## Solution

Our error is given by

$$
\frac { \Delta \lambda } { \lambda } = \sqrt { \left( \frac { \Delta d } { d } \right) ^ { 2 } + \left( \frac { \Delta y _ { 10 } } { y _ { 10 } } \right) ^ { 2 } } .
$$

Note that $\Delta d = \Delta y _ { 10 } \sim 0.5 \mathrm {~mm}$. From earlier, note that after substituting $m = 10$, $y _ { 10 } = \frac { 19 \lambda L } { 8 d }$.
If we assume that $\lambda \sim 650 \mathrm {~nm}$, note that

$$
y _ { 10 } d = 6.2 \times 10 ^ { - 5 } \mathrm {~m} ^ { 2 } .
$$

Choosing $d = y _ { 10 }$ minimizes our error, so we get that $d = y _ { 10 } = 8 \mathrm {~mm}$. Then, $\Delta \lambda \approx 60 \mathrm {~nm}$.
Note: Accept any reasonable uncertainty in tick spacing ~ 0.5 mm or ~ 1 mm.

c. Now suppose we place a transparent hemispherical shell of thickness $s$ and index of refraction $n$ over the source such that all light from the source that directly strikes the right wall passes through the shell, and all light from the source that strikes the mirror first does not pass through the shell.
![](../../../figures/solution-ocr/14ec699df95020f8a1b0684b.jpg)
At what $y$ is the fringe closest to the bottom-most corner now? (You may find it convenient to use $\lfloor x \rfloor$, the largest integer below $x$.) What is the spacing between the fringes now? Ignore any reflections or diffraction from the hemispherical shell.

## Solution

Now the optical distance between the source and a spot $y$ on the wall is increased by $( n - 1 ) s$. Then, we need

$$
\frac { 4 d y } { L } - ( n - 1 ) s + \lambda / 2 = m \lambda .
$$

To minimize $y$, we take $m$ to be $- \left\lfloor \frac { ( n - 1 ) s } { \lambda } - \frac { 1 } { 2 } \right\rfloor$. Then,

$$
y = \frac { L } { 4 d } \left( ( n - 1 ) s - \lambda \left\lfloor \frac { ( n - 1 ) s } { \lambda } - \frac { 1 } { 2 } \right\rfloor - \frac { \lambda } { 2 } \right) .
$$

Because $( n - 1 ) s$ is just an offset, the spacing between the fringes does not change, i.e., the spacing is still $\lambda L / ( 4 d )$.


d. Now, suppose the hemispherical shell is removed, and we instead observe the interference pattern on the top wall. To the nearest integer, what is the total number of fringes that appear on the top wall? You may assume that $d \ll L$.

## Solution

Now, the distance between the source and a spot $x$ on the wall is given by $\sqrt { ( L - d ) ^ { 2 } + x ^ { 2 } }$ and the distance between the image and a spot on the wall is $\sqrt { ( L + d ) ^ { 2 } + x ^ { 2 } } + \lambda / 2$. We do not assume $x \ll L$ this time. Subtracting the two distances gives us roughly

$$
\sqrt { L ^ { 2 } + x ^ { 2 } } \sqrt { 1 + \frac { 2 d L } { L ^ { 2 } + x ^ { 2 } } } - \sqrt { L ^ { 2 } + x ^ { 2 } } \sqrt { 1 - \frac { 2 d L } { L ^ { 2 } + x ^ { 2 } } } + \lambda / 2 = m \lambda .
$$

Taylor expanding gives us

$$
\frac { 2 d L } { \sqrt { L ^ { 2 } + x ^ { 2 } } } = ( m - 1 / 2 ) \lambda .
$$

Then,

$$
x = \pm L \sqrt { \frac { 4 d ^ { 2 } } { ( m - 1 / 2 ) ^ { 2 } \lambda ^ { 2 } } - 1 } .
$$

For $x$ to be physical, we require that $m - 1 / 2 \leq 2 d / \lambda$.
The maximum allowed $x$ is $L / 2$. Then,

$$
\sqrt { \frac { 4 d ^ { 2 } } { ( m - 1 / 2 ) ^ { 2 } \lambda ^ { 2 } } - 1 } \leq \frac { 1 } { 2 } ,
$$

so

$$
\frac { 4 d ^ { 2 } } { ( m - 1 / 2 ) ^ { 2 } \lambda ^ { 2 } } \leq \frac { 5 } { 4 }
$$

Thus, we have that

$$
m - 1 / 2 \geq \frac { 4 d } { \sqrt { 5 } \lambda } .
$$

Then, the number of fringes is

$$
2 \cdot \frac { 2 d } { \lambda } \left( 1 - \frac { 2 } { \sqrt { 5 } } \right) ,
$$

where the extra factor of 2 comes from there being two sides to the interference pattern.
