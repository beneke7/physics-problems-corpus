---
id: solution-document-ipho-1971-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1971_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-1971-q1, ipho-1971-q2, ipho-1971-q3, ipho-1971-q4]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/1971_S.pdf."
---

Solutions to the problems of the 5-th
International Physics Olympiad, 1971, Sofia, Bulgaria
The problems and the solutions are adapted by
Victor Ivanov
Sofia State University, Faculty of Physics, 5 James Bourcier Blvd., 1164 Sofia, Bulgaria
Reference: O. F. Kabardin, V. A. Orlov, in “International Physics Olympiads for High
School Students”, eds. V. G. Razumovski, Moscow, Nauka, 1985. (In Russian).
Theoretical problems
Question 1.
The blocks slide relative to the prism with accelerations a1 and a2, which are
parallel to its sides and have the same magnitude a (see Fig. 1.1). The blocks move
relative to the earth with accelerations:
(1.1) w1 = a1 + a0;
(1.2) w2 = a2 + a0.
Now we project w1 and w2 along the x- and y-axes:
(1.3) 0 1 1 cos a a w x − α = ;
(1.4) 1 1 sinα = a w y ;
(1.5) 0 2 2 cos a a w x − α = ;
(1.6) 2 2 sinα − = a w y .
Fig. 1.1
The equations of motion for the blocks and for the prism have the following vector
forms (see Fig. 1.2):
(1.7) 1 1 1 1 1 T R g w + + = m m ;
(1.8) 2 2 2 2 2 T R g w + + = m m ;
(1.9) 2 1 2 1 0 T T R R R g a − − + − − = M M .
Fig. 1.2
The forces of tension T1 and T2 at the ends of the thread are of the same magnitude T
since the masses of the thread and that of the pulley are negligible. Note that in equation
(1.9) we account for the net force –(T1 + T2), which the bended thread exerts on the
α1 α2
x
y
a0
a1
a2 w2
w1
R2
T2
R1
T1
R
Mg
m1g
m2g
x
yprism through the pulley. The equations of motion result in a system of six scalar
equations when projected along x and y:
(1.10) 1 1 1 0 1 1 1 sin cos cos α − α = − α R T a m a m ;
(1.11) g m R T a m 1 1 1 1 1 1 cos sin sin − α + α = α ;
(1.12) 2 2 2 0 2 2 2 sin cos cos α + α − = − α R T a m a m ;
(1.13) g m R T a m 2 2 2 2 2 2 sin sin sin − α + α = α ;
(1.14) 2 1 2 2 1 1 0 cos cos sin sin α + α − α − α = − T T R R Ma ;
(1.15) Mg R R R − α − α − = 2 2 1 1 cos cos 0 .
By adding up equations (1.10), (1.12), and (1.14) all forces internal to the system cancel
each other. In this way we obtain the required relation between accelerations a and a0:
(1.16)
2 2 1 1
2 1
0
cos cos α + α
+ +
=
m m
m m M
a a .
The straightforward elimination of the unknown forces gives the final answer for a0:
(1.17) 2
2 2 1 1 2 1 2 1
2 2 1 1 2 2 1 1
0
) cos cos ( ) )( (
) cos cos )( sin sin (
α + α − + + +
α + α α − α
=
m m m m M m m
m m m m
a .
It follows from equation (1.17) that the prism will be in equilibrium (a0 = 0) if:
(1.18)
1
2
2
1
sin
sin
α
α
=
m
m
.
Question 2.
We will denote by H (H = const) the height of the tube above the mercury level
in the pan, and the height of the mercury column in the tube by hi. Under conditions of
mechanical equilibrium the hydrogen pressure in the tube is:
(2.1) i air H gh P P ρ − = 2
,
where ρ is the density of mercury at temperature ti:
(2.2) ( ) t β − ρ = ρ 1 0
The index i enumerates different stages undergone by the system, ρ0 is the density of
mercury at t0 = 0 °C, or T0 = 273 K, and β its coefficient of expansion. The volume of
the hydrogen is given by:
(2.3) Vi = S(H – hi).
Now we can write down the equations of state for hydrogen at points 0, 1, 2, and
3 of the PV diagram (see Fig. 2):
(2.4) 0 0 0 0 0 ) ( ) ( RT
M
m
h H S gh P = − ρ − ;
(2.5) 0 1 1 0 1 ) ( ) ( RT
M
m
h H S gh P = − ρ − ;
(2.6) 2 2 2 1 2 ) ( ) ( RT
M
m
h H S gh P = − ρ − ,
where
0
2 1
2
T
T P
P = , [ ] ) ( 1
) ( 1
0 2 0
0 2
0
1 T T
T T
− β − ρ ≈
− β +
ρ
= ρ since the process 1–3 is
isochoric, and:(2.7) 3 3 3 2 2 ) ( ) ( RT
M
m
h H S gh P = − ρ −
where [ ] ) ( 1 0 3 0 2 T T − β − ρ ≈ ρ ,
2
3
2
2
3
2 3
h H
h H
T
V
V
T T
−
−
= = for the isobaric process 2–3.
Fig. 2
After a good deal of algebra the above system of equations can be solved for the
unknown quantities, an exercise, which is left to the reader. The numerical answers,
however, will be given for reference:
H ≈ 1.3 m;
m ≈ 2.11×10–6
kg;
T2 ≈ 364 K;
P2 ≈ 1.067×105
Pa;
T3 ≈ 546 K;
P2 ≈ 4.8×104
Pa.
Question 3.
A circuit equivalent to the given one is shown in Fig. 3. In a steady state (the
capacitors are completely charged already) the same current I flows through all the
resistors in the closed circuit ABFGHDA. From the Kirchhoff’s second rule we obtain:
(3.1)
R
E E
I
4
1 4 −
= .
Next we apply this rule for the circuit ABCDA:
(3.2) 1 2 1 E E IR V − = + ,
where V1 is the potential difference across the capacitor C1. By using the expression
(3.1) for I, and the equation (3.2) we obtain:
(3.3) 1
4
1 4
1 2 1 =
−
− − =
E E
E E V V.
Similarly, we obtain the potential differences V2 and V4 across the capacitors C2 and C4
by considering circuits BFGCB and FGHEF:
(3.4) 5
4
1 4
2 4 2 =
−
− − =
E E
E E V V,
P0
P2
P1
P
V0 V1= V2 V3 V
1
2 3
0(3.5) 1
4
1 4
3 4 4 =
−
− − =
E E
E E V V.
Finally, the voltage V3 across C3 is found by applying the Kirchhoff’s rule for the
outermost circuit EHDAH:
(3.6) 5
4
1 4
1 3 3 =
−
− − =
E E
E E V V.
The total energy of the capacitors is expressed by the formula:
(3.7) ( ) 26
2
2
4
2
3
2
2
2
1 = + + + = V V V V
C
W µJ.
Fig. 3
When points B and H are short connected the same electric current I’ flows
through the resistors in the BFGH circuit. It can be calculated, again by means of the
Kirchhoff’s rule, that:
(3.8)
R
E
I
2
4
= ′ .
The new steady-state voltage on C2 is found by considering the BFGCB circuit:
(3.9) 2 4 2 E E R I V − = ′ + ′
or finally:
(3.10) 0
2
2
4
2 = − = ′ E
E
V V.
Therefore the charge 2 q′ on C2 in the new steady state is zero.
Question 4.
In a small time interval ∆t the fish moves upward, from point A to point B, at a
small distance d = v∆t. Since the glass wall is very thin we can assume that the rays
leaving the aquarium refract as if there was water – air interface. The divergent rays
undergoing one single refraction, as show in Fig. 4.1, form the first, virtual, image of the
fish. The corresponding vertical displacement A1B1 of that image is equal to the distance
d1 between the optical axis a and the ray b1, which leaves the aquarium parallel to a.
Since distances d and d1 are small compared to R we can use the small-angle
approximation: sinα ≈ tanα ≈ α (rad). Thus we obtain:
(4.1) d1 ≈ R α;
(4.2) d≈ R γ;
(4.3) α + γ = 2β;
(4.4) α ≈ nβ.
E1 E2 E3 E4
C1 C2
C3
C4
A B
C
D
E F
G H
R R
R
RFrom equations (4.1) - (4.4) we find the vertical displacement of the first image in terms
of d:
(4.5) d
n
n
d 1
2
=
−
,
and respectively its velocity v1 in terms of v:
(4.6) v
n
n
v 1
2
2 =
−
= .
Fig. 4.1
The rays, which are first reflected by the mirror, and then are refracted twice at
the walls of the aquarium form the second, real image (see Fig. 4.2). It can be
considered as originating from the mirror image of the fish, which move along the line
A’B’ at exactly the same distance d as the fish do.
Fig. 4.2
The vertical displacement A2B2 of the second image is equal to the distance d2 between
the optical axis a and the ray b2, which is parallel to a. Again, using the small-angle
approximation we have:
(4.7) d’ ≈ 4Rδ - d,
(4.8) d2 ≈ Rα
Following the derivation of equation (4.5) we obtain:
(4.9) d
n
n
d 2
2
=
−
′.
Now using the exact geometric relations:
A
B
A1
B1
a
b1
d1
α
β
β
γ
α
d
α
β β
γ
α
δ
d'
d d
d2
B2
A2
A’
B’
A
B 4R
a
b2(4.10) δ = 2α – 2β
and the Snell’s law (4.4) in a small-angle limit, we finally express d2 in terms of d:
(4.11) d
n
n
d
10 9
2
−
= ,
and the velocity v2 of the second image in terms of v:
(4.12) v v
n
n
v
3
2
10 9
2 =
−
= .
The relative velocity of the two images is:
(4.13) vrel = v1 – v2
in a vector form. Since vectors v1 and v2 are oppositely directed (one of the images
moves upward, the other, downward) the magnitude of the relative velocity is:
(4.14) v v v v
3
8
2 1 rel = + = .
Experimental problem
The circuit is given in the figure below:
Sliding the contact along the rheostat sets the current I supplied by the source. For each
value of I the voltage U across the source terminals is recorded by the voltmeter. The
power dissipated in the rheostat is:
P = UI
provided that the heat losses in the internal resistance of the ammeter are negligible.
1. A typical P–I curve is shown below:
I
P
Pmax
I0
A
V
R
EIf the current varies in a sufficiently large interval a maximum power Pmax can be
detected at a certain value, I0, of I. Theoretically, the P(I) dependence is given by:
(5.1) r I EI P 2
− = ,
where E and r are the EMF and the internal resistance of the dc source respectively. The
maxim value of P therefore is:
(5.2)
r
E
P
4
2
max = ,
and corresponds to a current:
(5.3)
r
E
I
2
0 = .
2. The internal resistance is determined trough (5.2) and (5.3) by recording Pmax and I0
from the experimental plot:
2
0
max
I
P
r = .
3. Similarly, EMF is calculated as:
0
max 2
I
P
E = .
4. The current depends on the resistance of the rheostat as:
r R
E
I
+
= .
Therefore a value of R can be calculated for each value of I:
(5.4) r
I
E
R − = .
The power dissipated in the rheostat is given in terms of R respectively by:
(5.5) 2
2
) ( r R
R E
P
+
= .
The P–R plot is given below:
Its maximum is obtained at R = r.
5. The total power supplied by the dc source is:
(5.6)
r R
E
Ptot
+
=
2
.
R
Ptot
E2
/r
R
P
R = r
E2
/(4r)6. The efficiency respectively is:
(5.7)
r R
R
P
P
tot +
= = η .
R
η
1
