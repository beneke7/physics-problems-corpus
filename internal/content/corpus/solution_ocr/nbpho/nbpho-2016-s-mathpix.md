---
id: solution-ocr-nbpho-2016-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2016-dimmer, nbpho-2016-fuel-consumption, nbpho-2016-glass-plate, nbpho-2016-helium, nbpho-2016-oscillations]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Nordic-Baltic Olympiad 2016 Solutions

1. Fuel consumption If the car produces a forward force $F$ at a speed of $v$, then the work done on a path length $s$ is $W = F s$. Since the efficiency is constant, this work is proportional to the consumed fuel volume, $W = k s f$, where $f = f ( t )$ denotes the fuel consumption rate (volume per distance), and $k$ is a proportionality coefficient. Hence, $F = k f ( t )$, i.e. the fuel consumption graph can be interpreted as a force graph. The proportionality constant $k$ can be found from the fact that when the car is starting from the rest, there is no air drag (air drag is zero if speed is zero), and hence, all the driving force goes to accelerating the car, $F ( 0 \mathrm {~s} ) = m a _ { 0 }$. Keeping in mind that $f ( 0 \mathrm {~s} ) = 331 / 100 \mathrm {~km} =$ $m a _ { 0 } / k = \frac { m g } { 2 k }$, we obtain $\frac { k } { m g } = 1.52 \mathrm {~km} / \mathrm { l }$. At $v _ { 0 } = 90 \mathrm {~km} / \mathrm { h }$, there is air drag which we need to consider, but since the speed is constant, so is the force from the air drag and we can just subtract $F ( 16 \mathrm {~s} )$ to get the force without the air drag. The increased fuel consumption when going uphill at an angle $\alpha$ comes from the component of the gravitational force tangential to the road $F ( t ) - F ( 16 \mathrm {~s} ) = m g \sin ( \alpha )$. The highest point with $\sin \alpha = 0$ is reached when the fuel consumption is again equal to that at 16 s , which is at 22 s. The work done by the force pushing the car $W = \int [ F ( t ) - F ( 16 \mathrm {~s} ) ] \mathrm { d } s = \int [ F ( t ) -$ $F ( 16 \mathrm {~s} ) ] v _ { 0 } \mathrm {~d} t = \frac { k } { v _ { 0 } } \int _ { 16 \mathrm {~s} } ^ { 22 \mathrm {~s} } [ f ( t ) - f ( 16 \mathrm {~s} ) ] \mathrm { d } t$ goes to the change of the potential energy $m g h$; here the integral $I \equiv \int _ { 16 \mathrm {~s} } ^ { 22 \mathrm {~s} } [ f ( t ) - f ( 16 \mathrm {~s} ) ] \mathrm { d } t \approx$ $0.381 \mathrm {~s} / \mathrm { km }$ is found as a surface area from the graph [the area between the graph and the line $f ( t ) = f ( 16 \mathrm {~s} )$ ]. Therefore, $h = W / m g =$ $\frac { k I } { v _ { 0 } m g }$; with $\frac { k } { m g } = 1.52 \mathrm {~km} / \mathrm { l }$ we obtain $h \approx$ 14 m.

The problem was graded as follows.

- Relating consumption rate $C$ to $F - 1.5 \mathrm { p }$
- Determining the coeff. of proportionality based on $C ( 0 ) = 33 \mathrm {~L} / 100 \mathrm {~km}$ and $a ( 0 ) =$

$5 \mathrm {~m} / \mathrm { s } ^ { 2 } - 0.5 \mathrm { p }$

- Noticing that max height is at 21 s - 0.5 p
- Noticing that due to friction, only the excess consumption is related to mgh - 1 p
- Relating the excess area under the curve $( S )$ to $m g h - 1 \mathrm { p }$
- Finding $S - 0.3 \mathrm { p }$
- Finding $h$ - 0.2 p
2. Glass plate
i) The energy and impulse of a photon are related by $E = p c$. Because the incident side is black, it will absorb the photons and feel the force due to their momentum: $F _ { a } = \frac { d p } { d t }$, where $\frac { d p } { d t } =$ $\frac { 1 } { c } \frac { d E } { d t } = \frac { P } { c }$ is the impulse of the photons generated per unit time. $F _ { a } = \frac { P } { c }$.
ii) A fraction $r$ of the photons will be reflected, so they will exert twice the force, because the momentum change is twice as much as compared to absorbing them. A fraction $1 - r$ will be absorbed and will give a force similar to the previous expression.

