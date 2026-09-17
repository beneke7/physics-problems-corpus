---
id: "kevin-zhou-m2-p005"
source: "kevin-zhou"
native_id: "KZ-M2-P005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-p005"
topic: [mechanics]
subtopic: [statics, torque, center-of-mass, non-inertial-frames]
math_tools: [vector-algebra, geometry]
format: "open-ended"
kind: "problem"
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

static and has three forces acting on it. Show that in two dimensions, the lines of these forces must
    either be parallel or concurrent. This will be useful for several problems later.

        Idea 5
        The center of mass rcm of a set of masses mi at locations ri with total mass M satisfies
                                                     X
                                            M rcm =      mi ri .
                                                               i

        If a system experiences no external forces, its center of mass moves at constant velocity.

        Idea 6
        A uniform gravitational field exerts no torque about the center of mass. Thus, for the
        purposes of applying torque balance on an entire object, the gravitational force M g can
        be taken to act entirely at its center of mass. (This is a formal substitution; of course, the
        actual gravitational force remains distributed throughout the object.)

        Torque balance works in noninertial frames, as long as one accounts for the torques due to
        fictitious forces. For an accelerating frame, the −M a fictitious force never exerts a torque
        about the center of mass, so it can always be taken to act at the center of mass.

        In a uniformly rotating frame, the total centrifugal force is M ω 2 r⊥           ⊥
                                                                             cm , where rcm is the part of
        rcm perpendicular to the axis of rotation. There can be a centrifugal torque about the center
        of mass, but in simple cases (such as when the object is flat, lying in a plane perpendicular
        to ω) this vanishes, in which case the centifugal force can be taken to act at the center of
        mass. We’ll cover the Coriolis force and torque in M6.




                                                           3
Kevin Zhou                                                            Physics Olympiad Handouts


  Example 2

  Show that the tension in a completely flexible static rope, massive or massless, points along
  the rope everywhere in the rope.

  Solution
  Consider a tiny segment dℓ of the rope. Since the rope is static, the tension forces on
  both ends balance, so they are opposite. Let them both be at an angle θ to the rope
  direction. Then the net torque on the segment is (T dℓ) sin θ. Since this must vanish for
  static equilibrium, we must have θ = 0 and hence the tension is along the rope. In other
  words, flexible ropes can transmit force, but they can’t transmit torque.


                                                dℓ       θ T
                                     T

  It’s important to note that the argument above doesn’t work for a rigid rod, because the
  internal forces in a rigid object can look like the picture above. In other words, there can be
  extra shear forces from the adjacent pieces of the rod that provide the compensating torque.
  If one tried to set up forces like this in a rope, it would flex instead.

  In general, the force distribution within a massless rigid rod can be quite complicated, but if
  we zoom out, we can replace it with a single tension which does not necessarily point along
  the rod. This transmits both a force and a torque through the rod, in the sense that a torque
  is eventually exerted by whatever holds the end of the rod in place. Note that if the rod’s
  supports are free to rotate, then they can’t absorb torque, so the rod acts just like a rope,
  with tension always along it.

  Remark
  Sometimes, problem writers will intentionally not introduce any variables that are irrelevant
  to the answer. This can occur in two ways. First, the variables might just cancel out, as
  one can often see by dimensional analysis. Second, the specific values of the variables might
  not matter in the limit when they are very large or small. For instance, if a problem simply
  states a mass is “very heavy” but doesn’t give it a name like m, it is asking for the answer
  in the limit m → ∞.

  Idea 7
  To handle problems where an object is just about to tip over, note that at this moment, the
  entire normal force will often be concentrated at a point. (For example, when you’re about
  to fall forward, all your weight goes on your toes.) That often means it’s a good idea to take
  torques about this point.




                                                4
    Kevin Zhou                                                                  Physics Olympiad Handouts


       Example 3: Povey 5.6

       In problem 2, we treated the car as a point particle, but in reality it can also tip over. Suppose
       that on level ground, a car has a distance d between its left and right tires, which are both
       thin, and its center of mass is a height h above the ground. Now suppose the car turns as in
       problem 2 on a vertical wall (θ = 90◦ ) with speed v. For what v is this possible?

       Solution
       Again working in the noninertial frame of the car, force balance gives

                                                                         mv 2
                                              ffric = mg,       N=
                                                                          R
       where ffric and N are the total friction and normal forces on the four tires. Since ffric /N ≤ µ,
                                                     p
                                                 v ≥ gR/µ

       which matches the general solution to problem 2. But in that problem, we only considered
       force balance. In this extreme situation, we also have to consider torque balance, i.e. the
       possibility that the car might topple over. When the car is about to topple over, all the
       normal and friction force is on the bottom tires. About this point, we have only torques from
       gravity and the centrifugal force, giving

                                                                mv 2 d
                                                  mgh =
                                                                 R 2
                                     p
       and solving for v gives v =       2gRh/d. Toppling is less likely the higher v is, so the answer is
                                             p            √ p
                                          v ≥ gR max(1/ µ, 2h/d).

       Now here’s a puzzle for you. A motorcycle only has one set of wheels, so it is like a car with
       d → 0. But motorcyclists can perform the motion described here, in the Globe of Death,
       without toppling over. In fact, it is possible for them to do this when d = 0 exactly. How?
