---
id: solution-ocr-spot-2026-s-q5
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q5]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
5. In this problem, we will study the thermodynamics of an unusual heat engine, known as an Archibald rubber band heat engine.
![](../../../figures/solution-ocr/15db37085d4e6660be4f91da.jpg)
This heat engine consists of a series of rubber bands with one end attached to the circumference of a wheel with radius $R$, and the other end fastened to a frictionless bearing, whose center is offset from the wheel's central axis of rotation by a distance $R _ { 0 }$. Both the wheel's axis and rubber band axis are fixed and do not move.
A "heat engine" can be constructed by submerging the bottom half of the assembly in hot water with uniform temperature $T _ { H }$, which causes the wheel and attached bands to rotate. The top half remains at ambient temperature $T _ { C }$. A clearer diagram is shown below. The rubber bands are connected to $O ^ { \prime }$, while the wheel rotates about $O$.
(a) Given the set up above where the rubber band axis is offset to the left by $R _ { 0 }$ and that

![](../../../figures/solution-ocr/487324998a0fb5e0effe4b3e.jpg)
stretched rubber contracts when heated, explain whether the wheel rotates clockwise or counterclockwise.

Solution: Without submerging the half of the wheel in hot water, the net counterclockwise torque exerted by the top half of the wheel exactly cancels out the net clockwise torque exerted by the bottom half of the wheel. However, the rubber band in the bottom half contracts upon being heated. Hence, the clockwise torque exerted by the bottom half dominates and the wheel rotates clockwise.

The thermodynamic relation for a rubber band is given by

$$
d U = T d S + \tau d L
$$

where $T$ is the temperature, $\tau$ is the tension, $U$ is the internal energy, $S$ is the entropy, and $L$ is the length of the rubber band. You may assume that just like an ideal gas, $U$ can be expressed as a function of only the temperature $T$.

(b) By referencing the Maxwell relation for a typical $P , V , T$ system:
$$
\left( \frac { \partial S } { \partial V } \right) _ { T } = \left( \frac { \partial P } { \partial T } \right) _ { V } ,
$$
derive an equivalent Maxwell relation for the rubber band with a suitable substitution.

Solution: The classic thermodynamic relation is

$$
d U = T d S - P d V
$$

With a direct comparison, we can obtain the relation for the rubber band by replacing $P \rightarrow - \tau$ and $V \rightarrow L$. Hence, the new Maxwell relation is

$$
\left( \frac { \partial S } { \partial L } \right) _ { T } = - \left( \frac { \partial \tau } { \partial T } \right) _ { L }
$$

We assume that that change in tension in the rubber band is small in one cycle and may be expanded linearly about the tension at length $R$ and average temperature $\bar { T } = \left( T _ { C } + T _ { H } \right) / 2$ as

$$
\tau ( L , T ) = \tau ( R , \bar { T } ) + \rho ( L - R ) + \sigma ( T - \bar { T } )
$$

where $\rho = ( \partial \tau / \partial L ) _ { T }$ and $\sigma = ( \partial \tau / \partial T ) _ { L }$ both evaluated at $( R , \bar { T } )$ are constants.


(c) By considering the entropy $S$ as a state function of the temperature $T$ and length $L$ of the rubber band, show clearly that for a reversible process, we have
$$
d Q = C _ { L } d T - T \sigma d L
$$
where $C _ { L }$ is defined as the heat capacity at constant length.
Hint: For a multivariate function $f ( x , y )$, we may write its differential
$$
d f = \frac { \partial f } { \partial x } d x + \frac { \partial f } { \partial y } d y
$$
You may also use the Maxwell relation derived in (b).
Solution: Using the hint, we can express $d S$ as
$$
d S = \left( \frac { \partial S } { \partial T } \right) _ { L } d T + \left( \frac { \partial S } { \partial L } \right) _ { T } d L
$$
Since the LHS of the equation we want to show is $d Q$, this motivates us to rewrite $d S = d Q / T$ for a reversible process and get
$$
d Q = T \left( \frac { \partial S } { \partial T } \right) _ { L } d T + T \left( \frac { \partial S } { \partial L } \right) _ { T } d L
$$
In particular, we also know that for a reversible process at constant length, we have
$$
\left( \frac { \partial S } { \partial T } \right) _ { L } = \left( \frac { 1 } { T } \frac { \partial Q } { \partial T } \right) _ { L } = \frac { C _ { L } } { T }
$$
since by definition, $C _ { L } = ( \partial Q / \partial T ) _ { L }$. Using the Maxwell equation given in (b) to substitute the second term, we obtain the desired relation.
(d) We now consider the thermodynamic cycle undergone by a rubber band on the wheel during a full rotation. We consider the state of the rubber band as it rotates through 4 locations $A , B , C$ and $D$ shown in the second diagram above. Sketch a $\tau - L$ diagram connecting $A , B , C , D$ (on your answer sheet) and use arrows to denote the direction of the thermodynamic cycle as the wheel rotates in the direction given by your answer in (a). Label the horizontal coordinates of $A , B , C , D$ in terms of $R$ and $R _ { 0 }$. You may also use the linear approximation of $\tau$ about $( R , \bar { T } )$ if necessary.
Hint: You may assume two of the processes to be "isochoric" and two of the processes to be isothermal, but which?
![](../../../figures/solution-ocr/196e8d3926a2b8779561005e.jpg)