$$
F _ { b } = 2 r \frac { P } { c } + ( 1 - r ) \frac { P } { c } = ( 1 + r ) \frac { P } { c } .
$$

iii) The light will be reflected many times and we will have to consider interference. Since energy is proportional to the square of the amplitude of the electric field, if a fraction $r$ of the photons and therefore of the energy is reflected, the amplitude of the reflected wave's electric field is $\sqrt { r }$ of the incident electric field. Let's calculate the total electric field amplitude of the wave that goes through. Denote by $E _ { i }$ the electric field of the incident wave and by $E _ { t }$ the electric field of the wave that has gone through the other side of the glass. On the incident side the proportion of the electric field amplitude that goes through is $\sqrt { 1 - r }$, of which a part $\sqrt { 1 - r }$ will go through and part $\sqrt { r }$ will bounce pack. So a wave with amplitude $E _ { 0 } = ( 1 - r ) E _ { i }$ went straight through and a wave with amplitude $\sqrt { ( 1 - r ) r } E _ { i }$ is bouncing back through the glass. Now it will go back to the first side, reflect back from there and of that a proportion $\sqrt { 1 - r }$ will go through and add to $E _ { t }$. However the wave has traveled an optical path $2 n d = 200.5 \lambda$, so it will be 180 degrees out of phase and we get $E _ { 1 } = - ( 1 - r ) r E _ { i }$. Repeating the procedure $E _ { 2 } = ( 1 - r ) r ^ { 2 } E _ { i }$ and so on $E _ { n } = ( 1 - r ) ( - r ) ^ { n } E _ { i }$. Summing all the electric fields that go through the other side of the glass we get:

$$
E _ { t } = \sum _ { n = 0 } ^ { \infty } E _ { n } = ( 1 - r ) E _ { i } \sum _ { n = 0 } ^ { \infty } ( - r ) ^ { n } = \frac { 1 - r } { 1 + r } E _ { i }
$$

Power is proportional to the square of the electric field:

$$
\frac { P _ { t } } { P } = \left( \frac { E _ { t } } { E _ { i } } \right) ^ { 2 } = \left( \frac { 1 - r } { 1 + r } \right) ^ { 2 } .
$$

Since power is also proportional to the number of photons, this fraction of the photons have gone through and haven't given their momentum to the glass. By energy conservation the rest have been reflected back toward the laser and since their momentum has been reversed:

$$
\begin{aligned}
F _ { c } & = 2 \left( \frac { P - P _ { t } } { c } \right) = \frac { 2 P } { c } \left( 1 - \left( \frac { 1 - r } { 1 + r } \right) ^ { 2 } \right) \\
& = \frac { 8 P r } { c ( 1 + r ) ^ { 2 } }
\end{aligned}
$$

Note: if we would calculate directly the total electric field of the reflected light, we would need to take into account that on the first reflection of the laser light from the glass there is a phase shift of 180 degrees due to reflection from a surface with a higher refractive index (air to glass surface).

Alternative solution: The light is bouncing back and forth. Inside the glass there is some sum of waves with the same frequency, which we can represent as a single wave moving forward and a single wave moving backwards. Denote by $E$ the wave amplitude of the forward moving wave right under the surface in the glass. The wave amplitude is constant at that point and it is made of the transmitted part of the incoming light $\sqrt { 1 - r } E _ { i }$ and from the 180 degrees out of phase part of $E$ itself as it bounces twice inside the glass to arrive at the same point back again: $- r E$. We get the relation:

$$
E = \sqrt { 1 - r } E _ { i } - r E \quad \rightarrow \quad E = \frac { \sqrt { 1 - r } } { 1 + r } E _ { i } .
$$

The wave that has gone all the way through the plate is

$$
E _ { t } = \sqrt { 1 - r } E = \frac { 1 - r } { 1 + r } E _ { i } .
$$

