---
id: solution-ocr-apho-2011-e2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2011/E2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2011-e2]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Experimental Question 2: An Optical "Black Box"
SOLUTION
a. Consider an incoming light beam at angle $\alpha$ to the first mirror (see figure). The angle to the second mirror is given by $\beta = \pi - \varphi - \alpha$. Thus, the total deflection angle is $2 \alpha + 2 \beta = 2 ( \pi - \varphi )$. In particular, it is independent of $\alpha$. The angle $\gamma$ is then given by:

$$
\gamma = \pi - 2 ( \pi - \varphi ) = 2 \varphi - \pi
$$

![](../../../figures/solution-ocr/0b661a96afabd38e0cfc1e63.jpg)
b. The correct option is A. Options C and D are ruled out, because both the transmission and reflection patterns possess left-right symmetry. Option B is ruled out, because it implies strong forward transmission at perpendicular illumination; instead, strong transmission is observed only to the sides, as described in question (d).
c. To determine $\varphi$, we must observe the reflection pattern, using the setup suggested in the question. It is important to place the flashlight into the hole in the screen; otherwise, the observed pattern will be smeared due to the sample's non-zero size.

A strong reflection pattern is observed when the light enters the sample from its flat side, is reflected twice from the two slanted faces, and exits again from the flat side. This optical path results in total internal reflection, producing a much brighter reflection pattern than the pattern for light coming from the "toothed" side.
![](../../../figures/solution-ocr/2fe8bc8952318cbb96b17841.jpg)


The observed pattern is a colorful band of interference fringes, gradually fading to the sides, without well-defined edges. As we rotate the sample, it can be seen that the pattern widens and narrows, while its center remains stationary, directly on top of the flashlight's center. While the color sequence is complicated, it is visibly symmetric around the center, which appears white; these observations are the key to identifying the center precisely.
![](../../../figures/solution-ocr/0c6a9150e68fe0b2bfe13104.jpg)

The center of the pattern corresponds to the optical path due to geometric optics. From part (a), we see that such a zero reflection angle corresponds to an angle $\varphi = \pi / 2$ between the two reflecting surfaces. This conclusion is supported by two other qualitative observations. First, if the reflection angle were nonzero, light from different areas of the sample would reach different points on the screen, due to the sample's non-zero size. This would have lead to a smeared reflection pattern, like the one obtained when the flashlight does not coincide with the screen. Second, we see that the location of the pattern's center doesn't depend on the sample's orientation. Without refraction at the flat boundary, this would have been the case for any reflection angle. However, taking the refraction into account, the angle between the incoming and outgoing rays would have to be a function of the incidence angle, except for the case $\varphi = \pi / 2$, for which the angle remains zero after refraction (see figure above).

The center of the interference pattern can be identified with an error of $\Delta x = 0.5 \mathrm {~mm} - 1 \mathrm {~mm}$ for the optimal observation distance $y \approx 50 \mathrm {~cm}$ between the flashlight and the sample. This results in an error of at most 0.002 radians in the angle between the incoming and outgoing rays. Examining the result of part (a), we see that this error should be halved to give the error in $\varphi$. Though it is not required, a bright student will also divide the error by the refraction index $n$, which can be estimated as $\sim 1.5$. This is because the refraction amplifies angular deviations as the light leaves the sample. We conclude that the error in $\varphi$ is $\Delta \varphi = 7 \cdot 10 ^ { - 4 } \mathrm { rad } = 0.04 ^ { \mathrm { o } }$. This will be negligible with respect to all other errors in the experiment.

A common mistake will be to take the edge of the central white stripe, or the edge of the entire pattern, as representing $\varphi$ instead of the pattern's center. For the edge of the central white stripe (about $x = 5 \mathrm {~mm}$ at $y = 50 \mathrm {~cm}$ ), this would result in a $0.15 ^ { \mathrm { o } } - 0.3 ^ { \mathrm { o } }$ deviation (depending on whether $n$ is taken into account). For the edge of the pattern (about $x = 3 \mathrm {~cm} - 5 \mathrm {~cm}$ at $y = 50 \mathrm {~cm}$ ), this would result in a $1 ^ { \mathrm { o } } - 3 ^ { \mathrm { o } }$ deviation.

