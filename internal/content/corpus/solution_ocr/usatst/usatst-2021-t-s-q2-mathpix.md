---
id: solution-ocr-usatst-2021-t-s-q2
source: usatst
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usatst/2021_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usatst-2021-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question 2

## The Dark Forest

Dark matter could be made of hypothetical, extremely light particles called axions. Because individual axions are so light, experiments do not search for individual axions, but rather for the classical axion field formed by a large collection of axions, which oscillates as

$$
a ( t ) = a _ { 0 } \sin ( \omega t ) .
$$

This is analogous to how a large collection of photons can form a classical electromagnetic field. In the presence of a magnetic field B and an axion field $a$, the axion field produces an effective current

$$
\mathbf { J } = g \dot { a } \mathbf { B }
$$

where we define $\dot { a } = d a / d t$. The effective current produces electromagnetic fields in exactly the same way as ordinary current, though it does not come from the motion of actual charges. Experiments can search for axion dark matter using systems which are resonantly driven by this current.

You may use fundamental constants in your answers, such as

$$
\begin{array} { r l r l }
c & = 3.00 \times 10 ^ { 8 } \mathrm {~m} / \mathrm { s } & \hbar & = 1.055 \times 10 ^ { - 34 } \mathrm {~J} \cdot \mathrm {~s} \\
G & = 6.67 \times 10 ^ { - 11 } \mathrm {~N} \cdot \mathrm {~m} ^ { 2 } / \mathrm { kg } ^ { 2 } & \mu _ { 0 } & = 4 \pi \times 10 ^ { - 7 } \mathrm {~N} / \mathrm { A } ^ { 2 } \\
& k _ { B } & = 1.602 \times 10 ^ { - 19 } \mathrm { C } \\
\end{array}
$$

You do not have to provide numeric answers unless asked. When asked to "estimate", you may drop constants of order one. The numeric values provided below are from standard references where $\hbar$, $c , \mu _ { 0 }$, and $\epsilon _ { 0 }$ are set to one; to get correct numeric results, you must restore these factors yourself.

1. First, we will describe some physical properties of the axion field.
(a) Consider a single axion at rest, with mass $m$. Find its associated angular frequency $\omega$. This will be the angular frequency of the corresponding classical field, when there are many axions.

## Solution

The axion is a quantum particle and satisfies the de Broglie relation $E = \hbar \omega$, and its energy comes from its rest mass, $E = m c ^ { 2 }$. Thus,

$$
\omega = \frac { m c ^ { 2 } } { \hbar } .
$$

(b) Suppose dark matter is distributed spherically symmetrically in the galaxy with uniform density $\rho$. The solar system is a distance $r$ from the center of the galaxy and orbits around it with period $T$. Neglecting everything besides dark matter, find the dark matter density $\rho$.

## Solution

Setting the centripetal acceleration equal to the gravitational acceleration,

$$
r \omega ^ { 2 } = \frac { G M } { r ^ { 2 } } , \quad M = \frac { 4 } { 3 } \pi r ^ { 3 } \rho .
$$


Solving for $\rho$, we find
$$
\rho = \frac { 3 \pi } { G T ^ { 2 } } .
$$
(c) The energy density of the axion field is $m ^ { 2 } a _ { 0 } ^ { 2 } / \left( 2 \hbar ^ { 3 } c \right)$. Find the axion field amplitude $a _ { 0 }$.

\section*{Solution}
The dark matter density comes from the mass-energy of the axion field, so
$$
\rho c ^ { 2 } = \frac { m ^ { 2 } a _ { 0 } ^ { 2 } } { 2 \hbar ^ { 3 } c } , \quad a _ { 0 } = \sqrt { \frac { 2 \rho \hbar ^ { 3 } c ^ { 3 } } { m ^ { 2 } } } .
$$
(d) The radius and period of the Sun's orbit, as well as a typical axion mass, are
$$
r = 2.5 \times 10 ^ { 20 } \mathrm {~m} , \quad T = 7.1 \times 10 ^ { 15 } \mathrm {~s} , \quad m = 1.0 \times 10 ^ { - 9 } \mathrm { eV } .
$$
Numerically compute the axion field amplitude $a _ { 0 }$.

## Solution

Plugging in numbers and noting that the provided value of the axion mass is really its energy (and hence dividing it by $c ^ { 2 }$ ) gives the value

