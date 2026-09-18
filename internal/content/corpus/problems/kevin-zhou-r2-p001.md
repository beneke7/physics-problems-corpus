---
id: "kevin-zhou-r2-p001"
source: "kevin-zhou"
native_id: "KZ-R2-P001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-r2-p001"
topic: [relativity]
subtopic: [relativistic-energy-momentum, four-vectors, lorentz-transformation]
math_tools: [algebra, vector-calculus]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/R2.txt"
source_url: "sources/kevin_zhou/site/handouts/R2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[4] Problem 1. A few useful facts about energy and momentum, for future reference.

     (a) Recalling the definition of the four-velocity from R1, show that

                                                  (E/c, p) = muµ

           where uµ is the four-velocity. Setting c = 1 below, this shows pµ = (E, p) is a four-vector.

     (b) Let’s check the Lorentz transformation properties of pµ explicitly. Let S ′ be the frame moving
         to the right with velocity vx̂ with respect to the frame S. If a particle has velocity ux̂ in
         frame S, write E ′ and p′ in frame S ′ in terms of E and p.

        (c) Show that the norm of the four-momentum is

                                              pµ pµ = E 2 − |p|2 = m2 .

           This is a very useful result that can simplify the solutions to many problems below, especially
           ones that simply ask for a final mass m. In this case one can often compute a single four-
           momentum and find its norm to get the answer.

     (d) The expressions in idea 1 for E and p don’t work for photons, since γ is infinite and m is zero.
         Instead, show that for a photon we have pµ = ℏk µ .

        (e) A system’s center of mass frame is the one where its momentum is zero. For a system with
            total energy E and momentum p, show that the center of mass has velocity v = p/E.

        (f) In Newtonian mechanics, the kinetic energy K of an object with fixed mass m satisfies
            dK = v · dp. Show that this also holds in relativity, assuming the rest mass m is fixed.

     (g) As we’ll discuss in more detail below, the force three-vector is defined as F = dp/dt in
         relativistic mechanics. Show that dK = F · dx, continuing to assume that m is fixed.


                                                         1


    Kevin Zhou                                                             Physics Olympiad Handouts


       Remark
       The result of part (e) is equivalent to saying that momentum p is always associated with the
       motion of energy Ev. This is a very general statement, which also holds at the differential
       level: momentum density is equal to energy flux density. One example of this was given
       in E7, where it was noted that the electromagnetic momentum density p was equal to the
       Poynting vector S, in units where c = 1.

       Idea 2
       In relativistic dynamics problems, it is almost always better to work with energy and mo-
       mentum than velocity; one typically shouldn’t even mention velocities unless the problem
       asks for or gives them.

    We’ll start with some very simple problems to warm up, setting c = 1 throughout.
