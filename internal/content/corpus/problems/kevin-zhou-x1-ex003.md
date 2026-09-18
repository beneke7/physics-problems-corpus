---
id: "kevin-zhou-x1-ex003"
source: "kevin-zhou"
native_id: "KZ-X1-EX003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-ex003"
topic: [quantum-physics]
subtopic: [uncertainty-principle, matter-wave-diffraction, quantum-interference]
math_tools: [dimensional-analysis]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/X1.txt"
source_url: "sources/kevin_zhou/site/handouts/X1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[4] Problem 17.     01@  IPhO 1993, problem 3. (Hint: to do the final part of this problem, you should
    not try to compare the total path lengths traversed by the electrons. That would be very hard, and
    worse, it won’t give the right answer, because the potential from the wire also affects the electrons’
    phases. Instead, you should use the facts about wavefronts mentioned in W2. That is, waves always
    propagate perpendicular to wavefronts, and all points on a wavefront have the same phase.)

    3    The Uncertainty Principle
        Idea 5: Heisenberg Uncertainty

        So far we have treated a quantum particle as having a well-defined position and momentum,
        but in reality the uncertainties in the position and momentum obey
                                                            ℏ
                                                  ∆x ∆p ≥
                                                            2
        where, as in P2, the uncertainties may be interpreted as standard deviations. The “semi-
        classical limit” used in the rest of this problem set simply corresponds to the case where the
        required uncertainty is relatively small, which is reached for energy levels n ≫ 1. Occasionally,
        Olympiad questions will ask you to use the Heisenberg uncertainty principle to make a very
        rough estimate. In these cases, the constant factors will not matter.

        Idea 6: Energy-Time Uncertainty

        There are two commonly used versions of the energy-time uncertainty principle. If the energy
        of a system is only measured for a finite time ∆t, it must have a finite uncertainty ∆E in
        its energy. In addition, if a system significantly changes its state in time ∆t, then its energy
        must have been uncertain by a finite amount ∆E. In both cases, we have
                                                            ℏ
                                                 ∆E ∆t ≥      .
                                                            2
        A third common statement of the energy-time uncertainty principle is “for a short time ∆t, a
        system can violate energy conservation by an amount ∆E”. This is wrong, because quantum
        systems always conserve energy; systems that naively seem to violate energy conservation
        simply didn’t have a well-defined energy in their initial state to begin with. However, thinking
        this way will usually get you the right answers, essentially because of dimensional analysis.

                                                       9


Kevin Zhou                                                           Physics Olympiad Handouts

  Example 3

  Consider once again a particle of mass m attached to a one-dimensional spring, with natural
  angular frequency ω. Use the uncertainty principle to estimate the minimum possible energy
  of the particle, and compare it with the result of problem 4.

  Solution
  Suppose the uncertainties in position and momentum are ∆x and ∆p. Then the potential
  energy is of order k(∆x)2 /2 and the kinetic energy is of order (∆p)2 /2m. Dropping constants,

                                          (∆p)2              ℏ2
                          E ∼ k(∆x)2 +          ≳ k(∆x)2 +
                                            m              (∆x)2 m

  where we applied the uncertainty
                            √      principle. The ground state minimizes√ the energy,
                                                                                 p which is
                      2
  achieved when (∆x) ∼ ℏ/ km. In this case, the energy is of order kℏ/ km ∼ ℏ k/m ∼ ℏω,
  which is just what we found earlier. (A similar derivation can be used to derive the energy
  of the ground state of hydrogen, along with the Bohr radius; try it!)

  Remark
  We can also “solve” the above problem with the energy-time uncertainty principle incorrectly.
  The only timescale in the problem is 1/ω, so

                                               ℏ
                                        ∆E ≳      ∼ ℏω
                                               ∆t
  so E ≳ ℏω. However, in reality the ground state has no energy uncertainty; its energy is
  simply the ground state energy. Another way of saying this is that a particle can hang out
  in the ground state forever, so ∆t is infinite and hence ∆E is zero. This incorrect derivation
  gives the right answer just because it’s the only possible answer by dimensional analysis.
  Thus, a sloppy problem might ask you to do it.

  Example 4

  Consider a single slit diffraction experiment, where photons of wavelength λ pass through a
  slit of width a. If the screen is a large distance D away, roughly how wide is the resulting
  diffraction pattern on the screen?

  Solution
  The photon has a momentum px = ℏk = h/λ, and passing through the slit necessarily gives
  it a transverse momentum uncertainty of order
                                                    ℏ
                                            ∆py ∼
                                                    a
  which means an angle uncertainty of order
                                               ∆py  λ
                                        ∆θ ∼       ∼ .
                                               px   a

                                               10


    Kevin Zhou                                                             Physics Olympiad Handouts

       Therefore, using basic geometry, the size of the pattern on the screen is
                                                           Dλ
                                            ∆y ∼ D∆θ ∼        .
                                                            a
       This is the approximate width of the central maximum for single slit diffraction, as we found
       in W2. The reason the result is the same is that light acts like a wave both classically and
       quantum mechanically; the quantum version of the derivation is just the same as the classical
       version, but with “everything multiplied by h”. What’s new about this derivation is that it
       also applies for matter particles, which have λ = h/p.

       Example 5

       The Higgs boson has a mass of 125 GeV and a lifetime of about τ = 1.6 × 10−22 s. About
       what percentage uncertainty must a measurement of a Higgs boson’s mass have?

       Solution
       Decay is a significant change in the particle’s state, and this change happens over a time τ ,
       which means the energy uncertainty is
                                          ℏ
                                   ∆E ∼     = 7 × 10−13 J = 0.004 GeV.
                                          τ
       When we measure the Higgs boson’s mass, we really measure the E = mc2 energy released
       when it decays, so the unavoidable uncertainty of the mass is ∆E/E ∼ 0.003%. (But the
       actual measured uncertainties are much higher, due to a variety of other effects.)
