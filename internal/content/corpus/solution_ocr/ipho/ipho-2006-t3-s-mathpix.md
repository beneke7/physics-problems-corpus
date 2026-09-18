---
id: solution-ocr-ipho-2006-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2006/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2006-t3]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## SOLUTIONS to Theory Question 3

Digital Camera Two factors limit the resolution of the camera as a photographic tool: the diffraction by the aperture and the pixel size. For diffraction, the inherent angular resolution $\theta _ { R }$ is the ratio of the wavelength $\lambda$ of the light and the aperture $D$ of the camera,

$$
\theta _ { R } = 1.22 \frac { \lambda } { D } ,
$$

where the standard factor of 1.22 reflects the circular shape of the aperture. When taking a picture, the object is generally sufficiently far away from the photographer for the image to form in the focal plane of the camera where the CCD chip should thus be placed. The Rayleigh diffraction criterion then states that two image points can be resolved if they are separated by more than

$$
\Delta x = f \theta _ { R } = 1.22 \lambda F \sharp ,
$$

3.1

$$
\Delta x = 1.22 \mu \mathrm {~m}
$$

if we choose the largest possible aperture (or smallest value $F \sharp = 2$ ) and assume $\lambda = 500 \mathrm {~nm}$ for the typical wavelength of daylight

The digital resolution is given by the distance $\ell$ between the center of two neighboring pixels. For our 5 Mpix camera this distance is roughly

$$
\ell = \frac { L } { \sqrt { N _ { p } } } = 15.65 \mu \mathrm {~m} .
$$

Ideally we should match the optical and the digital resolution so that neither aspect is overspecified. Taking the given optical resolution in the expression for the digital resolution, we obtain
3.2

$$
N = \left( \frac { L } { \Delta x } \right) ^ { 2 } \approx 823 \mathrm { Mpix } .
$$

Now looking for the unknown optimal aperture, we note that we should have $\ell \geq \Delta x$, that is: $F \sharp \leq F _ { 0 }$ with

$$
F _ { 0 } = \frac { L } { 1.22 \lambda \sqrt { N _ { 0 } } } = 2 \sqrt { \frac { N } { N _ { 0 } } } = 14.34 .
$$


Since this $F \sharp$ value is not available, we choose the nearest value that has a higher optical resolution,
3.3

$$
F _ { 0 } = 11 .
$$

When looking at a picture at distance $z$ from the eye, the (small) subtended angle between two neighboring dots is $\phi = \ell / z$ where, as above, $\ell$ is the distance between neighboring dots. Accordingly,
3.4

$$
z = \frac { \ell } { \phi } = \frac { 2.54 \times 10 ^ { - 2 } / 300 \mathrm { dpi } } { 5.82 \times 10 ^ { - 4 } \mathrm { rad } } = 14.55 \mathrm {~cm} \approx 15 \mathrm {~cm} .
$$

Hard-boiled egg All of the egg has to reach coagulation temperature. This means that the increase in temperature is

$$
\Delta T = T _ { \mathrm { c } } - T _ { 0 } = 65 ^ { \circ } \mathrm { C } - 4 ^ { \circ } \mathrm { C } = 61 ^ { \circ } \mathrm { C } .
$$

Thus the minimum amount of energy that we need to get into the egg such that all of it has coagulated is given by $U = \mu V C \Delta T$ where $V = 4 \pi R ^ { 3 } / 3$ is the egg volume. We thus find
3.5

$$
U = \mu \frac { 4 \pi R ^ { 3 } } { 3 } C \left( T _ { \mathrm { c } } - T _ { 0 } \right) = 16768 \mathrm {~J}
$$

The simplified equation for heat flow then allows us to calculate how much energy has flown into the egg through the surface per unit time. To get an approximate value for the time we assume that the center of the egg is at the initial temperature $T = 4 ^ { \circ } \mathrm { C }$. The typical length scale is $\Delta r = R$, and the temperature difference associated with it is $\Delta T = T _ { 1 } - T _ { 0 }$ where $T _ { 1 } = 100 ^ { \circ } \mathrm { C }$ (boiling water). We thus get
3.6

$$
J = \kappa \left( T _ { 1 } - T _ { 0 } \right) / R = 2458 \mathrm { Wm } ^ { - 2 } .
$$

Heat is transferred from the boiling water to the egg through the surface of the egg. This gives


3.7

$$
P = 4 \pi R ^ { 2 } J = 4 \pi \kappa R \left( T _ { 1 } - T _ { 0 } \right) \approx 19.3 \mathrm {~W}
$$

for the amount of energy transferred to the egg per unit time. From this we get an estimate for the time $\tau$ required for the necessary amount of heat to flow into the egg all the way to the center:
3.8

$$
\tau = \frac { U } { P } = \frac { \mu C R ^ { 2 } } { 3 \kappa } \frac { T _ { \mathrm { c } } - T _ { 0 } } { T _ { 1 } - T _ { 0 } } = \frac { 16768 } { 19.3 } = 869 \mathrm {~s} \approx 14.5 \mathrm {~min} .
$$

