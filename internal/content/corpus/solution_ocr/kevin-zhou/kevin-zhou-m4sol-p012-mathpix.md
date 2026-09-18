---
id: solution-ocr-kevin-zhou-m4sol-p012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 12. A uniform spring of spring constant $k$ and total mass $m$ is attached to the wall, and the other end is attached to a mass $M$.
(a) Show that when $m \ll M$, the oscillation's angular frequency is approximately
$$
\omega = \sqrt { \frac { k } { M + m / 3 } } .
$$
(b) [A] ★ Generalize part (a) to arbitrary values of $m / M$. (Hint: to begin, approximate the massive spring as a finite combination of smaller massless springs and point masses, as in the example in M2. It will not be possible to solve for $\omega$ in closed form, but you can get a compact implicit expression for it. Check that it reduces to the result of part (a) for small $m / M$, and interpret the results for large $m / M$. This is a challenging problem that requires almost all the techniques we've seen so far; you might want to return to it after doing section 4.)

Solution. In the $m \ll M$ case, we can assume the velocity of a piece of spring that is at position a fraction $x$ of the total length is proportional to $x$. (More precisely, accounting for nonlinear stretching of the spring would contribute at higher order.) Therefore, the total kinetic energy of the spring is

$$
\int _ { 0 } ^ { 1 } \frac { 1 } { 2 } \left( x v _ { 0 } \right) ^ { 2 } m d x = \frac { 1 } { 6 } m v _ { 0 } ^ { 2 }
$$

where $v _ { 0 }$ is the velocity of $M$, and $L$ is the current length of the spring. Therefore, the total kinetic energy is $\frac { 1 } { 2 } ( M + m / 3 ) v _ { 0 } ^ { 2 }$, so we have an effective mass of $M + m / 3$. The spring is uniformly stretched at this order, so the effective spring constant is still $k$, giving the desired result.

Part (b) is a nice exercise in dealing with continuous systems. First, as usual, we break the spring into pieces. Suppose the spring is made of $N$ masses connected with small springs, and let their displacements from equilibrium be $x _ { i }$. Each piece has mass $m / N$ and each small spring has spring constant $k N$, as established in an earlier problem. The equation of motion for each mass is

$$
\frac { m } { N } \ddot { x } _ { i } = N k \left( x _ { i - 1 } + x _ { i + 1 } - 2 x _ { i } \right) .
$$

We define $x _ { 0 } = 0$ and let $x _ { N }$ be the displacement of the mass $M$. Then its equation is different,

$$
M \ddot { x } _ { N } = N k \left( x _ { N - 1 } - x _ { N } \right) .
$$

The spring is really continuous, so we would like to take the limit $N \rightarrow \infty$. To this end, define the displacement function $x ( s , t )$ to be the continuous function with values

$$
x ( i / N , t ) = x _ { i } ( t ) .
$$

The argument $s$ ranges from 0 at the left end of the spring to 1 at the right end. We'll suppress the $t$ argument for brevity. Plugging this into the second equation above gives

$$
M \ddot { x } ( 1 ) = N k ( x ( 1 - 1 / N ) - x ( 1 ) ) = k \frac { x ( 1 - 1 / N ) - x ( 1 ) } { 1 / N } .
$$

Upon taking the limit $N \rightarrow \infty$, the fraction on the right becomes a derivative, giving

$$
M \ddot { x } ( 1 ) = - k x ^ { \prime } ( 1 )
$$

where a prime denotes a derivative with respect to $s$. Similarly, in the $N \rightarrow \infty$ limit, the quantity $N ^ { 2 } \left( x _ { i - 1 } + x _ { i + 1 } - 2 x _ { i } \right)$ becomes a second derivative (check this!), so our first equation becomes

$$
m \ddot { x } ( i / N ) = k x ^ { \prime \prime } ( i / N ) .
$$

Rearranging a bit and defining $\omega _ { 0 } = \sqrt { k / M }$, we have shown that

$$
\frac { m } { M } \frac { \ddot { x } ( s ) } { \omega _ { 0 } ^ { 2 } } = x ^ { \prime \prime } ( s ) , \quad \frac { \ddot { x } ( 1 ) } { \omega _ { 0 } ^ { 2 } } = - x ^ { \prime } ( 1 ) .
$$

Since we are looking for solutions where the whole spring oscillates uniformly with angular frequency $\omega$, we plug in the displacement $x ( s ) = \cos ( \omega t ) f ( s )$ for

$$
\frac { m } { M } \frac { \omega ^ { 2 } } { \omega _ { 0 } ^ { 2 } } f = - f ^ { \prime \prime } , \quad \frac { \omega ^ { 2 } } { \omega _ { 0 } ^ { 2 } } f ( 1 ) = f ^ { \prime } ( 1 ) .
$$


Defining $\alpha = \sqrt { m / M }$ for simplicity, solving the first equation gives

$$
f ( s ) \propto \sin \left( \alpha \omega s / \omega _ { 0 } \right)
$$

which yields the expected nonlinear stretching of the spring. The second equation says

$$
\frac { \omega ^ { 2 } } { \omega _ { 0 } ^ { 2 } } \sin \left( \alpha \omega / \omega _ { 0 } \right) = \frac { \alpha \omega } { \omega _ { 0 } } \cos \left( \alpha \omega / \omega _ { 0 } \right)
$$

or alternatively

$$
\tan \left( \alpha \omega / \omega _ { 0 } \right) = \frac { \alpha \omega _ { 0 } } { \omega } .
$$

This is equivalent to

$$
\tan \left( \frac { \omega } { \sqrt { k / m } } \right) = \frac { \sqrt { k m } } { M \omega } .
$$

There are generically infinitely many solutions for $\omega$, which correspond to the infinitely many normal modes of the spring. However, we're concerned with the lowest-frequency mode. This is the unique mode with $\alpha \omega / \omega _ { 0 } < \pi / 2$ where all the pieces of the spring are going in the same direction at the same time; it is the fundamental frequency.

The transcendental equation we have here has no closed form solution, but we can approximate it. For small $\alpha$, if we Taylor expand the tangent to third order we recover the answer to the previous problem. To see this, define $\bar { \omega } = \omega / \omega _ { 0 }$ and note that

$$
\alpha \bar { \omega } + \frac { ( \alpha \bar { \omega } ) ^ { 3 } } { 3 } = \frac { \alpha } { \bar { \omega } }
$$

which can be simplified to

$$
\frac { \alpha ^ { 2 } } { 3 } \bar { \omega } ^ { 4 } + \bar { \omega } ^ { 2 } - 1 = 0 .
$$

If we parametrize the frequency shift by $\bar { \omega } ^ { 2 } = 1 + \epsilon$, then plugging in gives

$$
\frac { \alpha ^ { 2 } } { 3 } + \epsilon + ( \text { higher order terms } ) = 0
$$

which tells us that

$$
\epsilon = - \frac { \alpha ^ { 2 } } { 3 } = - \frac { m } { 3 M }
$$

which is the same result found in part (a), to first order.
For large $\alpha$, the right-hand side is large, so the tangent must be large. The lowest frequency mode has $\alpha \bar { \omega } \approx \pi / 2$. In this case it's also useful to look at all the modes, which have $\alpha \bar { \omega } \approx ( n + 1 / 2 ) \pi$, so

$$
\omega \approx \left( n + \frac { 1 } { 2 } \right) \pi \sqrt { k / m } .
$$

To understand this, note that in this limit the mass $M$ doesn't matter; the spring acts as if it has a free end. Hence we've just found the standing wave angular frequencies for longitudinal waves with one fixed and one free end! The lowest frequency is the fundamental.

Jumping ahead a bit, we can compare this with some results from $\mathbf { W 1 }$. The wavenumbers for these boundary conditions are

$$
k _ { n } = \left( n + \frac { 1 } { 2 } \right) \pi
$$


and the wave velocity is

$$
v = \sqrt { \frac { Y } { \rho } }
$$

where $Y$ is the Young's modulus, and $\rho$ is the mass density. (If this isn't familiar, you can also derive it using dimensional analysis.) But this wave velocity can also be written as

