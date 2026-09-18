---
id: "kevin-zhou-p1-p015"
source: "kevin-zhou"
native_id: "KZ-P1-P015"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p1-p015"
topic: [mathematical-methods]
subtopic: [series-expansion, binomial-theorem, approximations]
math_tools: [series-complex, small-parameter-approximation]
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

[3] Problem 16. The function cos−1 (1 − x) does not have a Taylor series about x = 0. However, it
    does have a series expansion about x = 0 in a different variable.

      (a) What is this variable, and what’s the first term in the series?

     (b) ⋆ What’s the next nontrivial term in the series?

       Idea 5: Binomial Theorem
       When both x and xn are small, it is useful to use the binomial theorem,

                                       (1 + x)n = 1 + xn + O(x2 n2 ).

       It applies even when n is not an integer. In particular, n can be very large, very small, or
       even negative. The extra terms will be small as long as xn is small. If desired, one can find
       higher terms using binomial coefficients,
                                                     ∞
                                                  n
                                                     X  n m
                                           (1 + x) =      x
                                                        m
                                                      m=0

       where the definition of the binomial coefficient is formally extended to arbitrary real n.

    The binomial theorem is one of the most common approximations in physics. It’s really just taking
    the first two terms in the Taylor series of (1 + x)n , but we give it a name because it’s so useful.
