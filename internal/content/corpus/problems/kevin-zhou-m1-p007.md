---
id: "kevin-zhou-m1-p007"
source: "kevin-zhou"
native_id: "KZ-M1-P007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-p007"
topic: [mathematical-methods]
subtopic: [linear-differential-equations, repeated-roots, normal-modes]
math_tools: [differential-equations, complex-numbers]
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

[3] Problem 7. Above, we mentioned that guessing an exponential works almost all the time. The
    reason is because at the end of the day, the exponential cancels out and we’re left with a polynomial
    in ω, which has just the right number of roots. But if there are repeated roots, there are fewer
    distinct solutions for ω, and hence not enough solutions.
      (a) Write down a second order differential equation with a double root ω, and find its general
          solution. (Hint: to help find a good guess, consider the simple case d2 x/dt2 = 0, where ω = 0
          is the double root. Then generalize your guess to nonzero ω and check that it works.)
      (b) You should find that the solution qualitatively changes when you have an exact double root.
          However, in the limit where we have two roots that are very close together, ω ± ∆ω with
          ∆ω ≪ ω, we should get approximately the same solution. Explicitly show how this works.
          When would you prefer to use either one?
      (c) [A] Consider the most general nth order, linear homogeneous time-translation invariant differ-
           ential equation
                                    dn          dn−1

                                                                d
                                 an n + an−1 n−1 + . . . + a1 + a0 x = 0.
                                    dt          dt              dt
          What does the general solution look like?
       Remark
       You might be wondering how to solve more general differential equations. In M4, we will
       consider three extensions of the above techniques. We’ll use the idea of normal modes
       to solve systems of such differential equations, add driving forces to make the equations
       inhomogeneous, and use the adiabatic theorem to approximately solve non-time-translation-
       invariant equations where the coefficients change slowly in time.

       Of course, this just scratches the surface of the subject, and solving more general differential
       equations can be orders of magnitude harder. We won’t try to solve nonlinear differential
       equations, as there is no general technique for doing so, and the answer is often an obscure
       special function. (However, such equations will occasionally appear in later problems.) On the
       other hand, linear differential equations with general time-dependence are more approachable,
       and the following problem illustrates the most basic method for solving them.
