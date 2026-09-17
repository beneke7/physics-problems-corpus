---
id: izho-2022-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2022-t-q2
solution_type: official
source_document: solution-document-izho-2022-t-s
source_pdf: cache/phoxiv/izho/2022_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2022_T_S.pdf."
---

Problem 2. Greenhouse effect (10.0 points)
Atmosphere without greenhouse effect
2.1 Direct calculation by Wien's formula gives the following result
max 0.446 m S
S
b
T
  = = . (1)
2.2 In the steady state, the power of solar radiation incident on the Earth is
equal to the power of the thermal radiation of the Earth. When writing the
energy balance equation, it must be taken into account that the Sun
illuminates the Earth from one side, and the Earth radiates in all directions,
i.e.
2 4
0
2
4 R T R W     =  . (2)
It follows from this relation that
4
0 280.3 К
4
W
T

= = , (3)
and the same temperature in degrees Celsius is equal to
0 7.15 С t =  . (4)
2.3 According to the Wien’s formula, we find that at the given temperature, the maximum radiation
corresponds to the wavelength
max 10.3 m E
E
b
T
  = = . (5)
2.4 The same geometric relationships that lead to equation (2) allow one to conclude that the power of solar
radiation per unit area of the Earth's surface is found as
2
2
2
350 W/m
4 4
W R W
w
R



= = = . (6)
Various atmosphere models
2.5 We introduce the following notation:
1 t (or 1 T in the Kelvin scale) – the emperature of the Earth's surface and the
lower layer of the atmosphere immediately adjacent to it; 2 t (or 2 T ) – the
temperature of the upper layer of the atmosphere; w – the flux density of solar
radiation, i.e. the energy incident on a unit area of the Earth's surface per unit
time (or irradiated); 1 R – the thermal radiation power per unit area of the Earth;
2 R – the thermal radiation power per unit area of the atmospheric layer; the
radiation fluxes of this layer towards the Earth and into outer space are equal.
The energy balance equation for a unit area of the Earth's surface has the
following form
1 2 R R w = + . (7)
A similar equation for the upper layer of the atmosphere gives rise to
XVIII International Zhautykov Olympiad/Theoretical Competition с. 6/15
2 1 2R KR = . (8)
Using the laws of thermal radiation, energy fluxes can be expressed in terms of the temperatures of
the radiating surfaces as follows
4
1 1 R T  = , (9)
4
2 2 R K T  = . (10)
Therefore, taking into account formulas (2) and (3), we obtain from expressions (7)-(10) the
temperature of the Earth's surface in the form
0
1
4 1
2
T
T
K
=
−
. (11)
Maximum greenhouse effect
2.6 For the maximum greenhouse effect 1 = K , therefore, it is obtained for this model
4
1 0 2 333.3 К 60.2 С T T = = =  . (12)
Thus, the maximum increase in temperature due to the greenhouse effect on the "black earth" is
equal to
1 53.0 С t  =  . (13)
Water greenhouse effect
2.7 The Earth as a black body irradiates the energy
( ) 0 0 1
0
, W r T d  

=  , (14)
The absorbed energy can be expressed in terms of the spectral absorption coefficient and the spectral
density of the Earth's radiation as follows
( ) ( ) 0 1
0
, A W k r T d   

=  , (15)
then the total absorption coefficient of terrestrial radiation by theupper layer of the atmosphere is calculated
by the formula
( ) ( )
( )
( ) ( )
( )
( ) ( )
4
0 1 1 1
0 0
1
4 0 0
0 1 1 1
0 0
, ,
,
, ,
A
k r T d T k T d
W
K k T d
W
r T d T T d
       
   
     
 

 
= = = =
 

 
. (16)
2.8 Since in the indicated wavelength range from 5.0 to 8.0 μm the water vapor absorbs all incident
radiation, the total absorption coefficient is equal to the fraction of radiation energy falling into this interval.
This fraction of energy is evalulated as the areas under the graphs given in the problem introduction.
The calculations carried out for 4 points gives the following values for the absorption coefficients
1 0 0 С: 0.092 t K =  = , (17)
XVIII International Zhautykov Olympiad/Theoretical Competition с. 7/15
1 50 50 С: 0.158 t K =  = . (18)
2.9 It follows from the proposed relationship ( ) ( ) 1 0 1 1 t K t K  + = that
0 0.092 K = , (19)
1 50
50 0
1
1 0.014 K
K
t K
 −  
= − =  
 
. (20)
2.10 At the temperature of C t  = 4 , 5 1 , the absorption coefficient of the upper layer of the atmosphere is
found as
( ) ( ) 0 0 0 1 0.101 K t K t  = + = . (21)
Since the absorption coefficient is rather small, formula (12) for the steady temperature can be
simplified to






