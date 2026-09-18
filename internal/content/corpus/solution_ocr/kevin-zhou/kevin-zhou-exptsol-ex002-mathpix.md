---
id: solution-ocr-kevin-zhou-exptsol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/ExptSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-expt-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
Using a laser pointer and a ruler, how can we accurately measure the spacing of a diffraction grating or a double slit? How about the width of a single slit?

Solution
Again, the theory is straightforward, but the way the measurement is done matters.

- A diffraction grating and double slit produce bright, separated maxima, so you should measure the locations of the maxima. But a single slit produces broad bands of light separated by minima. It's difficult to tell exactly which point in a band has the maximum intensity, so you should instead measure the locations of the minima.
- The screen and the optical element have to be parallel, to avoid distorting the pattern. (At the level of Olympiad experiments, this usually won't be too hard, but for the extremely precise optics experiments done in research labs, alignment can take hours or even days.)
- The laser pointer should be relatively close to the optical element. Placing it further away doesn't help, and actually slightly hurts because the laser's beam will spread out more, making the final measurement less precise.
- The screen should be relatively far from the optical element, so that the things you're measuring get further apart. The limiting factor is either the length of your desk/room, or when the laser beam gets too dim to easily see.
- Of course, the room's light should be off, and your eyes adjusted to dim light.
- If the spacing is such that you can see many maxima, you should precisely measure the distance between two maxima at the edges of your screen, and divide by the number of intervals in between. This reduces the error by a factor of $N$, like timing multiple periods of a pendulum. (Measuring all of the maxima in between and plotting a line takes a lot longer, and won't make the result substantially more accurate.)