Similarly, a student may decide that the edge of the central white stripe or the edge of the pattern correspond to the error $\Delta \varphi$. This will lead to an over-estimation of the error as $0.15 ^ { \mathrm { o } } - 0.3 ^ { \mathrm { o } }$ or $1 ^ { \mathrm { o } } - 3 ^ { \mathrm { o } }$, respectively.


d. The correct option is C. An interference pattern will always have larger deflection angles for larger wavelengths. Therefore, the pattern in Figure 7 cannot result from interference, and must result from the dependence of $n$ on the wavelength. On the other hand, the pattern in Figure 6 has the correct order of colors for an interference pattern. It must in fact be an interference pattern, because the sample's structure as depicted in part (b) is rather simple and periodic, and cannot produce a large number of nearby refraction angles.
e. The phenomenon described in this part is observed when the sample is illuminated from its "toothed" side. Transmission from the other side is very weak due to total internal reflection.
![](../../../figures/solution-ocr/643bcb0be99d5eac765560c1.jpg)
The deflection angle $\delta _ { 0 }$ can be seen qualitatively by projecting the transmission pattern onto the screen. However, due to the sample's nonzero size, this pattern is too smeared to enable precise measurement. A much sharper pattern is observed when looking directly through the sample, as suggested in the question. The challenge is then to measure angles that are seen directly with the eye, rather than on a screen.

For this purpose, the student is provided with the mobile wooden stake on a bench. The bench should be placed perpendicularly to the line of sight between the flashlight and sample. The stake should be positioned at two points: point A directly along the line of sight between the flashlight and sample, and point B where the stake coincides with the desired band of deflected light along the student's line of sight. The two measurements are the distance $x = A B$ between these two points and the distance $y$ between the sample and the center of the bench. The desired deflection angle is then given by:

$$
\delta _ { 0 } = \tan ^ { - 1 } \frac { x } { y }
$$

To properly establish point A, some alignment issues must be solved. The long bench can be quite accurately placed in parallel to one of the desk's sides. The flashlight can then be placed near the bench, in perpendicular to it. The sample can also be aligned in parallel to the desk's side, by visual reference to the orientation of its long handle. The bench should lie in front of the flashlight, rather than behind it. This has two advantages. First, it allows for a greater distance between the flashlight and sample, minimizing the harm from the sample's nonzero size. Second, it allows us to align the stake directly in front of the flashlight quite accurately. The alignment of the stake and flashlight can be checked and corrected by observing the stake's shadow on the desk. Finally, we must place the sample precisely in front of the flashlight, i.e. without a sideways offset. One way to do this is to place both the flashlight and sample at the edge of the desk. A less accurate way is to measure their distances from the edge using the tape measure. In any case, there are several ways to check the alignment without reference to the desk:

1. Ensuring that the sample lies at the center of the stake's shadow from the flashlight.
2. Looking at the flashlight through the sample's frame, and making sure that the flashlight's center and the stake are aligned together with the frame's center.

3. Placing a sheet of paper behind the sample, and making sure that the stake's shadow on the paper is at the center of the shadow from the sample's frame.

To establish point B , it is best to look through the sample not from a zero distance, but from a distance large enough to focus the eye on the sample's frame. One should then try to align three points along the line of sight: the center of the sample's frame (marked with a blue line), the desired band of deflected light, and the stake. It is convenient first to align the frame's center with the deflected light, and then check in which direction the stake should be moved to align with them. Within 3-5 such iterations, point B can be established with an accuracy of about $\pm 2 \mathrm {~mm}$.
![](../../../figures/solution-ocr/ff62f714a49eb1505dd6bf24.jpg)
Once the points A and B are physically established, the distance between them has to be measured. One way is to record each position of the stake with a pen mark on the bench, and then measure the distance between the two markings. It's difficult and unnecessary to mark the position of the stake itself - one can mark the position of the edge of the stake's holder. Another way, which doesn't require any markings, is to align the edge of the stake's holder at point A with the edge of the bench. Then when the stake is at point B , the distance $x$ can be measured directly. In any case, while moving the stake between points A and B, the student must take care not to move the bench.

