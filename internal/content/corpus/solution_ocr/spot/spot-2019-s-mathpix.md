---
id: solution-ocr-spot-2019-s
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
canonical_solution: false
---
# Singapore Physics Olympiad Training (SPOT) - Marker's report for 2019 selection test

Zhiming Darren TAN

fengjiahai
April 4, 2019

## 1 Feynman crank

This problem in mechanics is well-discussed in Feynman's book as an example to build physical intuition.
The key is to realise that each arm can only exert forces parallel to their length because the pivots are frictionless. This can be proven by taking moments about the pivots.

The other important element to keep clear in your mind is the distinction between velocity and acceleration.

$$
\begin{equation*}
F = \frac { m g } { 2 } \frac { \sqrt { L ^ { 2 } - h ^ { 2 } } } { h } \tag{a}
\end{equation*}
$$

Some failed to notice the constant $L$ introduced in the text of the problem, and left answers in terms of angles. Some careless mistakes in the trigonometry and algebra were also observed.

$$
\begin{equation*}
\frac { 1 } { 2 } u \tag{b}
\end{equation*}
$$

By symmetry, the block will move with half the speed of the wheel.
1(b)(ii) The block accelerates vertically. The vertical velocity is upwards, but the acceleration is downwards. You can get an intuition about this by thinking about how quickly the (vertical) velocity of the block changes when the arms are almost horizontal versus when the arms are almost vertical.

Many explanations about the difference in the force were not fully satisfactory, as the link was not made specifically to acceleration rather than to velocity.

$$
\begin{equation*}
v = \frac { u L } { 2 h } \tag{b}
\end{equation*}
$$

The actual velocity is in the tangential direction, so the expression is most easily obtained by considering that the horizontal velocity $\frac { u } { 2 }$ is a component of the tangential velocity. The angles are a bit tricky, especially if you do not draw your own diagram. The diagram provided has the angles close to $\pi / 4$, which can lead to confusion between sines and cosines.

$$
\begin{equation*}
a _ { \text {radial } } = \frac { v ^ { 2 } } { L } = \frac { u ^ { 2 } L } { 4 h ^ { 2 } } \tag{b}
\end{equation*}
$$


Since we know that the actual acceleration is in the vertical direction from 1(b)(ii), this radial acceleration is a component of the acceleration.

$$
\begin{gather*}
a = a _ { \text {radial } } \frac { L } { h } = \frac { u ^ { 2 } L ^ { 2 } } { 4 h ^ { 3 } } \\
F = \frac { m } { 2 } \left( g - \frac { u ^ { 2 } L ^ { 2 } } { 4 h ^ { 3 } } \right) \frac { \sqrt { L ^ { 2 } - h ^ { 2 } } } { h } \tag{b}
\end{gather*}
$$

Surprisingly many were mixed up about the signs in this last part. The acceleration of the block should be linked to the resultant force on the block, and the weight of the block is opposite in direction to the upward force from the arms.
[The original question I had in mind would have gone on to energy considerations, but this was omitted to keep the test shorter.]

## 2 Some Puzzles

Some of these problems (parts a and b) were taken with minor adaptations from IPhO 1996 (Norway). Please refer to the solutions provided if you need further detail.

$$
\begin{equation*}
0.5 \Omega \tag{a}
\end{equation*}
$$

Most could handle this question by redrawing the circuit. Some left out the units.

$$
\begin{equation*}
C ( T ) = \frac { 4 P } { a T _ { 0 } ^ { 4 } } T ^ { 3 } \tag{b}
\end{equation*}
$$

Most could handle this question, though many lost marks by leaving the final answer for $C ( T )$ in terms of time $t$ without converting it into temperature $T$. Some used inverted or otherwise incorrect definitions of heat capacity.

$$
\begin{gather*}
v = 2.82 \times 10 ^ { 8 } \mathrm {~m} \mathrm {~s} ^ { - 1 }  \tag{c}\\
p = 7.60 \times 10 ^ { - 22 } \mathrm {~kg} \mathrm {~m} \mathrm {~s} ^ { - 1 }
\end{gather*}
$$

This problem has to be treated relativistically. A common mistake was forgetting to factor in the rest mass of the electron.

