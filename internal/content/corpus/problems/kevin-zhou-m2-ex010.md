---
id: "kevin-zhou-m2-ex010"
difficulty_level: null
source: "kevin-zhou"
native_id: "KZ-M2-EX010"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-ex010"
topic: [mechanics]
subtopic: [statics, catenary, flexible-cables]
math_tools: [calculus, differential-equations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

λg p
                                                y ′′ =       1 + y ′2 .
                                                         Tx
       Usually nonlinear differential equations with second derivatives are very hard to solve, but
       this one isn’t because there is no direct dependence on y, just its derivatives. That means
       we can treat y ′ as the independent variable first, and the equation is effectively first order in y ′ .

       Writing y ′′ = d(y ′ )/dx and separating, we have

                                                  dy ′        λg
                                           Z                Z
                                              p           =      dx.
                                                 1 + y ′2     Tx

       Integrating both sides gives
                                                                λgx
                                              sinh−1 (y ′ ) =       + C.
                                                                 Tx
       Choosing x = 0 to be the lowest point of the chain, the constant C is zero, and

                                            ′          λgx
                                           y = sinh          .
                                                        Tx

       Integrating both sides again gives the solution for y,

                                                Tx        λgx
                                           y=      cosh
                                                λg         Tx

       where we suppressed another constant of integration. This curve is called a catenary.