+ 
−
=
8
1
2
1
0
4
0
1
K
T
K
T
T , (22)
and the rise in temperature is obrained as
( ) 0
1 0 3.55 C
8
K t
t T  = =  . (23)
2.11 To accurately answer the question, it is necessary to solve the nonlinear equation
4 1
0
1
2
) (
1
T K
T
T
−
= . (24)
However, the relative change in the absolute temperature is small, so we represent the sought
temperature in the form
t T T  + = 0 1 , (25)
from which we find the value of the temperature change in view of the condition 0 t T 
( ) 0 0
0
1
0 0
0 0
1
8 3.73 C
1 1
8 8
K t
T
t
t
K K
T T

 
+

 = =  
− −
. (26)
Amplification of the greenhouse effect by carbon dioxide
2.12 Let us calculate the absorption coefficient due to carbon dioxide. To make estimates, we can assume
that the air temperature differs slightly from C  0 . To do this, we take into account that: 1) in the range from
2.5 to 3.0 μm, the energy of the thermal radiation of the Earth is negligible; 2) in the range from 6.5 µm to
7.0 µm all radiation is absorbed by water vapor; 3) in the range from 16 µm to 18 µm, the fraction of
radiation energy is equal to 0.08  = (calculated according to the graph for C t  = 0 ) . Therefore, the
additional absorption coefficient due to the presence of carbon dioxide is found as
2 0.04 K = . (27)
Since the absorption of carbon dioxide and water vapor lie in different spectral ranges, the total
absorption coefficient is equal to the sum of the absorption coefficients of water and carbon dioxide. Then
the change in the steady-state surface temperature (taking into account absorption by carbon dioxide)
increases by the value
2
1 0 1.4 C
8
K
t T  =   . (28)
2.13 To calculate the absorption coefficient with increased concentration, we use the obvious reasoning: in
the presence of several absorbing layers, the total transmission is equal to the product of the transmission
coefficients of individual layers, therefore
( )2
0 1 1 1 k k − = − . (29)
XVIII International Zhautykov Olympiad/Theoretical Competition с. 8/15
Hence it follows that if the concentration is doubled, the spectral absorption coefficient is expected to
increase from 0.50 to
2
1 0 0 2 0.75 k k k = − = . (30)
Therefore, the total absorption coefficient becomes equal to
2 0.06 K k =  = . (31)
i.e. increases by 2 0.02 K  = . Therefore, the additional rise in temperature is finally obtained as
2
1 0 0.7 C
8
K
t T

  =   . (32)
Content Points
2.1
Formula (1): maxS
S
b
T
 =
0.1
0.2
Numerical value in formula (1): max 0.446 S m   = 0.1
2.2
Formula (2): 2 4
0
2
4 R T R W     =  0.4
1.0
Formula (3): 4
0
4
W
T

=
0.2
Numerical value in formula (3): 0 280.3 К T = 0.2
Numerical value in formula (4): 0 7.15 С t =  0.2
2.3
Formula (5): maxE
E
b
T
 =
0.1
0.2
Numerical value in formula (5): max 10,3 m E   = 0.1
2.4
Formula (6):
4
W
w=
0.1
0.2
Numerical value in formula (6): 2
350 W/m w = 0.1
2.5
Formula (7): 1 2 R R w = + 0.2
1.2
Formula (8): 2 1 2R KR = 0.2
Formula (9): 4
1 1 R T  = 0.2
Formula (10): 4
2 2 R K T  = 0.2
Formula (11): 0
1
4 1
2
T
T
K
=
−
0.4
2.6
Direct use of 1 = K 0.1
0.5 Formula (12): 4
1 0 2 T T = 0.2
Numerical value in formula (13): 1 53.0 С t  =  0.2
2.7
Formula (14): ( ) 0 0 1
0
, W r T d  

= 
0.2
0.8 Formula (15): ( ) ( ) 0 1
0
, A W k r T d   

= 
0.2
Formula (16): ( ) ( ) 1
0
, K k T d    

= 
0.4
2.8
Numerical value in (17): 1 0 0 С: 0.092 t K =  = 0.6
1.2
Numerical value in (18): 1 50 50 С: 0.158 t K =  = 0.6
XVIII International Zhautykov Olympiad/Theoretical Competition с. 9/15
2.9
Numerical value in (19): 0 0.092 K = 0.2
0.4
Numerical value in (20): 1
0.031K  −
= 0.2
2.10
Numerical value in (21): ( ) 0 0.0757 K t = 0.4
0.8
Numerical value in (23): 1 2.65 C t  =  0.4
2.11
Formula (24):
4 1
0
1
2
) (
1
T K
T
T
−
=
0.2
1.0
Formula (25): t T T  + = 0 1 at 0 t T  0.2
Formula (26):
( ) 0 0
0
1
0 0
0 0
1
8
1 1
8 8
K t
T
t
t
K K
T T

 
+

 = =
− −
0.4
Numerical value in formula (26): 2.84 C t    0.2
2.12
Numerical value in (27): 2 0.04 K = 0.5
1.0
Numerical value in (28): 1 1.4 C t    0.5
2.13
Formula (29): ( )2
0 1 1 1 k k − = − 0.5
1.5
Formula (30): 2
1 0 0 2 k k k = − 0.2
Numerical value in formula (31): 2 0.06 K k =  = 0.4
Numerical value in (32): 1 0.7 C t    0.4
Total 10.0
