---
id: solution-ocr-usapho-2025-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2025-qb1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem B1: Scroll 'n' Roll

Consider a disk with mass $m$ and radius $R$ placed on a large and frictionless table. An ant with mass $m$ is placed on top of the disk. The ant can move freely without sliding on the disk.

a. Initially, the ant starts on the edge of the disk, and both the ant and the disk are at rest (relative to the table). Then, the ant starts walking across the disk's diameter, such that in the frame of the disk, the ant has (constant) velocity $v$. What is ant's velocity in the frame of the table?

## Solution

By conservation of momentum,

$$
\begin{align*}
m v _ { d } & = m \left( v - v _ { d } \right)  \tag{0-1}\\
v _ { d } & = \frac { v } { 2 } \tag{0-2}
\end{align*}
$$

The ant's velocity is $v - v _ { d } = v / 2$.

b. Suppose instead that the ant walks counterclockwise along the edge of the disk at constant speed $v$ in the frame of the disk. What is the ant's speed in the frame of the table?

## Solution

For the solution, we're considering the disk to be the unit disk, and the ant to be positioned at $( x = 1 , y = 0 )$ crawling counterclockwise (which is also the $+ y$ direction).
We can decompose the movement of the disk into a rotation about the (fixed) disk-ant center of mass, and a rotation about its own center. Write $\omega _ { c m }$ for the angular velocity of the disk about the combined center of mass, and $\omega _ { d }$ for the angular velocity of the disk about its center.

Letting $v ^ { \prime }$ be the ant's speed in the table's reference frame, we find

$$
\begin{equation*}
v ^ { \prime } = v + \omega _ { c m } \frac { R } { 2 } + \omega _ { d } R \tag{0-3}
\end{equation*}
$$

Conservation of linear momentum and conservation of angular momentum give

$$
\begin{align*}
m v ^ { \prime } - m \omega _ { c m } \frac { R } { 2 } & = 0  \tag{0-4}\\
v ^ { \prime } m \frac { R } { 2 } + \omega _ { d } I _ { d } + \omega _ { c m } I _ { c m } & = 0 \tag{0-5}
\end{align*}
$$

where $I _ { d }$ is the moment of inertia of the disk about its own center of mass, and $I _ { c m }$ is the moment of inertia of the disk about the combined center of mass. By the parallel axis


theorem,

$$
\begin{align*}
I _ { 1 } & = \frac { 1 } { 2 } m R ^ { 2 }  \tag{0-6}\\
I _ { 2 } & = \frac { 3 } { 4 } m R ^ { 2 } \tag{0-7}
\end{align*}
$$

Solving everything, we find

$$
\begin{align*}
& \omega _ { d } = - \frac { v } { R }  \tag{0-8}\\
\omega _ { c m } = \frac { v } { 2 R } & \tag{0-9}
\end{align*}
$$

and therefore

$$
v ^ { \prime } = \frac { R } { 4 } .
$$

c. Now there are two ants on the disk! The second ant (also of mass $m$ ) starts at distance $R / 2$ from the center of the disk, with an angle offset by $\theta$ from the first ant. The second ant walks counterclockwise around this circle with radius $R / 2$ at speed $v / 2$ (relative to the disk). Find all $\theta$ such that the second ant is stationary in the frame of the table.
![](../../../figures/solution-ocr/00e551f4bf4b0290657981e4.jpg)

## Solution

First, if $\theta = 0$, the second ant is starting out at the center of mass; we claim this means that he doesn't affect the movement of the system. Since the disk is rotating at $\omega _ { d } = - v / R$ about its center, the original position of the ant would be moving at velocity $- v / 2$ relative to the center of the disk; hence, by moving at $v / 2$ relative to the center of the disk, the ant manages exactly to stay in place.
Now suppose there is some other such angle $\theta$. Consider the triangle formed by the two ants and the center of the circle. The description of the ants' movement ensures that this triangle moves as a rigid body (the relative positions of the ants and the center of the disk remain fixed). The center of mass of the system, which is at the center of this triangle, is fixed in the reference plane of the table. If we were to also fix the second-ant vertex in place,


the system simply wouldn't be able to move. The only way out is to make the "center of the triangle" and the "vertex" coincide, by placing the second ant at the center of mass.