The relative accuracy of the measurement increases with the distance between the flashlight and bench and the sample. Optimally, most of the desk's 1-meter length should be used for the distance $y$. Then $x$ will take up most of the desk's width. The price for these large distances is that the bench is not within arm's reach from the sample, and the student will have to get up for each adjustment of the stake's position.


The cylindrical base of the sample holder makes it difficult to measure the distance $y$ accurately. The solution is to place the measuring tape perpendicularly to the bench or screen, and in tangent to the cylindrical base. Repeated measurements reveal that this reduces the error to 1mm.

We now present the results of a sample measurement:

$$
x = 471 \mathrm {~mm} \pm 2 \mathrm {~mm} , \quad y = 775 \mathrm {~mm} \pm 1 \mathrm {~mm}
$$

From these we derive the deflection angle $\delta _ { 0 } = \tan ^ { - 1 } ( x / y ) = 31.3 ^ { \circ }$. The error in $\delta _ { 0 }$ as derived from the measurement errors reads:

$$
\begin{equation*}
\Delta \delta _ { 0 } = \sqrt { \left( \frac { \Delta x / y } { 1 + x ^ { 2 } / y ^ { 2 } } \right) ^ { 2 } + \left( \frac { x \Delta y / y ^ { 2 } } { 1 + x ^ { 2 } / y ^ { 2 } } \right) ^ { 2 } } = 0.002 \mathrm { rad } = 0.1 ^ { \circ } \tag{1}
\end{equation*}
$$

One can also use the simpler formula $\Delta \delta _ { 0 } \approx \Delta ( x / y )$ to arrive at a similar result. The value $\Delta x = 2 \mathrm {~mm}$ leading to this estimate was obtained from repeated attempts to locate point B without changing the overall alignment. A student who repeats the alignment process from the beginning and compares his results will likely get a larger error estimate, up to $\Delta \delta _ { 0 } = 0.3 ^ { \mathrm { o } }$. The source of these deviations is the difficulty in arranging perpendicular incidence of the light onto the sample. This error is difficult to quantify in any way other than repeating the alignment process. An additional source of error is the subjective definition of the "blue end of the visible spectrum". Sample measurements were performed by different individuals, and the scatter of their results is taken into account in the Marking Scheme.

Instead of taking the distance between the source and the deflected light band, a student may take the distance between the two symmetric deflected bands on either side of the source. This carries two disadvantages: the size of the desk constrains the perpendicular distance $y$ in this case to about 40cm, and the difficulties with locating point B are now encountered twice.

Another inferior alternative is to use the screen's edges or center instead of the wooden stake. Then the distance $x$ is fixed by the screen's width, and $y$ becomes the controlled variable. This method leads to higher errors (about $0.5 ^ { \circ }$ ), for two reasons. First, the stake is helpful in the alignment of the different elements, as described above. Second, it is difficult to fine-tune the distance $y$ without spoiling the alignment.
f. In this part, after the initial alignment and before measuring the deflection angle, the student should gently rotate the sample while looking through it, until he identifies the orientation at which the deflection angle is minimal. Unlike the deflection of perpendicular light in part (e), this minimal deflection angle can be observed from both sides of the sample. When the light is incident on the "toothed" side, as in part (e), the minimum is obtained not far from perpendicular incidence. As a result, $\delta _ { \text {min } }$ is only slightly smaller than $\delta _ { 0 }$.

The measurement process is very similar to that in part (e), except that there's no need to align the sample for perpendicular incidence. The student may keep the rest of the alignment from part (e), and use the same distance $y$ between the sample and the wooden bench. The results of a sample measurement read:

$$
x = 461 \mathrm {~mm} \pm 2 \mathrm {~mm} , \quad y = 775 \mathrm {~mm} \pm 1 \mathrm {~mm}
$$

From which we derive:


$$
\begin{equation*}
\delta _ { \min } = \tan ^ { - 1 } ( x / y ) = 30.75 ^ { \circ } \pm 0.1 ^ { \circ } \tag{2}
\end{equation*}
$$

