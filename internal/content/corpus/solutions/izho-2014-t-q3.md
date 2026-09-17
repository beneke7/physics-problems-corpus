---
id: izho-2014-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2014-t-q3
solution_type: official
source_document: solution-document-izho-2014-t-s
source_pdf: cache/phoxiv/izho/2014_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2014_T_S.pdf."
---

Problem 3 Metamaterials (10 points)
1. Consider the conducting layer disposed radially at the interval [ , ] r r dr + . Its conductivity dρ is
0
2 dS rdr
d r
L L
π
ρ σ β = = , (1)
and, hence, the total conductivity is given by
3
0
2
3
R
R
d
L
πβ
ρ ρ = = ∫ . (2)
Thus, the resistance of the wire is found as
2
0 3
1 3
2.39 10
2
L
R Ohm
R ρ πβ
−
= = = × . (3)
2. The amount of heat generated in the wire per unit time is determined by Joule law
2
0 I P I R = . (4)
In steady regime, the same amount of heat must be removed through the surface of the wire
into the environment, therefore, according to the Newton-Richman law
0 2 2 ( ) I ext s P RLP RL T T π πα = = − , (5)
whence
2
0 2 4
3
297
4
s
I
T T К
R π αβ
= + = . (6)
3. Consider a cylinder of radius r . Let us find an amount of heat generated per unit time inside that
cylinder. To do this, let us find the electric field strength in the wire. According to Ohm's law, the
current density is
0 j E σ = , (7)
therefore, the total current can be written as
X International Zhautykov Olympiad/Theoretical Competition/Solutions Page 8/10
3
0
0 0
2
2 2
3
r r
R E
I j rdr E rdr
π β
π σ π = = = ∫ ∫ . (8)
Hence
3
3
2
I
E
R πβ
= . (9)
The electric power generated in the cylender is determined by the Joule law in differential
form
2 3
2
0 6
0
3
2
2
r
r
I Lr
P E rLdr
R
σ π
πβ
= = ∫ . (10)
It is evident that the power dissipated inside the cylinder must be taken away through the
surface of the cylinder, thus,
2 r
dT
P P rL
dr
κ π = = − . (11)
Solving differential equation (11), using (10) together with the initial condition
( ) s T R T = , (12)
the following solution is obtained in the form
2 3 2 3
0 2 6
( 3 )
( )
4
I R R r
T r T
R
α κ α
π αβκ
+ −
= + . (13)
Thus, the temperature in the center of the wire is
2 3 2
max 0 2 6
( 3 )
299
4
I R R
T T К
R
α κ
π αβκ
+
= + = . (14)
4. The radius change of the wire is determined by the law of thermal expansion of solids and can be
written as
[ ]
2
9
0 2 3
0
3 ( 4 )
( ) 5.70 10
16
R
T
R I
R T r T dr m
R
γ α κ
δ γ
π αβκ
− +
= − = = × ∫ . (15)
5. The magnetic field induction is determined by the circulation theorem, which, in this case, is
written as
0
0 0
2 2 2
r r
B r j rdr E rdr π π σ π = = ∫ ∫ . (16)
Using expression (9), we finally obtain
2
0
3
( )
2
Ir
B r
R
µ
π
= . (17)
6. The energy density of the magnetic field is given by
2
0
( )
( )
2
B
B r
w r
µ
= , (18)
therefore, the energy of the magnetic field inside the wire
2
10 0
0
( )2 8.33 10
24
R
B B
I L
W w r rLdr J
µ
π
π
−
= = = × ∫ . (19)
7. Let us write the equilibrium condition for the wire layer of small width l and length L, disposed
at the interval , r r dr + . The total Ampere force acting on this layer is written as
( ) A dF jB r Lldr = . (20)
Hence, the pressure difference is obtained as
2 3
0
2 6
3
( )
4
A I r dF
dp r dr
lL R
µ
π
= = . (21)
X International Zhautykov Olympiad/Theoretical Competition/Solutions Page 9/10
Taking into consideration that the pressure at the wire pressure is zero, one gets
2 4 4
0
2 6
3 ( )
( )
16
I R r
p r
R
µ
π
−
= . (22)
8. As a result of the mechanical pressure the mechanical stress appears in the crystal lattice whose
energy density is determined by the expression
2 2
( )
2 2
p r
w
E E
σ
σ
= = , (23)
thus, the total energy of mechanical deformations is found as
2 4
18 0
3 2
0
3
2 2.39 10
320
R
I L
W w rLdr J
E R
σ σ
µ
π
π
−
= = = × ∫ . (24)
9. The radius change of the wire is determined by Hooke's law, which, in this case, can be written
in the form
( ) p r
E E
σ
ε = = , (25)
where ε is the relative change in radius.
Thus, the radius change due to mechanical stress is found as
2
12 0
2
0
1 3
( ) 1.91 10
20
R R
a
I
R dr p r dr m
E ER
σ
µ
δ ε
π
−
= = = = × ∫ ∫ . (26)
10. Comparing expressions (15) and (25) we obtain
2
10 1 0 4
3.35 10
5 ( 4 )
R
К
E R
µ αβκ
γ
α κ
− −
= = ×
+
. (27)
Grading scheme
№ Content Points
1 Formula (1) 0.25
1.0
Formula (2) 0.25
Formula (3) 0.25
Correct numerical numerical value in (3) 0.25
2 Formula (4) 0.25
1,0
Formula (5) 0.25
Formula (6) 0.25
Correct numerical numerical value in (6) 0.25
3 Formula (7) 0.25
2.5
Formula (8) 0.25
Formula (9) 0.25
Formula (10) 0.25
Formula (11) 0.25
Formula (12) 0.25
Formula (13) 0.5
Formula (14) 0.25
Correct numerical numerical value in (14) 0.25
4 Formula (15) 0.25 0.5
Correct numerical numerical value in (15) 0.25
5 Formula (16) 0.25 0.5
Formula (17) 0.25
6 Formula (18) 0.5
1.0 Formula (19) 0.25
X International Zhautykov Olympiad/Theoretical Competition/Solutions Page 10/10
Correct numerical numerical value in (19) 0.25
7 Formula (20) 0.25
1.0 Formula (21) 0.25
Formula (22) 0.5
8 Formula (23) 0.5
1.0 Formula (24) 0.25
Correct numerical numerical value in (24) 0.25
9 Formula (25) 0.5
1.0 Formula (26) 0.25
Correct numerical numerical value in (26) 0.25
10 Formula (27) 0.25 0.5
Correct numerical numerical value in (27) 0.25
Total 10,0
