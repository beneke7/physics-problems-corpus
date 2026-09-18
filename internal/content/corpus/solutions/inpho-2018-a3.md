---
id: inpho-2018-a3
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2018-a3
solution_type: official
source_document: solution-document-inpho-2018-s
source_pdf: cache/phoxiv/inpho/2018_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2018_S.pdf."
---

3. Consider an infinite ladder of resistors. The input current I0 is indicated in the figure.
r r
···
r r
···
··· ···
R R R R R R
I0 In−1 In
I0
n−1 I0
n
(a) [2] Find the equivalent resistance of the ladder.
Equivalent resistance =
Solution:
R
r
Req = X X
Let equivalent resistance be X
r +
RX
R + X
= X
X =
r ±
√
r2 + 4rR
2
Taking positive sign
X =
r +
√
r2 + 4rR
2
(b) [2] Find the recursion relation obeyed by the currents through the horizontal resistors r. You
will get a relationship where In will be related to (may be several) Iis, i < n, n > 0.
Relation :
H B C 1 8
INPhO 2018 Page 4 Questions & Summary Answers Last four digits of Roll No.:
Solution: From Kirchhoff’s circuit law
In−1 = In + I0
n (1)
Using Kirchhoff’s voltage law
rIn + RI0
n+1 − RI0
n = 0 (2)
From Eq. (1) we see that
I0
n+1 − I0
n = (In − In+1) − (In−1 − In) = 2In − In+1 − In−1
So that Eq. (2) becomes
In+1 −

2 +
r
R

In + In−1 = 0 (3)
which is the required recursion relation.
(c) [4] Solve this for the special case R = r to obtain In and I0
n as explicit functions of n. You may
have to make a reasonable assumption about the behaviour of In as n becomes large.
In =
I0
n =
Solution: First method:
One can see that In−1,In,In+1 form geometric progression. Also
X
I1
R
I0
R X
I2
R
I1
R
I0
R R
I1 = I0
R
R + X
(see the figure to the left)
I2 = I1
R
R + X
= I0

R
R + X
 2
(see the figure to the right)
Hence In = I0

R
R + X
 n
For r = R, In = I0
3 −
√
5
2
!n
= I0kn
= I0
√
5 − 1
2
!2n
Using Eq. (2)
I0
n = I0
√
5 − 1
2
!
3 −
√
5
2
!n−1
= I0
√
5 − 1
2
!2n−1
Second method:
For R = r, Eq. (3) becomes
In+1 − 3In + In−1 = 0 (4)
H B C 1 8
INPhO 2018 Page 5 Questions & Summary Answers
We can solve this linear recursion relation by assuming the ansatz In ∼ ρn. This leads
to
ρ2
− 3ρ + 1 = 0
so that we have
ρ =
3 ±
√
5
2
This means that the general solution to (4) is
In = A
3 −
√
5
2
!n
+ B
3 +
√
5
2
!n
(5)
The second term grows without bound with increasing n - so that for an infinite ladder
we must have B = 0. Also when n = 0, I0 = A. Thus
In = I0
3 −
√
5
2
!n
I0
n = In−1 − In = I0
√
5 − 1
2
!
3 −
√
5
2
!n−1
(d) [4] If the ladder is chopped off after the N-th node (so that IN+1 = 0) what will the form of
In
IN
be for n ≤ N?
In
IN
=
Solution: First method: Consider the end part of the ladder as shown below.
R
I0
N−2 R
IN−3
···
···
E C A
R
IN R
B
R
IN−1
R
IN−2 F
R
I0
N−1
D
R
I0
N
Voltage drop across AB = 2RIN = I0
NR ⇒ I0
N = 2IN and IN−1 = 3IN.
Voltage drop across CD =
5R
3
3IN = I0
N−1R ⇒ I0
N−1 = 5IN and IN−2 = 8IN.
Voltage drop across EF =
13R
8
8IN = I0
N−2R ⇒ I0
N−2 = 13IN and IN−3 = 21IN..
This is depicted in figure below.
R
13IN R
21IN
···
···
E C A
R
IN R
B
R
3IN
R
8IN F
R
5IN
D
R
2IN
H B C 1 8
INPhO 2018 Page 6 Questions & Summary Answers Last four digits of Roll No.:
This looks like the terms of Fibonacci sequence. Fibonacci sequence is 1,1,2,3,5,8,13...etc
in which nth term of Fibonacci sequence is the sum of previous two terms i.e. Fn =
Fn−1 + Fn−2,F1 = F2 = 1. In other words:
IN−1 = F4, IN−2 = F6, IN−3 = F8, IN−4 = F10 ...
In general
IN−r
IN
= F2r+2 (6)
In
IN
= F2(N−n)+2 (7)
Second method: See Eq. 5. If IN+1 = 0, we must have
AρN+1
1 + BρN+1
2 = 0
where ρ2,1 = 3±
√
5
2 . Thus B = −A

ρ1
ρ2
 N+1
and thus
In = A ρn
1 − ρn
2

ρ1
ρ2
 N+1
!
and thus
In
IN
=
ρn
1 − ρn
2

ρ1
ρ2
 N+1
ρN
1 − ρN
2

ρ1
ρ2
 N+1
=
ρ1ρ2
ρ2 − ρ1
h
ρn−N−1
1 − ρn−N−1
2
i
Substituting the values, we get
In
IN
=
1
√
5


3 +
√
5
2
!N+1−n
−
3 −
√
5
2
!N+1−n

 (8)
Equations (7) and (8) are equivalent.
Generalization
if r 6= R:
Solution to Eq. (3) is
ρ2,1 =
b ±
√
b2 − 4
2
where b = 2 +
r
R
Thus
In
IN
=
ρ1ρ2
ρ2 − ρ1
h
ρn−N−1
1 − ρn−N−1
2
i
(9)
=
1
ρ2 − ρ1
h
ρN+1−n
2 − ρN+1−n
1
i
(10)
Alternate form of Eqs. (7), (8) and (10) are also accepted.
Detailed answers can be found on page numbers:
H B C 1 8
INPhO 2018 Page 7 Questions & Summary Answers
