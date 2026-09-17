---
id: kevin-zhou-m1-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p001
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[2] Problem 1. Let’s investigate some features of this solution.
(a) By using results from P1, verify that v(t) makes sense for both small times and large times.
(b) If the projectile is then caught at the launch point, did it spend more time going up or down?
(c) Without calculating, think for a moment and guess: is the total time longer or shorter than
for a projectile without drag?
Solution. (a) For small times (αt ≪ 1), we have
v(t) ≈ (1 − αt)v0 +
g
α
(−αt) = v0 − (g + αv0)t
1
Kevin Zhou Physics Olympiad Handouts
which makes sense, since it’s just the result of uniform acceleration g + αv0, under the initial
net force. For large times (αt ≫ 1), the exponentials decay away and we get v(t) ≈ −g/α,
which is the terminal velocity.
(b) For a fixed height, consider how fast the projectile is moving when it passes that point going
up or down. Since the gravitational potential energy is the same, and the drag force does
only negative work, it must be going slower on the way down. Since it’s going slower at every
point going down, the trip down has to take longer.
(c) It’s not obvious, since the drag force makes the projectile turn around faster, but then slows
it on the way down. It turns out that the total time is always shorter with linear drag.
In fact, this is quite difficult to guess, as the case of linear drag is precisely on the boundary
between two possible answers. That is, if the drag force is proportional to |v|n, then it turns
out that the trajectory with drag always takes less time for n ≥ 1, but for n < 1 it depends on
the initial speed. (This makes intuitive sense, as when n is high, the drag force rises quickly
with speed. The speed will tend to be higher on the way up than the way down, so the effect
of the drag force is more important on the upward part, where it points down.) You can find
proofs of all these statements here.
