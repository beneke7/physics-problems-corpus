---
id: solution-ocr-nbpho-2009-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2009-boat, nbpho-2009-magnetic-pulse, nbpho-2009-nanoclock, nbpho-2009-pencil, nbpho-2009-soap-film, nbpho-2009-spring]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Estonian-Finnish Olympiad - 2009

1. Boat (9 points)
i) From the Newton II law, $m \frac { d v } { d t } + \alpha \frac { d x } { d t } = 0$. Multiplying this equation by $d t$, we obtain $d v + \frac { \alpha } { m } d x = 0$. Integrating (i.e. summing over all the small increments $d x$ and $d v$ ) this equation leads us to

$$
v + \frac { \alpha } { m } x = \text { Const } ,
$$

i.e. $k = \frac { \alpha } { m }$.
ii) We proceed in the same way as before, but we need to add the interaction force between the boat and the boy: $m \frac { d v } { d t } + \alpha \frac { d x } { d t } =$ $M \frac { d u } { d t }$. [Note that since the right-hand-side of this equation is the interaction force, it goes to zero, if the boy leaves the boat. Therefore, if we want to keep this equation correct even after the boy leaves the boat at the moment of time $t = t _ { * }$, we must assume $u ( t ) \equiv u \left( t _ { * } \right)$ for $t > t _ { * }$.] Similarly to the previous section, we obtain

$$
v + \frac { M } { m } u ( t ) + \frac { \alpha } { m } x = \text { Const. }
$$

iii) We use the conservation law of the previous section, and compare the value of the left-hand-side immediately before the boy lands into the boat with its value after a very long time. Bearing in mind that we need to substitute $u ( t \rightarrow \infty ) = - u _ { 2 }$ (see above), we obtain

$$
0 + \frac { M } { m } u _ { 1 } + 0 = 0 - \frac { M } { m } u _ { 2 } + \frac { \alpha } { m } s .
$$

So,

$$
s = \frac { M } { \alpha } \left( u _ { 1 } + u _ { 2 } \right) ,
$$

i.e. the result is independent of how long time did the boy spend in the boat.
2. Nanoclock (10 points)
i) All the charges of the ring are at the same distance from the point $P , l = \sqrt { R ^ { 2 } + z ^ { 2 } }$. So, according to the superposition principle, the potential is the sum of potential of all the charges,

$$
\varphi = k Q / \sqrt { R ^ { 2 } + z ^ { 2 } } .
$$

ii) $E = - \frac { d \varphi } { d z } = k Q z / \left( R ^ { 2 } + z ^ { 2 } \right) ^ { 3 / 2 }$.
iii) For $| z | \ll R$ we may approximate $\left( R ^ { 2 } + z ^ { 2 } \right) ^ { 3 / 2 } \approx R ^ { 3 }$, so that $E = \approx k Q z / R ^ { 3 }$.
iv) From the Newton II law, $m \ddot { z } = - e k Q z / R ^ { 3 }$, i.e. $\omega ^ { 2 } =$ $e k Q / m R ^ { 3 }$ and $f = \frac { 1 } { 2 \pi R } \sqrt { \frac { e k Q } { m R } } \approx 5.6 \times 10 ^ { 12 } \mathrm {~Hz}$.
v) At the origin, there are no charges; hence, the electric field lines cannot neither start nor end there. Consider a tiny coaxial cylinder embracing the origin. The field lines exit the cylinder through its bottom and top surfaces (because there is an electric field $E = \approx k Q z / R ^ { 3 }$ ). Hence there must be field lines entering the cylinder through its side surface. This implies a radial repelling force for an electron situated at that surface, i.e. instability.

