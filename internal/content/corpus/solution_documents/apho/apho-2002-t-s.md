---
id: solution-document-apho-2002-t-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2002_T_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2002-t-q1, apho-2002-t-q2, apho-2002-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2002_T_S.pdf."
---

1
.
Solution 1
(a) ). ( ) ( 1 1 − + − − − = n n n n n X X S X X S X m & &
0.7
(b) Let Xn = A sin nka cos (ω t + α), which has a harmonic time dependence.
By analogy with the spring, the acceleration is n X & & = - ω2
Xn.
Substitute into (a): -mAω2
sin nka = AS {sin (n + 1)ka – 2 sin nka + sin (n – 1)ka}
= - 4SA sin nka sin2
_ka. 0.6
Hence ω2
= (4S/m) sin2
_ka. 0.2
To determine the allowed values of k, use the boundary condition sin (N + 1) ka = sin kL = 0. 0.7
The allowed wave numbers are given by kL = π, 2π, 3π,…, Nπ (N in all), 0.3
and their corresponding frequencies can be computed from ω = ω0 sin _ka,
in which ωmax = ω0 = 2(S/m)_
is the maximum allowed frequency. 0.4
(c)
∑
∑
∞
=
∞
=
=
0
0
) (
) (
) (
p
p
p
p
P
P p
E
ω
ω ω
ω
h
First method: ∑
∑
∑ ∞
=
−
∞
=
−
∞
=
−
∂
∂
=
0
/ 2
0
/
0
/
ln
n
T k n
B
n
T k n
n
T k n
B
B
B
e
T
T k
e
e n
ω
ω
ω
ω
h
h
h
h
1.5
The sum is a geometric series and is {1 – T kB
e / ω h −
}-1
0.5
We find
1
) ( /
−
= T kB
e
E ω
ω
ω h
h
.
Alternatively: denominator is a geometric series = {1 – T kB
e / ω h −
}-1
(0.5)
Numerator is kBT 2
(d/dT) (denominator) = T kB
e / ω h −
{1 – T kB
e / ω h −
}-2
and result follows. (1.5)2
A non-calculus method:
Let D = 1 + e-x
+ e-2x
+ e-3x
+…, where x = hω/kBT. This is a geometric series and equals D =
1/(1 – e-x
). Let N = e-x
+2 e-2x
+ 3e-3x
+…. The result we want is N/D. Observe
D – 1= e-x
+ e-2x
+ e-3x
+ e-4x
+ e-5x
+….….
(D - 1)e-x
= e-2x
+ e-3x
+ e-4x
+ e-5x
+….….
(D - 1)e-2x
= e-3x
+ e-4x
+ e-5x
+….
Hence N = (D - 1)D or N/D = D – 1 =
1
1
1 −
=
− −
−
x x
x
e e
e
.
(2.0)
(d) From part (b), the allowed k values are π/L, 2π/L, …, Nπ/L.
Hence the spacing between allowed k values is π/L, so there are (L/π)∆k allowed modes in the 1.0
wave-number interval ∆k (assuming ∆k >> π/L).
(e) Since the allowed k are π/L,…, Nπ/L, there are N modes. 0.5
Follow the problem:
dω/dk = _aω0 cos _ka from part (a) & (b)
= 2 2
max 2
1 ω ω − a , ωmax = ω0. This second form is more convenient for integration.
0.5
The number of modes dn in the interval dω is
dn = (L/π)∆k = (L/π) (dk/dω) dω
= (L /π){_ aω0 cos _ ka}-1
dω
0.5 for eith
= ω
ω ω π
d
a
L
2 2
max
1 2
−
This part is
necessary fo
ET below,
= ω
ω ω π
d
N
2 2
max
1 ) 1 ( 2
−
+ but not for
number of
modes
Total number of modes = 1
) 1 ( 2
2 2
max 0
max
+ =
−
+
= ∫ ∫ N
d N
dn
ω ω
ω
π
ω
≈ N for large N. (0.5)
Total crystal energy from (c) and dn of part (e) is given by
.
1
2
2 2
max 0
/
max
ω ω
ω ω
π
ω
ω
− −
= ∫
d
e
N
E T k T B h
h 0.7
(f) Observe first from the last formula that ET increases monotonically with temperature since3
{ehω/kT
- 1}-1
is increasing with T. 0.2
When T → 0, the term – 1 in the last result may be neglected in the denominator so 0.2
ω
ω ω
ω
π
ω
d e
N
E T k
T T
B
2 2
max
/
0
1 2
−
≈ −
→ ∫
h
h 0.3
dx
Tx k
xe
T k
N
B
x
B ∫
∞ −
−
=
0
2
max
2
max ) / ( 1
) (
2
ω πω h h
0.2
which is quadratic in T (denominator in integral is effectively unity) hence CV is linear in T
near absolute zero.
0.2
Alternatively, if the summation is retained, we have
∑
∑ ∑
−
−
→
=
−
→
− −
=
y
y B
T k
T T k T
y y e
T k N
e
N
e
N
E B
B
∆ ∆ ∆ ∆
∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆
ω π
ω ω
ω
ω
π ω ω
ω ω
π ω
ω
ω
ω
h
h
h h
h
2
2 2
max
/
0
2 2
max
/
) ( 2
2
1
2
(0.5)
When T→ ∞, use ex
≈ 1 + x in the denominator, 0.2
2
2 1
/
2
2 2
max 0
max
π
π
ω
ω ω ω
ω
π
ω
T k
N
d
T k
N
E B
B
T T =
−
≈ ∫ ∞ →
h
h
,
which is linear; hence CV → NkB = R, the universal gas constant. This is the Dulong-Petit rule.
0.1
Alternatively, if the summation is retained, write denominator as T k e B
T kB
/ 1 /
ω ω
h h
≈ − and
∑
−
→ ∞ →
ω ω ω
ω
π 2 2
max
2 ∆ ∆ ∆ ∆
T k
N
E B T T
which is linear in T, so CV is constant.
(0.2)
Sketch of CV versus T: 0.5
R
linear in T T
CV
approaches constant
value4
Answer sheet: Question 1
(a) Equation of motion of the nth
mass is:
). ( ) ( 1 1 − + − − − = n n n n n X X S X X S X m & &
(b) Angular frequencies ω of the chain’s vibration modes are given by the equation:
ω2
= (4S/m) sin2
_ka.
Maximum value of ω is: ωmax = ω0 = 2(S/m)_
The allowed values of the wave number k are given by:
π/L, 2π/L, …, Nπ/L.
How many such values of k are there? N5
(f) The average energy per frequency mode ω of the crystal is given by:
1
) ( /
−
= T kB
e
E ω
ω
ω h
h
(g) There are how many allowed modes in a wave number interval ∆k?
(L/π)∆k.
(e) The total number of modes in the lattice is: N
Total energy ET of crystal is given by the formula:
.
1
2
2 2
max 0
/
max
ω ω
ω ω
π
ω
ω
− −
= ∫
d
e
N
E T k T B h
h
(h) A sketch (graph) of CV versus absolute temperature T is shown below.
For T << 1, CV displays the following behaviour: CV is linear in T.
As T → ∞, CV displays the following behaviour: CV → NkB = R, the universal gas
constant.
R
Linear in T T
CV6
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
37
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
0.5 1.58
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
1.59
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
θ = 0.5: 0.4 1.510
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
2.51112
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
0.3 213
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
0.514
Question 3 - Marking Scheme
(a) Since ,
2
4 ) ( ) 2 ( / 2
2 / 3
2
RT v M
e v
T R
M
v W −
 


 


=
π
π
M
T R
M
T R
T R
M
dv e v
T R
M
dv e v
T R
M
dv e v
T R
M
v
dv v W v v
RT v M
RT v M
RT v M
π
π
π
π
π
π
π
π
π
8
2
4
2
4
2
4
2
4
2
4
) (
2
2 2 2 / 3
0
) 2 ( / 3
2 / 3
0
) 2 ( / 3
2 / 3
0
) 2 ( / 2
2 / 3
0
2
2
2
=
 


 


=
 


 


=
 


 


=
 


 


=
= =
∫
∫
∫
∫
∞
−
∞
−
∞
−
∞
Marking Scheme:
Performing the integration correctly: 1 mark
Simplifying 0.5 marks
Subtotal for the section 1.5
marks15
(b) Assuming an ideal gas, T k N V P = , so that the concentration of the gas
molecules, n, is given by
T k
P
V
N
n = =
the impingement rate is given by
T mk
P
m T k
P
M T k
k N
P
M T k
T R
P
M
T R
T k
P
v n J
A
π
π
π
π
π
2
2
1
2
16
8
8
4
1
4
1
2
2 2
=
=
=
=
=
=
where we have note that k N R A = and
A N
M
m = ( A N being Avogadro number).
Marking Scheme:
Using ideal gas formula to estimate concentration of gas molecules: 0.7
marks
Simplifying expression: 0.4
marks
Using R = N k, and the formula for m; (0.2 mark each) 0.4
marks
Subtotal for the section 1.5
marks16
(c ) Assuming close packing, there are approximately 4 molecules in an area of 16 2
r
m2
. Thus, the number of molecules in 1 m2
is given by
( )
18
2 10 1 10 9 . 1
10 6 . 3 16
4
× =
×
= −
n m-2
However at (273 + 300) K and 133 Pa, the impingement rate for oxygen is
1 2 24
23
23
3
s m 10 6 . 2
573 ) 10 38 . 1 (
10 02 . 6
10 32
2
133
2
− −
−
−
× =
×








×
×
=
=
π
π T mk
P
J
Therefore, the time needed for the deposition is 7 . 0 1
=
J
n
ms
The calculated time is too short compared with the actual processing.
Marking Scheme:
Estimation of number of molecules in 1 m2
: 0.4 marks
Calculation the impingement rate: 0.6 marks
Taking note of temperature in Kelvin 0.3 marks
Calculating the time 0.4 marks
Subtotal for the section 1.7
marks17
(d) With activation energy of 1 eV and letting the velocity of the oxygen molecule at
this energy is v1, we have
1
1
19 2
1
ms 57 . 2453
J 10 6 . 1
2
1
−
−
= ⇒
× =
v
v m
At a temperature of 573 K, the distribution of the gas molecules is
We can estimate the fraction of the molecules with speed greater than 2454 ms-1
using the trapezium rule (or any numerical techniques) with ordinates at 2453,
2453 + 500, 2453 +1000. The values are as follows:
Velocity, v Probability,
W(v)
2453 1.373 x 10-10
2953 2.256 x 10-14
3453 6.518 x 10-19
Using trapezium rule, the fraction of molecules with speed greater than 2453 ms-1
is given by
( ) ( ) ( ) [ ]
8
19 14 10 -
10 43 . 3
10 518 . 6 10 256 . 2 2 10 1.373
2
500
molecules of fraction
−
− −
× =
× + × × + × =
f
Thus the time needed for the deposition is given by 0.7 µs/(3.43 x 10-8
) that is
20.4 s
Marking Scheme
Computing the value of the cut-off energy or velocity: 0.6
marks
Estimating the fraction of molecules 1.2 marks
Correct method of final time 0.4 marks
Correct value of final time 0.6 marks
Subtotal for the section 2.8
marks18
(e) For destructive interference, optical path difference = 2 d =
2
λ′
where
n
air λ
λ = ′ is the wavelength in the coating.
Silicon
Coating d
n = 1.4
The relation is given by:
n
d
4
air λ
=
Plugging in the given values, one gets d = 105 or 105.2 nm.
Derive equation:
Finding the optical path length 0.2
marks
Knowing that there is a phase change at the reflection 0.5
marks
Putting everything together to get the final expression 0.6
marks
Subtotal: 1.3 marks
Computation of d: 0.6 marks
Getting the correct number of significant figures: 0.6 marks
Subtotal: 1.2 marks
Subtotal for Section 2.5 marks
TOTAL 10 marks
