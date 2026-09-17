---
id: kevin-zhou-w2-p015
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-p015
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

[2] Problem 15. Many common diffraction gratings reflect light rather than transmitting it.
(a) We may crudely model a reflective diffraction grating as a mirror with N small notches, spaced
a distance d apart. The notches do not reflect light, but the rest of the mirror serves as a
source of Huygens wavelets when light is incident on the grating. Show that, unlike the
transmission gratings we considered above, the zeroth order maximum of a reflective grating
is much brighter than the others.
(b) This feature is undesirable because the zeroth order maximum is useless for distinguishing
different wavelengths. Instead, most modern diffraction gratings are blazed, as shown.
For concreteness, suppose that light is incident straight downward. How should the blaze
angle γ be chosen so that the nth order maximum is the brightest?
Reflective diffraction gratings are more flexible and more common than transmission gratings. (CDs,
DVDs, and “holographic” trading cards and stickers all use reflective diffraction gratings, and you
can even make them on chocolate.) Textbooks focus on transmission gratings largely because they
make the diagrams a little cleaner.
Solution. (a) This is like single slit diffraction: the angle θ = 0 is the only one where all the
Huygens wavelets are automatically in phase, so the maximum in that direction is much
brighter than the rest. This corresponds to ordinary, specular reflection.
(b) In this case, the direction of specular reflection is at θ = 2γ. To check this explicitly, note
that the path length difference between two points on the same slanted section, separated by
a vertical distance h, is
h
sin(θ − γ)
cos(γ)
− htan(γ)
which indeed vanishes for θ = 2γ.
On the other hand, we also know that the nth order maximum occurs at dsinθ = nλ, so
combining our results gives
γ =
1
2
arcsin(nλ/d).
[2] Problem 16 (PPP 127). When a particular line spectrum is examined using a diffraction grating
with 300lines/mm with the light at normal incidence, it is found that a line at 24.46◦ contains both
red (640−750nm) and blue/violet (360−490nm) components. Are there any other angles at which
the same would be observed?
Solution. The lines are at dsinθ = nλ with d = (1/300) mm. This results in nλ = 1380 nm, and n
must be an integer. Now, integer values of n are guessed and the values of λ that fit in the specified
wavelength ranges are nR = 2, λR = 690 nm and nB = 3, λB = 460 nm.
21
Kevin Zhou Physics Olympiad Handouts
Since the maximum value of nλ is d = 3333 nm, the only other possible value of dsinθ = nRλR =
nBλB is when nR = 4 and nB = 6, corresponding to dsinθ = 2×1380. This gives θ = 55.9◦. Larger
values of nR and nB would give no solution for θ.
