---
id: kevin-zhou-e5-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e5-p019
solution_type: author
source_document: solution-document-kevin-zhou-e5sol
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E5Sol.pdf."
---

[3] Problem 19. Consider two concentric rings of radii r and R ≫ r.
(a) Compute the mutual inductance by considering a current through the larger ring.
(b) Compute the mutual inductance by considering a current through the smaller ring, and verify
your results agree. (Hint: this can be done without difficult integrals.)
In general, computing mutual inductance is a hard and practically important problem; there have
been whole books written on the subject.
Solution. (a) The field at the center is µ0I/2R, so the flux through the small ring is Φ =
(µ0I/2R)πr2, so L12 = µ0πr2
2R .
(b) Consider the entire infinite plane the smaller ring lies in. The key idea is that the total flux
through this plane is zero: every magnetic flux line due to the ring that goes up through the
plane comes down through it somewhere else. Now decompose this plane into the part in the
big ring and the part outside. We have
Φplane = Φin + Φout = 0
which means Φin = −Φout. This is useful because calculating Φin is very complicated. Cal-
culating Φout is easy because the whole region is far from the small ring, so its field can be
approximated as a dipole field.
The field at a distance s away in the plane of the rings is B = Bzẑ where Bz = µ0Iπr2
4πs3 . The
flux is then
|Φin| = |Φout| =
µ0Ir2
4
Z ∞
R
1
s3
2πsds =
µ0Iπr2
2R
Dividing by I gives the same result as (a), as expected.
21
Kevin Zhou Physics Olympiad Handouts
[2] Problem 20 (MPPP 181). Three nearly complete circular loops, with radii R, 2R, and 4R are
placed concentrically on a horizontal table, as shown.
A time-varying electric current is made to flow in the middle loop. Find the voltage induced in the
largest loop at the moment when the voltage between the terminals of the smallest loop is V0.
Solution. As you might have noticed from the previous problems, inductances generally scale with
one power of length. In this case, the only length scale is the radii of the rings, so the mutual
inductance of the 2R and 4R loops is twice that of the 2R and R loops by dimensional analysis.
Since V0 = LR,2R
˙ I2R, we have V4R = L2R,4R
˙ I2R = 2V0.
But there’s a subtlety: in problem 18, we found that the self-inductance of a wire loop depended
on the radius r of the wire, so why didn’t we allow it in the dimensional analysis here? The point
is that the self-inductance of a wire loop depends on the flux the loop puts through itself, so it
depends on the very large magnetic fields very closer to the wire. But a mutual inductance only
depends on the flux one loop puts through another, and here, all points of the second loop are far
away from the first loop. So the wire radius doesn’t matter, just like how it didn’t in problem 19.
4 Magnetism
In this section we’ll dip a little into atomic physics and the origin of magnetism. However, a proper
understanding of this subject requires quantum mechanics, as we’ll cover in T3 and X3.
Idea 6
A spinning object of charge q and mass m carries a magnetic dipole moment µ and angular
momentum J. If its mass and charge distributions are proportional, then µ and J point in
the same direction, and in classical mechanics, their ratio is always µ/J = q/2m.
In quantum mechanics, it turns out that µ/J = qg/2m, where the g-factor is an order-one
number, which is about 2 for the electron. Unfortunately, there’s no way to derive this result
with the Olympiad syllabus, so problems about magnetism can at best make rough estimates.
