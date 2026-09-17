---
id: "kevin-zhou-m2-ex007"
source: "kevin-zhou"
native_id: "KZ-M2-EX007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-ex007"
topic: [mechanics]
subtopic: [contact-mechanics, friction, statics]
math_tools: []
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

Solution
      If you think about it a bit, you’ll see that the answer isn’t well-defined.




      At the bottom contact point, there are three different possible directions, depending on
      whether you take the normal to the floor, or either of the two sides of the block. The
      other contact point is even more ambiguous, because of the wall magically ending. Is the


                                                    11
    Kevin Zhou                                                               Physics Olympiad Handouts



       normal force perpendicular to the block, perpendicular to the vertical wall, or something else?

       This is a case where the idealization of the normal force breaks down. What happens
       depends on the exact shape of the block and wall, and how deformable they are. For example,
       suppose the block was perfectly rigid, but had slightly rounded corners (not shown in the
       diagram). Then there’s a definite normal direction at the bottom contact point, pointing
       up. Similarly, we could suppose that at the other contact point, the wall actually ends in
       a step with a rounded corner, in which case the normal direction points directly into the block.

       Alternatively, suppose the block and step weren’t rounded, but could deform. Then the
       answer depends on the relative hardness of the materials, and how they were placed in
       contact. For instance, if we suppose the block is much softer, then it could squash at the
       bottom contact point, again leading to a common upward normal direction. But then we
       would expect the step to dig into the block at the other contact point, which yields two
       separate normal forces at that point. Or perhaps the step is made of a softer material
       than the floor, so that it’s the step rather than the block that deforms. Or maybe both deform!

       To reiterate, the issue isn’t that idealizations are unrealistic. Physics uses idealizations,
       like neglecting air resistance and friction, all the time, and they work in appropriate limits.
       The issue is that when you apply the idealizations implied by the diagram, the result is
       mathematically undefined – and you get completely different answers depending on how you
       adjust the idealization. That means the true answer depends crucially on the details.

       Remark
       The above example illustrates why it’s hard to write good physics questions if you don’t
       know exactly what you’re doing. The writers of thoroughly vetted competitions, like the
       IPhO, EuPhO, or NBPhO, or the national Olympiads of America or China, are perfectly
       aware of this issue and always make sure to avoid it. For example, you can see that in
       problems 17 and 22, and example 16, objects are clearly drawn with rounded corners.

       But ill-defined problems are depressingly common in homework assignments and less carefully
       written exams, such as the JEE. If you personally encounter such a problem, your only option
       is to try to read the question writer’s mind; that is, simply start guessing and go with whatever
       gives you tractable results. If you encounter this sort of thing often, in a book or competition,
       then it’s not worth your time. We’re in it to learn about nature, not to please examiners.

       Idea 11: The Painleve Paradox
       Coulomb’s laws for “dry” friction, f ≤ µs N and f = µk N , can lead to mathematical
       contradictions if the coefficients of friction are sufficiently high. For example, equations
       derived from these laws might have no solutions, or multiple solutions.
