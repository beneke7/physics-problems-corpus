---
id: "kevin-zhou-t2-ex002"
source: "kevin-zhou"
native_id: "KZ-T2-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex002"
topic: [thermodynamics]
subtopic: [partial-derivatives, coordinate-transformations, thermodynamic-variables]
math_tools: [calculus]
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

# KZ-T2-EX002

       Example 2: Change of Variable

       The same differential df can be described by coordinates x and y, and by x′ and y, so that

                                       ∂f        ∂f        ∂f         ∂f
                                df =        dx +      dy =   ′
                                                                dx′ +       dy
                                       ∂x y      ∂y x      ∂x y       ∂y x′

       How are these partial derivatives related to each other?


                                                          2
Kevin Zhou                                                                  Physics Olympiad Handouts


   Solution
   The two forms of the differential are in terms of dx and dy, and dx′ and dy respectively. We
   thus need to write dx in terms of dx′ and dy, which we do by applying idea 3 to x itself,

                                           ∂x         ∂x
                                    dx =     ′
                                                dx′ +       dy.
                                           ∂x y       ∂y x′

   After plugging this in, the first form of df becomes
                                                                        !
                              ∂f ∂x                  ∂f ∂x       ∂f
                         df =            dx′ +                 +            dy.
                              ∂x y ∂x′ y             ∂x y ∂y x′ ∂y x

   Comparing this to the second form of df , we conclude that

                       ∂f     ∂f ∂x                 ∂f      ∂f    ∂f ∂x
                         ′
                            =            ,                =     +           .
                       ∂x y   ∂x y ∂x′ y            ∂y x′   ∂y x ∂x y ∂y x′

   These expressions might look a bit complicated, but their interpretations are simple. The
   first one just says that when we hold the same quantity y constant throughout, then the
   ordinary single-variable chain rule in P1 works, since all the functions involved become
   effectively single-variable. (This also implies that reciprocals of partial derivatives behave
   as expected. For instance, (∂f /∂x)|y = 1/(∂x/∂f )y .) The second one says that when we
   change y while keeping x′ constant, there are two contributions: one solely from the change
   in y itself, and one from the induced change in x, needed to keep x′ constant.

   If you want, you can generalize the reasoning here to see what happens when you change
   both coordinates at once, but that won’t be needed for the problems below.

Now we’re going to embark on some serious partial derivative acrobatics. The techniques we’re
about to cover are a bit tricky, and are generally regarded as the hardest thing covered in an
undergraduate thermodynamics class. But they’re also the simplest way to solve the problems in
this section. The material covered below will not be necessary for anything else in these handouts.