Remark: In the same way, one can prove a theorem, electrostatic equlibria are always unstable.
3. Ball ( 8 points) A straightforward way to solve parts i), ii), and iii) is to use conservation of angular momentum with respect to any axis laying on the surface (there is no torque with respect to these axes). Angular momentum at the beginning: $L _ { 0 } =$ $m v r$. Rolling ball is always rotating around the touching point with the ground (although the location of that point is constantly changing). From Steiner's theorem we know that for a rotation axis that is located at the distance $r$ form the center of mass, the moment of inertia is $I ^ { \prime } = I + m r ^ { 2 }$. Therefore the angular momentum for rotating ball is $L ^ { \prime } = I ^ { \prime } \omega$ and clearly $L _ { 0 } = L ^ { \prime }$, therefore $m v r = \left( I + m r ^ { 2 } \right) \omega , \quad \omega = \frac { m v r } { I + m r ^ { 2 } }$.
i) The torque with respect to center of mass: $M = m g \mu r$. Since $M \Delta t = I \Delta \omega$, and the sliding stops when angular speed has reached value $\omega$, we obtain the corresponding time: $t = \frac { I \omega } { m g \mu r } =$ $\frac { I v } { g \mu \left( I + m r ^ { 2 } \right) }$.
ii) Clearly, $\omega _ { * } = \frac { m v r } { I + m r ^ { 2 } }$ and $E _ { * } = \frac { 1 } { 2 } \left( m v _ { * } ^ { 2 } + I \omega _ { * } ^ { 2 } \right) =$ $\frac { 1 } { 2 } \left( m r ^ { 2 } \omega _ { * } ^ { 2 } + I \omega _ { * } ^ { 2 } \right) = \frac { m ^ { 2 } v ^ { 2 } r ^ { 2 } } { 2 \left( I + m r ^ { 2 } \right) }$. If $I$ increases then $E _ { * }$ decreases.
iii) Since we didn't make any assumptions about the functional form of $\mu$ while deriving $w _ { * }$, the results $w _ { * }$ and $E _ { * }$ of $\mathbf { i i }$ ) are still valid.
iv) The net force $F = F _ { \mu } + F _ { r }$ causes the decrease of translational velocity: $m \Delta v = F \Delta t , \quad v ^ { \prime } ( t ) = v - \left( \mu + \mu _ { r } \right) g t$. The sliding stops when $\omega ( t ) = v ^ { \prime } ( t ) / r$. Note that the torque with respect to center of mass is only caused by kinetic frictional force, therefore $\omega ( t ) = \frac { m g \mu r } { I } t$. We get an equation for the time of the termination of sliding: $\frac { m g \mu r ^ { 2 } } { I } t = v - \left( \mu + \mu _ { r } \right) g t , \quad t = \frac { I v } { g \mu \left( I + m r ^ { 2 } \right) + g \mu _ { r } I }$. The corresponding angular speed $\omega _ { * } { } ^ { \prime \prime } = \frac { m v r } { I + m r ^ { 2 } + \frac { \mu _ { r } } { \mu } I }$, and energy $E _ { * } { } ^ { \prime \prime } = \frac { 1 } { 2 } \left( I + m r ^ { 2 } \right) \omega _ { * } ^ { 2 }$. Clearly, $E _ { * } { } ^ { \prime \prime } < E _ { * }$.
4. Black box (9 points) Independetly of whether there is a triangular or a star connection, one can measure the ratio of the resistances a pair of resistors by connecting the battery to two outlets - let these be the outlets 1 and 3, and measuring the voltages between the outlets 1 and 2, and between the outlets 2 and 3. For a star connection,

$$
\frac { R _ { 3 } } { R _ { 1 } } = \frac { V _ { 23 } } { V _ { 12 } } ,
$$

where $R _ { i }$ denotes the resistor closest to the $i$-th outlet; for a triangular connection,

$$
\frac { R _ { 3 } } { R _ { 1 } } = \frac { V _ { 12 } } { V _ { 23 } } ,
$$

where $R _ { i }$ denotes the resistor farthest away from the $i$-th outlet; for a triangular connection,

In such a way we find

$$
\frac { R _ { 3 } } { R _ { 1 } } \approx 4,7 , \frac { R _ { 3 } } { R _ { 2 } } \approx 3,3 , \text { and } \frac { R _ { 2 } } { R _ { 1 } } \approx 1,4 ,
$$

implying $R _ { 1 } = 100 \Omega , R _ { 2 } = 140 \Omega$ and $R _ { 3 } = 470 \Omega$; or

$$
\frac { R _ { 1 } } { R _ { 3 } } \approx 4,7 , \frac { R _ { 2 } } { R _ { 3 } } \approx 3,3 , \text { and } \frac { R _ { 1 } } { R _ { 2 } } \approx 1,4 ,
$$

$R _ { 3 } = 100 \Omega , R _ { 2 } = 330 \Omega$ and $R _ { 1 } = 470 \Omega$. So, we can conclude that the largest resistance is $470 \Omega$, and the middlevalued resistance is either $330 \Omega$ or $140 \Omega$.