$$
v = \sqrt { \frac { k L / A } { m / L A } } = L \sqrt { \frac { k } { m } } .
$$

Putting these two together using $\omega _ { n } = v k _ { n }$ recovers exactly the angular frequencies we found above! In other words, we have derived that the speed of sound is $v = \sqrt { Y / \rho }$.
[2] Problem 13 (PPP 77). A small bob of mass $m$ is attached to two light, unstretched, identical springs. The springs are anchored at their far ends and arranged along a straight line. If the bob is displaced in a direction perpendicular to the line of the springs by a small length $\ell$, the period of oscillation of the bob is $T$. Find the period if the bob is displaced by length $2 \ell$.

Solution. Suppose the bob is displaced by $x$ in the perpendicular direction. Then the springs are angled by $\theta \approx x / L$ to their original direction, so their change in length is $\Delta L = L ( 1 / \cos \theta - 1 ) \approx$ $L \theta ^ { 2 } / 2 \propto x ^ { 2 }$. The potential energy is then

$$
V ( x ) \propto ( \Delta L ) ^ { 2 } \propto x ^ { 4 }
$$

so the motion is not simple harmonic. To finish, as in P1, we can write the period as

$$
T = \int \frac { d x } { v } \propto \int \frac { d x } { \sqrt { E - V ( x ) } } \propto \int _ { 0 } ^ { \ell } \frac { d x } { \sqrt { \ell ^ { 4 } - x ^ { 4 } } } .
$$

