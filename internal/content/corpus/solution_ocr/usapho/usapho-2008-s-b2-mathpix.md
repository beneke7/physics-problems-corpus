---
id: solution-ocr-usapho-2008-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2008-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

Consider a parallel plate capacitor with the plates vertical. The plates of the capacitor are rigidly supported in place. The distance between the plates is $d$. The plates have height $h$ and area $A \gg d ^ { 2 }$. Assume throughout this problem that the force of air resistance may be neglected; however, the force of gravity cannot be neglected. Neglect any edge effects as well as any magnetic effects.
![](../../../figures/solution-ocr/5de44ef566936158a368605c.jpg)
![](../../../figures/solution-ocr/a7e3f4dff32b907cf6d1c7fb.jpg)

a. A small metal ball with a mass $M$ and a charge $q$ is suspended from a string of length $L$ that is tied to a rigid support. When the capacitor is not charged, the metal ball is located at the center of the capacitor- at a distance $d / 2$ from both plates and at a height $h / 2$ above the bottom edge of the plates. If instead a constant potential difference $V _ { 0 }$ is applied across the plates, the string will make an angle $\theta _ { 0 }$ to the vertical when the metal ball is in equilibrium.
    i. Determine $\theta _ { 0 }$ in terms of the given quantities and fundamental constants.
    ii. The metal ball is then lifted until it makes an angle $\theta$ to the vertical where $\theta$ is only slightly greater than $\theta _ { 0 }$. The metal ball is then released from rest. Show that the resulting motion is simple harmonic motion and find the period of the oscillations in terms of the given quantities and fundamental constants.


iii. When the ball is at rest in the equilibrium position $\theta _ { 0 }$, the string is cut. What is the maximum value for $V _ { 0 }$ so that the ball will not hit one of the plates before exiting? Express your answer in terms of the given quantities and fundamental constants.
b. Suppose instead that the ball of mass $M$ and charge $q$ is released from rest at a point halfway between the plates at a time $t = 0$. Now, an AC potential difference $V ( t ) = V _ { 0 } \sin \omega t$ is also placed across the capacitor. The ball may hit one of the plates before it falls (under the influence of gravity) out of the region between the plates. If $V _ { 0 }$ is sufficiently large, this will only occur for some range of angular frequencies $\omega _ { \text {min } } < \omega < \omega _ { \text {max } }$. You may assume that $\omega _ { \text {min } } \ll \sqrt { g / h }$ and $\omega _ { \text {max } } \gg \sqrt { g / h }$. Making these assumptions, find expressions for $\omega _ { \text {min } }$ and $\omega _ { \text {max } }$ in terms of the given quantities and/or fundamental constants.
c. Assume that the region between the plates is not quite a vacuum, but instead humid air with a uniform resistivity $\rho$. Ignore any effects because of the motion of the ball, and assume that the humid air doesn't change the capacitance of the original system.
    i. Determine the resistance between the plates.
    ii. If the plates are originally charged to a constant potential source $V _ { 0 }$, and then the potential is removed, how much time is required for the potential difference between the plates to decrease to a value of $V _ { 0 } / e$, where $\ln e = 1$ ?
    iii. If the plates are instead connected to an AC potential source so that the potential difference across the plates is $V _ { 0 } \sin \omega t$, determine the amplitude $I _ { 0 }$ of the alternating current through the potential source.

## Solution

a. i. The electric field between the plates is $E = V _ { 0 } / d$. In equilibrium, the horizontal and vertical components of the tension balance the electrostatic and gravitational forces. Consequently,
$$
\tan \theta _ { 0 } = \frac { q V _ { 0 } } { M g d } .
$$
    ii. The simplest way to see this is to note that the electric field, for the purpose of this metal ball alone, acts like an effective extra horizontal contribution to the gravitational field. The system is thus a simple pendulum experiencing tilted gravity, which we know performs simple harmonic motion for small amplitudes. Then
