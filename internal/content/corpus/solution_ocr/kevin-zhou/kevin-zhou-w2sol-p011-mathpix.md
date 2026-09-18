---
id: solution-ocr-kevin-zhou-w2sol-p011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w2-p011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 11. Comparing the single and double slit.

(a) Show that the minima for the single slit occur when
$$
a \sin \theta = n \lambda , \quad n \neq 0 .
$$
(b) Note that this looks almost identical to the result for the maxima of a double slit with separation $a$. Explain the difference using phasors.
(c) In our analysis of the double slit, we didn't account for the small but nonzero width of each slit. Using the idea of problem 4, sketch the diffraction pattern accounting for this.

For tips on accurately measuring diffraction patterns, see the handout on experimental methods.
Solution. (a) Using the formula derived above, the minima occur when $k a \sin \theta / 2 = \pi n$, and with $k = 2 \pi / \lambda$, this immediately yields $a \sin \theta = n \lambda , n \neq 0$.

(b) For the double slit, when $d \sin \theta = n \lambda$, there are only 2 phasors, which point in the same direction. In a single slit with width $a$, we're summing infinitesimal phasors that form a circle arc. Since the points in the single slit that provide the first and last phasors are separated by a distance $a$, that indicates that when $a \sin \theta = n \lambda$, the first and last phasors point in the same direction. That means that the phasors went in a full circle (or multiple), so the net amplitude is zero.

(c) Since the slits are small, by the idea of problem 4, we should multiply a double slit intensity pattern with a much wider single slit intensity pattern, giving the following result.

![](../../../figures/solution-ocr/041288991fe09b71919ef135.jpg)

[3] Problem 12 (MPPP 123). Some imperfect diffraction gratings. For this problem, you can ignore secondary maxima. Use the small angle approximation throughout, and neglect any diffraction effects from the finite widths of the slits.
    (a) In an imperfect diffraction grating, the slits have equal widths, but the distances between the slits are alternately $d$ and $3 d$. Sketch the resulting diffraction pattern, indicating the relative heights of the maxima.
    (b) In another imperfect diffraction grating, the slits are evenly spaced, but their widths are alternatively $a$ and $b$, where $a \approx b$. Sketch the resulting diffraction pattern, indicating the relative heights of the maxima.

It may be useful to refer to problem 4.
Solution. (a) By blocking every other slit, we can see that this pattern is the sum of two gratings with spacing $4 d$ and a displacement of $d$. Thus we can add the amplitudes of what we would get with a grating of spacing $4 d$,

$$
A \sim \frac { \sin ( N k ( 4 d \sin \theta ) / 2 ) } { \sin ( k ( 4 d \sin \theta ) / 2 ) } ,
$$

except one of them has a phase shift of $e ^ { i k d \sin \theta }$. This results in a net amplitude of $A \left( 1 + e ^ { i k d \sin \theta } \right)$. Factoring out a common factor and squaring the amplitude gets

$$
I \propto \frac { \sin ^ { 2 } ( 2 N k d \sin \theta ) } { \sin ^ { 2 } ( 2 k d \sin \theta ) } \cos ^ { 2 } ( k d \sin \theta / 2 ) .
$$


![](../../../figures/solution-ocr/1101df123d92e54b50458484.jpg)

(b) Without loss of generality, we can assume that $a > b$. Then the pattern is the sum of a grating with spacing $d$ and slit width $b$, and a grating with spacing $2 d$ and slit width $a - b$. Since the amplitude of the second component is much smaller, the overall pattern looks like a diffraction grating with spacing $d$ and peaks with intensity proportional to $( a + b ) ^ { 2 }$, except there will be a small peak with intensity $( a - b ) ^ { 2 }$ in between the primary peaks instead of a minimum.

## 4 Higher Dimensions

In these problems we tackle interference and diffraction effects in more than one dimension, which can be used to infer the structure of molecules and crystals.

Idea 3
We've shown that for a thin slit of length $a$, the central maximum is a band, bounded by minima at $\theta = \pm \lambda / a$. If we instead had a circular slit of diameter $d$, the central maximum is a circle, bounded by minima at $\theta \approx 1.22 \lambda / d$. The radii of the higher-order minima then get closer and closer spaced as one moves outward. The resulting pattern is called an Airy disc.
![](../../../figures/solution-ocr/13947b6c318af143412352f8.jpg)
You can straightforwardly write down an integral that gives the intensity $I ( r )$, but the integral can only be performed in terms of special functions, called Bessel functions.


