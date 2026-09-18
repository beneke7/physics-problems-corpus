---
id: solution-ocr-kevin-zhou-r3sol-p017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r3-p017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 17. Let's consider one more simple application of canonical momentum. Suppose a point charge of mass $m$ and charge $q$ experiences the uniform constant fields $\mathbf { E } = E \hat { \mathbf { x } }$ and $\mathbf { B } = B \hat { \mathbf { y } }$.

(a) Write a corresponding $\phi$ and $\mathbf { A }$ which are independent of $y$ and $z$.
(b) What are the associated conserved quantities?

Solution. (a) The simplest possible answer is $\phi = - E x$ and $\mathbf { A } = - B x \hat { \mathbf { z } }$.

(b) The conserved quantities are $p _ { y } = m v _ { y }$ and $p _ { z } = m v _ { z } - q B x$. Conservation of $p _ { y }$ is trivial, as there are no forces in the $y$-direction. As for $p _ { z }$, it's conserved because
$$
\frac { d p _ { z } } { d t } = m a _ { z } - q B v _ { x }
$$
which is simply the $z$-component of the Lorentz force law, as we saw in the corresponding problem in E4. So in this case the canonical momentum doesn't tell you much new, though in a more subtle situation, such as when the particle is relativistic, it can be useful.

By now, we've covered most of the applications of canonical momentum for point charges. When it shows up on modern Olympiad problems, there's generally a twist. For instance, we can replace the point charge with an electric dipole, as illustrated in the following three tough questions.

[5] Problem 18. APhO 2001, problem 2. In the first part, you are meant to define the moment of inertia as a scalar, $I = m \ell ^ { 2 } / 2$, even though it's technically a tensor. As you'll see, the difference doesn't matter, since the moment of inertia about the dipole's axis vanishes.
[5] Problem 19. EuPhO 2022, problem 3.
[5] Problem 20. Physics Cup 2021, problem 1. This one requires more electromagnetism background.
Solution. See the official solutions here.
[5] Problem 21. GPhO 2017, problem 3. A problem on a "shock wave" hitting an electron. Don't be intimidated by the language; you don't need to know anything about shock wave physics to do this question.

## 3 Gravitational Fields

Idea 5
In classical mechanics, you've seen that a uniform gravitational field behaves a lot like the fictitious force due to a uniform acceleration. The equivalence principle states that the two behave exactly identically, in all possible contexts; it was one of the key ideas that led to the development of general relativity.
