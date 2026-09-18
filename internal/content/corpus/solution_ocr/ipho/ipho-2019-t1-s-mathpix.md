---
id: solution-ocr-ipho-2019-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2019/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2019-t1]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Zero-length springs and slinky coils - Solution

## Part A: Statics

A. 1 The force $F$ causes the spring to change its length from $L _ { 0 }$ to $L$. Since equal parts of the spring are extended to equal lengths, we get: $\frac { \Delta y } { \Delta l } = \frac { L } { L _ { 0 } } \rightarrow \Delta y = \frac { L } { L _ { 0 } } \Delta l$.

Since $L = \max \left\{ \frac { F } { k } , L _ { 0 } \right\}$, we get $\Delta y = \max \left\{ \frac { F } { k L _ { 0 } } \Delta l , \Delta l \right\}$. From this result we see that any piece of length $\Delta l$ the spring behaves as a ZLS with spring constant $k ^ { * } = k \frac { L _ { 0 } } { \Delta l }$.
A. 2 Let us compute the work of the force. From Task A.1: $d W = F ( x ) d x = \frac { k L _ { 0 } } { \Delta l } x d x$.

Hence, $\Delta W = \int _ { \Delta l } ^ { \Delta y } \frac { k L _ { 0 } } { \Delta l } x d x = \left. \frac { k L _ { 0 } } { \Delta l } \frac { x ^ { 2 } } { 2 } \right| _ { \Delta l } ^ { \Delta y } = \frac { k L _ { 0 } } { 2 \Delta l } \left( \Delta y ^ { 2 } - \Delta l ^ { 2 } \right)$.
A.3. At every point along the statically hanging spring the weight of the mass below is balanced by the tension from above. This implies that at the bottom of the spring there is a section of length $l _ { 0 }$ whose turns are still touching each other, as their weight is insufficient to exceed the threshold force $k L _ { 0 }$ to pull them apart. The length $l _ { 0 }$ can be derived from the equation:
$\frac { l _ { 0 } } { L _ { 0 } } M g = k L _ { 0 }$, hence $l _ { 0 } = \frac { k L _ { 0 } ^ { 2 } } { M g } = \alpha L _ { 0 }$.

For $l > l _ { 0 }$, a segment of the unstretched spring between $l$ and $l + \mathrm { d } l$ feels a weight of $\frac { l } { L _ { 0 } } M g$ from beneath, which causes its length to stretch from $\mathrm { d } l$ to $d y = \frac { F } { k L _ { 0 } } d l = \frac { l } { L _ { 0 } } M g \frac { d l } { k L _ { 0 } } =$ $\frac { M g } { k L _ { 0 } ^ { 2 } } l d l = \frac { l } { l _ { 0 } } d l$.

Integration of the last expression over the stretched region, up to the point $L _ { 0 }$, gives its height when the spring is stretched

$$
H = l _ { 0 } + \int _ { l _ { 0 } } ^ { L _ { 0 } } \frac { l } { l _ { 0 } } d l = l _ { 0 } + \left. \frac { l ^ { 2 } } { 2 l _ { 0 } } \right| _ { l _ { 0 } } ^ { L _ { 0 } } = l _ { 0 } + \frac { 1 } { 2 l _ { 0 } } \left( L _ { 0 } ^ { 2 } - l _ { 0 } ^ { 2 } \right) = \frac { L _ { 0 } ^ { 2 } } { 2 l _ { 0 } } + \frac { l _ { 0 } } { 2 } = \frac { L _ { 0 } } { 2 } \left( \alpha + \frac { 1 } { \alpha } \right)
$$


## Part B: Dynamics

B.1. From Task A. 3 we have $H ( l ) = \frac { l ^ { 2 } } { 2 l _ { 0 } } + \frac { l _ { 0 } } { 2 }$. We now calculate the position of the center of mass of the suspended spring. The contribution of the unstretched section of height $l _ { 0 }$ at the bottom, having a mass of $\frac { l _ { 0 } } { L _ { 0 } } M = \alpha M$, is $\alpha M \frac { l _ { 0 } } { 2 }$. The position of the center of mass is obtained by summing the contributions of its elements:

