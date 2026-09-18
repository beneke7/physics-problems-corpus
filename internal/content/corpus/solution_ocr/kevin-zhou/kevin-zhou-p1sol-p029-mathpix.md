---
id: solution-ocr-kevin-zhou-p1sol-p029
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p029]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 29. Some more about power.

(a) Use similar reasoning to derive $P = F v$.
(b) An electric train has a power line that can deliver power $P ( x )$, where $x$ is the distance along the track. If the train starts at rest at $x = 0$, find its speed at point $x _ { 0 }$ in terms of an integral of $P ( x )$. (Hint: try to get rid of the $d t$ 's to avoid having to think about the time dependence.)

Solution. (a) First, let's use differentials. Since $P = d W / d t$, we have

$$
d W = F v d t .
$$

Using the same reasoning as before, $d W = m d \left( v ^ { 2 } \right) / 2 = m v d v$, so

$$
m v d v = m a v d t .
$$

Canceling on both sides, this simplifies to $d v = a d t$, which is clearly true. Alternatively, we can use derivatives directly. We have

$$
P = \frac { d W } { d t } = m v \frac { d v } { d t } = m v a = F v
$$


as desired.

(b) We note that
$$
d W = m v d v
$$
but we also have
$$
d W = P d t = P \frac { d t } { d x } d x = \frac { P } { v } d x
$$
where we introduced a factor of $v$ to convert $d t$ (which we don't want to deal with) to $d x$. Doing some rearrangement,
$$
\int m v ^ { 2 } d v = \int P d x
$$
Performing the integral, we have
$$
v \left( x _ { 0 } \right) = \left( \frac { 3 } { m } \int _ { 0 } ^ { x _ { 0 } } P ( x ) d x \right) ^ { 1 / 3 }
$$
In the context of drag car racing, this is called Huntington's rule.
If $P$ is constant, we must have $F \propto 1 / v$. But how can such a force arise? A car engine (or your legs, on a bicycle) turns an axle at angular velocity $\omega$ with torque $\tau$ with $P = \tau \omega$. The engine works best at a restricted range of $\omega$. So when a modern car increases its speed, the gear is automatically changed to keep $\omega$ near the optimal range. At maximum power, $P$ is fixed, so $\tau$ is roughly fixed as well, but the higher gear reduces the torque acting on the wheels, and hence the force accelerating the car.
