---
id: "kevin-zhou-m5-p005"
source: "kevin-zhou"
native_id: "KZ-M5-P005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m5-p005"
topic: [mechanics]
subtopic: [moment-of-inertia, angular-momentum, rotational-dynamics, symmetry]
math_tools: [geometry, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M5.txt"
source_url: "sources/kevin_zhou/site/handouts/M5.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Problem 5 (F = ma 2016). The moment of inertia of a uniform equilateral triangle with mass
    m and side length a about an axis through one of its sides and parallel to that side is ma2 /8. What
    is the moment of inertia of a uniform regular hexagon of mass m and side length a about an axis
    through two opposite vertices?

    3      Rotational Dynamics
    In this section we’ll consider some dynamic problems involving rotation.

         Idea 3: Angular Momentum

         For a system of particles we define the angular momentum and torque
                                     X                 X                dL
                                 L=      ri × pi , τ =    ri × Fi , τ =    .
                                                                        dt
                                      i                    i

         Using the first part of idea 1, we may write the angular momentum of a rigid body as
                                                          1
                                            L = I ω,   K = Iω 2
                                                          2

                                                       4
Kevin Zhou                                                            Physics Olympiad Handouts

  where I is the moment of inertia about the instantaneous axis of rotation. Alternatively,
  using the second part,
                                                       1         1
                     L = ICM ω + rCM × M vCM ,      K = ICM ω 2 + M vCM
                                                                     2
                                                       2         2
  where M is the total mass; the two terms are called “spin” and “orbital” contributions.

  Both forms are useful in different situations. Systems cannot exert torques on themselves,
  provided they obey the strong form of Newton’s third law: the force between two objects is
  equal and opposite, and directed along the line joining them.

  Idea 4
  The idea above refers to taking torques about a fixed point, but often it is easier to consider
  a moving point P . Let L be the angular momentum about point P in the frame of P , i.e. the
  frame whose axes don’t rotate, but whose origin follows P around. Working in this frame
  will produce fictitious forces, since P can accelerate. Such forces act at the center of mass,
  just like gravity.

  The upshot is that if P is the center of mass, then the fictitious force in the frame of P will
  produce no “fictitious torque”. So it’s safe to use τ = dL/dt about either a fixed point, or in
  the frame of the center of mass.

  Idea 5
  There is a third, more confusing way of applying τ = dL/dt that you might rarely see:
  taking torques about the instantaneous center of rotation. In general, this doesn’t work,
  because the instantaneous center of rotation can accelerate, producing an extra fictitious
  torque as mentioned above.

  However, it turns out this procedure gives the correct answer if the object is instantaneously
  at rest. That’s why taking torques about the contact point for the spool in M2 to find the
  initial angular acceleration was valid. It wouldn’t have been valid at any instant afterward,
  after the spool had picked up some velocity.

  For more discussion of this subtlety, which isn’t mentioned in any textbooks I know of, see
  the paper Moments to be cautious of .
