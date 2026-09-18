---
id: kevin-zhou-w2-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-p004
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

[2] Problem 4. A pair of slits is separated by a distance d1, and two of these pairs are separated by a
larger distance d2, so that d2 ≫ d1 ≫ λ. Sketch the intensity pattern on the screen for this four-slit
apparatus. (Hint: to avoid a complicated computation, factor the expression for the amplitude.)
Solution. The simplest way to do this is to factor the amplitude,
A ∼ 1 + eikd1 sinθ
+ eikd2 sinθ
+ eik(d1+d2)sinθ
= (1 + eikd1 sinθ
)(1 + eikd2 sinθ
).
This is the product of the amplitudes of a double slit with separation d1 and a double slit with
separation d2. Therefore, the intensity is just the product of their intensities. Using the small angle
approximation, we have many bright and dark bands inside a slowly varying envelope. Similarly, if
we had two slits of finite width, we would get a double slit intensity pattern multiplied by a single
slit peak.
If you know Fourier transforms, this is just the statement that Fourier transforms swap convolu-
tions (the quadruple slit is the convolution of two double slits) and products (the intensity is the
product of their individual intensities).
Idea 1: Image Sources
Some interference problems have complex arrangements of mirrors and lenses. In these cases,
actually computing the path length differences can be a nightmare. For instance, you’d have
to account for the detailed shape of every lens. Also, you won’t just have to compute the
path length, but rather the optical path length, which is the ordinary path length weighted
by the index of refraction. This is because the index of refraction affects the wavelength and
hence the phase difference.
However, there’s a trick which makes everything much simpler: any point image can be
treated like its own light source. That means you can compute path length differences by
starting from the images, rather than having to go all the way back to the original objects.
For real images, there’s a very simple way to see why this works. For instance, consider the
setup below, where an object o is focused with a lens to an image i.
4
Kevin Zhou Physics Olympiad Handouts
Fermat’s principle of least time tells us that all of the paths shown take the same time, and
since phases are directly related to time by ∆ϕ = ω∆t, it means that all of the rays arrive
at the image with the same phase. That means they leave the image with the same phase,
so the image can be treated just like a coherent source. (That is, the phase of the light
coming from the image doesn’t depend on the direction it comes out.) To find the phase of
the waves at i, you can pick any of the paths, most conveniently the one on the symmetry axis.
We can also consider virtual images, as shown below.
Here, the Fermat’s principle argument doesn’t work because the rays never actually meet
at i, but we can use Huygens’ principle. The key ideas are that (1) light locally propagates
perpendicularly to wavefronts, and (2) the phase on a wavefront is always uniform, by
definition. The first point implies the outgoing wavefronts are spheres centered on i. The
second point implies that the phase only depends on the distance from i, so it can again be
treated just like a source. In this way, seemingly impossible questions can be solved instantly.
Example 2: Kalda 17
Consider the optical setup shown below.
Many light and dark bands appear on the screen, with dark bands separated by distance d.
Assuming that α ≪ 1, find the wavelength λ of the light.
Solution
This is actually just a double slit interference problem! Each mirror produces a (virtual)
image source reflected behind it, and the pattern on the screen results from the interference
between the two image sources, just as if there were two slits at those points.
Specifically, let the light source have coordinates (0,0), with the screen at x = a. Then the
5
Kevin Zhou Physics Olympiad Handouts
image sources are located at (−2a,±2αa), so we have a double slit setup with sources 4αa
apart from each other, a distance 3a from the screen. Using our existing results,
λ = (4αa)
d
3a
=
4αd
3
.
Note that reflection from a mirror changes the phase by π, but that didn’t matter in this
problem, because both image sources pick up the same phase.
[3] Problem 5.   ^ 1 0USAPhO 2020, problem B2. A problem on interference with images.
2 Thin Film Interference
Idea 2
In general, the phase of a wave is unaffected by reflection from a rarer medium, and flipped
by 180◦ when reflected from a denser medium; here a “denser” medium is defined as one
where the wave speed is lower, e.g. one with a higher index of refraction for light. This is
analogous to the result for wave reflection in a string derived in W1, and is derived starting
from Maxwell’s equations in E8.
Example 3
Why does a very thin soap film on a wire loop look dark when viewed from above?
Solution
For the soap film, we consider interference between two paths for the light: bouncing off the
top surface, or transmitting through and bouncing off the bottom surface. These have almost
the same phase from their path length, since the soap film is thin, but the former has an
extra 180◦ phase shift. So the two destructively interfere, making the soap film look dark.
Remark
This is the usual high school textbook analysis, but the real situation is a bit more subtle.
First off, there are actually infinitely many possible paths for the light to take, and sometimes
many of these paths are important, as you saw in W1 for the Fabry–Perot interferometer
for r ≈ 1. However, the two paths we considered were indeed the most important by far.
Second off, the amplitudes upon reflection and transmission must be computed using the
results you found in W1, and generally won’t have the same magnitude. This means that
generically we don’t get complete destructive interference, just a lowered intensity. Finally,
these reflection and transmission coefficients will vary significantly with angle according to
Fresnel’s equations, as shown in E8. We typically ignore this by focusing on normal incidence.
By the way, you might be wondering why we’re specializing to thin films; why isn’t there
thick film interference? Technically there could be interference fringes, but they would be
6
Kevin Zhou Physics Olympiad Handouts
too close to see even if everything was perfect. And in reality, they would then get blurred
together due to imperfections in the surfaces, and the spread of frequencies and incidence
directions in the incoming light.