$$
T = 2 \pi \sqrt { \frac { L } { g _ { \mathrm { eff } } } } = 2 \pi \sqrt { \frac { L } { \sqrt { g ^ { 2 } + \left( q V _ { 0 } / M d \right) ^ { 2 } } } } = 2 \pi \sqrt { \frac { L \cos \theta _ { 0 } } { g } } .
$$
    iii. Upon cutting the string the ball will move in a straight line, tangent to the angle the string originally made. So it will leave the region between the plates a distance
$$
x _ { 1 } = ( L + h / 2 ) \tan \theta _ { 0 }
$$
away from the center line. Setting this equal to $d / 2$ and solving for $V _ { 0 }$ gives
$$
V _ { 0 } = \frac { M g d ^ { 2 } } { ( 2 L + h ) q } .
$$
b. The ball will experience an oscillating force in the $x$ direction of
$$
F _ { E } = \frac { V _ { 0 } } { d } \sin \omega t
$$

Hence, the $x$ component of the acceleration will be

$$
a _ { x } = \frac { q V _ { 0 } } { M d } \sin \omega t .
$$

The ball is released from rest, so this can be directly integrated to give the $x$ component of the velocity,

$$
v _ { x } = \frac { q V _ { 0 } } { M d \omega } ( 1 - \cos \omega t ) .
$$

This can be integrated again to find the position relative to the center, which we will define as $x = 0$,

$$
x = \frac { q V _ { 0 } } { M d \omega } \left( t - \frac { 1 } { \omega } \sin \omega t \right) .
$$

The ball hits one of the plates if this value exceeds $d / 2$ while it is still in the region between the plates. It exits this region when $t = \sqrt { h / g }$.
For $\omega _ { \text {min } }$, we may perform a small angle approximation,

$$
\sin \omega t \approx \omega t - \frac { 1 } { 6 } \omega ^ { 3 } t ^ { 3 }
$$

yielding

$$
\frac { M d ^ { 2 } \omega } { 2 q V _ { 0 } } = \frac { 1 } { 6 } \omega ^ { 2 } t ^ { 3 } \quad \Rightarrow \quad \omega _ { \min } = \frac { 3 M d ^ { 2 } } { q V _ { 0 } } \sqrt { g ^ { 3 } / h ^ { 3 } } .
$$

As for $\omega _ { \text {max } }$, we may neglect the $( \sin \omega t ) / \omega$ term entirely, for

$$
\frac { M d ^ { 2 } \omega } { 2 q V _ { 0 } } = t \quad \Rightarrow \quad \omega _ { \max } = \frac { 2 q V _ { 0 } } { M d ^ { 2 } } \sqrt { h / g } .
$$

At higher frequencies the ball will miss, falling out of the plates before it hits either side.

c. i. The resistance between the plates is given by
$$
R = \rho d / h ^ { 2 } .
$$
    ii. This is an $R C$ circuit, with characteristic time
$$
\tau = R C = \rho \frac { d } { h ^ { 2 } } \epsilon _ { 0 } h ^ { 2 } d = \rho \epsilon _ { 0 }
$$
    iii. The AC circuit is effectively a capacitor in parallel with a resistor. The current through each is ninety degrees out of phase, so if the magnitudes of the current through the capacitor $I _ { C }$ and the resistor $I _ { R }$ are known, then
$$
I _ { 0 } = \sqrt { I _ { C } ^ { 2 } + I _ { R } ^ { 2 } } .
$$
Since the devices are in parallel, the potential drop across either are equal. We have
$$
I _ { R } = V _ { 0 } / R , \quad I _ { C } = V _ { 0 } / \left| Z _ { C } \right| = \omega C V _ { 0 } .
$$
Then
$$
I _ { 0 } = V _ { 0 } \sqrt { \frac { 1 } { R ^ { 2 } } + \omega ^ { 2 } C ^ { 2 } } = \frac { V _ { 0 } } { R } \sqrt { 1 + ( \omega R C ) ^ { 2 } } = \frac { V _ { 0 } h ^ { 2 } } { \rho d } \sqrt { 1 + \left( \omega \rho \epsilon _ { 0 } \right) ^ { 2 } } .
$$


## STOP: Do Not Continue to Part C