The rest follows as in the previous solution.
3. Music
i) For the tubular bells we can find the speed of sound in steel using dimensional analysis. It can depend on the young modulus $E$ and on the density $\rho$. We find that $v \propto \sqrt { \frac { E } { \rho } } \propto \sqrt { \frac { E L ^ { 3 } } { m } }$, where $L$ is the characteristic length of the bell. The speed, frequency and wavelength are related by $f =$ $\frac { v } { \lambda }$. For a standing wave to exist on the bell, the wavelength must be proportional to it's characteristic length, because it has anti-nodes at the ends: $\lambda \propto L$. We get $f \propto \frac { \sqrt { L ^ { 3 } } } { L } = \sqrt { L }$. Due to thermal expansion, the lengths scale by $( 1 + \alpha \Delta T )$, where $\alpha$ is the coefficient of thermal expansion. Using this we have $f = f _ { 0 } \sqrt { 1 + \alpha \Delta T } \approx 330.04 \mathrm {~Hz}$. This is a very small change from $f _ { 0 } = 330 \mathrm {~Hz}$.

For the pipe organ we also have $f = \frac { v } { \lambda }$. The sound is generated by a standing wave in the air column. The speed $v$ in the formula is the speed of sound in the air. As in the previous case, the wavelength has to be proportional to the length of the pipe for a standing wave to exist and the length scales by $( 1 + \alpha T )$. Since $\alpha T \approx$ $2.4 \times 10 ^ { - 4 }$ is much smaller than the change in the speed of sound, we can ignore it. Using the given formula for the speed of sound, we have $f = f _ { 0 } \sqrt { 1 + \frac { 45 } { 273.15 } } / \sqrt { 1 + \frac { 25 } { 273.15 } } \approx 341 \mathrm {~Hz}$. This is a significant change.


For the guitar string the speed of the wave can depend on the mass $m$ of the string, the length $L$ and the tension $T$. Using dimensional analysis we get $v \propto \sqrt { \frac { L T } { m } }$. A more accurate derivation will show that the constant of proportionality is 1 , which would be the simplest guess. The lowest frequency on the string has a wavelength of $2 L$, because the wave has to have nodes at the ends of the string. The tension is given by $T = E S \Delta L / L$, where $\Delta L$ is the change in length of the string due to the tension and $S$ is the area of the cross section of the string. Putting it all together:

$$
f = \frac { \sqrt { \frac { L T } { m } } } { 2 L } = \frac { \sqrt { \frac { L E S \Delta L / L } { \rho S L } } } { 2 L } = \frac { \sqrt { \frac { E \Delta L / L } { \rho } } } { 2 L } .
$$

Let's find $\frac { \Delta L } { L } = \frac { \rho } { E } ( 2 L f ) ^ { 2 } \approx 7.3 \times 10 ^ { - 3 }$. When the temperature increases and the string stretches, the relative lengthening $\frac { \Delta L } { L }$ will decrease by $\alpha T , \frac { \Delta L } { L } \rightarrow \frac { \Delta L } { L } - \alpha T =$ $\frac { \Delta L } { L } \left( 1 - \frac { \alpha T } { \Delta L / L } \right) = \frac { \Delta L } { L } \left( 1 - 3.3 \times 10 ^ { - 2 } \right)$. This proportional change is larger than the changes in the other factors (the lengths get scaled by $( 1 + \alpha \Delta T ) )$, which we can ignore. We get $f =$ $f _ { 0 } \sqrt { 1 - 3.3 \times 10 ^ { - 2 } } \approx 325 \mathrm {~Hz}$. This is also a significant change when the instruments are playing together.
ii) For the tubular bells and for the guitar the frequency is determined by the properties and the speed of sound of the metal and therefore doesn't change in the heliox. For the pipe organ, the sound is generated directly by the vibrating air column in the pipe and changing the air to heliox will change the frequency. The wavelength is determined by the length of the pipe and since the frequency is $f = \frac { v } { \lambda }$, it will change proportionally with the speed of sound, $f = 1.7 \cdot f _ { 0 } \approx 561 \mathrm {~Hz}$. This is a very significant change.

## 4. Dimmer