$$
\begin{aligned}
& H _ { c m } = \frac { 1 } { M } \left[ \frac { l _ { 0 } } { 2 } \alpha M + \int _ { l _ { 0 } } ^ { L _ { 0 } } H ( l ) d m \right] = \frac { 1 } { M } \left[ \frac { \alpha L _ { 0 } } { 2 } \alpha M + \int _ { l _ { 0 } } ^ { L _ { 0 } } \left( \frac { l ^ { 2 } } { 2 l _ { 0 } } + \frac { l _ { 0 } } { 2 } \right) \frac { M d l } { L _ { 0 } } \right] \\
& \quad = \frac { \alpha ^ { 2 } L _ { 0 } } { 2 } + \frac { 1 } { L _ { 0 } } \left[ \frac { l ^ { 3 } } { 6 l _ { 0 } } + \frac { l _ { 0 } } { 2 } l \right] _ { l _ { 0 } } ^ { L _ { 0 } } = \frac { \alpha ^ { 2 } L _ { 0 } } { 2 } + \frac { 1 } { L _ { 0 } } \left[ \frac { L _ { 0 } ^ { 3 } - l _ { 0 } ^ { 3 } } { 6 l _ { 0 } } + \frac { l _ { 0 } } { 2 } \left( L _ { 0 } - l _ { 0 } \right) \right]
\end{aligned}
$$

Where we have used $d m = \frac { d l } { L _ { 0 } } M$. Substituting $l _ { 0 } = \alpha L _ { 0 }$ yields

$$
H _ { c m } = L _ { 0 } \left[ \frac { 1 } { 6 \alpha } - \frac { \alpha ^ { 2 } } { 6 } + \frac { \alpha } { 2 } \right]
$$

When the spring is contracted to its free length $L _ { 0 }$, its center of mass is located at $\frac { L _ { 0 } } { 2 }$. From the falling of the center of mass at acceleration $g$ we get:

$$
\frac { g } { 2 } t _ { c } ^ { 2 } = H _ { c m } - \frac { L _ { 0 } } { 2 } = L _ { 0 } \left[ \frac { 1 } { 6 \alpha } - \frac { \alpha ^ { 2 } } { 6 } + \frac { \alpha } { 2 } - \frac { 1 } { 2 } \right] = \frac { L _ { 0 } } { 6 \alpha } ( 1 - \alpha ) ^ { 3 }
$$

Hence, $t _ { c } = \sqrt { \frac { L _ { 0 } } { 3 g \alpha } ( 1 - \alpha ) ^ { 3 } }$.

For $k = 1.02 \mathrm {~N} / \mathrm { m } , L _ { 0 } = 0.055 \mathrm {~m} , M = 0.201 \mathrm {~kg}$, and $g = 9.80 \mathrm {~m} / \mathrm { s } ^ { 2 }$, we have $\alpha = 0.0285$, and $t _ { c } = 0.245 \mathrm {~s}$.
B.2. The moving top section of the spring is pulled down by its own weight, $m _ { \text {top } } g = M g \frac { \left( L _ { 0 } - l \right) } { L _ { 0 } }$ and also by the tension in the spring below, which is equal to the weight $M g l / L _ { 0 }$ of the stationary section of the spring. Thus, the moving top section experiences a constant force $F =$ $M g$ throughout its whole fall. Another way to see that, is that a total force of $M g$ is exerted on the spring, but only the moving part experiences it. Let's calculate the position of the center of mass at equilibrium of the upper part, i.e., all points with $l ^ { \prime } > l$ for some $l > l _ { 0 }$. From part A,


the position of a small portion $\Delta l ^ { \prime }$ with coordinate $l ^ { \prime }$ is: $H \left( l ^ { \prime } \right) = \frac { l ^ { \prime 2 } } { 2 l _ { 0 } } + \frac { l _ { 0 } } { 2 }$ and the center of mass of this part is:

