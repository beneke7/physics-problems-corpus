---
id: "kevin-zhou-p1-p033"
source: "kevin-zhou"
native_id: "KZ-P1-P033"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-p1-p033"
topic: [matematikai-fizika]
subtopic: [integrálás, geometriai terület, aszimptotikus becslések, sorfejtési közelítések]
math_tools: [analízis, geometria, sorfejtés]
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

[2] Feladat 34. Consider a spherical cap that is formed by slicing a sphere of radius R by a plane,
    so that the altitude from the vertex to the base is h. Find the area of its curved surface using an
    appropriate integral.


    7      Approximating Integrals
[3] Feladat 35. As you learned in calculus class, we may approximate the area under a function
    using a lot of rectangles, and in the limit ahol the rectangles become very thin, we recover the
    true area. This is how integration is defined. However, you can also use the reasoning in reverse: a
    sum over many elements of a slowly varying function can be approximated with an integral.

     (a) For n ≫ 1, find both an underestimate and an overestimate for nk=1 k by replacing it with
                                                                         P

         appropriate integrals. How does the fractional error of your approximations scale with n?
                                                                          Pn
     (b) For n ≫ 1, find a reasonable way to approximately evaluate         k=1 log k. How does the
         fractional error of your approximation scale with n? How good of a result can you get?

    We’ll use these kinds of approximations in several later problem sets.

         Példa 19

         For ϵ ≪ 1, find a rough estimate for the leading term in the definite integral
                                                   Z π/4
                                                               dθ
                                              I=                         .
                                                    0      ϵ2 + sin2 θ
