---
id: kevin-zhou-m1-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-ex001
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

Example 1
When a projectile moves slowly through air, the drag is linear in the velocity, F = −αmv.
Find the velocity v(t) of a projectile thrown upward at time t = 0 with speed v0.
Solution
We write Newton’s second law as
dv
dt
= −g − αv
and multiply through by dt. Integrating both sides from the initial condition to time tf gives
Z v(tf)
v0
dv
g + αv
= −
Z tf
0
dt.
Performing the integrals gives
1
α
log(g + αv)
v(tf)
v0
= −tf.
Renaming tf to t and solving for v yields
v(t) = e−αt
v0 +
g
α
(e−αt
− 1).
This renaming is necessary because we don’t want to confuse t, the dummy variable that we
are integrating over, with tf, the time at which we want to evaluate the velocity; t ranges
from zero to tf. Unfortunately, often people just call both of these t, so you need to watch
out.
