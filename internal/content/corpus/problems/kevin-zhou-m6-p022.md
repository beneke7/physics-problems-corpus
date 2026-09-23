---
id: "kevin-zhou-m6-p022"
difficulty_level: 5
source: "kevin-zhou"
native_id: "KZ-M6-P022"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m6-p022"
topic: [mechanics, gravitation]
subtopic: [restricted-three-body-problem, lagrange-points, rotating-frames, stability]
math_tools: [calculus, differential-equations]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Two stars of mass M orbit each other in a circle. The separation between them is
    2R, and their angular velocity about their center is ω. Work in the frame rotating with the stars.

      (a) In this frame, how many places can a third object of negligible mass stay at rest? Qualitatively
          indicate where all of them are, and when possible, analytically solve for their locations.

      (b) Ignoring the Coriolis force, how many of these locations would be stable equilibria?

       Remark: Lagrange Points

       In part (b) above, you should have found that none of the locations are stable equilibria.
       This is a consequence of Earnshaw’s theorem, which is usually stated in the context of

                                                      21


    Kevin Zhou                                                                Physics Olympiad Handouts

       electrostatics. In that context, suppose that in the presence of electric charges, a point P
       outside of the charges is an equilibrium point, i.e. one where the electric field vanishes. We
       then draw a small Gaussian surface S about P . For P to be a stable equilibrium point, we
       would need the electric field to point inward everywhere on S. But this is impossible: since
       there is no charge inside S, Gauss’s law implies that the electric flux through it must be zero.

       The same argument applies to gravitational fields, as they satisfy ∇ · g = 0 away from other
       masses, and therefore obey the same Gauss’s law constraint. In the above problem, there was
       also a centrifugal acceleration ac , so that the relevant quantity was atot = g + ac . However,
       ∇ · ac is positive, so it tends to make equilibrium points even more unstable, as you saw.

       However, to determine stability correctly, we have to account for the Coriolis force, which
       tends to deflect things sideways. To do this, we expand Newton’s second law at first order
       about the equilibrium point. The resulting differential equations are still linear, even with
       the Coriolis force added, and the equilibrium point is unstable if there is a normal mode
       solution that grows exponentially.

       This more general analysis is carried out here, and the result is that all five equilibrium
       points are still unstable. (This situation was considered in IPhO 2011, problem 1, but there
       the Coriolis force was ignored and an unphysical assumption was introduced, leading to
       the incorrect conclusion that some of the points were stable. I don’t recommend that problem.)

       More generally, if the stars have masses M1 > M2 , there are still five equilibrium points.
       Two of them are still at the vertex of an equilateral triangle, and they become stable if
                                                       √
                                          M1     25 + 3 69
                                              >              ≈ 25.
                                          M2         2

       For a proof of this remarkable statement, see this answer. Since MSun /MEarth = 3 × 105 , the
       corresponding Lagrange points for the Earth-Sun system are stable.

                       01E   IPhO 2016, problem 1B. A useful set of Coriolis force exercises.

                    01^
