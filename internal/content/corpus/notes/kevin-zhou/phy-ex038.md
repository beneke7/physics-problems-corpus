---
id: kevin-zhou-notes-phy-ex038
source: kevin-zhou-notes
native_id: "phy Example 038"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex038
topic: [statistical-mechanics]
subtopic: [thermodynamics, elasticity]
math_tools: [maxwell-relations, partial-derivatives]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3439-3458"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Work for a rubber band. Instead of dW = −pdV , we have dW = f dL, where f is the
tension. Now, we have                                
                         ∂S           ∂f         ∂f      ∂L
                               =−            =−
                         ∂L T         ∂T L       ∂L T ∂T f
where we used a Maxwell relation, and both of the terms on the right are positive (rubber bands act
like springs, and contract when cold). The sign can be understood microscopically: an expanding
gas has more position phase space, but if we model a rubber band as a chain of molecules taking a
random walk with a constrained total length, there are fewer microstates if the length is longer.
    Next, using the triple product rule gives
                                                  
                                          ∂S      ∂T
                                                       >0
                                          ∂T L ∂L S

and the first term must be positive by thermodynamic stability; therefore a rubber band heats up
if it is quickly stretched, just the opposite of the result for a gas.
66 3. Statistical Mechanics


