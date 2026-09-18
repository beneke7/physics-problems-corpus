---
id: usapho-2020-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2020-a1
solution_type: official
source_document: solution-document-usapho-2020-s
source_pdf: cache/phoxiv/usapho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2020_S.pdf."
---

Question A1
Braking up
An infinitely long wire with linear charge density −λ lies along the z-axis. An infinitely long
insulating cylindrical shell of radius a is concentric with the wire and can rotate freely about the
z-axis. The shell has moment of inertia per unit length I. Charge is uniformly distributed on the
shell, with surface charge density
λ
2πa
.
The system is immersed in an external magnetic field B0ẑ, and is initially at rest. Starting at
t = 0, the external magnetic field is slowly reduced to zero over a time T
 a/c, where c is the
speed of light.
a. Find an expression of the final angular velocity ω of the cylinder in terms of the symbols given
and other constants.
Solution
From Faraday’s law, you can find the induced electric field inside the cylinder at a distance
r from the wire:
I
~ Eind · d~ ` = −
dΦB
dt
(A1-1)
Eind(r) = −
r
2
dB
dt
(A1-2)
This induced field exerts a torque on the cylinder, causing it to rotate:
τ = 2πa ·
λ
2πa
· Eind(a) · a = I ·
dω
dt
(A1-3)
⇒
dω
dt
= −
λa2
2I
·
dB
dt
(A1-4)
Integrate on both sides, and noting that ω(t = 0) = 0, we have:
ω(T) = −
λa2
2I
B(T) − B0

(A1-5)
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part A 3
It is important to note that B(T) 6= 0. Even though the external field decreases to zero,
the now-rotating charged cylinder generates a magnetic field. Using Ampere’s Law, you
can find at t = T, the magnetic field is:
I
~ Bind · d~ ` = µ0Ienc, (A1-6)
where Ienc =
λ
2πa
· ω(T) · a (A1-7)
⇒ B(T) = µ0
λ
4π2a
ω(T) (A1-8)
Combining equations (A1-5) and (A1-8), we have:
ω(T) =
λa2
2I
B0
1 + µ0
λ2a
8πI
b. You may be surprised that the expression you find above is not zero! However, the electric and
magnetic fields can have angular momentum. Analogous to the “regular” angular momentum
definition, the EM field angular momentum per unit volume at a displacement r from the axis
of rotation is:
L(r) = r × P(r).
P(r) is a vector analogous to momentum, given by
P(r) = α · E(r) × B(r)

.
where α is some proportionality constant. Find an expression for α in terms of given variables
and fundamental constants.
Solution
The electric field inside the cylindrical shell is given by E(r) = − λ
2π 0rr̂ inward. The
magnetic field is given by B(t)ẑ. Then:
P(r) = α
λB(t)
2π 0r
θ̂.
The angular momentum per unit volume is then:
L(r) = −α
λ
2π 0
ẑ
The angular momentum per unit length is then:
L = −
αλB(t)a2
2
ẑ.
Comparing this to Equation (A1-5) shows that α =  0.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part A 4
