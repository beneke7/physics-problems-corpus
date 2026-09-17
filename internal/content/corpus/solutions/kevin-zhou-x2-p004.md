---
id: kevin-zhou-x2-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x2-p004
solution_type: author
source_document: solution-document-kevin-zhou-x2sol
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X2Sol.pdf."
---

[3] Problem 4. Some nuclei have extremely long lifetimes τ, so that we can measure τ by continuously
watching a very large sample of N0 nuclei, and looking for decay events. However, it turns out that
the way we do it can yield different results. Let’s consider the following procedures.
(a) We start a stopwatch at noon and stop it when the next decay happens, giving t1.
(b) We have an intern watch the sample continuously, then at noon, ask them how long it was
since the last decay, giving t2.
(c) We have an intern watch the sample continuously, then at noon, ask them how long it was
since the last decay. We then set our stopwatch so that t = 0 when that decay happened, and
stop the stopwatch when the next decay happens, giving t3.
(d) We continuously watch the sample, start a stopwatch when the first decay happens, then stop
it when the next decay happens, giving t4.
We repeat procedure i many times, so the average of ti is ti. Find the ti in terms of N0 and τ.
Solution. (a) The probability of any decay in a time interval dt is N0dt/τ, so the probability
of having no decay in that interval is (1 − N0dt/τ). After N = t/dt such time intervals, the
probability that a single decay still hasn’t occurred is (1 − N0dt/τ)N. As shown in P1, this
becomes e−N0t/τ in the limit dt → 0. Thus, the probability of the first decay occurring after
time t in an interval dt is
P(t)dt =
N0
τ
e−N0t/τ
dt.
The value of t1 is the average of this time, so
t1 =
N0
τ
Z ∞
0
e−N0t/τ
tdt =
Z ∞
0
e−N0t/τ
dt =
τ
N0
.
(b) “Waiting” forward or backwards in time are symmetric, so t2 = t1 = τ/N0. (Technically,
there’s a tiny difference because the previous decay occured when there were N0 + 1 nuclei
instead, but this is negligible in a typical sample containing billions of billions of nuclei.)
(c) By definition, t3 = t1 +t2, and taking expectation values gives t3 = t1 +t2. Thus, t3 = 2τ/N0.
6
Kevin Zhou Physics Olympiad Handouts
(d) We know that the mean time between decays is τ/N0, so t4 = τ/N0.
Of course, the tricky part of the problem is the following: why is t3 ̸= t4, even though they
seem to be measuring the exact same thing, namely the time between two decays? The
difference is in the way we select the decay we look at. For t4, we look at a random decay
event (i.e. if there are a thousand decay events, each one has an equal chance of being the one
we look at). But for t3, we look at the decay happening during a random time, which means
that longer time intervals have a larger chance of being randomly picked, so t3 > t4.
To show this explicitly, note that the probability distribution of decay times is (N0/τ)e−N0t/τ,
as derived in part (a). The probability distribution of decay times weighted by decay length,
as used in part (c), is (N0/τ)2 te−N0t/τ. So the expected decay time in part (c) is
t3 =
N2
0
τ2
Z ∞
0
t2
e−N0t/τ
dt = 2
τ
N0
just as argued more intuitively above.
This is quite a tricky factor of 2. Drude got it wrong when formulating the Drude model,
which is the simplest classical model of electrical conduction in a metal. It turns out that the
Drude model is totally wrong, due to quantum mechanics, but this mistake, plus two other
more conceptual issues, made it look like it agreed with experiment.
Another example of a memoryless process is the collisions of a given gas molecule in an ideal gas,
according to kinetic theory. For example, all of the subparts above could have been rephrased in
terms of observing the distance a gas molecule moves between collisions, with the same conclusions.
[2] Problem 5 (Krane 12.37). A radioactive sample contains N0 atoms at time t = 0. It is observed
that N1 radioactive atoms remain at time t1 and then decay by time t2, N2 remain at t2 and then
decay by time t3, and so on. Show that if many observations are made, then τ can be measured as
τ =
1
N0
X
i
Niti.
Solution. N(t) should follow N(t) = N0e−t/τ, so dN(t)/dt = −N(t)/τ. Thus the number of atoms
that decay between time ti and ti+1, Ni, will be about Ni = (ti+1 −ti)dN(ti)/dt = (ti+1 −ti)N(t)/τ
as the number of measurements are large. With smaller time intervals, this can be seen as Ni =
N(t)dt/τ. Thus looking at the expression 1
N0
P
i Niti gives
1
N0
X
i
Niti ≈
1
N0
Z ∞
0

N(t)
dt
τ

t =
1
τ
Z ∞
0
e−t/τ
tdt.
This integral can be evaluated with parts (differentiating t and integrating e−t/τdt),
1
τ
Z ∞
0
e−t/τ
tdt =
Z ∞
0
e−t/τ
dt = τ,
which shows that, as desired,
τ =
1
N0
X
i
Niti.
7
Kevin Zhou Physics Olympiad Handouts
