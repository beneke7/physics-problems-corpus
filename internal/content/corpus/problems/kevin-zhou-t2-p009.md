---
id: "kevin-zhou-t2-p009"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-T2-P009"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-p009"
topic: [thermodynamics]
subtopic: [entropy, ideal-gas, free-expansion]
math_tools: [calculus, algebra]
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

# KZ-T2-P009

[4] Problem 9. We can find an expression for entropy of an ideal gas using pure thermodynamics.
    Consider n moles of an ideal gas with adiabatic index γ, initially at pressure P and volume V .
      (a) Suppose the gas is heated at constant volume to pressure P ′ . Compute the change in entropy.

     (b) Suppose the gas is instead expanded at constant pressure to volume V ′ . Compute the change
         in entropy.

      (c) By combining your two results, show that the entropy S(P, V ) of the ideal gas is

                                          S = nCV log(P V γ ) + constant

          when n is constant. The constant can’t be found using classical thermodynamics alone, since
          it only can determine changes in entropy.

                                                      7


    Kevin Zhou                                                                  Physics Olympiad Handouts


     (d) Now consider the case where the ideal gas is allowed to freely expand into a vacuum, reaching
         a final volume V ′ . This is an example of a nonequilibrium process that changes the entropy,
         despite no work or heat transfer. Find the resulting change in entropy.

        (e) So far, we don’t know anything about how S depends on n, because we only considered
            processes that kept n constant. However, the entropy should be extensive, meaning that if the
            pressure and temperature are kept the same, then S is proportional to n. Thus, if in general

                                             S/n = CV log(P V γ f (n)) + constant



                        01W
           then the right-hand side must be independent of n. Using this, find f (n).
