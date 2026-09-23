---
id: "kevin-zhou-p2-p013"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-P2-P013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p2-p013"
topic: [experimental-physics]
subtopic: [uncertainty-propagation, independent-measurements]
math_tools: [differentiation, probability-statistics]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/P2.txt"
source_url: "sources/kevin_zhou/site/handouts/P2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

(b) Show that averaging the results
                                   √     of N independent trials as in problem 7 reduces the relative
         uncertainty by a factor of N .

       Remark
       There are many situations where the rules above can’t be used. For example, consider the
       uncertainty of x + y 2 /x, where x and y are independent. You can calculate the uncertainty
       of either term with the standard rules, but you can’t calculate the uncertainty of their sum,
       because the terms are not independent (both contain x).

       In these cases, you can use the multivariable equivalent of the tangent line approximation,
                                                                     ∂f            ∂f
                               f (x′ , y ′ ) ≈ f (x, y) + (x′ − x)      + (y ′ − y) .
                                                                     ∂x            ∂y
       For independent x and y, adding the two contributions to the uncertainty in quadrature gives
                                         s           2             2
                                             ∂f            ∂f
                                   ∆f =          ∆x +          ∆y .
                                             ∂x             ∂y

       This general rule can also be used to quickly rederive the results of problem 10. However, it
       shouldn’t be necessary in Olympiad problems. If you run into such situations in an experiment,
       often one of the uncertainties is much smaller, and can be neglected entirely.


                                                          5


    Kevin Zhou                                                              Physics Olympiad Handouts


    3    Using Uncertainties
