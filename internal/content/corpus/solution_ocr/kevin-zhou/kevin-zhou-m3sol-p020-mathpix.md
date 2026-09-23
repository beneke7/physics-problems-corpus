---
id: solution-ocr-kevin-zhou-m3sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
mapped_problems: [kevin-zhou-m3-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice for M3 Problem 20; the neighboring Problem 21 section is represented by 200ppp-P072."
---

[3] Problem 20. Here’s a variety problem involving some “clean” mathematical results. All three parts can be solved without lengthy calculation.

(a) Consider $n$ identical balls confined to a line. Assuming all collisions are perfectly elastic, what is the maximum number of collisions that could happen? Assume no triple collisions happen.

(b) A billiard ball hits an identical billiard ball initially at rest in a perfectly elastic collision. Show that the balls exit at a right angle to each other.

(c) A mass $M$ collides elastically with a stationary mass $m$. If $M > m$, show that the maximum possible angle of deflection of $M$ is $\sin^{-1}(m/M)$.

## Solution

(a) When two identical balls collide, they exchange velocities. We can instead imagine them passing through one another. The maximum occurs when each pair crosses once, giving $n(n-1)/2$ collisions.

(b) Let the initial velocity be $\mathbf{v}$ and the final velocities be $\mathbf{v}_1$ and $\mathbf{v}_2$. Momentum conservation gives $\mathbf{v}_1+\mathbf{v}_2=\mathbf{v}$, while energy conservation gives $v_1^2+v_2^2=v^2$. Squaring the momentum equation and comparing with energy conservation yields $\mathbf{v}_1\cdot\mathbf{v}_2=0$, so the outgoing velocities are perpendicular.

(c) In the center-of-mass frame, mass $M$ has speed $v'=mv/(M+m)$. Its possible final velocities lie on a circle of radius $v'$. In the lab frame, this circle is centered at the center-of-mass speed $v_c=Mv/(M+m)$. The largest deflection occurs when the final velocity is tangent to the circle, so $\sin\theta=v'/v_c=m/M$.
