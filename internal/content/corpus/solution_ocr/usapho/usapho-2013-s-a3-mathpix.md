---
id: solution-ocr-usapho-2013-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2013-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A3
A beam of muons is maintained in a circular orbit by a uniform magnetic field. Neglect energy loss due to electromagnetic radiation.

The mass of the muon is $1.88 \times 10 ^ { - 28 } \mathrm {~kg}$, its charge is $- 1.602 \times 10 ^ { - 19 } \mathrm { C }$, and its half-life is $1.523 \mu \mathrm {~s}$.

a. The speed of the muons is much less than the speed of light. It is found that half of the muons decay during each full orbit. What is the magnitude of the magnetic field?
b. The experiment is repeated with the same magnetic field, but the speed of the muons is increased; it is no longer much less than the speed of light. Does the fraction of muons which decay during each full orbit increase, decrease, or stay the same?
The following facts about special relativity may be useful:
    - The Lorentz factor for a particle moving at speed $v$ is
$$
\gamma = \frac { 1 } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } }
$$
    - The Lorentz factor gives the magnitude of time dilation; that is, a clock moving at speed $v$ in a given reference frame runs slow by a factor $\gamma$ in that frame.
    - The momentum of a particle is given by
$$
\vec { p } = \gamma m \vec { v }
$$
where $m$ does not depend on $v$.
    - The Lorentz force law in the form
$$
\frac { d \vec { p } } { d t } = q ( \vec { E } + \vec { v } \times \vec { B } )
$$
continues to hold.

## Solution

a. The muons perform uniform circular motion, so we have
$$
a = \frac { v ^ { 2 } } { r } , \quad 2 \pi r = v T
$$
where $T$ is the period of motion. Solving for $T$ gives
$$
T = \frac { 2 \pi v } { a } .
$$
Newton's second law is
$$
\frac { d \mathbf { p } } { d t } = q \mathbf { v } \times \mathbf { B } = m \mathbf { a }
$$
and taking magnitudes gives $a = q v B / m$. Then
$$
T = \frac { 2 \pi m } { q B } \Rightarrow B = \frac { 2 \pi m } { q T _ { 1 / 2 } } = 4.85 \mathrm { mT }
$$
where we used $T = T _ { 1 / 2 }$, the half-life of the muon.

b. The first two lines above still hold, since they follow from ordinary geometry. Since the speed is constant, $\gamma$ is constant, and Newton's second law is now
$$
\frac { d \mathbf { p } } { d t } = q \mathbf { v } \times \mathbf { B } = \gamma m \mathbf { a }
$$
so taking magnitudes gives $a = q v B / \gamma m$. Then the period is a factor of $\gamma$ larger,
$$
T = \gamma \frac { 2 \pi m } { q B } = \gamma T _ { 1 / 2 }
$$
However, the muons experience time dilation, so in the lab frame, half of them decay in time $\gamma T _ { 1 / 2 }$. Then the same fraction of muons decays per orbit, i.e. one half.
