---
id: "kevin-zhou-x1-ex002"
source: "kevin-zhou"
native_id: "KZ-X1-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-ex002"
topic: [quantum-physics]
subtopic: [quantum-harmonic-oscillator, coupled-systems, degeneracy, density-of-states]
math_tools: [linear-algebra, algebra]
format: "explanation"
kind: "example"
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

[3] Problem 15 (Cahn). A crude model of an electron bound to an atom is a particle of mass      p m
    attached to a one-dimensional spring, with spring constant k and hence angular frequency ω = k/m.
    Consider two such atoms.

     (a) Write down the energy levels of the system, assuming the atoms are completely independent.
         How many states correspond to each energy?

     (b) Let the electrons have positions xi relative to their respective equilibrium positions. Now
         suppose the atoms are brought close together, causing the electrons to repel. For simplicity,
         we represent this in terms of an extra potential energy term k ′ x1 x2 , where k ′ is small. Find
         the new energy levels of the system exactly. (Hint: this can be done with a clever change
         of variables. However, you have to be careful because changing to new coordinates x′i also
         requires changing the momenta; after all, if we didn’t, then the quantization condition of
         idea 2 would change, leading to different energy levels! If K is the kinetic energy, and you are
         using position variables xi , then the momenta should be defined as pi = ∂K/∂ ẋi .)

      (c) Your answer should not make sense for large k ′ . Physically, what is going on?

    Part (b) gives a simple example of how energy levels “split” in the presence of interactions.

                                                      7
Kevin Zhou                                                              Physics Olympiad Handouts

  Example 2

  A nonrelativistic particle of mass m is in a cubical box with side length L and hard walls.
  Find the approximate number of quantum states with energy at most E0 , where E0 is large.

  Solution
  Using the same reasoning as in previous problems, we apply “hard wall” boundary conditions,
  requiring the wavefunction to go to zero at the boundary. Thus, the wavefunction is
                                  ψ ∝ sin(kx x) sin(ky y) sin(kz z)
  where
                                         π
                                  ki =     ni ,   ni positive integer
                                         L
  and the energy is
                                                p2     ℏ2 k 2
                                          E=        =         .
                                                2m      2m
  The simplest way to proceed is to think in terms of “momentum space”, an abstract space
  whose axes are px , py , and pz . The allowed states form a grid in the first octant of momentum
  space, with a volume of (πℏ/L)3 for each state. The surface E = E0 corresponds to a sphere
            √
  of radius 2mE0 . Therefore the number of states with energy at most E0 is approximately
                                                           −3
                                       1 4            3/2       πℏ
                                  N=         π(2mE0 )                .
                                       8 3                      L
  Now let’s solve the problem a slightly different way: suppose the box has periodic boundary
  conditions, so that the right side is identified with the left side, and so on. In this case, the
  wavefunctions can all be written in the form
                                   ψ ∝ exp(i(kx x + ky y + kz z))
  but now the allowed values of the wavenumbers are
                                            2π
                                      ki =     ni , ni integer.
                                            L
  The allowed states form a grid in all of momentum space, not just the first octant, with a
  volume of (2πℏ/L)3 for each state. That is, while the volume around each state is eight times
  as large, the states now occupy eight octants instead of one. Then the overall density of
  states is still the same, and the number of states with energy at most E0 is approximately
                                                           2πℏ −3
                                                             
                                         4          3/2
                                  N=       π(2mE0 )
                                         3                  L
  which matches the result for hard walls. The point of this computation is to show that
  when we care about the statistical properties of many states, the boundary conditions won’t
  matter. In practice, you’ll see both kinds of boundary conditions quite often.

  If you find the differences between the two boundary conditions confusing, you’re not alone.
  In his original derivation of blackbody radiation, Lord Rayleigh used “hard wall” boundary
  conditions but also allowed negative ni , leading to a factor of 8 error. Jeans corrected it,
  which is why the result is now called the Rayleigh–Jeans law.

                                                    8
    Kevin Zhou                                                                Physics Olympiad Handouts
