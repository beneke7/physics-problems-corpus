---
id: "kevin-zhou-p2-p004"
source: "kevin-zhou"
native_id: "KZ-P2-P004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p2-p004"
topic: [experimental-skills]
subtopic: [probability-distributions, normal-distribution, uncertainty]
math_tools: [calculus, probability-statistics]
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

2
                                              p(x) ∝ e−a(x−b)

    for some a > 0. For simplicity, let’s shift X so that it’s centered about x = 0, so
                                                              2
                                                p(x) ∝ e−ax .

    You may use the result given in P1,
                                             Z ∞
                                                     2        √
                                                   e−x dx =       π.
                                              −∞

    Find the constant of proportionality in p(x), the mean, and the standard deviation.

       Remark
       As you saw in problem 4, normal distributions are characterized entirely by their mean
       and standard deviation. Moreover, the central limit theorem roughly states that the sum
       of many independent random variables is approximately normally distributed. As a result,
       final experimental results are often approximately normally distributed, which means we can
       describe them with only the mean and standard deviation. That is the reason why the next
       part of this problem set will focus on calculating standard deviations (i.e. uncertainties).




                                                      2
    Kevin Zhou                                                             Physics Olympiad Handouts
