---
id: inpho-2019-a1
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2019-a1
solution_type: official
source_document: solution-document-inpho-2019-s
source_pdf: cache/phoxiv/inpho/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2019_S.pdf."
---

1. In the lower part of the earth’s atmosphere, the temperature decreases with increase of height.
Choose the origin of the coordinate system at the ground level with the y- axis vertically upward
and the x-axis horizontal. We assume a linear decrease of temperature such that the temperature
at a height y from the ground level is
T(y) = T0(1 − by)
where T0 is the temperature at the ground level. The constant b = 0.023km−1
. We consider
the propagation of sound in the x-y plane. Ignore any attenuation, reflection, and diffraction of
sound.
(a) [1] If v0 is the speed of sound at the ground level, obtain an expression for the speed of sound
v(y) at height y, in terms of v0 and b.
v(y)=
Solution: Speed of sound is
v =
s
γRT
m
(1.1)
where m and γ are the molar mass and adiabatic index of the gas respectively.
v(y) =
s
γRT(y)
m
=
s
γRT0
m
p
1 − by = v0
p
1 − by (1.2)
Here v0 =
p
γRT0/m is the speed of the sound at ground level.
(b) [2] Suppose sound propagates from the origin with an initial angle θ0 with the x-axis. Obtain
an expression for the angle θ made by the direction of propagation of sound with the hori-
zontal at height y, in terms of θ0 and b.
θ =
Solution: Consider the propogation of sound “ray” from one medium to the other.
θ1
i1
θ2
i2
H B C 1 9
INPhO 2019 Page 2 Questions & Answers Last four digits of Roll No.:
From Snell’s law,
sini2
sini1
=
v2
v1
(1.3)
sin(π
2 − θ2)
sin(π
2 − θ1)
=
cosθ2
cosθ1
=
v2
v1
(1.4)
cosθ
cosθ0
=
v(y)
v0
=
p
1 − by (1.5)
θ = cos−1
[cosθ0
p
1 − by] (1.6)
(c) [3] Obtain an expression for the x and y coordinates of a point on the path of propagation as
functions of θ.
x =
y =
Solution:
y =
1
b
1 −
cos2 θ
cos2 θ0
!
(1.7)
dy
dx
= tanθ (1.8)
dx =
2cosθsinθ
tanθbcos2 θ0
dθ (1.9)
x =
Z x
0
dx =
1
2bcos2 θ0
[2(θ − θ0) + sin2θ − sin2θ0] (1.10)
(d) [3] For this part assume the direction of propagation of sound to be horizontal at the origin. For
the case where y is of the order 100 m or less, obtain an approximated expression relating
x and y i.e. y(x). Obtain x for y = 2.00m.
y(x) = Value of x =
Solution: For y ≤ 100m and θ0 = 0, Eq. (1.6) gives θ ≈ 3◦ (very small).
y ≈
1
b

1 − 1 −
θ2
2
!2

 =
1
b
θ2
(1.11)
x ≈
1
2b
(2θ + 2θ) =
2θ
b
(1.12)
x2
=
4y
b
(1.13)
x(y = 2) ≈ 590m (1.14)
Accepted range 585-600m.
Detailed answers can be found on page numbers:
H B C 1 9
INPhO 2019 Page 3 Questions & Answers
