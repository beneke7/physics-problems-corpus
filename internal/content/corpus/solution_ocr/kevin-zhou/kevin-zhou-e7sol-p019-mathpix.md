---
id: solution-ocr-kevin-zhou-e7sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e7-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 19. The intensity of sunlight at noon is approximately $1 \mathrm {~kW} / \mathrm { m } ^ { 2 }$.

(a) Compute the rms magnetic field strength.
(b) Compute the radiation pressure acting on a mirror lying on the ground.
(c) In terms of the Lorentz force, how is this pressure exerted on the particles in the mirror?

Solution. (a) Note that the intensity is the Poynting vector. We have $\langle S \rangle = \frac { c } { \mu _ { 0 } } B _ { \text {rms } } ^ { 2 }$, so

$$
B _ { \mathrm { rms } } \approx 2 \times 10 ^ { - 6 } \mathrm {~T} .
$$

(b) We get a factor of 2 because the radiation bounces off the mirror, giving
$$
P = \frac { 2 S } { c } = 7 \times 10 ^ { - 6 } \mathrm {~Pa} .
$$
(c) The basic idea is that the particles are accelerated in the direction of E, and thus feel a force in the direction $( \mathbf { v } \times \mathbf { B } ) \| ( \mathbf { E } \times \mathbf { B } ) \| \mathbf { S }$.
However, making this more quantitative is more subtle. For an ideal free particle, a is in phase with E, which means v is 90° out of phase with E. Since B is in phase with E, the magnetic force $\mathbf { v } \times \mathbf { B }$ has time dependence of the form $\cos ( \omega t ) \sin ( \omega t )$, which averages to zero.
On the other hand, suppose the particle is attached to a damped harmonic oscillator, and $\omega$ is at the resonant angular frequency. Then from M4 results, v is instead in phase with E, which means the magnetic force has time dependence $\cos ^ { 2 } ( \omega t )$, which doesn't average to zero.
The point is, you need some kind of other force at play to produce a phase shift between a and $\mathbf { E }$, or else the force averages to zero. And this makes perfect sense from an energy conservation standpoint: a nonzero average force means momentum is taken out of the radiation, which means part of it is absorbed. This is only possible if the absorbed energy goes somewhere else, e.g. in the damped harmonic oscillator case it is dissipated by the damping force.
This raises yet another question: how it is possible for an isolated charge to scatter radiation, in Thomson or Compton scattering? The reason is that there is another force at play, namely the radiation reaction force acting on the particle. You can read more about this subtle force in section 11.2 of Griffiths.

[3] Problem 20 (Purcell 9.7). Consider the sum of two oppositely-traveling electromagnetic waves, with electric fields

$$
\mathbf { E } _ { 1 } = E _ { 0 } \cos ( k z - \omega t ) \hat { \mathbf { x } } , \quad \mathbf { E } _ { 2 } = E _ { 0 } \cos ( k z + \omega t ) \hat { \mathbf { x } } .
$$


(a) Write down the magnetic field.
(b) Draw plots of the energy density $U ( z , t )$ for $\omega t \in \{ 0 , \pi / 4 , \pi / 2,3 \pi / 4 , \pi \}$.
(c) Plot the Poynting vector for the same values of $\omega t$, and convince yourself that it describes how the energy sloshes back and forth.

Solution. (a) The answer is

$$
\mathbf { B } = \frac { E _ { 0 } } { c } ( \cos ( k z - \omega t ) - \cos ( k z + \omega t ) ) \hat { \mathbf { y } } = \frac { 2 E _ { 0 } } { c } \sin ( k z ) \sin ( \omega t ) \hat { \mathbf { y } } .
$$

