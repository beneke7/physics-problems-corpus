---
id: solution-ocr-eupho-2024-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2024_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2024-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T3: Fabry-Pérot interferometer - Solution

Throughout these solutions, we use a Cartesian coordinate system aligned so that the $x$ axis points along the normal to the mirrors. Let one mirror be positioned at $x = 0$ and the other at $x = L$, and suppose the beam approaches the interferometer from the negative- $x$ direction. Let regions I, II and III be defined by $x < 0,0 < x < L$ and $x < L$ respectively. Note that the mirrors are assumed thin for convenience here, but this does not change the answers.

## Solution 1

Part a Where the laser beam meets the first mirror of the interferometer, some light is reflected back towards the laser and the rest is transmitted into the space between the mirrors (region II). This transmitted light bounces back and forth between the mirrors. With every reflection, some light is transmitted and leaves the interferometer. To find the complex amplitude of the wave returning to the laser, we need to sum the complex amplitudes of the wave that reflects immediately (without ever entering the interferometer), as well as those of the waves that bounced back and forth once, twice, thrice, etc.

Each region therefore contains a superposition of infinitely many waves. Crucially, a superposition of any number of sinusoidal waves with the same frequency, wavelength and propagation direction can be represented by a single sinusoidal wave with the same frequency, wavelength and propagation direction. Therefore, the electric field due to the waves in regions I, II and III must take the following form.

$$
\begin{array} { l l }
\text { Region I: } & E ( x , t ) = A \mathrm { e } ^ { \mathrm { i } ( k x - \omega t ) } , \\
\text { Region II: } & E ( x , t ) = B \mathrm { e } ^ { \mathrm { i } ( k x - \omega t ) } + C \mathrm { e } ^ { \mathrm { i } ( - k x - \omega t ) } , \\
\text { Region III: } & E ( x , t ) = D \mathrm { e } ^ { \mathrm { i } ( k x - \omega t ) } .
\end{array}
$$

In region I, we have a travelling wave moving in the positive $x$ direction with wavenumber $k$, angular frequency $\omega$ and amplitude $A$. The condition that there is no back-reflected beam means there is no oppositely-propagating wave in region I. In region II, the electric field is a sum of two waves propagating in either direction, which we give complex amplitudes $B$ and $C$. Finally, in region III, there is only a wave propagating in the positive- $x$ direction, which we give complex amplitude $D$.

Let us introduce an amplitude reflection coefficient $r$ and transmission coefficient $t$ for the mirrors. These coefficients, which may be complex, are characteristic of the mirrors. The ratio between the complex amplitude of the reflected wave and the incident wave is $r$, while the ratio between the complex amplitude of the transmitted wave and the incident wave is $t$. We are interested in $\phi$, which is the relative phase between the complex numbers $r$ and $t$.

Let us work out how the waves on either side of the first mirror (in regions I and II) are related. In region II, the forward-propagating wave is a result of the transmitted part of the incident wave in region I, and the reflected part of the backwards-propagating wave in region II. Therefore,

$$
\begin{equation*}
B = t A + r C . \tag{12}
\end{equation*}
$$

Similarly, for the backwards-propagating wave in region I to vanish, the sum of the reflected part of the incident wave and the transmitted part of the backwards-propagating wave in region II must be zero:

$$
\begin{equation*}
0 = r A + t C . \tag{13}
\end{equation*}
$$

Furthermore, applying similar reasoning at the second mirror, using the complex amplitudes evaluated at $x = L$, leads to

$$
\begin{align*}
D \mathrm { e } ^ { \mathrm { i } k L } & = t B \mathrm { e } ^ { \mathrm { i } k L } ,  \tag{14}\\
C \mathrm { e } ^ { - \mathrm { i } k L } & = r B \mathrm { e } ^ { \mathrm { i } k L } . \tag{15}
\end{align*}
$$

If $r$ and $t$ are given, along with the amplitude of the initial wave $A$, equations (12)-(15) contain four unknowns: $B , C , D$ and $k$. We find

$$
\begin{equation*}
\mathrm { e } ^ { - 2 \mathrm { i } k L } = r ^ { 2 } - t ^ { 2 } . \tag{16}
\end{equation*}
$$

This relation tell us the argument of the complex number $r ^ { 2 } - t ^ { 2 }$; it must be $- 2 k L$. It also provides a constraint on the magnitude of this complex number; we must have

$$
\begin{equation*}
\left| r ^ { 2 } - t ^ { 2 } \right| = 1 . \tag{17}
\end{equation*}
$$

This is a condition that $r$ and $t$ must satisfy in order for the setup in the question, with no back-reflected light from the interferometer, to be realizable.

