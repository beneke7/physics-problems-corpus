---
id: kevin-zhou-w1-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-p004
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

[3] Problem 4. [A] At time t = 0, the position and transverse velocity of a string obeying the wave
equation are given by y(x) and vy(x). Find an explicit expression for y(x,t) in terms of these
functions; this is called d’Alembert’s solution. (Hint: construct solutions with initial position y(x)
and zero initial velocity, and vice versa, and add them together. Your final answer should contain
an integral involving vy.)
Solution. We write y(x,t) = g(x,t) + h(x,t), where g has the correct initial position y(x) but no
initial velocity, and h has the correct initial velocity vy(x) but zero initial position. The lesson of
problem 2 was precisely that
g(x,t) =
y(x − vt) + y(x + vt)
2
.
Now let’s construct h(x,t). We know it must vanish at t = 0, and that when it’s differentiated with
respect to time at t = 0, we get vy(x). So an initial guess might be
h(x,t) =
Z t
0
vy(x − vt′
)dt′
.
3
Kevin Zhou Physics Olympiad Handouts
That’s because, by the fundamental theorem of calculus, the only contribution to ∂h/∂t is from the
change of the upper bound of the integral, so
∂h
∂t t=0
= vy(x − vt)
t=0
= vy(x).
However, this solution doesn’t work, because it doesn’t quite satisfy the wave equation. In particular,
at t = 0 we have h = 0, which implies ∂2h/∂x2 = 0, which implies ∂2h/∂t2 = 0 by the wave equation.
In other words, the solution for h should have no initial acceleration because the string begins flat.
But taking the second time derivative of the solution above gives something that’s certainly nonzero.
To fix this, we use exactly the same trick that was used to derive g. We superpose a solution
with dependence on x + vt rather than x − vt,
h(x,t) =
1
2
Z t
0
(vy(x − vt′
) + vy(x + vt′
))dt′
.
This still has the right initial conditions, and it does solve the wave equation.
We therefore conclude that the general solution is
y(x,t) =
1
2

y(x − vt) + y(x + vt) +
Z t
0
(vy(x − vt′
) + vy(x + vt′
))dt′

.
Using this solution you can show, for example, that if you poke the string and thereby change either
y or vy at one point in space, the influence of that change spreads out at speed v. In other words,
the physics is “local”: there is no way to send a signal to a distant place instantaneously. This
solution gives the basic prototype for many arguments involving locality in more advanced physics.
