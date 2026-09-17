---
id: kevin-zhou-notes-phy-ex054
source: kevin-zhou-notes
native_id: "phy Example 054"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex054
topic: [rezgések és hullámok, mechanika]
subtopic: [hangegyenlet, viszkozitás]
math_tools: [differenciálegyenletek, kalkulus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6475-6495"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A hang viszkózus csillapítása. Ahogy a hang korábbi tárgyalásakor, a mozgásegyenletet a
∆p = c20 ∆ρ kis paraméterekben linearizálhatjuk. Az eredmény

                    ∂v                                                           ∂(∆ρ)
               ρ0      = −∇(∆p) + η∇2 v + (ζ + η/3)∇(∇ · v),                           = −ρ0 ∇ · v.
                    ∂t                                                             ∂t
A két egyenletből a csillapított hullámegyenlet adódik:

                                  ∂ 2 (∆ρ)    2 2        ζ + 34 η 2 ∂(∆ρ)
                                           = c0 ∇ (∆ρ) +         ∇        .
                                     ∂t2                   ρ0         ∂t

∆ρ = ρ1 e−κx cos(kx − ωt) alakú szinuszos hullám esetén tehát

                                              ω2                ρ0 c20
                                        κ=          ,   ω0 =            .
                                             2ω0 c0            ζ + 43 η

Különösen a nagyobb frekvenciájú hanghullámok terjednek rövidebb távolságra, mielőtt lecsillapodnak.
A gyakorlatban hővezetésből származó csillapítás is fellép.