2(d) Most could prove this using conservation of relativistic energy and momentum. There were nice arguments about considering the process from both the laboratory frame and the rest frame of the pion. Some explanations involving the transverse velocity were not explicit about its invariance under the Lorentz transformation.

$$
\begin{equation*}
I _ { 0 } = \frac { V _ { 0 } } { \sqrt { R ^ { 2 } + \left( \omega L - \frac { 1 } { \omega C } \right) ^ { 2 } } } \tag{e}
\end{equation*}
$$

Most could do this questions using complex impedance and finding the magnitude of the complex current, though there were a surprising number who made algebraic mistakes (e.g. wrong signs).


We expected commentary on the phenomenon of resonance for a series RLC circuit, when $\omega = 1 / \sqrt { L C }$, and were pleased to see that some students also discussed limiting behaviour at small and large $\omega$.

## 3 Some Predictions

These problems were taken with minor adaptations from IPhO 1997 (Canada). Please refer to the solutions provided if you need further detail.

3(a)

$$
\sqrt { 2 } f
$$

Most had no difficulties with this. As it is easy to get confused, it is important to know how to derive, from first principles, the effective spring constants for springs in parallel and in series.

3(b)

$$
4.13 P _ { 0 }
$$

The key is to figure out the mechanism to achieve lift, pushing air down to balance the weight. The subtlety involved is that the velocity of the air pushed down cannot be assumed to be constant, and neither can it be assumed to scale directly with the linear dimension of the helicopter.

3(c)

$$
1.2352 \mathrm {~kg} \mathrm {~m} ^ { - 3 }
$$

The argument is subtle. Consider system where $V , p , T$ constant. Assuming an ideal gas, this means that the number of particles $N$ is the same (conclusion 1 ). The density is proportional to the mean molar mass $M$ (conclusion 2), because the number of particles in a fixed volume is the same based on conclusion 1.

We can form an equation based on conclusion 1, and from the information given about the proportion of water vapour by mass:

$$
\frac { M } { 28.8 } = 0.02 \frac { M ^ { \prime } } { 18 } + 0.98 \frac { M ^ { \prime } } { 28.8 }
$$

We can form another equation based on conclusion 2:

$$
\frac { \rho _ { \text {dry } } } { \rho _ { \text {moist } } } = \frac { M } { M ^ { \prime } }
$$

Plug the first equation into the second to solve.
3(d)

$$
T _ { 1 } = 288.4 \mathrm {~K}
$$

The key idea is the balance of power coming from the Sun and being emitted by the Earth. The power from the Sun varies as $1 / r ^ { 2 }$, while the power emitted varies as $T ^ { 4 }$.

## 4 Classical Hall Effect

This problem was taken with minor adaptations from IPhO 1985 (Yugoslavia). Please refer to the solutions provided if you need further detail.

4(a)

$$
v = 25 \mathrm {~m} \mathrm {~s} ^ { - 1 }
$$


Some were confused about the direction of the current flow, which is parallel to edge $a$ as stated in the question. The idea is that in the steady-state, there will be some charge build-up to balance the Lorentz (magnetic) force.

$$
\begin{align*}
E _ { \| } & = \frac { v } { \mu } = 3.2 \mathrm {~V} \mathrm {~m} ^ { - 1 }  \tag{b}\\
E _ { \perp } & = v B = 2.5 \mathrm {~V} \mathrm {~m} ^ { - 1 }
\end{align*}
$$

The magnitude is $4.06 \mathrm {~V} \mathrm {~m} ^ { - 1 }$ and the angle is $38 ^ { \circ }$ from the edge $a$.
Some students were confused by the geometry, mixing up $a$ and $b$ and $c$.

$$
\begin{equation*}
\Delta V = b E _ { \perp } = 0.025 \mathrm {~V} \tag{c}
\end{equation*}
$$

$$
\begin{gather*}
\Delta V = \frac { I _ { 0 } B _ { 0 } } { n c e } \sin ( \omega t ) \sin ( \omega t + \delta )  \tag{~d}\\
( \Delta V ) _ { D C } = \frac { 1 } { 2 } \frac { I _ { 0 } B _ { 0 } } { n c e } \cos ( \delta )
\end{gather*}
$$

