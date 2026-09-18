---
id: usapho-2009-a2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2009-a2
solution_type: official
source_document: solution-document-usapho-2009-s
source_pdf: cache/phoxiv/usapho/2009_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2009_S.pdf."
---

Question A2
A mixture of 32P and 35S (two beta emitters widely used in biochemical research) is placed next to
a detector and allowed to decay, resulting in the data below. The detector has equal sensitivity to
the beta particles emitted by each isotope, and both isotopes decay into stable daughters.
You should analyze the data graphically. Error estimates are not required.
Day Activity Day Activity Day Activity
0 64557 40 12441 200 1121
5 51714 60 6385 250 673
10 41444 80 3855 300 467
20 27020 100 2734
30 18003 150 1626
a. Determine the half-life of each isotope. 35S has a significantly longer half-life than 32P.
b. Determine the ratio of the number of 32P atoms to the number of 35S atoms in the original
sample.
Solution
Copyright ©2009 American Association of Physics Teachers
2009 Semifinal Exam Part A 5
a. The number of each isotope decays exponentially, N(t) = NS,02−t/tS + NP,02−t/tP where tS
and tP are the half-lives, and NS,0 and NP,0 are the initial abundances. Because the detector is
equally likely to detect any beta particle emitted in a decay, the total activity is proportional
to the decay rate,
A(t) ∝ −
dN
dt
∝
NS,0
tS
2−t/tS
+
NP,0
tP
2−t/tP
.
We know that tS
 tP , which implies that after a long time, decays of 35S will dominate,
since by then almost all the 32P has decayed away. On the other hand, the decay rate of 35S
is suppressed by a factor of tS, which means that at early times, decays of 32P dominate.
Therefore, we can find the individual half-lives by fitting a single decaying exponential to the
data, at both early and late times, which is equivalent to fitting a line to a plot of lnA(t)
versus t. For the early times, we choose the first five data points; for the late times, we choose
the last five data points. The results are shown below.
0 5 10 15 20 25 30
Time (days)
9.8
10.0
10.2
10.4
10.6
10.8
11.0
ln A(t)
100 125 150 175 200 225 250 275 300
Time (days)
6.25
6.50
6.75
7.00
7.25
7.50
7.75
8.00
ln A(t)
The slopes of these lines, in the units used in the plots, are −0.043 and −0.0088, and they
should be equal to −(ln2)/tP and −(ln2)/tS, respectively. This gives half-lives tP = 16days
and tS = 78days. Any answer within 10% of these values is reasonably good.
b. Because the activity is dominated by 32P at the beginning and 35S at the end,
A(300days)
A(0days)
=
NS,02−(300days)/tS /tS
NP,0/tP
which means that
NP,0
NS,0
=
A(0days)
A(300days)
tP
tS
2−(300days)/tS
= 2.0.
Since this final result depends sensitively on your values of tP and tS, any answer within 25%
is acceptable.
