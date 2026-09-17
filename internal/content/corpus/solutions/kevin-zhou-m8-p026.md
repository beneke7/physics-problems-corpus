---
id: kevin-zhou-m8-p026
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m8-p026
solution_type: author
source_document: solution-document-kevin-zhou-m8sol
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M8Sol.pdf."
---

[3] Problem 26. You might be wondering how we can solve the weakening spring problem from M4
without anything fancy like the adiabatic theorem. There is a general technique to solve linear
differential equations whose coefficients are slowly varying. First, write the equation of motion as
ẍ + ω2
(t)x = 0.
Then expand x(t) as
x(t) = A(t)eiϕ(t)
, ϕ̇(t) = ω(t).
The point of writing x(t) this way is that pulling out the factor of eiϕ(t) will automatically account
for the rapid oscillations. The factor A(t) only varies slowly, so it’s easier to handle by itself.
(a) Evaluate ẍ(t) and plug it into the equation of motion.
(b) Using the fact that A(t) and ω(t) vary slowly, throw out small terms in your equation from
part (a), until you get a differential equation you can easily integrate. This is an example of
the WKB approximation for differential equations, which we applied at length in X1.
(c) Show that this gives the expected final result for a weakening spring.
32
Kevin Zhou Physics Olympiad Handouts
Solution. (a) Just carrying out the time derivatives using the product rule gives
ẍ = Äeiϕ
+ 2iωȦeiϕ
+ iω̇Aeiϕ
− ω2
Aeiϕ
.
Plugging this back into the equation of motion, the last term cancels, and we can cancel an
overall factor of eiϕ to get
Ä + 2iωȦ + iω̇A = 0.
(b) Let’s think carefully about how big each of these terms is. If the total time it takes for the
spring to weaken is T, where ωT ≫ 1, then each time derivative on A or ω multiplies the
magnitude of the term by roughly 1/T. So the first term is of order A/T2, while the other
two are of order ωA/T ≫ A/T2. Therefore, we can throw out the first term to get
2Ȧ
A
= −
ω̇
ω
which is equivalent to
dlog(A2)
dt
=
dlog(1/ω)
dt
.
(c) The above result tells us that A2ω is constant, so A ∝ k−1/4 as found in M4.
[4] Problem 27 (BAUPC 1996). A mass M is located at the vertex of an angle θ ≪ 1 formed by
two massless sticks of length ℓ. The structure is held so that the left stick is initially vertical, then
released. The right stick hits the ground at time t = 0. The structure then rocks back and forth,
coming to a stop at time t = T.
(a) Prove the identity
1 +
1
32
+
1
52
+
1
72
+ ... =
π2
8
using the result
P
n≥1 1/n2 = π2/6, which we derived in W1.
(b) Using this result, calculate T to leading order in θ.
Solution. See the official solutions as usual.
