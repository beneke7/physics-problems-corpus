---
id: kevin-zhou-notes-phy-ex024
source: kevin-zhou-notes
native_id: "phy Example 024"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex024
topic: [electromagnetism]
subtopic: [magnetic multipoles, current distributions]
math_tools: [vector calculus, Taylor expansion]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1688-1726"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. We can do more complicated variants of these tricks for a general current distribution,

                                         Ji (r′ ) Ji (r′ )(r · r′ )
                                Z                                       
                             µ0      ′
                    Ai (r) =      dr             +                  + ... .
                             4π             r            r3

To simplify the first term, note that

                                    ∂j (Jj ri ) = (∂j Jj )ri + Ji = Ji

where we used ∇ · J = 0. Then the monopole term is a total derivative and hence vanishes. The
intuitive interpretation is that currents must go around in loops, with no net motion; our identity
then says something like ’the center of charge doesn’t move’.
To simplify the second term, note that

                                        ∂j (Jj ri rk ) = Ji rk + Jk ri .

We can thus use this to ‘antisymmetrize’ the integrand,
                   Z               Z                          Z           
                         ′      ′     ′ rj    ′      ′      r     ′      ′
                      dr Ji rj rj = dr (Ji rj − Jj ri ) =     × dr J × r
                                        2                   2               i

where we used the double cross product identity. Then we conclude the dipole field has the same
form as before, with the more general dipole moment
                                             Z
                                           1
                                     m=        dr′ r′ × J(r′ )
                                           2
which is equivalent to our earlier result by the vector identity
                                           Z           Z
                                         1
                                              r × ds = dS.
                                         2
34 2. Electromagnetism


