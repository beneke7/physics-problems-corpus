---
id: solution-ocr-kevin-zhou-m7sol-p003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-p003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 3. Consider a pair of scales with identical vessels in which there are equal quantities of water.
![](../../../figures/solution-ocr/05602b06540a018ead2f2e34.jpg)
In the left-hand vessel you suspend a very light ping-pong ball on a thin, light wire attached to the base of the vessel. In the right-hand vessel you suspend a ping-pong ball filled with lead, again by a light thin wire. Do the scales stay level, go down on the left, or go down on the right?
Solution. The ball on the right experiences an upward buoyant force, so it exerts a downward force on the water. As for the ball on the left, it has no effect whatsoever on the force on the scale, because this force is simply equal to the weight of all the water. So the scales go down on the right.

This is an incredibly classic problem; it appeared on the first-ever physics Olympiad, held in Moscow in 1939.

[2] Problem 4 (BAUPC). Two trapezoidal containers, connected by a tube as shown, hold water.
![](../../../figures/solution-ocr/5b62834c46f6fc26f8434ba2.jpg)
Assume the containers do not undergo thermal expansion.
    (a) If the water in container A is heated, causing it to expand, will water flow through the tube? If so, in which direction?
    (b) What if the water in container B is heated instead?

Solution. (a) The pressure at the bottom of each container is $P = \rho g h = m g h / V$, where $h$ is the height of the water level above the bottom, and $V$ and $m$ are the volume and mass of water in the container. When the water in container A is heated, $m$ stays the same, while $V / h$ increases because the container gets wider. Thus, the pressure at the bottom of container A will decrease, and water will flow from B to A.


(b) In this case, $V / h$ decreases in container B because the container gets narrower. Then the pressure at the bottom of container B will increase, so water will flow from B to A again. As a cross-check, we can consider what happens when all the water is heated. Then $\rho$ is the same everywhere, and all that matters is the relative heights. Due to the shapes of the containers, the final water height in container B is higher, so water flows from B to A, as expected.
[2] Problem 5 (MPPP 85). A solid cube of volume $V _ { i }$ and density $\rho _ { i }$ is fastened to one end of a cord, the other end of which is attached to a light bucket containing water, of density $\rho _ { w } = \rho _ { i } / 10$.
![](../../../figures/solution-ocr/0d4a2159ba22a8bcdad860c8.jpg)
The system is in equilibrium.
    (a) Find the volume $V _ { w }$ of the water in the bucket.
    (b) What would happen if more water were poured into the bucket?
    (c) What would happen if some or all of the water evaporated?

Solution. (a) There is a buoyant force of $\rho _ { w } V _ { i }$ on the block, which pushes the block up and the bucket down. In equilibrium, the tension in the cord $T$ must balance against the weight of the block and the buoyant force: $T = \left( \rho _ { i } V _ { i } - \rho _ { w } V _ { i } \right) g$. Similarly for the water/bucket, $T = \left( \rho _ { w } V _ { w } + \rho _ { w } V _ { i } \right) g$. Equating the two gets

$$
\rho _ { w } V _ { w } = \rho _ { i } V _ { i } - 2 \rho _ { w } V _ { i }
$$

which implies $V _ { w } = 8 V _ { i }$.

(b) The effective weight on the left side won't change, but the bucket will be heavier. If the final volume of water $V _ { f }$ is less than $10 V _ { i }$, where $V _ { f } = 10 V _ { i }$ is when the system will be in equilibrium if the block is out of the water, then the system will be in equilibrium at some point with the block partially submerged. Once $V _ { f } > 10 V _ { i }$, the bucket will just keep falling.
(c) The cube will fall until it hits the bottom of the bucket (the amount of evaporation doesn't matter), and then the system will be stuck there since the cube can't pass through the bucket.
