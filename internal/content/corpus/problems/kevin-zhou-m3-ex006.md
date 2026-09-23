---
id: "kevin-zhou-m3-ex006"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-M3-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m3-ex006"
topic: [mechanics]
subtopic: [collisions, momentum, center-of-mass]
math_tools: [algebra]
format: "explanation"
kind: "example"
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

relativistic collisions covered in R2.)

    The center of mass of the system has speed
                                                m 1 v1 + m 2 v2
                                        vCM =                   .
                                                  m1 + m2
    Moreover, by momentum conservation, the center of mass never accelerates. Now we boost
    into the frame moving with the center of mass. Since the total momentum is by definition
    zero in the center of mass frame, the momenta of the particles cancel out. The only way for
    this to remain true after the collision is if we multiply their velocities by the same number.
    Energy is only conserved if this number is ±1, with the latter representing no collision at all.




                                                  10


Kevin Zhou                                                                          Physics Olympiad Handouts



  Therefore, during an elastic collision, the velocities in the center of mass frame simply reverse.
  (In the mid-1600s, Huygens started with this reasonable assumption and used it to derive
  momentum and energy conservation!) Quantitatively, the initial velocities in that frame are

                                 v1,CM = v1 − vCM ,          v2,CM = v2 − vCM .

  The final velocities in that frame are
                             ′                                ′
                            v1,CM = −v1 + vCM ,              v2,CM = −v2 + vCM .

  Finally, going back to the original frame gives the final velocities

                                 v1′ = −v1 + 2vCM ,          v2′ = −v2 + 2vCM .

  There are many special cases we can check. For example, if m1 = m2 , then the two masses
  simply swap their velocities, as if they just passed through each other. As another check,
  consider the case where the second mass is initially at rest, v2 = 0. Then
                                            m1 − m2                      2m1
                                 v1′ = v1           ,        v2′ = v1           .
                                            m1 + m2                     m1 + m2
  When m1 = m2 , the first mass gives all its velocity to the second. When m2 is large, the first
  mass just rebounds off with velocity −v1 . When m1 is large, the first mass keeps on going
  and the second mass picks up velocity 2v1 . Finally, when m1 = m2 /3, then the final speeds
  are v1′ = −v1 /2 and v2′ = v1 /2, a nice result which is worth committing to memory.

  Idea 6
  The kinetic energy of a set of masses mi with total mass M can be decomposed as
                           X1               1        X1
                                    mi vi2 = M vCM
                                                2
                                                   +    mi (vi − vCM )2
                                  2         2         2
                             i                                 i

  where the first term is the “center of mass” contribution, and the second term is the amount
  of kinetic energy in the center of mass frame. (This statement also holds for multidimensional
  collisions, if the squares are replaced with squared vector magnitudes.) The first term can be
  rewritten as P 2 /2M where P is the total momentum of the masses. Therefore, the kinetic
  energy of a system of masses with fixed total momentum is minimized when the second term
  is zero, i.e. when all the masses are traveling with the same velocity. This implies, for instance,
  that a totally inelastic collision dissipates the highest possible amount of kinetic energy.

  Example 7

  Three balls of mass M are initially at rest. Then an explosion occurs, giving the system a
  fixed total kinetic energy. What is the maximum possible fraction of this energy that one
  ball can carry by itself?




                                                        11


    Kevin Zhou                                                                    Physics Olympiad Handouts


       Solution
       Suppose we want to maximize the energy of the first ball, and let p0 be the magnitude of its
       final momentum. Since the total momentum is zero, the other two balls also have a total
       momentum of magnitude p0 . As shown in the above idea, the energy of those two balls is
       minimized if they travel at the same speed. Therefore, the optimal scenario is to have the
       first ball come out with speed v0 and have both of the other two come out the other direction
       with equal speed v0 /2. Then the first ball has 2/3 of the total energy.

       This is the simplest possible “optimal collision” problem; we’ll see more in R2. Many can be
       solved with the basic idea that some of the outgoing masses should have the same velocity.
