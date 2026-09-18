---
id: "kevin-zhou-w1-ex001"
source: "kevin-zhou"
native_id: "KZ-W1-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-w1-ex001"
topic: [hullámfizika]
subtopic: [hullámegyenlet, húrok hullámai, szuperpozíció, haladó hullámok]
math_tools: [analízis, differenciálegyenletek]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W1.txt"
source_url: "sources/kevin_zhou/site/handouts/W1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

## Feladat szövege

Example 1

    Consider a string with mass µ per unit length, under tension T . The transverse displacement
    of the string is given by the wave function y(x, t), and for simplicity we assume the wave is
    shallow, i.e. ∂y/∂x ≪ 1. What’s the equation of motion for y?

    Solution
    Consider a segment of length ∆x. At each end of the segment, the tension provides horizontal
    and vertical forces
                                    T                      T y′
                            Tx = p          ≈ T, Ty = p            ≈ T y′
                                   1 + y ′2               1 + y ′2
    where we’re expanding to first order in y ′ . Therefore the total force is

                                         Fy = ∆Ty = T y ′′ ∆x.

    The mass of this segment is µ∆x, again to first order, so by Newton’s Second Law,

                                                ∂2y       ∂2y
                                         T ∆x       = µ∆x
                                                ∂x2       ∂t2
    Cleaning this up a bit, we have the wave equation

                                       ∂2y     ∂2y              T
                                         2
                                           = v2 2 ,      v2 =     .
                                       ∂t      ∂x               µ

    Physically, this simply says the string tries to straighten out curvature (represented by
    ∂ 2 y/∂x2 ). The wave equation is the simplest possible equation of motion for waves. Even in
    more complicated situations, we often start with this equation and treat the extra terms as
    perturbations. The wave equation thus occupies a position like that of the simple harmonic
    oscillator.

                                                   1


    Kevin Zhou                                                                  Physics Olympiad Handouts

       Idea 1
       We may factor the wave equation as a difference of squares,

                                 (∂t2 − v 2 ∂x2 )y = (∂t − v∂x )(∂t + v∂x )y = 0.

       Therefore, functions that satisfy (∂t ± v∂x )y = 0 solve the wave equation. It is simple to
       verify that these are functions of the form

                                              y(x, t) = f (x ± vt).

       Since the wave equation is linear, superpositions of solutions to the wave equation are also
       solutions to the wave equation. The general solution is of the form f (x − vt) + g(x + vt) for
       arbitrary functions f and g.
