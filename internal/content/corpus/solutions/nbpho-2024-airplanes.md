---
id: nbpho-2024-airplanes
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2024-airplanes
solution_type: official
source_document: solution-document-nbpho-2024-s
source_pdf: cache/phoxiv/nbpho/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2024_S.pdf."
---

8. AıRPLANEſ (7 points) — Solution by Tudor
Plopeanu.
i) (1 point) Let ⃗ w be the speed of the wind at
the airplanes’ altitude, and let ⃗ u1 and ⃗ u2 be
the planes’ respective speeds in absence of
wind. ⃗ v1 = ⃗ w + ⃗ u1, ⃗ v2 = ⃗ w + ⃗ u2. Let O′
be the point such that ⃗ OO′ = ⃗ w, A the point
suchthat ⃗ OA = ⃗ v1, andB thepointsuchthat
⃗ OB = ⃗ v2. As |⃗ w − ⃗ v1| = |⃗ w − ⃗ v2|, we know
that O′
lies on the perpendicular bisector of
(AB), which we shall denote as l. A quick
check also yields that all points on this line
are valid selections for ⃗ w. |⃗ u1| = |AO′
|. We
can find the minimal airspeed as the length
of the perpendicular from A to l, of length
|AB|/2. For a vector result in terms of⃗ v1 and
⃗ v2, we have
|⃗ u1|min = |⃗ v1 −⃗ v2|/2
=
1
2
q
v2
1 + v2
2 − 2v1v2 cosα.
Grading:
Thisisrelevantforallthreesubproblems.
The solutions are mainly geometric, how‐
everseveralstudentshavetriedsolvingitina
more algebraic manner. If it yielded the cor‐
rect answer or near correct answer, points
weregiven,butotherwisepartialpointswere
not given.
• Representingtheproblemwithvectorsand
adding the velocities correctly (0.2pts)
• Wrong order or sign (‐0.1pts)
• The wind velocity vector w on perpendicu‐
lar bisector of (AB) (0.4pts)
• The minimum airspeed needs w to lie on
the intersection of AB and the perpendic‐
ular bisector (0.1pts)
• calculating correct answer (0.3pts)
• Small error but reasonable answer with
correct units, or not expanded answer that
is simple to expand (‐0.1pts)
ii) (3points)The minimal wind speed is given
by the length of the perpendicular from O to
l. This is the length of (⃗ v1 + ⃗ v2)/2 projected
on ⃗ v1 −⃗ v2, and can be found as
|⃗ w|min =
|(⃗ v1 +⃗ v2) · (⃗ v1 −⃗ v2)|
2|⃗ v1 −⃗ v2|
=
||⃗ v1|2
− |⃗ v2|2
|
2|⃗ v1 −⃗ v2|
=
|v2
1 − v2
2|
2
p
v2
1 + v2
2 − 2v1v2 cosα
.
Grading:
• Representingtheproblemwithvectorsand
adding the velocities correctly (0.5pts)
• The wind velocity vector w on perpendicu‐
lar bisector of (AB) (0.5pts)
• Thewindvelocityissmallestwhenitisper‐
pendicular to l (0.5pts)
• Calculating the correct answer (1.5pts)
• Small error but reasonable answer with
correct units, or not expanded answer that
is simple to expand (‐0.5pts)
iii) (3 points) In this situation, |⃗ w − ⃗ v1| =
2|⃗ w − ⃗ v2|, so O′
is on the Apollonius’s circle
with respect to the points A and B, such that
the points on the circle are 2 times closer to
B thantoA. LetitscenterbeO′′
. Itsradiusis
RA = 2|⃗ v1 −⃗ v2|/3 (this can be found by con‐
sidering the intersection points of the Apol‐
loniuscirclewiththelineAB). Wearetasked
to find the shortest distance from O to this
circle,whichisfoundas|OO′′
|−RA. Wenote
that ⃗ OO′′ = (4/3)⃗ v2 − (1/3)⃗ v1. The minimal
wind speed is thus
|⃗ w|min =
4
3
⃗ v2 −
1
3
⃗ v1 −
2
3
|⃗ v2 −⃗ v1|
=
√
17 − 8cosα − 4sin α
2
3
v.
Grading:
• Representingtheproblemwithvectorsand
adding the velocities correctly (0.2pts)
• The wind velocity vector w needs to lie
on the Apollonius circle (doesn’t need the
name) (1.3pts)
• if one realises it is a circle, but not the cor‐
rect one (0.5pts) is given
• Calculating the RA (0.5pts)
• Calculating the correct answer (1pts)
• Small error but reasonable answer with
correct units, or not expanded answer that
is simple to expand (‐0.5pts)
