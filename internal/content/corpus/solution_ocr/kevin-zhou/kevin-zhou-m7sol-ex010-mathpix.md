---
id: solution-ocr-kevin-zhou-m7sol-ex010
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-ex010]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 10
A big fan produces a stream of air with speed $v$. If the atmospheric pressure in the room is $P _ { \text {atm } }$, what's the pressure $P$ in the middle of the fan's air stream?

Solution
This question frequently appears in middle school physics lessons. Obviously, if we apply Bernoulli's principle to the air before and after it goes through the fan, we get

$$
P + \frac { 1 } { 2 } \rho v ^ { 2 } = P _ { \mathrm { atm } }
$$

so that the pressure is lower than atmospheric pressure. Easy, right? But it's wrong!
The air in the stream is traveling forward with constant velocity, exposed to the rest of the air in the room, which has atmospheric pressure. If there actually was such a pressure difference, the fan's air stream would be compressed by the air in the room, until it reached atmospheric pressure again. If you look back carefully at the above examples, you'll see this is always the case: air can only be at a different pressure if it's confined away from the atmosphere at large (e.g. in a train tunnel or a whirly tube), or if it's actively being accelerated (e.g. when it flies into or over a barn, in which case the pressure difference is precisely what causes the force). The other case where you can maintain a pressure difference is when the air is moving extremely quickly, which will be discussed in T3.

So the correct answer is that $P = P _ { \text {atm } }$. But why doesn't Bernoulli's principle work? Because it's a statement of energy conservation, and the fan itself is doing work on the air to get it moving. The correct statement would be

$$
P _ { \mathrm { atm } } + \frac { 1 } { 2 } \rho v ^ { 2 } = P _ { \mathrm { atm } } + w
$$

where $w$ is the work done by the fan per unit volume of air.
[2] Problem 15 (HRK). A siphon is a device for removing liquid from a container that cannot be tipped. An example of a siphon, with constant cross-section, is shown below.


![](../../../figures/solution-ocr/ae5808139594109520bea686.jpg)
The tube must initially be filled, but once this has been done the liquid will flow until its level drops below the tube opening at A. The liquid has density $\rho$ and negligible viscosity.

(a) With what speed does the liquid emerge from the tube at C?
(b) What is the pressure of the liquid at the topmost point B?
(c) What is the maximum possible $h _ { 1 }$ so that the siphon can operate?
(d) Would the siphon still work if $h _ { 2 }$ were slightly negative? How negative can it be, for the siphon to keep on working?

Solution. (a) Applying Bernoulli's principle between the surface of the water and point C gives

$$
\frac { 1 } { 2 } \rho v ^ { 2 } = \rho g \left( h _ { 2 } + d \right)
$$

which implies

$$
v = \sqrt { 2 g \left( h _ { 2 } + d \right) } .
$$

(b) By continuity the speed $v$ in the tube is constant. Applying Bernoulli's principle between points B and C gives
$$
P _ { \mathrm { atm } } = P _ { B } + \rho g \left( h _ { 1 } + h _ { 2 } + d \right)
$$
which gives
$$
P _ { B } = P _ { \mathrm { atm } } - \rho g \left( h _ { 1 } + h _ { 2 } + d \right) .
$$
(c) For the siphon to just barely work, the flow speed $v$ should be tiny, so $h _ { 2 } + d \approx 0$. The highest value of $h _ { 1 }$ is when the pressure is zero at point B , since pressure can't be negative, so $h _ { 1 } \leq P _ { \text {atm } } / \rho g$. (If we start with this maximum possible value of $h _ { 1 }$ but then increase $h _ { 2 } + d$ above zero, then the siphon will stop working, because the water flow will break up along the exit tube.)
(d) Yes. It is still energetically favorable for water to flow through the siphon as long as point C is below the surface of the water. As mentioned above, the siphon works as long as $h _ { 2 } + d > 0$.

[2] Problem 16 (HRK). Consider a uniform U-tube with a diaphragm shown below.
![](../../../figures/solution-ocr/9e72ddf99fa4184a68f967e9.jpg)
    (a) Suppose the diaphragm is opened and the liquid begins to flow from left to right. Show that applying Bernoulli's principle yields a contradiction.
    (b) Explain why Bernoulli's principle doesn't apply if the diaphragm has a very wide opening.
    (c) Explain why Bernoulli's principle doesn't apply if the diaphragm has a tiny opening.

Solution. (a) Since the pressures and velocities at points 1 and 3 are the same, Bernoulli's principle would imply the heights are also the same, which is false.


(b) Bernoulli's principle is just energy conservation, applied to water moving along a streamline. In this case, the liquid just oscillates back and forth, with point 1 and point 3 alternating periodically in height. Bernoulli's principle can't be applied between points 1 and 3 because water never moves all the way from point 1 to point 3; it just wiggles back and forth.
(c) In this case, viscous effects are not negligible. Energy is dissipated to heat, so Bernoulli's principle doesn't apply.
But what if we used a very nonviscous fluid? In that case, you would still lose energy, but to turbulence; the flow pattern after the diaphragm's opening would look like the setup of problem 17. Energy in turbulent eddies eventually dissipates to heat, so we again lose energy and Bernoulli's principle doesn't apply.
But what if the diaphragm is also shaped like a smooth curve, to prevent turbulence? In that case, you don't lose energy, but the flow isn't steady. The fluid continually accelerates as it goes through the diaphragm; in the long run the heights of points 1 and 3 alternate, as in part (b). Fluid does go all the way from point 1 to point 3, but Bernoulli's principle can't be applied because the flow isn't steady.
[2] Problem 17 (HRK). A stream of fluid of density $\rho$ with speed $v _ { 1 }$ passes abruptly from a cylindrical pipe of cross-sectional area $a _ { 1 }$ into a wider cylindrical pipe of cross-sectional area $a _ { 2 }$ as shown.

