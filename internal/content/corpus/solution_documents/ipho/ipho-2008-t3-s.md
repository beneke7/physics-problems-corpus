---
id: solution-document-ipho-2008-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2008/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2008-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2008/T3_S.pdf."
---

39th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
Solution
1. For an altitude change , the atmospheric pressure change is : dz
dp gdz ρ = − (1)
where is the acceleration of gravity, considered constant, g ρ is the specific mass of
air, which is considered as an ideal gas:
m p
V RT
μ
ρ = =
Put this expression in (1) :
dp g
dz
p RT
μ
= −
1.1. If the air temperature is uniform and equals , then 0 T
0
dp g
dz
p RT
μ
= −
After integration, we have :
( ) ( ) 0
0 e
g
z
RT
p z p
μ
−
= (2)
1.2. If
( ) ( ) 0 T z T z = −Λ (3)
then
( ) 0
dp g
dz
p R T z
μ
= −
⎡ ⎤ −Λ ⎣ ⎦
(4)
1.2.1. Knowing that :
( )
( )
( )
( ) ( )
0 1 1
0
0 0
ln
d T z dz
T z
T z T z
⎡ ⎤ −Λ ⎣ ⎦ = − = − −Λ
−Λ Λ −Λ Λ ∫ ∫
by integrating both members of (4), we obtain :
( )
( )
( )
( ) ( )
0
1
0 0
ln ln ln
p z T z g g
p R T R T
μ μ ⎛ ⎞ −Λ Λ
= = ⎜ ⎜ Λ Λ ⎝ ⎠ 0
z
− ⎟ ⎟
( ) ( )
( )
0 1
0
g
R z
p z p
T
μ
Λ ⎛ ⎞ Λ
= − ⎜ ⎜
⎝ ⎠
⎟ ⎟
(5)
139th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
1.2.2. The free convection occurs if:
( )
( )
1
0
z ρ
ρ
>
The ratio of specific masses can be expressed as follows:
( )
( )
( )
( )
( )
( ) ( )
1
0
1
0 0 0
g
R z p z T z
p T z T
μ
ρ
ρ
−
Λ ⎛ ⎞ Λ
= = − ⎜ ⎟ ⎜ ⎟
⎝ ⎠
The last term is larger than unity if its exponent is negative:
1 0
g
R
μ
− <
Λ
Then :
0 029 9 81 K
0 034
8 31 m
. .
.
.
g
R
μ ×
Λ > = =
2. In vertical motion, the pressure of the parcel always equals that of the surrounding air,
the latter depends on the altitude. The parcel temperature parcel T depends on the
pressure.
2.1. We can write:
parcel parcel dT dT dp
dz dp dz
=
p is simultaneously the pressure of air in the parcel and that of the surrounding air.
Expression for
parcel dT
dp
By using the equation for adiabatic processes and equation of state,
we can deduce the equation giving the change of pressure and temperature in a
quasi-equilibrium adiabatic process of an air parcel:
const pVγ
=
1
parcel const T p
γ
γ
−
= (6)
239th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
where
p
V
c
c
γ = is the ratio of isobaric and isochoric thermal capacities of air. By
logarithmic differentiation of the two members of (6), we have:
parcel
parcel
1
0
dT dp
T p
γ
γ
−
+ =
Or
parcel parcel 1 dT T
dp p
γ
γ
−
= (7)
Note: we can use the first law of thermodynamic to calculate the heat received by the
parcel in an elementary process: parcel V
m
dQ c dT pdV
μ
= + , this heat equals zero in an
adiabatic process. Furthermore, using the equation of state for air in the parcel
parcel
m
pV RT
μ
= we can derive (6)
Expression for
dp
dz
From (1) we can deduce:
dp pg
g
dz RT
μ
ρ = − = −
where is the temperature of the surrounding air. T
On the basis of these two expressions, we derive the expression for : parcel / dT dz
parcel parcel 1 dT T g
G
dz R T
γ μ
γ
−
= − = − (8)
In general, is not a constant. G
2.2.
2.2.1. If at any altitude, parcel T T = , then instead of in (8), we have : G
1
const
g
R
γ μ
γ
−
Γ = = (9)
or
339th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
p
g
c
μ
Γ = (9’)
2.2.2. Numerical value:
2 1 4 10 029 9 81 K K
0 00978 10
1 4 8 31 m m
. . .
.
. .
− − ×
Γ = = ≈
2.2.3. Thus, the expression for the temperature at the altitude in this special
atmosphere (called adiabatic atmosphere) is :
z
( ) ( ) 0 T z T z = −Γ (10)
2.3. Search for the expression of ( ) parcel T z
Substitute in (7) by its expression given in (3), we have: T
( )
parcel
parcel
1
0
dT g dz
T R T
γ μ
γ
−
= −
z −Λ
Integration gives:
( )
( )
( )
( )
parcel
parcel
0 1 1
0 0
ln ln
T z T z g
T R T
− γ μ
γ
Λ − ⎛ ⎞
= − − ⎜ ⎟
Λ ⎝ ⎠
Finally, we obtain:
( ) ( )
( )
( ) parcel parcel
0
0
0
T z
T z T
T
Γ
Λ ⎛ ⎞ −Λ
= ⎜ ⎟ ⎜ ⎟
⎝ ⎠
(11)
2.4.
From (11) we obtain
( ) ( )
( ) parcel parcel 0 1
0
z
T z T
T
Γ
Λ ⎛ ⎞ Λ
= − ⎜ ⎟ ⎜ ⎟
⎝ ⎠
If ( ) 0 z T Λ << , then by putting
( ) 0 T
x
z
−
=
Λ
, we obtain
( ) ( )
( )
( ) ( )
( )
( )
( )
0
parcel parcel
0
parcel parcel parcel
1
0 1
0 0 1
0
e
z
x T
z
T
T z T
x
z
T T T
T
Γ
−
Γ
−
⎛ ⎞ ⎛ ⎞
= + ⎜ ⎟ ⎜ ⎟ ⎜ ⎟ ⎝ ⎠ ⎝ ⎠
⎛ ⎞ Γ
≈ ≈ − ≈ ⎜ ⎟ ⎜ ⎟
⎝ ⎠
0 z −Γ
439th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
hence,
( ) ( ) parcel parcel 0 T z T ≈ z −Γ (12)
3.Atmospheric stability
In order to know the stability of atmosphere, we can study the stability of the
equilibrium of an air parcel in this atmosphere.
At the altitude , where 0 z ( ) ( ) parcel 0 0 T z T z = , the air parcel is in equilibrium.
Indeed, in this case the specific mass ρ of air in the parcel equals ' ρ - that of the
surrounding air in the atmosphere. Therefore, the buoyant force of the surrounding air on
the parcel equals the weight of the parcel. The resultant of these two forces is zero.
Remember that the temperature of the air parcel ( ) parcel T z is given by (7), in which
we can assume approximately G = Γ at any altitude near z 0 z z = .
Now, consider the stability of the air parcel equilibrium:
Suppose that the air parcel is lifted into a higher position, at the altitude 0 z d +
(with d>0), ( ) ( ) parcel 0 parcel 0 T z d T z + = −Γd and ( ) ( ) 0 0 T z d T z d + = −Λ .
• In the case the atmosphere has temperature lapse rate , we have Λ > Γ
( ) ( ) parcel 0 0 T z d T z d + > + , then ' ρ ρ < . The buoyant force is then larger than the
air parcel weight, their resultant is oriented upward and tends to push the parcel away
from the equilibrium position.
Conversely, if the air parcel is lowered to the altitude (d>0), 0 z d −
( ) ( ) parcel 0 0 T z d T z d − < − and then ' ρ ρ > .
The buoyant force is then smaller than the air parcel weight; their resultant is oriented
downward and tends to push the parcel away from the equilibrium position (see
Figure 1)
So the equilibrium of the parcel is unstable, and we found that: An atmosphere with a
temperature lapse rate is unstable. Λ > Γ
• In an atmosphere with temperature lapse rate Λ < Γ, if the air parcel is lifted to a
higher position, at altitude 0 z d + (with d>0), ( ) ( ) parcel 0 0 T z d T z d + < + , then
539th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
' ρ ρ > . The buoyant force is then smaller than the air parcel weight, their resultant is
oriented downward and tends to push the parcel back to the equilibrium position.
Conversely, if the air parcel is lowered to altitude (d > 0), 0 z d −
( ) ( ) parcel 0 0 T z d T z d − > − and then ' ρ ρ < . The buoyant force is then larger than the
air parcel weight, their resultant is oriented upward and tends to push the parcel also back
to the equilibrium position (see Figure 2).
So the equilibrium of the parcel is stable, and we found that: An atmosphere with a
temperature lapse rate is stable. Λ < Γ
z
z0+d
z0
z0-d
parcel T T > ⇒ parcel ρ ρ < up↑
parcel T T < ⇒ parcel ρ ρ > down↓
unstable
0 ( ) 0 T z T
T Tparcel
Γ Λ
Λ > Γ
Figure 1
z
z0+d
z0
z0-d
parcel T T < ⇒ parcel ρ ρ > down ↓
parcel T T > ⇒ parcel ρ ρ < up↑
stable
0 ( ) 0 T z T
Tparcel T
Λ Γ
Λ < Γ
Figure 2
639th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
• In an atmosphere with lapse rate Λ = Γ, if the parcel is brought from equilibrium
position and put in any other position, it will stay there, the equilibrium is indifferent. An
atmosphere with a temperature lapse rateΛ = Γis neutral
3.2. In a stable atmosphere, withΛ < Γ, a parcel, which on ground has temperature
( ) parcel 0 T > ( ) 0 T and pressure ( ) 0 p equal to that of the atmosphere, can rise and
reach a maximal altitude , where h ( ) parcel T h = ( ) T h .
In vertical motion from the ground to the altitude , the air parcel realizes an
adiabatic quasi-static process, in which its temperature changes from
h
( ) parcel 0 T to
( ) ( ) parcel T h T = h . Using (11), we can write:
( )
( )
( )
( )
( )
( )
parcel parcel 0 0
1
0
0 1
0
T T h
T T h h
T
T
Γ
−
Λ ⎛ ⎞ Λ
− = = ⎜ ⎟ ⎜ ⎟ ⎛ ⎞ Λ ⎝ ⎠ − ⎜ ⎟ ⎜ ⎟
⎝ ⎠
( )
( ) ( )
1
1
parcel 1 0
0
h
T T
T
Γ
−
Λ
−
⎛ ⎞ Λ
− = × ⎜ ⎟ ⎜ ⎟
⎝ ⎠
0
( )
( ) ( ) - -
parcel 1 0
0
h
T T
T
Λ Λ
−
Λ Γ Λ Γ
Λ
− = × 0
( ) ( ) ( )
( ) ( ) ( )
- -
parcel
parcel
1
0 1 0 0
1
0 0 0
h T T T
T T T
Λ Λ
−
Λ Γ Λ Γ
Λ Γ
−
Λ−Γ Γ−Λ
⎡ ⎤
= − × ⎢ ⎥
Λ ⎢ ⎥ ⎣ ⎦
⎡ ⎤
= − ⎢ ⎥
Λ ⎢ ⎥ ⎣ ⎦
So that the maximal altitude has the following expression: h
( )
( ) ( )
( ) ( )
1
parcel
0 1
0
0
T
h T
T
Γ Γ−Λ
Λ
⎡ ⎤
⎛ ⎞ ⎢ ⎥
⎜ ⎟ ⎢ ⎥ = −
⎜ Λ ⎟ ⎢ ⎥ ⎜ ⎟
⎝ ⎠ ⎢ ⎥
⎣ ⎦
(13)
739th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
4.
Using data from the Table, we obtain the plot of versus T shown in Figure 3. z
0
100
200
300
20.0 20.5 21.0 21.5 22.0 22.5
D(20.6
o
C;142 m)
C(20.8
o
C; 119 m)
B(21.0
o
C; 96 m)
A( 22
o
C; 0 m)
Temperature [
o
C]
Altitude [m]
Figure 3
4.1. We can divide the atmosphere under 200m into three layers, corresponding to the
following altitudes:
1) 0 < < 96 m, z 3
1
21 5 20 1 K
15 4 10
91 m
. .
. − −
Λ = = × .
2) 96 m < < 119 m, , isothermal layer. z 2 0 Λ =
3) 119 m < < 215 m, z 3
22 20 1 K
0 02
215 119 m
.
.
−
Λ = − = −
−
.
In the layer 1), the parcel temperature can be calculated by using (11)
( ) parcel 96m 294 04 K 294.0 K . T = ≈ that is 21.0o
C
In the layer 2), the parcel temperature can be calculated by using its expression in
isothermal atmosphere ( ) ( )
( ) parcel parcel 0
0
exp
z
T z T
T
⎡ ⎤ Γ
= − ⎢ ⎥
⎢ ⎥ ⎣ ⎦
.
839th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
The altitude 96 m is used as origin, corresponding to 0 m. The altitude 119 m
corresponds to 23 m. We obtain the following value for parcel temperature:
( ) parcel 119 m 293 81 K . T = that is 20.8o
C
4.2. In the layer 3), starting from 119 m, by using (13) we find the maximal elevation
= 23 m, and the corresponding temperature 293.6 K (or 20.6 h o
C).
Finally, the mixing height is
119 + 23 = 142 m. H =
And
( ) parcel 142 m 293 6 K . T = that is 20.6o
C
From this relation, we can find ( ) parcel 119 m 293 82 K . T ≈ and . 23 m h =
Note: By using approximate expression (12) we can easily find ( ) parcel T z =294 K and
293.8 K at elevations 96 m and 119 m, respectively. At 119 m elevation, the difference
between parcel and surrounding air temperatures is 0.7 K (= 293.8 – 293.1), so that the
maximal distance the parcel will travel in the third layer is 0.7/( ) 3 Γ−Λ = 0.7/0.03 = 23 m.
5.
Consider a volume of atmosphere of Hanoi metropolitan area being a parallelepiped
with height , base sides L and W. The emission rate of CO gas by motorbikes from
7:00 am to 8:00 am
H
M = 800 000 × 5 × 12 /3600 = 13 300 g/s
The CO concentration in air is uniform at all points in the parallelepiped and denoted
by ( ) C t .
5.1. After an elementary interval of time , due to the emission of the motorbikes,
the mass of CO gas in the box increases by
dt
Mdt . The wind blows parallel to the short
sides W, bringing away an amount of CO gas with mass ( ) LHC t udt. The remaining
part raises the CO concentration by a quantity in all over the box. Therefore: dC
( ) Mdt LHC t udt LWHdC − =
or
939th International Physics Olympiad - Hanoi - Vietnam - 2008
Theoretical Problem No. 3 / Solution
( )
dC u M
C t
dt W LWH
+ = (14)
5.2. The general solution of (14) is :
( ) exp
ut M
C t K
W LH
⎛ ⎞
= − + ⎜ ⎟
⎝ ⎠ u
(15)
From the initial condition ( ) 0 C 0 = , we can deduce :
( ) 1 exp
M ut
C t
LHu W
⎡ ⎤ ⎛ ⎞
= − − ⎜ ⎟ ⎢
⎝ ⎠ ⎣ ⎦
⎥ (16)
5.3. Taking as origin of time the moment 7:00 am, then 8:00 am corresponds to
=3600 s. Putting the given data in (15), we obtain : t
( ) ( ) 3
3600 s 6 35 1 0 64 2 3 mg/m . . . C = × − =
10
