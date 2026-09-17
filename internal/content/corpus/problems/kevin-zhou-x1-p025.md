---
id: "kevin-zhou-x1-p025"
source: "kevin-zhou"
native_id: "KZ-X1-P025"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-p025"
topic: [quantum-physics, thermodynamics]
subtopic: [bose-einstein-statistics, blackbody-radiation, photon-gas, planck-law]
math_tools: [calculus, series-expansion]
format: "open-ended"
kind: "problem"
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

[4] Problem 25. The final result of the problem above is correct dimensionally, but has incorrect
    numerical factors because of the crude approximations made. In this problem we’ll do a more
    careful analysis to get the right result. This question is self-contained, but background from T1
    and T2 will be helpful.

     (a) Consider a quantum mode that can support photons of energy E. The mode can be occupied
         by any whole number of photons. Thus, using the Boltzmann distribution, the probability of
         having n photons is
                                            pn ∝ e−nE/kB T .
          Show that the expected number of photons in the mode is
                                                            1
                                                ⟨n⟩ =                 .
                                                        eE/kB T − 1
         This is the Bose–Einstein distribution.

     (b) Sketch ⟨n⟩ as a function of E. How does it behave at high and low E, and do those results
         make physical sense?

      (c) Using the Bose–Einstein distribution, show that the total energy is

                                              L3 ℏ ∞           ω3
                                                   Z
                                         U= 2 3        dω ℏω/k T
                                              π c 0       e    B   −1
         where ω is the angular frequency. You’ll have to multiply by a factor of two, because there
         are two independent photon polarizations for each mode we found above. (Note that if we
         open the box, the photons will fly out, and the frequency distribution of the emitted light will
         be given by the integrand; this yields Planck’s law for blackbody radiation.)

                                                     13
    Kevin Zhou                                                                      Physics Olympiad Handouts

     (d) [A] Using an appropriate substitution, show that U is a dimensionful constant times the
          dimensionless integral              Z ∞
                                                       x3
                                                  dx x     .
                                               0     e −1
         To evaluate this integral, expand the denominator as a power series, integrate each term
         individually, and use the fact that the Riemann zeta function obeys
                                                    ∞
                                                    X 1                      π4
                                           ζ(s) =             s
                                                                ,   ζ(4) =      .
                                                          n                  90
                                                    n=1

         When the smoke clears, you should find that
                                                      π 2 (kB T )4 L3
                                               U=                     .
                                                      15 (ℏc)3
