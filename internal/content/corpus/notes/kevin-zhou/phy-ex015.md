---
id: kevin-zhou-notes-phy-ex015
source: kevin-zhou-notes
native_id: "phy Example 015"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex015
topic: [classical mechanics]
subtopic: [simple harmonic oscillator, action-angle variables]
math_tools: [calculus, canonical transformations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1072-1113"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. The simple harmonic oscillator. The Hamiltonian is

                                                p2  1
                                           H=      + mω 2 q 2
                                                2m 2
and we switch from (q, p) to (θ, I), where

                                                           √
                                     r
                                       2I
                               q=          sin θ,     p=    2Imω cos θ.
                                       mω
To confirm this is a canonical transformation, we check that Poisson brackets are preserved; the
simplest way to do this is to work backwards, noting that
                                              √        √
                              {q, p}(θ,I) = 2{ I sin θ, I cos θ}(θ,I) = 1

as desired. In these new coordinates, the Hamiltonian is simply

                                        H = ωI,     θ̇ = ω, I˙ = 0.

We have “straightened out” the phase space flow into straight lines on a cylinder. This is the
simplest example of action angle variables.

  • In general, for n degrees of freedom, we would like to find variables (θi , Ii ) so that the Hamiltonian
    is only a function of the Ii . Then the Ii are conserved, and θ̇i = ωi , where the ωi depend on
    the Ii but are time independent. When the system is bounded, we scale θi to lie in [0, 2π). The
    resulting variables are called action-angle variables, and the system is integrable.

  • Liouville’s theorem states that if there are n mutually Poisson commuting constants of motion
    Ii , then the system is integrable. (At first glance, this seems to be a trivial criterion – how
    could one possibly prove that such constants of motion don’t exist? However, it is possible; for
    instance, Poincare famously proved that there were no such conserved quantities for the general
    three body problem, analytic in the canonical variables and the masses.)

  • Integrable systems are rare and special; chaotic systems are not integrable. The question of
    whether a system is integrable has to do with global structure, since one can always straighten
    out the phase space flow lines locally.

  • The motion of an integrable system lies on a surface of constant Ii . These surfaces are topolog-
    ically tori Tn , called invariant tori.

