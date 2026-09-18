---
id: solution-ocr-usapho-2022-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2022-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

## Rainbow Road

In geometric optics, a caustic is a bright curve of light that appears when many incoming light rays are focused in the same outgoing direction. The most famous example of a caustic is a rainbow, which occurs when light interacts with spherical water droplets. Consider a spherical liquid droplet of radius $r$ with index of refraction $1 < n < 2$, suspended in air with index of refraction $n = 1$.

a. Consider a light ray that enters the droplet with impact parameter $b$, reflects once off the inside surface of the droplet, then exits, as shown at left below. Give your answers in terms of the dimensionless impact parameter $x = b / r$. (Hint: the four marked angles are congruent.)
![](../../../figures/solution-ocr/4d6b24d10a00cb3d04109434.jpg)
![](../../../figures/solution-ocr/85c3ac817ed0d9a234589c0d.jpg)
    i. Find the angle by which the light ray is deflected at the first refraction.
    ii. Find the angle by which the light ray is deflected at the reflection.
    iii. Find the angle by which the light ray is deflected at the second refraction.

The sum of these three quantities is the net deflection angle $\phi ( x )$. (The light can also reflect inside more than once, or never enter at all, but for simplicity we will ignore these other paths.)

## Solution

The angle the incoming light ray makes with to the normal of the droplet is $\theta _ { 1 } = \arcsin ( x )$. By Snell's law, the angle to the normal inside the droplet is $\theta _ { 2 } = \arcsin ( x / n )$.


i. The first refraction causes a deflection of $\theta _ { 1 } - \theta _ { 2 }$.
ii. The reflection keeps the angle to the normal the same, and causes a deflection of $\pi - 2 \theta _ { 2 }$.
iii. At this point, the angle to the normal is still $\theta _ { 2 }$, and by Snell's law, it reverts to $\theta _ { 1 }$ outside the droplet. This causes a deflection of $\theta _ { 1 } - \theta _ { 2 }$, with the same sign as in part (i).

Thus, we conclude

$$
\phi ( x ) = \pi - 4 \theta _ { 2 } + 2 \theta _ { 1 } = \pi - 4 \arcsin ( x / n ) + 2 \arcsin ( x ) .
$$

The definition of $\phi$ is convention-dependent, so answers that differed by a minus sign and/or a factor of $2 \pi$ were also accepted.


b. Next, we consider when caustics form in general. Suppose the droplet is uniformly illuminated by parallel light rays of intensity $I _ { 0 }$, and sits at the center of a spherical screen of radius $R \gg r$, as shown at right above. Consider the light that enters near dimensionless impact parameter $x _ { 0 }$, and exits near angle $\phi _ { 0 } = \phi \left( x _ { 0 } \right)$.
    i. What is the power incident on the droplet at $x _ { 0 } \leq x \leq x _ { 0 } + d x$ ?

## Solution

The region with impact parameters in this region is a thin annulus with radius $r x$ and cross-sectional width $r d x$. Then, the power is

$$
2 \pi \left( I _ { 0 } r ^ { 2 } \right) x _ { 0 } | d x | .
$$


ii. What is the area on the screen illuminated by the outgoing rays, at $\phi _ { 0 } \leq \phi \leq \phi _ { 0 } + d \phi$ ?

## Solution

By similar reasoning to the previous part, the area is

$$
d A = 2 \pi R ^ { 2 } \sin \phi | d \phi | .
$$


iii. A caustic occurs when the intensity of light on the screen diverges. Assume that $\phi _ { 0 } \neq 0$ and $\phi _ { 0 } \neq \pi$. Under what conditions does light incident at $x _ { 0 }$ lead to a caustic at $\phi _ { 0 }$ ? Express your answer as a condition on the function $\phi ( x )$.

## Solution

By dividing our two answers, the intensity on the screen is

$$
I ( \phi ) = \frac { I _ { 0 } r ^ { 2 } } { R ^ { 2 } } \frac { x } { | d \phi / d x | \sin \phi } .
$$

This diverges when the denominator becomes zero, which in this case only occurs when $d \phi / d x$ vanishes. That is, a caustic will occur at $\phi _ { 0 } = \phi ( x )$ if

$$
\phi ^ { \prime } \left( x _ { 0 } \right) = 0 .
$$

Intuitively, this condition means that a broad range of incoming light rays end up focused on a narrow curve on the screen.
c. Find the angle $\phi _ { 0 }$ of the rainbow in terms of $n$. (Hint: the derivative of $\arcsin ( x )$ is $1 / \sqrt { 1 - x ^ { 2 } }$.)

## Solution

The condition for a caustic is $\phi ^ { \prime } \left( x _ { 0 } \right) = 0$, which implies

$$
\frac { 2 } { \sqrt { 1 - x _ { 0 } ^ { 2 } } } - \frac { 4 } { \sqrt { n ^ { 2 } - x _ { 0 } ^ { 2 } } } = 0
$$


Solving for $x _ { 0 }$ gives

$$
x _ { 0 } = \sqrt { \frac { 4 - n ^ { 2 } } { 3 } } .
$$

In particular, this implies that a caustic will appear for the entire range of $n$ considered in this problem. Now, substituting this back into $\phi ( x )$ gives

$$
\phi _ { 0 } = \pi - 4 \arcsin \left( \sqrt { \frac { 4 - n ^ { 2 } } { 3 n ^ { 2 } } } \right) + 2 \arcsin \left( \sqrt { \frac { 4 - n ^ { 2 } } { 3 } } \right) .
$$

d. For water, the index of refraction of red light is 1.331, and the index of refraction of blue light is 1.340. Find the angular width of the rainbow on the screen and give your answer in degrees.

## Solution

Substituting these two indices of refraction into the above equation and subtracting the results yields 1.30°.

e. A glory is an optical phenomenon which involves light scattered directly backward, at $\phi = \pi$, leading to an apparent halo around the shadow of an observer's head. For what values of $n$ is there a caustic at $\phi = \pi$ ? Can glories from water droplets be explained in terms of caustics?

## Solution

Referring to our answer above, we have a caustic whenever the denominator $| d \phi / d x | \sin \phi$ vanishes, and $\sin \phi$ vanishes for $\phi = \pi$. Therefore, we will have a caustic at $\phi = \pi$ as long as light can be reflected backwards at all, i.e. whenever there is a solution to $\phi ( x ) = \pi$. That is because at this angle, all the outgoing light is directed at a single point on the screen.
We thus need to solve

$$
\arcsin ( x ) = 2 \arcsin ( x / n ) .
$$

Taking the sine of both sides and using the double angle formula gives

$$
x = 2 ( x / n ) \cos ( \arcsin ( x / n ) ) = \frac { 2 x \sqrt { n ^ { 2 } - x ^ { 2 } } } { n ^ { 2 } } .
$$

Solving for $n$ gives

$$
n = \frac { \sqrt { 2 } x } { \sqrt { 1 - \sqrt { 1 - x ^ { 2 } } } }
$$

As the impact parameter $x$ yielding the backward caustic ranges from 0 to 1 , the value of $n$ ranges from a minimum of 2 to a minimum of $\sqrt { 2 }$. Thus,

$$
\sqrt { 2 } < n < 2 .
$$

The index of refraction of water is outside this range, so glories from water droplets cannot be explained in terms of caustics. The reason glories are visible is still under debate, though all proposed mechanisms rely on the wave nature of light. For example, one proposed


solution invoking "light tunneling" is explored in this paper. This problem was inspired by Berry, Contemporary Physics 56:1 (2015): 2-16.


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.

Once you start Part B, you will not be able to return to Part A.


## Part B
