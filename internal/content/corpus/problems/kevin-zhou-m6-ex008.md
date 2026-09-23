---
id: "kevin-zhou-m6-ex008"
difficulty_level: 2
source: "kevin-zhou"
native_id: "KZ-M6-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m6-ex008"
topic: [mechanics, gravitation]
subtopic: [two-body-problem, circular-orbits, reduced-mass, center-of-mass]
math_tools: [algebra, geometry]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 8

       Consider two planets of mass m. If one planet is somehow fixed in place, the other can
       perform a circular orbit of radius R with period T . If both planets are allowed to move, they
       can simultaneously perform circular orbits of radius R/2 about their center of mass. What
       is the period of this motion?

       Solution
       First let’s try an explicit solution. In the first case,
                                                                  r
                                          mv 2   Gm2                  Gm
                                               =     ,      v=           .
                                           R      R2                   R
       In the second case, we have
                                                             r
                                       mv 2     Gm2       1    Gm
                                             =      , v=√          .
                                       R/2       R2        2    R
                                                    √
       The velocity in this case is a factor of√1/ 2 smaller, but the arc length of the orbit is a
       factor of 2 smaller, so the period is T / 2.

       We can also handle the problem with reduced mass. Consider the relative position r1 − r2 in
       the second case, which orbits in a circle of radius R. Applying the above idea, we can work
       in the reduced system. In this system, there is a single mass µ = (1/m + 1/m)−1 = m/2 in

                                                       11


    Kevin Zhou                                                               Physics Olympiad Handouts

       a circular orbit of radius R, experiencing the same force Gm2 /R2 , so
                                                           r
                                        µv 2   Gm2            2Gm
                                             =    2
                                                    , v=           .
                                         R      R               R
                     √
       The speed is 2√bigger than in the first case, but the arc length of the orbit is the same, so
       the period is T / 2.

    Reduced mass is a bit unintuitive, since you need to work in two very different pictures. On the
    other hand, some people like it because it’s mathematically concrete, and can reduce some problems
    to one-liners. Whether you use it is up to you.
