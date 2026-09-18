---
id: "kevin-zhou-m4-ex008"
source: "kevin-zhou"
native_id: "KZ-M4-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m4-ex008"
topic: [mechanics]
subtopic: [normal-modes, coupled-oscillators]
math_tools: [linear-algebra, differential-equations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M4.txt"
source_url: "sources/kevin_zhou/site/handouts/M4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 8

       Three identical masses are connected by three identical springs, forming an equilateral triangle
       in equilibrium. Describe the normal modes of the system.

       Solution
       Let the system be confined to the xy plane. Then there are three masses that each can move
       in two dimensions, giving six degrees of freedom. Since we must be able to construct the

                                                       12


    Kevin Zhou                                                               Physics Olympiad Handouts

       general solution by superposing normal modes, there should be six normal modes. They are:

         • Uniform translation. This yields two independent normal modes, as you can superpose
           motion in any two distinct directions (e.g. along the x and y axes) to get motion in any
           direction. These modes have zero frequency, since sin(ωt) ∝ t in the limit ω → 0.

         • Uniform rotation about the axis of symmetry.

         • A “breathing” motion where the whole triangle expands and contracts.

         • A “scissoring” motion where one mass moves outward and the other two move inward.
           You might think there are three scissoring normal modes, but they are redundant: just
           like how the three sides of the equilateral triangle lie in a plane, these three normal modes
           formally lie in a plane, in the sense that you can superpose any two of them to get the
           third. So there are two independent scissoring modes.

       Thus we have six normal modes, as expected. If the system can move in three-dimensional
       space, we need three more; they are uniform translation in the z direction, and rotation
       about the x and y axes.
