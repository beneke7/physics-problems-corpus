---
id: solution-ocr-kevin-zhou-m7sol-ex018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-ex018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 18
A very thin, hollow glass tube of radius $r$ is dipped vertically inside a container of water.
![](../../../figures/solution-ocr/f1f8e94acbab04bdbb5aaaef.jpg)
Find the equilibrium height of the water in the tube.

Solution
In M2, we considered problems that could be solved knowing only the "surface tension of water" $\gamma$, which is the energy cost per unit area of having a water-air interface. But in this problem there is also a water-glass interface, and the answer to the question depends on precisely how water and glass interact. Specifically, you need to know the surface tension coefficient $\gamma _ { w g }$ which determines the energy cost of having a water-glass interface.

Fortunately, it turns out you don't need to know $\gamma _ { w g }$ if you know the contact angle $\theta$, i.e. the angle between the glass and water surface at the top of the meniscus, which is drawn as acute in the diagram above. We'll just treat $\theta$ as a given, but for an explanation of how $\theta$ is determined, see T3 or section 5.5 of Lautrup.

Since the glass tube is very thin, surface tension determines the shape of the water-air surface, so it is spherical since spheres minimize area. By some elementary geometry, one can show that the radius of curvature of this sphere is $R = r / \cos \theta$.

We showed using force balance arguments in M2 that the pressure inside the curved water surface is lower than atmospheric pressure by $\Delta P = 2 \gamma / R$. On the other hand, we also know from Pascal's principle that $\Delta P = \rho g h$. Equating the two gives

$$
h = \frac { 2 \gamma \cos \theta } { \rho g r } .
$$

This is Jurin's law.
Physics problems often assume that water and glass have zero contact angle. This implies that water perfectly wets glass, i.e. that a droplet of water placed on a horizontal glass surface will spread to cover it completely. We will follow this assumption below, though in practice, glass tends to quickly get coated in a layer of impurities, leading to a nonzero contact angle.


Example 19: PPP 130
Water in a glass beaker forms a meniscus, as shown below.
![](../../../figures/solution-ocr/e9e0b601f9811b6a725e1b24.jpg)
Find the height $h$ to which the meniscus rises above the flat water surface.

Solution
We consider all of the external horizontal forces acting on the water. The surface tension force acting at the top of the meniscus is purely vertical, because water and glass have zero contact angle. The other surface tension force acting on the flat part of the water is $\gamma$ per length. This balances the excess hydrostatic pressure (i.e. the pressure above atmospheric pressure) at the wall, which is $\rho g h ^ { 2 } / 2$ per unit length. Thus,

$$
h = \sqrt { \frac { 2 \gamma } { \rho g } } .
$$

We could have also gotten this with dimensional analysis, up to the prefactor.

Remark
You might be wondering how to compute the shape of the meniscus. There are two methods. First, the pressure right above the water surface is $P _ { \text {atm } }$, so the pressure right below the water surface can be determined from the radii of curvature of the surface, using the Young-Laplace equation from M2. This pressure can also be computed from the height of the surface using Pascal's principle. Combining these two yields a differential equation for the shape with a rather complicated solution, as explained in sections 5.6 and 5.7 of Lautrup. As you'll see in problem 33, you can also derive this result by considering force balance on the water.

Example 20: PPP 29
Water can rise to a height $H$ in a certain capillary tube. Three "gallows" are made from this tubing by bending it, and placed into a tank of water.
![](../../../figures/solution-ocr/c0fb6f0d11fa75be10625f87.jpg)


Note that $H ^ { \prime } > H$. For which tubes, if any, does water flow out of the other end?

Solution
Clearly no water can fall out of (a), because this would produce a perpetual motion machine. The gallows (b) and (c) are a bit more subtle. Water will not fall out of a capillary tube if its end is less than a height $H$ below the free water surface; this follows from the same derivation as Jurin's law, with the surface tension acting to hold the water in the tube. So water only falls out of (c).
[2] Problem 28. A soap bubble of radius $R$ and surface tension $\gamma$ has a small tube of radius $r \ll R$ passing through its surface. If the air has density $\rho$, find the rate of decrease of $R$.

Solution. This is an adaptation of a 2006 Russian Olympiad question, with some unnecessary assumptions removed. Let $v$ be the speed of the air as it moves through the tube. Since the tube is thin, the air speed is only significant in and near the tube itself. After the air exits the tube, it spreads out, and before it enters the tube it gradually converges. Thus, within most of the bubble's volume, the air speed is negligible. The pressure at the outside of the tube is $P _ { \text {atm } }$, and the pressure throughout most of the bubble is $P _ { \text {atm } } + 4 \gamma / R$ by the Young-Laplace equation from M2.

Thus, applying Bernoulli's principle between a point near the middle of the bubble and a point near the exit of the tube, we find

$$
v = \sqrt { \frac { 2 \Delta P } { \rho } } = \sqrt { \frac { 8 \gamma } { \rho R } } .
$$

By mass conservation,

$$
\left| \frac { d R } { d t } \right| \left( 4 \pi R ^ { 2 } \right) = \left( \pi r ^ { 2 } \right) v
$$

