---
id: "kevin-zhou-w2-p010"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-W2-P010"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w2-p010"
topic: [optics]
subtopic: [diffraction-grating, interference, fourier-optics]
math_tools: [complex-numbers, series]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W2.txt"
source_url: "sources/kevin_zhou/site/handouts/W2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[3] Problem 10. For practical applications of diffraction gratings, we usually focus on the intensity
    maxima. However, around each maximum there are also secondary maxima.

     (a) Argue that the first minimum occurs when there is a phase difference of 2π/N between
         adjacent slits, then compute its angle. This is easiest to see using phasors, i.e. by drawing the
         individual terms in the amplitude A as vectors in the complex plane.

     (b) Show that each secondary maximum is half as wide as the central maximum.

      (c) Let the intensity at the central maximum be I0 . Assuming N ≫ 1, use phasors to show that
          the intensity at the k th adjacent secondary maximum is roughly I0 /((k + 1/2)2 π 2 ).

    This final result shows that in general, the secondary maxima are much dimmer, and can be
    neglected; we will ignore them for almost all problems below.

       Example 5

       Use the previous example to get the interference pattern for a single wide slit of width a.

       Solution
       We can think of a single slit as the limit of a diffraction grating with N d = a, where N → ∞
       and d → 0. Taking these two limits simultaneously is a bit delicate. Starting with our
       previous result
                                                  sin(N kd sin θ/2)
                                             A∼
                                                   sin(kd sin θ/2)

                                                      8


Kevin Zhou                                                           Physics Olympiad Handouts

  we may substitute N d = a in the numerator. Only d remains in the denominator, so the
  d → 0 limit allows us to use the small angle approximation. We thus have

                                           sin(ka sin θ/2)
                                      A∼                   .
                                              kd sin θ/2

  But as d → 0 the expression blows up, because we’re taking the number of slits to infinity
  while keeping the amplitude from each slit constant. To get a consistent limit, we normalize
  by dividing the amplitude by N , giving N d = a in the denominator for
                                         sin β        ka sin θ
                                    A∼           β=
                                           β             2
  The amplitude is proportional to the sinc function, shown below.

  What we’re really doing here is zooming in on the central maximum of the diffraction grating;
  the other maxima have been removed by sending the slit spacing to zero.

  Remark: Uncertainty Principle

  There’s a neat way to rephrase our results. In the far field limit and small angle approxima-
  tion, an opening at height z gives a wave with amplitude ei(k/D)yz at height y on the screen.
  If we think of a “slit function” f (z) which is equal to one at holes and zero elsewhere, then
  the amplitude A(y) at the screen is simply the Fourier transform of f (z)! Phasors are just a
  visual way to compute the Fourier transform.

  We won’t use this language explicitly below, but it can add some intuition if you know
  it. For example, we know from W1 that the products of the widths of any function and
  its Fourier transform are bounded. For example, a wavepacket of width ∆x with Fourier
  components of width ∆k obeys ∆x ∆k ≳ 1.

  In this case, the Fourier pair is screen height y and the scaled slit height (k/D)z. (Don’t
  get confused with the notation here; now k is fixed while z varies.) Hence the uncertainty
  principle says
                                                 D
                                        ∆y ∆z ≳     ∼ Dλ
                                                  k
  which you can check holds for all the examples we’ve seen so far. The uncertainty prin-
  ciple provides a simple explanation for why making the slits narrower makes the pattern wider.

                                                 9


Kevin Zhou                                                              Physics Olympiad Handouts

  In fact, this is equivalent to the Heisenberg uncertainty relation ∆y∆py ≳ ℏ for photons
  passing through the slit, as you can verify. This makes sense, as we should be able to calculate
  the diffraction pattern in terms of either the whole light wave, or in terms of what happens
  to each of the photons in the light wave.

  Remark
  If we take the limit a → ∞ for the single slit, the central maximum becomes an infinitely
  sharp, bright point. But in reality, a light will just uniformly illuminate the screen.

  The problem is that when a gets too high, the approximations of Fraunhofer diffraction break
  down, and we must switch to Fresnel diffraction. Fresnel diffraction augments Fraunhofer
  diffraction with two additional effects.

     1. The amplitude of each wavelet falls off as 1/r.

     2. The amplitude of each wavelet is proportional to the “obliquity factor” (1 + cos θ)/2,
        where θ is the angle from its original forward direction of propagation. (Strictly speaking,
        this factor appears in Fraunhofer diffraction too, but in that case it’s not too important,
        because all the wavelets that reach a given point of the screen have about the same θ.)

  Both effects matter, but it suffices to consider the first to fix the problem. This amplitude
  falloff implies that in the case a ≫ D, the illumination at each point on the screen mostly
  comes from points on the slit within a distance D, not from the entire slit. Since every point
  on the screen can see such a range of points, the screen is uniformly illuminated.
