---
id: "kevin-zhou-m7-ex018"
source: "kevin-zhou"
native_id: "KZ-M7-EX018"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m7-ex018"
topic: [Folyadékmechanika]
subtopic: [felületi feszültség, kapillaritás, érintkezési szög]
math_tools: [geometria és trigonometria]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Example 18

    A very thin, hollow glass tube of radius r is dipped függőlegesly inside a container of víz.

    Keressük meg the egyensúly height of the víz in the tube.

                                                   22


Kevin Zhou                                                              Physics Olympiad Handouts

  Solution
  In M2, we tekintsüked problems that could be solved knowing only the “surface feszültség
  of víz” γ, which is the energy cost per unit area of having a víz-air interface. But
  in this problem there is also a víz-glass interface, and the answer to the question
  depends on precisely how víz and glass interact. Spechaically, you need to know the sur-
  face feszültség coefficient γwg which determines the energy cost of having a víz-glass interface.

  Fortunately, it turns out you don’t need to know γwg ha you know the contact angle θ, i.e. the
  angle between the glass and víz surface at the top of the meniscus, which is drawn as
  acute in the diagram above. We’ll just treat θ as a given, but for an explanation of how θ is
  determined, see T3 or section 5.5 of Lautrup.

  Since the glass tube is very thin, surface feszültség determines the shape of the víz-air
  surface, so it is spherical since gömbs minimize area. By some elementary geometry, one
  can show that the radius of curvature of this gömb is R = r/ cos θ.

  We showed using erő balance arguments in M2 that the nyomás inside the curved víz
  surface is lower than atmospheric nyomás by ∆P = 2γ/R. On the other hand, we also know
  from Pascal’s principle that ∆P = ρgh. Equating the two gives
                                                2γ cos θ
                                           h=            .
                                                  ρgr
  This is Jurin’s law.

  Physics problems often tételezzük fel that víz and glass have zero contact angle. This implies
  that víz perfectly wets glass, i.e. that a droplet of víz placed on a vízszintes glass surface
  will spread to cover it completely. We will follow this assumption below, though in practjég,
  glass tends to quickly get coated in a layer of impurities, leading to a nonzero contact angle.
