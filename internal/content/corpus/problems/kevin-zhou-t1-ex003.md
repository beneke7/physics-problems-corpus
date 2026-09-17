---
id: "kevin-zhou-t1-ex003"
source: "kevin-zhou"
native_id: "KZ-T1-EX003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-ex003"
topic: [thermodynamics, mechanics]
subtopic: [ideal-gas, hydrostatics, rotating-frames]
math_tools: [differential-equations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T1-EX003

        Example 3

        A space station is a large cylinder of radius R0 filled with air molecules of mass m. The
        cylinder spins about its axis at an angular velocity ω, and the air rotates along with it. If
        the temperature T is constant inside the station, what is the ratio of the air pressure at the
        center of the station to the pressure at the rim?

        Solution
        We saw in M7 that a fluid next to a moving wall will pick up that wall’s velocity, by viscosity.
        In this scenario, that happens because a gas molecule that bounces off the wall will, on
        average, pick up an additional component of tangential velocity. In the steady state, the gas
        ends up rotating with the walls. It’s therefore simplest to work in the frame rotating with the
        station, in which case the walls and gas are at rest, and we simply have a fluid statics problem.

        By considering force balance on a thin parcel of air of radial thickness dr and area A,

                                               A dP = ρgeff A dr

        where geff = ω 2 r is the centrifugal acceleration. Applying the ideal gas law,
                                                dP   mgeff
                                                   =       dr
                                                P    kB T
        which integrates to give
                                          P (r = 0)        2 2
                                                     = e−mω R0 /2kB T .
                                         P (r = R0 )
