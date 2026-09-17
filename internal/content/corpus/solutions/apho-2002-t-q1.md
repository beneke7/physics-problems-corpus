---
id: apho-2002-t-q1
source: apho
language: en
solution_language: en
translated: false
problem: apho-2002-t-q1
solution_type: official
source_document: solution-document-apho-2002-t-s
source_pdf: cache/phoxiv/apho/2002_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/apho/2002_T_S.pdf."
---

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
and result follows. (1.5)
2
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
(f) Observe first from the last formula that ET increases monotonically with temperature since
3
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
value
4
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
How many such values of k are there? N
5
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
CV
6
