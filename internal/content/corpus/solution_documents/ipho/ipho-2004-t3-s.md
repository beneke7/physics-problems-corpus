---
id: solution-document-ipho-2004-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2004/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2004-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2004/T3_S.pdf."
---

Theoretical Question 3 / Solutions Page 1/6
Theoretical Question 3: Scanning Probe Microscope
1. Answers
(a)
2 2 2 2 2
0
2
0
) ( ω ω ω b m
F
A
+ −
= and
) (
tan 2 2
0
0
ω ω
ω
φ
−
=
m
b
. At 0 ω ω = ,
0
0
ω b
F
A =
and
2
π
φ = .
(b) A non-vanishing dc component exists only when i ω ω = .
In this case the amplitude of the dc signal will be i R i V V φ cos
2
1
0 0 .
(c)
0
2
0 2 1
2 ω b
V c c R
at the resonance frequency 0 ω .
(d) 18
10 7 . 1 −
× = ∆m kg.
(e)
2 / 1
2
0
3
0 0 1 ' − =
ω
ω ω
m
c
.
(f)
3 / 1
0 0
0
∆
=
ω ω m
qQ
k d e
= 0 d 41 nm.Theoretical Question 3 / Solutions Page 2/6
2. Solutions
(a) [1.5 points]
Substituting ) sin( ) ( φ ω − = t A t z in the equation t F z m
dt
dz
b
dt
z d
m ω ω sin 0
2
0 2
2
= + +
yields,
t
A
F
t m t b t m ω φ ω ω φ ω ω φ ω ω sin ) sin( ) cos( ) ( sin 0 2
0
2
= − + − + − − . (a1)
Collecting terms proportional to t ω sin and t ω cos , one obtains
{ } 0 cos cos sin ) ( sin sin cos ) ( 2 2
0
0 2 2
0 = + − − + − + − t b m t
A
F
b m ω φ ω φ ω ω ω φ ω φ ω ω (a2)
Zeroing the each curly square bracket produces
) (
tan 2 2
0 ω ω
ω
φ
−
=
m
b
, (a3)
2 2 2 2 2
0
2
0
) ( ω ω ω b m
F
A
+ −
= . (a4)
At 0 ω ω = ,
0
0
ω b
F
A = and .
2
π
φ = (a5)
(b) [1 point]
The multiplied signal is
}] ) cos{( } ) [cos{(
2
1
) sin( ) sin(
0 0
0 0
i i i i R i
R i i i
t t V V
t V t V
φ ω ω φ ω ω
ω φ ω
− + − − − =
−
(b1)
A non-vanishing dc component exists only when i ω ω = . In this case the amplitude of
the dc signal will be
i R i V V φ cos
2
1
0 0 . (b2)
(c) [1.5 points]
Since the lock-in amplifier measures the ac signal of the same frequency with its
reference signal, the frequency of the piezoelectric tube oscillation, the frequency of theTheoretical Question 3 / Solutions Page 3/6
cantilever, and the frequency of the photodiode detector should be same. The
magnitude of the input signal at the resonance is
0
0 2 1
0
0
2 0
ω ω b
V c c
b
F
c V R
i = = . (c1)
Then, since the phase of the input signal is 0
2 2
= + −
π π
at the resonance, 0 = i φ and
the lock-in amplifier signal is
0
2
0 2 1
0 0
2
0 cos
2
1
ω b
V c c
V V R
R i = . (c2)
(d) [2 points]
The original resonance frequency
m
k
= 0 ω is shifted to
∆
− =
∆
− ≅
∆
+ =
∆ +
−
m
m
m
m
m
k
m
m
m
k
m m
k
2
1
1
2
1
1 1 0
2
1
ω . (d1)
Thus
m
m ∆
− = ∆ 0 0
2
1
ω ω . (d2)
Near the resonance, by substituting φ
π
φ ∆ + →
2
and 0 0 0 ω ω ω ∆ + → in Eq. (a3), the
change of the phase due to the small change of 0 ω (not the change of ω ) is
0 2 tan
1
2
tan
ω φ
φ
π
∆
=
∆
− = ∆ +
m
b
. (d3)
Therefore,
b
m 0 2
tan
ω
φ φ
∆
− = ∆ ≈ ∆ . (d4)
From Eqs. (d2) and (d4),
18 18
6
12 3
0
10 7 . 1 10
8 . 1 1800 10
10 10 − −
−
× = =
⋅
= ∆ = ∆
π π
φ
ω
b
m kg. (d5)
(e) [1.5 points]
In the presence of interaction, the equation of motion near the new equilibrium position
0 h becomesTheoretical Question 3 / Solutions Page 4/6
t F z c z m
dt
dz
b
dt
z d
m ω ω sin 0 3
2
0 2
2
= − + + (e1)
where we used z c h f h f 3 0 ) ( ) ( + ≈ with 0 h h z − = being the displacement from the
new equilibrium position 0 h . Note that the constant term ) ( 0 h f is cancelled at the
new equilibrium position.
Thus the original resonance frequency
m
k
= 0 ω will be shifted to
2
0
3
0
3
2
0 3
0 1 '
ω
ω
ω
ω
m
c
m
c m
m
c k
− =
−
=
−
= . (e3)
Hence the resonance frequency shift is given by
− − = ∆ 1 1 2
0
3
0 0
ω
ω ω
m
c
. (e4)
(f) [2.5 points]
The maximum shift occurs when the cantilever is on top of the charge, where the
interacting force is given by
2
) (
h
qQ
k h f e = . (f1)
From this,
3
0
3 2
0
d
qQ
k
dh
df
c e
d h
− = =
=
. (f2)
Since 0 0 ω ω << ∆ , we can approximate Eq. (e4) as
0
3
0
2 ω
ω
m
c
− ≈ ∆ . (f3)
From Eqs. (f2) and (f3), we have
3
0 0
3
0 0
0 2
2
1
d m
qQ
k
d
qQ
k
m
e e
ω ω
ω = − − = ∆ . (f4)
Here 19
10 6 . 1 −
× − = = e q Coulomb and 19
10 6 . 9 6 −
× − = = e Q Coulomb. Using the
values provided,Theoretical Question 3 / Solutions Page 5/6
8
3 / 1
0 0
0 10 1 . 4 −
× =
∆
=
ω ω m
qQ
k d e m = 41 nm. (f5)
Thus the trapped electron is 41 nm from the cantilever.Theoretical Question 3 / Solutions Page 6/6
3. Mark Distribution
No.
Total
Pt.
Partial
Pt.
Contents
0.7 Equations for A and φ (substitution and manipulation)
0.4 Correct answers for A and φ
(a) 1.5
0.4 A and φ at 0 ω
0.4 Equation for the multiplied signal
0.3 Condition for the non-vanishing dc output
(b) 1.0
0.3 Correct answer for the dc output
0.6 Relation between i V and R V
0.4 Condition for the maximum dc output
(c) 1.5
0.5 Correct answer for the magnitude of dc output
0.5 Relation between m ∆ and 0 ω ∆
1.0 Relations between 0 ω ∆ (or m ∆ ) and φ ∆
(d) 2.0
0.5 Correct answer (Partial credit of 0.2 for the wrong sign.)
1.0
Modification of the equation with ) (h f and use of a proper
approximation for the equation
(e) 1.5
0.5 Correct answer
0.5 Use of a correct formula of Coulomb force
0.3 Evaluation of 3 c
0.6 Use of the result in (e) for either 0 ω ∆ or 2
0
2
0 ' ω ω −
0.6 Expression for 0 d
(f) 2.5
0.5 Correct answer
Total 10
