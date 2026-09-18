---
id: solution-ocr-nbpho-2025-throwing-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2025-throwing]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; split from the full 2025 booklet; grading-only material omitted from canonical display."
---
# 5. Throwing (6 points) — Official solutions

i) (2 points) In the drone's reference frame, the effective gravitational field is $( g , g )$, which has a magnitude of $g \sqrt { 2 }$ pointing at a 45° angle. The initial kinetic energy of the ballis $\frac { 1 } { 2 } m v _ { 0 } ^ { 2 }$, and the final energy: potential energy change is $m ( g \sqrt { 2 } ) \cdot ( h \sqrt { 2 } )$, where $h \sqrt { 2 }$ is the displacement along the direction of the effective field From the energy conservation law we obtain $\frac { 1 } { 2 } m v _ { 0 } ^ { 2 } = m ( g \sqrt { 2 } ) \cdot ( h \sqrt { 2 } )$, hence $v _ { 0 } = 2 \sqrt { g h }$.

Solution 2 by Anne-Sofie Mårtensson and Adam Warnerbring: In time $t$ the drone travels a distance $s = \frac { 1 } { 2 } g t ^ { 2 }$. For a collision to occur at time $t$ the ball must travel a distance $h$ up giving us an equation $h = v t \sin \alpha - \frac { 1 } { 2 } g t ^ { 2 }$ and a distance $h + s$ horizontally giving us an equation $h + s = v t \cos \alpha$. From these equations we get $v t \sin \alpha = v t \cos \alpha$, which means that $\alpha = 45 ^ { \circ }$. This means that the initial $x$ and $y$-components of the velocity must be the same. Thus the initial speed minimised when the highest point of the trajectory is minimal which happens when it is a height $h$ away from the throwing point. From energy conservation we get $\frac { 1 } { 2 } \left( \frac { v _ { 0 } } { \sqrt { 2 } } \right) ^ { 2 } = g h$ to get $v _ { 0 } = 2 \sqrt { g h }$

velocity from $\alpha = 45 ^ { \circ }$ as follows. If we go back to our kinematical equations, we get that the condition for the drone and the ball to meet at the same $x$-coordinate is $v t \sin \alpha$ - $\frac { 1 } { 2 } g t ^ { 2 } = \frac { v t } { \sqrt { 2 } } - \frac { 1 } { 2 } g t ^ { 2 } = h + s = h + \frac { 1 } { 2 } g t ^ { 2 }$. But also for the $y$ coordinate we have $h = v t \sin \alpha -$ $\frac { 1 } { 2 } g t ^ { 2 } = \frac { v t } { \sqrt { 2 } } - \frac { 1 } { 2 } g t ^ { 2 }$. I.e. both equations become $\frac { 1 } { 2 } g t ^ { 2 } - \frac { v t } { \sqrt { 2 } } + h = 0$, so we only need to find out what is the minimal velocity that this equation has a solution. Since the equation is a quadratic, it has a solution when its discriminant $\Delta$ is non-negative. Now $\Delta =$ $v ^ { 2 } / 2 - 2 g h$, which is an increasing function of $v$. Thus the minimal speed with which the collision is possible is when the discriminant is zero. Thus we get $v = 2 \sqrt { g h }$.

Some students interpreted the task such that the drone has an acceleration $( g , -$ $g$ ). This interpretation makes the problem more difficult and will be accepted. The following solution shows how this version of the problem can be solved Solution for the alternative interpretation by Eppu Leinonen: If we move to the coaccelerating frame of the drone, the ball will have a net acceleration $( - g , 0 )$, and the drone will stay in place. This invites us to rotate the coordinate axes that the acceleration of the ball is $( 0 , - g )$ and if we set the origin at the throwing point, the drone will be at $( - h , h )$. Now all the points reachable by the ball with an initial speed $v$ are given by the so called envelope curve which is known to have the equation $y \leq$ $v _ { 0 } ^ { 2 } / 2 g - g x ^ { 2 } / 2 v _ { 0 } ^ { 2 }$. With the minimal possible speed the drone will be on the envelope curve as otherwise the point is not reachable or the speed can be made smaller. So we need to find $v _ { 0 }$ such that the equation $h = v _ { 0 } ^ { 2 } / 2 g - g h ^ { 2 } / 2 v _ { 0 } ^ { 2 }$ has a solution. Rearranging gives $v _ { 0 } ^ { 4 } - 2 g h v _ { 0 } ^ { 2 } - g ^ { 2 } h ^ { 2 } = 0$ which is a quadratic in $v _ { 0 } ^ { 2 }$ (biquadratic in $v _ { 0 }$ ) which has the solutions $v _ { 0 } ^ { 2 } = \frac { 2 g h \pm \sqrt { 4 g ^ { 2 } h ^ { 2 } + 4 g ^ { 2 } h ^ { 2 } } } { 2 } = g h \pm$ $g h \sqrt { 2 }$ which is only positive if ± is + so $v _ { 0 } ^ { 2 } =$ $( 1 + \sqrt { 2 } ) g h$ and as such $v _ { 0 } = \sqrt { ( 1 + \sqrt { 2 } ) g h }$.