$$
a _ { 0 } = 2.36 \times 10 ^ { - 4 } \mathrm {~kg} \mathrm {~m} ^ { 3 } / \mathrm { s } ^ { 3 } .
$$

(e) In this problem, we treat the axion field as spatially uniform within a terrestrial laboratory. To verify that this assumption is reasonable, numerically estimate the axion field's wavelength $\lambda$, assuming the axions have the same galactic speed as the Sun.

## Solution

The axion speed is

$$
v = \frac { 2 \pi r } { T } = 2 \times 10 ^ { 5 } \mathrm {~m} / \mathrm { s } .
$$

Using the de Broglie relation again,

$$
\lambda = \frac { h } { p } = \frac { h } { m v } \sim 10 ^ { 6 } \mathrm {~m} .
$$

As expected, this is much larger than the apparatus considered below. (Note: a common mistake was to write $v = f \lambda$, but this is only true for waves which travel at a constant speed, such as light. To see the problem, note that if you apply the de Broglie relations, this equation becomes $v = E / p$. That's true for photons, where $E = p c$, but certainly not true for massive particles. Some students also tried the Compton wavelength $\lambda = h / m c$, but this is a different quantity, namely the wavelength of a photon if it had the same energy as an axion at rest.)

(f) In part (a), you found $\omega$ by neglecting the axion's speed. In reality, the axion's finite speed changes the frequency to $\omega + \Delta \omega$, in a frame at rest with respect to the galactic center. Numerically estimate $\Delta \omega / \omega$ to show that it is reasonable to neglect this effect.


## Solution

Because $E = \hbar \omega$, we need to see how the energy is changed. We have

$$
\frac { \Delta E } { E } \approx \frac { m v ^ { 2 } / 2 } { m c ^ { 2 } } = \frac { v ^ { 2 } } { 2 c ^ { 2 } }
$$

where we used the fact that $v$, computed above, is nonrelativistic. We thus find

$$
\frac { \Delta \omega } { \omega } \sim 3 \times 10 ^ { - 7 }
$$

which is small as expected. (Note that the usual Doppler shift formula would not work here, and trying to use it would get the wrong answer. The Doppler shift formula applies to particles with constant speed, which satisfy $\omega = v k$. The axion is massive; when at rest, it has $\omega \neq 0$ and $k = 0$. However, you could also get the answer by Lorentz transforming the four-vector $( \omega , \mathbf { k } )$.)
![](../../../figures/solution-ocr/d41c7558f07596e50db673f1.jpg)

The ABRACADABRA ${ } ^ { 1 }$ experiment, currently taking data at MIT, is a toroidal solenoid with inner and outer radius $R _ { \text {in } }$ and $R _ { \text {out } }$ and height $h$. You may assume $h \gg R _ { \text {out } }$ for simplicity. A superconducting wire carrying current $I$ wraps $N$ times around the toroid, where $N$ is high enough to neglect the discreteness of the wires. A circular pickup loop with radius slightly less than $R _ { \text {in } }$ is placed at the center of the toroid.
2. Now, we will find the axion signal generated in the ABRACADABRA apparatus.
(a) Find the magnetic field $\mathbf { B } ( \mathbf { r } )$ inside the toroid due to the superconducting current.

[^0]

## Solution

Using Ampere's law,

$$
\mathbf { B } = \frac { \mu _ { 0 } N I } { 2 \pi r } \hat { \theta } .
$$

(b) The superconducting wires lose their superconductivity when exposed to a magnetic field greater than $B _ { \text {max } }$. Find the maximum possible current $I _ { \text {max } }$ that can be used, and assume this current is used in later parts.

## Solution

The maximum field is at $r = R _ { \text {in } }$, so

$$
B _ { \max } = \frac { \mu _ { 0 } N I _ { \max } } { 2 \pi R _ { \mathrm { in } } } , \quad I _ { \max } = \frac { 2 \pi R _ { \mathrm { in } } B _ { \max } } { \mu _ { 0 } N } .
$$

(c) Assuming that $\omega$ is small, find the magnetic flux $\Phi _ { B } ( t )$ through the pickup loop due to the axion field in terms of $a _ { 0 } , g , \omega , B _ { \text {max } }$, and the dimensions of the apparatus. (You may ignore any currents induced on the surfaces of the superconducting wires. Accounting for them makes the problem much harder, but does not substantially affect the final result.)

## Solution

The effective current is

$$
\mathbf { J } = g \dot { a } \mathbf { B } = g a _ { 0 } B _ { \max } \frac { R _ { \mathrm { in } } } { r } \omega \cos ( \omega t ) \hat { \theta } .
$$

The resulting field is like that of an array of concentric solenoids, where we may neglect fringe fields because $h \gg R _ { \text {out } }$. Therefore, the axion-produced field $\mathbf { B } _ { \text {ax } }$ inside the pickup loop is uniform. For simplicity, we define

$$
J _ { 0 } = g a _ { 0 } B _ { \max } \omega .
$$

Then using Ampere's law, we have

$$
B _ { \mathrm { ax } } = \mu _ { 0 } J _ { 0 } \cos ( \omega t ) \int \frac { R _ { \text {in } } } { r } d r = \mu _ { 0 } J _ { 0 } R _ { \text {in } } \log \left( R _ { \text {out } } / R _ { \text {in } } \right) \cos ( \omega t ) .
$$

The magnetic flux is then

$$
\Phi _ { B } = \pi R _ { \mathrm { in } } ^ { 2 } B _ { \mathrm { ax } } = \pi \mu _ { 0 } J _ { 0 } R _ { \mathrm { in } } ^ { 3 } \log \left( R _ { \mathrm { out } } / R _ { \mathrm { in } } \right) \cos ( \omega t ) .
$$

(d) If $\omega$ is too large, the result above breaks down due to radiation effects. Estimate the frequency $\omega _ { c }$ where this happens.

## Solution

In the calculations above, we have assumed that the fields are quasistatic, neglecting the


radiation propagation time. This approximation breaks down when
$$
\omega _ { c } \sim \frac { c } { R _ { \mathrm { in } } }
$$
past which the flux will be diminished. Since this calculation is approximate, the answers $c / R _ { \text {out } }$ or $c / h$ are also acceptable.
(e) Using the design values
$$
R _ { \text {in } } = 0.5 \mathrm {~m} , \quad R _ { \text {out } } = 1.0 \mathrm {~m} , \quad h = 2.0 \mathrm {~m}
$$
estimate the numerical value of $\omega / \omega _ { c }$.

## Solution

Plugging numbers in, we find

$$
\omega _ { c } \sim 6.0 \times 10 ^ { 8 } \mathrm {~s} ^ { - 1 } , \quad \omega \sim 1.5 \times 10 ^ { 6 } \mathrm {~s} ^ { - 1 } .
$$

Then we have

$$
\omega / \omega _ { c } \sim 0.0025
$$

which is small as expected. Any answer within an order of magnitude is acceptable.

(f) Let $\Phi _ { 0 }$ be the amplitude of the time-varying axion flux. Using the typical values
$$
B _ { \max } = 5.0 \mathrm {~T} , \quad g = 1.0 \times 10 ^ { - 16 } \mathrm { GeV } ^ { - 1 }
$$
and your previous results, compute the numerical value of $\Phi _ { 0 }$.

## Solution

First, we have to restore the dimensions of $g$. Notice that since current $g \dot { a } B$ has the same units as displacement current $\epsilon _ { 0 } \dot { E }$, the quantities $g a$ and $( E / B ) \epsilon _ { 0 }$ must have the same dimensions, and furthermore $E / B$ has dimensions of speed.
Now, in 1(c) we found that $a$ has dimensions of energy times velocity, while the value of $g$ given here has dimensions of inverse energy. Thus, the combination $g a$ only has dimensions of speed, which means a factor of $\epsilon _ { 0 }$ was left out. In other words, if we denote the value given above as $g ^ { \prime }$, the true value of $g$ is $\epsilon _ { 0 } g ^ { \prime }$.
To avoid mistakes, it's best to group terms in the long expression for $\Phi _ { 0 }$, so that each piece has simple units and a reasonable magnitude. We have

$$
\Phi _ { 0 } = \left( \pi R _ { \mathrm { in } } ^ { 2 } B _ { 0 } \right) \log \left( \frac { R _ { \mathrm { out } } } { R _ { \mathrm { in } } } \right) R _ { \mathrm { in } } \mu _ { 0 } \epsilon _ { 0 } g ^ { \prime } a _ { 0 } \omega
$$


and using $c ^ { 2 } = 1 / \mu _ { 0 } \epsilon _ { 0 }$ gives

$$
\begin{aligned}
\Phi _ { 0 } & = \left( \pi R _ { \text {in } } ^ { 2 } B _ { 0 } \right) \log \left( \frac { R _ { \text {out } } } { R _ { \text {in } } } \right) \frac { \omega R _ { \text {in } } } { c } \frac { g ^ { \prime } a _ { 0 } } { c } \\
& = ( 3.9 \mathrm {~Wb} ) ( 0.693 ) ( 0.0025 ) \left( 4.91 \times 10 ^ { - 19 } \right) \\
& = 3.3 \times 10 ^ { - 21 } \mathrm {~Wb} .
\end{aligned}
$$

The pickup loop has inductance $L$ and is attached to a capacitor, forming a circuit with resonant frequency equal to the axion frequency $\omega$. The circuit also has a small internal resistance $R$ in series, and is at temperature $T$. The axion signal can be detected by monitoring the current in the circuit. The main source of noise is thermal noise, which causes fluctuations in the current.
3. We will now estimate the sensitivity of ABRACADABRA to axions.

(a) The axion produces a current which oscillates sinusoidally. Find the signal current amplitude $I _ { s }$ in terms of $\omega , \Phi _ { 0 }$, and the circuit parameters.

## Solution

Since the axion is at the resonant frequency, the impedance of the circuit is approximately $R$. Therefore the current is

$$
I = \frac { \mathcal { E } } { R } = - \frac { 1 } { R } \frac { d \Phi _ { B } } { d t } .
$$

The amplitude is

$$
I _ { s } = \frac { \omega \Phi _ { 0 } } { R } .
$$

(b) Find the average value of the current squared $\left\langle I ^ { 2 } \right\rangle$ in the circuit due to thermal noise.

## Solution

The energy stored in the inductor is $L I ^ { 2 } / 2$. By the equipartition theorem, the average energy stored in any such quadratic degree of freedom is $k _ { B } T / 2$, so

$$
\left\langle I ^ { 2 } \right\rangle = \frac { k _ { B } T } { L } .
$$

This effect is also called Johnson noise.

(c) At any moment in time, the noise current is oscillating sinusoidally with typical amplitude $I _ { n } = \sqrt { \left\langle I ^ { 2 } \right\rangle }$, which is much larger than $I _ { s }$. However, the phase of the noise current also fluctuates randomly, so that after a typical time $t _ { c }$, its phase will be roughly independent of the phase it had before. Find an estimate for $t _ { c }$ in terms of $\omega$ and the circuit parameters. (Hint: at any given moment, the thermal noise current is simultaneously being produced by the random motion of electrons in the circuit, and damped by the resistor.)

## Solution

The noise current that exists in the circuit at any given moment, by definition, came from the thermal motion of electrons in the circuit up to a time $t _ { c }$ ago. Therefore, $t _ { c }$ is roughly the characteristic time for decay of current in the circuit. There are many ways


to calculate this, but a simple way is to note that
$$
t _ { c } \sim \frac { Q } { \omega } , \quad Q = \frac { \omega L } { R }
$$
where $Q$ is the quality factor. Thus,
$$
t _ { c } \sim \frac { L } { R } .
$$
(d) Suppose the experiment runs for a total time $t _ { e } \gg t _ { c }$. Roughly estimate the average amplitude of the noise current over this period of time.

## Solution

Uncertainty goes down by $\sqrt { n }$ when averaging $n$ independent trials. Here we have $n = t _ { e } / t _ { c }$, so

$$
\bar { I } _ { n } = I _ { n } \sqrt { \frac { t _ { c } } { t _ { e } } } .
$$

(e) The axion is detectable if the signal current amplitude is larger than the averaged noise current amplitude, and the circuit parameters are
$$
L = 1 \mathrm { mH } , \quad R = 10 \mathrm {~m} \Omega , \quad T = 0.1 \mathrm {~K} .
$$
Roughly numerically estimate the time needed to potentially detect the axion. (Hint: if your answer seems strange, note that in reality, the axion's phase also fluctuates over time, because of the effect of part 1(f). In addition, we don't know $\omega$ ahead of time, so the experiment needs to be run many times. We ignored these effects here to keep things simple.)

## Solution

By setting $I _ { s } = \bar { I } _ { n }$ and solving for $t _ { e }$, we find

$$
t _ { e } \sim \frac { k _ { B } T R } { \omega ^ { 2 } \Phi _ { 0 } ^ { 2 } } = 550 \mathrm {~s} .
$$

In reality, you would need to repeat this experiment millions of times to scan a sufficient range of $\omega$, and the time in each step would be longer, because after some point the average axion signal also starts going down as $1 / \sqrt { n }$.
