---
id: "kevin-zhou-p1-p033"
source: "kevin-zhou"
native_id: "KZ-P1-P033"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p1-p033"
topic: [mathematical-physics]
subtopic: [integration, geometric-area, asymptotic-estimates, series-approximations]
math_tools: [calculus, geometry, series-expansion]
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

[2] Problem 34. Consider a spherical cap that is formed by slicing a sphere of radius R by a plane,
    so that the altitude from the vertex to the base is h. Find the area of its curved surface using an
    appropriate integral.


    7      Approximating Integrals
[3] Problem 35. As you learned in calculus class, we may approximate the area under a function
    using a lot of rectangles, and in the limit where the rectangles become very thin, we recover the
    true area. This is how integration is defined. However, you can also use the reasoning in reverse: a
    sum over many elements of a slowly varying function can be approximated with an integral.

     (a) For n ≫ 1, find both an underestimate and an overestimate for nk=1 k by replacing it with
                                                                         P

         appropriate integrals. How does the fractional error of your approximations scale with n?
                                                                          Pn
     (b) For n ≫ 1, find a reasonable way to approximately evaluate         k=1 log k. How does the
         fractional error of your approximation scale with n? How good of a result can you get?

    We’ll use these kinds of approximations in several later problem sets.

         Example 19

         For ϵ ≪ 1, find a rough estimate for the leading term in the definite integral
                                                   Z π/4
                                                               dθ
                                              I=                         .
                                                    0      ϵ2 + sin2 θ
