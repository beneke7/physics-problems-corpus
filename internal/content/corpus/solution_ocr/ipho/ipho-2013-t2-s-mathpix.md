---
id: solution-ocr-ipho-2013-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2013/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2013-t2]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Solutions

A single spherical silver nanoparticle
|  | Volume of the nanoparticle: $V = \frac { 4 } { 3 } \pi R ^ { 3 } = 4.19 \times 10 ^ { - 24 } \mathrm {~m} ^ { 3 }$. <br> Mass of the nanoparticle: $M = V \rho _ { \mathrm { Ag } } = 4.39 \times 10 ^ { - 20 } \mathrm {~kg}$. <br> Number of ions in the nanoparticle: $N = N _ { A } \frac { M } { M _ { \mathrm { Ag } } } = 2.45 \times 10 ^ { 5 }$. |  |
| :--- | :--- | :--- |
| 2.1 | Charge density $\rho = \frac { e N } { V } = 9.38 \times 10 ^ { 9 } \mathrm { C } \mathrm { m } ^ { - 3 }$, charge density $\rho = e n$. | 0.7 |


The electric field in a charge-neutral region inside a charged sphere
|  | For a sphere with radius $R$ and constant charge density $\rho$, for any point inside the sphere designated by radius-vector $\mathbf { r } = r \mathbf { e } _ { r } ( r < R )$ Gauss's law yields directly $4 \pi r ^ { 2 } \varepsilon _ { 0 } \boldsymbol { E } _ { + } = \frac { 4 } { 3 } \pi r ^ { 3 } \rho \boldsymbol { e } _ { r }$, where $\boldsymbol { e } _ { r }$ is the unit radial vector pointing away from the center of the sphere. Thus, $\boldsymbol { E } _ { + } = \frac { \rho } { 3 \varepsilon _ { 0 } } \boldsymbol { r }$. <br> Likewise, inside another sphere of radius $R _ { 1 }$ and charge density $- \rho$ the field is $\boldsymbol { E } _ { - } = \frac { - \rho } { 3 \varepsilon _ { 0 } } \boldsymbol { r } ^ { \prime }$, where $\boldsymbol { r } ^ { \prime }$ is the radius-vector of the point in the coordinate system with the origin in the center of this sphere. <br> Superposition of the two charge configurations gives the setup we want with $\boldsymbol { r } ^ { \prime } = \boldsymbol { r } - \boldsymbol { x } _ { d }$. So inside the charge-free region $\left\| \boldsymbol { r } - \boldsymbol { x } _ { \mathrm { p } } \right\| < R _ { 1 }$ the field is $\boldsymbol { E } = \boldsymbol { E } _ { + } + \boldsymbol { E } _ { - } = \frac { \rho } { 3 \varepsilon _ { 0 } } \mathbf { r } + \frac { - \rho } { 3 \varepsilon _ { 0 } } \left( \boldsymbol { r } - \boldsymbol { x } _ { d } \right)$ or $\boldsymbol { E } = \frac { \rho } { 3 \varepsilon _ { 0 } } \boldsymbol { x } _ { d }$ with pre-factor $A = \frac { 1 } { 3 }$ |  |
| :--- | :--- | :--- |


