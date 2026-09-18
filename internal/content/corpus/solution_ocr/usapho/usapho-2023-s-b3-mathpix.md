---
id: solution-ocr-usapho-2023-s-b3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2023-b3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B3

## Starry Messengers

In 1987, light from supernova SN1987A was detected by telescopes on Earth. The supernova occurred in the Large Magellanic Cloud, a distance $d = 1.5 \times 10 ^ { 21 } \mathrm {~m}$ away, making it the closest in centuries. Observations of this event tell us a remarkable amount about elementary particles.

a. Both light and neutrinos were produced in the core of the supernova. Neutrinos are elementary particles which interact extremely weakly with ordinary matter. Detectors on Earth saw a few dozen of these neutrinos, in a burst which occurred about $T = 3$ hours before the light arrived.
    i. One explanation of these observations is that the neutrinos' speed $v$ was faster than the speed of light $c$, violating special relativity. If this is the case, find $v - c$ in m/s.

## Solution

If the light took a time $t$ to arrive at the Earth, then $c t = v ( t - T ) = d$. Approximately solving for $v - c$, using the fact that $v$ is very close to $c$, gives

$$
v - c = \frac { c ^ { 2 } T } { d } = 0.65 \mathrm {~m} / \mathrm { s } .
$$

ii. Another explanation is that the light was slowed down by the gas in the solar system, while the neutrinos always moved at speed $c$. Suppose the solar system has a uniform index of refraction $n$ within a radius $D = 10 ^ { 13 } \mathrm {~m}$. What would $n$ have to be to explain the time delay?

## Solution

The time delay is $T = ( n - 1 ) D / c$, and plugging in the numbers gives $n = 1.3$. Given how thin the gas in the solar system is, such a large value is implausible.

Neither of these explanations seem plausible; the modern accepted explanation is that the light was trapped for some time inside the supernova, while the neutrinos were able to leave immediately. Therefore, for the rest of this problem you should assume special relativity holds. The results listed on the previous page may be helpful.

The neutrinos did not all arrive at once. The first arrived with an energy of about $E _ { 1 } = 40 \mathrm { MeV }$, and the last arrived about $t = 10 \mathrm {~s}$ later with an energy of about $E _ { 2 } = 20 \mathrm { MeV }$.

b. One explanation of these observations is that neutrinos have a small mass $m$, so that when they have energy $E \gg m c ^ { 2 }$, their speed $v$ is slightly slower than the speed of light.
i. Find an approximate expression for $c - v$, to leading nontrivial order in $m c ^ { 2 } / E$.

## Solution

We start with the equation for relativistic energy:

$$
E = \gamma m c ^ { 2 }
$$

where $\gamma$ is the Lorentz factor defined as: $\gamma \equiv \frac { 1 } { \sqrt { 1 - \beta ^ { 2 } } }$ where $\beta \equiv \frac { v } { c }$.


Let $\beta = 1 - \delta$, where $\delta \ll 1$. Then,

$$
\gamma \approx \frac { 1 } { \sqrt { 1 - 1 + 2 \delta } } \Longrightarrow \delta \approx \frac { 1 } { 2 \gamma ^ { 2 } } .
$$

Note that $\delta = 1 - v / c$, so

$$
c - v = c \delta \approx \frac { c } { 2 \gamma ^ { 2 } } = \frac { m ^ { 2 } c ^ { 5 } } { 2 E ^ { 2 } }
$$

ii. Using the information above, numerically estimate the neutrino mass $m$, in units of $\mathrm { eV } / c ^ { 2 }$.

## Solution

We compute a relationship between $v _ { 1 }$ and $v _ { 2 }$, the velocities of the first and second set of neutrinos, using the time delay. From the same equation as 1(a),

$$
v _ { 1 } - v _ { 2 } = \frac { 10 \mathrm {~s} \times c ^ { 2 } } { d } = 6 \times 10 ^ { - 4 } \mathrm {~m} / \mathrm { s } .
$$

We have

$$
c - v _ { 1 } \approx \frac { m ^ { 2 } c ^ { 5 } } { 2 E _ { 1 } ^ { 2 } } , \quad c - v _ { 2 } \approx \frac { 2 m ^ { 2 } c ^ { 5 } } { E _ { 1 } ^ { 2 } } .
$$

Then,

$$
v _ { 1 } - v _ { 2 } = \frac { 3 m ^ { 2 } c ^ { 5 } } { 2 E _ { 1 } ^ { 2 } }
$$

Solving for $m$ gives

$$
m = \sqrt { \frac { 2 \left( v _ { 1 } - v _ { 2 } \right) } { 3 c } } \frac { E _ { 1 } } { c ^ { 2 } } = 46 \mathrm { eV } / \mathrm { c } ^ { 2 } .
$$

c. Another explanation is that the neutrinos did not travel in straight lines, but rather were deflected by the intergalactic magnetic field. Suppose this field is uniform, $B = 10 ^ { - 13 } \mathrm {~T}$, and directed perpendicular to the line joining Earth and the supernova, and that neutrinos have charge $q = \epsilon e$.
i. If a neutrino has momentum $p$, then in the presence of the magnetic field, it travels in a circle of radius $r = p / ( q B ) \gg d$, and its path to the Earth has a total length $\ell$. Find an approximate expression for $\ell - d$, to leading nontrivial order in $d / r$.

## Solution

We are computing the difference between the arc length of a small arc and the distance connecting the endpoints. If the arc length is $\ell$, the angle subtended is $\theta = \ell / r$. The distance connecting the end points is

$$
d = 2 r \sin ( \theta / 2 ) = 2 r \sin \left( \frac { \ell } { 2 r } \right) .
$$


Then, Taylor expanding the sine gives

$$
\ell - d \approx \ell - \ell + \frac { \ell ^ { 3 } } { 24 r ^ { 2 } } = \frac { \ell ^ { 3 } } { 24 r ^ { 2 } } \approx \frac { d ^ { 3 } } { 24 r ^ { 2 } }
$$

ii. Using the information above, and assuming the neutrino mass is very small so that the effect in part b is negligible, numerically estimate $\epsilon$.

## Solution

The radius of the path is

$$
r \approx \frac { E } { q B c } .
$$

Substituting gives

$$
\ell _ { 2 } - \ell _ { 1 } = \frac { d ^ { 3 } q ^ { 2 } B ^ { 2 } c ^ { 2 } } { 8 E _ { 1 } ^ { 2 } }
$$

Then,

$$
q = \frac { 2 \sqrt { 2 } E _ { 1 } } { B c d } \left( \frac { \left( \ell _ { 2 } - \ell _ { 1 } \right) } { d } \right) ^ { 1 / 2 } = \frac { 2 \sqrt { 2 } E _ { 1 } } { B c d } \left( \frac { c \Delta t } { d } \right) ^ { 1 / 2 } \approx 3.6 \times 10 ^ { - 15 } e .
$$

Then,

$$
\epsilon \approx 3.6 \times 10 ^ { - 15 } .
$$

Since the effects of a neutrino mass and charge add, and we know neutrinos have mass, this result yields a (very strong) upper bound on the possible charge of a neutrino, which as far as we know could be exactly zero. For more about the physics of SN1987A, see this paper.
