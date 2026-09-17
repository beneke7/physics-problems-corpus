---
id: solution-document-ipho-2009-e1-s
source: ipho
kind: official_answer_sheet
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2009/E1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2009/E1_S.pdf."
---

Answer Form
Experimental Problem No. 1
Diode laser wavelength
Task 1.1 Experimental setup.
(0.75)
1.1 Sketch the laser path in drawing of Task 1.1 and Write down the height h
of the beam as measured from the table
h± ∆h = 5.0±0.05 ( )×10−2
m (0.25)
1.0Experimental setup for measurement of diode laser wavelength
Task 1.2 Expressions for optical path differences.1.2 The path differences are
Case I: (0.25)
∆I(n) =(BF + FP)−BP = (Lb −L0)+ L0
2
+ LR
2
(n)− Lb
2
+ LR
2
(n)
= (Lb −L0)+ L0 1+
LR
2
(n)
L0
2
− Lb 1+
LR
2
(n)
Lb
2
using 1+ x ≈1+
1
2
x
≈ (Lb −L0)+ L0 1+
1
2
LR
2
(n)
L0
2





−Lb 1+
1
2
LR
2
(n)
Lb
2






⇒ ∆I(n) ≈
1
2
LR
2
(n)
1
L0
−
1
Lb






Case II: (0.25)
∆II(n) =(FB+ BP)− FP =(L0 −La)+ La
2
+ LL
2
(n)− L0
2
+ LL
2
(n)
≈ (L0 −La )+ La 1+
LL
2
(n)
La
2
− L0 1+
LL
2
(n)
L0
2
using 1+ x ≈1+
1
2
x
≈ (L0 −La )+ La 1+
1
2
LL
2
(n)
La
2





−L0 1+
1
2
LL
2
(n)
L0
2






⇒ ∆II(n) ≈
1
2
LL
2
(n)
1
La
−
1
L0






0.5Task 1.3 Measuring the dark fringe positions and locations of the blade. Use
additional sheets if necessary.
TABLE I
n lR(n)±0.1 ( )×10−3
m lL (n)±0.1 ( )×10−3
m xR xL
0 -7.5 1.1 0.791 0.935
1 -10.1 3.7 1.275 1.369
2 -12.4 6.4 1.620 1.696
3 -14.0 8.2 1.903 1.968
4 -15.6 10.0 2.151 2.208
5 -17.2 11.4 2.372 2.424
6 -18.4 12.2 2.574 2.622
7 -19.7 2.761
8 -20.7 2.937
9 -22.0 3.102
10 -23.0 3.260
11 -24.1 3.4101.3 Report positions of the blade and their difference with higher precision:
Lb ± ∆Lb =(653±1)×10−3
m (0.25) LABEL (I) (measuring tape)
La ± ∆La =(628±1)×10−3
m (0.25) LABEL (I) (measuring tape)
d = Lb − La = 24.6± 0.1 ( )×10−3
m (0.25) LABEL (H) (caliper)
3.25Task 1.4 Performing a statistical and graphical analysis.1.4 A procedure:
From the condition of dark fringes and Task 1.2, we have
1
2
LR
2
(n)
1
L0
−
1
Lb





 = n +
5
8





λ
and
1
2
LL
2
(n)
1
La
−
1
L0





 = n +
7
8





λ
Using (1.5), LR (n) = lR (n)−l0R and LL (n) = lL (n)−l0L we can rewrite
1
2
lR (n)− l0R ( )
2 1
L0
−
1
Lb





 = n +
5
8





λ
⇒ lR (n) =
2LbL0
Lb − L0
λ n +
5
8
+ l0R
and
1
2
lL (n)− l0L ( )
2 1
La
−
1
L0





 = n +
7
8





λ
⇒ lL (n) =
2LaL0
L0 −La
λ n +
7
8
+ l0L
These can be cast as equations of a straight line, y = mx +b.
Case I:
yR = lR xR = n +
5
8
mR =
2LbL0
Lb − L0
λ bR = l0R
Case II:
yL = lL xL = n +
7
8
mL =
2LaL0
L0 − La
λ bL = l0L
Perform least squares analysis of above equations. In Table I, we write
down the values xR and xL .
One finds:
mR ±∆mR = (−6.39±0.07)×10−3
m
3.25mL ± ∆mL =(6.83±0.19)×10−3
m
and (values of 0R l and 0L l )
l0R ± ∆l0R =bR ± ∆bR = −2.06±0.17 ( )×10−3
m
l0L ± ∆l0L =bL ± ∆bL = −5.33± 0.36 ( )×10−3
m
The equations used in the least squares analysis:
m =
N xn yn −
n=1
N
∑ xn
n=1
N
∑ yn′
n′=1
N
∑
∆
b =
xn
2
yn′
n′=1
N
∑ −
n=1
N
∑ xn
n=1
N
∑ xn′yn′
n′=1
N
∑
∆
where
∆ = N xn
2
−
n=1
N
∑ xn
n=1
N
∑






2
with N the number of data points.
The uncertainty is calculated as
∆m ( )
2
= N
σ2
∆
, ∆b ( )
2
=
σ2
∆
xn
2
n=1
N
∑ with,
σ2
=
1
N −2
yn −b−mxn ( )
2
n=1
N
∑
REFERENCE: P.R. Bevington, Data Reduction and Error Analysis for
the Physical Sciences, McGraw-Hill, 1969.
Task 1.5 Calculating λ.
1.5 From any slope and the value of L0 one finds,
λ =
Lb −La
2LaLb
mR
2
mL
2
mR
2
+ mL
2
Using the suggestion to replace d = Lb − La, we can write
2.0λ =
d
2LaLb
mR
2
mL
2
mR
2
+ mL
2
λ± ∆λ =(663± 25)×10−9
m
The uncertainty may range from 15 to 30 nanometers.
A precise measurement of the wavelength is λ± ∆λ =(655±1)×10−9
m.
The formula for the uncertainty,
∆λ =
∂λ
∂d






2
∆d2
+
∂λ
∂La






2
∆La
2
+
∂λ
∂Lb






2
∆Lb
2
+
∂λ
∂mR






2
∆mR
2
+
∂λ
∂mL






2
∆mL
2
one finds,
∂λ
∂d
=
λ
d
,
∂λ
∂Lb
=
λ
Lb
,
∂λ
∂La
=
λ
La
and
∂λ
∂mR
=
2mL
2
mR
λ
mL
2
+ mR
2
and analogously for the other slope.
One can calculate directly these quantities. However, one may note that
the errors due to La , Lb and d are negligible. Moreover, mR
2
≈ mL
2
and
La ≈ Lb . This implies,
∂λ
∂mR
≈
λ
mR
≈
∂λ
∂mL
. Thus,
∆λ ≈ 2
λ
mL
∆mL ≈ 25×10−9
( ) m
