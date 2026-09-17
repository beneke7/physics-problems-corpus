---
id: izho-2017-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2017-t-q3
solution_type: official
source_document: solution-document-izho-2017-t-s
source_pdf: cache/phoxiv/izho/2017_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2017_T_S.pdf."
---

Problem 3. Resistance of a prism (10.0 points)
1. Mathematical introduction (3.0 points)
1.1 [0.2 points] From the course of school mathematics it is known that geometrical progression
terms are explicitly expressed as
k
k A x   . (1)
1.2 [0.4 points] Let us express k
 recurrently in terms of 1  k
 :
     1 k k
and transform it as follows
     
   
1 1 1 1 1 1
1 1 1 1
3 3 2 3 2 3 2 3 3
2 3 2 3.
k
k k k k k k k k
k k k k
p q p q p p q q
p q p q
      
   
          
   
(2)
This equality implies the required recurrence relations in the form
1 1
1 1
2 3
2 .
k k k
k k k
p p q
q p q
 
 
 
 
(3)
Inverse relations are obtained analogously
   
   
1 1
1 1 3 2 3
2 3 2 3,
k k
k k k k
k k k k
p q p q
p q q p
    
          
   
(4)
and, thus,
1
1
2 3 ,
2 .
k k k
k k k
p p q
q q p


 
 
(5)
1.3 [0.7 points] Calculation of the coefficients is much easier to carry out in series, given that
0 , 1 0 0   q p . The results are shown in Table 1.
Table 1.
k k p k q
0 1 0
1 2 1
2 7 4
3 26 15
4 97 56
5 362 209
1.4 [0.2 points] Note that
1 1
2 3,
2 3

  

(6)
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 9/14
therefore,
      k k
3 2  3 k k q p  . (7)
1.5 [1.0 points] Using the hint, we substitute k
k x С  into the recurrence relation and obtain the
equation to determine  in the form
1 1
4  
  k k k
   . (8)
After reduction the following quadratic equation is derived
0 1 4 2
     , (9)
which has two solutions
3 2 2 , 1    . (10)
Consequently, the general solution to the recurrence relation (3) is explicitly written by
k k
k C C x 2 2 1 1     , (11)
where 2 1, C C are arbitrary constants that are determined by the boundary conditions:
0 1 2
0 1 1 2 2 . N N
x A C C A
x B C C B  
   
   
(12)
Solving the linear set of equation yields
2
1
1 2 1 2
1 1 2 2 1
2
1 2
,
,
.
N
N N
N N N
N N
B A
C
C C A
C C B A B
C

 
  
 
 
      
  
     
  
(13)
Substituting this solution into (11), it is possible to rewrite it in the following symmetrical form
   
2 1
1 1 2 2 1 2
1 2 1 2
1 2 1 2 1 2 2 1 2 1
1 2 1 2
.
N N
k k k k
k N N N N
N k N k k k N k k k N k
N N N N
B A A B
x C C
A B A B B A
 
   
   
         
   
 
 
    
 
     
 
 
(14)
The derivation of the last relation takes into account that according to the Vieta theorem 1
1 2

   .
1.6 [0.5 points] In view of the above formulas for the k
2 , 1  , we find that
    3 2 3 3 1 1 2 1 k k k k k
k k k k
q q p q p         
    , (15)
and, finally,
   
N
k k N
N N
k k k N k N
k
q
Bq Aq B A
x



  
 
 
2 1
2 1 2 1
 
   
. (16)
2. Wire frame in the shape of a prism (7.0 points)
2.1 [0.8 points] If the vertices of the cube with the same potentials are connected, then, the
following equivalent circuits are obtained
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 10/14
and easily calculated using the standard method as
Ultimately, the cube resistance for the given connection is found as
0
12
7
R R  . (17)
2.2 [0.2 points] Visual symmetry of the circuit and of the initial conditions provides obvious
relations
k k x y   , (18)
k k N x x   . (19)
2.3 [1.0 points] The algebraic sum of the currents entering a node is equal to zero, thus, using
Ohm's law, the following equation is obtained for the node k x
0
0 0
1
0
1





  
R
x y
R
x x
R
x x k k k k k k
. (20)
Since k k x y   , the recurrence relation holds
0 4 1 1      k k k x x x . (21)
2.4 [0.2 points] For an unambiguous determination of all values k x , we need to explicitly specify
two boundary conditions. One of those is the initial potential defined as
0 0   x , (22)
whereas the other follows from the symmetry condition (19), which is valid for any k , and, in
particular, for 0  k (despite the fact that the node with the number N does not exist in the circuit!)
0 x xN  . (23)
2.5 [0.2 points] The recurrence relation (21) has been considered in the Mathematical introduction.
Therefore, you can use the obtained solution (16) by setting:
N
k k N
N
k k N
k
q
q q
q
Bq Aq
x



  
0  . (24)
2.6 [0.4 points] The current in the source circuit is found as the sum of the currents flowing from
the node 0 x :
0
1 0
0
0 0
0
1 0
0
1 0 2 4
R
x x
R
y x
R
x x
R
x x
I N 






 
. (25)
Here it has been taken into account that 1 1 0 0 , x x x y N     . Substituting the values for 1 0, x x ,
results in
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 11/14
 
