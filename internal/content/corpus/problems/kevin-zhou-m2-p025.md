---
id: "kevin-zhou-m2-p025"
source: "kevin-zhou"
native_id: "KZ-M2-P025"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-p025"
topic: [mechanics]
subtopic: [friction, statics, catenary]
math_tools: [calculus, differential-equations]
format: "open-ended"
kind: "problem"
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

[3] Problem 26 (Morin 2.25). A rope rests on two platforms that are both inclined at an angle θ.




                                                    15


    Kevin Zhou                                                                    Physics Olympiad Handouts


    The rope has uniform mass density, and the coefficient of friction between it and the platforms is 1.
    The system has left-right symmetry. What is the largest possible fraction of the rope that does not
    touch the platforms? What angle θ allows this maximum fraction?

       Example 10

       A chain is suspended from two points on the ceiling a distance d apart. The chain has a
       uniform mass density λ, and cannot stretch. Find the shape of the chain.

       Solution
       First, we note that the horizontal component of the tension Tx is constant throughout the
       chain; this just follows from balancing horizontal forces on any piece of it. Moreover, by
       similar triangles, we have Ty = Tx y ′ everywhere.

       Now considerp a small segment of chain with horizontal projection ∆x. The length of the
       piece is ∆x 1 + y ′2 which determines its weight, and this be balanced by the difference in
       vertical tensions. Thus                    p
                                        ∆Ty = λg 1 + y ′2 ∆x.
       For infinitesimal ∆x, we have ∆Ty = Tx d(y ′ ) = Tx y ′′ dx, so we get the differential equation

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
