---
id: solution-ocr-kevin-zhou-m4sol-p026
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p026]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 26. A block of mass $M$ and velocity $v _ { 0 }$ to the right approaches a stationary puck of mass $m \ll M$. There is a wall a distance $L$ to the right of the puck.

(a) Assuming all collisions are elastic, find the minimum distance between the block and the wall by explicitly analyzing each collision. (Note that it does not suffice to just use the adiabatic theorem, because it applies to slow change, while the collisions are sharp. Nonetheless, you should find a quantity that is approximately conserved after many collisions have occurred.)
(b) Approximately how many collisions occur before the block reaches this minimum distance?
(c) The adiabatic index $\gamma$ is defined so that $P V ^ { \gamma }$ is conserved during an adiabatic process. In one dimension, the volume $V$ is simply the length, and $P$ is the average force. Using the adiabatic theorem, infer the value of $\gamma$ for a one-dimensional monatomic gas.

Solution. (a) Let the speeds of the block and puck be $v$ and $w$. Every collision, $w$ increases by $2 v$. If the block is a distance $x$ from the wall, then a collision happens in time $2 x / w$. Therefore, we have

$$
\frac { \Delta w } { \Delta x } = \frac { 2 v } { - 2 x v / w } = - \frac { w } { x } .
$$

Because $m \ll M$, many collisions happen. After many collisions have happened, $w$ will be very large, so in the next collision, $\Delta x$ will be small compared to $x$, and $\Delta w$ will be small compared to $w$. In this case, we can approximate the finite differences with a derivative, giving

$$
\frac { d w } { d x } \approx - \frac { w } { x } .
$$


Separating and integrating shows that $w x$ is conserved. We could also have arrived at this by the adiabatic theorem,

$$
I = \oint p d x = m w ( 2 x ) \propto w x
$$

However, in the earlier collisions $( \Delta w ) / w$ and $( \Delta x ) / x$ aren't small, so this reasoning is invalid. For instance, $w x$ is zero before the first collision and nonzero right after it. Thus, we must treat the first few collisions manually. Right before the second collision, we have

$$
w \approx 2 v _ { 0 } , \quad x \approx L / 3
$$

by one-dimensional kinematics. Right before the third collision we have

$$
w \approx 4 v _ { 0 } , \quad x \approx L / 5
$$

where for these early few collisions we are treating $v$ as constant since $m \ll M$. It is not hard to show that right before collision $n + 1$, we have $w \approx 2 n v _ { 0 }$ and $x \approx L / ( 2 n + 1 )$, which means that after many (but not too many collisions) we have $w x \approx L v _ { 0 }$. Then, for future collisions, $w x$ stays at this value.

The block turns around when the puck has all its energy, so

$$
\frac { 1 } { 2 } M v _ { 0 } ^ { 2 } = \frac { 1 } { 2 } m w ^ { 2 } .
$$

Plugging in $w x = L v _ { 0 }$ and solving for $x$ gives the solution, $x = L \sqrt { m / M }$.

(b) At each collision we have $\Delta w = 2 v$, and energy conservation gives
$$
v ^ { 2 } + \frac { m } { M } w ^ { 2 } = v _ { 0 } ^ { 2 } .
$$
Therefore, the number of collisions is approximately
$$
n \approx \int _ { 0 } ^ { v _ { 0 } \sqrt { M / m } } \frac { d w } { 2 v } = \frac { 1 } { 2 } \int _ { 0 } ^ { v _ { 0 } \sqrt { M / m } } \frac { d w } { \sqrt { v _ { 0 } ^ { 2 } - ( m / M ) w ^ { 2 } } } = \frac { 1 } { 2 } \sqrt { \frac { M } { m } } \int _ { 0 } ^ { 1 } \frac { d x } { \sqrt { 1 - x ^ { 2 } } } = \frac { \pi } { 4 } \sqrt { \frac { M } { m } } .
$$
Note that we didn't need to separate out the first few collisions here, even though the approximation as an integral technically doesn't work, because they're just that not important for calculating the total number of collisions, which is large. The appearance of $\pi$ in this result has a nice geometric interpretation, as explained here.
(c) The analogue of pressure in one dimension is just force. The average force exerted by the puck, which we now think of as a gas molecule, is
$$
F = \frac { \Delta p } { \Delta t } = \frac { 2 m w } { 2 x / w } = \frac { m w ^ { 2 } } { x } .
$$
Meanwhile, the analogue of volume is one dimension is simply $x$. Then the conservation of $w x$ says that $F x ^ { 3 }$ is conserved, which means $\gamma = 3$. This is exactly what we would expect for a one-dimensional gas, where $C _ { v } = k _ { B } / 2$ and $C _ { p } = 3 k _ { B } / 2$.
