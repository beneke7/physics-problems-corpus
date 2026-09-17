---
id: kevin-zhou-notes-phy-ex030
source: kevin-zhou-notes
native_id: "phy Example 030"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex030
topic: [statistical-mechanics]
subtopic: [entropy, canonical-ensemble]
math_tools: [taylor-expansion, thermodynamic-limit]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3102-3118"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. As we will see below, the entropy of an ideal gas depends on energy logarithmically,

                                          S(E) ∼ N log E.

The entropy thus admits a good Taylor series expansion,
                                                       N   ϵ2 N
                              S(E − ϵ) ∼ S(E) − ϵ        −      + ....
                                                       E   2 E2
In the thermodynamic limit the higher order terms are suppressed by powers of ϵ/E, which is small
because ϵ is a system energy and E is a reservoir energy. This allows the derivation of the canonical
ensemble to go through. On the other hand, if we expanded the number of states Ω(E) ∼ E N ,

                                                         ϵ2
                      Ω(E − ϵ) ∼ Ω(E) − ϵN E N −1 +         N (N − 1)E N −2 + . . .
                                                         2
and higher-order terms are suppressed by powers of N ϵ/E, which is not small. (Another way of
saying this is that the thermodynamic limit is N → ∞, but with E/N held fixed.)