i) Denote $\omega = 2 \pi f$. Adding an imaginary component to the voltages $u = U e ^ { j \omega t }$ and $u _ { C } = U _ { C } e ^ { j ( \omega t + \varphi ) }$ (with $j$ being the imaginary unit), there is a relation $u _ { C } =$ $u z _ { C } / \left( R + z _ { C } \right)$, where the capacitor's impedance $z _ { C } = 1 / ( j \omega C )$. Calculating, we get $k \equiv z _ { C } / \left( R + z _ { C } \right) = 1 / ( j \omega R C +$ $1 ) = 1 / \left[ \sqrt { 1 + ( \omega R C ) ^ { 2 } } \times e ^ { j \arctan ( \omega R C ) } \right]$. Therefore $U _ { C } = U | k | = U / \sqrt { 1 + ( 2 \pi f R C ) ^ { 2 } }$ and $\varphi = \arg k = - \arctan ( 2 \pi f R C )$. (The answers could also be obtained by analyzing a vector diagram.)
ii) The diac starts to conduct when the voltage on the capacitor rises to $U _ { b }$. This voltage is then applied to the series connection of $R _ { t }$ and the diac, whose voltage has dropped to $U _ { d }$. Therefore the current through the diac is $\left( U _ { b } - U _ { d } \right) / R _ { t }$ and the inequality is $R _ { t } I _ { t } < U _ { b } - U _ { d }$.
iii) At $t _ { 0 }$, the voltage on the capacitor becomes larger than $U _ { b }$. Thus, $U _ { C } \sin \left( 2 \pi f t _ { 0 } + \varphi \right) = U _ { b }$ and $t _ { 0 } = \left[ \arcsin \left( U _ { b } / U _ { C } \right) - \varphi \right] / ( 2 \pi f )$.
iv) The lamp is lit at phase $2 \pi f t _ { 0 }$ and turned off at phase $\pi$. The power is proportional to the voltage squared, giving the ratio

$$
r = \frac { \int _ { 0 } ^ { \pi } \sin ^ { 2 } \alpha \mathrm {~d} \alpha } { \int _ { 2 \pi f t _ { 0 } } ^ { \pi } \sin ^ { 2 } \alpha \mathrm {~d} \alpha }
$$

Because $\int \sin ^ { 2 } \alpha \mathrm {~d} \alpha = \int \frac { 1 - \cos ( 2 \alpha ) } { 2 } \mathrm {~d} \alpha = \frac { \alpha } { 2 } -$ $\frac { \sin ( 2 \alpha ) } { 4 }$, we get

$$
\begin{aligned}
r & = \frac { \left( \frac { \pi } { 2 } - \frac { \sin ( 2 \pi ) } { 4 } \right) - \left( \frac { 0 } { 2 } - \frac { \sin ( 0 ) } { 4 } \right) } { \left( \frac { \pi } { 2 } - \frac { \sin ( 2 \pi ) } { 4 } \right) - \left( \frac { 2 \pi f t _ { 0 } } { 2 } - \frac { \sin \left( 4 \pi f t _ { 0 } \right) } { 4 } \right) } \\
& = \frac { 1 } { 1 - 2 f t _ { 0 } + \frac { \sin \left( 4 \pi f t _ { 0 } \right) } { 2 \pi } }
\end{aligned}
$$

5. Candy wrapper The setup is as follows. First the candy wrapper is cut in half and then wound around the hexagonal pencil on both ends $A$ times and fixed tightly against the other pencil using the rubber bands. That way there is a gap of width Ad between the two pencils. The laser light is directed through the gap between the two pencils and the resulting diffraction pattern is displayed on the screen (which is fixed vertically to the stand). We can keep the pencils and laser horizontal using the given clamps and adjust the height of the laser so it passes through the gap by placing sheets of paper below the laser. Because the pencil surface is rough the gap between the pencils varies. In order to diminish this effect we can put more layers of the candy wrapper between the pencils. The resulting experimental values are displayed on the table, where $N$ is the number of local maxima or minima on the screen, $a$ is the distance between the first and last measured maximum or minimum and $L$ is the distance from the screen to the pencils. Note that the central maximum is double-wide and we have to take it into account when counting minima (as it covers one minimum) and take it into account twice when counting maxima.

