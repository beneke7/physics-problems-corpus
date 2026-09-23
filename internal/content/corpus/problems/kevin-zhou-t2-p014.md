---
id: "kevin-zhou-t2-p014"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-T2-P014"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-p014"
topic: [statistical-mechanics]
subtopic: [entropy, boltzmann-distribution, negative-temperature]
math_tools: [combinatorics, calculus]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T2-P014

[5] Problem 14. This is a long problem, but a really useful one that ties a lot of things together.
    Consider a set of N atoms, each of which may be in the ground state, with zero energy, or in an
    excited state with energy E0 . Suppose it is only known that the total energy of the system is αN E0 .

      (a) In P1, we discussed Stirling’s approximation: for large N , log N ! ≈ N log N − N . Using this
          result, show that the entropy of the system is

                                                     1                  1
                                    S = N kB α log + (1 − α) log              .
                                                     α               1−α
          Sketch the entropy as a function of α.

      (b) Using the definition of temperature, dS = d̄Q/T , show that the system has a temperature of
                                                  E0         1
                                            T =                         .
                                                  kB log(1 − α) − log α
          Sketch the temperature as a function of α. In particular, what temperature do you need to
          get α = 1/2? How about α = 1?

                                                      11


    Kevin Zhou                                                              Physics Olympiad Handouts


     (c) Show that the third law is satisfied.

     (d) Now consider just a single one of the N atoms, where the total energy of the system is αN E0
         as before. Show that the probability it is excited obeys the Boltzmann distribution.