With lossless mirrors, there is one additional constraint that $r$ and $t$ must satisfy. When a wave passes through one of these mirrors, the incident power must equal the sum of the reflected and transmitted powers. Since every wave in the problem has the same speed, the power carried by them is proportional the their amplitude squared, which means it is proportional to the modulus squared of the complex amplitude. Therefore, conservation of energy requires

$$
\begin{equation*}
| r | ^ { 2 } + | t | ^ { 2 } = 1 . \tag{18}
\end{equation*}
$$

Together, (17) and (18) imply that $r$ and $t$ cannot both be real; there must be some phase shift between the transmitted and reflected light.

Part b Using conditions (17) and (18), we can show that the magnitude of $\phi$ is 90°. Here are two ways we could do this.

First, we could square both conditions and subtract:

$$
\begin{aligned}
\left| r ^ { 2 } - t ^ { 2 } \right| ^ { 2 } & = | r | ^ { 4 } + | t | ^ { 4 } - r ^ { 2 } t ^ { * 2 } - r ^ { * 2 } t ^ { 2 } = 1 \\
\left( | r | ^ { 2 } + | t | ^ { 2 } \right) ^ { 2 } & = | r | ^ { 4 } + | t | ^ { 4 } - r | r | ^ { 2 } | t | ^ { 2 } = 1 \\
\Longrightarrow 2 | r | ^ { 2 } | t | ^ { 2 } & = r ^ { 2 } t ^ { * 2 } + r ^ { * 2 } t ^ { 2 }
\end{aligned}
$$

Here, an asterisk denotes complex conjugation. This is equivalent to $\left( r t ^ { * } + r ^ { * } t \right) ^ { 2 } = 1$ or

$$
\frac { r } { t } + \frac { r ^ { * } } { t ^ { * } } = 0 .
$$


This says that $r / t$ is purely imaginary, so $r$ and $t$ must have arguments that differ by ±90°.

Alternatively, we could let $a = r ^ { 2 }$ and $b = t ^ { 2 }$, so that (17) and (18) read

$$
\begin{aligned}
| a - b | & = 1 \\
| a | + | b | & = 1 .
\end{aligned}
$$

Using $O$ to denote the origin and A and B , respectively, to denote the points $a$ and $b$ in the complex plane, consider the triangle OAB. The first condition above implies that the length of side AB is 1. The second implies that the sum of the lengths OA and OB is also 1. Thus, the points O, A and B must actually be collinear, with O in between A and B. So, $b$ and $a$ have arguments that differ by $180 ^ { \circ }$. Since $a$ and $b$ have twice the arguments of $r$ and $t$ (respectively), this means $r$ and $t$ must have arguments that differ by ±90°.

Part c When the laser is rapidly switched off, after the amount of time it takes light to travel from the laser to the first mirror, the incident wave will be removed.

Since $| t | \ll | r |$, the amplitudes $| B |$ and $| C |$ are very large. Furthermore, the difference between them is small. Physically, the interferometer contains a large amount of electromagnetic energy in two waves of roughly equal intensity, propagating in either direction. This means, when this stored energy is released from the interferometer, the release will be very nearly symmetrical. Approximately the same amount of energy will be released in either direction. So, the energy contained in the pulse that propagates towards the laser is must be about half of the stored initial energy.

To find the stored energy, suppose the power contained in each wave (forwards- and backwardspropagating) in region II is $P ^ { \prime }$. The power transmitting through the mirrors to leave the interferometer is $( 1 - R ) P ^ { \prime }$. Since this transmitted wave must perfectly cancel out the wave that reflects from the first mirror, which has power $R p \approx P$, we must have $P ^ { \prime } \approx P / ( 1 - R )$. This means the initial energy stored inside the interferometer is

$$
U \approx \frac { 2 } { 1 - R } \frac { L P } { c }
$$

since the energy of the two waves travelling in either direction simply adds. Therefore, the energy in the pulse that returns to the laser is

$$
E \approx \frac { 1 } { 1 - R } \frac { L P } { c } .
$$

Part d There are at least two ways of doing this part; see Solution 2 below for a second approach.

The stored energy is initially given by (19). The Poynting flux out of the interferometer at the moment when the incoming beam has just switched off all the way to the surface of the first mirror is roughly

$$
\begin{equation*}
\frac { \mathrm { d } U } { \mathrm {~d} t } = - 2 P = - \frac { ( 1 - R ) c } { L } U , \tag{19}
\end{equation*}
$$

since the amplitudes of the waves propagating away from the interferometer in regions I and III are both roughly $| A |$. We can assume that the stored energy decays exponentially: if the field inside the device reduces by a certain factor, then the amplitude of the waves just outside will have reduced by the same factor. So, the ratio between the stored energy inside and the outwards Poynting flux is roughly constant. Finding the time constant $T$ so that $U \propto \mathrm { e } ^ { - t / T }$ satisfies (19) leads to