| $A$ | $N$ | $a ( \mathrm {~cm} )$ | $L ( \mathrm {~cm} )$ | $d ( \mu \mathrm {~m} )$ |
| :--- | :--- | :--- | :--- | :--- |
| 12 | 21 | 2.4 | 70 | 20 |
| 12 | 14 | 1.6 | 63 | 29 |
| 8 | 9 | 1.3 | 60 | 23 |

Let $\theta$ be the angle of incidence of the laser light that lands on the screen. Then the difference between the angles for the different maxima or minima can be expressed as $\theta \approx \frac { a } { L }$ using the small angle approximation. The number of maxima or minima can be expressed using $A \theta d =$ $N \lambda$. Then

$$
d = \frac { N \lambda } { A \theta } = \frac { N \lambda L } { A a }
$$

Using the data from the table we get $d = 25 \mu \mathrm {~m}$. The main contributing factor for uncertainty comes from the roughness of the pencil which can be estimated using the maximal and minimal values of measured wrapper thickness. Then $\Delta d \approx$ $\frac { d _ { \text {max } } - d _ { \text {min } } } { 2 } = 4.5 \mu \mathrm {~m}$.

## 6. Charge on a ring

i) The speed $v$ is just the magnitude of $r \dot { \phi }$, and energy conservation gives us that

$$
v ^ { 2 } + \frac { C } { \left| \mathbf { r } - \mathbf { r } _ { Q } \right| } = \text { const. } = 2 E / m ,
$$

where $C = \frac { Q q } { 2 \pi m \epsilon _ { 0 } }$. The value hence must equal the initial value. The figure indicates that $\phi ( 0 ) =$ 0 and $\phi _ { Q } = - \pi / 2$, and we get:

$$
v ( \phi ) ^ { 2 } = v _ { 0 } ^ { 2 } + \frac { C } { \sqrt { r ^ { 2 } + d ^ { 2 } } } - \frac { C } { \sqrt { r ^ { 2 } + d ^ { 2 } + 2 r d \sin \phi } } ,
$$

and $v ( \phi )$ is just the square-root of this.
ii) The force $F _ { n }$ from the ring is a constraint force, normal to the ring, and balances the other forces to give a total perpendicular force equal to the required centripetal force $F _ { c } = m v ^ { 2 } / r$, directed inwards. The other force is the Coulomb repulsion (if $C > 0$ ) from $Q$, with a magnitude $F _ { Q } = \frac { m C } { 2 \left( r ^ { 2 } + d ^ { 2 } + 2 r d \sin \phi \right) }$. Its perpendicular component acquires a factor of $\cos \alpha$, with $\alpha$ the angle between the local radius vector and the line $Q q$. The cosine theorem on the triangle defined by $q , Q$, and the ring's center yields $\cos \alpha =$ $\frac { r + d \sin \phi } { \sqrt { r ^ { 2 } + d ^ { 2 } + 2 r d \sin \phi } }$. We have $\cos \alpha > 0$ consistently, the normal part of $F _ { Q }$ pointing outwards everywhere (in the repulsive case). We get for the force from the ring

$$
F _ { n } = \frac { m v ^ { 2 } } { r } + \frac { m C ( r + d \sin \phi ) } { 2 \left( r ^ { 2 } + d ^ { 2 } + 2 r d \sin \phi \right) ^ { 3 / 2 } } ,
$$

with both terms directed inwards in the repulsive case of $C > 0$, else the second term will point outwards.
iii) When the particle has come to rest, the friction force parallel to the ring is automatically zero, but the other forces must balance. All normal forces are automatically balanced by the ring. We need to consider the longitudinal force, which can only come form the Coulomb force on $q$, and so its longitudinal component must vanish. This can only happen in two places, at the maximal and minimal distance from $Q$, i.e. at the top or bottom point. These points correspond to a minimum and maximum, respectively, of the electrostatic potential, and only the former would be stable for the repulsive case of $q Q > 0$ (else the opposite).


7. Helium The heat required for vaporization comes from the heat energy of the liquid: $\lambda \mathrm { d } m = m c ( T ) \mathrm { d } T$. By separating the variables $m$ and $T$ and integrating, we get:

