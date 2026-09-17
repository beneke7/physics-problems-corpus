---
id: nbpho-2010-thermos-bottle
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2010-thermos-bottle
solution_type: official
source_document: solution-document-nbpho-2010-s
source_pdf: cache/phoxiv/nbpho/2010_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2010_S.pdf."
---

Problem 2. Thermos bottle (6 points)
i. (3.5 pts) Remark: this problem techically rather challenging.
Therefore, reasonable estimates like P ≈ σεS1(T4
2 − T4
1 ) ≈
2.6W or P ≈ 1
2σεS1(T4
2 −T4
1 ) ≈ 1.3W will be graded by 2–2.5
pts.
The heat ﬂux radiated from one wall is partially reﬂected
back by other wall, which is also partially reﬂected back, etc.
Besides, the ﬂux from the outer wall can hit itself, if it misses
the inner wall. So, near the surface of the outer wall, we can
split the heat ﬂux into inwards ﬂux Qi and outwards ﬂux Qo.
Then, upon designating the ﬂux radiated by the outer wall by
Q = εσS2T4
2 , we have equalities
Qi = Q + Qo(1 − ε),
i.e. the inward ﬂux consists of (a) inital radiation, and of (b)
the back-reﬂected part of the outwards ﬂux. Similarly we have
Qo = Qiκ(1 − ε) + Qi(1 − κ) = Qi(1 − κε),
i.e. the outward ﬂux consists of (a) the part κ of itself, which
hits the inner wall and is reﬂected back, and of (b) the part
1−κ of itself, which misses the inner wall hence reaches again
the outer wall as an outwards ﬂux. Upon substituting Qo from
the second equation into the ﬁrst one, we obtain
Q = Qi[1 − (1 − κε)(1 − ε)] = Qiε(1 + κ − κε),
hence Qi = Q/ε(1 + κ − ε). From that inwards ﬂux, the part
which hits the inner wall is κ; in order to get the dissipated
part, we need further to multiply the result by ε. So, the dis-
sipated ﬂux is
Qdi = εσS2T4
2 κ/(1 + κ − κε).
In order to obtain the ﬂux Qdo, which is radiated from the
inner wall and is dissipated in the outer wall, we proceed in the
same way. Now, let Q = εσS1T4
1 ; then,
Qo = Q + Qi(1 − κε),
and
Qi = Qo(1 − ε),
so that Qo = Q/[ε(1 + κ − κε)] and
Qdo = εσS1T4
1 /(1 + κ − κε).
Now, let us consider (an imaginary) situation, when T1 = T2.
This is thermal equilibrium, when the heat ﬂux Qdo given by
the inner wall to the outer one must be equal to the ﬂux Qdi,
which is given by the outer wall to the inner one. Using our
expressions we see that κS2 = S1, i.e. κ = S1/S2. Now we can
ﬁnally write down the expression for the net ﬂux given to the
nitrogen,
P = Qdi − Qdo =
εσ4πR2
1(T4
2 − T4
1 )
1 + (1 − ε)R2
1/R2
2
≈ 1.78W.
ii. (2.5 pts) The net heat received by the inner wall is spent
on evaporating the nitrogen, i.e. τP = λm, where m = 4
3πρR3
.
So,
τ =
4
3
πρR3
λµ/P ≈ 36h.
