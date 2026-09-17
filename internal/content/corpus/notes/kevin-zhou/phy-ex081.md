---
id: kevin-zhou-notes-phy-ex081
source: kevin-zhou-notes
native_id: "phy Example 081"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex081
topic: [quantum-mechanics]
subtopic: [two-body-systems]
math_tools: [linear-algebra, coordinate-transformations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9660-9690"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Two-body interactions. Suppose that two massive bodies interact with Hamiltonian

                                        p21   p2
                                 H=         + 2 + V (|x1 − x2 |).
                                       2m1 2m2
In this case it’s convenient to switch to the coordinates
                                       m1 x1 + m2 x2
                                 R=                  ,     r = x2 − x1
                                            M
where M = m1 + m2 . Defining the conjugate momenta P = −iℏ∂R and p = −iℏ∂r , we have
                                                         m1 p2 − m2 p1
                                P = p1 + p2 ,      p=                  .
                                                              M
This transformation is an example of a canonical transformation, as it preserves the canonical
commutation relations. The Hamiltonian becomes
                                    P2   p2                1   1   1
                             H=        +    + V (r),         =   +   .
                                    2M   2µ                µ   m1 m2

We see that P 2 /2M commutes with H, so we can separate out the variable R, giving the overall
center-of-mass motion. We then focus on the wavefunction of the relative coordinate, ψ(r). This
satisfies the same equation as a single particle in a central force, with m replaced with µ.
   Finally, we may decompose the total angular momentum L = L1 + L2 into

                                         L=R×P+r×p

which is a “orbit” plus “spin” (really, “relative”) contribution, just as in classical mechanics. The
relative contribution commutes with the relative-coordinate Hamiltonian p2 /2µ + V (r), so the
quantum numbers l and m in the solution for ψ(r) refer to the angular momentum of the particles
in their CM frame.