(b) For the purposes of the following plots and calculations, we set $k = \omega = E _ { 0 } = B _ { 0 } = c = \mu _ { 0 } =$ $\epsilon _ { 0 } = 1$. In these units, we have $E = \cos ( z - t ) + \cos ( z + t ) = 2 \cos ( z ) \cos ( t )$ and therefore $U = \left( E ^ { 2 } + B ^ { 2 } \right) / 2 = 2 \left( \sin ^ { 2 } ( z ) \sin ^ { 2 } ( t ) + \cos ^ { 2 } ( z ) \cos ^ { 2 } ( t ) \right)$. Plotting this gives
![](../../../figures/solution-ocr/e6f973c4dbc0b2ef5b9c581d.jpg)
![](../../../figures/solution-ocr/0f33ba5993e0ca8f8dc5113b.jpg)
![](../../../figures/solution-ocr/cafce83a5413aa1a7c33e752.jpg)
![](../../../figures/solution-ocr/291e5d9264bf49664957afce.jpg)
for $0 , \pi / 4 , \pi / 2$, and $3 \pi / 4$ respectively, while the result for $\pi$ is the same as for 0.
(c) The Poynting vector is proportional to $\sin ( z ) \cos ( z ) \sin ( t ) \cos ( t ) \hat { \mathbf { z } }$, which is in turn proportional to $\sin ( 2 z ) \sin ( 2 t ) \hat { \mathbf { z } }$. The plot of this at the same times as above is:
![](../../../figures/solution-ocr/e9272b1f61e6f24e3ae4a8f8.jpg)
![](../../../figures/solution-ocr/8392880983d3c834f5318823.jpg)
![](../../../figures/solution-ocr/78b3ea579d1d3a4547c9f1ad.jpg)
![](../../../figures/solution-ocr/b1b45b09b5a0ea89f1a296c8.jpg)

Idea 9: Larmor Formula
An accelerating charge produces electromagnetic radiation, with power

$$
P = \frac { q ^ { 2 } a ^ { 2 } } { 6 \pi \epsilon _ { 0 } c ^ { 3 } } .
$$

We'll derive it properly in R3, but a lot of it can be motivated with the techniques of P1.
The power could only depend on $q , \epsilon _ { 0 } , \mu _ { 0 }$, and properties of the particle's motion. The only combinations of the first three parameters that get rid of the electromagnetic units are $q ^ { 2 } / \epsilon _ { 0 }$ and $1 / \sqrt { \epsilon _ { 0 } \mu _ { 0 } } = c$. Since energy is proportional to the electric and magnetic fields squared, and these fields are proportional to $q$, the answer must be proportional to $q ^ { 2 } / \epsilon _ { 0 }$.

Radiation can't result from uniform velocity, by Lorentz invariance; another way to see this is that with only $v$ and $c$, there is no way to write down an expression for power with the right units! The next simplest option is radiation from acceleration, from which the most general result is $P = \left( q ^ { 2 } a ^ { 2 } / \epsilon _ { 0 } c ^ { 3 } \right) f ( v / c )$. The fact that acceleration is squared is also natural,


because acceleration is a vector, so this is the simplest way to get a rotationally invariant result. The proper derivation shows that $f ( 0 ) = 1 / 6 \pi$. When $v / c$ is substantial, there are relativistic corrections, which we will consider in R3.
[2] Problem 21 (Purcell H.2). A common classical model of an electron in an atom is to imagine it is a mass on a spring, where the spring force is due to the atomic nucleus. Suppose that such an electron, with charge $e$, is vibrating in simple harmonic motion with angular frequency $\omega$ and amplitude $A$.
    (a) Find the average rate of energy loss by radiation.
    (b) If no energy is supplied to make up the loss, how long will it take the oscillator's energy to fall to $1 / e$ of its initial value?

Numerically, this is an extremely small time, so classical models of the atom are not realistic. We will see in X1 that in quantum mechanics this problem is solved because in the ground state the electron does not move around the atom, but rather occupies a standing wave.

Solution. (a) The average value of $a ^ { 2 }$ is $A ^ { 2 } \omega ^ { 4 } / 2$, giving