5. Pencil (6 points) We put the pencil with its graphite end against a horizontal sheet of paper, and push the other end with a fingertip (without holding between the fingers and thereby possibly giving a torque to it). Then, there will be a purely longitudinal stress inside the pencil (there is no bending of the pencil). If we push strongly enough, we may neglect the weight of the pancil in the balance of torque with respect to the fingertip. So, equilibrium implies that the resultant force of the friction and reaction forces at the graphite end are along the axis of the pencil. This is possible, if $\tan \alpha \leq \mu$, where $\alpha$ is the angle between the pencil and a vertical line. So, we increase $\alpha$ wile pushing the pencil, and determine the position $\alpha _ { 0 }$, when the pencil starts sliding; $\tan \alpha _ { 0 }$ can be calculated as $\tan \alpha _ { 0 } = x / \sqrt { l ^ { 2 } - x ^ { 2 } }$, where $l$ is the length of the pencil, and $x$ is the length of the projection of the pencil onto a horizontal plane.
6. Spring (7 points) First, we measure the lengthening of the spring under its own weight. The relative lengthening of each loop is propotional to the order number of the loop. So, the average value of those legth increments is half of the largest increment (for the topmost loop). The topmost loop is deformed by the weight of the whole spring, hence the average deformation corresponds to the half-weight of the spring,

$$
k x _ { 1 } = m g / 2 .
$$

Now we add a load to the lower end of the spring and measure the new deformation $x _ { 2 }$. Since the additional weight of the load increases the stress of all the loops by the same value $M g$, each loop is deformed additionally by the same length increment. The sum of those additional increments is $x _ { 2 } - x _ { 1 }$; according to the Hook's law, $k \left( x _ { 2 } - x _ { 1 } \right) = M g$. So, $\frac { x _ { 2 } } { x _ { 1 } } - 1 = \frac { 2 M } { m }$, and

$$
M = \frac { m } { 2 } \frac { x _ { 2 } - x _ { 1 } } { x _ { 1 } } \approx 6 \mathrm {~g} .
$$

7. Soap film (6 points) Suppose the area of a broken part of the soap film is $S$. The corresponding surface energy is $E _ { S } = 2 \sigma S$. The mass of the soap water that was previously located at the broken part is $m = S h \rho$, where $\rho = 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 }$. Assuming that the surface energy is transformed to the kinetic energy of the moving front, we get an equation for the speed of the front: $2 \sigma S = \frac { 1 } { 2 } m v ^ { 2 } , \quad 4 \sigma S = S h \rho v ^ { 2 }$. Therefore $v = \sqrt { \frac { 4 \sigma } { h \rho } } =$ $\sqrt { \frac { 4 \cdot 0.025 } { 10 ^ { - 6 } \cdot 10 ^ { 3 } } } \mathrm {~m} / \mathrm { s } = 10 \mathrm {~m} / \mathrm { s }$ and we can estimate the time of breakup of the soap film to be $t = D / v = \frac { 1 } { 100 } s$.
8. Magnetic pulse (7 points) Since we can neglect the inductance of the coil, it performes as a voltage source, which outputs $U =$ $N S B / \tau = 1 \mathrm {~V}$ during the time period between $t = 0 \mathrm {~ms}$ and 10 ms, and 0 V otherwise. The characteristic time scales of the $R C$ and $L C$ cirquits are $\tau _ { 1 } = R _ { 1 } C = 0.6 \mathrm {~s}$ and $\tau _ { 2 } = L / R _ { 2 } \approx$ 0.3 s . So, for both cirquits, the processes are very fast, i.e. the capacitor is effectively short-circuited, and almost all the voltage falls on the inductance.
i) According to the considerations given above, $I _ { 1 } = U / R _ { 1 } \approx$ 0.33 A. As for $I _ { 2 }$, it starts growing from 0 A at $t = 0$ at a rate, given by $L \frac { d I } { d t } = U$, i.e. $I _ { 2 } = U t _ { 1 } / L = 5 \mathrm {~mA}$.
ii) When the voltage $U$ is switched off (at $t = \tau = 10 \mathrm {~ms}$ ), the capacitor will (almost completely, because $t _ { 2 } - \tau \ll R _ { 1 } C$ ) retain the charge it has accumulated, $Q = I _ { 1 } \tau$. All the voltage of the capacitor $( Q / C )$ will fall on the resistor $R _ { 1 }$, so that $I _ { 1 } ^ { \prime } =$ $Q / R _ { 1 } C = U \tau / R _ { 1 } ^ { 2 } C \approx 5.6 \mathrm {~mA}$. As for the inductance, it will retain (almost completely, because $t _ { 2 } - \tau \ll L / R _ { 2 }$ ) the current it has acquired during the first 10 ms, $I _ { 2 } ^ { \prime } = U \tau / L = 10 \mathrm {~mA}$.
iii) Since the current in $R _ { 2 }$ will decay very slowly, as compared to its growth during the first 10 ms, we can neglect the charge passing thorugh it during $t < \tau$. Then we can write the Kirhoff's law in the form $L \frac { d I } { d t } + R _ { 2 } \frac { d q } { d t } = 0$, from where $L d I + R _ { 2 } d q = 0$, and $L \Delta I = - R _ { 2 } \Delta q$. Since $\Delta I = - I _ { 2 } ^ { \prime }$, we obtain $\Delta q =$ $L I _ { 2 } ^ { \prime } / R _ { 2 } = 3.3 \mathrm { mC }$.
9. Stratostat (5 points)
i) Consider the pressure difference at heights $z + d z$ and $z : d p =$ $- \rho g d z$ (the difference is simply due to the weight of the layer $d z$ ). The density can be found using the state equation of ideal gas: $p V = \frac { m } { \mu } R T , \quad \rho = \frac { m } { V } = \frac { \mu p } { R T }$. Therefore $\frac { 1 } { p } \frac { d p } { d z } = - \frac { \mu g } { R T }$. Note that we have a derivative of a logarithm: $\frac { 1 } { p } \frac { d p } { d z } = \frac { d \ln p ( z ) } { d z }$. Therefore $\ln \left( p / p _ { 0 } \right) = - \alpha z , \quad p = p _ { 0 } e ^ { - \alpha z }$, where $\alpha = \frac { \mu g } { R T }$.

