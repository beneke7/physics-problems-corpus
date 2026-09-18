---
id: solution-ocr-eupho-2020-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2020_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2020-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T3: Cat eyes

When you look at the photo of the lens and/or the graph provided, four regions with different brightness levels can be distinguished. The brightest region represents the magnified image of the blur spot created by the lamp through the lens. The blur spot is created because the distance from the lens to the white sheet beneath it is slightly larger than the focal distance; as we can see from the graph, the blur spot is of almost constant brightness (a flat plateau at $\log _ { 10 } I = 4.4$ ), so we can say that the entire luminous flux falling from the lamp onto the lens is distributed evenly over the blur spot. Note that the blur spot has no sharp edges, though, as you would expect from in such case. This is because the image of this bright disc is situated between the lens and the camera, and is at a fairly big distance away from the plane which is sharp at the image sensor (as seen from the photo, the camera is focused onto the lens). Because of that, the enlarged image of the blur spot has blurred edges in the photo (at the blurred edges, $\log _ { 10 } I$ varies from 3.4 to 4.4). The second-brightest region (with $\log _ { 10 } I = 3.4$ ) represents the scattered light from the brightest region: in that region, we are still looking through the lens, and see the area next to the bright blur spot on the sheet. Ideally, its should be darker than the sheet seen in those places where it is not obstructed by the lens, because the lens is shading the light from the lamp. However, the glass elements of this big lens are non-ideal (and there are many glass elements inside the lens!), so the light from the lamp and the bright blur spot is scattered towards the camera giving rise to an increased apparent brightness. In the area where we see the blur spot, this light is insignificant (much weaker than the light from the blur spot), but not so in this dark area: here, the scatteredfrom-the-glass-surfaces dominates heavily over the light coming from the paper sheet. As a matter of fact, this fact could be used to improve the accuracy of the calculations: we could subtract the contribution of the scattered light $\left( 10 ^ { 3.4 } \right)$ from the total intensity of the light at the brightest spot $\left( 10 ^ { 4.4 } \right)$ to obtain the contribution coming from the blur spot on the sheet. The darkest regions (with $\log _ { 10 } I < 1.75$ ) represent the interior black painting of the lens seen through the big front glass element of the lens, which absorbs most of the incident light, and the region with $x > 420$ and $\log _ { 10 } I = 1.95$ represents the white sheet illuminated by the lamp. The ratio between the measured light intensity of the brightest region and that of the region with $x > 420$ can be utilized to find the distance of the sheet (the blur spot) from the lens to the paper sheet $d _ { 0 }$, see below.

From the data given in the problem text we know that $L \gg f$; from the photo of the lens, it is also clear that $d _ { 0 }$ is of the same order of magnitude as $f$. Because of that, the illuminance $E$ (luminous flux per unit area) near the lens can be assumed to be the same as at the paper sheet, The luminous flux per solid angle and unit area of a lightscattering (or radiating) surface is called the luminance $\mathscr { L }$; since all these directions under which the scattered light enters the lens aperture are close to the surface normal, we may assume the luminance of the paper sheet to be constant over all these directions. With the small


angle approximation, the light intensity $I$ (illuminance, luminous flux $\Phi$ per unit area) at the camera sensor is proportional to $\mathscr { L }$ (see Explanation 1).

The luminance of the blur spot on the sheet $\mathscr { L } _ { B S }$ is $1 / k$ larger than the luminance $\mathscr { L } _ { s }$ of the paper sheet, where $k$ equals the ratio between the area of the bright dot (the blur spot) on the paper sheet and the area of the lens, because all the light received by the lens is "compressed" into the tiny blur spot.

Small angle approximation is also used to show that luminance of the image of the blur spot $\mathscr { L } _ { I }$ equals to the luminance of the blur spot $\mathscr { L } _ { B S }$ (see Explanation 2). Therefore, the light intensity at the sensor cells corresponding to the brightest area (where we see the image of the blur spot) $I _ { I } = I _ { s } / k$, where $I _ { s }$ stands for the intensity at the cells corresponding to unobscured paper sheet. So, from the graph, we can deduce the value of $k$, and knowing $k$ we can calculate $d _ { 0 }$. Let the distance along the axis between the image of the bright region through the lens and the lens itself be denoted as $d _ { S }$; according to the Newton's lens formula, $\left( d _ { S } - f \right) \left( d _ { 0 } - f \right) =$ $f ^ { 2 }$. Hence,

