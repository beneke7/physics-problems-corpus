---
id: solution-ocr-usapho-2017-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2017-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

Suppose a domino stands upright on a table. It has height $h$, thickness $t$, width $w$ (as shown below), and mass $m$. The domino is free to rotate about its edges, but will not slide across the table.
![](../../../figures/solution-ocr/6b37140f16c39ca6adbecf8d.jpg)
![](../../../figures/solution-ocr/e5318568731d18f0b3a9b6f2.jpg)

a. Suppose we give the domino a sharp, horizontal impulsive push with total momentum $p$.
    i. At what height $H$ above the table is the impulse $p$ required to topple the domino smallest?
    ii. What is the minimum value of $p$ to topple the domino?

## Solution

First we'll look for the height $H$ at which we should push to topple the domino with the least momentum. A convenient method is to look at the angular momentum in the domino because this is easy to calculate and describes rotational motion. Because the push is horizontal, the moment arm of the push (about the domino's rotational axis) is purely vertical. That means the angular momentum of the push is $p H$, where $p$ is the momentum imparted and $H$ is the height of the push. There is some minimum angular momentum $L _ { \text {min } }$ to topple the domino, so we set $L _ { \text {min } } = p H$. The bigger $H$, the smaller $p$, so we should choose the largest possible $H$. In other words, we should push at the very top of the domino, $H = h$. While we're on this part, note that if the push weren't constrained to be horizontal, the push could be a little bit smaller since the moment arm could be the entire diagonal of the thin edge of the domino.
Next we calculate the minimum $p$ using energy. As the domino rotates, it converts kinetic energy to potential energy, so we'll calculate both. The domino's potential energy is greatest when its center of mass is directly over the contact point of the domino and the table. That height is half the diagonal of the domino, so the distance from the contact point to the center of the domino is $\frac { 1 } { 2 } \sqrt { t ^ { 2 } + h ^ { 2 } }$. From the push until it reaches this point, the domino's potential energy increases by

$$
\Delta U = \frac { 1 } { 2 } m g \left( \sqrt { t ^ { 2 } + h ^ { 2 } } - h \right) .
$$

Then the domino topples. By conservation of energy, $\Delta U$ is how much rotational kinetic energy the domino must have begun with.
Next we find the kinetic energy using the rotational kinetic energy formula, $T = L ^ { 2 } / 2 I$. The moment of inertia of the domino about its contact point with the table is $I = \frac { 1 } { 3 } m \left( h ^ { 2 } + t ^ { 2 } \right)$.


You can find this with an integral, or if you know the moment of inertia about the center $\left( \frac { 1 } { 12 } m \left( h ^ { 2 } + t ^ { 2 } \right) \right)$, you can use the parallel axis theorem. We know the momentum $L = p h$, so the kinetic energy is

$$
T = \frac { 1 } { 2 } \frac { L ^ { 2 } } { I } = \frac { 1 } { 2 } \frac { ( p h ) ^ { 2 } } { ( 1 / 3 ) m \left( h ^ { 2 } + t ^ { 2 } \right) } = \frac { 3 } { 2 } \frac { p ^ { 2 } h ^ { 2 } } { m \left( h ^ { 2 } + t ^ { 2 } \right) } .
$$

Setting the initial kinetic energy equal to the gain in potential energy and solving for $p$,

$$
p _ { \min } = \frac { 1 } { \sqrt { 3 } } \frac { m } { h } \sqrt { g \left( \sqrt { t ^ { 2 } + h ^ { 2 } } - h \right) \left( h ^ { 2 } + t ^ { 2 } \right) } .
$$

b. Next, imagine a long row of dominoes with equal spacing $l$ between the nearest sides of any pair of adjacent dominos, as shown above. When a domino topples, it collides with the next domino in the row. Imagine this collision to be completely inelastic. What fraction of the total kinetic energy is lost in the collision of the first domino with the second domino?

## Solution

Right after the collision, the dominoes touch at a height $\sqrt { h ^ { 2 } - l ^ { 2 } }$ above the table. The second domino is vertical, while the first is rotated so that the angle between its leading edge and the table is $\theta = \arccos ( l / h )$. Let the dominoes' angular velocities be $\omega _ { 1 }$ and $\omega _ { 2 }$ respectively. After the dominoes collide, they stick together. If we take the two parts of the dominoes that are in contact, they must have the same horizontal velocity component in order for the dominoes to stay in contact. For the first domino, this velocity is $\omega _ { 1 } h \sin \theta = \omega _ { 1 } \sqrt { h ^ { 2 } - l ^ { 2 } }$. For the second domino it is $\omega _ { 2 }$ times the height of the impact point, so $\omega _ { 2 } \sqrt { h ^ { 2 } - l ^ { 2 } }$. Because these velocity components must be equal, $\omega _ { 1 } = \omega _ { 2 }$.

This means the dominoes have the same angular momentum as each other, measured relative to their respective rotation axes. If we look at the collision, the forces between the dominoes are purely horizontal because the dominoes' faces are frictionless, so they only exert normal forces. The second domino is vertical, so all its normal forces are purely horizontal. These horizontal normal forces exchange angular momentum between the two dominoes. They have the same moment arm (i.e. the height of the collision), so the amount of angular momentum transferred out of the first domino is equal to the amount gained by the second domino, both measured relative to the dominoes' respective rotation axes. Because the dominoes are identical and have the same angular velocity, they have the same angular momentum. This means each domino has half as much angular momentum about its rotation axis as the first domino had just before the collision. (Note that forces from the table cannot change the angular momentum of the dominoes about their respective rotational axes because such forces have zero moment arm, so only the inter-domino forces need to be examined here.)
Kinetic energy scales with the square of angular momentum, so each domino has a quarter as much kinetic energy after the collision as the first domino had before it. That means the total kinetic energy after the collision is half what it was before the collision. The fraction of kinetic energy lost is one half.