Lightning The total charge $Q$ is just the area under the curve of the figure. Because of the triangular shape, we immediately get
3.9

$$
Q = \frac { I _ { 0 } \tau } { 2 } = 5 \mathrm { C } .
$$

The average current is
3.10

$$
I = Q / \tau = \frac { I _ { 0 } } { 2 } = 50 \mathrm { kA } ,
$$

simply half the maximal value.
Since the bottom of the cloud gets negatively charged and the ground positively charged, the situation is essentially that of a giant parallel-plate capacitor. The amount of energy stored just before lightning occurs is $Q E _ { 0 } h / 2$ where $E _ { 0 } h$ is the voltage difference between the bottom of the cloud and the ground, and lightning releases this energy. Altogether we thus get for one lightning the energy $Q E _ { 0 } h / 2 = 7.5 \times 10 ^ { 8 } \mathrm {~J}$. It follows that you could light up the 100 W bulb for the duration
3.11

$$
t = \frac { 32 \times 10 ^ { 6 } } { 6.5 \times 10 ^ { 9 } } \times \frac { 7.5 \times 10 ^ { 8 } \mathrm {~J} } { 100 \mathrm {~W} } \approx 10 \mathrm {~h} .
$$

Capillary Vessels Considering all capillaries, one has

$$
R _ { \text {all } } = \frac { \Delta p } { D } = 10 ^ { 7 } \mathrm { Pam } ^ { - 3 } \mathrm {~s} .
$$


All capillaries are assumed to be connected in parallel. The analogy between Poiseuille's and Ohm's laws then gives the hydraulic resistance $R$ of one capillary as

$$
\frac { 1 } { R _ { \mathrm { all } } } = \frac { N } { R } .
$$

We thus get

$$
N = \frac { R } { R _ { \mathrm { all } } }
$$

for the number of capillary vessels in the human body. Now calculate $R$ using Poiseuille's law,

$$
R = \frac { 8 \eta L } { \pi r ^ { 4 } } \approx 4.5 \times 10 ^ { 16 } \mathrm {~kg} \mathrm {~m} ^ { - 4 } \mathrm {~s} ^ { - 1 } ,
$$

and arrive at
3.12

$$
N \approx \frac { 4.5 \times 10 ^ { 16 } } { 10 ^ { 7 } } = 4.5 \times 10 ^ { 9 } .
$$

The volume flow is $D = S _ { \text {all } } v$ where $S _ { \text {all } } = N \pi r ^ { 2 }$ is the total cross-sectional area associated with all capillary vessels. We then get
3.13

$$
v = \frac { D } { N \pi r ^ { 2 } } = \frac { r ^ { 2 } \Delta p } { 8 \eta L } = 0.44 \mathrm {~mm} \mathrm {~s} ^ { - 1 }
$$

where the second expression is found by alternatively considering one capillary vessel by itself.

Skyscraper When the slab is at height $z$ above the ground, the air in the slab has pressure $p ( z )$ and temperature $T ( z )$ and the slab has volume $V ( z ) = A h ( z )$ where $A$ is the cross-sectional area and $h ( z )$ is the thickness of the slab. At any given height $z$, we combine the ideal gas law

$$
p V = N k T \quad ( N \text { is the number of molecules in the slab } )
$$

with the adiabatic law

$$
p V ^ { \gamma } = \mathrm { const } \quad \text { or } \quad ( p V ) ^ { \gamma } \propto p ^ { \gamma - 1 }
$$

to conclude that $p ^ { \gamma - 1 } \propto T ^ { \gamma }$. Upon differentiation this gives $( \gamma - 1 ) \frac { d p } { p } = \gamma \frac { d T } { T }$, so that


3.14

$$
\frac { d T } { T } = ( 1 - 1 / \gamma ) \frac { d p } { p }
$$

Since the slab is not accelerated, the weight must be balanced by the force that results from the difference in pressure at the top and bottom of the slab. Taking downward forces as positive, we have the net force

$$
0 = N m g + A [ p ( z + h ) - p ( z ) ] = \frac { p V } { k T } m g + \frac { V } { h } \frac { d p } { d z } h ,
$$

so that $\frac { d p } { d z } = - \frac { m g } { k } \frac { p } { T }$ or
3.15

$$
d p = - \frac { m g } { k } \frac { p } { T } d z .
$$

Taken together, the two expressions say that

$$
d T = - ( 1 - 1 / \gamma ) \frac { m g } { k } d z
$$

and therefore we have

$$
T _ { \mathrm { top } } = T _ { \mathrm { bot } } - ( 1 - 1 / \gamma ) \frac { m g H } { k }
$$

for a building of height $H$, which gives
3.16

$$
T _ { \mathrm { top } } = 20.6 ^ { \circ } \mathrm { C }
$$

for $H = 1 \mathrm {~km}$ and $T _ { \text {bot } } = 30 ^ { \circ } \mathrm { C }$.
