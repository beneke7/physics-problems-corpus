---
id: "kevin-zhou-t2-ex013"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-T2-EX013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex013"
topic: [thermodynamics]
subtopic: [heat-conduction, thermal-conductivity, steady-state, spherical-symmetry]
math_tools: [calculus, differential-equations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T2-EX013

       Example 13

       Model a brick pizza oven as a sphere with inner radius R1 , outer radius R2 , and thermal
       conductivity κ. The inside of the oven is held at temperature T1 and the outside of the oven
       is held at temperature T2 . In equilibrium, find T (r), and the power needed to keep the inside
       of the oven at temperature T1 .

       Solution
       Consider a shell of radius r and thickness dr. The outward heat flow through it is
                                                                 dT
                                           P (r) = −κ(4πr2 )        .
                                                                 dr
       In addition, because the shells have constant temperature, there can be no net heat accumu-
       lating in any shell. Thus, P (r) must actually be independent of r. Renaming it to P , we can
       integrate the resulting differential equation to find
                                        Z T (r)            Z r
                                                                 P
                                                  dT = −            2
                                                                      dr
                                         T1                 R1 4πκr

       which gives the solution
                                                             r − R1 R2
                                  T (r) = T1 + (T2 − T1 )                 .
                                                                r R2 − R1
       Now that we know T (r), we can evaluate dT /dr at any radius to find the total power, using
       the first equation. Another slicker way, which doesn’t even require knowing T (r), is to


                                                       20


    Kevin Zhou                                                             Physics Olympiad Handouts



       integrate the first equation all the way from the inside of the oven to the outside,
                                        Z T2            Z R2
                                                                 P
                                               dT = −                dr.
                                         T1              R1    4πκr2

       This gives an expression for the power in terms of the other parameters, yielding
                                                                R1 R2
                                        P = 4πκ(T1 − T2 )              .
                                                               R2 − R1
