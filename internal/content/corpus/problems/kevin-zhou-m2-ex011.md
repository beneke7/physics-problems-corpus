---
id: "kevin-zhou-m2-ex011"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-M2-EX011"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-ex011"
topic: [mechanics]
subtopic: [elasticity, springs, center-of-mass]
math_tools: [calculus, integration, differential-equations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

There are many ways to solve this problem, but I’ll give one that reliably works for
   me. We’re going to use the Lagrangian approach, and avoid confusion with the Eulerian
   approach by breaking the spring into discrete pieces. Let the spring consist of N ≫ 1
   pieces, of masses m/N , spring constants N k, and relaxed lengths L/N . Our expressions
   are going to contain sums, which we’ll replace with integrals using the method described in P1.

   The ith spring from the bottom has tension (i/N )mg, and thus is stretched by
                                                 1 i      mg
                                    ∆Li =            mg =      i.
                                                kN N      kN 2
   The total stretch is
                                  N                  Z N
                                  X           mg                      mg
                                        ∆Li =                i di =      .
                                              kN 2       0            2k
                                  i=1

   This makes sense, since the average tension is mg/2. To find the center of mass, note that
   the j th spring is displaced downward by a distance
                                          N
                                                                   j2

                                          X           mg
                                  ∆yj =         ∆Li =            1− 2
                                                      2k           N
                                          i=j

   downward from its position in the absence of gravity. The center of mass displacement is
                         N         N             Z N
                                         j2

                       1 X       1 X           1                    2
                ∆ycm =     ∆yj ∝       1− 2 = 3      N 2 − j 2 dj =
                       N         N       N    N 0                   3
                            j=1            j=1

   so restoring the proportionality constant gives
                                                         mg
                                                ∆ycm =      .
                                                         3k


                                                    17


    Kevin Zhou                                                              Physics Olympiad Handouts



        If you want to test your understanding of slinkies, you can also try doing this problem with
        the Eulerian approach. This would be best done without discretization. The first steps would
        be finding a relation between the density ρ(z) and tension T (z) from Hooke’s law, and finding
        out how to write down local force balance as a differential equation.
