---
id: usapho-2012-b2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2012-b2
solution_type: official
source_document: solution-document-usapho-2012-s
source_pdf: cache/phoxiv/usapho/2012_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2012_S.pdf."
---

b2
(b2 + x2)3/2
=
µ0qmv
2b
sin3
θ
where we used the chain rule, with v = dx/dt. Either form is acceptable.
c. Consider the force of the magnetic field produced by the current I in the loop on the monopole.
We use the Biot-Savart law,
B =
µ0I
4π
Z
ds × r
r3
where r is a vector from the monopole to a point on the rim, ds integrates along the loop,
and r =
√
b2 + x2 as before. Since ds × r = rsinθds, the integral gives
B =
µ0I
4π
2πbsinθ
r2
=
µ0I
2b
sin3
θ.
The force on the monopole is F = qmB, so the acceleration is
a =
qmB
m
.
The current I is related to E by Ohm’s law, E = IR, where we’ll compute R later. Then
a =
µ2
0q2
mv
4b2mR
sin6
θ.
The change in speed in one trip is
∆v =
Z
adt ≈
1
v
Z ∞
−∞
adx =
1
v
Z π
0
a
dx
dθ
dθ = −
b
v
Z π
0
a
sin2
θ
dθ
Copyright c 2012 American Association of Physics Teachers
2012 Semifinal Exam Part B 16
where we approximated v as constant throughout one trip and the bottom of the track as an
infinite straight line. Plugging in our result for a and using the second provided integral,
∆v = −
µ2
0q2
m
4bmR
Z π
0
sin4
θdθ = −
3π
32
µ2
0q2
m
bmR
.
Finally, we need to find R. Since a 
 b, the loop is approximately a long cylindrical wire, so
R = ρ
2πb
πa2
which gives the final result
∆v = −
3π
64
µ2
0q2
ma2
b2mρ
.
We haven’t kept track of the signs very carefully; all that matters is that ∆v is negative, as
it must be by Lenz’s law.
The problem can also be solved by energy conservation, finding the energy dissipated in the
loop every trip by integrating P = E2/R over time, then relating that to the change in the
monopole’s kinetic energy, ∆K ≈ mv∆v.
If we had kept the integral above over dx, we would instead have to use the first provided
integral. Incidentally, these integrals aren’t too hard to derive. The first is related to the
second by u-substitution; for the second, note that
Z π
0
sin4
θdθ =
Z π
0

eiθ − e−iθ
2i
4
dθ.
All of the terms in the expansion integrate to zero, by periodicity, except for the constant
term. Then the integral is
1
16

4
2
Z π
0
dθ =
3π
8
as stated.
d. The initial speed is
√
2gH by energy conservation, so
N =
√
2gH
∆v
=
64
√
2
3π
b2mρ
√
gH
µ2
0q2
ma2
.
Copyright c 2012 American Association of Physics Teachers
