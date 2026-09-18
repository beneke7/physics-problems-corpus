---
id: solution-ocr-usapho-2024-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2024-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

## The Muon Shot

In 2023, American particle physicists recommended developing a muon collider to investigate the nature of fundamental particles. Such a collider requires much less space then other options because of the muon's high mass $m$, which makes it easier to accelerate to a very high energy $E \gg m c ^ { 2 }$.

a. When a muon colides head-on with an antimuon, which has the same energy and mass, a new particle of mass $2 E / c ^ { 2 }$ can be produced. If the antimuon was instead at rest, what energy would the muon need to produce such a particle?

## Solution

The shortest solution involves setting $c = 1$ and using four-vectors. In the original situation, the muon and antimuon have four-momenta $p _ { 1 } ^ { \mu }$ and $p _ { 2 } ^ { \mu }$, where

$$
p _ { 1 } \cdot p _ { 2 } = ( E , p ) \cdot ( E , - p ) = E ^ { 2 } + p ^ { 2 } .
$$

To have an equivalent collision where the antimuon is at rest, we boost this configuration to the antimuon's rest frame, where $p _ { 1 } ^ { \prime \mu } = \left( E ^ { \prime } , p ^ { \prime } \right)$ and $p _ { 2 } ^ { \prime \mu } = ( m , 0 )$. The inner product of the four-vectors stays the same, so

$$
p _ { 1 } ^ { \prime } \cdot p _ { 2 } ^ { \prime } = E ^ { \prime } m = p _ { 1 } \cdot p _ { 2 } .
$$

Since $E \gg m$, we have $p ^ { 2 } \approx E ^ { 2 }$, so solving for $E ^ { \prime }$ and restoring the factors of $c$ gives

$$
E ^ { \prime } = \frac { 2 E ^ { 2 } } { m c ^ { 2 } } .
$$

This is much greater than $E$, so it is practical to accelerate the antimuon as well. Incidentally, you can also solve the problem exactly, in which case you'll get

$$
E ^ { \prime } = \frac { 2 E ^ { 2 } } { m c ^ { 2 } } - m c ^ { 2 } \approx \frac { 2 E ^ { 2 } } { m c ^ { 2 } } .
$$

Either answer is acceptable.

Unfortunately, muons and antimuons are unstable, with lifetime $\tau$. That is, if one such particle exists at time $t = 0$, then in its rest frame, the probability it has not decayed by time $t$ is $e ^ { - t / \tau }$.

b. Suppose the muons begin at rest, and are accelerated so that each muon's energy increases at a very large, constant rate $\alpha$ in the lab frame. Find the fraction $f$ of muons that have decayed by the time each muon has energy $E$, assuming $f$ is small.

## Solution

Continuing to set $c = 1$, the energy of the muon in the lab frame is $E ( t ) = \alpha t + m$, but we


also know that $E ( t ) = \gamma ( t ) m$, so that

$$
\gamma = 1 + \frac { \alpha t } { m } .
$$

The acceleration process begins at time $t = 0$, and ends at time $t _ { f } = ( E - m ) / \alpha$. Accounting for time dilation, the amount of time that elapses in the muon's frame is

$$
\tau _ { f } = \int _ { 0 } ^ { t _ { f } } \frac { d t } { \gamma } = \frac { m } { \alpha } \int _ { 0 } ^ { t _ { f } } \frac { 1 } { t + m / \alpha } = \frac { m } { \alpha } \ln \frac { E } { m } .
$$

To relate this to $f$, we note that

$$
f = 1 - e ^ { - \tau _ { f } / \tau } \approx \frac { \tau _ { f } } { \tau }
$$

where the second step uses the assumption that $f$ is small. Therefore,

$$
f = \frac { m c ^ { 2 } } { \alpha \tau } \ln \frac { E } { m c ^ { 2 } }
$$

where we restored the factors of $c$.

The collider produces a "bunch" of muons with energy $E$, uniformly distributed in a thin disc of radius $R = 10 ^ { - 6 } \mathrm {~m}$. It also simultaneously produces a similar "antibunch" of antimuons. For simplicity, model each muon and antimuon as a sphere of radius $r = 10 ^ { - 21 } \mathrm {~m}$, and suppose a muon-antimuon collision occurs whenever two such spheres touch.

c. Initially, the bunch and antibunch each contain $N = 10 ^ { 14 }$ particles. If they immediately collide head-on, what is the average number of muon-antimuon collisions, to one significant figure?

## Solution

Consider one muon and antimuon. A collision occurs when their centers are separated by less than $2 r$. Fixing the location of the muon, the probability that the antimuon is within the appropriate area is approximately $\pi ( 2 r ) ^ { 2 } / \left( \pi R ^ { 2 } \right) = ( 2 r / R ) ^ { 2 }$, since $r \ll R$. Each pair of muons and antimuons has the same chance to collide, so the expected number of collision events is

$$
\left( \frac { 2 r N } { R } \right) ^ { 2 } = 0.04 .
$$

This is much smaller than $N$, which justifies our assumption that the collision events are independent. It might seem odd for the answer to be less than 1, but this is desired, as having many collisions occur at once would make it hard to see what happens in each collision.

d. The bunch travels clockwise along a ring of circumference $\ell = 10 \mathrm {~km}$, while the antibunch travels along the same path in the opposite direction. Assume all particles maintain a constant energy $E = 10 ^ { 5 } m c ^ { 2 }$, and that the muon lifetime is $\tau = 2.2 \times 10 ^ { - 6 } \mathrm {~s}$. To one significant figure, what is the average number of muon-antimuon collisions that occur before all of the particles decay?


## Solution

If the number of particles remaining in the bunch and the antibunch is $N _ { k }$, where $k = 0$ for the first collision, then the expected number of collisions is

$$
\left( \frac { 2 r N } { R } \right) ^ { 2 } \sum _ { k = 0 } ^ { \infty } \left( \frac { N _ { k } } { N } \right) ^ { 2 } .
$$

We found above that only a small number of collisions occurs per bunch-antibunch crossing, so the decrease in $N _ { k }$ over time is almost entirely due to decay. A crossing occurs every time each bunch or antibunch traverses half of the ring, corresponding to a proper time increment

$$
\Delta \tau = \frac { \ell / ( 2 c ) } { 10 ^ { 5 } } = 1.67 \times 10 ^ { - 10 } \mathrm {~s} .
$$

Therefore, since $\tau \gg \Delta \tau$, we have

$$
\sum _ { k = 0 } ^ { \infty } \left( \frac { N _ { k } } { N } \right) ^ { 2 } = \sum _ { k = 0 } ^ { \infty } e ^ { - 2 k \Delta \tau / \tau } = \frac { 1 } { 1 - e ^ { - 2 \Delta \tau / \tau } } \approx \frac { \tau } { 2 \Delta \tau } = 6600 .
$$

The expected total number of collisions is 260, which rounds to 300.
The rough numbers given here correspond to a muon collider which would be able to probe new particles 10 times as heavy as those probed at the existing Large Hadron Collider. Roughly one in a million muon-antimuon collisions yield a Higgs boson, so that an enormous number of them can be produced for detailed study. Remarkably, such a muon collider could be smaller in size than the LHC, while other proposals involving electrons or protons would need to be about 10 times longer. However, given the muon's short lifetime, it may be very hard to create the required focused muon beams. The feasibility of this "muon shot" is currently being investigated by particle physicists around the world.
One of us (TB) thanks Nathaniel Craig, Andrew Fee and Sergo Jindariani for discussions during our work on this problem.