If there is still time remaining for Part B, you should review your work for Part B, but do not continue to Part C until instructed by your exam supervisor. You may not return to Part A


## Optical Society of America Bonus Question

Researchers have a developed a lens made of liquid. The spherical lens consists of a droplet of transparent liquid resting on a electrically controllable surface. When the voltage of the surface is changed, the droplet itself changes shape; it either tries to "ball-up" more strongly or it becomes flatter. Figure 1 is a sketch of the liquid lens and several parameters that describe it, including the thickness of the lens $( t )$, the radius of curvature of the top surface $( R )$ and the contact angle $( \theta )$, which represents the angle between the flat surface beneath the droplet and the tangent to the curved surface at the point of contact.
![](../../../figures/solution-ocr/2e7bfa983b20c63f4c352869.jpg)

a. When a certain voltage is applied, both the contact angle and lens thickness increase (and the lens becomes more curved). In this case, is the liquid attracted or repelled by the surface?
b. Express the contact angle as a function of $R$ and $t$.
c. The total volume of the liquid lens is an important parameter because as the liquid lens changes shape, its volume is conserved. Calculate the volume of the lens as a function of $R$ and $t$.
d. Use your result to part (b) to eliminate the variable $t$ from your expression for the volume and find $V ( R , \theta )$.
e. By changing the voltage on the control surface, the contact angle, $\theta$, can be changed, which in turn changes the focal length of the lens, $f$. The lensmaker's formula can be used to calculate the focal length and is given by
$$
\frac { 1 } { f } = \left( n _ { \text {liquid } } - n _ { \text {air } } \right) \left( \frac { 1 } { R _ { 1 } } - \frac { 1 } { R _ { 2 } } \right) ,
$$
where $n _ { \text {liquid } }$ and $n _ { \text {air } }$ are the refractive indices of the liquid in the lens and air around it, and $R _ { 1 }$ and $R _ { 2 }$ are the radii of curvature of the two surfaces of the lens. In figure 1, $R _ { 1 }$ is the curved face and $R _ { 2 }$ is the flat face. Use the lensmaker's formula to calculate the focal length of the lens in terms of the total volume of the liquid, the contact angle, and the relevant refractive indices.
Sidenote: liquid lenses are interesting because they are electrically controllable, variable focus lenses that can be very compact. People are working on putting them into cell phone cameras for ultracompact zoom lenses. For more information on this type of liquid lens, see T. Krupenkin, S. Yang, and P. Mach, "Tunable liquid microlens," Appl. Phys. Lett. 82, 316-318 (2003).

## Solution

a. Because the center of mass of the liquid rises, it is repelled by the surface.
b. The angle $\theta$ is also the angle between the vertical and the radii drawn above, so $\cos \theta = 1 - t / R$.
c. Let $z$ be the vertical distance from the top of the surface. Then
$$
V = \int _ { 0 } ^ { t } \pi r ^ { 2 } d z = \int _ { 0 } ^ { t } \pi \left( 2 R z - z ^ { 2 } \right) d z = \pi \left( R t ^ { 2 } - t ^ { 3 } / 3 \right)
$$

d. By rearranging, we have $t / R = 1 - \cos \theta$. Thus,
$$
V = \frac { \pi R ^ { 3 } } { 3 } ( t / R ) ^ { 2 } ( 3 - t / R ) = \frac { \pi R ^ { 3 } } { 3 } ( 1 - \cos \theta ) ^ { 2 } ( 2 + \cos \theta ) = \frac { \pi R ^ { 3 } } { 3 } \left( \cos ^ { 3 } \theta - 3 \cos \theta + 2 \right) .
$$
e. The radius of curvature of the flat face is $R _ { 2 } = \infty$, and $R _ { 1 } = R$, so
$$
f = \frac { R } { n _ { \text {liquid } } - n _ { \text {air } } } = \frac { 1 } { n _ { \text {liquid } } - n _ { \text {air } } } \left( \frac { 3 V } { \pi \left( \cos ^ { 3 } \theta - 3 \cos \theta + 2 \right) } \right) ^ { 1 / 3 } .
$$
This matches equation (3) of the cited paper.
