---
id: "kevin-zhou-w1-p017"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-W1-P017"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w1-p017"
topic: [waves, fluid-mechanics]
subtopic: [capillary-waves, phase-and-group-velocity, wave-reflection, boundary-conditions]
math_tools: [dimensional-analysis, calculus]
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

[2] Problem 17. The motion of ripples of short wavelength (less than 1 cm) on water is controlled by
    the surface tension γ and density ρ.
     (a) Find the phase velocity vp of ripples with wavenumber k, up to a dimensionless constant.
     (b) Show that vg = (3/2)vp .

    3      Reflection and Transmission
    When we considered standing waves in the previous section, we were only considering “steady state”
    behavior. Now we consider the dynamics of a wave hitting an obstacle more explicitly.

         Example 3

         Suppose a string defined for x < 0 ends at a hard wall at x = 0. Show that any wave directed
         towards the wall will be reflected back upside-down.

         Solution
         We suppose that we send in a wave of the form

                                           yin (x, t) = f (kx − ωt).

         Let the reflected wave be a general wave traveling backward,

                                           yr (x, t) = g(−kx − ωt).

         Both of these expressions only have physical meaning for x < 0, since the string only exists
         there. Now, the boundary condition is y(0, t) = 0, so we have

                                           f (−ωt) + g(−ωt) = 0.

         This tells us precisely that g = −f , so the wave is reflected upside-down but otherwise
         unchanged.

         There’s an easy way to visualize what’s going on here. We can imagine that there really is
         string for x > 0, but that the point x = 0 stays fixed for some reason. Then this situation

                                                      12


    Kevin Zhou                                                                   Physics Olympiad Handouts

       corresponds to an incoming wave coming from the left, and a flipped wave coming from the
       right. The two meet and cancel at x = 0, and the flipped wave continues on going to the
       left, where the physical string is. Fundamentally, this story works for the same reason as the
       method of images in electromagnetism: as long as you satisfy the boundary conditions, you
       can do whatever you want beyond the boundary.
