---
id: "kevin-zhou-t1-p016"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-T1-P016"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-p016"
topic: [thermodynamics]
subtopic: [kinetic-theory, maxwell-distribution, equipartition]
math_tools: [calculus, probability-statistics]
format: "open-ended"
kind: "problem"
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

# KZ-T1-P016

[3] Problem 16. Some basic computations for ideal gases.

     (a) For an ideal gas in a box, show that the probability distribution of speeds obeys
                                                              2
                                               p(v) ∝ v 2 e−mv /2kB T

         at any point in the box, regardless of the shape of the box.

     (b) Compute the most probable speed, i.e. the location of the peak of this probability distribution.

      (c) Show that the average kinetic energy is ⟨mv 2 /2⟩ = 3kB T /2. This is a special case of the
          equipartition theorem, shown below. (Hint: you will have to do a somewhat tricky integral.
          See the example below and the examples in P1 for guidance.)

       Remark: Deriving the Maxwell Velocity Distribution

       Statistical mechanics implies that the velocity distribution in an ideal gas is
                                                          2
                                             p(v) ∝ e−mv /2kB T



                                                      9


Kevin Zhou                                                                       Physics Olympiad Handouts



  which is a three-dimensional Gaussian. This result was first derived by Maxwell, long before
  statistical mechanics was understood, using an ingenious argument.

  Suppose the ideal gas is inside a rectangular box, so that collisions with its left and right sides
  determine vx , the front and back sides determine vy , and the top and bottom sides determine
  vz . The distributions of velocities in each direction should therefore be independent, and
  identical by rotational symmetry, so that we can write

                                         p(v) = f (vx )f (vy )f (vz )

  for some function f . Moreover, by rotational symmetry, p(v) can only depend on v 2 . Taking
  the logarithm of both sides and defining g = log f , we have

                                     log p = g(vx ) + g(vy ) + g(vz )

  and the right-hand side only depends on v 2 . This is only possible if g(x) = −αx2
                                                  2
  for a constant α, which yields p(v) ∝ e−αv . (This remarkable property of Gaussian
  functions is connected to their appearance in the central limit theorem.) Finally, the value of
  α can be determined, e.g. by demanding the pressure match the ideal gas law (see example 7).

  But this trick is limited. When relativistic effects are important, the vi are not independent –
  if vx is near c, then vy and vz must be small. (Concretely, if a collision with a wall in the yz
  plane applies a relativistic impulse ∆px , then it also changes vy and vz since p = γmv.) The
  vi also aren’t independent if quantum statistics matters. For example, if the gas particles
  are fermions, as discussed in X1, then no two can be in the same state, so some final v’s are
  forbidden. So we’ll now present a different, more modern derivation, which generalizes better.

  The idea is that in thermodynamic equilibrium, time reversal symmetry implies every reaction
  is in “detailed balance”. Specifically, suppose that when two gas molecules collide elastically,
  with velocities (v1 , v2 ), they exit with velocities (v1′ , v2′ ). Then the rate at which this happens
  must be equal to the rate at which gas molecules with velocities (v1′ , v2′ ) collide, which causes
  them to exit with velocities (v1 , v2 ). (Otherwise, you could distinguish a video of the
  molecules’ dynamics from the same video played in reverse.) Therefore,

                             p(v1 )p(v2 ) |v1 − v2 | = p(v1′ )p(v2′ ) |v1′ − v2′ |

  where the relative velocity factor is present because a larger relative velocity gives more
  opportunities for collision. However, for elastic collisions, the initial and final relative
  velocities are the same, so this factor just cancels out.

  Now, by rotational symmetry we have p(v) = f (v 2 ) for some function f , so

                                       f (v12 )f (v22 ) = f (v1′2 )f (v2′2 )

  Furthermore, by energy conservation we have v12 + v22 = v1′2 + v2′2 . Then the above equation
                                                                                            2
  can only be satisfied if f is an exponential, f (x) ∝ e−αx , which again gives p(v) ∝ e−αv .




                                                       10


Kevin Zhou                                                           Physics Olympiad Handouts


  Idea 6: Equipartition Theorem

  Suppose some degree of freedom in phase space contributes to the energy by a power law,

                                       E ∝ pn or E ∝ xn .

  Then in thermal equilibrium, there is an average energy of kB T /n in this degree of freedom.
  The proof of this is just a straightforward generalization of the reasoning in problem 16(c).
  Note that the proof of the equipartition theorem is entirely classical, i.e. it holds when a
  system is adequately described by classical mechanics. It does a good job of describing the
  heat capacities of simple gases near room temperature, as you can see here.

  Here are a few important examples of the equipartition theorem.

    • A mass on a spring in one dimension has

                                               p2   kx2
                                          E=      +     .
                                               2m    2
      This involves two degrees of freedom in phase space, each with n = 2, so the average
      energy is 2(kB T /2) = kB T .

    • In problem 7 you considered a system with a linear potential energy, E(h) = mgh. This
      is a degree of freedom with n = 1, and accordingly, the average potential energy of each
      molecule is kB T .

    • An atom in a solid can be thought of as attached to its neighbors by springs. Since the
      atom is in three dimensions, this yields three copies of the first example, and hence an
      average thermal energy of 3kB T . This implies that the specific heat per atom in a solid
      is 3kB (or equivalently 3R per mole), which is called the Dulong–Petit law.

  Incidentally, because systems in thermal equilibrium are also in long-term mechanical equilib-
  rium, the virial theorem from M6 applies, and tells us the ratio between the average kinetic
  and potential energy; of course, it matches the result of the equipartition theorem. You’ll
  investigate some more key examples in the problems below.

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
