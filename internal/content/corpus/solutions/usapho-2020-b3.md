---
id: usapho-2020-b3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2020-b3
solution_type: official
source_document: solution-document-usapho-2020-s
source_pdf: cache/phoxiv/usapho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2020_S.pdf."
---

Question B3
Real Expansion
Consider a “real” monatomic gas consisting of N atoms of negligible volume and mass m in equilib-
rium inside a closed cubical container of volume V . In this “real” gas, the attractive forces between
atoms is small but not negligible. Because these atoms have negligible volume, you can assume
that the atoms do not collide with each other for the entirety of the problem.
a. Consider an atom in the interior of this container of volume V . Suppose the potential energy of
the interaction is given by
u(r) =



0 r < d
−

d
r
6
r ≥ d
where d 
 V 1/3 is the minimum allowed distance between two atoms. Assume the gas is
uniformly distributed within the container, what is the average potential energy of this atom?
Write your answer in terms of a0 =
2πd3
3
, N, and V .
Solution
The density of the gas is given by N/V . In a spherical shell of radius r and thickness ∆r,
there are (4πr2∆r)N/V atoms. The potential energy is given by
∆U = −(4πr2
∆r)N/V d6
/r6
.
Then, the total potential energy is given by
U =
Z ∞
d
−(4πr2
dr)N/V d6
/r6
= −2a0
N/V.
b. What is the average potential energy of an atom near the boundary of the box? Assume that
there is no interaction between atoms near the boundary and the box itself.
Solution
Now only half of the shell of radius r is full of gas, and the other half is outside of the box.
This mean that the potential energy is lessened by a factor of two, to −a0N/V.
c. Using Bernoulli’s law P + U + ρv2/2 = constant, with pressure P, potential energy density U,
mass density ρ and fluid velocity v, what is the pressure at the boundary of the box? Assume
the interior pressure is given by the ideal gas law.
Solution
The potential energy density difference is −a0 N2
V 2 . Since there is no velocity difference, this
is also the pressure difference. If the pressure on the interior is NkT
V , then the pressure on
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 19
the box is NkT
V − a0 N2
V 2
d. Assuming most atoms are in the interior of the box, what is the total energy of the atoms in
the box?
Solution
The total kinetic energy is 3
2NkT. The total potential energy is −a0N2/V (we drop a factor
of two to avoid double-counting). So the total energy is 3
2NkT − a0N2/V.
Now consider an insulated partitioned container with two sections, each of volume V . We fill
one side of the container with N atoms of this “real” gas at temperature T, which the other side
being a vacuum. We then quickly remove the partition and let the gas expand to fill the entirety
of the partitioned container. During this expansion, the energy of the gas remains unchanged.
e. What is the final temperature of the gas after the expansion?
Solution
Naively, we might say that the total potential energy of the gas is −2a0N2/V , but to avoid
double-counting, we divide by 2 and instead arrive at −a0N2/V . Then, the quantity
E =
3
2
NkBT −
a0N2
V
is conserved. Therefore,
T0
= T −
a0N
3kBV
.
f. What is the increase in the entropy of the universe as a result of the free expansion? Give your
answer to first order in a0N
V kBT .
Solution
The entropy of the surroundings do not increase as a result of the free expansion (no heat is
dumped to the surroundings, and the surroundings remain in thermal equilibrium). How-
ever, the entropy of the gas does increase because the gas is momentarily not in equilibrium.
Therefore, we just have to compute the increase in entropy of the gas.
Because entropy is a state function, we compute this change in entropy by constructing
a reversible process between the initial and final states of the expansion, and computing
the change in entropy for this process. Consider constant energy reversible expansion of
this gas. For this process, the work done by the gas is equal to the heat the gas takes in.
Therefore,
dS =
pdv
t
,
where we use lowercase letters to denote the quantities during the reversible expansion.
Recall that
pv +
a0N2
v
= NkBt.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 20
If the energy of the system is E, then,
3
2
pv +
3a0N2
2v
−
a0N2
v
= E.
Then,
p =
2E
3v
−
a0N2
3v2
.
From our expression of energy,
t =
2
3
E + a0N2/v
NkB
.
Then,
∆S =
Z 2V
V
ENkB
Ev + a0N2
−
a0N3kB
2(Ev2 + a0N2v)
dv .
Taylor expanding gives us
∆S =
Z 2V
V
NkB
v
−
3a0N3kB
2Ev2
dv .
Integrating gives us
∆S = NkB log2 −
3a0N3kB
4EV
.
Using that E ≈ 3/2NkBT, we arrive at
∆S = NkB log2 −
a0N2
2V T
.
Copyright c 2020 American Association of Physics Teachers
