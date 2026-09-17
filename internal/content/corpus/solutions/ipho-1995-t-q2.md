---
id: ipho-1995-t-q2
source: ipho
language: en
solution_language: en
translated: false
problem: ipho-1995-t-q2
solution_type: official
source_document: solution-document-ipho-1995-t-s
source_pdf: cache/phoxiv/ipho/1995_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/ipho/1995_T_S.pdf."
---

Solutions to Theoretical Question 2
(a)
Snell’s Law may be expressed as
sinθ
sinθ0
=
c
c0
, (1)
where c is the speed of sound.
Consider some element of ray path ds and treat this as, locally, an arc of a circle of radius R.
Note that R may take up any value between 0 and ∞. Consider a ray component which is initially
directed upward from S.
dz
dθ R
R
ds
θ
In the diagram, ds = Rdθ, or
ds
dθ
= R.
From equation (1), for a small change in speed dc,
cosθdθ =
sinθ0
c0
dc
For the upwardly directed ray c = c0 + bz so dc = bdz and
sinθ0
c0
bdz = cosθdθ , hence dz =
c0
sinθ0
1
b
cosθdθ .
We may also write (here treating ds as straight) dz = dscosθ. So
ds =
c0
sinθ0
1
b
dθ
Hence
ds
dθ
= R =
c0
sinθ0
1
b
.
This result strictly applies to the small arc segments ds. Note that from equation (1), however, it
also applies for all θ, i.e. for all points along the trajectory, which therefore forms an arc of a circle
with radius R until the ray enters the region z < 0.
(b)
0 θ
0 θ
z=0
z z =
0 θ
R sin R
S
Here
zs = R − Rsinθ0
= R(1 − sinθ0)
=
c0
bsinθ0
(1 − sinθ0) ,
from which
θ0 = sin−1
!
c0
bzs + c0
"
.
(c)
0 θ
x=0
x=
R
S
R
H
X
The simplest pathway between S and H is a single arc of a circle passing through S and H. For
this pathway:
X = 2Rcosθ0 =
2c0 cosθ0
bsinθ0
=
2c0
b
cotθ0 .
Hence
cotθ0 =
bX
2c0
.
The next possibility consists of two circular arcs linked as shown.
x=0 x=X
S H
For this pathway:
X
2
= 2Rcosθ0 =
2c0
b
cotθ0 .
i.e.
cotθ0 =
bX
4c0
.
In general, for values of θ0 < π
2 , rays emerging from S will reach H in n arcs for launch angles given
by
θ0 = cot−1
!
bX
2nc0
"
= tan−1
!
2nc0
bX
"
where n = 1,2,3,4,...
Note that when n = ∞, θ0 = π
2 as expected for the axial ray.
(d)
With the values cited, the four smallest values of launch angle are
n θ0 (degrees)
1 86.19
2 88.09
3 88.73
4 89.04
(e)
The ray path associated with the smallest launch angle consists of a single arc as shown:
1
2
3
S H
We seek ) 3
1
dt =
) 3
1
ds
c
Try first:
t12 =
) 2
1
ds
c
=
) π/2
θ0
Rdθ
c
Using
R =
c
bsinθ
gives
t12 =
1
b
) π/2
θ0
dθ
sinθ
so that
t12 =
1
b
!
lntan
θ
2
"π/2
θ0
= −
1
b
lntan
θ0
2
Noting that t13 = 2t12 gives
t13 = −
2
b
lntan
θ0
2
.
For the specified b, this gives a transit time for the smallest value of launch angle cited in the answer
to part (d), of
t13 = 6.6546 s
The axial ray will have travel time given by
t =
X
c0
For the conditions given,
t13 = 6.6666 s
thus this axial ray travels slower than the example cited for n = 1, thus the n = 1 ray will arrive
first.