In this case, the naïve error estimation of eq. (1) corresponds to the actual scatter of results from repeated alignments and measurements. This is because the error from the perpendicular alignment is gone. We still have an error in finding the sample orientation which leads to the minimal deflection. However, this error has very little impact on the measurement of $\delta _ { \min }$ itself, since the deflection angle is stationary around the minimum.
g. Solution in terms of $\delta _ { 0 }$ :

Consider a vertical light ray entering a horizontal prism with opening angle $x$ (see figure). We have:
![](../../../figures/solution-ocr/65947bb6ced4af042ed4d676.jpg)

$$
\begin{aligned}
& \sin \Varangle B A C = \frac { \sin x } { n } \\
& \Varangle A B C = \pi - x \\
& \Varangle B C A = \pi - \Varangle B A C - \Varangle A B C = x - \Varangle B A C \\
& \sin \delta _ { 0 } = n \sin \Varangle B C A = n \sin ( x - \Varangle B A C ) = \\
& = n ( \sin x \cos \Varangle B A C - \cos x \sin \Varangle B A C ) = \\
& = n \left( \sin x \sqrt { 1 - \left( \frac { \sin x } { n } \right) ^ { 2 } } - \cos x \frac { \sin x } { n } \right) = \\
& = \sin x \left( \sqrt { n ^ { 2 } - ( \sin x ) ^ { 2 } } - \cos x \right)
\end{aligned}
$$

Solving for $n$, we get:

$$
n = \sqrt { ( \sin x ) ^ { 2 } + \left( \cos x + \frac { \sin \delta _ { 0 } } { \sin x } \right) ^ { 2 } }
$$

In our case, the appropriate prism angle is $x = ( \pi - \varphi ) / 2$, which gives:

$$
n = \sqrt { ( \cos ( \varphi / 2 ) ) ^ { 2 } + \left( \sin ( \varphi / 2 ) + \frac { \sin \delta _ { 0 } } { \cos ( \varphi / 2 ) } \right) ^ { 2 } }
$$

A student that plugs in the value $\varphi = \pi / 2$ will get:

$$
n = \sqrt { \frac { 1 + \left( 1 + 2 \sin \delta _ { 0 } \right) ^ { 2 } } { 2 } }
$$

Solution in terms of $\delta _ { \min }$ :
Using the uniqueness of the minimal deflection angle $\delta _ { m i n }$ and the reversibility of light rays, we conclude that minimal deflection occurs symmetrically with respect to the prism angle:


![](../../../figures/solution-ocr/3a2d8049a02af37211414aa7.jpg)
Solving for $n$, we get:

$$
n = \frac { \sin \frac { x + \delta _ { \min } } { 2 } } { \sin \frac { x } { 2 } }
$$

In our case, the appropriate prism angle is $x = ( \pi - \varphi ) / 2$, which gives:

$$
n = \frac { \sin \frac { \pi - \varphi + 2 \delta _ { \min } } { 4 } } { \sin \frac { \pi - \varphi } { 4 } }
$$

A student that plugs in the value $\varphi = \pi / 2$ will get:

$$
\begin{equation*}
n = \frac { \sin \frac { \pi + 4 \delta _ { \min } } { 8 } } { \sin \frac { \pi } { 8 } } \tag{3}
\end{equation*}
$$

h. The refraction index $n _ { v }$ can be found either from $\delta _ { 0 }$ or from $\delta _ { m i n }$, using the formulae from part (g). As discussed in parts (e) and (f), the measurement of $\delta _ { \text {min } }$ is the more accurate one. Therefore, its accuracy is the basis for the full credit in the Marking Scheme for this part. Using the results (2) and (3), we find for our sample experiment:

$$
n _ { v } = 1.604
$$

The error reads:

$$
\begin{equation*}
\Delta n _ { v } = \frac { \cos \frac { \pi + 4 \delta _ { \min } } { 8 } } { 2 \sin \frac { \pi } { 8 } } \Delta \delta _ { \min } = 0.002 \tag{4}
\end{equation*}
$$

