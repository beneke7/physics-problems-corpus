---
id: solution-ocr-kevin-zhou-m7sol-ex011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-ex011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 11
A fluid of density $\rho$ flowing with a fast velocity $v _ { 1 }$ and height $h _ { 1 }$ can undergo a "hydraulic jump", where the height of the fluid increases to $h _ { 2 }$. At the same time, the fluid flow slows down and becomes turbulent.
![](../../../figures/solution-ocr/9ab77bc772e00bacece8a26c.jpg)
This phenomenon is very common in everyday life. For example, it happens whenever you turn on the water faucet in a sink; the hydraulic jump occurs on a circle centered on the


faucet. Find the final height $h _ { 2 }$.

Solution
During this process, the bulk kinetic energy of the water is not conserved, because it is converted to turbulent motion. However, the horizontal momentum of the water is approximately conserved. Consider a stream of water of width $w$ flowing in the $x$ direction, where the hydraulic jump occurs at $x = 0$. By mass conservation,

$$
v _ { 1 } h _ { 1 } = v _ { 2 } h _ { 2 }
$$

where $v _ { 2 }$ is the final speed. Now we consider a fixed subset of the water encompassing the hydraulic jump. The atmospheric pressure does not yield a net horizontal force on the water, so we focus on the pressure in excess of atmospheric pressure. The total excess pressure force on the left end is

$$
F _ { \ell } = \int _ { 0 } ^ { h _ { 1 } } \rho g h w d h = \frac { 1 } { 2 } \rho g w h _ { 1 } ^ { 2 }
$$

Therefore, we have total force

$$
F = \frac { 1 } { 2 } \rho g w \left( h _ { 1 } ^ { 2 } - h _ { 2 } ^ { 2 } \right) .
$$

On the other hand, the mass of water that flows through the hydraulic jump per unit time is $\rho h _ { 1 } w v _ { 1 }$, and its velocity decreases by $v _ { 1 } - v _ { 2 }$, so

$$
\frac { d p } { d t } = - \rho h _ { 1 } w v _ { 1 } \left( v _ { 1 } - v _ { 2 } \right) = \rho w v _ { 1 } v _ { 2 } \left( h _ { 1 } - h _ { 2 } \right)
$$

where we used mass conservation. Equating $F = d p / d t$ and simplifying gives

$$
g \left( h _ { 1 } + h _ { 2 } \right) = 2 v _ { 1 } v _ { 2 } .
$$

Applying mass conservation again leads to a quadratic in $h _ { 2 }$,

$$
h _ { 2 } ^ { 2 } + h _ { 1 } h _ { 2 } - \frac { 2 v _ { 1 } ^ { 2 } h _ { 1 } } { g } = 0
$$

and the physically relevant positive solution is the answer,

$$
h _ { 2 } = - \frac { h _ { 1 } } { 2 } + \sqrt { \frac { h _ { 1 } ^ { 2 } } { 4 } + \frac { 2 h _ { 1 } v _ { 1 } ^ { 2 } } { g } } .
$$

For $v _ { 1 } ^ { 2 } > g h _ { 1 }$, we have $h _ { 2 } > h _ { 1 }$ and an ordinary hydraulic jump. For $v _ { 1 } ^ { 2 } < g h _ { 1 }$, you might expect a "reverse" hydraulic jump to occur, but this is impossible by the second law of thermodynamics. In a hydraulic jump, some of the kinetic energy of laminar flow energy is converted to turbulent flow, which is essentially heat; thus the reverse can't happen. So in addition to deriving $h _ { 2 }$, we've found the minimum $v _ { 1 }$ for a hydraulic jump to be possible!

Note that this conservation law approach doesn't tell us about how far a fluid will flow before it undergoes a hydraulic jump. That would require understanding the fluid flow in detail, accounting for turbulence and viscosity, which is generally analytically intractable. For more on this subject, see sections 26.1 and 26.2 of Lautrup.


[3] Problem 20 (PPP 70). A tanker full of liquid is at rest on a frictionless horizontal road.
![](../../../figures/solution-ocr/34ab4b14e94186b0446fca32.jpg)
A small vertical outlet pipe at the rear of the tanker is opened. Describe qualitatively how the tanker will move (a) immediately afterward, and (b) after a long time. Assume that the water always falls out of the cart with zero horizontal velocity in the cart's frame.
Solution. (a) The total horizontal momentum of the tanker and liquid is conserved, and is initially zero, so the center of mass of the tanker and liquid cannot move horizontally. When water starts to flow out, it comes out on the tanker's left side. Thus, the tanker has to initially move to the right.
    (b) However, it's impossible for the tanker to always move to the right. If that were the case, then after a long time, when the water has all left, both the tanker and all of the water will be moving to the right, violating momentum conservation. Thus, at some point the tanker has to turn around, and its final velocity is to the left. (However, if the draining process was so violent that the water started sloshing around, then the tanker would jerk back and forth, which would screw up the above argument. We're implicitly assuming that the draining process is slow, so that the water still inside the tanker moves with it.)

