---
id: solution-ocr-kevin-zhou-m8sol-p026
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m8-p026]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 26. You might be wondering how we can solve the weakening spring problem from M4 without anything fancy like the adiabatic theorem. There is a general technique to solve linear differential equations whose coefficients are slowly varying. First, write the equation of motion as

$$
\ddot { x } + \omega ^ { 2 } ( t ) x = 0 .
$$

Then expand $x ( t )$ as

$$
x ( t ) = A ( t ) e ^ { i \phi ( t ) } , \quad \dot { \phi } ( t ) = \omega ( t ) .
$$

The point of writing $x ( t )$ this way is that pulling out the factor of $e ^ { i \phi ( t ) }$ will automatically account for the rapid oscillations. The factor $A ( t )$ only varies slowly, so it's easier to handle by itself.

(a) Evaluate $\ddot { x } ( t )$ and plug it into the equation of motion.
(b) Using the fact that $A ( t )$ and $\omega ( t )$ vary slowly, throw out small terms in your equation from part (a), until you get a differential equation you can easily integrate. This is an example of the WKB approximation for differential equations, which we applied at length in X1.
(c) Show that this gives the expected final result for a weakening spring.

Solution. (a) Just carrying out the time derivatives using the product rule gives
$$
\ddot { x } = \ddot { A } e ^ { i \phi } + 2 i \omega \dot { A } e ^ { i \phi } + i \dot { \omega } A e ^ { i \phi } - \omega ^ { 2 } A e ^ { i \phi } .
$$
Plugging this back into the equation of motion, the last term cancels, and we can cancel an overall factor of $e ^ { i \phi }$ to get
$$
\ddot { A } + 2 i \omega \dot { A } + i \dot { \omega } A = 0 .
$$
    (b) Let's think carefully about how big each of these terms is. If the total time it takes for the spring to weaken is $T$, where $\omega T \gg 1$, then each time derivative on $A$ or $\omega$ multiplies the magnitude of the term by roughly $1 / T$. So the first term is of order $A / T ^ { 2 }$, while the other two are of order $\omega A / T \gg A / T ^ { 2 }$. Therefore, we can throw out the first term to get
$$
\frac { 2 \dot { A } } { A } = - \frac { \dot { \omega } } { \omega }
$$
which is equivalent to
$$
\frac { d \log \left( A ^ { 2 } \right) } { d t } = \frac { d \log ( 1 / \omega ) } { d t } .
$$
    (c) The above result tells us that $A ^ { 2 } \omega$ is constant, so $A \propto k ^ { - 1 / 4 }$ as found in M4.
[4] Problem 27 (BAUPC 1996). A mass $M$ is located at the vertex of an angle $\theta \ll 1$ formed by two massless sticks of length $\ell$. The structure is held so that the left stick is initially vertical, then released. The right stick hits the ground at time $t = 0$. The structure then rocks back and forth, coming to a stop at time $t = T$.
    (a) Prove the identity
$$
1 + \frac { 1 } { 3 ^ { 2 } } + \frac { 1 } { 5 ^ { 2 } } + \frac { 1 } { 7 ^ { 2 } } + \ldots = \frac { \pi ^ { 2 } } { 8 }
$$
using the result $\sum _ { n \geq 1 } 1 / n ^ { 2 } = \pi ^ { 2 } / 6$, which we derived in $\mathbf { W } 1$.
    (b) Using this result, calculate $T$ to leading order in $\theta$.

Solution. See the official solutions as usual.