## Idea 4: Babinet's Principle

Consider all of the rays $R$ that strike a point $P$ on the screen. If the intensity at $P$ is zero, then the rays must completely destructively interfere. That means that if we split $R$ into two sets of rays $R _ { 1 }$ and $R _ { 2 }$ in any way, then the amplitudes due to the rays $R _ { 1 }$ and the rays $R _ { 2 }$ must be equal and opposite, which means either set of rays alone would produce the same intensity at $P$. This is Babinet's principle.

As a concrete example, consider shining a laser pointer at a wall. There will be a bright spot on the wall at the exact location the laser hits, and darkness everywhere else. Consider some dark point $P$. If we had instead passed the laser through two slits, we would only get the rays $R _ { 1 }$ going through the slits, and we would generally get some nonzero intensity at $P$, due to the double slit interference pattern. Babinet's principle tells us we would get the exact same intensity at $P$ if we put two slit-shaped obstacles in the way, because then we would get precisely the rays $R _ { 2 }$ which don't hit the slits. In other words, the diffraction pattern from an obstacle is precisely the same as the diffraction pattern from a complementary slit.

## Example 6: BPhO 2016.5

When a laser pointer hits a spring, the following pattern is produced on a screen behind it.
![](../../../figures/solution-ocr/dbaeb7037f02f687a9392589.jpg)
Explain why this happens, and what we can learn about the spring.

## Solution

If we look at the spring along the direction the laser pointer is going, it's essentially two sets of obstructions, one going up and to the right (the front of the spring, in the picture), and one going up and to the left (the back of the spring). By Babinet's principle, the resulting diffraction pattern should be the same as if we had two sets of openings instead. Thus, we expect to see two independent diffraction patterns, one due to each of these obstructions. The angle between these two patterns is twice the angle that the spiral path of the spring


makes with the horizontal.

Now focus on one interference pattern. By Babinet's principle, it's basically a single slit pattern, which is indeed what we see. However, from the reflection of the laser in the picture, we see that the laser beam is wide enough to hit two separate turns of the spring. The result is a double slit pattern multiplied by a single slit pattern, where the latter yields a minimum at approximately every 5 double slit minima. The spacing between the single slit minima tells us the thickness of the wire, and the spacing between the double slit minima tells us the spacing between the turns in the spring. Combining this with what we know about the angle of the spring tells us about the radius of the spring. Thus, we can figure out essentially everything about its 3D shape.

You can see many of the same features in the original X-ray diffraction pattern of DNA, shown below, which was used to discover its double helix structure.
![](../../../figures/solution-ocr/a11c5326ce39ed1e2dfbb4bc.jpg)

## Example 7: MPPP 125

An opaque sheet is perforated by many small holes arranged in a square grid of side length $d$. It is illuminated by light of wavelength $\lambda$, and a screen lies a distance $D$ behind it.
![](../../../figures/solution-ocr/f8aa67b36a204de1f5bb23b1.jpg)
Assuming $D \gg d \gg \lambda$, find the locations of the primary diffraction maxima on the screen.


Solution
Let $( x , y )$ denote coordinates on the sheet, and $\left( x ^ { \prime } , y ^ { \prime } \right)$ denote coordinates on the screen, with the same center. When we considered one-dimensional diffraction gratings, we found that light which originates from $y$ and hits point $y ^ { \prime }$ on the screen has a path length difference $y y ^ { \prime } / D$ relative to light that came from point $y = 0$. A similar argument shows light which comes from $( x , y )$ and hits $\left( x ^ { \prime } , y ^ { \prime } \right)$ gets a path length difference

$$
\Delta \ell = \frac { x x ^ { \prime } + y y ^ { \prime } } { D }
$$

relative to light coming from $x = y = 0$.
For a square grid, $( x , y ) = ( n d , m d )$ for integers $n$ and $m$, giving a path length difference

$$
\Delta \ell _ { n , m } = \frac { d } { D } \left( n x ^ { \prime } + m y ^ { \prime } \right) .
$$