$$
\begin{aligned}
H _ { c m - u p p e r - i } & = \frac { L _ { 0 } } { M \left( L _ { 0 } - l \right) } \int _ { l } ^ { L _ { 0 } } H \left( l ^ { \prime } \right) d m = \frac { L _ { 0 } } { M \left( L _ { 0 } - l \right) } \int _ { l } ^ { L _ { 0 } } \left( \frac { l ^ { \prime 2 } } { 2 l _ { 0 } } + \frac { l _ { 0 } } { 2 } \right) d m \\
& = \frac { L _ { 0 } } { M \left( L _ { 0 } - l \right) } \int _ { l } ^ { L _ { 0 } } \left( \frac { l ^ { \prime 2 } } { 2 l _ { 0 } } + \frac { l _ { 0 } } { 2 } \right) \frac { M d l ^ { \prime } } { L _ { 0 } } = \frac { 1 } { \left( L _ { 0 } - l \right) } \int _ { l } ^ { L _ { 0 } } \left( \frac { l ^ { \prime 2 } } { 2 l _ { 0 } } + \frac { l _ { 0 } } { 2 } \right) d l ^ { \prime } \\
& = \frac { 1 } { \left( L _ { 0 } - l \right) } \left[ \frac { l ^ { \prime 3 } } { 6 l _ { 0 } } + \frac { l _ { 0 } l ^ { \prime } } { 2 } \right] _ { l } ^ { L _ { 0 } 0 } = \frac { L _ { 0 } ^ { 2 } + L _ { 0 } l + l ^ { 2 } } { 6 l _ { 0 } } + \frac { l _ { 0 } } { 2 }
\end{aligned}
$$

The position of the upper part of CM when it contracts to a length $L _ { 0 } - l$ is $H _ { \text {cm-upper-f } } =$ $\frac { l ^ { 2 } } { 2 l _ { 0 } } + \frac { l _ { 0 } } { 2 } + \frac { 1 } { 2 } \left( L _ { 0 } - l \right)$. The change in the CM during the contraction process is: $\Delta H _ { \text {cm-upper } } =$ $H _ { c m - \text { upper } - i } - H _ { c m - \text { upper } - f } = \frac { L _ { 0 } ^ { 2 } + L _ { 0 } l - 2 l ^ { 2 } } { 6 l _ { 0 } } - \frac { 1 } { 2 } \left( L _ { 0 } - l \right) = \frac { \left( L _ { 0 } - l \right) \left( L _ { 0 } + 2 l \right) } { 6 l _ { 0 } } - \frac { 1 } { 2 } \left( L _ { 0 } - l \right)$.
The acceleration of the CM of the upper part is $a _ { C M } = \frac { F L _ { 0 } } { M \left( L _ { 0 } - l \right) } = \frac { g L _ { 0 } } { L _ { 0 } - l }$.
From the work energy theorem we get the equation $v _ { \text {upper-f } } ^ { 2 } = 2 a _ { C M } \Delta H _ { c m - \text { upper } }$, hence

$$
\begin{gathered}
v _ { \text {upper } - f } ^ { 2 } = 2 \frac { g L _ { 0 } } { L _ { 0 } - l } \left[ \frac { \left( L _ { 0 } - l \right) \left( L _ { 0 } + 2 l \right) } { 6 \alpha L _ { 0 } } - \frac { 1 } { 2 } \left( L _ { 0 } - l \right) \right] = 2 g \left[ \frac { L _ { 0 } + 2 l } { 6 \alpha } - \frac { 1 } { 2 } L _ { 0 } \right] \\
= \frac { 2 g } { 3 \alpha } l + \left( \frac { 1 } { 3 \alpha } - 1 \right) g L _ { 0 }
\end{gathered}
$$