$$
\langle P \rangle = \frac { e ^ { 2 } A ^ { 2 } \omega ^ { 4 } } { 12 \pi \epsilon _ { 0 } c ^ { 3 } } .
$$


(b) If $m$ is the mass of the electron, then the energy of the system is $E = \frac { 1 } { 2 } m \omega ^ { 2 } A ^ { 2 }$. We see that
$$
\dot { E } = - \frac { e ^ { 2 } \omega ^ { 4 } } { 12 \pi \epsilon _ { 0 } c ^ { 3 } } \frac { 2 } { m \omega ^ { 2 } } E = - \frac { e ^ { 2 } \omega ^ { 2 } } { 6 m \pi \epsilon _ { 0 } c ^ { 3 } } E .
$$
This is an exponential decay, with characteristic time
$$
t = \frac { 6 m \pi \epsilon _ { 0 } c ^ { 3 } } { e ^ { 2 } \omega ^ { 2 } } .
$$
[3] Problem 22 (Purcell H.3). A plane electromagnetic wave with angular frequency $\omega$ and electric field amplitude $E _ { 0 }$ is incident on an atom. As in problem 21, we model the electron as a simple harmonic oscillator, with mass $m$ and natural angular frequency $\omega _ { 0 }$.
    (a) First suppose that $\omega \gg \omega _ { 0 }$. Argue that in this case, the "spring" force on the electron can be neglected. Find the average power radiated by the electron, and show that it is equal to the power incident on a disc of area
$$
\sigma = \frac { 8 \pi } { 3 } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } m c ^ { 2 } } \right) ^ { 2 } .
$$
This is the Thomson scattering cross section. To an electromagnetic wave, each electron looks like it has this area.
    (b) Now suppose $\omega \ll \omega _ { 0 }$, yielding Rayleigh scattering, which describes the scattering of visible light by air. In this case, show that $\sigma \propto \omega ^ { 4 }$. This sharp frequency dependence explains why the sky is blue.

(c) Explain the meaning of the common phrase "red sky at night, sailor's delight; red sky in morning, sailor's warning". (Hint: in the cultures where this saying is used, weather patterns usually move from west to east.)

For some further discussion of Rayleigh scattering, see section 9.4 of The Art of Insight. For more about colors in the atmosphere, see this nice video.

Solution. (a) As seen in M4, the amplitude of a driven harmonic oscillator is

$$
A = \frac { F _ { 0 } / m } { \sqrt { \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } + ( b \omega / m ) ^ { 2 } } } .
$$

Here, $b = 0$ and since $\omega \gg \omega _ { 0 }$, we have $A = e E _ { 0 } / m \omega ^ { 2 }$. Putting this into our answer in part (a) of the previous problem gets

$$
\langle P \rangle = \frac { e ^ { 2 } \omega ^ { 4 } } { 12 \pi \epsilon _ { 0 } c ^ { 3 } } \frac { e ^ { 2 } E _ { 0 } ^ { 2 } } { m ^ { 2 } \omega ^ { 4 } } = \frac { e ^ { 4 } E _ { 0 } ^ { 2 } } { 12 \pi \epsilon _ { 0 } m ^ { 2 } c ^ { 3 } }
$$

Since for electromagnetic radiation, $\langle S \rangle = \frac { 1 } { 2 } \epsilon _ { 0 } c E _ { 0 } ^ { 2 }$ so $\langle P \rangle = \sigma \langle S \rangle$, we can put this in the above expression to get

$$
\sigma = \frac { e ^ { 4 } E _ { 0 } ^ { 2 } } { 12 \pi \epsilon _ { 0 } m ^ { 2 } c ^ { 3 } } \frac { 2 } { \epsilon _ { 0 } c E _ { 0 } ^ { 2 } } = \frac { 8 \pi } { 3 } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } m c ^ { 2 } } \right) ^ { 2 } .
$$

