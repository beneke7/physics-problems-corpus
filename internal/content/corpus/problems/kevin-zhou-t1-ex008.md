---
id: "kevin-zhou-t1-ex008"
source: "kevin-zhou"
native_id: "KZ-T1-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-ex008"
topic: [thermodynamics, mechanics]
subtopic: [kinetic-theory, equipartition, rocket-propulsion, momentum-conservation]
math_tools: [algebra, dimensional-analysis]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T1-EX008

        Example 8

        An astronaut of mass M stranded in outer space makes a primitive rocket as follows. They
        take a piece of dry ice of mass m ≪ M and molar mass µ and put it in a long, thin glass
        held at temperature T . The dry ice sublimates, and the astronaut points the opening of the
        glass in the opposite of the direction they want to go. Roughly estimate, within an order of



                                                      14


Kevin Zhou                                                              Physics Olympiad Handouts



  magnitude, how fast the astronaut is going after all the dry ice is gone.

  Solution
  Let m′ be the mass of a molecule of dry ice. By the equipartition theorem, the molecules
  have a typical speed of order
                                   r        r         s
                                      kT       N kT     RT
                                v∼       =          =       .
                                      m′       N m′      µ

  The molecules exit the glass traveling more or less in the same direction, so by momentum
  conservation the final speed u of the astronaut is on the order of
                                                     s
                                           m      m RT
                                      u∼     v=            .
                                          M       M      µ

  We have implicitly assumed that the glass is long enough that the molecules get into thermal
  equilibrium with the glass before they leave it. For a short glass, the answer would instead
  depend on the typical speeds of molecules at the moment they sublimate.
