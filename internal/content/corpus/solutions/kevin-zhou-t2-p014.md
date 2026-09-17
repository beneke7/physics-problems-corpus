---
id: kevin-zhou-t2-p014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p014
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[5] Problem 14. This is a long problem, but a really useful one that ties a lot of things together.
Consider a set of N atoms, each of which may be in the ground state, with zero energy, or in an
excited state with energy E0. Suppose it is only known that the total energy of the system is αNE0.
(a) In P1, we discussed Stirling’s approximation: for large N, logN! ≈ N logN − N. Using this
result, show that the entropy of the system is
S = NkB

αlog
1
α
+ (1 − α)log
1
1 − α

.
Sketch the entropy as a function of α.
(b) Using the definition of temperature, dS = d̄Q/T, show that the system has a temperature of
T =
E0
kB
1
log(1 − α) − logα
.
Sketch the temperature as a function of α. In particular, what temperature do you need to
get α = 1/2? How about α = 1?
(c) Show that the third law is satisfied.
(d) Now consider just a single one of the N atoms, where the total energy of the system is αNE0
as before. Show that the probability it is excited obeys the Boltzmann distribution.
Solution. (a) We see that Ω = N
αN

= N!
(αN)!((1−α)N)!, so
logΩ ≈ N logN − αN log(αN) − (1 − α)N log((1 − α)N).
16
Kevin Zhou Physics Olympiad Handouts
Expanding the logarithms and simplifying, we get
S = kB logΩ = NkB

αlog
1
α
+ (1 − α)log
1
1 − α

.
(b) We see that d̄Q = NE0 dα, and
dS = NkB (log(1 − α) − logα)dα.
Thus, T = d̄Q/dS = E0
kB
1
log(1−α)−logα. Here is the graph of T as a function of α.
0 1
2
1
kBT
E0
α
To get α = 0.5 we need T = ∞, to get α > 0.5 we need negative temperatures, and as α → 1,
we have T → 0 from the negative side. So the hottest possible temperature is just below zero!
Though this sounds weird, it just means the natural variable is 1/T, which indeed decreases
monotonically as α increases. Also, a system having negative temperature doesn’t mean it’s
particularly violent. It just means we’ve temporarily driven it to α > 0.5, so that when placed
in contact with anything at positive temperature, it will tend to lose energy.
(c) As α → 0, we see T → 0 and S → 0. For the entropy, this requires an application of
l’Hospital’s rule, which shows that limα→0 αlogα = 0.
(d) We know the probability is just α, so
p(excited)
p(ground)
=
α
1 − α
.
By comparison, the Boltzmann distribution states that
p(excited)
p(ground)
= e−E0/kBT
.
Therefore, the two expressions match if
e−E0/kBT
=
α
1 − α
.
This is equivalent to the expression for T we found in part (b), as desired.
17
Kevin Zhou Physics Olympiad Handouts
