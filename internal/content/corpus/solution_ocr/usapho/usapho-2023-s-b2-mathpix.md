---
id: solution-ocr-usapho-2023-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2023-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question B2
Fast and Furious
A space program wants to accelerate a spaceship of final mass $m = 100 \mathrm {~kg}$ to relativistic speeds to observe distant stars. They have two proposals to evaluate.

a. Their first proposal is to use traditional rocket propulsion. A rocket of initial mass $m _ { 0 }$ and final mass $m$ that expels propellant with exhaust speed $u$ relative to the rocket will reach a speed
$$
v = u \ln \left( \frac { m _ { 0 } } { m } \right) .
$$
Suppose the desired final speed is $v _ { f } = 3 c / 5$. In the subparts below, neglect relativistic effects and give your answers in the form $10 ^ { n }$, where $n$ has at least two significant figures.
    i. If the rocket has exhaust speed $u = 3.5 \mathrm {~km} / \mathrm { s }$, what must its starting mass be in kilograms?
Solution
Plugging in the numbers gives
$$
m _ { 0 } = m e ^ { v _ { f } / u } = 100 \mathrm {~kg} \cdot e ^ { 0.6 \times 3 \times 10 ^ { 8 } / 3.5 \times 10 ^ { 3 } } \approx 10 ^ { 22337 } \mathrm {~kg}
$$
Equivalently, the exponent is $n = 2.2 \times 10 ^ { 4 }$.
    ii. If the propellant is exhausted at rate 7.0 kg/s, how long does the acceleration take, in centuries?
Solution
The result is
$$
t = \frac { m _ { 0 } - m } { 7.0 \mathrm {~kg} / \mathrm { s } } \approx 10 ^ { 22336 } \mathrm {~s} \approx 10 ^ { 22326 } \text { centuries. }
$$
Equivalently, the exponent is $n = 2.2 \times 10 ^ { 4 }$.
    iii. If the energy density of the fuel is $2.0 \times 10 ^ { 7 } \mathrm {~J} / \mathrm { kg }$, how much total energy is required, in Joules?
Solution
The energy required is
$$
E = \left( m _ { 0 } - m \right) \left( 2.0 \times 10 ^ { 7 } \mathrm {~J} \right) = 10 ^ { 22344 } \mathrm {~J} .
$$
Equivalently, the exponent is $n = 2.2 \times 10 ^ { 4 }$. When working with such absurdly large numbers, exponents essentially always stay unchanged.

For the rest of this problem, you should account for special relativity.

b. Another option is to use a spaceship with constant mass $m$, propelled by light produced by lasers on Earth, with total power $P = 6 \times 10 ^ { 12 } \mathrm {~W}$. The light evenly impacts a sail on the spaceship, and reflects off the sail directly back towards the Earth. Neglect the orbital motion of the Earth, and give all your answers in the frame of the Earth.
    i. What is the force on the spaceship when the spaceship has speed $v$ ?
Copyright ©2023 American Association of Physics Teachers


## Solution

Let $\beta = v / c$, where $v$ is the ship's speed, and consider a piece of the beam with total momentum $d p _ { x }$, in the Earth's frame. In the ship's frame, this momentum is $d p _ { x } ^ { \prime } =$ $\gamma ( 1 - \beta ) d p _ { x }$, and after the collision the momentum simply flips sign, $d p _ { x f } ^ { \prime } = - d p _ { x } ^ { \prime }$. Thus, transforming back to the Earth's frame, the final momentum is $d p _ { x f } = - \gamma ^ { 2 } ( 1 - \beta ) ^ { 2 } d p _ { x }$. The change of the spaceship's momentum, still in the Earth's frame, is the difference

$$
d P _ { x } = - \left( d p _ { x f } - d p _ { x } \right) = \frac { 2 } { 1 + \beta } d p _ { x }
$$

To find the force on the spaceship, we need to find the rate at which the beam impacts the spaceship. Accounting for the spaceship's motion, it is $d p _ { x } = \frac { P } { c } ( 1 - \beta ) d t$, so

$$
F = \frac { d P _ { x } } { d t } = \frac { 2 P } { c } \frac { 1 - \beta } { 1 + \beta } .
$$

