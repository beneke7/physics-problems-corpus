---
id: "kevin-zhou-m2-ex014"
source: "kevin-zhou"
native_id: "KZ-M2-EX014"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-ex014"
topic: [mechanics]
subtopic: [fluid-statics, surface-tension, young-laplace]
math_tools: [geometry]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

the curved face must balance the force on the flat face, which is πR2 P . The same logic must
  hold for the sphere, since the forces on the curved face are the same, so the answer is πR2 P .

  This trick will come in handy for several future problems. It also generalizes to surfaces of
  arbitrary shape, as discussed in E1. Concretely, suppose a surface S has boundary C, and
  consider any other surface S ′ with the same boundary. Then by the same logic, the closed
  surface formed by S and S ′ together experiences no net pressure force, so the pressure forces
  on S and S ′ are equal in magnitude.

  Idea 13
  The surface of a fluid carries a surface tension γ. If one imagines dividing the surface into two
  halves, then γ is the tension force of one half on the other per length of the cut. Specifically,
  for a small segment ds along the cut, where the normal vector to the surface is n̂, the surface
  tension force is
                                            dF = γ ds × n̂
  which means the force acts along the surface and perpendicular to the cut.

  Example 15

  A spherical soap bubble of radius R and surface tension γ is in air with pressure P , and
  contains air with pressure P + ∆P . Compute ∆P .

  Solution
  We use the result of the previous problem to conclude that the force of one hemisphere
  on another is πR2 ∆P . This must be balanced by the surface tension force. By imagining
  cutting the surface of the bubble in half, the surface tension force is γL where L is the total
  length of the surface connecting the hemispheres.

  At this point, we can write L = 2πR, giving
                                                      2γ
                                            ∆P =         .
                                                      R
  This is called the Young–Laplace equation. However, in this particular case, this is not the
  right answer. The reason is that we should actually take L = 4πR because the surface tension
  is exerted at both the inside and outside surfaces of the bubble wall, and thus the answer is
                                                      4γ
                                            ∆P =         .
                                                      R
  The increased pressure inside balances the surface tension, which wants to collapse the bubble.

  If you’re confused about why L = 4πR, you can also think about it in terms of energy. Surface
  tension arises from the fact that it costs energy to take soapy water and stretch it out into a
  surface, because this breaks some of the attractive intermolecular bonds. The Young–Laplace
  equation would give the correct answer for a ball of soapy water. But for a bubble of soapy


                                                 21
    Kevin Zhou                                                               Physics Olympiad Handouts



       water, twice as much soapy water/air surface is created. So the energy cost is double, and
       the force is double.