i. The measurement process here is the standard one for a diffraction grating. The pattern is projected onto the screen. The measured quantities are the distance $y$ between the sample and the screen, the distances $x$ on the screen between the fringes and the pattern's center, and the fringe number $m$. The angles $\theta$ for the different fringes are then found as $\theta = \tan ^ { - 1 } ( x / y )$. It is important that $x$ is measured from the center, since the relation $d \sin \theta = m \lambda$ is linear in $\sin \theta$ and not in $x \sim \tan \theta$. An offset in $m$ is less problematic, since it will not affect the slope of the linear graph in part (j).


The alignment process is more straightforward than with the white light. The laser beam, observed as scattered light from the screen or from the sample, can be used as a reference line instead of the stake's shadow. The sample's nonzero size no longer leads to measurement uncertainties, since the laser beam illuminates only a small portion of it. Instead, we are constrained by the width of the beam, which widens noticeably with distance. Since the laser pointer is not quite horizontal, the beam may come out at a slight vertical slope, causing it to miss the sample. To fix this, the student may rotate the laser around its axis.

A diffraction pattern can be observed in three different configurations:

1. Reflection with the light entering the sample from the flat side, as in part (c).
2. Transmission with the light entering the sample from the "toothed" side, as in parts (d)-(e).
3. Transmission with the light entering the sample from the flat side.

All three configurations produce fringes at the same angles $\theta ( m )$, but otherwise they look quite different. Each configuration has its advantages and disadvantages for our measurement purposes. The best choice among the three may depend on the amount of ambient light in the room.

Configuration 3 gives a wide pattern of dim but well-defined fringes. They result from the interference of light passing through the narrow flattened "peaks" and "valleys" of the sample's toothed side (the light incident on the slanted faces of the "teeth" undergoes total internal reflection). Note: the observed patterns are sharper than in the photos below, which were taken by a theoretician.
![](../../../figures/solution-ocr/6e5929cf588547bde9317ca9.jpg)

Configuration 2 gives a similar pattern from the "peaks" and "valleys", superimposed on two much brighter narrow interference patterns from the slanted faces. These bright patterns are centered around the geometric deflection angle $\delta _ { 0 }$, one to the right and one to the left. They are bright because more light passes through the slanted faces, and they are narrow because they are multiplied by the narrow diffraction pattern off of each slanted face, whose width is the same order of magnitude as the spacing $d$. The condition $d \sin \theta = m \lambda$ for a fringe at angle $\theta$ is the same for the "peaks" and "valleys" and for the slanted faces.
![](../../../figures/solution-ocr/a31af2bd8dd2fcea7bf0b87b.jpg)

Configuration 1 (reflection) gives a noisier interference pattern, with broader fringes. This is because the laser beam travels the distance to the screen twice (back and forth), and broadens in the process. The central fringes are very bright - most of the light is reflected off of both slanted faces directly backwards, as discussed in the solution to part (c). These fringes are even brighter than the bright patterns in Configuration 2, because in this case the beam doesn't split in two. This bright region of the reflected pattern is narrow, again due to the narrow diffraction pattern off of the broad slanted faces. Further to the sides, the dim interference pattern from the "peaks" and "valleys" becomes dominant. It is dimmer than in the transmission patterns, and fades away quickly, because it arises from weak reflection, as opposed to the total internal reflection from the slanted faces.


![](../../../figures/solution-ocr/dd6ba0e620873b7201122337.jpg)

The dim interference pattern from the narrow "peaks" and "valleys" on the sample displays an alternating sequence of brighter and dimmer fringes, as described in the question text. If all the fringes are taken into account, their spacing corresponds to the sample's spacing $d$. The twice larger spacing between the brighter fringes corresponds to the spacing $d / 2$ between each "peaks" and the adjacent "valley". In other words, the dimmer fringes are due to destructive interference between a peak and its adjacent valley. Towards larger $\theta$, the effect becomes less simple than just a factor-of-2, because then the vertical distance between the "peaks" and "valleys" must also be taken into account. As the sample is rotated, the brighter and dimmer fringes interchange, and at some orientations become equal in magnitude. This phenomenon is more pronounced in the transmission pattern, i.e. Configurations 2 and 3. In the reflection pattern, i.e. Configuration 1, it is pronounced towards the edges, where the light from the "peaks" and "valleys" becomes dominant. The central fringes in Configuration 1 remain fixed up to small changes in brightness, and their spacing corresponds to $d$. The bright side fringes in Configuration 2 vary noticeably in brightness, due to the diffraction pattern from each slanted face.