We get a diffraction maximum at $\left( x ^ { \prime } , y ^ { \prime } \right)$ when the light from each hole arrives in phase, which means this quantity must be a multiple of $\lambda$ for all $n$ and $m$. This occurs precisely when

$$
x ^ { \prime } = \frac { \lambda D } { d } n ^ { \prime } , \quad y ^ { \prime } = \frac { \lambda D } { d } m ^ { \prime }
$$

for integers $n ^ { \prime }$ and $m ^ { \prime }$. That is, the diffraction maxima also form a square grid of side length $\lambda D / d$. Notice again that the diffraction pattern is "inverse" to the pattern on the sheet. It gets bigger when the sheet gets smaller; for instance, if the sheet is compressed horizontally, the maxima on the screen are stretched horizontally.

[3] Problem 13 (MPPP 126). Continuing on the previous example, suppose the holes are instead arranged in a triangular grid with side length $d$.
![](../../../figures/solution-ocr/4114298258fe55774866d2f3.jpg)
Find the primary diffraction maxima on the screen. What kind of grid do they form?
Solution. Note that the points on a triangular grid can be written as
$$
( x , y ) = n \mathbf { r } _ { 1 } + m \mathbf { r } _ { 2 }
$$
where the "lattice basis vectors" are
$$
\mathbf { r } _ { 1 } = ( d , 0 ) , \quad \mathbf { r } _ { 2 } = ( d / 2 , \sqrt { 3 } d / 2 ) .
$$

Again, we need to find the points $\left( x ^ { \prime } , y ^ { \prime } \right)$ on the screen where the light from all holes arrives in phase. This is a bit less obvious than in the above example, so let's think about it more systematically. First, we can find a peak $\left( x ^ { \prime } , y ^ { \prime } \right) = \mathbf { r } _ { 1 } ^ { \prime }$ where changing $n$ by one changes the path length by $\lambda$, and changing $m$ by one doesn't change the path length at all. Similarly, we can find a peak $\left( x ^ { \prime } , y ^ { \prime } \right) = \mathbf { r } _ { 2 } ^ { \prime }$ where changing $m$ by one changes the path length by $\lambda$, while changing $n$ by one doesn't change the path length. The general solution will then take the form

$$
\mathbf { r } ^ { \prime } = n ^ { \prime } \mathbf { r } _ { 1 } ^ { \prime } + m ^ { \prime } \mathbf { r } _ { 2 } ^ { \prime }
$$

for integers $n ^ { \prime }$ and $m ^ { \prime }$, where $\mathbf { r } _ { 1 } ^ { \prime }$ and $\mathbf { r } _ { 2 } ^ { \prime }$ are called the "reciprocal lattice" basis vectors.
In equations, the criterion we have stated above are

$$
\mathbf { r } _ { 1 } ^ { \prime } \cdot \mathbf { r } _ { 1 } = \lambda D , \quad \mathbf { r } _ { 1 } ^ { \prime } \cdot \mathbf { r } _ { 2 } = 0 , \quad \mathbf { r } _ { 2 } ^ { \prime } \cdot \mathbf { r } _ { 1 } = 0 , \quad \mathbf { r } _ { 2 } ^ { \prime } \cdot \mathbf { r } _ { 2 } = \lambda D .
$$

Plugging in the lattice basis vectors and solving the equations gives

$$
\mathbf { r } _ { 1 } ^ { \prime } = \frac { \lambda D } { d } \left( 1 , - \frac { 1 } { \sqrt { 3 } } \right) , \quad \mathbf { r } _ { 2 } ^ { \prime } = \frac { \lambda D } { d } \left( 0 , \frac { 2 } { \sqrt { 3 } } \right) .
$$

In other words, the diffraction maxima also form a triangular grid, but the side length is $( 2 / \sqrt { 3 } ) ( \lambda D / d )$, and the whole thing is rotated by 90°.
[3] Problem 14. AuPhO 2015, problem 14. Instructive examples of higher-dimensional diffraction patterns. You'll need the diagrams in the accompanying answer sheets.

For a much harder multi-dimensional diffraction problem, beyond the scope of the Olympiad, see Physics Cup 2019, problem 5.

## 5 Technological Applications