0 1 1 1 0 1
0 0 0
0 0 0
0 1 0 0
0 0 0
4 2 2 2 1
2 2
2 2 1 2 2 1 2 2 1
.
N N
N N
N N N N N N
N N N
x x q q q
I
R R q R q
q q p q q p
R q R q R q

 
  
 

      
         
   
     
  
(26)
At the last step the relation (5) has been used, 1 2 N N N q q p    .
2.7 [0.2 points] By formulation, the input voltage for the given circuit is
0 0 2  U , (27)
concequently, the resistance is found in the following elegant form
1
0
0
0

 
N
N
N
p
q
R
I
U
R . (28)
2.8 [1.0 points] Calculations are easily performed using numerical values in Table 1.
Table 2. Resistances of prisms.
N N p N q N R
1 2 1 0 R
2 7 4 0 0
3
2
1 7
4
R R 

3 26 15 0 0
4
3
1 26
15
R R 

4 97 56 0 0
12
7
1 97
56
R R 

5 362 209 0 0
209 11
362 1 19
R R 

Note that for a cubic prism with 4 N  the resistance coincides with that previously found in 2.1.
2.9 [0.5 points] For 1  N the circuit is obvious:
but for 2  N the prism should be additionally closed as:
In both cases the corresponding resistances coincide with the values shown in Table 2.
2.10 [1.0 points] The limit of the formula (28) can be found in various ways, for example,
expressing
    1 1
, ,
2 2 3
N N N N
N N p q      
    (29)
where 1 3 2     .
Then,
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 12/14
 
 
0
0 0
1
2 3 lim lim lim .
1 1 3 1
2
N N
N
N
N N N N N N
q R
R R R R
p
 
 


   

   
  
(30)
2.11 [1.5 points] Evaluation gives ries to
0
1
0.577.
3
R
R

  (31)
Then, we carry out the calculation of the relative error of the approximate expression for different
values of N listed in Table 2.
Table 3.
N N R
0 R
RN
N
N
R
R R 
 

1 0 R 1.000 -0.423
2 0
2
3
R 0.667 -0.134
3 0
3
4
R 0.750 -0.038
4 0
7
12
R 0.583 -0.010
5 0
11
19
R 0.579 <-0.004
It is seen that already at 4  N the relative error is 1%. Consequently, in this problem four is equal
to infinity!
4   . (32)
Content points
1.1 Formula (1) k
k A x   0.2 0.2
1.2
Formula (3)
1 1
1 1
2
3 2
 
 
 
 
k k k
k k k
q p q
q p p
0.2
0.4
Formulas (5)
1
1
2 3
2
k k k
k k k
p p q
q q p


 
 
0.2
1.3
Correct initial values 0 , 1 0 0   q p 0.2
0.7
Correct values in Table 1.
Table 1.
k k p k q
0 1 0
1 2 1
2 7 4
3 26 15
4 97 56
5 362 209
0.5
1.4 Formula (7) 3 k
k k p q 
  0.2 0.2
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 13/14
1.5
Formula (10) 3 2 2 , 1    0.2
1.0
Formula (11) k k
k C C x 2 2 1 1     0.2
Formula (12)
1 2
1 1 2 2
N N
C C A
C C B  
 
 
0.2
Solution (13)
2
1
1 2
1
2
1 2
N
N N
N
N N
B A
C
A B
C

 

 
 
   

  
  
0.2
Formula (14)
    1 2 1 2
1 2
N k N k k k
k N N
A B
x
   
 
 
  


0.2
1.6 Formula (16) N k k
k
N
Aq Bq
x
q
 
 0.5 0.5
2.1
Equivalent circuit
0.3
0.8
Formula (17) 0
12
7
R R  0.5
2.2
Formula (18) k k x y   0.1
0.2
Formula (19) k k N x x   0.1
2.3
Formula (20) 0
0 0
1
0
1





  
R
x y
R
x x
R
x x k k k k k k
0.5
1.0
Formula (21) 0 4 1 1      k k k x x x 0.5
2.4
Formula (22) 0 0   x 0.1
0.2
Formula (23) 0 x xN  0.1
2.5 Formula (24)
N
k k N
N
k k N
k
q
q q
q
Bq Aq
x



  
0  0.2 0.2
2.6
Formula (25) 0 1
0
4 2 x x
I
R

 0.2
0.4
Formula (26) 0
0
0
2 1 N
N
p
I
R q
 
 0.2
2.7
Formula (27) 0 0 2  U 0.1
0.2
Formula (28)
1
0
0
0

 
N
N
N
p
q
R
I
U
R 0.1
2.8
Correct values in Table 2.
Table 2. Resistances of prisms.
N N p N q N R
1 2 1 0 R
1.0 1.0
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 14/14
2 7 4 0 0
3
2
1 7
4
R R 

3 26 15 0 0
4
3
1 26
15
R R 

4 97 56 0 0
12
7
1 97
56
R R 

5 362 209 0 0
209 11
362 1 19
R R 

2.9
Equivalent circuit for 1  N
0.1
0.5 Equivalent circuit for 2  N
0.4
2.10
Formula (29)     N N
N
N N
N q p  
       
3 2
1
,
2
1
0.5
1.0
Formula (30) 0
3
R
R  0.5
2.11
Formula (31)
0
0.577
R
R

 0.2
1.5
Correct values in Table 3.
Table 3.
N N R
0 R
RN
N
N
R
R R 
 

1 0 R 1.000 -0.423
2 0
2
3
R 0.667 -0.134
3 0
3
4
R 0.750 -0.038
4 0
7
12
R 0.583 -0.010
5 0
11
19
R 0.579 <-0.004
1.0
Formula (32) 4   0.3
Total 10.0
