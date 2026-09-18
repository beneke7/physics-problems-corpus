---
id: usapho-2011-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2011-b1
solution_type: official
source_document: solution-document-usapho-2011-s
source_pdf: cache/phoxiv/usapho/2011_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2011_S.pdf."
---

Question B1
An AC power line cable transmits electrical power using a sinusoidal waveform with frequency
60 Hz. The load receives an RMS voltage of 500 kV and requires 1000 MW of average power.
For this problem, consider only the cable carrying current in one of the two directions, and ignore
effects due to capacitance or inductance between the cable and with the ground.
a. Suppose that the load on the power line cable is a residential area that behaves like a pure
resistor.
i. What is the RMS current carried in the cable?
ii. The cable has diameter 3 cm, is 500 km long, and is made of aluminum with resistivity
2.8 × 10−8 Ω · m. How much power is lost in the wire?
b. A local rancher thinks he might be able to extract electrical power from the cable using
electromagnetic induction. The rancher constructs a rectangular loop of length a and width
b < a, consisting of N turns of wire. One edge of the loop is to be placed on the ground; the
wire is straight and runs parallel to the ground at a height h > a. Write the current in the
wire as I = I0 sinωt, and assume the return wire is far away.
i. Determine an expression for the magnitude of the magnetic field at a distance r from
the power line cable in terms of I, r, and fundamental constants.
ii. Where should the loop be placed, and how should it be oriented, to maximize the induced
emf in the loop?
iii. Assuming the loop is placed in this way, determine an expression for the emf induced
in the loop (as a function of time) in terms of any or all of I0, h, a, b, N, ω, t, and
fundamental constants.
iv. Suppose that a = 5 m, b = 2 m, and h = 100 m. How many turns of wire N does the
rancher need to generate an RMS emf of 120 V?
c. The load at the end of the power line cable changes to include a manufacturing plant with
a large number of electric motors. While the average power consumed remains the same, it
now behaves like a resistor in parallel with a 0.25 H inductor.
i. Does the power lost in the power line cable increase, decrease, or stay the same? (You
need not calculate the new value explicitly, but you should show some work to defend
your answer.)
ii. The power company wishes to make the load behave as it originally did by installing a
capacitor in parallel with the load. What should be its capacitance?
Solution
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part B 11
a. i. Because the load is purely resistive, the average power is simply
P = IrmsVrms
so
Irms =
P
Vrms
= 2000 A.
ii. The cross-sectional area of the wire is A = πr2 = 7.07 × 10−4 m2, so its resistance is
R =
ρL
A
= 19.8 Ω.
The power loss is then
P = I2
R = 79.2 MW.
b. i. The field is perpendicular to the wire and to the radius, and from Ampere’s Law
I
B · ds = µ0I.
The integral evaluates to (2πr)B, giving
B =
µ0I
2πr
.
This well-known result can also be written down without justification.
ii. The induced emf is proportional to the rate of change of the flux through the loop. Since
the time dependence of the magnetic field is uniform across space, the rate of change of
flux is maximized by maximizing the flux itself. This in turn can be accomplished by
maximizing the field in the loop and ensuring that it is normal to the loop. Because
the field gets stronger closer to the wire, the loop should be directly below the wire,
and since the field is horizontal and perpendicular to the wire at this location, the loop
should be vertical and parallel to the wire. Finally, again because the field gets stronger
closer to the wire, the long edge of the loop should be vertical.
In summary, the loop should be placed vertically, parallel to the wire and directly beneath
it, with the long edge (of length a) vertical.
iii. Faraday’s law states
E = N
dΦB
dt
where we have dropped the sign, which is not important, and ΦB is the magnetic flux
through a single loop. The flux is
ΦB =
Z
B · dA = b
Z h
h−a
B(r)dr
where we have divided the loop into strips of radial width dr and length b. Plugging in
the result of part (i),
ΦB = b
Z h
h−a
µ0I
2πr
dr =
µ0Ib
2π
log
h
h − a
.
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part B 12
The time dependence comes only from the current,
dI
dt
= ωI0 cosωt.
Therefore, we have
E =
Nµ0b
2π
log
h
h − a
I0ω cosωt.
iv. The RMS value of I0 cosωt is simply Irms, so taking the RMS value of both sides,
Erms =
Nµ0b
2π
log
h
h − a
ωIrms = Nµ0bf log
h
h − a
Irms
where we used f = ω/2π. Plugging in the numbers, we have
µ0bf log
h
h − a
Irms = 0.0155 V
so the required number of turns is
N = 7760.
c. i. The inductor adds a new component of the current in the wire which is 90◦ out of phase
with the voltage. The rms current is increased, so the power lost in the wire increases.
This can also be shown more formally using complex impedances. Ohm’s law is
V = IZ
where both V and I are complex numbers, with their relative phase indicating the
relative phase of the voltage and current. Without the inductance, Z = R. With the
inductance, the two impedances add in parallel,
Z =

1
R
+
1
iωL
 −1
.
Since |Z| is lower and V remains the same, |I| increases, as argued above.
ii. The most straightforward method is to use complex impedances. We wish to cancel the
imaginary component supplied by the inductor, so we need
1
iωL
+ iωC = 0
since they are in parallel. This is equivalent to
ω =
1
√
LC
so that
C =
1
ω2L
= 28.1 µF.
One can also arrive at this result without complex impedances. No external current is
needed to make an LC circuit oscillate at its natural frequency; current simply sloshes
back and forth between the inductor and capacitor, without any going through the
power cable. Hence if the power cable frequency matches the natural frequency of the
LC circuit, the LC circuit will not affect the current in the cable; the load behaves as if
there were no LC circuit present at all. This gives the condition ω = 1/
√
LC as above.
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part B 13
