---
id: "kevin-zhou-t3-p015"
source: "kevin-zhou"
native_id: "KZ-T3-P015"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t3-p015"
topic: [thermodynamics]
subtopic: [phase-transitions, ferromagnetism, statistical-mechanics]
math_tools: [probability-statistics, calculus]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T3.txt"
source_url: "sources/kevin_zhou/site/handouts/T3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T3-P015

[4] Problem 15. [A] Here we’ll introduce a simple model for a ferromagnetic phase transition. Consider
    N electrons, which may have spins si = ±1. The energy of a configuration is
                                              X         J X
                                     E = −B       si −         si sj .
                                                       2N
                                                  i            i̸=j

    The first term represents the effect of an external magnetic field B, while the second term represents
    an interaction, with strength described by the constant J, which tries to make the spins parallel.
    (In this simple model, we suppose all distinct pairs of spins interact equally. We could also make
    spins only interact with their neighbors, but this would complicate the analysis.)
                                                      P
      (a) Define the average magnetization as m = i si /N . Find E(m), the energy in terms of m and
          the other constants in the problem.

     (b) For a fixed value of m, write down the number of states Ω(m) with that magnetization.

      (c) The probability of having a given value of m is proportional to e−βE(m) Ω(m). Argue that this
          probability is maximized for the value of m that minimizes the free energy
                                                      F = E − T S.
          Hence the equilibrium configuration minimizes the free energy. This is the statistical mechan-
          ical way to argue that F is minimized; the thermodynamic way was covered in T2.

     (d) Assuming that N ≫ 1 and using the approximation for log N ! mentioned in T2, show that
         the free energy F (m) is minimized when
                                                                            1
                                       m = tanh(βB + βJm),            β=        .
                                                                           kB T
          For a fixed B > 0, plot m(T ). This should match with Curie’s law, which you proved in T1.

      (e) For B = 0, show there exists a critical temperature Tc , above which m(T ) is zero and below
          which it is nonzero. Also, find an approximate expression for the magnetization just below Tc .

      (f) For T = Tc , find an approximate expression for m for small B.
    This is a phase transition where the material spontaneously becomes magnetized, and the simplest
    example of a phase transition which can be understood analytically. Though the results in (e) and
    (f) depend on the detailed parameters, the scalings found in these parts are universal, in the sense
    that they also apply to a wide variety of similar models.

                                                        12


    Kevin Zhou                                                               Physics Olympiad Handouts
