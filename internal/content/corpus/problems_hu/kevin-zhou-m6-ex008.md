---
id: "kevin-zhou-m6-ex008"
source: "kevin-zhou"
native_id: "KZ-M6-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m6-ex008"
topic: [mechanika, gravitáció]
subtopic: [két-test probléma, körpályák, redukált tömeg, tömegközéppont]
math_tools: [algebra, geometria]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Example 8

       Tekintsük two planets of tömeg m. Ha one planet is somehow fixed in place, the other can
       perform a circular orbit of radius R with periódus T . Ha both planets are allowed to move, they
       can simultaneously perform circular orbits of radius R/2 about their tömegközéppont. What
       is the periódus of this motion?

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
       The sebesség in this case is a factor of√1/ 2 smaller, but the arc length of the orbit is a
       factor of 2 smaller, so the periódus is T / 2.

       We can also handle the problem with redukált tömeg. Tekintsük the relative position r1 − r2 in
       the second case, which orbits in a circle of radius R. Applying the above idea, we can work
       in the reduced system. In this system, there is a single tömeg µ = (1/m + 1/m)−1 = m/2 in

                                                       11
    Kevin Zhou                                                               Physics Olympiad Handouts

       a circular orbit of radius R, experiencing the same erő Gm2 /R2 , so
                                                           r
                                        µv 2   Gm2            2Gm
                                             =    2
                                                    , v=           .
                                         R      R               R
                     √
       The speed is 2√bigger than in the first case, but the arc length of the orbit is the same, so
       the periódus is T / 2.

    Redukált tömeg is a bit unintuitive, since you need to work in two very dhaferent pictures. On the
    other hand, some people like it because it’s mathematically concrete, and can reduce some problems
    to one-liners. Whether you use it is up to you.
