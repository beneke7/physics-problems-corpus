---
id: "kevin-zhou-m7-ex018"
source: "kevin-zhou"
native_id: "KZ-M7-EX018"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m7-ex018"
topic: [fluid-mechanics]
subtopic: [surface-tension, capillarity, contact-angle]
math_tools: [geometry-trigonometry]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 18

    A very thin, hollow glass tube of radius r is dipped vertically inside a container of water.

    Find the equilibrium height of the water in the tube.

                                                   22
Kevin Zhou                                                              Physics Olympiad Handouts

  Solution
  In M2, we considered problems that could be solved knowing only the “surface tension
  of water” γ, which is the energy cost per unit area of having a water-air interface. But
  in this problem there is also a water-glass interface, and the answer to the question
  depends on precisely how water and glass interact. Specifically, you need to know the sur-
  face tension coefficient γwg which determines the energy cost of having a water-glass interface.

  Fortunately, it turns out you don’t need to know γwg if you know the contact angle θ, i.e. the
  angle between the glass and water surface at the top of the meniscus, which is drawn as
  acute in the diagram above. We’ll just treat θ as a given, but for an explanation of how θ is
  determined, see T3 or section 5.5 of Lautrup.

  Since the glass tube is very thin, surface tension determines the shape of the water-air
  surface, so it is spherical since spheres minimize area. By some elementary geometry, one
  can show that the radius of curvature of this sphere is R = r/ cos θ.

  We showed using force balance arguments in M2 that the pressure inside the curved water
  surface is lower than atmospheric pressure by ∆P = 2γ/R. On the other hand, we also know
  from Pascal’s principle that ∆P = ρgh. Equating the two gives
                                                2γ cos θ
                                           h=            .
                                                  ρgr
  This is Jurin’s law.

  Physics problems often assume that water and glass have zero contact angle. This implies
  that water perfectly wets glass, i.e. that a droplet of water placed on a horizontal glass surface
  will spread to cover it completely. We will follow this assumption below, though in practice,
  glass tends to quickly get coated in a layer of impurities, leading to a nonzero contact angle.
