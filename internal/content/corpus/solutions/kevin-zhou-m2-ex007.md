---
id: kevin-zhou-m2-ex007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex007
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

Example 7
Here’s an example which is taken from a real book.
The problem asks about the conditions for this perfectly rectangular block to stay static.
Let’s ask something even more basic: which way do the normal forces on the block point?
Solution
If you think about it a bit, you’ll see that the answer isn’t well-defined.
At the bottom contact point, there are three different possible directions, depending on
whether you take the normal to the floor, or either of the two sides of the block. The
other contact point is even more ambiguous, because of the wall magically ending. Is the
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
20
Kevin Zhou Physics Olympiad Handouts
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
Coulomb’s laws for “dry” friction, f ≤ µsN and f = µkN, can lead to mathematical
contradictions if the coefficients of friction are sufficiently high. For example, equations
derived from these laws might have no solutions, or multiple solutions.
[2] Problem 22 (Kalda). A rod is hinged to the ceiling, so that it makes an angle α with the vertical.
Underneath, a thin board is being dragged on the floor. The coefficient of (static and kinetic)
friction is µ1 between the board and rod, and µ2 between the board and floor. The rod is meant to
stop the board from being dragged to the right, no matter how hard or how quickly it is pulled. Is
this possible? If so, what are the conditions on the parameters that allow this to occur?
Solution. Let the rod have mass m and length ℓ, and suppose it feels a normal force N and friction
force f from the board. Then torque balance on the rod about the hinge gives
Nℓsinα =
ℓ
2
mg sinα + fℓcosα.
21
Kevin Zhou Physics Olympiad Handouts
When friction is maximal and the board is about to move, f = µ1N, so
N =
mg sinα
2(sinα − µ1 cosα)
.
It becomes impossible to move the board when µ1 becomes large enough to make this N blow up,
so the board is stuck if
µ1 ≥ tanα.
Physically, what’s going on is that the harder you pull, the larger the normal force becomes, and
so the larger the friction can be. For sufficiently large µ1, the growth in the friction force outpaces
the growth in the applied force. This is an example of “jamming”. Note that µ2 doesn’t matter; it
does contribute to the friction force on the board, but it doesn’t affect when jamming begins.
Remark
In problem 22 you showed that for sufficiently strong friction, it is impossible for a static
board to start moving to the right. But if we suppose the board was already moving to the
right, then solving for the normal force will yield a mathematical contradiction. Specifically,
the rightward friction force on the rod is so strong that it rotates the rod even harder into
the board, requiring an even larger normal force to keep the rod from going through the
board, which induces an even larger friction force, and so on. Technically, there is a solution
for the normal force, but it’s negative, which doesn’t make any sense either.
Of course, you’ve probably seen what happens in real life. The board tends to move in
fits and starts. The rod creaks and cracks, and might even visibly bounce up and down.
But you can’t understand this behavior through the idealized laws of friction. Instead, we
need “contact mechanics”, which studies how the rod and board dynamically deform when
subject to stress. (In section 8, we’ll consider some of the simplest ideas of contact mechanics.)
Good Olympiad questions are designed to avoid triggering Painleve paradoxes. For an
excellent further discussion of these issues, with many examples, see this paper. More
generally, real friction (studied in the field of tribology) can be rather complicated even when
the equations aren’t paradoxical. For example, lubricated materials don’t obey Coulomb’s
laws; instead the friction force has to be computed with fluid mechanics. Materials can even
have adhesive forces, which allow them to roll without slipping down a vertical wall.
5 Extended Bodies
Next, we’ll consider problems with continuous bodies, where one often needs to consider forces and
torques acting on infinitesimal pieces.
Example 8
Find the tension in a circular rope of radius R spinning with angular velocity ω and mass
per length λ.
22
Kevin Zhou Physics Olympiad Handouts
Solution
Consider an infinitesimal segment of the rope, spanning an angle dθ.
The mass of this segment is dm = Rλdθ. The total force is radially inward, with magnitude
dF = 2T sin
dθ
2
≈ T dθ
where we used the small angle approximation. This is the centripetal force, so
dF = (dm)ω2
R.
Combining these results yields T = R2ω2λ.
