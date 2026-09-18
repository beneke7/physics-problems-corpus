---
id: "kevin-zhou-m8-p028"
source: "kevin-zhou"
native_id: "KZ-M8-P028"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m8-p028"
topic: [mechanika]
subtopic: [gravitáció, Kepler-törvények, centrális erők]
math_tools: [differenciálegyenletek, differenciálszámítás]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M8.txt"
source_url: "sources/kevin_zhou/site/handouts/M8.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

[3] Feladat 28. In this problem, we’ll go through Laplace’s slick derivation of Kepler’s first law.
    Throughout, we assume the orbit takes place in the xy plane, with the Sun at the origin.
     (a) Show that
                                                    γx          γy
                                                ẍ = −3
                                                        , ÿ = − 3
                                                    r           r
           ahol γ is a constant that depends on the parameters.
     (b) Show that
                                         d 3                  d 3
                                            (r ẍ) = −γ ẋ,      (r ÿ) = −γ ẏ.
                                         dt                   dt
        (c) Show that
                                                     d 3
                                                        (r r̈) = −γ ṙ.
                                                     dt
           (Hint: this can get messy. As a first step, try showing the left-hand side is equal to
           (r2 /2) d3 (r2 )/dt3 . You will have to switch variables to x and y and then switch back; for
           these purposes it’s useful to use the results of part (a), and the definition r2 = x2 + y 2 .)
     (d) Define ψ(t) = r(t)3 . In parts (b) and (c), we have shown that the differential equation

                                              d         du
                                                   ψ(t)      = −γu
                                              dt        dt
           has three solutions, namely ẋ, ẏ, and ṙ. Any second-order linear differential equations only
           has two independent solutions. If ẋ and ẏ are not independent, the orbit is simply a line,
           which is trivial. Assuming that doesn’t happen, they are independent, so ṙ must be a linear
           combination of them,
                                                     ṙ = Aẋ + B ẏ.
           Use this result to argue that the orbit is a conic section.


    6     Mechanics and Geometry
    For dessert, we’ll consider a few cute problems that relate statics to geometry.

         Példa 8

         Given a triangle ABC, the Fermat point is the point X that minimizes AX + BX + CX.
         Design a machine that finds the Fermat point.
