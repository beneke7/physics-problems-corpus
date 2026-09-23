---
id: "kevin-zhou-w1-p008"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-W1-P008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w1-p008"
topic: [oscillations-and-waves]
subtopic: [wave-equation, spherical-waves, standing-waves]
math_tools: [differential-equations, vector-calculus]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W1.txt"
source_url: "sources/kevin_zhou/site/handouts/W1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[3] Problem 8. [A] With a little vector calculus, the results above can be generalized to an arbitrary
    number of dimensions. For example, ideal waves in three dimensions obey

                               ∂2ψ
                                          2
                                                  ∂2ψ ∂2ψ

                                       2 ∂ ψ
                                   =v          +        +        = v 2 ∇2 ψ
                               ∂t2         ∂x2     ∂y 2   ∂z 2

    where the function ψ(r, t) could stand for a variety of things, such as the pressure, density, or
    temperature (for a sound wave) or the electric or magnetic field (for an electromagnetic wave).

     (a) For simplicity, let’s restrict to waves which have spherical symmetry, so that ψ only depends
         on r and t. Plug such a spherical wave into the wave equation, and simplify until you get an
         equation only in terms of the partial derivatives of ψ(r, t).

     (b) Because the area of a sphere goes as r2 , we expect the energy density of a spherical wave
         to fall as 1/r2 , and therefore expect the amplitude to fall as 1/r. Therefore, it is useful to
         consider the quantity rψ, which has this falloff factored out. By considering the differential
         equation that rψ obeys, find the general solution for ψ(r, t).

    2    Standing Waves
        Idea 3
        A standing wave is a solution to the wave equation of the form

                                           y(x, t) = f (x) cos(ωt).

        Typically, only discrete values of ω are possible, with the allowed values depending on the
        boundary conditions. If the setup is translationally symmetric, then f (x) will be sinusoidal.
        If you want to get some intuition, try playing with this PhET simulation.