$$
\begin{aligned}
\lambda \int _ { m _ { 0 } } ^ { m } \frac { \mathrm {~d} m ^ { \prime } } { m ^ { \prime } } & = \int _ { T _ { 0 } } ^ { T } c \mathrm {~d} T ^ { \prime } \\
\lambda \ln \frac { m } { m _ { 0 } } & = \int _ { T _ { 0 } } ^ { T } c \mathrm {~d} T ^ { \prime } \\
\frac { m } { m _ { 0 } } & = \exp \frac { \int _ { T _ { 0 } } ^ { T } c \mathrm {~d} T ^ { \prime } } { \lambda }
\end{aligned}
$$

By numerically approximating the integral from the given graph, we get $\int _ { T _ { 0 } } ^ { T } c \mathrm {~d} T ^ { \prime } \approx$ $- 5.2 \mathrm {~kJ} \mathrm {~kg} ^ { - 1 }$. Thus the fraction of liquid that was vaporized is

$$
\begin{equation*}
\frac { m _ { 0 } - m } { m _ { 0 } } = 1 - \frac { m } { m _ { 0 } } \approx 1 - \exp \frac { - 5.2 \mathrm {~kJ} \mathrm {~kg} ^ { - 1 } } { 22 \mathrm {~kJ} \mathrm {~kg} ^ { - 1 } } \approx \tag{0.21.}
\end{equation*}
$$

8. Oscillations
i) The stiffness $k$ of the spring is found from the force balance $m g = k x$, thus $k = m g / x$. The period of oscillations for such a spring pendulum is $T = 2 \pi \sqrt { m / k } \stackrel { ! } { = } 2 \pi \sqrt { l / g } \quad \Longrightarrow \quad l =$ $m g / k = x$.
ii) Apply Gauss's theorem to a sphere with radius $r$, concentric with the asteroid. By symmetry, the field strength (the gravitational acceleration) is constant on the sphere, thus the flux of this field strength equals the area of the sphere multiplied by field strength (with a minus sign, because the force is directed inwards). On the other hand, Gauss's theorem states that this flux equals $- 4 \pi G$ times the total mass inside the sphere. Formulaically (denote the asteroid's density by $\varrho$ ), $- 4 \pi r ^ { 2 } g = - 4 \pi G \times \frac { 4 } { 3 } \pi r ^ { 3 } \varrho$ and $g = \frac { 4 } { 3 } \pi G \varrho r =$ $G M r / R ^ { 3 }$ (denoting the total mass by $M$ and the total radius by $R$ ). Whenever we have an attractive force that is proportional to the displacement, we have harmonic motion (like in a spring pendulum).
iii) Identifying the gravitational acceleration as the centripetal acceleration, $G M / R ^ { 2 } =$ $\omega _ { o } ^ { 2 } R \quad \Longrightarrow \quad \omega _ { o } ^ { 2 } = G M / R ^ { 3 }$ (with $\omega _ { o }$ being the orbital angular speed). The time of reaching the friend is $t _ { o } = T _ { o } / 2 = \frac { 2 \pi } { \omega _ { o } } / 2 = \pi / \omega _ { o }$. Through the hole, on the other hand, we have half a period of an effective spring pendulum with a "stiffness" $k = G M m / R ^ { 3 }$ : namely, $t _ { h } =$ $T _ { h } / 2 = \frac { 2 \pi } { \omega _ { h } } / 2 = \pi / \omega _ { h }$. From the "stiffness" and a general formula for a spring pendulum, $\omega _ { h } ^ { 2 } =$ $k / m = G M / R ^ { 3 } = \omega _ { o } ^ { 2 }$. Therefore $t _ { o } = t _ { h } -$ the times are equal!
iv) As the motion after a bounce equals the timereversed motion before the bounce, the period is twice the time of the first bounce $\left( t _ { b } \right)$. For a constant acceleration, $h = g t _ { b } ^ { 2 } / 2 \Longrightarrow T = 2 t _ { b } =$ $2 \sqrt { \frac { 2 h } { g } }$. On the Earth, $g \approx 10 \mathrm {~m} / \mathrm { s } ^ { 2 }$, therefore $T = 2 \sqrt { \frac { 2 \times 50 \mathrm {~cm} } { 10 \mathrm {~m} / \mathrm { s } ^ { 2 } } } \approx 0.6 \mathrm {~s}$.

