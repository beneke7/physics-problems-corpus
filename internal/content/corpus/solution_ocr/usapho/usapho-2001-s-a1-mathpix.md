---
id: solution-ocr-usapho-2001-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2001_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2001-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
A1. Each ball starts at rest and falls through a height $H$ to its lowest point, which we will take as the zero of gravitational potential energy. Applying energy conservation, each ball reaches its lowest point with velocity

$$
v _ { d } = \sqrt { 2 g H } .
$$

The large ball collides elastically with the floor and the direction of its velocity reverses. Moving upward, $M$ collides elastically with $m$ moving downward. Letting $v$ be the speed of $m$ and $V$ be the speed of $M$ after the collision and taking down to be negative and up positive, momentum conservation yields

$$
M v _ { d } - m v _ { d } = m v + M V .
$$

Solving for $V$

$$
V = \frac { \left( M v _ { d } - m v _ { d } - m v \right) } { M } = v _ { d } - \frac { m } { M } \left( v _ { d } + v \right)
$$

Energy conservation yields: $\quad \frac { 1 } { 2 } M v _ { d } { } ^ { 2 } + \frac { 1 } { 2 } m v _ { d } { } ^ { 2 } = \frac { 1 } { 2 } M V ^ { 2 } + \frac { 1 } { 2 } m v ^ { 2 }$. Inserting $V$ from the momentum equation,

$$
\begin{gathered}
\frac { 1 } { 2 } M v _ { d } ^ { 2 } + \frac { 1 } { 2 } m v _ { d } ^ { 2 } = \frac { 1 } { 2 } M \left( v _ { d } - \frac { m } { M } \left( v _ { d } + v \right) \right) ^ { 2 } + \frac { 1 } { 2 } m v ^ { 2 } \\
\frac { 1 } { 2 } M v _ { d } ^ { 2 } + \frac { 1 } { 2 } m v _ { d } ^ { 2 } = \frac { 1 } { 2 } M v _ { d } ^ { 2 } - \frac { 1 } { 2 } M 2 v _ { d } \frac { m } { M } \left( v _ { d } + v \right) + \frac { 1 } { 2 } M \frac { m ^ { 2 } } { M ^ { 2 } } \left( v _ { d } ^ { 2 } + 2 v _ { d } v + v ^ { 2 } \right) + \frac { 1 } { 2 } m v ^ { 2 } \\
\frac { 1 } { 2 } m v _ { d } ^ { 2 } = - \frac { 1 } { 2 } 2 v _ { d } m \left( v _ { d } + v \right) + \frac { 1 } { 2 } \frac { m ^ { 2 } } { M } \left( v _ { d } ^ { 2 } + 2 v _ { d } v + v ^ { 2 } \right) + \frac { 1 } { 2 } m v ^ { 2 } .
\end{gathered}
$$

Multiplying by $2 \mathrm { M } / \mathrm { m }$

$$
M v _ { d } { } ^ { 2 } = - 2 v _ { d } M \left( v _ { d } + v \right) + m \left( v _ { d } { } ^ { 2 } + 2 v _ { d } v + v ^ { 2 } \right) + M v ^ { 2 }
$$

Regrouping terms

$$
0 = ( m + M ) v ^ { 2 } - 2 v v _ { d } ( M - m ) + ( m - 3 M ) v _ { d } ^ { 2 } .
$$

Solving the quadratic equation for $v$ yields

$$
v = \left( \frac { M - m \pm 2 M } { M + m } \right) v _ { d } = \left( \frac { M - m \pm 2 M } { M + m } \right) \sqrt { 2 g H } .
$$

Since we want m moving upward (positive velocity), we select the plus sign.

$$
v = \left( \frac { 3 M - m } { M + m } \right) \sqrt { 2 g H }
$$

Let $h$ equal the maximum height of the small ball above its lowest position. At $m$ 's highest point its kinetic energy is zero and


$$
m g h = \frac { 1 } { 2 } m v ^ { 2 } = \frac { 1 } { 2 } m \left( \left( \frac { 3 M - m } { M + m } \right) \sqrt { 2 g H } \right) ^ { 2 } = m g H \left( \frac { 9 M ^ { 2 } - 6 M m + m ^ { 2 } } { M ^ { 2 } + 2 M m + m ^ { 2 } } \right)
$$

The ball's height above its initial position is $\Delta h = h - H$.

$$
\begin{gathered}
\Delta h = H \left( \frac { 9 M ^ { 2 } - 6 M m + m ^ { 2 } } { M ^ { 2 } + 2 M m + m ^ { 2 } } \right) - H = H \left( \frac { 9 M ^ { 2 } - 6 M m + m ^ { 2 } - M ^ { 2 } - 2 M m - m ^ { 2 } } { M ^ { 2 } + 2 M m + m ^ { 2 } } \right) \\
\Delta h = H \left( \frac { 8 M ^ { 2 } - 8 M m } { M ^ { 2 } + 2 M m + m ^ { 2 } } \right) = H \frac { 8 M ( M - m ) } { ( M + m ) ^ { 2 } } = H \frac { 8 ( 1 - m / M ) } { ( 1 + m / M ) ^ { 2 } }
\end{gathered}
$$
