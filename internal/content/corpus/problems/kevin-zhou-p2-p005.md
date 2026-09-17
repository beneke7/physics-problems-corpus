---
id: "kevin-zhou-p2-p005"
source: "kevin-zhou"
native_id: "KZ-P2-P005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p2-p005"
topic: [experimental-physics]
subtopic: [uncertainty-propagation, variance, standard-deviation, independent-errors]
math_tools: [probability-statistics, algebra]
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

⟨X1 X2 ⟩ = ⟨X1 ⟩⟨X2 ⟩.

    Use this result to show that

                                     var(X1 + X2 ) = var(X1 ) + var(X2 )

   which implies that the standard deviation “adds in quadrature”,
                                                 q
                                       σX1 +X2 = σX  2 + σ2 .
                                                       1   X2

   This is an important result we’ll use many times below.


    2    Uncertainty Propagation
        Idea 2
        When a physical quantity is measured in an experiment and reported as x±∆x, it is uncertain
        what the true value of the quantity is. If the quantity has a probability distribution p(x),
        then the reported uncertainty ∆x is essentially the standard deviation of p(x).

        Remark
        You can use intuition and experience to assign uncertainties to real measurements. For
        example, if you’re using a clock that times only to the nearest second, you might take
        ∆t = 0.5 s. If you’re using a good ruler, which has millimeter markings, you might take
        ∆x = 0.5 mm. Of course, the ultimate test is the results: if you assigned the uncertainties
        right, your final uncertainty should encompass the true result most (but not all) of the time.
