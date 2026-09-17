---
id: kevin-zhou-w3-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w3-p006
solution_type: author
source_document: solution-document-kevin-zhou-w3sol
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W3Sol.pdf."
---

[2] Problem 6. Some problems about sound waves in everyday life.
(a) Get a coffee cup with a handle and tap on the rim with a spoon. You will hear two distinct
pitches, e.g. if you tap directly above the handle, or 45◦ away from this point. Investigate
what happens for different angles. Can you explain why this happens?
(b) According to introductory textbooks, the fundamental mode for a pipe of length L and radius
r ≪ L, closed at one end and open at the other, has wavelength 4L. In reality, it’s a little bit
different because the radius is nonzero. Is the wavelength actually longer or shorter than 4L?
(c) Find a way to produce beats in real life.
Solution. (a) You should find that the pitch can be slightly lower or higher, and that it’s lower
if you tap directly above the handle, or 90◦, 180◦, or 270◦ away from it. See this nice video
for the explanation.
5
Kevin Zhou Physics Olympiad Handouts
The basic idea is that the dominant vibrational mode deforms the circular rim into an ellipse,
whose major and minor axes swap places during the oscillation. There are two possible
“polarizations” for this deformation. In one of them, the handle is on a major/minor axis, so
it moves; in the other, it is 45◦ away from these axes, so it doesn’t move. In the former case,
there is more inertia, so the frequency is lower.
(b) It’s a little bit longer. In the introductory textbook, we model the end of the pipe as an ideal
pressure node, fixed to atmospheric pressure. But in reality, the sound wave propagates a bit
out of the pipe and spreads out radially. (It won’t even “know” the pipe ended until it’s done
this.) This effect is known as the end correction, and the added length is of order r.
(c) There are a lot of ways of doing this. You could pluck strings, or use your own voice. It’s
even possible with some kinds of dinner fork.
2 Polarization
Now we’ll introduce polarization for light waves, putting the results of E7 to work.
Idea 2
The polarization of a light wave refers to the direction of its electric field; the light waves
we saw in E7 were linearly polarized. For example, a light wave traveling along ẑ with its
polarization an angle θ from the x-axis has electric field
Ex(z,t) = (E0 cosθ)cos(kz − ωt), Ey(z,t) = (E0 sinθ)cos(kz − ωt).
A polarizer lets only light of a certain linear polarization through; if light with a linear
polarization an angle θ from this axis passes through it, then a fraction cos2 θ of the energy is
transmitted. Just as light can be incoherent, it can be unpolarized; unpolarized light hitting
a polarizer loses half its energy.
