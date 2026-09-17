---
id: solution-document-apho-2018-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2018/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2018-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2018/T3_S.pdf."
---

Page 1
Theory Q3
Thermoelectric effects and theirapplication in
thermoelectric generator and refrigerator(10 points)
Solution and Marking scheme
A. Heat transfer and thermoelectric generator
A1. Heat transfer in a homogeneous conducting bar
A1.1
0.75 pt
Consider heat transfer in the segment dx of the bar in the steady state. Equation for
the balance of the energy exchange through the cross-sectional area is written as
        2
2
2
.
dT x dT x dx dT x d T x dx
kS I kS kS kS dx
dx S dx dx dx


      
Hence
  2 2
2
d T x I
kS
dx S

  (A1)
Integration of (A1) gives
  2
1 2
dT x I
x C
dx kS

   , (A2)
 
2
2
1 2 2
.
2
I
T x x C x C
kS

    (A3)
Constants 1 2 , C C are derived from the boundary conditions
1 2 1 0 x T T C T      , (A4)
2 2 1
2 1 2
1
.
2
T T L
x L T T C I
L S k
 
      (A5)
Equation for the temperature distribution in the bar is
 
2 2
2 1 2
1 2 2
.
2 2
T T LI I
T x T x x
kS L kS
    
     
 
(A6)
0.25
0.25
0.25
A1.2
1.0 pt
Using (A2) –(A5) we obtain the equation for the heat current at x
 
 
 
2
1 2 ,
2
dT x kS I L
q x kS T T x
dx L S
  
       
 
(A7)
at 0, x  and x L 
     
2 2
1 2 1 2 0 ,
2 2
kS LI RI
q x T T K T T
L S

       (A8)
     
2 2
1 2 1 2 .
2 2
kS LI RI
q x L T T K T T
L S

       (A9)
Here ,
kS
K
L
 .
L
R
S


0.5
0.25
0.25
A2. Relation between Peltier and Seebeck Coefficients
Thermocouple consists of two subsystems: a) the conducting electron gas that performs an ideal
themodynamic cycle; b) Nuclei and bounded electrons of the bar crystal that oscillate aroundPage 2
equillibrium positions at finite temperature and participate in heat conduction process. If the
resistance of the thermocouple is neglected, these two subsystems may be considered as
noninteracting, the electron gas exchanges heat only with the heat source at T1 and the heat sink at
T2 , performing the ideal Carnot cycle.
A2.1
0.25 pt
Electron gas receives heat from heat source due to the Peltier effect
1 1 q I   (A10)
0.25
A2.2.
0.25 pt
The heat amount transferred to the heat sink due to the Peltier effect
2 2 q I   (A11)
0.25
A2.3.
0.5 pt
Power delivered by the electron gas due to the Seebeck emf is
  1 2 P I T T I      (A12)
0.5
A2.4
0.5 pt
The efficiency of the ideal Carnot cycle applied to the thermocouple can be
written as
1
P
q
  , 1 2
1
T T
T


 . (A13)
Thus
  1 2 1 2
1 1
T T T T
T


 
 (A14)
Comparing these equations, one has 1 1 T    .
This is the Peltier coefficient at the first junction contacting with the heat source.
Generally, one has . T   
0.25
0.25
A3. Thermoelectric generator
A.3.1.
0.5 pt
Power received by the thermocouple from the heat source (see also (A8)) is
  2
1 1 2 1
1
.
2
q K T T TI I R      (A15)
Here is the Seebeck coefficient of the thermocouple and
A A B B
A B
k S k S
K K K
L L
    , (A16)
A B
A B
A B
L L
R R R
S S
 
    , (A17)
are its thermal conductance and internal resistance.
The heat sink receives a power (see also (A9))
  2
2 1 2 2
1
.
2
q K T T T I I R      (A.18)
0.25
0.25
A3.2.
0.75 pt
The efficiency of the thermoelectric generator is
   
2
2
1 2 1 1 2 1 1
2
.
/ 2 1
2
L L P I R m
K T T q K T T T I I R T
I R IR

 
  
   
 
(A19)
Here we use L R mR  . The electrical current in the circuit is
0.25Page 3
   
 
1 2 1 2
.
1 L
T T T T
I
R R m R
   
 
 
(A20)
Substituting (A20) into (A19) we obtain the expession for the efficiency
 
 
 
1 2
2
1 2
1 2
.
1
1
2
m T T
KR m T T
T m




 
  
(A21)
0.25
0.25
A3.3.
0.25
Replacing the figure of merit
2
Z
KR

 (A22)
and 1 2
1
c
T T
T


 the efficiency of the ideal Carnot cycle in (A21), one has
 
 
2
1
.
1 1
1
2
c
c
m
m
m
ZT
 



  
(A23)
From (A23) one sees that larger Z leads to the larger efficiency of the
corresponding thermoelectric generator. The condition 1 1 ZT  can be used for
material application in thermoelectric generators.
0.25
A4. The maximum efficiency
A4.1
0.25 pt
When L R R  or m=1, the power consumed on the load is maximum. The
efficiency in that case is
1 1
1 2
.
3 4
2
P
T T
T T
Z



  
    
(A24) 0.25
A4.2.
0.75 pt
Equation (A23) may be rewritten as
    2
1 1 1/ 2
m
a m b m
 
   
, (A25)
where
  1 2
1
a
Z T T


, 1
1 2
T
b
T T


.
Equation 0
d
dm

 has the solution
2 1
1
2
b
M
a

  or
  1 2
1 .
2
T T
M Z

  (A26)
