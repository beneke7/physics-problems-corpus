---
id: "kevin-zhou-w1-p005"
source: "kevin-zhou"
native_id: "KZ-W1-P005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w1-p005"
topic: [oscillations-and-waves]
subtopic: [waves-on-strings, dispersion, wave-propagation]
math_tools: [dimensional-analysis, complex-numbers]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W1.txt"
source_url: "sources/kevin_zhou/site/handouts/W1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[4] Problem 5. Flexible strings, ropes, and chains can display some counterintuitive
                                                                           p          behavior. Suppose
    a string carries a small traveling wave on it, moving with speed v = T /µ to the right. Then in
    the frame that’s also moving with speed v to the right, the string maintains a constant shape, while
    moving along this shape with speed v, like a snake.

      (a) In fact, this phenomenon is extremely general. Show that if we have a flexible string loop
          floating in zero gravity with any shape, then it is possible for that p
                                                                                string to move along its
          length while maintaining a constant shape, if its speed satisfies v = T /µ.

                                                        2


Kevin Zhou                                                               Physics Olympiad Handouts

In the popular “string shooter” toy, a loop of string is shot through spinning wheels with high speed
v. As a result, the string seems to levitate in the air while maintaining a constant shape. This is
partially explained by part (a), but the real explanation also involves the weight and drag forces.
Assume the string experiences a drag force f per unit length, directed against its motion.

A fit of the string’s profile to data is shown above, where the wheels are at the origin. The string
moves in the clockwise direction.
 (b) Qualitatively, how does the tension in the string vary around the loop? In particular, find
     the point P on the figure where the string has tension T = µv 2 . Also, find whether the string
     has higher tension just before or just after it goes through the wheels.
 (c) By taking measurements from the figure, estimate the drag to weight ratio f /(µg). (You may
     have to roughly eyeball some numbers. 20% accuracy is good enough.)
 (d) One interesting feature, which you can see in the video linked above, is that if you tap the
     string right below the wheels, a pulse will smoothly move to the right along the bottom of the
     string with a slow speed u. Explain why, and find an estimate for u. Assume the string has
     speed v = 15 m/s. You’ll have to eyeball some numbers again, so expect only 20% accuracy.
   Idea 2
   A sinusoidal wave has the form
                                                                     ω
                               y(x, t) = A cos(kx − ωt + ϕ),    v=
                                                                     k
   where k is the wavenumber and ω is the angular frequency. They are related to the wavelength
   and period by
                                              2π          2π
                                          k=     , ω=        .
                                               λ           T
   Sinusoidal waves will be especially useful because the wave equation is linear. Fourier analysis
   tells us that any initial condition can be written in terms of a sum of sinusoids, so if we know
   what happens to the sinusoids, we know what happens in general by superposition. This is
   just a generalization of ideas we’ve seen in M4 and E6. Just as we saw there, it can also be
   useful to promote y to a complex number, where the physical value of y is the real part; for
   a sinusoidal wave we would have y(x, t) = y0 ei(kx−ωt) .

                                                  3


    Kevin Zhou                                                              Physics Olympiad Handouts

       Remark
       Physicists almost universally use k and ω rather than λ, f , and T . A nice way of thinking of
       these variables is that they represent how quickly the phase ϕ changes, in space or time,
                                                  dϕ              dϕ
                                            k=       ,   ω=−         .
                                                  dx              dt
       If we use a little special relativity, we can even combine these into a single equation,

                                                   k µ = ∂ µ ϕ.

       The fundamental relation between particle and wave properties in quantum mechanics is

                                                   pµ = ℏk µ .

       These are the de Broglie relations, which we’ll cover in X1.
