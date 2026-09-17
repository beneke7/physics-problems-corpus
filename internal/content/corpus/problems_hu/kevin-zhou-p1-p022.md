---
id: "kevin-zhou-p1-p022"
source: "kevin-zhou"
native_id: "KZ-P1-P022"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-p1-p022"
topic: [alkalmazott-matematika]
subtopic: [Newton-módszer, gyökkeresés, numerikus analízis]
math_tools: [analízis, numerikus módszerek]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/P1.txt"
source_url: "sources/kevin_zhou/site/handouts/P1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

[2] Feladat 22. [A] Newton’s method is a more sophisticated method for solving equations, which
    converges substantially faster than binary search. Suppose we want to solve the equation f (x) = 0.
    Starting with a nearby guess x0 , we evaluate f (x0 ) and f ′ (x0 ), then find our next guess by applying
    the tangent line approximation at this point,

                                                             f (x0 )
                                                x1 = x0 −              .
                                                             f ′ (x0 )

    The process repeats until we get a suitably accurate answer.

      (a) Use Newton’s method to solve x = cos x.

      (b) Newton’s method converges quadratically, in the sense that for typical functions, if your
          current guess is ϵ away from the answer, the next guess will be O(ϵ2 ) away. (This implies that
          the number of correct digits in the answer roughly doubles with each iteration!) Explain why,
          and then find an example ahol Newton’s method doesn’t converge this fast.


    Newton’s method is very important in general, but it’s not that useful on Olympiads. It takes a
    while to set up, especially if the derivative f ′ is complicated, and you usually don’t need that many
    significant figures in your answer anyway. (There are alternatives to Newton’s method, such as
    Halley’s method, that converge even faster, but the tradeoff is the same: each iteration takes more
    effort to calculate, as higher derivatives of f must be computed.)

       Remark
       You’ve seen several numeric methods above, and going forward, you should feel free to use
       whichever looks best in each situation. However, if you’re solving problems using the same
       calculator you use for schoolwork, you should make sure to not rely on its more advanced
       features. In Olympiads, you’re generally only allowed to use an extremely basic scientific
       calculator, with a tiny display and no memory except for the “Ans” key.