This involved substitution into the same formula as part (c) and then simplifying using the trigonometric sum-product formulae for addition and subtraction of angles.

$$
\sin ( \omega t + \delta ) = \sin ( \omega t ) \cos \delta + \cos ( \omega t ) \sin \delta
$$

The term $\sin ( \omega t ) \cos ( \omega t )$ will go as $\frac { 1 } { 2 } \sin ( 2 \omega t )$, which is purely oscillatory, while the term $\sin ^ { 2 } ( \omega t )$ goes as $\frac { 1 } { 2 } ( 1 - \cos ( 2 \omega t ) )$, which has a constant term.

The meaning of "DC component" in this case is not the root-mean-square (rms) value. The rms value is rather the DC-equivalent current that would produce the same heating effect in a resistor.

## 5 Spinning Ring

This problem was taken with minor adaptations from IPhO 2000 (Great Britain). Please refer to the solutions provided if you need further detail.

This was a very challenging problem, as there was little guidance. Some students made good progress in identifying the key pieces of physics involved, and were able to work through the mathematics thereafter.

The problem involves concepts from electromagnetism and also rotational motion. An analysis of the energy shifted from rotational kinetic energy to resistive heating of the wire would likely be the simplest route to an answer.

Some students used the result for the torque on a magnetic dipole instead of setting up an integral along the loop, which would bypass some of the mathematics in considering infinitesimal bits of the loop.

The easiest way to derive the moment of inertia for the ring in this problem was via the perpendicular axis theorem (which applies only for planar objects!).

Refer to the IPhO solutions (which come in two versions) for details.


## 6 BKT Transition

You are well advised to read up Wikipedia and other accounts of the BKT transition, including materials related to the Nobel Prize in Physics 2016, to get a flavour of the physics and mathematics involved. Part (b) of this question was adapted largely from the discussion here.

6(a)

$$
Q = 2 \pi n , n = 0 , \pm 1 , \pm 2 , \ldots
$$

The basic idea is that the angle must turn through an integer multiple of $2 \pi$ when it goes back to the starting point. Some forgot to mention that $n = 0$ was allowed.

6(b)(i)

$$
\vec { f } = \frac { - y } { x ^ { 2 } + y ^ { 2 } } \hat { x } + \frac { x } { x ^ { 2 } + y ^ { 2 } } \hat { y }
$$

Apologies for the technical flaw in the question, the inverse tangent is not quite the correct description in all quadrants.
This function $\vec { f }$ is actually known as the gradient of $\theta$ in the language of vector calculus, but you did not need to know this to do this question.

Note also that $x$ and $y$ are coordinate variables and so things like $d y / d x$ are zero.
6(b)(ii)

$$
Q = + 2 \pi
$$

Apologies for those who tried to get the answer from integration, who probably got zero due to the technical flaw. This was meant to be answered visually from the pattern.

6(b)(iii) Note that any constant-angle shift in all spins would keep $Q$ unchanged. Examples of accepted answers would be if all spins are flipped, or if the spins are each rotated by $\pi / 2$ such that they form a visual vortex field circulating either clockwise or anti-clockwise.

6(b)(iv)

$$
E = J \pi \ln L
$$

The $| \vec { f } | ^ { 2 }$ term is basically $1 / r ^ { 2 }$ in polar coordinates, so we can approximate the square lattice by a circle of radius roughly $L$ and do the integration in polar coordinates. The lower limit of the radius has to be closer to 1 rather than 0, since the lattice spacing is finite (and not zero).

6(b)(v)

$$
S = k _ { B } \ln \Omega = 2 k _ { B } \ln L
$$

The idea is that the "vortex centre" can occupy roughly $\Omega = L ^ { 2 }$ positions because that is the number of lattice sites. This is what allows us to crudely estimate the "entropy" associated with having a single vortex on the lattice.

6(b)(vi)

$$
T _ { C } = \frac { J \pi } { 2 k _ { B } }
$$

The idea is that when the lattice size is large, the $\ln L$ term is large. Thus the free energy will flip suddenly from negative infinity to positive infinity when the temperature $T$ increases from slightly below $T _ { C }$ to slightly above $T _ { C }$. This critical temperature $T _ { C }$ marks the transition point between a system with no vortex and a system with a vortex.