$$
d _ { S } = f + \frac { f ^ { 2 } } { d _ { 0 } - f } = \frac { d _ { 0 } f } { \left( d _ { 0 } - f \right) }
$$

can be also determined.
Hypothesize that $d _ { 0 } - f \ll f$. Let us calculate the diameter of the image of the blur spot

$$
D _ { I } = \frac { D _ { B S } d _ { S } } { d _ { 0 } } = \frac { D _ { B S } f } { d _ { 0 } - f } ,
$$

where the diameter of the blur spot on the sheet

$$
D _ { B S } = \frac { D \left( d _ { 0 } - f - s \right) } { f + s } \approx \frac { D \left( d _ { 0 } - f - s \right) } { f } ,
$$

and $s$ denotes the distance of the image of the point source from the focal plane. Using Newton's lens formula, $s = f ^ { 2 } / \left( L - f - d _ { 0 } \right) \approx f ^ { 2 } / L$, This leads us to

$$
D _ { B S } \approx D \left( \frac { d _ { 0 } - f } { f } - \frac { f } { L } \right)
$$

and therefore

$$
D _ { I } \approx D \left[ 1 - \frac { f ^ { 2 } } { L \left( d _ { 0 } - f \right) } \right] .
$$

Keeping in mind that $d _ { 0 } - f = \frac { d _ { 0 } f } { d _ { S } } \approx \frac { f ^ { 2 } } { d _ { S } }$, we obtain

$$
D _ { I } \approx D \left( 1 - \frac { d _ { S } } { L } \right) = \frac { D \left( L - d _ { S } \right) } { L } .
$$

This means that as seen from the position of the camera, the angular size of the image of the blur spot $\theta _ { B S } =$ $D _ { I } / \left( L - d _ { S } \right)$ equals to the angular size of the lens aperture $\theta _ { L } = D / L$. This fact is easily confirmed from the photo and is an important observation for two reasons. First, it means that based on the angular diameter of the image of the blur spot on the photo, it is impossible to figure out the distance $d _ { 0 }$ (and hence, $d _ { S }$ ). Second, it allows us to measure instead of the angular distance $\theta$ between the centre of the lens and the centre of the image of the blur spot (as seen from the position of the cameraline), the respective distance between the edges of the respective circles. Equality of these two angular sizes is also easily seen from the geometric construction, see the figure. Ineed, consider blue lines $S A G$ and $S B F$ which arrive from the lamp $S$ to the edges of the blur spot. Image of point $F$, denoted by $J$, is now easily found as the intersection point of the ray $S B F$ with the ray $F O$ (passing through the centre of the lens); image $H$ of the other edge of the blur spot is found in the same way. From this construction, it becomes clear that the angular size of the image of the blur spot and the lens, as seen from the camera, are exactly equal, without any approximation. Due to the smallness of the distance $h$, these angular sizes remain almost constant when the observation point is moved from $S$ to $C$.

Given the images are approximately circular, the area ratio $k$ equals $\left( D _ { B S } / D \right) ^ { 2 }$, or

$$
\pm \sqrt { k } = \frac { 1 } { f } \left( d _ { 0 } - \frac { L f } { L - f } \right) = \frac { d _ { 0 } } { f } - \frac { L } { L - f } .
$$

In the above equation, the ± sign represents the two cases where the paper sheet is behind or in front of the image of the lamp. From the graph, the ratio between the intensity of the brightest region and the dark region with $x > 420$ is $10 ^ { 4.4 - 1.95 } \approx 282$, which equals $1 / k$. Then, $d _ { 0 } / f$ can be found to be $\pm \sqrt { k } + 1 + f / L$, which gives two solutions $d _ { 0 } / f \approx 1.07$ and $d _ { 0 } / f \approx 0.95$. According to the experimental settings given in the problem text, $d _ { 0 }$ is greater than $f$, and thus we obtain $d _ { 0 } / f \approx 1.07$ and $d _ { S } \approx 15.03 f \approx 83 \mathrm {~cm}$. This also verifies the hypothesis that $d _ { 0 } - f \ll f$.

