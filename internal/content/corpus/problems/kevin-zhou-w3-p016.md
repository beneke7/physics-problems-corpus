---
id: "kevin-zhou-w3-p016"
source: "kevin-zhou"
native_id: "KZ-W3-P016"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w3-p016"
topic: [optics]
subtopic: [refraction, gradient-index-optics, mirages]
math_tools: [calculus, geometry]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W3.txt"
source_url: "sources/kevin_zhou/site/handouts/W3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[1] Problem 16. Some conceptual questions about reflection and refraction.
     (a) Does the index of refraction determine the phase velocity or the group velocity?

     (b) Does a light beam of finite width get wider or narrower upon passing from air to water?
         Assume the light enters at an angle to the normal.

       Example 4

       Let the index of refraction at height h above the Earth’s surface be n(h). In terms of n(0)
       and the Earth’s radius R, what should dn/dh be at the surface so that light rays orbit in
       circles around the Earth, with constant height?

       Solution
       First, let’s ignore the curvature of the Earth. Consider a light ray moving slightly upward,
       at a small angle θ to the horizontal, experiencing index of refraction n. Over a horizontal
       distance L, it goes up by a height Lθ. At this point, it will have a different angle θ′ to the
       horizontal, and experience index of refraction n + Lθ dn/dh. Snell’s law says

                                                         dn
                                        n cos θ = n + Lθ       cos θ′
                                                          dh

       and expanding to lowest order in the small angles θ and θ′ gives
                                           n ′2             dn
                                             (θ − θ2 ) = Lθ    .
                                           2                dh
       Approximating again to lowest order gives
                                                          L dn
                                             θ − θ′ ≈ −        .
                                                          n dh
       Thus, the light ray turns through an angle of (1/n) dn/dh per unit horizontal distance. For
       the light ray to stay at a constant height over the curved Earth, this must equal 1/R, giving

                                               dn    n(0)
                                                  =−      .
                                               dh     R
       More generally, this calculation shows that light bends towards the direction with higher n.
       In the case of air, where n − 1 ≪ 1, we can rewrite this as

                                             d(n − 1)    1
                                                      ≈−
                                                dh       R
       which can plausibly occur on Earth, due to the nice coincidence that n − 1 and H/R (where
       H is the typical scale height of the atmosphere) are both of order 10−3 .

                                                     9


    Kevin Zhou                                                            Physics Olympiad Handouts

       Remark: Mirages

       There are two classes of mirages.

         • When dn/dh < 0, light rays bend down. If there is a distant object at the horizon, its
           image will appear above the horizon. This is called a “superior” mirage.

         • When dn/dh > 0, light rays bend up. Then a distant object at the horizon will appear
           below the horizon, forming an “inferior” mirage. This also applies to the sky near the
           horizon, producing the illusion of water on the ground sometimes seen in deserts.

       In air, the refractive index is close to 1, and n − 1 ∝ ρ ∝ P/T , where ρ is the air density
       and the second step used the ideal gas law. Usually we have dρ/dh < 0, since dP/dh < 0 in
       hydrostatic equilibrium, but it depends on the value of dT /dh.

         • In normal conditions, the Sun warms the ground and the hot air rises and adiabatically
           mixes the atmosphere (as discussed in T1), so that dT /dh < 0. This partially cancels the
           effect of the pressure variation, so that dn/dh is still negative but has small magnitude,
           so that mirage effects aren’t apparent.

         • In rare “thermal inversion” conditions, we have dT /dh > 0, so that dn/dh is negative
           with large magnitude, leading to strong superior mirage effects. If dn/dh is negative
           enough, it can match the value computed in example 4, allowing an observer to see
           arbitrarily far along the horizon despite the curvature of the Earth. This was the reason
           the famous Bedford Level experiment concluded the Earth was flat.

         • In hot deserts, the air near the ground is very hot, so that dT /dh < 0 with a large
           magnitude. (A strongly negative dT /dh also occurs in cold days above water, since the
           water stays warmer than the air above it.) Here the temperature gradient overpowers
           the pressure gradient, so that dn/dh > 0 and inferior mirages can occur.

       Proponents of the flat Earth hypothesis claim that the Earth only seems curved due to
       atmospheric refraction. But they have it backwards: in almost all conditions dn/dh < 0,
       which makes the Earth look less curved than it actually is.
