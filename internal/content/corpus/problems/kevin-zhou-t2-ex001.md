---
id: "kevin-zhou-t2-ex001"
source: "kevin-zhou"
native_id: "KZ-T2-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex001"
topic: [mathematical-methods]
subtopic: [partial-derivatives, coordinate-transformations]
math_tools: [partial-derivatives, geometry-trigonometry]
format: "explanation"
kind: "example"
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

# KZ-T2-EX001

       Example 1

       Consider describing a plane with Cartesian coordinates (x, y) and polar coordinates (r, θ).
       Calculate the partial derivatives (∂x/∂r)|θ and (∂x/∂r)|y .

       Solution
       To evaluate the first partial derivative, we need to write x as a function of r and θ. This is
       done by x = r cos θ. Differentiating with respect to r and treating θ as a constant, we have

                                                   ∂x
                                                        = cos θ.
                                                   ∂r θ

       To evaluate the second, we should write x in terms of r and y. This is done starting with

                                                   r 2 = x2 + y 2 .

       We could solve for x here. However, it’s quicker to use the usual trick of implicit differentiation:
       note that differentiating both sides with respect to r, at fixed y, gives

                                                          ∂x
                                               2r = 2x         +0
                                                          ∂r y

       which yields the answer,
                                               ∂x    r    1
                                                    = =       .
                                               ∂r y  x  cos θ
       These two results are different: changing what you keep constant changes the derivative. You
       can see this geometrically by evaluating the two versions of ∂x/∂r at a few points.
