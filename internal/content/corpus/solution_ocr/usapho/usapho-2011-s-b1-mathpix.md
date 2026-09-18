---
id: solution-ocr-usapho-2011-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2011-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

An AC power line cable transmits electrical power using a sinusoidal waveform with frequency 60 Hz. The load receives an RMS voltage of 500 kV and requires 1000 MW of average power. For this problem, consider only the cable carrying current in one of the two directions, and ignore effects due to capacitance or inductance between the cable and with the ground.

a. Suppose that the load on the power line cable is a residential area that behaves like a pure resistor.
    i. What is the RMS current carried in the cable?
    ii. The cable has diameter 3 cm, is 500 km long, and is made of aluminum with resistivity $2.8 \times 10 ^ { - 8 } \Omega \cdot \mathrm {~m}$. How much power is lost in the wire?
b. A local rancher thinks he might be able to extract electrical power from the cable using electromagnetic induction. The rancher constructs a rectangular loop of length $a$ and width $b < a$, consisting of $N$ turns of wire. One edge of the loop is to be placed on the ground; the wire is straight and runs parallel to the ground at a height $h > a$. Write the current in the wire as $I = I _ { 0 } \sin \omega t$, and assume the return wire is far away.
    i. Determine an expression for the magnitude of the magnetic field at a distance $r$ from the power line cable in terms of $I , r$, and fundamental constants.
    ii. Where should the loop be placed, and how should it be oriented, to maximize the induced emf in the loop?
    iii. Assuming the loop is placed in this way, determine an expression for the emf induced in the loop (as a function of time) in terms of any or all of $I _ { 0 } , h , a , b , N , \omega , t$, and fundamental constants.
    iv. Suppose that $a = 5 \mathrm {~m} , b = 2 \mathrm {~m}$, and $h = 100 \mathrm {~m}$. How many turns of wire $N$ does the rancher need to generate an RMS emf of 120 V?
c. The load at the end of the power line cable changes to include a manufacturing plant with a large number of electric motors. While the average power consumed remains the same, it now behaves like a resistor in parallel with a 0.25 H inductor.
    i. Does the power lost in the power line cable increase, decrease, or stay the same? (You need not calculate the new value explicitly, but you should show some work to defend your answer.)
    ii. The power company wishes to make the load behave as it originally did by installing a capacitor in parallel with the load. What should be its capacitance?

## Solution


a. i. Because the load is purely resistive, the average power is simply
$$
P = I _ { \mathrm { rms } } V _ { \mathrm { rms } }
$$
so
$$
I _ { \mathrm { rms } } = \frac { P } { V _ { \mathrm { rms } } } = 2000 \mathrm {~A} .
$$
    ii. The cross-sectional area of the wire is $A = \pi r ^ { 2 } = 7.07 \times 10 ^ { - 4 } \mathrm {~m} ^ { 2 }$, so its resistance is
$$
R = \frac { \rho L } { A } = 19.8 \Omega
$$
The power loss is then
$$
P = I ^ { 2 } R = 79.2 \mathrm { MW } .
$$
b. i. The field is perpendicular to the wire and to the radius, and from Ampere's Law
$$
\oint \mathbf { B } \cdot d \mathbf { s } = \mu _ { 0 } I
$$
The integral evaluates to $( 2 \pi r ) B$, giving
$$
B = \frac { \mu _ { 0 } I } { 2 \pi r } .
$$
This well-known result can also be written down without justification.
    ii. The induced emf is proportional to the rate of change of the flux through the loop. Since the time dependence of the magnetic field is uniform across space, the rate of change of flux is maximized by maximizing the flux itself. This in turn can be accomplished by maximizing the field in the loop and ensuring that it is normal to the loop. Because the field gets stronger closer to the wire, the loop should be directly below the wire, and since the field is horizontal and perpendicular to the wire at this location, the loop should be vertical and parallel to the wire. Finally, again because the field gets stronger closer to the wire, the long edge of the loop should be vertical.
In summary, the loop should be placed vertically, parallel to the wire and directly beneath it, with the long edge (of length $a$ ) vertical.
    iii. Faraday's law states
$$
\mathcal { E } = N \frac { d \Phi _ { B } } { d t }
$$
where we have dropped the sign, which is not important, and $\Phi _ { B }$ is the magnetic flux through a single loop. The flux is
$$
\Phi _ { B } = \int \mathbf { B } \cdot d \mathbf { A } = b \int _ { h - a } ^ { h } B ( r ) d r
$$
where we have divided the loop into strips of radial width $d r$ and length $b$. Plugging in the result of part (i),
$$
\Phi _ { B } = b \int _ { h - a } ^ { h } \frac { \mu _ { 0 } I } { 2 \pi r } d r = \frac { \mu _ { 0 } I b } { 2 \pi } \log \frac { h } { h - a } .
$$


The time dependence comes only from the current,
$$
\frac { d I } { d t } = \omega I _ { 0 } \cos \omega t .
$$
Therefore, we have
$$
\mathcal { E } = \frac { N \mu _ { 0 } b } { 2 \pi } \log \frac { h } { h - a } I _ { 0 } \omega \cos \omega t .
$$
iv. The RMS value of $I _ { 0 } \cos \omega t$ is simply $I _ { \text {rms } }$, so taking the RMS value of both sides,
$$
\mathcal { E } _ { \mathrm { rms } } = \frac { N \mu _ { 0 } b } { 2 \pi } \log \frac { h } { h - a } \omega I _ { \mathrm { rms } } = N \mu _ { 0 } b f \log \frac { h } { h - a } I _ { \mathrm { rms } }
$$
where we used $f = \omega / 2 \pi$. Plugging in the numbers, we have
$$
\mu _ { 0 } b f \log \frac { h } { h - a } I _ { \mathrm { rms } } = 0.0155 \mathrm {~V}
$$
so the required number of turns is
$$
N = 7760 .
$$
c. i. The inductor adds a new component of the current in the wire which is 90° out of phase with the voltage. The rms current is increased, so the power lost in the wire increases. This can also be shown more formally using complex impedances. Ohm's law is
$$
V = I Z
$$
where both $V$ and $I$ are complex numbers, with their relative phase indicating the relative phase of the voltage and current. Without the inductance, $Z = R$. With the inductance, the two impedances add in parallel,
$$
Z = \left( \frac { 1 } { R } + \frac { 1 } { i \omega L } \right) ^ { - 1 }
$$
Since $| Z |$ is lower and $V$ remains the same, $| I |$ increases, as argued above.
    ii. The most straightforward method is to use complex impedances. We wish to cancel the imaginary component supplied by the inductor, so we need
$$
\frac { 1 } { i \omega L } + i \omega C = 0
$$
since they are in parallel. This is equivalent to
$$
\omega = \frac { 1 } { \sqrt { L C } }
$$
so that
$$
C = \frac { 1 } { \omega ^ { 2 } L } = 28.1 \mu \mathrm {~F} .
$$
One can also arrive at this result without complex impedances. No external current is needed to make an LC circuit oscillate at its natural frequency; current simply sloshes back and forth between the inductor and capacitor, without any going through the power cable. Hence if the power cable frequency matches the natural frequency of the LC circuit, the LC circuit will not affect the current in the cable; the load behaves as if there were no LC circuit present at all. This gives the condition $\omega = 1 / \sqrt { L C }$ as above.
