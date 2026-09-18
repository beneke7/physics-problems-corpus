---
id: usapho-2020-b2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2020-b2
solution_type: official
source_document: solution-document-usapho-2020-s
source_pdf: cache/phoxiv/usapho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2020_S.pdf."
---

Question B2
Mirror Mirror on the Wall
Consider a square room with side length L. The bottom wall of the room is a perfect mirror.* A
perfect monochromatic point source with wavelength λ is placed a distance d above the center of
the mirror, where λ
 d
 L.
mirror
point source
d
L
L
L
2
*Remember that the phase of light reflected by a mirror changes by 180◦.
a. On the right wall, an interference pattern emerges. What is the distance y between the bottom
corner and the closest bright fringe above it? Hint: you may assume λ
 y
 L as well.
Solution
This setup is essentially a double-slit experiment with the second slit being the image of the
point source on the other side of the mirror, with the additional phase shift from the mirror.
The distance between the source and a spot y on the wall is given by
p
(d − y)2 + (L/2)2 and
the distance between the image and a spot y is given by
p
(d + y)2 + (L/2)2. Subtracting
the two distances and adding in the phase shift gives us approximately
L/2
2(d + y)2
L2
−
2(d − y)2
L2
!
+ λ/2.
This distance must be a multiple of λ for interference to occur. Then,
4dy
L
+ λ/2 = mλ.
Substituting m = 1 gives us y = λL
8d .
b. You plan on running an experiment to determine λ in a room with L = 40 m, and you know
that λ is between 550 and 750 nm. You will measure d and y10 (the distance of the tenth fringe
from the corner) with the same ruler (with markings of 1 mm). At what d should you place the
point source to minimize your error in your λ measurement? Roughly what is that minimum
error?
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 16
Solution
Our error is given by
∆λ
λ
=
s
∆d
d
 2
+

∆y10
y10
 2
.
Note that ∆d = ∆y10 ∼ 0.5 mm. From earlier, note that after substituting m = 10,
y10 = 19λL
8d .
If we assume that λ ∼ 650 nm, note that
y10d = 6.2 × 10−5
m2
.
Choosing d = y10 minimizes our error, so we get that d = y10 = 8 mm. Then, ∆λ ≈ 60 nm.
Note: Accept any reasonable uncertainty in tick spacing ∼ 0.5 mm or ∼ 1 mm.
c. Now suppose we place a transparent hemispherical shell of thickness s and index of refraction
n over the source such that all light from the source that directly strikes the right wall passes
through the shell, and all light from the source that strikes the mirror first does not pass through
the shell.
hemispherical shell
L
2
d
At what y is the fringe closest to the bottom-most corner now? (You may find it convenient to
use bxc, the largest integer below x.) What is the spacing between the fringes now? Ignore any
reflections or diffraction from the hemispherical shell.
Solution
Now the optical distance between the source and a spot y on the wall is increased by (n−1)s.
Then, we need
4dy
L
− (n − 1)s + λ/2 = mλ.
To minimize y, we take m to be −
j
(n−1)s
λ − 1
2
k
. Then,
y =
L
4d
(n − 1)s − λ

(n − 1)s
λ
−
1
2

−
λ
2
!
.
Because (n−1)s is just an offset, the spacing between the fringes does not change, i.e., the
spacing is still λL/(4d).
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 17
d. Now, suppose the hemispherical shell is removed, and we instead observe the interference pattern
on the top wall. To the nearest integer, what is the total number of fringes that appear on the
top wall? You may assume that d
 L.
Solution
Now, the distance between the source and a spot x on the wall is given by
p
(L − d)2 + x2
and the distance between the image and a spot on the wall is
p
(L + d)2 + x2 + λ/2. We
do not assume x
 L this time. Subtracting the two distances gives us roughly
p
L2 + x2
r
1 +
2dL
L2 + x2
−
p
L2 + x2
r
1 −
2dL
L2 + x2
+ λ/2 = mλ.
Taylor expanding gives us
2dL
√
L2 + x2
= (m − 1/2)λ.
Then,
x = ±L
s
4d2
(m − 1/2)2λ2
− 1.
For x to be physical, we require that m − 1/2 ≤ 2d/λ.
The maximum allowed x is L/2. Then,
s
4d2
(m − 1/2)2λ2
− 1 ≤
1
2
,
so
4d2
(m − 1/2)2λ2
≤
5
4
.
Thus, we have that
m − 1/2 ≥
4d
√
5λ
.
Then, the number of fringes is
2 ·
2d
λ

1 −
2
√
5

,
where the extra factor of 2 comes from there being two sides to the interference pattern.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 18
