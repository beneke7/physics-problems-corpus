---
id: solution-ocr-nbpho-2018-s-p4
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2018-fresnel-prism]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 4. FRESNEL PRISM

i) In order to find the grating pitch, we set up a simple diffraction experiment: direct laser light through the grating to the screen; there will be a long series of bright spots which correspond to a series of main maxima; all angles are small, so we can apply small-angle approximation. As compared with a pair of beams exiting the grating from two neighbouring slits perpendicularly, a pair of beams exiting at a small angle $\varphi$ obtains an additional optical path difference equal to $d \sin \varphi \approx d \varphi$, see figure. Suppose that angle $\varphi _ { 0 }$ corresponds to a main diffraction maximum of a certain order $n$ so that the optical path difference between the two beams is equal to an integer number $n$ of wavelengths. Then, for the $n + j$-th main maximum, observed at angle $\alpha _ { j }$, the optical path difference between the neighbouring beams is $( n + j ) \lambda$. Hence, $d \varphi _ { j } - d \varphi _ { 0 } =$ $j \lambda$ so that $\varphi _ { j } - \varphi _ { 0 } = j \lambda / d$. Angle difference $\varphi _ { j } - \varphi _ { 0 }$ results in the distance of bright spots at screen being equal to $a _ { j } = \left( \varphi _ { j } - \varphi _ { 0 } \right) L$, where $L$ is the distance from the grating to the screen. So, we can measure the distance $a _ { j }$ between such a pair of bright spots on the screen which are separated by $j - 1$ bright spots, and calculate the grating constant as

$$
d = \frac { j \lambda L } { a _ { j } } .
$$

In order to obtain better accuracy, it is necessary to use as large as possible value of $j$ (the largest such value that the both dots remain on the screen). With $L = , j =$, and $a _ { 10 }$, we obtain $d =$.
![](../../../figures/solution-ocr/39f8545f7ed5c983104c6c01.jpg)
ii) There are two ways of determining the prism angle. First, one can use laser light and screen to determine, to which distance $x$ is the brightest spot on the screen (the zeroth main maximum) shifted when the Fresnel prism is inserted into the path of the beam at distance $L$ from the screen. It appears that the angle $\beta$ by which the prism deflects the beam remains small, so that we can still use the small angle approximation: $\beta = x / L$. Simple geometrical optics calculation yields

$$
\alpha = \frac { \beta } { n - 1 } = \frac { x } { L ( n - 1 ) } .
$$

For $L =$ and $x =$ we obtain $\alpha =$
An alternative approach is using the cyan stripes on the sheet. We look through the prism so that we can see stripes both through the prism, and bypassing the stream simultaneously. We find such two neighbouring stripes and such distance $h$ between the prism and the sheet that one stripe seen through the prism seems to be exactly at the same position as the other stripe seen beyond the edge of the prism. We measure the distance $y$ between these two stripes on the sheet. Then, the deflection angle of the prism is found as $\beta = y / h$, so that

$$
\alpha = \frac { \beta } { n - 1 } = \frac { y } { h ( n - 1 ) } .
$$

For $y =$ and $h =$ we obtain $\alpha =$
iii) Finally, we use that part of the sheet where there are neighbouring cyan and magenta stripes. We use a closely positioned pair of such stripes, and look at it through the prism. Depending on the orientation of the prism the pair of stripes is either brought close to each other, or, vice versa, moved apart. We use such orientation for which the stripes are brought closer to each other, and find such a distance $H$ between the prism and the sheet for which the two stripes overlap exactly (resulting in a seemingly yellowish stripe). We also measure the distance $z$ between the stripes. Using our expression for the deflection angle $\beta = \alpha n - 1$, we obtain an expression for the change of the deflection angle $\delta \beta = \alpha \delta n$, where $\delta n$ denotes the difference of the refraction index for the cyan and magenta. Therefore, $\delta n = \delta \beta / \alpha$. We can find the change of the deflection angle from our measurement data as $\delta \beta = z / H$. So, $\delta n = z / ( H \alpha )$, and

$$
\frac { \mathrm { d } n } { \mathrm {~d} \lambda } = \frac { z } { H \alpha \left( \lambda _ { m } - \lambda _ { c } \right. } .
$$

Using $z =$ and $H =$ we obtain $\frac { \mathrm { d } n } { \mathrm {~d} \lambda } =$.