(b) Now, our expression for $A$ will be $e E _ { 0 } / m \omega _ { 0 } ^ { 2 }$, which modifies the answer to
$$
\sigma = \frac { 8 \pi } { 3 } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } m c ^ { 2 } } \right) ^ { 2 } \frac { \omega ^ { 4 } } { \omega _ { 0 } ^ { 4 } } .
$$
In other words, higher frequencies are scattered much more. The atmosphere scatters most of the blue light from the Sun, and some of it hits your eyes, making the sky look blue.
You might wondering why the sky doesn't look violet, because the spectrum of the sky actually peaks in the violet range. It has to do with the physiology of human color vision. Your eyes contain three types of "cones", which are most sensitive to blue, green, and red. To detect color, your brain looks at how much each cone is excited. Referring to the graphic here, pure blue light excites the blue cone a lot, and the green and red cones a little. Pure violet light excites the blue cone a moderate amount, doesn't excite the green cone, and excites the red cone a small amount, due to a quirk of physiology. (That's why the color wheel wraps around, so that violet ends up feeling similar to red, even though they're as far apart in wavelength as possible.) When you account for the total excitation of the cones, due to the full spectrum of the sky, the net result is that the blue cone is excited a lot, and the green and red cones are each excited a little, so the result looks blue.
(c) See this nice explanation for details.
[3] Problem 23. USAPhO 2016, problem B2.

Remark
We noted in M7 that clouds are visible because the radiation scattered by a small droplet of $n$ water molecules grows as $n ^ { 2 }$. To understand why, note that each of the molecules performs independent Rayleigh scattering, as computed above. For separated molecules, the energy scattered just adds. However, for nearby molecules the electromagnetic waves scattered interfere constructively, so the amplitude grows as $n$ and hence the energy scattered as $n ^ { 2 }$.

This quadratic enhancement breaks down once the droplets exceed the wavelength $\lambda$ of the light. This means the maximum possible enhancement is larger for larger wavelengths, acting against the $\omega ^ { 4 }$ dependence of Rayleigh scattering. This is why clouds are white, not blue.

Radiation pressure can also have mechanical effects.
Example 5: NBPhO 2018.6
A laser pointer of power $P$ is directed at a glass cube, with refractive index $n > \sqrt { 2 }$. The surface of the cube has an anti-reflective coating, so there is no partial reflection when light enters or exits it; the laser pointer only refracts. What is the maximum force the laser pointer can exert on the cube?

Solution
The force is due to a change in momentum of the light. The greatest possible force is attained if the direction of the light is reversed, which can occur as shown, in the limit $\alpha \rightarrow 90 ^ { \circ }$.
![](../../../figures/solution-ocr/43dffbf60938cd2945e0a388.jpg)
Assuming $n > \sqrt { 2 }$, we then have $\theta _ { r } < 45 ^ { \circ }$, and then the laser internally reflects when it hits the top surface of the cube. It exits in the opposite direction it came in.

If the laser pointer has power $P$, then the momentum of the laser beam per time is $P / c$. The momentum is reversed, so the force is $2 P / c$.
[3] Problem 24 (IZhO 2022). In 2018, the Nobel Prize in physics was awarded to Arthur Ashkin for the creation of the "laser tweezer", a device that allows one to hold and move transparent microscopic objects with the help of light. In one such device, a parallel beam of light from a laser


passes through a converging lens $L$ and hits a microparticle $M$, which can also be considered a converging lens. Point $F$ is the common focus of $L$ and $M$.
![](../../../figures/solution-ocr/8bfeb7f051c67ece773fb7ff.jpg)
![](../../../figures/solution-ocr/31b757d0fd74c55f5c01af76.jpg)
The light intensity in the beam is $I = 1.00 \mu \mathrm {~W} / \mathrm { cm } ^ { 2 }$, the beam radius is $R = 1.00 \mathrm {~cm}$, and the focal length of the lens $L$ is $F = 10.0 \mathrm {~cm}$. Ignore the absorption and reflection of light.

