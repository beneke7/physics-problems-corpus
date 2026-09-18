---
id: kevin-zhou-w2-p011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-p011
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

[2] Problem 11. Comparing the single and double slit.
(a) Show that the minima for the single slit occur when
asinθ = nλ, n ̸= 0.
(b) Note that this looks almost identical to the result for the maxima of a double slit with
separation a. Explain the difference using phasors.
(c) In our analysis of the double slit, we didn’t account for the small but nonzero width of each
slit. Using the idea of problem 4, sketch the diffraction pattern accounting for this.
For tips on accurately measuring diffraction patterns, see the handout on experimental methods.
Solution. (a) Using the formula derived above, the minima occur when kasinθ/2 = πn, and
with k = 2π/λ, this immediately yields asinθ = nλ, n ̸= 0.
(b) For the double slit, when dsinθ = nλ, there are only 2 phasors, which point in the same
direction. In a single slit with width a, we’re summing infinitesimal phasors that form a circle
arc. Since the points in the single slit that provide the first and last phasors are separated
by a distance a, that indicates that when asinθ = nλ, the first and last phasors point in the
same direction. That means that the phasors went in a full circle (or multiple), so the net
amplitude is zero.
14
Kevin Zhou Physics Olympiad Handouts
(c) Since the slits are small, by the idea of problem 4, we should multiply a double slit intensity
pattern with a much wider single slit intensity pattern, giving the following result.
[3] Problem 12 (MPPP 123). Some imperfect diffraction gratings. For this problem, you can ignore
secondary maxima. Use the small angle approximation throughout, and neglect any diffraction
effects from the finite widths of the slits.
(a) In an imperfect diffraction grating, the slits have equal widths, but the distances between the
slits are alternately d and 3d. Sketch the resulting diffraction pattern, indicating the relative
heights of the maxima.
(b) In another imperfect diffraction grating, the slits are evenly spaced, but their widths are
alternatively a and b, where a ≈ b. Sketch the resulting diffraction pattern, indicating the
relative heights of the maxima.
It may be useful to refer to problem 4.
Solution. (a) By blocking every other slit, we can see that this pattern is the sum of two gratings
with spacing 4d and a displacement of d. Thus we can add the amplitudes of what we would
get with a grating of spacing 4d,
A ∼
sin(Nk(4dsinθ)/2)
sin(k(4dsinθ)/2)
,
except one of them has a phase shift of eikdsinθ. This results in a net amplitude of A(1+eikdsinθ).
Factoring out a common factor and squaring the amplitude gets
I ∝
sin2
(2Nkdsinθ)
sin2
(2kdsinθ)
cos2
(kdsinθ/2).
15
Kevin Zhou Physics Olympiad Handouts
(b) Without loss of generality, we can assume that a > b. Then the pattern is the sum of a grating
with spacing d and slit width b, and a grating with spacing 2d and slit width a − b. Since the
amplitude of the second component is much smaller, the overall pattern looks like a diffraction
grating with spacing d and peaks with intensity proportional to (a + b)2, except there will be
a small peak with intensity (a − b)2 in between the primary peaks instead of a minimum.
4 Higher Dimensions
In these problems we tackle interference and diffraction effects in more than one dimension, which
can be used to infer the structure of molecules and crystals.
Idea 3
We’ve shown that for a thin slit of length a, the central maximum is a band, bounded by
minima at θ = ±λ/a. If we instead had a circular slit of diameter d, the central maximum
is a circle, bounded by minima at θ ≈ 1.22λ/d. The radii of the higher-order minima then
get closer and closer spaced as one moves outward. The resulting pattern is called an Airy disc.
You can straightforwardly write down an integral that gives the intensity I(r), but the integral
can only be performed in terms of special functions, called Bessel functions.
16
Kevin Zhou Physics Olympiad Handouts
Idea 4: Babinet’s Principle
Consider all of the rays R that strike a point P on the screen. If the intensity at P is zero,
then the rays must completely destructively interfere. That means that if we split R into
two sets of rays R1 and R2 in any way, then the amplitudes due to the rays R1 and the rays
R2 must be equal and opposite, which means either set of rays alone would produce the
same intensity at P. This is Babinet’s principle.
As a concrete example, consider shining a laser pointer at a wall. There will be a bright spot
on the wall at the exact location the laser hits, and darkness everywhere else. Consider some
dark point P. If we had instead passed the laser through two slits, we would only get the
rays R1 going through the slits, and we would generally get some nonzero intensity at P, due
to the double slit interference pattern. Babinet’s principle tells us we would get the exact
same intensity at P if we put two slit-shaped obstacles in the way, because then we would
get precisely the rays R2 which don’t hit the slits. In other words, the diffraction pattern
from an obstacle is precisely the same as the diffraction pattern from a complementary slit.
Example 6: BPhO 2016.5
When a laser pointer hits a spring, the following pattern is produced on a screen behind it.
Explain why this happens, and what we can learn about the spring.
Solution
If we look at the spring along the direction the laser pointer is going, it’s essentially two sets
of obstructions, one going up and to the right (the front of the spring, in the picture), and
one going up and to the left (the back of the spring). By Babinet’s principle, the resulting
diffraction pattern should be the same as if we had two sets of openings instead. Thus, we
expect to see two independent diffraction patterns, one due to each of these obstructions.
The angle between these two patterns is twice the angle that the spiral path of the spring
17
Kevin Zhou Physics Olympiad Handouts
makes with the horizontal.
Now focus on one interference pattern. By Babinet’s principle, it’s basically a single slit
pattern, which is indeed what we see. However, from the reflection of the laser in the picture,
we see that the laser beam is wide enough to hit two separate turns of the spring. The result
is a double slit pattern multiplied by a single slit pattern, where the latter yields a minimum
at approximately every 5 double slit minima. The spacing between the single slit minima
tells us the thickness of the wire, and the spacing between the double slit minima tells us
the spacing between the turns in the spring. Combining this with what we know about the
angle of the spring tells us about the radius of the spring. Thus, we can figure out essentially
everything about its 3D shape.
You can see many of the same features in the original X-ray diffraction pattern of DNA,
shown below, which was used to discover its double helix structure.
Example 7: MPPP 125
An opaque sheet is perforated by many small holes arranged in a square grid of side length
d. It is illuminated by light of wavelength λ, and a screen lies a distance D behind it.
Assuming D ≫ d ≫ λ, find the locations of the primary diffraction maxima on the screen.
18
Kevin Zhou Physics Olympiad Handouts
Solution
Let (x,y) denote coordinates on the sheet, and (x′,y′) denote coordinates on the screen, with
the same center. When we considered one-dimensional diffraction gratings, we found that
light which originates from y and hits point y′ on the screen has a path length difference
yy′/D relative to light that came from point y = 0. A similar argument shows light which
comes from (x,y) and hits (x′,y′) gets a path length difference
∆ℓ =
xx′ + yy′
D
relative to light coming from x = y = 0.
For a square grid, (x,y) = (nd,md) for integers n and m, giving a path length difference
∆ℓn,m =
d
D
(nx′
+ my′
).
We get a diffraction maximum at (x′,y′) when the light from each hole arrives in phase, which
means this quantity must be a multiple of λ for all n and m. This occurs precisely when
x′
=
λD
d
n′
, y′
=
λD
d
m′
for integers n′ and m′. That is, the diffraction maxima also form a square grid of side length
λD/d. Notice again that the diffraction pattern is “inverse” to the pattern on the sheet. It
gets bigger when the sheet gets smaller; for instance, if the sheet is compressed horizontally,
the maxima on the screen are stretched horizontally.
[3] Problem 13 (MPPP 126). Continuing on the previous example, suppose the holes are instead
arranged in a triangular grid with side length d.
Find the primary diffraction maxima on the screen. What kind of grid do they form?
Solution. Note that the points on a triangular grid can be written as
(x,y) = nr1 + mr2
where the “lattice basis vectors” are
r1 = (d,0), r2 = (d/2,
√
3d/2).
19
Kevin Zhou Physics Olympiad Handouts
Again, we need to find the points (x′,y′) on the screen where the light from all holes arrives in phase.
This is a bit less obvious than in the above example, so let’s think about it more systematically.
First, we can find a peak (x′,y′) = r′
1 where changing n by one changes the path length by λ, and
changing m by one doesn’t change the path length at all. Similarly, we can find a peak (x′,y′) = r′
2
where changing m by one changes the path length by λ, while changing n by one doesn’t change
the path length. The general solution will then take the form
r′
= n′
r′
1 + m′
r′
2
for integers n′ and m′, where r′
1 and r′
2 are called the “reciprocal lattice” basis vectors.
In equations, the criterion we have stated above are
r′
1 · r1 = λD, r′
1 · r2 = 0, r′
2 · r1 = 0, r′
2 · r2 = λD.
Plugging in the lattice basis vectors and solving the equations gives
r′
1 =
λD
d

1,−
1
√
3

, r′
2 =
λD
d

0,
2
√
3

.
In otherwords, the diffraction maxima also form a triangulargrid, but the side lengthis (2/
√
3)(λD/d),
and the whole thing is rotated by 90◦.
[3] Problem 14. AuPhO 2015, problem 14. Instructive examples of higher-dimensional diffraction
patterns. You’ll need the diagrams in the accompanying answer sheets.
For a much harder multi-dimensional diffraction problem, beyond the scope of the Olympiad, see
Physics Cup 2019, problem 5.
5 Technological Applications
