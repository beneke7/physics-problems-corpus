---
id: usapho-2010-a2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2010-a2
solution_type: official
source_document: solution-document-usapho-2010-s
source_pdf: cache/phoxiv/usapho/2010_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2010_S.pdf."
---

a2
r + a2
t , at = αR, ar = ω2
R
where at is the tangential acceleration and ar is the centripetal acceleration. Plugging in,
α2
R2
+ ω4
R2
= µ2
sg2
and using ω = αt and solving for t, we find
t =
s
1
α
r
µ2
sg2
α2R2
− 1.
When the object slides off, it has a tangential velocity v = Rω, so
v = Rαt =
q
R
p
µ2
sg2 − α2R2.
b. The angular position of the object is θ = αt2/2, so
θ =
1
2αR
p
µs
2g2 − α2R2.
Plugging in the numbers, we find
θ =
1
2(0.2)(4)
p
(0.5)2(9.8)2 − (0.2)2(4)2 = 3.021rad = 173◦
.
The velocity of the object is rotated 90◦ relative to the position, so the answer is 263◦.
Copyright c 2010 American Association of Physics Teachers
2010 Semifinal Exam Part A 4
Question A2
A spherical shell of inner radius a and outer radius b is made of a material of resistivity ρ and
negligible dielectric activity. A single point charge q0 is located at the center of the shell. At time
t = 0 all of the material of the shell is electrically neutral, including both the inner and outer
surfaces. What is the total charge on the outer surface of the shell as a function of time for t > 0?
Ignore any effects due to magnetism or radiation; do not assume that b − a is small.
Solution
The material of the shell will remain electrically neutral, although a charge −Q will build up on
the inner surface while a charge of +Q will build up on the outer surface. By spherical symmetry
and Gauss’s law, the electric field in the material of the shell is
E =
1
4π 0
q0 − Q(t)
r2
.
This will cause a current density
J =
E
ρ
=
1
4π 0ρ
q0 − Q(t)
r2
at a radius r, and therefore a net current of
I = (4πr2
)J =
q0 − Q(t)
 0ρ
.
Since I = dQ/dt, we may separate and integrate for
dQ
q0 − Q
=
dt
 0ρ
⇒ log

q0
q0 − Q

=
t
 0ρ
where we used the initial condition Q(0) = 0 to set the integration constant. Solving for Q(t) gives
Q(t) = q0(1 − e−t/ 0ρ
).
