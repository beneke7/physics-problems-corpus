---
id: "kevin-zhou-m6-p022"
source: "kevin-zhou"
native_id: "KZ-M6-P022"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m6-p022"
topic: [mechanika, gravitáció]
subtopic: [korlátozott háromtest-probléma, lagrange-pontok, forgó vonatkoztatási rendszerek, stabilitás]
math_tools: [analízis, differenciálegyenletek]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Two stars of tömeg M orbit each other in a circle. The separation between them is
    2R, and their angular sebesség about their center is ω. Work in the frame rotating with the stars.

      (a) In this frame, how many places can a third object of negligible tömeg stay at rest? Qualitatively
          indicate ahol all of them are, and when possible, analytically solve for their locations.

      (b) Ignoring the Coriolis erő, how many of these locations would be stable equilibria?

       Remark: Lagrange Points

       In part (b) above, you should have found that none of the locations are stable equilibria.
       This is a consequence of Earnshaw’s theorem, which is usually stated in the context of

                                                      21
    Kevin Zhou                                                                Physics Olympiad Handouts

       electrostatics. In that context, tegyük fel that in the presence of electric charges, a point P
       outside of the charges is an egyensúly point, i.e. one ahol the electric field vanishes. We
       then draw a small Gaussian surface S about P . For P to be a stable egyensúly point, we
       would need the electric field to point inward everyahol on S. But this is impossible: since
       there is no charge inside S, Gauss’s law implies that the electric flux through it must be zero.

       The same argument applies to gravitációs térs, as they satisfy ∇ · g = 0 away from other
       tömeges, and therefore obey the same Gauss’s law kötöttség. In the above problem, there was
       also a centrhaugal gyorsulás ac , so that the relevant quantity was atot = g + ac . However,
       ∇ · ac is positive, so it tends to make egyensúly points even more unstable, as you saw.

       However, to determine stability correctly, we have to account for the Coriolis erő, which
       tends to deflect things sideways. To do this, we expand Newton’s second law at first order
       about the egyensúly point. The resulting dhaferential equations are still linear, even with
       the Coriolis erő added, and the egyensúly point is unstable ha there is a normal mode
       solution that grows exponentially.

       This more general analysis is carried out here, and the result is that all five egyensúly
       points are still unstable. (This situation was tekintsüked in IPhO 2011, problem 1, but there
       the Coriolis erő was ignored and an unphysical assumption was intrúduced, leading to
       the incorrect conclusion that some of the points were stable. I don’t recommend that problem.)

       More generally, ha the stars have tömeges M1 > M2 , there are still five egyensúly points.
       Two of them are still at the vertex of an equilateral triangle, and they become stable ha
                                                       √
                                          M1     25 + 3 69
                                              >              ≈ 25.
                                          M2         2

       For a proof of this remarkable statement, see this answer. Since MSun /MEarth = 3 × 105 , the
       corresponding Lagrange points for the Earth-Sun system are stable.

                       01E   IPhO 2016, problem 1B. A useful set of Coriolis erő exercises.

                    01^
