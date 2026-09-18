---
id: solution-ocr-izho-2014-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2014_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2014-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2 Jet propulsion (10 points)

1. Consider the rocket motion in the proper reference frame, i.e. the inertial reference frame which moves with the speed of the rocket itself relative to the laboratory reference frame. In the proper reference frame the rocket is always at rest at any given time. Let a rocket have mass $m$ at the rime moment $t$ and throw away some fuel of mass $d m$ with the velocity $u$. As a result the rocket velocity changes by $d \mathrm { v }$ and the conservation of the momentum can be written as

$$
\begin{equation*}
m d v - d m u = 0 . \tag{1}
\end{equation*}
$$

In classical mechanics, the change in the rocket velocity in the laboratory reference frame must coincide with the change in rocket velocity in the proper reference frame by virtue of the Galilean transformations. Therefore, solving equation (1) with the initial condition $m = m _ { 0 }$ at $v = 0$, we obtain the formula named after K. Tsiolkovsky


$$
\begin{equation*}
\mathrm { v } = u \ln \left( \frac { m _ { 0 } } { m } \right) . \tag{2}
\end{equation*}
$$

2. It is known that the orbital velocity at the Earth's surface is

$$
\begin{equation*}
v _ { 1 } = \sqrt { g R } , \tag{3}
\end{equation*}
$$

then from equation (2) the initial mass of the rocket is found as

$$
\begin{equation*}
m _ { 0 } = m \exp \left( \frac { v } { u } \right) = 4.87 \times 10 ^ { 3 } \mathrm {~kg} . \tag{4}
\end{equation*}
$$

3. If an external force $F$ is exerted on the rocket, then, in the proper reference frame the total momentum of the system does change, and equation (1) can be rewritten as

$$
\begin{equation*}
m d v - d m u = F d t , \tag{5}
\end{equation*}
$$

or, using the notation $\mu = - d m / d t$, we obtain

$$
\begin{equation*}
m \frac { d v } { d t } = F - \mu u . \tag{6}
\end{equation*}
$$

By virtue of the relativity principle, this equation does not change its form in any inertial frame of reference and it is called after I. Meshcherskij.

On substituting $F = m g$, we finally obtain

$$
\begin{equation*}
m \frac { d v } { d t } = m g - \mu u . \tag{7}
\end{equation*}
$$

4. Since the rocket should hung motionlessly at some height, we assume that $v = 0$. Substituting $v = 0$ in equation (7) and differentiating it over time, we get

$$
\begin{equation*}
- \mu g = \frac { d \mu } { d t } u . \tag{8}
\end{equation*}
$$

Using the initial condition $\mu ( 0 ) = m _ { 0 } g / u$, we finally find

$$
\begin{equation*}
\mu ( t ) = \frac { m _ { 0 } g } { u } \exp \left( - \frac { g t } { u } \right) . \tag{9}
\end{equation*}
$$

5. Substituting $\mathrm { v } ( t ) = A _ { 1 } t + A _ { 2 } \ln \left( 1 + A _ { 3 } t \right)$ and $m = m _ { 0 } - \mu t$ into equation (7), one gets

$$
\begin{align*}
& A _ { 1 } = - g  \tag{10}\\
& A _ { 2 } = - u  \tag{11}\\
& A _ { 3 } = - \frac { \mu } { m _ { 0 } } \tag{12}
\end{align*}
$$

6. The rockets achieves its maximum velocity if the fuel burns out almost instantaneously, and, at the same time, the work done by the gravity force, turns out minimal. Thus, the optimal fuel consumption is

$$
\begin{equation*}
\mu _ { o p t } = \infty . \tag{13}
\end{equation*}
$$

Since the gravity force does not have time to affect the rocket velocity, it turns possible to use the Tsiolkovsky formula (2)

$$
\begin{equation*}
\mathrm { v } = u \ln \left( \frac { m _ { 0 } } { m } \right) . \tag{14}
\end{equation*}
$$

