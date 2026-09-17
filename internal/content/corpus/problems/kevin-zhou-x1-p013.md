---
id: "kevin-zhou-x1-p013"
source: "kevin-zhou"
native_id: "KZ-X1-P013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-p013"
topic: [quantum-physics]
subtopic: [quantum-harmonic-oscillator, quantum-levels, bohr-quantization]
math_tools: [calculus, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/X1.txt"
source_url: "sources/kevin_zhou/site/handouts/X1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[4] Problem 14. Consider a particle of mass m in the potential V (x, y) = kr2 /2. This is the two-
     dimensional analogue of problem 4. It is also the potential experienced by an electron in the obsolete
    “plum pudding” model of the atom, where they are embedded in a ball of uniform charge density.
      (a) By working in Cartesian coordinates, find all of the energy levels, as well as the number of
          states within each energy level, called the degeneracy.
      (b) [A] Now repeat the exercise in polar coordinates. In this case the integrals
                                               I          I
                                                  pr dr,     L dθ

          are quantized. Find the energy levels and their degeneracies. Note that for the radial motion,
          you will have to use the effective potential, as covered in M6. You will run into a difficult
          integral, so you may use the fact that
                                 Z C+√C 2 −D2     r
                                                    2C     D2
                                      √        dx        − 2 − 1 = (C − |D|)π
                                  C− C 2 −D2         x      x
          valid for |D| ≤ C. How does your answer compare to that of part (a)?

                                                       6
    Kevin Zhou                                                              Physics Olympiad Handouts

       Remark
       Sommerfeld applied an analysis like that of part (b) of problem 14 to the Bohr model,
       yielding the semiclassical orbits which are ellipses with the nucleus at the focus. (In fact, if
       you’re so inclined, you can do this too, using the same provided integral.) This accounted for
       the quantum numbers n and ℓ in hydrogen. The quantum number m comes from additionally
       quantizing Lz , which implies that the elliptical orbits can only occur in certain planes, an
       idea known as “space quantization”. Sommerfeld even managed to compute relativistic
       corrections to the energy levels.

       With all this included, the Bohr theory provides a complete description of the energy
       levels of hydrogen, except that (1) the ℓ = 0 orbitals are missing, since they would have
       to go straight through the nucleus, (2) space quantization seems artificial and breaks
       rotational symmetry, and (3) the number of states isn’t quite right, a deficiency that would
       later be fixed by including spin. Many complicated attempts were made to patch these
       problems, or to extend the theory to multi-electron atoms, but they were forgotten af-
       ter the modern theory of quantum mechanics (in terms of the Schrodinger equation) appeared.

       However, what you’ve learned above is not completely irrelevant today. The correspondence
       principle is the idea that quantum results should smoothly transition to classical ones in
       the limit ℏ → 0, which in this context means sending the quantum numbers to infinity.
       And that’s exactly what happens. For high quantum numbers, you can superpose atomic
       orbitals of nearby energy to create a sharply peaked wavefunction, just like how we could
       create wavepackets from plane waves in W1. These peaks act like localized classical particles,
       following the Bohr model’s orbits. Thus, the Bohr model is still useful for studying Rydberg
       atoms, which are hydrogen-like atoms excited to very high energy levels. For some more
       discussion of Sommerfeld’s results, see this paper.