It is likely that some of the dimmer fringes in the alternating sequence will not be visible. This results in a doubled, and sometimes tripled, spacing between the visible fringes. By rotating the sample and observing the alternating pattern, the student should learn to identify such doubled spacing, and take it into account when recording the fringe numbers $m$.

In the reflection setup, rotation of the sample reveals a bright fringe moving across the screen. This fringe is of similar brightness to the central fringes of the interference pattern. It arises from light directly reflected from the sample's flat side, without entering into the sample. The other bright fringes remain stationary as this fringe moves, because they arise from a double reflection, as discussed in parts (a) and (c). The single-reflection fringe can be used as an alignment indicator: at perpendicular illumination, it should fall back on the laser. This situation can only be extrapolated and not directly observed, because near the center the single-reflection fringe blends with the other bright fringes.

The reflection pattern has an advantage for measurements - the central fringes around $m = 0$ are very bright and always visible, so there is no problem with counting the fringes consecutively, even in bright ambient illumination. On the other hand, it has some disadvantages - the overall pattern is narrower, while the individual fringes are broader. The reflection setup is also more difficult to align: to observe a high-quality pattern, the laser beam must pass through the hole in the screen without scattering off the sides, and then it must reach the sample. On the other hand, this provides better feedback: if a clean pattern is obtained, it means that the alignment is good. This reduces the eventual error.

In all three configurations, we need an indicator for the point $x = 0$, from which both $x$ and $m$ should be counted. In Configuration 1 (reflection), given proper alignment, this point is given by the source of the laser beam, at the center of the hole in the screen. In Configurations 2 and 3 (transmission), it can be found by illuminating the screen directly without the sample, and recording the beam's location. Configuration 2 allows another method - to define $x = 0$ as


the midpoint between the two bright side patterns. See the solution to (k) for remarks on identifying the centers of these patterns.

When choosing the measurement points, one should choose the largest possible range for which the fringes can still be reliably counted. This will reduce the relative error in distance measurements. There is no need to record all the dozens of fringes in this range - a sample of 8 more-or-less evenly spaced points is enough.

In the white light measurements, it was clear that one must choose the largest possible distance $y$ to minimize the relative errors. With the laser light, a compromise must be struck between this consideration and the widening of the laser beam with distance.

In Table 1, we present sample measurements from a reflection pattern at a distance $y = 652 \mathrm {~mm} \pm 1 \mathrm {~mm}$. The error in $x$ can be understood in two different ways. First, one may consider the error due to the width of each separate fringe. Since we are looking for the center of the fringes, this error is smaller than the fringe width itself. It may estimated for transmitted light as $\Delta x = 0.5 \mathrm {~mm}$ (same as the measurement resolution), and for reflected light as $\Delta x = 1 \mathrm {~mm}$. On the other hand, one may consider the collective offset of all the fringes relative to the true $x = 0$ point. This can be estimated as half the fringe spacing, which may as large as $\Delta x = 1 \mathrm {~cm}$. All the above error estimations should receive full credit. The corresponding errors in $\theta$, calculated as in eq. (1), range from $\Delta \theta = 0.05 ^ { \mathrm { o } }$ to $\Delta \theta = 1 ^ { \mathrm { o } }$.

| $m$ | $x ( \mathrm {~mm} )$ | $\theta$ | $\sin \theta$ |
| :--- | :--- | :--- | :--- |
| -29 | -262.5 | $- 21.93 ^ { \circ }$ | -0.3735 |
| -20 | -176 | -15.11° | -0.2606 |
| -10 | -86.5 | $- 7.56 ^ { \circ }$ | -0.1315 |
| -1 | -9 | -0.79° | -0.0138 |
| 1 | 9 | $0.79 ^ { \circ }$ | 0.0138 |
| 6 | 51 | $4.47 ^ { \circ }$ | 0.0780 |
| 11 | 95.5 | $8.33 ^ { \circ }$ | 0.1449 |
| 19 | 170 | $14.61 ^ { \circ }$ | 0.2523 |
| 25 | 230.5 | $19.47 ^ { \circ }$ | 0.3333 |

