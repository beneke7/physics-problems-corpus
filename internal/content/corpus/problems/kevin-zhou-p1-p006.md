---
id: "kevin-zhou-p1-p006"
source: "kevin-zhou"
native_id: "KZ-P1-P006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p1-p006"
topic: [mathematical-methods]
subtopic: [gaussian-integrals, dimensional-analysis]
math_tools: [integration, dimensional-analysis]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/P1.txt"
source_url: "sources/kevin_zhou/site/handouts/P1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[2] Problem 6. We are given the integral
                                             Z ∞
                                                          2        √
                                                     e−x dx =           π.
                                              −∞

    For positive a, find the value of the integral
                                              Z ∞

                                                     e−ax +bx+c dx
                                               −∞

    and verify that your answer makes dimensional sense.


       Remark
       Consider the value of the definite integral
                                               Z x
                                                           ′2
                                                      e−x dx′ .
                                                 −∞

       You can try all day to compute the value of this integral, using all the integration tricks

       you know, but nothing will work. The function e−x simply doesn’t have an antiderivative
       in terms of the functions you already know, i.e. in terms of polynomials, exponents and
       logarithms, and trigonometric functions (for more discussion, see here).

        If you ask a computer algebra system like Mathematica, it’ll spit out something involv-

        ing erf(x), which is defined by being an antiderivative of e−x . But is this really an

       “analytic” solution? Isn’t that just saying “the integral of e−x is equal to the integral

        of e−x ”? Well, like many things in math, it depends on what the meaning of the word “is” is.

       The fact is, the set of functions we regard as “elementary” is arbitrary; we just choose a set
       that’s big enough to solve most of the problems we want, and small enough to attain fluency
       with. (Back in the days before calculators, it just meant all the functions whose values were
       tabulated in the references on hand.) If you’re uncomfortable with erf(x), note that a similar
       thing would happen if a little kid asked you what the ratio of the opposite to adjacent sides
       of a right triangle is. You’d say tan(x), but they could say it’s tautological, because the only
       way to define tan(x) at their level is as the ratio of opposite to adjacent sides. Similarly,
       1/x has no elementary antiderivative – unless you count log(x) as elementary, but ultimately
       log(x) is simply defined to be such an antiderivative. It’s all tautology, but it’s still useful.
