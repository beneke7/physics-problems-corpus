---
id: izho-2018-t-q1
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2018-t-q1
solution_type: official
source_document: solution-document-izho-2018-t-s
source_pdf: cache/phoxiv/izho/2018_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2018_T_S.pdf."
---

Problem 1 (10.0 points)
Problem A (3.0 points)
А1. When the test-tube is immersed to the depth x, it experiences the Archimedes'
force and the force of gravity. Therefore, the equation of Newton's second law for
the test-tube has the form
 g x h S mg ma    0 0  . (1)
Here m is the mass of the test-tube and  stands for the water density.
In the equilibrium position, the following condition holds
g h S mg 0 0   . (2)
It is thus immediately obtained that
x
h
g
a
0
  . (3)
This is the equation of harmonic oscillations with the period
g
h
T 0
2  . (4)
А2.1 When the test-tube is lowered to the depth x, its potential energy is
reduced by an amount
mgx U    1 . (5)
If the test-tube is lowered to the depth x, the water level in the vessel rises to a
height 𝑦 that satisfies the condition (the condition of constancy of the water
volume)
  x
S S
S
y y S S x S
0
0
0 0

    . (6)
Consequently, the water that was under the test tube rises above the original
water level in the vessel. The mass of this water is found as
x S m 0    , (7)
Its center of mass rises to a height
  x
S S
S
h x
S S
S
x h y x h hC
0
0
0
0
0 0
2
1
2
1
2
1

   


 



       . (8)
The change in the potential energy of water is derived as
.
2
1
0
0 0 2  


 



      x
S S
S
h xg S h mg U C  (9)
The total change in the potential energy (with relation (2)) is finally
obtained as:
2
0
0
2 1
2
1
gx
S S
S S
U U U 

      . (10)
А2.2 If the tube drops with the velocity 0 v , then the water between the
walls and the test-tube rises at the speed of
  0
0
0
0 0 0 v
S S
S
v S S v S v

    . (11)
The mass of rising water reads as
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 2/15
  0 0 1 h S S m    (12)
The total kinetic energy of the test-tube and the rising water is equal to
 
2
2 2 2
2 0 0 0 0 1
0 0 0 0 0 0 0
0 0
1 1
2 2 2 2 2
mv v S S S mv
K S h S S h v h v
S S S S
  
 
       
   
. (13)
А2.3 The equation of the law of conservation of energy for the system under consideration is
written as
const E gx
S S
S S
v h
S S
S S
 



2
0
0 2
0 0
0
0
2
1
2
1
  . (14)
This equation is also an equation of harmonic oscillations with the same period
g
h
T 0
2  . (15)
Part Content Points
А1
Formula (1)  g x h S mg ma    0 0  0,2
0,8
Formula (2) g h S mg 0 0   0,2
Formula (3) x
h
g
a
0
  0,2
Formula (4)
g
h
T 0
2  0,2
А2.1
Formula (5) mgx U    1 0,2
1,2
Formula (6)   x
S S
S
y y S S x S
0
0
0 0

    0,2
Formula (7) x S m 0    0,2
Formula (8)
  x
S S
S
h x
S S
S
x h y x h hC
0
0
0
0
0 0
2
1
2
1
2
1

   


 



       0,2
Formula (9)  


 



      x
S S
S
h xg S h mg U C
0
0 0 2
2
1
 0,2
Formula (10) 2
0
0
2 1
2
1
gx
S S
S S
U U U 

      0,2
А2.2
Formula (11)   0
0
0
0 0 0 v
S S
S
v S S v S v

    0,2
0,6
Formula (12)   0 0 1 h S S m    0,2
Formula (13)
 
2
0 0
0
0
2
0
0
0
0 0
2
0
0 0
2
1
2
0
2
1
2
1
2 2 2
v h
S S
S S
v
S S
S
h S S
v
h S
v m mv
K

 


  


 



    
0,2
А2.3 Formula (14) const E gx
S S
S S
v h
S S
S S
 



