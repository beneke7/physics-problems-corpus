---
id: kevin-zhou-w1-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-ex003
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

Example 3
Suppose a string defined for x < 0 ends at a hard wall at x = 0. Show that any wave directed
towards the wall will be reflected back upside-down.
Solution
We suppose that we send in a wave of the form
yin(x,t) = f(kx − ωt).
Let the reflected wave be a general wave traveling backward,
yr(x,t) = g(−kx − ωt).
Both of these expressions only have physical meaning for x < 0, since the string only exists
there. Now, the boundary condition is y(0,t) = 0, so we have
f(−ωt) + g(−ωt) = 0.
This tells us precisely that g = −f, so the wave is reflected upside-down but otherwise
unchanged.
There’s an easy way to visualize what’s going on here. We can imagine that there really is
string for x > 0, but that the point x = 0 stays fixed for some reason. Then this situation
corresponds to an incoming wave coming from the left, and a flipped wave coming from the
right. The two meet and cancel at x = 0, and the flipped wave continues on going to the
left, where the physical string is. Fundamentally, this story works for the same reason as the
method of images in electromagnetism: as long as you satisfy the boundary conditions, you
can do whatever you want beyond the boundary.
[1] Problem 18. Another type of boundary condition is the “soft” boundary condition, which requires
dy/dx = 0 at x = 0. Show that waves are reflected from this boundary but not flipped.
Solution. Let the reflected wave again be a general wave traveling backward,
yr(x,t) = g(−kx − ωt).
The boundary condition is
∂
∂x
(f(kx − ωt) + g(−kx − ωt))|x=0 = kf′
(−ωt) − kg′
(−ωt) = 0
which tells us that f = g up to a constant. Of course, that constant is just the initial height of the
string at x = 0, which we set to zero. Thus, f = g, so the wave is reflected without a sign flip.