This integral has units of inverse length, so we must have $T \propto 1 / \ell$, so the final answer is $T / 2$.
[3] Problem 14. USAPhO 2015, problem A3.
[3] Problem 15. USAPhO 2008, problem B1.
Example 6
About how accurately can you measure $g$ with a simple pendulum?

Solution
This simple question illustrates how rich experimental physics can be, even in elementary settings. First, let's think about the uncertainties in the pendulum's length and period.

- Length: a reasonable length for an experiment is $L \sim 1 \mathrm {~m}$. We should use a wire, not a string, to avoid stretching. If you measure the wire with a good ruler, you can get down to $\Delta L \sim 1 \mathrm {~mm}$. If you use calipers, you can get $\Delta L \sim 0.1 \mathrm {~mm}$. Assuming the latter gives a fractional uncertainty $\Delta L / L \sim 10 ^ { - 4 }$.
- Period: if the length is a meter, the period will be $T \simeq 2 \mathrm {~s}$. (This isn't a total coincidence!

$17 { } ^ { \text {th } }$ century scientists proposed to define the standard unit of length precisely so this would be true.) One might estimate the timing uncertainty to be given by human reaction speed, $\Delta T \sim 250 \mathrm {~ms}$, but this is too pessimistic, because you can see the pendulum coming. An extensive study of manual timing at swimming competitions found a typical spread $\Delta T \sim 70 \mathrm {~ms}$. Moreover, since a pendulum's motion is regular, you can "lock in" with your sense of rhythm to do even better than this. Finally, we can let the pendulum swing for $N = 100$ consecutive periods and measure the total time. These improvements allow a timing uncertainty $\Delta T / ( N T ) \sim 10 ^ { - 4 }$.

Combining these results with the error propagation rules of P2, we can estimate $\Delta g / g \sim 10 ^ { - 4 }$ for a well-performed experiment. But any real experiment also has to contend with systematic effects which can bias the results. Let's consider and estimate a couple of them.

- The bob has finite size, so the pendulum is really a physical pendulum. We can estimate the size of this effect by thinking about how much the bob's size changes the pendulum's moment of inertia. If the bob has radius $r \sim 1 \mathrm {~cm}$, the change is roughly $r ^ { 2 } / L ^ { 2 } \sim 10 ^ { - 4 }$.
- The wire isn't massless, so the effective length of the pendulum is less than $L$. If we use a lead bob whose mass is a few kilograms, and the wire is a thin steel wire whose mass is a few grams, the effect is roughly $m _ { \text {wire } } / m _ { \text {bob } } \sim 10 ^ { - 3 }$.
- The motion has finite amplitude $\theta _ { 0 }$. As we saw in P1, this changes the period fractionally by $\theta _ { 0 } ^ { 2 } / 16$, and for an amplitude of a few degrees this is $\sim 10 ^ { - 3 }$.
- The pendulum oscillates in air. This leads to two distinct effects: the buoyant force on the bob decreases the effective value of $g$, and the "added mass" effect, discussed in the solution to problem 2, increases the bob's effective inertia. These effects shift the period in the same direction, and they are both of order $\rho _ { \text {air } } / \rho _ { \text {bob } } \sim \left( 1 \mathrm {~kg} / \mathrm { m } ^ { 3 } \right) / \left( 10 ^ { 4 } \mathrm {~kg} / \mathrm { m } ^ { 3 } \right) \sim 10 ^ { - 4 }$.
- The Earth is rotating, leading to centrifugal and Coriolis forces. The latter turns out to be unimportant; as shown in M6, it rotates the pendulum's plane of oscillation, rather than shifting its period. Unless you're conducting the experiment in Greenland or Antarctica, the centrifugal force produces a shift of order $\omega _ { E } ^ { 2 } R _ { E } / g \sim 10 ^ { - 3 }$.
- The pendulum's motion is slightly damped, which lengthens the oscillation period. This factor depends on how frictionless the support is. However, if it was set up so that 100 consecutive periods can be measured, one must have quality factor $Q \gtrsim 10 ^ { 3 }$. One can show that the fractional shift in frequency is $\sim 1 / Q ^ { 2 } \sim 10 ^ { - 6 }$.

There are plenty of other factors, but these are the most important ones, and a few of them are larger than the uncertainty from the length and period. But the good thing is that all of them can be calculated, and thereby subtracted out, leading to an ultimate final precision of $\Delta g / g \sim 10 ^ { - 4 }$. That is indeed the best precision achieved during the 1800s, through extensive effort. For real measurements and further details, see this paper.


## 3 Damped and Driven Oscillations

We now review damped oscillators, which we saw in M1, and consider driven oscillators. For more guidance, see sections 4.3 and 4.4 of Morin.
