---
id: "kevin-zhou-m1-p029"
source: "kevin-zhou"
native_id: "KZ-M1-P029"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-p029"
topic: [mechanics]
subtopic: [harmonic-oscillators, rotating-frames, coriolis-force]
math_tools: [differential-equations, complex-numbers]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M1.txt"
source_url: "sources/kevin_zhou/site/handouts/M1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[4] Problem 29. Consider a mass m on a table attached to a spring at the origin with zero relaxed
    length, which exerts the force
                                           F = −kr
    on the mass. We will find the general solution for r(t) = (x(t), y(t)) in two different ways.
      (a) Directly write down the answer, using the fact that the x and y coordinates are independent.
     (b) Sketch a representative sample of solutions. What kind of curve does the trajectory follow?
        (c) ⋆ Here’s a more unusual way to arrive at the same answer. Go to a noninertial reference frame
            rotating with angular velocity ω0 about the origin, so that the centrifugal force cancels out
            the spring force. In this frame, the only relevant force is the Coriolis force −2mω0 × v. Find
            the general solution in this frame, then transform back to the original frame and show that
            you get the same answer as in part (a). (This can get a bit messy; the easiest way is to treat
            the plane as the complex plane, i.e. work in terms of the variable r = x + iy.)


    4      Optimal Launching
    Finally, we’ll consider projectile motion questions that involve optimization. These are rare on the
    USAPhO, but they are quite fun problems, with occasionally very slick solutions.

         Example 8

         A bug wishes to jump over a cylindrical log of radius R lying on the ground, so that it just
         grazes the top of the log horizontally as it passes by. What is the minimum launch speed v
         required to do this?

         Solution
         Let P be the point at the top of the log. For the bug to be moving horizontally at P , energy
         conservation applied to the vertical motion gives an initial vy obeying
                                           1                         p
                                             mvy2 = 2mgR, vy = 2 gR.
                                           2
         Thus, we need to find the minimum vx for the motion to be possible. If vx is too low, the
         hypothetical trajectory of the bug will instead pass through the log. At the lowest possible
         vx , the bug’s trajectory is not just tangent to the log at point P , but also has the same radius
         of curvature (i.e. the trajectory and the log’s shape have the same first and second derivatives).

         For uniform motion in a circle of radius r, the acceleration is a = v 2 /r. Conversely, when an
         object follows a trajectory of instantaneous radius of curvature r, its acceleration component
         normal to the path must be a = v 2 /r. So applying this to the bug at P gives
                                                  v2         p
                                              g = x , vx = gR.
                                                  R


                                                        10
    Kevin Zhou                                                                Physics Olympiad Handouts



         Thus, the minimum initial speed is
                                                q           p
                                           v=    vx2 + vy2 = 5gR.

         This radius of curvature trick doesn’t come up often, but it’s cool when it does.
