---
id: apho-2000-t-q2
source: apho
language: en
solution_language: en
translated: false
problem: apho-2000-t-q2
solution_type: official
source_document: solution-document-apho-2000-t-s
source_pdf: cache/phoxiv/apho/2000_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/apho/2000_T_S.pdf."
---

Solution Proble m 2
Dete ction of Alpha Particles
a. From the given range-energy relation and the data supplied we get
2 2
3 3 5.50
6.69
0.318 0.318
R
E MeV MeV
α    
= = =    
   
(0.5 point)
since Wion-ρair= 35 eV, then
6
5
αir
6.69 10
1.9 10
35
ion N ρ −
×
= = ×
(0.5 point)
Size of voltage pulse:
11
with 45 4.5 10
air air N e Q
V
C C
C pF
ρ −
−
∆
∆ = =
= = ×
(0.5 point)
Hence
5 19
11
1.9 10 1.6 10
0.68
4.5 10
V V mV
−
−
× × ×
∆ = =
×
(0.5 point)
b. Electrons from the ions-pairs produced by α particles from a radioactive sources
of activity A (=number of α particles emitted by the sources per second) which
enter the detector with detection efficiency 0.1, will produce a collected current.
αir
5 19
0.1
0.1 1.9 10 1.6 10
ion
Q
I AN e
t
A A
ρ −
−
= = ×
= × × × × ×
(1.0 point)
With Imin=10-12
A, the
12 1
1
min 15
10 dis
330dis
1.6 1.9 10
s
A s
− −
−
−
= =
× ×
(1.0 point)
6
Since 1 Ci = 3.7 x 1010
dis s-1
then
9
min 10
330
8.92 10
3.7 10
A Ci Ci −
= = ×
×
(1.0 point)
c. With time constant
( ) -12 3
withC=45×10 F 10
1000
22.22
45
RC s
R M M
τ −
= =
 
= Ω = Ω  
 
(0.5 point)
For the voltage signal with height ∆ V = 0.68 mV generated at the anode of the
ionization chamber by 6.69 MeV α particles in problem (a), to achieve q 0.25 V=
250mV voltage signal, the necessary gain of the voltage pulse amplifier should be
250
368
0.68
G = =
(0.5 point)
d. By symmetry , the electric field is directed radially and depends only on distance
the axis and can be deducted by using Gauss’ theorem.
If we construct a Gaussian surface which is a cylinder of radius τ and length l , the
charge contained within it is σ l.
The surface integral
. 2 E dS rlE π = ∫
7
Figure 1 : The Gaussian surface used to calculate the electric field E.
(1.0 point)
Since the field E is everywhere constant and normal to the curved surface. By Gauss’s
theorem :
( )
0
0
2
so
E
2
l
rlE
r
r
λ
π
ε
λ
πε
=
=
Since E is radial and varies only with τ , then
dV
E
dr
= − and the potential V can be
found by integrating E(τ ) with respect to τ , if we call the potential of inner wire V0,
we have
( )
2
0
0 2 d
dr
V r V
r
τ
λ
πε
− = − ∫
Thus
( ) 0
0
2
ln
2
r
V r V
d
λ
πε
 
− = −  
 
(1.0 point)
8
We can use this expression to evaluate the voltage between the capacitor’s conductors
by setting
2
D
r = , giving a potential difference of
0
ln
2
D
V
d
λ
πε
 
=  
 
since the charge Q in the capacitor is σ l, and the capacitance C is defined by Q=CV,
the capacitance per unit length is
0 2
ln D
d
L πε
(1.0 point)
The maximum electric field occurs where r minimum, i.e. at
2
d
r = . if we set the
field at
2
d
r = equal to the breakdown field Eb, our expression for E® shows that the
charges per unit length σ in the capacitor must be Ebπ0d. Substituting for the potential
difference V across the capacitor gives
1
ln
2
b
D
V E d
d
 
=  
 
Taking E b = 3 x 106
V , d= 1mm, and D= 1 cm , gives V = 3.453.45 kV.
(1.0 point).
9
Solution to Proble m 3
Ste w art-Tolm an Effe ct
Consider a single ring first
Let us take into account a small part of the ring and introduce a reference system in
which this part is a rest. The ring is moving with certain angular acceleration α. Thus, our
reference system is not an inertial one and there exists certain linear acceleration in it.
The radial component of this acceleration may be neglected as the ring is very thin and no
radial effects should be observed in it. The tangential component of the linear
acceleration along the considered part of the ring is rα . When we speak about the
reference system in which the positive ions forming the crystal lattice of the metal are at
rest. In this system certain inertial force acts on the electrons. This inertial force has the
value mrα and its oriented in a opposite side to the acceleration mentioned above.
An interaction between the electrons and crystal lattice does not allow electrons to
increase their velocity without any limitations. This interaction, according to the Ohm’s
law, is increasing when the velocity of electrons with respect to the crystal lattice in
increasing. At some moment equilibrium between the inertial force and the breaking
force due the interaction with the lattice is reached. The net results is that the positive
ions and the negative electrons are moving with different velocities; its means that in the
system in which the ions are at rest an electric current will flow!
The inertial force is constant and in each point is tangent to the ring. It’s acts onto the
electrons in the same way as certain fictitious electric field tangent to the ring in each
point.
Now we shall find value of this fictitious electric field. Of course, the force due to it
should be equal to the inertial force. Thus:
eE mrα =
Therefore:
mr
E
e
α
=
In the ring 9 at rest) with resistance R, the field of the above value would generate a
current:
2 rE
I
R
π
=
10
Thus, the current in the considered ring should be :
2
2 mr
I
R
π α
=
It is true that the field E is a fictitious electric field. But it describes a real action of the
inertial force onto electrons. The current flowing in the ring is real! .
The above considerations allow us to treat the system described in the system described
in the text of the problem as a very long solenoid consisting of n loops per unit of length
(along the symmetry axis), in which the current I is flowing. It is well known that the
magnitude of the field B inside such solenoid (far from its end) is homogenous and its
value is equal:
0
0
B I
I
µ η
µµ η
=
Β=
where µ0 denotes the permeability of vacuum. Thus, since the point at the axis is not
rotating, it is at rest both in the non-inertial and in the laboratory frame, hence the
magnetic field at the center of the axis in the laboratory frame is
2
0 2 nmr
B
eR
πµ
=
It seems that this problem is very instructive as in spite of the fact that the rings are
electrically neutral, in the system – unexpectedly., due to a specific structure of matter –
there occurs a magnetic field. Moreover, it seems that due to this problem it is easier to
understand why the electrical term: electromotive force” contains a mechanical term
“force” inside.
Marking Sche m e
1. Reference system in which the ions are at rest 2p
2. Inertial force along the ring 2p
3. Equilibrium of two forces acting onto the electrons 2p
4. Electric field E 1p
5. Current I 1p
6. Equivalence of the systems considered in the text and solenoid 1p
7. Magnetic field ( final formula) 1p
