---
id: "kevin-zhou-p2-ex004"
source: "kevin-zhou"
native_id: "KZ-P2-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p2-ex004"
topic: [mathematical-methods]
subtopic: [random-variables, variance, central-limit-theorem]
math_tools: [probability-statistics]
format: "explanation"
kind: "example"
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

Consider one trial of 1000 tosses. The number of heads is X = X1 + X2 + . . . + X1000 , where
                                              (
                                               1 heads on toss i,
                                         Xi =
                                               0 tails on toss i.

       Of course, the mean of each of these variables is ⟨Xi ⟩ = 0.5, so that the mean of X is 500. In
       addition, the Xi are independent of each other, so the variances add. The variance of each
       one of them is
                                                               1 1       1
                                  var Xi = ⟨Xi2 ⟩ − ⟨Xi ⟩2 = − = .
                                                               2 4       4
       Thus, the standard deviation of the number of heads is
                                        √          p
                                          var X = 1000/4 ≈ 16.

       So getting 520 heads would not be surprising, but if you got 550, you might be justified in
       suspecting the coin isn’t fair. (Also, the number of heads is very close to normally distributed,
       by the central limit theorem mentioned above.) To check whether you understand  p       this, you
       can redo it with a general probability p of getting heads, where you should get 1000 p(1 − p).
