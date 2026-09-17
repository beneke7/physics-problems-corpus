---
id: solution-document-ipho-2002-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2002/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2002-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2002/T3_S.pdf."
---

III - 1
SOLUTION T3 : . A Heavy Vehicle Moving on An Inclined Road
To simplify the model we use the above figure with h1 = h+0.5 t
Ro = R
1. Calculation of the moment inertia of the cylinder
Ri=0.8 Ro
Mass of cylinder part : mcylinder =0.8 M
Mass of each rod : mrod = 0.025 M
θ
l
l
h1III - 2
pts 0.1 7 . 0 00533 . 0 8 656 . 0
becomes each wheel of inertia moment The
pts 0.5 00533 . 0 ) 64 . 0 ( 025 . 0
3
1
3
1
3
1
pts 0.5 656 . 0 ) 64 . 0 1 ( ) 8 . 0 ( 5 . 0
) ( 5 . 0 ) ( 5 . 0 2
pts 0.4 ...
2 2 2
2 2 2 3
0
2
rod
2
2 2
2 2 4 4 3
.
2
2
rod1
2
.
2 2
MR MR x MR I
MR R M R m R dr r dm r
MR R M
R R m R R dr r dm r
dm r dm r dm r dm r I
in rod in
Rin
i o cylinder i o
Ro
Ri shell cyl
n rod shell cyl wholepart
= + =
= = = = =
= + =
+ = − = =
+ + + = =
∫ ∫
∫ ∫
∫ ∫ ∫ ∫
λ λ
πσ πσ
2. Force diagram and balance equations:
To simplify the analysis we devide the system into three parts: frame (part1) which
mainly can be treated as flat homogeneous plate, rear cylinders (two cylinders are treated
collectively as part 2 of the system), and front cylinders (two front cylinders are treated
collectively as part 3 of the system).
Part 1 : Frame
0.4 pts
The balance equation related to the forces work to this parts are:
l
l
h1
N13
m1g
f13h
f12h
N12III - 3
Required conditions:
pts 0.2 (3) 0 N N
that so zero, is O against on Then torsi
pts 0.2 (2) cos
axis vertical inthe force of Balance
pts 0.2 (1) sin
axis horizontal inthe force of Balance
1 13 1 12 13 12
13 12 1
1 13 12 1
= + + −
+ =
= − −
h f h f l l
N N g m
a m f f g m
h h
h h
θ
θ
Part two : Rear cylinder
0.25 pts
pts 0.15 (5) 0 cos N
pts 0.15 (4) sin f
: rear wheel in condition balance From
21 2
2 21h
= − −
= + −
θ
θ
Mg N
Ma Mg f
For pure rolling:
(6) a f or 2 2
2
2 2
R
I
R
a
I I R f
=
= = α
Forrollingwithsliding:
F2 = uk N2 (7)
0.2 pts
Part Three : Front Cylinder:
f21h
Mg
N21
f2
N2III - 4
0.25 pts
pts 0.15 (9) 0 cos N
pts 0.15 (8) sin f
: l front whee inthe condition balance From
31 3
3 31h
= − −
= + −
θ
θ
Mg N
Ma Mg f
For pure rolling:
(10) a f or 2 3
3
3 3
R
I
R
a
I I R f
=
= = α
Forrollingwithsliding:
F3 = uk N3 (11)
0.2 pts
3. From equation (2), (5) and (9) we get
m1 gcosθ = N2 – m2g cosθ+N3-m3g cosθ
N2 + N3 = (m1+m2+m3)gcosθ=7Mgcosθ (12)
And from equation (3), (5) and (8) we get
(N3-Mg cos θ)l – (N2-Mg cos θ) l=h1 (f2 +Ma-Mg sinθ+f3+Ma-Mg sinθ)
(N3 – N2)= h1 (f2 +2Ma-2Mg sinθ+f3)/l
Equations 12 and 13 are given 0.25 pts
CASE ALL CYLINDER IN PURE ROLLING
From equation (4) and (6) we get
f31h
Mg
N31
f3
N3III - 5
f21h = (I/R2
)a +Ma-Mg sinθ (14) 0.2 pts
From equation (8) and (10) we get
f31h = (I/R2
)a +Ma-Mg sinθ (15) 0.2 pts
Then from eq. (1) , (14) and (15) we get
5Mg sinθ - {(I/R2
)a +Ma-Mg sinθ}-{(I/R2
)a +Ma-Mg sinθ}= m1a
7 Mg sinθ = (2I/R2
+7M)a
θ
θ θ
sin 833 . 0
7 . 0
2 7
sin 7
2 7
sin 7
2
2
2
g
R
MR
M
Mg
R
I
M
Mg
a =
+
=
+
= (16) 0.35 pts
θ θ
θ θ θ
θ θ θ
sin 41 . 0 cos Mg 3.5
] sin sin 833 . 0 ) 7 . 0 [( 3.5Mgcos
] sin sin 833 . 0 ) [( cos
2
7
1
1
2
1
3
Mg
l
h
Mg g M M
l
h
Mg g
R
I
M
l
h
g
M
N
+ =
− × + + =
− × + + =
θ θ
θ
θ
θ
θ θ θ
sin 0.41 cos 3.5g
] sin 2
7 7 . 0
sin 7
) 7 . 0 [( - cos 3.5g
] sin sin 833 . 0 ) [( cos
2
7
1
1
2
1
2
Mg
l
h
Mg
M M
Mg
M M
l
h
Mg g M
R
I
l
h
g
M
N
− =
−
+
+ =
− × + − =
0.2 pts
The Conditions for pure rolling:
3 2
3
3
2 2
2
2
3 3 2 2
a
R
I
and a
R
I
and
N N
N f N f
s s
s s
µ µ
µ µ
≤ ≤
≤ ≤
0.2 pts
l
h
Mg
l
h
g M
s
s
s
1
1
41 . 0 5831 . 0
5 . 3
tan
) sin 0.41 cos (3.5Mg sin 833 . 0 7 . 0
becomes equation left The
µ
µ
θ
θ θ µ θ
+
≤
− ≤ ×III - 6
l
h
mg
l
h
g m
s
s
s
1
1
41 . 0 5831 . 0
5 . 3
tan
) sin 0.41 cos (3.5mg sin 833 . 0 7 . 0
becomes equation right the While
µ
µ
θ
θ θ µ θ
−
≤
+ ≤ ×
(17) 0.1 pts
CASE ALL CYLINDER SLIDING
From eq. (4) f21h = Ma +ukN2 – Mgsinθ (18) 0.15 pts
Fromeq. (8) f31h = Ma +ukN3 – Mgsinθ (19) 0.15 pts
From eq. (18) and 19 :
5Mg sinθ - (Ma + ukN2 – Mg sinθ)- (Ma + ukN3 – Mg sinθ)=m1a
M
N N
g
M
N N Mg
a k k k
7
) (
sin
7
sin 7 3 2 3 2 +
− =
− −
=
µ
θ
µ µ θ
(20) 0.2 pts
θ cos 7 2 3 Mg N N = +
From the above two equations we get :
θ µ θ cos sin a g g k − = 0.25 pts
The Conditions for complete sliding: are the opposite of that of pure rolling
3 2
3
3
2 2
2
2
3 3 2 2
' a
R
I
and ' a
R
I
' and '
N N
N f N f
s s
s s
µ µ
µ µ
〉 〉
〉 〉
(21) 0.2 pts
Where N2’ and N3’ is calculated in case all cylinder in pure rolling. 0.1 pts
l
h
l
h
s
s
s
s
1 1
41 . 0 5831 . 0
5 . 3
tan and
41 . 0 5831 . 0
5 . 3
tan
get Finally we
µ
µ
θ
µ
µ
θ
−
〉
+
〉
0.2 pts
The left inequality finally become decisive.
CASE ONE CYLINDER IN PURE ROLLING AND ANOTHER IN SLIDING
CONDITION
{ For example R3 (front cylinders) pure rolling while R2 (Rear cylinders) sliding}III - 7
From equation (4) we get
F21h = m2a+ ukN2-m2gsinθ (22) 0.15 pts
From equation (5) we get
f31h = m3a+(I/R2
)a -m3gsinθ (23) 0.15 pts
Then from eq. (1) , (22) and (23) we get
m1gsinθ - { m2a+ukN2-m2gsinθ}-{m3a+(I/R2
)a -m3gsinθ}= m1a
m1 gsinθ + m2gsinθ + m3 sinθ- ukN2 = (I/R2
+m3)a + m2 a + m1 a
5Mg sinθ + Mg sinθ + Mg sinθ- ukN2 = (0.7M +M)a + Ma + 5Ma
M
g
M
Mg
a
7 . 7
N
sin 9091 . 0
7 . 7
N sin 7 2 k 2 k µ
θ
µ θ
− =
−
= (24) 0.2 pts
θ µ
θ µ θ µ
θ µ
sin 4546 . 0 ) 65 . 0 1 (
) sin 2 7 . 7 / 7 . 2 sin 9091 . 0 7 . 2 (
) sin 2 2 (
1
2 3
2 2
1
2 3
2 2
1
2 3
Mg
l
h
N N
Mg N g M N
l
h
N N
Mg Ma a
R
I
N
l
h
N N
k
k k
k
= + −
− − × + = −
− + + = −
θ = + cos 7 2 3 Mg N N
Therefore we get
l
h
Mg Mg
Mg N
l
h
Mg Mg
N
k
k
1
3
1
2
65 . 0 2
sin 4546 . 0 cos 7
cos 7
65 . 0 2
sin 4546 . 0 cos 7
µ
θ θ
θ
µ
θ θ
+
−
− =
+
−
=
(25) 0.3 pts
Then we can substitute the results above into equation (16) to get the following result
l
h
g g
g
M
g a
k
1
k 2 k
65 . 0 2
sin 4546 . 0 cos 7
7 . 7
sin 9091 . 0
7 . 7
N
sin 9091 . 0
µ
θ θ µ
θ
µ
θ
+
−
− = − = (26)
0.2 ptsIII - 8
The Conditions for this partial sliding is:
3 2 2 2
3 3 2 2
a
R
I
and a
R
I
and
N N
N f N f
s s
s s
′ 〉 ′ ≤
′ 〉 ′ ≤
µ µ
µ µ
(27) 0.25 pts
where 2 N′ and 3 N′ are normal forces for pure rolling condition
4. Assumed that after rolling d meter all cylinder start to sliding until reaching the end of
incline road (total distant is s meter). Assummed that ηmeter is reached in t1 second.
1
1
2
1 1
2
1 1 1
1 1 1 1 1 1
2
2
1
2
1
0
a
d
t
t a t a t v d
t a t a at v v
o
o t
=
= + =
= + = + =
0.5 pts
1 1 a vt =
1
2
a
d
= θ θ sin 666 . 1 sin 833 . 0 2 2 1 dg g d da = = (28)
The angular velocity after rolling d meters is same for front and rear cylinders:
θ ω sin 666 . 1
1 1
1 dg
R R
vt
t = = (29)
0.5 pts
Then the vehicle sliding untill the end of declining road. Assumed that the time needed
by vehicle to move from d position to the end of the declining road is t2 second.
) ( 2 sin 666 . 1
) ( 2
2
1
sin 666 . 1
2
2
1 1 2
2
2
2
1 1
2
2
2 2 2 1
2 2 2 2 1 2
d s a v v dg v
a
d s a v v
t
t a t v d s
t a dg t a v v
t t t
t t
t
t t
− + + − =
− + + −
=
+ = −
+ = + =
θ
θ
(30) 0.4 pts
Inserting vt1 and a2 from the previous results we get the final results.
For the angular velocity, while sliding they receive torsion:III - 9
) ( 2
sin 666 . 1
1
2
2
2
1 1
2 1 2
a
d s a v v
I
NR
dg
R
t
I
NR
I
NR
t t k
t t
k
k
− + + −
+ = + =
= =
=
µ
θ α ω ω
µ τ
α
µ τ
(31)
0.6 pts
