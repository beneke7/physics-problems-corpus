---
id: kevin-zhou-w3-p015
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w3-p015
solution_type: author
source_document: solution-document-kevin-zhou-w3sol
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W3Sol.pdf."
---

[2] Problem 15 (Japan). In the above problem, we considered shallow water waves, D ≪ λ, in which
case the motion of the water is approximately horizontal. But in general, it turns out that the
motion of the water will depend on height, and also that the individual water molecules move in
ellipses. (This happens even when the wave has small amplitude, which we will always assume; the
motion for large amplitude is even more complicated.) In the limit of deep water waves, D ≫ λ,
the water molecules move in circles. Using this fact, we can quickly derive the wave speed.
Assume the water molecules at the surface of the wave move in uniform circular motion with
radius a and angular velocity ω, as shown.
(a) Consider the frame of reference moving to the right with velocity v. In this frame, the surface
of the water is completely stationary, while molecules travel along the surface. Consider a
small parcel of water which travels from a valley to a peak. By applying conservation of
energy, derive a relationship between v, ω, and g.
(b) Find the phase and group velocity of the wave, in terms of g and the wavenumber k. In
addition, find the condition on a and k for this derivation to make sense.
Showing that circularmotion actually occurs takes more work, and involves solving partial differential
equations; you can find a complete derivation here or in the first chapter here.
Solution. (a) At the bottom of the circle, the speed is v+aω, and at the top the speed is v−aω.
However, since the parcel just moves along the surface of the water, no work is done on it
(the water effectively just provides a normal force to keep the parcel on its surface), so this
change in speed is balanced by a change in gravitational potential energy. That is,
1
2
(v + aω)2
− (v − aω)2

= 2ga
13
Kevin Zhou Physics Olympiad Handouts
which implies v = g/ω. (Note that this argument only works for sufficiently small wave
amplitudes, a < v/ω.)
(b) The thought experiment in this problem considers an ideal plane wave, so it’s computing the
phase velocity. Thus, using vp = ω/k and vp = g/ω, we have
vp =
p
g/k.
In addition, we can solve for the dispersion relation to find
ω(k) =
p
gk
from which we find the group velocity,
vg =
dω
dk
=
1
2
p
g/k.
Referring back to part (a), this derivation only makes sense if vp > aω, which is equivalent to
ka < 1. That makes sense, as when ka ≳ 1, the amplitude is large compared to the wavelength,
indicating a nonlinear wave. (If we were doing a more rigorous derivation, we would find that
the parcels of water only travel in circles in the small amplitude limit ka ≪ 1.)
As you can see, water waves are quite complex. A diagram of the speeds of nine different limiting
cases of water waves can be found in section 8.4 of The Art of Insight.
4 Reflection and Refraction
Now we’ll introduce reflection and refraction with some real-world applications.
Idea 4
If a wave hits an interface, while traveling at an angle θ1 to the normal to the interface, then
it will generically both reflect and refract. The angle of the reflected ray is also θ1, and the
angle θ2 of the refracted ray obeys n1 sinθ1 = n2 sinθ2. If there is no solution for θ2 in the
latter equation, then only reflection occurs.
These results follow directly from Huygens’ principle, so they are very general, applying to
light waves, sound waves, water waves, and so on, as long as the index of refraction ni is
always defined to be inversely proportional to the wave speed in each medium.
