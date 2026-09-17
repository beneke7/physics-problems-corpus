---
id: kevin-zhou-w2-p026
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-p026
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

[4] Problem 26. One day, somebody sent me a photo of a weird pattern on their phone.
28
Kevin Zhou Physics Olympiad Handouts
The phone was on a desk, about a meter away from the camera.
(a) Does the desk light emit a roughly continuous spectrum (typical for incandescent or good
LED lights) or a sharply peaked spectrum (typical for fluorescent or cheap LED lights)?
(b) Qualitatively explain everything about the pattern seen. In particular, explain the geometrical
pattern of the colored dots, the way the colors are distributed, why the colored dots cover the
entire phone, and why one dot is large and white.
(c) How are the pixels on the phone laid out?
(d) Roughly estimate the pixel spacing on the phone.
(e) Using a suitable source of light, such as a laser pointer, determine the resolution of your own
phone screen as accurately as possible. (You can look up relevant wavelengths of light; also
note that it won’t work with all phones; older ones may fare better.) Prepare a lab report
with a data table and an uncertainty estimate, as explained in P2, and compare your result
against the advertised value.
Solution. (a) The spectrum is sharply peaked. For a continuous spectrum, we would expect a
lot of smeared out rainbows, but instead we get separate spots that are blue, green, and red.
(There is some yellow near the center, but that’s just the green and red spots overlapping.)
(b) We’re seeing a classic diffraction pattern, where the pixels of the phone act as the spots
on a reflective diffraction grating. The colored spots are the diffraction maxima, and the
geometrical pattern of the spots tells us about the pixel layout, just as we saw in problem 13.
The blue spots are closer to the central bright white spot (the specular reflection of the desk
light) because shorter wavelength light diffracts less.
Why do the spots cover the entire phone? A tempting explanation is that the lamp light
hits the bottom-left part of the phone, where the bright white spot is, then bounces off at
various angles due to diffraction. But that is not responsible for what you see, because the
light coming out at other angles wouldn’t hit your eyes or the camera lens.
What’s really going on is that the lamp light is hitting the entire phone basically uniformly.
At each point, it bounces off the phone both specularly reflected, and at a few sharp angles
due to diffraction. The spots you see at the top of the phone are due to light that hit the top
of the phone, and then diffracted off at a downward angle, relative to the specular reflection.
29
Kevin Zhou Physics Olympiad Handouts
The white spot is just the part of the specular reflection of the lamp that hits your eye, i.e. the
extra bright zeroth order maximum discussed in problem 15.
Note that we can only see, in practice, the primary diffraction maxima; the secondary maxima
are basically invisible, which is why we didn’t worry about them in many of the problems
above. However, the primary maxima show up as spots, rather than points, because of the
nonzero size of the desk light.
(c) As in problem 13(b), the pixels are in a triangular grid. This is because pixels can each
emit only one color, and you need them in groups of three (for the red, green, and blue). A
triangular grid is a natural choice because it has threefold symmetry, as shown here.
This grid pattern is slightly obscured because there are other maxima on the phone that
don’t fit into the pattern. These are due to diffraction from the ceiling light, whose specular
reflection you can also see on the top and bottom of the phone.
(d) This is a rough estimate, because we don’t know the angle of inclination of the camera or the
dimensions of the phone. Since it’s already going to be relatively rough, we’ll also neglect the
fact that the grid is triangular, though you can account for it using the result of problem 13.
The pixel size d is effectively the slit spacing of a reflection grating, so we have d ∼ λL/∆x
where λ is the wavelength, L is the distance to the camera, and ∆x is the spacing of the
maxima on the phone’s surface. Let’s look at the maxima along a horizontal line in the picture,
since the vertical direction is stretched out by the low angle of inclination. Focusing on the
green dots, there are roughly 10 maxima along the screen’s width, which is about 10cm wide.
We are also given that the phone is about a meter away. Then
d ∼
(500nm)(1meter)
(1cm)
∼ 0.05mm
which is of the right order of magnitude.
(e) There are various ways of setting this up. To get a result with good uncertainty, it’s important
to be able to precisely measure the diffraction angle, which could be relatively small depending
on your phone. For example, you can send the laser in directly perpendicular to the phone
screen, then measure the diffraction pattern on a wall behind the laser; this gives a large
separation between the peaks. Depending on your phone, you could find a hexagonal, square,
or rectangular grid. There could also be large features superimposed on the lattice of diffraction
maxima, which correspond to small features within or between pixels. Try it and see! You
can compare the quality of your results to those of this paper, which also has nice discussion
of other phenomena involving phone screens.
30
