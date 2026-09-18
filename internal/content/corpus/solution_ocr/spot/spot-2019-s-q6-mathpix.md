---
id: solution-ocr-spot-2019-s-q6
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2019-q6]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 6 BKT Transition

You are well advised to read up Wikipedia and other accounts of the BKT transition, including materials related to the Nobel Prize in Physics 2016, to get a flavour of the physics and mathematics involved. Part (b) of this question was adapted largely from the discussion here.

6(a)

$$
Q = 2 \pi n , n = 0 , \pm 1 , \pm 2 , \ldots
$$

The basic idea is that the angle must turn through an integer multiple of $2 \pi$ when it goes back to the starting point. Some forgot to mention that $n = 0$ was allowed.

6(b)(i)

$$
\vec { f } = \frac { - y } { x ^ { 2 } + y ^ { 2 } } \hat { x } + \frac { x } { x ^ { 2 } + y ^ { 2 } } \hat { y }
$$

Apologies for the technical flaw in the question, the inverse tangent is not quite the correct description in all quadrants.
This function $\vec { f }$ is actually known as the gradient of $\theta$ in the language of vector calculus, but you did not need to know this to do this question.

Note also that $x$ and $y$ are coordinate variables and so things like $d y / d x$ are zero.
6(b)(ii)

$$
Q = + 2 \pi
$$

Apologies for those who tried to get the answer from integration, who probably got zero due to the technical flaw. This was meant to be answered visually from the pattern.

6(b)(iii) Note that any constant-angle shift in all spins would keep $Q$ unchanged. Examples of accepted answers would be if all spins are flipped, or if the spins are each rotated by $\pi / 2$ such that they form a visual vortex field circulating either clockwise or anti-clockwise.

6(b)(iv)

$$
E = J \pi \ln L
$$

The $| \vec { f } | ^ { 2 }$ term is basically $1 / r ^ { 2 }$ in polar coordinates, so we can approximate the square lattice by a circle of radius roughly $L$ and do the integration in polar coordinates. The lower limit of the radius has to be closer to 1 rather than 0, since the lattice spacing is finite (and not zero).

6(b)(v)

$$
S = k _ { B } \ln \Omega = 2 k _ { B } \ln L
$$

The idea is that the "vortex centre" can occupy roughly $\Omega = L ^ { 2 }$ positions because that is the number of lattice sites. This is what allows us to crudely estimate the "entropy" associated with having a single vortex on the lattice.

6(b)(vi)

$$
T _ { C } = \frac { J \pi } { 2 k _ { B } }
$$

The idea is that when the lattice size is large, the $\ln L$ term is large. Thus the free energy will flip suddenly from negative infinity to positive infinity when the temperature $T$ increases from slightly below $T _ { C }$ to slightly above $T _ { C }$. This critical temperature $T _ { C }$ marks the transition point between a system with no vortex and a system with a vortex.