Solution: Firstly, we establish that the wheel rotates clockwise. So the cycle should be $A \rightarrow B \rightarrow C \rightarrow D$. Secondly, it is clear that the isothermal processes should be $D \rightarrow A$ and $B \rightarrow C$ since the temperature of the rubber band will quickly equilibriate with the ambient temperature. The "isochoric processes" (constant length instead of constant volume in this case) will be $A \rightarrow B$ and $C \rightarrow D$, since the length of the rubber band should remain constant at the instant the temperature changes.
With this, we know that $A \rightarrow B$ and $C \rightarrow D$ should be two vertical lines on the $\tau - L$ diagram, with the tension $\tau _ { B } > \tau _ { A }$ and $\tau _ { C } > \tau _ { D }$. To now construct the isothermal process, we notice that at constant temperature, we can make use of $\rho = ( \partial \tau / \partial L ) _ { T }$, which gives us that we can assume $\tau = \rho L + C$ (linear approximation) at constant temperature. Graphically, this means that both $D A$ and $B C$ should be straight lines with the same gradient.
![](../../../figures/solution-ocr/7e7e973f01933937b809a005.jpg)

(e) By considering the heat cycle in (d), calculate the thermodynamic efficiency $\eta$ of this engine in terms of $T _ { C } , T _ { H } , \sigma$ and $R _ { 0 }$. You may use the simplification
$$
\alpha = \int _ { T _ { C } } ^ { T _ { H } } C _ { L } d T
$$
in your answer without explicitly evaluating the integral.

Solution: This question should be free marks if you could do part (d). Firstl, we calculate the workdone in the cycle to be the area enclosed by the loop. Notice that the net workdone by the rubber band $d W = - \tau d L$ is positive. Along $D A$, we have

$$
Q _ { D \rightarrow A } = - \int _ { R - R _ { 0 } } ^ { R + R _ { 0 } } T _ { C } \sigma d L = - 2 T _ { C } \sigma R _ { 0 }
$$

Along $B C$, we have

$$
Q _ { B \rightarrow C } = - \int _ { R + R _ { 0 } } ^ { R - R _ { 0 } } T _ { H } \sigma d L = 2 T _ { H } \sigma R _ { 0 }
$$

Along $A B$, we have

$$
Q _ { A \rightarrow B } = \int _ { T _ { C } } ^ { T _ { H } } C _ { L } d T = \alpha
$$

Along $C D$,we have

$$
Q _ { C \rightarrow D } = \int _ { T _ { H } } ^ { T _ { C } } C _ { L } d T = - \alpha
$$


So the net heat input during this cycle is given by

$$
Q = 2 T _ { H } \sigma R _ { 0 } + \alpha
$$

By the first law of thermodynamics, $\Delta U$ over the whole cycle is 0 and hence

$$
\begin{gathered}
W = Q _ { A \rightarrow B } + Q _ { B \rightarrow C } + Q _ { C \rightarrow D } + Q _ { D \rightarrow A } = 2 \sigma R _ { 0 } \left( T _ { H } - T _ { C } \right) \\
\eta = \frac { W } { Q } = \frac { 2 \sigma R _ { 0 } \left( T _ { H } - T _ { C } \right) } { 2 \sigma R _ { 0 } T _ { H } + \alpha }
\end{gathered}
$$
