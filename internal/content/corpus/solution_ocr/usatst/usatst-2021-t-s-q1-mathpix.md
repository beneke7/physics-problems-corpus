---
id: solution-ocr-usatst-2021-t-s-q1
source: usatst
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usatst/2021_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usatst-2021-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 1
The Jet Stream
The jet stream is an eastward wind current that moves over the continental United States at an altitude of 23, 000 to 35, 000 feet (the range of typical cruising altitudes of commercial airlines). This strong current affects flight times significantly: flights traveling eastward fly significantly faster than flights traveling westward.

This problem consists of two independent parts. In the first part, you will consider a simple model for airplane flight. In the second part, you will determine the jet stream speed on a fictitious planet called Orb.

1. The power that a plane expends is used both to combat drag and to generate lift. Throughout this part of the problem, you may assume that the plane travels with horizontal velocity $\mathbf { v } _ { \text {rel } }$ relative to the air, the density of air is $\rho _ { \text {air } }$, the mass of the plane is $m$, and the cross-sectional area of the plane is $A _ { \mathrm { cs } }$.
    (a) The drag force on an airplane is given by
$$
\mathbf { F } _ { \mathrm { drag } } = - \frac { 1 } { 2 } c _ { d } \rho _ { \mathrm { air } } A _ { \mathrm { cs } } \left| \mathbf { v } _ { \mathrm { rel } } \right| \mathbf { v } _ { \mathrm { rel } } ,
$$
where $c _ { d }$ is the drag coefficient (which depends on the shape of the plane). Write an expression for the power expended by the airplane to combat the drag force from the air.

Solution
We have that $P = \mathbf { F } \cdot \mathbf { v }$, so

$$
P _ { \mathrm { drag } } = \frac { 1 } { 2 } c _ { d } \rho _ { \mathrm { air } } A _ { \mathrm { cs } } v _ { \mathrm { rel } } ^ { 3 } .
$$

(b) Airplanes generate lift by deflecting air downward.
    i. Estimate the air mass per unit time which is deflected by the wings of the plain.

Solution
The mass flux is given by $\rho v _ { \text {rel } }$, so the rate is

$$
\rho _ { \text {air } } v _ { \text {rel } } A _ { \mathrm { cs } } .
$$

ii. Estimate the power expended by the plane for lift.

Solution
Suppose the deflected air has velocity $u$ downward. Then the lift force is given by

$$
m g = \rho v _ { \mathrm { rel } } A u .
$$

The power is given by

$$
P = F u = \frac { m ^ { 2 } g ^ { 2 } } { \rho _ { \mathrm { air } } v _ { \mathrm { rel } } A _ { \mathrm { cs } } } .
$$


This is the power that goes into accelerating the air downward, so by energy conservation it must have come from the plane's engine.
(c) Estimate the speed at which an airplane flies relative to the air by minimizing the power expended by the plane. To get a numeric answer, you may use the following parameters:
$$
m _ { \text {plane } } \sim 8 \times 10 ^ { 4 } \mathrm {~kg} , \quad \rho _ { \text {air } } \sim 1 \mathrm {~kg} / \mathrm { m } ^ { 3 } , \quad c _ { d } \sim 10 ^ { - 2 } , \quad A _ { \mathrm { cs } } \sim 100 \mathrm {~m} ^ { 2 } .
$$

## Solution

The total power is given by

$$
P \sim \frac { m ^ { 2 } g ^ { 2 } } { \rho _ { \mathrm { air } } v _ { \mathrm { rel } } A _ { \mathrm { cs } } } + \frac { 1 } { 2 } c _ { d } \rho A _ { \mathrm { cs } } v _ { \mathrm { rel } } ^ { 3 } .
$$

The minimum power occurs when the derivative vanishes, which roughly gives

$$
v _ { \mathrm { rel } } \sim \left( \frac { m ^ { 2 } g ^ { 2 } } { c _ { d } \rho ^ { 2 } A ^ { 2 } } \right) ^ { 1 / 4 } \sim 300 \mathrm {~m} / \mathrm { s } .
$$

Next, we estimate the jet stream speed using flight times. Because the jet stream speed on Earth varies greatly with location, time of year, and climate effects (such as El Niño and La Niña), you will instead consider the fictitious planet Orb, where the jet stream is eastward and uniform in the region of interest. At the end of the problem is a map of the region, whose area is much smaller than the surface area of Orb (i.e., you can neglect the curvature of Orb).
2. At cruising altitude, we asume all airplanes travel at a fixed speed $v _ { \text {rel } }$ relative to the air. (This is not necessarily the same as your answer to 1(c), which was just a rough estimate.) Additionally, we assume that flights occur in three stages - (1) taxi and takeoff, (2) flight at cruising altitude, (3) landing and taxi - and that stages (1) and (3) take a fixed total time $t _ { 0 }$ for every flight.

(a) Suppose a plane, at cruising altitude, is traveling at an angle $\theta$ away from due east relative to the ground. What is the speed of the plane relative to the ground? Give your answer in terms of $v _ { \text {rel } } , \theta$, and $v _ { w }$, the speed of the jet stream relative to the Earth's surface.

## Solution

The velocity of the plane relative to the ground, $\mathbf { v }$, the velocity of the plane relative to the air, $\mathbf { v } _ { \text {rel } }$, and the jet stream velocity, $\mathbf { v } _ { w }$, all form a triangle under tip-tail addition. Then, from law of cosines,