This is not a harmonic motion, because the displacement is a quadratic function of time, not a sinusoid. Also, here the restoring force is not proportional to displacement.

## 9. Deflection on Falling

i) The Earth is rotating with angular velocity $\omega = \frac { 2 \pi } { T }$, where $T = 24 \mathrm {~h}$. The velocities at the top and bottom of the shaft are $v _ { t } = \omega R$ and $v _ { b } = \omega ( R - h )$, where $R$ is radius of Earth. The difference of the velocities is thus $\Delta v = v _ { t } - v _ { b } =$ $\omega h \approx 7.3 \mathrm {~mm} / \mathrm { s }$.
ii) The time of free fall can be found from the relation $h = g t ^ { 2 } / 2$, giving $t = \sqrt { 2 h / g }$. Thus, the horizontal displacement is simply $\Delta x = \Delta v t =$ $\omega h t = \omega \sqrt { 2 h ^ { 3 } / g } \approx 33 \mathrm {~mm}$.
iii) There are at least three different approaches to this problem; one is using the angular momentum conservation law, second one is based on Kepler's laws (given later below), and the third one - which we don't consider here - is based on Coriolis force formula.

Consider the rotation speed $\omega ^ { \prime }$ of the radius vector drwan from the falling body to the centre of Earth, and let us compare this speed with the rotation speed of Earth $\omega$. The angular momentum of the falling body is conserved, hence $\omega ^ { \prime } r ^ { 2 } = \omega R ^ { 2 }$. We can substitute $r = R - y$, where $y$ is the current depth, and approximate $\omega ^ { \prime } = \omega \left( \frac { R } { r } \right) ^ { 2 } \approx \omega \left( 1 + 2 \frac { y } { R } \right)$. Therefore, the horizontal displacement speed in the Earth's frame of reference $v _ { h } = \left( \omega ^ { \prime } - \omega \right) r \approx 2 \omega y R$. Finally, horizontal dipslacement is found as $\Delta x = \int v _ { h } \mathrm {~d} t =$ $\int \left( 2 \omega y R / v _ { v } \right) \mathrm { d } y$, where the vertical falling speed $v _ { v } = \sqrt { 2 g y }$. So, we find $\Delta x = \frac { 2 } { 3 } R \omega \sqrt { 2 h ^ { 3 } / g } \approx$ 22 m.
![](../../../figures/solution-ocr/e85093ad0fd32fdc5a800dab.jpg)

Now, let obtain the same result using the Kepler's laws. Consider the trajectory of the steel ball as seen in a non-rotating frame of reference. Although it is a thin ellipse, we have drawn the figure out of scale in order the facilitate the calculation of areas. The steel ball is released from point A and it hits the bottom of the shaft at point D, at distance $x$ from B, the location of bottom at the start of fall. As the falling time is still $t = \sqrt { 2 h / g }$, the location of the bottom travels $x ^ { \prime } = ( v - \Delta v ) t = v t - \omega h t$ during the fall. Thus, the horizontal displacement of the landing point is simply $\Delta x = x - x ^ { \prime }$.

Now, the distance $x$ can be found using the Kepler's second law, stating that the area covered by radius vector per unit time $\Delta S / \Delta t$ is constant, which is a manifestation of conservation of angular momentum $\Delta S / \Delta t = L / 2 m = r v _ { \perp } / 2$. (The latter relation could easily be obtained by observing a circular orbit.) For our steel ball, $L / 2 m = R v / 2 = \omega R ^ { 2 } / 2$. The area covered by the steel ball can be calculated as the sum of the segment OBD and the region ADB. Keeping in mind that $x \ll R$, the segment OBD is simply a triangle with area $x ( R - h ) / 2$. Likewise, the region ACDB is approximately a rectangle of area $x h$ and knowing that a parabola divides the area of its surrounding rectangle into proportions 1/3 and $2 / 3$, we conclude that the area of region ADB is $2 x h / 3$. Thus, from the Kepler's second law:

$$
\begin{array} { r }
S = \frac { 1 } { 2 } x ( R - h ) + \frac { 2 } { 3 } x h = \frac { 1 } { 2 } v R t , \\
x = \frac { v t } { 1 + \frac { 1 } { 3 } \frac { h } { R } } \approx v t - \frac { 1 } { 3 } \omega h t .
\end{array}
$$