![](../../../figures/solution-ocr/d5f0df8a1561b565a2c85cae.jpg)
The jet will mix with the surrounding fluid, forming a turbulent region where the pressure is approximately $P _ { 1 }$. Further to the right, the flow becomes almost uniform again, with average speed $v _ { 2 }$ and pressure $P _ { 2 }$.

(a) By considering force and momentum, show that
$$
P _ { 2 } - P _ { 1 } = \rho v _ { 2 } \left( v _ { 1 } - v _ { 2 } \right) .
$$
(b) Show from Bernoulli's principle that in a gradually widening pipe we would instead get
$$
P _ { 2 } - P _ { 1 } = \frac { 1 } { 2 } \rho \left( v _ { 1 } ^ { 2 } - v _ { 2 } ^ { 2 } \right) .
$$
(c) Find the loss of pressure due to the abrupt enlargement of the pipe. Can you draw an analogy with elastic and inelastic collisions in particle mechanics?

Solution. (a) Let's consider the fluid in the region bounded by the two shaded circles. After a small time $d t$, this fluid moves to the right, and some of the fluid originally traveling at $v _ { 1 }$ ends up traveling at $v _ { 2 }$. The rate of change in momentum is

$$
\frac { \Delta p } { \Delta t } = \left( v _ { 2 } - v _ { 1 } \right) \frac { \Delta m } { \Delta t } = \rho v _ { 2 } a _ { 2 } \left( v _ { 2 } - v _ { 1 } \right) .
$$

This must be equal to the net force on the fluid, which has three contributions:


- A leftward force $P _ { 2 } a _ { 2 }$ from the fluid on its right side.
- A rightward force $P _ { 1 } a _ { 1 }$ from the fluid on its left side.
- A rightward force $P _ { 1 } \left( a _ { 2 } - a _ { 1 } \right)$ from the vertical part of the wall.

This is a net rightward force of $\left( P _ { 1 } - P _ { 2 } \right) a _ { 2 }$. Equating these expressions and dividing by $a _ { 2 }$ gives the desired result.

(b) This is simply a direct application of Bernoulli's principle.
(c) The extra loss of pressure is the difference,
$$
\Delta P = \frac { 1 } { 2 } \rho \left( v _ { 1 } - v _ { 2 } \right) ^ { 2 } .
$$
As in an inelastic collision, the loss of energy (reflected in the loss of pressure, which is essentially like elastic potential energy) goes as the square of the relative speed.

[2] Problem 18 (PPP 49). A bucket with a hole in the bottom is held below a faucet. When the bucket is empty, the hole is plugged, and the faucet is turned on, the bucket fills with water in time $T _ { 1 }$. When the bucket is full, the faucet is turned off, and the hole is opened, the bucket empties in time $T _ { 2 }$. If both the hole and faucet are open, what ratio of $T _ { 1 } / T _ { 2 }$ can cause the bucket to overflow?
Solution. Let water come out of the faucet at a volumetric flow rate of $\dot { V }$, so that the bucket with area $A$ and height $h _ { 0 }$ will be filled in time $T _ { 1 } = A h _ { 0 } / \dot { V }$.
When the hole at the bottom with effective area $a$ is open, water will flow out at a speed of $v = \sqrt { 2 g h }$, giving a volumetric flow rate of $- a \sqrt { 2 g h }$, where $h$ is the water depth. Then
$$
\begin{gathered}
\frac { d } { d t } ( A h ) = A \frac { d h } { d t } = - a \sqrt { 2 g h } \\
- \int _ { h _ { 0 } } ^ { 0 } \frac { d h } { \sqrt { 2 g h } } = \int _ { 0 } ^ { T _ { 2 } } \frac { a } { A } d t \\
\sqrt { \frac { 2 h _ { 0 } } { g } } = \frac { a } { A } T _ { 2 }
\end{gathered}
$$
To overflow the water bucket, the faucet needs to add water faster than the plug drains water when the bucket is almost full. The overflow condition is then
$$
\dot { V } = \frac { A h _ { 0 } } { T _ { 1 } } > a \sqrt { 2 g h _ { 0 } } .
$$
Plugging in our result for $T _ { 2 }$ gives
$$
\frac { T _ { 1 } } { T _ { 2 } } < \frac { 1 } { 2 } .
$$
This differs from the naive answer $T _ { 1 } / T _ { 2 } = 1$ because the rate of emptying depends on the current water height. This also implies that all those elementary school questions about filling and emptying a bucket simultaneously are wrong. For example, you might have once been asked, "if a bucket can be filled in 2 minutes and drains in 3 minutes, how long does it take to fill if the drain is open?" If we were working with sand, then the correct answer would be 6 minutes (for reasons noted in P1), but for real water, the true answer is that it never fills up all the way.
