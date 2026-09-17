---
id: izho-2019-t-q1
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2019-t-q1
solution_type: official
source_document: solution-document-izho-2019-t-s
source_pdf: cache/phoxiv/izho/2019_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2019_T_S.pdf."
---

Problem 1 (10.0 points)
Problem 1A (4.0 points)
Since the thread is inextensible and under stress, then the speed of the puck is always
perpendicular to the thread. Therefore, the tension force of the thread does not perform any work on
the puck and its speed remains constant by modulus
𝑣 = 𝑐𝑜𝑛𝑠𝑡. (1)
The puck moves along its trajectory with the curvature radius equal to the length 𝑙 of the
unwound thread, therefore, the condition for the thread to be torn up is found from Newton's second
law as
𝑇 = 𝑚
𝑣2
𝑙
. (2)
The length of the thread changes as a result of winding on the cylinder according to
𝑑𝑙 = −𝑅𝑑𝛼, (3)
where
𝑑𝛼 = 𝜔𝑑𝑡, (4)
and the angular velocity of the thread rotation is obtained as follows
𝜔 =
𝑣
𝑙
. (5)
It follows from equations (3)-(5) that
𝑙𝑑𝑙 = −𝑅𝑣𝑑𝑡, (6)
and its integration entails
𝑙2
− 𝑙0
2
= −2𝑅𝑣𝑡. (7)
Substituting formula (1) into (7), the time moment sought is finally found as
𝑡 =
𝑙0
2−(
𝑚𝑣2
𝑇
)
2
2𝑅𝑣
=
𝑙0
2𝑇2−𝑚2𝑣4
2𝑅𝑣𝑇2
. (8)
Content Points
The puck speed remains unchanged 1
𝑇 = 𝑚
𝑣2
𝑙
0.5
𝑙𝑑𝑙 = −𝑅𝑣𝑑𝑡 1
𝑙2
− 𝑙0
2
= −2𝑅𝑣𝑡 0.5
𝑡 =
𝑙0
2
𝑇2
− 𝑚2
𝑣4
2𝑅𝑣𝑇2
1
Total 4.0
Problem 1В (3.0 points)
Possible solution. The power of the heat transfer from the body to the air is proportional to
the difference between the body T and the air x T temperatures with the factor  , i.e.
( ) x P T T  = − , (1)
as a result, the body with the heat capacity С cools down by the temperature dT over time period
dt , which obeys the heat balance equation
CdT Pdt =− . (2)
Equations (1) and (2) with the initial condition 0 T T = have a solution
0 ( ) ( ) t
x x T t T T T e  −
= + − , (3)
where /C   = is a constant.
V International Zhautykov Olympiad/Theoretical Competition Page 2/12
Let the body be cooled from the temperature 0 T to the temperature 1 T for a certain time
interval, then it follows from (3) that
( ) ( ) 1 0 0 x T T T T  − = − , (4)
where  is a constant.
Over the following same time interval, this difference will also change in  times
( ) ( ) 2 1 1 x T T T T  − = − . (5)
Equations (4) and (5) result in the relation
( )
( )
( )
( )
0 1
1 0 2 0
x x T T T T
T T T T
− −
=
− −
, (6)
which has the following solution
( )
2
0 2 1
0 2 1 2
x
T T T
T
T T T
−
=
+ −
. (7)
It is obtained from the graph provided: the initial temperature 0 373K T = , in 10 minutes the
temperature is equal to 1 337 T K = , and in 20 minutes it reaches the value of 2 319 T K = .
Substituting these data into equation (7), the air temperature is finally calculated as
301 28 x T K C = =  . (8)
Content Points
Correct method for determining the air temperature 1.5
The air temperature lies in the interval 27.5 28.5 C x T = −  1.5
The air temperature lies in the interval 27.0 29.0 C x T = −  (1.0)
The air temperature lies in the interval 26.5 29.5 C x T = −  (0.5)
Out of the above intervals 0
Total 3.0
Problem 1С (3.0 points)
Let 𝑅 be the active component of the load (the real part of the impedance), and 𝑋 be the
reactive component of the entire circuit (the imaginary part of the total impedance). Then the
current amplitude is found as
𝐼 =
𝑈
√(𝑟+𝑅)2+𝑋2
.
The average thermal power in the load reads as
𝑃 =
1
2
𝐼2
𝑅 =
𝑈2𝑅
2[(𝑟+𝑅)2+𝑋2]
.
It is seen that the maximum power is achieved at X = 0, i.e. there should be no phase shift in
the circuit. The remaining expression has a maximum at R = r.
The phase shift would be zero if a coil was connected in series with the
capacitor such that
1
𝜔𝐶
= 𝜔𝐿, and, thus, 𝐿 =
1
𝜔2𝐶
= 1.00 ∙ 10−2
𝐻𝑛.
It turns out that the simplest load must consist of the resistor with the resistance
of 2019 Ohms and the coil with the inductance of 1.00 ∙ 10−2
𝐻𝑛.
The maximum power is obtained as
𝑃 𝑚𝑎𝑥 =
1
2
𝑈2
4𝑟
=
𝑈2
8𝑟
= 13.9 mW.
Content Points
The phase shift is zero 1
V International Zhautykov Olympiad/Theoretical Competition Page 3/12
Without justification (0,5)
The inductance of the coil 𝐿 =
1
𝜔2𝐶
0,7
Correct numerical value 𝐿 = 10−2
Hn 0,3
Maximum power at R = r 0,5
The maximum power itself 𝑃 𝑚𝑎𝑥 =
𝑈2
8𝑟
0,3
Correct numerical value 𝑃 𝑚𝑎𝑥 = 14 mW 0,2
Total 3,0
