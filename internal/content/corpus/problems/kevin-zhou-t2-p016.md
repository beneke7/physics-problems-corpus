---
id: "kevin-zhou-t2-p016"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-T2-P016"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-p016"
topic: [thermodynamics, quantum-physics]
subtopic: [blackbody-radiation, planck-law, wien-law]
math_tools: [calculus, dimensional-analysis]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T2-P016

[2] Problem 16. Some basic manipulations with Planck’s law.

     (a) Show that J ∝ T 4 by nondimensionalizing the integral, as explained in P1.

     (b) Prove Wien’s displacement law, which states that the maximum of I(f ) for an ideal blackbody
         occurs at a frequency which is proportional to T .

       Example 7

       At high temperatures, the resistivities of many materials scale approximately linearly with
       temperature. Suppose that a light bulb supplies total radiation power P when connected
       across an AC voltage V . How does P scale with V ?

       Solution

       The total power dissipated in the resistor scales as V 2 /R, and R ∝ ρ ∝ T . This power must
       equal the blackbody radiation power emitted, so by the Stefan–Boltzmann law,

                                                             V2
                                                P ∝ T4 ∝
                                                             T

       from which we conclude that T ∝ V 2/5 , so P ∝ V 8/5 .




                                                       14


Kevin Zhou                                                              Physics Olympiad Handouts


  Example 8

  A nonideal blackbody absorbs a fraction a(f ) of incident radiation of frequency f . (For an
  ideal blackbody, a(f ) = 1.) Show that the second law implies Kirchhoff’s law, e(f ) = a(f ).

  Solution
  First let’s consider the case where a(f ) and e(f ) are constants, which don’t depend on f . If
  we place two blackbodies of temperature T right next to each other, then the rate at which
  the first heats the second is proportional to e1 a2 , while the rate the second heats the first is
  proportional to e2 a1 . By the second law, these must be equal, which implies e1 /a1 = e2 /a2 .
  Hence the ratio is constant. But for a perfect blackbody, e = a, so the two are equal.

  More generally, suppose we place in between the two blackbodies a filter that only lets
  light of frequency f through, and blocks everything else. Then the same reasoning gives
  e1 (f )/a1 (f ) = e2 (f )/a2 (f ), so e(f ) = a(f ). Thermodynamics forces good absorbers to
  also be good emitters. It’s possible to derive this microscopically, by considering how
  individual atoms behave; in that context Kirchhoff’s law follows from time reversal symmetry.

  You might wonder what would happen if we placed a “one-way” filter which only let light
  through in one direction. Such a filter would act like Maxwell’s demons for photons: if you used
  one to divide a room full of photons, it would start directing photons of certain frequencies to
  one side or the other, decreasing the entropy. So thermodynamics also forbids the existence
  of one-way filters; again, microscopically this is a result of time reversal symmetry.

  Example 9

  A satellite contains a nuclear reactor at its core, fixed at temperature TH . Suppose the
  exterior of the satellite is somehow fixed at temperature TC , and the satellite runs an ideal
  heat engine, using the core and exterior as hot and cold reservoirs. Treat the exterior as an
  ideal blackbody, and neglect the temperature of outer space. What value of TC maximizes
  the rate of work extracted?

  Solution
  One might think that TC should be as low as possible, to increase the efficiency of the cycle.
  However, a lower TC means a lower rate of heat emission Q̇out , since we are limited by
  emission of blackbody radiation, which lowers the rate of work done Ẇ .

  The rate of heat emitted from the satellite is
                                        Q̇out = σATC4 ∝ TC4 .
  Therefore, the rate of work done is

                                   TH               TC TH 4
                   Ẇ = η Q̇in = η    Q̇out ∝    1−      T = TH TC3 − TC4 .
                                   TC               TH TC C
  This is maximized when TC = (3/4)TH , at which point the efficiency is 1/4.


                                                  15


    Kevin Zhou                                                                      Physics Olympiad Handouts
