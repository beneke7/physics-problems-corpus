---
id: solution-ocr-eupho-2021-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2021_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2021-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T3: Glass ball

To begin with, let us notice that if a ray coming from a point $P$ on the stripe is refracted at point $Q$ at the surface of the ball towards a very distant point $A$ (which denotes the aperture of the camera lens), the ray will remain in the plane $P Q O$ where $O$ is the centre of the sphere. This means that those rays which arrive from $P$ to $A$ must lay in the plane $P O A$, and the rays can be conveniently depicted in the $P O A$-plane.

The angle $\gamma = \gamma ( \alpha )$ between vectors $P O$ and $Q A$ is given by

$$
\begin{array} { r }
\gamma \equiv 2 \alpha - \beta \\
n \sin \alpha = \sin \beta \tag{8}
\end{array}
$$

and is a non-monotonous function of $\alpha$ which achieves its maximum $\gamma _ { 0 }$ by a certain $\alpha _ { 0 }$. This means that for a fixed $P$ and $A$, if $\angle O P A < \gamma _ { 0 }$, there are two such angles $\alpha$ and, hence, two such positions $Q _ { 1 }$ and $Q _ { 2 }$ for the point $Q$ that the ray $P Q A$ will reach the point $A$ (here we have assumed that the point $A$ is at a very big distance). So, when viewed from the point $A$, the image of the point $P$ is split into two points $Q _ { 1 }$ and $Q _ { 2 }$. On the other hand, if $\angle O P A > \gamma _ { 0 }$, rays from $P$ cannot reach $A$, and such points on the stripe cannot be seen in the photo. If $\angle O P A =$ $\gamma _ { 0 }$, the two images $Q _ { 1 }$ and $Q _ { 2 }$ merge into a single point bridging the two images of a piece of stripe into a closed loop.
![](../../../figures/solution-ocr/01422d98629174931e3d25a7.jpg)

Now it becomes clear that the place where images $Q _ { 1 }$ and $Q _ { 2 }$ merge into a single image $Q _ { 0 }$ is the key to finding the coefficient of refraction. Indeed, the point $Q _ { 0 }$ can be found in the photo as the point where the blue ellipse (the images of a segment of the stripe in red light as the blue shadow is where the red light is missing) is touching a radius of the ball, see the figure below (we need to find tangent point with the radius because we need to consider plane $Q O A$ which projects into a line through the ball's centre). There is no difference between taking the tangent to the outer edge of the elliptical stripe and taking the tangent to the inner edge of it (point $Q _ { 0 } ^ { \prime }$ in the photo below). Then, $\sin \beta _ { 0 } = n \sin \alpha _ { 0 }$ can be determined from the photo as the ratio of the lengths $h$ and $R , h / R \approx 0.765$, where $h$ denotes the distance of the ball's centre $O$ from the line $Q _ { 0 } A$, measurable in the photo as the length $O Q _ { 0 }$ (when looking from the distant point $A$, we can see only the perpendicular-to- $O A$ component of the segment $O Q _ { 0 }$, and $R$ is the ball's radius.

Since we look for an extremum of $\gamma$, upon taking differentials from Eqns. (7,8), we obtain

$$
\begin{array} { r }
2 \mathrm {~d} \alpha = \mathrm { d } \beta \\
n \cos \alpha \mathrm {~d} \alpha = \cos \beta \mathrm { d } \beta
\end{array}
$$

from where

$$
\begin{gathered}
n \cos \alpha = 2 \cos \beta \\
n = \sqrt { \sin ^ { 2 } \beta + 4 \cos ^ { 2 } \beta } = \sqrt { 4 - 3 \sin ^ { 2 } \beta } \approx 1.498 \approx 1.50
\end{gathered}
$$

In order to find $\Delta n$, we could find in a similar way $n _ { V }$ $\left( \left| O Q _ { 0 } ^ { \prime \prime } \right| \approx 0.755 R , n \approx 1.513 \approx 1.51 \right)$, but the result would have a huge relative uncertainty as $\left| O Q _ { 0 } \right|$ and $\left| O Q _ { 0 } ^ { \prime \prime } \right|$ have very similar lengths. A much more precise result will be obtained if we base our calculations on the segment length $| S T |$, see the figure below. $Q _ { 0 } ^ { \prime \prime }$ is where the blue rays have an extremum for $\gamma$ while $Q _ { 0 } ^ { \prime }$ and $Q _ { 0 } ^ { \prime \prime }$ are two red rays originating from the same point on the stripe. From the photo we can measure $| S T | \approx 0.20 R$, hence we can use the small parameter $S Q _ { 0 } ^ { \prime \prime } / R \approx 0.10$.

Rays from $S , T$, and $Q _ { 0 } ^ { \prime \prime }$ arrive to the lens aperture, so all these rays (which originate from the same point $P$ on the stripe) have the same value of $\gamma$. So, we have a set of equations

$$
\begin{array} { r }
\gamma \equiv 2 \alpha _ { R } - \beta _ { R } = 2 \alpha _ { V } - \beta _ { V } \\
n _ { V } \sin \alpha _ { V } = \sin \beta _ { V } \\
\left( n _ { V } - \Delta n \right) \sin \alpha _ { R } = \sin \beta _ { R } \\
n _ { V } \cos \alpha _ { V } = 2 \cos \beta _ { V } , \tag{13}
\end{array}
$$


and we would like to get an expression relating $\Delta n$ to $\sin \beta _ { V 1 } - \sin \beta _ { V 2 }$, where the indices 1 and 2 relate to the two different solutions. Expressing $\alpha _ { R } = \alpha _ { V } + \delta$ we obtain from Eq. (10) that $\beta _ { R } = \beta _ { V } + 2 \delta$. Now, if we expand Eq. (12) into Taylor series, neglect the smallest term with $\Delta n \delta$, and keep in mind Eq. (11), we obtain

$$
n _ { V } \delta \cos \alpha _ { V } - n _ { V } \delta ^ { 2 } \frac { \sin \alpha _ { V } } { 2 } - \Delta n \sin \alpha _ { V } = 2 \delta \cos \beta _ { V } - 2 \delta ^ { 2 } \sin \beta _ { V } .
$$

Here the two linear-in- $\delta$ terms cancel out due to Eq. (13) so that with $\sin \beta _ { V } = n _ { V } \sin \alpha _ { V }$ we obtain

$$
\begin{equation*}
\Delta n = 3 n _ { V } \delta ^ { 2 } / 2 . \tag{14}
\end{equation*}
$$

On the other hand, $| S T | / R = \sin \beta _ { R 1 } - \sin \beta _ { R 2 } \approx \sin \left( \beta _ { V } + \right.$ $2 \delta ) - \sin \left( \beta _ { V } - 2 \delta \right) = 4 \delta \cos \beta _ { V }$, hence

$$
\begin{equation*}
\Delta n = \frac { 3 n _ { V } } { 2 } \left( \frac { | S T | } { 4 R \cos \beta _ { V } } \right) ^ { 2 } = \frac { 3 n _ { V } } { 32 } \frac { | S T | ^ { 2 } } { R ^ { 2 } - h ^ { 2 } } \approx 0.0132 \approx 0.013 . \tag{15}
\end{equation*}
$$

![](../../../figures/solution-ocr/b182fe7ada99bdc3aa32d98b.jpg)
