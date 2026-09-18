---
id: "kevin-zhou-t1-ex010"
source: "kevin-zhou"
native_id: "KZ-T1-EX010"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-ex010"
topic: [thermodynamics, statistical-mechanics]
subtopic: [kinetic-theory, equipartition, momentum-conservation]
math_tools: [probability-statistics, algebra]
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

# KZ-T1-EX010

      Example 10

      A box of mass M contains an ideal gas consisting of many particles, with total mass Mg .
      Find ⟨Vx2 ⟩, the average mean-square velocity of the box along the x-axis.

      Solution
      This problem illustrates how kinetic theory can get very subtle, even when we don’t have to
      keep track of the detailed collision dynamics. First, note that if each gas molecule has mass
      m, then each one has ⟨vx2 ⟩ = kB T /m by equipartition. Now there are two simple arguments
      that give different answers.
         1. If we apply equipartition of energy to the box itself, we get ⟨Vx2 ⟩ = kB T /M .

         2. The total momentum of the box and gas together is zero, so
                                                              N
                                                              X
                                                M Vx = −m           vx,i .
                                                              i=1

            On the other hand, by the rules of error propagation introduced in P1,
                                *       N
                                                !2 +
                                       X                    kB T
                                    m      vx,i      = m2 N       = kB T Mg
                                                             m
                                          i=1

            which implies
                                                            Mg
                                                 ⟨Vx2 ⟩ =      kB T.
                                                            M2


                                                     17


Kevin Zhou                                                                     Physics Olympiad Handouts



  What’s going on? It actually turns out that both of these arguments are wrong in general,
  but each one is correct in different limiting cases.

  The problem with the first argument is that the derivation of equipartition of energy assumes
  that each degree of freedom is independent of the others, i.e. it ignores the fact that when
  the box picks up momentum, the gas must have a compensating opposite total momentum.
  The problem with the second argument is that it assumes the velocities of the molecules are
  independent of each other, which is also not quite true.

  Note that the energy and momentum of the box are related by E = P 2 /2M . Now, if the
  box is heavy, M ≫ Mg , it can store lots of momentum even when it has very little energy,
  and conversely when it has a decent amount of energy it must have an enormous momentum.
  The latter implies that the first argument fails. But the second argument works, because the
  box serves as a “sink” for momentum. For example, the gas molecules could all be moving
  to the right, and that would be easily compensated by the box moving slightly to the left.

  If the box is light, M ≪ Mg , then it can have lots of energy even having negligible momentum.
  In this case, the first argument works, because the box doesn’t ever have enough momentum
  to substantially affect the gas’s behavior. But the second argument fails, because if the box
  can’t carry much momentum, then the gas molecules’ momenta must almost entirely can-
  cel out among themselves by momentum conservation, meaning that they are not independent.

  The general solution can be found with a simple trick. The problem with the equipartition
  argument is essentially that we treat the box velocity Vx as independent of the center of mass
  velocity of the gas, v x . We can therefore switch to the variables
                                     Mg v x + M V x
                             vCM =                  ,    vx,rel = Vx − v x .
                                      Mg + M
  These two new variables are independent, because the momentum conservation constraint
  just says the former is always equal to zero. Thus, we can safely apply equipartition of energy
  to vrel . Recalling the reduced mass idea from M6, we have
                                     1 2                   M Mg
                                  E ⊃ µvx,rel ,     µ=           .
                                     2                    M + Mg
  By equipartition we have
                                             2          kB T
                                           ⟨vx,rel ⟩=
                                                         µ
  and by momentum conservation we conclude
                                        2
                        2        Mg         2        kB T Mg
                     ⟨Vx ⟩ =              ⟨vx,rel ⟩=
                               M + Mg                 M M + Mg
  which reduces to the two answers found above in the appropriate limits. This problem turns
  out to be relevant to astrophysics, where it is a toy model for the dynamics of a supermassive
  black hole in a galaxy. For a complete analysis which starts from the postulates of kinetic
  theory, see this paper.


                                                  18


Kevin Zhou                                                            Physics Olympiad Handouts
