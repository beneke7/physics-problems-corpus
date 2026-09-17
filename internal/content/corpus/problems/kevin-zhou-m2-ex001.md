---
id: "kevin-zhou-m2-ex001"
source: "kevin-zhou"
native_id: "KZ-M2-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-ex001"
topic: [mechanics]
subtopic: [newton-laws, friction, tension, systems-of-bodies]
math_tools: [algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 1

    Six blocks are attached in a horizontal line with rigid rods, and placed on a table with
    coefficient of friction µ. The blocks have mass m and the leftmost block is pulled with a force
    F so the blocks slide to the left. Find the tension force in the rod in the middle.

    Solution
    There are six objects here and five rods, each with a different tension, so a direct analysis
    would involve solving a system of six equations. Instead, first consider the entire set of six
    blocks as one object; we can do this because the rigid rods force them to move as one. The
    total mass is 6m, and applying Newton’s second law gives
                                                           F
                                  F − 6mgµ = 6ma,         a=  − µg.
                                                          6m
    Next, consider the rightmost three blocks as one object. Their total mass is 3m, and their
    acceleration is the same acceleration a we computed above. This system experiences two
    horizontal force: tension and friction. Newton’s second law gives
                                           T − 3mgµ = 3ma
    and solving for T gives
                                                        F
                                                T =       .
                                                        2


                                                    1
    Kevin Zhou                                                             Physics Olympiad Handouts



       This is intuitive, because the differences of any two adjacent tension forces are the same;
       that’s the amount of tension that needs to be spent to accelerate each block. So the middle
       rod, which has to accelerate only half the blocks, has half the tension.

       The reason we could ignore the tension forces in the other four rods is that the only thing
       they do is ensure the blocks move with the same acceleration. Once we assume this is the
       case, the specific values of the tensions don’t matter; we can just zoom out and forget them.
       It’s just like how within each block there is also an internal tension which keeps it together,
       but we rarely need to worry about its details.

       Idea 3
       To handle a problem where something is just about to slip on something else, set the frictional
       force to the maximal value µN and assume slipping is not yet occurring, so the two objects
       move as one. The same idea holds for problems which ask for the minimal force needed to
       make something move, or the minimal force needed to keep something from moving.
