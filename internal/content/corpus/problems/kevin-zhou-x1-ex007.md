---
id: "kevin-zhou-x1-ex007"
source: "kevin-zhou"
native_id: "KZ-X1-EX007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-ex007"
topic: [quantum-physics, statistical-mechanics]
subtopic: [quantum-states, partition-function, casimir-effect]
math_tools: [series, calculus]
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

[3] Problem 30 (MIT). [A] This is an advanced problem that is only placed here because the final
    result is neat. An integer N can be partitioned by writing it as a sum of positive integers, and the
    partition function p(N ) is the number of unique ways this can be done. For example,

                            4=1+1+1+1=1+1+2=2+2=1+3=4

    which implies p(4) = 5. Counting the number of partitions of an integer is a very hard combinatorics
    problem, but we can get an estimate for large N using string theory.

      (a) Consider an ideal string with hard boundary conditions and fundamental angular frequency
          ω. Show that the number of distinct quantum states with energy N ℏω is p(N ).

     (b) Now suppose the string is at temperature T , where T is chosen so that the expected energy
         is N ℏω. In the thermodynamic limit N ≫ 1, find a relation between N and T . You may use
         the result ζ(2) = π 2 /6.

      (c) By approximating the entropy as S ≈ kB log p(N ), show that

                                                ℏω   d log p(N )
                                                   =             .
                                                kT       dN
          Combine this with your previous result to find an estimate for p(N ).

    To check your answer, the celebrated Hardy–Ramanujan formula (which is more accurate than the
    very rough treatment we give above) is
                                                        r     !
                                               1           2N
                                     p(N ) ∼ √    exp π         .
                                            4 3N            3

    While we only considered a simple nonrelativistic string here, calculations of this sort show up in
    the thermodynamics of string theory. For further discussion, see chapter 22 of Zwiebach.

       Example 7: Casimir Forces

       Consider an infinite uniform string, on which waves propagate with speed v. The string is
       held fixed by pins at two points separated by a distance L. When the string is in its ground

                                                    16


Kevin Zhou                                                               Physics Olympiad Handouts

  state, what is the resulting force between the pins?

  Solution
  Of course, in classical mechanics the ground state would just be y(x) = 0, and the force
  would just be the tension T . But there is an additional quantum mechanical contribution,
  which arises because each of the standing waves between the pins, with angular frequencies
  ωn = nπv/L, carries a so-called “zero point” energy ℏωn .

  As usual, force can be found by differentiating energy, F = −dE/dL. By summing up the
  zero point energy in all of the standing waves, we naively get
                                                      ∞           ∞
                                 X ℏωn          πℏv X        X
                            E=              =         n = E0   n=∞
                                  n
                                        2       2L
                                                   n=1        n=1

  which is rather unhelpful. This result is off for two reasons. First, even when there aren’t
  any pins, the string still has standing waves, and these waves also have a naively infinite
  energy density. When we move the pins a bit, we change both the zero point energy outside
  the pins and inside, by infinite amounts, but the net change is finite, giving a finite force.

  Quantitatively, the energy in between the pins due to the standing waves is
                                                      ∞
                                                      X
                                        Eplate = E0         n=∞
                                                      n=1

  and the energy we would have had there if the pins didn’t exist is the “continuous” sum,
                                            Z ∞
                                 Evac = E0       x dx = ∞.
                                                  0

  The difference should be finite, but we can’t just subtract infinity with infinity, which brings
  us to the second problem: none of these quantities are actually infinite. Any real string
  will have a finite maximum oscillation frequency – for instance, the wavelength certainly
  can’t get smaller than the atomic spacing. Alternatively, even if we had an idealized string
  where Evac was actually infinite, no real pin can perfectly block waves of all frequencies. For
  sufficiently high frequencies the waves won’t be affected by the pins, so that the sum in
  Eplate eventually behaves like the integral in Evac , leaving a finite difference between the two.

  In other words, the difference between Eplate and Evac in reality comes from only low n and
  x. Therefore, let’s “regulate” the two expressions above so that they’re unchanged in this
  regime, but match each other at high n and x. The simplest way to do this is to take
                                  ∞                     Z ∞
                                 X                                      E0
                     Eplate = E0     ne−ϵn , Evac = E0       xe−ϵx dx = 2
                                                         0               ϵ
                                  n=1

  for small ϵ. To handle the sum, let α = e−ϵ , so that

                                 Eplate /E0 = α + 2α2 + 3α3 + . . . .

                                                  17


Kevin Zhou                                                               Physics Olympiad Handouts

  Now we use the usual trick for arithmetic-geometric series. Note that

                               αEplate /E0 = α2 + 2α3 + 3α4 + . . . .

  Subtracting, we find
                                                                        α
                         (1 − α)Eplate /E0 = α + α2 + α3 + . . . =         .
                                                                       1−α
  We thus conclude that
                                        e−ϵ                 1
                          Eplate =               E0 = Evac − E0 + O(ϵ)
                                     (1 − e−ϵ )2            12

  where we used a result from P1. Finally, when we take ϵ to zero, the difference is simply
                                                             1
                                     E = Eplate − Evac = −      E0 .
                                                             12
  Differentiating gives the force,
                                                πℏv
                                            F =−
                                               24L2
  where the negative sign indicates it is attractive. Not only is this finite, it’s right!
  Experiments have measured this “Casimir force” precisely for light between two conductors,
  where v = c, and confirmed the expected results.

  You’re probably suspicious about this derivation because it depends on the arbitrary choice
  of an exponential suppression. What if the sums and integrals were regulated at high n and
  x in a different way? Shouldn’t the answer depend on the details of the string and pin?
                                                                                               2
  Remarkably, the answer is no: the regulator doesn’t matter. If you try others, such as e−ϵn
  or 1/nϵ , you’ll get the same result; you can find a general proof in chapter 15 of Schwartz’s
  Quantum Field Theory and the Standard Model. The reason is that the effect comes from
  physics at low frequencies, so it doesn’t matter how you regulate the high frequencies.

  It is for precisely this reason that you will sometimes see the mysterious equation
                                                             1
                                       1 + 2 + 3 + ... = −      .
                                                             12
  It’s not really true. Instead, what it physically means is that the difference between the
  regulated sum and integral is −1/12 for any reasonable regulator.

                                                 18
