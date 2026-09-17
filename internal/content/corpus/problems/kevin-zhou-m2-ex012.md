---
id: "kevin-zhou-m2-ex012"
source: "kevin-zhou"
native_id: "KZ-M2-EX012"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-ex012"
topic: [mechanics]
subtopic: [statics, torque, virtual-work]
math_tools: [geometry-trigonometry, calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

18
Kevin Zhou                                                               Physics Olympiad Handouts



   Similarly, by considering the second marked vertex, we have F⊥,2 = T sin θ2 .

   Eliminating T and using the law of sines gives

                                          r1 F⊥,1 = r2 F⊥,2 .

   Of course, this is precisely the statement of torque balance about the pivot. And if you
   continue along this line of reasoning, letting the forces be arbitrary, you can also derive the
   rotational form of Newton’s second law, τ = Iα, for this system.

   Remark
   So why are torques necessary? Torque isn’t a necessary tool for single point particles or
   very simple rigid bodies. But in a general rigid body, the internal forces which maintain
   their rigidity are very complicated, and torques let us avoid having to think about these forces.

   For example, consider a rigid bar supported at its ends. The middle of the bar doesn’t
   collapse, despite the force of gravity on it, because the bar contains internal, upward shear
   forces, which transmit the normal forces applied at its end throughout the rest of the bar.
   But to analyze such systems without using torque, one would have to account for all of these
   microscopic forces, acting on all of the rod’s infinitely many pieces. With torque, we can
   compute useful information (such as the normal forces at each support) without much effort.

However, given how complicated internal forces can be, you might be wondering why torque balance
even works in general. The simplest explanation is the principle of virtual work.

   Idea 12: Principle of Virtual Work

   To determine if a system is in static equilibrium, we consider each way the system could
   move. For each such way, we consider how much work would be done if the system moved a
   little bit in that way. (This motion is just in our heads, so we call it a “virtual displacement”
   which corresponds to a “virtual work”.) The system is in static equilibrium if the virtual
   work vanishes for every possible virtual displacement.

   If we apply the principle of virtual work to translational motion, then we get force balance,
   since dW = F dx. If we apply it to rotation about a pivot, then we get torque balance, since
   dW = τ dθ. However, as we’ll see below and in M4, the principle of virtual work can also be
   applied to more exotic displacements. It is particularly useful when applied to systems with
   a lot of parts but also a lot of constraints, so that they can only move in a few ways. The
   converse of the principle of virtual work can also be useful: if you know a system is in static
   equilibrium, you can use it to deduce an unknown force.

   Example 13: Roberval Balance

   Consider the following scale made of rigid bars. The joints ensure that the quadrilateral in
   the middle always remains a parallelogram, with its left and right sides vertical.



                                                  19
    Kevin Zhou                                                              Physics Olympiad Handouts




        If identical weights are placed on each horizontal arm as shown, can the system remain static?

        Solution
        There’s only one way for the system to move: the rectangle can deform into a parallelogram
        so that the left horizontal arm moves up, and the right horizontal arm moves down by the
        same amount. Then the total virtual work done on the scale by the weights is zero, so the
        system can be in equilibrium no matter where on the arms the weights are placed.
