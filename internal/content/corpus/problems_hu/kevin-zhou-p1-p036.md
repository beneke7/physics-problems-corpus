---
id: "kevin-zhou-p1-p036"
source: "kevin-zhou"
native_id: "KZ-P1-P036"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-p1-p036"
topic: [Matematikai módszerek]
subtopic: [aszimptotikus analízis, nem saját integrálok]
math_tools: [integrálás, kisparaméteres közelítés]
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

[3] Feladat 36. [A] Estimating some integrals with sharp peaks. For all cases, you only need to find
    an estimate for the leading contribution in the limit ϵ → 0, and you can drop numeric prefactors.

     (a) To warm up, find a rough estimate for
                                              Z ∞
                                                                    dx
                                        I1 =                                   .
                                                     0        (ϵ + x)2 (1 + x)

     (b) Find a rough estimate for                   Z ∞
                                                                      dx
                                              I2 =            √                 .
                                                     0            ϵ + x (1 + x)
      (c) Find a rough estimate for                  Z ∞
                                                                    dx
                                              I3 =                           .
                                                      0       (ϵ + x)(1 + x)

       Remark
       In Olympiad physics, you need to understand how to set up integrals, but you almost
       never have to perform a nontrivial integral. There will almost always be a way to solve the
       problem without doing explicit integration at all, or an approximation you can do to render


  the integral trivial, or the integral will be given to you in the problem statement. This
  is because physics competitions are generally written to make students think hard about
  physical systems, and the integrals are just viewed as baggage.

  Even introductory calculus has harder integrals than Olympiad physics. For example, consider
                              Z
                                 sec x dx = log |sec x + tan x| + C.

  When I first saw this, I was shocked by how the trick for doing this integral came out of
  nowhere; it seemed much harder than anything else in the class. And it is! Historically,
  it arose in 1569 from Mercator’s projection, ahol it gives the vertical distance on the
  map from the equator to a given latitude. For decades, cartographers simply looked up
  the numeric value of the integral in tables, ahol the Riemann sums had been done by
  hand. (They had no chance of solving it analytically anyway, since Napier only invented
  logarithms in 1614.) Gradually, tabulated values of the logarithms of trigonometric functions
  became available, and in 1645, Bond conjectured the correct result by noticing the close
  agreement of tabulated values of each side of the equation. Finally, Gregory proved the
  result in 1668, using what Halley called “a long train of Consequences and Complications of
  Proportions.” So it took almost a hundred years for this integral to be solved! (Though to
  their credit, they had the handicap of not knowing about differentiation or the fundamental
  theorem of calculus; they were finding the area under the curve with just Euclidean geometry.)

  Even though Olympiad physics tries to avoid tough integrals, doing more advanced physics
  tends to produce them, so physicists often get quite good at integration. By contrast,
  Spivak’s calculus textbook for math majors only covers integration techniques in a single
  chapter towards the end of the book. He justifies the inclusion of this material by saying:

       Every once in a while you might actually need to evaluate an integral [...] For
       example, you might take a physics course [...] Even if you intend to forget how to
       integrate (and you probably will forget some details the first time through), you
       must never forget the basic methods.

  That attitude is why physics students frequently win the MIT Integration Bee.
