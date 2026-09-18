---
id: solution-ocr-nbpho-2013-s-p3
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2013-mission-to-mars]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 3. MISSION TO MARS (7 points)

i) (1 point) We can find the orbital period of Mars from Kepler's third law $R _ { a } { } ^ { 3 } / R _ { g } { } ^ { 3 } =$ $T _ { a } { } ^ { 2 } / T _ { g } { } ^ { 2 }$, giving $t _ { t } \approx 1.87 \mathrm { yr }$.
ii) (1.5 points) Again, we can use Kepler's third law to calculate half of the orbital period.

$$
t _ { t } = \frac { T _ { g } } { 2 } \frac { \left( R _ { a } + R _ { g } \right) ^ { 3 / 2 } } { \left( 2 R _ { g } \right) ^ { 3 / 2 } } \approx 0.707 \mathrm { yr } .
$$

iii) (1.5 points) Background. $\Delta v$ is important, because the sum of all $\Delta v$ determines how much fuel is needed for a given mission. The fuel needed is exponential of total $\Delta v$ and is described by Tsiolkovsky rocket equation.

Kinetic energy per unit mass of such a transfer orbit where it intersects the Earth's orbit is $- \frac { G M _ { s } } { R _ { g } + R _ { a } } + \frac { G M _ { s } } { R _ { g } }$. Using the orbital angular speed of Earth we can substitute $G M _ { s } = \frac { 4 \pi ^ { 2 } R _ { g } ^ { 3 } } { T _ { g } }$. The speed at the beginning of the transfer orbit becomes

$$
v _ { t _ { 0 } } = \sqrt { 2 G M _ { s } \left( \frac { 1 } { R _ { g } } - \frac { 1 } { R _ { g } + R _ { a } } \right) } \approx 32.7 \mathrm {~km} / \mathrm { s }
$$

The speed in Earth's inertial frame is $v _ { t _ { 0 } } ^ { \prime } = v _ { t _ { 0 } } - v _ { g } \approx 2.94 \mathrm {~km} / \mathrm { h }$. To achive that, we first need to escape Earth's gravity, so

$$
\Delta v _ { 1 } = \sqrt { 2 \left( \frac { v _ { t _ { 0 } } ^ { \prime 2 } } { 2 } + \frac { G M _ { g } } { r _ { g } } \right) } .
$$


Using the surface gravity of Earth we can substitute $\frac { G M _ { g } } { r _ { g } } = g _ { g } r _ { g }$ so $\Delta v _ { 1 } \approx 11.2 \mathrm {~km} / \mathrm { s }$.
iv) (1.5 points) We can calculate the speed of the transfer orbit where it intersects the orbit of Mars from Kepler's second law $v _ { t _ { 1 } } =$ $v _ { t _ { 0 } } / 1.52 \approx 21.5 \mathrm {~km} / \mathrm { s }$. The speed of the spacecraft relative to Mars is $v _ { t _ { 1 } } ^ { \prime } \approx 3.25 \mathrm {~km} / \mathrm { s }$. The speed of the spacecraft once near Mars surface is

$$
v _ { t _ { m } } = \sqrt { 2 \left( \frac { v _ { t _ { 1 } } ^ { \prime } } { 2 } + r _ { a } g _ { a } \right) } \approx 5.98 \mathrm {~km} / \mathrm { s }
$$

Since the speed of low Mars orbit is $v _ { e _ { a } } =$ $\sqrt { r _ { a } g _ { a } } \approx 3.55 \mathrm {~km} / \mathrm { s }$, we need to brake for $\Delta v _ { 2 } \approx 2.43 \mathrm {~km} / \mathrm { s }$.
v) (1.5 points) The Earth-Sun-Mars angle $\alpha$ at the launch of the mission needs to be $\alpha = \pi - w _ { a } t _ { t } \approx 0.77$ for the spacecraft to reach Mars. Likewise for the return trip $\beta = \pi - w _ { g } t _ { t } \approx - 1.301$. If we go to the corotating frame of referense with earth, we can see that the minimal time between those two angles is $\frac { 2 \pi - \alpha + \beta } { w _ { a } - w _ { g } } \approx 1.96 \mathrm { yr }$. The minimal duration of the trip is therefore longer by $t _ { t }$, giving 2.67 yr.