(a) Calculate the force acting on the microparticle, in the setup shown at left above.
(b) Next, the left half of the lens $L$ is covered by a diaphragm, as shown at right above. Calculate the force acting on the microparticle in the transverse direction of the beam.

Solution. See the official solutions of IZhO 2022.

[3] Problem 25 (Feynman). In one proposed means of space propulsion, a spaceship of mass $10 ^ { 3 } \mathrm {~kg}$ carries a thin sheet of area $100 \mathrm {~m} ^ { 2 }$. The sheet is made of highly reflective plastic film, and can be used as a solar radiation pressure "sail". The spaceship travels in a circular orbit of radius $r$, which is initially equal to the Earth's orbit radius, where the intensity of sunlight is $1400 \mathrm {~W} / \mathrm { m } ^ { 2 }$. Assume the spaceship is moving nonrelativistically and the gravitational effect of the Earth is negligible.
    (a) Find the angle at which the sail should be pointed to maximize $d r / d t$.
    (b) Assuming the sail is pointed this way, find the numeric value of $d r / d t$.
    (c) If this continues for a very long time, then $r$ will grow as $r \propto t ^ { n }$. Find the value of $n$.

Solution. (a) Since $E = - G M m / 2 r$, increasing radius as fast as possible is the same as imparting the most energy to the spaceship; in other words, we want to maximize $\mathbf { F } \cdot \mathbf { v }$. The velocity is almost purely tangential, so only the tangential component of the force contributes to the power.
Let the normal vector of the sail be at an angle $\theta$ to the radial direction. To find the net force on the sail, we can think of the reflection process in two steps: absorbing the light and reemitting it. Absorbing the light yields an outward radial force $F$. Reemitting it yields a force $F$ of the same magnitude, directed at an angle $2 \theta$ to the radial direction.

Only the second force can contribute to the power, so

$$
P = \mathbf { F } \cdot \mathbf { v } = F v \sin 2 \theta .
$$

Finally, since the radial area covered by the sail is $A \cos \theta$, we have $F = I ( A \cos \theta ) / c$, so

$$
P = \frac { 2 I A v } { c } \sin \theta \cos ^ { 2 } \theta .
$$


Setting the derivative to zero, the maximum is at $\theta = \sin ^ { - 1 } ( 1 / \sqrt { 3 } ) = 35.3 ^ { \circ }$, giving power
$$
P _ { \max } = \beta \frac { I A v } { c } , \quad \beta = \frac { 4 } { 3 \sqrt { 3 } } \approx 0.77 .
$$
Strictly speaking, the answer is very slightly different, by corrections of order $v / c$, since the spaceship is moving, but we'll neglect this here.
(b) The power is
$$
P = \frac { d E } { d t } = \frac { G M m } { 2 r ^ { 2 } } \frac { d r } { d t } .
$$
We also know from force balance that
$$
\frac { G M m } { r ^ { 2 } } = \frac { m v ^ { 2 } } { r }
$$
since the radial force from the sail is negligible, and combining these results gives
$$
\frac { d r } { d t } = \frac { \beta I A } { c } \frac { 2 r } { m v } = \frac { 2 \beta I A } { m \omega c }
$$
where $\omega = 2 \pi / ( 1$ year $)$ is the angular velocity of the Earth. Plugging in the numbers gives $d r / d t = 3.6 \mathrm {~m} / \mathrm { s }$.
(c) We have
$$
\frac { d r } { d t } \propto \frac { I r } { v } \propto \frac { \left( 1 / r ^ { 2 } \right) r } { 1 / \sqrt { r } } = \frac { 1 } { \sqrt { r } }
$$
Separating and integrating gives $t \propto r ^ { 3 / 2 }$ in the long run (i.e. when the contribution from the initial condition is negligible), so $n = 2 / 3$.

