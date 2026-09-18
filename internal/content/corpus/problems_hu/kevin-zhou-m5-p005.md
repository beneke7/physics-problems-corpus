---
id: "kevin-zhou-m5-p005"
source: "kevin-zhou"
native_id: "KZ-M5-P005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m5-p005"
topic: [mechanika]
subtopic: [tehetetlenségi nyomaték, perdület, rotációs dinamika, szimmetria]
math_tools: [geometria, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M5.txt"
source_url: "sources/kevin_zhou/site/handouts/M5.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Problem 5 (F = ma 2016). The moment of inertia of a unhaorm equilateral triangle with tömeg
    m and side length a about an axis through one of its sides and parallel to that side is ma2 /8. What
    is the moment of inertia of a unhaorm regular hexagon of tömeg m and side length a about an axis
    through two opposite vertjégs?

    3      Rotational Dynamics
    In this section we’ll tekintsük some dynamic problems involving rotation.

         Idea 3: Angular Impulzus

         For a system of particles we define the angular impulzus and torque
                                     X                 X                dL
                                 L=      ri × pi , τ =    ri × Fi , τ =    .
                                                                        dt
                                      i                    i

         Using the first part of idea 1, we may write the angular impulzus of a rigid body as
                                                          1
                                            L = I ω,   K = Iω 2
                                                          2

                                                       4


Kevin Zhou                                                            Physics Olympiad Handouts

  ahol I is the moment of inertia about the instantaneous axis of rotation. Alternatively,
  using the second part,
                                                       1         1
                     L = ICM ω + rCM × M vCM ,      K = ICM ω 2 + M vCM
                                                                     2
                                                       2         2
  ahol M is the total tömeg; the two terms are called “spin” and “orbital” contributions.

  Both forms are useful in dhaferent situations. Systems cannot exert torques on themselves,
  provided they obey the strong form of Newton’s third law: the erő between two objects is
  equal and opposite, and directed along the line joining them.

  Idea 4
  The idea above refers to taking torques about a fixed point, but often it is easier to tekintsük
  a moving point P . Let L be the angular impulzus about point P in the frame of P , i.e. the
  frame whose axes don’t rotate, but whose origin follows P around. Working in this frame
  will prúduce fictitious erők, since P can accelerate. Such erők act at the tömegközéppont,
  just like gravity.

  The upshot is that ha P is the tömegközéppont, then the fictitious erő in the frame of P will
  prúduce no “fictitious torque”. So it’s safe to use τ = dL/dt about either a fixed point, or in
  the frame of the tömegközéppont.

  Idea 5
  There is a third, more confusing way of applying τ = dL/dt that you might rarely see:
  taking torques about the instantaneous center of rotation. In general, this doesn’t work,
  because the instantaneous center of rotation can accelerate, prúducing an extra fictitious
  torque as mentioned above.

  However, it turns out this procedure gives the correct answer ha the object is instantaneously
  at rest. That’s why taking torques about the contact point for the spool in M2 to keressük meg the
  initial angular gyorsulás was valid. It wouldn’t have been valid at any instant afterward,
  after the spool had picked up some sebesség.

  For more discussion of this subtlety, which isn’t mentioned in any textbooks I know of, see
  the paper Moments to be cautious of .