Finally, the horizontal displacement $\Delta x =$ $x - x ^ { \prime } = \frac { 2 } { 3 } \omega h t \approx 22 \mathrm {~mm}$. (Note that the naive answer overestimated the correct one by 50\%.)

## 10. Black box

i) There are a few ways to get an initial idea, what could be in the black box. One way is to put the ammeter in series with the voltage source and measure the current through each combination.

$$
\begin{gathered}
U _ { \text {bat } } = 1581 \pm 14 \mathrm { mV } \\
I _ { \text {black } \rightarrow \text { white } } = 4.33 \pm 0.09 \mathrm {~mA} \\
I _ { \text {black } \rightarrow \text { blue } } = 2.21 \pm 0.07 \mathrm {~mA} \\
I _ { \text {blue } \text { → white } } = 1.80 \pm 0.06 \mathrm {~mA} \\
I _ { \text {blue } \rightarrow \text { black } } = 2.20 \pm 0.07 \mathrm {~mA} \\
I _ { \text {white } \rightarrow \text { blue } } = 90.9 \pm 2.8 \mu \mathrm {~A} \\
I _ { \text {white } \rightarrow \text { black } } = 81.2 \pm 2.8 \mu \mathrm {~A}
\end{gathered}
$$

We can see that the other terminals are connected to white through the diode. That leaves us three options.


![](../../../figures/solution-ocr/1513ab1aa924bc40599d94ed.jpg)

We can deduce the correct schematics of the black box from these measurements, but there are more straightforward ways to test these options. One is to measure the voltage $U _ { 1 }$ between "black" and "blue", while connecting the battery between "black" and "white". Secondly measure the voltage $U _ { 2 }$ between "blue" and "black", while connecting the battery between "blue" and "white".

$$
U _ { 1 } = 857 \pm 9 \mathrm { mV } , U _ { 2 } = 884 \pm 9 \mathrm { mV }
$$

Since neither is 0 we can eliminate options B and C.
ii) From voltages $U _ { 1 }$ and $U _ { 2 }$ and currents $I _ { \text {black } \text { → white } }$ and $I _ { \text {blue } \text { → white } }$ we can calculate $R _ { 1 }$ and $R _ { 2 }$.

$$
R _ { 1 } = U _ { 1 } / I _ { \text {black } \text { → white } } = 196 \pm 7 \Omega
$$

$$
R _ { 2 } = U _ { 2 } / I _ { \text {blue } \rightarrow \text { white } } = 491 \pm 22 \Omega
$$

Uncertainties are calculated by summing the relative errors of the current and voltage measurements.
![](../../../figures/solution-ocr/097489bc2d217853c718735c.jpg)

The calculated datapoints:

$$
\begin{gathered}
I _ { 0 } = 0 , U _ { 0 } = 0 \\
I _ { 1 } = 1.80 \mathrm {~mA} , U _ { 1 } = 697 \mathrm { mV } \\
I _ { 2 } = 4.33 \mathrm {~mA} , U _ { 2 } = 732 \mathrm { mV } \\
I _ { 3 } = 5.86 \mathrm {~mA} , U _ { 3 } = 760 \mathrm { mV } \\
I _ { 4 } = 90.9 \mu \mathrm {~A} , U _ { 4 } = 1536 \mathrm { mV } \\
I _ { 5 } = 81.2 \mu \mathrm {~A} , U _ { 5 } = 1541 \mathrm { mV } \\
I _ { 6 } = 85.3 \mu \mathrm {~A} , U _ { 6 } = 1569 \mathrm { mV }
\end{gathered}
$$

iii) From the current measurements we can already calculate 4 datapoints for the current voltage curve of the diode. We obtain additional two datapoints by measuring the current while the resistors inside the black box are connected in parallel.

$$
\begin{gathered}
I _ { \text {blueandblack } \rightarrow \text { white } } = 5.86 \pm 0.10 \mathrm {~mA} \\
I _ { \text {white } \rightarrow \text { blueandblack } } = 85.3 \pm 2.8 \mu \mathrm {~A}
\end{gathered}
$$

![](../../../figures/solution-ocr/805235284464ac5f8073925f.jpg)