Alternative solution: In the Earth's frame, if the photons in the incident beam have frequency $f _ { i }$, then they are reflected with frequency

$$
f _ { f } = \sqrt { \frac { 1 - \beta } { 1 + \beta } } \sqrt { \frac { 1 - \beta } { 1 + \beta } } f _ { i } = \frac { 1 - \beta } { 1 + \beta } f _ { i }
$$

where we applied the relativistic Doppler shift formula twice, since the photons are first absorbed by the moving rocket and then reemitted by it. Applying conservation of momentum, and using the fact that the momentum of a photon is related to its energy by $E = h f = p c$, we have

$$
F = \frac { d N } { d t } \frac { h } { c } \left( f _ { i } + f _ { f } \right) = \frac { d N } { d t } \frac { h f _ { i } } { c } \frac { 2 } { 1 + \beta }
$$

where $d N / d t$ is the rate at which photons collide with the sail. It is related to the rate at which photons are emitted from the source on Earth, $d N _ { \mathrm { em } } / d t$, by

$$
\frac { d N } { d t } = ( 1 - \beta ) \frac { d N _ { \mathrm { em } } } { d t } .
$$

Finally, since the power of the laser is $P = \left( d N _ { \mathrm { em } } / d t \right) \left( h f _ { i } \right)$, we have

$$
F = \frac { 2 P } { c } \frac { 1 - \beta } { 1 + \beta } .
$$

ii. How long will it take to accelerate the spaceship to speed $v _ { f } = 3 c / 5$, in seconds? You may use the integrals on the reference sheet.

## Solution


In the Earth's frame, the relativistic momentum of the spaceship obeys

$$
d P _ { x } = m c d \left( \frac { \beta } { \sqrt { 1 - \beta ^ { 2 } } } \right) = m c \frac { d \beta } { \left( 1 - \beta ^ { 2 } \right) ^ { 1.5 } }
$$

Combining this with our expression for the force gives

$$
\frac { 2 P } { m c ^ { 2 } } d t = \frac { d \beta } { ( 1 - \beta ) ^ { 2 } \sqrt { 1 - \beta ^ { 2 } } }
$$

Integrating both sides and using an integral on the reference sheet gives

$$
\frac { 2 P } { m c ^ { 2 } } t = \int _ { 0 } ^ { 0.6 } \frac { d \beta } { ( 1 - \beta ) ^ { 2 } \sqrt { 1 - \beta ^ { 2 } } } = \frac { 5 } { 3 }
$$

Therefore, the time is

$$
t = \frac { 5 m c ^ { 2 } } { 6 P } = \frac { 4.5 \times 10 ^ { 19 } } { 3.6 \times 10 ^ { 13 } } = 1.3 \times 10 ^ { 6 } \mathrm {~s}
$$

iii. At the moment the spaceship reaches this speed, how much total energy has been used to power the lasers, in Joules?

## Solution

The energy is just $5 m c ^ { 2 } / 6$ from the result in the previous problem, so we get $7.5 \times 10 ^ { 18 } \mathrm {~J}$. For reference, the US consumes roughly $10 ^ { 16 } \mathrm {~J}$ of electricity per day. For more discussion of this propulsion method, see this paper.

The following results from relativity may be helpful:

- The Lorentz factor is defined as $\gamma = 1 / \sqrt { 1 - v ^ { 2 } / c ^ { 2 } }$.
- An object of mass $m$ and velocity $\mathbf { v }$ has momentum $\mathbf { p } = \gamma m \mathbf { v }$ and energy $E = \gamma m c ^ { 2 }$. The force is defined by $\mathbf { F } = d \mathbf { p } / d t$.
- The momentum and energy of light are related by $E = p c$.
- In a frame $S ^ { \prime }$ with velocity $v \hat { \mathbf { x } }$ relative to a frame $S$, the energy and momentum are
$$
E ^ { \prime } = \gamma \left( E - v p _ { x } \right) , \quad p _ { x } ^ { \prime } = \gamma \left( p _ { x } - v E / c ^ { 2 } \right) .
$$
