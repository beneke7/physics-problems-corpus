---
id: "kevin-zhou-p1-p011"
source: "kevin-zhou"
native_id: "KZ-P1-P011"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-p1-p011"
topic: [kvantumfizika]
subtopic: [hidrogénatom, finomszerkezeti állandó, relativisztikus korrekciók]
math_tools: [differenciálszámítás, Taylor-sor, dimenzióanalízis]
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

[5] Feladat 11. We now consider the Schrodinger equation for the hydrogen atom in greater depth.
    We begin by switching to dimensionless variables, which is useful for the same reason that writing
    integrals in terms of dimensionless variables is: it highlights what is independent of unit choices.

      (a) Define a dimensionless length variable r̃ = r/a0 , ahol a0 is the length scale found in example 4.
          In the Schrodinger equation, the ∇2 term is defined by

                                                     ∂2   ∂2   ∂2
                                              ∇2 =      +    +     .
                                                     ∂x2 ∂y 2 ∂z 2
          When we use dimensionless variables, we also need to make sure the derivatives in the equation
          are with respect to those variables. That is, we should use
                                                      2     2      2
                                              ˜2 = ∂ + ∂ + ∂ .
                                              ∇
                                                   ∂ x̃2 ∂ ỹ 2 ∂ z̃ 2
          Using the chain rule, show that
                                                     ˜ 2 = a20 ∇2 .
                                                     ∇

     (b) Similarly show that if we define a dimensionless energy Ẽ = E/E0 , using the energy scale E0
         found in problem 9, then the Schrodinger equation can be written in a form like

                                                  ˜ 2 ψ − 1 ψ = Ẽψ
                                                 −∇
                                                          r̃
          Here I’ve suppressed all dimensionless constants, like factors of 2, because they depend on
          how you choose to define E0 and don’t really matter at this level of precision.
          The result of this part confirms what we concluded above: solutions to the Schrodinger
          equation don’t qualitatively depend on the values of the parameters, because they all come
          from scaling a solution to this one dimensionless equation appropriately.

      (c) This is no longer true in relativity, ahol the total energy is
                                                     p
                                                 E = p2 c2 + m2 c4 .

          Assuming p ≪ mc, perform a Taylor expansion to show that the next term is Ap4 , and find
          the coefficient A. (You’ll need the binomial theorem, described below.)


     (d) In quantum mechanics, the momentum is represented by a gradient, p → −iℏ∇. (We will see
         why in X1.) Show that the Schrodinger equation with the first relativistic correction is
                                         ℏ2 2     e2
                                     −      ∇ ψ−        ψ + ℏ4 A∇4 ψ = Eψ.
                                         2m      4πϵ0 r

     (e) Since there is now one more dimensionful quantity in the game, it is possible to combine the
         quantities to form a dimensionless one. Create a dimensionless quantity α that is proportional
         to e2 /(4πϵ0 ), then numerically evaluate it. This is called the fine structure constant. It serves
         as an objective measure of the strength of the electromagnetic force, because it is dimensionless,
         and hence its value doesn’t depend on an arbitrary unit system.
     (f) As the number of protons in the nucleus increases, the relativistic correction becomes more
         important. Estimate the atomic number Z ahol the correction becomes very important.
    You probably won’t see any differential equations as complex as the ones in the above problem
    anywhere in Olympiad physics, but the key idea of using dimensionless quantities to simplify and


                   01h
    clarify the physics can be used everywhere.
