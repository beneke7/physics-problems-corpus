---
id: apho-2002-t-q2
source: apho
language: en
solution_language: en
translated: false
problem: apho-2002-t-q2
solution_type: official
source_document: solution-document-apho-2002-t-s
source_pdf: cache/phoxiv/apho/2002_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/apho/2002_T_S.pdf."
---

Solution to Question 2: The Rail Gun
Proper Solution (taking induced emf into consideration):
(a)
Let I be the current supplied by the battery in the absence of back emf.
Let i be the induced current by back emf b ε .
Since BLv d(BLx)/dt dt d b = = = / φ ε , ∴ . / R Blv i =
Net current, . / R BLv I i I IN − = − =
Forces parallel to rail are:
Force on rod due to current is R v L B BLI R BLv I BL BLI F N c / ) / ( 2 2
− = − = = .
Net force on rod and young man combined is θ sin mg F F c N − = . (1)
Newton’s law: dt mdv ma FN / = = . (2)
Equating (1) and (2), & substituting for c F & dividing by m, we obtain the acceleration
, / / τ α v dt dv − = where θ α sin / g m BIL − = and 2 2
/ L B mR = τ .
1
0.5
0.5
0.5
0.5
3
7
(b)(i)
Since initial velocity of rod = 0, and let velocity of rod at time t be v(t),
we have
( ) τ /
1 ) ( t
e v t v −
∞ − = , (3)
where 





− = = ∞ θ ατ θ sin 1 ) (
BLI
mg
BL
IR
v .
Let ts be the total time he spent moving along the rail, and vs be his velocity when he leaves
the rail, i.e.
( ) τ /
1 ) ( s t
s s e v t v v −
∞ − = = . (4)
( ) ∞ − − = ∴ v v t s s / 1 ln τ (5)
0.5
0.5
0.5 1.5
8
(b) (ii)
Let tf be the time in flight:
g
è v
t s
f
sin 2
= (6)
He must travel a horizontal distance w during tf .
f s t è v w ) cos ( = (7)
g
v
v
w
t s
s
f
θ
θ
sin 2
cos
= = (8) (from (6) & (7))
From (8), vs is fixed by the angle θ and the width of the strait w
θ 2 sin
gw
vs = . (9)








− − = ∴
∞ θ
τ
2 sin
1
1 ln
gw
v
ts , (Substitute (9) in (5))
And
g
w gw
g
tf
θ
θ
θ tan 2
2 sin
sin 2
= = (Substitute (9) in (8))
0.5
0.5
0.5
1.5
9
(c)
Therefore, total time is:
g
w gw
v
t t T f s
θ
θ
τ
tan 2
2 sin
1
1 ln + 







− − = + =
∞
The values of the parameters are: B=10.0 T, I= 2424 A, L=2.00 m, R=1.0 Ω,
g=10 m/s2
, m=80 kg, and w=1000 m.
Then 2 2 2 2
) 00 . 2 ( ) 0 . 10 (
) 0 . 1 )( 80 (
= =
L B
mR
τ = 0.20 s.
) sin 0165 . 0 1 ( 121
sin
) 2424 )( 00 . 2 )( 0 . 10 (
) 10 )( 80 (
1
) 00 . 2 )( 0 . 10 (
2424
) (
θ
θ θ
− =
 


 


− = ∞ v
So,
θ
θ
tan 14 . 14
2 sin
1 100
1 ln 20 . 0 +  


 


− − = + =
∞ v
t t T f s
By plotting T as a function of θ, we obtain the following graph:
Note that the lower bound for the range of θ to plot may be determined by the
condition vs / v∞ <1 (or the argument of ln is positive), and since mg/BLI is small
(0.0165), v∞ ≈ IR/BL (= 121 m/s), we have the condition sin(2θ) > 0.68, i.e.
θ > 0.37. So one may start plotting from θ = 0.38.
From the graph, for θ within the range (~0.38, 0.505 ) radian the time T is within
11 s.
Labeling:
0.1 each axis
Unit:
0.1 each axis
Proper Range in
θ:
0.3 lower limit
(more than 0.37,
less than 0.5),
0.2 upper limit
(more than 0.5
and less than 0.6)
Proper shape of
curve: 0.2
Accurate
intersection at
θ = 0.5: 0.4 1.5
10
(d)
However, there is another constraint, i.e. the length of rail D. Let Ds be the
distance travelled during the time interval ts
( ) ( ) ( ) [ ] ( )τ τ τ β β τ
s s
t
s
t t
t
t
t
s t v t v e t v e t v dt e v dt t v D
s s s
− = − − = + = − = = ∞
−
∞
−
∞
−
∞ ∫ ∫ 1 1 ) ( 0 0
/
0
i.e.








+ 







− − =
∞
∞
θ θ θ
θ τ
2 sin 2 sin ) (
1
1 ln ) (
gw gw
v
v Ds
The graph below shows Ds as a function of θ.
It is necessary that Ds ≤ D, which means θ must range between .5 and1.06
radians.
In order to satisfy both conditions, θ must range between 0.5 & 0.505 radians.
(Remarks: Using the formula for tf , ts & D, we get
At θ = 0.507, tf =10.540, ts = 0.466, giving T = 11.01 s, & D = 34.3 m
At θ = 0.506, tf =10.527, ts = 0.467, giving T = 10.99 s, & D = 34.4 m
At θ = 0.502, tf =10.478, ts = 0.472, giving T = 10.95 s, & D =34.96 m
At θ = 0.50, tf =10.453, ts = 0.474, giving T = 10.93 s, & D =35.2 m,
So the more precise angle range is between 0.502 to 0.507, but students are not
expected to give such answers.
To 2 sig fig T = 11 s. Range is 0.50 to 0.51 (in degree: 28.60
to 29.20
or 290
)
0.5
Labeling:
0.1 each axis
Unit:
0.1 each axis
Proper Range in
θ:
0.3 lower limit
(more than 0.4,
less than 0.49),
0.2 upper limit
(more than 0.51
and less than 1.1)
Proper shape of
curve: 0.2
Accurate
intersection at
θ = 0.5: 0.4
0.5
2.5
11
12
Alternate Solution (Not taking induced emf into consideration):
If induced emf is not taken into account, there is no induced current, so
the net force acting on the combined mass of the young man and rod is
θ sin mg BIL FN − = .
And we have instead
, / α = dt dv
where θ α sin / g m BIL − = .
t t v α = ∴ ) (
and s s s t t v v α = = ∴ ) (
g
è t
g
è v
t s s
f
sin 2 sin 2 α
= = .
Therefore,
g
è t
t è v w s
f s
2 sin
) cos (
2 2
α
= = ,
giving
è
gw
ts
2 sin
1
α
=
and
g
w
tf
θ tan 2
= .
Hence,
è
g wg
g
w
è
gw
t t T f s
2 sin
sin 2 1
tan 2
2 sin
1






 


 


+
= + = + =
θ
α
α
θ
α
.
where θ α sin / g m BIL − = .
The values of the parameters are: B=10.0 T, I= 2424 A, L=2.00m,
R=1.0 Ω, g=10 m/s2
, m=80 kg, and w=1000 m. Then,
[ ]
è
T
2 sin
sin 20 . 0 1 100 θ α
α
+
=
where θ α sin 10 606− = .
0.2 BIL
0.2 mg sinθ
0.1
0.2
0.5
0.5
0.3 2
13
For θ within the range (~0, 0.52 ) radian the time T is within 11 s.
However, there is another constraint, i.e. the length of rail D.
Let Ds be the distance travelled during the time interval ts
θ α θ α 2 sin
5000
2 sin 2
= =
gw
Ds
which is plotted below
It is necessary that Ds ≤ D, which means θ must range between 0.11 and
1.43 radians.
In order to satisfy both conditions, θ must range between 0.11 & 0.52
radians.
Labeling:
0.1 each axis
Unit:
0.1 each axis
Proper Range in
θ:
0.1 lower limit
(more than 0,
less than 0.5),
0.2 upper limit
(more than 0.52
and less than 0.8)
Proper shape of
curve: 0.2
Accurate
intersection at
θ = 0.52: 0.4
Labeling:
0.1 each axis
Unit:
0.1 each axis
Proper Range in
θ:
0.1 lower limit
(more than 0.08,
less than 0.11),
0.1 upper limit
(more than 0.52
and less than 1.5)
Proper shape of
curve: 0.2
Accurate
intersection at
θ = 0.11: 0.4
1.3
1.2
0.5
14
