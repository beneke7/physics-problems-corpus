---
id: kevin-zhou-w3-p007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w3-p007
solution_type: author
source_document: solution-document-kevin-zhou-w3sol
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W3Sol.pdf."
---

[3] Problem 7. A simple polarizer contains many very thin, closely spaced wires. If the wires are
vertical, they block vertical electric fields, allowing only horizontally polarized light to go through;
this is a horizontal polarizer. One can similarly make diagonal and vertical polarizers.
(a) Suppose that perfectly monochromatic, but unpolarized light is incident on a double slit. (In
this case, assume “unpolarized” means that at each instant in time, the polarization of the
light passing through each slit is the same, but over longer timescales that polarization can
vary.) What does the intensity pattern on the screen look like?
(b) Next, suppose a vertical polarizer is placed in front of one slit, and a horizontal polarizer is
placed in front of the other slit. Now what does the intensity pattern look like?
(c) Finally, we further modify the setup of part (b) by placing many diagonal polarizers, at 45◦
to the vertical and horizontal, right in front of the screen. What does the intensity pattern
on the screen look like now?
(d) On an unrelated note, suppose we wish to rotate the polarization of linearly polarized light by
using N ≫ 1 intermediate polarizers. What’s the best way to do this, and what’s the fraction
of light that passes through the stack?
6
Kevin Zhou Physics Olympiad Handouts
Solution. (a) It’s just an ordinary double slit interference pattern. Since the light goes through
the slits with the same polarization at each moment, it shows up at the screen with the same
polarization at each moment. Then the amplitudes directly add, yielding interference effects.
(b) Let’s let the horizontal and vertical directions be x and y. Then at a given point on the
screen, the light from one slit gives Ex and the light from the other slit gives Ey. The intensity
is proportional to E2
x + E2
y, so the intensities just add, with no interference term. So the
interference pattern is completely destroyed. The general point is that stable interference
patterns can only exist when the things you’re interfering have all the same properties.
(c) The amplitude of the diagonal light is now (Ex/
√
2)+(Ey/
√
2), so the intensity at the screen
is now proportional to (Ex + Ey)2, so it’s now possible to see some interference effects again.
However, it’s not perfect. For example, if the light entering the slits was horizontal at some
moment, then it would get totally blocked at one slit, so the result shows no interference
pattern. The same is true if the light entering the slits is vertical. However, if the light entered
the slits polarized at 45◦ to the vertical, then its amplitude would get penalized by the same
factor of 1/
√
2 at each slit, and at the screen we would get a perfect interference pattern. In
practice, the incoming polarization of “unpolarized” light rapidly changes over time, so on
average we get a partially visible interference pattern, i.e. there are still minima and maxima
but the minima don’t have zero intensity.
This is an interesting result because you might think, based on the result of part (b), that
polarizers can only destroy interference patterns; however, adding more of them at the screen
can actually bring them back!
Exactly the same logic can be used to explain the famous “delayed choice quantum eraser”. In
popular science articles, people often say this experiment proves that quantum mechanics can
“rewrite the past”. But it’s really just a tricky interference effect that also shows up classically.
(d) For a small misalignment, the fraction of intensity lost goes up quadratically with the mismatch
in angle, so we should have the polarizers uniformly spaced by angle θ/N. Then each filter
multiplies the intensity by cos2(θ/N) ≈ 1 − θ2/N2, so the overall intensity is multiplied by

1 −
θ2
N2
 N
≈ exp

−
θ2
N

.
In the limit N → ∞, no intensity is lost. So in principle you can rotate polarization this way,
though it’s better to just use a half-wave plate, which will be described below.
Idea 3
For a plane wave propagating along the z-axis with general polarization, it’s useful to write
E(z,t) = Re

E0 ei(kz−ωt)

where E0 is a complex two-component vector, describing both its amplitude and polarization.
For example, if E0 = E0 x̂, the light wave is horizontally polarized, if E0 = iE0 x̂, it’s
horizontally polarized with a phase shifted by π/2, if E0 = E0 ŷ it’s vertically polarized, and
if E0 = E0 (x̂ + ŷ)/
√
2 it’s diagonally polarized.
7
Kevin Zhou Physics Olympiad Handouts
When linear polarizations are combined with a relative phase, the result is circular (or more
generally, elliptical) polarization. For example, when E0 = E0(x̂ + iŷ)/
√
2, we have
Ex(z,t) =
E0
√
2
cos(kz − ωt), Ey(z,t) = −
E0
√
2
sin(kz − ωt)
which is a circularly polarized light wave; the electric field at a fixed point rotates in a circle
over time, and if one draws the electric field vectors in a line along k̂, they trace out a spiral.
Birefringent materials, which have different indices of refraction in different directions, cause
such phase shifts, and thus can convert linear polarizations into other polarizations.