The centre of the image of the blur spot is positioned at the height $h ^ { \prime } = h \frac { d _ { S } } { L }$ above the direction to the centre of the lens (this expression from similarity of the triangles $O Q P$ and $O C S$ ) which means that $\theta = h ^ { \prime } / \left( L - d _ { S } \right)$; meanwhile, the angular diameter of the lens $\theta _ { L } = D / L$. Therefore,

$$
\frac { \theta } { \theta _ { L } } = \frac { h d _ { S } } { D \left( L - d _ { S } \right) } .
$$

The ratio of the angular distances is easily measured from the figure as the ratio of the width $d _ { c r }$ of the crescent-shaped second-brightest region to the diameter of the lense's aperture $D ^ { \prime }$ :

$$
h = \frac { d _ { c r } } { D ^ { \prime } } \frac { D \left( L - d _ { S } \right) } { d _ { S } } .
$$

Based on the graph, $d _ { c r } \approx 90$ pixels (midpoint of the blurry edge is around $x \approx 120 \mathrm { px }$, and the left edge of the aperture (in the graph) is at $x \approx 30 \mathrm { px }$; the right edge of the lens aperture is at $x \approx 240 \mathrm { px }$ corresponding to $D ^ { \prime } = 210 \mathrm { px }$ and yielding $h \approx 80 \mathrm {~mm}$.

Remark 1. In order to obtain the final answer with a reasonably good accuracy, it is not strictly speaking necessary to show that the apparent angular diameters of the lens and of the image of the blur spot are equal. All the other calculations remain the same, just one needs to match a circle with the circular segment of the visible edge of the blur spot, and measure directly $h ^ { \prime }$, the distance between the centre of the lens and the centre of the blur spot, together with the diameter of the lens aperture $D ^ { \prime }$ (see the small figure).

Remark 2. The width of the crescent-shaped secondbrightest area can be also measured from the photo of


the lens with the required accuracy; however, measuring in pixels from the graph is more accurate.

Explanation 1: Consider a small light source of luminance $\mathcal { L }$ and surface area $S$ at a large distance ${ }$ ↓ from the camera. The illuminance (the luminous flux per unit area) at the position of the camera is proportional to $\checkmark ^ { - 2 }$ and so is the total luminous flux received by the whole sensor. Meanwhile, all this light energy is focused onto a small area $S ^ { \prime }$ on the sensor - onto the image of the light source, and this area is also proportional to $\checkmark ^ { - 2 }$. Therefore, the illuminance $I$ at the position of those sensor pixels which are covered by the image is independent of the distance ${ }$ ↓

Explanation 2: Consider a very narrow cone of light of solid angle $\omega$, starting from a very small area $S$ at the blur spot in a direction close to the surface normal, and carrying a total luminous flux $\Phi$. Since the cone is narrow, this light beam is entirely caught by the lens at distance $d _ { 0 }$, and focused onto the image of surface area $S ^ { \prime } = S \left( d _ { S } / d _ { 0 } \right) ^ { 2 }$ at distance $d _ { S }$ from the lens. The light rays of this beam traverse the focus and form another light cone of solid angle $\omega ^ { \prime }$ departing from the image. It is easy to see from similar triangles that $\omega / \omega ^ { \prime } = \left( d _ { S } / d _ { 0 } \right) ^ { 2 }$. Then,
![](../../../figures/solution-ocr/8f7f0bce4180f1dc9c338380.jpg)
![](../../../figures/solution-ocr/7b52433071388955ae923bd5.jpg)

Remark 3: After having derived Explanation 1 and Explanation 2 and calculated $d _ { 0 }$, the geometrical optics aspect can also be tackled by considering the image of the camera through the lens. The region bounded by the darkest ring in the image represents the area on the paper sheet that is observable by the camera through the lens. This area can be approximated by a circular spot with diameter $d$ (represented by $D ^ { \prime }$ in the graph) depending negligibly on the size of the lens of the camera. Given small angles and that the lamp and the camera have equal distances to the lens, the bright spot on the paper sheet also has a diameter of $d$, which means $d = D \sqrt { k }$. The angular distance between the lamp and the camera as seen from the center of the lens is $h / \left( L - d _ { 0 } \right)$, and therefore, the distances between the two spots' centers, and also thus their boundaries (represented by $d _ { c r }$ in the graph), on the paper sheet are $d _ { 0 } h / \left( L - d _ { 0 } \right)$. We then obtain an equivalent equation to that above:

$$
\frac { d _ { 0 } h / \left( L - d _ { 0 } \right) } { D \sqrt { k } } = \frac { d _ { c r } } { D ^ { \prime } } \Leftrightarrow h = \frac { d _ { c r } } { D ^ { \prime } } D \sqrt { k } \frac { L - d _ { 0 } } { d _ { 0 } } \approx 80 \mathrm {~mm} .
$$

It should be noted that, compared to the original analysis, the deviation in this calculation caused by $f / L$ (in finding $d _ { 0 }$ and $d _ { S }$ ) on the final result reduces drastically (from approximately $20 \%$ down to approximately $1 \%$ ). Even if $d _ { 0 } \approx f$ is assumed, the result is only deviated by approximately 7\%.


| Grading scheme: T3 |  |
| :--- | :--- |
| Understanding that the brightest spot is the magnified image of the blur spot through the lens (by explicitly stated or shown in a diagram or implicitly assumed in a correct full solution). Otherwise, a partial score of 1.0 p is given for understanding that the brightest spot is caused by light scattered from the blur spot. A partial score of 2.0 p is given for understanding that the brightest spot is caused by light scattered from the blur spot and that the light passes once more through the lens before reaching the camera. | 2.5 p |
| Understanding that the region on the graph with $x > 420$ represents the unobscured paper sheet (0.2 p). Finding the ratio $1 / k$ of the intensities at the brightest area and at the unobscured paper sheet (or its reciprocal or its logarithm) from the graph (0.8 p). Subtract 0.2 p if the mistake in taking the reading for $\log _ { 10 } \left( I _ { 1 } / I _ { 2 } \right)$ is more than 0.05 but less than 0.1 and subtract 0.4 p if the mistake is bigger than 0.1. | 1.0 p |
| Expressing $k$ correctly in terms of the ratio of the distances (either $d _ { 0 } / f$ or $d _ { S } / f$ or anything equivalent). Partial score of 2 p if initial expressions are correct, but final expression of a ratio of distances is not obtained. These 2 p are distributed in this way: 0.5 p for showing that $I _ { 1 } / I _ { 2 }$ equals the ratio of the luminances of the paper sheet and the image of the blur spot, 0.5 p for showing that the luminance of the image of the blur spot equals the luminance of the blur spot itself; 0.4 p, 0.3 p, and 0.3 p for the thin lens equation, the expression of $k$ in terms of the diameters and the expression of the diameters in terms of the relevant distances, respectively. Subtract 0.5 p if the original direction is used and $f / L$ is neglected as compared to $\sqrt { k }$ (either in the initial set-up or during simplifications). | 2.5 p |
| Relating correctly ratio of distances measurable either on the graph or on the photo to $h$. Partial score of 1.5 p if initial expressions are correct, but the final expression for a ratio of distances is not obtained or is incorrect. These points are distributed as follows: 0.3 p for the thin lens equation for the image of the blur spot (or for the image of the camera if alternative approach is used); 0.4 p for showing that $\theta _ { B S } = \theta _ { L }$; 0.4 p for a single relevant equation that relates $h$ to other distances; 0.4 p for a single relevant equation that relates a ratio of measurable distances to other distances in the system. Partial score of 1.0 p if initial expressions are not correct, but a diagram is drawn which shows the measurable-from-the-figures distances, together with other related distances, in a correct way. | 2.0 p |
| Measuring these distances with a reasonable accuracy (only if the previous subscore is not 0). Partial score of 0.5 p if a relative mistake made in the range of 20\% to 30\%, and 0.8 p if in the range of 10\% to 20\% | 1.0 p |
| Obtaining final answer with a reasonable accuracy. Partial score of 0.5 p if final formula is derived but not calculated numerically. Subtract 0.5 p if calculation mistake is made and subtract 0.2 p for rounding the result more than by 10\% | 1.0 p |
