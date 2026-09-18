---
id: kevin-zhou-xrev-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-xrev-p004
solution_type: author
source_document: solution-document-kevin-zhou-xrevsol
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/XRevSol.pdf."
---

[3] Problem 4. Consider a layer of the atmosphere with density ρ, pressure P, adiabatic index γ, and
density and pressure gradients dρ/dz and dP/dz. Suppose that a small parcel of air in this layer
acquires a small upward velocity. Under certain conditions, the parcel of air will begin oscillating
in height, performing simple harmonic motion. Neglecting drag and heat transfer between the
parcel of air and its surroundings, find the angular frequency ω of this motion. This is called the
Brunt–Vaisala or buoyancy frequency.
Solution. Let the parcel have fixed mass m. At its initial position, the parcel has volume V and
density ρp, which is equal to the local atmospheric density ρ. After the parcel moves up by ∆z, it
has volume V ′ and density ρ′
p, and the local atmospheric density is ρ′. Then the net force on the
parcel is the buoyant force minus the weight,
F = (ρ′
− ρ′
p)gV ′
and we have m = ρ′
pV ′. Thus, the acceleration is
a =

ρ′
ρ′
p
− 1

g.
For small displacements, we have
ρ′
≈ ρ +
dρ
dz
∆z, ρ′
p ≈ ρ +
dρp
dz
∆z
so that at first order in ∆z, the acceleration is
a =
g
ρ

dρ
dz
−
dρp
dz

∆z.
To calculate dρp/dz, note that since the parcel expands and contracts adiabatically, Pp ∝ ργ
p.
Moreover, the pressure of the parcel is always equal to that of the surrounding atmosphere, so
P ∝ ργ
p
which for small displacements means
1
P
dP
dz
= γ
1
ρ
dρp
dz
.
Plugging this into the acceleration equation gives
a = g

1
ρ
dρ
dz
−
1
γP
dP
dz

∆z
which implies
ω =
s
g

1
γP
dP
dz
−
1
ρ
dρ
dz

=
r
g
dlog(P1/γ/ρ)
dz
.
When the argument of the square root becomes negative, there is no frequency of oscillation; instead,
the parcel just keeps on going. That describes an atmosphere unstable against convection. As a
check, marginal stability occurs for an adiabatic atmosphere, where P ∝ ργ. In realistic atmospheres,
you wouldn’t expect to see these kinds of oscillations because of damping effects, but they provide
a characteristic timescale for dynamic processes.
4
Kevin Zhou Physics Olympiad Handouts
[3] Problem 5.   ^ 1 0USAPhO 2021, problem B2. A conceptual problem on methods of heat transfer.
[3] Problem 6.   ^ 1 0USAPhO 2019, problem B2. A useful problem for getting comfortable with
numbers and estimates in astronomy.
[3] Problem 7.   ^ 1 0USAPhO 2022, problem B1. A data analysis problem about a nonideal gas.
[3] Problem 8.   ^ 1 0USAPhO 2024, problem B2. Two exercises on the heat capacity of solids.
[3] Problem 9.   h 1 0INPhO 2019, problem 6. A thermodynamic cycle with a nonideal gas.
[5] Problem 10.   h 1 0IPhO 2011, problem 2. A problem on an electrified soap bubble, which combines
electrostatics, thermodynamics, and surface tension.
2 Relativity
[4] Problem 11.   T 1 0IPhO 1998, problem 3. A great problem on a real controversy in physics, which
also gives you practice working with real data.
[4] Problem 12.   T 1 0EuPhO 2024, problem 2. A problem on visual perception in special relativity.
Note that in part (b), when the problem asks about what Alice “sees”, it means what she sees from
light reaching her eyes.
[4] Problem 13 (Physics Cup 2018). A spaceship travels with a constant proper acceleration g along
a straight line. At a certain moment, it launches two missiles in the direction of its motion, with
speeds v and 2v. Find the proper time interval in the spaceship between catching up to the first
and to the second missile.
Solution. See the official solutions here.
