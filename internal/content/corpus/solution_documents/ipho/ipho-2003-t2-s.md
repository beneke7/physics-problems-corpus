---
id: solution-document-ipho-2003-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2003/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2003-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2003/T2_S.pdf."
---

21
Solution to Theoretical Question 2
A Piezoelectric Crystal Resonator under an Alternating Voltage
Part A
(a) Refer to Figure A1. The left face of the rod moves a distance v∆t while the pressure wave
travels a distance u∆t with ρ / Y u = . The strain at the left face is
u
v
t u
t v
S
−
=
−
= =
∆
∆ ∆
A
A
(A1a)
From Hooke’s law, the pressure at the left face is
uv
u
v
Y YS p ρ = = − = (A1b)
(b) The velocity v is related to the displacement ξ as in a simple harmonic motion (or a
uniform circular motion, as shown in Figure A2) of angular frequency ku = ω . Therefore,
if ) ( sin ) , ( 0 t u x k t x − =ξ ξ , then
) ( cos ) , ( 0 t u x k ku t x v − − = ξ . (A2)
The strain and pressure are related to velocity as in Problem (a). Hence,
) ( cos / ) , ( ) , ( 0 t u x k k u t x v t x S − = − = ξ (A3)
) ( cos ) , (
) ( cos ) , ( ) , (
0
0
2
t u x k kY t x YS
t u x k u k t x uv t x p
− − = − =
− − = =
ξ
ξ ρ ρ
(A4)
---------------------------------------------------------------------------
Alternatively, the answers may be obtained by differentiations:
) ( cos ) , ( 0 t u x k ku
t
t x v − − = = ξ
∆
ξ ∆
,
) ( cos ) , ( 0 t u x k k
x
t x S − = = ξ
∆
ξ ∆
,
) ( cos ) , ( 0 t u x k kY
x
Y t x p − − = − = ξ
∆
ξ ∆
.
------------------------------------------------------------------------------
p
u∆t
t=0
∆t/2
p p
FigureA1
v∆t
∆t
p p
ξ
kx−ω t
v
x
0 ξ
FigureA222
Part B
(c) Since the angular frequency ω and speed of propagation u are given, the wavelength is
given by λ = 2π / k with k = ω / u. The spatial variation of the displacement ξ is therefore
described by
− + − =
2
cos
2
sin ) ( 2 1
b
x k B
b
x k B x g (B1)
Since the centers of the electrodes are assumed to be stationary, g(b/2) = 0. This leads to
B2 = 0. Given that the maximum of g(x) is 1, we have B1
− ± =
2
sin ) (
b
x
u
x g
ω
= ±1 and
(B2)
Thus, the displacement is
t
b
x
u
t x ω
ω
ξ ξ cos
2
sin 2 ) , ( 0 − ± = (B3)
(d) Since the pressure p (or stress T) must vanish at the end faces of the quartz slab (i.e., x = 0
and x = b), the answer to this problem can be obtained, by analogy, from the resonant
frequencies of sound waves in an open pipe of length b. However, given that the centers
of the electrodes are stationary, all even harmonics of the fundamental tone must be
excluded because they have antinodes, rather than nodes, of displacement at the bisection
plane of the slab.
Since the fundamental tone has a wavelength λ = 2b, the fundamental frequency is
given by ) 2 /( 1 b u f = . The speed of propagation u is given by
3
3
10
10 45 . 5
10 65 . 2
10 87 . 7
× =
×
×
= =
ρ
Y
u m/s (B4)
and, given that b =1.00×10-2
) kHz ( 273
2 1 = =
b
u
f
m, the two lowest standing wave frequencies are
, ) kHz ( 818
2
3
3 1 3 = = =
b
u
f f (B5)
--------------------------------------------------------------------------------------------------------------
[Alternative solution to Problems (c) and (d)]:
A longitudinal standing wave in the quartz slab has a displacement node at x = b/2. It
may be regarded as consisting of two waves traveling in opposite directions. Thus, its
displacement and velocity must have the following form
t
b
x k
ut
b
x k ut
b
x k t x
m
m
ω ξ
ξ ξ
cos
2
sin 2
2
sin
2
sin ) , (
− =
+ − + − − =
(B6)
t
b
x k
ut
b
x k ut
b
x k ku t x v
m
m
ω ωξ
ξ
sin
2
sin 2
2
cos
2
cos ) , (
− − =
+ − − − − − =
(B7)
where ω = ku and the first and second factors in the square brackets represent waves23
traveling along the +x and –x directions, respectively. Note that Eq. (B6) is identical to Eq.
(B3) if we set ξm = ±ξ0
For a wave traveling along the –x direction, the velocity v must be replaced by –v in
Eqs. (A1a) and (A1b) so that we have
.
u
v
S
−
= and uv p ρ = (waves traveling along +x) (B8)
u
v
S = and uv p ρ − = (waves traveling along –x) (B9)
As in Problem (b), the strain and pressure are therefore given by
t
b
x k k
ut
b
x k ut
b
x k k t x S
m
m
ω ξ
ξ
cos
2
cos 2
2
cos
2
cos ) , (
− =
+ − − − − − − =
(B10)
t
b
x k u
ut
b
x k ut
b
x k u t x p
m
m
ω ωξ ρ
ωξ ρ
cos
2
cos 2
2
cos
2
cos ) , (
− − =
+ − + − − − =
(B11)
Note that v, S, and p may also be obtained by differentiating ξ as in Problem (b).
The stress T or pressure p must be zero at both ends (x = 0 and x = b) of the slab at all
times because they are free. From Eq. (B11), this is possible only if 0 ) 2 / cos( = kb or
" , 5 , 3 , 1 ,
2
= = = = n n b
f
f
b
u
kb π
λ
π ω (B12)
In terms of wavelength λ, Eq. (B12) may be written as
" , 5 , 3 , 1 ,
2
= = n
n
b
λ . (B13)
The frequency is given by
" , 5 , 3 , 1 ,
2 2
= = = = n
Y
b
n
b
nu u
f
ρ λ
. (B14)
This is identical with the results given in Eqs. (B4) and (B5).
--------------------------------------------------------------------------------------------------------------
(e) From Eqs. (5a) and (5b) in the Question, the piezoelectric effect leads to the equations
) ( E d S Y T p − = (B15)
E
d
Y S Yd
T
p
T p − + =
ε
ε σ
2
1 (B16)
Because x = b/2 must be a node of displacement for any longitudinal standing wave in the
slab, the displacement ξ and strain S must have the form given in Eqs. (B6) and (B10), i.e.,
with ku = ω ,
) cos(
2
sin ) , ( φ ω ξ ξ + − = t
b
x k t x m (B17)24
) cos(
2
cos ) , ( φ ω ξ + − = t
b
x k k t x S m (B18)
where a phase constant φ is now included in the time-dependent factors.
By assumption, the electric field E between the electrodes is uniform and depends only
on time:
h
t V
h
t V
t x E m ω cos ) (
) , ( = = (B19)
Substituting Eqs. (B18) and (B19) into Eq. (B15), we have
− + − = t V
h
d
t
b
x k k Y T m
p
m ω φ ω ξ cos ) cos(
2
cos (B20)
The stress T must be zero at both ends (x = 0 and x = b) of the slab at all times because they
are free. This is possible only if φ = 0 and
h
V
d
kb
k m
p m =
2
cos ξ (B21)
Since φ = 0, Eqs. (B16), (B18), and (B19) imply that the surface charge density must have
the same dependence on time t and may be expressed as
t x t x ω σ σ cos ) ( ) , ( = (B22)
with the dependence on x given by
h
V d
Y
b
x k
kb
d
Y
h
V d
Y
b
x k k Yd x
m
T
p
T
p
m
T
p
T m p
− + − =
− + − =
ε
ε
ε
ε ξ σ
2 2
2
1
2
cos
2
cos
1
2
cos ) (
(B23)
(f) At time t, the total surface charge Q(t) on the lower electrode is obtained by integrating
) , ( t x σ in Eq. (B22) over the surface of the electrode. The result is
− + =
− + =
− + − =
= =
∫
∫ ∫
) 1 (
2
tan
2
1
2
tan
2
)] 1 ( )
2
( cos
2
cos
[
) (
1
) , (
) (
1
) (
) (
2 2
0
2 2
0
2 2
0 0
α α
ε ε
ε
ε
ε
σ σ
kb
kb
C
d
Y
kb
kb
d
Y
h
bw
dx
d
Y
b
x k
kb
d
Y
h
w
dx w x
V
wdx t x
t V t V
t Q
T
p
T
p
T
b
T
p
T
p
b
m
b
(B24)
where
h
bw
C T ε = 0 , 3
2 2 2
2
10 82 . 9
06 . 4 27 . 1
10 ) 25 . 2 ( −
−
× =
×
×
= =
T
p d
Y
ε
α (B25)
(The constant α is called the electromechanical coupling coefficient.)25
Note: The result C0 = ε T
x x ≈ tan
bw/h can readily be seen by considering the static limit k = 0
of Eq. (5) in the Question. Since when x << 1, we have
0
2 2
0
0
)] 1 ( [ ) ( / ) ( lim C C t V t Q
k
= − + ≈
→
α α (B26)
Evidently, the constant C0 is the capacitance of the parallel-plate capacitor formed by the
electrodes (of area bw) with the quartz slab (of thickness h and permittivity ε T) serving as
the dielectric medium. It is therefore given by ε T bw/h.26
Marking Scheme
Theoretical Question 2
APiezoelectric Crystal Resonator under anAlternating Voltage
Total
Scores
Sub
Scores
Marking Scheme forAnswers to the Problem
Part A
4.0 pts.
(a)
1.6
The strain S and pressure p on the left face.
¾ 0.4 for |∆ℓ| = v∆t and ℓ = u∆t.
¾ 0.4 for S = -v/u. (0.1 f or s ign)
¾ 0.4 for relating p to S as p = −YS. (0.1 for sign)
¾ 0.4 for p = ρuv. (0.1 for sign)
(b)
2.4
The velocity v(x, t), strain S(x, t), and pressure p(x, t).
¾ 0.3×3 sinusoidal variation with correct phase constant. (0.2 for phase
constant.)
¾ 0.3×3 for amplitude.
¾ 0.2×3 for dependence on x and t as (kx- ku t).
Part B
6.0 pts
(c)
1.2
The function g(x) for a standing wave of angular frequency ω.
¾ 0.4 for g(b/2) = 0.
¾ 0.3+0.1 for B1=±1 (0.1 for both signs)
¾ 0.4 for B2 = 0
(d)
1.2
The two lowest standing wave frequencies.
¾ 0.2 for wavelength of fundamental tone λ = 2b.
¾ 0.2 for excluding even harmonics.
¾ (0.3+0.1) for f1 = u/2b = 273 kHz. (0.1 for value)
¾ (0.3+0.1) for f3 = 3u/2b = 818 kHz. (0.1 for value)
(e)
2.2
The surface charge density σ as a function of x and t.
¾ 0.1×2 for ξ and S, each a separable function of x and t.
¾ 0.1×2 for ξ and S, each depends on time as cosωt with φ = 0.
¾ 0.3 for spatial part ) 2 / ( sin ) ( b x k x m − =ξ ξ .
¾ 0.3 for spatial part ) 2 / ( cos ) ( b x k k x S m − = ξ .
¾ 0.3 for Y h V d b x k k x T m p m ] / ) 2 / ( cos [ ) ( − − = ξ .
¾ 0.3 for h V d kb k m p m / ) 2 / cos( = ξ .
¾ 0.6 for D1 (0.3) and D2 (0.3) in ) (x σ .
(f)
1.4
The constants C0 and 2
α .
¾ 0.2 for relation between σ and Q as
Q(t) = (∫
b
dx w x 0
) ( σ ) cosωt.
¾ 0.3 for noting Q(t)/V(t) ≈ C0 as k → 0.
¾ 0.4 for C0 = εT bw/h.
¾ 0.4+0.1 for 3 2 2
10 82 . 9 / −
× = = T p Yd ε α . (0.1 for value)