2
0
0 2
0 0
0
0
2
1
2
1
  0,2 0,4
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 3/15
Formula (15)
g
h
T 0
2  0,2
Total 3,0
Problem В (4.0 points)
Let Ik be the current through the resistor number k (see
Fig.), qk be the charge that has flowed through it up to the moment
of closing the diode, q be the charge that has flowed through the
diode, and Q be the charge of the capacitor.
Immediately after shortening the switch, the voltage across
the capacitor is zero, the is true for the second resistor. Thus,
I2 = 0 and the answer to the first question is simply found as
I0 = I1(0) =U/R = 1 mA. (1)
В момент, когда ток через диод станет нулевым, токи
через первый и второй резисторы будут одинаковы, поэтому
будут одинаковы и напряжения на них: U1 = U2 = U/2. Такое же напряжение будет на
конденсаторе и его заряд в этот момент: At the moment when the current through the diode
becomes zero, the currents through the first and second resistors are equal, therefore, the voltages
across them are also equal: U1 = U2 = U/2. The same voltage is across on the capacitor and its
charge at this moment:
Q = CU/2. (2)
Kirchhoff's rules give:
q1 = q + q2, (3)
q3 + q = Q. (4)
I1R = I3R,
q1 = q3, (5)
U = I1R + I2R. (6)
Integrating the last equation in time from 0 to τ, we obtain:
Uτ = q1R + q2R. (7)
Solving the obtained set of equations, we obtain the final answer as
𝑞 =
1
3
𝐶𝑈(1 −
𝜏
𝑅𝐶
) = 179 μCl. (8)
Content Points
Formula (1) I0 = I1(0) =U/R = 1 mA 0.5
Numerical value I0 = 1 mA 0.1
Formula (2) Q = CU/2 0.5
Formula (3) q1 = q + q2 0.5
Formula (4) q3 + q = Q 0.5
Formula (5) q1 = q3 0.5
Formula (6) U = I1R + I2R 0.2
Formula (7) Uτ = q1R + q2R 0.5
Formula (8) 𝑞 =
1
3
𝐶𝑈(1 −
𝜏
𝑅𝐶
) 0.5
Numerical value 𝑞 = 179 μCl 0.2
Total 4.0
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 4/15
Problem С (3.0 points)
Consider a ray AB passing parallel to one of the sides of the polygon. To describe a closed
trajectory, it is necessary that, after refraction in the lens, the ray should run parallel to the next
side. To do this, the ray must be deflected by an angle
17
2
  . (1)
Since this ray is parallel to the optical axis, after the refraction it passes through the focus
F . The required condition is satisfied by the ray moving at a distance
  F tg F d   (2)
From the optical axes. Obviously, this ray propagates along the sides of the regular
17-gon, whose side length is equal to the length of the segment AB , or
) 1 ( 2
      F tg d F l . (3)
The radius of the circle, inscribed in this 17-gon, is finally found as
  sm
F
tg
l
R 8 , 30
1
2
2
2


 



. (4)
For diverging lenses, the solution is similar, but we should only consider a
ray that hits the lens below the optical axis.
In this case, the length of the side of the 17-gon, formed by the trajectory of the ray, is equal
to
  2 2
1       F tg F F l (5)
then, the radius of the inscribed circles found as
см F R 4 , 23
1 2





. (6)
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 5/15
Content Points
Formula (1)
17
2
  0,2
Formula (2)  F d  0,6
Formula (3) ) 1 ( 2
      F tg d F l 0,4
Formula (4)



) 1 (
2
2
2

 
F
tg
l
R
0,4
𝛼2
is neglected (-0,2)
Numerical value sm R 8 , 30  0,2
Formula (5)   2 2
1       F tg F F l 0,6
Formula (6)

2
1
 F R 0,4
𝛼2
is neglected (-0,2)
Numerical value sm R 4 , 23  0,2
Total 3,0
