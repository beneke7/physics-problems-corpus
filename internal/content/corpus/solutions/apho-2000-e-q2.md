---
id: apho-2000-e-q2
source: apho
language: en
solution_language: en
translated: false
problem: apho-2000-e-q2
solution_type: official
source_document: solution-document-apho-2000-e-s
source_pdf: cache/phoxiv/apho/2000_E_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/apho/2000_E_S.pdf."
---

Solution to Problem 2
Determination of Stefan-Boltzmann constant
Theoretical Consideration
According to the theory of electromagnetic radiation of solids, the polished aluminum
cylinder, which can be regarded as an ideal reflector, does not absorb nor emit any
radiation. On the other hand, the same cylinder covered by a thin layer of candle’s soot is
assumed to behave as an ideal black body, which is a perfect absorber and emitter of
thermal radiation.
Therefore, the hot polished cylinder is expected to lose its thermal energy by means of
non-radiative mechanism, such as thermal conductivity and convection of surrounding
air. In contrast, the hot blackened cylinder will lose its thermal energy by an additional
process of thermal radiation according to Stefan-Boltzmann law.
Based on the different physical processes described above, 3 different methods of
experiment can be formulated as follows:
1. Method of constant temperature
Assume that the cylinder is heated to the same temperature T when it is
unblackened (polished) and when it is blackened by the soot. The difference in the
measured electric power needed to reach that same equilibrium temperature must
be equal to power loss due to radiative process. In other words,
( ) ( ) ( ) r t n P T P T P T = −
_
_
where:
_
Pr ( T )= power loss of the blackened cylinder due to thermal radiation _
Pt ( T )= total power loss of the blackened cylinder at T
_ Pn ( T )=power loss of the polished cylinder at T due to nonradiative processes
Assuming the same Pn T = in both cases (polished and blackened), one obtains
( ) 4 4
0
( ) ( ) t n P T P T
S T T
σ
−
=
−
_
_
where Tois the surrounding (or room) temperature
Alternatively, although less accurately, other methods may also be formulated by
explicitly assuming that Pnis proportional to ( ) 0 T T − , namely
0 ( ) ( ) n P T k T T = −
_
where k is a constant independent of T. On the basis of this relation, one can
formulate the following two methods for the determination of σ.
2. Method of constant power
In this method, the power of heating P is kept the same in both cases. Let the
temperatures reached in equilibrium for the polished and blackened cylinder be
denoted by Tp and Tbrespectively. Then,
( )
( ) ( )
0
0 P
p
b r b
P k T T
P k T T T
= −
= − +
_
Eliminating k yields
( )
( ) 0
( )
p b
r b
p
T T P
P T
T T
−
=
−
_
Equating this to the radiative power expression of the Stefan-Boltzmann law, we
Obtain
( )
( ) 4 4
0 0 ( )
p b
b p
T T P
S T T T T
σ
−
=
− −
_
3. Method of two temperatures
In this case, the measurements are performed for the blackened cylinder only, but
at two equlibrium temperatures T1 and T2. Let the heating powers required to
reach
T1 and T2 be P1 and P2 respectively. Then we have
( ) ( )
( ) ( )
4 4
1 1 0 1 0
4 4
2 2 0 2 0
P k T T S T T
P k T T S T T
σ
σ
= − + −
= − + −
_
Again, eliminating k from the two equations above leads directly to the following
Expression
( )
( )( ) ( )( )
2 0 1 0 2
4 4 4 4
1 0 2 0 2 0 1 0
( ) T T T T P
S T T T T T T T T
σ
− − −
=
⎡ ⎤ − − − − − ⎣ ⎦
___
Remarks
_
The formulation of the first experimental method requires the insurance of the same T in
both cases. Since P is proportional to T4
, a small difference in T determined in two cases
will result in great error. It is, however, not easy to satisfy the requirement mentioned
above. One way of overcoming this difficulty is to measure the power Pt for heating up
the blackened cylinder at two temperatures in the vicinity of the temperature reached by
the unblackened cylinder, and interpolate the value of Pt at the right T.
_
It is also worth noting that due to the sensitivity of the measurement, a slight change in
the surrounding of the cylinder is likely to affect the result significantly. The environment
must therefore be kept constant during the experiment.
Experimental Configuration
The experimental set-up is described in Figure 1. The heater is mounted on a porcelain
base, and it is connected with a power supply and the measuring meters. The heater is
entirely enclosed by the hollow cylinder which sits also on the same porcelain plate
during the measurement. The thermocouple is permanently attached to the cylinder and
connected to an mV-meter for the determination of the temperature by using a table
listing the characteristics of the thermocouple. The size of the cylinder is 60 mm by
length and 12.5 mm by its external diameter, leading to a surface area of S=24.8 cm2
.
The wall of the cylinder is about 1 mm thick and the thickness of its base is about 3 mm.
All electrical measuring meters are digital instruments.
The power supplied to the heater must be measured separately instead of being read off
the power supply display panel, because the resistance of the heater varies somewhat with
temperature. The reading of V and I should be done at thermal equilibrium between the
cylinder and its surrounding, which will be reached in about 25-30 minutes. In order to
avoid undesirable effects from the surrounding, the whole system should be kept at a
distance from other objects in the laboratory.
Results of measurement
In a set of experiments performed at room temperature of 298.8 K, the results obtained
are represented by the sample data given in Table 1.
Table 1: The values of σ found in a set of three measurements
_
Data Code name
for the data
Surface condition
during measurement
V A T K
a polished 9.8 1.50 485.5
b blackened 9.8 1.50 433.5
c blackened 11.9 1.82 485.5
Discussion
While the last two methods are supposed to be less accurate than the first one, this is not
always confirmed by the experimental results, as the control of experimental condition is
not perfect. The major factors affecting the accuracies of the experimental results are
enumerated and discussed as follows:
1. The cylinder is not necessarily an ideal reflector when it surface is polished, nor is
it an ideal black body when its surface is blackened by the candle’s soot. In other
words, the absorption coefficient is likely to be larger than 0 in the first case, and
less than 1 for the second case. Both of these effects leads to lower value of s.
2. The heat losses via the porcelain base are out of control. Neglecting these losses
will lead to deviation of σ from its real value.
3. The resistivities of the connecting cables have been neglected also, leading to
larger value of s.
Table 2: Results of σ obtained by three different methods
. _
C_
Method used Data used Experimental result
σex W m 2
K4
σexσ_
constant T a+c 5.945 10-8
1.05
constant P a+b 6.087 10-8
1.07
two T ;s b+c 5.386 10-8
0.95
4. The assumption of equal non-radiative loss for the case with polished and
blackened surfaces is at best an approximation. For instance, the difference
between thermal conductivity of the soot and that of aluminium is neglected in
this experiment, leading to lower value of s. The equality will also be violated due
to uncontrollable heat losses via the porcelain base.
5. The influences of air convection in the surrounding of the cylinder due to motions
of the experimentator and other objects are also possible sources of errors.
Suggested Grading Scheme
Theoretical part
1. Statement of non-radiative nature of the thermal energy loss in the case of
cylinder with polished surface (1.0 p)
2. Recognition of non-radiative as well as radiative contributions to energy loss in
the case of cylinder with blackened surface (1.5 p)
3. Assumption of equal non-radiative losses in both cases for the same final
equilibrium temperature T (2.0 p)
4. Derivation of formula for σ (2.5 p)
Remarks
In case the participants employ the second or the third method, the first three item in the
grading scheme for the theoretical part should be accordingly adjusted and combined as
folllows.
1. Statements on radiative and non-radiative processes of heat trans-fer (2.5 p)
2. Assumption of linear dependence of non radiative loss on tem-perature difference
(2.0 p)
Experimental part
1. Description of the experimental set-up (4.0 p)
The wiring of measuring instruments (1.5 p)
Method and procedure of measurement (1.5 p)
The quantities to be measured (1.0 p)
2. Results of measurement (data of V A and T) (3.0 p)
3. Value of σ (1.0 p)
4. Accuracy of value of σ (max 3.0 p)
within 10% of the real value
σ = 5.67 x 10-8
W m-2
K-4
(3.0 p)
between 10% and 20% of the real value (2.0 p)
5. Estimation of uncertainties or errors (2.0 p)