c. After the collision, the dominoes rotate in such a way so that they always remain in contact. Assume that there is no friction between the dominoes and the first domino was given the smallest possible push such that it toppled. What is the minimum $l$ such that the second domino will topple?
You may work to lowest nontrivial order in the angles through which the dominoes have rotated. Equivalently, you may approximate $t , l \ll h$.

## Solution

As in part (a), we will find the highest potential energy of the system and make sure the initial kinetic energy is high enough to get the system to that point.
At any time after the collision, let us call the angle that the first domino has rotated past its point of highest potential energy $\alpha$, and the angle that the second domino has rotated past its point of highest potential energy $\beta$. Also, let's call the angle a domino rotates from its standing position up to its point of highest potential energy $\phi$, so the dominoes have rotated $\phi + \alpha$ and $\phi + \beta$ respectively.
The dominoes need to be in contact. The top right corner of the first domino has moved horizontally a distance $h \sin ( \phi + \alpha )$ which we will approximate as $h ( \phi + \alpha )$ using the small angle approximation. The top left corner of the second domino moves horizontally forward by $h \sin ( \phi + \beta ) + t ( 1 - \cos ( \phi + \beta ) )$. We ignore the cosine term as second order in the rotation angle and approximate this as $h ( \phi + \beta )$.
The $y$-coordinate of the upper right corner of the first domino is $h ( 1 - \cos ( \phi + \alpha ) ) \approx h$. The $y$-coordinate of the upper left corner of the second domino is $h ( 1 - \cos ( \phi + \beta ) ) + t \sin ( \phi + \beta ) \approx$ $h + t ( \phi + \beta )$ There is a first-order difference in $y$-coordinates of the two corners, but this means the difference in $x$ coordinate between the top left corner of the second domino and the top right corner of the first domino is second-order in the rotation angles. We conclude that to first order

$$
h ( \phi + \alpha ) = l + h ( \phi + \beta ) \quad \Rightarrow \quad \alpha = \frac { l } { h } + \beta
$$

because this condition puts the top right corner of the first domino at the same position as the top left of the second domino.
The potential energy of the first domino, setting zero potential energy to be when the domino is upright, is $U _ { 1 } = \Delta U \left( 1 - ( \alpha / \phi ) ^ { 2 } \right)$ to second order in $\alpha$, and for the second domino, $U _ { 2 } =$ $\Delta U \left( 1 - ( \beta / \phi ) ^ { 2 } \right)$. These figures come from fitting a quadratic whose peak is when the center of mass is above the rotation point and which is zero when the domino is upright. The total potential energy is $U _ { 1 } + U _ { 2 }$, and using the relation between $\alpha$ and $\beta$, it is minimized for

$$
\beta _ { \max } = - \frac { l } { 2 h } .
$$

In other words, the second domino is as far away from rotating to the top of arc as the first domino has rotated past the top of its arc. This gives a maximum potential energy

$$
U _ { \max } = 2 \Delta U \left( 1 - \frac { l ^ { 2 } } { 4 t ^ { 2 } } \right)
$$

where we have used the approximation $\phi \approx t / h$.


At impact, $U _ { \text {impact } } \approx \Delta U \left( - l ^ { 2 } / t ^ { 2 } + 2 l / t \right)$. Before impact, the kinetic energy is $\Delta U - U _ { \text {impact } }$ because the maximum potential energy before impact was $\Delta U$, and the kinetic energy was zero there. The kinetic energy just after the collision is then $\left( \Delta U - U _ { \text {impact } } \right) / 2$. Setting this equal to the potential energy gain as the two dominoes rotate to their highest potential energy $U _ { \text {max } }$,

$$
\frac { 1 } { 2 } \left( \Delta U - U _ { \text {impact } } \right) = U _ { \max } - U _ { \text {impact } }
$$

or

$$
\frac { 1 } { 2 } \Delta U = U _ { \max } - \frac { 1 } { 2 } U _ { \mathrm { impact } }
$$

Plugging in the earlier expressions for all these gives

$$
\frac { 1 } { 2 } \Delta U = 2 \Delta U \left( 1 - \frac { l ^ { 2 } } { 4 t ^ { 2 } } \right) - \Delta U \left( \frac { l } { t } - \frac { l ^ { 2 } } { 2 t ^ { 2 } } \right)
$$

and solving this yields

$$
l = \frac { 3 } { 2 } t
$$

to first order in $t$.

d. A row of toppling dominoes can be considered to have a propagation speed of the length $l + t$ divided by the time between successive collisions. When the first domino is given a minimal push just large enough to topple and start a chain reaction of toppling dominoes, the speed increases with each domino, but approaches an asymptotic speed $v$.
![](../../../figures/solution-ocr/8284922de784cdffba432659.jpg)
Suppose there is a row of dominoes on another planet. These dominoes have the same density as the dominoes previously considered, but are twice as tall, wide, and thick, and placed with a spacing of $2 l$ between them. If this row of dominoes topples with the same asymptotic speed $v$ previously found, what is the local gravitational acceleration on this planet?

## Solution

This part is independent of the others and requires only dimensional analysis. The speed $v$ can depend on $g , h , w , l$. To get a quantity with dimensions $\left[ L T ^ { - 1 } \right]$, we must take

$$
v = c \sqrt { g L }
$$

where $L$ is some length made from $h , w$, and $l$. On the new planet, $v$ is the same and $L$ is twice as much, so $g$ must be half as great on the new planet.
