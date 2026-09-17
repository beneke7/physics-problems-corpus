---
id: "kevin-zhou-w1-p020"
source: "kevin-zhou"
native_id: "KZ-W1-P020"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w1-p020"
topic: [oscillations-and-waves, mathematical-methods]
subtopic: [standing-waves, fourier-series, wave-reflection]
math_tools: [series-complex, integration]
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

[4] Problem 20. [A] The general, turn-the-crank method to find the time evolution of an arbitrary
    wave on a string of length L is Fourier series. In this method, we write the initial shape y0 (x) of
    the wave as a combination of standing waves,
                                          X          πnx
                                 y0 (x) =     cn sin     ,    0 ≤ x ≤ L.
                                           n
                                                      L

    We know how each standing wave oscillates in time, so by linearity, the entire wave evolves as
                                            X          πnx
                                 y(x, t) =      cn sin     cos(ωn t)
                                             n
                                                        L

    where ωn is the angular frequency of the nth harmonic.

      (a) The coefficients cn can be extracted by integrating y0 (x) against another sine,
                                                   Z L
                                                                         πnx
                                            cn ∝         dx y0 (x) sin       .
                                                    0                     L

          Explain why this works, and find the constant of proportionality.

     (b) Now let’s consider the plucked string considered in part (a) of problem 19. If the pluck is
         centered at the middle of the string and has height h, find the coefficients cn . (If you’re so
         inclined, you can use a computer to see how the resulting y(x, t) approaches the answer to
         problem 19 as more terms are included.)

                                                         13
    Kevin Zhou                                                                          Physics Olympiad Handouts

      (c) Argue that in general, we have
                                             Z L
                                                                  LX
                                                   y02 (x) dx =       |cn |2 .
                                              0                   2 n

          By applying this result to the plucked string, show that the Riemann zeta function has value
                                                           ∞
                                                           X 1             π4
                                                  ζ(4) =             4
                                                                       =      .
                                                                 n         90
                                                           n=1

          In fact, this is one of the simplest ways to compute ζ(4).

    We’ll use the idea of Fourier series to illustrate some conceptual points in W2.

       Idea 7
       More generally, the relation between the incoming and reflected waves may depend on the
       exact form of the incoming wave. In this case, it’s useful to consider sinusoidal solution. Let

                                             yin (x, t) = ei(kx−ωt) .

       Almost all boundary conditions will state that something at the boundary is constant in time,
       which is only possible if the reflected wave has the same frequency. So in general we have

                                            yr (x, t) = rei(−kx−ωt)

       where r is the reflection coefficient. If the medium exists for x > 0, there is also a transmitted
       wave there, of the form
                                                                ′
                                               yt (x, t) = tei(k x−ωt)
       where k ′ might differ from k, and t is the transmission coefficient. In general, both r and t
       may depend on k as well as the boundary conditions. Note that the phases of r and t depend
       on the conventions we used to define yr (x, t) and yt (x, t), though the magnitudes don’t.
