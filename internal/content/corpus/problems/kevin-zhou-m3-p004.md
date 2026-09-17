---
id: "kevin-zhou-m3-p004"
source: "kevin-zhou"
native_id: "KZ-M3-P004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m3-p004"
topic: [mechanics]
subtopic: [momentum, energy, collisions]
math_tools: [algebra, geometry-trigonometry]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M3.txt"
source_url: "sources/kevin_zhou/site/handouts/M3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[3] Problem 4. A block of mass m is placed at rest on top of a frictionless wedge of mass M . The
    wedge rests on a frictionless horizontal table, and its sloped top makes an angle θ to the horizontal.

      (a) When the block is released, what is the horizontal acceleration of the wedge?

      (b) Assume the block starts a distance d above the table. Using results from part (a), what is the
          horizontal velocity of the block just before it reaches the floor?

        (c) Find the speed of the block after it reaches the floor by applying energy and momentum
            conservation to the entire process.

      (d) Your results for parts (b) and (c) should not match. What’s going on?


    2     Momentum
         Idea 2
         The momentum of a system is
                                                X
                                           P=        mi vi = M vCM .
                                                 i

         In particular, the total external force on the system is M aCM , and if there are no external
         forces, the center of mass moves at constant velocity.

         Example 2

         A massless rope passes over a frictionless pulley. A monkey hangs on one side, while a bunch
         of bananas with exactly the same weight hangs from the other side. When the monkey tries
         to climb up the rope, what happens?




                                                       3
Kevin Zhou                                                               Physics Olympiad Handouts


  Solution
  Remarkably, the answer doesn’t depend on how the monkey climbs, whether slowly or
  quickly, or symmetrically or not! The total vertical force on the monkey is T − mg, so the
  acceleration of the center of mass of the monkey is T /m − g. But since the tension is uniform
  through a massless rope, the acceleration of the bananas is also T /m − g. Therefore, the
  monkey and bananas rise at the same rate, and meet each other at the pulley.

  Now here’s a question for you: compared to climbing up a rope fixed to the ceiling, climbing
  up to the pulley takes twice as much work, because the bananas are raised too. But in both
  cases, isn’t the monkey applying the same force through the same distance? Where does the
  extra work come from? (The answer involves the ideas at the end of this problem set.)

  Example 3: KK 3.14 / INPhO 2014.5

  Two men, each with mass m, stand on a railway flatcar of mass M initially at rest. They
  jump off one end of the flatcar with velocity u relative to the car. The car rolls in the opposite
  direction without friction. Find the final velocities of the flatcar if they jump off at the same
  time, and if they jump off one at a time. Generalize to the case of N ≫ 1 men, with a total
  mass of mtot .

  Solution
  In the first case, by conservation of momentum, we have

                                        M v + 2m(v − u) = 0

  where v is the final velocity of the flatcar, so
                                                   2mu
                                           v=            .
                                                  M + 2m
  In the second case, by a similar argument, we find that after the first man jumps,
                                                   mu
                                           v1 =          .
                                                  M + 2m
  Now transform to the frame moving with the flatcar. When the second man jumps, he
  imparts a further velocity v2 = mu/(M + m) to the flatcar by another similar argument. The
  final velocity of the flatcar relative to the ground is then
                                                                
                                                     1         1
                             v = v1 + v2 = mu               +      .
                                                   M + 2m M + m

  It might be a bit disturbing that the final speeds and hence energies of the flatcar are
  different, even though the men are doing the same thing (i.e. expending the same amount of
  energy in their legs to jump) in both cases.

  The reason for the difference is that in the second case, the second man to jump ends up
  with less energy, since the velocity he gets from jumping is partially cancelled by the existing


                                                     4
    Kevin Zhou                                                              Physics Olympiad Handouts



       velocity v1 . So the extra energy that goes into the flatcar corresponds to less kinetic energy
       in the men after jumping, which would ultimately have ended up as heat after they slid to a
       stop. Accounting properly for the kinetic energy of everything in the system solves a lot of
       paradoxes involving energy, as we’ll see below.

       In the case of many men, by similar reasoning we have
                                                     mtot
                                              v=            u
                                                   M + mtot
       in the first case, while in the second case the answer is the sum
                                            N
                                            X mtot u         1
                                       v=                             .
                                                  N    M + (i/N )mtot
                                            i=1

       This can be converted into an integral, by letting x = i/N , in which case ∆x = 1/N and
                                              Z 1                                 
                       X          mtot u                mtot u           M + mtot
                   v=      ∆x              ≈      dx             = log               u.
                               M + xmtot       0     M + xmtot               M
                            i

       Note that this is essentially the rocket equation, which we’ll derive in a different way in M6.