0.25
0.25
0.25
A4.3.
0.25 pt
Using (A25), (A26) we obtain the maximum efficiency of the thermoelectric
generator
  1 2
max
1 2
1
1 M T T
T T
M
T

 

 
  
 
(A27)
(Correct expression containing either , M Z or both is also accepted)
0.25Page 4
A5. The maximum figure of merit
A5.1
0.5
According to (A22) Z takes the maximum value m Z Z  when KR y  is
smallest. Denoting  , A B
A A B B
A B
k S k S y
S S
   
    
 
A
B
S
x
S

one has the equation  A
A B B k x k y
x


 
    
 
.
It is easily to show the function y has the minimum at x=xm, where
A B
m
B A
k
x
k


 or
1/2
A A B
B B A
S k
S k


 
 
 
.
(A28)
0.25
0.25
A5.2
0.25 pt
If the ratio of cross-sectional areas satisfies (A28) then
   
2 1/2 1/2
m A A B B y k k      
 
and the maximum figure of merit of the
thermocouple is
   
2
2 1/2 1/2
m
A A B B
Z
k k

 

  
 
.
(A.29)
0.25
A6. The optimal efficiency
A6.1.
0.5 pt
The thermocouple with two bars made from material A and B has the following
the figure of merit
   
2 2
3 1
2 1/2 1/2
3.15 10 K
4
m
A A
A A B B
Z
k k k
 
  
 
   
  
 
. (A.30)
The optimal efficiency of the thermocouple AB when T1= 423K, T2 = 303K has
the following value
1 2
1 1 2
3
120
5.84%
3 1 3 423 303
4 4
3.2 10 2 2
opt
m
T T
T T
Z




  
  
 

. (A.31)
The corresponding ideal Carnot efficiency for that case is
1 2
1
120
28.4%
423
C
T T
T


   (A32)
/ 0.21 opt C    .
0.15
0.25
0.1
A6.2
0.25 pt
The maximum efficiency of the thermoelectric generator designed from AB
materials is
  1 2 3
1 1 3.2 10 363 1.46
2
m
T T
M Z  
      
.
( A.33)
0.25
 
max
2
1
1
6.0% C
M
T
M
T
 

 
 
  
 Page 5
B. Thermoelectric refrigerator
B1. The cooling power and the maximum temperature difference
B1.1
0.25pt
For cooling purpose we choose the current direction so that heat is absorbed at
upper junction (temperature T1) due to Peltier effect and transferred to the A & B
bars. Using (A.9) one gets cooling power taken out from heat source at T1
 
2
1 1 2
2
C
RI
q T I K T T      (B.1)
where , K R are thermal conductance and internal resistance of thermocouple.
0.25
B1.2.
0.5
Condition for the maximum cooling power CM q is founded from 0 C dq
dI
 , one
has
1
, q
T
I
R

 (B2)
 
2
1
2 1 .
2
CM
T
q K T T
R

  
.
(B3)
The maximum temperature depression is derived from the condition 0 CM q  ,
which gives
2 2 2
1min 1min
max 2 1min .
2 2
T ZT
T T T
KR

     (B4)
Here
2
Z
KR

 is the figure of merit of the thermocouple.
0.25
0.25
B2. The working current
B2.1
0.25pt
Thermocouple AB with 3 1
3.15 10 K m Z  
  is used for a refrigerator. The
lowest cooling temperature T1min is found from the same equation (B4)
2
1min 1min 2
2 2
0
m m
T T T
Z Z
  
  1min 2
1
1 2 1 m
m
T Z T
Z
   . (B5)
Putting 2 300K T  and 3 1
3.15 10 K m Z  
  in (B.5) we obtain
2
1min 2.22 10 K. T   (B.6)
0.1
0.15
B2.2.
0.5
Putting the value of the internal resistance 3 2
4.0 10 A B B
A B B
L L L
R
S S S
   
     
in (B2), one gets the working current
4
1min
W 3
4.2 10 221.5
A 23.3A
4 10
T
I
R
 

 
  

(B7)
0.25
0.25Page 6
B3. The coefficient of performance
B3.1
0.5pt
According to the energy conservation law, the power supplied by the electrical
source P equals to the Joule heat plus Peltier’s heat taken away in thermocouple
per unit of time:
2
2 1 ( ) P T T I RI     . (B.8)
The equation for Coefficient of Performance (COP) is
 
2
1 2 1
2
2 1
2
( )
C
RI
TI K T T
q
P T T I RI



  
 
 
(B9)
0.25
0.25
B3.2.
0.25
Electrical current I corresponds to the maximum of the COP is found from the
equation 0
d
dI

 . (B9) may be rewritten in convenience form
   
 
1 2 2 1
2 1
2 1
2 2 ( )
T T I K T T
T T RI I



  
  
 
. (B10)
The equation 0
d
dI

 leads to
     
2 2
1 2 2 1 2 1 4 2 0 R T T I K T T RI K T T          ,
 
 
2 2 1 2
2 1
2
0
M M
K T T I K
I T T
T RT 

    , (B.11)
with
  2 1
T .
2
M
T T 
 (B.12)
Solution of (B.11) is
 
  2 1
1 T 1 M
M
K T T
I Z
T



   . (B.13)
(Taking into account that
2
Z
KR

 , (B.13) can be written in other form
 
 
2 1
1 T 1 M
T T
I
R Z

 

 
) (B.14)
0.25
B3.3.
0.25
Substituting (B.14) into (B.9) one has
 
1 2 1
max
2 1
1 /
.
1 1
M
M
T ZT T T
T T ZT

      
      
(B.15)
0.25