$$
T \approx \frac { 1 } { 1 - R } \frac { L } { c }
$$

Since this is an estimate, and since the exact numerical prefactor depends on whether we chose to use the time constant for the decay in amplitude or energy, students can have any order-unity prefactor. Since the combination $L / c$ can be deduced by dimensional analysis, the marks should be awarded for getting the correct dependence on $R$ on.

## Solution 2

Part a It is possible to solve this problem by summing up an infinite series of complex amplitudes corresponding to the light waves that are reflected once, twice, thrice, etc. from the mirror.

Let us focus on the backwards-propagating wave in region I, which must vanish. In steady state, before the laser is switched off, let the amplitude of the incident beam at $x = 0$ be $A$. Then, introducing amplitude reflection coefficients $r$ and $t$ as in Solution \#1, the amplitude of the backwards-propagating beam is

$$
r A \left[ 1 + t ^ { 2 } \left( \mathrm { e } ^ { 2 \mathrm { i } k L } + r ^ { 2 } \mathrm { e } ^ { 4 \mathrm { i } k L } + r ^ { 4 } \mathrm { e } ^ { 6 \mathrm { i } k L } + \ldots \right) \right] .
$$

The first term represents the light that is reflected immediately off the first mirror (factor $r$, without every entering region II. The remaining terms represent light that transmits through the first mirror (one factor $t$ ), propagates from $x = 0$ to $x = L$ and back some number $N$ of times (factor $\mathrm { e } ^ { 2 N i k L }$ due to the propagation and $r ^ { 2 N - 1 }$ for the correct number of reflections) and transmits through the first mirror again (second factor of $t$. Summing the geometric series, the backwards-propagating amplitude is

$$
r A \left( 1 + \frac { t ^ { 2 } \mathrm { e } ^ { 2 \mathrm { i } k L } } { 1 - r ^ { 2 } \mathrm { e } ^ { 2 \mathrm { i } k L } } \right) = 0 .
$$

Rearranging leads to the same condition (16) as in Solution \#1. The rest of the solution, to conclude that $r$ and $t$ meet at a right angle and that $t$ must have a nonzero phase, can proceed as in Solution \#1.

Part b As in Solution \#1.
Part c After the incident beam has switched off all the way to the interferometer, the beam the is reflected immediately off the first mirror switches off. The other beams, corresponding to light that bounces some number $N$ of times between the mirrors, switches off slightly later. So, the backwardsreflected beam at first becomes

$$
r A \left[ t ^ { 2 } \left( \mathrm { e } ^ { 2 \mathrm { i } k L } + r ^ { 2 } \mathrm { e } ^ { 4 \mathrm { i } k L } + r ^ { 4 } \mathrm { e } ^ { 6 \mathrm { i } k L } + \ldots \right) \right] = - r A .
$$


At $x = 0$, this is the amplitude of the backwardsreflected beam for time $\Delta t = 2 L / c$.

Then, the wave that reflects once before leaving also switches off, after time $\Delta t$. The amplitude becomes

$$
r A \left[ t ^ { 2 } \left( r ^ { 2 } \mathrm { e } ^ { 4 \mathrm { i } k L } + r ^ { 4 } \mathrm { e } ^ { 6 \mathrm { i } k L } + \ldots \right) \right] = r A \frac { t ^ { 2 } r ^ { 2 } \mathrm { e } ^ { 4 \mathrm { i } k L } } { 1 - r ^ { 2 } \mathrm { e } ^ { 2 \mathrm { i } k L } } = r A r ^ { 2 } \mathrm { e } ^ { 2 \mathrm { i } k L }
$$

for the next $\Delta t$. Then, the wave that is reflected three times before leaving switches off, after time $2 \Delta t$. The amplitude becomes

$$
r A \left[ t ^ { 2 } \left( r ^ { 4 } \mathrm { e } ^ { 6 \mathrm { i } k L } + \ldots \right) \right] = r A \frac { t ^ { 2 } r ^ { 4 } \mathrm { e } ^ { 6 \mathrm { i } k L } } { 1 - r ^ { 2 } \mathrm { e } ^ { 2 \mathrm { i } k L } } = r A r ^ { 4 } \mathrm { e } ^ { 4 \mathrm { i } k L } ,
$$

and so on. After time $n \Delta t$, the amplitude is $- r A r ^ { 2 n } \mathrm { e } ^ { 2 n i k L }$. The modulus decreases by a factor of $R$ every $\Delta t$. This can be argued without a geometric series; each wave has reflected two more times that the previous one, so should have an amplitude that is a factor of $R$ smaller.

The energy in the backwards-propagating pulse is the sum of the energies during the first, second, third, etc $\Delta t$ interval. This is

$$
P \Delta t \left( | r | ^ { 2 } + | r | ^ { 6 } + | r | ^ { 8 } + \ldots \right) = \frac { | r | ^ { 2 } } { 1 - | r | ^ { 4 } } \frac { 2 L P } { c } \approx \frac { 1 } { 1 - R } \frac { L P } { c } .
$$

Part d Since the amplitude decays like

$$
R ^ { n } = \mathrm { e } ^ { - n \log 1 / R } = \mathrm { e } ^ { - \log ( 1 / R ) t / \Delta t } ,
$$

the energy decays like $\mathrm { e } ^ { - 2 \log ( 1 / R ) t / \Delta t }$. The time constant of this roughly-exponential decay in energy is

$$
T = \frac { \Delta t } { 2 \log ( 1 / R ) } \approx \frac { 1 } { 1 - R } \frac { L } { c }
$$

for $1 - R \ll 1$.

## Solution 3

Part a Students might assume that the perpendicular electric field is continuous across each of the mirrors. While this is not the intended solution, since the question tells us nothing about the internal workings of the mirror, they should get credit for this. If the electric field is continuous, then $1 + r = t$. Combined with $| r | ^ { 2 } + | t | ^ { 2 } = 1$, if $r$ and $t$ are real, these equations can only be satisfied if $( r , t ) = ( 0,1 )$ or $( r , t ) = ( - 1,0 )$. Since there is reflected and transmitted light in this problem, $r$ and $t$ must be complex numbers with a nonzero imaginary part.

Part b Using Pythagorus's theorem, the angle between $r$ and $t$ must be ±90° (see figure).

Part c As in Solutions \#2 and \#3.
Part d As in Solutions \#2 and \#3.
![](../../../figures/solution-ocr/c0314a15230e443cdba282dc.jpg)

## Solution 4

Here is an alternative approach to parts a and b that does not require complex numbers or a geometric series.

Parts a and b Consider the first mirror in isolation and suppose a light wave is incident upon it from the left with amplitude $A$, as shown in the diagram below. The reflected wave will have amplitude $A \sqrt { R }$ and may undergo a phase shift; we use $\theta$ to denote its phase angle relative to the incident wave. Similarly, the transmitted wave has amplitude $A \sqrt { 1 - R }$ and phase angle $\psi$ relative to the incident wave.
![](../../../figures/solution-ocr/f5b3d1f0b4ab438f999d5e56.jpg)

Now imagine a different scenario, in which there is a wave incident on the mirror from the right, as shown in Fig BLAH. This incident wave will have amplitude $A \sqrt { R } / \sqrt { 1 - R }$ and a phase angle $\pi + \theta - \psi$. There will be a reflected wave with amplitude $A R / \sqrt { 1 - R }$ (we multiply the amplitude by $\sqrt { R }$ upon reflection) and phase angle $\pi + 2 \theta - \psi$ (we add $\theta$ to the phase upon reflection). There will be a transmitted wave with amplitude $A \sqrt { R }$ (we multiply the amplitude by $\sqrt { 1 - R }$ upon reflection) and phase angle $\pi + \theta$ (we add $\psi$ to the phase upon reflection).
![](../../../figures/solution-ocr/a913121d079dcc001a8372d5.jpg)

Now we consider the superposition of these two scenarios. On the left side, the waves travelling to the left cancel out, since they have the same amplitude but have phases differing by $\pi$. This destructive interference leaves a wave travelling to the right with amplitude $A$. This is exactly what is happening at the first mirror of the interferometer. On the right


side, there is a leftwards-propagating wave and two rightwards-propagating waves, as shown below.
![](../../../figures/solution-ocr/cb18d5ca870f2bcedda90c0d.jpg)

Now we use the fact that the mirror is lossless, so the light energy in the incoming waves in the figure above must equal the light energy in the outgoing waves. Since energy is proportional to the square of the electric field, the incoming energy flux is proportional to

$$
I _ { \text {in } } = A ^ { 2 } + A ^ { 2 } \left( \frac { R } { 1 - R } \right) .
$$

The outgoing energy flux is a little trickier to work out, since there are two superimposed waves travelling out with different phases. It is

$$
I _ { \text {out } } = A ^ { 2 } ( 1 - R ) + A ^ { 2 } \left( \frac { R ^ { 2 } } { 1 - R } \right) - 2 A ^ { 2 } R \cos ( \pi + 2 ( \theta - \psi ) ) .
$$

$I _ { \text {in } } = I _ { \text {out } }$ can be rearranged to give $\cos ( \pi + 2 ( \theta - \psi ) ) = 0$, so $2 ( \theta - \psi )$ is a multiple of $\pi$ and $\theta - \psi$ is $\pm \pi / 2$. The reflected and transmitted waves must be out of phase by 90°.
