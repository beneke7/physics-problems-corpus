---
id: "kevin-zhou-t1-ex006"
source: "kevin-zhou"
native_id: "KZ-T1-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-ex006"
topic: [thermodynamics]
subtopic: [kinetic-theory, equipartition, quantum-energy-levels]
math_tools: [calculus, probability-statistics]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T1-EX006

  Example 6

  A free particle in one dimension, E = p2 /2m, bouncing between two hard walls has energy
  levels En = n2 E0 for n = 1, 2, . . ., as we will show in X1. Show that the average energy at
  high temperatures is consistent with the equipartition theorem.

  Solution
                                                                       2
  The probability of being in energy level n is proportional to e−n E0 /kB T . Therefore, by
  normalizing the probability distribution, the probability itself is
                                                 2
                                           e−n E0 /kB T
                                    pn = P∞    −m2 E0 /kB T
                                                            .
                                          m=1 e




                                               11


   Kevin Zhou                                                                 Physics Olympiad Handouts



      Therefore, the average value of the energy is
                                      ∞                  P∞ 2       −n2 E0 /kB T
                                                          n=1 n E0 e
                                      X
                              ⟨E⟩ =         n2 E0 pn =    P∞ −n2 E /k T .
                                                            n=1 e
                                                                      0  B
                                      n=1

      At high temperatures, this quantum result should reduce to the classical result of the equipar-
      tition theorem. Note that at such temperatures, the typical values of n will be very high.
      Therefore, we can treat the sums over n as continuous integrals,
                                 R∞       2     −n2 E0 /kB T
                                                              R ∞ 2 −x2
                                  0 R dn n E0 e                    x e   dx
                          ⟨E⟩ ≈       ∞     −n 2 E /k T      = 0R ∞ −x2     kB T
                                     0 dn e                      0 e    dx
                                                  0  B


                                                            p
      where we switched to the dimensionless variable x = n2 E0 /kB T . Evaluating either of these
      integrals is tricky, but we can relate them using integration by parts,
                            Z ∞              Z ∞
                                                                  1 ∞ −x2
                                                                   Z
                                      2                2     x
                                x2 e−x dx =      (2xe−x dx) =           e    dx.
                             0                0              2    2 0

      Therefore, the ratio of integrals is 1/2, giving an average energy of kB T /2 as expected.
