---
id: kevin-zhou-notes-phy-ex065
source: kevin-zhou-notes
native_id: "phy Example 065"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex065
topic: [quantum-physics, mechanics]
subtopic: [wave-mechanics, galilean-transform]
math_tools: []
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7215-7238"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. As another example, suppose we wanted to perform a Galilean boost to get a moving
wavepacket. Naively, we would simply take ψ(x − vt, t), but this can’t be right, because this state
evaluated at time t = 0 is precisely the same as a non-moving wavepacket. To actually change the
momentum, we need to add a phase factor; the result is
                                                        2
                                ψv (x, t) = ei(mvx−mv t/2)/ℏ ψ(x − vt, t)

as can be checked by brute force, or shown in a more formal way in the notes on Group Theory.
                                                                                      2
It also makes intuitive sense: the eimvx/ℏ factor shifts the momentum, while the e−imv t/2ℏ factor
accounts for the change in kinetic energy.
   More generally, for a particle in free fall, V (x) = mgx, we have
                                                            2
                             ψff (x, t) = e−i(mgt/ℏ)(x+gt /6) ψ0 (x + gt2 /2, t)

where the wavepacket motion obeys Ehrenfest’s relations. The phase factors have the same explana-
tion as for the uniformly moving wavepacket, and can be derived by integrating over boosts. This
final example also illustrates how forces work in quantum mechanics: a spatial gradient in potential
energy leads to a spatial gradient in phase, which corresponds to momentum.
    Even more generally, you can formulate nonrelativistic quantum mechanics in an arbitrary
noninertial reference frame; just start with the Lagrangian in that frame, perform a Legendre
transformation, and then do canonical quantization to get the Schrodinger equation. However, this
is almost certainly more trouble than it’s worth.

