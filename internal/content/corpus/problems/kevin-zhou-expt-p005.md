---
id: "kevin-zhou-expt-p005"
source: "kevin-zhou"
native_id: "KZ-Expt-P005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-expt-p005"
topic: [optics, experimental-physics]
subtopic: [diffraction, interference, polarization, refraction, birefringence, measurement]
math_tools: [geometry]
format: "open-ended"
kind: "problem"
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

[5] Problem 5. Get a laser pointer, a double slit, a diffraction grating, some polarizers, and a small
    block of clear plastic or glass. With this simple equipment, you can do a basic version of almost
    every kind of measurement that appears in optics labs. (You’ll need a ruler and protractor, and
    you’ll have to be creative about mounting the components, e.g. using household objects and tape.)
    Here’s a series of increasingly difficult exercises you can try.

     (a) Using the double slit, confirm that the laser light has its advertised wavelength.

     (b) Measure the slit spacing of the diffraction grating.

        (c) Measure the width of one of your hairs.

     (d) Using a polarizer with known axis of polarization, check if your laser pointer produces polarized
         light. If it does, find its axis of polarization. If it doesn’t, use the laser and polarizer together
         to measure the axis of polarization of a different polarizer.

        (e) Measure the index of refraction n of the block.

        (f) ⋆ Using the block, find the axis of polarization of an unknown polarizer. (Hint: this requires
            knowing n. See section 44.3 of Halliday and Resnick.)

     (g) ⋆ Get a block of calcite, which is by far the cheapest strongly birefringent material. (You need
        “optical” calcite, not the big, cloudy colored samples people like to use for “crystal healing”.
         It should only cost a few dollars.) Birefringent materials have a higher and a lower index of
         refraction, depending on the polarization of the light. Measure both of them.

    See the next section for some tips on carrying these measurements out accurately.


    3      Designing the Experiment
    The next step is to actually perform the experiment well. This presents two layers of subtlety. First,
    even when it’s obvious what you have to do, there are a lot of small factors that impact how good
    your result will be. Second, sometimes the experiment presents theoretical subtleties, and you’ll
    need a clever measurement strategy to get an answer at all. Let’s consider these two issues in turn.

         Example 1

         How can we accurately measure the period of a pendulum with a stopwatch?

         Solution
         We’ve already discussed this in P2 and M4, but now let’s revisit it with a practical focus.

           • Of course, you want to measure N consecutive periods and divide the total by N ,
             because that reduces the error by a factor of N . To maximize N , you should wait until
             the pendulum’s motion starts to die down, but stop before it becomes hard to see.

           • To make sure N can be sufficiently high, you should release the pendulum with a
             significant amplitude, but not so high that corrections to the small angle approximation
             will matter, at the accuracy to which you’re working.


                                                       3


    Kevin Zhou                                                              Physics Olympiad Handouts



         • To accurately time periods, you should start your stopwatch only once the pendulum is
           stably swinging, not at the moment you release it.

         • You should start and stop the stopwatch at the moment the pendulum passes by a fixed
           point near the bottom, because it moves the fastest at the bottom, so a fixed position
           accuracy yields a better timing accuracy. This is significantly more accurate than trying
           to see when the pendulum is momentarily at rest.

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
