---
id: solution-document-ipho-2010-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2010/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2010-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2010/T2_S.pdf."
---

41st International Physics Olympiad, Croatia – Theoretical competition, July 19th, 2010 1/4
Solution - Chimney physics
This problem was inspired and posed by using the following two references:
 W.W. Christie, Chimney design and theory, D. Van Nostrand Company, New York, 1902.
 J. Schlaich, R. Bergermann, W. Schiel, G. Weinrebe, Design of Commercial Solar Updraft
Tower Systems — Utilization of Solar Induced Convective Flows for Power Generation, Journal
of Solar Energy Engineering 127, 117 (2005).
Solution of Task 1
a) What is the minimal height of the chimney needed in order that the chimney functions
efficiently, so that it can release all of the produced gas in the atmosphere?
Let ) (z p denote the pressure of air at height z; then, according to one of the assumptions
gz p z p Air    ) 0 ( ) ( , where ) 0 ( p is the atmospheric pressure at zero altitude.
Throughout the chimney the Bernoulli law applies, that is, we can write
. ) ( ) (
2
1 2
const z p gz z Smoke Smoke Smoke       ,
(1)
where ) (z pSmoke is the pressure of smoke at height z, Smoke  is its density, and ) (z v denotes the
velocity of smoke; here we have used the assumption that the density of smoke does not vary
throughout the chimney. Now we apply this equation at two points, (i) in the furnace, that is at point
   z , where  is a negligibly small positive number, and (ii) at the top of the chimney where h z 
to obtain:
) ( ) ( ) (
2
1 2
        Smoke Smoke Smoke Smoke p h p gh h
(2)
On the right hand side we have used the assumption that the velocity of gases in the furnace is
negligible (and also 0     g Smoke ).
We are interested in the minimal height at which the chimney will operate. The pressure of smoke at
the top of the chimney has to be equal or larger than the pressure of air at altitudeh ; for minimal
height of the chimney we have ) ( ) ( h p h pSmoke  . In the furnace we can use ) 0 ( ) ( p pSmoke   . The
Bernoulli law applied in the furnace and at the top of the chimney [Eq. (2)] now reads
) 0 ( ) ( ) (
2
1 2
p h p gh h Smoke Smoke       .
(3)
From this we get
 


 


  1 2 ) (
Smoke
Air
gh h


 .
(4)
The chimney will be efficient if all of its products are released in the atmosphere, i.e.,41st International Physics Olympiad, Croatia – Theoretical competition, July 19th, 2010 2/4
A
B
h  ) (  ,
(5)
from which we have
1
1
2
1
2
2


Smoke
Air g A
B
h


.
(6)
We can treat the smoke in the furnace as an ideal gas (which is at atmospheric pressure ) 0 ( p and
temperature Smoke T ). If the air was at the same temperature and pressure it would have the same
density according to our assumptions. We can use this to relate the ratio Smoke Air   / to Air Smoke T T /
that is,
Air
Smoke
Smoke
Air
T
T



, and finally
(7)
T
T
g A
B
T T
T
g A
B
h Air
Air Smoke
Air




2
1
2
1
2
2
2
2
.
(8)
For minimal height of the chimney we use the equality sign.
b) How high should the chimney in warm regions be?
m h
T T
T
T T
T
h
h
Smoke
Smoke
145 ) 30 ( ;
) 30 (
) 30 (
) 30 (
) 30 (
) 30 (
) 30 (

 




.
(9)
c) How does the velocity of the gases vary along the height of the chimney?
The velocity is constant,
Air Air
Smoke
Smoke
Air
T
T
gh
T
T
gh gh

  


 


   


 


  2 1 2 1 2


 .
(10)
This can be seen from the equation of continuity . const Av  ( Smoke  is constant). It has a sudden
jump from approximately zero velocity to this constant value when the gases enter the chimney from
the furnace. In fact, since the chimney operates at minimal height this constant is equal to B, that is
A B v /  .
d) At some height z, from the Bernoulli equation one gets
gz gh p z p Smoke Smoke Air smoke        ) ( ) 0 ( ) ( . (11)
Thus the pressure of smoke suddenly changes as it enters the chimney from the furnace and acquires
velocity.41st International Physics Olympiad, Croatia – Theoretical competition, July 19th, 2010 3/4
Solution of Task 2
a) The kinetic energy of the hot air released in a time interval t  is
Atm
Hot Hot kin
T
T
gh t Av v t Av E

      2
) (
2
1
,
(12)
Where the index “Hot” refer to the hot air heated by the Sun. If we denote the mass of the air that
exits the chimney in unit time with Hot Av w   , then the power which corresponds to kinetic
energy above is
Air
kin
T
T
wgh P

 .
(13)
This is the maximal power that can be obtained from the kinetic energy of the gas flow.
The Sun power used to heat the air is
T wc GS PSun    . (14)
The efficiency is evidently
.
Atm Sun
kin
cT
gh
P
P
  
(15)
b) The change is apparently linear.
Solution of Task 3
a) The efficiency is
% 64 . 0 0064 . 0   
Atm cT
gh
 .
(16)
b) The power is
45 ) 2 / ( 2
     D G GS P kW. (17)
c) If there are 8 sunny hours per day we get 360kWh.
Solution of Task 4
The result can be obtained by expressing the mass flow of air was
Hot
Air
Hot
T
T
gh A Av w  

  2
(18)
T c
GS
w


(19)
which yields
1 . 9 )
2
( 3 / 1
2 2 2
2 2
  
gh c A
T S G
T
Hot
Atm

K.
(20)41st International Physics Olympiad, Croatia – Theoretical competition, July 19th, 2010 4/4
From this we get
760  w kg/s. (21)
