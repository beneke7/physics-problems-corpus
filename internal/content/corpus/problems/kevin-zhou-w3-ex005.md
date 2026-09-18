---
id: "kevin-zhou-w3-ex005"
source: "kevin-zhou"
native_id: "KZ-W3-EX005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w3-ex005"
topic: [optics]
subtopic: [geometrical-optics, lenses-mirrors, paraxial-approximation]
math_tools: [geometry-trigonometry]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W3.txt"
source_url: "sources/kevin_zhou/site/handouts/W3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[2] Problem 28 (Povey). The mirascope is a toy consisting of two parabolic mirrors, pointing toward
    each other, so that the focus of each one is at the vertex of the other.

     (a) When an object is placed at the bottom vertex, a real image appears at the top vertex. Why?

     (b) How is the image oriented relative to the object?

    The real image made by this setup is very convincing. There’s a Michelin starred restaurant that
    uses it in a course: when you reach for what looks like the food, your hand just passes through air.

       Idea 7: Paraxial Approximation

       If a light ray hits a thin lens of focal length f at a shallow angle, and at a distance y ≪ f
       above the lens’s center, then it will exit the lens deflected by an angle ±y/f , where the sign
       depends on whether the lens is converging or diverging. (For example, any light ray going
       straight through the lens’s center isn’t bent at all.)

       This is the paraxial approximation, which only holds for light rays incident at shallow angles
       near the center of the lens. The quantity P = 1/f is also called the optical power.

       Conversely, if you don’t know the focal length of a system, you can use this idea to find it.
       For example, the lensmaker’s equation, giving the focal length of a lens of radii of curvature
       R1 and R2 and thickness d, is

                                  1              1     1     (n − 1) d
                                    = (n − 1)       −     +
                                  f              R1 R2        nR1 R2

       and can be derived by computing the bending of the light ray at each interface.

                                                     12


    Kevin Zhou                                                                  Physics Olympiad Handouts

       Example 5

       An object is placed a distance o behind a thin converging lens with focal length f .

       An image is formed a distance i in front of the lens. How are o, i, and f related?

       Solution
       The horizontal light ray goes straight through, so let’s consider another light ray which
       emerges at a small angle θ1 to the horizontal. Then we read off
                                                          y             y
                                                   θ1 ≈     ,    θ2 ≈
                                                          o             i
       but their sum is the deflection y/f , from which we conclude
                                                      1 1  1
                                                        + = .
                                                      o  i f
       This is the familiar thin lens equation.
