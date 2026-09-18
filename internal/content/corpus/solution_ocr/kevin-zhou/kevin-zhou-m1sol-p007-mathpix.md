---
id: solution-ocr-kevin-zhou-m1sol-p007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-p007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 7. Above, we mentioned that guessing an exponential works almost all the time. The reason is because at the end of the day, the exponential cancels out and we're left with a polynomial in $\omega$, which has just the right number of roots. But if there are repeated roots, there are fewer distinct solutions for $\omega$, and hence not enough solutions.
    (a) Write down a second order differential equation with a double root $\omega$, and find its general solution. (Hint: to help find a good guess, consider the simple case $d ^ { 2 } x / d t ^ { 2 } = 0$, where $\omega = 0$ is the double root. Then generalize your guess to nonzero $\omega$ and check that it works.)
    (b) You should find that the solution qualitatively changes when you have an exact double root. However, in the limit where we have two roots that are very close together, $\omega \pm \Delta \omega$ with $\Delta \omega \ll \omega$, we should get approximately the same solution. Explicitly show how this works. When would you prefer to use either one?
    (c) [A] Consider the most general $n ^ { \text {th } }$ order, linear homogeneous time-translation invariant differential equation
$$
\left( a _ { n } \frac { d ^ { n } } { d t ^ { n } } + a _ { n - 1 } \frac { d ^ { n - 1 } } { d t ^ { n - 1 } } + \ldots + a _ { 1 } \frac { d } { d t } + a _ { 0 } \right) x = 0 .
$$
What does the general solution look like?

Solution. (a) In the case of a double root $\omega = 0$, the differential equation is $d ^ { 2 } x / d t ^ { 2 } = 0$. The solution we get by guessing an exponential is $x ( t ) = e ^ { i ( 0 ) t } = 1$, which is a constant. The other solution is linear, $x ( t ) = t e ^ { i ( 0 ) t } = t$.
This leads us to guess that for a double root $\omega$, the two independent solutions are $e ^ { i \omega t }$ and $t e ^ { i \omega t }$. In other words, we guess that the differential equation

$$
\frac { d ^ { 2 } x } { d t ^ { 2 } } - 2 i \omega \frac { d x } { d t } - \omega ^ { 2 } x = 0
$$

has the general solution

$$
x ( t ) = ( A + B t ) e ^ { i \omega t } .
$$

Plugging this in shows that it indeed works.


(b) For two close but distinct roots, the general solution is
$$
x ( t ) = C e ^ { i ( \omega + \Delta \omega ) t } + D e ^ { i ( \omega - \Delta \omega ) t }
$$
which superficially looks very different from the answer to part (a). However, note that
$$
x ( t ) = e ^ { i \omega t } \left( C e ^ { i \Delta \omega t } + D e ^ { - i \Delta \omega t } \right) = e ^ { i \omega t } ( ( C + D ) \cos ( \Delta \omega t ) + i ( C - D ) \sin ( \Delta \omega t ) ) .
$$
For short times, $\Delta \omega t \ll 1$, we have $\cos ( \Delta \omega t ) \approx 1$ and $\sin ( \Delta \omega t ) \approx \Delta \omega t$, up to quadratic and higher terms, so
$$
x ( t ) \approx e ^ { i \omega t } ( ( C + D ) + i ( C - D ) \Delta \omega t )
$$
from which we can identify
$$
A \leftrightarrow C + D , \quad B \leftrightarrow i ( C - D ) \Delta \omega .
$$
Intuitively, the $B t$ term comes from superposing two complex exponentials with opposite sign. Initially, they just cancel out, but over time the difference builds up, leading to an oscillation

with a linearly growing amplitude. (You can see this kind of envelope behavior in two weakly coupled pendulums, a system which has two nearby oscillation frequencies. We'll return to this subject in M4.) Of course, once you get to the point $\Delta \omega t \sim 1$, the two solutions will start to noticeably differ. The envelope of the oscillation in part (b) will start decreasing, while that of part (a) will keep growing forever.
So, which solution should we actually use? Math courses teach that the solution of part (a) should be used if and only if the roots are exactly equal. But in real physical systems, no two things are ever exactly equal. But does that mean the solution of part (a) should never be used in practice? Of course not!
Instead, as physicists, we should use the description that's more useful in a given context. If $\Delta \omega \ll \omega$, and we're only measuring for a short time $\Delta \omega t \ll 1$, then the solution in part (a) is intuitive and approximately right. We can read off what the motion looks like directly from the parameters $A$ and $B$. On the other hand, the "exact" description using $C$ and $D$ is clunky: to get a reasonable value of $B$ (without a huge value of $A$ ), we would need to tune $C$ and $D$ to be both huge, but almost exactly opposite each other. Then $x ( t )$ would have to be computed by adding two terms that almost cancel out, which is both less intuitive and less numerically accurate. So in this case we would prefer using the description in terms of $A$ and $B$, though of course, if we wanted a result valid for $\Delta \omega t \gtrsim 1$, we would have to use $C$ and $D$.
(c) Guessing $e ^ { i \omega t }$ gives
$$
a _ { n } ( i \omega ) ^ { n } + a _ { n - 1 } ( i \omega ) ^ { n - 1 } + \ldots + a _ { 0 } = 0 .
$$
In the case where the roots are distinct, there are $n$ possible values for $\omega$, and hence $n$ parameters in our trial solution,
$$
x ( t ) = \sum _ { i = 1 } ^ { n } A _ { i } e ^ { i \omega _ { i } t } .
$$
Since the differential equation has order $n$, there are $n$ parameters needed to specify the solution, so this is the general solution. If $\omega _ { i }$ is a double root, then both $e ^ { i \omega _ { i } t }$ and $t e ^ { i \omega _ { i } t }$ are solutions. For a triple root, $t ^ { 2 } e ^ { i \omega _ { i } t }$ is also a solution, and so on.

## Remark

You might be wondering how to solve more general differential equations. In M4, we will consider three extensions of the above techniques. We'll use the idea of normal modes to solve systems of such differential equations, add driving forces to make the equations inhomogeneous, and use the adiabatic theorem to approximately solve non-time-translationinvariant equations where the coefficients change slowly in time.

Of course, this just scratches the surface of the subject, and solving more general differential equations can be orders of magnitude harder. We won't try to solve nonlinear differential equations, as there is no general technique for doing so, and the answer is often an obscure special function. (However, such equations will occasionally appear in later problems.) On the other hand, linear differential equations with general time-dependence are more approachable, and the following problem illustrates the most basic method for solving them.