Hence, the maximum height of the rocket is

$$
\begin{equation*}
H _ { \max } = \frac { u ^ { 2 } } { 2 g } \ln ^ { 2 } \left( \frac { m _ { 0 } } { m } \right) . \tag{15}
\end{equation*}
$$

7. Suppose that a particle moves with the velocity v' in the reference frame which, in turn, moves with the velocity v in the laboratory reference frame. Then, the particle velocity $w$ in the laboratory reference frame is given by the relativistic formula

$$
\begin{equation*}
w = \frac { \mathrm { v } + \mathrm { v } ^ { \prime } } { 1 + \frac { \mathrm { vv } ^ { \prime } } { c ^ { 2 } } } \tag{16}
\end{equation*}
$$

Hence, we find the relationship between the velocity changes in corresponding reference frames as

$$
\begin{equation*}
d w = \frac { \left( 1 - \frac { \mathrm { v } ^ { 2 } } { c ^ { 2 } } \right) } { \left( 1 + \frac { \mathrm { vv } ^ { \prime } } { c ^ { 2 } } \right) ^ { 2 } } d \mathrm { v } ^ { \prime } \tag{17}
\end{equation*}
$$

In accordance with the Lorentz transformations

$$
\begin{equation*}
t = \frac { t ^ { \prime } + \frac { \mathrm { v } x ^ { \prime } } { c ^ { 2 } } } { \sqrt { 1 - \mathrm { v } ^ { 2 } / c ^ { 2 } } } \tag{18}
\end{equation*}
$$

the time differences in two frames are related as

$$
\begin{equation*}
d t = d t ^ { \prime } \frac { \left( 1 + \frac { \mathrm { vv } ^ { \prime } } { c ^ { 2 } } \right) } { \sqrt { 1 - \mathrm { v } ^ { 2 } / c ^ { 2 } } } . \tag{19}
\end{equation*}
$$

Dividing equation (17) and (19) and assuming $\mathrm { v } ^ { \prime } = 0$, we finally obtain

$$
\begin{equation*}
a _ { r } = \frac { d w } { d t } = \left( 1 - \frac { \mathrm { v } ^ { 2 } } { c ^ { 2 } } \right) ^ { 3 / 2 } \frac { d \mathrm { v } ^ { \prime } } { d t ^ { \prime } } = \left( 1 - \frac { \mathrm { v } ^ { 2 } } { c ^ { 2 } } \right) ^ { 3 / 2 } a _ { p } . \tag{20}
\end{equation*}
$$

8. In the proper reference frame the rocket motion is classical, and its acceleration is given by

$$
\begin{equation*}
a _ { p } = \frac { d \mathrm { v } ^ { \prime } } { d t ^ { \prime } } = \frac { u } { m } \frac { d m } { d t ^ { \prime } } . \tag{21}
\end{equation*}
$$

Now we make use the transformation of acceleration (20) and time (19) for $\mathrm { v } ^ { \prime } = 0$ to obtain

$$
\begin{equation*}
\frac { d m } { d v } = \frac { m } { u \left( 1 - v ^ { 2 } / c ^ { 2 } \right) } . \tag{22}
\end{equation*}
$$

Hence, we find that

$$
\begin{equation*}
\alpha = \frac { c } { 2 u } . \tag{23}
\end{equation*}
$$

9. Evaluation gives rise

$$
\begin{equation*}
m _ { 0 } = m \left( \frac { 1 + \mathrm { v } / c } { 1 - \mathrm { v } / c } \right) ^ { c / 2 u } = 10 ^ { 28630 } \mathrm {~kg} . \tag{24}
\end{equation*}
$$

10. Evaluation gives rise

$$
\begin{equation*}
m _ { 0 } = m \left( \frac { 1 + \mathrm { v } / c } { 1 - \mathrm { v } / c } \right) ^ { c / 2 u } = 1730 \mathrm {~kg} . \tag{25}
\end{equation*}
$$
