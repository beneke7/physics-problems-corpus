---
id: solution-ocr-kevin-zhou-w1sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. [A] At time $t = 0$, the position and transverse velocity of a string obeying the wave equation are given by $y ( x )$ and $v _ { y } ( x )$. Find an explicit expression for $y ( x , t )$ in terms of these functions; this is called d'Alembert's solution. (Hint: construct solutions with initial position $y ( x )$ and zero initial velocity, and vice versa, and add them together. Your final answer should contain an integral involving $v _ { y }$.)
Solution. We write $y ( x , t ) = g ( x , t ) + h ( x , t )$, where $g$ has the correct initial position $y ( x )$ but no initial velocity, and $h$ has the correct initial velocity $v _ { y } ( x )$ but zero initial position. The lesson of problem 2 was precisely that
$$
g ( x , t ) = \frac { y ( x - v t ) + y ( x + v t ) } { 2 } .
$$
Now let's construct $h ( x , t )$. We know it must vanish at $t = 0$, and that when it's differentiated with respect to time at $t = 0$, we get $v _ { y } ( x )$. So an initial guess might be
$$
h ( x , t ) = \int _ { 0 } ^ { t } v _ { y } \left( x - v t ^ { \prime } \right) d t ^ { \prime }
$$

That's because, by the fundamental theorem of calculus, the only contribution to $\partial h / \partial t$ is from the change of the upper bound of the integral, so

$$
\left. \frac { \partial h } { \partial t } \right| _ { t = 0 } = \left. v _ { y } ( x - v t ) \right| _ { t = 0 } = v _ { y } ( x ) .
$$

However, this solution doesn't work, because it doesn't quite satisfy the wave equation. In particular, at $t = 0$ we have $h = 0$, which implies $\partial ^ { 2 } h / \partial x ^ { 2 } = 0$, which implies $\partial ^ { 2 } h / \partial t ^ { 2 } = 0$ by the wave equation. In other words, the solution for $h$ should have no initial acceleration because the string begins flat. But taking the second time derivative of the solution above gives something that's certainly nonzero.

To fix this, we use exactly the same trick that was used to derive $g$. We superpose a solution with dependence on $x + v t$ rather than $x - v t$,

$$
h ( x , t ) = \frac { 1 } { 2 } \int _ { 0 } ^ { t } \left( v _ { y } \left( x - v t ^ { \prime } \right) + v _ { y } \left( x + v t ^ { \prime } \right) \right) d t ^ { \prime }
$$

This still has the right initial conditions, and it does solve the wave equation.
We therefore conclude that the general solution is

$$
y ( x , t ) = \frac { 1 } { 2 } \left( y ( x - v t ) + y ( x + v t ) + \int _ { 0 } ^ { t } \left( v _ { y } \left( x - v t ^ { \prime } \right) + v _ { y } \left( x + v t ^ { \prime } \right) \right) d t ^ { \prime } \right) .
$$

Using this solution you can show, for example, that if you poke the string and thereby change either $y$ or $v _ { y }$ at one point in space, the influence of that change spreads out at speed $v$. In other words, the physics is "local": there is no way to send a signal to a distant place instantaneously. This solution gives the basic prototype for many arguments involving locality in more advanced physics.