By the way, it's worth thinking about the forces that make the tanker move. These forces must be due to water pressure. When the water starts flowing towards the drain, it has a higher velocity near the drain, and thus a lower pressure by Bernoulli's principle. Thus, the total pressure force on the tanker's left wall is lower than that on its right wall, which is why the tanker starts moving to the right. On the other hand, when there's only a thin layer of water left, the part of the water to the right of the drain will have a big leftward horizontal velocity. That leftward momentum is transferred to the tanker near the drain, where the water is forced to turn around and fall down vertically; that's why the tanker starts moving to the left near the end. If you're interested in seeing more, there's a complete analysis here which even includes explicit expressions for the tanker's position over time.

[3] Problem 21 (PPP 74). A jet of water strikes a horizontal gutter of semicircular cross-section obliquely, as shown.
![](../../../figures/solution-ocr/0658db1cd991df62b61bcd57.jpg)
The jet lies in the vertical plane that contains the center-line of the gutter. Assume the angle is relatively shallow, so that the water hits the gutter smoothly, and doesn't splatter. Find the ratio of the quantities of water flowing out at the two ends of the gutter as a function of the angle of incidence $\alpha$ of the jet.

Solution. Let the original water jet have area $A _ { 0 }$ and speed $v$. Let $v _ { 1 }$ be the speed of the stream to the right, and let $A _ { 1 }$ be its area. Similarly define $v _ { 2 }$ and $A _ { 2 }$. First, we claim that

$$
v = v _ { 1 } = v _ { 2 } .
$$

This follows directly from Bernoulli's principle. The incoming jet has atmospheric pressure, because it's exposed to the air, and so do the two streams. Since they have the same pressures, they have the same speeds. (Of course, this wouldn't be true if energy was dissipated. For instance, if the water jet were fast and directed straight down, water would splatter everywhere.)

Next, conservation of mass gives

$$
A _ { 0 } = A _ { 1 } + A _ { 2 } .
$$

Conservation of horizontal momentum gives

$$
\rho A _ { 0 } v ^ { 2 } \sin \alpha = \rho A _ { 1 } v ^ { 2 } - \rho A _ { 2 } v ^ { 2 }
$$

which implies

$$
A _ { 0 } \sin \alpha = A _ { 1 } - A _ { 2 } .
$$

Combining this with mass conservation gives

$$
A _ { 1 } = \frac { 1 + \sin \alpha } { 2 } A _ { 0 } , \quad A _ { 2 } = \frac { 1 - \sin \alpha } { 2 } A _ { 0 } .
$$

Since the speeds are the same, the ratio of flow rates is just the ratio of areas,

$$
\frac { A _ { 1 } } { A _ { 2 } } = \frac { 1 + \sin \alpha } { 1 - \sin \alpha } .
$$

[3] Problem 22 (NBPhO 2005). A water pump consists of a vertical tube of cross-sectional area $S _ { 1 }$ topped with a cylindrical rotating tank of radius $r$. All the vessels are filled with water; there are holes of total cross-sectional area $S _ { 2 } \ll S _ { 1 }$ along the perimeter of the tank, which are open for the operating regime of the pump. The height of the tank from the water surface of the reservoir is $h$. An electric engine keeps the vessel rotation at angular velocity $\omega$. The water density is $\rho$, the atmospheric pressure is $p _ { 0 }$, and the saturated vapor pressure is $p _ { k }$. Inside the tank there are metal blades, which make the water rotate with the tank.
![](../../../figures/solution-ocr/4cf7ef98b9c4d56de082b907.jpg)
    (a) Find the pressure $p _ { 2 }$ at the perimeter of the tank when all the holes are closed.
    (b) For the rest of the problem, we suppose the holes are opened. Find the velocity $v _ { 2 }$ of the water jets with respect to the ground.

(c) If the tank rotates too fast, the water pressure at some point will become lower than $p _ { k }$. As you'll see in T3, this will cause "cavitation", i.e. the water will start boiling, lowering the pump's efficiency. Find the highest cavitation-free angular speed $\omega _ { \text {max } }$.
(d) If the power of the electric engine is $P$, what is the theoretical upper limit of the mass pumped per unit time, assuming $S _ { 2 }$ can be freely adjusted?

Solution. See the official solutions as usual. This setup is called a centrifugal pump. There are typos in the final answers to the first and third parts; the correct answers are:

$$
\begin{aligned}
p _ { 2 } & = p _ { 0 } - \rho g h + \rho \omega ^ { 2 } r ^ { 2 } / 2 \\
v _ { 2 } & = \sqrt { 2 \left( \omega ^ { 2 } r ^ { 2 } - g h \right) } \\
\omega _ { m } & = \frac { \sqrt { 2 } } { r } \sqrt { g h + \left( \frac { p _ { 0 } - p _ { k } } { \rho } - g h \right) \left( \frac { S _ { 1 } } { S _ { 2 } } \right) ^ { 2 } } \\
\mu & = P / 2 g h
\end{aligned}
$$