Alternatively, we can derive this law from the Boltzmann distribution for the particle density $n = n _ { 0 } e ^ { - U / k T }$, where $U$ is the potential energy of a molecule. Bearing in mind that for a constant temperature, the pressure is propotional to the density, we obtain $p = p _ { 0 } e ^ { - U / k T }$. Substituting $U = m g z = \frac { \mu } { N _ { A } } g z$ and $R = k N _ { A }$, we obtain the same result as above.
ii) Clearly, the pressures inside and outside of the stratostat are equal and depending on the height as $p = p _ { 0 } e ^ { - \alpha z }$, where $\alpha = \frac { \mu _ { a } g } { R T }$. For helium inside the sack $p V =$ const . Let the volume of the stratostat be $V _ { S }$, therefore $p _ { 0 } \beta V _ { S } = p V _ { S }$, where $p$ is the pressure at the height, where helium has filled the entire volume. Since $p = \beta p _ { 0 }$, we obtain $\frac { \mu _ { a } g } { R T } h = - \ln \beta , \quad h =$ $\frac { R T } { \mu _ { a } g } \ln \frac { 1 } { \beta } , \quad h = 17 \mathrm {~km}$.
10. Wedge (5 points) The center of mass of the system doesn't move, therefore $M u = m v _ { h }$, where $u$ and $v _ { h }$ are the horisontal components of the velocities of the wedge and block in the lab frame at some instant of time. In the wedge's frame, the block has horisontal velocity $v ^ { \prime } = v _ { h } + u = v _ { h } \left( 1 + \frac { m } { M } \right)$. Since the block is sliding down the wedge, the vertical component of the block has to be $v _ { \downarrow } = v ^ { \prime } \tan \alpha$. The total kinetic energy in the lab frame $E _ { K } = \frac { 1 } { 2 } \left( M u ^ { 2 } + m v _ { h } ^ { 2 } + m v _ { \downarrow } ^ { 2 } \right)$. Substituting the relevant quantities and simplifying, we obtain

$$
E _ { k } = \frac { m } { 2 } v _ { \downarrow } ^ { 2 } \beta , \text { where } \beta \equiv \frac { M } { M + m } \cot ^ { 2 } \alpha + 1 .
$$

The kinetic energy equals to the change in potential energy: $\frac { m } { 2 } \beta v _ { \downarrow } ^ { 2 } = \Delta E _ { P } = m g \left( h - h ^ { \prime } \right)$. By differentiating and noting that $d h = d t \cdot v _ { \downarrow }$, we get $\beta d v _ { \downarrow } = g d t , \quad t = \frac { \beta } { g } v _ { \downarrow \max }$. From the above written energy conservation law we get $v _ { \downarrow \text { max } } = \sqrt { \frac { 2 g h } { \beta } }$; so we finally have $t = \sqrt { \frac { 2 \beta h } { g } } = \sqrt { \frac { 2 h } { g } \left( \frac { M } { M + m } \cot ^ { 2 } \alpha + 1 \right) }$.