ii) (4 points)

Solution 1. Let us use the free-falling frame of reference wherein the ball and the stone move along straight lines. That frame fell together with points $S$ and $B$ during the flight time of duration $t$ by $h = \frac { 1 } { 2 } g t ^ { 2 }$, so in that frame the position of the collision point $C ^ { \prime }$ is obtained by shifting $C$ relative to $S$ and $B$ by distance $h$ upwards. In that frame, $\left| S C ^ { \prime } \right| =$ $v t$ and $\left| B C ^ { \prime } \right| = u t$, hence $\left| S C ^ { \prime } \right| / \left| B C ^ { \prime } \right| = v / u$. We have $v$ fixed and want to have as small as possible $u$, so $\left| S C ^ { \prime } \right| / \left| B C ^ { \prime } \right|$ needs to be maximal. From the sine theorem, $\left| S C ^ { \prime } \right| / \left| B C ^ { \prime } \right| =$ $\sin \angle S B C ^ { \prime } / \sin \angle C ^ { \prime } S B$. As $\angle C ^ { \prime } S B$ is defined by the stone-throwing angle and is therefore fixed, the boy needs to maximize $\sin \angle C ^ { \prime } B S$. Obviously, the maximum of 1 is reached for $\angle C ^ { \prime } B S = 90 ^ { \circ }$. Therefore, we need to draw a perpendicular to $S B$ at $B$, and find $C ^ { \prime }$ as its intersection point with the vertical line drawn through $C$. Then $\left| C C ^ { \prime } \right| = \frac { 1 } { 2 } g t ^ { 2 }$ from where we obtain $t = \sqrt { 2 \left| C C ^ { \prime } \right| / g } , v =$ $\sqrt { g } \left| S C ^ { \prime } \right| / \sqrt { 2 \left| C C ^ { \prime } \right| } \approx 12.3 \mathrm {~m} \mathrm {~s} ^ { - 1 }$ and $u =$ $\sqrt { g } \left| B C ^ { \prime } \right| / \sqrt { 2 \left| C C ^ { \prime } \right| } \approx 10.9 \mathrm {~m} \mathrm {~s} ^ { - 1 }$
![](../../../figures/solution-ocr/3853959a3a9e80f426e51150.jpg)

Solution 2. A purely geometric proof for $C ^ { \prime } B \perp B S A$ to minimise $B C ^ { \prime } / S C ^ { \prime }$ goes as follows (the rest of the solution is the same). After going to the free fall frame, go to the frame moving with velocity $\vec { v }$. For the ball to hit the ball its velocity in this frame $\vec { u } ^ { \prime }$ must point at the stone. I.e. we get that $\vec { u } ^ { \prime } = k \overrightarrow { B S }$, where $k > 0$. On the other hand $\vec { u } ^ { \prime } = \vec { u } - \vec { v }$. But now this means that $\vec { v } - \vec { u }$ must end up on the line $S B$. The possible ending points of


$\vec { v } - \vec { u }$ are achieved by drawing a circle of ra- second contribution comes from the buoydius $u$ around the ending point of $\vec { v }$. With the ancy force that can be split into two compon- minimal $| \vec { u } |$ to achieve the condition of the ents: the upward buoyancy force as if the en- relative velocity ending up on $S B$ the circle tire beam were submerged (acts at the centre will be tangent to $S B$ which means that $\vec { u } \perp$ of mass, creating zero torque), and the down- $\overrightarrow { B S }$. ward "missing" buoyancy force of the trian-

This will replace minimising the ratio and gular section above water (creates a torque). This missing buoyancy force $F$ is what be- using the sine law to give in total 0.8p for comes a real buoyancy force once additional method and 0.5 for the correct angle. birds land and press the beam fully under-

Solution 3. An analytic proof for $C ^ { \prime } B \perp$ $B S$ to minimise $B C ^ { \prime } / S C ^ { \prime }$ goes as follows (the rest of the solution is the same). Without the loss of generality we can put the point $S$ at $( 0,0 )$ and the point $B$ at some $( q , 0 )$ (i.e. we rotate and move our coordinate system to achieve this). The $S C ^ { \prime }$ line is given by $y = k x$ for some $k$ and thus a general form for the point $C ^ { \prime }$ is $( x , k x )$. Thus the ratio of the lengths becomes

$$
R = \frac { \sqrt { ( x - q ) ^ { 2 } + k ^ { 2 } x ^ { 2 } } } { \sqrt { \left( k ^ { 2 } + 1 \right) x ^ { 2 } } } .
$$

Differentiating this (preferrably logarithimically) and finding the 0 of the the derivative gives

$$
x = q
$$

i.e. $C ^ { \prime } = ( q , k q )$ and as such $C ^ { \prime } B \perp B S$.
