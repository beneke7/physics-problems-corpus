---
id: kevin-zhou-w2-p008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-p008
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

[2] Problem 8. Newton’s rings are an interference pattern formed when a lens is placed on a flat
glass surface and illuminated from above by light of wavelength λ. For concreteness, suppose the
side of the lens touching the surface is spherical, with radius of curvature R. When viewed from
above, one sees an interference pattern with circular fringes.
The most important reflection paths are (1) reflection off the top surface of the lens, (2) reflection
off the bottom surface of the lens, and (3) reflection off the flat surface. However, the first reflection
path has a very different path length from the other two, which means it won’t give rise to visible
interference fringes, as explained in the remark above. Instead, the first reflection path just adds
some background intensity everywhere, preventing the dark fringes from being perfectly dark. Thus,
in this problem we’ll only consider the second and third paths.
(a) Explain why the center of the pattern is dark.
8
Kevin Zhou Physics Olympiad Handouts
(b) Find the radii of the bright and dark fringes, i.e. the values of r where there is a local minimum
or maximum of the intensity. For simplicity, assume r ≪ R.
Solution. (a) Consider light that comes in very close to the center. Then paths (2) and (3) have
almost the same path length, but path (2) has reflection from glass to air, which comes with
no phase shift, and path (3) has reflection from air to glass, which comes with a π phase shift.
Therefore, the paths destructively interfere, and the center is dark.
(b) Since r ≪ R, we can approximate the light as going straight up and down. Putting the origin
at the place the lens and flat surface touch, the equation of the lens’s curved surface is
r2
+ (y − R)2
= R2
where r is the distance from the axis of symmetry. We thus have
r2
= 2yR − y2
.
We know that r ≪ R, so for the left-hand side to match the right-hand side, we must have
y ≪ R, which in turn implies the y2 term is negligible. Dropping it gives
y ≈
r2
2R
.
The path length difference is 2y, and we have an extra π phase shift as explained in part (a),
so the condition for destructive interference is
r2
R
= nλ, r =
√
nλR
while the condition for constructive interference is
r2
R
= (n + 1/2)λ, r =
p
(n + 1/2)λR.
This is a practical way to quickly check how spherical a lens really is.
[3] Problem 9 (Kalda). A hall of a contemporary art installation has white walls and a white ceiling,
lit with a monochromatic green light of wavelength λ = 550nm. The floor of the hall is made of
flat transparent glass plates. The lower surfaces of the glass plates are matte and painted black; the
upper surfaces are polished and covered with thin transparent film. A visitor standing in the room
will see circular concentric bright and dark strips on the floor, centered around himself. A curious
visitor observes that the stripe pattern depends on their height, and upon lowering themselves, sees
a maximum of 20 stripes. The film’s index of refraction is 1.4 and the glass’s is 1.6. Determine the
thickness of the film.
Solution. Both rays will bounce off a hard surface, so the phase shift due to that will be ignored.
All that will be considered is the difference in optical path lengths.
9
Kevin Zhou Physics Olympiad Handouts
Note that sinα = nsinβ. For the immediately reflected ray, it will travel through L1 = wsinα,
and tanβ = (w/2)/t, so L1 = 2ttanβ sinα. For the ray that goes through the film, it will travel by
L2 = 2nt/cosβ where n = 1.4, so the path length difference is
∆L =
2nt
cosβ
−
2tsinβ sinα
cosβ
= 2nt
1 − sin2
β
p
1 − sin2
β
= 2t
p
n2 − (nsinβ)2 = 2t
p
n2 − sin2
α.
So ∆L ranges from 2tn to 2t
√
n2 − 1. Constructive interference is where ∆L = λk with k as an
integer. Thus for this situation, there are 20 values of λk that fit between 2t
√
n2 − 1 and 2tn, thus
2tn − 2t
√
n2 − 1 ≈ 20λ, giving
t ≈
20λ
2(n −
√
n2 − 1)
≈ 13 µm.
3 Diffraction
Next, we turn to diffraction.