Finally, we'll consider electromagnetic wave propagation in transmission lines.
[4] Problem 26 (Griffiths 7.62, Crawford 4.8). A certain transmission line is constructed from two thin metal ribbons, of width $w$, a very small distance $h \ll w$ apart. The current travels down one strip and back along the other. In each case it spreads out uniformly over the surface of the ribbon.

(a) Find the capacitance per unit length $\mathcal { C }$, and the inductance per unit length $\mathcal { L }$.
(b) Argue that the speed of propagation of electromagnetic waves through this transmission line is of order $1 / \sqrt { \mathcal { L } \mathcal { C } }$, and evaluate this quantity.
(c) Repeat the first two parts for a coaxial transmission line, consisting of two cylinders of radii $a < b$ with the same axis of symmetry.
(d) Repeat the first two parts for a parallel-wire transmission line, consisting of two wires of radius $r$ whose axes are a distance $D \gg r$ apart.

You should find that in all cases, $1 / \sqrt { \mathcal { L } \mathcal { C } }$ is the same, yielding the same speed for electromagnetic waves. This actually holds for transmission lines with conductors of any shape, though the general proof requires some vector calculus.

Solution. Suppose the length is $\ell$.


(a) We have $C = \epsilon _ { 0 } w \ell / h$, so $\mathcal { C } = \epsilon _ { 0 } w / h$. Similarly, $L = \frac { \mu _ { 0 } h } { w } \ell$, so $\mathcal { L } = \mu _ { 0 } h / w$.
(b) The timescale to propagate a unit length is $1 / \sqrt { \mathcal { L } \mathcal { C } }$, which means the typical speed is $1 / \sqrt { \mathcal { L } \mathcal { C } }$. This also follows from dimensional analysis.
(c) The capacitance of two coaxial cylinders can be found by giving the inner cylinder a charge $Q$ and using $C = Q / V$, where
$$
V = \int E d s = \int _ { a } ^ { b } \frac { ( Q / \ell ) } { 2 \pi \epsilon _ { 0 } r } d r = \frac { Q / \ell } { 2 \pi \epsilon _ { 0 } } \log ( b / a )
$$
and therefore
$$
\mathcal { C } = \frac { 2 \pi \epsilon _ { 0 } } { \log ( b / a ) } .
$$
To find the inductance for a transmission line setup, the current will flow parallel to the axis, so by Ampere's law the field inside the region is $B = \mu _ { 0 } I / 2 \pi r$, and using $L = \Phi / I$ where $\Phi$ will be the flux going around the inner cylinder will give
$$
\Phi = \int _ { a } ^ { b } \ell \frac { \mu _ { 0 } I } { 2 \pi r } d r = \frac { \mu _ { 0 } I \ell } { 2 \pi } \log \left( \frac { b } { a } \right)
$$
and therefore
$$
\mathcal { L } = \frac { \mu _ { 0 } } { 2 \pi } \log \left( \frac { b } { a } \right) .
$$
Thus we get $1 / \sqrt { \mathcal { L } \mathcal { C } } = c$.
(d) The capacitance can be found similarly (factors of 2 appear because the negative charge/opposing current will contribute to the E and B fields too),
$$
\begin{gathered}
V = \int _ { r } ^ { D } \frac { 2 Q / \ell } { 2 \pi \epsilon _ { 0 } r } d r , \quad \mathcal { C } = \frac { \pi \epsilon _ { 0 } } { \log ( D / r ) } \\
\Phi _ { B } = \int _ { r } ^ { D } \frac { 2 \mu _ { 0 } I } { 2 \pi r } d r , \quad \mathcal { L } = \frac { \mu _ { 0 } } { \pi } \log \left( \frac { D } { r } \right)
\end{gathered}
$$
This gives $1 / \sqrt { \mathcal { L } \mathcal { C } } = c$.
