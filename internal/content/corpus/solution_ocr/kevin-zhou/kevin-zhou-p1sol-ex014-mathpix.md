---
id: solution-ocr-kevin-zhou-p1sol-ex014
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex014]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 14
Consider an Atwood's machine, i.e. an ideal pulley with masses $m$ and $M$ hung on each end of the string. Find the tension in the string.

Solution
Since the equations involved are all linear equations, we expect the answer should also be simple. It can only depend on $g , m$, and $M$, so by dimensional analysis, it must be proportional to $g$. By dimensional analysis, this must be multiplied by something with one net power of mass. Since the answer remains the same if we switch the masses, it should be symmetric in $m$ and $M$.

Given all of this, the simplest possible answer would be

$$
T \propto g ( M + m ) .
$$

To test this, we consider some limiting cases. If $M \gg m$, the mass $M$ is essentially in free fall, so the mass $m$ accelerates upward with acceleration $g$. Then the tension is approximately $2 m g$. Similarly, in the case $M \ll m$, the tension is approximately $2 M g$. These can't be satisfied by the form above.

The next simplest option is a quadratic divided by a linear expression. Both of these must be symmetric, so the most general possibility is

$$
T = g \frac { A \left( m ^ { 2 } + M ^ { 2 } \right) + B m M } { M + m } .
$$

Then the limiting cases can be satisfied if $A = 0$ and $B = 2$, giving

$$
T = \frac { 2 g m M } { M + m } .
$$

[1] Problem 25. Use similar reasoning to guess the acceleration of the masses in an Atwood's machine. (We will show an even easier way to do this, using "generalized coordinates", in M4.)

Solution. We know from dimensional analysis that the acceleration is $g f ( m , M )$ where $f ( m , M )$ is dimensionless. Thus it should be a fraction.

If either of the masses is much greater than the other mass, then the acceleration should be $\pm g$. Thus the coefficients of $m$ and $M$ should be ±1. If the masses are equal, then the acceleration should be zero, so the numerator should be proportional to $M - m$. Since the denominator should be different but still have factors of $\pm 1$, a simple reasonable guess is

$$
a = \frac { M - m } { M + m } g .
$$

which is indeed the real answer.
[1] Problem 26. Find the perimeter of a regular $N$-gon, if $L$ is the distance from the center to any of the vertices. By considering a limiting case, use this to derive the circumference of a circle.


Solution. By basic trigonometry, the perimeter is $2 N L \sin ( \pi / N )$. Then the circumference of a circle is

$$
\lim _ { N \rightarrow \infty } 2 N L \sin ( \pi / N ) = \lim _ { N \rightarrow \infty } 2 N L \frac { \pi } { N } = 2 \pi L
$$

as expected. We can see that the limit of $N \sin ( \pi / N )$ is $\pi$ through the small angle approximation. If you want more rigor, you could also say that this is an indeterminate form $\infty \times 0$, and use l'Hospital's rule.

[2] Problem 27 (Morin 1.6). A person throws a ball (at an angle of her choosing, to achieve the maximum distance) with speed $v$ from the edge of a cliff of height $h$. Which of the below could be an expression for the maximal range?
$$
\frac { g h ^ { 2 } } { v ^ { 2 } } , \quad \frac { v ^ { 2 } } { g } , \quad \sqrt { \frac { v ^ { 2 } h } { g } } , \quad \frac { v ^ { 2 } } { g } \sqrt { 1 + \frac { 2 g h } { v ^ { 2 } } } , \quad \frac { v ^ { 2 } } { g } \left( 1 + \frac { 2 g h } { v ^ { 2 } } \right) , \quad \frac { v ^ { 2 } / g } { 1 - 2 g h / v ^ { 2 } } .
$$
If desired, try Morin problems 1.13, 1.14, and 1.15 for additional practice.

Solution. First check if they're all dimensionally correct (they are). When $h = 0$, the maximum range as found above with $\sin ( 2 \theta ) = 1$ is $v ^ { 2 } / g$. Also the maximum range obviously depends on the height of the edge of the cliff, and there shouldn't be a case of a finite height or velocity where the range becomes infinite. This leaves 2 options:

$$
\frac { v ^ { 2 } } { g } \sqrt { 1 + \frac { 2 g h } { v ^ { 2 } } } , \quad \frac { v ^ { 2 } } { g } \left( 1 + \frac { 2 g h } { v ^ { 2 } } \right)
$$

When $h$ is small, the extra distance at the end of the trajectory from dipping down a vertical distance $h$ can be found with binomial theorem: $h$, and $2 h$ respectively. Since the trajectory is symmetric, when $h \approx 0$ (to be more concise, $h \ll v ^ { 2 } / g$ ) the optimal launch angle is 45 deg, so by geometry the extra distance should also be $h$. Thus the correct formula is

$$
\frac { v ^ { 2 } } { g } \sqrt { 1 + \frac { 2 g h } { v ^ { 2 } } } .
$$