Table 1: Sample measurement results for part (i) from a reflection pattern at $y = 652 \mathrm {~mm} \pm 1 \mathrm {~mm}$

j. The student should use the relation $d \sin \theta = m \lambda$ and draw a linear graph of $\sin \theta$ as a function of $m$. The slope of this graph will be $\lambda / d$. The values of $\sin \theta$ for our sample experiment are shown in Table 1. Deciding on the appropriate error bars is problematic. First, we have the wide range of possible error estimations for $\theta$ from part (i). Second, it's difficult to estimate the relevance of the fringes' collective offset for the graph's slope. Therefore, error bars will not be graded.

The plot for our sample experiment is presented in Graph 1. Its slope reads:

$$
k = 0.0130 \pm 0.0002 ( 1.5 \% )
$$

This leads to the value $d = \lambda / k = 50.2 \mu \mathrm {~m}$ for the spacing. The relative error in $k$ is dominant over the relative error in $\lambda$, so we have $\Delta d = 0.8 \mu \mathrm {~m}$ ( $1.5 \%$ ).

A student who doesn't take into account the doubled spacing between some of the fringes will get a less linear graph. A student who consistently uses the double spacing will get a linear graph, but his result for $d$ will be too small by a factor of 2.


k. The student must use the bright patterns in the transmitted light (Configuration 2 or a rotated Configuration 3) to measure the deflection angle $\delta _ { 0 }$ or $\delta _ { \text {min } }$. Instead of looking through the sample, the student must use the screen. The peculiarities of the alignment process were already discussed in part (i). If part (i) was carried out with transmitted light, one may keep the same alignment and distance $y$ to the screen.

The precise location corresponding to the desired deflection angle can be difficult to identify on the screen. The bright patches are several centimeters wide, and their center doesn't necessarily lie on one of the interference fringes. However, there is an oval-shaped aura defining these patches, and the center can be identified as the point where this aura is broadest. Alternatively, one can try to move the interference fringes by slight rotations of the sample, and use them to probe the bright patch; for instance, its center can be estimated as the place where the brightest possible fringe is obtained.

As for white light, the more precise measurement is obtained for the minimal deflection angle $\delta _ { m i n }$. Unlike with the white light, a larger distance $y$ to the screen is not necessarily better, due to the broadening of the laser beam. In our sample experiment, we chose a moderate distance $y \approx 50 \mathrm {~cm}$. Then instead of using the distance $x$ between the undeflected beam and the beam at minimal deflection, we used the distance $2 x$ between the minimal deflections to the right and to the left. These two points were obtained by rotating the sample without changing any other element of the alignment. As a check, we in fact measured the distances $x _ { 1 }$ and $x _ { 2 }$ of the two points from the un-deflected beam, to see that they come out similar. The difference $\left( x _ { 1 } - x _ { 2 } \right) / 2$ can then serve as an error estimate for $x$.

The measurements from the sample experiment read:

$$
y = 495 \mathrm {~mm} \pm 1 \mathrm {~mm} ; \quad x _ { 1 } = 276.5 \mathrm {~mm} ; \quad x _ { 2 } = 279 \mathrm {~mm}
$$

From $x _ { 1 }$ and $x _ { 2 }$, we derive $x = \left( x _ { 1 } + x _ { 2 } \right) / 2 = 277.7 \mathrm {~mm}$, with an error $\Delta x = \left( x _ { 1 } - x _ { 2 } \right) / 2 = 1.5 \mathrm {~mm}$. For $\delta _ { \text {min } }$, we get:

$$
\delta _ { \min } = \tan ^ { - 1 } ( x / y ) = 29.3 ^ { \circ }
$$

Calculating the error as in eq. (1), we get $\Delta \delta _ { \text {min } } = 0.002 \mathrm { rad } = 0.1 ^ { \mathrm { o } }$. This error is consistent with the scatter of several sample measurements.

Using eqs. (3) and (4) for the refractive index and its error, we get $n _ { r } = 1.578 \pm 0.002$.


![](../../../figures/solution-ocr/10c7addceabae68c1c83226e.jpg)

Graph 1: $\sin \theta$ as a function of $m$, with a linear trend line.
