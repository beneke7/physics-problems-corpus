---
id: kevin-zhou-p2-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p019
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[4] Problem 19. [A] This problem extends problem 18 to derive some canonical results.
(a) Let λ = αT. Find the probability p(X = k) of hearing exactly k clicks in terms of λ and k.
(b) To check your result, show that the sum of the p(X = k) is equal to one.
(c) ⋆ In the limit λ ≫ 1, show that the probabilities p(X = k) approach that of a normal
distribution with the mean and standard deviation calculated in problem 18, thereby providing
an example of the central limit theorem at work. This is a rather involved calculation, which
will use many of the techniques from P1. It will also require Stirling’s approximation,
n! ≈
√
2πn
n
e
n
for n ≫ 1, which we mentioned in P1. (Hint: because the relative uncertainty falls as λ
increases, start by writing k = λ(1+δ) for |δ| ≪ 1, and expand in powers of δ. Be careful not
to drop too many terms, as δ is small, but λδ isn’t.)
Solution. (a) Following the notation of problem 18, we have X =
P
i Xi, and we get k clicks if
precisely k of the Xi are equal to 1. Thus,
p(X = k) =

N
k

(αdt)k
(1 − αdt)N−k
≈
Nk
k!
(αdt)k
(1 − αdt)N
=
λk
k!
e−λ
.
This is known as the Poisson distribution.
14
Kevin Zhou Physics Olympiad Handouts
(b) This follows from the Taylor series of the exponential,
∞ X
k=0
p(X = k) = e−λ
∞ X
k=0
λk
k!
= 1.
(c) Using Stirling’s approximation, we have
p(X = k) =
1
√
2πk

λe
k
k
e−λ
=
1
p
2πλ(1 + δ)

e
1 + δ
λ(1+δ)
e−λ
≈
1
√
2πλ
eδλ
(1 + δ)−λ(1+δ)
where we used the fact that δ ≪ 1.
Now we need to use a technique from P1. Letting the final term be equal to 1/y, we have
logy = λ(1 + δ)log(1 + δ) = λ(1 + δ)

δ −
δ2
2
+ O(δ3
)

= δλ +
δ2λ
2
+ O(δ3
λ).
In P1, we only expanded up to the first term, but here we need to keep the order δ2 term.
The reason is we want an approximation that works for the whole peak of the probability
distribution, and we know it has relative uncertainty 1/
√
λ, which means we need to take
δ ∼ 1/
√
λ. That implies that δ2λ is of order one and cannot be dropped, but δ3λ is small and
can be dropped. Anyway, plugging this in, we find
p(X = k) ≈
1
√
2πλ
e−δ2λ/2
=
1
√
2πλ
e−(k−λ)2/2λ
which is precisely a normal distribution with the appropriate mean and standard deviation.
[3] Problem 20.  m 1 0IPhO 2023, problem 1, parts A, B, and D.3. A short derivation of the key features
of Brownian motion. It requires only the ideas of this problem set, and some basic mechanics.
4 Data Analysis
Idea 5
All data analysis for the USAPhO and IPhO can be done using extremely basic methods.
Sometimes, it suffices to just calculate a value based on a single data point, or by cleverly
using a pair of data points. When this isn’t enough, you’ll have to do graphical data analysis,
which will usually correspond to drawing a line and measuring its slope and intercept. This
is quite limited compared to modern statistical tools, but also can be surprisingly powerful.
15
Kevin Zhou Physics Olympiad Handouts
