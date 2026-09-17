---
id: "kevin-zhou-expt-ex002"
source: "kevin-zhou"
native_id: "KZ-Expt-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-expt-ex002"
topic: [experimental-physics]
subtopic: [optical-diffraction, measurement-technique, uncertainty-reduction]
math_tools: [geometry-trigonometry]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/Expt.txt"
source_url: "sources/kevin_zhou/site/handouts/Expt.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 2

       Using a laser pointer and a ruler, how can we accurately measure the spacing of a diffraction
       grating or a double slit? How about the width of a single slit?

       Solution
       Again, the theory is straightforward, but the way the measurement is done matters.

         • A diffraction grating and double slit produce bright, separated maxima, so you should
           measure the locations of the maxima. But a single slit produces broad bands of light
           separated by minima. It’s difficult to tell exactly which point in a band has the maximum
           intensity, so you should instead measure the locations of the minima.

         • The screen and the optical element have to be parallel, to avoid distorting the pattern. (At
           the level of Olympiad experiments, this usually won’t be too hard, but for the extremely
           precise optics experiments done in research labs, alignment can take hours or even days.)

         • The laser pointer should be relatively close to the optical element. Placing it further
           away doesn’t help, and actually slightly hurts because the laser’s beam will spread out
           more, making the final measurement less precise.

         • The screen should be relatively far from the optical element, so that the things you’re
           measuring get further apart. The limiting factor is either the length of your desk/room,
           or when the laser beam gets too dim to easily see.

         • Of course, the room’s light should be off, and your eyes adjusted to dim light.

         • If the spacing is such that you can see many maxima, you should precisely measure the
           distance between two maxima at the edges of your screen, and divide by the number of
           intervals in between. This reduces the error by a factor of N , like timing multiple periods
           of a pendulum. (Measuring all of the maxima in between and plotting a line takes a lot
           longer, and won’t make the result substantially more accurate.)