Therefore, $A = \frac { 2 g } { 3 \alpha }$ and $B = \left( \frac { 1 } { 3 \alpha } - 1 \right) g L _ { 0 }$.
Note that for $l = L _ { 0 }$, we have $v _ { u p p e r - f } ^ { 2 } = L _ { 0 } g \frac { 1 - \alpha } { \alpha }$ and for $l = l _ { 0 } = \alpha L _ { 0 }$, we get $v _ { u p p e r - f } ^ { 2 } =$ $L _ { 0 } g \frac { 1 - \alpha } { 3 \alpha }$, hence, the moment we release the spring its velocity is finite (not zero, the meaning is that it accumulate this velocity in time that is much shorter than the contracting time $t _ { c }$ ) and it decreases to $\frac { 1 } { \sqrt { 3 } }$ of the initial value when $l = l _ { 0 }$.
B.3. Note that even though the center of mass of the spring accelerates downwards constantly, the moving top section actually decelerates, while the position of the center of mass moves down the spring. The speed of the top section $v ( l )$, calculated in Task B2, decreases and


approaches the value $\sqrt { A \alpha L _ { 0 } + B }$ immediately before it attaches to the bottom section of height $l _ { 0 } = \alpha L _ { 0 }$, which was unstretched and at rest. Once the moving top section attaches to the resting bottom section, its momentum is shared between both sections, so the speed further decreases just before the whole spring starts accelerating downwards as a single mass. Thus, the minimum speed is that of the whole spring immediately after its full collapse. From momentum conservation, we have

$$
\begin{gathered}
M v _ { \min } = m _ { t o p } v \left( l _ { 0 } \right) = M \left( 1 - \frac { l _ { 0 } } { L _ { 0 } } \right) \sqrt { A \alpha L _ { 0 } + B } \\
v _ { \min } = ( 1 - \alpha ) \sqrt { A \alpha L _ { 0 } + B }
\end{gathered}
$$

## Part C: Energetics

C.1. From the moment the spring is released, the acceleration of its center of mass is governed by the external force $M g$ and therefore the gravitational potential energy of the spring is fully converted into the kinetic energy of the center of mass of the spring, which just before hitting the ground is equal to the kinetic energy of the spring.

All that is left is the elastic energy stored in the spring, which is converted into heat, sound, etc. To calculate it, we consider the elastic energy stored in a segment $d h$ of the stretched spring, which when unstretched lies between $l$ and $l + \mathrm { d } l$, using the result of Task A.2, $\Delta W =$ $\frac { k L _ { 0 } } { 2 \Delta l } \left( \Delta l _ { 2 } ^ { 2 } - \Delta l ^ { 2 } \right)$, by choosing $\Delta l = d l$ and $\Delta l _ { 2 } = d y$, and using $d y = \frac { l } { l _ { 0 } } d l$ (which was obtained in Task A.3), we get:
$d W = \frac { k L _ { 0 } } { 2 } \left( \frac { l ^ { 2 } } { l _ { 0 } ^ { 2 } } - 1 \right) d l$. Integrating from $l _ { 0 }$ to $L _ { 0 }$ we find

$$
\begin{gathered}
W = \int _ { l _ { 0 } } ^ { L _ { 0 } } \frac { k L _ { 0 } } { 2 } \left( \frac { l ^ { 2 } } { l _ { 0 } ^ { 2 } } - 1 \right) d l = \frac { k L _ { 0 } } { 2 } \left[ \frac { l ^ { 3 } } { 3 l _ { 0 } ^ { 2 } } - l \right] _ { l _ { 0 } } ^ { L _ { 0 } } = \frac { k L _ { 0 } } { 2 } \left( \frac { L _ { 0 } ^ { 3 } - l _ { 0 } ^ { 3 } } { 3 l _ { 0 } ^ { 2 } } - \left( L _ { 0 } - l _ { 0 } \right) \right) \\
= \frac { k L _ { 0 } ^ { 2 } } { 2 } \left( \frac { 1 - \alpha ^ { 3 } } { 3 \alpha ^ { 2 } } - ( 1 - \alpha ) \right) = \frac { k L _ { 0 } ^ { 2 } } { 6 \alpha ^ { 2 } } ( 1 - \alpha ) ^ { 2 } ( 2 \alpha + 1 ) \\
= M g L _ { 0 } \frac { ( 1 - \alpha ) ^ { 2 } ( 2 \alpha + 1 ) } { 6 \alpha }
\end{gathered}
$$