The restoring force on the displaced electron cloud
|  | With $\boldsymbol { x } _ { \mathrm { p } } = x _ { \mathrm { p } } \boldsymbol { e } _ { x }$ and $x _ { \mathrm { p } } \ll R$ we have from above that approximately the field induced inside the particle is $\boldsymbol { E } _ { \text {ind } } = \frac { \rho } { 3 \varepsilon _ { 0 } } \boldsymbol { x } _ { \mathrm { p } }$. The number of electrons on the particle's border that produced $\boldsymbol { E } _ { \text {ind } }$ is negligibly smaller than the number of electrons inside the particle, so |  |
| :--- | :--- | :--- |
| 2.3 | $\boldsymbol { F } \cong Q \boldsymbol { E } _ { \text {ind } } = ( - e N ) \frac { \rho } { 3 \varepsilon _ { 0 } } \boldsymbol { x } _ { \mathrm { p } } = - \frac { 4 \pi } { 9 \varepsilon _ { 0 } } R ^ { 3 } e ^ { 2 } n ^ { 2 } x _ { p } \boldsymbol { e } _ { x }$ (note the antiparallel attractive force is proportional to the displacement that it is similar to Hooke's law). The work done on the electron cloud to shift it is $W _ { \text {el } } = - \int _ { 0 } ^ { x _ { \mathrm { p } } } F \left( x ^ { \prime } \right) \mathrm { d } x ^ { \prime } = \frac { 1 } { 2 } \left( \frac { 4 \pi } { 9 \varepsilon _ { 0 } } R ^ { 3 } e ^ { 2 } n ^ { 2 } \right) x _ { \mathrm { p } } ^ { 2 }$ | 1.0 |


The spherical silver nanoparticle in an external constant electric field
| 2.4 | Inside the metallic particle in the steady state the electric field must be equal to 0. The induced field (from 2.2 or 2.3) compensates the external field: $\boldsymbol { E } _ { 0 } + \boldsymbol { E } _ { \text {ind } } = 0$, so | 0.6 |
| :--- | :--- | :--- |


|  | $x _ { \mathrm { p } } = \frac { 3 \varepsilon _ { 0 } } { \rho } E _ { 0 } = \frac { 3 \varepsilon _ { 0 } } { e n } E _ { 0 }$. Charge displaced through the $y z$-plane is the total charge of electrons in the cylinder of radius $R$ and height $x _ { p } : - \Delta Q = - \rho \pi R ^ { 2 } x _ { \mathrm { p } } = - \pi R ^ { 2 }$ ne $x _ { \mathrm { p } }$. |  |
| :--- | :--- | :--- |

The equivalent capacitance and inductance of the silver nanoparticle

| 2.5a | The electric energy $W _ { \text {el } }$ of a capacitor with capacitance $C$ holding charges $\pm \Delta Q$ is $W _ { \text {el } } = \frac { \Delta Q ^ { 2 } } { 2 C }$. The energy of such capacitor is equal to the work (see 2.3) done to separate the charges (see 2.4), thus $C = \frac { \Delta Q ^ { 2 } } { 2 W _ { e l } } = \frac { 9 } { 4 } \varepsilon _ { 0 } \pi R = 6.26 \times 10 ^ { - 19 } \mathrm {~F}$. | 0.7 |
| :--- | :--- | :--- |
| 2.5b | Equivalent scheme for a capacitor reads: $\Delta Q = C V _ { 0 }$. Combining charge from (2.4) and capacitance from (2.5a) gives $V _ { 0 } = \frac { \Delta Q } { C } = \frac { 4 } { 3 } R E _ { 0 }$. | 0.4 |


| 2.6a | The kinetic energy of the electron cloud is defined as the kinetic energy of one electron multiplied by the number of electrons in the cloud $W _ { \text {kin } } = \frac { 1 } { 2 } m _ { e } v ^ { 2 } N = \frac { 1 } { 2 } m _ { e } v ^ { 2 } \left( \frac { 4 } { 3 } \pi R ^ { 3 } n \right)$. The current $I$ is the charge of electrons in the cylinder of area $\pi R ^ { 2 }$ and height $v \Delta t$ divided by time $\Delta t$ (or simply the time derivative of charge $- \Delta Q$ ), thus $I = - e n v \pi R ^ { 2 }$. | 0.7 |
| :--- | :--- | :--- |
| 2.6b | The energy carried by current $I$ in the equivalent circuit with inductance $L$ is $W = \frac { 1 } { 2 } L I ^ { 2 }$ is, in fact, the kinetic energy of electrons $W _ { \text {kin } }$. Taking the energy and current from (2.6a) gives $L = \frac { 4 m _ { e } } { 3 \pi R n e ^ { 2 } } = 2.57 \times 10 ^ { - 14 } \mathrm { H }$. | 0.5 |

The plasmon resonance of the silver nanoparticle

| 2.7a | From the LC-circuit analogy we can directly derive $\omega _ { p } = ( L C ) ^ { - 1 / 2 } = \sqrt { n e ^ { 2 } / 3 \varepsilon _ { 0 } m _ { e } }$. Alternatively it is possible to use the harmonic law of motion in (2.3) and get the same result for the frequency. | 0.5 |
| :--- | :--- | :--- |
| 2.7b | $\begin{aligned} & \omega _ { \mathrm { p } } = 7.88 \times 10 ^ { 15 } \mathrm { rad } / \mathrm { s } , \text { for light with angular frequency } \omega = \omega _ { \mathrm { p } } \text { the wavelength is } \\ & \lambda _ { \mathrm { p } } = 2 \pi c / \omega _ { \mathrm { p } } = 239 \mathrm {~nm} . \end{aligned}$ | 0.4 |

The silver nanoparticle illuminated with light at the plasmon frequency

| 2.8a | The velocity of an electron $v = \frac { d x } { d t } = - \omega x _ { 0 } \sin \omega t = v _ { 0 } \sin \omega t$. The time-averaged kinetic energy on the electron $\left\langle W _ { k } \right\rangle = \left\langle \frac { m _ { e } v ^ { 2 } } { 2 } \right\rangle = \frac { m _ { e } } { 2 } \left\langle v ^ { 2 } \right\rangle$. During time $\tau$ each electron hits an ion one time. So the energy lost in the whole nanoparticle during time $\tau$ is $W _ { \text {heat } } = N \left\langle \frac { m _ { e } v ^ { 2 } } { 2 } \right\rangle = \frac { 4 } { 3 } \pi R ^ { 3 } n \left\langle \frac { m _ { e } v ^ { 2 } } { 2 } \right\rangle$. Time-averaged Joule heating power $P _ { \text {heat } } = \frac { 1 } { \tau } W _ { \text {kin } } = \frac { 1 } { 2 \tau } m _ { e } \left\langle v ^ { 2 } \right\rangle \left( \frac { 4 } { 3 } \pi R ^ { 3 } n \right) .$ <br> The expression for current is taken from (2.6a), squared and averaged | 1.0 |
| :--- | :--- | :--- |


|  | $\left\langle I ^ { 2 } \right\rangle = \left( e n \pi R ^ { 2 } \right) ^ { 2 } \left\langle v ^ { 2 } \right\rangle = \left( \frac { 3 Q } { 4 R } \right) ^ { 2 } \left\langle v ^ { 2 } \right\rangle$. |  |
| :--- | :--- | :--- |
| 2.8b | The average time between the collisions is $\tau \gg 1 / \omega _ { \mathrm { p } }$, so each electron oscillates many times before it collides with an ion. The oscillating current $I = I _ { 0 } \sin \omega t = \pi R ^ { 2 } n e v _ { 0 } \sin \omega t$ produces the heat in the resistance $R _ { \text {heat } }$ equal to $P _ { \text {heat } } = R _ { \text {heat } } \left\langle I ^ { 2 } \right\rangle$, that together with results from (2.8a) leads to $R _ { \text {heat } } = \frac { W _ { \text {kin } } } { \tau \left\{ I ^ { 2 } \right\} } = \frac { 2 m _ { e } } { 3 \pi n e ^ { 2 } R \tau } = 2.46 \Omega$. | 1.0 |


| 2.9 | For equivalent scattering resistance $R _ { \text {scat } } = \frac { P _ { \text {scat } } } { \left\langle I ^ { 2 } \right\rangle }$ and for harmonic oscillations we can average the velocity squared over one period of oscillations, so $\left\langle v ^ { 2 } \right\rangle = \frac { 1 } { 2 } \omega _ { \mathrm { p } } ^ { 2 } x _ { 0 } ^ { 2 }$. Together it yields $R _ { \text {scat } } = \frac { Q ^ { 2 } x _ { 0 } ^ { 2 } \omega _ { \mathrm { p } } ^ { 4 } } { 12 \pi \varepsilon _ { 0 } c ^ { 3 } } \frac { 16 R ^ { 2 } } { 9 Q ^ { 2 } \left\langle v ^ { 2 } \right\rangle } = \frac { 8 \omega _ { 0 } ^ { 2 } R ^ { 2 } } { 27 \pi \varepsilon _ { 0 } c ^ { 3 } } = 2.45 \Omega$. | 1.0 |
| :--- | :--- | :--- |


| 2.10a | Ohm's law for a $L C R$ serious circuit is $I _ { 0 } = \frac { V _ { 0 } } { \sqrt { \left( R _ { \text {heat } } + R _ { \text {scat } } \right) ^ { 2 } + \left( \omega L - \frac { 1 } { \omega C } \right) ^ { 2 } } }$. At the resonance frequency time-averaged voltage squared is $\left\langle V ^ { 2 } \right\rangle = Z _ { R } ^ { 2 } \left\langle I ^ { 2 } \right\rangle = \left( R _ { \text {heat } } + R _ { \text {scat } } \right) ^ { 2 } \left\langle I ^ { 2 } \right\rangle$. And from (2.5b) $\left\langle V ^ { 2 } \right\rangle = \frac { 1 } { 2 } V _ { 0 } ^ { 2 } = \frac { 8 } { 9 } R ^ { 2 } E _ { 0 } ^ { 2 }$, so Ohm's law results in $\left\langle I ^ { 2 } \right\rangle = \frac { 8 R ^ { 2 } E _ { 0 } ^ { 2 } } { 9 \left( R _ { \text {heat } } + R _ { \text {scat } } \right) ^ { 2 } }$. The time-averaged power losses are $P _ { \text {heat } } = R _ { \text {heat } } \left\langle I ^ { 2 } \right\rangle = \frac { 8 R _ { \text {heat } } R ^ { 2 } } { 9 \left( R _ { \text {heat } } + R _ { \text {scat } } \right) ^ { 2 } } E _ { 0 } ^ { 2 } \quad$ and $P _ { \text {scat } } = \frac { 8 R _ { \text {scat } } R ^ { 2 } } { 9 \left( R _ { \text {heat } } + R _ { \text {scat } } \right) ^ { 2 } } E _ { 0 } ^ { 2 } = \frac { R _ { \text {scat } } } { R _ { \text {heat } } } \left\langle P _ { \text {heat } } \right\rangle$. | 1.2 |
| :--- | :--- | :--- |
| 2.10b | Starting with the electric field amplitude $E _ { 0 } = \sqrt { 2 S / \left( \varepsilon _ { 0 } c \right) } = 27.4 \mathrm { kV } / \mathrm { m }$, we calculate $P _ { \text {heat } } = 6.82 \mathrm { nW }$ and $P _ { \text {scat } } = 6.81 \mathrm { nW }$. | 0.3 |


Steam generation by light
| 2.11a | Total number of nanoparticles in the vessel: $N _ { \mathrm { np } } = h ^ { 2 } a n _ { \mathrm { np } } = 7.3 \times 10 ^ { 11 }$. Then the total time-averaged Joule heating power: $P _ { \mathrm { st } } = N _ { \mathrm { np } } P _ { \text {heat } } = 4.98 \mathrm {~kW}$. This power goes into the steam generation: $P _ { \mathrm { st } } = \mu _ { \mathrm { st } } L _ { \mathrm { tot } }$, with $L _ { \mathrm { tot } } = c _ { \mathrm { wa } } \left( T _ { 100 } - T _ { \mathrm { wa } } \right) + L _ { \mathrm { wa } } + c _ { \mathrm { st } } \left( T _ { \mathrm { st } } - T _ { 100 } \right) = 2.62 \times 10 ^ { 6 } \mathrm {~J} \mathrm {~kg} ^ { - 1 }$. Thus the mass of steam produced in one second is: $\mu _ { \text {st } } = \frac { P _ { \text {st } } } { L _ { \text {tot } } } = 1.90 \times 10 ^ { - 3 } \mathrm {~kg} \mathrm {~s} ^ { - 1 }$. | 0.6 |
| :--- | :--- | :--- |
| 2.11 b | The power of light incident on the vessel $P _ { \text {tot } } = h ^ { 2 } S = 0.01 \mathrm {~m} ^ { 2 } \times 1 \mathrm { MW } \mathrm { m } ^ { - 2 } =$ 10.0 kW , and the power directed for steam production by nanoparticles is given in 2.11a. Efficiency of the process is $\eta = \frac { P _ { \text {st } } } { P _ { \text {tot } } } = \frac { 4.98 \mathrm {~kW} } { 10.0 \mathrm {~kW} } = 0.498$. | 0.2 |


| Total | 12.0 |
| :--- | :--- |