from which we conclude

$$
\frac { d R } { d t } = - \frac { r ^ { 2 } } { R ^ { 2 } } \sqrt { \frac { \gamma } { 2 \rho R } } .
$$

Technically, the true answer is a bit different because the air inside the bubble is under a slightly higher pressure, and so slightly denser. But $\Delta P \ll P _ { \text {atm } }$ for any bubble you can reasonably make, so this isn't a significant source of error.
[2] Problem 29 (PPP 63). Water is stuck between two parallel glass plates. The distance between the plates is $d$, and the diameter of the trapped water disc is $D \gg d$.
![](../../../figures/solution-ocr/80366d16e08fb5dd519c600e.jpg)
In terms of the surface tension $\gamma$ of water, what is the force acting between the two plates? This effect can cause wet glass plates to stick together.


Solution. If you imagine slicing the puddle of water along a diameter, then its boundaries with the air are arcs of circles, since this minimizes the surface area. Since water perfectly wets glass, these circles are tangent to the two glass plates, which mean they have radius of curvature $d / 2$. In addition, the surface of the water has radius of curvature $D / 2$ in the orthogonal direction. Thus, by the Young-Laplace equation,

$$
\Delta P = \gamma \left( \frac { 2 } { D } - \frac { 2 } { d } \right) \approx - \frac { 2 \gamma } { d } .
$$

This lowered pressure inside the water puddle causes a "suction" force between the two plates, of magnitude

$$
F = | \Delta P | A = \pi ( D / 2 ) ^ { 2 } \frac { 2 \gamma } { d } = \frac { \gamma \pi D ^ { 2 } } { 2 d } .
$$

[3] Problem 30 (NBPhO 2009). A soap film of thickness $h = 1 \mu \mathrm {~m}$ is formed inside a ring of diameter $D = 10 \mathrm {~cm}$, and the surface tension of the film is $\gamma = 0.025 \mathrm {~N} / \mathrm { m }$. If the film is broken at the center, it will begin to fall apart; estimate the time needed for this to happen.

Solution. Like the helicopter question, this can't be solved with pure dimensional analysis, because there are four quantities $( h , D , \gamma$, and the density $\rho )$. Instead, we need to think about the dynamics. The edge of the break will expand outward, pulled by surface tension. This competes with the inertia of the film itself, and the inertia per area only depends on the combination $\rho h$. Thus, we can perform dimensional analysis on the combinations $\rho h , D$, and $\gamma$, giving

$$
t \sim \sqrt { \frac { \rho h } { \gamma } } D \sim 0.02 \mathrm {~s} .
$$

This is good enough for an estimate, but for completeness, we present a more precise solution below.
Assume the film is broken at the center, so the edge of the break will be an expanding circle of radius $r$. The surface tension will provide a force of $4 \pi r \gamma$ outwards, pulling on the mass that was originally inside the circle of $m = \rho \pi r ^ { 2 } h$. Thus, by considering forces along the radial direction (i.e. treating $r$ as a generalized coordinate in the spirit of M4), we have $F _ { r } = d p _ { r } / d t$, or

$$
4 \pi r \gamma = \frac { d m } { d t } v + m \frac { d v } { d t } = 2 \pi r v ^ { 2 } \rho h + \pi r ^ { 2 } \rho h \frac { d v } { d t } .
$$

Cleaning this up a bit, we have

$$
v _ { 0 } ^ { 2 } = v ^ { 2 } + \frac { r } { 2 } \frac { d v } { d t } , \quad v _ { 0 } = \sqrt { \frac { 2 \gamma } { \rho h } } .
$$

This equation tells us that the speed of the break quickly approaches $v _ { 0 }$ when $r$ is small. Our result for $v _ { 0 }$ is called the Taylor-Culick formula; you can see the constant speed in action in slow-motion videos. Thus, the total time taken is

$$
t \approx \frac { D / 2 } { v _ { 0 } } = \sqrt { \frac { \rho h } { 8 \gamma } } D \sim 0.01 \mathrm {~s}
$$

where we used $\rho \approx 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 }$, since soap films are mostly water.


If you want to be even more precise, we can also solve the differential equation exactly. We can get rid of the $t$-dependence entirely by writing $d v / d t = ( d v / d r ) ( d r / d t ) = v d v / d r$, giving

$$
v _ { 0 } ^ { 2 } = v ^ { 2 } + \frac { r v } { 2 } \frac { d v } { d r } .
$$

Separating and integrating yields

$$
\int \frac { d r } { r } = \int \frac { d v } { 2 } \frac { v } { v _ { 0 } ^ { 2 } - v ^ { 2 } } .
$$

The broken part starts with $v = 0$ and small radius $r _ { 0 }$. Then, integrating and simplifying gives

$$
v ( r ) = v _ { 0 } \sqrt { 1 - \left( r _ { 0 } / r \right) ^ { 4 } }
$$

which indicates that once $r$ becomes larger than the tiny value $r _ { 0 }$, the velocity rapidly approaches $v _ { 0 }$, as stated above. You can go a step further, integrating to find $r ( t )$, but the result is a hypergeometric function, which isn't very enlightening.
