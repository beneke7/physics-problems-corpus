---
id: solution-ocr-aupho-2011-s-q12
source: aupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/aupho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [aupho-2011-q12]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 12
An empty tin can has radius $r = 50 \pm 1 \mathrm {~mm}$, height $h = 150 \pm 1 \mathrm {~mm}$ and wall, base and lid of uniform thickness which lies within the range $s = 0.10 \pm 0.01 \mathrm {~mm}$. Wound around its circumference is a string, which is attached to a winch. The can is placed on a slope at angle $\theta$ to the horizontal so that the string runs up the slope as in figure 2. The winch has radius $r _ { w }$ and can be set to turn a fixed number of turns with a constant torque. Both the number of turns and torque can be adjusted. The torque applied by the winch is equal to the winch radius times the force applied to the winching string.

The can is initially held stationary and is then released, with the winch set to wind $n _ { t }$ turns of rope. The time taken $t$ is measured for a range of different torques, $\tau$. The force applied by the winching rope is related to the mass $m$ of the can and the acceleration $a$ of the centre of the can by

$$
F - m g \sin \theta = m a
$$

and also obeys the relationship

$$
r ^ { 2 } F = I \left( a + a _ { r } \right) ,
$$

where $a _ { r }$ is the acceleration of the rope and $I$ is a constant.

![](../../../figures/solution-ocr/ac187a2b740c9995c50005ba.jpg)
Figure 2: Tin can on a slope attached to a winch

a) Given that the density of tin is $\rho _ { \mathrm { Sn } } = 7.30 \times 10 ^ { 3 } \mathrm {~kg} \mathrm {~m} ^ { - 3 }$, find the mass of the tin can and its uncertainty. Also comment on whether you could easily determine the mass more accurately using common household devices.
Note that when two values are added or subtracted the uncertainty in the final value is the sum of the uncertainties of the two values. However, when two values are multiplied or divided the fractional uncertainty (the uncertainty divided by the value) of the product or quotient is the sum of the fractional uncertainties of the two values.
Solution: The mass of the tin can is the mass of the curved side plus the mass of each end piece,
$$
\begin{aligned}
m & = \rho _ { \mathrm { Sn } } \left( 2 \pi r h + 2 \pi r ^ { 2 } \right) s \\
& = 2 \pi \rho _ { \mathrm { Sn } } r ( h + r ) s \\
& = 0.0459 \mathrm {~kg} \quad .
\end{aligned}
$$

The uncertainty in the mass of the tin can is

$$
\begin{aligned}
\Delta m & = \left( \frac { \Delta r } { r } + \frac { \Delta ( h + r ) } { h + r } \frac { \Delta s } { s } \right) m \\
& = 0.13 m \\
& = 6 \times 10 ^ { - 3 } \mathrm {~kg}
\end{aligned}
$$

Hence, the mass of the tin can is $46 \pm 6 \mathrm {~g}$. The uncertainty in this value is greater than that which would be expected of most kitchen balances as they have uncertainties of around 1-5 g, so it would be easy and more accurate to just weigh the can using a kitchen balance.

b) Find combinations of the quantities $\tau$ and $t$ which may be plotted so that the data fall on a straight line and the unknowns $I$ and $\theta$ may be determined from the slope and y-intercept of a line of best fit.
Hint: a graph of $y$ vs. $x$ is linear if $y$ is the sum of a term proportional to $x$ and a constant.
Solution: The torque applied by the winch is equal to the winch radius times the force applied to the winching string, so
$$
\tau = r _ { w } F .
$$
The time $t$ is the time taken to wind a fixed number of turns $n _ { t }$ of the rope around the winch, starting from stationary. In time $t$ a length $2 \pi n _ { t } r _ { w }$ of rope is wound onto the winch. Since the force applied is constant the acceleration of the rope must also be constant and
$$
\frac { 1 } { 2 } a _ { r } t ^ { 2 } = 2 \pi n _ { t } r _ { w }
$$
The two equations given above can then be expressed in terms of $a , I$ and $\theta$ which are unknown and $\tau , t$, and other known quantities. This gives
$$
\tau - r _ { w } m g \sin \theta = r _ { w } m a ,
$$
and
$$
r ^ { 2 } \tau = r _ { w } I \left( a + \frac { 4 \pi n _ { t } r _ { w } } { t ^ { 2 } } \right) .
$$
Combining these two equations to eliminate $a$ gives
$$
\tau \left( 1 - \frac { r ^ { 2 } m } { I } \right) = r _ { w } m g \sin \theta - \frac { 4 \pi n _ { t } r _ { w } ^ { 2 } m } { t ^ { 2 } } .
$$
Hence a plot of $\tau$ vs. $1 / t ^ { 2 }$ is linear.
c) Find $I$ and $\theta$ in terms of the slope and y-intercept of the graph you suggested plotting in the previous part.
Solution: The slope of a graph of $\tau$ vs. $1 / t ^ { 2 }$ is
$$
m _ { \text {slope } } = \frac { 4 \pi n _ { t } r _ { w } ^ { 2 } m I } { r ^ { 2 } m - I } ,
$$
and its $y$-intercept is
$$
b = \frac { - r _ { w } m g \sin \theta } { r ^ { 2 } m - I } .
$$
Rearranging the equation for the slope gives
$$
I = \frac { m _ { \text {slope } } r ^ { 2 } m } { 4 \pi n _ { t } r _ { w } ^ { 2 } m + m _ { \text {slope } } }
$$

Substituting this result into the equation for the intercept and rearranging then gives

$$
\theta = \arcsin \left( - \frac { 4 \pi n _ { t } r _ { w } b } { m _ { \text {slope } } g } \right)
$$
