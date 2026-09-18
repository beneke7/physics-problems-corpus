---
id: kevin-zhou-notes-phy-ex052
source: kevin-zhou-notes
native_id: "phy Example 052"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex052
topic: [continuum-mechanics]
subtopic: [compressible-flow, nozzles]
math_tools: [conservation-laws, mach-number]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6182-6223"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Flow through a duct with a slowly varying cross-section A(x). We approximate all
properties of the flow to depend only on x, and treat the velocity as entirely along x̂. It is useful to
relate quantities to those at a (possibly hypothetical) sonic point. Continuity of the mass flow gives
                                                                    1/2+1/(γ−1)
                            A    ρ1 v1   1 c1 ρ1   1          T1
                               =       =         =                                .
                            A1    ρv     M c ρ     M          T

Inserting our previous expression gives
                                                       1/2+1/(γ−1)
                             A    1        γ−1   2
                                =       1+     (M − 1)             .
                             A1   M        γ+1

Curiously, the right-hand side is not monotonic, but rather has a local minimum at M = 1. This
means that if a sonic point exists, it must appear at the narrowest part of the duct. For subsonic
flow, a decreasing duct area implies increasing flow velocity and decreasing temperature, pressure,
and density, but for supersonic flow the reverse is true.




    Away from the throat, there are two possible values of M for each value of A, and the one that is
actually realized depends on the boundary conditions. Consider a “Laval nozzle”, i.e. a symmetric
duct containing a narrow throat. If there is no pressure difference, the fluid simply doesn’t move
at all. As the pressure difference is increased, the fluid flow grows faster, with M taking a local
maximum at the throat, but remaining subsonic everywhere. At a certain critical pressure, M = 1
is achieved at the throat; at this point, the fluid will continue to speed up past the throat, exiting
with M > 1. This unintuitive behavior is used to maximize thrust in jets and rockets.
    The flow through the nozzle is determined by the input velocity and pressure, and this in turn
determines the output pressure. For subsonic flow, this output pressure must equal atmosphere
pressure, constraining the input data. However, when the flow is supersonic, information cannot
propagate backwards against the flow, so this constraint is not effective. What happens in practice
is that if the output pressure and atmospheric pressure don’t match, a discontinuity called a shock
wave forms at the output. In this regime, we say the flow is “choked”. Changing the pressure at
the output doesn’t change the flow rate at all; it can only change the location of the shock wave.
    We also note that a nozzle can be used in reverse, giving a “diffuser”. If a flow enters a Laval
nozzle already supersonic, then it flows down as the nozzle contracts. If the contraction is sufficient,
M = 1 is achieved at the throat, and the fluid exits with M < 1. This requires the output pressure
to be higher than the input pressure. As for the nozzle, shock waves may form, depending on the
boundary conditions.
