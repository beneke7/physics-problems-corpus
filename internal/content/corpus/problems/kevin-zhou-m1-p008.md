---
id: "kevin-zhou-m1-p008"
source: "kevin-zhou"
native_id: "KZ-M1-P008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-p008"
topic: [mathematical-methods]
subtopic: [power-series, bessel-equation]
math_tools: [differential-equations, series-complex]
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

[3] Problem 8. [A] Some linear, homogeneous, non-time-translation-invariant differential equations
    can be solved by simply guessing a power series. For this problem, don’t worry about dimensional
    analysis; assume all variables have already been redefined to be dimensionless.
      (a) As a warmup, consider the differential equation ẋ = kx for constant k, which we already know
          how to solve. By plugging in the ansatz
                                                         ∞
                                                         X
                                                  x(t) =     an tn
                                                          n=0
          with unknown constant coefficients an , find the solution with x(0) = 1.
      (b) Now consider the non-time-translation-invariant differential equation
                                                t2 ẍ + tẋ + t2 x = 0
          which is called Bessel’s differential equation of order zero. By using the same ansatz, find the
          unique solution with x(0) = 1 and ẋ(0) = 0.

                                                      4


    Kevin Zhou                                                               Physics Olympiad Handouts


    2    Tricks
    In this section we’ll consider some kinematics problems that require cleverness, not computation.
