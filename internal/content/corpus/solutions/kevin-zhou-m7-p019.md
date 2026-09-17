---
id: kevin-zhou-m7-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-p019
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

[4] Problem 19. This problem is about the subtle phenomenon of vena contracta. An incompressible
fluid of density ρ is flowing through a tube of area A1, which suddenly contracts to area A2 ≪ A1.
Naively, the flow looks as shown at left below.
18
Kevin Zhou Physics Olympiad Handouts
(a) Argue by energy conservation that v2 ≈
p
2(P1 − P2)/ρ.
(b) Argue that the net force on the fluid shown in the picture is approximately (P1 −P2)A2. Then
argue by momentum conservation that v2 ≈
p
(P1 − P2)/ρ.
(c) The resolution of the paradox is that in part (a), we’re actually solving for the final speed of
the water, and in part (b), we’re actually solving for the horizontal component of the velocity.
So the resolution has to be that the fluid does not exit through the orifice purely horizontally.
Instead, it contracts as it exits, as shown at right above, eventually shrinking to a minimum
area A3, at which point the flow actually is horizontal. Assume for simplicity that P1 ≫ P3.
Show that the final area is A3 ≈ A2/2, so that the hole is effectively only half its size.
(d) Even assuming ideal fluid flow satisfying Bernoulli’s principle, the result above for A3 is not
exact, but is instead off by about 20% for the sudden opening shown above. Is the true value
of A3 higher or lower than A2/2?
(e) How could the shape of the orifice be modified so that A3 is almost exactly A2/2? How could
the orifice be modified so that the water comes out perfectly straight?
Solution. (a) Applying Bernoulli’s principle,
1
2
ρ(v2
2 − v2
1) = P1 − P2.
Since A1v1 = A2v2 and A2 ≪ A1, we have v2
2 − v2
1 ≈ v2
2, so the desired equation follows.
(b) Taking a tube bounded by A1 and A2 and apply F = dp/dt to the fluid within it. The pressure
at the walls is approximately P1 everywhere, so the force cancels out except at the area A2.
The net force is
F ≈ (P1 − P2)A2.
On the other hand, the rate of change of momentum is (dm/dt)v2 = ρA2v2
2, where we again
use v1 ≪ v2, giving the result.
(c) Neglecting P3, Bernoulli’s principle gives
1
2
ρv2
3 ≈ P1.
To use momentum conservation, apply F = dp/dt to a tube bounded by A1 and A3, giving
F ≈ P1A2,
dp
dt
= ρA3v2
3
which gives us
A3
A2
ρv2
3 ≈ P1.
Combining these equations gives A3/A2 ≈ 1/2 as desired.
(d) In reality, the pressure on the right wall is not precisely P1, but instead slightly lower near
the hole because the fluid has nonzero speed there. So the net force is actually larger than
expected, so A3 > A2/2. (Actually calculating this amount exactly would be rather difficult.)
19
Kevin Zhou Physics Olympiad Handouts
(e) We can force the net force to be almost exactly (P1 − P2)A2 with a “Borda mouthpiece.”
This works because by construction, the fluid in the parts jutting out to the right is almost
perfectly at rest.
On the other hand, if we wanted the water to come out perfectly straight, we could simply
make a curved mouthpiece that perfectly follows the path the water would have taken if it
weren’t there, and end it once the water reaches its final area A3. At that point, it will come
out of the hole straight.
Remark
Vena contracta is too subtle for introductory textbooks, but it makes a big practical difference.
For example, if you estimate how long it takes water in a bucket to empty through a hole
using Torricelli’s law, you’ll be off by up to a factor of 2 if you don’t include vena contracta!
And Halliday, Resnick, and Krane don’t consider it in their example titled “thrust on a
rocket”, getting a thrust which is also off. Of course, real plumbers and rocket scientists are
perfectly aware of vena contracta, and carefully design nozzles and drains to account for it.
For further discussion, see this paper.
4 Fluid Systems
Now we put it all together and consider complex mechanical systems with moving fluids.
Idea 7
If a fluid is moving in a complex way, it’s usually difficult to say anything by directly
considering the flow. Instead, it’s easier to apply conservation laws.
