---
id: kevin-zhou-notes-phy-ex054
source: kevin-zhou-notes
native_id: "phy Example 054"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex054
topic: [oscillations-and-waves, mechanics]
subtopic: [wave-equation, viscosity]
math_tools: [calculus, differential-equations]
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
Example. The viscous attenuation of sound. As in our earlier treatment of sound, we can linearize
the equation of motion in the small parameters ∆p = c20 ∆ρ. The result is

                    ∂v                                                           ∂(∆ρ)
               ρ0      = −∇(∆p) + η∇2 v + (ζ + η/3)∇(∇ · v),                           = −ρ0 ∇ · v.
                    ∂t                                                             ∂t
Combining these equations yields the damped wave equation

                                  ∂ 2 (∆ρ)    2 2        ζ + 34 η 2 ∂(∆ρ)
                                           = c0 ∇ (∆ρ) +         ∇        .
                                     ∂t2                   ρ0         ∂t

For a sinusoidal wave ∆ρ = ρ1 e−κx cos(kx − ωt), we thus have

                                              ω2                ρ0 c20
                                        κ=          ,   ω0 =            .
                                             2ω0 c0            ζ + 43 η

In particular, higher frequency sound waves propagate a shorter distance before decaying. In
practice, there is also attenuation from heat conduction.

