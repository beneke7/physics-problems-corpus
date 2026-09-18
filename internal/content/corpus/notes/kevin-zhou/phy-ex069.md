---
id: kevin-zhou-notes-phy-ex069
source: kevin-zhou-notes
native_id: "phy Example 069"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex069
topic: [quantum-physics, electromagnetism]
subtopic: [aharonov-bohm-effect, interference]
math_tools: [geometry-trigonometry]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7628-7671"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The Aharanov–Bohm effect. Consider the double slit experiment, but with a solenoid
hidden behind the wall between the slits. Then the presence of the solenoid affects the interference
pattern, even if its electromagnetic field is zero everywhere the particle goes! To see this, note that
a path from the starting point to a point x picks up a phase
                                               q x
                                                 Z
                                        ∆θ =         A(x′ ) · dx′ .
                                               ℏ
Then the two possible paths through the slits pick up a relative phase
                                     I               Z
                                   q               q             qΦ
                             ∆θ =       A · dx =       B · dS =
                                   ℏ               ℏ              ℏ
which shifts the interference pattern. Again, we see that if Φ is a multiple of Φ0 , the effect vanishes,
but in general there is a physically observable effect.

Note. There are many ways to justify the phases. In the path integral formulation, we sum over
all classical paths with phase eiS/ℏ . The dominant contribution comes from the two classical paths,
so we can ignore all others; the phase shift for each path is just ei∆S/ℏ .


    Alternatively, we can use the adiabatic theorem. Suppose that we have a well-localized, slowly-
moving particle in a vector potential A(x). Then we can apply the adiabatic theorem, where
the parameter is the particle’s position, one can show the Berry connection is A, and the Berry
curvature is B, giving the same conclusion. This method is quite concrete, but requires using the
adiabatic approximation to avoid picking up unwanted extra contributions, such as the dynamical
p · dx phase; such phases are automatically separated out in the path integral approach.
    Yet another way, which is in some sense intermediate between the above two, is to directly use
the algebra of translation operators, as explained here.

Note. Sometimes, the Aharanov–Bohm effect is used to claim that the vector potential is “physical”,
a somewhat vague notion that expresses the intuition that the effect cannot be captured by local
effects of the gauge-invariant electric and magnetic fields alone. This point of view has been contested
by Vaidman, who claims that the phase shift can also be explained through the interaction of the
charged particle’s field with the solenoid. This indicates that the potential is not the only way of
getting the effect, but merely the most convenient way. However, the debate is ongoing.

Note. We may also describe the above effects with fiber bundles, though it adds little because all
U (1) bundles over S 1 are trivial. However, it can be useful to think in terms of gauge patches. If
we cover S 1 with two patches, we can gauge away A within each patch, and the physical phases in
both examples above arise solely from transition functions. This can be more convenient in some
situations, since the effects of A don’t appear in the Schrodinger equations in each patch.