$$
v _ { \mathrm { rel } } ^ { 2 } = v ^ { 2 } + v _ { w } ^ { 2 } - 2 v v _ { w } \cos \theta .
$$

Solving gives us

$$
v = v _ { w } \cos \theta + \sqrt { v _ { \mathrm { rel } } ^ { 2 } - v _ { w } ^ { 2 } \sin ^ { 2 } \theta } .
$$

Of course, we assumed $v _ { w } < v _ { \text {rel } }$, as otherwise flying westward would not even be possible.

(b) If the plane travels a distance $D$, what is the total travel time $t$, including taxi, takeoff, and landing?


## Solution

The answer is given by

$$
t = \frac { D } { v } + t _ { 0 } ,
$$

where $v$ is our answer to the previous part.

(c) Below, we present some data on airplane flights on Planet Orb. Each of the flight times shown below has an independent uncertainty of $\Delta t = 5 \mathrm {~min}$. From the data and the map, determine $v _ { w }$ and $v _ { \text {rel } }$, giving your answers in km per hour with uncertainties. Indicate clearly what two quantities you are plotting against each other on each graph that you plot.

| Departure City | Arrival City | $t$ (min) |
| :--- | :--- | :--- |
| Noethersville | Rubinstead | 185 |
| Rubinstead | Noethersville | 286 |
| Curieton | Franklinport | 107 |
| Franklinport | Curieton | 244 |
| Planck Town | Maxwellbury | 143 |
| Maxwellbury | Planck Town | 256 |
| Rubinstead | Boltzmannburg | 92 |
| Boltzmannburg | Rubinstead | 190 |
| Einsteinopolis | Maxwellbury | 160 |
| Maxwellbury | Einsteinopolis | 384 |
| Planck Town | Franklinport | 128 |
| Franklinport | Planck Town | 266 |
| Einsteinopolis | Franklinport | 188 |
| Franklinport | Einsteinopolis | 431 |
| Boltzmannburg | Maxwellbury | 135 |
| Maxwellbury | Boltzmannburg | 150 |


| Departure City | Arrival City | $t$ (min) |
| :--- | :--- | :--- |
| Noethersville | Einsteinopolis | 68 |
| Einsteinopolis | Noethersville | 74 |
| Franklinport | Newton City | 144 |
| Newton City | Franklinport | 129 |
| Curieton | Rubinstead | 186 |
| Rubinstead | Curieton | 175 |
| Planck Town | Curieton | 95 |
| Curieton | Planck Town | 102 |
| Planck Town | Rubinstead | 249 |
| Rubinstead | Planck Town | 250 |


## Solution

Note that the pairs of cities given in the second table are directly north/south of each other. For such cities, we expect the times in either direction to be equal, up to the timing uncertainty, and the expression for the time simplifies to

$$
t _ { N S } = \frac { D } { \sqrt { v _ { \mathrm { rel } } ^ { 2 } - v _ { w } ^ { 2 } } } + t _ { 0 }
$$

We can read $t _ { N S }$ off the second table, and calculate $D$ from the figure. The unknown quantity $t _ { 0 }$ goes into the intercept, while the slope is

$$
\frac { 1 } { \sqrt { v _ { \mathrm { rel } } ^ { 2 } - v _ { w } ^ { 2 } } } = 0.0768 \pm 0.0048 \mathrm {~min} / \mathrm { km } .
$$

Next, consider the pairs of cities given in the second table. We can cancel out the effect of $t _ { 0 }$ by considering the difference in flight times in the two directions,

$$
t _ { 12 } - t _ { 21 } = - \frac { D } { v _ { w } \cos \theta + \sqrt { v _ { \mathrm { rel } } ^ { 2 } - v _ { w } ^ { 2 } \sin ^ { 2 } \theta } } + \frac { D } { - v _ { w } \cos \theta + \sqrt { v _ { \mathrm { rel } } ^ { 2 } - v _ { w } ^ { 2 } \sin ^ { 2 } \theta } } .
$$

After some simplification, we find

$$
t _ { 12 } - t _ { 21 } = \frac { 2 D v _ { w } \cos \theta } { v _ { \mathrm { rel } } ^ { 2 } - v _ { w } ^ { 2 } }
$$

Therefore, plotting the time difference versus $D \cos \theta$, where $\theta$ can also be measured from the graph, gives

$$
\frac { 2 v _ { w } } { v _ { \mathrm { rel } } ^ { 2 } - v _ { w } ^ { 2 } } = 0.0722 \pm 0.0003 \mathrm {~min} / \mathrm { km } .
$$

Combining these results gives the answers,

$$
v _ { \text {rel } } = 860 \pm 50 \mathrm {~km} / \mathrm { h } , \quad v _ { w } = 370 \pm 30 \mathrm {~km} / \mathrm { h } .
$$

Uncertainty on the times should be propagated through the calculation using the usual rules, while the uncertainties on the slopes are found by drawing the steepest and shallowest fit lines.


![](../../../figures/solution-ocr/9791823c1ba24d3016682bb2.jpg)
Einsteinopolis
Noethersville
200 km
Rubinstead
Curieton
Planck Town
Boltzmannburg
Newton City
Maxwellbury
Franklinport
